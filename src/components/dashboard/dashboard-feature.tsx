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
    "5a9kjeppHgKFfJh9hunPVqsY3hyvWFXDTSE6xZoQKJiShQsoLchuKwZE9UQ9BvBHLW4h4mTv789V251HXP2o8h5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xYBXcNKJqZkRmYtMSWs6LzYEfyowC4dyKSPKPD1LCoTDH5uzWyua165BdobtrM9rsXR18FiPi9dwzWYMR4osmdd",
  "key1": "dbMkmvBAcWjXcVaZ37rRAnHBUCAnkhkNhMqBiVPMFjaXG7Ky47r5oWomhi13i3cNvzELnWq6TxVuz7x2mGibZeR",
  "key2": "5FQ4ouNoQzUDUMR7LJfd6XA9pvkcFMZay9mmG44vMpqVcR5VMoqmRbP1sc7RoVQn8NRTFAGFWM77wnK8PVzkKZuJ",
  "key3": "Jc6bNd1HwVSiBRAm3y8nj2Zrs347CHDTvMnyHndgt3aDJpjN2GCCpSzKLdwZiHMJ1uyGsvY3bPimuV9QaFaV2Lg",
  "key4": "4A3mYCHpVApyPvu4YEJRTuMB1cEZ3HbdSCWRptWLeKu98rgd1XFj7xfftwP1dW5fTxU4Lqd6zjueHDFMLScKhZLF",
  "key5": "5EUESLodAU2ibd7AqTHkiMMLa8XptJjuUs3vUdVF9a5NXw7qZ1ydTo8HvKCQCk4BwNa6B79CRQXvQwZZqyT49nNQ",
  "key6": "23D8TLxk3G5755QsQjCPEjoUNxEmRoxaigzpGEArrbjxxmEHCjNqXLZdDT1qBxMXJzMnXrnnUnW9c9vp1XPWWECH",
  "key7": "5A4Y4Fbg6EAecSJQEtxpAUUrTb3mmRfWYUWhuTfy7yttUTgZrfRXUBkZAFZvbxB3DuWEgkRtVKUBygxtYuCXZBTJ",
  "key8": "hBcw91WsuzdcSTsvtYHeqeiLAZU3F9ZeKrQJ34CypdZKrSmbeqUdWbo4JkP6QU22rELtAmEThnV7kZrtBUnrZV6",
  "key9": "c3g6EKtsWXgigGeaCAtFG6uNtB5dHomxiH7CrS9WL3qoW4UQE8zHoEHu83gwFpE9naTtQrGgxPe3NbHS5TDoDwB",
  "key10": "3M3u1EDfvihZE5BRRBJh7PUaTbxmzyPAF5CAwvdji4reBg3guaDy6jnsa2f8PDQkKG2LW2ZynzeqcmcsWWms4KEk",
  "key11": "5FSWrFkhikMA2bW6hoqWFD5QyL8nzwuFCoYREmGfnsNc88dj8HgSaqA2KsCKf6mBz7zQghbFAhUNC2ga5Qj8CQ8f",
  "key12": "5xeLKRJybSucz2dWP6gLN45aFNvg6MKNTi95PVAKn68doExCMiwFFTfALACPgRNTYBQPSzMqFLyqXMM4JeBiiPno",
  "key13": "2zAnHfkyyDEUskqshto4qZEj2NaQx8SEeLuzg7CSHMNvJtmtSMqaw8nwN2Hx5fjYKG2hCzbYBU8eR4RgS5hwtSvT",
  "key14": "25UgRhmurkhuygoJUf6jxNF1emQpGfEjKd8PNyJxakL75KD9kqinERkj2sLV1xxMzBEmzaiobNk3SbTCFhVHosQg",
  "key15": "arqK5Eetkb4MgvHYxP1q5gkzkhESvYLSt1TjJZJgXZmyMuWSSU4qjj7LfM46xZxsSQHvNZD7JQLZ6NVFbEY1DbE",
  "key16": "42WiWYT9JuCxsos8AiAZv4QrAYVuoECNooqdJrvPEs2snCJH3rzicHh6QLnGzkbw5QZZgRuPxCab8VoTZFjNP3Zr",
  "key17": "2r3aSCi5bxCSoggbwUW5nh9FF3ScqZpmiSnjH5sjMKKPZyW3vBiZR8NbU6qz6euVHRLWoS64AFfGgWoq2LhkCxwq",
  "key18": "CK5pq2Gaq1ytAG9tQaMTXPkWm7qQDcDXTwhJMkE4ivfmL3kJGoYsvhAsgMg93343RYykX6bd72GGp7orvNCtQyZ",
  "key19": "3qvaeymxH48RuvKbhe8YgEq3k7odSzkfD3BXd14QidvrLqVhy8P2S8Rvf8Jhq9wcFrwpGkWce9xog4bTgX1EUSm1",
  "key20": "5ugYTC36bBXZb3LLagDjm5BM2HzCnydGcPUbny8tpQbXwersQ88f48crLwok2ruGQeuEMzcGUZPiTU9HWSszS2tc",
  "key21": "5MCnjBq339jSqhqxCWVpVLPLb3P15ipKF7ffFFQr8csxT1d4W2ENt2jGHfoZ7xR2nqjbeMLcukfGtdAiHy36z1pX",
  "key22": "59Kq2E1fSfwdmKSpsVbTwvJMK9uw11wTmQNZiGoRVVgSweNdjYtA6RqQAhkYwXEka6Jx7uD1vbEFY7ReCk9rP4NW",
  "key23": "3YJBQKtRXgtFBftwdK9vVryP2WXBvMkhfxN2xpebuDUaD2FMimgjb4LiGZHsPBkRZeTUhsHweWCvXcjs6MmpqdWk",
  "key24": "33XcvXUZxyjvaTuYf1GC2yK2paDWcKyrQewQrJuWdgeYYvHcYBac237if4dipSuJ5not1yU41n4jsW8KzBvLn4Uq",
  "key25": "49kG2Jw2biSKTcHtbXo7onyh9pMtEiBXwCk7U2Q9ew8bpqYrkTaLwSz4i81NSY3nqWp2E95Bjy7aT5YKPjXK8ih8",
  "key26": "5zXCaH4rGeJ8t7zdgEidu2gS1onAYsCxDVyctVTPmoRGb8WowGJTRmH7tCh3zEZAYU7HBLtQ3DJohTj5av8rjfQK",
  "key27": "fxG9KRHZvywckWpKmWTC1V3rUfuguqqfASmLGiGyhpqSEtJUVgPvRHRMtiZ9agm13zgEvyPrmUMBq5LAh9XX74f",
  "key28": "aUYsLc19j11QvpDzbWXMMPqVzLQGJkat5DiiMhpJkJJRUnAK9gC82PdeQ7FX9sc9X8kS5W27K1NCnsQvsra9GR2",
  "key29": "5UrvzeEBmqH93XxEC9UVM6oy3g3Z8z2ZJrduwQwkuWi3dHs5tjf1Kp3N6osCiGGetvLTPWxb9WQYVqxogMHwt7eZ",
  "key30": "gM9E4H9FQ15cGUGEcVT4tbHYg31o1UC1MMzhDfTb6JfKt3QmGNfEY3U3F5ddNuCfLXs5fPLberf4GmdnrgNdm7X",
  "key31": "3sX3xmHvd2pohJhGcvBMriaHWQdR2VurPQ1F9kCc44QLjskFiwtq12UqpuZ8vaGoTUuR2NDPZWwssH7qR9bAHhpT",
  "key32": "4huPQKnJ5ASLDFbFCWNFV98Q7zbdQq16tvogA5cZAMySg4nkeHsDPABzLYopvr8zbCaEZjKt5qJNVuf8QxG1Zmmy",
  "key33": "3Maz4MJvBsqTT8UUnwvYf9VznXwRa31rnxUev1U5JXQ1cSMYzG2Ub5NxbEjZ685VZ5pJs3NCnh7agxEDsL8ewJbt",
  "key34": "W3eRGBMsky2VcMf6PqTALRgxpc8J19CkyzU48T1x1vzEbs8uzpiXAgDFMGViEoCRBKz72ftnmBu7Y5x6suqmUV7",
  "key35": "4J8faNpgt6FetLthud1iAL58sZaqmUHeZbHqRBb2mDHcLLbPm4PYXuC8P4E4dYTcME3CxrMLmjhd6qcWtDDxbgxT",
  "key36": "5XTJK3VAtvaAApsrHehfnzBsvF7pxmi8Ym5ACEoCjMh1gf1hWmsRLSr7Y5vtDcZnXHVhUXi493spJbX9AAiBt8sH",
  "key37": "2itUsHpCyPUd41pcCsiX67hntjA4XcBbLHvvvBjPRTQAW87G6BUETXjzi8rrZB5uNYRAj6F7PB12223yBwU7P6AN",
  "key38": "2aUcG7WJSNS9cDazSzoBAevH73xDKMoP6zD1fk1xkdkuBa8WrcpPruXNEFPZm7Nr3dRDaSvqQXTu2n23kGear6ch",
  "key39": "vqYimhfPHdkvEmoFbcSYjrByaZFWuc2XUVFNPK9KVGFBwP5aWFoLVqR8Y7m5z9Uz3tVjgANUnN4NYNwCDBHjEyy",
  "key40": "2d6KCm9SwAYMvDZNY7iboozZsPg1rUX1F4634dvjrfue458u4GDCYEcUSXmm1VbM6pa3cWh699s8HwnXdj4tQtzV",
  "key41": "qdFvEq3iLj69d6scfGbGa5117G6N3JxKVvYDJJDHivAX9MepQJx2jn1zvdatTr9zPWYAsotosSqBiH8jQXWBuSz",
  "key42": "eMryUNG2GLtRzsoUgSPapXznrUTmZUNeaM965eEYXEMKYAo4fAzzu87fHrM3yFBu5JaQcyoGLr3uFbGBZq5DKPn",
  "key43": "5FnM9i8VEZ43syE8FVrfzFPBG8h6sFYRzhscKQHkY2fGgNdwiECDi8ugHP2nLpQf6f1ZS5SNZwH9qgtDh3w19Wou",
  "key44": "4U249xnW6CryP1dJXkE4FPaaZaudmB5r6Cg82b7usguQqaWr2Sogv4t1YtaNXZnXQJBsFTyNsGiohiyTXaaJWJZu",
  "key45": "2vxTXgUGehfxRKuEBX7KxSW8tt1o3fxmyMUuNbut8jby9Z19QxrpBSMSZLEougcQpcW5rDHy2brram4prVEUE1Fh",
  "key46": "2NPHkyEz24Ze6BC3SwX1A4ZS3QgMRWuTgzyXmtcViMBMudAqryh7wZR8rdayAMzqexVKjDPfTedWbkGJUvDDBFRC"
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
