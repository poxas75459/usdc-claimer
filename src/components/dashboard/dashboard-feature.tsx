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
    "2dMqhvEhGeTCAJBMYq9itY4ZDpMA2S9Key8WvsS619n4NvG7x8NnEksnrovDQkXix9mCi4XZeBpEMiutXwUx5sC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zBkFQsJQ2MyDsKeihnkn4QVia64jrXWM3TUUZJc4L9QFQUAn2dBAaSDkotDrAs7MRgNKGQgcw944av4X6ckbSR3",
  "key1": "HfZn99q7jUZm86MomzsCttkwJNDGt6cnxXVSTgVjrSCrt7rSavvAL1XVrfri1UdQ6RcPJ58jXcSzxJRokhwJuYy",
  "key2": "eo84PxDzWLFdGu8R4j6ZDKWL4w5amcGipFukTPZjAZkcdFcvKHvzHxVTvWNSNuFDouNMhTT7Bkrpvj1WGGooXGN",
  "key3": "5wsFkr9m2jbkqtH7XqtDshckNnxAietZ3LLTTZEGAMD8rnyLeoPvYkYuAeQTRUfLMvqAB19dYZWEsjtbHCB2X4Be",
  "key4": "hZEkiq73Moc7CVubABbwNNdnogst9nq7soH2Lym1sLehA6VHMxT12HbbBFqEG6Hq6mTsCWGuKNhR15HYHotTbUp",
  "key5": "3UoKFAkdpNbUyGRT1AhBweAcyEvskrfhGysfS2Y4B4pCWUEGXuHuuUDXDnLqTKn3pdkhjHuzzit4NT6oiMkBq3YY",
  "key6": "5tzs2eqKvXtuttbtsWPTZgevmp8t9S7411QMJhkiWpvPwt59fJhW1oFbte6inYJVH9YQi9uQvor2rWXPYG2KvKL",
  "key7": "deRo6vEFBQF9WVuLrtUNBqWvf4UBq7NET3WbZq1mFcHtr6E658TruCdrL2NkHrn9d4yTv79kRLFNjgdTCyXTqti",
  "key8": "4t1gUC1uPD4azLvDmCbEJSrq9YWHVK33D3dPVqwBmW7oWTdQ3oG4tQ5T7u5TSmqqrSJ4G5fWg1ArqQtqaC3pQZSz",
  "key9": "7XxDK2ghSYJvuT2QM8pubAuGdLgYbhgjTVpsiw2VAzyGnQfdxYxiFcfhZNvKBGUPywVLjBCSur5YBwxHqGaYTVN",
  "key10": "5qBLSb6AhjcRGdcfJvGsg5JWtv5mctWgwvxnKduiqHkmSEffu8xBF1AyVmzSANe1rQvdeiP9XjzKHCa1QtchQux4",
  "key11": "31RhQ2YLS2XtLJhiK22yuLvryP3CTdYEPYbivqKvrv7oujWNYYZwQWf9QZXgim7gk7n9u6gAT37kF1BN5GEuzxff",
  "key12": "4ueXpvbTyAfV3gw4aZBqDePTn9mzaW3J2C9Homi7Q8Y6ijaoQVxXxUsRK2ejaBNGRzzZVgTDsRocJy3vQ3NfxB6C",
  "key13": "5ZpmWdmipovKUCuAE68LYbG2z2jt5SD8UXfvetihjK6wPVADCSZGAveTQ1z2UyNEd5ZXdUW74woaXzJtSZWRjxsE",
  "key14": "56h6TttFr9b7CSus2jfX3hzha56zcULktceZXhVSVimPS9DkcfNHrDVeCYLv7Vhm44K3XDZwe1a1UVUKHSzyNu1V",
  "key15": "54jMkS6BKZXpN1BtgKQu7R7Q8S9akDDp24NeGhZyg2Pjpw8jDGzaYm5iJrGT5pTqBNcjVwreyGk6yEcyCV6wNtL5",
  "key16": "3CinkZMoyQttRu7SwLPvN3YZqTiWX5v4CfpMxkYBATATzwdfdQVDXTLuDPxh7RdKpUUALMmgY8K5KR4DDEjwyr25",
  "key17": "HYzHE2G7GEJxtmLWsrNorPRkEAfdrJCvwKhYKuXpM8ehX5WrJx8FAbwrmv6b7uYb5oBdwvoHF6H7CzWaHyZKpZU",
  "key18": "sAEWEDxgywJBvBVGdE19fGaThez5zehxt69eym24QYA2kYNNSmEr3r4DsFaeP9mMJ4mxWQhafsEH1QADsKMmpnV",
  "key19": "61a1AMmsPnqjK8SbS58zxsyixXrVhv9UForsztMFoiVyta6ZDWaJKwRFSCTLFcGoJjfmaJXaJKxwqXDSM7wYzzcZ",
  "key20": "2XvGDR9oP4D4Syfk6mV6zqBd3eRcQnmE2sVqrczz2P81B64axJ2LCgYkmCUFreduRHFFZoHZZ367bR7j9PY9RnEV",
  "key21": "fzuybizZWpEdJ4eiuRRQc85RZDmzFZkTWvZxEaG6cU1beS1L3DwcetuTnGhAztieJtkadXPKSpUajbkqyzKc7Fh",
  "key22": "4WDtnN2MZZ3o8ixGkdaxZc8RPv8dSnLy7Cu4iUf3W9CAdEKs72iTo5SkFmBexridDTQ9p2xcu2s1yarbKpVxn8qh",
  "key23": "38zLpFU4TDESsBR8RWfY8njTHLCnvRqXBy4GuYmNppiWUsV5wdU8VmYHVK6Y5YsuPtNNBB1ufGWvnUsBJ45zQETu",
  "key24": "zNBrjge3jHKpuEfaJy9XK8zwWT8m39MTWA1cBEipiHhRbd7eGjFcYKmtWtmdqSx6uKAjAjENkUD1e66K5JW1oAv",
  "key25": "vndKDb5Yr7Lf38kFduNk2oKz4xvJGs4C882oL9d1MYjiEfeYMwPyUL8Ei5cporr3zRP9M5WoZDkZMX7HCVRE5vq",
  "key26": "4eqS6RGYVu3dDffDA7poxmiW6qoFX1vpvSacp3PbQ8no3p3DwpFZUoxzwDmsqXk6hNCv9n5Y6r8tARnQY243N9wK",
  "key27": "413PdoKLYiguNt55f6Hjk4nHMetWLePj9dDrifS5mE1zCUcMqaCr8vXyipeRy2rTDq9AknwxNhzujUQxGr4B7kDT",
  "key28": "5ED1VcWNMrWcyYmkhw5wxkBk3xrEvBFYed3GeWofsZ6oaNaCfcGNbXwNmR2MooTtaEL6WuL2j5s6iXpDQEVkGJuu",
  "key29": "2XwBJ5YAPbTuuHfnWqaNpaYQyh56dBqNN5XA9HnK2n2rXGYAhu1Rc9Fw7UqisaTHTkiPXHWUVCH7cHYUyJEedeYm",
  "key30": "665236RugrMoNxHmsbTCWXFYyAXBydMw7YY2pqLRLXZsGb63XEEZqp4seBCU3vW4UmNQLK4vLDESjv96Fr2wtmnT",
  "key31": "wuyF9LxNtsBQ1A67nHqVCs97Zg4VWev7YXVEF48GGfRWff2oNavVQ5GbCAQneHmcYAavuReLrAYTdMbA96DEvGy"
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
