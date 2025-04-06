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
    "3yaUeGZcxBfWxpVfeLs3agM68Rw9BL6pQGd1Q9pc8DL8xrgPaNHpviK5tX12B7KkKEmuzYkjT3C4u6QKUEYUEkq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7BqoxJtCjY6YLbtmDwJBs8scasAhfq6Ki8LmqmhnVoocUhSaCG7BZyUrcBYkT42siuC6Yhs3W1pTJfZysxCW1X",
  "key1": "4qEGPBsiU93VSXAYsJeVQkJY4YL7WtGpkg4aif4EfCnUJLChuEMMUeSWXBg9hBwfv6nWgtZHpAKSRpydiqqquxwN",
  "key2": "3dJwwMBa1Q46aqrG2bLxEQavB91LzyVCbYddNL9dCjWEqTyDEjWkfiYqk83kM6vcCFuMyeKfLb2RrTRQGAge2aNk",
  "key3": "23ZtFT5uwJ4gMZ7SWeJZj4Fjyq8WCTV4i8yrwc661vGMpsx4oytGdqXtLc15kvw8GUhGUXpRpQaXRf8sj6rTHyV9",
  "key4": "oG5H4hsz92QCRMv1Lhtgt7nMQnkJ9G1Ry9L4b9pXxfYf5TAqCmBY7tHtTfBVHA3mcop8x6NhQC62vzYjhATi76U",
  "key5": "4UxH6hgxvS3nexyhvCRJqf9f88zr53hZ9vzr586KCcKTn6723ErqoR1p7sbRGEQLttcYP5zfF2MPQEJxt453L8Rf",
  "key6": "XcjvtzAtSPsSF7gKB9vnBYhoX3zSwmY5MvE82bKqyXG3TGfprzYTeUHKhF9mNYxy5NvBocnLLpWKSWXLdtaiUwq",
  "key7": "5t53WKKuGZEkRXhkz9wBUvHYNk8xmFqcnVgX6ktS9XR9wrHHehVoo6Gfyam2gs4FJ7mXWRQaSH44WGBTdmS4tFo5",
  "key8": "3uMHfNz3e2XJRedJLDj67G9KtFRhLsNdfFLdiATRqBUnFGpS4Faedf2B3G2XhYFvxFeGSsvivzJwrNuufYjFnhwc",
  "key9": "5oKaYb2cf8SyGKfKNA1FN5DNWECepBo9EjVe9CvYiyEmywVikit9TCj9tLtd7ADXjmo9CyEPkF7ktb79aynDXz5D",
  "key10": "2qGPdgdHRHAoXgkk9VFJbtq9Db11zNDKPsZ2xG1JWErqXB9n5do1c6xjM7WRWezUn9mLj5jBJYLJjAg5G8Us87TF",
  "key11": "4bCUiemqehxEmiH74gBWgvpzeGsbgHmockXtQhwUSUsZpteVZvDEfNWVb6v6vcdhCAVGi9Zj9GEw4XZiQNUvaDUy",
  "key12": "34u1tkCFqgNnhd1JGhJSeujfcoJKGoX9aSPteYL2GnHAxe7TjidjExTYMhExSM7eaULGtzMDRcGn7vKhxzUdN1oX",
  "key13": "54rSWWb6cj6rjFEDr2hgtG9VNS6FQLgXrZEGF7r1tFxa7cgT9MqYtY4ktFd3o512QuKPXyhS5yCYsTqAnGg3QqRe",
  "key14": "5hyQ8tsPdkQSKP3vDHX1swByPoXpqibYHSC3mdCHkgmKZv2Y8JME6SA6iXVz7ScHx1p3VVxP4YrHDxzwp5vWsJpB",
  "key15": "MCYtbhqLZwKSo1wAZYLg8mYrAPyh8Wc9N8VYSUV6UTZQeosTByn3xNmocPz1wCdwGgcMdrZGHBGpAMNzZnND9oL",
  "key16": "pXFmE5Rq7No3TPY3HFkNfwKMZ4pprfPUCbL8ZnQrof7KC3VfojbDnmQdaqAi8VhBbs52ACWVonxzfSFT9R1WkBc",
  "key17": "5i47pP5gqUmWA8sQMGefkNDdWL8sQ9FKAJrwQYFRh6MRAA4kQxZCkyNQ5iuY9QFA227cNmGSy8o1bawnC8cJvWyK",
  "key18": "5SUxqcnCCUJ7xdxBCuJnrsLAGd1uzDLvTnPCL9WojWyETNzbsE2HsPq1VArcTLDzeUbR1sBgMvxsD8pf2eTsJGB8",
  "key19": "3uKeLjuKwagcyxcsgkFE22eqg667n9tYawS9RQ4hcNRJ1b3ccSMpxvkbGNXR4f3tBa6FiLeGNmhkFTWSNDSMnAGt",
  "key20": "4KET95tHNvW6C3iatN843BA2VZZ5fyuQzNxLqJ1zRJ6rnu4qQz5MVVHRPQW2ztN8bXLpw9wrpB1v96eUkSYiMRJZ",
  "key21": "5BNvs7bJonJ7M5bLkCuXNDtsJnZ6Uhvz6UL1wwXX1huJPBTpYYjGDSLoKMJm8j9cXHoAAXgmFJWoi67HyynTyJBU",
  "key22": "5GnfJWmJefQDgiLm5rFQS2XZmaiwh385JN1698bBJBWgzoVhCTFysANbDmgqpQtjNmHxShAgQsZW7qasBbz2VZRz",
  "key23": "3p5QoMQPXYmLG7JwaPk3HMTv6WwcbGqfwMx29qxKPtQNYMi77wTnegHFkRsUdYzQHKuZ5kG4EpmBhk7RyD8WcWYA",
  "key24": "2zysJdSV9VcLBHYkVujRLZvYGftxyNFqfkfh5KWb5qPK6EqBaGSs8QAXAFniMeQBZChzzzBfWvy2NnF9YDDct6bK",
  "key25": "5AySc98gjBADM6woBPoxeiUcd2yT2Z2mxttdgK45pNPWuY9eiE8iVzR2BAogdSPef1xamzHRKGjQZYescpennvHk",
  "key26": "4LgHqMJecpNUZxqDssRbJNyd6kDKtx1VnzrHVnKjjKNJSHX4PxUCYURfiLf6qm5CdFdhvnzMEkzLyDzrwZgTQHro"
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
