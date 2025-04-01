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
    "5DVfvxLqU4hXZEMs6itRrE32rXMKnG7LgnzV6z9m9AH2zjEeEqoRy6NJaYjcydGqkVj5aiBAgzAsA14js47yxL42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DjPxxXJ37gkah4MYxHdQPcZXqec8kvXnMaLtt7VDuQmykcQsnVbfPhBT6nGfMdP8hfgzSTyA2PFG9VmoS2GkX11",
  "key1": "rhhy72pEJcXooQFVYuvzY76xeV2Hpn8YcHpqdtijFu9UTn8acCWsAJRsrWczCJPWu8MXMe6H7V7AJtAnwu9S8T8",
  "key2": "2JsADaTuUor8kRFyppJ3PHp4MhXiAJ2GqNJK1PQz2t9RDxMF5JLTxwHDqGLqQ1joz9uxjBnQL1vY69iUh3HauYbp",
  "key3": "5Gu67f1Z8hiuPhuRCNnLs3bo2H1SsaUHdTszMvhX3PMqr4rqxnpFsWdQPLY7vmnoHi9f6mimfzuC4o17GzRtrJWk",
  "key4": "4LhREfnUZb7DudjdBrnXgz3j6aLwNrLgqEuNGfAbrhdia5TymTUDNjnLRo3swh56niUTf7Pi7hkTB97puaGHFjbg",
  "key5": "2YFofYa3w2uRhxW6FxeRjFLJGhbCiDLge6LHpA33JFRoz1LL6uNVjLba8E9hyT1sVnuXjQsEoZSg8KgV7Z2uAjwu",
  "key6": "2KnucZfxMhY5GXt1S8F3udSAkD25vhrsyDZYZi7ALzKFSqut6YPf1h8HgZYPhsJ2qr3GuNAFjhRzyF5ya2Pk6sKZ",
  "key7": "2ErxpTWaEioxF76egZ66vQCKatWXG6m3SDvJN5mHXPwyadsKMK2x5Qg6Yx3SEWvwbPEVDgB7XhUKJRfDMXGq4WuD",
  "key8": "2sLrpLX2BQpYGrNDrqeYnvEDMakG2BYFXDNMNxi4MgiC1KjRBHcHQiDTW1gYNL3V9F1kMfNu7gP5ggivn5eh89AL",
  "key9": "42eQb3nxAA1y3mpnsYrzNCQvgiL84FmzQFM2UrsanrC2rJW8AQqGLqyUWhgFmNzS3zMBkdkNeNxFdzXHeSZr15Ts",
  "key10": "31N5R5xEvQfLGaWmhcyVv1KbHBwbwDfdesMps5JRUwLzeW1y4xpC9fdjkhgo1BYe3R7jwExPsjxXdkf26qokBGdr",
  "key11": "2of59mQT8zi5qnEt5iF59haR9rcGC6neJyynMM2q4G3FQ5e5yUQQZKJDaLocZaPB8xqXNwx1wCN7uzguit4b57tH",
  "key12": "3MZTLL34WbDfK79KS4dgFjxs4169PmFnNjMLT51k8FnKfXdBcfAEZ9rGJop6DS4iD1AbfeWGMSHX51Tfs5arbzmw",
  "key13": "4R8usr3tMxwp1mFCS4EuUhRQJXdWB65t1EJkjgvFDHEaeWka65akw7yYxXFEDm71i8r1HC9vw4rn2c96QsRZT4Eo",
  "key14": "QXyt5HwdqCy1bX6kUtQJigfVeYQDqLFmPLGK4YhTsFbcz65PvEG9A27FxZzn5d9DgXfUe3gA8f4qZCtjCtaD4Au",
  "key15": "25c9najT9aRJHraunwvxdkYFmtzSGwTKugArqfMqeGAdsArKJzwptvEYdUs5e5QKsHcDe1iLAj2VQZWQ6K8S9Q3d",
  "key16": "53vnpTaZ7rdT3rbZs4qqXxqDmDNJkh19B12ZHD3HNycJ6YxqBesd3DCywh6HhfkuCkPhBsgWX8W5e1HXTgDUAZq3",
  "key17": "4WdViZkEki9rppL8P4cNVKjpkJqhsVNB68kggBC3uPF1XecqfXqhHHGC2xJGQVTVbnvRMBYWdTzfLsuvtA94Yc9o",
  "key18": "sPc9EqjXmkKFe5JsHmsLf1oxnr6DywdpJTogiBEs3aqCkNdtyqJbk6tT8xscCq9Ta37voomMCPx81REYDVzixU5",
  "key19": "4uSvVW5hH6J8nAY8JQmdKQCVc1HH31K4cUEDMxrEntWc3nXjBVrQ5evyHuRNAPXUzQQipMPzA2AtBcShuwLZ2vNM",
  "key20": "4Szbm9ifntHMpp833euskWquopRWkiejM9TbuUTws6ZJRpcHGgHjxsAmz7MBaxoEDqXKBmQqK3RKLFWgLNpZ1BZs",
  "key21": "GB6FzvFBdi68E6DbhDK7QvX3mu8LzEh6Y59tE2yqtD3v8GkvzMnbEb5AvwHsZDtJnWEgF7dvYwJbHGNf4ygJt4K",
  "key22": "5jmfZkBGEhFmTSsyX2BxesT1UHetrNfh4kGmyT3wKPYUPiSTTD4r3AyZt4mwaPErtEE6xuoA6MS3Mt4UYPog22Sb",
  "key23": "2BB5cb5Vxg3jcA5UtsuU3EVLyP7bvSh6kttyh8tjtuF7tUijrkWseEnA3ouw1ymr6EBu8Emr6jgoEtgXcGqyokLR",
  "key24": "4Y2r97KGMXR39TRBDDGAEYgeUrrHtk1HPR3dKkvHRpULYiLhNAc2tNBi1EeFgarK24x3Q3az9iaRiBPMP4MY4BzU",
  "key25": "7cmHpgMhZuX3W3GnZWCmbqGfR2SheCfbTSpBz2qKwuMhn3bFP15NWyJMo4EVuoyTLjgzz9siDmY8ekiEefev1uf",
  "key26": "329zhNcqGYJEMVE759Ggz2K99n76NU5UaStXfBhtnznfYy2LuojKbGjm4xeXMFKY4DmuagGMKYFWfSuhYuryyreL",
  "key27": "5MkMAihR6KjBdG6EKtx4VGimSpXWsZgYyr14sgdexDKpUS5YuqLwvVfadG4ruHduKCsunb7w9riSr3s9HmkRuCm5",
  "key28": "4qqpThZwA4TKrsM3dM6EZSmcyKZHLDBKBKb9DcX4yBXKcsKRLLLCx59RCX4mcQVfS26WFQBdEccpfkWVUx62tMt5",
  "key29": "zoSdRH3g8vbY6KPZF8dHoYBVqxbLFJa95WpADNjrPqNqFbuiNFKNHhER2dofqQ9rtu6yCtFhvosQd3cF1zR1Bjn",
  "key30": "zivewCVjKgMJX9mFRs5UsgtbtJG8WUzjAMR3VJdwGtkpnXfFeiQ6dgLhj2zgUSnU2LH2vTjokTkyqdNV6XBVFmz"
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
