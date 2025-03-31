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
    "4qWBSUM4ddLQ8RNsvnqE4CHJk5rShAq6Vjof5Dfvnx4rGH5PPhhCTems6CA1e7JN1bWqFoXaCRhpQFxkH7hKC95D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8QwkbGhVYCCLm2mq9ptpyScwBAWGrWmdeXtE5vNyfhW22Rmcy67HW71RPuXpxbFDYwJBsMq1vVTRy5yJQsrshz",
  "key1": "4eWM7Wocqx9A3GDutPsNEGX9c6BeAGz1fkBKGKRhpQp5cGcypRcxK6B4NxuFJWia7oB6DTtt1VFuMgL6k2mHEcRy",
  "key2": "5ZrYugzseeo92UPKKUB65hdsrZ35BJsoaR6WbVFohN3sQGzZXv42Q64VERw9C9zgTv5tKTHZnqa4yoqvUDJCkS1i",
  "key3": "5uoqV4BFHjhXVhEw1cRWw4sKw1LLKD1N5meD4CKAaE72ZtYRfG66WA2KQX1dyfYBbt37QRk1jx7e52LCXioGiTNG",
  "key4": "3to5ihkprSJEWVSpkdKhdmQBRr8qUxc28UAowfSwAc7uMhqJWWMdD53YuSkffEJmzjWzdQPpYKJTQfoKSsn1vEq8",
  "key5": "wyhmDVegtJvgGsV3x2vahfMLhzrGLxpyEdr88vNeiF1dMybCMMuXvPDuwSfzWUbhwYfSDuKDoA3ZqRGSajF1BnQ",
  "key6": "4yN1mptM6zrVcuF7GYcA8tehk2eK7eXM89yS64UexgGszaKWAUx8pvUHXk5kZwnALw9mXBctDYUxHx1qdXExZWJK",
  "key7": "3J1uJP5xXFZLjzcFqnNsvmGTXzUdAqUuhrWr5kvK5sVJCiUMFYkyZ35BC1RBTtrYTry39G7WnmQxr3avp5uK45hn",
  "key8": "5WKguxdXUxbqAq3i55zCJ9FQVLouLT4A8TseGgnjCrDBsrVHt8pGy54BGz2ffCLq6dvWjrWc9ieUZs7M8qqBEZvb",
  "key9": "4h17V2yYGrLMAGqQu21qfUrLK1ZzwLSGtHRRF5ob8yLcdL7E7wK4S161aTY4USUp8ErRcYrroEihmPumYY3pPUaN",
  "key10": "4msaw2Uzdkp6s71TiCWrcaicV9wEYddidtiNSA26Eg9x9H11pw58KuWsLzkMG12zbGrLxok8M8wMFfwAGgJ2ZyfM",
  "key11": "4BXdEf4bxk4CaqSh8RchfXh64aubgCzxpnHjfCBNjFTW3NZY2e1w1AXRMHxaK1fWupHAznvoWdcswjmoZK1D2Jty",
  "key12": "2GTxDwDZn3qa3Sc8boLrLHGPpMiMyxW7nAXW75dCdgoUrMZUpoCUVwTTv7qoxM7dGvyZUJsQBKWYodfmFQBJV4bK",
  "key13": "4rXidgfLGN6Uzk2R5h3BUC2pmRTYLkEMhe657oNicSbf1emYzdZsoxYUdwzoQiLbS1TiXZr7LKWKeFRLu6UsYu2m",
  "key14": "5fsjMMX7baGRNucnZGqrvHTUNKGntC7PCxTTdGeHAWUhe7u4XTk6c6aXUQxtWN4jm4SY6qPfyTxgVrUyWWRmYvFy",
  "key15": "uvQ1uRK5Fn26oicqkgBS2eo7zVDvq2eenprVEGQ7HDEWLe2d8cpoSy8iC6pPwyBe8HLfp51qCxkjDpMQw2zfkYa",
  "key16": "41wn8xnTi3a3wS1HwbDSiSMGfsfx8SREPX8zbW45tzGpL5niRverKKQmgLbLT6vXTnwv6GgYJGjsFg5ZfjHC79ho",
  "key17": "5ZKS765DuymPQq3iGC2z34nU4TUgRB66x3AeKy4zBVB9A1XHfg9VyHtoocD9YEM4aMtVEFBaX9DkKsX9QW5WZZAT",
  "key18": "2qd8x6fxHToBxvZtNgHa4tHPfkYNjDxUvkAjQrQa1eSVpmdxqKgdh82np8CGDgL8zZVnyVx3YtF88xFZqUKYxtzo",
  "key19": "5m9zResJ5jW2ofHXDKkJCqPwoxGWGkZzdsSDQnx14WnRb6qBLFZsTjhjgqpfbc19eHNQu21VsF7knobp9YcnyhB3",
  "key20": "2JxCp4jFXrWG8HxKoYt93nJcEaBZv5TBqkjuW8XVf2Dtooakh1GHuBn3aRiPE7FV5efe1bypR4BZMY4rAoPZYYiA",
  "key21": "5C8Yhg7nZJGqtozCQxGRrn2KHvn9qVH117AqUGAWur4aNTnjZGBWiRaRiXv13edgunrYmZtxvvwmYprWFBWEw69i",
  "key22": "5u5Pb8Bj8zhdCeLpnDHSyVW72XgXaK4D7pKiBweZPa5DLxe64z8WaXHH2UDZdvjxnC5t7eJBJSRSAFoP6eQjK7A4",
  "key23": "2mZbabPTJLfdgxsc3F1VzhonLH276jo2QWbPoYSp19FSLc4EK4Qirsum6beBMnh5frVgYH72ULnLVPLz5KQTT3KE",
  "key24": "22bK7xupZKFZF4ZzJbjCSSxZ69U1UNNrBEL49DmtYM23wM83tEwgcQZDpx5vVoy1KaDT7EJWwS4vghcr3EYiVQ7C",
  "key25": "41kejf1wHj57zfP1xQdr6Quz533yuz6sryDNbAueU8sxngFeb3ocnDt16PFZT8XWj9izc5ukAuKbL8wgqHz6YEH8",
  "key26": "2EmehPewZ79miCyz6w8UnyGJMymUH8LAUksByfrgw4TS23WKXRuEJu7qZaY1o8Gta7TozPgmJFHhesxbxBzTZifV",
  "key27": "2cm6i6Hq4fPRHifztw6Eny8GiipMuHYEPAm88pz4LiipgjonYVfJHKaxKbZmsoRqggS1rzjhiMQ1pHAubDB7Lmto",
  "key28": "3hXJXTWcJ2hpQhVMuXWwRThi1idCp8XXjYLv4a68ryMen9HqSiBoPvJMTiwiyuRQx26GvUDQUip7huLWT8gLMJLm",
  "key29": "3gdsBbmCnqzDaCK959mMzhooBUQvsKacBUrARahYk1UeyLd8tFNMX6nTKzh63nrc9Hx7UzF4ZTyowycdnEb4Tmir",
  "key30": "4PTEwEt5rrpNhteCiNY9q9yeA21odj4U6Fam4WCjk6oaZDsM9KbgnhdSUrDhgUZcKt6XX4EwA8BcskxHN28ZLZrt",
  "key31": "5xfHjUxpGUdKVVWATM8TiJM1zi3z8fewPtmr6vHUg6fYXkEMdZouNbT8SHE9WTCRgjkaxwb3mKqPNQB5EZL8t2Jk",
  "key32": "4WmvAWGZy1JRPJezU64CetqNrrv4uF7mbyTqXaRcYofJZBeigkRzWrCnBbQqf1Ez4aHVRBSSM8grM21wngvahwzo",
  "key33": "58jMjJsp4hh6z9ExX6kYtL7MJcaRmBkLa4thrpy7RLxQVw66kWTfdmx3Lg665NQrHS3iRjDRA7wsNKWoVWEhVw7K",
  "key34": "553oob1C9E93WDoNjKLAZXPYTFrpkFvLA3HBvwuEey1DtSUaUcgeXt8ziDUmTcVACi9agwh1SmGdfe5me8DLbcDZ",
  "key35": "2iGEjE7y53jhDyBtPrSLfS3CLXxRXR4t9ZiD4tMmNVZuVEZTPeHUMbLVXFs3hZqxPc1D3MmTuEv4Y8TB3fJhGgJB",
  "key36": "2vrFodnkb4dnMuczgZPDywtZHW5JhuSWi5nNYgKGeDuL8jXRJ52tD7xFZRZhbvh1stBk8RNS5tUF7SSoHps2ajoJ",
  "key37": "3th2pW1YrWKXwy2Y54kghrTrSWuHqt7UJz2a7g4VshMGjzrrdcT8wGBVY8m5LgUXVRF6cDTEz8HJyMCvKgLwRTwU",
  "key38": "2Yj7gMvbA1tUq6qvKNCv66sr1qBDykYXdN8YbTR3MdSUyuvEo8b5EB65pRaxRQpfd2f2KEhyfsGmhMzedXLrGvBu"
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
