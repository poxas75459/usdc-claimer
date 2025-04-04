/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3xunRsEbT23rM69M3Q5nVad7gcwqByhpUwUSYY4s6erzBhndcs42ziGuSEcBaz8DmZMQN4ByPWmg5JzGm5gsSmXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTTP2JZyneQVtCgL3U2hjLB9hnGjirRmbDogSMmKdH2SMib7DpR9PojcWBgo8Nt8v1ypHD7coSwNqLrvVApPYET",
  "key1": "2agJ2bytdniD3BaasX6x45ti1C2QG4RGjuS1cnxAVmynSQWbzQFPmC15CqkPMVrKHqyUzxFY7ad7JweZrybbonSA",
  "key2": "ou5hwi71w49k3FqwWWJLiznLLpZcahmX66VEKefbwYFkvUX8cNXuaKkMXmc8zbMRSvqfuteiR6meDdnv1X7kGzc",
  "key3": "3j1YgLqCVN3RUCtFPrYiEMAwYoPqtTcBVKx3WXgtoYk68FLB5u63RWRLo6dwZUUD3jR9ob9do89WFsKYhtbXCH8T",
  "key4": "5spkNCymGLMJB4qAvJaQw68qnk6aZTHu9ZTET1oMYqDRNx3wTinsJRFqVARmwFRiwPvvHvapCLR31en6B7cs3YBa",
  "key5": "21oqPZfU3fN69QAeB5SKyNGriweUcwHacdurx9s5gHQbBn5V4ejUPVGd4DGyojvxtckgoaKNJWb3T1RwFQbkdoan",
  "key6": "3msReNoatQJ4UkFymUhRawzWbas9dGr3PjuB1B7oSt2pSjGSoToFgZbirxtdY8hwDf3XJXNUoosP3L3K53nkvZJB",
  "key7": "LuyqtNxwnQ51VBrcvGZoFohXDfk3A5xUUVD6WJtmYqf5a3XMWu46T3pp1Fe6hy27a6zkeP8v6qrcorGJSuKbcDi",
  "key8": "EHDoPPsiajMjnZCfTEyc7nTZaZvFfbTWbKXdKzQtJy7p5DW8ityAoyPBV2VtCGD4FoHp66c5Pu4LoVWEDASXBnR",
  "key9": "2p4GkzNtu5yFKS4Xyc8DgczcPV6TFh9XzHqA9wukPviY3P1t6JXBcJDsxu7LaR1beFtw7iVh7NbchBrahgoiTG9v",
  "key10": "29ax1qjs2hbPFLdtQk1oZd4uTF5B9GhND1csf7BWf7UxrW7raD9sL6K8aFZW7mMfg4Nxi3wRpnzq1grDNLDGPzNR",
  "key11": "4ekCwiJ6Kx66vKV6w46Uoee3Scs4n44hL9s8CpYNyxh4SE7xvMWhfLQgVkAAc4wZ3BBfKnNUcs6yyrKPGM9iBufC",
  "key12": "qYpP4HRbQekBw4wzPFFpLDtrpmrErNFD8Nd5a8q8L7oiyrcjf94r2ZaNzYKuaZzkA5TejbT3jkD9Dv6gRRQi3UP",
  "key13": "4xu9RdYB2Wp6w9inCvpd2HYXhjSeaaDC69qMNY3xu9Np5DQE2n5UYrJqoxqt13twSZn9FEqWbEjtGxQ44YvLB5rY",
  "key14": "3r7kXtZziYsty7H9TPfLmCQ84JPf7sSrt2qQg9pt4PrE1JwN5jApjGR1ohxu13upCY35xvyPez65reTjrzQYEYTe",
  "key15": "5ReTaHGJQ6rwtuiZPqttMN2xz8d6QZc6H1TNSHCt7dnkZMCtrYc3Xsq1EaMT9Cto3XGCcdPDiJhsnPJ2fxDhdwtf",
  "key16": "5GZ7F9yZFKuN7wkxV1gXLwE4qgkGKodzqDNYbmfXKN3itzVXBq8kcS6pgHR9qXJQ23P9jwve3CGAUuqPPoxEQUZv",
  "key17": "78W4D13hWGDXgv2ASS6PfS76tAvNQ4gGhThk9SrQkADBD42A7ocFLJ1uFVM7bbDRYX1MGyrQ1tjBo49iRMv1ViB",
  "key18": "5eymK7vdAvTNsYWs9xG8VXjJs2Jy1ZoLASFfKvGnuds7bkhTqRWfrGumUpsNciS6whkbHKhnR76PEdX7NmakYKDb",
  "key19": "wRVmCBsqLwtR9rSbnVyrMwpn1CMo495x3ti4c1FqGdGe6RcsfRNnB8TG4z4AjoVsmr7BXXuyz6EckmLhPbiL78P",
  "key20": "52AxhTe4Fdm9CkrEhhDrqGjLTFQaGqJuqYPDv9hQpKrPzV887fGpbp3fJNZmxyBfwAJdriV7DX1WfDgEFg2V3wh2",
  "key21": "cETr1fE11q7whX5ZTLYouw4k1Q95dVMYDFEm8WGH3ffaBxjMjEDzDtpq2gEKDTTNAotPRrxgJpguiZbVxtdJyQn",
  "key22": "5aZSyL63XY3KPCw8mhTqQaUYuaMQNH5Z7RciUFfk1VCwmW2JYuHwTSE9EQjbNp8PBPtgGvh93dTS9B9NKZJPgU42",
  "key23": "3aDWWGb8LudZrAb9EpXDj6Z3YhzGnvDyooVVYrMRg3EWpXhk62QruAiagEPAtnVt8KBDWSgn5innxUZvDYXTbXKY",
  "key24": "5QXMDxk3vMirLok6cNUhcQDHB1PduKEu6g7wRkjD6bhRw8H4ifVDbW3Vgso3LRDUp1TxzBo3uEDvoyYFmGPhb9Ex",
  "key25": "kJSLCKiVV1SMNo2xEUntTV6ZYgGUQB4E52YGYWbeae3e5YMEXjyCtGFQio76VV7cCFX5jAaJqgkv7YrehxoNQN6",
  "key26": "4TWifA3Tn8pQQhJUPfji6WDPU2gdDMzs6EnTzbcn7bmdRbGXwnfQHjPSfukZWaBGwYiozeG8JhVdS68oBAgkwAze",
  "key27": "6yZB4Fy4cihEZATcw6m1rZbRh3tfBWEPH4DtrHKbV7kdo1Udao3N3hWScE9gL5kWbBf52xMb1SizdEwik1VukzB"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
