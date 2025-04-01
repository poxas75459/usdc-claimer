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
    "3CmBCnsmoS8DFYJR3ECXxeGCZZRbyWGbDafCbuA71uaaVnvD22z4GTBaWueboqy1rDAGqpgXxnrtp1uYw1m5MfLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WujwBR5wF8D9Y9r1goTNc2e8yKmfcWGzKYuvKs3bRqn32sHkJ2eFJa62x4khRf6TNeAVc3VenqR9saQdqCeUGu6",
  "key1": "66efCg641fhAncGqL2hUN3oLLmD3sdJ7LDrSsaqpo3V6iDJDRmUQqiRqi9bqni8xsYAHNgDM6Yr5m4ALTxSDvfrg",
  "key2": "8dmqFkjtNntFbQMSoyjskoWoH2d3jKxzs1NqDydpindCpakVChPKhMvn5E6FRg5RjbBxV1wMFxeMgFi41JM5Eqi",
  "key3": "rSgQhLHHTAmwduyQoXAJXSWqJ4QtyAApX1ThRiAKCbfgL1drkbyunRNfZLjAUvJE83WKSTT4YRdxiHbHMySSwBX",
  "key4": "q2Pd3SDBRkJbALx4Fym9nhxvtL7i4aDf6GvDBwxbif3H4MYnCnvjdtQGN3hraTThAUdx4tufKaqcysXrVZt1KSA",
  "key5": "RHiULBNLVaapUbZ9rm2xFUR6VeUY4DD1kMczhzK3drVGpR2BVJCxUd1ri73jEoyynYts74DrZFwdosatbuKRTzL",
  "key6": "4AYjmNUxu7j1WvcaLufbkZYCAiiRYrW5WRD66Upt58xzDiJ5azL3kaG2dtJzNCg3r5tdYUdxqxwxiZxRKgs6Gw69",
  "key7": "4BXenMXCgQjSZfK5dYtTq8pC8sziXW381hXKNGoiFEayaRBUmyZGJ6K4HYvx2dgGLEG9cSktfuV2QzcsWurDR6Sk",
  "key8": "3hVxXod5X6QJjCB1SVBUoFeDXnfxeEUgdxarzahSNpgBAYseziW9aFpJPJU9QEHS6TLtUHedMPZDhKTFV72LGSfa",
  "key9": "28ZpJ6qKButi5ngaCVPERBvK8YuVPbE7nK621sUbXt5tdCcPkmz2yTSRng42fu8MBG1YrWQ1dqEKUWvzoYUMef6G",
  "key10": "26gD8jquDvBBT5GTFWdfYUh1D9R2G9ZMSuUtdSEXpcdGbNMZfsExnyP4ojFQnRyPLepjBxAmgS5APRqfiCqV2QdP",
  "key11": "4xBqutSsPuN8n3Gg1UEtoRy9kCtLxQyQj2Sa8EpH47p8a4aqLt7LqnbonB147RKe9qTeUWqcqmHvxjnTDGbFmrTL",
  "key12": "5c9B5JFsqWP5BtGEDjAUYGct8wfnovtLMLs5ARGzYZroDR1KkPRVAhNNpNhExnmLBVUEncyu2GFyCrxvuQ9Day8e",
  "key13": "5yNkn8wuHVWJ3BUgana5YA4GmX9FbGiHDYX3ZEGcdCkELPuTqD7UGUW71SvaGyTesq9hTrxC8DXhKipDdFtVN4sW",
  "key14": "2RFtZ3Dv76fCj2oD27DmzEKqsrkzERQWYv3TqSygNUsStdp97NAqyAaYbeCB9S2ibww2DuGbXAioPCdY7pCmebiJ",
  "key15": "2auhXvebDZzMi4pzMKuA3t4gYH2nh2MHDq3Kbr6mH2DgL9vm2shADobDhySJmNy6MZQ1Anbm2QvLNXt9XSLpzYrP",
  "key16": "4889NG6JR6RjjZNkHbHsQggj9h6n2tzsDkVBSYWW5d1mXeiXKiSP4w4zPcvgfCepWfcKoJJRForogonsAofhFiqw",
  "key17": "5Xq683YwB8G6XNyG9EdBGMWD7Mq4EMT4nhvwy8e4DUbXjNr7M4hmJHBwbnAXkkWbFmHk6TTfsxvAioHjvKEdu2Ci",
  "key18": "2fXG7LEoNQJNbEJDLedWNkJBcYagrfLKtqvNABbFgWkdFg6C5AYtkW1XGm8UpxybJTMRx9sqzM6fh86oyGi7xHTH",
  "key19": "4bpLgkSFdFyV7nuWn3Ar9nNTE652SaCpEK7wVRoU1wtwfKSSjV6wDrAGMpKSMEb4jBNvJyU7YwsNSrF8PhYkHERn",
  "key20": "5ZqRWSVyFZU7bfgTPxbLBDxpgHCZY6y3tceHL9e7HNqQ6uVywDoimK2mVPugYhotaw7vDcdXK7kFnEkXMcG6692G",
  "key21": "5bq82YuLFP5F3XkttWkdn8WHt1Fw2PURZfoba38wHem8jWPPQh9nXZgxqVmj2hnJJyay68rfisDZ8q5W4tqPyJuG",
  "key22": "3Rfapbww2kqC2rGr3C8nAimABGUWoE49ckzbprfmo4nkDk4H4sxF5ijgguj3cVpwKusC41CXt2SaZR9FzF3kfeF8",
  "key23": "2Fnt5tngZpDZobbwgXzNCWbfW7ymsPXJfjoMPi9L2XfyDQ6LiHJ9YY6xeBiCbDgxyRAJeV42oHj522obNDHEu2L",
  "key24": "4WiEnHwTx72Ra1F8TQ77GDv1edBmZQPcy93nXiaNpGMPz6r6KzZY4yHSCFn1qCDt5isch8nnH3aDA7zHQ4smBR7n",
  "key25": "5t4GQDvUTTYiVeVT5HhU8z5eTQBgpmFhNo5HYUseLnUkph2qeyrYuzNwDNxcngcevNjvjoth9f3RyuQStYwDB2Wj",
  "key26": "24eBYAJYk6MeMWxVYqMhzGoNR7aiUhhWmddmDFJe7dyUnJK7XtQG2n5wjFBko3HYCxKnWqr9oY9WRQZCfQGHvDoH",
  "key27": "3oRrtaSEMRcdwFDgcUWRo2bv1kcPXGeeeSV4Ej2ZsSY2E2zeUXjXK77zcJDMN118e4863GXQkvtq52fP49yQhnik",
  "key28": "SiuRLZQaKmmyuuWHegtMjzBiGLaPAN8zivcNyubFWpw9JjCKqLzadRjJYFH8YAWwyzJuh9ES2foZgXAxURei5bK",
  "key29": "5UFnezw52K5eXwkdG5R34UbcDSA5qEMV63qfupic2qrtq9MFgJkK4eUV7EdgyogbVSupiupCtXBbjLXmdckrzGNm",
  "key30": "diCAfVA6yezkX5WmTUNqoyZkkF25p7b9RwZc7kct5SCKWTNmQg8CtLb9A4SEg4TZdyR7jtg6prLRLbBnxGpFpjH",
  "key31": "TVQYPcirf4oFPGEWwiwhLBtRGYuBAVPyACyEj4VVJXyMkWskzJA7Yw98fUDMTv627GPZBAJ45fyi99znV1JAzcE",
  "key32": "3XSF71Dr2h9ijgyRYMfogw85jXwzSKNS5hLUkvdzVFTzAWvaT7MvTxjnfwYhXHWScXNUcNk9dV6tcio95xzSK1hF",
  "key33": "2nJqqJ3xpqxKXD4uDs6PKhtRjASphqR8L7qY6Ap9PJfwegadJvwVKhgjCMfuySbR72Ch67d97WQRae8GEEEMAHhG",
  "key34": "qn8TS8jZPoX4QjsredxVEAC9Jm4ftuPurhhZTwgwHG8i8XiKo8CyogyxBoYuoPcbYAY5aPfRAdXXHfYDJXEJYR7",
  "key35": "65rfFMFzHhPHDC4ZJFozWchCM22eR6rnzmytjWQVZPX8vA7kJEUPYKTcCEQJZ7HtnaNchNZXeYn1s78BKsqqnb9q",
  "key36": "6YMeGEq45zxJ16YPju9xJ5MLqZegz3K3hHe9qUBuiB5XKnoFcLDcwg4hfyDrPcXpa9bb4m9oe2Ro5ATYH1wj8Sv"
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
