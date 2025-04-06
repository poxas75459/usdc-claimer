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
    "2GMRY6TJzLQG5KzDptReDioGhdTuXwLK5jUEhuUYfQPUTgr6SB13WXJi6Jj7U8XgK7h6uydWHhWp9HVxPYmVL34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBBAEH5Px4J4g6oMLLAhDKTePmd3sCy28d1G7Wgd2SjjwERU5hZaQUdsb7FwtPMBH14WeG4LFryTYbdM8EpEjmf",
  "key1": "4oG2jx5o5NxvhSKBbJWJC9HSw6sFfTCqoEQusWce9DwwosaaPmiiJVuw1io9vjSXhZprFGCGrHuA844W2u1oAxTP",
  "key2": "4Mg8VLbeJ1wLdWwZmzXLewSQwP3n3xBVHvm2XpGDEcdXo5SNXLSUe5z5Ykn97N9MKj5qwy7BeSvroPGHn7f6fvAt",
  "key3": "4oiYiPtGc2VPpTfcUdvfhLXYbqzarfZ5Pj7oVAY48rwgqxfySerksKDZzhdBRPnTdh1NjRgBdLF4aMVTXZHYGTQw",
  "key4": "35SXTYWDfvQtFDdV9uYgcLFjKZZt5oEEdCkmP14p4P4eQY8TMt7BfLJqiYkeMRuidMAjQGKLBqzARSH8TvmwWCzP",
  "key5": "3yuPNe41RCUtCPVkSc78PyqcNbt33rzy4RCDUZ4tGtN62veEBwBVWxXw87R95Nbg6NAPuGqZDf4cYZjtdTf4sdiN",
  "key6": "M5q4KUF3ooMtk33dDFwKF74aUe2aj15ap5QzHqgv5jMncUuv4s2BDtY86ukZ83Hi2GL8BcBw4GWgg6gHBt5g8F4",
  "key7": "57Wmbu9YUZdGApByYVpoqPSbToXKWL2CGVf1Em4zRXvuYSpS8rEJCE6vGGmzUYSPiszhMynfqqZVb2jhNCraTsvo",
  "key8": "4vp6LpatXUbFJ8RTj1PjdtuSBLw6iR1Lu6z5UjAmtjBBshMPFkKKXBXofasKEpBSqLtpRFJv6EEme9opg17CGbVW",
  "key9": "2qzFkUgvGXQBfPvJvBPPYj2g1fufnztoz8AZfgkTVuqEzsmqcifxfrXqtCBaWCRg1EQMBvYT7gV3Qv8cX6pAmDM2",
  "key10": "jGigPyypLuptfbkMQHgtmMDb74iSyuSJcUg6b4jVsB873H5uJJZCoaPqL3gnywYvieDofQpxzTK3Jcpsz1G8rq8",
  "key11": "8mh7WcYzP2xJanMgCffkJJ2AwzwdsPtqzgtfFSb9q9GCXpYhH9neZtfXjdcoGYcYdJohiDAudN3UCQVNtEzTCRK",
  "key12": "3p3kzu9R4FfWsqqWXaoGp1BuYeUHBc8x2mmV7nLh4rgNurJ5VnoEc1uCEwMovCJXKWkYCUxBa1WBCCSGxobJQQwZ",
  "key13": "5Sjk5uUaxUnXUdJvWr3jvA1gfjvxxWL8K8NwhVXFBxbLqR7sD6a4EpQAY746cy3LTQP7Qb6JSMf9ZuH6B7uh2zWy",
  "key14": "5WF2rPGL8AUsR4t6WT6w9ipVFtQFr9Z2Di5aZMzB5YHoEz8QD1rRohgjtc7Fy4wXJPZYiaKoap532HJJx9ciF6nn",
  "key15": "5gU7V42oJnyZPLMEyF3YkfTFiKG6PTMhD4Dv4jx4cE9mXXDunSpX8JNUmT8tMAjfFMYLrWYv9wjz8iGj7BWpXQdF",
  "key16": "9RFaZ4QNmRhRz7pFLgpNFk5315jNz1Em3cePsteKRnbtkmHfw24fS8up2VWVywf95Dtm34aZTwUbJpuq7eqtNaW",
  "key17": "4AUtCQQW8ep9ZhUKzTyGK7b1KdM1yckDWHZ26JL37D9zmYF6dsxqfjE531owPgLqKuVQ4h6e5tZdRwZY5uh3inmY",
  "key18": "vKVzSoRAqADrg2jXdPc5jbybJYpvX6StmpKt3UYAESEbMi8ENHtoa3cqq4SQy3hfY5HHGJHBWB3AUzSduP1Wz7H",
  "key19": "2u1dUBe7mQc4cBD6QF1xwJ4hNKrsLGQX7Smdit9wc8AwDh5piQbaeyVdwRGuioDLj1wCU1jUbwVjUeQb5mtk9cZC",
  "key20": "44dXxoGbDSXoD9ctfug3buCEMJCxecAXC6C4NdSfGDeU5J8UgXYpsRc8y5reRdej85gXeD8ykXMvG8UzDXnFvhRB",
  "key21": "4FQEaBGho41p52RQQWbdHt9Q4GHWFK7nv22REkauHtM4d9LkzbtiG96MF5nzoRDwzEX6JmqUg8YLty6NwXFnoHje",
  "key22": "4fXb6mRe4Dqeszi7GUz8E7KZ6VkGdSZugK1FS22pmcLb9BvR3KFVqEu6Et2dQTU4e7hRYjirbaumhQ3NiRc7rfPT",
  "key23": "3LtGPfWSFFFJFuK9yYSMgCk8a6LwWfWr3LVKJ2VBfgoqWyZiv5KzqZbsRASmFkZoNSdwvw9DT7qfhGbEGttv5ijd",
  "key24": "5f35KepftyrCKgFWYCmeNZKaw6ArRmbnSan9BqjeBHshqQa9J94mJ7VELFT74iJSo957bBhQ6AAKDnSE5WWLxNrF",
  "key25": "48qx9FpTvtPkkJqNhXGFxabQ391o8mqkU1uwDqB4LA8QJaAL77g3RAQceJEf6gv3Vf76JhZTPHFX9WfiYNLCYCsc",
  "key26": "2oDwPPKrUqP9SAbqcM21oo7bgEExRjzM5cSumtZ1S4byCShNaqgpnGibzqcDk7N5LeVoCRkSGaDC7CrUojQ6ibVw",
  "key27": "2uhCX9oRKtkkegJLkZK8NrvxLGgg2EEHoTho1ELULbbbfhMYm7bdkKFRxQPsTMKCDxetE8PL3WybhqhwAdk6QLmk",
  "key28": "4DDuGHxtpZ8VCsPnAe4ihBHkTFnVGUptE3myVz7tNi7QqLzoDZy6xqt81hCvzg5UjA3ojG88ecjRkrsvWvRL9xDb",
  "key29": "2Faa9V1XJXB8JubrR6X6M1JpN72qTWfKU8eYSFgxgJzFVfmrfRxhAwzpjCXb6cupSDZgHZ6h8GrYHzt35FAvbf2u",
  "key30": "2cPd4YqJVfYuhWUeBTeoqSEfPFqBkdRPVfKbVjcHCR91b9UYTua7s1c7LhKSx1TJMzU7TFP29zq6vUu2qkdSdkXQ",
  "key31": "NeUzancsN8EFGCJLfE47ptasBHRxDnmiu7RoAPuzGn8imtDoEMt98LoCNCFS5y3iLrgZ9YCXZMdfJ5Z1uevD8fF",
  "key32": "VzNLqcut9GYd9WK1te1aPnhNFTcrSdhfXzDuWYFJe1UUcTdnrRETWjwSM8GyJLUPaojMgDmv9aWbCcnC2fGBo9h",
  "key33": "PvfxX53nkhx21fmkfzfp6bf6kR8Y8XAAG2Y4wpU57GT2vAowYXacRmsgg3RyWxCvHtmavtHjw8AVw5cAXTJTJ7n",
  "key34": "NXUmpJFaSPGDh7X1ZrTXuGWx2x7yyFoXcbrWZJ33CmntMRYGTzibkjxtarUr8dt9qgWPFJagRLwWjgcKp9YU1fj",
  "key35": "5wqXyBtaaTWE7cL2ScEp1N9TTKAyWK6C4WichUwQBJ6JRWZJ8F6VJH5EwWFhxfymLXjqT4ra9CHT5z5yk8nWK8a5",
  "key36": "3K4fh4rmQnath74qjqRs6rrG7rwTzfndKLfdwKwaB38J83RVUgCSo3eMgfm5Tv9E5BwhqSLEHa9HaVv5UeupAeHb",
  "key37": "43Ss98EvE8nRrz27kNCwW9NNPW3jQ2y6koxuHBrT8HGULZZ33eZrXagXR2bDFdU9BxDEzekYFWcsHpnz49WTg5fu",
  "key38": "2mp7Av1gsvdLVYbw3LpyV1jVTNf6dmcHtwbYPHDRrdrrRBKW4QxBfbDA6zBNHZQbc4piGbsYN9sDu9TQtdPDREjY",
  "key39": "4GtheEsXr4nYLhok3xAJHAED5NMak85Br5Prui1MZf6pP4vr7VJzZ8EkzuTTj78PpsdsNQcQYKNuffJguM8PkBaT",
  "key40": "4mXhZURf9Y9AKmCSxD1fqBrEKyqQbfY2ytNag1ASZAgRoy99sYAt2bTCf2HUN93uuTocpZPwYAVvkBbrdSXdXmGP",
  "key41": "26NQDhDfobWT7Uaq51YGA7HFqt6EoezKM8euQE4o8GLNJ5urxMw7jY4CTfzRDVWMNyuBRYZQJTpDRskgTWywMACg",
  "key42": "5Gd8CZduHdhburuVJsrMW7iK2UD5uPecxiqm6mnuD958ADmL3Q5YWZWrfqrEFQzfg4aTiY2VFnHeB6FDUx8vLgk9",
  "key43": "2qrWa8PqxXj7XUpPUpFxkxGHVPNWLkySanm77HTuQn5qDYVtXKPuvEaXLXaCHxo9r8jDZMTdvNvyLxNDm28mei4D",
  "key44": "4whVtVYHV1Jn462dg5cSiDzQb2GMWi6J81NutYy8Tqf7FKUa5kFb8DuZP1cgjFYv9Kiv7fm25HpYuJJFZarvp15j",
  "key45": "YaKpEFwfbQAsU3hFnjENkQDtCxynDbNhnkhZpp1VBAAW5RWBAdniLJzjmF1omzy9N8eBM42m1sSwYJ1MBknYhuF",
  "key46": "9LS1MxbMPNDHMVnU9CyaQsusbs85CDMwQwPVHipGW7Bfw783haH1coCjej6ErbEGxEVkHDe8Wu2UxnuNiRCcjTp",
  "key47": "26yX1rHsi46qMWcTVtdukrGDBpMeGJDMebAJXcFt7ssnsniPvAcShGHjcUZ1XGHGgXiMoW3b3DAJvcPMjDctmhKB"
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
