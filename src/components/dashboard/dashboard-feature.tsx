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
    "X5SvgDRqNNyoXCbaNmo1JNAAJTrYty2HZhTVbz6iMdw13HoWrSYYFm4NYxwmbwgf7kUVk4zEATyrL3qbNB3YqA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23QX25Hvmwdgb89MGkSWVHPnp7LVippaiU1uUUY4YQvLbtexZ57oza8x4k3KWXdeXxsvN2DxnUkuf7g4C9VPEURi",
  "key1": "4EGdgvCQVJGBnrBxvJK1gNMwv9Ep2YTMkkKj95TnwWjrxYU56yLTsAYhxCLZ2yUg1PaFXRdsjb7Qu73voEjoMwfH",
  "key2": "5xE2cT86JT6VAyrjfS4C22mNHieZcV66o7UCesmkZJHkJp36zLBcJDyxpVWQ2qK6ArDU1MQ4w8s2JFyDEJq6r74C",
  "key3": "4LSA19YfmPrhEbAnH8vMUDnpc32zT8W5hKyyizy1EF4o8fHGA7cZekDDfaS9P9NU7f4wTLioFzUbhRtpBFVN8Cg4",
  "key4": "2AQC5LHXeUYNN9NJYHnUACgcKGHnL75FWNb3qd9yoZWtA54KKo7Ycit7Ao8PV82khefFLGbvgor8Dt6xvzu42c6V",
  "key5": "3VL51mkyCUoLSq1xo5pzHfoxryqkDuxn4EquC97rS2FwwcJrragKxdnrYF8gsyc3khanHax5fLQbBvTCy6W13evx",
  "key6": "4eG3yX8NDqNeiSH4AuQHTBtSwzckbmyLwEzsTXpT2cFph3PLsauHwA6ebKqGaHBLaKEk67NY9gsbmTteRpd3fVPj",
  "key7": "4qSWh8EVWfKh5HVZScUyrVUJwa3qdTZz6FqTem1D7WP35QEZY9jMetRW4LUyxM7Xqy8SWYmTFkCKHBzrWSefFLdg",
  "key8": "5bz7cuxn2A9ERr5exDzUJf6Cnr7iKxCXgkt1Dw2XeMobbKoTRfUrkHWWTYC4EeGSUVPduAPML5wxztXQNZhJBsGt",
  "key9": "3eWMyj6jWtzb8xN8Gg6Uszscs1DCXn89pkhbYFUDCuAvS2vCyCp9FuyabLVQ6hZuq5T9y4eHMaR4kY2CX1fRaSSF",
  "key10": "2aPDwGK43gARhwAjXnACPKKu9DPqFwzk21788MjxHUgFdNpgLXy3nNuYqRksL19WmSDfbN4PgHWmExmWpSaBKrYe",
  "key11": "5P6JQq9EpAVAmq7Q8CQaSjM4ppcYdwrgXmNDzfskrUp18m8zWaTqXWic2Y5KNVkvNAiMrT35y1uzyAhUxQz42PrJ",
  "key12": "22wFPXS9Z3ge73qNdMx7z2jKqYkFpYH7oWTuSQuZqut9rDYAUqv9Cu5FC5y2zxHBgTD4AJVj9EKHnpfDskPQQoU4",
  "key13": "3V7g5zZB7BckGxGcuQj5WvK8LvEzsabb8S492UTee2e89wJyKVFBqmAiDswqNCGMvZ1LxW3TiuxPJEKysa8boS3a",
  "key14": "4HwVS5xZN4Tm7MbGbzjPns15iMj48TCLZUwxV49xf3EyTfnERQ42gZmnCz66wbDcfD27CYcwqvYKwHVuZzbdgbNs",
  "key15": "PtnQPcZKAmMMP4gKoA2MycEfgSVW8sXk1Yod4ZaaJmTajEAzJByUFrVrD3h2xTRBymh3PQsuLnFtWd9t5n7Tp9T",
  "key16": "5GXqsUc14iPMJ1LQDsVmdLMHUWDLT6myziF4hnkuPeeqcnyLz9vsxgKEefm56yqN1YRVDcMLXH2dL1Q4yNJTV34G",
  "key17": "5jarSoEMV6cVxktMXGcTJeZpxpQJuqRBaLTSGhedt9zwSf2ZZb3rq45a4pobpnujkeo95JDQApW16gCis4LnpGg6",
  "key18": "2PYpU1m5yF97htF69wgM3p9ycrVhyneqD7b48vsZhxpNBEpKJZ153o2RgBw1QysuX4o2t3AGBgQ4E1wfatGwXCv3",
  "key19": "cM2aVurcRKrYzbV5F3TCTAcea1QCuAAt3pKvP2LpNwnxrLmiazfjjpG7JZZ3QDMDAJJc52a35BL8pnHyMKbjz7M",
  "key20": "3dXKcjnzN3xHab3ShFhpmDPKfoXiFvZUhsYR4BTpeh79c4Pnp9dmmJTNPyu8YCkmo7Ve7K3deqAUU36UdJBRaNLY",
  "key21": "T8ohHbzxyYUBLgcg4v5wK9LobEE8vCBDJJmPePVKv5PHB6gacgu8c5RcYC5mDVNJ5Gqw8LpPixyXhYH6fBTg7z9",
  "key22": "3Hhve8ea6sJrQEubBby2A6q64jhfJmfnVCJcCWBCJsgjyuhhV4pm3vXqSHqWt2ML9HgM7pUpoGWyQL9spBbYS2W3",
  "key23": "24vXuYYDySRde7hBcVPZmDi6QciEMRNsUhaPvLcJYb3riS4MWcjmU6VC42y5oH3VgdLjLz4YrdoND5bmEATQz3ZE",
  "key24": "4fnadgxaucuRWrQHa9ZfrZN4eLZoysr31CyykAofyMDBXG96jSSr9ZecwCbyB4LTTevnWdvXxUhEhk7DW2AFtARw",
  "key25": "4r3E7KUj2Ub6eZFALdYWb8ZJidC9BxoZdALr196Bdk4kKDRpZ8yuPFsYnH5Q14ThwJsk6mwbNR6B6u9dTT7wBdJi",
  "key26": "qGCbUFYZBgXYAjyUBQEhYmumB9PGM5gsJdDRTeaM7ihiYKDfyvnpkQDwYAu9SoayezZtZk3NWoy9acUB68vfAHD",
  "key27": "2t2wBXRNoenj7GwPhKEV3nxf74z5kciQV2Y7TsfSPbQvpTiNDrjcbgT57CWkEQwrXiYfN9aaFASY3Zuqz4LPYsgZ",
  "key28": "7LztjJcLqWTd4wbjpsz2FhnzoDADdJ47a34tTDL8sZoCGnqaRpM7LZK2WoyPrBXR2T3A2tvLHYkXmtg4ZyGzXrg",
  "key29": "5zHvWstueQggjstGwS67RCFXdxv9yCrijnbYVZNPsT8n5yBzHWw9K1bXJdDjfpEWy56rzVVswkAjYQ4j6YPc8G6c",
  "key30": "5ZmGFeC4vrm79pDxXj3R8Gtw9BPAETT686CEUmEnLN34QHk4JDSmqzrkSZZaNbTesARhjVzrz3CiXUW93W5Q17VC",
  "key31": "2i4QBirwMidkccmRqJ5SWNhHtdr35LnzVFPC2CqCAz1GrYDaEeJ6sh32tD3hCP9auZt3ipymnrbCmJnnJCaeUNxQ",
  "key32": "4FjczrUCRGhShP1v6naiiuE2iTNKYj4jA2Xcafc8H7zX7K3TfXwZBGffwyH7ntd67NjcjepMRUGTZU1v1EGiuvdF"
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
