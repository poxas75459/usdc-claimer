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
    "2h8YBzqx2RrmpHxiGwi2jYjXtguPyxvcrc1nSpFZdDFcYWSgA1W531AEbLzAuqc51iLE8b9m4F1A5stRR5MuoKiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2whFxYmt3YUYvxanAz3rtuJHwVEG1fhaFGWWP2cT8vKpMBjTaqZw3u6P8UE4MJX4EH7RiK4Hfn26gZ9qTBhCa44C",
  "key1": "Kr7qD3nnUocNQPbxobdcE9RQee3EEwcCeB2jcCnRwmy2Ej3HRn39bX1iMZ3DQ6Y5iyAPJFTreaX6atnr4JkEiHq",
  "key2": "pgun61A3yduCYv2CFvUe4Wgt5Saunfp1vExX8DtneX1YXQeYjtqrEoQLRbzh16Zh4EFqzAbEcd5bzZoSTeVse9e",
  "key3": "4pFg77j1B6SuFHjGbjhTUNVz3ereedcoqT4WkgiU4nk3PfCiDpdVjcJExFsbVpW3JeiVF7j1R66rEXvmVBptttTu",
  "key4": "r4TTzmgXh6X5Y54cUQDsfpX37dzx4MPDPWRjT4TJiBUuSVQiAF1PtjVJZttU9PkdmUMJBUvphfRjNH8PMrZ71rx",
  "key5": "PArebwfCG36cUfxajZcYsAZYNkwaDzjy1TdSSsFG49jNZHNpbVHrXTHkqwQDqpFUr1rgvdGEcEzafqrP8JGhaJM",
  "key6": "23tkDGtdLAmfs8dC6nP3o4nNZ9iM8uRLZ4YhWXegt5BrxhPb4uAimZoUdvGAFUp1qnomo9g3RwcbjdEKqsNW6Vxx",
  "key7": "6Nnp3CysWtRrrZhkci6GbRFex4r4uZcbjpgjjw7aWFi5jGQqHXqaCEqyyhUSgXSsVCyxSXHNREkqAxmgsbUtHvv",
  "key8": "bXYRJ6WFPXQSRQoLDK35axu4vdTgbsiL9CYNx2ebDgiYVeXjMXuBQ1pVMoZXoErv2Wrui6eaaWA7QALA2a3D5h7",
  "key9": "2YyeQEeyoiZBzc35arxM3UFdcppEC4poRRKU5LmQWxd2bTdgTrmYiKJ1irsDqvqKnMv89jA2PMF9ycXEPx3am4KA",
  "key10": "4tMrSCjxhrm8ggu2WnJxfV4B6c7BSs9PyUMvmfqocem4RjpdGRMMBQYT1eCgqK9o8ehBxd4vqiucbS25ETUSB2hE",
  "key11": "3ACApfqyjbzKgCC4zN7Y9vVWJ36MPUEYKcGexs7N1ZVT6u8c3DbW5a2N1WUSSW62T3QdZ2bujdjoMUic9KXpJJXU",
  "key12": "2o4vg2Jsuenq6FvkfhLsH8hhjEi25fJCYVPb9gz6ZqmL2K9dVuPHoDWm1DwBNmKPbGYKPEiQgsrTCX3GvJ51KaCE",
  "key13": "4BjbUsyGryU4ddVumsrmHjpRQuvV14WMSdDKR1ijB5L7zVZVcYCM3eEJBaPmJDAhRtbaXj1yVSciyYqJR6Hvd8qp",
  "key14": "8XvHBosELDZiYEGz5My18qNwiXRXrrBsPt1cnH87JBsQbBzBAh3uHKfRK3oAG88yaCAhjDnshm2H56Y9Dy9zzLa",
  "key15": "66KK1rQWw2v6BGSe4QM2iWGxxikqEudfbipV6wRhUyHpNdJz1pHcvx6nFbbzL3ouc9Uad36ZaXrVi9WuQzc9yv2m",
  "key16": "4Sur9X6WCVVqJexS6CsApEox47sw71fW7qeBjKraH7V11naoR9597P7UYvDt26m2ef7fVx7DEiTLQRD8ocsKxUUi",
  "key17": "473D3Vhq4ZQAfdoCZWe622tcQ9bQfGzDY1EAuB8g8noN5WMwv5ieEgBRxEhkX2UZU1xqnrheneWkxrGqECde9PJK",
  "key18": "trSQRnjwHSQpqy1Jin3cznnkFUd6k68qLZGrBN4auUmQ9HYGMfR2GG4U4Ms8fLsLJyfMW5LatJdWLhjyCTcpBEB",
  "key19": "sUpGc3yDokBeb5pxa6PYUs99CCLM2MvTNSFx6hgmtVV5yXjk3nt5Q3Jnwn94dKCVtCwtJDNQxCUv5TrnP4DubUG",
  "key20": "2nhkvcf1DnzqQQ43dSaj6EDAbUh4iECNbGngDQeq6RQrqA8beStcZsqXE2JNdVCs6PMoq7Mqv4Rva8MeX23yxcND",
  "key21": "33LWWW5PxfjHwUVhjtybjf9KDW22DL1u8kjDUUwLpGALWNF3NsW5sqzGcATCiMc35ehkVf2WDuG9LNB378dnGSdU",
  "key22": "5vcTMwxhSicc4W6nhMaYDu4DuRnpY37ErE5H1LSraK8ZQuxuFhCB9J99BRUP5SY6Z4LsTyDsHYFQAkY2VmRZQ1HJ",
  "key23": "2tnJQfAcxPTbpP44fku2aL63dGW8fvfZyj9WUFFNiEhTXMyLx7SaTzsquvxi9cmVae6umNGFtdNJ7L2Vudr271SE",
  "key24": "3AtkzeFC5d61i64eJUccwoDX5zRnsQDdcm5kLGwqZFqTGRninTW4SR4AxFNQAr2RMW14JU1VWZcHcXM8HrybNJSs",
  "key25": "2RHPYYGxDNn4x2Z7gJTQxRM4wnD3MFRsurQgLmahaDurLZbfxuAcbL77AzYb28YSBCYJo4K4yR8JBTsj8UruEDiJ",
  "key26": "2ygHTdJqUueMXehjySLjEFQ6E5eA6ai2HCLiH6V42EDburHcQHnhqS3NLQXctZQNMf8s4TgrXxyDctCYEbxf86Jo",
  "key27": "3hdshxtmKzVxMXytaNseCGmyC27QH6ftKGHKtygysnPmA8vmB5w1jHZmFDAEJehej86gkFEZf6iQZASufB9YvDdd",
  "key28": "29bzw7ybQ7dds5MEXfdHMxsVrerScJK1jpbLGBbAb1qVEVGTGtmLugRAGXqBWGAE3DwsdJJLCf6DqXW23jG14pkD",
  "key29": "5apx23xu5DsAV6TsauN4hxsHxhwEaUJKifTKcAiJmwTPUFYiDKCLmFuvkVuUbHZb7CXSq7KJkgE63Cing1D7xURr",
  "key30": "3waoVEoUfWLTmvnR2aHkENi4PFkfH8GbFgLKhaV8PWhxcxg6nUYKT8qcRG2wTc7eKPamgaUxEuNPLDKAWSWdDk7p",
  "key31": "2ioexj1iiydijyM7Uk3gbx3A8UrhhG8Hqw1FJ4iTb4Q4MYBvKBrV8nHyhZXDHv4t9mJUnG3vyrPhXfhiVdWiuWZv",
  "key32": "sxvWHmQW3Cho6AcvmZWEmFjkq479Ts8S82DkdReVwBseLyrPh2kuUu2xfwPxeRfqe2XecRNTv72A1hNvWhxP8jL",
  "key33": "r4ApYWxaNXwa291rdgL3M5vhrLxm2XZKzmw4qQPJsUbmB7JohSo8atPA1GWtCTwnmqEXW9DkCkc88o9eJrwM7Hp",
  "key34": "5YgdcBskVGnuaBXDfkHy77RbVQTiTcmN5MtE9oc8BWnni9Jrh2kjupsKtcAdVtjeE5SVt4mae4x3ztSyGhpf6ZHf"
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
