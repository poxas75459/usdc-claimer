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
    "3a3tv2mWzS9cSEfbWyWECpAz8npDZV9qxj2LrEc7ehzE8dJHbiGVrZfuvKniRoCybQwH2QTz27opveW6ud7uBmeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cz3XTmCdMs6xF1WPmXnvp6qvJbbmszXmfzi7c4LmefquwJkrA8jowTDjvdKAqDmw911Fs45PXzwhYBA6UZSCBwS",
  "key1": "5FYaKX61vTWaPzruT2Z3XkW7MyzdvkkkSsVEFu3kSPyfWyGLSr32Jen7xFZ7E1KTSZiaYg3W4j6MPwYVSajDbSYZ",
  "key2": "5WaR5Jkn3cehbYUKBi9AupGHbr5zc82EDecRqnKqENSyguh6FN498PJgLNnP2cAPb44UtDw3BcxazLaBRrn3PKwH",
  "key3": "XE5T2S5WWiteHMLDSG9W4yadvL3a7aZP4NJhMivgHpy1vRjcuhurnNuArNAsARf41ofCfoPmXGEYYbN4rWKuvJP",
  "key4": "3R4HoCjEZ1gD4wDF2tcALGiMzgVN5tNv7CNfaJHtbFGUkmivV1r1n7B4C76vhfj3t14nWGqyv4KeGJ2zerQxVWZx",
  "key5": "WWAeD6B1pTMyZVJweSYA8JkVuvamC989BsXnrSo3PG8soHbTUG7PRWwAbcbGDhHf4thyJivTAR2YxYr89bPy6tX",
  "key6": "5PYixTbQRXoeDkAH8cL8k3p82Jf1pjkwb7W2xa3b6vu6WWBeT8R37BtpxCCeiEMnpR8hUmSww9ikCPJieDBT1ib6",
  "key7": "2nbDZRChFEbU5BiYQft3DrZUrx5yFFnue4ydDYUK5SPE9ynhoYSWNg9rvTCE3BS86xBXC8ahRtAK4sK4iktousKy",
  "key8": "4NvWLeSnCau4ormHr4g2xfRxrYGaMUEXHaoiM34whkCA3szqKLBTK4U2nMqqdf3nXYGkYk3dX8QWfiaZT8Xdk8C6",
  "key9": "5eZ9QwXnxeeqDWUXnJFFVPWsu8rngt7yJmftG6SLtPv1oUPwd1SdWkbupqJCWt6SAz6dJkKdmq7SscaaJVTgGUoW",
  "key10": "5RBRZen6Lx14hqr2usK2kB5RkFwEWMGt4UNfLBfhUPzV3Zv3dMuJTJUMVmA3nHcjoRsULXMNMnyQh3ikvkxemnEZ",
  "key11": "4pr13UdEzizzxCNvxF94iCgpQNCobGWCtZRVzcAGNVGXWHxFqTPaTvwhjt71As1XNVsSSgeB1tjV2N5SuFGATsAs",
  "key12": "4fTRy4gegWAPNir7vFyfg6mXFLbfvgZ5WHao8YEzb6ULfa8mgpudhaqP6CcnVyjPJok1hsQ9Lr29VCF217jgjNLs",
  "key13": "3D7u8JM8gr8Xb2iL4X5Tb8BahGEE3ZUdDPDWpwx9KUSZ3Xpw7pgBrg6VAoR6b35nD2qxED7DXrtGvmvf8otzftbv",
  "key14": "4RYWc6qpT7W1Usgu5ZQhuxbrGZZjF3qmKdcLEnToQvVcyfigtrHGEiYK82oqrGqvtJqcQzfY3Dn9MSm46G9SXZ7E",
  "key15": "nL2dymEbZE7kzQALe5BfMZ9g89v832fqA8HhdQ7RqWwUemoE9NpW1knPEF5s8V1e61iyrBHMUgAx7W37t1gcfHX",
  "key16": "2Zx3kNMtqZfzCnysSzZQSazHc6A9weczu2EiUdQiGGqL1hFF9papqLJ4zmkSXWbcWyguSPT5KLdpjmuLyCZ6we5",
  "key17": "J8EZdjVe9dEAkhGTPbgTEgo2EzwsUVEfm1NT79Ba7rc5dcDxG11PgmoFZQF4qvDkT7pQ4yYRvaSeryBtkSWqGoR",
  "key18": "2ny4kM7rwWyaR7DLohHiHMN1h5NAU5P1TpoJYBaSbntPXcC4h3wC6PCAgrxynjn9Sm9yrzyRWMXpt3FVFiXk7Twa",
  "key19": "454W4B1S4cvMRWkFLDbGY2owi9goY2GSS7AvaE29w4SASUTjuarQPa9LZK7p9opebSw1C53RLo7sTUcDHzHiUDUq",
  "key20": "4djsSUGpmJfcAFqMA2kYbNYaoS589EbUZbsQR8BYceudYqYGqPMWojS1yb4SCqA9MaYAA9LB2nZThmE2JTEs7M1z",
  "key21": "5a84LTpLxTRt6yAGXePJKuj2P7jQNaj2DGTvhLUuCHYDiuGRQjv9YRaMKnMa2T8eT7Ve4fC1KqwwkL5YkVXH9zpG",
  "key22": "5GYu69LnZnqgXZoWGFeGynwte3xaJZ5H61xG3Q2Cj5DgfuHNN4Phb62rttihbd8xg1hYJB7fBxEeJ6b1Axpzjyr3",
  "key23": "P3gUaeqcTecvVTknnkiqFzxynT46vpf2rjxGnu49KGHtjQRYo1gJCLpAwGXPnjSEsBamotnEZsiFW9NtNPHycpb",
  "key24": "55bhPouPcMsH5RwxFsmMww3omQ3ctBFVCxhY5mo8QaDen1NmwbexBTvawkB8cSsdjwbpCHfdeGrukvQ1reNM2X7s",
  "key25": "4UCk9GZkSfHWUcZAi1SK1xJCVgHw4rZggoVSMy6psjsZ9FquxLQ2vsy4Ba47VnzvrJV1UoDuoKxWhHi9xmv1FKKL",
  "key26": "4479YTAT2QSZhREzkVFVjQUYH2uWQcPuj9sFjAHdiS1TjKHfarj2qkdzL8RQSgstZtwVv7daeszWSQouLvoH5fpA",
  "key27": "CTK1ro7GoEg7LdH6iPi9h3HZoBo9yHuxWNUezzWbvZrwkRxaTXjd4SyAZmzjDs2yx3CSHzVQJXQXcWdFJaYiX7w",
  "key28": "nm4t9DX7q2ZVUr2oa6G24hTrXpj7uGu2J1ucXRNXaCD8VDYpRH37wcVL1nRmNCtV9vfy7jbZn1F8HTDC8Tqkvvs",
  "key29": "3uhkioEnNzFyTdKcCXG86bFetLjtUF3hQMqyUHHcgjGi118jbXAoUTHRsawLaWiL5mpJj8uUZE4ANbc4jVEoeHuc",
  "key30": "2tmcqhSCqvyvqvWDrGNHqCYTForgmMSJGQTL6YMHMWXuDSmQzr6Yz5TP59XS9EV2EAfCQ12RHdUQNPNat46tnpXE"
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
