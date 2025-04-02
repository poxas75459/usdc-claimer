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
    "YQphc1LYjRwNbEmLkh3HGS6br5qiV4nuzaTVFYR6uCQ2vipnRPoDiRqNaci3VdR2hhCSQLAqYfZVszKJTRVSdsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ADMMYKy1yseRDNKJpamEAod8s5zrcCfzsddeTQ2tctH2m8ZyNugJQ4TLiVCzenAKHwsab9M2zL9cm7kdaFrw9rE",
  "key1": "3CMGLvTo1Qb1jghkCANTgKcuKZavW4SpCosFYHqa2r6SQJGeRHrXs3rHTktV93mQ5zhfr1j1V926cEzK81fUDaNj",
  "key2": "4H8fTimkn9sxvfQEXdUmb1bepKPrivJqauXN715Vv9H4H4YKmqjk3bSdMJAYS5AzNi91Dev78yUuAc3KW6rjsQN5",
  "key3": "2mRYeikfRr1DZAg9YrR7BhLBeptLxB2o55pVN7Vp35D5G7gHtGTnBFheQA4S9T2LuUfNJNpFx3E6uDTcsmXAhwQp",
  "key4": "34PBhdAhLULHspLDYAKepbxnN6GTu3ZDynFCzfcZHQmNQxHn1FqmcgTsWSVWgHB6MyZuyYWwDRrVhTQM3y3xKmG2",
  "key5": "4YFyA2CpnYLvTbT7tFRik2i6v9tKtxhqDGG6BboxEQy1wEMavnEfh4fz8W3bKCLz2N4Dv6pPkb1TdEZWzNyn1hG7",
  "key6": "5h51U3pmwpdf1TV6ouWxufzNpSHkeT6GA8TFQEXuVWWfjcNDKkSYcgBK8QBpD4m4RvbVCivkdxMm39mQou3fWhnY",
  "key7": "2e7gqqevWcmM7ck1JMTka9YWKrcAVTtJHEW3PAY6c5N8SgT2moD8gcb1X7sxPzXWEsSBj6V75eoyQnXmdL5ZPwzY",
  "key8": "5n2m26wJeQsUU4tRfYQy29W4Lh2RVF3FQHb4sjXRZfxMy6BzRmDR8LjmZJrMPyMUGtQjc2xNkmRT9ycKeAE2fVnb",
  "key9": "4qwYxerK7Mmo9fdbcAYX74EFxHVMzH5sxretqthU6zCRFAjnka97XWJ5B7iFE3EwYFygEYD6jUgrcuB2cpMcjZxw",
  "key10": "BPE6cTmTLz51qXGpaCeMALVf3B7fk6w121Ch5XyrLeQSTuM8MsCEvSA9ZNyi56RSRHALRFZ9TGtCTUXr7JMoHYH",
  "key11": "24dQEJdkEwfwnaUt8duJgCiXDnJ6U8DcjQAmHuRndGwE1fcLtuPLUq1XvBMjadn1tRb9B1mHqGAFAy4eoMPAhQr2",
  "key12": "V6BS51EfpDB1hKPJfpDcx2xEHg5EwrK3i8ikdRjtdYSGMPMqWCoWffD5AQTyLmjJHaBr1XucNDQGjQCwc3cF5nb",
  "key13": "2zi7cicvAjcmqtbD5jkw3Nfp95J99UirJdXXJLgV9JKdXCrWqCRQCg9zYUw55UZ7dHkpcE9VLuXnB97Q5E3DJM6t",
  "key14": "4WbxoU5ByuuxLrGWBSQjkR7ZWtitkZVvntTqiiY5PUqrHeqPEc7vJheqwRJ2QDZvuu2oRTYPn3UJNt5AQtoWZ8B3",
  "key15": "5AoftYgf14EPSvj2r34t99sc67YxposRFYq8PVcXHR8ZvykMxJWPjp2QLPL93uQTT4Web8Q1qu4fNtFTvz1wC3GW",
  "key16": "35PxmRak2558bz6UwEMuYhdraKTiCQNpubLaJBHYRcnyG7SvJPT13yALMmY8i3VyhVhY7a2hiwZf4ZLV65dKxZEL",
  "key17": "3ktcJJBezfMTpHamSn4jAeuA4XB7hpGGktivnUENBGRkhFN6TFHaTu8BSTpzzHDuCw4oCEu2ULx8pZreLR9gWWgE",
  "key18": "PHceDNNCfLxZXJmN4tSDvZVqxYJS8PxY318FyeNgKKBPr1D2kTSyQ7Besb549hw2BSriQq3zwaKBiFd1xzFrNbA",
  "key19": "25SBBfo2oWF2XXr9uW3uEBHpEpRppWdViR1NoFZKDGfGmgKtN1DkoXgGvzhAHZNpMQ4Wib7NH7XepTfMyQcof4Er",
  "key20": "57mPAHM712qUa34YwxnhfhZfuhFdJ39XGUB6ZDvgvk2QZ43TbNdEvvKsUEykt1xPz94PUVecCCrnxtoTSaphdRTF",
  "key21": "4v2gMfxteNfgFvC5QnuHQVE4HLswYkZZUZMAp4TfWf9wVSubjTp3kxhnJ7YHNKbViseGjPfx5pbJ1NCrUh9EuwqZ",
  "key22": "2DfgJSjbVwFF4bP93CDcsAuneGRYqSEKP2D1zbucJ1z2LqnehYhTH8CXL8wr3KQUzeDP8WWjQp5J3oN8777w1WQx",
  "key23": "zWbWQYTyzV51ZKxs5mK1QcykhitfDqtQWqvxvbgN71RwUie6dCdAetQ1swsBhbh7fiBJ8iBz3JPRo1Dw4fQxerx",
  "key24": "23PEboSuTQqZRWA7xZZnjHigvk6p1Ajx8ZzcHupATntmDJxRBTs9u3iQLM6hQX7QPp1Eh69EHq6tzjXykCEDtpmn",
  "key25": "2xUN5TbTcadPmF51kVFZZxFoZhV85Y7SsJx7DRJ3sZAZfcYEuLsPEsQNmLWvTjiD8vEJQTH8UvQ6PQch2skc4uBH",
  "key26": "LEb37uNEcVsRJ3z7jwMFsBdMcYAoKtToQ9mtVcE4F24kMvCtEpp1nwxTANVPfULHb8YUHeFzqXaopZiHRRXRxFk",
  "key27": "34NT6h59CQAH91ENHmRBsE1yUd7FeZrs8NcQMTZeSXiep1YrxuwNou59qzrN4kyMQMvF1F3sLvVMiT9atZt66z9J",
  "key28": "4d8sSpGMwerakWLciV6DMJ1ymAFUsje4Ntuk5Ko6hoNRHt6AikU3gpTfKbmjemjKEFYcCRMgz2f3W4fmhacaGGdT",
  "key29": "5dTHCieN9867b1rypDnzU3DSqGUw7gYeHAXRSt7W1F1dj5kaXmf5QQNpa1rgYvJ2kcYGnXJi6xDzsxa3xvqgs3f7",
  "key30": "6EuSy7CD35XQcmHKu7kiXmiynQTzRwKAvQbrRhU44kY3jk9xeUAtRW8kHpNLbKLCW856NSM7wMVfD9tkDVTeTPs",
  "key31": "3jBEnwFCvgPuwsbgCmG2BfmDFLtx7dhRErgpznoBL3Cs9xdrsjcR4mQhbf3cqm3tainwAKm2zDHb8344ViPxAWF5",
  "key32": "3FzxBbZC4awFeKirTrKYZViugyJvsjfHf2ymnWveR8Tx7fPrmEumfHD4Qbc2h5FJ468VdXq1jazkGYnMfu3tHQqc",
  "key33": "mtNnxAhjQiWzoqJRvSWvepW62aATf9xeq26bNSbb6UHML8DxtpRmBwiJsQoFs4EoScPo44MBRn5gWy6ytVuUhy8"
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
