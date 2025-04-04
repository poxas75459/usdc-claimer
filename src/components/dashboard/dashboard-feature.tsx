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
    "5KknPzc9a3Xid9oCyMrPrwf57QfiQWGfRx5NCEESGdqknSAGM7aLLsYwbgfciNoEYAbEbBNor5fdVSok6wrkYGFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R8hnibTiyDQgCm3VdLYuDMYMRCni9MzcUEoszYiUBeMvHfWgB6zGN83TRttV2u4iQznNLQG4G1cCiECJTnv4Ytz",
  "key1": "Tt3W7ui7VMTP1758TSsF24UCWuh8n5TRBPCC6x4ZDN1DgrWdFb3ranEKCkWgTXtUivVBGP6FXV3NAj8RoYgGHCJ",
  "key2": "5nfLgHAqkvKTx718P1hLJKaPK3C1X64yV1qX1dJ8z8FQLmuFi3gfShLFKYv9rREgZdiD6jkdaXMGBFAXdmQqSC4t",
  "key3": "27Lef7NB21EQJQH8e3SirYuhaNVPcbXj9eQ9veWuaDkySLwPV85eLoaTwsT436pbMxA8CMKUvkDc2qvw6EngNyTe",
  "key4": "5eh7UzVj5qE2k2NgRrv5pLSPtYoMusrAdS53bfm2NkWEzAFJZQ3ZpsxitkFWftTxbaMfnLwLQANJFt57YsrAsGcA",
  "key5": "2SvRwPLpMyR2RhA8AoG85qxbymGzN8y9To9NYZxbzhAfA8mXkD2AHE4NgovnmaTZsPrc9hqewpEGsjwnTkkWjiQp",
  "key6": "3ZLHvtJUWSH2zPus9CTXHHifk3MykCZsykj6xzAYAtqn1aKbAdwxgD89BGCC2ykEY4XGAYF4ZQ597vNouSEoPGVQ",
  "key7": "LZar2Ze4MT8ey8qDjSYVm3tKUwRTH89W49JwY36ScgqceTTBMkd2TyKxDFkSGgbeKNFbboymrPTvGXCh2B1XbLw",
  "key8": "2rMUjw33c7cSrL6erf1tFjSbXPfhncwvtVrWFgraChDYJKZeQPQKQybHxVCAgDw6kPxWvjJ3xeymCNG5ttE7vCqz",
  "key9": "4R3uV8uKVfMjwDJT73SK4ZmcPsVGh9h4pKaWmA6pdv27Awj32a1MZB1LtXwKhVZMS5Vq7HVF3Hv5W9gKcDh8vCnt",
  "key10": "2gxMUAsgdwu6DnyDZPAY2QCsZMsx1XEKzxDivwCtcsAJKSGtLD1rPgfCD5z6afTFHX59Amg4CpCHAPpC123gP3Ng",
  "key11": "ofdz6ZphMwsoZ9Hrv2V5e3uRhR1VbcLDETJA4dE3m5Chih3AFPh7HExcBjWyWMk3eh9PjDVWbg67iKDdB745CoG",
  "key12": "3ZW8RWwmErAFFnyKGCKdih4DmwvDwBHAaGhFF24NwRzzd5VKJHiTBzr8E4KNtRZBfXrsPNfAf6RNCCTwBRxKocud",
  "key13": "5ZXnD1M7h58gpuUAgEhfDzSB6ATVy1rKvQZ3k9NoK6HgexBmcq9A3xhiQeucGeZQE1kMeWfiN2S4HmLAUne8Faqd",
  "key14": "623L24MR1GjC8pgaQbcuMWP4SaDgD5YcQvvktXqLQyxm1ujRhY6bmfuCL3hXzyvQsXPCDiTeqq3kHApCQFi5ndpS",
  "key15": "41oCL22GjxwQFDyUkMc8p8FNSQCdHAHqM8uWvem6a1oaKMDwNvWb1U6bVGAwjwP9KYEM8UMoWwhFTCR2zvTbRvgf",
  "key16": "3zTnTfYoN3bMpLSvBng6EuEoEE2uUJLqDSmJ7WGBaohkWyodQXrxqCnFmpiRN9fwrxENuXR6tRsrjJQ8NY73a9xx",
  "key17": "5XgoZVs9mJNQ76pvVN3nEp9U3h3bE1HtbUdhqMFgC63S8KuM9PJeBe9AdGhFXnXpjNKYPDVczkX5GEjr8MtaotsA",
  "key18": "2b6tmpwaepHf9BEmVnvfyxQRKuePgYgWbsfmdxqigz7ReizEnQq2APg27SDGskPQp7U32JPaJmpy4sAZb6CUkgib",
  "key19": "2YCatoxnAbT9dykdWhv4Zn7ZfTEXt2bZEnqncPTL5uumfmuqE4HeTmKGgjPBzb34okcLetk1WER4W9wFD3CzrgCr",
  "key20": "3CVpCDKjwaXyBHBs2nmNZKYuq8AKHTtWq2gUkDfFUW4h4o7FemhwtfinUpA4zKH2cVUeGXjCXrvj971xSCVoQiPK",
  "key21": "5JQo7SxF4u1er7diRPdXZ2Vt13GcSkB3F6Pp7ZYckKKnnzYYuxK9ZmdXJ33bAwJLWwZuf1XR1CPzc1p7DVq13wzh",
  "key22": "5LMuojThD4vA8DigJM2SS2VB6kob1RW5ky6QUQdu29BpewFx4NQ64wAxkAW7RYTRtN97hYTRjiy9PLykbw9nHLsL",
  "key23": "2FTezqN1VuS6h7uuuCMCjHw6kSdfGcPf9ZQ7LNmUbH48dEBctwDX7UdoLawv1HJkVJLSepJiVSBytFJ3v1JT4sNG",
  "key24": "5Bdo5ocRMrpm9isB3w1tsUso5Gc8EaETyZXuiw4QRVQUq7VcHDwVvbwCUtw9AWre6wGB8vWSjnyYeDMpjKLTKyTP",
  "key25": "2bwmGqGnB9Vx5YsERDpAmunh6mjgFH7RGWG8N78t8uJ5K2GjtDC9ie4vnpr6qgVuX7Q2X4dgmBVePswwsxtBzSDn",
  "key26": "3rHnHRZTvAZRfjQumcUx95RDhxUejkizNet7JZQUUiZpQRasWzhmHkyUDTfGNRULhbQ9LQU73PUoX8munbJgWdY5"
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
