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
    "5HA5jrw8YfK4ujEaaF2RyXdxQuzox1ys5dKzZa4hCVRWA8P9vnYDE5CsTgH12eWnTxHEkoZwC5YugbTfcEG8AmzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3mPLEzkKXXv3H4PrpmvWVCCwsstVzDRN9oQXS5mnrhVUJwoxryvk1ph2on3jf5t6b7ee4gAVhBWTUK8z8wyMxc",
  "key1": "aLP1zY5FhpsSr4bwBd4bMJdzbWeHLRLxYmhcCmTLYGYZP8jNQExBP7Pny6b2G52Gt3LgTDibBrsHqqK4yRryRmC",
  "key2": "hpLAM3KViDCBJcm23djnnBkGaMnfpZDGHf7zQMn1oB6etkT6vdGb1QaTqBXHA6EEMvyj7FteZbEYGnt6iawfLMY",
  "key3": "2b7RfTZ8SpXkpMzBcjKborMSUzNsrs2qTjycDb9xdC9STjzr3qUVTS4J2HYqwiqfBoKJD5kae9XuXyD7HDgAVzKv",
  "key4": "8ViXWmYpMe2fzt5Zbw9swh2kyzTxMEY35W4CPoDe2XMgc83idPTqF9Q7ghNuQaf5PEvdf3T17uWUAeQqHeRDZLs",
  "key5": "51iVvmSxSnVxQKhtR8RkoXSXfn7vvRet8ysNJXz2VBDh1JH5mpjh2Sxf5KSM9JB547g1L7pQkGdE9ao5ZP7PN51m",
  "key6": "44dYwUViFDaRdMGdHx2iKJ7KtodkPcNxvX5pUgG6s2bb11B3TGxdWezyuY9ApDWEfTVKUt8d4pX2puzurRCiMXBQ",
  "key7": "2ofikz5aaKS5VkeV7JGSEsgXmXHwAZRwFqgcBp472UDQ5NMV58hDRZ9oYoXuStEw8pbzqrMVXi9QxuvkuQecu98C",
  "key8": "5vxGWaRon4Bq2NCKpuP4Rw6efj68WH7sw7epPB9QcVbSSmaLYTwABWDVreuhF9Jn6rt6m4TGvVp7ZbaDDQs3qqs2",
  "key9": "48sKswUjwScFaRMrbSk1gwTLz2g3fioNff2bNN7pT2azCgiVoDUQU9BT6QKkRSvjXP3q7tjh8V3hDRQ36gH6pEYw",
  "key10": "3SR6ySkug3jLPAkAbF3tESpgNDctsR82kk48BPr5pUhGaS5oWq4Rrk6ZvNG9UGi7cfxx2tagP83thCBw12d6kfTb",
  "key11": "5bRuQkoLuzZMZwaQjSjGvEG7byaPPz8SdLqC1P5MAjwbPY1NXkVwG23sc2WmD1AbsuPKir2DptfR5gh7HjdSqECj",
  "key12": "2CYzDWAj3JYiAJkry1wiipmRa9UDfZYwhYkhGcJKvrjfg21Uf5QT5SSitWvz75ApjuhpUBRgXWhppyRxEWKgsCah",
  "key13": "4tP899ZXG15LMSxh25mTZQUKTQCo2G7Pkr3SwemRRj4pRLDNob64zAVwHHQwW7m62ijN9LZBW4j9g19h92ucXtrg",
  "key14": "4pZmuVK6wdaH9euMTUDX4RjEe5mdxVTS3Htxivx3Stnc2YqNEKns7DiLjtzTrq5WY1E1fpji3TnSe1LQHXZEpkZ6",
  "key15": "4bVWhqoM3PU6vWAop1CV32YedV6xPoTTms1dkur12qZDmNvuR5xipa2YgtR63ioSnzwxXNYkZ31mUZcDUgptsmtt",
  "key16": "2zDWU28nEFxXZJ2Zhu39uYPy99EESGf9gmRrCMq6AqFXKJVtzVGaS3M4uH9nZJJMUw6NpG6esr2xZ1U1GQjRZV2N",
  "key17": "3T45GfzeFXweVa3k7o7U2HYUwVu6oDVuWqurpk8QtqxRYyYCDyaRJusxSw1eMhMd9hVU1fDjMUo559nRj8wLFchi",
  "key18": "L2UvXGEdfzjZbkgubMWkZEdu9e635Az82GBtYRMq2LRAyeg8QHat7xhTxYz5rjHw9d4j9WssmjcSs62nnL63aiy",
  "key19": "3h7PgVWnbZkWJE8NZrAy8dQ8zj1ypbjXNjKTxcu6aUNAT5AGHKsc5v8Mgt1ZdNeStK5P75mcPv8Z5jXfWGuLXRwK",
  "key20": "4XzrKMUeWzorr4CBv2jG5EWY9JnfRBEkmmoMChKf17rNVoT2qJiswpiGMbuJKchRMp9CK6TZg5jijjNFGKvSUegi",
  "key21": "4cA786UVmoStGNNmTXZrEqKi9PXwV5s8dc6u6Zt4jZArJPRfP9pbQZpG4kXjmx6Cx9SiQzKGwzzhuHEDgyjyMKER",
  "key22": "35s4KYZASp6Vp3uV6LHDVb1qDq28cbrCurBr8GCVYCLktgaRAm8R6PKkFcbh2TW8gjfDsAvaeviFhEyfroMMTjRj",
  "key23": "2jBbLerjLLKSCKLV3oQiL4EPadsSuUKpdGfarFRk8NtXPNcKg87Bw1kLsDr1aN9zZ4GuELaZJLG1CdrAJnm9YJLh",
  "key24": "4CUQTNb4WdMXAEjazGFqZDmtRpYr6D5sU64VDxWDzjTrBx5XqembRooB8ZL9FwqDdSjifdWt7G9rFFhRo3iMorab",
  "key25": "2LX6fPvqUTV8ZjfYXJhJ6x1fny3KrJ6Yioq9E8qBmEi6ZXUfAkMopL5rsawPCdHLf1Rnkw9m1koFUktqp4mZAD1G",
  "key26": "62Hsy55ArmPF9HgwZuFbugnZQb9AmQxov4RH1DgmH98PuTkEaPfNcruFmAdkczYtnuRGkeW4cc8dfBHQQyRoHnVP",
  "key27": "2L1knSzFbCp2E5GstJQqsb7gsyoEWqFjBME9P8ffGVZRbaRGY7ryDneLbrmxfrvZwPm52YP9BV21AHHa1SDLDAhb",
  "key28": "5YoyrvyMocF7v8jEsSBL8UpNnqTXYSkCmx8SMhV65dKuHjGGjxBS3v4gxoVAEfh8ydkseFK2k9qXjRCBfb6p4FhW",
  "key29": "2mrFKZLQBeFLpdGe6Y8jw7XsBCo2p7BHHCUfb4J9Afnk9rFD7S89Nm3dp8pjNkzTKUJXijhmmmH1GvuN64nUxWcH",
  "key30": "4VSD2i4pTcqJP9c1vcGg81HPPzAvBV86ZR6na4FVC3MXbiVyHXw56PqP7gxTjvRHGiC4u4B2vLb1pZdW9UvEpzFP",
  "key31": "5tXivXMtSV4yZsD4VuFmwQ5aJ1hwvpc5TdeLmTTe7RrV7WpHzKXF5bzDAaH6C7L14AcjTE3UfZ2K2XR6Xt9jqc9S",
  "key32": "41Zjp973fHfLSp69mpwibQc2EQxJyMu6gX7xohqGkKqTnEGppEE6apbzyNp4TtbycnDy6gjgaLSXCZ5zighuqkKr",
  "key33": "LH9xL8bFHarxFLtWHadz3wkX1WLpsZmTy2VumxZoYe2grL9xVHMkH8kpKjigqnSg6THSCBa6Vq5eYFxVcqvb3x6",
  "key34": "5PYJ5r8UShRHmKxyiafYVPL3Jbv2hSbyFC5DKf7zFfVLm9PrmFax9oNdUmaBvqZtyLUeEBFKxXXg818xg6QFp3Cr",
  "key35": "5UiYqMmdrBSWnyuYJ2Hcwzp7zARUo271L5HkUR7Arf62FgqiGwybXvsKxWTkczMQYkd6ySRsyzvN9DnJegYmFqhg",
  "key36": "FEB7e9TXSa2kyiAnFfBzsgcpFNRyKMboBFTn9PBDzWUvyk3r83ZhC7i4rBQBJueF3XZLdNogWfd6BcA7PX52q6X",
  "key37": "5iNzwj4DvLdowyGW7M9F2Z5L1GVXy2yocSSduMtHj3Mod1Qkd7EC979dA4x7t15NGL7YMscc3KbCEYYjjTzv9UrN",
  "key38": "4TbWVWkKtkJyDCDbds15XDnLtbvmKmsRAhm8UBpNwnJZDYwAWXyv7yAxDZguBbqhki9tQ4itGw63DDvGAFNCB3k2",
  "key39": "mJ3LCoUvAi9XQ8xp3mECAiJWq6oUdFruNiZxNE5vXybHufBjqTQhEyeqdrShWwGnkMVPLnnEUEneXPz62GD9bcE",
  "key40": "4hFGtR1iUhqDQbiEt17jiNwsf2XkxS5yjSgxcJjBRyNDxJR7YobgnzRxKSYKRoipzMqhwycr9LsCuKBpt9MVcNtc",
  "key41": "5zzfYKxxYhsrKqhmrAsbvP2sXpdAg9eQnwYQ9ztuNZMGoP2gtz8bPNczkLCzgNL7XnNHE5m72KJrw1t68UTcAdWr",
  "key42": "eDJMU1dGJfQsytGB2tEF5gVid37nhEpBShb1tTdZFdUnNNs2c3ZB9gjrRMVf4uCr4e1bkw95W87PD2zy4LBdujx",
  "key43": "5QqHBRF9qhSGHEFTDAYDQrNiayVYjcZwe1SuuAioPeK5bQ5GpyFGaK2VS1N3Vxt4p2QnSkKmGJdaAnp4agFErBsb",
  "key44": "5YdQz8aNxUz9r1rTHhDYxY9CUNHJsb1KCzUqbKC1M33g2QCTMDE3ucKdHFtzhKhtT1oRpgyBRizArdBd9JJBnRXs",
  "key45": "52jej1dcqemiUutqnYvePC8AJUh92LB3f1E6zVQ1btMg2KT2pXBiewoj2dp82cNVMwM5pF6TRGzCvei3EZYDZQvi",
  "key46": "3aNoxmMkhXf7qu5Ek9iHNhnRmSE8LqF2t4hyWgeVTsQQ7EBK7WfFL9oawGJ8gp5fgP8DSQn7LYUz7M5ow3cinMft",
  "key47": "4brPatjdTUbfmFQYt2xNtu87zKT8oAheE91cxcZ63HE6V6q6o44DDAXtQHGWnGhFMUt8wyUkdvNwvnfwsDewpbMm",
  "key48": "5ewqVgugTk95ZYYYpyn3QM43xayZY2eSfn3eN7MMNrZGi2V1hMHFSDRGzEGhc9HQxoG5H3bSAbFXxDb3oVQ9Z3jH"
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
