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
    "24Mri8Uq3Zg8NkD1EDn7EdFYXSxQuGH9jsYWQqtXXpEz6R5gRhzA1UFPWHZ9h3JYxvt2huA8UZbMXMohnqZQs2Zw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ro5KAcJ5Dm9Lu84mfM5SWz3pc51BAeMcSDcfpZTJKC5c9UsScCGQLjQv9ZspNHWXu9KkNS2gp5zMawnSVcXtZ3G",
  "key1": "3rGFotg2EYfNPd32pKPuRKaCax6byZtwiRAah7J5VR59e9VWT3cpvyCtWqGaE8mEWjmo7vRx91kzWvmDxacCfyFZ",
  "key2": "4YGKi8LGTiTyKBnanijVjX31HzHU2dMNuAgZJ3BJQXAqeU7P9ZiiNnCnpynjJbmbNQZngqLTzKN4GYyJSBkpoeQg",
  "key3": "37Bwj7HwLERbt2yxs7SkDsEtEPKfZwSXt7NUMbybK9MRGrG8EvcPTdSmH34eYZ4sDCwLwjuEQrZ1Q1qkTdruCTE4",
  "key4": "24yooTr7HVbmnx9ZD4nMQaNf7VdjGbpVNQsuooHuDxzPsgusjir9aqb5QGtPaQAfFD1eGpyY76DLJXzLtvtrcw6D",
  "key5": "2i5QUEZnsmes6FpRH1y5rkV93tePo1eW1Jgn4GhFK33hSedjum8gJZsQRsBfhTeuXuEX8LXFm6S9EDqzSm7zCv99",
  "key6": "TiJU9Uzdom1anpXLbzD2EKPi25D5PU7ugxcAhMfNp4FEtcFSuDjAiCvufnLWGeiCWkYtkqpVWGEuZvnXAif6zxr",
  "key7": "3UjR12boZ95F6en6hzGJ7uTKBucPNh2j3g1epfT6BNUJQL5qYGmN6F4pUXwEbQhwheddfxQTZr9bLLZouC2gK2jm",
  "key8": "55TrkjxMdo7jRgEN6m1MZ964RRrmJPgUndCjrsJwgjzyLVvWbPXS8vSLcbfu2eSwFyXB4Uu27M1c9JfPvn2NG5F",
  "key9": "2H74gGFPnVucLieHXmz3toBvLWXSPgtt3UgCTSQ5e1CBeMcd4YdXh9YDDrPZ4nszNR7F4o4j5zw4pB8pGzBK9LsS",
  "key10": "tbDbnkTcySHqwzEq7kZ1saeVJBpFJGTNPNYRGdxZXDqxwRqQUEXgHQrEPTZuuUrxHBhuPNwMj936X1ZTV7EV2gy",
  "key11": "rKHD5ytuttw7WHZMqXT1xbWxrpfBZwLe3rK14jLZTRtjvurnjv5qyE9j8xXFCyXb5BbJ5DLXqg5K4KyWTnpNj6Z",
  "key12": "2FZgYjnLmGUBGGNxdYMV3ftXpoEDifiEfZo6gUP1QtsLYK7CsGwKMUcvnPoEX6apee72c26bJDaqapzRVDRMHggk",
  "key13": "2xyUHest1kyZvYDRg7DuRqWqmD4izLSFYkhuMCgzjB6u7j6aD1oZppVxc7NCzzDT6nBXVZdh83zqyYpb71AwvQC4",
  "key14": "5Jqf2qH9YEBesfksG8BUHwbMYy9DWajrnhM42scJkkU2SKBfPBJLsjqJohiczhtp4JEGbW3dbGZWkPE5AQfn4cq7",
  "key15": "2dZLQqgPVFEy2TJzsqv3hqbm4gs8oeHDVU4rKsiN7ywoBJceMPhMM1QEyFgmSdeEjqoDEwnvCUhaxWuHc8qsGuhn",
  "key16": "25UMomTEFiGGdd2gx6D6vbCZZRN7cg9CwpsN5LF4La7ZHzTq782Yv5ehbba1zJm5Hm6LASuaSta6K3XLxzFbezJ8",
  "key17": "4LeJGiJpAHjN3YW8YzoPPzeVFDoaD25VwjUFRXCAYViaGdGv5b2R8asWcbTxPQhFzMWwwtTiVv1fQ7bGN728XeMh",
  "key18": "5UoqwyjSbUDsELwUk9dR6fzLJPjgKkKPAvdgMY4eaXuFXBPGVZZyHNVUmsbVUoEuNqjgCMhQ9XFUHJ1iPJ7UAFGo",
  "key19": "aQ3mkBUP6zXCxWaSzdCVPs2BiNneKFGN8uzKpSBoVgGHCgjrzsYB9tRdfsUdxYv12EFJw1hJ5bHVTrQaG9wX2PM",
  "key20": "uCeqX1jP3kvzHXCF8vMVBv4jvSNMuGo6rvMoNAwFVDW6RKk7fPB1ZrFGzNVcMqxoC4utJ1fjWnAteTLJApyrKuv",
  "key21": "366BHH2SgHdpZvUvKHqs14he4BtpJg3yT1mracUvqSdE3e3aTVBgXN7EnmN3HYhBwAzfwhZGiv5hi2KuR1ALNcYq",
  "key22": "5s2ZQWx9u1bjU2PoARLquN6H2bqUDNX7Py2kkq7MVSPCSQaDVGZk1epdx9Zcp7h4FNtsTK5wtVvo3Wppw3HxxNtG",
  "key23": "jWU15UyiizWkyaKpNV8NEY1few4zeW3zih9sJhJT2oZy8C4Gb16DYpcUFbw7fDioLRsNM3BWXNQaqgsSftCufpQ",
  "key24": "3v88b89Ce9nn6HMkix8yR9c4rsZP4oWQ3XEL4R1gAP2BAcTrV8uDWerVAHPmgE4uxUQQ8BqP6eCcaN89DKF22TvV",
  "key25": "2uB8TihzgUJhEaKbcpDGNjMyt6Sin9YDCtfKL8CY44Msb9JSrvNdp7E5kkCGbzrgERs1bVsBrBpbGkrYRHZtMZ4H",
  "key26": "2eg8H5wQ9WnAEBtYAC7CpP5oq3HvQ1KzDS4s62KQzqwX9NtNPE5SQ7XrixAQz4Uj94TMVq8uqn7vJGeD5w2eFWAU",
  "key27": "5FrS1HtfVNuYchvEwh3BEhqmQgPX1mZVSE3Ut23REZ37m15Fh5AzYmepghGxN6ANFYJmL8RTa25QCbRFxASwxp9G",
  "key28": "24VKNz3g3dbpng9YN6ovsn9GHGiA2Lxtd75CgNbL3UojjdXyzvVuWjqHzFnXdrctexjACncfjxBgc2ZqTHMpaJw1",
  "key29": "4uxu1mehDh6WtARoAThwt5AmQdzBVWuhxBHAE6zo33qSwLHQjmPo4v971Vr56dfGW3uwP9WcW1Su6MM87D2vp4vd",
  "key30": "2NsVLAMnfPdRcfx6dYijwLL7wmvv3cSinKpnBzeLTx7dHC3Zz5QTEwX8SUWjZPTw7xZwmPLqaNHb4qu3vXp1Ta7X",
  "key31": "3A9kM382YjW8wq3PehKajeUPPeZuakpHW1iGsoynLDEwZV6zHjLtqNeA7g1M3vLhcQPYAdWQmA6Lb1DzGh8NkrUn",
  "key32": "4tWTCBrXF3fERP5bdv3kss866NAinrKn3AynFmibtsRcNXaHNaKeU75e82283J4ci2MuKka2RV4LLZtmCrJ9qkWr",
  "key33": "2CBkniTqDmbysE1RyhqTg8fXMQcTfhvn3PyfkVzLwzrP6dzc2QS8cdcMA7bJn1Uvv6rPKFKZZ68qFSWhMMVnrmAx",
  "key34": "3j9UgcdAYMm4msT3toaEsuCdcqgtt3hABe1BjyoQ7c2Tsu6W8fTQH4a8gfwMsiMEBj4vq4ZeMq8zDP2dA3iZ4Mwa",
  "key35": "DVocd2Amto2nPZYhgEDTEyMCJeqCCMSVUoR9zyUDXztHzCnUpnMSNU85ctJeBDgX5L6P9w4ba8pXMLp2MWLPcby",
  "key36": "59EY52uZisTXYp3aULi2SR7zVUsSF37Wv5bA2ug1eNvTUXXyWpJQM551MvUuQPGJVH5eUzdFyDnuT4CCzZyGED3U",
  "key37": "2SZBzrKaeAqMd7Vzc5fhaceXWVcnycvYWekcwVnBtQvvPJvXS7mRKPdYhm4kjkfb24YtjwYtHfjkNXvtfPmapGZE",
  "key38": "YaKj8uLMqt17GshuHnrJPzmvgNaxpW4KuAZbCGGbNcFCuU4KL8VHoNDMJRox5Jfam32NXzKi2UnUVX9oPSPbyZt",
  "key39": "26XZwBNWqmgFEYVc3Uw1K5RrvhRCYozXSnbpfMXaMaCrGMZdscMiWE9uKpNgC8WrXYSAJwWFejL9NJGmrdNtfdEY",
  "key40": "31Gv88o8ssQAYZYQAmb2JJFMypiG31ZttXACxr29vmwXtqR7Zp82sCQHoC7tHuyHc1uNgCUs57cZHPngVfA65nnR",
  "key41": "9LWVLwmdzXHyhbugXj5G6BefBui4S3KjHBF7A1uH8qQ2a1i7ezHyZT3UdmV1NrP2FJjcSF4v28iqL64Zzq5z9ft",
  "key42": "NgQnYDXGdjfrBBi6Phv9zmPbPT2J9kC8HejEM42JMAkFtoP1Djho28crsyLiczVGeteKDA1nkNsybARbmvc5sLF",
  "key43": "2bFzZzERtbpR87nTHahHxnZm69CmHg66k1FGb6dWorZ3HuUkfirkDS66zw4CokhngHeosVGwyn7PnvMuPEb9xupx",
  "key44": "3K119EE1rfymJsto8b3KML6F5cpn5gbHhhnZgxYMFmJM5UXHBHwgRcNsU6Yy4CBo5addVB995NbYN3PjhxWhJBn2",
  "key45": "3jiF7HVAtUG8R2SuSKf8HnZeiTKhcnFZ9fZE7Nepcx1srP2NvjyMsHFtcB3upx61Fk2CMMsgtFcsxKLV5XDB4Ash"
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
