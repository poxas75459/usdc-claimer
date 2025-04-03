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
    "2pYNYdENBViLRMqadmSKcTyxUrqMrkdwZnh33Xy3oKxTSRBYn8DWs6aTz4zxkWBB135uLR4MWjkBWzgv9xCnx6kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aP8kBYXn637Lg1mJxLLFqSvMugG1HWc62QD9VPeKHr1bbA6BYcqoCT2mfgVBFLAYNaTDMhYECwYJfc8coZesjSZ",
  "key1": "2pEVZko3b9Q8RhfczaaN8TzSJY2NJpWzV4aGXMjotGYeur2nZ7Tqi6S3M7c8a6X1JccwoieoktDQyR4yAQSECNFW",
  "key2": "2yTmiAZKM61SFcARi7tooeRSk9BNpTDF5ymC2FMBgH7hsQShoDDZUQd2xr9G7B19JpbfRX1o3MBvUDAhU4f3qBk6",
  "key3": "3jA9RJryyu36No3Pg9Pr5Uso43M6zsdxgKoiE5ax1ELURiZrezbDdj8qXf4big6iaDhQMKyAkb7Zyypxb9o9GU9k",
  "key4": "42eStbnm3ZQAi4hH7JSRN9HQRmG1BBFWxT1HFrP9ATUeXQARZj7H2HJxs72vfzGwtjxBbgnmN9Nuprs5TVCiHqJq",
  "key5": "3Ap6YkMPp21nM2k5sAJWPbXN611bLrRfxJF46io9QQtUhFNKc7toSSRNkahLyKeDz8gPnPnaHbuJnfbACTrefWtR",
  "key6": "PfMFWWEyUbp94upERmLHCpQirtvZcwz4g6vTuu7SWqTXCjc1TrYgd7X7tq9d25NMxDBwfjK8CAjLXt1jxJAgtXV",
  "key7": "5PTfqEwa8jKCEQ1VJDyRGhCsGsEvuTQpGj1CXpfjh6ufEfvCy5PQZnVwJECpnAkVgcWwVhXcuP7uDYFv24Y95DHb",
  "key8": "29TnQLLiBnTTB5BybLsHy5Rf7UTRzXZyPZeruBZraM4KAQTUjnDB9ib5612wnA9wHjgbzsmShnr2w78rYHoKbybV",
  "key9": "4Lty7jtmipfJ1n1BVu5Y3zy8A7xcJFMt393FQUcJA8o9B61aDf3y4m88NzZJ2WLYKE9eNYrneXQGhyorshWtRWk4",
  "key10": "2RQ3L6nDJN7g1WLppdPLLEZ3qgE6m1gYqLws1aiLbawhF3LsTxa8A4tC7VV8TSv3kSNuU7b37mpQrbeMMY44J5s6",
  "key11": "3QzNajQK9LkRrqBdT4jnAZarTQtWGC7HyWuCL8WnNQPfyLzEfzRnXrAJVKXsnkKgamjY86eDv1uJWJCTH2JnGbPx",
  "key12": "2r6F5cedhQZKtp61hoTQ4XYRSDPiPfBSd4gcSp6i2xGUh3dGpritp6uQGVaWppXdUf9jDnGqhEDhJPPeSoY5516n",
  "key13": "3SS4DkYCLW9kB8f8QNLVNYVwkGX1U6KJ2yziripYSaztAvXqebq1w3BkfumMDexWyoWAM3vQwt4KeZ4yBhoqSpxs",
  "key14": "2LNfyYzi53B7uVquL26yU52YWUbceU94QQru3pcgGeXu6YDhha9ZMuJSW9DmSFqb8jWxdL5A1aFwfMtDeB2q4gr5",
  "key15": "2eKhpyGqMoLycqxvgSgsonA9xMa7RvESRkEhYS2ApEXi72iamsNxATkSJ4PysGjQHnnnHxRcWFw1unmWES7NFHeJ",
  "key16": "2phNDoyabXgfPptYsk2YNz4EiX75gUNwoPt1BHYKJfkKqySJsBFuvDCVzsZbycoVLxNd472b6GRbYX3tXW6dKi2V",
  "key17": "2f7LvgwAJW59uqU3eTwfudmJvMbStuiY8NoLNUgALacnETDkHMueCYHA65R6fjtjSwbXLFE5ybwGPByVaUuYJE8A",
  "key18": "giLyjFZRMhwFK8GGgYehRHcz5pcHoh2kJGNR1pTuS55ET7ERXVGt7v3NAtshqFt3objhBDnAcMTWVwo6U4avekd",
  "key19": "QB4hUKNzbEckeTdHNm8rtdqcHqV5qfuRFkVHrBo8Pe6GPcHP1czC2FiVWn6CdEhnooRxWwX9b9zFF6M2WM7qL1P",
  "key20": "jV7QhcMLpJUVzAp1b8E91N22kAwEgPvJjh9g9eA3tXzCisAC5QEZjiMsam6ujZRw4f5VmXbsfquyFxeCLcu7Gsh",
  "key21": "2Lp1yGm4rqPwC985qtE9cGuPsdBCvH2PnPEf6PhSRRg4ok6tkmJ93okwwkF3aFa5i1PCDFBXGp6eW3NnHsZ6wvr5",
  "key22": "5qngmnsP8xiTGywHB124i31DCriRk4njT5oJ8PTFKkDoFH6YgTcXe666E8KwDec7u4xtD2ZvbxgWxXJVMwVm9HVe",
  "key23": "4hBLspYyXarJwMt2Pz5NxFkghedEL8qfWez3rQdd6BocevufMMprEe858XorrqxVNGGuaBzaBoJXZAvx1LYaEa5o",
  "key24": "5CakWukwi2dQu2RA828BaUSJvZ1fw4MQUM2SqNYkA6EsZM8thjNabp4AvaAcoKmA932XpZUjPiSpkNaZ2o6BasW3",
  "key25": "4Yf7BpoEE32wtk3Kt2HDFVhw5YNRdi7B4tm1q4MH1s7WqcLeBuSw4eNzjgGsUfG4w5qd6VYnLwm7m5ugtoQU4yna",
  "key26": "2gpXAX4V4vbxCLGTijgUoN7ENJAxmToAN85RUMCBrx5aPYjdHR5Y7umf4kAtT2uJ3f58LoPWtimLhgF5dU5AtwVd",
  "key27": "5T9zYmJfTB38hYAsYThmUztNhTcoUcoequpJdaE2h7Tx13L8odVE7u1F8ZqkzhDGPMXtFvPUnNK9EHnh7XVhyP4S",
  "key28": "5F87QaVJcFDDU6DeA7UMMx2QwAZzK3Zmn9Eb5vrJTWMPJ9gzsd6WdCyA2NPNKfDuw8Ytx38vTAS31JSthpfSBMfu",
  "key29": "2jgcHtu5mDjZejxx6KyMBW2j1Vj5CF6mpr2jb2EitXVwBZ71YwjXieK7m1koaMRYKyoC8thr7Ubec4bYC3wnxyrD",
  "key30": "2JatKu17mqPEu6dqKPAMx1RZm2N5FuNkCph2giXSrh5vCRmigWzSEsQxxSUuFwKLmtWHTdxsPX5rQnwYjD46qyB1",
  "key31": "5sht4jxi9uoTdo2hsYqEfoRCVVeoiKzVRavZsiMbiaBtkUwkV73MxP6ja2smeizSdyo1HDVy94xr3RNM25A3U39z",
  "key32": "TNh8mCGMvZC6GPR8SPywpTZ6rJVo8cXga4znewgENa5Ft3z6emAs6v3NkdLf6oEN3W8pQjY4GSK8STt5KQ15Bx4",
  "key33": "4xMc8aoBEmbz4wKAAYiUXmbm5PkfLoBJzZdP6jcsh5jcynxpjhHWEGxR1Dv92qJdabnhHtbvebi8GuXTBzFd8Gj3",
  "key34": "4YJmrGKxiAZLVGh8r86pXS32jkHxQSiHjspBgqdHt1gKU25jniKWyPYmUyGyBuqiD4CUJ9bsQtxo3yPyTCUrrXuQ",
  "key35": "2bREYNYrMyhrzHic4jApzB7xahtcrUk9rR6WMGmtfHK8QP5qpcvNMBVxJtsve4Cau9KrjbYhSeXFuv7Hv6poHFnj",
  "key36": "8bNRSu1f4mDPmH5JpzNtJVfnR8ayVgXPKjunKfVLkb2NVPGHMUq53DAXzPPM6kyyajmDyEZmAzvwdBuDaaWHRza",
  "key37": "3MVjqJ7HqqdkMP4cuuwwL6fQthFZQfra1u3Nvtb21xYCan6HkF7TGe9JdhXgBXV28i7Rgh3mM4ZFWUinevE6wKkx"
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
