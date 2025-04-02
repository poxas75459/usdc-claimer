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
    "hrs8X8DdWHcAPY7v2EpxjAs2ybgEsGHmZtAA1bPebLgAL41jCCTzPCJLB3sBGUs91cfXMajQbZ93ZmzVHHaT6su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CydVxrsx3mHTUGaL38sbPeVmFUSKDTfVkYxkXh4ijiJ4aJuQTNkp7ajqVkyc6JPPCMaicvertDGUtaxdQZSxhzQ",
  "key1": "4EknCRZcVNE1WVm5TpH8BEFpLcnT9VGAqWpG3crMg5d7UnsJBHJJzM4SdzXzSkDqoFsbFTN4ZFG6jQxyV8YV8nZn",
  "key2": "5Mbxyn6k5GP9RQER1mtcct3VG8cR1FFUuNbkrQEN2pgZXfMhtbWtQj7wPJALT9Z5RAWifc7bBEhsDqA5cisKX3xt",
  "key3": "5RtCaQztBVQ3c34YHRQiNHzSHWcYA21d1wYYRJSpb9pr2RPxVLFJ5uAQCKdGEdfRo9nbqDo5ynfoPEk2K6fnxAHb",
  "key4": "2SFrSDaek55bfBprrrKBirDQK1iPKN35VpkSZTeigT3s8s75woeYckNEgc6adzGsfdRuFjxVdW8DW2pEqpt57rP8",
  "key5": "6F1LLBDkKFZkMQPCx7f61ey8DgieuMBG9P5fdCfUDmS5yYmrFN9vTRBCRfpJo6vL76pYbGygyDaZKsUD1AKiM39",
  "key6": "k81QDstKmGhoPa5aV1nKCgWt9GNnv64YcqthKYiyDQJUW5TiU8xRMR7NgYeQRMaTCbyCjG6c4C7BAgAPiqr4p9n",
  "key7": "5PSLcd1FTBopXHQo3j2zogk2U4UjnMW3RvHEDD4UvjGUcokzZEgWTBXYzVZiT29or2aNM6AFZcyATDPpLxW9uSNP",
  "key8": "3MTFjsRdfSrpcsNUDAygccFymH8Jn3TA4soTcjsvMr62jognbG7n7xYSXLajpV3twYwKWUnY9au66RR2j5jnvXYC",
  "key9": "UNs5vRq6TF92jn8fnBbBeNZvL112c36kaQx7DF2aeANsimEhR7jygPrRF2u8j27Sr8DFpny74J8ghnKG6qCfSWH",
  "key10": "2huym53xPFZMtQ97eBHchSwLkVs5uxYESjAEVbUwCkHxG1w6wqsovpEQCczHBs4di3HozMLzP12ckd95Bqxg8nux",
  "key11": "2S4XQTYzJcJeFc9xzaWtK1Jk3H1pLhYZjHLY5ShbXu16i6k78Xap1pFhQNtMt1rPS1bNNVcDXYFRkN6e2v3LY4hv",
  "key12": "JkN5X5RTLaoXNJYf3ACbfdaCnzjWXZtybG8m5maCg8dTj7XuszXSLYJP6bUUojug2HRdvR67jFV4jpqfw3hA4SU",
  "key13": "SKdWkFBEKZX8UGqR1W3VB5RWmJGERwHt5WcG7R8KEH51tiay8ucfmCDoe7459JnG6PodYCCN6Mm3MYzBPuhZoL2",
  "key14": "5v3oU9eAe7akouKWo5oMXBCGJ8FmZksh7mujDBQkirFrwfEgYYavSRvG9PkpHun6cUjaBZXfGAwZSAj9Q9zkPbNG",
  "key15": "2Kh96DBG9DikPxPdbhnSefFx1AKRxXKFWui3uWW9z5cssMFBGfQbeK9uQMDeAiuKvSV3Qmv8jRP2W9DRhVQPNfqU",
  "key16": "RpwgsBATXds3kecroBQYcvJtRgLgWw2hU8Hm3xFQ2hoj9p5okAH64uQ41GBzMKZSxwwytEF5pmYP79ggRbf5SoU",
  "key17": "57cAm2YEn5ZLYBtsy6D96GoQXD3DZFmVjwVHVgDDmEwDqEuzs1pLe9wLTLGtu3EbmxU44aVGnqy6YiXmjHswGuFA",
  "key18": "3wPp1GEj9f2xNUnFtbmapm6WWcoZ37TQKVtWezXV5DQ48stLQNpGHEND1BTY9QXSQS9qrXj58Ff1nGEmDcxcHxP",
  "key19": "5Wp4BndQEfy3io5kxxsFT8RZVJRBcReCurwFT7D9iS1C9LrKUEp8p5hQmiubu4MnqX1hNyGzZvbFh6Ls6reVSAtA",
  "key20": "ro8xpSqbognYXeGSRohe89qW42DkNEefDyvvyCzaJso7NszELu6JfTYHHP28wcnzsT3yjvZKWRXN9xvZDghU6xJ",
  "key21": "4KZAxyLoDpQeGqeZN63WR32YWiZRoruSzSWnftjV7ajrVoACyKxSbPgsaaFBB758nWRgvPG5ua7wLSiVbKyiCaBz",
  "key22": "2R1ycndgxjgkGUwwHFCTuc5yB6UH2Qq9rF8zNSQqUMnbRUGE9RBRgSz2XEMBZj41NzM8u4end5KZVwiwugdKCNvU",
  "key23": "5qbjVy782RwvK6i6DezB1azLSzBC6V2f6wZpY4nsoUQSX1w4g7q9CBYkrd19naZJDfvUdDLgZwENskexKEqyCC3C",
  "key24": "mcRDCywzLpRw18tot4DqGTUXgonWg7FtdjWqj1a9DLEJ38dHww8yrUa9uxxQxCgX6HrzDU67wWzNhMscmu6Li4r",
  "key25": "3ZjEZZBpQRdCqzG6qeCjQ4rvY4oHDcTpu3DopAzp1NymZCXw9inLYGFvy6v8haM7CtVxcREZtxBSepTWrx2wz8RA",
  "key26": "2SfiXNKVAV9ee6pqidJXT37S1WRZnsJBFWkACHs2x6s8Usa4fQkrGrVVBcoDuJVmpHrfQYaWMnLhKp2d2ZgRsaBt",
  "key27": "2N3m11SVWu2EBhvri8KS9kxuZnETzjhUE3eCZJ1dy6SVjTJRs55r5FGsYB6qpjyRrZsSnzzHL2PoGn5cBffBxzAd",
  "key28": "218JRAjEbLLPukNG7wEewfz935XQFE87gpGcvd9cdy6AkMHGdFda7qcYasKbjKP6rEToLTiHRUV59RVjUnnvWPqF",
  "key29": "5kQvaJKtUC8npF2oSTH5zrYTpPUrr9jTNtyHR3je25dme3MeMrtyt13W184pK3zAdLvqoWoFZVRb7txPdfBrRgZF",
  "key30": "pXe938XwFs35M9h9p671eE2MUwt3q8sNcZqSx3Xmwemx4FqyTxruj6ipewzEpqiBjmRfUbErd7hX1u5TAS3BJz1",
  "key31": "9fKf4h24otX82yKiUiyEXjDsWhpqLUMUNRbjNFbX3pYdQQ1dmywQMvnNkF1DBt3CtcuSruFGdKtEV66Vcjn2DBb",
  "key32": "5pjYaETURn83oTp9b8tKozZib99TGENosmoG8b7HBEPckdfEoNthWkEzhxyazKaQyCrGmxSEC7kdaskSGrEQpoF1",
  "key33": "25htrjYCqZX7GiFbcKV599s2wEmHB4RvTC59xUUhSGGyUtEhqVWGiSnJujvb4625vTDs1qQXwh1SacTp58J1xYGL",
  "key34": "4hD1qcb7wwY3SSja9sNBb8mrW3Bf4Q7MiF1D4dQaAhYRCcmwHM8bFrAZcAo9VQCWpVuMr9A98HrPRFXMbgTbeUpY",
  "key35": "wDoVeaEEFfpRnQVfRyqnAgWve8r6H8PjrFfTdZczAZsZyErNVCCKCn6Qr2Pw2xNYJz4GvyLcEuAEJsFXZgfX4cU",
  "key36": "NXwPGhG3T2MMEsUMczTDxJvDvPZF72CZuxHZMov669wSe1W1BZcBDqDZGhZBxuhgNyC6MiiNm32zP92LgEaiW53",
  "key37": "4u13enc7UMfbb9jeHvkJYBcq8d8hrFnuT5Y54MXM2tefZW1LCgJsuzUq8uhcT8fEiUAuNv7QNGvy1JNPLpTjdkqR",
  "key38": "4XRpXdknQWa6ZSQGdTnpvXUjt1RpsSjK9DdKtNaGmkPGWWspYPong9HWpBsgSweHeoyW1y2Tw1kqmtnRgrDhkRGn",
  "key39": "5N92DbKwye5A4fda7XoAEdfAYviY3KAgeQX2UFxoZSXZNX2rm1KXn2HPrpuUkyeJCzdSmfgLydjBeFyKXgK693Yp",
  "key40": "5oZVFL2gJaCHeS51MSrxHoT3RgqdZ2TJDu1zVTSm1YWk7mybjrMDbJodfoHcxzZqQJsVJrDSMptrUw9WBKJvieEJ",
  "key41": "5nvFDnFpJxS3amovcXAqTDtCV2GpBveJe9UgeZKe9NbzAJx3moGmVkM8viU4N4XrMHghEQ4ZsKorFvVNCpGDeNCs",
  "key42": "37NtLo3xFyTwo2frjEmScUJUCPH9Eej1E1xtGbhw4N5KR51DvAJRMc5qTAbuv9DWC5UwJHv4LLKnZ8rhqq7S8VLG",
  "key43": "324cPj5dmNqJ2iAWD2ZsyKdZdt7FTbKUjkdjNDUEKR2vTpfTwXj2QKFHqCcVs7LT83X8FwaMEptgrBYoPB4VipM5",
  "key44": "3PixwN4wR5oEdMwcza1KTmnvZt3aFu4gUdb8SK828VQhugR38MaQcLLQErFBFyBQG86Ft9wgqVLpN6xt7zhJQ4tk"
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
