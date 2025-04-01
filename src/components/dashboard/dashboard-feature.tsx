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
    "cVX97J5eAhkTwpP4FJF6kPbEgSHK5SNkdt8S8LXJ4mHouEBGdmJjy6zpHRW78m77TScYLRucUivQWtbP6gGVbKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3om3WpU36Xw72jPW72mnoMbT5VR3zFcn1uGiXMZhNJyXr9fggCxf9Q5NBNVGRdWwEG9zPbfjyLp8dR5ZeyVBZnK9",
  "key1": "2M9btV7dpXZB72FWUraPcRLfLZnoBYHz3LhNjChvut2pvvBP1fr5XcwTA6CHYacBq59AcpUFUtrXZwV7g5GqtSDw",
  "key2": "4hDNxEEJtsFRpDQMDfDmwWDSU2RE8o1CYYsJKnAcXwU5d6jmBmV677n8xLXbxe3jUN91SjaqWARDbL3hTTMK2mvo",
  "key3": "4Z728VHQQC7cRWmSpdFGfgYgyWDVFt7R67Ee3ppNzGA8N3g73NocoDbA79PCWGAkv71CaH7LrquEgLmfwsy54MxK",
  "key4": "3MMn3ERitLUNgwVHTuaJxBLtkHQFdGpwmn3otM4yA5SQRdGW9M3emh8yJPkcrTiaSGcQdnjNJ4PQSfs8PhuqPw2V",
  "key5": "4EuwqKQvMnT1n9gkvBYWT4Wh3r4NWFDNJFLJcUTVjBot8mhaJuKV21DqRF1twD8BjAeK2KgphxScX3bT5xTkKTcc",
  "key6": "5pFUGNtedjw9WYTNGmfaKbuB8tMqGjauGnVXYy6wKL2rrgprB3wyZa3A4ENXpxS3wwaL84H19exPnnwidNbaFiDw",
  "key7": "2dUyKEeR7pXAs3HNNNzWHStMU5ywWTSehuspkev8yRPyJr9GtNQ8T6zozyroDDSjA9qjScQyoRpzkWhiQEkpASaQ",
  "key8": "2Vp9rBkZJzqD8GmPqmoNST2FBb8fkaqgwRgtT86oyXg2QE6bCRN3ApEqbPfhMuQ7RN3uFRtb61vyccJuk35dhmy6",
  "key9": "27jMQ1WwckDoncvjQyGmCs5TGNFrVBviJCsAeunJAr1BuNXanNBjzyzX1NLXNRFcoExKK3K6FrXRPbhUiRony2Tz",
  "key10": "2AaQEK1xfCwAncBJ9nEeWC31aw5djAegiJsQqb3vsPwqN6x8fceo97z8bthdbg5kqJfSa8diCEAZ2RK3cSeeYi12",
  "key11": "4zRWxpQ1iZTCGoQaD9K1sSCaCHo8qSfEqfMnRZRoQhG7ddweGep6e4bzrmqjHk5hVEdxh5jnTkSyoQmNHFKjoKQv",
  "key12": "Xd8Vi7GbfwPz6V7MnLeEfdF2vZRA8NEaafzaSUWTwqDo7Uieu11E6ttqz4BpPdrckScbnXvFFHt8ixdMvVVSNM2",
  "key13": "6fbFkX5QNegteS47DTCUdECzeZriviz31ty9LUWaWM1MSEuyyru1BX4eXYCjbpf7xVidw7YEqJx4TuoF6yKiBVg",
  "key14": "4TQbyWMQ25yryzfCAExyjAx3cGe8vYAmG7q4miz1wLv5n4yBrtXRJ6kUAgMJL6feJqH2nMkuNyzS86uJGaKqBV77",
  "key15": "3K1gi8FrSnpuKzkfgNuWuxFV4L72EJpcMKk34uuxtLXx6WVTtZwYyJxZ1FPRZvbyx3UbnsD2jGViX8diMKjAtCj3",
  "key16": "3rkZTHddpVFvjSdi9Nq31A3qpt5HiVFb8rVFuP5kQVeyQYEeG4VF7CnRtYoF2c8DbwUzehoMPCdPEqJYjKoTsNsc",
  "key17": "5wW5L7DcvwkY6g7nox7umha8f5gXPi7GtFNRo1gcox8rkvfnvRGrFVYtJ9M6iVn54fySm69fZtez9fJZwdX7tGFe",
  "key18": "4SUJbiTc2vohRNXun75w7rVFrURS7ARGtGbKbFUmbDLxyvVHUtkmcFqYQFBMopEs5QpksZg2jNFsPxn32igJKhVX",
  "key19": "RcTYLkELByvozrwm74yu57C5sQ2nktGXVHxwCL6sF646NR7T5bZp34NfZqFnKz1aJ5V15r9koh4vxj3EYmWuMv4",
  "key20": "4385KGC3U15wFTbxNSMW1oZCUGi9qPUxXWiGLTzbUQUHomcU81MxUXa9Avf7XAaRQq2LZcpWNKZ2YvNBGTKwS8g7",
  "key21": "dZNJaTBM2DMcJVwH6YjZ1J8mRm6gUZ8phnNvHC14PqsjymiTphyL8i1rmmknap2NAMYkXTxisgMhLj5bR2hBcY7",
  "key22": "rLU4FmFUjoT5CDhPP2bAQ8ojSUhRvGCniFgg8b25q8LRd72graTk77wNtn7R1FW22Ep8yqzW1bCTpt4be5Y3rgN",
  "key23": "5AYWH74WHmFJtrXgwkfVpEB2cuSuWrmokbkwrkgTwSggadmnkCXhMULj4ccfhmPQnRELVxjGwjA15ac9KL4jhcTQ",
  "key24": "39nAvAeRz3iKUqQBUkagDWGoxvraNvohTaJYohsT5vxdwz4Wv1rpNsHfGvBYRnGpZwXWjnenEAYAt9iV3qmXuTLj",
  "key25": "3BQvxAfosAUMGTqhyBX35jrmZreVTTti2dxRqfnupBLtUbTxDj398wLySPRMWWeJaha3a9bpBRimtcsUP6VN7AbK",
  "key26": "3hCFo4ZkVvSqQdwbfAmp2xioferbSu1u88cSRVxvV1VMrKTom3dVXuCBvDCKfFkPQ9NUx4xm699w5N1PmeJxCbQt",
  "key27": "cTr7EELiiRKhc8qhi5zGka72uPLF9cBTbjbm8GuVBU2gkk73T8TP4bMrRQ6teRrJ34bGUjkNxsm13WPEXA4jRCh",
  "key28": "4sVdCYYbfU9RqNdhTA6iydAaVv7BbszWcxZfWBHa9dsipqP9D392pgpehds9SGVmUVax4JxP2BDztQG9nbRGxKcn",
  "key29": "54DwNZiXgvUC9CSQsJZhCrjahYnDxc1uYojNw8VsvdBbc2zCVSLEhxzdGyfToKq3e1abDzHdnBWa6jYzjg5kskPT",
  "key30": "4p4bj81u8YpCAAGsLeR32WtxUfFVARyXw9CjByCUgXAFkJLyJsgS4Zbt6yf9u91zvGVJZaBxfQXz6rA9B3Hk2C9B",
  "key31": "3nFKg2kgj9qfjpeKAj5M1tV8HYVCRnhf3JKSStrfHgLSqBYFM71o9VvbsxX6mHwxdupMDKZRkLKTE4mpqvAsmEAU",
  "key32": "3QFVPgkfjoLMaN1YMesZWxYgy4wkubGaEW1FscLxZo1nF68jdq3ZgBxfrrwdm8mdMfq9tXRGXPpwBnjvHX6ZpEro",
  "key33": "39PQpiz3yQmv8uNnvbM7PjczsCrxvkBsqeoZpkXwy6yf5X3YkKddzExzjvoGpmasPHkS2gTCbmQnJpZs5fHcu4DC",
  "key34": "2KGNX7NW9B2WQ2zzzt7T5BbusuDPwoVAhbnAfQuUpbbCLsCnLCQecr2papUMkXTzMi1qqMxJXhL1b8fx56a9aXTr",
  "key35": "89rtyrVfpJnhnv7v8k648nS2V2nZM9gMzWxF6RyDe6dfNETWu12HjgcNece2cruw7se4QHGDGFahERZsYCoZZzc",
  "key36": "4Ct2Xc5w9r5ePMasKqJJFQpUa8xMJWHevPR6gjDNNC35Skntv9tMLd9wkfJLkBC2UDnHCFjyzCfA28gqUgk9VMbs",
  "key37": "4H5ciZ6NfqNLb8jgfYnWgTt9dbbipVnqkrf818SfTcLXjuTnsLMK9BQac2xrFBUyDiD3fXuS34hgpk4wGiG2gT8G",
  "key38": "5hdb4eX5wn95QEWHsJNYyCuDA3aRRzKRW6UHPnKmgZ8Sm9y57a8e1hDu2WBGh1zFzJKgA5NGCGdYrpYdKwh1ahRK",
  "key39": "VtKgW255Pjds2GhCSBBh9pPdgJHsmXWruAi4S5pAKFTwvMa6vWjybMvevA4Q2odrZvFQYcxcbQctd6SfRAHkmtQ",
  "key40": "4GFQXQgj7NwPEVj4uowBnnXdaJ3EM4YreDX3eGjWmYi8FAcdem8mpMiLosXdpavhAQ5dnrA9D66qboBD5bnmZEyb",
  "key41": "4uBY7fSmJemcpmBvwf53iDud99qddXi2Va3MKVykDQ24sQ9S5S1EvbneScQWF27Rckm5yGxnXnxV1LEG8rvwUHHF",
  "key42": "3HLj4t3F9bexvtSAyRRFhh3kxGJvr22qXKhHBf2cwE1k71gyTUNRq4d5DVymWMuo1aqEbQw8r7X5mpLnTfmZmTQL",
  "key43": "3YxGygjr8ThdebDr8biv76eXLZNAQaiWQSDwE8o12ZAmrYvpzMdTVJU8XWQh5H6Qw4GzidL9hCcbGY439ZVGkM5E",
  "key44": "4j5Q8JbY3EsKZoLNu3xtSqg3Vqb9x9wc11Lgq6mtoWdxGT4w3vToz2HEVhsvsYPRGrGRcboq88Ymrjz78W1CxQN5",
  "key45": "59JFL4JXiSpRJvZEbXHvfpnvAECjR3VUMFckdectxELy4tB9FxRHZSM7ZsaPph5C9cdzjMAhW3F2XyCy3wM23vv4",
  "key46": "5YZVSryaH1f8gtsek2NrwggtwgmYA6aa4NhyETaTsHVW7yMPtPsEzg8NxMXR2c9fwUeS5x8PwTRkfQQiy9mF36Aa",
  "key47": "5RGmxRMS1UTewXhasJmfm183b8un1ox54zQUYHVVzN9GLVEHG8qQMiuqXtvdqgX4p27zTTzXpaJLmh6QFhK2pFQ2",
  "key48": "5DdZhWHGJjpv6JnkntWFunntfzqw9EjRgw9LccNNL4bgsJcBUo4hsJJmY83Ft3hJKqyabE9yHU7zuqLRRLaWs4Tu",
  "key49": "4eciZramYEX8rvZM8oYF1LgMCzjXPuVvXUJfaEfirHwEM6fUwiw5pYrUHi82UraEdx38ruLxms6kcKxMcKr1sj8d"
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
