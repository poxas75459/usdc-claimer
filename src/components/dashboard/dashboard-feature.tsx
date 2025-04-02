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
    "4GhpTnGmE8EbwNJ5jkPLYdzAkDDb3xbYd7u5KjJLg2epzbvYm25oCavNv4bmjDHwD2tHKp1dsxLzw8K2y6i8xYQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2boaS9ehC1jzqiSzLx5oURQJdzLLbNDHrS4UhNDiGNPYegcx7nxKsnHFuJtD7PDtj3oDTS9jpSd511sFauZQtz1a",
  "key1": "3uHbN2EhDDrjhTgrdbtFcbrCi6DEm2XS8Y3aWfLSpT8YwgY5WkZs2fd58JkjC98kxpKXkc3eqVx5BtKhC6CKXk4G",
  "key2": "27fB3djed9AccJ8suM2o9KwXWG3LEHd3UYoUWAUP2NSeQ8LhzsGFY3ZRhc44vUCRnt1tdvxGcX9pThNnruua4yei",
  "key3": "3E7nejVHVveEj8dCWVe5FF4nED2JvWazeVK8B7XGGtYysSQ3WRAodHoWTisFmQe4NAWCjqxfs3mYTYVFqLVaHt63",
  "key4": "5CQsC2p9fizPK4rVkrgdKEs6w9tzXt7rNvtYEXSwNrzaDu589aNL27t3psMf7PN6aYHfywwXTCNKs9txdU7L7kfj",
  "key5": "4p5QPFN3WSKdjvpoRqLEmr2MN2eAw2wL7L2J9NEN114XFYsPPPjdfmNgjuCdeZCbkw2HZMckwbf2WLhq1cy123tm",
  "key6": "3VAKf6csz6zk3iaZPHJhEUcNQqcR2cRqMQTeC6yEY2CBMMXwTN3ZLfvK6EYKobVHmdiCHDM4CgkL8ovJSUY4SJEm",
  "key7": "3kkeRGt65WnYw1nNS9jdCcgpBfUh2oG8a2sE6RqYqyRd8tY5WDaGGg7t4e1QeDwrcudVfjcmTF8Q8F9P9WZhwYBw",
  "key8": "uvEymKTYSzu3pvWqMQEWbtxiUbJiMjyL5M6wszKcFYGmrUtFVvHct7L2EeRxGmAvruuxQdbNasJUe9g4ELj5Kjc",
  "key9": "bPGbPXZpqGVPPMYhEkJqT4E2u12suoNvTE9mtnw4xU8LeDAFpDTB1e6QET4vw4h25Aj6ENcYKHM1kWX9Ab4zbWE",
  "key10": "qmxud9ZRwkPkbGNj1JhtouLfRKpBVBTyhb7K4VxjjBzuerycQvy275CeohyrKj64D4AbmzfBHWHuW7QvnagVwEG",
  "key11": "53ci79SiL54HVqhANBvzjQ9yi4fVxbRX9mpy4LNanDDcrTGYVtfWXkkfe4uU1TS6Eh5S46f5ftynanDLNo8GDDrV",
  "key12": "ueBdSbBq8aHy9G12Gw3T2UrmQzSNgQBbPjXQ7pZSs6wqvDPvjw3VJWnYwtXx7PHqBizdhLmA5eyE8v6SGqCaXA6",
  "key13": "pE6yZsJruDTKbMumy1hE3menwuPLfbBQ4Z9sXCQwpbxnADHZJmFLo5jYHZAdAhDAQzAXCjFNWkN82vDgGoia1uH",
  "key14": "3yA9EUoyi4zbZvW3QfsBh9yPHAjVUacqKKwuUanSBiXfzNasZLX8boxhm5f3HqLk8nTe54oSpkXGPAdT92Rn6o44",
  "key15": "kiWGT6oxW36AYuBzC7pV2zWAqHHypNMnDBjS92GMjs5mkPn3LwsDM9w6GZ544UNXqreSwWxxr8YSXKz2Npd9m5Q",
  "key16": "2mPPB2DU8YiQm8FBqcREgBdJbHCcug1dx6wtgpNMaJkWToDd9n2c1KaxLj9t1XBa8PpmSirqNnk5Rm4Sw8KKY7Zq",
  "key17": "2zaPRkHY3ZDU5Zj3F6UZz98pjZawETohPpLvvz4L9Gw32CANBGaQEX8dUNnU1M2EjA5rJAa2G137nA93BYXPqMAK",
  "key18": "59vXC6yGT8A5pdtUUtTKcUYcPqXfhjpCAbix8y7yhxygksDVAcjhS1T5uxMmBVr8XTx8vZkjS17oEVpxBkfZ3vwb",
  "key19": "5AvSN27nts5J7t1kfMWnF85Rtx4YiS5GNXUrbgfbZ2JgUyrgrZfSpyLsUumC6UkqtcjSFPGFfCxyms75UjtURSCb",
  "key20": "KfRMTgo6VFp4wJHqhcZzQMiNm1kPzJbgKApKEw77GGx5xnBNwVKwS4UyhoWhqUaVWbUdJjMrLNBFKxvX2WzKraN",
  "key21": "2Bjz1yA8wXjqPPmkvT9eSaTXH5L3WEQHGwUeNaymrwRGa6urhoQxZAwbDoeeUcFisbiTY27Fzf8q7wXAMFzNzghE",
  "key22": "3DXXcaRFBcHUC9qp8KQ27SmtTHd48tapNCFbmnqu9fJdxn9qF3f1j3bxnHAqMSgt6eN4wehNsHuVEYkk7BuVhNt1",
  "key23": "5TbCf8DS818uiNLsy7wqzvcUp29LfvBgGcCzfmpTcv29H8pir9VqN4mgE7LamcsTGacGWD2oMn4ScL8Ujxk1ucqy",
  "key24": "3GFzUTuvQ1DAwtsMzC6mtrtxaX8LwzpS313ciA6vjGLqqJbQWNcRRdKRiRXmqA1T9HcPTcNzXhF6XkT4eYtni262",
  "key25": "319HZenAJQc88oMLEWQSFihL5mp528YDPTZx1T1YHRZ4oboUMbofc7JwhCzmwSkhjkz6U8YXRx6GoPC3oWK3kzmv",
  "key26": "33qTj4notGEyE7CaGxEUH4poG6vbzKUVyfCr6TzkmCQG8wmgFYqHxubzqN2X3qGA4NpQRGMwKmZCMuVbQj9HgqYP",
  "key27": "5oQTSEQYL1J612xHrrx68CfZugNppbFwBuNkahKa8Luz47xrG5k3RFkuCb3YK9npKV7kfqjt21gmmxK7sHWbhez3",
  "key28": "5mfQ5xnz1C2cZX4UwZLY1wNXBeReyXV213j48qBjQjiGBUs9e5y5WUVtCLN2PSyBuicKj8z8MPCHXAnPaeNo9mif",
  "key29": "3qqQXyrwnQSkuDhC9JfTi8sccE7Gy7kDnpvqiNYDkw8Tr9veHgovNhGd3f3xtRkwbCmRWw2gXQmD8LrpkZAykmH6",
  "key30": "4snhkD8pYvLjsLjuXSCXAqwEakjhFxTmCDF23kMmvWvsr1K1iduKCbd3Exu1h6reQC3iJN4fv9wPbc2QLWVTBr76"
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
