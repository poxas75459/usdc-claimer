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
    "2aweY7BWHkuqPaejeT6Psp3S7XhipCreiHhBV7vGaBRLKpApUWnrwnRs9JgDcTnHu4dsPwojapCVq6mCuBjcXF1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3LptNYP8uCbWBsriFegyAPSAavyWsSHCkH5F4iqUHBQor1Wv2ywXksZQoZ7mLJ76DUyeZWfQVCxsZvYxKdHTEF",
  "key1": "54UFHpAUBHM6htMUpPXRe2Ls8PAnAQMW3fq2nXMQyxdNnwZsWuMCgoapGXB4tRvtT8yg4HyckDfFaSEiTgpebLBo",
  "key2": "4QEkt1aqNg7swC2kxjAG6KHwDg1FmaWgY1RQegaC3N5TZDfRB54qBgR5itz3kgH3xfAZAxoNo93fPNJjxxfM5tok",
  "key3": "241kWvDfFDAJac9f1UqQ8qzPj944xuoZoktakF85oApvVYgq2JMe62X54qK9U9Yy3yVnaDv3uDskVugLHs8r3xQ6",
  "key4": "29kHq4zx7gCjeXnh75mvS1ZvszDayNdJef9fcVYoeUp3BeBWqks4KmZBrU8D9TWpfsYu35qB4f2EVFhVK15FJ6HG",
  "key5": "oogUoos2hbYkva3WYfukTGh5sjJ4juXasprg5jkGKpq8gTQxkSzQv7DqK74Enuxnc3RqpKsuV6hXJnGA2Wo4hW1",
  "key6": "yVH6VcBTPgBmxq5bJ9GT727iBECVWiYJFir42McQR6UhKm3XgpV55c8vPBhhDGN8WdXPko5gwBHofSdaGWT8uQZ",
  "key7": "2EftW5HY2PqvVmZaYtAhWR6xHk5izD7Vk1Z5GmZqW3huEXa4pHz1aG7fTo5gEYBT6wsuQdbgYNaWnRLqEh8sjcWZ",
  "key8": "4fQUWcrZDHiFXKnGzALGbgNLoZw2MUs7NyS3r4QuT3yGXshGXHmeJuGRnhcd734YpufqhvGCLrTBSxQqZNedddXZ",
  "key9": "5hjKUq96Rm39fumN6PvWUZPfYtU8TsT8R9smxD5Fbzh3EhAas35C2N1Ev71H3pb1iHcLWm6mPJsKUCLgaNoHxyk4",
  "key10": "kMyMA2XZG6BrtvhwW5fPHZn1ckGVuHyDptb9am8gmL4Pt79ZENAetL8Qnn3N3z32RpeMhm5Kda7yKmFrqnH8K4Q",
  "key11": "4Er6vJH1YZMvBSE12m8ajDVWtN6sBctGyWwhEvZ3UfKoLwZ8xvwAZCmktXZNP418quqyrDK9j6nG48wne9qyyyyJ",
  "key12": "5wsiuCFPUKjW7CQZW2L32kHCYuGaioS5HqEjMnnaDcnuC4V3xVtR8KzQcqUDu6i5sHcfiB2e388whbPbkZUTVur7",
  "key13": "5rtnKYGgiMDNJL8suVYD1qATfajQqkYu16zTDr3U925ojywdVE3Maz1bpp7oyTc46dURkXr8TpUmLmZMTgP8UjcH",
  "key14": "49mxYebRRJdTz7pyYhNvydHQeReYJosBVts3hxubPoWyEQE9jAdZZQsihcuzKbiKFVTxtXedJiQi8Lgzm9HLvNhh",
  "key15": "4WjokFpHX82zAUD9iUS7dhkXrwJS1WeRraCbU3qWsVAQUX7eK6ZBYuFcEPzQ6a9kHBsDUvaVcZWYLHfLB9vJbbkG",
  "key16": "4sUezBFuDMUp6smRn3H8mntsS3nhL2i8JddDJdZFgVFKg7bamXXkm8ooPeQBAcFNvm6FpCdWiGNhYBgu5v6Ckq2Y",
  "key17": "5i32kLEEM31myGwhZS6scbZJFqpZaZpWRgrQhJEZNqvmppVRWKdGoLmNxLqFjHXBrbjM8pyrcVpyRjtvGQD2P3JX",
  "key18": "N6EqbaTLX6ZafBdEE7BDJRnMpS8X1ULmmmTUrc4T6Rd9ZG914Uap9eH8R6CeeWudoDjqVydPmYL36k9UJEyTLEN",
  "key19": "E1qzPrywFcnvRds9UfwTyvW3ePuoEN2i55731fD4TPHKJX8ed6HqjTWP12eW2Mkux5FW3bDjbwSXAdmDF4kd7QM",
  "key20": "44nwmHD8xM8TCk2nVGndFfqv6ghwe9c3CCbZikVwn4YibBKuDddEtnFUzTsK7BEtxKh6wF6f6j2XXyCXRHsw2GzB",
  "key21": "35WdxmygsKJKCpicq9X14z4fQzkM9qKhnKFekwtChTuDekY1NguerwZFTJUULa8aB8hYsNkKkzEYVKcXNaKe1Z2V",
  "key22": "2XohshjdAthLZFBWYr8Xa7iMT2KZhcX7jhYBopk5EKWQY2rrRmVqi3ZmmohnBM88JDfHa42UM6x85msPwc5ZF9Mv",
  "key23": "5NiWukMdzgE98bA1EoHkjJYJJzxsYVkuYCRq2LTFadNMSbm2qN1bRnXn5yWrdhyMYUx5MrvMdvDaRVfL8F6fukFr",
  "key24": "3S1L81PUJpgQYFbgeTUX8b5q5LRWWhfkvKz2WrvdN4LDpApMbv8P5ToVKSj6gkqamNhX6bkSbwD5bcgoNGChWJuS",
  "key25": "4yvSmyGYctrGWdYcJQAF9t5PhrvHXNEMTMwJfuPq8HwAtXU2DKTNbHskZd1mepsL2Udm6wtUiyzeezZCVCmAEPV8",
  "key26": "aNktNgD1zSFmK2PgKpeLsPDATkke7qaSxCajizqq76mfAdtZ5tbRWGp9wtnhTgg3aEdWYttHDsLM3dHgi4kbBdk",
  "key27": "35HkqcJLErp5UTPAxkJQrNFV1wKXqnmiRt2fYLwY4BsN5SEgfSdPGht7yCmu7dDQxtko675Lepc8FXWeHhMc3y3Z",
  "key28": "59ZDtsB8XUYn6gdXJW4whfAR5VxzHAbuK7rjgCyhe2jUUgaTnzVQ8tEs6akcENkY8CFcPSjUbaL9G5ub5QTegREG",
  "key29": "4egBqabZzjtAA9iiKNxhMi12ch5NULa9C2U8QHrkLr7a2iEiDv8mNHQ6mBPJSUbN8yurhJDMQTUYbJhtTUHVzFXT",
  "key30": "4BSdhk8jNZsuJR3a8UjHvTi6ECtXxqYEnafnZvuHBWdBLqriDA3zzjpzRmJp2wijcoi4B4TpxdhMxnfvctNod5wB",
  "key31": "PiLZ2GAJaAATvbyGzARpRdBH3mykxU3SnMsedcWT6FApz6ET9tTtU1aVdv4AkocL2yCvfxxykkcTXF9APdE3af9",
  "key32": "zE4uViCP1ccRMRLs6FugxWBq6XfWLHTauJHDaadxztAiabnDKJ5V1Cce8aRLstRYtUAWjqwrnwNVZUo8TZ31WRV",
  "key33": "Sdi4SXBGYwXvte5xyHECDWeRwKhX1GEc5c4a9LiMMyLBp1A8kWc6bBGcBcsyLBeqPW5bJZNiFrEVZF4j5zPN8aJ",
  "key34": "5CJ9aqXzMFwZE53YNrPP8PkgD5utEKCAWZmgD5ndPFoT4xDEZbGrKd139tdYPd7Fi1iobYB5VwHcJMr3AFVpTtiL",
  "key35": "5HwJGRzjQa34Ld7xvThADx4KW49yqPUzAsXKpHXbB4AWRMK45WMYb7UXFqBmei7KEw2cvd3chQgGoY6zRp8tyW7z",
  "key36": "3Vce3q4KkB62PcfoJfhhAN2VUPfnSDuvuSriHqV6YH21FnQiH1vQ9y5Tyst8bC1nnbQGURJoXpAg1FTH3GEZ7QEe",
  "key37": "3G6P9vzjW3VgT7A2dShH3Jz9e73Bn3qN2wR2ZoUmxmbUciwQr31X5JJAL8qEzUJZEDfHzRS8RhXjwKHp7UkL7vB3",
  "key38": "2UDUXA3NeF37LUvT9cLyRvzkZeETqrjqgtZhwmrkJsa483JCcaVRQkanp7zEe6SYfzfjqjUPVXAVXYRYfwRPAW2R",
  "key39": "1d7jg1NwcxqMv8aBGeQyxDTNhkzfg3JmXE5mpqEVJYUsQU2Togc53nE9WzAsNsKuUZNBUEYGvDjSJiy8SRoE62Z",
  "key40": "5rHPvqUJzr1WfRGckTLiQY47uymRqjZdA7Wk1ayLPtiLg2nXsM6SKuMdDwyhN5SNFukJGjaXxJeJGLJ2VPiKrF8w",
  "key41": "3k6iLwa2TQJytiNqYymLmKYG3Uy4YyQdJeq8S98vSq3vxoFn2AYGwBQvbE9kAXxCah3LTokZeLvpLkC2JUnmp7b3",
  "key42": "3No45bRU8grL7sS6FdKFxFAyhtBfNobftSkQxjpGRQegRbh4wk66BfeHp79S8MHbUAMi1TdgnUu89W2V4sy34URp",
  "key43": "55goBqR2MmtgsZiz4tLMQFTtjEaHTLzzDdhZJ4X25Ava65JUYPpLY9Ktpg3EhimnfpMateebse2CB2ggq6nPkXdg",
  "key44": "29VffgGEg7DeSURR3yFGsCGeNrdEH6MLvpJLjuJdFStyw3BxcDQcXD7rV62YX6UQV5yR57MP77CgNJpfssQD6g3A"
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
