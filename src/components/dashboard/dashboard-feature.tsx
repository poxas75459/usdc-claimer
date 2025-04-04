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
    "5ZrB7WJUGYrRLfC9VkkmpP8bWzbU6FwNfUf5ssiCTRTLYnjAt5tueyxb9HgaQRndNBQP7rG7iCuS2uCdGLzNFd58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4tkTdBtk5nrhwedye9ArzfgFdPVU4YikorFCFZ68G97qpB4aTfHP1gZZeDmv7D8aZY5uK9oeZrZAN5KMnGrru6",
  "key1": "5nzmrb9Y44ANCK8fgRg34AMYZ3HF8EYbjafbGFKS1qi7Fas16DjjXDZfrLovTAGR9j8TP8j45wcjocSAqt988iJg",
  "key2": "54RFSuLW6srWhm7kTT7XkvkbRXyhXrz1WVXYwnqfB1y3N8W8kNMQ83CW3TFW6qoJQaXfjATEZecKXMHVJUpDUzw9",
  "key3": "4ZPDy3RWT4wJN8detQ5n966UGmS2bUo9GC2QPnEHo2YWcZTZL72sSdwsc7s7EPu7vu5sKyA2vtycdatSePc3mDPb",
  "key4": "4nVLWLGPkxzQyhU3hPNK5GA6h3xQzTRxzuZu4YNXWJsxSYA5B6Ar1Mu4H3BfUZXGVKC8pLGouSPyZBPC8sXCUGwT",
  "key5": "rQZfgoYZq7us3mEsSEQLgqbZxDEDhktFjQwU41mpgdJ8cUPmw6ip12TkgLt6NkxPHgHoD9yuXKxEZzE1Qs4F9K4",
  "key6": "3WkmwBeMa7hVbajsRqWQzeWnH9tBhMeLmS8zsWzS8B4zB4AijRoz2dNK6RfrcXZunJk4QxtAdFvZpsZuADRrQrSU",
  "key7": "5deRCRexVYPSH9UxLDS2pPd7Mob6rmv4AWcTEoMAVb2GkRjTrEurHNQdr1GHBsSgv2sDoy7GAQhUjyzHa4FaaokJ",
  "key8": "2KgtxzFQPfL6LRb5crevgRGNi16HfNVUaTCSQE3aRRtr5Dudd7GgttfzwSprhSZ7riHb8DUP6kRvBxzrZGhyfUwh",
  "key9": "5cpBNtdjrpC1xQ3nRuo8N1dEhd78MPmC3ooWDUsAdQWNtDiJNXrujKRJbJ2Kf9Mk51QP66EFHHKcPiZ8saKy5QWa",
  "key10": "9PNc7UpnLfURiptzqxCSBDgXSoJU8qBXdqRJAf4fG9sQAp2NRH9yPcFtEEWYyfRksyG6qHdEaecEkcbu2NszZbL",
  "key11": "BFisBGKorUwVyUjtviucCs7gYu6zND7VeLEVGqMzcKX7oBDanLyW4YJr3FcaCQT9xDFaqsH9KHxRyXDFmq3RX7b",
  "key12": "4y7nfDFqG19pwrm7wZ2WSQxnSAVMVFyGPjcTcoRG6VCTab8BpuiTitVYg9WucJzdTByXXV6FP3CNRnx3TY6hkhc2",
  "key13": "4dikzTn2TduHYJ8YHPbe5an7ysqswfcydSvuJE7HxL2oJgFcG8s5AHh661YUuYfMxntXh5gn3QMALqeZTPQuWENi",
  "key14": "RPdhLBZZpJobkKXNYQPjAiWzZjopP3yGhU3yh8WbtEEdho1scnCGHCMmDbnCUA832XHfhhNQLnzfQwueanfFVZo",
  "key15": "2rBpyqcHxiV1s1ro7aKFJNJXJ7zzyxwxiLXgcAKrzDfVfNvaXP5ZZHG71rUA5pkGxCBee4Rc5hsUgTmAbTiwzD3L",
  "key16": "63GbGtRefNnxFGHMpvJMWEWGkznJgRPf8cNH9ezJRcRwt1EoxxePzLZd8pJmUbEbbnSZ5YpraJ4vRdNBWS9jx4u9",
  "key17": "3jRTBkLrGiZo7BhTvG9y9fjxBz5NMZHzJ4XwN3oxMAbtQwdHafZ4i4HoqnX97D2xc9KBVHduG5zogNq9BM8Z1DDq",
  "key18": "2xHBq72uUctCNzNVWbEnmzsidLatagHSUDgiG6otAjXgv9b7ArmovfLo8TdLf2UrJ6g4f3eFJCTsTjctUtMMpENx",
  "key19": "oSdJgPUxgonoW5vZJJ9vd7R7nqzYwH1ud4mPe1gvrTX8EZrudK9usju4u23TAMsNqpWzS1qJhbtHvF2RF9TmyzV",
  "key20": "3121FWqP4eNVgTto2YV2YgUhRYbeSeucsCqQwo9hHEdeSGFZmBdGzPQH5LZvyxheu5mLRDX8FYHjRtcaM733kqfe",
  "key21": "4qhJgMANekbEE1uARDpqLQmEyPiWk4jVW84CQofMadRr7jLdxv1pb66xacQkmc5JQKYQY72eejdzFyyxTk2VGwAH",
  "key22": "2rwAUzmQLTZcREvC4bh33dC38izkcQCTJD4Kaj7AcGhgkcvPHMkHrZ2ZrVxrd8Aa5HBzqzbpPoNtqSXq777g6AkA",
  "key23": "8gXicqT4H7aPgC1rcQ4nprVCviyi6Ju9XCRXfUJHHBpPTeBUjWGfsqRKbdzTX4g4Rta1v971UgyPLVPAYNuL5Mr",
  "key24": "4dWDbmsv42oEPJCeFYZnrAhhid4fT9gREQFkQhLgrtS49bU4xdFf1uxociwzgxs3bvTdBGfRjmrDhjgnstTVvEoP",
  "key25": "Apmy3hTGUKv7qjJeiE5M21g4fGRDd3wJPPF59TcpyR6gKvSDyv57Ld3nXdQnKP3j7phPwiKLoFv88HjXibfsB4s",
  "key26": "52KK6bKQyUi6YWdRcX3kiC2vFUqHW4W9w9sUgKdXnB2BVA2Qz3kBdoZ6g5VpF8sWugM5BSHMSfsPNdg1rwPAzhHW",
  "key27": "28mcg9vfhGxoQpa2Db6nCxFcgbfmsJsoTbdewMYZDPqDt719G8JizMENaum2xQ7CRPEqGmKsGaNS3qEcijuxguyM",
  "key28": "2X1CWqRNF16B9N9KALZ2vPso9JDBMApR3SJRYZFk3ZtbAvqaug4F24zE1YoNXYwE6UB71oNiE6S9jXvVqS8CpMj6",
  "key29": "22PYhUEF5wRwg2yvw9PKaD9QGb4nXrUPYhiVHXUJA9b2rVY4Uyj8GWaMNER1wJjWeYPzAqmEwVzmzkFV7krKQ5JU"
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
