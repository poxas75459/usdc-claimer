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
    "4CoYJoxDLpcPtACuv8rBM31WDqXTurHY4g7szwZ8veHgNn1XVh6fPaoR9g5ZPe1KqMkkYWdVp7cgPaHCnu9ZY6BU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LY4pnij33KQFv84astxqyQ4F84iSyqBMm3rgxRurGFdv4a5aZAQ9PRdAzuj3oEbWTuSp6TadQsLCn86kyRqhgcF",
  "key1": "24TxZvyv6aqRc66hG2EYDUz1EKzhyNpPAxiuKAvacpGKGsARQXYryKVpiaDtvWEJeGPpbxHokd2o76nopuDdQqKw",
  "key2": "5LvueZFn2S1TiSNbK2kJdxrVPkfJcF9bcVijZgdcVBySTYuJd26DV3v1K22sjsmYB5SBgVAUaEf79wxdkrzKiUh9",
  "key3": "LDs9X44JzACHstoiwAJyS3yHsWP3FNgT8ArhnrtXv8Ka2FPqVfzHrELHNQHxuLZq8u2hMnYNP1J1qatJzxSE9Ju",
  "key4": "66TfPM89Kbczt1p8SZEd8iYmS58VtZ4wbfzKwAuPDgENkzVHJjE8r22v8eQvTVhxcviRmY9P9eSqxbhX2W4Q8jPD",
  "key5": "3oLhB7ixQzeAQddVyMwizWPfJpn2BV9a2xfGhf64bjQLe799bHKafrQDUTHrRtLXtypKVpzbmHdZEPbX9NKjGCvX",
  "key6": "5TJppAY4hm7ZAoXPyH3hgLTuDvmaa2qQ9T1djyV2kKvW7jhduCKBU2EkqzjVmGZ3HAn9mKXrubpPsMireXP4g1hH",
  "key7": "j6wZwKyauqTr46zSgyyFNon3SUiTxXPJbRnc652eBPFjr58D5B4HAMyFMKY1hVcrS6rFiHejzk2jukdjt5QkJv7",
  "key8": "4ePSQdYgobRXfe6reUNjNBZun7owgdbaYSwvy7hT7fVznt77eWmVzc381Zdsq4piREJ6PR6DLSUHhYYNVgj1MyHe",
  "key9": "5tyJMBg11NBa4aN6uQFZJQcQu31TNkEFd8La1aULatQgvmGvnJ4ePEGVhBVPJABg9EJXWkfg9K9WbxYwKEQBZqbn",
  "key10": "3cCAG5kkWUAK3JK5dacqoojbnXskngmemjKkfeCsFjLT112g6MULaBL9uw643t9Hj9iwFkHaPD4PhGXBESLhVeBD",
  "key11": "2XmpFGNE2jgPHvQBiqfuYAKA9CFdbT6jwW3ncMJgwsmdtyXNprSeZMcGBcNBzBBGmVu6vPy6mC99fTWBCgwS7uFm",
  "key12": "hvijV8cvWkvf3zc3x2N3wdCcf1zbYHbzJmhUVwMgqJ2ty8SWVDhXWLKpekLLjMXT2j1i2q81RmiVCJX7vSuskqq",
  "key13": "mo14mmVTXWqvmqyuy4VGAyHXLp3wB6PooXCAny6JVjXZHXPKnb6GeNe1p1w4EdUynzr8GreTQMdpehmF7ep1x5p",
  "key14": "5tzkUs5dotuPPqkg3xjX1bSY9ttwV4dVQuTDfXczaaqVBckarEsazZKMEuwZzz8V3uxk3V9H1bY4psLpFtfjNL3W",
  "key15": "BDdSqMCCoDRiMA2aSdHWbcFiPmjYXsSrZfQ59itPdVKgX3YfNgeAbEXuUeYPFZNpEqzdWA7X9m8gpSH2HpNmMJ2",
  "key16": "3Fgay8xK3kfVjk9AeXtU5Qikw4wrpEa7FhVTY3ySxKnRW7NK95B9zUbcPFWWkdbQ4S46grHXwsH1aJznA9VnkRDb",
  "key17": "2Hv3ZC91MLtc34pdUri4yzDDMUybqU3i3wTFLrwnNMwMYCJoTcH2bB82mLAKLg3PhP1tELWCTTxYuUfGXZGPXoTD",
  "key18": "21Jv8Zm6hfYedwdeYkWFtgzLyExP78HK4f7h6X3J8aprvEeWR9ryrYynKputwEy8Aynb2wdgp4mJWkzP47U8waqX",
  "key19": "9JDCLBsHTAh41ZKvwbA9P5bBrxoGnHjfFm8GsHHr1PYjr5paFr1BKQL95kV1XEcrm9hu2Ssdu5nzbXgND8kusZ8",
  "key20": "35c5zk9JarPnDouEQDRwtPiGrsLuvLGZjuEWvuEbz1SZaLjkfaxLp2ELzUsk9YF1HKaJGcskjurnA1KqKE2Jc46Z",
  "key21": "4jjYydKoA8okLeC1UD7GTjxo1ziYgos6UecApvMi8pHUhpxQEkhZisMxekA5PWZghjbdrxxKpMKCMVqYCAsnDJQP",
  "key22": "4xVzLE3G6i9hZGSAMWwybdZE1p7qsFGeeK3ujqnuG263wcE3n3nTiiSBTzbMyNtAqPaDCawCnuj1Djbv8yYoUm5W",
  "key23": "2gDMMpY6T4YWbpBWPnPFgYKNJXd74bS3wsbJ6zH6TdWw5dCWCWhRwHVfY5cBg1TnAiZvCQ4M9B2RzzNFjtkQpHHp",
  "key24": "2NV3okvEfKzZ7HJ63NqfsBDxWBtA57f3x5Z9hEhNaDLwU48fjPQvP2aUBuhEtLffesCXThShnyffgFMJsB9fdrpQ",
  "key25": "3ADe2K99wwjnvsmHeskEBZuT3GVbkh8MCqdN5jJ63aCwFU3aTFKafPm6NhbJkq7t9ULvHXgGqpqRKjtUJntYGMgz",
  "key26": "3sfzj7ULFnWyPC6CYH3YYpcnGi1iEpMtMMYNPQ13hFzAstoRv5JpH6iyr7r2MFa8k3MjV8p2b8Xffwbo5RtyQoVo",
  "key27": "5iALr9CmdWhmNKwyCAYCuc91XdWph6D8Mi4aBmz7Jv1kkWq5LREttUsCeuPCCeub2DkQbWfESDpBRBihfCY9naQS",
  "key28": "XxGtyFPV5VtiwWZwUJmDFtPvMNpq4GK11epDy23HHbimLkpbzw4WgHTHYBwnWeyX1S9UJfPKvBSpBY7vFLUorSw",
  "key29": "3H8HMgwkEJckvUakuid6bgT4vGc2i3aWAdLUS3X9DarkSaAer6RJjHCqU6gg7AjLXYL1jcwPSRYV9i6Zd4yktuDM",
  "key30": "4ebau76tX81CM2pPfTve1Ynp2k6jV61vVRu4DFWnVKWwJdFktE9oijjoPj1XxSV6SLKqPaPYjn34HTeLTRoteDT2",
  "key31": "67i6tD91skh2i1XKBP94VWGfpWyXiqcn68PxJrJAc419qqhjmrsH32swHry9nJiXisQfpygfkt55yy7zRJQac355",
  "key32": "5J2tM1Vo6aVrraJBSStiNXoR9yViBuApr6MCzRVo1z2aRuHomz541ggNe3tUCH3fUdeg1cBXGhAGxKaHb9h1pFQ"
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
