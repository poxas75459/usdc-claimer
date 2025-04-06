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
    "mXBwB7NMC2C62tUdUmhb2rM1bNvjhvhNY2fQ8BCSpriEj7VbueVFN9s2b8hDtb5qXvTY4ip5UdiUuRNgzFLj9Vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVUHojSTiZD6ovestWRKaG7jz5u3MaY8XU4gVHvR27GKW9WGQGwLCbyubRy199wQAW7CRZXSwdvPpzP4SvAPTFY",
  "key1": "V91jUq1gHau47A1oF8tKihq4up2qHsb3ibFH7a358QX24saEnvoAvgmakewsHV8vCU6eWTLBWqhKdyrDr62i4Pi",
  "key2": "mKjXDs3zsieo2JodEdWycVa8RYW2daw6ohd83m6JskdT7ywm33joyJVUnaCfpozJn3LFsUtq8nJdfPuCzfoGE83",
  "key3": "3hCt6n9LhAPyconPwdui62wNAKGzmzidg56AtUKAn9qeCa4TJb2po6TWmaiqV8jaeJsKuyi9gm1rK4kRkhsAaYVz",
  "key4": "4ad88zZTXHx63i7rfSSbLyPe33toYjWK9JfZf7ptHgvK8fw7pyYjfMdsuMM7mEPWdJjpUoA1TLcu5SnW5L2hRYkV",
  "key5": "4h4s4Mmzvn95JXVgFuYZMwVmMZxDUCvFd1Zw2zLRE8aVocURZsyTpJnxvtjkpvqjzAEaH3C89k4uGA516ZkpqJY2",
  "key6": "4bw8mtqNKk7AdeyvypXKVA7sLktqTWX16XJtaZyFhDruvpYSiGFCpAQ4242aqhaLaaBNkmnwtcGUnYAPdzmhsw7J",
  "key7": "5zMGgpHTrMCUBtn574rrkfwJaZtGPJukiRV7AvHmqawjAFc66CSCknhdCVH6Ho9Enyuko51zsjaeHiZJCGcTg4zM",
  "key8": "5kTvUkhNJivV4Ya9QHxskWchwB2Eicy7nxxbPpgWkeeHRgRgtvySbnDSYXAuV4H6Zdq4gsv8dK5onDv9T3v7o9gd",
  "key9": "2G8VbsLf8izrmVyhGNREU8hZaFKPk23svGet8Y4hSg4XrHrdhvH49iNm3urHgvvV9zfarETTEjxFvAzRYfjqWTG6",
  "key10": "3TDfzbLWVdpTeatoFKQiaQif84p5h4wmHYQZ3SFaBaHPFAAAEvLBTmcwEKtSamTQCRqumcQdVJzMbfLy9r1hkFiK",
  "key11": "3w4aQCpqWot67RCWCk8BMFHJsybRG391x5CwerQtxyjZw78RYTkkEWRZCLMyj9QYJdc6SB6uMxuMwyxiPqkivREo",
  "key12": "2caKvtXjf5EYx2FtXF8TuNtpohaMkT27MMKQrbegFJsKJbWct9hXVf5VSs2aMQxru8EBrSgwhFWhunbXUZpuvspQ",
  "key13": "3vBJtbhAzmhM5vwD8qfiP6kobmvwZ9ct3NZ8PUhDBYReqbobGyyLf44k1hb3unwcwwZe6ns1KA2h6nnsAJ4ijsic",
  "key14": "3u8vTuR5U8Q5DAkWgvn4Pmp1vdGqQrQd7CcDxnFmQBE8q8Re785JNzgXjwhaUnnggiEZrxfQrVZuTqfBN2TRSUDU",
  "key15": "3rqyA22mpePwaGHePRhpj8DUVs78no47AsGwYZ3yAe5qNEAVxEWjTvfvdow1bE7xddkgyFzo9qg5m22xYkGeTPR2",
  "key16": "BKcBFnYtj1ZdVvim4tcUKbQyvrhChDsiJGZRSxtRqjjFtS4NE3R2ZvtJfzPKm14wNhzmeFz8Ncz1xncCZJ4JBvv",
  "key17": "4Xgo5o7H3Gq9oP8akAwKr7VN1xz6Va75Pvz3H6dwun5U5SmbWNLRnKeQWLUn4Nm3DovyQtDBgasF5FcxFeN3fBB2",
  "key18": "4UzZjozkUAmivUgQCwdM2MbUT8nLHG1WsS9YbcNoQTYYULuS6H4ovwXRd8KXwwgNitQxMTsozh1FysopXm17YqbH",
  "key19": "WfQjcKwtogHy3DHwA5nyFHqaTKFVcWxuwtpLpNoZDAeZVfKstncYSaT7aheHme6TZJqyayLE4Weoqjkqp7scyF9",
  "key20": "5EHKcVsUCT8pLDGm2f4XXFTnkjyvpCewdiX2vsTEmjgm2gBENDxGuja1U351nUUXU6mTNRj9bk3AaENa1D7RuWax",
  "key21": "4nQkvBncxiwUVza82tJLfnHDPmyhDckbP3F3MARbaCVy8ErDhDVg4heCjXmJJHFUCvRWCCxxT4PbNqV4DgqQjTkD",
  "key22": "49yXfyhKzbuW535L3Dn5XXfpHnVh84dWXBXTt3f7dvUgqGjXs1XwdNFoqSERAgKwvtNFRPThm3e4CCoxHdpGViLp",
  "key23": "qayjQWCo3TQaXC92YF9CjcPfZsN5Puya1sVYcGRRadDE3gRi3UDBNJfwDUXXxXQ18tS31qsgRHVj2DDHJf5e2Lz",
  "key24": "63UeLuzVkciPY33EV6iuX3LoLXtJU9ocfKDrKa3kpAn2XK4uqzVbdYQG3ERCE4uMwCLc4ZT8571AR4XAU9rAEBYv",
  "key25": "3b48DtGA7fGt1GdK9XGRL5bJUbherccNjWnjNFRbL1dRUHwrzjapAkmCq8R4k6VL5MTtdnLMS2YizpSgrMrmTPEA",
  "key26": "4mFpBdjTfBQnY5ceEScbjc3mYXNt6ET2BnqvcMyTkTpbsQJLVtEEmgx6YDcaLfPJs4YreaHKoYW2VNpFZQyu7J5Z",
  "key27": "5W9RcfgTJDPzkSSNkyXxj1QjqXpWnfsWGfZE7xbqXvTwdL2usk1gZr39z3ndt5uAxxSNaWjp26cb139iu7Y7xPdL",
  "key28": "2FtRvbKte1qGrJQoKYgrFai1XoR7UfGnoWhPcatRSKNPmqNaPuEnyDtYLiszaS9fZTmzkbhe6CmRB6Kw1NfsMG9d",
  "key29": "2hwRZ5GzZPRjK1dSr8oBEmxT7NaGN2BNnKQXgYhYB6JSeneD6aWSwy4jM53sXumgLfejLoNRMvoP6NX8NSAeDoTP",
  "key30": "2VNHr9H8e7WSw6mzd9VDEAPMG8KBnr8CLFEJ8YGhS5yyw9fAbZFwheCJrEoRY7D4i3beVg74eQtszKiaM6Ah4EzC",
  "key31": "2ce5TMA7BTTGaGSH96NnCCLijfP5uTx9WfBB4UPYyu1x9RDSaHr4MRADCtq9L9qk4qwdYdpNfYKzZNHJ1XEdXKyD",
  "key32": "4pzgfU83PmedrQQ2sNdStEjEBDhUekqLS4zoj4hZDsSMkynFsEfRPGVYYRcz9uJbEVZXXQfNKH2wDuMUWzUypyGz",
  "key33": "3c8Y7wvXMD5GEP3t54a3aFqNYDEcPfc3w9pbnem574P1iNyr89oAGmzMAq6TvdHMopviLJQ4V8dqNNoPiNNvDfvU",
  "key34": "YLbTPwmn2isMGXxdhAKvtJHyXZaKYBVvMWvLahCqN79hnwknp5f84SpiDi4ECWSCFPNEWEXuKwmZeiSLP5zAeio",
  "key35": "3wWbpnQ9xKSTBpyMjQcaokccjHgy2wRLLawZegohWyd9VyPq5BTowkrhSx8BmAAeaPb14yLzsJJ56iPjrKxg5Y92",
  "key36": "JnB1T1kEpFZ2D78jcS4ecam14DKK9vBqgs7W7yVenCVWAoWmcBJgBAenqKWCXrHzb39i1zBub9wBNEeFNcnaArJ",
  "key37": "MYYpqdgkyCWZSrVpKVyNXBYW7xpkH2NZ2mnAASeDemcXukFKALR2qimzqpRR6rdUKEkuvc3bgtspdFNyXYgEgc1",
  "key38": "37HG3CAEemc74J92xpLfjAX6uQyvdVWCw2JUFM4336P3htxu6cSo4dW1tHHezYKhca3it2Fvi13a7x3fgaQpT7Ys",
  "key39": "3DNMRioByPpJj9mCN1L6TgdhJdegfbeMonpYfx96WmzrACp1kLwPd3kHf9eMJJeyjsvy99qkVf6KYBHf7kR7G3F7",
  "key40": "3yn7T7fWQdbvw7HdgPUw3NRCkqBqSJrKjTcG8PYCsjNh395Ewf5NBaXnxR4An8xUwb1F9kaRBCCYQZrdG9q7JPoB",
  "key41": "4SrJND6oaJ3DUQZSGBF2XxS87KhzhXw7SxSaHckaUFTJSJREnCej1nEZ4xB6HpSCTZ7pffSfBuSFjiM1qnKZ8sD1",
  "key42": "36G1DF27kXNzUUtRF57t1Yc7mQVBbSwPfg22tg6uEMAHYJr4cwMjpJ7icdkiUFADpTuNb5u9SL64eHgQBXVd9XB",
  "key43": "62bCDnaC74okk1SjCYLSSBhVN2wgywb3pW1cRT1Cje6XDLmTf6XWicBHJTToJGqUdqzBzRwkkxefz84kh5rQxCmt"
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
