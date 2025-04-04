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
    "3MrZUEHEL9Jv9mF6KjQedq32XftVKXWeiimxDmDZ4iMkv1sSqhWNNPpnRZpXG6RtfD3teu1LEHkoiP45Lken5h3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t397BLPQv55R1XqB7WLsvjrAUgzp4BZ1sdXCfjrUJ82Gs71V5ifL6PbthYMkxubWyw579uxoiit48yeccReryfa",
  "key1": "52joD7wYHsuxmN3a4Bh9uZsaxLpwPRvEMexui8nPoaaaz4pLCacPcdECa3ypMhsnaKi9benN8b7vbjZA5WFJ1pJV",
  "key2": "4vBrbpXWan5anTkgW7JehiY8duV1o8GtkjMxP8m7ETKqq5ML3ZsNpP2pbpFiBP21jjXXnxj1vbZ5pxy3x5asNTnQ",
  "key3": "2AVnxxNyZ9uEQPQp5odozZKHc7D7D84Y8rmv3RGqCUurdn89KNpeJanibtDo1SZfPJwP82ctJqXepkcgx94xFewL",
  "key4": "4igtzSGar8RKujH4R2PJuRS9c6GQuUbPZf4kS6hGa2PGs5iveotFm8CRT1YCmRgpBSZQgDkjdGDVKnSmKmmpuZW1",
  "key5": "iUCL963fZ2YNkRUyBR7cWcSjsTkdnvKLgusYe4MiB2kq8zPA9L7SKr9wUJzzxqc7aBopPZGqD4n5SqZ76grKxDn",
  "key6": "3adX2shv8xWw6rnu3MDy1UYr3ckm3jsQMvcDk5MFLF2Qu5UpBN4bsS7FzJmAdG1tV6HLrwuYXkN8d7sKxqiNDKC8",
  "key7": "3fgadaawT5j2SKa4tZYrmmiHVxKBdzAD5axopDByxPzZfKrCHB5NKJ7XbLy8LRdZ6WJwBzpJRV1WbzXNMgiEKyk5",
  "key8": "j67PbPzo52RUUi2q3uzSQJ8jr7XV2KBXiXj2TUg3pgBXz8kN3B2X2MbVobrBxQw3r3MfML3tYEWMvRFMVQ78QaV",
  "key9": "3Qhf5iRdmH94BrLf1X8gMsUx2b8E5NSA1p89c1FeYCHy1doiy7MsCe7DopoFoQWmpikPhHpEux11d43QU6oCFxJK",
  "key10": "XpZp3e3PdL22nPMtDAYvj7peV2MceJ7HvQNFJioA8kJSgtiWo7F7v2KKxjEWkKY6zBtQ1gMnNkALxMLDVoEKsDr",
  "key11": "2GyfvbWB4kZghh3JdJQuUf3LygCLyTpJgtnFvCEAT4s3AysBopW6V5EbYUq6U8WYv7CSwLNiGTAZzJ4B6euhVc2W",
  "key12": "FVJ6VbddTzL85Pptk1UA7gbnJDAKH8RK89jCo1dAwnUtWB7dtCQz5tmkRttSjyneTh93HRb3Twg4RicKVPLUu89",
  "key13": "4dzXvfwv5GpRSYA8QXkZtFYM2GvG2ZsLFwGRU1PGx3EG91B7grv5rQCxmnWS8L1UCKAC5if785xaAtWB1SikwcCe",
  "key14": "Nn6dU77bKzGeBM2oLWuoNDXQZaqk5qDUvLCzndjp6Gyhwv7yABDsgnLB5mBgSAzuvtCunWtYknVsHbZMwr8goRu",
  "key15": "5woZQkgzCFeVkXrSHk2Q3oFfjpSLbfJnDPfjyVTD3YVMNTNzSTpv129dXJ4w8pgUeQc8tH8vC2qdAyK7us8kr6NX",
  "key16": "2fzyye3Nb3cG9xUtBY6Leqd4VVxjYe4NcaQzEBPoDAp1CoPGU4TWA4bDvyBcgsxaBCG5DeeYf7AJxDAXzfWbvwLL",
  "key17": "4Dsw392Jr5KKA5qJqSdxbZHrN1Q8osn6mAuKbCtnwhnx1qZrto2pxASdhaXm3tEVruSF1ZznCDQNzUW7j13dqr7B",
  "key18": "53j1HJoSi3VHJiBQxX6QutBmWipqbKoHVDuKwJ6xp1h5ZKaFxNoUxKFHEnqYbyT8UcDgRuzfzREM6W3ZRP7qrEEd",
  "key19": "235M7e9E1BVC4gdnR3LbyWVHFJWwZqVf1cw6XdRvqB7zG76MiKRphy2qr1oQunVNVU5h8PgbjNs8M8DMVsXtgDZY",
  "key20": "62V2hrX9PDWGnHipE9WtwVqpE8Fgt1P7G6WHjvJWpcD1VYXgKnP6mdui7oeD6bYPVeUFvqRJaPYPBr4BJHobfScQ",
  "key21": "RWQcUSSJpL4tbwy2RSeGTuVL74FiWterE7eGpgsqan7122JyjQbnjGgHj7wdTbqdLeHpHHXFLX6vfYfptd4SvXE",
  "key22": "3RZD1WuQxNqXSVPdWRpGDb72AAkvHej6xce9NpEfr8F5DXomB3cTGNTe2BBkfDrjmy1M5TXcqTsST7wTgkuwgq9a",
  "key23": "rGcNYNVJt4bd3FJHYwHZ1a7bQ8DadZQp8WF17YL2SwKzpAtY2TgWkipZE2iKsWNS5RZ25giApquku6omQyyGofx",
  "key24": "3b6FYWaa28DWD3PrxYFzeCzH5vJ49FZh7TdRhhnX3qX5oKCKn5VQ58akVe4CvnEf7Us6XTJQHWLCTT6xMGZBr1zA",
  "key25": "5YeoPXCqz7nHX5CfPGa4saXuwUfgxXZce4QTeAtyETDJLAw4y72A7YYjw6GxVRnwaWeyuEEzadKLgHeZ3eZdwKP8",
  "key26": "vGrRkEDdSuyCUQXeGVJNZ7TQL7n2sux9sEBh1afbTMqogye4HjF9dFYi93ypL8KFKEiZnZogdx7Zu36DG4fC18n",
  "key27": "KaAccCrmatgJPrXdJcAkk8K9zciPKKMfXRkJKgjKLWwqnj9JiAzQBrizt8KStfHdViEBkutsSmxKqn8UkjNSnJ7",
  "key28": "243JNf5RDot9STb4TGApmdEHAZgY9xiCc189RhsUmiwtUea7J8NZ3Qj2MRqKPXj3PMeFuvujmYQEKNznUfPMnmLt",
  "key29": "5PXgarDPSyWBMTmX5a285fxPPzXBxSR5fdWsEHDJ5kHpgSV8LpSMo9cUSfaN9CT5VrpQva33DMRbsgpvrKFoy7kc",
  "key30": "5dRnJyNi8XhNQZ3dTNxJg4DL3THhQZv7CSgpR3FJkr11pAiZrB9yUPPKZaLC2b2vSFTWqLXvGoQg2BN7fCVFDcn9",
  "key31": "3wbu3rn1tMKVeCohMBwB2pko8rJqnhQ85xo9iERxFj6tEqdFHBcKGVtfr6Vpq4EayatNHFdTKvRjVz7xCPWd9CDt",
  "key32": "2caVcDFuPrr3n1iVD8kQK3spe7R5xPkdUHMcn5X1dZSE8MDCnjkgSasQuw7VznqGWScUmA7yAn2obcKFB3VGY2Er",
  "key33": "m1YqnGbEchVxf8CyCXfHfAtcCWEA7QbtB3nQjuksfuvyD4kXKkZKiZK6rJHT8TR4gWad7EytD5A3HHpiBJrAwYA",
  "key34": "PnbmRDzQ1h2ojTzUabSBr3gHdeHYkTXkantrKoTpMMVtg5f39UfpkP8nqMcb8hxjeqpfJ5bEqwLfZMmVQ4mRWEr",
  "key35": "vRiLpASBaUQjerVxqqRdKyLfAwupJCZCFZL2MYRn8qG1kKrUnigCaBtL6BkzWNwF6Te6kZzQ9YWqK8YPmU9zNmK",
  "key36": "2SBQ27HW9U4e8Y7Y9GhH4eYuyYyQrVWsRCp1TCwzLwCkjDtuxAUdZDBfzNAiaFouB2YsqMpzWRK6StHxpshQBwDL",
  "key37": "5BrA7AXmnYD2BbZDSPTZ7Hei2vsoehUZiv7NxKAQQH9bhqYqXAQz4GVF9GCVCLfknxULqpbiar25anHLXufp4A5V",
  "key38": "3F3L7xyDDqr41dtBpWkjE7tnycu5CDStSawDk9UD1yxd1L46AfePmhy2JBDPaX5hZ7AMKyJyDfbvwjHMqZ1sjTFU",
  "key39": "3PDJpS3o5Q9yXwKPGUB1pt7DmqPCVFaXHHZ8DXSHpcgbfAyVbGRDMxXCu5ovHBVDW9K5dT2HFTt2EhRcBzJtEoF",
  "key40": "51CQTxmBjBi9FvQ7iKWJrfLCMMJ1DZ2vK663h7V1azwdDEKdVZgYbfr9W9bXWcjqhgYp22cxuBpmTBVmCX73eRjd",
  "key41": "5xfFc15ikitngoMPS4obXairSdLLd1zaPxVodH7Zx9P7NDHT1KxKgsXQvuMH2k7MX1fAFyFkkh1JC6tQnZZRPn8T",
  "key42": "4U2Ym7532voEg1EGZuhevC7cRhn8eHb58Jj4MCry1RPkYZtZtvPCkruxX3oiXK4wNnhyV6cABMkoEjvjijYmX7AS",
  "key43": "5WKgB2zrjSoMWEXcJwr9bogEhvsL1CEKkKEQ2vbiYN6KqSmD6rN2tY3kPxdJBNFxzymHnybc5VdqmpM9rtPbNXeU",
  "key44": "8d3VsnMhSnSFzmMhjXFVWfdcpDsRjXP3uHdt2HjDDXYGL3hLxTbQGyKWva1U87Fh5BZq9f56aFA6NCnEqkQbfra",
  "key45": "3qJpiJmjTFyXWS7uWZDHXgiFBxr9MHg4bGUoMqQ941YGiuzxXrUVxb3vnkU5wcSRBcnpEFkQ2qkw9zsMXBtcNFxk",
  "key46": "Z1D9iFCFtd3fJUawVxUvR7ZiBWJMN5f3jSQF4zPt5LaSTAbZy6tXSPbrVRaZ6U86KCYeKS6VVt1bvyKcXsueSRR",
  "key47": "vGbrysatsifaT8KhUHpjY1Xh6CTApWpNziJz4KMVuDqavrWUgGcPP4q6wFy8vE5fpPp8bGNPuRMcE1jLhcAASke",
  "key48": "5imRoLJ1vVPTrEfjRhELhfMNULApgvdGgndCa5w7icu8hT8hfAiPeQQs7grfnkFy4adngvtfboQxGcRFR651LjNB"
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
