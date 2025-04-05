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
    "5Y1RP4Q2QMqJFGguqohLiUVbcgCQ9ALJRUGGqobTGG29kFsYHjjJd6Gr1SuKSTqrLbDYq5e6ERFfG4TCcAZJuYaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jaXmPfq15SzmcnFug2zgwcBxmRckMm7rfcJoppHVfWfNK8tFVHDc3JTdeESmA5vuUSvCY3mCuN4mqzaj9i8zRaV",
  "key1": "wHMRwrydThWF9LfyuZkSg79pEC5subdA3PjQCMzRv4Livih2QdB7FTK32i2PZzGJBG3XWB4jbCnF3j8eVtrJxJd",
  "key2": "D3RkWrtZ6Q8HvEi2pH3PEpCywajCSUrojnTm74arJSSuaMfSLKnRo8aNffrRSKkkNS5grSTTAeWo8v1GVAsiu2c",
  "key3": "5iL6QrMkfCxx3kyzesZ4WKX2RGoGxrejiaVpDjdcdwKUn6insVAcZT7QNnHM9tDVMpRNwR9LvdvJ6cenjGK4EHxd",
  "key4": "2WPbKQjRCuUoeAWpSgS64nTYC5PcH36shYBguYxHjgVGD8Qc4ExEd7bLGZioHZQBxPUey2zuWdGeRWwHrigCr8hV",
  "key5": "4LhrmCMsdnNz5Umpz2CitrdSgR31d1hAfWvikLWy2zfrCWmnGTsm6yKWntwGXbNXKd1N3QtbkkR7x89wFxqZoQD8",
  "key6": "5eVYGqpaZuGuqwwPQvPGWs6ZRCA93uWu5zMPjZrH49wP1LwYu1FfvTVpNUfwNYFuCrxugxppp7ueebfMbVWKi5LP",
  "key7": "9pyfiEuFLPtp2ceV2Vz57YMUt7VfsavMK58EpdkPJ4b92C8dFU43xydmaTGkbg3cmnHBt7yHkMuFKpCuFvYHAyR",
  "key8": "9ZjhiBsZhEczYjugBnuxZQHsHsvBCpnjMBsHEZNL2hhB7PZnqUPqEZAVP2gHkBS6aN1hhET24XcURMWS3Vg3A1s",
  "key9": "Xd5PpAd7EgzAtRM4tg3Betv7iikozWtJ32NohsePPSYQ1ZAizPLfj7ELdGpHk4yZ1dCeRy2XU7fSpwTPDnyDDTG",
  "key10": "2z1PmruytUpksVcBXhGnivqFZWKiAWsCEvGoGUW8t26sTxMkADwEoFxnd16DwgeiDCua2gqAGbDBy8M8fhyxUHRX",
  "key11": "59uVx97GAZrZxc2FEfgrzXff19hzeQgSzXRw9zsJ25JD34wShF9XhR4YfGww3ym3R7atih4vLtVopgGbb1ZcBYtA",
  "key12": "3gwF2K7FVriGm3EKR3qjmmoNryDnFYwwLcTWkcHHd47rgTP4bJBE9gZgKDsAGu2BNM3kk6pHzvcJ99KFur1oEmnX",
  "key13": "35eAEyy14MBrbVRpvK8YHvtM2dRWhWpHNqQaFfYtB7oAtRj5m4cYYQmbivzgy8rAzRjhUXTsrUoHeVc52weev1SY",
  "key14": "28txEm1GVVmu478BBNXjkbRa2jKEUE7QR2RJe5QajEt6mRkTyyH7nJ9BMbLaWvKLSVDb6dbv2sSbDP39F21GTVdp",
  "key15": "472YWwMpavAXyPRteStGcoYx8bfwe1fQpBg8yAcmZBJAfVjHzWqcLbLeNdLUYAtNryYAxyUW7KgMBxTp9dzoJ336",
  "key16": "E1nGbNqQcDDEsQdAB5kdDLFNDDTK9akr8Dhey6DJzwaLspQtAYnWJRs6NL8UkekEn1oFG6GXFvqKSHxZiRWR685",
  "key17": "3xGgc4VK9k9NGBCJ66KmiV9U1aTyHdSHQN4iNA6uRdcf5FYnxsrghqEuZd826bnvwpFgJQ7fEEgG91J6faFPYfgg",
  "key18": "49QwY4zZuVQbRfC39vBjquMfN7EvVNm7bNQsQb2zC3kfHKs1KLXrEHYWL5MXALWLB99bTPk7dEMAiCbUCXXfe4PQ",
  "key19": "35A8KYchDKvmiE9xYMRNYENoWchm9UW6cWik1TGsLpoZfUi2qbnHdRLTqjJ2TVYjp3k4A5sM39Wnqp7ayfYiFRsQ",
  "key20": "33Krff9u1G7hp6XKoYP4S7di4LNiJ7TNV4Q13MqVUhRUT9PUPRBrFUeanTHKcHJiJWx4E16nEKjQGJNRMJsrgKSF",
  "key21": "W7KE3zHqUkqsoLbaf2ZDtZNUG5VcxqsCXtm2AgYEJtMx8Qr1NuUmJUM8UVc796Fzcn4wnFiqNac2oRWmZRK4pfx",
  "key22": "5CCb7ysTD8gxCqe36xWdXJ4DhzP8jSVE5MNxpUx63JKSdjnsXqXfFcRUkMM2H4je49qgcS5C9SnoA9gJTPHdegqe",
  "key23": "2YiNWs9nVGLRb1VrqLLZH9Ahkx4cnVpCeqNHXtdm6rd7VkyDup8qd8sL4BknCrzthm4ZDGJ2cKZv4ZnJXGpKhKnG",
  "key24": "3NqTHtque8pUYXCcye3vmQrsG9oNetLnjPN63CmUPRjmpBipsNQQFBh3wPTssamseJpTHrUFKKzqEz8G5ifZshgK",
  "key25": "2ESyB4mi89wAXX9hz4ii8mNS2BHay9qUcu1tkWpUYBfE7ViAJRvEx529ii7CBB8hEZkB2QxJExsQnDFRiw3fXGcr",
  "key26": "3kYtDQc8NVEHm6teJDjGPUeymGbmNpKWEiYDMT7cLcnrutComsC2iwvtH4mQtv1B2tTvJLRAJr35NfFu6sLmdFsm",
  "key27": "YA1chdN1BAbxtc1C8QuNXXbjAcvX3BvqvfdyuSoD424GcpwuuZTFoKAYu5CXfDE5dXYZvq9hnZsfYjgU8ZGnEaA"
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
