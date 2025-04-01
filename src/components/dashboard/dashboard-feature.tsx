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
    "5VNgaHwuPu2qA7Wk6PkJdfEFRcfNorfbaKnvzx4T7ZzrPLf7i1ZysQm3z4MqJBc8wrotxEpwcmTpS17q2LBVrp9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zWz9Uvjc2ed4CKW6VYn3opw9xsUSZxHu92dyWVTci6ezhjDSkR6LQWjyjeY4GZwCxkF1CLG5sE2eUdnuK5v5FkN",
  "key1": "8o1yjn1KygM22Dn5xRGxKVZLqc2XmN758oLYeejPYhWUbqEekwfWovJLhtFJ71KCr4F6Q7vNdG41Xf8S2nagBRj",
  "key2": "2f2hP7Z4oq8Hww4NmKj9yys8YA8oFC6uMqvt642urD6dUxqXhsrjvxAQYyS7AzH6KUH6GHR5TmamKqoubGYYudc4",
  "key3": "3xiEGQYbQWYYb4f5B9XjBTMdQugdfeRZ9jYYk6YtfuCYYwQVMjm1yErcRN2HNFjfheiVid8D8jzAV6BoLE1h3J3u",
  "key4": "5gaoMsHsPs5H2EUkmt6nwAgcJa4MMWZ3sJEMvNV4tjcSw8PwHkgqAV3mmQsESqDWBvy7xgvmkkbkpuXV4G2mpLgx",
  "key5": "Mr83o9vNBSMDp9bVjAVVjDd4QcFWKkEYECF6ndpUNwuybACKcD5MhkN8rB7b5Hu3SM6qdNxrkoK2wEWY6B755yF",
  "key6": "5XAjBdY9y6WkXSCH7VPJ94SJEaAxf6zPXY4ayUWyhgMd3FwXdDYsDfxUetbfpckDi5UQbMfjJiahmjdbbjD7WPCZ",
  "key7": "oiCiPgT5nBhuA7LnFBQ2S7svcV7aX3otefXVwc7nYdzWYMmJYoaQwCmoDP7D49TdvHZZpDiBpGEnBGNiPdhdWQs",
  "key8": "4LA47VB5T5iyhRCefvSi14ps3ENJRTUP8AGfJLTnugfwWKvJYMAeD8bAN8VghayXnfTtk4EYLRP3L8Q5dnRRj8Jk",
  "key9": "vHBuu1eKygWLzrxMExWmhPhd2EGbUbfKVDHmhDfAXfhmCvHzubSxAAqMzQSYiSmmngWrJat8jv5fs4Sj6MPNbHH",
  "key10": "4P3XPke8m2paJ6ccJ7fCz4N3qXxyCnrumk6e82JBtMSNNTefzjsqsPD8Ur7m9YxHdLKBLRJrG77BYiLEkx9NiyRk",
  "key11": "3DGYdeatPH7te4g6dQJNcNSAFwSGNNCoBtXs7Pq7jEGvKx3FcEd4CXT7kp3MUbHvsyHnL7wNurSKQotGcAQVpY2z",
  "key12": "cPWombkqmiypLsDKXRtuBHGuNgW5XaUqqBChY5UT4vaePg7vQLzKsiV12zG7JKUMbz1oTDtHPeHXZfMRp9sU7xp",
  "key13": "63KcMtB62TT7S9yqqtoHthy5wW4N7oTBjpcd6x3ya3GHa6SPqzyQ5tsmTwWvyyia96gimFitw6LoBn3kWxAYmHUd",
  "key14": "5x4PetT1wHuDzxTHThrWdGYJdjUwVrL5jRpxswX5pGNspAiVBnDi3MR9baQuCBnHJ6FszehgnyMMnBWPgXmSh5Ni",
  "key15": "jFDGD23aBBU4kd6qdP9PJwukegnaKSDipCpPKUMtmUzJi4GRUYXM7c44SuVBkBgh187P6f2efgSqqdhbb7zZxG9",
  "key16": "3HakzYLP4UgNzGvsBihHZkjwDQLAaMV3BDiuoz3yQ5VK2YW1Fr55MEFYct6Nkm8zbJZcx1H28nwDqvDqiWuNbMQ4",
  "key17": "4szqVJyPS7SbX8PyAZPrS8oT2fH3Q9ZpPbWgoSjB9JtVTbqW41cwc1UexhbcFQAfaZpRAdYzDDKaFmRzCBuvNdc9",
  "key18": "3BrHuThPLCZLiye3ZmbPAGvrWUX2V2F23n83TjBJLXwwvST1eDsK4KqEHp79mPwYwJBoMmy1HPH7zqymNa3gh3vA",
  "key19": "3a6uTHQ4iC647gCQdxDhNNRTUUDjMxgqNVW6Uk74PRNzT9AFzuSTtDjTborWDosdCVuDrwNb2HMv8JNM1EWSgjSq",
  "key20": "434QyLJ7vzQHZjzaog4t7qS5Aw6V66e3GWr4zAa9vFBnGBk3K1BH857YoyJdfFumeMBh9HeF6gsYrkpiknVw5EFU",
  "key21": "428fabk5erwnSf9Prjmu66ks8i7BPN89U3LuPRfar58gMK7bk9SkpRwakZM4bQXjswbuFTvy9Ga8rAyAGbCDKrDR",
  "key22": "2sAPtVD1yTwjgUUHABX4yDAjXknHCq9Sz9KvWS79MDtpe4txq72QYdne4pWjSKCtz3ULhm7eeeTeNEMR83CzghaQ",
  "key23": "2KTA5xJkMGCykzYfrVDiweXrChR6yUD85QorLevAetoNBcbKm8bZFsgPAGctJi71dNAJ1UcN6QC9jfrZJ3iKV2gL",
  "key24": "z2kt4M4hW3gkpwmsuVtHPZkTxcDhqyzAYpe5egoSDgRDEaTz7XaSCBuLftBTJHdBz61cwVAdbERztmve2PZWJHS",
  "key25": "5LbDMk4kaFRr9AFNX1VCx2Y7N1d3gPd4MAvBqJ3KWPTtWcC4LBAXvAvbxq7553q1DEbVVoD8tPG5GBu4gEQj3H5U",
  "key26": "3i1nieBuwcNyey2EecRi7omhUCQk81ytB7de6wqsJXMY4sRbfuwgigqCsxFrs75goB2tnmL1uH2xpNjHV2tpAz6E"
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
