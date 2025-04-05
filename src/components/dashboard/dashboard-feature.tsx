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
    "3gz8Ttjuev1b9FJPCrudLWMsAf3V5geGCPGzfVEwmAx2yxauirTmW9J81Nya9PjwKvsUMz7eXHXkaEz2mjfQsAPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JqdetoSGz8Q1ehNkEL6vnYiExoih1HDswJUyH9Rdhop7zc4VnNrwDWJs9yLU1nXXYR2amL3rUpYoaRvLBcN6ub6",
  "key1": "3PeuFF7T3HGq8AtAiYLHe5sLsnGha8N7NPeQKxCKrWxhtM6k9MivL3hWPvtvqSJXeevygZKemrEJTbk3tJgWiFyc",
  "key2": "3vFDTBKyQgjtMrEgeSZHJXAFfHiEEBP62mAE3HbTu3uxQiuUALZVWERa4XEYSY32uX4s7K2Murd6SyUVcEVqoWn",
  "key3": "HWs2pCxroqe8SC3BcMMWRViT2BZYb5ooscXKs9FrDbEEpTDJBFPuxgy9KSh7biHnEeKGGcKUopXg47gwdDpnshs",
  "key4": "2fZxp1HesoBuXuwcbRKgz6QEtb6ZZUoxJzudhjJsszXake1KWN1k1zssSk5WpXfy6VzXoAYJRAVkkbYdJUgFb4vJ",
  "key5": "3GD4Z44cDtxU8n12kaxwuGzkba8L4wUAFRUrf5vc4bL1GZ17kQzCp65CpHECpuZS76Uajj7hTv9hptkgjUh1Uy7R",
  "key6": "29iwhAHRdCHQZiD3yPzf2WtameJtV6n9jN5WEdUJdSGUApdVLX9kuQAsV7r7j5Z7haqUjPUCUQqHoPJV63TzDkgm",
  "key7": "2Hp6XSt1pj94on8zXaaeLBAoErYNNtbCLYtk951km9EKCFwc9CfKZYaFK1sxM7durnFJvhii6o4qQ41yyvLZ4FER",
  "key8": "3m1zMcddBXnmrEi4nv7ywCb9eVrd1LARxCTrG8YC3zsESWKiopBiNUF4q3fxf2Y4hJsvyLtdijNgP2ABvdaNKFzK",
  "key9": "4dia9KSaUw5m7aQoknr1Ke3tKYh5rqspvkEnAG6iXURw6MCxezVgaARxzcjbr5q9pD8ZFcY1L9QpzkEn8Grh5g3r",
  "key10": "3SYM89o6f2ftMKQqxBWH3yWSsydzgmB793sqZddid6CNhD8Y8ATEzhRwMWU5VG9N1JSpS8EvyxeVa9k2nJ8FZHhX",
  "key11": "2GMTWjC7hCNNZ2bVXmTLmqEc9GN4B7YCS3Bgscnafqbud4DfjrWWvcRG1MzhR5mi629rVigTedPrWZDEi2M3JSkW",
  "key12": "2XT7Zia8ePjZdY47LfFTaeGuLnhbJNTxxi8k5HbioU3h5kCAXSbXLQHAgs3WBkW5oyLrCpDTQTCVJSpMUio1HShW",
  "key13": "47pDU2dB24EEBfvwEX8W4SRfchpqz7mnskDZR5sL8pJLwzxSbAg6JZnzE8nTX31GeU6wkyZouWbumeBuhBLzskwQ",
  "key14": "4vMv6ErsKa3nmGN2Sa1irnbk3FioGjB5HvDk9S1hnxXfRP77ehqajwsToNGLAkSs3sXikU5Dm5rd26Xu49vQcKxz",
  "key15": "2kwTgLLPKQ7AagxG7gn6uShTfbz54NYm3fpCKMwdgC6VQzWyhJrYvcfiebgaMaVtZ4iZZ3VX8HffuC8QnxTuWhsc",
  "key16": "avujeWyHCRYWMWUNR4STtihqdQP8ozMmdRRLok8LZRbDrjrs5oieLqwaQssK9Kv7a5XsVufoCEhV4jvGz2REsKe",
  "key17": "3YC8MRtTmFFofRbaREFAjJdmTAYCwhkF3ERYBLtJmt62YczASurTyhgGF4ounKcoKLzC62TNkPh8KaEvHBbcDzTo",
  "key18": "5WsTeGg3j5v1hBt2DhgMbyLEcAGCTCve3a8XGL4EvBPGjv81r8BRZwEKcFLJ5LimDJ33v1cSXki3sjFUbht1kNzJ",
  "key19": "3pj76HhbridGnE7j643sQ8TgSxgZwgEgoQhFeqwjMtT5x1EDV438pZwXAjp1oiaAakwB1fjRpHVmeDDCdjgUGA2P",
  "key20": "3y634V3rjFjfjAB2C4EUTTGwVbaHFzLzgb74nzfUa6E1hYJ7F83yUc71uLkbNWym2oJ7yjny5jPHjbKGmEEbbVW1",
  "key21": "4eKMYnVskJs77FquimZphGMLn63jie9TFzpsaKTMv5vhLFyBbXz7W221V18ystSPuwbsZBLbcDa3b9XvcjXKLnqx",
  "key22": "395pdiLx1UdwNc7msYtEw9PBVkYJptGqEU19wtqS8NG14TDAu3aCTbx8CMfxGp6sLK2hJqBhzVK3LCY7sVqV8hq9",
  "key23": "27XTw5iVRcC8Qbo9E8z1JgaT8zpKca8GCfDrKKJFFY9EMijXaKn1BPvwY3vLkz9VuoJSy9RkQsqNPQP4U5bZiDND",
  "key24": "3BLhhf1K51EtgXukVJoBfbANWrVNtkamhPRTeJawKmSJYJgVdjMNBqqayebgfmKSqYNp1WjQJjU1tSFGrvaRyxn7",
  "key25": "4jv3jRqzVVQ2BwUKmVGaPATKexwn4P3H56YH23b9zWg3Nn8i7XnP3f5NsoDiRdiUSaPVFtnXEmKmaYzcWv7UYpoj",
  "key26": "CeXRNnJvxNSZjEgAqbGrSThAiTCa1sCspQe8hpSfjBroY9YYrRtXXtAuEYoQwLhkpRb7vkgiEsUdNthrWrPG2q8",
  "key27": "2LEPmSio1TcsVhoBS869QVQJ4Lkx4QyR4i9covErXrJjFStTAEN8vw3r7FU29N5ich9WeXGYMAcnAsD92gRHpzSj",
  "key28": "4ibgpwPs6BcHofAfxsS24pT6aoazYSVckSWKokm4yAsfMbthnwSTK9WGajun9tGkfGdp7ysvQ2AiW7JH9us7ZSGh",
  "key29": "3ayM72PHAQJRwuFSzch69WiYnK46MVHf4cAi7Lux91UyNvz2wpz8XSpSNNjPNdhcfs5KXLaySVbSrwAGwkUtYYJf",
  "key30": "L8MJtUTg6CgktRhQHcnnwkZRTFyzEbxJw7PmBEScTM4C3oz3UYYxghSZUE98KTbXktSsfDQHZsGMbzyRZ83GzXo",
  "key31": "3JsqyDBSw9BgHcwZWFHRkr1qi56ZrqXqkusK8x3SYjjJUJSCoKH1PgeqRkkn3tUA3vfgR6PFs7quTB4BorkYbwgQ",
  "key32": "5gYYGyk8ftqCntXH51gNmGhR8rSLvPFLHUPvuJoormNq2PJ6PQKH7sJvBYeA6nsDmJJHPbAtrb2WMer9yYj7uDmt",
  "key33": "4gBScir3WNk3MSBpeuDiVRUBgk7FJkEmgu54qPEZdvguBZzCrU8mjcxJ7Av9ZqkjNXUdKH8A8pVmH2SSwnGGM2jQ",
  "key34": "2gFJQCiDKrgrYt5MkszpaEUJKFbWp53PDW16s8rE5GZzDPgHSpQ6JKuFuAAgYWfnmUnU9ddQS4xW28mR2hpFsAmY",
  "key35": "4HUN4JF483PsYfDZQBmnoKPEcf7hV6xcwhzz7kKjoNkUpCoLkUEwgA7YLgoEzPPLNpnjadrrrDBGQe8b4ra5qKXt",
  "key36": "33jXNzV9DTA65HFcvP3gp9K2mjzNt5VhPe7RpZttyDR8aB7ZBrugEzbp2XqJcnfw9USoVXgaNEbBCr7UWYYpJZAT",
  "key37": "5BoVjtznrfNkCaMyFv4nCojgHkE1FjWujBJ5yaB7uzUedLp86Xh5aFFNX44dVwnNxPUxSTWFHVYM84adVxPymABS",
  "key38": "64oUKo92BxEXeRiWJfLuSd7WbEv9LiW29ZkwAu1nC6gCQMG1GG8Q6VKzB4f3KvsuT7DWESPwkVuTLJMUh5VQwxpw",
  "key39": "2PXFMgzK2W9QdnHLX1nNGsTxU44kUx3HzyNSeEnT4LFqjQo52hRhENLJb77orP2gG9i7Hm5GpRjJbS3sVxjs24kc",
  "key40": "RoPoH1Pq3Lk6y7L2skCzRm7ULAV7QAPk5ig4EVNLKa5AjtWNiLj8jnjbvNmR5JxquLqvigg6AJUzDMZrrVqw52x",
  "key41": "5yuKvbioDnbRDtkb6V9n3x3e2LaTGrA8Cv8ToWY8HEgpp769XxeEtD9XzhY1jC2audWW44VYjP7Wxq3UMCgPwG24",
  "key42": "4tKWKshLvazeMa9ioE3a9tPZWAyXr4WmWSz3rxbFyWDypLPqrFPPokwXuFNkAvZtHNAz5dB2a7y6Ev723FGZLbs3",
  "key43": "3aCZxryVSazudG285Z3JJxq7Hh1dNTjZmjTcYKQbg49UNTXvDuAHrisiYMLdGce7LYzWRcb425xVAtLgs4eYrFCh",
  "key44": "3JxXsw7Z5qtn5QBCQ4LHZNmrQuEMk59TBtKJFPzcFcAiLLxqekJxSizQJ18TnG8h4XFEAoYMffRgbqTodu4yvmtu",
  "key45": "R5PxGXUZNzYKGaPoQAimAhrfZNwoyW4SAvHAbYmrapmCXwTNZgYYrELAE9qNRzMNcwXwg6t6Shg8GtbXPVr57cN",
  "key46": "1VpVbPEid2fwL6nys7X6kLd9cWLJQAezLhoJLq2NbBXkrb6yGQkKSvdJkD8ro8umfG7vnCPgBVaabTvqypHK1jr"
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
