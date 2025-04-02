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
    "67XbAK8o1WDTGpLBTaqSGYpkjxje2QULiL6MqQ7p9FXh2FrKCvjKFmnKoD8gwFPq34jebNsPJiTdLizkDa8HQFHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d3LXkQSWzLfwGHXZr5n92WqFDmCT5j2nnNj3eRkFH5kncnEo9zUgSgMPhaJAcXbcgrk52Ey5iYi5VVxE79yzrtL",
  "key1": "5CtJqoEqN8TznhKLe7GeLhTHvX5R2eSsYRbJHSiQPKjGF2ZGv2xQP4o28N3ZrTuK77cyccBmDJgTuPFjC1QzJPh",
  "key2": "28cYMHpBja7BHroo7NQ66aGDPY2hpDuVdWPMcn1sUxXdXyKa3RyF2rwoM1y9txsJMagHJakwQUnsTSZhaf4jgY64",
  "key3": "5rW1uunA1byHbFpfLhFZuY3wymoPXCEbA3aufAUpPR9KipywT6FZMwYQ3MqquCsL3pc9jimKg7fQtmY4T2AxKhBJ",
  "key4": "3pTewE2VcJxdEiLmgn2i9VCHmBtyR4gf81sF88va7zeHypyMLUHsMsLein3DNZYow2RTvvcDEJ8bhUtiGrwt2tsj",
  "key5": "2TfyhybVCa1w1bbpjTzDoNJR4J9dxhhFtbxvQ3X5oJkYgMcn9gjHS1H1oi7pAxGbs47VvfnjRL7YBb1KC8PFcDZD",
  "key6": "31ThHymtZ6g46PX3mqPWjugwRGWc9VXELMCxtfACGVPxXR1Dz1fU1RhrVg41PeyCDLnJ7ttYx569rwoovry6dYRJ",
  "key7": "3vN9WFSY2SKYMubL3o2SYUVSAjeGxA447UbteR2Eo5R664kaGe1rWFdcr8VbPv4vXgkU1mNBxsn9LVG2cyijRW1d",
  "key8": "8x6ctVbTSGuBHF8M58qbo8Fx95c1j56wrwWLLThqzEaikqY2z2ejBdxArE94o8uVFQdhR9Hs65yoZDsNCFQD21L",
  "key9": "4mX29pRXsGgAdBMfuuh25tEsZ5QySe8w9gzucJQiSpwun74C8G5eCHiwGhGn9HWpjZbXDMt7cebi15cKES5UfZKj",
  "key10": "4hh6MCHQR6DaxVh4QCLZQpEtn1uCxPkxRrhnvHG2N8mYkreyzCebVnTqHu2guDXZCDTBRpUNMyz4qvDTuXUXNVY7",
  "key11": "62bA5ctX9JcepPU4B2qTGnR82gtpH7vRqqCYnMVHDXRuoaJqXH3y5XRqkgioQ1eX5pJguCc93j2ydzQQgn9QscBJ",
  "key12": "4rzhH1pr63mh25TBf8eHowLjRQGLMAG1aaB4PuMWbjA6g1ACge1f739CaxrmSdesPGpKYe1pRuoHm3jE685bhyiq",
  "key13": "2G7f8UBBZjb7JEQAiq6Z8CczuQsAGAedV4sjaKAjtb3bPuQYjp2GxexVxFHp2kXRd8s2cPAyKADCXLSpMZ2QYkt7",
  "key14": "4bSX4QmC1eZaCxmWhnDmVg3c4zTnW1Jsfh4yigccTZQoBsbnguzqFMXetdVevaubRUuvcyaoWWUdoW7pVzMJaa9L",
  "key15": "3zB2Q9nMN7scjcUEskoP2XuD8TDhqLKjp763bLbcJiAYwbjFPnEgaAVwGRZJV6Nt5c2maDhYpZKortuVtnYkxhav",
  "key16": "2jwmLdDkXQN6tWBuAhKBuQ7FsKs75MPxWhYxfcu3w41MWyL4uMrxm8mXkwbYd8LXduieDmEcdXnxYxrGtXH4iMRR",
  "key17": "nFx2F8cV8ZxBXT6NYJpuGXwMJso1eZrm9KamV4h1keuPq1LhkcJ6xBvfKmZz5uad5kTgXF9r3hQrVStLoDygur2",
  "key18": "3SQ34e6TpBTsYyrPKvaKzFhhWUQ2CgSXVfk2QAMCsNd1EsPtJ3XJ9yFZqtzq5Z2dXas74hKZNhtZwgPwdTkUzzPQ",
  "key19": "qfX4EQzYzhCFpukJgnFZfbQB8ArLTYnQctMRkw7ybaxyFFjTizJpapHwMArCQi8h32wECReqiqyquncrqiCRuJm",
  "key20": "5L61ULn6nt8gKH65G4FkU9XtYXu46J9NX5SLzCN42TVWgeKRkSQGJkEq2HWji6v2N7nnZAGkpDh5ytFDgSEQgeTc",
  "key21": "26MDPbvK4gV6SXAzmceMeSxdBJpQZ9KyM69vHLgYVtEcFuwk6x53HSTqvkPf2TrMhFUc64MpjHAZ53QL9hGu6k89",
  "key22": "4DW6twg6Q5pmfSSujtmpi8uBn9RGKLbtQ4MNgz4at5RRmav6pqZeP6aMHYox4hyRRKJBEiVT77yAJbfb3tzujswp",
  "key23": "4tTPeFpMv98m3dnEXMAmb56iur9tf9wAm8SnnZTYbV8ARx5V7Bua7r1gCds89ayxQ6uB8YvGBe6xX9Pwa5EdYNGH",
  "key24": "KwE9xgh3xKgZoJPvVBcZegkf8ERrAzJtvZaGosr8arMffkgxXuyTJ7QUHjeZnZRkBBp6pqsbGB3pkff62Zk7M1D",
  "key25": "3J9GK8opNuufnRyHHiFR3hjozqBX9hSibZ1fJx2iiqUdAph4UB7BzjHr6oHTCfA9zor1cA8dHAqTfPvp6tVx75HK",
  "key26": "nXjuXggWAD8faf311pvrXwA3dqG5f2hwxMTGvJ8ipQy3NbThVW5tRTPrBbthc2x97GqeoSTa6u12jSa7Tyc9tE4"
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
