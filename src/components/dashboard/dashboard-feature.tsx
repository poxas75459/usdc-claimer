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
    "3G1LSoQEN9vemQnZ6acFrNqM9NrwiEezG3P1dDw1wxCWMjEPskcX2MUVs59LSgcBtsMt94UhoRGzxijEB2618DF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2euJfK2bauN4QAbgHuvyWo7G9QbG3tBCKuuhGrGbqobdefGYDvXfSQSJriXrzoKWZqy4dnR1gp4rBQPNVdAy6VP5",
  "key1": "3dixoLdRR43D2Zyb1tMuCwJoySCxT1aia8wV8chFdq6H1ruUV8KKNJDJ1hRtcgZPYcqrza5T54pY4h73t8PgtFna",
  "key2": "2LjRd6nyyYU4HUbedp9mBLrMzUuu6A2muMbLQXn7k3z9UK6pGCQs85U21VkNSR2v4ihMupJYPNuCiRMvELMsRUas",
  "key3": "bjyyrHuJRbWtbeZuTuaZ3utX1PsCjHVovv3KnMKhtpvhJ9MGqCfHnjrz6Ne55DAFoLW6kL2RYrsLcjZ45hBtFmV",
  "key4": "2pQ7oAPdDSJJtGj5XoBJx4dBPoifNMHVeuJWREdC818vm8hT4ZAczVMY3gN47FAW1gRQRHHb97sxf1ZmTsA2GDJ8",
  "key5": "4phorCjGGdk5VCrjiPhAvDMS7ehYFAvSGVy6tzFvEVXxDvDWd1uHKpCBUm3k9QUzqpS694zsK7ydmmHJTe6j6Yi9",
  "key6": "PpvrKKiP9x4NKMz3M2hsWmCkdUAeMu5S41U8KS3tNhnAmLnVpSC35o8F2xX98NcTALmrGrXNT4pp6juwpswGSgL",
  "key7": "3D79yaLQFbPreaEkM8vkVvnbEtkLmQP6qewaF95Fsta3QVqmoyBPsrrVQThPhuFbja9W8sbujEjFmvWz4McPts76",
  "key8": "37JbcNEUAsHBFKRUGHyfrmaaiNyMtpCaZnWNBqcUkkoFPKJRXqBjAfG5GDm8xw2auTgsk1jo55kKt3nA4PKzDJ9i",
  "key9": "4A83MsjkzM4s2Es9ic7HKiJ5YZV9AiMwYMqsK8G6LKreLFjUYQ3KvJ4wokngtN8uHEPoY9QdkcyrzTDKVyR5Muvb",
  "key10": "5WVDxW4S9dgSzioPHE6KGk1nVH2P3SawSrM5KHHKHBvBq8s3q4NEYSVbU9k8cAS5pG9DvtiKUm1UH4zxoG9rVC4p",
  "key11": "3Fgg2CfUB9iMp6zhxEdSEgq5SuvPQpJeBDYKRgpVnn7y1DySLtcjUSP5DQFHTRLSDg2eKQWF4hJabQ9NfqCBRhRo",
  "key12": "3utf5B7S3ZhNE2CrWuTza7hZnj7JKv4GU3WMvatg8vCYZwxZJ7b6zjTFBpujF4tcB3VCqb1kVVXAdoDj9NS9dii8",
  "key13": "2pYyPNNqvvGGbjAChxSFbdP6SFu6z6ERMkWkK51cU1mn5nUbsb3Hq3s9zdQkDBQMFhaAM7N1q3p2gh5edGyqhYuT",
  "key14": "b65eR5uo3VSBgLmemYXE6FB2SyLF2s1VGWRgv769fs2ZcBKrbbndGrdu6dXjrZjDTYRwt3qwcAjvHSRdtKBeFpZ",
  "key15": "3WduQyS7isVyRv99C6ZHJfhmmCv7qoAkUeSoBtsvUVQHyT43gC4QdQ56pFdPSGmevdRAbbNWY87EVBzzi15L4v37",
  "key16": "27jsnpwuYKXE5t3eeNo2xtCEPj28Npc5sUzzZS4YB42h5YwkjpaGTqZUA2kozx5EKovxfgiCxV3MjfPKLYaJL3SR",
  "key17": "28HZ1sUmE1SnH8AYEiVxBpbbSYU7Ug8h1UHkSGSe11tw9wFFf6v59fUs6JpyRWpe7WDLznnpAkmpQwW78cE4eZUF",
  "key18": "55LUUTZ2sfCYt7nkDgqEEXJWjCvUJP4ndhn67NyAYWaQ73un8bDS8uhJ59eb7dD7f1GnesPSe4jtCRv6SkyYAPDC",
  "key19": "2ZiTpSeMLuEvBhmCmZkV5j8o78zFcmnZDi1U3P7QsYJeHaU8C9B6oKM1Mgbzi71KMNGjWzoF9z5UKkCt3fr1Li1k",
  "key20": "5x95Z6rJDfD7H6i7K8oC1rSiVPz7PvJguWD7siX9ZQ95D37uJD8iiZmpFH8WWE2AyCoDRMcpQNcic4nMifZvNqPU",
  "key21": "3BbqnieFRcHJKNxxznq3XGn4oQHTkrkQiAnPRBzZM9hGYMz2iX4gv8d8Q9JmYj2mP6poDtEPZTGwhjv9dm1qvpNE",
  "key22": "4BMhfxbqTPY2MQFJ9GU8wTk8oLKMwGZCrwLmxrgD7Woz8BzmyzNBkG5KjMTZ1uhevSnrRrny7XQ5KX1Y7sPQfaGi",
  "key23": "5NgJuUV8Y7rZyh7kC5dTQXNPKRWTx5BEpQoeSbzd9cK1ECcGbkbbFzyLTAS4mX1BCbPtY4v1muSJX2CM7hX7MN62",
  "key24": "4tqAQyc89CV19erRGwhGmXgnBcwa5oZPt7F3FwygABwm79mtQP2mNWvER19SfQS9tUF3R2D8xKtnEgRX3J1KqAi8",
  "key25": "2NofFRduohcZAtVLs9j43EapumoqeyWtJ25Zc8obzKF8ewpc7NQCcTcToRkgLRKxquEAFtW9CNGNFitDeFYowt7D",
  "key26": "3APJ7hCNH9XT7nhm7Wm6ZjM7EuoVSTBKh73VzuycPX4mvxKJXpEkYprVCcZe2qH8pmvmXxfWZswbYJ75jyPt8BZT",
  "key27": "2LzhYPPztdRqQixhfBmuhxrm3KfehEfZBJe5AFt6axzh4t45m5YXjELtTM1fEtKntJ2bszuKTs9Nf9hgDJT6q8p",
  "key28": "5W7r4DTWMpmrpGhXfDqYqrA4cp2vGpzutWBXLCTov4sTaRecZ22qWUwNHHr4Y7oQPkX6qUsWfTE4CE5TR6EABUY5",
  "key29": "5ECGThGJXVLD8ZLqN9ykiSnUAWcLLDjF5g7qjmUDVaPLa1EF6XqBNTCQT4Wn3v4jW4Eod8hWREdYAP3jqVc2wzpF",
  "key30": "2p581muf7ERJzAyMXcM3pRZ1TLnQHoRbZuSTGfhVFab4K4tfpgaagLqHwKTrCSb71aorTpNFGbW1QFX766gngKt3",
  "key31": "4U8VqfVxQT1wV9NWw6cNdKwByTA9m3kBwBLDWY9fRqpWYxvhkKph7Zn5WqUzrEJz2u3FmT5wJDh6BRQEYgcC9WPL",
  "key32": "FH72jNwJcN1uDwNSrJuBboix45rWxPYkGUoVkuyXygVqDFrmtw3K7KTMkstHZsX3yZnyYanCSzJBtcGyP3qHaoK",
  "key33": "3bTjqTbLWV9Q9XAeYJYYkJ1c4dm9b6Ck8aP9iseooFaiztrqD9aXxwCm9Vkc8UPuHyqDS75WUedq1PiYP23k62v",
  "key34": "4fZJN5neU7efr7tTy1MHRb2X2dkwVQWtPNMTWZEwHRwNDnES3M96vo5Q62V2F31vzG84NGi63ELZ7aKPgScm2KX8",
  "key35": "3wihJc7FxCHbPzdeeTMNAXheoYNmfDrQk2eAUFjeUiYD3NtneE32aPbL46BHJyEaqxSEmqHKndV1s3Pe8orx3sMo",
  "key36": "41VTdAJpcfv7wn1FJRBgUCbyqCVf7VGfX9BBrAZTZkZe7hdKnfgghoiKEiTUHxCLo29iNrZYSEVXVshCacgturBq",
  "key37": "45LCGwSP6oFk23YNNNDZJ1pwYnFrSMCYkS8AsDDy3dCzBtfDiJ13Q7HuqrGfZmm6iov5kD5tGf28EcFmbm91t3GK",
  "key38": "324ZExkFG55AJpzdqsDbsgnydgwEsEouByysazzhx2dZq29u5j6cY41hdAzYRV39sjQn2g2wsyqvPQJ7Yvrz59TB",
  "key39": "53dFLdNnQRAc6Ac1xVPKE3pk31KujtwpZNNPdL5dmQ9R1PhMkSWDhQbGPGWXrhJs4wXVLe59fTd3hbqpqAez6TKc",
  "key40": "MpumWq4urrT4kVq8yTJPNLdSMNNLsig1CkBJTNUnhFcAsZMVnZnanBfRj3Tyiw1KmALiwBNSum1Eph2rGekdoSd",
  "key41": "3m3MxLHNGVVUVcqtfKC3wGeH8HFKNSCn6gNE2BS8eMNhdqgE3YomZ5owtC5B2SXsTxPkWbkTw2pWbthx28UgtQm4",
  "key42": "kGVavYzh6cWNipwShyi6kdUbkNyKzNLP8qULXruHekMPSg7AZS5fct53nM3vJkM7VXaUYuRkTuU9i1jAnK1AYbL",
  "key43": "3CKijKWaYtJz5JKYPHDhMcikL3AVKAfsU3x1HqyPX4hz1PuQTYHPK7qPEerBiDFjjwwfumi3pLFQKQjqeoPZeS3E",
  "key44": "5WkEfhXEmC9uS4NK3C73CBzSyJSfBf9Nqf1QJguzW6s9KJStoTGDMU2X4AK9MDuBVL2NpWZvNsxLGZzHbEtQW78q",
  "key45": "4sHYCdqpBiGjrmSxs9jVgwLfUM9o293XFRYGdzxHKW1Z95H5zPqA9gFLYG4b24sVmdDYqP9FzLkwp2CfwC1gjJYW"
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
