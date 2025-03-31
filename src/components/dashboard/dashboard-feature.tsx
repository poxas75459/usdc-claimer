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
    "3xCtUvHgGDwvrgXnXt3HkfXWW2xQoM6Qys3setRr2dQt2xMm43GPSj3egnPsZBVF2MSJQZmphSnxQMxTFNsnjy5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "496wmDEtJpjuRAasFgeq5DLPgWmGbzw5KymCeixZr5nzeQWwq12Qjca2JKRQobhRDmcWxuDNRBoAAPcmR1QzHzVt",
  "key1": "3ejDdwT526e7QhfFMprEpQAyfeVCQT3GpHTCyuWXPVZsNyowdfRUaMGmQqNSqS9h1FEjUDtFc3wAxsQnhWLxjM6z",
  "key2": "Vu6pqf62sxCTmZSwkBRyNiUHmHhTA936g6ezJe6V2CojnrkCzAwEyxxQPynG2vSczmpSb1EnQ17sv6kz3BRqZDb",
  "key3": "dyBG3LBJWyfstw54NtdUWtNjicEWYY3vcstCQBLVBoET2rTsatKdmR4BNggDh2FUeMJX5iKM7J23QAxYECihXcm",
  "key4": "ViFtTpCDoMGh6zv2UYKM6Fr9RXFebZaLDBmP5N5AyyKMk3iBRiHyXGQKj5mhqo8ZtDvLPc6LzyubyK9U47UaGzb",
  "key5": "5vBUw9mmbT3hQeYMR7tDrDyRbEnKWdAmVy7bLtG8e5DVLWiowMwKNbEDm2Fe9huDzECwgRq93jmuF45khR3bA8rd",
  "key6": "PyQLgfNL8DhixySavWx3vWdrv8B2oBNvaMYHtJa8AcDz3XPvd59NJcUVs4v8s86vGvGHy28DksmnkRbZHuCRjqe",
  "key7": "3iL8wMnHpP9uwsWJTck7A9AhCETxkHX88yne97yHGSa8VUUY5FxGhnEE1RhCJZo6jkyAwVbtPshRjPcBcPPPwZij",
  "key8": "596HEMXmJCaaWMrANXWrZeQoxPCkBPsw7DhmMG86z2tBSU88Nd3Kn6bGVyV52ZJofUxNkMtGchtc86dKVioYHr38",
  "key9": "4jwmVyxH1Aa6ywNrjnaRyqAf4FvAMmkJbWZqRFJmXoaWMiPhFGwDgA6bViLs5zTh5FaU9a5V8Ye2LPH4MSY33qjT",
  "key10": "3qPmxZrAM4anj7AC9M6o5RE5h3oNUFvf7ATHqiQuFfgVFLUitq312u3njUH4N4ueFwBBoNGMbHRMRjC4oy7ypo73",
  "key11": "GELMe4BnGtUPetGkkjs66JFsM8RZo3TNNENMLESUQhHLVmwpTm47x5iBFbY4btDcSDqryRochdwuPAnUJFSC3Co",
  "key12": "PWueSiEw8QLcPtTgsfCsvkha5idHYMeh2bkFHqXbBYDAHcuU8gzvieDSSjsmDS987tRvTpAiTRDyaNfg4abXZ3b",
  "key13": "5qZKEP6xkwU9t2WjNGCu9Sawx2F1nqbGnmwXahJpaJLU7bdEvPUcEjLczzzjvDswVWpa639UpSJYzNLooZvthNHq",
  "key14": "52cjywrqiXjQMm34wVchctKvbSt1ZmeyXAwGy62syQ1pXFgTnR8ocXAx2DeezezFvPBz7Dx5nRSHuzonbgvCR63i",
  "key15": "3CMCB6Kr2vphFCuN8B5HKq9oANgn8QRPWEq2K3inbyyorBVWQadRa4ZdE6LjP8Zh858oEDoL6waLpr5tqwHqHQHi",
  "key16": "3mW4a1742DtFTmkCdMp4DC6WW5EpuWfe1fQ5jPKEJuq2WBDned1ucnAsPtSdN2s6h7zKX2XnXb4xuvzNSy47f9yb",
  "key17": "begGyGj6wNfrsJKWzVX5XJsyE1YNa1KsxEHiKELNDv4znR8YTwnB3734gchbab3b1pu6SEowqeB1uz5pBwVhzAf",
  "key18": "36ocNkQmJ7JqxjWJe5g78TbiaADawQnCfyWTRFFzWp7iPBwSDhSAcf3SrZbgFf3KXxqB6C8PKNBFdGAZA7FCX4a6",
  "key19": "5bpqApkyF1k9CFTNLezQ9CrdhFN3tyVkAbfXZtm8QVHH1YdbD69qzWHaCEP7SnYSUdL5RUpR5RuhoJZgBeKiDwWT",
  "key20": "54qWP3j1dTYQhtYAiQtAg9UjvMibozcYsqPEAGzXjiVtn8WKifazFiZudLcTGoqyRrqzA643MQoAVtoqRvT5bWTW",
  "key21": "uMrtTKgUb3qg43mqYh66WC6n48wb4NfAHWYnwL8D7UrX6pHkvdeXEbQaC6tqpCeZiRjxfGFA6bSycruKqP8MnxJ",
  "key22": "3ba8TyYZ24JR51r2FWYPsTxkcWGiLjuKeaBDztNkYPpsDuzJoY2UCFNj5WbSzxRbd2LHBHgj4CVcVQQCJrQJRpSs",
  "key23": "4BjbBYbbosW8Cvi2d68MWH2jddpw8CWG1ZJo745C674uP8hpLeUop62CDby5FTBdnwDridpmYEwXvRqgL1WA6FNR",
  "key24": "3HGU9jEiZTprKpUXfpZCgh7Dy171BfaFiZiHpQCKpFm28FhxzmWSJjWJx48aBYH7rXq24QmMiY26G7nSDCeEwgy8",
  "key25": "5uZxPaXhKoBPHPqsAvmi9Gfc7BHfV6ZRqRMkKzMHN6kvmP8MUArsCZmxVAxydKeM7q6fsubV6dWWzyLvfhsSMUTi",
  "key26": "2mdVrEQhx2qcmghhsRxkThczcoYqDkuAJoSKvwe2RN1PiGvpUUEZbss6h5JiKwUKVGQAUHqLHfGrzsCwj7LdTr2j",
  "key27": "37k12xVN7UeYCQFjb2frgcaPcfkqMNx2bc2DdwjryccbMXLgprrPgcSCPfPY64uH87JqnHZVz8GyVK5XxqLjAXiK",
  "key28": "2SKbtoV3yUKAK6ZGQfvK6AkaHtyuY8QQdV3PoSAjjfqLmwj27kU47iUkzFHsLQTm1i2WzJsgF13ZDX4KoXXVY7o6",
  "key29": "36mhLbQTLUzTcH9djmCsZDB4BF7ucKT8axNS92WxU9v9fcH42hSJHkoWegkR8FjBXrXw4ZTB26nZkEMyapZjhjbW",
  "key30": "2E2dFARHDbPRctCCNDjXMYv2NSS89KEfuudCvzA6QgUsJeLjrvfZgR3hf8CPkqzMkyrLKpKDoY2RGrzhpZLGk5dy",
  "key31": "qLqbCKHRZJrqF8EtZWzqb995NzXJz5k6BzQh2vLwntnuYmVB7WMKbY5QhY9dLdvBKSzz3EHHSuxLyAB98rCpyvT",
  "key32": "NgkN5s77Dty8jdjqAfqBh8H24p2B2ZdaR4tXi5ymBPSEfsRXgsiSBLFR6bJaGixcDUXMsTCaQczwMA6zJ1NbDF4",
  "key33": "b6g7kdemFMGTuoYm2jxmxfEbjnH8yQEA1p2Y8eeUZ35dWd3xiiNkzE1YMybKcWj48LR7HzXHwVXFXNn23pwUe5N",
  "key34": "2WZKa892Ax8WrQDz14mfVrXraNmDJRe1oZvSiqi2AC4JP1Yo4NXYQJYKLRr6YDWLKNN1zkniycB3QZkLoQSKNJas",
  "key35": "4kvyRqhoKp3t5ywuneN3igf5sCbWjgMmGR52fbNVZYY1Dpxw2x2R9WDYjqLWUan19Pec9NkyasgFJ9HcnL6TXq2z"
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
