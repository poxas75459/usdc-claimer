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
    "3kD56NQsXAD7CPmE6PjZCdNwwrj6MSwGg5JRkbvX5ip4jpBq7n4fJbQZCnxJidQ6uPEVfJinrhQHhef7rC527tQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51gfua6eyKg15ket9XCvTNLpYNiUx28rkVuCSkFFggFA5sy2xhGCFDLSueQRkK8p6d8FaGGtYz5vyir6qgNa1xQK",
  "key1": "4WQnt5eD7XyDQvz6KFG5QHjjNTC29qoQbNpwiTrARcSFqRk9bQ66dzmSXzHt5Uk8ZNpeShEPPfeMRL6aD81a3Pd7",
  "key2": "qNe2skNizCUmVWExk25kBdP2iW1RGJoHQbaRHtt5ht6jEbarpdyrZPrqLZTvLuWDU2rWshZwFWpgWZidvMmSNV4",
  "key3": "4xwqRN6N4wkg6ZfgbGVwb3Ub4gbf2nucveKZaLEaPWLdm9yukBG7BAGaRffLvNW4yHzRbfemmhMD31jHfzo8hfKF",
  "key4": "4Ft6W3Y4JRwDEL4uPoj7D9t3MP5ZYCRFpa34tSV81if3GaRGZWuZpz26gFGNbPjcBf2G27kkWGtv8D3qT2zzrmMQ",
  "key5": "4wgLufnFpCXNh664nonzQvbiXw5k31vvUrfADefz235LtsaQHXdkYQi2YGDemu9r2kJSfEkuu8AiUJcPEgcsyihk",
  "key6": "PqRNKFTDWfs5aSAGUKe1QJAhzP3HD738CJmU5Ry8RgWgAW5GzDRk4AMzxnPaSVnWun6jQUtBfhENBRj1ViBYY2X",
  "key7": "4nb9QmopBdQrQod4Kqi1bHFUEpAnD7tR4DQykNUV2k7e1vX3XDiYJiCWW62misxeTbKn3Qb5GACxriyeaWXe9qKx",
  "key8": "2cKoaUxsMXApcNh8NHnCJaMt1pRgmoXcSMMpyb9WJy9fgHvNc3pVMWFWAz5cn7XA9GVjVksHoWUvazSmiidTW8Va",
  "key9": "M5xSq9BJTgDMr4xt5t5imGR8A6bXLpCry2R1FxgQeNLhC8RTsrX7ZCGTo7pstnniabNxzaKVmhqnvwBnNs9chRi",
  "key10": "28Z6zuTZWN6hhbCZXsLwbDzXwhzG5PWMXW7i1t8FjWpDQcZidhkiiTuwA6iGuQcv1RkQTkESvAeni9FL5p3DnH28",
  "key11": "LcBFSfe4EeACXxTKFChcpj9FK4uZt9Ktse61Xe1Mx4NL1wqs1EWsHSUvRRWhXqQvx3ajPJJE2ofrUD4GTM16Rc4",
  "key12": "2K7xtN4o5vZKRK8FkoqgJGxoaG7cBrQKKnNyj2bzi6Bmqp3Xgki7N5e9EwwJCVMf8dr6XmqXeKexCzrF9megsEfc",
  "key13": "ir8HqsLwQWAe84qCHfHMnHAaFt9BeMgdFthiwQs7p6UhZeJZTyV4dFKdQHSCV3sgouH99c3AGVk6Gkr5rXmxb1B",
  "key14": "4u5cWmriVRtUKY4apqEp85fMtWLt9Pp7QRJVZdCYej7nUZKN6mTPcPUgoHEaTYRbPYp8vDwUpT5EJG7BhaqUgt4s",
  "key15": "GjdkQGsvddmSAZ6TTVVgwAYq1WJ4CYkHTUMy6A8pVDAh8MuoaYruPT1FCCKnF3x1sNCq9aLN4FiQG3B886SQ5Hk",
  "key16": "5GcZTLrz7o5A7Bj6Zzai6kPodKqprK2g8Jzyp7xTxEvGZagAhTgBVMPXeTuRLw3rKVWUjX95bXarNeZ2NudVdpdP",
  "key17": "3eTeNeamU6W5aheK1YTFRGiri19x1b3GP93ZrNJzqPcdjSYUFUT3BdQ8rx3uKLGnDLvWrK1fD66NQkJNfArg4eP7",
  "key18": "2XdcCJSULSYZGjybdDZAaHRy2tKJH92wxoUuRNgpDbMUVKDKd2XzCJ9ULYtdwYm2xoaFHf6KpbKuzsay1jJQEnoC",
  "key19": "K58LDXsBuMxRNbNNdoqcYDX7SvGSWER9WnT5K7WpKA9zb3q35MtnPLGN1TFdKm7grwivEteBDeRVi1LDnnQLJAu",
  "key20": "21QvFstZ6bXRFQdMMeRrGreJAd3iEnbdktRAmn9g1pyroz6xPDN3RuqMaiTJx8HzmBP12cUxf4dc8zdK6s9F8vXW",
  "key21": "3MtELZBViwTzFPMAuFiPs3tCJVM4SiPfSBqp44MYZEansskydDVVStxmw2ohBMNhd7po7Zt7xwMAkhiTNxx1ShzS",
  "key22": "44Uf6R1nejkn5znK8kB49Ki9hXtK2pj3FYJarpwd3sC6JP51vJE9B2RAXR2z678zCjKBxQbDDpozqAKCLVqMVtsS",
  "key23": "2oH6PwNMiDJQa215oP91j9SwVYCjZ323s8ExoH8mLoDyVQ17GEH4bsJ1bCJeggbJa1BsqTbineH5udbg7LGoYr4",
  "key24": "ScDpi1Q3qZcLVPeMBmDCceyWY4BPcnZUYneiHCVRv9fNx8qi5a8wExqpAEyi84ZXY2vmJ2o4DGDtePuYY8fCvKa",
  "key25": "2YgeUUV4sbGC3PRYWsQQ8zFkjS5C662o1odv2Fj4HJCt6dznYaV7FGJiX5pRZHdt3jbzTR57oqmsd5sBoNa78bJQ",
  "key26": "3DEz8Kart9QaJQiSdjNnLjTdhz3YpVcw1qcNcMLHiA6Avv4cVTVPADEtgH3zW11pdHSavedLx1dSDPU5MPRZGt5n",
  "key27": "5mzXQ8azwprudFUEwcHwdaitxwtD97K7UcSNrrtbUPYmeN11Ta5xSrvU4Mde1D8XpRata7d7gsKNkYzdZPzp7NYw",
  "key28": "2kdnTN2AkLerDTsbYYvgm3MMowHkrK3bdAeAubWbn83r5qeehVXpcsSdKAC8BccTFppux5mupYx1TU8ikHoHdQ74",
  "key29": "46jkU3UyxCQRbhjZouQH1Qd3U5kF3ZkuC8rrqJ6rtxj9pgsV3gyu5BDKsDGhUDzF8dMhBDmKzQ6ifd3wMn1P7QJc",
  "key30": "LAtKXBKXVu7o6LrGMegWydFFQoeSiWcajtFV4VTk2KDx8VoRvi5mxjxnCubrQoYLPRixjCbCv1cE9asFY7GsicU",
  "key31": "26fqqPkcePkPLnX5o2Djp4DqCz12WnFfjsH2pBVoKiqCtxtEsoBS7PhUwQ8wsDeAGMRHbdHgG6812tV22UjPANPZ",
  "key32": "5Unh5DHS4Xfo2Jcnu5FLgRefisvZGHydhFMjJgxEPKmw67KY9kQ7jKQk6zp2VuNVR8JpeVhSf5gXmBKaAipUBjAx",
  "key33": "Xaa5kAvQ9jvzkHhBkAufq25KjZeupuy7PF4gcFAC66XquY6wev7E4WftoJbc4XPcqFP1Fq9hXkg68KCYB8V1m7Z",
  "key34": "5wjxYNpiicRuKL6t97pDdTunQebeGSMa5u8AArDLZS644MicyzRhxMRU6wpfaHJbpD4j8ttkVLfXzTsSgzaEf5qW",
  "key35": "4H5E6EmRisYPz4A7KXtVV66yzkiTzT6kby4ezavxCJzZ6EZqDnnLnHu7movveZ3hordTJLS6uNMQPn6yo281WqGF",
  "key36": "XQmw4TexsT2hWiGNt6gueYqRv4RWYCLjdckCBgWFm76FMShmFsmRZYMCPqY1ebmdPVbkUkw1pqzVMbTx3fNVGuj",
  "key37": "29y1DDdbqX6zcih8iL8AmJDmkJwmdLukvqD3cz6Ckm8rHthpLtphfJ97qXxrAQip37qJi8DXGpDCmdnxh2RJDTTg",
  "key38": "5c6eNwn2TFkR3NLBqDuSp7BSD63mh5nLGF9HounnVVAGgbZKU5j23GACciySxzXfrYDPVTEmkhHBTa6tnozpu3X1",
  "key39": "3AvB67tj88v6D9QHtkYXsBjkZS5k1JZ3fDnTc2XUkBZcZYJr1uV9SMD9f6FwwroQLN7ZVgvhKMWA8jgvb7kLDQXA"
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
