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
    "3rhQPtmeUhHkg9JaTnjrz86hMwpRGf8n6mFCGuAe81rAB7CfG8buV32D5CgRQgFHEHwpVTM2Y41N3q4BFYTct8fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "257HHXfgYVrMcs39hktqV9YzPcyTejzio8r6JjRnj3c3SgxzmmQDdMmSDm9FAGcKJLtSo6DH36fkgR9ma4QUix8z",
  "key1": "nBvpWTZCvSHjaJAQR6cWFTH6esDCJHJRPz4EGq8KzpmyEFUQGyRSCGvcVnn52AKzqg1oCrGGTbD19svSvVexeDZ",
  "key2": "BBTyJLMTLNXEk9DnhT8LdyfC8QD8HTYqcguExHkLZ83XScgCcBv489iAooKx4WmLPWnEsmu9JT7aH474XzwAqGC",
  "key3": "5juZLAXuew2CVBGSJPNZhAXvfeBQByAdLvkfK243zdfPN99ox9rX13VhBUZogvZNBiTzz5VANi3GSpwHADSHWYCT",
  "key4": "qKJBP3iNf3UZowq2VdtKAJWZ4WTyERRkYtHRV8fQUjYHVEX3Z3NJoTay7QwJwK9VAwY9icV55psduVKTaGubqDa",
  "key5": "1gUTHwCr1vBfxrbAC2VtvRFHxqaNNnmWs5SPUSfAFzpZ7HuQ6VPmQimygxJc9XrLEf9Kx1fFf7fP7Nm7yyMVgot",
  "key6": "3trDGobSaWquEAjrarrSQ42DyracbhVAn6VkFibk9dcUCWXhgdMttQHHG9BMLHHS8dL1aKdQ1SSdXgtMQdeqnVBq",
  "key7": "6edGEjApsdx2V7m9q42YiGxdLpEK18UQe7AtCsU5P9XHQEepPXqJyyVKRit5DnD4gAFroe7kUbW8C1W2o3rDMsu",
  "key8": "5w7roa83GEMTgSJwD152yXCceZMjrWXYbwrtJmcv9jYayFMeuc7JMXFwcRprSxarnwGi8cToctW8uyAfnE5wE8uE",
  "key9": "fydfEoZoQi4kcg18RyANfLgLCLfF8UbtaxA499744sMasstFre51etbL9S8dAw2XAoar8Tu7p4dczYqhwwhgYgE",
  "key10": "2eb9vVXU3sp2BELZQSripBS9yrtehvApCnUCwPjoLMK7KCccpfeyuVmEyTvy6DC5bWtnPLvyMtaabYCH9aEsZwST",
  "key11": "3LXpd9Z4Ch29mom1nhZvYtw6hrScGTG9hcPB4twwjquy5VHX3JhaDG91r9jDvFD3aahBqmZtyYNw9uCy8dyazKL",
  "key12": "312vREvkcZFWsJWaUma4GdGd94vmnNMsoFXvNUmghvmLrFzFi7byYjPZk7jmyNPAy7bxfyHYWyGGzukkspQeiPwc",
  "key13": "o9RqX66QPaX5qU5oK7aNyKSEpa8P9jzoNdDwRFwexYFvWTgdNPm2uGgumQXTmm6ZtB2EYVdN8PuTtF5Ki49xB3n",
  "key14": "wKu1e8ytZP8Lc7T1vqhCd6Vg2jw4APRrEgDfbuybt1CZVVWRxJcTXogyonpw7fx1AD3JNXr9xZa6rPP8U9TCQ6K",
  "key15": "4cUNbJvJh2oFfzqQBZZ1BDkbh4XbkFpuvPxZGntW3zVaeaxaviNYpjAMRnbXB4sDcCsr4RXva4Vy6YX1VP3qNhX1",
  "key16": "669vmesYc8wxMSTUJeoSHSMTPkB64LgGYXM1YoZVgQt3nde7iZnBnsycSXbkorLh127qy7KCvKaFnn6suV3eVnwD",
  "key17": "5P2HbQ5NibDNkrQqYKePCbmFFiY1i5KKthgQWWTZRg6bXfEcJziqBoiyftRrMTUnsgqDbaspM1Jd3M6DHw4d2iJh",
  "key18": "3GkLGphZT3hExbpLzVNuK6c4Yq4eVWhkf3t8yE6vYHvx19i36EWUnk2KC5T2ecJ1bnNCMK7M1JfvoWxF9bNLSWmx",
  "key19": "4c8ZcWxMhdJ5XDZdGboiBQfWzmim22EVx5jqT7hajjZVGsqYFwLfGmvDH3g5MBxBTu3zPGPGvfmRiEnZnDo3xnST",
  "key20": "yyCD9EL8cdgDE75GqsrWtuxpGKzsX9XviLmby78L2sjXrVsyr4fWu7mRdwTdQ2goVzLb9yquvTwWTNDBAKKTVbT",
  "key21": "5jCqzm1G1L8bEsxWwbA3FEMVFSDxh4Nrde4PK7pcfXoZG2WgFG1y45rp8JMv6M7XBmFvd9MT7hfQXfuYhGmQMrbg",
  "key22": "51YL3AAAFVJrmGXAAK3LKS7u9NarKBt7G7yds32vkuYMfSom2oHMko1XWqRnxH1Refdi9cbkcKdkBydpYbpj5vza",
  "key23": "3h8wYsdsN2RoagT9Ei4ozGvKPohxkz4eGCTzcS3NTkYvAKZf2i89emgrGYzaYm3A6t5NM7XA7Nfs3MKyH9HXavWM",
  "key24": "2rkByD9R8deTCyeFMx8gKFACD3G36cpC4jWeynKRYpUqWQ32kwoZqgkiZTYsarMowL8Mb7yNX7Ry7E68swUFA67d",
  "key25": "5ZdM5USSvVbpgeC2toHsFMKuTwDiT1xhHdzpjgETmfPKYqybhJaNTQGD8PdWLX8zvFbWmJHQJUNen5Wc49m6Gba9"
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
