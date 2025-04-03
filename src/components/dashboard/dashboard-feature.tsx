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
    "4wVaD59Wp193s9N5b483xoaAd16hdhKnQ5Tm8kW71P9F8yyvYmNgdN4tbxQu86vc23uPHLrc3hDJunQ9DUdS5JRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uad1tMmwAPCLumWy8K6TTHxZ4SDj2zmppKb8HFE4EUjFUQpSV6qfjBKG5Y1MD3Y3dxK54EsMVECwVF5FgyVRp1P",
  "key1": "67kLGfq6M6vB7K7uTDpuyRUNL3NcZBLeccYo4rcbvLvjxyjMHEkviGr2NySXN3tkPJMev3cYqYFwPU6zzgtwrZqU",
  "key2": "TiRMCp53mFHJzFxEaeomZ3jN9niwSYgCyNj54M6T9yVaiJH5hHieXN6pBLHk69oP2gctU37rQLGv8ZpF7BAzybY",
  "key3": "3bod1dgg5KHhfc6TKGaQueXK5dHS4SacbUnehXm8dC8TsnrAdqsi9XWHiWTds9v3pwkunVVizk4TzgH7Um4wmQvx",
  "key4": "5NZ34uyZsbndcioroHRUZpfX9wBEKmkf2nXjWoRQ3pq2Vb15bPG5ZsDwMCu3XMKWTTGC1c2phNLMZcdacBQ1h9CG",
  "key5": "x8LTGURPJ9zcAuv5T5fXxjP9nGR1EYit7SocTzE6taSHCvJvYJhhAzmrtuKH7HgiM88Xr7JzQDjiU83jnemEWRF",
  "key6": "3E8KMzynUpKLDKSbU4E3PaDiYboo9G3kcakkC8WeQ1pqHFsJp5FUvDWh7tjfVMsbJD3FLiJpE9strvwZ8H7JnnLh",
  "key7": "5kX3JYcd6GeoxwZZaWiHooS8Qa4Z6nvv59vNn811MmdpdudtrieCUKbZmbpmSayaEj1uLTLeEnZNvRkT6rXSZE3p",
  "key8": "3wkhJQj4e1ZXUWxvjbhdnuuqFM7wQ6VnxboTHudwzt44bRdPrALSW3cX1cDGW7uv3wY7xqvL6VUQvq76b5xNeoKm",
  "key9": "5VybwmL1JB9tgRdUbrfDc5ssGwSUxPvEb8MPeE2KHxVschMQqauGFYWFFrZiP6in5jrQ7wmjaU5qkPJnpAx2TUxV",
  "key10": "2fhnwHcbaHZAdnAY6neFWTR6VV9wucYSGeywtL9QHvtpYM47e9c8ztFjaTscoMutDthULKroeM2LsNqDrmrDWgz",
  "key11": "5qnMKRrVEBxC6gaCvZ3mcF7CzX6yYXayxubvRcCgwQm8MZzEEwh2ezeMAdA5qmtbg16uPvaMsxovqUmpXnqSHVSK",
  "key12": "4K7Xm4HJUNyHqNfCHzkvpce86oWowvAtbCWC7XX4iBEo1sMS5CRjbCJSNPZykJ5yMsA7VLoeDBimoNN33CywUgtK",
  "key13": "TxyzkQ41tR3h9Fdruwj24vqzEcnqS2SPHhAsWUXWEuqGEcSpMvuB9xq5VMLdH1NPhWBJzUrrpwtw94mvmMaSfog",
  "key14": "4aPLKUezfWMiWKLt17BiqC9LDAiTmKsx4tLZu6ZG76nL1zGtDknqjgTp9912RDhyJ4dLLC2gjovKQcG2Mba5mcML",
  "key15": "SYFRQZoSdTu2jRwFKUgmQkD6cKniC1nr4strb5Y66uUJoFpy1pG7eDJASCQz8nLg4YkLmArU7tasB4XCH7qb6ts",
  "key16": "62iisztsNcFiWStfur4V6yQPxWi7zccyJgg3LPTtbpiDZJXZbrh46nrSqAatoS6BRxvJ2qt3qyFU62B9xWYPjMgf",
  "key17": "5xMLrj4Qfkj5MrY3Vf68yBEF5bE6PhER1RiMLH4guxKSvJ5XUHtQ6gVu9EMvLzXnNRYgoLZgnNoiQo8FDtx6M1TP",
  "key18": "5YuiGJQbG3y2wBXJSsEAjr9HvS4BUuCDAKEeE3mrULZTDZwacYzCu6aXQGXrhuCppqjcj3J63UAy7VU3VmW6djPY",
  "key19": "65suwdyuWPSxuyS9VHUEHCKgKJgquiAupdJxJyXw97kodyKxsBxzwDM2mUvGCP7ywAavkCagXGDmgBEYuav8W2pw",
  "key20": "44h6ZfPtMdKY1Wa7k9CyPh3fiUrHTgeDfrtAx5NL2gg3a6VAmvGEPioSYji7iND7dHpSGvSx1EnsptpTV1d65zsM",
  "key21": "47ztATk4Z5UfbTHt4oNJMpddroFQ9zay8dNgbA6PocbMnbgcnbcL715BXSdFWEN2yUnG9Sn4ySDFGbZnNWy9yyKf",
  "key22": "2azSuhn62zcyJyn8fJxUmGeXKd1dQU8tKY6XwhRe3vYkRKJZCscJuqLUQV64Pcr8tueDudkc6x6Zk4G1x7vemDtV",
  "key23": "3Vd7w4KaFuw8piBS6JLkm7gEk5SQVTKhtK2F6knDCeCLGYrZNeQMi2pSKDkvPnEB86z8TACZsSswwEgesmyD66Z8",
  "key24": "6REHiTcq2vYEKWnn2p7qnHZERphgViuHUAXWHpmd2WGtMznhBbjkrjxMmNrc8rq7UCiKAqU8ziqk4qerbFKTy6s",
  "key25": "prVDUVrwpAhAEgVwLFNppby72rSLc7heZeNTbmG9M8w7FWurwZ1yfZrp9uCKzU8eetCTfHkvehML4FN7frocL3i",
  "key26": "2uayqvMUxUskRNELyhKXnzi7bbUZ2Q875XRRnTgByy8B51k2wuab5UM3s9RJvidCFijUzjxCye9VFTM25XPnZemC",
  "key27": "4RQ4hfzcMiZ7nha3ezPL4RNQVTtGqvzbLMPJgjU7ntVv8HmCMdvegzzsjMZGkWJi4LnUYbcr8NsnErJPkzKer6pJ",
  "key28": "2vhwjX7tkuMngJD4AuxehPobsL3eB9wEwSn2bKPwazSuMiEv941s5WaExU7PodJd2txT8QvVunwDBfyq1ADEWTuv",
  "key29": "3BiKNZ5p4kUPfPHDxTGcNmYqvmE1jwodCVmrcSUzccd8esGxG8YZNCX4jwUeT8abVBCDA4kyRK4MhPapwNXi8gNb",
  "key30": "3LKWaKwr2xExu367BjXQt3AMGZD5kSWkeMbjpQ3XmyMMxuLm624S2HTqkEFonBWrHpPRP7rPDmF4g5B6M2PLcaCa",
  "key31": "2mPxqXXU5QiV8LA8K8SVqSRYEEsofN52GtuCKF6BiMVdyCXCGT8qUVJH58gKXJiU7QntXWLa2FnGKGvv45aymcBC",
  "key32": "5jwSgvhun8MndV2urKVP8y9ugjNwmKWkRyagae64RQFoRgBt5Y4KwbvjJKy1TcsigqBNmDBdfJdxHyBfmc1C6xMq",
  "key33": "F5ggb51eWqfyZLM7Ua1k7oc7vwuaycCw8gYASjLeyT9qtGqXsWyXvVzLchJMKBSUcPouKQJxz8R6m9WBgwDykkE",
  "key34": "3j83vpuAybXpj2t4D4icfxjjtUJJs84bXzwMy5cj34HvoQLNiY7rDggGtQv7miYZzdJ8XfgjTo8AhqkAwGFnW6Uk",
  "key35": "2yjDcusc65EukazLcENoCQK5fprweae4qkWajXo15DAafW6usGV4LCq4zuRxoqXDkQNiFfNz3h69ZEZXX1BBjaRj",
  "key36": "zqEwEYLxKUPLyhty69sybJ98vLB2VbLVsAhY5Y7bWDSX4UZbbBeU42p9m9BnFLn79ZSHd9ythLXZ93ysYsAGTYA",
  "key37": "jZSAmAgJdHfLDH9vGehseteH7NJfYPbAfVzJaSoGHmYgwx8gVZwuT9uaCSEdVdWVk2B1TimEzqmhHUvScXfnM4F",
  "key38": "2Zgh5cccmNAUhJ17kbTm1UAzTBiQ3vfj3gDh6Aw4HhtHeUCcaXUH2YkkTBuWP94A8nG6EFffEPg7dE2GNqu4WQ5N"
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
