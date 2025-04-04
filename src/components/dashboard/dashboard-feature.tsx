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
    "3G8fUfi9XodFXpwALcRFPRyVHAcg449R1r7HoM5uH5p7gwxizBX9CTGPqXL9ACk4fEs8rk8SqjCKBT85RSeLnSzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fHdYYmEJKh7gBXxpbRn2zkzuGy6iYiT4wVj2pSo4L3Q2Wr6si6eqb7cdy6o3i1K5RBcNSNdqsBktDZy4TBMS4q2",
  "key1": "3bCHLdWtpgfKsLGEbDWviuZEWQ7rk9s4hcZArxhGC6X6xVWt6jSng8wjxkBUGYVxjCLTwfY1AmaovKUTk2t2D8ou",
  "key2": "5XyYZX3mM8t1cwqWgZvEMgbTjxw8ecn4YecM17tbD2H2QUydTzoNbfHqTgPxRkSHnA3F7fouMyqJUuASkPvvtC7Q",
  "key3": "2rh2SpGmBVfLDK1hHwbVHnuXJgMXv8cjNVV8YPQKKnGPZWgTjjAvnij1yC2BpSakqJjLiabFzUjY88JghCZFTAr2",
  "key4": "4LBBwjRNX2yL3F5LE2JknLeDZ6Rwih4yghnhy2gq2eni2gh2NeH3p4nEw1pd2wSTckg9wgp76FDLhYZvGGZiYc4e",
  "key5": "3Mi5QqMXDBYvJgfEWzKMWv6i3qzVKopSiGvwuutYpLnJ4MrhGv3HaWAexTE5ZW5Nuy8KNz8ZFscjSs3Uiqeir9gK",
  "key6": "4uHcKxT9vfT3Fq9xKNVtcqFDnacmpxgiE2asRkZj2Ef9bL5NoyM6mdkmE2XcjYv3Swa3XngNbQ1cxB3FdfVzMqim",
  "key7": "56ATagLV56U5b9gDb6NryZfW6CLb3PqCnFgp3CwfHbwq7zmEQEak5dvRtTxJ4ghDbzb6pEXpMQeycUBMwzG9t88b",
  "key8": "3SHNCYeJBjdicYxTrAL5gMy9xhKzmvZsUYgHfDo9RT2eK18txbHRdTbfPt8SoJ8Lo53bt1u8bPqYGnHM3gsGa4X",
  "key9": "379hc6ehc5ZZ76PVLmt2igoC6AqXYYaAU5AhmHvqQgNZxJ1J88QRbipSSnCHnccsrENtckzZ8qHBsKSdjTpHFyXp",
  "key10": "2UTHG5ZLtEHbjp7t6e99rrnuyFPs4fgmKDvVKrEwfmXWwvg1mnnp97CVvp3AktifeSr5oR7DsgTgBfB26TvEKwK",
  "key11": "2gfHwouoeNNJmBWR8sXkhxFVy74YM2LwJn785LNHuqTGRxKwQvF2JSRwRUiPxpejPRKD66nkbUR7BB9wnoKMMfWC",
  "key12": "Dgm9JeHZLMYysTvaAWEL7VhhoLfkaPAMTqdvfNhyPAAVQaHnMGBZHLjMEC2sMhJfJyb4LLKgkAQUThLFjrduwCt",
  "key13": "mi25Pv9wFn55R6ZpxVHcmz1CoDHzQKpAMPycPK64jckH68Mz3JBT8NakVt9equSqW6NEzgdYfa5733nkA6ZEb5k",
  "key14": "vnHnCDTmomeHiEMnH1V6b8z4wprP7VehvVghL4a4dYHq28j795a91W35Gai4foiiWc6Cn6du9Ry4RsHRjAqJEpx",
  "key15": "2ZjTmrfae74xaL8PDqYnYjBcCFs8HLzaiUbrQoej3EVZfwtFZ14B8x6yueiFioVkJTJ4cMzD2rE4ZQYsvQmmBkbp",
  "key16": "3azjxpQTjkWXztLy9KvWjXc5iVQyGWvXQM7JiJ6bBtZ9R9orjtLt962zLJP31WHMrkr3URUp5J7SxU1Xt4Teur9G",
  "key17": "LJzYATj8D1CyBZNWvSESG3v6HnXDnhN61Q5k81c3C2uVP8mzjjANwTALzrFisYYn4bS5u2iUbxtVxcxu6jbv7Mp",
  "key18": "5HqWLFqDn5AbbiqodbW6PHzrnZdzaD1g5uGuFjCJFBJ7TBiRTed2o5nfTaLSK93y1dr9Bv8o3NWBsQUVdf6f3sfG",
  "key19": "5i8EzGBePsdKGzuZjMSHmj1ZBB3RZB61Lr8vKCguQRixdd9tmCofADDZEn4Q22cgkbmVEzsHYVaZpxZYhExQhhdQ",
  "key20": "4Q1ynnbGzJ5dvK7CbrjRBnrK4MVhAThppS59Mc4o5AJsxMRXN9TwZFLtboXASLMT94w88mF5Mi7gHQJjczSDBDKo",
  "key21": "3U8CpjaH5ghi3qaA24w78wny15g8ZoyGi4zWWpeQWoFAUhFHnSWLu8r8Hwx9L9xKXC2NvM8vb6V5Xhd2q4MW6NPw",
  "key22": "2yL66Y5wsP3zewKAXCCK1mknSSa49RE7R2DmE5Ne2BSGASjMwjkZdDEeAyhypah7BDdTL4yFrYyJwR17vDoCQimC",
  "key23": "5vdV7GvwuwxDPucHk9AFzVimCo84Ta5zKyuyQwKh74XezYjdwbgmsGniaWrrMPnyWpxCaRqiV5NhAgK7xsPKFQpd",
  "key24": "gNgcP1PHUn5QBmtvk7h2AEiSJMbrbEZttPs5aWNptuSjZ9A931b9e8zKm6FUuR36844H8JGup1a5cWbFAJDrY6T",
  "key25": "5tZjxEG5qKV25wZnwyiF616Mjrezd2gLnQb6i1qA1mth3XEe9oFVs6R6qXc7sK7jnjdyGTy9pNbeducB5ivYCH8w",
  "key26": "4GxqeXVHUC5AmCyKodYXLGB2GZBcS8sZ7DzziTZkaPunTeBoe6GrsrBxR3UCfcKbZeiQ6MrxFejsqZxfD1mYHR8t",
  "key27": "3HedfoP9NNSEAq2r61QeASfAtJwER3FbHRrzUcnikWvmdiALeKPfTqUzZKmAy2jyLZaA7gzKX5oS5vptP4fBPE3f",
  "key28": "2AqdngLNbea3WKfHzZaTrfAHfXs5uyg44wooomHPCbPBy4LHupLzppG8dKGVvu7qcAJUmhDZKGh6wYkc8yeRYRqW",
  "key29": "5EbxrhjNjajXDaacvT9fBmmGFNU3ZvKCSxiN9Kidyy3UWkEE7EdMjeMUEK8G3LffyTuCFthjww6cCQBWrDCvk79K",
  "key30": "5uvB3eQLv8sniNweXkd4NhvDVdc1cSMQYRQcc9v2jTAV7wMsA7apLEo8VkpoGxawshwmPwHrS9tdzQCFjZPkX792",
  "key31": "diYQUoFRVj7uY8wdYiErSY64b4qNkMAY3cKDVz1KntD7C8UFcp7cW99EHoApFMtH1fjFgtsATXQE67mqrXjR3yL"
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
