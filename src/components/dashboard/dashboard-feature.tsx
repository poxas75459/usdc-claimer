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
    "4PG3QAnhmHsCup2yyCEJqZf7t9oGExgdci5d1MKJSu4MUW2vTXRrN1pD1o7PiRcCVrUDRUsdUh6RdPhnFkJaCu6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a1ZvmyMg62aZt2T8QHLxSPhUeqNfrKJRiGuaRVhAknGkT9h2rR6xGAva9myZzpFeLvzbEnsjkmqQoz1KTUsPuyv",
  "key1": "4eXbBjAoKh92QH7CaM7BAawkrNSfKCfL5YGKZA5zUL4M9CKi3TgGKHFQ8pdvBaEz6mmAhJ33KVQGh9p8Qzt3b32z",
  "key2": "5wGyM5Ax6zMmhBHW9QkP1EzFSLsB1mwscFCyvyDVVbGqeEGYujDFTVLRpc8NE6ySwSy87c3zgf3uyxjN8s6fEo3W",
  "key3": "jk93N75M3ghvMC9JKBgB1WX4pTCec2UB4d5kdsu2q2muqvVh5QbgEy1FLwudksAWP2zv4kN2M3wCrfdeiMXkGqq",
  "key4": "3ySYCooeqEw3SRJzyZUmqm2pmtNFc2BHWzdA9p71WDixy1wxQpE9Sy19WtdmfPHZW72yLD76xf75jnkNzevYpEu3",
  "key5": "2JvkVtDTbsZrdftSnR3Bxsjh9gButd2ki1y2fNq6fNRWwMFXJccpk4c8Yu32NKZosF5ZQ4SadiueHgPa5GLLNzj3",
  "key6": "3m4Zt1YwFiDBYQNA4mm8ofHZwZJpLD4C7BDesARD4ypQYSrhEhr8ki4sLs7EeNNDTJf5fNfLjNJQ8G6vT5DB9dJo",
  "key7": "5j5zBzpmZsP694JJ6VzfRAnf9nigynuSpH2XZdnjW8aP7BAfutQxS9FEnZBBtMvuQCahkHAqzdzNknw8eHUyWnMf",
  "key8": "2bnWBeaatJ3K9uo9issBhZtMZNpkga8W7qkHupXECLHEwh74JbrokWDtn1NgDbv2v4YPqJ4QhcxPPgVndcGZ3rw8",
  "key9": "2thhkptHcmGgcSYRue94RfsFHGyFcKNvniRz2XfPDbduJEjhSpjB2uJxAjoAFqGabfotAXBW8hb8qfhmngsAnGKX",
  "key10": "2hZ6YZN8fNwGVu6jCR5vfrxiYbHZZ4KzwbnzYQQrFGcgPLcK7byzkYPRcSgVPfFXpLmvhCTocMJoZwHaxUMGV38h",
  "key11": "3MQf41KVMGkLxSwjHchbqSPNnnoQkcK814HtGR5rMEXyo7DK2b2BqqSiyRdq9RDmB4HqQwmGtdKCQmYMf49dnsBX",
  "key12": "24YLfT9yc5CFpNDywhegWYY59CaCM3d3nhke8z5Bwqfb96UnNotbcg42maWBcpZerDK2oCCjgoa1ZeW6TUguY2XU",
  "key13": "3yL2wN1Jrio97oYHtETbuCiQqpYKX9bHFScJBrvYcWFtqgwXMW11fLRuXN8tCKy5yXYLmcBhkQNskydkq8pdqFK8",
  "key14": "3W33tcUop6uqiv2YTBUJyepYa8SGaLjbrpKXjZT9ppnWhcyDRiyY8RhHQ2XRhXp5tMQsHLkhQws2xb1AHMBHL5Tg",
  "key15": "2msQYwsD3busmLWwSj8w7gTRC6VQUEuaiT9XoHQNjEZfCKgZrkqsDRAw6MtJrDvcnQSh4aFtth6Jd31Lcnkwb1AR",
  "key16": "4QA7HSxp8GSq9hgZsJC74gFf8aacCPU2ZuySyX4h7hSTgL5NRYMEEbE1rYe48N38Xqi8wdRNaWejCQDT8F8jWMr9",
  "key17": "4otFMe42VSyNE7CPHxk4GiHBafrzQbLGQgLbMWF227C7s1W6bYa9u5w777obqkezeorPNJt9LG4gQhHdwkwVQTZK",
  "key18": "3uqgqEcqQAPTc1hxCxWDLoc1HGja5mFCHoDS5BmPbiTUCEKYfZ75NeB36PFUJa5fuhhoN4YwHFoq8eb1KLc3tiMa",
  "key19": "9Sgu4skpcnQgyjnK6EcB8iEzHf4vDecdJtQYkGQo3dK4ceY2hE1xYudn6oGzak6wsX39aA2kiJFZXG8z73Ao6BF",
  "key20": "2j1iZfXHAgndyGGDACJJorqPb7BXUrSmpErJxTsxX77xyyyAazuomqUvnVhjG4xJo4npKeWCmsxqVhepKNQJsG9J",
  "key21": "2kLVAajYdxF8otaqXz4bY1xNMqsJXhFoZAZaJEMwVvsCC571GwzSc9pAx3PNVDasY899JTcgg8r2XAuPpfTFsj1X",
  "key22": "5Rc6L95SDt4KKPrKmdCmEC7NQAxmFBvUrC8qjkj4H5pz7p6kwBbjeYGCFM5diRatKFmFjWiL4yoMkabS4BcvXjfG",
  "key23": "AZx7EEtiW4jcgdqUC8pw7Xy5iUDC3sVbGgNMRZCiHoNk757Tbm13r82BfrMuaVe3XCckzoUUfzGpxL7jEKfohHM",
  "key24": "ZsMUiDytrfykppo65a4AsVjU2FEXQ1VasrpvUm5FWzXciFpfS6toc6dUx1yiFFutLvcdxeD8hQbbm94zNJEzZ8p",
  "key25": "hvAV9VwRCVxCtA8XBbfA7gjw3Zkm1KAFvdm3byrGd51DbLJstTBQPJVnvuhhZhxeujZtooxVTUCYmdwSxaaLQda",
  "key26": "4wMviVo88SwFhcEhyjhZJJVSFwJXYGmTdbGQCfiJoBSQsdSNFtPS8KeaDjtHANQiqJKF53v8whMYzb363Xib2MRM",
  "key27": "4NuiG6kKcdGyRAe9uWihKZ6jUsnqiWpu1DMxRdM1R3Ysp824NA6XjKBG6MtViZ83k8hbwpCYhe63s4YpwHphSDjd",
  "key28": "3V7sHXTuJkrE6Yd8acqmMX2NnHWfn7t9WdHcYFKP6kwsq8VSgG1rn6sfLR3AX4d3P9aJ15aS22VryHSQRaNMkY5M",
  "key29": "522cGBvHczAmzGwheer7m42p78UeNFyUQYPm2DVVKsmrbAjaDYLF9GgysmaHjkrnpBonZqoSLaPM964tCVpozw8s",
  "key30": "43enxmdb1aKaZyF29P26vJ5QrDgyJfTTCEP7bdsyPu8npSDwNhQkERqtAQeqSJSrythcZ5WC2QFPzxGagofVyKEw",
  "key31": "2McxwhkEexbjcEVFhKaf4sdT7A7BWremwtzPomRmAeEdgpQHLyAP8EEhaJmrHdSe4YQXnECrA23zkVUXLpobEus9"
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
