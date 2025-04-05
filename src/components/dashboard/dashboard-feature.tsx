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
    "2hRYyjrZD55FSjk92KbTiKCCHkjYZSvYiV8Aeq6NQpLSubseD6R4j7RQ1R2PpBbbs7keEuYQmXzzsh8svrbswzCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmdPdUD1KbL9QJ1rDeHVxReFMR2Av3ejgKeHdUc41xai5tdHcHy6G75vGR4SqRwqDKCvuk4kSCM5r2LhzjQuXfM",
  "key1": "FBmCqTPRPnVD5VoXuDHZ1B52hkArcPgwho8EThR6tP5CxxTzgKk2JbRNZBGQHWaFS73tMH2XGutPeBbZVKetqpr",
  "key2": "3faDPNh9Yox7tejStquJnKxZJWaTtQkBXMAVi8cB1rPSDAvRUkTUEsNpsUyu2qKM2zA4pRGfngpPR6LUep3Ltboi",
  "key3": "5qMeKcBu5nNZfiFC56yVwppTLmmh8ixkkpBd36xUaLDinVT3x6tJ8G7Nt2ooomRAYJ6Jhjy4PPvKWRnn1b5mj8Wr",
  "key4": "5Geut4ufJ2qbQicmFeDMNoAQ8PMLXyyyzAFzybbKnHkwNds9UKoH6thcjGz4uAvArSptqzqNdX6L3PFa6kng3KkR",
  "key5": "n8qnx6SMh7wEqnXbG8xyPVDxLeEgYTCsQdU41QngQuSpTZ3VDNWbVtEx8K7GbdCn2Lk7VGYRFmno8xdGajyfRoQ",
  "key6": "Z8hs4GVEFubs2c3TAJnyoV4VsnpQmyqzJtECEuaBYLjfSYPES4Di4msE5Pi2sLCU2DrwuA71GUGADMNpBEjgSBx",
  "key7": "51RomXQ5YupZDe7LNWjb4KNUczCLVo9cp3LvLoMdXcqsSCtUxGRxm94qx6WY1jR6CDkNbBYj3o4gMa7NLuTEkBCb",
  "key8": "4XWZKaUQSuzFEdJ4H3obMRp5ynPjF9sMPUrLkyWkx4EgNTQBwcsRb8nSVyiwiMEMRFuJbMg66uTB8QynEB6Lzw8m",
  "key9": "wvQUi6nH8GFCQ7yfM3dnA3v6ndbg7MuS6CFw5634RjZgN7G8uuDJJoinP2YBCQHkkASLkfcmXvaCBq7CM1u8SPr",
  "key10": "5EyJryPJr7htvwKcMRjM7CJ8EzHBoSAQ8U7DtqsYjwi5TWQ4xbZZEv5xUxPKN7n9XWFzkZETHq77Ko3tGYeoHvoR",
  "key11": "FGN9GzcNUu96TruyrrbtuB7uhWNQ4D2qQoCyxBanNj2VzpoWbrCjxQWABnBEk53B6pKib459NYvBb5fn3ACZtAj",
  "key12": "4eYDPKZTYUVPYkBwb7ptZCWAzqFgYdEmUdF6eAP7YzVnkA1FnzGwX4Atdh9jJTezbhrroce8HfaGNvtn9yy8ZoQv",
  "key13": "5ZhoarqdsMCuKHxBgPxEWLWKzkq7CBdKwdbruH5Ldb2LLmZuS9QY3sWNBYiDowTFNbvwZNLP8r4DqxTEu6t8LWAq",
  "key14": "5L3oMUXJ35EpmNAm9uhugANpL4jdForxEenmB3yGqwnsQfcjpo46WpGTXWouvQzdGaPmqTn5dXoJ1jWLFGjyPTrc",
  "key15": "5hkesQPamFn4zouaVVqD7SwFooUrm1F2N3bBdsZpei7kwPY2cJEhJbhKWhBvj72a6KRageVuLM1SMSQyrFZbXdbQ",
  "key16": "aHUZzjy6hCsEERdGo9dZ3rGeaJMTsLWWBLTMYZxrLPSozDi9o8jRdDJf8AhPkZJhCnzB3cd9XqwPfcLhw8E57SU",
  "key17": "4Q3g86fgWKZZUPN3U96ZcVeCNNEAAchPbq1nK8b8Aq85G2eKYxnSLastmy3uQoiZiM5qNt3erEUaxGDAFNni6t3o",
  "key18": "irzwQNnMNfPzYMDm2PC7kSJZRf2BkJn42cAMpGwXd2KFNsRyjfYr9MA67AGTxyPUQFky85BVxL1CLnDVKTP9uRo",
  "key19": "3UkKQWheg84HdmsuCqsbUnzfV27yLGYc4vYd6BvbMMaarjtSAwREoVd3rtJXuHm68drDP135DsRPtNxsFf4k9u1e",
  "key20": "2vyj9uBfdGae5s6wcRfemwqbG6vV4b1yAC3tiSQuD28LNhrhjxYxVzYXapgEkEZTQ6QRunqKhoVSh7b2eBbAyyLa",
  "key21": "4t5F69Cr4tJNenFg9QJ5zxFaUNzUNWtdnFm5Rswwi3KrA2yKQkBKwn9EWTU2LLZQuxX8YbpaK7bjiS2zwyA4CmN8",
  "key22": "2rdXqZ3c4F5XZZCB3PpkYy56ALyxEV83rE6BA4msG3LDtxSXXkJRrBMDCqxcMB18gBttkSSfGHoeFUW9VPJyNuEj",
  "key23": "2cannA1MEFb4SnrGaKS9tCoL5YYaL4S2BSUKpnCbFqFcthCuc9vn4TcJ38dyDDmeRdMp61T6n5SPZKj9McUHLNZt",
  "key24": "66CegUNjHXdo9s5xXCSPTTUBaVdefkmJE4kgZQhHFiTVrohBwTXayfgCDK56LYCRDQ4ntNaUbaKXaQceGA7dCLHh",
  "key25": "4PgB2L2XVejFFrbSkw5bSP7gFrse48VaxBY298GMqpRDZs2ABztVHqxnnwCL1X7mXq2a4iD9yyf9a19tGHCKHjZG",
  "key26": "2z7JAayWaq9YEMNjBwbdr2BPJQTAkcVbiB5Qiqta84S8KKUZLX3X97BTfESc5zjUo76gUu1Urx1D9tPkgHSL7ydj",
  "key27": "3SYvxzLRSC9J7dMYzZCHsTKZJSqPeVT19Uqy2XB1vaUaYSNj79jLC8jCkmRLTLSwv5eBtEV9nmvg2jCDk7UwR8Dv",
  "key28": "8SYoAD2T4FukCReG3EH5YRuNueGiJhLTYog8wpWP8MEiDV2LXSyVeX636qPWYXhLxQZeS9H6M9gGFLGXAgFqEpA",
  "key29": "22riqpHhRt4DgQ4c4v79X38BuenuicdT5broofBdo8HAgbxCVDQkErnwBB9D9Snbos73qpfTqX8cavmnQbqs3ero",
  "key30": "67p7JZfhCBDid3uatftGNHHhTWk7DCiNYvTRJXFenCGp32o3mGkT8YvELKAD9BNKwAL6syGuucpZQZUSLpvGxdaJ",
  "key31": "2eEGhM5JJUo9r3aN2WiomoxpBHxa62X5oX6PcudhDh8aUdMzmSugVhpqtHe7BYbWmEAHmSk5BsV4FhJHVpYsqM1h",
  "key32": "CkZUGRnXb7UTCUUWK6g5ubvLhDVbgCdyTT35dvDVwp98ggkLkgFThnefXRhm9EfL53qvWRHsSF2v7q1XtnPyCny"
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
