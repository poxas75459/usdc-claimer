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
    "3X5cZH9uV1pvr7W4Uux35qeGq9Ao5xfoWmt91BbSsJwz9qEeU5TywXmseFk91TaR4rKSvw85r1t4v8sKmJuK6vbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sx9c3ZSiZvXHuwfdLXJHptgMS4jWRWi1tbHcQ7Yd2hjZaqFeAWpPyWoA3zQ6j5QPzXNHTAHSMpMN679H1fartTJ",
  "key1": "3hMVRotvvXHxm9NfGZu1NDXGaLo1nPJqtZ3yZC12Fmh9pvnHaMCsS5cq8jetCAHXCG8Nu9htc6UW1o2nSsAt6mqq",
  "key2": "4yEXBKmqoF1PsYqfaxLsVsDXMferJ1oZxi1j65NhmVdErP3dCSmda7mKyym4bW434txmFYKetgHgeQykfvG48LWr",
  "key3": "2E9Ka7PtgJKmEiewbozzq9EzpDWqBTw2GRJesrE1kQGqfwTAY3xVQ5K1riFQVbjEshvaUQLxAEM8zVRXEx1QiQRB",
  "key4": "3Tz5e63aenmxbqjEZzPgtrSHit8oc9GS6DKNBqy96UnAnZrtUby9AU3x73o8KE9nw1TgiKx9iKG6hQgmjAQNPmeJ",
  "key5": "4NFbjM9gZRpMrgjrUbqKqA23jX7aWAUt9Gh9Bcagyo9CEdvLjYviYV3x8eiuz5Mk1HpUvuPmdwhzUPC4Mc2YkiwG",
  "key6": "22kgro56sfGXqqgurYjKpm45F3qQsPjMooN1r9DX212k8u9szvWNfPyLr2SX8FZwoGVHfjXTyD5dYWamBCT4dcyL",
  "key7": "51oPsCAk8UhtR36Eq5S7DLFJaNxYMWwp96ABkKZzNapqfzFTUcV21sUEL8y5i3QFarDeiPSebLH2K3pKiJau2Shw",
  "key8": "47KZJ2D272BmrQeGRYCfPPt4j7LfpZXVdT6kiPfjvMPuu6L5nzNNMj6AXKsSAPawujK3dXZhF4ymvpNaQdk31NfW",
  "key9": "2Rob1fnMs14fNqCaJmzFtF4Pfjo3z5Y7SJk9AhZ98NftSbU7xWawqmAKy4HW59byTDyVxXmD38wig8X9hPZ4VCEQ",
  "key10": "cjgVdgN9n6ALmdrhQDMvHwb9LGkVmgJf4Ap3NuZozYo9svxYAv7DLC8LX9GCXBKS2MgJfVprCCdTi8m6SVvapzs",
  "key11": "4yZfzzyrT8XHWapwujHSau5sj5172vUqFh41SavH2zEpegufDSRxWjXje595sPVWKDdvTkxtRjXnLtvzpVUEowWW",
  "key12": "5LqrjDwC8jGUFSQyMKfJnMn6TS3TZUYBRcALUWonD6v6Tm32SQAuKAAEGtuvS2vsFoeb98bZ9VGwdBJoBRXX4MF6",
  "key13": "2p9wfhCv9rhB7LZkti99i2Y8hTkbbxr1koCvhcigWojmp3EDxxi863wSBrFNnQLFAjp9YWqSxYQyhCjMZwFy2bkb",
  "key14": "kGWNMVTyRhGGDKpfoQF58CWEkT15MfJnjahV2SdhThWka9gJey3gFpY9a5gwNycZfGb87voXsr2533oU1Conupv",
  "key15": "4nWC1aAtn1fnUgAzuBBJgghrG27S4YJeAJs9o6QjndUBn4M5296YpCUxuAVCp1dg94sgAPsy2j7kmBx5hryYQrLL",
  "key16": "u8Uwsv8u3Ryhev6gxLMUKYuzFr6coYcPaZJrJrgXL4RC1NrVbvnDt3VqYAMKCeCQ7oGrVovNsSLdtpMXDo9Urkf",
  "key17": "2ordjfqhpm5xbgef5jAquThgRokXBEAUZia4SMXcqQek67QRhfQTwpHVymvRGrx9QFH3uw1bXjX5TVifVMtNfvf6",
  "key18": "FfDUzWFgbG49sXJ6Z39HkTh54T3RrNoX9ryRNGHWM1bpzezG7WVUBHAAPUiWwGEV8sfSGAy3RkwXiz5nqfeewej",
  "key19": "3ionFr9XVUxMcaoqZSuybqbjfjn7svWePQQKery4ZfYE9MGY6pdoceLRMWwZgJfEhi5GWcTkEXnHjWhogqCymXZN",
  "key20": "3rKKEjeAo52eyZXy311zw9u8UUMyUaWjPf7EMxCgketP8JJDQFkgzVh6v7Nkg4Ex2nhwxmPpczokrayrdMPXJNMv",
  "key21": "5Fo7vFUgm1uTss1o9FooSXsWQV3ZzvojcRQCin5MiF9udg9JT3PtkGTDq828gnvTAoqiii6gZUYTJfzdZhvpDPwF",
  "key22": "63k4ZEAEebDh6Nf5gKA55WJiBBAXNqaUJ29j2A5ogxJVvD5QcbpsbEnjeeTEQsUkesHkZCKgRc5UDTtLute3m3iy",
  "key23": "56F4o4Uy2y8s3e6RfBrBBYtWe1CruQVJAo7KLUc38fATyhJ6hjRwsm1Z2PpMeL2dQUuLwqATUjWJKTp3pJHUuZUX",
  "key24": "f8tP25qfsgBdDJu4LpQRVV8CEVTEUg1m64DHYg9sXbtNB7GBUXzQ73N8qhBAC7uwvXup4coSr2Maz2pjK9ya3K8",
  "key25": "4jV9WTavUfezJM3kBMiQkDdfG9vwnPNA1jP1H4DeryGKkMrwup3fWiVbc34TBP8efD8fGPJ4XS1dVNLHEftFring",
  "key26": "5x9T1FsovsVYdMKVDSjpCPMGZprSon1TTAmz5sJ8Lrqt5bDgng4ut8FcrWtXA9zHrHXHxKeBBxNUg38HJr31mAsQ",
  "key27": "zQsDWqyVqU6N6dyK9T3Wf5QsAWyPLwFSw5DWaLK7WnPxaTbG7WLZ12Cc9bZzj4WjuQsJXsnCihkGJQfc6eySEqo",
  "key28": "5n5KoBiBWh4P37FfZAodVxfc4mNGnKv11prAnDANWoaWyx1bzkdFxXAwH8MyoG3eR9j3ASZTBfT5ow3Fgkz3BDtL",
  "key29": "3EXrr6xqX9CKBPtTbQbNo4seDKYxd8QJmydvRMVwQgtDhnwNqEWdywZrvaDNFSc5ajiYT8mctwnd3nmAvg7N8BAn",
  "key30": "3WkJHpc6xBLbwtX8Q489TaX1kXCoD6r3dmZvDzjKokCNGXFBHg3utUD4SRENbxgMFQaym6HwSUziG1Rq4nFgqTmp",
  "key31": "4TujUEGsZKzWdzF7KQ4aN1Lasrh8DXFiEBFAGKFAdWt2ibKer1padWF1DdA7WbD3DpXEbQa4AZhCqJgZH4N74rX8",
  "key32": "5H2LAjKxfBNS9UuVsyeGageioYpxjfZQmuwEUG6ZB7Pc6aWVfdzW8vx2VbX6TWwrPbDmsfRZqvDdC5Cf9M2pEBCg",
  "key33": "2B5xPkDgfHy9j4NJ6ZLkqTN6pjVyJeewkuadd3ZKnkJcQE49FRa3gz3umb1kLxYXyQM4iXwqZEYsN6xhqVuvxqhR",
  "key34": "2JJSSMuFoGKbsBHBREQYXaFDd1fgiYpVWXcgkLbfyrUnUbdG5Mpya1Toaqy6GHMDDWRYEy8PdUhhKT3VUU848Vf9",
  "key35": "2YbkX5A3JMkiP9MtD8E9mf9h43SRLiFi8d5zaor4j8VUGRWfpMSZmhNhsPTGQ4z7bCTN9KYhNFzNoWBbJMHVLUcY",
  "key36": "5A9MNP5aLfiknHmu9fHNaWGz64hxEt7PDgHMkYcVxtW6CB2pZhMsmZvVjf9JjUxER7vJ2sgwZATLDEywXGehtJmg",
  "key37": "4T89kr3Dz8rsSgB4rgz7zDt9bJaR3SoCGrfbGJEAUz63oMC1vpe9ji4zLYberaWULzbyUNsiU7MjcKTu3q8kvL3H",
  "key38": "2RJKmkoACFnesY2qULMYsYiSCrkJCjEPY8qDXcsYdQAhBBsSKzkR6rfBqFaVGXW22yPtZXP9AzVpVmQsSNEmZ3kQ",
  "key39": "PXCYgEFkbzzdSivJgiURh7ATmEVNcukAM5KQ9897Ae9uARYNooBogRpA27p3vd2zCXaKxGET2MhWctDfsvdKv4n",
  "key40": "4R9JUpDPD8p4vvRGYV7cLuijYTs4Zu6ot4yNBWqqsnU1LpANjUyuuqkPzM531mss89ZWsbeob3gXaHnEjHQzyFB",
  "key41": "4a8LqbodJ87mTnVdE52pmv4nXcBJ7iqEsK97b5Cj3ejQanEttsMdimXEyHqmpQgJcT2Py2pn6Z9QRHLLMzrXYRkL"
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
