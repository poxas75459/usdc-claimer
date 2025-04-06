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
    "61fxSiRXYDQJXigzqngjypgRiuFr4RGmBttVVmrRKHGS94SwonUwBkVcc1zskdonKxHD5oEdxjeWrUQF8qiFWHdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HoRa9uyCpFoA5gEdKFsckwRf2ebwKEbNpNwu8ny2L79eqYr1JBXErWq8hmdQu3SCWfoGn7B6qZkhd8nqyHYRKjm",
  "key1": "3oDYLXom1R1UZYyVdQDV8VuA3nuYvrB3T8wzxZr5SGpvZHV5r65gmGbN5cEUrEHV3QpkCtrGjzH844cs8yfoH11S",
  "key2": "3n2S4AVgJ18mZeGPQo1LfDTgzFoYPu6gJZESfFLBkHUG4apUQZvGND8NK6LcMoT6TkccDiaKWK4jt6gnkwSUS8oP",
  "key3": "4VsaxNhnD9NxnJCanexRSTxrrAoX33XaQwJpoWeB4dxtkYksYdGbzrB2AQQXUvkJXovBrGC5jkw86Jd9sN64HkM",
  "key4": "2k7EVAxdYiuhgh9sZAwnwtncgKYgGdsjAN61vTSdF546gq7SHXaL5U4Fu1mxNfjP2rSmhrp3a5TRsANE5c5BMWWN",
  "key5": "5hUPkUmSgPQCHfjdkGt6HD4KgUARCRCvZ9yjQx7gxKL7Cqbk5EK7Nv9BfTKMcHZeyAXm4cKMe3safQXLTTdjbcu",
  "key6": "5Wrhh6efLpWFnqtb96aJop6uaLa9hitKHfwJXg1dmCXUiPy6C38QMJKMaU9sHxAa5xUVKYSN81u9ToPxWy8gsZ65",
  "key7": "54zXKFuHLznPdq1nxe76tVCtfWeiJy4ud9jLJC6N3pZqVabK2LQWt9MScdXDDPhkitmjEw5bYcyXdqkTebRdfsFt",
  "key8": "3tJgNdVZExKtGtPxYrsJoa7vqLTbkCJ8Vxd4KjGBEQQqXSjFjBMxV3oRBKj2itYrsgFNXZTf6iLqkY2cAbbw7cKY",
  "key9": "51QJfLkneg84fmo3Jgim4EhuJapngqnrwFKuWazXzsTMAQm36hf6yxEMvgQmBQF3VKSwuF9vBG3yKFCyrjxS1S7P",
  "key10": "3g2STWxmtNNvmeHDMehyYmJ2DQTk1gdrcdcyMszkJmK6oN9UMreNdUDLAz39PD8DQBAVrJH3LWzzm3WCmXHTJ5Dv",
  "key11": "4dWYCRh9hVMwTiQAgyRCCRQtHee1E2n7do5b5SSVtGq9NDLZrCpvRLNvzcUL5vUtsHEoC4zbqbya7N3cb84s2o1v",
  "key12": "5NKRGWF98vATt7AKZtEjE16AW24xC9yCBJB62mxau2obYYsBfJNzkLMoKg7ZJjnRJwT43VdVnLqq1gQiYE7FuAQ7",
  "key13": "4rwXjwZNxaGoPyLejdmL6sXott3GPrQuE3jJMUniAPXXbqwdcyGS3FngDgdTWgVCYC5GDxHCpBN7sHgnQZbzDF7R",
  "key14": "5fgxMkezuqCLp6sFvYxP6WpsDgvTKbvrkKAjTvoncgzaXWnTndKN3WECFpg1itghSwMB3sjo7ZqPH2LscuBtcffJ",
  "key15": "H1J2R2E8u9w4DEJkrBm8haqo56WGRvFGczpYAE1qDbW7d3Dny4dknXpjjrrBL4egnH64FtqL8ossukGmoNT8BMA",
  "key16": "2eEJ1dQmPtYGhjgJqwNQEM21zyxLgcm79prZajoJ4VKFMtVr3Z5p2Pfwryrt3X1XgcPaRREp2sFtaVDP5t6V5PBK",
  "key17": "TrdgZXHiR1xYnSLCMtfyZ323gjZ9aYwB4acynP8ck6PTXtdstFXRVkJD3cJs1jsivJUR9Hq7HQg9vQpHtTun2Fp",
  "key18": "4DsDyxYMPzxRV53wh6MyCBrEzpx6XAAEu1N3rPTaVXcWgZDeyn79wE16cbJjw2ynnH1QhiHUUNKPQ3qC6rRmmfWs",
  "key19": "3qpxv562qd88umjFfzj8Y7bVksBx8ZRBe19A9ZFM8pUDFJJgUPNPrpamQ3tX5AFQ6H5rfWmbo4PjV8QgHHmsX1t4",
  "key20": "4hxYddBh7AhpoYLhspwhmMCNJEBYUiUnc9Vu96uLdLRAFqKavnA9LXFJccAunfferEsMMn6kj3YejDyh6k6ApPE6",
  "key21": "5QYkM8VEJmsvszKYkqRHZxRJh5VMx2rPVHWpQjWjojrz69MHUSTtzRhJL2ST4ULsZt58BYwQ4hBmzpfrBniWgmSB",
  "key22": "DUZ3KNB9YXswpb1XthTt7qtSGpXeKpF8puXkiiC3QhtEg8KBzTtLHv2e3iF7BqMYoDqzjYH4uPkEYYXEtnmFSex",
  "key23": "2vapLCEofhh6prp6CiDuPBB9EzfoT7cuSWXZLVfa1vKCZeVWYvhppoG1MvaAePn8tqYkn8CvUVGSU2aJF1f3eN8k",
  "key24": "ii58ss2rXcYk6NVpaA4CDsoDcbYNwHYW5kXm1AdRwtdgjDueFDbbNFXkMdMs3yddmFdBcmr2vghXNBaZ56hpqd9",
  "key25": "5btfSkWSKdoyizgb9nd2TRcYgNMK6xtgK5e4FFhE85s4TWQfb3oGPVQUTXreRWw5YqBnqRUuxWXKT45w5m2bnCPY",
  "key26": "5oXrA6hc84WhccJy7qkmAbQdaj1kHuxMruUJNFtLV12A7gpAKDXbiC4iAjJjG83nS3Pio1hH3W2fxV2rWL86kExM",
  "key27": "2sF1ZM8xDNSuBM8NttTugwPJLibwn6mTZQ8ZvcrJQZifcxkevJJhcYanre445mLH2dnubj2rS7zcikuyQq2FS7xg",
  "key28": "4vyYdSoCvkvAL4VGrHdXCLYxQLk4nCdycGWA9kk9RhTtJiVX9J4kiV3DAkzjBjjQdwnft7dk4MEMHBYvfDU7yZrq",
  "key29": "2AxBQBxsyQRUmAL33PvsQ8GJFoy8qNHtKpaWXUTycyu1wC2LFbrUL64AsvVBmsqRDJT851MquVY5bHTKhsnb65BK",
  "key30": "5T7eHE9BQgyNxMRRGU8eZVUbMWHsVsTagGGv7bvUQYiBfnz2cEASsxtG7dBMdcJwUsQccRFZYPaLeQvLv96xU7su",
  "key31": "3Eg1a7tGieArgaUQEjZ8xYLmxBJ9WEUXqSLhasqZ1BqTxQ6XM64wfuzWDBxRt6W2YsPrX3j4tvsPSVZnDF8ohuPS",
  "key32": "2dY448S2nrho3bWtcSWX6zaaikHai2pUGGvnKYM1Fn5hev6UPYQnJGhj4F4RwU6B32G34a3xKEqLZZPhUEM9Q2fU",
  "key33": "61sAem7mmyNMDkg5usaE5KjKTqaW1AEYxcg82cVgqReqKh9xH2SqGXRJtU8cUZL5CJ19YdMLGk23Cau2NQ4X33CA",
  "key34": "2pMYr41nCchAU2qop1fGFLZn5MYrivhmWY86Zn36uGnu7aGnKTWMnRyDZ8AZXWzxA33jcUMVrxSxnzvH3v6omNJ3",
  "key35": "gzr4fjXcwJyFo7PKeGDMAjd8w2mkEGmrPbupwDrpE1j7obeKWHv6Vi1M2QWfED8ED4M92aB7u1A3dC3wXebMUq9",
  "key36": "y9WnXLc6dW8vCNXaqVBT6hKNhBsaF2gxv3n3N2edzd9eT9fd6r27KGXExy6x8qXXmEErjmQRnRZEBvrZ6vbKfwY",
  "key37": "PvMPWUyc27hyckLSueqqi62EUh6aXy2VAcck7fG7mkUTUoZj741qnfmniDKcyr2QGkB9u7AzEVev73cwRkJDSGG",
  "key38": "3682woYoo8WvHzwM94B8TNUmBx1B8AnnzKb3LLNHYtDBM7TJ54toUTWUUvihnVpTTTF5UfGjRg9WHsLnM3cFVKVC",
  "key39": "3qd82dym25eo1ctGPY4wng9cUBG117g1NsVn8VhVcFyqjeDxBuEkQhuQshd4AxZw1xzHWDKETnnaNyRErme5ZeG6",
  "key40": "396v8aRPPMMErRqdx2Ewgh1bM8NwEYLJ1WLb9uHJSckGHPoLJTyFXSf96TcX9jh24sjwLxEXkgHPzjDjtHCzjuFL",
  "key41": "3d58gTSDUqdZegJm3oeHWGVH5XPVtVZAAwX6z2BSRwKHJHLo3v9Rg1QddhxPhuHhxQTr7je9A5FNT5TKh5Cfvgio",
  "key42": "5MZSiQKHVetBP6vLbHuXAGEfaFTXrjoF73smwJCCHip6UtHEYsuXj2L6HBQ9qWHrw5TBpMpZB98A8e8uVmsMjFZP",
  "key43": "c6rhBfcLXfpqfTwa2g4tZw2V1WeaR6tYhjRjtJ7p1d97zSGGDFddw9QfNWyUJLfALD334jRAC9myVLsmhvdph3B",
  "key44": "2G11MBRJYrxqPCR9Y2Ed2uWyJKE1WUsQodwWDvAT6Q2F8AJ4QAMgxgXeqG7MRhCM8DwzcfaNp7ZCsrMZZhaAnEJo",
  "key45": "5Ban1a1GY3EbE7Eo3tkCb5VbUUkp5dWjwfAXAnUXnbmqwr6jwY6CppSDAURaPfzLYQTXb2FkNqV6Fwt9ENxcY2th",
  "key46": "42DN8skHZ3Xw1S8ADVMM1KUY37KxMq7JfYvZpQTJvmYGWZNDzYyjesySpUzFPGiH56MAjxTqDZ6zU5mMkxFBt69B",
  "key47": "4pcUaRTwcenRdiw5hJEXRQuHaJE2xAPzz5aNkeYkxgksTaAnib18GhZjUgSKkQzjqpQGR1U3fEwQxQhrCsqYcaSt"
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
