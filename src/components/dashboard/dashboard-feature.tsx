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
    "4Hzq8CsRGhqJMbUoB8gutwzRMhRx83WJdg3BuogadcnZmCW5oPNfd941GvXwqgaUjtXwD5LBvFugpHs9NUH7HLh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpKQzdsP1QtMQ9LUXAvJ4mBv6wWC3SoauRLXuZkAs6g6gRqCn21GAWkHVphbTuH4AxnH9uKwi1zqin7hambqt51",
  "key1": "4QKzHvg76DMp3tabNESGRS5RpbcUc5wg1sHEmvU8rhRmRtyVTnMh75h9PdxkuSfimBdBQnNxLyhk82orHkJCnSE6",
  "key2": "ygPSvNNSaeiWMEBEQU5gYcaHDzBYyyiUiK53BuRLvwPEXogixiM6XjbSA1QFdrMcxuhgEYE6v8F6hhtQeijrQ37",
  "key3": "j7AhepJTuxDmYXQ5ioEK9S6Xe2nN2DB4i4uWWYvkiHab2fRmJ5KGdkoqteGnBYNhnAHy7eL2Nj7Gur44P6GLUaT",
  "key4": "5bGyMjqMq7VQHkB1fG9d4AB1mNuDfSsTKbWsiHcP9hAXjaxeCput23BZcXW1BujKuYzqG95NqyuBXoWuMKwgd5m3",
  "key5": "5CWv6YHVdBKK5abY957GPHBtoGqkCQjYoX3fpcdp5BRf639GXNDWUjSapmFLqep7r18umYx6W5DM2BJnANxnwYxA",
  "key6": "62B3sRMvhAKEh6nzLLETU1t8RN5JAvWAM9PQnXnfMyrduwSsN9m8ya71YRUREVfWRJHx1nb7bn3z1i1WKRFD3Dgg",
  "key7": "2q7wQdXmoqJaWhN61AdRuq4o9HNR8hMjkALA2ipMZaBhq2K4rGRTb5nq3qWx9saJLnqGBcpPNyFqXu4gB7DmbdKv",
  "key8": "2XeaBe1j7iWvDCDWHndPKL7i8C2dPEYfvHoUWxnJHc6m3CWMo3h9MBKoMNEHUG17nD1odZXF4YB7RY6PmdawWhSF",
  "key9": "vL2AmcEGyMBdMzi95FuuvYERmqBBXRyuaXu1bjWGjGsjndzWL9W4qQdbZFv36uMczH78yREykWXW5D9KHibSFsB",
  "key10": "3VfgzgCQ7p8VRgx2LXtVudbdj1DTrGWJaBeXmKzBxwduJpD1u1J7QafebgF7BvkAZWzWgvXcfhWwRCT2A8YeLDY9",
  "key11": "4HXPXDGNL8FABoKaA66PdSV61nZQypBLsfRCtJQ7uiQ2WogPw2Fpf8u7U1Mh1zhxRvCEN9DsxK3C8qnWp4tjrJzQ",
  "key12": "evmJBn5Kc43PS9hQETrc7f2H66Eh7v4iEimDrb2n267JDQpKwKmpqHAnErRkVN6a1K4fzeR6rwtciScH2SW8zM7",
  "key13": "ku6s5Qu5LM94gBGceU9kJ8UFAMYdGWJyeAkrNrDSdXrhqVwHSpnc9Xe9feKJvjwfZRCcrjDsfXpJur2kKPZYnp4",
  "key14": "3DpSX5uj2UcsXbG8zkQ2fuL42TH7PfXhXAdJf8QQU1x1Sc3uyRxh3FPRp2SjP8CbyqHE1LWAyjZumcUBZ43E9mZH",
  "key15": "r75baVU2kQHdwCbXM4Z43dbk2uJa7ZJpKBZnC8htsR6zbBz7GXaUcQCKWp6qFozrjwofmz9d8uudfYKkkzs5W7Z",
  "key16": "LXPx7ajNqN6gkVWmAYbKgn6T9EJXAkJhdT5D8pY9DpGZyemmqFVyVKMTQcaaze717ecptDkT6mrAvrpgXNtFrpC",
  "key17": "3wEdaaNShM2FxwwzLxnifHr7nGU4KnYwQJoDhWeghVgsjTHhgVzm8VR2kJye2fJs61TgkUSLyDh5NMCrPZMQJJJH",
  "key18": "5ScLmydF9tRwF4J4VSgYPpcX6tGne31oh9YMkVyaGtnmHzcNoRt4xngENmCSYU6hjLr2Cv1wfQrrJYsjo2hmLvE9",
  "key19": "4JU4XJSLDx1DihD8uShu4k8U1QkFRLZCF54QP5C8xF251ADKzNw4q1Bi1uzVpHJYKn7LHHDEzrZVbub1EQsd48X1",
  "key20": "3SPRB3PxzV3gPwwiSt1AW8BWivLd3UUdveN9k6uroCKn9yJZReqimLju7bZmY66uLNZJqBk7u6da9kMwSypTU6Tm",
  "key21": "4XUYsYLRc1vhvsQdj2Kbkbs2E8EUNcT77gYR3mLs8wxwQXwG81ka17WpHAF9tQRpPjpd7VnJgbi8jQy6Le3WXYKv",
  "key22": "2MPmvdKA8z4t19AL7gWf2pbXfis7PnAxASySA9WbAy4WPKALk9WWn5wTiBrvxn9Mu77AtryPNviJcXqq9GNNkiMs",
  "key23": "53ZjWWigDktVd2S5xb9besgrH6CXFvaALovh3T7a5BzKLjaH945ajc9DBH7VDLehrJEEJMaxSbaifkj5p9ZBKia4",
  "key24": "5GVDDp7EG3Az7yLGoKh2tqwQKQeDTZNb3DgtUWEBJDXqCq2ZwA5e7dK9UgDCg9fbduMqgrJnfBrzmP9wVHtrsUrC",
  "key25": "mrKDhaRYuSykYazNQQh13AE6Pu6MCFuJQVVg6q413AgnUj6x6HJZG2HLeWX3YazksVDsF6Hy36FMMb1MTentGxK",
  "key26": "2MDHiXevjA3GxWtsV9YA4s4PynX4Tbdtff7JNw6uDVMCseqxiHDSxL7Ya3HXnaZT29T919FmBXebqTHkz8a9aMvu",
  "key27": "48QbpMDWNkZJQoa8mDiaDs9MK7nfMApiZ779q1Wirw34WgJZ6YHcC1cfLHJADVWzRT1AHifwqZMtcRzjscRpfiGy",
  "key28": "4EoqCHJXLFFrx8iwgHRBiRxZtjiY5ugAxgy49rKVsgfabRLMje1xEvRJPobqkvuafntBythkG9P1kpG9jQdbU6Qf",
  "key29": "e1aEk8rLH6u2bXeDCGQ2DKE5dfNzbpWkMnv33bc41z4iKEXhRUADfbmD4oZum9bxkA3FkgNP7YpPvKJynSPjMX9",
  "key30": "3MLxxkXAgXCXaMgxZ82FC6uvEhPDpjEvJ5WJ6a1M6nJomVt83W19eyZAAZbnKVkriD4vjVYkZ6Wk29hSHByoDp7s",
  "key31": "3Lbr2dkxvGTE2X9hUj16Bk7raMCDdy9xwTnspivKvf2oDpc2Kd3Kfe3yTZjnrRgd6xxXuAKQLLhUKgWMBK1akjT8",
  "key32": "ovpTCqLN8FrwD3VFGe3W3F8iLuVhajayBttyYdbm9jmzYrJx5dJjJJWShHboPv7KRqZgmp3acJx3bcfmre9g6Ry",
  "key33": "2pHadiexWRjZYSQCuHvbQVqjYrZwcnx2xrc6NUbUuKmjYoF4xwesVkNRYjZDJDvwqVJ7nxgb2WMzCg5eUpKimT5i"
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
