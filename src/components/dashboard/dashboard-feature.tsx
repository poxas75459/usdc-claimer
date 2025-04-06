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
    "42grN7FGJYGxvVkcgrgpUhdavPbvBnxDeuqNjYKCGyM6HrKnxQZH6SQVFXcu59qrKBuv65GuD5ctxYbqak9ckHUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MXGDc8XjgwxuKfAPfLnsNSdgJWWdAsq4ErYLJaj5KEt5o9pi2wu8vrcDEmSZfUM8cJWoV5zqCFgW2YfNQb4ri1r",
  "key1": "5HEmJUoksoo2o27qZkWzfjenyzWM4SqMM5WHwB8MiRZD3fr1BrtwbxwcQxQu8QpR8WU77wF51NfAiLXPzTUcrQMK",
  "key2": "38huijUSRsBKhwoMnwXLTDi4PXy9z6nRKzJfYGeCH26TsPLreEXUQUkzeApuVfyqEuRDA8oEphugL448pgU2vDp2",
  "key3": "5kCGq5SQGP23ZcEFo4ZWKx7nX4wZ3dTxFMUWQKpSBEtysEtdwLRoeAid62ynXLF8chrMgSUvVdZ4tkTK8oKfrEEY",
  "key4": "xRNDUHghVhij7DzMG8hiJzFpfPg9e2tzeMU8bM4Ycvx91Rt73D9TtAU876t2jxxSM49MHTgMoiv6tiHPp7RGcez",
  "key5": "2TDPCXg3SVDn6Xy3rddJGVBoBqkf877ML8AJqvEGhdfhvQJ8WiKTHonoTsRV1QYGcMvTMAx5JcAznk7CtZjdE9ZD",
  "key6": "4Q45DrD8CacmSGxPHNf8kWYG3yGomNHuC1wFb74EvxywxgQNE55qWWGue5MmufQU6dyco5tw7JxNjJUcwcSyRs9r",
  "key7": "4rmNyQRmpuvWasyfcKNbaK3cjpxNgkNpwdn8E2HkwaSaqpWMBwUttbEq1zpgHUZqCmpkFtKFDoLvf59ok5gReLim",
  "key8": "3ELyMx8taGUXwYVY6hFbyaEoZ1UbxKHd5GyJdhUVTwv5xoZ79mKkmuhpeQrZufCh47EjYXJsWnNZFtDkhzzzYG5H",
  "key9": "3PxsrmUMmVXb8WLPC7yDhLTSEjvq2n5Gmwpsr5QJjG2k16bQ26mKZgRWpN2ZXbbzdTe3zNbhyL5EqkYuhj8uMEG5",
  "key10": "3ckhtRviKPQSQe1CvcieP3RniSatyMo6yeH3Z2BboRKaUJHudGz9wwdWNEu1DrEpP9PxtHLvEjgkuqkZETSjFCbt",
  "key11": "38wdd5b89iSjHS3yVFNfQnZzYkLvERcwuqzMhrCSffX3yoMaEQGogF9mWK4rD7uHYtDK8Bkk47iq7KjpmPT4cRvL",
  "key12": "2PRbd6dXscmY9aa5bK4VZn8WDbuMmsQYVcGsTcRpuLXB8KX1T2dViez6xaVap6P2YMcsGVwNssyMxDxWTDKmn3Y8",
  "key13": "4vB7o2wtiFDg4UCK4ArmifLTfTYTcQKxEw5dyYgvtptRu8jR9yjSXizs36zhZuCATVUduPY16P6VemwXPJC3j2bq",
  "key14": "5yS73uTnjEDmQqhDSWHbCRAxYbLmB946EvmgCkN4g46p8KEELYnG7BUVvfwYvFvGu7kofRYQdxRiRpsiMKEKjZ34",
  "key15": "2PZZt3JWjXRDMbSTQL6L2rWwstHYiAtWN7m7hg1zyHaSaowkr93ugAMvJRidJDqaBkGRzcs9r1VTXFSsAWzwN4Fk",
  "key16": "2vF2JJYhNQbuVjGmfTVrh9UTrsnSXgPnQ4XFwCGKPmUpequgaAZZkcZZCPqHGa6XkXp94REC9tgoqVLE7Ab7u9Fc",
  "key17": "5TPKiwzedvKpsyJgdsF2x6N6o5GoXianGTRfVrAwG6yQB7j5vNWvH3zRHR4hCZCUmsPGHMp7AHUDSztqKZjTGupT",
  "key18": "5axM1nZsihiLYytCdAU9364WYnaBipVsSWRgYbHgfnEsDFS8wqt8QgHYuX9pohHR1wnNdEz8tLFjnAwsE6t3zjNv",
  "key19": "5bo3MWGByckGRHtVCQ8CLmzrxLiMgP1dwzkVgBY3L9s7ysXvPi7DWupcHQ8q44JHshNfXaja5XaTpu7edsRmzYvN",
  "key20": "5xCoPsm44Fjt8sKxQMTWTFte8BgoCXLoyaKaguFfWv78yN51qbNFc9UuD4GAW6yyFRUNMp5f7Ugx2V7jQJXWcfP6",
  "key21": "ShFSS8q5J8Pamu8EVf6EW235BSFSek52WwPKManGNc7gJP1v3ihDgtuhgWwd7TFNng8deFbWUTz4wysxk1rRPQn",
  "key22": "5Q1ubGdT89DBg9to4DcfAW1XcEws7fyE3XQCv5ry5Q7LjRykECXnP7YNqiWJjqZtdLbuvTzWMdnEqZ2kJdcPD6Cj",
  "key23": "ErcurrFto3RREB82qkvFhMpZo9wsETXP2Htvm59e2dyU9vYrSgrxchK6DjXMqTAt6HqK6yiRZgVJ1B31jjnyWKo",
  "key24": "5aVwp8etdKFcaXNaZz5NStxVvbtB5aafZzSYngHEie8suphAEUHEa5EVJUbL1unSf9qD1APpK5xNZ56mPbP4Gpkt",
  "key25": "2ixiitd7pkdbQbwyW3bS1kpR3uBgssonLBt97d1Ku3h2uh1YhjY2HMjMgyhD3aVG512q7QLmN8hCZVfD4CFzhBaM",
  "key26": "3MZmZgPh4Xp1MG73DtAMkJE39euBGXEmrWbhsryjVS7tn4nCTUWaY5D6rqJfELpyMMtHj2SUfpoFVL1dx2NbYdJG",
  "key27": "5YJA25g31YYajispWyyxSLqE74EA9cFRU6faUc59L3t73aSkEJ2Uqq6zRCDevWZ5jM6fGcFjGnLhFz7U8aSGE5SG",
  "key28": "3NSpkbTng7dLYQrAaPg9zXJNhdmszu1MVJCEzAMGWY7wkKyR5sSyfhc1M2gEVRNfVBXMXrAUr94MZFuMBJYtQiJK",
  "key29": "3DNU2R9q1gm4nLRQXLXaWmqXckMg72aFhF3WyN4EDeeUVweDDbRfaLBHkF6LtXnget8bbgMExeXtAeKANB73dQGT",
  "key30": "51F3CqNBFGYZj7XU5VvzWgYUEeq2FXZF2bbPdnuVQ515HDLidWaoJTQYZm8XFEoHhWaZdpdXEduM9BzmpNfyzeMc",
  "key31": "3p7iybw3Bj2xUkrj857ZrdVcZEJwqGgfnrN1P7zzvgJhCYkhsiYptrDeGv9Ra779MeWB1JkCbQQEjrz7tmTWkUuT",
  "key32": "4jSvnyGZ3f3Me2Yt42YqqmhdG8BDpqAyStSeJseFNue4DykEg6i3VtoFmwbjBkiodHg6XtVr2dWtXaJ46QH5SAh5",
  "key33": "4wVZdhQ3v8WDvH1SHqQ1CCJQYNCoW5TaMey4AiNDWCD3L3Gg3d81hMuQ5wrfmsSma7PzSoEfSimmFScQaCuWqrz8",
  "key34": "2WDzxMRop5r1nraVfg5c7zM2F8vzB3Pxa3rZDK2NPNMAUasmVBqeVPA4ieXdeiiVV1d4731qrUsWVBPTnTgAQRoi",
  "key35": "pxyAEw1pBjD7bEiVdzTvb1zsJCAjn5uUaQDswaZrdp8CLTAJVdnF7kKsuaP9VkWLhb6gpKjPofrdGPRtRAR5kbT"
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
