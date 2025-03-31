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
    "2A8gL43nREydPVqu6D2X6jVQN5d9JzpnK2JE1XqHNyU3nGoVL5KnVX59oBXCfmhWPuS5ECUieCdWVfKH9JVgAEiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwBLPZkQQJY5SnJhjG5SFy13oJLJa68aCbJCixXSjGtQm4FKsRJzpN8yFox5WE7XhVNwwLybwEMZvAUCr7YnscB",
  "key1": "4JLSAbq6Ai9k6jWAo274on4oegvFofmJTm7uSgH5LySfj4YruK358kqs45Mq9uiv8xt6WuwZA21KJHfUyWgZ6JY8",
  "key2": "5xbYAmGHttHC2H6jQPMR2Ah3Q8AQZ7F2yVPQLeZ4Qmc69pgP4rckjdytvafgoqWS2vTSXvx7CRSkCFTAG7PdFMhP",
  "key3": "2UySgPbRTJEyFrewCemgDRQDTwF3iVogkwm7sBh8urTRRqFQGwrRAUqfLHQNpvaH7eKrni4zRpn3H4NUaitp3sLZ",
  "key4": "4uKpUPsipDAWKbjFBapZunLCxEPTdWSW2T9Mx8SVJvpR9TVsGLp211PRk9bjkg84xwRvXCG84gtgdhvfYcPLWmMt",
  "key5": "66Vp7SJmZhk4nzj7jbEV7b2JVUc9PcPW1LXqwtihdB43ghZVaDtVJmkxBUuNoPszS5X3aL51SZxyt4Vpu3tba9BS",
  "key6": "DJGzwdHYSxoVu386MJcktZPCoMm5xLCkcc42QS9rTCfiawbpknvyfwFekQi8gZnET3oCrS1AnBZ9L9F2tJTaoVw",
  "key7": "4uHTagzocKVTDr9LE6QCTXLDZC3cmQmjo62bj4PBByaevnFv36gUMWNfGo8ZrJ6qJBhTYDDfyUUdzaRxGf8hrjhY",
  "key8": "32xNy21j5urYu9gEbYos1DghUtMvGo6V72XyJ4f42xL1ymrXqnyfM81U22Da8kpwwXYcoW6xQnGdC6NTQ11n6Kwu",
  "key9": "5NYisUxZXi8k9S6puPE8tvnLgaeJmnLotXMpZo2fwWEToAwkn9HFRaqYiKZFifbYj8Frj3DY5iSsEJRL9EZ26bsU",
  "key10": "2ypLBospUdFmtDRZpPTUmoPMGmbn8YDYfmEXWu6JeS7kwipVhjRaYwNRV8pmk3G82ZFoS7bXvFW8CxAMmUgP7J6M",
  "key11": "359fG8JHjqzRaEGQ6DpKjahWKn9BzXBhDddX42taqQtQ5ATuue2zc8yjSstpWb9MRH2qTQFrVmg9ZPTwjAZDvEga",
  "key12": "2LSEuQyVfjMfaxNm7aR9s6ZeFxvYAcGMF7BAs5k4vWdb6JdF2srNDB72Cke2wd5aY1CXP7an4xHBYQWKq6b847H",
  "key13": "36EfNxX6rYSwwx1bkwu2QZEGykKe233QqaukCMHVEGtwGnSBhnM1nBra9WrtsLMWh5t1VHJqehzm24iYv2pnFH6X",
  "key14": "2pGRYaFASsH7smNyQTzCKN4frbCnYWso8SsUywVKaYo1aSdxCTvEFigvRNrPhZP3KpCPViBcfPwABpjcyPacwVfJ",
  "key15": "CbPqi6qoTJttE5Rhmqrj998UTCE7csEAV8RJm5xtJ2fzQ4NAx7ojR9CUJ6RSVz9tp7RatLYcUsC5N9KCAn7tj9N",
  "key16": "42SHS7eikM5GsnHGcjBK4bpJ2jFsd5Cn54E2fCcwbWNyAC6futAy9eMKWueHtzQkRM41d14jG6uuGMRZ83HbpFNT",
  "key17": "3onJPhpzUPxAfhadAbsbmxRDyY7vTw8wo7BjtAKHKdyRmQoKWNvpJzKTWFLSkN8cVt9EdNYRWztFnLGmMn8QLDJm",
  "key18": "5Qy3BXdYSfCxUEoLsbrKzW7jir3qRT1MPsFRATMUr1hX6D9qgdh51vzBqMCGKcHLZ19ZNhxoBPfpdGwJ8By6LwDb",
  "key19": "5oZ4pVk51LaDCQX1Y8TDAwoPX7utm4v5ksWAxyoE3z2pnZKeaA5UBGjZzdjRTQZC1tY7uwSURetQCnYMu2SFcoHh",
  "key20": "QsQDwDSccBWcHTFM59WGNRJtd33g3o6ti8E79hagp9Wa3i7RiVAJ94tVDU63LpmqrE9cPVR6XKn3bimEP3mveVH",
  "key21": "4QAZrXanM3U5KUvmu8WFxedMteBU6yistgNvPN3JDLSEWbf6RLCLW85knvd9PaaASSiJZVsWegy6FK7gGoJPPgq9",
  "key22": "2Yw94dN98RQCDN14LRsYK8NY1CWaLsba6MVGsjMvz7BtC3zjd3WXFTt8s3qnnQYFNS6wqVaPb6Ph8dFzsQfEfvG6",
  "key23": "57k5H6HGsavvnQ2SJbxRDS9uLNvBn1HfF8nVpP9qX3khzB4P4GLQdexcELLBJc5gxnhEZdLKX8yYmMKZkMVYQoai",
  "key24": "2ynmWFd67sg3xx9ppwLSs1s4rgc3ZJAqkcSBCRhvARfzdumf2fFZ1hN9fSvwmZWtMJJnR2myMRXDEkBDRj4bZuR9",
  "key25": "jjY2urFhnQfpFcdTzrtBrQ1C86yvHPuMftY8MXow6J55rYdazvW3PWALDNUBrdU3SfPiZvYPAk21MMh3TmwBBBK",
  "key26": "24PLTKYMPAPp49UcMisRCycZSFhLmBJ8hwhsW5MzKdaLu99wSXdsWtfLoPUBnbN9hxVZvPjcw2LKkZWh8xv8LSpc",
  "key27": "5BBgezP6kJnebskfGPHWXxahBF77BB5djUcDoQBxuFYLWg6QNRvpLZwD7GGNhfifDSzKq4zQ289UzPr1f56xHkKS",
  "key28": "4hLf4C1JTELw7XUxuwWi77a89wUnoic3RM3eRggRzN3U5Gxn3Egvf4HsdbAshQCfaCKUsELyZSeK1D9rjzWCFZY8",
  "key29": "3m2bhabtBBNDCyZiJCgauNqnAKHUyA8MdRiiydcVe8dCY4a4NKpry9uXPvyCLV2RZrAxtTgYHR3KfMShdVHsHRt7"
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
