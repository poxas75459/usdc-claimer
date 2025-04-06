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
    "3twiD8NcbmhGu87Urztave8DXnZULhW4J9YcR2JhCtFbNQJCaoZjAw4ZotYX47Dn3TvftXHi4yKSiii3LuojVg5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXFQjzUnfP1Yszhaicyx7Nt5KeEpfRXPQh2n7NkdSN66dnGzmzrozH9LxRJar3eZkvPoa4dofBKZapX4P77GGKR",
  "key1": "5mM5GstGYBhdTfWuTPp3Dtc46arpub45ANPNHH6eDVdzZUKSMy1Rtkn1gpix5tcP9mKPCYeD1Ei7xMqK6G1FZbnR",
  "key2": "4ZVUvKMzjanZtiP3GqrevKN7p4yqrWHtpWJLBmwPTKRn3joeXhvnVtQDWwKnsRWEZihEtTWWvmPKFP8K4yw7ZK1e",
  "key3": "xc6QHmMWoVpUnRbYYngLAnN6fpg5HKdhoFHxfM6oD42sPVAt3z9DBwoue5ai5pR2gXbVKPfMes5sUbUZRsMdCaS",
  "key4": "3mh5zRTv6jT4uWfDDXZDzvBN4kro2fXDpRh1deqBWiMydAQvuM6raBU4oYLLMChL9tReiVS5eHbftZ9qQBEgJuqD",
  "key5": "4JLFghNoBmNLdAzFubRAXmLwyJurS8eZhEG9VHBRUJSX1vTmsvbWgTwU6xoEK4kWYkHxtd7rbbbuQN9qnkGWak1R",
  "key6": "2HdwQHTz285hu4xi4ECWA6FjzNQRxqkVbzGaoHT7xPAzyYrd6ZLRhi3Crqxi2BjYFLACT9saaJ9Ecpz2t8qVMLv3",
  "key7": "4GGVbLyaLBnykyd7ZXENkER7mG7AU5JkT95ujNiLii3hB6B2msdVD7r2XK9MeFxtcdNJjM4ZvrYUHiKPYigTxae8",
  "key8": "5F9htYdPGZCoTQbS4Svu6GMEbiy5fVVUFZ19k134ccNt7vTVJU668pSngGsKbEtn7owNSJBhMczAaFkmbxTaZ1cb",
  "key9": "2pev4RUS1Vzs4eAU3yGaNwyKnh5c5v6U6yTPfFZwgenVgcifkwxLcUc6ojk3pTu5GU82JhY7c555s5UZ3Ev5twLf",
  "key10": "3Rf3c5bWuBDBPRhDrKfsBbfAvax2PMRSujc5oSztMimUL1DaNumsVyb3PLem1AMrNQmdzBHxTUkmLV64KnWwPzK7",
  "key11": "3mo7VTvQSDEt3wKHWrauyKorQJHYCsj5dN7PNAPuXm899L8mndmD9rBwthdR5FsZKTG5vFs6r7v5bXdppw7pqc8H",
  "key12": "51cLrMwaVEDc63pPvW6CrTtPKYEJscChhso5kbCteuNENVpKKfk4M6rH4SSAEWp6kifL6WMXjttzx8hFszXMugsp",
  "key13": "GjGYcJM4tCz352xWqMfAPbgxnYBoLaAJyLuhtSUGkwWi5Bfw4zXer78axJ18sBfRabqyYYjd6pYJ11mkmuJwqNm",
  "key14": "3JKZ5Z2pF2gZCnpQJL6pSAK8Cy8iyoDxSnGMWMpCVYVnK2acxU1ikDQjoMaQ3yd9fNeH5xZXjeCUf5D2gsrAuMpM",
  "key15": "3nrREXXUjhVvzE678gN9Zs5prYvG6PwwyenskNj3172Y9VYJcDQXdVH42UsDUGcVh1KBMwQ1DZ7vjSuRsjiJgnXp",
  "key16": "5gYRVtcR1fZkrSzCrWixeU1hCGqbgRuBHrKBwaRXUqUZRRRkV6qHiCg87tL4D4EFodv1CX3hjr1MiGWAoJHUrHsj",
  "key17": "3nuWpM6DvZc7R3cHF2yMSUQp8gxCCJiAAu9RSmxQYMgARvjuxAgDgSHEhWq5qdFny8Q6c4PGN1BnysUVZuvR8Qk6",
  "key18": "5Y4Aoj1JFWmX1BacvUmYrYsXEspoWPaBYUQWhBjHShDe2Hfy7jFsAwwJnx4YARcn3ivASzy1jgmmJxTAZp6ph5ed",
  "key19": "PJ5ysFPQafvhkPCbL9UD2YTUYyFXLkshCrSasM3g1PvirjC75bZMvYKCtmr6ugesAgBkFN8D4kHqfE2Fw82gXzn",
  "key20": "2hMRfJbJqFngGRYj9ZB7QZCjpaeuJY4HZy34HkKAm7bZxbqH5EAg5FywM9PLfPxDgd8DygWqqq7f5q5PxQUc99H7",
  "key21": "3ZVEyFF7AAEc375Gs4R8j4MUiywAg1QnBUEfvm4wD4YeGSUoj9NUzAYvmfyA1NiukKoGXfzTZQeZvauEU8rZvdVC",
  "key22": "5smLZnsBJ8HZTPXLgEvKZKN7HWmaBucBkpneUocok5CYR48CCivGht3kV4cog39Cs8yXYtr3vSnJiPpiud2z2mgw",
  "key23": "4MtS5GXTRzcoVxHWmTMy2XPX5FFF76EmFmbEH4bP2qiQ24LvBFYHXu8DsozZv8Y5EiCQEYzeJmFPTFhQiCDZBr3E",
  "key24": "2qCGfv1jANvKJKNiRsb1f6MXFYuGp2uXtXvWVVrVuozs4kLJvJ2qTACBVLYbSjmw4F21TP85DV48xp3uR7eYEJm9",
  "key25": "wFVzJL2H4dJ1Ttmx6niJFxHinbD2zgNboxF8Nc7FeTq7Q5gmMrxu5z4qX5CnAq8iyRhc4KLJRvU3yQ9JZfMRGRf",
  "key26": "34DWqivveSQEXq8QYmqiypqmY4S28buLXWpT38TMEZ61k1g5orZrit56BTPRoiJBkoZVyn4yk4X6v7zrHYCJXtTo",
  "key27": "2DKcqh8WqpzBW7KuqG1W3HfhUCyvH6goLKnz5GCcxjBQagp2rjGvfyxaGiHoxrXqWxS7uNucBjdon9Pj3qMyzwu8",
  "key28": "4Yg8qR3Xjo3qsuPkGXN77V9q9gQpGvE7Lni12u8aB2yYycZPo8AFDfyXkxRmcMUYkNuxUh8cmFgFUsGNgbBF6mtc",
  "key29": "4JgNZsSsHR5jKCkKo23wj2cn4DrGgt3AN51j5MLmVr55nvB4mGfYeVKiLg35QxHh5CYcybB6dtAg51vLGD3HheVk",
  "key30": "2i5tMaupwxXCVkopa2gD76BXcEpFNHsv132Ace14Hcnv3iT5RjjnppNvhRUeZQ1H8qEwU65jgfQcE6MBvgkoprsk",
  "key31": "8PQgybFS4i7sz7rUYJ9Uqpa9YTtqFoH57Z4y8p4sVEQf84xkKPh1iWtPwnQ9NWjLKciKTekWmL5BysPmwDvp3v6",
  "key32": "4JfmeJr4LatT4hhwDiXRMzUm3LZrhhikv4LwXt5GdAmFhe4n7ZzmGYdjjFvZofp5N4zZSPSe5sJM1N9Sz3fAaXVX",
  "key33": "JnAVredoYA7JaSATMTWNmYRMF6Qpd4CtRF7cu6YrpVSc8pfVnPCGzrFUfwod9kXWw2TNBRpWpwCki1VC1jraszM",
  "key34": "4rxgrdXfibwu81aH5sJ8m4MVwpug6y3xNLHeRz71ZEGTiNXuBRjP4VFbVkbNxohGdemZqHB6vbD5WKJoQbyAVinF",
  "key35": "4ajiAiUZkGg6gPys6hKniNrfwhRxsnbJaG8hYTmYHU13TCa46haGdXw7V8t4J7WAXspXEBcTaVqd5PnACw1ijENe",
  "key36": "4GUx2SXwYG2B6cHqm7RqPFDV9dVcwmCVx3bLWpdqZYGZZBm2YUR6rvurvi8njQ5uVmbXHKjjD5uBtDq5Skxxrobh",
  "key37": "6737AMxfdYwdtGWVWr85bBHus1PXZ6YTjmdeipjZHSaSR8K8VCUenn5ZUyyNzB2jQEcDGimHaKAHhxwwozAowfAC",
  "key38": "f78NCrHZix7ifW9VFhe88JL6wJUcR2NpZq6trqHZciS5FNbsXyS4pTD74syvVt449pBtRzchiLHyx7H1Bg9iEvj",
  "key39": "4e6bPRYyWFPoVBz7CM9PF6wVYmNLDKF1yqjZLyEGqm7ZhkNLXjNxCQv8uursg74y2t5CaUTsZWzA5FCAfHxcRESv",
  "key40": "QVjzRLQNxjBoFwKasR4F7aTzxBT1tyK3mbxheqdKEBoTKoMABkgeYYQnu5bDNDKaNib1a9yJP4b1ZYjGqV18CY7",
  "key41": "bqY1ma6zpCcQMSccvjAgrKswM6m1LJT1ah35bGJmJkoGa9ofmQzmUqViw4shvLc92eEnprkkR7rstMYRdjhPGet"
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
