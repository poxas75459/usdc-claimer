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
    "4GNGYYNKeKW7A66L3kk5JJFyrsBtpqp2ZSm1Rd5BA6qn8W6hkJhUvpKyHCz5cZRLhF1m4aRBSHWdrpgEvNvSsb19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUtEP4xTqeYoTj6UArBt9xDoXS8e8omsS12AUaeG9Vt1VWnw4NsfDUA3p3LpCy9o9Ygr52M7iPbFvKtHsxQPTn8",
  "key1": "5piGcjqAziwBiUVBE1wD6pcpebwHWdwZyFwNEachwzV92u9TbA77JGrVbGKzshJ3y6XEAKKLYs4pEgJUfadEsHTp",
  "key2": "4ohue6imhop5iHTsSau8MK9oJApjKW5ogCBUqawUtHoD4YzfSuLeZqVxBm4YPnSDBbakB4vJAqzm4w949S43H3qK",
  "key3": "e6EYLidzAzz9o6ft3BZZMDpyyTrWLCv9gYyVSHri8Gevbi5Yx3DieS5sR8erT5YMnNW45LkqDKUTuG5ty4TMK9i",
  "key4": "urG7jJyHf7ts5YbGwZiSn6DGXjFjhW8B2rzBqFCVydUSUzqg3mfd4YKgVe8gFsMSoiK78ZrBDHY6knC5Ep2hkZF",
  "key5": "4bzCcigaxdr5Xo2dr1TWZHkfitrQQW5yBZPucagFzgJu5R5DcKs29Ruj4w8s5gmj4s82dycTbzuMy9ZDincNv3mK",
  "key6": "2hP4ZCHFYeg9uwnwQj9eMSZmS4Bot5XUfzHLBce7KAC9TfVQMvkmqwbgAy5xQXMgWia6ShinHygRsf4CDVQxavfj",
  "key7": "4rGnWXtiTES4MfwrcCtX53XcBEe5tw5p33tPZXnvbXsQs1AAErow53wtK7z5jsmnVUQm9CXzBna6ceNS4H6sFsV",
  "key8": "Rv329sAgFqb1d8b5KAim64rBJkCWPbn64sLCdPQ5dSn9adMLqVgVp6cxybe6FSYViefaHUioYFf2ucKPBNauUzU",
  "key9": "3WsNPFNJE2P6QRffx1PU6iiz9TwoTjYF9z6ZtCc1g6eyymCPPR88tY41fiXhDgfcoZ6pQF98xMKp4Zdyy1FGB8VU",
  "key10": "3LaF3gTNaRaiWia8Qk4Hidsdyvau9V7QD1JhQgvQCkjzVqcbA16sonUWMe3qTxEKic1opvXaQM4UtWzeSJkDkFpZ",
  "key11": "3JqGDrwkLcxBDyHwMcVech3dR9B4dnTjay161dPFgGzzFpMnchDSZKWxbhF7LZDWPCvTeXc2ZZcN5vcpai9WMjEA",
  "key12": "4ePV8pi9JqvQcgojaC8uo4tEu8gaSsTxWTVVyLk7uLipJ8BiHsqHm6vbfDkVi7Vic91AdSY9Jo6gD3xVFmdg3RFB",
  "key13": "MgJui3k4E5JAEXAJAQHLCdaCBh9kuoTKybVKvBxLjB8fNLgEByRUpJkt3LsJtXYGrLiQ3cCeMEXG7YZs5TcLUMk",
  "key14": "3zDW2bVqDdx3pusfgAQ2RYCcp41xXkPg9ZDoMMLT4Ci3PL1dGK8Q5hd5MyiG5XPTaJzBx2B99rHp3AESpgPsS98K",
  "key15": "EptdRjdBfyeuMEGtHUo8wjtC1vmanbo3rLQ6HMw5ECWRpSuUrhriKwokkRqYYJo2rva8yLADw1eWaWMPCXN8kMp",
  "key16": "4Z1Zw33N9EqQGoj8C1U1mNsboAKy9pqr6EzFtzL5eRPTrEvnwVUsrbnYD47K9sMcDvxnQa4bpAW1JFY3zQBdm3wq",
  "key17": "wx24sSN7adGZAZzE43B412NpsfxZVdmhf9bfNEh3m3iYMmLiUh3kmCwRmnWWtaEGhdAy7Ezr2JMaJjuKFpqeZHz",
  "key18": "5feaVj7X6nThuHmNGurdwjNWP8yvDMabh6F9gP6NdE3hodMoyCQjWeDeB4DFzAMSSw9skzSvsT2pJDU6TG2ZCH6k",
  "key19": "5Wf9YsZ9GLLkDei9eTRACNqiNm2LHYK9FdyeYyDDnM5u6cjLyMKZHoR9L4fV9BWCQAG38XAMbUJVqvEKof33DSLk",
  "key20": "5pKCtQ6nHePxPNwbM62z971LHCWATrFBiKbE9KCLyj2CABpBGTr1FbPpR3GGAf4Gmj9iPkbBigYQmLaf83YsL9xP",
  "key21": "3BeezjU1TA47ahe5xRVrmmFGn5H3KfzqzPDhFNq97MSKwomje5odZCBF1C3iz2g47qEZKBZzVkN2QDX6teVeZjrQ",
  "key22": "38gVCnPgwHGDQ3VcmvqmcG3y6jYdG8ehyycHMdZrZqfhdr17hqNyEtAGPp96RqEnZUCC3tGxTMZtL83jUTdmJzWD",
  "key23": "32TtkuRPZQV7LMEbF5dcsAwgvjWhvtrzEBdP9af6wBscprcHoK67KMvYJYroVmqF2aFmh7UW85MH8bSmX5ZJcfVc",
  "key24": "2xQg9yw52vfs1JydMzFDvtiomvbNwgz1xo5hh3tQAhY4mi5vF8UU2XzMm85emVL5Caw8pSgSkJdxrSJwpkek5Yoc",
  "key25": "3UY7ViF6xuYuRLpHJrpHmW4u7ybHZ7tNi47c3Lni1PRYErYgpYaJugcw49cKVzbd3A9E23TYKWsPMNocdUMPvXJX"
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
