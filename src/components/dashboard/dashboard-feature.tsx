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
    "4TCGKkrraNPi4TeDrKzduzYZJcHQcDERgRawJAn6J8Er1VenRqYgR8cYYzmzzPpA86vSAB2XP93gsoLr7DZyC8ZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251PmHdLpBBoMAKutRztFdQhchXwJ8nMmEkKno2LHvx8odFGh2bw7PFGVoiT4CCudwEKExrbXP7Dfb4TxC5e1QdE",
  "key1": "5fx1cuh1FVVozkKKUCNNUB3kunqfXQ7rCfnc1ETJ6wxC2wpgyDL1cdMm8NZYdfnzszZEnj5o7YgNjhXByE5v8Kfe",
  "key2": "2j1mn2RjeJhAyBKrfSd5LZfqbCQQjJ9GS7ZyRKn1F2kQx6BRd8NsGhLhLdvaa9GsSxDSE3R55YMxs2JecfT3Swr4",
  "key3": "5BYgLbb3kA7RHVWVYqNavEHFr8vWEeoZUHBy7WAFHgHDZ3w5G6pktZTBP8YmUYDBvzYMGJ6uhsk7aLd1wFqYzZqg",
  "key4": "321EjqgarEKe4VmXfHw2psNiyS9bqTN4NT5DkKrR4auDTa6T5LTgHVA3DqjzCMhp98m1o1THehNtpw8UWXxg4iMM",
  "key5": "K41a3N5qfh18DkRSEaJo7rQUKHu73eJsMEW4Dud1ykDJGwy1YLr1caxbyfyFdoUEY2mkCy5SkqjmQBPWuS4WsE8",
  "key6": "5NAuq3CV7pbpXAEhYbCCjKevJCp8AH2USnrRaTCWci7po1tF8Ukx7HBTwVGeWYKDwreJyNNYVFdKRTdMkBHE9n4N",
  "key7": "5LMGD4vknnuj8ncfa5ndcXa6gAsVC9tsn7e2qnL6v3axon6ffeqdnyQ9CjTR27gEHdpHxVfBdi3yynCziArwrBFe",
  "key8": "2RVPEYxKgpyRCqu1fvrXDMSPosKH8xcdFz2Fzkvg1gWaqHD9whewsx83HJnoYnckjsvSmQLf6A1d83waVUNf7d2S",
  "key9": "4B17ARTDYRix5gSjbbRkbKNk2yd3ibeuamNnEje2JrnWT8G4GWWb2yJNpbSh4rigZsG58XFDtK2iEs4P5QerdCge",
  "key10": "3k41XA8FdCXvnRKKJpFTFH7jYwweneBvxfgSE613jRMdEA78iwsJm5W8VosweJcb8fZCAjvwzyRK5DsVpKU2FsET",
  "key11": "7XBn2mLqPWAKDtEXEHytja5HYXaZdnuyeMLVS8cZPe31zMbc6HQNBYh3No8GzK3ujXtZgXyh2q8QaW4dyhDB1oX",
  "key12": "2Bf82Pkbi2q7pJgMQxXscvt2dfVLVrgHtLSx38cXKVTHNuDPoS8tmoxvbfRUcrgEqqWLYCnW6Vgk3BDXrMQGctdj",
  "key13": "3WS4Me3kuQ56J7R7gy7BvqaZG42B45wwqoN2cD2fXaC4KCUWxEy3DVZPYVAFTmA7gew8JDopE2MDjDTJYGbKfaSs",
  "key14": "2UiAbALv8B1kD2NCoXMQBs7hZd1P1WXhnDducnTGR7zvhuteAP3mhhrNzhFQxjM9rj9RHUToS7we21dBSJfZmvLn",
  "key15": "fjaq7xV5yBNWDkBrVyHQt2doDe97v77B47HDKTRtAAy41uP3Vbjs9K8bPLXrc9QJ3cuXL8CRvXcDGRNgMcxiYeY",
  "key16": "ZhyAcnfC3Lc674DV9CFF6LTRwcT9rGdFsvAP6hoBJ1G9PeqNR5oy9qfLYosrEnApymWHS2gj5639JHqLZ1ea2oh",
  "key17": "Vh7a2WdFw8Y1zdN7GLepxthkuz7qvSpdj2HXDMwsnMKuWZubSin5E9aGFg99xTcGaKYhvekAp8roSuruKMcTSpu",
  "key18": "smqGehkmjQQkr8UntZJ4F9pNGHpWYgGMf3uqYHkDsBkLbGbMeS8HKyWxfDhMumtJYWdhcdcs1k7xwyGySg7Pkoc",
  "key19": "4pdCFcx5hK3QwBw3NioSjdpHsPSk165zXXoHTBdXwr3xYjQ21pnQ2amqid6z643Am1WSbN96rjDBvfFRMW8PMLP",
  "key20": "48iw6rcFBAC4b7uh8T9zXFkfL1qC1oURB247xWSoVNhPwKowva4wg77uCN77e4m6VqGKL17PFycroXGEQ4Fe9muH",
  "key21": "4FZjA8njrantfLNmCo3wvqAbXUUXoXF8EBcoDnukudYAWR4BiYCecPfi2fJiW8QVr8U3zeQAo4hyHVFu1hmyWt5G",
  "key22": "5HWCtFK4Hhp59C81KoDiQtWNPHMyyAcd91DCTLzekhNT3acD3LTgsSzv4pqGxi55o8dnFaawRjCWNsQ1C14cvgR9",
  "key23": "64cM5fmsxM6H5WyAAXe5iGAdXZQahsY94UrYKNtAt9FpdtzoT8b6EXQhr8ejCJpDRt6QikFy5kfeLikTpmnqBQcc",
  "key24": "35Jh4yv9kBKmduTNqnBpR27Yvd7ZzhXtpt5Fniqe6qBRoAUBJ3Eamut3UyVdxTw1qZzoHwBGZMnzyRda5jpSkgSs",
  "key25": "2MawpbTARWMxragPKEXU8upjHJ25QHVHkYqKcP1U6uEUwcQXDCrxutWkTsf5SqK9jzr8uwf1tpBrErpSebTu5kL7"
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
