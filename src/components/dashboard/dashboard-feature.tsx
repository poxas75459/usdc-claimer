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
    "25TZbUQ2yab7AQa6VvCh7jabbe8BQY73vs8e7ECfbWo17nEw2bUWf2GvkM6h7bGh3g9WFmwLxWVQiaCNwF1scd8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZcrUgPBVLJmpAnBdy7B3niqwUU1YpF4pGQGdAYnBQusVYodkH7e5KRXWTi4CQuAGD82aeP53BCw6L3Ri3bzzj7",
  "key1": "3jxWBRCnuCeJqC4HohCt9sWaQjZvzREBwPM8Df67qQVvvT715ffG17SmhJEuSu8kEyvG5FYpzgPzvEXzqVWczS41",
  "key2": "3VUV8WmairPxifq2dv6f5HCSeDQcDwVx892SWuBNfXkMxbhtmRi3PL6MyDhoFugBqC9efp7P47TgtYUZNHoR6S34",
  "key3": "4AWLqqLihoPrn3sxg5RnNPA43EPTJjRGRnc5A5vrp5CjBeL217R4SEct2Vav4QCCFQJmd9F1ibZfFmYaFLrzzkwN",
  "key4": "jPBzs9ZReB2NFPxyT8pwDXUuuHhmhjR9kCkrJkd2jaXtF5aJhcybLCczxCj5fBDbCLQ1MWW7knHotdF7vdKYmv9",
  "key5": "4nArxPge7zeQUMV4TRpgNa4XYm4GYQNPpGWBRfN9rzPPeyk8oscVQZQ3Zo9ZjfhHUrNpJ8XFnMrLGuQfjytf3saa",
  "key6": "3rU8RH5DLWQaEzTAs3UHppeCBC9BEUUExh4Ea5sLQRxi5kQbPDyu5xdRuUCkPtdTRC7HpNCyRnFc8TiwWQKaPrH7",
  "key7": "5c8rAf59uqyZMMHzrFqZexN7h4U2X5x4aZZ4PKgY3aBbVQaYB4kUu2ujnDvnee8LxUwvExPeS6rwLKNddeqF2z2S",
  "key8": "5WDW3bLVRjRjKsQopudS6CiJ6mhnnnR1zScmCqW8yTyu1ivBuSRrbREr9bzAycRqwwn3rUMo5rA4zYcp49tP5bZ8",
  "key9": "2fHBBMtCMMG6krSuNbVGoSrq1zMy41oWHy1LMo8fhq6odyfgyZs5S4gf5XL9sxDrpLibKZH9uUUqdsMFaAecEtRG",
  "key10": "zCWWyhFUNrmzjKr9b6Qi1wVf2z873SEPAJpoUDUTWpnWGhk6C4emnrnKmir1PeAemBpuYtJN3y26UeFg5MLCqjL",
  "key11": "5wdJUHzBQTXDtqVfy9v5KS3s7jt3mZ4Wo2TmgGhSZLEvPnMaXseWgjAD2GDLVm4kuodLxR17JHxwMmdA9G7ekNDc",
  "key12": "5prw3bCTXjy2jrJrstDYcTnuSYG1LBTWieKZKQ8DAUdMThS7rQVFsBRschrmXGXsL74Ny4PWb3DEsfzzX31vWqEB",
  "key13": "mLDn7mLFMAycTK5yoGf3YdsJs21wotKoCuiDZHptGVdV5VQvTrCQ4UUkBshxC3ZuCzj3YZjhK1bWs8CirdgUZ5y",
  "key14": "2xJsfXA8qyeMxCPeKYQZfbBxhW7HAiem1Fyh8WSySfTu8YJntCJRmg2XkbnYLvkPAv9z991NF9VfUYRPqP38N9pc",
  "key15": "5fWsxbxPLsjJKE3mhXw7qPMnPy6wwrX4QM928LG2u5ybifiY2MFCzq2nULPQBqgFhNGnuWzer1L8Q48wWJk4KULA",
  "key16": "wqSerbLUsSfeBfTKwWzWYfLMCLb1Wby7Ns1rqkE5BJSmAj4uGDuiopi8zzyTVWxx5vETtuFHZLwTL6mARSKafZR",
  "key17": "4DRr8fUbcrMJDEThtUgd6wE9FUXEfBQip9ANgdL6AuafuW6REQfjgSWL8hyTQhdfqwFBv2gPrmEy9j6Q29eJLtYH",
  "key18": "2LQN8GB5m5qAvZ8JpUHk9ttYKUeXSGSYGF5VkpSiGQ4fNUhqEiYkJ9UQpiAySthoLHiuQ6JP8WdfKNSQs1TDar1F",
  "key19": "5DoEXQCsu7Qti5qBdQBtD351E3LLt5ZQkrcj4cjJuGLWjPZdW6tR5oTi8ttLwpWE1YKHYDED19d9hrtjGmyagwMA",
  "key20": "4tvU7sEhbEZkGFgj5BTA35Jd1fiAeM56i63vM8rAxVhcjJP9cYfn3uwvb8iyspXTA7ZHNAjLgeRm4NprDoan86jF",
  "key21": "2iRFpF5cYdfWf52bHPVeJvjo6c6HrHYbbS9wYn71WUJNUz7tpoofaEy4vA2EKyokSH35vh8VTBafHsj19SUeQbtX",
  "key22": "3KHVt24fNoAdmPSxRqrGvfkgRdSb6WkJ6bUpUAVWr913JpguSFM2eDwWTBkEzYRtsBBZmAK9YESXQYuS4DKNqioc",
  "key23": "2jMM5aPs5UswCjPAeiXghXBGXpBN796FyFLiaPfoFPEE6ToCTyaMbpLVX6PEYNt5KrAA1vjfUUjaXVuu1VRTuq3h",
  "key24": "38ATGTUgPfWiaBPcjQxfskBfzQ4aiQfi32Z6xBMAXvx2LuG3tRCxTtJLUt3mMWB6Jr5PUsHHwRznkjAMW9aHb6wd",
  "key25": "4AFc4mdKct1nx72BPGJnyhRfJwGSbcFrQKSKVmxT6sU3Ds854SmGvCCEzhhxAMydUXAtLvq1fRkTXQaCCmphR1j8"
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
