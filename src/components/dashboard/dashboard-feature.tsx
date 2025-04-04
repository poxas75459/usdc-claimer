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
    "3bjjBopPR9QwggcodCWHtEkMeVE3Q3SuTiAhhwA17H5uFM2AG78nFo1KVZRhve4wd5kRqHUBRxVcFDX8dQ3S8i2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2otA8b2d1RxT5pk7Go5PGFxmdvB2DFBaxEgx5JvDnqWTHRm1qo5JxthtmvvmbyfPYStGC82D1XCvDmzxiaiBj93a",
  "key1": "5RAq6rpwBJXXXpqqv1DLTAPK9pT9ZvVfhRXwED1tuAPj7ebuzuqNX9ptdgixgyQRYWor3bdX4nYQe5hbRGzGXd4U",
  "key2": "3Vsj4HKC7oGcCgbUA25ASzvi82Ascx9A1CxkNKwC3ywDfyeSsipsnsVMsNJAKmPXCyPLhJpeK2XDmmcgvpA3P4Fn",
  "key3": "RzerkDx2TYNzA5QCzMq7Y1efADhDaFsdG1Qu9EccHLdTFb1nLfdVW7BUetsjT7c4pB8m5DN3ub9ASFEPBLPdwFx",
  "key4": "4Lp8hNaoegc8vnjADd6FR2ViSxahdykEBNtNL6j3aiGSg5kkwniSx8q4AkTCf5Nf7RkwBDawDZooxQD9VXq3T4R6",
  "key5": "pdWKvJdFTLjd5oMZAgEHf6goyA8HMPSQaL1FAc6jvhADyPyp48ZuXWCych2JRmnWbFfYPzFVdAsBF2RjtGAXQSN",
  "key6": "vnZmXQRtqqx8iHU5QSPjM9FbZG27o5ZFwjSSDyTphEe22rueaNKGu3mK7fH5hsDaPz3ZezCePACSgJpBpHyDz3Y",
  "key7": "5r38xso48FJQTFSxuZxbPyKSjMzQLqiYwYsSGBWD5SpJCXPWSzuH7cFsQUh9StCcLdnre1F7FHdSFo8g3RfQX8iq",
  "key8": "5TC7PWR7GYfd2xRENMKgPM517q4UdKRZxgbSxqDJgsVcDeCBxCwZDUXBvjNpAWU4CqBzSnt5qJwfT4s4SSn3Jwgh",
  "key9": "5Kcj2B4pbTLKdBptzcHDCfnjNJn1Wey5jxVi4FBqjxNsVTKkn88hAEdBwofUDR6ur3ajthWUTjeSxyqGh5xMTzws",
  "key10": "5QfPDcL1nrjYcM1fW4R3vTbVcMzbc6RGoZQGSchR3EiN4kxwTGUe8BoVQHJNdzssgDAxaaXH73zpnyCwZsRTefbi",
  "key11": "3cbaQ79cV53dwjn8zwH7BznPGytRcZkTuf2xMyEqrSdhDNKJ9rtXvkPj7YwZxUxswSDhBoE6R7UbyyKHjaxFRrXK",
  "key12": "3fKkiBxExNKkmYKxG1VERK13Q1XEjmkDAbJ3XZoz9LPob95ytUNZ8w1Q9CF9GNdEVfaw9t7BNiXUa3vYUVsDjBiy",
  "key13": "4keuGR41niTAeBvyJp9JKRkj754wLNbbptRQHwBwjV3KestpaLA3QMLJTN3EFWVH8gJfSx9f6uV6rsGEu4HyxG8o",
  "key14": "4kvNfZ1jib59JfWYtiW5gTQn9i63oRync6QyogDAYKoD367QkDHL6vPRwmgXcMPSdSoT6eqR3sp7n5Hnw7EK9iYH",
  "key15": "5DsreFPgrbzufUnE5A4Nzeb1Suhx2AsjRC4pWChNJsrBhhBtc9puUMvoN8K26M34uFCsKJDjPPJyiv8X5pjALSC7",
  "key16": "3ueHyC4Q3LCwrBUbdQBt8uiQ5okHdrJ1h3U9K7vVYUXbaYgE7622hobpuFU4ymBfzfQJagxtqBFATWcAqKuQ1nV1",
  "key17": "Qo6dpE8Lvbk2y6SJjc4ud5c4tWEabRAxjKwHU29c9NjBThz4izWwVZ9XRKNUPiDLPp3XjsPF1FYBJu6iim4b6NF",
  "key18": "3oi6oFcRALAJTfTyLh6AtPttaszDJAHLv2SdcC2XcYax96TGkMn2XefATGbcCwAeCcaGh9cYJY3i8HdzPZ1g711K",
  "key19": "4j3uaf6taGetjL47UvcNBqXE2NH9ospYufNCi3nXhry7gzZQCEDSM1RdJVL3pPVnBdAVPfJNGiinBCxBsTS7tMbe",
  "key20": "bSRhW3rCwXGFSgv7wYPTVopSUsQYcXdcX5zWCX3aBXGaTCSuj3YdbRwZGStawaNsvJ4MqHfsQVc3Sw8F4bKQeoj",
  "key21": "Yaq1gDtvpAEFAnoVdEBJET4vLLzPTT4rgcscybxeJ3P4RrQqsTMN9WvdaHWs3KctLmi74pRJbxG38R1rDAuYeKJ",
  "key22": "2KZGtewokT6uvV9XKNxCHKHFgX4D6VxZBScTkLRudED8QZCaGbXbL8RnC2zg3ebS9LQJY1w6fLg9iZ6UXnY4EtZj",
  "key23": "5uiJ8ikwGwHTqSm3fR3GEraFnLeFtbJVbCVmMAZbTnqjHxgWDzue8za9fng29KTYc1W18cpswdfukcfGBHryKgWy",
  "key24": "3W8Dks7fF5518kGewGzyCnEAoDPyKCtVoDpv4TcS6CxhSYRyu3zBVs9vx4eAGDfH3JBWjPPDsuvYNN7hEtgfSqfw",
  "key25": "5fawHLABRAt4MfeUisV5k1MKkfC541KK2yvkn5AZuZcoBp1gSimD1SZQsZhTQiBgip7Bsi5c3yPuJgLz4Bhc7VZP",
  "key26": "4xxPnbHeKmxHTwqvtF6gg8qq9t2Dzu2x3Z5xfkxqcMhoc7LXJpq5uF5HzNguPTswKnjb6YtHguRGG3kmXEKn5k9f",
  "key27": "5YRtNCJnWi6u7ZTPespVUxgz2JnUP8Bsc4V6hhRrxsdCG8hhM5vHbmzamKw7eEkMbL4fn1u4URLi66PR2vJ95grj",
  "key28": "4Xy5ruoVy1D7yufgSVCsoo8P3BCZQxroyT2q4yCTYi5XSHZci3khFrGfDwW5YqCbzhwNSKRbgch4paoXHVyqWWcP",
  "key29": "41jNUCvgcRdT6zvHpJfG1ZZefDNr6X9XGwMB49q678VcVaABSiGqY7XaxD3Z7qyAgBhXsVnW4kToUK5e39ZhdRGi",
  "key30": "m31G8hxKccsmoQLpXdcrZUpeBW2HVPEN9ukyq1HG4CxbJhVboQd4DG64KYRFPwtNFwDcZNEoBKyMCCQo7gmB5zb",
  "key31": "5AeV9Rq5pv14y4rXYbQ79BE9bRnWMKN4Z5heXqtd1t4nnVHMoeRh9KQJ5M8cNkYKYiBXFKy2F43KLiAHvEskumE7",
  "key32": "hBExeobngpCmpbAwKb3gZyXCigt4kKrnNTf9uAQxA2vW8KqQmaVtRkzjaZpC4r24eJQ5hswvs8G1Qx76VpmoWqz",
  "key33": "2cxxcxbo5SThXsaH6F4RQ2C4hvUV29M7RMeucpH1fftbzDHHYnWx5tsg2BLJP4ZToQ6k6hqefxwRbXgFmgsvLJCN",
  "key34": "3GPmKCXXGp3PpusHH2FrRwchQj6b3AVuw8WE4sgUMbfGcUgFhDNhM2fBg8qV21SARNpB75irdTA5Bh57LQ7DbwPQ",
  "key35": "551EsyK8hPcd8ZgexCkwE2B8YFxGWYNuRgJTYFEw7gGnxHMVztRN3GEXNmctHiqbVxgoBAZFPwpW8R9WkHDN3wdG",
  "key36": "2mtUjQvQP5s55onieqcAwkoezhyvb1weAe6ZPxgfSv8yMuBbtHd519MVuHeMF1TXbrqbwWos7GvRbifnLmqLynnK",
  "key37": "4ZakaBMphDLSNRETqPbBd4vzkfRxBtHhCt8mdtdk1wXY2DJbrgsZZJEq3nDp5Fv4hnzPyCJXYYUZ13xR2KNBEJr6",
  "key38": "2bshS39dZuCXhBWPpe3PNWU1TDL7zX7QQfrp5DZV5jf7s4w4iBAEvSvG72ZDC2BidBDXqRi5EwQMHB2qNKwd5cW8",
  "key39": "5k54pvjA6poHxJHpkYA3zS1M2zpcaGoMcJWKr5rrNUHC4NNhkaaTzfGkjHPNBfSZf7iVXdoSjdTrgihK9TmFKN48",
  "key40": "5z6vDoUm3SS1TmvT5FWSShKsunDN4QJxhEfU3miDEKbpWk5eoasksZY9od5DSUeh1QaV5eEvQq8B1L6h76DZqFw6",
  "key41": "3NZpMxHf4eGCSi1p1Qnjka9RtH2L96ggWoJMDPXYFxuGHDAdmJqxvPTL6jUj42X61sJwaNkeMYu6fisRhg8vpoBi",
  "key42": "2zEQP577ZBRWwGYgfSLPmg4dmATbg8fjH4Zc43u7ud5E6WW4ovys49A3RYqc98GZFgvYokconRwC5cZMUFgPoNMM",
  "key43": "5UfN2oMistPqGtHhw6XAG4SunStaobjnrRDXTMmMBnd3m6XxvRivwL2qq3H33S6UBYrdFhjk867JVgJoZKF8HRFR",
  "key44": "5qUx9yY1B2pPQJ2VcxGt9oupSD1TQCZtMwsPYri4irv9ozG1BVuLeqtQrUm5mLRrUPSabHJKmHryw976DryuTMZ1",
  "key45": "5unNuV1jvwANoKLNoKyeNTuc7XPNCzcq4kd8kaXWCSrNZAsV7fzW38yjfYCQQht2x2SddngA8oB3nxyL8Hr2QbZt"
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
