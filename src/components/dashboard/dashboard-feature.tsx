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
    "B7mN5np1oqGj2HxvEUtXUKaUG7rd5fM1KVWE6onPTScePN9HZ1SzNggyrvnpxkEHhunpSFuuaj1etjV6gRaNRFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44xpJEzEmbabLmmcazSfvnV2WGBWfN35CcxSmW1U6cCqnGDjvUw6QMAh784fXYprSYsLwMepowJv98CHRg2QhkWE",
  "key1": "4K3Q6zf7qqkKew6KgQ13yZfhehHvn58BWDeNmnCgM1EnMYBftaRKaTKGPpUUTTTW4GMNmkScAfkA2cVXubLusat",
  "key2": "3G8RkmUVX8VAzModmcqRF3ujz58Z7B8k9aPPXHRaLrVGTkFBAtkPR1PcPL6qEmwAb5vyMnBEQ4ReW9JDXWiE4CjN",
  "key3": "4u8kR7jxNb5rKaYkbDFyoCzpNjAdYFLshtpoRaTbLeyvmgGiCgshQrz9ZvvJaqZqdsCFvktBnAm1o58u9jhwSLjX",
  "key4": "MjjkyJFnWYdKjW9xijqBc45ekcfjhYLz6bGwAvBqhWbeAD5XoJ98ttH9YBF96kGXFqVgZupv1DnUv4Lb3mhf2qx",
  "key5": "5w1TDjgvGArDV5gcrcYYycBj256r789i4LyXTDdEhAxiFWc9Z59JBkBLkNm7gbGqMphKQHBv3DQUMc4j9ntfV4TN",
  "key6": "3XakHsEfCgjWKCuc2yXEvgoLnG79KyirkchQTMCuDnjN5outvK1GWBgqLzpbNG3XnqMXi29K7TBWJHwggYbt5HRx",
  "key7": "5wkHnDzpGpu9sWmGTXmRrjdT2eKJAueAE19CaoV3aDMUsf7p9Gw6TR4BCxxjLZXGUEz9CwiRbwx1W5EjoKeXa4eA",
  "key8": "3KshYjihh9aguL6tVvFm3wF1A4hQpv7w3WnRVzV8KXAXZZxgmRyd39Pwk4PsVBhXd95wDCRteWZHbu6E4FyVeyPt",
  "key9": "2AbKpDZzcY641S1t9PnMWRvBMUU5StCr2Bcjt6LQCwgPrei5x7ua5f8WSeupJwhTtgfnVQ49xCJy4vLm8MsEQrrg",
  "key10": "KMayAQc5P7fJ6GYVqhawR9hECeRN5npga5h53jL2RHiDnGPti3HUNhNtXcK3cqaBpFMEGSvJAdXve3J11bcJWkA",
  "key11": "2dACBHVKSAABXaXE7ieTEvpjoNYPbYNUJFy5He7Ph7GFBm1EDqqBHPsF31gGDt7n7ZyYZULQronewr87M8NwVvdW",
  "key12": "5U8PJvnTrr5xza5arEjsGxXrDamcvvJfEwNKDRnmgReRQ3nopBHgtpkHMmqtLqys6FEiXiEsapfHUzdUQgP8yN7s",
  "key13": "2Kr6faa1FLaKMtm6pjujWq9ngcjjWVG4kTWXijzFPstwTzffzaiXop73LFFz9V48WCEyQqPavajgCoLdEzj3ZMRK",
  "key14": "5S13Ddpw7fhUC69ShFDUvTNiGxmmRPWrYX7xjrAij1fBxf1LKLKZyJ2AkrVmPETc4W8MYcz8yGamr5NX5f3rXcRk",
  "key15": "3TZmU7w8ynxPZfDuQS6eqSx4YDohfkRRrUiKKFTvgEEo8eoxdfp1n9vQdgi4hgWFA3qWY8gP7xnfGsF2ZrrPU93M",
  "key16": "4wy5Ap8e7SsTRhPq7ruapMcBw5oQKvFUDFm6Rr9ZQ7nK5PZG7HyTQBSFTf4D6XW25WJC8fnHboTG6KG4MoX8YaF9",
  "key17": "52d8fiKaVKJ72JC5ssYutoC87zesAzoovKjeZ85WcDN72bcZYxKPPE1QFjFjhoM4dKN2EGYS8z6QZMG3k95eiTGM",
  "key18": "5CJvpwczN6duYo7Z7PP3ES1fVCe6Wouzqe7y3VaTpLcE1RV2XthYDiwFoDcGYDrroZEYCPc2JCBqE3xiYssn7U6m",
  "key19": "UU4KXUcqaf6ksk4z7tQxhQNYfXxtStp9nNLJNqQF9hyjG7RxhhLmuWVGCCkQcygqPLM1brBc4te8bwiWFXZbyea",
  "key20": "4EEVgNrsMbjCmR15XEQQCxQaXmArp3rPk7Abfo3K5rqpz928Y79YwrobbEeUiU9trjwMwXGsnpB7YctB619PL9tB",
  "key21": "4JvnHJRYN5eG6Zjy4KhywWAqj1uyoVK9NX4mMjPqZZYeyZJdZw9AvbUWCinpYhkoZaU4HdfFhxh6UCc5kctge4Ro",
  "key22": "2p5BBJ5gCJ2uKFxtj6Gt2R867hY2V3hRaErrp4udqvLkdWp8HeY1n41uDvZ36cpNSzRhrnxeeYXHwviaDoQHz72R",
  "key23": "3Ca8rqT996Db5vTHb8jYEK4bPGPL64YMFz7qJYKR6Ag3yXRi5MKr8TetyNZEye3SqPFjXSLJ8jKd5p9x9r5nkLBo",
  "key24": "29AFdqyQ4HUtcscTE4WY1nz4fCxhuGCWRkrGYTYBhWa1CcyRz8b7SmipsfBZGQ4nTWZySudcTGSBqVbwcwDHLLKP",
  "key25": "2WzJatXMNGVUnQFxRtfo1UWgJATCDncRaY7d22rw9r4fJhH6vbCgcv5Cs8iKVfHZowpccZRSTRPe6xgfg69BvwSH",
  "key26": "5sM967s7ogaV74MFQQRzRt6thtXG9MSN7xXt1FjD1iBU4th5oqL51yStuBigAwXrAojZgpva24Eb1P8DvMzPVWbK",
  "key27": "uxxUk9rA4QWyKoafD7b6hJRGHKdgMGcc1GHxHyCMP8cNJWEHapLnCWEVcoFQeoTjZR63Jv5YYvtxA1dZGS2F9QQ",
  "key28": "4heoEKJNkogBKugDuqvMQB8t7HYz9nCdEoGCZqqqXko8J6ToqpWmbVPWPG31R7716iggiz7ZVE9XGUmqgvkNGg4f",
  "key29": "2isz1fSxqWQcp9ZsNj6WEXpy9ndhJmscESoNdg76MmokxHL5Ay9TbAXF3fztD5Q1XVGWKUfrWhh8rnUiQPJfEPHe",
  "key30": "2DHq6D63Ke2wGvCdDvZ49P7n5X8LftZpZcEsyFK9qNThnpsN7chNXw1Fx4ZZQKNVAHm2TQLTu7qdU32nwHkf3AZz",
  "key31": "55V2hYPZRcJmrtQEYZYK67HXsBf3pJKwbUssxn9BYxWD2P13Xi2AyGjd4R6NQs7uK9H2g25sMTGAVXCCx8JncPT5",
  "key32": "4VDDL3ZUyNmowujhwfcTkfVSpgzRy5nWxPEtjxWBvZaMaRh1Qowx3awotPDeaq3gvpAzMZuujiuoFHkkswWGsUdz",
  "key33": "7MBdTBMusMwkMD12rCWsqw7WHp5cVTx7RBRDEq4c73SQkntihAN8JMW7Lh1tBxxw8Exn1vYFUybZNSSNUBLB9xF",
  "key34": "52JbguDPw1VjNzJDNCgrKu2ZvwUijcbjUCHX7XP4ajmmXuLH4zrhn5xsjhtM7V5JFYoZGTXXKtac2sKigPbShnFF",
  "key35": "2xM1rSJgzZ4ZAHdZfBeJ9ea5LxK1VzoQzVvt5p3guVEdSSwuMnJJmAtXVFc5qau6NcrouJSD8F7YnaQXcpozfS63",
  "key36": "3bthDtYq1qupRuaksq9WQ6QP4u6pEAaFeXVRkGDcRR7GWQBrfU177QqH1vBZj9RDMd95kqfTa2wivsyfURx4g3G8",
  "key37": "4BGGampK3jERdNKt9osK8qadCjn2Hfh4iddkb8xgxzc7pBWL8urB4N8cTLhEFr4cHfT7RMAjYqqBTdP3bdvFJ1fB"
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
