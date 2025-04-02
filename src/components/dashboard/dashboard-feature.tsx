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
    "5Hr4pXgm9cFxwP2YJdpxaYcPjxvBm6VPy56sSUaTWoDLZqz9TTTWvwMXVrDtTcFoN5MrfJSJcd64dUaKthDRAXqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a5senrxo7dmj3csNaR3auv3qToHb4P1srxuVRjYa6SHWojtCqU5FxfMzvfN2RA6J1MRdCgdah7qWe7Vy4HvqWsa",
  "key1": "4gLhTpvvaWVEEABvhHgaMdFxcbfY9tMiLGiuCeYsWqLG33CEpMg8eY4523wCJinpvpZpFKJV3ZXBmoNi7D3rP4Ep",
  "key2": "36XYWmhGAsgqq8oaZgdmzrUvxGJQShiApwazoejBtcyRadvYrNetJBfwTBcT3VVBvwoN1JfStVyrZJp7ycAHwRSo",
  "key3": "2yu1mfE7j37tWhWWKsTpHQp6AKJ7fbT2fE5sEHSdqCcUskDdWTo6KC7N4A6TsB3UYTEhdq3jtTobjbxTDGmdJzAq",
  "key4": "5j6CGDzYRRt5ggtEsyi6CtWn2psHWtNjupmwH7S1Vyf3DK2m3LV45o1MfBAhwm2wBt9HZL9cySnJ9EgB73STJXQ8",
  "key5": "hwFoDb9sdC53RtVQyV3hUAva2Lf6pXKaPo9HjbrrPzzYH9n33ooHq9tu9CFUaqxx9qJTZp2oemkrUFjyLjYp6FL",
  "key6": "3WsVPiivnw8r6ZvoG1Ps4mycmmHdn6fJewpfy7H6YS28vXsCAVrSs3QpWxp5dwMw3JM3dm8FbSnLutLjLXyV4cG3",
  "key7": "2AeBaGZ8yZjWVKKzJTUDuydQmxwgFTmSQe9jSWgBxLdCvD1h4DHDBnqjgaqJsGurtkwE6UYoUzQNydmTunMCsmtR",
  "key8": "4oomiWmQHidsJiMq1FfqbK33euXoSyFqSWz5JbWdqDLD91eBE9iJp5EP17HPuk4Vx5L9t2aTkoRQMDRV5G5PRPKr",
  "key9": "2SxW4P2iQJrE4TQz5DD1skt6c68ifFvjpg4JgHY5RwEuj7brNPLNNu8fuofNirftadawYVWi9Cy8cvZq268NfTch",
  "key10": "5DffSxCmkRk4fusX9BU1zKdFdLMYPUQuddBgjWBuiBGscbmxuLE6G3TFFnwpDCQcHhMrtXMHXzPqmFWGVfFv7H9E",
  "key11": "5RgKnMRm539gkmMGb2w6NFsGWa7kEMLN2KqXSBPPn2uVRmDBLJvbGiSZCcHtzQ5jm4eTUiaVPnpwNVsZyH1yp61j",
  "key12": "5eP58XAFhbf1BjfJ2t1QyvsYMXwU67QfVFmb58Jn9tGqqQkncWzvmdkJGzuXeJs1EeL5BmGS9wR2DQ8KUpVQzcAX",
  "key13": "31udkT3RLgVZCCw3nHEXbXekp8Uhsw5JD3WzdohocJMHRyLYQ82rhtaKq1qUypT1VEggKcy4eNswriKZi7HQGsJT",
  "key14": "2s3jn4xeWWH6aESsijtNnsUsXpNNHwBXEJWGi8eeF5GvHHemxAEdNaLRvnpxu8poLqC5BMdbU6kMPh7bqrCi4tGX",
  "key15": "WVEU8mKYWNybtbF1Hc8guM9gkoyTdDtaivzCBxdkXF9LxKunqnBX4PmvoE2PGLYPreBKdFbKe6dmxK3Px6Xtw3t",
  "key16": "4j2aMQzPhD7L3X19T2Ki5z82TK6Na1PZzhSZzF8vafBf4R9UDF5URXRVsf74KuQid47ryiwoBCLquZcKQcp5Bhw2",
  "key17": "63hFSKXNKzyKR5XG1L6w5E21h6HumoXrLt4aLEJc89NBxYJQo1CXqi8tRt1aGa61gyob7Y1wZFtFxXubA4KFFaB1",
  "key18": "4deFvPqATiyYE6W9n2niaKmBvFGftfDVBzrTRGidWb1NB6dYY52hz1c5s35tiiWc3zH7RzrXdxZhrDZWeJMwBt85",
  "key19": "3CzpjD8He4JxM4wzXwqHaNp8bgRuv1b4E4yXKJeJmfEBiS2iCuQnrsbHENoxuLnEdUcLRhWS9kvXTdwiPe7R7Ybx",
  "key20": "5LNHHCTZTALRPzjUw2D3Sg6eCnUh9vLc5kjhGrcjedMMHuiU3Lcn4egBNP8o7Zoo7B39yJLJbiiYWDH6nvDy8ktW",
  "key21": "3Cm68VJrqk4wsww9xPQSG6opJy615iPg2HZsLbkMJqPu6KcPLydJwHQrvBTfS5woVwmdP9ZW1c6qgwsnvJBT1Px6",
  "key22": "5qEucVNV9uxhCuQe5L48wdWfa41AyuP5J7oEhgEifJzoEFhfv3BUTXGzkPRgp56NmGzfJy4d888rahvGBhSzX6ME",
  "key23": "4WYVVrjxzTsQYtbFhtgVFVJTG9Ed6MLU1mYd3KTT7cyptGULwb2cnYTxd4r6BiAQRSb6WUuCF2G9iekRN9jyk3B7",
  "key24": "5HKt8jGKdCRxQDoYcz31Vs49Rmri8ijraJYzGE81FF2YAtC96HBaXQuoQ1kh3ntbrsh7ukdvL3oZMeeQfwGZT6bT",
  "key25": "4qNYU3VXxUBMLJZeKYFyXD6cZPc19XFVuiYF9nuMqhgi5kMmCyzrUQCQhjMFKuQNkWZb8rhdYP5DndAcs9oXPDKd",
  "key26": "hmGBNEU7ad62X7pir76ijMAG4rzTFD1cLj8p9YV31FeGp2xgk53ZpZA4bt7VmuAzrGs5EAVd4AzrYyz4X7kqQEm",
  "key27": "jtd16249dvnxGS6x7UU7yPx6qTLTd2jRzt9FCrQHjWacuouEAoQiCtvysN496kgE3LdGfNbpN1UuJ7tVL6YqsfH",
  "key28": "4nBu871tihG1jCsbZqNW5zF79mDN9x4cvhshRLDsGPrhw1aMDeRsdrF3zQPuQfTHHUV8MhY8KMuUU9uEgBeZwJTy",
  "key29": "V3Aymfef8hBoj5LrbL7XxZFsg5f5d2h83Voqpwx4apmLSD5LPbaxRhA9iEfCjn7LWsNzrPYNZNHZhwzqjwwjnmT",
  "key30": "65Kj3YPMg23HwwTUMBz6EgHfH5xPNmc5v5S3gNUb7XmfzCJVTeQnubbsYEcx13nnoDJFkrqktKLgu8GuN42863bb",
  "key31": "4aAsAgPQpe32gfWFjbWxj2e72FKuRPyjfNCeptzasAmPaeEo7c9zfitqu4ApEyUdMVpmHNuSgSnMzmW3a4dBKtv2",
  "key32": "4J49SJLTJDFNrKWzx5HCo1xLbFxV3KQ19prN5D57G5hLF5KJ5dsoScaGsMC5w6wqCZ7jX567X6xtUJ1zyJRxCFfj",
  "key33": "ubxbLxPEsiyAzkexwqdh5v1ZAtjUtfLVpCdr1aCRFR5pmvZtqHxJAxD67qKZHsGZpmvtcLsdY2TPXpgBdPJ9CsH",
  "key34": "2igKLNx4d6NKJ34jKRdGNMRjS4bVZJLR4ckj3ZiqHdMyCEsvMvE7TQc8iCn6X29nE82KfSaZL6TkLGdi5auNFqT1",
  "key35": "323rXLQ72HV75F5rvU65cVctRXNBVmviPgWmG7hU4S4KZdjyc7SsLgPToYc76WmjptCvrmyTmgA9NETPVsTT7gsi",
  "key36": "5MRGCfXmUk7RhP4y7qMpyZgAErX4mc9JdxHesaeF2aMiYDEM9as8gPzDT9KtBj1b1Ptm8SNevZg4Dyu8Qs62cbvi",
  "key37": "2Xr7hUF6STAQYjJkLcLyt6KQiPmFzdCUzus2T4DrYWbCf4gvtGeKspmii86ckiT2kFHYa99n9MgiaHFRdnpDuk7X",
  "key38": "37gTNv6xDj3DFwXnMxb5gTmwKKtXA1jBMa8KWs4FbRm7RLRJnhjdgS3BA56Bt4xjoWLroB9vbXQLfvTURpd4Avnm",
  "key39": "3rWQyVaBPQsBRS175V7cH5Lf3Bk25zkZ8BfkfedgtsKevRuYRpMxG6EfquMW2JJRseRDNty7eZqmGcJNroM957fa",
  "key40": "3se2X7h1icuf48tK7iEjPa4egM3sAuimpmuBjYChjC1N4ac6PHmYhgr2umCtJw2McR9SoJdY1YuvXVtMbZZrmCVJ",
  "key41": "2uRQZHDzVhQzicJEGbDxacGoc8TgeVYdZrE1odjf9nrwhLBgPE2rBnKEDJT9n4kBPCg7ZioXg3gVYeLC2w4ZuLZu",
  "key42": "3Caka8hzXz3eccBZTQjuDUhHpDPaB9d1YCLrresKTMLMKaBcKGT5qgfr4AkMeaUWREKF9LAxEkep49GDYEd7Fd4N",
  "key43": "3AoxGEoymiZ4jegc4AFnE7BCtWD14ZQMctJ7bfTceKiqdwA4bLdtKaRvU787oMQEQgQFGFaTqmwt9nzHSanRF7MP",
  "key44": "4qatvbrg8sH9TgDAjiLhZLmXGZx42WxqXMJGMKQWznJtVxiP3JE4BMoWm5gcDbgDa4vmdwgMUWEKmiN6WyWEAq6w",
  "key45": "34Tg4G8mVCgWR2TrW57wLRM1hwVSh4LnfCMaT4thPiaNCQCGFbsLWbTQqT1vAA9hswR9Nyo1ri73w93ozK3GMVtF"
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
