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
    "5Sq1cBhZ13xdpie5GD8NZDZxZW1mKiXhkYDKvvCGGexapKByfGpkR89rUQ3zp1N9GWZ4AUix6auAqtRddm2DJ9Bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R1SayXF7nMbWvqkEGHP3dyTrzNJt1RaAErEYmNMR3oy6GYU2E9qtpsZ5fFj45tnLsgquFVZ6YQ2VRqooownFaLs",
  "key1": "5DSE1M7km2mLW6wF4nH978y7dq7XExmZMFVeKdCxGJNgt8joj3yqv1fSgUmfGPD7pzxHpvjKq9GSzxbzggjS6gjQ",
  "key2": "2Vo79Udb3sbMSq545abnVLwiM5TVAhm9aL95Z92jQ7JzPUCrxVwB69nM2MA4PTdqazULqvheCxbZ9jmttvtkdutW",
  "key3": "3hqUk7D9zKpWwpuwLFgnq26Qf3YL6QXkDSSqHuFBpUbF7SzAZaGkHeePz9TfZzYKzsjUzmGfbjLkyZPyTG9VqQDb",
  "key4": "3VCegyX1K25yYZgEvuriGCJxs9r4uiZaHoi7Ep7p8ktLak6n43oz5We8dCK8gSLUN3tjRbnMwtYUw3WGpTbUd4MR",
  "key5": "Xf1vme6UFaLe3MbNrAGP8RcWuFtL1oCgVfcfjGSQHh2mW74RXAedLmpKKcGvyo25KLruxQMXZrbK6CK5yx1hLrz",
  "key6": "4Tom4c5Msm13H8wZmoX4jt9UDViYrCbYjwhhoRGEUsCfu4t8BmUzQ8U285iPnVhNUBWSdMXJ93kEuPFqN2V5n2Zm",
  "key7": "5PUzj8n6WXYpraj7wcRn66vcVDUxj8QyYDrVUMTSWK8QftT89GK7JAG6VvVY2UpSGbaCMb7vZJwH4suhQEuQV5Lu",
  "key8": "kHwqMMQJFNm1pofmBqmgf8bta36mjKuKt98Df9nu89386riVuUXyRzXg3zWYi3vWLhv1uje5e7jJxowabNVqXgD",
  "key9": "564VHpXjsF8oYzNRricqQW2FyFkMLRg3armB5RQGHCSkWQ8GsXRrdAWuoRyYEPCjXV3BoX3aBQZWXoMKxjdHwW3B",
  "key10": "344BSfKKU1waNVJECu1gSMd9Zu48NPFUTspPjU9YwZNuCNQcJzLXFCnwRawFUCkVm4TqKB5KspWmdcpGVxK4qRbC",
  "key11": "2rN5aEvKxZvbqwPzvRmx6tMRxHMBLn6ck6nhkzYU1E7AWz3T6rspdxYLLkEFCapu3GJWdbKX87BQPVABAKxqsReJ",
  "key12": "5Z2Q7VjkyiVVHrXXHn6cBomVpmireCLTLAhRFhujUHNXE6xWzAWG9NAKHmyqhbzbSyY2XrmDH6GRHzPwbkqHqCvm",
  "key13": "5pGCcJkWVVL3z1Mb5vy4XCVwHJtEL4VESFmiqGAfy3jArGE3N42jFLXBQM853XAYFDoVqchR84zQTyP1P813h7mb",
  "key14": "2qNZxhA69LcJCk6zWSTUZbquLCpepQYZZnaKbuMFfCA4VZtTLxDsNpmEZsbpZ3p5hxm2BWeKrpZBjE1jGphPJry6",
  "key15": "29rfR3A4vR4WRq2g62gwjLtEHSibBYDY7jXBC3PjwbZBFD76mujD4b5dwNq6hJBdmTfRpvaYGRLEmzq1YX9s5ubT",
  "key16": "2DzR3fTZdQdkPPFMz8tDEZ4RG3DHxT8Ekw1cwckBKvevsTu4eCL9ReAckSJG2HfJz3nqAAR5aG6MzDfviek6Qkf4",
  "key17": "5KnPpBjZYhF84asVmF6sKJF9UpwhRnH7RibaFQHVbXhmgS1UW3je9bUPa1suFZXk9HEAogwmy5hnsWz3VcsKPVJ4",
  "key18": "3eWu9AFgbhVA8dho1E55C513uBctYjdKNtVoXwp62cVkCGYeg1Cqr3UNuWvJnRQRwuoUtKUfdggMUdycRvfcfdL2",
  "key19": "2fTAi1PqA3F1FNtVFFbyNvk8zKYovc5HC24mNkFBAcpSipLfYiLSwD5FshjkBKZG5USbRgXe845JqXriv2tPaY8J",
  "key20": "4S3DwqWYkC6ZRy3RE8JNLMMrhegdyD5AmhNPws1Fd2iTSCEXCKqcQDZUCh6wmRaPyLCueipvZFgzAwPFHaDrHxnT",
  "key21": "aGLgKEePn6xANgA9JDaqiWWVv279SNH3UE6fzB4ryHrnSehiCAQqPVc8nzhYxqmnvvuNasFGLAxJHCx7Hzn3mEM",
  "key22": "2gsMjfXnWb7b7dxV6yxP8GDN8bCFxUvNVub63VWX226pxMjjcs7QQYkBHoXoLbcjkHeS1hjesv8zUEfkD6Jys6Rm",
  "key23": "2bDLnmMvA4Mtd7VDd7RoehHzWPDMwf8DATDWJe9VNzjRjNGNy7vTMPjgkRLHQbStpQ6hnZyLnvRTYYHminxYh3N",
  "key24": "5cEhgSqitv7248ZxRnB1PbWaetkt2A5fr3QYtgNq9dN86w5FtVQQCFH7KUrc6u5av4qjgc1ZXM1UUQdvo9MR6PU",
  "key25": "ko9M1X4d8iY7SZjDgJ1oMPrZERtd3nxF3ZYMcqk81YWvDdkwaJYcuiW61j1R89VbVQYV1ct8pad85nQpi63KaPM",
  "key26": "4LtU75ovJHf4JChWYTN3RjWAa1mDtqEUf4rwNhJQcJ87FJMbCgE8p2qvYWHgkFWMJsX7rcrdpZnsKdJPN2VGByQn"
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
