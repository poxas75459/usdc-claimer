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
    "2GNQmoaJ9oycidtc9vGtejeEfSbN1NxGAaqqfnY62UqL7kgJ9HBHAhGxHQuLkhz4MSvug3EyHGUJTA5G5cZuG1sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uvktcg8gVJ81tpVfEaVttKBooabxNvYwrfawURpXETdfwK7jU1ubMbH4sszA38eHVsPvoymEVAWjLuUp7mc5wmY",
  "key1": "5cREP9Ue7Epf4vyNM99hJ3eB9D3JSQNRRJGyL7TRPmP6sj6nVXrVPNMFrG7TJs1NgGQK5qoNEGBnjfPikivub1hn",
  "key2": "4hktUS7CS9PDhRpkF7nRsehxDSgQh8CqRb6e3YMhA8GSSxLUPZ3vj5yfEmNoaPquq69mcZ9PEnejB85EjUvkctPj",
  "key3": "mnP83qRS8S7CeXGaCeWSLKYK1DLUFhFEctqztu1RoyGW4xgpE7jsLU6r5HsBoyHBqmpVmFN6VL1qDFTD9PFqQS9",
  "key4": "34mJQ1t5fTCzH2DqA3efW6mC4SA8pisjSmzpppGDNpXdn2Nk94LZNWwqRa4Ro7Y9kjncbzFt8FrdonEGVoASz8Nu",
  "key5": "55Nc1pfA4PepbLuAsug18bJPsc1eL885DMdcvoCTA5RHQUS4XcWj8pBhby2fyapqhiFU9fgcEak8XAR7eiPN6kfF",
  "key6": "zW9ioFcnEgmXEkySF2zkB3GK3LJTu9mSyTAFAGJit1k68LA1LML3bUmZpt9iRGXCVFoLTV3ia5eTSAC2LXMRzu2",
  "key7": "rPS2n8jN1RRFtYWJbMW4WiDexRSN6k8jQ4fmeKY4JspRimTr5PQ6t8a1BFXBhWTunWpLRG6fzeDGiG1CTVDmERU",
  "key8": "dN6CXD8CSWZ6r3EoCaprmadQECik52NCsWS2PWSMiwSMndhHVMP6BLJKiSPJJJD9KdLXoMVR4goTaC75xNWHyGT",
  "key9": "2c52FwdW8HV1Gb5cNq42gEfh6Y4ePpG3wQKfg5MjNp9dXgNvU1CQDLVJAg673ZMCzSjuAdEgzbEcjMzm5epzL5jr",
  "key10": "4ZSCo5BvUqyjMCpvVUN2s7EBjwLDQT6gaBqGXn7Lq4VpDshhtN2vQyFVx2YzfU6WuyBrdwXmevawU7h48A9XzRu",
  "key11": "5hrR9JgQ2r2A2S6s4cBaRkmbKxKzeruZXHoBE264cJZzjFvhFnychoLySuC4CRFEdqaU8S7PMtGkHRYsuT7At7wb",
  "key12": "4zpkoUnRpCRR2dq8N29w1ygSHcX5cAmdS2djaSzNbXfKgpn5V55qEw9YATGnut6tc93Dj4k2hEy1Phd8E92TcToS",
  "key13": "53YQXggCpujQZBXDg9ByV2MtVNf4qiJ33HwCn6XTASy4Up6gWmY8MgdXyCPNCtbnsLT1HfRTWptoDLWewqGVpCyM",
  "key14": "1XmBSmSQPhFCfrsVSe8ei64uwzWMVnu7DdZSVUmFaFzXmF5aq7RJzTF8tqEP5AQ11GML6JfKVWEt6PUZzEQbTtU",
  "key15": "yqptaHe2zjtKS9sLTn91PfXQAVqgixTP4UNEuGowuSAJHHEMCoibBSbaCt5jvRefU8khupPXYpeANRGSq1257Tu",
  "key16": "3fGhJ7MFbpiRQaHF4ksAaK5dtWt6BGt1CdG6b8uiveNBe3HqnFWREV5Uo5B2X2pwaKvcchfnxoAMfYY9R1tjchH4",
  "key17": "5AzZX1bWXk1ucWJuCSptbitKew4AnEL1XTWhpUpAFzaJHAETe5PZr57kQ4GWw9EUfFxvLfA1KT1B1uxadXs2KPmc",
  "key18": "WgHPNKvbEkYvNo2DZCLHjc9JyByaGyEbsCknwrVCGxh5sjW2JVZoN37EyomzWHw7YQNQiaRSGDm347xxqkTxxCk",
  "key19": "5EvZVbtgUSXtrzz2Y5YapMM5sFQKEpkd8kcDjbVWgCR5Psx1b4Jk7unZ54ZkeD7ptmfZM7XVDzrTfFzA3nhdHAx4",
  "key20": "3XmoLigvMG4Hnoedk6JYNbtP4MtMTZ8FgA9uZhHMmNAixEmsv7QsYc1LskuuRmxN7vR8BNWLkBaSUMu4XVbZ4B8c",
  "key21": "3swGy3MWvXMMZzuYZGnbU9b6JFNexE6HR2SMQU13aaV8HU2YvUaf6qnnFK1SpbwwLkoDuEhGEmN4ZHTjp3Ui3BhB",
  "key22": "58Td7DVfyyUP3YikurVnNgCxSKZpBKpJHXp1u8p3N569WwCwF6zigP8GKg1uc8bbLyhARsbMyVuVGeFjeKZLgurD",
  "key23": "aFr9Y4R9innMdkCsyKkXWwkfv2nFVBe91w2FbHy6thJBESi5sVBkLK7hUnD9Lqg9px3GBHsREgP3G5dSrWJctSH",
  "key24": "3hoes7J1B3Q2WVKvUu8Wo7dq2HHbq6eVVcW83WCTtcr83QZCAGCktguKkT1iHrP6gfMULNoPHnKHtQEm9hPNnCnS",
  "key25": "8aYZLvCF2GpdC5rxnDSdSrFVSVeSBDBGxysRMs9RJ8FsqfNJBin3GJxbMVYVoJMWVicX5v5R79WEZCQU2pB6oHm",
  "key26": "4LKff5ddhDYjGmmdezucx11seUeA35kapB4HCx2x6eWWQF8cXnTN3YxenE6fua7RmbpESVyS1EjApBuPwqGb8mXJ",
  "key27": "3VXCaLrrQDYJjodRhMxD1K4wcqdMj5qiD8RkTnfwVAhwHd5WHyvBjwaGaNX4JqghNc2HKNvvSLzLXPoE4fEkWDaz",
  "key28": "5ZzrSYM7tvH7pWQ6y6SSVB4fSfqP6KxZ7WHRBefjv8CB8pdpSjf9ZPpjSXPrcxmLzkFUF5qXFNsqaTErfQPsNkUT",
  "key29": "4iepurF7NJGXxEU7PnxhQXRZe4WhSSsh1SFdUATC2PQe9kES2XnwCWCjj8FguKinPMnWnq1zzdFhKRrrDDZYfu4V",
  "key30": "3Q4t7ZNJnAG3kzKSDvjCpo5QuLXQzXkJx8Znx4awKt1ZPboagqrpMUdSyU7e7D398ECpt4vBPjQCe9kHdv4vfDnJ",
  "key31": "ZLLDzkHys6vJZcYKyzGaM6ohfhSQ3thnETZKKrNJc1TAzzWpnwv2VJky1rUxDxCj5nvpPvK2x2dTX6XJUXGcSwz",
  "key32": "48LdNZzjkWzo93mXEuzWo4so7PdNqjE6SfcouSHpQNi9BeXy1vYDKTtPxJA7wAXDf8kRaQP9231Ypfr82sGgJqag",
  "key33": "3r9bvqw5DSRiyKRARCWG8hs5kjpga9fFH3Hqw6y6duNFZyPT4xMfTXxPBwWqFW3ebpnJag544E42TZ6uYgSumpV5",
  "key34": "5JfyrSojKghEAGSdqdrUHzSQsde3jmMh7qUWwhtJEQbeHzfEU6KSPNNUp3fKcTkQ7XkBGMYyuzPRRybmFoNK9tgT",
  "key35": "3qvbkhFr5sQNrPK2e5RCvEEXX1g15ngTeJJPcpi5tHsHphKjtjk3fKvxpCAjgyy9zBAq3wyZQf9V1H73huN2E2s8",
  "key36": "5MMmka7QH3Ava7mZ43RJicqDsL3Xpy77BwFTrqnBtpszdV2iVxeiCWQTQcgEqipvLn2nXV2ngt9LBntZZsUVy22h",
  "key37": "3ijMT3byBRR1uuLUjd2JUKseK8XqNDTo8y3n2tV7gd39jVfvtcVfaPsrV3GzsY77bWGQpGKprLeMUQk6j7yTCKJY",
  "key38": "4yb2cYyLzxKPD1KMTpEXsxcweyRPcf2DGLjWV6rq17gjSfPHsabiGRJzREBmzTMnjcRGHBoB1GiWxBFEdM6ydk5E",
  "key39": "5zrRb9nX24vMGbBTpVmZ5upiTFB8EYTL8dqNQpTN17G8WKmP4FbGhQGiUyFwUU3qMR7G7Xga5AGMr4sXj6W7oxLY",
  "key40": "BEUhwxzavUSVoeW27exTQcoDMegsp3v3j2oZY57QJmMdvuJPuH4EJtW32QaqQ5cZnKpuTTy3tE1StSu9beNPfCq",
  "key41": "4nJPfGRk9fLznqGLAKJiDXeqeEzX2GMqY1ApCn7MvaEuvcagSn8kGnqk3g6G7BeiggnuG9ASd581B6REA73Ni1ye",
  "key42": "5Asu4NaVgPGeiw3Dm8WUW32a7zYJLo7vsK9oT88z6jMFFP2D6UfPRteV4m3bo9eNtYqpUNoi7Sj1GK2BfD2KQBrF",
  "key43": "24TNTSSCKFun794EJj5DSpEgTuvQBBN9ro3uv24HcA3SMPVwecX2W7yu5DtKkde2Qxp2fMQLTypfaWCHgg85LrhQ",
  "key44": "5cJURVJPavWut7c9LznEHQ8iaR2dnZ1tubZ3jzY4GH6GewjXrhiFZpF8hCVwc3c1vrk8f2LNiN6TsuboNg5bdDX4"
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
