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
    "2kPLUWrRMrTFXeedMNicrePzt9Vrwx72yjL5LaEhm1MwaWZd8zp52u4YEkizCpee8MZrFQFa7rBxYFfzGey3pH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DTvCjumH8JEw3Hnf2yhYnQBgu2Yc8nn8hRKsjtLV7ThLUrmh9MzQcUg4crDnopNDHGmLKWwVeTEPfqQNhngVcUh",
  "key1": "hyxCRnm5ghakxWfGpG6vU4aiBCbi59WYanzyKD9h851RGfVKJtPLqiEr7ybycqLXL3GkP8mu5m3uGJSVrD8chm5",
  "key2": "zaPdQkFssFPoEeSyqPR2JsRrxYn7AmcBrEHtPtaoMm5NTDPPzSvzmH8YDdTRmeyC1qzEygY3UGoggYsdGgccN5s",
  "key3": "62v9CzjZeoXBfdVby1Z1jEiKkqQ92mBuna6HUEaucv9xB6VkNj5pTedEDpPQdTKqWZrSouyodsX4Q8Y3rPLTrhBR",
  "key4": "5m7x9TkJtJhXy3fE3v1nKECEqYyciKLVHZS7NPVPJdXh7z4XWYHZ2R2AuC9b55utHGxLrRMmTuwtfrGH4ZSb5EE",
  "key5": "2gPBs1mU2Yo1SprsaGVjoGn4YbLQXSB9pHfjMU8pa25LxckSERsfhnTeKdkM4udWJutWAaS3rAYvtDNUeH6vtVBJ",
  "key6": "4yYupmrSyK7SGVtDwG6ja5QBaQRaf3AGMyS86J8yeZQ1sc1PpkYfPrhNhL8W5GZ9uQdD3budRgAkmADC6yE55oeT",
  "key7": "3gYnnzsBR5xYdESiG3UzajfpuivsEPMr54hLr7st2CZTMTec9cMKE8anJBf7CRB8wPALmaAc3uDVmcx8uNJGMfK9",
  "key8": "4j7YZGZpkWUp88r75pBDXTZob8jmkh1c3ymo7a6UYofiBk2nc2r9w7md6opo9JmUonFQe5E7nrj6H3QB6je8J55e",
  "key9": "2qoDAhn3XpjPmGNwm3KF6bXnCnaL2DrN7Gs4uhdD9uofhQbtyFMw112f5YdJVYaG1MoxJTtJk22D4W1F1ehFLPAa",
  "key10": "4rXjseQVvWvpMBMni5TeqdtuUYFpNgUfCWYeGGDTvRbxf2cXNnStVVYAHTpCW5ryt44NEUSn5zJwtD7vUrVohtZ7",
  "key11": "4pinCUgeKrgzjUCtQxYsgn6XHukZivXmaNhzAxFKVdBUwQ9k8FWr2bMqKQXmAV6kqKKiPwV4Kb85b6Dzw2mWMqwQ",
  "key12": "2QGjdjqmsZEPWERQ7fVPY1eoEQYVkUCFKhMnBbqx3nEodMSYYRhZLPCfTN9DdyT2rAwfMF5HB3EzEWArVBi7cZjr",
  "key13": "2ZxJsTDfPBvMmaVgcbBAecNMWXwWDi6PuJZsBEzKRkw1T16PoWaSjUp65ufduSEZfnenjyDGWLBSMMBRd7fRG6Ew",
  "key14": "2xHEwT2GC2wrEJkr9TRN8KHLYtyqn3Hdvvv6N7nhcsyGTyQtsv2kRcFjTC3seeC4u4wy5BC1Y1xGpt1gfYGp2GTX",
  "key15": "gNzcWHTjQnLbgrFiwbNCu2LUM6SWvyBeeJdMnpxdxBCdGFYFbmr7qcBps5QTQ7ESq3HR8Dk5XBdokUwdtyZ1JnN",
  "key16": "ADAiAGX3vntapQabLCEQEWGD3ABcMZZDofR6vHJtcEtv4f62cPKqDG96ztfrBDdYKPhxL3xnom7wL6swDD2jgqE",
  "key17": "3zir7puQuHqWWRXRgj16BfvssN31Frsc711XFi58d6KtPiPdeDKNTHZHomJD6vfNDaT9GWQz9NcbpVkwpdvjgSst",
  "key18": "3SVxYQjx5NLQnYHpLKWCgCUz4tH8cjAmTDB8qgMzQx59jo4KsPpbsygxdmezchHcBnXyH7gHvMpiiMq4pg5VfnfB",
  "key19": "2u52UYrFM3i9GLkmwmYhJGnnCM2bhKgmEsAJv2T4qxw3Fzz6kHLRqn45dym4s9MqxRRm53tnnpmNWocmRBE4owm6",
  "key20": "2dAs5zs1a1DzCJmbbLaeXSxp4cnLYg4pzQRsja1X1MYnz1vjndQ5E7kY3p5xA8x9PsVzuE693aG8Ku2Cy5GMNCPm",
  "key21": "8h1y2JAXrWt5C6p2EFmJdNJo2hx7NMLmTQidssHsDBqyrN28xxXsTF4MiK6aznVAUTRa9xcZa7AzBt3pKVW5bej",
  "key22": "2R7udDxMvak38tWVk4bpBY1AgZvHk8jDA8TMySmYaeMm4dxqeiEeMCqnHKioPakdbeSgNLmELMBDhGH8XrZdeMGx",
  "key23": "3xu96Ty4qYbPL8hURUEzgbdjRyVP5GeqoaRhWCyzCsMSonUsRDY5bjuVQ81EvE3EkebkRdNw6hpuX1c85PCQRd8J",
  "key24": "35BUAvAs2mdiJFTg2iqyxRi5DxaheeXiFxCf4NyqAeJ8inwkNa4x1cMVUz6721C2mxL2mAn1qCuhNpNJ7NkB2VvQ",
  "key25": "2Shmxt6VK1kMhPVha8b2vz3sVSc6B7JnbKvSnUnExKCPbtRsmEJfQMiMDqq7wzdDtxtnVDEZBPYh2GjE4yxw3U9",
  "key26": "3HcxYt5ZU7YYSsRac3fNhC3GEunq5z18dYA9cj6RSPqYckJHCSvEfAA64kYLEVgfVufzZ3xFJdDqUZWNPyMmvuJL",
  "key27": "4T91rrR84BezsL7Bpoz6k1xw2kv2gxBps2aTkjmvsV9wARUM1sWdmtMx3jrLQQZWosCVVGfcAibebdfdXypFV522",
  "key28": "2BzaFqvDFHTzskZ8fpWUirV2mTYKjcP22CFdss5zz8TQQQPVjJs6e81ZTyLFPmo9ZE2YwMhDZAv3crbmJyAPqENP",
  "key29": "2xGyoezQE4fGq9q7wJUwov5aZZfmMraRWasHrfT9NVLbj38jEu323jmmDuhoCNqRB7gVZasLT2Qyoskn3Hdqj5pB",
  "key30": "YaKNKijhiwdb3c81VQkBar3qcEnsZhFytoyciPXNN7qSe6KgPXGh3bkawth9xs8mU8CeWcMivvU4HqGxMzbfA4j",
  "key31": "TK77PrMzgQUZ96cYfKy124i9NShX1Me8yDNnyaTQtpERp6s3TFPghtMAHFKCDXxwKhwnkSN14vDfKE44X5hz7Eq",
  "key32": "4MC8gpqVHQgk8Vc48ttNHaN4NXiiqYicZkNDknxUNXGM1RgKGCMSB78ZXqNa5y41PaKHM6EFeSSejehzEn41pbaK",
  "key33": "5sATV4Z468VAvQkVmUhsn4iAyGcCddegLzSne4HweAMtsjjpGXhdAcjH9vVm2WM8YLMABuNLJuoGNTZFyf7EBen1",
  "key34": "4ojAziV9NH4pRSGQustbpvZpXCTRoTQJ1xWk2XxPcdpsu1drhjF6gAz2pS2eCgzh1r9MAEyMHS2w6nK2kXz1seJG",
  "key35": "4yh8Pb6CnW7ekenRtZsgyw7fy3HTkqSMmTr8wn6j96a8xFFMFUv38ZCeQt3gZm21r5hczNKMuVF6bdQaVsD9pGbT",
  "key36": "65b658qh8AHjgGgFXYj8zoQsbHuRMp2vfyMUbk19J3ZiV2Upo89MEJF7XKL3Uyc3D3SK2tTDquJQq3dJpSCxgdTo",
  "key37": "2YzY4bjJKtZN81FGRTnXPhVYdSf4be1reNVJAER6Yi7KftfqRJAgJPNyVycurNh4Fey3BaJtpgvG3Fi52bWANAci",
  "key38": "47Ygc1GzQbDqPHocKx7BrWtDHDmUAMy7vprsN37V8h3YxpyRQPtWqeZaH9aY3UNHxDSrivZQdDYAT82GwMHKbtb7",
  "key39": "3EjqGyMmR23S1bfkQaDgosi5C4o6YePtwu7XWs4WPskz6RzJFav2KPgAxqHuKEKEA4dqwM5q9epxrMMUoHoSHbH",
  "key40": "5AQ24tpD8VYdWzr5D2unFMqEkrxeQgKR2x6xAzvHc8dwUoYiYZ9YDMh3B2V3J2h7UkbUFEjtyng3nC73rLt3wEXp",
  "key41": "49LzUxqiMX6BzSkroTK5coYsp2VS9DvWiiRzFtDTKBVm4SjeWVCZzdrt62M1Fpy5AuyKXRnRio6YrXeZTT4CnooQ",
  "key42": "3qdH6nzN6TW45u5SDiPERsakQQuM6GGZBvyo2uHSjpSRCXbDMhGkWAepR7EAp5X8pRk3qfyM2heGkogtt4751fM8",
  "key43": "52qWHkPXhgy55gaghf6sPHXc2KNTWsdYs4RypJGWPQzLCTUns41YPhhUFJFeeAY9g9DYrrUDP9wwFtRJBmrkKDvc",
  "key44": "3tEcW82zV2BrnQ4bhkFiweMtc6QufBaUNpwMmZ68672AoTFmmzqcX3uS7sf2YqDwY4SLcqpqk2RS54BBTYwoMoWV",
  "key45": "5TSwtjUj6tsQb9LkQyMbKaLzuawL3oXgHHYb5ka5nqggvKzT913RcNHM8dQCBGAJDia3ocCJ9dKRm9jxQzctnrso",
  "key46": "74mxmBQiu3WRrA9Vx6dgZG1R629kJEby6Qsz2zhgkjwSnMSphxiVdZpEtV6Z15y2zD95G2Bavk3QvZcdeMRcNyT",
  "key47": "51FuHQcEQX3PDpaUwfDKmKscdPcuyeZS4ssxXSiWko79T6WK8JkYd1N5XZHWWZbwfs9TAstxEL8HCzzor3KzYCSs"
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
