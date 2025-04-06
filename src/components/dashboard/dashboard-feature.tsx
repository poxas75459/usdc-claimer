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
    "42eWwcWUWrNLYChc41wcNQ9uzETy63iCgYjcE6M1XpwYQVQcVHP8ZUV1rjefpGe9yR1G8seMpmsawCHzzx2jYC3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdC6fxisSDQgpFg6iijDxS1Pc9fwKSDRR3bmpJgwnJNzd4gu9vWhQcc9YMT6ueiNBUT9wTy1rkkJAtD9KJhdLGj",
  "key1": "3VQ1eoox1NDfzSbekKurqAcKcjw8nxRGjMzhxwGdkfgsGRWDcfU6km5NkwTkab3Y3VuY7pwNAubuYkEK4mMUagkF",
  "key2": "5Dfw4cN2JTdLxZWKk7iM7AA6wrKjGNDzgK7mNX7xTLYY9X6fKeyNitaw9jXdecdsPzGcQKn355BnehGTa9FWP2jZ",
  "key3": "42NEzPT6LaBMTKkHmSsJSfeVNX338swNidNzrmm28SVLkD5tfBf9eZHMqVtSamaWWxUxiiw8TFh5gnqhXKJzDcMu",
  "key4": "2cz6cgC5qLxTYcjKomXnUtwiTP9dpcy26R6S2NEvkMybXxCpnBj441P62a8tFhkoYXJB3pZjY1oP6k1JYZ4uargz",
  "key5": "VLBkZW46cDZTH5EmPTVX3WEr14qBLwSG8rEc3wxnFJ7toVxD5EJG7AWYUbnMoAJ89UwCNEMxBdMrDQxUTtNXrLM",
  "key6": "3QeLcJieWUV8QJGT11hmwS7ZuEpBiobCMrmp1DBpQ2nurebYUTsVSoZYeAnajg943U4QkDBKQXNhPEpPowM6YZaQ",
  "key7": "4w8bANEUr8tv4gPsg6YBrkmELnqbbdSTsbvTaawDtEhGLv4KmzLgUicUvcUTHaun5f41TrgCDULUNshLs7YPNcov",
  "key8": "Ecc7x3fYWvpDX4X9AEj2ugnop2aXjxnrmtxdZq98x6qk2us4vqLFiPah264PX3mjhEUdzMUxgpsWzz7HFFKdYT6",
  "key9": "4HktVqK4G8hAe1ApcSmUGKS1bDxvULXycgMkGRnTh6uxBixoqonxjJwVJRS3juYHHycVRSC6Fv5zNwu6FjdTkXd8",
  "key10": "d2wxfFao4QTW4mzc1KbWJqEqJbGreSVjr6P1TXbfVji8F8vneqqroDhNE8vBArfFqccimxmA1TDxHcCSuorCAW5",
  "key11": "3sgxYKLmfKcC4hWuVZgi9GK8iinwkfejbV1rxv57herUrzChcQtKgFSX8KoKU2VGygynWqpLYMTTaxEgqizGjhCK",
  "key12": "2ajb5uidiSLY1VD8T5haGSc7N5V8TFU6EN5sw9UkGB98z18d3ii3wYvVrrbRdCHmFZBnEd7gKyK3fAaTDvmeNTFq",
  "key13": "4U3gAuY4J72RMKyxFXrRujdNEddFHE9E8o8jV95QEKZoKUaF8wH3mKzWucqUNJ8BvuAEPVdbXdGMUtaQSjP28BKQ",
  "key14": "4v46Q8mZxVgHR3qzNCT1jfiRS4AG21gYNmt1o8pdD8kwFwb7bcFoRNdWaCupEVyGGcg3wbGyZHz1FBaF7LqES3aP",
  "key15": "8Ved6vb5wH64V2ytRjL3Kx8CrVqgMuRPDEE9p5wKTuEi9suKxNFkgbrhJCjYTjV4RZF8qZ3e1ur8MGeuXVz64Zr",
  "key16": "5wZVf1Bmh4kGE2X1ayJNdnMC8Fw5nvW1BwCzDwww8daiYx7pkDJvYqeCy13nGyEJkQsijAPXVqWfmzBGsavTxJKv",
  "key17": "ThdWMGuXYW4zSKqX9uweq7Wg5g4Ar5LprJSCUqyaVyfHBUcUqHVcsvD7SrLiKGD5RUx6MLNdSq2EuKtTPFHUgWM",
  "key18": "62SMQaD5AdZVEL6HMbZg8dNVAnoNXRPQVVkhRmNxbt6Gdebb9MVY3NcubLXn3YotvEqdGsFR9yFd2bKXvvUcdqD2",
  "key19": "f5wX3yKHxriviYoUgtM32u9JJFyrygSKJ819pquAsUuiCnkrzLieLmiG58CjyHYbQj2mX22BWDYx89mxQJK1UJg",
  "key20": "4wSU7hc3qKNcwrWxxMnjTXat8KEh6Fyf7MLXJCWu7yBNdgbHXbgzkdPoHz6LE5QkpoACrzNgYT84AfDJZLAnRib3",
  "key21": "j95mouF9oaCEVojCR65CKBQ7iQhSzVTabuPxYDTt8xVkarwKmEyZ9wmjeXNFNdAV6n86wDtPiQk2iEZThcSYqHv",
  "key22": "2hqNsoDDBH2ve4bWVx7KVmTFB6eawxzL5GDY8mQbzscmU1FjWzXtVP8byTBSMYATFedV6rnbgUdT9py5a1SxAs4n",
  "key23": "kyTWYQWaeFQBiesBQAZgVoVUo1F4PZsNyUTzqTECda42s1NuGSuSKYWxxxM73i9LXbJGYzLTsAhWrQhy8mEhtfn",
  "key24": "nMUZJpM8pdpWoAjYwiuB4E6ESivxLmz2PxY1JUwjNDdTL1fmbAQf6zrhZU2k52nTzsomi2FfPjPgLtWp16p7dEz",
  "key25": "2cUP3UGiWxEWftqTY2uN4egA1dYQZNGCwD1cqhuhy4AgjNHDRsDhNnoKjbMVoNuG28HCoNNWh9vFt2uwT5jrpUfK"
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
