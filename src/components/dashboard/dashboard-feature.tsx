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
    "25Qism17crd4MbEQCC3X5deN5ez5sJM8mAen2kBetg9965XKRGsEAcCrry5LXsFiE4C89hce17Qs1BfTsrYfmNX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHzg4FeD7zEKYDAfcjAKKnSnyJ6S4HiG8MBRCd8UEtCRoAZFB8zXAh7ZyaAsZfHRkvCSimzWULjRsTT6MyywaFF",
  "key1": "44aEyvbtT7ajPJaEnfaERaaab5HyNaUBcm2AN9aPM6zXgV29wdjMGGx1vTPTu9jBo1YbX5GPZ6HDYXVdMFHg6izs",
  "key2": "UEB7Hr4NvXoCSNWaEtqzpYg88JydkTJEZP2JAfGXCWVQrv5tBmVzi1W1bvgfCBq6VEMYv6xkpaMTJFwTaJ1nYxo",
  "key3": "5WDzYW5nG5LCyffdwZKHXHYPDsEdf9NB4bSwgcYYMEyrj6dWndajjqondzr8apLMRX9us9SMWt27MvrzFEGgUTtS",
  "key4": "4RJvUKf4tNFSaMoVq4hw58H75CuzxkjZyUuSCm3E95vRDtide4mZB1XhJQysKdPv4rx9pgXJ9jZEF8RoPZDkP756",
  "key5": "dKpWJzmKFZWVZGbEjnMwiPnknYYmAnVjy1FyjQ3Ju8jePTT4t1yGj4rMj83rs7rmSzhr8pNZiH2fSYpKMkx5MQC",
  "key6": "61Cezw3rQYQDZWxGJz7uaqUWhxY7Rs3k8TU8DvaFKs3VCaxy6G8RvZWPx8kGMTkaCe7k63QPtp2DGEPmzbKR4G7D",
  "key7": "3mv8qQzPqiwfW7v8FRytBRxrBQ8oF4q5g7e94LHkoPJrnyagsLYbE5UFXSNSdGELERYFgztW8BLdqA85x3B9JW3W",
  "key8": "45aTqYfvZoDYSA8w6W8zfFDH1WikASpFob7UZxsyVAoFq2vxFy8Jpugo2yKBr6VsNkRdhaZ1wQMgaMCQe4RryeXB",
  "key9": "22j5mn9tXS5xe1mjEye8R5h4pCTzmewyWxDk9gurccGVpj41ua71VZx2wZsVTdR4sicPtRgEg27TmhjfxrN7b3hS",
  "key10": "5PX4zsfXt9kukLjcbPQyRjD526QLK4SYBYBgDJoaevY4tfhhf1Ng5FcTXDCsYTE3ZxsUHC21Vp6BbnopbWjbgLnJ",
  "key11": "4bAZeDpgiyZV8ivdYcXxxYouwKSLNk219i5TCn4whf638GKvM2UEnZakucthdxrmGtpwaz49FT5DeyKH2fRy2xen",
  "key12": "2avfJshaJY4FjsrUkLccTz8M1WbBRxzWHDsHkbGCgopi7CjxHkp3bfTkGy6GaxAc1USobyhT783YqVcZAp5QiTkt",
  "key13": "58AqiKgdXmaggkHnDFZpx61tyah8wgquSp8WVGssoNj6V13sMFqZfYKL3SvnXYeoA7DWUTt8ADDXZ8hHrnSM426f",
  "key14": "5izYpEHkpXuqmp8YHPbm8iCGN7q7diC6fXPA6ps6saubWxkksZWC6fTNrg4sQWoSRAntQ9tVY6ESNsNKGkmV3VBk",
  "key15": "52bFnGT978fMnp1woHR7K51jSpSdKRAYepKs8vTHqSjad75jhwb699HYrToKVdNCdCvgVCbt3Fsfqtw75tEbzjJw",
  "key16": "3zggV1tU81EKyD8imqesCFNZPSNLr63Zh6goTjn8ma1FRT8xj4iwT1nL5WdSSfFD9SgT58YLRTyvJKY2bb5M6bBn",
  "key17": "PukUAAK5C7nBiJeFi4hGnTvfzMdGFJzc5YwW75Euhx3Csq1FgZCdQ5y4VcayGGw3TvYBDuRvDVgeQEUy9ZNf1LG",
  "key18": "2PCBwE7mcD5FSRzMJ3XZDi9FvEDodnjHYZvaCtAw8bRiDwstXhsjrTzFyZG77sZAbCpCCDk51PE5jz4TRyXthyJF",
  "key19": "35HiH5vmizHpZd3Z5id5GH4AkxC7izSPYirEiPYCh6g7MFFXRRoy3V3wUbnNuQqLX1D3qhmkHzKFBEoQ4yQBQkr2",
  "key20": "4M8ToPWscma488ikZtdecZPATDemCmjHCnbPcnX8dvpCTggY2sgYtSndisUveTF9SQWBNiyVysZhVKpZWwvhJFWi",
  "key21": "5RhuNbArHxCprfPpy9c4s6yb7WBafnfE4YSXzuafyPoCW1ZfEDEiixeaetHBQBGkmbVL3sAtvk3VZG3Zi1woAgmd",
  "key22": "ixeuYzBmCbVeuFCrT9W3RbTct8D17n7xLWPLazv9oEz7SD5eWjqsqasy7HFR64ZiF4kB7r6no2Esdtapnr56Cu1",
  "key23": "YB88dTYmA4Xy4oLBhWoTjUrkzDK1RufndGC6AKesrCKh4LBqYY7fVT2HSHxZdAvKt261eStDt3Qm4e38qirdQoM",
  "key24": "4no1ZeXtpm5JPbzQKMu8p6hqMiMu66Dy1aXeM1TDFjcccuj5M6MuxeHoP6x39yG5Z4W96kgncEwQSgLV65MWe1gA",
  "key25": "qi6LkocXU13gP7THftXPX8TsyVUFT8F21EsMWNv8BS9mvkUT1S36b7rKtPCSzMWxWVaGWJewXcWN3Rw84oh6fY5",
  "key26": "379AyVKxYoZdLeqttadpFYymzUymzpdAAAuPs7jCUYYimnRxdXL9sQ2LGCapo2XuMTzs8GAzLWqvxidhKdMHJG79",
  "key27": "2YEWUC5hejJahuhKNJFVvDfv2MUv7Zwnf2y65S4xoimF6qWZbbWsueWLR1LkRomd2EUpbkMPK3Vj3dt1R6XiCMqd",
  "key28": "3hfRR82Jtqx3a9nzaAWHQTCi1aoij2L22RdTg5vTKYUNvJfEMp6rTbeic9nJFx3nCjUDqYamJseZZbJX3e7LD6Xc",
  "key29": "DzwGNuNm4HUKVbqqo2YMfhZWb2veN1bdw1Vk6qVPGKGRbuopZqVMhWzpYr4D22BEb4DjhFTumbNTG2S7wpSuUdk",
  "key30": "4KLoUbc6oyjRwphQTAzR8YoKJs7SWL358AqAEA9HXRPYxHgv3vTM4uE99mKLPwru7u6NEQnd7xedpMxoLSrX8UYo",
  "key31": "2LWp1kkU7s5JnbRgNeoQqg9MzaNypQC1iq1EtaFvVeLs7kmjFg7p3F7X6JpURusN6dePvwXGCDegqZkYn3Ztfxjm",
  "key32": "3BUxzXCtcE1ErFhPZ2gBrQrAjvZP39kPCuHsffe9WkanuNpyc4VEziaNDQWucoyM69bxM2rUwL9HFeoyLgQGW3k",
  "key33": "67SwPb1Twnvb8b7gm2964N7SArtRdgCUHu2nXcD92gH8Zq1nmyWcUMqz1LvHDT4i7uSPed4ykV1uBECNeSmex4dz",
  "key34": "5YSWP29vPsdmtxvkQLTRZmY4fUHuukf3wETD8URcdsX3m4DWb5W549bWvLs3YDDtZYn5wpDeYbtF7kkV3Xx9ejPJ",
  "key35": "2zYgDDk1D2UUAcUnxAtSYLZjDVV85tVAoNscgdtNNgC25iti5MD3faV6Rqmo5hgwZgggqPy9e6rtjpKr82LTsed5",
  "key36": "3gZob1t73ApJTh8fpKhnMceyUcNrycEy7RZ43yaVJ1SVs2HtnBkxguVahGvGMNYkkadpjoRdUnx3yk1S4bsg9EcC",
  "key37": "zwLeXv13PXamprhy3S9twVGJDeLekU9xFubZNJHQE7zVVt8K9HikP7oyvnHRCE9Gyw9hdj8XjXwiZJRVbZ3nnqx",
  "key38": "n2uXrgwZsZYqeZh3DEqjg6J79j4mbB8MaNMu3nZ1ChEiaNNLpyLyQMayiogXp6967cVqQaT9TTffwK3kF5n2guL",
  "key39": "4M4Gc9jC92557WoZwws3EYVoLh9otdyuxv3tn4MVtPZ8X5vSTvkT9YX5vCsPyEFZpUPMBsEoTUNeU87ReKiXa15X",
  "key40": "322DzmUmgEyMP788bZFYBkpmcZqehqx79T5fGnocQZMHZTzCRBGLNTbY1Wyqxv5CyQ8hcxD3RDCntBFnRUvjdQwY",
  "key41": "2Mro6RrwRHRjKf8v465n8YA6Rar1Wg5s7DAyksQuLyWDw89oXQuWz7eTiCaDfntNQf9TcahNk8n25L8o6tfTzo1v",
  "key42": "36fKwnWWX1WE4ZFeUFzXKnVQj2BHnbJeJWv5Bjy46Q4QLrLyLBa4SAsrRv8Few9M2gts9snNUzvpvgahbeVwPrCX",
  "key43": "pzrmUczxT4vhpR76j4fkCj73YczfCTZRWKrbkSTeui77Ak4UNRrMcYBam4g1VuqLtH85y7UaeA9fQT6UJqLyM35",
  "key44": "eSThmQDyef2cJPmaQHZbmd1Pcp97FXPvuN8Yv8UvWUkoAu7p5jqMj8Djo8sbLhX96jCRku7Sz9eiSrZaXDZrGBJ",
  "key45": "53rnFPZ1DstrfYN2inyWWP47on4m8zbe7pcMDe5UYFn71mYcvvsNA7DoMxxQyRSFYaxcqLt5sEaGEKJtFMNKjycu",
  "key46": "4Ui1e6eqdrucBBm14Us1TNC5Jkj72LXCFtCUB1zDHXDR5q5FHt5ttEzf4RhzXT8r98FBqTe3RiDXNw9es7ogr21u",
  "key47": "4x2WBvzXWAxNhkZyzUoXiLR6ShbqsfNTViiyCq17sRGPYPHRo6uag3jDsNwhVCgHnjApJjLBSjBbDW87PH8A8Nra",
  "key48": "L5MEaneX8oLTpVFiWJQ9wbtT7uDbDKpjt5x7WqFtfixge5NZfe1JnWj8QAZBF4rKzAugWBL3LQMPK8HsrtasgFa",
  "key49": "3SRAdAdc1MvVF9ay6aTvWSsAKU9AivhzrogyapAVakkHGRySwzaWos13qeVcH6JwahKQiEsjBwY4n27vsVyAQ4gm"
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
