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
    "52YAqzxXoYQvYamkZGBG15wkLr71NY3SDrM8mE4kP6PsDzUWDAjQLoVLQvuyEsVSadH48CvYkMWk1wD6HXC4pauW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUcmfJo4QADe3JYaK5tyXqTFWgQHQswBdsZ8CT3yqPXE5gbMceJr51DLz5PT7wqRucgFdJaVvDwYmo2oMwBwyur",
  "key1": "4jKw8bepnMwqgUwkncFqNXci1cKvGWwKgYiA1X5b7jfF4ER6owPH7DQgt9MwyMqsH2PjhYxGcsWcjjGHMvEe7CkR",
  "key2": "xBhrbrCfXJihdSJb8HMLX2Rwaak8gXGYc7btc2SypNbx8N8FsgMDEAA335yB4bdiHBYRS6H4rVp4FUapKfvW1jz",
  "key3": "PmH8kFVZRMsSYPAiJAyZ8kKFqcM32L1h8LBM81PFhMNtPUwao4XVHRs5gHK5bEm23LTZ8zCkbDTqa4Fuou74GW9",
  "key4": "5MVsmmQvdzZvrUmCPrZ4AsAHUeSeEGZcvncZwMVKTJJv24pJiygR3hyt7GjJDymx8cGUXXeDJCbH5krup75pkRog",
  "key5": "FqULUc2UYkA94vW9c3S3nJKqMWTh8nqkKAveXbi8tNWPrAxCcrozd5oVXLLKakR41FtEVru2huma2W3oBuUMevW",
  "key6": "3kRhXDkVDgo8YoLkaC9oMLigBmism6MajhuXzDNbXq9PUR4vDAW8t2NQ2Boh6zwGkwu57hsmsrbFECWP5hHnnbc9",
  "key7": "3n8MQX5EwpicBaPs3q6i5Maxxe3Eg3koDmXagUCh1rVfgNLTeXvBFd7gtfPkREgQ4QSa2hUazvw6BTZdXBy2SYS4",
  "key8": "45uhGN8xtxZCGyixdkS9gHsCEgyMGRyWkKjUPyNvJx48GK39sJ4WXMFwSG9xG3gL9riZRvf15Mc3SrPnnLTKBhLv",
  "key9": "5yL81zbXunpGNHBg9Wq99DPvvEZgUTWzx55LVdRZ5SxoQ6bF6eU7KNwV2eu9orcmUj6L2yCF283am471W2Lq5yG3",
  "key10": "2KJRHCa6Rn1H2WdMBJFWCrADSti9wBdSRnJbMMiakS3MXkuvsf4hxY5tzBBjtL5DFXDxmCbRy2JueRrWxr9NySap",
  "key11": "4JtM8yQP1rq7hrKw8tcKmiMSmAcuy3fuBqPMn7qfvqtz2HiX2gyDGMX5cidjQ5swiH2U8su3aF6kFNQmP2zHY8S1",
  "key12": "5EALyaVMYaV1jiM4PSRkDpRuv64EHRTqREWysMgSfcfbhvu8n5DY7QTFEsTp2ajSRPu8GpQDcw4bQNw7mMSKeNYE",
  "key13": "WZJmGxpEpEnhm4qGJi67DdtaVRv3C44sU5UsAChuPZdfQpYFkNyy75HXjyXnzangvxr8iPkAgNBVbUHfMonuLPu",
  "key14": "3xCdriYrZNmq49dCMfVfuntr5hLK3JcVTvGZjffJxazj8VPFBNe46D9CRJ1k59zuTgvvzg1fPuoGcxw2Tk756Gzv",
  "key15": "4tMzrs9Pkd7VGnxG3WPb6sYjgc4Q8qEaLvZSJMtzFL6z2vGW96W6EsxtKU21Hg3W7S9kUyJCdUBMdnkVA5ydExZK",
  "key16": "3AiGZbPbGzzd5LyXtDQWTcrvyk4P6CJ4ZkofMTQHwJGbGC1A4HADYHVWkVA6HAfw2UQHAXqWZSwRqvjnRe8g7742",
  "key17": "5N8MXiPaNfTmwugUWTGmEskAs63BdsYeBMc7PH6oDKS24beEQzvaiju2AEuMqYNGq7afxxwtEYVeMGHLFpXEhDMu",
  "key18": "5LUGszVaPSoN7P5KwbTSpnfokZus4V8Dc89bDbCQ35wVcxLzCkmDtaiJQS851kszjwzLDTKKEo23vovqqS84gNkZ",
  "key19": "Y214fnfb8M2qBrn8VKaHLt3gfisAmebVqcjbDtRWb2BEEF7o1ZxeoEuydEAzy88dQY6VvEvUaz1nfGgeD4BMNN8",
  "key20": "2EpYvPY5BjRFitmu7GL4RHi9VBRgozDgihSvswaB98NNRp2LmxLQtffQbePNJpKwDbBgDkGttuCMHqqsf6Dm6FWX",
  "key21": "5vm7h2JApbyaL3udEneJNMqJF64yuUUUYpkuT3Nt51QYtJA7tiVXBeZ4uG1CYdjMqD4nov5qZD8JDh2wUSJME9Ca",
  "key22": "2sX8A6JHqiek8GBKMH38bpKAKjSsT7L2EG3FzvLzmGdoongEqTeChuv5c8pitjLBbtPiT95rqbKPzgnh56DZ5pdX",
  "key23": "2kfDqE1Eu7nR3TbFHdAX5ZdNN1G8wcGLkvuNscg76o4JyFqLs4DMLrVBnsjqrLGrKkCLeG9KjZKS2HUiXX15TJ9w",
  "key24": "455NgUWEJi3Tb3aEdc6UA4QMwZbPKb5MXhoEr6wpZgkvrNvRo6SDoyR38XPGJ5FY5WsjQs631vQdLo3he57bL1G3",
  "key25": "2wF3Kx16CLtYusanH38z8hVPhvEesXLR15F9oYvbpuwSB6aZ1p4Q3zC7hZrGWmMjm1JHCqqTN5MFDY4d6jXHCcwC",
  "key26": "5bbm9ddhDYfgB421UGEuCv51wcD8u1Cek5GSCDnbWgnc7CM9oKcn33pchCH1gmEwbsNnhFZYha4wX2Me6oZaWShP",
  "key27": "Wz8t6NLqavXHwiQ3L3ntNyGNTceZjufvrE7J1kViopyKFXgfy9e7ZrvY45iAnR8xsNa6TzFChVPVfuG6wC4dVEW",
  "key28": "2VTbk4HZeEFsbZ1e47v2uhfTyFMUSmGFVGBuGn3hKfHoRDtjxntsTmUhNuQrexNU3LCPQGqbV6b5BNs6tHA5tky7",
  "key29": "5uwehiFbpZ8LrECHC2xTxLVm49CHixUofQQzxQGWagoGxFNXWbwiCccvuS6LFnqZ9pu2tGi74UXVYyQ4iDw2fnSM",
  "key30": "321mmsRsvco87YeuwViEczou9PxuzySbMPtP1J7JTQhYKXFPZY3zy9hYFB6uZ3T4cA14fTLE8Y7p9qEGmmn68RG2",
  "key31": "45nubcngy4nXcMAxnmfVTRNPouLtgq2r54DWUGKQEf27JDizudwxD4hzvBBsQnu1oKGiDtbaggd3tJ437xgiuRaP",
  "key32": "4zYB3styB2jeV8mYXA6ghVN7xJSijSGzJw7adv7Q1y2qk6sHVSN9jN4eVJLeyhxD1T4KaSe5qC4Fs23FKgRt21ZD",
  "key33": "4NCsGMhxnLh8U29peWEXiJ8uukj6toA2kvHvmnRcCcBhkmsYhz5mwCZgFL8748gyfaqzTnMhk9pG79VVYCQb5JZo",
  "key34": "3p8tPyAYkFXZ1HfxUuehLk6dK6pV3X4TdJzC9JQjrqVViJmTaJw7VspMqdVScs5nXpbumQWeUcY9sPxQiD348dgy",
  "key35": "mmuZzzw19cpYhfB9rmCRv9EL3FrUiyfpk5Sey9uVHGPmGxDagsWZdMUgY7n2EiRPCz4A2bMTv1w8PW6y2gDthrf",
  "key36": "4iwYhoxA1ARz8mifLi2xsFtDLGY8YUd63BV8x4mAXXGtoZCf5yHvFKBrg6uCjzChPERR9dL5XXWeqktEzhnG3MvV",
  "key37": "8y6suVNUjtLhixmhNV9GaqfzMAgvrw6DTDJihRfQ3K3XBoLBpdpJApQD1neGdFjKoJtDQDcuREdUbvRTqkqPCfp",
  "key38": "2hVwdLsjeav3U5E6ao7BF25BQeSj8Gc5MVwFAu7oDPUYSgQ4dZYD7Sw6Rzpn6mugFvumEVa9c4TuLpDVxKpBRhpF"
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
