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
    "huAtpvxcXRj72uju8mxT1AU4kDuQEoZudA59W14uwmpjuHiYGoWk9tVZdFZwYJYj2zL15jhVDh61y6hiXVFJJiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LqrPsgyXcdwmRm58JW43TYJt1hEg1hZ5zKikDh5wYyJ7Zcy3Q85DgLpa9nd5aEkhvUxUvcNoc51rhfFdVtN8zLK",
  "key1": "3HxhqP7XD8rWrRP2fxakdjMijYSYsACiSKm893JLirBio5eXdqfBfoxmMXPiABYdK9b7g4TKjhmPWSuctpZvaEtu",
  "key2": "3MSMuM9oVm6gnouVvzBLRkSbUrcoiT5HkFnzQapVyn2JvmMKx4bjPd4iSzW1MnnuNBMJ4o3eYv6Vqh9q7hsKyRD",
  "key3": "j3wN9EthWA8hoHp1VomT6699ueThhcEKnjSsDFVweQUUFjGjKcSbmpmCELVsqX7VAxJ5YVNVesjoBwxdR91Wg8N",
  "key4": "CaHARod67mLPUUCzNjMdmhNttj72h1gwcr8nYfVZhWMwygndnvc1jsKNuSR6pxBnk1TZa8SzujvYi91KwcwihRV",
  "key5": "4DArfqNvb7sy1hZGwX2fK2tCyt72pABXHSoSVPVup5js8iEHTZbuQyKQwWCDBGWvdKkY9HtTfMsX7kaJzps314Do",
  "key6": "5TAswDgec1QwDyojWpZaVa8K8vg2WN1sBX4jYKJqTW9t9VY26vAEK6uWZx6WyxMhmxcWgKzSwqWyk87WXJBusJGB",
  "key7": "5cbGueutfvRT9Cv6KGctYkYmTWVQMJBBquJt9n4w8G1AAipu22cHbHMtvwZeTQd8AY4BXqYd7y4HKCQQrGZSf1Ag",
  "key8": "3ZuDEs3ByDha3sPHJdKeXZKg4or6UX7aHKXHcWN7LJmSLLDHyEkfeXa9jYVyUsA3u4bRUg6aXpsveiFJYq5jeNtw",
  "key9": "5pFxc9jYvwNC3dnwsab7382perXonSaMQwVbb4g4v3YDLatFGZf3biRceyBMCi71Gwst2AdZof6xTbVUkkNpypVD",
  "key10": "3dexRnyig7ibfGe5Xd2TmmDdKTv92ZbwFUBHPir7ZFqm7S7geUm4SajL2eXzEV1VQAUnj5o1ReGgP9s7oqFzqe9K",
  "key11": "YzyJJCbp2AeUxah8Y7UVYJ8KDDLhteVmaDaRWgjoLJceYUVck5cPCfdJ6YoFnZUfEeY1Lnnncg3v5KEif97zU1C",
  "key12": "54dDCNezUie7dvqMahtHf36cvKCof6mSdwmnZuUT5LAFFJamPbktDHrCWHLZnC782dsMF9o5PGi6zspeeCCM9HWC",
  "key13": "U7hafhLYbp9pBEc73Lb3uTFXffMiArhFeZt3MMKm1xvivPkWc84NZ42TyTTzLgC1qRXjA1gTfokGxFfSfHMwfS5",
  "key14": "5Pj2ShsreVcckbiXzCh6wEWZN2DyYvQEPzgYRNHyk9uubdTDcq75FtUoKCesHoHmFEDTmEocR67NsZuAFJcNeb2T",
  "key15": "3KQyPMDSZeQGhFQhe49DknsYLJGZLMHwozJD3kgAuGn6Gb9VyrWkG8cfdkHa2pXDQXhfbkcBhveqevNfwJJKWENe",
  "key16": "dVViGkVwtxwqas1AgjsbbbQAiyP7APTZY9KX9rXqeJg4o9SK64Vq8oTRjFAfZ7hjKfWke9wVxwradr3x9J5cpjg",
  "key17": "4zHqUgQWZcMzCK15Y8SgUspURvgijBA5hz6LSNSK9CkHWiHihsJCGWt2VvyAYcY1NaLStHvQtjPSYDCViVF5DJnE",
  "key18": "r9biR7w4pEwzqnSxeEfAa4R7dgD3xYPLspUz5zvGnHkpUM53nwAQrcEeB7doMRV3wi4E9YCghjE9ZUunHpDf4q4",
  "key19": "3Aj2jt3FsmkwJ3gRgjUhDoTm6xVghR52eHjY4AVZjQT9KkWErHH2anN12G7pb27GBvY8eLeRRn4KUsE84bXctTTR",
  "key20": "5xuXRn8C4NsBi9jDX4BJqgptDHxGWk8ohCAxPV7qTGZP6drbjEXNydbZJHaZ2T5XjaWHgxKh8MLE5LSYh7hnJphP",
  "key21": "4GJxriy67sdUZtjcwrBv5msD1EnfNjnLWNJz871oFvyXMTkbnoFYDfgD4oztKWGoaojQRBtYQMwYK8vwMkb66wcy",
  "key22": "4FXS2QyYpP52fuKdtQvisHknhuk9kd8vu1VneqiYQNHD561VWne2RcivzWmVo1V2gdaEMSB95f7KpimXochw7cdz",
  "key23": "483zoamc1YS2Xj2jshU6mpc22kgKBJMVJivRfYdrTPojrXMPL5ZEgxbMJHHt1wjB2LYshUXfnQqmH9D5nxHQvqW1",
  "key24": "518hmpX2BiacSk4B8G2GhyZJFYYtoJfkvbLk36DpNzooHctMQC3DbgydjJC9HDRNsDM81mfJVZVX3ctihrW3KA4x",
  "key25": "5CBRU51EmHMezoU8ZMRADuNEEuFVEaqT4UFKbiSmwREWJ2fSHHwpfhq7NdPEA9q3ZMJxuEcVWj7aXzcvtDdrWp3n",
  "key26": "3q5AjYVLAb91hYSJEkWaCmbnxZXNZmVhS4np5esELYTD5wX7YghoeAzPvoqhA6uo2PeNheTEvSEpKHFv9JRyzxbH",
  "key27": "2CBW3UEDQnkvPDwxeohkKEx2K988AKychth2yuD5sPcfyXyYoZKE562eEBTT4U7d3xfM2bTNkwE1sSMy3GnMMRU1",
  "key28": "1TzKKNVWH6brNBrjQpgYpYzrF8tGmHe8vR3Rb1EakDyaY78wtUuqup7TMgm4zCJcXeW66GrTcj7PV8VkH9gGkJq",
  "key29": "4RC2p6b7FBrgSwk7HRFed4h8FTReXuvbyhrETT5fiDd7545xA7h97nEH3f38Ubjjam1H4btkshiBsRXzw8h4hYML",
  "key30": "61GLX5eotdmXRv4opcbAS3ALq9BeyX172WBukypPCwvBA5oBbxkagUViP9XaA58Dp1iHQW3uEjjdFvLghvkY7fDb",
  "key31": "4VGE8jKvqWPMysspgxB9bYr1YYgbpUjqCydyqZBz7NWUnmB5iSNT3EB8LmFKD94n3ZkDw1qRva9uJ7REFD64Jmpc",
  "key32": "41pnaHABUnVSdYhM3bAi4FTx1qHZcK3oJiycKEz5TGqb6hXEyY8JEmzpMtxAX69TTSBPzsdm4fM3ihs5o79y84UB",
  "key33": "3XzJQoFuzuanTqdiexRN8XzfhiE8aYQr9P8zW1y2or1E6iPD7XvaCvh53QgguQ7WFoi41TaoagWrs3ci2CyFfhsC",
  "key34": "2cYjUcTPFdb6ok1XM2PkKf6at2sL5KPwXKU3RYwjhh4WgafzdbagHudhFz4YyaydBzedsttVwsbuEF431rhYqyP8",
  "key35": "5oD3dE2mKKB4SdKTAcsvTArcEtYsUNFvKvgZZtxjWPNPq8ymx8cWdRF5EwdGfxHgE5fg9Sx5NnuXwadq3MPDfPZx",
  "key36": "4WG4fma9vaPPRwMwzHHBvX32G2Bx3DbDoxVKKd1ChxHNywBAEej2Z34B3PTbnchGbtFBbzhHcd2m3BcuD6KFaK2J",
  "key37": "66dXPvNuxxJS6T4wMQiEEpPBpak58UwwhB7FgZFMjumU4EA6USVHwq5Uxrup72RVe4BNJsDzSHy9h4ZDWmuV25tj",
  "key38": "41iXoX1zRaNsxNfFdZ6iVVJbU23MVLK1CnQQNLCRyhjbQRA4RjEoGUnug7ehXhLajeHho3Z5oH1cY4C2JaYUr5cE",
  "key39": "4RHsQ3PQQrdJx7GkP7KS7FZw4NeGTNCEwKHZKT6JxGvCteuoAN2Y9JyNAT8xXb3wp32w5DeqUFnxAH55sHvSohKd",
  "key40": "MpjAtGVVKLCsBhjW6nLr5UKgzUeBQaAsKuM5YBMaBNHgc7e3xj91cAv7a7hadQ9HwHg5MvfqQfz1FBHGwitywy4",
  "key41": "46m8Y64pjjmsjUXFMQmcFbzBceFeqwrCbvsSKyQCtvJ56MFEwseWiuKFm7tCyxpBz9Sxqt4dLRUeZ5tq7WP47je7",
  "key42": "3jPA9tpGXmLAfxzYfa5SYZY2yo7UeBXhZfjN1LBznJLxkskJna2pyCYV653N1CeQ3AqQCUqWh1W64VgRA8B7as2g",
  "key43": "3DboeJpTyyHoVurzdEaJHpi3pXnhXAPiPfyP1aPUgFiKzFYNkJEJCLuRNVz54zGKL5KN92MzPcjFFD5uTBarkvnJ",
  "key44": "5tee97Qn1YQUTMMBExgh8iEhNnYTKVVEzabwhb44XpHz74af8MfAE5GJaAgrwyXK7LQURiEeRwSjzHiGLZK5TzK2",
  "key45": "2tt3TvKd7vBHW5EGWjaP956sARzLmubmKCP7mugPMgms7M3zhUgGp2Whw9bhXpMjTJGLYvmZX3iRy3fzURXW3v7E"
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
