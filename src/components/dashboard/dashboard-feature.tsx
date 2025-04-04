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
    "kDwq2f3wrq1VpAzDQTUVByNWPy7jFFkfMzhLj4hankQLPccUSyx324nJCt5sB4WNRn3vttQfnB1hJf9Hi23PtAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61n2Sh6SUD6KA8Hjk6rRudNs9GfpPkPFsnKzhkKutPXqdb7aNHZ2wCacuPaUGdDLuExaexFDr9G8jM2mc1RMnv6A",
  "key1": "277nEcgU8XdK4CyuTDXKgPWx5QJTs5i9GBY1BotBKsHGPG6FA7R6WEqQi3ZoWnfppVy9EFFeAkggo8UcoznzwqJb",
  "key2": "5TkmfbSXR26Q6uL9TPC6fbSYLSTjBBYiqzo5KF622XFUjnZGUjBecyobsRwQUzYWEAzvUJFiarETE6xvAt5wcpnb",
  "key3": "3v25kKsnmb389LwUoCTxbyEGpSwY4HnRPbgN46bsJRnyLMNrRy95B5HUcKjKWkVvFFrWm97bcai1AtvLrn1Uu8dD",
  "key4": "3fSjJng9rkAssBPFwpPLT5d2XvzJwtYNtTccxF5jyCcBWmnwJ446nzFkQPXJmk4pGDky6CPZsvj2poePxma3fndv",
  "key5": "5JRGr4ffHvmRDEFGwFXWWHjVd8SGPP1khPsDmQPtJ9fSQUcg6jwJWjW3fqWbzJMk1BwUmRiF4g88TCgTuDyaDzt3",
  "key6": "4PnLS41QaVn1D4JVxtBSpV5VJRSeK7jhxDFv2s7vYAWeVGDpkcBSrg4VdwSdjrhfDWLVYvj4kfTx1aLB49xh2Hy2",
  "key7": "jNoBxgS6UNdkLMnB3UeGvtqKgC9F1fpitTSLgohYon92htox7H4uqpJqzRGddrnZ2hnci1FDJzpxJfJ6d1yyFNT",
  "key8": "5dqGGBY56PD9PTL11QhvRQgVxorEwTpMxJAg3pqGLqLG1pf3Uq1V4WQNfEYKkjXYt3uPVkaPwFmqg6umpn8A1guZ",
  "key9": "5kRqD5MvXhMnMseVeZThSqfbXgJtjH1hHXMYf2xbEfXGVcDHsFpiUqRa7w8TV3ZwbD55wKzpsRaB7NG5gwaWcwxh",
  "key10": "2X1mwipjvvih6XRYvuWBN6RSi56zFm6pMutwSudVdBearUkYqQJwyLQJJtu7BtxU5LqWCuzwzndpYtGhXUWA38aV",
  "key11": "3a2P2xVbghHkEtb1gYoPsuMGrAFCbPcQY5TK2rqvZqYUeQzqpgpv7vnf99uFhBQsviTT3mBqViZJBP8ERUcCRV4B",
  "key12": "4YWAJapoFqPkZrmQopu1kt4sQ19MeaviJEiKmZcskd3VBuemvWVuo9GZ1XWpouKx5rLVKANBFBeVE1obLTsiovKy",
  "key13": "Bu6xXjaf8hroe6BV5GmVCiVyzr4LMr2HBKwAbSiZqiE3z5jZdHSn9nxwXtYBCZ6fHvQRAox3J5pLgSBobqnhwSX",
  "key14": "ukBHD6FgfDNvkfYAe3XjnDQ4a4k4CwQ67iE7BM3TAdxFuXV3yNLkv3F9CkYzKPfi41sgY6E1iZH2T9BDiXy2tSe",
  "key15": "5pwynJbifFsYm742EjMN9j9iz5RZRdgQ4fyL1RRhc5Uv5ndWMXxvqKpkvPPjQecPmsHRhdNUwXaphw4w1FNz9AUa",
  "key16": "2y47pRzRFZdKDzs5zRZbw1FzZyjA4hJNJPgsVFqek4rmtZDcoQHK8dLk5djYLXU1v5bCLDoMDdoyotQojKbtPqe5",
  "key17": "3hQksmdjfPiQhzAXFVFXtNPerytXwKUUHHsQSCegp2QFKTVeoB8ePKBCzTLhwKZbhA1nUYU5joYzqWRCTYBoK8Fx",
  "key18": "4RuXrvBZFyobN82CiaNHRHhfN4VNohsjfJeCnvHx7DYjZ6Yjtn1QnULwwGBaw6SjQ1eJLujGG6sT82vcaQt4fyzT",
  "key19": "3TRsq5Ma2NyTth1s3jaHJdP1xpis7HDB6S7MkwFfmrWiGmZzsSsNTVwWXiWVQjsrt8Hc8TLbQv3HNwLkrJ1j5JqU",
  "key20": "5MqPbg2uYWKKHcoKSGnnQVULBKs6vjf7qftXQjzCc59tedeD9SWegmcdRTJpH9o5uqNNns5SexWwhvGYgjSyJVp",
  "key21": "2vsRX8i5BDw1yqcf4DiX17ii4txuxpwpp9StGEPJeZmLgv8WvRckxPyykQgzJKmPzxC5zYYqyESF9HuAu24dcZDu",
  "key22": "3GZELaSAwBXuQin6vQnTVaCB1UuUuRkv1dMHAqz8y7KqTzYwAFZEvoTjLwd28vePA52VC77jjAdWaKUGpj6kD5qK",
  "key23": "2aQeZYbivo39sFxdLyXEqYBVAXVocD4grANMDibXYJy2R4ygntMLgmQGjEZJ3epumCCcTRfGPqvt34eb1MCuxfKY",
  "key24": "mpWZekXSUwYNe4bDi5rfshQuvNqYag9qJTygE65bHfPegFk4MbPSJ1zkfyCbby4pgkbxteZrbq8ycg7o5NNpyoH",
  "key25": "2fwg8LEUZVJoqXWHpSJJiKnRTdFdYSBgsHgq97ui5hxoRmsLiLu2VsiVmUMHx72s6xUfTunU7NoqoDSrgYAGbXay",
  "key26": "5otdmEB7Km71ek1ncfkrJ8Jdt3nyYLJcMkejpXDNVvtaBq8cRThgNVauXVndMePV3u2GutRZtn3e2yJAUWUMReRb",
  "key27": "2krntvvWxEqdhcTH9uDqCNQqCAQK5UFxUAHFT5N6dFJeNZwG9Zw9WxCSEaaLmRQdRBoGxuZ7Rh3iCmZ7by5wqHhU",
  "key28": "nZvxxUL6bPyc82um86FZBC3Yok9eDfo5wzwniqH7RfgJFeMws9B3aekUTChuXrXTGz7nZrS7aFzmCJ2sLD83sf3",
  "key29": "2CSyCdNQyxRDfApnCQkmtARVQWUye9kTs5ztynbi4czKZcfmSxGWr84DCdDm1LWjgHhPptWjdGhS4VCuBiYpKf66",
  "key30": "ZMUKUe6YFUaWxaRxsJQoPb1ofxMy1CmvFGTb2W9rMDt4Mi9mB5KrMCmaxuPgU5GubkNQzjU2zjwSfiyZ1XitTa1",
  "key31": "5Gvnfs8e1QbL423PwsEpqB5c14b9tywjx2iMoRe7Lvf5iB15GZ61pVc1BLFzrKAXxnwY3PEMqAhRrJymeJ289wfN",
  "key32": "41u9imSFA6cutYrci3KSdTWtKZyKBUwbpPru5cYWiHhebdaPTYnZgixBcmuV18jfX89dX2Lso2aZeNskCAoge5y8",
  "key33": "55ggVsJZTLWrWR7BMpmbw2TYoqYyZkFkKdZ7KB9LAhxwmjNggDAXpZ9QwjqPTv6SHDxVEkNUZbYJfPp1w6EHznVN",
  "key34": "3fkuG1tbYEfKLweAmrJotB4hkMyBxC9CT4topa5rWUCW51Xvoq5hG4bMHgxaPoGgCiWxSpqMkCQsYsdixYAmNHoA",
  "key35": "55doQPs5H7maotmo3ssinhKW7tNztYDgG799Nm55PwfxFBYGgj2N9MUb2QtMDX1s3dT8YeMwJBqo1bYWpUwJU6m5",
  "key36": "3m2escuESqr6mqtB89m8JudRedTVrSca9LiMuscVH43eBt8JzHdAt9mES3dqXg3WdTZ1ctQHoNkaT2ufosyzKXBa",
  "key37": "3Gffutv34XmsFSj67NBYzJGvAum81FqMGHaakjdFsnQioQY8Sce8gVhNzSa1w7XJgR8m8EQyvmrdpvAZf3iyWruS",
  "key38": "3DxqpZHMCeh9j6VtF7V2WpexXNabeVBY39Kw6nuuG2xCvuNhfiuGL7jj76QvNNUX4CDxgrRLhQnuFqiRutEXuLRS",
  "key39": "4z12kMXBia1J9z9aWbPe2Xky3b3rrP1wiT99sC6dRE5iw6EkLtR4wo4TE81snW8HhzUzfhyWX5BcVePQ7QxM4fe7"
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
