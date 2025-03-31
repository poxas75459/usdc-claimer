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
    "yS4mUr9CsScfPmUAvNKqLo7MnwVrN1Sehm4HYCzUwbijmFuYvAsc4rpRkE4L1bfpS4hneZwGfiatAttFkmSyjAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vPmsB15kVppQTTpkYo325haTKg5HF2eKDQPmitRaEZGRZRFPv9ywMX7SpeH8Y8DNQppsfbdu48699uLdpgGsdLQ",
  "key1": "5eJ3NQYKEASM913hZBJshu6ekouBfidbbG4ZSfpF5BCJu7peTMFw9YFjUp7adbHwi6WcQwjVwwEQAkc1BLFqokMN",
  "key2": "4yBWJoZYi9DEF1U7uGKSdfkVKzVxtLQEN8Afuw6AGahSYxfKASZaHutJMsCnszD2pDhCb2XWSnWfsSJEEJkeo9us",
  "key3": "3gRRCGtUg2AL58P65xdnwoiqVvYyQSaYjKLFdNUaFrPAdSkSjfb965XWCg2AM56prVCh3qskycq3ubfpkK2SFU2g",
  "key4": "fKppEFJm3NxAYV7numepZgpoHGxkSgQCxskavQZo8vgdaBYv8fdD6KDUiUnHeBfuwKrX9LVuwMJ9uSnNuLvBWAQ",
  "key5": "2MmSnrXcxhLyf7kTZwZqA2CcbtEVexZpgPvL2tm2JAKoDUs13tewA69UYQiCw6KsW49fks7odjBa6Q1ohN7g8aFS",
  "key6": "4g4qsq21SvEFHcuEKN6RAznToL8Z8kUuZYWWZ1YfoGxNzj8BpQPGMedRVj95LyXRSxbbr5UcYdLgszTKZbQmwdFX",
  "key7": "5BBYZzwMNYNhfMZtWuauioRZpdF8jv79eSYJ1btcpgCantacJzhmBdvRnESiUZyHDUbBMAkX2JJd9e57DZLN7Qj3",
  "key8": "58MLRFsYWj49iUgbPZMLRmAug6vfW59G7EZSHUUBvuTfhE3j5iu2yv5xozUYxmHAA8C6DkFbq2NvfSTKYP4Jabhf",
  "key9": "ANBRdU2AxDUZQFfXUgY7P6GfDj5vDUqjDoHY3G1v79Z8o61ZZTossEVivEGqRuhDoZxqf7P9DsGM6LJfMvrM9Ve",
  "key10": "3qn5eTQ716qQVFSP2XkkDk86n3pJpAryoJwYM5Smhmxj8p6wrH5iq68y6PAEWJ7uuHbH95EDCssRSnBG6RTXRqPs",
  "key11": "57rwzcNx1yjQB1bsS9jXmbDi5LjbvCc18Cg6L98ZPExwBQThZpuUXQzqNHUN3khQeZyi8q5yoWNKA5xjrskhv457",
  "key12": "2vqthiCfYdszA8abwDmSwiqDPmtaPMAfhVj7k4T9yK6HALX2gJ9rS1DqB7ydtnqd9vwE2RVvNC8JNV1NWm2W83u9",
  "key13": "33vr3sfcCxRK4V6qZHo2tsbHtpf4YJxcSSZKKggyPEcqE65ETPibSivYZfJsMGDa8YGDTN1MBoL9G57oT2DUbZ6F",
  "key14": "2CV5xtjakymeueTyP2garLWuVoUjnm1bwM9WaQc4j894nQtpEDN3esa23sqpYZ3HoV4hjyUAC6arMDoE2rvaWUaH",
  "key15": "2xFz5Sy7WdQTFxoJM9UoBKLFF6tFp5csxaGdP2NZbUEB42sotbf2zocMd6Nx4Ldc8GK36nDrMHfZwLuhJif4R6gv",
  "key16": "23SubW2n7DPvQ9Yc9Nnvwr2KihPFVdj2z7Ku67MN6MPhJuWfMKUEJZKu2QfM5nWQQxi6rZE6DFETuH2acDZzKomB",
  "key17": "251zQLoB1wb9j5b7xuYbyhGScFz4TVSLzns7kCwqv6JCsiVUr8CsGKgejsAnMtcqG9JSMu7ip5vhUFQZU71d8sBE",
  "key18": "5XBMH1cMkWNZxbpYA1Z75pMBxkQG9t3r6ChBGwU9BQmW7UkbBLf7h2pg7wPVi2uhHQESuBNAFwwhCoCuxQfjXZ7g",
  "key19": "3ZWCim15ZyTN6Wf84duCCB3JaDaLyQ6Sd1V4dUzgcrDVxxgpg5kVS5rPL4cCYFEDcF5qYmUMXtKRv1eUpKL5bnmS",
  "key20": "H3AnALrv82Fn2rPRupEoGo3Mh7mkiSpbbCcMsPVxkdc5s1R3iF3WJ4iAHQJf19nAEMHiwCHtdwNxFYNMqvn3YFe",
  "key21": "Tzzn7n2f75A3Y9C2MysVx2B3rgSYWf5VzbYACMs56PF37MZnk4XhdYH2D4ZDzHdTggxvrV9LCUBMLDz1rtfUZ9x",
  "key22": "2xywyzCYfJXkoCBxGXCbXiC5pSKUoFZmSz8YN7PUtCXkAsUo9cb9uy67322ZvB83Buk1e7ngEmqpyrHjAGeFMcoJ",
  "key23": "4U4riWqveDQavnGWXeNiPAB7uz5FDH45UYXMXyR9K9LH3dy6fhqzsUnHnQJtB5xRNyybroiAkXERPtmMoedkqiwJ",
  "key24": "3wMbbRjHUCtxLZbDepc9VDF3WRW9isDM2TMYDgbe1T91tHsZ7dThZBiSsJu9CmRun7RxWF7hkhxeR7XngP7ci1i7",
  "key25": "3obwUgswqRAyzRuND1Tnhf32yxFC4gbbYfU5yFmCAGVq9JyzSZ9ayC2xQeDtrStawXowFPmAeSFLuqpW6vzesBzV",
  "key26": "4ybcQ9wgAmXaEyEjy8XVcKauKkAF5htU7Z4gRQKMuD7sYt8F7P5T6pzZBSinU3xB8tv993wTCmcw9fH6dD9bQwGQ",
  "key27": "2Hwp9BmnHaRmjyV4wryjwwvwxvaoARz41MgiJrQjm67L5oL2sgMRb8cDo3bAani14gYpVB2JTtYrZdcfaJpD8zvc",
  "key28": "56DbLNdiZapjznF1Nnv6P5nJnZ7yf3ZzwZ4rksCgB67B8JNw7QbYHKyR66gL5pAW4pQk1FoZ3khM8et7AjZYEnLw"
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
