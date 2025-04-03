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
    "2XoFMgF7pRiuWCu7HAUovd5pDjjQ7HW5uQ76HchubtAD8r4yjHYKSFv6dVTYRasQXn3rESvoxsVrBJ7kNyMskHtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XPVqqrMZy55H65zfL1VniZhKnYDt2aNezknAELKshR1T4yqkxc6XUNRmy9kv7mUXHBkjULqWFiaCfrdMHyDNNHF",
  "key1": "VePjcentQdbQLPzd7DjHopwaX5eM3b36qs4iKWzJfpCAukDiUaHBCKybRLFLCQyLHRu2uw7pgEvFkwsLSDh7AgX",
  "key2": "JfogNuc3LsEMDa7KRNBBvjXEZgmpDjG2kPEk86iYRmhicq1GGBb1dVnozxLNBoPL64QEGvdtrGEUo8aHFJjZsE3",
  "key3": "3FSWR3VqLwACsxEkEj4oVDD3o64LeBPVwnYBC24Nj8Fb78vA97cVvE6MXFc4Z8yPrp8ijuJEmJQX4vjkSJrRp32e",
  "key4": "3hyaytjyB3hQh7nyMokN8znoifBHr36k7NLjiDJDYHeuzRSak1MZg85nWCtYRWQT8pi7pL1a1WgWQUe8NunWVscf",
  "key5": "sg5rkGK7W1yihm6ZxoN4hZZaAnnYA6u2Y2JTTJHExaUamQAwsvhaFnwHdmDtxdeTiLnHAMg1wGCLCYQGTkeLZVM",
  "key6": "4BvhWG5ctDiNFqNANHdYgQvTa9sBKdpMUSfraKbqrirhct2Ypxdf2d2pzMNP2yR2wGRnYjpzV7zdLcdTutRyzYfA",
  "key7": "3RuDqcGbMr8r2BF4R6fhmdaExzDng3bvhUBEq6UEZ33QVEAzHiXpEwkfWFGAEtR4StQeiQq6c82NFAzSLT3efj7B",
  "key8": "tnSbvqxm5DuJiyLChid9i9vw3LKx6NBKEcZLMwdddLycrzyJ6MYVuuKMW6qBK7uvGF8TftE372jgZ3oFHQMTByb",
  "key9": "YCeQG17VxSnre1iF6dDy87SYGpNQ2QS9puwJR9KVRncqQzitpvFctaKhpQGQ3954zXhe8U6qQFM5TYNqGgMyp6t",
  "key10": "5wpsdhcxL4cFwoX8ogA9SprP6c7AEswKt9m8kdvNqtuenK9CJMAe1py7Ci2V7UcpGtVrksPt7hAKwTC8a5AN822N",
  "key11": "58RcupzARa4d28px9yZNyVya5M2wNgE7QLiBVUogJt5HDd3qtGHWrfTnTUzP4FMCZkey8TUAMW1vXytqDXCoPwwi",
  "key12": "2ogtqWZYiSmePeR9G8u25dmG5gyWD1yXPUAQ1Tm2q7sbky8gN5pzYC1uGQXeopk4aTXRxc851h3tBLNKphWs5CcU",
  "key13": "3FQ3M5F3MNgmRRR5F3C2j2ZajVpWsHCMrwLgP3n714caWi7tdyJiuL7J8dVXCrV9Zxc3BAuCQ1b1RLrzMtBzrQWp",
  "key14": "65qF6bsvgJA7jU8wnffdyQb81TGY4PLXPXnofTDaJoeFJjQShz7nHSUhAdRZAGJNAYL9Bn3c4vgXi2Hdey7AM8jQ",
  "key15": "2rigVrRjhtY8CEme4dPbhUCa6jBSND4LMbBuBihbUCGYsrfLrftMUt6mw4JWBuvxztQXdLCY7wDVBCtxZYsTPMrj",
  "key16": "4X1YZ4p1Gr8T45rmKk4wJhRzUjnYBJSeHhwpnXmdzkNvwDuDuQDSq6nix3fWPw425QZZuMb1UR6dgkuGpXiRVXzg",
  "key17": "R8WYCAi5msxTogGdRW9JHCux48vGffV2xSN4XDeKaAMKAoh9CrxLv8fDKKaCcDavgGpyncFAcSR5NjSKcT7VZ9s",
  "key18": "Wda24bKxo1zRbD5ZtfFCTx3RLL7uTH8rHDu2iyUdn6Qwf14ahNCpPyE59HZQeTKSktjVGWEa9va6f7i9QirCNyL",
  "key19": "4YeTwPiNyn2NwvxF9oprDSdGKDAHws5nFdV1KAaCAMWvtjqfG8iDB2T17ZAZV2NcsqeGa2noqtPALMQ74MY5QKCQ",
  "key20": "48VVNdEBKVpoKNDCmNaKcVy3S7fKbAoUvbBLwFXT5uEcVCKHpSLutwyQ85yWPN7rU2HurGZANeEVrs2qgWmxTDjQ",
  "key21": "4BwHnSFRgP6WqU85dD7sfZKdcEeYR22hKBeJjicC5JK9D7UsM7xMqNhPwRntgURRoZHxnSNz5vYkcMib3R5AAZsP",
  "key22": "DUskNkaE5WxCAG9w6pSc462bXG7m5gsYB39ULyPMk9YGhJMCDqxSo5CPkRDCBmdafw1ASFX4UazAHPv2R5BRN5H",
  "key23": "3xMsK25aFB2V4Dj6ai4spJaEvnnLQeEkxKCSZSfaZrByCvaoQdhdWRQQFGjcxRtiPsEYhr9dTUhbYDfXDsRNnnpz",
  "key24": "66pWD5gNuogGYH6TvyzjUGsF9Ne9j8nw68ZgoQV1fzoWDvGiYBvaBPsizqGKhTSp2PHjfcPjQYiFYyoV4f4Ht4LX",
  "key25": "53RMAvBFWUg2MFqMYFYRKNx66oSoQaofohigeUf4TqUGxsoW6cWrVAAGYW7NXkAQqPEHYs3E785FgxaeeuzXAfBH",
  "key26": "4XeJtBfC6tVW3XXL3f6nLbE5YQvcSp81xxwDjzZyrQ9yL6JC1LpiTnrSsoz5AvDEP2KKJ3pUX8Cqi3mPLHXMcMp9",
  "key27": "qiNJuMamxYjxWxBMWJMeKzTEZQkt3aGzrcGN3EJc3HPV4pESmkdvWmoUZ3swjKeLYV9XroA6WMYpkhzUz7p2E4g",
  "key28": "AQgGAjD1VNHPnMtVFRdQq2qXDaoho7vydZEcpWkiuXGsnCsVaPmpwf4So1ZRM2SLppHPJFqWqisEVMgnssjnMPL",
  "key29": "4wcR1wfFXmmAzhuUpeXhFnTyatdVWTknzniDZPcvnBC1VYubWd6W7fMsRGzYWyc8VeULZRzxaVuSHJp3vsPEkZHM",
  "key30": "2B49qfb2yx8PfJqva166LsPG1FE9osLzZxjup1hr943qBNXDf2Xgzivc7AYKHjPJRguGQxd7ijRuT3RjkM4snr4r",
  "key31": "J7fmn9963NVKcyTxriBCDUUZfuE95dfRCR4nxNsgeL3263EKRjDdGTXQobf1YS59PdHhaf9JpKnrZwWN5oUe5uZ",
  "key32": "3PVQn4zkvxPfZ6To2oXNzXim5JrojZvVnC7KYgq1pyJc2bgqhQFcBeSVM78p6cn7eC5MjeD3A7W6gQWYKuyycvfj",
  "key33": "2QFH4cL6KTYsbQSbRpRKhywiWphQMTnrzPANZd3G34iXfujDPK7tWHFAwRbp4ERjr9K5ypjSqa1aYpL4YLf2Yder",
  "key34": "5ay5GJGBCkvp4tNhyvzrkiYB1vwPs3NaTpKkPLHgBfvmk3zD3gqzchbuG3suZYyds1PoGG5J2YGj7jwuarC3JPm2",
  "key35": "tuAKNEKhEiuyYyUJcW1fTC9dZFVUGkszeQXeQSFKoA64Vkic4GNFkwRDsnYNS4S9umjR45NcmLtKhzvJiWgfFdc",
  "key36": "29j2Zh1dq95a8CMQooFieD2CATmE2fGmV5YVDvrTmQbasE13j1LbEXQ93ZN5E3uvqebXS3oV9FxDKHknXPiZbcJv",
  "key37": "5F5tas3bcBXNeCCE414bRPySBoHdobLct2tP7mtG2GmVgGyBeYiyXxEabG6qbj8buJwVeTMtVixsKXyBWSxDFQ2y",
  "key38": "4YEHYejyucVrqreVRXVG5rWvbCjtFCuDxENnn4kBjgCuV5m1pRLURweS5N8jVCvXv6DCHCEWkFY5NnFv9YAS1Xdv",
  "key39": "51fSowEPrfu6ZWNqCWkt6byFmLEqE6qNzo28DK8ZHRtvH4sh1TfDnYdbtR8XBgfVXveGoPmMvjnDELVMrmXEK3Aq",
  "key40": "42NU78EGek8G565X4nMNjocbU6RT6doYf4MvEVJMLGXYUVMtruW1VsVkG8V89uqxqiFRZSdymEDbK4WMUUC4kEpG"
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
