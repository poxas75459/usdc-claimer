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
    "2zdM3cF6qBamh7WVJCNwNX2G844eAJagmWXF4V7StiGQnV5dPgFdeBmE2MUNVoba141Gg2gwsSbbzwcMVA3PxKKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQXpUuoLx29NzgstH1BKS5qTWuBpNZdGE5LSMQTMpCLRtmJP5nm5q3JXRQnjKoWJ7YkJP8DLBsY6eKkQ74jwPuy",
  "key1": "ffz2pWwki1jtHzw4ukxrHLYgrxDmh9p4ky8Yc5qVxqk3EvAEa7eFqS16G3knb2UU6upQ7CTTUtHG73jVwnywwdC",
  "key2": "4KAGTzrSkcGLrk5RKar4ZYEF7buanTH6m9rAWyVrk9QCw5vM2gwg6xHtw8duRseMKnz3DXrdRSewmkXvGzuWHqPm",
  "key3": "26cSRsVcVvFr9CUR9bs78cFNwyVXAbNVZ7v5prejoqf65V9Wm3goViYfMk89u4DccJAoJCDTp7Tg8xoyHtZhvXGy",
  "key4": "5n4eQgeYE2FZz8k73HppCe69Qru5kxVbUKMWWNxpGvworfWc1WFA3PGE3VUTgAVVwtbQ5V9cGr3dGjX3pFLxGxUG",
  "key5": "yftBQw4q9zxLaCnEnJsZkWf4UerehGTJJtK3rYnPcGeUQ84T94mkV6CPxZWvXH66qsEemo9tTJcX8q2QfZcRNin",
  "key6": "3XW3HXhnRDSTW93AJhmU967md2Xo6VnMbvxGa4GgS7hQq5Yy7TfB7qNHmqvBm7LkntnyrneXzF6PbRz4pxz4bgB",
  "key7": "5Z9Sab94NFMzsPFJkqNx5tEfKUYEgLaowuJ6sgsWjMsXPVABJFpjqzgashm5xUFSPeh6BYXJR4ifmEEgrhnss8Tw",
  "key8": "2sZ8zFLYnuY6k5v7PLaSkTgSPwjco25Y7j9NfMqYKdTuG7qkoZwyUvCEj7EKvBJrsPcSsumgfhPcCiBohLhubYHH",
  "key9": "2sBhrNmA4KQh65qR3Zpz4DxQ4ZCioXHVnq2pDsmkw9A31hjy1pZhch73tTG78N1LisnMyf4ZFnD2dtEtPdvMCc6v",
  "key10": "2DtfakK1Svb5rzyhSWap4x9sFh5693orvWAoGG5UsNZjYkRM8cSs8f2SWuoeVRYNnMHTWNpJYvnWYct534h5mYTW",
  "key11": "3Mk18JrWvu2Evq8BwW8QioXwp3JYqDg53tnh26t5pXE1BbPbjkhz5ow8Cj5Y5sNG2m8nenawLVYPqLr1Ks9gU9Hw",
  "key12": "2SGS12LuMfZWuLvmG4VMEKGUvexgKjgKBRMG8kkAZWkcbXhtptBxSyjhEQrg2L18CsAvi8HRLZnbE4DyJgkJqSic",
  "key13": "55DpUyU6ySm8xpjtqZiHgotYtkzYBLXV58NvcVQRYY9FdphFaGbt9oBFHWsmhSjjisNvGQLYVGtqMsUNzbsXZSbq",
  "key14": "3cj5MuyxNsAWgV647ZRU93dBSHRFz9ouF3LwktxL9Yg6x7oCMjzhSEkiCtMC7wL7MFrNKgz4anWAU3qupaGTFzKH",
  "key15": "4ySjhTSp6ykiLyUUSPiJpo5dbT62wfAopaVEHXHz5n2nJjE8zWtgy1feAasY7nZ9ZGbUtfoakyAigMx4mo6GGPKG",
  "key16": "2HLpgCYjEdFkMRCqiw2TkQv4QjkFpjeb83Fk7msvFTCSuVap5Zy31NfCahQwQq2ieJQJZcXAfTBvrfwciL7CAwpG",
  "key17": "TqLScBUUNA5xNdGaZo2vuMYVrdFa2ti6Hcr4QMCpSi1ueRoveXa5SHdgdpWGLYpcUn41ixbpJNNbhJFY9nywvFZ",
  "key18": "ovKMcTqQsUvwr7xn8Q8DmNF3QUpBDWoTk2qLWsoUYDJrugNvwyfuAPZN9DiwGPaQLdMgPWfQWDpPNgLLVrPQBuX",
  "key19": "5VLxRLtfDdHfmAtCX8Phbz4s6aA1UQtMk9cc6BLvbyz2wsV3TkPSSAiB6buDDz5nx5o7Zp8mvG1ibf7rF6satan1",
  "key20": "25YnpTRp3GDE42Fv81ex7iKVJ6iFvE2dJZdLwnHApWkssDwXTMa7HruXJUX9PUsBBHmahNZvXDoE5nGjcYY4jguF",
  "key21": "4VuAs7LrrvYYn5fqSQpa2uQBTfU3CWP4gHCEJyGHLkZTAjFr5aJ31xhwK7hnSR1JAjHSULRhk5Pof3r16Z1stjBY",
  "key22": "4CXDJjenjMW1Y4rqNBzWq6Etwy3r3GxTvT9efZ5yqogC18LEFqjjLaMkbK1hNNjbMFJKB4gTxQfs35pGU5jKoe26",
  "key23": "5fpYLjp6t5ULTEqHU1GdJuP2KGo9Z1KT8JfGJ5V9NkHpxPqQYe5TzAdzQtpo83hTWYpN9eThkcDsP7TNNxdHjDrr",
  "key24": "4c2N8K1MxAzxDF2TxRZv7AfUqw3DKE6Z7DpRyw4xE5bs1fTft2eYu1V6hsmb4XjXDCwRRdcMV1biJsmEhuJMHMQf",
  "key25": "f7iVQ4knMRhzkRFQydMUth2Ztpom7n3UptbLDefKFVA9eCfcTtHjyc5wDMZC8SF5qm3BsapLNno1qDqTZ12jvU4",
  "key26": "3n9YSdpcwRLQBhqMFtx9A5SzinJTaArpKJHXREboLNiTNNdXrZ4W9iWJqKHqCPKAEN588q61NmRm1ko1Ykf6KUfh",
  "key27": "3vBxox6MRUkccZPYz3wTkfniQh33aJM23bnrkE3war2EsBnc92BvYaXJuQg4BYUZhsmkcrqGna9HQAJcLsVn6kHy",
  "key28": "5mtg1reKdkD9rjtHMNfprtM52NgdjZhL8j9TMkb1sbgFDrkLKgAHV1qnApP4AMYoLRwVZ6nnQHzsmUkaxX11Qf6x"
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
