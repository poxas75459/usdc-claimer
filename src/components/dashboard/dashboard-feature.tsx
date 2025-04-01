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
    "5ojvZu8pGxtXA7WB8V3y7RFwtZsnUvxNekTzxzP2gpSmohzVE5XcibLCRVxzNBWf9EE4fCmgetfTtHLrZhUQjcCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kn4T8qgnuX68BrxkNz2VENBwQSXPrL7i66GqMxT9sivKox68dAe1x6SoaUT2iZdB2yQFY35pS9VeXt7jUmfpJfY",
  "key1": "5W9Zxq848U69BKMW6eFmsQagi9khg3TWWbgyNyTLhhAkicLZz1AD17tYw6rL1AHcSzkQTG7f8XfZtmZQRNVBgKbg",
  "key2": "3U4zUQRYw79nJ8LpnfPvvwxRWCpx956XMXY21ggoeA4D5m2KEMTfFNxQyaydzghWf93uKoniiTpcGWDcut5jatib",
  "key3": "4nytXRVZc5q5t6qfZE15JFxBzZaKRs2SXTh3pHPhSfJ5kvp9snURNxR3MGG9f7w2P4JD8KutiGDZo8wnyYsuZxtx",
  "key4": "vrArPvV1PMq1KRRN3vWYDYjbYZPixRcDvTb3ueFeAgJrYNN3x3N9hTx4zysvRmU5FwTLy4Ajf31dhjTz678SemR",
  "key5": "4L89LfKWnYs8HpyjTfA4J58nZVQiXdTT2vsf8P75qMqtUj4fXtxCTRLwfSRxvgR7NQVY7TdzTxWcLp2wRnNZkaqu",
  "key6": "3SAgCE3iXTUswdXGLDghHqPhF7otZzmLWais6tCrBD1gFXf5o8JoM9XdthukVaVfVUZzKyg68LbrmeEi8yUM6LLy",
  "key7": "4fBUdysReKEgrvY7YDLrHUmbsJ7p9wvNtCxbjbh9nsaQXbS5JvoUeDw2XZ5e6FPwZKhHm4t3LVm8nmueCpdZGkNM",
  "key8": "2s1zveFNXRPCeC41VtcRTfX5ZKru8uRekccwnngGVyE4QMPJ4qpRkcrRfVfZk9hqhoWzbR2vD1Ye7bzXdVCFEjFZ",
  "key9": "4bwhkkpeG78vfgpUVapMwTHMP1yeemzNKjVq6pZZwLqqd8AJ2NRdsRQimX8eu7YS9PMbpAQyJUL9K8utsToc9UWJ",
  "key10": "4VcSX6nd64n3WLS48qaG5cWLoWaPLHYmkpDecSQ7G6sqRWvE4zoBd6dhyykwYBtS49cuAXhL7KYnsv5NpY4Vmkox",
  "key11": "5oSFgHz3wEhBXreZPmMvXPiCxDdP7AF1aGygoXqoonRsdK61ZStxSAyhmHnDEAeYxFxsfN3jnch5TRGonepRFYjM",
  "key12": "67fAYFAopCvhzh9DbhCyeEXtDYutojZACM8gxE7yvXGoVPkQopoVabJfJQzf9sa4m9jBwqu8ktvpswVR5rvxurDr",
  "key13": "H95ox5hb4MmNrde2dPXSbHkbD7sWCvTKyE7mCGNSnuNnuCDtYv59GXZvAU3fMmW44nGAYRFiH3Z36PdjZN21ug6",
  "key14": "Todh7e7PHMGSeS4WuxRnJdL9SpWNph6GrHYhQGWeM7eN6Po7dzKeSNe55wzyqe8Kfao62M7ffrLGvPArELXZoWJ",
  "key15": "oz3c4YgLgTbZacU3adQxaPxRTFFVDAhaymXKAtXcq3wFiKbUK5KcfEZaDn7vrScvotcjRwo3YQQGCXszqSwXkyd",
  "key16": "5iQQZHXuYQoWb6da81Dr9YrzMdQ2CyEa6EJW5UhnwDhihkSNfM66C4pgNuXWWW1HF952AcXfihsTFyMV5Bv8pYBD",
  "key17": "4hScm8DPvkSGJxei6dG7XKRbX6a4nLkAkQ7Ltm7rUx9fGuTZUJZreUAtkb7nvE3zbYviSqTCbL2gsoFKDbcN4V2a",
  "key18": "2Q4EgkpQLnfTvvwqGTCjhBUnbC5Mn1EKWoEHnurQbvb1ePZzh79VQM7Lrd5aU5krzieZX2xMdb2zek26XaU8zW2J",
  "key19": "54dacnsHXADenHxbRDecr4es9wiog1b1twaMezRML3e6xsL1qD1EpcqbeuSu965uXxXp3th4abfRRxd4eszug8YV",
  "key20": "3SUTQ1qjybuN4VLFUts161qSZzQA19esrHiKyS6W7AEy1ePKPFSdJFjZfhggCjVQs4XL9UX3nGi4QEMgzNCXpY22",
  "key21": "4YSaJnqZV4HYjSg7A78gcx1opfS9diKWHKk8EDqY7vZ2JUs9A8hBqeYz7dtgd689VzxTU4k7WN3jkGu4XHhKDmG5",
  "key22": "4B2WqxYHnywDm45w7PRU99RmU95AkRPdAZseCFr3uAE3Jo1zKi2nZu2irsGmZosbcW4jVTiPjYj5amKp3pYTDkYe",
  "key23": "56jmoRgzKRF3oMqmXjKkKcuf4Hh9nd6xhLvU3BjfWv9bfePneouRvCt5CLUcugbrH5uBXZVaqtZcrEqmr8Mtrerf",
  "key24": "2Bigx33rDsxP4thuWAdb6XpgfiVRQ5FBjZpZdgf6qt7KM7NjenF3x67wtq3Zd1BjncLq4pM6JQFsH4kYszpSQrJq",
  "key25": "3wPLsNa4FAdqu3jgMkYcn5teCWtvWRnnuES39HjG3ja4KMgEiVVnMTpy5yEmisMzpVS7VdWDkK3Ek8B1o9C1A2RQ",
  "key26": "5NAtCLaDRQ4UrweaFPpre3atWUZX1p9Uycw3MRm4kfW469khBMpNFqkRSX38tjNdkaPoVqLq74CDjSsBDQtADAEA",
  "key27": "3VU6G4L3sY8sffnwMYbpDvPGBjpDS59cQjZTdUdQFmHEyqtURZtZGrsEFtHmES3xx2Pqve3bPbUqVXhH7V4DhELS",
  "key28": "2rbeURfooLiYa1GNokWZ2BgAhLuBa19x8W8poJyws2FRQ8F2YvcVWk2DGRUN6s2k7e9dNXmkhtPozSoocvP9ohcj",
  "key29": "4Y6Dp4sQGewvwkvzgpTSxciJk3Em7cBb1SxQ2i7KsSFJ6yBbNQP6m9YYknEoziA3BZQGY7dLCt68e18wywfakrV5",
  "key30": "5YX7KLfHGJ86ELD3YbUQZGj2jejzqabzszFXRaLKAXTkYKXL8i1xoJyK36m7VST3fLid6a9TtEScLipWhbysEp4C"
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
