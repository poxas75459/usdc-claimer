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
    "LZvQetRkY86zSoFnZLdSUk95ZvAUatKxU8dfFvewvjn59Ga6xL73uatp8Bu4xdS4LTGc2yrugmPi9SDjEp3syxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXSWJhJbBje1thvW1NnLmYez4mRhe7eH6TnAQApmrQqMLd6npvon4Y2aWjuLvqjwxRvAR9J83RoFH8LzQ8AUfoP",
  "key1": "2vYFJS8rXCdANpwjzBr3sbGACEZazT17S8QBm13FbmX5K15sJaJQgKqquG1fEtQRJAjfW8hJdKYMXQMRuYv23VMF",
  "key2": "3doek75zFtUfbJoGcP89TaUC38T2TovdBeMyhs9rcGqUCH2JopdwhiNBqHdk8TC9W4RdADbAUbTw8BiV7rWM98sr",
  "key3": "3r4JaxCVaqPKtLBo9721k5yLMwhpjHTjpja4qGR4j6St1JUVMx23faVockRxQUMiYuCvQD7MiTkr7WdZQek2vLUG",
  "key4": "37Hs3dBtQHJB1f4P5pDcNCzWc5FXrJSQRuhmj4fMJH26AMec1EhH8bHJVNuhPX28tmbUoch9eXdDdVr8xNoaHDJD",
  "key5": "4CaZJEmMyMDB9niEVAJmV8BPyKMHVGy1FUDrFiLrRfUYfWbRC3qPp9Q2PgQBBte15kfHMVmrGziaMukThxPFBoY2",
  "key6": "5k2C2ZtUAJMgTgipUWqEMg1FouuDCBCHqJzJu8wNeowkykdHq9sMeh72UiqG3RWVbjs3HAHkM5AjUtcfZgsPwyUR",
  "key7": "4JfgammSPSK7WkgPm31GaibhPTRQ6dXSx65tT4z6B5fjYsPbeGVE5rwQyUF4qFG6GR9imqpdjPgcxzMQT618e9os",
  "key8": "2f8Jopy6BKi8B4XxK8yEQdG9AHAozgBbvqGuhVjpX1GGdKN55g3mYZ6e41gRGBULJfhtFzXhdS4vYBKAE58hdRm5",
  "key9": "4SgZei6LBrxNigF27zDiQkV6EkDwgfo86cq8ozj7Zfpi3KpFGvrBoCTfTPDd1xghs2BtB6RnrJHzrC28ZYuYopJh",
  "key10": "2TjXxg65ctq2tbiXbY8tKCAYW65XFGLNkFwKx5s1zxq9m2oLSf7n1HdPQPPqtJyhLBVLUBMwKW7eGJpnDqzcogKC",
  "key11": "4L6UdKtQbHTRmy5pDjLfvwVDmzqMN8nh1JDK3rVxTNK9ERhciUEgvqS3pcCKZsnhoumEP9dz3ga37aEWii3qQWnG",
  "key12": "QAkrdvJLFTkR9eYSHFaPKftSMenJqoruihmz9BXdXJ4P4f8zxjGaYG5FgxoaahfyR4hhncy7ukjyCbw4Th9mDLf",
  "key13": "3LqU5toeoNxYAQWCX8FPvtdjjeQVtDsXUzaxKeFZuNPj84NxRzSYTWcxpdr6D47Gmi8NmqM8bG4wBx9p7R7xDQ7e",
  "key14": "4LUL33tYt9Uv5KQgyWt9SjFLnnGVwcBZmkH1kbJcgCRFPnKxkZ1XAtZMZUyHoytyQjcvPAD7zrJGFwF2r8bx8H6y",
  "key15": "2cUD2o8jFSWNRcjwzgJjPMva9daoLEzfLZ55ycwiHb2WdHvcVcS3RoRFkP6EWBz9Q8eHFqkqHgMhSkhydECx7ze2",
  "key16": "2zvaCskbrPSBrMdJraKnDuMyVNsv4iZW9aciEgq5C2VhRxMZALHDxuwQsvAk6bS3Cedx8Lj8ss6TCvYGpixfZmyg",
  "key17": "35QcW8jQHqmRt5LDw5DnGraYJ7nX7mPGV8fDciN9BsJyZwmxEj7kv3owmFe1VyVn38xR9MGxL8Tvfj4VxaYqGsrQ",
  "key18": "9JSZkaMCUFuWPCsyF71fEdtAxoqcMGvmnb6d6XWQia2BQWE94gXn81sdXFyTVq3WWXqLhYw1k9FXhWa4xtMy8fx",
  "key19": "2ZuYutAsVDjtw83TSXU8pgD8MNY28gCVzTkhXb42HQRcUk97L6MujGdC2CyFvbWyiYUoLQhjXWBerMLWw2nQBcCX",
  "key20": "66F3B7htTHvq6hQDj18aJqerUzgj1WAjoux1aKeszJxt6AvxxnwX4b8LMhFYLXUQ64C8gwP2tfhpKgcxyrP37uWS",
  "key21": "zqWjrFF82a5QF3y7VY1TmvXztCHHdoVjgyKUYj4jjf9occCwEffpJhMruQk6Knx1YVHgYtAhxjY1YrmMvqe31JT",
  "key22": "2vmCinWEaQdtu4KgQm7xfVcqAdLcJY9Jojoq9FteCddxSe1D1P9WG468cxAyaF6n1N949DxUEmyiuoxSJtBChsVN",
  "key23": "2ehFYyUar9BaoS7CpozPFxJEYzLqEhSbyAhZfu38Z4RbqJ6jRFNrgouNdpiBisW6Ca4sz969j2SHLHJvmQmZn7e7",
  "key24": "4ZgUpmHCLdvsxqwqZuj5rKWbBha1B6BWUuaUQwNLLTt5fEsX2Z6MTJBSizhki3BYg6YYzX4hcq8Pj9dJ7NtpViQU",
  "key25": "2WMJVJ5DAUAXV1J3Za3vmaVrvyjw4PM11Sb5vGzsw4EtUtjf11Xke1iUfJMEHgYYokruzZ1sBDE2N5HDgDZCSSPz",
  "key26": "5NHZd4PSg6NAgYWEqdHcZy2NyN5xX4DchazQxBgPPUvGhUvMxF8PEVfFxYehaqEcdMPhpkvvJHgXn9YEWJ7xRpoz",
  "key27": "4qCCwSHCQ9N29FyJUnL1d8pFGCncA7pF1yQA6iCQeqT1aLgNtSyQoGMtNyrYoEtirXTBGGwT3kMRJL7hrFbNUZNn",
  "key28": "2duhQvKgrqcpTDKKqBSFgtK1i4M8XvoXPwwM5BzqhSmyddpmj6fFxe6FBENdW32Zo7k6ZFtgS8CUMEUdPVVjaCHf",
  "key29": "46sC5chrsymDDi2RfXpNSNqzHxJS4fFhQS3chmKdFkfV4eRgYXAQNyu1DEjXeWx9CA3Vbzik3uA4Rbkz27jyHzc3",
  "key30": "5oeg213wuryQszhytwFVmMrULMqwYGZop9z5knajAtHrubPupUuCD46CQXgKa4VKv1kXJeipA5wJUwVXBGAFw6xh",
  "key31": "5NrFzmMWoJUeimQBP1hZFjHx2JESo15u1dBCrYy4F1pNCh7dPmMnnrmsyB1fmExvgDEUNqNdey1qHYLaeraHbZL2",
  "key32": "4JeMSFiy5xTSQWKSkmpAh7d8n6ahHSgFHRyobYj4u5WxgDuSk89w7gCArnoymjiBLxzSjufwaxaFeDQTBbvzha8Y",
  "key33": "2eV5CJLj9xzWZiz9yNuvGp1UVPUyjTDgcoqhsG5a2XEeEhBSvgQbDdLkLuRCrKQem3g6dVRt55xVeLvwbNdYxgkh",
  "key34": "5sbBvk7NPPDkgK1BF8vSZnXc49Heq7yN4wPE79vJqH74e1RPpzNfHmL8fnVkvFmjxpJwicrgC6PNFtEowpyda3iM",
  "key35": "5EQGMttMJmGYziwJhKUHFQA3GNuPyGKDJXxkRxWvaiUwMRJ6p3dpfuSMhHcoFnPvUmyGH3pKbTg48pEXmP29vKVc",
  "key36": "3HEA4gAURkyVqvkGu8KdGsm3XR1tukGp2kfHEeFHVwYWpZEDc2DDzTGknGcfvTqruHxu2S7fH9FYuu3bJBXNuwBc",
  "key37": "25obxM4shX1r4VUb3sDuVsqSKHM3inm9ura74duiwupMeKFv9mWVDPcR3TfE8rmziqcrN3rb2crbfFcKGzLd76tx",
  "key38": "2ZJUmoz2mwn7aEA7EiJ8FD4j41tyKLoj4gUYYgzfqbXituqZxT5ERVqPL1LThkXT4shsjtdB8f5PgpdZ4rWaeoEY",
  "key39": "5wnwVHeHGwmHU6Y5rdnh8yrG1GPRjKhjr2GdNZfbXcVayTyTeYncobX72WVhirweZ8TV2a4TF91PFPoTLJX166nr",
  "key40": "4JWDgaqiceaxpXGJfJeaHGxFwdFGgkFukDJx13rxs3PNYcgeogHCcnmQk85PriQzhP2gPmLBgXX7jz22NoD81HGL",
  "key41": "5e4LSp5hdrJ7bS3c2EoHLeMTaxyYhbfu51D14v4c1DxcanAuA9yKViX2ut7n9bmLDewY8yo63BDzb3ub2hf9d9B4",
  "key42": "q5MuMmfaxQB6HUeUMSWwGPgaU2fYPqz6ijK6TNxBgemjmoVdqSPj9wdGeAsCUR9Vy9Q6fYihKo6HoNB92DunhuZ",
  "key43": "5vc2nV7xqnun4r7FsCGiPvaaPtEo1cCKXa96rcEusNSBMCmoa7WXwR8bbZG3e1ZZgjqDE1M3xBmyuDa2BgFriD6b",
  "key44": "3Fts1PAobZeaVYnc42Tu9e3XduEs8sm92cWBfsrx3TRT7RgNqsW22yn26YEP9zYd9wPWfTuQqZmLbtqBr1QKGd8P"
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
