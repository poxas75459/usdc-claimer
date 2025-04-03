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
    "4GG4PxkDjKhXCezdx1dFz6RK3KmupS4omdmu6uK4ayWfqd7Fz2bCXykscTTzt3LRf4ZSyHBuL2reAvW353VHyFEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtxixnsnfsNtFe3yJ5wBcKkYcMxkPtVBBBiFL2JFFWCX6RA5Ya3fmEHWdgm9G93aM8DFW2xrMk4FYBNcNV8QJBN",
  "key1": "NeR9dMhBUSCWoeXkhqB7zMvJ6AmaaVx3vALZrQcHhinm2dRbogSVPQYbfJ4cRxE8yM6r2J1NY46DXqoETzzZ5NB",
  "key2": "47cugGfQztcv4qYdb6hkEpP627Pc9AVqcbedXGtV3jhC8hL7iGfJJ1DhpK8eSGix3hm4ZTxRyr8KRwioPxo1AuGu",
  "key3": "4etkehF7wkWDu1yyrMNKDMYdtJWRJKrQGhuq6xDjRSanoGivw92LM91SL5cbygjhHJDSRPPF4be3F4GDYhnRohag",
  "key4": "5mJ3oaXCwQscdX8moFQWJhpr49coAUvbBZ2PpK4sN3hTbuDAntwVdvaBSAfwJvRE7tFRhhvTwURWcB2gDbeKfuYq",
  "key5": "5jHJwxTQGVC55Zwy6UgRCmpGEiF4Jos6fYAVeixsfhtyDu7vBP5GFe54uKQhxqyj8Xbdx3kcniBYf4XfUbCjiLN7",
  "key6": "2g4FeueVGH8Rq3TQHgAQggj6r9koVW9zmJWh3JHJiVxuJEEDhdS7QTtKQBAjvrWEzQsNw5cMGxyMztYdsCXuHroa",
  "key7": "3jpwm7yaeq9LzfS57UQt83QhN3fCPfEu4fy2pgrRuPMi3cZ1w7VB7echAMRmHArYNTQzugcchufiv9XSdUHFmFvQ",
  "key8": "58V6cErC2efCdnKpsAiewwgi3W8PhNC1ay85RmF5NDPpibC3gFWsyJwgKayPtPSTWCkApmoRMhvsFsktv9F1Xu6A",
  "key9": "47N2tE5hcTt59VBWjG5BmmqmKCpmzH2vTHZTjg9WvfsVG6EnyGercdt4929BJpTJbk2MMPjBNad2xaBPxr5JCgmL",
  "key10": "qfx2MHXL4PwggbS5czA65Xit5aFEiYcSqPAHtEtTNKJz9EsBnfnxu34hPwoaXAzVyUeNq26wK5ULJkTvj8Ku5Xh",
  "key11": "2tv5R5tqZSZfiPUyYW7DfpZRq5Vf2CCvPtuH21JYJ7F9ZMsn9bBxvQycrQMfs5BpZuQuNXJvB6t2gwRqpfXefoFg",
  "key12": "3UaJpEuWgv2HR7Qd3TGJBQxibn38BVnTKru1EZ2CCtAWk7xAuMqoqCGoAtZWaZ7cXDy5txXk432neftYyT1E1K6K",
  "key13": "3NpMXUou2ewKQfpqTG2f3pATB8pvUEHG1UE2RUR6aUSw6Qeok9idD9bEqDvbWsTmt2hDvreqdHYnQGhJ6vfkcMom",
  "key14": "5USaC3CMddDm1PG4GfUXRHWmDxcyb6SkZosv7dgAoTjPZA7TZj62knzRR8otqqAD8MGEr6gP7kjhYW5TFy32pk7s",
  "key15": "46gJGCxeuh6kkUP88xGsmLWYhJuSPUxVNowqQxsRqZcSRS18XB9pgvZZbTQfbb3GRUtpWR6ACzMih6Ez13dSUnxL",
  "key16": "4xHCvohrYRWb1Vq2DKQNV4gBx2Kkjc2TwEbXah69apaFgFEVWL2jNVT7K3wW2qwgaNr23Bs3KYNyqbDg9yDofKLL",
  "key17": "4dynrufxSA1Ar99NrRFjbgH1sLb79hTvAco6Eb1ZGxQBHCJT1cYoDzH9cfvmaajGUGS4Wiom7mnKdtf6S9Vr63Hd",
  "key18": "2ezNmiccdxNK8FtEQwdWbkYdgnJiZtAL3tDqnUcfpMjnxRYGTkWvZ1AbFmGjtEF6CjqR82BRih4Ti1zifKV1kySW",
  "key19": "mKggKg1ApWJ5QezjPfEDj5GKBTwGmqWQDkTCAsbNTfBURejv4VKWYtgsXFaztYivisqmqZiKvkAxDgtT6Lku8M9",
  "key20": "biAQpodmad4Xnj2n1yNECgfNqeGp2wvpJkdfu6qnmYgrweYUNkEssTKLeGr7Ao7uA8wu9QoJVe6ZvH5PVk4DFBB",
  "key21": "kitktvhco5ARx9RKkKsJWBfyhegE3wuzcKkJM1oRDzAd2tmm6V2Yqgcuse71UN1XvhczrV4CEzoc4KCAoEyo7DW",
  "key22": "5GRU93nu8U6GyWggNFVN3vsGLUrguYvXmomMyt1avbazyJ3Vb8oLPrDP4rLPAFrVMu5J7YHzRKh4KsZG52rTu4sV",
  "key23": "3U89XjCy75p8bw6VEBYydi9KkYN9URLhnYRUBCCEzToYwcekz5eLP2wVPa3HDPXRTroMSf4cWsE5MbqKb8XtqgN9",
  "key24": "54rmnsFj6J8Mcv6M8dQqTJxg4QVnAv54mbMip3kfC8jP1fRuxYSg7MQN1S9aK5eLEZAWzrW7DxriHf58xYUPwQvv",
  "key25": "5EAQ9H2KMCs363rM1P8YBNuqR96gJr9bDuMGecRuvfxmvB9xBPc5yoMexFexxTR7iHFhLEUrvvS9H2UL4RGLtN9o",
  "key26": "4VdhnD1GA8W8zA9EidoKzV8PQeB65mWHJc4C23JdYNyypMfWiX8M1kN6QEgEogWgEEzrnMszKQybZF3dWVyagkDb",
  "key27": "4w2tPaJFmerSsxGGriHj1q9KHrxafXC12ynMS3tSjdXUYR6Xh6F8euTPoCnztJy5VZF4iYwNaV233kYNd5ugoZVe",
  "key28": "3TJ64SV3nTof5JAkZzK6fYFTo8pTvZUwfCcwk28DX9s7Ljf2XK3F7XMZHuSzAfpparyJtY6gVCTDSRHJG2GZUmyB",
  "key29": "2PwRvXoxZRRFKQrcLdG1qeecLKKCD2JBYcpcRAKCBPAfVwSjxYaRMmY2Ru23wfWNMmSiPqWaZDcDiirzkxZ7h9xo",
  "key30": "4TAYobTQhfDp2b9W49cNgxrjE6LE35PaxDDWctUmLCVHVwYjRE8f9JGya8BY7h4xejPp3Vv6iDSPbS6NYMRbGNGy",
  "key31": "5NQC2U13Pmf8pYYZLuDeU4BX3Qd4nZvuBn8W12PCvDM1AoWEDLcHATKFPk3kkGz1Syt9ta76azeQMRtA3d4nqYA6",
  "key32": "67n1C9iJvoVW6AqUEsWdqiZmPFy8ABCmQWc9oNDYbQWASxKvLe8S4S5H3Yj1Gy8BB27mKLd7kmZyvmRrDnbukMxq",
  "key33": "64iAaFWV2mJ3jXYZSSi8jHYQUVZPi2xGFmTwpsUUVtTrnfs1wKp4hRUd5QzVwkqCXVPgmYiaVSqSX74B2934wrvB"
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
