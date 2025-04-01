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
    "4gSvH62CbxzUrxYx8U8Swr4s5B2t3L7azb4kped5BkyW5xRv7QgJsvuj4y4d7mkeFuwVTb9kth4TptvqVFyTzioV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nb6FzWJ8kdauZgaQ65kc5baqW5TmFEBU67EGbg57YkTyRJ1KkTqJiw7AJkBUyHg2vir3yQiFFMbhVSDQxe3fx3W",
  "key1": "2pVAtpVfThCeqp6HwDPQzMavH1cThhGyMjFrdkTeac1gLzcq8VJUTBxZ9idgPHDy3KeT6Ni9Rrzqypgv9f7G4Phy",
  "key2": "3e9bJsHmnSdfUwRXkLcMj84u4UFFBxGTFpFNbFtMtK9BdAPzrSnm3ByTpJbvgN4HBe2TpqB4TV6Q7MpQBNvZZqSL",
  "key3": "3dVmFotpHs5FsgMEVCKoMx9oEF2KxTW3ZCSkLVHKgS26THVZ9b8VqZDwT67hPj5kpHUZB2VGNwZVEmUQVa6pDPK2",
  "key4": "2yyB9cJ3veazwwmny4ZG2dYXTcHmJNeqkVdPuXkTW8D2uMSGuPU7qQDZGeMGSobahdgrLuu7qQGTuRKFaQFwdrpS",
  "key5": "4DL7URdtpazkGiMkFakyDNTNuRjJmPCTL6nbzqAh2CMfVm6stVDKfbaFzyXnGoRMU2PKdutUnUhZMfYqGk3Anjjf",
  "key6": "4zPASYMVe8X6iBmvhHWm1JSYawWdsU9aGkwVT7kVRLSWbKMjQ37J4SKxSg2PLKDimRcuMoFA3DZo16tjoNAMzNWG",
  "key7": "381qg7p6ijTa8tdvu1RQ3PSLqC1pBMZxzQ4N1vM5Y1ib8cvkkphaHfYzYaWk1Q9shU4YoWbjzt7KxYTMwzNyYkf1",
  "key8": "2UJtN4ZiJtvJXtCsWPhb3jHYFfY3kyM4zGNsvWhKjTme1B8i3UTY3TchEx1RTodnz7tPAtq1wCPemrJhLH8CQnk4",
  "key9": "4cDSZUydgPaCMpwSRW6UAWy1hgBP7BcYw51m7xTiPrVdrhrLgTPwcH4APCikyhZt9vKEQvW5LMX9x2wkHxtkDrXK",
  "key10": "46FYWynnLnuWwJeLUY6nSoWNLkK3MVd4ykYBNhxyn8ooVpMfGtLSp5m1kPtCnyMr7EhD58WGYsmhvZPcjSHVqhSP",
  "key11": "2TZWdZgxbAoiFDb3Hq7eZosSEh5snggCLFcGp3zADZq9E4zw1G6kKWZ6b3TAER2AzsFYwuA8JMiPEDc4Rvv6gog",
  "key12": "54DjPMv92SUk9yBqzzZeA8onaJyCckTi6sFQp4ueHmRFHMvgL6uaFo7dADDod1J6U8MzVWP3dozrBP8A5KnVc6Uq",
  "key13": "HDkg1fFVWZZWsKqovqB5ECoM7KrHqEGtkxWrwBnWPkKR7XniT6vLuKeLFKXEXN5N9f1B91jYhq8pvDRJJkEAPj4",
  "key14": "5r1Cog777G99obwAWBujASuoPdCrQZD4PrvtHdY81LJKUNEggbTdqfCBvN4cq9UrrgHtW2D5YcEvBuyiYzM4S916",
  "key15": "2uai5YS7RjcWKJT3uyipe5WKS2PhKKF1DdAdusENyJZ4etcFsHLTpVBvbV4rFuKRRFE5B4BAtqWyGzqMKAfEepKT",
  "key16": "2dkVpUjaZ4BGmHN5oL6n9mB3E9fCBR2VusyBYyGW5FJ26jgFfTf69rsPQbPitVhqC3FXrUPKcyntgzkRZBGJhwGL",
  "key17": "5cT2d8upX4XihvdzrdSb7tfEYPCnk2VanwhKdqwmv34hCaW2N3pHMQP8j7CfY8Qog9JPjgJHzwJcQD5V4p9S4CFo",
  "key18": "2NEyNdAJwjX1xGSR77MmexieZsupxhgDwVnDghfJw5xLrZmFXwNdD79E7oSZ7hAy8C2Vb8SD4a1izie69ruVngwC",
  "key19": "3DDPCtReXFyzcWDeq42cdxtPs8DGCgS2vR2tkp4SarbTAwpRrH8tj5dDAe3gzrhTD4SakyN1tDc7t468FU2QwUSU",
  "key20": "2jDsfhLH8bkX2FVoPdZ2M7HXXPUNtdDxM4yVbkDPUcbaAd5NA1JpVwM9jA9GEnDZToyVg9jUe5GiU2ADtVsgtsmE",
  "key21": "5CyeFgaNUiB9hujDdMMWkipChKZUYZVvgEZ2PUZGhcyc2UrqQj8eUZ2FmQsyW87imrUttg9jnEhb9A5WtvmFdVXN",
  "key22": "3Yhr34M9JQcCXpMcEk8JGyjrEGAX1YMqd4GAub99fF5qwzTogEUmVbqih31iwaJwScVeTQwHmgjNEYPvpRQJivZE",
  "key23": "2BZYCAojeyn9PifqnMnSHXobKnjZahc77StT9U1CEDrUQTYGReE7DNhyQupyFYNWYSxVNZe5gvUQFNYisxA3Ab2o",
  "key24": "2biXn9akWfoHbq3bb8PgguDrT232cBABka3bM8ukie9KrjkehRuwKAbGDDqxNaZAe9aaG9bJp5VaK7J39dQfkvhN",
  "key25": "5XZWsfhJGv8DTHBNzHF5N95JdTLJkxXtP34yLqJ8zxiPTYmy413qrEwQ1s69nkKuAtpLjS9fky9MeDeUehDzc5c4",
  "key26": "XeNGgnDTcC1o2iGC7231VPrw7dy4j1Vn4FU9spDNntFsZo1wh4V1HoYhAC9bhWb1UxAZwxB9PEYjm3Km6yQMHfS",
  "key27": "32tuYC3uqLTpSXUm5Lwyg8w5itvf7MX3zDcLEFH8FPg5PrtsS1mtMAPcCFrXFpfP3B62aS4JtbLQEYHCRnksBJxM",
  "key28": "3SWKbWwuCwVR6tcteEyCuwWY7A7mQaJuij6UGhWMoxdxkf95V3eWJ7ZocbpHqrQwYYSYJDX5Fs6nVqt1xibabJjd",
  "key29": "3ZMq2tgu4kNUTTKfcsvaM6tZrCpJAh1i8RGZrhLKyh3cxfGLguvfKJ3ATZ2fWMQswRwn2N6i9vsJghXjnHFcwifZ",
  "key30": "2kLEuKdbpqnvqq5KWkFQoN7Yt9yvY29tcypgna9bEbEnZWXEnBN7FB2BVeqL6AAwySfshNmMiMD2jnBnXcEEzRiM",
  "key31": "4htNCJcfA87es59dP1C521XKGVuK4RawuwiHS8nwVB45HCNr8Rhrdy34WScVgfAuftrQeWrhzcVdhxuDanHvHXqx",
  "key32": "4CxeCCneB7HGpqSur6wUSrhDmS964LATEHdToeuGW9FQ3fNnVnBHMPNMEPGfXLGxN9pRaMJBtb93g6fKKBGhSjFU",
  "key33": "5EuiJuAv8knoVxvuxTVbohJ4mzuZvv8zTLDrxByTg2Ppsb7h8mnd5XAHekScpSnDTJS53vUXwHJsDpAGAjMjYsVn",
  "key34": "5VK6NZYCY9oPEWawwiRJxk9yi4gDuVCysAqrxobT8BhQKSvGwZSzMiqqm2uEW8fzgF37kNqSwGxMMchyMHRLsvUf",
  "key35": "2aPJsH5feKHwx1oGaVuvu2pyBcuDva8DLYETsMD4JuZspdX17zrttREKtebXU7AnV39a9QaR3rAUtYwQggrchTu1",
  "key36": "3Xsaw216SJZ5ANLo3cbScjjdGea7yiCEHYH4PBNDjV9n1muij8CZGqoFz6Bxem2G9KA13PVYHWZT1yTXdgBtd2LE",
  "key37": "5SSM6sWjzXHCrAoSNCiUzRuAGYhSWRvayRaXrWdGMdTSUjiQe2S8CmgdMHMnUYyW195M7dX7UsQY4ddRCHsTecgw"
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
