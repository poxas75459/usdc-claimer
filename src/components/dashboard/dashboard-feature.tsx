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
    "3FBVLWTiJePP2xQBXroNcobxJ8wpJT4J6h86aLdZZnpzrSZxfpoVma9ahAm4Qz1ghXV8QV3AKRaj7FNwtjyn7MDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AwYGtWocv8841fwiRuAaqEGMVH3mAZxyWAbBFb1ovznsX8BEAUUUyA6F4kduc6drBTETY2FWAqXBrKo8dTko299",
  "key1": "4LU9WQwmtZU3q592EQnvrJEQ3VzZ4dpBgQ6Vkeoyh7yHvTaLkaH5qwnRuGrnvZiPVSjzTAVLgJGMLYCHvA3uJYUr",
  "key2": "3HTekkQ4GiwoKS4wrTRACJQRompM7bKkXX9JFNxTfRsfzDZguHQ8wjMrW5u2z3Wnu9kUo4Bd9t3jBFpcq1Njap3H",
  "key3": "5GrrQyrotYag6qRdF46Qf3uLjcy2exMeEVWE6s39MjNuhgNkbacazW3m4u8za2vSAtGtkocA4uVUiv7mEG2ymf3w",
  "key4": "32wgnuAqELtXSTiUqaKLvH6gQ5EQ4wUuVXfc6daNmoH2V99eaaQtsUovD7jfo1rHL41ixPibqmz2nHWrrCg3KdZr",
  "key5": "2duNsRrSDXijj6yXJLNDUAUvpxMgjpuf3H9rkCb95x3v8JLuzcPB5bV6ncn4AeWzaSiQDb55Nam2LEgMofepS89r",
  "key6": "38q6t5dnhzMYTRtLtuaWcbdEwvq389gEJv8K2iimSgvi9Nf7VSdcarGm1vTg6b7R9e1t6NBr4QKHREBdWcB219qg",
  "key7": "VK9DHXSVseEoEcSZvcYdUGJxogT4gUigUUtmT3X7fTfyAitvyMRf1H7MKYT3Smfn5wz2VKzQGJJrMkcJ9dbH3jZ",
  "key8": "46AGL6eT3vrdxWEaKwU3iFfSqGYMhmujByKhSwKzu2q3JHpbC9oEnZnSBvAtz9MUWfqfYPkyEyNqCd6tz7eENqcY",
  "key9": "5m1pw3dJotwt8tVrvhuiRMuqer7cYes81R7BSNDhyfHkM8gJ96ePd5A7BG8hBxDVJTmxjphXwhXoTgcrVr6DKYTa",
  "key10": "4Y4LXdxUQ2Xx1qSFWJocmQvYTZipNEAsF9u1FVDWGYymMbLfao9fhtsKoNWNCLz4UrSYkSutqFHiU8QEX2RDr1ev",
  "key11": "5KMqd9stUBkMCuJE9ndfLtGy8W7fJi9Df7CvhnVbG1dTGikXatzLuj11Nn27bYY7yx9oy1By3YRmxVZV7RY3rMQC",
  "key12": "3krbsANuyWozJRCCdsTct51Rnt8ckoeyVSiFbJtoQPsZTYp6ZgaL3WyhJ34NoPoNhycDPez6pQaruDxzWWrVmTkR",
  "key13": "538YUuA7K6UMnYEDahrEAzP8KTEvejxhxHoTF5WFxRRwMDhGpaHfBhYSkYbtsRDqawpCLVEkTV1Aeo9nLqPGw9Yu",
  "key14": "2gSkt7PnyfztLFYcMfCZV86QnQKdHn7aSrZREPGBxV4bLpdovmcwUpbsgECp8Zr72oE9zULE87NHSRCUNV6c64du",
  "key15": "4UBDoRrtL1a7o9x6CdK24QeoRbSgy2W3YqHqLkb8hN5jY1dbSHRyYDxJL5HQf5794ega6LQZAakzaGAcjsC2Xexf",
  "key16": "2jLpxkStxNwgqQGrVYYg55i9U7TmdqVfT2JtVkrA5X7ZMBgEs2D7WAzWKT5F59axuEaatmYfyPAf3EXZZ7Y3bekK",
  "key17": "ZmpUsAjC1dkJK6WxvdnARb1EWpQGbDZmwePdrUfjtppF2q5xsH71zuuV9CVqjjGcjqQBr4rYjR7rNipqwmMRRKn",
  "key18": "3RNUf134CrmcWPJGpGdzvqdhk6uhxGThpgwJhUc8eKjSMm6DQHkvVTzwPxvGh2oMhC36opDYvHNfLPM4Hz5GZzMQ",
  "key19": "29KGwbc45pTjFd2d5kdpUfSMjZcHuirh5cF1bkXrt8doLep91QzXUTmot9RZxGmFAK3Zr89pHtNDTEkayaaYwxSm",
  "key20": "3zkYFMvS1pju7YyFf5CfMcm2tk6x8QXJ45uxK936AtfMMy5oLDbpQyKwjNuLQbGJ9q643A1mrUwrWtqtiRjjejoN",
  "key21": "5j71qf1BSvokPxQ5F1ymRLNGSufzLhNXzJRXY7gXp3LuyteP8t5LV9MDiXSo6qWRDgFCWCiFBHQiGtMeYuwrzmPB",
  "key22": "5jKzu2mHN9qUw7YsXjjEjb2cFPZ3UfN6qHEJn1W57xR5A3nAuBRYCK8jyQ2hqJQ621tac8H9FtojR9icvsAgL8iy",
  "key23": "44UXdS5SmBE3JZ9j92U3RPrK5kMXtugYNii1a55SnWgN95SoMV5mU6m72UZ1DDqqJeaWHHCUyuUm1mwm5jydZxYu",
  "key24": "3FUrqUbjcyUiTLQ58m1B87Q7D8RqogkJ31xeszz1Mxt1aEuBTV4uHxEmmJcnpojCSzeRrTbEsvwCt4SwPxVpK61m",
  "key25": "Mpu9acVWeahTacTrsyAN1VC9rV11CSbFE9Jx6mkrwsgLZQnn3pfZqhNttbKeEBzpnqWWZtUegaEvJYsxWmELa6K",
  "key26": "5xok8bXFzcetRwECREXcuc1t3M55H46yH7cRgzFnwnXfkYPuFFvcc7u2EnLJMpkE8cLNP1g74WDdwRp9YsS8aPY9",
  "key27": "2b91p5FPTnft1wc4DyBCpu17Jq38MGNcPZDwG9sCGj1gL5iVWxJ7oCa6L9gCa5pXZERNmEafj4eWGsN1wKMFRgfk",
  "key28": "32Ph3afSwGHJCJ79i1v7reA6PSVZVqyvT3f421QyhZXN5sm6yuf8p9ZHJtgXhnckJ3gNsJtsSF5SaPnimxCm4tmM",
  "key29": "2F4jD1WP8uE2Pn5zLoyxu6BAcr57EuNeNjEPh21gb6njfppC6FMqK43iFnTGrpfNEhFZs2f5Jp95pptmr1wDupqz",
  "key30": "4qfXMsfVcJdBfhQGsjtF9wLPf2aU1K5Q77mwCw19yW1XwWoMqcaJgwukVr6a5qp5J5j6cyfztSkhLtVwHeWqMMCV",
  "key31": "HJtK8zA5XZTu6KQXUJtdQg4YQh37H6hbvHyMUbgxH88WKPJnTsSLGvhDC89J8BBv2wWiRRwNeFqYQpgtkzQCPyV",
  "key32": "4hZtyis8JwKq4Bekqxeah87xKvWe4erfHN1xbXAVXJ4q8es714q2TciKFmKsPaPHhEi7Siu7noHbb6ZFK5NgffyF",
  "key33": "3Lj2hh5QSxpV6LGKtmoG8vNzNbiEpxQfXAUaK9MjLNrJWYvxVkCKjimghYQA7tHtNss8Hj9ZMe7zzquXrooWnkjY",
  "key34": "4yiiAW64qekr52FjLEAvVyzCFnFricUmWxk5kgqp4ti7WDBvRqGbxrb42foC6PJxbyRxj5dKC3HUoPn3p3WAegzT"
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
