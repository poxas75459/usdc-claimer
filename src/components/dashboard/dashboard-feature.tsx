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
    "3kdfq8RjZp7dKNSEu3MKQ4UhNMoRKGhtaVACyhosGuFNbfYiKP3TZgz61CT69vxCS3YB7mDraZXVDB7K4YXZSHcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ViB4SJ135TpUidJbfSTVQwiftR4hVpJi1E6W9up5tvNjhYvGzSGb1rmc8iEvGQggD5fLWwRmbi2FMQkVWk25zar",
  "key1": "3zk6aD2eJfGRaTuHhYbUoois923EzQxqfUWGDLKwR9ne2RqBzFuZJuotgPxqWqjBeD5S6mzirqEh5K3431KHzd1C",
  "key2": "4hCFYu1ETvPCFTLUrBB4wadRU9ohqQRvGS9i263yyKUZubjYaon2RLnGABvPSt8kLaHMkuXAoj8pPC6MDpeGg8To",
  "key3": "5DBivQb7AQ6Wr7H5ph3AMKPJfRMqYyKq5f5YXrdPJoHw3ejZ6aELZsRxPpNaJoK3knzUJNpSkSqv9aMqw5mRGrFk",
  "key4": "59afrwSUw694RXKjX8QXaPaePYmBfe59QVXngLn46GQasYwYq8sYzttUEiUorGifbrU97Lh6KSfi7wC91CSU1RRe",
  "key5": "eGjHiYLhJATmQeEwT6kvgfX9YaRcrHwy1jEHkXTRyEuT22JdHvQ5B5RCCgWPsGjjhZoSMKipmSTgSXVpPeuxLJQ",
  "key6": "4mx75EdaowNGc33RqJ8J1q6DDHPa9sfpGVkeEoA7xM2C3eQ9QmxgzoWiK3c6p1YCVm52ULEHWBsvrakcf7v8nbZY",
  "key7": "5TSAqgApe1X76PafsRFDZVY8Q3Jpn4LyAAEqawnhNxtrY92vReuej63TpMhjWXeasKQULn8e57qTyj6BdA5Yr7cN",
  "key8": "5rgN9b3sD8zEzCTsC87vV4CizV7bifq8uqYJn7MHKQfqLR6o3xQsFKrFrKEzstt9Wuejkj3jv7GVoFazcbPW32zg",
  "key9": "5cjZc7JiTio4ckndZF2HJLC1hrmFYK4jWHdYsKMbtUMqzjFCgF77e2S1xe8UZHmJuHJao39StvnZHNTFDyn5MuPb",
  "key10": "5YYrXjNqjN4meAyyMtHkNEdwgXVn25bBUt6tvJNyjicQUQpnbpZSQrzpZ6s44cdTAFHNr9Z2D9bogtdJSi5Jw3nn",
  "key11": "4jsCgej5Bzt1tJHv2HCyUJYvFXDH9kB7WnLN8LddaG6S8EZY57faVbWX3VLHhwY4bYJmJkeHJdjvsta9viJZBk1U",
  "key12": "ATxr8ZXw1YzVc3tnMLvKeuopL7VAeiDdx8bJjN6rkWmJQxuCNvb6pjoPWyuPH7fbL288qwDcnHmAmS1Y87Tg8PK",
  "key13": "3vPXQYt4zQQb5KG8tX4PWKLzdrRbL26QTTVSevbEVapRJmNQA2h8TLcHjHjCYTR1roa1EZwqckf7k98R35PzidYX",
  "key14": "Zbfn82TWAunKiUyeovJPNNvRzhBqVNyY9tmVhW2VVWE5zg8oDnqVzC6rZ8Rb84wbXHRWjjGErgU72d99zTZ9cTm",
  "key15": "eKs4vqwSjGCAkqi22b5efFw7rWksp65Hghc5RLdsA5ph2N8DpAwdziPZzccAvxgLGf81qdWWgucqZn4oTowCveh",
  "key16": "2RWP1TghLBoWkYonpe3uxxYwCoB6veLxfQ7MumAj6ZqhgLqUHC5tJqt7aRYqh1UpQWPgFkxAs7Mp9Zabpno2TeYG",
  "key17": "4JkYiQRGnLhQbipKHcdWmA9znTBuNU9rpH6jnPEV1DhzUDCqhVZitbW4M82m5BPhU3Tu1fauRPrH9463BhdXPkBV",
  "key18": "2aKAbGQrnkdrxr7P1bXGp8uQjXrg2c2RoGZVP7xm6rBp5cV1G3PXGEGSP9j7JDuWGSzUPRJKwGW99SXFmhUnYmJq",
  "key19": "4HMtBXSzDJC6JvbDJTFwv3DPTkRQByiFDAczHsDNK6WKtiB45qxid2Vuv2rxcPEQZEYzxRnmJhhzSF4xB59nCh7K",
  "key20": "2eFnSYbCgrkNjbesuvaVuJhrTstbTWaB3jqKhs9c3s3Jea2AKAKRk7mPkPBDcmrYcmJXTWpc8xksGNNSw4YoKwbX",
  "key21": "4m7oTqehMWhWAMgofz5VUT4dBCCrata2ZWogk3RS5CAtVcmCAEAVYV27deqYtW9qE8RiZb4ewLtyrTecaRP62Zib",
  "key22": "CxFyv5LMXus61eunPDFWcb1H5NPhFoU4EBMmdxdCErHNbppSpTLHWGrCk67XkN4kuq8TWFsqukztJQ1ndabyiXF",
  "key23": "ePAgbSmMmLjKyZFiLqjfoFnQPCdDxqNUJF2WXKvbyZJF4rjmwaK4oJWC71riuSJFYQkq9W42jy3sT9ERLtsWSPm",
  "key24": "5txGgzhJLa5NYE8RXBSmZyBVkB7C6STuCGYkCMJZga3N7pFEzc1cjUZn2e2XAWA4CCxgzCv9ycEjdFs9ntnEM7ef",
  "key25": "8g65YbrvBcksFeGDFvhSc4xWTTgvEL6uxrwdqTo2av3n1MbtDK92emyzoeGgtGdYiTuUzCuJv93M4NGnyhUFY4m",
  "key26": "tbZD7HqVrewZ6NG59tkcw8a4bATK9KaPq3eyi55QzPBJzSpcJKLCdUpEJov5CQFHepFU9qNHk18xy8GeMsa19gM",
  "key27": "5QkFkxCG3aXzdHtZ7eUJeLDN5pwqkQWvmHVnGruJkpAsQa1qxjd721Uo83CzXjNqD7PrjkfvWk7TKfM1Nkgs12qb",
  "key28": "5T5GAXWZS1tqosujgYztWTQs9J6sz1kvr6BS7tzXXesn7gPsZEUDrSK8PzKDhdwf4bfjpqyQ6Ar19D8XoExxv7sW",
  "key29": "2jzQwR45cPPaCzoC77zmyjdqX4zFTqGfnQ3pBCCgGQt2i6y2DxmDrJoGXasauaZXaXxFZYYVPaK8fPYFs5LRZuTc",
  "key30": "S4EFdtPvcqxQetcJF9eEB1GoZWTTdTMsdJPHPr3V8BpfxFzUrupJKg1qRzJkjcGEPrFXpttxJ9So9xtSpQs56xJ",
  "key31": "5DRw3ssjCZd9Je3XEwk5JbArG8qx1NzJBy8WARuZNkF7ZVrNUEgxqDnBezwRgGC3DftWMR93HSgMJRqw1cDQ1SBF",
  "key32": "5XD2R4YaehmrvarjsfaUnhA761E6Gnc5K5XaRSYFk4vvJeNWoTLyQQkhZQZLeATRJWASfGSTNtnDcXprohiUqndE",
  "key33": "5doiL8rQVKAr8YA1FHvE1a2VYgJR2Hq9g3qdiwSXhdAzFVCYuJCnpZ9NvxdpnLh1Pd6wEQcecs5pYNCE3Uh3A6R9",
  "key34": "VTxmzdqmmiV4af4sHcb76MXdRZtjhT5DuLzPSXGV8nLfzUiFCfnK6fwoWZT9xUDFed19YGZ7W1WUMVupdUgFPRs",
  "key35": "4UYizSQKUrKLYqcgywgtARMUgU6wNGt6drhoNsGHJtgvyZUZvwsjZMuZsWn37eC1Wc4t7xq2ZjXZ85LNwSsEBohW"
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
