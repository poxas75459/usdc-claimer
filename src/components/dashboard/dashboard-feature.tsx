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
    "4cBHju11WZanWnB2VhAR5CmtWnRqAQXxXau1giJKV75PnadZHc7RhB7q7aZmXfaedZt25RRiPaYNR9Ks4h4sdiAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sniygPWN1BjpDFJ6F9wxSAdTTF27DRC2QoqXGCXmp94m56WBraHsL9NcDW5wT3Zz5UPMWuRhNmkYBpGcF3iGEm7",
  "key1": "5d8KRmtV5WXujHNG95iXxUxGh1aMeSqBzKSpAMPcqzcWf6kvT5CL1SqrSGhazw51hcRwd9ojwRChxLH89643jEVb",
  "key2": "53GjSUfrikuKTEvYHn8TzWLT1geiXJongNf8DBvUnf1q5bGPuGgd7k8ddT3bMH2UTYs9ebmAWirf3UN8221Fjv5z",
  "key3": "4aanztYSNxtUdX2e7c4wAwdzscLYWAfM1CRo7BJwvxpgGC6KVcJoncM7bqLfoPoL8QFWsE4LMkwiHxcxRqhTzfQe",
  "key4": "32o1c6Safw3RRKxTGMZAcvHdA13zyEpRcAoz9FQHf7WKcLKH2tCC8EQJV3ovkx71W7TMBML9JHM7WBG9tLEJuP16",
  "key5": "i8Rsx8TkV98bJsByywiGpiCtXe4jYaizTsMgUBrHEwE5zgcZrgnDaKsSfXe88D1o4KhiNkSLHEQ5jAFkoeSFXsY",
  "key6": "2hKNRwZzTqzm8JbAoy3z7Kdcgx5TQorvAoya6WiApmHp4io5TfWi1yyh84qDyW6RkL2VB4oPtjjd6v8hwT9X57Vf",
  "key7": "2YT5KYLG21XY28gVwEDmMpmnjQkHj1ve6rW24XP1QhfDmxHwoPQBjc2QZ1XQwSnWr5JQkNay19sVcwyQeb4H8KTo",
  "key8": "39tzXY2fY3CRvBwzS9oGwSdKn67z3seSTbcbyh9zbK6fwB2D71DFgT93wYvbPaNfFAr2CTMY8y8UiAA4znYaj16C",
  "key9": "9KTEQfmL7sNhL4jmWVEf7Ha7j3tfE8RsrrjmkwPjMqsva93fDL9CShyA6z5hHSqyHyxBo6L9kVBtMM5p5L5MUDc",
  "key10": "31VwmZ5UVZAQNRmn5snJVp1NEp5R5pkX1rzacHnmpbwvfq38HNgZgd5eYPSRSx46VrVsrqVLRphxBBKkGH7QLfnd",
  "key11": "2dYYB3ccjhqsCtVNB5RPEVPGdfVayg5v3hx5w8zSC1btVt5sZvomhynMxCLVJ7ZkbdEG7D32FJLrtX4SzM6cqpxz",
  "key12": "5hr2VResEMDyiJGq4kguemUMY6gmqhHwE5mMe4nLoi3uFdT21k88HAHSux2iSYNe5WsYTbCz7zde9dzxwCPxXwcv",
  "key13": "5m8phuvtej911oxTWdSAXUuSjHoKwawofyYg8i82PBZ2eg7KupYgK8Jmt5ZhHuQB3D27dZc9JgggFab7CCZBvMeo",
  "key14": "4H9C3fPniNqGHiKHZ2tWDtjWK1RZ7zbWpE1PZ9Xi44bRDWmc2JehDMMK5QNhpp15vY9wx56iEYDE9GaBdZUjodea",
  "key15": "3vhbekfNuKqnANroYuJcUKB4ubydbTaN8xVQkPRF12XF5qtQoM4uHX9tghYGnwXYbhb3k1tMH5mCTAG2zwJZKHkC",
  "key16": "2EDxJz8hvE9XscARcHtLqVZVCVRcqUK7BV7RDGh7LQoZ2ScANYz8ys3cWSVm4LomdQwMrs4LDFFacDDfou7Hnasg",
  "key17": "3u77Mo3hcGRcp1Wgnz78hZpTUHRXiujpc4BCjepPtZPSugTr2DFQS6ed5WMGqCLqvgnhBNqrnnqc3ibWCAyYXvRx",
  "key18": "5r6QzmV2kPJ53e9W8zF6twP5E2nxic1RcTm6V48WwJnGoSphfefhFqB5BaRPpszbXYGZJMRmvHGFLp9zMiKAofhZ",
  "key19": "3TRkZsQhp2upT4p7FZfnxyG2KfoRHsftSP913E2i4A8nKNmEcKrbk2RGP7VeywCBcPMf9DuzdQbEyen4q7MTopUx",
  "key20": "2EGNSdS6HmGKrbbF5h1GKJpUDFV9v6M9asYaNopoHfXkKKGAJmGZ4i4gaJ73w2SvMwnSrD6bPw7WsfnAXcbRRLJY",
  "key21": "5ew2nszZnHqYp2DZyasKbb1aNG5uP4p2Hx1bKbjNjDiqxadM8HwaUxsWGBkBViYApCpzgnHJrAGc8zoqN9Gzxuus",
  "key22": "9L1EHR8xJCyPSVFgcEwAazt2drJ6Uz6RYJzaXPENZearsAJRYk8JUR57EQm4TQwPepPs3Wb4Qec1gki7xbgowvX",
  "key23": "XHoAsMn3XExbYgCB7VNxujTEicFqALLFAmJzy9ub8WN5CmZGTEhnBYZzuekTxnkVQqPWu92xwavfyQKfLVoBBn2",
  "key24": "4H6cLxGC2mUA18KrespqpLp2g3LqP1wQXophKwohqEhNHG8kE9E13BpWtmJuYmtKWZEZ5ozsJYZvEHkUvAaHDYKS",
  "key25": "wbzbYqjombra7KcjzZbRJDFXQLCSQWDosydK3JCf87qtcVHtfWoUTEq5yixAGzgMUHZDS97p41FXNNitzNzpdGv",
  "key26": "3ADB4xzsmHkZ76CDwn7DxjVuV6D9PUtBSwFpb9QXMkPfkpU1j4Aq5nGis6U8zgLHBb5CFGtoxhZmNYiGpyxpPFsP",
  "key27": "2njp63AnkBHV6hs6HqpRWxiujdPhRyf1EMaa1LkXePikNfkZotR9a9GBTGvcqoPstENwydQdzmNGG4Yht2ppUfne",
  "key28": "2ZeKroZPKdzSXDjGzFFuGbBqvFNhZjJfmF9bjPBN3TRk7ffHXz8NZbTZSUnehy9ygmbo136DLWSPZbDkPSP7dqeM",
  "key29": "4Sxruu47hzuV7ycAxsjUTm7i9uWUPpWB1pcMJwaekmrCtP4qQ52Nx1ZfJsa4AXDVNUyPEvkjJXrbpsC4GRmWePCn",
  "key30": "EzDuTPN68zdj6maHZn8BWx5Cu2yo4mRDBvXEyE5aLA1ELEEP6r49GYjDB7dJJktpoZhTMyH9RW2zbAvW6qXXqST",
  "key31": "WQrgs9aRt4MjM2WBUnxnvBSnVTGGS6DrwYHmTQCqzYhYq7GeG9N8BcSBk3w4cEVHXRAUpk9tJFySC3Gy1sCBchR",
  "key32": "5uYmE8HambseUWQCYms9QjWoCy9vANo8sRR1SZ383KgN7zTsMvcmNWYrpiTKwfxiK8CfgPJL4JnAe3aeSZ3ZstzX",
  "key33": "3We9bX8Tusr414TkpjPDP2LcburgmM15r36daK9keCDLGbiGcioTgXHsdo6aRmVYFW42rrmqKcQZtAjcqQXViE1r",
  "key34": "3GA9LHUVEdCZULKxHJYqPZfy5NAoKeFrDGiK4rW74XBpdirU8A7k6PfJSoeT1nEj2amZBWYGgq675R69EFSoLsjU",
  "key35": "e12yJfAxRHf8YMYFii8xRvSevhBekT1syoLB8xwyiZvLhCnB5PdVA3qmRGKaae7SoF9VxB87fXB4rJu1BMLkeRk",
  "key36": "5ak43BstxCGNwy18G8wW8XPgSVcq3AEvXf1niDCvMuuYkpmCAHfU6W1FwdQgN4ZVVsWDiorCQwhjR1aWjMPxcGUJ",
  "key37": "kqmkyUYFJ5KPRrWL3b4WQwHSvWWxETUQwpZKUkRFYStgtwzf6dZNEBaCgxLzwQKDYYVr2WHdnKdMNwQ244MWifE",
  "key38": "5iaMrwg1c64tt4cdrhnd2jgStBJMKm4S5GEya5hDPrMxLTAJCe4MnpxGJjt2FzQMixhSVFm4YNcZasMb2CNGwcuu",
  "key39": "4bidGajE5dAd7w1SDpUSEBc5yKtZf9uQPaMpZ5DwQcBnT3ykTC7hRq5MSkfCXYBXWWu4n6AAD2qJ566Ww7kEWutV",
  "key40": "34z4pS5FbN7S38xH6FxHAvpYEHAiTdseQiP7MGTQzwxe6eTD8G7oXNNJNHTXL1qjk9PVaDf3pYaPFninMvyP4zxG",
  "key41": "2fH94euhZiozJSzzQoneWBW9EAPtx7mc66ioLdn1NfTV6qcZmm9WBiGwNvbEcBswW3aet9NHLQUrfYb27WAW9WFq",
  "key42": "3BgKMd6Gwv5goXqzuievZNo7EXr6c4FbT6qdTHTK12UFrVxbraJhrypVrybAV2xGskzZUCiGo9QZY1doLMP3wbwE",
  "key43": "2AC87EgKKE1zdFAZsf1sskvqAgGg1RPJea8tdiUNztup3Ewrw6ikDyTEoLangbm16riXnGqXTvc3SPu7o5im8fzT",
  "key44": "3eTbXU4Gs4esWr8wvkyz2F6oxrkyHWsmu4pXKb19aWVBvydYw1ZLZ6Rh1QHhYY4mBWHpgJVrWgSxwSpJSY4dW5T9",
  "key45": "Uu3yRKW5HamKgs3ax56VqYo6trgwXor415ZNBruwa3bR9G6BDPGRHrDHMKT9yM9pRWaDi3uDFXaywjefBtnWSxE"
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
