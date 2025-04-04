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
    "3TrKscq8q6K4TEXijL6rwymy7Q5unhrQFt5EJMrUyQR4i6SDYSxsNaPKrK1vnJk5B3oTW3LthHMzm7VnL9axMpiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RKmnXTAx4ueJhCpp6zynpsVdvVHYBd2jh68Qv3udRvdM3aVhMYBC9YrsvhkpTuDjJxaLzom3SmqFbupfRmx8tpM",
  "key1": "5yaYgbfdSG2SRwfmhVGj6vjbMk7ECQvAExyWs613KGvAFtJc9tVw6fmZapzAuFcLg1Z6mr3Ks95C9zo5R3Afk1TT",
  "key2": "5GzA1Wo8h15SYoLV3wg5pqvy2tZZ6b3Z9avjk5PpwFGHNguW5T5VH7kCYmkC5qposBow79thKDDvMgctPBtNEkyJ",
  "key3": "5QXXMaMRSFVgT19B2osrfh5XN3ehkxngD7ZxEHZ4vVpxbuRzy4a1ssrubi6QAJAS5dPxj2LqA3ZZn5ebobT35hay",
  "key4": "42skCaWr2wfe4sLGqU8716mjnhwGghvNkW8u49bZZD8ZDMRMjQPnWdcTmMLCkbqgD7bJyAcqj71vPLtLrGbsPKWc",
  "key5": "2zmesxSWSzeUEGNzME73Z9jCnUrm1TLTdZxvcXLgFJHBiVJjkcqz4WSK4ZPLD6RipyvNcQEv3StV3ZoVusLX64cR",
  "key6": "4Q9NAqaqiz5Lqhkh3u7v52fk7xzVzQiQv7FSVGdMnTpkuhkDnXEANqNRio3AJgH2Y7AU26NKfiGyffM9eCMjEU8L",
  "key7": "3rtxmp7rtd1i9iAKM924Z8Hnim1V7771weX3UDRJQhjqdY1jojVvo7wQUz3ZKxHp9syYbq62qyp4gVQCgLZtHMdY",
  "key8": "5iXwUDsfzyaXD2gStkxpN71TH4yLWSAhsYYAjDQrFhdX4LsQZucsrzyq3sdhFU8QgoukBiRcWTWcf3rTPZY9RF8M",
  "key9": "31VuxxPnc2Pma9mnbyucWewxL2bKJxF6j8A2J5LfPEaNLHHckKwMAsQWPfhdkMxAHuRuf7ckFTyBjXB1cAocBYAF",
  "key10": "66GxqCYaXj95UvvPw8TKgpj14EZvTyXNUSWwPxZnozMiwJV832fAcMTcoKYcLbHfTVacMaKmU8BLJqz6iWu9KG5M",
  "key11": "dDrPAy8A3eL3BSVMqDgu9bYSG8VbZfBF54ANHg1NTAMQP7kkXz9HYZJ34CsqKsxAfYhV9X8VSkD3uEBcAKVyLE5",
  "key12": "3RzrRWyzRtu1H4xoHxMY6iPVgLbdmvTZfU7bbbuT38ggxb4hJ1N6QJo4aAYDAxNtjnbT55osZPAQRUttT4xZs2Kd",
  "key13": "3NQxJwEqvVMnHJUwpH3AFrT3PJuERo2NeTkJDxPbuVNdH3THnDprp2vgMHY4tf9rmuvXqczCX44QckUg6YpAf2NC",
  "key14": "4CKX2qUxVaRxVYHGas81M2h5Ca4m2jAS1S9NgtWrzq7yRBf7qJ8RqWQmYx1Q3U9FhFCRp6EhtAL3jivdHToLGMWC",
  "key15": "47RvcyoiwCQ5vHDjSZdhwzYSznfrLFFVA66H3aX4zUS6LuCS2FH2YDZiAmdSi3haHb1D6seP7k1PGhuXWf2tZkpu",
  "key16": "zGWJhqW8612e2x5BZDtVgbcpgF4fKWVgu3atMzVv8CNvSJKSVGoH4RBd99gYAb3wdCRg1gn4jyLJ4cRY3pRGprU",
  "key17": "hKwJFXhYK4atBvARSACafEoia3DGF8TX6RXpnDMTui4GXq88HLAsLr8WuYENu7N3HMQ1ZAh5e4ZKwJs1NSsxG9f",
  "key18": "gKTzczrc7S3wPFUEfKfwXnP63P4iNaEi7msjLbDX7HXPDU3jzWpefv21LKHcyTu5BUbGaeRedrnQ9DRFAcSnMPW",
  "key19": "4AYbXCKCarDaYeqd8GnNVxLkf4vGdYr7ZHHXTHoNEneu1cxhULsnwHnhyZN3DvRk7nF1ZcCym2yXcivfj5p4eDSq",
  "key20": "7asAnMGPnX5KG6AKCArarX8Qk3EMLdDm4TPgqNCWrM1fHjECZSqjTuFzE4PJN9akQk3dBt4KmJcpeZaqLBUzv8J",
  "key21": "zvZuNKCEf8L5BhUP2h6fXeWAb3kJEHSZu6DAhnRf1GLzYTTNsDHnvYVFyjg7n74HZoXfHS8hh7wyWc4heDi4afe",
  "key22": "41G5iBbRJLh2sTZN7V8bJUNgENTwJpg6MdaGwJwN5dcjhBJnjkYj24jFB2v95993mCtw3292QzEdzCbyudP49mNi",
  "key23": "4n6Y6YtrbHQ8jrZvtRqYHf9JT8TQ4XK96cBXDMGY9EWsFSsubtx2SyEuyr9tYMcwPhgFVRLGsNrmq2PGYpsJCx5W",
  "key24": "2WuyTnzmENDCDAmdNNzThK2fCEEgstR8dB7KbvxNEGoYgsJjdiAmfL8A4Tc3PTxPU7yqUyMEmUUSrSJ9qxpk7FyH"
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
