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
    "4MivJcx84iy3Y4imjWGhn4UKZwpv9R6cqMXBpRzBzhmdSncA1UFbvH8Ncwj2jd3sCdYukEEmATZqUDXjYDBCap39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpHcG9zucHTYfZAH3tzVhKTXwpUjbi8hCNc45PKXcXcP9kAtmv7QLwhwmNZkCCeoWrbqsy2rJ9kSg4EXNxxCRU3",
  "key1": "3EthqPpT68HM3mUtPkFsNBNnZxZmAstafZDwNfHVGWLQ3cW3bKReaDQbEnHsXr7c31tj5syf25sEuvMb1GahrCgq",
  "key2": "5emQrzUfhSMmWzcRFBCGXaobqNoPoARkRLUaKA6cc6yrLazzbC9Xv5RFJwYe4N869WSvdA763P3pkhZMAN57KyMu",
  "key3": "5WwKFywj4C3c6idGU83icyUFnzjJzp9wAiEJBddspSXYtwXrzbDs4SSGyzUN7uSUkGSyJedcXmyk2wLfstHGTDK2",
  "key4": "2meMtG5waugK4T8hzrkhHDTL88AMwJsAXy6FJKbtQFztYQutyDMxYnyoz2Z4cpSN5XysRHyMuj1e7JdEE6n339Ww",
  "key5": "3mHB3QUNjoXFB689bVuBhby37Ag5vc2LnPVHUC7HogMVk8UdfZtsi9jJEu2adoXmwRwezX8EwdiyAmdV4ogjwAgM",
  "key6": "2AgK12CbqRnoia5dihG4aKU2R4gNv1ofssPGgdT9d4KwGUVDt3WRQgabwcdKNyUaJwyz2Uzrk19RQopaH952btGv",
  "key7": "FQkRGCxzpZHGZ9fuPFRSQXtAXnhqxbisjRmoX6Z2gcxtnosFFVFoNH2AMMByTUg1hcY2noE5AMBNwSDjHxbqx6j",
  "key8": "3cH2KTbVQ8qKV62TQVM9rgdoQhp3hshX3yepoDkY5bFkJiesHFY4jRZjnyikXCZjCLhTnEhx1mm5CgfXg12JdDti",
  "key9": "Hxs9kRcjxkG9nNhFfgxgb9tcdkBthKCWqusR1SuEDVNtbcxYiEWhvhrWUCBdrKvJuAG3ho6oh3o6cxwUWWZJmyM",
  "key10": "ej93CAoL8sZbrqdd2bToB3n9UywWvhq6uepPZvhNmAy5QeQ4CquRoP7BrTzjTzXsdxiCB2sAkaLohbjrctKVg6u",
  "key11": "5JSABMFMNDCvknP42XAtLKWLCKy2TVsW5WkSaLS2kybhrfVvo7EYqZEWTBzfumNeMp7rwMjiePHu4ojYSQpDKEwk",
  "key12": "HZtay6usXp1PePetLc4XbPaiPsuvV1GHoyfQSRzYetwnWD2sVcz5Uf9YyYmSQh9puyxhzz2iA9EfcvvrnVwRMvp",
  "key13": "5EZ7frpuXYB6niTo4BcxoErRQPHR7TUp4nGVviagiCmJSZt6TzsozwcTTyhgCpcAv1Wk4WTvBgSvVSHTRpmLiMne",
  "key14": "Xxk6hWTPdicLB5ocyq8qHqTmgDbwjBkaZgoZdmFd2ER3KYxDsKEtFn293dnKqa1HKmzHh56bEjBeapT4ziCFCcw",
  "key15": "3okaL9gmDuQykHdNHF8Dc3hCvGfMCndpRiifxwoUv9sSZeeHgAtKtZYLPXr8X91R7CkZEXjHPg2L6kay1X9UUZ4M",
  "key16": "2R5DzT4ueYX9Z3RqYPcNm67jDvHK7kB1QqDoybLqUSRzHwEvg1UBW4BvodwvEzPXZ6J5y7rEToUCXJQC5CwLn6jS",
  "key17": "2icPeKz47qNPBqDW1q5uDwsTvE6vY9W7UYvVnPodgJgYR5SZE32t46HZpDDXz56Sx5h7SWKyzyoUD2DtMQcVdXb4",
  "key18": "ARpqsBt4kdw1g7Ng6wCGf88eTXuxyYmzoHhTvEzxAc5rwhmAL1HtPSppSRV6veLKpU7g9jpDrqu3bBVbeaTA3Ja",
  "key19": "3S6UakKoqcndBYM8Ay3cCzp558XjJsMy5sZqAomntRb2N1fpdBeCL4sbniqs7MXSG3aeobUHDcsyJqmBi4aZKL4x",
  "key20": "4Vuj7nYRU76jfNhFo5JhoNbDmpFrkxY9NT2o8cn4Zi2fmb9KomTD67RXMT4oTkNckCcDdUcsew1AD1L6zxytkzWo",
  "key21": "4MRzLSqZJAMGw3cwEoAboNGejLf8C425LuA3TQNM4MeZdmijXJeV1tHjmD6Ts81viUuXdA3aR9EMw5GtAwW8QSUq",
  "key22": "5B7MFiwx9FcuuCMcUW949C48a3dHqM9PXPAxqFpEzNG2Hmg9ktpVC5Ao8wQzCRFR1eph2QJJSyQxqha7zW1eitfN",
  "key23": "3dCKW9AQTmNW6F5TP9ejyki6uh8MWPoxBV1n6Z1KHbZ7pCNpmdVeyymfVSED2QQs5kRjFHDZwTs6VBLmXSTCxpAi",
  "key24": "4JjTCzchCB9tbnu7uZ9tgf1dY6boAZoPJXrKstv5tyBM2xoUshUYEB6aaN7aQStFekvfUGDiqhnSsab8fV2qS6WB",
  "key25": "4Xyc7uWriuSw8UcUQmkfdKi84GBYyJMA5UkMgYF132CA7a5CUtQzzJH5sxiSvnh8PUBhKPodVpWcHupYtXyLCojs"
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
