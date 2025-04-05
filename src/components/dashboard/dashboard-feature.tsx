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
    "2HohRCQLdu1KerEWDHkVpJssKxasTf7fyLReKdQNcgensoaLjre4uGGxfa46QAnZ6yLankabEq31dhiNP3r7yP5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yP24kTzFoTP1ULwumTUQ1pzUJJgf4e2uYhcDas2PnvWerSEHdtnzrUfyxC3seJfUenQp9RiKDSBJv45o3gpsJq6",
  "key1": "5RQccm7B8gBnSGsM6GhLMhWwp9V2XuHi1hYXpCc2CuxfoTdis8Njw9529uMVi9dWoG45HbYdBvTtNqzJRWL3vnih",
  "key2": "4kUFqkyLNAPT8HqKRkHYFuyxPRXvqBabUDBA4ePT1xkQLatXSuKUj9uyrbNupGQZ1bPvBvZLpUHSUGQJF5EHfc8A",
  "key3": "35X1BdYcSfuPRXkuqzc6jsdfdDordT5hQfVjvq626Who26K7pS9qEyZL3FF6q9SayoUTLkqZSLntgF611MkE7QLm",
  "key4": "553kWo84GLH85Vju5vXsTvznE8Jd71xZqp2FLxjR3G4PSH1F9vFmxGU9xX2mJjSPTqDj3S3DvkoiFWxRwm7XuPbb",
  "key5": "2D8BSCQs9fBd2dTsFkSnZDau7LbYkfcbPm6mZYTM4iyKNnFuWE6o8oc6BbjKiaLK3kyhbXW89JBCnWmqTWSbmyDy",
  "key6": "2em8DrBzaKt4nfPmPR2xp5rhpRuEhHWrhiNYXgbGisuSYpms9iNqvShfwaLSzGCrPH8vYBen7nyhxPRfAS2nHNrk",
  "key7": "2KPRSkQDZmcoLDnwK5wa9FwbRvvxoJmPfSsjwgSo9P81AkvdGbXkuqx68hCkw6Btaea1JqrN8eb2vcZ42BjSnyUB",
  "key8": "hgkC8SgUyCQDh8kh8uU7XWMDt7zunUG6WwqVqEGBMitKsfBmwfYt8CZ9241neBTa1RSuAbgE8XBufi6XAdVJ2LG",
  "key9": "4dbBiiy3VpWungWqjT1N5UL8xTW3e1WTTKVuDc9vX8S2R5c5cqSjiXP4vE33eQyrLAN97hEm8xvryDbF9WJSN7dE",
  "key10": "PY3PLp4vpiL24d5bdQrT5vzC7G8NSN6ZpCLgbf7MEUUQ7d1kNBBkuaVSA4Xkzkz99FKFevSvLG4AXPyDXcD82Rd",
  "key11": "dnrivPxs7fBrdcjwUZo8uR5o2P8FMdoTcL9sFDbCVyBz7eK8MyYajdoN7ReEC2RaxcqfecEKmqbSNgZCYbBCRiy",
  "key12": "5wpv7XQ9j6CuHSJgVhhp3PyuD5mK63eGysWysZbhrwDdg12piDcvSovCTLgzWTo5TjFxw7DvWwDnHuEgzw7Szh6L",
  "key13": "47HP77L8DUnXXF1GoB2BuZ68WExMXS8zbq9CurbDZjZLubQUBSURqviJwdEiPm3LcDUhtozQuZbVVjxzLwyjVPRP",
  "key14": "2vBnPkxVGDCcRsAMyfyQAC7zXP7UJgkMW52tHwipcGmukjrJns6i3cpCLCGymR4yHVoVtB4DiXSfzj4ecBfuVdbW",
  "key15": "2qWkpVhyKENzZWEXL8QAJM45Lj2JavtagnAMtRHX2c9u9N9BnStN1WXFbvn3LPCMSZE6taqrPx9A34SGnyN1mSKP",
  "key16": "3X7aYwMNpYvTQW2W6QscTaSor7zM7toX9X6vLzx1VPs1uauHaQ5t4VrtxaUXJEJuLnaZcFLpdooPgH9uVayyhsWr",
  "key17": "5WT1qX2ZMsxgH6s4fQa7iCfMRrLKBFhoGmg8m1TM892nmfSbJK1HYsFz2nPrsxKodZ7Zhv6kqEm8d44aYwnSsHWW",
  "key18": "3cuWJNu1Rud1Wd5Z1roJjhRyfw1hijNFyfrmHbtctcwrejGN8nZMHoqDUzETabRKMA8XMqdfDS3Nk5ZyGsT85Zc",
  "key19": "72hCTibfNTc7Ry9vF4PpCgFfuqVpuYdRQiXYFmrrrvE4yAXD5SRkfvHamQzyihobHCMLSACjXjEgmbsZbb73rQB",
  "key20": "JmRDZnbj91n37hSkf9sHAGsmmjr3N3hD4SbXaStGroqiscTzffEKgaA7yeeZEPBa1bZLUEYXhAtyexynDHR6U2Y",
  "key21": "4HMfQGzK4ABBkvdGtdAGshG4VB9g6U6xemyJuR7TJCCpuYqLVqXn8YBkP3PWnGR2jcEg8J22MaTti6zZiE5de5Kh",
  "key22": "5hXLTgnFXW6oBa4yWEeavmav2xu5nq2LdP8xqDBSwWUHSUYtmfsT8YHz9MQVoHoV1aB6dmvJG61bJTPpbMayEZ9i",
  "key23": "4qead2wsimKZJJVA1kJbg9PXRdtiRy6p2cP7feduUuLJiBwcLKJ6QjA3xS7VCb9uXoJLm4sEgeSc5krt5VRjVn8d",
  "key24": "3yg6v8Gy7pnxgBBXk7amSk6Fvjd3kivf2dpEnxSE9kKNUJdHhbEw1w7A6u46ADfmV57tYZ1s24xZRk2m5jqPcRz",
  "key25": "2YzxPRHsmsCSiZRuet6dGJUZStBRocpR8D8UrBS9zUV6wYNHJCqRFr3tKKc7DdKUKWkbqAh4fejd7v9cjsnniUhR",
  "key26": "3vQg3K752Di8RepRS3yB7CoQQ5dcpCcTRSfVj9WaCEUkZvNEh9wcZkNtpat99JbPLzDW9pp5VyhLdbodKgct8wyV",
  "key27": "2KDiwSc773f212iedeA1RitTNKo7kd7VXqNNsdqpZpxDJUEZbKrgJXD49Q7pmTjQsqekZnjqG9VAh2RgA4KFeJvk",
  "key28": "4cDSrgTBEYgjvB8X1TSa3bCvCLvAnPF3ZRMKnKaMW8gQVHvSoMkzAsccoKucyGSLnfwvQK68HmAUMrWPpctpwRmg",
  "key29": "8Ch6Vyf5gFpPQgjoQaN44UbvgjRrNA9JdZsJWAKg52iXUK4UVjwdFdHCvtXtJiAGM2XGbQZqYoqxMGs64zevjMr",
  "key30": "31htL7ZoYyjxEYqCcS4DCiEQAx2hFf5ntWJGikZmgLymEAvCySNeWizSVnVr7UmxYaoYUzU4pT9Crsn5ckkQvsQS",
  "key31": "PYtuHT3EAcvTG91ABCq1vhdJZRcwE2BiLUx8Q4yuCzMAZ9LJRdtwZH5LGmRkBk68cwCWXAjGj1TEnPR5XijcQev",
  "key32": "2voVM9bhRvJsfKW4r3QrPNoi5794eiNHV8QnV1wWbADoxjq9JZjmAx9D1PCMjMmXJzesF9QQHxxWsTF6RwJ94gu5",
  "key33": "2N97hNxc8nembmn8AAHuxaqfKES8eogHTPcuDGKmxAtuEHHsgdcjRNWRJafU6Pyu99BskCkFCLqeLSy3LUSRCaNb",
  "key34": "2AGNu5neSMyp57yRi9ZSkyoiBednN1WJu4Ge84DWFJcZdEh9ZzqJTbiBwywBTsvKmeCLp4ywrJexfySEvnnkx6aX",
  "key35": "2M9CDbxkd38ypULJ1SGdsGsDUDuAHnb6xi7gb9g39vwfU55YWrbfhDGGtqvoW4ffgsCckwYNbA3D6PFYQJX5HdE",
  "key36": "46ARWQpyEEo8cHduREPAh4upZGGTXPid4qxUGniBT5UNVbSQ21gJdztuuKZaoAuUNwA7ieiNuQnQVBvKpCiX8cWu",
  "key37": "38YkcxrqCk59vqq6XfcCiY9bT4UzPCe2A9axdmVF6zEtzrWESNxr63Y9iACcuNmh5DwFZ4FbmL4MvxREPKJUV2Vy"
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
