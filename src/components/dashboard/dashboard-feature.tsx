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
    "67Fft74VsdZWCTTG1Ni9g9NFz3p5YGVuf8HPgrJPehc2BF6FmtzeDvoGWgjawuvQAm1UBoCSk857cYZhV97CBdkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSqF4WQfCT2NndXHyLVbrDVPFVa8sv5jeREyLJK938xAY7znpPux1YPmYtdyhCg1mkZFAGjVC9My19drybCbbM9",
  "key1": "2y7upP1BhUFoNpPdLQ4mViDRQVM9yWRuVMuRYoWRS3QoFa4Ajt6WnGsqkNLXNzk9iKm4xYJWm3yWZNH2onGWyYW5",
  "key2": "2fHiuBTALE4abJf9Qg1g2BkQBghBpw6VtfPn99dhoLEWTXUqSxz5YRc64Afh69DKbYcPQgqXToTciuBjcQAn15Wt",
  "key3": "5umRrrrFxXtpSYbnoQ2d7sNvBq9nfc2YeRozMMMcgT16vusbiV5DTJyLrWyY9a3ADwpdo57XQdyRtgiDjyjGUJrd",
  "key4": "45rLJURm5PwrCUB2gNSZPRgXGrH97xWqW2wXgx4bxN54Yff5XzznnPHngzyZsPpX3P7coc31eWEFwsx8tGYLBdVF",
  "key5": "2SkS64aHD6fGLTHd7zHUhM3MfX5MbvK77oy5mjnZnuTBvxNCuMUyEi5CuAw4EtkQApYogjQf9u5ep8XEmR2siRc5",
  "key6": "3ZbFDnMucUzZxwFHmaupvUfdb8f1iR5ywfbUXDBQ2DeQmt8xwHRXZCQVXhwRD6dcF6ASvtJYkQypi1p9XgSMvM9f",
  "key7": "5W8QvoZYLTrGjhbtEFqovepUiwUdKoPTR8evf9cNGoTpM9bUSajz3kHHNKixTeJT7QanPE8XNEfZDTYcvxdMrqYA",
  "key8": "2ZwCxzRjRpgdQvxGt7T3vdAXWZZxRk1KwTAkJZvTNfz6vTzKdjMAssNwoV6jTcsoA5JitMcDwHZG7L7xAabLLE3w",
  "key9": "4p1mhT4bvVkkb7TrRA4qk9KRHQ3ywwY2JYw5sJRwW6jCubYtvjKDZV4cNQodnodNBio82waPEfeWtfMAhvXBAdjj",
  "key10": "398q2uArQv7tjJh4RpkViURQoR55f85dk8JrYj6GQ1nUEY6xtMG87rZEJmKVGfNpngdSgv1QiGSsKUrVy9d1tBwC",
  "key11": "WdFo5z57kTCyQ3gVvwMe4pmKiL2ju3PgfKPiAGMMQ8RKFCSJur5umqyPpLrUiXpTuTxTy8BcVRbxMjSbxPYdQs8",
  "key12": "5dayc8vejRbtq2zeoSCWLHgZGRdtMQE5uhgwURvGJz96e4mUAPDLc9X9rqT9S6PgDXjrHspVL27sHsThhgEQpxnw",
  "key13": "35NKY4d4ccSVftekHbpkyEp25gSyrPF6tj4favR2CS3R39H4emzKvqnqLbtoGi9YxJAgK9kbjvAJKHbxkZeAf2rc",
  "key14": "4ad1QyAeTRzCX7UX5G3BgUosUr6mJHSG5pPnsCdEkCkK6viVfBV5XXq8QRDwd7hZt4f3EWF1VgM7x8BisF6ZAgnS",
  "key15": "ppQfg5EQFP1r6DpfTDjsXXNgd8qeoCMKnQBYYtVtLExWobxSF1yFHvj2yLCJkfsGNre1UuiGW5sMbqz6SJiVkHF",
  "key16": "QwnJkCcJ8cBxz4NEeqxPC3B5VutNagLeebeWxj1nBs32gXfjxwPXL3qGb9qT5qJfaHUfZJgw91szJGKwCn59exw",
  "key17": "Qhz3z3kT6pts1Qvqqo6tRPvsfmdpL783tfjq7HH26uzwBJPx3sHsaJdzbA9r1iE1SepB3xyUyHXWAx9jv1tbwka",
  "key18": "2r2jBV2YC8iF98g1wh3amjkCqiAocCAzcEgNBoT5cf1uSvwDvujUWgVjWp7Wm8tzKABUeCgNjTk9TvAm3sUYirMa",
  "key19": "39TzEujDpJSEsucAhXw2bRUK4qBQseAyyLYqYeePX5aAbWV3XvMDVNzjVgfL6vJHADqtZiLKegoMAm1ATkqFtzDf",
  "key20": "wcxidgaza46i9zVHXkUmm3XYmF9XSSAz52uKysNa4dHDhkSRsEFSD21xgXaow1VzhwYYZcjY9VYaHhQW2TCY8VB",
  "key21": "4AFDD2Eo6mjUNLTc8uirikQ9F1KqQUPB1dGbmgmducZZYp3ENrNR7XQD8TvV5o2aQxKJnMLvqXVopf9cspHAfEHJ",
  "key22": "5amsUyDPs5VY1nYaqoZ4tuwSfvqhoePP8vHD3z3FgrmHFoaoGfUD2r7btm3zhXxduqyjfQhFrWLisNeL9dgkaR3g",
  "key23": "2LekfnW4w28nhoG5B8D2srP548SRzjD7hCPV5X2dJTnSX3kTvPYJvUz9X39iyqgfCGnqFE6GYwf9NBHAZavfFcv7",
  "key24": "5aCN1NcAYw6vbQoCfHUCgykKh4ErZqRteMEDpAohvJSgB4ndVmbkQ585id8fUaJPMZTJ2vwD77NYLXtywviMLP4W",
  "key25": "3kpXseLWcAW5qmiZWdr1JZFr9xNHZJnkJj4xeJZ3nHvNnKGPE3FrvWnDmE5WyC3Y5msLphzDefMJexZeUxMQqoJB",
  "key26": "3bgEgmAURbQhTPauicJRDsK8tunM93NmeCZk2j6YLVqmGwjf7tqT39ABT1TgGem2DLFgr1rpwAgGiVniKzgtC9yR",
  "key27": "3dtiMqLSozCysBnxhev6Aa6kR6cULyyHfC7HQ7kcMTwvrJxbWq2xEiZHjM2zegBDDvQbxoap3ShToL3spFBwuRFt",
  "key28": "2QiPDAAuiGppu3cQuerLqEBsGKukgk65UrRLFYDxqKy4vp87esa1uXTZkf9t16b5uJds77u278ke76WzTBnvKcAM",
  "key29": "2aLxdXpdrrm3LQJQopgvmtmMZQuFYvtFnyggMGdJhP28KS5evaxBMoXNzywkogfc4GyVKcJtS1MLmi2AAmEasAYn",
  "key30": "3nW57LQdgb1aeqUhukdioixasEVFzH8hr3coLDSSvfuUHUMqphUFtPFiY3ca9u37vxT21qdKCHff7oMmL3c71x8R",
  "key31": "3Ydat9FxqGa1CzD89oqoRKfWfqi7yb8qEiAwbkWCvjAgjbhuaQvaQjuBk6mCPqh8V5LiyVXoMvfXGwu79UnVcYUQ",
  "key32": "kwdHfJ7EHpgkj1nCgqE6QCgPTXNekgq7W1WgTvXfq3u5VFrAej6uNB19ZnDN9gj1UopvffBzmPpYDA6bsCbsdJn",
  "key33": "2XxLkXjGVE8iE6K863sqAVXZRjngCdKJnV31ABRDVGuBKhqPCFqxWAYtjANfv6m3PNS6uAFLWQ5gSXyxvMV8F2Px",
  "key34": "5nKk1cFHXTYX8ywsDdu3DwN1qBWKXF2iJLZUcsGzZWPd5NCt2FyFmm6hWSUaKiGdbUDJHpDYoQu47ddWb781DPgG",
  "key35": "4b2cmjcsA3PEUvox5xRmRFSV7KCuhDUst5caCxM4ZG3nmjq29UDAz62Rokgim9wnVvmimYz97nnSbwcvVCQqcN7p",
  "key36": "2P477ktFghpSe2CspwhHWddKX8kAAXGGbHNMBFg2BbyVULp9Hr41ar6G3X22WVqNEHDeeh2DBBcF569ChSYaQ2ib",
  "key37": "2i6AK2kreeagLGJ9daP5Zu45KS67rjyCXfCwe1HqQg5jC84avazZeb413Dbrc43WQ47fbSJkzmytThzn1AETozTP",
  "key38": "H56GytLPthX9J683TUzc5U6QPMsYujDwaC4NJy7FdM4j4r4qxypo3RtnJ475T6zxnv62rn2z1Zh7GyWhJdP39hi"
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
