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
    "5JgPaNPZBKL97sRC9RjyeA13hNtyuYuA8waUvbXcnvMYduySSDELGmfom2et6TMxGUddG69xRrro2cFC3feK2Y6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5daLXfCA9PE2D7za2HAtu9miyTj3XWQSi4LbCHKw7STiH1y8zLAENc91p87vrbKxpLqd1HUXRT43xLawCeccdvJu",
  "key1": "4iy5nA8f5Zmkn9eMNNfCBq8pRrfmxZYkxetNkdBNGv6jvYcnQTGURebwXWVW4XKR7CwuCBNPTQa7RYxCmaV2fXSa",
  "key2": "2S98bxfV7Bakwpu1JwNesK8ra99vZ8dsneWdxsbsqXeJmHEa553UVytEu5uSVVLXADGYWvKF6AynxbCSWiqzVBmC",
  "key3": "TNUeMiKVDPYMXzNETmJKr5aVKL9aoHg5SKKBx1UsVYLj9Xk69qbrdoDZigS4bqTRQbtNFrky2nTuM3eb53Yhts9",
  "key4": "3hm2mtXPSE7LZr49SQLohtLmUQtDQNpBcSbDjk5UyqthL9vakisB4ZuzLnACPgYf9wxu4ZfTxdUCDMyufgUzZNYB",
  "key5": "46QcVVcc15iU42A8kFYycWDAJYX7V1TyqgD8GhUHgqPA1YCchfkZwV5Me7NkibTeDLS7Uqvr5QoZ3PLkV4DUmioH",
  "key6": "4AnKNjUGfpEyGcBgx8C8HBka4NYUgi6U9qT51JE9JDx22utTi5V1Ukgpvo3YUMzYJV3tFMoBG75aoKY2raMDY1p4",
  "key7": "oDZydgn5YcsdpTG23MahqSvN86X4UtK4AT9WLcMfFks4nGRtxvrHYmxVQYEYT2pbQcUcCWfaNuBPEvpzP3XGnL8",
  "key8": "4jvoXLoJTV24hPTbLWNJZ2RoB5PLv26tVAiXvGMPCktz47J97uN1GiPyndm2CNrhQymPThb8sxUkf2SDfKFNqbFm",
  "key9": "3kWWgY3m2nJ92wj3vWpC7qoQHb6Snj37S1kptduh4s2XjZ1sxs2woGw84s324DBzctx2zU9DoJ5AmnCEhv5p6w9v",
  "key10": "3XZaEtJMQmUZXnh4HxKrawUVvNkDRJvZxsvVcLkSXJMWCBR1MBDrRcJ97mSv8BY6irFtqdVehFBaBjJHgtzPwGHm",
  "key11": "3pqtNa1p1rZxaUutgtjJAG4pLd1A5Eq6UKfGWrJzxgSCbBydSHLGm1Ctdsx2Lfb86fJzHDGjJV4gJXnnbwpSNJPV",
  "key12": "67qudGTAJKxjf4NP7GQk9Wwx8pEMMZKtUkx1mZ82y3pVWzcoskJ6x5HjaYDVKXWxDi6Zic3CcwuK86EKtTcDFWia",
  "key13": "287h5b2Esv7EBxJiM8G7LwktXer7MtfSn4B9XD5gB4FijQfwMm5VZAiumyoNM8Ck845yPwLJqnT6qQHEzfuoogSA",
  "key14": "F5FvQdcSwNH1XVuo5DRMeRKzUMu6vhmEH541WVQSL7bJnf4Aqh5tJYr6Vdas81DhXsX5P1xAqzTavVop8ivxQXL",
  "key15": "5mw2jTdLp8MACM3Qv5KYNgDkiS5Agn8MS2HWK6nUcAT4iWy5RtATzTsTfurX45T3cjFofwqbSWWEhpbN9LHypvr2",
  "key16": "B9pmYscce2oqvAAqWFVDEKqCSx7DFBwHMVLQ4FxBBkCi2QY2sQMfgJtQzHouF9fsrB1CxVD7jEZQmaprXCvqEFY",
  "key17": "5cW5W5N3AYiaQnDjq1CoCQJUEHkEgT2q7Ao2nAZUJ6jZeUQCJicfqCAttRvReZxWp4yqGYDUNu9NdVhJfaaqvSSg",
  "key18": "3agVZ7gavx8NwofhmRPWQLVsXhgCQgr58z6wFVv15vY7teqBbLqciQ3CzLGy3Ramci8ufH8p1THNPpp77219qLui",
  "key19": "3otKmeLbXEyphTC6AGPd1ykGwVe6bvdib2DUmozKue9vcQ95KpwktediPUhrKa8mfP2v3kLCcC7Dc1JD8Ubk4deD",
  "key20": "28r54atpaLyLgE3uQvdhjtRDxdmicK1xYHaX3YtgjCESA7XSvq1CxH9LMo3LyLzpSYDw7f5qAfXkcy19wLZXkE6E",
  "key21": "3AuSgixTpGA25E2BbQ1dzDaWiJf32Uu9XVqEKyR63FcvvNVKJzz82MfgQMeFWJTsqwBB1rAFXVwDGowoLdigAKwo",
  "key22": "5nHneRNbeDKHpk3653rG8T8AqC6ZniW6GieWg8tQZTyhs7yVcqCLMU1k54zCvspMsPLTjvei8rNPFc4sazKV47Sg",
  "key23": "G1CHyRLsw6NKssmQc55kAzS3J4wiXeK55oMRWUVPKu3kdwx31TMDKqfrq82K2HkM2jYcAKYq9g8PxnAdjux4LFi",
  "key24": "28GqMU6yoemV5gKq63aHW2csNeCMzpow2SbXc5ySTHvs54DcScSsLnLLX3fjUAUpQfPgvF3eU9nY1iv4QCVwM4qY",
  "key25": "353oHacKDdLXmyfstDay52sdCEJ5h1KYnnDfeTYv3j9iz1R614tuge5CQ9pKioqr1SSi4HhXc4FWJk1fkjgRdbDR",
  "key26": "3qv8H8rkQCu75hqcsWevV34Y4XXTThnGt6GZikxkiMYCsFbeAqjyS9P6fW8scd9cG5wrNxPzRsTksCj8BP7P79Lb",
  "key27": "tLaRj5GUs29roxX9THsxUYK9R8ApYaEMqv5DBsLkwVN9RE7byMdPaZMu1rCiwdXa8o4BeExwbLgNyiusstNdN6X",
  "key28": "25TQVmsDwNBWMALd6MwxGGcrv3dhTnQQfStka9g76ZDUapk9kwVDR6FPJseMiKgMbv6BHi7U7KmhTf7iDqrBV68D",
  "key29": "27pDHEWh5JcmfLqDHjEKS26XFJYScmHswKwgAvz8cboNMGnVVGw989SgpDPULPBkXafNtKY7iuefAYWH8gk5G7rG",
  "key30": "3j2YDmNBkvMBMZYvFXDSajTHTTHybGAgvqUb6nFe17rTpFbiHZvDDBb3EwJqhS84Ww7BDziSyGBWYwozR9vxg13B",
  "key31": "4s5Ry1jG98ER1hCwBnkaV445JZTGdU8QSWvrUc8tABaKv2gGCFBZWeEae97PqstFMkfwALnpmarsP2AgbSLg7TwY",
  "key32": "57odrVxG6oJddxFdU89wLXtLehrHa7AypeT1xHnqb5LXYpmzNEku5SuwVaWiwiKvk1qDFLh7FgtinbsaA4ktcwRW",
  "key33": "4ELBhw7PNB9tV9gZRdbYCT3pnJL6S19KymzPrTuWhcg9VkxTNefDm3Jr97zeaju7PDChYptvo6ymPkqGXB9fSsmQ",
  "key34": "4MBptF4HBaGadax88tAb8dwwWnYRnPVpH1RS26S6A8FFkv2hXZPoFsggaP6AFcayfFiMNRY98VHndBoacQSCeLAE",
  "key35": "5svZvxTEWEc37NW6YaiGvNiMHVMb82CQrWnAzSZfAK8yUkGbuGK6mNbe5TBqJKaQ5TpcV2XmeSNRVJbY8dxJGMHi",
  "key36": "2vU71ieBJQjhL1wgAEvnCAXXiqRXhBFHptGiK7W7ztHJ7VUQtieoTEwXLrYiBxYwkeYYqNr5ypMjXCek3QYRDxf6",
  "key37": "VBh5Lu3Pktn88K31uwJyqAWSxTHpgm2SHttFcatjzd2qxAKNPQr9FocT6UumKZjCqZq2iR8Wxh3jVeB6f3a9FRU",
  "key38": "5DWDb1hmudbfHMLRUQrFt2G8Q5PU5m9wWBEjPTBsPs8H79vkBhqYFvrDUGyHG1C5JAiN1TzTiJnMo1VJATGBR36a",
  "key39": "4adahga8ZqYh7FvxeFJJDDURf11B4zaVfiqrthobXN4wHr7TXy1zFX912MsLnQLzX2y4NafcEwZJVDPZ7v6N6pZd",
  "key40": "5FcMv8ADgVinFftM8X8ReHKboJZMfRfgc1773Q8r5LMaCbKycyH8UNY84imbijZiGe6bP3qQEh1cD7A6UZkm5NUv",
  "key41": "4CzzxsPZfTTVq2tryrLgz3Ps7E3pRqKD2kw3Cxqtin4mALLBKwbbGkYC2paoZQRumqsNquCrvCwpj8WAnMh7saPF"
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
