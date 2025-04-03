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
    "5jKqki6kQ6YDsrWNeeHtnFFMVu9iTA6fMNhss2QpUKpoJWWPeLFqwHjf59yRuqVRXEqXXhYoY4sLb2PFmwc7cS56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32hrbN1M7Cdxt75uca1ynzMrwaCYLKLYefSf6ZUqcTsEC6VcmUpiUF5Phu3jGmeL1yh2LXErcMYrbjj2D7mvXEaL",
  "key1": "4RhF4SMeV1gbcMfyaRExDV28RSdd41JFE95yS2nhdJMTpabg4vSWpagUYghn9o8GUdWRg1E5qzydjKsCtNH995Xu",
  "key2": "38x5jwMC4fohnRxonC6RgZMv8EAYwT9QQyAxxm7MzENG9pqVeXdQgnNiM8LtiTS2GNen36p2oMq2TJ29VeeueBWZ",
  "key3": "2JZot6ZGbFpjtAm9XshkKh1aDYCkTY7Gh9FU5fqCxjPmQEEaDsr7nNoGKMi2iHD4SCkdyL4qS4cyWRGXBoR9o6rC",
  "key4": "3iYaaBE9GT5s8S5HjwNVRSNJV8yY6r5ebXkkUit44MciropaiYFrZQZq9H1HjQXQhKFsicXGgRuDDSfbqjJQPrXt",
  "key5": "3y3zsCazy6VfQ5iejoguCvLgBBw8oTp3gUgUiFaQQ4W16iQF9pJwTpXUYZb8Cd69fZACScKysP1qTipbot1CCPm1",
  "key6": "4PNET6rNhE5FrSUKtadvVFEPnx9nD42PhTVb7bk4CH441qVjZnX1TpHGiWb85Ccy7mNDDwGe1JqiQ5y7BRYjn68H",
  "key7": "3QcDRnNcFvR2czsBkRY53rhoorLSwkeEfFv1VseN7YQWQoyoJ4aGtRoRNaUAXCXV9rjAKv5wkmthNFJ9ytJukL8a",
  "key8": "55HwAmmgC2LhVZAqCcoapZ3gnuDvhJey8BaF22BxuHsiteWt9y8ZDzddJ1DDAjpsStPwEoHDEqabCUSB86tydYS5",
  "key9": "2XxgpsyfM492TjF9pPmKWGwg2iTsdjLzpMTGdEURX8EGtf7yrd1RAf2mmzHWZdrRnGUkCqKbaCBoFPnAeSZarTVw",
  "key10": "4RysWgsqTeexn6AmRdy74g3uf7hbEnB453tQ63HWjEFyuWqUQwTEnueLBusGSz7gQc8LGBDakdoSNBMGZK9F67LR",
  "key11": "4sWJjCp3WaS5UXmjn8QbLtPrVfd3Uh24vZ9jwxuETjXAeRcupN9RxQzyKHhWmKZ3fDk9UEnvUSPkRm9FfDZLUCg1",
  "key12": "3dxRx6es8pEXPrYkc5jmxhuE9rsy7pJ8Ss64kbz24yVDwKmyUbzeJ1hvBQiwrBAjDALEhpZ117FAXNxnzGgu2xXG",
  "key13": "T4KMAG2ngcc3STfS4eMAjP1avnghPPxcF3onnEF4SEjnn6v11fFqgAefQaUatmei6WBKbeVsUdqkr3H3rhBQ42o",
  "key14": "2sczShtSA8jDuguAm6NoxcV6iNksdxuyF2NMZ4fAe522gJ4a4Ew1RVKhfUVCGAEnDjoDYFGYz1Nx4GEEq15CjBq5",
  "key15": "1sQW8Wody2xMkVUAjCnKanH6JjmevBunW6PvTaDxNLVmmkCPjYHp55ro8bBLqqDh6MY1JmHKq5NFcriJ4cfKe7E",
  "key16": "4AcaeHMnoYm6gDCFjQNVQ5NVGoau5j71csHoEuemfdiicRHXHzbt3GsUKBZAnyjFdH2Kp7wBHafGr8K4iHa1cdgp",
  "key17": "2vt1ddmm5LukKnXkVWpFQ5hBToeMoJYnTQLM33c9UhECQ1Kn8aHKe27GZKEJHnaLXQT9ttFSVjZMvH27sFRnrwT1",
  "key18": "2FjwZ6KTxTEu3sZW6D9g1jMiimMLjCZreHpbrGYz7a99AjnmQZQrsy61bJhHMDjhBcZxi1ieQr9RmxtgatbCfSvj",
  "key19": "5uB6jr538wZtMt6YSoDbyVzR5hSCFgUBfNTMMdn5dcGfEL2Q3atdBQYHg9tcNzbgeL9hDvKwwddSGEFMkv1Ashr9",
  "key20": "3EKUMv2KybGbEgcBpGbMyarwS4Ci5o4rd3GDRYXPsTSVUTgvJKhgDiBRWJAyLTs9RZDShES9DusStjr8P2VzgXcP",
  "key21": "4tuGtq2HSRRJTtAoXMSXRnHLJMDuJaBBtqcZwgauyEzsPYNCSy3eohC4vffg4Ug7zG66MkjArUBam1QkARtqiQLB",
  "key22": "2Dq1Y4ZTmVQTVA5LLZkK73xQWb9SqxYZ4zYzCPiuA3DEBKBUfsvY3o1KyF7jHjMofCwtmAnufzibd1iwsxDkWccQ",
  "key23": "4XuWG2BAZ3JKc2yvRxkPoEgGEeTRLF7LZngVRXqMqN7LqiR7h2eCw45PhFGmYTn5wQzNa14SuJqPhK1qTPBP1uHH",
  "key24": "4TLVQuyPinfP8Bh658LR6CtGqqZd7nj8d92UY5J8zBGshM386QGgvAswovwcBQszKiTF4gnQCvMmNNHW4rsUP8gw",
  "key25": "4wm3pMUrv6Jc6fPLGhu3HLxMNjHq8KXKNYP95NqJQotoTcdkZPuqUTa7vi4xZtZwegQ6j4V9rteXu6nKTde6HpdG",
  "key26": "2zPf2ED8ADUAMX2A6PT4KGh7Kd9Ko218BetHwFuTRhBagBLwzECThAAvwbHjSxmhjF2ZiSdired4tWYJXpYriiyF",
  "key27": "4JbucmuNYys5Z8THmK3rBs2QkhWYAr5NNzpE68X7qEKURZbQTzVzcTAk5xAXj2uCJMmzc8bYoGiYT76kHTzXQkYB",
  "key28": "58Y4x8bDV8mRyfS9D9uHn7CYDPD8bDmwVUsSbSGZd8Gsc82E5NiWyhQhjnYf58sfeYEk8bUYyszSuHiJZoW4jzSd",
  "key29": "5H4ndLZjSV1Tm5y924xRKapDRZd72dkDLGmvgTWqWpKLvCYvJywVK3phwb5Ay5wenX5VKXqa1tcN3KC6jyQrwtQc"
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
