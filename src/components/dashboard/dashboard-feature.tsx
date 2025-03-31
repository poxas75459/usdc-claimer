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
    "47ty679mWmVgx5SzdNoFx7h1eTCdJLhVBquxYKFKjV4JafRwRZ54xX3rha3ckrGXT4mJAZJwxYvYLJJ68aohJYYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3otkUcgUs1cUpwfcCWNQ973Vf5wkVgKhSjuXv2ScPyuZqeBVj8GM27wzAyZy7Ak1cW8oKCtfnaJbrDjaSNnHkyr2",
  "key1": "4rxSkYejGymCHS5fXuY7Mbu5XZ9wVJ2qNpznWb262xnBZde3jQqngra1LsnPCb4yNRyNALpHg5YF4386CK7PR7SJ",
  "key2": "52g5a4WoQCD3ph2zokrTHBjUyensrFEHXVmRSVPdXKGmEjJjjy8xr8Wd4ffQVXkSkmyeDakStEwdHV53rs5hRDQ1",
  "key3": "5m7dYHnGQ2URqRfQHT6StD1BKeMubvZwqd7bTn6myZDtFDdpE25ho5yUq6MYrcJk39HJsTmkapPrJM4mSDu2x7gH",
  "key4": "2GEoUWfoGcCGRpnucMzpkoJNQgCgSiFmXnSx5z8VaZqf4E8KeLDe6rFHLWtrCfJZ6K7xK6Jb8d1XNcpLazUk4i9C",
  "key5": "9dzRpyY8g19MDhjhkiTDCAvs2eoYn6x699jzqCzVBEG9sRR4Yus1enjMDcP7ce16WNBWCCm6Y9wcncc6PBiB8YL",
  "key6": "5TaVapPYz6PGdC4xRzsw7J54LvjCxE4Kzq7ZtdgxoBpxfZwNj2yAWKphBApsiXTRneo5qTJheEnqWncPUaCCgR3w",
  "key7": "tEdRFFTi9skJP9WXcQUx3jqgt8bkJUfRu86WXBLo19FAbxybwi2cSBv4KUFDibbkAFavExvb38XYAsEvX1oZ2XH",
  "key8": "62PPmZcFS8TrQSVq9QmZtq49Ck9y5YEihkqeH1XseqyR3DA7sVWKrkieyisEhYJqbQ2buJGXSQoGExkByoaHhyaS",
  "key9": "2uajpAsp5cKA8B9uTThMQrUwZYyJ1gNqYBFxs3xGuUwfD4PdCLS3aXF6JJ9XBhXAvca5g3J4hFvXWZ7PKM3hVjs8",
  "key10": "5DzEymMt5c55KCawrtoyEi8Lh2vev8brGgErsd32Nkf27GgkN1qrY5xeuFyUxAohgpUF299RFjkQ2GFVN7MHGh8j",
  "key11": "4SJXAXdaCmtAXsR5hVEpmLLLyQGD9QrGCT2qb7xoGtnqjhnNfnJH6c7nm9Q7ybFggVi6RkXVDLwwEhVxEEqZSVVK",
  "key12": "5cRG6pAp5o18TsEru2dGPgD613B8MuZUQex9mGLX6sngHq6NKTL4VdyhyYTsoUAKNpbrGXkbwLqouoassNhufnAB",
  "key13": "JyZFDd4R9xLmDU2fbSdWtk6BjpBg733wMUMqp5YHQReouHUVaw6U9WZ243yYSBRCxqNVmWcDfhmzpc92RWR9jTU",
  "key14": "44iBfya5WUWjxn9KgZvWoDpEG3LWCcGvd5iLNG5FipyyEwfMpGJUiKgqUGHoUZBHKoff6jzNkfcKt1pbJw6Kkpde",
  "key15": "4P3ENGREkFecLCsKvStMrcZ3tbhS6kZw5ei2caNdZAoLMFzDdMvbLDaM9PhdPzADNUaSBt35fP3dwiynyKNGeccj",
  "key16": "2tn2RRrGBq1azRjnYmWh5r5NpcqUz7XHxLPzdcPbR6jzwg373HHpMUw9eKZP8orDWdwphP7mXeJ27Pa25KtDe8Zg",
  "key17": "QE6WUVHP8ZBro6huHyAwj3789yXnAgrYsQiBihb8uRHNEob9fJPmqdboHu4wnEpoNu2pkJkNiRfpjxKTn5wsv1E",
  "key18": "4EYYts84yACpQnhmX8DWdckt8CvdYP4hiuQTsAyGodxrqiTDdWXRSAJdPVo8smXnqJFjN4eyyWzVzCvymFspxJrr",
  "key19": "4cHSkiSP1wcn15vhyKvGiGVxFv14zAFAzysjzxUKHcjLtpev4skpErsKDJTySbApuqKxad1qwebGdHsZR8nWWraJ",
  "key20": "3zurFLkWDDZLjzT1S5mJRQzfXrZcPF9CDKgrU3EtfMqv6RY2HTdoDe1M8reYfeL9Qp379uvF8EijdeQJajSAmoDh",
  "key21": "gaSLrimn56s47oabsQT6kaeY3b9CLncna5tcHrdRE1Hv1vvtYc1beSCPN1tRN93DPRx6q3z4hGptydeKBSx2unj",
  "key22": "3rAg8LYP28YKXxmQBYgYMKLinYzxzCgcgAahgAke38DmuiXcGTdTrG8dpejFi1soZE4scBvvx97WzoHg7YeGZsHS",
  "key23": "36kBdzw8QHmLawGh5ZNM4bKBa8SsiDMJvy3UHbA7WmqSD7n7qY3JE8W5VgmM2EMgEDrnjT1rjHMqqomTsmpEG5CR",
  "key24": "kHQvQJU7XP1wcd5AHc9k6wdLfVz3zNqK8vBPsmp8FypV2N3ef27e1LSjwMrVnUwTEZSREAUYiGGfiHbHUAVUh94",
  "key25": "3DBkLbzBb5gFiWLRLPbhRL6WqhRB1hzxodG4v6dQvTvvHwfth1q6Zh6seEBGR2qeNzaAaCap5mUyV89G7ciy5pdR",
  "key26": "4vCfHmcf6Za3xzCFWnMLEnKAkQeCmoEo5Kg6qp4yhA3nSNeRtwBTWdi3gFQjpFQt8VhnNRARGbKafsbTdLJiEGLm",
  "key27": "3hxNmMcUMsokeYBNFEuVnfcBsDX1CyueaxdrTSPJBFAPkXdKGV5vN2V1EaoqjmmxL4YY5JE7tuqUvSTUptdvy7mE",
  "key28": "4npX1SLqRnAXP9wBgpj4BLX1oMSX5CDRECLpLTar9GdBAvLBRJLuK7Je3SEzNyvBsqQSem75bf45g77UaQ4my6fR",
  "key29": "43dC9JnqFpc4DnR8tMTyRWBFfH1itLJLqqMVVbnffUbFuiPbswgjZWHeM9QAxHYZjfu2YDoXD29cekxW4qZHetjZ",
  "key30": "3Vy5zv99D5ca1rjZV4bVnasJWvcEoaWC7n3ubQTYkEsv6AiN1PXtRkGiLqfL9FamLwRXRM5FihtUHPFezA8joEz8",
  "key31": "67Vgw9pPDdNVw9vWeriGGF993W3W1fGeQx3KHB7LAx6p649HS1NXwPhfYo4mh1gitsE91ZA7Jds1ZYGan1gckX24",
  "key32": "3AqB6hoDt8CffqwTAjY2PJYMDrYgzWeowdVBQGdDqD8muNAy3M177tF49xzJhpoSgW9euak7n5eb3WzM7AyjW32q",
  "key33": "RuPQmn7iSGhsUAaDJysAgJyHwED6X7o5nssxWnZWrJhjf1dUZxD1dPcK7jzVHu6dL2b75a58My6hbFyJA28FPaP",
  "key34": "2pJsB1bn7A1VytvLogd5vKTPjq8DrhDJW3ouigQJD4KRe62Bcu9d3i2iybKrVGgtaqKQgvEeqtMFs7zwt8csFrYg",
  "key35": "2bXKepXe6QdCEBc5cBVPAvGbsQ3MxZHP4njsoteZyCsnZRWXU8MEbdgpNnm5RwSPqVoA57B8i91a2vw86e1dZZyT",
  "key36": "G2dcrLdzF27y3uPCjpfHWCy2Qx9uTLpkG3zWgdFG33THqN7zUGGgSugwdxxmcGsV6S8r7Croit16d9JrXULMaZa",
  "key37": "5QVEg5A1kbnq1iU8efz5QcPYkKPrSBy6xVPaxrSuXr6vxeSXaKMcJ6aCEdAhQnn3Jbqxt4tBJTzjYbUaVFiGnh84",
  "key38": "5KMyovRzhC42b9MM4Ho6eXhjKe6TKacrTCJKuWauLy8A7Wdh8zgdTAVXa3sTzRQLEfKa1huF1Vb2HAmjYgDuQUrt",
  "key39": "fSc9SbrRPtjhWcnLQwLtQCyKsWVYFCixfoL3FEWHKKDAJScSSkgubF3zuqJCK2fN4hAXR3MN8s3QHhCV2QsXtX2"
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
