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
    "tABDfc4w8LQpayqUf3vabDGuMBuFom4mJgLGTzEzqM7siQf8LQCbQ2UoKhAmxtK8tV5KGZyxwrEY4cn5XitDNm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PB5td9wUk8etyn3RSrhJrTtb2dQSA92f3gfdpmheQcXZpQMB8ndUzkYk8WC2pNY3qDgj39F9jXPY9Ma1igP5Ssp",
  "key1": "3uxZR79hxhVGtxeXzd8cVMkuU4yYcGvCrqm32Veke2mLMMsbb8HoR5gJE2q92W7HAb2L7J32iCEKwmd8JfsvdGSN",
  "key2": "413vMuo1Yo8X9TZ4CzRqPxGq7sZPxAqyWaxBfNThX8yYYcSaxvAFnuLV7iAQc2j4WPVS5GGQ7AA6PKxcsrmGNz61",
  "key3": "5ZPEHaqQ9qr2EngFYzKDKdzamdawXXpNUZwQkQNgXdbig5A6wt2xTwGDSEV2ZXUszLBBV3XLj7zK6D4VXiyoKPFP",
  "key4": "xhk3xN2ckDbuYiNNKLVWtoBXH4tZC2zGifkjjaSnLhcNNNjpHyWoF4CSVq89hY5w9WVwFbGbKWcyAzMTAqZdoKM",
  "key5": "3kBjah1QmXzmehrmHsW9vNcE3o71icwM1YzrCDwzi2dm2FZHXmS2ZYfi7UyuQ4XTU8632vnZSioZYmP9659v1LVJ",
  "key6": "5ydm3r42yoxSyW7nnkxsGTDxSR8uXrokzt5NFFesmBMxwhdMU9cUWBPJtypwSZAtt2zVsDBYGjGr4VA6BkW2nrjX",
  "key7": "jHLtZ3VBwTDox19AUmpWar8n2ML8mchSFvhv8wusKYh8fCy9qfKYFRTUfcp7136ah9YGSuvwvxNL9ZZkFpeXcau",
  "key8": "3DbJS8Pa3QuiiKW7FswizbWVrYekyThoyNKfRDNWNeV7GeM9jTfoGChPe6RXVCj9C7UC48Z8RUjAtvHX92iGK8vM",
  "key9": "2aTEEY8yUH8zcH5fnajPu9Yo8nYs5ERHprno3AuLmhvZcjNosy1v9w1rsDhkbaYSMX7aZxzVPu9cS34V1BU9CLpZ",
  "key10": "2pMaPDwdsjfttAqn7fzRZ1sCRDrwjVNhDWpUENgNxwFwK1wpRKHDvUSpP2S17R96mw2Eb6YEGK5WJposoJ51wYx6",
  "key11": "3qf1fntXjuPLmHPyQv6xVRJhWDpV5pgc6qf6mv3gm3XNTj2dBMC3RiN5mburANxSX5St8tqGFzfy8rdPckcripoj",
  "key12": "2hdJwH9L6SnM2BYReWjPdvSbHDog31tetkE31oUXsA4ZcM4XU1W49DxRjDGhkeCLfPQMoyrNoQbHXFtZo8NySaX7",
  "key13": "3AU4N7iGhdZxjPQvGEWYX2J3CCvG5fJLTTSh5VqyTfBwwLwssx4qp56iHY4CUmwtKhSFRFWoCNEay31nZv751etc",
  "key14": "deAwRXxbNMScxMUxF1DcTMwK3SijL2ZWt1LfLKYZUbT3idnmt55iv88at33yv2xmnhce6BATiYZYh4c9rYu7q6r",
  "key15": "21Ub27tTfsMZtanDNDgVtQefAXCDgJWLeJWhAyjRKBMeXZgj2vhUGgjcLsipHi9pD1anaHwod4xHb7G2Sv4nrB74",
  "key16": "4hpxvT77jVw38fcAoQA7oGzMz6KKArj7nfeQkc6n9JoVLgrbaMLUYAvZy8Zc89Tud4XeXwoPpdjt1nXmmeutsqH9",
  "key17": "4jTvBs3XbrbYw85YPqncT4e2WZiEUscgPHidqENNk6oVnQr46X3mDccu8e3x6LF4YcsRBchFSenCYuCMe2ZTh6ER",
  "key18": "5esuB2p8kbF4Sx1DiiUoK1BqYUqNrTYkUhqfWTkuFxzJvX7pZgqwY92gCQ9BnNtAPbLaA19XBEZM8caXLrpukzXq",
  "key19": "4kynRWtBYrnbgwoTLn2ga5AJC2yPnyFVp6DjG5QNWkehWwgx7WCUUZPncm3ZVLteZpP3W6per1mYjZFhmo1W99W7",
  "key20": "3Eg2CXHzZ73GCjELNshcAAHDhXkT7rj8tD8sPUzsyZ7Am2HABvZeMYofeWDKatWo2j8Y6RoNSzjBseAjsd3BYb1D",
  "key21": "45EPpmYg919xT5WP5ED8eMzLq26tMdcGynFLivPsrPCc9rgbokr6GES2ua4tTgMSM3Maz3YuqSgqSJfmQ7AzezQS",
  "key22": "3DhnXmy1A8KFBHdb9tfBxPaWdZNqhTrXqy9jcxGQtbrgkofbSC4ZMdcvGWfaDi65u76kZz72HKMR9YXjh7GAbWPP",
  "key23": "63Kx5LJdjzZCxfs9gxkMkPgYLjRe1xA1xwgTsxARycrMpz91mupqnMtGATDHp7JH8oaNHRaZvcGYiFh91PTDcX6Z",
  "key24": "2ceSYPLMxeYtB9ct8PSUfsVVMqMQg656Hny1CcKNhXTGgcAx9UdW4qPnf9vVadmx9PRwBsQr7wiQiLiWGkY8bGg7",
  "key25": "4HqXnuWcNMvUU3sNi9Y87i2PqgxViRPz2kB8cJv8dmq41AmqmmcdZeknhxit3HX3KSATcC8Ybi3z8826UapksKSS",
  "key26": "5unziiY2bzjZNviLF81neerEN4eU3J2TfPfdt2akoY2Ewwn2duecNk7TEJs6Zfudy3C6QdqGkpFfeYR7cSZhwA7E",
  "key27": "45akx7YG4Rn24cbdEff39rg2Qv95X3bEnk3KwahBBz8sAJ5qbpyfoMozvRY4JgKz8BRrCsYWg5DMJqF2A941g2iK",
  "key28": "qbY8kQUpGEdfJLScMW4eRbRaHFQqhEU11UBhv2SJv6zu19puQo3m53V7MU4xqP7Y7463pjcQq3uGjGorP6XKCre",
  "key29": "ty173E7xfSFK9sisktY8qgkvxyDAmooJipopmgTA9Y4tbsmLtdGFXWjATGQ9CcPjiMLZr32mLEA3yJXuXQE6URm",
  "key30": "4dANchqqzPN22YqHLuQqSP4c5s2JqeAnt7s1BgpfUakwFHbZDFHFSQDvPq6pyBUowtQkm897NnbKZdm2xjBVvRvn",
  "key31": "1nSWg9AZTEQtcTTh3GV65nysfEBa1vVfi1ey6RLzuvFtJb54nX7TuRhpWHim7JzTTLMXyhy6d2xnZJPUgXqVeYz",
  "key32": "5hB6WmBJDAYih3sJvcNsx2aaSqzExX2CFwnxuUkfbMMLQXNkMsATyS9JdhNxF5Kh4fzqeWBDVFVVCQeVBvdQmBQy"
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
