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
    "3Ms61SesX753FnmqzZkmEfG8QCxfpFynYgD8XTyXcyw5auDT9f9yPk9ZqbboPtnHGtJuH9yZjBZSF15aqGnUXANB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjgaLo2KBAA2zEhFUn3Fn6STYjriKpHMn1ipdf88ps45PbRzdkqEo4utFYLFBM35gNZnGKz6jvmTPYHpQD8N7yS",
  "key1": "3bAU8zYkyvf7DoiHk6W113GGnrnX76E2YygHMGuTMXEQAj1qWx4RXuTAdtB3VnZbn2dXLsAHxrX5GAeXdwmkNPPW",
  "key2": "5HQCPL2GBo2FqsMyH3t9Z3eA4tDpR6YHDNRBvj4XKybDQzr6iqPHJm7ipfhgXH1bape2TFQxS1do5BfKdFpX522h",
  "key3": "46RkRgyCXURHk68dzH7usBvNNBYbiSytrqyuNXXfqQ12i5TSvRpu1jrcV7Nn4hYHzugHhmrnxYHGaxbvY8SzMSzT",
  "key4": "4fASbV3RCY5Bd2xFKnrrRLeCt9zd3mWJeo5MnRjPPbr1izefY99HrF7UwiMXYBovyg9CRiZdWcVBZbdxngNJm3UK",
  "key5": "55jATTTBxonY1pgRqvBok3ucAoFLJJ3rUxJaMCm1DEtaS43qFsv7UeL788DCFxB9P6nxcFAZFsthMk7pVengTCyg",
  "key6": "4ySaHLvXwgJrZcxworoz12vVLmBGH56SEjdiLgHa1SvL3qA3nym1cbLYV25qU9JsZqrfMtcN664UbMaTPWpQGoFs",
  "key7": "3kgwNH3KUJpGf8bSAvs3TFELNBjUBpbkqCxPNhcMPcGdxwfhXKewQ7fE1EMi9v3DBxNPcsexZc8bDE6D3rN7Wda7",
  "key8": "64JtPxS2atXmtGZx39hSE5EmE99soiKxeEebVN1kp1NNDAGi7LUTMrj7v88E5A9vBcxP8F145yPL5Dq55AYopeuM",
  "key9": "5Z8RMc8Gd7RjZpz7F8uaSCujyWZEDuhbY9PPvtM7qmK6EQ6wiNaVLXGhGbNxUbUmpbZnfB2R2WkTkCqnnYKsNc7b",
  "key10": "2QCbMGjTeeHMXN3sEREifGTsFuxtnDdYrStg5eqD9ULH7qqdUtHseD1B1B2tB8SS5eymK3cHCzoUjKSp883bYvqH",
  "key11": "tDuLipvmFqoQgNWb3rfS1FTLcSDH9MxZdEf59FVXePjZvE8gEJqJkAvw3ZR2BGEUG7qZJPD39hkKiBPS98hUwMJ",
  "key12": "4C3CDgUZpdzB9NvGc1TgK186sjkv8ABgR5CqRd2fXesKWEtTiyN7vi4vNi6ZBJgQbrJjamCE5qTm9UMK1YmREUtu",
  "key13": "5d2ZrEgKwGqbRYLKai9Si3dDhQX2fHHctniDijnomhwrRn5xg23D7NffUNUfh2DB2Vb4REDuJBKLzPHfGBryK2cd",
  "key14": "4oMJhRWjhAmiwsYJzx2zknYjTUDwfYinzatPtJSqUZ8k9V5wJpdEWq9CX1Pr1kYSX72RAjk7xeryktcMRC87DkQx",
  "key15": "416pboDDzYVxR1VzfQYshpemRvdqcUjTqYT93SJnNNwK5xTSJZoKcGRHqHo6i7vgwhyxaS7ykPbesiCq2kzbZi7w",
  "key16": "3ZP5paiEQYPEu66PvSAE9EWojiCiFaAnondAukLaeCNGNATAfGpc7W1e9ajpckTsKQ8dcvkqmQTo6BtvhG1uuMjT",
  "key17": "5ewQHaZxhdpwnfG6M5nzTdEhnWmtPZcnuroXob2brdKETWV5fNuGdKEQ2T3qqycN61ZcTn1vPLtDQQi4jJNaGaeN",
  "key18": "5ZXhmogWhceh8fJR3Kp47Hn216FUSxgyL7FA7QdZpTW9QZr6nYVSGQS4816rzBA4yaj1MGAyv8mAzTei8RCBHj3g",
  "key19": "UDt4VTvodEWXDrTMhzqsz8i4kTrxM8GFwiLQu9w9s4r2gr7iM47AFQQG7jUWoseEKgCY5zxb5mjugj9x1JPbCu2",
  "key20": "5An3w1EGyUuBbkjmZ6JRuEWhLXWofdzVWbFtJgR11DVJfZtBqQ6jsxfcjZgJTaukVjqnZHgXoV5biMJ4JeYA1xsU",
  "key21": "tmkm1uULJp9RvRAFQsfmWRMpyqXbYssXFxqYguCvLtAqrU1PsXrsqoAd6ULn4KmW4CWf48DR8beHHtJVZi4oQai",
  "key22": "5cSbAvng1XyknwqE4iK9GS7grREhFiZGzjVQxubnDe6zDxjSXxSW4FPL6zew91rWWjnxMNQrCFJAL42qZ8LJxiVz",
  "key23": "3N79F3NbNPcHLhegKi93776HT4PrGK1aUMeadQNsnftzNLBNsEq2Jrk4YXoyowNKLr8vMpSh2aZtUMLTkMAbfR8o",
  "key24": "629JQpHAK8zCwzy9D7pYshremkatU4G3HzHgdNBAFmUhddX9aCHhZJHN3yYUT6xL2NE82ZA65xFpziEJFPm2cmoc"
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
