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
    "8xNs1xQT84E1BjNo49mEwC6c97T5U3YTddEYPTLRrSg2UKLjQv5FsMwjTTpLMeproJWevdUdXHxtoX7Ag5V4bRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dDTmBHchEM4WEcL1n2SDwpnyS55LPFouiDCZ1HuAmW1ZHsfKbuE3PRUwzcUkR8w3jAKzwghsk8LGhgCo3zPvdk1",
  "key1": "4ZFJWiy7iFkg4RuAE1aM6ZnjbZK13DvmE1DWSCSBk67FWNrpRmFVEKkvTJEMzeaU5SusGWWQkRQuX8UWLpMD473G",
  "key2": "85rHECNGyhWRveeNHRLZr3Bqc9ivh6G2rCt5dzNhFyhRMLttZ3vxJee5pVVY25nFKVeBzsxFeLPoqHtWXekhtR9",
  "key3": "4BaqX6p4HPcDA4ZP49opAMZyjxbd4qfS73DBZoY9t2oMuv5jCzG87Xx4w3UM2TVDzWa1VLBUodcKMgtYPvSeqpTG",
  "key4": "4d8Dd3Xg48vdbC4Jw85tTnJpM2PvH2DPsXmioqbtfaMyGKb1fqbTTRorvtznF8uhEvvWWMEAD4pEgbvQcNoMfdQC",
  "key5": "26Pxz6kWFGN3RyP3odWmh2eZkyxSzfBrXtgFetFiugcyyra3eceo1gLHAXzEP9Qx4RHN8Co4ftRGBUWktdQRUSdg",
  "key6": "2FmFcBFFZWvyD9TzryZPwyGECueTUFWXSPZiofRtqNMpY7Y6VtL71msr4ZDN8qa5JHNacmbESzpAWPRxnVhJoQVz",
  "key7": "3vNmqaV11XdDAfEHNbruMBd4vsLa996VfPUxS6U6mgPEdx8FadHhacBiTJzZwY7qRiVUawZKoPgG6XYJ3mqmQGaR",
  "key8": "5JxUgfW78oxLNYM5HuHiL6Q4z4vMfhZaJfokhjqj6BTBH2DCjPt8v6SRCNNED13JPEXCF4zBVSJ7VSTnfJgeBo31",
  "key9": "ffEYBeKe7TMuXBrkA4JjKshD26eWvE9A9JY2MJfTRPHzuYixNTeK8P4WUKUPENWibgWw9QUy39Hx9AeFMnfyNFb",
  "key10": "3Uz63beSbcHeanXPbRRy8Kd2xdJdaBcavtLcCrHCJwmnp2PNFrifNYaz7WnhZBYh4YUrGRrFqizkgeuAcf1LyP3v",
  "key11": "5mDkFnn1YjhAfiBy2RFZKU8uo1Dg6LM6bSFDELTE65pRQYQsKZxhHMvR15JkX3mjLzSD3Tjs7rcApKXbcHybG9yv",
  "key12": "2VTZddGJ4NByh8PM97wCNeyZUaRDN7kFgSP3dT8sTJfpiWF9CpFMp7u15AN1UmrogAQtcmrnCFsrPxfKZW8uwynD",
  "key13": "56unSoTi5yQM6AKEtitNsYreChToZjs4y2qCvEgZSFSTFcb7yEqDAvqpUtmCNexcrbXU9LBc5Az1GPAdbQffsz2Q",
  "key14": "3VyHefd5HWPJojUqZtaMBkyJKs3gs6ZkdMTZw3dFjz7QkDkbfqCbXcsovr3XE6dTHCvzxNLyqcbBVWwqmGeJkqNZ",
  "key15": "5GH5KfXX5wyi1FbLVzoTUYSwiEPo6Gx1ZnoTZUbAFcDgP1Awy8XizYMsq8DvVyii1MtkT4RzWa8q6xJVAYZYZQU3",
  "key16": "5YXthsSnSq7RLU11qgV84TxMbRXsw47zoAPy4gJB2xWjLarb98U3DPiX2RQgeaRrKC5ti4mPWm3tTfPMYVHjrtsK",
  "key17": "sr6vt2FbstBMqy3z6T4pcQF5BADPGfamXXKRxBzV63hkeNzoBwaa55gLxsiCh5hSEV8PvF4TbnubfC7GZybwRd9",
  "key18": "5GP5Qz3BZHqkZgYqcV32YX8SmbsJ42a6S4D4hefYjNm7Nbo4CsQ4Y5r7svQr6WA6aj1oEZRsFakYVGB5tFQKMrti",
  "key19": "5fSsu49fEp7guS91nQ9Yd44hsEkkWSVDF4jAkH6igUL6J8LuQL7Hc1cBJnCnwHyobmv1GVPxSjKH7b9RHHontc1Z",
  "key20": "2VvYoHgAp2qUjFL5kxCYU92uxd9SnHoW9uuMtwh7ob2sQkKynQr3ZeTaBZQEzq23fkazmNWKEdKQ2L5DBS1QQ5rM",
  "key21": "2a4L5pBXTKv93AXdgwnPRA73JKrEvBMyRdQEbQybM25w5TC6oYdXk1RaJFSwyAmAHVrPXimPUETaioKEJ7qzwxKu",
  "key22": "QjfsXguseAx3eyLwsfwFdZySa2MxDC5GryjA96QnTbnHrA3EohdSeDGKHThxndBKcnH6Ymn7qU2hVuPsh2HwtsV",
  "key23": "3NvagmT3DgmvYcgCXP7nKL6LH2pp9J2CrUtxPVscA2U67zUzXPWEBLoxtTftb36dkU5NBTnzeHpV1t8N4kCgSn1X",
  "key24": "4yT4h9bjVuEknEA7s3cqhhLMbSaqWk6tnMokTn7b6knsdQgFprzuhfVyebk3AAfo6GTZyDVLGP67njNrcTToxcDS",
  "key25": "2UAi8R5GoAJbXmkDoe829FdH4YVubh9i8rM8dauksL6mM4fM8qNHYccvTpgg23QnjrgfYwa4FVRXuEfa9aUyA4K8",
  "key26": "5G7HpM3wQB67Q9KVgt24oq33EDoDzZAVMdyGTEtdJPSFHxbuwX9KaCwCNe2RPsFm9KJdgGLiZCEZ9YMUZcGSq2U9",
  "key27": "4749MkPLcZx9F8DTKMeAJ6K2PYAGkVkR2RrP3YcodDAaUJJqdKeU8qitAnihFtpVRcVUDKQWhszhQbfaNwvaX5sQ"
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
