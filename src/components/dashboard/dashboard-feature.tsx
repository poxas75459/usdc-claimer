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
    "3uXtVywtMWKoKzpYbvLgMgxPRNdW8981bxCgE3YNHFEgH1sR3WCoPcCoqzkmJB1mskhFLp13TLSr1tAqSAros7AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5omrwKAxbMmgBdGeYZGKGyJ5y7sfhT8pSSYj6225ZXv5Lat1hUR9d13xCe1DfcKbmPyoduqoFh8ELH5oMi4uApjY",
  "key1": "2rEff9t9eTmiKSKsCPtnDY9mYbhYQm2Y67ARGTjoEHLxqanAP4uekLgghtBbnPhLnv7FoX2bnv5NKmpX83ns4Bpe",
  "key2": "5sHkjZwAq1CoEGeW2tJo7Rx2ZuEBzMspbXYQDdShQpgdkKCKvMo7wUEgfpM6TjCRW94RwLe3jASeFoPDdv28NE33",
  "key3": "58PtKBcVo3fU8ZUr5s8f8THTqw9xQYjVyF9jCHM7vtyYCC4qJetQX15wh3pu5uqL2SWnQvzEZVeiKXfBZanVZ3F6",
  "key4": "5XDcs5TqqpxiNGD5NNLswPZKQmBLSMVu7WiB261weRniKF4gAHCJnV8tq5LuGSSbAMwPnfW4vdpEd61LQNwPfaqX",
  "key5": "2aWfbwbYqu7fGcU2yFtZ9TBEZMAR89vGvJ7dYgZXpZKTPq8CTMTUCVF8LeeYMdf3e2pQxRpWjs3L74tG4KMWsN8P",
  "key6": "2FJtq3Q2o3y4RA2pSUnBTbuEqx2QcjZT6B9DdWcjY796H7oSdpj12tNKcrboFe54Z1NQxk8Z8CqWzYrvbZm8hbSv",
  "key7": "4iuVEXfPd9ZSUQMKR3mwyxq4R8ZsyjsKMjV5sbGESEPFrQJZdWYJoMHvrBYxc1avYkzYLgiSYjyCLZbWesuELMDj",
  "key8": "21kUi8UXDTvvSodvz2H5eVosbNRWbH9DTWtAxs76BdrnYm4mzC3215nsQ9F5NXy6cFT1DcNSkvCH2kf9tUBAYiEh",
  "key9": "4un8pnjk9c7qxMVjhd8TgkvizXVC8wiCf4nhRThY5uM4SAAEkWVmmMm4n2pStqCaDZiVdDNriaJun32GfJwguFCH",
  "key10": "3e78zesp5yzg3SHPcNMQjnqdEwCM2PCbD7YUwFKSytZnrWCjXf7Zx8c5CVxTXM3E9j6yR5J3hW4yG1J26Mhm45wW",
  "key11": "5JAKh1begys1uwq4GmqvTDRXKexL3sQ2qtY2wrq8BgLYMcV1VTWzMR6H42h5Miw5GeovRQN1Y3Duzew1GJPRkQuX",
  "key12": "51kFXvbf4JbUZTMbu9Q99iwiubE9cb2314eKBhjDyQs6NwuZZfwNUZ5h45H7bxRJ8pDPbiQVLFdejbM1vTHcovqX",
  "key13": "3NLuzySojFo5F2XDULAPskoztpgz8KsLVVo8TKSJEA1uRTEkc9ozBaHqZzcF5EZyHwwkxtXk9tS5mdRoSE3sJ2FB",
  "key14": "2FJv7em4tAFEFJnJuNHNqDVUDjk5AkWPTaL3J55BGFaohrnVyp81cvJKqmDQwuihzbrdYr5bFik4BRuyjaPxXb9h",
  "key15": "38bF9D8RPT8R6ejEUyrZr6uHuRskVYQ2k52xe3QkmXcLehWpVNhivyq2PyYPYC6n5haeDWC1gQXUELMfSmVWZmuk",
  "key16": "4uYQuCJPtVWHnFT6UThG4RhHrn3cM3a7Rd9fd2EBkU8SCxiCQUPy3H4EsTzeYo4DpBNvX29d298jrBU4WkLWBkaQ",
  "key17": "ERD3xQLEGB4ULKS3nDsCiqYMtL23R6uMNojmNG14JajNXbsuk6JT6mJzHMnhgH7owjhPDdzY7AL2e11Z2xadG7K",
  "key18": "3esxB76PiyHA4PoPwg7f3bZpgx3xY8iavpUGmuBeTSVkFaA9LFG8NrFF6tHqBnavZWtQrEkExKpQgYFZ2iKwnfap",
  "key19": "SvQJDjbbTm4LEnjpuW6RGC1NZUjnJMCnpyGZx3xAK58BivEy4pT48vHJ9cqMoEZGCr5DUT8UuKGvmbeyQH5h9wr",
  "key20": "c74iAccaN3v8ypr6bE2EbNTmL37jYE1esce2ApEQGDSJ3vdq1BsjJS7vpUG6yM8VfDLXNVfaTYpRSTZPFVFJYGi",
  "key21": "2JjTwg78HjEau5TiRbnD9ZsKQrzJ2q4oy58sRQ37bRTQCjsndVHsdHNaCb2a1W8cUMKPWea7WKnARKtkgCQCrS9C",
  "key22": "4v5pvyqTMjvpSxFsWnPsFyvWPRormA42d4zLG26PUv2P6qeGsCfcaQ7tsBDicec9UTxaWoEyX7RB2j9swKm3N98i",
  "key23": "5EyXKHt6LcfW8nj2YBhLePBFw2XvkzehehhFUomHHKD931kAFsEs9oBqtNPZGRhM38JX9TdcEyGgVjkCKsToSXEp",
  "key24": "3AjLg7FK618EJ2T52mAm6YgQrfRVFF2rWjmnSYjtrXMCALFGYAWEmX6NKshMCzBTqf5w5hpTv9cRSSFLhqnB6oxW",
  "key25": "5G83Nef6Yjb8VUboDjRFMd3KDmKz1B2zmmP1WgBaZyJjH1Q6bcxR43a5q8nMVp4iys2caQ5JZ4t5tktvmYzvh6yu",
  "key26": "52a6uveVGt9BdFPWzjcj73pEZE8aSJpfRw9roGMsmrfCPYD9Ta385hZ22eA4N6dz5cJ4gV5NUACJNBw4MVarQsBU",
  "key27": "2sjTuquVWL56E5rTV3jZgrvTfZkin54gubTUMkrdik7esKNntmhuMFsu63cdG1kpGcaraWAfanCDYhmExQ8povsF",
  "key28": "4XX7rz3qeFRBVKwwkLisDJrp5wd3KnnRPt7Wa1FpvCYdzqDf4XcJ2DW1pezEifq2FGWu1auDkLqy6jHaxEPETfZH",
  "key29": "3wU27bcBnFbA7w8mjb5wAdLHKGVsNPD4wKmgV4vq9xdiyzTNLYkzErXitMCYmvvumnqcUjg5k8BURXxefncDcVor",
  "key30": "uSDZP5sDCkKtwdmx2BamEogq5w8hjMbEcydijXBzYQRp47mvqA8T7P92bCZncUaqQb9idvp2J4A4CCjEvBCmrWW",
  "key31": "42BT91BERUmfYVLqkYdG9wTu5fSe4XPYhGRNThU5s6a84c85fH1baAL9D6m8KLFfHNB3Htr3Q3soBoxvq2tb9Mn2",
  "key32": "2aMVJqmwRZM5pLtttcatFoeTumhb2tLUK5Jm612eBak332vBNFdGc7mMRFJ8SWNTMsARB99NppM2ofS9xqcrVLS6"
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
