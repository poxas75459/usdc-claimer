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
    "5ecUWYVKM2nvAed3RExokbH8Kfhx1dLPiXH3TXKbevQVJbh3gLNWFiHV7Mrwnz41rXAdJcu5K9SQX7f8mGGUtu14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KqTJfQCSirp1N2KX8oQ2kKxW7HXM63Lje38GrbzxLPitDPQYkDNp6Jk7iJS8BChWBV8m58QFBxW9c5jrVbVQWD8",
  "key1": "4QymsxSc7nVgwCxuFsrq8PQkhqk3cqbfQNvwLBR6x3Jiq2UcB3CQVAvco4zRbWVUt68EN57LvHSTqxvEKvyRQRY",
  "key2": "58qfsWNhg9BefwJ7EcB88UbApGDmFXd4z5PTEWmD6N4qeQtcsfTFnFtwpWCuU6WXxxEtxp8QYnbjJBb6Jr7HvcbS",
  "key3": "2z6JC6ka6hp1YSZTJpchj83yQYb7UTkFmcp1LNeASGkeg6tYh18EUEWMwCV3CAddQKfYA3JwDaewWaiToc2YDByN",
  "key4": "3qjrNMoxDWHZ2JToFvCTtiPFFk6F3GmSS4b3xLH9FK69puJz3wKnbHgiUiJyPnTj7qNW7K1vr4MpsRmbuEJYTpdC",
  "key5": "3KgyPaVSmPSxtRvDCLE8VC384tPKxGzq56WA2QtFjQ3CWFVdhFmZ4wa4P9CAKvRMK5VBUEPq6vRcoCjSxBiSuf3W",
  "key6": "35nemSZSdtC8jZD1SCvroMFmCoZDTAxfoGgJDK6Lix12RrAFyLpPLKmFK3CiyQdGFw8qroPbFeAuXAayevF5d1nK",
  "key7": "4CuPn1PDi5Aa1EAXH6azi2Xc26bsKcTCkhndb3yquWt8oVAyJRcS5bY5oKKXp5b3UYBq8kyqsS83WPdbmpYMMe9i",
  "key8": "5CsyY3UctY6xL5gYKn939WzH7YiohmdLr2Rt3VhDFke6TdkQPKgEXPjjP3tQpuMGEX4KvFSXJX23QD8DuvR6Q9Zp",
  "key9": "26z5g6Vt6eW1ERC2HXqyAcbbtTh8MqTAC7bqmZoRXFifz2eZFZqc1czXgrAGtHqMZ1RZ8N7d4omiuGGMREDSnEXd",
  "key10": "4C7iGKyLtPMrHYPRgT8K3Nce5FbYT1LgcYnZEEdd6mVtYJHVAY5vqfZYjrBJdN6469xDB6rrUSysRmwfYFnhXCHt",
  "key11": "7HmrENTyvQ9hHe4PbzHLyeTtYcxDWKZzmXsbDLHBdxb1yPJeU9vAo4AfXnxECGzHAZYqkp1RTeiPeyaLsW59oJB",
  "key12": "jSyd3p5gPPxHZRwSiZMiPFGMsoPEZpwoBgDD6m8AU8Mhctx1Sk4LhEdpYsbbwZBPuBANrc2sjkQprR7733AP39a",
  "key13": "2cm3EYheMBd4V1tGFaxc6BbQAdBDJFrgL9W3ERaMup1Eed5dDFkQf9dZ3fb4LjkbYF1yn3jfcwS8ToEGHy8q1uFh",
  "key14": "2YGKqRKj4erXZRx2q8TLbnVj2LRqaQNoEpVrWbt1K3t9pAi1Ze2g1ExfEmUSyLgb5nUE47u3A6WWnS5pDjAXWs9o",
  "key15": "G5Zd9c9vGTZj2FQe8s6WZgtVScWhzEssxD7amW16Z7JsqbQs6d7vdH9ta7UbURxcNPbz9ys8yZR4saF2fjr6SxM",
  "key16": "3BeiZsZUiLcuVnGhzH6XgWzjMhSjAA75QEhbvJQu1QPcfxvmPYR4RJnbg999Qb5KW57nzLKFs1FbDbeaqcQxNaom",
  "key17": "18c3fP8iDDi4pwhYnBukdgmtmARA7nEWULC6gSdCTwMmsavnuu9J2iJd1SYt2TCYEQ12534Gxbv5AhWNKZnoJJZ",
  "key18": "2tb1DfFeQTbKcjnmVeVcwR3HesrWEXhty1ZyhmPbeYaMCGingz1gyu5MtNf9kryxpVzNnXrGKHXceVPXzUR52NXQ",
  "key19": "2HGypLcmAiG7XMibsvTpR8xfT8iFmruGRhscMKUUTgJLZFJnZoPHbFfcbb2fwb9Ys1TYn3Cha9BWwtVJVsCDBFAJ",
  "key20": "22QpZd62aW59saseZk7Kd5JfsP4bidyWGbeGUUXW2jd2QzqPURFfGAkb3JoVGM5ivuqPPACdX8oye62eBTbc7A8b",
  "key21": "5Ph4kBfDCSjCtvX6V4vvBW8uEK9HTDmrwR8dMh81ddjvefWz5zoskkiED3SkztpGTBQ12za1RQe9Yrjk4PB8A2Yq",
  "key22": "2d4QVX1cLK9euehVddM486kwCoyVYNQhtKbhAJNY516PvsSqjqpEF58pLBCNcEohrphkD1vg6pkWEYRRhFLJjRbr",
  "key23": "5s93Aebf4RxJHaUZNAhuduTUqzDNDM6d7Ni9hvGdUKRPv95GskgGsHa3cqBhZyeWJ5NZPMGj5Se6uXDhYkRyUy74",
  "key24": "55cTtf9u5pFmJo7rC7v5xqv6xAPCSCy6Fhu7WRpkprYKQcykbaZNiDCS2ubULBs8svk1Gsx4AktGtuEJxdDLFYVQ",
  "key25": "5ma82SHCBhmWtGc8MHCEpa5ZL5ZQBQ8FWYnBqUfWnMjH7W8h9bAUcvqDGnvTrJAjKSnP1cbe41A9V62rH8186vzn",
  "key26": "241NigzVxXSMAD2QWA6neE8covBiufdRFTHiioV9MxvRHH9VSQeEQDRZSmfmcWU7nNLsjbrp5Harwv4tphFysz2L",
  "key27": "3N4fB54UA2HgHakF9xkJeneu8CN4HrMbi5Tu1vx6GpqJbfzhosEFS83Wrjfkmo3xNUCRmdsG5G6n7PUVkhu6EfXD"
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
