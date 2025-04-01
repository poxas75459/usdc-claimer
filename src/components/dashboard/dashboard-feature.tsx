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
    "5gkrfaD6MzRQWRBVPY5m3mhoBrcF3bFHC7BPoqgNzk5BcedTB9xB3g5iTJJqGi9raucXNgeFEpzK8xZu6X1cCQzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFHkSMw2KZPgyiU71zLkTJnjim37sMmBeFQzHn8dNQiXrgMFkpejetkMnuxyMRYnZFXQYFHSxFughQaWLv39jXV",
  "key1": "2rbVyhR3qQbpdb83u7HAz9wpfZzwYQobaPnrRxVX1Ri7tCwxnUDEt532z7Gxa7hzrCVHtPN7rjC2Ktn3WdwjGQKf",
  "key2": "3kJh4kaupmHD6T4xZHbswdMFmjWnLxG2prjsFYhXj6WbcQX7cx5YK58nmBKNCkXuhGNMcJbHkZyhsMfEGoNP7AG4",
  "key3": "5mH5zHVZNLNfiavzBU1Daaj92fZ8KLZa8wQnpMkycBKVMUNw3ZoF6CRg14z4nx87sQKMYi1XjEQAsH8gfTE9YTMi",
  "key4": "3CD52UuScckjeGsEjjFmMLmPqeL8aLwV7MtUamHVYpjpdTDVssNd3pLCPkKtjoC77pSPrt3BUZcwfr5SNBqdY2r2",
  "key5": "3Fb2xqSkChdVAXgus5XAmXWqhSjuTovon3ZQVXmNiiQqsse4oULev9ZVHwfbFbZJxJtExYGjwkdYHBFSb8yrwrsy",
  "key6": "5VxyTCoPQh9kcPJb1WhfUDxx61QEUa27diLbiBFrbAvzy6SLMiiEygA1TNeR1E8QkNxbcKGVSxGgJ2SSZngxX45P",
  "key7": "2Hy7VVaKND7nQra6wamwMpTZQnayCnPj99syQ5dmgYSDTqXgYktgQx3r1FhgfiHsAhbfYWaKPR9dNHYso4y9q46",
  "key8": "5hFmNApgWsv1U2bcbX8v7jZgqv4QYHPNNzRhSUQkrmLgihVDjUFU3t87MuGLqp1jWPovGDfGMQgHg5yLe5bfEQnj",
  "key9": "FWdExkg2yAV1bvhqvfdc8DQpEjhPjoQhrAn7Bw4tKFTQSYHc8cAhL2Gb16BccSvVYLJUNajaARsi1GENfhG3tbf",
  "key10": "T6kWogPJ2QgE1nCdzfRZV3F4UnbFELWHJFnmjutWraDfTMbnMTDuVeb4QU3heTtUSJqqCJY4ZAK2EusjMHYB6tm",
  "key11": "33pngbMN77LWEfvE1rF2dcqqRPSL8LKPzwGXTZEpD2p3b663PLopXTYv9t1RFsL5uDofwBBPz3N6a1ST5v5f8ywT",
  "key12": "5F484sNVneWk6cC81dVDUckLbdEYvhpkFgN9TmkpZCueHHpre4EXVvgGedmvYhso9cfG2dnf3vge19uXnsdiPaNX",
  "key13": "2gK16yAHCHezq1w7knod8aYfUZDv545PEictd7P8nvfJZ2ndpYpBTDDz511tfpu8qVPXuAQucQzbDu8E4RKpLPx2",
  "key14": "4LQvHAxzzeBp8TJBz3Y64QDh9nrAjjAWYnPuEJvpPAzmdCjB1MEs9h8LFYzhGx1WvqUsW19nzycx4zfPigW8s5KZ",
  "key15": "8mcxTHsmJVtQkZmCR9G5tt1KMCS1vSL2eLLVJC3MbF7EBmJfuhUWfWdMdQ2qRicEKpPGmBnrwwf4SV2r2A56G9w",
  "key16": "5BMft18fZjNaCS5HatVTSEsQ5frziHSbyYb8NLqCR82xF4MnxXwm8EBDxhNaboWpej4QB8ycnGfJ5d9mxUCKm4TP",
  "key17": "3NT9uYwbuGuFKDCsx7nMK9qH1EpacFRjWGu1RaeUraLFjxA46QsVFKSGo4d2inj4mbiwnzB5tSALM43z48sZLRmH",
  "key18": "PHBiRHnSpdzPvQFT5NsZjAT4SnawanDnDybSSWJqhV3TBYYc2nyhw7auy9hL818uAES7nBG6Kf3yNytoK4xqqf7",
  "key19": "2kSnoR9B4okgqRxVkNzrHzN3docU3bjHCRPVoqvhQYNnEFWY2a1zsrsCsYwVNBGNfjWi4ZpAwSNLedwvMNYznCSd",
  "key20": "55kuynArzbpaZyoDvqmMoTQh2KpRSzgu12i7wouKRyqpw7fGAWMFknZbiozUv17AMzTKekmEP7M721V15rEJFMEb",
  "key21": "RZaxeTvN8QSacedEWbmh6QsEBkBpBsqxMQFax7XRWUvUEEWY8Mpiw3LWbAxVaGRibESk8YFvyo3eZZKypzixTfq",
  "key22": "4J9giTVAw3Pp9kEJhUH2MBWkvRk3z5hipV7WFsbJdA5Jjn3cqn4rm7Q27H6ho2b4NLReBqe4UUic74B1J5guyZrK",
  "key23": "48jijN3oPRj5o8bXBSHLFCUkDLetWpqTWaqodpKomMLYLjz4AnAWMV4gbNnmWuYv2pjs9A92MxiYHUsDxnMTY2Xp",
  "key24": "4CNxWnKUxcnhfoQxToWB5nyqdE2SJhgye5ofyUumYZHoZoSFrxHYkGa8H6GhMcGcoAWBH6mpHcEzLETuiDqyQy8M",
  "key25": "u1se9djzWbCZCWWyDpWGbbmNy234zV2CHESQLQuwiujwgRaxgi9v1hJj28cu93KKt2Bey9wdMfj8WS1dVfFC6MC",
  "key26": "2asU1iSVbrqw3iMUxzUUhqoVh8nTM4539MUixhkA22a6BMnwQE7kT9DNNSJTHEQHQwyqnVcxNnE97PGFfSUQ61N7",
  "key27": "54kCeU181oVfc8MYVpSKonyCsJnKeXBXsaJs2oEu4d38HWxd6vfqVJsR2P8Z5dPaeKteC1kvELUBHJd8GZUQpmUt",
  "key28": "2WrynhddSboMuSyTJxm9nvk3MuLsH5ifUg7kjVv7bcEmUzMSGf8ozwfrojteYWe2ggA7vFoLMHmuH356g8BvXWP4",
  "key29": "5x1uaJ8ES1qo5ZbbwRekSvfSPF8goTzGXqxLHhtVUWjoboUYgHpsEDK8WMVDGDm2cA58N9fPcrACZwRhL4b8UR3o",
  "key30": "2gY8rhiSz4DTWFa5njeX8kQrmXc7SbAVvedgqEVCXBNnWwVmJtmKxtob4Dow7A1YywJfcsuGL5WLja3k2wfkNyQr",
  "key31": "2L6NzRSn7CzT8bdu5kuAWMkb7dpYbpQt7fzxCXunyeX4w78AA61DbCjWqvm8qtxSgi4mTr8PafmjwuSzsz98xYDp",
  "key32": "4sKJdheouJJpbU2kYgmum6tg2ymLgzNYfy1MevxUx3G9q3f1ZzcFJxVxqGq5rR6Ld6HzeYsPYXpR2AgJAqgymJnE",
  "key33": "2MTBWYrYE7gbP2uzaoRV4mmNZTzLdYo5JpScvzAwz3kCKETtwSLxtEswnro9ystscTb8WKEYbJpqzGR858FYaH3b",
  "key34": "3jT4JrkmZDeJYYndwRr2YZRKa8mNjsFCjmTVJnC6jMVGDjJzNMpLqPhbPJq4gX6X9uFxzdzaAXra17EJAzjw5hJZ",
  "key35": "5VauLjzH1foyRYSnwkpFwHUNHu4LW4zsrD1gzwjvwf9ULb9poucB19GQPQX6BRMaNPW96KrRkfAvbQW9ZWQpXUps",
  "key36": "4tLfXRtHJDiS77Yb2MwquuiMiMUANrh5Gf5oh9HBbMKvkNQyz1MS4MsB3Y9NgTt19u3mqYJCL8b7rgxNQghRCUrh",
  "key37": "2G7g9Ncfx873XzHfpVZQCoxnfHjHm9MUcdMAF619n3E2rfYKg6F8SfKhin1DgHiKLybKiiMPLUGumAQNrGg8HNQ",
  "key38": "eoAAmftcu5dPFcvU9oJRRHP4cdzTDcSqYKoMhMhfUffPmpmRrnseoof2sNToJnXwBWTWtxJVV8oEd8hVgCwFoiW",
  "key39": "53tQAprG2YCGJjvKXc56jdrBFAJFPxh9wUhvqsJ8jJ75yZBa5aFL95nGPEYDSp9LD3YtGFocno7EaDS3gdqMmQm4",
  "key40": "5X2XWX4M1KLadtSfTPtZAAbTVYfYTqfCdpQBuG1iecPTpwgii1iscTuLpYmjA3wRFoPgLByZ7jcVdUhrX4tcvuDz",
  "key41": "49GrmkcHmvBK1Q6QFjibiw5PNb3ggeqNv5G2vGpZJBPhafgaKn1tT6wzCxqM6Krmrkb2dFaw9dLz1E8UkhPtZyf3",
  "key42": "3CFYdiRLRuBud5sGCnYDtPGJUBN8YJD94aVGQLTmSxt8mfEWMu7NLE7q5YMNZzfKrP2HoPoX13EpCTGrS4SB2Hds",
  "key43": "2FhTPEZUCBTWQ7F2V4nmgHvrb9A15GagxC3n7hZCK4gnXR7mYQr9LkyFd6iRHht3xbj3gRWeVV2tZbG43PriWjsN",
  "key44": "3ncqNAwSg8Dgwm92mQ3zYNQ4c2wPZsiPzs1yi4Nr6adW8mM7WGh5ay9FpJ5mV2bNsGpFNX7U9AcN1CZ1bb3a7Tra",
  "key45": "FJ9bwdgzoWwusxcPMcLVjWuxNhMcU6RFWeKZTCzxuEN8u1G9vm5MoiBvAqZfm43DYQ2bWYqubqCGQPJgx3Xw9VW",
  "key46": "aGBawXM77zLgeYBvjot5T96AuLd8JoXaTyvATKgoxVqn6C5XzFeYqf7MwmdcsoScHj5BeGj1fZRrBf8JJta9mWb",
  "key47": "3qs1xiZQpPBjddhq7qepDDzC6odPT6xbqJwSa2eWhwEwbEq8n4c1v2zpJXo2m83TxrBz61r9maTuykFasLe22TQP"
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
