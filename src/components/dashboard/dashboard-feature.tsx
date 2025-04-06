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
    "pXuKmt2xCdEPAn8c8PJGYmh9BpFGNTgLjT5Ckxk69oVSbH1QwFuxdfBhrCb9Mu1cDyzRe3aqAAJNb21aH95vgDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzyJnuy8SAPJv2R6gQaHdRtmbGWBpxiwaqxUGYBx667oLkbfAFvHZnxenSh65tyiNxHVKz9y6yw2ha6nTxcH1o7",
  "key1": "44fKZX5ZNa6VoM5ACNAtZhEhyor1HbXqFu71Vn3F2a7uMRszvxVyFEsaA7SDfjGnCKmYcA7bucBmroR75jZdUYTS",
  "key2": "2ZwLsNkPkBdVXkqdp17aYdwjnPmPZj5bwh3c7H4Vn4ULAeayMTL7iEGkegQKBuynNHiD9F8Zzau7KKnKWXqfUAwA",
  "key3": "5EeCsofN4zDrUvNKWqyvgqt4duyT8kbfRzgvUpzpJ9bnN3ZPZgMsE9bfuew3S8q1z5eH6FUgMUDa64foco6zHbcy",
  "key4": "2NHYrnvpapwd7Faoyhxtf3xyYZyRYjMT9SEqhEDdrGx79VtmkbtmCA1GbCgho2CaLBTjbjDiNPw7zW1i28SJqEPz",
  "key5": "btuuwss7PcJvVzJ5w6fadXoXHeBJAKBJz8nSzn3hRKQB2yYMHrMDY7w4Rv2kxnswekDUqxFfcspAY2S5hGfjTwU",
  "key6": "5xEapvaKkC4YEXc8YAgR3jMWw7vMQWsSALfAUEs9szBU1jNQVdxL78ySrR4GLcgkH3g3H8PDhotU5JaDXW8GUj8d",
  "key7": "5SRA1CknvDHxuCZYgpvvkVGLohEVrzjuiyByhbXqwDTNufsBpboWMXfcJSBTARvyeVVZyNk72eMpYPVWZzzNU1bS",
  "key8": "xwiffNkWe8UC6GrGRV4RryiV2CKVo5PkUkaH699T8kc1B6roDdNPVQxiL2AzvFft48ofy3MuyedTwGLTdAtdmEj",
  "key9": "3t7z29FUcPef7xtqwMqfZxLP3R1yAvrACTCvvM2Y5sE9sJA696b8pbmC59hbqpAeYVeeLQ68pDKZkMf9NAnSmfrN",
  "key10": "3vwGZ4Nm5xzscjiQCZgP6PEpU5e9Yp9H2Mjhymw9hw9EP1pBQ2gML9v5dWwuYzaDDpgP6edoLacwFNV9P1Nerz4u",
  "key11": "n6XEfRupcNAjCSd26SRfX8DVmx97dToM8NQfAWMxssMYJpU9kP8iRoZ2WV92uZqVftJKPUnt2bHsiPFGa3af84z",
  "key12": "8GrVZ6oAkNNvqJo1isj5Hw3iwSYhPqREzVEx5EZsyj3uxXY9cLZ3iUuwSdDNmaQfKkQCUsopjUcp2TkSss4tX4o",
  "key13": "5nEcXDrVPJpH2fJpRQM8tYQaqbqJhx6B5wz9LcnDsps7nud5hYhGn5envk27pTT7aXhofXeX2gCceFAErJ4wZxZp",
  "key14": "2hnq6Pj6fR54TGDwGGTvK5bBkwu5piYzYmZiUdiUSsvwTuL8g9cWFySuNPy4gy3aY6ow9TrCXqTv4quqm8a3KD5A",
  "key15": "5mq4NQeeqL6a44WaQPmBAhVFqtSozFD4hdR52BeW1pki7QfBbLrNwaKRqQFYSWUWESdMYpRjbXK4DLbpQZhenUrt",
  "key16": "5qUpU9X6fXCJATU6dP7YmfRxE9B6NEmCs1rjtzt2MRq5Z7SMTJhacFtekMdTpp9fHmwvkx4a5MGhoZiEKgKpwbCF",
  "key17": "T6HTRjjR9YkJXcGWhj9nvsRJD4WUeYVEUnx4Hun9Pi2B9ednxXcVmWfqxb9j6vmwJPXrmtQxYei1nei9x9cfnbG",
  "key18": "kDWLgDR1gcn5odenUa411mybppFV3KbR78Q1tEYhtAkr3zx9ExZ7CzZnvgYPgkd7inG8qHa7d9dv9QMFeCiNyvn",
  "key19": "25hWQvyneDShXtmPuoHuYoqC8iWp3u2mMuhe6s8BKjYqKmCrnwpdo3cphUs8yJ7WgMQP9B4MtCtoRHsaT5SRfWHd",
  "key20": "3NxCR8Q3WZ9jqBCYxRLokhNuX3T9eb9TYPfco28ZLpqS1chQVK5t7zSqL7yGFmKLURHiFxMvB7YrPrf78eqVyMEj",
  "key21": "39QSPERTx2Saxi4sLP3DQbNRs2RgJXFf16xCcnThbYD15ByBU9BKskaxPZ1bppVgTYqeL1SjydBrEcodWETdnV1p",
  "key22": "27fxs4DpzA4zkrcVYTKS4a95eEoTLA5k7cKru84kggJm8kAFjrBSAo4kvsUjRRnr8oHwDyNoSyfrkA6TWyaCLnoH",
  "key23": "4ij1YUxFShvC3xVBBxExhUQKoqnLmy69G85BbTEdci3MC6NuG7vtMhmRi1n7Bnbn6eBezL9Lpc93k8hfVK2n8VVd",
  "key24": "29vmRNapuEx7eCVPRPoNYjQpwUyD7P79QcAQQroPNHyiAjCGNPSbyzQAEgyrNjjDhdPXCztfLdepsx8GQoCkP6YP",
  "key25": "4kVF4SnRSRGy51srCZrpXyMLTh8EkLmaK8qzc6vEfL6Ff25c6q26Ww4DQm9BSKuaCMDt4R8dUNdGAYtSiPn21JyE",
  "key26": "5CxUY3BkMDV9hUwnUjz4Y5p8jLx674hSbJucmeb368DenBxrxGTpVLN5ND8ZqCUrAJURrBQbnXdJP8xE1fd4W6Uw",
  "key27": "5fpTg28QoAbz8Mk5tfakK74xKqKVZZfxaso2487SqGoUU1bSYRrqGQAWDrCYZoKpaA3c1VfUwdKKxsNoqzY5jd7n",
  "key28": "4eZFusZmEEAFMLgBwnNiC4GEV89K6qBPQSXpqKXkiL8UNmYJNgfkUeSwCPL3BxhBSSsdSk6P9iHshhTbMVNeoePC",
  "key29": "4LBvWDsTh6rKCMT5AVQY2ztVn5csqNwdMNAPTJTUvLZKqRNQQeaaDEWP9vxvt2vcBFoGsmDpUEsMUJP1NkuQDEbU",
  "key30": "3dL8fmQVf8uvsZnDsNyocVN1mXragt5mgLyAWfJyzz9byCyVM5MvxM6FBSnQhts9UwwCWkZXHbf5hbQwFciNNPpY",
  "key31": "4dRxHuozGNjb8oYVXo17PPba7tcyxNzUyHskxu1SfRcyw7aCz5feEmDBn3P4eCsvgE5UuiptCUjJv8PYnegAYzET",
  "key32": "4fkQfbJWPuiFSRDGtoxenw36CGssMWPabuoe8g429zX6Fna76kzvZtVGZaAi2TzNFoJaurtKnG8ymR3pZT9F7zUY",
  "key33": "3wfXSf9D6acGigHoYpaYX97gruZRcCeNPwq8QAfWBC1XUZSbHqJJ5t2f5abnvuwWvujHwfw1k6MPd6A9Dj7SJKri",
  "key34": "rSatkrMxEhvye9KscrFEaCgPuZJkG68M1WuxKKTPHkAWyVK26eFESBRkFMFy889uH9JCNVSe5gqBjekr3ToD1HQ",
  "key35": "5oVjAZXVp9KXEuGqzz4PmsjBLxyUBBUjwATn6f9qeVgkvffA7LupYFdTY3Ufcyo5kH4kwPrwN1FWevaf54naMx2v",
  "key36": "2zgdwxyiuuSHKnGfZtHCwhxESsA8jPbLKMMgt8nA7Ph7vFrW3WBvHPBAgz3fCvPeTfg8fk7cknVe7BosDTfafHr",
  "key37": "Ju1DuUnYdB5gJX5F88NWfEcJTeWVrzFQDDuS8dYXSCRCzvqs7wDUR9eXW5Rz7Bt48CXT6MbJZSEakRDxcXk3hmv",
  "key38": "41hfvfJscTHVUY5jQuF9jjBUqMyN6V1dJVJjXWbbaCqZKrPfjUQMBB8jMnsE9v1d7CyPGByeaABS97dAjfMGdW2i",
  "key39": "4LhY5dF8vC6PxEehGJCZRx4bPj4QLxXFiWUUkDHJZwhdwWHQZejiTbQyEsp7h4WLD665sDDFTTmWCJq7ZpcyoNe8",
  "key40": "fMpL8Cd5LMrQdGBHWKg3fVC1YZeSfWRagXRnGCsU3onn3r8G8BPHZxCRot9487izuTJo9bUqqnt4vbuxae8P9Nu",
  "key41": "3TAW8TBcdHePjYEEwkeAY5o4zRYb93pgU7B4EoW2Lm9g6btu4dJdfTQVAp4n3RwPoGTAgcXC4YHgN2GW4S2pST4U",
  "key42": "5orFBYdsWAH1dfuTxTkAtgU2oL33DVPAct8YHddroqvHvsgeH1YZZ1FWNDEyKc6JBfnXn43ME64wkU3RboYU8cxK"
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
