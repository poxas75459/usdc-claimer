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
    "jNodX3qLGyCU9AJsWCazmFfZSGZrYDSupa874d4kMfDnyKwFEBYspDTcF7VgGQps4jkzfYqzUrTYSc7QU8VN6yM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rgYPdur7u5qKrN2ESQTLpXNMaQEW4nFS6WdUbwhshGnXjLkdov4f5zBjHgXzdbDXjPGWZekgnHEB5i8HqGwTTrs",
  "key1": "zfGrk9GnfsDiY63RLuAuoR6sC7b1KwPXh6H1RmTT8CATWTCwL631RfHqwTBAQ1uwpSzje9qAHfSagvTXEMdRzJV",
  "key2": "41aE4NwGc75UQpP1oiYR6cQgbZ8Qx3WXFBBshKWBsMcbQUKj26aRqowKgedEB4NUxCFRMAWEDV4Uh4r78t6PiUr5",
  "key3": "23rqRaKuh9abAQiqXa4vXuowQMVjuhEPw2xPnEvsEUPHnKLchdeEg5e5iGdes4Ur8MQ2dpL2Bg95riqBdDysHBn7",
  "key4": "2QMFoJyCLMg8mWfPuQbxG3hZU9JDSYQPkso3Cg53GUvDSpc7EhcaqLJ5H8XJLg9bveh4xTb1X3Y6tgn3wmQjjm5e",
  "key5": "4CnFXimRpCF4P2Usi3RNSQ3JJvrBod46xbuGmEE2n7NKUhA3JtoCHUbU3zzWVwTwvRSwR3MqWpAi7Gaodk83EJzq",
  "key6": "3t5BAzrxurHJn2JpZapx19kQswJxMv5X4GKzHkBcWJigHrC3n1A3GPmf7xuFFuc5bPRjqrFTrV4yuD347YbMXAgW",
  "key7": "3qzMgTLjt7N3B5jxbD18kFoErzirUNEqk9cJGqNT5pTYdoAxXz2yRPouRjs8vZ5GvsRaxEsBL5yjf5WF8cXNNcGm",
  "key8": "5yVTwjq2UJBhSLuQPUrp7784qpSPcUK4QG72724j9X6wFPAxBJUvGQDvFo1Vg987WngsuzbgGjS85quMXtJAtF9r",
  "key9": "4vuzHFnyPtjrm2emi5tG56C5GeaDuSJuM6rBuHtMXte9RprbmWno7nPU6U98BcJ6srnjNCaXfntpvJWgVBVD6B1A",
  "key10": "cdM157rQKryPydgLV98M12tsZMAh7yKuxTZim2GZABHKYhtWCSEzDANqLMh8hDHkgnKmFTwg1R6q7VCA8aCs6YH",
  "key11": "2D7TqP2SvQviDdhGTz5q7edTaGzQWA1u6Xrw6YrtphtjENEcGR97B9ntWbr6pS1xUyEwETt7F3bdXxxcSaK2r4bG",
  "key12": "5UoYM3qJqbL87TZCvWczsLLDViX4SYvfX7YEAjc4zCGgWNMaD8Gmh4jYt2hs7dmLDSNSQNSNAo18XXi5oTbDHHeT",
  "key13": "653WijZfKH2wXJY986tupFnudMqzDDovzbJsvktXo6JG2W1wTHcguGgEuViLy5ry2hwkmzDYpKeGHHcDShc6KrNz",
  "key14": "3nsf3VS9FCsFLp6zdZKi1XTLQyAn2BhFP1j7ZbHv6RUAF7HscxSJ8dRr8qdZ7zsUEb1bAW94W2d6Fj4UvoCgAqf5",
  "key15": "3dwBxXeBBiDrkvcabHHM2bpeMz7TaBw91DeqZnyZfFZwHKrAN7umXWLbwYVK7nf9NyHTxiXoWgK1dMvkajz3CBst",
  "key16": "5DcmzFscqJNMxVtNnuuSYwV93R9zBYS5HDh5Zeq5C3htrowyJ6FEiZGuBKez3QtgeWwU7cczkkBo4kMfy1X14YCy",
  "key17": "6kqc4DTRLZRD42zg7UGomgFYXvh6TPnKPW1RJR6gCSBxnHcMN6WksckM13mCFKu1MJ5V5NShueh7JPUxuZv8Kqq",
  "key18": "4vmbNGw3s9fYNMV6yxXhYxCaJXprp71oh2ywUHuT5txXVdmZSf8TYfQJvbXAM1zrXfgFN3gZ9iSBr8pj6M6pgHbr",
  "key19": "2T7k9wf9K71VNXUdPkPBN1vk7WHzZc6sC8C3bkHepPsdyEG2X6w7HNj5QoASMCNzXhjrWCN7xi7F2AoHgKaVh8NH",
  "key20": "gTCWpMYG4gp8f9SrBhLqUcbHrphUY6LMvpHy181Ddjayz7p4fcxsevS46Rm87ut5mAkWXVD9rbGQF39dWmAaGZy",
  "key21": "36HWzPLuft2RpXJ6WbGFNJ4Z2ZcsyvoTNjQo3GGRonnk9gJfWRnytYPfwPKnvctBUpUEoBhNsaoFwnVqYboX6Epk",
  "key22": "5yuqd3Qq3bAMubSJwvbvE9Yfy2nEuVcnrK8y7aDRfYBeV4BgKRthJEEtdvLKQSWuzDJZdNgeauKqc1HH2qWng5fr",
  "key23": "24bJJNoS3eCBanV3BksRDR5qNcNTCuyRynxwrxvAC4NNceRMuxbsjf1BnuS7vWRYdTRdM9CrZhLufifAmxFKV7uS",
  "key24": "2XkuyqTXyWTE2PSvkFhiVdccN4ZXAg8mVVzgjEXp13UsdxybYY3yrt1o6bTuPQJ25jodgvtSZjXHtAXcgXByeZn5",
  "key25": "4pbWGuc5HYcUB5PoqNxMCYbwrATQ1ieQbrNt3FbAYUPpvtL57TQvzAMSbLraEvv96TETNG2uzFzg7DjfCFWjYcCM",
  "key26": "4FGSDj7VFdAhCxkVFMZbKCvQJkR4y4eY218oqTWqMn1bryLT1L5SN4R4WAwaSb2HNkspNBygMLyskmNU1TCig9cT",
  "key27": "4j1Gh2KT6z5JQJ5381GZL48uPpwFtSKRhhieia5vj12fexiJmP1rQPZgwARJ932i7joVWR7DtqFCE4hmBBzr9CsN",
  "key28": "3jzoDBrBuPYiQnoYvocUQe7YKEpvRe7hY9cFRtxgjZ32dwM7dzndmXGyNHASaKwvZnuqSh28dgCuossAcj8XE52d",
  "key29": "2j9TpqQFJpXikjeiQrJA5qELw3BWg7HLMmwFMxLZRofRkgwoE36bXeVuyu5QJjye5kte8gMGjcURHVs8RTtSUyaA",
  "key30": "3jksJ22UWdAZcqo1ZDEizsFELw9i4MY5p98qLmLi3r75423ccsPG9WdXP7i9KfQSoTmt2bm9L8rFQehF91QJB29T",
  "key31": "3HdTSLwWpERrKFT9skqAaG5Sm64mo1qodmJjGrGkkYpimXGErYSKuRtbQBkfyj3F4obi3vF6p9nQPeQTUJznYU7h",
  "key32": "2LAprqhwomTgJUCRa8GmdiUz76x1JB3hDW2ZqMLazBGwaTYWVM3Wg4Rrc7Jvg7gS4z3ZBbvr3UfhGKsbGYfs7iBM",
  "key33": "nM5idiq3C6CGxNpRtUHvm7En7yFH7vY22UAgyXNHHDDsZAZyByVoJLgzhr2UYwWWNmsGJu37oz7384jGLVFGq4Q",
  "key34": "57S42add5fRHHaGG6BHmhUcQ82A4UVc7dZMFqmEfJV54eTcdSsmor7QgRvobKdxE7NkpvDA4tdhKVZhb3terPPLg",
  "key35": "4Fg4Pq6zXgD6ctpm1Ahmneg7bkG8ns4Hbobh9EeNifEJAEHoSgM7Ewd42KQK8zehA6Mvw9quPUzopafKSJGM5SXG",
  "key36": "4TBinEoech5y5NJZDbqUfkhDkgMVs5tU55hQT7z2CoWhcdc4FwDbqXVxsyDf3ZMS5yygLMnviKfuKNSavuKEjdH8",
  "key37": "4Q3E23gAh1E7TeUrUPfKMhDoPpfG3YZGwnqXSujbT7asLdcpjvDkkFz5Sdw8seeV3FsZyFT1FeWRrwaejUPqKK5L",
  "key38": "3DXrVuVtmKvhJAgYEjdZSdsnmv68aQtRZnWTdXkmuuN7ghLsQxX7V5i4YPMUWk5faUMXxqEBYPtR6Z4FSVw8csDn",
  "key39": "2kRfs51gWFoeCAqh14rk2jsvKz8bkndVq7cCioUpnBxuFdPhQ81rxTrceJgqDWd9sGZua3A7UYXnLtArnEkjD784"
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
