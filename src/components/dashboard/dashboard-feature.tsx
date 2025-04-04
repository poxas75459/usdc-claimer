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
    "5EnET9rQqAJZEhMpV94tE8qry9n9jisaFmaPkD45poW5YbkiHSReV7KwCVBNHdheBVD2A56gkSJm88VtBDT9J467"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67WMHyxmr1khHNPigSdbo2hmfAh4FupDC1DckY2Uhkkw4BW9zDQPMbfKx2exjsGKqG9THvZxpPzCrbXUwdBp1qW6",
  "key1": "3Basemw4BC53VHtRqSYMzBZi4HCDPz48zJtHXSwn8cnvJ23BYQn3yE1v3foDinUZMfQ2rHKefveWvMF6C162qihd",
  "key2": "42G1UtjsJwtyAwupqLAwpPMB2ds4wcJsWpe9ftSUfDec8LJU7NBcvrHwiuBkLDS3mYiCnriy6cizXWHTRQUdXmgj",
  "key3": "3vws6DEbhfsqDag2AQEd5d3Rg8PupCRghCYhBEKXfbEywg49qRujR9ZBbqGzgJeiXA3rr5suzyAwbbmFAbJp9pYa",
  "key4": "4vQm1nNTrdMpRqeZwxxJLhkN8u1xESBiiqxqrTLNw67HvgPkdSuc7BZrPgmAfqKqhzYQAUyRQNvUMF94brBe5q6d",
  "key5": "LXhX65oF5mKnizC1T78xjzT7Fv5PiudWUYshJqSWp9FrVdmcrS9toSucdGXXDsb5YzXks711ebcjcnbHma9mCvB",
  "key6": "5kkgCMMRjbsEqX87TRnqzRdxuT4bdKpsSTtWQ8Lao3vWwGBP7nTrcsRcWmEP36mzhqksQFrn7saW4Me8SgRcyHEF",
  "key7": "42FxbLzsJ6NGy6PbTdCXCMUHgZmHs2rQDiGNFFHbc6RKvbihsfCU7CRBcPocoFDR4u1Fyzqhu6Hx1PSNGfdcosst",
  "key8": "5QmJJTJUeNNjQ1VWiioKZA4B7Ck2aN7k55HuyZXzpanihyaFiFSXFPAkHP3caPdSe2y3SWpSkynAoS1c99o19xUr",
  "key9": "4M2vXzDueG1nPrgbinkwasBNFwuDPDxiqHYJAi9w5bL9JhqYRt1JtWpg4EdASBsNArivyj6TDUv7mu4f7oi3HiCU",
  "key10": "3CXi6CcW4WKv4akuKxJ8zxfsHL1RAoQHe66d2CksFn9G521wQTtiDYFuyA2DEW3JGUkZvsA5WYQBov3yJCmTfDCq",
  "key11": "2acVmbauJ4T67om46UBHcAgEjEPwexPq6sMn9ChJbKuWhsYsUmZsPYhqpvM95aYZ8aEjyqcFN3H18JdTeG7K1gop",
  "key12": "2Zz6NSAN64UnThaxfSrbTEmp19b3UtCb6sRBPnaGQt3FxkxSTY66c7B1BJZEuZh3DqoabWKs8fJxNSY2R76r5Fjm",
  "key13": "BjSrtFFRUKcYYLRn3LtwHoMCboMerQec9PBqJgRxyrJk2ofxZzg5Z9y2E8T7SWFMca491AC23gtmBBMpxEJivZL",
  "key14": "2FoEhJRRm1FC9erbumJC9NeNGmLZrDXgGXZwJWQhXpQwm46VYFA2ivdQeQhE1HsWXHP65WmW9PTgXhMKHWhCX1zM",
  "key15": "5LxDb4YuYsQY7wqkqsy2RiogYkcc6NyNEXiAPb3oZnHHa4RDaqCTc7UVwN3qJSA142qGxi3B5tsJhCv4gtkcvuPE",
  "key16": "1Gc5dxZ5VvDqgE1nuWPBdQ7WqKakMpmAakx7seiHLonKxWRZqtimTUV3aPqv757zMi4WAKjDVKUeXDpyYRi27He",
  "key17": "3WLaSwshtGqYMYLtF5qTaEa7Kn8dzzk5XGD5Z3nWJc4BCm53cjKV7mNeUruSAwWZUuh97bTrmNbqzBqurtoqGx6R",
  "key18": "wDCqKPNWrdBDqfJntopG6qKmESmSm1TC17a2wRKFqGDefZ1JGWGva9p8n6WKMuBcwwHT1vVymaXgFWLeT4qnksu",
  "key19": "3A3x53YeHdtYUZDWyre6pucs1V3kcTPu9SgoWQ1tZH2M8QBv5nw5z3gLL8rrfMsJg5DhDoTgLJeRiYuCJTW2uBHC",
  "key20": "ZFTSbpRJEtApvn3f9mVbPp4QPmRieCbtjaDMzT26oaZgWSBrDaUVnxHwr7d6nz5LYLUtiV6Bdy6banErGwBgtyZ",
  "key21": "2XvDspvwJBNMeAMHKMYYPo1w9fD1HYEgAzeGrqXj6DxfNhRPHD356De8mMip6ksgYnRcwZ9a2dgAnuDTTSsSsury",
  "key22": "2cDnLKReHsy2qECE9jLJtRPLiSTGwSeZLvAc3y2Mb5TPTvhiT7BJiS3scqcKMQnLjih4Ce1nTcdcSp3nQNEwRYbM",
  "key23": "56gFrxv2ukXAzsPzwSj86y3Tes9fzSvbJrEAwzbkPH6MX3CrGRiPSM8kvrFpQJhSW4JRxko4uKsb8ULsUANh7Lkf",
  "key24": "4RjcJnJZvJBjWoT8ueAoSwv5izf5P22G7tjwBQ7E75gDeRZgfKfcBoyDdLF3QJ1C21kVvuozAurWXJAUrYbM7znX",
  "key25": "651DVLwPiZo7AKqYyHyVFV8e436vyMW2JM6dB2b7pCV8nidiXwq25mUyd4Fdy5kEeLTDaNFxDjhuRAjgdUbP8GiP"
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
