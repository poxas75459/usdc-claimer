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
    "9Pe75nUfHW9QLz6opU5FcYLX47LP37JDvXsb5VfyKrxobytaF7dDTFWe815KH5rsmjwRnpvAfTdg8LaeVVqKdzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UREssP9PoRfvqAqmsZqjbmLHWJJQgqPtxsJGzyVPBZ9f4F8XSj59My4p5w27ELJanU5BtCsFCJmAoyhbqBuqdPt",
  "key1": "y7VeuD2VPTQUXCWPohLyAiKc9F66b9TBwRU6gvdKfpnvPQpXCY4nxyQy9G3Eztemwrxqf24wSgbjb8AJGZcvLPv",
  "key2": "LZk2S6DUKgVokGTYnwopijTXDfYUGZNiQqpTpncBUycLhkReH2THmZsbdBo6tmXxZS9Puvc5muL1Ymkm1KNH8aW",
  "key3": "29zxM9eHCQqSkcMY7pQzvKHvkea6FLMRtcaEgNzaYmwruJKtRgZmd6bMCMFvuWBDVnzSDbeCzsTtG9SRkUWEqi1o",
  "key4": "3XHasioxtEzHyHBTBnvJ8e8JnfYkJUffh4yYhLHpw27MpTudepgeqZmpwxsSRKj3yqn1EKBxT5D2sCmw26zHZf8a",
  "key5": "5r5UZtAqfEdvMNkfHjKqnNxCr6LU2KN4SBBiwYY9QJF6mNZnKXByygP8nmT51ypqmQo3VdBuEE2ZtY5cCcvcvK5",
  "key6": "2fdbsFoE5sXghVMPyVQYbJSTS3c6aMr4HG6ppsCse95hSsPn8rCwQqF1wKW4HQAkTYvEfSfwYP7nxZRmQzUwCn8b",
  "key7": "4AeiSFCAWV7PhcXqJEHWaisut99BCr7hgmJTfSpKUuERNty5Bnpxn2xA5dUnhsz7zmESGRnN7PPULwmzq5f8imbm",
  "key8": "3uD75q8pJAAU6FehZKaNzEpGer9xDXAToqSouDdyGon3cSGJ3s25wxCowVaHXtoY4tijkz1UCm4Wp3Kx5xrbiYsN",
  "key9": "3vFy24Q96wtVZ2kXKjueQJVJGbY1W2RVazHSuqnfP5pHXYrfRRUG38b8jPdx5pLsQq7LZpbDmpAqXYoqS2EX5e61",
  "key10": "3MeBA7BkYPyJfowCZXTaeVoio1FfBxSYrApfKZaWFRAYtVkSXfpi1CvgwvB3qAMobgFkmNsG5KXr7x9iJpZ9QoT8",
  "key11": "KDLdF72Whc5TiUx5yUYne6aKJLA1p5kVyX3BqNLJ8uzbhEgo9RSvs9iDrTY9c63N4TX6nhv284DQJ5gnio29et3",
  "key12": "5w5ozNhHqWY4xjPfq3uwNd3LKd3bA58NpUDTdKPgLkabudhTAeuMVTrtsgpLB9CMPPujv48jKQwj8sTtyc4hoZTc",
  "key13": "4hmYQJ6u11xNze1Y89nFPq9jmvc2GtC3tpaPePoDdYf2prG9dky2hgTfVxAnq9BFnRNHFfhXnffxEVk92gU8afzS",
  "key14": "67HuEpBuYXSdQo8BccXTKtLa7eCHhHEbS6gpJ9dP88keQ3nE6uYEqCZVx3XParkX9uhdXkyeet17c2SAPeL65j5m",
  "key15": "4ezFj3xMGN6qk1BYBC1asbARudx6KmSb7sXSWDp5Zi3TMcFy5vVa2CR1m96o6ry3imWaL9ZnNbbnG8gpEJLn1AMC",
  "key16": "4TWVhc9iaozcnqZRYXLfRafn8Cy6FBZyaAwtRLBgmpGEFMr81FpnbzZjcDwfRBWDfhqhFVwZuPQEt3Cp3NjhkrpH",
  "key17": "2D4EmKUf5ruqYwRbyW7XcH1znK81BXnw5ha3i7JPR222hMcwY9HqRWZzuj5PXEqZBZ7bzVpXwMURHe9spFMxqnQy",
  "key18": "66pGJbjjQBRc93NyTQkhaZ7h2N9NhHdm6rMRqckRfLHoc7qNpypjEMC2XJCNcXi21S3pDGvQhxWmRWkFAowJSWzZ",
  "key19": "5Y4AigwesHmSU5mjfPwrc7eNSAGhmQqM7BUTxeFiAPE7rV4he5YEMD61kWZcYu6xy697oWgfNZ32c8bxpP926Ys2",
  "key20": "zwUfXCcZRXe1g3fcTfwURVRa3rhcZSZcGQutoN3UwfpkRGQnxLAEziu85h3jHnMzRRQs7J9XbuXii88vAQ6SmZ4",
  "key21": "3Ds7xpseT6dwh4BLLpJwkwk8NWBQ7S1yoMxuG24PdWwhJqedMKUyJckW4RMKy7TDB2y7NU3Jcj2rGJw4BVD47Xwj",
  "key22": "3c2zLbzSEaknHZ3kfYySuUBMaAN4fvXucUK24ixMRs7Uh9dxzPAzecaXYpeqmxrBcFFo87gHQEXKxJsrAKX4haMX",
  "key23": "52RvUBZx9UiAYsUEbTPfVLgusQAcpxpR3TjNLTRuuDmm8j8dGQ6FcdwMxusj8Hrqj7tACzwJAqhDtsbCgzFHPzmR",
  "key24": "3fcuothatex4jGLt6Y5NeqRmQYSUqhQ3U3f4dn6H8XrmGQeFgvP6xwxgWpMiXu2831jBWfDA4s6V1f6gqxi92tGq",
  "key25": "42AJ4ejvCQQQ6t1mPCfEM8xgVE6nyjUW8ZmweQf8xm4sz65kbajWuJAS9W2eKbeEvHseE9RNAeRUwhEWoMHwfKWr",
  "key26": "3dCgQ2nGHUVpjqU4LboH84JWCVPAzWRC82zkZyKrUpbwqK8XgJbFrfpDuWKY1uNZAvW63vVNkYToC4x6MC9f17ZL",
  "key27": "5HB1z5xi6dXan3yriGssnGgNnAB8nAjEQguxAvnvmMwbVL2WQ3g6xZpJbg4yVTcs926iDEjhtBLx3iMMG4uLChnK",
  "key28": "36LJEZGEh3ce9Grr6vXazxgShXU2xUtTwK5ovza6Ld1MxMRkJ7nC2hqF8YdLF79Egn3XNSu7kRJ4XqEwDdUTfUUN",
  "key29": "2WVvoBB4Fb8JiVuPBHbt5YZWjwoefxNKbkEbYASphKyuP6P9JPnFtgzZFqPDMcC5sbBENBQx4Gq1Pa5bCk7fCdfZ",
  "key30": "5k6H4QtBzYFrk9sJgTe4jGUPxtkGBci7urwugTNQzfr35wxxEexkUFoPGgbzLVyet7kKAfDND9iZpi2wkUfPnm57",
  "key31": "4EeLGcLEidEhYtrQmvEjsPSiSq1HKBWf6HHfVGnqVddrTDqERZDgxrrJGqEcWkBcHcc93Qu891p51rDqnLGcHLvS",
  "key32": "2GYjLbYKh9VjUx7724WbBG9Ke35f2N4MS7cDwZexsKNeornCLvLyRyWew5b4K2eyug5GFZJHtJfZpvj7guZf17e8",
  "key33": "3Gx5TkfrPRopCFZEUce1MTqJJd97KEQYVfgWgeKx1Vu6sYbnzH4mbDAEvKw1yPepUFPfbEs9HGat7bFAkAaCQ7aP"
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
