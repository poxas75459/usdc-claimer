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
    "zmYPrbTtsePxwWh2o1Axz7WVzx2KMEjbtxD9ZKxifNrZ2rSthKLvKmHjjBDH5VvrdYyebMNny2bMoQ6fe5A5CqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JfAMTiNAnsKtfjTCDrKDBK63YvMWMd5JhRoa41Gn4L82ydXq1TSk7xarwFc4ESiQB52QfMLkCNZw7w2zoYsvEwh",
  "key1": "4fqbfSvQg8Sgs1P4QmEheRobe8TjMQqRqMMCs5XnRzna89UvWbJSGKsCTh9qjT4FHWsHBfnP6q3YYFd3FbVgu5yU",
  "key2": "5Gcu2LSo2CbWiRcTDfSdZ4EjEUqjymdU9aGEAstwfvPQFuMnoFoxXwX9hMTAsMPrxQXJvTK4v5TRqkfSvNCBdNx",
  "key3": "4UU5JmzhSP9hDDVRXP3wHcxxnpmwk8uBcU34er7FRwfBT9e49ETghXxKwHV2gswoXK1LMnzMaGG7jrUpvzwpMEJ5",
  "key4": "5fBBijB7vXZz5H1dnZufjLukYq8WbnAw7AjiVAdXYL7sd7dMfHeoTf3TFe1oDZHjkSeu92WH4hr4dQipVr35nQpC",
  "key5": "4qechLJakXkRN5T2BneR5erqVG3irPaATvKygWYX76Ab6kvTgokmMihSjKwCJUih5cHrB5PhQikZyAL2Tz437Vv3",
  "key6": "3nuPuf5Atnyg2bLehSR4QiwFVTbgh3D1hkEvjqgHte558QLEbrx1yELMkxqGmDaiRXQaXSFK9gpUVhZLuNb23gMj",
  "key7": "ibEe5b4Q43ugtTsepTWP34yrrWRuZatZbrZSMGpvp1cHDpvoZNsPtpWoqrHx6JgNmdcTdEbhvcrx4M8fRG5GGKc",
  "key8": "42ggk1PQ4Xt883vfbmJfppA4NnWH4CLYfhxa7zx1RSL8GCxpRmGDAKhNCjTbhEbcP2o45fySQLMLavNAkXtXwSXs",
  "key9": "gPFtcogzoYq3qcB3hJhCm31HHuXN9FTrKEV1cN5Mapc5U1f9bUzi31zp5TNVKgUthqgK3gxMXmimbzY5qQy3wC6",
  "key10": "UyE3dzfCQdDWTtQnNY9h1RgiM5ceyWERVMzeATvJwhnjGEGTWkymSewUMvJarWbsHk3nB5r9ADwY5AbzmvXNCHK",
  "key11": "2hhp3dhNP8xVJtPGyGq6hS6jcJRvFP8YBj45siFFpH94771e3M7KKzUgDqAQVSd9gh59JNsunJaGFj8exxXUhx6X",
  "key12": "44kG5BXGKHLt2dwkGTzczsaoKk422PJKdkxmbeA1aSvwsrHjgukF7nejjAdzsK8iEC3qVzgkEMCQa4pb97Zutbgo",
  "key13": "2x6HgPnBH6HVw4cdkBUJMRercbUC8py9hpn6ViMyxtr8w7Lbgb6ebSBnBuh1bCLus4V38sp8gThmi5hhWCDLBzAh",
  "key14": "GTwxnkhGgNeDxxbuPgyEGmzknsAeGWmzfHan4pUrrnrjjvJGGFwcyr2JhvSUWTiJUErPH5sFJh4UwhJpm5tzzaj",
  "key15": "4wqLZCPxnzAFJ2LEzVfMnvDC3aA2NNHZvpQcYBhWSzHLWkb2ow7u9RPP8PbV54zsB9XS4EsXhKmhiCBTDyvomtkF",
  "key16": "4vaPfbP4KV8kzqi1yyHwmbjct8xpB2GkPUCey5hi63NwWZqmmf5mUGjhRA6AhD4C4kGQXXCU8eLx1Hc1GXxC5n2j",
  "key17": "67D7k3SNBcjjuNDFeeWGfh4xxRVvAxM3kA7W2QS62b5cRtRhu7JMSFeYfiTGS3aZftbk6hTNjQ5JpfTBh3YGwz9Z",
  "key18": "4DrtXmwqHpn2jQ2baaFcRKwXwVpEQj3orGLyxu7Nuj1xWcovzU1MXX1k2TKH7zvXLVTTJ7ccvgSE9f1BrAaehkqG",
  "key19": "26Y3yuV6YYHzrT4Zckad1D3RdBARnWGdjenLHaZNS18jZVgPbR9igb7nNrcM7wqSQcejJcqyAymsg2vPJzBiio3F",
  "key20": "d9DtBW7VHuC6QrPsZZMrX94ButSwDsLSBzr1QF1qPxvSTdgqEwGnqGzwL7musvYLb6oEkzzQPp4c2UM7GMgMWTV",
  "key21": "2WugPxXg3f7TgtcLHraFHSmRWQzwAoWqa9FjwN3szkCYzR6g16zr4onrMyCfac9oxaAsCc3GDtrQL2btTFrd7iZe",
  "key22": "4pFGiAYjgikDsevFYcNApNq2qnAmVUhWR5towz6iFGGAdKEdtVnkkWT47CUkmeiy6gfZF27T6wDLqrwaQEZmX465",
  "key23": "aAqHq55vZoBUD6ojDFYdUpJ6nagCYVWECTiUXdmtrPYbs5EC8DxZRQmt4YRVo9Cio4aM1Ko5STNVmmH4tntDWrK",
  "key24": "zNv3y3h2pP4q4uVSbojimq9mQYjyRRJuMKZDvJa3tVdbuDW4xTqoJS9pbTZ5mrc5qRaoDU4jfbsLAfsAPiN7H8z",
  "key25": "2ZCAmq1PPkMy6Q5wZt9qiP5UqgE368hWqjvpZDE2PhtfpbpuWG9FXz83PnAzeXt5EsjZeqKHbNJR7rdCQnB6te68",
  "key26": "5kdLHNEvxBo1asjUiitzDXEFdQvQpF1M7esnik8zTYR9J9k7GwGSDrkjheGFTvcCqivsqBQ4W6XbVYEgapyEjH9x",
  "key27": "4oX6BCBXs5Uw5whXVbwM7kR1yK4VjLfWdDW8Lq48e6JY4naaLcMgd9RvjNFqG3QZhWFjomt4eCh3Wm52D7aiCida",
  "key28": "4tnLjMDrdFcPFkxfnPHh9hh7yQkZtGyqgAoaQXekpuAF8p2Fjo3jmrFNvxbwUH4XK587mgDxfkf3fFwKExrUa1nQ",
  "key29": "5ecbJQBXZ11jy31Uu9FzXXvi1xqVuNCha6Y6C3aWD7hrhae9YmFTAXRc3qLhk95oLgNrSpNwejaA7f1H3BFwYtw7",
  "key30": "3NJcUU7sAZGtM2ac51bGkup8SxQ4CYu4ArBTd8QMRDqo9SFouXsKgZTevEuBSJQwBZz6Sg54Vggt1WfF3As3bmhS",
  "key31": "4kWVnBGf1U2YegwY6Kn6p9QKBJC1ddo65roFizhZkJE3P6ZseiBHeFQVQiax8WPwjw6gi7cob7Y24zKazJtwxxeg",
  "key32": "4YwFaoJNykD9M7HLBo6FpLQjzquPhkGJDZVjxS7ZQrdagvxcUn9BaQuVkGB4U2XHWGUUxTsD1VLseQbftfq4sh25",
  "key33": "2GPvoW3LoeiapJnGyj232Xr4S3pgQtQpPM1t7mRcYmySeRhMes11e22N2UKom8VuGDbNPfqBWwzxYBdBaQLLjz5q",
  "key34": "3rC5VbWwLcg6GmpJ5hM1cGHkeYvrfgeXLHVHGMjUM2oySvNZpgFpTgbGeXvsz4nqxr9rq7jsDLgEu3rtFR8c6EMN",
  "key35": "rzSgbwRdLsb9fTd11n8Uq2X1hUXZqScHW9KBbbtbBks7FdLVYC8kJqbgng5Aak48r3FNpEqzbUA6iD3cb3zob4n",
  "key36": "2uxLS5B5r6d2oCD4Z9Wyt6Ph1ShSY6nnBDNKXM8hqBGKBtkWTsYAfMzoQfXNXkP2RhmK1BxDtf7BY6ySJzHGoTxA",
  "key37": "34Pc16c6XBKvwNGNDXivZu4DjcfquJ2abF2VfEkq4XeXJyNPRkHyuXEbiBRXqkaF6YaKQ3hXzJj4u3NzEcR9kcGb",
  "key38": "3afC2tV2AJhLLV5DQ9JGrwarXVow1UNkDegpXnheAsYpbFKKHeX2gBKXqUePs7x8QDxD5KQYBpmqsADkVZUksXPp",
  "key39": "621TMQwTCfJrMXBvixzDccZempEYBm7SHmafBmxhvLAmswKKqpUqVeppozE5Fw7CU2YAS7XASbxBQ9MLeiXzsAy3",
  "key40": "3KbfaRVqbdJpnQCXf4EVrBYivoJacYxWQeLJj9gfGzxrwaaYnUf4qs2jC83jKYBXf6Jij3dk1yQxRqRwv7Lo2atF",
  "key41": "43YwA5Mk6gBF121ZbrBScuKH3pNHb81YumedDyeADmp9AqA3awm2dwaiUjqDCBbF322QtLC9d5uoXatRGvJjkbYi",
  "key42": "29DBWz9ChWdkvKkyEcjPDZkJ1MQuAkEdH3YrZMzxYvTp8sWwVFFHrbpXRZqXkznuUXPT6gy7xGL9MFg9tM8bRdfo"
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
