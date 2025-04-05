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
    "3prcdMM7zE7s193eBbzDZR6hiqDG8G4JMNPn2sPkh3NDBTGikeaoUjwoy34nb6gqr35AivytnCmuq2jyaSWwzFNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3scyNCQNbn7JSFCY1JFdZdQBRqHySxx2BXipTBqkQLiUMyX6xrArD2FQ1a3k9KravphXKaKxgpAo1r4heRDsXpXp",
  "key1": "5Hdgc7PqPEKbDbbh79Cfrx4aPmhWtNRRSFUjVzKqASv974UMdWpETpkpEkakesTGb9qXzy3dRVuvm1LtJHi8sP7B",
  "key2": "3feGNQn5xSE1jhid5D7M3vpZfwLsF17kgmv6YrMR78pwhxCzgdtUatUbB3e2Aou99mYAuE7ZdkQ5UbvA93rLxSwi",
  "key3": "4oASp5d8LiCFh5CumnNdHaviuAqAFgvmwsjzK3oSJrnY3wBsKZk6VfxRMiSS2j9xwhAUsztbVqnN5sdTWWnPgHj4",
  "key4": "3ziy1rVtFbKfS7JUGfv6ezuhAvfuHWaXjpsWDoqPEzA64MzTTdEzv1jWkZtRtXmxV7HsD3A8MsxhPynLNgBYxh3Y",
  "key5": "2XqPnwCiRMPY5Vgb4K5xB5xrjEyJiKJsCe9CCU8B35s6eJT71c4ugmerpb7s3W1c6hfqvtD9zsgtnfWTuEfpSqa5",
  "key6": "4CNUpr7gDjAwjeoMtmdfhP318Zz1C64VQ2rGaVnDywDe53VBZ6rJNdA8mRhfDTaXP5cQ3CEjo1vkfbjmXFzAzwPE",
  "key7": "35axMEWYZKeGch9qW53sbjbJL2NTsCfLX6zQ35rNodczKhFcj5bkrsqQJB6a561Cuii5HNJ9S2xpSKNX9Q2iSJjz",
  "key8": "5px5NB4okcqkeX5t6yeUJYj5pKE5ifQ9RJrzfvBvKHw8sTDAXrM4hkq4Z9Wv5b9gRwianTFrAC7UUVvn5kVKspaP",
  "key9": "3GSpzaW3kzqoo3oSh6FGd9oDm7NPJiJjhDmptLzuxM9WpBfmSKaG3PeNiKbXExdMmywxsZeGmyo29cB3AJmRCWDo",
  "key10": "aNAjLX4GCF6UcfTTHviWfKCxTPBvbs1S4c48JEbxbtSje2n2vdTBemCiHLYrvaqEvW9NJwA8YduHoEqDJGWAZm8",
  "key11": "2ja1uHic1NNonQY2ockRy4oR8J3EHNpw6MDT1LEnR6cH38MzktW1eLVx4Dtt8vQiWHnUAwP9CxwPQGkZKYJQQJ7Q",
  "key12": "1ZFusNZyHnGWBQ2KgzqqLDNmFz1BBbipN58dmh2VLCSLYuT4kC8eB1QhwTyZRxhdn6srnfbmkbEXMSvzWayvaEN",
  "key13": "3kcXYyjq22Tc9gFPmsUxmCShPfvWtPygq6nqT3YWfdVEw52G2gVepnhSvaus3wFTi1d8FsCsQpP72AVn6u2MGd88",
  "key14": "6z51RWuMVAMuG5QQNM1Dco34zeMZ4x12MY7wTpeJka9orvRuW3wFQLhikuEQMtWJSvW78hhXV9KToxz3TAp64pk",
  "key15": "5r1AKbKAzWB5hyusvEAkPKtLooFxGWY838iYieaRMCNPJjs2dNW4gENzUc3DS9JX43VQYv1ymopsvwnW9n9dK1ya",
  "key16": "3rKfjKmQ7wCasCNedJJzaMTj346g6ERMzHq4ViiPaVTxDkHVmYCspDyYBTiGM3jNwSt6RLbXwEqeWFdBUGPpZmjZ",
  "key17": "5GTTysRy9ULTvJmLY1wpA4mB8RgPMjhWLmwdV7mCiwuRaNeGQyDtw12wws4MBYG3cdffEqWEZiBu5xyje5V7evQ1",
  "key18": "51jXUAyMfDdqpW2QzfnVMnNcNKwDhm9hp5KRr7ERipQBBSweBuPoMMsgEUKfbpY61KRM1EjcgyeAHZvfLo1q2MEA",
  "key19": "4Bfu6yLESwJTBKqYKtDyALNg7XtjaHeoYikFNpNcT4tyasYtQeLXem9YG4bzce7wvg7HjVtYJq8gL8RPdvAzXtGY",
  "key20": "5M7Y4tCBCPfq1WyC7256qfNj3m9TB4WvvpeYTCVLjix1TnA5aLcak4i6cPv6aWxZVbc2E3TdXM6JUty4xUMMBVzp",
  "key21": "4xSqPGCQU38xgKFTkdNfRtsk9TQ4DwCwXPMu7zdGy5ZP8HaDc38gym3qLSD7E7egw9iaQ5FTz2WotX3ue94Bnpdd",
  "key22": "4qM4jFWaLL4oeBZqEi4opmSdiNGh74ox7MoqkYk8hdEAwoWZtJmcn879HZ9cKGQwxzPPGGahxyhy3tTNxuQD3FLu",
  "key23": "52qkD9A2XUZ4t4GYLTPKir2FLtTRsxzThrmwD6efECip5cfRCiwBXJBSJpsvsjk2mAPJCrfFcFjt6AzjuspKrMED",
  "key24": "3kCQQ1iNE1uJhqNXGNyn5PMT7gDwBrfjYLCuCFruoek5Qi27vQBQLW6eAdvxFKa1ApDgHXo27yXEZfKDa6i2Jj2u",
  "key25": "jAsofcA8BcNSYmbfZxXVqcWeDgA65MZmCNSkdTQ5VkvK5FGtv2zNujzqPiDmtNNzi7g3Ay6iqnytevv5XK4z76p",
  "key26": "4THHrTNTUrN9cy6AjTghLNFco68esDuXzxnMNrt4PkbPzKeFJby7zNSjcMFkB1S4kwu2eWdCDvPCvVEPFNa7Mgu3",
  "key27": "2Wpi97zxBULDReJbfztWipCBMsjh4P58Y6FYDwAdAkWzZ44gzXGN84qY5gHhu9oRJxHC76zpjVAawmZbffeUxBpg",
  "key28": "3VU7p6XNAKbzJUqZEFBwnCGn6Q4heURcPWf8Me1RsCRtNnr6WH3QuN79xWdyg5egAbKqoVxsGP5KgMgDMrR7Ws5s",
  "key29": "4r32MKiwbek6A3EeS1EcPTzx5PStNrP7VgeaswXH9PFmy8P5DP3d4Z4NcdG9xTJdEk7sXr31cz4mezCq6etTwyXq",
  "key30": "3yvE88bv9yNsnazTwe5T6srAfdLvQfN7qeevSHJjuSgjGk8FStxaitT2rGSXctUrXjuQS59SU2nUnRzPMR7rpQcw",
  "key31": "2kFsQvvFrjcHdKB7cpHsAk9EnV4R7uhEhKaQQccZd4iG7hrBaK1a7NqSALnXTVMny5m2ntW7V4u8yC9CtzPicJqR"
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
