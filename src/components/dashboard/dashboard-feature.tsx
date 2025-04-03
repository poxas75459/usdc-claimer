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
    "51eoenHUmqEy4HzawqdgsiH6DnazD5QmkNUJBjmZjRjU8wpr7btn6XvnSWKef3utYBB8aeWHeYZVpe4w6KdR2GMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58JRdZnNTnCxm9P5ora7w8ceLJwejsLkaZh6Q4jNidBzN2rYvpdWYYsNjMX1VPDuQ2eSQeE7D6dPSLYJKfMd4cCf",
  "key1": "4NUL6v2X9jV1soRGxAQxry32Qdqw3KgsL8muHb4CjmNGmkdea3La7ih3Ti9rMLKk9Erwf4mgP6gPSjknCaRg9Zpa",
  "key2": "Y1dzdkCNX7emJYs9DvCwQpQFCa9zyz2Xhsnaj1vs67YXHuVfHXujctnfXVG717fRMv9EvF828RSuw74c9WvnuRH",
  "key3": "UJWZ2uamcLycqUWDG2p19Xh9tAcbbLPW635UfqgAz8fuEqd8JBtudBK1ABqcCiuDjpkjerJV9bBeX7VaD3dLsHP",
  "key4": "46zxnZfh27QM5w6N2FzZeb8MZBPXEy3RYA5QZDtMPFSjFmPoxQzYsH66WhTdeDq11GPqqG4NzZCed8mC48PyHFNm",
  "key5": "Zet9tpKrZBcLNzobgUkv5EqCXA8yrsFiTSFr8JkJykQV6G7zLkDZ8Cc1u1MYcb8ZUS428UtEMqN5FM3HB5WrqNZ",
  "key6": "37Rtx2gur6aVReusomSTfD8ngzSSFhtRByCd4CVum61zcoN71M4AARwCjmsNtHYH2ddMD8PmfpMcmBLm7mUYZQro",
  "key7": "2gn4Xy8vVzJHCCrRg1Sq11ZJCbp5NJaTu6M5HnpHZ3d5xhHPTQDR5Xea3EPutxLfmT1nvZYYbkJeNk7LVToQZ9o8",
  "key8": "2WhSUMzfYNbc6ezdSTQyhLggA17KbwddnQ9Cgwosq9mF2Bzfh5Vin1t4QvahLPVHb7uxZQLkfw3c7Ao9zu43SPsi",
  "key9": "4sWWiUHySv79JpYQoRAnM7ngLJhhPYzroZWAMVCdZDFbem8wgRBWUVrEFtxpEhmYZ8pBmZQMVbY2Prihf2qCvsR2",
  "key10": "2VHVhYT6ABiW7Kn6TBXv6Yxq4x3PhfWtMjDdijYMaF6eSse5axYhQL8EoePou8rbxBorjrT5dWPP9yueVZKiBM9w",
  "key11": "59iJBYEmJfvweCrMQx6RVmTdJBvGfp6GWQCBRhhbrmrhmj1UUEVnmpLZP3uk3dLssNtsRw3YtC4fjZJteeTc4AgJ",
  "key12": "5A5pnJLBpNURtTzf1u6eyQZkDqg8MML5qNWsD9be7HbNE21VUvRJsbHHRL3ogTMB8eNvB3Zu539VBU3oGJZHnxCK",
  "key13": "5EEDGnuhLvHNTEabteYZDMSiDuqWbLGYYf6fbzRZdqLijZrmVMq6KqHTgcWxDeqTExe19Z6GqmcpiyMhkp6RJmiY",
  "key14": "2V8BakgpuANWXLiUjFia4zXxKJbFpUzUbQDyZuwRYwsGvRJobqhZyjGvYRr3SkUjETFN8S1jacnp4XwnoJa81Djf",
  "key15": "2NhFJ3mQ7nqbPCMTH9Dr6fUuWZa5UphdeSjTqCnMv9F7UWc4yqpvMcgcUkbag6GGTitWRCTgAbHZMwKp58dwpARE",
  "key16": "ub2xNiY7rjS7uwYEWbSNnjEo8YNu7HKWnCYvCx6H9rewsqGRC3b2Q7qT2ugzDiwVfA8NEAdgCpPmaphMNj1dEf4",
  "key17": "5zheXbvLfZeABPxuwe8Ry4QYP35WQaazFLfsn8reY8zTSvWHM4T3R1MSuYPFDfuke4w86qsbhctpsXtDowBKy3qd",
  "key18": "3UJF2Hcstsaf3WGEJQCWLE2Vv7EXSDRjqGJbAy2adGcqXaD9YeFPNgBxfYyg663tnT5facjvUHaThqMyrCUEBMC8",
  "key19": "4EqUQah4RACETk7q7acpWfUzJBGydWJYqL5xMJhdRGyAgBpKNzbkNfJHH21FjMGwamgpPQziAc23XDmt5CKdwaJ8",
  "key20": "2oivbmm67R4b2jcLJTwt7QMZejHbWYKWd5Tg4D2RWP23zswTQNjiXBNfP69YWCBNu6F6UDmkni4zTwLHtdvkrr4w",
  "key21": "4hjk4nLmobHWqkNHtBRRu48LW2WUmTgnF5BwYCSUrcTCJ1ecekLi4Y75M3ueaTUQQL7267yFo318ZcgF1AvVUwjH",
  "key22": "3DLS4bFBy1MySCEj6Wtq8btvneQVhEps6kvE955iqoDk5MbjiCVo4PBegLDve7qXPhkiJnkbJrTRx193Bp2jbKeA",
  "key23": "2zcEvZhUPasbL1uCf9VMHHK3Rndok9b2ggUUjpBy14JBfaKqxpxCHYsRTs92h8ZWYxry8mLpHsex7p22Qe4jV9Yi",
  "key24": "cz87RhpbYe9KcAKSYNqD7JWofRqJDtkyXHJ7Ge5SF1gGJLNvknvEqWYLAisTfx9vTcGgoRRRQoXCHi1FPbjLoGq",
  "key25": "5DwAx4pRfADzdUFhvLPTT5vMH6tzhYMMdLr6TLqQfDBsKmEHcqA9QnRDTLY7WRzCRvS5fiCkt8GfUBTNPQYtUWYG",
  "key26": "2iwtgSVmT2F7NKd6qeWWKaqJZdGNhHQQa3tEz8UKiGq4Zr25HMTZKQNtcBu1te6dJpAhPCt1MM8473DfwYjLnsFp",
  "key27": "3FiY2RFm6uU9d3mFucCrVZrTewwwmK9dwcDPUxXBshWJYwa9UE9VSjFs3PaZciC2nSsTAPAYw8SVboTDeZaDPhJe",
  "key28": "4ay4GBvCwctcukhL9tPUmzvRuPkuQeCcojhXJLmzmULgcuYbQKWtSAeyARndCy79Ss5TukrBY5VLWxvgy7Q4LpJG",
  "key29": "uDu5u7d4sVsPLmt1P8LErToErrtPnLPQhTQfW5XXVqpZqUHdv4xSryeY6v4dL7y1JfVbuGevUdhB7dKoHSt4ee9",
  "key30": "57318z8BgpcbmP13vPErsTWwKN8pRU6VXK81fXAgtRpPVnGK65faaCn47LuY3stQq9U3sezhqHrdEYzLKoSxeyxK",
  "key31": "2UgtugNNLgtfJXLeKxs2inSRqRS7BhNPHWrZe1fKHsdW6ZLGqhJnDemPVmvGswa178qDXoMCF1dUy56feM6AwVVZ",
  "key32": "5f1jUgW3SvrokPfsVxfSkrMyzQRC96HF9agEWGSQpvuW51cFdDBNnVUVh5KhW8E2ByucSsE8mZDuXcy6ZsYDAP8g",
  "key33": "26tnna4676j9bswDMBK7fBDDvxr2h7qGT7c94futnNxFaGYgHVZpv9ujQkTUGZE1nrt4UkBqENhqE1iiXLwdSXLA",
  "key34": "45vjQhG1xXBJ4NDkueYk4TmRPzRwm8KAQSLaSwd2iEYpkctxUaDNL1sNsMQKyPTvnSVYdxAcFjfyB9n9gEsbUq29",
  "key35": "5hWkqWFJKpT5Hv24PiK23uvXa8Z9xYij9EFiNTHDFRdGBztFXUL6vy9NDveafxTTtKn7NsdpcCxeBA5LV6d2k8av",
  "key36": "FsKLW6MqDRJTueg82hXsDEzriC3XuV7XPSUUSWqsEaj5DbwHkXhVQc4HbwebfTNDptiuPvCkrAVmuyufiUx7CzR",
  "key37": "uHZ3zakgCAGUgfgiDP3TSCUVAMGWtAX39LWWwvuZUSRWeSwKVAeHumU1ustbhT7CXSQ1NyiYp4LHCHSMxCoiBKH",
  "key38": "4W8NrGc3YT53tZ84obbydqDRezqCRPYMWhkPUTin4G4NsnE1q3kV3EdFX4hPxic8SVyLAN3rqMAYUhkjwX72im1P",
  "key39": "47K83XcgrZhJXxX4mvDRzZGeRnkvcDyFTi2YzidLVDs4pUCXBW83vVEooo3YPj7gJ1Kf2isieSJqk9XdZciHYj97",
  "key40": "hLdC9j9LjFaWNc1areoXvva6xmJEpnnHXCqCsbgmQhfDQDqqcWKUTknVzsLFPN6rQxj6tM4Tro8yZ46jAxzHa3m",
  "key41": "2DFg7j6P3Kvc6onPgcfiZswrVq1PTr7ieSYWjMPzkRCBKCr1h2duVjGdh4HuCkJryC5VJRRDDViaw4akqpxhtWZq",
  "key42": "5DG8Att1xAXaMHh8kRYjjZd3Qfy6aeTgJzQRWSdK1YeRFvK6aQ4sYCEfVY4MjgjsVSMHaNq7CcVEE8SSFaeYJd45",
  "key43": "2QxKdV8r18CmnBgnn3xoKegbnBcQQ5f8eUk316BiFR5rjY3PA8kJonbvmMWVajpGECB39C7BpimJGh3baJahJKVA",
  "key44": "5CWrAPPRoitXJftcM15VHtCDT6VCKbwQQN11as4po3gx3xqMSz3oGH5AUJXYBxku2jpTM41DPPiNQsFB4DXQA1cV",
  "key45": "4YdTpGytRuzDiCM5CUbeseMBhjpqQt76YJDLL5w56RLeVGqCG6iWMv8Qjt7JLSx7GYk7iDGpte5R9TpKNGacoy8V",
  "key46": "5Lv45mVsLAAftpfv7cuVrY4U2NWhKaphUbCs4sx2P6uVnKTV3LtpE6hJAWVSKBV1W4kAZcD2X59XHzf1prFwPseP"
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
