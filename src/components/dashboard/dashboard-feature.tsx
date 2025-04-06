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
    "3GJUFES3q9X1Lo6umX1kTqSoXybvsd4xNkj4kzufMF8MUz2rYo65Yhs2Xz1G5aYQ992DiRN1Goos5cXQx14Yhfi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VWY9QLxBMDaRbtoNed1MZME2fapmkvYpVLQTApm4b2pWCxNLM8dPkS2Ta5g7CnbpRicEThkPNriXmasQMqDf5Db",
  "key1": "5eqrtYEMiyxJ5uQZV3LiQhWNPefZVq2wLdJVonJ82r7x2aEabpsS6ZvnVWyTzuhvC8Ku7zEkqp9T7aU75eLLAG93",
  "key2": "44HzXixs4JM4jfbKGz5cy5ZagWM9REX4sDFqiT5bTSuqBuRfd9rCmwbD4s2aQ9EvFDAM9TysRNZkPycSfGQ8xk5Z",
  "key3": "2uVraqMKqpFchwbs3HcmvWoNhsQRhY8nQudz9TDmfpog5yornyQxgRvkaHs9inYbzFfb27F6djL5t5eC28PPEUSy",
  "key4": "5at1nEf5pgZ5jYjDJbckUWQfqjDmEi9zdhnepXeFDGTLtuSJZCA6JQRnwsARdwtQ19b24JGbRpCVb4QYRM1AfnXM",
  "key5": "3AkffQGa4YUGyzQkTCXWTwg3B33Q2JdPgVduNQWXhV5o2FPRmHGS14QrLBDTqrSC6BBDgWkK6UQhEX5ePtaFaWW1",
  "key6": "4fcn1ps4VAsJZeVfV7kzfQSmS69npVeiwq4NNfABJKajshnja2hAadXoz79uA2fwhWKXCzYUDmxhcCKi1pFjbVR5",
  "key7": "3soGffZBcfybbrNRZV2xDKBNpxveiRpqm8sTjovAHn3RuKVFbfK7RDkzvzTUY9upgchETHicxASWmaig8YtG5bfW",
  "key8": "sxCqEWP4HuaHdTqYQdh1rqUT3gAneXqmTaV93cBgF5yHY5fpjb8bLiCgaaoTZTr5edJZ8NQC67icfQgTren7syq",
  "key9": "LnSd1tjNyf219hpqL46uDzo2FRr1orz4tkrFSq3sbyeUT9W6wnbH6xUAMExtn4vtRUU5cQ78TZYRgdogXGnJfrw",
  "key10": "2F72b5p1UMiyQLNQUaCfoFqhjrr26fq9LkrRbMcY21s7oXy1c9hQ2zvgb6desUSXJQu5FNmSMtF5Lw6NznMEkiaD",
  "key11": "WFzhmLHvK3dusBQHNxF7vK3hZhT5aKhzE7UhmrvpSzvtsjqiVC55UTQZH422YRZ71JFK95TtPT7SwEs8ZPN74Pi",
  "key12": "4CiAysqBNwRmoKXRLUybg6BCJbGSEorb3LsKasiTtvY42CcUx6ETmQpTFBgT43pcKzZQMBVUMFQLnWMMo1VaDM82",
  "key13": "ACmRLKPpUcui5Vs8qHyc4S53VwSBp28fTmaEeJiQ8qBTHDAqXQZ3H26UBsb4y5GHiTqo2Mb3is8gyidDitKPWdQ",
  "key14": "5oM72yqxFsiRw2JN7WonudcfNkYx11jUC3P6CbH1FyDSBdHJHK73X96sKHqAbU5yKoxfunDzwTMBvhSwpjcWLbDH",
  "key15": "CoC6L4Sy9GC6cVhYQ8wubDYQuqy45CLBMDWdBKPEiYXMpYFvzfuVnJrhfvLBaXvw4H1ssgitEzpZ2pd55Kg8rkh",
  "key16": "4VfTGk2Xrzd27VvNwpcGvzreaeNwNPcGB3M6h6XL17TvLPYznUsZv9eUWj8QMJg7yofmDxKdxNJtr66yJvbLJi4n",
  "key17": "44M4nxni2Xj4SteQwksXcbyZerm2rUgxquvYJ1VYCTWQXoViXhJajvzTZ3o544BKdARgEpu2V7bd5FT4pvu5qw9r",
  "key18": "3mtpaSibBMnodrfp4Rb4o6Z3BUnejdwF3aUBiWk8JsxVZM9reV7MiSAD1sJbqaN5zYScawAMy32xsUexGFwa2vhE",
  "key19": "jQJEH1JHLKETEtunX4TrbBbU4AuNzRtrTXCmER2r2gT77ekkRa4tM1v1JXr4g7QtQPShYDDRfkvFmyS4KyJaa1n",
  "key20": "BZYvzBH6u8XRzNB5DoHGwKgtNs5s74Jyzce65hiXCWDSTXHyT7wViRAaRsJx5CBdppoK7owtKuPLwCb1YmdzhoD",
  "key21": "HExVceUy5nG2ttXsJMuLoiCEEn8UwrRD31VxE6roiq66V3HCdnubZp7fYaPefku2eqDETcMCCz6WwCNzmRQyDCo",
  "key22": "2Jamo8ZPLFA85WCC8Fxk7i9pThij7KcgeWPp2MoDkRoe3pJkzUftjsPjL8RfH4zkpLy45iSBobdiF1k8KQv8P6M4",
  "key23": "3zGU9yXb1froWFsyW2it9PfA8crJyvQQLJkM9GZQSJN43VK2pxGDo9tz7pYC5q383TboYVtn8YCJoMSTEGMyLd8d",
  "key24": "3DpFrVdtY4RSP3bGLBxxDA6QXYQiiYS6baF5Ad4EbokPSDeaasMCQYzh8BzYrCz46KYpFDCqXmx8NMb9fjRAbWvg",
  "key25": "35SRCG4qZ8K5tSWtMimkuJtu1jDJVskCB3M4W2bTcLPfFo1MtVQPngvx53bvYPh2vMA68Pfx72N5ps1p5ZnbZj5h",
  "key26": "4PH6f6h2cBGbN2jPWxBXQ2ZRvT3Nj1PaEkY56erS8QREfGoDnWBgk5KtEojhhk7q6XWxrH19ifPeD7cmWr2yhTTN"
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
