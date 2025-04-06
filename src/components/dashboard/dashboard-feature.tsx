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
    "2LjsfxyWQdaUExkK3ybAxU1zT5mhDaGTgZemaJg7SKhqf97cg49MUhan98TSqRDiPRyn4CmyTJCFYuRR68MCZPzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64gYD9ybFso16X4eK9x4qr9FAPVLPvEeTfBSVdY9EQgV3XxGt4fJt4fMCx2sxz8donWnqk4wJanPiwF6Rzp71mAN",
  "key1": "5zyMHMZ8WUqtCRFUDbzFwaf2JMFqsd8CBg3b3ckgjpLyL82vudcybYMPCewCZCzjghkaeZiMvAFBteVYwrppk1K5",
  "key2": "4YGThPKDG4svLKeDvtxk25Vb9QTMD1yZhrRssNs6vW2i6cpmywyBNpNPgpARUdvBQjASXJDAzqmmAeGfjtswFGge",
  "key3": "3t8PfCzJGUjyf61L3QnGXZSiZxf7DYPVyg8yvF7kryAA6RbAWeYUiAAtBsBsACojFdbKXhdXQ4Yy3vLUzkL3CZvX",
  "key4": "3RRsZ7BGq4N83iSu1L62LoLCmkVLh5SHqbsRVkbYfzsJwyXSYoLLyQ2t6978uzBZU9iLNA5MKGAsrLfnCGa7pHiP",
  "key5": "7qzdiXPknnurqiCAk2C2HhzKzRU1USVRjhX4EwnN6KfoRQoP6HDDcu89DqBdJKmNoW9RsNggQQmh4L2aL5hspV6",
  "key6": "4JYHHkpLHiSnSZqRWb2uVETA6cj2qAWTtgewu2rFb1ebvPcB5fskuxqf62yXfUvicKRra2Bz1pvVEUSkg2xE5Tjm",
  "key7": "3CA6mer2HdLRpFoTD3Shcgdouyh6gQHWK3VuDn8LeiV1UVA3Sz68H7HvLvdo2JwS6h9P2b56wbUHpXQTneiaKY5V",
  "key8": "676m5VFjRPM1JF3woGAPGZx83o69aMkYJr69Z5RfNiW79t8sRXsGvweYQBrR22iZNxYyCLA7z1Fwy9Xt1AioCM39",
  "key9": "45SdFtchntVu1zvmQzYznQRxuiwBTxYjv2aBUvc2ucSHk8kjFiKqVkN3t1oc2tyrHCr7ULVpUar95NPX54FfiSGE",
  "key10": "2uTXP72ECnPwE412AgSUwHCSq7Ww4EnZQnXtPx4pgty7w3jF44bqzN3AmbCR4C7n5of7d7fA337vB7NRJpjqTSRF",
  "key11": "2HEAAPLXpNu4BzrxaqTcuX3ZtTWLkXR8wWLchHz2XLzph3tPnnHEnkTchwHa1prKSwMtLxN3Xc4y1m8YdaKApkYv",
  "key12": "3gFkMD1myoJLWeNVv74RHdptYcuPH5K2vVHNHcwazSgXsGzuFQGUVXzEtbjbESTLhVMhMoySi7VEN7K8jmSNkJzH",
  "key13": "UXga7SKeS6mmj62zff1uia7WT7XsN3zVsFpmsUfNttuaiEmxCHdtqdGcaYcUjSH6fF1taAAHazrmkcHi592C5Kr",
  "key14": "31eckiwbdJCdGr5r2e4nSZjAdbypfKqCVy6iQfvHF8zphiUCMQMhFzjP16CuCx4nZPoUZY9sTr4wxhTU8S4iBaeC",
  "key15": "3yu9qjyR81dSy9HN1dfGT7RyB397zNCTxrpeicMkAr2vWBtMAYMqNJsVBdKNNpGwGyM3j2RxvXyqxmbYjJwWh9aZ",
  "key16": "51fnqPh1cZ2TPUaP6jsduoJduCjurQoZGzxSYsjizx9Wz1gSbJbqnjTh33fZHNW2uFc7wWsE96AbA6aPCdofk5NT",
  "key17": "LtQR8Qujgmz9cfjGvKN1nYMgept9qAu446sX8AFEGz7cEFqpYitTyzNZbjMaPT5p4ctGSxxGfajWxQZWvbgGLCX",
  "key18": "4u72FC5BE1zyGqF9erQZVamWAbYtDcxWH6UwN5LcjDjWsGvXjXT4eHdPjc2tuG6EagRwp4J5KGrLTtoMr6kUzfx9",
  "key19": "56XaCUWXBNuRkW6nGZieUaLqeUMkyNtQhBPxa3T6E6hHD8yNmSThBXoxxvVsa7UxXiErPd5VwCAhVM9LysimgbaA",
  "key20": "3BW44QVC4qUzBrE6E9Xqw7nrGSxzDgt83gkPDo3Gt31YvpDSpbtscXXY6o7o3jMWiwAefH8rob7EPsM9z5gQFfMw",
  "key21": "5jkssiXop4FcFnJJ5Z9AnDa8fUaKKJYoQRGYzzqvpbpDgoxbQN7ABhZLJgDW8vtkU6ecsdTPUpaRQBEAVbVNkuWW",
  "key22": "3jDNjNUoZHTMxhyMkDJAMVxTXGdTpjw1ZgV7u1bbRocfLRu4xsKjddd4f4ywULtqMi3E5EkyCyQyYHJtSjQkbhvS",
  "key23": "4yFuTTx6CboXQCqepsaMLmfWtYxAYksjUf1xXityYd6n6jBNMttgAsDNoAmZwW9fQ2tK71AeUY4crZsk8p89BWqo",
  "key24": "3oxpeHyyR7E9jwNvqgxSayECKdbDeD7WS9t5jcQNciJKu5joVEaR2BLASnsRV5JSFBfrRgFSzdVWAB7m5V6jtU74",
  "key25": "458jSvfXh3FM3o6zW32qLg1zCDfSAxndJVt3qesDeDAhrQBnD9biWQweuFrunuozejXoxujJfpYBZGPxi1v7Dj12",
  "key26": "4sFf8swMj8YWngPwNxBF7qWvf6DQTpGkdoDS7VER7HADqtrz1HK4A271XzgVCvXqp5aYqo4h4rsBshps2zpbKciq",
  "key27": "4U7aYXq9NXTYb7XjD2c8sUyUA8Eo47JC51zyF6A3chf8exrZ82873Kg8wkMoFLx7yZm9GEEnaQVBExSfq6WaU38h",
  "key28": "2pEfTgZA2Cc91zJQCBAYSJUMF5ScQbv6uDWuVSQmc7N84cNQx69gdevSpooqLW9BM37WzR7koNj14TzEkSf9yCu1",
  "key29": "5o79ZRLzvqADXYgju3HXzhRFq6N1EFFv5BSNDA1846z2tVJrSKqYhtJKnCjN15j65Gzqrprzq844U3FvkAv3G745",
  "key30": "3jMVUSopqqwhnR8DqEVD214F9KxaFMoih1pBzvRov2rtariSdjwhaPJmyEXgvyq64vAJZFPJq2DP2wgmwoZtTKdC",
  "key31": "kNRqj1ubGy8iUxFRjWk4XPZZBFRbnhRKyQXdqsdyBf3jCuVXyaG4JWmwjg3ExngXNSByyALMEJZk7RCCKVu7cBu",
  "key32": "2xL3T8XRrqV4zCZ4J9dcA66u9uWA3P4g9wsGsU2ZsNXFMdEDF19CRuK9EF7M932gZbPZMdJZCTDqYYV8ioNMxa4x",
  "key33": "ywYxN3W2ZHzStYsMXsHcJCot5XemfVZvJX4ts9XusJ8j3LoFoS8HZCvD6dSxQyGEN4scosVaFrVyzNPCCoEApqe",
  "key34": "2Yk4gDJoHkWUCsiRHU8fB1WVrD8TWL1o9P7dCTZJSwAHk3PWEB6sfYxyxrg1sA62ZPKK9hh2S4XVZLTLvRx6kH5T",
  "key35": "531gZb9eajQHxWCxd2zVdv3aWqJMj8vDusgzLjsey4h4YM3wrodJCsQ9tnuw2xbkuYpvT159KqVVQLiwGbf6G6dk"
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
