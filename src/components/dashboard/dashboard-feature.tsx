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
    "AbEV9cMHqGwKf5j719EQhgDYRasZaobMwz9DayscEsU1tRgKcStgwey1xx6NvsrQBqw67CEKhGQj2gm7fafUzBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mx4UAHE6MnL8ub4p4rBv8QXCFdB5xc13ms8cP13KzgwnQDF6mQYDec9bi57nSfxqkPff65cnmWDdpGkjcvHostU",
  "key1": "4SuUDs7CqXoQ4kdUYeriaqCb659YGt6do9atFdjxmt7ya5gyVa9svAC26tF5beu5fADjuoBmJSeXNwNTKvRd9S7Z",
  "key2": "4PaBx6qUawg4Ntxev5EQ9kTcm16bJGp13Vrt7yqapvXfsGSPGoVz24GYk3zKAn8WQaVppiirxJY8V46GvburMAKZ",
  "key3": "2pjaDBmzGRau8TYPRHrNoWhAJ3oBT2po96u4YbvoQxBgY79Zfwosxe7mbNsnJm3Q8PryGhvcUHpxQxX82CquSQwM",
  "key4": "zx31PnTEZ1hiN5PD8jP4t8pT3PwSMVFCPFduVYv15CJoytyFcZnv1UkAYqcUGYcfMNYLbXtoVk3AMN432uA7wZe",
  "key5": "29rDVnuS7XG542xMZxrHzbowjHdxw3hxTJjynm9ypj385DGSfb9HRehrsYG9cgBuwijAXsaaLXeL94HcJB9FiAVY",
  "key6": "4zDxanfYqpx52FkkoGZ4AqGUwAHR9G3skyEguB2DhhfPwC6pTXZCLNG5Vhk1bQJNeMgAPJQsKF8Fniz8EWSGinze",
  "key7": "52Z3QMZyWCzMLfvJijmvrskdJWsHza2Cb6paHqfj8ucxBMu2Xf2h71f4GYLVxPKy8dLJ3q3qKQoCsG8vp8t2LSPE",
  "key8": "64rnyUpgb2SQzNKDKMKfS6a7is8vtkqTXoei2xVTipAQ3LgH3B6McRypb1KKEBLMksibdPGwv6VoB7XxisdRz5ap",
  "key9": "64UsaqxENiwS4JjHhcpvSmoWf1yDRAzjKN8VFnXijt14WSpHMQGp7jtKBrrdaP6adKLjUSQqvE7K4CpAUuMEdZKk",
  "key10": "3kS1SppXgdXgJAGcgdC9URD8Y2BKhAfe9yzkg9892jRMqtWmXvnTVnMsxc3yLhdMCbdyZWUajV6GdzxWAWnhHGFb",
  "key11": "51UHfy3FYsWM3zPmrcdqwT7ag6VgHfa6psHTzH9PHH9E5tTMiQWLutThkBCN8Baa5YQ1EgqoGbZR36UT3op6s3PH",
  "key12": "5aaNDAstEFUQifEYJVoqT2tzXnqSsDjF8DZwpi9mAtBdHUwoJtsN9nb2rnAp1oZrLHo3zrL8EMe5EyGWsPhyogUj",
  "key13": "5iPJ7hdJp1bUvdfQBo2DD7GYeRe6UZufdgtoWSZyTATz7KCMNeFwaAbYBUUmGi2Vg81CaQ6Cb2kepHhkviAiGVFx",
  "key14": "5Wo3Wu1gxs5Ax8FZXoCxKXHze88eAmCV2PKHtQJq3HyU15xWEd1Q9cpQ83g6ysqrwTn3F9tTpmPGjGJ4CEqqzQjW",
  "key15": "3sNrWGjKaDpzK3WaEHGKRN3AsqJEMdXe6gsiatdEAHXwmXVD2k91TuGerQ7hneVEvdH5kLJJbcpQm2W4YWqqmmoS",
  "key16": "51zfbiFy4xBXBQMRG2N9DzDv5EqHPdzVJPjbuKqHa2ukQGK2V1eYohWxqVTdBY5fTYNTrVXQRxL7XiwxKAZsYkGx",
  "key17": "53qUWhpDhe7Kj8D365BXx3tX1pvzf43jVouMg3Xoij4W1NQuBZDDXiEwqhaGPu5PjpdTVnBm38V8pL9Cyg71XZtF",
  "key18": "2AFRhEdnfUgtE1GQumeuE2Z9q7iq4iS6Fu3xqXvFVVL2Lj5K2ig7rpLQ2YfrnuYJtXFigghLSkJnnD3ipCYFFmN9",
  "key19": "4zirH8ELFRb1At7XpUjjq5kZ8pc8EAN7jZTCWq3gQDiroLaMueFSk2BNBN5AVr73voSJQnYS37jEnKRf1H1z2RQk",
  "key20": "3ERQ9gGzcucNdqJEwppW7pskZmgBDSwkcG4mXBhaxakWzUvqRxfw4nD2QdAwUSHUJi1BhWMCJknCHx2Akfv6ATRK",
  "key21": "3E1nA9Zd4LfF1w3wunGvyiJhBifCAYkjYNSyenPAFg2GZPr5ErossLNrvbBo4m4i7r49mJU5DooRGGuYrP4iSXkP",
  "key22": "4BKBxD4iAW1kH1Lnjgk4ps7EbLjpZPweF5doCEgYsc6DYjhAzpDX5VRMaFcet3HPwxi6NN8ys8sJU97xM2KVGjoX",
  "key23": "2NfuA3EZfSBsqnMdWDDHJnWpDPAaoqqZ4M5obryNZtWsKBSVvJ4UjtyyvxRh3WbxxxCxsSrYCngiCYTK52WuW5vt",
  "key24": "3kQ5aud4cKy3wRBp1vvrLZmeysZKCjrZsJrCG7ZxCokC13JGHSf4QqnkS8dwiPGNBX1aHTMFiHJ8WVXA5JFcNE65",
  "key25": "sLBp9yza5WQaWkiRQE6YMLeD7ULGRpRV3FgQns6EK5KK1SdNTt4ctsLmsDTEPNRPDFb5P5gGNzu8PSLFEFbZcsg",
  "key26": "49cGd73USEUxRQzDDqELDp46zirCtELaTM27hrMpetb9rFZiFKC9tgF1CDS7BbxHv47r52Hjrv5iJz9iLhKhhrm6",
  "key27": "535NnhakD5ZBxceHFq9G8mKr5q1wGzX51XkTa2TV65scMkE2ZnvihBs64Xeso1H65fvQEGF5yepNR7D5pcyzwYq3",
  "key28": "5RiifMZ1uKjuaygLXVVizKdNsF28JieDKoVRj7jAeF1RjVdopmTD7Hkmi6XPFYFwLHQbzGCmt6ZVVXwD3NQsbCLg"
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
