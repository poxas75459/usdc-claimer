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
    "5LVsceyXCBoxE2HPE1CQzKGJEUPKifk86U6isDhBybXKo6xUWiwaw8vCDXaGpfddWp5pdQYs7tYSW5qw2i46xw4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3N9uAMuVrupX7B3pcrHEDM13PmF8vXXy5LAv4fFzG62ecs3EDRTEJkQ82WfVzA4c6JE1z8ZCxXd8g6ASoXsY7z",
  "key1": "2wu75s8eY6toPwy52MpABPLvqjtTJEc7AHD4end2y3V34EMPuZDXnu9zFNPztynqRsfahLg6C7FtsLMzrLWhuFix",
  "key2": "2jufMuHyrwEZyQL4ihbjEhKtJuaL8mQuurKf4Qx6ZH35gtEfz5ViUHawuW5xVxvToDm6rjAZke2vYjJrYdtoas2j",
  "key3": "4D1hBCY5u8rA7HuMQ4YeWU3mepXS3kdESeTo46PkamnimD7eWU4s93iM228MNvbNmm1zXiaikMavdPTrruwwPy1",
  "key4": "3bmzE9u4h7pYKs9pmseDrCmrRqQXGxrtx6TLjdNuvX2XjdDqygVS2ewRxMHCcrKjksierWoSvmvzirLG5Mdyiyd8",
  "key5": "2hTPX2yxBXuGYbgpS3ywTFRnJSToehSchZwsjbYVjTQC4uES6qJFfELBECyy8yYXjHD2ifkfptJua84P8KTxaRiZ",
  "key6": "4UXHiVg2b6iVJNbwJLsGcHLEnZ5qtWqksGjbHvna6xEZaBBmwSWRBhEJiEDME9Zc2FWqwoVwt29BBKeF2sXfutyw",
  "key7": "3BkByNsQycfX85kfTEtqWyr4PgcmCp2zRmRmfXQtkjn2YEcNciTpXVRzAMQPucbidJeU2vNWPp5SvBWqvky8kXYb",
  "key8": "4TS9vEvNZFsWWRTex9ZHAkDv7bFNEPKnvyS3D21cJS2bnVmKkqEh1BMQMPEefWbkRbEpppK63aoTQWp5QDxm7Mwg",
  "key9": "3xUYYD2AsEH5KXAKTE2hMJ77Ageu1UYU1DTS3QaLvT15rHqc6kwmSWUnc2vKVC33EUKNMs6EaPT5aGku8QZKk4RN",
  "key10": "3awJUqdqs3y5QJiJDf9rJoutNwWEQH38AZFTmXsxgDQ4PWGj9oFcxaVTumvNg4QASSjWcLHaMVhpN7XsP5wGDP41",
  "key11": "2KMkzQbgn11puT9wi4rcKmYMd6A28BFaC2LejnsS5C4PTNYDsxcH4NLy6jpkpVgLDLgzcDKHtSrEBfbkCHmgVWtq",
  "key12": "46zckgEHfVyHKqf4MCSCyrKWBBfzs7BuiEDH6bSU4np2u9Er9zsB6Q6DL9jV5WmaQTvWHkm8kDXTRhRvGV8pBCKg",
  "key13": "3H4Ra1BfXYJGKFP8Dt5WdWs2AkKiUms51AJeh9YuHscTYRbR7tC5tuvBzhAFoexYY5ZTHe16peS4tWrmnkWvwJvH",
  "key14": "5du9jfG6RnhJtD2QTxW8cmpKyGSL55AQzQZR32qqJD3aEhsd5sAxkM6CWC6XZiqpSVTYNd4hnzRWdpeKmG5qtjUW",
  "key15": "5BhZJFzjpn5oQvWXe4Q8BbP35qMMarxQUq3MLDxM1EUUSYQWY1Wg33Qtaw7zvL3tPjj577djiPxfte6Qw1Cq24fK",
  "key16": "2gHqzcvtC7RA5Cg4Juc87jaQ6k1sJF2BDWZu1gTnKWe6kna6tGN9ApacKbd6dgzpU7gvTy2PgYcvCtyeLR7JFN9i",
  "key17": "F1TWN3qyXbKb1nrjW7YSJRA1ui2aVhMwy29oijdzizgdAJ9r3szSkXBTPXiwKXm7LpmNTERajHY6Mp4uYg8B9wg",
  "key18": "9i9Js9V2V9efo7mCLzwhvPGJUfwZr6scmWbWAGFBxex5oBmh4oY9X5tmTVyvhYYyhbMUDHkWL8sxFNqkQeGeFoy",
  "key19": "3PSJieeMpk5GyCTCZcmZDw4T2qS4DAUd5o3Ax99o8XJpptvZcCHDiUF1BTNyTzZjtSbzRACtuA6W3hQgd9WEkqNo",
  "key20": "dpLS2tZrYqq5LgsZttJRu8dpgWbjKR5THyb4jgsmnozvhsbhT2RxattooqQK2e5wVP9g1rYva8fJFNK9JvCjXY6",
  "key21": "tZpzHQwqrSU2J83JhWg9k6hVYzB42UbkvNSBT6QawxcKzMJj8d6hpdCbckTJtgyAbXxUmqphESubgmP1Wr3e9tM",
  "key22": "4THmU5vt896BN9sGQrtGKWmQjLmZpEn8hPdNbrKvjJMTZViupNT32jZ7t5XeoDSye5huwGqb7dvqe9euGrDDfCsB",
  "key23": "3jd31YbnhrL69JCPL4s6y6t6kQBA4gLz8bPmH8jVuG4KMumcNNENCdBgZcB8v3NH7FC2ZrWzgaAcucpkTndWkxvT",
  "key24": "5qTQv89knDajtn4ry6MAoMKPjzdt3tuHYF4jQYhGSUSDmrxVDCWrJZQE21gnLTDxLKnGhdQHvG76u7g8HEBVKPad",
  "key25": "125Vje7eZ9FmstjDM3Tw3TjMuDm9CD2iWLmQm6rzGDSbAW25eFPVhyFQpWfhthetGBViVQ1UpAeYxvUUZar2fix"
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
