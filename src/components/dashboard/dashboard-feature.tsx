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
    "34FpVKNAv72aDTSxqqm5Ui4zWfbdyWk5XGnkDxK5DHfaSfHjo8hXjrUCcErwRkmPW2wPRQwY5s1gAbaGhoyrMrkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33pYJVsnBDS1FDJ2phefWFwHW9KrknZY5WxmGWfKopBSK41X3HdDXkCpREyNMWtQPBixD5VB6f2twYRkx52ktPe4",
  "key1": "3SWK4idSAQg8gvCzytktSJYWLr7okrUjHa6UK12VH46iVsK7rvoFZxJxQKhcJr7ijcXW7FE6Q7ioBGZC7btURujF",
  "key2": "4HmeFxrtdHPfGwoooXYLwyFdT2XF4UaG3M1BdArXHsYb3CSdKy8EkG7UkCaiG8eNuUJtbyBH3ohNy5qxexm9QFbj",
  "key3": "5SnimZHxY1PXwDsHZH39rrMAdbzAYwNzjw8HWEyUpUmsPNqmW7bS1kdcTCZHoq1nQiwY5EiZjv1sJgCh9cconmvV",
  "key4": "4zZEmaE1ScAFfRQFh5XmiSerSEAZvmLbpchta7eHH1rSAEkGWd4JRy7AxLJqFYfoXXzieVH8v8naF5xCpkizZjAD",
  "key5": "5JN5FDPKc8xEGPKKis79sSWmmYeHfBGrbubxMP5ZPgCz65ShMUcJYvRuakJ1dNSPDtSTy56XResd3RqqDK4DjqJr",
  "key6": "7GPaamiqeZisag2Yrpwbpo97Q9ciSiv1hyEPvTMNFFYWccXRrjA9dZ4BfPpoK93ZTL1tJ2myuTsVDYeHvAPzsfS",
  "key7": "3bsctpQEDNM7PW6446JTLeo2ts4mQBfgoanTipS24qHvxXHRboUWwt84JwYSVffTdFMGHmzmxhYnRGMDKDjD6dxV",
  "key8": "4sADHB1fjLSYXNATZT443mJtuLc5i3FGQr2FDy2Pu2C3NaVZ51sQMeuGaqRqqLbC7HgieL8DiCq48e3DTccAPPBb",
  "key9": "5q1tdCk8Wz2a5sg21S8NP8cMtoGZSkQ4BFh3SMmgdybdxYGiwAQnM2RKuipbum85ZAcxKNS6rvUeCdcimLoJWhtP",
  "key10": "B1saUjaaYVTApKn7RUJATm8838kxdLNUK2XmPHWretdjV37bqnScasfcvUNLrWjCXuQAD4jmvpvqhn7j3QmsUXW",
  "key11": "3np6QSdNN3LzLsaT1WDwiVeBD1wEq8xn1Gvi2vWFoX3skwkv5LPbiTzuFhyhHixRKWipdHAdzAxehHLN68FFcXt2",
  "key12": "4aZ2RSfwKYsa2PHnbmWXbcrysKCHS5gm4iwonm4Cy1W4zLp7v9ffYjWRtZ8v12LvNGKaBwdFeW9cqfCmTdXetVt",
  "key13": "63aikdxVFvzHQyeneuKh9GEaYzs89EC6hgdrHo6yZ1ZewLtZc3JhoBFGGmGvx4g1yy1idEVMHyQFr4uSYPJS2HnH",
  "key14": "s9dmvnBnKt1vr1bK1v9stpVHD4AbejvNkH1E1kJnV6749J7Yq2PVWAiToVFUfEdSGNxBjHiWbBaGXTvazpwsHd5",
  "key15": "43oMHaEbkG4KzhpzFnGbRfaGBx6e9jXxBb6z9UWRrsCH6Jbxx8b9MxMznPATRtrvvvi24MfsatUU9oNsTrhWM9pe",
  "key16": "4GAeTBetQioxv2mznVmddaZXD1Z98XsperHbrMegx4JZbB6AUB4Hv4hxm16y8tZTXhDknpbzeje6t36k3Zp5W6Ce",
  "key17": "3rATFtkCCjPD8dkyVC5eqZX9mqoMYmFyLatZnzyAWPJ6WirMDJdhyynPgEkcGBsyEnwMXjujHpsu2pyzJSX8AdZK",
  "key18": "4by8qwtmuDkeEjpFZMQ85FtLqbJKJTcHbN2snx68dDjjvZrW8x1WQd2kWskx1X1hbJttwjKbakCm2juNP8do8MLi",
  "key19": "qtZvNQW7uby4RPS41pMam5BPY8d4482uUTmiAWgNxyAbzD5zXgdTdkhayZpZCMg1urd7rEuiNdPgLCaY6gt5573",
  "key20": "DRw6QWaqqcrznnGF78nRKNdWxat2kEikCLjFV7gpQPifKGVfhcffHG7SLvRRJZwjbPRCeeU6BifaLPz3vrcLroC",
  "key21": "2NWnSqmh5PMJCkqnS8NnW3XZ4PGBKU1u4vCVkLDk9JcVzL4VFWRSanBcq3kMWX6sZou9X9qauAqHyv4bERK2nzxD",
  "key22": "5J2uSMVDxwBgBAHBwG81KMpZj7u1YLbbgVuiB74B1ERxucKPwzRYJTjgU3idMDU3FAio3C5ieyJw5humrxbrZg81",
  "key23": "4ZHituf6oVZD9ZCo7iYEEqjUr1zRRn4QkK2yAMk2yGCiJ5GdHHzVww1XBizSehWYt39X3kHNTr8DaYoHpuZfo7un",
  "key24": "gQcgxvX2naX2jf9gGAzUcgdffg7oQuMFk4GNcj4Avgg4qaLwxfLV3NnNnntJA6jDJgJidsTieg5C475C8Zi4icM",
  "key25": "5JAPuLmKziqdDWPzfSRoVepjUz951sk437Jj9BjpE5iewASt1B4x8Z2tnVye6fY8P2P3ziKjhyZPUCkHH7hG9TFB",
  "key26": "ayW12mFKCsm25uvx1X2FtfiNRMJuCn8gKutkA3zFRjQHGMvc1sXPcxY5YYwc3doGrDsnnEcDUuKD61gtL4BxAk1",
  "key27": "3Mu27LaqevyBBrAoMkt2xgQVsEd4Sfojg9x4UvA59gxt2Q2dPyL5VhTBMKRw6MCZKcJBBr5R9g1mNA6VzmDGy6wZ",
  "key28": "ve2aAh5At16Rh4bH44KP8yWrPRTKij8dbLTmgHEiJhnvYF1iv38Lj4h1KofRKf7nxiZJZT6NjM6qrhgSCdVLfuQ",
  "key29": "5q9xXGk35rGZHYWGm6TsbMmbZdd739WHzmMJ3Uom81aEAXzceECDfiDM4PvdVcQ5W5kswSZ8tbTqaJiVvYBqnj6m",
  "key30": "61RcQ9XqVYhqzdBRjojp6h9uoo3hWCafU9DRESnzCsNft8GUPi6XQoj7QgfnULQgEqRTBmP2TiJ8fSEKjDRiccnf",
  "key31": "4atPUj4QquhcYK3UTS6Wf43ZLLw4n3dtq9UaaNtCHeMB9sAo8Wzs1ekstoofbQS8aecEMxWtBRToBt95959GXMDD",
  "key32": "5gmgGFnij8w9D4hjrnPBJZtcT75Q3aqzFvbCzScW4H9NbTTMghQGEVLyVh4AoVbSUPRRLugKTnpBHikKw3w6W5R",
  "key33": "4NPC42N3yDFkGKZHGWBQAUBk6GdggXcePM6y2uSPBFNHGu5dFLPihDXPnmUgDK7kCEooNpCry43eBcrGifAnhAbR",
  "key34": "eAVr7eBPEDHceeZdSQvWrMy19Ujo66apZBvxCuSS3K61bg6umHPtz6TcLue2XnHFd7Sy6BLdXtePrDrCvSg3u4Q",
  "key35": "8DE7NZeq97Y8yS6yHtgrHDCokuKzToYTk3JVsTrK1JS8QiNq51c9iPbHXu7ePeabktkRZV6L6j2djwfSsx34CMA",
  "key36": "4vsKRWe8F3Zzk4HqECf8pZSLMBDJzt4veSVKCTZP73D3hooHQ4d6FJ5senCTzkKL5DDbCdsedVeteCcCZtUPBXEB",
  "key37": "2ZFEofXH3SDPNYMMU2raYcdTSKTrRHSnaPFce1gDib1sqcsjT4bXvVXE2f8YGDmoYwRnsymZcpZQMCrt8iDjbp71",
  "key38": "5D3ps9r8h9fwWa1xTxd1tUnjndpBxDDZ4XQLSBT4wZFVg2pNCnxYCBYBTpAdMDCXhXmXBnYgZ6vzqmMdA3D7TrcV"
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
