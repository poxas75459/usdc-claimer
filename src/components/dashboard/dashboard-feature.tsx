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
    "a71UJ92PhuRmrKGmbXpePAXRAHen4ddLGKAjZPgQakp1LQJoz9M2c4MZ6uNVVUs3fPAKAbwMYQAxNpAoyBVRT7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZMKHvksDBuunZc2rq3zchVuBnEazj4MhwJa6TqgEbi8yPUd4wTQZTpWYRPENzgTTUs4JBJ6XvF2xhprA1UogRF",
  "key1": "RzqUeYY2kgvzoBLxFo6ZUe5twuDoUFFJ1iBuzrAot2S8iYbuNkJg8w5XgCkpLwADucCmZV9FvDZ2njZzqRoc78a",
  "key2": "DD77ifsh82jUe7XWW1Z2qvZgvrY48xHQfDFm1X6KopdHeX6ReAnmfAU1eL6WXGbWmGurcarH6eL1N99r4aaXSBv",
  "key3": "2gbx2Vs5f8LZMbeJpnE124FF2e8mDPFkw3qAXKTurJhkxh1b5GdGtGpCuc6dKLCgqrgxY7Wurqqi4b7cy3uKrY9Q",
  "key4": "2TEtN1GVPT4gLunB6D4W8iEnMJt9KUbcyuDxqo2MUhpZbh26pPa66ENKgPvE8DfhD2efgVkHvYkbS21fdzNubkk1",
  "key5": "4zQzyqTPrbKXuepNWVYuzi1FF2taufTeBoNzhd8NGwY4kQfy9MEiQVrfZURV21fUSz56XX5WJrxh2zPiCy2KmXqt",
  "key6": "25x4qTuSds2j8nf2BdvFVwg1Nv34mzsKv1HEHddP4p7DmBhRivdkEioqZS6k8RM1iaS81J5euZQ2biCVi6srmBfF",
  "key7": "54VxhWamwnFHrCUrhZBied7kdXLbEJtoutDVi1eHzQMBiptWSTf7jPU2umv21RznVJ1uds4XXGH6ZEbxw7bRGLs7",
  "key8": "3k2qTkt9JyKmer3KpbjkXBD7wPmAKys3TbiVcZb83EmduHpjTvB1YJucvHWQvgtmLtMK6e5uTe8NTpqnrHchDSbZ",
  "key9": "RX21quwDBbRVErB1cy4y9e3SP932zKVuyCxkVARM9RzbPZGNY7SJ59iWkHNJXoW261H41B6T4bRx6TpdAK7ZLVH",
  "key10": "2ddgCvywDrQSTSJn3TrDpgpqora2p31bGxQf8pwojMiB7Ez5Bd6dHUkpGNgCdsqyqnZkS2aKTGyV4bkCq5C4uWfJ",
  "key11": "2SDBaA39phJJKuV9Z5HprxSjufgDGsbf76nq8NcUWDKo5u5MWJCSU9CMJnWq6FsAGAC42S7YaJz6GYgrz1rnG5Dd",
  "key12": "Yq5MS3iwTmuc3boCUNHuttke51fagG1myrS5Q5jHsnFF539SyeKf7tXZDhQoKbnZLcjEbVB6Kd7QMxukaV4tiqW",
  "key13": "3XaHNcyUcvmR8iMffdW4NRhmU7qQ8Vsk5qGR6BsbizgNkwuK43jMDwDEzdQMRurC7gUrhVFuzpkqAWjoF6FhoiN9",
  "key14": "2qf9TVX4UmNdoe8fKkBQBXMqH8mqkzDnb4icY4pFJ3o2EedBHGC9BjrXZWVA2k5SWQiBr1fQHwxhSoMY3nKA2d6z",
  "key15": "24Z3Zqdwr4Uc1VgSajr4zK9xzGo6vSGmcdTu5oTfS6CRLT31QximyHP5QKqrvLfoeDR9etzQmfCpEd1dv6ZXuuiK",
  "key16": "3pC7mG7QqGfkeVr54QG89zvSgkd4q6Q4iycfnyX9utL7DLBGQjeN6yiJyxdCgtvCw83sAcxwvT6dUisww8raL8aj",
  "key17": "4u7BecX1qkr4WLVCwNJNcrJwY1Nq7xXsPAJve37mJT292MBPHAc5h2STZuLAw46apRFDP77GQUJd5WDNSarU517k",
  "key18": "4696zNoK8UGbKS7Nj9iuKzoY2VMiP7nf4bZEiuvCrnp13Nh1Z11pM5R7S6eHWiPKod6dqresuatPu7bohziavwBr",
  "key19": "2j21XLuBnhZHGk3zf69wvxBtSzegXEKNU4wE5BryWFoUwPE9FZJgGSggUDGETA19qd3KN9RR8cJB5eG7Wne3wMif",
  "key20": "3DvjpDV5KJgdtnkeCBWMS1dfU9qVfE85RrkbqWyPVTE4Q1M5BDjwjyAyGF6L4fEQanmB9T9FToAcxzDEzequGfLP",
  "key21": "4HPjoFa9AdNAzKdJsw1gPQxNBMo1GL1hMK4G7wvPD4XgVuPd6rDwLS1HF8zRuv5BSAnoKfZr74cgHBWPsmDAtsSQ",
  "key22": "3ozvhNhXcxMerubCxHXf7PYFkjSeCXWfr3nfqjcxiwTPwNfs7cH6ahfdJCBWFEYz6SSN4WNrSWpDN3p4a9vudkqV",
  "key23": "5jdNPPTzDY7EzTPgzpQdbZv7bX8MUfRAbKtKLenYUHzqnLX8XGjLyhu5FAU16jDiKG28GdAn1dHhVy2AdnR2Ngv7",
  "key24": "VJND7mmVBHYcvmHD3APsdDig22zfnA2sCYu4NCVJ8zve2cv2VG5h9gJQTedagcCnAerUBeWFXtxEeWTzbGLEYpL",
  "key25": "2WT67hjc3ceKTAA8RZmKxvSRsBjjx9QqndWA7Ev9DdMgR2fiSJXEbdNunV8AAuFm38ErDW9AribARGswp5V9U4w7",
  "key26": "2XvfgpRUTqwTbirPUciXZwR17eKBPud67qmDLaK7svWUbJejmdBK69u2XBSAqYkpjHoGa4J5Yf8vzkRoSVD6nUni",
  "key27": "45MeS2BygdDZAKEdXpJ6RvnGWHJY1mbX9hx8BfBuZxEpot1zEMKuRGju54zDUBm2U8wbnWGXM2gJ36trdrfDeTzB",
  "key28": "5RtQznV6FBzWy8qE5S4EnxioyNnY7Lewbi53nSkghbddR19JrCHnWHYN5YBE8VNcPqCAK86rEEGN5qE8WDE6yqU4",
  "key29": "2n5YnbpfyXmdTPxa84N1HKsmL1XWTan6AT2SnSz55ioj5ef39rLmCTsHunqAVC8iD6MwrLgaBxF9ApZ7eK7jf3KG",
  "key30": "2XbKMmJJ21sKqzmw8WmiDuy9SXfrrTcbe9pvgmeyjtNNrU6ED2eUcVwETAi7uTCUsj5PZ6Wj21y7csQH4eAQUXC",
  "key31": "WmAk2Pku9ugwFrye5WcdVTUigzN3zMgQQwXGkMmM9VcnX6NnDTde79Q4vYqp6shpNKQzG9kei5PFcqxsMbV6j58",
  "key32": "5T47ASoM4dHbcjRv3u45hv6AXV5gnh4osGKZey6X6FAKFB33kGjDwBacZ5L1aBDHwfNacGyNmwmqvhjN44uh411s",
  "key33": "41Zp843FTNC9bwhwatzBgj8pknUqS2JCDHAaXdafPEwptiSRyqnH6GXVyudMHFamcF2GgFZpcdX8m19xchzwoNB4",
  "key34": "4FWaWbG9xvk65SinVNFdUe1UeNXri6yC7WawcyjVaKAXvAgBe4R8Boa9WuKbQmLTp6pF1NL83m5tduf8fFTYLbVc",
  "key35": "2WLUPjCBXfRiLh4tcGKnmZdiQK62sQMAvYNtSRrLG538rBoAYYr6G5iuJTqCGBTkKtcpejvCQUJ6VjyiArcSSWj7",
  "key36": "4BUDNmmzLAEGq94zF4tQS5LWCKSghtPn2t9gbauSadxfkQ71bwmP2VHfYrrS9wu5dB8kVP1TEquSanRn9bbMJJiJ",
  "key37": "4yXpqptc7raJ9ata9wSMh97cA2XQxdv4perRpSgyHa23XYo4QhmcyeyebJFSjvuHJ45RAghgTB1JfHpw6rZpeEvp",
  "key38": "3nyaEf3XrXr4rAVRuvk8y64wUDk9d8MHhqnqeJih4QkvC9ryMLKDYa9Vtzbtuw1BuwKduq91zgAeHNU4Mjmbz5b2",
  "key39": "3E9Y7Jxa9K1cKrUE2r7NpVkWnxY1QubN2BUM6Aife7cMVPggH7H78Mqd7yZNQpJN4JgxCmeuBdCDaJRAzoSVvo4o",
  "key40": "44rLA3vbCyV8QYGvqBcSiKpT8nBhV7ewHPgpDroLVbbwACMfwRhNYNxrY8jb6C9JwWYUbQBoKUuXHnjHrY7zWUG9",
  "key41": "5kdHCadv8b86QPFYNSr8ZyKhQ81qxcukNscQQgVp3aW9ezHDr3LD84m4XdcokHSPFGqmwv7Hb1aYod9a19REj8i1",
  "key42": "35aw9c9deqQXNL3eb8m3sWdtgvR1oh2EM3KiMQG3DWcyWrKBnmjMmFXoZzyUYWfubMJhjapQwgrrUTTkA53R9xD8",
  "key43": "25CBqMgXqnArXgEa4f5Lsk1RVUhcR2YJdNxD3csbAEXqcwRjEJLkDnW6YaVgPrN1yaqu6Xc3eCmxS7utkLSKHhzh",
  "key44": "2HgfwcVqNzX8xvrGTkKtM4dSHEEta4gJvstEdq3T6Wru5hagFLkPvKkxpQKTDadDA7W1kCyreojfozBjv9X6qs7Q",
  "key45": "JsrLsowh2s8jH4mUgtJTZEdjktMTe1QbCfRi5ZPagrHJSz9Ck6j8UP5mQXwPoViFz86Gm1rw4umRHPM3EbxNNiF",
  "key46": "LLRs1MrULU2AiYgXWPkDrTRqKzN1EQomdRfxgVpSejJC1p5Pu3PNPhN83L7aZitrbkUWztChRE5GRe26XHkY9af"
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
