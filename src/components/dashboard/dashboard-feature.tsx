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
    "5Ag6QeS3fbvA3j6bGujnqEBeYqeYqCGj7SKM63z1Whgz26Q2VWPduKSjtPeW65T7vaD5g4HLmbzRrPrisCwgwnKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21bn5FAy1jqa2EmizaAUoWgBJgzKMrxMDnvgEvCoMcm6MA4L8rXqBNA51WCVuUU8YirDtaQpDvZJamHjQfb7caQo",
  "key1": "5Dpxz25yXFLwNLVDK8r6p2m1TMvd3aeTgNuTGT6PRVPLVqFVQTvv6N8EFuNk9RzSBH34uuR1tKYQrKL1mcsapqDG",
  "key2": "5vw8wJSTp3CY9TZG8T4fgRz4VwJu69939AF3b5h42uiVKSgpaiJqtY9g5CsogG5f5tVV9ecAEX3qd7GR8EAYfZff",
  "key3": "5fS6oS7osGMRERZ2jAYVSWQP2DpovYtCoJtoo8gZYwBFuU6JvSuoFsZUD2WoqdxYhvgj7GG2VkX7seyv73qRnv6P",
  "key4": "4thJ1UY3FftypjPYd2uBEmCxMCX4JVamB9nGbYfL8ouNKrc1mXUxiA4BHd5s2hyUwhnJaDsHMHAopiway8JcvqLy",
  "key5": "299rQvzc4P1zVw4JLK8LtJZiLhrNCyCUtb7wkqfnLYW1Q2A7FSe4srWfGexHrMDrvtdFaUtAUZMRCnCTFdvrSCss",
  "key6": "4nubEZhyZp9b4vdNdChQhFyWNLA5yskdt1gTa7uC5qtDkAdXCRrALeKaZkgKEA1JbvyUnbBusHziW7TkvrKVgRRg",
  "key7": "35MJnwvxqmUtSEg9NnHC1if7Sy1tWRrGHhfDyiQ2WzJLDPEEyvzxvxoY7etbZ413joF7rEX9xoxZuigtXt7ia9Rg",
  "key8": "29ssQCituXVDUo2pC8uRN5ctcGRSadvLQFUJiDbKPtoWbKxBkmuRaC5RBDogPHgF4xdzrt3omuPoZiztccAySNdq",
  "key9": "2yvYYdgoQZHX9BpitrSk7BNnBaXMgsbuVdvGT7x5jabYEA3CsqUPZSNyZXMEm8z3jgRGnzBd9yX624grqVoUrsrK",
  "key10": "2etoqFxmLuzJG6vyPVGc5pxEyfVtvSSVawfAywwGKSpAgUAnQawYb9Zmvyk1PWDxw2AN59gdu1B1RngXgAQ7h3AD",
  "key11": "4qFd8haUZ2jpExeQKSXpNscmrMuzWRxvndSrnEcQAELp2ejd6EXMgd2wPM7xEb73s92B6MvWCvBF7rkqGnLVG9iR",
  "key12": "5z5QU3gFxeGYjWaxzjRnsZ9fArqfhwtDC54ePY8zzR59Mdk3MDh2YV3V6jc3oKgpEU3rtE7EzpqMUg7NGwneay9N",
  "key13": "4kP95Uro1TcopWp43h1vHpRP2ESh6Sp6G8GBesPoUpxZHvKP4SkotgUk3BJjPKxjfST7VBXXLPy7jW7XpysWWZjG",
  "key14": "5BkcvqTbtQspvRmsEksb3KoDw31XAdDkFhgmu922RoqqPT1c92KkQixhQSEndXacbyx6zSEGHXKSZ88FFVRzodQN",
  "key15": "2b6fMEhNurVDsLAzJfhzWbwXpwocPUDxzAbocePiaZxGjfLmSd9DcUNGtcywPPfeJLRe2V7jbgU3j5caXNA4H8xA",
  "key16": "gPzy9K1N4op7F3Ujeh81NZbosBLpdvrRRcnhx2JRAvp4wDUQtFGNoX66BzwEgNbdXaH5WwugWB8mPcPNRp5FVE3",
  "key17": "5GXay9PQbNCig8X21x3nyQVHiaf7zd54qmvBzoPpsw8eLxHKvUtWmW7aXhQ23CAP1mbVjbbN2UZRUf8djnSvib2W",
  "key18": "33W8EMYh3169xocEe7iQC8yUXzXJzd9HYrLtRkTyApWyY52zgbXXv9nF8tzbtynaKgeLXs9716ordx2wc8jnoNnb",
  "key19": "5kLdnvL1T9gvvMY1DZzd8e9F4Qtj2YXCUR7aXeq4eEYkjD7ng7TmQ98zYinictov7rp3Qj1ER3eNG63mtTmVViaK",
  "key20": "h21GarJb4UcN3HZSHU9oGDzg452ibFBZxBtWaXypj3djpEQYaJre9z62otoVP2pcn9wM7AV42sBKmxRrPcCQBY7",
  "key21": "CmgosBXGzTAycVMP5nRSZBN2AynQJeUtbqehZpewTG2wgA7cgszPs6FFNg3ZFnw55jQusW6SpWPV6u8CqVPaGJJ",
  "key22": "1FtfFTKMxk9pHFc23iXAd8rncTQEJBzxv3R1W9MxAjQG2fzUneELvQHxSBLeFeEkE3x8UUqg7yV6H89XqZwXsJW",
  "key23": "3eee8AmHHB2h2uGbgAQ3b6z9LT6FtaLaZ7KeMLbBXrG4fmtNhoGoLuCdNWsT1Rj6RtK39AkmoQAvnrghp9PRgJqr",
  "key24": "2F1cAvS9Xz5gSQB5prjwadXxGoxr6bXktBKyaGCA77B4QopaiXYvte3Amb9XFamNiR8C28wuBvB3pLMcWBu2wiwY",
  "key25": "38PcPvFBiP6KGXEyA9XHjydMNQFFpT3PJsf1KVFGn1Dz2za97wLsN1NAt8R6n3MCNrqcFd7Vs2zsR6WpjyJDpbZk"
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
