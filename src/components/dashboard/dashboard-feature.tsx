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
    "Lj1JybQE846LyQJSb3dpEFYwHsyoJKkjtBndETHHzueL3MUvjduGDK8Mr5teg34XhYDdUAq8aczY2D7GekXPXRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yrz1GThV5qzsGPkT5diGTXWVeTfw1z2ywMb625EdJiosB1wHBUdieR5uRVXD71mf5grpHPcrfKZuH981XXjqLtC",
  "key1": "5HPti8KJpEqZzGauFV27CEqMP8chDvZ59uaTDR63JuAarS5h1joabDQsQUBpSUGjqimz4HWPm3T7VHZsQkmkoBsY",
  "key2": "ffDvnF9QZEjFBBbD6fcUffG11VWpaT1F9CBDg7A8zQLKj1JRofPyETChNeKKzEwD6cgXhzzRDni4bcWjKGQ4TqX",
  "key3": "2bioJ7GEbQKmwLWgUc4cbmobVNDwWCZ9JdjWvwRHfgwyDyVE2uhq2G6eTpqCoxQb5oxYXQDiCR7tYY9MhyWNG62q",
  "key4": "46b6y8wo7PRwVwEGzr9tasxktU3AXUoNGgzckKgQreN7dTnDxWjn8ckqB6FHoQ8A15jjYeNPgbABVFHeBqWRmqU4",
  "key5": "5BfJAvUfcqRbvukRoiX7dNw5tYfu6joqfSUcX6dmBGe5AjMP9tRAB82vpiyAr8LpHw6itA83gDnV42g9s5HnJt6t",
  "key6": "4yDCub5Mk8c6kRBnE17f5tyqZvtK1Xfp1WacrKwpUtkD6dMP818MF3uRapBQF4sstEExDXpwtCwnrCFk2EyLvwYK",
  "key7": "NdcUrmkvDAUDeSyysBYvcz2nkgb1ADHmxujYzzKx2xEHvv8NX8R41KyhsmXhVPUf7NKpXTzbGBVoUFjnuVep7a3",
  "key8": "55RqKDUshRPY6WHnAikkc5WDcM3RQNcmK3PCwbm4VgXmhTTXixHdLs4cv2ExhQ4cacwcWPicwNjoCLrzKF8VQvzC",
  "key9": "KsGwdu4Cys3aFDg1jAEdMwBmRGajwAcyRY56Nabt6q5pibYhiqGsdMrtjs6ouG1NR3w6dnwBgWDgq5dFKANsWUf",
  "key10": "5uDnaWtMmxoPvt5T8UFJNux5gp9Zm4vuNDre3U6XsjbAQ3i5vtY7J2b5RrLZquHk9Xsc8wL8vzKykxVgYNtWecyT",
  "key11": "619YcwkjEs4nPs1VLtEUUUDMXkCQNsvabaHDTwJg3acRctv4zv4ApeqgZG3Nwn4wZ8wopYifovRRu1cbLQAe8M6N",
  "key12": "3XSMKNGmmXUixUpCqLt6Zt1T6N6rtsq51gpxae9KPxQM9VaHBGHnF6dmSLRfdXCCrXdTy8u4j2R94RYNCe4fbWDi",
  "key13": "2PDk9p28yrxf64KGiYHoZ4koJSWDRukbCiN7TYpr9pENx31GD1hoFe8DZLdfXC4Bk5EAKbRh3KZoAiqZsmiXMhdK",
  "key14": "4SoB8gpVpiGMKogjuDJkpoW3Pf1R1uUnkvqU5aji4ecsnV335tVg9xHqWMqyiWvtfZ582p4dsfh2QyLrVamwDg49",
  "key15": "2KNyRQBnvZveCxa1BKVdeUaJJkjNcddjJu1Uidd6MPxR28jBrAT4ncUYtkDs51V8ZpHR7EdsRnGQuX94jaWgcSW4",
  "key16": "YubHAdkwok834TQmY345g8BNM7BXfcpJZwTa96t671etEoZV8RjJhAGHWBAepDZHai8Fn1BeuvWWyqi2eUrprqd",
  "key17": "2uKU9Y89c5FaMBkmk3JrfAqdp6dCiVu8eoLRdMnze65vmVERKh1Z27UCUUCfMxTwVjfyHZoNncTadKi8iKPHkBzM",
  "key18": "1s7hShbiN19h13DoAC4vP4tcAzM9VshBMGb4821Tg3jAmR5XoRHhx3NnAz74MgweNHgvbzGivwQC93K3o21cizJ",
  "key19": "5KQdx8FkhGxsgMXwfw3uRrZA1H13kJLQy9nSCLNd7k6EoWn7PxtRSqmqsy7wooRpy1GT9BeuZTPc8ZBVjGpg83ef",
  "key20": "4R1ZvwBNRbBrk9aXkLXrUx9RqQYEiM917MTQeXHV6UFj8ZthPT2SEHeSBEyjNkB2LpissQroSK6YUTGr1ZTfNiF5",
  "key21": "2cdvKFQT7MBWigoFSAhUea5NRMtkHkvUmCKcBBJ4XLtrCcNju118rMYh3LpgojWiQqFodKq1XSc7fuVzvUfkCpbc",
  "key22": "5JyJRDT9JuTeRgHdTsw1hSU6h7EXFikTKciYKDxpccbmaroE88zMkwzcw7Mo9s36XFAQ9fJX2mQ3VqUpss51tnow",
  "key23": "4apjpuzNov8JHsK4axKT1KGjjn9r4PJMvmBX52WGe5LEip6oBbiybLdHxDvswRGLdjt5hXTQHyLYBbkhMAhSGibS",
  "key24": "45JUJzjw82Vp9ZdQWx1uNZJVW1DUUVfd7jmE6GvdY9X6MyNXDC3jc9RtuKmezb2GaK8xEshCWUCeTKmtJSPDRZYa",
  "key25": "XKtdTrWys5iT3ygeDhi263S7qWYuyMsiZ5ZJk6o4T6ZE84v8Ts8DfCpsv8bMi5inhFDBYDMiWr4VcjBKzyaCqt3",
  "key26": "3NzGXZb6WF3ZnrKup3AN7ZabadDQquASrokbir6gnkwxc3T8U7NN2axmSFzbsWPWhaYjjH9D72EqSZNaqoPoqBQd",
  "key27": "5UGZ7HhnpC3Zd3AD6WPxFrZFGp87ETQNWQSF6up3sEAPBTdN1rcjTYHAVPaBdPtHT9tpk81jP7hyGVjtuRRbGXAw",
  "key28": "4d9j87DDg9tzDj33sADSrQfJigLnaRGGs2fe2dLbhaABBA8WvxSsakcAyF5d5q9RGPFsb5QLUNEByzfQz7oQeEVU",
  "key29": "2PNxCiw1xk5h6pm12a1wRZK8EYAXH4H3nXWtPTmSXuL1YdLVZXQm97ayqsVQrzGyfke8Sz7eBfFNbhDH4rDxoqAF"
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
