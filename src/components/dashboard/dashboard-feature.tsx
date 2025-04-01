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
    "YnvHW2k37KQFKP2DEEjeExoPHu1vieTsbn4jyAmWxsbLBHX3jTvymzXLW1SCynZ1HzLuk8L2zsA93tusyntXTGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gTiBEC3XQyLGEpwHstKMfdcBctPzwoph91RwnY9c8dEdHCgvp2V7Y9emF6qM3qSZVJP8G2iSbquwyNu2z55osBx",
  "key1": "4mijYjBeY2i3YxybzfpC5w5s15mosVkmGzXta6Czj9fg93BuT5cvz7XWdBiuXsr1x9j38at9wftvSUdTbXD8aAwg",
  "key2": "2ZUmDgUrNb36PM2FCJY7eV8GNrhngazD5V45MuJ819FeUWcuJNrtRLsiGwbivPk3mAB8iebVwW3HWpEjKJc1VbYG",
  "key3": "RGoNSRNF8if8QnJ22t1Ddg2zCpkcvJn3v9vBoGF4paX1PXSWvHGSXfRyqrXrg2idmqFuy5FaMon17XxKYzML5je",
  "key4": "dVqby1o315ZoruGUSszoUKkY7NL85TxLys751g79yvPFKYEdCYkwkuC2vN4jYWpTsz9YZFZjJbmoenCw4e4MoYL",
  "key5": "4UH9qBeHwfLTxjvR3A5PFuf5Djrm32zb8LohrVHEFevNVzX1vHNGkYVKD8rHfZ3Dqqbdxi7j3XhrgUSF6SsntH5N",
  "key6": "27nWXCYAbvVC64caSLVrK5eoCC2ePQ1TN8ARL8rzUSBuY1jWBdFMrg7CVQjfxBHP3L9fz4BhRZWmZL37pGKdHEVS",
  "key7": "4PG9jQ6YPJve6KEaKDVj9WN4mH6btiMfyEZdhh2FBoAgNQTvoPy3DGjnYkewpSB1Te8jUYY69tBkVrB5bDBAhKTr",
  "key8": "EhZij5G1fB1iGfXyz9V5exy44fcrngfSrxpAE24ncM15mPLc8eePWdnX3SnthENuFWseXVXo64Y72DpEFo4U7kB",
  "key9": "3QSTkhpE1NHtYDNAiaSmhBSgqJc8P8FcPZPyoQj5uT9YTRZSAnJPKSiTaxrBJ9ssXaBNgWYBgjvFeDpGQySeCRE7",
  "key10": "FQZGuKz8QggkP7UMeKQGZrhTDp9i2nGdevHdWhQ52amb9GmzR54N6dNJS9NmLRVzctKwFZfQtNe1h6JsK1QLy9J",
  "key11": "4s5EjuREgvAyhAb4yC1Hbgpn8vdg9e4Z8v5niyGzGzjEZfpZHGQa3yYKqFxhUq5UoPsAdh6VHVPQAugiLwujjcgT",
  "key12": "rygMQ3adQdFNMTjAQdh9mr4FMfEr78Dn7qFqJk6HM2nfukpra94BVYpo4UqW45HFtA4ZMzX96PEu3HKD8BySgj1",
  "key13": "2euCuhd1WfLRy8RyMj8Uny9UyLqq17Y6DL25VXjaLrayqkmi5o4moxzb6FziX1oEtvHRN9gXyWp5Wdq4Hn3WTJko",
  "key14": "2sntuwkgQyGjhXRSm4Y3XdRBmpN9mb5pCpbtLS4gzo8t4tLhkn4mbXDCK9oiLn2812UD5gB8KV8MC9x6e5VfARkx",
  "key15": "4jX6vy9V5hhp1bFvzhWpzz2TeAACp39HdgKQtDpbDX6PJnUnHHwNxCU163gEZZmRp1DVBaThyhhGJzWQdCBMhYFs",
  "key16": "tzFZfEsizA5Ym8mCRT2evy8SmXFXExGnT9RnzNXQGGEvGX5mKxDQRWJaNqU45dhZNfh1dHfeVK6WPGfnkhhEF2D",
  "key17": "4nsYHBcpUi7YuTVoV9uksT3EnXDiBWhTDLDqUFPUYo1ABXzwiJP3n1g8QPjkxDmAvUCMHwjKNt1apQHXqEHW6rEm",
  "key18": "3vojTPULN77UuGKG3dm6ns5riXYVP9gCj1QePFFz6Xy1V94yqLqkJhXN8jHLCfYRwMoY2zxH4umT5ocuqczh2Y5B",
  "key19": "ct4eEo3fstXUufKhfbBycVoV4RNKoyBcUishkQxn9SDKDgU84KvxwBw9kQzfpjHsu39kHcH7S4XAX3E9FxD9fxb",
  "key20": "3VjjQ7p3e6gT21SAtHKAtA2xWyQbQiqKYBgKKboxFT8BbgCyxNMxyG6n2cdjTo4E9qLNTSKbDCLa6iRxQNyzr6kF",
  "key21": "4yc2pWBBT9n2AQqTuQXd1Kh5jKJbDdLC5hTPwU3uJFbYbVniAFxuUgEHuFdY65xbXYdvjrdbdYf75mhErTAqmTz5",
  "key22": "5uqYas7c9QVy5f2XRtRWYhUys9KW91erFGTX8j3stz6sX47CvZVZMQDdPcqCk82K8KucHvLyZFZhZgrfTcbdcpYe",
  "key23": "52GCjbKpoPU3FSTPtk8PunkcV1QNBwNGvDHTuJnY2XBu4noXWDM2EA3A2QST6mWkABg4H7WjAVyGW9paJSNEZXUY",
  "key24": "29tXMNuCXoj99XfchUx8vMF7jeGh47hUDbn3FHaUMbwXaLbZ37c9PP9fRViS75Qt6U5uy6vgo1mWczqNfFqJQ8Et",
  "key25": "cj2R6xJEiozJJntiuiU6GCk9d8Xr78XpFnGp5Nvs3omyxDEHDAcXkJf9Gq5Uf8HmNv7wmCjYCWhLz9ujKFesvAC",
  "key26": "26pSP7KvUhnTKg436JeY3WFb1omJJy3At9RzLS7msuhFNCsXV3iSeHPJHgrzi6uikab2R2ekMNYJNrRjwuhR1ovC",
  "key27": "MBmbia1oVJzg6vxvTcjBEHxP8MHFKWnrJcj62bEpAXkRHx9cEbuxppm7a4fhofSAK6J4e77wUYzvMQDZnkjAcei",
  "key28": "57uMgntFpi5s3PA1TDnr1bPuT9TTn1Da7DMBWBAADCS3NSXDPTsEfkQXEVGD5AB6Q2HMJ17T1Pw1Fwbj6rEWctbU",
  "key29": "287WD4hyZBegcxCgwETTZALgqeska7Kd8aHWt5DhZLZkDF1XLMeLLSkuDrryyXYwdYvJcb25QHKkoDXZSAUBBZYd",
  "key30": "4Nba8bAooiL2EmGWpc2PD176hiv8NwFDqYNJSmNjoi1GjXJoVUUNiWg8dCVFes5she6fPWgjV8TUdMk5nH6DHbVB",
  "key31": "2wAa3TyEAoPjZQH9qCfDTPVLo9epbpRdT6KEb14fzQgSKGWxJknZBPrBErCDdzZPipPWy2LkjFWg7oWQEK4zL1fR",
  "key32": "2AQX5oPMqaiVU5LrWRrEe4ZiBKbpmgbciAxhxRYXpXZ5qci38iHLLUgCWkjEPXzSVnTCBMwLUrxR1RxuKTnWggDR",
  "key33": "2gWZPRuvur4AMLcC7RW6h41vHjNHBbJQKq4WkMsSNTe3bZ8BQBzS8F6V3PhA65gXLcUrBd6j4xm9GdvCdaw1vTUj",
  "key34": "3TA8CWFUoQENknkATRf7SY59HbJkZh1AqTC6yby32z5xdmSe6yBPZYR6V38bddSztJhETsq7bYDJ6sFiiSaoFV4a",
  "key35": "3MTgK56RBCTPYmLnEMkE5Kab7q3bEX8EVkRR943BDNHBKAiHBXKCLvvJ69XuuSfkD9aAvQgKtS2vxNjj6w4vAhx2",
  "key36": "61wnmEkQT3ku5xArbuNopbEMZHdUjsAKqGDrC5jKNmyMhtom6s9GVuPSNg7rpXetPGVDqJknuWGSTugsmC7Ey2wG",
  "key37": "4dnkGVxRskMJb2cTqVidzF3piipJCdUgeYtzYCfnD1xNqkqnu5qfwG95RgYnYs4dTUuNiJ5qb1STERVLNgEE3Ky9",
  "key38": "43iZ7gLo8YanTXio8EXKeywRF8hhUrCeKxr27tEKyVScnYkohp2rohMVyU9SMWYTJ2VbvSxKSNQAqVnUpugJhzFY",
  "key39": "28NA6torkSvaetj2NKBFvShgNeVsrPeGWBgRyQo2T5xm9oqdjjFfnUgKc3i3Z2iNHVnb3itu2atr34z2dtaux7J4",
  "key40": "2MZi1cszo5WeuMtCzUvNyW2aeuWRc17rmYoTXnGVRAjaadQ5dkp1ZMFDCu2gSjpbmks8VCKLAzxJm5LQXDADtzYS",
  "key41": "3pNJjsxWRmyXsoWseuj9k8W12nW2QCopiWqQxfy2kkCpptRaGVobkKDJgcWthwvjxjWCH5T7ftp4q1PYx68wuwvu",
  "key42": "2PQsnmZVyq4zhfeAtNWKbpQApjqJp3UFQySdqAJ1w4nDcvgMGmpmMKcbRQtKEVuz375kgPT9vadyN2o31bFzRDPW",
  "key43": "2EnHsSsqJ3BEJfSGskMb6EetYQKdfk7QGyUiY8XvHctfoXw6zGx33FoqwTV8H6AzELPRq4z7HADYT9fqjbrKWmbi",
  "key44": "fVUrktkSCyguH9KHbUnRH1XNVgxbMH9Sos9e8Z3UVbzchFyb8kJEvLL5dxsjejNptbqnmuwszDeLUSQDsGvXfZs",
  "key45": "59acdN8ZczTS7ikUs5PY9VLouMsnDYLfft2u1CqEVSxdkxMJezsTKkcpGpJWAxbemodHH6v9nVM6XKMkAtKGgPF8",
  "key46": "4xUJMu4cfDDGV4FZUxfjSTpwGsnx3sssFasWei945btwsakQMia9zWsd1fsqfsx7AySQTqpW7vgXzyrfvmKwg6p7",
  "key47": "3uCtiyuCsE9Xurjvf6ULeHLPpHFEdguPMNJhs2QwXw8VQFRW4GgLmVswNvMdLvBUgYvoGc7n4aTUmzBkEFGJzvuB",
  "key48": "4Bq4nHAyWcLKtfviUXs9wpuD3huL6cfQpjNKpaaxvLLY5yHxzBX3MzVsEppkrc1vnBvgpQ943BquLXZBvtDsZcqa",
  "key49": "3d3eRZhSoKZ5vE1M2Xm4NbXm1syvXyTF3GSEWYpuG5CYNemAVAntxGXQu5QD6wr3bu6yzr1kZ8NfBJauS6mWSt7N"
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
