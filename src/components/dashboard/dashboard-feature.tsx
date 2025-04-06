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
    "4wg6QmHWzWpc6TwDEaK6DuZoPbJBNHfMekpw1iTtyuswRNrAy61arF5naSvYjrVVy6mT4UPaVRbz2f9xWpvMFAbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rSNbd6ZxmHXeKesxm7M4rSZ1JfE3GzoKxx4ZxuMnpzfLDd9CxYgEatXZahm23Ew7grtcuhnaMYCCoFUGn5c2R6E",
  "key1": "UtTy1aM82hB2pmNcE1rhGi8zSrHy3bHzfh5uFtWVCdxF7uR3Y7EWkgaxXUfGtQBCJrPW8YvXfeN5qJohS7vbH8j",
  "key2": "22dvzjnobMhFmBcG9Rq2mDaouYosqy22rQCeNTWyYvmXT3uzXKMBAwVoAzHRow5zyMFM1AS9ViWQcafwehA3XeMf",
  "key3": "5RDJUW4Z94nrciUjYuRtnXm2cgqEzQqs8k5pGtyhd5ebnxodAVBdZQDb4QxRpn9cVjyo9GiK2MaDFPqssEzo4zzN",
  "key4": "5XqEE5tGCLFNUf5G7sD9jzsGU6GmBj9ZL9cBdDmDd2NwyJFUgb9VobvZ9iavGWET2QzT2ExAABBTsm2JBqoKEm6j",
  "key5": "kbDDvDXgqpg3w2RWUXmz3V3jD48wjPdo75JNDCnr7fN1ALzSbQSnuXjAkbBAvNSPab5yR9jGeZeWG1VEqmAcBDh",
  "key6": "2HLQbrTAnnsdT6jrqCWoHd7e5Ym4v4ErZFkqdA9h6Ciu8MyRJje19hbG7nUsybMZccfSatyUi8HnLQBqxRyLX3kt",
  "key7": "KepcW6rN5N3jMEcpeMYP8CzSQzPA56Vu7TFPWWEG4tz2fRQchEC5AiLs9wtoYXvXX689NZG9bBoigjp1vbXCuAG",
  "key8": "mXFqUbdFzpuQJvZ6QBcBnTV7tD6cH61PLrVBCwBhLBD5oqtwcPoR6U1B7GgYP4sPxh8Wx5f2RgdFhvsv8uwHRJD",
  "key9": "XFHkSVFsttwywRSC5oLrL2aas58Diwt6oF4cN92Y8wvfzChXRrwZbAVDbKd43K9WB4fCR1iC9PWzuFPReUWTBph",
  "key10": "2cvAVTEmS7XjnSpz7qDpc8xaDg2wQyHcuN42Fj8S4LfENUgPd9tfjFZSCpBwNFPkAbiDkRVU8iwZdQm9oknzszhb",
  "key11": "2ZB2XbrDtpWUXcW7ZXiCMf2bVwyVBAPkDT2CzRDRPDuDPHEqqdPTJ57iSb8UGbavwx55os6PGrSzGquhWdeH1B8S",
  "key12": "VR7ZbXEn69vXe7ctEtZCu3NwwZYTENfPS6iihttcPxWB3hS33gVVMjeCFMgDuJBJVaJ7uv22tdRbxSTAbPzCrXV",
  "key13": "2XgCFPBFCFaw1gJvtWKhwPAqsWXpqrbULMQ2EAVXSAHerFohW72rgwd3nU56VNivdnWbKYaAs3ADv8hZL7tnJsas",
  "key14": "4dyvx5rjWoQ1Er6bDFQJszUGSdobUbHth56ZnbteLptq8rjkFaGbNd1mvLK8KrH7JAaPvrYu4Jojseqa16a31ngj",
  "key15": "62GTpMhsBPsuJ2xawuyd5neXSeb3CafEqzAYfeFxmfRQfBxmBgDzj2wBGtjDy3WT7EW9iGuVTyFJL8UmT7YHua9W",
  "key16": "5kFRQ42V9SpCZShEorhdCSBviFxREMGQVq1gXd2XRvnhogjFrEQrfkNnFnwvwLzepntZruByb4HDBmeHpFXoxjSc",
  "key17": "HCWjgN6wz74Sck8kmrMHQ1ox5qvUvq38wmZSdgzzQxZ1eyZRrZL8tiF4gdKELpHd4TXHJfWwPbDX2cHeAiT2xGy",
  "key18": "VSZxgtTPx1tkWCWSPrabPuXcfPDr4RxWYfMfGLFsWQkRe5pfAXqD7ZphSaArjWBRCKcUrjqsiDkFa8qFK4GzvdK",
  "key19": "5ZgdctZZUwS1Agdefdy4cneK8cf7bJzCbcsPCYnKTvJYJrBe2JH655mrTYrwBrTgZ2LqELUAvoTsNbsq3U7B7ooL",
  "key20": "4H7nc4nMdLdDXvugnppS3xi4UqvhkmTcy9ESu3fNG2u1i2KHW1dUty89itPg1AGc5EJjcFTNPVaxdJ4WRe8RGBEw",
  "key21": "4zJu6f4XeFRGzJUb5WtueWGLUbdHR7WxUymVfPykQV3VHpzUVE43PXsrS8oZVar9sSV8DoPGsME6XR5JNWZeW64q",
  "key22": "3gbDxAxbqkCogyDJiKLH8pRvuU9uqZFkaYbdDxQ7DgMqCeGWQHJ7XMb5ijNcu9mTBn8P8zPo56mmgCQzJcm9xdwu",
  "key23": "3R3F6n8F8bczyMPtFPT7irhuWCUHSQ6khfwEQgHjjSDNGbk6YQeHSL4YswuionfufApm1jPZCzVXPHhZDkT9sfcG",
  "key24": "45TFQWJb5S6Uf6uv5cNLQuCu5XCdtBxzaGtyXUW4Ns7Gpiz299BPRsakcLodM6fDLKxLcRyabSoG1jzegGck5cHQ",
  "key25": "nm3cFWXA7Rnx4ZL8AheZyypoyVYqNUCsTSodYnW53psmAA8JSQ8hR779En3GodCyYAHbVSLBm6NKyUs52PTvmp1",
  "key26": "4aA4hGFZ6KhuC7SjKBZRjhCet3fJhV9gV5GuESrPQbswfovWzW4u3miRJBfnsxwqyGbQA6t8XaDTFMntNCQxEvCi"
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
