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
    "54333w95jQeKHTekvW6eRcreZqSavbVygGsW551xUiqAMi8Us7vJbD3eEDZGbpuDTXe3g26EeX8mxrZfTWP4DniU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zkrstmfZqeLD7JtuuB5oakHxiNnXA8pkLKcauDcyjg2SgmsbNpHxUwBktqud4wBjYrtENj6iDbquU7DwPcGAV6i",
  "key1": "35JME3WchMjfV5tFf4xaJfJAezNZZH3xvq7PQftyvesj2x7egcgTzFNSrxXWjAZxygpX9Zb39JD5FgbwKmUhGHc7",
  "key2": "4D67nf8pwL7tfgfWdHipX66L4ZyqFBiESm86YxWFTt9vgv38QMQzDQZGKJtjfcf5oxjF7A1cva8yV32rkVPmudxo",
  "key3": "PvZGxNyADkBAemYxY81EDtjisFt7GEFJnbEYg3RBE7rT93BaApBLWVVrMoFvMRnQQmJMh1S3pegCU1iLYbaSaWh",
  "key4": "66CZsKWmBzji23Vs1jGHf4iCjhhza4hvoice4xRKehNa3VqcjceLtbf3fAAjdfzeiYpJnW9H47E5VhZEp2vr4oJC",
  "key5": "61kzgQiWHCShxV7KQ6o174b8A3mPfQS8V2WgHVon8H4tFpsv2eWvsYYg2gKZPQtPP7ZxY5W1nCeNtpuycztkKcMP",
  "key6": "2XZBSUZ3nikRmkS1dreHYUaWmqsNAGBTcMKnXHtdmDvwEiaFZjFGFhhFJKc8R7dz19W1yiRMufjpwWkyMagDgvGk",
  "key7": "4bXyeiNEBNuFyQqZPJF2EuToS2U4kfyDJQbviY1rXrXMhoHJALuik2i9EHXCJcuiKFKPXSYamtwkfjNYXLkyGuux",
  "key8": "3qGNTk9cLHC2D9FmATTyt47J3t4Jwhw3Tedr7XogKqcEFKF99znkTDq8LHZBeyUy5sUEksFVRNgjQEsEQUdS8umD",
  "key9": "2JQRVn6dj1Uewj4Rm6ivzYqHEwHqr3Lfxqnr5CdsZ8N7V4bibk2bM1ppZ62uUwV5aMsG91LCtmPKn3XRL6oy1Rcx",
  "key10": "5UZ9eTNDmmk8MtpErSD3C9PKT4Zr9B9Lq8jx6cfkKPDVFevGEzXtCx57kof7bykD8Xe9p26EAoZddagooeoFQCY1",
  "key11": "5hxjiprZNJXQUTgiJPeuGpRMNF7mt85ZytAvkYaSZdWnZUDJPd3WeoVQpNFU4fCByN5cuzfjEy1hyNemQKsZphoT",
  "key12": "47DyjVUHupmCvR1N9r7adMi9R45iLWHkXWqzprSvrApumZusrLhwTXYE3oP5vc9p1ndx63NWF3ny8Aae9grYT7p9",
  "key13": "4tbsbyzgTG2UBK5YjztjQZx7p4BoLezaN7iDmYnq7vcqkg77EMmP8YtQyHtFFoqwXS9yZ1iJJzaYApoXySwxQiq5",
  "key14": "59CEeBjbAJMgF2uJ7eS9VEqLhteXkHPZpqH62u84STaXogouLJ64t1ZbMh3vajvKBusHqK1eNdPTBWm6s3zrCnhR",
  "key15": "45Z98R877ZozkrA35X6abYQpECdj2QYukpcUvMJRa1UiiP6Ju3DUa76ZMmUc8t8XiT6iLtNrS7p9pVY8RYBhboY5",
  "key16": "5LipCZbC1aJCRrN3mgj1vmtAMxdVKqBWhwwZpqEYBr2LsdqUMFeKfqVdGSMriEUTHpEkBMQFLPB3P8iBythn6ZnM",
  "key17": "3PXxq9txNU8kE1ioVemx16kypp5vxZjF8ukPWmcVZzuU7QUFuD7SCZeAxbukxyP4tqPvDeJ8mpNxR4KospPuVz7m",
  "key18": "2CaLiLGSTZu24k3HDN4TDR4tTUeawSDeLq5EqnrUVmcAJ6WfKP1Ms5N47339LCjbGQyEQMRx8dsKWuPJ4JgWAVsy",
  "key19": "3jm3djUn1gsHn93X8zwVrBewvNa9XqJvzv1PGGyVBG7Nhs434EbMT3pvGYnNYa8C97ij1RxicwD8VhFHi8fcA2yy",
  "key20": "3a3c4DveM57LeWbPWAmZKfwDu5QJe6AmDwZX99RuWLDnuYyp57sXdBGDF6NXKqYFZjXramqwKXr6cQ84zvZq4oCj",
  "key21": "5yWRtC8Mz2Q3prov2UK15Q7M8fAnkWykT6rY2wFStABkPWohB2Cnr6B3Xoj8ubWGw2spjzSvcgjYv6rvDPzUY1Qe",
  "key22": "2EvsK3yRvjUaCWH2nvQ3PBMd9WZqpR1oDz4F6eemprbkJeLfuMxtNRPNUxGY9K3Pzhz63S34adBQPuDcFePW1L55",
  "key23": "4EYuHV5ZM1SJ1Lad5XbMCBf4JMETZhNpqC1ar4LpeeU74Wgc446mLkvY9fteK2W33jAWBV2nPpTM2X3M56dswdrW",
  "key24": "3rcZJML1uPHVrJs12At4rXZQE4sTQuNv9epyjGk54yncUnncMLx7N9v1x6PswXYzvhRzQHMYk18rHH1gRBAYMSPA"
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
