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
    "4PwbKKmP1kUToQ5d3DhhGfqNTUFX9XgJQZUdm7TYig3RnbptJSPtu8Rg9CipBB1n177aoaFhWJjw7vnEyXRA4SKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UfoRQRaecsGqBTzML5EbWz9F6aoZozqr78abjz2hzAvnNuK8eHEfiRpVhtUPqVQkShawA9KmqGjbdknYVbgxvUj",
  "key1": "5WhGXN8vEucGT5z12fzTUxd9eWNob1nGy3AVUhRaCE8uPB8kpLNdvHV72oYmPo2EbwqD7KCzVcanPFPbinGNnWKJ",
  "key2": "3oAA9C7SF22WKSypvctevpXiPQ9hmP6s9immQaJ97jBxRiQvbrSJ94xEQStT7QMAoSMoCvi5NaLJ7Gk79mJ7LPVv",
  "key3": "1LbBkM4ngJXopMySq7aRr6m1yDK8SrtzLvvGhLXrQgtkB8akuZqNBjQeaXCBuL7oRqLvxFGShkEfryqfQRW42HP",
  "key4": "4aP14pychTEsZFepgih9yhegpS7unwruPZLyzBHLDbv2d7CqiHY9Gr5gixsUfdUs1qwtgsisZhGaRMCScRcqyqPq",
  "key5": "5LZDbwvc9LVPFtB36oostVQ6cMfo69nYpmJ7A38nF76YxWg3kg6wEw2wTXK66X9mg7WfdyTkJFHe2BwrXvfYNQFh",
  "key6": "2coWFZfejoi6nPn7p9QZLxzCfUePccCweVgkMPik1TbgDsq7EBDZwKD1o7wep44C67NakPWXCx8XVbQmciyC8uYe",
  "key7": "3Y8PzsoakUTMfwfzvLiBWCQ4d9KH9eUxn5sxzEStc8D74vUBCM3JY6JP75xEXmMLgjSdmHEUHHzQxy3NgYgVEqCc",
  "key8": "nsoAgVnGyLC1S18oLWyWN9MfREW5MGRoaDx5ALeuctmqzg5zq7EiQZThWjwHwsipTwazGe6xQja24mGFW4eCn9K",
  "key9": "5b8VRCoYzj59NyB8kMy9GXUJizwnE1tLnKSFaSUk72ZZmmzWvjqxeLSYxRfhuXfA5patAJDqQLyFSao565K5ZKT9",
  "key10": "ktV2fjuxQdF9gu4KGkHBqxMxkKTApNiTAFPUN6Qppk4oLvWofkuLMafq9uM1m9EXzBLz62yxrBq6567sqaS9Wgg",
  "key11": "2drkdUxAMf47dP6BEWQC63smXgoqSk3Pb45E8JnNvXB3SBtpHZqCVH4oSX5SFg1V254m1qb7rGzbtCUE3XefoR7M",
  "key12": "mtXBaka1JxpJx4rXjLh6htkg7XpHPycuKutLSvsr8mBtgBzmBaaAxu6xtPQhmiUVNhMeG1P5fHPahbNVFNfvU1r",
  "key13": "34dRHK7mtsNL1b67XK5r87d2M6oRPZY4nvSEkTEpGz5sb3puPtDfQVexb7pfT9AcRD5mRCA8cxtee8AwBdKRp7qH",
  "key14": "4ApikkcPgF6F1JtkCRpAUaZvNqyBrYxTPpg3nDZFAPcfFooGZzUCZ83xKsL9U7Vii1mZ7Mp8hUBkXkQDbcXZkgfE",
  "key15": "34aojeCh3h5fiWGXvkmi8sHg6hmMRYLpKMnWbM461J8GGwuzcq4KcFRE1tgEXiwruFuYy4vDVptnBi3sjoTcUtgE",
  "key16": "3NmE4J1PoATKq4hhCKFPHGTCNo4JvN2W1SJNxoZF26kbprm9jVxiF2iZTmK5qZHC1YpkD9G9YJB76VN8zaMBM4M2",
  "key17": "4LEvsjJFKQCRQtJk16WKKR9DrwDJb6fVUL7ipSvzTm5ceaqp2GCcqdWzgxTDJ2pBcdqRNmBu8GtEW1L5wv9D3kUv",
  "key18": "pg3SYGZs6irgUu2PhceCa6M7hVpcjRNpKkWFG4iG2NVN9hb1wxwyjk7D7o5KSNrtfP42fKAfbq2DYNEJi1rJdft",
  "key19": "3PkQZw1ctGnGKmEFR1jVn7GSGrq5v16BxmmLwV4zsoeKK2JupLX5x1x7hu9iZC5x4tvkLWXj3ew8FoXSSD8vuycg",
  "key20": "5pEWFPECoKeWtBYbPiEYviGCgxwa94r45DGiy9enf13j2yRurPE7vgYEXCFKaMFzhFjYKyjbM2ef6VRR1DGkoWjc",
  "key21": "5j4hDrwRHjbUQEHXrSho9gHm9Jaw138Mg7kE9fb5krUTaNZ6ZbiQEgewT2YjZwLh8u3P2J5zvMdAZSDVFtAPBPqH",
  "key22": "2CmD42sSTXqW1JeGBWx8z7gp3dWRVdrMU4SZXEQPb4S9tkHYzhwZXzdv1x96cou1h4vjGWWgtfjwHFPymtBrYySJ",
  "key23": "4gaQWCLNNVsugRVUUxLHcd3QXMBTS2YGuqVNBUHGv8Q2biSr5ju7iHqrgmj7oRYAG9ZNM2GPT6GRicn3o8mT4jdz",
  "key24": "5VtjGBhtCWhHnnuq2QgfBpgxCQhUktCfBo6oNhQoWNF1fVtZsRzArpLsUZMzPQwgzX6zLZBWYBUgTAyNxQQggJdT",
  "key25": "2Ar8btEZ9iCDjNxMcie7W2jrtJyB8EeodNmsv62bVwqi4sp6bLhiosBiwfiyaK9b3oakW5puobGUECxU5m86KRHJ",
  "key26": "2bA7A4jv8cVaAVQhe3h3FmNFGmSu4i2myiyg4YPVJfyehYJYhCS2Vm2mwKByFFPrAby5tkFMXcSBh4XBkVd98wj9",
  "key27": "2fqCKNqLXH4FqqndjP2Vmb7gywe73ypAbattSXREej7RPv1MnS8j8YFsQyHSEJmpXe1ocJiuQG8Mni8FCetUgvTN",
  "key28": "2y9B1q5AyrCawQ2yLW4yqNsv6UqsfB3KAGMBNrhLrCcu25xhNXKP8vBjpzDzjx221Nz7JJuTkND8H7EUtJyohjkP",
  "key29": "3YZnShhNsFWYSYNbAa5upgKE6tojyqZ8MnCeaXav1XZ3cnfJ1N9YByhxrT6fmi97SNyjpeuuL6BXTZzcSpzzNhXd",
  "key30": "2AK8zmG7iFDRKTyNZ2GQEFGLwmqY4ZgXypjnBE5UsNDNRGGg8SLekCEuJRyBWuS7chfcgkyMBqkSaUFuNPoQTY2Z",
  "key31": "4MLtZgMCWPMJLkUKfteD7J9eK3fmWzRKtGH2zR7Q5TbX9f2ULXkFt1Rq1UHBRTeY3bjdrZsojMndVmo1n2AgwA1J",
  "key32": "2VqUaczgGfMTX6z4cyjfqG55ZZXjj5jbGAQhoF3jZ28uVq97oMwa8Qz3XhxAQ9z7x5WoSdJUJxCvjaXCN34yGWTg",
  "key33": "4tYnQe3oVBYZKzgRebkpgkmfULF9UjqxGwDFdPZL3e2Y1fqcHm6zuN92cmbXe9e1EHnznpFVcuSsivAKRSpaSGkS",
  "key34": "44b4uMqwTCbNc6dtr52gbY5tQgGpuocig9cVxfXdKdX9aPG7NoFQHdKRPoJFU5JJfDpLyYNmAJikyjFNVzeu7r1k",
  "key35": "3VGMKkD7GfsNj3564dupa81XvL2W9qatRH7qmKCPiAXH3FMGz518SLZoWsVnE39AwFuGbN9cPwqQgmnkU6WnWhGW"
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
