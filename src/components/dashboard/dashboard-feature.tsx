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
    "9pBinaMBje8yF8wYVKNfB9DsmF9qhQZ7AyfNzUs34V94efwd3ibSfPdjibzhqQQS3nyyZCTiYbdJ6joApwi31v6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k6zzAXgEvpc1BtFUFRuWvJrHkp4nUY2bfb8Q94vZ9erpNmHpxeyag1et22S5RwQZbaf4Wre3aVB5XCokzsnEDT9",
  "key1": "2iLNV8FUCwct5jpBKX7UUW5nGPPEZVYCEfVkCbpJ6bWiZ5EBW1jWDPKiGsEyxoK5QKCwxBzEUjmZjwfv2bDGnHs2",
  "key2": "Fmrc1oTaJQtJbrsfoWhUPnEStPvB1oorPLP6giQPg7Qx2yrxnBjKJpxRNSCz3KoaH4mN98qZRviafUpLksfDeb2",
  "key3": "2LQX9a2jBv8tbT5cQkAjgoLu7YjrB5Yta6TvM5FZWqKDbnu4oEjKuAf7uDNgKkS86osLEZxvzZjudeeDm596cXzh",
  "key4": "3hJqUggUShkQQiQWm1r9p2uLftknuE7VPhrKpLm1K9y8HyaYQEtMnjuKmDVEZtoh1Mzan1AbPAVh9yrxN327VbpK",
  "key5": "4fzS78QXWD7MAe8RJ1UqhF8HvvsgPvZztZqVRwQu3yzRHHQXwPqKSQEHGzzVSje3ybivQ6Rg1ySqESM3ELFGaWQg",
  "key6": "57RBWPu2b5cTwyBSbvb1EJ6zyqzJXkd9FUFAaGvjpHKJq3c3j7ttYhwmAQCMxsYXt9cY6D1H1hPfCtkpbX4j1uZg",
  "key7": "5VmRYLWa4TZvt1A8F5LNhweK2RSspySqyPmabtfrFiw8nK5UVUGUKq6F3GuWToi4wV6xxs4bha8yAF8WpUukTLt9",
  "key8": "69ZcSzwxvqNci47Pyo4tFArRkb13gXfVBfadu5rUKnH3XmDcvYNiQW1cRqBrS5HjCbQjdcU3keEytELrEqCobfn",
  "key9": "yffj9Wu8pSCxpUiHXqPQQTGkLnyWzjedHMa6sLopJwCMhxSikXjc3iQ1p3fQAekZoarom7mNxAPuRM1X6bQZ5JB",
  "key10": "34x934TRuoZrAgL85v6Tnqjz5j1Fv7n7bFGK3VohcMMcJAXU66ssjSjxeJRJGWT2uvcgtyszKiWEqyr9ThRkG4iN",
  "key11": "ZsoKuDk4CtkSzXog9v7A87VyySwYbGErJgVEds58Q6BkDTsdK9BTza1gXK7Z3BvUPfKhkJDYUL3ZhAhnsbgCruQ",
  "key12": "4kqSQ2JLMyb84dDWnc6yZzdj3jd2gAA4bbX3dHDo2mZPfeYW1pGKtZWC9Et5DZ43h459iKYspjDwwhNE2g6Ti7LA",
  "key13": "4mLXzjWkpdfb266QqK4tp6hDenXdevdPEv93kqJjnQ3NbkeeKotZEKNSbstUBBmBXD1cFENDMwWuJBZ3yFq5y19D",
  "key14": "7qMqSpWPyDspakAR7jN49kGZj2oCVQbgukBrZz1wrWgsWzNVq3gpD2xtK6dJBx5tbDqUzZvwrLtym1f7gmZ1d7T",
  "key15": "JgEzLTmiAcHVqYXt2LB7vPrnNygAAnAkpYctLqQ6UqsoaWxouqMwZvcezSwgXo83jLz5Aebe9Hk1fZLmCVfwEQD",
  "key16": "5TEDwM5qWEyMENKUuUH7ouptKaunGzTrTV4mNGLoLu9tyjy54RhkZGR63WVcyw7sEpAMxgEugj7okR34QHJ39eej",
  "key17": "3FKCoodZt8pco5VjuqvKWurnScK5vrtRqvW4Eqd3vJ9cKQEKqCM5aaouNDsb3jP4utwHMGNkGkqJ8Z17b8U1Pq6c",
  "key18": "5bPQjySkwfCdu27b6g23N1osegM3rotAYzwp4gwdZjvn7re3v6v7hrXYLVSh165BCLDWC3nS8dR3ZyXieDA1a6XD",
  "key19": "2atJf1xWr7FYHcf8emp8cWrVQF1qm3a47Tn3haz8LdCLqKDeUNQddF56xz2zTHre5HCN5TsQiwm43x3Z8SkQQorq",
  "key20": "5EUFMZxuzfibZMXJ9RMRNxTLTFp2F4hLxg9WreULoXBQKt176uW14Yt7th3DEnBfUbh3iGtFHjgbuiXRP3KYr7Vq",
  "key21": "JeTX571CPP3SmM9SQmnNAFTEoReNL9sXwbC6vmGpaWQkB7pL4o8SX3nAcx54eMYD84VR6V9bLHkGmgVw8eG48Ci",
  "key22": "2sSCK9iUwWJjuNkRewjHo76wrGB1wQ3L2q6KfkwC7arxTg3LdLfL3mbHqV9qHp7BDJap2p7QHmwLjRUwzTHFKM4k",
  "key23": "3F3WdNJWWpX5rcYDaCfNogifmCdjv1Bvr4g9vduWFANTVMiPTEMAr4a8mbAG9ZapddnZiBPY9FLhyXL1riGWv6QA",
  "key24": "32DrYXYyjcfJ86exeBSSw2x8wXcdiKYThVbfgqfxcm69E79txhfmnRz2MWGWEVEFWwcirVbgfpQ9p7a3SRwo47a2",
  "key25": "4rZM2R3rTfHAKjQtGDxzJo3onGXYBU1gNYuJ3tBrbJg7xGjYo12Mm3pZvqz3iLEWxLrXsPm6GJ9QjfAuiVd6Xedx",
  "key26": "5DphccqWiqPGrq92MYkLqtJR5KjrhpK6mDEu7dD9JWENJAXXpCNu6yVmpyUUXFBrL6MqoEc8QqFasC6sCLLUtdDD",
  "key27": "4a4tnGQV6doS9teJSmHAJTn8Tko2vsT1prhev25xTfFFvQ5C8GTEnrFg52we6dBcYwX3c6woswzbx6xATYGes4Pj",
  "key28": "4S5XTsuZSHYGqKJi92z5LRfNToienSAzSGd6ybjr8yiDYnx7EpKJAxckea8XX5pAD1T57wJYe8JkT87p8HLTZvBz",
  "key29": "5xfcTWJfEEK2B4HUGiuNMXsnUqsZiBdFetbLZWWMDCsiKWo4zu8XFnuNrhryqUVta4ef77A8jAD2rMZ2WkeM8gHB",
  "key30": "2zwoV2Tz2FM77Hjx46ATP22BbV6z4PJGCSoVwWrbWoQH5v8W9hLVs62vz5LoRjMB66bY6miTGHGNmT5BtZuqtPXQ",
  "key31": "26pkzXNyTZ8jGs9v7KxHz1LDZj7PT4MT6RwmrNawjkkfzrF6K2gurNqtNeuA9D4JhbcAuFdwcDqTtbWgUzHjyGsg",
  "key32": "532K9JwG2uFTMfRR17vzGsXEmH6KuDJAuiEcLrqA3bviUEmsAJhMSyyKYnKNzNBAkvK1egmjKJKWU6QrxNUoEeoe",
  "key33": "PEzz6mdu7he3LZaDyiLbnnU5V7VvEnzDtXX1GowLeH3obAwKbr45wNCnEHngV6gXfEN5rcwGAmQJ5ybZU79bM9S",
  "key34": "3XorSEJ6m5Zxc6eqGAuGuRwqjjxJKRzqT3HVegkaWCg3JSi8rgUd6HXLyExnUL1yCNRLvh6EHAR7SDPQCrdtfKSn",
  "key35": "2AgHFgS1ZnJL41U6ePh5KTPuJigKhS2tEvVBXTH7azwamusnJakDEFJ4LViGyfeRJptnru7xcRU21wW2qCEc3y45",
  "key36": "XzLnnWAHb8P61KY9femZVDy5FkMXsLkRkRwxavtWtZUVmRnvM4cXSiFhGUCySBRYAYVAfGnMp3SB8A98RwymZo3",
  "key37": "4fGbkLGsGrfvGe9ckZu1nBFZaoD5eueANzfnJ3udusAAiPy8NbzKw6UMu4mvQznkeFMQXEuRG3ymoYqqfXSckaux",
  "key38": "4ZqAU3UF8CEPVpkPDB6Cu18NhNysM4Nwhs2oT8AwMV4n2zbUdLW9ooXFXx4VHmJvJCF5BhbM5YrQ5FmSR5UuP1jq",
  "key39": "4F2o3HoRcY6BXLziwibJedYunoNnRvHptvUxwM3Bg5jeTefrduvgPQENvVqzU8MW45AondtKr2ccMGWy6mq6whya",
  "key40": "2CkF94td2wJk3KdFNcCT8LX8YUaXceAT6DfQgd55NnxtJ59rqHG9HbccrYej3u31mjFdxoQVKWg642BPySDu9vTj"
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
