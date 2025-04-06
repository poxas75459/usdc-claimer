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
    "3UncT3kqQVLG2SAJ7KTJe5rEvUHd1KWk3hiMHviQzu2Ttwy3oVhX2LXBKWosyG2Uv5JHDbn17EA5erkkC5NeBDfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61rq2B8Y8LNEAWdk3GcjTgL8uN1HX4JET4axiDShbyvUubbADwnPEpujaiirLGE7Vv8mHoDAjXDVGxkiRARoVeCd",
  "key1": "4KkgrJfnffbzT1mJ3sdrRnZ86bm1MNJYotT3qFbKzvwxwwqqD9jb3cdWXYh6gM5LfgQ2GVYmbgaw7rtippPongjA",
  "key2": "5hmgbqVAaJkC5nQKGMoqCQ69zgb7mATiAck6mMokKpF3kM4qKqLRaNCMgyh4zS2tcbeSpA4KHtgdQNSVccExkyAa",
  "key3": "3r92m6AiFkt3UURYBdVNURwCthcr9zUjKZacv4CK7RnKDghLnLsqsQNGVVLJyBX1UsfaRUu6jowZKjmfKnNDwMeq",
  "key4": "4ugqJXiEStJmTZa47XAKcT4XGKkPerhEeHAsDZsWEKpaeoeivK5Ujc3Zugyk8c42CoEq72ZiWEpqsdZa2MN2s8Nz",
  "key5": "JuPBAwSV59GkxHTpnFXo47A8EGwunKRswBmHkLBCfNHkNotvEVSmbeaKA5aRV1yoDcrygAbh68gNAVzfiTevxLm",
  "key6": "34z4xMWZRSisEJGYADdbiqgHMA2kpe994L1UJersww1BCGYSEkHAUvrp11z4VG9tDH9WW77tpUYBQuqoPT9Bh3rp",
  "key7": "65s3CuNBBP3wdn2WHW3EnHEDQMCZwS7BrzMtfB8zXNykoNgPwtazqAc5AWsPBk8vpz4MHXcJ6j43mFmt3R4f8C6a",
  "key8": "2Dh1PyrS6PkX2GtTxppnGWFr8vxjSXwjoCUwLSEKQXA2aP3YKZ8PmPrbsiAwWEMsE3WnMFgKD5NbV3Aog4KcSgYv",
  "key9": "5nsehggzohcJW2mCwzS6Z7nbU2D9waK4NMo2otnXFiUCCRybmpu3nvYBGQ8G7ikw7CMo1EThZa6Q6LZvbx2Fgr3k",
  "key10": "iwZ9J4aJq99QToQWuvSAxHcu9ydTecezx81Wi6QSKsuCxvEXDU1ejc9odUdo5jUcuXyHyCpWo7aTZ7yhPpEDeGF",
  "key11": "UjoTC1Ai4Le1QFzevQ5v4uYooTT2gs8d91ipcQME6DwgL3rhoL6g6A8LVRuNg9jHnBjiZazjJxinV7pGckagzim",
  "key12": "4fNSGpwNnE21muwSynFDLx3Z9P4hhN82xzfu2BhKyzM4RX4zPF1GWMfYBGGdEKsLRG1c8gNxa8MpRvLwDGA3Aq7u",
  "key13": "4Nha5hmZQkLFNaM6YtbCz7ooj2rSahjpHxadJZJf2f8h8nzsVC21rvMkLdW1yunZV5w83yqgnbocRbXSNQ19hU7E",
  "key14": "2GDDgCJmWUKqGcRyPxR7QKZJTPcjoqwdA5TgVijbXFrXzS42qLY34qvb7vg4pGm9najDn5RQSiEmnAmDoh6B1jmU",
  "key15": "27KhnVEC7JvQvRYQjQYeFs6Zg4HiQsRFL37wh4gZdACqBMyTYJtQ47yFR1W56uEmP3c5PegoRFDpYPrVznWGHpxH",
  "key16": "5cFxD7srCYCwuNpSytB8FdbBb7okuwZ3aioMaGqUB1axQXksxqHBCYh7Df8rXComWj8nAZo1XHctNXK1U9uFbccS",
  "key17": "wb2UMLMfky7VM7mXf2sQqNxFce4BPUGnoKXcRkf7Wr6YvCD3kCFcJX6umhc8X8S9ZURYh4yQKPmmzP6BCnHospM",
  "key18": "28XPBvNkkzb9d7c43MaWFB7QKKwGLqZvQLpt7xhDDeUTLXr9Fdr7NZ41VtZDA82PF5co2ipzEPXcqAZTEjRBSVwz",
  "key19": "57rPPAdDdhKJhjUjRbJJGNGmvZEJ2iSzwpgetgB5jQzhpcUEgEonSfWw7tQzkCKp2TM6VAK2ZkGcMFuEZWrB2wTF",
  "key20": "4PANPtW7ziC2bsCdMBy2xeE7edZZuu5Kieywx5BR4kW5mKbY9Fjtizwnvf5RrvmyQz1jL129dBnNJgCo8my16Ni2",
  "key21": "3tyvY13KNbe1zVmLEMBjN8MEbN8cUeN8paNNHv4Nt9kR4czs25aN6vHnwhJ8JvXsKj1MwRzXgMLqk2b6Qp5C37uK",
  "key22": "pdtS2oNtCHdSF7PDrHwAY4c7F7Rc7gqqRcxjj2yiYibnse3SFeLEaHHZy3CMd3B3t9XQfUuRSaaiqFR1g5tdmDR",
  "key23": "5pw5gQM6yiDEbp3tSj1s2a4xV2qrwfFMv3ZV1KY5NBYh6hZAf6SMrsiJi4x3AcPBUzWh1oEjJ5RQdTZUCMYdjmqS",
  "key24": "4t7NKBADAy4y5cqAYdyNuKNY3SVmSgG29X2TnxrTXAV5x9L1vj3AtGqS8sfNjxJGCKUuHMq19MHvgdzMXJcMb9zm"
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
