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
    "4aM5E3hcnXWQtoeiSuZTKoccuhqxqnHiNX5LnbfUitzFitWsLKXh2RN149wBMxwXg5CzWY14hJqjeRas8A6GZztV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rXcjQvQgGAuzs1ToiZXf3LAV1TqUegrny38fCP6Hxo2wBEpDgv9UaPByYTHiKwbeWU23VDcB7giScBcmvffmJH",
  "key1": "QSnFB7pfz7iBuohHh4HApWaVGbanKvhtYxacYhbhX8et5AbkwP8mMZ4HqAosw29ZGUYFrjWVwSvm3NkhxDQE2P5",
  "key2": "2rJiQwf1a8auzEiBhUDzZjaeUT9rrwL7DobPsUkgCZwyUW6t1yqPwUrTYkdB1gntmy7vtXbCov6oNykaifghsDp7",
  "key3": "2TWMZsGLn3ZAvdtfwDRBjMBsJx5itbjTfkTenkfYK6xbq5Cb4rYENBRs9WJkjYEX8rpu2TZBBBzpzSUbWHm6r9We",
  "key4": "63vZwAyrTfYvvmCCG4NwbTWJf8eGHh4XLeKoEzqidyCGQvH1v6iJjxqL3KA42Z5wqFn4LDJtF5TRwybPXzUEsfhb",
  "key5": "33dDSpbF6zNNG3HyqC4aRkbHJvHjnK52qFwVk84XhmWuZxiwJ7s882kHo263Nnerk7LaV2Qowvp2ADE5sJt3684e",
  "key6": "5dtpz6Z3wZhyjfd339n9yxZph2fV3qu4CX7BHy2opm14zZ4VNeHAnpYwyJbxGhxWKU5XpLVkb1QKUGyBwhmJgsAo",
  "key7": "5PrzoWnVctPhd7EfDtk3GZAhCApocBenDZ3q3GerFvBynxT5d1EKFU1mx1apoXSjooJ44LTEyCEtVdeR1A5cj7Ga",
  "key8": "5oBM9dfChzSAAdr1YqGgPWSWzJNB8CDzfsKCPx8AA92cwZC3ncq5kyHccpzKE3WDBstQ2uhGJmpwKcmCFzRqRADr",
  "key9": "3HnKstiJr3yPskxSSUUVgdsB2SpJ2u3xQXSWYoYntV4UP89CDZHNhLYvsGtLvPdutbe9Rddfpq79kSGZHLwy4N7b",
  "key10": "3i87vzBL5oPb3EzKurVmwXcszJkbJCUN6YrUZTZj61q8b4nvs8pfDkGBhxSRuH1GNs6A1RnxUcVtXZ1A744txkYE",
  "key11": "2TWKAco8vTQqJLELUFDUBNf3LpmcNCeN3yUa7thNCSVUQ4zNCjHMFgUePETM46gUNBybfFmhGChMxbiwggERBZu4",
  "key12": "4rJsbYr1ett32KWWSScLjAkN83xVon5wHkgFnwc3p7imMPM18xMtqMP895d5f7jgwLk8EUFsL6NXGqkoL4su2SwT",
  "key13": "emfxbgzGY5tZ4Q3V12vdrHAfbW3ybQmqXqQhvcKrdny6s2ReFQxudX1dhPh94PWJTD6AYoGTAfUHdDwhdMw7AY3",
  "key14": "76xywnhikzMJ53xX9gazPE8CkFxg4tYe5AX6BPZxbeVm71LDmU1fwFqsMdJPJsg7Ttj17RBgTjBf2Fvjj6tFtC2",
  "key15": "3cC5KQdoXh6uhfNWDSkSASRridBuetqco3d56Vo6Jj3RmekUsZjgPtKYEknraeMmwXEwYcF8LarRCFyUgJdDNAPb",
  "key16": "25Fzp5kcksbRRbLfAh18Zsr6trrzwyHt5Gkxub3PwgomtbkzZzG9M9M4kqKLt2VE1bUBamBXUDDDT9frzawR7y9q",
  "key17": "4aaQcTwHP5Qjr3bKBePtrQXXv37YAHYNNi7aWFGFphYcB2KiF5GiQ3zWJcM7YyQDaHbQaETUnjv6Ftxk5ikMKRFH",
  "key18": "4WnU73uXiSFqUaaFN5zzg9Y7vQ7zqRQD4DbNtfxZATSj9UoKWYWfpBWPRi7ePbBpexLHt4aFPBDpVTvwgsursijA",
  "key19": "3rtf1FDKoLUwv2Fz7QB1zVg529fKGqPRMMVs4BYstLcAypENqzJh7aVgZMQiftkWJkXczPdt1Pa7RmdvXeSSGUjw",
  "key20": "2EydNVP6CLf3XddKKGKFR1vCD6HwZEeXQ2SVNXBisvwqcS2EFbBLxisus7kxW6GDW17ScUqp8kamt2M1cqQQG2d",
  "key21": "2D72nEB71KgNn5kJzFxVAnUfvsMUnRP4B4yYV8Mhm2mAdrx765hpXARG8kZrwek4ZK75p78j7PmJtUMnAtZssnQ1",
  "key22": "KEi9Tfmr9dLudtqFJdjNvTMZ9gdocRuyKAJ3auMfrcTMUKVRTMUiyheNHptLAeV5T73UTZANQChekLQDFT1b1em",
  "key23": "5w2qo7BXw7xEiEdf8p4vmYcfRok3S8aYxrbiDAsakUBqpHzAy5UHyVnRqzqgGwhiGbsAb9ZrAMv8qj2RB44Zqrww",
  "key24": "i84PrSvYQREYqDxwi42XgDTQwq3axr1mNZLZHXQnKBATX8h7NB4oSf7wPefHVY1qXYTmrS17jepfjPkbAqhUSAJ",
  "key25": "3cgStHM69WuYfgVx6CqS7r1dBEmwZFHLkajw6fopTrrKLg88fa4Rnk7mttX13eZVAQMkKdfxcAXX5yKADJ4xA1WJ",
  "key26": "H8zSU2nSyYvXgaS7zitLWoh2xkqgJNTL8Vj4s2GuNwLcEzJAiF5XiLsK9qR4GrtJcmkXdua78iwY1WzfMzxkDLv",
  "key27": "28bi3WXEcCGqLLNrR8MjeA4AM1Z94HR4gmJtUA5pRVyrY7J3Tvat3eZ2hfgvDNh2aqEWrHWnX1w48jxeNVJ9TStq",
  "key28": "b2LgLgiFjENEMGGi7Pn4DGRCLm8bVuRpsm7XTs2Ry2KWizFdBmtoUhY7NGq4pXRA81eBhprohW1aCQ11isSe5Qg",
  "key29": "bRDKQAN5umRrkHqk1v3v1KEytDAq4Qa7LSLy5v4xUpXkABvefccviw8C1GEEAaW1DgHi2KJ3MA7g4BhnMemHuin",
  "key30": "4dcFy4PWrKcZEuTeg4UHLWvViJCnbRaoKaXeCxvRnaHwVDbzUz7yVd8uraXPt6jRp4Ld2KMP3r9ZDtZsoHhKSLau",
  "key31": "62Dvxwy2cdjZeoTumBiuAgBbsSEGWUEBR6LzMLhocCh1tJisPTCrYZSoUUphghZYJYyXCmCPc5sv6xZ3FcLNUWKj",
  "key32": "29kYhcCbEu45KCgpXSZp41d5fEdLGZz39t6s8ZBM8uncnYmM26cVtM8UdESCHmhbWBfX5V4HSibyJHRcYPR1Mp1j",
  "key33": "3TcnWpC9o2xuYTpTAZMryc1VULLCWez6qKcZNCNaZS5wrwKtsyttzcayj9TFFn3gAgqsJAHvuXQ2aFMtQkp6LiuU",
  "key34": "32PvjrytQ3fzjKiahzfPRLKKN4fSVaU4YChyWzGPr7U652BWXFcFyhGFnBoEVcfncJLhFHb92ogpKpR4VzDnTwk5",
  "key35": "jZ1XYy8uvcZTJDbcfsYKJjwbeP9deMHFKKGxrr3vDpZY46F3sTvtNn7SN9qmtFaVqYpBYNvB1GbMaUq3bBQmcJ4",
  "key36": "3qCTstCvULwfapJ91j9RRkdTxZDgreqV9njwKXoyVKvWrnd1roB4YHcq4XDxDpUUQ5xsnZQqx2XTcV2EmyFXcvaT",
  "key37": "58VnttYN2qbh6gEExtRxCV7URHiyRfW3fAdeDX3NeoiKdiSui5QQCDjf9sdWraVvTLmaci4TjPoDpgJo6xaYH6uq",
  "key38": "4EziHEJgMNxfVysWC41bi1Bj7ZmFhjdLEyTzfBWyA9ujqgJcsZaBzrFp1p6R6PVBba3ieuHkjC868R4NwGWx4N4z",
  "key39": "nyS5s7MPL55yYg7C4RHy3MfJqFWNkCJtarkWzs1riWiHsqroak4PPaiVY1XV35PcXXYNiMXBQN647vmaqGa1aXd",
  "key40": "5HdE3EFu1R7WcJnAgmDEjCa6ErLfsGVKPDPHJgjNBy5aH4Z8tNrAxwEqwCAs5mvf14k4qPLpjSC31ipuKDdk8wiW",
  "key41": "5N9QVLBZSSHqqKJJkYSmnU1ACiWyHZwibHEUYQ5ZDCVp1GjGmE5WRK9Bj68jHHXt2nPJUGhgPW6CL38VsmPf5UB1",
  "key42": "578noWGxLqGfu3oi5U4uFDD9f7fh8pnREECo8nzxyPSD7FENDTkbGB9tbsYLPpJURho6hH4nyBQC5cb7w8sicDxy",
  "key43": "3zvhGfVf2sh2f1GQdHQjNgiHx7wVq6KfpB7DCpDRVGjTwGsF2en95Wg56ArwWn3KXWaogi62TxNEGGh3cWmDLDxZ",
  "key44": "5KmL4BCB5FrjpLYPjaFHuEs69zs4Nsq7RHhqg92kgwWPZky7GW1iVdg6C2qPvrJTwWX9iYKspHrqHexCR986fww1",
  "key45": "4R2b1z6qMMrPwApYB984oMQ6FZPhr6FKi7iQDDqr8FCcTuKUFMPRRQwATj8uWgWfMFWSZyKWkz5cD2eogCStheZu",
  "key46": "5Kiwk3py4S9R3CuTB2jWfVrbazcweusRum4c69a2R4x6GkjhJBH7pepHgMsRP7CzqmXg5aPQUMRQCAn1sqTN4xJY",
  "key47": "3vkCKqgfvFH6Hn8UCe3caewMtnL8HJrr8pFfJLrzxq213kkP7kjPhAfZZdMKJiaNcYuRVcJKCypeZBjWSMvXcMLP"
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
