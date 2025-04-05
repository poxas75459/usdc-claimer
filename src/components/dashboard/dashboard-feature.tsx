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
    "3SBJWF6TDbhyxVV3r6rnkjPtLT6QucjPoAHAbsmv8SvUjHgNLWcfwsQtAjJ6okf3CiiLZDA7AyQZg5y3dJhqbxiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f3kMefbmDi2Na1c2SB6VUqxNs9MYrqsq67s6JCHJgX7EKrZBqzPWLnB7oYzf8jEJTYPZyX9T4DA7MGYTGQBsGL2",
  "key1": "2hhTKh7Yb4FwZku1f5xRSHLSXvpbAmSXYfVHyqDaaAVpS8EbHwvELHNQQ6LbTqxDyQCaErJRiTEt5xudCQsV8Ykb",
  "key2": "2cgHV3AMtRGUYM6uaK1mKWug4uMKnYvqz8jkqozw6FVukm6CQ4QCk2YX6CrAz3QthoTQqrawQSPx19iq5AZwaQ7M",
  "key3": "B8g57JoVvtzq2BvYMdT5JgDXULwNDgphWhky8sGxbNQsyNFYwn89PJHSKtxX9cp4kG31Zf4TWYJMnYhHHhwVQWs",
  "key4": "5org48cVe8uFXor1mw1cZ2ywUk88bzoHJeNhWS5QvTTd8SbhhcYevtCbVRLH24JZnEpR8ZP97LoTPyzy1PFgrPjE",
  "key5": "ygbRceQDbgJ6w2KSbcRW89AKYHarB4DeJijMfVWmaB2Q6ZaQHDhANwsCKoqSuD61DaVW8VV9pS6JdnWVxbzBx9z",
  "key6": "4bigeHgW9AEHmxPVKuy4nxRW5zrydRLkA8qhDkPk1EeXekb5tmnZr3zar5n57JuhTcbbL2yUJk3qCiVfUMfvpEWT",
  "key7": "4ytVV5N4unVuLXCRqarJ3HhNLvevQzV8zGVj2mkJMFNDX564Jydf2uEzjHBdbtQbktTmosguLWUsunPL5jNBhx5n",
  "key8": "2z8N1tkitinxTHSQtpTvWsvLCZeoazi4VH1s3bJSMRL3AZMJbrhjbHXksY8TXj2n9nyvMyfrCQD4PPSah3FVhmtp",
  "key9": "5xRk7nwPXXt7DDJgDmRv1igEon4DDbVKVDh7RiHJjFXZGd2RzP5CmhXR1LcpiFNZKWnmVxRzajER7GuFSV2v8csJ",
  "key10": "ppFsiFSokYYVHUE583gpnEya9LxqmiJqduoaYPa215HrvbgSNKsCX63Cr2F67iMqryLbY62tZx3xBkiGV2EkNhw",
  "key11": "48oC15mE3WKuSHaod8Z5iSQpXaDhcXRVySUhpncBauCUmUkqDGqTu8SoRFC14aBm76UTSes5WKwzKZVEh3dHZ91X",
  "key12": "4dVLMZMxCGtgHZvTiV8CdnNznB5fAoyebB7jucSWw4VWZkMGoAownVMcWsNxDYarbqCRvsRtQMzNQ6z6QxJ1Mipn",
  "key13": "4VR2cd1UKC2tZt1n3nzGsTD1rQ3huqofXM2B94NVTS2HvJrac4RFwSGyyDcHESUAPs9PGGRrKz3N4QmGcHo9GKv3",
  "key14": "3AXw5z41LJf5vobRgP9k8gXLTHf9suCxEZgJsifEXcyZ7sybeo9KZnGpca5LehZxAe9Kx9GdsarEM2TuSNMBSJYA",
  "key15": "2tz8PrEvdqVt5t5SVZtJDTa5n5pd32Q7saoyKL6KzSYtGtrfsihV7xpSLRAZCopeLvFy5sV7y4woNLzmhj4Xoyxs",
  "key16": "sW4WMeY2xCT97nUvpKEMBtmvRNQ4APXkf5EE5LYtZmhL7hcBN8YxkcEM2Xx6SLrW4btNMjQfatBW67xRTCAPb91",
  "key17": "5XRymRKGrXwgeKedE3sMNtQrJjWnuNjMmvKy9c42jzePcU1RjMnxMcxnQKSG1QYRBLPN5Qd8rXe7t7Y7czUwb9HM",
  "key18": "45xGbsFEBKxMivEPNsmCyys381gXHXzQgwqDNBdoPZfEjgRUfnW9MPVNjvtGHwMJah52wdCnqCKwETAHQij7vtyf",
  "key19": "348P8vLxJ1kMCeybeGwzgJWPAMD1Z3KLkbr8QUeCdWuG9xiWNbjbDseVsFd5grxqTy1tP3B9vANQ5PT7sh3HDxT4",
  "key20": "reQidcZZNowPAeU6zacGRwbCoxt2ZSwba8gbg2wMdWrk2epzjjQb9ecYbJBq63TFMrjKYjbvFoNR198U6p5DeqE",
  "key21": "GgN4R69gQaYimxrArV9dRQHxSc2h4AouBF8nhfd9Nn7VwFpvbctv4uyE9gQfVtP7Ht32DzgKYhpzHdX9nrqKveZ",
  "key22": "2BjeFjgRcdbJiNozza4MeskD6WdEpTsVPVVCi1oMeeuE1LaM8xDMraWSMX7uL55Kj2FUAnHwx84dUhpaLwdyHqR",
  "key23": "268BuGhHKfe9Z5kt22Za4n33xGiuSDwwj74eRXvVhax6sCMm41MA2Sf3P5P9PBcGPDn1QC1iZGxMpXvjMK29LAvm",
  "key24": "4nXNxhDZetpHtrNeQe1iBAqvjVWi4s8sdxoE5JGV2gLuLrXnzULVMSMn51NqwnZFmGUU4gEXakxkeU5kdToi7K8n",
  "key25": "5GVc2hXVfHv6Vsdpzda9RjpqWimQQpqD6Gqk3yWEeYp4mB8CTN2RmcwNgKtctTAtaJ85Wm2gJxCGA1zvHJah9UjU",
  "key26": "k1e8v1Qc5iSyDsuFo9RyAyHHbaDUTktfsUvHLjoS5r1Jdurmu8KzAQhAn4vQyAMuYxUhsU3mMQk66xnG5sfZw2y",
  "key27": "4t1BggyFNregLFhtRNTUF3sSGM5pENvoqDycGqoff3LmGCSKzafkYA9GUR2TgBZpJgKwpZCjUDCgUrxPYqEW8WVF",
  "key28": "3umGpgSws7QkZKh3VM2APGtbLaMSsEb6XCWL2iy6pJeRKVkW8ZNTQEwiXjw8gjf7yEXhLaezJM44FEDGjYabgcKN",
  "key29": "LptEXiUEVkgvmxrCF8Wgfn1ACzFZrUuWXomc1wGuNKAYwStrDvJ4S5gjr7ULpQY2yiMewAhieogwJVmP8QF4Y8G",
  "key30": "5wUigsEuicixNTZ4uSXz2f42ZXEQDjkkW4m4zs4RV5ZBcY6qHWtfoyYtdchLU4fdJoFuETkfNRJX4HYUQwo37ezS",
  "key31": "4Q6wRFPvJ7tjQPSLxQRfAGccvL145UhcgjMqjkH94kCthQSioCmz7mZkg1Yh6EJpnu8dQ2UnoCqoXHCDcdmk5M9C",
  "key32": "1nNbSEBhdg7dgDfV4x4ySUSzZxv5n5cyD8pYtx8QSRDj7wLbmFLhL5A4w2ewMeVYZiDFdqfVmJ3UVCBHCJTxakF",
  "key33": "2V5w3xLakH4iqB1XpL1XiBeH28aCr1JSkMgF5k3Lo8oEkVk1jeQkPZ2b6uKtpHte2xSv2Vh1XZh2aEu314yJnz9g",
  "key34": "5BinvLq7Z9SjZumCfK8ixq31CtCFqY3wGWc2YQoTCRDo4nbu8z9pDFaKffB1o6ud8KgLq3ZmickKQ9CjhHnJ971B",
  "key35": "635ktk2gys5a5PCRByQRvVTrUxJtARtjp5NEMtG8GvuXAkSHyyKxJE32LVLKNfo5Af7po88SejExScfQ9LyTYu2S",
  "key36": "3ydSEfrF6ou1Jt9rVkgvLpkMLPc5MxFfK8EiQSiNYXev8NajfEkwkiuoPbHbGKg4jZzWBxkkfk3a8yc1Fa2b6RkW",
  "key37": "2yQ71zmH75cgwBcMRLcNatRE3PSUcCtPPXWUepF266AK5yQjvikMh1RRctEBZLSHFTBjjgaoH8tj1UeMv2AwgigM",
  "key38": "25CSSkMZzckFskLW2VzSxnNNa1Dh2xauaLd2ADjBR16R4cXJ6ZtYh1xDEs92znGZ16mraUWeVSz1N7GjRg3k2KhA",
  "key39": "62yUmJEmz3Quga4RXGN5TaQEBsz8Rmaka5hBxZUjav9fMBLNx6ZRWpESZqgvaDkqcrG6gnSusZ5qjvXCf5vuvphT",
  "key40": "2RMNuzZ2GbiSJ6svH4hgiDfsBDV43eZJiek5LU3Dgj1yWhRQa63QcMAB2Xfz1s8bUtMjoV9YgePXcy3k1aocwu6o",
  "key41": "55J7DUrfPNWHDLwd5D9VDYMEszFZKr7cR4TVsqfWk5AcRwyjxXyETwmYe636YVuF3vqaHeW75meqMSYwXJNf6DP3",
  "key42": "337zjbAUXUkV5K76XnhPnGM2wzjuBfBiAHUiGWCA9tGnJqGTiL1VFbE7C15ySa4wDwL5vYqt5sadvF82ciYmtv5y",
  "key43": "4nhn6BMvyUz6kVWYpazJThqppm18YNTQNsqckhfZe7q7zUacKWcKuHaiPG1L4DMjYatUVPHAErr4GgkLy2us5Vpm"
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
