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
    "59dZZU7Xq4W9tMi7ze8y56XRmu6nd59D9RhiepLM1a9vpJqFL5h7y55UVMDuMLkvj6FDreYcBcZq5YKJarMXzdah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y13jvjxBecu4a8nJUgZmKENwx1ZCcgZoQ52gV8Q2fRTDoJZ3gQWRbxXohMd77foamvFmxEDqYAc5GGCibwqHxA1",
  "key1": "2EwK8e6qycY2C2J1soXN7KSuQELTPQPF3UwtdvdnHe5wzGtxgQM9MSEGfnmqPV1Up9dZ1zowH3gpdM14N6SszQ6P",
  "key2": "3rL887SQAYeRjoZe54tEdQGYayDWdU8KRpi3giKEcmPwTPRhhmcKaECc1y2UDf2PgWtQK4S5jZ5CoY7dFDY7VGW3",
  "key3": "2UBSiyAJ9124Xik5eZ2DS9FJQGjBL8vk4PARGPK4UuVX2wXSSPHvJnYoifTopoNcRWLkjCj7qEWDANJBEi9HvUrb",
  "key4": "53cvVxse5W2T14TuXpyhMFmq1hR5A6bCgZSHwTewwWWFxvACcM6aiX9FsPpq31KBheW2VhgyYUGqoeP5oqsUWFHW",
  "key5": "5mrVskh4VZVnEc3pfvf7qMJoHAMPNx3KxML1E3C1tHMgpTxfTBPZPi6wYYxWUKB4fE6d55YHkqpQUjtAi1aT4YnH",
  "key6": "5uodicEgN2tXwRTe9JRwUu7WxzJ3qK7DC7Fk4cJeiT5bJz63AYr2a2vCoadF4wWggnqEbW4tBZtPsoGjNo6Wsbc6",
  "key7": "33hG1QE8dB8tpn5mzXmRhCxtYY3Bx7CLowKaHYqZzrDCcFATGBz2QzLsS1VBefWdgBTGKoXKKBuAqYgRVZHdXb2A",
  "key8": "GFH3Jo2y5FGyWeJa8dGGi2Pf84WoL4xCPsv6cKWKJcXWeFEDRjwdtxwzpFFRNndCTXqu5hfppr9EAKGyJnNAMUD",
  "key9": "44f1AGqjjmYfbwnMHYzrFsmfpPAwwFuHzGtaekkjUHUaa3mm6DuojJ6D3AfbmV9ZMLgrdEMY1n7AayqgGHB42EeX",
  "key10": "5kmP6xbnXCiHAYXLSQo7CSaAQ8CTdXiyxFgRks59GTKmLFifXgNrLMQ3Vr2X9bLspr41Px9DTtoExweuW59uo5Li",
  "key11": "5wzXCe4rx3RzMQZ8ReSmE3VkR8Cx2d26AmQFPjrYtRVifFyovPo4NYFaTrUofPrAbkiXXaguwsFbvoDend8iCTGq",
  "key12": "BmGa5kSwZjfN7gz9GwsAo7YBUfg3WNNZwQf4JtgzL4td6633UJodkmxFi5XEvHPoo3VfhDD7wGYCdE3VgCCp113",
  "key13": "5E7yHwhiXp4mT5oY6ZVteoGqidcJzdFhnAKMxu7sARkv146yS7HR3q6VYVdTuAqcWjSTNw7NvjhkoGJbTfWib1aE",
  "key14": "Kq92En9JCPJHM9Bhg7Qf8YX5fLByoUnV9ZHQ5b6X4TkX7xWxbQ8kUqGBcv3acv3khf5P65uLqRq9yVo6xBLCt2D",
  "key15": "2yPsBwJcTViYqoXo9i7eXuddBXMtLd8EwtGtUKLZvARzBamYD51ocJ2KXQDcKLJMS6t41oxDAfv1LRCDpsxd4zb4",
  "key16": "3cTxn8W5hxkth26MTsrFfGEjULSYCHaqjxDh1esNtAQYtuttqiRMD1fRdhL1TNJH8e6s287A53uofTiuiXEWFyUB",
  "key17": "47awqdYwcuP8VT9TRr7wkNkgYTwmpN5jqmuD2bYTVvqbNrWA7uU1w5FDvvwc94dLqnijcF4pPzVPdbeM8Wj5tgAB",
  "key18": "4zVGUkPgj6MSyN8kBHxdDfyPwMNb8mshDt91VCVu6HyYZk9Sir5Cb7rP17y4gccXevGQHWengCj8vZi2bjoZzGjH",
  "key19": "5PHtnbsGN7RNzMC7yoZbGq5EG86hP2eTBYThpfbhcoCqUZfPydwhyPr3ewgiYPABoACKg9dHyNV9fGWyjXp6WB5H",
  "key20": "5uppfQNNAKMKeUrvjMX9v8u8sMMH1FojLgKupxRwLJEPtCDZEN7vVQVPRnr6B36moi89VJzDHPSRgRxHqp5ARgvQ",
  "key21": "56xVUk5UUtrfU2xjhsM6FoTiGPB2kq41zb71pM2SXibdrXkUK1Qr4GCBMwfGYRyAcS3BqQAyRdNe8Mcgqu3aVunH",
  "key22": "39maiz4vZoWf4VowfckndPSxSg1gNhiyAZh3HopHsYtK7y1gb2P6x8PqLGT5iPN2XzCQMbYLNEiDT3wsXQUTUCef",
  "key23": "2UvJbXvKjUfrs44pjdLvwjaFMKkoyoREM4coTYXCkMfS2JzvRSnJoMpCnU6CumdhM89iLGYvzhFSdDYBdbGo16AB",
  "key24": "4hnLjX3n3KMRAiuBep2tLefukxxq1DYExcbQ4QnZaZx5zGeuT4PBqHoMgnsmyjnJTLMZNLGsmddHvkYZLw5bjKz8",
  "key25": "5acbrbXMWZXj55xnPbdazaGBCUdBF3vN22CoNfTqi2FWTgrzpoV5Ydn75e4fJxsJ4JcNFtwGPGizMbGdSGzgcoqn",
  "key26": "DwXQ92z5HN16L1rsKN8arTXG79X3AUCWYnhAWt51HCJxGsoK8RXFgfNFUrM3TgEA8SDCwg7cRGxhMGnfd6Fb3X2",
  "key27": "3scmPuZH75NnGnPwDt1obiWuEJdaYApSJRFDRzsJz9oBDheiTeX8QJy9aquskVKFyc1Uc3a9GyerNRxEiHu38h44",
  "key28": "247MEKa8KS47Pip4R3HUuC78TxznakP6mYJfQbJQ5NidP3hurEv8dTmnAFkDKVK7KVH5z1Zsm8MxW7yxhXYC9EzN"
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
