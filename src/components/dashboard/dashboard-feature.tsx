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
    "noodnx3ad7FpQkMTWf2JfgMKtU9zdZhDM4ELStP4Vq3bwUEVvKuwth6nuc6sYpurNWFMjLW4zPoNqQBzyaPC6Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BrQco78wk2jAWEEbUeW9rs9hB1byojcXYu7tZD4GzmGaCxdGf7qAeKfiJw8sAYnL41x7kiMrVURpM2mYecmUt3f",
  "key1": "3eHrxbFE8dZd2Cufga9rNmzUZKNcD4ULV8j9PF3hQtUAdob8mDBTwuVZUGSUH7Q5KsV8bksowhDiyNpvoveWdxS6",
  "key2": "3CWYnJnFMd8kpPmVXgwaNRLPF5SKVuWBz7tJEawZa74YAyrSkh45gBWxbhJhMVnxq9jPNMePjrUGuFupSeTgAghD",
  "key3": "stxxBDSAiuvFcACR58EavvRzxLpCqvtADjDuSLA393P7NWHpD1DyDsunL3a7XVwFTFqyewSo5US4Ym5LmymFh7Y",
  "key4": "3BXu2znKcAwzyM2UeJxveMaUdWVMgWj2SiZSZKBrNqak9HeBMVjDoADTNtQfmAH1EjUymHPPoLwWVuBWDiJm43HF",
  "key5": "67DXJik6hfK9R1YLXapLZteDmvUWRkRnToz5h64qHK3h7BnrgRnKjMRW8Km2pBm6QU8xwcBgSWBzHAweQSRs6bkG",
  "key6": "3PXxYCreQvagy2B6TMPGrt83V6sHaRVEM8J4KBYBA3TUXGoWmEarDndxecKdJ2u8zopdiB6xQwEHwpxaoJYc2u7z",
  "key7": "38jpLTdYmEEydxCfV9myxBbKXmoTAT8GK7jzE8ToVweM4zRvJNGwBLARMcLoub7uWQ1emg5t9x2VmsC1DiJ2PHDr",
  "key8": "3fTqAAnr7WPjkHzRYwA4wcZzzspmGRrT3TXScz9FXMbm7JYpRAYf5BT9HCjH3Enq1etQKNT5fuENMcXq9fusXkuw",
  "key9": "5aVDv5MUrVP1snT9R3zzZmMp36heKiMtyYpzU1AK32GfsAbESb6RSsUviFwuLCexrNaGtfGjijYm6wFWGxMFdQGH",
  "key10": "qnScjNKD1E5R3HRjuxPtL1fG4yTcjY2rNSttByC1xAFvubZSaqKDsRjom7x8bwu1gd9jXf9UMrHJij2AKggfXDh",
  "key11": "5aUn3aELnXH9JioLP1GobLw2YubyUcPUppsuWHiUBNC4VacW8q3dTfGXAnyhGU98yD2UpmckNvqdUoRnhf1dAvpM",
  "key12": "KVVo9WzBwyDr5t1x3TkFmR7boLGc7UFEAkMQ1roddJP83uDm6FpAAEFEDqfhCg7xuCnxc3QD5Kw9LDsAGKvjKAk",
  "key13": "3DJd7sAg1x7nXkXSoghJgbW6LxiGK5AoTpUfpS6dL88Azbe1Y4uSeMxooHTKorHQmg9LAY8TRScam7AHVg7HdZYV",
  "key14": "5411byNBRCpmEoqZf3mRHq3bTAe4az2H2EDLSP2PuQCRkKBBXDzKnXfWuZMgjEzKh2L6EXypQdkJmjgBNnVkCDY5",
  "key15": "5aRHHQnzek21m8o3zCZdG2TX7qfCUtpqqom6MFYT2DnteyxAsGumnJW6k4Dgeg1QEdLgKiwkPbY389fdts8fgn9t",
  "key16": "3kgTMvxAHuQrUxcyLosivmCEZnHSmc8Pv4qNo1fnXyieAFPXcpEm6DrfyPMLV37LoL7wJpFF2ao28YoZ4ruKhisR",
  "key17": "2qCiBcVf1LLafRRt2Qor3VKkiDxuf6cPNGfnA8tLTnZPSXbQTfscqPmC7VpLeVUP8Kxm6Wr2Fat7nKt494qnf7E4",
  "key18": "5FbYr4A6yVYL7H6R9iWsXTMjzP8CxqmSTFuzA4f3dGt2P2fuhynrTC8wqEw3mLAfxQvX2WT8ZfhCbARcTYDmU3H4",
  "key19": "4PxoukhtCarTPqVgubJx2EHeWyUzsKcs4tchMaKz7rfQaPeiyVn2reXFuWCp5SkP3xbYP3diDPW6xQJU4BLTyVRR",
  "key20": "5jQdsedYukSzrCCP2RnNerTeRtc6mgrEW4Z6HkC8gQbNVp4LpdwLSmB9wA6mC65ZCP1EVEGajb5NqB4JKWhoT1DU",
  "key21": "385TCFrqoNLESv53rxQnRCqWTQbw4WP6ZV3inwBhXvTfG2EUK2yFFZ4RT1yvn7sqkuiPguJEEFPzjL7wfUYbYEmd",
  "key22": "5WpwFvzxBLJFAikKPcAJaNLPSkmWBVwKA6VvjYTEj1Qz1z1yzax2cVe13ei1xQ1GjdddTsaBVueRfHHkCJP9ATWf",
  "key23": "2aX2YWsfjuiizBZEY3jPfHaSFRYyrxnUJG9tpHmG5RzTyCBGqspposnWcSFWhB2RkANqC6NmpCwQq8sH8zFLaFpC",
  "key24": "57SUqnRo3psWFVs4E2VpkjFwhzoCrmoXXKXHsFfySCwYALEyg4GCVEUWhkk6yJCfMQBXKuJwv3GTJ8EJoTFboBBr",
  "key25": "2AQMmMQ9ssM9VZW8iaCQq3jeHxGJob78mcQ6vkAHm8DZUGU83Pg9HUzSuyAV2zAnbVY5TomxJiDPDN8xwSLSWrNU",
  "key26": "32x9z3JMtkADAd4VKgeyAFWb6GEFEcsiALbW7u5BUob8jcvtfewKZTv6csKxnEhNPWmcUsmJsHNJzCUb3CWz3ykP",
  "key27": "5T6f736gTdnoY4r9T9PYwy13KCzo8mri8bPaU99CVyhSJoy4CaiT999nTrMaZoNmxXFctJm4EBwqfmw91e3h79pV",
  "key28": "5boct2xRYxSuGVcebhUNb7g6T9nsHTZkXTZ5LoXw8XvWpmtZs6BmnwWSnLWQhy3hipERbkQEvrDGsvR14Yu51tRW",
  "key29": "jjJcqwnoyND8E39nZmpj1g4pH9J8ywD43yNSxPFUywmkbpchdMdnXKArMZWQcLK6EuBVk5qpTXG14T8NP2HmNbT",
  "key30": "5u94a5NjusUXf7JpYp8USp8HwQ11Jz5hY7UBXxeF55hNu4ncu6CZwT1on6TCyTHRHnNfZNE8DqqddKkQSVV5rZ6a",
  "key31": "4amepuLFvsx5ZZSxiwpiyUgfFBz7DGGwY9BYEgAtbUwSeaUxrk4WCnnN74vDy78GbRbqbHH5RSjpeCVkUyLivhCy",
  "key32": "62RFGzPPHLzT4yenWx3njPohARPeu2o7yy1956sTBJM2XGG6APA2FN7ixxqH6CJ4Pp5mP28nubHmzNxsHT6vktRM",
  "key33": "3ZaGe9NCY1DLZwiNaNEuV3WrmwW72QzFGGm7mgWW7ss3mK2PptWiJBtQ2Xx3ZP1XyHfiAUKgEhZhJVtHJNGf6ZMh",
  "key34": "59EMDVoBbhqATrQhKGAo5jDhQrMd66rGXvBnqh7Sh3yb7t5z2R6Dzvfb1ehkMqibuPyrBHKCAsC35Gs22XKTJc5k",
  "key35": "mS1nb5nKgvbJLnddKDanL9Cv4QomWatgwD5b6jbfvze9q4qrgzXWgZorcEeyqRKDWMBVKDXvmfTyUYqFQhgboyU",
  "key36": "BE8ufc5hnq8VSgTeCT2M37tuQCqwLsGqx4kqLdLkGkf1DszDbtngSRYKeJVtPChj5MXiMCGV4DHBbgq4bBqdaQU",
  "key37": "2btoe1rRi6yHBp1PKTFCb6vrPzzVSGfFSz2XQhEEwW45U2abS6pNxyzPgvzhGCPSLoGjLf8ECjaFioe3p6GvZTir",
  "key38": "3PAde5s66DEgdD8xKKP5g17YCzrV5u6kzv4b15a5b3CP3K77DGtQiwXEcdL2Z7RcxvdnALLB71BngR4n89Jera1k"
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
