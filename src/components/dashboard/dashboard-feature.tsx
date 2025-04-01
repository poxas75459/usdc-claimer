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
    "5gC3BQZ7UbwGEyRZRPy2UxkCNZmCNqQczagFnmXfuwweLwqyNcYAoKxfpr59pRezN5tHge45t5mF2fpSRxyVAtsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49qM5C9A3HuTjwzkH4KG7dwU7Y5tZjAGDRZQvWpT94ED7ZT46DSSHJat7AsV8rpLnCk23myRcEoTr8oSLuSu4PHY",
  "key1": "3N96zESGCSMjVSSYXUN1D6E3WSKv9JqmXjrgLKwdiHrUJpujYHhUiQ6YWJSbn9mWRymi3BLNHus69BkmXxyA6QJF",
  "key2": "FEsk3arTxZbtP3aPP6FiB6fPKDy7yBqFRhHtdLcPEKMVEjfeLx8QdF8XuY6FxW2KhGV4NyKG33H9GrqhCV6yoSM",
  "key3": "2fBZsnV1bKVPKx1o4zs9zDDfMhBRkb3sNkfNfywP5YEnVFj75V1qnDxawSUSDC9dMQRGXPr1Mpm8tBoFc4DA59pH",
  "key4": "58Y4LjrPidhLsNBNDgwezLz16ETSdXwKP7KzXpUQq6dF4R4F5BVBGsr6cn6gfxjT8xynSbZrSx5fy8XRyq3R1R4i",
  "key5": "2tTLzDFKYzAmgXyirT89DmvzD4YU789sviSUTEPDDK8ojALvqzRaiSApd1VAsqu8UM26KWz3dKaAukz6EZyJHa8F",
  "key6": "548iCbe4wzjvEUJbZ2wM32aBjkxbDFJ4TRPfkt6QSneuMpbgGhcPS4dqE5XP2L3geQaSrsTSdzKgcamsH7DtvTjr",
  "key7": "3d3ucaFsHNv4AD2CRRF1y7zZ9eV9mhsi6nBUA7BwDgmLYJ7vDv7W6KpSKtPk61Mat4dX8g5FR9WDBsoBwvkLpGwP",
  "key8": "BcgbHK3wcoMqm21E8jW8TV9fAc1sgqVDoaWAYvYdBJPZ5c7dGUVWLZxC5wcQGWeV7Hs1HPtVdYJQrzw5ajdd4WR",
  "key9": "5yJDstXegBVikafrCjKCvo5srbdykDw3dJSk9F8jN5etpzbp7tuLjxtjF4x89T86T3z6Jmb4afK1uge3sJNvhjjz",
  "key10": "2ViHYnsKCsXo4pmktR1NsTcxbeL3G3XYY7p6rGwJX2Kc6zqHKgpZd4dvcuuhwWVVpKqhpUNnPkHVkxSHf6i7Naf4",
  "key11": "3bWjE628x7ftm37DSczyaaYm2MEynMidAh7TBptZzCzGRztUATkxbMZr4jFYMvau8NWNxN4EcuTEU6KL1QwBQiKE",
  "key12": "2LTnPesVV9DGxqNzfLCoGNZzt3M4nPBCrPC9AnCAp8NzyFVtYp13sWHFgRvSrkaQrif7MpAHEidavHePKjxrnF7b",
  "key13": "imZvn1YcSQ7R5k6BsSS1xRMGStfdm1udphVyifLXV9iR6SjhVBq7ThFjVDkA9dZoXKm5hZAccRR31aNyZgZKmhY",
  "key14": "3vC5W1QcjHwcats56H8HuWALxrUAnh9c6aeeH5kcZWN2oyXsaypUAH7ZXpW5gwxw9pp8gdHmrbegGR4a3yFVoXLE",
  "key15": "PYU38Pt2KAX13MNvheJxGgLxeaHxVy7L5zLxCWCoxwWeyrS4qDYdY15ZcGwUWQHb4khkfHw7p4SBFvxgxF856Ep",
  "key16": "4xCtf4hZVsVQcEGL6bMR8e8pV2Cx5wREc55v89w6ysd7ASs9VwGvznQjw1DsJSuKgHpkfyimgoQh9ZMNuDEZQPA1",
  "key17": "84dgd11xMxVXYvCHnZTnPu3x5Dut1uAsQZtn5DSrpLmqQRoJx2GGnjCWSLq1rbWVRKP4U3Y3uKT3bxACHo6grqf",
  "key18": "3jZgumW8S7rJsSKB4E3M6JCJtwhHJMn5UTpG4jE5ZCjieGwzrvxgEGFQQDmVueucyx9eV44EyN7DAfmr9jscPNro",
  "key19": "3PH8DybcGY24f4WcXnx44wrmYBErbb4JhMy9aru6421diGYmkAwaD9BYqDD8rGQPdAyFFj4qJuVicQ8828CTuePH",
  "key20": "2UuYHc9j72f8BwDBJMZVuVCwZNsQbhWDDpHHSXJ2DL4994sQmX5nuQjWztbTD9SHKuHZsTnucgoTDSXryiFAMEx1",
  "key21": "3iTqK14kP2tXXXwZhLmTBaf5A4KwXEviTbyyDC19o3W6nNxdwovXBToqz78povNMVGAmu7zuuZNvR4pD8JBb8umE",
  "key22": "63ojjha197CbNRzi9ajgEEC7JmDTnquzDwX7GXfcuu8CoXzj5JACHzQ6aiSTpbdwYgFvsSFPUMs59ZvoaxupG9F5",
  "key23": "2mYMtuDWAtVVUcqw7dRLUoi8xwgn24V4UbP9EAuBqPByFNXEJafsd8N1h6JouJS5MqYQeuyVkDYjoA1qfyQfRMVf",
  "key24": "3gBuPaVzQM393KUiQdbbC7UQ2Y6iY5dnBTnvHUT8Jpx658jjeZCfxSSfGyRxGVKypnJYK6NJE6GFvFHpbCQ29cME",
  "key25": "3bKFSHgJyBKn485zmxMwJwz5xwQqqT1KMfJ29eVswEjGBWYGhjKmv2y7PBcD8wm9jQuo66mcLhNzHugu5cVvLbm7",
  "key26": "3BGHyjmUuQj3Dj2wNa7GQ2moxh5VSyaPLAPHeDa8gAzvYbHWVAjMaefwi1ZbCfCnWgDZKm1PK664XRsk3g2NUP4V",
  "key27": "5d1nHhiE7u5s5hSHaXxzfbxYmDT96pbVVLHUy19C2vrBcK1VtNGMqJS3jHZkAMPY7qaVMZDXeVZohw8dz3mdj58S",
  "key28": "3fs16qKKcjZ7NUgr7MaKrKL8DLzEdYbsuBN9dQ45JNx6JktpqipiypKSNcsVzp6hE6tGmH5t7y3rnqbFtZ2x5JTw",
  "key29": "5duHv432s9CctaCXzow37b1Z86sTt1LrmQwjgdGijXe7W1JuS6fRiSWtUJ6i5yZbJ2wVYL9kPi9g143rhaRTg7es",
  "key30": "NFTDPcgscgkHYPCAnkE7Nssgnu7Mz91KBwuwj1p38RxLxPSbrYwX4xs57Sq8hREXAhv9V8JPEAQHLCpWsCvsmez",
  "key31": "5RboDjjRuQWTB1ycmH3VVFrf7xLgG9SZDksBW6S6FDsYwZSjgkfH5VS6uJbd9uN3KDUjFo59Kh3Jta3GKmfyVuNS",
  "key32": "4crVGFddKBAVmLJDYTUVkmSacRMq2D1mEsPuikqT6cNEVXmE4WjhADKvonFGa1g3kDjMGsNxv6kq5W1agq1NkPBg",
  "key33": "4XMKcJnNdG9eJQuh3J5LpMgFRwbUSPQXP6zw4MfAEFDS75Q9P7sw5D2bJRDykQbCf3N4i34HDmpFL1CRRcnzN6BF",
  "key34": "Sk5zdVErNjMDQfV2Qd9jYf2wACM1D8jrJUHYPjFMY4bQVtYgeMBcHsLhiALt9da5NShQuRVmiaFKVKb8XAeZAQX"
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
