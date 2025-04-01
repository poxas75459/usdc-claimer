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
    "2HDxvPLQr5nLYrqCw2TzkSoz35GZjfDf5cMvXDajPvEGW7tUDzzzGaQzRFYRsznmtpCDzyCwyNn7fWdK7udKB6Uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hh5QWJS3BYe5xtza7nM6ojQfTrh7SpdZLExZ3xH7G3U2Bo9y6KZkZqRsnFW3K4FYRkVz5q8YCJVsafTuQu4aDhg",
  "key1": "4LyWgY49PpkRM64Zzp4DNJ4v55N9FfZ1AFDb23mqUsyR1hAQcUsZNNb1y4QSHv3oGPU6KfNaKxBSgmMixNh9kWsF",
  "key2": "54Cgd35UjPnUxfKb7LRgPmdZBYHmKB2wxjDDPUpSV19N56xeLcNMrNbR1jNBZNoCT4wiRcc7nkqc5QMGhpPX9tLF",
  "key3": "367SEAxTgX94GuSfrfEgoXogesXJFoUy5RpmkH5CDbj1cTKofqDFFNQNyXv6j13xHDUFTyPaNHN34fk32HaEa57c",
  "key4": "4gdechPeSU4d5bfJKpbkj86UMVgMMw7gG5AcniKNac95SUFNjx2qwzjEaBhWRC5KdsijK3An3ntSYsKBjeXwfqnb",
  "key5": "2tEHsXNL15JjouonLTepzaAWCk2qEJrTBfCcyTBeNRDQRnFsH7Se8WQyDULDgRzuRV9NrKM5jP8gwS7GXKe84Z5X",
  "key6": "4HAqc58s7havQ1puZd4v5f8rNyE1SU9EJvsWMTQcaGYv3dw7MKZmw1KXTRuXS2e82vvKFzrgWZ4swZj58JWAeaqs",
  "key7": "5rfe2mHxo3yuxYqvF5WL6A6q9webrQuAotsA1m6og8MGJWTziNPvum3tfMpeguax4ujh2UTp9QMYhLuD5mC9SkvT",
  "key8": "3Cxt8Xf2vwnW5RrGNZen9dhez9ge5SF26vpKfxC8fSraiKYqmcna8kSKvQkpbVVjWZiJaEUoE53NnxAebcKDHtiJ",
  "key9": "h1dV9VvYMAYnM47iv9DU9f5STxFGgEyZ43JCZDdEiHLmqqUxHvJbXagn3AwxYDsUJboWaQNttSy8JAvrQHv6uS1",
  "key10": "2efz5JUaQRGktSNqTQABANvcEdvykn7NfCijuYGH53y6MiD6ZTcjLhV2yVhx9yFYQtnyREi2QSQaqKWfavhkuGgp",
  "key11": "KDxpLNEi6mqxx4gS2UKH51M8CJ7PMa4F6cPBCG7X1BD8atY7YkzgNNddjP3qzPEpseCnHALmy7jagL9MXYbPuxB",
  "key12": "TivZaVrMJUJU1HnkMyc7FqBHPn1PeHwwjWcostjCk3FiS6Cu5i2ToG6nC8GcW8Jx2ve8xTcmhUYohSnSH58RUTH",
  "key13": "oNp9ocyvYNbjoKzPwx1wbGBKHfNw2bMAN12GnrQBEABV4Z3E8EwDJLHq3s1AjoxWtHukoJgG69aRva6ujLmJmRA",
  "key14": "61Sz3MZtXC7gH634DboAwfF3EoskvKqrZtsW9kzWkMXW8NMpTows1LoYU6ophpBLRo4tcAGAEMVdkNAqLkuMKGYT",
  "key15": "2EgLTGVAMZysEU7sr3Md6561SoRWtk5L1p4aqSzKMABuQ96J2A5JWQ37Rawsp13meXxwF799m91qWSc5BYooDu8J",
  "key16": "2cXFiHjEDWtjVNqb1X7LRtw8VsitsiXV2JNBBeSbnCc9FZULr9w3DWhLTdC1J7JEmvABMbMKgBQrxcqTenhSJRjL",
  "key17": "3qgiSpaLY97GYdx64LeG3LH3Ye2bpDqmyJyxk2re2yWrXx9iCcPfDyn2cACTbVr5U229tXTVhuX1VR2vdaj9drGN",
  "key18": "EpAWdQgK51G5kG6Ly5Mv1kGsX74j8Xg5NaqfiSmezwMCVmzY3Xfz5u33MMR5APXZSNppypPpbYdBn4tS31tPGSC",
  "key19": "4rcEtoGUmztif3rkcwkgdezAA9Jk8K89e1wdU1ZYBHSp1ppDSZpRwYoo2WndNeZpiitsGZvSwH7tvTwtAJKP198a",
  "key20": "23Fe4ayAdmFRHVmwbUcNFKYDKkezG9eYyPX8DZLtSD6AKXeiGY9Cf9q9FsiJzhEd4TcR5RXXi2MAd7MPojcTDKbq",
  "key21": "4uFks2iP1MzNGxgewCeUg8Li1jVUJYtVzWm4o9vmj4irbx6zZhsESQ9X2ek4cEoVcv7JtNwwtEpXdfwaibuLbY4d",
  "key22": "LazKNX18TFVUwvG5dWhhaxJP7jtr1u3Sw7xj43b7ZS6o4ixZKDhhozJtBMhXNJFscVNV2zuyXLuNt1pxC7qRqyt",
  "key23": "4YhfCXzFGGX5vMWKYKeREx7yLVwwgMhusH1RbhVpdLht8Bz3Hd5UccCG8FtHd2YAXnmT4RT3T7mvQB4KUyx997iZ",
  "key24": "3vU4tpqVYP2nknjEuRL1Vnu5K5c7uKj4HyQHgjwZCQERPtP3MhdwEbDHskbmrMJMK9BGwGpC9PCidff284wdFyUp",
  "key25": "2jczCEygLXakaiAByoDGCexQo4NFxw3JzK9sUJD9JWRGL3Zqu6vGHdz8DrviUTaTgVLGDzdtcxsj1ZMw8oeCTkT6",
  "key26": "C2BX8Y8mFT5hp1D3ju7NdxQJGvKuD6dtim2JQzMfMEJ3thAF8PxEhQ8kLcsrz1rqhM7wPNEHkimzx1awVuHq7Nf",
  "key27": "4sCqPmkj7HG7iUr2FqEc2gQ9fyFUTxboTth9DTzkBtwHua7Y5AKVbisFrfuSSkZtzdur6KAuv4j8BHXuvKLYZ39B",
  "key28": "5Rx6qG9ZqLnAvPLGqTQxoj8vZnPm4QXEysTWdJwGj4bw3T85wG1xr8wWujk3Z4pGDhFPKjn3BE6jmidwt1NsG5os",
  "key29": "4Zkn4URgmfC4yni4LZDvb6tsjrE9MvUA6MeWmY77ZgED9t5oVsxufSbfacGwaWo3TtAJ6dHLqw3eRiUqCPS8fgf9",
  "key30": "3DyqFq5EEatKxfNvEB1jHs8b5ibA9G8u76o4E23rGBknNA33m7mtdmA2UfziA9whn5LU1wMH7niuws5Fd96jicpW",
  "key31": "4f6hUKbYvNDPna3me7zBkrsRKRtXEgzoJAUkMukMDbr74tMMjuAp4Zs3JWnDrZcso3WJoYZ1ypVfZFtaeC5k6ME2",
  "key32": "31g4ZatZa4KJegdX81966e3eNnRWEbeahrtx71BTK9tReqBRLWjBMWM8ibeqK6TxCBxPbUjCwzTBXeapCQdNbYrj",
  "key33": "2cFTDFaUVdogyn3hKTSDNMF1KSCq52rqDpPcQVM3njvNVpRgHsYp8tRCGWQQ5ngJyMPJYzdkSEtBSbcpg4kFw5J4",
  "key34": "3FZMRtRmM7bMCesQZuu98AkT5WJgLwU6kKmC3bwfDu6uUw88erJznFaPJgKkptGDZDJYYnvcVPYhwutQdnHhvo6q",
  "key35": "4jsDjPS36t1nAaG7QXNN7jgp781AJHd7o5sBN2uZ5SgRe7AgiRh4XskzDCipyD2syvmGAjMbgweZLr2owoQN1WrF",
  "key36": "47TjabBfiyKLc3VQmoynHBhsz1XKvTDmDoBMsbeNyERLcn7UqLuHNQTCc1JATKSyiAhJLGJRiD9N4xMJC3mfnihg",
  "key37": "2Mu8ww3pqnisGbUntFpPHSc4gVxW41gudwEjadBihJ4CqUGEsjvazfFor16ySNZsZ7QFatabEtGmQ4mKvVwoQhY8",
  "key38": "4scJ6fEjbGyUohzg1P4uWRGnRNgu3ZtBeBtRVK7fGiATqGcsxcT2Jqz8f3BmtKhiarWGW9tsiTHdEYBF9kHsAVDB",
  "key39": "3ZBtfASe962GmQdFNG55XAeuuWwv6ZQ28kTrm3jZ16A4DWwLAVDYvDTP4Gg1NbcVHWZr5wSNZsUYibimTUshkE6M",
  "key40": "62u3112wSKniuhCjNs51EYZFzb6WVzjR3hwT9oKPZWUu2thDPxPmV8TiqKwDyzpRHTbpCm6EQnrW7SZ1gT427uq8",
  "key41": "3cewJPEU2kEJJxGVC6zP6ba88xCQGTtPqwxB4mHuhfuCs1garJXczZKFCbtSQ2qaGyeVBnm6eF81iT3VCcWktfPy",
  "key42": "3mnnQ1AkpcYf9Y9UcimFkAhNwUAsCubwWoCGfbo8KixcBkLHHaSkvfeXcFapwsiMv8sB7rm8vPK1WpfyyAGkV149",
  "key43": "54vG7pmnn2LqLL8X9DgKTEbq4UYjQsj1suVjTfZMVm6WjeJ3GApKQVcmFpZr4gzrcQfzQtjbHt44SQ3UzTXdpYwG",
  "key44": "rfbH4wjjPhgJf38aFe3YgfV2UfkKWt6V4AoZpvxzGZWBdTwgMdjxybEjGizUJnS2YiCMp4SnasBQD5u8GkLY9f3",
  "key45": "4PDq3pEFWaUHjcWQZ97PJqPLyDkoY8ctBzXDrQe9HD3juZwi1gYTUjzhKFHyXPG3iA9S4PtLtxwsjp4m19pEnp7H",
  "key46": "bPsRVX63dW9ZKTqq8CJzbtuN85tn13XdZNhute2aEjhScoNWKkjZkh5g7rT8dYTWfGmWnaFaUGcZq8JB1kb4LMu",
  "key47": "2mBEBA2AGi1fS3zAh4NMwaDnraKWQjHJWvmxD57orAhSmGjMCLiRiMQvDVouTQ9waSxx1DxaEeBJATpmTLgT7hsm",
  "key48": "2bs1HXZzbr3DNQrQDJhm3rsmbk49RBQWPcX1Csd8j2CRRK5JtL7V1ukSCGTcZwdvyKLeALuwfurd3TQAkVTQ5Zx2"
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
