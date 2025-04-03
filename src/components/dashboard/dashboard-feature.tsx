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
    "4bDtWn9rsqPfH8C3ZHZPX9DNWk1y6TrboPxLG6NZD7xzjmNuQ1BpZZQokDRVei1siR9jPSo96njiHCgyzZqkQ5jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bHFXZZvXvwCNMkYFpat4EzCLq5r7YJzgoEuEKJMhUS7ZMr5TAY41UVtKokXmbNwaDkDihFraYEU7Z3G9EguP2wH",
  "key1": "2FWokBhWcGfpk4Uhyu9i3sVQtN2RLsBWvnLXr6YWAvYeesk8T1VY8Ek4QFgrDcANaRnnPk32XJcXcuwV7tj4fP27",
  "key2": "UefQSDzUgwRUkaYZvaV7wT4dMr5AbSkQhBSo3q2bkxtHmkCbXKy2QqKcWqTvF8tJSKr6nViS8DZpU8fbYBKDS3W",
  "key3": "28g5C9xv4e1oXmt4yKMfvrZMwQvXDzaw7rLT7xq4JnmyWY1niBQ464am6uxtBeQEm6hiHM1eYYSE8jXSnn7Q7VAB",
  "key4": "qGDwEcLuhbfM8j5dp6SuwVvQ8RLLWWvfrzh61rdp7t8UaJeJVJWCx1aDd5cmi98xVKySa2wv7iHCgm3ubzKmHSq",
  "key5": "5kouJKAaWhaks2fT3qDNDT1N8YkSjvbFoZStLWAaSPmsxKgFV7ZDgXvcMskMpaeL5C2ipYPPApCGTcUtX1z5edXa",
  "key6": "2epFRnfMi6NHJmj7nUPC1WkT9CLcZpYVjwUf2L11FM7GtKs4ty6godmg4aEsYFkRcAN8QnsV8faDsmQUKocsD39E",
  "key7": "7PLh2sMyhT8B1CrpfVXm1q5MksnTEiJiUqxgnEKCy54zJhww9vC8BencnhrLb52AefVbBCzZwNjv8bf9iuYopRM",
  "key8": "2G83za3xKrFmvQN9Y2vDsWAkXBjgTSQgJZwgZYBH5AiMsdbTirZiJVmqdMt4W3Nd7XwJrddYebzqVQNLQVNq7ky4",
  "key9": "4ZGmYs52XcrpmF6JJQtt3fpxyVK8QR4Jn3TMEGk7EtnqJEk9jg4f4aqsjGE1S4wbrcL1pyosF63ZUaAo8yQG3FtV",
  "key10": "VcD5wJD75KUGTxgscmdkjBEbfLVQSNvPyeMeqQQadVP7yPURjmxYsotRb2wYNNvUBGYPdieFA3eF2tTKRF5tna4",
  "key11": "2Kz8qsvDBRGo3yQ2WTnDAnRS1kiChFHNvu4bKHrRaxCnujzqzCSLKyxF6eyn9sV7JNzz5R1zVc36TNMpjupUJWLh",
  "key12": "J25dGGh469J9JXdKAFE2z64LeowYFWaTWqYP7vVLywayUvWDWBe2zxWdQzxdTp43Gr2cZe2tqUzrqHxiVtrTJ4U",
  "key13": "4t7rB4d2W7TtnoDrf9mRnCWNKgApNsPqU83pTqg3ajG9dX4ThoEibbZN5wYsruCCobceDAJ4g4pAxSTQaeUJFsb6",
  "key14": "3Q3WPpUrjWgb8v2jPouq9U9seXeR8xUqoXqTwMnebTSEGs3s6nrUYGbY5uvqk5xCJNWRBfA3h6FjroHkLTCyJnX8",
  "key15": "3DzvvBKgKu4p8L4b5XZDWRFEHGxJC4zhHqqmE3Y8zshADKgWUiVgGgeUurSPrKmEjuMR3A79M6ppt7q9xyMjySKW",
  "key16": "2pULgzDJjHF4airJj9tAQVDUM6K9S2UQt2UBYBeVRVWbJrxAcE7vAhGDJk5xMKE2ivSfL8FQN2ur2hQmCxtuW7dC",
  "key17": "3xC7vjByU5tSaiW4dwZ5mGL4pPSnG47Wz4MuQGjego93c2NARJpaJxSk99m3T7HcMHdnHL2yEYAvcpHKS7QvgMkt",
  "key18": "4iD99r6j9ho8FQGWJj9h3ETfapRoETKc2v9KZShy7nKr5t3J4Uzeh1HfvcBNZuYr5947vnfhZYxPcDf6yqmCqY1e",
  "key19": "2BoskdM3M5dMMwespgX2XXFg6GQYwj85eGZmpevWZztcuytJvktWMSME7jzb99LJAUFoffwSTCAutLc1TeaigkHq",
  "key20": "5taNXwsGTt5atSTjcLJ6sZVs5UFStnXhZ8nkda5C5eHTmpxZmjHTatQkUaaVDT8hhPFNgB74B9dB2ZKKUoQS2FZS",
  "key21": "4nnuedSmGwQyt1aTxdBAZX2Hsn62xQJWyXVyvo4CccUKZtrLNoDSjU1YKTyRzC3AvtQSocAGvTJc3WwWEGg7LBzJ",
  "key22": "5RbN83kH7ebktRfYkKXZWGjDasMuDwiwZPcHAwYCis5pHzquoNuzuvq9YcvcsRNKBnzurmegnLEz4SMpuRza1Zxa",
  "key23": "3c2Vs1ruq6NhwvB36kgwd4Ys1P5cyUG8AgVBgtmt4dYcps3VFok5VqsdfmxDF7MWbEdcqKf6bxrQ1XiwJKmeSNRr",
  "key24": "3w7aQLELUTaDBqfSzU5QajMYkywNZwQSbVYSxdBUGrmadDgAD3BsH2RahZaPW1x5C2fzYGPjswD9ytBr3MoYCG35",
  "key25": "43ScZciHmaVTgP61hdbJ6XZT7ahbNCvaauuL7ktFfZZmaGtR7WmvfWS5FBuVkqCmUhLpmtKBjoeqFa3DuaEM1kAB",
  "key26": "5ANTUPCZxcs75J4NBKeCBKLzFeZLsccf5MEFG1eobfuZfLdXnJfaEPufWWMha2LWAKhxCuJ3hNesLiLrh3CGvNN",
  "key27": "2RD6kSRYfahc91CmsWQTAq6vn2qNVBFiHt4MgsHY9PSi7hre5yadxQrN5wssSeAZiFuKxyHLW7vsywdJCyqH94bf",
  "key28": "3Z7SFZNt7bxeXhKrK3pUYDFsSKApgoiAucvp42dUtZermYkWrJ4LwKP7uxTtJ6zDXnBwg9PeUipuSManz61n9fZX"
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
