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
    "3cCqGAYXKvThRsJsU7goTZxRhjy88oyXhKNqDVQB6QxkyEiAwLrdirEzndiP5VYNAgAiJL83UzgVoap7cWrivkNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mrmSUEFS8aN3eBvDxDZA2wfCjVwgW2muGpoxcSWuomBrhfhyNh9cd7jQGKSsqY9zvTfcahxRoUk1Hret91jSfZm",
  "key1": "5DZZa4XWnnjL5HUQFXC8xxcSGL4YYuWZkYL6vL1JtL3ncGSZQi3xYuULvPEYeC4szimpSXM1Qo6ineCFDKTEPXGB",
  "key2": "4wGkY1UUgyNqQzDYgKUn8waKGE6gs2x2kmKkm42iaZvh9PfagXmGpMKjDYnSSRL5uGZcumiXGqihdH3GZtQZEYV6",
  "key3": "3g1TF3A1rnTQp7VtuYGYvAYLg8o3yqEy7kLsLKq9SHPvKEdNzrW7YQUF88XyNWHRQZPFCdpBM8fY1Xy7mvS23Bm2",
  "key4": "2qJeLG9N5Ai3v8uE3ywTHnkNorVK9DsxaaLptUCcms8Qk7GVLdMHssL56kXcgr9TZbzTJDDr8FtpNMgYrky19Zmd",
  "key5": "5wK6wVzkTcWdEALo1YhdAP21LMuDmoCMdxdY7ZAg3KUTKUJVK6GRFmmao5KMti4WE2BN3cd1YxrSZNZaSttfrS3E",
  "key6": "3vMGmZZimS6kW5NTubdK2uE8LQGGT5y33oe5Q9ghEEwZcEem1VDBvG3qRA5r8VwjHQTG9rc2yy18jwHSE9nv1gi2",
  "key7": "3CB2EKqXpuQMuKhwmniQHf6NhmdyXHZy8dbfZffEToNv4CwNsG6WxmDRM3VqyL2BsqLSNaq2U9LHJWKkmcnyqx75",
  "key8": "4LLkYeojJGsPKudXedPEksCt9WVVwqXnVHC8YiUqRSqTjwF3Fjiiz8bxBNwam47Bhm4qQ13jksA8dcHSMbGy8EUj",
  "key9": "4QPvjnefaudneJgZEixqvV9swKroupCfxiBHKJEGJsfzpVEsTsTU92igdb3BoZs1Rh2KXRkKJxJUC1Geqg1JTgR5",
  "key10": "2xLUChLtXzsFkMLPNU913v1ewWV41Hma7ytbq3vwzCdYrY6iqtDu3CJbLUk51MTUcnXqTb51nSSdJmLFcXedoUde",
  "key11": "2cexE1aUDLAzzswaRsGw6PAiF2zVG8RBcyg3gb9UzDDD8eYWJMgGTNgcv5SnoPs2y14E1UukW3FMnmC2fEGqQwrW",
  "key12": "2N2mFRhWdktiv92vYqNGCio3JCvDkFyb1Fxkou7pK5j7X25dqfaUZ4HNRo2pvhqMA9iiLAyRUEq1QiMz7r3aWkir",
  "key13": "5p6k6UDL7eoQTZEPSmdrVhuKvBQqpckAszRRb4BP9eNZYtvPqxhMo4QjyzPd6aTEGqKx6eBYLf9UwoDTyfJGiGhQ",
  "key14": "25cmrdgMU2twQZXpfE1fWHQ62RWa13gNSmHYSXwXtv3FANAFkGijr2rKzSFLSg2uDQKLKAuDDcNPshAh3ToDztpe",
  "key15": "4zvK52o3iD5xGmuJVJsE1RNUM6PjdhC2AGbtJk8d1fBz2yXfKHikHU8hViyadBuSQcxmvtKx8AVT4Yc2TyaaHsiC",
  "key16": "2Pk5MxUqP822Yxmj6rDHiyQm494hsyxMGZgzdR8VBNubzfh2ugbrC8Wrt1ordFRUKm6a3jBka67xG9v6GAE6ZRTw",
  "key17": "QWMm4erhbRXvt5STeSfJ7Fa8EnPxAiWDXRQoPM2tt9Gsd5YnzHiJMTEFzdV3MQMteJJt8dgWGwev7gUWPQGN8C7",
  "key18": "2YmDpYdFZyqX7JYAkoQAGH9ZCcY15neCpgzv7s7uqMP1PdKevV2frj38Jrd8H76Smc8XE9tRycy4btYGEnoEf9jS",
  "key19": "2dp7ZnsupbTK3bXgwXC6MWy6KQDjkQEuZK4593uDtExuzniifzdi72aUYmYAan6scH3Ttwi1QX9T3yGzYPMUihce",
  "key20": "4QctXEND9SQGVimYHTA8EzFL9oDaoj3kb5hPi9Fnry9sQGVn2R9DdCoUAQR5tKQeLvsS7mJ1ocyhd5oufsND5FuW",
  "key21": "3ecmp7VyBysAaSg1FAXCpwvthwyjgjmM8jWkyUveoRFDnA59gfjryhnBTv94BWvts5FVWPoqBUWE7fHogQwr3UvG",
  "key22": "5y3bQfGxzKTJFUVTxfFkWtwoJBTwRxYw3VN71gFqxZDFcaAMXu4cu2MX8b8D5RREqjR8i31GUMRhitNWAnuzqPbL",
  "key23": "4tJbcirzeTVYz7dDzLNsdcC5YK5yJtEba4d1E4doYoCXLGDYKLZKt8kGT786Xy7DGATX45XQQMYwcFYjt59BaHbs",
  "key24": "3we7o9wDsoVbCzFkaXuqw2GFBJqjfYMdPdS2hRhWqYTQbxSg15ZhB4YLgwGRr7Sz4xGx9TcPTWVHwxjwbH9a4TCL",
  "key25": "4ssQb5sZsQJ12AWhi2LzrQiUZvteSiNhhyg7PYAqUhT3LA6oq84ZRhMCHbmgXznvVgNrVFDLRDqtdz3vF2aiDrxm",
  "key26": "4xBQmwoX9Uo3PLdi3PvBdmx9M2QNHPvSqLzQ6jSyiynwXdNwR8T8Af9fz2qaBn3H8758w2HUaB8YwiYaBxWZLXRt"
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
