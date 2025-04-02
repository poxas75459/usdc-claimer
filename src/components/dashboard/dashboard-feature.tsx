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
    "49NsoLVoSuyU2hAjd5wsxvj8j3LitFEAQFa8QY4cGj9rSfeB4mnRF4e2W2DpfBRpf68yvpKaGFk4j3Lu2Csj3sKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nA3ACmhMjRidKf1PLReSL7aZoxpLxdp1VYqvmg6wqgHfsYYPkqNCY6fJ96jmEHWFhBQueZLHKSd2qVLAjYCKVPX",
  "key1": "2AWpgn18QXZNhGvecdWwgWpDANndZey4spnTzJXUyXLiJmgKErHJeftUdGVJW1HTekRyHLV7dXkG9RaFvkkMjk2N",
  "key2": "8SXJpsgyiHe3ovf9qVn6moxqecWCFSjcAEFy8JmYzMiwaWAPHn2EhU6o2TMrQZv6ujmeGqzgrzY8RN1GkjsfNVM",
  "key3": "5Fy1ZXD3pD9NntTdRPLWw7KfonDt31fXEMqhDJaFFcHoCX1mzo27DfX6y2rUumG7Jcp1n7qCnKakqrTTnPzaMamd",
  "key4": "4WHoPCQLsmWrEvaa3h6tSiAUvXYUTQJVHbzCJCx6YStcC92KJzJ5v2QBjdPNw5a8q6jBkMahyDYBEg3mGpx3KK3Q",
  "key5": "5UVnXZi9U23RZcXCZKCsQdyVMTLyEF1cpqsdTXSumBhbDniqgD3yfxPt2gnJTnefiRUKgWJxteZwsXw4RT4HgvYn",
  "key6": "5Nc9FYMpGo47jFmHiJ1g8URPru6QHMExernKiwBwMZkFa9WHsrAaWi122HiDJirfdpfogZaqWp4WBAWe9QF7nqK8",
  "key7": "BuUa4U2Lr8GmYMeD3eBAiTGebwpRbtLHN458E2kohECH6eFPKwo6YjzQ21NwLAPbDcPVdimnAJNPB6iqp78gSiA",
  "key8": "25JmombHAFWwX1fNUC3uoPHaTbb9osR8JbBGMsJhXukhPg5wpDY5anvCwXTDHLkxXS4duRMPy4ogN2Li9cMm6vwH",
  "key9": "E4xsuRkoUeekLjADR2invPhXZLEE1zH3rWDTjRQiMnU51K5erhUHRwpJLzonircHMhbcHq6BJPRG9H74sHtaKZd",
  "key10": "2WWCdSmNBiC4f2b88mhjthQnTsMBB9BXviHFijmBcSW7vkbum5KPqsjtk4wjbJtuvtSPJS4JKbSfsj6HgsgNqYG5",
  "key11": "5Lg6rzhsqH7WAo9YNBEdtuvCXxKUmANAJA1JsZoNAfEKRjw443RvCoyPM3ePWMZnzidUoZLxqbrYoXVVf8soA7wA",
  "key12": "yEaiXtZBdL5R8epQi1fVhxvBqgJkzk3btjC75sKv9tcxB4mZZxFVSB5vBWNmUE9Hjxh2hPakzXu1MQxQmih9V2E",
  "key13": "RhEebQ7mH567Qq7EqLPS8AmUH9Fm2t8VTyFPZ1XuStV1TFBFDDuiJMFNKmNmjJwpLT9Cj2dGV1DoDo9Ai2Cpm58",
  "key14": "59uiAJiAPciDTsXYCUZcMM2uswdahic7vwCG6MBfY53Mru9vYepB2vbkroBBo3ESxQVjKQ1KD6rcN2rFqohGo3Sh",
  "key15": "5xizW5m2UhT8GfDuENVVJMhathY46dgDuAsH5sRotmP1PwZyd2ubYhsHg71bGD6RQEz8WrjPLs62TeCde9SRFLhg",
  "key16": "3snbnsjtTUmbmkxAHMBfsFGbnft51FVM4Mtnbs5BCEjxFs9b8a9wqZENVXGfHCo9TUNCoDd3xQTZhKWrmzyeCGjt",
  "key17": "326z3UjAdiNDjc1nJ1A9cQNCFQB5vFBGNrTzinxJBVWN5XEdN75VUc5s45ch88WQrenCK1Bt2DnAzxagaMhPSK7r",
  "key18": "M9mQWiPNxXW5CmferLTkwG2JBXvbxgME59QwFHxHFHhuRbjeZDC6cEeY9pnPMtbUdq49hXr1vHvidc55fBEraAi",
  "key19": "4iSeHEcu5zmdMqE6my1qx9QysZpASxqELuTAh5fyC83ohnuoB3xqRXr5J7ogr6aedyUFw3WVTpMEvLd3aK3Unimz",
  "key20": "67c6wNwPgDMiKXcSsMwRTwQjNt49dQyJDjRVdNW8i8uNqiDpKMSPkQsDrBby7sgeTqESsY69mE9ymPcAWYDEd8yX",
  "key21": "3JZbvmD5F2KPVgEghDis4aHFULd1EvkKBUjqtePSSeRgQe13brQvfUPsjm3bU2H9Vi1Y3kYwLZz3wPzL1YXVrVf8",
  "key22": "5ackRFMSzu72RYK2yUngPiGhM33ccUk5GVk6HQMMeS1Hq1Znbxz4s9kkQDCGnYaNRDExcU5DRsF2iy2KTnQYSydX",
  "key23": "3jisKXS9v7Apptr1C6QsLuxRuUwLWeE6jPHUPD5nyKvtdvCwqmWCjtWDfZTh3CbxUUfGtdZc9XMGKM1SvbGiiwRR",
  "key24": "mW9QBHgZtceyJspSc1apQsPqhVyE9CLQaNbZx9aebze9SLtJHJf9b5XmFtYTaUuLMcWTNwB3ZL2jSiMdUfMMrBr",
  "key25": "ZA8JFDwD1qSYAkMRppfXpEPibZDuK4wkd44SnP4ErvoutE4XcCsxkL2Yueg6CUeLLzrF8pxJ5sUpM21SsrNhHYy",
  "key26": "4Un3v5dkgejEnP6TKLUBFKd1h2tjx2HSzKa4BphPjQQEocNv1yxJEi26152nZPFNNNYAM5oSyfMEVRNJ8g2pnDYt",
  "key27": "YbCwHW8GjPsF1Q6dhKgRLEeNumBA25BhPiGrnRrGYMYkPsGhRTQdDtaVCxTRWGafZ9tQhFvj2aApg7rG9ivtrMm",
  "key28": "V3u9GxT5khHkuc7eUSCroiaG4tn3JozhxHtqisRxeNhDgr8owjhoLrSdERucXf4eHn328euu2CEt2td5gDbaxJ6",
  "key29": "5uTX4wjJdmEDjcwpDmuiRTy7LB6e4Tn8HMCvUfkaF9nrC3dXtdNvv2xvuEcsBg8xEQ8wS6EfzrsVMcMjQEe5Z6Sf",
  "key30": "aPLhXfonP5UMJyikSnX8rbc6BA2CPMa4jgFp7Su8yowHeGH9mpYdY7muvbGZmk565gfpEB7PPYQ6ibqMo9sjK67",
  "key31": "2EphXBix2JdJRawgm2sEQVSZ8MTHKBLmBTUBvUG553NN2WbNkcooDfA2U15th5kPwAKUZAY1YoSUezQG8d5gbtgN",
  "key32": "5zoB6g4yGT2H2DDna3eo1NNLtsPid8ny7n6Kn8XsDPLBVreEicVQwPvR6PsGzx3s3apF81FE3vF2TeiSSLhKceBf",
  "key33": "3qqprZH7bbrCgH48o3sgUHgKQazWS5RS4bZKsLr5xgtP7yZ72fpYy4Gyg3uPVCikxp2TmbEc49anX4qBY9FKqVq8",
  "key34": "3kaysMD6ru6bgxF9S6RR1RbHai9jyCyxbwXuQmeqb8zNXXnWgeis5PzS1EGe8xcMPqffj8tM6wsrA4zvJwYedmmt",
  "key35": "4zqhYdLntpg2Gjt8ScpaAPycrWc1BsTBHyYtPDcb5HsBd14muy2nEhwKXKZgpnWKbnCfxtFpbzhGr4xkEa5Eyf4d",
  "key36": "4UAc7CYghi3AcTisZ1YbPNugCg3Uqs2fKcgowMfwgYkQzG2dLXu2Rd7SxBfqB6DgGshEs9vsEpTWgtWwoN4Zdhk8",
  "key37": "67MscuYuMoXdYeGkhankaZViF45nbUP6RKpDRqKPhu3X6t5RajMB3yFxScyZhnHmuE4q8aC745ygfxtPA6oqD9me",
  "key38": "2jaFq4EZLbou7T6MhC4fHCHK4P2GasvHePRsSX5QzEktMgSSWhc3xH2XKT2J2bUABADF8nxieqsGx9ezX1SnNjs3",
  "key39": "5Mfi2nzkAAvQaKoGwcuRPS9N49d6M26GThL1diaKHK4UBxJp9sHhDmyPMkyqxWtxEaBZpV2CucGjZiquQFKWD1B",
  "key40": "2RwohaZGLJfLQHhgwyxv6bcEdCGT3Bi5nDHEiKhXAC2XJufhKx3a7346oWyv1u5RoNg9mnvHdPR64AiR7HpwVKyG",
  "key41": "5byj4Y2dCzRNXKkoad4RYUtLzv7yriWL46kwA7AR9daLobucsxD2sCpUTtpntqutkDyfbqo1g7wNaXhyf53ejiTS",
  "key42": "2GbcWg9BBuT3uvoYSqwmvtwH9FbxGqi1XhRY8XLr2Xw7rP56V95JngM1zQJdUno5Ru6HcGnSKrFTDcptxf4RjfN1"
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
