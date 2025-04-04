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
    "3Hu7GJ7Vc6FNYCJqdyyfewBz1mR8HQSUGSnKpzt9arS6FzHQCXmnFDotrxDZGLiCDfo7nPZirAikRd34FtRrsmFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RJqcRzT5ncSs8scbWHme7q6HcYa1MRgNiiRaohyMHLLdAULW9UDjwG76e2FE3bj3SDAxoff9P6U2YSNWe3TLfhk",
  "key1": "398efMdPWahwVUBpApvfLrpKcb8vyRnP6u8CbZ7KJv2xnBBeUDxoC1LKYMFr4mPKPR66rukSaPeZHPRM6CmXwaFm",
  "key2": "2rePhxhcEGjXPmJkH52U1aU23rtLvmdhsSYzzjFbAfLahdGejJgf6LMkxZZQWsEsvsWhQP4pR5af54LJ2ZecdBTW",
  "key3": "2QojdxcNHihB6Mk1rEC2tZZNCmw47jgzcygZrZciCZtEbTx2CdEdiLpvgkbTTwcm553JorNdnYLafGcTogXzkTeD",
  "key4": "59wsC7nCMLBawPp9yhyGXCfRUyzZ53AVRSkGpqZw2SDNEmapTXm93cEo1j8JYswNuq5zvkbC9c7m1SzzH5SfvQR2",
  "key5": "2oGjNuQ9iyJZY8GLyzySioWPa5gzvEAoYmX9iM2PbmemyeBsCUTgqdi9huK11xj6a3MkjkU4jUE3wyrqvPmX63Vu",
  "key6": "2hDQ4PX4TzRaY6fazBQET8WzYzxAPAKT1bsS6tw54nji7DnhmQP2suXrBgeqJNddnLTHR5CNNmnHcKtB59ToUzcd",
  "key7": "6yvdmJYkZP9nCPK3Rq2sQijuHTWMHv1Jk2TWRFAw7u4GNA2nkEXdfBCcAyjJgxtM9feqiZpb8Mc3KRrCHVYCTJK",
  "key8": "3RV38yU45hM3bvvT2B9TZYUdQfuJx5oiUK97Uw5jywziYC98DpZ9BNtKNXwyJPm3sjaUH1Tt755gZF5nARHXqXy7",
  "key9": "4FpyfTsKzovButKmcdh1JNLFY8dX1b1pjQDGCmYGFsrreSid57nrxkNtSFnSkjCiUYGMxTLBtS3BRYcQSPgbkDM8",
  "key10": "42FxzYDy1weQQVpgzMM9m85Ac5TF8UNQY3XY9zMG7PjK7UBAkEE842nJMYuMHdaxhcBwLmqy15UL3G678NxUoQMc",
  "key11": "57gZYpvT917yhZSUxB6LcdZynGf1D1Ys62jTJt7rMXHZ6oVYiV5pB38mHBC52sii8mAv7C8nvf9qVJNazan4CeaX",
  "key12": "3RrdJHSjvU1KJUim1sX8jrGJuNwyDHjC3UfCCqoL4UozXHN3nBLHquh1WyANm2ZSEPqdoxqZNEWcgqiUicSBs385",
  "key13": "3cQLbQWjQBF3k8Q159hKt8WBWbRL9a48Qtk6eALHzJnHRmKb4gdCdy3Wtj2h3466xqa6jbhcXwgfJV463ZfPXQKZ",
  "key14": "123RpKos85fTfS53Hvh3U8ZQGaYu8byjV5niTA2dzkqNi5C7WpJ6RUJZdBmsVGwXfBiR7LjJSAkQGTWcz2m2T75e",
  "key15": "jDv1SratF3A9aVt34NpHT7vstr7qdgwFSFruqBXzrhBTSyWFYMUZSymtqkmAJWFoF7aiUA9zexKwz8D4gtNrLga",
  "key16": "48hnBvBcNcZZ5XhzhJE2hqJR3VBLvPLmSCEkxyzYRNh4J4ErzCVnPhkiUeW1d6AGRtCSxfGqJnUcqb67YXvD37Ej",
  "key17": "5mi7Hxffr98pjEHjVjdNL1bCcefxuMFpJduAecnxRTTFrww8BVznkGv3NWtCpSZbhzw8i8GAiBW1HMZzWbhGXp7D",
  "key18": "45vb7cRd1DqK1wcTzWax8fsNvQFJQyNQZcxrDo68sYzGtSgFDgzjqHBeejYzJTi1KgjkDVtHRYYy6kMVi98ayivh",
  "key19": "4mupBv2Gjkr5XSocrWVVwcqdAziwohxeDU3VCGhhJ2xBLazxumxAbbpuDd16bjEuy7FLco4ieaHwEiCDDB29bJ2J",
  "key20": "5qLYyUZszKarpYLEfAgVBbEKRwnVjC3PUvr1oT87tDJKwToVcTcuMPLvJQapoB6jJF7CeGDB51BPAiFWFT2sCHiJ",
  "key21": "44Bg57TqiEZhBKascA83cNfaMeoMd4sbFG7HEQzGESLQYtDtbSpQxHes4dDXQDrJQByZxShrzPCsf7UXGEhAKEFJ",
  "key22": "5mi3Rd8eYFgrWU6dfmR61tett1QFBSdZktAjdyCmBuopu9Cdd4R14uHRED16PniR8W9GfQhbviQdrxjAxWk2WFQ3",
  "key23": "4YhfrGPJCfBmCQ3DKCxRAsUsEwofwUdhwXapN42kUwG9TCucAxtv4TZm4i9mpXKJ2vJ2HEPWS2r4EFG6M7qEGUuZ",
  "key24": "5jaiA1v7286vxHwgE1J2ke8PZAfEmNJc8HKSbaiq7HnVoTLDZF1JACSFAHD8RRpbni6D2TxMm4CSQff2srsCrbNo",
  "key25": "2iWHDyFaKUMhD8DNt2MtzL5gxujrMiVuvM2BL2xW8bWQDJir3tVBsJsDQA2618i8CyymxjY862iXLBLPxPsB8xB8",
  "key26": "5hvsxkNAP3CF9q92tzwLkJwpSqaFuxGC1n4U6tx19KCryNiZ1yL2AqAvKnFH8MQpoD4YHnY1iivVPcHLjHWmqcJ4",
  "key27": "5M4iAAawUxvBCXzturTngTbsCGxGo2zJUToJhGrRxXDCuSLfkNoM1f4eoXGJPRCJ5RoV98vgxVvpvkGauXWA6U4M",
  "key28": "2uju2LPuFm9yZX9WQJJmz94sMEZxGBjEF3KuHnimPaHiExW3JB1ZAVbCkgU98Vi8kKVHUFBbPhszJFtgw9wHfo8J",
  "key29": "4mK5McrAb46vNitUnZLoDGrAhHLnH9que3wWed5HLbVWzzcswwjMy9XiLJxXJXwF2hqDKvAJYT5WVPNmtkYWgQf",
  "key30": "4LqqvkpqN8tUwjaoXFUCqQq1NCDMJxfbTpaAYk8DaG5NSNYvRHFSekK7qnkdYGP3VsqW5MMuMszFUaMVd5iK9MPQ",
  "key31": "3gsxfwmzDH78PZjUX7pxwyMYZ7psZ566q1YjAkKoPmXSWD7sWyZr1yvi5U7i4mrWxFsxLaeSjU9krCTekayEP2TZ",
  "key32": "21hu572La9AnJ3tNmBkLjtSgtWpHsXeZ1ujTvP8qKqWiuBGfdm4u78Lt8rkYdJNxzGJtMRb8FpsbvogSTXhV74NQ",
  "key33": "4DfjF88UjpUNgheDenVExD2qyp9Zu1u4Lo3x2jPvuiEYgFazqGVEvwQHRKq4pjdgR6DktcCrUAz7geHhE45wekPo",
  "key34": "4YE83FqcSExNVPTbSPWFYrZuaEDwNsCyqadeQSTNBAtp8qW6Ri4R4riS4toZya6yZZ6eDFHKDUg2Vc1uAPPa1b37",
  "key35": "5Xe81As6ywzUjJKAdoBfdR4Qc4p4G5BvHqa5NrJ2hJENjvNo6wKwdZnZMm8BCyrv8sLVoMp8Xy8sX1vifkJVT3Hq",
  "key36": "nnB1ersFbRd3BH2bpt5ovSQWbmbzLYkSwRUAsu4AmjtH6mVi4sLbfUswWh3HdAuLVnuSu1vQmJLfmiB6ACx34az"
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
