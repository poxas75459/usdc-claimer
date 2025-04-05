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
    "3xBbiMV5bb3swGkT1gySGqVosgB5iU8cmhpjQJfDRcnow71STAxMgmYS9eUNz8QnxnbtFAUoU14XxbPk4iR8MXH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uinisCWLxUeKGvcQodmYq1wUgZZjuJHFJudoS6Rgr8e9G9Wg4TKoGyTWZQqnaYmmRxsMx4fgHnt3a2zhenw3YHQ",
  "key1": "3oUwSbL3pq44i2mokiN4FRyHXpkdzLsydx33xpdDRe6DK52hTauaPvn1AsYftubYM6UyDeH2ATSKyvobsR6ghicj",
  "key2": "3nL3F9gdwCYtCvKdujX8iHtfPndYYoX8zUdVLZCSkWnwTogzYxgQ6vbtDix8bdGjpoFqHALds6EYAXjwoPAgJZk5",
  "key3": "5Ytw3CWDsYMpGoJfUtS6h92sdHZd5Q9AgyR8NqhGZJeWYgW1qs7UYBAqS42vdNPLevFNKftbixv1jVztFa3ooy95",
  "key4": "39wqqBPoM8SDUviXi9PY9AfqUQV1vRrLhESnKWp4gdZ1awmJd2u5X3DWZWd6fc8dn8eUw3UYx1J5PqmB6G1aSLhQ",
  "key5": "2gf6RZZkMSLZnJBArf7dSD2nqpzp6JdjXeVHNLKSD4enEJ1HMyG944f2qSaaxQkRiH914fNLQbHoo8KJsHrU79sU",
  "key6": "3EffRt6NgU5nJnACvK9Dai47YGXYtFCwKKkacaz2V5fNisqY8TgPe8VMJKLdhim1cpH6wSx4XhUEh8z1YU4p21yy",
  "key7": "4iGv1tsHX2g9RzsxiKVWZnYP6U8Q5hWLMJoZsTyNzLv7sVhqdR1BrfqfFrwddZ6hDgF5XzncUC9U1nLzWPNUAXtx",
  "key8": "LPMtTTRPFyM3WwxA3F2GJCpRNtNrdFrt6xUNiz2zjQqdsqg7ynDUL7Q6LbbssvzGyn2pm6uQrJoZTrdsV99e6Nr",
  "key9": "5babszD6TZrBfb6SZw9JVbW21fAjm8m8UW7JAnu2UnMakHjTRQRWMWpVyZKr3gfP7jc9tGzoypQKihArtEtsTS42",
  "key10": "rWhrEyGhN5TFLP8Jien4vHbxLpuPRafQ8M1iaJcJLXbvEEi3Pus2pT4qingDreZ88QMRQ5R1BvEbgNW85rYZHk8",
  "key11": "25JNXD23ZEv7FupFxmCgKPxfN1TbNQzKQjky6NMLwVSjeVhv3UgUctymkJsWRw5ToXKZk4JCs2xDTqoQZNKuScct",
  "key12": "RzjQ1zLaJpPxqNCbDvbcuvLbNtGbS1WDESASxPAFuJC884Bou81JFiaqygKmv35g1Jx15VUTzsMdCjKjruN7u3w",
  "key13": "4iZffEkj4Dpnj4awFEzTFFzJiVe3m4CZ8mvcpZqwFani3Tut91TUJYavYkqwZTBBsFzb9pMofGqHHHT8ECgtaxYW",
  "key14": "4MvFL5n2owPLxTXX1etSupN99dawaeywTSMNqeyi69bevHkRBhVwvqkNLSJeZknRGjEhaJBmhF4BR8dJiqqJzjCL",
  "key15": "35um4k3LQ1TYTFATTtrRn18kDw4rkkpuoycXGjDu36omGvgw7hcdoSMwbWze6URpRMwmiii7xQX3YFwVGUYPdVKt",
  "key16": "4p7NJWdDbyZ7gSG7YGbyy4ihVfUeqdvauJmKdp3iP68kcRsaRe7K6ZGkW5HiM6GhdjYx6C7V3KvQRsMtCTWejsBc",
  "key17": "2ibCUpYzUNdpgHGis8GQKJK8ch74WVg5YVtMrkLrhCTisjY9vrnUVvjm5dsuvGzKmkYdKLDfRYZSLRZUmJbGoAKU",
  "key18": "5Tq5Lrr5bqBHCL13JVno5i1qRRRwPqEXS2QLLBqijLKfN5kcYbP953CBYe5cqYQsuSZs9BfGjudWKbUT7EKSSF8t",
  "key19": "5ovv4tbomVKFq39fazteKmdbb7aaLz115L9pfui4F86DEU62wfu8h8qQoCUdTf98R57USgja7qCxhE6wMpivaEJP",
  "key20": "4v3GDXR2Yo5MbTCLhMN2nCJzPuxZb1QnLti3URMLCqYqCJgyT31DuM8vaksABxu5pUFjMDRR5YpNaZkBuXuW9FcU",
  "key21": "dQJ5Qe29rPvSKfJxJC5yyC9eGBMFVXLTw2Bafqut7iDDu67FSqaTSELwJ2y6K9ZdG8yB8XqEYKXeasurSwp5Wgr",
  "key22": "37YVVyHSEyxUnkZJ7sgLMtkLY6ShNztGprNe1BLfRfJBdLK3RPYB3w6PPdyyhKPUQbFw1crhCwAmPnGhvEFxN4K8",
  "key23": "4XtqdF6Z4y4oPufhfQjPo9QdaFx2YtjdMkzj6FZSDE6JyrEBby1g1bmAZwogALEvZA3WhLWUAYRqhfTzckczTGxd",
  "key24": "4gxmUfSYEbGKbzAidhYrxKznWyB8aB2VN9sSzBLHDVpAxGCLv2SL2CyE7hN6YWURL8rHxFqMkBhk5PisQ4d7PNWH",
  "key25": "47jSQQkCnm1k6Fa83E1EiRhfehBz2bw8sLZ4e2kHuuG2XeEHRNf37fw7LBYytu7VavFF4e8k6fYb4faMMAGD91xL",
  "key26": "44WfDzsWADUyynibKNJY4pxLZ3dsLvJNm7DyjYscicnUG8Xci3MVuPyHgPFSTKvhAXwnWSrbBVLWyFEtuLjkfkjP",
  "key27": "4AUfT8LmBmAtBn6D5YPEzmd9sJoAiXpJc48zmKn8MWJFZxV848emwMVCr4wDfYwuPt4oobhYBUwP8VK6tMriwYYC",
  "key28": "2TDUJyioGTqwm3JqhUxmEZaCJtSNpvcVtav22vtRWu441bdpRAhqXSuGdm1z7FBGcNqk1VvieDEk9rBoVqSm9GhQ",
  "key29": "4qUrF3SLNxf3nn7dFQG1MBN14KdzYtYoQSmE88FtiWGDEtF8VXbdRWXUzt2xFbiFy6bnBKNUY4FBjdpNKNN2VJvs",
  "key30": "2PDyh9e2C8o3UWpHH2oBKuCPqvcmbbiWKVboQAPwmQofhf46dGsEu9jeAjRfwMD9X9uZMUyXMMKCfuqecmZWf2Sd",
  "key31": "m17NxN6UiNgzZftNyhtHE5aK2wQwVKTNBtNJiHp9gKRM9oEwWDuqeS9znHvw7vviTduyzvkDrsHSAq7ktimAphs",
  "key32": "3QFmJ9wjbDvasftYkgceNqBgErSJtC775znV58szcvRxT4VEuygt6MwGGS5BpsogU4TPkKEfxpfArdUxgmeXwWsp",
  "key33": "38zaGKEyAxFAUbES87qkGaK3oWHE6aB1cQad3wWeJpf4L6BcpjUFni9nC8n7718WG3Cq6jXeAkeiSLQJBFRu6Lqd",
  "key34": "66RqbtFRrEvGPkAgwVYgxK9T6ZbwVSBy7iok9jQHXF2mq2phqHNJHE6ksGAU6asnghKFAMQeK7rT1S2Yn5x5KrCX",
  "key35": "4sn4bTJcrbpZSFLeQa1NoFzn725Nt1P2vBPHCrQNBY8ZVQAVC3pJPQsKizfniLVd94MVQafp97s5r2vk4NZSa29o",
  "key36": "jUmBK4VHdYZYE4NQbHhT7Q6zfNFYJ2WKFB7v4YTQNLxZ6FkendSbjqTkG58tY8baNdFMb6rtsGMueaqcRixVzb7",
  "key37": "eWZmyojkxGpU92YBVHC5ZcZvkYsdLGNX1b7tvEK3Aky64X8LQD7v1xs3afrxnsGYrC2tf4pcGt7wM1mTArbF46V",
  "key38": "2unBXQdNmn44v3J6Rdyx1TyH4on6xAoSnDF1QhSFnuZaDj7a1hgTA2vVMKAEVgAmzZsyw5ovtJLDctJBRdRr5XFE",
  "key39": "66mt2oCAHoDjvKNui23nUb2YKxv7ysM4saJ8KDVDkMbG2oAHG3Ti3sLBDgjdurchWjEZZhXnGPR4QsgTmtVj9QNw",
  "key40": "4KLGPtRx8zVNvPTZ8JVcAjyEZKCctQ9wmjGtAgyoZJY1eVbRA5kqqE7ZM3Z7XpSFN2ArXJAHQF3DKdJ4La8D3FEj"
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
