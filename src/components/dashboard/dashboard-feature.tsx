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
    "2Lg2Wv6o6SiMNz1kAJtSRo4ip6KaVnAEhBuCQqhLRmM6HEfcbNmMtESnPwauszEwYgqVgyPm89162sDtR6hzwPZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mm5Dvc1i5Z2GJXxgTn7Y8MJHrqBeNyVVKYE2Jt5N6vymMPEGNgMLd8bQ77bfaPq8GxvL9zhtZpzxiPnR5tdECZV",
  "key1": "5bdst9KhmyDQTpoU5PxAhcjbsL7UFe1q9tDFqrTUCUeVGinxErcHhU6p5ChM6w3ukcK5XSPJXUfjsqDyVrV2ER4R",
  "key2": "3P7sFngGh18f6jYSWCSXPdfL4aQJqLbbuJDerLk98nP5N8GHKpbeP88Abs64ND1Hh1hEX4mkDHTv7N83pPwBuyyo",
  "key3": "2mdWnbnRay5WYaZ5vrZ4p68kaj1rr16bzHU4v5eGnqFwjtChLTJhSoj3nvQ7rNQ8apYSKYfh2MaWhCuN6xiWJ311",
  "key4": "3mUBgRNNxaUXQsBwPSR3Pmi9WCpvnJr1jmCDRaKMsV6E3WRYs3NVLYX5nh3S8nwgdQjTq7z8UnbYv6SmJNJyunQa",
  "key5": "4gHssFfN1UtuWVVqrCNq1AvrphrhRwkZ6RbcY8i85CJcbgxiRWwG5tscHo6vMbo6ZBWXdyM5x6Z3YVLEnhiENiES",
  "key6": "5TP8LZp7TUUZjKpgDsLfrKZ7uD7JdaZGNUCrPAWKAHJHLZrnqcDj7D2CHKTMcN2CNVFMZR3ewcPumhXPTWCoqZDq",
  "key7": "2YXDeBpqSxCvQam6PwTDjZe3XC3z6hcGxiSCTeoGCs7544zqi2upzeBS2ot1UNUfVzgsWsHgKPg3B5j3VMTDPMke",
  "key8": "67gFjKoM2mvrA2m1N8CbjJY3JS9Uk3j5CX1tES7h6h3hPnvGe65bgYRgzinfjNrPdHoN7znfmvoa8L31bypxXBM4",
  "key9": "2jQHL3ChovLes4uWqm4PA9cGBpa42wcJQRa7WMmv33KgmwYyyMMtZW4CeuzHPcG8U14BxJLJP4JXe9efSf4pJoUA",
  "key10": "jv7LiaEJnZy7vJWhNFXA6k2Zd1KeegxE6cg8SzkifpkeHJoWosENmCWjYcBYAiKqNHrBtN5zmhdFd4dvC6WBz3s",
  "key11": "4VBVFAVVmYXsSRSrwdAyRrBQZbKMjZn4KqgkpbnzxyZdj6kBAvT1ZXAJ8k183B8NEsVuybg6VpNPnYzRJVxs7mJz",
  "key12": "5HqnVHbbznFhyWVwLiBVQVAnJjPcp7hnWJwkQsTGpSqeGxi8cWYb7VToayJo1s4XGt9ZufNExZLs18QXnLk3pbB9",
  "key13": "66HsZ2X8ZNVXcAQGzRQ7hiLyPnL4YJkMTRY98WEedSQ3GRdKWy5As1gfsqw1ZvR7445mubdmghzbKahuiyyQTJbY",
  "key14": "2eWx1wfeGbU71v2MniZsVdaqDnZNmugsGZaFyjjuWDqiUyLZ2uQawES2N7qTx7g7N8RNoXVjTxgVh2ZVoWbCKHDQ",
  "key15": "3zRPXgMM1b8hMn72g9ZSnDaqUdM2p1rJJ1yaiCK51e4x9PjBKRKU6DbznePztygnMRyQuEGvREz1Sv4ZaFhoaZuU",
  "key16": "3kBDfcRC7N8YJRhbTDWpgCP5kRNQHhPZGh1AW3so2vgEQW1vkcBq8E9r63ZbeYEEhhqNHo1q2ysGxLrykeXQ9pPc",
  "key17": "3Lv1jtBBVqfznAHWeE5FKMLVZBo7LAnev6Ypp26syWEayNGZ3RWaBU7TdP5M4eL8JKZRDjivwwJccc2NVarJgCCh",
  "key18": "vd7ocRh5geJjXVb54sQXnqTiKatiMp3PxbTkFi2zqabt9FtGKLaKqYKrHzzw1o25z1aBGPwFPzcH5zft7Xookda",
  "key19": "3rL7KXE9TCMLRkaQeGaqg5qsKgzA3nsCUtyRZqnjEGMXnV4Xv6kSHXpGTKJqeTq5yztS2urR67P6rcy4JH9fhvw7",
  "key20": "3FxupaFcHcJWym8dc2cJia5J1HAqgt2pMnPJkbUWsV3PdoqJ74fwJRDfqMTRBquAKHDCurRgSqqdqLShi7hEMqko",
  "key21": "4bGgPi9zvyKgB4YW6bkN9yXUaFqxDZBDnjcYMVKEg6r6iBTJ3P1Dhix39hx7uC7trEoewewUrVCehsyhQfc7cEUr",
  "key22": "4Ct3HHVLneQTAuz2BE9T3MuS3hsMHavbMF1vn8P7xmBPcmKWT71t7FtCCVMJ3GpEo13EsTQVjL5AxisEZKJTqT7h",
  "key23": "55V1TpmciSCCvzMdnXPm7PbZdKxeeRJKgHaGYWYkdJ73dyh3KXoidXL6bLeXgSyGPgRGC6UnYMw7j96HxF336sjw",
  "key24": "4QiZVqjwHMgwboB7XF4BtZz812wwq3dBy1nssAhKy2Ei9L24MAnoL2KEXdZysYdvtLJYooFNHSDEt33oTDLrkw5M",
  "key25": "cpcy4jD6rGrDULrUd71FjvRzsrpyFK4WSzMBvc7ST4qUMwziENXeetMaTzwCEox6qenb84qxJ8oTHHhCxLXs1jn",
  "key26": "4BDBZGnGAWTeXHvEcEyrUh2UTQDJ2yZ2TutyeaLaTQ6zvTfEjHjrRc9hp5DpbyuGKQ8wnUKXJkZSdKH9k83iDMRP",
  "key27": "4doZZeYy6p1PTkZxYHK4m41BRrLCqg3zgoZgwg62L9z5NVAo3Q2y4T8V8piM75YM3tzE1eKC1H8N1KaspdAXvkNx",
  "key28": "3WkcG5yESwSeK919rn2u4Jxaq4oD684PXo5ovWTRgFAwfbB3TBFNBHZwXU2ibmqVxDtmwcjbaG6GWHJ8MhZoTCN2"
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
