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
    "cPFmoDidnApeZzgh7Nzw6mNksAoFRvA3bAQhJWA7DyNPH8ZPtCWCapuTSPKKBFKjXSK6o6TCLc9TLGzfh41ggRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9QTHSXeiKm4S3rEMPPzsTitnqR1tpuBr8F2zJ7dj8NHbt8VkUeaRpuhAjH1TZfa1mdq3VuCuNbTsAXehoss61y",
  "key1": "RUkUDo2q9M7g8QY6yUBmiYdV9hCFxnUdD8KzZ4LDfUhtmfNxe5USS5JFtpGNAU9V2Rmp7F9VSiLbhARc3hey3Bf",
  "key2": "4QnMBYbbSLbz1RSHe1bAfmzNVtZUoYEvY21zXz6uZ6Tn3g64Ea3DKdQAT25NUyRdxdVeviVMHXg9BGAE77UqDFbQ",
  "key3": "2SzbuxYNc8yj14p2TKKJyrP7Y5XZhpMT4SxTzAb3SU2P9KQvmzeoJZ4RJfr6mRCLQusck3aeKqXoYSeGQ44u7cDX",
  "key4": "e42c8vy5G8n5qJqfGHGDVX5Ajk2kjonumU4JBEjC6Lgv9yN6yxvnYiuHCadNuTKY5aqEG8XxrQojUbDeSGQp1ja",
  "key5": "sfAaZ9TqyuAjdXZANh8rXKh653BZr9viD16WmCzCzvTL5hUyjTTMowMrDgmUjmbUbe9ZCKLQF57XdAyfpP5sMJY",
  "key6": "PePgXchA34SqV7oPKJpYLfU3XebYQvVh5fNx6isuJptTcNrqSaMLM7SSvQoPU8GLBrPr4ubPzSZ8Y1sn8yrXYm2",
  "key7": "ZkGFxjHv9q8QpAFkKRYmGLkjkQvGaybg2MX7vjPUtDhahvqjGpfxF9iNm51CRRZC2Gd6dvmUHy4XRmL284V6QLf",
  "key8": "5gm1pmdYLTSENZMn1sUTBiPVZrbecWdJ9NAJQTdnY7Ns7mi2acHf8CpHF9vqu1DHWGaJND9rd4bAjmXwSQeG18rw",
  "key9": "fQLPiYRhBxUjm3ZH8q2XFveysrum4UNWfiq2g4iGFfnPwDFg3TyZamFu5dRnEG11r3uaJQvEwosCk9KuS2oXEiZ",
  "key10": "48Z7VsTxSPq9q2GU4PqJcLUQgbKyDiUarNg3tQvqwgG8abHpFDfHeS4ZbZPjt1o6Hgec9w7St8Nru1iBewvRz3ca",
  "key11": "3t8uxPeoHnE5NmFosiogmBL54ptiVTUbgTdbYxbLKBeTfpkJ9gEizNSU2ZPbBPHxW3yArbgq7VCLzi9FAhkYsXTq",
  "key12": "5e9zBwPTRhyzVdnnGmsxA8WGvqrSYyAyZDwCPyntjkAnDcLWLUkKzwcpj68LAvSvruivkaGnZTxZCH8Znwy36YEU",
  "key13": "4GtUWCZnWDABKusAKPJFZ515dC3jomphJ2ScYk8FiEKqegPU1CHaSWyLMXvSUJiCXhAo6AQoeTbzFtMttUaRkzR2",
  "key14": "92Y6NJGiJG2UWvwJKsuc6fPkWQtH7vnHcdvgDnpNSxKidDtSh9Dvmkp91Rnh6PDxMoT29LppymKnvQo9f4jdsjP",
  "key15": "apsxmpSnYt4uPoXgygqmp2JtWqGD5ai7k5pB3MDMtdFXf1bJrD3nfn6JcUGGD5VHiGwD8z5f9iWp385nZAcYCuR",
  "key16": "52TNmizyJfyhGCiXYKL4f3SzhjWRPiAhJu9u4HSexDXtykyz4g9jTuTcjQpqMMPzBXjz6a3VX9QyG51YfBP7VBrN",
  "key17": "3RN2tycVFamGoMW96NbqAT1T9Q6bSHyZ7FEVv9MAvb12GVCcNGweVz2hk1HWZw1aVVE9SVkpTY8o7hJUVeBZCWXv",
  "key18": "tiGZ2tBeh6XbsrXajdoZ2itx3A1eg9S7YnjJ97t3trrE7QgJSXZDrtd6CuzZvza28HFhvzhH8eNbFKa3NjTeniY",
  "key19": "2S1M6Fa8jWdNdUJS2UeSmhErgN3cLEBLhjnNkgaRnwBSKfDcvmYaG7y93NS5n18gJ1MPjTvZ6ERqrSDsahBxiF6g",
  "key20": "4RCdBA91b8f3SggQABhBstMJRj1Lz9PPDgDysZdiLG1oMi521oaB1Abppvt9n76UFPc5YHtqsY9oC2fMRHf9iV9K",
  "key21": "5VCctnKvh57vJHn53Dr4FLuoo12qBEhNBiqDxqkvFzGJPqUM2Fq2j6Lz5JFUYtsQKNkRxhxKk7a2HpvzP6yQjesd",
  "key22": "3t5XwwtzjwuxKVxbZDaafSvd5UkH1CvyiGSzMUuX4V8Ns6BgJtVYSSx9LeQmX554UH6tuzk8wiFJdmgg2mzEbkUn",
  "key23": "4A89PNDFFxLxxRHms16nrfM9kfETbmKHecPqAXmkJ5J7LmcY3FkxPqjPzV34zNMwuS4txqe6YecfQmYpy1D67kqG",
  "key24": "2u7NY7X3c6uWxonAoFwNXbU66Eki9Pd6ZG5HLr8j31H2d6KEyQSXmJs5BfHyj23sJbq8sRfzGSLnwudRQ56dx4yo",
  "key25": "4kt6syCHj4qGT9iJU78rFTvZmpreADRBWA9n12HBxJaPrpafp5xh5B9uUXiahF6nvCsAUduDZ3NDu2NK9tzV6jud",
  "key26": "67dxKEafUVuxLjUxe6dgxjFiv9vbjjJCMPN1Fpw33WbCL9tRqTN9Vhku1Cw5iLsBkU1L8JKswCBXqSR94iZv8x54",
  "key27": "4d9syjopapazUpkLD34sJLWJK79oHnaaMQfYqpTPwNKadHuubXXu8pBRyKfPS3jpvfxmxgYqUo4BkyrARUtk555x",
  "key28": "3opHzLmeSf68cFN7CbQsQAVK45gytsTqRmc1vXtsH6PCY5Py7eGeHisRJZyBN8NN1o7zPup98LynxsLrzJqAfhqe",
  "key29": "Fkm47H7tD6mZMAYpUEChUrk9gWLA26yuiRUL7QDvuqaF3tFgfw24BqJntdtmciSdjP7aVpTCcWp6zoLLqcxavU4",
  "key30": "vUDofpWzoqdihnVDjDJB49bEpQhtdNaxuy2VCuxQbAEruBz1ySmPykNqP5eMzTV3rpZhe7REdDpNRPrrM8CnSKB",
  "key31": "2fXjdgwbfNJ5u89LxtQeL62eaFXZQyN3wr6nrFzJnvbjbVT7mht89Bog7ygR6DW4uLMV1KSYhVztATrghAZkJECu",
  "key32": "53FaGEUGjcokx3pkFRUoouRrwoTenFmLdiJAw2ikRsjKEi7Eiu5rgteL3N1n66ooAnXHGc7s4YbsveU65175bXRy",
  "key33": "3Ynmv7GLoxVKt4cGVT6AX3czkUYCaJkWKsRpFt6jG7vskqfp7ZoJ9YqJyL7BEb9LqEMMC1zqsRBkXHt89amk38u6",
  "key34": "4aFoTq2XZw7bSGskF54yAZBfPPPrGULsXGXt7apKdFzn1eTwjrNujVrMhJqYfyYEhQEyDQpvd6sKCNesEkaGGkU6",
  "key35": "4kmDhpRuKtkycwWA5oTusMvHXV6E3jnmFg7VwTJkGZjG2B96NmFY1CXM4pDwgHWcs8xzb1oRdspUSWx81eU3DMsj",
  "key36": "4dWdYdjERtt8VdCHjdn1vjaac37c8LHeZqZ8Y5Mc2ryiiMNrwSqQqmmatrgevZ7sYL5ps5P9AMBgNeBEDeF7tyYV",
  "key37": "2bs39hUxFjXih42Jhw1iRXSssFc9X7sCzzDYd2RogzEewFhc1YCozhS63esT1MbrAayfMLqb91FheF4ofVFRSSfm",
  "key38": "4Nu2e9xSRSP7q2eywkgFbgRKtTEyRLyiBjVeGjLzyafHhXbEDWzRaNrcFQueJBKvKi7RNdq6WDCQAB5hoJaX71WX",
  "key39": "2558PuzXRhzBmFLoL8WQqKfNCmXACRiiUM5EVSJg9uDhqParomNSC4bZurUMFPHCDZUENbD7y4YisQwvgqZAU4U7",
  "key40": "361auMmqgswx6Zx8jGcpKetZyZzk8aWDx8kGSvxiuTUPnMob6FGMGyfYyChx44j88hQkJGFr35pFmWep8KDu5w58",
  "key41": "38hEacH8fQ8rfQkFQWBbAtaWr6yXX794csgQVu3VVy4Mo3znXFRzGTVaYp4cGeDi86nK4MJGNvTfDXvi9t2RvaW7",
  "key42": "4ZgQxxgXTu9897GpQ3NJipFdpwinw85J6yPKsHUCJhAGTeaLUXbu3LKQjCqnihedJy75bZVSajBnttqkvsczBtcM",
  "key43": "4bQbUHavx87e37RbLpi1Rm7NcLLmMdU2bapmd4hBGg18WPtHHHtTyYnuN17CLpmzkC4443LxLZBcGkW4kiTu5EJL",
  "key44": "e2iz5F5q1R8HdmCvAtQyKBBN3eGKyJDEwP5dkHw3EeafoWLvfJBMDJudijsWYoJgpzqRE3gQ8sPdvrvSXV4tSur"
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
