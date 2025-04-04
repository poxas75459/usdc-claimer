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
    "3Q46robZHqhjWXbMYr8J9pAcU2CaT8zAAHjiFMrSDtb8j6cKWagV2TzDiALFN7GoH7MtmvT3zjzwcFgWpVsjbp3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "394R5AWsPkFTQuHq4dPkBuXg51JFQLVVvDxZ81aKYbqVRSoKEoydY2CMb4PvZGswKGJhQNdRfcTpVApTj42pjWty",
  "key1": "BUMrXk9LSgtqtXwnKAmkaqvAQDS4o8zc8gtZKqvZXhWdiU77EPLmQ9cpPgsdCF3gXRwjJPYYrhuA4iV33wDqTsZ",
  "key2": "uNHCLpmoJQthEMrrX1HdKxzXFB2z9fvtvexVJTNh6yJ5RPSCZ2Dw58Aoenu769RdXqmurTRrKknLSAALo5U8pdo",
  "key3": "UMSVyZsJNq4mqJc6iCSabgcmFomxgZYjuqTsCei63bj3427R3RWQyZ3qcY7bKBBqSuBq63x2M6GDL5Xw6Rt5Ax9",
  "key4": "2fPwmAVPYpTJUxXLQ4yaqtbCaN32JXRxKo1SLuCM7ASj9Wpaer1V8gyBMcSN9RwvUzmruwcTQ1wBTPokBEmYogdu",
  "key5": "5y62xgq9vB3ike6mTMqPCRhrhBzyDrEqrHhhGJPnGq6bGTsq7w8gKxSFUbj8CoAsfhJc5NmBPdWD9Zd7F7QktPHP",
  "key6": "2Vo649QQdWEeFfsWJFU7KTkJFWRVhMq1PW7BH52mfX4dXNVnAXiR6TFU4xhMWoHhZAEW4sgDcWdt3kTtQM6d9nnD",
  "key7": "63PW2czB7MXeeXNJoTcHdZyFPDFDanKbaBM3Y33hEpqaw93f7z5AGf6eK63ysL3ZYi4bxQwtFwuyST4MKRKvd1M2",
  "key8": "2phYrSU5xg4e5vqXCACRzooMPPVKEMpQZR8G5QsH3qnDHDyTexKTit2ytMPqeZjK6VUqw77dn6zUQCGjgM3vHcjZ",
  "key9": "3i5V2Eaifd4Geh34egBTKqYiyaXwNLiNZoourq1DrLRjaygZm9jz3fMgj8ui8GmG2JwDfoAY4Kh7veNsCU8bUq2f",
  "key10": "39JMeFxk4nFNET7Vx62xYyYNeA97YGXx6Crfs52Aga1tBELhZazYhAcbBsVHWvPwG1CE685JAYC7FaY9XXyNcyZP",
  "key11": "5dkbLtXD1TqUqgnf8dfSz1Xe3QAkwew8CfrwkDmsLuB8K2EbwzevjUtNvHtsXBdfyuQrsVziDbSNZpsZDdFSWvSP",
  "key12": "2xE8c5hYhakJUwWcym4nudfVr5WjR4VBnXPKHbEk5M85SsdtqPpnftX976tuUCba5zPN6QX7K7zqdZWGqrhYzBSF",
  "key13": "2anCadjBXa6cYFh7Yk9FtDbVa9BWuyPa3rJuAUNt1fWw8xTruMVjevLU5KmcFzE2odAvXTzS2J62k3yvb6Fyuct6",
  "key14": "2vtvvs5R8qfDrdor8jGyMP8Te7qZfdFdMbVmobwAo5JtY3Y7T4kcRDLrUXN6siuW8mTeaXrkKtrK23P6KUykz6G7",
  "key15": "4G99rM3agFyftREQb2ZDnCMh6r9aNjw72iMCHobJY9kDSMwP7XZCS9Meybn5oT9nZ2f9qbchHGKTSqtX1c57KvLE",
  "key16": "5ubzhAQH23WwCwgM8atpPmUTM5w3oNKv32dc96FfBzk5nZvf8kHA9wzF9FQAfCbwZPgwhQrBKviuJ8hszyRZoUsn",
  "key17": "FzBb48HfBXFeSLjV6qGMf42CgFJPS19odrQ1uVwZJEavnrXhJry1UW3UV1tSxbSQoiAXGvpaK8M5MS4XRwU3qn2",
  "key18": "ziWpPNnFqEf2RcbiXzmh5t3X2PKoT3N5xKZ1BfLbdeYmGwucWz3T4moadHYYRWchmiwxfxQmkXUgNtuF8yZYnzQ",
  "key19": "2MXC7XJiFeRzYCr67f6Wv7AZgqQV1ryPP2yCdgLjH2AZqD9aq5m6PWmfgvCFEwXntG5JCWsSPmVnQvSKYZ5DMc1N",
  "key20": "55toNnpmsAkTuSh6CFzCqJUFjK71rbEMNtTYFnp9oz8g7uFdGN3keNVz3nFYs9sSymauWSRAh2LCMRbyAbWoFZkz",
  "key21": "3iSC9XfGvwh8VcqN1Thpg5TwXvJPvwV7bZZKhBfgVGMuL67Axom5jV8e9ya8QpBEGveydjhj9HcHURJsrmuXcbuH",
  "key22": "3mf62bRA9iovPsBsrtbM4snRdQWcW6PgzEHR23s373oQGf6VX6LemjM591dE8vt5PfrUkA4CwBHY9whSDz1V7Xmz",
  "key23": "49FR2W2zBjfeaWckPCWBvgDJuH4tgSgmbRWHHpUT6N6R65pWxvPB8sAMuBfvhe4CNV9fptgPJXZ4F99rHzVzDcJU",
  "key24": "51mA6NSAYovGzEETfiYRSVW3NDqdFZRjMLrnM9KTDMjotrWBtUrec1m7j5b9vyfAHjSgqspti6gDDtCdfH1e5HDS",
  "key25": "3h7AmhH9PWj68KVQku7ycdE88RzP6nSdUWtcTUqXApCQoHJw7ZMUtNbST8aWzfS8ay1ey3cUCDoKRRxqcu4ujW7x",
  "key26": "2y64o82Dq3FYEbMSLxX1TT6pQwCx7gEaW5fnrpEMdpbrHXwSncu6fsX4exYGDCJaqVtiZEXqd9Zgm64hFZJmGQiE",
  "key27": "HAwLJBhbhkVdFe6Mqz1e1U7QbqqG6wL2uXjHeWDTq1DTRaQaxfNgVFbPMKPiJWNFPe4qQUsMLMHAHQoNWBs5wFE",
  "key28": "33CoioZb9F1E2WRqG6pPGcAkbGXXtHcMcPP9ZBXuPkUvi5kNhzcYroaxgFgHGREJcJLjsTDY1WNE8M4WFckFc9VH",
  "key29": "37weDB6VwNHHPF3DYRDbSdKJFHyYcmZALZT7Sw5pkMbW3KXPgdTL28FCJzS4BD4ND9W3FBCEc3geGL5hXLETvghd",
  "key30": "3XjSQsRWA5C7gojpWN85Ed23kNw5d5Zz3tc26vgNSZ5uXMPdB6ujwkW746eDZ8CMFNspZszYvXzuZJ6fE4eWZuNN"
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
