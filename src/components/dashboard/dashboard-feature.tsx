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
    "2AQi89ii8CpXgmymNNfbMzTWdVHLq3GiGWvM9NW3Dsju9Xa9sBzHkrieFvcg1HgyTamXYEZwsPBmyw7yTjvXjZzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MC2QZucC3qWZSjEqd3iJoZkVbbVsc73QVgnXeXnZzKk2Hxd6fGbMLoC59ZQTceKEFrXMMGUAq6P5vu5ctr9vjzz",
  "key1": "3aRNT3gWduk5M9GJRosKdsdLRYKqz6kVzBhpTzwBk8CmSHZxkgf9skyNo4dGYqR3rV5GS3kgbuK73t8XyLy4axh2",
  "key2": "2uu1odUghmByfLRRhhgZyKHcQgzHrjzvAAXAnTWrGAYJAjGe51aE73fJX9uuhGK3j52xGf7nfXePhbfsWkbn7sqR",
  "key3": "5SzkM8Rh9rZ2WjE9oYYzfXzdRSsEZ9cTVoFwXH2Ysq6AdwcanJnLSNVRsEdxuFGsLXdZXc24xTkDuQQ28CWEGGYu",
  "key4": "3BZhNrKZnqpR9BoFgsMUasRAmbP7iZmAAbtULqBTjkDTaaKM1u6LWdwjLw1it3MExogZReP97KcXaiAKodmCoZdX",
  "key5": "TjmfZ9E9FvMZik1xdKxqyV4pU1zWzei4cL1g1hXVropZcxia82hFcU73p8ZP3ACEmv7GggtRXrLw6qjEwhkoqug",
  "key6": "3yeinDGouapHNi8gUkXxFX61MFvPNSsszEeKCoqyuienZdU4E81SE9MCCVvVLwqory2tEhydMyGQuzRweNou3e61",
  "key7": "4Xa57rmMDcNPGkQb3BhCDi8wV3kbxGLYERoS47McKvWQHer8A7ZKBTqXebqnzHPKNo8dUkFVWNEyuG9TPeEdTvqw",
  "key8": "4SPBFxu2VuFgw6zvoc9wXEz3sdz451ZnTUqHsNwmAanrexhe35ebheestKt4X3QEAenNPyJBEsgto4guZcghXWpv",
  "key9": "2wcMnpnCpwC5Bep8mu8e6XRUGcP91GNBMomYD8Gu4NBHYjP8tjVyEZQo9LhJZ4s5xhXCrR8UTKGAJCFYWubk4mDP",
  "key10": "4BpTQqWSgD7VJC7KgAkV2NEyUfV5qDL3MLMHRCRF54yQw2J6A3mJuu9YbeTR47p96oaoZ2bmL9vjE9qgi922aEze",
  "key11": "4ZeV2byVzu2dYPCjBFRVKMSEhDrK3HEeWmDjNk4KcTMekCMH1FvYizCirnVek2x2RFVDoG13CuWDoFeMNKxVuV3E",
  "key12": "2zJswcnG34q1EjAP5uVerGiNfVv1chhbGoZFsBwqCfBw37BpmTkfEgoQsr3w7pjauHsAqAMG7LrRw5keaTqgT4Lb",
  "key13": "3tzJQPQKMQwUbamBhwWRedq5R9DWdsSFdUMY8i7SXP3XtDLiczqKus5DckNtqqueAKu1Yu35wNab8rX8RRF37bNA",
  "key14": "3EHKFUWpt6p5znoQLQ66YkP5RaiFmsjxpgcxbpDxzkjSrYgUQ3en6DBGkp58AVdSVgwKyZSSvVhh6xgHYWsUUF1D",
  "key15": "5mocomhrNomZ9PS9dgAkfzDEE2LQBHPuPVtDwPZZmricBQZ4aMPgaddcmT8MsTeEcLsK1kHpFRr4wZSNPMWdxHtp",
  "key16": "3hQ4VoGdb8kyKvjcv1rjU5o2pzsgekppUQ38jraGJrMcbrbMsuZNko9u38ym2AiTxgezxPoNEEVoVzZ84guTb4Ai",
  "key17": "3n8rd1726bd44fVZQT6CnZQxpGMfc8d6TUVfXJzAoWbhjnjG5Ztv7def8LSUvUrFAPW2rq1MBp9JzrsSeJ1UwiCm",
  "key18": "2D1vc5VzrTVbzyGTwjcTVWhDtbpTDChsARkofYt9JB5VPW6GDeyWjqVdb8GDSgZiMxnZgENAUuf1wCjyrygt2taw",
  "key19": "pJ29XwpRrjyWJ1p447AvbDKBnopnkQon27HopUtCwi1aSh5wBCtjr4iFCrKBk3SU5nxLXXNcZdgXD4iYCTmCykc",
  "key20": "63aDQhmvBLqxpKkELN7HMbLh6t9Amga2qF28xEBpZrGjJ2XyPzAbCkffvrNy39KeJ71Xw6BpQVGycYNu3nLJpoLw",
  "key21": "4yijeYehNv7yjQP1Pr7b13Pva9FyWWvEj2bwh7cjhLZMbcF7HaG9MB4kuNBEr1yjRBVoAr5L8YPmvNZPK9dFNtPf",
  "key22": "2vrBiNF8t2zFmK7H4vL86UjKEVZngmNTAdUpZeoDKSBNAaoRi54Un98Bq6iDtcPTtaN2CcVs1Qj1AY1Un9V4GHnd",
  "key23": "3vF5U7Za588SVQhApQz6zCnu3aUXYTmLCLDvg7D23J2FmWzarhAfvbKxNJKWXqJD4K7jM6TRwGYSzyYQwhCASdEi",
  "key24": "2K4Qwh5jjj5XpqisMbTJeGxNun1dML8c4k1p5FEwcPUEecs72eQpPrePov39t4yenFrV8ufx16zUTm8rD6QQ9dcr",
  "key25": "47obqkAeczMg1zRakny5z4dN4RqhV9hebtp8CsMvdttvKnAgWE52EEtPQr2x2arme1Ngfa64gkM1t9MKhyk7J6NR",
  "key26": "4ULR4sipnPLgKth6R9Y4ku5G7km87bN5fQtYnWrHABS4S9MYTwL4dj82wU4krXbRsP24DbgZompPrRiAQVc4seiz",
  "key27": "2y3Gs6NjK79C9SQxeLbgmy5a1vFcKoWLndmQbuhNuDpWeTdr51kEqumpsJ9NBX2dHMJMfdTSNRjHRfN8hL3QFS3u",
  "key28": "XsucwPFZiBeDTtcpV5DaB5oZXSQaxwaRkm7fgytcqJ9RGhh8bcgy7iWUGZV2WcDjMCjv1awNBGPjGFgAgh1ZojQ",
  "key29": "2R8XChrRsUYr8CHxEf96VSDS1ChTd3RxYcYGoYmvibdrnnMFqZ3WGsvtvLzJ6ZY7dhDLE7q9UGx5j4R16oht71Z5",
  "key30": "4TrmJhG6cgx9GuHuYwDaZuQgW2wqhhzBMDYM2v71xYobBNU6S7ydHvfF26rEdLTtgvETTWCXExS4ZFY8JjUreGMQ",
  "key31": "4sjRqCjYFU5FiBStxGUDaKnp8Xxz7naCyBcUkZdkh4EN5UZ114Qi7TMmakjDAJUyixNJeZfru3r1wuSdvfbsfv85",
  "key32": "2yd9M9cF2rYUDux6QU5981VWWmWaDsByfLtuA8x1SB86eAcwS451cZyFKw1MGGaXbuxwPwJm35mtj3MKZz8bcLkr",
  "key33": "c4mYB8f3psJzBR4biGoX38qunjtUCKugC2aKS9WHxrZSGGgnytFKicGkQYawdceAknJgpAgEXTFQPX2GN6KBvXR",
  "key34": "32Khu7tW5nHu7d23mPgaSwtjtzHWDcvKPHUzfh1MhC2smo7agw6Ww1cvfRxNcn6FqVN2zCmrXiXL1qBd4Qei5VP2",
  "key35": "51ncSP1LHp5Q6pEzjJsRmXC9RLhwQyDeSmSsm65AWyqKpbX3W8oNzabUuAzPwae9yc3o5SANmLfHZwiBXVpExapn",
  "key36": "6QB5QJP9D8MhchFpiBmeDshiQ3N6DhpKR6gMxn32fAqJy8yuwFbRBHeSb33iYQBmy9HNaTqunrYBRTyHvuazhW5",
  "key37": "78Cx5iXVU6ghwsBWRNNr32tCh72C8SGaruksWxy9wb3zdYqYLy4rUCpNtT6bRi8SBoGk6BCJh7fPdhNW9a8yizQ",
  "key38": "4EK3hjae7pEYaYNjTJuy2Xm2RcZQtRZPesR62CDKetjwz4KUGucHaQGTJ2ah6KGPk3Djn5AKcAdNnUgTCHKfxQHT",
  "key39": "2z9Ciyb6QTNVZHWPdjRqJiowk6rGqN4jVQoByufuU2qRLNnyAVvULJBHLGfnZ54UPSWWrFwMRfPDp6H7Moudh8eg"
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
