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
    "5zJXDuT55L3gjLAqJyLkJtMmhNVwcid6Hdc67dHTgSwmAwHmczLCrRvWKd6wgXQEmPtdC7mcZPVMQ8wH9DSuN5zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMeNmFqhctkCdSAUBC9xvgHHL9XTL68H45654BGeEp9nVnPt5Ra2AwhT2LD8tk9DipkZXmYq1oPoZ6zPE2A1jgG",
  "key1": "5qP4pFhR1pjZQc3TPpFyQB9y27EtQohsDuZKrvWdUoEC3D6b2GLdA1TASNc7kHfdiPpaPeH18hMSgU4z8EtzdJYk",
  "key2": "5Vsx6mwP6TXkpju5zLHzZHpr9UBfEKyCVqDpqQitaNefgtfJLCncrWYTZCNQ3BVM1cfwgGRbUhx1Wt4aHfWtHDhN",
  "key3": "59Rb3zKsuS76ZfvoCdTUoeJZS9sqUsLKQSFFWvSx9JVGKwkcnwGM7ftzXwPFR5vxE7NEfXMZuF1Zqt2yE3K1M2vT",
  "key4": "39zM7B2ofiDEQVKYq1YuAysyRw9zzzvsgt398BmnmqQNGYQd44srbYLAAfdAJ8XUg1yeidsAFkjuWJFx7arSYcGe",
  "key5": "4xSn59gVPd59SZY3VoeFn9fUQ1hNRLQeXR7cnxnRrZAXqmyg2UrP6969PuNKjUGKDfRV5veNZvVDbpNF3rkmsTcT",
  "key6": "4pW2UhnRpiW2F5i6weyZeVFsdaYRHUiw6Gqs2FCn3EqCbU4Jwcqr3QkHq8ZfkgmsFEA6EUoun5K3ZtXyG9NXyRzs",
  "key7": "5u55CCLo7uGmpxMgf6Bq7oJRQBTMGKnoSWGMCLg3tMggiR9hpp8UfyrTybSA4uPxED9mp4oY8cE56EVf6yyFpiRE",
  "key8": "6NE4SfyABYgqmwy4FHaGPnW6CBY2gbXfnLTAPeqQC9GAhpwe56Xv5wVhvAiMeiXgFxrwp12ra2ojfxFdjdx39B1",
  "key9": "4AaBXKDEuwCrnZuRLpAV3ctwEY1oJoKAZf5f1wibpVCiPxPah7ipqLyt92Up6Bt49qJMRLMoX5dVXfBJRM66oqeb",
  "key10": "aPvHwPe2neTLZrqvn3gLou7dmZQtTAPk57hCVH2D4UW2G996vFgLA8Myq5qaxZutx7NfJYXQqDC3d2b4eZFBP6o",
  "key11": "4xJHmeLebkF3cvRbQBkPs7n3N2b7k3XaomvWbEFdW7kVSP4yH74f9M6PhnphVLyzfTb81CrQfGm2TwP5dE6E4z7f",
  "key12": "RvqCGFmXCXXyeNtv4bLcr5r6yormxQZjR7rMWzy4mUKcE62mi5LWMvNUdxsUD9Bo2E7WrWCvEBNgDPUYjo34tKD",
  "key13": "2zbikVW9nukzSgaMg6AaBEd5uMi6daCmTAmwtMPyhprAgqcH9ywtJBQa46jys35sgxRWZxtWzGt5MHJ64eYFiPtv",
  "key14": "qw3ojcGZaQgmQcXLEdLoRCBM1ZJxrjkCQZqJm5AbFYc5X1iZQHWEvTzL22Sz58JR2Ec4RBqLZZNdkDYMvhjV2uD",
  "key15": "5WtvqE4CxR9aUoZG6JyzqAvDew3sXs2AFw1gXzowoT6QKmqgHA9DQmn2ymqSxtxQtFUaSxadHybBk2sWvB3z2oDz",
  "key16": "3EE693oZeSYb5M12qQywrMEMWAQs11991ZFupMT3XESXoeScjyUam8q4f1fXh1nZhLvsz9cXXvxvgD9NJXPy1zyt",
  "key17": "4QTqSxJQ43wFKz1TAXUSRBgGg8hUmaHfa5PTjLuLzkGsuCKnUd6H5N6Y6CxDxNsmVtKhVj7hiSigmsbokxxM8Aj9",
  "key18": "UbrKaTYL6BGKgxyjs6M1ttscxWDf7rSjNk4TuuEYH98UAQyyjnsYYgHNEo8LxH4hKUpgtWVZ5FKj8kKbh9AegiF",
  "key19": "2oSFTWHe7vaMpGoVnSTURYVQagWEq68HQMFpA87BvK1gqi2A9De57SVGwdRvAw9iPJ4gyxVYvoCFHouCwBgB7nDs",
  "key20": "35kNYXN5QVUrCzo1sfRSuXAyHmZwwxtevmp7wvbMugtH8tf4wWmfnhbTnTT9WMsE2xsMKwCHyUDUEFchFuyZ8t1",
  "key21": "4Kv1sVmfrf8hSrpuuwNExppNTAAKL1jvh4t7ANaF5K284WF3FxziktquuGKQXYbfwcxxNob5jPk1JvuqEmXH2FEU",
  "key22": "4fKPZLP82W4x51XCjRrbuFtLxKaSMinAprZBdw7jktS9zmaD2WseWgqsKMmnGeP6qk2bD33uon7VYE6696n7JVhy",
  "key23": "3Me63WzU6aZjLgmgo2mkPEEQ7XKZeM5LKoy2CUCzJBiVxQB5DExFW2XwyVk7X45xmYjcJWhgH3CoE1Mc7SVvsi67",
  "key24": "35QEdsHv1XmMNq1CvdzNsJnVfV218gH7aYjxLjouvrG7CxhyPDEQDZzZ6DNJy3bdx8guF8AakxsuE4sfruxkb9GB"
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
