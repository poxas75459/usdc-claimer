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
    "4XhTbXCkbEHeXb6H3T8rAKtYFtZVKNsyJoNHUSDdHrsp9Kt9J7zqx6iuUXexhtXEJYVvG5Tzf19KbYWP8Y3Jxium"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zTVje9Y4FfM6zmMWEyYVAsj1xf7MQBu9DcBwuQd69eo9kwCjQWoZyji5hqjNttywgybxKJRDZscDg8WPfri64tZ",
  "key1": "4hw8rs32C8EDh8R32xsqBpLwVz2BRZXKu5KhJFo8nuML8GhZEy3gYQ9U3VLWWw64EMBd1ZA49gCuDyuQchyrypd9",
  "key2": "2Ay86D8t7AoMPtgyd9FPCtfHj6fPvLPHwYhJpcGsY5Cco2tGh22e22i9HyzPHpjRRP5WhN56HJM59sgr4wJakQYW",
  "key3": "67Fm78VHNcuE33kRUhdk69uJuXmjS3FFHmEamMZaae8JZG5fw5UpvFNviJxZGJUN5wuPJVSv93SfDKJpST8akmNY",
  "key4": "5VDGv8XbF4cJ895C5XnR8A3wXP8kmou478SkY7jN1bUe5D74ZkTiu5JicPL3nEBHknjp4oFr8zJTEFQVjgkVrkjB",
  "key5": "5N3qQfG96UKfGLLu3FS7E5qFVeUvo83EBwei61pZeN4hXNiMKHKmUmRzs6X27xABhC635qm3ZDtPY86HHRM5rThj",
  "key6": "2jJAj3ppx7eDKeQ6tuDoFpAhiP3AfszZ59HdJRecTeqsRzG319HcCa2mpjDe6CG1ncCQ18rLaPmWjQrh2PF7o6fQ",
  "key7": "64mjuLsyf26AvYPoVRrxyRzZqp13thTiVNW6oE6CHoFFzzbPJVoCdLp8iBjP4684NgBn91MSNkbdQGEuBmMgRSWe",
  "key8": "32wyQA9c9gsvRucgZ1pDjVRTw8D9Fm6Tuyn1sT1bQB7CRY9rhsXLC8afgsfYbFYLyyeXe6ifz7knWbqV1MbpQ5aL",
  "key9": "4tNpQhD82wA5PsKpT5N8nc7MJg8hihTybaKkcmXTiVSdoZvfPcGZvtDjwtHFfb4iQufQjgoyQgbDbxJLJR5GzZAm",
  "key10": "4JdiswrYGb9LmjLC2HZ8zdH8muLfd6kKinayjADcavofZuuJVP7ftrEy5Lf9zVaxH5vV9xvV7NwEM2RccxP7VRTE",
  "key11": "4xyLPrn8H2gADahL2fRcvFG8S8TQqNfDWfuiGX4V4S78QXdD38vk2CJA8pacN8mq9jG3XEPMvUGNsW3xigmM9y4T",
  "key12": "3JajVHPhiWy7VV12HYyNTx92DVzZJ3T1nzXF5aPYCDAm5t6ZsNQpoaeUzPJXWi8ARSnu3fo3QWqbdFAtb25vopWs",
  "key13": "2Lj6uKMMwLzCr32yTP1P2Ht3Z8Tu7aeP5Bj2gk3ySv5QyqbPMM73NkrpLnnHMvvx44DBMK7iPeEZffUw6AP8oS4T",
  "key14": "3NL7sM2Py4brW4saeobyczV5nuSXHTBD8DXUBDiYb7RfmHccyPqRRMRNS1y7zj5RgUidaiyzqGtRGHot1ACiyTrw",
  "key15": "24w2RtWDbNQihuTCd4qtLJG9UK2QJ7i4y822qK2VKSxZVWxX5HmbQcNZcMLTnBVYTfLPMV9tGpHp1vw5M1PK26ZV",
  "key16": "tTvchACFGRjLPuhWaHDiBv9RCqzxUKu1ewxNLxd5VR1BcQvEg6XW2mLytiiVpy5Qpe5sbYmWaZUy2bXkXepr6EB",
  "key17": "2ATNCSvvdDrqw4rXuJRxkrmufttCv1TCYmrxHNB9owu5HvUWiWfxUa31K4oQn5evFweJor2myCtbWo1V81rELYFM",
  "key18": "jPGg5WjqDN4JupM5wK9wRcu54tyjceZKwynvAbrX8Ff3k4Zk1HRKyy98YvG7jQ5aqZPhKNRxUGSnWCWHjTJ92hN",
  "key19": "52EKgm7LVVV72NAoKGbio1XyQ9zao3NzvwR1URgnaiuqZmnS62vDKvSKv1hWFeMNpjvsvUQiQTcjDp1rEh367Z6G",
  "key20": "3R1NJqcCA9Hpsvbo3ssxCbx5gzNEkUhg8LjVd82mDAu6ZoR34GsCxk1QskgJzCBrR4VZGec8qn2zBzZVCTfygAVw",
  "key21": "5TgGeVn8cdLT1BnH6EyFZancvaiKAP6gdBCvN8pQQzUNJhePDaFWSD2ya6T4BvfqXcvcv8f2ExiS37qYSzdYGq8L",
  "key22": "gYtTvysPGUmuFH1WUT3AYDfnc3szu72yBeFH8z23a6PjVKG9sta15yiCy2us7EEE4hnvUkYqRwqdpGfDtcP9rDX",
  "key23": "36PyByCo9QXxLdvjnFVBZa83vRT3hogJjZBxsxKLWyYfiG8ttBkqP3MguAWZCaZe7SxZCMJHXHeCUkbFUVCEdQ18",
  "key24": "2WMW3phkY8s8m2RiN4579frfAFZWhv9CLUXPqvjLN5Pu9gWVeNvM888cgp5jB5tDd1AFJ8Hgc5xiZLRb25KHSA2y",
  "key25": "2bcxdCin8FbEXhP9GMX5qAy9NF8qJDWz1DXMP5xBEpVaAbMwwXHeWCyapbFLMGNCTx15tXMexy4UXcK8WDaiYA4Y",
  "key26": "4Kx4MSGbVQub6NySVLxF8HkBivC7FqtwKAXvQ9zPnzQWZkZx8KVLxgqPXjKK8thweRwVQvABEL4YzbesXFmnbQtm"
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
