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
    "re9xdazRaGq3AdkkBwq8HuULGg8FDnqQ7UgqQg52aQGsW3DzHNk8YR3TGJUsMdWmXge4sGQiGsRn8jbbMB8M4uJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtUqwbjmXYyN5k8QLSkurFWNU3yje7KXhcJBp58tzkXEtYWhMQ9ERxPkQf7kbp7bujBbhouKjY6CUDhWnRN3wNZ",
  "key1": "2hnmY9eyjNFX89gzDKHKQr4VfQRyDMrVNDqjALpw6ov7ZcGdw23CH4gsKb3JTKn9bgfaFF5cKcwuXj7qjm1eU7xj",
  "key2": "9fbfYpDe1US13fcApg7wuBcpqrc7SK63XrgdstVAvZuAaJyHBmjqoNKjXBaaBBPwDzDWH8nw14KY2CFc61WqZcb",
  "key3": "5Lp9fvq2sz2KBKb3We7uS8jQCSDThhSyLRqw6n9BHGdGpJcP2WNqCSGDVqCr2459zy7o5d9WVtY8PYGAyDrEKjBm",
  "key4": "15C2zdrRSiZtv6QiRhehfEtwAcYUBT28sFsmDM8XSQwh3KfCTawgvHhSmbkenLEaSfcsk6cFhpJVtfM1uyds1SE",
  "key5": "39XMEGEZpmKCqny866p238BSKNoi8KY4MC5bwKVtpPfUSAvP8vpYStAJJ9FQLkdymvkj81qA6yJ8FjwKPTF6bXNY",
  "key6": "5Cz8768QRdPwYAffPHo3sHZDGqb2c9Jn4vuys4VmcPe7KmSEumTwxJupa5xtW3g33GN89M9HuAr8oXovTpNpbpLa",
  "key7": "2FdzbgeWD6JdB6JwvP3A4uXPiaB367NfBZgikpdDnDJ7FiJ81pm6vGJBDu2Cya38DfyzhaHeZf49n3uG6QZ7ZXGA",
  "key8": "4gzbetki1BCDr8TvzjirTHBBTQPruCdTZ44XJ8dXnCyCJtFRojKEGz8RxLoiidKzksBCaYDrmaA2Zxv24d9uu55A",
  "key9": "3vScrMnMkxyAKjTRXMez96sPx7oJjnZi9wXUGYY5vJsQHWBVDrS4zg9dba85p8zp56tqqisUeFwX7aTyjPnkGDBw",
  "key10": "eLJGpCQLXxU2JVwJVArxoSZEXmkbdLeVVcrR8qY6i7jeSGjRh7AHtT87f3z9ZnzFcgG317TdDk9f9anaNFEoMnt",
  "key11": "5u6PuLU5TC9YzPTzfRbyGvr8k5jXzykDjW9ZNjqeindU6vzhgEgxHNBexoz1GmXws8UmwWpagMhcBDKvMdsrrL8D",
  "key12": "2gF8DhNZrc8o68ow8vFCHrtP2uwvtxiMyQuWnvqAbe1myM26ZozCEEnUUH6G4bRZXAQ63J4foU3F2dW3b8jEq4Qy",
  "key13": "39BL55fQNYWCeEYZmGhg2PzQ2Jm9RoinLaBzqGvTCBhb5qBFSnZmuuhZj8Aain5az1xhZDCdYWmcC85TRUSrQqvi",
  "key14": "4dvhkNtaKFuDjTEVDqWJ2sZJTrW9Kfp2BLYqgWD6dXEWuAtqax21XHdCeTJFXwVaZXsnaPQfP76hBGEHeHfdQKdg",
  "key15": "4s7JDVRMPAazhmXjmSsmSwSiLH68mzRYHEG22HYLo2V39WHttxtH7p6vvoZApzfazC5WN7NWa3H41ekHsCyvbHFx",
  "key16": "5L2V9rGBb7uLTERddBotsExnwzCSuFQZ1dPMHX1ZnD52zAhTKXxWrL9JbpSNdVUSCWbDZMpeZrCqadYBWPMsV3jW",
  "key17": "5BVDiVSAZiPkUzwPo66kX48VVz9KeP42EgrWrtSWGhnNnJywfexHVUQjJfHLop5GoNrHUT4iA6X9cJ6ekQ8qW1ck",
  "key18": "3vYmdVWFHywUDBNgvHv7L988WxY8EeAMta3jbJdGrwBrEwdwfsVypBg8adPybzLFeSooFMEZ2Gjf7B79nZ43VhrR",
  "key19": "5Ztjn5zyTMcg5HqYWV7jT47DZ382CUhgZE5LZipsJEoJK519sH2nih7pijpjhcoNdXvrWaxQqN1GUPnimu41ni8g",
  "key20": "2K3PpY19tJB4zRSFr6VLgAmJMXvoEoDXWL6C8nnscyXUXEFbaVxkcJZDTqPUuFyrGjUGKHtG7DcpsiuETSVTmWo8",
  "key21": "3yX6FK4w3a3JT99EdU2jeLSTgd8mSf64c6uNhckGCMuNJZ4xfEw7mM7z6rKGREyhNXiuAUPxz9FjwuzpqsNC7hTr",
  "key22": "5KZ4YXTVE3ksJNQrxX84dpk4i5123q1eb4xASJpyKpuysFX2FerL3awcG4ch48ZDz3WTnoWhtuD8pha5KhM4JWHu",
  "key23": "4npYdZdZan1DqsAHUSgbQ6f1puxNCjp4CGNEteDeXV5LQaCx9hyaWvgPuYRwDyBrZk8UbLNDazGoCVRgy5Wbg2PZ",
  "key24": "2aedM9fhMHjbTUvm6X3nMfAn9Ex2cjEcLt8Kxf97hUw1DYuZzeDtoZer4Hj68tMYweaXVvpWPZ6rK8Ng11cuPfFW",
  "key25": "2AV9EYzthBCMYFeot8MKS8aTYwquCNbPiLSrK6RcCMopLAxXUZbsYxgTdDLR7uUMTfmfj6mBtr7DS75JKgDvjQ8A",
  "key26": "b9HsZXt1NRcFRFh9oRujWoZvYXiaaLEhDmkzZMxojuHVA6Dik8PVFmpz2jJsjFW5bCsBGDrMqAD5NJQz43ydcuu",
  "key27": "4pzG2dCoMKNLf6mY29CkYY4MFcin63YaxZYw2hnm9wCuWxdZtnn88JJRPPRcXVjC9Yuu8aDh3MvbymsFDF2rMBxw",
  "key28": "22MC85MhVofpzsBX7QpTwRd4vZQ7wzkBXnhkhP6ZyBj3824Udqwmw4chasQLEJX665rcSFaTDHQ6FDoUkSSQQK7x",
  "key29": "fZWFXyeomPygx2qCY2fhST42AoSamh91pR3567aynbyjyH9Gjd7owjDAzotV55i6kwi8TfKnRPrXFL8tEpHDyd1",
  "key30": "2qsVt3sVDjHRFQGS57RMR2Wbn3cMFa5rqSvNtfTiggzznuxYw1Kpe49feF8LUVK9Nsmeui59aAWJULYJtuxTsYCg",
  "key31": "HB8Q1tvVCPQTp9nDT3narKFB4Qp9SfrxBSyGTN2f7D73153YZfWL7VUDqAQiW2cGoEvXQ9MZb8WMftoqfvp9JeS",
  "key32": "hABh4PwSQUkEyNCFW8Z9RzRQ5uNjHwvrZzzUEFkGzZsDap8rzwnWAgmviovJPSNHG2S6mGATkbxMJezMGmTTNEw",
  "key33": "5PCMgk1yu4wGbz3ySLw4LdR42RSHp1q659tEPu1zPSRi57eZ1JGRMUuqJUwejM4shY2xn8H4FkBtn9dFeV6jrMbh",
  "key34": "3uLVBg65q4rdtMwYCqUTVgTsHLNSiJYks9kowbwNaZJEAK9hhRTPaGJ7BjtEE8qQMjixNXoHLyZL23mys6Av3z5z",
  "key35": "4eewR8FQan1hQr77Zqs6bAotmme8gRuDJSPoBE1qjaNAPVydiifyxjsFRwYLotPFqRrzn6p7p32A3Y2MLM4Lr6sL",
  "key36": "48V1mPnhzqk6S5Po4X5AEtRTdP4wkMNk6WbU8d3YY9gqLVoAtxxhUmMBZaxuFNkqwgKUX1V7mEgfuJkyUAYjZR1i"
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
