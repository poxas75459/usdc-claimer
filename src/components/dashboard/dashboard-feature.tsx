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
    "5DwRMDTiEDzBhE8D3e9hgUjGU4jyLPkcYHqwA55Uy2zuWex1UhQyquFQN6A5dkaaM3Y3Btn2tAp2bZAVBhVCmmeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FSQ8qhz4kM4du3hRLujiRPWGwNzzNNkQSFyrgu9aaxwc3pHVaCNeyfJ1YSf8TGiUtE7Nd2KMBkoM17khfHAtA8",
  "key1": "4E2Dz3nfG2ohtYgJejTqVSuKQz1zXTfXcCbhaXAQFqWECgai1Y1WYcgkgLwGxRppbBi8NfuKrVKPZ6UHfMiEiAuM",
  "key2": "3hRZdjnKsnfDs1kiCWKrjJVH3HdCzv1M9kUoMvtixkDnSTdtiUBRn3ZqgLQYLo7zmwqMZVZ3dcFvqpUBpqyDvGUr",
  "key3": "fPKpcXfWSP2RettLcsd9i82khxTLF1xEiK2YwVzxVj9HXW7PVq8YYpN86dLP4wnjzkjuBZPvXspU45wrKK4nLFe",
  "key4": "X66MBzL7tsWHYREPxnLrJnBvnYHEg7Q2Y4HEsgpx7JjGAfHo2mjFsSequdpBb6a5mEPMrCRRjR2J4R4FmVMnj8G",
  "key5": "3dhiT2MKNTg3KhXS33tgDV7DfdqhT2CsTwQrsfXy1bwG3dfgPdrduwpwp7qieUDbexpasSKsNpMEAd74zsjtPEK9",
  "key6": "4oJ3NQxRyxHwhxRKRJHXihRU664ZgQ2pmoaLvfTdbd2K3fTw4oKpLagjfdZnZMNeQCVWcWuo5sXj6HFHHC5zkTzv",
  "key7": "r7xQQmC77mT9UW4ta12fQ9EpkfPyvMPkK4pTX6oPqSehMTcFVFgW9QCyxCEey8hWPkJghGGzRtQaVfSvkiCveVS",
  "key8": "2SdCBjn5dzSEYktsgQZ9FYTCK5nxykFvRAB4oiBhg9nztqXUBYmwo8UzLp9dxAMGMXJ4X9Nahf8xS1JP2Gyts5za",
  "key9": "2RVVZxwqq2PCQTsXB8FVjgz6MutHabv8cMwhp4EDuDVa6fxNKYTBKk7CbB2w5AFdpCZ5Fc3KfLWCQCQhT5KNj7Z",
  "key10": "5ejYyrD8ZiFAmwgKw9kUv3hGxivCX6Xps7tRYdfgFpMjQk2U8To5eLSA4GEbvwtmAMwzU8GquYz8jHhJhN4Kpm6j",
  "key11": "3ex4JCQz4nu6Yo17WwHjfAs5CRdpHjrTgXAUkRDYjiDaE4NuJexm5ZhQQA4DySLVVbgWALN6tP6yPJDMPsS8e6t2",
  "key12": "5pf2sr8oLtSz9YeCkPhaT6HJpgobyXHbLeLph6oWcjVCzJoBpgc98B7N4D5adK7Ya1MXkdn6DQTNzidUEa88nRH4",
  "key13": "65dWyCFzxsU9iQiSigQ2po3j2VamDMoHcUjUoPF7jQmeWcUXfBcLp2wKeub8VBAYRNmagy53jAB25V1woGRhsUfx",
  "key14": "AvYh9NHW4mLMtigSXHg1ocEsUM3vgpDrcDvoqEe7DX7oXM1UYkvq5PfrZEm9HKFTd3wk2nMc3vMM5mBQ61dRCzi",
  "key15": "4XvVBcxnJEgUcSbuNQ9TnAUAY2UPH3VFuwqxfAt9QmcsJwoqpNRA8tyKxfRHJ6QdZ6FufBk71vueLxHWMfedtKrs",
  "key16": "3zPRwMjY3g3NJWWZKGR5HHZwK9PM6AgmpcWMVPDefDAwLmU7r7R9L1twhkXpuyZgGNSDcgHM8go8QeigMd9pPqYc",
  "key17": "4V7Lsvaym47BhbrG4kqvPJEtyWPxS3b2dP2ad8oz3X3NjRXvMUeoqjJUpBfgutt7x9fGREnF61y3NhTCVoiNnhHJ",
  "key18": "4JVEp3iUAzsXqh68kesACdMRawYCHAPdLEnCgAtbrbs61fwvreTnDLws99y5JUzPAgy6BiPeKpsEpjakJJrRq6pz",
  "key19": "5CFUPN1DRk3kZ7K1QFhMdSEgWrPGCUQkowVUWVxd9NwkLyvoBKJb7WmbSi3mgtotgci17roU8jMy5kUvRUxznRLQ",
  "key20": "2V1jbAKDowRRHZCET6Kpc3tz4EKJdNuRaBPEjy44NuJ9Ed7A2LRVAmF7sAXC8vA59gC4Z1RZhpVAJXvoiFZi9yhv",
  "key21": "3WcSbK67HXJVGmbh6cQypLiMmybsRVz8x9v7EEoLSPhY9w1kJEhWFpYvHTSM4s6w8JrPByKZbV1fB4y3KUdwGJUq",
  "key22": "3nXLaLmbR1os1LqSigF4cs1kZA3oK1w3maarbnRb2ebSSYJhcqcohKZodtdj49EoQnbbCTG492TVANVrtP1GXLoS",
  "key23": "46bpnZi2Qi3HyzxbARrvoxHfp6PcV2jukeVQnCaT5vdQVNehW5B5GKgaUXk3WBgeSeUR6MxXNXLunV1e7GiN5gUa",
  "key24": "Sd87eSdwpNLYYossdFxWqkmMeGbih171o51Y1fVmd4uZHYr1W6LiFWFL5soYeFhno1wyUNbnPZtYz7ALTXgLreK",
  "key25": "Qii1vKXLX1WV8YcKqFJmAxnmpENDSfCHUhp1tohNMeUvTk3CshJctH3XveKUXN4kLwwpAQRpCsody7FZXAWzkpD",
  "key26": "v8oMdLFD2qvRq7yJgQEDGmHiYES4nYDZRQucsfQXwx2Qz1f42jp4bXJsY8mnS18QNWTVsvLKUphqSh511E4ijLZ",
  "key27": "4BdjibyYNsTnqMYc2C27FGL5QS2yv8vxrBDWwq2rXdCGpUP8jXq1CCWrXmwvwWVoxb1C4FStyTRAcA2jvo1iXveM",
  "key28": "jF7QAJR8qCUxMJXwsmKE1bVF9CCGbo6prNqwtCb94uDhHy5agzsaZqZnry3tobf7gNdJTx6GKR2sXgeg2qHu8bG",
  "key29": "5VshP2kUFvuWkPyQQF3rD6XDNRLUVdR8uG29CYrde8LSRZqyTNiKLJX91eBEWmYWHisuaFbSh5tWMJ6M2iQ5XnNM",
  "key30": "4fVXo3GQ9Gx74cHkAcxsvJKFYa5p2mPNqYpS5CS5k5LMJcD884ycU6PCbz9yir2kCPLJpUm84NEWFnUUuMkNCgbT",
  "key31": "3wgLHP55D55UirQ1TSvq7SU11vJszNxMwhNxkkHpT6CMQJKxAUNB3YrnEJGFhnPFXPJ31AVMUqnx2U6dkkMfuMUZ",
  "key32": "2ByPyuBuRLPyoGBmV1bGx9jq8yyqLZT9BYAxx1Po8CjJhahXWi9k1FHWDQQMciobiwKH4gofHzcsJ2HyhudcLx8D",
  "key33": "pBQnYzeDTw3vyc9AKfwAvxPoX1aYvrq6BKCYbZ3g4sFdXfa5Z8spsrcWNBrPuovz4iorkn6jyuvc7awsDZMo2RH",
  "key34": "5A9G3V6JxVqsCHuUgnxhzwNQtwJgSX1NWePD6VvRJ1eCUfR1UqnFh6Fqk8JcEeqFU4nrWnMZcX3fmdgJ1EtXF6BM",
  "key35": "4kaAYjzCwrYNBYSG3tXNDW8c2WVtSFgwassE3sEtbyoE5CHAdVS7ivDUpRWkrF6wzrRrHppzYrn8xMnQEmnTg6qH",
  "key36": "5VqBLqUL9RZNaJFwaNbQtEEWg7eF191dVgZRj1h3jvdA3m1s8SVNvkykheSnLt73aYA9XWbJKBQpWcNPysNsX4qy",
  "key37": "2nAe9V4yAbgr8XzL8Mdd877qezbnk1FfVRbLHJAgU73LrDpvnESuVrTPvho5h1GUtpazhm3V17pSUMAVPTRkjRYv",
  "key38": "2Us59QAk7XojTniTUSQdUVoZRQ6pXAabM9Xaph7XSiQvUW2e5u32EFEAKWSDjsUDHT2C2JtnFUV5HWjzPKUobaP3",
  "key39": "2zRDam4oMQAPBYiL8PULY1VfqFTcosNZbzvkBu4wGnFVmtK3Qh2yyTwTRhYf15qGrFm5kAtrdCYyFZGGiYGtd3XB",
  "key40": "4cJbJALoge7Am1nrp3GKvd8AYxrbXAbJDCXM9AD8WGt6EKeRRm519QWYzG4Eu2rCFmwyaMcsi4tNg5tT2uY2hcvc",
  "key41": "29HKN4FJJpp8u4gEYmnv5cQpQ7p3cxPvBLXko783Ejh67YM9FDsuzRR2hjPgP6rk7xmPy7GwJ3gNhFmxZLqqsukj",
  "key42": "3rbGZptWW2DLptMror32H5THnQ8jbFiAka8zwXvGmjkydeZYkgU5JNj9vrkHmC14957vaKQLyeXS4LyHJfFkbzaZ",
  "key43": "5fuD7N5v3RNQNosfpJEpRgiiZcUsjHnpeqY7n8ATW8piG98qSAapb79JCnCF4t8M6HuMHKiPuiWyCoojVJGvx6Wa",
  "key44": "2joVqRvmZphev2t5DZaKM6ciZbT1QHXfhYamEeFFPptJRLhZ5nX7nkcHPX58CvumK6KL5CkwfjpavtbKqrFxL28M"
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
