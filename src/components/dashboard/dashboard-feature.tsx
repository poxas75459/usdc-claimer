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
    "3QpjLVSY5SR1yq6X8HauDEP7BuvRB5iTgD7XTBERkJMDh16dSgpfWLzQjFq5PM4oRohZDYZuRYMmd6RBEbHk8Fih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ieMu9PteUtcyxQkKHmaW5zhUaAQMPhbrwbirPaT3GDP4Qqjk1ZPgzoXunAsNyF1XuKxHxD6GaaPGQoPnkzbKvok",
  "key1": "2JgEE3RERpz2pwCz2HmiiF4kSaxrbA2Zrx7AstvLhB4Qk8Tnh6anjcjmLPGyTgFAiq8DB9PZug6CtLnY1vEYQ3R3",
  "key2": "3ZKfTs7PqzZN2WK3BNLCuzmgpeqpmqJracKNsG5u6wzbToT58DqnCUCteGtjyW6Er9nPT312RcL6hnRV9ERHXhG1",
  "key3": "5oqijRGowBdASRDwrtTNTYQxm3sjHy4w4zbUeAH64LhmTRhT7f4i5sn7WCaFHEvQSLQUCZuWKwYk3GzXeZB7kN6k",
  "key4": "ANLh8ZvkCxGsodu4zWaCp6c7sVDPy1rECGQQSmawcGCTpqp5gHtB66BA4SF5RxfSXNMLLWM32KGHpaLdC5mCYZB",
  "key5": "zL2hw1i1LjdcN893PyhJB5Nu27y6xXYowwdCLLwd2FRo9FKHWXwi2n4YsTyW7LiA1HAwpw24dnVCFWFcLo6Zjwg",
  "key6": "2VaHtP5TfDpnT9LbuN32GP6QzYWDujrvVUxVrL7Q9iUnkM6d54Xxi9bbGZMJXiJYWV82vJvHjymYRdZbwMwKMvBm",
  "key7": "4XB3kyfV7Hi12aeafmV1wqBV4fGSXX6oUrxzmCdn6c3pJ5Ab3poKsokCaARaFyNawG9wEvYqbVGkchxVEtiwAw2F",
  "key8": "zbV1hBYQptnTPfRaBFsmF5BeCqrLoabuhUzWcbGNNGdgZnzMnpV2piQTA32xD9seqWwJcyo6Fe5FRCHyBvgbamj",
  "key9": "3mcLmPtH5xtebNJkphwtt4TdHLANT8zK4RRFGUNEgHNQE3Yg4gkjDMUZKqURos9dypFEGssPx77U4NzvLisJsLBN",
  "key10": "4NmLuhRoQ2c1KrEeNpdzrPFzgwqr1CQZGztnP9bDmqewqYGrZEAYDrTwzag5bmyxPtJjXqntGeRc1xDot4XwxVDH",
  "key11": "3hcu69f9qgYQT36m5HjTwWvunKHGiR9Zxsz1t7zCVN6GikwfdJVqtKGzPV1DvofaNzAT297Zh35KjyWV2zuzCLSq",
  "key12": "jkA3eo15FTq2mzcJLgCgcCPtN3Y2bc4GnyzLaDH2fd6sdZJsXWU4uMR5yCk6DNUZGHejXbQokvkKT2GBBpt9zYZ",
  "key13": "yKbHYvquJQp6vvpTT8f96KZDmWzGaMAUDehaZHqdhyV9b9AGjxgjJtDmWK7i3qULMJWaP7Y29RtWUxGEY91T1W1",
  "key14": "4fWGGSW22UFeucrTmmWfgrzUt578AJDZdKWcuofHPNDR2Z4kCuGZ7333C3wQJqFmP1SZx7mL9oWtczx18mpnhVS5",
  "key15": "GbQfSvyWmaHxwFdCKKcdtLKjF3A165tkbQ7KiUezraKnpcsYxa8N4rKBX4sENxgEJ2CDnqrRuXtcvAsjWF6ktEQ",
  "key16": "ZJWF6C8RGAnsnjySB1By8rA4Z7FZJi1je3yQAFG5jbmmHxtyTsHHG8YGMwwXPx7PMwrn2iMyUMP9RrrRjFtnaQX",
  "key17": "3SXid7SBz46xTUrrNeDDQeEpVn6F5Y2zchj77VDSvabKCXVsqhkNoTyzV3ysBEWssNbsRZZkg3QWqMWkHoWVRLM1",
  "key18": "22GVJqboha3zJJS5qpkbQV7ACCft5gxAFxsBDG7RGAVthmHzjdfYc2qDocvU7ogzxdtZtEw2UJSLNGgK6tzn9z8E",
  "key19": "5r4hsnxEyrnXyY2eHac1nzfLE53KNJv6htvtZJxy4QGmUUXMgwdJBq4NPfwney7ee6rBjX3gp5pGAdUaotXyNHMw",
  "key20": "59y4sARfkhsBUc8M9fTPZr8dBsGiEiAFpBRJ6qERMeua6iS5sQkgQD5CSpkrXgyS6k26TVRCwMTYkoR1zzwHQby8",
  "key21": "3u63LAtWDdrDCrysHuh3GvsnUNaUYFCc3rqtCg1PM4kgEC2rjbbhqTfSeXH863GBBqeZbNxXWtfKRCuK2W6QwpS5",
  "key22": "2fibvERv2MXdm61TMW8gQCRjjt3YasYH88HNzV91wdmAD5hyYwQCy771KUjUNHhvYuYMHCjDn2xpEY1aEKEpeQie",
  "key23": "5Nfa6dzLm9B79drx3PJnhoG3XVaNVYPdWs773ZT7fG54sAzXJvijcTDofpRdr2ZpkNPST5pgbtz4ssMTBJWtLgvo",
  "key24": "2cnuZ66cLbawfGE9Pj2DbnC4T6BhANfm6ZXsy4enNfbNm1XDhFZBd37jfbVJa6V3gzekEbH2tYbvsyNrJABzNZrE",
  "key25": "3oKja5fzWC1sPwYL9hXAw9ygSVJXjp8mpVhnn4cQSVY4CsUQnUU2T867Sv5mJuHTfgJikkmRypySG4JTGFDaxx7p",
  "key26": "FqCiptAVqkzbXCsGkNuEvbdLmn1pAX7ku9CojYvNFcwoh3qsDxb5YBpDqQC3X32dHfshHoaf8uCKySMcwoLXxcv",
  "key27": "kScpAQfDVgpR1LxCqe86f8yc8vumbFKJLM2vw2zzSKmw7kb3HWvGE7HvE2LXZVvsXuQaXDnxdJQcwdA5cKT3bCD",
  "key28": "4wuSugDaiEAEYWkPwkBk1KjFBRwdN4s3ZM6Uv62rzXHPp7QcQCAcy3mAdpqUkwdVZFqKn4bSRpSua6gtZWTXKmpZ",
  "key29": "5DZQGaij4X2haf5J7YA3G6jNWbdE8STbkEwqozXoBwK4g3ZSeRb9HH73sGkCVPUb4MPLhTE79BAHW6Y2LwC52R5c",
  "key30": "4c7A91LR5mWU2JHdvhE9CTrEcTHVBcW63j5RPrWHsyJvuabiawjSDWyWBS2M635FSh4G7ZKJmwfeQxMnrPAuvyhN",
  "key31": "4ZKsiwpTrvt6uTJBbo9JyASHpmwj9W4HKTuRZmvV3wdTgC9vjFHMBTCtnFiMvHt9KhDTwGrpXBQNfp468HVeSwqE",
  "key32": "4sTKbEhDPr2LnDDK1a6v3mCMcEdhvKyZeh3wRZNiWRmpq3oapK1zUKGoSBpPxTRtWn574Q52n6PnGv3yDtMVYLH1",
  "key33": "2RhBN4557VvgM29JT9dnNaVn4taFSrd48ELRXfFouqWpd3HR8QE1WpRT54EbZotdPKf1DbbqQ92Soy2Bh9dG2BZP",
  "key34": "3cQq4Jf3WMqkkDMFPGRz7EGB4E8pQsmoLfyKLqmKSfwFrjX7ZYSNvmzzBytw6kRHHkb2pu4EEr6C8W6Bo5kY3ngP",
  "key35": "LuHoFEELFVMebWobxfaoUFdzW9SPKpFYn6iaEBCRxJqWes82GXcGboidAUbqHWpapnCDceNY5VuG7SGkR45ZmyN",
  "key36": "4xdn327Jacr1YzHwhv3yz5FFSuy7iU82MbqsFRh1mP8JtcQV29NP4SwKsfFjcx6raLQ6MYvmsr5pKzLT5dSHkqYd",
  "key37": "5d1WmdHwSfNUhW7TKP8kYVEUkQkKuHynaf6gDCmYtcrHsZEkUYBsRc9apBGfXNpbvQN1eEJaYfDmPrEeJJtpqs7a",
  "key38": "QAgpsUw6qrU6nb7qkw1BjLkbf711Qao4EeYRLAjsnXdEjdFsStpb2W7v6uS2u56pGGEmbQvkgTGqn5EbVmMWuGr",
  "key39": "59iaYG2zE8QzpnvVCHPFxEwG6EDepz1CB8ZBAySgF3Azrp4N32firqnAKWahzQF7e42ERmWYm5uzmGhsgUcs3J51",
  "key40": "47P1AgWASBpqny1A1Hg5LCGHSYJhsfheNaKUEEf1DkprjkuaCdvRUBv3DsryLTi9hxft2ZHtuWakfEe9suhQEXUJ",
  "key41": "2V5mqPNrW7bZq5n2grxNBYkDNL4zNhfsb7QVJdzzPHyHtqKffxrHkF82qSxK4wu87odjDFQhaNbXxCRmLBCXU9W6",
  "key42": "5xeCsMDgSDPTZG11HbEbZmYXjAmVjaPLmuubzt58Yv9rLxxWDSMR6Pk611Fxag2bzCK8nRmPW3YW4akaUhYBvLuQ",
  "key43": "44iv3eaLZs34zCDdeor34CDigr9Vwyju7komMHWhSzQkbVcmw4SQa3sHHscgGhvmtEstgaptMYAtc9H8NMTVwaAk",
  "key44": "4WZGTfbnujvEkJnFL5YDN28zg4B2qE73YHGimaUAFqXCM9Aj9YXm2fzPbLtiS3KU7KBVsSPdhypdZDWR5fd58zb8",
  "key45": "4t2oJW5HVn1JTzM9U7RJU2TGfDXffzyihekfDfXLBJmCEJYpGa9HriayCAY4VXnWv5AazRpkZzEQMMr9UyGmc9AG",
  "key46": "4sCmxvxpgL2zQA6uBeRcR4EcRwtaWV6frqNiEtBcSz3gafLxC8D5bKhkkndmczMzubKLLEoyBqcnD5eoWtFRNyAz"
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
