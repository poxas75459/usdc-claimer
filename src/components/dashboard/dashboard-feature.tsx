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
    "2sWdkGgnxj1XCq2sEeuz3qVvF9ws3n6RNUHWwx8BJ7854vyByAkuci1BThnYERhkDnyW8yhmSudguv9QkRfdtDDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pr52ZS9sKxkdsVL9S8wstr584VaEE3vzJoHWojyXkeLDZZddnink86qEjb51wsncgrat5QSKubo2iE2isE8xiXV",
  "key1": "4i7XU7ZJmk7SRyxKrvtqd9w6yByN7VEn5tqWdmMBReb5diChq5PbV2LQWSnKrNZ5ChryhzdL2nxVto1U7VLCzEBH",
  "key2": "2aCSEEPuXm4ySDYUX7MF9pVax6Ad68zWwwximc1Cvfr7Shvgb3nBBF2cokf9P7zLLj9doJUratgkqyvh7ysa2V3G",
  "key3": "4BxNzey4UDdK66gh2vBgTicGZT9qp9t79peZbzMbgpAaX72Te3gL5iUxV2rVRUtqKjNUqMqnuegKUG2PsksUs5AJ",
  "key4": "41cmBeMX2FFBotWTAtxkhSgK7Uv8YXwEHDZBduyBLGeCm5Hjn2AjHqNj4dmDb9WTTCF7hS2w4xQGK32qZ6HMkWSe",
  "key5": "4oRhobUXUYhbvw92iSbt3uxgs4GeEf6Ay6BXvM7JNghSkmM9NY21j7KWurLaEppLeaM3kNf4ZnxJWHJAGeHzWGBm",
  "key6": "5REBJd2oiyYNUBWhWS3Z6HNBCyrLZc5WyTdkPptp7QbdYH5fsaAuLKFvvh6u1nidmR7vCQudSGPjpJtVGdRiaCxj",
  "key7": "65eRAW5xtGnDXqTQJQ3AbENc4Lhg3Q7aJX2FshhPx4HuAqLNyZhvoKvRrwmqdGVkrjGWkF9oV9VN1PcAj3dPbpFg",
  "key8": "5FYSPB3XVQHg5Bz7EW43R3WWUesH1pZeoDk4oJSSFcxBWzvbm2r2XpnLUdpWgxPGTZfXM53EJMDFSJce6LwXNRw",
  "key9": "4sFXhUQfnrzGDV9t1V2VvM2MFikLq6wRai9GHuUgoQncgvjiX1Y1YNKV83D78P3oB8eQdt4xmE7Tcw9wtogzQjCF",
  "key10": "54vaLsRYbjdZgs36gVgDDnjGLWoHEwYoZ8cMt1Ke8WYHR1ubr91RCsZKauE3Kd88B9UMht2yBrhNfEwN5EUNiARi",
  "key11": "3m643EbErJmG4N2QG7uNGBdyQ27p5pt96De8zLuFiGMsD8sWuvJ4HbBr8YuDcxPYmvUHRinS9qNtB2JTb67YkqTF",
  "key12": "29bmDSf5kFWrGKTCyW1qLYUmZLPQGfPNwyp6bzFntVrFeDsHno3UXm2S71CJudLxNBL2imiCh2FTXreHNMFEiMNy",
  "key13": "3SMCmCpATtG1maaDqFhnwgiYg25yH8Xo3t5kAV2M6ZqLojanAbVFfRu8fSXUvAnyJGF4Uj8pwctPWg59U2tpAjmF",
  "key14": "3upBpsyxoSV5uspuAXUbj1at19T9NLN5PwD9aYdZ8xNDNrqpwBzXKn1sqthssYWYdPFmR9QxMXNFpgMoV7FyAFSe",
  "key15": "2AHj8q3mE61aFTyuE5GVTRFP1kfXxYDD5UEFquzAWNcs4L1UzsHxmsi2EyxHzU7D36suND3odLMKQzQvk2waJtxT",
  "key16": "34tSg5aKqRd8Z2wvRb8gqWaHFoat8AQuDTaSFKcyxdcvJGLqbsditd3sUvVRemSothQEvVx5whs7rPMtvmFDqdzJ",
  "key17": "3YWiMz5iwhowURN2SGTrxw8AcWAsRWooEpHvTQhA4hYbfhhoGoeyNQDvgDYezdQB2iVEQBdCeh8pi3HpHFWbpENf",
  "key18": "2uEm7NpTazFDKMavhvXpRXb5PzqnGCPKVyK86MqpfE6ZNSnvkgsc8cfSefVvNw77swWUKj4CzcHjKfYwLCCztWu7",
  "key19": "4NMucphowWxEbFETFcs6QofECufQcMyyoSLZSD19qrR742yQUfmhPN1fUQqQewP21ddagvZ95Kfzqstb65ybtaMJ",
  "key20": "MBdxTUSYMXEW8u4s7p89R97xNU4pzXHRmxTCjX3wZ4E6qB8wFpGtiaEv4pjXrdjkCHiLBFg5vXNqeaUnAQGSXbD",
  "key21": "3qNr5rgyG1XtgpJNahfMuwxoVn3YnoZeHeucT6zE1Svo2RyJjk1cWdPs4qytewYJZriXm7SUxfUKvXST5ujV2fZS",
  "key22": "f5te69UsEPSGGryzML16gWpg4euDKyrUTqdcBkiQywmxYgAGjgCmYVBETuvZq7vv7dieG2ShQGfrwy7tQpTTUmh",
  "key23": "4uydTKV9cKr3qMUB2o13WaqQt9gpGLWEYbgHEvfdCXdA95k5npbamuDtg63dQvhoeoTisDKHgrusKZPrYVzjuzet",
  "key24": "2wRa2pDdLSBrztprfEt8uEHtqBsoAg4PAThHgCfBpyRHTWdeQBdyrduukZHmWyui5ypyJ5eezHeFLh8R3M5aHsKQ",
  "key25": "4UbmGT8WVvxPpk13Y9uUuoGRifDwXYKqaC7ZJD3HhkiX1K3vefMroN5AYCg7jEpAvKLvv4kKAdPzGoP2BKhc5HUx",
  "key26": "4rwjzQ5VEo6Y36pVufve2DHN2wrZRqzeVMG3DLjZQYdJ1ZA6Y6f7aXCwxGzEJX75751RUzdBiMfNJFVMjSG8mD5Z",
  "key27": "5AS8BvqKo5YfRyg3m4BkuFE7B5s8V2H8hewLuQQXhMzG8DPuuMub7CpR6Y43XnL2RQ3KMJt51wZAPEkeSKahHrKi",
  "key28": "czujTahtYZrQnbCFEC82C3roDZP2aXqFtrLyXLELubmYW7sH23T3MzpY1BtdkghDZbGKZhBBRU14FtSKKEfVY6k",
  "key29": "4yNUvvWSizhqV7Qjp4JiXwvHdmwF85vvb7kFwVSbHHjhW2QHBfwma9aA1gALk1Vb8VYPD5d8aAaKAjB1y3sRKnEE",
  "key30": "2CdZTZ95SrAk1XgWFjdhoJDH7VajtuxPVsrj273MmRAbifwNQCDbmdvhpmyUbogJXgpCnvL6mnDnwMkYKpJH96hn",
  "key31": "bG7yaW6XiFidyyXa8bRrWAgnJKihHMzo4RTUWGQkA85MVvR3NdPUXPDTGR47Y1zkMoS7xxjZg74cSg6es7VCZZK",
  "key32": "5LxGQfGuZTGWBnG3FRPsNwtVx7v7LVqfTd1MTWnaT65LNHTk8DX6LBCgjzHLHobhtLQKYxCMDjWkRfyFCPghWtax",
  "key33": "3zPDcEvy183YcrRhxgfAWmH2CCTGzgthKiD9EeEeAQ8uGy4mtZkpRUvup1WCrh27H5KxCAH6VeSoev18SF82EtvM",
  "key34": "2qShcuA4RHfUagTyEej6rruB8BQnEfCEcuGd57biaKiAY8ffhbBshXPhFXtf9FkoV52r9hGW3JXRyd4T6vPdjkKm",
  "key35": "2iotmLZGEiPiJBzvbyN4s9Un7Za62qM7Fk1b6L19kpCdcETjBNkKqvFf3vyC6e8wSNEjYjK6mLVfRSry6mjzgnaR",
  "key36": "31q7fU1C8WKFNGsaX72n7Dyq5gZxcm4GjvZJSXZ7maLAaE1iBZDmwDVCskWqXzAmaSr5M4ngMsoQk7WsX6cNDqMt",
  "key37": "55mLz97o5ysNL7wvxthdH9UayQf4tsqE3Y3bmF6Wk6DYaMF3GtFujxcbKLYboEVay2hjQnh56ji4Vx4cm1NkHW8d",
  "key38": "3Cr76Dm5cCjBtpD8ZjGqQo6EXrNcai1qDsSwZAaj6e8rjUwH1bpfp7aa4WaSCn4WkYEkELiKWocUMXDAEjs6QrXA",
  "key39": "igy9e3LEwsuqCVL5zXL18vUxdr175ijCyXLh5xcbtfMWzZ3RT54sYXaBtj5kYt3MmT9St9MyTMUfxmciL85u5uQ",
  "key40": "3gRa9ZhSHFLBPCtURVPKnQDiYkx2qMT9Hdj5U5DYPPh8hnYFKbuXkQ9y2uG6CuuBNZvA8uDCnvFKbgvMHfSnKo5X",
  "key41": "2bArJUC94F47ybR4FHkDv8i8hn6jVyGHXLDt4wejeezQNdHtPaMJFRukYv54amreYyVYgFPfubXXzt43BiYJNwuo",
  "key42": "2GyfFFwEy7CftwzLFM5pMhFtkmmhama4YxzBbJTMu4MgvBegqM7nH3zUE31Ung1BmPaCaJyHcAir11rnbnkwKvd",
  "key43": "5MGMHi8TZS4LDsLf2o4ojPXc6DjCXfTahqgWzdeCXpGirYX5YeqyVHGhz8yJzcBLTjbMNZKeh5Bg9wnYyrZW4MSP",
  "key44": "4deLruN4M1McnuWLzzcNm19igMAPBNPpCYnP6KAQfBkr8wHC6NPifq3RBza5Szi6C7eqcny7UdEJ8h7QTqB6zxdb"
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
