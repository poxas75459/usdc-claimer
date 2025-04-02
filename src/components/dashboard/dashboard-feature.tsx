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
    "3h85EtdDaL3AFkoeisGdQWiBs2jppHCHrEXcY5PpiwgVaLENiJNgmgQpf8HQ7TJYbewsYC8YADUybse6mVK81iQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "95EsD5jkemo6jtSc73LpMWEQBf1kwrkqbdhsnXpePx7z33gJYrwKoMfayBSEDkwB7GJaYMc5fA2yPhdchNUYy93",
  "key1": "bAwVFyFhzttEDxeNGjz1eTxrmcv6W2BQpXKH28pM6W1zJY4s3AguvLZ3mtnrCJkwvmMeaw4pyRdMj6EceurSdbe",
  "key2": "4XfWf8mTbQAeqossozwFqtMsMiZVXgDgxyYazZVATp57uixPvs3XsiCbtbG8U3kHbSfwUgJt8bDHSRVGwdP95ieU",
  "key3": "mrN13cQfUev3pY7H1UAfnvGBBk6Key6DJXVjmADaft5aiTa2KD7Cdu79VnhkHkCbM6MGkxQcEFLf9d749sYvdzw",
  "key4": "3RUc5a863zY3NVndTD8vzoEiNpnX4HpczLb9p7KKRUH1oHFMMKdZ72YACMxKUkQb1w6v9gbvMcZwMFxzUSCY9sAM",
  "key5": "2Nzsm8fr94K8BNiSQANuRZeonC6gumzQm4giMzo6ExAfZauBeCmP9kHki9Qb8qfquGLLmE4MN5pU7kDE1brNym2i",
  "key6": "5FqNi5tdCzod9kZknk6ZAAS1NhLeBvZRV94ucJC1r9fHY9eQzNZTqesrS3iibbg1Lsbd2Cx1eKow8hJT1v9289nt",
  "key7": "d9ceZcMQdhASKKMfuy1AmSe2K1zom37TUvxQGueQUw3dHtR8bFm8wZ8FCwTH3DqgukCX8PE7eQSkpCY1mHHae7P",
  "key8": "4tpnxuH2kPuvCVKuF5127WdzS99WtXYT6V2nPCQEkaRc1W4q6zuSJahEvTQmXhnxYNpe3SLQU3EFTEcy53raF8iG",
  "key9": "6vQAPZPahQVV3EDncHzWjZ7TUwFxJErdN4NxFZDxtfu6RBA8TCsB6cFb5piVK4mns8E8ckkHkizQY5NzYgKAQvL",
  "key10": "5ThzeovYPSGXUeNDkEXMqNDQPvanLTSTWpypBG9jdAmuVnu7RqfiAUhXG61wFHgz82J1Tqw9CgZcWGzAE51QrUfq",
  "key11": "4vTebvnCr8EYuJwiZpP1iAJameCC2quXasZ2FnvdVo7JWkn17iW5zjKJygCppS9WJHDaRLxFBJWjQuwUbHeq3XGo",
  "key12": "585WzzbhuQ5PzsSS7qx6U3Wny8UpBmPshwfRobUs5XpVDJCzvsCyWYU6pVrUnmhaZtgUKXHJ8vAuNM7a1pZBPtu4",
  "key13": "2EEC1NcWC1rsaSMsN5CGRRJzvzSCnCEmxSS6rNCqfkntiZGCBfQogbYYADEM73kTqf6eA5jLJWxMK4P7kQjE9Mv6",
  "key14": "2T4eNB5JKzLKSZgDFX78xHbhhDsJ2LQA5KwzaW8S325xLMNt43zmZbW5JxmFtjeFrf16MrsYcEPcSWhvYcmJfawF",
  "key15": "2hHb7L9LKRjXhLeb4gLj7GtevNyoLG4ZjWnNTD2BvSCNdfzkGNoBcqAUr8bDkR3wAzTtgUJ88XSEt7jQzXDQHY3a",
  "key16": "4poCWbenEQJv5ueuFrTXgeN7neidwN2ANnf6p8VXLRhzLs3eThCinTUrxRwe7DSVYsM6obKxL5iFj6ZahV31k8kf",
  "key17": "2TkGJy7pCZUsJ6xthGjiFr9ceiFr9RNETs1nryJTEEZuzcvkH4mnPPQKd3CVX61Ni2CsrruzxLVp6k6rQ5HtVij8",
  "key18": "4FVR4FpDvVNd4V25t1WY78dkL5PDUWJ17neYufM6QdztshQ9NCmzAmPo4ETtLjX4kJYWCMG8eoLgGFVtsUK41zXN",
  "key19": "5ZJJxPeCRfDWCJ6Kjnhm1Xc1XKwpfZcnYfhjq3rfGvHEeknTGq9Uwf61Co6xDpH5JwAUbhdtEikcCPUL9XV5grnw",
  "key20": "3o1QiYmNHTnFhKNKh1EWUsqBJGCrvfL11V5sA78twPpqHFNQHAEt6Kw5VUN574v62yKVWFEEbXfUKw5qXJ97vbjd",
  "key21": "64gFtnwncg4iC6hsR2E5m7mZFphqRMn7DqPPkTHTBqEHn6bwNXatoSRSooP96MbSBbqDqstfCMoeuRbTuodzQzaX",
  "key22": "3wpoC7mrG6mLGHHerHRRFQgvbEmiJvcpjjVBGzbRmY1XdgtLbG8KeqYNB6Z7XL8xPwTk1eSA2zkmazxW5vmswX5C",
  "key23": "2LwTeV7gij9JJW9abJmj9pmSyKPkZmYTjBKj3hwAPpdxQuyog4zyoJsBGMEqZoYYvRkH4JwD8f9iQ67NUAicM2hW",
  "key24": "3bVm8JEgxuv4qzM4HAmhmkTFZcmx9Xfp9ySxsUEJoNpBsfz7M6EusfXRHyN6taLyUPkEqaiZaKiM5xedkdc46KKC",
  "key25": "4652uKndpttAYk54dbAaGEEBgNBVtm328GJRp6Zg8AnQkzWu2Q56ycivQHDxGFd5xYkp71mgJt4AZG17fygVeUez",
  "key26": "SpFmqjvCEKuFuRs8kRBFfp4dacSdaqy9EyVDtwcNnt6jtpVUL6JCGZdMQf8mtxDRkdLXyAmGLERicMnX61eSJrn",
  "key27": "54vevMGAmx11hN6gjSyfXSVepfq5z1TgH1zh6nbbWCRtCyp9VotWNUc1UNSSQNQMTQHvnRa2bRtSTWtS5yjRtDq2",
  "key28": "2h1fT6oJcbuKZMJ9KyDLfFXXKzX6KgDsR4cTPF2pQ8jEpydQGnfoBpy9Qt5h5ZLcewuRmsihFdL5Bq1zTJcxjVKT",
  "key29": "61QVuC9PpmKf2nweogeJAjuteACyevnrSybTopYS2Z1MTsn24aWdwNeJsB77JiGFCeDxoaW7f5tmaqSYQtATgtJR"
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
