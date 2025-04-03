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
    "4zrPnW9GCTwiis5vWNWHZmc3USDvaWtPh5ZsBukWfAMNRLyRJ6LpQSKaesUxnUmgX2kuojwmXkaABWJ4avZJubVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fX2FfLdWvYsyShg4WFCfGE7aMBFoDGiQK5fUzodruN7EaHfDUe8u1oBiTffwbeMShhABzfWwYiymhuAAgKgsDQD",
  "key1": "2NwARxUNQntMUD7UUsjuiv8MSPkrs9rJkSmciPzqki8dsa6rL8DuSoyu5TeWPXnXqMyKYKNT7QidkkSuTFDtonAn",
  "key2": "bsNEquevUHUqenHfWgGE4VfiaxrtsHogkPt6wqWH5YrB3ZtSNrLpcVjeDitumUpvq7hhLxqv92Tf3UNHz9T8Sdp",
  "key3": "483Ld9WqERTX6NEbCSUyQFyEsy3huq9md3esbmCFVD1nyAH5AxYmJzHhm7Ax3QXGpdjiT86w78rTSYNnSm4siByo",
  "key4": "5n7GjH3zbwtPyUBd7jGPSPM6Rpi5KkeFAyANqTHcN6LhYso3jxVxqnDr1GQbgiG3x8jKgf9odsqHAjuP3XeTHLJ7",
  "key5": "fDBZvXJR6UbXfd3SjKS5A4zHLG8PRz8StRW57wSvz8EHrKtmfFz4hKVvAE3dqZRLUciXEXqqTcY34Fy4EbgNPaD",
  "key6": "4EJA65hdNxzw33jQHZ9poK4xHbfoL94t7VWVWbVHsrmoMVADrkQpg8UvBMv25jzjEEqEdvMsNGEo4am2qp6ULrk2",
  "key7": "5szpaL7o7LVoy94A68Hun56ZSTPjLfCn5u5p2q2mVFdGXJJSx2hAEbnLf2WpcShBPocsU5wsq6huCxpN3Wyg7L7",
  "key8": "3na5uAHj37xQ1UQ1QXyGs7myCdCP9iZecnn88TUu3oVSeWWQ7qbF1FssB5mzkQzCw4PyqZjWVZcM2oXBwZarf1AE",
  "key9": "5bi8gFfJKAWiAJMPvsoP3eNLwKq9J7KoBHjAgcVVzRCDE9J4YdxUrboDariZcFmhG3v2unXrYXYE3sNTCoaKpFSs",
  "key10": "52YnntV1fyL2JrVjhE9nthvHgXGNKV4LbDq7bAZ1Karyvcbq4Zpy5ftwCAok6fEdadZ3XmBbx9oaR58eGcKL93au",
  "key11": "3kFGuyFigtWNsVHQ73bfF8i2M5dfHXFNiwWrcSMiFBiHF33Zko4KJP1kW2rVeN1456VpvXViie1AdA673ifoDaC9",
  "key12": "481SYT8Lj2DhHRmCUerBnx4AwR5VhFx37yFz6deNzKTip4dJWhqKZvZgUbiu7zCoeAkD9LufC9oLDKfWw96k19dQ",
  "key13": "4WMwTHWcV5J6iPJH3LrwWeJtGYbYUkjUyHAUcmR3M1kS5qGKHDpxFCj7ieQc7CBUMMX3gYyX7TuACGpzcZ349bcm",
  "key14": "4vZj6wNnTP6HxNxsWp69NeBqjmmmjkbzSDsAx11yDuDnNHnX7hM2kxAApb5se7u59YQCM8U2nD4kkYauc8exRXWY",
  "key15": "42cyGK8TF4hvjEymDixGFT5AzfvRov2gUup2E9XR7mDJQ4cSHRUSayeA86BNf1Mecau1acdWFVhA8Hb6oEvMbeJg",
  "key16": "3gNV2Zt3yVuRonzmwZk7FkZbgPozQwXci6MNVB8NPzzo2NxrWqu8er9r61ramK856vQNqZtxbxvQp271EwLimkeD",
  "key17": "3M7fTM8kF54uM5Ym4Ua9auPiRKAavuhrGWxpsSiZ29LqqB2RUNR2XtfuoyVtTVhCh9vZfj1ww8XgdQA5RReE4JsJ",
  "key18": "5PvQgZxp5DNZjgSdAEUr8ChiBSWVLU36Kt8CZzWSDVmcbscNWKJGpkuZvfnCNKvFuSbgwX7qgQbnQh4Geqp3hZua",
  "key19": "3rRx2i2BCRD9NvAVtNhexCGW9AKmNCCZueBrWY1iNGKwhmWF3cgABXD4onVVtZsBzAugtTawhzQ5Vd7gx38sFwZS",
  "key20": "GxtLsG2SDcVTmJHMk2WzNcVqDpxnZkiqJGPvdDCavM8DrwXMVwuaqyQK1Nb2vDcodhqwTMBfpY6W6adDrCByMe1",
  "key21": "2TNLjUvtRZqKD4CU86Ed1LG33VDkX2YPqaVsqSZ3Va6NM2SwkfbFtVAT2VyLtSbYDCF9TSP4NNB78ziAe5KccrXB",
  "key22": "4vFCg7iibBhqb8GofwzSJ1rRZpprbiyc79puXj3UamduP41VYFcso7vWbBWWgDm3GVv94FnSXAzroBrVg16Kpfoa",
  "key23": "2QxhwjeaNhRCUygnigqD4UUSFgDHYD19RmuJcCkVJBAUgYc62ck99scHGfJvPA7B2Z2cbETZddyHFhTWUqpMkeiQ",
  "key24": "4qp7HfSvYpWSWJhvdsNGGwqzGukv75fEkm4LZCkG49t25ccQTAyJuyhyLXoTqB632KRxon9vH9n6YZbncyn3dQU",
  "key25": "4goV8CdHYPPVWwZaap7wLxaaXseWBVD8CvHZRBiLtBCqkXVeij7RTpRYYp8k9pP1LxWooqsmrpPvxpiVYkCuMd7d",
  "key26": "51qaFyM4ZzsiGjvgH35MjoCv7uZ3XAmZCaZUgZB3txyV2C2R4xXoSjjCUQYa1QPjQDrePrX4J7x7NTDWQS7TQpm8",
  "key27": "51nDxnLX2hTUT8aTjtgDrzsfiL4Hvf4TzAEkhndyHYVeZNCafGrj1JLjUokDrV934C7S6Sa872EXWgPdCr8mkUUZ",
  "key28": "47ixLTdL4BRCUgN5ZDHPWpSL9EzjRzRZbGNop53yJjBT6MCN8Jd9yRLozubpxWfaxdBWGm6aZSwBY1emCk2a24ga",
  "key29": "2HdM4p2Ymr8B8yx1AQz6izo7gm4kqcofv7RjgAt7Ko9jQWR5hFc6JMmybezugYxKU1fXv3aT41HrAGuVsk49Mm6F",
  "key30": "4oTjjEBSX8Uzyt6XTyg2PwGqy8sCc38A1Yo4NbypsfWz7M7skEpHDmt15uNXS8SCFVoEsXWVUtopkCVHrts4J3hD",
  "key31": "5VDZucDhv6zUSbn3VdwiwGJao8pjFeCCHfYrXfAhzueVMbZ4tPngihYroCHrxs8MJCKr5o6gVd49HhEyRXkV2Zy1",
  "key32": "4Dpyj4u6aGqJLocyGQwtPNVvVT8M86M4mzeZvjT9vmq18Vx3zggB6D8GYjSXLh1Y4tbhYjYgicwQa7i3N6MXUUnD",
  "key33": "2rY1JFeAPTyu3PHTMNpbPfKmZitSwEaCHbwmcyT7UpyGEtiCPt5HB6BjSMvnXYj1nD7zbGeqWJse9vUWgS7o6YRZ",
  "key34": "5qNfVfgcHrkD8vop3H4RM6WvDoMF5GPV17iXvNLay3K5PPPRLMfv7gyffKUSny6zwDsMLfHngrdnfegS3bD8vaGZ"
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
