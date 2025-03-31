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
    "2F8N8ZjXugAL42zgJEgRT5GvrjoVt3xNFxvKVKtU7aHjcnaFKSrgtK8sbaEFuN7Ywf6r23JDev3Lv1yTbU2c1pv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28pVDRHVDRLGNYhjYwYjdC1fvJo99HNvvMeo42asCFAhNaAWyiNtFb1tJRNxfCLmsut9o1PoZw6bax4d6pjFXo7B",
  "key1": "4JL6WzaGdpztzAUBDQC9AUzr5ZmhXi8WD4TsTZjM35ACyBRPy7ZsxzrxkPSoAv5Br4tuq7vu5AQuvNhbt7wH4KQh",
  "key2": "5yYdadx8Kxd1oExH5w2z3SyiDWmoV7nJgNXPL17WkunmcJcHvSXPfmVpnnbxkFhe9qbW7gbHVeU9mR16Xxv5Fr69",
  "key3": "4XudNrSYkV8pazbSNezwzTBxFQ2voebRNuLBN6gFwuxBauAFLTD6wffShADXiZwe8hDXBCL45ixoqJT8arh7vKsQ",
  "key4": "355sjc8QuzhNhD2EiRpGfJZTMqtocLYsMKjunNbCVUvzHA4x5UiBcVABXsxpcyfucwXHpeJ2RBTx5ByB4DzMnArc",
  "key5": "jCFFRWHynGX2jow7zQFW2Pw7xeqHHD4sbQuf7NGXgKAgXnL5g6d4uNNcNpBhCWwA6N9aoFbRBkNHAei2VWJPTtr",
  "key6": "3bJVj2dxn1Yuf4uocJw28XkdaDU7mGCwVRj7ti5HB25pgKH6YQ4ctrmoatunJbvWFHFXkw1sG6oYAfAqD8FNcWqt",
  "key7": "5ZKiFtxTsZjsyiMxwvoed9rE8ZAtAma4RzzCXTCYU6KtMixaz5h93bZiJyWi36bha196D9kBrxXa1h9VhNXAFY6L",
  "key8": "5LuYFHvynobapBe6tnoCQohmScfBurZx6NCcmewHD3LfbmQMa1SnFtZf9PimfWyZjU45PV9LJSQyaFYeyyMw22TY",
  "key9": "38nigSovxT1FcjSmPYf1yy19SVLs6iMfMQz7XPg1ALtqM9pExN7DBXSTps6qhSjK6kja6L4522bxX7KdVMLUTvn9",
  "key10": "dSG1ksZo9au97xEKQRwq4Et5bQmEMqEXaAsSQS99g1jh7ai3LjrtVqC3XyZhZ3wRxzzZG3a5muXwZUxchtQsE6t",
  "key11": "tSjeV4KFNfsu56S4hyv5RB9f22Swp555TotueZ4CmDZciLbcD7uLk6cY1JbdxzZRZwnS1NEmif44AJqGVTvPAMF",
  "key12": "4P67z9z5oSp2C8jEKeptGBKzF9SvV6MmAJ76quLRYjBkN6vs2PCdjhaEaZDcD9AH8HSqiDy7j8VpmFH9y9wZxFJr",
  "key13": "35M319WBKq6AQBpjbLiNN5X1jTbY87XuZhDh247hHWqmbywUfZwgjd6ihRaQ9Bi5JZeZAAjzYTDpJHS1nvKX2J1p",
  "key14": "3bR7TbDeKeYANFGLmogdDdEyh81kydJmHiEhpTNU3EoBUB6Xz9m3Z4oM2MUjPBrmhchKgzEwRgdiQYCkPXSywfe7",
  "key15": "5WZCZTyJoAFBSxdBh7T8TXUzWRcUyTBKcYwNHfPA4p5Sde2TFC8tcBMBH6g5gSsog1TYBeX2cuMBqEphrD9L8iDU",
  "key16": "3f38iAE6UJQMxpmfvLkfUodhAFfu7c4k5cLzfDqsXuZNRJQ3J2M754yTqgFAqTunA4ykYaAehHkx7gsyec64kAd1",
  "key17": "5F4yUx7v7gVcqxrAsukuwaj3GRsGrQQbmdiF4vrLkzQdjobd2N6BjHiDmApKzaEMz8xJjHobPT2sH42zHN4k8znL",
  "key18": "cjTwbSzfFPLkQ5hXAVo4uL7oQMU3Y5xEiSawgkhWE3tKxh6ySbd8krPFVRMtQTdu82VYhfrA7ryFxGWTbHbDkum",
  "key19": "28k6CH929r8GFPS87apDRj64UDzyvTmfgF9e6uNmtuXzvJStduU69yxJuPyWRYHANccGVFUtG522eofDWvTDA837",
  "key20": "5CNqtYGwLqKgz7PopkdCDDkjaartcV3jCMJkdyiUifKpnDcqW7XqReHg3w6taB7UfRYLxbPFt7AN7vvAoTTXUir2",
  "key21": "5m5y6UTx7wKn6CXJiBeuzJ2947jMZd216G1wfZBTKJC1LNRLUDZYCmnFh7L8YwGYmUEr8cT1ozkUJ6nkxdbfm717",
  "key22": "4KxPkWmwTds8LjrQqmmmEzfetbBijhTz3DZjpHRs4oT5NXUZXbU9ApicSwARe621J1etNqdo113yTih7EeSpHZE4",
  "key23": "5ufj4N2YUsrsJ5HEhTW4xQqW9Mqv5RZZtooWizCCL9aVCX9mqH4hyqmFTxshDGNyk1wsFyAyaxmrhJYKGtuRjWxQ",
  "key24": "3fN9SMe8SaNNfSBqKMd6EuzfSofmj2tTA4VYNQb7pUFkpsx9kagwH1wrc1VS5KRePRzGxSe8H7av7NBNgQfrkJhi",
  "key25": "2g95c2Qz2F8cGXApdhVg7r9nQZw7YpArCcD2wwEqFXwfJjDQPphzzeJ83uQo1Dxb4HNWY1XS5S2kksW7tgCT5iEJ",
  "key26": "3sELpHMee9KHLhN54AfZrK6mtEbBjZsmgCa4eKN5gNMqfdm6kyenVzxZUQrAxaCVQwmzaGxMjD3n6QLjQEyPZ47n",
  "key27": "2EEgiB41nRJPqyJLa1uhkQNgQ7gQxPUgP1nRdKQrRrT1mXQhQGDqq96pHnRnGqz3ETjciKRjSabdgsVFi5rdH8Do",
  "key28": "4Sk3tKcmruhBr12jf57Wgivn7o5NFxVzWzkARCbKv4iXUyihAAnWroy4HGSFsQ8pzLaCQxE2PRaRJ2byjcBK9tis"
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
