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
    "uEjZ3Ebc9beffDE8U5SdAtxnt46yFCbLoXmWYRs3FxxFmUK7hseYpydzyLQXdZqffC64wcLxgnC87CdyqhEX3tZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tiDWTDMDcK8B6wgoMxLb55TdMwKn7wqoBsfMUSn39WUhPARzeTfGL4sQoVSCQoyMeRE8CuQ5AKansMksxqJovU1",
  "key1": "32sPsVXQ1ftwjby9PHFgp1cjSHb23aFHCtaLV7bxX65qq7dNTVa95FQ55LKBcMHc9DJRZQG3Hdbq1NzHq9iVKynE",
  "key2": "3pYAgsJoXz2Gwokd3KWgWEUuhVyjETxsHDuubb9gpnGDgxjAiQRgzvcYDJ7oE6YLQEiGMi6nfTMZX7wjmHpAWQ3z",
  "key3": "4MJMvFV2KVTdoewuocManTVivSRi9d7KgemJobwBm5QHKREtv8Xy32Tdki6pU5YyLfZNLw8wXPJFRKs9rxGShz2P",
  "key4": "22zcPxxMrwzz1xyuv1hoPUSXMc8rBt9mXpnS9DZRaM8E55HoVoj769GcGdW3sMT6Yy4ZNe5JGWfHCE9DgBhwcFmC",
  "key5": "5Znkjg64eHMnZSvJQHaNfXr1MCjx57v6uJYCLigBDettF77WgGZPHLrJ8EUGnGCpJV1zk34qtVHGsPCcUCMPUkiV",
  "key6": "38MmqiKqzvJ9Z77F2EbtCuxm9mzF22YPRShGcWMBsSTNwZh2m74t9iJ8QfumMZV3MSmazZZ9vqfFPcocENQecVkd",
  "key7": "3bd5PrM2YMUZH6gUf8TqBkFvcuDNLpAFYBBjo7UDtQtZLDc78Ho2nvCnWpgvUNfAhe3wzmtVLerAy2BKxB4QxxJk",
  "key8": "2U6dCv2BzdmNdqe2NB1eWRYrytw9HRhAaAZke4gYfRxELignf7F3hwmd7Y1AbK28JricT6HLg88ey2YVgFW4BhZf",
  "key9": "5wgywovjaNAnNEtNWorb5fo8VjvB4ppqRswVsL8aX1W889omTvmraJXYEKkQaCmiqUDu8ALMKwCmttT6rdTsgg5i",
  "key10": "4xooGwfbErzWTtqw8nqim7y4yUTxWF8JzZ6XPzcbJrPS7ngdAtxQfiRw6PG5Uq6ai3Sy7KeAW4HWndULASvw8orw",
  "key11": "4SqcuHKgWvmVGqFf9ZhkPk8P9zxTQRbKMMgPazAnFP7GxwbuJKPjuu6mXGizFzieJxQXgt4qYsYMu7cGvWqcRHpJ",
  "key12": "3MuP5UtL7U3uAFTvZPP4ZrntpwNxtwVdMQWFDT8rDySAVaULDjVxKi4zbsey7U5YRdKrr3K6FsRHuj9diMMvysvn",
  "key13": "4CQdQ5CYBTbT4VwAmgW7sEuBaTaQcEGxu8kP1twRjFVuLFkDidvV3ArcjovTVPApAKpojCkA6Kr1Lu37Mh7Rhpxq",
  "key14": "5Pr6QVgMdS7yyw2Poou4KLuWkzRZTKyhbiAiMbv3HoZw6gGH3UCfPQ4BQrzDw9w7hQ2pxqDFAxmZAyNRG3Bhzmri",
  "key15": "34XEXAcTW8f6FAYKEesGbtra9wK1KvVtbvjnQH7fxzW43qtY66PzcR5UeJT9BPDgCW8euvtPvihts5M9A9wn8vt2",
  "key16": "5CNjLhEx3qXc4kCB8rqKhZgEVDLQmVmFu6GXspkSXXzjeAGLZSTQxWg9zE1hZEUFFq15rm9gNnb7XtfBbF3A8xWe",
  "key17": "21pcojkcfKipETsKDpAsjUx4mTHtgfCArSXsXpZATPcVGe98mgXqJaoPr9Rjh56BUYAJzu9CNcNtFfJ2dXHwsG7i",
  "key18": "TLCW3U1x2gZsFHg22zzrA58ro8QyE9xWM8i4P9YiUFJSCKNEDntaQqZf7PLdboUbUBNU3Yz11DX817tmPxcF5hK",
  "key19": "4PHoaVRxG2fv1V5ncNRTotWCENpyYGpZtZUwugo5RPJcgUpYMK5KEq74kkjHJijeeUhLk6TE3DYjpH9mxiX8kfBY",
  "key20": "3j2iskqyQkfEnuVve7AP7jtx7m4ytWAyj3X5291U6hNpvr1oiH92XtMVeWPZip8ixY7ctTEBnMq4p87WtFgJ3FKz",
  "key21": "4oPredyevRNHMJriZvzmABVsdDswBUe67n7u269sKktWXxfLadFMSnA6YknKE17WEkdy93KGqFrt78fyHLcjmKci",
  "key22": "41aiQMHZmYtpotJmeJ7iobUSs9GCG14uZhsWiqxU8RrudAiuDdBngG6C8rJKdzmpRS1UR19hKJSS2RBHzKz9iMfh",
  "key23": "3m2K7TNEsNe1qqos1yLzFMjP3rsibTMa8sxzdEQ2gXtQJpopkkJWyC7n8vWdJJwP1h1PD7tBnAKWHMV3pjf5Gvgo",
  "key24": "3usMyrGuSUosBUS2WBkA6GWB2q2zsZ5tmSsXHLFodoZ5xYyLsjFSh7qtQvJt1BCJmcER6C7WmNw89hwTPbejzgP8",
  "key25": "2PcN6Yv2dJBKgHzEAGy7ipYt66Hzq2h8NmXG7FT48MwnpECrvAHog7Apc7PZMLUYmDd7YhEdTX9EcSeX5Au6vtKw",
  "key26": "2Qyaiui7myfgpUy4eURy28EqK6XwNdmkjdLxycjYX5GAMAHeE9PcrdP5777KMjJ7nXTwkanVG9ERYjtatBsxKqMh",
  "key27": "4kJ3H71SVPrVun9mBKxVHXyz8ZHW2a4Vh2DJK8QrPECVLasRAE2NbusLrUbUVEnz9fJtKt9QHNw2JfDPXfT5BpLD",
  "key28": "5BgDPmFcSimc8LHzE6suC7MtPN585i1vrkx1gngNQa5CqbdR1DiXsDiMzozgmVyJQ2G5tzU2jCdmyKF1C3Di43vY",
  "key29": "BbhxrxfMGfhT9P9ANFzNoHh27aUw27KsGAvQ9kVDeMasfiJ3p88d66x3mdybgtHKgrv4bRYPiaiB2XfH2rghmHb",
  "key30": "KTZg5gpCmvno3vsUtxQYnr9kGmgSMW6DCWDFBd9e5RhAk97dAhg18tAcc27cDboqHGUSjY5dApKAYFjAdrDv5Vm",
  "key31": "5fDDprvTn3mUbp46WuoLwcNBLPjAhddUfuq4WkvMguQCVA5hiSFEjaVua2p5h6WwtW1BYExNMQnAAbUCZDTgNGFK",
  "key32": "4oum5A9qydPjAbH9FM2HXiuT3mMJfQJD9jbeTTeXdPZXWR9HYHka6HyB3TRFSPok7W1nkLsnLRzfVSfUWieQURwj",
  "key33": "25bqUXAsUzAkkeo7ebBVttzdRKmRuwJTaoj4J2zkGZy1GaZzm2CDkVfM3VDmtpjQ7yVrsxFWjTkKgFDE1AvVwsYn",
  "key34": "5KQenB9zmR9M8QmPMRrqGJGrFPevomwkTFAcXMziqZzb6LxKQGXd1DyLj8fBQ9mzCPHivx6zjyriTKDVoJL8xBx7",
  "key35": "4s4CGdBENvEAmew17nFRLogiCXH9dpyT4L9FCZ4etzoYbvnjmktuFUzcRNkYSpSyEDbXDixrzF2AJKbr6N45CLHX",
  "key36": "5gta9nmDW3XZs8YSfZE1pXj8CsGb2JvN4rpjtyPHGmZAt8GfoYif6MoWvbw6FKVDtTzcADhFyUqC2U5fVwy8pPXp",
  "key37": "2YmKUY5tcWMGgp5m3QWRGSofg3rkFDnY66K5p5zqjgjD8qLHqMGznmFh3MGa4WjKKmbqGLZ3haB4991NkzEwTRFR",
  "key38": "4TizUYNCJ6Li79RbpNr9seAz6CtLVsq9UDuhi2yKHmzknfzSTioKM5iZAUytKk5YrGbTRepFzfXmuXrWnU7zwXgA",
  "key39": "2ZSM5TdP5rjqaCPawB1vk6D75ZR3nh23AneLZQ3JGBmGdMGWmrRNyRQE6EcbeWHFq6ELHAbWZKHPMqB4B9SGHuzY"
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
