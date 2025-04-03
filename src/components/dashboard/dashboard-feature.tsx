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
    "25yoUwa54ArdMkbwA1a36MyThTNXbHUyhA868Ubr57VJQe9Jj6o8hb8TwJXGhgGR4A44taCpY8oYqiic6wPne982"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GGsmyfBJiTeUC7s2GDD2PfhwWCCz1BvrQopg2D1cN5p3R8w9Ewe58pQPTMUTCEakaaykDjKxb1HaBHmNwWRP7XE",
  "key1": "2JNygVH6zbGYQf8g6oaLFNXW1nbwTivHQ5RiBft4LEHyutu9TQUtwS4fPkjjYxHsihQXHUkBbc1rQcACdq7WtkhY",
  "key2": "3ZP3pM5WD4Lw3qNHJyoF8V4td2qLujpoeURf9YP2RGHrokrYhK7RmATfHDRcqDQthrFS5FrTUWJQzG46ffDT9jUv",
  "key3": "H6DLnUVdZg159129VTrWcwf3kmZoyz31TYgMpZkUYJFWh2277AMjYJKb7QG62S5pAcQGoQUm1AMCr3QCQatHshs",
  "key4": "24BgwMyVzLeuR6zAscmBd6duhZpnKpHcyL1ray7kg66mRCU3h4Lak9KNnxQBtjGPF97W3JyFgF7CaWMHqMgpYSPr",
  "key5": "49J46LE4gfUigiAFHUGn7tCUatUoCaa1EfEd9EJMuVTicHcoUP8Fx2JWskhWvQxAxkMP5NSZDHrNxy2jvxcuY2w7",
  "key6": "3JmdgRipxbp8bV8usFNBJmCDzUDq4MdJocyuapXtqFce8tDvy2TAQ8yyHkQwprVsqzmZ19u3Yc5YzuuHCtdhhzFs",
  "key7": "8izBZ7BCVhYqiT4yKJENEXeXgzbo7N4hdRrKJQqD1NzobGeu51iiD3aqPmmDaydqNjqvUEanFoMitZEWR8gX3FP",
  "key8": "4Cp9P4jA5eHxCdFiP135kBYLns7SHvn6s7iUjbJR8ex5TTHQXutGTQb3jNVyEnB7qpRGAG7FG5s1rccGjETs6VwU",
  "key9": "3jN8DzXQ4shFRBjWgavfdxnhNA6CWQ8GuF1ot488rcBBuSgYSGjnaVSY276rR262WkRNb2ZXGruh1RFGujKbAtMx",
  "key10": "2ffJ8tBTWvs4MfP9QtUDr9REMUFWrbsYfe88CQFkoHcWvZ6EMdSbdnMi3ZWyAP9Aj3kLLwR8zv1ayd3SXDpnjZuz",
  "key11": "3FFwTreCePuvFqL2oQcWCQwRN7g2zk4oTtBFDgjWjMpiPE8yjoV9kecUSgCK5KCGg1mhkPU2Gi2dz7C9MX1Ys4cp",
  "key12": "xsDfVGCSZJEcrQ2eFrR2M34tn81AwUpRaFkfrNeGuc2ET4FG2zVYBew9vo69MFtoLT13w6x2rrrfGoLhYMCQYB4",
  "key13": "mN97eyYWejG9WggbsqWkAoEMBafoqJSZJuHQ3qtGKhZvv5RNARwv8Di6QCEUMxqrjXZrwZrDYk6detTZs3tgaJ7",
  "key14": "TNkSpGv94AuDpxUm3zgqcuukV7DQwp83dLdh92Tx4a8dZGnhvjGcrPzr4abjZpqincWQPDJbEvY54uxnvTxM2rD",
  "key15": "5iAUtwYfyktWQ9RaSj6wT6Gq9QnkHFEAHARXXzsPnQnjhgk3Ej5cerMtLKt9nAQ63f8s1r5psh8ABdtoWRuKAJc5",
  "key16": "5ZAn65WcyMagWtzruafoRLuG68v3wM4Ke5axY9cH1JEoxYpNFrZ7FaiLFLaN5FC8ypU86Xi7rYsc91eX14hreMne",
  "key17": "4StVfD95ssQAWEzD9jXRHoDE1MTWjSUUW6TP5oNNZbSW6RSFFyVe2HtP8SdgwDnKyQfhuYH264FtWVZGNp4xCUET",
  "key18": "CDcMF6SD1MMx3FDYQmiJRndsJtX9v64z4Fe7swbb2eQT3XTWsxSMoWZ4SH5vBPJNeMiQqVycSNttzM98qxz6ZZ8",
  "key19": "4XGt8tz7CyA61XMdd1kW6GusSMv8cJrVWjtLBQd8HjzbybyDdaqWq4orWMjTypyiVyhUSJcJf9dEQzpQXZbxvNhH",
  "key20": "4AWKgF6LsJYw5w2rawGuS74v9LNjW14gq7Fou4Wo2VCiKLzX8byDBxmWhPZVAQR8T1vE8zZpZfAFx2EUwRXMkqq7",
  "key21": "63xyXkV5LASWKRaYvn6NJtFFRJe6Z1T1ehnFF3yAgaEcZH4vseeyjrhBiQp3S6MgTwZwC6mMyw5vXGVowZRohchj",
  "key22": "3MTt5MsPHZ5WTCLXiPcXdKSGEerTWfHdvRgE45JTk5uJy9WJ2875AgCs8e3DMq2W4Ha23WyEQLbP1zP3GjmqNCwY",
  "key23": "2AwUzKbLYg4oQEsbMacffZPhnSQMkMfwHo8Lm5Yws8kbs8yzkreM6GG71xA1nd2r1y4bh5itCUKJJm5Fm7V9gBWr",
  "key24": "4BxC3iFgqhjWQRydvKRGffPbnLo9k9xKooBp3owYoJuvvPaf6YcGDZrrswpf5qep89RVqpRrbGaxTfvW4Sn9JG76",
  "key25": "46qP3YhtE3eqvguPCD5QB1JSD9jGzcoZbFhpM27osyv5kyh42iT36gbMfVXjnMWtfp9JpP3CfoWZCXRvVSJqG3Jf",
  "key26": "2xWSdSL973QX8CndVcbfgtHG15BX1HA4vs1z2VPvA55uZhApg99uYaPeoKtsHQT69kVLdXFi2Q8HeCiM2Rq6r8mk",
  "key27": "4SDYT1EUxBWDTcTS7peXMCdiiLvE2RQ6T4bD3eJnzWKp7uwNhRVej1h66MA1eYdPJCdfWZQMMdmhvBFDoXTUjbBq",
  "key28": "4rADHSHJFb3CEfPELwUk3QCPqDCxaSD7UeaYZiYufJ3PyZSGbjjxQHC4xpsMbWGFd7BMp1sRAULWQMFwJkVBgEMi",
  "key29": "4HBQ2ZemaJ4aGwdKBQJkai7Lvit5cxr61HVc1gkQ96R2RF9oFuhJj7hSZbVFMS9Wai38o6eoRPsCt8pYWYydvQRA",
  "key30": "2pxWHXKpPHGQPGvu2yt9vyqv3NBPMhykFq24YNHDYXpEdf9GfhXZkYSEWkd5mZcRfRYpefC4amyT2yLyGUwX4gVA",
  "key31": "pmR393NpPYJs9HU5DiZEk4EpFcpKfD1iAQqB8LcLybGoePy6YgKtQTwbU8iJwVBASC7kZB3YvzUnHw5zArwab1t",
  "key32": "2LQH5DUF9uzEqCN2Ldjf5ATrwGvSJZphMPSsmjRpKzM61JrRPyXMTyx44vnmNr6scjxxFeXYL6tYjDvdGRwmKUPV",
  "key33": "3pDKSpF4gzGXeLnUNP6GWuSVQyopnhaw2feKS35Y4TJs2UuiZFEr96RmaEcHqZzPSDynDb9MxD6qgnifbyoFRgGF",
  "key34": "5Kz8gWfCWpRNDXu6UbHn8bEANmgzCZ4PJLbVbu6vCVqkCmGjd2DqqcBBVb3o4FxHTPDvBfaciVmXGTEZc6vss1a5",
  "key35": "5b8mqppHrrxVo9izA9fv1fhizqrFYbYbhv7z9gA7xDfttpULRMBoUeoNihqtvyAr7vFyshCPPopEa1AvXHJowRZx"
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
