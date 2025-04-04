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
    "WHwkqQCP5LPDZnP2PQHRXGN5QWNVeZQhNR6CEuDSVTpNQSVghcHFb84FTcbGLLvZgyaAKMnLXBke4UiWf6nmMXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58pPDGw13rojQQ3q9Keqz87bqiP2yiddzvPjQ8nXSgdwp8fuRGTZeqTXemBiYuekPuZ8jXDBasTeusV8fpRtSgNK",
  "key1": "433eGcg8AG3KiFuLUBunFvDuy32vcHw4wJ551gqREzFLmVkagaAWGEn2fpq8d3jpHR8h97uyYwJEdcfCB7xrV3Qm",
  "key2": "5N7BjhxBcnpnt9ehLwNoo9NzaRSNA5VVPNt89mPb4qvtWqoJFg5RrximTXwHisPDPKXkkdt8r3hJrmfznvKs9sUV",
  "key3": "aqYVxzLBMcXoy8bWmKSQkNx1xZVuzYh2qcpp4u7NbFh5aQCgy7WB2yzYfTSVZzvZdDSJke8mtKA8aZXRYrjAcia",
  "key4": "2EPQQHHmyJbTwMSqA94sn1bGi9oYY2HfSB81zW7i2PpfBssabLyfp5b42sFQ6N7UpLq4t3YR9zBrkPji6u2C1tT",
  "key5": "zJ5tWwrPsqV6mfzdQmfEVaLMurBPPXU1TrJbfESvhvu4aSNfK3CTcVD6jtZiga7JPKKJTcG9EkUud3p2CsPUYor",
  "key6": "55HAcVj7hS3j4y9k74vPpZGqQSqUzjPuf7XMm9gCbsnauqmbWJ8cbuhbCYvUP5yfsAwWx1utrev2qwiPXZYfh4dM",
  "key7": "5at5jkV4kTnxJ3NJ6nywDUudojDuFiZBNDLQ7zFo6W4TcL4iZYxhDVtd1sAMxEYMrh8ndUwBVDTSHLJ5nYjqueVA",
  "key8": "2h1qvAi7Q3khYjJRctN1WetzgYVMwroiaL26tNmULUWCFMaTbYLTQ8KSoRKfMrpetivDXBiSQyocFHh2LnH9ty8x",
  "key9": "5hjwAyeW8AfymBjSp9uPPxf5k8DpcX4shiqXY21nXj7GM1uEFqzmVJegZRofruCpZFTjTtRysqzxzPXxkgFhARJ5",
  "key10": "3PhJT5dWeenTERGURiZMpkREHvdWC32t2KuwN55grJMh6YHhEsAVrX6kfexi2uzHcm2bRD6oepEkLTRbCfoWnQTi",
  "key11": "3whdFUK9in5KPi49Njw6J7so1MV6EGsKNN2XRSNccQhaxUTsAWz3oeunbdwGYLiLqnj9U8mteNnjLLjES4nxKnFA",
  "key12": "2X9Sbj7F4meizv9rCGvEgmjESa9hJxta1kJDVDxr5JPjc7SiMPu872mj2q1fajyFYpxBrCsbfXYuksRn91G6mpeJ",
  "key13": "2DGyTZuguKyoYiAc3ne8a9mykjXFDjSj5D7boU4bypDep9FSz9qQjtTrRnKUjkFgpvMFc1chfKaaMuoAXpgZVCDY",
  "key14": "2DqLBVVLRLvK44kqGJVmLv4xgmsSmSJoUDgebMUnvXQxTpEwYzgJ2bjSozGBEoEX1vjTNfHqZu9bVTdXm1Md7V4n",
  "key15": "3uxVomjfHDQnk4rmV6kcXij3w6Skj5aj1bWorMExW6Laj6R64B9xoq5Hu3iaCbYNx2U6sMYswspMGNVkgebVZ5n6",
  "key16": "5PVZPTorNGx4eb1nz6G3tVSfWh3FvWxrAaV7vFsrPrRef7w8FZc5xqUKZdjXDh8VtweCVKk3Z9x62KEsax8uwHd6",
  "key17": "4jbcBjopwDs61k2YLcUgSpgbFen3uZD2RXz5bSi5c477t2h2a7ZNuVCiCwd93B6aCmHBRX1iVgnCQ1QCpB5VYuWC",
  "key18": "4KciRcRR3emxnyKj8vZ1ZocoHEYVGC4hegmgUFfULCF7C291fJgG8pTDYBn1RMyoUSs2oJCE7vdwJ8HkdCZavVFJ",
  "key19": "WkJzQf7CXVtDfjK99hr5dLEwfZoCm91yP4og3J57Lqd5oz5dMgKEMDmoNh6KwiS44yY5no1pinN5339sdpsZ83L",
  "key20": "3jjRFXwEnrU19qmVWrGdAo6oKbqW1wuPTTJfPFMLgpvyPQssS3KZ3gCHkBKFW2chfp2FbDZq77NwLKZLG7H1NEhD",
  "key21": "2eAjJxmSxhRsvDcbvsJZ4dUrHpj6DdEWef6o177EWYndw5zGnjf7DBu4CcWSFoeoEFZcWJMjDgiBTzPKRATBjJ9X",
  "key22": "51F1nK4LdNk9ArbG26M9e6zHDWZYkv4hGeMJkg527QW4eU1arcVpGesWzzsuEZFv6vwrbZo2voDL3LcC6Vj4VP8e",
  "key23": "5HdbaG3E9eFzt3yWCxnazhPJQPuhasdmrWu7c46k6rLs6NBKVNdoRdLEPAzZQdWdxed467CVw27xP3r8Mjz2KZvp",
  "key24": "41FifNbQYtsaSTMTuzYLyQjjqwZVoVhcdeNhPYU7PqoWhZHq2Z24sS5Bdh9uNTN549fCkFKdDkdNZGWvmpijo4rj",
  "key25": "455YZS1qFwh36nTrf5Aimr4kzH5SakbH5Q1AQVVzfbfP1NWEjq2ZKJjs5RGwh5BoGNNGMnpyYQAME8HgQjcfAGBC"
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
