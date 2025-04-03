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
    "59xZMUUANWnSD5M4a9Kz8omcpTVjJYfqgZB4FY9jHUA7MYVZXZXP2BuxnaVfpYiXdQYMGdHNC6vQJ1Zv8yd1Kx9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365vWrnkpd5Q92ZZUPKwoTVEr5QJVwYFbodJT3TYhKydeoHxzQAik414ac1nVsEjzuGk3QZ4SauJLomRBQZpGedp",
  "key1": "2MTBo3WuUD4986eRtVsBAZLj18dmh8ZbjzeJrrQC4Ymhmrda478CmLJtcuXEWHYDVh7WeZB7tAZu7cqPDGGd6Bkm",
  "key2": "4xgb888K2z7ND7gDzirxmeaufhzk1AmS8nawKPLCTajYdLNkPLzYpAauuHzobBjAzBnooNAyPBUbBtUUbBe85wTP",
  "key3": "3Ce2jYcBFr6Rc4vHsj63vKHZvQEE5HxGakNZTwc3N6TD4DVcNydDG7Mvf1zQPMP8AW2xPq9EzsPvst9pHSzDkids",
  "key4": "qNTvjPbhZBeeYDTnC5PJyPF2aeCUSNW41As1qSiZB2RKwotcnMxHiWKeNwxqvyX5MG6BEfhouF4qMdV9rsL3gWY",
  "key5": "4z3VoVcmfiWn4hXeA2FMWCrcbzGAVBfzpoMHCYtz5rr14dM7nfmEsEHsY6BGotkpWw9uGb4yVRGyeMPpAw4wjtYb",
  "key6": "3jBPwoboSV7CjpdYthgfnoLvXA3QbtvoB85km9RoyzpnBBy2YLNzehnU1avNm4RFC3aHMB3t82MiM3KWeSQNPk8z",
  "key7": "5tVdmfuMu64AvuneW16BiSVANEvxN2erefyG2HNLS8cYW7ojLzesoa3SobdCV6NDWG5ziNbMnMDw5xFz1ZmvC4e2",
  "key8": "5yTysyT1WWGgrqKzhXNJNj2P73PcVYpDQ3sN1hq5Mdi84yp3MZbZ7Go753oPEh898D3atgwb5vFxCXYxJVggWEi2",
  "key9": "3NKW7QNh3xv97B1JjtFn4hgRgzF9LSvg3ufdYzZAbcod5q9jx5CcB77f5PPyXitMZK1PEtr3q6XSmSrqQDb8aGpP",
  "key10": "3QS284yqRadVeQXTSM1U81D8D3VwxczkNLRbBZ6LtUz3G1mWaBGqMnhvKVjdBp12AsHswLDBR6wuCiCT2hh8B6nZ",
  "key11": "514HK1LdzuvVqDwBHe7zUzcRnjGNGzjbdnnLwnGbojUNRwDNkopzUVD42dthR1tzPfKWnN75yYPcqsERJmt5cbLL",
  "key12": "Bcbh3ND1pKgNyEFhW2xURvcDBzTB3efFTF6MMAVpDUKS5RiazuLN35h2KonLQEyU7yHzZCBA9xLLdVhEHnyoZH1",
  "key13": "4inEBicECJzBjb4RcddQ2LRzVUwkQy7RjkXGZbkzBQWbwiqTBYhYxw2XNe7XjdWwaWLtJZdiw56skaJpeQXLMXji",
  "key14": "2iHv5RpwhSxGMwteYCaJRZAEUTpn64caYWx2BsWnKD12ypzvFnbu8otbahEkHesBCbz4v4m4vSaajFavyVzxJ6ZL",
  "key15": "5hcVvCFZL74PR7Ud3ZyGwNP7MkdzsJNVb4Vt5dRJe2tA64YKwwJbA6Bi4BNka7bQVH6E4agTRXMpdYxuWppdVHne",
  "key16": "N95NFVCgp9KcSPzua6Yzxs9iQMruWBqavg7VxXDEkAzitDWUd6Tzka9jgYWhUYgYkHzgE54RbvS85wwB21EXNVQ",
  "key17": "51Q9vhUPGBjoasnRXZ6ouc5rfMk3mLhuxhazKXupQtUbZYXiH2GkzCDA81eupx9U3q9iDqfg5KahszPMw6pFaN3",
  "key18": "2tnSEsksmJVnfepHiDcDSmnzQM2azx5Sw5kV1HJ4vgmfhsMDJ9jDhs9D7KHWf3mKFgXW31tMA4EPv12Xbsove96M",
  "key19": "2wFbxgDHWgtduLJWfBZTERLeNukmvrXveiP8VmPe4tUXZ4ew976ufehagTNpLhW6H6MVsbegmiHW5x7jKNYsY95W",
  "key20": "4JUrqXefzD2fpzWxN1KPPoJeZvkuEBG78m3JLNRaQrTwm5YuG9sDRk5cbhFrnu71du3bawqVwPJczMdmJR7F6xgP",
  "key21": "4DFZ3ob2qyfJG3NK9ZX7P3stn1eDNebn9W62cYX7DidUYW2dbHFFRtC8jURG6W6hx1UhCLUD6itXQfKX5KuitMqS",
  "key22": "2judZo4g7kifm7ts9duZNMXgZ389PYdCTwB82FdGw9wxvAnDgN5AMMoTr75sWWnGC7n2Qsh6Kg3vED5jXyJmVTpE",
  "key23": "5SmTsBkzs7nMZi4QC5zDLWA4qgJZLh73gUDknLp9y2T1xTTdbUjza6Wu3fFGT9c8NZmSi6NxxHy6nkpY1QF9C36Y",
  "key24": "3jsJ3fPoqYD9ceiizJCT6rpfTFPbkatGbuB1QdhjRRAvTQcynvckW9HBcGfRmefcGKtqhbB11bVXtzbp6kBiTnNM",
  "key25": "4K2pd8Q9dp1VmTpGnk2pMNFFwFzNFQYoRRSzCeK8Ad8uwEgkRjzm3ngGirBp7fEcHExetgkrzmZaY16r3bxt6XJk",
  "key26": "61GV12k6Dcmj4teJbvD2EKhDNPUKVDS5dBiZxuaswJyqnW8Z6UXVyFR3RnRb9YUAVWFLbcWRcYHysH5RLtemcYPm",
  "key27": "53FiMRJZTUaG7QrxBwteHB68wDaMGcMimzxa4agivWzcmyZwbWxLrM9CRw7GDLuGkHaWtJyTgfD2hiritjcgEzcq"
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
