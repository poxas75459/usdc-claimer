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
    "QQLoD9K1RFmWodqooTzoMQkaoJRwV2noZPGqXn4JBN4eU2x7VYMVaBRZTe61c8V8v88JgnkHrmtevd23cfJr6Ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TQTcjyd6pAKfWd8woRjmkd9qpp71rcnVQVKL8kpcUEx125pF1ZicsnPbGLe6x9jjktimuQiwD5BEiog4esM5z5Y",
  "key1": "2XToVaH4cuRuePxAgmWPMhS85tFVBLZpGJ5aoACVhYimwh9gN52YyRdN1CJAjSXM9MvE5REUNkp1L33knCi7q324",
  "key2": "4hkKUegY36TFgAkJiSEnQ8xeubzuo8LCYAukPbrA63i4ATkvbwCmvd8rX8Tm9qmt1A3dkorXhY1XU9dVnRnZVxY5",
  "key3": "3XDBqaDVpgsyJ3HVQ6oYwFh2x8UYzHFMswZxNCcDguPnb1uLgQZA3xW2Wd19Tq1Aw7tszNFuvmEkDxLAJ3yspJUd",
  "key4": "2bRT9U3bcjqj9zGaXUxrrv46dSfTyGEXWcXmpZmwbmk2xtRpU2buMa2jdWpz5FLptHPq8vYwXM4dpa2V7n3s54p6",
  "key5": "2uJK5qBYWA387vWUYA2UhraEXHdiyfGAydsqbwSyH5WC8pAeB6UbChVXyTuyzXjRKHNKcsaMLHjqDco2YsP27vnx",
  "key6": "4XBg8LVT29sA4HN4srdv2BHksv1duVDfUWG648ARBx8zmY8tusEx9zAHuBDWfeZJLvuJN7vkZeusyuFeiZN5RMuh",
  "key7": "2YmhaBk6UsHjzGW5NMte1CnkAD4LzZJBJf1E9tByLkhqCPyZ3aAQED65cH16QGoKVw9ZTmqY4nTZtmiQCo97cQmy",
  "key8": "Mqjy1jqGyaYWfjF1auUCD18kju9FhYS6Bs4kL4drGAsQiE3UnnvKhA32LVu6gEBAjQdFQiaRQpiLEJiD5FhLdgN",
  "key9": "57WA1L3vuEsn8FQ3XKyhmLTuiTCRUGJ5ycsV3AJdWqLVtf7q6kGXygUyXBXBbVe9v2ZJJD4QpoRRk8G47aezeQMG",
  "key10": "5iosrT5tYcGoC2v6KozmSWFzxQbTWgZMLJkxXPXwjdkjh23Zz9Xh3sLBSdNbYDsXVWJAEzvrRHsMdRZFDF1Gjpzr",
  "key11": "R5gSsh5CctySAaHhFrvv1Jfv8E6FMMdBceR4DwfnNt2WgMnURBnroNa2Y5vkgdBTXRzyzrgqUC1DdoUnKUEpQvF",
  "key12": "5KQDQpM9etJvVR4bsomM72mPb8jXZ2zt1TyYXED9QqjUheBN8Nz71zbJDMbR6kQBfXNFfCwmrFDCHUm3XcaFiZne",
  "key13": "5u8XTrKpteF9LknwuWa7xaTGYCPW9ygmrhoiRd63JE5sF7H2NoaqKVsyNn9DSoPokCpNJzeAKwK9Knz4CvSqyqpk",
  "key14": "4XF8jrnu5aoDjwRiuqs7qW7hprCJpyhNmo1HkTMBRYm4LAcgAyjyWkkNvCchnotbzR8Rex8NDpbKkDeYqnPrPDf2",
  "key15": "3fFYjJLbgDrMRAzmzHxDJ6XD2wBhrKAkfG7UPa3ELUSfk8p9sANzVLaGdKx7WD9iL71ZJ3Nn4K5yS2aSULX9cEVd",
  "key16": "4paxudJxpZw4W2LtxdZp4ub8t3EpxmMBGjzyCgmXzk96hHFeX64TozhvKTAySv8pgUssCvHzbrc1QWPxCpXfaQeZ",
  "key17": "hkkBR44trV5gsSb7JhfeUmDcfRVquL6YU9SwKV2MsmqGNcAdWRWC1BGXvFuwYzHvBV8aK1NmSXJenzBSG1QN95w",
  "key18": "5tmco4jitgZT8q2mJkoEUwUZ2wuChwr9HhvzB4EoMjjffVx96cwXQuCJyw4yba1eHd81ATPLhSmniaynk7t1FC9o",
  "key19": "4BBrLY1M5EEMFegw3VDzMbwoVoPPFp8ZtgQG6FKHJyefWfEajyYRiV2ZkdzMYfY8WQW5z99xW8FLimex7f85v5r9",
  "key20": "2drpu8Ztuptst26WMsLW8HSZgYxcE7BJmTvQB53GUucYgPrQS4EjBV3E14gcW8ir71FFcuVhug5Sov23vqsRbttD",
  "key21": "4NCpwzKsVFZLf6ZEqHtnYfwoKQZqgMvf2SGuuqEzUysdSZ2mkjECeVLVHQ88i3kRAKSZ1XJH5p5jfuVvNhU4UpmN",
  "key22": "4UECFrra57eL7UPp4nE2no6ZWcrSqkfrAqFAJL3stBGeWNrusRBhdFQMMpX6ExaEtuc8HK2aJvWYLvyhMKtReru9",
  "key23": "37cbWWwCpXKXg1bAPMJLTZApft1fXyTGJASNPyvKMaWnBKR4KXWRB6ZYsmnUXiWDriH8VDEr2re1af3ggB2ywmFM",
  "key24": "hr47AfohNA5iiZhbKtT5PPgTECjgq8MJiAFBreF8M5vDMFafKwqLyzhJqpzuurMQ5Y5gtx7uyRoxwFM46kejNeF",
  "key25": "GkZ9jfQXmSQu6KJvoD1crcqayRzUD5Nq3nHVdo8CMm7aEL4rvbvoo6m2LSx1bQ8NNjDbv3gr3uWk6hdnahAzUPg",
  "key26": "5eqx3thxVUuBJYGGNMnzR9sRf6QeDs7R1gVxQoP1H9hnefupZHg1VhFVBHyDqzz5Sfa6Dq9nHVVqVromhhcdBeTC",
  "key27": "2HKohBRrTcuUtZhVoRMMRQ6FjBydVyuovq4p6t4vjoPo1bdfYvt4LHRKUZWbp8kmG5RGHqZxttAyaGfbV12vFsbR",
  "key28": "5rjsa8PpuvmrbYhhd65ZtxbK9sbZFGkU8uGEBTAAyMCpva6eKq5ZTQRgKf4NTrBPKmkmKbCyseH1VLmE6wGjb3a3",
  "key29": "5w3tioMQ7VhTjHVpauaXiwswkBx5eyqpw73ykUhdMC4sQpxDJJjXt6Krh9zfvW6JL66NfsZabHWZ9XHcEyxGX126",
  "key30": "47NrLScuTyNpnvJtcGkHPaxvNVFY7t5iGLADcadaA3xdnpE18ErVWZzVTzuKxt6tcdysaB8PjAMCR3h1siAUfK5o",
  "key31": "2Mk6Yf5pcTqD2KkcPTeR4q3H1KL2v3Ym8ereR4gbr1s5JXyfuZhzBK4J7vFMabNiwAsksPF1TpjUka9DJjiF65gh",
  "key32": "4MBAcnf9QcH6gjcKx9nYgeWyjzmh4XfKm9abHRQe1qkwwohN3esbGGNsi8NyzzymHkbNijw7Rk3Q8Lk7F3gaBKaL"
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
