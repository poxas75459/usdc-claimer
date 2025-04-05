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
    "344L5MshBrQmk6PB1UPLerXcFyrtDEzBZWZgCycfTTeHBm26iby4hXph2umX8NwCKbGPdeg7fC7r2SKXxLV2LooX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LyQTsXkEk4uqobda3Zkyz5mHusNN6S2GUF6AFTX3JtWFd2Q78CzFKphCnw87RodfFywCU36SqXarTXGnC9JWUFz",
  "key1": "4mcN89SZz6kqd7d2w5gZ8pHeotK9ZqXdf8VHT6WYEfcuGVYyTmwuSXTNK3QcrgrWxqxhZDQKLWviVoPLvKL3dBMB",
  "key2": "4V416ywCygTcC5VYGzTxhrAP5QA3Kx3CHRW5wejGGxjsjpqH89cZ4QW9E2x9JMBK9V8nbKr3mszz5fUegPX39Qw2",
  "key3": "3r69eA6ZBG9oChr6xdz8cPRVgGJnRjwLEmyLvdgyeDFVAGkg3xuaw9R5ACFX7A3bR9z8L8zQMxhBueEPL7Lkbm2D",
  "key4": "5J16261LvBsV3CJviCLK9Lh35oVRpCp3Nx7dD6u58GvyAFJQDeGqoieQKMzFaQSxinRfjkPzDVqoFnm3MSX3cdfP",
  "key5": "5YwpUb1hTKdaLgiC5TM1HLcBz73oUzpUJFo5fH2nXb8vTTtbUiAAjFwVXLFAzk1DdBSq5etP86oZYLmsnHWMtSAb",
  "key6": "1H33SKJ8CRwJ76fknhthAcPY8YnP6mvuCPbwjCxnAvJmSzuxNDh34AGc54RkCgG77LwsLArRLBH6WVm8NEapkXL",
  "key7": "5WTQc9oKHcDsTy18Sf85sjhPbAo9rbXt9fr7oPwiKjxisLmGiGytNZ3iFHTBMPAoFg1NzLBnQjfpc7vfE18UcjdQ",
  "key8": "5p1tvgGKiHDt1R5cy51GDd4AWY38gtPD8JosdBkp2pxzmgyRqzg849UpmGE2SSk38yRNRw4HJyn16ZTiNRN4eW4V",
  "key9": "wcHFgtPdBrCeuGtpFipkYvjX4PTNhdMf6WsZfTtU7nTR4kF6AFsemZJyEjWbfMpGtAq3wRZmbW3ZLSy8MNpt4fQ",
  "key10": "2jTMFgy4sLkaQyLj9tJ4QR1PbdEs54nrhAjjySbT7qddymL4nzPKz4wzrUrXkiceF8UjuVvzb4933jnNG2iAxYH1",
  "key11": "2CnNmZLQ4cYiLjJLSVuqoA9BdfWxsQYjNE7Ukvq5G4SJjknHMWAAmp95sKdTiZU9dmyscg145BaqVBZcx1Dv4kxE",
  "key12": "39vqvMJ8kqidYtfXSUKjBDrq41Eu7jVTKYsHThpzubf3yKrBeGa9LerKuxdnvATU847HbbaJ1Vq4hmAKftVa4sy3",
  "key13": "MUbyQgBmigR1GzRv5QE3YLeWHE1frUHjvdP6A8fuRNt3eTv11iSK8RS3jbigTSAYCEAXRHRfyboyzREG2c48Lub",
  "key14": "4M4F4rmVA2WrgFaPkVt7nauCHxtMjZKKqkbkEJbfdpjQ29WpMML2MCMc87kHAyefqu1XbUHejg41qFxb8AvyLZQt",
  "key15": "5ZtFyQyXeaSojCBjUU6mcimcxwxJgBg1CPWiSimbq7LHgjvQjcomE2kZoFKKQRNGwsKY99dARpF5vUhhnR45zmNk",
  "key16": "2swHcU2ttbpi1XnyQV2K57fzNbUhj2p3jvC7ZL9sHtqt8W4e1WytPAYBPL8qracCYh9DEeHx1MihA5Xhhbk1xn7E",
  "key17": "4oXXUMHNRs3Zd5WhP3Z34zc8fh4ny5QbZFygZ4ph1KXi5dGWZ1teUEBw78duCaxUfGuLdr3pMyMjndwFpgfL4cR5",
  "key18": "2toaxpQgLBLcz764x4Vc7acgiaLwPY4BhHr1zRFQnGLjmtpohU488Jf57vX2dTscLJFctDvSMKr5z11gJRD4Gxoy",
  "key19": "34EhGktJvW8HHhjVb4tBjud4oGa4JzUjfZNnwF4C6T3533ELSyTR4k3vixJHeiUtfxXd3pETUgrLTakovStx2rAY",
  "key20": "3YRGTrJXGhApQkowbp4pXzNk6wSUhSAvTEF9uPaScr8sFnJqxWYQxXn9dYDXCB5HejjVWSDRGd1NYhbjhXw2un6Y",
  "key21": "4wuTNvKNdE1wD2i3RteNSCtAKa8a3uGFU9Es9eD2UnTUXmdwiZxgesTQS7hcR6fCGZ6F9n1572TL6UXU8m44B9pM",
  "key22": "4hqKW3Tg6eP2CJHS5m6u62L7BM1gVpwoHeBPEkSueqGG47VTMhV16QaK1yKzDBdG6c7mda1jJu5fD74fRvRLFQCN",
  "key23": "2LKiinMBEYuXQeoaLdcBMMRZv5L6EP6vJvYtG31S4HDNkhfzvXR7c9YTScEj1NPFpwUcehd6m4jwRupQ3d9Bi3Cr",
  "key24": "3Qrr1zRGUWitZ5jkc4bdx4RgTPH1JRsTB3Pm4ogCZdvpbjxuZLCKE7PD54gfNHYkigDEW7verGvh9cUhGQVPyGgS",
  "key25": "1djZWEneojkkUj5S19JFavZcA78NhVjLrLXZQ32cnAJcYXUuRdGLmHoVQTKWhWcvCaeQZgsPbZpjoXmT9W7rCXe",
  "key26": "2dcmSzkoZm99f4Qsawny87cLAteccgMEBEf7c1MyfSiKZT82S4XmyZhyVbsKhMiqq583AsoEsWc4rWVDw5S9HRz1",
  "key27": "2mZ5xERuiT9xEPr5Nqbkky4HcPsUTfWDFrFkCmddSd66nHHvMmm9H9pNx3BBDHAd2ceyjKYtfw8CcZVzsaPCg2N1",
  "key28": "Ws5g9UumiVQELrwgeKGujAQXkbA6cWAf4BcGox6J38BqLw2EatixmcxXPXxHQYCuu24kLpWtqoCACZvkA7XNvTX",
  "key29": "2cQCCeTRTff3ZAEe2Z6h9MYUSeGCJZpt5J56mNs28wrqNt3JD4mK8k323Bm8mU6EMZeHwfdHHSxLmNX9W44HSzf5",
  "key30": "4MGpYm9cYYJavmp8W5dcTFKHq3vfL75twfG2ALN51jNYJgQjdZ1Baa8USNATzKiyot2m7hhGqYjJioLS9S9ZJQQb",
  "key31": "uKa2ZwmFjuDrce5zURNhdRHVXXpL1G6Z4aaqYCxUnqpYc2ynDrhFMAzJhYXDtxubSaCfugLnm6SyNbaYoQoadNY",
  "key32": "3AYY7dfQHsCLLLo5hj5AgtGxxDGtZqFZ8oXetR3WXrqMfG7xc4DRKP6pS539EJgTB6x1yrp3VgEgzFehRCQ8psSU",
  "key33": "n2LXh1QPjsaRWsbgyxsjjYznuX2hSvyJ19YzcYSeHtKhNm2dLU5hqkVmAXBxSgLeQiAeaxtLYZhtF8L82KghAPb",
  "key34": "4j67gsEk1CjY5bB3W3B4GpS3Bnu6i2niRgYddSGmVuw9BkyrrEYRoty7BLZWWFwemRqhEWWanYMLHToa2Seqgf78",
  "key35": "twFKrWgYq5ivH1nagrQKDapNS7fA3UShfFcaxTNWHp6myRKhTJiVcvTTLAL5WRB13mwuA2CSKoyf9TjVGvAgPhN",
  "key36": "2HSNkeuebJjqR36qG5uTQ8ux7XQeWo68XpwMB7MYvcpGgDoJvs5Mfr4ECr5TVisYmvbcPdJXX4damRSxc73NwwWC",
  "key37": "2xoU65GkzHWoQDLdb2tSMX5mSoX4eYNWgvUrQB8EACQV8u8saCb3bdgoaEoZWxBAa5QzuyRbFrS1BPg298EJxLv2",
  "key38": "E77LnGThoeQCoJvi6xTVD5WYZbUoKmqithfJktwsYd378Gwjnz2iXXSCRkTLPANMX9R3QXnHQPgnXRUMjT26ZoW",
  "key39": "32GUN73bvjgkvN5waodai2NmtoxDM8VFh8vf4hv8mMCPMxzXx71wGgcBWDcUm8tLchxVrMW1EvDq6WYggvLjTokQ",
  "key40": "2rn3MjzHrSrZmzfEMd4k4x6Pi22NeMdw6ftKwDt6u951rPP1H5ZMpnFUwaxzSrxYTH26FHt2sCCtKfMk6YxXZ7JN",
  "key41": "4TzqTa3F7RazgXydRV74kRgbA3PzFNJ3qZyy2vVTtYnLK6WEQp7aVpMt9RxnyZZDrFzyS9mBPGUM6ERLPE3gwxCb",
  "key42": "fKQB11aYSSLVQr52X4mZmYyKavbqgMTmzFTtBwYyWFMUSWaUKbkw9KQQTDKqiCK3XxqP3SUd78t26G6PkcxsJfw"
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
