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
    "2P7UwjikQWr5SfhaWhJiz4S3rDUg3YssmHXrnncCD4scwEX7bWuBSxYW8Adg7nDrmYZsiuitcT4ta2qNbgSnNMs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sh1Qsp9J1ffFS97Q47fyJScdxxRHaNCDAdvXQjdvFjgtxYdsKqqepEUDkv5d1k1jZa6JNtBK73AXSdVtsTy6ZUP",
  "key1": "2pLMPScmANkp6gYANbt7sWcmq3LEhmofRucbKr2YdFNehxSZdiajawbf9tiu9B5ZVtpiFVFJoikc2Rtob6uLmwq6",
  "key2": "3dAZeHbQm6qEGTdgh2BQy1fsvsVKsxYHJD9Yp4KWWiEUsaP5dSmjfXFTQfe3Pj3kf1zivpyiFRYE6Wke4GF8XG41",
  "key3": "2PRjrLMqxQB4kygT1Vee21mTMRqHGdsw2qxcTfSY26KNnB9Q6gLMcLpzPKnH4kfih3U5cbWqJesCwsHyUPtNX9dk",
  "key4": "43ak1YSjLicp3m5s3eHNkC1PAzWnCP1EJwX5JAxZPyyWegEXEZsWzaychyTXmQf1VGuZfNRMCFoCSyLGGVK7Fg7s",
  "key5": "5RsETxpWDEciqebU7ddy1pmAu3qiRLXy3rZQGfG7JNyFERw9s383GnreS3u1uzoPq22HT5UoY8VApuRRfKobDEYE",
  "key6": "akvzB8xDYyE8JZC7sgYSdWQvb7zhd6ccmKy7VtpsxxaRuVZxma41MuvwkR3E75eWxxAz9YeELT32fTcCqN9PSb8",
  "key7": "5w9ZsCw7tRvAsBnTXWDGcgmwrDykd5b6sWbFRxe3sBbwgqLrk7Trag1HwFWSSbJjraP1tCepNLNiLNeHXtbQJ1a",
  "key8": "3gcRSC1cZbnoobynaWQn9se5xJo3LQ59sG2qtBZrp8XQDukPpvL1sFQfSJy28Z6TmMtgmZmAsdbXCtS4CjtcDoff",
  "key9": "5CAH6MHWidYP3yBpRNi3Q2fweWr36Q8sVmJBARUchM5eVpKL9y6S6h8iUBGBAaoa7TPUKpiRFvNpC3jCJWiTGzNJ",
  "key10": "rQkiEJh7dPAyGejFaFnYUmK72EjRi59WxD1NM7jnX7C5czXF11CEGjGwZ9PHscJrnezLWkJu9i328x8sPCnh9BT",
  "key11": "2zn3tMgsybi7wCh4AtMf5PNDZzL4CAyE4beD23RTGEUZ1XpLNRhnji499yY9ES6LVJPDbAuGQXGpAX6HJz6BR94T",
  "key12": "4hyaruLwTDLSdCet3V3acvPum231gV1tmhNd36aiQ4PZJqme6Yeb76AQdd1NirUvvAh5BeVv9eAWQCf9qtBpJS8y",
  "key13": "55UydZCtLWVwPeHw5bm6KLid6MWBFKTsNCdxzyLqZavJHz6Tz7ZCWJjyqmmSoCL222zXZrDNwuFkFQTTzZqaG6A9",
  "key14": "53ggmydgfuhjPoXG8xByWNuSrXSwVqMHmqktXFYNfnhaeniCYY8xUJDR8GYssnFQPPnTGHbkBsMc96L6tyAvraGr",
  "key15": "2tTPiQE2h25od5MgJvJhXTdKsuFGC7GHDdJceW9J5zBJbdJTvxLyk175fQcWyLNyFoc1ySdwKTAepjbf2QLHsPFo",
  "key16": "2PRgcHYPJEJVZkk6zTtR3xa6gCJWKcJZSEVoqbgxWpSQG7D9jxx2GzDTVc8NpDSYdVDBuRg5mjKM8qgDmHzCJvZM",
  "key17": "3BQaaqULjjPjavaL8ub2pDZajTd6yBDJxacQA9g1ASKChTV6dVvwYQGuf1gTpff9vcHrsYjCzS9LCYYjuWDRKTVr",
  "key18": "TWviQop7pq1DB8EHMKRDDBueXxJ4DNoroskDGh7FNX7tuqsCZNXgqjq8e1AfKitMFJkYVoPm9KNuSjR2hiN7pbJ",
  "key19": "5fHh6WshTTWW2iF5n4UCoPjRqNY3RhoLR9M5mLXGrc1FcevAyUz4aKntun2KmuxPYqcGYZPqmrHodku6sM47wkJy",
  "key20": "25iXMXMibWJK8E7axKxaqmjvLZy8a3VsMS2sB4juytJ29svVGGi24hBF4MS6bkaNsx8HsSf4MQh47pwzs2FRoFDF",
  "key21": "2ELH2wi34CJ5p5WPGyAr2fUicgtJm8EqpcEDAwH6m1XkB7FhXvphPyQLSTwGdSrUh6hv2kGpPVEhWYJqGD7kmNnq",
  "key22": "2Gf6JDnBuhMpp1P3h3RWuPF9Vre7H1c7iNkBcAAEZDQtKkmDCxU2zzxNgHnK3MyzsYWqbzwRNvZ7jnYzk5fDjVop",
  "key23": "55239VEjAdoFnd63QxnBo68EM9YosPhnTkscAEmZXod66hSk6a7zVjRhtnUcmJKJgScGP7KL8crKbSyaBNUVCq4s",
  "key24": "4uwwcg1hLiHxibxaX7FF66Uxi3k56oeTZmLWkaNTaJFAkheJq4Hx3a12bLMQsiV3MiPHykkuBy9bFCsb6ReFY13r",
  "key25": "2nUfUx7G1Tyy4G8nHtoAuvGpSZ2NazZ3Y22hZ369Z9g4yhbdA8Jdbw5J8XpDyNPYY3htwfcaBbSkLAidzWTXBopM",
  "key26": "3CRMdPCJnQiSZ6P3cQobn4cEh7FmgL7Uv7i5g1dEfTwHnw5FvAje3Xmf4f8CL4EitX49hE4ZjoAFcb9Ybcyi5kaF",
  "key27": "2L9b8Txx8RDLcbkUj4vqQ2WiV8qEoZmMSH9dGcQVc7UVcxW5NGvH1BWjuV4ecEoryEcWRL1TSqmxdN4kUMSH7tUK",
  "key28": "5LSQCwXTQQr2JJgWgHSHwp1vRR7c3naJDiUDjm1kuHd85oHDynN3G921MkVX6C18h2wLg6789Mg6r62Tp6tGrGLH",
  "key29": "2YCYtdE856GcBNWtvHbn2QhfdvKkbP9DCLAUuPzK9yUADV5SpvxbnpnxfnsQfYWGUTDF9G8ZXwDCyFm2Y46nXzcj"
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
