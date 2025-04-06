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
    "3M2FXjvPCuJQJpD9969dQARFhxAksDAyxCH5CTAsrYFWkuczQqLR6jfW8FCH36DSdyx4hsqL4AEYAEWZtoMasTEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35SYWeTuPKA8KxD5zMxrgFymSBWZ3whDLcDTPQiFt61v6bRRXW8awn9R8aH762K8izHYdtLXThFAmppszjGAy1pe",
  "key1": "4f7qHbyUm34eQRnpw2u1285o3BFY47nURBxqZsjRWExZyAeqVUF8VGYgcK5vsXpVUnXqNake9gXZWvHiNTBrGcA6",
  "key2": "4gk9rmG4M4ncxcQECsKYKZwTZTCjj9s7hz8qSeqgPpp2DdMCvW5PDvrJWYPwdCo4aCKB7U9s8xih4qkx9Sz1JtYV",
  "key3": "5H2M5Y9eyUbsS4JCiDFEsEjM1vkcejkggd7ADNf7WZvj2PmaCaKN3Ft1QxCKTXef63MXQQ94GYeArpEx4XBf7p1p",
  "key4": "2yzRrxGDDuKGhdbEsqMjEzfGQDTvKBYw2SqRPkxatr3SUcbAxZS1z9y4ZK2r29vBqmfKmoKbcWig7MiMJYVAH9Rp",
  "key5": "RnN58qxC7KN17e9vUL3DHbq3woGxFoi7TP9yaVWhsWkzqx52scHmGxouYss9rwy1dQVwcpmiTPndvCCU4rgczDt",
  "key6": "5WuHmQ8KRnCbfGqJfEB5jSGPjFWnsh3RFhNYF41Qc5agXjR5NMHepVgZHWtCcWVAuAG2vfbEhystBShaUJSfhTMC",
  "key7": "4WtXWXFJ8xjRr2y4hV4bMCwxVULpMqiF33tpMHWjX9YUU2h3QyhgRVrvGmqK1KQ9bfL4U18Mm8e9Ff9QSUL1WDrK",
  "key8": "4HJXCZpmSyVBGAtknj8LtDPoET9ajm7mBRfZs2obhufbuXFEyJCgddWxQPoz2idydrYmhJhdBNyu2JYTKYYGrvzA",
  "key9": "4TXiJg6tTBFPTaXUHU2Nbw8EwjZAFqH3tze8XuSH4yWQHez3BuPyTQRDUvo3ViXDZUjjgjZ6zyo5HDtF7Na5mgqY",
  "key10": "58hAsPpbtm1fmec6pgqBt5j9qRXVgSoxbfNaMX16opy4pCHJd9677svGfcAuATdJXx2BDPMHvs5kMXkFWkDC2DgS",
  "key11": "3GbFGzvNebkwMCbyAWi6DsRc6LpTcqA732V9HfEwZTqAUkaVEASUgqR5FzFNjbMLSvf1R1pgj5hDVkJ4Emph9y9K",
  "key12": "4ZtgKPAEoA2ywtUoanxyHztYvYXizeUeCXCbBsm4GmGUctiZo5A3g659JuGNeP1VvWtHY1xCkguBQVvDZe8iEBXp",
  "key13": "2gVuTHeAWBFVPnVLCMF58WM5oAP7pu5aCdGemHnMvqJnBvqPbEGHdGSmTfNKiRefJXe39dXZzwLWQzkZqXgsuTfz",
  "key14": "61JhemaS1wCjDMUUwAoiQXQd9U9c9y7925BUTFSPqJ5oFjyxNF86TvZhxn56ic68nRKJ74YfqkhU1NkvuMAfqsrq",
  "key15": "31rigzywEgV4Rrppprt84HoXZpLcrSEQnRoUX5gotxSXMqjoervjjWx7ZQBDuC3uSS1yagxGAy1wEabKkVpJCREU",
  "key16": "27Q7aftQqwRcx3YDXR5FPie8m8P6SpTHDG26AMKpHtQbf6P3ukF2NcSeYqqqY17UW3Hzc7a7oJR9ceTLF9v7dMw1",
  "key17": "3Mw6qoiBJ9ZZ7seeBVVdP9jv7otrSAb9B7hN5f8AR4v29iBdoKuvSsDWoYotRxQ5LS8LX5jjkUC5C4A3qiNKckBy",
  "key18": "32oFW6tfpva6d7J3y81Ny4VbtkjVt5UN4DuJ7xqGk9ZoP1gaVbGD2vRad76r4SkTzGpjTS23NMxBT3WgtByeuouR",
  "key19": "3i3eB79MpEZDAqgWL2LnB8fRqHvd3Rm9JpUejYLjPM9iL1sJKDRVrA47gohuMwMfayjwcnukQ1RC7yGPdT4vJhPA",
  "key20": "5Rr9YTzct4SepsHaoGWabKcqryapWKjrGziEXCJWaFVnwSKjHEYDLVCvCe2PhBkCUGULx9wYKX4iTsjKDGCGtFRM",
  "key21": "2Ta4EgUs7LxtC2iXaxe2JZhUnx7gJn6nqeVQcMHssoMpxdhNvqeDnUFPFQg4NC8knAsR1GWiFAxmvkPcFNM143qK",
  "key22": "3q1rQKmprR8mMedN7vh94GWSeMUbvkTzKDrgJs6oHqFx7pyVj5Sy7WY4NdStuhf4AyR4u9h8xcU9AczkgmgRf5hs",
  "key23": "2MzGAFq9BRRszgXozUPQHFqndVnt3SvtwER1fiEaM5MnYScoBn8Z3Jyfid2gjFZChtyAnFrtqiqepQc3UAuH7DqJ",
  "key24": "3CTdpjtzNHznz5UADvrZxAQeDCDD3kubuktombskB4YW5j8eG9LRhvXCKUiwVRiGbzt2ZE7t6uf5Dfw24XkSf7r2",
  "key25": "2QvVmHeR66UdQSYG3VQEaeKzpsupvZUtjeyaeLu1CnFS6Y4ZtDymztWSMUprAgkZu95MsFBmGijX94v9ZoVZ9HK8",
  "key26": "37S7ytiwC3wbRuD8izCNXyD9n8kPAaXnR6XcE7kJzTCd8dgi9wUAxjoMoTWvE5gcE9y2oXDMpGWLj6rXdfEyoMQA",
  "key27": "5N3vdZ8uYdG2wMQofzb8d9CCjj8a8oe551pVszVVKnWpXsEyrnCJk2dhHWosmdpFg9DgtUtNgYUhWBCUM9Nb9cM5",
  "key28": "3SykQ7M56DGrzTLuXbJZZ7p8RSNV795FCPKPMxd43qogPRCKqJ65pLsNXP4fsVuiw2A6RFECkW4HygAeirkFHBmK",
  "key29": "5dV975Dn38cnWTJnTyWyq1DxfULHXQPsA1a1QoB1K4R2xTQumyo5oQCbwoSu1L7tawwaGVsW8F9wJuMuefjnCnB8",
  "key30": "4fL1PzdJgDiN3NK427Sz3iWTyf7NNCDxdPtFriyNhFu6JaQMkoK1hHnpVEn74Rq3bWcv5ACdvGXuMfs9UuY3mPYc",
  "key31": "58PxZYAtt6WbcYNB2DQnKdLHsRy8eidCG1mtmfgc1C5MgmdvCmU674JJd6hLKAyQXPDLzYNchK4Pi9CRY8woMa1k",
  "key32": "opJVfpCtwBrcvZ6hNYavWy8dHB3VM9xuzioUNkRXHkjdChBS9jP94V2Uo6icwcfP6wAJpF3pRjYKavMiufYx92J",
  "key33": "whtxdoVaDcozVXX8Xc1yh3PCGc8xW3ZwD9UjQqDhpA43ZNBi2njY5SDSJdzgjH4iwbHBuhr6owx7YaFEq56RANP"
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
