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
    "2soLDXEEbVutGUw5xM8w6c4Q7AUic5qjGpV8mPJ6xPW1otpgMcCsnQpkzFDKjJgfBL2bUXYMzMAa5er9r84A7SX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDyrqN1nT3tyw2CviWMGvyMWvbdvHgXeJPZtDTLmAaTgKyyuVSquPxpar5ooNduTprjSyQ42iqiyThgY6k1PzEM",
  "key1": "3hTRhn7V1EyXKGqQv6b2Ja7XRN8tBaZ5VoysWG6taxMreY2fAJyFvRDvw6dhWNJYXHXqgFmJ4paoxjMEX8jWwhm5",
  "key2": "5Fv3tVoYgs7WYkFB9L8keWmW3mxhVtMb91JpNXejqFjmSJcumYg5n4pf6ie2hjtLuJKwpB4eWJ6zmVN2yo9ySCfq",
  "key3": "2Pi7fQ6bJKzV8QV28ZgKPbarJaYbcRKHTCgCoEGQmoJXHmh5uKmZqzHZjqBSRS5Y9JtoFBBXSRtfC5A6v252Gi4z",
  "key4": "37v4owYjSkgYczpL8XZ4BPq9co3PFLVsySLa5yuWwqKNj7xWM98fvt3gjfDRMEvDX6s4zRyrAguMQEKnkHFUmQLp",
  "key5": "3fXjwnUJUQjPyJM2v98XusXX68LPFZW6Uk7o1x9WMmcRtwFzX1crF7Q2aSM1DHhULzrxHmPD1BjN3wKCx39Eu7rB",
  "key6": "2J38KUBwiomXcWgaYyWrupMUcQmtz6m82a7vEwFRnFW59xqzs6BFth4Prvr3Wb6PDtrB9Pa15XKAeXYT29un1wJc",
  "key7": "517mCSfjE58wWuKJe76XVyKoBibXPGemzCQanCpdbfjF468R3U93VnPc4LLGi8FtgvTNDijRbYyRQQo1sq8pVWZR",
  "key8": "65yhUZvH1hLxmcxmGJGUfqJg2CPaTNhNa3fvQax5SZ9MCx4A9eugyoUfDGnsdTitnGMXejGf6KE45k5R7c1KkKnM",
  "key9": "52sWr531AA2iKJifph9ytVYZyFb5HMYUXNpx6qyXCZNRfWkcbC5qXL6MX1jtakTQwngbmU1GhPZwvpeMvQUjYYoW",
  "key10": "5bZhNxNM3Hum9MhPjyjZm4B9uB9pvM6KffqyQQbrRUeMSGvpvDkQFXxCPwxQFc51VqFk5Kb9JEnjhxMvav8Q5hw3",
  "key11": "pFNStPm1iyuwTqC9JrNTP5qZYRYc3HzyLdSLsedsjmrce9hj6LHgWL3UoM1EZWWgqvN78irFzBUEWHguz3s3CVx",
  "key12": "3CVedJxB7hKpoFHEkad8Y7mg5PyYoab4P9UAH5PQmtiEPdHyJn26VT3wKfsircg3sjq8yWSFHTB3TA2BrVEEEh3W",
  "key13": "5X7T1vjoMhe46oCBQipSHi4jSFhdyDuoRnYK4C5bM8CrVMSkijxJqUmXmcBk8upZqK8YdbSPzRxB8CoAUciN5uw9",
  "key14": "3WjrqrRk3hPoAxkPYvFA6QeUksR954AZMa1ikumerfdtpkYAo97wKjrpKc4so6xnVXhQQGFkX3bf58FTPudteSHn",
  "key15": "5z6befzvuXbG6ahbJS2WwNwzeAPyBG2n33UNjRVZTjPM7XL4sgZCXxDqs4B7kCfvohoFwKR9grAzA3RUFKJ49pYJ",
  "key16": "3CjM5JisNERDZPBNnCgEvh1iYxnuiH5FaXVgurTrKESZWikA6JMeGhX7avacRu3BWgK5TeVdVDQXqMTCKCNsi2FA",
  "key17": "5jhn8xmeFvA4dq9KgWSSF42jCwnWNkwzvebNvJsWcYQWBLsRtpeqUTgT1RQMv6xY4yt2rK3z6AsboLu4Dv7QzJoj",
  "key18": "5UZNjYVnJMi6FZtBCUDcEG3kdrwS4ggVz7MtBCM99P66Zxo2jDvcaUNSM624Nsq9yBHGoK2JiL6Zsnatri7KvNPc",
  "key19": "4pjqmhVF1AuBFLfMERbnjEaNYdVXCcT5wcHseLqWpnpvMZJ4jm7krTMHy4WTdpxkfx5Eu6nAbqLPWVjGSkxKnTwf",
  "key20": "3rMBS2ztszHj4wVykZ5E6CZdomnPfPtee3Z6jZdFHStVhy9UkF8q8qjaWp5hWbq7Z6uVGgkCRjt6yPVAkFCYhn9U",
  "key21": "98kVRUB8J9tqpRUwev4gE6D8FLCsgxDBYLpdcwhJ1afAZcJFTSV91WeC7rmpbEEVctR3BQ22D9ydz6q3NptHsfi",
  "key22": "4SLRcXf4BspEu32cMhRKziBtvRSGpQhVdkGw5U3FnUThvzLg9UnsZPL68x7JFvuqZ8t5xyDtmWnWHAkgVtWk8aKQ",
  "key23": "561zxJjAagHkhgvhVytvWX4F9FmuqLuuaWJU5KZ9CFQZhPyJTAqBVSbkcBN6txe8YxoTPUVpb26e1ax2kqx6fiCb",
  "key24": "2Yk1KXeys7baW2vymnVNvnxUR5phYsS4iADV1k7R9hAoEEdesnGoxe8QHrDkfeWeT827Zu87E1ucwdTjUrvtxxER",
  "key25": "2EkkAkqXMaXzkb8psJmHWg3jVdRnLyVf3hMVEGsuDuP37jhw6QDbmkxGL3bjmLMk7wK2WnzJW1zKmGBW4hoMeiwW",
  "key26": "56beCcgUvMPMH5Gk9aGvzCsYGALK5Gyah1Cqu4HFqyQhZUQMxPB3EBvNRTQUTUbRXYzeiGTF7Jw8jYfBDDZqfo7Q",
  "key27": "HqsBVJWBwEzz6386FVFN2VMcobBPtqwT8Eg49xoNCbst8XqfK83o2sThEaZZEZMppA5ioMu4MJbNETghdokvPpM",
  "key28": "zkW2dc9hroAGbuaSXG6EW1rXLsichRJGVUk37WYMkzaiHHPZLZ9fntvkatrEPf5YUDGezPZ4EAn5VTBeYduBwg4",
  "key29": "4LJcvBdLcwqedWLFnNy1Z54JX6ac6UzPwaLyTnyba2ojKSGaiCRCLPKvhJMZd6Ui4DnZ5gbCWAXKM6UKzYBAVcHN",
  "key30": "5pPWiv5Ms4t9oE5LwP3QQV9Q5tsTgP5wVJMm3hTJSrjh5bLVaqQKYto6howrHFpX3YorNWM9gvgp7cgKcyueh8KZ",
  "key31": "312GVYtFfMCNm2GBQmcQfkEepyAhBZmjWof8fJPxpbAiwEXupBcJztX2jn4Bh62G6bLsBFFUUHji6cGZyL4UMDPT",
  "key32": "5XEKDkMFoMYo1Q6qZbYNoUTXAiE2fiL7VfrgwXDh4bjsghTpuBcjdguvi1MC7orTMsdyV43drgZ5hjb73KWVnGUz",
  "key33": "2yF5dXaq4iSjgr8YBRnaQ6DHuqQ8NWfikZRoy2fYXUzesVZR8BZX2eDq64EBVGb5SE7W3bodQ9Vvs2wJkpRW3AZ7",
  "key34": "2nBWNnzFfGB2qpePWAFhLEyL8Jrp6urgRPi4uy1suYacmLc1wZH72ANUnKFvDNrM73iNEEamXoGABEPcRZjkyWzT",
  "key35": "2HZp9cjNuuAQDpDnaSuM8w5r1JoJZ5Cp4BHYVChUo5mQCjhipnRCxY9iyLx3Fa7BU5SVeQvHtLVTKay8idhUcCn4"
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
