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
    "wE9mdjHtbf6xpTU8SFyLH8sCre2oEV6y3gB2zrUJYu2v5QR7hRvdyXGEYRraLND7993nm4MNNLK5i3NYEoKW3am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cR2GqYb9miM4ZMvh38RA987UE9Zm5r5obpUSiXYwtuJfWNeVVMyrzPTpUWwNUzMDEzFwWr1e2nwtPVaZt47RSUp",
  "key1": "5DgGjWGbdBXcEiHadYpTAS1v4mqRCgrWtjhAARkkUtZDNtWVdmPAn8kPPhWT1qaFRZWsqHa76PUgeJDHcHxuceMv",
  "key2": "3UwrxbpQgSbFwxYg8ZPGAsZddCPKULubMKj6MmPESVz9oTr37paBaradQkqWkyiwQ8wuChfMK7qcXE3zJ4jxLb1S",
  "key3": "54LsSNy1fRfwp2f9PYuV5JdwkJTZB5wMzQNEQNyi5vvZS3YcCyY2cnWHeyphtK7kHZv23KeayLdSzmJVH9T57T1H",
  "key4": "23jeef832Jzz4EaUq1r38HkUcT96PqbtxHkx3cWqbM4sBPYFgpWTXRdjG8dyQ31itXVgq9DtG4GwdDUih5Que3jG",
  "key5": "4qVruNx4wcfRiUnFsMkwXUFiEf4bgS2n8hFyTcro185MBhTkWt7QG3QUqtvgK3LugxavxnMRiTYDAXa5FBnZoXxe",
  "key6": "5QM37ziUo1vRzqF28cVM3y5J4nnfsqsKDqi923hoHirsYmyQqw2nssfiMLrUduw95MKkX3rE3JHq2ZQDB2THxdSV",
  "key7": "9Uvn7k4igSJGuLrf2anpDpohL6WVfqzcJSDKG1VRzTQhAfnEvHyezjz7KoX6XkzwhFSUSc55GYMCNqTeY2W6pFo",
  "key8": "42j4hLphni6iMEj1XeJBsg8gidSqSKm9cJX6cjdG8wYUUsiDPEXdtA25S4ihas2AkEz9uWvTPZhz242xkFbS1Lut",
  "key9": "2YSL5XDfLjheo8pdcJ6udDVX5e2UTMtR9u9Y2kbNw35aKy7SqFQBhyypd34Vh7zTaoysuxKGbw3iy1oFTH2CphBc",
  "key10": "2UrwvPdetn3g9eneHsroax4y27JjTmB8KF3YkMBndzMNTm8sxwjjojnu5oQ62DtcCFtJzw9s261xkWJLWzAmjsnG",
  "key11": "3PqYL15DB4booXnmGkAoM1iGgANuJZsod47NeZ2qagpqzB6aoVGMrWETqj1MBqv89iMH1hPGoFGJ5cuH1A6KEJZi",
  "key12": "3pjJJ71XqkoTVApZEWzmCfe8tMpzwQNjU2i6ChHXTiUhByuW97FZqKmf3pP85AzNyvPtL7EUrdPDW3JYVPmeTXEX",
  "key13": "4MAZYEsaa34kgfEU2XgobQA8ggx5Z7NL8YqA9TFQGNk2wsatzg1KZ5PE769o7YzorHH1Rr9M8sMPzV8WAXQiAs2b",
  "key14": "3KfF6G5CRLq5r5Ghv8KBJyPore9h8Vvm9kBBDB65fUYssTKghbAmKmp6UJk8bFCiNayDjQLDdQbx6EN41L8sFf7s",
  "key15": "2HjQ6njFtLUhp78q9h7PWeDi68kFnQAj3EG2e4H16fxe9VQUJkitTMKRWqH12fHSsQQ8qwSgF5enMd5JDqRpQTG",
  "key16": "2PJK8w3CxfdxJJGKMoixPdVFDwS7ddizLQT4CNTdBaamLQhTeR4FCqQPtJmidVjwEynVDaT6VjjvCb1f4cV6vH5T",
  "key17": "4qpD3nMMhzaTxuqUqFqM9km9rDRnMEe56oRmnKyx9DedCW6yz1Zbd4nQ4kgegTkru1w5Ljtpij2uNLdhZd8ywkFF",
  "key18": "QqhDKXdwym7XY6YqdyYmAhmyoNrdk4ESsvVzYAtRNwvXiHskq3UgHEuqtyBAYaaiAc27m9mRJRvQLK6PoER5DpB",
  "key19": "3CL3noDMiu6xk8QnC1EQFSHdXbGPPTFe7jCyENRDrM8HTpJR5bznrNZRsqnrJaaKCrZajybfbi48HnihcYk3eoWj",
  "key20": "3yHAeAGBtDUE1SZXKCSbWdpoqz51SyiUxvaX8nN1S6vgvXdn4z8eH983my8g4iqZr9Uc9U9VH4cFVMVXvZ4ayVXq",
  "key21": "UJRmzmHMzhDC8pKWpatpowc5caHn2xzWFKzqEKpnAZXzCtumATrjsRn2AJtVejWvKfCxgNKxJTKVW5DboqaYcGV",
  "key22": "2TvovdAajojgJ8nterscF7z3bXUfP5aFLayvkVPdEUSgDwQ9AznimN3kc7pcAisuCVrrP3hpNeg8To11Fi4kMZFM",
  "key23": "2F4Zoezzhujvafhnqm2xQqyZhZyMigMpqqMsMxQjDwo1RjzvdC2W2mpsB7wyYxCRLwaGdmEh3vC1givamX3MkQg3",
  "key24": "5TRW5kzpb8ZsLEYRWh7zBANK1AaCWYG1Lt7GHyr6MzLzgwBfQ8ubVgWQ4oD7CgXwdkavvJ86ZVtW18MWgfha7vvU",
  "key25": "2NGGVCt6WQ8hyvG4J1p7cKtH2YAztW3TCXFB1fqzcP4XASqS8xyQeE9EYL4tTqARmNrm2GA64UoDLHnBM37pZxF8",
  "key26": "2pFgdAzVrd1QCd4UyDJqRBpUsY5ZYqJ3x3MqNDcy2ty31HyY35X36rZrhS5sGFGjmHZxirmnwSzubVHoMWLwC8j7",
  "key27": "3Jehu3ACwNCRmzn7abJvgQeJyp67kyQgopLxfY9mhDjdEjvqU46Xf9fTYbM6AvjQcWXCrxShd75Y5C5gVUcmQVi1",
  "key28": "3zaq4JCyNBuZFNUUeSfP7K6hsikeBjnh511YxhVZ8nBYYKqYC5Tyy8Tzax9Zc1UpnL8Aj81Aug9dhf9UYCpnJUah",
  "key29": "3sfY4S8YcLNtLi7EiKJNCwzVMXFjdAQtYLJXXYykpZCLRGfXiFvhtUQRrnUxc7HD7i29dF5WZZScuCarVA3ivS5Y"
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
