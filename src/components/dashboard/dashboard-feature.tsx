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
    "2GKShzupmZLwG8qeKjGKrSda7uJoiQjSy4mMza58TFdaDmP35uhRmHWbg6pQNUm5U7YBdtGS84b3oYHVKNWi5pfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xbV47chN7RS7ymNWhmgtNDEHRCWBjbRA3pVzZ3XkwhpiWLqpnEQ17cgdJ8AzyahWEeGmjKoQA1EnLfyjeQx6MdY",
  "key1": "3QBGFQ4QoahrtePKZhbVwp29xHdRNeWrsGbPo5YTP4bQaKE9sW2cZHqB9j9XjnXnTdEDfGQEWu6htMMRC1cg54Ac",
  "key2": "h1eyhSMZcgNF2oHpr83R7cLz7eAcsm2eDNCLVyFe7jqoAx5NYWPbz4EB16At4evgdtWtkk9G2WPYDvLCrXLxSNu",
  "key3": "3mZpK8dMHix7iBm1wcV9vmbvBiVSR4WBffYADwreFT4V9oNtsxAxA3nhdBnmY3BS3PSZUZdQsP5rBWzL7HFtqWLE",
  "key4": "3vDFPQfYznWCiUrahXKCkcHFqDAVvWbckWr83AfRbCqijMx3uETuCZTqMPJTJxeHq4XCg9kVRm8PaEawpcYW9f3C",
  "key5": "5pnFaVcmhyq3QzbR2ozfyYjZkKom4eg3v6eaSNCBBKzYnbPiQXQJSTdsnNZ88WFLNBWhMieDhEdi5ZowKjus694f",
  "key6": "2utDWKFsi21AMifB5Jvi11K576onQqK6AbKZss8ApFadv9mafnBHtDX2aQQDV25W828tm2ArjPucBC6VzskqLMLb",
  "key7": "46ay7iQaAKSK5WGkWvtGwWvQLV2R7JV26FBT3ws299ZkQr8zNmGLPWxa5LKxQfGUJHu4eGnCeF47Fzg2VtgYTV6R",
  "key8": "CVLiLVRoUBggaJpjgtzYYzJriZuvjpdRsdaX8nASW3tnVC9BYbnmquhPYJR82wuifsoAFiD1uhUY5sNfM3t5XWW",
  "key9": "33fpaeZ9papz6RFMQnywSFp4uPatti2rhcHvfgWg2MoUVuPznPAFCU9CkTtPHEXxvNojjr7XoqFsDCd8YPVvqW1w",
  "key10": "3FQHSNGMuDYHb9bmPWFRGLJh1g4fjy4KmVhVvKdymviPArxCLhbk5SRCs6YiKC9Mk34Q2PC1BGwWt6PmMY96bt6Z",
  "key11": "5WSUWTn9VCX3vg25nR2HxpvGAQAzSTDedSvnU6XrD8ztEhwXhwdLC39MAtuzcSXfqJv5WCDqs2yg2GtAnn3BeriU",
  "key12": "2ciCW3aAhavhLKJ11kucqamDjTgMNQF73sBZPTe9HXi5Rg5rjzbkMV9REmJZydaacmLPYcbnomvwZJ4zEQruKTJ1",
  "key13": "3n5J1TYvpoRbamT8r7qgRMGkN4yQzBfoSRHcjCjrdUCErhoKj2X18TGfeC8j1YK2HaH6Lx7EXHdX9HUtksfJc3T4",
  "key14": "3MsAq5phcJdgv5fFGFdJcMYQpDqDcQECnNYMwbrPQktu7aq7gi5Ch9bswPThjFLyGxcH5GamjdhA9twXr1STmGme",
  "key15": "4Vc4BqBxpU3sTAQ857K6imtXmuTTLkqShvXk7fRRgNrU7s6USdSWcauYczjFG4NE8SpsWJhJVy87Aw8aMd2ydFCW",
  "key16": "2gbL9s6DEbnq5SfKGgARVi3sUWVLw3RBkCfR7ZnyLPRFHB5t7pPwz3HRCybvqGj9Fd5WEDxbkZ7DXaWtEi4souQP",
  "key17": "qeeXHDr6XtRvDi6kwVkpAjnLmahLAkB5CgyXwTZvd1ygJJSrL8DsjtvyUdTjztVuhGUNe8gZidJvqsCxaVwbhKZ",
  "key18": "55xKRdumH9Dpyke58iGBhrN4Xj2RYZdMjVj1UCEQUg5ymADqRegVuZiWeGaSakBRrE2DX69Pa1SphP5kZEY2sQrU",
  "key19": "3ZQL4TLP5Qye736DqMiJLgF93qpBY6hsy3MPcthaQjGpNTFEZqQTSdGzWygSMT12QBTZCLG1sdgSA83fQDt9Mr2c",
  "key20": "5dYTqZ7LmkAbQ7XmY4RfiEHPdnjDp9bAMXsqwn2Y3kuvu44HVCxsULb2eKSyM8Abs11xneaVSDgYKsXZNRkNXCVx",
  "key21": "2Cu2fN8HKrAVQA9xY3ppR6Bb8azNLHgs2z3eRFYjDkLtmVw7fa1nmXdfCwncFf1VBmmSSHfueQHAFvx7cPBAfxMn",
  "key22": "26kqY9mBZHWkwaDdDQEePk7AkJy5XDk8wn8qTj3RUMtDGtMNV5QeBMTL61hvZWNJsmfSGGuQKZyvPLgy5XBAfWNy",
  "key23": "4rcpN4ZWtUKkRDiJn36MAvPqEU7BZ5yiA9DAakBYeNbUqtFGiaHd4pqbJTLFgc6cE2H4XRQPFV42aReBisZq4qwX",
  "key24": "2ZuQNw5EouQ17f28yEdZKMroqfiSqwSCTdJ7tyg2wrG6nD5PHxGiipH6hhsidVEpfbfLU9WN6rmtcqesrtomzcpr",
  "key25": "2LAsxE9UyZ5wmuYqLtUwsethM2Khn3aMgvdPdkd1oWr11vzCmVrAAJgbs1jDhexygb7BsHscLfPqNRgFWA3oK7jS",
  "key26": "ay3d8cuDf74ZZDLk53gvwXgjtmbQizcG62D2ATZ9ijN9gXXQ2gy4ksaHg9ZSnc6cL9jN5gwgti1QNpLoSV5WzqC",
  "key27": "3t4D1KN92o2TQhLCbddTsuQLtaeQ61RDDX5NxN2ohuikwqisjLVb2f54APXsrVpogoU8KEQKcZtnYR63ZsvSkCJ6",
  "key28": "21f6rsR8ntS3m39sNHBtVz5zBxAxmv7e2wpzaDdfEGQD5WqyGdxKb5n4BJ15zBUfSFJ61Tz8k4iFav9cwmDFeTWe"
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
