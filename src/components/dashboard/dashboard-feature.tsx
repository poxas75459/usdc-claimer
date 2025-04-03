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
    "4GAM4bp6y3hMQoezhNcDFxfKP9YBeqhg5PDCtZcGfiZV5z52K6KMVgmH7a9XR2QS11oL1oFHuEPTzjLSooTivwj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPrLeW4uF1LY8Yjwifn86TuEmJKPpzfQkm5gnNDxw8pVJr9TaM9ydwnFa99JvKBxCfRpRNeyoxvhnCmGVGgvAtL",
  "key1": "26Lc9DdZH3S1zfEM7yxMrznh1A3YhXgSGBsE8HgTLdLQt6htgUiH7rBwrGyxVQLoESk2Kp4Trq1JAwzDPdVGS6ot",
  "key2": "2KQ6aUCbrhgd578XRPX5F49gaybkyuGajC8QS4HfBCNajHE5LhF2wA5i1cx5jdiPpS2Zq7qMW3qw57y5aWMzKJdB",
  "key3": "26drJQWAbd4TKaByMsQZ62o2KFNzJE9R6ze9RpcsvifuVBRKvGxuGhboDozUx7FVcQiGDunn3TiqoZcDK6cquL1n",
  "key4": "62b8HM65BbPecVFoLiSndaM7jpx9feLh3khiDBsRCzcVgfGr6nDKZVqLUDPb1pWiFYuy9zXKxVbZFXrRRMkx13PG",
  "key5": "5eTSejffYNDJaQV3q9vTHHZpK5LxLET8YKjK2cmwXsXxdT8srQxxk7t1eSXZMqDFvpd6PTAeZmxxGDePYppfQV9",
  "key6": "9aWRF9SpoYjJCkWMs2mEeJwsncukbbrk4YSrBadYwT7JF7Q7fybrv3Bz48sAUD6mM6YeWBtVujPEHbbfdEZun1U",
  "key7": "4hkTs3BZnndpsjZdMRLMHJJge8hHrEKSZfxFw4KPc4DigGf1Q4tREuKK9h81n1J5a8QCXTD1oncubd4xaKZui45h",
  "key8": "2ZqBaqGdkU8ztj62L5wwu9Z8tvKDHT3BJe8YpygF2uZtVGNZScppf1nGXv6KNUqXvPDFnZUwxjvaGryBSo7FAqym",
  "key9": "VyroJWujZf6eWJ5es7kkfdfhpmGwNqjFLQCixD8UNTgrzVEdPiXAHfN5BoXr7pocKNLJVYfmKHgFXVnoVpp5xf6",
  "key10": "5Z5dpu7g1RANzGpqCrUvi41zFu2GnPtcfHf4kn4qj9F3Env7Shte6PhFWLAwn7p5pTifcr9XUoMyaWkRfN1r4f8G",
  "key11": "2RUCRBDEVJ8Uzg7FRTkUWvsGWxYDCquRwd2pf5JBH6CKuuAJU7qTDGdN2UuiAR1gmJzmwwiTmdihUdDowHQazbhb",
  "key12": "2cgft7mru6j1vddPQApsf2aaBBGpfogqmrZU5xsTjoDwnWQefJGs8bf9jmRvFr9eujVfn9oSuKbvwenV7c5ApsNR",
  "key13": "53mjhwEE4uZt2YSKN1jCYiC6kScCCVHV9D1zuaaduy4HAYVHw9oLLnQzMbjUGUttyX65wzJoj25e3n8iCtJx3bKj",
  "key14": "5H8w2NUF7RNoahrA9K4YWsXRyyZBFMpaKFXNZwFHpCavnfZpJ6mRKYGUksbv9FAHK7zxpyHy9p6W9SUunngTJLTr",
  "key15": "oGhmRPHSfBxEAu9MsAUCdDKbDfWCjw2cRcRzQaVt4bWVEDUEryXrgWap3VtCoDB2w77BUbYk8WGv2VdwA7pnZsP",
  "key16": "t6VzwpkUnmyfGLcmTgWdvobFGK6yNnS4wGPLnMMS7K5t2ridYLrDUov7XQWLj79MjTqJknSivSjaQm4PxWtyj2f",
  "key17": "3k8tGP1gTRS3ShrnozHo8a5GUUL9TUndPL68EWMdycUuhrrFq4VYHnzna4zpkGY7FNndh46Q5T76TgCpXTZ5Dw1h",
  "key18": "37x2u55wSXk3HCWXtCbCSpyev7Zupgh9TS6HCCt53JXXvwMuteQXYkLNZocJCsDqtqdgtuahisussWZe8UqtQ5Sr",
  "key19": "2EdAzFmAqzzmjw9tF7cxgJavd43AoQqgwSnzq8bCCR1ne3QmDp9v7o61ZWaTvQe93DiyGqc8g37sCwitDU6tBRBU",
  "key20": "4fNi4aDEasyehK9uR4ZR4euca1y8rr2ZbbdyBCNniE5c5PTxogVJ644LHzmuP8TRgq7rhJY2o98kHgoQyxhyMQnp",
  "key21": "5dQAwiYjaiZGDJXSwktGuXtWUFeU7NP9AsZm3EQ7rDRTw5H3Fw1Mw8NTuidJe8Dmsfo2eh3drJ5hGidpSC2rDNRa",
  "key22": "3TdfvU98kxUCeNoLS5VT9WhmbNq47omNVbeBmPeUTMYVHyCzQmoGg5iyiGvyZEoYK9vnm4sLTeUfpjJkBfM6Bq3o",
  "key23": "122VbpqnM7BYDwZjyhCPbrCLe7CZpdLwWGKV7XQ9NUzijQC9fMrWYJfrcmyRUCSSHbXwtRybTv2Tv29oagZJ2oqS",
  "key24": "3T4xn2Cp9MW6hdux8mbYB1233sqVFi49eCemJo3cYZKmcBaUg35V7rsLkKrmD1fhhpsEetKRtS3CW6gjVzaX5sCa",
  "key25": "4NahEtf7in5K4w2VNjr8VSoPKjz9KXRVenvkaWx7LZmSvRAoiaS6zKQcAT7x5VpLsLoD4uWVqfpm58ae9r3v3Wua",
  "key26": "Mbn78ksRxQGgSbLfQBaq6PY7cW6nAvLnJ6ZLUTCf4K1adXNkcVteinRPaB7CgMGiPuAS2btdRckZANW8yBSpxX2",
  "key27": "4dBjWbdyPskRwdLoJsExKP8njPHLT53dh6ZP7ZpqhYwM2XYEhGebZUdNTyFHiQg9wM35iRMAE3jXkft2Ymxm4iym",
  "key28": "5JLZoGmtbqYwV23tLctZHomRYoWvmGcnMprrTAeonWAXMiN2aQhs1ueAnJy2tCr7w1di1EK4GwrSNUHkDA8Gk61y",
  "key29": "4N8zNhPANGKLFvXcTWH3AFPGSREDEjHHZtHvVPC2mCxXnjNGnHx1gM1mjdKApJ3cfY8APf2LrqG16d7ZJdyjbXiA"
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
