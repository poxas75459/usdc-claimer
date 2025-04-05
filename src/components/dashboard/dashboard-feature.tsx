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
    "4ska83aQUmLTauk9RYqKowizAsp6MAbGgFbkn1yHkuV7A2ZeduFvA2VdyLrAmYpa1TpUirWWZdZDzwtCLm2g58Gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e3F6qxszPMZEYFvhTjKt4ot7YNPcFyH1zgLbqKnymcwNi75sMomEtoZu4qWKpzR59nhD7dNB8k9EzC7agWCdotk",
  "key1": "TGwnnfXWuPpg2tA3eJ6bFTDh5D46Z1Yu7QgtBDGeR6vC8uDh6Zr8cWGjwFJfv2dStQsZuJSJNuSK8JM8mxojuCo",
  "key2": "3FqtCybjzknmf2bWWw7dg9ndbpbrGuTXYsgM5CaDQPf4nnPgMg3Jh7yGbtTJjBN2a9KadgWq9rUNpxaWTizYPwE5",
  "key3": "aQyeLXzLheHi394CXmhbaHekDsf4U4z7qJj6P4ikuqyV7sp4Tq3szfBLhaWfeEKSGn1txNjJ5dZQyityUQcrGSF",
  "key4": "5ygzoYp7NuEqFzssZHN1SQHWqHRXc3769nYUabTV37jKAVHxduij4LdC6buB8LZWsg8XqpsCWaTfe4fDsFWEWvkt",
  "key5": "55gGafoWsHsDeBteQkcaFyZ1tNfPhBezBJ7i6bnBdaodLYfvAATvNBBHYsgXH2u2xuyBf67dAn6y2akBVrUzRH6B",
  "key6": "4DzagecL86zTofCSZUXp1R4rnHWektKzH3MTc35kmD6jzpfgjib9SympAfkWQ27jj1GdCTQQoAmYBULedwXhzTvz",
  "key7": "3FoViaAkMahSZEqRoZdLaQbShrmdpeW24cu2vPd5XJtzryB66J2jL3Q8c5GjkPz2cc8J9KdVDGmZEngZqf4RjUTX",
  "key8": "3vq2VKcRDjGTrhMCZVFuYKY8Hsb9E3R2rQEwSAiGzKQaVetakmQKcHNmjMmvAk9m9yxAYm7J5o3iPBs7RHhpzsMr",
  "key9": "4hsX2Ds6maFotXrL8FsnzKML32eipSqe6cm6J4efxEMoVZMXzCnvmz78ktMLEJdG6zRWSoZKiVdGzkBFneUTem1K",
  "key10": "5zGqzoSusRS8F5JBZ5LWgm2ehfWcaZXat3izcGKSJG8EzYyXrWHW1h9Xz3axPPYHeyJx4MTLXnEvZCKS4Q2NFFH2",
  "key11": "U5uNTCSj5NTk45QVw6oEi5HvfG5q3gC8cxdS3JEx2RSAQMzWNxmurHviYDVUR7MZ4D9JGsA4Hu4DVoiUNq7AH5U",
  "key12": "3TvhV2NSgw8Pp7DJHQdJdxQ7j3haHP2NUEm4DhTE8zfXUGwQwWkU4FQh4uD5cM7vxMcNCRyWtLTuqEcJtNwp4sw2",
  "key13": "5QFQXr9y1SPvqmjffrvPum9JA4shgX3psJuskU5uW8EgVT4MYoaoxJRDBwxhfukPJTHi2y5Vn6NU9VouiscmadDf",
  "key14": "3QvZVQAWXvAeYmpFiVdixqot3zugDnBvwZ2mqXEVigY2Lw2mLEq1SGduBNQ21YLy8SG8B7jR11xEb1Vgrtc63uNE",
  "key15": "2efsN2CVNbLGcPZ9JHmnqCzeSi2CoDouodgFMtY2AdDhNKpazXv4ov8iQwWhP9GsLTArsa1zBRvCYC7etfmUudxm",
  "key16": "29aVjCcXkH2Ud4NdagG7kEmzMD36rD83svh7m49FwYdja4XYQqkaEC589GYUgAMR5QCBHM5dfVpXaTpngzmEhqYY",
  "key17": "3z1VtnsW329me5TBni8CPHEUXepPGxy4xC6ysgPqhdn2SRCUGpnnzutYpQxMWkgetg3Jss7K4dyupKVTpCmffmHj",
  "key18": "3vDwZ3sX9b4d4dfrVZGfeWj1nSZ5TmCZUB7bcwRM9sJ9LDM1MJ62hAj5heouhDGknDd8LEQkUXDcsNAoAxx98Rbk",
  "key19": "5KMSrzS1e3L5FixXwQTX3vBo1zFKbvo42XqkVCYfKwxHNWBWX1ZfiPeyd1Zv3SxD1inDUjw2kxXcghfE7gUEv7po",
  "key20": "52SEGa9BZXVbnMiuWhhYjPTnUnaPZcXJCqVDfYN9dWxSLp4BZnkwjYAmsV5hp2EtEPZjvGUBZS5ewSRvGwiJzwj2",
  "key21": "65Ww7BmttjvSodb8ELubGGMhePW75LsehhscsspZvnib61BoDXV7XJ791eCao7mZd1iKwmMWdw1ph5MuJcQ13z2c",
  "key22": "2MCfnTnRAuEoeKN9mbjBJMG5i1yNey7L2RxqVUWUJnVQ9C6Hj4z9bkKqMRomiPbP4KQYrRwnhTeaUF1DbX1b3jxB",
  "key23": "2avuH1DNDo2VtsjVf5HohvNG6LwSEALFDdXizdLbpxLjCGX3xWKuFt5DSAJXV9mRYRUM4SG3wYnmVsWqcD76SSav",
  "key24": "DpgiYya7iamHmVZNux5Ywu6DCJfwUJVioWPFJn5GwR54oeTN8cJWqqSSMm9MJNJprqYD8A7LYMKvjckcRwDYBu7",
  "key25": "4fUgMGEjRDruGjuBFYNo4281TbSELtdiBtkM5AY7vg8cm2RPfL5EHt17D85DvprmC6vRYSUj1xwJxwpHKLqoV7ES",
  "key26": "5qdy7HKkSYNUYWSXxTSVC5EtRDbTcjNuSWZyEMxKsj2Evst4nNgH1XsTrgNg78RBPzbB84kmkQuDhzLncFSv42L6",
  "key27": "BpMK79v2dm3b2qbMZQC6uLbdWJkFSovzWzbFLi8u1HmPfJSsSdj5ve2x8QdCUFwGsnrBqeZw1dqxZKrG1tT6hAA",
  "key28": "4fKMrbv2EPAZHTaKYRjgQUmDDe3YzXJGRUbnKHiUXGd3oZ5yQNf9tFYbqfemkwrFZiJCB9wzkYx6xYfyXtTsGseb"
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
