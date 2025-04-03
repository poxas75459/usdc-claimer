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
    "4Unhm8hXAfLpP5Pat5GUiqMxZD5Fzr7PmjUsDjcyXz4gxDgEFQZgPhFo6sGDxvW21bgdVjvJbc9HucUdu25Zdgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bzu4wbJabbAbns7kiw2VB4i9217bYkLjNf7kzeUKAqApUkErxznoEiEgEED8xMN3ZYz6FvhLrPnq5UWTKkvZGh3",
  "key1": "3fR1ty2yrgVEmT5oeGahNejgbHxVgKu1jAjdeDTxLEojaM6hp3gs63tUX29Q8WNCgzDEMGPG9MQAgCheHL5yRiTT",
  "key2": "3jJHtaF6dbhDjmVuLX9iGjAegS9tK3EHL5gAVVKAEbsBgfH8wcAT2bYhCRJfWdNhEdDqUyUgZcGBrsivNNerbudK",
  "key3": "awJXht5dN5R5utreJ6MK7dY8H1Wc6aDEreJT34E7AX9KfGE4bgTwpoAMQcvLY1u1Mw3JdQSktVazDYVoz3njzJy",
  "key4": "5RKnUWykx58rtCBPp7vRa3PV54dKrEjFXGgrT9QxojkZGfquPcDbjEi8p5RzqY5A2t4BV1D3qdxS2wg8L1qhrBXp",
  "key5": "3wqpuvhkBabDcaLfLXpe1jgH5Dd3htWve5tmASDA6kqWeHcrnWcyWJbC9tWtmW9wt4fjRbLkaq4dQVjWtcnT1ju7",
  "key6": "25a6Tu6HUh2DL7Znxnwi9FpXud8YYrWZ4vGMsKFwRCtG657YLMh1QXq8XSUi6mtf4WGHGQz5LPUDxJbY5KgxExvr",
  "key7": "2Hm7oJ1RBcMrJN9e31sXsNpKQ1tf4oC9sCnhvYYVNANpHwX6YfayGzSEcjwq3qSRUCZ3SZhqDVj6SdQNaFcdjd6h",
  "key8": "5vK4dUfjUZ95PinA6MHTuQCKzL1ZuFacYd6tERVcathwKBLbKbRmtxiA56rMxburMwvP7vEwbeLAYBWmmeets17e",
  "key9": "2h6S1M2KGj4XNcdZUNU4aLD6yBSna85YYL4KywcETTwWiS9rK9HbgZqijUHauQgTJ2SLhzkirYdPBqbUaqUChxyE",
  "key10": "2gQV4cfCpvzbWmzS8Cuiiy7T8MMWb2QtW7KuAiCsrkrMRPM6EbDBuJGSN2iLKuog3wZ7bc76h6i7ZXiuUxHL8dUX",
  "key11": "nDuTuJfQTc8cPwof8fcAmMH7iwMT7QMni5T2MYRgxXooU1yTwxY5mMvm2NQSMTmqZaGoSCx6tJ5otSctVn8MMu4",
  "key12": "4VmuENVFBg1VPQnXVuxTDNT18GQvgXhiz2YTFEmhqw7esEjRidaQ3QEvNG8iqu8biivipFs86PWC1h1CiwXoe1tz",
  "key13": "41XCWrbXovNgztJVoEi42M3JotyjWF4SFYr8Mk7rouhs6jAwWrF1gW3cxsvARdPtpSdoX7vn9FKY6AgNu3o1aGF6",
  "key14": "2jzhjoALhuQ1oZkchGTATLzAA2XZMoSvByDv5xmvMbVGWr3fCqF4ASoAXa89p52QAyhzQTMnq7ZtQKZoq2NdaRTd",
  "key15": "4gap3AABavhT5HLvXRoL5j2odQxebzm9pXXHVUVrLLtwHFGWdayNZncrQQgpaUnzjHsFuNmSZSZnnQAqSMQp1JyB",
  "key16": "2BZ3hQhyCMCgh9yi2Gs7QhYZKEv17yjfu2xtGS3x2SQxwgm5KE12LgtHAv6y2QPsW9FB9UbrxDF2BnRLfjWrP8Ck",
  "key17": "2UUHiTeNxutw9MyR3oFX1SFm2xKLyUqoSSffuM5qri3eVW2HE5ZqDofCh28qYYkRmiwwr2n2Xdj7t3YFWzyVCHwh",
  "key18": "399n1K9YVQwvMp2wFKGvQP9ksUy9SeEvta9Dcu7UAbsxhjfFPHyqd9sgm1t53wHhVo3G9QSh1fESLjmPV1QCWvSm",
  "key19": "4XGMWdfp76Z5xBTFVSbjcqx1MGnaPXQZSmyeUnrcgnhkLrFxtDVX8U3do9ZibAkyjCsoejMZugFXWUW9rmtmsQXS",
  "key20": "5QzTx4jacDhzc1DdiotCf1WnNftder5bUoRqm3mDXssgRXftKRvwuY5WmUZ1WUXAkUGWLuSoNZad4pVeZhEv2aUA",
  "key21": "28T9spxXTyWQjtwNYfCjgRhLKuDRkYfuywYmw2ZP95qpAS6dYHZJez636agz1s1XDLJe3r4jVGUBCPqqif4fZS6r",
  "key22": "5Q5VtMLmgrwjRU7NqPLzuVdsTGyTtbjWBBD4MSDtNSkY5gUJ4YFeoWCqPFWCg8k4rF3npJvwsQ3htfWt8G6LXykG",
  "key23": "mNdNruukLbgNfZexN2cGGf6LpLZaaghgyzuCUSvT66fvrtK8zqV89KstEfpR4n2PRC2QeT2SNfHRWYVYgnmEiW8",
  "key24": "217qzioc7i1hnhgNKaVr4mfoHSGkAgSwkx6rALkT9325A2Ei6rz4fahqvzCkzTYcf86VwgRVXeERwyX2GrQ6dNEB",
  "key25": "5aRjGbGe8TrcdjNUc3Qh8bR8vw4W7VRQAyMrkbEgozTvZHBC8iKRrhDdUpxMnjGE5ZZbh4sYYCkMHiopGnUFbPNR",
  "key26": "2d3XaS6xWREhC39ShdCBXQexURRrHqi4RjnxVcaAkuW2bYd3jdvNBbec9LHxfNPSXWY6GHfV4MVaAmgUvAurxu3y",
  "key27": "4Ucid5uwyTytehRDs17XeNZb3Uj7JP9pXhDdyZFWjoDGxkGovzrk1j87HawBHpuS6Q4UUddYrC2ycBoYqicwDah6",
  "key28": "YECQF2P41zFRPmHP9knSDRBcQkZD4EGgmFmfVeP6ZfBqFFaieaf4o3kUkdqosjx9jXEVSKEJksCuDptGBmZVvD7",
  "key29": "2wTkisW37P8G7sjv36saVdNBubj4y962sjcnsmknKXFhBNPCd3eJXv3HSPp8EiPL6gvcErY2RgWTXz4dtP8EN5rA",
  "key30": "YwxrrpHvt6fUeyEXnLBgDK8h2rTRx16ovrb4osCVCGfN6KDDUmakoECH5WpY43E4WJjoh3JZq83GEoLckTVfzyw",
  "key31": "GTD72HrmGz2MQvaWD5BWvZxgDZrv38F3QBChF6hesjYZzCofnKSSnwXWcpPM2EXUJ4tNfkt8igs5Uzh5Evi9dRR",
  "key32": "2nb6eDg333moGWkevUM89DY73f1TPWjidoqad6c3FVckXFrg8sBs9T7mWqcM68qgXhWLGrHEmNQhrZ4M7UKdEkyN",
  "key33": "62pAdcbdKhiamWB1iDNNPkjyGVWLQM8E9FQHUkDSdb1J7BHyv1pWWbL8Q2F3MsuzEdpJ11DYNMjXHab65SseYXfd",
  "key34": "3ZF46Qatr1iLeDQbbjP36XbVWqvSMXURxyxbwtScbpVLMgW1fD4tbyaxkDfqJfRmRSLEYQGRANd9SpUFAZeNaqKs",
  "key35": "3XgUUcU8vXWL5xGs8pjGwRBoZ7XmENCdMjFdQNZfyWfFPJ9r94wn2mfpLSRQduVAdPe2u8EpL7CVQJtiSqax3zG9",
  "key36": "caAcFasfvkTfxUXhAVeE53NGFqPwDLso1HtSCjn8DGSx9DNrWjYFyMSkwpfui9mNaTRGsaT2ZXoBG8PJ7916L8C",
  "key37": "49H4JTRWnvtHqu5k2LjD9Sx4eBcxpucXhAjXfYskt3SvMrqT51vYoyDsh1EnoAN87ZMH92Txggbnxa6MX6vhhmpE"
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
