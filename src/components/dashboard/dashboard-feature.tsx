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
    "5GuqERJ2WCo9Z8dBRUQJXaCsyP9Qv6KPwwpkenzcokPEm4b5BSHLPyYpWbWCtQNhJKitgCJHGWfcLucm4SmcQXL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQZr8xiKUAu1rGrxRYeEL14CUFwQ9TQBnZMLdkwyhk6S6jydD9Nq5utWJ1hotuXprdcCcxDTsMHTT7oqXyFAwGU",
  "key1": "2hMVMya1FWDQ6bKdRFaYUWGaGatbgW6NXAznLXR9ubiFfwgjWW6yo4uuy1KpvVt3v9RJEXcsgFp8KEro6THuyUQv",
  "key2": "VLgThyENDCzfkirChHhqhkDK4c7i6gd9pkJEsD6ZFF43NSn1WQmM8aQLZ7NEi8PvyoRawk4QykAjx7E5N6YGWPV",
  "key3": "he1ttc6xkUKR7NaMx5GNEi18qQqWPBAP7sWEEE6nvzxZivhUzn4uQFCxDzKMEy9izF8ZZf8E57DmNvCaYutqamq",
  "key4": "casdjy3SV3CuiwKpCmdZRqXU8fTUjhtjozExzvneBFtovAKRN4jN6Tq18tCWBa72WyRygT4zKt2ft2vco7Uh5jS",
  "key5": "2p9eY5DLzPaZNHkZazMthJUSUj87Es8z1EmjRgJHTQ2j2iebCg5BiA2zDJaUMHUotz22RFU8xvjRBRmrGLJDERXH",
  "key6": "668YuxRcvNHy1R6s9jhnRtAmbTu2KqRY4DtwgBDxsYF8nwBHsy97BGArZY8wRu8ZNxQR694Lge7CV5Z6i9y4WNxm",
  "key7": "38hYdm56kpDx9h1JUqQHbWMKp3niRsiKFmvJutddiw9cJDWxcTyoa53aA7m9gxcqbf8sm8wbeZvCMMeGPqMd5tKK",
  "key8": "dJ6Nx821gcYo3JVBXQTLMzKcJCc8u1cmHXHrgS3AJBopJenPp4pLMQvF7L7W9m85zAyYNEp2Aes2eEY5vfm7ctE",
  "key9": "5x76A42cmLAf581CzGcq8niAs6oBKEt8dszpJyuBzaHiwfcnT93GW4JF4F8tMgHZyTVV5eT235MMg5Qz6V8oQ2N",
  "key10": "5ccGHRpzUTm3NE6jN7fK8KCCt6fEruEpRXMQ2nnLDGyC7tgrYGYnb8fo7cAA2XPV7wY1uKGmxQ3CA9YML8a1rZGG",
  "key11": "45TcUnkeFfrMnST3L5eRAwpGFiLjYUeQxovgVjpLEtpm5uKxiH6D3qpijMsRrd5Mun6VxSPmx6scDy8WNWiqSWmu",
  "key12": "MQhbqitR7HjrzcYxKDjG8QbjgGH5bJ77iYWzqZoAwLB73Px18VjtqJEbRfCkjjFBWQcx7LWyc2Rb4fPiYEBgmmL",
  "key13": "27nHkFbEE7hSdnKCrYejEnebFZeGEkTMXBSjk4VNRA1xYemMjooPbEQE1ijmkcFLbcYNcq8CQYbF1C5JmvZ39w6A",
  "key14": "3AwfufdwEtRDSTFzmXd33vi6yfnkDZtKeQD6nTHxQGUdfbuiEo2qwhyifJfDiarcg8UducD581QTHpfj9BQZsPfb",
  "key15": "3kTiLoejToJPfQxxsRAuT3FNoX4bFZgPq3YKGyQzdv7pRPDTqCri8nzTyWqmqhEkJAWD24xUKXjcFgxwmaSBuuPH",
  "key16": "vDSMrCPPgWX3tCCk68x74BuCWj1RRENgepWwdFG7GNh5pYsEvCRP1sxLys1MiA5ikswsYtdYsNVZ6MmMAkwaMyn",
  "key17": "2xjtSV2t81FZSFeRQiBo5Cu7UGijnsrrx9xKgJLHGm666E93aWFHeQbhX5uhnc74Ms88JCXmKH6f6H2S4ZYZ6mx3",
  "key18": "5Naj2bDW6rd9TVfUC9QKCiNv75Ey3QCWV6v1gcmikDyfrGQ93P1f65F6JcZ1199dXCrMndLid2M2TWyVM92nAyT",
  "key19": "51NibccmCXfEwgtsGtMJqk8nyeeVKsvNAukwzo3XuRxXhVDDytSxLorYHEnAHzUncj582n2sS1urBR7ojN8it5P1",
  "key20": "2G9NHkNFbtW7zdANY1Z7ReVDGvksSssVe2z3pRtJ77CyBetLVb9GQMVAU3rR7aU7TPuX82rY5RvkJYCxeTJDYdK7",
  "key21": "DEqAGN3KVNmn9n8yh4AjDtC3q2jE7NRkFcVvZsW8V3FQFejk8kqefPe9yVUAW27spPXJmrCN6q8jDJcqwT51Vuq",
  "key22": "3FRumauuPSJ86jrC3uX1HfkQn7XcuU1epgaduSjiuoQaeGLu8DSNw6VeYD235jt7vhztzJo8ApWqCeg3fosF2QRU",
  "key23": "2tGJhXCsTKQa5bJszYQgq9qq3XR79z5UJMHAt3ZmxEPefwkVFrsa4htmtVuiKduYYT1zEM1oQZwTXRn4FtcfXyYy",
  "key24": "2aqvZZiLjCzJzAv36RWJZ5YhSWbMau6dpGzAtcga9djdto5yXhpLfiTJNQA79FqZ6BZ4PqgELWH7JEJbRn1xzr98",
  "key25": "3sHkyuJrVWbjydVhbTJd7DzZM57hKw4hx5iicAHWpnxsr4v4GEF9JgToo6mF9Zoaos49UWvshtkgph7Bk4QKVyfb",
  "key26": "63qNX83w9xRRmybXVYRwoEmhqb3UWiZgKa2AHKthtYirknSjVwQDRvsB7LKiC6HjiMiUn7AxVKoQspqP8b2XUSoU",
  "key27": "4eXV5DMZweBt5mFLfkB72hcpKmCz9fCVCHLDHD1P3kxDfNJvweV86KNApWi1xhdcxq5KbRaUq51gqTC8G3WaaZmk",
  "key28": "4HAmAKtMkBoLDEqkw7Ki5jaXFruriWrW5XMuFyqrDqrzE6G9K1FKSpRVYTXqMEz9Ey6biNEjC5PKpizf62QCiRet",
  "key29": "3YCV8z7v3xY5Q25x6otN1ru92gzCXGVyvAxJ1kinBhPBvgeRPQMhqDt929Wc1q9xvdoADJctmfYuzS66ydgwxSvw"
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
