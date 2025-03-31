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
    "5juHW14VSpaSqNuwk5nqXmMYANRTpDCZE7QaoY9eP9y4LQBKMJY4fnfNjWotn4eW1JSFc33uneBjSGtoNrsqMHqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sGjnvdvuSAkjZUwLTBjnKKagvd4w978hYo6fZGP4aeoNCDa6pwsRzosgKqq4VH7rtsrzYtTBJranj92Pe3Wcck2",
  "key1": "4zNNpEaS53HL4ptWvN1QK2WpmNaUrRqpPYGWMmPi7RRbp5dM6L8zKFsmxJJzEhVmqGM1U8v8FTbVCsLkvCTXZwE9",
  "key2": "25x6jbDn91DCuV8fBRQCY1KgHsfCsRHQBcszezQpgEbYJRRKswmzdKU54yJiaYNJDRTEgtpPxf69iXbfYSB3hMW4",
  "key3": "4jScBCsK7t3ZL2bPfJpFLQ7YNxxcpFsoqSFQNJrUi682aYnhKh8bUxxzSWkYUYWgy3dCNtTc43AKWTrmQKq5RGYG",
  "key4": "555h8eL5Y9J7ytXAKgaegU21CcFRVJT3rHkt6vSRNNpEtKLd3xvbCcvf2yeHThgKbDSaZHmADXd8kJV2b6zVV4gj",
  "key5": "66ngEyQstzhdi55pXkJqjmh8TRoSwTxqTNYQEvWyY4eHgwZYfqSNputWFU7EtWDFjjeWSKSyPHKGYwPGu9AM19YA",
  "key6": "5Gxa2iLGUgDcQVNYk9iBMpeUckPDuDeVh9gXcMngzejqHnZ7QC9RrKN3giSKzN1frzvNDT4e9PLfHXSHJgRmX6Gy",
  "key7": "64BGrKoQLFtwBNvmsrJbdbKQWxDcQEhYjvVF5EnMeg3SyvA4DDCf8MGdT67vYMiCcSnNorZT279L2KrK3nxWDPXY",
  "key8": "4GL6A2453yMSLKrovgSPMUuHQfoFf8ha8zcdkwez4Qinh4yLXGw4kpYXs2sP7iV9mFcoiDeyMYbFvRbpZyfT7mde",
  "key9": "4zfCwFrSmaLMa8wrjcYMWVmBoySuh5xj1bGy2A4ohSQhwTYmSdnCmHHUXyJ3A9GagNhJ5G6LR9xqbkxsWbVX8kKM",
  "key10": "53oEDacTLis7W3G5LAxs2dyTm1yuG4nNh74tRRVQFgYxcpKiobJ3CFvtZhAk8DA9Wir6rGhSfDaLXYJav25oLwKn",
  "key11": "26PURQTiiyPyCHaLgqnDiFroQTrdQmwkinRmYBzP1dKEcgnWXafN7aidsPVQQxVJMHefaMzcL4mfToJPw2PjC8Fn",
  "key12": "5yAK7PNvw1o83GyDGy9Fyzfub1nsh29ovCKP1NxQggRw2cTSNFtkQ6186JAxaiyqXD3o14n7RKQCtVXFYmrXA6K4",
  "key13": "3ypP9NCnXJNk3ysgfW9qhWM8wrJUDdoU3QoNkRLkVw99pNKSMKUMRPd5vKfMnNSNikkMM7z3ZVhKc4NJYUfySv3V",
  "key14": "K6b1NSUebTgtjsy2Q9iMt2W4PsVDyQkKc8KkeSsFoXwmScsfuTHRC3ewXAfRRPgyxsHZcoDWdr5dVrpKL6xZNFh",
  "key15": "2hYUVmMprQWVZTycpxk8o9Ys9Bv7smdt14NdFQQPFjbdaR39N1y3mz6fUcevndXtX89J6ydNGz7iBCVgjNQWjR3o",
  "key16": "2QPYE47gNkUHPjTujryjFACwag6qC5J73dzxM1TjMFTb6wiYx9iqNvvhWNxVmX84eNQQY5zccSh9kUhjqqVKCE4B",
  "key17": "5JmfQicuZHtrDpyKksQ3SRiSaF34e4gKra7xRDNb1E2VRxkf7u5dBLf2FNwZVksPAEtzymaT2fkXu4DKrcxNgFeN",
  "key18": "4raY6jATYrhrAaphttcscrjVzZxXCUAjzR8CAqwzFAj8bp1DhtE3j9CAvh7ck54pwDKYw3uSacHusZb8SS8x9AHw",
  "key19": "bCTykrFhZpJVSzQFJS5oecaE4CqFe1WU8mST6A3mbyiLBtiWFGFxZqqrfaxWFDjLDAfvwPPY81CvMznT2bFBUsc",
  "key20": "3KzcAxyWgabSEgu3nyBJqXQTvZwUUouiXFj4MZS73yYn5fQMLuioBzykiZBgyqbfYtxpPX5EWSunWQazDZiYhQFM",
  "key21": "3kVPLW9AyqmBkdoFB7LWQjKVhG7HB1jwJzCaWBR5XdxN2UmVmUEE94z3BLdBdoKHmMfnKjkGkgNj23Fq4syJ7K6X",
  "key22": "5M75Yrq4P2ytfb3kzfHgJxrGVmQWUaBK1m64DV4dcRwiMS43bB9qG2oLdxFug6SamFtUBqS9cPHdhSd2rq5nPQi8",
  "key23": "SGmBkKFRQMApxYjLR2peMctAJAweyTeSZCYWm3j13n1c3HbbFVg4wmsmqnoqZDU1tz5iF2cTuAdLVqXnj8MbAkw",
  "key24": "5ii2p9ac8UD4GqP9yhGG6gBXcxUuwZoFG4H6pS6FzYQYZoefZ5SMAfLdh5kRaCbDxjMF2jmgtCH2DZKKxB5xUjx2",
  "key25": "65KfuDcqqAVvPJadrC6HVVLG4EPzbV2w6WGiFdzxLjML9Mbx8rbYinDrJKbYMvJ5oegczVLHTruhA59cawbp6yAf",
  "key26": "CZS9ZE8DHE4zJF3azSrBVn5s3WSfLmRkbYDGA5E8oC1erTBc2UU72hTB4HhHotsrqm3TD6U9sQgkAsgFUCV8xPS",
  "key27": "4Un214L2S4ASh7iQcrq2mhS6sYEN3Qd2RwYkCMZFBCVzJP7Hw3i1PfZeuQgeKVFZaG6iNmg1kXAucQwAfJXJsmyC",
  "key28": "4NP3ApmDm9QF3EQiK99RGmwQ8ZvnZSWhJbZVe7agCK8yKtNeS35z2TQ9jCW7xYzCF8RyKDphSjyWznsWt7hvXRhL",
  "key29": "5vP7FDQv69tAbQcgXfbB4TvXoMQ1QtcL8mecv7DyRb4mqB67pe1ARceshLMjKGNFxSFiiKhf5ArJjDV6tWuCxyN8",
  "key30": "641fvZgbud31MVY69LjMKJvfHQ29PTtgEtT5WRCm2G9uKf2Qe6XiDYzeKa11XhSH99pxcUPSdXPvPJE15i2i3dMV",
  "key31": "5ksbgvKva4jdxNMTFt5Moqb88xwyWEj4MzfpYYGFggQqXjs8NK47uTfREKXkmoByXaqStG5tHniU4rZhf62X9586"
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
