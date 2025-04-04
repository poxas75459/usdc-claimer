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
    "5eM1JXF9g7rh8ixwdBzmqniXZSXFViJRmKLoDi2V8XQ8ywfEU9LLv3QoQ9hLjfzDeUyWNs714c56ZS3d6PBfPMQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MGXyAL7zLht7CyFKXQsAdeG6KckBqHDSN9HmL2g7fhqGbuQhJixr6atF1zPzsPz1KhsMnivc2RyrCFyhNdTmxSu",
  "key1": "5NDxzUStGDUfu4LYC7WQKzJLUVQAyLpht3tAEZ6jub4ijTQKzho2snReAzWfshvzDTJcgicpWxALc1MHAjy1R8X6",
  "key2": "51pZEjPEmNAkruai76oJ8MJS8UP8jQu6EuQqTXNnVJ4QNUqGfDaSocfsqGeVdMcjExKeZ2Qdyf9J7Rzb7U3LnFbs",
  "key3": "3QAkR1SS8n1vYz5SuRdwmc5Fe1XniUsiMpWs18nd1yNuDQjcXF9iAybT5NZ5GXWmkyTsF4jDSNNiVX4CcoZgZ9F3",
  "key4": "2kTqQKUhNyyK3U9dUupg8MBLGgLjr4yuSHFNTRCenddEyPzNbS1RGz6dT8FYd9Fth5Y4gzcX8i7DuPdDK25h9JZR",
  "key5": "26xhYHor9sdFoFZHnFgefHcvn1goWNa7j6F8vVho2CpDWYk972dmUXaPFV8C1xranGWWktmngZc5642R94CLfvrA",
  "key6": "3ZKvct2dqZpyADTfEWM4TThwj1ZRfpnxMtjF1nipnQjvTtycSzqnYjefBQN7WsPodYw1u4gHxuakPMzzozkksTK8",
  "key7": "qeZtoXE3A6Rha4b8raApWCRqshJW2yr5ZNPwkwBb3XZuxgy7rBduVJXre6aWNQbvQdiBSM72WuqunRbUwcTk49b",
  "key8": "H56Bce7scjgyjESRHdbsWEB3PKTi2PidkaFRSXE3uV7m3o3Aurjep8w7AicrMZC2zczo7pQ2Lv7Gor2pbizXE1f",
  "key9": "5At83V5JPGHrw5MG2KCXYEJxvDThb2ZptLHyh5V6qHF7KootfyaR5wZyzahUSy8w4Eqat4ZPCAwRajePjsa6h582",
  "key10": "5RGJpKRemAEFFVQZaPC6M6uz1BfnUZaWybfTGbgaECnSuSRRkw5Tar1iMMHwPDyPCVtud8jrQsWcfL6UiHGTeJwh",
  "key11": "3TVayDi59ZickwJXH8T7oBLC1e6RhMZ76bnRwS5ZsQC8aDu6jJYrwF6Gh1w2C4u6qSi2hP5R3ECPvdH9omFmgSRK",
  "key12": "2Koh7FZxw4zJoe2iHudg8VkWoVt92q4VuaNyoKPN4Ug9p3PntrKHBJTghM8rdShRDJFQLrTMZvvtFTcL1bB4F3P7",
  "key13": "23dobQTpBdkpDNZVAp3UjFngzPbVnfJmvAaEmK5ef1FQ7D1SsbEku8111ZUP9nCFSqoaZtsN9xafgSnK1y1nPXgi",
  "key14": "3X6occmqJFq8KULj8Y1cq3DgLtk7GPGsqFCmULdeA6eksAjFFGp8sdiERdxwdhuiAF5gbwfMqxhWUVcZKvpiSvFj",
  "key15": "4iHyctYG19ThhN4qo1HBnogucLvfuoXiwnVeZfDbxsSPw7MuxLikybCoDetn42tu436uGWNECZZN2aqiKpFW4my3",
  "key16": "BdXCv1t4DH2bNhmD61XG4DPmw57XdQX9ye4aY66L1cVFQd2vKYEHm8n9cSPAwvnzcKAYgxnHGhcQK6eQ2LsV4M1",
  "key17": "5VW8yZ1doLyDZUQxRz9wohmQH65qZBXPqdegQhszKnHxQsSjZEdGSGSahT8VxQkcFKdAgqP8EgDNYDLwpCA1gn5N",
  "key18": "izEPLnTZy2xheMAjQNwjPk9xpU3JiJ4PmApdj21xuKpbsT9CXcGqPaNVsizCKG84kH3GCjXcTe9eMP67pcmNMvB",
  "key19": "a276WLBhdwRVEUkNp2sATpBorZcmxnLvygFkodEAbwbm5cjgRqUub13bpV4WyP3zSb4VrVWUx8XCYXB8Gx16kiF",
  "key20": "4QVt1CbQZCq4G6BqpkKA1LhEfLp7S6mBg6ACib86cHtyAciaPyiTW2wFpkokMfQTJAP4V8LwS7mvpED5wzx6ice6",
  "key21": "3omHMtQdJdzRz2pXcE4KLguv74UDBaSFDj3H4oRCzmPWQnk68ahdDJrwJtameHuXUA5Dm2duzr33wfyh98q74PTP",
  "key22": "2e9Bc8ghCbjicaLkd9dVi5peGFBLSjVDJQtDRbNEcEhBdjGVj3Y6259Coz4TKNK6kX5KaZbe2sJjEqvk7QqWB8Bu",
  "key23": "41uD4L35JxtEb3FZKzZKN4kicEvisdZRpfrmaVGekMWvVPYaEnAu97NV4Jc141q3rycZfaYTkmuqJwLENcNFZTKh",
  "key24": "2zbGkYTEaMQkghh139h9sSKiqn8XMmvk43dC3fHWqDn2QGaPm6pWLRJPLHSE7aSzBN1SfLnN4VmSEnkKLGtRBa6S",
  "key25": "5xPe7QXwESxWoRaNkjTYeH55Etve7xrvgL8rtQHvPV4hiB1oELupMQEeVNqShvGmW1zaBVheM54j6MgxQzvJLyY6",
  "key26": "5W9YH9TC4rqviB6vsxLEAb2HyHWuywbB142rZdqCXdUeUXsNYw97c5mdkXJxEEpZJ7NGRxjFkd1uoZwkT3Y9ePe2",
  "key27": "2ak9jDs73F6uMMyDAuL4gothyC12TS5X2d374qCc5n878WswUVNYDWd4pp8xPPDDuwVyBtd2p8Wc33KShkYXb5Ae",
  "key28": "4QPMgphP4NQEvguZ6XFhxDyLiXrFE5E3zrx2TWFJShzbqeL6Y7V9RtuVEURgDoLiWVyM3giHRWci5F9vDLZ6Xe5x",
  "key29": "4iPKZDy35zcBZ5AFuEoYTpNhNEpKrRjR76wBXMWHAZnCkT3TCym1q5wmwDSBt1HMyKbduPfeZds1E2unAK15iFsP",
  "key30": "PkrQiiJYcGRkoMtUdurdvoZCmRLSXeuCzdfr2ZNngW2yeUs1JttQBMzepqsQodmecjZ4B2LfraB52yY8hJvswDe",
  "key31": "2CzJRLYTVFr8LtDW3UjiwTcozBPEWfrQhpSg4H7z6WWkgNvQ2gaAmp1LyTFhKb2umEY3HKUTuskLwwfGwxkSFpWr",
  "key32": "62jgBYfqTYZM6RdZf3An7Z1UtxjBYg1pN6kvnMBrBghjV2cZaz5HEGFxWCQn4RdgmGQw5pg5F1qXTtz3GvuppwFT",
  "key33": "4hthPpbAEfCWXuXHtb4CBmCxVdJRcDWiNWwPgxyauHVVWQdzk8JA1Sj2eJ7ktNe4g9PGGvxUQtRbMVjuDrVAZGxw"
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
