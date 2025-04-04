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
    "2MRr2AVBxwonzxFt2XkLeBcD5TTNsfoa6VRQP2sohwg7scpYeto3U3XNXmFyfKJY9DE4VvpRg9xqFaDnFm5kNKa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sviQPMrM19TQUV3E9YPi2FZPvYvBQ5yXqvedCXcYm97CX9oYR6G9SvKqe7ntQ7HwP9mcgcvdZYeQYVZpfsyCCNq",
  "key1": "3XgQZqeNu9UNGTUrEz5EzbaxzftyVRBJzrYV2t7Kn7ENwSAQzwfWh61U75GFXkZuBrT8T6LuL7omuu9yCpezppUL",
  "key2": "31e9yhUYy9dsxhhTNQWsNDHuz9bgiDrTANa52ysLJKUz29DPvu9ee4akBGJa6PNcL7pdMu2oxCTL84q8UdT6fyAp",
  "key3": "pbut1wrU5LJ7sajPcYP79UivkAFEwEKy3S4q1PoLzCaqaUaud2xwte6qPUzpptemLjC6PaMfV8EZkNq1CDNtnvc",
  "key4": "65veFhEuwbkxNHX4KS4z3pfD6sBtfwHLirowrTmEG1bar1tmQgHp4jVUP9HJ2S9KtqvutPtLqXsBpr5Rr4X486gs",
  "key5": "4THTXzXf79x8DkfnPUYHc5FisasFmrQ9MEzv829D5U313fKacXQqbEfB1Ab829vzYRmC46sqcfsmKJvotxeBzQHe",
  "key6": "2oRxYctzFA6YyiKe4oB7M7Bs4yYCAav5PfZmvUtvFrnyMuYzSfVHnLPXBk1vMqXUr44zgJDLqwFjSukTepshYFRT",
  "key7": "54C6jN8v1ERki12u48jaGxLGMUE22v5HBagNTQB37atwFxyrGVge6aSJ8Kxrso2aX71TRq3vyxM3SiJ2TCxoWwg3",
  "key8": "BaEWD9v29jDgUncJUD8znfcaj7Z7wSvaZzNcncWvDWQbizSyLvb9QC4g5T3XhmmtVBqvzLjC5Q75dJ2Wo1mWKFA",
  "key9": "rNpzoVWNsw1JKETpumA8bngZvHSiwoSswsnyqEbBgh6rW9eVaGcKGrCsoTcyQJqyPHmwkPhS2zGoPJ1vFtedzAd",
  "key10": "2c4q3ixGrsrvCbhzh4SQgCcbdobDBgXounL6mTSkzs7TypcUvVrqP9diooEVffSVF8zgXZKs7kpMQfxFJ8J9Ubd9",
  "key11": "25ni3CMNidXfomK6cfFtWm3dEknZzEsE5RJXF8rLonNJKqpMgfxLy5mWnqCkpyH2kHjHQmTFL2x5j6LNRMh96PVZ",
  "key12": "3Vx1QX4eyoeg5Saim47tYF2HW6nK68pXKfedSSQGDVswX3SKkoRPp48xkyk6R4MveCWhspfEKaoXE3AXsDYUUDJq",
  "key13": "47AvhH5sEkqyaM3csQerqrLvretSDkDus1DK1XWB7HEbrGEPo9Zsg325rSBuWgN3ftQhgipNhQZpBiyv9JkFBNBt",
  "key14": "4TNQk7AHt3nYGVCSiRZ6uoNY1cVKhUQrrpqWAQ7SYQtnCkmUwi5H1Lnery9u6GysAYKv968zvWuRCfZqxEkK1xp8",
  "key15": "5UFZFE5sNNk8auLgY5EA9gbM6tesv3Zuwuq6DVrx6domp9PZfCYyYsjFLzrN5yZZtcfxe6BeAr8aUh8posWxkG1Q",
  "key16": "27kJxQCDHozt4aRgntE33xan7we2iWDfT2FYBfy9mq189CfExhLm4GRy1XLaPLagQrQBgPU3EfduG9ubZ6guFQaA",
  "key17": "4UCUDkCh5hwqzZfBJjciu78ancxph292wvd2ngFaEQjAzYQouY5ifrj9QWxUJPXzuW9VjK4LLo7BUTzeaK6y3pdW",
  "key18": "2mmCdhm7eE16C7M2BvfhTGJh8EZKPW5ebB3pN51s3YTtyA6NE6HhzgPrmEfRpgo3weGTVPtuCBVDsXc9DhNBN81C",
  "key19": "oigqRt3T1oW7DSqQjBkwdhdp288AJNRgvU9ie5gbbA2MPnSX5QxaEKnqkYnJJAAB2oH2mfPebjCjKiJP2ozvVeA",
  "key20": "2J4KUMicFUAz2yF9LEqvJUS5LCK6tAecFafSeaX85R3LxANTpuVb692xjoXPysfffox6uMmXtBVEq5MVvQb1TCCJ",
  "key21": "2X5NCWeVa2oBKmygqqW8kyYzMpPaKzcsibnjgiTp6ECopJStMtk7rt1gb8Nern32amX4s1o4aStnAvonJVoH7PQH",
  "key22": "5oS7Uy4rGzmswJGuQg58GHHySSUNqGPHnuU2UjLfRqVeAcMKPZxthTQLZ2nNChMTpbrtYxEMydGZZTkLWcPYLqie",
  "key23": "vQPfQKjeMnqMtL4U79vac2pSqux6zB67taArpgdtcHhdKB3SwgES1nFtFtcHuMmk6JVvCP6CyQqu5e7Rmm4eTMy",
  "key24": "2BdksapRte53VVq5fqbn8pKGHxLkaqfHtdu8m9WNfMtmQPTSLyfA4FJMezGb19e1Myxvmc8pWGN9YLYXF67X8BYj",
  "key25": "4uNwrcDvDjNomv1oGHHzFUc5fXiH4Qk6kvQbiogdu2LPuEVa3uip6TETQM5ZwCj9kMLBNVCM5AAmt9d5eCBZCaJA"
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
