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
    "GUnS1XbWqNZgwj2f9QT2SKC4dP75vQurUgSy7HqoGaQXAdXW8ZDKBYR6QCFkzjYPcy8fgjoVW1Hs51SPnTePMLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nyzUCTMcF3XFeP7bchdYSu9j76nEnP4gzuAUEfHJA7eTqznT1vY3RifTEsjFPnghNt6VAwKb9o32hq5p9vhJUc4",
  "key1": "2cY1G9zGXZRHpGhSu8mKAUQ5YgoEqXtEcBo8ZQXqwXezQSatggurpBTpPzjQkBXhPFaoC3JmSWpn51kMubwWk2e",
  "key2": "4UHWBKqtmEzZCw6Hhy6HZz4WBobYXsS3g7FPQv8SApJCNeoMZq5SqbMirYDob2spyZByNMEKH8k9Zz5dCNuuq3He",
  "key3": "3SAbRkpBJLdqZHAvKKP3Vi8ddoxdYzA4pSH2wF8DaVZjqPieP5GekEdk3nqaKgfNMvrxPMixKJX3RQWSe8nmKNVA",
  "key4": "p6TP9YeXGfWTJsLLtFEWkVweYKDMcy1UFQ71CR483cnWDVSVQFMLGEd4tifnQuZkYQ99GmWNM73jUnp786mYps6",
  "key5": "5P5DmESWdsCmoLsvSsTyr1EjTACvf9ig6GuzeTggpJ6EzMLoTgHDcWnzCAAdcdRxojw6sFdUaT4vYQaLjZTfBoWS",
  "key6": "3mT2FrTG1haTX45mmKgSh6q3uWJrr8a7ZCyuNVdczJDptKzepNipKELhYXebELLa87PttwFe7mpyS3bJ1Cd6kTpx",
  "key7": "HXYLFph7rFn5p4mqVeEN2dkJxj3HUFwaxzipCsjb5F3vSVU182BE2qaVsBLvbsMPMLkf32H6Ysnjn74Y1YgrD1L",
  "key8": "5h31XsEMAEckJdPjLS2um5dK8gwUN9MyG1esd1MyRRXkGNuFic1Z4amYytHpy3PxFx2PuicrtsAkLWUP1ArPfEwe",
  "key9": "3gFugsn2ybDbZpiWhPjwFwhbSvLMFE4YGuu8ZyrF8QAwm9reFHZvLtYfQxwqd1xqm5RtSnxKQNcSLtWR2Wx8VFLg",
  "key10": "3ABzTYWAARN6J3upLCDwczRy71bSVWT2MD3rN7KTCjk3df8ForD89hQDhtxEZn7TA1J43zcCQ35D2mXdsbL1eX17",
  "key11": "3NyhBHtdWLtiLuWCzaGYBbnaiA51LNRCiFCvwmKiu3NGVywYA4PB6jHNcCGn3LSK6BboVP5ndJBSEXWpALKph5Nd",
  "key12": "S8AnwWodT5eX4UK9rzESTerJu1XRy9VW4y86gxFCeTkBg7yNTCPdTr8TAQtMGeCVCVtZ3DR8gGSyrYN4my8gf98",
  "key13": "2qoTGG89XwAXuNHBV4FWkiJqmYbevgkL4m2BbLCKnEzF3PmVWU4A2SUKcJWPKdBTNUxWeQVxxx9hxNPWam9qqg2W",
  "key14": "3RkBYk4SGnKfEZqVhQxTYedjFTBkFmD8icQh5WmzKfjKJKmLMPREHN7yxXwdFdZXx5XPu5xvMAQMHAmxNakLfvhz",
  "key15": "4eetJbr9ahVoD55CNavCR4m4bkJPRGdxdUbd4BEvgGdGNFbSy3pZipoi8rr5SQN68JNf6PcuSrwtJkHHEbgsaTxj",
  "key16": "5SsmSBJHu38msEi29xVK9ZM9jqRYkf2iEoShXLoMABj6g69bjLb8jPDzXfbgysafFbJ16rcBMQTdFEUiNedc581Q",
  "key17": "2LuhoBHPeWE3oq2Xtqed2J1GPuU7eHGCDNejo3Ge8VzuD66QMnuucv3gneR9oL2yrni4Pq1SiFgm1pJtRag522wY",
  "key18": "4LuauPizQYErWNj7YQbkMFzr7RoJegBM7LSux4Yfs4abD83RsbtGz3yB37zQNgqnWPZgTgG6mY4bdcpQrzxCrAce",
  "key19": "2eai2UBUNDocamxJ3ev1fcj2Gh9Vg1yRJ5q6zvUiGPZEmPLxCcPkpdm1FHguax5VF4nPyY8FpDp55M2g47ypC6mg",
  "key20": "4yVjQkFADmeevtKvxyQJDygFSHky4e456RSAWkTPpfNSiAv7Jax11Jx37SRvjHB2ECWcXMVqGyHJbP3MiaK4YcZX",
  "key21": "5piktTW3YXrNTYBAPwr1LYnbbLwgTZvHhrmWPozKz7n7J5QqkXsHKjnBjmz3XFu76mQk86c7M8vY7ozu5WBdJzMU",
  "key22": "2YUyzJzwS9v9zdTSvrqgb7fnHU5xEcFNXD9B2Q1JfML1pngomvMX34sTFsatUYXJAR6ePFB9BzSZMSX5HQFxnBun",
  "key23": "33XuLce76DYMwjhff63BBMBpzqyjZoFx9t3tpcfLXXMdW8fAD9TcPhSA85n4uDAZ7LuRpf2wN2QJLW6uj7gfFM3e",
  "key24": "A1XpVwhajWq9ozpaBxMmy6J36SfRr3Q7kLbqqJBYuwgjaVGsmbxDkWWSVsUBm7hFMn8Dxfy3voJtRMJkGy7Xqy2",
  "key25": "2THqKTnYd7RntwhTBLzMtGY1ntYufBWS7z9rcLkjQp7rkUXC77GMxN9USq8N5PHCGTCpUgW3MqTWGtWzFxYDUgis",
  "key26": "rEvhcnZbBzvL76vDrhbWfeZEjT5F41H5LEgcVimj3ZKHSvLUf57EXJVP26qhDF9mUv4XJ4cZ6qKbsreRYAiF6EH",
  "key27": "tm6rVpafVU6jbRtS9cktn7DqTfedsXLN2yELt97DVBPHWBjQfXi8mT3yewYyfPcLtthSx5xTCcRbNAiZ4fKs9Gc",
  "key28": "46nDZWCVboRM1d4k4o1KgY2ZzQrFfnp1rFWBbYhqq8FLVzsUcqgQyrnTyE7DsAjNZ8XoXSJTi727hHyWyVTLKun3",
  "key29": "4ShrhKiEQgf8rt2qSMK6yefdMfXpnTWp1M5LKPSg8eefVCVFupnuJxrQmCiWgd3Kvg9NKBgaUgghebSbBzStmamA",
  "key30": "5CbUL6sYkPoYkNGotrmGQDf4n5bA7zmEvAvbQJB1HBPQnYdcePdEToTrG7GcWGvCRsKrUq9NA8oQkZyYwduRJQf5",
  "key31": "4RWVSsRtq3fYPyzbfuXqcefdaB5R17t5rj4hjqPffNdRKyphXrogcAZVEwW2xb1QgNEuZr1vRb7iv2BCdE5esGb4",
  "key32": "5nEUu1vZDuttQbBFeAfKe3q2kqtWeiRDoYgCamVupffkKK9RmFDFTDJACf14m1jic9eiAxbiXGH2n1m5ygKsGm6r",
  "key33": "5j88Pn3a8H2EZi4oQ6Sv67ocmoKLrrQwFmUnvfDrG5xzQmAj42VZXuSAg4EtdTFXBfPCy7GkFNMMi5BSf7LhzD3m",
  "key34": "38eHj2R1Y7PdZviHn5Ue2NjZQ7MvoeiE3NNu69EK8TG4qKmZMvbAJzhYWm4AukSuPmQxTo2gMa4W8aS3accdKCh3",
  "key35": "2Rh5T7eQ2nSZ7mVqLLYVqvhadUfQZxh4ahFH5GZdXsmewnerXqwy6neheP46NmJdUyVd2RDBNLhmZP5jkTAUifxK",
  "key36": "3HYLiq8aodgYN5Lb1dqoc8UDXRv6dNNwtzwfz58wWkVxcrrzfJ7piZBpJRqzZJPUx5mExNgAFPBAKxP2MhX88hKF",
  "key37": "5G2NNFFhbgSqA4J7eGw47Cwsf2sEFrtp8LS9VBi7G8X4933P6hqsRYrvFEuaioeXRdM6oFYZLuSb2ycGZE9w3V9n",
  "key38": "2cksrN9tyr3rd2QWkEG2g826RQiz7qpJL4TfvnHUmDeJV1efJFvFBhk6ytGkAQA1qyc42TFRXMJtko4gMCpy4MBa",
  "key39": "ije4ewisp1SgAfcgs5nc5862qna4C3jgtJ8EQoDHM3KmWQbH1uzdUPLQWFipYiZHebxJSkXVvPYjMWLDuRrWj7P",
  "key40": "4dyLMgegQfDmwmvVNAZzCwT1HCHSmLRwYwNBTEnuFBQ6E8WXPKTdBmAfEkq2vixWM9PZHjNeksD75huq7fV3FUBi",
  "key41": "64LLVXa9wMUG8Y6HcCEvBqT66QoYaiXfVUruCtHchmBDgFgpMxRiKcmWPTLSBnHtuzvDgj53TKHMfzRcP5TFWbHD"
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
