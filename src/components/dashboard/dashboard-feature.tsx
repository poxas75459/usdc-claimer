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
    "3RSA6MEbHu2zWrgmZuHepXGaqfaUeXMV1LuDyoHZCSwUm8HZRu1XPh9bMyEWgUC6TKdkBVdMijd3oiBruJR8a3Rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3upVpTxKWi14LcaMBifQmV5ykwHzANVNmgGJ1WHxj4N3DUVxHTdZsNWBsH61Dfr6td9HHTbHKZ96gKsD6Uwwq4sj",
  "key1": "2E7WEzPhMzjnLcsFHmG9dGSwGpE1oKjqPUHxWAwuhABhSwe1sQevWK5kSZbvK36L7uWnRsUTy2Tv5Q6fF646nwY3",
  "key2": "637besS1TWpgovZijgfs8CFJtZqH2XaqEb2NSitW6ikjqMKerHRkxXB1by51AhB56QVBm9ZrGXEeepapd2E94jsm",
  "key3": "3iDH4u7gjw4vre8w1zLwJ2EJWdwqyEm7zzz7MJ4YnKpHvoh63K3C3sv7FzDHWgVSwX5poXxYqfzrBiTiEPLYtKAR",
  "key4": "5foZq7Hd1g6zx2YcWrLAAdTG9jYV7Fmiztcbptqyx95qMGrmXgKRMPmPYgc4hUhv9N3jzxNxYHJkRiaKTfF5xHLR",
  "key5": "46znKLfxQRHgfxvxvTeNoWZDhqasqBB4axyWGAUqoaPNK8iEk8LvxNekiE9PQcHGCecao7NJS5etgJX32E4WfXES",
  "key6": "4XGFULZaWusiS76LNjroSXLxkbCHmb6P7UfmrR3CJe6tLAWQ4PnwUAkKAb1wrn4YPtJeTjjtVA9uCaPhSsZQrS5N",
  "key7": "5sqBtqJafesSTQ5dKikVCHzFNS5zADyqXCGQouLULY9885E4di8JXN3KAZC2JqQrqycRFC2NF7tJQsFtpQdxShvf",
  "key8": "4ASkjdMpAhNt6jwZE4mN2hPcsFVNLqtUhg7oT4PJNcpUGR68FvgD4xy5RVMhBB9uKexyg8cq5QUhPKjrgY8w2iW1",
  "key9": "1VL3zGFbymEvpBFVafAFFJTJky9hVTn66YXAstu4D5Zg4NrrstpVdWRKQd1RMdVgzih96Er7yU3hf8vYtvWmETA",
  "key10": "2qo9bXBMTRYd2q8tYz5awq8NxuLX1ZSKzj6vAa5ZSCjbFYoW24qXXpS43nbWNVmLgWgamoCPCBpYkjXRo4c7XyS5",
  "key11": "5FU2ZAGhNqz349CbedpvyvZ8Sw8avdjUxrktiaDZ8xRAVJLEeg5Gdqtpiooocjd4qnjQf3MRcXMSWVt9yjyJu5Hc",
  "key12": "RSiusvghiuTc1UnPXHLEV4K9rBvAXZzuSmEMSn2zrtqWBU7tvmTA935oMWmRzn4oqX3aZHHW43fYyiLq7VmXZrM",
  "key13": "3ENxkztVYhiNt4LMQ8ewnDdxAtiWXMvnwkeXgLpJFNhkVxwFKinTiaNxtf4bJBbAzHeTvN3dRAGDMWJK7DWHHAh4",
  "key14": "4ZYNxYNwG91qu5X8fQ7nxyJdSPbLAcqtbw94YvragyxiJ8RPTvZzWVSurmwfLn2gUj1FtbGKdd7QXSoVLXmYXLWY",
  "key15": "rk5Go5riAkPERLXDzFL9QReRrpNguQZ2yVnZUumSa1gArKmagxEfKqEE7AppgBkM9eaMzNSdiVcjBsWpkwcLWws",
  "key16": "Jf5E3A7wFzTVYKQxqqGEjXzGVJn68i5NUMjmymq6YePKtofYK7Hj6NF9SuzoqQmWVmbJkbBYR8Mdz5McwMzCvJN",
  "key17": "5iyXvdy7mrbR1YQMAQqxY8a6TTdz8atrQqrcTfhRehEbkhjcTj1Un4FHtqCDFMfdx9ci7BknEMvdNkhwuuTk5ZP4",
  "key18": "66txo1uAr582Twt66zPxmg7k8FhHxs9SZdbRqtuBiTesqT7L7RLwae4JdPxpY2WgYYqNgoTkac2way4BnkoDyzAa",
  "key19": "3HZ8nF66M6g133CTQLrb7cqMVJFnHcKauM36oPv1fjbLMNe7JJN3qN8eGQJnqmGLQkgAnXEawrUzDhqCYPymxLjM",
  "key20": "5FaG3HJjY42Uz2w98zvYHaN2wfc2S6RVRmSCbKFmLC7nvHvUgbkcbPQA9yHucaHiQmF8hWqWFvV467BYhnNw7xzJ",
  "key21": "v47ayMebHEGty2aQ1EDwLJ2jeXnfcoN1AMecySfwpmVLVndjBL8KauJkWgMb7ob2z8meKRPHhrKCwS4ome5zmjD",
  "key22": "5yV5f7sHe8p3uLCJGkkHpdLEoE7RBmphzBUz1JaRVD7UmxZuQzJLSyRjjzMG8fuLduvcVcSZAUXLfyzhXrz9cTj",
  "key23": "3jWmZobjzdjRQyT3SxrmXAxRrkNfuJsovy3WARjYVFhPNNo6j6noj5iX3mwhW42nHpYGVk1GdBLC1PdcHCMYzoE5",
  "key24": "5DL6MNc4Zq8ZscZ1oVqDrmte89Fzn7BqtVs1cfEduXtCYvzSokmYLbWcph9KEEz47WJd2VU5kUoG9kWSuJhn8vp2",
  "key25": "2PECsBWCQq5bABbxXJQBdVyKSLFhRM8wwbSao9hZGJPoYFrBkvLJGSp8W4JcWNbF4vVUGhiizHSgvqxMoGz1EfiL"
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
