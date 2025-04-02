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
    "4CEfT3TMBSsVqwfNJ1DWUXSpVXsNHUHfEuY2bw1tTCeXDXRjs1AdA6S32j2akm6wZNaCtSM5cyJqHYT3hiVrE4LM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZS6J3uCbScX8fsv8kbhnwmfCEhjr3A4daXuQKRj65Jkutr4E9NXJT8E6C2f4xBTv5Agaf4jU2zXV36peCYdNiE",
  "key1": "36NRkPV6kTmBEgjuPxzChpCZqEBvuG2fhcZWPkkvk3aZu3HvLMW7YF7BMG6iL3F9GjTww3C2wBuewUFbjeRf1aci",
  "key2": "2UT5PiqinTE2MaSRnhD1nxx71v35ohkgyXDTtKhmA59PLHQtx6zAomrNiYp2DG4DQG8SxHj5WU5D7sfyAn67JtB",
  "key3": "3Y3mgTv44NM8RyawEsQS6TXcaXsKjYofvbmYqa7mZu8YePb7NuvQhNTnsm2mdWV8847EiQ5r3oKSC2xzYLc45Y3C",
  "key4": "3doGimWk16U4EprNq2SyjhzixHmPTYG5tAGa7nKpSTq2C5CzHTd56AD7Sdkpz7sWhG8TnyrcT12Kh7LxSbUbG5dU",
  "key5": "4xRVxrBTU2g7Jwe2df2HP7qtqrXUCQ4tLkq6v9hyb2gmCHidCteBqRnk9A1BqhKD57EhzgdJpHcCqc1etQSa1k5r",
  "key6": "63ibaHwyKpu57Nmbzj2GNbUqFuT9rRPztAbnkd9HeuThiEgYP94CVxUGmWWBqnPDksxMkkbLMsgjhU345VabBAmA",
  "key7": "2N29vGNb4XZjm2UTu5xZgy1zKXz33nyK5kGSGTN4VQ7AXxpycySrugwrhMRLS6ZjsKiD1vogHnU9drL45BGvAMSo",
  "key8": "2BZkgDDfprESgFLrdbQEZydCaQ4Z3tJ3SBgv6j1zHoKbTp3hoJ8wNcQxpYKe1vh5gKysAGge3LVzBhX3ezf7zHGg",
  "key9": "2KyBTVbyECXkx2RHEywF6YqUgeizXHbiX5RkuWAv2rLZw9qPkAp6MjRPkSqySTnFnYvgvm2iun2uCVWZ8HeCi6Rk",
  "key10": "2wmqnvPPjV1PnrkjYDkZfUxaP2tNbdJyUwCJS3Z3SzeyNTppnbbjJPC4w3anDiRJwxZcLEDQqLNACz88WWUYVUeN",
  "key11": "3uYmTGVQGzLQsCDh4dS2KkQZWKWhyvXFq8Tm4KjcWBxwAJfYu1jtp8RnyuqBCPT5YjqB89rAZXr8nNubKrBoACq9",
  "key12": "ckiJM9nmNfbTQtbrGGHcRcFfLsj7KLx5idsxdtuXwuvUfv9dQT3cHpnajVehhEjkKmwYCSXRguEgz2NP6beuSiN",
  "key13": "4odehxdMUJ9pWVfwyTD7q4bNLPChXwT8uVo7w3vtQHFdb6QpPiYiGQHTkixvLGw9LpsFjM1CRcBvUwnnSrfE9xMX",
  "key14": "4f8cz1mQbe8tngdvgnnySdW2CfcwxAHSQiuNP7KRYGezqfEn2pasZhPNGWks1qxXTtTNTRyoH7DbAqxzc6VjvjMb",
  "key15": "3kuhVwkQBsdPJjVQMPA252vzmFTzUvab4dGFZpM23cX9fW5p6WiDAqnajuwGeowaCXu3bJo1urT71bGtcxtUnHb1",
  "key16": "5NcSMnQwPRe81JHYbMvgM1NUDy2q7XcYc3YzAwUg5BJM9KdEvv9mvDJbiuou4HsRHydG2Rzpx5deeuuNh6FDVEee",
  "key17": "47yd23nCrNQq3LBDM9dXtoQqdD8C5vei1ptSQ6iRhr64uA8orVaGpcpaqiMcdVgdGExA3rAUXURRwyBftC199J2a",
  "key18": "25kyCRFHA6kxHhTjPSkZPr7nXy92Rbg4k6oxRPoniLLWcMDLrGaEvTGAHqysK5oBj5fJAPD5uhe3TxU7MsZXp6yf",
  "key19": "2Z4xXznEYK1MuzXTMuRUnF3QSm6nXKhHRfEhrpsmWuVoVZhr51uMQoVshzM221tAUq1PfHxnFo3vCisYZmXGpV4F",
  "key20": "3ny3cSWu5WUqBEw2wTfsbf4rjfezS1yAi1LfB59BpkCb5HkgkieWidvNFVbkvqcKFdGMQb72yvMpDFFqLqp4nCZC",
  "key21": "2EsPgq4cuV2qqmzbwhG4HcyBGG3Ppa1bWxEDNkptAr7o2PfV3paqQ3Zgy5nAHWHUKXpvgdd9SWZmJCzyMoQeiz8N",
  "key22": "q9bnccvcdsqfXyUYECQcZpJzvF4dGHPirWKaSyGahsNo7yL8QeNZvszYnomJbbB9UWoYvZYoNt29poRWnnfXsSW",
  "key23": "3ZhJTKyePHfAaUZfG7FMy5CpgfDgfCXPQpKi6oja7SfgZyqouNLgUKogPiuqQUxnYz62Std6wNgKf3xCw5uony1P",
  "key24": "3ETrNTdFgkn3NNohxLG87Cd9f2PTX4eHh1ERCeFSiWGJDcMNTQRqBpa9e9vGf7v466e2jPQrW8GBnKPsG7jnbvhg",
  "key25": "4RHTgEWmGpmYhpsj1TFJwaDEzHa5pCiB3AXJ3EEAEH6NKwPAgfuJC4txoaVQen8F8ofS2xV7MeLNW3KYZAz2zXwE",
  "key26": "2rUtNxPAaXKnktErJmKSVSh5uHqz6hfR3GhCaVfm9P8VRvqs7ZLwB3dvUvPTFDDhXVZrb18sdZUisTgHGidfLTDp",
  "key27": "4aCrBnvi16DJFgwL7Gq3i54GXz2CSA3jCkEDq99dhfRR6Fk1KxLZt4EFNqYWqJbBoAmCeDge3iC9rvU3LYGzwq6N",
  "key28": "2DFdJNoD16t96zKqi6e2N5rDhxBsU5A2SYfCNj6K7izsMaATiCttqDzyTw2e5TXdGaq62RXrXwEcemDPjP1FSPLs",
  "key29": "4XmzU473jdnrDjfmitkFUAMG8vYwpFF7zri7cRzqNLaWUGkAjZTYjZYrJ6crBa4yJEnnPUSZruo2PLJQUVXXJRQq",
  "key30": "2upxG6YQ5QhJBsgXqnefvx14CP9qBqUpFd5xa8WLAV8FDv8PzEM78dk4ba8e3iunehGvKUdxx3a15tS2zUvdA47q",
  "key31": "kYZiagD7MaB315mA3VnodZ29PfxwkKmm88RAjHiwgwSNYxNVq2frbov8GZyzoUZWdPAk7xvTaPHkPHfJYkQ5Jjf",
  "key32": "2QjkRFeWcrwu6DWs7q2aP8e2WnAodu42Qnemqung6oxp5kp3VKoAuMMorGGP2q6cQCHyPc3jdqJD68FVCzsoPhqY",
  "key33": "F7r2oSWCc3t6HWEB5bdS43rbHy2YWkstRJV42s9AzwqtiCKdxxARY4sPkhkzDEkvoSSHT26yBFK2TckYpNxRBi9",
  "key34": "2wVzNiwMq1AkcmZvDWmGhhspXFvuC7geycM1d8gvybFdmViS68BXEQ2ijQydzoWZn5PFSsjQXGSyCPCcAQ3axpys",
  "key35": "pYwm6NSxNxhd5BrdWYkKj8Kn7yxSbwC8QsGEizJ26FeMQHKCDVc1kCR2Bo21GGRXDfcHhEV54hLmVNcyuTYNiVg",
  "key36": "64zh7R16FU2EZLx146ZpDb1sgA3bsYPcaQphAkwAbif8LbxrUdRrESMdPaTanRXcgm3Gi8qpLRSXpEVGAKcMcxsK",
  "key37": "5Foqsn6robKSvSKQwL2DXFQmr8bnCp9mrjXhgc7KyJX2YxpxddL8AX7Jvs2Z1nnPZPbs1bTrUreMGfaFrs8xQqRK",
  "key38": "5qY9vZKmNfar8FDemb1LyUK4bCKAQomhYVuM495ndA5dGUJfULcMVNRS9ekj3eUiWGNaqprCNyT8hgXPyHWqdtWT",
  "key39": "JgVGC7w3sACMo1sx5FBx3hsyuTUwA4N5c7dYnmPNaDRUBcZcfi8h5LcNMCVaNs9qMy1r28iC1zJJsAq1E4ufLZi",
  "key40": "2qaSh44v9xLEYB9ey7Y755dqwARnRM2W4fdvindjhk8YUWZvZSgMZhEWHh36eeYb2LRoBmT3gpxQ2fRxWKJBbses"
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
