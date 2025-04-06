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
    "3jBCHkZcUkPpLVAm6xRrATames6MqRZbEGPWrW6Xw5UWHi8gCBQCYgCAEsMSUPWpvro8gLVNY4rHrkyXRf7UDXSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZGipknFEibzsTFAs1AthwsKz6BLNNu34rFodD3DgH6a4QpKZsi42WmtqamgVLUXikqJnPNedBeN6eRim31PRFD",
  "key1": "3LMms7efZ1CUkoiL8HQjvV2sfDhArogGnHKmvX2kb7EJ4zjb7qR3ZQdxANPcGYEahYsrs4QEXusirSLB3A5JjomG",
  "key2": "55bcPomELo9Scypqo2P7TKB2i4TKMK3GaYFjjPuPNND9hiGBd5juiFNRgAZm3SF22aNq3aKQDVvUwLVkQZyMXKVW",
  "key3": "C4wX7kjGQuTSrpqGfKSH4Q7Lp5zfpoET38ZfzJxxRDVcTxyNe9VNM7oK2j7BPA5nadS3umucMoGbYTKcQEUMYNx",
  "key4": "j7nsh86W9SCpjZRssWkXqe5mSVJ2xxPH51fx3rVYg6bV1LkZ1kt9W98HpydbeP621TxtTgmMspWntLcakdKyJjM",
  "key5": "43KKc8Hj8X9uxKuppF84Fen2HomckUuwZzMYPXV5C8P9GUzBdTwue2ZamVvCws8nRLwcZWWwDKEDx6BnscnugXV",
  "key6": "3HPV61zerZuYHDk55tBix962tPY6pc8oNoJhwonZswVKby8D7QwwWc2XLo9bRMC8yrZ4pyRsq5nyP8u1eMkUimnr",
  "key7": "2W5u6pUtWWqmk6wXKGevAECn1ZkoBJutghEERc8VkgfP8PsWeRvovvnURaAYpCPX3MTA2utvDHEQHUnw9xK6hray",
  "key8": "5eSxxyBPSnwGUnhfMkdUbuDtXaKerxfFHzciZDrZnRVzixoGCWtd7sn7ydrpYq8p812AC9MzyzTbsSBwyRNAXRdr",
  "key9": "3wtsuQit8MVqMA81GtW7JjJVQTkpyHAwiqWfc5mNt9AZiXQ9289VXPCfKrZDkNxtjPX8NZPqXXmttWMtB8XtSuAg",
  "key10": "2u5b8w9uWpxz3ZxnSxFBZNvPu4rueFysHXpRLcdVeZGJbMH1F5SNfwwYeToFD6CGiBm4qapZg21SQ4c4cKv9ukbZ",
  "key11": "3KRhint78MpSSNKEoFwDbNcAtmSLVWohZpJ957ScR4WjSfet5LVmyrDavo4ZE8uYKuRgB6yCKmSgBNFSErfeodak",
  "key12": "3wGcN4zY8M8KtYf6Kck4gpvqqQJ9hKjKgadfZRcqDwTKBmyCeHEeW2AemnEgv4sn85MyXxQZwGgrGPs3iGRC7S8H",
  "key13": "64cP2m8inhqcaV4TcNHvqqgTQ3heYGeiN9Dmng8JXr8V3XAUSBcT1DPFT6ZteDrZ3w3nyRuzhP8ktWdHyhqzqtmW",
  "key14": "2uAeXjAG8nvuyWwqjioeCTw8dCBrzrMsrgYSm2gnHqmzyY8VjGm3qPMHwC6zGUDfy1mZEavzv8ineNuptEu4qrTH",
  "key15": "5fmup7yN4P1TPzSJzK7RQ1X8sRs1oYLNrK9AGGV22KazSyhGEJiaEyn71a47tbjiAzXDMa6mcRQjv6xenkkV5GXa",
  "key16": "4MZhddJ8hc8JhqUGQtnKm18M5pj3S9FzFsuV1AXbCVNJsHdYoAtfTvRw6yDMkh8j31GJ3nBKq8kJJwS5hwuqDz72",
  "key17": "5tQ4h2pYJuaqbS8RsrZGf8DnSuVDNy43eKFYtULjZjvM7sodYaa5CVeXS4pMTywciRsxei8CMia49UcWud6vPXsW",
  "key18": "5YkAWD3gbHerNWJ8BusBGa24aZtwS3RZ1nQi4uMUU5J6bm6mpHRjgAUTBe98K5QbbzaVGP3ffAz6LDKZiGCsUnkX",
  "key19": "5G2jraAKjK5Z727hsHFFXWjEr3rEjPoYx6Sf8Q8uhBfGmdEKjPZicoPRkBBqGVPNfg4HRmxyLyT3N6earc3cTJpX",
  "key20": "2shDdBp4iHPRfAQhMJytc2AYHLqzQhESjFmjy8zo4t1fPNVWrPcNrVHLeBaumwP6SnzPMG4xzwnrAPsBZm8grLfX",
  "key21": "4ergzRyzcfTJT3E7rESDovgUKvfrXMf5uKG6bmg82oEgzAMeM1LWhceP6QnUsVM4fSfFc6ke7UTGd332nqh4oGZa",
  "key22": "3RKwjnn5mCPeEKaJ11XJUBjkXVY7J2qfefpzYv5UkG1mffkGxADYzriarixcsKtUueganDrYhbga5wLqPggEiBRv",
  "key23": "2dEYqqiWTVq7NZcQtsvYUDVYbGzk6AVw4P7oRzBwQT14EYcXW2JdhNAQBYraiqhq69ueLmq5s3Np1GHdnjEgXkQa",
  "key24": "27rZ6fzjvkewDfA7bXSG9bzf5pA5kS5P6fmySazKBDZeeetGDvyjUs7gf4hG99ozAXzwya82VYFW25cxhcmYq9CG",
  "key25": "3FRfqKLnsXL4PtbwCw5LPugGi9W9N8H1hYWzvH68tvEngMpi9ax6AryQmrgEonmPpSt81ruacQbdnEFpnRt5D2bN",
  "key26": "574BwuRxF5nXfYzaLq6v4i4YHBCJ7AT7raXy6a3X2p3yAgZK5po2bpVmVmE7QAiuQ3Y5KwC9jxuZatGvLuBkbXZP",
  "key27": "2whTf9qUzmHcBPk9zLmNwTivwPjRRBXUmjAbFzw2Jz2uNTNKPZHK6B9j5L2uV3w1X6UVHXXWvXE7tdeVg1FGkVMB",
  "key28": "5sdjiCg9BpacwR8TLGPfZzVxDgUC1BvHPFiT7eyZetprpLxr1NGx1i3M3S8mZGCbJK8FnyQ6eMz3sSmwRMwKtyP7",
  "key29": "2auNqGix6iKHnB2FYgiC8AggcNTYkFKPmbeM8WJb1Y4dX4ZxXMDDR97SkK5KqNgPn2pMpm2aiCL1McfFWpTBJQvc",
  "key30": "5fFF6EetZgccfXdkSBhUsS7aAu4BNoSLjk5i3nBnvQE9J1wWDHBnuW4hvqkizF665Rgg65yzWP6kzYTGyATzVFaf",
  "key31": "CiBCCap55obeKqg4Fj5RAKDpKsps4Y6MmZJsMAw2NWLsbwTH6opZ1kCuAMTu9K6GHc7VQNadN6haEHAqw3GQWWB",
  "key32": "2UtmP5JTWt19F79aEmGWs5K35krhXJF8HVnywx7oozs94aipRoBWdnre4rc2CbKKEL2SruskyCsjo6MvKE5nKQx9",
  "key33": "3TLoV4CMgD4pDJ4RhCTyJTYQV9SLfGKnrJujCYn2GfcGk8RfKd6hGEZ7k44Px64GRdWJ6kiZ9fDwRQhRCjWderST",
  "key34": "LvKikuegNFv13xi7NVKHKiRADpgrAs5cbVRAgbbcLx3iGRX1fcEkHawcHRTEg4uDdwxmF1Bvayozip8pkTrPevb",
  "key35": "5uiMra9gwUWEYG28qXb4hui1rsvQPVmjfPsCPt4xmhkv6Cjn2iL8MJD3MUNhwfpx3pqvXz1WEBZjZ9hUYd4JEdFp",
  "key36": "32hRKd6HGxtGW5NPzfBusXa4yJVEc3rmEitpVzzYxWTMPogMpB1KRa4Ap7EmNPRRp86syEidD2j2QYL7rWqknvRR",
  "key37": "51sjsGzMx2SyWmV5oRznaHv1MEr5azxe5gVbN1Cawz5hgqTGaLAC9QXGR2mfZpAjLcwbNfjU7LrVbxD72QmmVRK8",
  "key38": "4A5XabnFFunVBbGBnDLj1L87NgNxD5AjEvybavs3sAwGeYxSBeRk85bQPWaTEUAcP1Lt7235csL6JXzAszqss28t",
  "key39": "5x4VQXk23RRKCb2TbgJruk2jNJCkf6hCYzND3ScKSdyBDhxt5tW88mbXuKJN5MfKRpdRhZLQc6nAsBvqk6bauHjS",
  "key40": "kYf2fTtmA4btb3bgTDgykE8XL5Nrte8Bn4KUyJew7FXTbQDSX24RgLAiuVNz5e1omE2GLtTNxiEiwyL1qZboBkv",
  "key41": "3Cj2NNiRM9YNfabyTGeAzpPnDdrXTbGeQq9eTmPtdpzzxs4Hn1ztDguTB6AKrtHqsAY5vpykcAKovVPUXwMqSQni",
  "key42": "4VeN5MEmCx2yYGz7V5JVoxP5ZF8tjxHaUXDF3GKucTPZAiE6Vu6sqL3i7e9zrKmPF9xFw1TN88uJgTTjAuViBXzq"
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
