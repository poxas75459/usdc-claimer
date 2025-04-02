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
    "aoc4mUyPoGT4cNmMFje7m369AKrCX2SKxAQe35P687vBreqDmcrDiXwXAfLQkXrhXDpB9FP5eH764p72CfwJjzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sz9bs46tvgtjVMcR6tgMf4vkwrCHjZkAnzkGN5tbUyJFRrREi9j7DtZn7ubAJScigR6pyJWKtWbfqAQV59rguCP",
  "key1": "23zifJmzdUcep98zxrkXfYqZf67JyDi6AVDPYGq3eLY2FmZ2NKtob7dguLCF2wzQhnuvomY7kK3XH6GFQ7vAyTJe",
  "key2": "2M1nfcYz1zzMm2AdBQ4oAdJEwccmgotDZK9th4kHR1irgYxeFjAZNtc6prkvXbn4XbDuVeoEaMP1peo7fS1rnmiG",
  "key3": "4iqvVddRfJdcXKTatDUaraBTuunaujUkxKjEA6svhWXyfCNX2BFB4XZ1qKdqGDH5r4wNEAP4bExmzKNzom6oVD9W",
  "key4": "3LTUNbYmVYE89SkewiG4iqAck1BnGHKt42VxEG3dt3srxgyudtB98de2sMdPuyDtMTfQvmE5QnEoZVQNXWaYXnSo",
  "key5": "5So8UNchjL9D9JnzXA9CUbMxA61HHgbdPumNBkBqpG3EZZQifTPuvphZaS4zKycaNkVX1XsePQHvrQ7QZqk5bAVR",
  "key6": "66Y6rQgEJ8oJEv8wGKQTyyywbY43F7uWeeyJcYBzFTgcA24yMRrUAB1GQmRMFfkmCLYwjhD174WxjmRh8hUE8WtW",
  "key7": "5UdZ8BkvS47s2SPqjKVihmGDkeM9HW9xWwg5CvR8dFTHeZdUJLK8X9ANRX85iPfv7ZXu31kq5ckkukcHzAtyS39u",
  "key8": "3fAt238ovwvyyW7WvxZ7cahU3FEnTsiqk24sx1wSVMJAfAUBcLWVfFeuBP3Pc8ZgVyzuSNBQPUAwwvG6pCQmNvA1",
  "key9": "37T95eNTwkjGHtBEmJ8TXAn1n4KX5K8pEK241HVYfbjcft3hZSES3xVKznFnK2nRtXtcoTbBrnYwPgh9MuJgt4e7",
  "key10": "4dKEUJUsxbNpSvD2Zt1iGsVFPN4k1cHbEDmVV8PobWEtc9MTG1XwGEzXCiUJxKAZyP9griUn6N4sBHZHy3vTfWi9",
  "key11": "33LPDdBfy3get5m3PupeDLcYj8qFc8jXXYgYsbFxVSpkFBjHujA5zRov7QJr71jjQQZyufpFaoqepo6DSE2uzAr3",
  "key12": "38fXLukm5BzfcnexmFVXZiJ4genTpVC2LQZnCaLvsQihngyv8L6iXMxFrgUrTeqx8VZ4dp4LKsNEbC5MHvhg1diS",
  "key13": "2cJC6CeHHxoL1bn9XvnevKhJf9ENg8pAhXVieBonF2ZnurjbPjU1YMxSG39FaraSQbyKY4uWCWKRoVxDoS3n77m1",
  "key14": "4uLsZbG4fCUtzNgvjN4mserx1HKivUZXGtwcGBpTpUwXRqo1FVMR4ftFdMmtVzDjBg9i7KDRLQYAWcEQTx3ToUMt",
  "key15": "3cNnYNCPG5eminsdMSUo3vh3a8ksA8TMtpvcFRdiDc7sNV95oE44fZbZhyAa3pfjdY4XtorfnWmpFzyPKzdnpXZj",
  "key16": "GuBH2CFqjmgceTBPtHqsxy1zKEKsaL4agxc95nyqYPh5BDxWxnw8xYQzs9LtcbmCuvzE5hMy7pur5XzeF2fgRTz",
  "key17": "4M4FEboSG2gufERK7YM8hBKeXx59AzwtBJBW4cGqkp3Ny36dAoAhDTgTSLmruDfhVNWKNrtc9bPxPtKp83UDSt4Y",
  "key18": "2ZhDHDkqm1og1L8Q2nRmBANh7KN3UzeDNEwDMGbGYrcJTTUQi1LoniJ2KCbqRKoN2Az7bSAziM8KH9f1VuLbGH9b",
  "key19": "PinSnFWc7JEbpfgjnFzd9eQxVT9Mb8zUpUxUFuvrmLhsRuawrrWj8QoT8ExAuGJaR4tG5XSqeefJZw6qZKbHwSe",
  "key20": "5w6Ug7SKC1G8cUXPQsv82eTxCBJzHQ8iLtPBAfUwsyAwBJDrBWYhirGiaXMEYqZSeMvjWFhVL5GtLUqGVwDkVm6v",
  "key21": "dd4Dtf5Kj3sct3sTfzMnaSLyTX6mywQGAiDE5CyrHJQ6Cv1Gx7GpkLMMqZQWYBrLvmMdg2W6iNzSjouGa5a5QsQ",
  "key22": "5iruzFRkf7edEaxwrx7AD3FbRjfETSAYpbJh6FarL9L6JeTFggc5BhyA4yy8ax24hA7Q7kVFeepB7b7FyqFdKSxy",
  "key23": "3BEXg9qS81kHxWHkvj89ZPAJ9349HNz8TmWDdjQC8aaeKcVjUF5x1Bne7dU5MA4KwwbJ3uixqrsoF6LvAJwJQJCV",
  "key24": "5aJXxSseUgdYnUTK9ULNxuz7rJQzyBFq7c66i5CnXBDMPeLRCZzfA8fUDzaDYv53sLBZiyCNfiiHCc35ZYyjEj4a",
  "key25": "2rs33Rmh7piVjZZYk6UezaGhnB2UcWAc1rph94hfd9ca4eChNPD6hwnpFWSag2Mq6hesJJwzxqPgHRjLzSxYzFas",
  "key26": "3XQQXJqwRTtq8ezLqnwniypwuU4HypbwEfv3me7HJHiBmuUSJyrATVFVVmVS5cLDgeJ5jNe6gFsxJFRqKLZmPuq8",
  "key27": "5dkcnDoSrQAgRp7KKBEbMVabXA6fEFrBjKGYovRqi1PwawHigSFdYd4yFyXnf1YUAfnUPkwcit5aEQBXJfJiToKg",
  "key28": "2tZWYnXMPrY7Gr41wfC7efBSXRuuyzCZzpUXGN4ciNm2UBnYiZgJ1LobDK1EKXdSftn9EZkozome9tgAQjLoc5pG",
  "key29": "5rnhEQRZhdcxZUPYnrTcKQwQSr4xnQKdL3SULMcmLDmf2rhTwzsH1W3gU4UUXeyQs2kSwtk9Uvu8BRMWKEdKh7Bb",
  "key30": "MZATXDhoy77YCSxFofC1d9SiHi4LDYVppW7VcB71v1Zck68hE3MdQtFRVAjhkhv7Vw34UzRsJWfA3E99MeRsaHV",
  "key31": "63gkxAHTgUdwp5phFSKtJzM36Yhj8wTJNYkR8UDwQzkfigmt1Ko9HCVVzeiWXPdepq9jCoADDfhV82MRCgeBzxiA",
  "key32": "4Xx4gjYJuSMW4gf3fpto4FBeQbLCZgbjHNBG8x95RVoZJxVWnKRECicS7a3XmGS9UnUCwx75emJ2P5ydurrN2ctT",
  "key33": "4gK49sgA2GF8EB3FpaHapwvovXzSYYzkgESRVjVym4BojRwkkUFhqsTtn3CVtHg1CZ2VPEGkDaum8WrGanFUeUE5",
  "key34": "5EYv7xxUNg9H2vZnktEqBRGMR98NyYgYFid77nnrjrwdXWdcDcmyA39aeDX721bFWp79gTn2Nias8LHLBzonhDJS",
  "key35": "4kAjhZWmfGJyXojwZiqBuUUGMSkUQNmrbzzXYRNCAg5G4M8cBK3sc495FQGfepjxs5HMubdpe913gC5hKEnzfztE",
  "key36": "54q3Zv155awvsS1Veg8YYeaTpFP5hXtWtyRtYnn6Zrd838YZ5PYRctm21boHtiwjuoyNTgpTA4HYGNPBUD3yFoxc",
  "key37": "3xV2BLWNckPeDnZaRp5hNHRi1kZfv56yY61jc4ooT5wFBHbiMLejanYgbxAuAHUGSk6cVdvehPkbAb365QEDb75p",
  "key38": "3sQnSGHmxHKJvyh7vvwAb99CQ1BPxen86PQuWwgCHFD2z38Sse5JhAig87xp2DKThNejAWdcyNyioDYkgrsFpaim",
  "key39": "5GgE2aiQpa2oAhYjxXg45BUcyqQxP2GtoMY51ZHwpxeUzeXVanuCZYqe9p9c6AX3YGPmnSbPBDVnUAMnCbGJ5uQW",
  "key40": "66aQ4XsKghfDwaSQVs4khuYxPjKuqJmWtqySVHFgXkvuADjv9KTh8f8NKpeYKiXwfsgiCMCterraqzWwUjPTrwRR",
  "key41": "GUueNoXWyaeHuDGGjc3DjmTcH26KCvNfvBDu8xErBbooadPyaJ9WpcMfdox4a6TNh9q3uAAEpaBCv4gdy7Mf3ZS",
  "key42": "3Vw1gRQgv8TWXu9GoBLJ7LeWKWUuyx94cK18wsF6z88cvtLTtC8RHxPauT8nb5Y8kDHb5zpeUQra5bX3JqNea4Q",
  "key43": "36LiENjiGGpAKAjiBks6yGAviYdPPw42kBJr7XXgjt95hVwBveVd79ZDZP6ARFDrdAj8unQmqqk9iM4FsGk6AsPN"
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
