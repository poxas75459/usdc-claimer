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
    "5gs1Q2UqMVuTHgKpz9KM7yR4mpQqJZg477rbdDA7kHaDMkB77MAg9r5B15d937CKUG14iKisv1huegaCTTHYTwgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33VdZktb3btiRgUhMr5bggvSG77TPn4d4Ju5zvJVPt8Z58eQYFbwYYkcjypz7KBy6x3rQ4BCV5Dw7jXrNviqHZ2H",
  "key1": "aT1dNbv2dQVEmEpV8BSN3UTumnWHtJgScZi5nnqyP72dC9duZzUnSvxkutYAcQ5DFCtQ2uZznnHTXwwPE16kv6k",
  "key2": "4E5MKBoJzPB8Qy8WGnPdZd7Vwmmv2sK6bZWrL2kJt2s6kH2RPYuZUsoKeVJWD4fU9oJjRvMqCYs7ycMrsYhh69Wu",
  "key3": "3PTYxFs1SieJca9g7qBGETyrFwosiNMNuMW8mMYrTpAD2knurypyev6d4odD6NwDqbU6vwYoiqo4HrYErXpQoMTp",
  "key4": "5oKPRgxTVf4BvzKj9zquYK8Wue9NhZ5GUfgUgW5CXrhg4QiYtGYmwzvLwD5uNQgpKMKhgwS38V96qmTmGpCtTaxy",
  "key5": "aU2v5VPNHppfFEhbWvMBxAEnthXdjquzZfZfcP7X3od5Pd2mHhCEno7d1UysAmtgXYAG98mPoD3bogKKkU65Zb8",
  "key6": "4PETcNNNuYe1mdB6HTh7bqf8XC3QzkXqFvBCvQ117ehPbDDdUNAZKEktQtT9XtFwZBDDAbeyANzddScunASZGqFw",
  "key7": "3nqe2PVpcx6cnqW4pYrE5uAd9bVFUpm73ozVriHnFAS1vVC5YaAZGnEXYrYHUQZwG4UPS4GznjmFDPPS6NCssaE7",
  "key8": "3dSKuN7UUyzBsJZL3MpmK4ZYHFPnXCJZqFFPzxq8MJeo8zUnzhdXBroN8dMmuZ6H7iQ9Ei95QxAFkoReydYcwSUJ",
  "key9": "3Nrm5st4rNd5vUTXqnGYmD8FTcPwY61mjkfnUqQF3sradL7G2x6tZ8BR1xskydJGRBCm5gghVMLFm1igr9MaQGWm",
  "key10": "5FGWmcYqSSzMtdcmi9PBX8B7bQrTqg7rjGdvm93KjDfiEWP9EqjteKoH57AYV9hB95a3mWzW2VgzMV4G4Zzb3pzv",
  "key11": "4MZ2dsC2V1nSudSE6QpvsA5CxUiDQkhivTaLw3iqC4WSFPivcRLdajGepMsTQoZ2VWSHU55Tp8419caUp5J8HDyX",
  "key12": "59wMaFTACVfSRYAXjFEekMKXnG4hVCuKpXcXMY4pXfjqz8hYSB6p2jhWJDc8eaMumxnBYsDecytmboxuCDZvGm8H",
  "key13": "LkLDS43AEnnG6ir8so2Rd6ThR6cw9TcFFydApe46BTn39FvuM7CLdjvN9mKgG9gN1ciZ9uSj2FoF4ufxBf2YjVG",
  "key14": "Qr4gEd7JmUPTfAnpyckaHEktm5GjB9BxTRrD72NKuYZ35s96sfynvFBgjHy5DMeBLg3dJa5RgEmdiceN4KFtoX1",
  "key15": "3mCg4MaHzBDmbsxjqFo22bDvzafAysuwCU3L25XNZiiEDvFZMFr8DFWKK1J3o6PscKWKukqrWAxZ4LFM1Gv88mNW",
  "key16": "4vmoVpJmmshGtxLzGJBmhhzfv2KHipzpgiDodGEQeni6Ke4spTBAT151b7VWtpfvZGqfnM5xAJAYrS1mHoGQwv44",
  "key17": "Z2tt9x2VQ7auSB5B6J7WKFBRudCVWxKn5JqdM4a5xqWFb6i7GVQgh6TrJi2qesnYPqGwrnXwSRCMAWHHpAKWdAc",
  "key18": "DUW31uaKzKyi63YaFe5XEKXpHXUj6iNw7mWNZQNUEYt8kBeRV9pdWfHE5rE444TEyDxDL8ehaJA1oAYRnf43T4C",
  "key19": "XtFpGtzt7pRfggKUzmiWcnpCHmk6e9sJBtAgbaGf9uxnwJz1cdtR2ZBZqXRmKpC9VJTnTdc4hetzdxBBh7fNfeE",
  "key20": "3SgEuWBeREunDpEjDnEe1FvcDYWHuSATnkCBeMQEoDgqQh47JzTf7CEgw8JDQ6bLiWgY2wUrP11HLCf5JeP6Qw7X",
  "key21": "67SAaND3CP8uWQhC6vryky5FDTAaZz9jbJnM3925jJnwQR6PNeNRCmPix6EFnmQyDeYu6msRpgBZVRYCxZJd4svy",
  "key22": "4DEYL4tiLscNTPxXbQSLaCCodgmWgZLuuB2xoZWRgw4WPqiKPSya74pyHF36snfk2YU7ELd4fJXyZezdFhDLwZg8",
  "key23": "MHUv1A8aWizvhvANtLNzwLAUcimqb1VygfkaVTBUJdJFrh9YBku1svXnmgCPw8RftKou66LMwcw6d7DSswtSVK4",
  "key24": "2qaMSyBFtBoB5pwfqBygy2QsEBjhj1jRz3APDgLST3sZmg6jxxNzxZhwcfYv5R6eezYbBtrV7N7jPdY5NEherteM",
  "key25": "4Gtt6P47rtroarrBuzguenBFuhyTrQFnjSToncrWyYTw5uTpgjq21LKrdf6bMqmhckVnKmk4cRGinQcT7s3929vF",
  "key26": "qxyFx26oXeDLGmRNeSJCvK3yv6a8ciQp25ZeJ4WRCWGZATqH38ahzkJrUzLfNsfAC2G52m9fFbPPVdScMqmUtCi",
  "key27": "ErnSKGRD9VyYES28Juv295F2De93rEY61BbfFd9uEt7HQLLbjTMti4MxvGg9MFqLuzfRggcX3SsBozcApGxHyNp",
  "key28": "3c5Dhp1mT2JFJDR7sJS6g2mHUdfvcDq3AoohveprzGQXFnUTnkwEp7STFnpo8yczm2wocLDvn1pyXTo6KdTNy9xn",
  "key29": "2rLtyNL9gQBsHhmbVKEXNzmFLVKkjhRjbsh3kEh99gbPjZQbj3WoSjudJemhZJ9EfuP37xa8z3Km8qRbrfcVubhc",
  "key30": "4dziqZBkCJHBzDam6LAR8iYP9NgfJtJ2w4P5KpdciLox7fr24i3b5THZdCYgoNUt3N9MKZWLbLQUBq8J4wnH46mX",
  "key31": "5onecFEiPH3AdLhFEdeHJcVfgKDaK8wMUThVJCPpkN9jQvbR8CwnnJ9VgyN4DkZkPnN93NqWEW77gbJ2NnL7nm9L",
  "key32": "2Wc8FypV78XxT51wB6oqhHmRBHqfeEtwNstkjapL1REyhXzJ2wUDVWZdgR9o7rBQaRaqw2fnj9kdP4C6CLX7oLmx",
  "key33": "9bimKuUD6Mtdvby2ETFwVsvqwy9yhRz6q6zdVtwwvKkzs8PenfPkw2kfPzUpfdsBgU6xYKk9m3DktY9C8cZtL4i",
  "key34": "5XXXBo75JmynrNc1aGZXg5k6MzSTrbdiuVJgM3GjZHLVL7uPKfNZboBWBfLdu1XtkC4ZMyh9hoqaAhVvWsREEMs3",
  "key35": "3ieQVzsSsaNhYWZ5xtsq583BgeUkbC9SeovZDJpDCaJbhsURB7TqVq4X123aqGbDyMZups2kDrQZYqN13Wh4VQWQ",
  "key36": "4BZKKNyKbPESQpchWwEFBHxU535Bq4rJEWjxdFsRvvPivrSrvZfUoUhftUmMJVzEMFs3EBRQgtGWVs8mJXcvrRbr",
  "key37": "62A1EfbjLLEMzVX89RRkroPnznRd3W7SqyVFrbugAoLsF9s7jBcgZquYGRB3WFTrodh8p5nrEu9Dop3wPC2gEpnK",
  "key38": "3ey7rd5hLC3t7Kyiw8MEyeUnQGE4V5XVUtGjPqetpAx4Wgvegn53VWYkiPEUExoAWPsXM2BmaSXQYEohJzNqChQ8",
  "key39": "5fHogbxiMW7TFoW4YRieSrizo4cNWBV9gbr6h4KWNnSTuQnpgpzzh47PjoWJxFMr64iRVx4gjg1Ft1K9pvkbqspP",
  "key40": "G59fdZGGxwguSoqb2xpGTrqjJEaQnjqwUht4sLBpR54T9M5Ag5CMcRsRgdv1THmYjLK6zpgZLV8t8nPhjzuYgDK",
  "key41": "3m85QZ9Jnh5u9b57K5zYRR8VpmXHF9nSF6KMKTJaNxhHKbcpPEaAdMyhE3zqMoKFP8XettSaKMZYBkmdc4bpZRzG",
  "key42": "2L6LXDpEZ3aaMLBSXF9Mz2EnJMpQsikGkVt4L8WKTkf7b4dLzEnKTderqccm4T5zefYZ9Gvft59cnhLm1vV7Fbp",
  "key43": "3TR9Cm7uJs8bGjsDjrK2uZwHP95GSHanNLLmiHtgMnFUm8jKnQ3oXD6WgBdo7QQTWYXEKh2pmSNtBKKsy8FmNQGz"
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
