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
    "3zMKhhnbwNkHArhYskLTxdM3FbnJRKxURqnSZdsaG1YDzkBdiBLjp5vf3zhazsgvLb65HCv8zRwZhpTWjMU61sQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W9FnXXnFfkJBNgF4S5zEPdD1i5XygVJfBZdzHwKnmBgWQsCDG75jrMeN9W2yUBsjueMhShMqgP8tVNxcYFabuTT",
  "key1": "4QF5AiYz7Pidq9LKKGmV7vVfCg1zo1LStYpDn3YbaRGL5Ky45wVFswrjMNVKoEtPVktFEdaDFjeT4TZPr6tSjYH",
  "key2": "58KaNMmuNmwACjVvELF9RSg2mpodMrDv4FkYYjap4ZWezw3RA4gSLQVEk119LVLNZui7Da7CXtP6XjDh55Jwdx19",
  "key3": "2d1AqMohrkQ6nSniWburgyZwHgmKuFDeUQdjtegpbJV8tmGsUbnoSjii4jrSiZUbjpDQQ43RhyBZtiG1ka4DybaB",
  "key4": "2x6aMyJXstC4wrx8t5U4xkhG9WESTRqQsRQB4xxzmEyLnmjm3FdBjJoCjGgAb2sh8FhY82uKmZcp6chnkEZPJZxf",
  "key5": "iwuXsheBHPRwmt9jbJFDeQib3C5Xm41VUicpKGGfivzbDxBZPfuQtcEjgng6PYrGwUrHysnHnzYumJrX36Au53T",
  "key6": "2UiCoZskBS99QdyAG2oVeMGv6jfuGZvRsFK6EPoPC7YwbKYEV7m3KXp95ihLmt8cPLSajfzzvg7MztJTBQNtb2t3",
  "key7": "4QURZeKXYHeoLgnVtocffwZEy7r2AXSyCJSGFwTtBtYgJ9j9ZRdv2vpFtLhtkyvvJ7jFq323JEVbJJccsfLHvCCN",
  "key8": "5qV3oP1fExZqiKfkYCm7cvFP9wPfywz2zCz2s8nto7kw6ZyHRjnJkFYViDcx6FmDjDSS9qfmH5fkBT5ZWPQmfXCz",
  "key9": "2nSv5SpD4JDE83eCW6Goqi3bbA2cBMaKhHiTESETgCn5U5ywjjwhxCQ9ARKYYpsGwEzM28sLfcHzUwUsze7YKxwg",
  "key10": "2LNiXbVy8w3aUyy6qjsNSrftGnxyu1cd1MGG3vYqzFdjMUSiNPt4NG1ANobPJ7rpeTsZpvv8rsZyVr6YtNZXEGgf",
  "key11": "24n8BvC6VHD41PbP7A2yGUWwT4BCL7Jn2Z7E73uUcaTyoFzQZHLex79Yskcm6tSyaJsuwy5nVvt28FCBvs3iuXu1",
  "key12": "2quMZ95PpGb1Pt9f3f6EgaLDc1nvKsSSWoqRZMJ5ZtZ55pEsU121RFn9eUqNTmrxVYF7qasUBBpjevmrtjZQinUn",
  "key13": "5YMEfLgjBCB1GzsxfoHE3FkKzNGXZ2hnZbdcPqAgh6y5mUhuceV9R93E2erUU6P7bRFpjoQta7GdVsTMgUALBhHy",
  "key14": "42BLhgMtptDc6wVUTDSMofYMCXG8VPAAB3bmS9zZqxXhB8kPJTKFxoac9AyNBmF4BMWZHhZNvg2GYTV5wXGQZ5Xh",
  "key15": "4cJEPQ6a1u959t2PsuU5vhZwwLPyvnQWETci5bkTProh8b7vUeyz9EfnUraicgjWCsK5CMuGVwM8PSkrmMFYhgPM",
  "key16": "5kL7kYBq9Ut6F6LBFS8rVaGzupa5m8YkabEiSpjiNn41YxGZjngwEpJugKiGZd75acFGgg4owzM6NzyiLGcDmKrM",
  "key17": "YK3qXyMvhb86otfuyjHBgVVf5mB2CAsqucYGew9x7SeJWAzbSdpHyUDRA2qZkQ62mw6xH2PwK3GDX91Rp3BYQzT",
  "key18": "45hefHWFakg53TvNxo9jMWQX9Cuu7LtWLho3jTSWQmLqf5vhEk4zK5vccSchWhVGYZ2RugTrKbWnXMcQdvMoBMK6",
  "key19": "55ZmNrRxyZwKmFi3zw4Jdgb7rBbmyvkjxg87HeY6mK11U5nuZKbvxEXHdChs77bNVzqYtQf593q1L4CF8SdUXXis",
  "key20": "2QU78zVPcJDBBZntMAhEmxFDtZ9MU5BZH2GdsmJHDLXw4qnyx1SyCwqbum6FWH7HZ1ugNuszAgXVDM6LpLqjL1tJ",
  "key21": "4qzDFNjaR51kQtPJLnHtxxkbQHgCWgyaGn5RAYYm2BQed4kTX5SQLn2dqZGQtZw6oAkypFDgra8qT7XtZvUDTnuo",
  "key22": "585WBBzmXM79z7fRVefp2TFY1UaGJCV3JJoApo2UXMT4a9T91Zwc6CvKmtMsSGjsN8fw4of1XbQRZCHDvAnEkRyi",
  "key23": "581ep7YsA4kGH768wfTfB2hbXyCcLbtMQqMfWnq2H1X4VepWGtJ59YeySqbgNg9TciY7tHRe5ufNkMH8yYMuLVLd",
  "key24": "3nSP5SokuUShcAVRZkVWnN32tXS3U2sfkdvxPy1A58qk3XeBrx5sEseQno9ywFpymJPLLx5VsXM9u2GP39vyeDJA",
  "key25": "3WeyNJAQBE6jEoqAvn7TDzDCaPHeKhiZSf74HDYDhHcHjAH82bTyg99TqYkaUsUKxgZB2wH4rqFya2MwRPW29pdL",
  "key26": "4DcQtMTrFa6RCKpdVJuqWNqxFgS3Yan2m7FA9ejJtcAoJk5PtfaKxZjXd2BqNvKzujDYsbiRmtaBdQHnTAUznWbA",
  "key27": "5PWREBfGBD2xJXLF9u4TPKcUSF7xaLhCGmVEqkDu38g6kdmxzQeEttsxL6TM4EvCRCoCyVQmE4offkmGjLPP4GBU",
  "key28": "5UA8Q1GHdK5xFgLSX22bHVGCFLHkzhdKJ64szDfrJ4f5ZpNcZJg9y6FuZknibas2EvbrVYBSQ118VZQ6EBX5LLnX",
  "key29": "HBVz3Jo97mXTTUaP3NRB4jVYfgtGrQcvzntu9R4Q92TCgYmYyeLJpccRGmnmHaPzJXLspKNtM5PX7EJtQT61yfv",
  "key30": "472ysaoRJxK6c3HZAcdfSCTLASLPsDEXasFzW2Y9rtfR8jRq64Fm8dNMEhYBt4fyF35pFv5tpyXebNe46B2ZaGPJ",
  "key31": "XFFbT8v8BfQKAkigzuxVSSDJE7odrpTb89S7TvjtChUWgrUV6ZTAtr9ekUmqARPbaxiehxrdZtBayV75PJuN2aH",
  "key32": "4BmPPGuyU91WcYxzEr9WH6js4C88E3KTp4MkHThkQsMwv4UvqWFA5YATjvxtC566JjAT6V4VykcsLqJUjHx3XfWN",
  "key33": "4aiSMUbb6XYX4FTNxrGcHycJF5itktD6XwrStcsiwFSXPJqPrFKmiGco9jC1rBLvSVGeUV7wZdjbQcKFqCyDN1hg",
  "key34": "3Qp8nc3cgwLUVULC2PfWd88uUDM6rgWBut4RujNPfhJ5zagieJCcBrieNDoZmPUmo81J5JGecrhTXDAouodTpG1j"
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
