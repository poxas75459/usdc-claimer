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
    "5XsEHzD2Srwryx3NZZgzAtF15wqaqUH1j28vVsppFAVBF8LEZ9GKYiEJ7JrSkaWGmRdPtnhKqU2kF58wGtxvoAFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNQvFAbY3S8DzkMYUktEEuvnbjTDw1JicCyKdVzb8GGwzT8c2rmG7uwB9eYHwDDFwupMfCjtdi6s6DQNseekQwZ",
  "key1": "5YcDZZbe85RoxTELCj8NTwdRyzXoGbqPWrv3hNWeyAyuTpSCgYB69AkoC6mU2jtMhHUgE9Gn6iWR7dCYQan8bwLR",
  "key2": "45aq9jhobykmhcetwhgzp2igXWYjn1XcD4gg9ChQe44UY5gNFkicxnNTLPHYKcqtEdGqB9XbHtoQMYs7A5mX4HfV",
  "key3": "2mg5JxjdarwnnLmFRGca8LYd4GS9kWbcevrGDFJYdK2n9ZQSpdoBKZ5bRTw2QEawzdmPyPqa6Hihmi2Q9M3Sd9FX",
  "key4": "sQGpXJ9NqfWYvwiQDupHJwVTLauqzhWBkxPAPGrMJ2CSpnLBP6RvLWNRSbAZbbFDuqdDVPJqCbHEEXmsU4TD3Hx",
  "key5": "5fNAfAECpq58PUyE2s42xoMg17uvro8k1QhJNifWxSfLM5yhaxCsaJv1d2xNk1RQciLodpsva8ZjPyfNwQ8ksPYE",
  "key6": "65WRgFPWj2wDPBNqnVTfh4RP2qTSU8ijL5jdN9vSRqb5r9A2vGLABLeCECnyKccU23qGK2xf4fAjfZe4G8aghsnB",
  "key7": "4c5oJxmireQUB4QLo1ZycbgFMaE7gqAgt6a1hsw2wvS7xFjWwoyqyv39USsYiVxEsxWg64z9xJLxrJH4iGhiCWvu",
  "key8": "5gdpwVa2wJrjU4YEvec28Bfk2QFVgsAPaqCrsprq29PT3NL59Z2Ps3QyZDuwfM1tQces6ch1BSS7h1kGrCxnyJhA",
  "key9": "2R7s9ChNyW2mBLmJBLQopJYpNhbwgmVcNvFfx2DMenJUB2V5xDaNrYKKnmqt1Xcqm2ZSPxG1BnjU1zuQ6KhwnnMH",
  "key10": "2RoqnQ792kc2QgCmxUecu25w6RmGgLjht6uqRjn67EQimhSacs7t4diW9nhW6YfNxaZZjKW9epEohHzdtB82uqnA",
  "key11": "54j95chD1GmmaYgE2ekdf4Dnf4Vpyi7ZWQSfaTGu4G7Bw5N3xbREGthVeD3d9VZTEJM9KcVcYevCRRq3pggdtNyE",
  "key12": "3JGMuxcTkhGkgJZVhrsfH7XWcGZPMLuQYBxs1aPRg4enZehjn6vHw6qTVkq6iiDzdoQiam3bKnA52QHAJbVUBizh",
  "key13": "61iQA2hu7g4XjPtFjTK5MBLVcGyLfetUcgzLw2kAfpAhGfbsRkVUbxDK6XimJn79cjtKesp7M2vqkFa53fFJXmXY",
  "key14": "fz4ho4HWddzMRYdLq6gf7GwzfEeDFrt1cJJTANSJ3c4SNAzUbhNaiEAuxzJ98xfpuEbmaMzAhZZeo7esmgarcxZ",
  "key15": "5Jt9VYcBRoAfRb7pJsRndyZxGTN4Wajr59ce3PtQbGSJzCpmcoXHF9AXKC6NvbGBxvnh2rvkCRM3JWKAyZo1co9P",
  "key16": "328qTPY5CpTfsL5R43bScCAB7f1M4bGidvy2czfGr5pCLHGheDY4PEn8FaYoELTWbXUqsA21VWi1pg8mo2RyJ68r",
  "key17": "3iUjRd2oouycgMDNfx3NBdEz8iWYXAUiwegzGuZ5HHStiHAwnZcZjicXwKDTY5q9mBoJr3ECHfgnaQnu2u7xVMuD",
  "key18": "5Q1QPTXxHz6gbdDXec1mGY6mxjW12rCPc7KA7Trquyr9hGwzTfHQMDt76ddVJkC5FBTYdXCskfMrRevuQZ1kSL2r",
  "key19": "ZpsiM71ZBuhCso5FzGwpiSnrEEEBFuqx2gsLEXCDFLPn7QVrHyAsMVsD3ngzDC1cRTtmq8wLHxsvrQu5wUvd137",
  "key20": "3yoWoLHnvnNcXUh7U6sRtEE8FWkCVH6VgmnV2PM5GEKt5eXgrt2D4EqDuSVhi31nvX5WyyaKkX8nUSMj7oBNWTNg",
  "key21": "YmjvSyGv7S7yXgS3sB7CzLri7CiWn1SfeqgNcf9vSevs3Vcrbok3QQRsniaVDDVj6EBWEm3KanZzNkKzHSKgJQE",
  "key22": "5nf4tjoqvczviGpnZP9wv6F844HbiHPE6qfLCSuiU99qE2miBLNabM75M62KmnCmqyWnDMGqgchmrynKG1N6fnCw",
  "key23": "DNV1m6BcaUnGGpdWe3m9NKWgxThgdkgDRGYdscQ3TDckaHBgHgbiWfDNr8fWhxmN1J65vbYqNBJ2vJTJ8U4iS7e",
  "key24": "JGpuLr9ccR1hoWTK63Lh5YQdSG21REGd1eAzLuntHVQoXf2gh7iQqyvma3FmE297qnWVyj3sPB9JkMq4ZsqA126",
  "key25": "3y8yH9LUFdwUdc9Mj2Wc4jY7DSTAsdoAUeYKWUsP1kQ6tmKGHXcvpmsTfp5h9gttxiSpB4z3XMvck6hGH15nD8He",
  "key26": "5mMcYs6FgPPWUAre3Na3qDs2Xh3GnqAfYoQtj2hb9y5N3vcPTC5ATY373Tpk9hR1NRV5HWQDBd545hrMJKVd4VSV",
  "key27": "4Zo4pWPBcDzj4zGxMosjosDAt7CuU3Hpx6su5seFW6n8rQxTzojGRr458UjP52beyCgEhRTSMP1crWT8sv9Eg7sE",
  "key28": "4voiEj5XAmpifQYdUFa265ex1LHEjTsQ1D2HeEBuqkU1arz5K4KV5GyXUfNj4uS7rhSVWD6EpgeYNia3RDp7M8Ba",
  "key29": "EUiiWFdRPWoYpoXC6mRBPyWvWjZZ91YfPYwSPYdASMQV1sbgtGB1rxL3sQJNG2mFqkRwroejnqPfow1uJ78V7Az",
  "key30": "5fFVB6rG39XVCB1vnU1KjySVgRS99DQr46GA8pvZM9iivUfajvFjVsfnWRsMbRTKAaTjTA9csLygk7eWSzT7iajB",
  "key31": "5ghEJLpFvHs174MJ6MpR798mUGhyzWTYP4eeK3DJ9nXKihFw44sPNY3mMy7ru418QES8XdtmNPifqzaUpc82E1kF",
  "key32": "5PSdrWFC1iknDaG1CY1VLZhuPhTLN1BMVCGDFfzRjN3TuzvueHgnEChDsLE5YkHn5S4wLs5ARBpoHRYjEt9J1Aaq",
  "key33": "4kU3E7u1LCKxYmCtKr7X5sxJbY52hLvX6pR9E1LE47uZ77ytKNanpRJnVPjrQpJEsJUzDZ3oydYWEyB3bnwrRQSk",
  "key34": "ynqcaYorrreiRWuz4VhXhxWBRaTeTPeiFiR85vypF1vKWWQqC7GUusqi3VbCPdUQ1pJL4VSVzdTamgrS1L5qcwr",
  "key35": "3A4dP3BWXNChynB6g5FBCy1UMVaXAqqfBWb4cF5QLfMk3EwKyoimqLxm449rBE4oGx5qck4EMk6135E4wgAZr8AF",
  "key36": "67TDu8i8fytVPuFJm8aodKRZCX4QNyNAaYA5NzehFxb27126WXKWf5MhhUcN6Q6MA5dXdroGdsthqqXJwD5BQ82e",
  "key37": "3up6fRXpqMEFdCqcW56tvoMxnDFP2uoRpjtyxBaddeLDw2MCZHWUxxn9Ay3hjwRJBzGubS6wiTW6Mn91PPNc6eza",
  "key38": "3u7sgnfqAtCqeUzc7qeLPd3wpxMVZQS5g4vQry7eqUAZ8sH7XrE9nzEHkZt8SiS9ykVAyA3Tcn8Do2bqCiPtgUmV",
  "key39": "2fudvVCyNNSgzfhP2UZJhh5474ViH3wdnTSqnDYAYCwfy1c2gyUXTWm3c1CYpeMEmCAg5JUSvUznj1XsvWHWMboc",
  "key40": "2cPjV1yPMyyeAU2UFh1p1NkrRzwgmESntB23nhkKBrski9eN6o4qrz5AfenANhMacjg5z5PA91GAkQrxhFasuAZS",
  "key41": "63rXJCWi2yrNDKv4jyFoFtNyKahvfvodsXFVa5TLxXxBaEHKXWxEL4DnrJ5nfu6oDGkxxJoU4FEQ3DafPSDfzzUA",
  "key42": "3zK5CaB9crT4ymcunSFmh1udcE7oVrJcd9tVtD4oLhcGuXoDj2hbSBKScZcwenPnAnHVBwAtZkwTW5Q3XrT7hz6t",
  "key43": "5KADfyFHoYc2uVPiManydpzQ5F5pDKGsAq5bn82Q1NPtwL89M5VgR4NipT8HeGEGBL45fCeT2n6vV1kTc1K1NYhD",
  "key44": "4uJPSURBYNumnqz4sanghR47rMyP7cZmEZ7aUC5cfEcxzogRGTN5PzhcnyaRyNxo5kgfzw8gHiL6ydFRyiGYh2ds",
  "key45": "3WSKECiH4RkbZ4H65CmpiqHQtJQUy7Nqw2fZ7UsqhUs1EYiRqRZbWU69cUR2azTJTBEV8QaEYBbptSFCfpSi7wQR",
  "key46": "3cW3sJ2NisouK1yfPP59euTp4oUJA5Bzf2pd66oKy7rgS4x4fe1Ud5WxtSgrifRC6k2aH9XQcjqvBdh8zGntmhkq",
  "key47": "4BLuqGPNskgaLz3PF4JNxQj1NqvRpHPm6ZX8Na5JJjvC9THeQUD3u4w1gW1Q3XA4AKcEd2DkD4qcr7CcrZLdrFnr",
  "key48": "3JocoP1BLxYWQkFQwjYUjQa3L9qRXW1mBLsAnr18Lk1uooJAxaKgp8H4yLcz8jRd2JP1HF17ZjJnUGupjBbGL7Y8"
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
