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
    "3xsPrWZzHE5X9EVKoryH6BdbWoJYjhNj1EnEKpYsg2ZB1Epd36X5YrPYPnm1KewMGamwHiHxZoYTKZTk4RUEUohd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WVCVfXkwZMiVRxmxffqKUynL8C2PrrgTs5eZygBkhtuJmTDij4ZXNkMq1qWxUhsYyJZuBmJb6FxAeLyth7SKzBb",
  "key1": "K3hGpSJn5AFUh8E4nzLJbWdrEDcZUf7A5nG38GWyUwX4eciP4gwdfYUChNk7PLd997yxCbGCrwwH1VgJ5tVDyWS",
  "key2": "2MV2wU1dSHP7T2FvjgQbsGRStZTz1RtWLUSjeQZtobr59AGj5eTX4fqD1rqtUTMaXYJQoxk6UaP4MmfLhu7M9K49",
  "key3": "3aav2rDupJtSCRWQcq1j47wgw8emG78jb4tHzLL5cf1FVDGgXQYVhPUTJBKLsEPpwMQsHF4SfeebvqJBmmBD5VuS",
  "key4": "2PNMRRNeTNEu4stVhWryufZNrqGPVHgKeCkA7vkYr6ndq45QWENUQFAYfrBNbAELgww74qU8CJnJeSScXQNFL8RN",
  "key5": "4kmnXBiFEvugyB9Vs4cfK6TQFBG8auA9XtJT6sBGyaM3iok88FtXPqpbTp1oAcUML3bVSRGnYH34dM78gDpctv1q",
  "key6": "2tF1ht8Vc9FgxYMRKavq7ekYCEkWu51Zpddqync2tGYWyiadkv43WokrCTQDBekYjKLnUYLFBfonHEvbkdyCbaEZ",
  "key7": "63PBUT7zsG8W68CE8YKfJTqAtXMnT1TDtp356eD3wHyCYHTsCehVtvxhdDiXm1XHzH7Zws1Q7F3z2dF5kUMW68EA",
  "key8": "2fmagkhbpaEtbtXL934cYzWfvy6dN9Kz44R9fjar3SQkW1ZuWSTPBrecjX9vNE5oY3aiEG1C2UXDJyLirdkuwi5Z",
  "key9": "6534jkaTWsrCjEuNPyE8niyYowv8aV9Js4RwLeJCqkBbt3Jz6Nf6Pj1WEGzandb9nJiY8xAtSMemznxpxMQkRukg",
  "key10": "5Lc2CWzLasmBnSR2mwy9PX6S3nbQt8fiu8iq65nh4CYX7Z9mZfKFDsQjJ4XdgcdwaLjhw7FTzT7pXv73CB1FtW2i",
  "key11": "3nBythqUrFCinHhqDjGTLV1YZPpiiMicZH4NBGd5JhYi9NryPJPoy6M1aSYYaU9t1yT3JRNLoKZ36jzEzEiAaEma",
  "key12": "5TaR89eAFdRNQ9qNF9JU8H2ZGKUMN3P3msdufBuASCcZeqtYH9XpXjXjJhWyEpxqkdC7JKvcsyDwT3pfReSLxZt5",
  "key13": "4vAH1awivNhgd1xDyB9XvPtDkD7qMFWaGSenoPkpPjtZ8zHm6j5zV8fZK1TynwfUfuMqdvTD2Kc5rfvq22senayP",
  "key14": "ogJkEkWUWxQLPbnvQHVajWyL1iJ17JLkDcYA5tu4aoNVKoeeuZNw2EzaXRqcukCgKdgzqvbVui6tsFvQfMYtorC",
  "key15": "Ciyg7crVYj7JAFxXrqPELMxRiKfJGF1xqz7xZUtreshJjv8wX6v6j7qVFGoYkJgrbnTBajfKQuQ3m6r7xLwxYDR",
  "key16": "3fZ8x4xLu7c13iFzWR1CzezhRKp51VK6Bvt97WyYPsaxVXoHyyZ2Ae7spj6R7D6rFrs5FCJEjq7Rc6D3x5Ux12xL",
  "key17": "52HJV6UQVmmVAhugn2yKGcyvEMTA2gvBW9B3J12Hvr9HaEaGvUTuWZZZkjuTiuA1qNaJBEtciqpSEQiQqd1R1c3q",
  "key18": "8AP31WXgHxcVFmjZjaj7mpKAtHJ5znezeD5PcRGvRQpYwyiKcGX8LGRTyVBEJmzycQWCSaHi4pAppJBPjfdQQar",
  "key19": "2Zq11CGytfvjUKtLVaCjvufnKdLF3nBcBPyx2DCT6CWEbM4ZLz5RhqupPPaNpTLimuyHBxZhG2PUEZYMwYso4hiG",
  "key20": "4ijZaa9JcBZGrQ8YXbJgou73nfHEs8foKkKJGvu8RHP9DpsVvd21mPiNpJEJJFuKyUU989VMj9aFgDB52Sf7RNrk",
  "key21": "2ZQtik1q1PnU6W6SNV58Jpcp6uBfdimJnmrLYsDjZ1tnNxXXD3vZUGRRbvvaP6fhaf3aAgtAYQ2CiVY5uuFLJHwC",
  "key22": "5rmPA7D8Fp17HcS3315cSE3HDde39woaM8uEQ5fxRihEGjdKJghqgxfFuhzF4y6wCeLF8yUA3Cd35vJyNnWMXHEi",
  "key23": "2fdH71hPrMnG4PEfipofgzRU5eiCQw9izUibWmfYgCZawov7zQiMwvU355rmf1hg4G6CuGxNv2uK5VsoEUuvCiuk",
  "key24": "2P1QxHtbbPZWpR1X1arkGMfH6v2KDiakSMcTg46cPjEonLTpNnnSr2oSQCW7hR2GCaezYRCWZC4mdnGfGP1EhapL",
  "key25": "6H4Bx3YtXgf1UHoiw89NXHKwQdMoM1zWjDMqabS85GsGASSU99zfWEeeYZinUSGccNs1i1mfJQQ9NAVJeEvwiK5",
  "key26": "3955i35xrBAdMzVDTmVRvc99WddfZUDDrPw2ETmGh5rMTA1pnW66HudptmebtmazYFLMBoxAHrPvzymtLAREgHKc",
  "key27": "5pjvWv8FtxL1vFQqf7oN2GdXDs5m7JNyBbsPkuBW97XznnZJwN9qbewUXRturcAGg8nx6C9H5bmd6YbbJ3t2WynC",
  "key28": "5UUv2UsqhxbXioKuxzvx6WXvx5TPd7AG8tUv36xDLoBq8TTk47nzeejnxvdwEbuvAF2Nj4pEzfUxdTX1f3q4jFhW",
  "key29": "5PLHByxuAou63uCEBmHG8gmBDRF3kwoTQRa9n4z8R6AA5xisUajGgJCRnoFAzL7uX8E5xr1BAy1SeDJcGBnFvy5G",
  "key30": "5xAJBtcJHmafqJV8BTE6F9RZEpWTN1K1pobbQLPyNDvTRCLVEJGGoKn2CosEjAt1fMM6vfZ6zW53e5r7owRLHqPZ",
  "key31": "67aDs9Ytq6QZYKuuExuxRPLBJc6zmtMkD65A1jFfG89F98BVXYiK6GCVPtqRH92Ph57qhBM6SjmJYBPCJ5ZKWz84",
  "key32": "vJYvCynocNiyFStnvTGPBPb6ymv3VD3WW2gfAVYBiqMUxPhSum2eFTxKG3FDf5yVs1MqrFeB95SXVXtD8Q1tx5g",
  "key33": "WMwwJnyHRxURfEDFEGzQY6Y1Su42raqyXuvagtovD6JbcgupSAv7r3q5wTsPDECPGT3FZSr7LwvqMy5YVBU2doV",
  "key34": "4YaLbuGuxYK3Hdeee8EtBXbHqeo5qYQij7MdVW49X4bsSeiPdemtwwRhFoMNz8N8AfS5Ai4LZW1NhzWYputfBuyM",
  "key35": "2mzi5ttVGCZq99vHCT4XMnefLE9GG15QVax8t73hmEZFQyEsminQ7kfMeGFLvRrhbDFryeadFquLSo2gvY2nqPmD",
  "key36": "58897QHV14qsCauhKEjMqjT8Q1Wduh5xpwc3id3VZfg18EP6fNEatfj2BMqaGuAnXqC6yCBdh2DBC9hUjdeDzKQG",
  "key37": "3YJthj3T32uBhLFqrxeXcPFxaKZF1bh45yFXGdbW3wTJ5xqYBy58hhYoTiMiFCErh5gwkPyLpienEpSVeJv3JDma",
  "key38": "4pgHpcTLv8iYgDwxSC5mJ2f5UDneBuARSRzPYdMB46uUdD2fpCFnqZNt6S4v9wT698tSJVxk2Dc6EvL8Nqm4URwg",
  "key39": "5XGTqY7JqFQs1QhRQ5gqBWj5B8jhkwVptQwzGnaKG6G8Tftc9MFP6sa2bHKRurqE5WhNdwYmiBvqgvD94DThuH8c",
  "key40": "3tcNNfbnLb9526qVfnNCRVVwViNhNV1HJF3jTJSHTiVdW4u5B9oaoksUdh7oKYcPVvUxZR6cebdkHLveabupLXL2",
  "key41": "3STSX4f83dRd95erodeePbx4zHqTyvKrKJGCqfTTm8g2H3yVzJAiK4ouzKVAFsm8iCAokwg34pjNwAstWGDdo4LJ",
  "key42": "5dfmjkLhuhcFMc3j7vKXiM85WFJe5ZkTgT45yxDtTQoJqewPD1uSqivCf4MGXP5Nmc7fGPcSekvzW4niQ6NJhQR6",
  "key43": "5kzWYDmdkt4PRUeKoJF3k4C71bFSV1Fm1Tbx2B5AtECaLAKmzebvneZSciVhcuAp6FPTH5oKGCMVZJwyUP1W4WJg",
  "key44": "4WhPmVoP1my5dkjPkfxjAsQffpV61ceJ8YW4E8Ci6c6EyEBvAnZLTks2JaAG3MtyARSB14AexiUuZscWaYf4RZzD",
  "key45": "233tqSe8VVTvU2LmLi54bJ5hY4xGMyuWnKsikZm4GNdUdeK9hJDZBVJ2tiAjbxCtN2XoQEh1gm47fjojsEA1J7Du",
  "key46": "2dqPK7k1wpQhyMFGQ7gEeCEYstwAB8hssLXxivPpNjnyWSzbA2jV5LZGRQiZps3cX7qKYm9duSdi29oxqHYkUFmM",
  "key47": "3sPfsEras2GyVZW6JPjWjDTfZLyAnvHxRu18bdLqGZTjQTf6XeUDYWh1GG9r5gvsdV8jmG33XnYmG1k7DrEh4Joj",
  "key48": "4YAHfYdCGQTQBFZDoMK5Fma9UbXjwMtjCsnsnGXjjwhnjZFn1GM1JVmnykhJWExmG5AFtCbnx5uiUHQpezjQbcuA",
  "key49": "Bit1cTPbuw6NWvFB5cLHPBXYhZVJjs2M3yZWjAGJwdMvhVhyhdh5WDrUPU4M5KGTWRFTB2CBvSJCCw2dxdT9cUs"
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
