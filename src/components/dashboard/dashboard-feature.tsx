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
    "5eJ9xnWG3dSGx9JNGYs518r6nvaE2imEYCZyw7vL7kupoB3ZeedLvsRLNXVezUrHiUGH39GExHq5fKWYxxBmrHK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QvZutPenqATtNQRPSx7pmGqTDAa7wEiHrEP9vziRMJgYT1Mm3FMfaM9cbpwBMbw1zNbew9osKzLaj4xzA4HWZFM",
  "key1": "49wREvQCAQf4ikxPPANw2PkLx1m5PeiqJsbYZEC8bEbcY1EXn5JEyLbDXKojMeE1rUZZBFG2cNQ57WdmuXjgi2sM",
  "key2": "4cajG4gQd2j5th49L99cta7Tzbnk1TnQhgp4BbjbMQwbAQweUZuZKDfxPXzJcdbSqDKccqRUsKkH4abAC7WbjX1",
  "key3": "4BxVzCUKjUFN369uqY1ouqHMbgZyHStZYcpqYioosxo9U9zemo2XjSDtVhVJcg4rS9q2TV7wpr5SRo2vWzR8rx7C",
  "key4": "5GuQ3FABrFYJTsMmTTUhm7WbgKtXpwqUPx9mKenNfwjqBUhz8tM51iyUydjDLnrkCfafm1QQ7SgXGdhwBRSyjghR",
  "key5": "66DuNcs6L8ydXN57n9LX66H599p7y6aC3qEq6Ta7kUHpVALgm44yUgw2xD4EF1Ukd73PaZJvoSYKx6RFF2GmkyW5",
  "key6": "3TFJMQyAUkNEZLWYrvaVcwUKn12Ausuc1qj4kaLuGfULR76xSGvZvbkKVwqfzfTz3nuDtbsBSXs421hf7Ei7cMNo",
  "key7": "3WS5tCAg8Y6v9mLSUHCEKKuD1Gj9s1J64Hyqixk2qvPmeis3s3X5mVddphaJeZEm1Shf2rkJx9zuqW9xCKu2rrQh",
  "key8": "3KrzVmowo71bWFrSMxHVm1CnmMKgRTre7s7zUCHXugFwy9cuspRDSA9wvzKXVN9WjKkc3mkg3cA8VYVorG3FR9XG",
  "key9": "3rw3i5n3dGwvinZXYM8esuKxkruj3maoa95GWpNxfG4y5SHxnWs7iJyRuPrhBnsPFgSfsxyZ1BxkoJDfAbe9C888",
  "key10": "3XzQcyKtQXd4VydquYG62fjSqrgNArDadSbpMxQ5NJ5KWspWd35QK5vudyGY4D9BR96pDr61p7DPFYcanvnYavxR",
  "key11": "35zFT4L7kF6stf6PhJWJ9sgNx8aUAzWjAMPemGdqSe8Pap7WFX2c1gJ3zbMWbFFigUsdLc34Tk1PpFwRpifXgMKL",
  "key12": "5egWC2ykFSCY5PnKBsheeAyixSQXM399ds69DzGPDJ11iZZV6Nostpu8EiuuWFuCWTc5KVVGbM1FwpU7uWzMtGxJ",
  "key13": "2eEA9Qi7PeepKumQCi4PmbDsSfExHZjkVZrjxKhx9ZuRE1n77XT5pkN4VANpnSBQ3VU1qVgRcNEDkgwe2vxbXFSS",
  "key14": "4Rdt7f25WYqi7VqMFGWoH8o3u32nLjT66hBDqCSi9pLEpRwkXy6eQF7apYJ7ZvGMXKKykLtBjm5NqGFRpv8LQTm5",
  "key15": "4u8pzEdcbWJisyXDfKKDvxyS8AYGZTMYVE4h96Y7DfpUgs9Tg2DQ4CWfcFTbqjhkouhQ2zcC4GhPgaFYXqEdaUhz",
  "key16": "3ZfRkyE8nTx7NgkHjw5bJjH1mnS2WJWfaucCN9hksDPkh666U1bgcgXgtjSX4vBVxnQCP4pm3WNQGMmq4c3D9fkc",
  "key17": "3Q4kmYFqbrK5p7umUWpBoSVsid81CAStaxBkXy4btSBHNKgGodn1fmGjj6oH2GDq3dSJiHDmHrLtHRXdtGd3iSQi",
  "key18": "JxzzECeMCJDejVABF8JAZrQwZFE5xEwoSAmbo2rXiHkLd8cNmGZ6kVxwTqmUgu2LF1US3AfV6mMc5wQjqLiG2cD",
  "key19": "313EoVykAJPGDkBVGjr35VpLMvJEhZZWPSFkS7jQEgcpKHoPsms4T7T6o8oZobHtFFAezjSZK1uWAUQPWNDP3ur4",
  "key20": "5v154SiWX5oJEXPWHooNn9X7PRwXj6Rp5AAg1uarrxCzNv6HLkAQpnBkLYN4rCU7RgJDVR4AoFPwD1sxrJk5d5U2",
  "key21": "67kjFxdDbZDXX8vfqKMFHf6pacGNbRseJ6UhsM3tdYqCk1DQaN4xGgNR43GPBM86UgBLmauCpHsxGLTUDkJu7twu",
  "key22": "3vjfsy2K38Du1wxhfzA2KsTcwGBNgXc2ZfNKVL795hM3CEkgBd4qVF6zVx6wgG4UovUQ6v6PGx1tFR5oWJBJCNr2",
  "key23": "LtMDsKXj9AUDqNzQb21fDtV4fikRSC4vW2ymBTAnrjfzuCbnSEQjv6o7WUqEwxADKkB2Kv9BaHq9J6WXqHrWP1k",
  "key24": "4d9gMd9p9ptJFpkmHGmoiu5edHDcohDvneDvb64wUpNZGCXA198JR85jjBhHt22RuiLvY9ZzLVWjWxbwoGFDG8xF",
  "key25": "4p6W9pqAecst7wMzt1n2diUGKsTAoNE3KgmepFE1ygWHnbLYEoQLwCJXosLu67LC4J2F8phc8E32221hjSjrszgW",
  "key26": "5gEicCSPPz4XRSnZcpMZZj3foF9zuAcudPC9vWFP9GqFZ9R74E2grp2zNwzqf7WLFkXt3XYJtfqBDGWpKrxkjcj8",
  "key27": "4wk8rLfiucPi8czBsG2QQVG3pMTrTTDtSBFQZe1gwrvhv9hjabqwjLFxBQFvxbpugwfchgiHVjmiMoiAYz7W9gLu",
  "key28": "E6wZb32uKCg6w4Wukq6ScHZ2n7qfb43Q28ZDezco1St5FzDsLgboyStW4wrdNP1q6c5mCbfLGu7DJ6BzWHBtGL5",
  "key29": "SUQ2M9y4B4q3K7nYAo1GXxyzr8whL1mATTBio34DeRy1ugHiaWgYKWUPHK1DJ1LTNuYzsgrCwyyjWQu3e3ee8ey",
  "key30": "AgnhLePMqVwTzuHAgiFwwRNZbY2WRLfrn7jzXWFqNrePeRNoDgMkENTT1oBQW2LQbNDqmM1ysrUJotD9LrnYHgL",
  "key31": "4eYxtrT7XnbWuvUE2EV3R8fEqTNU7JxZ8ozU6F6oJ5FhXKS3pSEHgwMKp9ysXAKkRxZdNbx5YqzmEGjHRttEV5ea",
  "key32": "kgUzv5kGj2G7CDYHXDYbQ45oZVduNzFtkJSutBH7ikvMtmq1dGD4mZzLXXfgGbKokw1h37sfEcqfp87dAUAN1M1",
  "key33": "3kefTAvp9r95dpSLLbyYyr3eLeh8zMcLcYQZgrBErHrVS6ufuWUg4rp2qnpgKKG5tsmiSrnfyeR6jXthNA1fM6kD",
  "key34": "5NM3xdd2mgBPx9c44GcZsKQDfBR6G55UK968Cgm8C6FmWYfoXTc1GoL47UtSgfKtzAyHN7Gn5vcbVNz34Jw7oTSt",
  "key35": "5gHaZDrDyyfp9XhgJwYtgMgEMfWssQXPKsuzGiSatQbaBcDy5LaDfkYJVezRhSjDAs7G1v9UC7HC4LGSEBSSsHXp",
  "key36": "4pkRQtc6xdqBEzTtZTzzn3z1fuGbmuCUeJMqCFZa1vZomfxTRbHzmXnvwx6GFBeLsmoXL4RxE6yGB3C77kXFR538",
  "key37": "3VntH2ULbZaTMW2UoKg5bndyexpbcjKcqGV3ygCbaCoJJjdQ8vzGaf5NqfFD6fBixsqpufKw1FwuDVahqPU2sHbH",
  "key38": "5FmM2iHoN5PDgg3TrNELEhp8DBgLxqsEPeF66tQxiehgt2yphDVtSzDiFKvZ7RxSj3iTVgVVZmD1eg3SVqGeSvQk",
  "key39": "XyuB8B3SxHyKZTK1SVUrQ4u8y6R4EYRpjWjSLvuquLcaP1X7nGMTD77HY9ebq1WqH7gwUsgEsuzx4Z1su7azGJb",
  "key40": "4wihKL8V3a5gv58Gjo9vGfZ8eArVHmgWWLzSLUNCkWMAkiZpW7Ra9gDJyTLBqRzPmeyKACh72XEy6XsAcYCZeiZS",
  "key41": "2QvZJ1MLkevHzstTHxC3ysvsdp2mToo3eUTmzL95HyXAPhKdYQJ1UWtmgjZEukjTvasFre3TwAGZ6iMrBMwdDicF",
  "key42": "bmDniB3TLoAyXfiHm969bNTVDRsNqaEwVM6WMqa4pr18DDBsdTPFNeLL2sbimNjGmcMWUdPv2Krk7rnQ7W7TEzt"
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
