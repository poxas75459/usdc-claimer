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
    "YE9kxhWjZSmnmmuHFDJnZqmbGzZ2z9eM7BETtTsCmrQH1zKDjz6nYa6pDaRqRn7bUuBSDqtaBpHmmEr8TqqsPQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTwT96k8E2vNu2FUEVE2vMt5o12nmWF6eeG2WmHR9iV9u6RcoBHVKuhonPEKL8cVMyndKqfBeNybZfSFGGTjzmA",
  "key1": "3D9crSk5mW3vqXRo1BDPCNbNBVr3QZLHMfpFDz4baGLtKZDkh3MKS7wp1fx3bw5qxu2yd58mVtKD5HDmRRphQXqX",
  "key2": "4NxKtPf9gr6SVJVdosd3XhHJ8WEUwtuEjCteDcwTFQ2eCPPJ6ydGGNWgb9qWxtickyeidVjjdNBxoiJJXUgGtJfK",
  "key3": "4ZQxQesHNta5q7e4CgEWZfCYcPq8ZGihjoxmDtq2ACNNFyxtZX1DAr8o3UBDyn5QCwwvTbZjLcfURAXisDgEX5eA",
  "key4": "C4nfEgqzJNoLfvasVjyNvUs5vCE3Kqvw9yUDchq8qsaWHjS7srG8vG1Nq7A5QEWU8RdjNXm2vcp6ydBWt88U1Uo",
  "key5": "44Q2Dnq3MdUkshQuQYkNELK8LcsaA3h9KAva3VWm82dpBZNXPpqanGMz7eN7kKtMQtjCTBrp8w3GQviN1CKp8BNC",
  "key6": "5WNCKc79Gve8fHDf8TBRRcKQhApuLJMrdZxreofG66oWsHEdsRRxSjjhqkHvaq4tP3c81SCJpXzRznEPkZyQwetC",
  "key7": "24zNmMJJsK2c1dHwrcC9BpgwFQSLwwaFKPUodbmYLSHV2ShvVS23qRdFxw5q1A88Gn9JDCbhrBfV6WQcMecFTmWw",
  "key8": "5EFjXnDLqncaMJYMjrxgyD84N6aQbAuJ3LxNiVe1EwvjQxLaRcShPMeFRJJEgK8Yrm1mGXq4pSyhz8GmrwWwC3G2",
  "key9": "51q3f6saUCK2NGmyqXsomWV6R7pjXb9yFCwaQxPNagaYngTWwu2EXHKE2DBXAN3fq2q5rNNCtyeWBdNsa3UvznJC",
  "key10": "5m8itAdr4tNspBGVQNYv5GX1H2QnCT9zB8us1sENtwNG3FRBWEejwCjKMR1cbzEB7oJs3XUA9qudhDeTAknXZ8zt",
  "key11": "3CRxue4LTURp7pjKWr94bEYJBKYMbEpgN9uF7ou8C4h4SBvR3ycT7wptxQHcEZYRnWZLoQfo52wLci3ZqMLUJ9oZ",
  "key12": "62mzy4sn3J8fSC8mY3oJ8rHagm9ajwsQSXjL9WKGLi3NCKCdZXtQxgiCmi22yaTVRBxyTjK1rpWqEUUwuymjKWK8",
  "key13": "5dbRDspPjs1BMteaXncwYtKw2Yfhfxtppc4vt6PVpduqAf4B3d8CG9LKRaBoEzqeUDepCADR9scR9jUsT1bWeBoD",
  "key14": "5QizGRvbaARk2uUWByaMzErkjWoy3L1EhHRhmVUUAHThCnsbXEktrwt78puJFW5Rg6rxFALKGNA6mnvJK3rV1Mgf",
  "key15": "9YbDnKysh2YBaLB56n17G8WdwXZY57r6c3x42WWxT45zFW4EKKSF2Jr3HVKcqZFyX4BriyD7Uwni1Zy2Vd31aEJ",
  "key16": "4sp8h6mssW1KjzQV8pwjyGoEKAFnvUyJED6rE2mk15sz8auLUqzah7VJyMG3CDwteydQzvpE5WPPgEH7Wm1o9YU4",
  "key17": "2LRoLKzosAyFQiiLwZuff74dESSEpagTa8duopP2FU6qRBnEzFKtmrMaQzNKuM4NgEunUG1SPb6yKrmaPv7vCvWp",
  "key18": "58sX4ZN9jL1eUykSCpt7Ks3SHmUygd3s2GXFoLS6eiLdZbNVNM7Mie6axUovvXBwqycCRGf6k7rprQn8VaDqzSqa",
  "key19": "4xaVZ4rUybqTQU316atN2ghp8LsmS9J9wjYH6EVFNopCB3h6CamMbQFEyiy9UZh1xG1wVrAMnmSeM8owrUzMPwBn",
  "key20": "4QMXA8AQW8Myx2X6nBmqHgy29PwjPb1LC1GhWDn74fQTFH6aYsB7qteeZMehwd2fBPQN2v1Qm5pAg52s7vo918BQ",
  "key21": "2d94MdBE1caQ9wxruJs2RVMebcNqwhHQdv6DPAxhUTUhMJ6GEVXiXiTZs71YxTsBGCAXHMqKjPCyVrbYmYf2tovD",
  "key22": "3CKLjFrRMC6pPPGRHJrRnaeerrT2Dd6mxGj8RYYh649FqUDvNg25DeqcTr7gJWY2FHECXEDU9SRgNUakCDoVwwkU",
  "key23": "gqMYzfTBjXNUZXPHYmMuLP5o1nLSe1Scpq4VScyhENuGjkztWpkw5EMvsLT8KjPbqLTSGkXtitRXkJvpxVtjS3H",
  "key24": "ha2VaHey3rTSpiPFKG669dgGhWzE9FBi8gJ4YMYFySgzcAYuuj7tJgv36Hgyh3VKnP17vEZjFe6m6YHChCTLPVa",
  "key25": "2Y8ycGk1dYu4VjBDfr6G7h3qPcNzLZpqmJeCPpfhQdTbPzxGV3WJ9U5uAFoih1UMxhx292UHAL5o1b7YPibctU8r",
  "key26": "2mnRy5NdsTcPW2BqKLRxq7vXyVbZdDuNNaTJh3PqWZNmM5eaDT2SGjUUTtsVAh9xmJYkKdHviuLqGwzgMzZqSAVS",
  "key27": "3ZmVq4DZxzxtMDWSJMHfSWNNcMEBdDbgBCpn9Jq5QrJgjmJeb79PDahFqcJyzucq4K1UsDVn1kpMjqVgVATgaEsE",
  "key28": "34QEnR2gHexAPgrWJf49q6jh18DcndMyewwYna1EoTbWAwh8YmZoDTefuZ3V5rtxUkpdLQTRp9CEX82RRd1oV9og",
  "key29": "2KTmjS1fguvN3CGtTXPcK7XRaytA88nuUSfFabjMaZuTYNBBmAShBBXMUjrKH6FBtfnA5trruKaNF21usoBrezWq",
  "key30": "55RcDTCqTceMmRdNme1U7U4f4wBjHs1VKyKX3RmHyMD3yZq4gRWa2LNnNW1Tuvb56Kr1yc65RbnbsMC2nD8PEUYw",
  "key31": "4HNveM4Kqg4TcKiTbX4y1TSiqpCcSRWEJZW8xmLceSPjkLExM1pmQV6nkwQJAKmBUb2CcQSeent7AfjzTUEG24Xu",
  "key32": "5juLk9AjBFuCrc3oaJ29bahDBnAfQFYVzb3ANNy1DMkRWugw2Wmows7LHBRo8VZ2rgtgjy7nC2wcbiF1ePbZGSQ8",
  "key33": "2PEZpV4NhEE4Y5ojoeJY5qfbm9u1CGq1pF7gEjEJxdxPP2VMmGQPRAQANJBYmsi95iviWF4hACKo4Apx2wLXgXDj",
  "key34": "3hiGDJb15oQjbrbGsxsQRDXcfFeDpdNWcFHPQ5b6vXvtLMajupxwmG6QpdVfT85apTyZHwtAh6TXTgzWUYLD1Yp3",
  "key35": "3TVj878g9BD4RcMaRBvUYkYN75vyncfDWGj9GcjUrGpvy9QkZ3aCZ3dC8RiU5SU7uHpNNi1pHJu9iMrVtJpGxanG"
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
