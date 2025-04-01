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
    "3vQzgAC3pZapBnsq7ZPX7qQgYyD1LXATQMY1BVWuoyNf8UcydP64KtfmqCmHkfUV9g89UoU3yZmAvApumdoL6cJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Pup1FZ8tmGseaNC8b6sSryAmSG6scrjRozdJ3KeT4sDcvqj4Z7s4A7JLCmo5sC5Xbf6r2ZzfA9GG5iimtbyFmE",
  "key1": "5eXKAkEK7TtmbnQzQVpgiF2szoR2nUitmYVcQATPi4FvpCHQRtjxEimiuhpSszJqnzHbmpTLgckhCRPjx9GY8KzS",
  "key2": "4JuxsgXn8Fydrxxfw6KDqpSJVAwcfrymi4DvsmAfz2V9d8x15uv5FRKFaCLDuA9nVjx4idznRpAr8PzDRoBZFtkj",
  "key3": "3BGDwDdMcy6ehGfAqDifGUkAh1uYf1kmjL9ytBenLP68APoHjRzakQUZo7uSweLTnA2DJonkVbMcgrnsn7gX7ncJ",
  "key4": "5AxecVy7B5jN2Djwgi35CrwQv1SQYrprYQpwAci9oYHpdirZxmYoffFMWpSzurhc8kae2etC8hiSXfuEkfWxXaEN",
  "key5": "27pMrkv52Up3F9JJqT99AaaxRYwc4iv9P3MZc7ewuguTDS9UeGcqKNXuz2GmjpXehFKgSuxn65KBkye2KDi2DqSn",
  "key6": "43WHMRDrKgwJNYSj5rV33cHn7XF6p7e6LxJvAkXdVQDW8rDybC6jdFZ9455eR4RifXaZtVWLjARj6kMxv4jyiyNz",
  "key7": "2ZiK4QkXie557WQzb5fAXVNVkoKXgn43P97q8Lsz4DkaqPdmrhKKQw6vNVkdZidWwcqjrRZfhYfykiwpXf3Sug6R",
  "key8": "5tBGxrzxADbDb2Q4mYA61Nz2VcGXP6GixUwMUp4ufPN4upAWMbZW3GmiGwM5ZTgeGpPW52RXprVbedPQB45ekWrY",
  "key9": "4dLfQPmrxfg6fciRnuU6JHbuhB7gEZKVwxhs6xHnqCzFg4Nz4a899K1zxA64zWxCtzg9MUkYd8tPjrGmwJ97SHGm",
  "key10": "4csNwNsAVAD4A1CJMqLNVJx2mg4r8Rh9gt9vWpNTehpBMRUeGLYBTCxzbcuaJhvCYUNbKZHbJGdxA8tJKr1DP4RD",
  "key11": "rvWo532xNkYe3SXvpPSp19jccNLr4LGBmmAxhbVRkBhL9F2NpFobEkXw4RpDVTaFQXKiC6d28sfwQR9RhaV8zZa",
  "key12": "5sFvpnmy9oRHPbFoCPcSsrX7qK7KLMNhCYQUeaPLKuoLWM55pHv9WWwbpb3XUTBiNU79QC1LbtxioA1YSpQUaKG4",
  "key13": "5w6uNghSr6SUJmu8ZHexwDzCHFWNgQ9WzFzcrKZftMQaGjt3tQBhhxny6A1Cjen2FWtwAZhMYsMVzWoPtYxFs5fs",
  "key14": "4Pb9vjSesY6RgX8KNUz3RjaaXaFDiPKqGS4yKK9BAc6KbBZUx4FaMHVV9uKdpJZD6PQG4JDk3AP8ewvkjxEoBUzF",
  "key15": "2AA2PdH7cGQUKt84AUQUkcZZxZajsUyLTKe72QuGrX6ghtra7JeruAYkJbdKFdcSiuDsCwXWDrRqnCRX5ByqywV8",
  "key16": "27D71QSZjT4maymnz95uv2DnkRwCuuyHoeijvHRaQPYSAf2TzbQYvvyQHB6aAkcKyuPAZbMU5kzj9GmSmoPThP5N",
  "key17": "2BiM5kv9JD6jT8ed9Xd5brcah16cuTESKLFshpYJPx4NqJugQvLmJVM82MRcs8V5pHc7rT5EVwJ9KTD1CFB6pmKT",
  "key18": "3TdEhsuqfvJRZyeQcXVrBw7aWN5S6m21dWCRNfDSqE7iRv5ue89iiHoMDEgKnNBYS14r1GbnMP7nFTSey2s5igrV",
  "key19": "5u4qYr9TsFVXrvBHaLdmjJynwh7ZywguiUmy7Q8gFYfCh1kE9m63MPXSWrCbJrswSik2agxDJiUjqyBpxyVmx1o1",
  "key20": "nXXkRqa2WknymM9kFPRe15VtqMN9vozrph3KDCmL1rK75u5ByEQK3gkC9z9iKEevJQYdJ2AYJLMED6dWiRKNijh",
  "key21": "uo6bRU8ovXZcq4PiBzfESk5XV4UKQkCs4btvew7JWGvAqf9T27XjF8KD5WZCUnxciyiuThiyxBhcmNH7iuhxWua",
  "key22": "4TKxmF3W2eoeHqs3ucWc4Dt1SyUszyJHbcekPXocMCHLW3Joj2ErvVHXSchfJbgmMy3jqmWLTQSf3eBWG4HjLF6R",
  "key23": "38kpe5Ckb67uybC1x9BYD16MtPpKgdRzALiNmWNSFRgcgGBU2Zdf1w1ji7mM45CDfyFHoajQLdbanvYMrPAqG6Ke",
  "key24": "65khFSipwunr1RC48fQdCfm2YnB6e5jis38zqNs7tz3wqhRuHxgML15mb12htt4XoqgfQkF4qdpcLmgk58qVob5v",
  "key25": "5xViksSBpQRzaUPVMsH5TE8CWZcqq8Dj7WZ6cmKMyeuGjzVELsJ9GWe996dKtX6DgsNqY7w3zi8Na1DQmYWm5Fet",
  "key26": "43auge4kBgyDPnQmy6HBbFjXqZhso5wmEmN2UUmfHwatgyHcPdJhErZyTuydLQa8r2stJ5crUrH73p5Q2sM8Jjv8",
  "key27": "3MXceQ22h5oDycMzwAKn3ydh9Gwjy8QR6RoQCx17Gi9daWJnqxPoqgVu2fWoFmHzRQ6FcwPCvM7LHH7tgq1CAvPW",
  "key28": "4gvaojtr6RbtqCavzrU58WqS42iCaqkLkPLixWZGAPULt3b9uJB6vAaXVMRtztdx7jcwqbcqCLVxuuMEJHgk2deY",
  "key29": "2W8cqBjygUGQ9rDEeEjdyBvJ2MkEVzupSBoRNcUDaZ4kNjZAWpWVBeHrReFKQEQuJeSfsVLkRxLEKbghqACxCuqg",
  "key30": "2iDGL7LAkEFWWJo9ddNXbwuSCP92K2kEGCEaoq3vpAFgQ61ZsXgAgrEyx67r2XFYCq1wecSAYze68CXs1igF1Hkx",
  "key31": "28c2xb2rwa5toFa2u7n3QjTbtZBZUwShgwyHZcwoSL52B1sHyprb8zNE2ooXQ5Niv4a8y8dMMMJQGVPaZsVqKGgS",
  "key32": "285w6t56LaWba4cVtwsT21ojkRPfjKWr5CZ57rMkJHjaFoyz9QUDRfWgzFzp6R7NbWRU7yAo3T17pGos86Wf1gWz",
  "key33": "3QMxCaLrsUxoMJXFxA172V3UfpUJqgJDuixhDZ4ZiF61ymRNJwijjQERmkqpAjhxuR8LEdU2MHiCGPXdMHPDKLf6",
  "key34": "335eU6yWQdDRrzjRWwfTTBfxVLjXAriYAFXGN8pxG9AsAr164q75KdKCzJR62RvtEaa7dboP8actaNM2Fq7j6dDS",
  "key35": "5vFxcSovW2wu9dfYbfwKgqbZgVeNyXPFNQDDXhCmZJSsY5XYFmBCSgPwHJnp5CCcvBNzttstFLYnQ29ANiJtAEzo",
  "key36": "5rPJGb1rNwsx9sWe6nzmfx5Edozhbzu4ba3QBQUtQgQTk8y2u6jLcWP4rQHNvXkPTnFx1fzBrFGM2wGZMXc25rU4",
  "key37": "4H6huJSL8kXTbsXNDQnr2AoAXYdVnFvdSrcyKr1nBWPcdotBMeQzcmm3V4eSePwr8pFUq7V1E7ctjVndzTaqUizc",
  "key38": "4WmLWVRgMp6JMJ1veq9SCCJ39ppWGVxyZtan9ivJAeWZz2zTnVnCh3FiK5QBLrpiFZCYRKGiZ54TcdNe54FesSkE",
  "key39": "otsyMj5ASapYSjgWrvCHt1vxT5a8fJSJDS6aNp6BkQrjLr7XH3djDx4RXELy3Bp6G69iN9ZgTvSjMAcjDtWZxN4",
  "key40": "5LhzSWLRGnphL8KZ8re9H2WzT3m5ANm3Jc7vogqzm3kN4N6VcT6N3LEnrA3w7J2YDExR2Wu6m7xmMjGKcrrRmXTw",
  "key41": "5xVZrr6EUv6LyP3ZKTkjf4JXEM8noNMiEe4mWVLwXr2KPA6jhmCDGHCJWpCQKfxr91wJY6CzEJnhuZSRpKHmcSVE",
  "key42": "3RupQduvQNhgPHPbrZPMJpU3w4tJv4gYWcoS7PwdF3tZz2NvbqjUN77ZC9EJCyR99mPFfpLL8KH4RBmChMj3RiQ2",
  "key43": "58dMWCthgHorSdn5qPcjsSeY7W9qHL8KvX27pdAso6HvH791h8abNoP2QK3WrgnFh6bbYEH65H5uKeSRunAunSEG",
  "key44": "4F4dtjf2gAe4959euazZC4n1sPsMKdnr1EzEVD6aWHxANNw3zx6QQiSwHex6tEdiowCmtoeVecFuTzNuSS5uwf1t",
  "key45": "4wQMBz5bQS93aWFqezbHPABBhg8LtUpFsBvnhdck1ML8CWFfmPTapN6h4CXsNMgFu7ZrCnHNaQLgtkx6UbWfYXTX",
  "key46": "2jbATz1wcDAwSTtJNNdpThMEXQnSEaqawmYidvUmBjtAhPcma76WDJU1ez6GSxjGnq9cCCJp2d8z9ABw4LHZsasW"
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
