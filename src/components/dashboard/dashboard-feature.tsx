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
    "4XRNhdAbrPd3WkjSj63AzH31cNAFFp7cozWuiXtos96AgrjojYrX5unn7FigTtDiRdMQk1LAbcm1oMnm1y8yMcpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AC8JU8VZG6V6BQm9FhSorMHytMpM3kJBNRmK7UeXJwEGu1W9HcV8hdS2gGZidzLrwCFypfRMFCHFzW5XTmPr9Ei",
  "key1": "4S5UXNLwAszF8uzYwB5EvXjt9hSbqgnE52mYWZuL88BLf8WP7VYPzQv9gTxMa3Tmj5VqrhuQxwDwntSfXSBobZN8",
  "key2": "4YvjvgsToM8PxAAFPQZzv5sMBMKp1CJ6yBpBpYGyR55mW5zDMn13B8PRhKsSkAuXKL5cgW1biYR52dkyMr2aQ2oZ",
  "key3": "5zEmRP9ZS8VnMJ8SmiGHyKx1AiXid9F32vH4g9QUswGoSUhXeuz46mAcBP69UkuNGHqrE8jt3Bk1bMrMkVGSy3uX",
  "key4": "5XgV3tsQGDXuX5Lqi4AzWEeCKpv7UrxMr9EELTRhfyfrW1raWqNj9uPUByH41wADrc7FBjEnrNn1d99bxGnRfmTi",
  "key5": "5ktjyo7PdWBj1TeKdB6hamjHiXGPuPhzTUzT9cKC1uYKJygYgvfTZQZW4Nf29vVtqdbg9vQnxVUM1Prgrf4oH5nj",
  "key6": "4xRcL1Eauzr3D4EyizPpGwCPfS4j3m3KiQuGfzzPFprcnJpgbPwFeyJ1QcQGpks9PvEWqunYMmomRVjQHCRg8n47",
  "key7": "3tx9gF91QAD39GnBi3Ns6fAwRscQXoqENmtDGL2CxKsgEx5uMyAfPw7aM7CXG3WKQ8kZ8ypEPC7cd5XtFKyNX75a",
  "key8": "2pDKDxJ2YJySeuJN7RcFe3W7TZz4oh4z8YVF6LCm7prRa5pZcwagC1haz1b2VQtAnY1WyFd3AaXEHzTcdLf6QSXE",
  "key9": "r9dVMZxtiVZW9PnSuHvfU7BuJhPMRm9kH5Mckt1qoamnaBkkgwwYUjpHRsmN96wEJoEVhYFhkY11Ratzv7fFCg4",
  "key10": "3bdoATAgLDhaWKyirZfLHnqyBQW7QMQXSTPb6Gc1YzDJMUPRcV5NNmUmSDdbUPdcACBVVUFWCNej7o3qQWBfixn9",
  "key11": "4UQM2ksvkjyanNzPM7yNd19Qah37hFPPAL1aAWB76hGpArbVsef3emANzNNma2bqYsC5VE3Hdyog6RNSBdcgQHzb",
  "key12": "gYQLTeRv6oCZ81z6SLfGqn3qduSSYNudECh5kKJDHacVKGPFU4TsrvAUjmEzkgT5MQRnVuNnPoGYhaKcArDUPMw",
  "key13": "343AxwogzMjAWXMzRPw4kvUd6nUcY5rGwAVY58Pv5F6ndarvfanhPU5FMWWp6StdWfAxWh5Bw8xcSAAhf2CzR1ix",
  "key14": "4ZLPkvLYERNHvew8piKciJigt3oKRuTa1EfXptdn3oGCy2zdsQUrCqLU5quH7EhYC9VSVGR3pVVrmXdkNJrQys2e",
  "key15": "3MHeFmrG81AWY7EKhFhnBe8DoztdrhKEvXcAgwiNcs9bMmLGUUYxQrBxUACVLHXawtjUDohFjBpzdoeX5VQx4CGu",
  "key16": "5UXabaDzeVgPdKfHj4aiGWTgwpCymHussfHYz3Fo36XdZ1v28uDTFF56TwaacKNVbEhdi8PRMwV8fLi1JSnFgeh3",
  "key17": "5oQi2Z6RybqK5ZJS5D6Kr5ad9GYqpEfhiSYWRnnQxkF67yLrxwPqECbLsURCKvbcfwpZSnJd3WgQsdrbcrSnSAMQ",
  "key18": "5GGCUeQPESpkV48YuG4CnjhWuvTFddFgN3wgFkt1ES2ZraaSFDi7uK9DHTDUDfF68jtp33JvyCX4ZrXCsEN6JbgC",
  "key19": "fwMd16aChnnq97xWvoJrRAmPBePTtNJfnAhk7otjNoVYS2bgjbFXJUfGenAqHTrDChNxsuYLaZaETTEgsSH87a8",
  "key20": "5QWZKDEepRMLDwPEQqkvF5suifxsPqTi2XEXtiGeY6w3u2sqHbnk8ynQxVqsaNULuvgtXZTb1oUUijsJbzv8tuSw",
  "key21": "2vbFA5oXn5wY9FLKrZELseST6SLF6o5y5s5uZdikFeb5gqCAbH8tiRGYWtsSWMQ6vpBUCke4K8br9gHbMNxKghhU",
  "key22": "GvAc2d5MUH7Xv8axTxs8s3axPbQXKjMJoMAt6CaAQbQBZ5rPXW8CauDPQn5bpvYh7jCTmmjDT7uMK7qn25gK6Ft",
  "key23": "2dtJ4mAwizc8yT3r1NdmxUkt5CwGkHxjLxY15dv7iwpBEzqMV4byintJsRgifDstcz75XShTT43qALGtfKiGRCNm",
  "key24": "4CCGNKdqqfCPgELa3P461hciH8Hu8w86i3LR3fW3c3sYGTVmaSNRsDPo74SZvUBUkivjgJGaC9W15fN3SeHb39qh",
  "key25": "5bWvTLeqELkCRne85uVtyc6GZiYNv8ZFpFuHfxifNP6A7xKE249tpHKHrP3bjRcrfsSti7d1n1EuBXSDCB2ngLEw",
  "key26": "63eLqrqr5eZddhPEG6jvUdHUvPqNKxquL1KCKvzcfFx6qtSWZBo7z1M7AzpZABrk6WQWL3oqXNpdDqp8UUDWdEDw",
  "key27": "4Xfpc6ZdoKbL5QqHdUzKPCvXEYFT6V3tLGqRufz33nMb1tEUEZkqmjqBMvZmD1aDVZ7Cpmkfw9ZGxL2PyiiK8xsg",
  "key28": "5rqP2Ki1WZoCDaW9kr3GZiVJ7rXkUPZE5MxmjgVKcdmNMt29cy19AiXDdfHzwrJHJKV7SnKenhkKLYqANLVxN6MS",
  "key29": "2f14YaczvHiTHSuBBMpE9WpKGH7SJb7pkjpw9kYtAcK3PkbgeiiXsCu9ZaJadbjSwN6b7Pno3HLkJqdbdeVyk8Gt",
  "key30": "5dyYGu3Qh6AzrSYDFdJXrTYkZPAB7BTAoa9p65agBVd53RsxtQF9zVN5PhKtKVwYRpwXy76ZvaKq8KTvHZmE9gat",
  "key31": "2cXSo4riWKFPShZt6H3HJKFyp7uMNaU5dmeycMFDDUEzELTx1rTuqdAiUEnMoyegdFLbJfJzZnBkncm8NjsQSK2V",
  "key32": "5G16H6Zay4btpnVg1ixBVHRazCs87uQnNXoYD4XT8H79HBF2o7v6PtpqqgUmqoCyDygsqsxqf1q3jg6HKorXmE68"
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
