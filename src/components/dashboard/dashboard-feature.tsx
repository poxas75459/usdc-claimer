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
    "5YNUonwMZtXoywAYk7goUT183Ru69RnLVUWMvNp8UF9D724DwyvhHCz2dLBREPzTpoLgAA7DSavPUPMggkoP8RWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "555a8LeePyU46yRFCeizQAZzYXEoLThp4cixJr3ivazqTb5W4pm22ccDPit4V98xJ9f8BKw9hDGcS61DnVe3Jkxf",
  "key1": "396pZyMrLL9QiAkH4LKq7q9DpXXzxUQ685HmUcfYo5SnKkt3nMwj23cg1sddkUL2MnrxiKGrEA1cZkAg8hcJgwTE",
  "key2": "3mp1WtLJ1hHaLwnTrJR2rMUSAa8EDDTFxTDTibZq1dhLoTq92a7oZZkhSJ5ukZZ4x6CyGbzBTEsBcnpqP8iK4gSG",
  "key3": "3GKJgNSPHN6x3t5NSiddkXGnBcFGn6zbGfFzbd3235uKV3GdaQzieTjifK9Gc5o1MZ6HJAdgW52nPXXdUoZ3yQVT",
  "key4": "4F5mnFoxdH1gCxFbhuyEYa6StzbTXY7Wp1ayvPhzKtuuinj19sVDpuwMYJhNiGpj1XvCAxSj18MZC1zNXJoc3nwD",
  "key5": "64bKpG4FAkDqh1Epf6xtWcAdRZ4JuijTxG4bcsf6td1LFreuMTCqxKM1KPdHi7WiTxGP95JSrqQgSuHwVfo92PY",
  "key6": "2xABs1z7GKWSxLJHD2V7NaXrfonrU5CgPmdyy9qfSUshtSjq4KU9BSNPG5SLC3QnUQ6JQvFkySSJduZg2DdzucR5",
  "key7": "5qmKacPnKLHRSAP55c6HXGYh4jfouUK1upBAV3XTgkgRWU5fWkpixri2prfcMAoaTkSKDoN2LcXjE2Hq4fvGPPbo",
  "key8": "4fterAEwMMSJJ27ieow5f3nnWAamB55Prbo1raqCuiEw4sshnyrJqW8DjMR2EEo9XQCH1yAicSXW99YkLqeJpXKG",
  "key9": "3FjVcwfiqNtfRGB1AxcTKqxQmEQKZuXLSYNqjxoZx265VcRPEi5fVKH5eZZ5v9NT8TAc7EG1PR1qiT4awTMPJp6j",
  "key10": "5hczwkt5KuZMjTRYXaReyemu6KJPGE3ttho7WoCfihWdUR175Cu9vM1UQxaVXzZN2D34ZjRWEyUJdYtq7ssPnDwr",
  "key11": "WCyXGFP6TtSG3gySA3KVg4g4PVeDKW9t47yYGBkEk2wbFbo44uABsLnrivJRW6fD854HdwfyE4y9TPukEyzUpY3",
  "key12": "5ZQ2VqW5Y4MVKAz4fZoPAeMqaSvXeVPxXEqWkUcDZUn6YtMEWXcSSRuNKbtfFPGJCaRsyCvK353777tZ5Zkt9Nei",
  "key13": "4YDvgKE7ib7rJNoYezS8mSWmZw6ty59ZzL7hXsKJPRYdeeFJCQ5VQa4VnLhBRNM7ACijnSi2vLLPfN6KRQbzpiWk",
  "key14": "237xemMa9Vhg9WXaL3RqMtTZmgFsNXgpZvHmCH74Q7J8hNw53eZubQiCEQBu5Zj1YiBccW2kME35XGyWgv89f99P",
  "key15": "27KvJWRS8Je4n5yMrvWq9uKLoTTLcpwb6DAHkSLEuE4zCmyWgjxEk6mxjSEKmBchQJUMEzef5xP4Rt3fvxn9H2Y5",
  "key16": "4YLExqwnjEQMGv7SYZ6uL738wqV2oQEtpVk27NFLBMyxgu37ue234nyNHti1HudErHBGDygQQteN8P6TQxu6xvps",
  "key17": "29kKmJXGWkU8JFtYEu2yjcWDJHLMhYjK4XhoZYyfycZ2fiadRo5W2JuJ8D74EYLoCYqtEHrgaP6eErtxfPvV79jT",
  "key18": "GxYHvh591txqZfKj35F2a9qW8w2Bi8qEBCW9gHA5ScK9uJKxiRFYVgzg1LoAHF7STsDkkkFv8x3pfF4SdHPnEFA",
  "key19": "3o3wBj6MpGH6ZfUtPLjNxhxvT5hQamiHoFQcc8nKHgzMUavA5qKJFAfNPQp3vB4aEvNrp6nD4cH8UQaRDka81Prt",
  "key20": "3sjA9wSSutpTcydK95RdTH1NCsqL1JUZKnK1TXtrEm68he9my6YT6vXwdrFdmYfKLTtsprwoZpfSgEpk2ve1grZM",
  "key21": "4ocZCEWc7GMdYp5MXU6YcXAGmmihJe8yTCW227JEbKiTUpgpRSsruar5sRFgHhD9uKg1hpZRMnvNXgFCFxSqYaje",
  "key22": "v1JrqZU99QWaSFRERcK7nJiZ8iSEtsc8h1swiQcSMk6fRBaqyHXbgPLzXxhyyunyfAgBfkYDqAs8GmouREVwzvJ",
  "key23": "2nZmiq4r7Sax5gWGjFJu9cGrPNHDwxKFU4QWACjs75agv6KxfpTQLRgpcKyCXpR3fuRx2ZNooBMVcHqdTvrqvA4w",
  "key24": "4QXua9ieiRKTTaViFQqBdyWrH4GQf4DMRwriNWxgcGNBcvP2tEnevMeyMeUYRt5RzkVzaKsdhXJHX1ZUoGGULWaW",
  "key25": "2uxwXB8ShToHJYovS1GE9LpvFkSKtTooBnzAuVkNs5gMTD6JACFmWqV475jNDM8oaSDJy2iVf6eRCZBsQzfH7Z4q",
  "key26": "5rv871RufSXMDWcFH7Us19K2NdfXT1mWKdyr9UXVKVgo3yqd794qK3K3gvzeWJjg5cNdLNhVVpYAbrCfUGtVx9r",
  "key27": "4YG43hzxcuwaSTXyUfk7TWFmND3tAtgDvwT9JV3zBwS8rMxW1xv9cp6AKTUbW3gdfnERFE6F7WknT6LPJ9YtZcC1"
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
