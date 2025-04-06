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
    "37f7b12P7gt9NQm78rhJVqwhnNGF8Nk8AcHc45rKTS6TjXafDZhsiwxwDnQPaAeGq7m2h2QGjGMXK8MPm3Vpdig7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wcnUxnWsyTKjwkbeefjPtLk1kEKXzoZTCP38RoTvupKg1ZjQhhFeBKN2DoZ6m2QpWZ53JMJVH3N5DuTaKHRobHW",
  "key1": "e5JCd6GRzhYSpMYFrUYrrvpVpKcDLZP4wQz2sH7v3HZNjC4kxvGthFjR3Ax9JKaiqDqbghndCQ714ZrPtHD9zCA",
  "key2": "4cUXgD85FM5JFenB3bGUGrtRPsVAy5TjsctvW1LMx9LgZbczqV5sFFQZqjaBePuUZWA63rcceQ6y7Z59ZmFaigeQ",
  "key3": "4yR3zx6oc5VM3hCHt8FLthrjr1CJeLWzcYvT1uHnf8PBGxC1aF9aPUE9DvMUGcNoD9SfFgeUz9v4pEPB7pQJU7Dn",
  "key4": "3YTEec8NLFhbzPLxggcrkVz41LqfZfUxFrqDGdtUK9eqkp9N4uRxejy241CHxa6nCQhXLXcHwK6T9TvSyseTnzKV",
  "key5": "4HLt8dkgmnFfQmWaEXwwVnBY1b14XVy8G23pyHArqTXn89w7LTzPG1a33QammUro99Z7pd1VVefqbpuqbiGRwAyp",
  "key6": "23yUbCjQf1PBSGKu3L1Z5HX8AHukLYy7ZLnnUeVEJevTT5eKHYeAGSb3hNDSu18K77GUpu9sHstNGQ6P5ZAGYkQh",
  "key7": "46Kfcvx412BcDA1r2mYZZ13reLRxeLY59B4Yhy9MmBTuuyo2U6MJBQBpRF5STeWtTbvM99eRBb7JmeEMWbj5sHst",
  "key8": "3bXoFKB81NMCG92vjK1vX5u7mQKNa5mrGdqg7eqyU1fRraPpngxGbQ259g8f35FCP21wGbLXocPeZKnPLqzbGcrn",
  "key9": "5zz8e4M5nykd1rkog3QExtnTj12BkNvKbEk2vJM1PZYDvGfzbDnMKy7KLXT7JPVAkdjstBWyNA56XxRYxu3q9sFq",
  "key10": "3GozRvnMAbZUpYVX6wTPseE3QhGwu4zLDDRwiubd6pUmPngDdNhM86jcS7VQFTSDPu8QvScmeXEzMVD2gUvZaX81",
  "key11": "2gXJXiFLzgK24ymfRFnUfcWXS9cYR84JexzMck94ZXG9vjSDvYt54S8AAE7GbkLojjpVpvmKeA4QPoswNkLjkvWk",
  "key12": "4KAFVeWUzrKvqzEUeFFfW4DfCTYf7iGLzRTwZw3xtv8p1r7LAgzZwd7n2zKqHFgWka6Xb8dryUshoWSf9LhFeipt",
  "key13": "5LXTEQBrUXLsW5Y2GLK2QDUFXfDVvy8ua66K6T2SHaCgaS6fJyEVkGT82Q6CodVQMo8BXnMZkYAWUfQhjf2ah54C",
  "key14": "2b1gLUr3HQfKcf7Qdsk4ZEwZKrQb4Y9enKsUWssNZCZBFtJBx5mjcatDifqzKLrpQtgDKb327b2gZ3sSvrvxhdt8",
  "key15": "55rjdgefxC8VQ147WDvaK1inQ2bzqehCgVeFaeh4CBTjEsWW4akUpodj2uZ3Yvw7aT1w23rm9j6wbAV6XUJsjCud",
  "key16": "4CnggvrfqPq9oHp6VG9MLfsojVxY9V3uJgDohYH1EkJbZmoTzAz4xe1gUMdmDGcV7GLMoTFx3cjEt68dnZob4pUN",
  "key17": "4TN1FtGNtChzreRp4V25VjbwEaKMqAjrF4tNRTCFMFRKBVT1MvN9zkxMErH8Bx9aDud1dvowY1xVKoyjNFHwkZGD",
  "key18": "5Hhx8HDBKMCBtBq2GvTox83AB9ag3W3mX9FTxLp1Zfeg9DfoQDTpydeBWTazyZaAzQ2DehyU41RtTzQiWs2gd6FC",
  "key19": "2nJsWJd7xXzLieZuCnANWptZScUyDLzNYdJWAr6wnwnTsx5rqy6mrEDr2oyhqdxiUZiKx2LyNKMM918c6urkTWxg",
  "key20": "5d4YPFygzSVHNMZeS7p1U1vDdJ8C8rieW6DsXQi27knJkXgpD1oZt8trjWEfJCvRVnnXKJRRdb9j2BQhBqBCQ9W5",
  "key21": "2p3PfkKJLJCu28Pm5TiMhUB7HJc3yanq9qKrfbkMpn3Uemf6k4NF9kFH2FyQg4SEADKYMndzQq9Ua49zTMJ1uqRJ",
  "key22": "43f6AR4YuQqDpQ45PsWnvNgXdst2jLT9FPfC1yscw5FSbtz2B7xAwZonKgEBZfSEqd232DQ5yANUeD4TNnvWdqCW",
  "key23": "3GnFzQC6fSwjywGFdZ6ECZzJt58Q3hTEC9BCUuoU66HsJMUdqWdMC554xyQazwR8W5U4j78CR1n7ZD3DUCBfSw4f",
  "key24": "2wxvFri3EiMBJ1dpFdniTpvwdksryztpFNRNBzNxVc8UWXxgLLzJH31pC81dy278ef9ccrbXwVVCPWLQM1kCv7yA",
  "key25": "5Bf3xCAi3Dww8JzmjrauiotYTwHQrTXBNL9jwSgcgTEpE3CsKyuMzqyqShiCoKZXSyV26pKYsfdUr4kMS6nFbKnB",
  "key26": "2o1PUdjpS3gt3x72mxh6AdGzkCAxTAo6Yy1FpKvRybRDcVwiPwLbVQ6pbbAd366yW4cBcXsGqJD8PnfvEFPVmVLp",
  "key27": "2caAQPFX1euXXGJK3PFux2uxM5tRQBGC7PxLN9cPFkzXpPrN7ZN38xj8i24tmNTmBBJhfYVq7RQL9wDkZRUvaMF2",
  "key28": "4awwAC2R1Xbe9bhr65XbRexvmbnGgozHyEcZ4vZKnuGnzE9FAN4KMYjU8K5bUdfbw4shAkUxf81tUws2CRTxdfVJ",
  "key29": "4rxxRCApEwvTsiJ887kqw4yj1SghTBz1m561em4bkf6EnrU9tdzhSMcKkBEexz8gYSjvB67KBfaS3sNsJgxtU6aJ",
  "key30": "5sC68yRmpADyzdaVPj1Ng4dVxJutNfYwVveZXTCrourfrBfGkHkt65pfxtPBAC8zYpQHXXVRmqc9y8M87rxJEAZ3",
  "key31": "3th6YqD2QRfQWqkAUBTPCHP99Vvypr16y7qUYWY5xmaxMZ9RFuge2xh3vbZxybhibbaZgb91DtB2yDZohazaGYQ7",
  "key32": "4MGoP44kyrAqFKuu6GPQXNU4PysDBeMF96iDvym6acmxaoPnL9e54CFVtqJFYfEoCcEBwQRivkaGC4pBJciHxFrZ",
  "key33": "3w4KWUofQQFbtUfMGxWV7x8r7QBNUVuu4bkCKi1e8ySJP3toudWJ7XxedVKBUaE2KTPpg4bi6dS3opWHiVm896m5",
  "key34": "2mdXBicBwM4RqtVWEYYXAUZtNLf3BWXn1fYYMKzVXAYvER3CAuk6PKDjLT313SY4ojPRGQLr7p7MUuvSSNLuabJu",
  "key35": "uj4KvtarRfZfkuitrU5tfFMw9MSwBQQxkAGKmTFeWBixEeqMkCUg96FaXbupQxRG9nPsS5QpGJ4E6AKPXrrGbVs",
  "key36": "5VaWY7C1JPk9zxZuvoKJGV8rAQWNF1qhriiML6PJ75WARNL7qocmpSL5hmVE7QmCFvrSMNnuHLnyUGZabQoKNNYp",
  "key37": "2rByuiAmAriUAm7xE7XunuM76crK46rKfHAkCRQfonHcZEebvmjxRhFz3v1Ax794cyysQ1iJBhtJuDF5L7U8pgUg"
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
