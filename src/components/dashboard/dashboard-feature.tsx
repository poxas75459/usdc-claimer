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
    "3nXAZnLPXXgh4i4dR9txSjnofvzWCuPHcReghXivefEq9mjZpbHBQqiUmSAq4o9c82r5SQJiejEByoj3xsJrHa9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WQ4PJi91pks3w6Z2gt8qZq7qcL9yTxUvLKEjxXrNw4zpq6Q96Tp41raefAwjkdZot1poyJHFJjmDUDNHcLc7wdx",
  "key1": "3RoHqGmCmB6A7zVzDSWLHKaFDmJ7yEQkXhUz8HkWqXKGQ5hAVTz9XQC1FMNUqMVJw2WdGjmiKPX4HcBBWxmjJKHw",
  "key2": "3TtUvSBxHXgNF2k8W11REtp8iFUZVweL2RbozCDDUFmaW8hJx6znFnpYvZMvnSWGiPsaK3enykucHHBaxxZeWsNA",
  "key3": "3e5HDe4AnoxTQ99BtNU3gQ4HoY9JeqDwoyh5Wg3djW61WTNYEHYbGE7FNi3hTLrygaV9haYmdW7HSNm7SYkddivY",
  "key4": "54UvH8Qy24hKk3aZe7hR3545ninTAkpebwS1mLEsb9GXWAn4oW5yAGCnLJKzeestmq2yg5ULLsgwLpY1cTHKrqME",
  "key5": "2s8V7uqe71BxvTTy9NP7kJPz7LuYzKZfRqw4EGUxYAovM24se47pPr7djWGsB8rAhrNSuc95qamQXmCp9CSq3z77",
  "key6": "zpBFDxQoRvPXFLRideytSzHJtpczXxnr3cR7S9ggPhv84KHmSRDQhcUQms4TGtucoJHPiGUnwyhn94t5VX66oWS",
  "key7": "4ye1E7heZAFL1sPmxZLhjet16UthZugN572L6Sg15XnpzrwTwUJsNxTWJpSRF5qrBLDu57KLxSPWh6zrxD1BWw7H",
  "key8": "3WWJwHbFQUiotXyeAmwMgT1zGeybjo7ZWXYYRkZbfFQdYj7GsFXmQeoTFuS66ZQ6WLQNgT6BjDFf2GV7zKessZAx",
  "key9": "3KHkEwnoACz1WGcQ7mhT7wRrwiQ4uqT8X46nBAMAaN9WjHyxmoEDsTj2obGDNAgjxQuE5theTQa38XkujyNvh4z3",
  "key10": "4dvRvXbRzBf9bSbpsrAVCVNgYYL4uB2gjw1wCsATXctkJLYTd9FGicY2jbr5PZDF4KBTLnbMhUsZ4anQaAAAC2RE",
  "key11": "EZvADEGjBBtCcYCme2FneJqUgQoR8WRmrrwtD3SeDr8VCdSGn2iuFJ6mJANqkwjawSo5DCEyeCe1KgTDn7c2jsE",
  "key12": "5NYAhTzwTFAnXjUo7vE1znosEn7xbDADWkdmXah84Q5w8EKeW9Cnv6BRfufHsh8kjsW2adLBpoaPyFeqJM5SmMf8",
  "key13": "635tLypWMaFQApfmDBhun9q3sVvUrV2ADD8F9SrbM9AuaWDDZCrSbFdu6zFHTKTtZjATuHG146QNYi3sjcmKmWeA",
  "key14": "Atz4ePQz8QSP1vf6cBK12bCPHmiYYrV2PaXMDtU1bAEBneFp3Qspx2nz56sDHBV8UchhEgDHhpNqHTHyeDT8zfF",
  "key15": "4okMQ1ba2Mb9UumA8fpiLXmTebyoqKM31nTUcNaoG6Y6YchNchA7ASWaaVX148SNLsE8BEs5ZNqqgMTdw2Cdbtz6",
  "key16": "5G79XiC5UqcXb4q3agK4G3N6Tr53BF5cpeLQCTEagsf9QoqLEjaqdicsx2JxW3YFAvdS4zUxZzP6pHgRdMg7Xdsb",
  "key17": "4J6ouaHwkdQowV5DQz5PKNRsZzf4VTdbM3JSjxvfcpyNPRzuKrJm8pBaFsMTannb91sGgASckaQX2jQA9TjKnroX",
  "key18": "5cCLraxXrxGB5a2k63y16ZrysPMnmWSHXD6mi5wd1T3VhgfT53eaVAJ3EK2QJX6xPFMrZkYj7x8Gp8grSmEkqxiS",
  "key19": "gKSHPVKrxNdszzv1qdQYh2Hm1vq4YQAYhnbcm3yeNN6wZ73DotqBHGDvywhg8MaeWQq4BYtYiPuyCTXrSu5vUj2",
  "key20": "5iCdL9oRKFCN8U46H7ftgyUFW2BZHT3GcX2ZaUPd8kKUtdXCgTc6HbvHfuUmWoGyKUwYZzbdug5aCJQtwexTtsMi",
  "key21": "4wUvBvxARCN6iJX5cMYiwM3rGpGCG42mf9xE2zBCNt2qEJzwoMZh7KNFC5XNhs3iMvixe97vCuj887y1JDz4qJyb",
  "key22": "62rHC8yPvufi5abngbozEmPmxjBSBvs9GKiPxoJv8NorEZiMpXuWNFRoVVjaPNquRQz6Tb6Qxa8RZ6Bu5NZc3wDT",
  "key23": "5HKTmD62Bk7SJSR2NgtEetCsDXHCGMKp8zHqJBCguHU9mHszuDwPgmwv1epVkDSzszu7Tbwr9Pwz8MTyoZ8qbeY4",
  "key24": "2J4v1KQ4MvgnF9zEYBBkfFa7ckSoaGvCaZUBTXpaZcpd2XBgEGM84LNxfdHvgF8x9vZPQHBi54hGpKeqnWvcPWJB",
  "key25": "2f9fxR8SFHG91hEbn8M2SA3fu5irBdfznNQAyqT1HeWb8UCsTU5EUprhjYWwgfJNPMtVLPZ6FtGN4VN3VZMPCebK",
  "key26": "5jCwbCKqEBtpv49iMiPgMc2ryFvTi6PF49oQK3Z6CZpTLZaTQgMXLT6Z2uKpC7b2WF4ZT41tnMXoWL8DGqz6hYgt",
  "key27": "4SNjLd9YVDtdXX6wix6B7aAcXkWiFmv7P7xoHrogKePB8RrkC45eTf1AzybteXgT1dzpRSeLy1q4hCT4S69Hgswk",
  "key28": "2HncJZPzQqeGyUGjwZv5rMqWpXdfBpn49HKy17hyXpWx9whjG4XNSM1ogXa2fNJNaymUPq5xXVYp6NaFSiqhWvKz",
  "key29": "57xMXsZZHQMfu8zE2TJbXgivjbw1Kxcn2FdT68vde8typsRn8hV6QVGAgPQh2nYqKy5BDyBLSDM3V7NP7arAdktB"
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
