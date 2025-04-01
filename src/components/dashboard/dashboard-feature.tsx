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
    "34n9VJFUijUSYLKTUeb2rGemfbxusLXxTJxNUzTVnR3Zma123NSMAHBDmwRU9HzNXJTwtiQPPzpmGdeTeJaXrdri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RdvFy23ZShHh5yNACvwVUFCqBxauURjrQ7YdZidqMLwURYx4tqBAdJPF6wLfeT54rTAEaeuqUcKyhUuJSVLcpD",
  "key1": "21bhhgp3CX6k6xvukK5ZPEzS1tz3z57HgY4vz5YzPZ29HNgFvwyt7vK1L7zSzUnJrtmnynUHpdbh1a2TwbRLpXGn",
  "key2": "64YECBTJzRL5gXJE9bE6YcXY3a4gay4QXm6VzoVEtB9Sd7DAc9J3Ac8y6NhrjPuxJJdA9heY5knTijtuv9ipEruc",
  "key3": "3NzFzBE3fhDAdiWC1fmmyN6xbGPCMK9JRJZNTFwKa8hQepqPvgyPqB84UBLo2d7pVHxAMqHwWVjWLUYMtSoKnhdz",
  "key4": "H2Z23DRLodu36pvvo7YtxxV8cw2cRXNrw9frTkHiMfNwWdZM4eKwxaJS6J2H1ihA3bc8zBjCrSkSeKLpRTt1JkL",
  "key5": "5JEmkxM33fxptoto8uvK4bBbD2JBQ5QxzFCZmXfgREgBptjYm6pNFJLUcPn5SAcuxBTX6GrDMav8GvRJiPVvfX3",
  "key6": "5n3u3yNKtonzCjshHUyXSwKRtYBkYZzWNiQDQKNdfsFRLExrp3VGNQTCNZ8QCPFpJFrhxNeeJBm9hy3tv5YNhDfB",
  "key7": "4JZhBVrjonKHCz3nwMypDP9nxtd5xE61QC3qVHp3bsbG3fMBG21tvtER48wvqpxWETU67y918TFpAzXUNonxxAzW",
  "key8": "3RchNY5LvehY3D3X4N5bZXmBep5J2Azv5eqBP265igMBgR331vjpodpKd37bUsTzyT7QRd33n64irjTAS9JSxE5Z",
  "key9": "2RPtrdnntfnRujMs76mT7PJPMEryEQUdZrE4ojmTcGWTQX8zLTmhAMRyeMtf593PnAhxtqtffpkATRJhUAqZZCob",
  "key10": "428p97GjgMXafikCwgRz7KvExiBrQ3E1yWeXHW7Ejk4QZzfnniLJRdWQJmN7HvrbbHaUUf7cKUFBTjzXPzpwUDXS",
  "key11": "ASHLfJJgJk49fE7BJGcLWZj9J3REM7MvmLvZmYyiCaNXsVx43sUsCqw4JmrXqLYyXYwTYZ7yCbMf1bVzM9hHByZ",
  "key12": "48MHiUWQNqujiz2RKz7Anq2GQXr4oLPcpspm4RaEgwaSZ6YUKyEDUdjrMyrcYiJsRWVpeHiaFJNha26p8on1ibL9",
  "key13": "2JZu3ZrWXVx1QKQmSheG7iSo4BAY8xtrL5ADkap6wvZ3fo58oGmn5LoPgStivJ3Xra178ujyW8RU1yTnYzx2yJW8",
  "key14": "ZHAejgPAt4RHcGjujBDsmTjJohonAFnf6ALhNn5PGD4CGGH7ZxM5kNFHNGDWB5depk9KLLxD4YNGXfbrUqAqJfG",
  "key15": "5WzqjLu4gxofHF2qJJthkjaKv6pHVc8TpYDtTqHWCemowPLFamRjoi7Kvf4BbcJnxAnixxWuEV1m7FxUYqHguixk",
  "key16": "2wUNKoy1XAiEV6f4sy48makEpQtrAi9ZDAvUcY83d5xToTGKoaASb11S4TvucTuNKhLZSM1kUxLWqnwAxKmZjvr",
  "key17": "KaLnmkhNAAssuLFxZ2gNx6qMkcqtXMg8XYxrVMDTopnsMqSfDpcrUobpw1pXbSUtVuG6MReEFWwoMueYjuaYqY4",
  "key18": "5AyCTvm212itXiq4AQrBrFNdVRdrpn7xCt3feQZ4Xbc1k2Q3Eks3ACkky1BE1pBrFmidSTihktMhXBWdJyAbPycx",
  "key19": "4zRWmmKumeYAP5a2eso7UHvn4TfW9exZxDhPRWzAHLHgooxM8aBT8aj9dSeG7VYaSJr6WogwADBfzqa4ikCRTSBF",
  "key20": "35SZxU1y8E1WcZLiPmK9LS9jiU4cr5giHL4ndsfW2bGLu5keBduDKZcTJ1iqky39ic78Bv59KaKqQR4e9geqFQ8p",
  "key21": "HyXr5dPttk1cj3mqjRwvZKP3CPXvqDxepY3M2E1DL9n6VYDn3Kt5rr6n21fa3Z2k35pFTeydg5HRbqmg3uKbWX3",
  "key22": "4iA8wnd1RWPFriocKt4ihWEVECkyAPfDTyRC5UU2ntsnQszRKssyfKSmhUJwz9ABDXYxNKHAhjRfryepSbWPqbV2",
  "key23": "26syLxZKttAvrpmnu9LcSt467Ep8kX5qKq3kTQYwkT7Zm92hDtKRP3UzFzhXJZQKLut7PHYUfGZdNmok7UGR689J",
  "key24": "5nJwvAb7oY1NsyLwB15srYxW3KbdgSyMqwkcRoeG5H6fyHw9uaaARD2EpSpeE9pbExiJD3kbKJy2oytK48bgJKXp",
  "key25": "2W4dMCEiPCY6GzYFSDvzRpbtFtZS5ZCTSSvGKv4Rkoob798wnwg4p8CnEts4LKtEYhSCpE3Kjncjap8r1x88hmaH",
  "key26": "3UbXwjvza7VsEBJsDc3wGyCXKSxFfni1UnBaPrFUe7smzoSXVnCY2fBgURchE8ANzsMuaQna58hMzmX8PaPGhNtd",
  "key27": "EKDc7rNdD22ZNNUnpEHJZmTyj54Thz7J7DhorPpzpMxGPjg8V5Xc7ucftsJvN84dobQwMPJVxpcZfzMiPnyg874",
  "key28": "5y82c4xrvsrQPHjkcPf9W2g326xYq8vZE11reZDaidT9pEpPURZauC52zPNZUDUGk2gvWCiBgGrCG9c5dy9ncm8i",
  "key29": "nfc1hmAmfYaquL2ysbTb5sPtG9cLHR9SXBLu3dG9AsVpCXk4LNdj5HZHFagREmP5SwvC4PyiwNtaiqgvGKgDwKy",
  "key30": "5PcKbvPm4WFHF9dMtRkfSJEo2xrtKBT1BydqrYZwycaHp4MZgsu1X2HW5fLtp4KdceoEASFnAnVyfBtmdEqYqdRF",
  "key31": "3TJUS4bUBoRKW2BrvnFN94Wj6PjzXybzMf1jeFNArRVM5mc9sgJkVNhU1EhkK4ZgT11fD9dSsXPjAR2Gh1yzgr2c",
  "key32": "67C4FcVwQfhqiMKkQXvQdrnuBcsPgdaHU3LaoEts82Yv5rYKaxBKjcNZXSVnLgGE4JFY9vkAvyzdZvcDNbVCHNGT",
  "key33": "AM7MjayfAsApJNTj2fL7LzbrX76aPp4KqX2XbD8NKLj6UVuzKdqvo7TKzpGiczoAxr7eKDfJAQt1aEJjJxgjRrC",
  "key34": "3eqpg29gEmXWoWZGTuv36dY3ujKPnwZy7phyLsqv7mSqcEvmdxvMJm5oYwJpkSH12w2nowNwVk5QFs9t6xxn8Cf7",
  "key35": "5kHWi5RAMRyJEvhSXnHk9Ukm4MxvQZRiNZNpMqeo79HqzQsTaXghqBDej7uAcUfUNzr8F4bp1EYjnaiDozLKgEEj",
  "key36": "G7vhVjhiZrxwxxrCbu1BLR1rZ5fxZBzFbhbL355um6znSUVXM6FNdvMfZmcD7Ks7EU7ZspDTqLtcdAi7XcgaccH",
  "key37": "23Zes2CHP6sSuiqvBvX9ipQZEyBEAvB4L8AGKhAnW3HJEaCfd34x12QjjEs5vprF78ytWYwufHUEXoGiAwwTFMLF",
  "key38": "3pC3T15XjAnuUKbA59YWd5mvm3hJzxgqf4HizmAh7mTeUFUv4P5HmXaeCJ63aSVkHMVo6qwn4UoykskX6iYbfWE3"
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
