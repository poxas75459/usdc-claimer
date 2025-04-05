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
    "5rerrSuMyLKnHWyT1jXYtLvez6xxUCnFukfbxbXjfMBnbuqodLWcV4oxoJGxiSREnpmqzgvdgcmcRKtunGN7p9P9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fRwd6VU9DquytbT4WETC8grfhGZbb9ZAbruLbRyd1tdTXPPMXGYSVHT2xbkuErDR34Y8aTPxs5w7SVgXm7YR1Zf",
  "key1": "3ESTAdxs7ZskiPY7wJyWupR86q3KeqgM6kBAYDXw7qLWpsuMkk5CvbDQ1EfFAXy7jChk7m4ycyVFnwx2chaheWhr",
  "key2": "3mJGYWsuNN6ECg32z5M3PzzM45Zb1Y5Pk2z29pT9N5A2NnU5JuGP34AeuQFmqucPqgiW2aFJ5ZK9yKVf5yzJehCG",
  "key3": "2MhCjdxWkCSTwpyDHP7Seek9GXDJG2BP2woSR7vMMbfsuZ7LMjgDBYouqqTY1fvt9SjqKfzFDRT4Vf6dYUor5aqd",
  "key4": "611yTsM96Yk9jaYLJUsj7nVkrxTEM5vgthXgz22knwgYML3DzFHFz4HDcprkVuGtMW3GpdzhsBphsHA84KrCL8FA",
  "key5": "Dm6RCdwc6DPHmzX8733XiLmNo8ssZHzopUCv2Wg1xRCgc9xTNAEUjm3tLdWtTdSKj4WkYBq9pRUvs8W5howU35M",
  "key6": "2a9g8z1ZrivZ4QaXBKit2bFGUt5bmm6hSipBJzUQupWCpqBDp41aCqVqhwmTJR6AR9qiBccaHKK5KnCA1CM4Ms4M",
  "key7": "4Fe6QDuqnHrH8PCiNA8Vi3o227j1GFKtGzBvdm5hFS2Lf2duU2BYxNLRHzLBrzHC2ZtqANpMaNG2GVTAniioEuqz",
  "key8": "hpCxoUdrB9p7dsv81pYRjpPi3k7nV5y73zcUJ4667TXesUohCYBqwYYfvTGvM3nhqwwsx7BndzLMuvPdzqoVPhj",
  "key9": "4kRRxhUGKZNeMh6fZXAfjfawuXGer47QrLgAhUT2Yg7cAobMEasrJGUc36CLSZcPnMCw38duwLPJhJmECwRiog3C",
  "key10": "4L2HQDbxmcc5D7vWsaapqwxvihfJHGeRC5Cik9s5vNz4irNKbtpjNbU4Sacv72pqt9DdsoafRhf51gi4adFq2r2g",
  "key11": "2XxPWiQujvm8UGinc6if2qQpYggmch9Lru4ju58aoaqdR87GvGv6ysVM6qUfqEbfo8FLC5ntvKgisxhFDgvXceBf",
  "key12": "4QFbmFR5KVnX4epMuJtHhR2ML48CVpYYK4bgKoB2HJ7GYxufCexUiNV8tNg7Mk55WBeWozMgYq2fsx3NyfmW7MnP",
  "key13": "41XMZfEdSGAcsmbwzYbyKwUUa7T59pLayFtQKgnvqjXk5jtVLRmaTmseX9PBMSMGnrWTqLKqhG5AQfjfP2GdcpRR",
  "key14": "Ut7NaYVroqysUnojHUgxoRD1oX4FPipWv1HG68dbd5jncqq1G8cRsVBWMbzWnT3LZnc7PbAtkGym6TzgwTnoqji",
  "key15": "5FfB2gVsmUPznjLDvwS33tXSHzxtwyHUqQ8ZGC619PxwPqZPYHLcSUCUgBtP9K9DDfSAJBJQ6i7QHEogAgHnMtEi",
  "key16": "4CSvLzxRzLep5T6nra8DvJT4MckKqUYFQs3ME9BDkzU1DtCoUe74RZoK7ABdkU4wEc4RXT17G7hdWJqE5M1R7RKZ",
  "key17": "2EQUtPduWpRBbUNLGLb49X1qQAW7roCVg9HZAgeAKrkk84DjZu5j2ZwXQ6bzvWTSnRFCQ9Wz3JZehfmJJDWpkN42",
  "key18": "32eVyVYAhf3xd6SpyzDS43ZPvSZkKAfZuaD8xxCYP8Bwuwsd96RdoB9vU1yCyKVpM5ujqpia8621ad9ghu7S7Ghm",
  "key19": "2FhKmpdE94FUPNTsasWeDPUSjdFup4HoPTie2EAEJR19KgLqr4Ve6uB3Q8ZwJ18SWgbajiru9KkByK6piZWhAwhw",
  "key20": "U4MpxsozuZUiwRDZhfryomGqWLqmrCG6XmdPTmJi2BwigprZzAfh1qAEgT9tbt3mXF2xd4HDbgLXVaXi872nasa",
  "key21": "VXmW2DwL4Q9Vsr23GmVVp16c1LV5uKxEsaVDUTPZzNH6iQcDcmv1cTuG56MPdL5w38KbHEa7bRDuBC2rneLKAXo",
  "key22": "63amEqGSHTzWfnFDcyCrcRn3S44yGTYZNpT8kmNWgeFeG28jcBnj3iZGWYSGKypsJ5C1gKuzHPePgzosFCLRMkWq",
  "key23": "4kAJZkgYJ8ZuHuNLyje6eFJSXpWRjKnFgn4X3V11fp5B9UWVnyQdMUAg86LENVAEFzs6QLvHdjygJGGeMxs3NvK5",
  "key24": "2sRQuGXQd9g4rqVSAxzjDwTTA2CMDxjJoX5pfd4gBCkn78qANs7tjrr5tmtJUUH83D8ApRUChZ7dXSFpcouDBnKV",
  "key25": "2hwRp3eschgMp6yY6vFuwTXVtFuMjHyPQLV5Cayp9pcW5VffBFQsnPsG11Kp8Hm7PU4G2VZCUSTTWaVt1uFZcxa4"
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
