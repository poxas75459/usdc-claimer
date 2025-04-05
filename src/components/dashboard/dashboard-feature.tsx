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
    "2CjxgthVatJVBh2e6fkucb8jiFtC3CHHiL1qdTsdp1vBqxggqj2VmB6jzLFqZhTEzaH5xHGWbJf2ywne8EzPzobq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k9YwQMKxGz4ZThPn7B8n31KWiX8Du8AFKKtPBTzqM779fwcdPcG7hutCwhpjmHphbszHeGV5wmL5uXVSuSShNKi",
  "key1": "4AgkAp56i2qugzoojbrxESoR5XA4W8cGWGH7c56qyd1pgJea18oR9rfTbMPk4w2BZjyjyUq8L5MxPz67y3cVHZqe",
  "key2": "fMtUvEBsnL5y2kKntBUaFuwzsG5PERmFUEjLUDEFNX6BwNk9iYidT5Zh7mzVWjtWT2XyaYJmwyb4fH3MaWbN62c",
  "key3": "4jDbvKxErt18qqu8Dbf6fRXUfqB7irZLCjYCHXstXVcCdxC1ENR46uWPXybiJRLSMQxRWSzXGT812RwRH9DX2MTD",
  "key4": "2NfZKKaJdKEb5Agp6aK3MwreS7WuRpyqkFGKuhGfj9pznFXJkQxbiQfRz7jSjLTBoE3LAYbXByEUVDnYLya8zb4f",
  "key5": "5r9b5NErXNYoQ1mmhPRos8Bcc4e7JEDRj8hiALx6uvFFJjHKgrhAsCrEnvB92xrXqaALaXAcqM9ZJtgRxb4ZN7Ug",
  "key6": "4TUqt11F5YxpkmfHoiUX8uVFYubtUE8dULntGqtFvqmewPGiHKdWAb9sYwS6E4S4oQn89A95QyMCgYxEykD3jHfu",
  "key7": "54PK2CaKMsYEMQnn4hqz6eciMjeuAz7sMDTVJTtgJRSquby7LhBhz9DR5Mb9MmF191rkwuf13o1vdYQ72x8Vpi5",
  "key8": "5spGr655Y69uxyCk6V8RcmHZ26MwcEfoJoU7tCYSuQ79mqVjXTzYYCEEsbk8V1G3Bhqof1b3CzJzrtb86SHTardz",
  "key9": "5j5HvtAxju41pBtFqR7LEgfhNsT6K6sutmwTFFjwkPBQHN5GU6ido8GxEbwfuXPFNH16ErvPu1xYdrrSM2xUyv6H",
  "key10": "25Eff25RZZ9obCyVbdNmZD5JdEjVC6sspUG8pvwSEGJMu6kvBzVtKiAigwHJdkZsAHSAxsSKTVfvioqULkWgzsuy",
  "key11": "2NLbp1dZ2jDwqFrGh1Wztr5Efjji4nHXWcZFhyR9GmpS8KLabFfUBqdHvCdk8mgKpvLgAv4fKGzdQAi4WTguYnHV",
  "key12": "T2aHo44wMi7GaBiv41gM4U9icM65ewxxkd5apmfycPJbMS17E5PKAbNPwSsiX2KoANGDE2aysR9iBpbjrPGi1Ci",
  "key13": "3Dj7mwP6EfuELg7DoyuUDFno59HXHfJBnopjtG1P653E4BuvyTSHo8NBJ8nP1jbVD4Gwmhg8Rf3p4eM58BDzgJqR",
  "key14": "2dR6uMgwst2YxwySLcDz2ZZgTT4F8NNYoMSfEXoYdWK9P6ycETRg2L5ctcAVe899YUzsuKDvaoBFh75bJiauBabH",
  "key15": "4tjEVAjbfZ6fWkcrYjxR1inzkqkubKJxGW9sFxJQW3bcdf6qzMtGpfjZW1REBkh1cFy32EQxRNyWRrBcN5iGiteY",
  "key16": "3vsQngYXwZnuK5nt9XQT8vize3VbsUzCW7yvwEnMsz4TcZk3gpqfoUUUGYbd3VMPT3EynTVt7nGN8EToZ63ZgEfF",
  "key17": "4JDJ6xtQb5dzi74BvPdxU6Yw7NDsyy12qhnAmejv7Yo5BMQuBJ62BNvNAtXqxSBpabFtEwHXdBdWt5F3tCMMWvp7",
  "key18": "5WazbHD67XwVXmkrfcMbSq1kWQZwZCpDNoPsD8Xpo1RUdsoerkqXNx9Gwu3CgWcHF3Xor4dmPuKj9k3brnMcYf5a",
  "key19": "3MtoKyEPb6TGatW3GVsE6ZkqPiST8ecj2QwDm5mPfe3L597DftXufkiimxiuq8gcU5Y5k1uGSJKGoqrLMZaATFz4",
  "key20": "2MJn2PF3y5oU23Vn45fstY9AX4YivDEr1C4EKcXZyFxzpc2ZDpCA1d28GeDMYryZPQPP3S2TXTc5JrY1DyD7mVKy",
  "key21": "gyZQiv5McrAchPtoMMeuuCvNbQUEBY4zYpKVVwQer33t6STdEk1CEtVaXqPUgZ1gdJG8kT1hnSDR57ho5bAN3gA",
  "key22": "52cJJwqRJz73HNYanPC61sMmU4F6Gv3UcVxStVjzw2GXGs49kLGNPssnoFgQFh9wW7WNQUoPsW7oyTvJSvXt1gUS",
  "key23": "4mbLSFZHAhtw3pWHgDjeWqc1kK2oFrQZaL3xEctF3MsB5pQquRVryoKm7MMCjqqfoGKczPA8ey23KkVJQQPE3VpE",
  "key24": "3sNyr9RgivMuW2LZ7vDC9fvDrGUxiMtJx3pU3gCSLZP7NE7bB1QEZP2LzFz3mPJvdVrA6m46XNdTYT8pqcGUy6fv",
  "key25": "3cdfQQUzf27JvG38VUzUyaJ8egT2VaiVVv2X4BqiQR2iMpBCerCTjbU6swujncMd3HstM3REgkbt1fyLoW6Myjjq",
  "key26": "3XwAfk4CG3TqM31wCn3jFd6vkqJ7S1H3o2qi7ysFExvqXFi9c2pMTDZYyfUUmGLaVVfFMnEkkqf6G7URzVfcK16j",
  "key27": "3r8XrWXvP2j9wAKiEgg8iz1V3iQsnS7jm7AUbyusnFmkjuMCupT9Ryyqp98mYaE1Td8NgrcpsiBfHT9T9DgYULYw",
  "key28": "4yhWxvfvvsFCYGE8PgB5PMbQWPKDP1dYkoWiCs9R1TxFxjZ6jQL9BH5uNjZaL751wuecxos5hYbQTJGn6hwATE6V",
  "key29": "4QNLqjCMuaxzbkcEJCxnoMtQfgXhVnjkmQ3sWwpGGBS9m6mQGjunDvTAzvaMxF1tZKg424HxeKnNpgV32yf8atHm",
  "key30": "3wk7Vk4RqCbxHHR4xeHWYgnELDvcQDyh1SKvur2jGPz2ZX7xdpLSegtnm13W5rrxGFfNm7yweZCrJjHhUg3HQA6J",
  "key31": "4E6DSi3B3uMRNjuXGWP56dEyBc5rg2toY4SMs3g5A9n9m5R4fAgHVjRFniS8kvSemvjqPspR1WqpSsx2ZRm1m7sN",
  "key32": "5S81RXWMKGKXqi9Nmznh9R53ncZGNUg3hvubKgTnyG3N9NRgBFK9ud6MkXAC3Puiw5Q8eJz46vxzMHhKnMKmxVZ",
  "key33": "4GFaXZwk5S2zNW8UyhqWMYSb2kVphbwutue1DjMWzEUZcXfihWuGDuWxgBXUQjbFcUGzRHyJGT9vmMU6n4tRmB9a",
  "key34": "2jNy5s4KJ4KWMgiAZo9ik6S2akndzNKBouTaMmzroAJR4V6UTdnrxrN5VdTfQxzxiWUzUHB69TiiDRLik9dbQ2i3",
  "key35": "rmi2dRXdqMMWQtBUAi2ojx4FRLLBCyc1vZqJkbCJPM64Zym7zNrbd8yD3V8NeR2vbrPKBLnrWMU9uS9YNUascSX",
  "key36": "5meuwvL8nMEEv43JjLSNVcvK1hNo3XBxSgNNaMEdZSDeRbwA7kQEv2f8HK7khsmxbWyFsEEjui9KcZzbeCrvurww",
  "key37": "62W21JNqdysY7yUR8J4A62oy7NL9FP15quRCFynZGQQuEm4TXQdki3dhDimH3FURRZwzZwk3Z2EP5bky2GpvYZqF",
  "key38": "4uX1cBkFCatLGv6BGBZczm54u86wuccg2EtRF3Wi8ixz6CtQbWMw6oSUwfWswVTTMoDfY7jzmU5FSjA3HDEsNA7n",
  "key39": "2AkWttjiRnmJGAK4ceSVjA33N46QpZ39FEVVguur2wpH5F3Ua8dL6uVrU3f2psJS2BrV124CfHczigRbkKN3FuiC",
  "key40": "3FVmUAZZ9wteTuiQB3oUJ8eKgR1F4TBJHdQaFRhS2YrdPknmdj5a9Pc5AKkdM6RRwKNs9xm7dbmTrUnn6YFPQTyY",
  "key41": "uz9G7xsGeUQqnnjHHQCjiyGwiEAQ8yk6Hyq6ugismtm433bPhdYzPgSEiNNHjGA338U6UY7gNdCg9kP2AhT8fRR",
  "key42": "MRuEy2bKyEvHAoeU8tjV8txDYBK9Q2YaFMQPiUeYZAgRJEQdtVXHQYDg7kauE6uVmQPPuzUkhAQMZuowGnPNhRA",
  "key43": "hNBU6WXEiSKRgqSZsa6Vrtsgwqk9xenfwWEt6MFEaEkzu41H2BqJ4gsFJiBicsHptdBXyF6okA7FhrRVBkz4FJ6",
  "key44": "4Bzgm82JeidjS3Ktf6bCpdS5NJyYuDa27GgVvigEQCDUPqFuU3CsdWgmcSmi5of75jsyZgP7G5xTks57VAiAVDLh",
  "key45": "3RGvRNyGzdYbgepxLs9MYgLjVqt4SR2sVvF8x1JPWTqgNrPkV9Ea6SqNLFyAwXMVSySq56LPiXhqnGcueyGZnTEv",
  "key46": "X6K84mdbjYJ6Yt8chmvk5z8QKX3Le3ZMLtp6gj8mQt9XBNacySe54XXR5HU3cRDDtpXcaPWyjH8fDSRwcswq7gk"
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
