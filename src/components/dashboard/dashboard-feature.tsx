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
    "T48W9ysigCxGz7hfU4ccEAj7WGyCSZTmjS38YBnFc6RNwP68dDqeshYis2S5QgWaLzeSbYntWnKFxyn2dH65diw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fLGtrbA6e6LWt1pvvyrEuszRR1zzY5wpKEDtxZy3cSNEU4iQ387zeqvHsiQ1gUHbLGS6ipSTwQ4qk9atyc4D1ix",
  "key1": "5wjH9w6EdW1CACcpgEhKiKPs7KJe6mapjcT8gHUdzewLhoh76QWEQBQTe3s4hx6UxftVSRw9RNLBK8iQtgmv4dKd",
  "key2": "2LoKvwLCbJTKD26jRqH7MAYyhu7sVrPmjUmqEJA8K7eDWYmgydTjm8XkhWfPkdybmzre4S8cHokudmtBcosg3TUo",
  "key3": "4zGbCKX7qZB9QPsX41YDY3oLR6uuxJTdFNag27VCUMhUCWeokgyLuf5wVrQcwhmvwW6y22tRxHCB2wV34aCrjDSU",
  "key4": "4JbGVAu2RmnbC6ktnLgFymv77eKDChktsKwN8FDbzR7np3e3CnLBc1NN7vEeTPdiBDx9sYsC6SXVSKikhw1NsNd1",
  "key5": "4TojSd5fzXwsD3hjT6wQZpHgDtXL9V4NLn5aifT7Wg2YSJrCUvNsSwTAWTE4k7R2KDvij4vuE8QGRX49PxnAnPdf",
  "key6": "3bf2AG1gZ49A9aKHGrre2FQKH3q2wMd8wvXCc7uZTCnJdKdUmZ2LCzVL6bgrtERg8o6URPbXi5de6oHZyqrG3hU4",
  "key7": "5rpZ3yuWhRJY1XSbKrdRZfjdGb4PbRWZJTkrXcxU7u18xTVk3PY1H2C2CSC2eACvWQiA4aSxPPNjPYkSdXve8bYd",
  "key8": "5PC2tT3FZ3pEDwPcA3H2whXQvbPY4GyoYkSTzmFR6T6jdcBP6YdbXPKMYi3yBjaE3tyFxh63TBu4UcjhJ5yzAjS1",
  "key9": "pFAsK1SvkC42hRhpiiimKzuPNhLNVDA94KZECgvfeozvgBhLyaMFZWhqume61SeoYdpc2X5XXcY9H4R3nKAnuao",
  "key10": "3jGb3dutKGzmgXCK5QZ8rs2zS1h74RReSi6fnNGg9q44izbAWSGjNGWno2k7dNmKe7RFcjQULYVUmHwJZUFfJjZF",
  "key11": "3HfsNkciJgw5Q1h856pcFE7VTCa8jEuSSmBkPFT1Ua3nvVWR7GubH9bCN9e93LLBMUHq9WP9w7Jr9XSK4o3nqF5y",
  "key12": "4Q8wD38BjdNCXvArRicaTxmzz7RVh2qjyaMzGuRNPtRMsAtTmj6NjTiCnM8yJV9MPyGTdDZafS3DiGqN7S7WNP2E",
  "key13": "25wt22j6Lou7rU9n3QKp6idUAnfRuNXAbBH9eRYQ1RR5FBvACUWAh6Bpi8qfsSwbWNg7v6HUXW4jcMaXDWTWoz7T",
  "key14": "dQroNhp9wipQf4AgCBG56nSyXgxyASyr3iB231ngd7sN9vL3VazxJc9A6Euvntmzu43H9a3u87WroGzCF8zQLrg",
  "key15": "5MpRDTc96fiiS7TsTwF4iQfyRTTZRDmYWS4TQDMa8zPV73jrU3faVqb1veAvxdiBZdfULpL2WJ1PzwnrwE3vXFCa",
  "key16": "2YgZ8G63ixuuwW5zqxvxdfHVbp9wZmu1Dh46RKB5LtqPC7GkPmge3J45GAsz7VG9y7FAykoDXmq8GcaGdtCtrbFe",
  "key17": "p6ttTTTcwRLxxB8XbRHMNMgXRL1MPFi72ZPfixtQ3nNRxymtysbzkhtAdSKT5mvmwgGYwqjLAfXeZ5D5dbMEDTU",
  "key18": "5Z9AcU5MxmzNtncw6k2bv8xc6NEt3eQzRf9x3oHviJhfGmyoyx4s5YFXCq8iiEj2Ebm84dAYWx5LUsB5ZV2UnAn4",
  "key19": "5ajb1t5kdy4rvg1gVH5ZMFiSystVsDR998R7rx8Tj9sBMvZimnYuiQVqSQ8mn11mcbNYXLeqXNDa6W7oR72MZFpW",
  "key20": "5ud1oF2qnjxbhxWe94pdsMAw7uCNXMYLdkuP7fNLuNNmW2Suc2BshfvwUdmGL6YQVtqxBL9ecq7qnAvvd3w5Ckvn",
  "key21": "2kh5R7v5jUu9HfjbNxoYyPiJhpvGBTGMFfd9U6Ae2AyE1aCBG1unuc87t59exKLYat5K6U2nN9dNhbUYWib118so",
  "key22": "5GbLJosc6MX4MNR6QuPpZ4YGLH8zMMFLAwXsY58ebVCFPfV7opXMVsrC6KJzbfRwCTBL9FaZR7nB9x46JSpnRfHX",
  "key23": "4sWaenFU6Q7pxK1ZYvvn4159zCr9BRExF1ubjGGtXsCdFYL7qo89SSfZYqSAzQDZybHU18mnXcJsf8uL45qo2PYZ",
  "key24": "3fz5su4P5ddrpizJQwCna3EARBhzZMakDdB9UbvySXCtwCfaM2EB42aTMx9UDd8j6Hs5UMrG4TMQxgFspficGVPc",
  "key25": "2z48u7kPYdD932cLVjWPuPyjwU6SgD94GtPGB3NhZGcRksTg2GckLxqLehPj3L2fD5Ri2ei4nzUgQ9p8prtv4i5Y",
  "key26": "2NeqPJzQB5zMecuk9tfKTH1MqhxHu4zEiyRezw1Dpa6hTiA9V8Eu98buLFhJ2deMyzBjGgFBr84gyadDLaaNBKBM",
  "key27": "2bZxdFXCCffxwc21p9e829Ug4WyRsH4zaCxpsDZLccKkt5GBVu1nd1mhvpVxpABeNBw6La2zxToPTV1yrybiay26",
  "key28": "3FgUxfdeMjva5TrvSvGzcLmYCLu8crYsyBgQufFqkPmB1SbWkAXyBu2wMfJ1sd5RbLLX2N6ejM36PxhLsBjxPMKx",
  "key29": "2hkERX2gBRnvHLyHto8g5ALYe4frUgGBVTuWyQkYiRYk5j5FHiQ2SSdzZWHVfHBxGBeT7Aa2ZXR3abKvxYKkGoZi",
  "key30": "3pBhuTnfJdEWkcvuxzx8Vd22ak54Yr5ad9L4J8YWRbDysqr4uUGhWVFzeXC7GQjoTC7sBqgEBs4GyvcJAQRMaboy",
  "key31": "5kgFBeTbrvnjHGEKyDr849PeS4dyvto3R3CN2no1EZtvB8Y4e4nPSKDhyK9w2a4ghEwdNmhnjz5ExRcDuU2Fbahm",
  "key32": "2uSdqPxfDgDkVg3bbwKJBY6uN8ArLfGZndKjyjqBaeF3wNChozrtvfbvYvZ2MCqwPmhZG8WanGS3MDHRoRpm3EN3",
  "key33": "2HeWJe3ubda15nBFDxE6JpLJcAMVAr2U83GgJUkxeTE4D6eHt7cDvRs8rFNXFrgfVEMze4JuvJeY3vAJs6uM5D9q",
  "key34": "4FQ7yBE5nH5RFDQSuewekrVpAk33JYyeY8L6AjpCHF9etMMys3YUcH4apiovsbc5igtPYsf1zbXQZh23FgH7MU88",
  "key35": "3vUunGTkxQPGQ1j7obuq9EAEaMs2RMUHFn6qSPjmZrad1QsMd7BzLt43i6bQEL9NGLNqY2gioyxYtGzqywFv6ikx",
  "key36": "5NXSu4n1BCVn1QxekQsQzV72HyARg5EYELs5GEQFnF3p91oEfvvtjpBt58q8QVQRsk19ppnNVqxoUZUpA4snGwrN",
  "key37": "23ZJfqB89ocqTJ985KDbZpKDnAQTHubSidk68J2AvZhqst7mVbmEgbaCZ3zEdhYSFB7DgesF7c4Miu2edG7EeXZ1",
  "key38": "86iViAZ9BAuThYimMcbanbGygd2MdLKiCAWqcMLYSGYLRwVDNxoMDce7KwpnDmpBeaGkrbRRz4Az2pmjb4EdkSj"
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
