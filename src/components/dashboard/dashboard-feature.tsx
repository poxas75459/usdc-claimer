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
    "3g2rrQSEJznsPupyThLdebQxcYWgkoX3sQm1JhhRoNL1DJ3oyAY5j1Dzwc9zHmqnBUpAJeu8eUwNwNByYK5Suz2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d3dW1UJLkaMjJFTaY4pU7Qkam8mbUdUvozHbecuHfB8P4E3GUMobm2yF42YmJifsppdq7JMaWMrvKnfiu1C9Z5P",
  "key1": "4X93MTmtXCm3hcfSVCLUwEVp2oRocvLNzMJSUUBpSov7AqS6aTCVSbodk8miYpYp8if7iMawnXP4GAeUMx8F4FnJ",
  "key2": "PM4KNc54exGB8mqgusiRhK86Lbzhw3r5pgrFDy5E2D64v4ryVgHAm6BsFzGsEq6FfxH3h8Nrn3cuEj28sYJ14MT",
  "key3": "5CfmD5Una14H3tXHT6PCs5jGS4BeoyhDDLWR9qvDhrcf2LPnUP1RYiUgMk6kyzQFA2kvvSXYNThUhqMnNHJUqmzD",
  "key4": "uBuiioyRqZ7N4XHojs68Prsa12LHSTLk5zExMxs7EzfsnHDa9ib2GKeHxYvxgqjoepFJRYLhyvozeYC6tjiLrMf",
  "key5": "3wH4LQuNacVKAhjCZcUqVCNZ9DYya44jktZC9JkPxM9p2juiZPjcn84iNSzWAkPTd6yduZLoamQFiaYYiK8mfYVT",
  "key6": "4cVqjbsEQSvD8o9eP5NcsSFNZgryoKpmy5xXPLqFSxUBiFwUajsWNAwiy3XBFVRo6zT9XuELQFw1Tguzam2ife3p",
  "key7": "38DRvjmX5nUH4cygkFWFrFuJMzknHCopSWwgQGwzZGFgKwQ9UtbcburCNmfoFNGdqmxzT64DwDxWrkNVhBknMrnx",
  "key8": "cJEGjebyCux9GG1uMPysf5wKVhTGdstDJTVvn4L3GKV3YBRkPMf2een8MvEebiq9i6Wk4JjJe7pMdiMLkQZuX7m",
  "key9": "5jmEZQG5FjVpnNWZRSQccgjft1ai77iApx34ZJ5uHyPBM4VRnRdgE9gBzwFKgzPMCGmbMrDZ6uSMsc8Ny2redQ1R",
  "key10": "3zP5mv85PXbxaXxCsLzSo7kLfhXa7RprEsSjG55FyDMm7J6gEMQtWguziibgXRTA8hywKEyBSBBcpTq6Hhxq4rcR",
  "key11": "SKodL8c7CcrZbLE98ozmMZyYN7b6LM2BHryosiLQrkDDUTHUgaBeYXerKWN4xorP96FpENWGwCTCHPXqRqAV5MZ",
  "key12": "CwdCtcs38gX61uXio6f6KxTqHYonEokTwwDzEfLAGPQ6igvV9D54sNVbTWX2bRFDtVuQk5c16ae8ipt8Dtm9dm2",
  "key13": "231sH2Drbd2rNtXycKzjpzZfS668JX4FTxyTR55HM9bTDWg3aV3d2735Z9nQArLVtH8L7QsYyzxvibtsgnD9LgpS",
  "key14": "5WrC2jQGCaaMMkzzfFqdBUwWP1LDkHqGNynaHMD36PLb6Wy2Tyd4ZMDxbsq5ajNeyiNKyunxeJD48o97uaShAJ2e",
  "key15": "3xAkH7nEiYHfv8PuEB4GJbVNP3bciGpHXFTvZwoenE18Nn54xtcHKK2LLUPWZm4YMyC1ZrY5hKFZrQX8NC7st74p",
  "key16": "kdU1Tcv82kNZgsirvZr7HdskwixfhCBA7RFPGPY5XNY4kKFxKwmAQsGRZgDMNE3E8Kb1weDPUGv4P14465Hc98A",
  "key17": "4J91GuPU4uZgzvLu8K7CDTkQSftdq5JUzeFVykytbieeRbv69ofni83iWo8ocZh7JnJ3cAnvznvBAGvzfTrxNrPF",
  "key18": "4NxF54LYkfpRm2kXB48guazJygCzkdapkz7zt8j7p25AvziN7cP7VJQvanGe1zRKPmL9uVpxGYo5RA9XrEkyfLU6",
  "key19": "4x8puMyrZrmLXJfbmW7KD7SgHQRVzx1SbzWb8du7szDh7DKpeFZ4XA7KdXrHmgv8Sh5f2UmMJa3KM3uxTYMKFPb4",
  "key20": "45nGhSFr9EnftR8ozcGgNaPpVKtKR6maSMfap9ZuhVY4G5oVQNEze5BToLKzGoVVDEKqWed9PHCRdqH4WFZXm75o",
  "key21": "2LetKYvEwrRtGrNkAFTamv532s8AEU4PyunSYxpsCjLEDqEtvPDpyeHrqvDcH9NjMAuf4Fd4v8S7tGS8U5h3pjag",
  "key22": "5svj2DSfDDkfNDy3xVJLAseySSU9zAbN4pVrXNFdWQBbhZG76t7Jx6baAm5odHnTk8mzYxoxXL3hVwtgS1QS88VG",
  "key23": "4vwBhLg3ZuDMVnVAoHZiGdJwcJgGGQ12wSMDnjGSaZ13iiuBe6mRG1dGPAYf3wtaqiyPezBPw9X3Lbj3aMetaA5q",
  "key24": "5SZ6S87skCjEPmmMkA5nJJs99Z6t4a1maeGaxfwdoX4ojTDCMSxPeqkyRwZAdc5ZRJpayCLbSm347MHGNFgAZgWF",
  "key25": "5xkiMNbTfNbXvJEcoW3JvQVKiZtHsVVG6X4qm8qLDsyTucMkDETyv9QuSdpzjQgJ6EFYvot5y3Sgc4VorhkgzeMY",
  "key26": "5EpLRSzPDE7GpTcoFxZHN4mtcuGThEZGvb3pZf6SLiVRDeF8xCYQbRNTp54K3srULeVU8ajCJwAkxpGJWG4dS9kz",
  "key27": "3WQguHiuzdTxNqeM9NVTNSa41phmKP52pb54DdmvxnviS54MpTZfr9KhDoU6PNeWrfUB5BiDbBdJRqcKpCoFHx2N",
  "key28": "4VVm573GvDgaKo32QxYueEax42Q5atxxuPmvfmJqEo1sRdsZtpwiwB4b9LudNGdfHi9PqKho71bV2dtLnvskAbDX",
  "key29": "XGMrHh3J79jkZ14gKfPH8G2EEDQ1PK6fM75FuwQPTWku7bMVFoNTGnc4EH6fav1D3N3RH1MtwK39usiPF8kw6sx",
  "key30": "25YQj9RYELgw6rzz19S5DzXdyLL7tprnZhqAMH52LJnzGAkg1Mq3b4584iccruHUbauWtvTuPKLYtfaXmvCDMTh1",
  "key31": "XS4cUiuw1p5FZuDJpZpmsBM2GziPfCV2wgtwrZ6RGFE9zakspufvsUrMiQ1dHggLeEBimhfPseECKjBXNdF2zKa",
  "key32": "3Cb5eKPUkzFCJUSh3DkmJP2daKgHv3st8ch67eGhMNmdiGL8Kb1hqhq7M72FdD8MTK1BELP655Vo8wTVtp9ndih2",
  "key33": "49SrfXd2zyD3agf73ZeG96pnQ1eEjnk4WuSv39jXSqY9uz6jSso9SvUcYzQtDiEpHHf5eAnVkZgXqsnjEjHHvK3L",
  "key34": "4UEJjZ631yvN7pMXnBACsbFeA8rdTjXoEUqJs8qTveZsiTX8NGabW4wKCv3t4ZEFbcKXFjhh25EjXrHnnJ4ZiV1X",
  "key35": "3he639xDzL3zijS1JMdADJx2KrYam2GdYcFrk9GZrcWZU6mtS4RRwu2hF1oxJuMTzs6xM7uh9obRKubJXUrVgqda",
  "key36": "2zgiUFDkThKNiT5sssXra8n5FU4yapq91TdjHcSVtJjHa2HBJaifrQ6LZvU3kaypbUEZsvJSWf2NFU3LK3tuRgbz",
  "key37": "3K7h2yWk2i65ys24VpUXoG2hVoeacTFLt6cMY1fnYuztesx1KBPdgXDAeVaQcH1YmxPpd8Q2PC56ujXt3FSsj5L8",
  "key38": "5eJseYHz5VtH44sPxHnmDMXNe6ith8tCPJcmuJ3qQeJHMz6TsA841NRZNRPV6NHDKavxXPvtFYdqrtq2YiJYtCRp",
  "key39": "3pGgViV2GaB55BQbQst9rb2QxG5xaaxGFETSN2wiirn48zknqiRv9hdFYcyfD4psvHrpXrfeKyho7iTjZyGbQm7E",
  "key40": "3QvAMRDbXw75BYGJGx1p1Nty7J2mNDvbsKtuqdDCRBbQNcDSviVL3onGQ9xtA2Pz7HMWhnJ5EGxFwhhHcGUm1NwM",
  "key41": "3FzckZJqg6NyvMaytFnJknoYjvFzCjBAYRc4wuaJofKa8tj82ttYzQHQ3zBY4cyrneGZKg55uY9KihZQaMwKYTiF",
  "key42": "xRotPuBBmFfs3MV3pW8H4kBctioHsYU3tRwuZCK4Xa6juDmvfnZevtGt54gqFanrCqJFeAb8RJkhDcXyooeQ2wC",
  "key43": "2CGrkbmstV45A628Cb39Nk7zNtpdYWwg7ujYcXAwJDDGAhwDCogMAujJdqfteJoLq1mH42SBQaaLVzrPtHprxk97",
  "key44": "5nxLjA8UE51wDRGaizVGeV6vZfcmdU1t92bkDebadTpn7rQ8Kf1dZ5qSLsCh64SUzkdm9jcseGQjsHbziSpBU9v8",
  "key45": "5NJCh2JLAwELotSBtEbYQb4aYXN36QydjV84oVjY3jUFNrrcCkBu6kAx8yumNhrbVvFoom1gZPy698589LhWrPBg",
  "key46": "5cm84aZaE6Zyk4nhBCCLb81h4yjYLwVAAuAEN6tf1oKwHWXQwMDQLoap4sz9rwtX9HMtYnzYTV19foWc1fm4aUD2",
  "key47": "3iY6AfR33xBm6HQxDyBNabHiky3AJrCJT1o4axtde92ZMi5LFWUmGEBaKyzSPXJTmeSyNuFibnnoqcEGRbqEpLhC",
  "key48": "5XBLZPSR3ke8BgNE3gFryzjungtJeBbQBsH7YEivyrA5AYKJAa2jSU3XmNQSmpyNoeQwi15F6o9ybycs9wDHZGxg"
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
