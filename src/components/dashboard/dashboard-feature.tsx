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
    "5g8HFdctPkzmZZ6UGsvYpVQC3ZfK8r9WQAmwPELaCuiNSLSC2TzeyUUk2ppsaERVBfFBn4RoTgqYcVRgq9xgRg45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eV2vCfZwqT4Z2GaoNY4B8rxDEEos6crxwsrfuUCTAMPmGUjc6geBEXmuJ7fcou5b26rrua6kpVZKw4cnon6asGU",
  "key1": "48CF9H6LWJMYYSg1FjDwP5vBvtjAtqRmsspHzDnjZcyTtqYfgiXJkEsFAyVhvbkS4i8URQtQC8YrpQYRxLe97Las",
  "key2": "No54fK1MDq77ktd3i4w4iVzeqrxL6ADkKdfS6GSwo1zWoujrw4W56e7qNyZTJ7neYta61wMSxN5QpD3qcTQLw8A",
  "key3": "48nkmRpdgQzmVVkV1mgKwkeyuK8MDy3azg21QE9DFNj6dPT3DRHMrwyDkoSuYEEGUDrxVowa6AdErVxydTvuizow",
  "key4": "KSFC8WrxttG5d7Y7JKKae6Nvm4PEXyaG9wjXRQffkBr5zCYAoiu3nTkZ4aSAiRK7tcUV25A5RaSmeRYvRAm8HM7",
  "key5": "2tXStD9AiVnBjwvM8FnEjatj51fx37ev21nBy7ms1ANN26bNMoD4QmBgcx3ypUuGjND2up4x2shMqAPwydPVUr9P",
  "key6": "2UNCdBxCZbaXJbPY2XjszRJRPJTFeeJdsrTvgzTZP1Sv2w1eSxxS7CXPK7h3wyzvgbsmA6tVteDo39ikFAYhuLvT",
  "key7": "1J9hrwLjXHKWNF6gML8e3agXu1av8aaSeiX3FymU4ivn6JNMMHmRYuhRNutGokCtyW7YzfVo13Mvud7xASB6Bie",
  "key8": "aqgeVWdfZRMiXu1jnHXso4uw9Y5d5BFuNefg34ronUqdccASjAVPjAdb2Qj6VeKXvZxu3EkkNJGxwyixdfBau7v",
  "key9": "5y3JHg8renQFhWWis5kE9zK12PRCSYzs7CPu4CHqSeA5AeQYGCouKDCdNHV8oEGadNwaYJ7tN6NCzxJToSbYp5BA",
  "key10": "5DzCidZkR2S7chTY79mZSd5kCjpwarUZKJVjRgFhSnjVtuM7kxTPqArJ7dtAaQTeJL1Ng1oAQbKEma5MQrsB2NRG",
  "key11": "5cUsvvKyvPzS9jwkyNpzQecjbuX23ZGcJfiknMZcB8uoZGXYvVxLr2h2enYjw475bBEE9EQ1cCte7Y1mBo2rtfDr",
  "key12": "611EAe9RqS5ewC9bDMkho7udS6FnJZBgsy4v9iBw9cSHKMi7Ld4B5P76YMpJKzf1TgkYaJ5NaGFJPoN5m3omK83y",
  "key13": "347TVm7no4zbSLnmvhFqgQdgJHMpu5q8GLfWDAT82m5g18r1z915fh3q3q6FcdLhb5wLukU2ruxZP2Dp7U2xnHXA",
  "key14": "2z866VW2Hh4TVGZDv2aUSDgzaKVpwxqWmTPLKHyVckUrquXUnidbp65mvBrX6VswQDZYiNJT4fApSyJDhfaL1htY",
  "key15": "5CxtGtMLrFyw3vocWJ2PvrP9RBiqze6EoUWdv3VtmuNyJpDsLt1p4uTBQzcEWRTC1tN9q6Z93a7a8Q8hevNsWbsX",
  "key16": "5amVgn2njkLbjsqeyMkQQVEWhEwtvDitAJ4WmnhE5PnMyxi3fVYD3Mqep9RW2gMi9AEzr8CfqvbkdQiSidtG9DE1",
  "key17": "3i1S2NepBpfmWoadSTvPUJEki3jZxVhYMpyxzmakCCPvw9XW8kfCgGHaRQuu2BJitiYUbq1n69KL6Dt641yNg9d9",
  "key18": "44dDDA2KSA7rMHrQCwXk1GJuEifKuz9hbTtpXUFaGeUsu64z3aejdF5JPikVZVkTueMdjSHcgcNGxGrPRBTpePb3",
  "key19": "2zP5XRjRtzE7cfUxDdkMLEo5wkY3V4EPzqjjNMHbfyRUf8uY7uU3cYJibyZcxe8cXvnMFqsktHFyCFJE4SeXfYCv",
  "key20": "4U3BkoaH7ksUMMukW5TB4hoCx7HRJ9fWDF4UM1XerL4sB2JvkqxjJ8wuDgMft6jNPqkq77H6WbRDG1of6B1uZTsC",
  "key21": "2v3sbY2xRoybgnb69pbsoh4CdfoYTUUbSsyKPpqCmNXeAGEzVfmnuJrQ599cxy558t1cjTkzYHsqThb5UhpCaD8T",
  "key22": "6GrneJtEgm73Ae8ttPGsfJx8HDKbVnqFdLmULr4hKp1hvJKsp3uFtVx2RezzX2jiQqVjFWPKjMUUSiVRYmd4C6s",
  "key23": "64HU1cgvR7SDHhqaVvjH6BXuU1WAzAA6dpPU8XciPhkfQzxxKbEUgTz7ETUNcptgXd2wkTxPRLPQzsJ7LvsmivzS",
  "key24": "5FuB4fUn6wqXT1yThRTBmwkFFp86g3mUfiwHmEPfdpaGsmgGs7mVzLQMszSCoTHfyAyaCR86RvhrfqyfioEgVJqw",
  "key25": "2MHv4mj214RLZ8tbgPuFek62kb1HxTLRDtCYk5SdeBQE5kXMBK35jUPWV9TfeWCKtUzdfp2ruJF8HJDGpcVBmuh7",
  "key26": "4hSMeZE4f1etH2QZbfV7RkNCm4TLZDvpBUr2t4hZVP67Ru1Bphu4Se1UZhreuRLFwWYuznJfZ7GhKYfTNuhfEab9",
  "key27": "PMoVenctRXzepMeL8BYYRTNW2sasCtekZnDCD7UDPeWNm9ommwaue7ErrFaDWpEoaBAmHb9yGzYiAYuaQdDBT3o",
  "key28": "483YPbbSFw6iRPc7kZGpC2YTvd4zSpuuGga8TXmQwQNH1qKX3JscPPDU9B4ioFraDCjGUzfknSVKtpPVGHdGnMfq",
  "key29": "37QrcTP9yvJBX19od7mS5gPzpaoCabqfFnpMiBmmEG65m2vB4KyxUkyCA8oFwuFp6tAUfTt4rjaAyaYdrmWGxy9",
  "key30": "2BRPJXmgBqPm3v5iZ6E95f1Tbc8TSeSLQ3Uo9yiwCkRcR5WBe8p3PVQKEqcDt6EzymjCfqaBaPSyyyDodF6QR1kr",
  "key31": "2Sr9HLnUnd2BXE2f2dTeR39xchG2b9H739SwBZY8hz2LT14t1Fqrj2DxwTLdCcE6oP9ugF2EXUbxPNcNZg7hnJUe",
  "key32": "3mpBbC1YjCBuGcZg3PvPgTXrN9FoKc7WtMUV5GKpvMSkAvnyErTjGDjNrFjqoaPApfS3C3SbYBAJxjBJW6yn5U7e",
  "key33": "6KsNht3Y71eGoGwVReZ9vJ5pf54J6trqLTsCEnqX2cr6WSPnA1JD6XqTmFYySw6pixqgL6qnuCJYxggrGA7KcPX",
  "key34": "5KAzdQjJ76FdM6zeumRUzbwnEswjGaSgUQFLa2ys6oU29NPCWzxTbf4adUQUt9qjk9nS39h2ELsj7D6qYrcyCLcP",
  "key35": "2t16tYf2mYyvs2CZo5x5KqswvibxbPk9Vq4h4goJsmhfADLuPVD86XUyf96Rf3zmMzxuMEpxy1ytLih59MsrnRVX",
  "key36": "4FbxEHoJBFdNJyJWpK1gDrMAX1R1GBV2rPauLYZ9KzEBunwPaPPzEjqnujbTXPTeTWM1Q7SjZpgy7dYST6s8LJtS",
  "key37": "24n8vMbudpkv3RY8ZZo99ew7vPUWrKKFAVYSCmK38RHWVypEw1LEhz2C7QDxVukDkzuQd8mL462Nd2dvRAJoGzNv",
  "key38": "V7CyuiVEXEGtQ4ipBRikaAakMQE9XH6vm7oGV5dUJNA4utE2hrk7VbUePYYGKvthDAFSvxyhWSM1myr2AaPD7yQ",
  "key39": "4knWMd3T2YUJwYN9qUUj7MEQpLMhbAZCHGMSjcdKSQkQBVGGkZxn9umZgogvo9qi2Dau7d2W6s3N5cbTMcyzhKeQ",
  "key40": "2xf115eUR7GQmn2x3nc5A83GmpYsWZdR9HdMFFBcHPGZnMCVWqT2hKbsuU6W7vTdEnLG6gosX7KrspzjWnN4DL8G",
  "key41": "3X7tfSz22roDQwRmN3ZkE3zd9Ckm8nEDCafdgvEXMXEywJ7KVtX3g3ySk15wBY5vwoHdyYjyaghgPWYnMCWus92d",
  "key42": "4EvbTQcFfNHxyAZbGc7sy7b5c1eMJCJAJTpdiV7PgD5gbQSCcQSuMy8MFDKqqVWbDStxAPr7WpFM2HnSC4Emb4Wp",
  "key43": "UuRM44kwy4WEwhGFv4E3DgyT6uiFhgE6LGsd6xcz89qbo6F6NUg175EawARnxpS37qXDoBQrRy7F6fCtjMaDTLG",
  "key44": "3roYwiJw9xL4aHzxKsNt8Haus9c9dzVaeCLEjKsKZW25ShEaSuYVNNqdP9Ljz7jh2K3E36q1h32T34iwWdTAGa5e",
  "key45": "31zRHzhKWUeBZP8eYC55nnk9CHom9JxEzYfw39o3UELUbAQsmvsstYiVcMbpCaXo9xUDG7gBEBpkGjjm9EmWPvQn",
  "key46": "BBccES5AhS1BmcKjduYXNgrvgiaUamm62fBbLWo4qqVfrAcG5CK9gTF5HBCNrPVd3MFnSdRYpzL6yBmPJYYXpgX",
  "key47": "2jYR7LmqNDvuwhiSjzCMD5Zey1yrsWC74Wfr5bGzLcQwhM1neDRp3E1QhcJXoDRNbkVH8HrFuHQX9b45J8TGwBhk",
  "key48": "4oPgvtqUDqoVc33aaAjs12zT2bpLYtcDoVG71yb9rEPL3X55tYMPPMQij4hr2Kqo4UVcV6ACisCCr1v58EaS54jL"
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
