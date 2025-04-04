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
    "sNAKHwLhZ32BoQqXZCkPcZ4N7CmVt9NV9sW2tUfAhuHuz6D3jd4MjPJg4ayyfYjLFmQPHexKNwv7vTEKhpcsKvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4abH8gFwdgavFd89vx9ggRGWDcpDDZebGwUoxKpmWaqC7Mdy79NBZrQzjfj6Tytzwat3Q7xMGTpoMqRVxtUYy5mL",
  "key1": "YUkwu4g8NVPwNeTnnWF8NBPq7gVNBT98fgQcjZnbTNacHH5MbVE5hJYCJZU7wecKWSjsNqoxnWARc5sPYH5F8qn",
  "key2": "4KszzbmsVJYBGAwmWi8xS4DXbTu2d3L3RbFKVyeUyn1dbRSQQn1M8qfmZqLASTN7CsJqvycGBmtSvaHXFYdfmd5C",
  "key3": "35jmDPyL6bYxi31qzSqreqVL9CGTJeXazq9ZJ3hVJnRBSREJWLeXXmjpgYKTcs89LaMf7ndfCZiWGTGZrWwGrEFY",
  "key4": "3pjAEKLCy6Xh39onXvzrpCTjnoLbYaa5uuozgyfnYhkgW89hdg9TAMzUGsPJiTuXbC5YWyt5CzESK5iXZ8Av7Vhz",
  "key5": "5GeSjq3BMnn9zjNVcRKi9Jf7ZqUpPTX8NzNXCtWfGSsEVGRBVaPjRWPEjysU4p4vr74oTHJmt1tDsgdiw1o9KdmR",
  "key6": "2SRN79WbegtVuFTgHGpJdmVmvSnrMnoB1h8KpNF6b327owVGs4ax8CKrWe8qwmcgBNMtqXfMNKLVuwCPCu3ipWJw",
  "key7": "3VXvwUSnAb63NN6nZqYe51qcHvqirRypeLSZ7eBNyYggqgN4vgTNhFshMZtYNvQNJQtoYXrC8yu3nX5HADXsS9Sh",
  "key8": "gRwi7o1sduZ9pUFBNXCYPrfEnySVMm7XYyNeKLtqFSy4bh9rLvYCyxdKri25YgBcPhvUtV8Qxsdy5hhf9G4opUg",
  "key9": "UWrkbAAQZQzCBK57ZYEAMrEjvMb1pA4urtPwqz8FTkpMzp449hJBmJa6CtytdjGjFR4jhsfae6j8erkNWvhvAvb",
  "key10": "75VdAJzignR2L1d56kvBaaAmH1KfZ6JcKTYREgCDMBCUtMsctMuxNs8wwm9f713cQLEV5upy2xCKpFvBudcmDxx",
  "key11": "4r5UmKMrEshwSFc5QnqUAvySiger4jD8wBLZZGi14h6EaB5j8suNYhscasXAdmkUmXQU2pY4T2Lei3kH2nnePWR5",
  "key12": "2ouzs716ZMTT5jv53uDU3x94QttJpxQnNYqavp1fQNwy4TW4iiq4RGxsq5MbtVe4j2i6yP1NSU3WhTyKyMrSmTzR",
  "key13": "58x8Ej3HNiHxexcWEBSrniKymkxpKnKi5zdgyX1b7KLpgKrUneFK5TJU1k2h2RgH1kvZmr1H1wW13VD3JWCKXHzG",
  "key14": "j9hb7Y6XQHcsQPqeeqYwPE44x5fxAXHQ7gnFePdAhKu1AqUmCdtQTx81a8TJGsLiJLAH3cqV8bmyeXzG1VaRj7g",
  "key15": "4X8W8tvFvS73K1cgg4MGsPfQGYQdmip4dYA6CmeH4nndgZRXwJnLTmSktm6zuVpoDAvPkXAC2joUkwUES8jCnMsT",
  "key16": "geoGACLyP8G6AQiu5D6fnDY5NMMwfB9m2n2yP7MjUdUAwMbXvF8NQe59bfp88ih9AeFyDnk2QroP7GKnMNey5fB",
  "key17": "434XDGLKxatDMAyRBnwXyW23RFHK4Rwr7HS52r2hsJKWTsKqVJPyQg7ctbDa5bspby3KdFvhHqWEq1VqD1XUfmcd",
  "key18": "2qV19bPLQY1qKCY9TXcb3yc4uFm53bzRj9UzygLAZ3QQzeW6njaqEEBAKkPkCtEB5CCjUY8BnaPyRMrrzd1br2bo",
  "key19": "K5gBVnc1iD4xmZy8C19Deojr2KeCWHcuzRSk3yfhy2rYLwwLmimDX7kRCRsYSprqLPDuY1bjYSZkiCjuCLwEREj",
  "key20": "5oKHzE4kMaCCokHFfGkfSAB6Ca83HYvQZHP8RCFc31WWG48QmfWUeth42mZ5daZQN7uCM126Ti9STXsQB1Ji9zwo",
  "key21": "4Q4keE1E37PDj9mPNFgULzpNN3qVKfr4zXgPgiC55BhXeGut4AmKfrQLFgZrSmJZWjriAMjpTB8tq8kNwxdB8ASA",
  "key22": "4bpXw6te2CXrmEek8hBFKSaNaXKiyA94tdiu8fKrtZNb9ay3gZBWBxyyP5dEBANtepNGdHiYS6PzsvScJMDEEwB1",
  "key23": "4jhgeqTwK1RpcLPyZ1CP12FyULQUn9jFWBZSu424jTf3V8i1Mjgwf8n1qrjqyLZovtVdo7HmDwiKhKazdo6qjthK",
  "key24": "4cFW48NTEVyZsn1gSE3WwGWqYbK1iG7ZCqaParo5Y5oY7o5o8byTDddHwkpRYAfnRqhRZtjpSXif7uqEqpiQDVzQ",
  "key25": "4Tah8QcV1WV1MYcvXwN5FhdvYpq5Ry7Hhkw2ayDP1PWLVrf5ChLWxbeC6ugczwmu8b45nh6BPmB21CoTLnmqpXj1",
  "key26": "3iXX1uqs2bQVyqF5w1ciEAngXfiuqCzM9VhFbGmnaP1pzAQtDKrumYTAKswifUB9MTCFkNEzCAm4fhxS7HDGHMrM",
  "key27": "1pcTe6DMHRK2cQLy4aB3QnC6bYbCoyEPCRuvdPNx8tXSy3e3v1pNnYen6pTvrprVZBLE9ybmB7AgGyt8xxjVTMi",
  "key28": "5JBqotJHCVa2eAzHPC4nvY2hgigU82YnzABewRizzbkEU6499ymTn1hxngic6XCb8UsLER9PvauKuXYVLtdsSjKd"
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
