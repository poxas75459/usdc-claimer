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
    "5ieYiJdudJLrdn8exjpVrPR9TwpGi35V9LALtNaQmdCmbHMhVM2FTnnPiVQfdS3K3wcKGKDSmughpkZbrw4BevL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yuPezh6dwJnhdwLajnVu5Lvbm7tU7oUy6zP19KVhk1t5MLstrsuZUf78zZdgFfDBDSUtLi6gwzH8s6G7Gih3KJp",
  "key1": "2gUkDvJwxBgiXTPxVgAECbG1Yh1d4iGBoxBEkf1K9HVH6aHC85LXFcV1UXjkfeSypR3QB6Ku2zqQxKFTepHB8rK9",
  "key2": "2gCm5TBUnT4HKBPvEmWeF1ZCsBs6AcF79k6RCmAiWdkSGMU8218k94ggjQo5T396cW8K5JcFtU5AkKCskfwxMmgz",
  "key3": "3Lgzj1hsPjT9PMnwp7vw4hecWxR46MisAZQz3dbhMzM47c9YAdyrsvh1CK6e6r15YeEKgeFzemqKkhDirbRuALvH",
  "key4": "2njn8GvQMkkgMHzsZzTwE1sLvN7LJe7HYt3MCGUch1ZoLohphDaxYyLG66bWMjpJaXqeuR7K6of6uACePGWwTEmK",
  "key5": "C6dAnX3hqo2TA2ZEXkpYFFSxp9c9qKrAwNYF6rdJdKJFTYpvdSjKxNE6Q6VU2xiaZjcvxud6qwtjzkEp18kcu8h",
  "key6": "25pXj7gXSD2Up6CuY7NzXmccP2keRzsx4HaBbQ1ZBiFHKNERNANyhoTb4UJB6YGVUPUHuEL8o8pSknZ4p7KZ8YPi",
  "key7": "2cuiGSdLfNMEEmZ8LkxbPTCrrwVGjFSn2eeQEWAzMX9dQraXp17zBBXRckPRnEoeQmfSbFJZvN1qDf3H8ZdSVngp",
  "key8": "2ikGtYuCWqT761eGLhWuS5nWJXVB3VvMYpFhqc7DqQT8u6dwuLSeAQDv8rJ46wCbkCDvdCnzNHX4xq23Y178NtpS",
  "key9": "63HsVWqhKDMfCZwYBQB3zN1RyqLNeW234yJiEB7FurMm59GGA5DUP4Nx3wLB1B4DgN6p8q552yMeQFFWk2sdMPHb",
  "key10": "3pBhkAEPjpJKeqqMsAUsVXV6BjznRHa9uB6P6NAp9r18TMaS5aHyDf1ep1onjKJ77CjBXKXVfwKiQmpbMLU3EaNf",
  "key11": "2oYAgxMVK5JgAbnwv57QpoHeAUUZT1uwDnR96rygD5KGtc2NXMKFdzmypm7Xmpt9CVShUesZ2gcGzQFBTCPvZx2L",
  "key12": "4dFt6e97dSh42qhHg7RBY4DJweCa3tvzvWntYPwxUKgMVJYEKZ4C1kCEK6b4iaK6DryScubXnj2EVTvkP4uMFXcf",
  "key13": "3xssWAczVT8NCVkPWfU8TnyDYQexb4EUfkMyowf5JyUH23vsgeQ9zFySru9NCyw58YWrSKTgLsRB1dYKDELDgrMZ",
  "key14": "4YEGy4P9V6RDyzNyLChdfBnU9aXTrGkybQvMNDNi5UpvWbVQwL8kzDHophAvR6gFG3pukxH81oXshdSvrkMVUTip",
  "key15": "4odEJiwK5xXCQ9mQkbzEP1REwJgAokCytNwSaMceZy93k4WFsukbqRPRtEHYvVEseKNMdd5SrJFrVhznkCQS7tG2",
  "key16": "3BPean7Kr25Ag38zGcj4m8h2pRQM8b4i9VjVWGvMAr3HbvdXNekise27XRPefGQbS2R1GzhU9717EWoMsYR6shnq",
  "key17": "3NpF3Di3W6KAsAsKuS2rYFg7DfQH2M8C6sUNcvQifa2e4BFH5YLz4P5fxHB99yYQQs1aC7RZgrmDHMqNxDdJb24R",
  "key18": "4xdt3QKEkPikmxx74B4UDQBvfgQZApGgQPH27wmEbVbcuQqwpNsyQSRGrrNp5okpkrCcKbh1E8w7RWyvbSjGjP7s",
  "key19": "2j584ax9FocCErSqvKFuVLbT1tvrUpNKti66gTLkpVvn6wCbxY6TYmBHq2UhViWFjuVWYf6F1Lb7KBZH7V6cn7JD",
  "key20": "5mV4GUZqa3RKJKUGa58Ri3QUJjwnBYYpiTApBEeEYfhH1JbWTugXFNjdKU18MC7738KJHkJmko77p8DVn3FgfUdW",
  "key21": "5mqNtdq4Xe68NgT1qHQ4YFbbFjMnN7ULCBG6HcnMQt1f13TiAA8Tc3pDtr9qCFRQgCAYdrjg7nmEKVBEr5vipww",
  "key22": "4Y4EjAPzb9Fpfc3N89GAQ3ZcwwctrioV9YcdgyfpEPt4h1bKZbPYxdUJSGQ8RYN9wRtanUxvJ8c79bxXj9DG8yiA",
  "key23": "3njDX7ecMfkSgkg6yPjotciqrmHJ2Z7PT7DkMUvSsXiEzwVXKxfsaXkYEhk6VrRvoyZX1HLS1H3BA24wf5uN889S",
  "key24": "3FPKAW7dEJkbDXXdCdCDUPwB2jrPNMpD3YPzBfi8EiPLMZRst18owLzmHB3W3Cdi48gQxCAw25Psvk5XZyyLGDww",
  "key25": "3AW9HjdzKqMs6Uyw5yNU94GL8WMYDtJiLre5DXdt97n32tTGYXYuJDsa1L3VsxxaQfdHQqmsyPb7CjdNdwVM9ePN",
  "key26": "2jG8DQftypTMQAHwx4twFyYrcS86TzcrdmE78EGBYoBayNWMeQiEn1Vbaq2vzstmyYLgqaK1tJHqxqR8Rm4YVVcv"
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
