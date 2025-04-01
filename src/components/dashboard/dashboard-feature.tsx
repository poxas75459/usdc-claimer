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
    "oBa8yPijctqYt6qXZhdhAkUaS47B2mYifTWNy9EiDMFdbHcPD2kqYRvpr5No559BS2UaVwJ92y8FqBFPsf8vDkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "392RbW1R6JQLKKQRuhvnE7SA62EY7Le6LrShZRRm4kEeocSq5uwhaJ3mKWwShQz8dzfQa1JSRs26wpHzo6UMoc1L",
  "key1": "2D84cmSXM2wrSMXL9ZFBBMfUVTPdbDk6YTK2K3gfjUDirywF7Scgo2m1fzm7Cw7eRztkkHEQUNYSTu1MiBh3e7fj",
  "key2": "2Ypz58tZBEzf5peUnEYDAdgd15oTUiVSP5CpaV6ut4DtcVPdBWXNgznJgidfPLmaE3wwEqvkKH2RQon64DkPA8hg",
  "key3": "5QsN4NW2gVo3E3JYdLYY7edAtYi63Ud8oaCegtXmrRaMoCk9EuhuvuXLzirWZFjU8TvfNzCZSJCDCUrqZYYczbUo",
  "key4": "56NLwvrCTJQJAN8m6UFUC3hSWQRyDge9YT7AMdmmG18BXx33nNiqnmtzdfzBWNMWzoYUZWkBhbyq4NyV9R2JNCmR",
  "key5": "5UXz9A4Ko948fLgLdyK68CSiw1UFr3qeNHve8sH5dcK82kThT4RvBjpu39zB3cZL2HWvr7ismMvW6FyD32uig8ns",
  "key6": "3yLBwtFcwoPJYbP5bVxTqrZ8H4MK4xrEGo2oYoUViYzqkZH8PUkAP2THEvJ91cXg3AHcB7eVe4UsLy2eBTMKMbKo",
  "key7": "2eefnKYJLFPMM5P2vsEB3qkuQtsAyxUHdaU9puCWXJeCZ7ycjNfhWcXvZV7nzKyQRPq1RvF4Ms6aUP3wCi69WkkD",
  "key8": "4sjTKqWWRYxSHWm4iJBU8Tn4En8gqT24X8Qn63sc1m588KL3UhC7CXSZwhNbQQjcHnGx7ZFDoJe1wfdB9PrtaKV8",
  "key9": "4miKCDTgfavdSAPXktXM3B7shbxHovB1jtwQQWqGYwfPgtWQVuLs5Nv3MMfZnZFZyDgq6v2ALekFX2hRhxU5BVfo",
  "key10": "2v757TTHQ3QbZNbYkAcijrn8QUzfkov6uUS7NFWPa3ABtJF9327Gtdf9nwNhgfqNkHuws5y4Pcywg1r3HoP3AVRC",
  "key11": "2kJhJ3eTmXfxei53iHnX8jfu2VNpCwX7yyjXq9RDEkcSqY2tEDPoBMHWGdmeUWpfuqco6KmGSqJGBdTizbBR6WjQ",
  "key12": "5qgYe63A5GApRhqemoWchoqwA9ju4hi6n1fQUg5gJrzAcPZ73WR9WiPGHvAKnk5Etn4UMUUQTMvHLo1tjUhg6SEu",
  "key13": "3BXoae4yizsgrTde6bhY8QiBz5axXPhwRj3MmoFXt1WhacBqC8nuDCM2wxHsBE4LdYKWxFfUJFjarC4z2jBxK79J",
  "key14": "3VYJ1Vv8dvr8uP5m4bMmqExrgZZAp3U51nqKf3bcHrwRUy6aQogvVJQntA6qq5D4jKRUTRPdL8pWVhvnUUn9kWeQ",
  "key15": "2oQ6pcPvpg3uv4T3Yv6Na7zvioCc6vBu83kDnwTSvr9Lauxfguta7sA7N4ckEPMsYgqYbpf5D6Uhx3XEzD6ESufX",
  "key16": "57LTALKAEG4mMCEjRWim2nfq6GbP1Yyj8Hz8q6wzB41hiMAFigtTe6r8MtexTPUK1EfgcTRjXfGCWMDetEX5oQeG",
  "key17": "dvediUaFXLawvvxEYjvY8v86CXxfCzQkFR556FvawYEfq7qdXpxiuSAaHW6aMjNpR7Yx1nGwp9WTePXr8CnDbvK",
  "key18": "5QjSjQa6oCndWmUCvSqbVZow1qeaPaffRnd9Y6hisY3X6GDLXLb12QcNRG2UWiuR8cG3sEUNyYU7kUVwyxD1a8fL",
  "key19": "3dGA26muJvKirXYJbn8BQZECQt2vSvK1s6SRkab1sbhAZ9mk7WwutBNhcLWWYeUcjHGFH9zgD32q5aWWDW7jFfZq",
  "key20": "mjczdsbxR1s8FqAFzCE6R4PEM2vBeVFp1pu8YZT8FTFoBV4pbVnPEdZZDarHY6sfYaskVQ4CcJTuVaEUYn4sMrg",
  "key21": "5vSdmbzg1ba59t2tWA981E3ntNdS2VD5CQHYFhNx7zBi6wwsRxkZL6JgZ5M4SvuxUiv9SNg8PEGkdJmehCGycoXh",
  "key22": "5prQ86H9RH5w665581Ge54otgZf9M2UKWKadM8zMJcCdi7RnC4Q2xVyFWX9Mu1T1L19LTM9h74s1m9qu2AAvVhaf",
  "key23": "656cWjvVS4Xwg8362wJrdHtPzutwkSj7FHaYuEV5F1vZQuzK8CQ6Z4T7M8tZ1cgcbGBjqwwX457wWQrhY7X1CM9h",
  "key24": "5TFTFj2p3NhLVm2KhkVpXYCTdzHTBRpYhpSAEWTUx2NrEzp4aCukfdSzeLpRhpuLiPZsbFQhwYTXB5LrnoFeHSKi",
  "key25": "3VVSVUYo2NrnZxVHwccXb5PL4UmmsQQ8a9JEpyFVxuPyRa8kmkPCxJMGiHkSBdTwrhgxem8dPAyVsTqrZ9fqKPMd",
  "key26": "63a155qDZcvSvkJ4nEBntumZGUD7wVR66HREosnFZehK6y59rZJpy5DUZR5RMLApSCgX3fpjrpGB38eBQCjzbGyU",
  "key27": "3nfWYvdff6s8vFV8gQXMfsYaKDyciT12oCsmLdzAcX9svrbg3rHqAfxxf3ZZaHEiee6VmwPjnUgmEYMsUwiJeYGX",
  "key28": "4wWsCM34jaEipRpBM17nWTkgxphs5u2i8DkjDAF8gT1Sd4ELsv78DGHeujrsxsH7gsFWiNYd5y4eSyf6378ef5Rw",
  "key29": "4WzURmVKQQ4UbRaeXeKpyU8KLD9gu2S1CseeDiyQg6iNUfs1YKVwGDtbA8oWCzZocaotVZvn81bHkuC6vkVnpyrG",
  "key30": "2J6yTnoU4Ta7Lg1buETnfSLqmzTpqFxsyihKBPQYxL1fRU5eJkNnLc2q9F3odeY1Qx3P4R7aGUJeEds9TYGJw9r4",
  "key31": "3ZfwUxTzxSPihTxkECzAnK6o2RioVk34uC5d5qgNXvrRJvQWvB6RJyLf8okzTQ2crFzYb3u72d59qWTrY8X47Pwv",
  "key32": "5oDHMLuLyhRuZh21gXdrTHTmoqASYBSp73aQ1y8QEbpUajPgj7ZRYjP6wtf648aha8RL8SDRcy8WUp62ayMmizhW",
  "key33": "2s1Jcj78wHD3PiPfyCNjPB62Ax1c8TE2KstEcgn12yjY1jUHGpbRGgx834APWdT59nHkLQhv4JYSvBK4ymS9dE4Z",
  "key34": "3VQAPnkwPUDww6FeNkBdsN3nVXP7ekWtLEBeGiuGiojtiLHrw6H7rs443GTNybSMs69bLB4LLJFT9QTG4XR5Y9Rc",
  "key35": "m6f5LyLAq8HSDSbun4Q5h6WLR3zw9h31ARM1Kv5Qzs9Z5a1tHqBuiePQBh5bjrC2yn5T1r1aut85dWEw8XWD8gL",
  "key36": "Boe1r99LWkeRNr2psuCpYnJEGemjHJYy2BcGtzScuqTEy393VhN9G525Q2Qbz1T25DLW8X7apvrvPmu9HWAqWgF",
  "key37": "5mPbrMRVE4y4rMKari7av1SSNPe9KETTP3zR134vnsD9jUywT3XpaeRofGrghPZRu3ZnDARm8mxSiA61h9EQeJx5",
  "key38": "2Jf7vudsJ8CKbcacbdt7wf4vPrnYu9nrxsR2Duu1YcQ3kFMdhnxDGhiHC2oTyRnc1W6vZqcKjESgAgqC79HgT5ij",
  "key39": "qgRkHRsQADTtCwKYDAF8BDhFeWet5xGQYfDEP4hdHJVnSvd7ihSv2EBmYBGuahJ8DEZgRg5S1hMB9zSQCmn3ZY6",
  "key40": "5mt81aDm6N6feabMHFMfXh39CHyGihVjh8N84sriGW4oUXkAMM7rV3ML25XNq8ZYyFdn2U7p7VoQ57mmYCwcAk9T",
  "key41": "3GAWv2uMqoEkDrAtDvQWNPJW7rG8g9QaUW2ZuHfi4QkwiVDDtWsdL9Xix2FTgPkUfCjVFZqPGJM2hbBrKvAs2hEp",
  "key42": "5GFHmZXcqecqPdEz3orfwFvwHW276vQe7MJZRN8Zn1jQ9QLaZ1W1HqaGspT5xVuLMDbbt9M1uqtNamuxDSyzZ6RN",
  "key43": "4LkMohZrxN7cfCxxpDipP3zsoE9t7WGj8ZVbivEWxUqK3eEfzuEWzmv3xBKBQqwsTT1t5dyYnkfxnnqN5dDMSJiy",
  "key44": "4mscGNpaAFLT4HsmR3nBAJRDb7Xxo8tMz4BEVTNDi4AmP3hn8x5vb8cZXUXNK7eJvcjj6heb4wxzJRFh25qsdv99",
  "key45": "YfwmCM2bFbLdrV3HNuow2TxVg5kw8naaMoPNzvj7EaSUGG2YjUgSyPgws1hokh8bxE9YwL6dBPgC8fnPcmwUgK8",
  "key46": "3CYoTkZRp7KXJonjSUDQ7wzmu6i9tRLbXsKpEezDTn9G8MgxRTgTu5N8SX88FbnqMWKBKsWvd1iazL7eM5aMF8Hs",
  "key47": "3JJWKJzWGcHMWx8bhJPME4cNHo8zYbm1yrfeFiS9qzbXMp1ktHBhAx6JMC1UUMdF9HQBVhCeFvxhfvQSeD6Wu4Ri",
  "key48": "2JaZeS3ZQZRfaEKSuCjSk8p6TaioFiHcLzpYfCm6VgFSxAqwyJm9hG9GtN5fii7snyXy1rLSb7BeXjjJqMhg9YL2",
  "key49": "2brR4L8tf19Qji9i7k6Gqjzqi9ZA8Rk337tWukDJMDUXbve845ijenfvddg179oqGJsfiYtdg75dVZ4Q3LLAD3EV"
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
