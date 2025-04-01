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
    "5tV15wTWdfsUkn1C3omwMFbFNPGXELRy1Xd3W4MWQoXYEZ4yZmx3ELdWX3dzmm5JQp1uQG6sirscsFKbXUiZNcFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hfuMpfSxp7vEDQFZRHRF3wU93sRZ3TwA6xsPprn8GzcoxJwMjWz4VkCD5c7ZrF9XJsaFAjdZnoQNg8jGxzEVRsi",
  "key1": "67CRQASNmu4YoTTYfvdUC8hm5wC3ps3sH1aLGQfzGW6Yyzv6FexwY6U7iVUBnSqRsXHAarmtSCxBLWiRL44h4rd3",
  "key2": "3sWZABdj4ysUvXUxwohK9QCkVTn9obR1fydKMjLQ7fB5Zdcva7hVCELis1YcvQhguPDFnVv8PaWTstT1dpoGir2d",
  "key3": "2SEECV1DDYXhCBxnyncwVGgDEttXc2FsSgXGgXU2XaYTcHLzoCV7rfJVjegMhiw8GXYtBscp2VaeKa6HoTWFbjYn",
  "key4": "rP6df1hEt7DFjgMbo9ajUcoz171kibtqTBShdN3KWXVeBMYTjnqm4fD8SZiMKmQQfXRnY4dwohSj84r1ZNknqJM",
  "key5": "39SZ4JRxcDEeKrjmrnyiYLEXaKhhiwzgjwdrf8zNWB1rzvdKSzq4mUoyBjpRhTJAEQ5ekv5b1hXGY4ZCpMnenxwp",
  "key6": "35Yt4grFocw2XN2LegheL8tJoNxZJUS6rTFgzVRo5JBrvGHjGQjtcuTiHVZz348EXzmLu9jqU93SpmhhF343XDT3",
  "key7": "4Sb62bDUFJWvFUXXtSQHidTKCVmQpsWJDdqMFJfe2sg7ZrGHoMFSnfzm6JxrNiVwnqrA4Jh17Tjeiz44WsbJ2AMp",
  "key8": "3Ss6iBQpd2JJG1zb15XuS3sL8rFUCgVbaC2dt3AEyDMSsXGjF3UMPFw2i5ye8pXVBXTJ3FhK6EzNJbt3tSDtb6av",
  "key9": "EshsoZea3ALKDR6offFyDb4DF22fKJ8cdZW3uss8wW9V1xLeZdJZEsEAiRuCatNfTVBr4n7D7qygrTDQABK1oGZ",
  "key10": "4N3e1NvW83ruEdHi43BA9gR84LpfdaRmWvyFvabuf8d3d4XhDSRJoyw2GswboAra6ooSf8sq4wjGyqrz1eubJfox",
  "key11": "2hmyEUU92rZy2Dp9QdJ2p5JYe2jtwPt3mFviyhQ8anpsZX1zWcELqWYtCTbUpcSd1X9jgmUMWQNyBwQ4tSkVYaBB",
  "key12": "4AkKo45uWzBadouDACY3ym86LiaaGuv51go38yKbuNDfe7iBNahEFVa3BsshENExC8N5BZ7zdgCzswMT5MmcHCNM",
  "key13": "219TmAXBBT4TirxQJ3PxY6AhW2zK764tEZRsedMECeHG9JiBuP6xDLYvzNsE4kyzQUK5s6mX2VbKRx9y4PsY4hb8",
  "key14": "4JYvuGTx8KqwmoFuboQC6MvnKMMUkNapifPXjQhKKqucAocQj6oG1uMQapS9XsGHCvCnyFrkrzxQwj9kWWShNWq",
  "key15": "uvaBMXKRsEqz6p9ZfqRDaqbJTrJctuJeZcZFYucuteGZb3KvH26USpoAX2MyrBKqf57Gxj9TrMejF5QRaWs1zMN",
  "key16": "53T36cfd4m7VE1Kjwgf1uVjjUvhEdwiVjXkf38X5r7vdhTqw6WqYQ5tmpSaQ22bbsrmf6VmdjALJgFqABKcdhyRe",
  "key17": "5cMSm1bnNv1yrisiDaeVXnVUpsmAsD8NhjW1h27HZohYeg77EDDajhMDtT2rvLDNy8judbUNR9cw4Firsm5aQg8V",
  "key18": "F5kK1LTfidp9kVo5heUT2SzhVY1wEzdQqp1vNLebTXLMPAZpzTFJtXpSMaYsM1r8akNgtr8Ti7A4RgqvkXBcrGC",
  "key19": "5Q4mFJT9B8w5AAn8jqVTBtYLMqkkUb4VPhMwXqZdppG3Mc8NTy1k2vZXYZZmyZdnJjcZJd9ZG5b2K9JjFD1SoBQy",
  "key20": "5ygqps3d37CajkLN2qoHEYXMH1ycGGaJX3gryG3ro5k7btRhUFcEyzc397RKPYsZ5JhDZTVCjnJ74cH6Wm2Ydck9",
  "key21": "5hQktdPqivEw8bCyPdMDXZf5Hai3KbvmzpLHeDZ7T9JcYUd8xahAmWHUFRG8uJziW3tWH3KcRHX8VhPD1iC3DJVJ",
  "key22": "wktZXmT1nbbHuHtY3qynhSDbmuJg4rB9iaVFXmzaFr4yMg7exPndgnSk5dVCwgZ9KZgMDXTzB4WUGWjw3bTmbM7",
  "key23": "5gAsenn4pnLRkJv9PN4qdh4Uacvndmnw4L7gSMmkCzFWpfNjGzoGgeEqM16nqTbDxm6b9V9CkQsj8yFpUP9BtakS",
  "key24": "4rQ7HJGG6VtN75Tn6CaLsq6nQPMvyju3iQe9CTpBmCavtmdjdt8ikUNWLiyig61gr6FVmo43dXLQdGaw2t9pQDKR",
  "key25": "35dDicUUmgMZWA9iMkreNiW8niJB1hj2g3TNXpKz7Y9xxBvqMEFksTTWR2Qp5ueVhsJcG1STc3qjoJm6MD5Gnrs6",
  "key26": "5NBjvwhV8WfyB2Q3DVS2JzwH7hqmjp2DHzFwGa4yBFZDLJ8igADDiNaRS6b7BnV5EyU8cVpYBxRM2Db1oLvXBEUK",
  "key27": "4pTHn7wAVCZ12H7Y8eD5JU6MRW7zQ4WW3wamSyfmktuv1nWa2H7cVnM3RG4bzkQEkXajqQe64H4RsRQmVJpqkrAY",
  "key28": "31uyxs1KHiWeqdLKo68vDSmCxZqy6xVDQyfNa1Wshi5Ho6zXUbhs4qqmtVPw2gMGYNi8g2hRAoipdeHteZk8K9Hc",
  "key29": "4Y9aTRwJxQVt3JSYxgCRntVmxuHq8YzqZCHzTSwg9bJCsFUfpQBaTJA7BiXEitW8mU4CQ5hiNqi513GRZEXicL9",
  "key30": "FBNr4ZcnTG8YKmx7JDLUSDSWGgseX6ckWhb3h1kkFUkY5qtDHmArafCZoDtP1ndcAGXW7UnKPGeFV4i3Dsfavcb",
  "key31": "5FqDL5ywiCeEGWLSMbiAxy9JUQsKRWTMqX38cYhsAuYdQjPvmH9JP7NELzZNfNoiiMPeeJEaPWb3C9of3o1iaTqq",
  "key32": "4xjHMPeshKazenD5zp742EX6knW4wnJDacTSRpDcxCSoorWa5GZRtJeBCm4E7CNoUiRVyuWLakmsn9Pu6WRYm9MA",
  "key33": "4jpWY3JC71bjAAmZAXELEiaEJoy1fNCQ2YwtooN9EU7UbSLBLAdwvU3LAtNrNXXxS9JV597F14fedj32kZigGFHk",
  "key34": "VKM3cr1RVyk5MEDuu23DXTaGmCwHLXYfdHnTYPRNVK9eHigWZFqLsrtfGeW2pmf667p5C3Up6LZUg8aYpTqJRq7",
  "key35": "4Po4PRL9LUFzvWnRnumiqnuiLxdfRJNJg5iwA8WfWZhhn1RC3p7WpM7NH9hHXjQwQYK5rQAKoX9vHdM8tDYfcXc",
  "key36": "N4Hj9Xi1MSYfS9AMwtgNw675HVLrvzDvojYnW4HUKiWfc76ekj3SYSo9m9VzYDi23gXQkQ4oJGXjjyeaHus7kXC"
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
