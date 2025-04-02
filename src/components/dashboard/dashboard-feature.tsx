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
    "rBjjuPNnCBPu5FvCcQdWLhUacEHXXVQowVPxLTJGgRvjwEQZTd3XT2fYPaqqaLLnfWWX7SW2wokmNFLJGSo1WMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gxfg6Zd16mRHStn8EbEkGVNJR4PRz3TfozpRH7DA3AMHHj4T3MLMYNw72XEX8C2AtP66NwrnruS5UgTRSxn3Gp",
  "key1": "3khQZvqDLrcPkWW7JcQ6iDhYmKghXiK9iSwqieSMST61oQmv1zRvFJ2aSSU8TQongh5oG7DGZbPHyEwWquDNcJR",
  "key2": "2JcY4J4jVf6CS3YfbU3wfARrTXcL5aunPnSGsAM27g6XNsiRfjhhga9njGBKDANSWKvs4bF4dvcuqvZKuz3eKcVj",
  "key3": "4LPvcTKmFBGLsvLsVTfrgQArhmdhrKCUh5GRxZhvHzxHgxRiWH91CmrVRJEeqsywwXGwk1D9ucwXMZEeWEh73xht",
  "key4": "65qMQjSrEQ9GsSCQXNDxjQT9AsDGKqHjGt5GjSfBo4ee49d5murfRPXMws8kEM7dcAJ7U93AYeKwNNSW1oyJ8KBp",
  "key5": "3WZNA9mFKs4jzcxKb7fEfsqN6z5ffD44JyPa2SX51vwfUSzWZST2mdF3SMY5sY7KJBqpFRJGzUmS7oLZGsQYi8N1",
  "key6": "2wraMLAkRnLxioGj93SYf2W1c5hiEF5xKTUMmwf9nDZykLFbXqHRkgDatoNNCve2hH3Ftw8Je2Zxe1ZFJx9vaZE9",
  "key7": "4mRz9trwfN6D52urtcvpfr9HVpq6GLN35uRZuDwtaJsjmsbMJD48bp1abP5GExCUy3au3878HnFkfuaoF1jEda5t",
  "key8": "5dt3X4u5wj4sGTTcPi9fGFpkXwh8vUJ87HJGG2HE7reZ3seexhN9FmmJiGmnaCvjx7zQNGDtdPyh8uww6obi3fUp",
  "key9": "4sZKD3CsQX89yKmrzfuyn8b9A8b5a6ivWZ4Yq6oFXeCL2CMxKrc36pE69YWNcdDUjAyKZLz4oxSqAhw21uVsdXgB",
  "key10": "2CGKjVHQaYC8iJs2pme3YqNtA9e7smZuYa51ipzrjSxEQAVxshnbWVGq655GH2R7fxZB5jNC7SEyCKfkXRezBjbD",
  "key11": "5BtNJeCBbXQgihygXBh8tTXnmSm4ByYRfeEDmm8D8AmLycBWt23G2ZxmMbhLJiV1vK6uvoeWi6atfdtvkwTq4pFW",
  "key12": "3jrboo7V4uiGbTk3PsaMeaa3zkSKUW32PGoYYYG2WyjMjjnj72CQs92scRYi2eYNubPYXnvDueWHMtnCEV8NBAJ2",
  "key13": "3joyoQbkSF5EnJFoiz4mchyubfS2VWZ5mtzj7tVm37K8dVhuM6r2tpYcWGWXtXaMn4ptYCS4ptrBfrZM5dtwGvUr",
  "key14": "3ACQhQy8QSNmtkd6XUCXfaVRYRtexZUCezw5vHPVnybX3HPe6wuHnZBchAxGZS1b3VZg1ftcybJnCLktm3FaRz3o",
  "key15": "35JPEVqDEMaiDK3WMgeTHuqz4rghsy7K83ftiZoZ3NEzRTCVe4KvK8G3EBeg1p2mqffYDMVinbB2hRU7jxjwR2Gj",
  "key16": "39eXoLqzmNojSD59FwuNVLNxN3353SpjYbk1e3xoNZnVJNsB4DNx5VqhqBEmZdneSC9NXUFxxpqfcSpc4E7dyETp",
  "key17": "5t6Bm39TeqPEKxJRHZUyw96rbWFbZem62sTwUGNx2uvJto9QoYSD1yfHH6axGXCQSpNb4d9xHW3FEVstvtW4rLnz",
  "key18": "2oVKpFCNEQYotDhcuQPHSkz4urR1fSHCQt8ziZBKFjcwpHDrsCn2iddXFyYXcmR5QaooENqjYKeJB5rJEpb13hop",
  "key19": "CCKkrZWs1WhtQsTPdcWjj4iESfnufteiAN77iRZXFCC6LVUL8LMVNVsSHagWmVY1cz5M5NdCF5xbTV8q3KeEhZy",
  "key20": "3EomiuR81NRafDrB4pr2arWsqXNXBz316BBnPC7mgcxYMQkv3Jbepypy6rLQJT9jc2WF1HtB8dYMUAUBk1jXdsZg",
  "key21": "EBJqt6PdLfdqazUX5v5PKZuRqsaZ15kbcjpdPTR1WwAqDsdpvVXswWds7AzmYvbdjcrfBSqDH4VfSmK6ukNzLei",
  "key22": "zuASQSstnXX48LQerc1uPVVF2AzjpyijaTpz2V2HtHCQnUDhs6jpEQPVCVBSwqzqanV564PBegcQ554UVQEHQ7F",
  "key23": "3novxPBGzDUdgqnQLrv7gcX2FDPwfNEa6zYo74qATRTKcDFKRrt4dpNcQcwn25q2c5v2iu7g2pmhWw7CiPusizRY",
  "key24": "24U9vw5KXJEbNfnHDGKgTMi8hZUah2AWR2RQ6bSQ5jSqAZAc5tPedZgyPSPhAPqFsW2QuziAouqPW8v9w3AEyG2x",
  "key25": "kHmfoPKBTviXyFzs32Ym448RBEsTXH2mfzvXnVwKengTtjgbBRCQZQQwkJ3vd7zJSBrEYxxbCDG3HvQ4dE3KBUu",
  "key26": "4d4SQRci37aJzu3NyXuKoR7MQDmLpsRL2ZKWvJZJC6qT7EzrhVipRoevBQn2TKZq47HoJpueVDxtLbPDx7eidE2m",
  "key27": "23qQngoN4JN4Q2SjBo4MjsFFkPFK4oSZHYiTs5d64fEtWT8Y1HnfMczWkZRMW8GrST2wWAZSFro8KHxBSjNQX3pm",
  "key28": "4gzBSfY4TZZG3xPEuZ5abi3mfGYjzJKPvMk7dYd52MuVmYUaTmzUuWpmaMEyzD4gpy3du2CqgdLiKCuHr1tyVE8q",
  "key29": "2TmZiA8S97HTxvY86xr2ux2Ho3hqj94WdhcTAcJzSYfpRtdYYMBRxpJopXKMFUcyZjjwYXZQLvR1YRY37NCs2K2B",
  "key30": "3gPdNjb6WyrvXiCGfUpF8xKQ8LTUi4cTeAUvxZXnPTNn9XoYts55WQidMuVjwxu91JcgT4iSD6wkuRuUiEwftsAY",
  "key31": "5vD1iBJH3Ak72PnLAoQ2W3mLzYPReRR2tpB4m1Dc5ZbqyRzEw5EQjHcPyGojb13bmXmfoBGLjNoLyK2mswNFcREE",
  "key32": "5FKAGmowyrUwYRgjeGtSSK6CCmaYUbgffAzgWxJDieJhJGEvRrfF26yoj7i3SKotNocsTUWvv9mfSbDHNtvv8JAB",
  "key33": "fpHi9zKCjjRjrpkCAnesEkwPSfvA5JjhNNnKTMhL7LA8uSQjYvhTsqFcq2XmFNDrGm4wjPSVyWfGeYyRemxASZu",
  "key34": "3Y1k1Qwuof9ysk5uDgodqBDGMTzGQRyfb4ZPjZFoMtso1Z7ZhDVSSkoNvtDiiRowNzsiXiXZ7sTdjE3tPiUUiJf2",
  "key35": "4GFfDDrdU1WZL23Qp1LBfaPhDSkpjmxYKrK5XPDg7ep8JNY1xz9ejoCQwC73gt8UKbwU3rCww33vbTZ3vumpvkbm"
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
