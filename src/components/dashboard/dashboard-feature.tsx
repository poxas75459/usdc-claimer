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
    "41wbtJiEL16vcPssLAqxWgzX9dfLNL4f5zEA6QkSED72UUdQCycyB8kYAY1whU83BnFZVKvLCN9D29W5Yfgz4xce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "448EcURaPyjtiW1Nwx735ivQJQEbFe6rfJgjJxek3KC95pAYK1CPdavqRQef7aen46S1ExGqAYrJq5Ua22y9WHdy",
  "key1": "5g3bkGPYTQ9VzsX4xXLL1zYapKPPzLX9XtFzWxZUoEt3aU8pBqk9JSttyZgukycPF3mQAJghzteSq6rJXQA9gyC9",
  "key2": "3cduRXWBMuNc3ttdCVVKdfuUL5MRu1V9QHWcp8fMKLwxXL2fpndMc75QajnAZo91cUmwWJJYu6BaLu4SVKW5x3iA",
  "key3": "3ABjPyMauTHqwRFCLLh78aXEQMctW6YprF3ZxmC8CdCBuYpgdutKQiotgjU98C2L77jsuwXb6r5o2DJQJP8qbhbN",
  "key4": "3a3E881ZrmDP7S3jE53wpSK5Cf8DAf3LoDJ3Yi7vQHp64cHRWEcb18ybynVJhWqqHxw4EyueezPN5p7UqYVZf4fF",
  "key5": "2wooaGwMcXBXRZt9b2MfchLzYsUuHU7S3x9aSQd5u1MUQQHt7SQHVUwYEzfqRRVdhAcN8eqxv8ZcCnxnfZtMGBDz",
  "key6": "55Rhxx3sw18dwmu8bw5ubP5kg1Fv9hqA327BxfZ5rvkpfhYrheqhCEPSqyq1dKhhBep2frLQx9WKQB3Hmf64bH5a",
  "key7": "314DEEipzadd9RqdBwxjaj8eu96dZtLKtku7t2GeVJ25cbFoeHSkEtHZPMfgo3GEeLsr5uyscR4KBw9FMRmQ2zyV",
  "key8": "oMt1k6gbguubgcaKQjUtjRcJLrexbS4ewgBJUoRgVUKQxct4dLp2kZCKVqTKsyQDMLUo7w1RCifpxzUTbvGWB7P",
  "key9": "Q2ZGCgV1GE4PKyizNiqRuhq5QFctB8U6jhGbJkCfXggnLSXxugMRsL6cBTu4t5nUdw9DttAjCXKwSNU1N1Cpnnv",
  "key10": "3Xtg2edi1FhN5sTqFp5xkGzhg7w3E1CCSyRta1Lipm1j5Ckpdr6mdGpeaF7Y8mSA9LhqECGn8rUukcqKkGhEFKQY",
  "key11": "49dTjWgXN9QgJUbgWsUZK2n4amSX5LvqKUyMA4W6zDoBBiuQvw3ALyqEGhG374cEe8iouH4vRWZtDLvKRRedvG9L",
  "key12": "27uXxRBDjmQTe39VYWVwDe7ZnYMh5V3AeLSBTNoRyQNx3ZcPzSGdss1DjzSQEKWEiry2Y8fdpatvGvBSUYYeJ9aU",
  "key13": "3ho4BTc3hbiWVvHusG4c1dJ2P3tyv6L8TN3HaoPz5dbBqBaC4TBEEafxDqbXLWoBeadE6dvU6d6rYwd5k2g74ZN4",
  "key14": "27iyfrmruX4MJ3nupCb8nTWQB2pmAVZAbfPVhEkTbXfzmTRMTn7EWMoV76345xQSoRd1oAXz3T2xZJFDU9tzSqLP",
  "key15": "4KpBGB8jXbAHaLQoRab9tjkhMa23NFngywxfdJugX3dz4ZjKUqAJgKUp8Hd7TLQwGks7AgLwUoMne7AWNSd3h9C3",
  "key16": "J1UUGUTEBNYVQmHd9N4KFLGQKVt7tSC666TANsdmRq3QiNpferLtMjbqTy3MxVNMp6qYyRS3zRXtVNujNDaCyFK",
  "key17": "4udrRxVNQAyfr47jPhYPguc1gsGEWvMx4ieQvBJEaGF8LBKMFmBkk5yNCot2ui82coxRVK64Mf6BzXpfFayw8en2",
  "key18": "RWEiiaxL24jnaR2gCZB47J2Xu8GpokTUNeAu7WGkmbdPjbRrojnBwD63RKfotsPFJpYFtfhTsUrwPzNTw2XdLEH",
  "key19": "625oHssyHw5Pksza1K77CY9MPYuTeEzn38q4UJfSWjEQsV4SVt85djtbFtZARJ9coDghVaVBuKrhV5LMam8ytFmF",
  "key20": "5HAL3CkhwrNihH6mDQS8fSBcmE7vPe73P9amuw7uyrojYeeA7bfwjUeCKv3hJde7sHLu8eZ4WF1EYt3CznkL9ZqW",
  "key21": "2fktQdScbCc7YyjtqUePJeeT1dLZ4DVBn7tDwDhfqVhPxpsYkF9s51MYdkk1k9Kk7iBYSzmTbEYGzjPEx4kRbSBd",
  "key22": "68XbQ2DsTKqhVoWUCY3UttArr9gibP7bA1gAdfRHdTCW8k1uayEppmG5Qr6FZ1WhJ9AfuRGEJVZJ42r4QC3Q9Lz",
  "key23": "44Cr1tdGXc1CE3aHQumekNJnoyfMnkphh8PCkK4BPqTSodt5WdCaB2W43oosL6u1wngHHpt9Zgfn2EcV6AcpqzvW",
  "key24": "3DLQkZhcoUqSGGk9AK2NmUGhmG5yq1NuMYE1J2HWw4je5ezJvL9eJ8r93e1KZVy3y9zUhZf9B11Xkjo3SRCYdXyx",
  "key25": "3pdzUewgj3bgAksxXXYQZwzWoP8txZziDyKJedXU5kugcxHSXTXaCN5jQL6hyxD6NimFRkhZDKcupXCwz5iEfdLr",
  "key26": "2PphkS3Y9Q7XnCWtRXroFp3AaP28P5KRDRcWK7zpDVszSs8HTFPTdqqqYCcsZSGZA1jBonDjUt62RWRq29RjjV4a",
  "key27": "5btZs4dvSc1cyUgR9CrkjK15dgoGaNUn26ya2FV41sraDoTdLfmTS8ynNWpaGiKGa5FY5gqVFYhass2A469kvYR2",
  "key28": "29eMewpiwXnEdsYoKpnYMid7T3TwtRuzFKwZUypzmqf7BaRF3hzM2P8phAxM6wMxhiLf1xMPfrt2nfgc8os36ea7",
  "key29": "5UkHzytsk3WMvxcAgNseu71LfnrdB3Gh7g2ZFbWYfPJcY7R6gx4fT3noMEzibffyLiBqMp8HvkkWjL8ocHn8cD2o",
  "key30": "36h9ZkP4srot1VhDNGCwVukyAzytyWJiJrZqxEDej5mfoo2FdGt7h7Fqnsk3gjbs8JgfL7qhGYyUmPE2ayo9iWS3",
  "key31": "yqUz8bxD5HQAHpEo77bNpU6sgFMsbZT6pTTBQRFyH9uRf1geD8XPuZMgvcj1TfZt1uhb3MzZgpWN4F5CyYbtMnD",
  "key32": "3e85kVcoUAh8snmw3zg1c9MNh3pdtevf2v9KMAZLwdnM4CfGwje6GY8dGtpGq9QV9q6hpc46yAEzp2h4XRPNJUJY",
  "key33": "3fQpzduAuSEczV43nQkB1QxJyoY8FjvGajRYdGt97jgCUbYZhnbBimRWmePpkqkCvwVheHRmCXRGGGdAo8m2Me3B",
  "key34": "h61sCeeHfYAprE54zwFMQ49abEnd1Nv2uG6YFQwyZoVC251P4fomkrk8zeALGfjRjtZeRw1xDEggfjfK6FWnUf9",
  "key35": "5H5GGoJMcqY4vzuM6F9xK2A3RZKm6o3xJi4QvQFpPAjZAN3iNvsFTwKLirciTnQHgSkA34LkWuCcqMREtUfN5tJS",
  "key36": "3EsuwqunoJmLD4xQ7NMbzfmNkfziX1W3wXUGgqYDxfLewF39FZ6hMjJ119v1vE3VbKJKtQqkcYx23U69oykiZdV2",
  "key37": "g6JC8Rjg5NZQkeB7keZGy8h6jfL1ZkV444c7ixF6KaYYfT1LyHv9xVqVVxrYgrTDSvUJh8omPm6pmXaromrzYk7",
  "key38": "k1snYPcyeSxAJX3WkWWNrKBzWYtF6fubLUZfbhEf1gN1gEZQtCdct2d4LXMAKR6k6zcAauqj3iUdEeE6eFqCmsC",
  "key39": "YrJraYcwNqcoTFJrP76ZsrMENKujH69MBA3CMkkVwhck6S5Qv6p3k5dMLSgZNfU4VinMkKH7oYyoVKmkFJ324y4",
  "key40": "4CopGHmkA7GQTDATgnKwax5FVs3a9JF2FvvGxXjeE9yfcCa4JGNDY2G1z6L2B4XxQ7vABmwsXwrDn44hnSJbmSGk",
  "key41": "UUxgUrGHDcAP1hdALDbRzmdxzGzjphsvhKyhv8X9QfrPkh11AD2aL7TTCHVYmCa4K7VoisdMsxAhXAtbFRDCerR",
  "key42": "5NTZoWKchvZ2jw1zn3UvbHNPsi2ur6PpjN3veZx6WJ7VHc8HChbRPTyg8VfVFfSg9e6nnqBD6wF6DitxSbufz5yE",
  "key43": "443ULGQfVBysKtD4YjeW8kcPQu4pq6nLxC8bDsJev8d5ZVXnt2oERt5WHbVsCaof5YybTF3iaUZ921dM9aE3ZRQ7",
  "key44": "5DJHe8NmodpPvW7uoQdNdgPJS48MBt52g31h9Ub9xRkjQeLU4oGDfEy2kMrzNXrP8jLFG18ap3LSrgq8y6iUN9Vm",
  "key45": "5MGze3NRWhGpQmxh8UmsAQRT1fHKerUHhpU5GJQQsC3aEiod9gZggkp7Rvv2gkCxSeGPCgPQq5nVeV3RfjK8VZfE"
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
