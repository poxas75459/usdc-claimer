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
    "yn4R3d9m5BNeFyQJ47AAwADdZickEwJ2tLwsGnY3tBEEHuCX9LcxVMNjCuCTEeZt1foHnDgreYYB1WY2uCGSiBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8JuA1SG3D22xBeJdTzPDKkDfHGiKbVY7zdhfmjcnPBJfFhJwfXGLAKi3CrbNTcDCPoxfQKjeQyRbsfpeEVhJct",
  "key1": "PxQuGpYU1imoMjZiHyJwed9duU1eGPHSL4YnLvvcD8P9mMUushH8AHzHiku7Jdw2ixsFA9ehxJt3o3SjVZ46j9h",
  "key2": "4Mv8kTbgnf7SXh1WinjzMjkiEBQ33BfDLRhbgXn3YUxnPGoemwBYR2YDAD6PrQ9xMTjd9PyYhxCoHoTXcJm8bEsP",
  "key3": "2MtaEyUosJhmafbcCYDshupnXYr4qG3tXFSYKjm83La5GtDpoZtoNEuiDYmeTvMKZCHqmpkKrPwNH3xAdVF3Mm8s",
  "key4": "2oJX5gx13KNXk7rjiHd8vBq13Pa18sWz3idz3L2RP5p2FDrzTg63GKAAcDjLqBdBphkf7d8VgiL6UxwcuUZgFFT2",
  "key5": "2EwHBZsPC45RWxK1kM4RpTm46Mjs3m1GngpTVVHT6KCNK6Pqw7bxG1JGGfZu5fH7fcMibKPR86pmeqW8LJkqzM3",
  "key6": "4ZHN2Wqe1p8xkSHKFnKSJyXgJNG2cW75dKJSQC7n7xPnL6VZfQfBvS9vYvEpvpn15g9JESkWxrhmSePX3VNPVuYf",
  "key7": "auDaHDpibpzK6bcRHJ43vd9QUf1niPsoQRXFpFXMEMYnrMUc5vqs69MthEqSvQft7RfXYzHN9VoG7enviZ3XVnW",
  "key8": "Mqu18FMgqfeg69fiZYtXyNBvuZwmsLYtbruZKwtkmTQJmLcDz79DL5hmBSHCPuPrnuo5jmUpsPcGDPJxdzdgsh4",
  "key9": "3brdAxUnm9rVrXPMvoDqgc7PL2ifkZTko4RiGgNQ5qyipXpo7hRKBnGhonahDMnRM3MkyxBmyxhdznWdEyTVkdZA",
  "key10": "5FxYpeaRcSMf1hVdaPBVPFzLuf4Q3GtZVpv8JM4HCGkACvSDkiKCcrSuRkZpMSVFYR46wXzRXgTxwdJr8Whhpbp2",
  "key11": "3i6WJ4CgCRVTt9AoV31RAfLUZXEMyyvXrLx3ho3t6otUyo6nJH3B1gNneT2T5PbPRtJf6tsPtmxCWur9wtgteWLJ",
  "key12": "2AxyFd7hh6JL3mcVkA3uenYGGzNmtYA6WARfkBk43noPRbQxL8GTCKSNJ58EhiKuzkWyTLviZ6JQ6DtD1U8TvGbP",
  "key13": "3THS3NpfKVHCkcuLebCFCuqHqN9Mqish8p915GGTNzgrtVxTiJyEC6Kzj96JRXMLrrMPoC6hjgGBL9uauwZTsSLE",
  "key14": "2t3CJRNNpNyFkUP8U9RW93WPmrbR1T4CBWsYYiVJiq9YAzDC2zntCr3HtDoaxFGwihtRo5bEHUVbmgkTb7y3zvwB",
  "key15": "3afVVZFam4qJvGrau5ghinwwKeDPdHYc1zbJZboFjq68NASYDCT2rVEqQD65Z6aLBYZn62GXF8ssjE7k3iar5WpP",
  "key16": "3CzgbyiNMeFqhzPVDqQk7scqE55fFU45o14xKCLv64BXW2TJnPTAPUkCnGF8ix2gW36fj7rohcwFtNMTgJ6YpYDo",
  "key17": "25bUYNp5AqFWZuRCtioU4wVUZZ4u8umP2GjFE93e183xmk4dR9c5RdhmJrUqjg33HEgAweZ7WoXU3mY9oeBo4jx2",
  "key18": "5L1AcTFH8FPU3LthvEY6ev4XCeA3pe6sDMH6zjKx19QztMCogesvvEp3Man8prLsjFXUbVFymMWGBeBR13mJDEgY",
  "key19": "4B13bdyAmyYjSoGMteaYJZP4WarL542c7wAmk7QXfLrR3mJWwuR9hYupd9o2suTs33Rr7aaWccC6hHjaxQ7hnftB",
  "key20": "49tcJQgGAebCvLUhxR9Kth64nf18gnLpzmYt6CqxxnFzYteS9bsXo5dQVGDzUBovGnpoHHMDpVwEF37fpgJTd9uD",
  "key21": "3qnWENvgtms3oKPzZPsRGC3AMSu8Vd3BHZvorxgMK3JBHbDf4b3M58NxCNW8sZnjSs6o44dWjgn1HNzBgUFAo1TK",
  "key22": "Zcz8xgHhLMyNss1DReSGB6eNbjhWMxuZwfLFtHjwaG8WRH5EzvfpR2vice2AWA1TRmVpsRremZmGcN5NRz9RV7e",
  "key23": "KA4bV1J3mA9ewXasT6eus7zR7RZVpuj6Lr3P4CSaGnAJiEoM8wAFdpAgMAGvmGnePJEH8Mqzmd6F9qn69pV918V",
  "key24": "2ZztFLBn4i8XYs2YkaGTcHE2s7HLRBmxL8vtvvef9NpFdQHthGftEJEugK9rhEkFjxrQxbCcLVVMoqAVHq9wBguL",
  "key25": "5oyEjdwKQ1Nm1184wi4ZvcHhF3Tq2G7XwH9hz9W4qrgHh4E2pdjpn6Q8KA4b2oK3KfqQTgoiMo4GayC3q8NTcZNR",
  "key26": "2j86aYqyFmVcPbueaqJC5DKuEVhVqWs4QFagw8P9QqmX8aEL86sSR8pzom5BL4ZBHgv7iM7jzecRoNYvSjoQDfWr",
  "key27": "4eR7gwgXidGPbwEaoBwhHa4cS8v5aBHm3CZ4y4xKAkL5ruWNKcQdPhLEURV3NapkFyh3i5ackdcGqY4oUrXH3UD3",
  "key28": "21oudev6LKoKMRMmNLGbWfictaQg28rVamuBX4BsuHADz5JgQgtPLVEuuvEoAdQEjfu5Deh8AWc4ix5h7kT6Dn31",
  "key29": "3g9ZYKM51Yy99BA35Jo1hWgM7GtchRBwVkui2FYB29bqCGQxmbAXU2DNzq3hb75FKButmCQNuSKiuPCPV8d4bYVW",
  "key30": "4ZTARuyR3jsitRarXRnHjC9j6qwhR8MU43N9RbA7RHcwKpoz1qXTuNKAb3QZZucxU73UrLjDVVencX6hJy1UgurX",
  "key31": "59C8HZ4fkEHBNGeFCnHEQ6WQNx71h8MTb7naogWbj9PMde9qkSYH5MNWsPxZNgYBVwxY3C5vBWEFC9zJdWaYban5",
  "key32": "jr35ipYDfFyKSPMRDXVq6DCV2UtPtMR68Lp3n4s8NWKwcsaqg8LmZZnekWTU8gNQHTtyHpDtbF9D5W8JUMgaTE1"
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
