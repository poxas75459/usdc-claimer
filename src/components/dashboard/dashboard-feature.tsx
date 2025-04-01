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
    "2zRsn3M1YLSKvcfPbnR9ywUafYuLwQgEyUsW8SVKVFAasFVZ7AHnxrdQSQo5jZQEsZhCGCnXNKwqSfmo7x9FRVKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PrDASRtfpwJQKfqfMExkHdeM2Zu2B9vcsGtuMjHLUR873iSmhD3mDVd4BBZpz1EgbW7Q2E2b1Ms37vaZTGpnt54",
  "key1": "2Ct2Faio7MaFh8fQ2pyETey1cQzAspUZUVs5VXPJYGsHDACr1ymULytPpwT8ivs8WpvyVeGxomm2R2Rn8ozWYgpn",
  "key2": "5TWGFV2ikAw4boqAjrkbUsWKbn23RvVFDxHHWcbd4hiNNxUR6Wz44wuxcoxt8tzdb2FDhPLhxVW6M5HySZJgCaom",
  "key3": "2V5T8fjve5zWmyZSqHyax56pT3eFqTKjbywRBtGAWQQTTgL3zcrS7jWEzuRfZciWrc7U8EkG9G1NApDDvD1ZjZu4",
  "key4": "cA7zyV6haYhqw6QGpHed5Kt9enFo5qsTGB6uyLdFDCBmRKzzez3R8Lpeb3mcPSeT3bGK6tTcCrBYfrc2aJsLhYw",
  "key5": "UCfVNdok3EfkQQuhcdBEmWgzdJPYEo4uKHh6ciP55374HP61Jg7ohAJfHqRhdGsLYUdV4aWQHkHgkT128vAJoRt",
  "key6": "jecnXLLJK2Pr9Wi3Dnn6F5K4sNEb8tFVYbLTe5GanMcr7GKnZbZbWzfVxSoJxwQBUFnuqmjJUUnF4ftjZVveaWw",
  "key7": "4Cb2rFDUReaRQ7TguZyfRbY4E27AJMDoptRpj31R3H9RcUHX6xLUSheChME9aG9oJr1PBvRUHewgb6X6wRzKWSaG",
  "key8": "2NbUei7w9L16h6MU7E5mYKzfz8wxCtwsUNbboDQgCrxHSbLKkP8dtZ73qyJdRLmzV1eRaKdiNF2u7Gr7pjvf6Eqw",
  "key9": "wHhEzZvwwiprkRc1q31iBpkukzSssrVogsnJ1TcoBQkypZCNWPPuaSXnKFvXBHznG69wDfx9dabGxXsiD2tnYZB",
  "key10": "UjDvLjJrZYCN1B5SBuF2TNFczjdVtmnk4GVB41NqGH1Qkw9xvxJvTpt2jK6edjDkA1GPbh6A6bGspdPpGth83rR",
  "key11": "j9Fo8NPAe3DGPoaqYGsY8MEtcXSeGje5guZXMb4w9nmtC5p8nbbpjXS6jcywmnZbayhGhs8Rmt9Keg1WAhv3jcH",
  "key12": "2pmBjXTsknWJP22HBMNp3St5AdcbnDvYj2CvQAfrFJK9SLVT6Q25yTeBbfRfsZYaw6Q9yyh93r2Zr15qgZkR2sP1",
  "key13": "3sFEug4vLrbUvL6pP3Psr8MmmoDoKyhto3EwZEhdGNSrL7DWS7oui6iQ6QspbHG651uTJmrLWCv6XV5xRHVYUvpJ",
  "key14": "GBzwAkHCjKjAUusNLWihymGxYM7XUZdFJ1f91WdRKtpBisVwk7My49ccimfJ5dJA32xxbsniZUxqLyEXVBEWPzt",
  "key15": "3wcdeJyVSGn1DAm3Dde8bHNHKmJL8GeJoKaVt7FRYVf5knyovEmtBtwGfXG16wS6HzHqGxSDtBjpc3AdJ9r3NMF2",
  "key16": "2SsfPE1yB6ZXavfEthRRk8XYR3hV4KQUUbqDvEjCUJuh2fZwaQvbhG8BMpatxtFnfxCRLMSbKXL4CHEPLkXkGMNf",
  "key17": "5v5NzU8b5wUXcQoQ1GvkyWudeQtaRw9HZBkjZDbH3MM63mtQBzgrazyryppLpFMUiaENQDaDsqgJqPXxF7erfseF",
  "key18": "5V3m2KWofTFuSZnSZAhEhfWR8gnJVCj56Ti3GgGzQyKhVy6M8Vga2GKtvzMuVA9nyodkXgDoEQWPibNzs43LKnUv",
  "key19": "B4MZ9iA8dxj3LfddYFttgfLujoKY88GHtXXuhX5kHbySAsm1sTicaSqtuD4QYLa37TiXtCh678zW196s5BYDv2s",
  "key20": "5KknrWZE1ZbcQD1fiTdpoG5Dj2TP2JCHEdf5YCHJ7HUgjGYjvv6qwM91YXAGLpZ9gzhEShCfDGbLGCxU7vYBt2Dg",
  "key21": "VKsGHDEHJhf4sTqkmVKb6vXsiRACMoDdKLzCe6Ukxz8fWrxrV2rK7MbohLBhvmPXqR2pxLZEbHXVJYTkCwHeWUP",
  "key22": "BiEJLm4JH8JVGQDxMe2tK9vi9SnznLHBnbwFvjnKr1oVZsDMbbcAh9nGvqqY26E2wybZwr9huWSBTe9VyFbxKSa",
  "key23": "5hah4qQd4bmy2erbtmp8362rcFin3FrfpoT936SXJmWnzoinbwpK4oH2ajrVoePGuUtQ6t6p6YJ2FM6EaCyaVdsC",
  "key24": "3NyDWDv6AE9Y5T2TTvathwjuH8T1vhLGnEMa2kcgxLMApLeqoU7bDVrYiRgP4S9EYCuKd7HD7PsS2XR7s81hgaBV",
  "key25": "TUQUCr9N6J8wXuppN6PxLRkHqsaEWLzKKaYWSRsu2HWP5hNtoS3EZezciGu1btF3fYYERtrHT5ouJmCpuiQDtSZ"
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
