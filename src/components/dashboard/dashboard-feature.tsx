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
    "4iCSgXBS6Mt6dw61AybX9cmSWxo5HfWkHvphqukc6adVCtcX4PHTpgNtBD1iP82NAzmFHKE32vEwydanyNmcLUDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63U1FquJnRFNBJvRn98KKNaUXRtAEJSW61p9Jai18t9QWMvDXJQeDx7CW9vWrWM7WHJjJSzeXnKtAhp4yWofKrKY",
  "key1": "xn54yrKDjBf91TkwrairRbU6hXnwWa69CpmaJye9Xcbj4HMVVfGemryffXErFTRx5yBpvYp5VP58em7DLyvH52p",
  "key2": "3R4wiP6Eidc2KkQKtrZmcVmajxYo2Ks9KJYRpatRZM8n2pyCuRmMogtYCvm5e3yUA3eJh8JwZmdBCtQjX89EfRnL",
  "key3": "5z9ysWsWv9knhpDhV9V198BGJ73y4B8ZPYLh4PqHVcCUj3E639kFVHNmzzEj9Jc7dAPSQkiiay9tvHS4mLBWcMWS",
  "key4": "5eXe78emFYuciqaoMLcxnmg5F3FfEH7D4H9fiAn8nm3WEhF39P29MXwcvHn6daZCoSCu4JD9VYbdBXTy3ZQoGvAG",
  "key5": "23F1GCZWCbWsUo3BeXUQeSkhkfKcbfAjwRjLjGsRAFnyUyGh53N8Kv8dJQ531aXsGhoPzUgAZW6xjkQqw2v2VGon",
  "key6": "29FszhmGf9zq77MUJYJ5fqvsc7chKYaNoi6P15YvGXukEbZY3tGuxW5T14Z7BGiaHWPRr5xoM6MfbWVELVcggC4y",
  "key7": "5V98TLimD7oWq1A8p7JkHzWZUz93eVX7oHciS4oDtejgnWnB3RC3uaZ7ZEye1PCPPd5RkaW2HEWRECcJD3gEnLhN",
  "key8": "3gvxPMyZseBCFpU4q3XjZifCueANcesFB1jb12Bd8Xy7wXskkZK7gYd4Z8dDvcnt9BzkGkktQycRWhbb9b7nVudS",
  "key9": "5TgiNaZTsRN3TDr6Eg6FUWfoySoQebK9RXJdRsStjR8ATvqnE6mkfXPy7vNEWTPtJ35qHnxBrTtoHrVcr57zsCGH",
  "key10": "3MHBEwFZjmbWrTBQw5HZxSd42u4BQyqXV7XP4DJmRGAV8vahr6M2JURzoP2v1iC9ovct9gRm3KRHpHcsUoBsFj3R",
  "key11": "47eftsdxajqX36et477naiVQ6jx2hHeNsfrCjb3hhvC1VWeHLr8w8Mb2UYgnrErZv5KGXYoHAYrq7b6QSN39Cdir",
  "key12": "5sXWketHUVTtVZ4nZAku6Y1veby9FnAGfBcR138pGgAXNWC6dXEn32XKiT1wAZaQB9u9SH5H2ursc84AirQeE6Vp",
  "key13": "2bUVtxvy9JhwZXLGDdhac6rwADyTXwYeGwWhn8Jo3R4hUSpGFF8v9idyTsFk223gfDPeBquLGH2ZA5yqf7PQuTWK",
  "key14": "69nmLhCtuGv99DeTyudkEQJqSTBfksm4LK1DrdHq4njRNwUDgKTMiEAG7mcD9BMwM6Hh48TTjthS5oBsTsXXW2a",
  "key15": "4P6LvcXwTMizxa7Fs4fcQLZupvsKLzQzNnwdSfhXfJ1Y1EZfFV2vjfs3eJqUjRwckwzEwaTCsBXwfLy3dpm13F9T",
  "key16": "5DHAW5TAMzye6qdYmWwZGuVGM4KhFTGxhzdkRWsuZbaPCBfopUyX6cjmoHuddCMUyMDtzxYnXLE6RcxXDKtU56tJ",
  "key17": "BVAqL1Wm1egZM9Xf92uSu5MDRqjRZdCwe3z8GCT92asXD8nZJNRwAj6Saa6EszYQF2Y56G3Ko7WaaMKyTB8WCJk",
  "key18": "36upQ1wnedHkpk4KbEpGdJe6Q4aMrLtrgJkgL9rndDpFuLvfhG6rDPsUt2TgKdm9wjaSnudMPpvXN63Sze5hudbs",
  "key19": "4N1mx8emJHhmsxx4RPiuyF5aBRAX6rdwtRfP5vDqohieR8y9PAkUUztgT6jfGqHLc1337A7CnT4gwjynoATwFP6w",
  "key20": "5PPrVX6h2Lkimr6L3sjAFHx9ZYJCvf448N3fVp4U5VJC3cc7dzRvyXFU8CJhcVKTH2sCCx6XgUkFAx1e2CjGDqwj",
  "key21": "zk8X4hGZEdgTtebaVLy2Ry6ovuNaKo56gA1EQddZWsuyDjqfjyrw4TidwGN9XMA7z8sYbtH2rwd6dHpZLDvCwWi",
  "key22": "ARwPhzWWiMiEWuDE6qBZoT8jddnokbYaDf78hfWNuqTeYMEYEvuUwmKYHeeTburuPErvNesuAhyJQQaBK9k2zUF",
  "key23": "5abMcdSNshVz13Uszd7hcr9QbbY9xRdKG8iibwxUtEjECHkGNWRogbPsWf4ReQKzkUtVhYH2oB3Ld6A76UWRcTYp",
  "key24": "5UFS81GQCdXEe6QarDDbB5N9YeovXhkopswanqAnFBxt9Nt5SGDfdTJVsRQvrTt2hYQnE1JKib353x8xZxLKBo7h"
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
