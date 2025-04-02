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
    "5eH8v8jQoBbnH5k1ERG2r45rFdrpwkVsmcP6yzcEPENvoE7qpM3JusKcfNLuh15czNXpkPQxsX9WQoX35PZjN5b5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hj6irnntmWAfgxzM19957Pie8zUhypTKTxgzEZ74b7mtnD8P7f4zUyRmATn8o6YZtXdMs4VHWNHqsbvmhTJbvq1",
  "key1": "2JCjVFAFXnWXfnKCnLnqjMjT8oa7zsXHbhLeox41sKZeEUSkYEzn6Faf7yf8oN5b89xsDw2xFgXwvSg5ZgASzwSh",
  "key2": "5a2wBnW8rZZYHGcJa8sC3neeA1vrM7F1qscoboQdnGNQ3M6ExS44Vft7fpYaAukWP768bSXauRPXgoZg7d1bHrgQ",
  "key3": "UHTbaEtrMyihEfpqZk9HfufNhiPsmooR213babBMCsqRbEG8h8ukUjixbH4ojeoFqjjxQktL5L2nUkQqheEbPDY",
  "key4": "54dXfj6c3V5EAFAERaBJvSh5ePU71kAbMNcRj34wowdPc4yJt24cNRmgBonAaufz4oTUWkLo9yRTBh9WYs8LvJS5",
  "key5": "3eCLpGSfNbVeQNcWscPacfn4ujcDE8yp9Tz6zVp3XnzoyeGL12zZXs2q5p9UkhaSvJ5XgzVLSp35L5D1VbkNYDHX",
  "key6": "5ejXKYtZe2xQHBfER4gKuqaR7ccRucfZeF5gUg1MkYvLLAExu17V1LaBn7v8w5zBJ8PBoRWDX8SuKRuiXNLD3SpD",
  "key7": "39f1qnBJq9RwJ9XwJY9eA1crkuDDixYWB9cYcaucT8URzZy38YDQaaV63ybMNDPrnJKbf2STyAc2mJFq74BDcQq8",
  "key8": "exf3avkcGduXsmnQdZuVi8m3DT9p27A17MgcBf1u8tdGqahGoujNsxo8mbY3H6CfyAzUf3wTudZYK9kr9JvR9VP",
  "key9": "2geWwUdCHMq7FEAQ6Jf9USPj1GQhd734EQUnQd7Ae5D6GbGvKkDMGchivAXQ43ojk5g6sQfPGy9D9xvD6mWmYoNQ",
  "key10": "5T3NATeBSMfir7sUQyBfHcUExvpotGQFhSWNi8cdkbenrxyFcu3zRfWPJZnA6LdYG6q5MUUDPCW9ebkEhhhirD3",
  "key11": "2t4qcv6xJWEusyM2hBXGwcB48sBsA9bhom4ESg17BV7w3b6zrUmsbcqyZgRnXnVykQnna3KVwiSofpAp9KXycb1A",
  "key12": "4Gbsf7cSjQPWYeYrFeTJkrY3ePHFtqhU2Lr6vsqJcbWCd3VdehdvaBBQuyHQBhfKhrJmFdEG9k9kFsHnshNv3fVn",
  "key13": "2SXTAt84qFCQtM5zvnEf7a9GJGJtJ7HC7wt74Bm1DumHSYrmFxfKWHNgN9PoM5dNKqVPofsuyoDit7o6qaddWXk6",
  "key14": "3jpbmU5Gj1ST5UmgT967nYqsDLUaCC4nvmywPtjyN48UQ6aX2ZGXnSduJr6sL1XWeRNTjYGidP9LGC1mroxMEY21",
  "key15": "46PnQsxmvyXV5SGeptnHDN5R8DcCFsQQ9CFvMDUwXcmGDDcJqiDds1rZs2or24hD43hyZXX2sXZVtJFihTCjzuep",
  "key16": "4e2j4znv4y9ZQ3VdQ1mUMMTpQZpqunqBMPCP7HSJR2Eu3SygBhMH2UN8ZpXYtbBHCGRhfypf79pEFLGeGWGPmMUg",
  "key17": "2fMLurxpAmuYTf9aLnoRrrSuUmuv1evTM1kq9iMfazMkM11WprfjcMhCUGtoJ1oEYoZdkHXjJtV71NopX54fZjuM",
  "key18": "5W94BoTQ3iyEhLxapazdXqCSqLyoMHRFQGJmKn9uYw15n2nugQNpLAafsXkF67jA7z3WfpLytffpFoLXWKsGqQuV",
  "key19": "3jD699i9XQ47YzRT8BDLkaqKbnM4EGEJj9iRCShDeksYkW9ZAgMFaNQ8Cwymi86dQv138N3WvHvUmFzjKcBwNbFp",
  "key20": "EBm8Anw4W1bCLKv27k5wByeBdLkNUAf58qaXnzkt9CMpwH5trehj7ZdePQtArdZpUtXqW1dYBhiq9HY22qroDn3",
  "key21": "3pG2WkYubGhBBHVZ6X2Ym6shazoXPjZwomDE3NYawP8wHhxxSbL3rsmouAkmBAAuokeXfxemp3XejxzEuZR1MVNH",
  "key22": "2WAWPCmT913BuZ6nRT6JFTWh5SwVGWWj49osGq6K32jzpTiDJvczaQkLQtdEyHuk4gdS8J5oTJxH7WirscdVcp4q",
  "key23": "4SrgHAyx7X8e7ERYDkAM8wsockxiimo4bx9bdQndVghBzV6mF3skYwi14XfR19VqEXyYH1oQ8u9Sgqw4c3xgnzKq",
  "key24": "4UpsuCm1FoSj4WGCr1aTs9v2sBUPzFwUmoxwYZ7adsrcUQ6zYcqBxqiejuaKxRuMscVNTry47tSFfMfaeZ3gjpi4",
  "key25": "4jzCCL8x85VxUr82hoqbrkCt7LS7y5sv37KsZQLbhieZR8YbhFrDrFiT7q92uKjzCyQXBvhPXmqVwU8NeZz9ibhT",
  "key26": "2L7c6eC7AJS3ocZ3Eey2LR35srAZdchG7tZo3rRbvwY6iKeH8Sr2std6uZG5We3i58p2bQ9PHXYaM6CC8GEoLLd7",
  "key27": "2Bto1TQgzswbbeAPTwdAsokN2b8wTVgEBYZLHL8zkTNPe6kbEumBdRC695bscZTfhNkoVNDCH5uHhuLC9w6m3NpD",
  "key28": "5tZqdK6pRhtepv9iFdzottT6EENb9DooZzQKrNjGKhioiqRYM8vp46ds1NxiNHPrcsqL7tXoePpaavnpNkeAWQHR",
  "key29": "2yTuUmN1PL6gQR2ZuqWW9godS4VBsg3ZN8eLy7YJFdEQRVNh1f6o8J9L9rMqEpmQAsvnVRkekB8rvnJ2trgQLqDd",
  "key30": "5Y5aorWU3DS6NrCM6Qp7VTeqmF9AsJbEqfxFuCKSqdnzJwqmMJjNeH7K9b1EBsqxhQJuAg38tywp9u1T8MTEPQd7",
  "key31": "4o1gW6hHGX3DdPqmU4A7GHChDNahdWjh7WLrLJEy8ppDYZyCwcNysEGjsYdtTjYGWh4LYCNUs4MijU44VvqtUfwF",
  "key32": "2ksM7ZvEKvsNBw4yXdsYVekE9jvba1TSZjsBh7tEG7HUFmJdscoaU9veomPVQaYiEoTF6nTkjqHsxPHSA8LXw7B4",
  "key33": "2oDoTs9giWv5UqTtZFb19VfZqNrzgV7RziGpS9gfkWmqGkLz7ZdtBt81hCz5khQhaZk8Jk6bf5Mv3Xyb1W2gpi6b",
  "key34": "2pc8GeiYneC3V3Rfd46NZpoMofZcj1sNMhYkGxv6YhNYbjrtCKhPX7Et6aUawEj5cVQAfJkFDMFU3Uq6xw7iQPip",
  "key35": "2d4uC74tbtxeeSVRTbv5LjJANiHfJmmGha9cqfRcVUCCM7vaxuwxX5kefreGzV8RuCJG2KxJeA9HYNFhUGhoyTph",
  "key36": "3dFreRNQiRjwBGpAboYCemVN4catSVXPkwQJ5tAxu4W1oYy1F5ThxYwvDwwVjChVNSedSvLGJArSrCiDvorsq7ry",
  "key37": "4uHZ5Y2k7Yv3oUsV2EqseotxnwrmPXCebNkYCh6LrAtE5oj9zhFTtPmvT5T77ug2VhthLgG1rKKqTXC4Veed8hqV",
  "key38": "5KEATpEvdhkYSYdKDSffuCeKYxcYdzJAHiXuTZGpnQZuDf3wvSHkbBPJMV15hf6wvipEw3XetYRoWJWtPJTbaidW",
  "key39": "435h2cPRqTNQpJPxfDtazDkBhs7Ut59yZpwSodcFNnKbqc6jwsLWUkMHpm19SGRjG8C88NaZTkv8nZz2hTbMMwpd",
  "key40": "M2eSKbeHg6FgbfJqkJcu6zy79g27Cvda5dnb1fzTUyWvxK1KtrdJDjcR1WBTX968KiVE111v7REHjR8dXdBixK6",
  "key41": "2WyYGsCnny8EjuMnPpEY6dGuZv5Xtgw7hc7qzJc8di7MzJQQkCFVwugZUvR3pRuMWAmN31Uspbb35seNYRCLcnWU",
  "key42": "66N5uW2BTWRg3TB8Xj8iQsLceeEDF9Txq5tfLyLpvea6JYbAyqk6PaRZmo2VenNUzxH6AAaTE26YwZcYz6Wn37of",
  "key43": "HJuRWer7JJj2g9Ex4Fb1AdUkLj6wgsbi4kqmH9U9pJzqEvNcinN76ySv9aGxhuasEK1sMemYNanBEyPdwMnv1WG",
  "key44": "3SoGbGDpyNoB88wYVALKd1Ah5PF2jGShzGJrfPnkkufV2UmLzw6h7Uf3RJWXVZMpqAUrUmNyHyGbxkKrvRVZ5Gee",
  "key45": "2sXUvGshXpaFWJKWU4NJWCWjPvx7YeWVjhsMD32ESSCUMdjDDpevmJ4XuJgkxty6cAsfRkCDqV5aNQE5wDEASybx"
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
