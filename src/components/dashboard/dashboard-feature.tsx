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
    "5oBtkx5H7KhwTZSoM33RDDqCrMZzyoUMFy6CxAZCV6SMzUGxG5YaX12HAVbvt8jd3oVVfFtUMtPD4V2MDdxSKXN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KVWH3XDrEJUnrAUscaDLUssj25bq4fAuA5vimnAxRhBMW1dXWCrBE6LJbkrVD4UGcrxBiXmFn9Qgkso87EiZ9o",
  "key1": "4c6k5FHp9iiNh3GvLzZHomznfGNJChFbp7kJbns4DZxjF8gM5u29mpAqsMuC9ydnAavk8KFbVAEFmyJ3AmeHF9so",
  "key2": "4mVKRwcuogonpZyrbr7PNUjwac95x3ryUmytb8dfvMAjR4V79FdXtBCrmQX24otLLFNxvuBjg56UUvXGkv4zD81i",
  "key3": "4boyYWRpEjj5ad9RAhpczy6knSvW49jc9QsBkA8fWtViJvEaKNggZbu7UbpM4EVbajPDbLN4mFvFsbUkH6kNdcvs",
  "key4": "4rkkh5sgKbuiCVHSRartsat3HChaQDZVFutbUtjVh76uyKKm36ySmhvzHuENtbW7FrYgLUEPeobz75idxZQPdveb",
  "key5": "3LRseTieuuGyjSA4c3vXH6SXmuBXK3jNdgM26qkF7LqMyuSMoAjrxw2hA9fCGZbBLgiNbS94HQHZ7yL5XdTZc3Lq",
  "key6": "4wQAquPcJrCn5dyCzKvLYJKi6Vx7ca7GPnZzk2suQHSBoPpwpz6Xfb56aY27uY94aBapNjVrdrZFvLcxQE3tufmB",
  "key7": "3Y89StFNERUmnV8guuPw2xVLW5CvYaKHS22nXCsApLhTXZ69euNs3WvDUwYmqwWvc9PkyFFJwK857RtorEoSw94T",
  "key8": "64foQgSRMWWP4aY6Hw61Q1vPZ1B23dnwC2b6zQZY9xjAw1vxWWapacnNJDH7YUMyN6hdD1FviWUpxE4ex15Ln7Mk",
  "key9": "3R8FErqbdPzFN3ZvNHYdMgmcs8PSpK14bCjhgNtxRTCfXkRM5AVFknVVrkEEqMm9UgVKYtYLAiG5FcxzgwfdNJmf",
  "key10": "5ueznDQNN7JbzQUwtP2tD2QcNxs3cjpJFFLNcYv1wRkRC1dQLEuXf1xH4VegfKj7zZVNknfr1QWbnrs7GNh7GPpR",
  "key11": "5idxXnYe7EhubSV5AxyUmz1FHLMcxGx27w4xFWFxFhYCwrztSLwXQTKU9YER6q8sNirs4oMMt7Ng7X5VV9zBT3a3",
  "key12": "5LR3P6YpZv8zTwZr1JchJMxBvkZqKkyAyvtjbpcQrJKUfxPqRuNrEz47QkVkVJNDmfP55uj6xa3bREQDvDLtAUVV",
  "key13": "5zXMUbppmRq5Lk9NPdkNRjuMq6nXBFyU6krBasWmY7FWVzaGr7mqvxfeMqm9dwwSZ457C2joBx8sgdx4AhUAZ38H",
  "key14": "5A7NNeD9sVYLEJtTmNyUk1NmZ6dDoYv5Tq6SNcyUvCY3L5PqjS3xx1dL6uTBDjCzgpnHCLY5oe7rUsnU97rrdvrF",
  "key15": "5FNPVVjURykSWoJeQUWKhVkje9uYXhCKZuPkZt6jBfKMnL3ym7HPXBvQGA1v37MJ2TNE46CkWgRc2s1rJbnDGeWc",
  "key16": "2WBGTrnQRTzm84M99BxUxMoa9yte8y4qWLNNCNeEHfE61iqYf2A8v2LSdJzdJeKHW51UQQT1kQD2nTE79f3YPSN8",
  "key17": "E3FfU6gh1NjPe1V2zTvTz8iFSjLYn2yneo2KKXeoMJkYgUw7a8zx2ZPqphk1Nk1HjBmGxvEWrewmAWaDCXNDYt2",
  "key18": "9oJQpY1jWYKK92wUzzdPsEa78jPbvRD9vcMtsK8v2zvJeg8k6dtE1D4BMacaGFfzy45DeNg6K9dzYiG98mNNVSq",
  "key19": "HJmLAQ6usn8YyomVRYHYnFWPB6DysetPHRTxuNECCZXv6cFNHH7espqLk9KHxS1eiY9ygS81Tg3GeTynCKfFgET",
  "key20": "2T2CfW83mvtsu61zG1EhgfNinzBwMDYF23mW34nJV4DTuZ1nhSqkHLdBgiJxtpLGfAmSTFzSVe2UJmgYhTdDCfkD",
  "key21": "CcrFhdtEtuLWT2LLM9b9sjUBHDxtaDp5mCs1HUDH6afoERwjNC1funs3WNXAv2ahaKyfpruU49vLJRESVrzoL36",
  "key22": "2pCVgb12omD2FeidTPNkMHZRFo4A8VSNbUvbLf7WjMaadwLDbC5pe83KiUEA7DxhX6mAkKjfeeaMHmMCz4A4MMZp",
  "key23": "4FJN38k3JK7DU8LkdQKoA1jHZwnrJUJr2UmntEmL9biFzSR44g2rwCopHBfNTdxtD733yMubmMj5p9vn6DeTVRP2",
  "key24": "4xUUEeUNpU4nm2gzESgYBdkPaAccYSLi7hnwHrMiSjTBQEc93A7tpvwRhKoAYs8ddmoZmqCDsF2FgjT5nxEBgbwi",
  "key25": "5wyeFcQWQ9WbVEEwy1G1Ex8TNuaDpASy67eGprXrDGudnnoC9XABhW24ZrNVDNY5zUoudCFUS3R2juBAiARuQACM",
  "key26": "v8FpJfGtLioaXRABbkEHfgeE2h7PE1si46N9aF8MTsMJYEx61hAvR4XS69B4Eg4CqPLVwdwLWiKnYiFcTofHGMW",
  "key27": "3SLF9eNy2JFW4LUtn6JrSfMAstvFwS91DRuf2FGHNxE9bdXWfBBkmHaK29xehQqLyz3tfuSxSoJbFDhpgEw7PLwz",
  "key28": "34vLnXaWfUoSZqjx9fFRL3DN1vsg7nYBvWK5zqYow9qZN4LnkhJEeAB5bf7ub2eW6uTYe8feKwQ4a2PioicSr5uY",
  "key29": "5y93kWcBVxEx8abuHt2vtLXtz3BKFVNtVuqboKtvF5uhADuismdgk2qS1DqsMLvUgq8Ckmh8ZLjdtXQANFdqJvMj",
  "key30": "5T2yA8kNTuE8YMXXXwoJdKvpf3bU2emPtLxzfoxyh8xzKnKcLMajTwah8qyNS96kt7gDXzQvgruMjzi8JcfS6eJr",
  "key31": "5NgM4ALnKz42shMrAZxKH2DuSrsW6AmpAVhf6STDwVoUmjMPYLdpMS1RtgpXW6SJUX2pW9YaaTxrHbwEGz26u7Ea",
  "key32": "5nSLoLKoeQKXHqWoStHwtFNnbADj2H1U4QrZ1zSbbU4VDCqustUCLQp4TWovdrxjS6AgZBnERMbS2qxeD5EPhE46"
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
