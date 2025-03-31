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
    "4SD9yrq8T7aaxY9HsuvmkiN26pcDVkztLmjX9jAihmvwLnzoD6whXbne9cSt7j9DKjxR4tTewXs12MqtgRVCin6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58bgcnYLQpcN8EaR7E4Nfqd3a5m2rk1RJ1xkjaRBRifHsx68hrdxh6CttWardarAoMwX8fKR4iBE74o6P1dU7MoP",
  "key1": "3hferAfa52k2fLqmsLXSY8jmmz5QYgSVSPfaxWsj3nyEfRXVNyi7xgUHzDsuhdj7oYDCX4QKDkDdgZurLPY1KzQF",
  "key2": "z5F7ZcgLwyL9M8wnSVjpTVjQcncDDaTSzWzirLmGaskLJxtm8VrvLweGpGeZosa3Au1uUgFyrohpQDi5SFuRZSM",
  "key3": "2GFD2XWf1fNU1szqhMDnfJqUzcQmShMsBFDbfixXu5E43aqcJs348uU8HLCTcutvwi7c7PnzjKiyRKsa6YzyLzVb",
  "key4": "5wxKaxejh1AejHfcv9HCBrzRGBkjZR8Q18gsxdRoofjU3pxq1g8hs3M56Ev79ZVTtP4feZMqSX972MXcrcTV3K7m",
  "key5": "2A9QMrEcNFdBF2WLRokzTZk2tbs18YQR9Uvh6dhQvqsfguwcLHyVKHGZKa4VWqgArAzNDxzVBS6ierJwxzMmR3pv",
  "key6": "2AzSrujXrpVEcP7d4xZnb5RbzvheSg6qtE5pU4AXcHGviPaSW35KyWQFXDZq58cv2F3n2wEsn9dru3SydL42GXcY",
  "key7": "2yQBRQCxBGwX1N9sqvT5Fen3673akARYrT6zpQz3QdKaKVDm4t2XTJbmVLSHEwJMBizbrNnHf7nHK5vnGXdNoPzV",
  "key8": "57gP7aQ6CezXNVqKekEGJZuLiGjzbdvNJrpVvx2A5rDZmgL4oTYuCA8eSkDaZWQFvu4gBSmzu9ijujRqxdHueooY",
  "key9": "3sLinhe9D6jpk8tGUM9z6mSRuc4okiYcXXGsnkxLtztpEFkdzyBQZrWKwusEj7bHKh9Ns3NX9gucA5gxuRukntrP",
  "key10": "4Y1prujL35uvTdf8rSKjLWMi9bPqBbTpgMw9bLrBccCibKgcev3SWfNEja4GojYx7N4QeF4jPB3SAr1rieEaJzKg",
  "key11": "512v4WPcyfX25CEgoHNXBDm5M1qyoTG5VJhMfVckLsSC49FKeZGXdb9hark6sUPvtn1qtFg8UqQ9AxhVweiTTuvg",
  "key12": "5dhu2TN3s2TU1iCfV7jqHH5vKC1K52mwBHor2W9SGYnLCcuho7wjLeu77i63qCXzJxRAKG47SXCtBKPDAjUh7nz9",
  "key13": "UaWLJjZ7f9aA8xVvHCLoghDjZ62JpNEGHd6Q6aBTVgPtQM5mLNNujqy5fPZ11BuHbSPSxbDVHLqAjcvCQro1ZGa",
  "key14": "3YF3xWi3tNMFp9VaH2xYRDMpTB32FPBADaY1RkDmyf8yLBBAJEF7Qj54aGB4TKqDGEpgecw3QPN2sPMDnVwxqBDj",
  "key15": "3SezMy5QxiBX8LALEN1oxjB5wjxw5MCrsf5AD4wHpjNpUvCrc6oRDeiTEot7dRhF1TKq8wQ9PpDhy6iELu8bwF1Y",
  "key16": "2kdd59MayvgRQpwwXvVVEXX1bq4WW9JyJQSXUYcCJ6Myi4zWvPfatMhX8a2EGfY1GC9WT5Mtgqb9HJBgxu9Aza7j",
  "key17": "5DNvSZRNpjs49r3xywakZj6y1ryY4xU5zfFPaS8dTvWRhJ3Mo7xQhfJdhc4m6FhDZRVyp3SCJbBgxA9hYTthiLPW",
  "key18": "4a1SJe81wkGEUyFUYu1MYY9sdAvP3RYLM2wRYuktMm5SqyzpXAvXQpDBKSiHcyek455K1p78m8GBWo8p42MtTYZ3",
  "key19": "31ttFGpLHhaoxs4a9pLPDAkU8is5aPkFbBKvL4hibjDTr2FosCswPcC5TJv16XpsagSxsf5rGxY3YqYp8LWMFGm9",
  "key20": "3iXCQbsPVfRYH7x3mNe98Aot4vvpQsHY7FShnFGSVhQtPmyticv2hmvj6kw2caKCQotzuP3QV4CUpLnzUUWt3C8Q",
  "key21": "2cgReoW8GmzcSJTFKWG4MDEjHt5QxNd6pYusASPQ6GSmdZdaPwvjbxm5u1edXWpLujk52UsfWzggZYAAJXMSCGsL",
  "key22": "MvNwh3ejyVqMJ982hhC8tfS38oMCAQnfra69QksXxks72igXBBkFrTNjnhGfdEH27HGrUdEwMhfLCiu8i64tcbs",
  "key23": "4WVBmGKKmJhUWPMB4KujpSVvK2oa4TXWdigYkNyUmDqeRqjCPKgACm4pE9TAU2CM3QXzV4YuAhayVpyyPhVkHdzr",
  "key24": "4q3Ljju3329V8PYiKM2LbNynw3vH28ntXVw4HrF1Nk6Df6RgUZpbDnpkCmBQnJgqWtkHCvyuyzZa5oqVNXWHdnnJ"
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
