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
    "imrcp3MAvQxmyW8JSpdW9W4SZP1cPjACAYve22UCTGaS3ao2WyMuym8ggaXhhmcga11GmTkUjkwjWtT7fnu6ZoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4tYf2h9Ti6RKAy3ofs4vX15wqZ99B3CHad4RPvJYt6ixP5wBPrHgspZAGF8ZL8Phpy5TCSf9imGJ4WtUDBBXd2",
  "key1": "5UX34i3vuZeS3NXJnPC6rNKbvW1ML3JnfeeB2BuEiXW1P8SfNAGYamdyiex62nexFV2EnsVYFf7553HpA7kyBSUC",
  "key2": "5odjo97Xacer8Sovqbq6cXi3JE6ngX3deHxJhsZXBi5XGoomwRprMCeZ923zyzJPemkXuuesD9Z3DSePwMuzabDj",
  "key3": "qPf239QsigVHTgZrjoqiaRwboaokcCZG2gUdsYcpDLPMuvCKemreX5iM9dRvFhMXqCxdUg4MAmG9v97gxLs4n3a",
  "key4": "5FDYWfbZvK8reaCdvt3x9Q2hhUEaecn6sijN66DUxgbBeGFSUeDrnd89fuqyDFF1NRQmMAv35MvKMu2WQSzF5yfv",
  "key5": "5ZW4XgVzTPmxfx3Pmx49t4xmd8aZQAwe81aSD6RFcDxxzZ2vuvC1zueSmm7F84YtbMN2RXuC7xVQbE4Z8EXQbWAA",
  "key6": "3h9Tc1ZwpiL9qVnSHFjeo2T85B7ufVMUQTpjrQ3waJBnERGKLMtDTB5cFA1dgNFK6gM8CU3Fp4WVyePFDvdK9hK6",
  "key7": "NNMzexN65AMkwpQaYTtbhNrnweDsWM4fmrGbT2hd5NSrBrvoQgobQqdBC4XSVATH9Uh1wLrwGHtNoMZFq5452yG",
  "key8": "4bQ5rkq57Qe4SSgc1p4XGmm8J7q6c1kWYmRhd9NEmcmcvCQtsia3rWUtXbtSCeZoCkbYdV4LSknwVHrotW35YfJM",
  "key9": "3LQPt2d1Rrvb3Qm4bfZFBsiwbdjTkDcnEnoHpX1JwwrsS7CFNXEQNLyHKZiQSCFGjjXNScnXRFq13M54jL3JEQ6K",
  "key10": "4q12jigKzNeLojVgpc39so6hRDAxy69tWXURFVBzP1Gvh66ffAfWH8WCL3qyZqWfWrCx3EDCvbcuRh7JJoToz57Y",
  "key11": "5HcVk17f1Cfadfa32deZCFTDmJrHDhPByHWFzvtpcvAm795jGUtp7J6Pmwh7Ts6FghEPnwioaRcE9f8GmxiHH2cP",
  "key12": "qR5ekSSWx3e8ytnNnpJU9XzrNgVtdS7b6i7gtR9tsEazAdtosgvWURkh41HqWFRcVDbqWgoHfc1CFVPTPi2sM5N",
  "key13": "4St25qLzSeXESMEy21J2fmR7yZb6HMCjSPgE1gvjMojnoWiVca9iv3ps6e9QbVN6Bivx5njGt1BUFUcS6ZPSHgCG",
  "key14": "2hSPw3h3MUbNVy48tYPPsSUhHRJrAo1Rzb5KGDVMhw57ZcJ4xfJU65nZCgX6PwuGQhkKxDeHUL8bxu6eXksZunbx",
  "key15": "4hDrkUj96PJYbp36js7aQHWWccTY7q8GdF7D7yydU5vzDmYGvMhG4xJpABuNYEKHytHxSW9APqVeuz52wEMxUnvL",
  "key16": "4GuW1eBAkfSb8Sgj4eDotvs5QEUKvNBY84K2kQYtwZBCs5VvkNYuFV34xqVp4iKzXnyakGstpY1dHtUkSTYSS68t",
  "key17": "5xGwgj1AH4o9C6cHGGV3KyeQpvhMiAkjAdQfne1Vex8YwJquCELXcffjWzoMC62HqSYXuSwAiN6PcQXVmLD8HWd8",
  "key18": "5eaErw9s7YCGHN6vzAC2Z34n3uo7pdUMQHFN7yp6oJvWxxVpLtfLkZFzien8BBfNmy3xZtRZ9D3UadudDgPP5Z2S",
  "key19": "2v2NZmXAYC8uSMYLfUX7DvNqfh372gQ1ZBiNVGduWCpufG9Pu2L1TA6SsW8hZw6iiA76bV9NskmLeMyRaUnJx9Ec",
  "key20": "MNsRUofE1wgXC65FEeCMSXo6KuQ9Kc1zKUbRGpJFcFznL2L6GpqE9ppTDkTBKjjpnqH6coa3SZnssJeaTt1D4tQ",
  "key21": "BzTU32bQG1mbMhqyb2NyCtLMSbNqsou6NGsjhVWFShZ4ZP8VbxosKMgbBHfyS7kRBtadieLt7sJmRbRp4rbFf1X",
  "key22": "5pJm8reyPB7KPZwyKZBp6g7YMBMzmDjmcndRJ9dhTNKyaVMNmxjeJyMhpEMzR1qbMkWGdb2f7S9ZLtYnmgDbo98h",
  "key23": "2VHwwyYxRBS36vmxRKSX3EZYAoTx4ggScipNM4JeBXeQTKZAjp6BbJRsRWohBQkNgTXdeqA8N2co8iXyWyxriAoM",
  "key24": "3NjuD6sbiNkNkWY6qqVnKFQdnsC9wgNcFyPLqUnW6tVf39NPcgoC5raEZwLJpW14ty3QbJsMUwkzfvPLxGs4SUUY",
  "key25": "4khGd99HgmT5jJr6J5vtmJ1VQi9Kg6W3q3Pv6SB1dkndnB15W9yHX3ieRQTQtmMPbkc6U4Zk8GdJtQRfcca4h1yz",
  "key26": "4c1qJebDXLm8G2oNh41t59tPzYZtKXAkHaRTyrkmcNgd7r41nDoUkhKuNPrQKRxUquGqc359Bx3iMRYkABJrNueb",
  "key27": "2pr7PN1SHKLXgcWtThLigtETh2ZBHjZ4cZr6e64FMKB2w6PjbxCfXzK3v2B4GJzwwpd4JoEkkKWWPtNcNL8m5hpH",
  "key28": "6jBNym8Eketnqj95pz4bWTfx3DgvzYSFCmquHFkz99vRkjwzeKfNH78j2yrEPfzahD3xSFEEDz2fRvt6nz6LnbS",
  "key29": "3JxoP7sV7xPwvVci6RdAWtukZkSxERR4rMtCKYtXaXphnRvXX9iMXywnDu2kFLTofj1vd3YbZRPwwS4cjFMmsqPV",
  "key30": "3MTMGHVBHCRYe5tKQBz8Fq85m33UVaqXinDi95dvR9r2tD1v9JR4pnSRVDhDYC6ceYsmZcBxLjfmmX87Qace4WPU",
  "key31": "3jkaFGHXMXBh5AwsrmEy5U4wJuBopJtHnG6DnDoX7tqp3NLJeaKHTopZ69iXUXpotbVLoH8b1KNfq42uxsTwoBrK",
  "key32": "5j4ZgVVnCfvUpRx5w2dQDoJMmkiAadNJTCWgKzaFWFeZeZenES6mmn7zZbVG41aZxgibumcGrF8Eu5LGevpY5NXX",
  "key33": "29VqUqX4dYZCt3yKHogAHGLfv4gfR24Ya8NrZW8idk3MeMWAyomBnzELXMvQRHgU2GkiteccHtnNPnUbJbEPSxVM",
  "key34": "4FPb25QSyJADoYBqKxnvLBG8XxEtUbJ2QcKyFysNcJ6YDivvK3Ntb8VcQucz9uWX3jg2MC6sfsqAVJnXSGj43m23",
  "key35": "34cPsLSLDkvaxDwDzkThUE54y6JiNs3d9wxdntxLP8wHksyBAeCrfWv9w5HTfuTKTtQyFTYUz5d4bERk3tJURC6Y",
  "key36": "48Ggy9qpMkGqfi3dg5mbK4xdXP6UUBWxkofiZUGJYQKBUDQGtrBJMfkngaNBgUwaiGAhBHG3LbZRZFK1QQgKuyjh",
  "key37": "4e9WCGz9yK1vH1uWLb3DHToPECWtmvFVagoFyarxXXzXXJNDXAb9erfUjTtWdMvfYDUUogxBxA1C4ThxmaUEpLdM"
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
