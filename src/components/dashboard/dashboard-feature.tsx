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
    "5d25qQNn2tWMxKZnoxuhLMHtxssSvKckfXdisjMnQPJoXjHBt39D7bZDhM8otQ1Hbn1MP1Myyk8PAEcXYMV2EzBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FQ88qhp7niXzo6eunupUp3RAupZV3wUGdUR88cheFtYweGzDvkwa1nECTcNn68YwKmh2VS6pjBDuzdm8T3ufDu6",
  "key1": "DLKz6ByQhAgUQRNSZgaieqU4DQjtNgULZdPagiFb57cJGN7Tn4BuJkVfww1F7XntEoujPXEGcFrcXeFiPzVBPyx",
  "key2": "3LL9NCt7dNXkzqg7UNtxQLZL8jRq8LZBtPmYNWPzkahFjJTCnVdrSdM13rdRy8QDSWPwov5pGBwQj5Hstmy4DBDt",
  "key3": "2vzGgbaQ5bxwnUd6bxB9FXkRjtNKJpzd1C1ota6gMTxUZRNHdVDQfjdAwAZhZPy6jjgWywPARGfrn32zJSb9D1xv",
  "key4": "3HV8KiScqmFPhvpftuNdLv8kB3sXMgAWymnCiiZqhCQpcZE6ryMsG1HRnyM6KyXfasxXBJqsp6wCgN2S8Df7gRyp",
  "key5": "mwPkgiXSG87mnmiffRp9DmG8b5LrAAvxFRz4UTtrCiABichCxgFBsPvhgimUaqxt6wn2mKTR5LCJri8279nKmqQ",
  "key6": "2cC5H78q6LLnX2xxxSUuFGhURjyKs4XBPHvMfFAiVszGUZAe6s3eNdSY5CWdrhq1CT3W1xCk1a3WK9fj3R9oCSgQ",
  "key7": "3e1SqUvj7uJPYe23tEoQvNvxHFKJYBecZxXUAvVHbEaDNADyVQQo7jKnv9bQzRQQ8fAgRce5ATHrFD7MgU6zw6VE",
  "key8": "3HQL4ebn9qb2hK3FEXvxzgWi1XMYwWp9ofLZjWCNGjDhXY3aokWYYD5aneAQhE9t2So1SP1PAWPSsxw4MRywf1dk",
  "key9": "WDUzUFLErBCCqfWQ94GpQopS88zZCYLyKAJNPMpfjay6TpsAK8Fjdqd5tginq8BzVdXvVFiwqxtNsEdKu78AUHi",
  "key10": "MQKy7hKN1GU621kVnDD7EJYi99CQrK4ER6LPkbaag2LGDCxrvPe9HzHpitVkqd4BhSN89RQ96jWzY9M6kwE6dtk",
  "key11": "3R2cUrGj9XHug9XPyzfHL8yX662b2SsJ4heqD5aq2DtrmptrrPyWjFckMp5HYU7XFZDiKZHJo9SBfaHcigrvDfRS",
  "key12": "TGadhHbWKYbTSRzw1UK6EjJRbpUUJ9UVQRxcRzsFPKjWN5kCyAgzrMTKratVhkGDoH34496vGvuNREGUVgv1Zjt",
  "key13": "64i4LznAFnzhCFh33egAd1pN5wgXktvgTauHaeSzWqYLHGN1YprMVm6gRFhnqQQtYh6r7aphJfsRcsk7ydC1ctaP",
  "key14": "4T8WY4NCAQLpNy8DoDggVB6STPHKWRX2epPXVPbLym42x3AWWZCDHXoc2S6qD5GgdhRR4QLdskvuH5AsYu4F9vAc",
  "key15": "5PbF3yknwf9vdnNzkY5qBoGVasNit9dpxsk1TLqHidVdpXGGjAaM6fDw9oJ3otmGyahqVcXrLd1pB9dNGMs3GFPM",
  "key16": "3tjpwHYez21oszndjDJiRVCCrvX3xZ8Dpdjy5U9tBJquRuWi7LhD7CbBVyCSntBEUzZogHWXY6iqZr7iGTwxcKzs",
  "key17": "51RdpW75LNnExrRuGTteEhTicm2Ds3G8DBRsjqhgUR8ZdUvmR12uG3HUyXG1fYwTvBPGVW2xrYvLLSp1VkrBunnU",
  "key18": "2zFLWZNwczqpn5PGeqnzEcMtHn97kqZKM1pzS2DFLZN4K434u2vep9T33kEPhYPEBEpyqDETt3i6YqbxZK4X4kFd",
  "key19": "5jy8G7hcjXVN1nbcZ6zFxGJHisyv3MY9Siyw7WcE1bPRhgH14aL8Ynh98s7oAhKKbcZKTjXMfdXtkGxBRTkAY948",
  "key20": "3oKxNC9hSQpHWNhTkN9aviawac3D3Dzc87siidAbKo8sLFJvrkmphHwgjcyKiASJBGJKASz2sVJPbiBCz31RKsak",
  "key21": "4fsWysZMyrsPXo9GF4rdHrpo5phmgcK7MMynisZm1soJ9MudQzmoGVhhmX4Wtm7Csa9Kyd1eDTNqom1nCu5XTaxv",
  "key22": "2DpxUTWAmNEjaGfx4Q8Vjh8du2gm5HUSpfdWTrpPx3dpuut7vnNrmqyQdaDDa5jGAHDpTYwJd8DNWnZtDCyaGu68",
  "key23": "2EtYsjWCHXoDJAc7kdfWmYDzQFn793hmMcn33ZipMv5cHQDBGWuDZpWTpi95grLtqPCmcSX3pdJGNcStxoQrXtTz",
  "key24": "3sfFunBjvkazbGFF4vhzEF4rMARJb95iy16hs7brGopMUW7CcwfDuNd3MdPAfNChoHmjyyP64ZR2rmJwhJRCkS6U",
  "key25": "5qcfr51L4GzAkwyYk1MtwS6ZwvGRgE5V8eiWksthzzsPpd9C6LpNfDpdSYxQoyHJ6ZoM5bg5UA1HwvvAS2497Q9Q",
  "key26": "4M8a44HETtKPgiVa73DqAMq98FKZM6oeVDBWWPPms5Gb3jbHoNka779CEQzU55zmL1nhP8Jbhim1ChwND1n8KyF9",
  "key27": "3conorSaYrzbrVLPb3NDFEyiDQpPgqsXVZw2tk6nqVxYKGpdydcZk7NwvKdUZzz1g9CvQ69ym3uEPPy5LUpbRrPp",
  "key28": "3mUC22akKqAzmFRiis7p2fWoSVH3czzpGeKyPSjEEQVQttg6dRh7xs4LDhJFu5h4c69aypX9sBXAUKkXbm5hDx2a",
  "key29": "o5ujcGX52Htov5XZnK7WT15Yrdbgd5ySzb28wXmNGvvWL5Wk326nFsh618dQR23UnwWBzJTVCeruW1CytrVVvM2",
  "key30": "LzYjbLnbtB4Fjzxam7vihPqE1tGyKnS2dm7Yd2PYgyThsVKExTpGmyDvADrXqyAHhzCw7Ej8p5BX1NK2FGBmd6T",
  "key31": "2YCkn9gckAWBEUxXSpmudqsbChHoT9veX1rP536Skj2tP2A3SvWA4K9Chaj5ryeAw4hcPqDUEkowngoiizuVat3V",
  "key32": "5A3mVtVMcnCZMqL9FpM3eqdu6d5AGjBvhjcwdBTC9yFqa6yjBMzpvPeMdsL4o7NwmgGaXijjsNjrMHyc72Jvb3gL",
  "key33": "VFcttBjNvjg6W2qc5WStXUXXNq4DjVvjbvuHjWyC23tmoCswb1iEpuESq9pfRu62fEuurTPk1tb6TzAkDJfXeYC",
  "key34": "38Ng961Vo4DLkF3e365uSPvJ8HMo5R1LfnkhmmdAndWAv8AfnD7XgKZjmRo3X1Scsi4uXa5wr5G3o54v6RhvGLhw",
  "key35": "Cgv5ifAYdJXzcubG1YCh3zEyX38uhVuiKeoQeGndW1t3x7nW5jpSbA8Xkn6usqTHgtZRsU1Tyw2STfNTbcUtF8Q"
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
