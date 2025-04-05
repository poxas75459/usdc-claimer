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
    "4jx6jnVdaQXwy4y4e53zdJT5HXZbpQbajZBLPDDp8eMnRLeKg4brs9aGiszEScenrywAcRQ1gpuDjGmJAXM7cgfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJCY1JeTgcA6tSaZiAag8HY4XCywkzVnkbQMMDZmdXvxsStH6wLCJSy3bx2k4EKBLc2THVez61Ldvpf9aGF8Smm",
  "key1": "4KyZFZJ42LyrdZMdyR2WLuxpQsRasdYtmLkTr7TfgLwRMyU6oKHNMWWVGaRXsCTW6baTK9UwrGgYMUDzUnajbQhy",
  "key2": "4TaTrT41KcEHT3wFzfucYZ3iWjdfiUforjChqbdy2P2VD5VCZ51ue8BgKzk3a7ziLJp4TzkcqvKN1b6EgMcni45n",
  "key3": "2vDpVspjJeFp4Af3V5n2G3DBbFpBx4ewnrPZgi7awkacU5kFwVCXLr4zGWNThhKBdHNt9vYdGvdpMJ3D2upjtpGg",
  "key4": "3QX79cqTT95P7xMngEqGAoX5NxY1nXP446Vkfe81RR9b8YEy62srtuBHGDXWY2DuguofTcpSe1V1n5ruMR5UDQE5",
  "key5": "5pRpmBLmdYUZVqNCSxKgmjBAREyM9jeNrjeUTJ5BFrbaNH9oz6EsH7unigsPpwfL22BP3jVV9mZgXncPV82VtXTM",
  "key6": "DEwCYZQcJtGsLkyemqNdrD3nQjvwyij8ddDFYWyg5VrTJpzxp49mn71LWinTvoCsGbxnz3gzoNc4WmfFMPoYs4o",
  "key7": "5EJWyMJLqCgCCjHxwMv84zTQmjqFgeMeHE6TTpHBfLudP7tKrNhWGRK8aLf4o6oJMtGrmPCivAvxLWUCC7zzQknk",
  "key8": "3zr1pFXwHCi8SPUQWUbz21BbQnQhTky7pCk3aTHgxzghcPpPet3YqBgbXt3qfHfwjGWgZxa89ZnrFfMzAnH25DGV",
  "key9": "3p9uLbkqUej6pUESqk6K2w8Y7kfTGrnwFQvL1XCJ1oRaR4BQ9LBTKkJCpvvkWJjokwcW8C3yEHm8rCqagGG3vXgv",
  "key10": "3r4Wgp9GxhioreSnKZxh4nsdkqDdXC3wP5nke5x8uth8kwLxT2hkfe9mP6CP6gKJAii34xbv9MR3KibNQqQcfPdp",
  "key11": "2UqD77LN7SgkLk2x9JwLQxivoiHESxyL9k5KbhA4oZfREhTJXjMyyi5S7tKia8yFZJNdmm86kTPcHaGB3DLsTqgA",
  "key12": "PCTFZnXDHucztcvh4ivcGc32GN149DtYWTLT8R33smiF5JtymL5hryJ92nVpwcFXeYz5kgK3oTpigK4dovKtMhb",
  "key13": "5VQNTMbJ3G9FxNDzLUki2xDvw79R6vn7qjnqktUfgpFaf4zY3LQob8uHS3C341sMriq5R8NXEYZsKi1sqgterLN7",
  "key14": "4UsDD5i8LEQEFfWPctKXgLV7TXQpV24dRS6C5Sqw45gziNZQjbsYUruoKmRPATushwiY9B5hj46DEfnC784buhQx",
  "key15": "4SSGLATJGMYqaqGyxnvD9Dv9udpoFBvcG3ru9AxjjmLm237AKJ7TuQTUAWzqtA9rJbrKpGcds2soUB1u6tB9megK",
  "key16": "5hK9nq5oke1amGZLQt4xueUpnt9AD35rK1MVSLJvKuFQ52YLCzZqspoK8huT8PbNfF2kR19k9CMdw1r1k3DLYuRW",
  "key17": "3earDAnxHqkTkhsWxVNeDMcAaXyexih4wTAuej9ZQLpmrzRW7WRUiF81wunkrmPz1dNBUXi7rh4PetTvGWgKbCd2",
  "key18": "2v4yPqkLU4tSYv6FkiLX2UHxvVVm4hYP4KhFSm5oyjUcm7E8yPNDomVfNrZqeLUcfKdJnKBJVu1Hp182hDJ9KJzV",
  "key19": "3V1jcGNTaLwuTvf5pSUo7siQnG6nCjMKop1UyCT8fHdcCq1W38aeDofoDTx8ZaETjGeC1oy1DLx1M9tX9Y1Qxo4q",
  "key20": "FhDqqsNiuqSCbmiuhTuuta3Xqf1x1qZmbzynSsKYbgnsMvL2H6rpoohrE4ijdaMvPYcWSmGcjFdmny3n1oKCK4j",
  "key21": "4Po9kR4vVoX21fffAZVtDM6SErrgH1X2VKo6XkQ4FteVeuFc3V6ZfPhMRcYWZZZN7di6zHvRWKGpQ79m2xqkfXjN",
  "key22": "MLUCfMBKYLgiefFSM1qYS5iGjjXexrPE7scn3Ngfgd7Eq8525Ky4kUCWRWsE3XfhmqyfJ5vErpcqkxNzHBhkjag",
  "key23": "2aK7S8WkHzoQSUt4N72zG5Tk2ZYoXjVAywssDy1sKya1PcB7b4PYHCg4SsbFncoTMJT7F9gfVNSk2CkcypgaPLKk",
  "key24": "25nn6CHRBV7QtLJZzUzrXdBKkytJjn9J4h3J38QYmZA5A5j5DAX2qHtYVp1eizKcxrBNozs6eKcNCHX1Cmr5uznV",
  "key25": "5FACqNU2bEbst73owsUbgCUySfAu3DEQSBFtsDsRNqpJfr3otgdeVfNXfE6VN4qh62SaMqg22NoSsU1ZbxtLB4RH",
  "key26": "4FXQfK6r6os3156rszsr2fuopja5JPYbcEEr3vy8HKFdpcEbG5s9EMocLCq9NAddhwwXsBsFBbuuMuhmXepj2Cf4",
  "key27": "5LCByvhitjcHE2ecJzfL4wnKnjBKxNvoZv4495AyEhZeuCbREjewUPQ6D38oD428wa5bkLUqWfF77uNv313moTYE",
  "key28": "2VNVkf49WxKz4cpZ2m6r64RH5CVYyNuhEEVTfL1oYbZXnPYaZ4sPCHia7gpb6BTEva2HhuALT5vNTrTybUEfWJCj",
  "key29": "35SbEYLJ8GD7w924TaHKPzWhvmez6eVP7oLo7za5HJjKDteAdR9sXYNRpkHNkvDRuvojxQGBjQqTtBsby5q3WNoC",
  "key30": "4ALujrENFc9FRH9fa7FiQDZ12gur1iGu4ufJzk4DhvgmX1z8e4trGYsgaeqLeuyXAqwsgtJbiNw3mHDdQixXypTY",
  "key31": "wjcggMSXYYXsk1NP14Q8U1s1KVMbFenWMF8wTDYbgCb43yBJcVgpnCR59Nh8wV5RQHQTRJd72yQPcB38UZrght5",
  "key32": "2HX9FGWZzCHFMwpdYnnUNsHv6mLyMrMff5QofNL5A7bSbBXW9qJHZVwmUS73eYBQMfkvzJ4k14TCFkLDqvx4RQke",
  "key33": "3WpXyivkHq4H2U5KDA825W4ESSfb3dJEvf3M2a5dD3BLiRXTtG57vmqJos3KxNJS9gyb2M2sS869xCNu4sxvwCpn",
  "key34": "5iDBW3w6Tqt95AZYS856T8LD29LfReyXJy6bCiZ91TxYKfWGvtiRr3RJw9iHbHBFyhfNwPruNCECwF3ggffDiP3S",
  "key35": "B5JnnWJMoNtcj62T17QYR4hLFPamFcERjYpTQu2EfJ1hafp3QWkfVm9YyxbyHLVQQ4ZGkZbjpXov2G3s2VJeTtY",
  "key36": "pVAZydVDxtbHhQzEVvh9a1ZDL5bpsqrYoo3UCvemgECWnuTjxbJyMwq3b8oD1hAw5vmWPT5ouD6uK9nTcnQrx5V",
  "key37": "4urc55Ua2yqvFTKA8LGjTChysaZhg9wPU2iHcVfiUz9x9PJfTNf4bUuxcY3LSUpyZFnRABqNrPy5G2VzcrRhzznD",
  "key38": "2rbfnyS9tyamkJeBixWh13u5ifD2YjdPb84MYZiHnBViZui7hviuDvG3MAe4dJnsP8jvei1zQJiQ9XCtjayeLFPK",
  "key39": "37qC311yickqZ1JxDyQ28GGUm3x6ZkTjaK48fJ11MviNd8vXTrV3ZCBDrzykDkmK1mnVHfb47aF8LMGAmFyXcpYT",
  "key40": "ViVkZhGKw8U1jELqKjzUuonn8zBrzYDvUyDCEer5t94owUpv3JRWkCV3MUnA24LkhfNBLtFqQ7KoiRcJ6zFSqZK"
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
