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
    "36XHZ6UYuLTACzae2pdwduZRMXZ3PyvBztKBn6JMjy83X7CKLC5XdctoTCN3GJ6i4GxSPkgp4N6DdY7SUdXGToRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fwX6gEdnjLVwYSigxN3zy8vHqfYAzWD8tm1uNofHhBhjivYutiXZAtAfwx8Gv9hm7Q3eRGw66t63DMfcvyQYtRP",
  "key1": "5DPPoWU53zy2GjHFCKCYE7NSZ8TE7bKAbUVN7N55NPHdxwds9GpUZdBAzj5QdcsV7K3etvE1dRFbCiNM3XbHGGMx",
  "key2": "2DgyqrX7MQDBnC5vsriYyGZFppvRcGh7p6CeEQ3vMmcM2SCLRc2oLHFxySNEkSDe5P77RP32ktiPH8zu4Y5yZYvA",
  "key3": "4vnGoNN7gSNMBcgHuALqUzLmsKNun5ynXxNDydigFVrTB8Zr93qVUAkwmYonLgc2HSQP76Q9ESwrezqtFFeDz5Jd",
  "key4": "4xZyMLzbuTJzWtN1KZZrCaYzPR7hjANXquFxDwgm5vKNVG7BXcG7zLgEsDuJpVkZMtd17E7pmVBozmSdN3KyCdiX",
  "key5": "3Ksxnmf8mhE49PM7UL1GR97AfKfkPb3WBdGN8MT96cUz5CwrYQtMtqsXSWvApiB6B734xJP1pPaussinYLXRYccJ",
  "key6": "59S2WtMUvVP88vHi43QKykGw8dPq3MHntfNkhBDV8ANSMMrizzXfASUBSPrqDufgshUvPN2jkBU3MbYquXufgZpw",
  "key7": "5o2GU12K5y4YGmeqYr35JE2C2hm96kyt8f8YZFbkY5hgv4N6eJBXxM8j4dpLQPJfeJ1tNb4M5GJshuUVZGuYGdwJ",
  "key8": "274bb63S3Ajxfqxp4wgP3APFS2aRK3Dv7CeUA7dMykgfE19V1vxVTLjMwGRjsgf785DXYe4f7sR2Q92ZzstSgvNK",
  "key9": "44VYGpdCpAE9Vf4k8h8rY8VvPpHoBezpXtyXn71JgkEyJrQd5yzyFuo9E2bfmBhyR9J3W269m6MRLwFxvjdsTG7f",
  "key10": "3HSNbE6DoZe9p5ZP9KQKFE17yr6BeinDwGmFYSVog2NEwqz1W3xG8ihKVK59BoMuCpoxpRmCpJMXAvTSCSB8mK8o",
  "key11": "Mq238ftrPBFNbmG7dShLiQDHRcRyM8eyDK4sSSW1NvQQ9758xtcGR54G7MAzRV83bhMYN1ok6FPRnSfUZ7rsoXd",
  "key12": "3eeW8XcPnZ5WBmJhdoBvsUkyq6rydMoNhBSWbzdtwRHzDXnoz1YzLEzf26qnt6bTZYjQAwWuw3iaemZnEbXmRRqB",
  "key13": "3TEKJY4GCi61Kcz6gNFnV7F9QudaXWuzy1kqiEr39BMM9ctcE5jzbF3kmx3mvtC3gwo1J9xVdV5R1VsrHXptVyFN",
  "key14": "ZHrA4Gcxth5DWPojFyaKTSTX4i8apvHkBwZFuEuhBBV39nkEWFrUm25e3wXdd5upxpgTmQAMjUA4mH9WhLfVG7b",
  "key15": "3WUYLcBtthb3qJDRCxEUQUsMLjpiyN7ZPG3K7PQ6cgdp3j2vfzKxwbHKaQUk1LDFtCiDPZJbdL17gRAzmrHUhg5d",
  "key16": "5NF1FGFBJT48eM79VFL5SyKBNZrZ7TNFfUNud8w6R9kv5HAz5iUJ2rJ8BDdKSrQqTWtZZVV7LznW7XRkXULMbBFH",
  "key17": "2TdYVP75VbUv4Jky9SqCv13Fv53KSacqnnASh7FwipS8yFDhdVw2PoQiDokvrFfY2BSSup5z86fjKaY1NhB1FiKL",
  "key18": "64vU7SP2Proioi8wmz7eCPkyWoLoCXqaYMfvT13qFCuMmwvCHa2gw79bGQoXKHQWwnqZBwmNp7Zduyo1pnHE5LYa",
  "key19": "55ZY5Hmrf2FVjm4qnEhKDDFUXGsH7Z8e7aygYUNBhPrGVHwsciq94Kz4uQh7JzE5UsqnmBUYKRrbSSmV4HukgLBs",
  "key20": "4aPKcyN2PkzbQNxcVmZPJP9tK9gEqPaEjRz6oPU8tVEca7qcaWBRJszfhEk14cUsqKD8KX9bEqMAfRsyStgmvE1M",
  "key21": "AQAaMKpLnvoytVT6ELNZ1G4NSTzZ3owyp2KpJZGqh2HzXkvmXorP3t8oKNWunVpWHxmc2JA5d1weMGsfWjH7bSA",
  "key22": "4iAincJ29R6HCbAoEGT79qZRXFQABy6v9uVbmCSUSzUpMPnPtb6n4ppFTrN6G6CGesfsMPd7WQLbe7cBiNvZy4qt",
  "key23": "5p5QBgSxUz6c6wT3rMmkgzpVd9mMN2Qi4AtrnagRVBUfgxeVqR1zER5qw48JpDjYJzD4QazSSpWgZ2y6HWhyRAgg",
  "key24": "3F2R5jSpVG3qVHgpvzwEzvhtjgbijt6Uyb9UcDnWQv8pBQMK9hzfiqwzDcvGopyWVihzt6bSKwbJuHuHzc2NULxT",
  "key25": "4BryB77Yac6tHoDNMk19Jz6MCkLL6TtC8Wuw2NEpmwFLxbNSQGX9R57c3pARoLkyAs42DhSnv3GNE29CuHt7q7Xh",
  "key26": "3Duzf6h7eSzDpSVtC4rZsmRzf72yJ3pDvCFfnu6KyN9C3suN5vq4Mo4o6pmEVYFyjx3NzUfH5q1nsRtRMWm1PBnG",
  "key27": "2GCbd17L2jxNADHah6PWFwuki9MeF15qeqEsESF5kejsw7Xniyj9HaW4tRM8CH178Xj7spNCHsMf76SqJiqqXE16",
  "key28": "4ZDtqALgF6cMEXPUbiZcTWWUXriUSGEQCZZf9FQx3FSKfBTAErDJktKV6yRUd9mpGu6DdHduzLysorKTPpuHVUi6",
  "key29": "3MAPBGfGmj8vpPC2u2bLfVe4qiCjbqTvSqjdBLVbQtxJxcesLh2GGWXM7o2JhsknrQN5wmu5qaEqHn7WRK8RqQ7R",
  "key30": "2q4ZNrxuxAAC5E5ERHuYbJQCKgo2RxupcNBkHdDypYbtp5LV4jkTwC4jhyfEhPbX9HGCYTUM6zD117ZziGnpJGRx",
  "key31": "5E7wfBiYcW5AqufwL2GGiuMLFMcTWttJek7UaetwCVzf2JANeUsUhUK6n78b3A1aqiTvy3miUjUXG2QDVenpcige",
  "key32": "3HA3DmqxL9od3ZDfa7KooBJrbmEJ8w5QUWAhbJgd3Z4nCQ5u3NvgmH1XRmAjGP5Se6taYA3h4PPA1HUrMW4X8osE",
  "key33": "4NbuurmvYXHWYpSyECwZQoMwZurskywwea387uc2YU1bFREXz3ikeKGpu4cXp8Ji8RSLoU5DeR1hxjkWj82aasKQ",
  "key34": "ZYCnfMiRAVMWUQfvcgsZ1Xxeio5pzdByhPe8Ez5avYqsvLcVitQZbwJsL4ERrut2FwibLRinUUDC9VzPJYVAHDk",
  "key35": "2GAaQDeineMf4sNRkM6nKBViELoAMnsjsbdBgQ1gTtNHiNMMHAvwcW3fdkBWwX7gdCDXa2CfYcqvAezXyq7niEmT",
  "key36": "28sbRRQDJsVLVsuMrshfhE66JTZXLkkRy2bsW9YJtDraKW8rCSPadBZSMdTbnTJH3uCQVi4jEWFZYZydUPFAGirM",
  "key37": "3MMjdxD82EH3zhNCKBoamA5xTX5xiFNCa4x7dcpJTPGoK1gwiQJx8Frxxk5gSjP9zbTWJm9AHBefuJ8qifMLEVe",
  "key38": "38KTWouA6w3YwCokgQEocwAdbV24nzYtnF3TBtvnmiEhkfx1WRC69TGm7vTEtfjNtb9FQLhMgwCsPYmTB3yP7ZP8",
  "key39": "4NDkNEqa92VSNK95NiJzh2pRoiiqawfDZ72LGVnS9pcwirH9Hwt3U93fkZW952JbTCGPvj36z9RouFRkxUrXsYta",
  "key40": "2MMvK7NVpAkNEiRbiV8f1Y5tn2JchhCULsnrZKAW8gbB5dpkc7cXwsi7E3NMg68cFhHX5gJiXVexa4MtqWEw2LX8",
  "key41": "2zKRxfZNECvmhkHnpSP3yiAztdccuCs1XP9P67H1gLdzVZpuoYieqQX8CeLyAd8zcULb2Upxxo93WRr1hUSSL8rf",
  "key42": "3CcJeyymcBVRi1xVA4ob6CPVQzE5npKtiFzgT1MqF4AyzSnekoawifJayezYPPfYRhFQVhtjTYuYFQCSBdvuT8gd",
  "key43": "BF4N2oVn18BrhV8PGAc9uswhzyhVKNbwDrNnkbEAEchqjRNm2F62qBRewYJkJcjHZEd74dcE2xoQgrdijTs1kcS",
  "key44": "3NxJsyVbiFaziLmtgrgMLbfo78htHpV3WaTBmPXVATPLz8Q88o7ChVKsSGr1ZRV7EoHPmvkc66bbzc2yY6TRhfPr",
  "key45": "4wKkZHXLTTW6TSaYvtFUFBacjsuxxQHhHJHbJFAbNdnkuXKaE1qXqeqA7gRS831t8x2cSYTs7TG3BwgN3ccntmZr",
  "key46": "234BJ3JcvMT2Lw1mMiJVkXYqwuHWKb2x2W4H25qkhnTYacfrX6az4ZtB3Y5miTBYaYYPqmDwYuP4qx2EjkC8wuXd",
  "key47": "23FhBobXXdzrerAoNV7BJ5EeZKmc42buEnqzXyxv4SevHDWqwhKcZsHq915WAt57NUMYWrEPuFg1hYgZtsHsNPEm",
  "key48": "2tUH6DhHd94qTxFo7yRRmWsA9ENCi6C1575Tap9b3Q8R5ZQMYA2vF21qcMDDqHAWVnZZ1pTCf8viJyfUPSzudZoL",
  "key49": "5hFeqqdszqiDwn48BSvUwBFuxY4A8YsnRtd8skRiaFZwjQJwFMmwZsjpDvbwFM4JRQLhLs5AQHeFNRvjPvVPSogr"
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
