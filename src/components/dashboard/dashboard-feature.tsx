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
    "3Q4mpG757PHCzRfVmzfFJfCBNwY6cFAvzcFist8YB9rLGhiqcg2prMgb6TtmnyRxZXszVhK4khbstXowQzYnqNtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQVNaj9RCeqKEZqojG6d5FcKovpasza7J9ytB3PTSoukdJcmUR43StUBGtyqL7wF2wKWZDr3y6h2mu7eGwmrzRK",
  "key1": "2EUcDRnLRL3hTadQtfMUcmYgvZahzHkdgsthpx89mgMaK7DS6giFRypLDAPvumbWC2CkfpuYbM3wFuAEChert1iX",
  "key2": "47nbtPHL7tNV3e8ia2DkkpB7D4ZEL4En7dMmSsALN7wnRiAusC7TiFFSxUrYidjVWskQuezb5VL9Hj7DaeQq8osq",
  "key3": "5C2vAF6M3ZTEGzdKjtGfznGUFbVX5EYB5Yka62qyWtEMwndn5t36WbRyeU6xSo21YPMX1qECMoi9rKdHbFGWRgs3",
  "key4": "3qmTimNHyD6yfa9KZcVB63RkjsgPtLzTPozHC99qUwzAeAAanDwteHpDeo61VyeqbKWKbYc3eJZgcajkuvrxipHL",
  "key5": "3rwGqagiFN2UeuzakzjBskT1m9mgrkkCLCtyFq1B4HR3wrGegPnHLXoJ2ds5rHQqV9nHfrsFzrq8YBLe7TheUy9P",
  "key6": "2dgfWTKEV6ECFGFLi9AuY3XxWdA6oss7jBAMHiwvFy4mfnkzZEviyP3HnXWNeC5xFnUKpL7P2TsP2BqBNgxgbsUj",
  "key7": "eCxXhoKGpm6jgPNHj5GcFkdfNR9haS8nKXtrq8KDMHw5XHCMRFpn1LZcjLyHgg3n5rtjBFaboarvh9zTioLz1De",
  "key8": "439BM7kt23xy2oYgHFnVVm16Q9f9H4FmMizCYmr99qZCq1MR6Ygu69gg48iza5aPRiGEHi4tCcfvFr4AWzgs84KH",
  "key9": "2ejqexbmcegge58sfvjPSZyxeaihfHcD2KP328zYHaGtW7UTnRgxAwLj5EHRiaDdQTWNNjGsNRMKVTdTmU6ES9Dm",
  "key10": "i5V5E4VcxA1McbXmZiqjtjgi2uJHR6P2htt7YqUVMQtJtbWUqURvJALqyKhD4prTB47UgjTHVvFWAKctXK4PVZi",
  "key11": "63sTDuwjyn2QpX1Vyp1qGSNrTVE1gJQVj9H7o64yDsRyrEia6GmYQuHF3A5woMhnx3qs8J1vEzdayeLLcRx76DhP",
  "key12": "ZTTcqEKGqg61bDJY6JCVTnmX1APmnwdTRPkog2p4Y5pc5e98vqxJg31FDhxSBFKRt2JRfcr6JRx2ieY3RpB3359",
  "key13": "TonS3EvqMQNwMw4kfKsBw1eMBdY1WnzfbPazbt3vVu9ikFq2ZQKiWLvHFjtoVtiYDfxxbT1gsiTShbJb9Dd3LWW",
  "key14": "U5gMLYoCVHXSy9oEycKKHTNmuPji2F7oTguq2HtYUuscVsHZtheRaKvh4vwUabzBYF2FymHtQ74GHue4PGsJ7Ce",
  "key15": "376tJYKN9kuZjZ9G1ZGaUP62xT3DiqyXvg47sVD6QF9BNQ9BzFvVrGbCeg485zN94FXHrGxzZb7kZzhcfqUkozi4",
  "key16": "dwccGMmNQaEV9X5JLyEZ5GojXJteGBBYso9DcXRAiDYS8eNzBqw5a1oFDUvgjB2LFWJjnAuoqhMm8rTUNPMk4Jy",
  "key17": "4UP8PN8KbJ5Zqgu7MxUwGiNJLWp23JWYBqZSEXhT3skivfxXPtEz8hUYr41wJJsQkjkAfE5LWSu7aYEy4L2tMXGU",
  "key18": "5E7EN7nxLxEBppa2evTBAXLEL8vz6yY3QB3F6ThLG2YYcBqQNwUoVpdDLxQaaRHzq1NfMWgY9ihA9VNvzAK2gaat",
  "key19": "2G5wJPU7pM1PMjERvztzAUZ1g8FyCycXWR9K2GzQQQf8qLPnyB8WUFN9XwMn2kfW7GyfCnZcxhCsAAPDZZoF9NTh",
  "key20": "381o2zCg8Rsuj1FVMknpDjS3B4EckxkkwoQKoxvzNgWu1CmSJdnUv5W3h6XNMGLPnN95MMfauBNXAdj28eWWXjSn",
  "key21": "4KP4HG1Kmp8hupvUYReJYETjpPPriaepHpAj9CqX2tYnoDpKQFmoRFH6CaE2EfEP273VF9zs1PA2zK3JzcYtAJzN",
  "key22": "sipPm9zDGy8geEC6Dy1TTfFrqhAZhveuNhrka3uQMv7wik7qoDkQt4N6Y1npimUgrcbpDZjCA5i16m9bWVFd5Dd",
  "key23": "42zbNXvtThaQmopkHxxonUhftFZY2oGS4f3RHEzCXaC3BRbNgeJThCQDXAkZdQSQLMvrFGe3uwZSETyGD7cGyEfu",
  "key24": "5MBkXK5MAREPcMWSkk9WSQimPVSx1knWTtGFUfmjSZTpJdVq6J9KrLeDrxtVWy85QiG95LzK3HXrMsEjK1Gkw6iw",
  "key25": "2DokJjgZTYEcHmWF6Uc3FNCgvjeoUVKWBkxbyunvKwmaR8Wb85pmvYVTJiWaaYo8DvBkrxydjBS2FfyRi3wAD3tN",
  "key26": "4NbwXp6yazfgKepAGxukM7Ffq167ntXfMxM6Awfo91ZMVdVXrK4HSQj3xe38A2J4JdxebUiS6ohhv3gXccs3Ao97",
  "key27": "5Sj3nMGKTPkCQWCgFMJbch6ZenbynvvpvoxsBqPo173KfWoNojB8KVgvx2xBsbpe8nDjppwL6EKakTZAiJYivby9",
  "key28": "3Hk67kCdfbNLHJeoBQ8zQLxATZtwBgPqi2ff9DH27g4RBv7KqLijpBWEnwBBwoenPxZmJUdzHQxTLkBkbHTv64YR",
  "key29": "QjC61qJeenz5HrchLmSqFhqkM8cbWSHRNZWYJveURex1qH6Eq2LQMyUGsk8x9FyYmSq5FBQk8dmxoSCdBebissh",
  "key30": "Lq91ASFpQsLPcHmRog7zWAhMb4u1eKCwiZuNxmgS8ZAVLcvtSr9sSyKS9qeNqLpJN1CgNqbnXkaysP2TqAvx8nA",
  "key31": "rnqMrh2vVFmsVWSBC4cf9pdzFGmG4NEKS1kkZnWcXEgAniX2kWt5jrqVen8enDKgBNuaggmEZv3TmBH2NX9f64t",
  "key32": "4DYSswwxcAmd5gdAZ5N8PpiAzqCdCkWoMba55dUUpUvgyDw5VaET6GSqWKhtbtuUJkZrzTHwyE2orbB9EghADNa9",
  "key33": "2hcfngEDP21Hui6TJZWQQmds3ddcqgA9VEhvUQT7tL3Dhm4ZVUwkBUxoj3hhig8nd8GYbCZZAaZf19EC3eHUSMU2",
  "key34": "3PzRc6xWQZhV2NMsiCqvyAfzpL6eK6PU6nN2BG4Fqitgfaq93xtaAXKnWChFYpDuuBa5PdvahfnUmkvQtVnpXTQA",
  "key35": "3owWYs7iPWKzSwR96TdTZ1yzSC1Er9Viw78f2siuDLP3fhDrpuKAKU5SVxCShGjGAwG1UWuqHTs2nCv7tAoVZwZW",
  "key36": "xNZMky7R82yAhCvgVHHSanUc9GEGiHtdw5RCQVKxxafAWy1pnJprd2GLMcPLfhzVoNmZdNt4ESVcPkNQ92HGYTM",
  "key37": "3VLrrZNWGVZMgmyigZsxC5NLEbC7e3jZmgAsw7mR8wCQXixbW8RXqB3VQstmdGJ2dvMvAfvK8DDLy6STDyRu3Grt",
  "key38": "DLqpu7X6gh3vTG8ancZcTKVSCcgP8utqLLAvKQ5JzCsAphygmMQGLkNdReCfeF8iuERGSHhZAW8QSWXDfNT8Us9",
  "key39": "26sMZi8HVmdCDMcpZ6W5yGHaUriqKSGtyiTkueBH5xSP2wxXcuTtLJXRqtPba5MSH3zqv8bu8uFru7ThRQcdwLsm",
  "key40": "2vKdGkWJs6HxD4saZ2tpMXEYmWEfMVyztkq9JtMYPR7YPCZPShbeLH33nxa7F4CusRWyAD49eqUGTJ2C5BFUR4z4"
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
