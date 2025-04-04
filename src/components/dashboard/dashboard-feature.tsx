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
    "2BPZLsWvUtGtxaRPPYTPBGaHP8KTrJv3b9MH7YwSCvZrhaF15ms4eJ98SaWtkNRyt4ALrXeGU4haJTkRyzX3rD5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uWZ74vafkUonAy6cEXNRALNXgerbmJsBJtUSwE8yw1oUjbkEDfNRbYNxExZXEfJWUmx6HTvsZQnEmRkqjSkMR17",
  "key1": "3Q6nVTjdMAgvxKCmhCmUt7wqVWWyr43RoZhKejWrEuFetR5k7gcSJxVKPQWmhMVBp2XkgtD8cQFk8XYaM5Hx8hxG",
  "key2": "59UkNtFybbMo81MUcRHViuKPimeXgnJuNF3uNHcGQjwgQkYZuTZYyXT5MFviYCpKQ3fUoLHgwKRAZuv8J1Ru53TL",
  "key3": "4X7wg4vqPH4LgQamtncyRfzZNXw5UdGQdAECWdgqeuyYqT7icVjKuApss5J2SEHeH6kwb9hbzcDTRYaJzojbBm8v",
  "key4": "2dp6hDFY2rXAX35rdFw4xztgcZ2mu2BLEYqD46uyXjeFijqQrYyVCPQ4tojpmz9KvxKPkEegfXhYPHHmQAGHELpi",
  "key5": "4hrtLNU49NHw8jabg8Y8BSAycpAGB3kAPV56q5j1Cxieb9DWba2QJ7iJAfhFLUhDwyUT2SsxEbfKYnBZpckpz2Kb",
  "key6": "3DC9A8Uq9pfBpEdtnAjV6UrD2tuDdpJpMzeKyNcvqXWHEagCeZquzmYkwE8Xmx8QJBrzmHVhFJSQxVCN3prW4Ksz",
  "key7": "4gsBnNyr6RdUe5rvcEkew8zZ6Nh6awLNtgeqK9JWhHMHE2veGS7G25WrqmQ8nwzMsENqzUnQvSNn8M154uStSCbF",
  "key8": "f19UQbHgFbc3hxik6883JZEjJXmFuZApcGQNYcxnvB69DXbWBur2jS5Ggk8NsHRctTy5YznBqmbdAjPb49wENoa",
  "key9": "5jkEiejnbj5mcGcZu6NuedaMukUqnFAKrEJ1GtxAXCajXP5iCQh5Hbr131Ns5q1qVWAfip2ALyuA5W44m3h71EoC",
  "key10": "3NsE1antWcfLD9XjazLwsAZavA3iC9uteg13rAaWuF1Gpqp3EqeaCeqk8duvvadvUY5Q7r1jYopxFMqX7JAETtvK",
  "key11": "5BgveB9euj4qkiCiK8MncXpujZb7Jdt4xjLRy3yzeaWZ6DLkUmb9ow6FdvsUqwXu13Xov6ZHKQA7xTkdrKFZwqfL",
  "key12": "4o4k4hUH6hsb2vttUD5JZzAU89ucQ4dnwwRzdJWssy2TZZGqieeATMabrKZGXZxZXHQuVGZrxDzUugfdwEQ4B2Zu",
  "key13": "4iB2cxAAe9DpiKgvPYDApWUofzWfNJ4jmfRyZhN8bnmiySXQExyma6epVQnG1HN5quXf1ANcn1FwGAzjycqjmECx",
  "key14": "5yV4ckjCS756BRb3A5WjvUeqhGRRaRg3ZpE5zKjy2XgUJePaVdK8VTdAqHsu2Uys2bjrAdhSGKTBWXuhHVwpK2e5",
  "key15": "4r9rZ6dcqR2QwUTcQFBTBu7TRLXcq5wMBVkFXPzMgGWenChaPW45y52kAmJpRJfEABzomwmpXCiZJC3kebrhZ9ST",
  "key16": "3QMR2Ddsf5ArVnRuVtTfgTTYqm3YCVQ6ora6KsGVdGxt2q6ASmYRvkhDzRzA2JyP4kqa4oxxU8jAMqm7bdu673if",
  "key17": "5d9x9qmpff2waguS6uRv8wwE3m69SZuBatHMdnsZKsrZXizNfWFrwt2FuMqxVJb2B2brd2TvC6uBxADKDNgeYrgK",
  "key18": "57GtV4FeotLXNdAwVuBxsNcNMJciJHHtuzq1aqMCDY6Mzkr1WVYWnZ3We8gRs6b8pEXk9NYrMCCKhNv2H27tdky6",
  "key19": "52as6iN1HTzB9aU5QXymr6LzztPwihtWBQWedf7pHaKZbTpuZtT6LSgsVtxEGaqWuzTmdCXB9FBNjHNvC1C8YYHL",
  "key20": "5YromahrFmvkjncd6xRinCPibKjJeqe99tC78pHhAxZCsS2FXtFaKSTiPBudLc3Yq85hA6X7wRSBg8Q7UAaMcNHv",
  "key21": "2K9a2UvQJdZ76iWk2CnXxozNwHTPRHsMK1puaBVe4sJJcN4uDLmu4qTJJcxfL2ncMRktgKmjS9kJTokp39xvZaSu",
  "key22": "3556Bb1rnVMScTdhDryHFXm4FDDc358R6y6RMe5qkfyA5MXktqVsZAL3ZKhtSGwLGzBV6VZRjXfuvm3FDzDqBxjK",
  "key23": "2dYXHxd7G7XdVTstdm9gkvStdy7VfveHV5TMZzyT2a6zGcDPwAmjZfduFmBkoAow5wjB4zoV9tt1LYMSjc9RNGdm",
  "key24": "3puVuYMfEVsuzVS3kajbkQRAhJWzzH4uvtuauKoTps4TKxHXVQvnJgRxU2cnv2VvCtxGShoHuKiXmVRRHLojZ95i",
  "key25": "5fXNusJcovipgB98EZjXk4RmXe7wSKgxy2GAT3zhTHULB11RY14VGCS1kFrBPpimPa5rtopU3vzPWVYJW984zQyz",
  "key26": "5HqHtN2CeTMdR3BQoJnyF2DTRu5DcfLifNuKscTCsG1SD4Bghfb5VhotmEjpMS7XhtCA4LG8V8gVJVWkViVAUS9t",
  "key27": "5ngAhniRPxLLC4wvxWRGBVohDRYoxHHFNMdTPCZAGaq1yksQhZ2QrZH9ToaVSXLCKYUG8DPGHkAPsUHDp2ov7DiU",
  "key28": "4ic1QLyN3sqGtk1G7hxpFrYPmM6npFiyTZCCJPHpH26RqEEgooW9DUzSapnJg5WdhpxiNepYAS9TbpcafYs8dv4u",
  "key29": "2UHDsqmujENQSK5wRFCLPuP9BGxiUHVHGRaMjTskBHQTvhxy6J2B7FyeQH35hPjFeJ2KPVBuLj89Sd9miyGaA3Qk",
  "key30": "5z8SDtELBpjdmUD9u4shjfSoF8KbrQBsXQ8z5Jyc2R1S487v6UhvybZWSUkLGGqxkQU3pG8fZJH129d4AAi2ZAKq",
  "key31": "2cWwKH5zLrXgMzYc8qULMeX3qUMfcu1jktgkcopqV3FGvVZGSjBG7VF3heUJxn2Yft1XWMZuzetJfRySSQpPjrbj"
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
