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
    "25HjK2oVXwHCzEweE78A9MVQfpYTVx4j5Xwz6o6BYvbrS4EjHDDcxhT6WyHLDDHQwq2HZ1QADpZSyEDCGBuy2piA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G7LxcmmQUxHnKAVoy8ZbecDdxYJhj9E9iUMZbMNFHrcUCtxkgHcSipjx2BsyGnMznKjhjm66G4AzEgRwBL5NNas",
  "key1": "f5nHsE8b1mm6S54XctbhXCKLUdq92W5Pm7CCLenXx5st5Fcpoqg5piS15nGexnT3QXQq6uEPw73y1nMYFb9hp6x",
  "key2": "2ZkPtCevkFtmeoSWHb4ruoFaYKtU3LfAd5asYG5jmEzyN5P3te5TULTJnPsMbhuuvQDQnPjMVTJ9G1exzLYGGP3N",
  "key3": "5RUM9qAKPfjVot8jQGPJsX8c6ao84Uo7FpJ24jB7WszsBsdgsqg1Ju7Cu8FGSiqSvxxVivkzdLpZaUXbGUT12h2F",
  "key4": "423dKh8my2oLtwMVxBpVcX8qwnCfXpXjs31mG8VqEsKVJ7ZXVXzkLTyKqHJCQ7pY3uwvQKtrggqBvfXwM7aCEdF6",
  "key5": "3iopnWLDEMDVAxbTdY4dHc3FKPdCBKvfu6t6ezxCz6pUkPhvjnyfbavFeKVEaoM4nkQDDLEba2vdHzrRyhkYC88a",
  "key6": "p3v4w5MAWrm68MR77h5CPKdCJcHTdQMSyECGbhK9GVdJ2iSdaSNN1ZcNBzLdYqQqS7QZ7MAmzR66nLjTYYRuENo",
  "key7": "ib3TMdtyQxtYqCr6EK3PTXYSDwEzujR6NLKRaiCJAAta2NfRbCb3jnqbQYKWqc2Hf6S1bvv9Q9M5X6wJVCgV36m",
  "key8": "5HMhv6tyaN4Td42rmrh5cGkdSnnDKLDsy7q1qScEZd5p7GYsbGmvFbQ3pJU33cUuDYJDyk1N2nMn6vFe6W7G7YRa",
  "key9": "3fPA3JGWiL5cQVCnhQX29xxNysfFCEruNJi8HE4txyK5nemwoJTP79PRj68mUfhvBuye6C7YHRwNUqgkcAXr1Nv6",
  "key10": "2rGj7MqWXnZSKVDoKj8f7SUx1WKoGoegwyxp3s928qYwhDg3AyNqtCAScner6VKkQNjvQBMZPk39J5PFUdEFwLvX",
  "key11": "4KVGtMEfkXkzD3p1aTf1UfEzTKr4RtmHT8FJrRJFB4FbKFvdpT75hbZRSjSugCk4bRhNSrpGgyQ6MpRZbGkRnajy",
  "key12": "5CsSCa8jp686f3WFHw5Umf21jgLyuBArWJifHi6mbKTFPSanNqD3Ujsm8CmAK8yVPD2Jh5HyoG9Ez5d5BD6ZYVt7",
  "key13": "rmvHkRJBXfe6f4PrBhUSWWRJmFD3mwsLZY23oynG7SDkjZo63sf7Z5ZFLzYFkYWQFW854MRCF8hvyg5E19jRR91",
  "key14": "4iESW8pydezXNuyV5CpS9ArowJA5Mb7dcjQtgBkNcNbeFLz2HmEgC5ARrzPYNjSC9SpNp8poQR7jhjvgEceoW23Z",
  "key15": "qDjH4kTm4zr1WRSzrK58t3kqqH6JYqn2qykt2qNjpvPkM9VL5FBKqs2i8StyRAUeND9yy9x2BuYtw5FttVfB9He",
  "key16": "3uttDAY1NETogck9aVa9DiiX6yyQ9ZG57XVuUf5Kz7JJjZWKnn5kfXNm7Vw2mgC1Co5bZuTbwbnH74NkYvruyDGj",
  "key17": "SP23KLahpHx7R9v5MVp9gK7p9isLeYZnPo3mFu44T3PeV429G7QHBJ9dBVqECgegjtHiR5iEeM6Kbhxe1TESBgK",
  "key18": "4gk1nTAdbx9UmghPcCGBoTamMBJmE6xGYYSws72GKXjPqTLBHscwQqjt7oLZ2a9Ci7MchjxFZ7G872EDhPHa9vCR",
  "key19": "4PFbixz6Tr6LDLKeSvvbR5ty96jtUWqvpaRmABKz1zQDRa1c1V6bARAbFznA1iw6gzeuYVmmmYRgV9yMxprfo1u6",
  "key20": "1t5K6JbgEFM74y5eWUtLmkBHcMkSgYBntoFKYiDndvy3RYqHU9mQ4MsUn2te6Vo453CnDda8fZpa2z9GEF4FNjJ",
  "key21": "2Gtrq73thCP943tAZuVWf9uEpurLsPomeTsDpbayC3JAEKzxvt3MmvfpmhieZKqbXLqckaNiY76oXTLACuBfdLus",
  "key22": "yarpNNN1jPjR9QXUpGN1vDhYKxbMXdVqcsGAaCnFZrdjPZuGuZmx7aPHUNGieuwVshzi4LgZXE4akCC7L2NTTYk",
  "key23": "LfZnh1RGGKWcsX8HAQuVxyQTG5ZLidAH9rJWdSFKzpwPQW5k9ingUC4G5xZ9GU4tnTQ81s3gFQ1SoSqxFHDgtHm",
  "key24": "2y6oxx3hM5anb4Y4HEB99V8Dbdy6jmiFyfcxFt5BwnjTQGQEtcnSj7CBxvjSsADX47Q3pxnQveVvoAd8Po7nEfgN",
  "key25": "3BGbHeiHDnJB4B9jQkggAEUeYu9HxF9XvH7Qw6Jk4BHXKwC3wnFhVsaf355DBbLpQ2coCk7wAzYEzysUs7BMfezo",
  "key26": "4b8k4QQuBWjnNh32jCoipYXYwiNWV2C1jvDvyRw3ydNZr1KCqUVYvCwACnjGeJs7jGDCEfUxYUY82mqe7hUKb5yA",
  "key27": "2YPrM6QbKzJgfUuaPo3JcTKS2CaXEpewE7yiRkDfY9ixsF7snbjqwKZ1GaGkWbnzw9RZMyKQDLFfNRcZHDQx1EEr",
  "key28": "4DbdKpvEAbEMwQ4WaCAAF2MNwnw7F6b8N4w3SVJiteYEVuj5QKbGJb8M2gSFspBb9t3JPXyfkQWC7xwJA27KPnm8",
  "key29": "41zTeEN4DKLb8YYpqmk5QTJ1aApKePdwkjzq2XK44VGhRJbZsybJvZyDTX8NcxkX5snsNrQDJS63HXBs2v2hUqne",
  "key30": "5h71cSzxHcEbMGMSZ2nFMCsJqUDsxrNfwmQKjVzqKaUfg3ihVqPBx6DXpALXAQLTPwrexsdcqfspUnWhGuyUUeFM"
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
