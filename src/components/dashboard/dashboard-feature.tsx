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
    "2sx9KPBWGbQNdYFXpKpPoGgnTNybJ5JmiaUutBBkhDEByDKYBxamsJDqK2rAwAZj2V1uPUnaxci5j9MDAXBNmiZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RPaesRBHWbMeZe1oB8SXC1tcBgZbCD7J2NXfxd3gRhnKYoSG5GS96VUvwtAev4MqSt9T6MXoSaNS6wHT9izYVEa",
  "key1": "pBdWjaxhJqHHynEvxACfxY55qqjBXJ3hadwHYh3o9XSi7b1PBeB5jonASj2HKnVZehxRhLhrtHpSvw8KT6VRszj",
  "key2": "1qKxnnEwq7o2BQAVAUg26hGikRFP5eqAYnC5TQR64oj9fKbaeZkHtJKtttgP7TJMwKLPA91qDAgnKEZ56QecshK",
  "key3": "5gmQLDhxuUBSkqZkYxMJmsKMsXem6yr6bJiZUAFLn2BVCvMCX6UtF6YgpuYJwk4wvLrwWmLT35vc7p5u4XTSwfaD",
  "key4": "3bkonj3LtEE9gHCB4RjPEgEo5dsGnK9UyjC8thSfKuba7skp1yJHzei2xDTWCQQhCVRAcY8iw1s5fn2yFhczVA89",
  "key5": "22wgqQPocLB75Ty1njdd7CmvgLToXzQS4sX9sUKD5DfM7kFSU1SUy6VzN5jTiMVddZNs8NuXKfwwGqVsXbUMXcR1",
  "key6": "59YAVxA4B5wzrDBEpLdWWXT4mKL9NtGvZ8czV7n96AC9XdgLG2NHddNpfusqYBrDRPbRDdqJZEUphZtR5UbJuRrh",
  "key7": "4oi9gTAagQjzpoXXm1JyRdWG3v1zaSbWeuKhRWos9EurqNmqrhskErPEWGVo2euTnpaUAacioxMmkc9LPqpFCw4J",
  "key8": "67Tm5XvhpB1ANVMS5Duy5evAX3aWmcPugkdWgZWWp4qKmCLYcHQHgdpRRvLrA3m73zwo8pd66sc4BPbdJcDyh4cC",
  "key9": "3H4acWMciNBiZzVcjgmGn9kGdJA4zuq11SFyThBBheh94Ys7WL4CdkpaQBsHJ8q96P3b4wpHdhJ6mvyGKhs3FTLm",
  "key10": "4d4y5iAaDe9zHcEJuDUvBbyUyAJq9PzFs39uRX4EoQjXMjGQ5uxpKy8DkqTWD9g73gj9hz1kbQmrbgcx6mwH94sX",
  "key11": "495LR1oE6qHde2miaeznuWKjFi3GUUs232JV4AAHgdWM6CPcCP85xUbU9KJCURg7AidjibGEhXFRoSTxCnfJShQD",
  "key12": "35B8gdPh4eSZSrZf9sUpPJJ6WaeUU5KuyYrBJik6fjDoHthtnN2pMemrFDTMJy2rzpX3Nk13xzShwPjfzyVUCmMz",
  "key13": "64BxiDQWhtgH7CMQComcs7iaCbNPC3s8YUMAStZXyjuSX3o4vgGCQDcgLsXefQRqHxkDTUXQtBpTyeiAdNRR83AS",
  "key14": "2b1fe7vuKhJ62wiFbXqjU3b7zJQ7N1yb5T9nntCoAEeJk2eDzKtt26wny4rLFyFV7xoEaecjqHEpbxRND7qZgCRq",
  "key15": "66oGFpjQJeh2gRo6bZkiPTjtgWy5CY4WaayDJhqvyzyNv9BhEFtWjMFMtvm9p6BDT6uxXHQskk6SBcuUnthpGtCd",
  "key16": "nw5WGB2TY3qMA13vRcYVMLBscJvT9uHtq7HUWR7gXYizHsnV4eqsWK4drnBn5VN6dDpMxcZmdjzAQZx6rRqTsh2",
  "key17": "3y5hieUaaqr7XteKrWrjWJ7iCK5wHy8t9p86XYGJJPfWhdSBtPScYornAAzx1LeF5cEZ4MHYb1kM9UGeWSKXMYBK",
  "key18": "2PDFQeapsUQvFitv59qSTiUQKj46joJtejLBEuo6oV5bL667qMWxxx3sxjWUo7wSbEgxS1AUHPL8mvaFBhLUyWQh",
  "key19": "4LdhX7ymDFPBt98F3TCDbLpTjfi743VUGZPnKL7AD6TVdF7TP5wcj84v4n3UiBGVGkmkuH8q4KnQ6XmDTobVGoGF",
  "key20": "4y39ia1Ze1rULcbKnJqKTcZ41Xh9LEroX2mEfoDfU5njswtSfr9LHCHFxH7zst27irrqe924nmcCgz3rdo3vNW4W",
  "key21": "5QFPLzidkh1AQdaSrNSUbhPmkwu8J7BJ8QBAEF2TDyj7db4AVQ7XFDAe3PW4gsExirXsKdYeSyfLszhVERUzVrEh",
  "key22": "54W2Ja3uRjYTqr67vh8aPaGncXqJbnS7XJ5HMLL369N6vXtP7BAneDBCvpbyHdKtTN254jgpaPrQNVejYjXoTitB",
  "key23": "4V3UkUDy5zjrVJuGEo83SHRam6gwoZGBYsTxMHP7zpeGbLkGKXy3rk9r37pYfP1KSJeWa5SFxQgoTVjjeDgZnG6f",
  "key24": "46miE6yBWoRtkUbGMWqgMHXtFBZf5YtL7vWsEY77PVXQa4RBSMvNgffHZ7QTT9HbCibDEXbDUp78HJ5kUWxcZXfv",
  "key25": "39hv7J1GKxZMn4mY29ogZYPNKGA6gq7EXEijH2MAyt7HxC4c6bjDQhhCmqAjZYVmeMmTUKYmjAWatLLdRLPd7qKy",
  "key26": "nGTSPWnmq8FBuYLXmqkEopFA3fdy2UM7CQSwNJ8Cr76MfFASRW5dgni5DkPj3zyKnknJRcxLHrc1Aafyo13G9wQ",
  "key27": "2G8aiyGDi3sKcPX9ig9hUjMBzMmgQZGHRh9CragysfqrWmTXqjYJsjn5DjV5m27kwVTvxqupwaDyt5igv4z5X3nM",
  "key28": "thD3hJVwZHbrgxiRdFz6DqDRNce8Rq1j8rUqqdESwXT5USwCNY55MLzuwmqB7b1UNaZBsfwyDsNPQAQ945jQCPT",
  "key29": "2GUpaAgY89fzacSZMDz6zpYVMYdAzq3mwosgu2QCkNREgmrBzz6cjb7SkgA8hmFqe5xxFazZYTU2K4uvJSnSC5ih",
  "key30": "52fyTBWF4uvJuEVM317YiTFsuq1pW1kM9AwngEtjuCjHeydjVZ6MgmPGekD1BkE2fxoL6BQkrz3sqQ3hKbPqUMXg",
  "key31": "2wGvtUewhv8jTTr9FeEKxAaNkmV6KByhp5nwUwqhLw1NgCYxuZEyaMUFgAkuKG6jxKT9BDyd6cTf3v2E8wpL7uLC",
  "key32": "4qLG75cFppMpyPPAxMixVPxgY1kdkRg76Q7jkQWZcvaSYutzh9Nkxw8hCxRJzdNx5bU8f4JXDeaLFuxSDhePfEXb",
  "key33": "2UqzA3HsxjYn3j4tWwt4qMbK7a8FMhRPKrXexo27bkcaYarWUyGkMtFAAVc7YhsYLs7ViCRz4p7HZj7c8VMPeETp",
  "key34": "4gfTpCJyaS6H6JgKDr8UmrAdj4cUhAgF1RkbHcEhiPCyk7JG8XgGtyGTeBmYxBBcm9RjitoQopepisLc1AYbJdZm"
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
