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
    "2uVbE7zgK9ddFicdHE8zhgJsaY5AFFaSjBC1fEKfu1XLvs2Vjo5TdGH9mhupv7BF1tTScAQh2qWrioBtTErVv7yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2scg4RbDY2nFuZRNYXZCqdABCZKn1vRpABeyNAEq73tTP1PMd5hgbBdzun3AfyV7kYc9DjcC2SpMAJrFzKjNfzj",
  "key1": "2fDLmsME4XsGCDJSDJhpCh1H15JWKBs6wKgAU4fBJyUjd4ruZFbN2H8NVWARJ43wL8mpAYMPV2eYCJraGfQbYiNT",
  "key2": "wjR7gGjYyMpxBjwrfMgqqdZp1cu76V9S5M87ERgvTZJxpMmKVq9rYqUDY3YLP3rJydCSkG7r5TxtAhXmxC6fJxn",
  "key3": "YhtpTPwn9hJmw2YMFjx5sqCRRHfAo9QnvFBvqRk1nd2qkCA1wLfT7YkkGfno4QZ6r5uirQRdRmZw33BQBgqJe7f",
  "key4": "3r4W48ecmQ1qovWLZRxWURsHZQ9T3aRxfFkyTACerc1xKB9SHnkicfsRDdD6QQnnEaXy2A8Rkn2XRxWvX9T72UDP",
  "key5": "5Y2n2Mp92X9qZfUCezRbBv9oyauUbYpaG6nvVqntM4U4UE3TkGcw5Yifw6mwykF7xtvvxo4ZyfVAUQdHWNvAyr4L",
  "key6": "4eSHYeHQtRqdVZRnNtM9uQWokyrzHz7n4o5EpxuFLUs7icZJr7tPGZddUbCMZupExv7WZYzxgWgcnCojZmPU8WTt",
  "key7": "5AjyYs5LEThCFM7VGgV7d71xewpxW6Kx7TMssJhsL5FrBGvVVK6gtgZbq7wufSCspd5iqWKZmth8sy8PAikg9isn",
  "key8": "3LbQTjYqGe1S5LXF2RTyviRzskCGr3fzf7ipBNaHiPrLS1UeMmz7HVtw9CXhv1jfRuwccF6AdQ4fv5vtptt2Z3nU",
  "key9": "4o9f2nt6zSzmcaGcDN3WP4YhUgkerKYSC8nF72KihJ4UfXq8UEutDJ5wTyu6UWw8kKXW5CEAWGyR3EzLkeQimhAd",
  "key10": "4R8s49ATtXNWr4Wq3NaBaSXyygZrE3iFMNpr3GxonNZ6DQWygmRqn1AcxxXihs2JzbPBJgbQNF5SogJ7MLWFvZEb",
  "key11": "Uzj2jegW9GEwQUuqBZRj7yg6QoiSE5Sg3242UcNdGPoHggegr8cmjssFd36wejAytTfLvq7hDUg1EtMyvJL9qVC",
  "key12": "2XLPnCaVZuXExQhY74o39D78spPVywW1k3nqMLjFJ3q4PNLGN3m3AVvRQZnkg7nzoyjphQD41QWZ6WdvPfNmjQWS",
  "key13": "4LpEGSYKPSSk1XzCsQ3Ck9kqvtUYRZDVdEMduvTGx4qqSuKE91hKj2NKub5othU6qyCTfEBroezJZdMxgvHsPYgg",
  "key14": "2Dr5rdzpR2ecgumRj3KuLEAWxywwGonCU2KAyP6Ua2ZXAUw2pTBmvZhvY6ptUL35S1YQvDHUzZ9aZ7vdXLyB9LKo",
  "key15": "5Bo73WbJjH5SqVp8d7WF5zrgUqAHP3gMS9HWwfsXty1zpk3h4haNjAvZLoJtFHzZq8XSqunMyL31sNFo85PB7yjd",
  "key16": "3odSHpP9AR8WTw422gE6qe9h5uuWzx1x68wWyGca8ei3Wy73f6VQiQSjoXpJcfBmG8MV75w7aokwPJHLVGPWN9Tu",
  "key17": "4dh9mzbWMEAXcfBusaju6nfxZdEBL3wigA7uHZK9cSDpzAD7EpbAymsZ28kiYDURAZTnGgBCr7hiyANf8NCmWEcG",
  "key18": "4AUukjs8hMnM6CaUzNqRfsxDG5uyKXpLNMpP3gEAuoyUM3b5F47BufE4XfBqpcHXnoa3DRvXEcU2Erkry8QgkdRw",
  "key19": "2RgLAmwMnS6TudD3T4TqTYwYxu1PeTXZDgNF3yDhTdCtiBpDEJbY5k7WppePAZBHkz5frgCmSweCuGgPKuX4oRFe",
  "key20": "qXAHavdC3bqjCZxuLiczMez3nJRo9MQEwEhHP8HzNxxaRSTqgaAEwA9jtMQZRqG7fL2YbBX5y9FiDFwVuXoieRR",
  "key21": "4yhsVQA3PQyCZVFUJf1a8aDUgaHXU1mKfQCnxvuVaexmSAemYYVSpFgV5RC4du4FjpNUS7iv4JXUp88AVSQVVdjS",
  "key22": "2wEGPGLFjUJx4mHKxSKRuRnLoq79vMmVo7v6jEZCoGyLk949ETWKpbuxMciPaoK3gnfDrXzCVMWypdHtDZJSAaNb",
  "key23": "2NXuQitZB933au91TTZbEmtPrzi6S3gPqy2J8Zk6LLfCFupqyGRhF8RzsuqQcpkTBWzSQu3bUHvVm4fqeLpiy2VC",
  "key24": "4Xm55rEPkuKUDGyzXApbSVp8WQB3Apsbko327rkiUUsU8nDHMMw6f2GhV1cAG5Nzmx7jX5RSwCpQFaJr6xGPkgbB",
  "key25": "3gk5HJH4Re5enoSaxLnatbaYW7izQz6v9hMSUR8F5wbJn8s1BHduKtKo5VAWf8qt2Tt9CvyG7rjU6w58YrKj5uuG",
  "key26": "3auF7VnadPPaY6XTjoZTdChuhUeYHuo5ez9ppBvSzb6HuboZFTjNhQ6AyZmG3DiuUxvk8UzLYKncXben2C3nMVGx",
  "key27": "GB3kTjDWoSYmjD4aBBRvLRXdmzCGxQuRcHxhHyW51ikCGe5oBxAWLjq6d7Zs9WcihgjBYVoDD8oJykBSSuqRuBY",
  "key28": "2QHqkgSt5Y2M6MUxVjSsJ7KkLJey8drUASHPETVCjWAch8XV7Bs8GepJHAXwEu7RfYodyqsUfxwnZpJvnG8948oj",
  "key29": "xJEED13T9Uq7jgkL2ySVCM5k9zQzCwyE43wwvcmczFLtkeXV1W5prGcRECRgyidfTfcenUbU2vHS8y8kBWqAD9w"
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
