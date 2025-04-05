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
    "4msJq8nqR3mQXSq9KA3CYG6XnAaTHCkaaeVE8Jp5r24BPkQ7voTF5hug8ipF9x5jU92GHKWocf6rsDpcsudzeZSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2e18wbBWqdLSDHiwGsqt8BYcPVQD4DxVet5mxEUSvG7LBKtm9VpBQyF6RYTsybUY2qJfCUK6uz7YykpxvhWCC1",
  "key1": "5Z6gqoLHhtheiETbmwNHb7JZMKzs7r9bgLT7NhP6mRt5mr75U7R1FAm92PPJJrL5fx7kxXG4U2ZPjzQ9iDp5d3Bk",
  "key2": "StgWBAotGXN5nESE2v9Uy2mxJXEvayWRqRrbTjRWazaVfJoQyBdtgk4EnF3mwXxCctAjGp3gh9YAyCA3GUP2xrn",
  "key3": "2jXgqMxfJLACMjGDu2aDpz5yvwFpi7hG4n4e7XA8MQPysKbQDedcwZ2wpgcC3KVLXG5dLboKqL98BdHgQ2JufMvS",
  "key4": "1na9R3rUX8d7xWZQ2ZE1dhbJnsuD1YjFvn7Zo6mytZdQnG9DcDnJXFFfRrRPSKNZZ8UhazpiGEEngn3egnG3Bps",
  "key5": "5xjPbxwM2uY5ALZtJXSX44YToFgPdnRvHdXrH3TDvX6E6vdhW9unZTXhpsd8dR7RTFBu9U1pJvKWY2tThewUsRTg",
  "key6": "7W5XmMiVSyFJytVnjT4M4BwaNi2WBgiqR9bTyHckDFb9Keaju3bi89UvycRTfZj9yFphaDpi4C8LmhKfCCBHBhv",
  "key7": "2Eq2SuRgtEJDLbH2AqkkHk5pbi118yA6TwRKY17LNSGao4Ci4CDrtxcZH6s4ZUAcDGDp9b7gne5As3AaLQQpPoQg",
  "key8": "sAvxMsMj5p68Bwz92PUNPVNf3XwamtoHejqC7ntmsKspgNfjWPq4k5qBNX6xNKLEZNh7A2QBfHGZX9ZbVTkDeWG",
  "key9": "3uUThUVXRfcEcBRxZMDZzWjTjtCfgiAGSgPNdnW5mBXnxTNCavQdENey6YFRRrCbU12h9NJzPKc6kvg3VU2iYQ23",
  "key10": "3KrwPQgPf2cBFT6Zs5fsA6qrbTbX5X2f5mXy7GhUBLkcvGZtQjeLPpK9KxJ5ACw8MYmKGvJLcL4rz7uD9mL4Pc5x",
  "key11": "57vCGsfHd8azQBs867hzJz8AVnUZwQPA7HVf7jtx6rfJ7beDgGNHKgHb3MKWFGV7ZR3qMrS9dbFLCe6fScpPvtGL",
  "key12": "3KLeTzgTkM4g29iKoGJttkrkAHcucW9W4xz1dbTp8bheAh9g1QUZqjedmD3e7ZytpLKgfVbfBSnqas7rYjpNMnFF",
  "key13": "3LrPA41nKtETfjUa1LRkz6P4KPqxDYcv8A1eXmNmzPvVwWCsGkUw5uxp7QhbtRoKP5Qo8gajRa1rETwQzcqNXRdP",
  "key14": "5pVTKgeMpFnWABCCLf47KmTxCNhwX1SbSKJ5nyWWy9thSSiCPoxDRVzU3q4XJAmM2kfc5LWbuBcQGnUohLyFKccR",
  "key15": "3d3d5dnZRobp2HMvUuxseEXy4aJqZc2HDFp8aHkYAsxGJ9YbTRSzYPzcKnHdBTzUFSc5hQZqN9otK3btTmwp2vtV",
  "key16": "4iewf66pjbzCzfCgBKmdXRsFQ9KvF4VWniJhYAJxH1zbVngNNr9uVS53GBkYa4Q5527Y8cC7Co9dKCanGRVxfiwD",
  "key17": "3td6tSY4zfG1mMFooC2KDrZdYSbYnrbh5RrHfAPxjueUcPi623QgeNhpbAS2pnqor715Aga1L58dmEBeRSTFgHPF",
  "key18": "2WApVYonPkFLUUQrVrckXmkCa4CjAF2z5vepEATczsUath5xGxEzjeqgSwh7os4jt1xvDgwCL8y2tAUfAb7QWFYp",
  "key19": "3t9RAoTSi39Q8Yc8A91WviGKkYJRydQLC6K4bVJLbqecAwmHPb9HQ4rLBaNQf7ypAX7PJoM6MG6DJ2v1WgiiBJoq",
  "key20": "4XPFxCfvPg1UCE7fYx6ujneZTZVntKLpoSZ8ngADSLtk1xxdR9FdnmNQaZPhpBaHyagRo969cQiYEW7i9kBfFmTo",
  "key21": "36LvnPpB6eJgB4KyAht1ubRx3ss3qbpjnuUa9MkjVJLiNsMMiY7gSL3qSDdazuLcQqDZg7iFu7sUfgd3j9dT5EN5",
  "key22": "4sKWHAqZkqSGrriB7jCPVHmGnq6bpjztq6moge5D8VeiV6adgqRPGHJtKGGdieXHqd17NvBMHwcp7ZHvLF5bnk7B",
  "key23": "5Z3BCwhnbvKU6DbYpcnkU6uPQNhLSmYk2oe5LuvvvxgsW3d7XwHz3iwo72XtjZ99wMngYcSJCqU2X95c4zh7rd6K",
  "key24": "27URjttoEUKp58AAgxXbu62YCW2uH2xLjvrzNFD2wFXtJ1sro6dBFwdL67Q26yFViPAAbYeyQkxiDQNDGZsC2K5A",
  "key25": "42mDVo1ABX4QfDy11qYJF2zN5tENTyz9aebR6Y9JB1UGh88eRS41EB1E4XxZBK8Jv7LcczGM3L7Dasntgo1fAERc",
  "key26": "5UyMwFpFtaHipQGe57mww363JBhkg5yWiAHdwLVcnBmTNUgJvpCC3qaQfCRnPrydv8EjNW5LihdzP9kraByGoxX6",
  "key27": "3k7hNXxS9cuEZJXhMfsm6UJQR1xg6Yzp347gSmnghYpx9M9nZrHyTTSXJScRh8wFLcRZ55d5vcz1fSkasgL117qQ",
  "key28": "2qAXSFAjro4GnSMoSdV3kWZyCnZnvJJCC2tY6NxZfhorzGHPZbLiSz4BSfsXUcXbYnkMNu6gHLRCmtE8TXRdPiZ4"
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
