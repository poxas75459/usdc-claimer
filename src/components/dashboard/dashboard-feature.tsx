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
    "fyxXvyePuJKBzNAZ2mtRAKDackVkMdWJ9rYiWxLFXZSL8FYr6sumAfUB7976AetaAY3VwGbDZ1y7gH3vtzN9tZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ruN9o4F3Rp8ZSB8tH9Gb4GKYHnZtA6p4BKd9JcJzNpbxZTyoX4zDtfyeHbUjWWcRJqKfC8tV9pCtBkNXkHmeSho",
  "key1": "3shAnzq999LxvLz7R6tu6uVkZjDkKACvJFiwyncAuuvbcNhvWB1zhMY6c3fB8cmPLJxuDx9hpDoBKuwMu6mok4tR",
  "key2": "qpgTtcHbT129yQvLo8Bdq6St2vjc1xLJZArr3M7NbGTZ4yA4rETMNHRVn9Xjg4yvwHRbMD1y6TSHcZM2Z8EaenR",
  "key3": "4QWtxsdpPs7pcbBJoFaAXkM9U3mKtpvNfU6SMd3Q3d6iU626FLbvSNDS67kG6veRKLb859NjHbTgVAHDBNme9kKu",
  "key4": "5LrXM1yuPCnDmtp6GhHGQkApJNhFCxBXaiNkRgb4tep38Z1DEnXR6awg3AhcL9xDp99QrYkGbz7HihpucxD5noZG",
  "key5": "4Anuzqko6mPzP7wihwPE5QeNj5MEXTVgyzDQPcGJuHYSBX3KqJw8k37y8cd1BRbJcwxnvhiK2uHuGSZeXZNNhw1Q",
  "key6": "67c49giTk7gya7ZQd5NrdMmTEXDHjQhUcWTtSVweBZUWp5SnMdfH8zJ1foJdKwtRHYfhoNZ3KPuqjnuSAcVk17pb",
  "key7": "5h9jZxpfWxykTHXDY6ctdvbeeX46z77ciGz96ksJGXCpsCwWLwgJDPJfwgrtYmJDBGsyZbsRk2tJFPpsog46pUm1",
  "key8": "5UTZzk4rW93SfVPmDoB1qFduwQGoKwaD7qp2EgwyQmXexu3xfw7tKdgpWqiTHmZ7wrRnXgpnGeeVUkjTwTB6RvpM",
  "key9": "21otGQaQaksrzzm44Naw7uFwpLPw9wuxPjMnfcRptbodKzPfKTZ8kHtyPb9BzwBsfUZAHtmJ5166JFWzTCH8XKXJ",
  "key10": "5p5ikC2dUUHsKuduU7V4SCViuVznuARScMriGZKKGKSyHF2Hf7PPvMm5M6qgDC36RcjPMPpDf92UFEQKxst6E9cf",
  "key11": "4vZhTfgaUduKDGJTQMXkMN85Quh3VR3zsNhxG8sFkWQSQKPX78xss9CkfGiV3gTYxXwe9xUCyczHBsifwtWTp67C",
  "key12": "5gLpzmhN4Jq7RLCQjWmWm1eKCRZLEm9gy6s7rezDvUDTb5ZAw8kAdr63FDWCFiumBpcwsD2jfiR8FQVZqHKymkWd",
  "key13": "26S76PBWj9nHK3rbHMP8qZwERtd3rBaiomePQVoatmNYo7xZZRHGy7xxNozUD6khtLuydpYmMV4w67bXZBWhBTeW",
  "key14": "3XgUkhAxs43HNkf6NfpDLUc25j7DvQmpSbYYxBHV1b8b1PHUUSDxFGgTPovkWfhdsDthd3SttzFPMgC67mwgRqde",
  "key15": "DQVZAHP4hZUN8zLhHyfnHuEKMfCaYzyr1HC5ugaGWAcputHBLm5PPTpi9wu2qXQPt6Kb2fk1zocCmwYQmCQisGk",
  "key16": "5HjCp2bdHmbo2REnzcKZ4W1Xk9TSffunLmzg8z11ghGXmCEreJPJaaKtz5EgdW3XUyXCvxHermjQwQBHu423M7nZ",
  "key17": "54ZnFujY1SbgRgJ1b4ad6dzTgBfhH1Vpu1WnSSPPL4mBm1sbMFppCHjZi4aboTtSFsgRAPbgGWCCnJz14eJHsNT7",
  "key18": "3D2Ghw7cehZsNSpcSpMZ6x9ASCdJbEt7HSMxFnbxYBy2fCrCB9mtRJNCfoNgAuX5H3BHDhfZfCuxrp5qJ5VTR7en",
  "key19": "4GPQpyVkLRMEjtAgwxNu8AuxDSL3g7HHzsosU9MVvUXApN1XVkqeSr7dXCGieJjJX3aw584QXznmdFjmdeQAQpTy",
  "key20": "2NNG8DC7CEhidu23i4mZvk96EgbZ1hWZuTgZNuY8hQzYnBJqyr2xKu3Q8vr4PLWrJtz4WVzVdE9XkPP7U2Q9Kiud",
  "key21": "SoWnrdkSsk6hjKJ5u4pYGfRqxQJ6Lq3Y2dbWR5Y3Lrk854ewzuvKgbAJz2fL4B2UsNnAa8tpm74xT8hiXBhFTpY",
  "key22": "5pS3QeFyZXfR6CDsA3hUZ5H7o3KhMcYjTVxRhxFtR1zNkPDtNirLnJUgoham7LE9zvzq4tF3Hj6cV2Cv6XLKxKBA",
  "key23": "44pvMthbx4xKqZMeD5wrtn3C9tRZmq5x4AyKdNT2iYwWKiMveMCF17A1EFBLrQV9ygYEpKKypKjrWGaoUe1nvcHR",
  "key24": "48APwSxPX7Zucfc3JTSh6fqfNu6Pu6rcxHwvn2BCyWfwvcLE78qDEaJkZ7ya7EPA9iRnyrGLm4ZA2gAcTq8KFkkN",
  "key25": "3FhF5pu4WcRbHMxQhNGi4Q7Xs3GWzyb5zLzUSinnCyLxJ3Ee7tc5dvf7wMGRANEYodB8yG3nw8qChomrAR4YADd3",
  "key26": "4Scbtfx8Dupdzpud3breBjkEcb8V1FWx2HiudnJbUFSfKQgNCmxfKqr5kqwLbUceRUNhTeMPSWdkVwDtGrEVh3y7",
  "key27": "3soipN6nW5Gmc3MLfrM1LmL9CqrWYJw7oNgUMps9SyWkEjBgWdrs62mWoXsFmaZvebS3X9yWgQQLTmvLBGt3VTtT",
  "key28": "3BGgAfpJGhNKbdsGYD27G9gW3eG72dbHU4iT9o4mqmkCwAKoQjcAqtgyfHjHutxuVpceeRrDxqytaHXNdkc6rfKt",
  "key29": "5tNpmKAz7HmH9By12L4ZzGb7AC4wKzNNxktJaMYEFbCFRQA7sX8DernonkA1ZB298rdqxfZLGByABQRudzoKvXBv",
  "key30": "5AaidQbnHVzHvboyM3RFvbPzqFjqJPQhvST4DPbHCvhPEjGDRhs35pm16GCiT8EQh1wQ6fdkPc7hqYZLVPC8GVhs",
  "key31": "3x3eNyLorcSAFmky89YoPbA4HwR8XBzfTEUqVw62DyALCbhCxdmFVAY8wonPyWfZ2m9CBsywr931t1pGg82vvFGp",
  "key32": "64wreqmXZVYqSHQmtzGofWFKcdHv9W1AM4GNuX9X9gyAVvNUngqhaPZ29rzLXypGmJWNC4SpcGJ6Mn8usAVqZWYz",
  "key33": "kAkgB3nuJM6tkHgoxJUV5zKpJ7rPANhBg6VkxLvUQwa2RJsfWXEpCnomWrZkzpTvXjtBFcDSP3nL6DfGyXrC7WT",
  "key34": "5L5rGjzkbx5aUZoo7zciU7juGinvJiMUXu7PPpYVC7MkNKHLMvHQoH3qZ7RLeHQFtqDaJHYYEHsPGPXp9qjkU6kE",
  "key35": "2JZ3o8raTttgFswsX6x5bNbBU855E6MqxgSDtPoqZUKkcqjBc1LxgMVZharpBekDQSvhH2yirpzCrj8qiWzBXyH7",
  "key36": "5GkBacCst3SiehFgvtkNpQJKzG3L5NHqUf3c2U5DGHZszvCSCyKuEVdcrky7CyPMcAY56ZtKGD5VEk9kJLL7mHTk",
  "key37": "4iXdLrC8fLrD7XtUN1Qp3cGxFWa2ebaEpnVBrJCNKDTVfywm9CHkf4zpqJbtuoCcmKraF9vN1zTSrJVTnSc81yRJ",
  "key38": "3t95h2mmmyH8R8BTJ5YuVD3BfgYhgjSWuPY3yD7Np7MQuRCMaZR3qqp5ggSR5xpAXbNu9PfGCEg2Aky9GULrbmYX",
  "key39": "5QmoegfnZVuTZEU47bQ92uMULTHrYzx7wRhw23ZwerRiqaXTmLb7WT6mQtJdgDVR2gR6JYofvP2y2RefJfuUHccT",
  "key40": "3rur2Jv9ABVuaPgAHGLg7g4RLLZPmBLdiQ8gLEN6Z2yDQ7K3P9R5N72yEbPLMvkFJittxdpEf9Uj5cSb1nJiySGq",
  "key41": "3N1dDWLogVXxZJwYpdjZDsUBc5VG3kNU7xNTdS7jS2zbDDwXxQ4oX2qRw7V8b3gmbfFw2S17Xc5x3HG6D6qESHSD",
  "key42": "21BwL7KPmFDDUrKvNXSeQhqkJG2iW9cWTKD8zVyWN4oH83LxHX3CPG1xFzug4mPJQBiAPGePbhpkrTUmuhe4aWWw",
  "key43": "4UHrXm1CVVSV4jrg5PD7txonFz9F4poc1AbausoW7Soy2y3UsNrcyJmcfzCLg6eHBoDajZV4ywRDmd4GP18bYGyU",
  "key44": "3vY4ztbFkPPJJfgDGCxC8noFWM5HdDnZKxcXC8i85N51zmmmPidb4kxdfPvJYppgB3HyQjS8FqKETEjxVFv95hFS",
  "key45": "QNchyGPc8fVgLP7qdKgn12ztKw6uR4EChxT7nNeXUw3DKFvUB1AMZn4YJcQwwnppRvC2mB35xk6nFs2sJV1aAyw",
  "key46": "4ew3nx8T4zCypv2pU4fQSEgVcpt4JZrvJVwaV7Rqbe4WvDNyco5Mm1DYCdURVT3rx5FAE2AdXh2YaqmTyAoaQmH9",
  "key47": "3FFvRn5oCEnEjXuUT3Qz8NsGQBmpDK9cSifxSvbip4PqfWXmRFVbLyXNoyCQZbNL8inoXMjvbnHq1nQDDJ3S984x",
  "key48": "5vyxFgtnHVmRCn5dtLFjJUs6az3zqzYSAyibzBQsU7AdhmCvwJpbBrQqwChFwVHmvLG95hLWGocVcEUtNoNnhnR7"
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
