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
    "63grienQVQaJvqAo9bJ8KZoZZt4jvsTBv3HL8FAoVNBzYZMuuBX3yfcG9bkQskvr2skQw4n7c2gRRkw8LtUprDdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rr8h2C2iYSeTJ5sME1QAGyMxGWu5r3eWWDM38pz1XLHETFasTcb4YSjjULNfrBTPNCnQrDEibof4Hb31jdPLstc",
  "key1": "5MybUhh5ccpPUf1w9uz9jPwvSCwAwqdGjWXh92zrG8bknzyDsfv5A8E1nCgQtzHEzptP5VKFQ3YudnJMpwmbjTy8",
  "key2": "2nPfrXL1FHMfReT3KU5YPojUJobZRTf4iGfvNRuzb3zxw5ZSR9CsJJ2VSukdCB6Vfs76x7EK9qJL1T813DchdkwQ",
  "key3": "5WueJoor6vm5sgzHw5m8gE45sjCKMXqBLEDyGj5mmP2DnBi3epWbtov5rsRK27N4VrxLJT4vzoUPrcrYvhbL9e3d",
  "key4": "2jpkMJW8MQRA8c8iS3GYbM4orGfpmD2yiNZGEF4MTKrzesf124JXbNCpafNtZxUDCrqnwhuFmtPG1GgQoxPL3hCN",
  "key5": "41bdyErxUy5EoQmrGRgevyCzFXDv823Bj2c1v3s8xhwcHYTsiNakMv7opKfaFzLGPaj6LpuY2RnBbdsh1W89TVij",
  "key6": "foDcALxvTUf4RnhXGCTknAkvkDDqoqenpRZrpDjFXvfBUJXt2VdBk5CYKDeMSejZs5UY9PjPAvTChZDvPAJbFTN",
  "key7": "5imTDTyYygSTyXBNopa8Dfqpzatdxz21Bxm1NwgzDwbWCGBLo8kYvVGF6N339GrqZx2gcMxmJFM61PrJs6vDbhuv",
  "key8": "5KKFV5YUJXrvN99B4C4RSch3jUyMThoTpMhdnkGPYZM5LfpzoX2cm4boEv2ineywcEqmDkJAXH37xMUgMJ2Q8mPa",
  "key9": "3Awy1fRCxfrg6Nsx8Ff6VdS3o1yLxTkkDo7tL2Qy8KrTge8X2rMeRm3Pe4tUj4Ahq2Spxz1XDggeTv7ZTsBs35KX",
  "key10": "EDXeNPJBigafemPkUhRX9WmH5411oJiHCoSLSqhiZzgY68CcyexFUzNsukFKmr5YBWKPWi8yLjdjoe9WijZqj7L",
  "key11": "2pFWM9J7Jd8RuMe9iV9E8sSARNBopkvKaHcdZLNYvSAPwcxS4ytegygzNVxqB6GyHyUShjFgp5bBX1vQQGviAefi",
  "key12": "64gPDpC5J3EaeXa8swbVYkoJqLmpDTmU7A3TxfAdfyj7Mvurp8Smerus5hnfty3Rx6QqZQEA6ai2ECnygYxPMKvT",
  "key13": "3yxZCL355vJA5yH3PYMNZ2MKRS7wPmAeKA6tx2XjXBjqiCaUjbpgpG3UKPjmh4CRDbFGHo8HuSQu3MCTXxsF8ZhF",
  "key14": "awGn2NViDkHm8ssmkiMG7c4eTb2i1JtfpEsM9GraFnvZWuQpED3sunHmRMM41MgzQH1JXZwuHMwcir3m94ooZaU",
  "key15": "3kmwKec7jwuYU7QV3cfJyka4icZ8LGhaPa4WdEhY61VUXkqkCxY1Weh4hsvMkBbcZZWXfwJH7oWuttFqoNdAwgch",
  "key16": "2uLfDM6gUS481tWLnXksM1THdrYcsL1JgAvQWee3Vm7LgBoLwu4vU2vHcp3m1ssgP16naQGq5qXfKsmnZdH9r1m5",
  "key17": "2eTQSHjvcfdzCW8tP2ycJhJwW5jFRh6LZjUPuhgxbvqvsHMPd8PvMvLBmnXEomb1onX4D9U76CiJffzwBdBKL63L",
  "key18": "9aR2zdK6wxMPdH2fvoBJCSiZ5EE2bj6qK8Y7QGHQdQUm8dqe18d4kPaEN6caETGx3bCNi11VKCpSAvMd12BwNoH",
  "key19": "oa6HvG9uu2ZoyVNzEbB6UUEoKFgYSeZ1JYLWSmw16HUKA3JLHzNuidPjcqwGBtcRzZpCAxJvyR7BKMs1pshrFuL",
  "key20": "U5L9eYDToCu6froLprmCJHg5yGqGpf3ivV8Y8xNSoLiqW2hAntsm2sKGKkzbXbNDK7Nyb6y7Ua9xmVrUzcQpsCq",
  "key21": "2nvXLUgLgwCpmaUTT1qn9urU2BWevTovmpWXbLwr3kJooRc8tGodXVnLHPZHrHY3UYgpetN365JpUXf4vkLDFxgs",
  "key22": "eGrUG7RKSMSL19rBMWiDqfaQ3niTqaYAgABaR5Qw5bSnGaspETDUCkYCSsu5fMfHgSdiGzLWhmMpggA41uvjsyK",
  "key23": "44nAamVTC61en6eLHr5mSbGyuzSjETazqNQeFUEY8UvN9qpv8jd9gsstPAYrEZCr4j7Lrm99vq1weFGX2rmRYCRX",
  "key24": "31y6u1jxLk13ysmNjAghW4PCuHrPDP2Kun6pMnsHxWaSz1yibdEPiQd2NmP9MfJt9SBCnPp1mrjxaFRYQu2CYnrR",
  "key25": "3oAjMZM1ZuChQHqJ2SHeiA8b2JyhW5zkd7BgEA4M9WiF86KrF1g8Dv7cwCf7TNZ9YiPixHBtM6ggkUBpw7hEfF9C",
  "key26": "Z3cus9AfNaQ32dyYgfx6WJjEAPqyMzUT4fukL59LwpkQKeRxHG4zRWPBUGgfTQcEo2LSvnHmBWSPAnp4JjMXNBG",
  "key27": "YZm6K8q7Me1zNJS3MGVTd4fHPY6bgWq9DKbN6bBYFY5WY4ur8Fght3HjW6HHksVm2yjFrJxWqr1UrnN7FLrKsQw",
  "key28": "5p3uE36Pef5MNDyQhtyqidDg4hVQkWTM6CuPzUAdbXmAqrPTu7vjSmKAmwdAXv1NkDYo2ju6wsUuCzcHrtF7MbbE"
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
