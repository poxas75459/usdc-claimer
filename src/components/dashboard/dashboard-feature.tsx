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
    "3LKBEfpJ4vvgBbBZJzkDmHCwPtdjD7nabazJbCaJ9q4n3a26cnn4byCF7AivQ3uLb8yKny4h4F222q7NTHweyWUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBPB58wUvrPSE6t4kcRfSTDmRza2DjSyV6V5fhkUJYzaN9Yqa5rE547xbJFviVnneDCHdCnDRMbkWtYAwxLN9bw",
  "key1": "5JxWTmrFP6oLbEZrnvLW4TCcRGj7AxjZQdR8f5vvhm7gdqAQP3nHyFvhEjgqoobMJjog9MJkLVNrQpf46BEXschJ",
  "key2": "3zKtyuJZu2bP4Y1W2LaVq6mVVy7saq6BLSXa2Cd28pPCsQjTUokVEkAUtYBx99Je8C5kBLpD9KLBhNKcab6A4ym7",
  "key3": "5jBeXexgqdJh2T5mgJM6eGPLDTaitRfULiYVExnWdHxqcC3ApMCJtPhwgXkKVK4DNPHFF1AcgcpartE2Q95De3dS",
  "key4": "3q9wfJEiMBMYzcWRrSJXbckobdSqW2Tm7odER3sbP27PcWLYKYx81qaFY8WDAq3ZX3zrfXWbDcZ6ipayC9VchbZw",
  "key5": "22mS2kyMtLh3iu6eZi57VPaFebctt6RBz6LKAYZ9hsw4AZDPVG2yMh7D7PNHsF4s4XRzHb2qiCHzMPnvg5f1qUKB",
  "key6": "6DCs11KYffrZE4rFi6QdPyAKDejABzj1nvuJ9dbsiHpiZsfXeWfqBLMxJBjMMfvj91FZzbBLWsDfwn2WrBFZnd6",
  "key7": "Gz6sUcSZLEFfapPy6fLBRFmRguFuwiR8Wp48sfZkqz88QeK2HAC3M7MgWwPi2rA3Br7avD6P7CD3nvHv88agNh7",
  "key8": "3zyh6WQNWMMcqRpo6TikEDBMHZPVXkuoezQGfzJ72XNL3fHDxJNZiDtNWC55ygASnQCeKVTJDrZNwug9x7fds8Sv",
  "key9": "2wjefbkLL9mvf7M3PJb7kpu91EAmQc3xw1hnnhjYRijjjBqAeK7RdmCFpYqYrj4VH5JPGgEkToWYJypTxq5fQ5gE",
  "key10": "viTwAVn9KoWEYJ9wRBRPYrMUSPfSGFYtZSMxENcWqLKLUmN4UzohVrEo1ZJStGkhqNaWn3LeLPpWiWe9X1zhRZw",
  "key11": "1H5CQfmAYBGeXjBdrbdv8wTkTZJmnCUukLKbaHZvYxWq3i7GQkEbfzXGXr9quq7sF2ZEbwKMiJmqzgxNw2YFkE",
  "key12": "4trRgoxKeYrvBwsvKMRz2J26BSEuYMXnAV8oggRXeimkkwmYqAM5YymCX6gdpSfZk4dDRwdgEXeDedti2GEyS57D",
  "key13": "2EtW2Exq1PUy7aSQVVWRFUZ6P1LeQXT9j39NRypDk7FNxhhRe2GAmBS1Yx719yFq79ZKAnGMwi3fXSey9RadUA8M",
  "key14": "34jCChH6p7BnFL6kfK9mkXHzy47MBAtFez54yaSUnAxjJrP7xMCMPKmaP8UUp7mK2LuQLPKcwMZgTMmWYLgWUbk1",
  "key15": "5AkBeboX6fqkLnd5Mg1CPzsmRo7t4HXzSLXhAb53dz8zzAqMQyWfuQDk6KazwiQ7KC7PGfpXfw5TCjmen1qMQgpA",
  "key16": "67DvMu6dpzGcWRimy22sFRs5ZnDfcDXhAtL2tqRn8T44FRxybAkGNg4BhxrgMRziUSXFhrH7FnknCwjB3JiTf5JZ",
  "key17": "AZbuCSTpoPoLRVmheXQFnKgtZ1h9XYK7sTFab24Yw4NgGiqfCuoQ5835GkjHcPNGd9Q9Tj7iKSFDLEoehJHEFEQ",
  "key18": "5ymKVMenaqKrvhNaxWsKdQAX16UZ9iqdsX14hXwWsh9gRQVbKQUkBrvhP2HiDksm3VU2ParnoMiudAQzVJHmwxwY",
  "key19": "2sjEi5stsEW97BScE2eNrfJ3mu6CE6TMtyHFAMNSY3j2v5J81w5kXHtA3R4JSd1h9EuuYkJsBrugRjdmzeg6zhod",
  "key20": "N4yn4MKxsXFg4bvMGihcjZUs646LnCvZPr5eBbgGMaKawgHWNR3uEb8T8QA4QSAdR6Lhj2kLHQtRrbEd5nZwr83",
  "key21": "5i6m3j7bRNznYmA4QSbVeLM53p1z9U4kNfruKGY25vSt3nb7VHwNopB7CtM7WJ1SCoJKTynnW7vhK4qL58jirRH6",
  "key22": "5iEKyGRgD5oqBiZcFy132mdvBPah6G9h539YBi6u2AYtxgdUTi5XwDgWz38KBKif3z286QmSP5WnrHN2EZ7r1Hg7",
  "key23": "5AUET3yiH3GNSigdDPfH9vzdqEnUDsYynFeFQ4xgMupu36mUZFoqVuWVrM4VAsMnDZPuWTuTZTPJtLq2u3L9yrbu",
  "key24": "42h4EubRPgNJ8Jx57vQepkQaR2c1qX2V9gnwoWdNTCAQDavzonBEL7QEHYa54WfehfgAR8gYg7Yt49inRfBKhU4W",
  "key25": "3bsdPZtzLYXsT2rh4KYRiDEHE9XEv4cKCNfZ3rTv7GEmreT5bofhgoWYyJAsHqwNHjhJSLb2EwXNHaneEYcmBDGf",
  "key26": "268rPictMcjmh3vevdJ53SusiTdpceuPThD2QKgeNerqeeiqY1GXcTxeGSCY21kinZfxwx5W5VFwS4UeHskQjJqe",
  "key27": "2WBUp3cKsZmsZf2yppZjKpXVKg2NjJKVkmgyAYbxuZFX8nvXJFt542gfXm1rvB8HFbaccCBVvYawqBQSNSN14T9A",
  "key28": "3kXPCM9u9jae2aB9wQqSoYC86UGh2HZQ6VnSEk2CHYuXhya2gwWetHyznA1E7o77E8MLektW2oMU7awmnMn3ytbo",
  "key29": "4bNf3HvTWzuYvDBvwBweWGG5Eja4dwzHn2cGZEdBKsvjVe4kAG26VZvRzPwCcL4hPFRN8ryPRpGouBdmffZw1DtB",
  "key30": "23exLinCeY47fbteiPMkcjnM1KnFU9N42boHRHfrQNzGoVdVfjhe2XHy19Wbmzw21rUErnHYcWsf7jpYUn6DY6fc",
  "key31": "52YCVxUhuG7t2aWvKLCnu649FxvfXSmrJf4qwHy4ProeUURN4qaNFaSesf5znjHQLfc4PVkTjkCtdnEzb4agt4y9",
  "key32": "2RLKyeYTmM94H6GLiGGfa4v9Pzg7As2CiEHzGGiP7jAWuE4PHPVrXeeoBeCJzs5cUjA5GWEhDms8WQKyaR7mwPQK",
  "key33": "2iZ8EsxJBaok13euA1PsLhjAb7xi17ZW2e9Foi6qXgjgCUzEScWAGkS4DPSCUpfaz6a5rEbLGkZJaii3R8gTqCLh",
  "key34": "4bVEwCPxDkRNSyw8J2pZqkV3sKd6yS7UfZwHTTQ4K2QibzeT8a74goeF6fRcDzJ5zAMd9TJ58nahKAu2d5z1bSzQ",
  "key35": "22NBTrGKGnmD6KA2eUy5kP2PDau7RyXq1nR5mjP3tcAQeCwvK3WB19eZ3L7ZN5T8UsZXRyVLvYa8WY8JK5rqRwrT",
  "key36": "2Ygn2NCQ3D5eZN5pKSzgCLDGdTuGuQEd6TMjErwkYm4w1GzsABscf1sgym6eZ7q8r1keBcAwEjqaCLgkj4kfex3g",
  "key37": "4V98AtYX6WmTrE97WWUTnHrc83hG5TapB7t5VNwmHZsiJZKxWHMn8uhRv3ny3EmcsC6gqvTjbsmpLi34apfnSH9W",
  "key38": "2YhQBxZQth9bMA7ZftwKHMFYPWRNK1Jk3k4CWBiCQz1pexRhWfrLbPiPgZY5kup5XRRVETuW5WgcQP1PWXyaVatk",
  "key39": "5T4Wn9F11fLQo2ytKRkr7rTFGDC3hEw8TxfYwwBmLNKpDpuHgkrMCMrGXtEQwatm5KwUBjb6sxnxK1CzvaDmy5Ab",
  "key40": "2mfZ376BVwbYXf6dgbpb2R2JcGNcYNZTALn5ZBGv6DH86gYXiREA1eDzScFgQs1SPkE4J5bjgbunMeqphVxUMx8U",
  "key41": "3B6uZooKQjd1iU7BGHM6Qnsa81WDy1CAFJj8CQJh2hcSYXMxzi6dCZPMJJ82pREiC12YsyiSAWdpGU4PHa2ss2op",
  "key42": "2X3iSCbXZf4QzN4XawEZZCU4XE1NXeabdhVmZCJfC5E92N3Fgg2CHhLSCjJbaEZ18bzkBHAU6b9GiHRKFbVNqnhG",
  "key43": "3myAw3hPoKwAixXVUmdyb5hAkfWF4EjZ89dsC33Hhw7MGGFJSYnJdjdhCCuUo4UuFpEKt3BDYEnWSLTuiRJtEFGC"
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
