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
    "3cw8QbDKB5nyL3nazG9ZQM6Zj6H57WnhHiv7kBTNWVvHHRLjGMF2zQEqCf2eA92PR7jhPksWcvxQoRWhcVpesey9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Y5MVr9DhsHyorEFqPQvdMotxYdZLBj7ZG2rt6oucgoPwrCnrQSkvpW1eW1T5vdtvf4vfdaKdrYS3zzRjzZSLjQ",
  "key1": "48apJXN5BMc6by24w4LCj32NmxmTDu37W8qoLZTNNzBJMHv5hsoSKkiAAxkjy6ufps6cF1pX81MGV12oFP57rbEJ",
  "key2": "3DC48SDp8eGUZeB2Av3VfF35Jz96b6ciZFP75fVyyg44ekUQAnSpkN24gi7duSs4iXKsoVnkR28SaqezsD3L9ehF",
  "key3": "34tSobAdVCmzo6g6bgmUsmeS2DTv8DsxrZNyDjcfYCbb71p21oEYgXqRTECayjymD25rSipSZW7obmcgXvGe51TW",
  "key4": "2Shc6vT9gK62idS8VFH6ywsxMmSZgW2vmiJ6P5H1M5iLFMkdJVVxRhKHyY2UNGTAosGmyfeQXebxcUoapwd5eiFW",
  "key5": "5eZyaLwzfCrJrXGauxgCwsou4uHgrH7vrWa5Jwnwj7WZaft7MHxvkWVRTHrsNLwHW5Kxe7kuBbUdcU3PcXkvU4qN",
  "key6": "nhXRqCFU7AvnfQRdzTKhPYcYGwHV64s2sjcFFd3RK8x1aD57F9ggKdyRQm8oyDoAb5Ri8p2AJSYFJQwnQzxv4LR",
  "key7": "5gJTs43tjMp15BC8m269t5pWrht9TLsj8Q94jKBAvYT3SCKP32F3fhyAVCWzRbMS3pQbZbXGPci23SqNkynSg6AA",
  "key8": "21Ybsq3KTN9prjsXxXZu1151YEAmJ9BoESkjowWjHT8URFd2YsU4pTYEjQaEq7Dag49TRdQrdkxsvhrX2UZBfjin",
  "key9": "3ZE7UzHA9jPkAJ9QxajZe8s5otxTSY4cqynGn7dwfRctQeWD5sVgon7bGu2RmjNtbYVzN4vVotq3SHAvtkHTvT9v",
  "key10": "3q5johXaiazM5AyqQU6h1uhjJ9SLVapous2CakZThE3upnf4vLBSxBKKQVmSDzihcjrUaobnwnS4x1VfGTfRghgj",
  "key11": "2m9v9nABxkA7RjfvLyUPsWCrh5rdJqg6Q7Ahxt6msYDtUPNxUjKJozJVTYQRnd6ho3r5cZbNhhxbrPshJuJZoq1h",
  "key12": "3N7SStQGGWrpKgXV57jDKqthCBt9hhmhCnn7hS83e2P7t1RVrz27Rv16ZSB38yz9rr8yJAjzYhh13iBFCXGrZ62t",
  "key13": "5G9i1372k3HY4RF1Ug8QRMS5kzTgh58AjTsKxvVckZzK8nnQVkANxGkFhP37ncUSEVdfREv4HSoXNKZZQzY61dLT",
  "key14": "xVCBs2vFpPyQ9e96Y6jxQYRYv1ggs2DAhkwgDncfVhxbVN2j3AcaErCy4wZ4jUbnwv2BRKp5yQMmfD2vhSmooqC",
  "key15": "6Dok43yuBTYYrcwrwjPHYQdoz1HZ9VZmnoQVMwr7icbX7wwzGEem6NYyYqqX5cUTen816UuMYtYZTCsjJ4eKUzq",
  "key16": "3fw1jyWNe2tGurmCbVKBjPJ7Ca6ChZzjPSi6UYfiLusacs38tkfsG9AY6QjZAmv69dSeTDVyPMZ892BznqdKjQXr",
  "key17": "3rL7KMAUATnGGFeta1pwL86idG5DBDfQEQJ9xm5vhvk2SubjeA74Jf8AWfjKp1fQvbTDEzpYUZLMfJW8TVy4Pjb6",
  "key18": "38wSoBtpvDMFwaVuK6a5HakoUsR1QdfjGMiSaBq5PcnanE5qVyKKKv7XiHF3uAdijhSXr7whwBxDTTw7etFFUwag",
  "key19": "3uFP4JT6niz8hT5TQJk498Q4S7eHzpAu8nyK1DrWBqabD3GJaHVZ6PPkwFBSizJKkRLvJFGBQqyhazCWQTT2oYyv",
  "key20": "9aXekMzDjC5f8qWkx2r2PYo4ByXeeb87sjQchih71a3XbZNRw7XEsL9eRKrLMkHicBhZ776vgPan1H3kshKDcMv",
  "key21": "2gEvvEbdPiTzG19dfY1MkvCLmwBeee9gts6RcovZYrwFw3dDRWmh2mj1g5kWQ2qereGfcPFRnTFwER6wdZSZebeo",
  "key22": "5y95uRJPkJ9TY4qu8ta3A2krfB1mnqB3frk19EZPKnvJN9FjgvRPeKGYXeA2F9imGBK4mTdFFCcvxAGMMqMBV6Vv",
  "key23": "3HTeESvBKhH3QQgi3AJroVjLMXiWaZhQuGV5GunV8tUBKPmiRscQT4pJhjJP9PSyXDUdNmMdbc2ufP41R6KwwU1K",
  "key24": "4nBq2uP4MQDC9t7hJfJyuKD4Mayq2nuDhy8HGyCjKA46xfLo2MELQWrSG4RbBDBaeryL4M8EdbPBcTVq4JnyuWTF",
  "key25": "3WBkuX5kXYb52UfVQUPktJLzWWwqLcdNxkUWrfxeKt2L7GfD92iCTQkbQKctwipJSMvBLHkqFVdYV1xiRN65mPp5",
  "key26": "57t5q2ZEqP5853xq1DzoMSEnSEA6dUtujDv6sct9pD5JznGZkuHBTqAiCfmxVUSR8F3rFhJ9qh9JBmD6t41cbqZS",
  "key27": "4g7TUQV7uFzUoaRvDgfaqHZGkvi3d9ZBWyxpHiwwTcKaJCmbAbW5FqxSYGxpU3hkpE6k4t5ewgohDReaefaz6c2S",
  "key28": "41QjEFyoixr17f2z1bNXLoPogWY3m8eivEamjC5VtrF8E8L4j7698oBQ5SzmoRSdZsqbWiV9roq34Fvecd5W12z4",
  "key29": "4rmr5EF1zY5animfJVmjhEyHbKoFiR7KrU3d5VkdhjLZKsmrGZ84UpCPAN3KAAeTqajm6V8RCyMpxsV94NEPrfLp",
  "key30": "8E2axtWuBrqaaGy8HgBs8BHpLzBYea2UR2YBYUyX6Dn9nBhyutTYYsBPGG48YJxWwV3HkYX6XcS4hxJkjK4bYZP",
  "key31": "2udzTZa4FMHX3jTi8SM1ceaAuoSS9tP9wKoVRYDyNndSdfyq6kq1c2d2i919JKZTF5WqHsHchxZRqDamcKmtH5kY"
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
