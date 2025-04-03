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
    "3BauTZkSH6qEQzgoDurehuKQo7S3CUVNuGLwcVtvffMSHoCDAHnjspLr3xkMDbswj48HBQGvzhP4YDHa5tRgP2WR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcXt1f3G3mgycYMSt2VjPhjP1kQsSCffjVTYoEzwUf4LvFXDnTwXHez9TEMWQKaNzLid9xNGrcRbh3XEkbBkTNQ",
  "key1": "3anzS1cTxLCqNSgXnkGa5Rwb9JMwhvDgWmy7abn8UiU7NvFWWrTBm4iGuZVocwMrybqNAdD5qiqzKi3kGpWArc6R",
  "key2": "zJDQZYx9Ua2ptFMjMnw7XetjMBwUcRfRMsBja5j75vDdEQ6Ty3XohHpQzYDW6zQMTgYZCL7VEffjk5XagiToyNz",
  "key3": "5CKu7hCDsfh4HoJTzQ27hS68JutnS2jTE7BCbze4rXtk6SrMHwukjDNNN3A8TeW9Z8JSXWKGhiBBZa6DgacWw35v",
  "key4": "DEw5b8iADnWcfd8rmR1XjhTj4YNLQx9Th7UNTzm42xjDsuYGGuZtRjP2F2M1oEow7yKwrUPPXhWouSPgbFduGan",
  "key5": "3kFaR3AgC8UQooRgXzjQYRpKgEEo26qm6b9hJ54kvqk2BE4rwjJHKeoPEKwiZgXG91PVwwvT3zP68e1MNbXawKWz",
  "key6": "32NRMpMWXXBDKPQAvzbv7huRsJJfKjEeSbpLDwRxj5Y5ASwvz9KCLeSMpE9QcrucJFMpnBxzdvbBw4WddyzNidJr",
  "key7": "q2f4F737D3qJgYvkGRR6XqqF95ycRQxn84kV48ST6gPDu8L8N7squPAyVVQuMkWAzF4MTTCpqsf9oABUyEUG6Fg",
  "key8": "3K2M8bGyJ44Poqcdt8GviJ8v3HNWC7f64XniedAubBV8FnTyC95mibTj1hn5Q8y7BwKfjmpmMD7suXXjN3funM6P",
  "key9": "38yoXNeEsVuYiVqsTHvAjg794bUqtsrNVb3FCuZ9RYNWYUm9hYhFwUea1m8iPcbZw8af28z9upJwhoby5y8DdQN1",
  "key10": "39L7AmvrexbUuLQgzNW4jX6zJEdkvXHCgW4EX4hZWyTEcmaX5zXA83uh5zo7a2sK5Re6argCmrcu7aXNuYvTCiXX",
  "key11": "2zGfqi4UgAfK78KwKSEPePBstCrmgCKddS5tap5hAhLCpnWsCHqbYu4dF57rdcjxqHvE7rCmJx9HA7QXahesGH7r",
  "key12": "8bVTBJvxhKnkszjPMawUmuzq8MzojQfnnyLAtFdbVwtNsNDgF7WDPXt5MYZsmVWL9Crx85o5FJRhdfnpRmgvcS8",
  "key13": "4mqTgSp9RzRmfwk7Y7mw59VLdeFuf3apRYNY65rRpYf86brVtGzsa9zkyQnomsacXBfhMfWKcgMN4zcGd8vjvBsv",
  "key14": "mP32njY4ftkwQYcWcXhmJhd6qyDh4iMnEwQxVLrj4ZDdf1Yrcn44w8KtS2HbdBKkyhpK4JSgXzhX9JVD6ahGEGW",
  "key15": "4a4QjF6g4XoeH3g8LJXru3YMkEDSj4zzLhKdfywLx6s9eQ6jFY3cLCTdrc2gQrnJLhPKe4MZyK152nckTiNUfexc",
  "key16": "3bhsz8S4C46tNH6Z7eGxf9hwNCSAKPN5fomQ1HR3qcVnDdB9yrecQDJzPhjkiD7axi8cbZmiMSZB5QVrdUD12jjq",
  "key17": "4KQZ4vStSLNMdavYFKGZrk3etZ17ZWyG7URBZWs2DfjHAYk8v6T3ZLgMmVWUjDjpYvzb3ZsZQHr4GNAvw7rEecUU",
  "key18": "2C8rHcggrRGEUvPnMbmKNHBBjGk43D2c4m86iqFEBbEw1vkkHmbsWbx6ZfoAeMQmpKJf4rb9sU4yrrymBJB6U1Wu",
  "key19": "5rSgeoNShPfY3q1oKkY1V9aDQFPYpjrbZbyTFHL4dQGri3EPMGBbSppHQU3bzGuo1yXQpAaJBJddYKAiiQHHoGLF",
  "key20": "3G3VJLXzGkLHzsQZSs8Ff51oeE6arexP9q9pZkkoyazLir22g6k8m15y7Ehvscuhb5QAhkKVnSR5TntbSsuuDqpX",
  "key21": "466Guoh7EVRMxQZdHyKSQXKs2gNKRtKKTS588zWvxzx9gGWTCRmxy6ftTuHyt9F4yG1VpjrUqbYc3ZoApYpZfG9x",
  "key22": "5Zf6m4bmADKDxTm8BtTugR2Y7vBhCBayvK9NfYNsPCt3f4DjYBcQsjkXQiB7gjwKiH7At7FLoowvxPJcUKjNnsXu",
  "key23": "QPF8jMUMoFhWhAmzBejAdcEq3dc2tBiRTy9ZCTRspBMsqr54VMUN9Vfpi4EgtS2m8B9Bz3LQmzysdVqRnb1CkUs",
  "key24": "23WLiztKsoZWyYrHXXqH1gaeAEUez1LbS3q2SvXTiZTGNW7h3dMESEL8NEbrit9e3tCQWXVjDfkMdtHzXKLMQXVE",
  "key25": "3X2SZS7UTDwVS2g6mtaDKZgUqd9SJZSpCsZV4bPWQcJq7DgJd2GJ5oY5QWQ8vBcQmwkxt7hzL6pqTwuDDptzCPZC",
  "key26": "2nwkGuuERnkpbXkqBGm37zzBJoFTsvo7pReucheR3fpe6s6SFe9szBWGttFm2Zj6pTWhBdyjfh72QHHLFEenY3mQ",
  "key27": "3imRmd7h7hcU1NEP1MwXeTQ3sh1XSxd91sQJBEuN3t2okXmWaSgGxaqBZzqGjUxVvbdLj1yu1c3UL6J8BQ1rmByM",
  "key28": "2itxQ3h3XbGbfqdeNUKMKSS75qi8nPEitjZ3BMX7gyMEZppZA9cTheiUeTz6AdLd2cmGkymDXZv2UQ3MxjmVJU6b",
  "key29": "5EbPh4eau7z9Q6J59x4mepSqnZbJVbCf4QVJsfFjoj8u2asCcscd4UbQyxihnTWB7rQfoDjkgSFHxwCFVJFryBKQ",
  "key30": "4gh1PW2PEeRvPcWJJCHQvc1xMfBqFcjJw5mkFr2byPQ8Kqfy2UjYLaX5CcqhxSMT49ymRvbn2noThBHDFjuQXS5J",
  "key31": "5Mj99bUUb1Mo8WThe6q3MyeE28ENdWM77m4D9JCcMKjcBKoXwoFmitXRzEZf4e4HpnKqso1u26uDGtZ5YJkYZvgg",
  "key32": "5KhX2MVbKkUtGYe6qD7swtzReJhG7PnD7e3WEqPmy6CfAzs383mEoSKQ4AqCcLGrMgupuYpwJKE4hcKFyrWnc2ac"
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
