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
    "92ACCPjCrLDfMh6oKfof4rChwySM6ZHTJ1XUTHzK37nFco6FRjvLUj1goxwmnapPQgwy4emGuFUMSeHvcQf22KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RWZMx18R2cBdCaqmJGeYVfmnyv5RKXkcAqqGAYqZjjG94DDf8PGSyqMVUJErQA5VU4EyVQhiLvDZvMurSDfVUP9",
  "key1": "5JUDqkoHemdZXTnGConL7GvxKWC8GD7EwcbjC4K6LU82SwfDgEqjCTnmQFW9PViGUe7gpHgXySF4hjsWoSrPQ8Us",
  "key2": "2eqMP4pR24zEqPVd6dT4PaJRbTBfnNFxMgUYJG55iXHYjQxaEin7xCnDneS5c8YLygMuXA1V4af3ZeQex8HiF1BZ",
  "key3": "2APNKGhuAmtf87CLHpgaM2P6bKQf7dApnq2JazWRLegr8dHMBMSHjEJDu5j1Vd1hR3rjnkBA4rNVsv4pHQYFgoBU",
  "key4": "4paJhqAfRECaxzz88me3pAR6S4n2Sfw7znazFZoYEcfr8Cf8LwykaVw8jaHnZg5y88AqqMCBHsPS7PQtPSzb9tmQ",
  "key5": "4Ycr3YSaHBXFdDmz5nQhxxd9fVwMU3GHXEe7gVbE2pqyYK3w9ZNd5jStMAXNPYV11XYPsxCEroXLd1iZqWbPtCqF",
  "key6": "2t6T8kJvqGGvqedkhTwALC9Rm2izhN5vJG1NAhidLYMh2boMFpZZsegqt6TSdbmXUZuR3mCM1m9Y8uJrrf3hipQM",
  "key7": "4cYq5vQYLVFErMzspFRuzRzwuWyNz48adZKj9L5m1FcKcH4K2eWkJr2uDNzSbcnQj74Z9aYS5SkrsNKoJuqNaSHy",
  "key8": "4CiaZoxaGrc5DjhV8g54PofBT5FfjkyrWVUbVEURe3yFUVDwVLkGavQdiYbXBUinZNiMuuCqPWye6ykDaqA2TPu6",
  "key9": "5NTxLsUAwkPjKkfKnY5xThJhyLjobNj4E5qcc7EVYL8dUj7njnzAVJP2rFLvHfGrKv3Qnq3wLxQGUF6Nnwg3MFY6",
  "key10": "23zbgLmepeyq47BQgceyykiHVYz233adxwpNmbSymm8oXdWobS2RDVwK88cWdDgdN3SssyZDj6J6bVmsyKTTDCS7",
  "key11": "4G49ENAtPzhAHqHpzADuC5SrqEtYBCsJSx7das6vtuPW3NUoApz8dY9ZvgWWrm2cVDkiweGkzrVLV9atqSL27Htx",
  "key12": "5MzGZBDBjVxXukTErtwJxTPBHYxzAmmh9xcdPRFSHZDvgCdLJ3aEUbSKQrKgAnXVxKmpPLoKpWqEcbp3ct3MAynB",
  "key13": "5VDCcq9fLNcdPes3ti9xNUfYhKDxJTJhg58frWEoz8nFk7G3GjFf18tNq5BLWCaySgoMXoqTYptMpsQZSvF5nGL3",
  "key14": "XzxX8x1ixfF19Y6R359v8MrTT7CVRYGcPaFVVGqVDnXQGggTX5qbiFUw7QTuKrj6RnLUASjY1pYXXaVbbXvZQt8",
  "key15": "5QiWwgtS1wqp1o6BT5L119jGvktf99DCzhUZq7raDGSvFoT5zXaBTUFb3TKZpL8MVXm7mpc3XsD5yb117rq42tk3",
  "key16": "3nAdJmoRqpf2CyMLiLDncZ8iq7hiJbKDd79XLsSVMatfS4vPoJZs6EViKfB6AW5eDxKYkSX4pm9gqtVPCR8vSLyx",
  "key17": "xwEv6EaEyZUt3JcW9hGivQByCzqBhcrCUsqp9HQX9P7TrWtEtT59mkZV5zWqwy1EdwWMFZ4axticv3QtQF4uuE3",
  "key18": "233qFXf1apd2iQkqN91AngiRsSJx5vFkJrCw58fF9FeH9B7Vd59HLwPyQvQchiakcku3uzDsx2GiCUdk8fjc9JCP",
  "key19": "XgFwGxtDmGaD2qYgfigewh8B3GvQ4tovzn55zkACizGtPhesqxN823CPUxhe3dBWKRVk6wX1cDUGzQbFumaDJ42",
  "key20": "452ukn6oDadqELWSJDTo76oNTbB6FhdfPfwzA8i2jAnKDGdcyM86mfGxTo7q9y4GZBCUzzaVkfDQ4hyNhLVPevY",
  "key21": "q95rCM1JiWpc5VvVrM4jyGecWaWQBG3s72wep57NyrhuYM6YgW2PtCPnUzUJQrNioj4zrNXm7XQf9wSHwhbJ1HH",
  "key22": "2L71SPf2dMJLfAuhYdotA31oNeCfdaZRyX1fJmpH7HhJBbktgqvLAk2hkhFCwvkhP3cjFvbt4qDAedorWpPbv1Ch",
  "key23": "3ybB9Dt8kX6d4RaPAnRWsPYhBdGPf1i8MvKN3sBghZE2WREVGLYb7GGoG7riNBSJWHrij3VXn1LGJxQ4qrdKiEpa",
  "key24": "2eFwUSCMXRfZx6QDmQQyE8tFwXrMMVCXZiyNniH73qG7q9kbivzwxzQS3Q7o8AYFiuQUkRXLNX5PjyBHVNRyJHC2",
  "key25": "6KWkVzfwKU8a7Aat8GRRdJZY3S7XetZXXhHnh7vpMciz5HZnZALmZPLKCVFQ2K19agXWNtnGyC94mcMZi7pMkHC",
  "key26": "2fSHBUXuPUvxo7jnoyBwjT2vzc7pRVdUs9omtNE1qQbseVUboBqBUSgU2Epc4jUjWr8th47ZbHedJ8Yfh4UHcSyt",
  "key27": "42iCap6UEYfeqcauueJpLEhYbMUqVUc5sNH6QZN8Uz42YgshB1VrRFCRehv77cassPG4zsTMXWTymgCpwPWdNTqF",
  "key28": "cYxgDVtKvEqKamat2RJBa4u6ufPXeFL4Qp6kSeCe6pbAtMyvwETihGsakjCStnKYm6dqYtcVsoF6nfaZ25MyAij",
  "key29": "51msxKAKwQzXEFPw5qYWRKPr546XZRneyhFKfTAFMwwjjcQeghE7hRX5SvNsRALRq62vsZqnR1CkTLhPjcrWMnFu",
  "key30": "5UP1bYpM3PRfmNJGzFdFMGPEaxrxjMtTHvJS81G7aHbD44JQiqUBMTpe5VFc73oHbXKW3YaKYoYASB3DLUVUJPwb",
  "key31": "5sGWxLpvemsS6MdsAvf71SYi1RG11GdL5CKuobwjnf4HVwMPDwR1bXbDYfuyEtN3CibBhVJecPrgqz8qwakKPVx5",
  "key32": "4iKLSTfeTQwZzxQQ4egC3JExQUJ8qukbsX26iyYyZh2KLg5eV1yRESJncKikekvAm6ENUF5UhhDNR6k19MQMrrAV",
  "key33": "2bBvfdkxroXRmvqWQ48K1KCN356FZfkDwgM6gMxLuv6UJ22Z1tVBXtn1jwG5xQeVhqaTij1GrUpckg2Wx3ec5R31",
  "key34": "3YnmaRyw93aggXNaPigKXfwztMhuwMaYw3rktgEr488c2ANpvEWcZfHvGKBmfLHWFB7nPZZRNCq5gZJtf56mqhH8",
  "key35": "2acGLwCppLoa83UYVWEAJAgnKKNrszk4dX82e4c6mUXhB1WaT1N7JcsoyAj7fWUoH9LmDdiyhs19chPd8LvygGfY",
  "key36": "4oAdoxDaLaZNc4RQYA2c1PyeJwM2cs4HyEF9NbiMav78ZgPPim2129agnoC5ZC52j8UBookiFiYcSJCup2GWbEqu",
  "key37": "3BmnE1ibr4tt9KdoyArN4ZDtbm8yLp5jNUQSXAsTTS8cFZu4zw6LceVahC7HBEpepRfdvTcxr7druoY2id5pSjqj",
  "key38": "49KRLr4Zi7t3jyNvjaDksRqZ31JPSXJZou3MSuYR6EVisStwZN8M2LxquemsvVrASg6QgNAVqfqaHsuTQk2FgBDd",
  "key39": "2SFCWe4V3LyVw1umMGaMY9Txu8Fc7o6JLCPFeJefnWLD74U2NMifGoG3g2yPQghuRNgwuKyRGLMzVMTJkCFYk1LT",
  "key40": "61YjpNCFmdR9HQKtwAp753AFHrZ5CLqETpgGFvD1C9rTVKdBb4iYvoG4aoQ5jBHobrD2PgstgF4YG8BnbCD9yBw2"
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
