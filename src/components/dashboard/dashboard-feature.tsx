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
    "3pn5qdgh7oYzkjtNozg9Z8yGUpJXgRJd1coc5EaVH8t4wKFeakNY6k3FLAMuNVmx8a4GkzMoVCW3t1bshox5VCnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wNQyM93iwoimvMds5YhLb3rpZsjmeUMY72AbVQhW2AHjqsYbjRgCDzy7uKaoLFjDJBsRqZwztsczH66zi6WXmit",
  "key1": "4PCkEZvWem79xDKRKxnNHijfeJegnkG2RGv3NEw6gnzXzn4JgmirCjnTH2xyvMnxbMDgQaYxM8TrCSFFkbHrkJra",
  "key2": "4R2ytcz93pdMERmeatzYWkDWJmYED2avTmUYywju1ubyoKmCKCFQg2kN5rQ3f2tQQjv7PgYSZk3sSdWdNYChJp6W",
  "key3": "2T98MvSA5oyNkxSpeTbcU36J5UGdNvXZv4hhzzPY4FKegq34ztv6jJpQM7H92RnkWpARLRHERNVvmBBmdUYE5YDm",
  "key4": "5HUrRVfMpTswcZQiypobYxkB735WfA4ffCimQHzWCNpLq55T3w8WdFYsgUPmAGnCp5RGoSHSTYCa5xtWAv49xfJz",
  "key5": "5G6C3zLznK7Mt2VzE79vgkd31BdBZYs2nkPj7VzEpcqTLcXcTm9dA1bFwxiUKyDkDk2FALr73mVHX2n7rjhSQZu5",
  "key6": "2bjnQwed5nF4Bet797JHRL1Lwz2h8wnuSnth2R8m747QDnXPsTrK3d1BgJyMCXkGzuhBtQMSbSdq3VXgoajxtpa8",
  "key7": "haceVRpY1ugxPt3G3ssdqc79sGrTG82CNzAHoqXq5dzugZCSDnDif9SgXxRHW9WUgAPqnH5VrJpq9MpsvvG79S8",
  "key8": "or1mysCz9GvpwjA7JfiBdCAj6A6s8XGQ9w61zMTKDZfXPBptq9BzMQCGFqpTTopyMMEYRukuwmu8886vSAe3SxK",
  "key9": "RBwHZoX1yqmWXKb196n6oJQphevsZMXrmq4h25aVZnHGQ4AwL8z1uGEb3LnRLaQgXezgpQUVzCH6Z23k49hCg4j",
  "key10": "5RVJPAYba76paujxQg9p5heC4DxzEb7FqRPS7iJV2gLAyXxefZcKU1QzkPfGDiDiKReEsX3nbMDpZ7wZQJTezf6B",
  "key11": "2fh7w2aGQN1JMXWk2yUg81o6428YDxn9BLZpjsHtpt6qqcfNTb97jvT9Z25CfgFaz3f6kPnGadXQapatPSnJYkt9",
  "key12": "5xACGs1CcpH7bGnD6n9YCVi3PFro7K9iVv93HUWPqwqWZUsKJ8VWDBuZGh72w9WMPJweijvjQ1Nx3AVQt7awptMU",
  "key13": "23WnFwCzqavdPDQaN5q1onmuPeWHKzpYArw7ohkttCXQTHPtTcodVmCWn8q3yFMA7wdo8zXq3NTjsYTN5zQCDnGN",
  "key14": "3Ekawc5NZPtEqkWviLEv5JbkxKigPgszmeJqRuZ2xrefQRLvMgmNxREtTBUPfcLeNQMzmYke65FxnDcHK2CNVdJR",
  "key15": "7U8Se9gm7ZKUL4EXpBuSS2ZHhfEhzRTkxkqUiCmTx2Y2ipEbEwyLWZTkoHVT1bGuxuCWh7RX5PG5HoFZmRuG5zi",
  "key16": "2Ua9wAFcLj4L9RC3bUrMdMrY4UTbudFHbSsrp2LXUirX2EuzwGnU8hU7neAuXiaauzLNC7FFZHQvfzVLCX8hnhhP",
  "key17": "2P1oLoxQ75b6jdJWzcsnApvcTcLdrdfhRGqgy6P8cKFw4NXHjTsfQdQjKSxrkVMEzonhhFBFjxuYtCLPdio4tE5f",
  "key18": "zUvRTBdC3CgAAyXdUgqA58PN37dF2B6D5vaydy7FU1AfQNNuj5afkZToobdxUSfFPZiAQndDsYbwbcvE1qC3SvX",
  "key19": "2dDBHg9RjWp3JCW152nvmDiErW33jh4rk621eVZ86LQhrAhGwVGC1twWyKHBtAnNd8ng8wPMUGfEbGqpJ75tFMUH",
  "key20": "3KeYL93i8X2eCrdpuCynZ7Eht4VNuotVVrzfcXUACsQxdZTWyaJrT5KB1Wjp4s9Q15mLa6kZgg7id3SLPsAZ5QKp",
  "key21": "4MC9U5YCELDdAhaRV96AhEmh7nPU35xnH8Nwrix68aieJjvckgnypVVgquHaizrGUwiqxX89E8Esn87eYDEqtjJU",
  "key22": "62LWEKeELnBdzFdsHJPLXWKabcTdVT3KELsyvwBN34GJ6poh7Dgae9d2UD5JvBfPMPMs7YvHm2sft9RBcL5z5wGU",
  "key23": "3LuBHQ3bwQ5U52uKQegDzrYHmUdoBoRoijipCpZbVxR57CYVi2h13uBWxNBkhVfNkjXN2QbwsBxjkB23v9kT9kJ6",
  "key24": "2J7SyDbSuFDA8cp7KPRoTkbguMwdhDMz5Y9AFwpyDMtKA6UtQR2x5fq4kiRW3fsh9zBeZE8CUd8NhYRywzk5EeBZ",
  "key25": "4EfUDS34QfrQAb2jt7xGuHzd6m5riFav9ofw5mAL5J7w1EbqLoMLXCb8jb2iHF2kQZfdDGeL7Ns1VqWoWdEKp2Nn",
  "key26": "6zv1Hx6SJv5hkCWoS6n9wbmvsg6Z3L34LvgDiX98UFQstnHQLzXMLUXNnWsAG8DLQCcvn5MJ1KapBKK7DJUz3yo",
  "key27": "daGNzttQLyQJ4tRBBvoToB4bELC5r5WhNJUPLbipC1siwEHUacirJHGTExZmrahWpMcNKFW9V4HJSJp8Agrr9Fi",
  "key28": "37Pao62ezQEFWwihtQ2sYYSi6rc23KFiZhsSSUyFYLMUdRpCWK6KAAupDXUvrsgub2EjfD6aLuSodNgKgcpApfTq",
  "key29": "5QkyrdsyhvHnT9Fuph246cLXXeNTbtRRVFKnbwza7vqw8zumUkbzDbVBuR8qrA8YE1GamFNGXHte9EXasVQk2thq",
  "key30": "2itCwogBgte9hEGbRLytqCu1Dkpr9D4N5pF6FvxmgZJPgLxcj782FsoemKFJB6MDZ9v1JMsCQdcU94Wp9wCzbKNc",
  "key31": "55fGFHpmisJXLoWeRuFbHwFR3unvsbyCYFhAZZqCFiGn6rKSAfeseKtza91AurmYk3AWJp41yvMEJz1ibeJTn9Ca",
  "key32": "4ULrVUutPy3KYqwx2PRrNWqQpW66UcCv1XpL1mhDpvUQFfSSy9z8Qw2aAJ97FmbaHRqNM6anasKrb3NFsRUsn9aH",
  "key33": "4Jm7CWsu9pJRFQUqJ4aqyLB4fAfFBXUMqscSS3jkQj9cqCJmJthqANDMnKMYtfRrzFY3VyoDRictPKejuZztykM2",
  "key34": "ZWe89hh4b9ptpKo2ajqT5izWkGxJxW8Qa7qJsxgsBvfPx4cz2rRVD3yimGSgHDHnxndubeUUk5udQqTQS1DSioq",
  "key35": "5zVwSX9hJXqwTumcUjqZP26rrg4cnb6L2FHgZ7VbJhKST3yguoi2bRSwiEHPdFw2BKoQPXaWEXh9HgzVEqALA3CS",
  "key36": "4voA327t1xZwzrBTHvSsMJf7DMQadPsutANrZLCqAxxhQYU4ewRKYwTKUEBbWFT8SSTt4HHooJCV1hn7bpB3F5tC",
  "key37": "38LEteapXX8w9T2VitxaVP7vbKhfFR88ddZTS7mPjBPQdSDXYTFUqqoqViv872TAXg7XtENEgt3HYCnbJfzsC2pv",
  "key38": "2fBMM7t2DkV58UAv5ZReFMJKxaj7vQXekE5cW6pihuag82qhA7xRGro9jgAgsJojqshE2ebN3FxVTm5KvggMMJQF",
  "key39": "2GkBLnTWtWREpDcT2Y8nsAh4Rjnrv6KQ44rai4bJuw3qwXbUjW51Exo23ZuWaLLhz7MjhFDAKm8AvNMrhBcP7jk9",
  "key40": "5gw85v1uArZhkCsUtT6Eq9K8QpZ68rgVFmQv66j6GZ2KNfP4TJCFsNyFPD7DF8d9iZGP9kBv56PZZwiR9U35ujFY",
  "key41": "joZKEkskiSAHSp5C2UwoJHGQG5uduyR5DKLuJHN5AXZo8RLD3TsSemD41z7HiFr4zPCbSyT972rQJ7MMaGhDK1h",
  "key42": "4tVx9n9aPqH5xDBVhvfJN1Kg7E4cKaPDwizRkDSbaWKm2c22UMz4oXoHBRfyCN1mV4jUjRkDMK1YJrCDKzLrq1Yo"
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
