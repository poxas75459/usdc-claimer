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
    "3hwjwxyMgDsdzHhpQzJmpPRUvmV3hyNfubPHLLp6CMRZova1Z6ftPi9sJSq6rWurPKFKRYkiecLbWGCeD8FCqnNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kg7C38FCbFSsZFTAjPfMULrrXXB5Xi9VfUnMUhcfbfWwATnMZESrzpNgxViyUdyjpnQrznRZwprYYafNLEAdYM5",
  "key1": "4a3BgerufzHs3DgqA62rCwjho4CxNjnWyAmBvA7noGHkoPVuVAfM6To7N3ceHopRZ2kTrhCXFrFDhLMba91EUqHJ",
  "key2": "Qe5KwL4saDWoBPRcfngQytwJTSLLyPBqnZ9rF5nkRche5DK3LyZxTUC9ygc9LLCfE7ZbxkpFN89pkzQ8hrwC9bU",
  "key3": "4DhUiDH4PWtD8PncZBJtLH8HdHd6TYAVzCFB33kWUyVupvyZVDcAxbSr4VMTD1BqTi3SbGzWTzshiB7iZ5F4DqEb",
  "key4": "4MPjdUsbaj3FQr4umuxZcjGacJrVonJ8KDqRNpVpexY592GhSUEyaB9pnJBmNs1mWWxPP2xMjNpwfVF3yUiWXeWL",
  "key5": "5cSdH2w4Rj1Sq8VtQuMmvZyghq9J1Y3sDUknfKjUi3EtkKJkkUSAVwZReCzD8jpajt5513Qxoz5ok8EGDdk3MgMw",
  "key6": "B4M7tN5WzvvLhrfSyKFkmXeoum7ysMhJFtyBrGhN7Hi1VurrrvKEM3F4wgBoM7Maocxh2VauAsw359gpUmNirrT",
  "key7": "sYewhyWb5FtrCBFioncCZUW6LYD5cyZgkyQQwpTtm8TT49NoeN4QiNMSMr5sET7aFweE5HvXU7j5FWH5Ycnf71e",
  "key8": "kqKN5nTFdqik2HWZaAhsdPjDW5VyfEudezipVZ8FcZK2Ji8qSy1BjfDU7Xttnu8VzbFUEYu4f3CZcmbVRZGaG1g",
  "key9": "4UrS9P4TQtU4iDd5wd3cgFA97C3CzxBKHCtzqjx6znWzAakyabTEY6RNC7swsqRuMCgVp7dQodUyGecbbZFxSMgH",
  "key10": "41azLL7ETtrMajW9BYn7BYpDophWphBjyVCs5PEHbLAA9ek9jeH9SJ2mqZFeyR8CJMWhZgEDbjGn6KabJvWBV9Be",
  "key11": "3rRYmp33PBZzVz4XxKsm9kb2g2wgqzWaE3Yt42eHqgfz6pkUT6RKuw5SBpiWFhoHCGbs2ozGHREuvjoMrptQKpUv",
  "key12": "3cDsUqtt34neRHDbCSPFkcusCCtSX3cRHRJCQbvfcwNeeD9rbS4qSvpqstKiYqJXpnzvtMgfd8MS8ZZqDV53K7BW",
  "key13": "32oQLmgjdT9kp5q4pzrvbPrJ8Dz4u9wAnsm1PSkHAApytxKspsonk6jaBUza2ZhGqq7ijyz3sKShz6Bigc4Jgjvt",
  "key14": "4VCDUJ4bAsyk8NWopgSztc15PnhTB1GeK9mCBZChqupWjBGu6vFbRuZ9qF8LtZGtSzLjbWDrQdSW34Vw5ytYYo7X",
  "key15": "3qXeP7AksQvLfim9QiM9ZShNKVB6AMu9Youf2otvQuAzoEDuFgy1QTkS1SRbAXwErSg5toNn4A9fBuem4Jy9aUoC",
  "key16": "2d3M3qrdVf43q2jAxzftssUgLw9oC86Hb5PxXgmpUz6gSrUNfoCdMUzMWCqynTv7davvsmHKUdF7bbWjusBvdFNf",
  "key17": "z4yWQyhVNcbRdWLAB6MGykVAjThmheyUpbUenBzTNJRZ9uf5vYeESj6YPYfQtqW6SqHMzebwoLGPANBkNcceXcb",
  "key18": "5ZFDSaf6J2Fq3cWGm41CTWiC2rHYn7szQNzzDdEZkpiGw7aATMPe4DEaR5dJVGUQTSfzoQVyqQ3rTCSC1NhrzdmK",
  "key19": "5A7HztrMR66DKUFVr1o3heaSA5925uZ362hYW3zEiHMCqmyfXFhn58qNA1JkkiE9ypBfYr76sTzAe2T3izG8t91Q",
  "key20": "4CuWtT9Td6quFu6rqPFdX7RnnfrYEW6uqenN1DCJMMdTZ2foBppff9oHqbYqw9VopKoPxxp4V5V5ratBnW53ePLQ",
  "key21": "3ptnE5J4yuybvv3XDgGX8Mu4utthR6RK2iVqfERfzF5uaKw7Qb4sQkoH51x4SNcjHqyxhguERnfVQF5L9z5Pzknr",
  "key22": "442L2k7jdX2M6usy5KxfbnELfPNVBPX3HQCYf1TH9L7qYM1SMbFjHh4w6jPq4Xv8oV9ujLJT9UVYmUkzDPb4pYjy",
  "key23": "4WgHws919QmzgaqFGMBqAwJeCCAU84rBDTWCsbYcVbELW9RWMnFWFowwByvpFzP6TLy5rmS5zijodd5mSrfEXo9x",
  "key24": "2sPRovF7RjV4X7fdLi1bcAnyC1DizmiX8jBaFSWR3vaseaHggu8bNKF3Rv4eEPmFaorBCVwjBvV7prgZqdRDEqLR",
  "key25": "4omfSzoczbYExVurae6Sx7fWqUyYon6uw3vSJL4tXptmf1VpeeQd1Cqm2XE1nz9EWo8g8MrvKFk3Jq1ADnE7me6b",
  "key26": "3qgs63cTgpfrGnFoRnVX84XB1YBqEygq79L8PGA2C9FRZwKeDkNSmfZS3NSAwYWqjQ4jBrPRQn5vtymgX2xxAdum",
  "key27": "2cxYfuW5WYswhG7qVCm3xE5MxNgqq3VzV5jfKybjvfuwUKvs8vT5rwTGVS9rKsD6p63xJhNgrEtW57H54v8ZHDLk",
  "key28": "4d65h5nE8SQjGMXtKysVa9JVMbNUNpsVRkS9uFCiMRRmuvV6TBkg52XYpoBiZBsWpxUV3kdnkrtdc2aRdj7beFfj",
  "key29": "2hjKA8aovubRjd6b9caNDcwfEudcWKiXsSsU6fNxDjDoWx4X9hxCZsoisFFp4u1vN4DKeaPR3DJNVQ7ZQcPfvzbz",
  "key30": "5WYYXvj9zBeKWf53GXQSENZaGSmyBoe7jFDgh4RVDkeAeanmdjHRzC1VJ5fjVy8i3sAJtWC2u1sX1XwFxRJKTeb9",
  "key31": "QoFDm3MXAKKQDCJpp4qbxuL1Qhzc28SPU8vHaPePKLYNs7sveLRm5sq4kfXBFC6YaCyC6iFBf4U6FnmpfYhHGQt",
  "key32": "2RW69KFyFEN3kcH3rvP2F1AmZ9DcjqKioXWgtuqWy7HmCe5SHHUGuXVq4793iYacPmY5BYadESebxDAv3WhbGQMw",
  "key33": "2maaAfNVWD8Bf23wmacLyCRgbqTPkgVcvRkD8U7KR9zDt9h4c5Xu1gxzjJ6draqtbmgAbeyZjJhMkNXZExVTL1ae",
  "key34": "4LE1AjN4ouu9Hs51r9uiP6EgnmEXGhA9VT78ZbHd2GLjMtRqimXegHXcwhN7GSpwzb5gPB2jMKpoPa2rTWm7fmn3",
  "key35": "4cC6VY8KUQsK664HUpDp9igmvtJtNvG4hUui14y9xbMptpxkzmfB9rn6MRTSLuXkFyPdHwRT5mfng2krHUNZtpj7",
  "key36": "5ueb7mwz9RkyhhWLhr5A2QgFLVsDVogDZmbfzjUpvVMy4qy8Ud571eJbq9WqpQnAkYwwHBwUVNBYU2f9xqsVCr9U",
  "key37": "CHMZYU6CDtC153XnrTYcihGbnMUS7b6XSZ2YuS4HpjrzEtC5eSTsXAQigrE4VV73hQYRJUXZHCDsnvZu25YuH7R",
  "key38": "4bDGtqJ8G8qRdwHd3Uya1SRuoSBS6aqUKsdijp9wg3q33whKPPfapcUZ4cT2R9rDoSgYsu3GnKVPD57F3HxyS981",
  "key39": "3tBFMUYJZoQriDY1UKL9A4wCkxeUu5HYP9XVFmFgoY7zezdbZBcg9iMMBceiVfdvgRMo8Mhxn4mwtVKHQSTp8aaN",
  "key40": "FMTqGYaU27rL8jevpZJB2X3uc1xBDFRho9vTq2WUzUDa2F4refE41ekiNZDC3j4M4Xzw2XCZw9D4rr5PrNLrmeT",
  "key41": "5KqrEKVxJJBjemDP9RX4gzk46fUW5ExP6WCig3v6iZRHSgYjCUaZR7usxR2zaKcuf33EGcguhH2hw2UTKh6Fpav",
  "key42": "3HwKtBJjh9pQNEc3znEjmq1Eo2tAuCrEfvXrg9FR8rUbiH1b4jJKJvAWTt2wJF1CSZWrdNkDjrJZnwW2Jsr6VAgW",
  "key43": "2jrE3JF24zMaWNyMgnpZbRKTGucypZ7mNfRvqo4dG251kN7PAk3sKKbXDdsWK3wfxdcuY9nB6bgeidnDm5s9Ec1v",
  "key44": "3zM5cbb3vMns94d8epbFDYPz9fz6E7cDU82e5KFW8d2Tjt1owNYNFcSsPqiLPfAbhnQ7nJpLHDPXV3kzn1YP4fHv",
  "key45": "65PJzgthruQ4kUmifUkTLkJoMxKMetcfi3uH6F9XtMeEbPCPbyLAhVmwbLZDB6yRjyrtEYUnBJrMenSXACsM2VRu",
  "key46": "4MQsobxJYjT5b9QakGbiyK3MD2AwxRnWPCUBvw1bxLo2x6sazyi8VPHRa11tyz6yfV3Jd8XogSHJJ7j9tNqHxZLb",
  "key47": "2MXoXuwfyNYsh8rVfoH9HUwypXDcmCgxxAaSy1SxnjmjYF61xfZn5n78ot1Y6zVRPRZR7adYihj1e6m2uiFyoaoM",
  "key48": "4jnpz48XCxek5AvWRAG5cD6BeSucEG9GAWesTutSgXs3swoEu8oNYep5mfdzerEXmzPmbDopFNHDz5cBXchC3Mp1",
  "key49": "58p3uNBFqNjQ8YpQdTUam6sBFfhaLws4GoQj6s2s6vNMoHTTS6Htr283Qhuw9sJgnQ6NrVqU2azKs6mNieRqFk3d"
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
