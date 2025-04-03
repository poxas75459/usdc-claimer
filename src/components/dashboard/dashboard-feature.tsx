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
    "4rHPdjtJsdQFengF5zcEtGPc5ERhuB6Sb6opr1sKBuNfXkF8vYqC4TxrBSuDK4JDJ4ve7JeJtWGfFRypxxi2vm99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUYgFSjhmGXi3r65hzmjJNjMQzFxSLCpMJ3WAejm5SqwMADcx8EcBhuZvia7CL65DuyTf4Pc54cdFQZzdaEg61X",
  "key1": "2ynrPzKn4iE5L8mPDKizuvQ3ZDvc9PQdqFd8qd4t1nixtVEqaFqZWNaZnSrkzuhttqqDfYRcNLybXEEWw6PnCDWq",
  "key2": "5W5yvZTDs26vxt4ykqMWEUGJWXYUmu2EgGejwtUdHdCUBscRAPxCpxRMwJC9GLsk4tjGEG8nCTkCMWPcNGWDJrsB",
  "key3": "4hm5D7cxSA9QKAwDuAZe4muvAYZNLcrfe2vo8rVTo4uX49QAjyEP1Tqgom8hx5nB9u7bRLWBH8vxVs61RnsZ7KMa",
  "key4": "5gaPi86jTqfQRP9xTxuVsfbYKRmyFr2YwhL9kpmGeAsxVD7wFLy8kLTBeDf6EXZf9LPAppzYpFeSourqeJRkPn35",
  "key5": "3RNJUYB4gsz4shqyQQLWySTDhrV4BbmRQkaXSbVjd5xQN43M7C8iAoUmw74JTFV4Dea18W3fkDXeyVK1eMnonKBX",
  "key6": "3yBiARWZzfErQ8daJt5ovHH8xzhH9z4bBRqQckyvcyWDDyKockx6kheJUeaCWeR1Xywh3NXzFym6dLvBamV3JuAY",
  "key7": "3wDw49C5HSKncBbwGo52iyqxWUeFvmXV19KECRW9U5dxnVeNDd588LF26N4qprUZdhJStUCCdHmVNQyAQCuLRnnv",
  "key8": "5WKFt6TbuvPys5v8xpt3KubqNJg5oEHitzgUzR7H88fS5x1nVwZuXNuKA2SQ1WhoJ6RBYjGbUNam8iPNtvPQkHer",
  "key9": "2AYW4zv7ccDAV43d8VAWs6kZjNoHXNJ1wfmSc6m3SApZpbstBUoVMzDxzGzRN4R2M7X498FCZYJizyTvwkP3Gvbi",
  "key10": "2mA8jKmbQMgzeEtRBNfBw3dib9bXVJEwi2pAALkSHM8rT5vk89nU4pEt1THD6WsQLCJJEd7VSdqez7hyDc3UgYiT",
  "key11": "5A93D3oSgU2b7KQKKFTqPcbvSNWc5zzJY6fQrpvG2vUATvuyMHEyPU3zqvAc2iLR6Hw9bS5KRg9FMg4zA71YS9Ud",
  "key12": "21xd1duaxAZQqTUY8Fn4box95pRck7Q9hdZ3mey3PCugFc4gt83jPPFYz3eJ8Bc1iJ3ggb8aR9eyM5FURZoRaSEc",
  "key13": "5TxRFnpwyiqbvd3wHAZYq27G6bF1gP3iCihHxppF5B7DteHHrZW5Ea7b4CmZiAcvvmkyQfUG767DMkqEbmguDKsc",
  "key14": "26gDm1vyXQ7z7jXHUfryEhaH8JRXEmmT13g9zfFe9YNxrbSi5sgMphKcyrvKVEpG3jzdxyYPGgnthqj3NMjT9e8k",
  "key15": "5zzsBBt3XKiffG61gsafq1ZQUokbiKjvuRsqExB6o6xg2dGD5X46krJugnmAGgPjmZfXixJ2W876NAv5KExp9QEL",
  "key16": "3Hoc7zjwudTyoyBQekQ4noqsEBLyhwX1Gm1byXdmW6mkUN9yPo8gGHSrB7FeHgyprxgX8YRjuf2nFmBxffpDSjT8",
  "key17": "3oQbmyex3r49s9N5Rgv2DNvonX7y4SgEbm2PvrEkKP6VGNQBQitjHKAGHWQw9W1NVDSkJgCFmpyTUV2qfs4Hd1it",
  "key18": "33eXcFBo8ubiBhF2itxrFwWizQJJrTJAbaHLfCLvXw7ZTgenjHMecjq2L99t1aZyx1X24RNTcBAiih7x8Cg4xPjj",
  "key19": "42ksGMKSroRHwNEUCmuNcKn4mKjoC34JG7yaXnxCT87YGJB3TWyqiZZocU7Px58o97eEArDguJow69VaHwRC8Rg1",
  "key20": "611uE7rtDAtxCJWJQNSHwX1NeCtEabaAAQXno6u4KE8mg7JKGKrLhfJ8tw3Aeux7txYTUEr2VGKxsrP3sYbZPML2",
  "key21": "2U2hGkMzZnzY1fCchThgk9F3thQF5PM8Jgg2u7n9VVEPwDYiPik9oXAJo2DHWM2rG56mqFeYaC8nHPsgLHJdHc7A",
  "key22": "5eaocvvqpyQudmvd6As1ito5u6c9JpBAsHq2HSEJpVXf4H8dvtHE9hv5g8AGweCLDkTwYsYLvtZwjXwmRsjaa6Sb",
  "key23": "4J3aYHFjj7FKnzbEsjWQZW7b3wxSkYDMSDo1mWpT2oCxoc72d2uRZrngXqSFSsbHFVB46zzVJEHiHpGEqJxDLtm2",
  "key24": "3HaiZ8quE8VuqFAUkUjrU3UCPd6zAZ9imJak7tZYH6NAvmUj2LJDRYuW3uUtARZKyBWQHEGRFeW8Cd8nFBcCXyFc",
  "key25": "3uUBvuy2yD3B1tsPNUqxbVcBDzPyAS6faJYxbRdn64GPCpysXHAVDDbsqVPbdaxux5Tcgy7nMp8gJWUstNs2zXur",
  "key26": "344d54LsvYjYAdGLyc5KpXaAL7PNc4WoTcZgoGMnt937osYq3xsJc2agwtK5ByzoS7aSaWC73zg8VsxKPqnJwzMp",
  "key27": "35LM5pg9FvnyNWgYoZPHmjZKKWpZXTMrKiznYa5SnZqZdNfeqetqCETfJkXkFwsvJgGEH1iAcUCxzEVUaTUyiWjy",
  "key28": "4DNyfoNjNXDEYSTozxzGBtJD4EQu4xSTU2AfcAMFod44tHaciYNELwiLhrDs7g58poYVyAJEb2XxfSGnzKTLYP2c",
  "key29": "5U1LNJFAEJ3ifYSNK3Tu8tDbi6EuQ2hHewWfqjCmorkWCXSb9mZ7eLa1NBrFxpEsUGuFay4M9igtGJaH6hPXM3Xi",
  "key30": "4ZX3BJGKVXSpfdpbkGohEBdXSo6PSgL4kSYfzbSe5o3moSeq8ETX2hHMfRWa2bibj6ZxNz9GSVUuRr3mPk5McwXw",
  "key31": "2GFr5aRDdia5HbMkfbYcWeX8bKMBmGJTRUepijzoVcRes3jqikfhr6V6xFrsgYLyUUqJUBkZ5tw4JW8yLAw5mijQ",
  "key32": "48cUSN8FLtHMwovyw5JEi2L2PbWxcLu9fVHhzX5MZBb8VncRrvJNnXiTdsBsh1wN7KMin7dKtHxe2q7ojRR9Voe7",
  "key33": "VshgHcjMwftzp4bvPRerxfcx8UfiBkEWYZsK2Hj8gcohavU22b2D9HJGRDs9gF3jnxNrcFGnSYDMYJMTvo34Gih",
  "key34": "4MAbairYnMhRB4zputpYAzi1gAa9b5VCCm9AVaowPXUncnFgSymXn6g74anXaTegHqk6LZjxc99b6mxW3D7xaByb",
  "key35": "3ZumRM4moSeoxRy13hXzbVhJxMa7vohLAPR4Cp3nRYW4y3mfHyNh1FWbEYUQP7uCefH4yAXeiW9LS1cP6YxP6VQ",
  "key36": "53VTAu1gQivXSmZ2tbQ8yLKtu988b8tU6ejt5u6eVfiEyKws8yN6Lmtp1pJLWp72FWxd1o7HbLbXRLDXeTHhNdAA",
  "key37": "2Cs8TRYUmMQP9Ccr7YqH6RcseJt86ECrKNK4q28caPbnAmmLgUryuWbrG2RB2JWX8tfjgTqDsCZ2yCHhLiw1RCxf",
  "key38": "2nD3KHFBig7hM32Q3yGisr59RTwBdiGMVgut1L7NWMmUvK7ZcW6vvQNvJa3SLy8gbVNdBzJqeqers7fJCApyJ1Jc",
  "key39": "4L9uJBFULVN7MNRX5jubZpty6xV6rUr47xrfooubnsEjM6begcrqTS8SGUGeaQTApQaXdHbPEjvSigCtebGrNMNv"
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
