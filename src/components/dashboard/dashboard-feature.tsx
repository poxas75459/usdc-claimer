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
    "3Q9gs7kbupXf6N92Bt54QXzDsEQTRZwfLmJ1dSQjtHppDJrbDeiHeu1a2QdxFqXz7rc3RDL5zhCTuCCktiRUfNBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RpK9pveEWWVw7oKZfdQyRqbhb26oz6Yv1vLgu1fsCsTXKWnNrwW9bHmbsdqD13Pnkc7gZnYv5JQrm2gEgyVALba",
  "key1": "4mHfkRp6WNiJznX6vW9pkzAWMTjqvKu8KEGicJa1VkQGKkYgyPjkhbmfc9Us6DMMfMCFViMbwZZG2RGp4sRSuPbo",
  "key2": "5cyd843Jr2MhBW2u7yxpJPCq61uhzhk8WT7xSwi9xEb9zi1shFBohUv15kKniEX7en18FiwdeMJgizcNaNR31pu3",
  "key3": "LKU6Pj2o6iTTiXfarNFJU5exKQHnMeQb865QDhUy7yvJf7KsxEMhkgtDbie74NXe119UeAnwRiTyZWmLa7UxA87",
  "key4": "4H4QwoStP643PVhXnQdY6xqDTRXHexifQ4yPquQEBGqG591AeZmqpGfPdVCxnRE89mJxTs1ixw7d5cqsetxJ2bnW",
  "key5": "4paana36oZj557c4GoAnkpfachUviHbDzjibUcdW48cxJ59WM7cNLQU3DWxVHd5v7jmR2EFyHRtNBZJPDKDKLw1o",
  "key6": "2qMyDUdryaEKum7J2QDyCrq4EtFGT4e2kTodNVLKh4tXV3wgkaPFBZr1yZa3Voordb3v9d6bLnx9K9a6VVko3syB",
  "key7": "RPP3ZBfu44UCRP55VfvPYM7UPG9HJwvBB9o6bQD9ejrEVBWbjzRT6MEiAbyRv2YmXNv1PoZWtMzqVgmgSKTyQCU",
  "key8": "49gxtrtPRBezE9m9qAsAekX7fuE9EsyePKLyDrJ8pJdUt16LmNtQHm5owFqAeMD6WWggYkPw1ShFKXeG1AGyfsmQ",
  "key9": "SjUpMGTYW9MHnqjfZ12ajYbQdQSJrSTT5cQ5ABJqoKa7GsxLifJSWndiYedqBXY2yfkLbq2M126sqZTzBo216ZJ",
  "key10": "2WNBSRde3ozuFtoME1jRvwXefqpTSMQwNgizmycD83s8Gtb3GvwXFjLJnUavrCxqrmnS1G1xKUgKmUzdySrwZJM4",
  "key11": "21urdWRc7jmZcbGZ7hE2NNUfMbfZ8h3dhd1vpUDpihyfFusLHREfhnS9PMCdfKN2rVHT1SHvfWpCd6Nh2Qgmi8NE",
  "key12": "3x8QTZZzc6UJ6nLhwLEaM4WYiQqWZ9TxRhKSnUbHWJNDoTzqsBziMgSuxKxCkvoWmoRcYKMr3VjwpXAAK3SYZ34Z",
  "key13": "42q9mTgzxsskQmMrUSFQFCbVrW9wnLmnDMXcj9k3Gm2dVDMAtum8dVgdAJYZAZbogcBa4hcpecMvYD1o3XRuvcZ8",
  "key14": "4LAV5ybrbFnijSQmmLKkUKGZn4rm4ybCzebwfpP8BB6t1Tcfk7UQhGTFkHVFtGgDM5CPsZysXLyTxTYb7G13Jx6E",
  "key15": "7FMXRqJkhNeHs6iriPTqckKP92BjbJ796J37TjkXVBQrPHqUHjhm64Qq4kx2eDSDAHP1pW3tDtZE2Zh45zP9iDi",
  "key16": "2D8h9KBqJ2r4QBtKrEGEwxuidUNdSp2GLNnCWvM12R5LXAS6bGJkrWib6CRLxtHJoFqXinxfTQVuxhpsbL3pDCBH",
  "key17": "2WWWK9FFULx7R4nEM2N39RKN1nwi2AmiG7tXXL3g6sTLQRtYcyepCjy8fZ46Aze56uFHs9UV1mnDXhW4pWS719Jf",
  "key18": "3rVEmu5BBeJ7xZHJAgT9nw3CZzJgwB5VGYbEEy2vxA4Mhe8hT9kJTbkfsgPtydazhcZqRxD6G34RSkc3uv7V5cmM",
  "key19": "5TkDwvigUM9qdEjgkzpdYpthxYmfQxozLiVDgRH4ra821Lzx9J3AK3142r2qzTWSdKRE7AiDHcRpTtA2AMvXMhmj",
  "key20": "5p1rsBi9PLPZW5NWoCc8tkqJaYAGu6UzU5RELzgZXfjLtA8jySSrEDFJYZXsLNrCEPAHRkBxRTA4W9jQ3PAdmb2D",
  "key21": "3YEAPMr17gaejQvDDHLwuAXtz9KgvKgHy4GrbuUEDfggryu5gDchoS9Urcb2qvKaSjfyajgXLqVYtLKDZQyFin6",
  "key22": "4FXBWa14rwJse5kztCRMCJFPe34wVo7g9F87ycRJkDvjaB9AePowV656A844ch1G7c52DUJmtEQ3s9t5t6FZcuZF",
  "key23": "2yEQXQMbfHoPx8KCqtxSpt3XLWcqk6nrGtrWMPmbpWZWTxSCSFJXo9QVmQsexQCwnoi84sgLudPbmeKoE3u69dKT",
  "key24": "4udG9TmRsqC3iW7Yb4gMLRE5LfKcbc2qAEjEnqoBhdGi8bDXQrg9pWWfjsWFkwS16WruPnWnF5qNh8snfsWPAT3w",
  "key25": "xwVCUyJXwzcvf2tPeNQNAZXyiqnXwrEA956sKZdsH8feoUxKFx8zpZxCkxhLpTSg85TAky1YTqktF61Bf87GMwP",
  "key26": "jB5w4EPzWTwkxbTDpnmg3Y6dmxX15JvYxDhvL8MUBetBmMySihtUv9RWDD4NW37nuc7AgZnx7QUTNCWbvFBAzax",
  "key27": "43JMwv2YqfyEygiyrTEtHAGjnBvJLVcJEf2Ss29JFW3jXnDwnbEqMPWbawuc9EwjLZnBr2uQdKE5fWmYeXPJmXY9",
  "key28": "SfTQVUKVsAjTfWdRu1uYQnvYZ9F42wdfgt1v5aHzEYEHXyojnuyw9Som25cjSDSjM6nYJUCb8gemQKaP3Lhrr3J",
  "key29": "ZZ5usFMbRjZpQbZryxbJWaVRLssL466qQQK5NfPqY2TAbb8FUs8tUzoiWP2azreQn2vG5oJULB7qH7nRjPGJHYF",
  "key30": "d1jKALpdX1NAYGohDvoC35ddvwgcGQGnVEKB4ZzMwbzmWYCjbKVtpCFJf66gCMdohmDvd138w5AbQaHpiVo6CzZ",
  "key31": "ciuw7ytnxYmCvAMBhn3qwqFZBmDoK8qDSUaHuemYnE66opKFWveMRYYqDSdGsfv8njxedxdBA7Dh6N6Gdk6sGw8",
  "key32": "3yD5Kf2vVn3K2dzw4McdgbKv4U2yWTKgcrcPEJppKk2qkUw1GwA67ea86h5VKMDXUBudfAcDgybCf5hDAs1HEPXA",
  "key33": "4Bwee37iAwWeXZy63aR56Dr1wHuz6J79WrYKEJbLXvTJzzsdALZd5o4dYS9yYpw2RFLmuMNkwHez5DHp3XZ7rVwJ",
  "key34": "3CtWfgJQNaAzhejd5GARKxro3Y1TUbsMRhHr7Kxb6DKa8UFCuKL2QXrswRDwqJ6NjGXjjeBazhwJGojvscoc6MFd",
  "key35": "45hvBQVwWZUKxPjTtADSoyFtv5PmpJPebpysfG4ebC1uJcNjJZLGun39XzbRd2ticGKcKsHRMbaaPAeUDb32Gvi6"
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
