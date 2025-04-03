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
    "2nU4CRTB3NLkRJHjVBfYduoH6VaAEQvtGBaD28ziww6fG6joBciu4PfS3JLNezdakLQG14c5jDLkcM9Q1sn3D1x6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GitKBUPtXvw7BuoyyfNXvr2okU5w7ZJa5tfhsHfeHJSWviWm6E3HdNgzAYqDYJSLPVZAUBhvRLnNArjgMxN8MJ",
  "key1": "5NnLMRD5nbev3EWhPR3zqpcZqSsZFgiLBQNiUG6YoFykaTJpeFfatWaVMezaeD9GJ6qm758UNxRDM81M5o9xmjyX",
  "key2": "gthG5aWr1uKosSENxA6XsbNaHFzMmzNi7d8bSMmqGzpZ4KT54z5gaQ6WxZhGfaAx4XywNnJtNCt7nAaZJ1VMj9Y",
  "key3": "2CZfsvu3UDXFnsKj9vpvjob6oHmRXj4a1XTkApweZTWyfnecUfNyMJmLoj9gq9DcBTLtxt1i69tPW4ssL4nj79jb",
  "key4": "8frt1kShQKfuokhScC8Krhtf4KdB9cnrHgAECpjAwrBweJcPogVhxY5KodXK1UQEuZ6uf26bToiTfxekYkDPNMb",
  "key5": "2gmhPSCAVkHSXMFhYz4uLSCdfWj9gfjzetApuRk13UhiFbnxQKJDCQCTtGorBw9qr9gX8imDhJe3enQWcNopzKcK",
  "key6": "4XRDZLniZsfdo94EaqCqUQQL486poWkhY27CjRWnhXzbbw1RgPBy8sCzr7VW58hjmamodJJ2GqM9wPGoQUBo2SNA",
  "key7": "5PeuKJQyFK22aEYZD3vxqoVH1hUYv1nU96RbVBmHwTVDdXHxXXu5yWSieu5PiFLHycos67RoY1541RSQrxR6APoC",
  "key8": "54wvSYJhiF5K4cCX4zNmeAShSf3LCLPUTFJcB9c2TEGBayn7YEFz2weLvc4konZKzkQWh88ruZ42sBrhurK9cMhk",
  "key9": "444tnbKSEe87EoiQqzTf39QecTSsgSJaEyKfaL7sgn4Frk4VUoAtwxssKeUrJMzb5ar4z6ADiWNmQiBESWB81nVf",
  "key10": "4dDMdMoDizaSh1JmXBCvzWwqVC7QyqPyTfHnWmKnX1Ss1o5E69T3ZX43B8rsGcta8yXXnzkVgi3Kzxd9oA5fkY71",
  "key11": "5g1fy7GY9HL8BqAwouvnTCd4BrVW61tTpaYBtCUDizsfc4GLFwcx4RCAxf3TYdnAxc6FQKvhk2rQ5BKrYsARMbnv",
  "key12": "MLtPcdVHdWxBvfPNPVYPfCSYJSuC5b98byPZ5h3sy8jrNAeHMBYoZAmgqVbdhedxQrbZjAUkXS2ii2XzE7HgE6L",
  "key13": "4boSMfWVhSLd4YWhXimhiACFdMddMtX3LPaVjt9n1ypjPPnrnrnEqmc1bXK9yrxr3qZykQTCamYmcHvryskoSJ3V",
  "key14": "5y9TJrAxmXBqDpkjUgRsWVhZwwCZRPoho3qKZSKYD6CwMESnA9R2DGb6LkhDkpQAEoq7bwg7G7W1k4PdQdaERmTZ",
  "key15": "5JzwSeLfJYtHGXbyUmQFZy4mVa1t4of1Nm2v9Z2sJftjHotVjRLdrj1sZXdHFAm7m3SaZwunw6N4xDbWoMnNbf9h",
  "key16": "t4wQyqy3YKpDoiqaN2KXDZi2rVXQz451ae3ba2z11x7ntuPrwdknwVQdU3eqPavp6bHD16tSRvKwAuUcRTTX8Bv",
  "key17": "2V8CgwqeuATAHPdBNydNjbJEc6bgwRQu9jSYtF2D7p85uLMyRa7gBRinVcrgnemDhCbTTGzy9YSV363HWGXyhEpM",
  "key18": "4CCu5NSwfBEMuoryDCNBe5gd1kXPZTexAeCa3gnheUtbsRMSD6PbTUJb6PMkjos8dzuVHAiVU8r1LvumGkdcEWoB",
  "key19": "2bU6k1vQfsE72amzb99Ce9EGDHP55maK2oEepLbhFSzGztuzVBBPJvTd3qA9L7yHChDG3rvG9LBPg9FAx7PQNqXz",
  "key20": "35PaBJoJNwauysKAwwbK8ATn23DG63cUaUfU63mwMDyUtdRfyUm8uoxYLisLzJrLk8RgUt9yJV1SgfTvNE6zHxKv",
  "key21": "5gGPSr9yxapiaknCN5KQ7kcqL7u7XHSZQTQWUwNVBGT8vkvgGZoUdqksrciT8Lnz7RZw83qjKd6ErGKZ5GWXEuHM",
  "key22": "25YPaDwSWXmpxziKEFfzEUL5yjMx9m2VtS7zdF5HipsAZJYdh6fYa7wHJvQA45Son9Q7rRXvhBhJE5SiQjLmwc5L",
  "key23": "5eYsse1Bn2CGRMz1vvBhPaPRXfdaw7sWvtbrXsRSDQunv28HwwdPWb7sisSRe86PyRraXNtrxE8sB6Ly2pNnrvaF",
  "key24": "2vYvMKBbTjcAVXXkXH9xVuMo25rHDevX45yPvLbE3uTdkay684sgG4xbN64FwCtcy14jpGMguJwVCVCk7BiKHDFt",
  "key25": "2vk8dyEx46cp1Qj57ThsXncEhHVtusR1KH48SEEwMDuqJ8Y6Any4Wtxx6y77d1vuDhgaZpyQY4J6t4kpJwse8aq3",
  "key26": "3g5KV4jDxKK4aKJNVxuWTgP67m662R6s2NnqPgiUMtSGuNfBmDQhtyijwyS2jn6pdonjHcvdavXpSidk2q9gXQNJ",
  "key27": "4Jxnz6QBZD9reYLVsTAnYzsAxrh9UTeESfRqzHonrb3oCFHHACRbpAFbxFaqEnHc38CYRPS3E4hGkVVEsBh5zxez",
  "key28": "5vMay5zWo82Ef44Z77DUJzQFywTbehRPpn7nwByAjTuh3cthqtWvQGvBBd1GVcbrKGCZdSaAVhACbNxnH8djczcF",
  "key29": "ebw7qkz2kVv1ixM7GAACV592CRsUuroR7r17FZtGZUiKgkGnHwzemYedXWh9qU1tgUB8iGYRtB5xFY2QbNC1cs7",
  "key30": "3xwX8a5gKuL5Mac4CHBG75JKpDXFGFBgwcjjtw5hDu8buDBMX5sU5UpxyHgEuuvdEEhWdWy3T2yV9muXXLgUpBLA",
  "key31": "5LMWj8txfVHwDD56SSnZc4tZT3Ap2fgCumeA7w69GXYWqHuEJrCJQkt343DSw1ARCVjfgCWCPMxgwQUnT1xjTnz9",
  "key32": "5FdJMmHZyPrTLXRCMHRRUgFgoorwUv1N1DEinzxZtuWfaEt6BrYWtp5CVfdsQ5zXy4aJ25hfxq9sp7gafAPJotyc",
  "key33": "2jsmwaetrzLnwG7ZUrVYSjJpJ5hWrqEccLhtyS244kYhG2Uy4S8Lvow3iqKzLSKsEZwBePopJQmPVocHg81bXwET",
  "key34": "2Ug8A4Tn6ZD11tApN1t3z6rbE7ouA8fsjyvcs3iP868B1t2Q5CcLDskcaVK8TVZibMVDawQjNpFjWFWazc98PhKc",
  "key35": "2kMMx2S3ZNHe24tv5kcw4bbvv7aKRSNJikJAuBeCGYVBnojYcFYBwg2w9PAwAJkfa9uFBHAWekqQB5wsurn3bh7Y",
  "key36": "4XJUvNSDGeZYoRf9LonfmEyKjzB3x7wx9d249vhqz9aYc1jwRB2ugo6mvxQBu9qyJKi8c8siaRXUVDNTh6gsc34j",
  "key37": "49VuMrvsKQhuQysVJ4WsdCSKb9rWVspysdLR9TVnLzR9pVRTYh7b2gRh2XAJx2HaE4RV9CJNJDvN5vjQm6tNkGKN",
  "key38": "o7eLvm2vMP5UgYYLW3RXCYh2jvPYLn44z5d28zayqLZdfYPkZVZ3aDw1ywmgzGyh92LFcCeLug7cb29fCLVz62p",
  "key39": "4wtcxYXqkesfWMqy6b1QojUp7cJE7wfHQmhGhYdDTBFqtfccfAVGtcmNPZpZebjKdXjA2mgYyBpiLea4xWEEsC5Z",
  "key40": "5zJBzLHFhnZJsqyoq3qFazx7bF5B3cNQ96jSXwjBa2Hb5zPPQAJJ993m8Yx5URrYcdrWYyHz723iWYbkYvafvpXt",
  "key41": "2BT22E79ND9z98ShFhB5KKTup6za2mMDiBLv1e7fs5ChFW9djCoXLsHA71QLtsQoS2y9AerkCdvAmGJSunuRvGPL"
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
