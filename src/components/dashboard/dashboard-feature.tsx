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
    "2e8eJbLh6xxY2vP8R6kevxawGTaiN8dQbEDNRy9a5Prpkck5B1FHdd3vPC4CaNpeGmVg16DTPmA9MmeWvguoiDgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqYVsAWPRjKGjTgnReKw1TxsD8AkgYnJsJt95fxT1n7So1N7feNaNovtNr8WPYARr2GkmjkeqWJyzHrNNHYbxo5",
  "key1": "4ZwYYMcym6GC2yYxG1VV9bpoEEHAW8ap835WxUn3bpWXLhXt6LGRGV56d3ddq3QzozpyqJAQAAPEPp7gsBLw7B4f",
  "key2": "3D7ogiTB2NKzVb4pps6RpRzogv3PjywkEMSEFG5NEz79rS4UGK6U8amWzE5qKQWD7KhLT1Zec1C3kwkjKKhjzi8F",
  "key3": "4NQjncVDzQGhXV5RtgrR6bzQerzFAV3XVMbDBoLCrMb3mzsXtYTFNvXaMySGTEueoyuhB3SBLUSVv57KUKB7mwfF",
  "key4": "wR5CfbPHgYejMBSbAxus4nxgrzjQ8XstpCoe2v4J7qDnouQhh5m7pMzeNr44JBFirnBZBf9RNqwiV4Lvqiuc2VT",
  "key5": "5wXDQrpr4oWEEAEVLu4H2vb1X4wvYw2QszjkKRdFoThuXi6g7y2zeMFGg338ELzfeE9N1EGpdgkzjaQhLRNuik7m",
  "key6": "4KhS3MfR8crGnGDwh7uDCiFmxPfNAvgF2JFVHNJCewRVoSLAd114bjzBi4Pb8VbcG8Xgc7fktk3eT8mGfjUs9U2e",
  "key7": "3vzk1rAV1xTUHygSqSLwEoi31kvTDD2bShc5grjq7GNkXTazpfanpKq3wGBkyyWAEREi6nrmvwKMgxCtqR71uQAQ",
  "key8": "3saWHk1P5PVrmAVPasfwprQujREGwtJmMnbzFBQq2dcJnjUvChprnw8s22VozGQq61HXPDmmFRvW3RBt1r3YP7W6",
  "key9": "PUeBmrB4xD2YCi57Z1nxLd4Td6jz4kzUegmVNjXbFq1JsydA8R6K6BHmgmH9Ee8xEqTunwQQZmjo1fDNwJyJ9aH",
  "key10": "2FAqgcN4oPzeaKNQJ8N6esfzcjFEeUxZcHxKXTqw1peBqDVbg6XRHWiZuRxa1TJ1K1Rs2fXKa3bo5zz4jZv4C6Ts",
  "key11": "3uBypsZ6jBvGedQFEQQfNihQLyyuADpu4o72n2qLwG3o3anVC21kyKCHcK8Gaa5KyvaSMDnj4h3TEdY8f61MZGCT",
  "key12": "2NhxVtRxSgU62HAsJGBwvUbsqWCWcQ4Xgd8UxA69e4tjuKaskNcMjofSzbmg2RwDpb1neT2BZeC6QEfaVag2sZeq",
  "key13": "483bJ5EKzeLSqhRNJVZxKdAXrf6MYGMi2EKma9yzmFtcEaduD5TDaPA9NntfUsG88U7bzhfJzymTMZfuHGrFgdS9",
  "key14": "2GdJy2oNEjWYWc1VSNY6NyFzJeSK9jgVnhs5PjVpvb6GmdVT6tz1Amjk4wSgjmHFD15mH2khnrE4Qo4wTY3Tkjgu",
  "key15": "4YxNX5bgQVfbX9ej8Zf2QeAbYKfTRHyb9YbAixKZ4TFdW3ak6yZPSZHVXsKXmbP2Lj4NAMGqetvBpMqNc7TMaXSa",
  "key16": "4wiUy6SNcRdKjcqTzSVtBcdC1JsWhVpsewAs2Hti8HcSttbwwgreCTJVmDr7qDF1FSbKLdvyon4NtkDk7uLSxjAW",
  "key17": "4LMRdtGPTwms31uActNoJ3jg9GWRc7oSgqq6zxgwrv5pPqUkbUtfp3TmGVwjBtKdR5EyRpVBvrfWyVspL2DEqeW1",
  "key18": "5Vzs7PpVikSoCXn8NFHbA4vUyYh81H9ZDpVjo2oYCbaZpPenCtkdHxsuP96Cq3LKTHgHpMMJYAUjgePSszDVDUFz",
  "key19": "4141YYMDKecCCsJTEvPjy3TrLaminext3kG7p2yHQmP7y2yRUEjnyVaYSHP9ckm3v38AfJRRztLmBvYQY37oQSC4",
  "key20": "4VTbzFWNuPMtcAdc3gyxkiSWpKtsufqwS2Rda6m6i68Ux7LFMGTdj51NToaBv1DHXaVyAqGLfAjXCD4t5H8hCyfP",
  "key21": "4XkoZfNvwh5kA6rFt7nwDXrrsi6cUsQqRjCtxFvpjagdmTkyLR5STXxZ6KDiiiqEdi1pjzXQYshdQ9jacX39K4VB",
  "key22": "4pRjJfUwRdMcbXSQk9mprp9C2FfAdj6gWStRypgvMEHYypV5j89woUz4WKYfzL8sqc3GUYUkRTg6oRfsEDp3aYU",
  "key23": "4VcBawrXD1WuuAi8sXSzpobYFVWLnhUXr4urMkanU4WikcaXnhYj87pufE1tq9DCtx3YdPBsF5hYZrhjggXRt5Eg",
  "key24": "4Ndgpy4oSgS7Vr3dqJfmmPxmJrvCeNGRxZVSYuC9XPbhXas7s82vbuK9k422CuabbzNuxtT63sQfrFze86HfqnQd",
  "key25": "4oJCmUxgZF9aSuGgBCQc3JUvDVb8aP2xqCEwsCQcMmVjUvCAggrMDXMasknjmFocEAkzQjUtQFyTCqDDtASnRXZE",
  "key26": "3FHvi6x6jRefdaDERXAHgTUgDCSCN7LFgp7PoCkQP1NFX5V3gbozma6stk4yDJ86BT2FX7mU9KsYofkJ3QwGRUDK",
  "key27": "5o7CmvHbkfbtQGTv6U9r1xhLQfJ3kAmdCCwoNAmRUCqNqwKzMdC4cn5mrzjmiGi9NmMB2EruvM7idNcZ76PeEWVz",
  "key28": "51BMepWkPxtSGkacFvViUMkFsrWDZTz2jHTPxNgAG31t8bthpPBHYYXJ7Y5KS7Rfw2h3eQQYvF3SGCwQeHjuT8u2",
  "key29": "3WeM1fQHbKNhLBDa5pmwewag4i4atA8pz3oMJxuhAfNmXVfbrxBMyGaDh1SxiGYdThZWH63xjgkBSFHFyTp34e98",
  "key30": "4FbZJ1LmdiXvLGqEsKpzegMVRf6rvHNsVendACKQ3MSjxPof2mFpzdSHmYE6n44B4TtCK1cFekh8LNC4Wf4SvJa3",
  "key31": "4yvCzunsWzTbgZTa7BF9BS3ufZzdbuVaKoNWpUc7MjNhYj1FtLrr5G23d8TAH6HaRs9rFZUKdnWimJk8nfTn3NQU",
  "key32": "3NMhUrRbVtDriCPUyyBSe92XKZanqNUM6zBQNtzTbAKTu1jsbGvVzc4An8Qb7MuH8g848cewWYxvGvLY1qSGjigL",
  "key33": "61sfatWRKqjnewjwmwb8gG5GePyoo1GoS3xcr2JksrPVrNyRi5vMmbvPEgXdAVzUB6Veaz4gaARg5fmwTgKW5xDW",
  "key34": "2r2sZYujxX6n3bfW8CtGaFsrKN3sb8mfBWXpnRvYq74K33cEUmcG7s5BVVm1ZrUtb3RrZ9mNGh5qmY9mZ3GUJcbz",
  "key35": "5SdXnkgfric3n9Jhhj5dqFRFHTgiJjWKaxUzVNxui8zs7f7qJwvGgk1LQfK3GYGLYNFeo1kusmso4ahb51N7tU9z",
  "key36": "4swP4mAeCXjzWkcqK1eC1CwTsnXRm6EzvCiE9Nyrod9ACsC6psLFKuwPDrEzVyVTR2w98tDHSffqGmgyFzq4ws8W",
  "key37": "2n4fTrvwuN6xHykXDnN8tRE76ozkgRTSoN5isdgBj3poiQhgG9H3p8ny1agqHZ4GkH5LChx5ftGMdzLCR6e5E2J3",
  "key38": "4v24dqCSThMtqtSNgDmkRvdMdcGL6ZSDWHrgFzeuaTtYiLsHYThX26aPTqPbH2a7pKSDqwMFvUNWZYwEKS4UfPXc",
  "key39": "4wmqjQVsnDdr1BYfZoLYCbfPirMaKGMMHhA2kmdtirbdwxdAeRmVG6gJvawDyw4Z7E4Cz1JQ4yZEMfU6g3NjUdKm",
  "key40": "t7shXPD35LS3cLE7Rb9gnVVAViZZ6vxmM8ooiphYyicLmX19ki9n9NrqoBVWk9yAR4hBaQi3oVK1jmP1Ha2Wmbf",
  "key41": "29zjzRL4RJiX8qsFu2ikQjnEZS6va4JUjHn2Fy6vrQPKSVW1GjBMqN4rZiwnapcjj94fZFYjUH2bhVqoNETXac1Y",
  "key42": "2A3hYk3gDh1cdqPqfUYWTP6oLzKs9qrptH1vtnTfZ6WEBy1W9UT7micJ7v1Xm3M1Gi4xAuHegnmpyQtd2LgPnwZY",
  "key43": "2Qg4pPqmKMa8jJvWLQz3RZvxM5KaTNN1zLxAxNmD6FsTm6vNQerBet2yBtkRqCGysTA9hKm8PzHVezqzFFQjNJxB"
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
