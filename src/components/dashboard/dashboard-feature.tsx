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
    "4Sse24Z4AdR9iUT1p6rUhWd2RMX6FWR6hP2gN7tTtVD5YqTkJwMCD3QsGfYo38kkz4Q1b33T4s7q9xk329ZzvGE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQYHQGRpvmK4rRjSSxemJsjHvHfFMRq7txvfBePzQqkxiGNVMm9wNrYzEt8u6D5F1UkiSVA8RPcbggw5345hy9f",
  "key1": "3qrSwNsywthoTFGA7NqSwXF3d11zKycboDbF51sEhzfcf5rPUxc51ZfSh2hMDkF9tyaJaj5EK37sQ2QdMCcb18oE",
  "key2": "97UbsACzjEqGaB19CBLTDsNDmX4QS8PjhrYfDjtTcQHbvXtJYAV733anCJTBMDFEPvSHpX8UkY8WzH8tKfQk2tg",
  "key3": "2kMbXVLGBT4bASmAs3DaUA7Luuiypcm4LishrmxqxqUBWgydfxci21xKpi7e4VtoXmeuSVx6WbLJvE8W31ARDbVS",
  "key4": "NEENTacxhjy7YtuzrxgueLzLwNSDVgp2Sq7Jqs4WzWHdgQ9mq64sZvUhuXszM5Ms4Ft9FciP1h6SMUPraQ9Rkoc",
  "key5": "4FzT78HvdwgVqG3d42SzKzrenb9P2uaM7aAgJtizsa5Hpwx4HsPGMEg1NpQnRjx7XRqQoiuk2gRVXMbxA7NPEuTz",
  "key6": "2EiVGVZ2YcGW9SDqR4ifrg3me4qMGfaqPvZrMiXTpx1u1Q6RghqnQfQiLPVyBB9Y9tUwEyiLBZmx9qvpNXFrWSvS",
  "key7": "3ikF1u4eHsbK9GriGH4cUXhaazQYLVuJ6e54AKbKgSCtfmGdZcmE99VVxVNG1UNJia5eLp5Q9qgQdGoLBQH45Lpq",
  "key8": "2F4sexJm6MdDvPccUeW4BRkPPw5V27ZR9f7et7TsFstcqmQEXGTadSPF35ZxVZf3mcdz1a3Fqn1v4MPwrH1nz4pc",
  "key9": "2aAB81Du8F1uUUHYL13E2PeDRXJZfew1WfEfkxZ3hjtdegzJS66hikVxUA8qzr47WndJ54cjvUgcc7khFyaHdyYh",
  "key10": "3RrtMkEupn7u9XLZdrPaEsNSNEXCBCdEPjQbbArcnp6okBR3bgTTz3jydMetmZB8g8bmVe1CVUvLGsfkBxSYuJzX",
  "key11": "5N6Y8rfV2eZ7gfWMh6AB6xbi7pffTYsrWitzTMVK8Fh6bdwByMH7xu9QYB8YdTk1s9L9soVpnFejtPMitKci1TSB",
  "key12": "5qKKGzm7a1PXoZCWGpKVnhZc4zk3ecP89hEcuD2Mtmi49Gv3qYQnauAkaRFokeGA4rykDaaA2A8cnmYVV3AtVNHo",
  "key13": "GK8d9x5yC7PHu9kvsAvw3wWj4MnHmhPzpKoyGUNoNSX2oB7F2RhUsj3roUoPutUXnRewHou2FN8k483jSigJUxB",
  "key14": "5pLjxHBuBVPuMomvPke46NQiZW8X4pHRBzCsrKxp6r682Q6NoRHQWXh8uyZQZ3oC3Gyx2AgP52d82wqQ5yzdkcMS",
  "key15": "5dWM2YioojhkHmETNnJHtyfw4aBPjDHAsqR5XVJN8RFkc1WBzP6awdAQAhQBLeJ85cnukh7z2S45Zxn3Wgj9pMkP",
  "key16": "5JvSo1Gv9AsrhaHCDdtB5eaTMpijLpRmbHcnhYUjv3TuDbTvUmsBXUEpqRu9kA5E8McCQHNTGqADAWkRafr6r4z2",
  "key17": "5jvCxdxBrFVAcsHzKi4bFztaopkZJeWkYiEMZji6gZLw79EGMSjFhw8XbFiU3yCdtXVizPBEq94RFojmyomHk4rg",
  "key18": "5Fey4pUfFtFPU9HYoZtiBmjUt6TYdxkbgn17iUEyrvkhPB43Jc21eLW5vxQ9FsZ2Z7U2sanzFXU5q2LwhRkYEc4z",
  "key19": "49a6zWJGhaQE4ngK54DSGQ6LynRYXs7HWaUREbgB26MUvxkD1dZeWyAvKpTdF8V5DdrGnVRod9Baah4xRwJKsGFV",
  "key20": "5qVF62faN7saFvLUuGz8SyQvDoNabwAFY251GkZSpfPYkMBFwweCKPxt2X48HjnPHYzmTN8HTPxfKiJbMYun9diz",
  "key21": "227aqngGWAi9CWCvca3oEe4AyEZQ7ZBAgVXJLritqPVpdfXbP2MAtRQsgkqmjerMqhEMwkTwN2fydVwUbF2bhkRT",
  "key22": "5zj25ozvwdJ98RHKT9yQa7LtaJGriYsWs4qKSsaGT3Xa7TfY5hvaaMf22pB9QFrNGruKb8toY6A4PeLZyk6Urmea",
  "key23": "2gwtouYqUoxdZU3e7USEe5gpuK2eYLA8adGKehPqhmwmiiaoHJYZZGavN5k73VG6EmZPk1ZQaQ6VrN4S2hdTy5Av",
  "key24": "mdRBMJFoZp9k1Z9fu7b1zVX7hnFbF1fRiUFhAFeYotYkj8DkmxFJUmxLRmeKhZsaptTaA284FPbPhRpN5emZGHe",
  "key25": "5JfXZRorbnnNzqAjzN6TudmMbf9GvshBHjtPKCQYawDqrjvcKYwShaMtAtE1eKTZGVmMX7UxKVxUs7371Trko2KB",
  "key26": "3nbobLKvFZBrT1SFS8JV8ythdzSz4n2pzgd1JmvUtNUtmipqpGd788kNgU7zis4FC7FLbTkeYHX5NyXxsacTCAKS",
  "key27": "4bQfBNLSpHfoJcLtfkr96jWFfQRzGAn3rnhv8QbHzPeR6p6aCBKW1cmSkgCeHPrcG9SHwzr3prANgE959y2qBALH",
  "key28": "UghNHyPQDYvEQtfJQ6we7L8RUpdctdZ3gRchgs6C3HoTknjjgSNzGYfDud55eRNpSy1p3joNLgic65MgBc8Kr1c",
  "key29": "4GbBefCHHzLPFnPNTtshGH4KdtbvZsAusmuwusv1FtZ6cBqEE3WXVL8wVxYdZJwiz3dNSGgheNUnCfxP7vnVvVz2",
  "key30": "5h6d22RfxAqwkBSB3zwRL8uBDLFVVKSyaHDRH6uqiN8GedSstjoatzEy3KPwSG4CVoE9ppccRXbDbZDgo8mguhGX",
  "key31": "KX3zNJSeVVCYtexzH49tXpSjhChAMmGuP3ywVsxHMtE8mAehxBb2HSZptsKb1TS5yrkd2DwnJzbdnVH37njJzaD",
  "key32": "2FnNGwsY8tdfRYQyX6uLAAtTXsHgTZ6YmDELuhvPKt5NGVtVjY9tNkmoRrw1GwW7Q1o99TmtY5PrsGqHjAMzppGR",
  "key33": "2sxEC6FNFhYGcnLGUCHuQLd87PE5BgwoHDgZxRQWRkFon75od3JcFCpXJT4Jeib214D53T4Ch111PRyaU51RYKc",
  "key34": "Wvifekqz3B9axey8wZNTUXZwyH2keNgw5rhDSjeLjyW1quhJdLfbPermd2HCGfdhRdNqX9svnymZ9A2NMcMMFwM",
  "key35": "3B6dSqzzuaWuVBj9QWhGCrVXAr4KKVCJRtBchcTJyTPMBXRxcPhVQEz588GUADodjv2g9Wp1eKtbBk3dX2LdG8xk",
  "key36": "5Dd2GMb3a57GBep6CKC6HZL52eCfmsoS9ngt97jwBsjYepV4Lo4EvdWXJfUNECgXSqJMe44jRWbjz7Wp8RyE7nFq",
  "key37": "2P8eMgW4yqQfxUuMSUSfrXzmqyMA16tE9u6YmFBQqieECnV26jqDWZg9q3sqbyY73Rs5ooXJzgjQdiLh6sSHYcL",
  "key38": "3Lnbg9RQjnqBW6AJfxKPUq6ZaTwcXT2XYYXwv3174SjpMw4qzat8EMwdrj62MEq2Fz9RDrUGb138UWDbNzuVHaFU",
  "key39": "4U2dfYfXfA27TUPoZyvkZdYttk38ntjyVgFNp13ZaJKV1ZoMXzADugAiy38Y4ymxZmtN5VHY8p41Sg8uee1qGkJb",
  "key40": "3ZEgQzMtpwGhUqohnxak8pGU5CeGGdMGGD3y33Rp9hFdbDLCxXE2HMJeTGz3oj1QRXUQgKA5sNFhn3ebY58DiQ1F",
  "key41": "4ojDLmp6iADqi7wWR4hjKoCSF8sFvCnKNBBxaMz83hf3bD5FjAwHLQ5LdnDx8ER8DezEzRYZ2dTbyk8M29578gAe",
  "key42": "feK8d6ERBSkh8fRa2Y5xPzV9NjzGfXpqvvAsQb6DvkeNGCpMYoyUVmuFDyuQJha7vBmTWyBrncYh2cajxCMN1jg",
  "key43": "AY2A5GVWLtiMMUhCMFa7PvifcqZddL5VJMjET1f773zWJFsmaG5YMTiLeDYKifYDZSA8uRZoLK58fv2e9qgSAKX",
  "key44": "5NFNyP48WVk8RM66keLB4XMr9KKwWVgZekKCbb5pnYgPbFmXVD34kQWSEPU9KZ2zQUm4mBET5AyNsKE7M9uboNht",
  "key45": "5QkFY1tZy5zeHUp3c3Sytmq9F9EiBeHt86RVafe344fgvfhNytnqNFymwXZXKab3XAZsu3GSVghPS3FC6hfpu8Fq",
  "key46": "oYfQGEnm8nk3nwuYbvDQCKrMTxnWeFLUSvrL76oz8EtBw1acME9jvmPXcgEwJy9kyxgdXPs86Wg8JWE7ocpq5tj",
  "key47": "2mhdpJiu72JdRRDuQSq2TY8uJ2oYxr1NQwbzMGih6ejz413a1x7jKkUu7TuFFZvw1CwydYdcK5LZbgAe33txDrR8",
  "key48": "5hMFyNzbiXkfvZLXzxAvCJW3exBGq4BMVYxSHKx8uUzeEuyFy991BoMe6Sto19JLSJQVcLot2Zftds9Xg6CWRTbm"
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
