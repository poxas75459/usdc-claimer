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
    "5XhxEYXnmmgQvg8im2Dnr9VqBZuzkCLrwetPPJuXr3XV32nxfeS8MkJFnhjkqzxdTdDcnZZcueQiTdjKqWeLKkvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HfxBnXu7KUaHY615bq1XYR3FAyoVi1hF34zCiM121drtW75GVFFwQgaKpChuFAkY661atcWEQjnHA3P3fpti8ht",
  "key1": "3w4erQZrK8QhmCvjv8qSrRy9HSteot1nNjR1TP6UjwR4GrHy2r4WKE1FE2C9wnrsPC3TMiRcTXf1uWq8kCSqUx3u",
  "key2": "25BiiRABHmkqUdq2jKXmLbv3WcTZYCFGFTmWCfXVQWdEiMkn9RqPQAocdDuw74ddhVDZy9kSCUXVtttCSTcF8gyx",
  "key3": "28adedwoTyrKJxAF6zYZVp8ypg2d1F6PQRgV9cGrfVaBPRyVYFhD4QBEGn5piSsKAQ9GaoMXdF4699XHaoFv3JJ1",
  "key4": "5SjX4yfoxd5MPP8T1tzeLZ82vbiC2utXBSVkNH6EvHV5LS41BzmtPwkeydZpgYFGYaq1NWKztYbDqdZGb7KStjKa",
  "key5": "3CyEMuSCEEUu6rGki9GGG5YCtotAAr7VG69BkBE1sdanZ29pMdvrVtELwKPEUE9FsHhkop6pn3SQMnir9PrVRdtT",
  "key6": "5225eJkhFoiyiYHFabngTro6p6fBTxpCP82xwZmAxYtnhCXzucchh3nx1dzU2GKHYbd36HhmRXfa6vtXD24cbfnP",
  "key7": "3bAR5m1MzufVJRioeyVeYKxs6nYELokCLG9Cr5DeFfsrAGZ28LtnXUmfE8o8UzLypD77PF6RFWXgTbaRcrNRWx9p",
  "key8": "39Lw2NTe8pFpHZvXXfoNkhjnZeDfVXyTayj4CpkxTA3UGN3hhCT32Lq3NYhnoZ8F2HJLaYckAM5C4A2t3D78P1Ld",
  "key9": "2ojhGsnnkywhvAtZk7kNWFCYoJCQdULRHuCPxo8dfVYGvnFmms4ECF3vZaDP4fLiyDsR2YVeDCnD6vvACpMFy9dN",
  "key10": "vzxuN2TYdByzkHf5EaJuMaBi7Fqybf4Lz2uAVTW2XtBF7tXMejVG94cPJvdtdEovSZXKLAH2WTXPL6xxyVSk1QN",
  "key11": "54zGdKWW1yi6NVj8vBjex323A5FrHuxFMJDYzjGi3xYoLntX9B1cuziNhz3xdy2oLzF3DmvPLdr8i5k3V9u7jfmC",
  "key12": "M3DjfaC5rEUtD7X7R2CouEeWSd1QVvg6M1Rpu4R7XnvUweVgx5bNmvrMmKUY6Y22duwGj1dvqU4D6KBfSqoSXRW",
  "key13": "3dhUvy39B8Ysy8FtB5xJThAGZtK4f3pVs5BKUR15dP6tx5aFBKuyzHo5D2EgiQsDZezmqMMV3yTRhq98q9g9tSLj",
  "key14": "2nvPi7ePCVqmwykvFF8DMU3rkCBKQhNSUrLbCsPfaKMqqevgdfwFNkrRq8Ndf2GbXE2BeqZoxjiwNMrD5ZbRbEJc",
  "key15": "4SqTYTLXVQqmkiqwoUq5ztRqbktn6j5MzHRfFBZ5nRHCigx3kijhaSqTLkTkzMRKp93XF2f5vQKh4M2g2K6UzFs",
  "key16": "5F2mdncFh5TeLhNRqyBX2v12VmgF4jxzEcy5YWaVbfiBVg9SE8xPDsEuyk5hNCxM5LobDRX7osX46v7fuPWU2549",
  "key17": "5WryEz3cxZf3RxmSDaHUWKHGULMuo6ZT6siqUP776jCWYjQMnXdaWqFYV6v7rAmzrAs47momi2jkumDC9wDhknEB",
  "key18": "5FYp9TCt935sUPhmw3t8hLfBwwKuXaibxF1TeLUcZRBNFxkSCDEaUp9FpxgnJLe1LmxEFdrR5Dir5MQ4scrU4m6o",
  "key19": "2JfVvvHkG3z6JDsjhdBEVFLHwbB4vt7wFGEAdCMGtNSCZSxLcvwEYed91t8uqYs3u8bE23YGYSmYLK55xrZaDwTa",
  "key20": "cQRDWMVKGjgYfWaQQLnuiGxqrx3K57NXrq5n82WYU7YQ3JK5m2vMVMcvVkU9mTrxTtNvfEEJYRENAvYxAKDRzMw",
  "key21": "3r61RSkB1rceRDpVphS4dAV6PaHD8FZbLAr1yTr1SCCGxZ9GvxvqUnAoPXjv2nEKV7KS5oEgLquFGN9hjZFFmzg7",
  "key22": "2NtpqbvQRpeXox8zvCszV6cPDW73LPr9H1kisQqQP4g6wqGvhWCdUp8RWsuZ99TY5U5geTNMxME6tCWYbvqYDxuq",
  "key23": "35EF8fzfQUD3y84gBTU8riA1AhhRBMAM6fuTqFJ6JLP8PxvzRJprHXu1ajpN6YTQjwRrceZCxRZuA9hGx14Mjdoj",
  "key24": "42YMJKE5YkoxJdm1KoLQhA5JdooXEGayKYeCTVqrPpcE7uVqTAJ5sgNoGduorKFSfJMQH25iUnGLy8h7jnXMP9W7",
  "key25": "2uFY81W1PnE4yQeemW4VuESmYYuJwy2sv7YSrxznfk81ph7JYZEcwNJ6umdGsdGCEuTnk5wcx6Ac2DRoHiK6GLrz",
  "key26": "3tG8SXdtRAnvDo1YUatmbBCgZnNV5Sv7dqCgzmJxfxstXKa1JzB4RoUeK7rK71F32UyKyYyTurkMQdfFfHurcugg",
  "key27": "3a4ZCvT7um86smheTDnTFzwcg4FdgmgQ9mhFoeGTMo3U4yMpVYbidrtmKVEVnZWWyGhvSRWSEDsUjoZmXnNWYmRV",
  "key28": "xmPLEezBZLPBeBF3FTMoYbaarC1pBddzefztyeALfuuNEZh2b5dFFLeSGzw2RjxTmQPztPhQ3TUjhqo6r27PfqT",
  "key29": "4oz6FfBDDcyQW2ws9wDMnMVicapuaH9hBQX6fh7WfjnqNAJ6sdRWaewrzpVQzuHxS75qmC8zK45Ycsy7S8hJNDUa",
  "key30": "5vXRKezve46ypxSG6MxgiTm1Pkczu63iqSQuTtecDchq9fMSkJfkaWjvdR4RtekKzEdnqkcNQbTBsGUmHpigipi9",
  "key31": "518hUfpw1sMRLQBB8zDSkEaC74uLqDnk5QXsFzouWrNDpYx2nuBEJNXL3n2najzjzt1GnqdwnyXQewyZsoCBiJGL",
  "key32": "L5HCThzZAoVy6t4J2qxrs3YYR49Z9Ymq8NSJHDxr8LWcYnzpcxhpJBn5TsYYJNk3n95YoJ1q9TgN2GF4mcddAiA",
  "key33": "5tXbdauFgvERJAZVSTUEHmPBhFjwbdXtasZL3rrcogk9TeGP7CAcieCYfr79Zg4mB2xn5jdwQeJgutf355DepoBY",
  "key34": "AwgTmUsHyBV1uTG6rNZTVhmH2z7ZdppdyVp6T1NZQ8amN56ukY6KfFYW8H2QAWo8rzJZbv2DGDYd6g4FMCZP5Pg",
  "key35": "39z8npuPxuPAeDacfvGZHitvXCjsCQUNG6rkNYnnG3nwKGKwhsFTrAR1xGr2UgF7KopVTm6dcguvbmfyMndbD3ax",
  "key36": "2Kc3hhsbc8ZQcyToaiBpf6NXp5c5jikRQrtnimPppC1nHchq31LWt6wdHnL1NTpDZeGTDQWSyXp2kuWRZNRv9hER",
  "key37": "4nCoNZ5CkaD6V3Reaj7AyvWmDfbD4go9WGuifwHQikmH8DNVbD2GkGBLTg1BtbjfVWqsF6fWjibF8oi1JJQdjRzV",
  "key38": "CZoQyNNUDjvySG4K4WQjYJJ1Wuiv2hMKPgQQMMTv5riZ4XLrZE5YBKFj7ZEmdq6mP5GmnNvRx1wJrF8YRaEnZ7R",
  "key39": "3ZTRCBxymssgfdXseoWf59GV8qsBHnUUEde3ihRn3TYHYYnBwq3NjHMvweNHUZSykLH8Btf77Zst21mSV4M5JnTY",
  "key40": "2Fxrr32HyGcwytw179fLaFRTtqPXh86MGpzS5criA5s2eevdxxTapPUTY3qbAuiEXdhQWz14FmCEPsF12UCLbgav",
  "key41": "3PH8oJg38LMmqDW9jzwkDbVhJ2mf5rcHrCfvo1Q3uUwHoshniguzTr5KAFPnZka3CG3P7PDVguBqexpEUWGWUzzq",
  "key42": "2GdqDmBVYGcgVc3EN8tGD3MHX814z8nF8cUQTwKtnUXhHQE98d2KDXWLuue5Pf4iYjDvNkb3xgF4NbrjNcptfh1J",
  "key43": "4HC6yu1JMwkeDC3b3zadHe7keSEVLJcJytJ8HbNqXUFfrBn6SbGzRxZDbAEiVmaZfXweYwHrU7UzYLiJn6nUi3jG",
  "key44": "5u1d67aJuNf9ejtNNoX64BHU3B27pW7X1ts1y7zaR3XXwErdBsWtKWz5ffkb3BhwYJdfVECxVktXDJX16oNmBpUQ"
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
