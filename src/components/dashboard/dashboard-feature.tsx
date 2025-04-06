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
    "3C7zsQoxSj7vPsdgy1r17edtEpz7NE3hoVUuENQbxWWqSH148bMRikfw3cJn1aS8rmYDq88ubCwEez48CZrQ1cb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X3bTKPEngcZMbtWvHpRbLRTXnwfh5j9HA55Uy6F33VwZiikMVnaytREiCFrntU1Edz8FvyVP6NxmLut95osdVcZ",
  "key1": "4JCobXc2WKs1mhPbxjLoXkyLLTQHVM6HengQJfjjSL16bm5hJFq9pcCKSmHfAuLbbiCqwMZ32oMLXA7vtvttkgf1",
  "key2": "2ANXNQErLmcKXLtXAu6VDvE8AQjgKnPw5jeV6pWCe2xCEUTkzNGA4bXQW7XntCd9DwzaVtD362stu7fBRUsdc7cR",
  "key3": "xWsmZRtCSGTwAojzHM6Jvhe7qyFqBC3jAfQxhX9hAZ4nm5TG9WJPXVrGSpWVcHcGYhGGTXKLh5zFPtsNmGUnB9p",
  "key4": "4NGwgpe27hJSh8QdjjLaKm4BBr6p3uY5apFVGBqBUx3nWphdBBCMewLYiWYbJuAB3bJUAK3yvHQgkdBkHNtzYKiE",
  "key5": "5ugkq8K57ToXTnULwaPNbXujduePUDCZHdEfdNty8VFgpCDVzaV7UhoB31DH1HAgznwv8uPeop1wGC4wDJ61MrF5",
  "key6": "3pN48JEgqV6QFERjTe2f7SmujNuepDmkVPhA2xsaNztkrofDugGvVvjBR1FKqU4y7kHh8UxXh4KW81siZn6iBFCZ",
  "key7": "5eiLXWzhMh2LDxx74ra6fUBko2T85CEhpKF4xewKDahXaxKPGy8bbwcAQ7dGnUUc9oeEavY45ptR9pup3LHFUhht",
  "key8": "4HeTwn3S142Bndc5HD3i2nREBUBMMV4HEyM3CUb81XSPmofbzRvGwe1vCF89MwpjuA6i6MoaeRK65tuJS7Q6Mrmp",
  "key9": "4uUNUq29MtmNadPGYwGThvFTjLpBcv2FzzyU7ifByjk7FYVBnokUo3nfUbgLsRuwP7cBz7ror6Jvc8hFHww8Ec71",
  "key10": "5WgJK8TH4BStEBDPXi183eHhQXLziTmd5a16rXFz8crZ14i3QzPpb8wgf93TzJWdVZNwf6t5ADw65uWiBV6yiNrM",
  "key11": "23vrsMXkrsYH9yuTLqA4mX3SXaARZoacmg3feXbPXEio8HhZ2J7Y1LxESQLU7Wye9hWq3PHgWDFDfhr6MYX2Grne",
  "key12": "2bE31aqneQ8nkSSbmk3Dhx7V3vAnhM3KJ7JfLMSSpPFkRYJXMWPPd2sEz2YREygbz1YPkucCePVQCoGCqtPf9dTP",
  "key13": "a4ovTgpR6acm6Pw4b8g377JqKngNwF6Wht8jRfNSLsCCDegfQzPFK1Zzu7ShrR4WVHHXQhnST3SRk9R3u43rWUL",
  "key14": "4XWi5mS2DaRbFjfDKZMzQbaWAwhRKw8BW9ErEDvRsqJhERG2sKnbhbeUPcEnbFqxGSf4nktRXTXLmypDpeKC2NTE",
  "key15": "VVNsfaN4bcDeC6XUexFdNHyPA4MX62tzUTVXGkQcEcXn4QHzVNbt6iBkNgxDwULz5qT71rHcgbM9k6kJdeq2zy3",
  "key16": "332QpR9UX7DGu3K9XZGdqQ5EDpqNN8YXCnVJ7VkZh1nNdDzk43vcnk7c4wrWX2gW1n318iT6DD8Cu1JModHdBfTi",
  "key17": "5d2BmfmFZJnZmQDAVbwtvbb8oQWoPQHfXfxCH2J58gpFF3T2r7TVozXJbXWqXsy2U9JG13BQ9j9VFWY2zLX94SpE",
  "key18": "23F6qPpQtam8xxaLBk23o68C5DzcUiAumhx6zoUfnaRrZiU1Pgr5asM5AbgX9khaCgvaGwctUCURe3Td8gdJg5Ce",
  "key19": "5eTkwj2nWaBnWGcVPHf6EfsPTetAiaki4EVGfKYjUmr74kDZjVLtYGHdKcQszrz917LBvymtLnRQTiLKGAhMkr8A",
  "key20": "4NjdyTWp4syuAoSeNxq7r6Ag6Z8rrie5JWNUkoCrGa51Hz3oKJM3sfDoS4gmsFDRFc5d9rh9tS5gZWRiGxnnAiQA",
  "key21": "4YYZtA4eAUVsFqbs2KNLHt2eMPayCtcTvsrywKjhXCY9bFtUhapyi5QgTgz5Y6xszJmaTrz4o8PyRPgAgSKCnYbf",
  "key22": "51B614W96qBujsrGB6cdN7fTksTGpZEDgEkia39vRKAcHJD9ZbzwvsPYDEpuuZe11q9iPjRTSfypERBRiTfebSJm",
  "key23": "2VNBd8m7ReQErMGM6JswSqYYvBxHnzGvmZaFSZxSmdEeYNxNbNZgtNnvPLn81rq9cSQ3eSFPMeTMRCAc3zisTcre",
  "key24": "45nK3rEXy5zEJX2G27WnyKzaR9CKwbcY8t9i8BEFATzHAFdTuryorPS2kKEApHv36FuZwouF59J1Cjo4GAozkwC5",
  "key25": "5TWPcLF8XvZWTuZBZpzXRKfH6HrSDdYJEyTfNBmhWCZ8BtgvB2fB6iM4GJ2z5JYiw5XcYR7CtPiHJbtqSCvwfbJM",
  "key26": "3DYWCp7obxfoHcbSeAsh3jNx6YREZ24kSuZjipymoa8KzYTCA5ZrjYho7pswWKFMgVVj5kKGWQTzS4D6v4yYX2Za",
  "key27": "48sc2qXn29NxM3PXdKVQsKE1jimXoBLdScdEKJUWk7njrdN8VZGNhoBQUFrGpk85iApJJoKHNsT6ruWWRu277AoG",
  "key28": "44oyYfbyqX5aHttiJawpvqaPnssKzrTPJj9w8gnsudbQmm1JPV9gb3ksY9kWjrMPkdEXdzr9jA8M93zqw8DQpvx4",
  "key29": "2E1RpbebddigpjEkq6KwsjrVRXQAomGd9duHF3NdyrbMDAKjAQ24oJWvpUvypTPGKBXH2ZzkXeXfDGE6pfGs8DBu",
  "key30": "4iS3ssbovax5Q6fjktG79PW6WP1ysdXyJiRM7UvL8XtxjKSnB2yymhPVYLjNxtEnFQRUu3ktAXKbygZgsEJ6p8SE",
  "key31": "3sfJFBnxVpt8gq4QpK9eozo2gipK5jge1PYXXqaaCiYpuBdPXLB4rZ5UPTv5gsk57GRUpLJgYjraiPcvU4eY43PQ",
  "key32": "2AKsvLAHVkPXiqFadWLTevJs3vwwQq68gPbWqEuiFHf5SKf9BSG1QiT6fXhqReNX2iVQsj2T5jqVG7L16XsGr1vP",
  "key33": "5SpDdfzq8uJEP4TpRNGHiV9Cnvvc3kVGgG6U7hr6z1ngDum3uczEbM1SrG61jyJPM7ng9XRh1M3Q7BT5wRvkMYUz",
  "key34": "3CfhuJMVirQLQFZcskTCae9At9KPXP4x94JNrNH3tWS4gZh9UoGVZpJcwT4CE8Fq4bzuSqjuoHhBhfNSPPPSa7kB",
  "key35": "3e3ngvsKEJN7okxXQwtV2GtFxiJBgZ1eQwz5j91tz9XUzcDjQ6GSsixRSGbrRND64C91XEmKXXvmZYUCRUoBZuR2",
  "key36": "g38NQgvh8TzrfHD69J94huhQjvexFz9k2wC8gPvNwvdByLMayYjVCxh6QxSy7suXVzDC2kNwXM9sCy9G2Ym74BA",
  "key37": "32JZsz8ArNJwgrZGU3gD8P8g6kRd1wHFfxs9N5JiGnrSp2HMeMVzUfuAPJEUvBmheb1NznKFdnV2GaaGKXoTCYhX",
  "key38": "2nYUjMrJhfhmsWedohDoF16j7anQYHF82WtjctAoVRohnqfUWXnsG6szZE7hLzvr6r4y66hQMoLQzthLu34hpDun",
  "key39": "2cbjHE5E2itk79BiBLN61u7rgtnu6UkcA6GT8iuUXRy1Ft7aKg7SLBaukEcrHqNfUzcbHMUqXoDUn6tB5v4PbZsC"
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
