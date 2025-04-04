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
    "27ZJXjTgCcxs7njWEye6b8ucRgHw2dw6h3XH3xKJ2LaX8MD6MXxzfsh1EDnQEAcTRqe3fBNASLTmVPtTqp8xRHRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aLU79fYKHXkArPZnAe9GY8EBBZygBH5hqLNSbmFKGwJ5qKFPZwdeKUtoQTRpwTeinuGSNTwhD8Me6mJeS36Qeon",
  "key1": "3TwDDPdFpVhbRZHF4EVyCcVpD4pAUG8cirMBZEdbNdfwrBpgwYvNRbkWZ1aBfLGNMWDrXcoSs6FsS1MPrb2kd1va",
  "key2": "3ydgGZQvTRw3PFSyff5xpCQ5eb1WutiHSjB2mb2frtwjG68KEeWzw5vBRBQGTKwHJF7bHkPhPfUVqR783MP6uCqr",
  "key3": "2oPdMaiLZf4TFkDx4kMccunJXqdTxrogB2JaSZ6Z8LTBg7yZUxkDdbvV7Scy6mkiNMx1RkFvjnJkp6vkxJxLBPxf",
  "key4": "3R1GgUSppKqVxwJEyYXacigoK4LrdbzuS33duFwbwaJD1GJLmDb4awbVQk1A1LQyc9bu8MoHc4DUeNwVcd1F77wN",
  "key5": "3bzCBdM3yQZNnTaopHi3ogMJk19PqD75eNvqs9hpKn1SJETyuXedsivENerw4wweVyi7fzYfmzQ8rkzJtJHfm7iB",
  "key6": "25dmc7hvNCszJeTStfaphNe8MFWHSYeYjjAKqq1LGDNJW5bZtcmopd2iugiwgQreWsrZA8BVKTfmgkEu8Qwi4Z6r",
  "key7": "4E9EAHQMz9PhdaSunM4v7WKNopR3ppDmmKMC3vgfVFxWY47txmNVMnjPzbxkhCFfewTSnd5XAktriJrPUysKtbK6",
  "key8": "5VyxUUaRJ9bXg3zUnu43G1Y4XCxRsBypR9YHstmbogwtEmg2nu424kEbRhJvRerLfxdTB6yXF2hmGT3MWkTEz5FJ",
  "key9": "TfrEe7nMDYiQqY5zYUxfeG5g8xommQEgbfsSeiwjgPwgb3C8GgSxKELwcQkNYRgvUQYyWWWhPqckAzq8YYV9Gmr",
  "key10": "4KrWXPjwGqPMnzDyakrgxKH6FW46Bm1TS1KKF83DYsmmtPXq5iMRHCutMSTEGWHULp8LEbAvEJ3SoCriSXCTwVQo",
  "key11": "dA5jSv2fpB1rr6j6F4TNMBvNc66aNLXx8rZMMfuQpitLc7pNT6a4PnsR1GTqtpuxKD9Rm5nasA8ZC9DQFD4v3aW",
  "key12": "4wt5B2Q2tfaTkaNVuVosGjqHyxVfcwKegGydoZBP275ZMPqL5arbkRSrkVzD5pefygm56XDgnsptwN8YEEAF5L4F",
  "key13": "379SjXBduWsAwhG3A26p9QDNBUfTMofSC5r886uQHFFnbbmJid3RrQexosSEBa4BcLPZuUvsNqprhA8E8KnRG1Hh",
  "key14": "42ajSTPVA6nJzA1iLViZqYmZWPutv9itoGV7ymJuVKzf7GperrEse72RrrXgMGM8BymT8m9qvPqRYpzcPpQBqt7K",
  "key15": "oofMrLaDtmhY5F8eq7xJxYTFmSxzJrcSifyA5qsfMUpFgxWcH8R3VdipaUukU3adXJdiomJmfF4uBJWhzitpreE",
  "key16": "4uQs6iaC85LJBceCxf7kDthMDxEpQhgxaygZtGzh3FdigLVcBkuTcFvK5nyReGThfZSqBjqF6pSnaKhVgEUNo7xa",
  "key17": "4fYtxpxJ81JpJZaDtwa8KAvpgsW3PnHsAZW1DFtGyabHLLZJETLxsskHLiuwUwgwQ4pHgnv6QfguyteVLD6KWNVH",
  "key18": "3fNZcL3V3Q3sZgfvtZ1w2iTJrZH6SYX4XM3jpdWi4nvJvr7XmTsB3yrkqqtPvomiC27ViMsaKpN22sKanFMz7GEw",
  "key19": "5TNJRiDMcCwafkH8MTb98sKeit5gFq78SVDopS6wEDjedSJ8qQWWytYLtmBwmaCMsdiMkwbcad1uLJwyKPg1u2uC",
  "key20": "HbqiDRtFvwH5Hkay2xekE5HyL6g8P2X6ZuAbs5QsCu6oyPBnpFDKFjD7yD7GYJXerWHm9s7BPdC2wEXCMdVG2F1",
  "key21": "5rgFNgdw39uTAGtMhCns5HR1Uquh6kwK597s4m4H4DVFh27nVLtMsjJzZ4sQsY9T9kQsDMPeHhRcw5gNP3GTGv9g",
  "key22": "47kBCdMoVTkSVpUizAfCDNrdugUs8Zu4VwNdgfFWyTDzRwEY2NKzxSk7F8UUFQ6sozagqXt5F4LugmLXawJFRvG1",
  "key23": "suUGnydbU7we9MNgGcfYWDucxCcYgta8NzU7vVesqvgEBAbscjPQxiZTM2vT6kJKypde6xyTPZ9wVBkRnCv6nmN",
  "key24": "5DgZUSNXzUweKV3NTMkB1Q4g1fGjqSWoffVyrLvhaJLTd8eD7HQgpfYQk4LZxrdeLBSj8e72BrNMBogfzSyp8UMj",
  "key25": "4fatHnaSMwTPTiWDy7tvqJgJyDkxLkQzpNVoLJXxwHRzHcR5otath1ygCYdx5VQHjkYuQaE4dsU4fnT2rtwrs9HT",
  "key26": "P8deZDLJzCnvLPguiMRXhomn3CqfUw9CUKDFGsTzhnmH5gSLBjjXxkzHudxUeZBckVn3y7Q4CM6LS8V7e4tW9wg",
  "key27": "nbriMDG3LNrzqskHR57qs9VsD6tu83WfPqfhWmMX1rGU7GZMnzfH7mxZmKPwj3Ln6jgNVsTBS5f7VvBzSWw7CwK",
  "key28": "2AKvwQQ2AwARrY3AngoX1xx88TBwbkAGfpidfwKyy7Zd8Djh8H2y6Sjj89P4TB5vqRrE2veGMosQSXqFa3XKcXUj",
  "key29": "ZwwMZrJTVq8fgcKxP9Aic7C9AVm2fQ1j8iVJgJo9xn4XTWguWnRAWKHL4E7zrjDnc7QcHaPdZsygeB3x2pgA7kV",
  "key30": "3EQZPgsiN1yCEWiN1imMxdETsL7dmQVD1HRe8MsqYzggb3EmPczYqm5LPp9B3xms8Jc7Fd81NsLcbcR5HxsT9X9Z",
  "key31": "gdYWrqyN2m85XcLARtxmw48Nm7bPpzpFfqcKnaSj6599HcHHSA3xDYZ3CfSHrDGXNP91tTLjC3LPkuKkm1wn2bJ",
  "key32": "3Ud9En4QZFdLR4xZ5U4St5xwhr1ELdoVD7mrMaVcms9TyWZ7XzuroA7HgEmSdnLYG6HjEG47afrbzzFdkXZkyBPz",
  "key33": "55S3m9cTqMrDLL4hwzYESG9qkbuqfdfKnU5ikXoQkh2m6GHgYbWgjiH4cGJTm87rnKLMBZPJezS65S7JbvjS3g6v",
  "key34": "5bjJU2iEhq57jdUvwW12mBD2zZ9mEcJ6vH8iAHd8A5xhAMseBHFpD3uzuVeKXdntRV9BgP1A8Y47xWe8q2B7eS1r",
  "key35": "zN9epqNh7ts8SCSd3wA25egdwHChyApkz93YYb3jXybP54UdMtKd563r9uv2Fwu1umqZWdFB38F2gAzAwurwVPo",
  "key36": "cR6wxSMqz486AU91ete4aXKxyfW2jmrgZf2dweCSq4SL2jmfypkYZzabAzVx2RTrsCEA5LtYrGtBJxB9TPnpMFT",
  "key37": "FUFYCZFZY2tv2apZrh5T38AHdCost3c37c2mRXVatf9kWMr2YDdxdTcxBaSkc97uEPa9PZ8w92ufn4gMEYXsrEG",
  "key38": "486f91m931HJx87WFsfgABJmndEW64mE3otJucKRaCfxXocRaWURdTw1G8R4bRHEe7MP3e4xcdY61PwtTLf1cmRf",
  "key39": "3FPdvUDXpG3L9wcZqHCwV7fNgdxPWg22KTfXs2pF4kJiCRNWjen8PS9bkYzzktLVacBh5QF3bS3ubarPPDZ7QeiZ",
  "key40": "2cisfezsqZehfSpYdbwWi7ePd7HBZbufeEhqtrbfJmVZBu3N4xymDdTGqtgzHpSZj8rvs1JsspQDCJQ11Sxs3Lnz",
  "key41": "25yFpnVN9a7qg57ooq3imwumrJTkGsA9BgRAunLbHm7g3soG2Pb1oE7Vdfo7kkxdDXvQwDja9Q7WDdZuRatqs1ys",
  "key42": "5n86wFU25ARer1vaKZCqgPBipTNHcGrDFHLUZykN1tRarNLjiDcZDSwWSHsDgFz1j71qBfLijRoTGR5GUB8GmiV8",
  "key43": "3BZ3DqaffwbwGyaMTv4SwFBrqAbDo8EYQLXpzMxiokLisB1LuDK63Tu9iXoQbwfLdfNF7S94eDUuJzuvoGmWAT2G",
  "key44": "4vN2XGVZXWFo4am6o45pDpxB1S6VjYawYq3RAkFji2kvnimubxTrGZth6zeo1pdW2HyrBRoa7TFCdpdJU1QgWj8W",
  "key45": "31UHamHqQC9DFhddGw3bSQXHLz3TvzG1FdeTP6f4v9Fx7y7VCBnGzt87SC9y9JmJuu5TyYRJ5ijEqQ82Vq3fcZ4E",
  "key46": "2T9cYU1AazpvkAiNWs5VgwjATqdCAWANNZ8GzyGixjwsg2k4RDwWzRFKzeoKKj7h1QW97bBCjFcVrk23YqoohdyH",
  "key47": "4ChA3wMm5upB6btDui6LL7cL2JQ1ZHhhEAyz442U3ZJ2JBREmVAFTDQ9vEsJ1ZfKN8i1A5vGNBKzet6LyzQSkf7C"
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
