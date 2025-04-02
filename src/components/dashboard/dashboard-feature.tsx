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
    "4NtnPxN8UHqdWN2vo5pVdJJz3H39GPjRogMg5EJU97xo5V7Vxmh6bdqzY6omxfFm9ugi7QDScUfupzDQvY7iK23k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VYYNxgTHno6wW3pfCCsFtxfdLdjvcooH7MmtFwU9ptN9xt6bSWtCFzyRPWPRmTwu8xtQ9ZDdXUfx8Lh9i9SupSC",
  "key1": "EDgjf8oBra19YycHJ6BVSj8AYsx7dqg7HtanxBfrHbyRiF1HWVGSC2Hrrnyg11XSxQce5iQPMdgceWKihjpxBL9",
  "key2": "2FfZDbbRyAdEZfmJ7FaEmB6rKzLpSRLYN4ttPhmKAu3TotsCsBpTmNevvPkJQJfXMQ7XRNN2q361AtXXuEjQCHwm",
  "key3": "4HWdXR66B9E4jEwVvi1k7fg3bm8qdYtwTQqJg5hsVhifVwgZZzAswiBhUYJYzGnLycjgoqNrBFbLqUsGLXmw7gx1",
  "key4": "2n7c54ASR3RbvHRftSJNrRuhobTvdA8WWaTEFp3GjWJULWinPoBojwFo55fv8Fob5TCFMvTWiubqx5YS6QShNgJF",
  "key5": "2C5y51GowWfGAoxurY3XKLMopHNwjTjW4UXKRHkuopxaEXagmRPypAArTVHinV8zzFUgq4EmVbm3LW8NvdKBwh75",
  "key6": "yoHFuXt8CqwSqge3KS4UW7x4aFCY8mv7GcbJsFZdbPA73ex9cPntu5Mc3QUc752WF4kewa7rT1qE16W68u7AiWg",
  "key7": "2oGmm911oFbcmeSwH8RsMBywQTvWYKTEj6mCg3Ke9xWLMQ9u8G51dapjn9kqEGUcEkuHGySXQLUzy8TwkG1gHtyJ",
  "key8": "1Zhr1VKS73AUczpvJbyaLEXTzotdLz8Zydm2Rqt1jrMJFmAN56T1rBw7XAhtPcTJb4khB3vfYSNsMX4EKsCnxdc",
  "key9": "5YzAonfhudaV2goLosMMhUFAwe6yiwoTwBZ76Pr3ciReRMWbqh11oVe5GTWqBNtiZWMw7LDohFBnS6RKNnC4Rdvt",
  "key10": "3iLmGjTDiTaf6sEpyempoNWXko1LNH15eR5Yx5caRi3bjDFxbirTaf7BxRFtRw1dcM8VMLc62o5D2SwYnym5dUXg",
  "key11": "3cNE2xsKrZDKUrwLrScyLs8py4podx9Nb77NBnHL8xsLpKGebg5eaktwe3TKLTRC6ecbxb2LKtZvzxQjqA6d7WVp",
  "key12": "4c9RELhz9xkjLoHXYeFLzKZVpSSUc2EXfw1gsKKG5VmFScasHxTJEAuPz1a1ofNT2CYfx8PGgMnorQq8ZnA81mpp",
  "key13": "3tMN9WFEXTHzxmNvt3Eex4hg4KUtwGxCPLV8CQpUKXaXDg6ewP7tmFFDj49ie9FgCdAuDSKg7jFKw2ruzK35GNU6",
  "key14": "W5pyDa6abibVe1RG6TJVY2zEXqT4vHgXAoQCbuHBbHNYCLWT7AQ7rabpNmY1QZgsqrgNsvve9uaPgMve4VrdmVM",
  "key15": "5ygMNzT6nn4NAF2RYiJps67PzyZySQqvidjbi742QX7aQRgE8RRkaTfMGappjzRbcXdU3YzznVbDSsbj2Tk1eFxF",
  "key16": "3mLAwKxCQKtK6ftgdULx5SXA8rsXrsjUZ3fvxJ9FPtHSb5B5vEQm6ARK43D6FpW6STy7NMU4NgQ4i51dgS5fhHvH",
  "key17": "FzgGfjZ4kVLxmG38uK9Jx8v4KFdxAyjJeh6Cfb6NUpML2iTgj1FjctUPheibc8jF6me6FnRFXnmwjXxoiGBuvTb",
  "key18": "3fcdYRQuHLZkJpWe4mTXjw6GPSrvchtUAPqna72xRTSxGss32u2btAqYhr9YGS3HtZv2FSgYV4r6CFxei4BHa5mt",
  "key19": "4qQ1MhZa71AJF8Qhr7mMNiFFCHYdLYnCKqt4smPYQKumaTWdZpa329y1L8BhdR2WaaYyUZkYsSe9ZRZCBo3nZiud",
  "key20": "2uoYCDp2x3BtB4WkzERgpvRJcqBLWzoxqW12E9YLXfB8cv4xQxKTgKB3wj5UHN9S791R9genoeupybrFCJ9Sjxyr",
  "key21": "3kB6KAE2NYpKbv2Vdm5N4wLJjg31jvSxzp6oLDdLSGhcN7dmqDd9gLU7Pq45JoifaMA1DDZzMzdxhqJK7erBz6UK",
  "key22": "5m72oMqgf8ncwYLv3c7dDc5jG2KPn6KrSdkJndBRYRicwVKR7JXheyyEbKYssUgXFJvn1n6yWfipaQTQDqWMZkUr",
  "key23": "4gWP1iX9GRVVXv47iL6LTzzidadTUTWNki8t2LP7sMc9oGxuAdFqgSboB5VkZDkjAVKhSWer3pbeJdVdVXGeWNPj",
  "key24": "4BBxmrVVaCwXwjcYgC42hoTbTprDnzgKeoF9hgiwQy4MuoUP4eqFYEim6EirUnpAZrC8FPBKUH6hzW7PPkTaRgYx",
  "key25": "2DBx5d7uzd1W7qPw188vCEyVLmDmVAxLRJ6q3RNVvatJ81MGvCsuJ5NgRwHbkyvygGCanLtEU9spNXLtsZXE3p7k",
  "key26": "4nSTVw154w3Ac6xMnyBFH17z3JKJPjfh1SPbw4ucvNVgHbQ6BPU5uaFePuSSeJVD4fRYHQ1xoz45UDeJbwxtyhGY",
  "key27": "63i7XViu7xZHC9skCydRW34unoh9Qpg6qaM1nNsGYKnGUnjSQohcHwthGYxHG3NgiWtdTM9rN6GKg3SLYcCwojdZ",
  "key28": "5rqdhTiPAFghKrzqBB85KEQVhitp344HzqijuZ81Qd75EDvcuHvzrwGZNLnYBN4VxrxAzAuN7KkfYGdYE7pzR4pw",
  "key29": "369wSkKC1z4iyFH6W6iuY53c9ZdEy53ELXrM9rU1XuBnbm2GgB36FrPXww9aGbq8pcF1GjEkjBhxCAES9tqJH3H9",
  "key30": "2nEczrXj2hBgYoNZAbbwcSZcJM69WGhxNx5DHuFaJmK7vZmBd4E4R6nRyk9QbPkV3DnyDykDuZsi5EuJmZWJR7Db",
  "key31": "2AT8FKz1aWoYiwfd517wRkCWrWbeRENUiSonFYyxHZCqqNncLLSeqPtQLVxFkbH96Xa3FqJ5S6Ly18FZC1xdv9q",
  "key32": "4Ta8y4VNoX9d67RT17QMY4jxLAKmpHSCpJteGRWLMAHBGQc2t1WCc98suRGgQwTroPMvu3T7eCbPgPqzpcoyXdQs",
  "key33": "5iYtxZ8aoEFMzCkQvV7S6WFPphhMsZqJ2BsyoxseyFCdgGB3cU7vTGWBzwKvmGPWLqeFCQMKfZPhmzpojCMZMMR3",
  "key34": "4Qxaw354CVCxaQEzoX5HQaM5JDYqTPLeDFx7328aNjcdNsgvAVSbMnbBYBkhmBJZf12SpAwLhgq98RAd5r5Y7cqv",
  "key35": "3DWkRvUdmYhczxxTLo97HKP6PDCtqSVFypqzYLXa444KZN2F8wfu4jfL5fwxja7FqhiqcrXVe6DUkH9oDfzvo417",
  "key36": "4tsVScRLqACpzkYH9mSru4FACrkWAVeYxdJbDTmWyjZU4vAY6PuKpgwT6A742U9U4dxTm5QWxc8pVWc7prAAfxid",
  "key37": "5wPKKsCuWW9odt1HeFNkhVeMjh1PgpMSsNMAu3TF1abyHuHiRDy7AvpXFdEf4hYWJsytnruTzFbm8zHk2jxJdbUH",
  "key38": "4bbmiUuBSDG2bq9mt6mJL7KEJiPAqYwMEe52bHPoNWmmqf8Bp7ux28q38h1sUrs1DjfmaDbq9ZRTgrRdgxivccoD"
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
