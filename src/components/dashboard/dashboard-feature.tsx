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
    "tp5tkTTvpGP7ckMzFs6smHMitvVRRJ2R5G8MKi1r6DxT8FQHL1mhAEkvxsNjEHCRJDvKsh6G1b2QwwLEYHUt4gS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQZXMSHEcCh8BkQiLFtmLULMpfvpYhxrq97MKK5JjtWVVyFWpXszNcXcssCtjUfPtWZh6TfcUaeS5t2KBLM5a85",
  "key1": "2Ep2wM5GCuJnVZZvp5NKfLXaqFy6Jn8okBKyH3sk1ZpTXuEGoVe1M6EJpVZLcgE6Z6JreGvpEn61cKgpbTU9Jq3u",
  "key2": "YzyLHwdF85U1uqpwbpzhgtUiNZAGsEQgpAVrXdKA2DdF185175XnLWy5HmksiHjdYf5HRwbX2ePeQthgP9LvKtr",
  "key3": "4yayyBjtLuxzVacfeiAYYoJfmBTfszTqh52ERBLdUiD7ybmpASa1xoQ37SyCuSCz8zBpuiL1TLhK3xKRs3hARGMU",
  "key4": "5zyF4bc2v8vcQ9iAdKXZLShqn4QRTY5jVSD2J8YZ2ydmt15NzBoCFqpAPCZbpPRBbFzCYAj5m9goL1MYyuqpDFzd",
  "key5": "xjswjdStm5U51y4D1hNfwPigzbumS9nBPUDXnJ59zcjmrgKDpzQVg2pkyxbhiLSpqfcnMHNuotXc9zTubMYnZZC",
  "key6": "Zr9UvHkdwvjvuieSwKgaiY1d371Tj4C3BcSg7g72DRbRtsG5Bw2Fw95UUpKMzFUfSwpurVxt4t5yR4nTop2r9cU",
  "key7": "GkmAWvFehz16HZFcif6tjDrZhrzpE9DwqSEG78QZq1TiJpaG3oXnEpFeoB9BHUMt5Gg4DEdgqVgy521ueWXMTWB",
  "key8": "DxYJWkbeV8ae24cUVJbGA7qxwzt2bpzxK5qakRA41QV5j8ybtaCBYouAXgMnQUGZCeuod1EP7JbEKueVwgEZ7zQ",
  "key9": "4jm4NAMgPa382EeJMrcJRyyRxm2rM1bj2mpS5pJSAHZ4BfhJarh7uowNuAEkgMmM8t5kmKBSNyVcRJa69QQBTen1",
  "key10": "4zsaqKCbmyTo6iKw6y5JSGAHWcgWXWGGX2xYBzQEocE7SbQRnQWBDXWzLhSmQS8Fo1vYyJMuY5k1VP4fBm3ipv7B",
  "key11": "3WDdhEPkJiLrWqxTWwefw4RfnxMjSzHiVu8rHiZaZWBCimtV7dt3WhJxUWZVzuQE6ZhtmSSiUMBG3U3EDo9XfiDj",
  "key12": "4BnwrRp3hHwqesWJVXzfxgkh7qpMZB3M7RtwDxmbUnxeM88iVARXMAy7EKzoGar2WSC88DDwS3VvGKkbkFHTD74K",
  "key13": "5FvVQVj4Tb4aM4isoYmsk8Sou8RPVN6ghraf3aEUzCmscyhW63Eb5pmYboiowVWBxpPsao3UZpfouGC4wXXjCAZp",
  "key14": "4tykpwhs58Q97poQiigVskXetRBFNEQbPAyt7qBnLGhCaV8KywL5b3MfkcjStDtwRdA5dj4MgTJPz1fauC7cB27w",
  "key15": "BtiycNW57915c1ZtV3JvpN8pQk4SjY9CwuLnECa5bJZoWEvdNioTsLkrsqfoyHobza85EBPYp5sudxaiSMYqaUE",
  "key16": "2utcYFHei7s694DKc1WFkLoAZskCNP4rpkDcLmX8qm7x8pR4UDSnLmFRRCJat5F93cBFhQiod64DGWkKukByfwk1",
  "key17": "3AvnhsXv9dCgJhS2U3GpQeQyZPQvtwYtVxfWitLvxhAjFSNaArTqvsyF74PUFDgvezqaNKymnnFq2wghp8xWUg4D",
  "key18": "5c9zwqNT8wCWFNcQmaVqZu8KTHrVxaTuic5u3pZKcCg5RHz2XG7uxdnppXZLiBmVT4e5UGGcVKfjFzDrByEGgS61",
  "key19": "2HuAKu4e5CUJC86bdfQJKYbBMcGHRF2QcrhakfotRTQySdCXHmRu6wMkEi3ikoN35cL8CSLHBWbE2CGXvkswquoS",
  "key20": "B6Lx5MCyhVEeGYUbaWvszwLpT3WiGpAe9ptp5tYweE269yR7Q8HP7XdWZ6Gok5RVAJeHSPE3YLhgrRpdMXeUzrX",
  "key21": "3qBspq2xQbTRACPeua9zNTw2w2bkiR2Q1WPagrV9ai98cvQo9P8ZwAEsyp4xhDrV25HuaUvw5yfaCE7oeCvkaDHc",
  "key22": "2idzufgLP5Jqanx8bnXhE27t8Y56aQ9adnk411dTvQ2aKyeztLVMmQdT5X8x4erzjtW7agsXPEJbAWDscVtgMUvp",
  "key23": "2ewfcd2aKG5eevcuUu2HyKVHVKBG6ux6EpvYXzMqAsL3SxYxg2QxHHWLnjUFRyH65Xm3go9y2LMYjnPFPQH9Skgn",
  "key24": "3ZdBSW9AhvDzdNhhyzuizDP82Usw31mFaCfounsFTCf7ZxRcySKHZiuybxjfDrjZZmyE2H7TjSyMJrYgQkT8NR8D",
  "key25": "sSDwNYzkcMWAYhonWwYzdbT7xnsibjyhaXpP1cgMSycroPhaDfeiFsuEMNegK9dm8eCBrBN9gTxPNwpix8xFKB9",
  "key26": "2vVemTSH5ucbCgetKTcYroBRXq26giaYrHAfmFSWCniN9ae4xD95CzWLCjRH8WvQd5gLhjSaSxpGpjHV6hMck3b1",
  "key27": "4mQz4XwJcNGLiuN5JVn4KRiGzaHxU33A8U5wqfPpX6rdNWMb6RSe4jmJTjhgZAgkyYRB6fPLevHBnMWqoXDChvBw",
  "key28": "55AGqsAEFYzJhFsya8TgXXdjPoKccEKTJdXDcQLVhaUDWz7D1dVJXAzJgg5FsrLiStwYQFMWKpyCAdUotXvzUh8Y",
  "key29": "2EjjD4UTANw4CHWSnvJNBUF756ZUALq8npHdNhe883F7tHDxF6HFMGAAThjxGfuA9iiCe7VYw46wCyGWPWxhw385",
  "key30": "5EeABpedpcg4CjhQUuBKUPGBmeqdAnbrPpa7gP2h2k3NZ1eZ25R37CwB37BRSkttsp9CyJgZy9UDHYjsBF316fAk",
  "key31": "2TAP92SLwfRw9nGurFLbCG6PoTUEmKwbYgb4waxo1Vds7zEHdkLP4CD4JBjDZNh83iRbp6Y8acZBz95pSRnqL8B",
  "key32": "3mkoTtU4fN56SYk5im6NtPpqoZSKeXGSWpnVL1gyijaxjiLQ2CciyJdFfn6XcyYKqk8qMqyJFC2Dvm23xDnQYitr",
  "key33": "4vuWyS3EpRiqc7sQJkhY73qY1onYiCRGY8BDu5wg3KCk2Kqzw3sWrh7jp6wBFTZCyT3Cc8ryhJRCTQWe2aWK8cyV",
  "key34": "5ckYMRXJ2vF7AzHYX5NMNUfyiGFvABpUmhXZ6y7e6Yk8FRv141aYDooxQE46SFAsppZgJtLNEEEZGp1vsuZcehR7",
  "key35": "37DkmEd7PyqLo4jQrJ73fu3oVCULfwSkatkemnV8gjrPyR2Ko9ycyDtgMZa6XGVJAkstuCYVZqpyxCeNgxbEixPi",
  "key36": "5JHYNxax3vBpJjeXp2CgyDkgnrWvQ6ucco6sF8hTVN51vv4hceSy2SbYKn9BZm257tepZvdfFnbfaLPSChN7jHX1",
  "key37": "3MKug8Vfzo2Y8bXxw5KRgBDq1SToEpFTvnuEXYCMq6BPN7AgSQzzmNscXznvVDVCcNRT7Ta39G4rYex8yyKDjkWA"
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
