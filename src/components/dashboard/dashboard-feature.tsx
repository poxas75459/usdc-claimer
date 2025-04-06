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
    "2Zpi2f8TXdHAML63La1tJq2zfy7mzU9e7C9eHyexFqWhf7Gn2ZS9GipjLopzcJAf9ngje2SmqY5W2ngy4niMjatg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZhqwUKfETJqYQ11wZZjJoLnuinFvmLekSRQcseXt7tKjx7Dp23xwteXV3AqRXct3aRUK4ATrHPyrdznFkmsDXkc",
  "key1": "Dz3ou2bgmcjY9YKmuCCoujBfUh7TQhJUWzMYXzitcrh8x4Q27eYpnys6rpT8tx2tXuBt6X5jftQnw8QYWhAQDtW",
  "key2": "ztVSAEoySKPFwtkxrMrtEiEVJ2Kbx7qTTRfk2uxXUon3meFuRg65MH682b7zWctiHuu6x4Q8dfKnKH4RzUr3jEF",
  "key3": "63Pq53xsnzpKN6jvq46yZx6DVLnh28PFJdKvEJbfwkBBiUb97FNZRVSb1Xk2oAGvt6a6S2tp5bsTFrn6RmT8RosA",
  "key4": "JbtYDkusTMpX7DnmX6ym5pAMkMHxJzTnK96CTVh2HXiu2xcoGVdjGhpLR5CSpWwDJYjB3dpYVYrykC8gER4GBDC",
  "key5": "veHmHeFFGSLZ2yjM2boK8ZiE8eVLr7doTpHptJwFFrhwe1WEbFCketELP1B4afkHRfwZoWXwjvb75WyihK9787d",
  "key6": "572n1tzFBVeRuCPmR9PvoQHu5vnFgNPsjycdxk1VPbvSi82mLhzdVKpPdaB6At22ZW9A4w1ecMnxdyMKR7cDyc9w",
  "key7": "jqxDZMsFyYmqKgsrabtss5T628rf3GUZjtSN2atRWqMxvRpw4qx52wEunzt2bDmCNVsnCiGrp5qHxwPf4sNhyqP",
  "key8": "oh4bbJ1BbKVDovsiWbN951KnbJiN9mGBK8LPk5VbN54RB5xMTa7kGJwFEzrXqTme7HivqL3VBqyzLmFfpBDLY7w",
  "key9": "5vWVeygvfM1injVwtDcTC7o6PCmkryKGvYywZ3gysyqU5qRoYDS1oHH39voirmrkydsy4tKcAcZKLdarfqayejKK",
  "key10": "4wAof9j6okS45n8TsxnXsZBk1ZPkVoayctUxo9LqooU7fDkui5cW2edYwfT6hm2HPdAfrkZPt6fMUypKAphXFjWT",
  "key11": "fYHTL7rHFUoNpmUkBxHXHx8z2Dsyx6pLFqU39XTr2NvTaFg9pQbWgoBfLK4n8A16iNBfettAhiwqeb5tRGcaLvj",
  "key12": "2PrpigCA88Kih3jY5NoZ8fGTS14pS5YmonY2wTB1EGeJU9zF2N9uxA8qXK5oZMeoYkGit12ZVaBh1572VqFXwMhJ",
  "key13": "3VDczWKSFZ7eCE9Pz4JZ5qzMWmcFpHX7QdaBu7kR7qxobJFpKwcW3N7mqGakncpsNV6hbJx8doobVyGuDKnGC2QY",
  "key14": "5qovY5kQuRvsxhVsKg34zgbSeLQdMKeKDJmY7H3BFWrThrvUJm1Wf1tbwVvPpTgZSWSdf4nqLxZEbLemPvxV4Qvw",
  "key15": "3sX9m2qRNgna64DJZZB1nZKVeLaBezLmsbXstYL1oVnhZECPGTfcqgmsVoaVSvcHnv7unif9dNiJz5m3Pk4FAxHy",
  "key16": "5NGuP5YRSVhQ3nkbN8vBbRs2gAGW52HzvhzffNXMVx5XBt3xDHbtEfTRK7snLmHjARYX7t7XsTgaWpPttAjyTiT9",
  "key17": "4uH9hF37kdTyrDW5yK3DFnzM6y2LBdEVmeC7d1uvNdcf6criPGjNPX8AojKUqcF4gJV2HkVJDY4xtrAupYbiyNoC",
  "key18": "53fi8w7qy7pdFP9fza5AopK9ezFQb4jxWnG1SozpyhQrBFQx6o5u34sSZYahpvQ5eHDwQHoBkTywMNAgDfSDnSNN",
  "key19": "5VWKgwaKvnvHZxmLLwG6fUyBQCHCVg7op8WrGnnPGAZq1US2QbagiDVNZfuHvGUc9QpcNM7gzzyrguahaNzHH9tz",
  "key20": "44Kwew8uxkpHWHR2T9CVVQkBkB6wh37d9p7L8FGfUm67eHfEEx65vWiVufnzPC3toUkWUgW8iiwQdmhW2V7ffqP6",
  "key21": "5VroqUZuQvuSLw8PmYqnWMVr2ERNXJpAbSbCUsFfv7DHW2CUiLge8p2LkesM4AZ6RJFrPXcyRx8TXLJ8i5wZjH1t",
  "key22": "2FTwp1TsBtKEkG5icSPWw7z62BAAhy9Z86ZVhHwMHn2ygUotp6zerA1UNL6P1QkdMSrQWdrSZDXRkZ5tgnKs713b",
  "key23": "tK7yZczVBxHkdLhRn3zTtQx5upkgjMa6qepk7yi5pSuftfbimadsnAwqsCi8sLaWXgTWEn5Y1oTddCk3CL44Ntc",
  "key24": "5QES6i1qG1Kmn2En2bnHCiA4yEuyrZvW6tZiS6UTmw9ce7UfZpfceh25RLuN48AUzA9KyqZ6VR9hJX2KamZPBcd1",
  "key25": "PuxXoACRk8rprymABandDagPyPt42gtjLoJa8esaFiSkcqAHqH2d4FV4772ontvBi6ekZeFQXgzP9DJRXeJnac3",
  "key26": "WdGWdQ6vKgMwDTaivhxHvdBUyQKZm2hvgFdfEcQJuWWrvuz4qobLi93u59nVZps3dh2K1QRqcCEscU5VzhnKqoC",
  "key27": "5wyDjziXZXehXMV4LK8UVWtFySwUfVijchDVGmSpNF1a9biZWsd62Tuk7rkn4JMq3YZYFrP6JaUMVyj5QvkqZS3T",
  "key28": "4QiETDKye7niLkZBt4yA83XxznTbrpdB23E1JMA5x2tJoVdXiHr1ece18H31cj2Jo96mtsfXBBafESxFak4UR5A4",
  "key29": "2h9z7sGKekzC4ZheMQAYxmNnjARKfbFXmVftvUMuRkJTrsDVzCCF1yfG5VSbR9Js3Wh4b61U6Zw6tF9WJYnqFsPh",
  "key30": "3qkXEH22R443DwLCkABhkxQnTEb8zWHyCxngF7MfJXFAetEk2VC1XdBvP9A5pcyrT86SzqtQGSz6urz2PeLaeXwi",
  "key31": "3uyjvZ7M39v9ru8GNED2icgoTgneeB1T5mVrsmF3KeDozy5SewvaW1B5H99e2ouYK2iYrpeebQ5zfQoWKTfnPvqp",
  "key32": "2UMxoQQtids5oy1KjfmoPs5DAwgw6uKa2VJsjrQ1nL6uLRqjKobxo9Qnxoz4Tbv63bauz2ezqeWqQfHjHqUVvKvr"
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
