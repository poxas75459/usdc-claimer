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
    "1sQ7Bfhu7Myn84kpd9wDuoQbtuRCj8ibvJYtcnJTd8rTyMPxNQwy5DC5RoD21pMCx8zXyDXDejYUVGUoWZw8nie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yo82PtYgakQxo9QdAjFd5vdTwRYkkhca8sCYo4TEefjR9jFAApEzNyn7JHq6cmZJZwWM8bfgtkmmXMCdFa9Gsdr",
  "key1": "ergouPu36uYPr7RieKvZof3xKAA2RPyL3KXZiHF4ZofpWC8UDfihSrcZJr3wAcEwAXTXBUoCb6bHzaETyrGRNVm",
  "key2": "4E6duUeQ2uA2dTGmzWNER6gb7Zt1WyuF6d7NUvPQE3VS9DVm6jcha7xPVV26ZgodpZeAzidV45e1jMXwrcRQm1F9",
  "key3": "3ujnh1hz3woJYqKV6QZS1dUxiuxKdNVCQ1YCLkt6xe4cwLfMtu1UAMfLdcLs4yv9WWD1goV1ft5heYvwLYnwPhNs",
  "key4": "5iB9VAts5PboxTTnJHJ4rnzB1ZqYH1KrEr5qcMWeg2JBUZCi3GxReo6YEP7ifqcD3qTCwwgrVnNNwytQBhryvaZu",
  "key5": "2PLkVmppWVrptZjT3VAL974djhBfwq2Z6mranS75Yoc99nqVyAz7Ub7Qynfa43knUeuDPFyj9dsGp2hJST9RF4C1",
  "key6": "52EXZjSMVED6YVJiDF8Z1KoYKqfxrzHM97x1tc323KGU9bcfERxXrwmH2YUh1mWd2DdhRiGh9Ybs41Ny2JioKMqv",
  "key7": "2uMjB7YqKy21wyioY5T4m3aXk5jMAjN3FApgPrDG5m8TtN4S122rfEcercLwEB4G7JzpSuAdXjbfehXj8c6isRcf",
  "key8": "3kjqMT56ySbfWw1GWVMy87VBaoqt5kemTJL4WaSLJkT953macG3uBwb1PnNNUY3ruCyWgE4tE3poHia6qKgwoM3e",
  "key9": "3S5EvUixKmXkfdmk1ymGGjDyV6bSWZptmkDRCzT6SPbKkXAKBo1XDUX5WTXzhV2apicRzRkmZzMg82ejzTsxF3Hx",
  "key10": "3QmThXt3epqEBL6A47TRXxEpbpXEQnMJYnAEtz1EBZrYz6dhc4qdj43AnK5yaAsqdKsNU85eMLmuv9Ko7bkihuDa",
  "key11": "4JpTvXKZEiXAcsousZ7vroYNdBrzJFn1kSLHaExzvzoXsDHGRt2vC3RvJ2Q5iSQBLNoUxbPzteCkRBnNjPPK1zMF",
  "key12": "b3nrgu2C6H4dQR81g6U6JH1N6EJC2qkp4Ec1RRgcZ8Va3oTLmiKz7nzGaFhjQe2KsLzB45q1gtDp5N75nKmEYg9",
  "key13": "3ELUh72rXN3PTRNEgSyMDMU9MN6UWqxPrhjTSZw9jjYgLR9qmE7fsSPAspzH6ij2y1KDaafb6ef9VKHgouL9oWxg",
  "key14": "3LSEMPNKw6uqtM14qxTkuoUo1BDbJKtghDEdytz9xquhgdYeFNbvTyB3Wn7cEKUXLmyi1UCDHfFhZt1gTWUzcJ51",
  "key15": "4qPGyfrrmLXpE6MpHdM569AmFVBVP4g39riTkCysnqHp6RRTtfLQST5NnkgiGKbFT4ekt45tHr93ofV5PFzvVg8H",
  "key16": "4B7waq2FqEVoJTch1rUpKUm15SVRrBUmKNWDoE8kPqagMaLvPsSvdbbTWNZWFA789CGcrMRmYcpXCJjggHtJFjuW",
  "key17": "2MF66w9dGtNMuZzaJhAQyhA2AJRrQcmoiWcPW1f6HLkk1MYjjEnaprHkyBCvTnoL4cHFq4iRx84tfpFQ5HxFErJn",
  "key18": "2zJDqZpiTjzQnhpY34ymxByXTBqVxsxpqsH5iN5nNMinbdYEb2KorsbhJETz6FpuVUqw3i8U4QGSHghDSaun2gJx",
  "key19": "5EmzQwqbWSbfk2dWohQYMHXh5Bug3c2qpN5RneyT192MhasHbyEwVAiUacELLcTKiQorD18et3dbu2HaNxUnNJw6",
  "key20": "3y8pYMMUjJTMN8KxLUnp34s4YWQLuX5HwS4TvrdSQSsaTLqUw8XeSqjzVLAApaAmdMKpmXvQrVnu7fi2ZqczR7xd",
  "key21": "5ihweE6BG7jHvm4zNrSy67TquJydRE8pkPYGvcyW1NZ82NQVW1akouVCSZ7F28iUsZTf6eGELF6TztvkZPU6eydw",
  "key22": "44SW1pTi3ADvtWpxEtit94mFdohZYjzAaofMJgH7WJvtpvPBK97ea8DKPZgWv6QTsrCuKjExny7KLdDm4YbL44rp",
  "key23": "tVhj8vkv5ZPw2eJsHjTkWUQybzz6YiCeSv1YEAfynEU3atpPVoZPMjYLpsTs9VDQ9ESTCPXgFXZZSCL3qwjqVci",
  "key24": "4BAipeyxLKJQ9odQHzu8cgRm5CZT4YEFmotAcd4DNj6pfeb8Et7so15UbcGrcxLw1zZLBVWw5gKmhoDk6wvHsrEc",
  "key25": "35d19S1QaaHubhk4sFo1bEVtZgoDMLUWa1bLXscTPjoUNmQDEtYct7xXaL7t1hXrNyksEEQ2YcqxsoxExDCp6NyN",
  "key26": "LZLGf5Rbroh7YgwAkRrL2HcSkeS6P1PzTXuEGoDH9uKNQLfRJDGiUyvUH4EvvuHF9rTw4s63kPMzFXVsmneLtkH",
  "key27": "3yybH1AJNCRXUXQyvpyY5hjjW49UkDZ4WmGNYnBbCDKUWC4LsUB4uFGeG5ZBkK9KiNMyVfUA6cLwd3G8JAe76uWY",
  "key28": "4DEPHTZirRitpgSZue2P88FyjNtJPaJidT3eGCvHcXLE7AHCDbDF6Ueh7ToNE7SxrDQTm4uE2TDu6h1utX5DpAzM",
  "key29": "64veeP1dFZxfpCtsKDm4AsiZR9Tfx4DKov2e9dqQCP8CGiDZUD5ypVSC1b2pwYQiUJo2YFTnRm4iLxVYwjAZ72wK",
  "key30": "59gPH5tXxanhMLiWW3dBStgGtDA5RGT4cA8KmSPaFm3zagBfinLRnJqVTXHXaaw4GWD9GMEhPLvutD4rgUeEcxa6"
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
