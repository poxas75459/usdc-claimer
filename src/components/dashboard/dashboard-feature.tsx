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
    "2PEwbzbs1yi6GsjP2QS4XPg3jukBegqw7CAEM787yVRGxnmBDc9m57eoWR6VdYupAqMfZh5cPFcpMXr1w59SqkMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n1rtdKEEAaAW4qcb2DqmK7rPC4pktW6HJhktkJd9GUSczncakppr5VCGuo1kAYL4qoBcgsNXcKQbcdxjimgYtNA",
  "key1": "3NHaBXU477ySoQwtxCn8D6ceXz6QJPwgYJL5g6zwRk8XR8oruQXkfioRX6EKikHCqF7viVTXXfL5YPkpzV5bByYx",
  "key2": "28sfjHfXLDBQJPdeBiy2ZMLzJa4UW7s9Jy2XPBDnUxRgPuxpS27V2SzEsmVcNNLiWEMqTyzCLU2jwVqiEqaCjan9",
  "key3": "4jAUpVeTYXdT4u4RXeZY1UagQ3rnHwdNiJYW2NwMKPYonR96m4wrwqEkoyyxjpbzS8VeKG63BAQbQS5vdGJJdZV5",
  "key4": "389fbg9GyC36aGUM6UU3ctK4zyTFHWsjvypU4ZwLiMPaK8VhRdKMNgoDW19tLMa7uQwCAQLjdcGYsWFYyisudJQA",
  "key5": "34QXaEHgRaKDwqtQWrJudpLYR7WWwvdmEW3FVn3G5ZMGxj5pwShPUpaXZL6NBJMrWo96REoXyagVVvmDLUFcvrLh",
  "key6": "2FAMd1JQNqGVdW9DQHAwEaRjqiQYxgawceXS6LiLhDYXNniTziu2DgZhafDGw5yAeytdWJ9XdgPuHKfQ2PU11j5a",
  "key7": "2mamBFi4dmZ8FEA6YouP3dnJDB4tRVAHWTfHNZUwMjy5nbp6skin1AcRPwXESScw88HMbYmKib9aznkzkDxLbeyA",
  "key8": "3CK5JDNrref5H2TncTduHNAToUXgja3bHrc9B1NamcgWic6WPXpEDCXu1mxCPeaw2J3941L6KyKGgyg1zJTHHBdH",
  "key9": "3EMMVHiTCZz2qbzV4d94V22cZrWxoHUbZLpz4JCeez3NWrWNQ2xn5Q3uau71ytH5Yk7b4b3MHPTeJmFZwhdAg7RH",
  "key10": "4jRUjzkBHAnZJux4aCMDQ3uRtQfDtpPWeZZQ6dXgdKh8FfHLfrpycKmUMnrHcr4FApt9AodT6okMMiEaPUek2ADW",
  "key11": "2csYSBD5gDnUMqML59QuPJ7ghVK9pfZEoyw9hSLnidR36edh9LQruLHy6W7pmMy71ZA5EwMK5RTVnFXKfwUUkU1f",
  "key12": "5BdZhxXd86vz68PEcT8Uc6958fWzKxHo9t9wCM5dY1LhZCg8F4ATsNVYmf3F4cfZifmDkoG6XTeYnNHoBuWNGgna",
  "key13": "4Ts74XEbPwH8VkykK1DY7oxYP4qfbPFBi5gehK2uN34FmkuJvoojBgWktzA3TLqPVC82wEK7HemPmpBPd1PaFaDc",
  "key14": "66hiAyeuFiTi6RNrKaqPqxCQTbP2VAVnfGfK2kMp1N4k8Mg3CPYXgZXrPEvsdmahD6NekMYVAZ2dRX4ocj2mP219",
  "key15": "3hcBTEH7rkBzp2TwHyHWcBqHje97gSEgZx3XXDbTmin9jTG384zuUnR8WF1eLLKHffBTiQF8sQcobj63yiQCt8Ft",
  "key16": "2HoSukcUmbFqH79BmmWeSaRuiLNnxuXSGrCJsDXyJb9oyACSwUDyTakb9RTJRLBvCNQn5rp1snJGcE4mNAAYwBga",
  "key17": "5cfXs6yTABBKdZZ8JuxKdvNFR7DAWw3C8TkHJQUmBeCzDbd3xThhdK2PzCt6iVRcNieDMvDd3hRzNz51DGcSSujH",
  "key18": "DQWZSdSuPgCsvxRU7x2YMMeVjUuxLZrvq2PYfJfvDPsr8MbCJYT9dYFgCZvzap2hTXYiEYcBEUxEbRvboZbxd5r",
  "key19": "FjmwzB2FUP5oDedVdXeNE47AFmC23SxYF1smoAQ8qeEjFKgzoNGaCWkM9cEEHvEM88GGEa11TYjCt3EfkM4LLkU",
  "key20": "2LiPZxJX8LAUUSr5eC99U85kXvTituJCpzTL9ZP2M5UhtLugyjoUvC3AtN46Qq7oHaJk6i1ks4y99RacTNVWqnk2",
  "key21": "2WkWvrTHkauXfXKeskKyL72p6RGoAF8fa79Q9q9hvLqtmzvFM7AXUF7mzBGqfDTcaU2aNSqiqK2y6D3uZRL9jCug",
  "key22": "3ekJZgxLq3ipjGhMzexSef8xoTGse75hVWdCPetyRGH346TsBQTYqwL3SvPE7A5sP5eD5Pb3VMiuw3TTo7xKdRN7",
  "key23": "4YrpLRoM9cRHMvX6tHyga2CuZ58gczpjz5vNQy4gNoQ1qTJiDniu2BTGqfDHfuHrkEgcdxeRbQ7Y9kCNcjexUZ81",
  "key24": "5MiYYf7XmzwZwU6h77xPDRwT7xh1587W3ejwD5N2pcD4goW2Q9P51ZpdpWqUti1NZB1JoaRC5iuketZH4vdrxc66",
  "key25": "2bszT83dq4gPu3zvYh8HpEsVG2qFqNfh2MMexbHcRXEH8nqnVhihBgaAd8NMBWnS8WazjeW4Z3NDetzS25TH2yBx",
  "key26": "2TWoEbaCsELAs2uW1eabnSxAU8mhqZ15KVUaq5Gpir2iWh2UvnHVEeLeohvqZsSps7Q16dnB5LbiaYC3rYZKP39y",
  "key27": "2WFa6z8N2YqhPugACLhbJKC1DWMW6ouGHPkLTAC4kQuhRbEXnUDhDzRkKuAiAHKmGP9XwZaiy5YTkc9QXJdMUUAC",
  "key28": "34KiemneEB1Hwfk1dcDg4kY3ZdZ4sTepExg2ncJZFXABjxjRaQ8kWkLww3rniJofiRUHeWx6TmHHPoYn8uQxXzru",
  "key29": "4pBeNCX4MvbaavN4Yb4kEjHK9g2NhdvEtk6ncG3jtYQawdvEzZFbb4mANGhNVigdGnnQg4YrqNm56KhEiSBigexc",
  "key30": "pzbf2A2uHbBtRrEdiNL3hsZ2KXyfJ3WjGREVT4Ldo2KvQjkxBjgyN5MStM25WNNx7wFQSNt2hRHkV5fvDRG6mGv"
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
