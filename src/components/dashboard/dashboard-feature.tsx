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
    "BdqqUTL2T8s6tevh1DEaYm7q6ZZRpMYgo2yAkESznyuytSefoUGF7Djd9uTDao4EAdDD6vgTB8YFrAtQHKbAtBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WFjboWBgCSkuq4ZqboNoz2C4nDdUDNotyipWeGvuX9MP43DCNa5icqD2v29LSE8ggboogofknTcSkApn8nEjY9u",
  "key1": "4Eqw4x5qPD8jN6HySukj6eFvrr6n8HyaWZgf7zSRmxhCQXaTyic9EMdUwVwLbXCwms26fbk74Hqf4pT4FzDmpRQj",
  "key2": "BmcxHmMaQAjCLdj1WC2zKmxEDWpGtGJ48W2xtAZhbqHAcXAoTtgveUJQBoJNMt3kaWx1cYz5eNzUcw4VXUFuGjL",
  "key3": "3fBTMLBKk6DD1dxksrszXkpMvwGysZvcf3Vuztb7xMM9vZm7qaL7JhXHu27dHJDXAWkamGRb2hdTnttNponXFf2D",
  "key4": "5YZnDvA2uTaAeDfwJuqocBqWSUdwV7975j8qhpJw83S3sNetZ7ytCKJHYG1XxzLETyH5vjgzfRUEMBKXCbKomCk6",
  "key5": "5NsH2KbUeBnSd533EqXwE15GCMQaEhbfeoSbJ7bVGomotXEPWgSgvmUuatEPbZggj2EoMHLDUcz9ybzGRpP6dUKs",
  "key6": "2P9wLcPYyzMafbAPLxH1edT6QbBzGfffArcnj6hmw1V9WkQD25364swNQrsPKUGxSVcxWpCFX3RxKURD6BarqpSH",
  "key7": "55xu2C3MFzJKPNca63tnYbBnsSQLxz3ZFmF9QC7o6tyxf6cqe6ivUT1imMj7mgv34ZYq7Kgy73yfUzQzxbfe3DPG",
  "key8": "47CeKaHzjzr3z3XQABzcLWE5PfN4Lm7egDRx4gojew3ZX68i9vNXoerobGYwfkJ19REqzMvr1XPe9ZsXk26akDHR",
  "key9": "251oKpaYLnf6wBwpBLaf6P2HGhtkXaa4J3i9mZU3kjpQ59sS1wNwKUAPzdzaZR6PjP5J8NBLK4eza4mLFKVCb4zG",
  "key10": "3KueoYJvVJy5Zweg6Yx9Ax5Srgtb7duE59yqnddRnPm8bdNwt4iRNW9NgYEvYisFFNgxe78hrR8Cr6Nif2h4bTvF",
  "key11": "2d6U7SkgyhSvdf9kdqE7m2y9UiPT4gQufDZ7eCtuN7F7fG7pz4uW6Efx9eUBiQBJEjHU6QtkSrm5HbCMoZE1RXaK",
  "key12": "4jUYWKq4aeWcQ9GduqWfv8o1yxF73TZ4SwQn4vpuMiuLeKKfn1votktfDfroGAW2FUhWN3VZgD5W41hKNFng49En",
  "key13": "5MGa2itX2JQHYHTz1q4qSKqHiNLEFq2PRwGc5YrnvbBH2BAjSG7GQosDx238EbEXSxKJWDmxkwiqLadAKuiNcSPb",
  "key14": "vtAx5GdWSSz25zJtCywfthhCbr2Na83UXZmipDtVEFxL6EtzeUZioftixYuucNMJ3FPUGuoMz5o7A1b1MKAQFgG",
  "key15": "4YtXCoU7VNU5VWntsD8mFsYbNyXnKxA4vyogaqZQoKU4ofdKvqyEXCGwQoKarEcfQPvkmkH1GUKMHxaQeKGnhgwv",
  "key16": "3DEUKUC5KVu46dPobhfV7ivfFRQqZcyUYUcJ6gdi2fPa9xw64iTpaybzTcpwVP1cXiqEn7NEcvihWhmBxZnBQYLJ",
  "key17": "2VAXVAYSjxTgU4y3YkBg4gDuWqqkzaDwdmbUq35uzxvepo4LjwX99eyges1qEBHfjdJZ8r1qGAwa1Vddt1rkCQYw",
  "key18": "5LQDVT3YPCaRnn86mPKwN7BRbVH8rQubsBqxXS9YYqjme9BtgnG6QpREaVWRorw5mqVfn315Rif4wDS2nwqjuQC",
  "key19": "67Lv2CTW1qzaVMG5fBecUFm5FRkeXfQ88JSapdogmsBxvYT4sa7HSqKvo6behRtZUUzDaqKgir98PMZcLxPCywzA",
  "key20": "5BVh4GzH12onAmBtehXrCEmQcFHeCQQ7RWmFWRzfT7WbQNisbvmkZET8VXs1fHSfuWMiEYBAu5vZ1RmR2QrXShLk",
  "key21": "2uKuZHWzV2n9sHwRzjQQrSeJop7ZrSFHAi6eJfPhzRSuP88zSwnYaz6A3A9KgU7Xs1szGmjGPUxB5LaPTRRTfzuS",
  "key22": "4HeL9caYLVw9ZthnPmcA911pwRdM2Vq4iDiumzsLPf5S55MYFtFffn38pDTjwwAd3jixbFGyxtjMt3YdJ14HnVJ4",
  "key23": "47fnGfD8h69ZYoQHSJ778rzVAK2bpyVa6emuqjzTNMuKFvieHFQr6sT1zxHNkncxQEazyLsqCkYKidZX3E8STPkb",
  "key24": "363pjov9XHiZBTj63DUFzBdikme4N1t2Mt34eTEKM3k8NbUj6oK2msvTb3Z7dvR3m5iYNxQcrN8dfND1vWuTUGoP",
  "key25": "4WjggBWwAKmnfXy5bYBGEUJ9q9ZZ6tuoHFAHwyvgwzGpZ4d6FgDs3yCa5yypLki4QyyuChMrFDCLnBdcD95sgPpe",
  "key26": "2E6PcAR1DPo3MDR2AmLEcZL9vTDCGLJoPk5ApKqeP9ktBvScoNieEsfE63cJd2pBtQ8HoTXnsaP7Q53EuUkNMXrc",
  "key27": "3Wm7cHzR7Qv12AGLWwomWvLPiZn6zYX4WRGdEjDjCpLU6wWojYpLxry77g83QKmXiWEmVxrYKn3VSisSTFpjLAMG",
  "key28": "2Gs5YKwwVNJk6k24n95xUgo9bigPuR3ki92sxdbQRZsnbw2xUJRoBAaq1MoWJK5LxRPhkzUEmyCuskPkdpxsx5gV",
  "key29": "V1LZYnLFzoUFmULd9Ecz9yJ1AWmo1T1jZS3TrmngfqXVGkvNG18icWc7i89FuuZkxcqVe3swPL5FsCgwg5t3aJv",
  "key30": "4EjMC1YUtgarENMjR2ZD9mxRRtX16fQeUT1fhTsV3pWvJaYq8WtYvi7kMv2UgCgpoiFkCW1U9bVLvZr5qiSXmj7R",
  "key31": "3TDEnBpwhjovYbbfznSyGFDvd8aZD7qKWhUVTWPh8sNch6jFynj2ezYe43S8K9FPSx9Kk6Xp941DLiB2vgbTk39o",
  "key32": "3sDALBMs6mPpBueVJ31wF3G5eRyEThKHVkFGXPbGVXv5uEAUBfK3Qxv2oeyBvUbC1byKwAgChxDXiTxMW8AozFx3",
  "key33": "4QMWN9Ga8Uv43YjN5R8AgWgWGshfRiAxcrMoagQyF421BbahYMP5PC48r1EubZpvLHU7jGwiYeEQMHq7MqJ8sVv8",
  "key34": "2fyVtZWD9qc1KK4u6re8z2LLxpYhTBTqdzorCraYwNfAZUP93svNM93gsYMS4ebGgf5ywo91sEKWk93smF3RSiBG",
  "key35": "59cK6r56jmTeijKvwecqcytWK2tjSyVUYg7By5inc3rSjsmMmYh78uYc98qKNaHZVNcZDnNsFk9bcTNs2gKX5Zbz",
  "key36": "3hYnENJskWkNxC3syChv7SgagwppDfkRideDV7KFe7CPB9x38U44WFvVXLWEMSrVfbdptr6GVqrQR4JFf9jFEfEs",
  "key37": "3cjAvUyN3nn7JMxUvw98HEvwZFdyBVYFWUxbLTnZK1RFkEN75Jcfcv7XauuSCfkYtG7aMFPBmeWpvfkoEqHnX48N",
  "key38": "3MiaJvNFcuER8XkryL8RRNpVMUkZbSCwr2cUH3bdF1W427n95eZPBZaxtKufNGTn9hdcmhXzncnUrsFav2o7Jrby"
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
