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
    "2uAsigFyVBLaRTuXn449RzZaC1FA9uUaSZh2wvQynjsEdnoxtAJ1YHm6db4yVQwc5vJ7wMBjUGT9GRqYngdtn5uL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tYAAViotrSn3hUhMShPz6zUbLSyjbJQZNe6FMMdd6Z9NHdJMdHQAfZNrQJGhudDb1VGEHkRr1GeWkJMtvxVGfsj",
  "key1": "2rD9r4xomwxi5tHgAzM2j4SYq63bgJheiioDTzZtwxFiPdNWhsRXaDDj3rqHns1fw7cetz2o19gMskiVC5uVKFLb",
  "key2": "62VBe9rTgNb8wCswBsEx7PescPbvWtFxBn9FmamR6wREBgzRqfTtN7E94agtVGovghJt22awHBMaRk4YXamb5dpK",
  "key3": "3nWZUTVCJVNrk1xkrU8ZXMdf5H36rVujdhaoEFgvntm5joAQwF2JBvJu4MKzjtjWt2MXsHkgrPA6xQ8e9PBAFLcK",
  "key4": "3itF7H1xUNMT5oRuYEMyYP1E7rPA1EfVLdEYuw28iA1QDmQdCdeXkrruVsdSb2DoqjnFY4r3KnMWhp2YLTpn5G9G",
  "key5": "5LoCDQt7SKC5gZGPWQHPGAwoWYsypKyT1qkeFfJduA1gSD5viWVqfSDvNQmapDzsM8dExupsyiwmD6EWkoKkFPgB",
  "key6": "5Rq5o6To1VtABeKCMTT6AcFYVGAxkADobMfQ7eFJbytZagjPLxDNQZcfSdUXw8dSj1AEciignhPeL8BE79qkVsLY",
  "key7": "3R5gwADLmHGzVKnDpGSuw9M21fksERSFQWMs2zXY7sJTzRQqa5UGJaRGD1aSkH7jThym399iKz4aJiVQi39PThv2",
  "key8": "4GtMWnZUnfZ6UfC1mAWn6rJ48YkNArfh3ZaCdt3FsLf88foGQEJY3popTxDLit1qgSLHy65ZhgQwZHiETkP9RoGH",
  "key9": "2zAKjfcMNss3cMb6tu91M9XS6MaUX1wPDSv8kXMVtt2c6vVMxFnukNiy9NBZtYoL5SnhhVMgcEKX5bNDoSXHo7RG",
  "key10": "4qq6WGXPbRnz99B6qMfjWgNEjJdJZ2DA46ugyGSzDbX38Ki5xBZrS1WyPqhjJSnTvDtBuQ7f1s4KKnnjVia7ezLp",
  "key11": "4q9FfJVzMMtj7Wc3n6VJHv7gBoF6Etd5Lmv5X6KQRVnN5CkX6nTa1LLh9ruudkbsQcCotQHWte82XnZFhQudkuCn",
  "key12": "5cXKLP7ZFApghoewXW7GZedZhE4TJ9CXVioQFL7T6AbCXtJY9JSHG6zwxyCfUbjHLg691ttgGFp6g2GetwmwwPL4",
  "key13": "4KHWPKXBQJkyUnYZqkxjDFtR6aiDFMFvqwTRt4v2r3MoKhznhP6aaKVsQ7JaiPkJSmAopf1Yq8ZtALXxpbmmm9jN",
  "key14": "3awGppXvfytLFAzqM4cZKG1qzTVLCRmaJSUqk1Cc8zbiF9qfoYMWShZHpY7Wqh8KpUx281sGZPZk7iysV2opvuKT",
  "key15": "3HJs3CUHg6F2V276VvzxNG6o7JzygtiiibumLC37Pf38wTU6dyaqSkbBmYxxXtqb51dZVyLbPv6S1sBMzq7XXiab",
  "key16": "3PzAGFZ1aoqbp2AMnkmAbofhrYLF8WjweVsPQAnS88P98AH2PFBM8o2Z9RCevY1Dgk6QThakPQeeZxFarE9p3zUJ",
  "key17": "3BXKRXkSwdqcHe1zoqfjpqYWn7CruPXizEoD6j3nCsUfP5Yr4E9aMZWbuUwmcTpbzENfw93s1FmbNhLprS4eiYvb",
  "key18": "2YCHYTrkNAv9awGWypQga4JhCjeV8A3R6DH3AjW1iGQqYUqoRQyekroprfVir16CnCHh8UocL8rxxEhCorYhH7qd",
  "key19": "4tnrq2MJs6X3BzJyD2Tc3PyWxvEZXounGgaRi89RVh76cKTJv21uUE7ZLAK3fu3MHwy4RKpuUuvPhL4buP3UasbM",
  "key20": "4Jhwiq7qi9G3EqLysxNcttQqezqkHf7McyfJKewDVi9PHoUkqLeoC6bswzMocoK3fwJocQvFe3eWu6wqTPu2jNjw",
  "key21": "5LLQqQtuCNc5Dn1HG7S9HA942AQUArUCNyfEaZBnPvh5AUPT9mQ3JTL9KKpS83F3pXZPbXUUvVJYnq8f2BRj2FtR",
  "key22": "54MyN5UuBG5uMS48JybqejViBKNWqG7FZLfK846KLYwmN77QzXRp6DETNWXtnwKfCQPztQc9cMUEtPLJFUdWAzu1",
  "key23": "4wb7VwDMNZpmrN3ypSe5vh8jYxY7w3TLa9VRPJCrc2pWV4B4Se9WHPZUtLmF4LrqtN3paihHHRxwZX1Truc57uxJ",
  "key24": "3fsEbKveZ1GwpTyXZxcpWiZpVA9MWCrrrYRoV9GfrPQZWhrCeJAXNA7SsJCCL4kNdugYYMFyoqTVpqiFwnQVrnj2",
  "key25": "3tXvLbNvndjy2TWzV39qsSWJT2YtErHZKaDVEWex6FCskCEPAFDgFZgqwPv1pb2XQXqjB2any1Q2uDAAzYi7GvxL",
  "key26": "4cZUcDi32AYEiKzfXxR9ESUJ73JHoEPmBMfTb7VNbqwYYRHojnrNRgpfPHkhTQc6n8pXCS2qQ8Fvg8ZEczsUiJ2a",
  "key27": "3iaRh3rQ12iSRtGKBoMEmRsNE1KwWxxYqMiPZP1m3F1vjDiTMr3WvJ8NWssJNhbqcAVgGroQqCkokEdCJoZudpn5",
  "key28": "4Za4yYaqZLjwRDUtMuZLh6sUtg7xMTRGwauMfMkGMMGTwiTfYzQudnyw9cHgCEwNLirVfK3AJVXu1NxPpRqX5URW",
  "key29": "4Pe8q1mBMgjZu6xm16BD4Cp5r4YHtAgnB5NvdUbFgTzoUz3umx9Ze9oAHU941kKJVvrS9menRZ7edZkhXKKRhw5k",
  "key30": "3huKdodYvD3AVW6r29UtTCQVfCnUntLmQK4Kx83jpX1wCUzTK77uRr6SRBsZGQGhaf7fdNfAsmXejiDEgwmyHA9q",
  "key31": "21WFHJxuN29nYDRjYCKF64in5naRyVqqqeU6NgzNhyth2GLujcHozmrmbnG81cwkU3Pc9w5h5hopz8iDeNvv5QHk"
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
