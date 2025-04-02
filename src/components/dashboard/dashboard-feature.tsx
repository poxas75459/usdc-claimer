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
    "53BpDauYKDhyv8o7NtCvExt7UC5Mh5ufo8eevHCtXqzgL845rAuD7LHVYT1xu2orNpQoqyEGPUQ4iwskTgQqf1yF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cpit449S6xKrro3qsXULXFjWSZWs1Vf3jsrxmpYKGcASqThxakLsibJiUpxFz2grHDpiZCVUhUkxw3Qf2CDvsJe",
  "key1": "v3grVEhhaFWvBVSCSJLN8oDoMW7UFkr5j5xnr7hHTxPXxBmJcaPZ7PWKYz8PcdVhPb337nUYkctDUuskDjChQtK",
  "key2": "4SqW4ft2XvXnsYxTn4SKBpJJShoWLS54vck1Wx2MYDqZKey9YPvtcHzujXdbkpyfgNvBdhJAXXBzQFhvG6qRLCrs",
  "key3": "4SvqJMZvXiTqaxGaHytprVppoKjtZb7YBsM8wxLSpSTdctB3mLuMFYEuWQbT48hUTemn5cd3h4scB6gHPneJUa3",
  "key4": "4JZ5PyBcj3t5TniUcgEQu7Ra2GWMKMSShB6kFddnG6yaaboerKpYdgJtp52BbQz6ApmuhAqW7zVb22rxD6tWyd1i",
  "key5": "36VFcTTjy9C8YZFhyu1vGzL54Eg1mh6F2rHSJEiMN31yoQdRBxnxRZcSxLqUdYteYKc1e8C65jfyBmF8tKXtwvb7",
  "key6": "7Eja5VNjL3RUcSRfKHqinfCatPc5f3CHKaeSE1hp5mfUsJKPUkN77Vt4SNuKNmLZ5fuFaJbNeSFjMuB3XtCGgb8",
  "key7": "2qaFcmBzTbVn3U4sn1evCfK8PXRXs6oBMTYzB1WQRy5WtUKEs9dRNgpEf4SWptcdzfdgy459rzB6JvM4FLKEnXtg",
  "key8": "62HZphYWzUHzzhPCdTw7WCw74JoeqgPtRTpQAQRf6BTgobXUcGyorRbPjWD9Gnu5MJ6hJLM9Lu1u9nREBFTLu2Mt",
  "key9": "3HnEVnUhthRxEbt9qqmQr5JStnQGRZCvADVEXW2T1V6CUFQiQVk4MwVAgct16YFM7A65CAQwFGH2P5Ro6GQx1msE",
  "key10": "5DuLzabjhq6PT6mCUR4C69gWmLYmbZWWFrEznz9RBnb8svWKoZmCw7KVD8XTAbXCFLrkonFQ1WwK7BtZUMXWGUhc",
  "key11": "38dMmfsRVi4oLWiFuPDqXKFrpRJwRMBJMtZUnzCWYCnCt2s6hAWC5ekquuBuWF8T5KtzdCUXzmBWHWqQJhmgrjMD",
  "key12": "4VwXxFMNpXmfzrMxDMYoUqSQzyxjJvmxBufDNX7syjmdcriB187KgfqnYLdtiz15HdUmUHaGbf6orkALu8piDkLV",
  "key13": "2pVoGV7ZDjjUo9gQy6qiqZT67q7mwuBqWx1kURjpAs1Z3eVzbBSPYM61UhYpsWT2eRunC8dYCDjRT2cjSoQkwhvk",
  "key14": "3DBQ24KMwj8RaiUBUhMWHPrFdkJnpo4WtG4B9CCHrtb35Fby76CcKjeKcJ3hqmZQCGS7pM28fV5retVjYfnXQoYm",
  "key15": "oq7kVmcmGe8JnDME8j2wAkNRT7aXWKooiPtCH3LapkoEZu9HogZpxWcJsxZQMdwgsfZxYK4ygMUpsgDaQfS1q73",
  "key16": "4M4yxDtP6U4EK2bW5FjQNnDkbpXLojWeb2Sv92kP4MuTGM2pf5SFub7iVE48jisDV14shLStPt2x2yGrxqSmrhDw",
  "key17": "4bPdj1x53sGAeZigw7CuEcSwVyELb4Q7yktyUTgdA7epZJbdJQpspiycGe9gnFE9oDoBMczwW3QZR4zsZnH2W8tQ",
  "key18": "4WUJ6C3aZzEEPe5VXK4bNEY949Ka7884kr9MQ1y6Xs8pKueV2sNqM73bo5XQnttXAM6qKPozgGaLTeTkYfjBXiW9",
  "key19": "31jFb3p4MVyNUpDKwUYpUEoXiQafrou7ugaixPaJ5Mt9ixhgEAXPoYi1yeZkhRFu5BLMk68DYtUbeMWbtNPp3aXY",
  "key20": "5hzo5n9C13ztkvcnzopaE4iJwovo2WvsCQTJ54kyHvbfircEppztayWg4cGvdst27FExa7D6pZ1SvJfhjjuYSEj",
  "key21": "37HrVKYqqcBHGf6bvxRHJqSZ9ztSXLxTXNbKPompTHw5ifsXBKgTQqG7ova4Zv8SeTs9ipB4T89eYcCeMTJoihzy",
  "key22": "5uoRL5uQcQ6zzkTaFACpZvyUkFizp9VwHc8xCBYDFJ7vA1P3FqTEUeWjCjFmAt1v33zojnSHCSXzbG4YCT3H37T9",
  "key23": "4hBppksytCZfM4jHcPt38drq2issFsnjSjRVXrDKb1HDFLJqKD7KojUXyJHG3fqjCLVoxu8gLjVTQNd8WM1hZBVi",
  "key24": "3mqyK5ngDvFmRVSjRXQQxUbYiSvbgV9XegBn4aDoXW4egyieHdZc1CacAoxYWpkAP884y1vvgKjCz6r3aTVuvFnm",
  "key25": "2BSApn6di5jUmAAn5SqF7vtp3Q4cAWBTM76Gvhi6e3UoG64QQwpLw6T6Tjq35DsruwavkYQ3HpitexK8C22f7oWU",
  "key26": "4SdqDpGtwyVCnsYmS9DotxdrYru3mkr23pDD8nPf8ySbrtDBpHiepgnhAUwtMUHFrFh77VR9WBY13pH7SsFE1R84",
  "key27": "5rfBGqYfWcByEHrme7VSFyHZwzT9zDL9hLRCqDxUwVPjVnkJkejTh72wXwopwp7YWFBkjPJL6eZ5BYtY8obCFhmf",
  "key28": "4NgW8mWXtLB9riCTLQkdPUShkzWV3FMPUKhKQpsZArpEcsm5m5gfKRTQ1CZrEbECw7cojR4pyTsnXiSauQBq9SK4",
  "key29": "4zA3Jk5EE8rRWNpk8NHmeXjyPZwYhyH5hGRx1vk3BLFve8ct4U8wWnTmXpTfvA3DPMExg1w9jrrw4hCp31hQK2FB",
  "key30": "41kZn23oX6XRAgBeVAFQevjn8AfH7HF3BwRzzKdFPhaFck4LzbvmwaQrzx9ndrR9ZpbAzyETvfNfkWjprufffpc7",
  "key31": "52Rud34Sydj5zgMiZnzVNepn9MsdcMXZz3Vtq2CbuHBwgCBaTwKkioEh6N8Z7ToD8WgrYuZLzj6AQFA9fw3GaBdC",
  "key32": "4ZXD3cGnhpri7a6HVRD9NWEfhh6rCbpWNsa2MSrLzMbZQGW4eHw9PzQCWi7Rr9qV6KrgYjkMkoZFbQdwary3dUtQ",
  "key33": "rYQjEoqNTnwkUfrJN9QVZS3MUfTRgJyruSNVNR9XvXNEqRyYzS6com5oGvsFMSTZXxva3vQcoAybzmTZtDAMHTD",
  "key34": "5khm8PJ3o3MzhWnfbnuDmqx6hiAsaxvAJhMTBaqYkb7GzqhaBkQKiWNSSr3N9FU1NPVdp2t3Bp8U1LkaqAC8CGEm",
  "key35": "2798CJp9tTuBFNQbTTaCbAMU3fStuzg1BTpZWEJi1ax7mXtnZAVbSjHtRfErdh6PxmhHRVqJMuoVYwPheFCRhNiD",
  "key36": "4qDCCeUJwwGMudfcyATb2ehJWJry12dpw5CnTapySqsnKRAAVSP4uALRgD5qYtqmTUfYT9jWEDNyyumQUMiCZMPY",
  "key37": "5Ei3JXvJQbeM8QUwxeJncUWaZ15DMoj8VTjjScWiedg1wVEjfnhq4WE4YhjJNfpmFjKGLoCTH1rYqYb2uFHwA81h",
  "key38": "kdJMVqiLA2x1zGLxGRmer83XjhAXRWVC9bovU6jkgmXH9R8zYQcjYQnzkZzvHba8pbX8TMM8rJAZZWz2xJ8adhD",
  "key39": "45e8LeGGcQKHZP6o4qrS7f8wdmLgqgCjhzLMHJio9uNLRv1KYJtfeqAQLi9HPgJEQEQSEDhWZVpevcvxk7DryHLx",
  "key40": "5m7KTTgdPWgjCT4gzQvZsEtRLbBD9jUirLesdrNqdBBGKSCZtL7kuzXonmTfwuzELaZ6k3eYETujskBP3G1xV7iN",
  "key41": "3xWzQpswZP75kHmHkikAYQZtum7BQwHvAuQhDkdEiEB61KkzTqmcGycZdTX9kqeGz5hjjA4JpZLCnCx9sMVYHUYJ",
  "key42": "5Dfdb79ShrwCyjiE8Q1XbgpzqENbeDqHWe7A4GKSJSDAKfzvBdr9iiXRwZjUqPBGGJVAmaDbGu64jxopXCnJBZ9v",
  "key43": "5UHWTgDupx7U43EttyKNh8YkxrmW2rvoGPxUsUoAZfcMgmGkWKGanf9WSLi9RAQxmaDgzGHDYgq4m3Qb6N4FfcVC",
  "key44": "3kMWtX83N5ieT82hjNLumrL9UBTPSREHSBJKzfktpe4pmugGASLVGX2VsPg6LFzzMuKp2FWiTJxKQgeZaWtiM3SB",
  "key45": "67LXwKgkQSPQ2xjs8HG59hKhe6ZQNm6cpjgwDYhWKfuupW8yywT1zPG5vLtEBTHevgkZYdjqfmDKVCDd6dRDJQe9",
  "key46": "FsNqURnqY6A5ffTFj6YVuTprsVTcTXKH7Q4ecut7jqQxpxGx36RP5j7LMx8f8jp7RfUw3i3Fytj6zRHXEf2uCKa"
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
