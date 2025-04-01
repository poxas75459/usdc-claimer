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
    "3Ryo7dwDHTCDc1hTwHJzHAoBpoBFqHfgUoMM5wdE49Z9Aonq7znb14xtVFGYACKb2U1UDgBdjYQA76Lbt3FeP2ZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cer6QjtHx3M7b3ghJy2GAuYG3ZgVPaupidJcmpaKDmJYpP9jEQv8WZzbJ4ENr7viSMd9wRpFWMcJXnGjyWpLb5c",
  "key1": "DXhaGMsKUJCByzLwc6phS976v9yd66PB57ubB2c3XrZdNBhK42FF9dN8nHLTujYN4nz3kpDPbZ5Rdc7VNckPpVZ",
  "key2": "3raut6YcCWXSe7r1WuwZAaLygomumKhB3uAYzbXoufpB5tXqw9tkdatqDuWhjyd6xssbanFLDVMXk2YvAQg5LMan",
  "key3": "ZoKaMn3VdCNWxisCFCKPKvC6fnk3QbmLZvNrsqpg4f3n37KQbCmz4Zsjpts9xnhdsGhHpGozRquJiCsP7FNddzP",
  "key4": "2ybRaDDV46oaQHY6jTCvdJonFy9psHCTy5TF76BE6T852WEuXjbRSkdrfPpe3eAjPzWZpmjzoARSxzCfdtToioV5",
  "key5": "3idy4n3o6WAV7FX4CbScFWWwrfTTVoz3dv1tGVCJFLFRvQMTikqBmuMBeyCGHPJiBktFMLT6XdeKNvx96sz8CZkt",
  "key6": "5YiGoyzcHcLsraLYU2x7KpWwmcz8cNtvCfY5uwVS6QCERHTUa3bMkcP5k78eF6i3dcefwzZrv4AYM7zUMYhHDGW9",
  "key7": "359KMyQr7X4X6xX5htiLdaUKsGD3zTqJWmfRLpsZKkbnDZuiY29xPrNKoVF1uaaHMEX2PPb5HkLut83TZ5gjVaFr",
  "key8": "5Rqe79g3Lhpu9SH7L6Bz3Lch5jGGvJLpJPXN2HyqzxcAz32geQ85jZNbvBx5YCaGoazSQEsbDV9V72eiwburu54h",
  "key9": "4n4HrARJjKQKNgMUy895gBm8MAjmUSA5hNDCzkJY9kfGJC691i4ixN4uEpfsJRQpKipyfT8u5WNWibFVT7BZTtNU",
  "key10": "436rkQv4sBg6w2KZ8HdM3UsG9HmsyjUfmFE2PpLwHNeDRKCre1geojjBMoa1kApSqy7EFYsFMPe7YX8CTyKwdRPU",
  "key11": "SzscESmjwv4FQowjXufYGNN9D2GikF8iywT6B93FnxAsTvcF6qxNnuSiTfCtm8Lf5wbDHutJU64KV71AXXcr5ed",
  "key12": "2bxtYBaP92qXUsJNqedhtG5eJEefdNSZPnxcCFGQjb2cXb5uFVj96nbD9dDzHoAVJtemAhWc46HFG3G4tVvREnBG",
  "key13": "5dz5f6fE5FN6U3v99xFLXJxWm2Fjhu7L4ScgMDqUeK8Qu2kLVJaasZwKXSp3MiPWrNCnhcmZntU3CtkHzcY7G1fX",
  "key14": "3ZysQxkzQUUnt4ycmywE1LP4cQEGYUt6Xr4foTczHxvvTNKCGmumgQmgHBBUoYkzqxTc4bYdW52hKnJqbLj6aRd8",
  "key15": "3v3y7omrYvsUgxAWkHG8GjTErq9LDV8hJC1L9uqWNzq54VszEncS3Fz5niTqnPdQ9xE4wcEqyqFHyrsK1The52dN",
  "key16": "pptzmJw24HazsQWZ44n3TDKyiUzUv9bobvkqA2fPFVU3HKK1c36FwTvfUkXp1HFcaZjJobZSzCuEJ1NgLEd2d6P",
  "key17": "2hGpERZ5ANg9AJSEb1TXrzvLBgNyaPpRZW6uQVWem1wgrEmiiKiiyhpMunKLGxSdD4idEhsKvKFWsu8ovBvXpPbe",
  "key18": "2AhLsKnjDU7M3Dsuc8pv4McVcZhAo7NHqpDWGg6GRhnR67enS97fiP7wKk8sXoRZAxaZU9A2uQzRTydSf1VU5dTo",
  "key19": "5yboACeiMT2FNcwRDYJ3wWfrVDaY9hUutW245d53DgXiN2yVCyW49k9AKpXp5H23sANvfgAN5GdUFB2wpyz64EDG",
  "key20": "59mtT9JAYEuptHHKi1vQnrELM96fSGrH8uKZCG8wg3cwmHmHEc3PrpHshdwAbHNxZuLqTq7WFjnGLDbbPA7eTQy",
  "key21": "5A1H3RRo3Ldb1MtohzD3rejjKpVHWqJaYsC32D5Wessc71aB3c8F1FEPihWg17bQ2KLTE9VWuS1bYrGhd1TDxXuG",
  "key22": "2kF9La4oDz2e2ZzhKJdkrrdNHnKXwfKxyiUaP77p3KQXa3zpojTH3AqnMij4HBg6sRdN4STEqgrXCsUXinWPVBVG",
  "key23": "4eG4CGgd3zuQV1dFp6fECzTgXDtzwLsxb2qwCFdxPDWrjQZeYqWqRYdhN1kWkmAeu219k7wGBsPD19uLwciC7QTz",
  "key24": "3BQA792hXaTwYVL4SXid23hEYV1PzAarm6XHSqoSYdZ2ZDQzVtYoigiDRivk4Vxhm5um82VBpXd62vjUjzHLjVf9",
  "key25": "38Me9kpaiSHLnEJ7z3dWMvCLPWLErPouprm8yqWvqxAaGmqNrqQ9ihb5XVu9BwGC1qfoQEEgHnMZRUZwLXcUdnMq",
  "key26": "4kkt7BKX9uxjqAvjrMFcJvmTkXucgzFtTHbFasCSAzw621EakQUC237RMXiu35MyqhcYEx98xTKRFhzt2YPyrg1g",
  "key27": "5FJDjovXGoYPSos8X5qnUjYLwCNevfmChkgdgABkmGMppAzkN3yW2eJkUS3McSptqwzc3Kz1KeQZAzgececaYZPb",
  "key28": "3KRV2DSz3GWPby9WeYQwefc7zELkFJQTvAJYqEWTHRGfJa1y6PmWpV15otw7W8NdprSv5mtRfL3uVARmxa1wSkig",
  "key29": "FBzyZNMFMnLhQ92HmGwozrJ2QZ4UyKKJcqiHSJRFpgr4LA2PYkEJkssMhwNrmoViexRLqUUidz6eV8Zn6DAD5ne",
  "key30": "469RNHNN971rE7Bz6QKLcDFU7NAKfHgDLSET4j3S4cNA9qy6BZdLsnhZBZ8cyYuHf3FeAxMFrB4vYHEpjbBSCs9v",
  "key31": "4vTUykNyykH7CERQt1APYkVqh1ba8syjkKAegwtEiwwXGhoAr82iBpKmWg6RxbqhKyC69g3bp21BnNNR48HJ6w5q",
  "key32": "2pUY2AqaeSqqLuu1R6YLDkG6fT4Mx7qMiJrvgtpkQ1K4E7KP2TfjaemWwnhP1FZgLmbnh9DfaZ4hVknuFs81eDRr",
  "key33": "2SjBgPVHL8KywcwxRGiT3B8bJ85CF9ZV4S1a8cHymvnbNDnxpCqzy5K4hfKwXT355R9XGftM7RcZbsBKfmsHweAD",
  "key34": "3sdHt3DJjz8G9zkj8D9mJWj4SmZW2LpHUKpsrY3LGebYMtKvBPjKBr4HVrgfiQrNQW6zunDDpxUahyUs5j2Rtbwg",
  "key35": "4zcFf3n2JmH5PS5YoqQFVDUZQFRJBJLUrGLo8pyFn39XutHYw8kDqMmgpSMfEeucDdeAngXE787Ng9rYhzhwLy6V",
  "key36": "5MTJNTTvmJo2dRDstmkz1J7WonqW8G8Zm8ZSutEa7MDjZFTgJ4zm9FDWsbjLEx5x29hNC9U8AwJkfg1HG23zk5C1",
  "key37": "763WbnrU9dThkeRzwyPA44Km7moemjHrs2CigpPqDizbHWocyFw865vrQe6bgiCtv7k86kgQTPtE4frcNsphAk2",
  "key38": "4p2wN9HMdAzLtrggRLD94GH1Z8f7G3AeEbwusRWnKBoGZupZaPwN5Y9SkDykVKWCQfMpUtcByG9ZSwUAJ2f33oPk",
  "key39": "5qAppLL2EM2HYnupBrCjeavzD7z73ceAd7B3YtTdpKCKj6N6QSmphjLR6evPZ1LAvMTfAwjih5vT3uuhKUKG6pY1",
  "key40": "4Vty8ZSt2J4EsxrHZNvw8Z6CRNV54DeCXjsHbDLjf8YNYuotV84mEfGcKkgBuLj2A1JZRtzeSg5UZnCmiCT54o2K",
  "key41": "2WKwR86YkpNdozxstHvbgbHF3JtPp1FNEfp7kU4UpstLxw4k2RCG4sqDswRvUMoFPA6TgpW4AC84ByE4uPmhZQD2",
  "key42": "3WdBBSHHDypGkEZtEgWhyBDsR7Ahi1u9ndt6GzV9rNFfq26ycHNsCoWRyfkkYGze3DvfpFDaZ2NuoTKavzAHCm1x"
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
