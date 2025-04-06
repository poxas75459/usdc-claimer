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
    "2DCx1TM3NghYvTwtbrLAuPN2xYjx1f3TAughMkvYaypmUEkRUPVLC47TnKZRknDAP1fYWQZncp6c7jjPzYzyEeCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y9mhgcATXWzGaru4Ky11nLbssmmMP7m4bs6F4a14HuTeBoMdFRt5jRgUCLM9Ajea9c5E5stydwmgfr34hPJzKca",
  "key1": "5hjUJFwycD2FGhkxLrc2Gxfaotg9S1JgxCi2HcxGFTGhriW8R6b1xkaejnCKEExEzXem33DiDVA6RdS2uJ89rdsg",
  "key2": "kfMcdKx1uo14DzVwyJSFif89xLKiEBTNjgKxz5tVYJALqEkjeJZyrj9AVULDFHCUzxAMwZJfW7diNAcik5KmaGy",
  "key3": "3kLeCpj4Rgvax4spjZRsZh8erZinNuy4yNS2jrCviqspKFL8XaPkSGabiKECivk7PLyC7ZS7WihugDx6L7ZLNyGf",
  "key4": "2SVCjKrM8SnVx6Q8nWTBBS47cEYm44Bs5gWNdrPo9Dcab5QirewBN5gRW5LdvEumiN659mHCPqPytidtmvLq4e4b",
  "key5": "LKEteprTm7FArovLLPgx2WCs72196FK6PZt5mgDYwSmdz7R9RxYYfwPihgGciyAwr6BWmiRPNyCpUpZRJy3UvrK",
  "key6": "2BPn3XXp5UJMvew3zdc4wCNXvHouVCqnfoxGwxFSv17M4UfHXSPtft4nhDX3cPERRuUCMtfToH2Qgud8GiksqXFg",
  "key7": "3Vgi31xZe31N4KhVx9eB8gBtenpNwxarxtE1zkKSuXemR6sjtJzNcp1syZF4nMT9AXCaHGC1maHSdcyAckvm9Pvc",
  "key8": "VoaXi7NSm7QxQLoccxeofyADxtu1YWLi4MadFo2FgVYUZAJ5vdE95C8Fexz6e1Nv23VGTYw7k8cEWzKCnymwZHe",
  "key9": "631V9YY9cSLjxAGHkT6aQvHH2rSE38NLq1mPitYNqA9tRSDPzV5LJuG3RWLmDUQHEBn3CKZGX7wCAjkBDAyS21Fh",
  "key10": "5CSNAHwUWtE2GrtGH3SQJLuuNRo1KwraWrAajLPvfhuneyUbg7MnxY3nyxsp3TnmDtJeWrQjidjEac8qLEEDooB4",
  "key11": "4KPA2NoQbj2sbmmhgnt51ETWx5PvjoJtGnyUXqeNAg7mGxkVYi74cCe2k2gwmomYKNv2N9WjFMw5SMwHXnjvdzbN",
  "key12": "VS3UwyxaUEMyxdn19umsKJBYHzEwB9bKrL8Go8Ubzw4dN9ixBt5MpHugCaAiJA835oWBTyo7UDMu7RYVTYh9RZq",
  "key13": "5UX8rSR6mVstcj798qEmLimqNLgWgcycqabtUxYvcqd39iAzbeWWNhD89wbz7DAgHZ3f5GjNWFrwmMjW4QVLM5u5",
  "key14": "38m7T6tLasaXCozbrYV88nCWWxnNeyiFc18MvbA72tG2ferBBR36owRvLXid5TuUtLSAbZP3fSQMXPpRWxCzGEgA",
  "key15": "jNKgQdzDWYYLcQu8MVNbSGdCNeXyPZrwEZrxf1AGTtVtmqxC2kjbB6RM2wYrMLKp8MJjRnp2ye1QJTRrU9F29mb",
  "key16": "4nok5nwuaNnk3r2Lk26LvjGsyP9sTH3Lh4BAE2zHXcx7vjR8jomZVUSZabfD13pKqs7X7ATRsyxZNJnWnCpb3ve3",
  "key17": "5Ke4QJJL48B3dvYGuphKjtAsvoY1YAZayvwG4Dx2H56kQNygWzUbg2Fv2XtSUqneyM1wh6s6VwV3g1SiuFNnMh4u",
  "key18": "2UAMZKqdaeVNmXyfc9osNxQj6vbzuQbwyecvkVFE4My6diRxJqLZ8r1JN51FMKxvH7Hb3EfV33pdCEt2jTBYQTag",
  "key19": "3fsRbhjPd9VZHcHdrNHuhYFp8eZCb9yQ74BDiwCxdHWxVB9ZRPCxoABTpwD7HWsUYL6EuA3jtD7NE85LsUvS8Gbf",
  "key20": "qwdGQ5aUppkF6Af49vn359tszL734vgoNUfyw4xNqEMMikaQDWwHJzr4sD8D5N2CTGxS8C6J9UC5VpyBBoSHzTk",
  "key21": "55WasKGgk6i95ynViGLWjRez3EtwQbtagtvN2bnBvTpRwe9iyFevgZF4iFNs7amJCzVZDFqUmCvEGJif8fC4zYDU",
  "key22": "3AoqJPMGNGDVLpytanadJVhCtYickH15PBrZenohP7RdVw7u6JLnTTr8ruzrSJVmxY2VqC7tPmKd9sEPjfKDe7nb",
  "key23": "5tzuXLk9pAT5eaPPC1x5Wp2bs7MxCczbEF5RR8gKpod8g4E1xHkY67LAdnVgE2vnRdcoof89k5QNEgZGk6Eagqns",
  "key24": "aJBFCVqqRjC4HuiQMhbhRit2kq99SENihnvkxJQehh2ncd86dnVBWry1xGJ459MmCCzvSgtDooWQj83eKbvsCn8",
  "key25": "4hwt11JiW7Bh5s3R9dZvLETzxij2ZbeA4ke3QVq1NnNHSCfNRN5ZoPc3eBoL8hQKXCUEVgceLKzUaq1nm2hwH5C7"
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
