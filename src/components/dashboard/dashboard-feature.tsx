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
    "2R7mDSUh4CGQb6HaK62wns4dUZHQShVE5ZFznRKBuRGM5X3S5YPpMiGoFymnLvbbYSrPZfak57xdw7SvB2ZqQjNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26aJjyERzZ3S56NLGY5PhUM9LuXLKUbpvRuQdiytHJJdvyzgCTQYDbBPnywXtVCzNP9oXJHm1dhaqitH5TBatGjb",
  "key1": "3qhKfVTbcFNHiqXh6ivbKRL5BvV9JsBG3gyRJNdbY5oBEC5ZudVyJQYPapaXXzuc7hgpNai6ZvLLxayZyvS4kF7h",
  "key2": "58cHjg923Aep8ULkiKy4kg1VwqwFT9DrvBcqgu31usFs6oyvPtSq9huoe9zpJBMCXB95C8XUvrmrBnHiVMSCGnuM",
  "key3": "UzFqRJ4wrfE3oGkTSRi6h7PrjzavwngEhs71J5dbvm1ZfQy3ihRVE2Lg3aoDygRadvmrSdmS9vAueWk46pBhmxt",
  "key4": "3vjwUPDnir6mvLFU18qVkc7zja1PXYZ1XG4pHp6bzEVyR9XZfNdyqp7hXxeY5p4U8UwaafhUQjTELvBVwRL4LTdq",
  "key5": "31ag5b1aToM2q3hCZ3JggZ6LyoQNSC6M7MiPxnX7opfvwkrfsUUB71ws6U7Z7W8onya266DbDsDW1XVC8XrqxD6W",
  "key6": "3bQPhVFyBoMsf69Gfx4LMT9XB3LT4uwfTMiXAsumbg1BFMbnb9rdGDRbKgUBwKKHDhJtetExPXSh2icoADykp61j",
  "key7": "5YWg4v5VJvRnej7hod8LSSUMRKhR3QadeCzFMHHEA5XXe3iFNtuksyH8WEGpc4bXwCBnc1VK2F4wmGZb91QriPbE",
  "key8": "5PQ9Pzoz37ECY7e8vC1Y7XyyMUCXe6cS17ybnYekBJe72xtSSwdG8M8xEDQ9hT7Co8e6P7KsucvhSrf8maxvZHeD",
  "key9": "419NtwREDT91hfysMWQ53m1vGSreWdFQPnDrUQudLdkjUZQp6icEYEzAPMTgCUewWtfrWcxwfsy5hdB1MZ3mY8ym",
  "key10": "4U62vhehofbqccX99FhgC5mNwLE8CL2HvAcTsTdJKctb1rmwWawLv5CPyNVJXbrFCkVWTqNsVmJKkS5rC5wv4E7x",
  "key11": "5FhQALTgdQ55vBWRREMTEm8wQMYSubFeqxio12bRUQnpkEgx3xVLnguh2P9bmAocvxmqZGL5XoNMwmtgTCwUGFTz",
  "key12": "5scV7i1RxfokT4XX4f8yLhD2VZhhL7sSnyXNzkRkTLY5dWuvPiybQo1jUcNcQU9RrNSMqVXSYP8VenLCwrAq67Gg",
  "key13": "c3bTdoZWbStbGgmAdfQ7LoDVRnrQtuZXqKStkU4h9owHkwAMhHEwws3vr4dCh9RdKHgLZceHseWV4iDTWBNhf5o",
  "key14": "3GoGYZThPRBB8Gz4mE167UbmUGsn5mtUxq4V9LLtvfMV47SbwFZxcpsr9HgMu7KJkMT1ewLwMaXwvBNdVaxkJSoJ",
  "key15": "5NYsetMADHDePiuK9Hbusskjn1r4JRg22L28d9ZZFFBCVyyvAjruhh2Kp6peyiZ8pSprt62iVfbyj9SZXmkRBBhS",
  "key16": "49RbgXqrKZVPtJiWmtLbydMYCzjztoLsitzwRJFUz44P8mF9pop2CaNkHkHHkhpjzwPYLAvuJmTBeLFTWspqv2HR",
  "key17": "3SdngFZ3RssALQ2fEC5oN9GcQG78XL75w7Ltapsj3qJTFd3CwLBB1DNc1P1ttYrpaN6XK2g5oWRT4nUHQ8U1RP37",
  "key18": "2UEkdULmkdWKgJTWXTL9o4WSJhp5vP6XFMoHzbcMMGtN9o7ZghAhH3WPHTiJdn4nFwesQgbuwB4RNd6AAxqNk42T",
  "key19": "5JW1PFo6da3ccjdtZTRuomSrUNssCKndopASxZ9zGf6W1GNVuiVhwCFDCLyxZce8d99GZMz7E4CujSPmx9EL4Sxa",
  "key20": "p6iouhaYhzwEmMdEAdWaZt4qDYH6o4vZdfR33vY9npKDSkrx1VoGWWvbNmW6BuzJu66UcSZNfnjbvZBq7Rkysgn",
  "key21": "4NN2o7CpGC9seefjR2oEQbmmQVeRWc5T1JMpXftLp4nTEjBLf6gr9Xq8Ba4VcvFSZk7aGkr63PVgyfcVcXSv2mSJ",
  "key22": "fsbnuEWhMUfbu5B9LFmB3LUf1kLmYRXETujwpW7gFbEBNHaLgLFjLQP3tDsArWK3CgDbeXWdT2HWBUCYq463S3H",
  "key23": "4QPLeiyoYkQ7CN18FRe99CNt1QvRzPS7M853nFFBtYAiKDhX8xXJ6oK254sdSqPkyeSQknPyRWi1os3j5gR9RhL",
  "key24": "4PTu3beJgqfcMTmwxC43cuoaViLtB2MFbAcfRZjnCRfkAA1TaoPKPV8gLj2rjXxw1M3cLSMonn7Sf4SH6YosjegH",
  "key25": "3fnb7c72hr2qdxoA8P3YqReExT6iydqcJzN2f84EVi2S35mZQnYuB5d2oacSxHdS9tXngrLX84Py5UZeFwsFe99k",
  "key26": "3y4DxL8Vym2sHM8nneYf5HZ7fE2XCUBWf5i67diA8dRhEDbpmmWMBm23W4WGFgu13TjMB4mFfQMt6dHWHGMTtp2X",
  "key27": "DKj3YEiyDWLtkH1cUjSrvL1mmjzebULem3Ys84iLVrZcokg2YMD8Rshn9AV3GHBuFmENjJeEA3U9cJVTFe8WMfD",
  "key28": "25fhLzD3DHSMWoR8eRYFm3p68UqNMUqZsekbMygXTEs862hagimWMTUtW1eTXmbaTuTUhH4Xn958DKk9L9D9WDqQ",
  "key29": "kvyt1oUcnnRW952fcSJgvHqWnGdQHtJRNkdU7zesa31kcdVSRM3YiYkEZnY8etCppancJQozosNX6fWNP35B6ft",
  "key30": "3WyGW3nvFoDhcXSaQpxjFRKaKQ1WUdMjnTzh1qkPFVeFdQx37ab5wgfofpqd4smmKXTrNt1DqiksN5VBur5bVEjD",
  "key31": "cjSFBr1JPuckx5V5XKsnXBjgHk1R1wYCXtuzzSQLgEA5jhfdAN4JFcrLaFZEBARiWPAUrEjNjhqnhyyBSpHArYa",
  "key32": "5Bjik6X9qR7wdjTneBRw7mRJVKPYmzM6q6hukv5axzPHwSF6H3BvRgzGJ5wJH4oMnh86QmF2CgSnoAu4qVBn7R5b",
  "key33": "2hDSsLusF6cnboH1jJqBs1MwenjcQgbyK3QG4T4KCMCYg9y75gffJEuixz6uV3Gp5FDajNpYsdZ3z7T3iacae8sx",
  "key34": "2RhQYpH1naZdGpe1VSYEgeWdevJDCDL4gvoVjjZsP8iHBpekJDqDRPnj4KdahkeDgZkeYa5tpJFAA3Sr1sL7gJVs",
  "key35": "5raNqhh8Y75ZUU6QhrHbqhoJ9idkGZKWw9R1VKtxiAo665FbKhySypht85fGPoEuWfv4cUzFGSL8wdq3WNrLfhYd",
  "key36": "xCPue4ZUS7QQuektmKHR9CPXrXXkwBBu6989A9r9dPDsrH7KJaKGZFuejh3fg6Rnx3CnFtF45BUJZaeAHxZ2Vgw",
  "key37": "KbfHzTcb4umtPyT4DAinsCiTHiiAB3q8mu8G9zbJotKfcpHWNaWsLKMgTgFycZyP9FB2Z8EjoDFD6wpFUsUiLBg",
  "key38": "3aYUtu36bSBQA7KqzEmdA9fDyaseHyJ9W9dvycsUBz8ta8UfmW5jNozLTK1CjFvp1YDdNFvZ7ZG9JZWgiq4ht5SY",
  "key39": "2BxP67rzacoMHnyMdE8hBvj356P8LosDyJBEBNyEFxHgMaBnhRTeYHp4yBGH7XqKbR7EM16qRWvYTQCmA2Qc21uT",
  "key40": "66XH9Cm17jy5JE8G6V69zibmCEmCAADWskRdmzKk3pmzhvFENwL8YJwr4Bfap1ZbTDebG8R6Br7p5wyjcNc8zM69"
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
