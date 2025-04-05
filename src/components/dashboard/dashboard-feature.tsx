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
    "2Y88UEJWh6tRtePumtvdF15sr7vjFBbLpmzjuTajLZrvq2zDf9UYcZa1uS5qrsewkMPAuDonNjpZu8mp9JBeyoCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RA7ukxZWeGKnjdHU9epcg4AYt9MRgg1VuJorNcsW3FNiNVSNjkB5J5iuMfpif4P3dYSRWBeGi2kowP4Ygm8CZjo",
  "key1": "xqh1CtUZF62uahekEKoT6cecdukswELeRvNGCyhJXXHbxTL4fnYLUwrbDeZyjRtNbgZwt5DcsofVC3KW3KwA5kE",
  "key2": "5ZQ9TEMKatsaE1UBbvX7YJFzuyJPoHtbqoYSgdEU6qbzLQEiS3DDM4wBjGKCU2xnSJ5gWXcuawT9ZAXYhiF5qt42",
  "key3": "S54KXGXxbW7VNzoz6zMu68uHEEqENPsecjooaBEbmMMVdd52MoSWrzLCYGuJ1ajRZYHm5yNQ4m88Ar722JJj5uW",
  "key4": "5snPrfJMhDm95jmGThKk7McjvtKoXyzuTyxgsJqzJcKsT53CsgZG7QvYuxhz2cgvWaL8Vf9SVQ2ptvXz2cnczE4Y",
  "key5": "WHMWY4smSeNGB6Ut35RWdMCwJHERzSg1Jw4Eruhcxxoq8KTzj4NCupBCgVWJDYStEMr833bg86yM2LetEw6FJzA",
  "key6": "3eH6YYRFPo2YV9GGGLkNFoaYVUhrh9FF7zqZGL2eHyYW4YwZNcnLePsDPyZBAE3cJiQYi988qCuKVj9Jd5ZKwWXa",
  "key7": "2gcRt5gbkSp9dnPPNXM61V7qdWRmSTj43s57NF4Ya6bx8JyHYevwqGE2csWxqWwj4GMXP9zxaHpJQyPMM7K6x7tH",
  "key8": "5tLmEK7KSkRs5kVcWTfbZiST3jhM8qRx9Jg7LcGfCPR4yVXh1o4kE8RNUQ9Q6heqB5JRGHZCp6EqxMoAKGwpvace",
  "key9": "4edkcAxgnRT54ipMp4f2Fjz3PUmHC3f8MJszJ4H4FkEuxnUTrjgres6ZQwkJnGgh5q59vy3urLGFmaa9sdyAtAP5",
  "key10": "4sTR5hCHSUqb5H8fK5SKzdexGEExfZfcGaVN9wgBA6BWk5FLZeZ2QGy1B9oZYJaiZsnqhLmJ3qJDox1TJdfhX8MK",
  "key11": "5dyDhFx1s3ucHxhsg9HVYaeezKWuQrFoJzTAyomJEgUZDE6kS5muv8hL4L5j7aVaFV5RJps6EXzLYT7UPRMnuGpG",
  "key12": "4fmToqZLNnPkwnQm6KDT9QK6j33BDmCH7BYTwhUts7u9iBKdRVk6ragWifGJZcrAqqFRhj6ukFDSSfdJfZp2zvwK",
  "key13": "4GwzPwvxftupeCQvzNry9BupCTwSHYqNAXxLhxbsWA4mYEHMhKa8wDFFUa8qZrRJEZBU498emBTS13EnrgJBFw4B",
  "key14": "4AvDmJrHfbdTMLMtN9moufr2va8Ttt6qEk2AAWkijhVaEifZUXnAvb1UhaaU7jNWWFFdCfqn5pgWx7a6o5RqxFed",
  "key15": "yim7Rk5aN2WripGea1s3fFXxJPqQ3WewFCL3jHpqvbth2cmsxgqG1f1nD6egnQxaoJwT4GLGDmUf4RxcrgFjn6j",
  "key16": "NzLMU9zFEjr15brSzrf2fsLkFiBgAKHNPgQ7x396WLhDvF4LKQncTzPiA9M5jn23fNw77CDGhLAuwWgruSutS8L",
  "key17": "51PSnbgaDRYu4HhZunJ4QuktwkAngf8JN5yoWCyZ44nWJKGtpVqBkK45csnkThmURGDUam9ruyYAMby9Uc3y5M74",
  "key18": "2gAHKRuSfR2eijuyQ6jrFK2madHd1RzCfsz3LmpFsUVvNQ5BS5z36GYJo7czYJKB9NhVgmFdzFsVYZMZQh8AE6gz",
  "key19": "2R8GYXrwa83bDhMzb2NQbtcmMLxWBYVNWyu7G78ZnW4nFven7m2GB8vcNuJitPNftQ6hZ4gsTHbPpwHwNqWEcnAT",
  "key20": "5y95DtdHjnNcSNFTCbd7h68WCNJEdaV3uCWqVyLfSm3NJcredwWjkRj3n4vJNrZJuZ6F67LQYvjbdknX3pzhr3va",
  "key21": "5gddcwHwusKLmW3NeTbm97fB7m6oAMzvsxHQ4gtmdosX5f6rorHvThpbbLooooySHASUcRkQQiDE7NYqZHwvSiRV",
  "key22": "5aVAaPWVDtPfgTFkEpw44anYn9DM5m1JWmQMwaEhYvrq4BRfhKThjQWFAKzwGut4JAKsFD3VjZ9pMkNyfwwfDtKE",
  "key23": "5MYt3TUDNWp6vBcojdfZzSz3f5tjpf4QtAnxbm5TZiipQCqchMm1uERQQecdH6C19xkpEabxe82C4bG3JBK42SU9",
  "key24": "2tyWAudtKPqztaz7XqJyMLCGQ9359ne1uYTZ3sm8hXnMH9NXq1gDVk2F1MhjDatwPiZg9guppB8KeXTJS4yCv6MD",
  "key25": "5VWpAdK8KcSs5Ez9FxSpzkhXfV3WKnfeBrtiYZu8gmM7SGv9Jbb9Ajh66LHdKa9YAL753yNYEpHWVJDoJ7fUT1UP",
  "key26": "24W6v4BWEuhuAYfEfMwXqezdxvyVr9bW6A6JcytpRYfHnMP9CK4dKwtCnqd1xpFGP2ro2ydDB3J57NXYBvBvYHNg",
  "key27": "jpg3XCWfA5Xw8Tx7qsfKvT2CLJQwdVnGcw9Rt9KexXv1uMY6s2xGAxow19Kr5eyAGQRFX9q2NN3uwupkyUbY7cL",
  "key28": "2dq4B5KCBmBLeEN8ZBvx8DUC1MGpXER5zQtxVxR3sikGSgQJ8VuSXp1iKHvfXk7YW2GmM5xGUbK25EyQKcbua52X",
  "key29": "2sA8xFRWfS2ifw78Va2VuXXjWequGNxhcUTVGwbsHw4RBe3ECGwvm6szhAM8nB8z84zaPLiDpnN1V13ccWW9V4Re",
  "key30": "2ptWh7npALg7dMrUqxUnxCNvf3JhYGxu9J3EoSzWcCKqDc3NZds8DQA925t4TCyxuhpbVwBsRsTPuJ2DxPSsCdgz"
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
