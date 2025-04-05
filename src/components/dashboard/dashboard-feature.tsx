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
    "MVeev5jQNsaQeuPqUTr1FJDFaQFrdGDRfMsQ1Px54Jbfbfo6erMXSEnY1BkJ5QtGo2SUZbLQzxZJtHeijuTf4Qv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vsf4LUQgYzAnZ6AkUHS47UMG4ATd7wrYTit9q1rAtJLC8jrZH3hTqTcKvAis1TBw6eaFDiR1YU8iaWbUKdpe8Fc",
  "key1": "4MNqe2LtmjBKDzo6tC4wmdRb9RfsEbFhSGGZ2dzW5fcyYhpBZofvTKkY9RofUCG9Q2vrUjiyQLR1Y7JUhWzV8sGc",
  "key2": "52mpuu3fv3XCTygG58XZRkx3pootouZz1pk1SdWBgcBprhC5huocxTnBsbR2AGK8RZkJvsCFDUGsruhmUvWvESy4",
  "key3": "43WzmECCU26Q542yLaZFJrwKcQgSxe4yZNPaZsfTNHfRD6uTB5PFuVug43vJCntG5S6Zxp2JfTuqNe3WY4hzTBtE",
  "key4": "4Q4LG2tmGJUFkrHu1ECj2gsaGpPSYYtg8GbwWU1n8Utp7cJiGVA7Pkt42wYYrseG46L7V2zgW8iMQWHtTve9EX1W",
  "key5": "65cA1yDA5B6AAUiBxhxeEkH6q7KzxH2N1RQaJzX7B4a8wpsZ5S9y57GJX11q8WJZKvdZq5ZB8kRqVQisVLsBSQvy",
  "key6": "55s5duiTR9oo8nrBj5qUoTJ5JurK4i7ZNjihtNSxGWdSU45f6rpTiqwLdTKUdctnGk5MtvsGhVaXAXW8CuAtzyBR",
  "key7": "2CtSihMC3r6aoKzGyMK8zN73T6xA9A1k5Ah2hpi4T9AFpcHfZt6yZty3SZLQHJxzsMmapGEFJ8b6NwCNmo54QKzt",
  "key8": "Zovkjrvjckb53ZGiu8fPRXTc3xNP18LHFPz4MSmZqEC7DFrT1MK1HyTYHrkB8jBJAPqYgnYt5LBn3pxWfYL1Gst",
  "key9": "4pcEGdCPChUBfhasCYjK3GveDWzE8aqubDzgZUNudRTaez4UwDor1SCiMd6VW3LhLscekQBBCSEhNQwvQv7shkub",
  "key10": "5gxkncqNkfZwJQDqGWSzBsiJBJgkc4tQ2GsKeD1LWQRYJDuUzGDFYtEpL8no9hSumFdBRTGagkqwxznZvzZdoBNd",
  "key11": "2vFoHtkLS5M3p51yk1WQDKKGWwfLYd8qWV5y9DDeYW8sWb2bjM7TCYVPbZ3S4XaFZW9WbqCEPJLMcc6wAyxvqP2S",
  "key12": "2xd18S3QEuPM3ZpJvepto9xdh63vYgxhkp9okq8oC3TnwsGBh2fN4bDCMxTbrpZNwdG1iZ2WZKszpic3byoFSuXG",
  "key13": "4XxkXF2F9tXM77b5tJEvfdbjNiHjAhU6fMPhchyBqoocBzMetPCnyZXiLsVukAncczZ7K5FB1xYi6PnzNwYZ8pyH",
  "key14": "3TgkJx5NNkJhfqKvb788nFg4DehGmQp3KjPzf9ovf3tdwrGGPwc1dSmWNj4sPppyfsxnzJTcmEKXs1ez4yXWKEiF",
  "key15": "4ZmBzYWZFTWPrE3MVvtqPbYyJG8sDZvFAq57JPhZJcL5eKFBQfJF93FGU5tfzECPUaVG6eWqKhCj2yEvRfQvWsE4",
  "key16": "48iXDsKW4AyxgGabYRoaittbpetTBB7vc3VW2XUdJwopJGG1TCNfZn7dpN1uBEDrWDbNkjue35URJgPUjvmzZ17r",
  "key17": "2cud451CgZDamjj1AP2R9Y8boZK4nBNsVQ1fBAaNTvP6Ms4q6VMWBrrJUtwMM298GCrpVsteDFvefguw9a8WzojH",
  "key18": "2ogWfbU4U4wEjMKU79M3JjyPV1ZL5SfZ5gQhXKL1hPPW6GxUdsq6dU7fQuRB4nqLuB4gvBtmFnm2nLkXWmRwBTnr",
  "key19": "39cayaXTHeey4NJeQDmbsQGkVqCc7CkJ9oDiPraLjAbPSbytThNVeHPsLsVFs37bVEmf4Hdq2isCeftYfDUTw8cu",
  "key20": "3uzTbF48WZc37bQ1M3vepZuEETYSXiQrMcZRaTH7Rr1UaUJXbqga2Wvmi78K7bHkRwcKunoUnboqdyUVPrKgWvJF",
  "key21": "phSaJi26XvNFMQxT1nJaXxXtZc3UmgvRPN1FX7kJoP5tBkiiE55pR9MUv9wNgjtiPwUKv8rmNBwxSn3pUiJAx3Z",
  "key22": "3GwQAc9ZNLmSKtXv1CiJim7w4QEM42gniC6BHJy7buidCMMYeZf9Xjj7CYpSbLofmoL9Jhyo3Nu784wHUZ8snY2R",
  "key23": "2shbo6h3UQgSxB1oe9Mp9TRTiKEs2TejEDd3bR1PY2frjdkbsPKFRobd6jTd6pE5Se7XLtopjC6wq2Q7y2ckXntq",
  "key24": "2PqFG8yLBbWmQSsQNx1W1pxbkonspZmpszhqmhD8BE37xMpb328AEThUmYSwHAmFHeXMetnDtMkYWtoSKnLszCfq",
  "key25": "hoj7kEdrXJ5SoJqoeoP6C3WuxDka6CRGu48M22rMeqpQW7apVfEX87HLm3Du7TrxYCc8z9mQeNVstaAd7FytW9W",
  "key26": "qHmcj6H36pChGSd4rPnjWfqAEUpAgXxcPcYABbRXaBp48Fv3SLiDMYwrr54R1NWL6nY5Mgo8SzpusCAYeJ3mKD5",
  "key27": "3jYyKJSy9PsNJzKT8RuneZ5Y7C3oQ4K9PMTiUkNfDyGD7Zb4EQzjzT7LXRRn2YUhp5E3mDL1sFcDnQ73fJaSi1qP",
  "key28": "SGr4GYD3zMuYFmn3KcAST6GYEmYGPRL1gkjzF93UV7zqKhZBtjBut1bXh4DZCxLX4EkMMPcLurv4UWLb2DmbpXB",
  "key29": "4hdAbdimXzsYWhZa314guJn5g2x3YG6c7mUwMK6VandrMx9Miyf4Pk8cqybNJsbhnxwzUgAjqYFdxi7yZsXMgW3k",
  "key30": "5PnBGm9TE3XfNG9gMUUyozQyNomaJJNdTiVEjfqqijYQEWCApcseExAkiF7RDVzcXfDQMNmmfFGUzZVe4edXbxGY",
  "key31": "3632GqyZGkN2XHeeoL75YR9N9AxVTGBB9nMUeX9DpSrteK9PrkHaoiU7h3bGCZV16BEhv6aMYTv6SQy5pKqPmZ1N",
  "key32": "5kgsq7JVe5MbdoGuKsEeNjUSe9q8fw57zfwRevGBJhAb9ykeqFCc5vh9qrHdPE4bXFQAAHSphYJ6sNfKiz7PGQVR",
  "key33": "3NhrRZgn88XxW3cmgMJW5XRPs9wbkheyGBmgk8nHQNw2H9KYWL5XEXxUBAvAZWfBccuS7q3pR461Sku7qHbARpKG",
  "key34": "2xyA1JQs56Rth27ao8mQVbwtua3x8M8iHGvaKKyZSK4iFshu169u1W98rCGYSrV7ZFrnowSyTD98FHe4LGXFgyZd",
  "key35": "4osWa6qT9TuEzFpX8hVniJQUbG7BqEJQN3cVr4GzpyeQAQ82nqEQcjqgUsd5g6bKyfh8dwuG5nae1TcV2U4RKoaf",
  "key36": "2HTREyQQKAHjKvDh1gspwebmQndaiuwKBhaCAUbfgnzb3Y2A1Dz2PwhZmLWiws8kPmsqmDzZR1MPcJVsXxTtmBMk",
  "key37": "5wB5SC2avpqbc2Tk4ZfvmyZe4TuE3Gm19GWXbVNWs1P8bqgBGMHnNJBgfpqGiAehv4kYqPvNXJxMzVTWKcZaGLpY"
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
