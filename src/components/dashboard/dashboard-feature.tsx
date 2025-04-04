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
    "VPrevRSWavh5Kui4KSGnZhd6ydqz7mCM8d7zChoGXL5VsfyLFSPJmwHcXbeb4AJgK2PeMJNXsD69BWfjpr5zPio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZCLvE32aetf2CHQKAKnwjRmNKXTMMsdqmwTswsCvegrK6vazcFbiPf77jEKFxU7YLWbzFWtF1rWS2Whpoy9v2m",
  "key1": "5r59Z872NcqVC66vwFZu9BQJ7S33ebCuwRRoq732p7BtVYiGLz58Z5WYcSpDy7UN4t93MMvN3eFhfMURciFqd7g3",
  "key2": "3qsL9Ci4NT4Airof3ckXEj3nwwJnkM1qgb12PsjannhzcVu2GKDFc47AUcPxL38fYy9NSGFhEwgYAYC2jqt2pJ1n",
  "key3": "45g8E4jxUVA3a5yW5DSh2iStYe6XEiNNgjfXZj4UiPCTUvRkiehxwzyZtHLE5cDsGmW1w83htn9NstqhKUye3ieX",
  "key4": "5GXoiuZhGSYUHEFnGp6GKqo2G6u5aEV1x24RjNtWXTWPN3esXxqt9cmGSnebhR18xWPC6jJADjtADSiCXjZEom4X",
  "key5": "4BNWbgEnvg4ebizsS9Dgdvs2dfgxHMXofvEw2gMtKRFRLRnmUM7mxxV6VFVk7DgSBzVaZUGVcU91Xyxe5wUcBwam",
  "key6": "3wSE3hsUBPkjxQdbDyqC6xAnozU7keBxVivNsLFpnE2XaWjVFETrpy3KHRcX57iehAkrp8nRmnf9MePpnLhDmnGU",
  "key7": "4bgddMVGJ4kugFKQLe3vd7mVU9g8FspiWaF4gLqrZBUkCpEAwDUYKz23v5W1V8GSvrhXEautTds3n1TJFzTnRNog",
  "key8": "2WcoN7kDZLnFub9sdzLzkftoPCn1GUEKg6tX8EXaCUkAwQEBNMDY91kS36zWaDyiokqsTsyyUfobFnCorPvvGXd9",
  "key9": "4AUmSyPF7FMRUchjrwcSU5a3JmnbxvCaoaqNeYoVrQaLxMVtZdbJk2K386uUh4JEoR45TE7vzgCVLgGHStP3b4RJ",
  "key10": "582B94CrA8GMaxqpgnjARKpejeSfzurcuLHjTJVpofTgYb1YgaFz5vJ2WR41ZkCvnkf8R6nLQPCWgoc2bTrQ3vQ7",
  "key11": "2iKoToDcPCRJpUcp8DAFhfQpAzpNNaisoRjBKWzvgDGcGdGsF5LaKX9NoHCxEqBpWuoZE8ATt9o2etK87Q4T88hY",
  "key12": "3xcSgRD5zTkxrCsVFVa989SG3NT9VWKsd4WJsZm4GPF5HUZmEsR22rztSZGr51Pk3zgWBrvwSs35UowYDcYne3u5",
  "key13": "2R7AGAq3nZJgb3upJEtv83wEVVXmyJbKjwSCHmYTGkSb5k1MKUNdxTxv3Weo4SsHdfjUkEWcnNsKuUywUqDHaBck",
  "key14": "2SUe6PmH2GznuW56pWzdx5wRSS1PxWomNMUkuKgUyTT6QYCoeyCrQAMd9jTKesEAM9u4pP8yda3PiBBGYsEwTSh8",
  "key15": "QmDTZEsXVtHyDgHXVfwaFLU9TLfvawMyRBpc5hkMvXg9DHZosQzxSy8qVudnyEzQJ62hWpqpwWLz7gNP42uMyCj",
  "key16": "5Ku2guX2Zzksg3gWDkDUK5wjnCKaDpxZVuF74xdJUtwgcxnYpCX7VwMKcGqkc8VJNNkMRRY4Cj35AuRahYmvAnxt",
  "key17": "2LtzrNEkXB2miS2rLZUBVKr7c9vv1yYmFnZYRXmvnn9r8XCaRb5fPq7M7Y7EMWsRpBDkydiaba8xfh9myoTTw1Kq",
  "key18": "3RWGS19SKDgFDKLcukMVGMstpU5xAyR1vGaeVqefhZRkACH5vnBiKGNtpQgwcrTyf8SRMBvCscPCkn2JEjL1UsmC",
  "key19": "4rtPY9YhLrHiVLTTeNoB8Jhmt8xUjYtsYqLpyRZKU9PncuRDb4ygR52Dw2h9Y9dPZuXkpBYKAFW9AcR9Wrub4hQC",
  "key20": "54Cuf5ghNGyFMPiJGmzvvJQu1BACrGmNspuRgVG11JWdaL8ceTkhfwaAjDGj35aXHkw3whPx5v2A7HVMBJ9BoMSs",
  "key21": "3MwFaGdZnKhfBEN1aNuSKehitqaiXZoS8b7ckvUaF1ezhDZoFehjbBujhPouvM3W8WKh3pXuu9aHL5cZqgmV7tQx",
  "key22": "3QHxhPhLSd9WY674jYivnNPbZZ8cNoBBGuSjSjhmFd2ShtEnqLARmJvidhMy4BWq2HeYpM8icPHfMy61vB9Pi2nG",
  "key23": "G8zEUhNYigRia7ZTnTPMTzRRK6Uo9Yf1WoBz7ibANLZZHDT1pJvpFE7QXJNs4BpZQh2BWtZP5cdfv1tKTrX3MJk",
  "key24": "5S23VzEstjiN2uhfKWAjoK6j3ixntPChRcXoAb8HyvfhRnHSUQcmRKbhh7uRoesmdwo8Rpm9bztWRvui2METj9oV",
  "key25": "4M98UtfgamM2rB4sKZmQsVEQBiYGiXvJFciGCa2nRsaeujraPN8s4bafWkfUnxk7eanyhxFYLVdxHEK6haAfwv9P",
  "key26": "5TStkpCQYwCLUsAbeJV5oNtKauXhZvFh5aXuq9d1D54rn9bjUXgQxZhbucahHj751AkoERBijDTQ6aZHkMeGoAff",
  "key27": "5xwdjbWLvk9Rau8vdd9ucoJh5qKSMeQD6TwnfsYc9ipqpMY9WF6mNRb3w6W5iLbaApK65r5HvuDLYehTp2z8vaHV",
  "key28": "2KVWe6oXVJMjpMHBG6NPW7yKJZEpoXUCszuC5V6tn2dvkaywFCaKbmLdtKDYF3d6GrPiiU7M2yL9z9aKtvLRsb73",
  "key29": "4LoGzfYy1Xj3s2DQxFNhce9CMc5gvJUsZnBUTk498aZxdT3JmG29AKUDJnJdSSKF4RmmWFUa1mckrhWHvZbpodM9",
  "key30": "3shCWj6Mt1iQR1o8MaBJtyzMQSUwC6iGnESDA3Hv7PWTBbk4bz3CF4aq6jcPFz3dikAVD3sRrKrPQHCWJkeUEHM4",
  "key31": "5qsNWxxygrcBy4B6Wo6EzufMNb1BDzpb9FTbSZEFyLPo9k3YmtECMnzUZcNwNmeY9o3HozAMg7GqL5o4ks7zhvDq",
  "key32": "4HLqmr13vzzf8UHGSZA5LcLAffn9sinUNM3DuLfcjbV6dQFDVfFS5TjuwMjAFgLQNFJope4xTzNSUX7HNhsZSZDw",
  "key33": "5Qma8SM1FYhMz8zLCmrRb5XSRVtq9dtCbDg5BEW1oQYwoHWouShQXMF8kUMM9cSNtcLjt2q15M3Sbi7nJcP8KBcG",
  "key34": "2ioQmZsgXRQgTCpJkPKkW5Kf4jGneKiRdSL6bvRVEfzCaBsXniM48CeewoUfi33apL6u6T1A5fKqCgbE418zN1KG",
  "key35": "4jFYtNtE9p8NnKMuJsfhZTVwnv4F6nZ75DUGPybMYgRnJQKhYfj58phwCkq78ARdkb3qhr1f5NCQUzYdbVVp6dUG",
  "key36": "4H53CrPZWy4WHKvcbSrESnGke2H1iMtbtV9WLaXDZrTNQ5EL1v3HS16EyzLn7vXYD4VLkfvseQHsT6cY9B5zipGz"
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
