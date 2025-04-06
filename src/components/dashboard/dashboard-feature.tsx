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
    "5oaABjHWkNGZvJWntnyy2UNdZG4ms8ptbdECZucSeiHhz2M2FncPJ2zrjqksxeSiLGMSMn4ezTavKn6Fjitbbfpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9B5dQEByDn6vGrKbQJRaFBQAZ6PnRcyWtuaG1MXNLUxj3rtxvQbVhzTWNKydeVjdMqoAPKFVGVyzGs9ZCp9q8nA",
  "key1": "4pybwLNxe9xj4hGK4NyDd34nKrTXr5Yzx8rZdjH9owmTvGoUwVRQpix4ZQdUmoPGdvLzu7jZmzjPnnCMQYX1LyaV",
  "key2": "vLqmRf8FtZb69Y9jJKh8bHSLuv6Qht5ouMMC2mKxrySE6zsKD3JZ7rbcHrRk1XKSSTmK29Yo9WXasMHsTeEzgvW",
  "key3": "bNnMAh6LFG4sutooAJxRfC5b4E628UNgJN4gVoGBrSscrqmUkdBR4aA6hi3TYY9bETLiztz4EA1nJaEVEoFchGr",
  "key4": "DLMjAU31fgTCzbepvJaNNYq5P1aqe4mPjV3ewFV5angwepnoMfN1ZHuDxuApiC5CMYS7ofjMHK4XNMcTiJ2hcWE",
  "key5": "3zDtDbDEiphX5wuRtYKh5hGVPQ5YhQWTxoJvpNnJKnh9c2K6Gad9aSg5cwZ9tuZ8b4huEXMrnZRfBKWSEDYf4uLH",
  "key6": "4y64gwzxZvH1kSUMNSuqQFezPtpS7b9WdiUT3ZdC2e3vtdQwDDPHkkTSek9fUno1CedtunxYcqmcYJVPiPiYt46p",
  "key7": "5nE5KBh1cnQuVSpWHZRnjHqNxAKAq6mj2iSPV4KLjkjNfedTbyiVWZKeR8iYp4DxCptSjEEtrcsj7tRvTEnCpABD",
  "key8": "5KrUewkpKDR3RG9ERp6Cehbhg1us4yqRGmaoGB3jJarYbkCeG44NnKPvFvGhMPTmhr5zFepvbCAEdJPiPa1vJMMQ",
  "key9": "3EF5jZAVznm7meR2qfroNZh9eCLLqMycPXFi6tRMepbDdKnUJ8rnY5AAdT1bnuvVzfUqi3Y4VMKD6iJH4NB18bLB",
  "key10": "4nDbq16H9RDd5mXY85AU3754M7Mi43QjpE7m3cu8y9i8KG2V5S59MGJsW4U9XeVFu71sAbf1wwQcEd82RT3c1xme",
  "key11": "5A2Rr6vwj3ifeXRa2Qzrc9VtyRbQ5EsFVYw9FwTVPgS8H2TzyLuV2TpYJctJrH7owMvginiaect1H5Gm1knNDXqn",
  "key12": "5vB9BF3sE25xReLcV4UU3tqDWr3hMz5dYaEE9pdbdfqv6mSghJAyuDr46xJhHFDsKZJX6AedhGgkL2nRXRGQhUdL",
  "key13": "3KaRJPde8Et7aDumbef2WotGEjkhn9pSHPLftkXTisd9XXscL2on36mEAxD4z289UuPiybU6tx3cLziY2eFDyRGj",
  "key14": "3C53yPvPNRocPAYgEt3H7jQ6f5VUmCRjs4RYevGQpmecLXoGTWJGpRyUBagirRe7D89iWhtLCPEwqbCc3BYRib8L",
  "key15": "3oEpER2ZHkSfNABwoQKdzTynqJhgP6Ly8UxxA25RwTD5qLLFGGFa9WrYBHF8ttiAHZq2fLBEUGmqpt5RvaZ1H1df",
  "key16": "3k3kY2Jrzer6WpvSzqvXg3EybCj1Sao5kNKk6kyaPpZn79b9WdDsAkFRbFyftLCQvfNTrdW31cc68NrQXPwoLwaP",
  "key17": "v3jvzB5h7ZHzkGeQsFcNqG2278cBsDtFXuwp6rUWM362QN4WZRBYCkZKPCpjdjGhgmW4gi3gG9cJMFPwwjfJuQ9",
  "key18": "2uqvTFvkLzAaJhLuTGjJsWEXtJyxfoiS5BsnoyYXDMMBgAZtgG1c8kPVSTvmcQD5SfUTqJ1mYLqH6pLVDjhNcSUd",
  "key19": "3qdep7eB9EvagoUJ8uSUAr7tifdUKHLfMk8ScCaXWW8sKAkn7MxBZqMLvYw8mUNCX4yv65xA2TdhbEmcSAWHvNyn",
  "key20": "55oMnGfnWVsaQj6rmnjvmaZfp5XsxK2Gfg7miKgM3hjQVo6J1k2hEirjgFXPkS899VhfDrKjX1Qhx7bN67MF4HMJ",
  "key21": "2srvk9LJxwv6DziWnZ4kvYUfK4sGyTJoonGXMm7jAqSUQbsmXGN9vfM3kpkt4rtcFDPawooSAizXmnVoFaYMnkws",
  "key22": "5xPdaNdgJUKJ4Tr7V2H6jPvAncTARx4JWgym4AAu3b7zBYHMp6Si9f3uCUfMNvhuFHSzomwG6L2rbx3TYoNs1r28",
  "key23": "ZyfC5nH53knGjStVq69V8vcsexXknhnbTexTGGym4byL66R9MMHnj52SCogeq4ZSNHhc9mhxzgxuYbJg4DCacSP",
  "key24": "46td51VGSuH7GbcHHuP4BJ9sVJkoCjw9b8cPiFG5fhnQyJd17NvNWBSci3YadpLkPkc9EymPtD8Cnpq4kVeMmvyM",
  "key25": "4xUESaCR2Q62ZyC559h4hQ9ZqtZ8fQCe5t7GPzGJhjSX65H5CfitruaaoebVQmRo6LpB8us2wDuH9jGs6AA3zVE9",
  "key26": "4W1e8itYZ15AB7dYot5e7PLCze21fpTXrDdVpsRzLLNSpaVmjMnQZcrxf7FuZLWMZXU6Y321Xk55Kszz3YGRhCbP",
  "key27": "3GdpvBbBgB15Eke5b644R3oRymrkYJJP2Vqv4krXXUcnmC38VMz6ctzoe3fLnMfMAngbizidiCiGBTzdFXqsK9To",
  "key28": "2zfoVpvKKioc6f5HvCwyCheC8pJFehAxry1tzBvWWCeANw1x4GqPnCwsr3yiTyc9CoxtcPbqMY55A33dfpFVBbJR",
  "key29": "5bRAx2HFNuLqw7mbrWznXkqDUC6eminKxTmqoso56Zhm4cqMPF8EFBq4oYPBFidV33HoCMZAmB1gKGs9MPRGD3rJ",
  "key30": "4yNhfbm9GEzkVc8Y6zPhj678vCa2oZJWtmnDSrvP7oV8j6rt9czSKfiWPRLGHvUrqygAKKzRCD5LyMejL4wSfJtk",
  "key31": "31y6TXzxYF6596CYfuETvrbBuhgNtk5sAVC6tKVYyLvmKGsoqVrpJrBNguPCwYEj9KGBPJMYEowZ2fEvjpzsGEs9",
  "key32": "53Kzefa25bDpDhrFQ1mh3D1KMbMYZCmaJAdLLEvttrpxiC24aj3uAPqBQdAR4h4J5AW74L6p3t2v1kAqP6i9PxzP",
  "key33": "3Qjfp991A3e5sJPZb7MpYRLFDRmCq3976nFMQ7CUwCzhZWpvuuWCqMxmwQNmaEyePzDJJi9kp6XZphAxXXHbYUzV",
  "key34": "4xm5QmaCXeQQmBEu6SSFh4NMt7e3DHXnnB3wsGATtcbS5tt9eixoaYWVvkxih4Fcn9zi7po7jEGnzMpC3D4C4QRW",
  "key35": "TYuSnZoZ7mMMD5dU7nYPJdoiKmjyhmfGfqxSv76PicoQrcRqih6BwaUuC2Nxg4jhqwDY1ZwdT5gcFM8y5GVeXUZ",
  "key36": "4NDfEwR9sjyfT3XsFFanTtY9pxknzgVNLPsK2t9j8mGBjXSnxMWWBgu2FLrAz9oS4DeWhjp1M4jSZqX6KimXMfPH",
  "key37": "4PrB6wuTiK8DYH9KgTHx58hsEj3rRQnhpxZz7bJ3gme567Evts5tdXk77XoKdDahRjd7jY49tBodVtCUw2mFgmaa",
  "key38": "5bpyLRDwVnFGnMYk6L3HooFM1FQ8nMUa73Tf3y1HAHxdsZnPK8prtS4pmKLYmJ8U33a621zUHeckZFGZshZMaJr1",
  "key39": "5iLjWxSDggP16tpywD7x7vtfGKN3jcFXF6ipCLCDzAa7A76ZKijuKTPswYbgQn63mCXt2rmUuU9TQt2kq31ktz3H",
  "key40": "5griboCZEQxs72sQagzbs81HwbDpRjYhxzoV3ZRxCYqrZXCbrTXELVMMwCL6gy7qyX6AAWra4XHzRh88CCWqnj4s",
  "key41": "3LYpKVBw31kcUqwHv1EsZBQdTLt6xN7kKAueVFbazEKBb5TwXGxvUgLNvzTM9HutZ2T7fDqN6VtJmqrTbQqZjPfr",
  "key42": "49wNnbh2WspHr1Tx6jNE2kLHSZKwSTV2jddaCoXqAsffZGeG4agay72YVmxwrXsiDA41xMbPJcTZ2X2iCBJzeP4v",
  "key43": "24mJSWJRHCZyhbZHgzozobq7Pj9zp3zc93GPQFCeTihLgWYDivvjXae39G7LkWsrkJvMidZELKcUPsKf4eJG1yAd",
  "key44": "2LeEYaHzdvDMVyzqMsZLYKfunyzc8C1MR9eTosga6Z1j5gda2z6D6ttyuGKWWxeGounTCwB9BPxQSUnS59jupxsg",
  "key45": "5pBTztSQvSi3gx427QKCnCkKpopbAkeTAP4vGTYR4xjEWGWBnGoJvHdbU2bhSEdYBYnay1SLpfmMbKgPXQti9vJF",
  "key46": "4UW5DFS6s1NsChm1Pes1ZG6EMjkDAVYmDnEBPqBV6TBY73CbaMMH9DaLDPDfUH6zemJW398QkjATVm6aJ1QKDxMs",
  "key47": "2WQQR1z1XXaGjAgyGM6hNiUEuv9Zw6NpW3NSqQ2wmaqBbxAF9DknAEKLrhdqdervXg9CqGZZYtWttapjDL8Z3xsG"
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
