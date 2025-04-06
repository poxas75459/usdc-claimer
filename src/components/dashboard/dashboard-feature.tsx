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
    "5Mx3SSe9ChJ7oYXDG3Yek3b5954dc2wyTriMJ3BPpydVn88Df5UgSqhCnBamrWajohZ1Z5joH9RxV9R1ZShvs9r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JLXpfB3U5Fvd4mhQhbnSLQjugQ54yYDnV8UC2jUWm5fMWoAKNNKy6ha7G8AQCiFwvDLkg4DMM4MEiXXxrrqUDF4",
  "key1": "RXJW9tH3KkqsEwhhmFJjYb4Abxjqy1LmpVSRvYbVDW2Gyogr64EbnwM68ju8uAXedD6bQhfA99xfwzqaLmWmphg",
  "key2": "3g2ryVzpzNpH3xwDcCSKjMnHwSPaT3xsBuzW7Y6qsgPTNfVUQp7qmvxozNiC3FUa8Rf1wkcWRGzd2LPVUs3A1AwX",
  "key3": "5B8cPXpUMWXe1vPAqgy1Tp6BHxgZ5ne6yHMfdrARKonosXhqzctcaYvxdsQsSCpHsckUbBWKP8JFu97XQvatsaDx",
  "key4": "4TAL5eLjic2XdswLPkQSkUNnP9FCW25pPFUdKvshTLjCEGpebJKMK92PRm8rbm4aCtQbKfabBY97MPWo5DAzJSpQ",
  "key5": "udmQ4iMwVwc8syD7hVfjs2ft4fqmxo88CYZFPsjGiopBZxddicnYaDBog8EpBLwKXJ9SEKMybDgAxnD5T7KJE5m",
  "key6": "2hc9u87mpgusHj1mSLYeWGJ96sohugaRzbSPkruqoHQ3ntozdDMwhTUA8xDpiKwYZnTGqZwpt7hG6RzrAJmyuCgP",
  "key7": "5fFSZeyEysTw4nVsyPRMxrZ7Bhky6ER3Lq5SadKdjTmXqrY78bviPXcbxmr9DPoz5G687ARteUU7oLZQrosUZgTQ",
  "key8": "2g28aZAsqW7wCSThMwSJ7w8Yfr8TYveXA7bKhERp4rCc5QSeXxbt2F5Rb8HR6GNo18xS1c5gLTs1zvLhDF633y3x",
  "key9": "4g7JWVMoHMQb4t8vMfv6XDpZ8f1NcTx72nxQVtmtYCG1BVkLwariwWXj1bmoRBwLMXx8C7H1m5492wLWoPJPeLQ4",
  "key10": "5DYucfL1b4joLvhVMJRqeaF4tQDtJCwDWHgWbWRood4kUxVGsYFfwrnUd8Df2zqQt8Fy17C5UwvWUohcJtrYNGYd",
  "key11": "3akmjZN25KW4MPmWppKrgv3GPL6h7Gm27P3feKFMmUPCpTr1aoPVXqUwLgmeuWxuvwLefoQ2hk5WntfKyeXhtQwW",
  "key12": "2ANQomMmyZzuHH81LDWrF2ryHuXZ3cJVKZSRHdfHebbhLcERMdoTmgycm2cX8m1oNyv6KCKBx3YMbAszxaD4D4Mn",
  "key13": "3J2P1dPzUzX4qgSm3U3LBpgzEXWRjAKzDUzBrMpoSa1DmTWxAgVi3W4Gb4UrZW91JGd5oTZZWyRUTeTWpUFCQocc",
  "key14": "2t3x7RgjsDKC7GzfcEuGkoYopsrKhduq8T9yj5Y2SUJdFCpNVvECDYYPnyVrQRCwGtF6nj6afxZcxc4A8ZAE7Grc",
  "key15": "3PjJHSk5vQwGt5119HERWC6oMSMMXNge81m1KLUewgxHSBhPtaZZYWnJeBk8ULDGNeCSBjAKjXBp2HxF1bnVJNwV",
  "key16": "2rnUGY4HtM7wuP4YjsqhAtWJ6KPEDc28GzFkC6Ruo4J3FUvysDFhoX17BgbsVDMZvXw5igTgFPfSzZbx5hEZpDpd",
  "key17": "2AT2CGg2FnFsavLjeoQMFXQdUtWqA7G3ak1bdDHM2ur37yxzNrJeYoyFTknskLTshyDtYdrFfkZyyQuov7XWPj4x",
  "key18": "636a8LF79g2wJ5ys4sJ128deeqYeajn77L8JwhXcDLFdqU4RuUS3tcXYDARaHCudggnao39g6q9LsTG6HWVnn4eE",
  "key19": "34JJQ2W1AkgPTnsq9HDKuiZk1wrHzmvwJ8KA2B6mpQQcxi6bXqiXD8Xwzj2F9JmgA8ZyWYgHiJUKnxbwy4MLNfiN",
  "key20": "5VGxqFzvUr3Xwb6vGEWLTbeoiBeUEe5E5ehLevE148oWWRPRfzKnB5PKPN8U4WJcqDUN827zHA4WCuD9r7qGfmoZ",
  "key21": "4Ty85GuYhHvpveqDRTxiXJ5bKvSUfJyJdohuNVM8quNXDbC8LcqwM3ptcmkwNZeqiD83dgmkiLc8AMYdcniwoPvj",
  "key22": "4NY6V6NX5iteHH4ApJn7pPcyyetYdr8LBTBC6kBR1qzQuQb7NyYDEApteVyoyq9WUTbZmXj23oTbkWwUcdJdBBGc",
  "key23": "2pNVkNP8VcPNjNDq3gRB7ebhQfndBDUhi2EK3jSDwSGfss1mcwUzsEGSfa8q6UHcHRp1yyGwvzStnDwn2hY5WbVD",
  "key24": "4a6hB32qT3qJQZmyhagZLnchRyj8zYJCokNGtYfRWLTTCbKEAQs8DsKSW64kq1QUUJTNHoyuJDESWvqcAUa7X3ik",
  "key25": "5KE9XpxXEwVNw1WX3RNeA9kLnPRFqjLnqWZUDcuGgFXGGNNq1inbKzasJgdX3TJGMq6GwQvaY4kFmyKd844xCmph",
  "key26": "4NbpqhDiyHXMkEYyd5tmX5yVb8BP24ooxywqUjysfWpdZnUP7UcZkCVxWWUF9Hz7Sq6rSTbNywYqQWG98Af3xWcQ",
  "key27": "2JDL4cv9V8fMtr7eSZ1v8BoqkYT8n7gG1fBHHcxMPvhWiGN9pMEoMPQwNUNQzgX7gvRAQkULK3VUfzT9Q7RCtXLM",
  "key28": "4ncUp3VLxXdPneyhEDEVjRWYwhvkZk4uw8E93qPWuMrkKpNsm2A7XEfc2fe1Jyjw9xKHw7y1jgGj1AbsCU87CdJd",
  "key29": "5Ua4iTD2TcW7HNg5sdNLaeaUVKGgZhCYAwZMy2JgvsqJcnJMRLo41vPV7fVL1Gh311vieaPjLCmq8Pkt2Lp3ug5w",
  "key30": "55eYb2LWTkGvRFmyANRskeSNNWMQYbTQ2sKxzhBd8vHA8tQWUq9SteBtKHdJNf8nX9x3cep6wPQjru72Epjapqsu",
  "key31": "hW46cZza1s522j16yGwd3G2aTjWuczWFodSV3GTBtAuVetP3xxF96yJor3mezf86CYJTjAjN7z9C53JUPDXsJny",
  "key32": "3Bxnvx6ApYBPJy5vLBnrZpm7b77QZMDR5DeiLRWbG69JnhRw5emy7BcGbD8HSNK2gnTr4wa9kuBmt5nyKDcptan6",
  "key33": "33ftx1osNmZfRk9AgKqLjxD33HCdJo3EuzRJ5kgZDiFsu6ydzQaBUVVh5mk55KJvYswoiD9zELA6Pt4ynhtKKSgi",
  "key34": "MhSdDncCqU5hVGPJBWRTsAtfbjGg9PY5JsBF6NJfS2VEUbHZq2hDniT9rTGwJ8Hiy7qSsezWjLikZTwCDeGHHqE",
  "key35": "3R1BdvpFiSAZXTxy132oJzY8ZwkmjDAiwW8qbvmg77dg4AW1V6GGRxm5jntiFZfodHyYNxB6GWEWZZVG5cXHsefD",
  "key36": "5SrDBbSpwNid7gXZ4f78WjrtAo6mB5Q4qZ1LPTPWC6b6AhyRVKwgSXDbpqs3gHgG3jeCgqQJ6xkxByzTaTZHm2ki"
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
