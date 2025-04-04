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
    "3HphGiXUB56ziRK5VVE71JJpPKJvopTPPXL2fpjxSNWcV7DN3drg7CE5gMPpJdV7eSdbVuD9JcvojqfkuMmmgmoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hT5eU2Sm2esciGYCAEjDYy3uK3n6MNArGjrWKXUbSPG165bEazFsSskcf2Q8r6jaNnkAofWc68yYHsqAeXQMxjo",
  "key1": "3iLgFfRuHYA7DmLuRw1GQX4GG8MNcez5kyAqjvRGFSs7aXn9Cn7ai4HUEfu39sYAgpn9f12XQikpi9Fh5LfCnfqx",
  "key2": "55FkAhM12jSRRpDZowWH3RjNUqcfKqBDUC29Wmp6kP5NpThXfKNN9qcCu313sofj4WxS5uew21iPzYhzK6ChSH77",
  "key3": "yJEZTBCRacoTXXzCFyEy3Y1o4cEA6Rt7aWVH26znn3C3Vd8jTJtnnTWGPH1h8XZtuvjViBTXq9AnurQ7yaMFCnz",
  "key4": "3BeSB8MBT4swoRqEW93rHnrv1qXWifPW71Hh4rtXXp7ZMVAcYivgMsqyPzD4cmbRoGditX9HJnsd97UU8gZCga8w",
  "key5": "4SNiV4SPRwUWxYp3P7wVvdCqvR79WJpFaMLweDbSCWaxTEWdvyp8tauwUs1wSSY5ozzhSPX1vb5fsYBNgnTX4LkJ",
  "key6": "2xxBBopGETqSRx79gfyyDskEXtEUc5q1vgTUABT5xGBZBECjGjQnScBYC9g4fJiVkxALFwoix6xb6GrgWQZG613h",
  "key7": "2hf5UXoiSBi3UGbosadYeiEJ3dGNZ3YwVaHzq2kky5Ruc5TudLW31748n9sAkKjA4HbkJQ1otvvUDyqL1HYL18pf",
  "key8": "3KwGvZfLjmNsUNfUJntHuvrw83N8zpSwjfYybQRmVi2Psg4YaEj2CYwkZ99DwAYLbGRrA4KyVq62i6miZCToX2Yu",
  "key9": "5HXjhJYyidm5nnNuhWLQULbjtdRgh74SGMs4dpaxrKRTduwTEbCoczTzsJsUaMontvE4oHpMapq7qzUixbUEPN6C",
  "key10": "4hHWVzAj4DrnrQDUETb5eZ34WhCgqedHbKrUqVwzhxR6ZjR6zHJPtqwi6V9guRKkVjbqdPBMgLtGyweuPLYgqiXX",
  "key11": "o6og5Nh8uRTpWAeKFL3Kd92GegYTNf3ZMip82RsuJhyqGiVPDwvj1NKJLPhUtYHU6xUXvbRuf6AgWQwH4fWSpRH",
  "key12": "5RPKbpQ4YDmDjQBZ5SqhzVa3htr7vA7ibZjhK7Yq6LTM8RFFWr67L1funHrUV9jkeNQiYTAmaFDz2MS5FWPurAAd",
  "key13": "5wXRpcyRWsrYxBRJP1tGAfUscv8xzxxtQ1Fj7HKEntBookWRs4UjXhRrn8spinMzZb5KEuGuhNoetanuWhzfM9ya",
  "key14": "2Pog4XuY8HPLAVNMkux4i7aekJ2vams6XoKkQ2ZV1sCtnYgNGxge7spcdoUDspmvjMcnUKWyz7YDaN7QD6LG6UUt",
  "key15": "2vTcsF5uybrJhywGMbvG5dKupqKuvRDKJPboNjT8jdYTzZNXdJg2yv8Xpx7Bk1XHYJ4NBvEoRFuSwWQeYXp1ZizY",
  "key16": "tJSg5z8x8farNwPpwZzVz9iSmCRMpVXcetyoJG9Fs3t7pbffwkcmL2toBbjJ4nJaXZgNsgDRSu8uHvrYxa2kiuc",
  "key17": "rTiSAWqvVBgftFDtyKZ1ZwXhtqFjSJ8HE9sWiGfFxJTNP2AStY4ZnJCfHsDPYbWg5XxDkZ1YEw9eStM5v3hxrth",
  "key18": "4DsJUFHNLnqw47LbZo2VGrJ516aHpyb336rLYyEqGJSFGufxTyd9hKygLxmXpyrFnyQnBwHC4PJjACutfCdWvUFx",
  "key19": "4NBCJoo3JW2CmQoVfk1A89ABLMQKzemxL3fF33dtV5A81cxWfzgGE5DSKwaLjodJ4cpt56cqYcgyTBZxka7o5TDa",
  "key20": "3uGgWUhkhQube9neRNBTXnfGgNqLwek8gnbAtpospDHxWR4dZhShaxnccWAPeaqDjavDDq8AxS9BuVqrcsSbjjcL",
  "key21": "CRQEapjUjF4pFz8L6qW7RM2LNrKHDH6fQhNbAwVx1HN68zpRC3xCSpYwXW4hybuP7G21nejepRnpEH83TCMeRKs",
  "key22": "hEvodZ572jBetzk2bGscwsKqGBphnwfAKGzT9tVJoDV9UQ3bnyashLfLqUJ5KRAHjHoHkhPHAhLjm9rE7MCnxP4",
  "key23": "2mCk2WKYLAEVD7hm5Pe5ALUrMheqAAcJGAAj7eFz4gdkYzVhjtaQ8ZkGW83MyN7RvNHPsrPW4t95KzSF2QkDRGms",
  "key24": "5LytA7vDW8hg19SDSBExsME19KCWk69Cxed9WbQseaAmoJrm5z6dDqTNnuPyv2PdQPZvSfQjVhtpjRA4MgwkdmfA",
  "key25": "2kw38cWWGhvf55dFAU9siupRBqfihhfo4fy96XcJV4v3NaoYwHLeagpy8kuoNQWoNUbUA85iE4YKW5spth6QSkSR",
  "key26": "4SRjsKTFsEqByG6wT66fAUCFqLhzud7vDbPacRunWgu3ev5Jdyi3BF6xK2zj64nKPbgZ9qKoAT4CTC8nCdCAaFVZ",
  "key27": "2ft6VnDt9NbjPEWEp6uzebmboja5aE36gYk5Bkvmj4oRx3J5frgKjGkhbapNrLMT5pyNXArGCYsVDpeZcM3oHBV1",
  "key28": "4er1CA1TsGv6ew7Dr3jrgqudoVUUgXJVqfDwAMgCm5XWhqpwRBFkMw5AGtPAavm4RyVTjFxk2qgNVAE8cF78Mr4s",
  "key29": "3So5xu923CAiDN2xocJBsPkJ48CRu2ohcLGiWt5DEZvaSZVVpM47Vj4BzcoJpMC86jdMnfgY2yKxF49jFcqiChxy",
  "key30": "j34USCwVKX6Vo9xA1mDghw9YQncMnLkc2B5f2GwLy5qg7DxTnAuF7xmHYm2PtDZU2bN9PLm8yYHBUwBTrm9a515",
  "key31": "2MQqEm9CCT9FG2cZwkQG12d7yAAb1qWbXu2yYMgE9V3Nhh586y3EnS4DnEdW1zh2jVdSkM2Ubfxpoj8JrohGusmf",
  "key32": "5EugpUTNrAiMYNNSucwiS5bhbxE5rrjaeupGfqURWbFQu8y46Qjv8y4vF4Z9aUGcqWt5rNqPUeP1iZsioUf9wQ3A"
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
