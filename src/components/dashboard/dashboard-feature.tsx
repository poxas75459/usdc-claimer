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
    "VZR9JHoZRrLetQVb8LP9bs7rqnaU9PsM9Ap4Ks82bhuByqYb65CPLRqGcKAaQ6FMmQrW6xt9L7Ru866nptDsNtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nS5pQrksi1NhcieR6ohwTJBQdDB71K2TjjZ4R2zEa3hayLn7nrHzW6NKqtNfpVm4NKZkPPnugF3QkkbWZQNvTUr",
  "key1": "3taggrk3LLK9jXUcJXwzRwEcEiT9gV5PQPYXFA8CWezY3tURKoxiFatgJhHiaKUZ5Gp63mgqEbNFbfVTefVQFiNG",
  "key2": "3s4qErS5bhP8XpEChpZuAAXaEdhXVdrGRBsVu1V4wijnx7X2DijSeZ9wVV46N3jEypngdxUMAhspyHgYo3zbNFd2",
  "key3": "2CdMLYJFBsLGz6jfnuytgf4MqxSGdYJcqrXmgeJHu8UAK6oS8PUDcnzwRmUAkPWmgQx1AAAMLsYTfJ3vLenheBei",
  "key4": "3LZP82VS9yCXskbQow2u7zP8wNDpw3323fCB4Q7socJbe4qjPgEChq8XeRY2zM6G8tUmZef5ziNNeJfxorBjxpAY",
  "key5": "FgHmqMnNoNTP1wWKUt7fYFPvdERUn4uy4DXucneqWDqTKCc2T8xJQzcmaKueD1qDsS12Re86yyS9fRyRYVZEWvC",
  "key6": "27u9HTvKQyh7xddoN1yNbDyfq5NNP9a55aKS75CA6XRQXhW68YnYDoLK3KvZ5unV5fBYc5wF1f9HuMmjAT1xadtf",
  "key7": "8opAcwjEXLscDuiabmeNBeStxa3jo1Adj4jKsj1Z1XeZvPeScZNuzyeFu5EEp3KL51GQX5G8pwoLoaAbEXQEMag",
  "key8": "5qAH3d7ZmNGG1sdRy588yQ9Fm6XQyrA4Yn14JodSjSwBrNwaAKr9Tk61QyLeRmQc7NUtXG2yanaXttszYtosToKt",
  "key9": "43Xas8JQS6c3uYYCP3j7uNPi3HZLKxCMw3rsikkZ6bbKLT9bJyQHe6sJ4aNcNUiLHpBpJ3Aj8s8L2APVphwYL74B",
  "key10": "22UyR4pRNvcn9Q7C4YWyAPUMq6zHarBRi7uwP3fcwF7MnQS1CGiAX9LSf1UNf9wLkQmPLD42PY7x6AgdPrfpajbH",
  "key11": "5FyyW9mMphywYAs6W6eVxSjR8ohEnzytsDcfucTGTZC63Cv8ir5qXPZZ7p3vLRHD7dC6FEuHZdmvYhw4VXBvxUuB",
  "key12": "54zBboMZbHDNxzg1fY9DtNvKrBNG12P5zvhAudgCQACvTqcgNp1HEDytHVkxDf55hFnFvyqr3zMMF4F5oB5DzT3w",
  "key13": "5secDWynSFtp8MFQNbAk9atjAmLruBzpNd8pCqk7ZPjRh5gLNLCEDVnSmdVtYKMneVSTALcAQgCzqBzyBuWADaWg",
  "key14": "fQv1eqt1xB2fyvsQqtH3RB93K8KsrjGp7q5g9DL66FXkFMMz8Nq7TKBhkCrbMZdzUef715LqhUBNM4GKTH1qh8a",
  "key15": "3Pi2ME9nZGXojMhGn5aGvMFff5c1XynbheZ9ZrwC2aopmhMQCjzHLXyw5nBbq9Jp63ooaHKNZ41Fs7LGggu9sB3j",
  "key16": "3pFPWFQSPkkKjV1HCkSsabhM3DowgnEyKpu3YSCRrFbpWkfUUyihXt1aQ4zNPz622sBrZeFUn7EAFkUbpC3aWr7",
  "key17": "3Qd9YaKTwEeCBELcbhp4gu49tXwhscLRvVCxYpbnESRryqs81BLVMkEcTiho5dJcoYcQgkM6BxSZ8rp8YHavsS8a",
  "key18": "HqzQANRU14bNFn73zWwQiMVBLQTQWa4ePEp5KM2Gx2ju6cxoTeGZ97D1A4R4bTGahc8goGA7YSLn6rXXHoTQXLX",
  "key19": "3SHuhu45YJ13vJESXpnc9okkyZf5HmUUxGnQCv5zVyJSCvgVkEoKiUS7r8jvNJ4e3VTfHx6P8LCKQUqq1LTUEMc6",
  "key20": "hoM2P4xjcKWqMuirYFWH8K8zGxfnCVTne3snxr6u7yfcBd2wwCQcy2DH9rd6PpJx4YKuNphhxijYmjA2EDGhoUY",
  "key21": "545mf2tcmpupomTgHksoVhf4o3NCdV6TCWZSrH5hsUpZtxMpuLuQBMUbRGtTk8zLhaSgFGFox3p9GnYJMu1Tbmbd",
  "key22": "4gJoaGGgNeYoyoUNmCVvPSKpoYx781D6qwZZ9jgsfCXqyEby4YDqE5DQJNjMpGr9Fe9EKyUwXd5Ew3ngf6Y4P3Lr",
  "key23": "2N5unRyQiW1Eo5LtBeMvJKWUTA9wmrGmhdMLVLZRSXs3PVg3Ab9oD8pPS8DV3vozbKWbvRT7HgYCGBYRJiAjGCLQ",
  "key24": "3anuAhVrRq9e79KftHGW4M3Xssd8a9oH4EZ9sH5a99BWhuNRA66HRGknBkjCXYAkCMqohHg2b195eL6mYMuqiSw1",
  "key25": "LoD5XSw9URYSAce2vP4WB3EbNCWnea7B5q3RWi6rZdyQERAk1MhgVeYZhX5eLBRWsDTZT8U4YyUssvvhCT3uhE5",
  "key26": "2NmiPX3o7Rw6rWZpVCtS1eW66Z9LVU8Z9NETsBQpaKseo6XtwiKbY7KBeuWQexo2kLFRLShnE3kcgHtZ4fGVYnPq",
  "key27": "3UdxjtjeHAFpdofT389GQStNxLTbkmB8CdboV4G52MjiptLhT1SbjuwrZMS9p4ELqWwygmvp42NAAgzpDxgRzcEW",
  "key28": "5CLrhW6Ht9BryyatyhrgLVUz14AYHKivCWXQ3Nf6dxhNTT3xCoTP6hVAETdrPCfJBM2hEhcDacTaz4tJKZLKSYAG",
  "key29": "5c6dH5A1vVgFJCgdkNpP1CVYNdF78f7JVZ9ANUyLoj1BzRQQRdbMaMtuYr1RMMtHMUgZyK5s7VEuM9a1bK8uv3JZ",
  "key30": "4r68HSp4YZkUF5AJyc9HGVmuDJTGJPbcRqdQ7HoRcZLN5q5Y59HHCBWFtoXYwZHvCoaxNz2zYp4gf8T5vfC2PrrK",
  "key31": "2DET7quwyXCchFWQiVWkCpfeQoEBSvHeaDGzrH6kQqZtFdzUoiyoVmLjARDephy7ifXdP9FLm2JKSoi2uUL5hge1",
  "key32": "3BUPwaw9PrhU247HymfP3wnWrzjrqjSog8VyE3NgvtRApUBWa3hdtkq1H1KBjHxKMiSC7dYimZyidp4hCcnhKtMh"
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
