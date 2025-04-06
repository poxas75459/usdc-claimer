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
    "3ZB9zYkTkZPDzBg2eaX9KvM8oDTrR7HMxu4Z5WT9EQfEA1wTF3d8P6tAgnXEh2rr1fW4TSykNfB6tBQvkERp4eiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G6kHak1XZG2xZPJVAUFpgdnxmc3wRkUyQRWKZgMQ7yvUYFcFyG6xt1opdNSphJw8rPhYSqcF9isGywjzVsu1FTg",
  "key1": "2b1CLTobuK3qyb1C3ZPnVvWuir55X1zxY8CNC8dBrPGYpuzZ2VLcZrEN8TyRKyso6xhoV2x7E9Ep6oGVpwUnX8Uv",
  "key2": "5rpopNfaEM69Cmw3aeDHWVQ8xsqvZ73LQjYED2fRiw55v43n2hUnyt8Y9FTw3SDnZy9xy2w1Livb1qP4mdnphxsp",
  "key3": "5xoTTphhErgYR4zXgD5XWgJB32KoYb4tkdUKUsz1parS5C6TqvNEMqZjA9bGbvTseTw73JrQc4WU5fJR47MHYg3t",
  "key4": "4yD8jUj1mC8tTNMxhvBpMzG6WVNCr1ETLeDPJNVcHoUmb4y8KVRezXmQT7HSJ12fWt5HYT4298KkTY4G5q55oTFF",
  "key5": "4Gd2Js165KEJv8c8Lt74bfxyNrFrYzHsXndR9qvAgKtHprFMVSAfsXtNGz76XTuvmC725VAWHbSV5vW39Etuh8gT",
  "key6": "5g9snnQZkpuQauZhoKxHdBMr6exH8XZmt1HuE9Mott8tQdcVMdhQxft5EPZtRToaVDuE3jYYfSGiU2Ah2Sa3k6gP",
  "key7": "56VGwNgLEv6v5bcAKo568TPUMDxjokmmChihoPtQJfmQy8B2fW9Xrx2jU1ewgn33gVTyiD5EDyr5uqUAZNeGAmur",
  "key8": "5kVtQYZeRcof7tG6zY1cmuxJTv832DyBJAZ7hCJTEuAbNH9Hs3tNwVzXGnCgRE2UhQfdawp8bWNrqS55MqmbGDU2",
  "key9": "4wcAZ7dUVhTKakTW12SEsT6XBETEfoxjm3omKoGMat2HkDaK9vBYJAQYXF2YvBtj3H3k89qEbLBC1AxiX7nkXt2h",
  "key10": "2jPy9ck44U6XDyWydEZb33UuF4mUiboqku71sEzR1Y129MB8CXDCoYxv1dxSY8DTV2Sid2DGitcxEGznH1nwC1ju",
  "key11": "5ve9yUe9dkQF1a4cnNDV8LT5CEu6W79c7QPw3aYFjoSWQZYQKdLadie5JHwmJzxFumjGxywSg2eEtwxDigZdWA9J",
  "key12": "5UExb8rirKnscXG9RSXCZ9gRLPMxyAofWa6B1CL9H4cMkuZPVcYeubuzVLpMboHYKnt9Lmy3MnukyuqkjGb9WRB",
  "key13": "K1bNk1QQRsVsyXDaA2b89RT7BrSqiouMajbTobuBov7MXTgZmCE2hxoC4KbmUeQJufCJyz1qK9yyQ9vs5MusCe7",
  "key14": "2oFFgF4cYgc4GP99EHCPm2HSMUFCWjo6avP5ZcUtfmRgMckX1EFVmw4WY3CgeygE9xk9dQbetzR1pUZk8F2JvDUe",
  "key15": "3n7DFhL77DyzsWSN3B3xL5deiuWma2rLnTBQeBX87F5KV2zEg6T2EgnXcGcM1jcj4YHecgahaP8Jfn6qYBtK7dWK",
  "key16": "2d2PPpKdNZnfUS4peB1PXc7mH8szECU1L8z4WkuEac3ewZ9ytkifjcccmLfrNBNCH7BFbZv38hek6BhcpQdcX4yc",
  "key17": "3aCNtDkNgnjN5gZ36g4NRKhwyDSMNYPYFfrv1EQHU3iYgNqDBmd3ZpdPpfq7pn32LUpyi3ZMRaj6TvCNrZoLNyCF",
  "key18": "46PphmUcLojxtU9M2XT6CaUWSU25gN8oM9CHTCEyQc8qe7niLxQJhAaNgBzMeyJKzU18oKfBAxiPkuz7KZxgmsgs",
  "key19": "5HU6P15rJtczUHPWzYTJ2T662PwSbaQmHLHDZDQwsAY6pDgUQFsXv6zNfwKQji6YExs4AKgvA4EogRobu8HCn5PK",
  "key20": "5kqmqbrVeVQ5RWrGkhE6HXHsTbWTy6NujLgS9Ap7SRXoof67Xe4HqnAtmgiWKKbCCndNwkkNqinNyjYkDyCELy73",
  "key21": "yXDs9fo9YFSwzWav3X5vmR6vXEeuyhgSpBc8rKNerE6MGWvEycSXaD6zc5LY9n74uWkYBdNtTgkzKbxHgvTeSAH",
  "key22": "3Mfy8LBU84M3N5mKXbyaTTyrwqqMi6QVvTXJoYgKM5Yz2Mpf2rBksqtCakhN7bf53WvVXfGVX33xC4U2tUk3LwiY",
  "key23": "ZTiUDsSyB7yL7xA1JihDTAVPJDRzLXbD6zKoycwNH3ub4zB8RL2tnxu4fZUN7qukHJvbZ3arVGzEGQ2hSiKydcV",
  "key24": "4akABP7WFn3eJ2hUpwT9jZWPRpwhAEdStUc1ZNzZdm61vb2D6TZeVHbAxUQFM4CEHjzMGFBTZEUE2uAqT1Ph9Tr",
  "key25": "66f574QAJZHuwXDCyaBcHSqtB5PfCCM8ZTXWRzD7WhSC1NL7mT7QRnHthAwftFtH5JxXewnK6fzM4roZguuQQCGa",
  "key26": "3vQ91eCfvEwXDmabco7yVSYMBKsiuay7Kg9fmZhghsQXd1u13UowbEpUBKdEVgYFBtsYrFdqTnQrMDq2J6ojyk4b",
  "key27": "t8pn9uFhRG5GsTm5QdL5YaXjQJMNixqgnu6EHnk3oLYzQdygZYgg3gCN6PpwQtQM7q8MinAuicCssNcJKETBNXm",
  "key28": "4785uj8SzmLjea6x37qNxeYpy2MgKJF7WCAU9yZTV7S8Jhu5TfEHuxh2YscPrSLbeTKY18B4kidSskqEB6CjDMyo",
  "key29": "61HQfRqhNcNWxebFMRderpVGh6LBwkHYEYXUKnQR5GSqWkbfaR4nEfe9sBJRVFkY7iLo2XMeWr9e8EqsGpzEuecK"
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
