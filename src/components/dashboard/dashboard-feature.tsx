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
    "5MrPUtV6M43ANHZ647eHQ8QmyaHwhu2ADUmegxoZGsadrwcqooJZQC4wdkkKiK2wzYc8qsm46T9CbWxJxWVdh6DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PC5xodvtiTtTUR52zRSacrJPq3afUHiVCmgZLsqtTJYwWshWoWevp1UhiJLUKyoyDipajG6Y7TZK5EFcbZKEhrT",
  "key1": "2DHvCKmVmWfAHjtNK97LrjYmWDXfu1CUcjvWBoNn2QmAG62P7EN3mb4LkVAMqTwAw4kJWo7TRiyXdFcnQpMJVqtV",
  "key2": "62sBEBpxgJVLnbezmSVN8sajpqr5E6c3Mo9qsxyodnDrA9xFmNSGVutqt15DsmEVP2JXzkStgwF1oay2AdpJpbtR",
  "key3": "5MoFtJeEPgZvyWqs7w3vYTR2T4qLf6ehC5h4LvGsAyQRxg59MyAqKgGBjyeZM8RgKYGtyaPgsW631XWHdxaoNXLz",
  "key4": "53gLcyZFsjLxSrkwQzhFP3nJpQAZU3TJ5kkJ4EL9nqskorx1g4fGZzpQM5xgBFgkQFozamMEpx4nTA2PiY7kSs8B",
  "key5": "5ffgUqQpwmMumkEm26NLsMx1fmucDKgbndMtqgaJY5oFp19S1ZgQmcy87mXkDTYXczZiT86kreYMKbztB6cSs6MF",
  "key6": "2jbqLnN32f6PFCP8nMQ5PrFtLkGbtMTUyniNb5ggB7Le3pYvwZEMZsoxCYyuTJRBRdj7m4KzSPUohSrQYKaqBtdd",
  "key7": "4UPMiXNneqU7qwgc8k8SY6U6gzhMtxcee8h3ua46HEbctrwUuiPMm6j6S6GYiWt9JPkEfNDjCeb2vahpgHAS2SvJ",
  "key8": "xCBcTHmHN4GHweKHR8q7dPYZBeNMc3s1P3AtzDJQwHWkqsxf8CGz7yuLfpLKbLn5ZSY4N5DkySzqz8xWo3HwjiL",
  "key9": "QXjrcUaTkj5oRwA1GRUR1TEyXkyWGXq9VfRXS4unPx9qwwB1cNnsPRYFisaR8VttDuRChVadNaf8TKrxCXEDigX",
  "key10": "4effiHi2f1aGGCo8YQjVrcNjWjoPQjU6rihm82qWYeUvLghAWoH3vgSxoGDGm14BTyoJJM4oHy6ErbYS2Cs3YQBN",
  "key11": "4pJu2VsCPy7sSdmZ42bWi6ygsyrA7jyLCguvDFP2hRL9Cr15cG6xk5hU5ocpyEKxSN6pR3zpQoB6W6z6Ctnd1MWv",
  "key12": "2jjYNjjLye55W7fYA6N6owTZ3t5qGyUSW7Kkhfwpj5FmGcnP527rjn8T1h7qc2bYAMw3hLB3U5p1Me16maMrHTZU",
  "key13": "5zYmzNbBMzP7zu2c668EAppwp2k2frBPdmE616N4msmDemSkyJAw3zVB9FQ6Lvs2nfgi15fR1NCYnhUmqfkFd612",
  "key14": "qDj4a5bjsbCb6xEMoiJaVcEQ68dE69rg4Qf6woNrhezGKqJpnUovP7f4WxJ4VTtQs8UrgGPwTRqmdMhtDTF2AB4",
  "key15": "meWuJDRUUsubQxmaAdBxwz7eyABW1jmXgjBRexUPPtirpzrKQnzJHXRP4JcXR83S5w2UrxMF5uy246NHpREYCUr",
  "key16": "wMuVVgjQtipsKRuctX5XKJvrsUVNzHKmwmm3CVkyyUASzv1kFqMddYgJjRjH7vynC7qUpxxos2GZhhuDV9vkZaF",
  "key17": "bsf2iAtdQ7DWCzsEPF4brnajs49JeNL9NphCmMcieayCZbfqXPzQ4HLHnz6gF29CUPBkpWLRo1tKPu7wahK436g",
  "key18": "5E1gGMVFLSWni3w8BS7bxjXB2UAFHTeL3mLYNEqJPSSoqkAjwcHKuFpmTZwLT7La16ppCrUhh1Lz83G5n3kS9BmE",
  "key19": "5WTkCPW9oPmBxp2Py81rg29hRBu1khZUJ1JCRMnkjD9RKpyD1hDNp5g4ToKP9fKD2HWPqnPxzNEHLvv7YSHiZ2EP",
  "key20": "3s24uEvSGYZvJ8wruHHs1MQZbg5mMotau6hzWY7J1ViSoqZEeBJ6cMdFQyiURMad9iu6yPLizjF1gFniFSxtwJRh",
  "key21": "2ozZ1HsAtAEEQBLe5TyUXUc82o36BYoZpTQ1TdFEiGV4eFFPtBNHoeCC8rYpqjUqb3g4shBCd7H7E15EVoqzkmBQ",
  "key22": "2TUbEu2ws1dxkg6f3MrrSWZbGbnTcAzA8tbsBs5vNEAMxyxZvr6Kpc8ony8sEcSr7Px4jQ5xF1Ri32TW2mosvCv4",
  "key23": "3fnqSXnMdW1uqamyzBa7rvN68pp91q37g47FGnLnYXPNhmfzZ2X7236cZHgT8Dd7zz9je3JxspFLrgTpb1tANQWE",
  "key24": "5Gw8ChDZtEbFkwL8E4EdD5mzH799i3Fp9aQsYGgPG3LqZUgEkoK67Ly9EmMxgprTMQ2x3i5uzkEZPSsT6BJzLwmU",
  "key25": "xRbxvMotdByNrDgVdTUwTmWKFuMGU6wEhXu6d75JzTSZ9fwdFvoHJWqRKic5RxpmFX5ewjdrfrENnNqKuSkpj5v",
  "key26": "rJreVsjAN9kVZnG4AoM8HDQtXazojAhSuUfhxQDVKZKLzpiCrYkKRAEkESMvhbeRvXvW1yixXbS5amruqpWbh2c",
  "key27": "44ErKKkPkLWtfVbrgtdBB7tU5ATXyjS7SnKYMTzRVPqqGNVVaGHDUJCDRk8d4onvtaZz2yY7BgoofRnHPoueQ5dc",
  "key28": "4GsJCpJGayFq65EYDvKWr8SsaSpcz53CrfoLo2K7FcLi84q5MhPRXfaBFaJuzTBQMjLKGya6Dkt5kEppyWevUWZq",
  "key29": "4XmwMX2RwpLXrnNs3dJQJiu7nrLhdwfeqwUSnivccngJvR7s1FSiVEUgBxEf73KHHA9dq2enLZxS8mtoZThcujS2",
  "key30": "8o4YBZ7Npa3ysHeQMQpnXi5fngHu5qLHpQAb1gRzqqrksXTWKrLQozkdVfTbJAfM4FbafVuQc8xWBSdsVvdBDbZ",
  "key31": "2NSwcZz767WFWGcrVUKMgz53hnmG6u23v7PUNZuPRur7AZyy63yAbzgtTCTZXELrWh7EhMyV75pVQnno6mFGFX9G",
  "key32": "4BbrZJE6oLuHi3v1pcUPUTi2mLcsfgh12HWjXXBoCV5bcNdyysPN9CJKcVmAnt86qKJcpYMKdV5dw6pui9nq9cjb"
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
