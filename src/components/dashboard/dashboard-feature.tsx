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
    "2cm4UQNyeDLchUGz61NonwGTtv1tKwxqSoEWeq9EpxkMgoEH8bLziFqNyfCv37gAW4gBxZdytXbbbNBYpgEp1PFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GPEtkfAZLi15jX2TULWnq3dUaBSc9kMW2KE5EKzeA6Z5y4XApfZFdwCXLRKBd7jGTd9G1e2qDCaPfUvTHcroNPj",
  "key1": "3x58hcwLsYEFbhB8LArfSjxv82K7aef2n8wCCS5NxseSmZ1oXw5VNgrZ9XDeVWKB4yJNSuxrt6MRoVqsEQGLACeb",
  "key2": "43jr6QgN9FRixbix4XtBHpHHNYmZh7x99eRxRGZxUwLsJWMhTrPjVt2euLshVa3g472vLNej5aZPRK8kZL1ZbWCf",
  "key3": "5EajhECvFHHr7YvBdvWVnWvw2qCazuifSQ75dY3ZyzDeps2Ri59Lzhs7HsbvCdEQfM3qUod33J4i7Z47o3YjZTDC",
  "key4": "2SBHGDbkFzdYKzbsRC5zeLLWfGM8rjsfrNNcDmYVcLmnNGPJZnAS4Tf44ze7FgjoaUXvLbBkp3Tq9DaiYgP5mUz5",
  "key5": "2K6Nu26R1Y7SkywT3wKNuPyQzaE528nHYpEZxj3JgKc61nEopPDLrowDYqpx8opZTMRYkmrqkeHuoxHDT3VbrXFh",
  "key6": "4cmNHgzad6fGtrkFd3cBwysgBmBMrSTJpozCt7izJmWi2STvSxvuTVkZ7p8XAfrkR4WhoXhxTNAiWpccYWyQ7rs4",
  "key7": "2PLJ9YovSPkR1odLzCCfBqoVMJ3kuanwwpgtKyeDdGp5TWyyfYhcRzRbVoJUbfEpfm8xZvy6PV6ztU15ruoPfbH5",
  "key8": "3HBu8MmxCVEQPsQqN34oU8B92YPMrFmHxdxMfV6uqrJ3GCHWroi152ZkvN32rrPB3GLUirCtQxb7knShXWSMmaUN",
  "key9": "5DiWK6T7FXQuxc89ztK4dLrvmQiRvZMZrWratHDKySUVdWubyiVyN622nYexeSE5oK5jQ1PiPMY4VojnKuvpTzc2",
  "key10": "61V5YDhSHaWLNUWzyWszKXx7AHpoERP49YoNPRbkq6qFzkhEEjB7XxZe3GUE37hinbnN9qNsAwprT7umoCjxd4Tj",
  "key11": "4ABNMonfGnD3353pnDnUtZEU59aAB7rjW9Fy5nrsTGS1UpgUYjUAQCycDsYhVTSo9132TWnxk3SfBYmpPPkJZd7h",
  "key12": "2mC1ryw98YGAmWvB1HUQ3Zjn7TwtxKtgXiLznrZuSDMgT5kPUuHG4uEDbQ6HG42R32vBSW5JK8fSihPb1PXS9bmc",
  "key13": "4KKT6QcNkACJ8rXtttQ24Yy5GFMXYpTKZsTeTaEahqQgPAVs79LokoaJ975yJVqE9xtpW4ULsnqndJLGtQUSZu6u",
  "key14": "66dNGFGPY5LQEdmH7dpzs92ejgr1U1vW8wWxcWJ9NXiUb51yXxve9x1fBzn5LxtyoUGVSYuriDWiBtjdoo96KasM",
  "key15": "4tfSZoK2ZquRvHYKEJaQnESZS3E8NMtjWEweNMMcympWDb36q5HrHXqoRZn2k1dfjsGQ5VLSFe3LaCCkiWQhSiuY",
  "key16": "Z4VPUJ4vnz2Tf76zcfomczB3s29FjvJBZGpqR3Nnv1YiD6m2XnC6tV6Er4UpAZPMWN64XZfrpmJzb5qKV1a34GK",
  "key17": "5fS6Ssc6dBjdJ6ekkWdhdfohjTME4WZRWWcJFWcUh4xFN7fd7srRCwsP1URUDRxEVwRaLCS3e4Tkny6bV21GsyE5",
  "key18": "3fJ4TBWet4k9EMLM1tDxrX9qcMVbcx7ZEM7V2a7sukNvBRM749QZEeWXRMEspcTTMAVVK4vLUAS6XsuX28MoGuFA",
  "key19": "5uAZHVhPUoxqqcse8rUqM6DRuUTmykhSGJc6jGiYyYK4toKK6YrGAmEFRLStUB57pfK2AkWN9M6YmjEca33qQo82",
  "key20": "2siMPsJC3AHJ4RwEuubhW4MF2Ydo8713N8uD3d5Vnwap827KD9eYeniAXJMQBov1C2hPfX9CKbU5bB5P5424LeHU",
  "key21": "4FE6whMoNjXTnz3wroHmnB8BwkH8fCWGnFakyHBW8o6wpDdbsgLqMvCSLU9uAYob65rTgRME1nYD6UEbdrNoWq6t",
  "key22": "23Cdx9PooPCpAxJQf8u2HQiDNxyqkQA1mWPNsHioBXdvNnEsURVJcx9yzUeodeynpEbS9RYZgDj8no2VCrSZcHFv",
  "key23": "62zcJBYDYZ1YoP6tLfs1oiywK4bR6g9StqMtwc84siTCt2Jq6DkFy74HuPj1bVnt1XX6jn3YPbMFh2xvf8j8V8RY",
  "key24": "2LajQaZ7CarYWuETUmn949k7tW6XrQVnyiGr4sFFwZ95bFDHv7yHjtobraAsUbtiEnrrzkxXYdA22KorHfB7QZ84",
  "key25": "2VWZwZwoe5roJ7T4FX3PsSHN7qxAHFBvAs3kZyjZn7xyWBp5DPRMPjj1iPaz86ifxpHF6qdKyTUfMN6kNHLxdfRi",
  "key26": "zWeVDPGH9MAkPKSjyc2Aq4krAEsj5z6VtaCW9ZxySiqFxxJQPaBZDQhuWuPpTECgJZCrzV4B19Ej5uLoR4jG6Xo",
  "key27": "4CGyFBV6WWqqzmw2N1i39Bf822Wi27MtSUFpQcNosALyjmBV6jnWNo28xKe9dtcxix8JgjuZL1qCMyMmxczzcn9e",
  "key28": "2HSxmZJjfbVC21bJSTnNSzh3yJ44jgsLLzAMRc4qZHAp4ZRvor1cTqw8vPqHexhLbXA6MgR29zs6xgakL5QiPsRe",
  "key29": "3PrmaQdAMjkyFQxrfswEGc6o9jwaVwtBpSqPEgkCAygNZ4Lanf8JMzgf1gWYa56B55quFh7JuxbjwJUngCP6k1YH",
  "key30": "5sMJJTqLP2N4am5j3mvX4FAYfsVM5taS4UWgVbY2AQ2mm9WRgpQcynY2omRDHTZ5pFySqJUScDcYbKCDjTSwrfZy",
  "key31": "4EKA1hhnBH7STXtdN3wVz8cQcvrEiEMWHgegQ2BkK8gGCQBCu6LKUCvdA5v2hRqx7j362Nr41EC6S9gN5j9ZL5JY",
  "key32": "2dAxHPhgqwZKThfpwLKWvxoNkb1z3L33hBQfFsVBrDdvTMHGEns3c36uEaZXxdBBrVhzXvWdBAbmgmzawKkpJ4qn",
  "key33": "53sQhN6SVNohJWutLUeNfdre7S6yYS2jurPHv9FVvjSegZWeKxu9a5dRUfFY71QeWt95LNme8nm6hoedh32UHHfS",
  "key34": "2Sv7EBSuHhdNSHNdK9DwneKM6zh9uethfLi8VWiL7GaFFjf5tjGvXuVWvcbra99E56ky6PUAdDnbF8TsHR3kWttH",
  "key35": "417EQTQDhXrTHq8ooMqLUy8rH4SM9f8J5LjZSBSgYkdwXnFzKATqREhhPMTYNfPRk2Xv12BDZbFM86ZXPbAvwHS5",
  "key36": "2yaWbqT7mXKdi6nAib6jTB4Kb6WbyvHUJ3PmDHxJBRuVZujQyYA5721zTqhEb2vbBKLHFhHyM3DqGtoPY4fY6dPV",
  "key37": "2314XmpyiwrQbtR4dszYCd555VMejCX13u6HWEvF244siS17J2wH18wAYKM9bzjHW2efzY526JYhWw6xUk6gGaHQ",
  "key38": "3Bh3FgfHjrveruW3WUegHwe2XDV4UPSrUyak1TJFFs9ZsFph2vWEH7sMYebUVU2mgKkFwqq5ytxpXrMpMWgvyr8q",
  "key39": "5xbEa9Vn5vF6ASnyGhJEkKsKdWQGD87SgyX3uhiHANYnKpYzf5HGWr4fh9KhqVwfMXPsjWmycxtKViRezPYrgrCM",
  "key40": "2B1orb6D4ssjZemraZvEBwEnLCXtpyHCBcXAbnzkUp4frHbdTNNnkH4LfNRNtVoWW71j2KxvDcmgEFmwchHwhhys",
  "key41": "3K2NS72dU9s7riSDbLyB294KVY6YiMRGC8t2iCZwUhhCEcUnqw4acVnRaCkt3si4y6NvA2Jquntq2AMEkfrU1a1Y"
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
