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
    "2bg6EBf5uygci6TqWQYYZSMgWhcJmMwHu7wjvV9iCUWFEQNSsReMHtC9erx6MzLJB7WnYjd8BS1ZCZ7DgkWKRR8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pz4Q7JmKX4yLUQGUVP6mpp2ACsDkFGSNUTv8EyQ4DCAdVLRSiUwPDgkhwckAS2Z3GMTZupXEFYwKCHFfh6JFYAy",
  "key1": "3q39t2KabirnRaXwm3EaUdJkyUnbtekG9ovSLEeTnaoJtc5CBBrFYzXhnXE9An18ujSFYvL7TYaSUXNYk9Y3XErQ",
  "key2": "2BKnwydGAJSgDYhm1umJnVvevDCcBnvtLuKFu6VEhG2B7TwHb3KQ63LYDEVeFoExNhU7joGxxV62T2r3aV2HmuPJ",
  "key3": "3py7Zg93znTAPfMbozpwpHr1sLVPHdPdHUz57CpGwMBPhsrGgRvCfrjg4tWvtv1pkQ8HK5ZHjF2ZDigUJH67o4q8",
  "key4": "22LmzkJ3V7SjEwmg59Kgnr483imRneoUTitJ58Gg5A3bdbTSqEhQ4ucjbP8ux33yrDt8h79Roqm6drb4Co2GgeeV",
  "key5": "38zvK7z81rcUhKWCSz1MFjXUDuSHPFbyPQHsMe7KCkuY4fXqcdqXwLm3gTuN1q2rd4R7hAW5ZwCdB5XPKrVss9ew",
  "key6": "3SsKYCc7xRT92WLakFsCRsfhM7gEG4ya1t4xfrw6rVGihwmToAxBAFRzbkexQhg5jcJNXZCsZtRne3czFPAPZKrH",
  "key7": "2WcKEGm2H8ENadyXRzy2faeFxv8tpWG1seCsPhWEDTPa5nwwTpCPgodWNFtYwoD8iyiB1bUMrgGiNAjs6hyyu8CR",
  "key8": "5sYx5eGdT5RA7eZPduZsEyrE5CiE9vsGjkpJZ8hYWSpVCqUqNHw48DKSAMpgAGb3o65cVixMHV6JBD92ypKeibQW",
  "key9": "4uxCmwF6ynKGSBGWMfgDUjr1waikX7VNXJfrWe4orctWLBTvw3pBXS1APRYQbYwmLw1F7D9XdJd6ensWZ1EURYDZ",
  "key10": "5ySfzwuYuLPVZb813keQXioS1V2D7ehhLzPNSiLZSCFWtuRqA1yeZokajfQcsN6QjGR25kVev2psGQauuueVd5o9",
  "key11": "i4HxF4CFwfLcELNCBVcqPgqxjpN35XR9orvjcYGMTFqTsHsfKhMVD5imQZuxKzPpCxMh11wfk3QozVU5yHgwtwd",
  "key12": "67AZcSvDDb9ohLpHAfSpRgsLJGQN8qjtGUWNkKtszDmg5auAwaahG8cojQPsswyCGqshJXKJ82ooje5LZsasxjbr",
  "key13": "55FqqyD96CpW4WbH3zyqA8Uk5tceCs2b8j1brmvzPWBvGoTYRVm9Ah3FbmeFN9GZozK7E4QCSSct7QfV6ahen2Ad",
  "key14": "5iHTF2Kf1ii9i6BEQCgw1NinUuyiCccukkCXZP4i3ffeL18JZCvUpqzNMi39mdHiqiZquPYzH8QDxc2tYTMK7jWg",
  "key15": "5KQmKhd3HuC9ojd8gZwH8pp5FYKS2rWcXobk1Tt8KqWPXXqy57wQiZvH5ybvcYir3fbpvu6MXRrZ5wCqWEdzBqvi",
  "key16": "5hg3NBwYhdyGKkUJrH1ZyMDEP626kyCQTSUC6rkkNz4mRSBkseuYiStdnALTKPztTkTfH18JrD2PyUz1XhvmYFhk",
  "key17": "4z2pATo9pi2bKvV4QATjc6r8hz7KjqyaMvvB4VWCHbSNS3rf87bmPuuFzpYSL9PB95VJb3mFyFU9ZbHLE5n5tUbb",
  "key18": "2PA7HPSWVzq4RjmG2GMi6u5bYkpjmUfWM4sDE9XpdXESrcicr7JXiGrHjr24wcFZESnJhh5kx1jiJvLCtHvh8Kmn",
  "key19": "3ATAeAEefgEMC5iVHwc6SMPLbRBJGYigZnudQZPsC7tnN5KJzJTErbFmZFLPS6HoW6NdFYVRoTNn3CRC5yaypc8",
  "key20": "vJh5N3ZuLDH8LE1QiM8ZbV71mZjVF4V5eGymLdackwMpjBs2drxij78pCd323x9ozVLiWL5zCh82XGM3VuPtBeH",
  "key21": "jyTt5sQ2XpGm1kc2V3xLzMKQT6w6wK3nBXBCdJTe6sTj7EUVDXRznt8g8f86x9MrFijX2QvNAtZYhG8r241ZPC3",
  "key22": "3kQdenDmnxRwokexBrwFjhQ9NDza9ATWX8Rx2BeiqCaLTFrngAB8Ea4f61maQ2iNNrUMneo3KErLCaUZbu8usfKf",
  "key23": "2FqiTki2HHdmvnWLhBfXgdja7r23WKmoe3tYLtfLVqAyrsR8hufSjBD6cXzveuCPwscvpAcq5TSbyGq1921g1bXL",
  "key24": "ReBAjRXbUC2n1gCvdBHAcfdDSpKcZt7ktCsttSqiKZs9Cg518LEK4zWLbkS3wR4oHi4UD5T1mmNLnKUaFcRUhVx",
  "key25": "4n8gqxEuYNVTpgH9Pi5tPrRXiWZFfDNgoYpwuzh1bhKHL5fLvsrUB481N1NMbfeVkxhAhfQrUbtVZaiPbMGKMXUL",
  "key26": "4uFYXbpm7YHdnJ4F5AC7xHzfdYWhnQPxPqa5pFbqhXzKCJcWWC2broca4FnF7pxvft8ua1Nbnq6cPktsBHMHoe7a",
  "key27": "4d2D4LeYdaDaYpK83MXoJxRc6ktVp4okcus3nWgD8wryMz761UzPRXGCgHvUaGg4eqKNGmbSkpAXfKA34i18gZBk",
  "key28": "3CnyynqSuj9RsDX6Qn74ystSgWnqPr5dyQ1X6gby1NxLKzFXZskmgAs132KLxeshKZ4N6HEm5mevbHtabPGXn4Na",
  "key29": "2yVkNYUNJTutGdihiarWdN5WUy8vnFu7K98Td2okUAHmTZFeUA6KWWBwQPBqA8sFjmEq7d58nVfKzeHeYhhBxkeN",
  "key30": "xTXpsmWX26LRfJYmnCHKtoXQjQqAzu7qxuzYNxoYcpDrZUuxF3p5YfdhP8Uti5mBCXEJJJgfgqnojVBZVJXz221",
  "key31": "3UCCStoaHCuuPeBGiwrt2rRkabQ1mRGhnokfDkKQfvQARAGSFwN8KChu9ui1mFffkAcWKAvjZyVswG71iDRW8UgX",
  "key32": "26JuXydA3C3kCErXLUvoe1csFHRg2H6PJmTGp3bgEgZ6kTFsypm8AcuxLrP12FF5ms4oFRXeYA4wsVfac8DNEQn4",
  "key33": "5FHgo87oV4ccVfnVRmL9Jz637nfxwnx9mu5sBCerAJ9PXdEjLFE2P8x29VfDYX8bxRVwD5iBtLLBMLgJUvLk6ggY",
  "key34": "wYAKs9prcZAbnkAEjsHCdXaApZ1nCYtvrNz2EDF2kNz7ioVn3nH9cYwKJHPXJ96mkQivvtxwG699UvS9ZcrG5qF",
  "key35": "2G9hq78YBwJXRh8ytWerfhLACjBB9YpTCcQsved2aj1CLkfg6a82AMQyPL8W5v8zZ61Ajf3To4n9nvbgrjrHXNJg",
  "key36": "9xVfUA4eicV2yNBPpiv5F78mzWB8ei4ErCR9PjxtABpLHuedBh7UsSGwzbj6PJ2sKpHLg7kuE8HT9zu5rY3f4cJ",
  "key37": "2TscdbahXu5WU8jfeNWj8K9S9vxRN8rBdeGC3DH6H67zUFRCgZYppHDScwEcmj58GC6sCjcJqTGw66AtznpfRhKb",
  "key38": "2apAGcrCjmYxZEkDH3HhNYTwSCiA2AjXmCoWdai388kEVra4jHE1Ata8XfLvjZrPDto8TXQBzRJQDPT2SgX4dygr"
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
