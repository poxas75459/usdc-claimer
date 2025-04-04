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
    "65YL3GeFiiegduHzxQyyXZRTeA6jQHuKjNGDKDLi4nVshRqVfRb367VRnKeALNgttknMzGDVvKt61aP5EnKtxWXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1p9wAPDD8CzTLZZTWGdWtbiUoQWHAyxx7R94LhJ4G97V98FxCKrTzbJjmUiFbUqaZ3UAKy2eUm3JJmErkwojrt",
  "key1": "3mVQAom7NGdQMFuXJPJ3NLcgq2o6CrkYCen8xfFps7RJp7GJdnQreQYVV4oghmjHdkqJwJP6LZFebKKFy5F9yVCL",
  "key2": "49bTcLw25f4ZycdTtZnpRoaBErdGGtvkZXo1Eaq2uUKpmt9Gz86KvwDUnVzikPvsFUVgcw1t8e7zWUnzK5HEUoBY",
  "key3": "3V4THDWnGa3J4GvEATrok4xA2afw8b7964fH2nN8o7j78XSHpBCSi4xayP2x1ckDuyDFV37XTuaEwhy8xg17GLcB",
  "key4": "5LjkJo739NN7gKYigczQe8E2fyWhjzpbfXKUBnXh9Aj2ZqQ1b71AnobjscrjpQ6KvMpWs3HYSE1swJe1q5AzNRfJ",
  "key5": "4HKsw4cn7fHD6bGJEofYx6pYDoi27BC22k6auK9batpoaF1sNqnSbELcFvhZBwkdy8FLgfzvn1CAVdswEEAuCXow",
  "key6": "JtjcUCyhNC7AF4isQ687kwJsaYUuXL5toMJaqsCGqWN7sVRisJ8pyALmNrAwDi5KDjLMwbh3FAcdzP4yPhGHnM8",
  "key7": "N79qNDWj2SFpLAUisRyAePeHdQqMHMXvMG5FhQfaZa8jXRyokTbebWWfuG3CDoJ3W5ciN1TSjEPQa7DZLpGjx8o",
  "key8": "2HzsXxVQSLq9HtZGRPWuh4DoeWoRPW5Nzt2m1s2ADG4D3kRxe9PYT8LVkjxxvJkvEqR1TQc9fmjVRDFmCvHLFWJb",
  "key9": "5VnWPfhpu2vXyjjYT88CNLbP9EDKXeq1LebYJMPP8R5ZzppVJrdM4EK1crEpAcVbSkQzgfu34usEtD5qnBxFcSm",
  "key10": "49PPqG7PnQT3mwaqoz5B12Up38r7FJChtKofkSizi1NNvkFsKYVPYk2iqZwivmYvDCHF6XitFPUHQXDmdu28z7dx",
  "key11": "2h4WqiuonyppxKEAxiWJSaDyo9ELTtmTJLSAvmTS4CC3gBiD7QR2swVv2zKC7yBTMiyTdcAQUj5we7aXmYTXZD1o",
  "key12": "4dmBet9TY7v6woeMxU65vf2raSbvthCXZU4MDKELtBR2wqivMazKbMT3F3wfNndaLw9kDYv4NxhjrrY8Kn8Vf98c",
  "key13": "3ZWbpakBUcpGwf3RuXhJS9SGLYueM7Ec36bv2C6fGNAba97pCHBQFkbmN1d63wZXQvFWiuRsAMGWw4rzEQ7ZcnDX",
  "key14": "koMfNTiPjaMsTooYxty5jT1s3tYGn2Wzw39FKwb5LrUA2R5x7EQ1p9NBGgb9fgLHT5atLGZYdcnKB5xVer3yvR1",
  "key15": "CLDnpsxq6AW1BNn4iRKQhMzfR1ECFnHemEWTVkz7D7TWhsLDwiUH173Ko7e8Phd36NyZzcApGrC8QuShXYGLNKA",
  "key16": "5q8tTRYGfxkySQVVUtmFmd2jMjpMRA9ixXrLsbSibjuu7TQDrjTssmrmtQDFzen9J2T5vdvPdWyxbdeAWJnmxy3x",
  "key17": "39L23xtRLNhNLzhzdnqEm3WdeVqYYKrR7UewPgmUtRN8uJfANzb1pSG9FcDPRHH817gvWTNgdq559r4JpgsiLHQ",
  "key18": "2KNUM4j1pRHzEJieFU9GSLENuTNEcBsK9nRh5VjWHKdnKVWHCxtsj1wLbz6zXwxHvm9oP3zad64Bb6CTaxwWPpvu",
  "key19": "5ewtfshJ8qeZzg9cTLiQZPwoxm66ECqPrQauUwuugwWoaCxcDq3uGYcR9smeg3KmWzL7XshF7GuFV3CTYYk1pjMk",
  "key20": "5GmoNxFovoV2eyWUXPXbbrGdr7aeMcXnDpRuEdeMXccBQmYgu5tvvAZwxhBy8uUR119jTPvz3SbdnuzXC6VzSAHm",
  "key21": "3YAmsL9GmqgkQhJ5FhesdD5wjV839K1ThLDmwJYnh2iAqk2Udeo9mUDnw9CcKihYFXTsRUiLhB5Yo7tovDXLqcsc",
  "key22": "2rqyRQCeM1nqH9VQTtocHVRsP7H6zvFsrC29NYxqQ6ufqfw3QAPJMWitH8PeQ32b72G11S72U4m9crF33mg2ssLw",
  "key23": "4N9Rur1vro9QY1wyQ1WHJzRNsNfq9cWf1L1J1okaMCdnMSARQrQdrNxPiPhgrKJB3ZUao88WqWhwx7S18pCLVLVo",
  "key24": "2RGX7FAR8kcPiZEDYUp5ho2kavKN7EhzMydTv4ZsXC7qa1izEdrpX5GuemgowxBkXrQnHA6gbXddwD541tAWLJyC",
  "key25": "3QqMru9yM4bSNR4CHqFon4sYqzRq1EZEFE22Qphg4bAy5N3XzLeiURSBwiZH4S2WgWMbxa1HCMLoGkCCfu7epNFa",
  "key26": "2z5YVtJ3syeCigL6ojdfoXysVsSNdJCLFRXenaAhaJzyXCkKNvCWBQgQVK3G8bLmGBEg5EyJxCr5Xzi6dzazwMMi",
  "key27": "4MWB9dSn4vwFAcAhHXmEfk5Ze5QcmhfM9N9NW8uvk5HKWSh3HvabNg9KQn3cxb5Pn4o7WpthmZDraXm6pHNnxeuU",
  "key28": "2SVEbr8GvaqSVRJUbhdzCy478j3TE33bysZ8JFZDVwXSYQder3nANvWSrwuK3SXaJcYPYvW5cxyUZvJuKB4wn2cH",
  "key29": "2uZYbdtoDs9bFeKztM1RSbCBa2iVwbZKbiuZGMC6wRJ1wcW3XnZhkp42dzzvbZJUkfrRB32cPb6DqZ97SmLjDgSf",
  "key30": "4FAf7ue3uNKyQNjyj42PAqdp3PbgScTndsYsE6kJgxMdpf8uEKEjHX6UnSjFu1qTDnDewvGaod6htdR3heVYmiME",
  "key31": "4ncVJGE78cxGYDiZtFs9BSBZ36CT6RFxxsjNERtMSTcQbDTVVeU6KEnzZVJBTfFcKZmbJ2zEZWvamJ1n2B89rS2G"
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
