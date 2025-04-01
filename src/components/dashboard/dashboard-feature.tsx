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
    "5NGkRneRW7bQN6wHtgH4sBqtRkn78wm8of5b2WXjM8ALoirnbDWZA6WykeNuxM8YxFztArnDq6USonUgwU1jKhSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DUZQaJ1oj2aN9vxzooSjrmSxNY7THiS91JSw7cR4z5RsLRBwm9VZ4rYWeEB7vr5XxYwPcDgMBnn4VsoatYKqQL",
  "key1": "35scN93X7kmooGZGbJaToCc8bkxz1fKz2NWz5LkaEWhFBCdHHnb2vt5ZSXi9Vj9yF2Hau97Au4N92q44k4BvASgx",
  "key2": "5mzvpZPmUzVMbEukMit8mvcBWBCvwDpxyA4HQwMYyzTfRZNkg3ThQK2S11sFTu1TnaQhsEY1hR4RPavxnXKvjNTt",
  "key3": "5K7WbuZ4Vw3anNtmsYwvdyWyru1gFvuJqGE1iXYdSHc8YEgd8XCYgho1MT21bHftXVRcuxxmJHpvDMp13fwNX8w1",
  "key4": "7zRXrXwJwHEtjApbMAt155vvVsuse1bCMrgbDsrFtMn1Tg1ga4NZQTueBU1D9Mxv3pVaiZE6zmADzzJZL83WdKn",
  "key5": "3Qaqp9ePY5xuX6RJXeKhzPp4LhSR6GgfbCGmamKGAAB5w8p37tBzVBytP3BqFkhg1vr5n6z5tknt7hjLUzk19JQv",
  "key6": "dJQ7yUf928qigHHKfZZJK9euBJaEbFdtZpi5aSG2CbbjSuYEyJGCUBgXYzoKMUcZoJimCB2keha67oWPQrr6g6x",
  "key7": "Pjw7w39Skvnms3rQx7gVHryWzkS4jEvKbKGyAJzKMnW98HZhT86uoJwLefC8HsUfV1weGGLiPe8qP52NTBWn3FL",
  "key8": "66QVFh6hfhxvmcmWd7ZyyvrChveLTXjuRcQJcwx9e24tNLCZwE9vqGcQ31dFdLVkuo6YHms6dbn6zcr1tCkUmFfM",
  "key9": "3Be6RCFXewhtyHsL2ogfk9ujiTmWqwEyzPEj6EvwwTfZYfb3x7Jpsxq7Gwc5i6wHzsZSNu5LaEFEJBB6X5j9U5Sq",
  "key10": "tDBZumZrua6Jo28jtnz8nSTzexmA2nZDMYN8478WrxNPAes3tr41RKeiyvs4CCuVpe6jtk1d6Mq7vbA1AC62gXy",
  "key11": "3CYXoaaSZgdu73hWyc8Eaas2RDyjJtuU3gyVsWtPK8bpNEGUG1B78ppxbDyTh2STNrSNiyTZAp8uCyzwECtvPzLz",
  "key12": "2XMNs24DiVJagxDcRrbQZXCHUHxfk5DwKZBnMUCYxKWTsqxWU17bHdK4KJkbK8iAusiWe5CbhVbMzLaEVPwdjngL",
  "key13": "64qDuurs9nCfRGYk8ws9qyFHoY1ZcgnnMhYYV11wTaEUEyumkQY2CLnSko6n95pZnTAUkntptoqJznFtgwLgTp6m",
  "key14": "2t7Ezc7sq2FxxrwNLDrcTFZdRkuaJ9sZFMFoXqcEbK5hWFoAxm1hP9swBv5FTL86PypUxbycCohKhRey6dBQH51B",
  "key15": "2ZkneMs8qBSn5SSVyYxPEpCiiCn2TP2BfvUQdcnS9PXMrtMpLedo1VUhFDKji6yd1nxF6J22je1mqozLTi4eU4hc",
  "key16": "xVMPAwxR6Bt9Pd5mtnZKJcm2rBdRTL5U9KjMRqLyDPEmJazfJbZ178ZNWNuM1zzBiK74K5fjLDLKqDFpkDG97TT",
  "key17": "29ybnAhXHAuLvayNtS2bc293ndsV9u9wG6gLy3GKdj11X9n1omo3N7t358XxgkScGfwEDykBRrQ2nbC9HLsezPeg",
  "key18": "LSQPR7mR4KFx6YnddXcDQfCYZQLhuWSiDvauGBiTnwmBvY46MsTLakyAU587UaEmwg6fhuNM1Wobx91NS1M8oUU",
  "key19": "2XzFvGugztNP4HGhFdjFD7bPxoRwkSCQvNJJBBPmXoeWxQQ9zPeWw5GDmm9YLqG7i7gRafYQaxMFuUHZMUgmCcDt",
  "key20": "5tboVH8hJBE52mZhBQAEzm3cmUV5ugZgWJAqLa4vXnZjvm7eep4hEmyMMHyDkAr3a9q8mnbYpzzthPBvJv2FQmmC",
  "key21": "4qnyg5om5z6CcuWTAj3w2eARDRSFcTPNbqtbnsBX8ZFdaErHmNdck1m2EVn3bt8iojM7eZQHrRtqPH5MQfrLtuRc",
  "key22": "2UN7z41ws5fN1pPL2Q33TZzXvcoYqD6G3gMG3VzymKfgdqVdZtyc6XmMD8GhNvVAmYJofzaamrBH4HuuW4nUKhdn",
  "key23": "5yfkew5MCqn1jXLXxYzGwz2QZDVL7f4uHdz83VyRzNxGzyhH1J8mtskGwCm6PqxxnXKRruPLVoaH3Dm8TXd558z",
  "key24": "4RNYjto5RGiS7BrDpcX3jAjz2dwBjEW27M2CWVEwcrW2fCpVVbzynciQ8QLP8wkYZXkBkEHzxbgtPcAj5jkoFDP4",
  "key25": "45fjxiXXxQEnJj1jhGEHMRgpM7nPc3mGozH4jdgYzWvkHAUv2DrmXmf1uhs9N33NbUUCfu4y1sc5j4GMqY5x8cxT",
  "key26": "3R6CbwdvXJv35KanHpRAdBPRq67bxVPzWvVeRR8H6HX58gKq2zArYA4RYXD4HmEAo7BP2R1Cg5Bw7riRoXU4DQpb",
  "key27": "2v298vss3TU5FXju5pFSBBhUTJ5JSRNYYvV5JX6XkS51n6Q4UPFqWjsn2Ya9YyGDwG76TNDW7Ru2fR38Ukmh5c8V",
  "key28": "GWjWSfokUGbGDHo1sRfXWxC5xP64wSPBXN2uqW2RH8erZRKGWJhkRVVoyRis4NttUnbfqKLbmgQqv1BsKjSQFy9",
  "key29": "5M6knMx2FUtb5CktSxNNCoNjo5NoeSDNTJDdYQnZHa5UaDUXcC8mWRT7oL1GhSZykU8AaGqvRs1ygZLrPvajC3ES",
  "key30": "njDw2fmyxR6rf8t4i2fW7rhqYHS4C7ax5nVV1c2zfjRKBXNtcBNDMLaibYZrmxUueieb4tuNzHs7Ld7MRFZF7Rp",
  "key31": "oCPiJS2knt1SS4vZBn3wZEjjtk2AZNXvvCoa9aSMqgWxqm3jSXAJYX4EzYBusm99tfpwBhBbyaNkZkg1wGqsVPF",
  "key32": "3i4Bd8FeM9qWJmySfUWMUgV9EGdqeJycq7iG8guAXicpNBMKJKwP3mxUnyxqrYbNTSNXhMy8jddAvuJb5ucR8S3i",
  "key33": "241bQL9UmZA1miEiGG6Q7C2UW65CpTVzcjwSk3DzdyQVJGwZYRd5miqC2cM1pF5ynkrRYvP9qKVdr6coaDXFcWoy",
  "key34": "2e89hdJdTNgFr3PttisNvCcMcwuAKMrUDKxFKZd54Rkks3sEW2mM5nSbazZGSGbh8NMeDHGeu1GdQ8ufFcqqbP9o",
  "key35": "4EhJfckC3kpmQnfnm7qZNdHXEtTJkNZc3YSUcikm4YD8RsEoVUhM6oXPLCwEshT4QRdmzvSXrGh4CXEEJoEsqwaW",
  "key36": "2jWkt7RfVeKhb3u5DZnwEbE3BEkZ8aoQQe998ZVKwuBmiLcBU7GuWX29krJGzYmkPEm6kSqND2QkLhTPpzVyg3pB",
  "key37": "5ofb9cqSzVy6tuWspdV15CfvTNSmzyKrsDJBvdggbDR6raz1DeQvXsbT5y9j3TS8sAkx75nTwNUTbpDbPLw3bfBj",
  "key38": "8ufatTgaPT1HQZbDoaH7hW8TAnW2AtSzMUzPxKRKKDCjS2VBdTMF7gWrCVPpdTct9r9G1B2kcFGeKJp2sipNaec",
  "key39": "2rNrTBhn2dSanNzb47JGQSFYFiagwXoQCCo23fTvRQJW9HDd7V9EMyyFni39uBGjvUyqScg8TccqoDSo1CEm9jkH",
  "key40": "4MphAC4NyXi5y4kiWiCxcJKy8r1BRwRaNxJs4xZjDbYYgGx2H7dRjZAznz1ntLHTWfL7gPcsPbvhHYkxWjgwUrcg",
  "key41": "3Q1FYA3Fr5r4T8QZfaZi8dLduux7Pdr5yvuoPcE1VNnUxxtp4ZLFPPCqQPXKGwHuHFKrfEaSfs6ynWRy6NHPx4sT",
  "key42": "mSMN9PvKx4QcCY8i3VrjhvmAxHinNfcDGh5HDH8CNTvVnCKP8J7JCBDaq5ZsEUen6AyyaYvFFAjm6TgmNFAJTKk",
  "key43": "2TRdfXu6booh1S9akqtGYuZgcWy7x3tj2MEPWLFB1eb1XXcFWc6bYgHaEyNmHFXJdBUJX8qoNNtKvs63Gw6i2RSr",
  "key44": "5Em9V3zREABxmajSJJQLW1o2GhcvT1HKh1UNUa3pCEJ39Cc3Vf31o6A5uUr9t1NvqAXZpRLCP26nE5iUbVvfm8py"
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
