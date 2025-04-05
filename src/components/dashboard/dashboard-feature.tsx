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
    "7LqY7icB19433h1Qjx8fKV9guFCZFhnJmGxGtfc6LbpRAyWU1eT4AnH4BaQrB8KLhhNziozucuAnQQPENZ33BM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49aNns4wpmGmJ6PgEaE5BGV8eTkPgFUGZr3GLmZutkMoRVw5ppUBpRDk2w5Mj2tTEiu2HFY3KD9MoNTmtsHD2Qo2",
  "key1": "2t6LBkddUAoNKY4Ucx4u6AogQP5wPfoAxp7mFksM4mmVtH35McRnS6aHjnDSVJQ9sHG8sEtvqz5pqQuoTGj3L5Qj",
  "key2": "kjU79WMGD8DYjVpjqpeZtJDStGBTZMKmzRvbvHv8GLtSuhjdsZndK2knbmzcieruQoXBz2HNuvch8P3Nn9EyWhE",
  "key3": "jwMyxJ2uX1HDQyi2qEppiwZoLQVuDH2ozVm2FJ9LK7k8DHqCfi8tiK5ew7UG1xagMGgkjZy4rHhekGVSPd6LyEf",
  "key4": "3cV6AcKdzF4ckUKm8GeyCTvjCvgyonSVokCSmK3tazzVdBHDD5TvRhfFn9jYgW1XBcEZHGvpbPjstGyAsiR5MQLQ",
  "key5": "5C9CpySpDYfwcfHR6BTNYthKnPS6uKNAwN5kQh8XfS6sX9aM7hfLWRG4uXp9SAJuBdhpHWWtzRqY2g6Cy3njWBj",
  "key6": "2MpjjM9j1PbfQxwt67at9M3RT7NNChJDViMa2XWWTC2uZ4vzQahvDGefjwsyJ94m2VpAwwBFSYSny1ovBJiuUbna",
  "key7": "4DMvAS38fz2iHpXokfqEiwrfWCHSpT7cK9GBTmhXJ2wQbs2pmRRYbrqy7HyTCiFj83LkD5jyJ5983XU6dXnXuS4E",
  "key8": "3k1oWsEdwqu2SLHHr3hrmmEiRZio2BLksJ3hWRSgkJ84uhC4Fw6xu1fvBqHYfazU9BA3MyTquxLK9Aryfnkfaq45",
  "key9": "4WcMkivG91EP6NAAXMNfPb5epPWwfUSg1avw8M51HSdPTWiWQq1ebYkPmVsJVBxpymvUeHeFheacSMgYLUrYXfjk",
  "key10": "2YFUHPJb8iosXU9HPMik23oDiBULDf2kVhUZVvDeqGTpk6RVrFUcC3CkFPELGwcgToAJ4tbAK47UeERnvGBfJiRU",
  "key11": "3RoV4MeQ6VZRKr2EZ6eJZgjvKGEeLaJMWVUxLkCTTywLDABcpzE6hdGdpVSyc1SJfxL4w4nXdrCozB6pzDR4frjd",
  "key12": "26Z43ajQRm9X3TPJKN9xyCNgcwA33kTGQe6wGj9JwhvyfRcPUmwQYZGWzS82PVWdoMbHkGB7UP8ou5nC7LjYYZXm",
  "key13": "3yuMmRp8iu9GULUMJHy5SXXLh51rYpKaf8Lib1DTAD7MBhF7yPLjcmnTcMUKGtEPDuVoGXFWPs5yjz5r4xthrdE8",
  "key14": "3EmJ25swJzm8QdK9w5Rs8wKqZ5N8Cofd9F5TDvhYdQGJobjd5hnpETxL9G5ygswck3dFDX3yjNY5ppgpcFnuyYiS",
  "key15": "4Hshhr2hreGVMnaDp5xH4nNvUfzNDyrZdVRS45HXU9ZpKB5gD12BocnFJb3PJyQ7avJfj33YDSJZLck2HYG6fA8e",
  "key16": "ukeKf6KJ9kwDe6LPEz9FWyMb62MVTu61ZoUk94y6vyQkufNWnk9d5PMjeuwJ7jkZ92DaM6JNXC9TcGS4NtavcuZ",
  "key17": "NVjZ7qwCbvvYZDVUNtH67AtwfuSkM8LwKRwv2qwQQY9at8CfAGh7P4gWcqgjRuX6pJsZSQVnMAG9M2aSjxwrkER",
  "key18": "3XhATwGSy6TFSoCkCmFNpm2ZuLn1my9PbJVNZsKsJpCVxRbMRop7RSm788KorYtZA8ZeWbXmRTcSvTZBnBCpQKLP",
  "key19": "z7eMacCgPJDzkYgPUP9N3nt2HP2Bav7KEitaCpW9xCneTCCjPhvSzNnzCwhti4maEdnzvNLUX55UuLMDzcoTFpY",
  "key20": "Nso73Je41P9Zh3C9jnt5wDNhUn8fr6E2mcUoCk8j19Dc8jGmA6W13TxdhXz6znfDiqNsNzqaTvaBozNqyBzFmCM",
  "key21": "2VxEFJ2DNHBbD2w1zsEe5CoaadvH2eVFSPPYjqMzqRSDjA7gbV1CVd4Eb3cUC1yFeKAtAsMx1sTZgVRnJYAEm2fx",
  "key22": "3b9rKMa5q2tNHQUaaG8KxGFmaLmeBs8WvyE9LF38XJF1pT4ZD2x3FQYJmfRpUF2NNJN1T4DyGkEGF4jvcDo1HZ7N",
  "key23": "5qJkVvRhZ7jsj2RrdoDWt1GXDdrL9EUpng1wQszNFgqodcRzadQKKj6awKocpZamMFQkT9acEv8Ye1k8neAhyYHU",
  "key24": "3Qzt16yZDGo99q5jNLsLGGHg9mFAaMqNPgV3gs9SD53LPUevTMSmo1rwNFnbrsmo8SZhAepDnhXi7m8duguBz3ye",
  "key25": "4ANwSVf6vBrD1EDmJseSN8g92ny5buwXeRz3fPQYMRKJbayjcG14MsRkgCA1oH7PFNofecjvAMoGsu56wySVZBve",
  "key26": "5KUUbRT4rrSaQxPrLTJTCPKdb6wk3vM6tzFha8G6wJawpWSYq3ZMkNGnvXdnoxmvMX4Y2pvKP7uxzbh2JFKWBE6x",
  "key27": "2HhXek6jkv29Goz3CqbQniEreK5smQ1ghHMEvpk9wt69NS6WYm3acyqbUEUoKKyLWFFLsoifZey6o4GJeAg5a7Kd",
  "key28": "4nivhvfewCt9jsvZjpatxmqNcKcp8S9qTzsXwqqPM8euz8UzR9aU2KgL4gAfvJMTjjF8wV2fPGL7WFJcQosS2SN6",
  "key29": "42bpa3KnDfLKA4RM2hdN2EvBJ8DRnbxozoFCerjA6fLTpHFiRNnQGqrZE5XHRZQCjNyrZqqCkkjrRfv9NwKXCVzY",
  "key30": "2aUsZVY9Zqz6mnuXRZHDcWtR9SRzRAStUnP7uwM4a3nuWQxhqXTPtnESVNGjA48vmHjiEjmFoAo5hqtv4obDqUfu",
  "key31": "54vUPSBXDJvLvLwBQPagqpY8gpLovW7RqFGfNcjmupSo3izVh6izQUt8Q9JzuVGpsCevp9a2fPzxhVHYw95uLREE",
  "key32": "2ArhixsSU13P3PJico5voJtVMGhb4nnqQrs2HfosS9prmm8FenrwwVbDpHCoFse62iTtaiCJrqxDw6WfkuBJomac",
  "key33": "3BugyLFdmTkGwL3eqCGSmUMaQZeX7mdyqmGTqCbKbtezuvaxoiCyScvg89RREuhdp1DY3r7GyGbPsEkD8uoDTzGQ",
  "key34": "5J6HniGr1HKGwoJhhGgu5G9GDKJAfeFiGKT1szQpJmoQKbuW8PYssbNaxHAYZbQBnK4vbuu8xSZ5k93U6N5mHPca",
  "key35": "4o4saPGNXAPDc7ic7GMUJh3Bxvfmnj6MGx7JftzSxpq7xKs9TJUSJEAjdKgqdFjWaPL1yBFvw8AY54kmNGwwqx3F"
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
