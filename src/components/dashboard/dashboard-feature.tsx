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
    "3dCXd2uZ2CMQSAgedCWiCHLd5eMCBDN2PW28nXMkzG6NQxgMfnSfpLb5LEgY3JdDe8j4c9PmwwtGB7Qeimmzpjro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ruftusWt6w7c6fJSAARBRBKRMQHJxrbsQxxGveZUubcPeHFJUBUnunuAiSodkCdYHfkoSX1NxdJfrsf1PWD95W",
  "key1": "2SBxA3WUiSaQbqp7ZHAF4hyW6ckK82YAGKkyv6u69QvFxyfft6ZZPLwpWSMJUai53HjSZAn1QMWXzkmKbctMVcie",
  "key2": "4LprYkCQcr2duFkHQP2wRX6hejxMNYwmeHNSzdip1HtvfNyyrZJq9dA6wKK8c4vQVWgAv3VdWep9tM4gjRp5X9bQ",
  "key3": "4Uwj5jHnCToLquLUkT75d9i9bksrzKZ9XknUppkbEp94z57UE3rgx65fXsDUJ9u72mqgtMJJVP9BR7BTJh8PX7UV",
  "key4": "3LUEvEFYpt2WcQej4saCMCEt3HHedmJM2JHNtf2x546KvBZGy3vZsoT9Q1qRVyVc854PcHbefEESK3HP8gPPhEpj",
  "key5": "ANbMqeVBrrrwbt4yNM3jMtWiHPgb6tiFTKsbXNm7tsyUvD11BwZ29LY2Hq6RySq3cNAaPm8ipEAVwyFT2Fxt1Su",
  "key6": "3KDmWwvQDYxXkYVPZAYohH6ueYeeq1XDENSa9unsVV2ePsVHj9h9TTdQFK7j8eyWtHz85r7NwSEXqKMzqa6KJHUo",
  "key7": "4MiBTwuneFxHgmJMSo6iJayNxRic5eYKBHZL2mUzvg8SrJqU4Az3HMusmb745gKTwEsUyEMfEfPaEhpg6Pe227AJ",
  "key8": "3KzcRdZhHr7BEP5kaCXF2aZE6ecaAuWFxwD2hopAKDy6ZDQtfpiwFYrUhAvV38zBQW89TFFzmufEN5pqEntZo2Hi",
  "key9": "2VQx4o66nBjtCsfzDKu7LYcdSr8SYXGHKA9oBa7kWwVM5rkkNxvW4u7pCkwjNeTjsiM5tSmQrGXCG9a5QkqiYY61",
  "key10": "F2ofvcxyVUmYwSJPkvWAc52tyLfTMSubLyxUdqQ56y3hYS9iX4WqPyndZxXtCFyBiCTVMCKAxFWKPeB8mvvfy6N",
  "key11": "5EQ8ijRJ1qGkHvuptkWfYcYMY9dk5Hd1FUdm6X9pyte9CsBM5fmXt2uVLkT926qoUjGMJmQpjSfeTU3cvq7RfhMF",
  "key12": "4mSWBcvxgz24LEVumEMdDN5N2RDWMaTaJT1H9zGf3F8d74iDLzUVnADs5GWsrMhqHiKoJt9EXGq1KyyYramCgnSq",
  "key13": "46tdiMvdVNPZKBQsjHM7r7WjJTesKotMK3AYvPwSubjyMDJ7fRY8bwnCCJKSbqZSeqi83qdCEQaEqTqBpqjgLCQm",
  "key14": "5LDewSX7X9gF1ZDttn8fjbiEzEfeU4V7Ff5BCDU4HWzAiekSLwfeSDg93UGv6sfE6mwbcRmP4BqaAYY1TvfZak5P",
  "key15": "2u4dv2PgaeVEh2p6acAbtdgqNVC1vHRV7tYZBqK5CvNgV6xtDzq8jtB1VCLTAP6CnpUoz3hx7XbcKYBVGfCV9HZ7",
  "key16": "QobjA3Z5oYgf6VUuHa7wamktZQuohRbnyoMALG5wvnMpjB52VrDgi6exF36rMpfoeCPjcd9niNgnbKbe6i1GvqQ",
  "key17": "15kzZLGehzqnBzYpdteEvNqCtNQqt7VMLK3eqdiP4CjxaZf3ztm2kacyvDYqWQgf4ZXFG4E7BGwXsrNpXdaSpwL",
  "key18": "55v5iziYm66JjCq2hANNrzegJbC7r1b14HC7WZGZZqpcfy4tNKb8VnEzcacCjt42GkZEFdodziaUxucgdxxBqopN",
  "key19": "4HWjVa6XkDVRPfUMhiT9z9qDpzML5wcBVgSNcbDELzxpsfrj5FkwPf71gwqzPTZDcQ1W2NSGcQVVyxcndFYCwgzm",
  "key20": "44F3dUjbArB1R1wXWkmpHAfWAKPCFcsoS1ZuH8dgAs61pjGG5NhdnXuPUe9ak8twQiZ5Nxv3MSGAmPbwQzs4BiWC",
  "key21": "2BajLdU3z2ovwTSsvDX4VLJDnRZWP96KNssFU6Qa3eAuaYJVmzGwrXngSDESHPGyr91j4eKnwcQWN5pG5dhmhURH",
  "key22": "5Rd8RXzjEm2MvRHH32M7Jyyj54t9KL7cT6myCL4ydSKfE787KHhzqefmxQciWPJtufmDTVJiftLrdisfspj7tVYw",
  "key23": "2J15wp6p3xG2QDKi54DbhzRWKCnHvBhgtzxh4jibhqHeRsEhwVnfEFipKwRWJCds3rTDs5KaCU2dN2jKGetNgbm8",
  "key24": "66R4njH5MrynfxYLMoLz6F1NGuEVRxR5WXLBRt86jkk7cqWsEHZVSXR4bGLivA1dMVRxiuMsvtX8cwtaiDQM3WyC",
  "key25": "YjhHY6kdJyGpCM4fXfybYw9J9SRz444JspgZBxq5mPFe6Kv1u8STeHR3XFpP9Wg8UKvoVR1hjEFKcgqyCrLWA21",
  "key26": "5TWjdFWwu8W7Ah79AX9qVKKzz8kMVqBzWWxkFntzgRR6MV5EAEiAD2vmkiktrq8BbSfX9KC6PcChkvAAeV3QqKBW"
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
