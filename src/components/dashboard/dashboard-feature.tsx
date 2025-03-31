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
    "GT25xFdqLaDviRHAtDXfA7N2Xs5j7zdCWZKG5XDmycj9ioCUFursDPzZ8jbT1aHjH9CDUv4QtFcRhkipAy7cjME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwCnnEwCSLy98TfgdSEGYWpUmoq3bDEFfUnVn3swfNmp6197qdFZiEva77g5E3UQCuezfcf61Gt6j4zuaWTTLxR",
  "key1": "29cmeBwgYXQN4dXFDQJpSRP4wxLc78KfJH8zF5tgKJzjMXB3PCQ2chKmiy7GfwL6Ux5X6eyB6uZxS3gRfg613Y31",
  "key2": "ocEZNJX76zrKvjUsCrkconYgGVnySjeutsJvjmXqj23JCiJJYa8TQKW1tXsf41C83BU1kb5GZgkZrhWoTfLobtY",
  "key3": "5g5SwL2ygt7EdL9haXm5biEAxUNFjsA65FKwEQLhaFd51kQd3aMxuxf4vXMpBbCezqiQczc7RXaLMD3gL4xVg2fJ",
  "key4": "hwo9enbseEVHi2KR2eUB8VQLm31za7qdCDCQZuQi9F2E5UL75J7pNdjQ1R9KEu95xZHUZkLGFTx2ZbNBcizBKkf",
  "key5": "4Kd9GfTKjwCy8QNmuc1T3mZhor3DADNjMUvxhd2mudbjUX8Mdqpw7Y5eFx9WuHM6BjLMg2i8t6AKufVKgDQoqD1P",
  "key6": "quWaiDRybpJtCvnGRLo6YjhKzFPUb297RzjZfpRBPCPPFawUvomNjtgkKq6aQ8Twa7m4Fbt8m88E6Z1mTUSZA7L",
  "key7": "ei46M1mEvVS5Gu34wt7n3jSYHvSj6yrQKgDrTWkfRerPEYVnUPUdEJ29yiLMBCauN91GGpSw4n7jXNysY1q6LSM",
  "key8": "5dSq5uFcXnLrmR9tkZtrcXyF6ch9pacycVKNV2XZzYPv3RidDmM3azda3r9iV5yCR7mumUrsanAWEgfTUbnAeJhT",
  "key9": "48CU6R7Pa1EjBowX6yqHyQxbrqUaYwSmPFFgPCQ5rtk7akk5g4htvXmEtiGBwRidVpDXkjmxmEQHVqH4ZtgM8UzJ",
  "key10": "4FcGMt6fUZHwQGQFtn55iWQFvMGjKXgzGWPZJo5PWtvKrVVEMwmNz6DAmapxHcmyWb5wCkoRQZRs6YTwssjiDkPZ",
  "key11": "d8FrvosvWRqw1pSFXTwRbXtoEdqP2nkLZUc4m8bG5Z1mb6aArFDFDU9JLhtyqLfBcj1Pe3vJD3MQ1saTFHiACcS",
  "key12": "4BmbcAjnwjxNFFc4GLegwJ3LphBCLrAVVU6bcD6S3EHA9MbJbjWzaYv9dtSYcZZuUQSEZhx72ArJD3RtLuBtpEwM",
  "key13": "5LUmgPR3AmAqxf6enxeL6JbvUVP8k9LC9sFW1SCEy9BLXnHsGjdy6q6Hurw9h1EJwpL1VXvATFDkEHXCWjZvkwtd",
  "key14": "B6Jj5JFGoQizvEX2pH3quAU3B6LrXhKKme5mcfNUGKRra7qdUhqAjFBSFUWNWoDGkwBqyoYrKdDcGp36HchKsxD",
  "key15": "4E52SNZHuVRG39b8JctvfxwAeCjh2FNb39XZpvtMj2jhpgi9SbsowhTvr3A43uWPKQvozp9T6vwQ2xSjbdyMuSLw",
  "key16": "2Aub1S6uy7xHtVqKoyQNt2V5TacE557vYxM8EG81jeF8hd3XPFfvb7y334D7Yzjn2BwpikUNy2vmfg8rCPSce89r",
  "key17": "5ydQ8s5hsye3gDb5VkMkaBnNoHd3Gkq4VAxfS2e6eWUbRUaWeAJKA9VoUhL6mp91fA1BdAVr7PfPBqBRxzV3NM9p",
  "key18": "DKHHY8FAJG5XE6dZPqBupMpyVwP9GTRWBh1JvZm3Vqy4yM7aom3bh1bpBQZkD3NjeiGCtsW35Dnh5ti1FMaUEds",
  "key19": "VpUDiExzA8AYs91oKjUzhkQQmmrJnek2UmDNX6jHYNAfjmpYAig12NBb8JLHitXeHN3USz86RMdgVSvwpYnFMzt",
  "key20": "2haxNbgf1nCNheoma7k32yD5HeqWzJX2jrDZTTFGyp5h1CyUMkoHdifpmukkCUZDdcinsdiGaeLwX8tkR99FTuB8",
  "key21": "2haPveoHrnYips6Hfd1Qz4j6Mu6Xej7iLzid4UT3BXJSfDiG1HvX3YXDVomexNYrfhNVTfBuJ4RBG1sbiGF9GYFc",
  "key22": "4pRTa16hFZD2unEWkhzwLmUxYkXqpj5H5qS17kSf7bf2YeaEBxgPbVWw8of771WnDSgoPZKAMA4ZrqeCh61p6AU",
  "key23": "4DVHgh8EEa8juTry9NGD61LkU3vE2Xyt7AEWbTnp4yz6Q1bBftRhZ4cjL4ittiGGd6uVqk4EhiCwdM3GywHGVhAf",
  "key24": "57UmFTvfyZ5jixPYmoXwzSfyK46fD2eam99nGjwoe7CCZeW4TCWe1mo8YJwTUxhUQqqtU6tsbmtYv1WxGUnC9hGN",
  "key25": "31JrQ6FwRqGiNBHfx4QdWHCCjTfW5wrtfbZmtph3JZaQaPeU265F5Wt434V94JLcEChLjLGc5TUETafPoVcJKbB2",
  "key26": "4NbsLkEpQpoXCwAatqxz81k5qbqeEoKh2xNSaF4qW3QYQZH8amhVSwRkQFRsM8e4DQWsQ2EbUFn4Rv47bDpHNLn3",
  "key27": "44JusyRAyJX27mDo5YZiiD3441NyRwDeL65dNXxBE4ZbV7mgM96NwsCw1xWgi3DeVViRahqrNxfBqkYNMmykKNRe",
  "key28": "2Z3NCovZDEx1VTM2Le9qu4do7rtvMTfRXfhngT2KPjhUPWCoaSTvd8BMxe8eUwqd7zbkn43xa2kSN2EyES4yg3nn",
  "key29": "24hUp1QVQLdpguRiFGSSw1Lbhn5JZQfPt6j6SL8XfbHhWRGogW8FdErEwGQ6R2emrFW9fgmZGhcdVowWNHkCJfxD",
  "key30": "4o4y3eDtjqNV5A3c11LpEmdkeehPfWUZfSurajgnYyEpAVVDKMSuLddKykzbJreeoC5ZZ2KWoVWCbg7pYrKXuSue",
  "key31": "5brFHQhbbWh5UEEjFfUY6Q6TJYFVtpym5vMZuX1Dp4t8rCdPpCNnxB4RUie9vKokqLkfV6yNuyaKQGtjsrMULeK7",
  "key32": "3ry3x58WUXgXUyisk4eRBoB9cCKq3UQ1kUTK2arxdWuuTzfVYHK2gK1m7wy5dCQR6okXFatg4kFk1a6ZbkUDcof8",
  "key33": "ALR5BA2h2p5dTk89iFQCNQrzy7x16U2Q4BYNNrWPeR9BS6Fj83o5mZRhV5unPKBt2AUgqJPmDHdYr5BuzkE3FQP",
  "key34": "C7KzDWAjACTi8pU2rQs59RhqwWUtLL4Bsw1RrVfzvYVDPRHn9Q6hweKMc3vbqAAogsHecJtWPEDbCJFnEyc11Bv",
  "key35": "3opZe2F8oguBs49N3aVKCT1sXVtcyMMMjGXCuU4qTNSnhrnXJBUs1T4vtVDHirDty19gxZVPLRfTFBhAdvXCGnN7",
  "key36": "3gysY5t6uLpW73DY4aLpbS4wvRHg374hk4yaMNymJhBWtPGTWasbQ6EAUqw1ojiDFcaHSg24hCVSHTbpfhdzFGmu",
  "key37": "tu2azumSWZYpk678aDdHqF7B1Q5bEzx47HYymsCDkXyCDcegmQFL11vfLsmXWBLoSdGZGSZoV6NhFuXJqbUTLyu",
  "key38": "UdZ5ZRxWwMAomDKcgBrozSfCEdcKTK7qc2NmPLCetW1nfYJcyQvaPyGJKdRWZkZgNBkAvZDin67Biv6o9j8EAFt"
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
