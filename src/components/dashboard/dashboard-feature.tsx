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
    "558vpkePW5Df4od8LS77e8EJAJk1kVyt9Z4dJZWwMceGATL1kmbvpQtz2Dp9ShE5VsUwf5yiFMnomuVucXLB9vbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASA9sBVbev6dhAM5MijYkMnMCuTc6c7UXMXcuAB2JJdnxP6mJYedBhAUzw6SKLjPFudmd63XZEWbToNTLo8KMZo",
  "key1": "3yKmDRWamAiJgqnqTWExfasFkJkC72Sip8MBJYfnBTDbPfASH57Ln9VRDzVJJsqaymRZYcFGzyocjETeDsSHdFV",
  "key2": "ycZyjjau7gngAtnMBnneEsnFx1AJLhvuVvnUMMhk4mB2sCn5uzRdm1zRbZd4M3e4iPPDXvVrwTm1XqPE8WxmgdM",
  "key3": "2jjjDmNLkzXEo4n7oQsyM2iwWH4MorxhkdbxGgT1kkUfPtXRC8munQtmjVBNcun23piw19BZe4ovkRyPgJHX899j",
  "key4": "21AVD2ziz783rmGShuCo69WiKxmdSZnmWVaksqfrKejdKsky4dz7jeoUWYdgmZjBV7nQQk99qSwijMgRGv1wR2jH",
  "key5": "qY8Xnw9rd1hEsxhAP87iKm3Xs9Lh4SDDxdyvzf1UEbZJH9Xa52tPAeh8B33wwNF268kbmj7iUaY5WRBSzSbxiVC",
  "key6": "2mkiUUjbjaMBhQ8fqoAckcVWtkiFfc8swNaXihgykTXMrT6xh6kCb2gXExQMPVJc7tTuwF7bQh3KTYXm5EDFM1Gn",
  "key7": "3xNh1cR3VaMxejhTtq2TG1MRBF1TvEpCxZbxRA3HvoXzNuSZZ1PJ7ebNbW9zjBhXC5oy5932yh2PY6XNcRfVtapv",
  "key8": "EevnZkQesseEmknZLmjgtyedRL4ZeBEQdsr9jA4SdgoJW88oU9TAYLjbD1gMw1jCBm2S99dvLErkeGbprY6khPw",
  "key9": "4m18sUQvYqJxMdAE2iaYGU1z52xaUzoV7AZqVDjNUJXMHYxzWrFr1fAh8ygVH8oVDFGME73f1UG54ySA5A7SyKdc",
  "key10": "4t3kPBNHtRJJxs1tZu6zuJrCmiEeu6r9LPBAHGTRmxxsQcBGgvaXJd1kVgUdTz8SkeHm1PmWXH37baHDCTnPRMqJ",
  "key11": "2ih4Xtp3NpsxRjVueC1QHy24oEtBy4FXLrgvN7vfFWywf1vnm5C34cF2bj4JDVfNSrMuMrCTDyfDwazVUYXPimkc",
  "key12": "4Ypoc77xPuH1iZx1z2pdsytAh6Xe7z3PdKoQ6WmuU35nLomRTvavsUBMjFfZ9xfB5GYnFR88hGZb3zxEradr6rhb",
  "key13": "VjzxDEdb5wceWkrRxqHH7SjFyeun7URMDpSX21ABxdXiUStuvunttGrMLCmrk39YhLDhpePJFrqq4pf5qU23Shm",
  "key14": "2VVfUTiMJm5R9wB89jLdkMFND6voayNytFNtCbFT4Afw5fXmRJzw3uZNbSLeV7RXXvkHstKbYhnd8nZXoeKWxKEq",
  "key15": "5LBMCd2bsSihPRWGSFz4154cjKA3Avn2Nrde24SHgHbmNDB9UNFnr15WQyHkB8MGHQzzKZeMw7mVXhhVA1S6Rete",
  "key16": "5D4MNMJpydQmxLmEKqqoZTLQhyGLQ8nAtovQRnkt57kEHchay9TQXz9Rvaoc3yHoQzyZ3XvQzicbU6DEnhxiFkm",
  "key17": "58FrK17Me2oen8ZQKBytd5e965cVBjpXH8wCuZNMNdw82vojQDededvvLvDFERkESnqMJZZRkS2mkMUt6iXqD5zP",
  "key18": "5yYxDt618SdZi7Dx9dv9Rq35NarpPF2nyAhyr5dRQN6winDFuCrRGJmqncDmMb2gB1db2XgkJjGJWCYPZ45rzABA",
  "key19": "5eDiWVLxcUSGzxKvdVxmxMuMQT8uvJLAgFywbH9nWmtAugKix3gxxqm5x3EDDXv7e5fnQJ2TpuEU4cPeZQbMkrxa",
  "key20": "Emqg8E16p4g1DxzwYnoTZ8EK2EN6cB1dh4s5G8K6v8YbRSxTfVhkTjaCw4aePk8sJRvNFE64eTnUEUvdJuKrT5V",
  "key21": "2DS297eHDVKQV41RToiDckag2ef9wYrBQ5axAkLUFC7wBCsqEjqKtr1xUrvWMfSkUwTK1FHsWLGkhWeqBY6qwpam",
  "key22": "uy1w1QwmrxfLoGcRP8uW3Gd6xniQrkw5Pj4bmQDRB6uxrrZRR9cePoMQuwbEXjKYKfW28ckeXXgSqN8oXi8GtDM",
  "key23": "32rZ9Mk33eaEAVToEzGy8g9NMidLdTNERYb29C7FYJs5vtSZNJCQpWA2rLGK8jptugREkvQDk8wBfyzwocwDsDx9",
  "key24": "3hdaqqzTXqemP6h9m2rEZGdfrfCXVX9tp21zCpQYJe5RVFU1LcKW2D9ybtZWiCeGVSvFiajjYCkixvXBmGrNKH8a",
  "key25": "f9o3cuKVQTcyEu2j1g9K3Hy1ZqVymT552CUpG5CPvD3ec41iPLLTtkzw5L1RYtrUnbSCWGS3aUqqsuLKgZeC6jo",
  "key26": "25MnqdbHX3eFwxAxyCaZWZbkmUqmYgcqApzoRiUWgfsawLwn2gz5PdiwAoZhRSNk7ftuG8C4cdJ8eQqcP2FDCZ9m",
  "key27": "3tFwiyVp3dv5JJ6ELbPQP5Rd3NbRT3GJTurF8xuqXPGq9kzcpnaQYL6CXLj12mnNpFPHzuhdhFxE1xVLm1qYHYWg",
  "key28": "4wQ3LeXv1YHdcwgyfizGfnESVhuGjteSjiq6oREzwzne6T7vigZ1RtqbQkJD4gtmoB9Nk8izuBmpnytufwVXBT3b",
  "key29": "5Zd4J8nPGKezm7BHQzjAo9d8EM1TmjBymxPgyQnXZUxfEUzcXjWCWntGJZX8Wcen8eAJm4df89PrM2C4k4nRVwUJ",
  "key30": "2xDoNkqBzHEwyCn9p9Lgr9dwKFyZdyUd4c9FSS5F5XUFWBCr9VGbMSAEqK1gQXNtu2ek5JjoTkzqJCWQCyNViT4Q",
  "key31": "1FnSa1LD1whgAqmGjTDrFNhL6yTGKikMiLc3wJdSVKumsh33yTyb9HEWzjDSFyYppM6fCdfXf2tMsywepWhCohs"
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
