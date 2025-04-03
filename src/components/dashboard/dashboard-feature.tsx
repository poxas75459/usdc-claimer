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
    "QXGZMQigGEVpT5iUEPgbJL7NaFpduVdBFGw8UpwF172ewcAVqGdXeubiKXh1vJHr4ijYgtaKnE5zjjboBiztmwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6135997ete4X63RqpYXW4dxAYM8nUrvVym277VmuXBMjBwDz3dEkYnWpXRDeR8zA2JTxLdZKxH43gZ5uCKhcaZob",
  "key1": "4fQP3j7zNKukrHAyhgz88Z9Y1L4eJ7bGMs58V9ZzAZxSLe9ovr4hCP1WE25VAV74qa64DFdAyUMq6Khrn4RxvHQr",
  "key2": "4YWjHm6YLLAjRJhskToCdU2K84AagtBi5reYHd4szkzg4GSMAQNU767tvzpBYkK8MpTGqgHRAuGPDp3VZ8NwtpUd",
  "key3": "ZcnD5Bk5Q9pFjCwtPAxyuXS3Vk1tBa8muDHXs1NBPBfQu1Sre5P3r5g2gewJKDJYVtPbiWGqGjLHt2Rpn1ZP33w",
  "key4": "4UsUQUXmdJQw6UDseaYLCfrGbwTYz12vhocLcPhvheYDwtS8kgAZpF5CzCm5axvRRn1gWPfWWg2TEBku9VPsZ84E",
  "key5": "3xzKrrLQswaeGREPqG2QDWTkcbbH3SdnqM6QXcQHJMxovSAcaHjDYd6wvZJUxu58ikSzjAvjXS2x9nFE1oargbAz",
  "key6": "2Ht9eKrh8F9RcaCCcAZbRVdPL4DXpyhZUvBU15HHH5hwBnem5nJ6JDCk2nnEnmVG8Y3cfCivgE6kYESYCh1CCE8e",
  "key7": "4psRH9LPvdDLoYx8JXcG4dq1wvyt9Vt8tkALPUzrazsEiGoMbkmUcgyTK8cc7We973curaQHnu961xnkg1LFVXXe",
  "key8": "3TSSYvPRix79kouBDsFWfkQ76ovNHXxi9wnRGmhRKqNJoXvf8PFLezdeD6pJJv4pBwwvP89L1H2GCiDLhGhSUoUr",
  "key9": "K3Q1grfcB9rHHUPnYrfoy9sXkh5nLjiHzHNCpWBUiY1mGZ4zrF9wKqEhcNrjP151Qnhu41UAz4vYptGUoSdNWgH",
  "key10": "3hTbotaFZGfKeRgwhE4kzSnAzN29BTgVZcvYJDA5VW3Ttdckt1HR8Fg95VN3HEDsVzTY2MEyZe4FfmcPdMyXLREy",
  "key11": "2QMVf96nTRRvo2CrgnVrmHdhMaM4oXLMBbtckzXiK4oMfgf8gz3i75eD4RN8V3cn9eZ6GdnmwFPho6f5sqf47zD2",
  "key12": "VnR43LPwN661qNDzLCRQ2kfxBSJTeRZQmQHTybFPDXSi74hLeivgnHzk8yV1htL41cUAVd4L3vHpgjmj7xdxHPj",
  "key13": "5LF9SsnTNH4BbnrUrjEuNpbdfcGLnMJLH3qQwu6V9SsfStpSJHz52S9Hcum68eyEZLtmCHpuXMJWmxKZqbuMiM5P",
  "key14": "3do9Nkx42vVkn4XiB6HiE8CrKmpgiCMb7G2ZZzBxfx4sbEtAzcvsJg6tjtdCsWwTtbW53DEHYykpspTnbS5ML27H",
  "key15": "fb8bYZwtLsyYTTsr2zYHcVwDAeQFdmmQ9PPyJ1sDg98yfwzwnd2XdijCoHBdCyMVS61xVyVpM77mrHT7KZf15X3",
  "key16": "5mCmiiCBRMVzbuKkNzz4Xd2KPcVAKXzeN8jTECc7rbHxEDR17NWStAb69HNezjcSBwU2FRC4HnB9mpZGmxYg6asY",
  "key17": "42AShtaPTWTAwtzFBVNKuaGj9QRgAMe744UYxJw62N6DWsz5BPaiTxnZNmtkEAAv2pGyR17TwN1v98W81JmYkCz7",
  "key18": "3hmYLSUBMLXxfdNVvVhPKbKsHDPAJLWoi4pJuyHc1StCMjAociUo1h1LfzRSN1Gff5Sv9ziNypzgwe3dnWhUEqxX",
  "key19": "2K1dgqkauiY3Eni4f1umE5DVCfsHG45rCVkUksBRXbZpZEaW6sPDcRnvZvmma6Pq6HhQJAZWg6ibzuPWBgcYBkr3",
  "key20": "5YJLFW7jSz4hMTaVMSQJL9UFmh9rWAdAtFbsvNqF9QvdZ8EbckC1V57M8r7g5ZKaQLXyYjqnD33uzdFx7hpVir24",
  "key21": "5PWVAyGdBFkfv6imwYC7Fao8X4JdrwrWqPArtxifwvk8kYMTFRmY1jCdnwz9CdKDAtWAUBrZBHxpwcaXoyXQMcQ3",
  "key22": "2SduNnUbSxdUo5xnWiN3W1RU6rgzZcfjACEuW7W5RX3CmdZjbEuHUTJdoePNj9WZYt2CKAZCjSNjbFdXEmhWDod1",
  "key23": "4k8E6RPMwwD4gmBk1Gu9ZWVAZQmDim4tqTptNjT7AmetBoXHvUw9FaNhstZ4LSnjYjJG1ZCm1CqUZk1gd84yJnsB",
  "key24": "3Sdm4jhi22y6JdEAaGQ8Nw6eksi4qf8Re4wphxxdv2KB6ynMzX1Vqkx2dnwwCqvUxMQGx2X3drNJg6zVqqvptV9i",
  "key25": "3LUH4eetn69rsi4CrmefnGuP1RnSepm9rC6fx18pZ2b3DSUsmJy2ZjirGN8jewRcZKLSg47ke5PGLLpXVytA6hBa",
  "key26": "jAbfChkZLgLb2vakGHxfEeX5ju3kQkQ1NBZTdwFZCyap6aZjYey2WL8WNSsHZRmV3WcEH9U9KA98LPjBeKmsY4n",
  "key27": "2QGpSRt7yTJQD6ZqVAcu2ZWm1G1uapSrrwPvQbmYYLkp4hnqf9ZgGJtijPhUn6UVSrYRFNGF8pA3mph3KhZAy4MT",
  "key28": "WKTue3SbtSsBuQV6djPvb1KskdYucR5p5bv2hKUkZtWmPJncEeHAiv2fnksxC16MUoMSfGY5XasBsJbtxC8Bsux",
  "key29": "2mdnggtbkxU53FEnZPWWMQPMKqRSzo2wWxmuQnA13j2WRoFgDKFn1SVtq6WuWpXzyLCrXRrcqofy7FkozNgNqGqV",
  "key30": "4uqFA4T91Dj6AM18bLHBYC3TStsxkUB2siBbADwyt9jDPEfe5xLuXs5EWNiM5NSum3gXvZreFT4P92W4T8uZfEoN",
  "key31": "27oF22sff178b6nda9ShxnyegyL5WGszQb2WPuDkDJJyZqfcKtUYZcitDxJdk1qDuj3JgEqPW4N7ttnM4T9jviPr",
  "key32": "2kZJqyHrKQ6cm6zKp4LdKu3XaV5vxkdEMx1Kbr3HMjZ9viYGkq3ByxsAB4M27xzcgt45yKLaZoLmFh4Ho55sNCMk",
  "key33": "DQ7ptw1ummpygJ6AC6gaKYWqCSAzCRubnFknZkQAP7GjniCBdHJELWA1n2TayBPHhfBnTRtQFJCdETCjx3qNGSK",
  "key34": "21QqeV3JT1eTJ2pb1pUapiLg21TcPnGo9nXtTCeXw4Ud8LgCzq6xn3ScuwFWzvgnnvhd4LFWQuW2ZRR4b2cSwLU8",
  "key35": "391CnAbbbauizYy6LGatiPQh2dXVNv1ydofuNBawfUkudVUfYuLaKkaVD9h2veDr7SFG3D7ZATbMmXqXXGcXSmAB",
  "key36": "5pvT1JFwppLVSPYv6nACn1FXp657XjpyzQXzpThwvbkiQCMq22kQrRC6i2usnxiYYqz6n3DSDRzbFo3A7syrqpH9",
  "key37": "5tdB9FSdeXNPtizuFxS4xwWnrvbXgQBNam1jHeoDM4mUzZ8R7LAM2ga2aKMy6Zt5WBZW4MubdHFZjPNMhCgW5TYm",
  "key38": "3oPoQtDfptYSXwQXFbEHwjoJxXT4cUFAHjPKdxHyQjEUz4qkvZ3XGh3FnNVeW91isPLy5Hymg7CbecKMnBZJ7vV4",
  "key39": "3mHfTy9AGpnf8HjVMp1DuZqTAsUMUz7Z1qsksgc8zCyoDdddvS24LhBhVQQ4GGxQuc8ncgpTdxJQtBc8ndXcN3ZQ",
  "key40": "4tms5VQJzZQ6bhJ69JAtsLEE65fQDtBYUfPvxNLwdyrHiMmVvJMut2iKB9ExxG6eR2erP7B324EVcRv18R47A61x",
  "key41": "7yzTmTVaCoju1amidUM9dspqJrFeEJPsBVptMpGRKgV2QXZdWeTEPq1T8hmTZaSH3jy1ptqoM3MSrCgaU1d84zw",
  "key42": "2VQemntGybfteqxebjg4UnRayLFFLBsYc2FrhsssNiRLxjSaLPJn6RvDWQMwPLaiHDpzH92FmTqcfaThVQXsntjg",
  "key43": "3SrKcswkVMNdbn7vQFiuSLZ4xCawXT5KzxLbGgaeoE6fkYpwgHDhUFiNfNe9ZRnW9quh3hQ64J12fUrCGU4FqgD9"
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
