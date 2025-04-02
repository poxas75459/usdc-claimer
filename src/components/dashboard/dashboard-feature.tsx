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
    "39kttxY4eLYoviDbvSgNrUxVtMDEzoxkTRY7BTrdz7JMo2SipMpBodRsuG97w5WNspKDjr3CQCHrFKAwiXnxZsAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gDwTraZg6Ln7ZX6vvo1woYMA6SJTBoi9Bu8W2nYknHxub8mrMfwRwSx45yJxT6GJyTLxs6xcQ6jUgYcx5zSfqcu",
  "key1": "2xazx6TmHtNYGf6cBCWXVqeMBskYmG4Je68yKWzhuEYqcmC9wSb38PcToSF4FQbVSxGxvb3zxkAuBEPUpz73dk2Q",
  "key2": "qBa2VBTGi9Ysr7mZNXFUTpY7R2KBJ5dyAUSi4ampih9Zp5W9kBCaniH8oPvVQ1k88eHrmbgZtsQfc4s8yadPRmg",
  "key3": "524kmujS4LTLYBowiSj1wS459SjjSmThhfW9PSNwdZPK9pw6gQX5ss8g7xdNAefRfHnoCpphwYHLByVSWQSB3Hqx",
  "key4": "4MVekY7hNCSS7HpSsTwRuequV5eo6EWmp95PgSbgjGBWr5UjD3JRfKpupZESENz8ZUQQ9DHbpeFUmbFainrgiYAt",
  "key5": "YCxehWtQsxwa93RpQC6cpPUGuc5Bw3C7SUeuDcEwoFdNJwSgQBiH5YsNPJuXtARqHVR9f5Tjd5L3um5zFzjqo3U",
  "key6": "4yPAjWjnEzrB2dnH56MViDKDZX9fQruUwPAnC3FCFhRTYwU9Bh6nLzGVYnMHCExRquhWxnr15uYS6YgaT8hnDFTq",
  "key7": "4sh7k9XkBNQKcS2ZjtdzbcbjiJWVjKKda7BmuWvwtWSbrZ27AqYvHNbg33bG65wBYzdMQCK49bbQxupiT3hrVzAC",
  "key8": "3fcdZbb5Bdt84Wxqo4gb6nRYptkombeifWLvFYWJuUcsoJRrAoD6vtio6Cb5Uh1FEuQRmEsAhzdjeiQw8d8nmhXA",
  "key9": "35gk52RJXVLd1jypmg4ioufFy33ENiv2mCjj5LtJ25M7fmK6DePCH5JURDefh14R1e38Kyt32cJb5YHhptNjXY6t",
  "key10": "3jWWqEweAiRTmdFmEkipCQS7zAqVw4HrCjThktp9d8BjswEZZUmNELoax5WWq6BQAFvmjnZeU2KxpSu2m7BsfLiP",
  "key11": "gdjRvrZaYF2ahWwMRWA8zMeQtSxXpqgRVpc2qA39UPnnfmFCHmAxF7tjCtw5oDfSHzqNpmhg2uE4sDNZBG8R7Zy",
  "key12": "5RXtvpj1nu3DCsyLDT2TqTPir8SRu3gGGRNhY7ojUC5Bm2cqvBiF8VXXjViXZku9GddhcfKrbJ4aBQ4caMtxNGXC",
  "key13": "3M2z9R8nu5oHqGv2ZvzWufgMD1zUJQ69bMKBNsdJ1etdVRVYmpnLSwSBZGtCXreDUgcZ8tv6y1qjNx7bYgTaQa1g",
  "key14": "5SF1zM7VwbdiPUa3YPbiWRBZR1VKyX89DoiVCcGB4XmvhvfxTRzikSGy5FdEn93PoggpsvRNpFNVr6PZteDvhzm7",
  "key15": "K6TQJjYWkq9QFvpc6wzc9rNSf1uYsh334766mwtQ2VShmANdT458cwQSee4VKx29rq5X5G1QxL1aA3hajRFfKt1",
  "key16": "38BfCVHx89AnyqgLim7tbULq5cbKRTyRDvsMtXzh5qGrFUkW5j2zqf3ea6uUkua6WoXxp6W6UA3rNvPhct2J4MVk",
  "key17": "AzbtoB82vAndPJLwrCtGchAbFWX3nBiCE4AZgRdpYHwCqRSHzxX7FvXk44eABUyebiruqQFLrHEZnNafxLeCDWx",
  "key18": "5yCVyax1wrwFcPDzJDKg3x9BPsZvRyLfqUZshmTcvVuMoonA6Tc7E2Aarqvd5qH4HPNZRZc94rHGkyLBKZFiYM6c",
  "key19": "2zgKtCuziqyru9rDPHqN9Q3L5uGeR9R61MjkPMrC3kChsEYi6CJPsWCKd3ufcLdDbXSEDo3u8wznxKBdFCtmCTSc",
  "key20": "26VwUmqcr4VB5FRU3ppkp7m2o6ma4oTH88zVwU8YALjoJjrSb3eoUWnBehWAauZo2DoEbpKGEszPZEbZVjYkMoHc",
  "key21": "cx3PUPBvDMNjE84rqXQGFV5DyRNqqqeLei4uF2rThECKiQG5cvCsEPYhctpZK3dHg4RLb2vUg81vqxwFvHXXqnt",
  "key22": "2Yi4sTJT7AfDpyFLx17oiWGbp4FFNTcLLZXNEVkm6jtPDEEPmNhZX2Xf8Qmgq2ouQizbpr4he6Bj4KgPuH1GZBxj",
  "key23": "zHfaCrG6wzw3suX2VMavUQZXGuG344cMTEuTQQVrpekDGDxff68SPuaXYrT1Xqo8cWmv6W8Znog89DWTKXvrcMo",
  "key24": "aVg7EpPiXL1FSxNtrw4vLL3MjyoBSzoCbWth3hsYEKg3QqyJbDB6LNASLGEjS7GCBEpZm2utawWLJQ58NrWy1rx",
  "key25": "BWfWL7iTntbvFiLqgAR8sZrJV36pgWP3xnJt4FQfJ5vteS4Qih4zrxS5wCr6n1WNandepzEnMigTA6xkRML7SfN",
  "key26": "4uNQs7xCymf6eYy42xT2fwW7PQAUWNwYtwppYMJ3nUMGWdKpkcipMmuZuwbAho49PbV72V22GCHuUWhzyFxQzGJC",
  "key27": "27qibAgLCdJ3rMeHibBJKtMZYS7yQqKdLF6b55sxDw3i3xgsyTxWqHKxXcQhsoyW5bzHbzfgV258ZMH4bcQhbvY6",
  "key28": "3qkCwKjToYzPVySAGW4Ym7EQAPB3ZH4sVdbAgtQs9QRDNW342DWgex3f43VLCxtKma21kyT6uBL8xfMo6LEgJPH4",
  "key29": "SY2mdFh11qT7KPUSKGPX1NPpYWmHhwpEW3Tvka2DCSGABGMFrVBWFKY6CHCsj7vPBwEqkrVwYyEKgTA6KG2Y4sR",
  "key30": "2N85H64aarzwJu8jbih7jNcX8JsBSJYkCxTg4FVhvR2NTbuX9yQ6b27Bhk2Q4w2ndFX5EgNEUe7PoBawUFK5qLkN",
  "key31": "fWRHEuPaMZKHLgBaMv6EDp3f3cTHES2XcGJf7kDZgEt7vgAtNXPapCFc3LNQXkg6LfjQLcn7JdKCrCA9FASkp38",
  "key32": "64Wmx5WXCooejRgsNK1mXQD91EAYZaerhnyBSdnqgqCH9KsPUESbbLnfzwXr64VPGtAdwxGwHm9gt58PQjCL7up6",
  "key33": "HJJTnZpHuyUJX6dbXxyqohDHqwmJnWWd4ataVpbELfKiuwXpMMTMfRB3huh8vndrSrd6g2AoeJDw3sxawXjGq6G",
  "key34": "3ZBCTYZxQtFJbTDMiFcDyjA1zgDWgUdj5RZxUeefnFyWeMbN4LgVRU8Pq7Eix4gP2x7XwRMEEaeFG32dAmtjogs",
  "key35": "4w1eiRbzzEFFBcksHfyAKvnHkzLPYnsg6oRght5UpyYbwdvWrBuymrWU5UFV5f8HqyWEKQvmM1YWPyQvzumxhLQG",
  "key36": "kmcBwEHZC4JgDrM3vBFR9X5Xp8GEySBKS54FqMBzUxKzGHpgqVQF1iN8egiNgrP7FfmZxTQAax16AiwUjfgVU3f",
  "key37": "4YZYJ5tEe65rbth5v6Xk4zWyD8WLBty9KGMT9ByMrUf8N2iVc6RsZ9xhbXBpEDx9CzFRuuhbVxZd6f55WXc4pqcy",
  "key38": "3QF3XKydUvm6twrQPxDGbyW6zwpz4oi8hcrvYiUd42bDKYDVQP2GXCQFgshCACZXKRaw79pokCqvzhhmAgC215kV",
  "key39": "2Ne8eK8V1peqmbgzee2pJaYacr7nnyXN5GFdHhjJv8gxeeecmUvsqvsFgTRZ5PARETXFYjknuZQyR7AkGdAHQdqy"
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
