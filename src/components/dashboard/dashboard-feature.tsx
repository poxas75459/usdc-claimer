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
    "2eQAsEL7XiiPAfNp5ZDRJjT8hWvf4Ghvyt5ButnTXcRC7yiLkAxkvVwFkWk935q6nGZaeP3uY3rKL2oqJVpX7NMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8KcMWrsFCepyvxcii3udy7FHYWUzxvXbtMqbXYWsiwEB42wHnCDGGPEye2LcWKeZkF62HiqS7Bf4NZg4bE7mrLz",
  "key1": "3oQWBaLApizqU5h6KVDAgtKhj3RLrNKfWrzvJqLbqfWYHq1ygbUcg4GAUjoe8U3ec5eCmr8QJ6Jt3Cj22vePw7ST",
  "key2": "59pZMowmNrnB8sEB3zx8zGc7Ly9hygguaEmhXaWpnWfwSiRKnsqHdVFE68bkEU4jrUZMdPgGtn71DaxkNNQn7qmo",
  "key3": "5YyyogtwWHo4iAw2N928RbfJ6eHZLWS83rjCo8QZPi459HCZRghzz5hQFLHKZVgvhpvmTW9g41VyFxP5Ubs8F8ou",
  "key4": "2hcvb8QRDtfkePr972X8C65ft7NeHRBTkr17cqFdsMHgx2HDmjpGzEKuxAb6froc8Ru3fXHzgnzwvD1TujqHQBY4",
  "key5": "5T72J2bHt3i6aysJxuPGxB4GX1tMByQPWevGq29Rh7uxwgjwVpyoj1c6NjUSdyBKymsMUUvRFuDZK4xN5C4cYMA1",
  "key6": "3cBZTtS3ZdV7y5e4BN2GaJCuPgrUi2DipdtVyHve3wpppWnX29dyaoFCb19DUMxyaYyXbsfLjsReSgtRNcdVduBC",
  "key7": "57LSixPqUkPHqE2RkNacpTKUV2CfjB7D1xmJMCFYEuEK9VhqDbAFR4w2yTnpPTTPrcHv1i1QMpztwkynihDxaArJ",
  "key8": "xyUrpUNw1gjzoEgKKhCyB9EbUhWet7DRLuVgo5RnAEcYPZrpKHabMGt9TumBdvsr8MLFxDPngU9gSx4RKLoHGgc",
  "key9": "4fMEnaW4mLqrpYTxnRNEoa5CC8ZhtN9ZYdBhMZfTRXTrAXJynAXyUzPn5d875bhE4A4YJQo3NPo3nBaabobU43cq",
  "key10": "5JcsEwBZmrikPxdrrFM8ir2txwMFn5AdtvAHga81VNBF8GWFnHAS6g9zCNgKMsZSPik7PMAWRjsYnfbFynHB8ewm",
  "key11": "Zs53jhMX3rwyauFSYYToEpfDpzZshnAaK6AJh9Tdau5mi5e9XAahVPcJ2Brv8HsCfLLLJaFkf5bpKggyG4kH65R",
  "key12": "AxT5nyDz3FVTmrdnXTW56JpQccFiuWYaw5y858YU3XjHRjq9dH5maPBjpkmG3Z31keJB5aWAJZ9hbtLjqRpypyQ",
  "key13": "tSm2zsriTArykFa4GEE4HCcFwMaWnUdkKcGjptSw9xVd3J73Ju8G5NKZv9d4XxqfabmEYb9KhJVHPkCHNfa9Pvq",
  "key14": "3mfytC7K4kpMBjBa3i9QbFQA5CYwyLkr3HwwK9My9FC8NTseg4Twq5NmauuLHrgTtzpkWY4tDA5Xo3GgD5JbctmJ",
  "key15": "2sA9AVUTV5Ae5dA46XnGBoBhSyif1QYSvPGDdYoj4DcMEj38uwKbeY2PeSgm2mmKcj7rahhhVr7W36Jy6QqS3NsA",
  "key16": "4TgyXf8JGi5oizxWYpXE1kD5P5xxPh2YXHYfdUuV7wPBLxMkvDFJCk6bCVS2LgbJ95NzHAKTXXLf1WGi9jgVjRwZ",
  "key17": "5nkjgMeRMTHSeJqhsA2djpJ8bqnmKk9LUrbyMC6SwhAjTRXHJxBwAQ15PV3H4feW5GZXBoMwS81bFCpfp1TEcX78",
  "key18": "2wrY6zepJ3uYh7vig3sYoDxHUk3f53owwxmbyJpFFWhUZR2yFgdMo1tMshDTb9bwbNK7aVs2BgZhjMNj3hdEnDQa",
  "key19": "2Fz3Rf87RSYKSdY6y3SQhZ7KtUSZf6dxy8tJnaAa7N6KAAEUz1yKHmcnEgNRXKPUaW8mW3k11qnVzPGa3ktFfQMo",
  "key20": "5gG4mPoq877eWMQJ85NtSrirPnoTtmTfK31zAZtp9A7hbG35tJzn3aRwZsJNufPZPTidmueM9wNsBHpdAXVz6x4E",
  "key21": "xTSnBFETPLMLfQ9DJyRsjtQFbjkVMQhmSyfB26nB6zCnaJQ8TMhZevDjCic4mrMVaGMjKuJzreHF379K2UJemqb",
  "key22": "ZVgQxiTasAFfMfNB5NYqEqjLvJf51PjRGtmhKUd76u59vXFv1Sjc1ELt6YWbo4DXVsgm3C3u8Pk5g3Lj6VdrFLa",
  "key23": "52KAbsbjW3YwgSEG2i49Q395RvU6iN52drdcgX1PiRAXSESiMqC4GwyKZuPgZUWGPzYws8eYRGAxJq5FFzLuq3ve",
  "key24": "3Kpoa69gfAN1gSFwKAQoH6VmVPsKKyR1DSa3UtTxzYNzci3fqNFbbCj3fkiGcnDZr7xSU6oX4dJvaPvKnsGe5LQg",
  "key25": "495zynWVaVZUxJFE5cbBgzAwAqEYFGGM3j9y16ZZWfU9bvfruJh2GZ5FQp7pQrMjx3cQBj4gyXn4L9vXcz4Xbv2v",
  "key26": "4sfxVgsjNH4FVeBWv7cXy5BQBS6Ku3zLaUun5GZhRmpMqF52K6atJRo8GTJe2SmtvrV8EGktmeaSHMaucHcMW4UC",
  "key27": "5Pz34XQAQkXfF4GCSATdvVRnAo4WTXTvW1rdxAy5dLDkrWWwAvvfoyTnLvEGxDNg3caRy2YFKwtEpRkhF6ki4q4",
  "key28": "4Xmr56EC7Ry2PX57P7NcezzDueeXdQAf1vpyZu5tzkzeH56WNmSYxC9pZVHdNtwYauLrmaySxxeGw9ypYHw4tqsS",
  "key29": "2xcBGC7rghzkp8va7vHfLF8AniaDpJPd3Jm2AZNX8xsj6FS99MWnqJMhrixXVq27UHFsmkUSTk8LqGQjC7z2xdXS",
  "key30": "2771BkRFpiWYaPu8BWMMVeoukysNRwokkeni2Ce4dQcz4PBsfenX5NTFytwLyKxXgdkbPzKiL7b4bSWRD96RPv1r",
  "key31": "4nw3ukc6bNEJ39XeitwmTKJjsY8YuHU9ise7dpcTp2GZjsbszw9FFL3S6RcU8kQDawNZta51CRgeEkDrncyTkooQ",
  "key32": "4QpML7c2dVMvXzCyrPiTFEAXUBTvFXnjyPzSbtyV2uurYpc6RR96cMuTxsG3dR71Kro7BYQKg8hs7MW3mN7ucU8C",
  "key33": "63MeX93Jbn6upH8cLGWP4KB7yjXdyLKZkLikLeCqvu2KpG8oz6XBpNMxvLw4Ee4UbWHP7Q3Tp26t8KPWMqngEyyP",
  "key34": "3KDTaxZmM7iegaB49ffDar2PbCyAT9DYm2ReY25bwNeykg8XqX4D4SynokvpVfuU58DzrYXbgoG4yMtncZieZjcG",
  "key35": "43uvTVXEMqphe81YrPJuz7UGyLT1GzsLRy9kY8Pux7qywoUFUnP72PiSahE5hirdr6RTRGsnoXWoPQTPmiMNoMyx",
  "key36": "2i2bbWgbUJixr3gKHuidgDCd5YQqjE9y2wvQgP62wnDNDutvnYkSXo63hKNSsLYUMRFNVnqSWS1WZvz88FTDBoKb",
  "key37": "3cpNhDz731M6Dot8U2oHVvDA337T2VrtLPNZGnbVa5CbWvuz82kkwMBsd2SYhyyVDNp16bjHiNLZY4Pp8o1M4kZH",
  "key38": "4CoaxZftDWZNQEWfK5i6G8e6uHsxnZ8J45xfQTsL7J9F69sC3FbFZJ85XTbRThTWQJnzHY562aLZEZUjzsJoQSCe",
  "key39": "2zSHNJQN63UKKpoZQ1qErwqyhZU3yNK9xx2sGDF3qjL4GpTqwioqJ3FW6yvLoT6V8h2CaTEGyURojGq7BTUd4sUg",
  "key40": "EkTE3Q2jZmDr91nM6RmKtuTSUXwsb2yWr2izYu2ApnpTRhcneinxABoX6cYzQLuqXkqaPHXVWjczFhXvRgmePTi",
  "key41": "4GRWN1PrnqDwUS5M96ea3CC3YMZzAi5LrCqermfyitRx3mWNGsZutVUW4J5V5WEyemSGpEZNG1T2FyG7LhmKjAHQ",
  "key42": "2dC2Yix9Eaw7n36MskG6axySzAGCY71ENxJpDSSG481MC7QxdNioA2g2kp7JaKdTA9mURJK3HkHTNWwHegMAiYNp",
  "key43": "3T278CqPLNEovg3WHWiUMKHBxSURwczzCU8X6i3LuQUeQfTs3UgxTpEWThyE1fqpj3srskwZ2735RD7xTK6qKuYN",
  "key44": "5oo3MipvmdpFc5dH5KEKRFP4Y1Rjkb7XiZM2EihqxxMfw4HFuA6T6fbnLQavK3TqUksatRJGQDzqSwxYGbZLLhRS",
  "key45": "5QTmF2k4TdHA7koaNuvJpMABtdRC6wSDKQ2YFcWxnpxk47JVV9isN1nyQ9FSHw4727yUUdkqpDkk6RGfXnK7bsNE",
  "key46": "5Eu1fx6n55VphtZk1BNbN1BnFxkuCa5c3EvKKFqv7VhYeZJum8b1xQJhpVqwEvv5h8jgsQWZw9fvLFBqWhQrjuKk"
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
