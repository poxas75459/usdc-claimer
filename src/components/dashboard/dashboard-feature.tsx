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
    "4kSH5zmnMqmkmmAPpPNXfchyZExMHdbHmiiqrV4kgN2Q42oicnckt7xj7GKjebDht9TWq9TPJ4JchtrB6vqQwfjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQLrtczXJomk92rtSHAFNASiVgEfDqcC9AAEFEdvEPGSYEe6c4tLrpKQVbhLkajP1Erto4DtXF7x3jyxmi2kSN1",
  "key1": "4S9kCz41XbaZ5hEz4Cb9uNkdWp6UzHUMK9aQK4WFEvtxTEXkEZunNCu4SiMRW8kWPKQSrkWCoFrWpnRTyW8Txsrq",
  "key2": "5UwwDtgfn87sCtFTN6TkHQByDKv6XaAbzvK9SD826Mde1wnXEVce7PLK61GAM6k8cEAhnDGFK8ZPiqGXsb2MD8Uy",
  "key3": "2px97sC4xEdgfyFvSgJ5fzgcFVDiMJJb1DJh9ZHXQ725LGuSQuvz7aWqYUqCzQKD6cqVx8mDmNEEDuwbNEXLCjbr",
  "key4": "2sZ7F3wgwxGqCxwsBKLjZe2CYRezaz68FRQRVd6awN5psiuaCofYUSA6YuLXBbK9yL7q3oT2Pj2TiCtFGXrUaFVz",
  "key5": "Pe2XWcb1CPGcpRsGPaTKHqNP59xwnHr9mPt5W3ctj1S7at3StVmJqYTnapXJe8prDjkDGoZpPpZNwJ225gJhaTZ",
  "key6": "2kBaTDBf96CpWHL8m7DsAMD7FFoEyDqxZNyBe2RixKEPjGZmEGtXbToAFwpJAguPSfFMvdAXuCHbpgHJRc9pSw6t",
  "key7": "6zMHmEZQoin4Q6kGWB2iryiVhzdcy1oAPHaAe3MsJscRYyUdgEzNAFC3DcdaKzZwejceqmNPFWn3Sr78PizX8r2",
  "key8": "2HddVLp6SMWnSntgWxgwy7KU5EKnafFaU1VGmf9i968X8uGEJFd6oUJJ4xHqnTZ9UBxyCfWLMkaKu1WQ95yn8F2a",
  "key9": "X2GJVWo8wy5fx5DcFpQMx34rtKNRZwERRpYsHiVYDbiM4qYTFpWPghcM8P7aiPRM49ZWesefxRHQj3Zbb14RJ7H",
  "key10": "4aNXhigJARbfdBNcfdYTc6w1JPDCBAvZMf3DTVBFpiSTt1y9Xh3gqtgCEjmtpRuEXGEQrY9DkXsooQMXB97thG4X",
  "key11": "44T5uaey2pjsauzx7NPjE5Qof7SCRP5LNvHRp3Dzh5sL4w8D2JPjbKqS3LAGFXsZ7e8HvLu6BAWyCTU4WxhHQ16b",
  "key12": "5x8Mc1gXcwXxZkzSdA739MxS1TpfneGTk7xYwvCQBAkce2B4jbKkRTmHEuJ2CuTcr5L2X7d7we3ApZjxRtpCmfxn",
  "key13": "4fByk7j8srsQNQf8RP5SWVTtdvmM65Ei7818SNRtc46hdqYAsNReD3PZ7Bu4XA5fjAxXHpPZfumd11beb8AX1RhY",
  "key14": "4WuZ84WmFSdwZ7gjouV3AejKZ99PaDkWpVnX2w47U8Ki4CayD8tQvuMxGpscwTdhGEqmGtPB6Y4bDD7pj6dG8tL",
  "key15": "3teMobLFNBXukjMoWzxHKHmfLa6pv5oJUVfpVSo2Z3CqGPdneA6bKAFpbhjBZ6JtT2s6xCt49SU4TccRq1eERqJr",
  "key16": "55jzLNTRnrmoKKs6GpTfseEXUj1RLEx7SbQvzAZ6u1TpHUFSZLhwcnthfzMX1km6CJNAzpoZ1MyR7rXc1gj69bGC",
  "key17": "2BJvmVBnGjkRtw2kfc6aQqFqkbc4k6gbn5pjeMv2SsayWb6KFGsQ2DvaZnS8FJb2Zfm4TJkG3z3DfnDHGPvBGCVS",
  "key18": "5YWt6rQHTJr4TnamDPe8ujkVhoCgVdYPrB2F8oFDy3gCaWT6bRw5WFJ6UqfdwrAUD5MeyKY5rVAp57ydUsY7wY2y",
  "key19": "2Z9B4wQrpTknTB3yEbVzsGZDjbNjXP9inwipcmsiZSrcd9KfUgU7heQEekeL1j7THs37Pc4mHHt3Bseq7Xfy4hUg",
  "key20": "27GZBA9YShB3m7xcemeXgzKgFsoDuQCoHTxnJC6MC6E78saQGPrDQjVdfeaLYr8nQvF81BuqqVLUuAyAj1UXoCJj",
  "key21": "3ywLmFEDp6dcLdgoNue2zHUmZqDNufMV3kDCu7KiXAf2iRM31g4DYM8ErjhJhCWmPHSqxXD6yGTUD9eEdq6CvgW2",
  "key22": "48EyJ3xZhVjLoxjqWEWmZxk1GdJKDsfqyrpF9kTAEhtaqyeudD7U7gTqqHpHBtGgATyuqTmvdLG26g6Spga8FBZt",
  "key23": "5FbGHBrk17hz1Un8f2RWetwML5CeAhGJC8z1yNyhCW3pDKTCxF7uUgG4zXtNac7H8Gqnvd9pyHHdvdw64kijPiLA",
  "key24": "ypiBVkYLgzPnieTHgUf1rEuSkqBSKn7FwCRtMkTc5B1jMVbGqYhaDZpbs8xvbgYuAJBrJJPvzXk5Ko6uGJkH4pH",
  "key25": "Su351Fer2g7n1sT2aFUnYptH8Pwe1zQvST9oA2JTt7f6GXA8gAZcC6B2PiHWjuAejvKcdpAtTAHUBr7NU2rdZMS",
  "key26": "54RWPTFspPLKteXJ57Sufsbg9tjHVeZg7YNLLzyMSREpssk5EHy9a3c6vMkZ83oftrjN9drqypr5JdaWLVP9EvBa",
  "key27": "Lgx1XZ6yxkbWkLtSvfaH14w9WTcq5WvwH8hPbERzaU8PZrfzzh4sCe4njGS4chhogCoYpN2wGDHJ7WYRMZUL5ni",
  "key28": "5YnD8nJgW4ekzaD4jJA4o4Brborwzrru2guHT6HeW6jAcMZoseqSSDYBU9Fw8PyUQsbAvrXoEj8JVkq9HRwxcJP",
  "key29": "2Vuo7PdvQ2XxqWeU3644E19Z64y599TexMKfXFAvYHXAE1aiFGRT3NH36C8P4gzNCNmUfoCw3omGUdJrAcfHBZxu",
  "key30": "3YGTdGN93RYnM2f6BqxsTdQuuABbhxLAbYued4tYrqDQFA7Ak9qoMnTj5S8yUtvEdgDsWgq5Y3iJBsPD4uc96EG",
  "key31": "2Mg5FfH4J1B6VJpuHMzdVV8G6jqoKsjrvtEwtTMttGJmYKopWFQ7j4Ka913VxmxdFcUosf5ff6XZqAjKCMMPAKXK",
  "key32": "qXxSNYyY7VFrBa2a3MqrLvLp5mw6WrFCvCq1pCKMuXom2gT3qARAroZjsr6DP3aNYSS5Ja2vfmnKYdJ8hKU8veF",
  "key33": "3D2m3tCwiXuXZBBkayaSPyFXDQZ9P4bjAnD29tb95GYJDg2drcGwoDQgy6hXtYmeXN4WwiymiABNci9TAKG5Pfr8",
  "key34": "9DCZUGodGQAm43X3SEYdX81HCaSbyBwLPoeV9NYTArrt2ZcutTiKoKD5M8xDi4fvG6WrZnHbwp2FWWaRdnxTgSW",
  "key35": "4K8FZfNwA5ggFGJ3enxrZmf31Vd51dnF1bmYxMu3LgMCAo3rjWKDPgTJhbBYU1vjENCSD2RmjGrAoEYnw2wYfp6x"
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
