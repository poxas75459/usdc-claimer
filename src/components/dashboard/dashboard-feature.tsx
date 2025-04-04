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
    "izfkfcA6jsV3ay31f7UXStxytu8Sgp5cDr9xJ2edStFEGbP8LTVDCeGrByCQh1eSaEgcZRtC8WqG319ZHBKUJNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsy1ChQ6omDkw4CExFt3XzcJXzbUoQQtAE6naQ63gjncofCQDLpfUYfU5zfyqNZCtDTvuGyqDUwviCkkVGCA16e",
  "key1": "2jhqMBDkG1CWsyk1vrRLfp71FmFSF3FpbgCF4SPdos4kdKGJCtHrkqRuHw3f1sVApzG56esHhi8iHPjes4qbqgxH",
  "key2": "55CZvf9HMj6GqatZkyKWgQ2mLV2KdQXz2LpxUnpNNFx3KvU6pKH5PWsz7EnGrfCGoCXVZNNFMy26jcGapsNkjyRg",
  "key3": "3bKc65audycULgvkGzaHC9eP4q6R2eUMyAfNazWLcDwXDYkdy6njqogwtsTQtzurBnhcGF7WKpeh8kBNoMWErS1V",
  "key4": "34RF2aSiQVFNf6UGth34HDNkC4pcmFqcPCJFN6BZcTtw1Dk8spd95yg9ws4mHPTPdWaJX2tjbpGc1QUewjNAkpB3",
  "key5": "4qtjCsezjTMRToBanfs7R3b8o15Yzkszjn5YiU91eTZeFBT4BYg1W4z2X1Pi2Bd7eN9mrDL1F9Mq736Tye8rKHBK",
  "key6": "5M97JmSXY2NA3Avhfxh5gugzMkKFtFnMLU67XGgAjqTr83xW9wZXp7aZASi2vChct6kb5UQp8wm8x8Xrn7BDrhTP",
  "key7": "5yP6WEjWMyhtn9pZsAmUNrvoV4m1qbMGoSgEf3hF4XhTMeuWMyX8HKu5kJuS1vczY8V3obv5ozn1dnxUNLVdzwC5",
  "key8": "2GeE88CNmwpafNd16NPT5PrTUT8AEo5Xv9BrXy8JgYQggdUSSPHiMh1PvAfYZGFRQhGHmnvvKH4CSHXETK9iitgH",
  "key9": "35no5BPqCzxcQNnxNRUPEhBUfuYBcGXnHeAdvzescVQNLAEpnfBUUgr38fh2fqaMJkG51qmpzorSBjjwnXZGGgTR",
  "key10": "2cqvoyu6Twd9LRKeC179QEiExQtvRBw8zw6xrBLfRArSeuJEuR3qfuzMSkAPJSsmz1Sejvdg8wMZWg84hU9Y3r71",
  "key11": "SDVFBuq7CqgwpvmBADFKJvQhtS4jPa8SfwE9PdzjC3vdvpHYtZYo55bgpzyALbrebQAK4MTYXpQv1pkqQhuHrkp",
  "key12": "2Wxe73qhWQTj51T7LFpBMbbxbYAfXaKLBNAiCGZK5KoRKdZjXWMB4ASUjx4GpXCJni1Yiqe2pGymMkS3ktpVcw9W",
  "key13": "28BDQsAcWWyzZ6JyCiAvpk3Jwo8gPSacXqJrYiz8TNUPrTHA3zEYg3W79hWgNDxthEk75ynqgVTa4W1YTtXRMdQ4",
  "key14": "3JJNdMp4fbRa9tkBQ1HxXMmeSBm1WcAaEMk91bT6ip3evsZbCzQHYte33wb4KQeH12rGLzFHb4Gr5oK643btFQ29",
  "key15": "3s69kKk4kQGVoHGM7VYhWDk4Tay7MzxcZtYx7cEaKQ3XCz8Z2GW8nc8DTjcgqcYLu5U4R4qQoubBk93GxNCnxDuY",
  "key16": "45MweDrzGwBRWpGKTKUyB2U8f7Y7ycbY9hNkKpXhmaurppejvCyeAsaJTueAEEA5teyjJZZswyeTNuuVzfmB8Gkr",
  "key17": "mwKw1BGWHTKBSXr12eTCgZwBWsfwe2N7ERGAcqbB6XRN99d4VfTDZtqqbKpizze2arDQtPncPrNjpr69ejFXvxm",
  "key18": "5vZbqtsh4HGKDbv354pP8BVX56eJQJMFzWYzCtvPYkpaN3e3G3avjX4U8AnWRxtFnbmZy9N8EJiYpEpDmyGPWM9W",
  "key19": "36mnMrLJSVidUKxEV1mR1oZXgmeZrmf5AnG93MbzwEJJyxQbyqM6Tv5eTwk987JHG3kiykYF2BnZUTSEuGqg8Ut7",
  "key20": "4VQt31ADKZVLrcXzyECb1QbX3aEF9vxm1qvCmrknt7hR6cHjRa5EuYgQuMSx6nWg6mCj8MApgQgMWmiMK9Ypk6bJ",
  "key21": "4mg6z5ytuXhjvdA1sXL6K4eHiNDvnatc6vUWVqdW11hStYMSrsv7UZNkKeS3HBUcsHPj2ykWnggh9C1ZVRoumpX3",
  "key22": "45y2e5UxRxNfBWWukSUzpjyDhAFqYAyY5MCFPqijKmGKbFeLggVaHae7n8WfTdbRKAcDDcdMGQqEYn38W1HeNowc",
  "key23": "2DxHicrrC4pW5d6JRxaK2C19AetFQCdL93nin5yvcSYfmdUXVz6cC4ZHcDu4RdMG9mSJoAYPSFy6gkaLPpe85Due",
  "key24": "21ZU7UyrXtcyC4HQyf49VCRzt68qwv5j4nJ3ifVsnFJ7f1sppQsJ94mqPMBxC2dtXmD7LJ55n7me6mGLo6HScsYm",
  "key25": "63pJgfyd2AM1mxSLQawMULppeZG7iRJ5ogdjjQGdwCyzgzoEXg5e2YoD65VKWf8KtZBqwBqboiWKDtXmnoVupjuH",
  "key26": "3UD5VeB19MRSzWEkWXW9E1AMFEXb1MghCTD66Pfs2N9q36Lg6SecUGHNzLuQKdsFo1XXXPLZxB7ysbMkxtBvEfvW",
  "key27": "2QgAASBJWH1HtH9D8WCqLeFE2TxhbsronBpGTn6VxdsK7qmxEFkrvgWPsHnyHXsqYqXFkwWpBqKotj5TaZsK3jyg",
  "key28": "38uHGeya3qfRSGG1Y1xXbiR24pCa8NAqVZdRyaHDU7Y4XytvpTmMm6VtauxgbCcjKDq1skGaQbSt9jFBXwbjAGe8"
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
