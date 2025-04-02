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
    "oB6UTqHZwjwB5fKfFpX2a4iZ5d7yQEiqiUoWT5o4sGRWz1hbMZXmJyCRUM4krp7Dc2Np2UgRoV6yMiACMhgqrg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9znYAimgvQeMetQwQGGXHZ6GLeYMrE3VM7RkubR1YVijJqDXmEyTjmWjJitFbmJRZ9UQ4Uk7suhQ98r7kGZfrt",
  "key1": "32TGXReUdUAQE6AZSQL7X6F88wY4S8U5d2HchAmpPEaimESJSqarB8gxRuaC6y7qFByaKT4sWdn9xh8i4FQrNkrb",
  "key2": "4LPDpH9QiMBtmoo1xyhW54DNwdiRDnkdVu2HKYt9yuEyMsd2VuSGrzuB1LE8gWnp1LxGCM359SgyhKh58BFPqmrc",
  "key3": "3FamJhcfUxGJxszp3xm4yTaJZYHecdDqGp7wXZN8Xg1pJUBP3EYgHJAYqMmixQZeix9VQsWgDouCcwFZex5odLux",
  "key4": "51U99w341bZY3BU7MDs5kCR9tktagsC989ULxJ8gefUZCjTD1asrRCzqxxeujCULXVvdXosarhNx3qg6kqhgjn21",
  "key5": "5bLdhJTEoyC9jW6GVrW7QwotmsqZzGHNuoFDB2kx1NRHSTxopKtesnwapmgFFpX5tuXcV3q9E8fsUzwZf1GvEgVL",
  "key6": "3JBHcWEtqtUSdB5Fu3MkP83D1E4Gxpste4AfRwEyDUTBQXzHPnR3yvKhT559g5at7jwkJ9QNpefQngRKrLxsgDoE",
  "key7": "5wWx837TZs86jBYVydS51XNWBHyx1qNd64YQnUbsWnabKqWmn1E4YbTQ7iXijnnHVfT9dfShsZTdXVkYbUShtarL",
  "key8": "2erhgcQXrJbrnJhhZAqW35nKaB2K1Mbd2KLVnA8VoFw3ExWGmqqEpe8w7ndLYB7iXf1rVbBnom3J6VRyPdjQ4dfi",
  "key9": "5nTUpPwYwMw93pdns8vtgeMq8B1F6Thaaecuc7agaZG9GeSamLiQhd7xoDjE9xdR9WztHhmvJ46D2C5EqUAdeZR",
  "key10": "36q4CzB4h2GdE9rqhQHqQQnJn1LcRoA4WAW4fS69KAVyQaLVytdApZuhvmyd9PGWGXpHYJVSc3wQuDYiH573AE1j",
  "key11": "3ALaYiZyotYZkUFVRUfNRkpE7TMMYtqYREhJbVSr6PauRfBHgRAb2UGQq5PBVVBrFMqvb15xFykEJ8t2H8pcRPuv",
  "key12": "k3yJgUWTsQTz773odX9ofaqLQJcRgVbUs22qjPFoBUP4cuhgUJ28eYfCgxWFD4NZDM7dGnKqBRrZ2XMrANTXwGx",
  "key13": "4wtdp85HzEu1XiuTxmYY4A1njeYurHCtBKwXZ5m5AxpXNPBxuqfTGybTfmods9pFRupKc7uPWkLthijXqcMqscTq",
  "key14": "qscM7LrwR3VRELWBeRG2VHxFpgRsQgNJRZpPgjavDQBE7jeHKKbWRyBYhoGJZVfVcprSCmpibR74qu7tzqmYzDj",
  "key15": "561zhKs2JkQ88rEFBj2awkC6bRNPswJkeVtigNVCGZiC4rXjnpUzsWRpymWNvbXrNzBwLofyaGft9tvpJLYJxa94",
  "key16": "54zEFGjeVXaqfJKcisJ9gWTm4rsnYXK5bGvvwqNVErWbbrzQAHp2PSQCgGwjt9g2qaAUR4uk3iMZCpkCQHv48aCV",
  "key17": "2wEVQK3EcgRz9cvS1hrhLkYN1jE16t3mDLYmRbS4WSGnMyKDKvQxKu4Q2QjqFNffKv9KaC9cmSvB4Hw55wt15yUK",
  "key18": "Tkfc7DkRsp7yvDZf3GRn2J1yN7sMCJNdtDkemcsXt9NSu3CtgFjVZNrZQeo1ChhtqALHt2NztKJu8jfFwYacBDj",
  "key19": "7nLRahm5Lc2YPgz55CxyxgAdmwaQMrwXo5diMuMjXHK4xfubsrv59EiDiCACDvdxWMMfdu9TtNXkUH7AgSnf3YC",
  "key20": "5ffAsEw6sejEC4EBGXxJG31Dq1mLT9XeLbYteDhCbZhLW4bEcQpCN9e6TeR2m9PLaYXBob3jiVVR3Kh5eCBJssHd",
  "key21": "2pwkASbSvMVreskrBXYAi85ZmYMQ9oiYihzt1hDVQMqAgiwnEka6JjH81SCGAgbPLYfXtbf8ftUr5YXMmMc69c8t",
  "key22": "5JjZe7PhV7TEoRFT7jgQPxJ6TirPMBYU4R5eKqdjm2oamAEX2zbjuGSYG7GtQVd2MzWeR8NjBarVa4eyL1Bwdkyf",
  "key23": "2q8p6inHiN7dTY2mrHncwa1zg4DL4p9rvdYyaNaRx6zHXmai22HeoGYWFZ3WC6kKRpU3Vpy33vBAAmySbxFfDqe8",
  "key24": "31HFG1KkAd29USx6SEMqmRT2zLTs2tHKPbyuCWFuoD4Q92hEJXRujffWQRkeuWZ58B59QtGDk15o925cf6LFgT68",
  "key25": "3SEDHhV46qPmkqtXPa8J6348CxK61sDdXH7HSHsJZTofT2dPm4q3LEnbokhCSZjy2NKmgnR7M5GZWWd2Sox6KD6h",
  "key26": "3AhG55MaXLcPiDx62mWANiPUY1sJZ6PW3DZcbn7p7JSvrCax73Lr4PScUgrfscoXyFjn8gurpqYRRT57qH7kXxhv",
  "key27": "3UfLvVTvZPbZXNM2J9FNBVZ9AdzeK59PS9obf7uDQCYphs3VtKACECKyEY6yLAfDsAfrFjdQj1Zp3YA1M2M6173c",
  "key28": "puT71Fb5rcgKxb2wfYcYpNeNmLMxzp7vFGerZj6LMETfKgiQTBkbjJ7idyhvPiPw6uKDYuu5VR2mfB6u1h5DzaN",
  "key29": "2tH6KP168XfwLRb7kp9BionEFBF1eoXW6UG7s8XdqSE6mRcg6KbLWuY6ErKd186XEg3ap14GvgJiJgRYGp54x2tY",
  "key30": "twZbS8WL3Mqqqjmfxy9Txt8gezQA3qEE4deoiaAPnnr51gtsBfVYV8PgQY6YHSWPoP2SETX1nMmpCScqwLnVaqz",
  "key31": "3dyF8r6BpF93U4yRd6xp85kqLPsqhjiQVYxegbaE1xJAZUmUQfYaM6WX2Ba9mRPmzrdg8eRgJ27p5ZaEigHkYprt",
  "key32": "2qr1v9e5yJSYMZvLoNP11Nz8aHSyeQUBvMFznYFuRhtqP55pPToXf6N2XbknfEuAUtBFMMet6BxQ7cBtJq6c5ZQF",
  "key33": "3HqBUPNcDDsJxhjWh1zykQtqmSYPgzcVecNugdumhmYxY5RmGYArPaSvf2DV2Ke8yWJVt5Cxihu7FhsUCMWbog82",
  "key34": "64YWmDQkqnffY2bHoqqULDG7hTSYUJaJxmFCZ9ahBiQFB7ZKKc5ySTBVwz3egay9o8GZsMLvHavG7NfNNxrtjZSv",
  "key35": "5jLdmiUA6HCmdsXk5Xbba7P6vQ97P2bYXdiDNU5m4SL3KxtUjzPCnxM2YSodXG4QiCiTjGzVDnmyV2GKfrv4mn8E",
  "key36": "oHiH3FJMb1pcg9JBxcrkynq4EeY3bLotokZNw5mpzsj1TaapMBBJhB9Vsi8qec4MHD91aUnCm7a6Pp944Ju4TuA",
  "key37": "658m6N2DWn9F5XoSXfuWSwQGTUTrdvjbSUWEXVsZ9SG1mhVPibKs1W5QiY6TF4hvg23AJTU4v5P32J469KxK6Mup",
  "key38": "5hd625iS8gqzPjGocfozkaJhjhRJ8mMrEcEcqiKXfnVNUPt3NmBGRN4GoyuaDuY4rUyNaq2NjivEdocdbVRFcZps",
  "key39": "2UUboyjSb5QJu8zJma5jeHPXmVxfLqsnAPB4rHBzMjw2hJR9aTCQujLAGAqq1hLppszy1PP3YvFBQQwwxUbNyHch",
  "key40": "29CYCWr3fbEiU4pFmTjvfRLdCckRN4YE3EyjNcXNQNKsR9RnAffCQ9v1cutq7YFwreUnCyqYHSz46UiZZJVfYaeh"
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
