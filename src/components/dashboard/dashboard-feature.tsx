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
    "5WFYsV4pTJroxu13a5xapYarrfdeesXkpURCtZKzjK7h6Xyv5vEgD1z4ASfhsRF89WcjFQ8c2DAAedu6pQbzJ5Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuA7W6Z83MeUacFCMfak4iJQi56bpauRonnyGLoRbMh3N7tprWbYTNuk9m9aMJ7F3aEVDrdDF8qRZSjE9EyaWiR",
  "key1": "5TkqKR3LaPkVhtihyZfQ2tV6yCqrEq5zmQvmnFpJbxjhW865qwiii5V6SEMvQwcUvtW3RDXb6nRhQDNqxQKfAZwE",
  "key2": "D9JbNWpRxiLQR9AMkzGxo4psDM9AhhzjLbip5Xm2huRPZu9ZvMcHnwucbywTRnXi6yatVNYKybHMsahf1461dQk",
  "key3": "PabVmG4rAhVxGCoWMDWQvZaqRWfKcWkwgWWSuy5ifeUwvRrzjq6EmF86vqCXKAoyjEhjRr1mvU7Rme6c9ydSdkQ",
  "key4": "h5hhA6zGpxyJv4xMEoweGzYTf1bt3V7KKggxjq61v7TZrY7XQWUkub6BcQZ95UeDTj3NQ4gYsz5yLMgcAWk9HQ8",
  "key5": "68RwhuXyEv7uSPAcEdocVNtn2A6MKSQNL2RwghowgpurMevEi6eYQyMbaoM5rkwrxN1KCT1PXzRzMCr17C9wcAK",
  "key6": "3mkQCHJuc7MTag4xGvVHykuuZpVx99BTWY7ftrKY4zMTvJT6eEpp4q6cV9Nm119RrtUjBuncVsUG1Mq3ec6xuV4w",
  "key7": "2yeBjot6t6ew9PTEaG9m66KRA1mzd7XAxTAkJFHdiYTFVb5suu6i8YndZewynG4Pp9rHc4riBUqZNCsVTJ2FjWJy",
  "key8": "4CPM1AnMn7uKTzanNkobesSzQDPFTMnxHxbchaY41LcNcQdi5JjzvvgTRiygWXKHi3czQunExofHHptdVcgbbbWC",
  "key9": "3pYeoc5ooEDa1sb41kJg9J9ccx9M8Xbo5uZ3wz8AV8JHbKxzUDLoS8UkTETG4qvBzF7uHjGiyB6nDmNQNir29rGL",
  "key10": "5FP3AUXHtBiDXdnFEuD2bijyNojMnrB65TebxTH89LtCkeaUiUv9tXaCXqC3RyYscv1uYpcDk1dWGBW3ENWX3zym",
  "key11": "PRw8h8gvXCY5rFnx1S8yhmKHXucpuoKTPELUU2TMopUnAs6xifidqjXht2yJrr7wdpVrCPMzSK4zYoPeTYcoznH",
  "key12": "4RSHjg54qWW3itKeUwQfTuVkx9ufPcfkHgb2LTEB5TyJH9gxYgA4ExmTBPr2FcCQ9hGZDc7wcz6eYSrNfqA7UvfG",
  "key13": "2GRrWyrj6DG9HDAZ5ojSWSYRmWV5wFWhRTHJRQyvqPG7pDzhqXyNNohoB3LDe74W55Q5mrYdjfAEXN3uHjt1Kpmt",
  "key14": "2QbXq4zx6BFPeKSGTj5s5QMqFgj8JggRM5F58dEFm38a287CHZzE1fywTDJbqyuj6g9a1P91NSGVv73q1qdxJC3b",
  "key15": "57b6GydFnXFUbqYghwhnvMorGFHb6mi9sviKrqgNkSfhqfcn6NQLx4XYyLwE6VEn9TvFTPsmdjsooF9jhk2fGtE9",
  "key16": "4mZ4ZJGb9FgUcM2BnLyjTjNi9ZDuQqyg5mHx5WdN95nyDewrSP2n16SASr3PxorsEjhQyYzmFGJMTbFma4hLBY5p",
  "key17": "4EpCFiyGPHuhZZRa8dNvHXQDC8AuxrQpHrKcs7dpwnQaQARXxrbBmzMFUj5iTHv6njuPrG6WCPtdfnRAHteY7wRw",
  "key18": "4h2huiMyxXmuUBLzbWfxyoo5ejst6wcbUJPQgKTF1QR3xi6yb12MjvRKAbSpXNLaTpJ9Pjoxhq9gTYvUw85H4qb6",
  "key19": "41q6TqEb2K6dbeFmbc8z14gyfxzayTA2yyibMTjMS4yMYdUUvoBpticqzM4ukxtCkNuE2zFE6fyUXZYj3YstHEJF",
  "key20": "4vDc5kg9dcBVwK1W2GwKSiJiomeNCA3FGxsZ23j4hWexgUX8ojWyzVegPo3yYtQYpLa4feWckP4dZsT5g54bWwsZ",
  "key21": "5nQzipJp5Xng5imM5BodaxJ9LgxiBLQ4h6wFUdqPd6gt8SfHXqzBnUVqCuDSTh1S6mZFd8gTvtoehp1rrLL2XUd9",
  "key22": "5o2ZBJHufqd39fizpvYQytLtDLx1matnDUec1wvSHPR4tV7ek5b3LjEpeMb5uuUZhbJ1LKJbdjFpqJAzjBWLDX57",
  "key23": "3pydZnnfLpTj5vchhSJ4gsecSexbYGAjvtUPK5ErRCRxhFreVpCwRDYmh6h695MicpYmGLHcVDw2dZTwRFvyJWNQ",
  "key24": "3CMvbwwQzaowm2cHP9Y4A4zCoHHaG4XU5MuTD9x4t8HD7DssLZiCCe7ocBaxggkjpQxvbLvPzA92depQyqvU5pBK",
  "key25": "2uqXWjeumyTrYrBEJoX6by6KYhD1vQpe3U4wpDp7hsJDYV6fwc8RNPaWTyyqd4UUqKaiH9pyFA52C6UEVXKzVDvH",
  "key26": "2MhKADs7ooeERsQ8G6hLfregz7bPLiyw99NxYKK7eMrYf1axvJWaoLtdVy2QRvsMhLZCeSwvK32pLD7NSd2D3SwJ",
  "key27": "49rm6ypwXgmfGDTQovLrpuhNCLuCSm3Sq7zdvg8GDgLSATLt4nGpVbJwZMZguKxQVvGTp3pWpCe9dfQ2aAL2GSja",
  "key28": "4WetCa48odNCv7Q2Ny7LazKo1QoMaNcMfvXPJy2iKsRacmpxfnwVKiMEUM1FUzR6aFuof9vKegueedbBu76NqoVx",
  "key29": "5G2EDwRHz7Qs29zaaq27RRcPkgFbYvH9guFkQXF2fw8DrEmZVuXxX3AouskzFPNeGmAjqHZ2MA5CDACoWY2LfdHz",
  "key30": "3aHSux3UaLfjNpKFDvDbwMzR9ZzvMYdj17MzTEBaLbSP62wEUdExABnSfThcTukx2juvEresp6hUAL1zsiqV9XtZ",
  "key31": "5h4aPNEybdeWDfVTDQGY4FrjqytS5ahhv4GYC5yAJ9Nr2NtE1PESSLiQ1JAZutkPrGRu1SoehMoADcFWZi2VCcYh",
  "key32": "3TkWjwx2ahXrXmNa6iQwHo5Ef1fjVo3NQu4RcDRcpspZ49XhAdAiLhtxqNCJfHYnX2xWyNEd1MEVQAejsPzQtu7v",
  "key33": "5Pz6cfdjvtNPJVHjdCyjnEqor8UYZcEzdgjiViFELResDprwvyRFmzKi4Uh8RGj7zikmQW4F4qr4JV1n9atV7Yxo",
  "key34": "pmFYTsNzV63zmbWaEA8utzCNuPtaayJL6SdK2evxxrDxTwF7XHdxZLux7yty1ScsWKF2cyCNHzpxUfrVDnzo22g",
  "key35": "4VTUTZS33kfAjcwmKxh8VJxpyn3SU7shxjze5BpSTGKTs4NEAygZd5pMajxpCYe2SMgXjtidT1iS1hmdtoNcjyny"
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
