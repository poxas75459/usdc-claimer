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
    "44BL71Dr5pW9PB4kcu3mqtabRhxw4AUsEDhdUsynNXFtVXwhYXweKUEtqG3DLwX2BzR8G75sHz7j4rJfR2UTojMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wRfXjc5vxKdG4hmGFqH4LVqtRUbmNx3KVcWybhbfbt4GfWPhZsr19cBrYFpwu34cffzZNWFRqVpVRwn3ZehdnHy",
  "key1": "264cuJJ7N51naWs952yZUwtajbtnaA1ZSgzgkJWj1EtVZbgna7HzumW4Uz9ZHcAc62Sh6RremHvwQdiSVsDmjwxg",
  "key2": "3Ssi6WjnEodd9nBeWyoEMBWL8mftsZowkY1gqpX7AiYvskGVauyoJ3kBsVKHJVRw4TzVKBSBVRamn6oJh7zK4hmo",
  "key3": "Ayc52qDGFyZwYJpgPao9HD4uSJZynqGDmNjqGqwBb4sWCFKVY1a9qLJDTH2RccLc7LxJw1EzALHsmeGrTkGBF59",
  "key4": "q4NS9wXMqonKAxjyGDTHg6JJErdKpeTG2TUJ4YgohznhaNTwZM5dkNsB1o4vEqfssuyMACFK8ngKoGT6a9nk88E",
  "key5": "67pWdSyKKztrSQ3Vx4qpxexWiRUNk6Ts5s3Bi4AQGG7Tks6ugE7TQRVFXNHeFTAt2wNyYyKDEHBPQzQ7H3fmjfGP",
  "key6": "2xKUAFd22hHJHsUqPzoomWApKg2vSuaJ1NAbRZkaHZqEzmYiykX2cE7XjFCGTJUfQ8KrVjbXDWboUwKWp5gQLXEv",
  "key7": "RSMr1tmRjEckbukRYcYUnLHYVchZGtnxeXetUmWwAEcYiLgit1nTB1XVNqmbrenh7iHnVsLbjBUXmcBmayoJsi8",
  "key8": "zm38nb1qfFU1v7RAisrA3BL5ZJCK2Vy4Xz3w5EWXkAn9Z7Bv1qi2aeyJyRevFYdzH5vGw6Xh4CfPKRrDr5vCdnD",
  "key9": "4rrNLkUwVdPwVXvHPmj1EQCDwWrNFJ6jXuBtsCCYbkWRmfSKubBrCTS7zZooCUQJVpAN67iXByKCkcRAsE661fXU",
  "key10": "fzrQJHY54KixGFvKkG69bCs4omadrAwEzdeT31wLKAMXj6YQiVBt6VDeCuQuMvoFfC3sVVACKjFPbe7npDxyCWJ",
  "key11": "22ZoQ5w79hJswSTTJ6r4qCYjsDasJ6u3NUrgr5D5dYxG9YnLgVYB27ydmkCJgi5SGWK2PZJxuspq9EcnXMZEPvZG",
  "key12": "biXp17j8bB7nY1zpxMvU8gFwjJBYf3bU9zJuYW55zhv9jxrWCgz662e9XtUvjsRBvJGxkZGP1JybQ3gN5fWrsRp",
  "key13": "4GdmemfpoQcjT2hgZuBUpLx2FGt6p498MXPjcPrXtZUcULwcq1FFSvSrBL4m644z8ZezCSG5H8VxAgC5kcm1jfQV",
  "key14": "4zwPdrVzK1qh3fCnEEJi8Ps4Mgy3CesDiS8ELsqbBG1mAPx5SEUf4PRmQ6NMuHnjpyQBbf5v2jmrMCytb2RroWy7",
  "key15": "2TSFRAAifk9BKREberUHTokquxbravb87aZFKvXXaaekNkLPoZhY75ZrBmS9DLmyg5ijdYdhHBRiD7q5V4hfLDHe",
  "key16": "2Eaq1D5UH7hJQAoLmokt3joMQLXtne27Fuv8s9jGEn3uqQFsNf2hUtCMKgMxXAbSCUQXBv74Mrwxoipd6wCgsck8",
  "key17": "2qNMVBJgPYa5WkPvt9MU2q5hrkVud899Pa5SvzNvQ3nDVr9LhhjvCr8neQjC1xuQPtBdfMfzR6szBohZsik2APR4",
  "key18": "5tjtXprCk5oFCNF8dguLEczvdJQkie1SSwDKwRWDkeHgXTKN6AwhSaz3hnSQSJ7kUHkNPpR9GFzppuqixcioifJd",
  "key19": "3oDxthYkVauakG92SiWYpkQCyUaQRaSwL65d34AHWSpvwn6fKE1dwKnWVafvRnJWLyEJNUzxZruAsbUJER1gFf7K",
  "key20": "51UtH39169me6rhhu3LTghyyGiqRtaturS2HL1xx5n5vWPbXpN1DznQnKdR75dSzv6syTvQM5nuvPbBtpNQNKYUt",
  "key21": "LyRmVkWWCH89RXcnGQjfJXymo1Fb9YMm35ssungLbiPQniwYHW1PsnEAQBC27pR79LqS9vHxcAtThvUSj3TmNq5",
  "key22": "4Ex76eCRTpDkTFr8TQNhysRP5XUepqNTBfVKjNsmuywGAVvbEvefxViYur1APtpmK5aFhT8S9aKqdpCmPssuJWZQ",
  "key23": "51bvBGzubYQcXktWyqP3a8UtttKhV7xvLYEVsv4AUMsn1AvNZpCUwcJoa7EdaneQKS7dchEUrusE5J5yVxAiRWdC",
  "key24": "TVBrsmxHKgANSn7ku5ZQZaZocdcRhpGkA8sAdAs5taT9wh53W8mdAYM4nGBWDNXwYhrFfaXjcYUsSm8xSxFT7dK",
  "key25": "xPV6SYsTuC4YR1MMgf2MT5WatMhjUtfmfDvYxoj7tZ9NEZorBrA9yLqVDd422LLGgBakq7bJEm8WTfHq1KRqQoX",
  "key26": "kNnFUgrSVJW7g4d13mBo87T9LNJoTTEsmCu9NYssB6fKwWYAMDKrNT3aZYBGFtnscdQnMoENmRhHV7Xm5Kznf3F",
  "key27": "2Nz3HPQAcuexQsMND53RVDhvqGYQvkpE5kmsifr6moxhZRP1gK4rEXjrAEGqi5VMFHvPug7WVjTA7oLc9uqf5k1k",
  "key28": "2dScETEaSW3FvWAVxsTgYxanPHrTRAWU9uF28szTL6zRDHmZHMaQ2Czz5CP6QUz6VvTYDrCBStcbHdnP69RzRWQQ",
  "key29": "5riafBiB9DuYF6GwrkqUzWmsiF63RS2fvCoTttkqoEPUfcHkP1neLi85bfUbAehvztZjMJfiNvkrZLAijdwXHWaK",
  "key30": "FdU1hBvGFmxEYZc3mEqSZHmQs4BD8GYJt4muef65fK5Jqur9w2wEBcWEJ6u5v7qvTpPrEZ7rAHQcVreCyxamrvh",
  "key31": "4Y4xiM2Bzxb31hCx9cXH4GV4UiH4FdAWUv9rrKs3zC61DzaAzFYyGzNWrvne35UtnHbMijt4UAyLMFGkAJZ72C91",
  "key32": "5nNkwotDcK7oEsGL92pniJ52dNDBdhNKQXShUkj45qfdV4Cr5jjdkFgBqvgDH23hgPmEqs9iAENgVmqBX6wR92QD",
  "key33": "6wqEzPThV3qjt5ATNCmwdpiNvrQz65JGnf1YnnaBqqKfaxRvfT6UPN6sEaPvmPixvoiUqS2gUcaYkkJvUbB9kyr",
  "key34": "2MNe8UTRe1zijsAN2qsN2yQNb4fJnRZ5M7G3HTZCs7EC29rzRoXbk7XoMZoPw6QZTCvvUAcR6YkwfvvB5sybtsqw",
  "key35": "24or8dreGw3wHEHDde5UB6fRq5FVStxaz2WzJPN5YWFhfnZq68nLGEH5Cr2P6A5XrLL3Tkf9tJi9qy4VAgsG7RZR",
  "key36": "57UWtH3P98cJi1MVjckFhom7bWvnpfwMQzy5Uh6d4vyruESn8JdtGn1M5tgwhsnc8YrmPuYspKwWrpu9RFfDKqPN",
  "key37": "3THvysciD8ctDfdoZ7wFquLABggyzq72QgJHoEhwB1g78NDLRndWEQERVZ4PAqSbb4pukQEgae1jKrxdGrEePXHE",
  "key38": "3LKRreLekrYRxkqtxCKQzPRP1fv5jZTpR1sxu5dA9tAuzKkKXYQpEV4wQtRCLN3QheTPW5AFSLmxDGrVsKBcLpzd",
  "key39": "4KCCDutw93L52mYE5vUmAmJp1VNVa7nsrBhX5EogZoiqpyNoxFX5SLJqVz2YHGCJ87uLSFH5FaabPsYg7HXqYRJw",
  "key40": "35tw1EycgqU1UXbJxZgVxbcN7o348ZuH2TKf138nwFAity8x3Vu8T22BvbNEsxdZFtmrFh1r3m6ftVBA1drrsd7j",
  "key41": "tCS6brh5XGQBvA4itmGyNnGXaXXJpfyrG8whAcbBrvpG7bvYZqWvNqckzGqLKdD2hgiSSLDZKsat26xBNokbstP",
  "key42": "DUhd2Hk7RdFRNzhsdMEx1KAQqgg9s38szBHrUn7BWYopnAVGhDBQ6zgC8arZg7T2CrAe5pkMzsXZw31SWLhBEq2",
  "key43": "2hC7mogf4QDGqNWRFa45m9QD6UiCRErZR1HBEPReUqvA24mDY5o58ANXnWjtfFQbksjjYktG4jZ7BFnqvPJAutWw",
  "key44": "3QhFzWifZA3wXp4xBjWmMRXW1AKP8mC8URxtBJbo1SF1G9HCcRm1gjLwSd3sB1RKVpuN7E5JF5jr7nruEVmvpGUA",
  "key45": "xDvp3NFeF3tCp6edmwvBtQZrVo2NKUUpmH3RTShsLFGPhSDKH7sPZuRKT2vGhxzYKwt61PFwV75gb3JkiB7Bdqj"
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
