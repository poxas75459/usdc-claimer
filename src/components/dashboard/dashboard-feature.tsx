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
    "4B7Zxt6xYXSbyoEBWWMw5oBae7ytpg5TPre7a9JffofhDgZa75yznqARGDwn22sHRdoTzJJUdXAtg9xA9TUJgEHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usx73sQjd9rNYGi3z2W8rbwTa4RNx21jVZ7f2yVBXEYmpErR1MGtU7szdm5tu6Sr3HKAyQxK4yi5Aa9HGGHk2s2",
  "key1": "42rjSkMQD9f73BN6Qc1eN8EeusCE36GndBb75iJt2KXueUrVi8mkKnNHMDbmhSgLHXdtf5S4khkxAcqFuVj2QCeY",
  "key2": "3PtEF4nvDzyBQaYQuN9GEfLuGa2kE5uxR3bYtZ9geVCixJWYWxMYbbBbuTzq9dT3RSJ1RusTTb8v6i4wwEaU9i32",
  "key3": "3PXZz95qApujWdJqJK1S74iuy6Q8JXBPjtJv8EvSSvtGJCn5jAvD7yQVZY35qzQge3q64PphAUifn1gyvQnDDF6P",
  "key4": "G8N3g8EbEc5VGd4KEt2KER1bxP1E5mwiTpdp259uNSDXfg2pD55cECkXL4obqZdqLo8tXjshhaghBB2cKHkJqeh",
  "key5": "4mqLrfQJhnWomCvFTGDCSUd9SCfp346SumDsi4PXoxoz9NHoKd2cRFQ1HK6H2d1tyfizcuR1ZBRqS4G9wsrKii4F",
  "key6": "5gvwYhGq4SXn8KHnFA5cRC6JyoxdFXvArJmjTPLr6w8noyBKPM3MracK3N5d3GUtQg5BEMXwKMzFByU3tXpgsevi",
  "key7": "2xumcmyVVrYFY4vf2jEZmNAPuDK19yxefYWcSWuGbGeR1QFWF9jU322Wdid6PkYfu9xPtJM22HJFS7QtKg8KKg2M",
  "key8": "5KjN4MdhfW6cmv1eu12e5Z5txdcavXYW4FBFzr646N5joSmJ3vccpKHFEoTowf6ohc5dpWx1rT9zGxCgRZpudAVx",
  "key9": "61GhF2weHbWuDdHgkq1aPSKHyG2kfFystZxV3b4bpfrvByy4Z7vdSaoACXJRuPTETSpVvXYxpKLVQhPYnuJ2Y5tp",
  "key10": "TtEh8ABi9PGgHmrnoB5MzKnUVMjXEFNStKyxYexqvxZ5iy3d5ebG5eZkJfvxU8Ver7D6NK5BMmcg3sP1YX7QagR",
  "key11": "4Q5kJhoxR9FsNzRCvQVmf4iy1AFvdt6CiBb1RdsL13pnqfzFyNDZT2BpApMzEta9SYBkTZyiXHHuZQb6VVvKRSga",
  "key12": "6t5kRkEhzqZmzSGjZTwYCFriM5W1c1GZnah9oNZ1fgaPme4f4bFmMcbsZegi845ZX47gTbjAJf822mHfXRQRbTr",
  "key13": "xHLKy2HtMYevNrviwJB7wZpYxLDNcAHxpm43eSxGc2LN2ARDbf1A9jC6hqWkhQSxk1au6ufLx995JXjGYMZS7WQ",
  "key14": "4qTdh8GZ2xyH5Dqg5WXPjNwCXf9WWtPjUfPUBgSfr3crhpbEbHvw7Zzm1cmQMBzB5DpMMT2utQGgv6ZX19UZvFGF",
  "key15": "2St7MGefoyFXFmqfWDJLK6NQJw9VBD2TYPa2zshf96Zf22SFdaeAhHnvr4ZtpAA55C6yo88mLrYuz7w92GR6LRB5",
  "key16": "EUFsP5tmf1Z53MvsnUDHZAMkufpLGPPni1wadU7dEpEM1difDL9jrGjbbkMo6NmiCWtAnV5yZcGeQzibYzLcknk",
  "key17": "4eCYYtboRWZ1PqRiktP9G7fnkn9p6Fj1GN6guL9goAGDq4DPtuzZCt6qHGd74Ln7LjeXzLBeqy7uKdaqQTEW8sEZ",
  "key18": "yjvPYZHzxY3GTtTHRF4Lw7PhrKvDdSXMHxEpoZyNjcBiE1bHAE2XdLDfEXBd5RaQXe8Jjyhj1J6E1xtVf9LW4Xj",
  "key19": "2mpdbvy5w1QB4aYGzWSj3nwYJnBPjejrLYRYug3ibRnrmZy4J2BrRJ7ExuT1PNNRRCPx852XpdpAm9rkAv1MRoLo",
  "key20": "3tnfxA6Dqn95us61yfsnenhe8CckiTmTY8QzJvwV3GzvQo72DnG3BScyDwzfWSFVvoPbznqwTvU4BvMsFjkip21r",
  "key21": "5ULiVbkDgvhYDKEivK1uyqpd1zHXXhhdfeD5CPPKsn7pem4XRYEmyjhyuzyATVeRx7sBYWodETdKgW6j8mzW85bU",
  "key22": "5n4JZ3avxhPTfzEhdfCDgvbV6ArYC5jTqvz8PN19urioUEZ4JoMkaPX4p1K4DoisEXNbT5JcBxGctajFf2BqVZ1o",
  "key23": "4fSjYpg59wzeG5MCZHzwouHiMVBqDxKMqUp5V43BYvdpYb44rnvKdmSHxyifMULBsK5CtudyzUjNySXuwjqYEFHr",
  "key24": "5FemKM7YtC5RidDW9cTFcDCcKgZ1RSCjTWUWwwvdq3tb1fjis9XskaCtvmp3mr2vkufjFnLDTfQ9RHCshoCpZ3Qv",
  "key25": "5tsbLozN7gcsMNAFQ6VkozHx1pd6gCm9Ne6giuFXZjpRbnYXR2LrPdnEPSaURkdXwkdVbuK4YWLbUPu8e47MCaMY",
  "key26": "5UK2vr39FPJ6VV4ahCDWTaqc6yCtb5uvFa2xamgzKWJWMEV8A5dKRWYi2g77tQXmGy3XL9mzxEBJDJEdGFGGnZCk",
  "key27": "51HGZivRoU1YRKZr2RQ7G1wuZZe2Dfz4xXMfLPyDtdRpVyxibVfHgpDvNkVjYHz69RQ5YRfAvg8oKkkzG7NCJ71b",
  "key28": "3uVEw4tPda7V1VcCMejy2nZHHDAxmVwpiGFEHYTaiGoMNGxZC6DDRiQXsjNMTSoRgYf4jWJ3R3ubAwM5pnDj2ub6",
  "key29": "2KXhtk1L3RV7LK9KWQ68mKDNBtQPrHRgofRPPDs1P46NiupFYhaLRqmbnF45QmDKfGL9P1RNvemmt1Wu6jwaqZ3J",
  "key30": "GYAvDrdSo61wrFdciHmDUwwdQ6QgN1rqwrnpXQmsf8sQhQdBSdKTbvzxjKNDYQcyBQYJ6B1uXoxMg3wZ9YfFX6y",
  "key31": "4uG5uPDZmastADuMfuVNxixC4hZfpmrGJPsxEQGjk8668454x54X565oLixvengmn9tGpFFpzjP4sSBXxxH3My8x"
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
