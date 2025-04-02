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
    "KHZvgNokbS8BajpwNieKCQUSkqpRh7Qs77RSiDYEBFDcL1YFNurnqfz33noZDWPcP9bjMh536Cy8XuroWXr47sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52np3pHXQyWjazNCruwfbPeci4WfznH1HepTuRnUQ6MfFBDoqUZz6Ct8QVQQaEGrsQDuM5opCYs9n6QfnMCXTqGB",
  "key1": "3gGgn9p83FMW6cEY2yBwEXkpDRD8cz2KHxhedQou72upcARsFHnWdf5wRjPW7GUSJsVD1THcocfe9k5V21t4wRML",
  "key2": "5VaywgCEtVcwUT2514MmD86c8CopXq5rofuJWZacRd5ZRb99C87FyXKRiWvahynEYErJRxQ7mApZW1Y9QQFTnqNj",
  "key3": "HsbdTmf3pBd3RYHT8siRVdf6rhEjQ7z18cKsyYsBNxH1A22NWDMMTkztaPfALrAyXA4SKDLbCEhHw14MSezeqRi",
  "key4": "JRTWLZVWFyFJ69T2Jtf7bfywRSaTycH2fWyUQng1wnvnqivq5vgohPHXakyhxsbNPdaJgc96VUuWeEKHcoAhmiH",
  "key5": "66afQ21xdbQgr8MTND3BoeH9YhK7S2oNEdAJcdcHMjvBiA3dXmxhpTDnTMvcV7hvfPyDNQHWsw7iA5F9oVtvGFQV",
  "key6": "3EFu25KnPNLCrZNtYmLK7Ut32UPtLwLX51irWGPi6PY1gRxUCdX7E9P6LG1E8NqHQeBP18pkMTzxbV6Z2TUsNwdT",
  "key7": "xVAPDbde3ukv336iNtRHMQ4r5rcA2R63gPrFYHQ1qPAKnfUF2P3pHLT7uFW4YvKUJUzqFbzZxD7XbRHBtw3ZvAg",
  "key8": "57Yac1dJB75sy3mCoEDygPd7MtXnVuj9sUgwJ4M2MVQQK2fWbEBAWu8SHkEHXprUeF6zzLDHRWjeioYFYiMYSavV",
  "key9": "3J7pMUyx3P8rW8MpPSKTr7szK3dRqZs4v8irvw84YVZKbPjgsaStVWj7dZqmsdPVhinUnTGNFiGxWSxKpP8i6TFS",
  "key10": "64DeRzVNW5aeEqnrvBFGS69Udw35BAhhpvr5YA8HWWDFXKnxfddEXouqWiLfp3M3LoKjz58grNqMnLBHJ2qv1VV8",
  "key11": "G3CJg41uDknbWQGt9uU4QJ2Xw51zsvTTvnX3ZRXhWXPGbWexU7bjF7srd16vBrKh9ndVh2zcCyVT7zJhQe9gMvL",
  "key12": "5NnattMjwpA9DfiwGPBAbq9qaR9iLndBSDk3Y2t1oGK6HgAyWL6sA3FKDc2aLMVZEQDgPqsvPfJxpBzZaJ6N5qRL",
  "key13": "ez7uL6m9BmhsYk9CpEvXvaBHm9Q6PwJ17SFFFcbzJaeeC6BjpWexriqzcRhXrsoncGfzudWdeXWKTBuCLVr2h7V",
  "key14": "5UhYW3n7UJbbzAMEnDyJJ6ajfWuf38BwhGKvxY8G4xK1KgDqtXxuKvP5QL55nG7A5SjBQYydbpicKdtmZndPRjs1",
  "key15": "57jyrjqydoqZ23XUGfZmWPY4DvXrD1u6ZQTdLotCfAfHywduYLCWERUcQJmWHbbrpom6qPUmtPfRfBkwGPbMZDNA",
  "key16": "2gq9RKUKkZ7hmGxhfDKVfcc2j3q9Z4dw5xksrWdx8Hd3aMJr4kAns2yAAwcJattw9iNrjogzBPUpBECkYibZ6xob",
  "key17": "5rHKp3kdSrzxDENRVD7hyUCE7VE2pyNBXwYxYHQnwGnNvZDx3w1qudXzJFvxEjesPpMi8nPwBvFBkEh3Nqa3rBkY",
  "key18": "4C5vZEB2xu39QTrjLt1R77kXUpEEtbuWVvyTnEKhVmSfEjZYp6A2ZpJfN7WKTJDGcTUtcFd7t6FrBcL3HffuBaoP",
  "key19": "57fnuD75Txiv3RAKQibFKgA6fUu7xipw5HQqKBjp5dpBvbuJwz6APNdKaFep9r5MDm4K971ADkuTbE2UQngcaLcq",
  "key20": "4DG8Up1yW4tRNtYftj2Gn1jZfysbEhWrPkrcAP3Esrr3M1KFN55BS4vRVn48t1z7devC1crAmcJtukjPH2FMofBc",
  "key21": "5GPntb69wpnjPuoetQrLBqVd7cDo46hiaTmHB8ef7Pa9QuWUjKmD2JwFzrPPdhqpT4VETteACkkuwmPQkGZT6Wxa",
  "key22": "2TQorABLP5PzvJm37dTyoC42VRu362wpjRkU2kXNrrpSRR1UeWHm81UXznQwXgzDpVL7W5tKZDUgSaB3n4StDke1",
  "key23": "55A2As17XwNbNUJciZ3o1vw4MhF7igaaBZ2Kc9UjTUfaCjwS6oCKrh2hr1t8AA7tUo8qj5HEwdq8oYxixwmwP2XN",
  "key24": "2r4RPUii88ujKop4kgogPiwBfXCCyVxbPrarW8Eg2MNXsGaHW9Q5zH5CtHDThqn8L4FZ5ajRLs6we6xmQGAeaD6u",
  "key25": "3WeEATEE2Te74E1HN7n3eFV8keusgySKAdwi71SAUr4eYjn5i9MfdqgwjdaAwzu5AqjrZxy7jGpY3gKLEGggGwV4",
  "key26": "qsVBVgd6TWSVrEo9i1wG1xZNCZbTGyUcPMvTCwpzvQGw8F9NSD7Zwf6Eu4pZ8RWWzg37FLWyAP1Q5uHYd7DfjKM",
  "key27": "5mz9rNKjBEcGtWxM884zJ9UeEZYcVwEvpe4raJ7rRWNU3MF2vSCviBd98epCRgLX5uX7fjC2cPTmyxr4wBjjBmha",
  "key28": "3sckGzGtsz3gB9LrAyVNvYda4f2E3niY5QhvvqjceB677dTXDAYfuqWGPxSd24nj6EW8sD1ViVgzQnz1B4r7Y2BN",
  "key29": "4knHe298hmHrkFyTYMX14ee4A7paUd6Pize5Bcz5CT65BTZUqAoSjqm9nmWGVVuRctfGTU8GGAMdSYmN7E8bKwki",
  "key30": "58kTivamH2a6ShG5h1JC1PHdc4z5hA2ge34D2hG88N8DBAte7Fwkw8SRBGHYLaWRkmWopxCQSTzYjm1pBLAXZmmm",
  "key31": "2xRMiFw4ZJMwh1kURZQUvF5XuuwcyKV4AtYojjdrpT38Ek9wpFqnKvtGNhFW4e1UjcfL4tdYMPcwubbUDGk4jQ6A",
  "key32": "2NYydNYmGJNGPQyk6ST1zs8nvroES9ejtBADU7oGXkjVM1yPYkMsRFsfMaWjyKCWaTh1S5mwaFbZv6KKWDiuH1Z2",
  "key33": "31wSb7boz1GkyhjyE4ucVGAZW9JusLXi56fg9bZvDZ5tgwqcyw3C9RPojVcLA5kfRZ1FeFGN6EWmHtXztpGbNGg8"
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
