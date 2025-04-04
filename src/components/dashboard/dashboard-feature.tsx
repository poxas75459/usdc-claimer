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
    "NNAsnFGopbxmXoZwhdwy7DvJ3jY6MHhV9qc4QZWD2d4jRH8d99kbqWnjgiKTdLhAprczX87WeYcsNobASf2MJjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hkG2XUjCHCbEKCuhmLqkCA2PDrhCnRJNGtZE4paWjdgpV5JPcxCVNV74Lm2mVB2ZB24c3LzjY5nviXJkCaQGStL",
  "key1": "2QEZXh8cZ368CEjYb7Q2J9a79CKR1vft2RjGWLSSen7eNnuvxHh7TaweEYXDPTj3GWvo1K9Pc61W6C7zGSLXa7jy",
  "key2": "5ZKZJ8HDBtJygfw6fVU9jJT7x3ntiYxTZnon6eGXv5HikY7YjSkFjBUDek7Ch6VR2nViZMQFsRMR7dZcj9u9uH97",
  "key3": "5NpabaR2fkogz3wFVSDhXhJriLhtBRN8XwDY3SzPX31uZPobS2113knhRYdmJEchi3ZAg3aCLup3kuz988B11VQE",
  "key4": "3jnPk5mAdkoKkRa73HGkUt4qfa3iWnHPYvPS5XDydSdckfaV6usu86V6ZEQ8Vv7ZXTG1hVumFaBUuwAZhTujNbUE",
  "key5": "3dMFraogxG1gyo18zc9Dqx2VyHA9FrWA8vjAxqJT1n21wMKv7HDTSweg8UaNQDbjzKzEob3vWLt6enMEXBfBoPyz",
  "key6": "5WhkLPt62jqk6ypGN1uc4RroN3hEBkUhEKAggqvsod47qXSGpiXK5tH7M6eUT2QMAdJYQycAJMXwF6C6vipjp5cF",
  "key7": "5MUgmiE3kSChiEaQrFKW2CRrWcX9qao41b7VCJZrw3jWZfwTLhPiWEH4yWYX9Pis1BZFNQAqdv2k8FjMxrYnLeX3",
  "key8": "cDhu1a7unJn4r7uL2CEUDVnPNvRWZPTawAsPrXcEkdMjWL1QGGKMSbSJXrMoUY64vNA7rVgqhuDMM85V4UbsADE",
  "key9": "2Vix5sPRT3DXokbgeKvvnRMZu7qeJsoSZt6SnFcHyZb7CbeFWtR33v1ZXaFBvnPHpH915KGM7T6d6JFRU7JsiqEj",
  "key10": "3QGdSKmm9oHgsMjN7pJbUiKnMMks8t8ootXtaTzcrDaGAMN4oY5Ugr5FeGgL5PYUbbqMJkcZWXmfAnJpb5zrNeXt",
  "key11": "3Mi7M56nYxmAYhyNS2zTMxxRqejGrPkbJbYvxKrAHPKwoZkVTFA3CLSHyUc62X3qqRRmxY19C5DiCcj1oT18R3Vg",
  "key12": "5euiNdhG3wBA7wSXmx2MtapNHXBWYoKrRPiGBZuJjbcepBfZ3jq6BB4Csvaz4idR8PwNpUNFQoTaCAPwEduXrz7p",
  "key13": "5TR1UKJjydKzkvYbZwsdB8QbT7rnqjGLv4rryiUbmGRM6e792kQMBS8EaRkc2g6qsau4Ej1fxqJdX4RXoQkPEhp",
  "key14": "UAakoLbnf4m2kSehzVhTVNGceGMsxUbKosM9vkEGrHnKVT2X4fVH7seqPMWsTZFQpxyPmkCYvnUFEFG1HRLt46g",
  "key15": "5PHvrrendcCKcZrnsSGbXJfs5BsLjEMgWiF4KaD1ZviPx7G2Rnda3yQUEn4SKSwvzWcLj2Bg768kqLvMm5PKDfca",
  "key16": "3b7pc5DXYxNdAPGWk5wQvwjLgRDfcBCmNiWhe6tFdE8jgvCgSWsCqeNuV1bxR5p2EfTccgFA99deRpiSdW5G67Up",
  "key17": "3v8yaQr5cEKzP6DpGZxnz8Bi7Y5R8ZY7JtunXTcAXntvWYfUbrEcPtCmqzKaxeN6yVTDHfQDoqkT92sTguYLivky",
  "key18": "3sZUzGmYDRL6iFgE5n2q8sV8ja46DPs6BdHH8uFjSUH5uGmH2bB8nPLmtDwjGq9H7FPfn9UCsg9dXWKLTKPXBYY",
  "key19": "2o1Fy2geotjkCyWoXujcW6Q97Q6RmG2zuxYaJCQsjaNVaD42DNkND7U5jbtE2jDtKxeKBhKqSchC4Vq16i91unyr",
  "key20": "h1R5YTiAQp5ukM2CeBGDyU5sWyBHrt7rvXHyvof1jioPJG1C4p1geLeDnoBWDEVjxVSFmt7Cgn6DCLGv6ib76ku",
  "key21": "5BxUacvCKcZt8zvvZHifpNZamXgfbZvEgY5V5fhbscBhsXQymWaVLEiVWyxWcrahPfdYgEXc3uc5XrwJYJbLCdkf",
  "key22": "3WYg8ZDoD4e4i7AczjgNjvibcfc1NpcvBLe5gGiQ4qYRb5jYVQa6XG8LWfMiGEDqo4bSRMm6JsaQxfzQys1BWJ2h",
  "key23": "3a17e9VpjtaTE6vhaUvrBvH1mPdGfqYxsL8YEbayLyV8YiHYCFWWcgiCb25p4Ak6GQkYRkxWNHCZuLnkPjcPrGEU",
  "key24": "5mFDHksT1S8SdKeFcAPNivr2H6bxip6qLogP8XCWZuPADVeS9BXybs1o7M5dEjqKjhHfgW6QH3xJTSiMUfxgJt4p",
  "key25": "zha8FsaBLjkQVA2ih49fG6ZZ6wuEWxJaD3HQTK74c7r5QvG19693HgxZF24uUvR2mzo3hVNmT6HreK7EHZsZSKM",
  "key26": "314VtHHSkmyHipPEMCx88oSkiBRRmjKndaysT6Uhs1isp5bSRFZchnBBBvSgH3xH4Ty21o7KtcGBnGPT5pbMiv6F"
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
