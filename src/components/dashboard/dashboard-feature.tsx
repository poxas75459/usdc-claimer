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
    "3nzdYqDwcxP3QGdamQHr35R41YzijzXv7cH7SMh3u6BUE7FLMnSM99scxPwcwBV8aMFAVJtEMt8Ah63RLSjy4kGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b9y3KMZQNwAwUF7GX7vbZkGMVJCQTENaDjCwNSdmHwHEKjRKvtD1XRUXUsuA6CzK6nqPyG3SNMyeob1aNG4Dnxh",
  "key1": "eAv5Nv31HKRCgDRQ5qAUJkLa4AuShgTrbiHyEWYHTksSiSNttkToDsYs9aMchNhhdRD6SMByXj1wn7p1X2nwx5J",
  "key2": "5izptwKaas4noHw4Q8rRv3s97ESk2SsVhYCU8MEdWyWwYjHvdr7ZDsEaV8qAr138eEbq82rNd6uLSfEyv7noNY6d",
  "key3": "5in7HkUkGf4ggwqbAUgZn3TTKyLqXx2fTx5qPX4DsWSQD343goVwyDQLJDmPpCT2kibQoxr36gRN2BpNeHp6bcRp",
  "key4": "4nKsLzb7X7TgTiqZJdJMZjgAxAPvZ7nQQH8EzdbJLsXCGZQMd4CVtY1gBtvD8Uz9p3iw6ac9LKLQgpNArhxyfbs8",
  "key5": "4oeiu9685sUtKXUgbJLqXZPDuYr5t5EUWBE7WmtFYDXQwj61XfH5e3sGE7sjEehc9DSNfD5H3YF8Mpq7pnbJsMUA",
  "key6": "5T2vSe7hg9gBHoqaRduadZwgysaJHmyzR73NhjRDktS8uAx2JroUEax71G4AaAJrrRb2ioErtHmYxbNfkkxyKU3b",
  "key7": "YwmX7WeJmzBrWSd8WVZM2qn9wUm7N7P4zHrWRPLa9bHyHFLpHMHqwSzXerQi3rohCmVUD26CNiu2VhHDuL3MzjF",
  "key8": "3Jk2omjS4rzmp1eyggkswqjZmze9tWbr5B3UvRRmdLV9fKezCmkkwM1jaJVmGXP6fRfQfvrMFsaBcv6Sgak8mRBs",
  "key9": "5n9tUZCZPKaiq5ieFGLq852gfCYwVFDXiV4WRwxYVWoKN1ow6c9Lg7mNMjuVibjp1H1HjSs3M7BHsdfhYbksL1Ce",
  "key10": "351jRcQ1hUhWbqnSjETi9ef6E5wn56wzFQ8uJz2btBWXm8LdQD1PFdSmLYMvWAq3RpydYfnfvRmW7DZXwC2Mv6ax",
  "key11": "2xxd3C3Rs25rocKTf2M8uQtQuoLp1BmazyJw2X56a5aBFsoLSqZ2My67ck4qjknK3TvquyyY4V9ewKXfYkkRTVUj",
  "key12": "3yn2T9ZPpkUoor3rQ64vsVJtRsWYzcDU9dcerUYKM7BBma4dGa4DDeGxds1UPpwrtDxC7eH6jBo7BvdzrQH4i6ZV",
  "key13": "8kpwfLNffcEnLC3scc8r5j9uPcWoWvM6EnYsw6Kxjr9uBUutSyKcnTP4qoKfxunvXoSRw7nqvnf3CwPoyTSVA2N",
  "key14": "2xmXBazQkjsKEczSXxHR3pFZm3yFN6S8bUUU61R8kECjro7W5zy9yHxFgXucHC8nEybUeWSoQNkCiqwQkqiNQRrA",
  "key15": "2XdrHCWbTAEnHN8UEvWAWKQddprriMeWRAXjk2pRDCxbm7W4wwwoWgbvAU6dX33stuBovuVbsfn1WLfLUKJmPiBW",
  "key16": "4P4bhtwK3fBZYdYETygwT32ztmok15nf9tFrWVVjEqNSMDBdJouN6LJ3CGk6UKAiSwwFEBLDQBP2Z5p7fBqqgmRQ",
  "key17": "3fBPeUqLPYmBgFu4GTyhP6JmkGUmN8wT347K5hHjckSiKpBV3KKgBThuAst9CjWxzAaoqwqQgJ2QEproXPFtev6B",
  "key18": "cgQRASU9LgytB56AWCaHw7Wv3DxJnBLfN9NzcC2QMBoj1KYt64ePp4RAudjs7WtWQPmS7swDw9CR5DTrXiFpGVu",
  "key19": "37MHsDHvtAc1Dyp85CJdsfjWczwWTWcT6R24wHiezUiNauyWsH2fLEY4TxykSgVLmQHc62LZFaNyTD9KdXGVF7tp",
  "key20": "4pMACwZ6acgs8LuJ9q6DB17JZmA9QvyKbNWQvXtyRfv1aZZ5CM77uBR3eBdvFpwrUp7kiYLjYp6vvACs6afAyKQg",
  "key21": "2HW49PRrJ1XFJg5Q3DJ6bxs2EdQniVcuxSM5qck6k6PCw2VP4MqSSYBtWU3Wm4upnkoNFVJEctBdUyiRjX1uXU7G",
  "key22": "4yGzJXJqVPpnduMD6ojM91kB3WZbWPhCyUebYf3AzzV4TwG4C94PCyJsS67kDvESv7SxdbURdVUUG11k1peue3Yx",
  "key23": "2yCKb5gdtTcHDXPY1vGV5y5qzYfRBqfbhAXVhrcN7pCeSv2CngxgNHXwYLYdEfZyKrx5XF5QwWtckzJAWzfaPTz8",
  "key24": "4fCUing4g7bu54SRpT2Symqx8UxqoLFHZeWYcMzvP43EEkcW9rsXTqzuActSqjxMk8nd9nfYVTweK56aT2VNvK3i",
  "key25": "4WVRkbsavSjgqZytr4nEQm7APXFPTtXXZkN8gvSNFEB7YySXHhYGEpqRQLwSptJaQFprXdxm7FcM6aDF34CgC3D9",
  "key26": "65825oukUyMpjd7ZJcMGMzrZv7AN7vXKN1wa4co4aCbZfyS8bqmAJFJpeKKmSZsTBKwetpJpPiVsFyRJSccWnmgp",
  "key27": "HrjeoJk3pW7n51JTxYkbKJ3D1cLwdaVttXWDUrGAsEtXbaHQvmWjnzZcMQtWC7LrLi8o7XfXmSJi2WaednxEmX7",
  "key28": "28d3SExe53FBK4LzyUXuUSpVHJ6sP1EKZoubUJDN58KxTm78KEU17g5xPNAqWNnWbRLPFmHCDZpMs55nrMqnokFG",
  "key29": "5xne9ZzeQj1ZJakYgvGFkLrEJAUgXpeo4kmmhBS7ZMwMs3kedeXgFKRUyaD6BAAiyo3rKiz9tE5VEDqG1Fowa3ru",
  "key30": "3QJSnc3a9HzvzrST1B6nyAbVvAN7dXrTN3ZehxVk85h2Uw9Z2ZYbaVc9cUbDFND5VzwHX6eXkBixruaFC7tUVx4d",
  "key31": "xsUR7JKYqFnJ3Qv8ju8bvaRYrkJm7dEreAydRb5LP8dAnQ1P5LrKpDBHx3cZxk1YnQtz9DtNZ6A5djS7cn6m1nz",
  "key32": "58i3n8WScuri9SJc7E7Eh7parM9SEnosHEXDkkm2JpRknRnmusQpcAkDXKaKEkom6d3Cm4d6bj7w4aEWkG8nUtGx",
  "key33": "uzdkJWhZ8BHLRgx6MZxDAjdBpB7YBp1uRmqCp7igB4rpCPqDYxhj5ubcQHhDqyJB2pmPyheKvsKXz3YBmSP2HCH",
  "key34": "3QfPo3ZSv29484rZTL6xoDXkf7dzU8Q4V1TxKZAoNges3xEhq4EieFhABBtjyW3HGwfkF2hWmVVBAcpeGyYArowY",
  "key35": "5JJnedNzLNaqRT1kdtUZ1XfpJgt37P8VovQe69AC97UYEJHGKjHnwmqRmieWZMRzCe3wMUkQpKJf542nKUBbk6xc",
  "key36": "Y7XDLBGkNC7s7adi7SZcHDonw7337A5fxKyngZb63wtgFJuGR96UmLYT7R9MjzysaaS1iYdkCiYf5mFd25NHV6i",
  "key37": "4ppc8Jshb23Z8Z3iF3Bkd3QzRQSQYKANzagorP73rrZT1iKx9ZDi3fbo8AKVSeR94mi3LpKh9kDq6rQpCaD2X4Z6",
  "key38": "2Leo2XaWcbkXUkJQ15d88Nn85U4HtKjBxJEnaUhsLEjyoPtJWXCzV1BN7mUF12HnAbKYHF12ovP8zA3hzFj8Anex",
  "key39": "5Jfp3jA4xJqiJYampX3Wd1GBXCiv8N6avdkUMhhp4Rza6MyjWXR54qindUJchXD5gN3VF6N6DxXrpBkgST3Lg7bL",
  "key40": "4uQPbBU8DJeTapzdypPvp1QEGrCvAgR7CzQrtNqph5Ckfw3RK4UhRDiH9C91JW7SdcMGN4ymAc3HjhqPCT3E82so",
  "key41": "25suoS8NrbJ29odovMC2rnTjC8RqxJPwCu8tTCKor9VumuSUL5g6ge2K5GzBFrRkcavv74bQW1eY2f8y1UnNHkiq",
  "key42": "3TU1micmMgAzDuGUJ1PH9uWMywLHSYUPa4j4PmFJtSjt8GZ6o1srUQbeXvWjBBsdJgJ3i8TdNkra84WJgiWYr9pJ"
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
