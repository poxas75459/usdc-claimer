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
    "3XPfvAbwYTPjCaf1q92RSYqZmb3eDZyD6i5hUhKbySH3RDJGc4tTY1BDEy5cQvd2cti6NtZx5bbs9oAi6Y6Yi4tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64bei7STHk2Fb1GBc7X73nfZcPC2yb2XPzVFSV52NsFMMWhm4KWbUEEytCW4gLDHtwXWCu4kR6WCAwC9aNsoh95A",
  "key1": "5KWqdGczZhBo6pMgHVQjjQANmaQTJDZPN3LbXrK3zJCoK8dMU4zyDw2JSaRXzKxgezcSWDRCpXiZvnArP2i1NcG",
  "key2": "38Kj1U6qZ33BTiAw4U44wqHwFUqvnaCQZSnAP9LPWCJPGds7w7pzs9NWQDr9XDVbMQxdbrao23QUHWSGFVXuzPqV",
  "key3": "2pWp1EqbcUKMEh3Q9BdGABBQHDK5xeiuZKB1Be611RuKGt7fm2T7fiDhaAv74XGrcT1rxkQBH1VqiijgK1Tid7Gx",
  "key4": "6rzxuA8Vgy9QUqoTMs3e7RR2XMvj7CVi5Gv8Y5k8yy3ihmZX1WRrAigjHwfyckXNMgXPJhxnT7iQa9Nv5z5Ax4z",
  "key5": "3po3kyTCRnTSMEYTBzNJ7Q282BGfcyZXfkwZWBrqZKqs4L3psxVLsoGR4qLLpKfiAvyMjxrxk2KwPzX5F4hieyDb",
  "key6": "q9n5RHNcQyMYz7K8kHYmtK2BkHxABKeo39cgnTdD4YMfniuQSrVtdKsCXByFi5u1vuHX9qqbTc3ubHf4dsSkcGn",
  "key7": "65XhK3cAUP42yfb4hyVmc7oaopR8EqJFS277zYLCBXiJv6v3Wf38z7guDZfYjANDkRydvMKc89jFJC8VqdRXvHJ3",
  "key8": "398PDjzXx9bXyzhZ93i7H179qwjVF9jA5CKM7CArum7cL7f1v8hMnFy9AqDabxdivKbv5UbbdDVu3C446v99wXvL",
  "key9": "4AuD5Dnesg76VBg485N8C2i5NQo5uqVZPqrJRHWUzRQRxVYYWzWh1GXTTpVixiXWwtz2txoKw85CjEjxq4ohoLb5",
  "key10": "5Zy28NPqsjJqepLtMDXrw447BwUHr4sqSCoiwZUUSasq5MuzunAuH4vHGUq7q2xwaQ8FsR4GLcW12NDFxMX9Mkbg",
  "key11": "4yKGi4NhWBQgTj2voGixpoQDRx8Jy6WAkGjmhfJSDy4H5EVMZ3Ff1Am82uC1whLtvxnmD4G4ENVzZmxrVPWf6tzt",
  "key12": "2iKseX3XsNNMA5uoqBSDQKoq2Z3tivLyBdEJHz9JGqAf5PEBuzUkTX9fSfCsLUv8rRZtRRxeTZVKRsngWAFDhyvo",
  "key13": "3L3fXv3G3X3GexXDvjToHURzMSQRh8EMsnPknVZuExrrdpmXrBucYmJwPueFDnwggQQH49pcxMQC69wuyMKEP5XQ",
  "key14": "38sQaFFxjm1G74hEUmSgjvNHt6uXjqyUBkKBZjRCdNgfAw1LKW3PaBJSfj3pvpu2J3KwVYtq6gvVvNvfoVa1k7uW",
  "key15": "5FbBSKTPzmJxHgBGbJvd46qH4mqixuqo9ybg6w13awoUd2PYEPy8ZiH6JEacKa7FEJrJNGF1WXrWKL9u8SgGQvr5",
  "key16": "3ETw926MbC59hej9nczSYnarzLZfJ7Kw1MfqDoCTV6Ftr7zezaWJnWG83DXFBwAH26zoDX6RfGRcz67HPKdecMnZ",
  "key17": "3svpYZQZrQ75x6dvEpZUgJ7E8YGh6UzgcmXLa1NZgSruFKeBuh6p83UHnDA6ZjPxFQV75TdmyZRmWmxu55iWMWrW",
  "key18": "4LaxyydPmGjqsHYAzcgHXjCqPr8f8kfWjrRs4YT4Cdxz9PtHYNgwnGtaqNp9c5DoRMc5kCWPEyahjZk6XvAuMCso",
  "key19": "51s21tnG82nrB2JCnRnrE5bLUTHMp2qDPjPpQV7cNGCAahyrdrUbLXiQ6HCkRCnJbSLRJKWV4aLNLaP8egSnj9mG",
  "key20": "4FMWQkRkcPXH8emYfCZjkBDu4NWQiQvnW3yVHpcaZvSYXfNG3geczdVwqFsRJ2h38zSgNnY1nBqmk5knNSb6D2cY",
  "key21": "5dbSDbbHFsQAjM814yjBkHgs2shGT2SNPDdsGr9idzcsTiBQ63FmGvw7RVxKJMs2CzkDy7upuJ7FaH7W8WVgBjoe",
  "key22": "38Rercx3Fi9SaKj6ULi9Lh8WBU9HYofvYwrUkRJ5712295ALLhAk42LHUXrZkhD7WuFc37sTYWBhWL2ykhrz7FU",
  "key23": "24S2iMrfRWc6hr5vycM6pwF6zvhh2p38UHf7myRFKvVkFedsUA3Hwxx7kwWnB4qzFpXhHRRCyKPE5VbRsQgeTPVT",
  "key24": "2eHowjNF2hkn9zPirdFzuN9GdJMYPypxysGnWGktyMFD8ipzWaBkcJgcf1X4cEL4eyx5cFFpgNm9x3zRjHi3Hc7w",
  "key25": "WQjoxChnaZm9vK6p578qkSToRRjYSeHtGc51mP23We4ro7Cgg57xWMem2fRHEsxQwcehqpwUAZ8baFzg4vM9bfP",
  "key26": "2wzoZ8rbeRRwYaQTESJ3LdeRSEuZeuPdfmtSYo2GgaQ2NHqnALzsq3iCv4v7j4rGmMA8bttTWvv7NezxpGH5J7au",
  "key27": "2c5JHKvMawPfco3MB5XxWnPjbJMHikVvDU5yvzW4mPPzabpi6iujwkiMZu7bEsv71o4Myfg7PMK8mQf9hjsZvh9z"
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
