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
    "4mazY3YBUGZoqnsv39FDPLoAxiiWfkHkZ6fRznCMZwTaNCTSXPh7bEvudjPA33kkE6gUb5BkHK4GoVMJWYiGHeBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "owDoRYiLzNX3thnhrYsNbQSPsStsg8vSwgPsCxxnyAShsBWtRystJefeZFkoMumt8y3mx5XJ6UHkMgzQhnctt8d",
  "key1": "4VRvKZuxq5F4vwtu8xz72apdxinzqVStza71yQd1TCi5nzEMUAiX5tNDoCotzpuG8T78UJNrC9SoG872eXqAnKNm",
  "key2": "5gMfmXmyuo1Tx48k6eFQbqk45pXAeRnTPNxf1f8XVDNMTVAHsRDNHMbSzuUwxMPH4ESTcHCfZsk5KKHmdgNPtdkH",
  "key3": "5ib24E4PaoMe65UzaU9HjcPp3AKRgpDBybffhUoYsnyBzKowCNJNUo7sEuQkq33SbNj5xrWQkgPkz4kcfYE41eU1",
  "key4": "2Y62nv2Wj2qnG7VCHE9xs3b3hiWntzDB5G3ut5yD5SzFKPGVVRtLEzdh8PEpeD4meyuVYCYeGyu8p2vXD5AHnWBf",
  "key5": "48wXMzB9ArPoRC6rN7BFWy8p9YFozAxomYTA8C7rbuJdpmETyeqbcYBdVtrz3Jbe9XMyRhGo4XyLC21jNAyD9aoi",
  "key6": "sDRrdNeXC3i9MMoG6HDMcPAy6hbcDUs8oApisXcxc1dPCpT8CPtk664AMc21orQtFzvrWk2kSMrvihwYgtpizSL",
  "key7": "5xHJvmk3Ty3L61wkwXfWvLU4akc7gYXjE7GXJuvJx5zZxqpTBQsKRYpKxtpqpfZz3WHQ7AWfx6GCmmYKHHmoUmcb",
  "key8": "4WbuYLefETnHp5Pj7CuBmH2VJ6opFmhabLriafi7QtQmZL4W4C5c9P5pvw2yQUYfMZ5EV3o5zV2BYi2LWJ9RDLnz",
  "key9": "2Pofxa3NMgiBcaU56zN5AUuPvbsx3aqSiTtcgTLHvwH1x7HeD79swGJkXKETynMnPJuaYopvjtqiioSSJfxfZPA3",
  "key10": "5xkPpBJCoRkMhibpWgnyHuKc6KPhwzWfnRwVKC3DFnJtZzggL8izE4RcLDzsee1MRMwMzkjX8vFKGfiC3B9SEu9E",
  "key11": "3CMQ5ouauHvthzxCgTTrKixD2ePxZwnDEqYxQBoXdpyJJGtWbhR1YdtVtQgL1XruMibVHZXRSmmGRjHWuccrcQCa",
  "key12": "2pxg7A1ZyLfteCyqT6oQDvRWiSxGtHyuP6jJ8rNv8vXxGJvnzBEVqiX8GJKFYEkCJbGUxm3oznXUnzbpbfo4wwF7",
  "key13": "hL28z1bQizVWWRJ4PmaWyPLf8EMuDWJ6BEshUd1od89RP3K3HL7YcKbdq8SjhbZLb8fL7GYQHGHRDMBxwSCsPBL",
  "key14": "286XT9jk4pyxUP69xf6v9aEutW3RFcxCnLouDdnQwXoxEoTYgbazD94M3tkkeUvq2zWY5d87To2ooEGTtk3zKete",
  "key15": "bHhKsvsr44D168D7k5J3rujpcsTGqCaYU3uM5yTwdBLvZoe7Jhfh8tNwSVJTxQXKbLiLCEoWxagKAx1gPe3EYfy",
  "key16": "c2UxinR342kWh6k5k7wrLznQWNLp8ZY97WXhbxBtru82aCqg8SiYnejCW882prGECuGNTa9VP7A8MwB5j54HEgR",
  "key17": "4TYDSSDEZHn7qgGkkqqUHCqZsmyDCbkAzJEX7i2m6kkds9Cdn7cebqVDdcEutQC73dUABE2db217EYvs2HUtCSom",
  "key18": "3muJN4271UXpG9b3keo8R3tZk4LG1ACGzq7DJoiVa3AvEQAi4ACNPePSzPqbu1bjdaHq8wv2D7y8fjC5gQ9H3Ams",
  "key19": "3ttfCPBQwLB7Zn25uvy7ohpmjJi9QkmoqbTVGgyzHptiPmJJ2v3wSGYAukTYw9ZAGzHbQyRMvp45vkphrHNtrw2J",
  "key20": "3XMQJ89vj1HtRFCFSK8wME3wAdVtU4soa5VPcyNYjZiPbnkm3jEeZWQT96Q8C8HpXxS6RNHvVzWGKqjnZcCb46iJ",
  "key21": "32VrxoMwc7g1rbvayKwvM3s6Xsem1rvTW4FmPQejWwKfjsdYDPfrdCUTPQ37bHhvnGz9Xk4UqwLWnyo7hvsiR4Bc",
  "key22": "3jrNREmAXVu5NiNuyyTW1bk1eAE5NfeNynykfYB2tLnywdvvdXKbJsziphj611gpZNksLr2VpSgjfyWiFB6jCaHB",
  "key23": "62cQjyYSsZ19ZfrQ3eH1GgSAKRdq9T2jj69fVF9TTVmVPEdvC64Lig8tEZKok9LcrGPxJSsHXLcSDRjPEof4YSd",
  "key24": "5QtuLzBGGgjxnjCAo4u8G9Gu6wUpJUuZAKXK9v7TXkYCFBcLgCavxSHPxjtXd1QV5iACRAbDoDrHEXeECQ539qUn",
  "key25": "2CJ3jhVbtDBciEio7hmKM883CkqgQkfMYM4ff523FxAWaGLpJ4XBs8zJk4G4LXeDQTkBkMtrCkJE8Wrphoq14MiB",
  "key26": "5EMkuHASeLKYMP4tJ9DKLYBRgGFpGzomBhXgMjT32kzTeJQrp4dWE7KaWUpfJcUqTjcESw9U7yG1AGP6z5QDXBrY",
  "key27": "2mF5q3LCqtjVAT8MDPv1Qk9UWPbaYdKu3GgsRkngPMet618mcugF8x7SB18obGFoBC7UVcGmVBWwNiUQPvurFaBr",
  "key28": "3Fjq6YiAEC5w1SKd5USY6RGEYYzZvepPGt7FFBi4FvXs1e3ZT5j2XnVSqoA4n6jpTcBGFokGLz1QPVwztdN2aLyg",
  "key29": "4WKsUheHBH9AYsAPi9sgtLy5J6pEcUZH3ttRNYk5g8SWTQ6ioih1NXfHNP61exTbwbLxJwwHoHe9e6Fv6zMbdndi",
  "key30": "3AornzQLugCqhrVtKpjMogisdSJpmrvCUHFySnEUNx75cwF7VHfxPuLaHyn9TZoMBDFc5UpGbasQfkp5D5r5FqAQ",
  "key31": "2oCuhvcXkR8ARqHigDzvcFFrCGAA6o1uMZH1TxiNU6UgpuYNvqEPkjdJ4SsAdtYkuLFPd9U6dcuSwST7umQrjc3Z",
  "key32": "2EZTDL6WzBCKS4jt7YURBhrLH8x8cUF4GvP9hsk2brWDX9huR94B7FkSjWNZ5n1Mz1dEaAVKMA3DmKVscxzMxnn7",
  "key33": "2XsnEquX1dtmwh94ytYPjVD3AbGRP2kqg5RtSzVs4q6MkTb8SfecWBubRqVqfoza1SrFeRsAVn8trwd7rknwwh9d",
  "key34": "5HJitRYNnsBG4RQAcfTtJHAMKBR3QkkoeepArJHGvtFBqXNnLCpY6VGZv6ht3Rnynot98imHpEQH3h8KgyFPVyP9",
  "key35": "3X5wYfkc3DU9Q5QJwWxVMWPMEfuGaPTewPahpjYRosr17Hr2sdb7eB3tbvAtoTXHNWsUeBWQRpb1CSu8CiC22TTZ",
  "key36": "5wdYApKNL8REtYYgDj1uGX3g7gEFgjdfzYr3Psya97csZsoNKe28e7W2XVbhsAg45RD642LanUiGscmBqfZdVNUs",
  "key37": "fe2p4Z7q2RBCTu7ETV6FLAhHmR7yyCZTjos4FuGBoQdNL1fHA6UB2Ug5KAMef4xiAWxMGtpD8soMDs3JTmWVfks",
  "key38": "3kDdio1Q14vf7huJyxDXK11wvTyuZri8WpGMsDGZUSRuVenSXq6bdjxdT7L1xjxzoX4CjfPCGCfCwytgzzNwZGbx",
  "key39": "32tzMLD5hYT1miJ1yW31QewAp8sQTD9Yzhkau16mRKugN49y42yXfe7XmUkFbK9Gtd41exJwAM2zeEaqFYT1ho33",
  "key40": "9pLaemBqWuYZ9FejyA3QyJ2H9Doy8W2YychCFfhrrEyVXQ1g15HmTUUzRzGEw1aCNZNiJNQvTpAi21X1ScrVQnB",
  "key41": "2NGm1EDc2RZBudc4cw9LbpMV5EfYku9cv4C4e8RaKMi34yoBiZiev1aQpoW9NNgwjvp3ynojUv18bCCST5FsE3Ws",
  "key42": "3gPyQKzf2tv7SwqLdLC5Cfvn1Mi9BWPUTDEdrUEhtb6ifV6acEoGWWkVJ8KTyDhnrjZPEhzFLzj3AWsMHnE3F6Z5"
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
