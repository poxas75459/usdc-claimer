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
    "2oQykqScVkRPvz3ytuER8DJPmJTLN1Gacqxy2wsi4d7PKSDDurUsNxtABHEKWGe5tyU4RvxjchGV6dYTqy4MwkqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r72VWnSZuF2VLZQhZKPqMh2YXqNd1kiRaZk4wyWe9W25qFu3dty7DaesnBsPi8JQ4pnRTsH6b7BxhHLQsCTRMjK",
  "key1": "2Zf4bxrKmW7nJzdWwfD2r4c2yQxrQeerteLtWEVZM17fnyoTRiqFumyoTQkn9e6k9btgangbeKqVhQydn3onBVwa",
  "key2": "5i9ibrWqeWfWR5eoQ9BBLojMpFtkrVQx4DuCGgXZtqH9H8iNxGNNWWmN1RahgChLfb1zeo96wXbeRTG5HpLAtfex",
  "key3": "5wtjycobrDMKydCuUdfykFBoReWSeL9x9yBxzLKUmuFEkAiVtprL19wiwj7agbKgocCrQ3B4HgqPtnCKNsse3dGp",
  "key4": "5FJbiVkBZtLeGFCLUJxM1v4TesBPZCHaMGtnzKzGrsn2UQbFJrgDniwLHHBS9UptgF38tdxXpoaPVDjKpoPrVwr5",
  "key5": "49L8xADUwECyzUQWTwYrBgMSVxAzbU13jRWE9uyEz9dXqP6h3iNdpDgKt3uTy4TcT7EVpNi5UooZgx12KPqPBMUg",
  "key6": "2qn96KK9Ey9iJVN6kgSBj4aFZtQFDdtx8HFke8qCQAJKdD1WcHhVMPtoNWTCtqUg2MnMSU6RmztxLnof9KAPBmko",
  "key7": "3RryEQj29TBkoKAPfudnwsLsGeBMLnVMhZ9LxwoPiG42QSQQYdJJzarw84SLvSLq3XeniJfrtJfGPi2vXPADRmA2",
  "key8": "5EuZV6QS15aH3pgLhxaM6UY8fRLBN5z848x1UUc3ViJK5TxV6pie7Tdmt4eUX46hjybF98eCbjsC7vPcS3XDHPP3",
  "key9": "4EhJPTaFa3JL7dciGNwkNdk6WPSD9CLmrd2yLXDQ8mkveUXUdrPaM1KxZBGRdFXGx925JRUkkzdGqiX6hmumpPNt",
  "key10": "67JXceQQyiv9N7keRf8qwQqRxAEGtkDMnReW3Xavsi5AhPy1sCNEffnQcvzaAb1n4HBacYQ2otVgHNqzupGekG1g",
  "key11": "2A5Z6Bemzdf6kQSrh8Z4jZbjwdwU7WzuNHpB2jWe4YBMAbXziD27EhCq6L4JR2gneekxvAL5CK4GaXVTxmXog467",
  "key12": "3U7LXpZnLBqfKEG9cJHmfVdqcQXs5cqcG2fgB87P1Z6EysTSAScN7zfAkFw4WxpPTSZmCbUQ1qfQsrwBBfLWJhcM",
  "key13": "PxPoLDtnWDv2NS2KbmRydpXfzkr8C9gMtg165x5FNnFKeKfcBotGSkNeLb3ck6zMVHvNbhoCdgs3gV53CTukWh3",
  "key14": "5tGZb5DvQru7aDCqRapCTiWFyj2b1dZfJzPLWvazhca2q1akHotwnF5ofJQXyC2HXDQBbdhbGfwZ7qAZuMaMNmCb",
  "key15": "pm5tEujbRGjXH7NehsjWN9cDP2SPA4YJNBziaG4pUzwHu6ZubP1uZGYwhkvWxrsj6ugioxZHrguGWNvhyKZTAW4",
  "key16": "iT3RUEitATpPTwmWXGbk6dmcEXEoHRGjQRpqbjHcTYjSrCo49aA8mKUfdmhBoD3c5eF6JDjsesNikeP1PBxGYuM",
  "key17": "qjB9wADNAZgGWheWpbM1VMAPSVeTcyfotDa6CSMZknrGjspR1wbJGzDr2GG4Jjn81edUVoxxmoJiJydRzPYVF3Q",
  "key18": "nUKSz51brSChQhH7iNubta1RtfkV46saSNbcJoHeYJSwYrvfVVLL1gHXjgHkyhw3MuZTpBmC3ekY7QY9Duv3b6n",
  "key19": "4W8LMyBWVW7RrNCJhveYo9UC1A7QQRgq6uvtTq6WBNpRWqzGXNtTUqfsK2TGdRGfCBbd5aWZSDx4aTmJVYWzH4gs",
  "key20": "363CSDUG9M6o7pQoh3adEnTbPqHdFfahhzJptbAFp6DaiSthPWeHjiwgwG19ZgnV89Jr2P1YWrqYPv2Ad4YyS1iQ",
  "key21": "4t7XustxinYQPZyd2MRoM8BQ8ZZj7zKXRSEKXPRU4WByP4skGjZ6Wg5EDTHEWB3sESMSa3wWBUQBmk8hwK2JYsGN",
  "key22": "3fDXnjTQdyUE6JSeSJFmuRHBQz6vGNiAsnWHHix3urLy7y7hHKHvh5FuBLDZmpHD4bxbqCVDAeR1dV9riQzxfrnY",
  "key23": "5Btv52E3sMZ8bhb62xqSnpXUPy6HZMVQWSqaRFocq2HHRL1RfJLjWbJC4BVD8MsdMocCgm2vfNAS9zuBiQtiK1YK",
  "key24": "sSmejEFJ4gmfArmP2ey8uUU9mo6o9cPxz6g8v25AemiTe6j722aaqVqckmwU4zt9dWTcW3pgeCHThW8tcxErYFN",
  "key25": "4sakVP6pCvfU4wbJSHHfxV4APEtAzWWUABPtLNZugjoeq5ikuERnpHxzvkC4pdPCSfsSTz66eyaBZGfK1GUJm6ZV",
  "key26": "2uYVvTQ5CXW5ZSFXf89iWVLAa8rNTkBJ2KjxJDs5H5SiacPSkGiJXwFsmQgdJCMaSwaj3hJ9pQZRmuyQJcswzYH1",
  "key27": "4wwKfDe33aLujMtV8kt1VKGhZEQKLbaT5NLupR7LgJy2J21rW1XTrqqfnpdraboBY9VnB2efafPSxaPwRPJp92Ng",
  "key28": "5LbnZ4WY3tsQwRYc4MbiVpuChzvtMVR9XJohVHYcHj8xZFThyzRmCXs2Et8v24Vc6TjHHk4xXqGp4rvmjbwhGUjU",
  "key29": "5fxBjomitKNWwbShgRksUQU7LiC2Cy6VKyDeq288xKPzvyDAo7rrFSdnWwR1wnkEA8vc3M4utS82EjJaTKsCzTnZ",
  "key30": "3xzToTFQYjNu3Yy8yNdJfAm7rTBLtJk8u3NnPBRAEC3dABqmPqrC8qhcTAaSD1VtsQ3cHWrCwCQ9UKY1ayBiXuXB",
  "key31": "2da42zgAFxnkSxPzXm3xayNtAE2BS1Mvk2LJNJi8erGZiu1CpbF7a6cdZgC8toWdeZxHiJbaDfP45y6P2o2KFwvr",
  "key32": "3ket1rFH1Eu8jFR49HhU7MPCM7XtZGfY2XEqAkMFZqdwNN3fT9t8je2H22yEofQ37gxwjtyGnTAZPzbdvu3foGkq",
  "key33": "4u2JkKj5vMiFMZRax5pULPgPtLCXX2KMKzHiEnRBEZKDVEzoDZ7TN1CrRcBVWCRSTh3n6nHtqvcdHBC4mLnTHUBx",
  "key34": "28qPVXViNKM1TW7WDiACgtC8GGGfxGEdmseqLgModbPBEGbhFUGqrp4a9Jf3FcF9CreKzz4V9fA2GGQbPRzNJtQ1",
  "key35": "3cPa75D7sdrvibzNgP214NWwtzuN1dYZ3w3RES7TrKozyGSTw3t8Dx4Cj9kYujtgw7ZRK1oZu1ZjriLzX77Pm3MX",
  "key36": "5UsxGj4jTyr1dCCd5Kr1dzcCK1U2aWcLevw9HbLuHrH4UZazxmdoaE1zTzpeZjJXWJ9LbGU29KBd6Zo9mE8fwzdE",
  "key37": "Ez6zCxsjjppibvTyhjsTMr7W5pmFY4tr4wLc3foWSbg1kmF4k3nc74T9obXBsQenLJxUqBdV3eKKNdUx3qyYct9",
  "key38": "2XZbg4XWQX3q2m9SpoKtDvCRD8j8qejm3ZhhfxRaVGSCbME44hsTJGJKAN6CvYu6sTvdPJsM4JdAorkBtmDt2rGY",
  "key39": "26qj64gNvi5qDPhvT9VQzmeBASpgxcaq6Zmrv5rE8B1MwVXzWHpGg6hwcnaG7Pca6iFFES3kuZrUGzVL5n9YJJDe",
  "key40": "356RXqjjma75jQciLFD8d1wsWXCPF9pQPCGHNQvZ4DWeXQi7gnwap5JoeXb1cLS8NasGurkka6Htcp8esyHo5ntb",
  "key41": "5YT7AuNFP7obpHcRtTQYnhMAjCeVuEgfvPC4BeVcfyZqr86zsK9P4xWveXFsQ8EM4bbFkKxmBBpH989B4kDedxu3",
  "key42": "4ozJVxgQBfYzq1umbUUw3vwnPmJt67A6BX5eXfJsq2Z8y43wGLaXkvhynb3E4AF5NXeU4i61cbqeJkRYsv2i22Jr",
  "key43": "3nkrCsH4DFESEpcacECGKUSd9U3Ymmga5aGJnEVm3erVAPvABy8gDfb5YGbexwUu3brdQaHYYeSwoYuMEuDbamb7",
  "key44": "7DPsn2vUfacidkAZJLgYAueYSkHUebGEUK9Pbf764ZfikUMUPYwYTqxJVnN2pCMbV5MyvE3HWv6J6Ragq4ybyTA",
  "key45": "5FyvZFQzLPsgWUHcnaS8AWZrQ9ySzG4CPTqLC5jH2UWenSey3WwZHZTKm4kuQvnS3Bao8sn82d7WiHdeX2ECBZBL",
  "key46": "4UYWDRdw82T6Lo8F6ryytXRkCREpNTrE41Xf1X16Qqibjd2dMNGmdT226tjQ3k25TVteoHJe2pjfbjUvFjd22Qcr",
  "key47": "3rHzpTWXb4csxHVZascWxFyTu31CnsDDM3o6WrTWoPKJDWpx1qutLbdeVd4GrW4kL58pdQticPbgiVmxfjNSE8Qz"
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
