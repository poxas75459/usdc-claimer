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
    "45bwjm2eefMcd8kC8oAUAUshRMnQVYNEnrXKRC1gouTnMThTE27ppSDyGKpck51PYNNJueEKqNiyZqN4Ex71yt5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQQjgBCzZSgC4Pk8Ao2qPXmEgQ8ZdYGpk9K3pdGMJLzbtrM1HueFFYiWtjQgSo95dkdR45mMWBaR9ASkT5iwE8s",
  "key1": "4NThFzkEGRP5yfPuZYYcYVEEDwsWYgrpXBQYPCQyJch8RPV98kCH39m1w3yizGxGz7QG2ECPo1kbxRdLzMczKQvD",
  "key2": "sqy8VdfqrpG7NKrpj94T8GoqAhf9LKy3b9HFxm5cJLgS6cAW9wxK6mtANYFLzXDqRUgNvzx27VQp53jSU7wu3tz",
  "key3": "4AQuRzMh3XmSQbjwvJUF92iVLvGDFRB2hJdoUiiSvwQHaBSA7jpJmjGF3oUFqRTyxssD4dQ9d7uPXWV4HLaXvdQh",
  "key4": "2ehFgcrGjGhmBrdKpH3XqzhQ9kheVer8VVpjFEfGC1iT5qFyxEobGEmE3MAmaRBcrVZvDub2F62VeD8pWLX2BupQ",
  "key5": "55wwmF9Cwgdc4KaCC7wkQLDQ63u26ZxUP4J669qRiNJs5CvvBz57XEVUYhVMVXpki7S8pBKhuzFGzD7m1yV9irVM",
  "key6": "etsgt6whum2DBCB6tLNdPKkxDN8PGQaUsZh3LcJwuGJDVXdcQ2CkyEuB7hJkC78rQjqhijvWxLk5SbGYfqLRTYq",
  "key7": "fMkbT1KSnLgLY3p5qkoB15ggQLnjVhyR3Ceyyk1bapLhrjcXkCDS2DaNibD39PL8BJp3qv6hpbhr6j3nWnkzj3U",
  "key8": "4jop3rjJyYTqc7cCHRtoXzUXmoCrUnFaGWJwcgT8usU8oHoKBvSvSndj1ea1XPYbjampEo4uFDJRJdj4Hjzu8UvK",
  "key9": "3k1qdAHp8sPSPffm9sDU2h8MjEf9xdpqJPaZo93cR4UT3tybJooV6mMDJXGFTRstSMKkdiJkwcG5FxsqNRp6dSAR",
  "key10": "66GNNnjeghBLVZVmUVaAQRgrSPELUCajnNnkFpL5hvS2Z3ppyo2iGQcQDUHr4aDBGzmABJQWVPEnS9xcycjo9wZG",
  "key11": "2pgEiWoMkF5VH3x7WhgmcYQp3TWtVUCZTvJBBtdASqHBxUm7u6ueH4TfUtwke9N4fiTdJjkEoQEvBgPKYKSY5mGb",
  "key12": "5k4YH1ypDFv5C8BpnqUfAfFmQ7pygGBDvyXx34A3nDPkELtuZEvqv4BNcwwfUXHb5hiHVkBUaqRQzNEQr6AD5wRo",
  "key13": "ipV2aUx9HpuvMh9asqqugDuEPqMvHHi8YVuqKA3igZUpjPxR614DoUhVJTab8N2Jmwk8wFGt9y5gXkG4E7e1iM1",
  "key14": "58tbMd9WMLo75C89dSCENwQY1rJLLeL4Xv2vPhhK3J4rnYAKNhAq6DScjFm9Uh7kCLPxpfSKcQtfVX8PNMj5dwc2",
  "key15": "jqTKXo2RXjcHPvoD2JqciPsxXg1XKG1JbRrVGLnsqhxgJnYFFrvwXju1Qs5rXs6nc9cr6cEsKhs7XeahvZDJWGu",
  "key16": "3QM7vY6xkufeP8B94Tq2sU8LQfViWfow6B1LLftYjcVa2ovrHm3dXZDXKFDqbgfT9quzumeGs14w61YH8pVCWQkG",
  "key17": "3eXcfSzfe4U9SVLDFeaFQwPx2Q58LLTHDMorgtXbbCyBEdZVQGZ5b9ivztvFuPe2KMgK4dqBu1PeAStUzvZezHGL",
  "key18": "3s5KSwc74eb7sJfSBHuPoosSX9Pq3e7kmib9HUQESQ7H5Q9BF1VpY2zzAukoprfj2hzLcdypWm8n3LAVCCjxp9Ln",
  "key19": "j7uD5snSvPYMW2e7Ck5uf6W9PhWwKZpJiuVooFkNtydYYAB6M5quue881Y6hrundEyfFiK1nzSfAkdqvYgBgAwq",
  "key20": "5ZU7Ljydv8SWcP7DQhoqGWHyrLhwokRCAHHjBw8zubsB7uYuM6KyATz4e2R8JgB8BTgP6sw8UFDeAp5dQXujinwe",
  "key21": "9SXKizxDP99QDYY8gBmzAxWqBCmVgrGLE5aN828yo8ZkCgex9RiPCrikAiq8Yv71X54EM37noTBCm4ow8bGh3ov",
  "key22": "38atDkqLF8pPoRZhQFUJ1xVUKSeqg3HcoPx5C8zKfjgc5Wku3krTXNTwQiApha7Y8jkrXQfkpD8Szui2nzcw24Sb",
  "key23": "4f8frPGh1iR7TzWoa6qGeAteHuaULWFSG7h8738AHHvHUZkWtrSyaCn7r7yBA89BczhELMeptNuLxXWjpCCeV6ZC",
  "key24": "4AVZv5it4VfHYJwcBzT5Fpo7VVzBhjfT4PkWAue2PNTwk8S5kideUQQZEHxJHne86tRQu6ncARL9PoUno3jpGthS",
  "key25": "2J5p8Qvhkey7xKuFTnTJ5HCrqN8eHVyta6zHXS2nwzTCL52D3dqRez7n66qw1fzSHccZ7hPN9idorfunBep1w2uE",
  "key26": "3E6BkhnPXd8kTNe3J2D4k8pp3DB4Mfy5oopbCqzYnihA7FYysGpCbZCTKzXpczTRNrmo1KX1Pzg7sg6M8v95wSEp",
  "key27": "3evATvLi2gPcD4BCh62KAuVJ4oWLN6mWz6tUHokPtxr9SgxTYb6SnUMMZ3dPLuojFXrUTGvnEckxwMyDdsuLJ49M",
  "key28": "25742ffujGrcHc7UmJvSSwgxfowFqP1QsJx9bxJMNPBmmS39B8i4PXK59yEi563fqo8HPY7niWXU9qw9JZj2kNsX",
  "key29": "2W6A1pX93xQrM27sJLz7YMhs1XkJA18UwiT2XkatCkdGzGvzBA6YGKLQMhU56kXFA3Eun2eiK1fJiJgDAqAmXCaw",
  "key30": "582qCx43sK7ds5A6YDyHwHrivaDStkXWpLApDcmGxmVeoCw1s4m4QJWLuAFbDj7GSEa5s9tWV5qYnyghoutJiLRc",
  "key31": "2kX7aof2fNfRxkxzag1qfAL57p4adYwGJoxb1FqsAgaau87htX5c1PVLooZPYUJKdAX2S2Lf2us6VnpkAi7Yg2ec",
  "key32": "2aN6TPsAHPUZ8q72ovnLyB7NZQhhgrgoLscBhizigjWe7EVBPTzvSEK6Wn1rKtfSZ7b9zdURatmEhApLhQxFyq7o",
  "key33": "27TenBu61jCkJwuSxgoLqSURpVxgdy2tHyEqf8DR6GjUe2RjdgGZif6Wwmxz6U2oWSx555oCDxZMxZYurnFvEhV2",
  "key34": "3HkxCE8JF5A4DybqkLAxKzHzsrP1z42UxBfvfvfNhh5X429GQuxGjVdgPAVk8ZYKXniGpxTwXsFNiKoEir11UE8q",
  "key35": "NrtBwoLzX4veUszdpY6fQLBYdgaH9BbbExpwSby3FWnqd98qnfonYbg1kmXVCRE5hy5rmNXg36DgLUXwHfySY1R",
  "key36": "25fFchCiJr9fHfYkq1gaU6r3XUSU6U77SW5CmvRVjTghZUEUUmTGApNRmUrbVpirxV7LLVFVo4hw9DxnasrySGvb",
  "key37": "3hi8DbmUjjoR8v6co9dekSqeEBaTGzYfzZik8L4Yicdnp7CMp9QwA16Pb8WsA6McEk9Dbq9nY9ChbudSFAs6oJHh",
  "key38": "5P4x3Nx7nrdE3a6WPqv2BQBJgo3n1FGbKSWhjcAGhec9TV4fGogyt4jAXAM7kEQv7gEBpdxZkSbCwpumG4RGBn8C",
  "key39": "3XbJjBFg19e86X19c6F8zu3ToNVkXfCbHja4GKe2haMy4yKpNRWTqSaS74wUSmSjquCPixfDoXw6iQCM7wrDhsiX",
  "key40": "4CrrJZjUN2mfcQbXFQbygVJ9ahhdK5taJ2YF5rMb1q7YUGZmSXyMonhmjDp8Nrys5A4vDzuvnhitmaNymZFLjT45",
  "key41": "26xZVXsZzw3ckMZCALGmnC62YFT4zUcr8F47QTSC3dHuEwskmyqw69DGf3DbWfRNMDbj55KcuJsLkziXk4WpFUUv",
  "key42": "4hyD6P8zw48D13swr2v5464ZweLb7jF49W6aKLW2GLy35tCwS3bWmhBjJw3s3ECGJjqYg8CLE6GmDZkkGdkPxAC4",
  "key43": "tnA8mF2pY2uK2ZnCFnAncqorq9TJY46Z3tveAKZvjoi4CHTisFbVL6dbL1RicjURdUfFdV5kTdrMHnsxkyBh8XQ",
  "key44": "eLL1PSKensGRCQkxAZwxV3sSfa7xwZaiKA7XCzq5EbCDTe3XQEd1TNDWwT7sAXqKWUH3JzE7GypsmtYnqoX2Dgr",
  "key45": "3ZTfswWEU8CuocmwUWdRW2E5aXkuBQ7AnjyzEqPoYkRxi8AAcY757S9R2moL1Avg18jQPFCo9wN1n5Yg9Fpxdid6",
  "key46": "5ubzPW98KJYyjDiYVxheHvNvx1Ut2u6yN6phWYgthTcjj1P9CGEFmnWq6XdQ5BBU8hcqVi6enbvWvVT7C5rHZpK3"
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
