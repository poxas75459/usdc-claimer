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
    "reV6AMDqSFkYt5bLC6BSBNrWZKJ5EdjnRXtdR3LNU8uJR4TTphXC5egQ8MVx8DnX5Woei1M8KrLYNVKtcpQW1ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxUuL9Lx1A5kE2sGaGeahdQxE7MkfkNhMHeZc9WWmhu5hQgTv3FZ2WZVAkaeWrMXbyD3qfePynHQsSExHBRbnNd",
  "key1": "2taFGjW2ap6YEKJEcN43sq3tCTCikVK4J5xnhntwWP7UmhESZ6UfJzdxGmEC76Aawg7FKibFVn3SGBoU8QAP86T8",
  "key2": "52LZv1twoPoduerE8eJC54SLb7Mtp4GEcaghKPJRASyHzRNTVGZEawRP4re5LF97Ygh2S8KUSE4CQLVkeZjXF6wv",
  "key3": "36GKkEqKFf7oCheZjHJ8434LcuX7EfduNAtmABMpjZuFFpUnTh81SwQdwEpJy81kEHwvYqpkuRMkFvqdpJbSn1df",
  "key4": "4ay2J1yYvnRZGA54yC55Cfq9zSRNKf9MEYZT9Rsexj27vikguwWrR1Tz5mJRwBMneMiFc5wMXq1Md5s1o5dBqdYJ",
  "key5": "CGwQk4gRjwxJArUY9hX6SX9esyp8JX2CQj1zosCf58aow7GwkPrsXi4QdM1jt8krJorKvPWCj2JowPkCca4qpoP",
  "key6": "2BhhEEqqXeLu6YhqEBYv8zbReRXdwTDpqrCtaiqRxjbUwe7zNLHzaCCJBgQ5sZzV5RehL4d8kThaUb9AzV3hgPwJ",
  "key7": "uQS7fUK7VGWuBKsNPzva95iLH1UmdCdnqHnucjpoWFdU2bSGx42zqvqbiE67saZoLqfTTVBpWMXKaiX4zDgw7tr",
  "key8": "3LnEL4VCAmWwRxaJyt2op74TWqP8S5TMVWkPkBaJk7uYC2XywmkDDTrnYhHrHWiRaPDaKKyUtHZrHuhqYb4XcRXr",
  "key9": "p7DrFkbn7AtPbWXgiPP2mw2JsbtwyqkXoqaJmhfJXsFEEdocgxKYnAKiVLHJL34k4taQvtiGCZWVjKFRnAvnPDj",
  "key10": "4Shi6oREvcDHh2pa6ZTXMFEZY6KK8z6GQcwQjrT8vdYM3TPkBYWwPetuiZrzwqrit4NpnibyKkgcZYAVK4LVKxPu",
  "key11": "5GNFpg2YuWy5vm4z5M1gMb2XBaHFuy3Fx9n5ZzwKPDEapQ4by1nunBh8eaNErEPisvuQjCthsq625mH4dc8coouT",
  "key12": "3Ywr1XBmmsJXc29tiR12BtXhPHGXNX751sVp9SXHkv8WRZLaVxFegtwnn8J3b4gJy7dF1GHBV9HZMCu8SF4tNEYk",
  "key13": "5T64r3VxuYiAvctsJcHcFCjCZC8NRBaWWvRXuRY5kVRWZTkdEKGu5MDoCBVhCYc4HE2vyNRDyTRSYNF4Uxsmj6Mh",
  "key14": "8hHQXLDoWhvCfRCLe5DqqoT8o18NjzM6NaxLxD6i2UFtVZ6jCmAvPJGXf3Hu92ajYBRX4Fc76mTPTYU54RWmzvH",
  "key15": "3qYXN8vkGVTZebfdV8Rrj4yUDunmyrEULqHCncEc58o8j36jnFK9uRu4XT5zQc13mXE5zJ4pt7Jxz8zt9WLm3rAW",
  "key16": "3JJBKD8WswJqxqfrgFXk11FoKDbDwCzJvvWrJAnKKbQd1PzBMZnRTCvdpnvT2CutyaBVQpLZTaqRVLHs6XJCaqnJ",
  "key17": "4miPMukiaReQoda97b64KzvnqmsB2AjzLhMuTCaGbMgTUXsykvQV83wCnBuAJBBA6a4AHcsLXhTMZt1R2vWYeAke",
  "key18": "2NfaGaKqgrKHRRGDeEFXvY4iGXJ9Y4QN21HhduY9DeMjYUSvUzNkAsaRyn1zzfKzHNaSHPw1PMHvT7TjQHkF5NjR",
  "key19": "6SbdERMjf5dQsweyzpaJKhLNYRoxUVLbz8AjG7kCo9FLeT5bk8uvqD2APWfUDmZQxizYCoLBsm3kbZn9dpovLX4",
  "key20": "4xFqHAuLSZfhpVnsKmdRSuyxKgYa47ykLffwp42yTkPtGdjj8CscSCxuYzSPKMpgbfMw1fg6hADL3ofumb6zK44m",
  "key21": "7gQPKeFLZfmRhE9yv6Fuj2CFsKHdmokV1j6G7Da5ssfVyyv24FRDrQazqq3Ua5AbKJB9SX31Dm4qfuTDXy9HPUZ",
  "key22": "2wHpafVa6e9ZbmQ9pq8Bp3En7U742riXsYbVF9KNWiJcfwPC9HuGXhr6FxxcjBEgBCMtS8vh3DgNNw8BXbhwx9gh",
  "key23": "3hj74ch6eeXEdn4hsiUrswfC12WZ55Mwy2n8WkvSpdyT8WqXBJivdbx858G8xeq4w3w6NN5qH3Qmb3gjaDaYAgYe",
  "key24": "5NaoVGEt2KdWv6s7pQ3qoVx3XYosfnfUKi47wPdH1A1v9o5zPQrsKW1TfYnGMyqBsNybwh2WhsR8aBjhK82D9NyY"
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
