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
    "2ppsLTRdbpFqpAbMLhM2yXPq3skbcfipHVFzmzKPHMb7dd23wFUh7kKDsEaFeHJmYbMmrqqDVSka9KyFFPwMePnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z9uJKsdAyWq3wcXXpcZoNYw6UrReTtdRSpgUkQNPEH3iEieHyLdEapCQcTzcqsCFkHdXhAT1ZpnkAfCN8bbnzsT",
  "key1": "zStiTuMGMRDW4ZGpgAXunea4yLdP8e9fjtA5qnFJr7EW8cvdq2skaVfjDgEnzN5AYSYb6a2rxqng1gg9bqDZ9Co",
  "key2": "3MKYQaz3uqya9qxSJQMEb3Xf7XaH1nwayzzZMARgTyTyuHUqprtXFJi2KbgSAWyHczzmPHmG682cmmPT2ryoyntx",
  "key3": "5m3S9aHdoJRv2kkPN6yWw6XpzPAwsqA4F65r85DTJUdKyxKM2Qh1Sc3H7VP5h15UQXauLGH8b5fBK8H1MyUJe8xy",
  "key4": "3MJKDK8S33eLPjEGxSeEZ2qFFu7JsLBXpDRjFVbd8NjvGgX1rfLUkkiEwyQTNXoKWeogL39BuZuUvX874FzAEguq",
  "key5": "5F4iLWUsVUJ1cgDJF27T4DewLYdYj1PtGd2u7GNNb2rMyY4KqHe1Hg7cQwr8AGDWnqvJi9veXB1BvEKXgrAxxGTi",
  "key6": "5hsFpKDYRBEH6fkZj21PaNTcsy46FBexpjZUg7DP5LY2EiLnKzPu3B5mKtrtFZ7WW51BEwmV5JEQudjTmDk6X6CZ",
  "key7": "2pCzqMAS1YBvLychpvzzYrTix7ac1j69RnjrxzuxARojxAvriP26oe5beyfoHUEBErXhnjA8MVZpEP7nveBTTbSX",
  "key8": "4FfuSwZaJfQKfqjPBJTgaiKkjmFkcPbzYgFh2a89m8fmwf82N3EzBYqjiZJxJDMCExgVN5cCLJdM5VQsJEsRxxF9",
  "key9": "5MKREyvaDooevBqBZUacnDBVzfGQtU3SHpfUeii8nM6JrzF6MDKkMsikg2jq3TgFQxpQpUPSkXEdBTJpU3UAdojv",
  "key10": "3wBsmnMvnwNao3dqzFRrWGgedKdnjzAUrbitKGLE6q5XBmMiEPH7h3Jp2PNEh3hbBXkKiK3YQsUVvo631eHe7Q7p",
  "key11": "4cQPNqCfLmZUCzntf4AEJ1tQwpeqJH2tK1dV11n4wBSBLCBdiHtnwibJqAQMqUCu4mcfttZ7DUzHAZ7h46rxGhVp",
  "key12": "4tJ7NgdLQQMoHCmVLUZnH3MWvrMcV6NtzY1vp41wSLYh1dP2VzDuqArsaxYEcpnc4fsXyr7iQBmGbsYYGCmgRnWR",
  "key13": "56oBiEQxefbfbyrXKaw2SQWU61fAqL9ehdhoMJQMzZQqs83toZ2ztd4wZkVc9sbA4Xw45E34fNECBFqtuP4Tf5Xk",
  "key14": "2DPtagvDtt8EaLYjQ1NPTTaLR2mBkqJNfEPCd9wkWJF9oVT3rVQ2kNMZJEFcmeNgpqRQHKNUh1qNNUFstMFKkKQw",
  "key15": "2Tx1977TJRVBzePWc9F7B6CMonH82icrUNVmJaCHUnxcU8ztNUEibsQ8t28eNca3mGzdmDcbT6kkzjSph74hENHZ",
  "key16": "Vnpr7Qd1bCAYFqwCWY5851B4BpXBfJ66eoLjCXEk1dbTnBAhkgLXfL7v23S5gFchkrQ6m6upn9nZ37Uye3vRfzv",
  "key17": "5VAVXpUS2WxEact7AfW48oaiEbBJnPHu7ux2hwm7FafV6uaqETkuawKNM8CHVRLKhdgEWzjDhDtbQjf8Sro7mQiy",
  "key18": "gUMbDqkU3SQnwAYVvyHbT6jcPrGJd45odhU1ixQ2D73W9UrDrLmFk2Gq9ccdA97KsEucXo3b6gDHmMRbya3WgcZ",
  "key19": "62tLLrNUycwvhNUXegMVGBi9cPrZcvFZHFfpBoRXpviCNfTrJeBcprq3Hfz6mE62e935rAhYYouM3tJnuhr6CEoc",
  "key20": "3YwYKsepFpWYfkyre2ZcP1DmCXhBKA9fAzUHaZf8wmFr5QxgY3ucoJdGYbq5GUBXk8CoPBXBnegxUJ2sTc1WDji8",
  "key21": "3idVGKN7LzQD7BgYewmN3Jha46Duq7WFvZXfUDzdmjbdW4NVYTBSjfSMQomsXdZ8vpLtmCbfTXjTKnsFB9kqujnA",
  "key22": "36BHoZkgwiVXPox4Ln8AWmNNViX3ERGd3g7kUQ8MxSz8raPBPimYRHVq745yEvsT4fRaT2f3w4jn1FBXyFXnwhAX",
  "key23": "3L23Ksey6gLXwPZiPFkNQ329VSci2Wb6zuffSBUrbqRZf2kFC3aU1mr8d1PDonEtcLDAQadom1SrhcHEvQuAt9eg",
  "key24": "2teNBvWTaUW1N2fMobQhhc9WFd8ZGtLQwmXuKXgqoAoSF56oafBZ8ZuGcWPhBpvbr7Fgfe7djNF2zhk7oFhY3Yp7",
  "key25": "2J6PCKsxyfYh2jDwxbp5t3i6j4gL2BM5SJDWAtYD3kRESCB3HoUvu4MrLadggxhMUja7Rom9xNJ4nznN47GhqxD2",
  "key26": "7esTmXeK4oipt2DtVZptAY9Q42A62LaDqzpDexCZkiCUM8KKEerZevULs4EEXV17YSv869bsq4Mr9RmywYFQC4Y",
  "key27": "beE43cKGDsjEMZ7WNrhEmHUPjXTpvBn3MpNrP213en9iVXsV74ZZr4khopCwu82L2sDSd8a3WzgLE5PDBPHo1wN",
  "key28": "22ykQCKDMwrFiKCYqFNQka3uj4gVsaQ1FBne4dhWmXLNRVebcZP1VKFE3RWUWJEiAGaVeuASkNFhMJbqL9QgmxzT",
  "key29": "4AM2J8pwK4MUfPAxAswbzZS56xcyFb7xVpWiZL4voL2rPpWx4WFohRco3NQZNqT2C39kfc48A9wCo6EpCwSfebm2",
  "key30": "5UYQirfR8uYNgqKhJXtmQrfixakWHth1H5eT7KoMr2nHGieMTvpa1sz5skUnDLphmkn3JisBEDsrM9mAk7QQ3NyJ",
  "key31": "2XRXoyAcWCsGnxfSLWbBRc8w7gBBb1LmTP6piZz4H6NyHvXUNyt6Yh1CChc6JEcaYKi3fkMcGJT7SAbGwbmhYawG",
  "key32": "3x3wjaUGDmA2JG9gaSZypQkLfTn4JomxUU7wxTTsGMiVHhDFSuRDzmFRTins3q8AgwU75amCF3C1X12vBou4ETgT",
  "key33": "KtrKy9udpkhu9jdPvyocWZQrFPACeCBxMqj7cLG9irwb5kiDcYCapR3H6vc9ZLyb5tVDGKwWktvs4hChQHtLrbN"
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
