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
    "3TmTyhSn5G2vMXUuYAZD2w1JnvRXpvMU8cVkJnPDWSjJietNAdYQMHJE3eWnA7U8xXBmSn86MFZ3DDYpg189Xqsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqbbev5D7niQg3hv2H46NWoqbyPPjkSPHxknVxDuKXYkB5chvHvZ9EJ8x5179VMET13rrnZZP5zUaVRWmhUJyjU",
  "key1": "2BNpEACLtZFQNTAjRDwDGG6Xqv31c9zvfjb9qim4NZrHeAQEpGiRRMMDN4Ks3HhRjRY3uSXqNVHNRXpbt6ExHgef",
  "key2": "2Ucotnu4icBkVaj1wJtsGHDEA8c1KK8a2sj6C7DF8YecY2RoGpa4kB75vsAz1ajFyof5oChFTcqpPdr7CZ84GXHc",
  "key3": "2mjVawMpmWrKXRFLfThqEg3F8bQqADkNb9NNAUvoNwsobPBb53yYb7y3dKiXrBjkrkALUzM6V51fmxSRxLCnufnH",
  "key4": "5pHq2FxXwiBhCYNAhcCQqEXeYPUHPKQtQZuqUiSznYhk9nYPEfwwiPYuyGaEtKmTLeGAuT9Cw7LF48f6VS7h3gqW",
  "key5": "56D35e5duWhAtB5XGfc2y9UFebCRARe5DqfQdPon9PUptmZMApQgodRWGyPB4kVwtWNAb7jY2FmrFUpgDMNNsDGG",
  "key6": "2QCx6nMU2t7AxPoxhyGSJxCpRyi8NskuXZNH3dhSy34TUwZ1ExJ9KGVSJAQGvjQG7CnxwGvmt5DntrmAMrDt3Mrt",
  "key7": "3K1zSWGANMiJ23R2MYYMsQKjwguNgias4MLDgHzQR2x6yo1nouQtjALTtqv4teANyC2F967EkiDJpXq2UA9rPaj1",
  "key8": "3gp36dgi5KhB92Zq4BPv194C875P3hgyMU1GceBj1n7Z75LzS94CUtTJ1wj7hrwF4NB2ux2kAYqKrgQAS9BuGDgN",
  "key9": "ivXdwjjxPKkm1SwUuDbjPs51X74JEN3b5kMPcAhYhm6dUMtu5rCmmsGqJZ55iirXbvVtPtiUYnL8Y1SkC76mujs",
  "key10": "3AA1NopHV6SPFx49xMx4cPnZaDh6cCqFLJ9Qm4xrip3YArMmK6mQ76vvEJ4HCtJvuWBxxFcDvFXz8HXTcATQcU1h",
  "key11": "4vbJgZMLFzKZZbhZzk6jn4FaTwZxqFKxYSocqgjNuQZF26whuHYFz3YGUdyBe4f1wDpjBWMjo9qBBjDddfQoRTEW",
  "key12": "47xFaokLTgoTeSvQGNDMBmLLGNhMgpfd9o4NihCZATBQsoeWH6xNCPvrtq6o2MTGUNgEF2jyKNP2aRufDWR7boSP",
  "key13": "5h4xuyoWHUKzrb6HHvKptmA9gGbfebA1RjEkXWeLQuXgcWR1QzwuS4KhwmtHQgBscawTSFPqj1749Vb7z6dC18p5",
  "key14": "oggS9r76HmEHCdpbJusWijC7fLi1PBqkp7T4BqDFri7bjg4bwzDboREgA3gBgTHq2o9BsUcu6jLWfcFsCoj5c74",
  "key15": "4aeigQn1ZqQSABLPJWDYNawoPmWF8RU8WavEBzr2wZXJBjXnc6ka2fJmuHqaEFPASQo5kCVuPYmccQ5D3tMqfza9",
  "key16": "4HTgv8StwuZFZaUG5s7SNnGWDKgHAJudhm8G6AEdbay9crBzZJHNtM5QAuS9zCR5acQn8khnvSTYBmECdZFbb4e7",
  "key17": "4fzLnjZQNeWMmgXwedPu4MFqM7SVb78kPk8q6pPwbvJJaG449hXqjZktdnCitC7xUur4hnrFdPxkL6tzxpaA6saq",
  "key18": "4EdeLLsed5AYDptvZGmSEfcEcXDuMg7xoPy5r3fjpAcSngjqgtR9a1yNkA8LPL3VsJzz6T6qwnXGyWa4MJCebUGP",
  "key19": "3wL5BcxNkJ1D2LPabfmTrATh8YNshFd9NSCzXCthUsCQGvdS8BBVRRsZBus71P8iQejisvgpzSebeZmDiiCnGkSX",
  "key20": "36Mj4xH2wZr7MA3nz3rKQkpxZHjmLr9DSBFNq6Hpz4b4bKnnjnQxLvBp87YppboAVuigTrBRHo4XRZGN8hycuXrp",
  "key21": "346GTDRvrMKwz2SVKGm6XupVze8UxEMxcKWB9PYFyqeM7EAckUYGiFx367qPktTePoVzpfqN1gKzAhHbQJUpET4a",
  "key22": "ogwXEtoupbjstzPcfj8tjNW8zzqfjfo6wmBXpc4HnLoDF4263bHDiBkffeFfTwfxWFj8eSjPdQV7PF63cN11Jv5",
  "key23": "SEdM7po8g1cv3XDkkmYfTSR1eEWK39ooD75L5x8MWjkgApAc2TAjxasBXKwq8D86yVCXbknJcxRSpWEwnYxF2VJ",
  "key24": "5tFCKkq7T2S7yci96Ls8AGSNkEyFfSZj37E5GzTYc5ytyZuNva51P5BiPWWB11mWVJ1XxLBL5L5wFF7VPbkVZrcS",
  "key25": "56PH7GN6PqwxxPTYeCQrTVZoEnw8stCNCkWixeXMCLfdSuJGmfsGA471fX25yutV44Dx7bsds3pfCo6Bv1aSgaFa",
  "key26": "3RHX9kc42NJAkKBdJXBJVVirrEMwroqfweMM1E6ipmCtr1zSsox8KWvA5hwyUDKWSmyxSJVVbapkrPXzv9mTko7Y",
  "key27": "3HuVxdVuoc8ZpVM2dvVRFziMemZDEteSBMMjoyXoCSD1W9pCtvDRHXRMg5A8n49hYv7YESKuRaythWxHwBxvEZFy",
  "key28": "2yjarQkwXX2SGFmAKH2g3FiheDgWBrB4vRWMuFmHjLgqg9EYTA6PESqoLzP6xtsT4V2maYCZzQY9nqETv9WksLXj",
  "key29": "3skEsTxZ79BPcVQ5Z2zRv9MLH8pj62iLNYXwjsonczXwpMmeRD3f3aCp1yp8bqGdwfZKfCbK28Ze9JMku2DMkSH",
  "key30": "4yFh4KCXcyJRTMhZ1mCWJZVrzoBZzvfxKExHso3hoqU1rE64jU3tfoXX4xfUoVTBcrZ7opFDo5xMRhfjnTxFqcib",
  "key31": "5SbFwUBfp3QqMQwnvJps38w1ZVbfyF3YZYuypEMNv5yN8gnBhXRJtwNgXCXDESxePCooFb6U7c1oPAQMMqAaewDk",
  "key32": "3aWgUiMwniRZtnT2m6pyYdRZW68gBnQJXVG76wXt7RQC2rfkeZEv2MqTYW8vrVMFsfaS9dWKM1KE1URJmwxm5osw",
  "key33": "3r3Ms4uYpDo7dzK4m7CrXBSBg3CeYtXir8draJX7RYaGgaajXjjBHQPViGZsYN9rZFVBNyBztjr68yVbahvgovBS",
  "key34": "RsnFU8jUNdgmDwqk6TL8kJTcuBhqMekbdRh6pWU9EXE8ng8b7GAH38FpheSkhRzYTjZKFufniik6aNSwRtVBHyN",
  "key35": "25kfEpXesA5h5QExNfCHYy9AvgMk9ZH8JgRK6JKyiDeR7GCYPkSAvL8uWkohyCVYUhL5diERQS1EKEpF4qTiVpA3",
  "key36": "4cRACK8X6cdsFnt9xy8k1RXSLT55TrfLmcWjZaqsfGtzNtHBVvkot6dCJMCh5vrQupCsMpTHxWpDdGhYLu4CwTVe",
  "key37": "DG7wmTbMyu81YEQwRQMhkUJnbHPS7ibVqHnwqhhaacoHz3vJvibbGfxXsxTGWpL2FkezaXSFpcV1jaj7YYBquT9",
  "key38": "1uAXBdfzLHTdTdKR7N2xZPgGsi8bLvpM9hUH4KD8yRacAGpVTxdQjgpfqeSp2iPjcDi9cZ7FPDGmHH8QV5dFMNS",
  "key39": "2TnxngEcMw5zaA7TshA4qQSwPiX58TaeYxJWeQVCzACf6qaMVLknAx4TAkTzAw7cyoQxMaYY2Sx8oqbJzwGF5JS4",
  "key40": "zMFW7zxSbri9ZC8iYQQFGxgno6XnTG55wQnEbUH89qgYbHV9iaSfRBD4fidU7mFL5UTxXxiaaRKGiopQNLawG7C",
  "key41": "3uWYjqUbDcCbybG2D3fXvmSfLgQN5Ndm3t8DamHjmQXMzZaJJKZbgXGnjiHLa7yLdAgzJ6rHK4BX27oxMU3167zt",
  "key42": "ir9vrwR6FLTXukPgTiwpXeGDuD93S2GPrjf5Y6oYXQvsss94Sf9axLmXQzkcX2iSpQ1rFRt7FNBJRSxC1yj99Sy",
  "key43": "JUFeLvx8kbC3yb9Dy1H4qEqNBAHcG6b7Dx7amiaUWNMX9wE9t4rEotqudjyC742AN1ZUWjyr5PaazCMhcGgLwEw",
  "key44": "3BKUUFKdsQ5kLCuaZTEQ1HGBDuozfeGE7PnuijSqF6AGCzkAUmYdqgv2uYPcWutoGoUwVx6VYW7Yxrok1AvND2Lh",
  "key45": "2XeLj1ZU6sjkdPg5hzvAwSgRP73Vwymzn6SmU39tAqT11hdCi1QLukt9YvmPbKAruNXXBD4dYhPUP6hatDP2758Z"
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
