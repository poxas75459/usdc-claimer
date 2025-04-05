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
    "44Wu2bTy9oR5EdPzxG9UkCtbYN1BNA8vdSmCqXsogFRLY3FV8HZYcjzj1ZRR2VXGuoCgswB296nMDvgWLD1emT5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4dt3E6cjFDYKoyL7UBCWoH3f5GX1Jwi24vqoGqd6WYXxReWoF7E3VWYpgUXUxqFcY9oqGMo7byiSGLmn9nrYRH",
  "key1": "5hpZ6NsT894aRgcEDN3ZwqrzdaVj6QLFCASWw57obobUvFfz7YmCWb34uP8FDS6wi69LgtdzvLuDUEjKQDYLmt1k",
  "key2": "39TQdhstVjZtkbyGtdzhKo8ic67t2voSCeRxFLv6GBJ1pCkXMxUC1CYpjvfwFv58ctEVhE97g78ySsSaiMnjgKNw",
  "key3": "4sLHPvbtjTRgewfQJDpHUPeW91goQuigWVJgpQ3QV6nzC3fFQWando4LFV9kZAo9epaErmg4DYuWYcSQa5zRhsag",
  "key4": "2WZAMRuwKrDEF3ryWodwMCuk1FnY9LFVUYhmmhQobX2LgCUkRE7afP1F7vygunGUPmH2pNZVjQik8Lt5jnYt9pVY",
  "key5": "DD6Lh8Vx7PRF6ChEpwPg61tLZ8SZiHjc1t45Ud4ZV3jGE1jhKwfAdJCgYmaqs6AfotKLe73ekPsayaLtxZEwdGz",
  "key6": "4RoobhXYo4myD5LauvSuA8a6LwiYm3xwLTfKuMmjoN98iV9QMaZaDkmbHcBZxLGwBc7cCuX7a3QeUqXsgXXTv9Wy",
  "key7": "C8PwZ9A59jzrAwzRhDGPDuYJkxtoap8umHJRRuB5JuhAipJVdBFZuVCJzYWP667MaMhFaPeZeudQJ7T5gYjDfPb",
  "key8": "54bSoHRhpNVZhyRYRCJ5tKVERUwK5SQXvnFuFWCduYyhAH4wSzX3nqQxL2WhNa1wWL45YWvznWqXUh6P91KVrQ1m",
  "key9": "SyuFg7tCzZNZMhv4QhN5XonsQj8VvrfnyBvq83G4DbhVyDymSszrZJ2VPwmXcCBVvbic3ufbosbNtTmFRHnoEpR",
  "key10": "5NUbnrF5aob6Ni2kh4Bddrbko9qAMZt7oXxBNcQT63Aza1zVuXUCGKWkNv2RMq47Agr7pUtaqcQV8bqoQDXjJZzL",
  "key11": "4YTnsKFrUwYHhXzPc2rxUXHtu8MraYi19Brf2kioGYmbnxhKMoEUeec9rSHab9qyc7D88nQdUkQZiV3oRqkDm9oY",
  "key12": "57p7yqkNitZf4zwRSLGdgiXktF6PaJs8D8PuHhigWFruCkYZd7V8dNLokVbbH7yxT8fPXEou8e4qRorroNCpJ6Ek",
  "key13": "59fUxS89mW6gBuo5956o7mnwoPxnDbLucqopFPNPMgeQHScQxZvhFbiPetzRoVRVoXT7hXRACC7xaJm8sdqhPvBC",
  "key14": "2ZzZ1eLbbWani8jzhepx85A4j366STuLSaJQY5bjxj6fZq7J7bhrP5CgnYF3A33hVBjqxCtdVEVXDh7CuFt7dTsj",
  "key15": "2Q9hjGavV1h9KKF1vpEcgYF7vEp2Rv4L5wabBWYi8wLgDMgzFsUtScTLSB7Vyqx7y8mmBdPQXWVCFTuULGtkLF9F",
  "key16": "2T2zn2MN1xHgs41riUVrroymdnTjUeaJgaQLfxrdVC7Dv6J2bGWjprnA9UjnyQCa2YADd8LhAGMbUJFMFZrjU8jT",
  "key17": "4Y6MYMXwwNH8FgemcoL5L6qqr5QYXYNb4jQ7zhNU1nyvTE2aKH6Y4P6SL6i3qBjVwpmC53UzKBV7qtC87N1SwuUM",
  "key18": "41qXJTonGc3ryaTUrGwcesWqD9MwoF8f2KtagXyKJbgkuJ3q3cNpkH4haWoo6RKR1bYK2YY9WzsVef9L8AuVETYC",
  "key19": "2PkpiSeFuj9yrMjK2RTqJZppxycjJcGq2pnG4y9fDhMGKibCpcXDpgZA1AXYAqpJPbtqMkNFBLFUCsCrS7CQqUFt",
  "key20": "4SxkUvAQXGTxvFJNyaJt2yUmsGPBQCiPtg7mTxsR28vjFMqtNvUgMLYA3ufUC4Tv4EzUVtgPYk1y3k77XsYWiZVp",
  "key21": "3MdJpB5WDtGi3tQVDtwzhng2iieG74jXJFbnphUCY95tJPvnbMJ7s1Z1AZ1a9uX9MDrMhBgowjvrhAT7VY67fd74",
  "key22": "3gJkbuRHdSYvbPBT94FBFsWT3bP7DS12Z9ykhPZkrQjhJcNL8JDehu7L7GxrnPVkQqUcfdAJXdqfzP8gYAZAh1Ka",
  "key23": "2s8MtpVRCmJfe8so8KgeJMtvh2LSducGNJAtVCLq7YWB65MUgUC45T7aj1xA45mnjT4zxrPqgriodK5TaJVzksPL",
  "key24": "zZd6J5gE61AizJZsXBECVyLrsD14CeW2ZoxomKw1DwwqUVTbxdBW27UwV9HcpoG7zc5iAn1RJJD1Y3N9fRsZpXQ",
  "key25": "1trXDnAhXodaVvKgAi6Zpz4h6Ne6YdWarjovNqis5ysoEPCa2585Hns5mXeaJQjMDnxKFaVaMfZBdm9Tpie7q5g",
  "key26": "eSuU9v9yy2yE5dWg2V4Drv5aM4kLLVXNi457YexYCSsQBPqKSJaN3iSzxd5GgQpqUzHaYeGHP937L3UtjAWKoCr"
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
