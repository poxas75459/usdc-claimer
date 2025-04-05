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
    "56cKzJVY4pbyvCwcDUzNNXngMDPqcwUSZVixN1YT6HzqnQD16PMsEAvyHqdREJ2gMHwdsK9VJY95PB5QoiU3jr5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t55Sa2Lb65AGsNCUMb7Uacn5soxbp75H11cRS7F73ZgvKDy3sXPXFnodY6B8gUBtRkzAEXoTaiaeYQorYMFTJzz",
  "key1": "3AxGfQhcF5HDszvPWCnmSqhntmH3E48i9pz3mfowm4aGmKHHbmamDtMmKg6HVKxM7nGDtjnkduwJMcexkagerGk6",
  "key2": "4JcyA5UnVLm4azhFHyVXwGBSVFHpneSfSDoFB33JfQdSAhpZ2CtZHu1vq8DrHm5norey8PmnbjxysCmgYWvb7fGZ",
  "key3": "32DLFWf1EmKJnFM75yJouuKBKes1zG87FpAkEpAxmdUwUJtVD5QJZg23EtA4Wrr5Y4wyNSxQYPUnokNiy6cejRtr",
  "key4": "3Fc4yjojhkunVsduiiBXJybjW3Yb46pXZxQRNfUQNknekiSS3hv2M2zHScBZUf9bYYM8Vx92hrCix8WJZTQF5x56",
  "key5": "34W6BwJGoLBmSXSCmtMoF2jZsFVHRYcG4yVJRtGHiqR9uQpQCQA6QrkLQer57y3e31VW7tdGCKbcCfMEuBqAc7iG",
  "key6": "YYovctZX8T2iTd1n8DbFTYQ2KT6mPqy1rqEqS2a1vhLxttKZt9py9iU6wbMpz8Dis9apsLmEzVtmrSAZKpxMnVg",
  "key7": "rB9dNrbTEJoFxMi8FvTM3DgCg9j5Daeqexnt6CUDsCzHeZrQMQ2UYMxSYjHq9yv2mazjXtS5monPJHSKwG7MPrC",
  "key8": "3BZPvUFQc8PY2gf8duuBMRWPvrSNz9URyGeRH9QXQU2Axwqxtr2SmLAFVQ9tzxnaDdixXvLZzSanR6ATLHRLwvQm",
  "key9": "2uTeUZHAV6qBztDxVujjQ6njdm8JdBzqss9gvBSqY7KAKD1HZsBgndg1a9LfdkFujZkFeTEx9JFx96LYpgPUHHpr",
  "key10": "rFe1aJ4cowSoaVZCJSt1P28f36zk9TJc2Xqd42edkKXHGyMe9WdhRmwZbGmXzKJg5T54K1xhQyixw5eB4eg2Pow",
  "key11": "67QnmDexZbsHX1QZKiztND5vSCYC5cUS4eaiWT7nXhces1FvQ5WkHNqRjZ8Gp13fRu9sJ9pC18HV8NGcfGmbjvc7",
  "key12": "3jhKZqUFNw2RJw3NYvKZmQuzpQHW7KmoeiqiJMXHRwxkS27G1d3Fd53W1ZkGgmUePik7SecP17sj9orMRe6zVC8s",
  "key13": "Fd5sJpU5KmwntKYB8hT9S45JVXcYhNdDJXr2ELEB6ykaV1j8JPEHRrNjYwG43BhAWNQNXtMMzsZzVW7RN1rYXLj",
  "key14": "4iym1ry6uDX4k9x8UYVvQ5tXA8qCYxojFzA1nhqMJGExQ3sjMEpBBHtsu3WAczfzr4kByJ9e9LGKgeNqMPAPkumc",
  "key15": "4rUC9BZArChtXoQ9rD8byJBp7Y8aLQZJNVRTJSQEt7qoNeQtF9ZNdQ1FDJCnSTj1Tc5LkiJ89jnQH4jsrVAjhRhY",
  "key16": "5Ft2KN36WhK2jY1ARH7a7zu8wQLCquz1AB3fbYgWDttghM8zPSg7PKiJ9qNLZYPRz2J1ncQ51oLwysveYG1kbekH",
  "key17": "3zLx6btbDkrm7GAtpKXM4EHAvfFtvxQNA9VcGviYR7k5KGvt2iPT8fRQN94KuVmoHWLUhGXf7EmHHJHYpDebKx2R",
  "key18": "SE5covgSLMZMXKtZiojhLmPMzDpP56iHvtHn1WwSCVmmhPzhvFVzTVDwGFsv2yb8sNbU67Zhv6Rqsz2pXu5AZt5",
  "key19": "PKCJfCuSuQKXqijvqosntnXTrkQgHfkEU2HuLgVQqeWL5TqZdJY8SkQgjZCsWU6KQKVkkFz3htNaBkYE1E5R3yK",
  "key20": "pPT5Ftt7MdCETEtsGfRXgDg5c2ovNfpQd8RFn4kYYJVwV6eEpEsbSY5f8N1btUp6T7jnyPLz4f47Afebg98nEXS",
  "key21": "2CcYCwM26GkX3gydTgwWjYYN17Zn3b62A3Kp3XJ2KaSisoSyB7dLjiJ1cGegEdmEHYTxtnQVBA1PJ3wwhgGWGbQj",
  "key22": "3zKnrPJDdGMxEGbBncVn3kWfPDLRpRzfVXmbwz2nxeY4t9rZk2Cz8SHUMFobwyg15M3pCEobuqxVsL1erY8Xi5eN",
  "key23": "4HDKefN6uqVBxvRvUQGqptRSKag1dNB8jc6w9YaUBLnyKHTtWPPMzfydx9XF421rERPtKdeAxMMLDiVsjBa319wq",
  "key24": "3mdZ8kWBxLsrZAStRPNhHAVgssjgDVcXhFgkPQ1ysDhTBFno5LdrRbNbmWkYA6hBYY9FimRhTWamrtbdyoeSquzL",
  "key25": "4u3aUMYrtbgZioJSAfUc57qVdapcuCXwBwvYdi8pJbj2XVUWtN9kxzX1mqBRHbdrcgpXovtotPbt9u3mc4MisdYc",
  "key26": "3w3xjrnFAqQQFo1kEsGqnwyJj9UDJJXbM2yKWuWsoBMB2hwvpPzPTQbZYVz3cHepqzDvSpGhfPQHfZoRq9CFMGVG",
  "key27": "3oDKkA1RGoSmzrniZ7LYJfoC4i6K7E1YztkkyjiM2NPDD44TTAZVckwxmG9BBnhPHSKG6hHkLxRcTqu7xv7HJiXU",
  "key28": "2NZJyWTW3VzUmQijBwgz3yvT1RadPxo8MaxF2vRGGP3h8qCea6Z6dtN2sYGNHk24ngUrhw9EHMAAwLGEYZsHxox4",
  "key29": "4xJcx4E3rwrLavYHN2A2iuk86UkXMLZXkVb1mDaotZstNoujz1SFYq7tDddbm6VApBWdrNMKdB92ztpyiWjuLc4e",
  "key30": "4Workc4jZsWewCXFS4YR74zAJjunNMMfUstpQ9omB6dT6ZjcD4wYbHr6hEZXVz3KBfuP1EK1VFxdm3AWTNEoDAkP",
  "key31": "2dn9EgDwo7kK58KszTj6q7jKj4PHqoHXKEVtVVS65kKk4e4vdhbzKRCYs5iLwVAFtxiF9Ah5rD23iBtjgszYjh9s",
  "key32": "2MLde8wwSdxVSSuYf3rb6WjpjzppnnsMoymiMhKn5hYWgQXeXQ3XzQdVZoXCTrWmhgiHc9eyRrxPedAdVivMLmTx",
  "key33": "vZmop9zwyxuJzrqpEnTnujxWWUmxuU2YAGV5NZLcjKia8HNPhLLZY9bHGHM7zTptpdiKMeEbQCPeTXsuYPZK8BA",
  "key34": "PrDXGXgerVCSoxjkSH5BaViRCdmqpJLFExynZVNXThAm5Q32SH6Nue5W3UBBqpYit4sC7iMyawCfMqzWgnovXVW"
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
