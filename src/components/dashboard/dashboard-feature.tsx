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
    "2N4HUZNG67iMWmW2dk3FGwqcThMRTEL6xqgrLdaLbu6gUxvAE4U5JFEstGX2KPujduaDoDnKXBsvvccGw928b3ZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oT8mzd7vcXTZHZ48yVtAvLbXZYjFu5CabhKmcBxJAx6Cq1pytpAMvv4rcy5bpCmLeB6uVpTCdNvCMjcTeSh5i5Q",
  "key1": "YX5SVgoeTdNPqYHyiSgNvcgAoSn9bhiQ58qeJSKh26qiGSSosy2hSmhwYQ94ErLBGREPRGrNMCZR2BG1jPmsChQ",
  "key2": "34YtwTTUGpCj69GPBwkCdfy1rHoYS9yhyusR9A2AsrJPCErunQB9VxLmbN1PKm7e2xwxPgmNsypJwKi3dvgFgKza",
  "key3": "39YP18QCyaWpVbfsBNi7HXd7LxvECsGRdpUAMQJ3NUwsZiJpDLGCkDWHd3TUix3J9x2cuU2eBagGnvcLx7mLfFM4",
  "key4": "2EPRUcNhU7zm5HvYyYvUKzFLufbf2NMTqZ588BivfQSzgfRNYjoDvESz5PLQwVDWv918ybPeXsddTbztVQo9ULzr",
  "key5": "FRPx1vrb1eqSd4DScA33jbkE2yFWGa1yZovGMUwyiuV4ansiq1FpDLJZB9oRegRjdy7HaVQDsmz4AMAoBhYskSt",
  "key6": "56bvkJvHncv4BdPzqcbjj5JKsgNk2Ts9p5azCtgaFrNNTFS19n6nuksVbyLU6D39CwGdpHCVoBbHPnpyHVuLUhSp",
  "key7": "Vinp8C8bwQw8bK9SWG5juWTQLUNcRGty7Q1iy1zFsn9aBpfhmvhf8QE1P7tijSQ1GDuJ8QAh7Pride1xNf7k2re",
  "key8": "89ysfCygrk7GDGZ6f1cH2DhRnyRrZffzXG7PyCcdxQPZa94wK39mMeDppkUjPtLk77E1A7muKMtkjYetysjNofL",
  "key9": "5bU7rfVp2p2PhH7DcqGLfBE6v7waYF979JE2fvpaoLUoNAU7YGZ6bnAUujs8xjxzx3GBBDKfEDXKNL6xY5eRsqjq",
  "key10": "wguCzbDN5LEACur6Bd64VFibDL7RB4GoXcrMA9SPJVcW9mwFAs8f25jiEqVEFnofCH71VSanBzQywGy6dsyTSou",
  "key11": "52nrxkwg53i44j44cuk9KpuRY9oCcmgmuTHzdchJcMr7RXProbDQjsmgVjUk1S6YkgffttAjVrhJmWWV2L2Tgr9C",
  "key12": "43kNrhKqB28Dk5MJiqR1MVeJMrmbQSbBrxE1F2k7RdF96b7L2QDEF3yBFfPvDvBULqN6rMQW2G5iRWby7pdcLELs",
  "key13": "5UQEYtXFWLLo6fPDy3wHjoYtDZ4CbcGdx4mJsdZUNvq7hHhBvDN9B4vgHN6vWUgPUiY7qJBoGQ6YezbQvsdmQNeX",
  "key14": "47RXCZCqhMd4Scq56Z8kjEF7fDDwdtGpEHrWBHbTXuyrkAsWzixG7SFgF91tTxzzL5S9yvtAkBSaMZPPuGepitRd",
  "key15": "P6M6Qrwhp7FKqgJ9nEZz1o69UqkvJ5zDXmzLSxr6bwRxbnbjaupx5ptp3JQw82b4cLEAqos5GZmEw36bGz92zWg",
  "key16": "5o8Gm1cwbSnE5PiBAT4jLefwD6b99QHA1ZvaQ6ypcNTDZp2ZpASJAF3ucEbz6Hn1Aa9oH4uSXHssHymsNmSmxc1y",
  "key17": "4ZLs72jVY6vcwf2PcukMxcp4nK5cyLsoLq1CjBiPW753d3genHfdyHrECKDxv53Dzs5Qwb3njRZASDbdXp79VwUV",
  "key18": "35KyRyjdnZif88tzQcQz3BPv16bhkE5cVNw41dAGyKN8S84D9XyQ7ZWM5tVHozabKQsvK33ZZ5doEV5sk9XbbXuA",
  "key19": "5nCHYD2yRDKB2sS2JfSS1jQUDRUnJLCwdEUKViUqb3MFS26fKZBZj6G75VSeidYNugHM5PsbxjnXp534ccEFmQKg",
  "key20": "4D7bwGzawX9ejuWJxNkSinhksybDjeRaNwuk1bJz7LzXd27GNWbQUWv1YS3SzTzhhNStE44NvySqq8Z6Co8wgsN3",
  "key21": "35gZTdc25N64BG3AdMBHT787uUx9kr9rK7DDzNRS9Mi4mAxQKZxpo2QbnrUTy7cGAs4o4BcFCtquT29JaAGjsmd3",
  "key22": "5h72KVNoTyEAeB3mVjWGv3Z8pbpiLeaPegT6wCUogxz6pEXhx284rKamZjWPMREdqpTjEHp9Mt2Ew7yfySS7goQT",
  "key23": "5ATDjiK8jPK2MWQb14uMCHmT5W9yKE3pZP8gd7KSyMQaDzd7nwPH7nvTC96r2wzviRZVwAD2dp62ypacb1pHKuDJ",
  "key24": "4MsJohsnQ1Z1Ue5kFpR9xdbWAf5saTHMFs5fEr27AuG99Xo6JMcawYoeCRACHPfHifBCvJffFo3XoZ4C9AZE6dry",
  "key25": "3fwiEgkwuXJdmKoK5mFHJaWYD2QkL1Smskt9bEhThsA71Y4JSyRM6T3tbvXeZj1PQwXV499Yrz5tNveqHUabZgco",
  "key26": "4Q5LiQKNvxbWVudBjvXh6ryCU7xZob8P2f8FaNxV6xbAYvVp9znYeQGhEFUZgwYvk5gVTQMMjFvZNSShvktxxpzP",
  "key27": "35dukctkJ7kmtWmgCrcVoJ2RZGPRHya11u8To8mWZSncBDsMQtfQyaEavkYeUB6HzfWqQXUTX8up41d5zWREkzgk",
  "key28": "aeWtAbAvkSrwXLnE7MV8mSHE6egmBvCps6dCbUGAtNBL4CmwgQifGFXz1XfR3M4NP6YL7sbRb2SyZQ2xiSvVDwE",
  "key29": "5wo2K4FaCfE6UcqoXf6cFjAJtvdS2JW741KQCK24RDtHmPVHqCLeXDQF25VPZeuXcTK8o3FT3mwWepLViPzs8ibH",
  "key30": "4aePJejAE7hsWV5nY34nimNfpFhtHx9azpkJAp4W1MSnoqUG7y6J2879sELWXaocVfhibMeAkvWLfsQcqjpthbwQ",
  "key31": "2v9ZGYQmkt22pwVTTiJk9Bn9LtGikEcvZhErfqzK4rmdqf2zFDFw9JWBr5YPnWt7TagMrSns7Agx5fC7ZnR2ApbK",
  "key32": "2CHzC87u41FnDxb1DXDxhSa7xQc9m8pNSf79sPKQJz7sVpuaUC9JB4yBUy5px4eu5WP13Nk8qJv119UGsGJF4njT",
  "key33": "cykM94X64pqULvC98MzuaVJhvAaCpaU1ZoTjcNrHdYuHs7P9hSNwfgQZzaBXTiHaSanMjiAZAkjEjdoS2Tu9rf8",
  "key34": "2HFDfPEng3NccrbPf5CFEcLdzAHegAWQrgYBp6Y6PA96ZhEUdwmcbp5LLSsbwGRx5kwJHKRknnKZ128StLWsCiXF",
  "key35": "2kpAEcpr92eDWPCUSTVd3gB5Q9Ns6rPq9FCJ2mRBff415KB8oDDPKbCFBYrLQEaCTEXUFa8T43oW8BTRLMdZqGKC",
  "key36": "SMsVawfUiqVTxrZD8nPHQmzhMXvmaEaBqSu35ooQqqFw2xsyW7KsXTP7a5h7pNAexcq7GguPypGcUBoHrZ2WGPZ",
  "key37": "5cenK7gXexqQE7Zeg52Q5YCawyLkC3zCFb6F3o9nAdNGY9DuYxEMA6K3jndj1ncvoz5tK2U2j3iQh8r66Fd6rtXT",
  "key38": "3m1HEpESBuZen75TqPHvdSSSDj7dmjdibjqaUnkdBuvay4s4uDJonpENKkS7rut9PoP546i4ZTdBdTpddUutYi4m",
  "key39": "5pU6YMnxUtW9f75H9YuBVvKoZhUeKUa1cqsRkq5BRXvZctxVQ5HWVtngSBujb6jLAKSTSWTUjbhA1kUE2ZFoyicy",
  "key40": "j8VaNMWxuaAJPLFZLZNHFsnNZUDsqqXRnqaN1mQ4yvBqNpPaAkQnq185DWjBwVrKLKduuwpMhWKkLvcYewT92TT",
  "key41": "5oKu23yxPxCcqxgAKhLnvcdboig8sfLcunYENQJqjETDU8eJP6R6TZT7VPkABqf5yupqtB28G33vTiFs6AzSFD32",
  "key42": "5o5JWvEajSb1TLxYK2UjCPqTYXmx81T6iRpNDzmyaoSFwUScztBwhzdB4wBFczPuNAUAiFvQK8DwHLEB2PR3a46F",
  "key43": "3K8PedxiYaX5DyBNz8TK5e33EvPYUJXtP7NUvDD9DmPw9v5KRfjSbTjXhTVmz4TCb3AazPiFZa46rXQ6c2wYpaRU",
  "key44": "3WT7frqJz6RBWpykcW76amj6ZhWd3YojcEghszvGhMUoxFu22SgjeuN7jVSCiw2NMW4YWjZYJw1rbiMAkJutZfia",
  "key45": "3Kuaw7RUb6ocDUU6EJ38rebX3KiM3yNQ1RziGXBw9hEfRPMWw8a4rQis1SHCDT9mJMddZDVLakZ46RMywFfMTxU1",
  "key46": "3AmNLNreGtLDqykyPaPeU6Bqyj345wr5HGtn1bF5xdAe6HtRSUkEwbsy7LwxR5jsvQKXdVXdfNGXvDwqsPAFvp3K",
  "key47": "4eaez9epe8dnKQothz4JExa6JMQDUABqVP5432tg9WFrd6FfcjDpMMrapB6ez7ztGmAMXam9isMU4zokht1Cq3MY"
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
