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
    "Utx8o16NFvUUW9rZv44E4CmCUcrae7PctHTATV1VvA7D8a2e3MRpk5t41NGELkHgJzmy1YPfBQDfgyrrhvJN32H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GbrzfaGJicSR43sXcskPay5tSx6YQdeRpcJu1X6XKTckETKs1UBE9APkDU8Apb8XStmysENUtqkmCSi1FNvDLjc",
  "key1": "2Fm8xzTDW67oXizWXJfnVqmnbgtdnhRt4CnCuJ8LHkGALw2oeRBjJteUKYu1mZv3tPUm4tXrAEUr73fu2sAmuzXX",
  "key2": "5Vb4U5sSVN84TBGbiBEGYef4fKrPT3AfrTdqnmhtHRZLzs9c1XMZANGTQGp4ajtD6dH6cup3Zqrf4ke1dvm6FP2a",
  "key3": "Ga7F1KZyzLTT7fAPmJJq7FwiQiPeFrsBSxANxa7j2fsrZZDgRHHsmgkaPGymRsYTzSrXJoLoAea76K7XWCQ8JDU",
  "key4": "36qTJNrykNgR7tk7kj3F5feTRHPzrjjvwx2PFNBiftYLchwyQCWwmNJgb1nndHhJVonpXwBVoAYioCQoBcuFTSYJ",
  "key5": "4oM283LPQoWyuJUrUQwBUikJzBA476QRiDcQ8MKaMkLhpzLCg413U9rEphra48Nn9csNsTr7ji517o9Gj8JEczgm",
  "key6": "5RUuse4bsqAPiUvw2EF46tQBAnUvKfKKFz8gscYQUVEt55oHCGWbQ6BP3dhyeEDfnVifTEJn8DEUGrn9K3GRJe6r",
  "key7": "5GaT3Asj2gcVKt4teXb7QkfdmBUL1HzhnEQ4ctArn5qYjkrmTAxgP5hhdxmA6mcRF3p65RxBJHGNsu1xeKw4hXww",
  "key8": "2DuKwdf9MWaEfUAVtjMfn8LPXWueas8iZCCz1WNZMJ8owjRSsFtnYSKRjsdxGeyZhvmrR8FRsLtwum95hvXE5eZT",
  "key9": "3syacygAXx7L6szdetbbBV92ZD9WbFNeDHmFDGYn9y1JwoaBi9QH6CZiJBULLkiv5EfvhVHwyLmVLcprdKXub2oy",
  "key10": "4SQKC1qLBVZokYxLB94CZfa7ZGUqR2ZFszBCdp5kExSXAS73Jf6TRTm8acn6Nva2RXqFqmT6mpEnkfMbKpvkZWyu",
  "key11": "5vQeP59W7bj5q2KTYf5V1YYq43DDoaTJtvC7BJUUrck4LhxaKmvAwZAcRpq2p6KWp2zV6a9EgyV17QEbfayZNwYH",
  "key12": "5wL2R9uJePwndWPvvvQqznhk8erBaqcnGye6uhQkLeR13vsiHKjMcEeNXg32LRDSUeELvVWGyCyBUSrqddH8vxcD",
  "key13": "5rPMxsdMenXFvQWC4EQjrx1qk5ouhx6RsU6qwoZ5mtHrH7LEXsN3TQNncZXbuk64fftdjzCY99M8J4Xc2QiMZp6n",
  "key14": "24EbSov5TboJyeiaiwEJ55C2RCLqtzGZ2o1qf5sE5LnjtLtBEzEasHhMy9wzDk9PJFhFSJJrcf7wSAu9VzQ7SYyK",
  "key15": "5jdMR1k1kV5JvTcmBWNtb1drcNVjEbWcWPem4uZmD3ryyVPVhz3gasen4JCj42Y4n7VBY7uYNwMQoM28aRnafHnQ",
  "key16": "WGFM6n5HTf8oBaWWedvsFAmmSPanN3X228XzqNmBGcx7VV28wQPhnZywDw2gu596gsuZQNCQvipLdeY2wGPBYjd",
  "key17": "dTRKqaRutivVh4b1METhw4xaz2XWp6YTNZ9Tr8sVf8MAfcpKV3JPyba3gjZo6uX1ZK51ADrybqNAvwyrzzVupAN",
  "key18": "4sTTXGC3Fu7SPuA6XDGF2YvvrtgteGTcsd1SKuYGsFMAQjztghRZbAmqTqSoQANmrH8B7ynBTEGhtdC7QdpGVmLT",
  "key19": "4ELf4N65wooJWrbb7YgbrrrBG6L583uLqRY57daWHYxuW33Ya52cytpWNRZbQLhBeFECjr59CFN3TtRHYN8zqR66",
  "key20": "5ZNk95gMYnvdvb9nn2zRCyH8Ue3xDWGCsA2fjxtHT4bv4AhNwa9D7ezXTfUpCxKDuNchZk6KTdKZMf5UBEjBL4Ys",
  "key21": "5Y7WfhAfdVZEskCh6BbgKJnoPjz5FjcFT2ec7MG7dM1DbinuTgYeVgzv4qF6oEFiQFXw9U1NFZAEbnnd2J5Yporq",
  "key22": "5FVmV4fttSCqJ4zXHYjc9qTrp4HW4APcAPzz52QnxdWsSzhvZpw1p3vggdP9yFon74PDdKpsYuAsFCr9y27Rsgeq",
  "key23": "35nsLqL7H1vNuP2tvMxm3PkX8G7DMUbU4m7N596pse4Ajym8rmD8zBVDvveU2YgBh7jKkCYaDdBCC57FQ8GyqsiU",
  "key24": "2eDuhDLrs2iDAvibprxtJiuohpPehtXzpFpQdQQ8RcVvJAZeXXutUpoa9T7Cz1FSZX6j6VGuehx38qpcdq3xFJBZ",
  "key25": "5dsXGWzmDcJqK9EC8rAcEc1kddgJR15s1NJ6wMmbWz7nyt9VUdGpstFXDmDSKFfkW1dNuGmG8wYdV9ogHgLCBpeS",
  "key26": "4qJyeBc1xSwxzhKAVT73UdDHiG4ZMpX5sdyqV8zmgY4qQTWf2Y7ZhdvE7CZDZhf2hf9VXccvyYGAc3Qg1psPTqno",
  "key27": "GvRDbvnqik1bHFb6M7ofZmvgc7aVH1VW8BrKy8VhVGtZN1K4bETaK9QcJzpBnMfj1on923rPUHVy8qLMRmBsvdJ",
  "key28": "43C9g7d7jTSQKtjDnY4nLFrnyxVjBjHcD79pXSnHWdsfTst4nnNzZdgfmJF2ejHs2gGnjMSfgSD9J4kJ9tBizpcF",
  "key29": "6HVVzPY7jgVxDBcpiQNxxGzRo5yr7SvM3bZxssbCDjjJJHEPRFa4WHdC4mDY36ZX3pZeniQzuzRh8hiRh6qEgcp",
  "key30": "2sN3rfwQD2DFxifeCEWA2oBSzwYEdzKe2FnsCHxqmv2yKDNFrN1569CE1257EEsnSCpyPLdEWDRkZWvwLYghEnQW",
  "key31": "5gM9WbTSFxkzrCNeDjKWjFhNwQZ9a82mF4GUiB6v6XynQegqZh9q9zQqguifxCFjSmErWmpp6jMD62oGHhhzqnyu",
  "key32": "643jnmZNM67RLXoxmoVaGoecmpaszosrRf8EyXF3PA2WiApmLf3vL6QkZnwXwNzhUQQv4NM39UQwdUEtHHXSYunU",
  "key33": "3r6NRNYno8fpsWNBSm3UNYLz6F4JKpkeLanEkKrXs3JGZSo6JcxoDgr9f39HwowR3ta4AQ24WjcuK41KJQscbaYA",
  "key34": "N3ojj4bN4u3PFhZ8YDu9gUo4mMnnvADRhUZtJ7pDoeX6u5tn4vaKDNbGJLgfuTHC8945SuYcFMPYRcctHKdrHAN",
  "key35": "4JpSPNW29uZRKeZyKXNF6eJVqPjVZTskiU9YwRTqhA1ypS7th6eAAYsSkCJ8XZtYiX2pQYnT8KXdjGg5m7NwXBev",
  "key36": "3sNGGyWwGVyf1mPY834ytpqy7UW1vn5U4JaRPj8cXaNTyQ1MDVQnfUYEY9jFd7eD3e4MCoJNpPctiydvYK6n2LiG",
  "key37": "64D6dqEm6y1nKZeuXXhjo7rnusSCvoKam43eY7ujq52TXukEQbxrPqT6qfBywgdjgFa4xawRMcbNb7sNKUNexb1Z",
  "key38": "3nbFnQK9GkDENHTLxD1YkMsa5YttSTqBYbPaDS28HDmz12oU2aMTQDiRg2MpD7FTNSVdbbnRADsnLZmQXCPPZX5L",
  "key39": "2aQhxHGckSfHvKuFijPtkimiHbzVX6V8qpKojbb6teHVQfLBLXzJEpCs5d3WpQe48T9oJrNQw4fxWnu3wTgEtfAQ",
  "key40": "V4ML67VCQ9vX87auXaUnXWBYviMZZvB4cfnmS6QUK8bnCDZaFixn7kqi5yniBBjiEu4pYWYowouYaWWR4Te3onQ",
  "key41": "5tVMYGYm4QzXW3azpvkKgrFav5aby8qbB2uyMpZ6ZEu6B1Pa7hrn5phwLyzrt7TkSyNo19SfrksGzaBcAt7oJqZp"
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
