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
    "XZwuAUzfsvLBYxXTezzRXsLRDMRfKpqwohU3U4GrB8H6kBpDk31y8APQu99yqquvhwoz74ceTuj8VZtB5CmyhdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFcpusULgPnggEnc5o9ris43F1sdar5LFr3eKmrcKdQZXGpDYw2Ymvq6tRwReyKdCTFjoHM5yN5hN4Cy91z7x2P",
  "key1": "qe9ZvLsh8objxjpEp3ehZDr8aNZqr5sVG4Y86hffbM1eCjCMeQfiojKUCxJ7DoSjxHtSc1oRu66ZCArMrgcMYTd",
  "key2": "27dRUNpZarZgxmqjLbYeEFbb2ntYnnSRac7gdk4FnodcxHQpvDZSGryTWFP1yGBsq5ZGpP1nJHpBFDMcSV2Dsaq9",
  "key3": "5VDgsuRvzFuuV7HXwphds4FkbiPzHuYcnC4g6WPQE5V9YkKnM2qkwXpyZRRpmufvTBZVrXg8GNA7Q3ZXatjVWxuv",
  "key4": "62Yt383m6B3mGbCoGXyF6iedkqzVYXeBiwFyUcGcs3JWESDrVAz6HmQC3U4irnipyvkNy2VKdSoHxuVzuHbe2rkj",
  "key5": "3CdwK1iYM6uXkHGERiettgTCVuihrqJ2RtABbjstGdVau9tTXsLnuAy51KStnz2pY7s8A3kHdw3iErXt9ty3K3vQ",
  "key6": "5BoVNtSaDog6Fj6SnU54BkSnYZTffuTNFApg8jey8pojySCjQnap1Hdm8cZ5UCixitypLt17LktAW3UhfP1DAvk7",
  "key7": "3YHqjrkk8tMBUge4UwVShmGNvyda2E4uVGUduJ9ToULpY1RyEtwbQoKKTAzcgiMHHXKAjudyEeZZ4aRtDGzGX5BD",
  "key8": "LC34Pp2kkoGwLuF3YwPUGGUbL3b3BegA1mLXpdnYFAXnhXErUjz77vBASkZhSkU4MhrnYteQLPGNcSzrEZq3HSb",
  "key9": "2Rt1YcNFgTPgDMB7qjonoDna3vyFppzkuc3SYnnhy8Txk9YYmygQGmUP2tWhXfYGonD4W9pQBew4EJYvXACHDXSh",
  "key10": "2ZtCAtB4kX8LrLgmkiCuWmbwmSDAo6octRr5ogVZAxH7gqr58QvqvuLpiLs1momLqujnUMYrpLTGv9wL7W2hKYe3",
  "key11": "3THc5zaYi2S5ESJY2U1a9Uak7JfuHxaWcyFCCc5yQh96iAgXNuT8hVQMAXgNngqsqoHjXCee3Ut4mxZKJewFEpPn",
  "key12": "9Zjr6Hn3ibFzvLv38KHTMds5kzusHGmsaekimXPxvkyHHGWFHgGpPLomPCPYB2fotocM632cq6EwLshRzVza2C3",
  "key13": "4T6CXVQfaxDgwwD3kocpGmGxBrVtJu3hqMaDTvojdHotUXXSqW71RYD8HFvgGvsw2SBvGNmGEmqLxsyo4ueQSpoU",
  "key14": "5w7Hk5uRX5jck2oZoRdqVLEYX9iwWB6RRqgqVQ9qmHVhYQiJPawktgNfFP4RgNH7z6Qpqo4Cc97aQvd9T3YdYTrv",
  "key15": "5qoqh5VD3ngcBFzgbGthUuX2qtSBKoJdZgFAF1vni6YWQgWBbUF4NXtcAdtHuo2nDQRkFsoj73jTAQY1RAkvmovM",
  "key16": "5vq3Y9KFSMuj8EEU8S6xzsFZn2VizmRn95bjNSGN3MJVC8gPiK2zBeWyibZucw2cs4RGNmcdppH66b44vh3aRFRi",
  "key17": "2EfQmt4Shd5kea4RYr6P4VWC5SQobegYA6obuAphbGVoG52RYuHbKFmEazieCkg4NyVg82nrk8BvFY3DMfFcGZqj",
  "key18": "JY5bJ2TJB2232NfYCKG8X1XmanM3LkQNLYfcvWVTdtB4XGWMtDnPPYn46MwPYRoGgSbkXkvzmRL2ZhUc8aeJt4X",
  "key19": "3QrYcPYvzvgpdwGALKSpmSvEXAigkzy2eZ81hi2WDv1eHX1uUr78MprFR6vhSmYwJzwnrv2hGEaAGXMe1tsGw4hD",
  "key20": "4YGt1uVFtL7JT1zMPZn9fFt1NZSWNZzGHjrAWU8eoCoT711GXdV87Qf7fpTFJACiMNVjbzQQfunLba55WwmX7VAx",
  "key21": "Y7YtFdXxPUYTgGXTTVTNikf51YSSzp9aawMuJXEvKtqp8KCvfHZXDioTeHjBr1BeXEt1JcqFkT5jUSi7LQGQts3",
  "key22": "33WJ72zDn2fcH7hQNTFK26qDbgU6GuerjZCtxxwAbP6QReuns8gYdHTbyTHGUFwYhak8ytgLh4cvx5XyfeHmjq8W",
  "key23": "5QuqMzH1VewohADEHtwrMyNriErN3GNuVoKwDVA9sqU5L2ok65srhbb1iXR9Lq9fZWR6vhWckmk2sBpeaBJnDMtJ",
  "key24": "5WpS7uwqwA5fbx7e3AaMdvudYe9KdbDmQYnuARcsYFnXU8Kj2PDzcigJCq7KtTPzX3bL3aJSMgsn6UL1JhqgL5JV",
  "key25": "2AdsGD13kBsf4HJv6FWHSTfFbTfKk82muB7oRHc4P5616E2N54SaJS5kjebdJHEcRoTFhPbQdiPdCmrzDjMrVjkk",
  "key26": "5Bam6VahuGLLtdLox4KgAbkfgXxbzpeSSamDpJJosxUYR2G8YvnXQ8TQjAp64GfeYjzjnXSCzmN3H6Qwrsm2UQtd"
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
