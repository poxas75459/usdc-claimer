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
    "22sCC68JZf8patVfove27EUsktC71sSrmsxqZuYgex7Xz8mPnez8NyhuUSVYuuo9h7hJ3YGNhULwNUkWBeQNRxA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MocUBJ6wPXy16sgPD3suoSvsM6UosaKk8nWWkMhewcGhTyDGr1gdAwNBbtKG3dzYFDRjpRbgFFHa6ExFycKfPDQ",
  "key1": "5NHFnipAVuTTski6A2kpVspcpMFUtiJxvumFerVZw1dnHGXaRuxWJS7r7i8VwrEx3KuyqqsutsEHQsT4uacKdyMa",
  "key2": "2NGsHpZiREuR7C6Km9czCgdGCp5WGDZ5695hPZAfAo8woaNdxnfqxoeGeeywqteTVa6TwV7VWb7bKeEDZU1HYspX",
  "key3": "YHFAaBDJrjxYayWEFVDwTSj4kPymNKndEyzv8dYfGFEub5ut21YqbEPXg58ErQDDvG52EPBFNemf7oBPDwsszvt",
  "key4": "4hLRHtTY3LNN2uU9AE5A8NzVjVpYH21ADVLUEZ3mZQQw9RtVUQJSpDBBtp52CufuscpvVYmhN6mVtRtk2DXzuN7Z",
  "key5": "4DeeN4r9jrg1HsW7CD41YGFxjnkRys8SwD3ZTi56N4f39Cdz8cJqNYGavmpibmwbHoV5i3eZXZLqLiN9PAPrWJkJ",
  "key6": "2zmMRNPhMzfnnxRjHX2xzGo3jkGHMW8JF6snVt7x79aLYQxUaWdjxkJ5aPC5SGNh4naeGvZBrEA7Yt53P3wwsXiN",
  "key7": "47qGEi79tWXS3ngRmaNgHkUm5fZ3rp4xBDE682cRsMFdVRYKxzMqNF8B7zethwUNPSYoqh5VoX3fyAsopVy7RFTZ",
  "key8": "3aahzHVwfTgTvWRTCazMD8iz2Z9EVQz6dV5EAxwAHiRBa7myJsNfSR3XtnMcJtNeUZq8Ff2atLcNMZAR79cdht8Z",
  "key9": "2U7hzvWwWPmTh6FrkBxmeDcBUbiTSYpieuB3uvXZt82GSgYvB7f1BA8ZLSnnmPr9axDWkVZUaRpK6b9eyPc5rssg",
  "key10": "3Lt9ajbCN8d8w35WuzX27ixw7P4rJjJ6hqhcr8vCJDn2ouma9ijCPeNMYXLnvpK7YFpRdFWMs7AD6pbTrq1Mijo9",
  "key11": "3jZNjhj69e3VNmHbjombAvi1tLkcrrHwMUg94pKiN5oYDfBobecKMLHK9XjAjEkqQQ8magqFAdAZqekjmjZgXhY5",
  "key12": "1asykaf8Lr55b3kbo4iR7Y4d7KDqA1ERRYEZ8RTXhabkwwNAkuBAT5carRrcthYbLNbD1tdRtSst1MRcqeB1tY1",
  "key13": "5BsFHWTjjnHbbHDwHLXeCNp8fztauTut3yVk7ARnnXEjgabBr6H4jUhcj6PJpzkXT3dVgh6w64XJv2o3Y5LkzLiU",
  "key14": "3j9gzHPyb84rfbgs2moEkxmDGAgZE7yZaCCrj2713Wf3cgA2pBiAiQkuvtKciickyu6HY2CkojgP6Uhb3EMNVaGi",
  "key15": "5c3jViLM9nn7znnmcFYiDz3sobvrESz5SB3jGZRmQw7Bue6WSnnfvAAkfYNTeWEN3u1jDBToYHrqozQZnGJxmLy9",
  "key16": "sCqjGiDVnr9cB2Lp4U1kWdH7at79d6VHvQTESZif78pZ5sExHEDvFVWRaDeo4fmR7xWjQAha1KDKdc7jUoVgRZU",
  "key17": "23joZG5KVnSnKozYGYceaVBoAGKCoGAQzECbs9XS5JEjMK57jLruazvbeKmbSuFj51P2EPB3JidMk2Ztof6KZKB8",
  "key18": "63EmSe3qnFaBXzmt2bfe9JNJM9RaykZviGL47LPQJMEZnJGnS1tooBsheSLeUjHiUxb3dmpnxVx63eT545wynM7g",
  "key19": "oPZeBZT6pvdr17qveHgy6fX7XtQZjex4coxdN8PMgRbGsPGF6L3JDeagRamaXLzKKEU6oS3nJmQ6GJ4biJZBaQK",
  "key20": "3AvDd8Y5igVTermSKW8AneQCL3wLEZh4pjwb6MRu6iQWudFNBTYm74mmvtM2PT5X2Ed1tah7bczo99EccSZ5cXa5",
  "key21": "uqYGt4GynkNFoNnTGEChdkvQVVKergakgwHbv52rTSWccZARuZXftDiXJVHmsg6kgWc1rpJJbR7Y9CuDhAHTzyn",
  "key22": "4TirqMyuAuDL6aDKPPHcF7iDkGsJwosTaNH2yL1vEqc6n7d5PyXrCfKZ6qxJsegPFC7X1ruq3FGFcjMm16A9KEqN",
  "key23": "3CFr7futJ5BaS4qZse4avW3qYTPTiGHq9U9WDUHsvdxNb3eSFgmrf1VHfQ7tLqvCMuFkJh5gR6rxj1gsyzCsc2by",
  "key24": "58wiMt43o9kB8JG1fNMdbfzaxWacn5Qdzj76WewQFvRZamEtaYCvJYKWgGRCsCigJMYpKeV4C5nRbi2c8UHtXBZs",
  "key25": "5z2T3wWFq7eycz9hPvhH13ZxXkZNncpzAxufRFGKvruC6mUoci3NoqNbQCxjZsFg3zaCJHyb2Xx1bFmw9bvaoxF7",
  "key26": "2wye9aSFFKwEk513LEkp7mpvNP9p7hFwBkceJnWfsQFs71e4jbo3oohAndZJ8b9MqQ17DNEWjx8J58hxECemT9F1",
  "key27": "5qYiGjSX6tBYvZ8A45m49fyVwSsq3DzA51rFhtRU8VCqB62gGGHQCpbkLHHAkiEuMbNWcWuDCuUE7NtQ7zUS52fo",
  "key28": "GyXMyvjE3RRSAu1ZhPxggLJNhsmeffsP4vY5B4tcVQcxi59N4xDVnXkC9CRe6H2FNPZXEFhmsD1J1kvcHH83u6X",
  "key29": "2rYpDNgFT34FxPr6f7Crz7Lav1DaqVUkMNPHr5Up4TrjnkHwxMXSqb5949mfGMRCAvvKHDuskCPf5qFkS9mFyDsP",
  "key30": "3MoLb6pSaTR87aYkpkRpjGq9zFHu4ZRn8o7RggyjdgsN6VV35uEypyH7mwdXK2U9CfUcW3uxDsmZkbV3NReAyUCB",
  "key31": "2Vo1rozPMBh7Xt8oN5UTzsR8UZKt5owbGN4jiSDaC9S6AE4RyFimbfVipyXm1wM13a8mS34b18vZY3QHqkU3jkuW",
  "key32": "3zNm3UkEpAYBfYiZefdxqPaJrELRDCtMQE2XQz2JqVGDqQPSJi3AJ8V26uXXHuF82vtU2z1F7VQgdRD4SYsQd5J6",
  "key33": "2sE9dRJ1fZdKEPjDJxUgmGaCBEZ24rgS2dkHmVEG8bFbjYkwRSQNFfXDf4H7GNp7yQZENYNFUQnKm7r2FwfrJBrc",
  "key34": "5FE49ePRYzkzWey67fGFns85YjsqCo4L75zZeRYJ719kVVLQDqMY7SaTpqJo8qkWotK2uNRhag7NVvdnbxcEAM77",
  "key35": "tDcDN2M1jfqh6cg4biZqM9GNGZve7mbM8ctLdkYdaovM3Dftip8trB7EAG16gt2peiA67qipsKWh3dTus9TefZ8",
  "key36": "3P6cCD9k24XgyzxjoMi3XFFTY9jvwaYkr7Aw3sYUBek4jCKHVLDK8Bvu5RSdJkXZKi9tZXKadgQtbMcQc6nGeg5J",
  "key37": "ijSCCwV2rrpRUpfirw1kiQdeCEpatJWiAGNgKqL8ae3dBgrwVFaDSM9NgL7VBKfpeeMkka7KdX3o5iHruEwM5jq",
  "key38": "2Qi1Bd63Hy6o4eBasi5xNg7vmBsws2isQ3zbX1irST86ytqxqBLjwFcwPN6yRBbG94WwUDQntK1j5NvFhfjev2mo",
  "key39": "2zsXVnFw9VJahJdhHJ6GbVhxHaCtMgqL19jLM5VALdG1bX1tBU5CRNafXFicKc8kAqUx2we8cQdTkWXjgnRt7is"
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
