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
    "24WJNs6f1mZrneBYMYy1c8TYv4ZVm7UEtXwmC9QLzcsBfqBpZ1oogHotn9yypBjYZLxdAiYsmdXRuAvYwRpqMsk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZVf3SZSSXDmC3QmgPJmr4ko9KV6g2pQViaLaDpwdnXR29RfZVF7NckS2BSU8LSEZfsRdvJYacDPgKrFPt3cfGRw",
  "key1": "5ro8p7HZBhTwKAMfgVAbmi9qCmEeogvoKBZKPhMXFAPQbGfbjiYcax9MGKXhXg1kSWNPi2wXPXT7nsXmGXJAGb4c",
  "key2": "5yqdhMzmAHPtHPSWoYZ394jiVQhWxXJjWJeVaPUHMtMiwYAS9f27NMzKJGA7YZ7zXhiGTvC4PVibHdeJUXv21wAv",
  "key3": "4Cx2XX8TW2X6RmRaTnpdZpzw3eQ2BBkHNRr8y1neChnJiB7iKf7Rmw2encefwGouCeSf27uptwQnhmFUW1oTFteU",
  "key4": "2FpYGaW4kSgxk4SMqSfpaivEtzNHsWFQ3i5dqTTYVXNon9QxHEP7v2RqDReK3PXaWZX5s54qVxntsgGsfyKVzteE",
  "key5": "4B8JJTKnpNS9CcYCdzqpGMN6sWKgKmDK9sETNC2scUrW5hcsNncBxWQeXd5FqC5B3u29P7syShiKnPhy8dSXpsbk",
  "key6": "5CmNLpNePtZJUDfd9MKxzuGmbV9J4dLEHhTku8sbNVBK2NGcUFcUBHrZQ6wwwWYQCwjxTHJKrCZiCRNUMzHQjTWz",
  "key7": "edSJoHHjLKM9FSDMehFrDZtaEoPKgH1VeyUNheZL95kxJR1YGBdn49QbHftoDMQJDijDtw8x3WWfqkxQ92fQBpD",
  "key8": "XTbSYbsfwAfVQEEcq7pEhWto4yZmtPyn9PLcbmdAeMuHsQE1CZ9Dz9KR2jqEmb4Rg8hLebAHqtChxrkCXfPux5q",
  "key9": "5mbbLb4bnnd4E4rQtoEVsy4iq2NVyuBuRcPeHxW7wQC9mFt3PT3Rj6EAdEHEtM7Lmrap8ep911JkjQ8AdayMAWk3",
  "key10": "a7cp7jZr2gqBYs9db8Jkx58m2B4nD9xJfXh9wVAQFhodmrJHFA8RS8DmV8HD32BcLpzHCwpgCpshZQHviGJkej4",
  "key11": "4mTTTqe7yQfQwqpTx4BTEsNCJpZYhkSyS4YX4q14Xd6284QBRQTEepi54ogUyWntZGhkCGs3cYsQi5AmbbM8fzR3",
  "key12": "2ZNAfq2NhjnJhDDuk41nsFiqyaNZkemBB54dDZZ9RLqhWL3CE3imp9ciafCsD726qawgY5h6n1sWX4wbmcZ7NTk6",
  "key13": "2XVpBgWQGRCN1GxaAgVDve9ZrjmP2rhXVzmDYxVSCbTKmb7xuqbgPR4C8bc3QNJHBKwhTnRS84eG8beLvTTQ12rz",
  "key14": "EkgjvyhBqZfabi8sSM5J7CXCd2VWFkxYx6n5Yd95ovNa7DEbYaS5jiA3ZNKU1FnzA7koN51MNdPqUqzcbPBLd8c",
  "key15": "weMZ3xfDyaKwJ8qzbfk7BoRMnCSaY55SpkxdPUd7kXdqX5TE5w5kDyyY5SbGi4hBtFTndW3uaHFU9oQS9LBwfTi",
  "key16": "22kAEe8vd837raG5e3aKrZWcb7qVJ9CpALkdi7axdt1jbhBkvasucyVtf1WwQBvfZ9AqAxqQRDqunpy79mxcikjN",
  "key17": "4KoYhibVyMRc3gRGFPzKEpAjTGrE9fZ4Scd85WMYMAMhiwFi29wW4xL7ap8b7ocngMbpRoiGC8XYcoYnCE9D1o5T",
  "key18": "22xioajAfgbaVeLxkTbLTXTnnzYoy231wS1YR9BfgFh3uGqDk1GoD45GxggzuF2vjeHZJryAqwM18LjFBCxKwVd6",
  "key19": "55akEdabENQSehAWfMtifvRCoJueZ4uYQ9M62135JTd3f8TfeYyRVXiCqzzULR3RVd7D5ZxPzyB5ZuMtEk5oq3y2",
  "key20": "ShTsxNVy14urD9XWMWypMJbeXiD5J921hUrnffwXMSsgnQ7nCWpWTBwZZv7GZ8qvJpamVUtbXU21xnRXq7MddAA",
  "key21": "34zQYuci6B1YDtJfdqBN1vdUpDAGEDEGwut8ZwLt8jbn5cm8qEc8J7akXyWQtH28xfVXpW9WqeUrz5HCyfTpfPK1",
  "key22": "2szAJiVVtBsMc1W3oUBEsHQ5KGcjx8PrV796czZY3xKj8v2H8rj4qmS4r2YeFN93Ya3VQ5Z6Gvaun6EGLhbsAz4J",
  "key23": "5N16YhbjUwG9kXwNDy8UKbQ2vNrXTgJFxBBzW75pe7s4TJMHoc1bh4PUdmjhtJoDDf9pQsd4ciQgrno3rGipTW3c",
  "key24": "64y3P3K61TKrCpEJHxdzxcLuot56t66okXEkS9dfQ1KJpVvu7EkWwFTD6aNtiYFjxtJ82fh52ZQZLXSfovFzFF4T",
  "key25": "3m22vyxYhHcbbqoaPV87WaJMGYJaniJoDpKvczsnf1D3Tta7Fci6UQQxTm1pxLvGAMYkXCDe75oMvPFSA1hxMfyN",
  "key26": "3LQKPj1AfEwbncic45GvzhL28Uo3niUKkB58p8fyTM27Bh1cVVx9jS7KKSYWZpiygJYYM3Nec3zcREHhpwgeWjBk",
  "key27": "3FLo9TbwUeCVsaAip5oHgLjim5XDVjqKKMpxFvma3CLABU9ZV7tJDGF8mpaJzsVkfGdS86Szx8g8qxtUnDMngX1S",
  "key28": "3w4gyqU4XXaCeHh9VzusWCiWRmGD21wnJWAryqUtxQczfxBfqcFcNPtKaWhovAy3fyevNDFzQgLVuVETFY18FSEg",
  "key29": "2CeS78bJp7eEVrrL7uTeKBNnFed2m1EtGTbfGm2bhPfGHm3DXviBQMwKS1F3TeLoikcPr97mNLDZzxakM6Lv3Jmt",
  "key30": "5zo8ZtTcpxx3nwSSJodPuSQWW4fWVTD3SCQdKdu8uYkK93N46syQ8ov9m7v3V4jnMDA4xEKe9vohHBEEH6MQAajL",
  "key31": "SzQaDkoQwC9T6oAQZFQZa8CBQAntrdxcFtR8TANg56pX74TenuhGSsoyw3TG2QyLPuVB558MqXkXijZ83jyhjUK",
  "key32": "5dUc9un6wBKUPQEWrUGfw6nXqym6Tr5GDQtw11xFMuwjUWdxQc7EDiwS597rt7MN4rH1o6DKCWXHJc3LGHEZ6G9M",
  "key33": "664AT4HzwLYPZA4xK8cknogahoBQvwwcKEHXF7FXCrHq1TspBAuhHTj1xdqfVf5k8LFmH77KTDQBB68PfFNeosxz",
  "key34": "4CqFrwtANaJW2saQp8sdSWuw7fJ2qfnA3zXcMw3vzBnGLeyDCPs7Uj5QijkJqoDmiAnMbHC1UMk2qpYD1JuESB2m",
  "key35": "5ZHx3fd5MzsyGG3zugkffxQn7VaKN7tfUomC1kPUKiaB6tQLzxddA9H9HmNCJf7JY9CuB6cGnHUmVVKLhQWqkz73",
  "key36": "2q6FcpMqWoSB7GJK3FU15qVxDD8QSYMN6ZfTriHGZ7xTqsRdALuf89Kb9it6wDAuL2KDTiFJTdTPght72WuMMwmg",
  "key37": "57WzfHcSWqpTwH2N8Qm2XHWUH2oLDBVdrmqPJnm6n8df7BDGLMfnVKcKgcZa1K5aJoATGbpBeUC5cHmMTVP7CM4V",
  "key38": "2xVEh7G2nRsqHzDQwrairw2Hjy8crcPqNcRjciW8WQwBjH5vagL9oUXpnfdKruuXkgmGmEFSu1zHSSbWhCPpEFjZ",
  "key39": "vdWmJMvkpnm4MXAHCkD7YpUQESYHLjcXp2cvQJoa8Y2sNhp9zcXGtvBY4vS1bcs3CED3k3p6kadWmmaVFkniBgx",
  "key40": "5iKSApJxcqotuZkgyL9hQnGCZf4dBaEqSW6qBHg1uHfgurTQWDxpuTiVzVNnSAhuu3pJBRyfXWEz9VKhpkNmYMX9",
  "key41": "2T4shviiu1tKN38JqpkdAL7FwRzgi6hhoK2ojAdgQJM8mNsXM1pv5UUciyJyY5a2EXAP6VM4PtDUU6HH6V1kUmkd",
  "key42": "37oPQk25on8dxPWdNrGvAYH2CCTkhuCNfukvjuzmrWCwmTjpcjHrynBxSwpLhiLzWCHkRY6pNPu5tv6uUdPLA4g8",
  "key43": "39mVk9xutSnEoh3eA7q27tE7j9R3XsgocQBcLfuFjYd3r7kd2U2ckMooyXh6xJhAHuBgr7YyVmo9rVKdeVvxXGuh",
  "key44": "3wV6JfGqWzo2FsH1kVJsSes3CUdAPvQr7zQh9bkTBdALB7UmnPuaZr5hsc55QQnEiB4e24dY5V1BHEtSqgmAGxS4"
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
