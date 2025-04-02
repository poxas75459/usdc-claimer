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
    "48iZrY8MmR3Q92bXbPMR5xzmu9sQzFCcN6VycWRtm2La1ecQzbrE8f6mzWCE3ASw4xfZDJj91mUy9WYzM2ACWvgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jEdSondoB6LiptkBNH2oTP3NcCiMemxgfoEUDwJzeJgivZWE9z82FPvv3NhnAG7yeeCk14deCM9TRgbbryKGxi3",
  "key1": "3zQ8PsL4JfFN8hFqXPvba4ySrkHL4Ef5LTcvNKDgK5b8J98vA61sPCPv1AaV12JaQPBbSk3NkgiejyQF5mmv5ewc",
  "key2": "35zPVM4puPgMnTBH7iBKdQSkTnR4ZbAVUkRe5THQVg1Z3VJbMNgBtvunUjJFDzvgG1NGBpuFkYc6NCtc5pJjvJVP",
  "key3": "2NHahZQhQ6zAr3KeSEWdc5T6Qc2KacMRsj4S3RTFGQrRUAh2BExCRerQp8HG8ciGhAGqUVZsqGAqSv399a3dXBoF",
  "key4": "4kdbfUQiyzKF6F1M1j1Pat8Rhkis2BJdTHwvCq5agSEFetui1BnMmGgHnWcQWeJ82BeDaSF5hq4ZDyqtD3F1qcQH",
  "key5": "2xzoo3g9eDyp3XpHByeaaMj8FFLCFneZ56dU1qwdp2ydR2m8Zd3T5XivdzdSnYZ77qh4rF8MwrCfeBxq9EpTkRVZ",
  "key6": "4yqsY7RAXqiV54JdgmFtPsxMBE36zJkUs7RKmbArFJTGQQrYjFkJZSU2KBFT5fcZngCCZwvskE6aAnmRGgvwUJem",
  "key7": "2BvRGFHmetPZoPSgswZsDJmwVz12tQWAXPbNVEFBY86V7czJRikUNRokSL2cq7QbkGouKcqdj1VsUtneoNzsyykD",
  "key8": "Y8A7MyeGdBaexwbnEB3MEorGxGGinCB5NBqq3FogZM4ZyukRc1Pt9WMhgkQ8MYS7sRKLVz8a1nE13WqLLsPjLYd",
  "key9": "SDwPUpPuX1Zxbz6ZtHp7i2kTRgN5EBbbYQGxyR4a7kTyN2WX4U5X9rzxjNPAuQjgDdzoF4S8ZFdBfatiRbauB4Y",
  "key10": "2iU64sqYajLhjonWfzUxLVa5Tu6qiN6Wi5bbwPLEGytyR9mPQCpyjXb2YXtDVpzs87sWh3JtYora6Y42aLSCK95J",
  "key11": "2QCGnmf3bJx5fs6SFpNi6zgQmvy79FWWhjvFyPMLqixztoC36MxX3AM4p6AJq6vGxWyD3t5mes8bXEeXXDAGRTFx",
  "key12": "2rN1FJokEHBWHwxdRFKbUGBfhbsHUMc6gAtr9ixU1kQsRoToWUhZ7R9RcAUqAbPgu3MJVpaRjDNGzhdCeDTb19ZJ",
  "key13": "2ixy9p6Kn9C6eZAazHgRvDV2pwRUe9t16V5VY3sBhVfxmLSf8BjXpa8d2N7HqBXfPFsDD47cp2jKiswYLUmekuPK",
  "key14": "3LMcuy9DHtP7AjMDTLpUbEMuTEiX7ZM4UQo2qwNLSQcMxguNWorB63YhcsLeUo5KMyQLaZ9TJsbBfGUX3PhbquFA",
  "key15": "3yoiLTDpTs6iMZapeagwG8mn4kjCyqioBqKpFjcrcYYAageR1Xq8NZyZ7bhq1eFvurSEn2pTteJMZ36EY1454YJC",
  "key16": "64s6STDyyFbssNRJ3umM6igo7nqHk3dp4xhdhbvLxbt9zkessYCFKhyfoNEuTTsm8Su6wM3GJGaNTV28CLoKLbW6",
  "key17": "2jqwywTt89cn1RpHmf4QLKNANkHsH89skbFdFRShGeLAwygHvWqRRdL4SVBS4hccahW6QmxwnDrx4esLTfzA81Y2",
  "key18": "3FA43UqwFD8FtiQ2WcNikfpcPZTwmM9r7myw246wDJzRq58bRWjRqszs52y5rVw36Nt1ASHdMviHEhZEX3nxUaEt",
  "key19": "Wxw7BkQLtd6mjaHy1mF2rsjeiwxguzkDc7CDK9DdJDc2az1ivcrkFVWTVacQkxSo5boZdYvcXePeXYcQnskCBQJ",
  "key20": "39GQjMPVhzm1AqR8AgS8ju7YpKx1c3hjpktz1vWDczTwKU1ekVcKVtT85icYgr1BZhLAdsy5P9PuEMqDchLXZugD",
  "key21": "Qksp45YoqzdMKQzjZSirV1RJg9uvrTitz3kB6Ygvs9m2eAnyoZAQcbEwYudzsjhEA9ieFcHQGbtgS5hcjxub2rk",
  "key22": "4hYBrWx4teXB5j5iF1mjXbGEBy5ecXHNhdngw85K3CDdh6qwdNuLxEfrpSP8f87ihLoNPqchhXntQDUagsV4TKoC",
  "key23": "4jD1kyE3MwJKCF3LmXiFg2hPvJQqmE2Tmp6oepWQEKuBvbap7d2MntUpvLhqhi16QNaiUWNheQjteDRKDLZu1if9",
  "key24": "4KD4biEr54tSXCQgyM7VVB5DxEaFLmRTGPvJ8imuwBFp821cVKVqMhvokea7RgAe382Z945oFAoZQQFdxfprWt4o",
  "key25": "ZdW4HzCPneLVGcV9X2UJUcvS23xWSnhye5m5qDFQMtg25mVSeB1r3NWWkKmV1GpC9jfkZCfYEr7Qam5uuHaN6L1",
  "key26": "2Y3oj6jGQA7Rr8UqiCvsGB9TQdK8ewFvfWk3Ua11WFqdWh7vYarewYsck1FxrZNAa1qYoD6BtfuoSFwZ4HWSMznA",
  "key27": "5amCqoKhY6cpr2cKsy8j43jz4PkA8BWmUvhRZvstjHLG4wqWB7WXq173ZgwwpF1ErsxZJpK9xaNr92KFsQAGcuES",
  "key28": "5qDm39NP8BiyzX4quLdZrkbfAgWJqXF6WC38hvtKQvJ24fc8ycoNF97iL1PkmbbC113FYvhVEdWQ1qvgsJQPdN5G",
  "key29": "2NzfKB3i4uE8vgim1Yijn44bXrYu6S9dQq6PkL4tkR3UPm7sGVXCV92yh94m3PGMrv9j2mmK8isgq5ELuD5wiLYK",
  "key30": "2PAwTRDvdiXMCs9DSooE66F7jpzCwtUwCLh6HYpAB4cYaiNywRzuYCFcN2wpHg1jVUdeHfruCqrBK9tnUPd8JSV6",
  "key31": "2Mu6pR5BDKNf15Fs3CWtoNKYobJmKYNPGrgwhrt17fp5DDJApNK854YSaENm5YjvntqVbg5KagZ6GkkbJdPvDB1o",
  "key32": "2gwMcui5pBYHijPxhNiWrdnTx7zGVDKv9mAeUrYFZ1LUHfn7xw1hMURK5bygQXs8k16Q8VY6BvW3v7joLDVGAduQ",
  "key33": "3s6tMduuR7Khaa5q38bKBhA729BUhfJW7ubHtDVVvzfcKAnERRjkyFvg8Po3XgVBeLnPcYCsQQP5v5XBqw1fKvvU",
  "key34": "3ui8vuqGt814icXTHNxEvZNBbnUmqhCHZoh1Z3AX856aVBgB49dwVksnhUKJyatUg97951LXWnvXutUQh2Bzb2ro",
  "key35": "2GD3kYhSTJfc87soT64qXX1LdBSAbTNY7asztQrSoD6hBEeGQPYEqu6czdNNMUhZhyo6TZcewz8qgzdQVKMDmZyH",
  "key36": "48GviT5x9ZsXHAhA6KNP374jEmerRdhFsZskgvv9zrpD6N6idRMXCnS6S54yNSo2kPRXFgu54qbuFXJB8xJjcPYv",
  "key37": "4sq2odBuK1o9NrPqGJHJeFwUmEocba4TSQuRpq2wYaqBQmsNjbnwH8rZSDPWr3bWAYD7quFWAm7iTqw9TcUwNewV",
  "key38": "VXygD7pFc7vzhd5f6sTEGV976Zngp9praJfxZ1QjsmdmNy5cf2A2rpRKsJd8FpX71AZGUs4mDnpBixfU8d8LjwD"
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
