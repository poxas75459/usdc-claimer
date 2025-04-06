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
    "5rEKhy5qYGDDspdgVzKLi7bFzpWiv5mCbLY5cx66VmKhydsN6CMXfjczGBpGE5gMVjCvwd5M1HGXAFV8sVGxoXxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JegMRCt86g2gdMedEtyoKRWX313c7EDUCyCSMBXgtxFQa3v2ZA15MNKP8zcatti9wtvqFZL1t1jYq9miBqyUwQ5",
  "key1": "3CBuDrhF1sobj8SVbVmqMMagZToSJ5s8QavbSuKEkW2Lajs6p2UsxjuDfCRsKHt6se1E1orr9GCrV5xwY2vX744h",
  "key2": "5PQNHG8CJN9mP1VyuJWTCX3aoSos98yNeUeZzviYFDUUwCj337HzQBhmN6ScdTBDwU71c6HR8NksPdJTmVgiVrq7",
  "key3": "5RwWsV3ucsqmGQmrYBh3uXXtxcLk5aFvcJS1MqgR8scjtjfHeurmztr444F7ZSaavU7vrPTZF4NQxq9EQ1gctP4E",
  "key4": "3soPAxnabcZDL6dgHU7AuqWEh3L3tFYpNH2tXweBJuEikgu9cUSAS2zcjvAvWZmNVaT9RM3pz74saeNHKE52pQAJ",
  "key5": "tGotAwJM5fg978ctMfp8CLuN1o8FKkdd8eFTPCLURucsJQfAgtoJRkmZGzwvybCuATdaNxYtx8aN9MeNiVajiwt",
  "key6": "xh3cJvStYMcNcjyrH95fh9RvpmYHpWCaUwF2Db4rckFeHHdpbuznxJiCt3FKp456vx4B5PuAudnFpmjX1KDgofK",
  "key7": "3Vpthf2HW8XrunpmmSJaUzvwp9hdq1eXogLkkxtfGoMfC3KZQbxEjvtTtUDGkRT84muF97n5N9SNZUKbDawHJSgX",
  "key8": "3mCCiCrvuiGeUG7645PCPP8YvbKyKhnZiBtDvWyRCYCn8uTjWYYyVQgg8YxdxCUuByoAQ26m5q7ubq4VDY4WwTJC",
  "key9": "4ToLiyrYiNVhRAuYyTx3qyCGazwkk46dWTMAoJc6HtTupdGgjX98k5GzNJEyNQjxpSmNLguEpqk7x9QjbpLr2VTt",
  "key10": "3pEghTjKmeLGvPqGeeBu6KQeKDeFJRrRsXRafpveRMbvaU6TK6oNj56oQjHuBNjVpFowsmgDcnLWVDfWucKcAD9c",
  "key11": "5CkHr8zuQpCVbhNBXUvBF1Jqj5pU1nt4qwA5DKpBLwL2rnPkwJYP1GRSSunAF7bwitJU6gEDMdG758vGEeQoHMte",
  "key12": "4Ua2fQupt9yBu5tRSHfkF5X427ZxFuUx2DPmN6eLBWrjxgoScuPob7W9tBeqVEWBkkfcyB6NzQvLcvNUmLouU7sv",
  "key13": "5s8HapeK54A9DZ99BiCySUZDWuYF91eck2vfgTohrkNUyYTLnfCEjoDy5GmrhNKJtpV5trBD5YL9xFmLB6GfLsoh",
  "key14": "6WcLntwqJs3QKdhY6C73Qf4s4GBTCsWGxWoUUg1g6GEnzhMLUQcV8mTq7dj46NZnTivsXtPWcCdm7JnNUxuiH68",
  "key15": "hAvRhp5YhZFJu8SeqcCJYKQ15EQu4yWX527RmvUTohBUgHcJKCoSDJ1NwwRZvu6AUoCDuJuub4KvH7mB9Y7J8zk",
  "key16": "4DdeSgEYqKxnwrdMGwvY2yHK21aFnt2ty7L11WV65CoE9VnNgHgqDDjKatPzAgWVKBrVuDjjrdvE2Rvys1pRM7pd",
  "key17": "4Jh7X9PZVj9y7neUYU796tU4a9typSEwNVDQ4Dd2m11hA4jmAsYVk3C3Y9oib2LgnhXg8aNJvEth2tjNzPhr2AUL",
  "key18": "cfRHi3FwtvP1GP21ztidpoA47sQhbVyxWdYNPNweHMNTohzKqQZS6KznTsvYKdKgr3zfPqXbRR4qrNGXiJrEz9K",
  "key19": "CD3R2uiDR2RPmgcppx4jgTDnpXAcpWaXKk3SrYwhd3z2n1YCtt8r7xgHXpnZEBZKPdZGye3NXfFTXzPC5ozav1K",
  "key20": "4fHcUChh6QvZNWzFUEjAYaorYgoSSVVp7y93Z7xqNtTQiA4b5VgUBorhMgrVDTtGHy6y2g3a8jsRNQH8Hsb6EBCG",
  "key21": "2z5YNqVVvM5vr2Z9fC7n1AK7dENu1FA4HEeuj1UewU1oS5SkGwjFXmddkuMHuKEzmLedxUftgpZnMjAPybBjdsSW",
  "key22": "3dtK3YNsBHViq5fdXkBfkubSSMRLB6yiM8wfrqBoaAinsSjQg7qWiTAfmMd3cmRfdCFht6vs7yRQpSUYQyefw5af",
  "key23": "eFGCVLiRQ1GFkDSGpmmLJBoBXzevV1AyC2W8SWyky6tfnmFxZrK5YMmCbJCA9Hkog4ac1mseRKUacsFczgJY1ii",
  "key24": "2C4zeCMkF5Jcht9ueA9he45ygHD5GVcowFYXoUeon1X43LABe1nnDXyTJa19chqLxiEwS21Zr72884sGHnx8KFHb",
  "key25": "3dB4yNzmye8zYJXYjbA6dfPcV6Zk9pv3PMG2dnHyCMvwRdyadC2HVVwduukoSdxUMpq8pRw6tRYgDCjDwpUXqTmV",
  "key26": "2BtH1NTjUcdFeeisFnkXhe196SxbASjb4nJQEd5LPr2FuQsfkWJU5AymzgamyT9Tpv9y2QxZcEx9Dhf71wnYnG6o",
  "key27": "5chwVBv8wnyyDw8XTRaURNqCHJBeUTy2srJd1hpP815KtkdGdJicRkr2AGFivzfwcKE6SsrwDpjZYN1mrCvi2hmQ",
  "key28": "4SZ5XgeWK55q7ySftxPbQM1YxRn6XBTfwhztC7QHXB2bM9NcmtkYvcsC1z3w9931xDKVpXc9Xzs3Z4ChxPAP2RiL",
  "key29": "3SBhZxebZoa8spkTNQ8FnHbbAZA8Tdsitg9EtWpFQg6NsF4u6LhEKGZfDSvPYoxP4dhjDsi57sqA2MMxKBFFm8t7",
  "key30": "2uNvUZs9gnfsuh3XvyRiTHbPL2E74qJzH6LZtcc2ehAxVutTXtC6qu56TPgsg8MVcTDcg2dDpNT41HdgVZ7zuhBS",
  "key31": "5RU8yFosda3e4oUsTW43vQBSTvpNhXrDffvEhWYYfwkhHvzMbpwfkKV4gCWSBHrq2cggjz1QYRQDcSfzaC41j6bv",
  "key32": "4EtPHdzveyUpWGSFCgFkaoxuSdJF82FmuS13AQqrakwa2ZJkDPgZRikfLo8VE4LKNrRVpipoCNw8eE4NRAZuJbny",
  "key33": "5ef1rYp8K5z4vh9XGeg8ytmPrkze6EECSLwg2BfbQioTNZR2cYLEngq9g1AkkBmbjxopkJFd4jPo28Y7BSwAgRTs",
  "key34": "3KJwUFjx36bkQrnm1EUp1UguDVsAVfyosykaASLUKA5U4EE7XJ9i7NYWoqZY3y6M4Kj9u7Eibx7Yjd4RoB5D5ZHH",
  "key35": "5E9SCtoVDzZhNpywXK7qRC6XMRYhnv2yLzk4oFSTT8EYB3u29ocnWSbciKXAzVuFnpq3rkRRLWUyBgzboaLjevJF",
  "key36": "3YQni12hJhqQRpYafn7TDA1pEuxjq4Sf8ysCVF1fa1JuQvwSYWvFZf1LJwMf3pQ7uZTMgBceJQNYY89XfLiRdUBw",
  "key37": "XG3oSkHFuBkypdJ5QeY4kMAnmszyzUPjBmAK1Pb9fWYVAQxckgSqMHRKBCLy9h6kmrcTBQuXWudruMZKx3gTo8J",
  "key38": "4nQcHyZPXw4AzqPtqpchaS3xDsdhn7BKNB7Fq35Yjtp4hGmN64Kv6SKdvm4FhEfqnmov1mV8u6PhumTePDBrSmEv",
  "key39": "2VugRsb4SpvGAaFQE5J8gVMJe8vsoxgpfoB9JWrePtcWH6jqajTGQyFxVwzLSre6JbrXzpZfbgzzqVEh17Jvx2gz",
  "key40": "8rBQUYax7ntaBVVYsgpPhMCa9mZYZz52MEVMCCnnB94PVgCes5A1z6npZM8mLKrZ3NJ575zcS8so9QmkUG4u4L3",
  "key41": "5M25H6qZe2H4aBhyXdb5AvxEP5Shf8cbnc2Ty9AFmEuWSfH1XPTzH96kX898Za2joVmGx751h4t9sGKHNeYUVrf6",
  "key42": "3hZV89i4BuegoJdoBv3kjpdkBM8pKNQUHoEWKNqCR7YGig1umoeiEVr6F6JHCyKSFNC25RTEwTxPjxXZDcAhpcUi",
  "key43": "5HSFvAg8nyNv55RSDfdnRc3GUvAqxXCiz8pXrZeCKiNJ34dHDDmYKcmaDsXiyvesx6TMaTcuKEn5jHFhh2fNLr4n",
  "key44": "5vnLvcc4G6GEVyZrJVDjx86oy2rtC4xcNJ3DDJ5xLqnRSDH5P24CqqJTYoXJ6CmgTsDLcqsiyw43YLShaPJMRfro",
  "key45": "5cPLecpFjkd6wP6pqmekHzhRZsa6mGA7A42ckKw2pxFtYhVG8SE63z55FdBsoCMZiGx3EWLiyCLujtCjQbJ9SKmq",
  "key46": "61CpLLxGXLN1R5D2gP1oRve2eE1PvjuRKLSkF2BLDufRdvvsYse2iFombeMJNANtGSM9TRRRACnoVXBnhtA3DoCC"
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
