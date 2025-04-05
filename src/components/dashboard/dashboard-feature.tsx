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
    "2AR9zyDyAXM9KzDMnYsjC2kRPUvYKatgYtkV3gMgdFRSJKYe7e2vP4XiiMrokWfiBX5HiJKBzHJa1wEHaTJcgW7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "To2Vh7evGJPobzxb3VvmwM6v53ioxLfkrQNvvM7Vm12WbTVtLkLE3cXB87TD4BiFPSsE8ZS1XBAvG5aTvqYZsjA",
  "key1": "2rGfFFuAvuPjUJGe76G1gBuQCNxUQYpGFsopGKSjzfwTCePuddMSxiNeUHnFrLTieVDzhHrtGSHMjfEdnjeDGzbd",
  "key2": "5eDj2ZD6LzK8kcQ7uJkGgiXLQaSzhMVP53sDmtb6dULUunzkmh8hVbhtQGWdoFnUcb12Ra6T6b88qGipXpy5sBCU",
  "key3": "3D4ULF5r5hmvpunorLPSj3zNbcTwwYh3BReZEn7SjB1YmFDhWeDJ1HN3hpBTC2PrsyT7X9X1wsFUPoyUeDpXdxSK",
  "key4": "2YbmMHu88cMtv5cfrcXJFijCrZNcr193bG66qAgxsmUaLjDsTEFUPcNXsA3PJ5oh8Yu4fPFCfyCTBUKWFCCCkMPr",
  "key5": "XXwPhVDn1uSWfqDHjCsJKYSo4SqzvMFfkwrAP7YKbrVQFdGC5vKEWkNcNoMkiSh8skFvjVLkcwKqYSdcRPeRVC7",
  "key6": "ukHNsVULwvE1GXJUBYggz8orLJbcQJNKAhmZYEXkx7X7F2qx3JZotdjxcyuBfoBan9ZoGiTPWsSZuBpFHwK9Zw2",
  "key7": "5n9GV92wvWsTtXafARcVHB7XMB68Fh4EfQMwrZLe1pAJMCXmjngQXpg6ogFYEEpqjhyjs7zDiLPNTPhd3ZKm4E2t",
  "key8": "5rH1F12SjnXqsBPj621YzBuVEc4VDetMRKeDQZhUJaA68BoXgQTATcarGvKsh8xBHJj557uXyHW4jdribsiT8pwQ",
  "key9": "95izLBoqXv9NhPCkxx8ydGsgM5kUtdNH7SSb4KKcy4zgtbYD9UNxSeYa4KtBA2VXnEN4mo2KvkHbBEmKt6YJCNP",
  "key10": "TZXrgQHd36P9SD5tRijHyhzw3Age2cqaCEncsVjsyZycb6vZ6qDTRUtn2bBAdHx5bYLbwsPi25VB5pm7AEcAvs5",
  "key11": "tVyJHWwXoGTyBTmA59oFm8AKh8YMxhtN5cCZ7tv8qXRVPxk8MfYgyxJ31ncGYiAwd5Qteh6WgewxAKpM77Faa2f",
  "key12": "6pwkWpRPf1a6SrBphVrvEiKMMH4cggYdHa7MNrvBjbCxAcvEseTRg8Gip2TvVaBZRQY4ytykC2nm5w1Gr9wQXTJ",
  "key13": "2oFapvq94cq19W1ScPueXrD6iSzKWZGwd7j3au9BUFH5grnkPFBR2gTQbe6dUDQEbxLL7pmLdgZmHBuMpRkWRVcA",
  "key14": "gq2Seoqh4RsNKm6z8pTSixu1fJqDLv5u62LSUWY4A2ug3QFR8UiE19iFZqQgdPWCv9Awq1y6YL1wUDqto7vFpbN",
  "key15": "37AkrUKhtfdJeVThsqoofV8wRupqzovGz1QBm7vFBUyucntcqPvQ8S5zS9CGYLe3uJo94T3hBJdvbAwiE5aKFbJ8",
  "key16": "gMyZj7eZ28iSq9KHyCD77chDaSaEvYhscL98opySwvaC65Yi99xiDULKVXqFL7Af3sDSXBYEztREQZkGAW27Top",
  "key17": "YFFnHjtAkFcash53paJ7bqV8BPGvw4zefXCwMBs7Bi7CoPZdktEXdiKa1prt3eKAZGmQtWhsNM6fHGmoT4EZGE1",
  "key18": "46bjs2f2sPXrsrc556HvdySRJnGWvJJs4a1XfJpMKZXtFXERivRMvDnWo9UTimvVAY5NaJsu3CT9jpRwfpuY9YBY",
  "key19": "5rJjZ1q9eXDrNkyEG6axjoTHC6sdN2Yc78t26W8Mt4JqFoZFswguNUvzmzBRBC7xtsxkHcgC1vTFZDt7iLZSzS6e",
  "key20": "4N2sRtv9cYWpUz6xbidjjj75BNuNpJzMiaHKQN8dKTRBZqr6491YeXaS1YWQf1Jutxidi6sNY4cAPJpve2jjoSyP",
  "key21": "2B6KBapB3rmsWNnGo5xWoCY3LT5ZHRNTNPDUrjwATciUe4KjWwQf6YEo96rJ5dKF4VUrXcgdh22aVNziHDsMfBsw",
  "key22": "3UqcjQbfyRHpnmpASGMFuMddNz59dqy8VqGV7MY6jCjtuXpFLNBT2YUvduqUsFQsN25yYJeduRgt2Uqtbw4mdaKq",
  "key23": "4wfW5ghVfiQUueyW5H1wH1HnK9dLsPV1dJFxAzRHRExTANehKBrpxKbrHWFYC8qmxqBLfyYXy6n4PN7sE8Kr4TdG",
  "key24": "3UPnudNJnDhzCgUCEroUKspTQWBwUh4uZ5sJhQsMPjdJyhMDEubiUcvATLp63kPaU4sh7yYQA1BCfYMbqMrfCRP2",
  "key25": "2sga8U66StSY6iCcJFzQDRC8R86igxTnPxqseGEShzTuFRMAFLfDbsfVFUCnzwpXzk9GeeovGQdwijiGd4kAS3e2",
  "key26": "6149eFhn3ckuVbZchED5sDAUTt1uQj3KUgXpWmFcfimnqeGQm938tHhbeZqbz4ofRUqNB9YCyyLzruyY2VzNcH2M"
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
