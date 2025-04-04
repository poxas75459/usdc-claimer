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
    "3SuTqrwrWRUFhGXSb4hLExzjkSzPhdtH9ZGh6sKhwdTBpawDat6haZGCxzyTv5YiY7wjf5w2HvvVg8Sze4rrJCV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z9qNvoAr5D8sUtZm48dZdREyKje3x1eN5dWi7jMn5Hxxrs1iEFWxm9WkbfRJZLGasx4bLJ872Yz8Afs8gbgYUkZ",
  "key1": "5nEocYjh7jmHgPgMaMY2biDvb9o6j8S8HMqjENns9GnSejKgxjMYPwC5WVp9vQs3u8aYXPRnkDmNJQwPyTEt8h6L",
  "key2": "RBY9kay9kB3255H8DoqqRMwwv3CjmqouZhmgKQ1szWX7ND6M1vksKdctSULD2hrVQcvPbtfsERuzSf1CaoxJkRc",
  "key3": "5yPFV2tVmxS2ZFQmct9VKohX2hcvDy4PRaNxM92RzHChFXwPAswU862yqQHXDCrpGwzcHjrETkGmwnGyHA7Aw4gs",
  "key4": "pyEbNFDxHfw3KGJFGH2M3tRrdd8bSFKj3nJaKF1yJfmQ9AnssgJs156arae4AvqUhBaHUjCj61d9GdSP7Dpc96A",
  "key5": "5djDX3C7cpiF8fg1UFTNGUyoRLiWyCUiXiJWSmTpUThK2nqjKEZoDoyGFHmnLmzp5kJbW1Lnz4MEF8XNodaiv11T",
  "key6": "5f8TzA6t3LtiXaazpiUCbW18HvE757iGeBpfTE3NzxUSfiuARVgBFvLRXGrVfVcErozmhNtiguYKH7HPLxToEtfU",
  "key7": "4vUyS59FWpPkoetiDnzxwWkpksZP4ag5yGVYc22LJLEP7oJ7pYrCDPZjwLShaPUsQZgATyiaFUXtf46CW2xwN4o3",
  "key8": "2EG3D3LWL3cceTKtsfGCqrm6NdKX8rhZ9TYz25KgwREZszid8dqPiFt1kZyuAERcLWGxeYzX5fsJ3d5nVXKcKVas",
  "key9": "46YAs6VD7W8peXd2VnipBoXFSi6Coh5NcDJmUVxDAm8fNa3C8ejqJDHniCLVz8M31zvc9ULgHx3oJ2nQ5priBrxe",
  "key10": "58HMrRVqWuPB6zNKGGHGPXZePN42tznTmAoKe5CHHgTv9siJFskggj3bEXoKAEtwo95XEgNBU1UFSLEAzSRgctJr",
  "key11": "5yonb8TKVkaWBKbUeKWNfb1HMAGLgTXQsCYqM5hLtFAPK8xb2xNigCeTkAtY9nYxoTdaitNAAFh18CQAPSpFAuRe",
  "key12": "4XdXGsDQa2MtqZUtPyp2Ls8a6szJs8bEKE6sTD8vA5EL1SEjeGtHWiuvbVr8RQfBZtd7rLdUzsw9kphToWzRM8jh",
  "key13": "okoMqPk3p68QzcdjwDz2ZSs7fC4mqvrVwGWMavdLfzmsVKvoPhkSrHWCn7WY7RPkVMzy3862vfNm4mYbhecBTdx",
  "key14": "W7j8mom9PNm3FpniSkXvPzXQivXXJEDGoiNTXNs25MB23gTVKQKX3vaQXXnUzsoHnG6qCAmu23W9LbknyTCwR93",
  "key15": "66FiEgtDwvnLpHStfT8B3wBRKRZJTWLT1Y2mADXdNuXGtE4H1n3pSnJQkaPsKnUiYyk4T7pB9PC9D79gw4Exxy7j",
  "key16": "3GsAn3cMNqqth2yzUT33hqd3uauuZivN67TEVVznEifZ5tcPZAQtxXiSLn9Z8viasMiEpzSuHDKeFSAXRPQaL4qz",
  "key17": "5QM4gDWUL2nKKVkx7zLgZcaT7yDAF69riuHNVSePEBYcUX5RnceNtg4yZzCDZ8smRVeEGzpCKVDfpkNgizyawCj3",
  "key18": "TCmuzr4H9LeRVtHf2T5dCQW92cmoC75ZP7UAESif188PehmGnb2SwiGYG5BhsmX4L17vGFqEvx3V1RzhrXsxJnf",
  "key19": "3CJYLSQGVTtiQxDFDpTRapeRBYBphWmiMBpcXxDn6emkZcFAqPrKdxYd2BByAgK6NXSELuvXdthr1U5UxRk326PW",
  "key20": "2gu8MfH1bwvHmTkUXva1w9kMPiv9CjuA13Ey6FRtWdVKGNS3hw3dVJg5T7brtr9qBcrBQTayNY4Zp6dAUXSGpXTo",
  "key21": "5gdvKtSuyvURXBm5y5hrxmey9aBN6J5JCRHgWKQaTRDzp6vwAqwrrPUHcaVVAsE4TzzqzEDnVBiCgQ7sQMeKQnFd",
  "key22": "5rMoGdy9aUVkF86ahgBXM1xh58KpUfZUAkNKJJittgC8B5nA4NEjU2P8x3P3cbTxCGkgKND7NJw9wHC1NqzZ5q7Z",
  "key23": "5Wd4xg5oLLFBy4B2UcML1Z4m9bjJVavLM1jUjxY5b9Fi12xUFxXRXRaQ5J2yF9X3YrXBvZq9s35Apg9xGUHHSyvS",
  "key24": "3BFBkT63ntEy6jtMQrs4voZpzmXdyVDuditHaQidsgxT7uvJxZXzYxrxxvLsPGoYpTFRjPXtifVxUQdh2t8A1KMS",
  "key25": "GxUP6zeZQNLiPXiQWsPGHyeJz7DQQTgrrZh7AbLwQ1z8V7PcpnKHMLL1qpTFzANNxUT9kWQ33sHKDtjFrCa29kM",
  "key26": "4MTLbFQuMzkF2cGsFZkQWu8QHTPaCFyJtTmmbfH3sikkVRUFnZEH8psFT4S4y4EPuEeN4FRUho3uQteZU8yeNP5r",
  "key27": "5GMnd63DdAXMGh1QZFb6KVTbxQHQG6pojpNPxja7Pi89acLNXU5mNAnS4SrvSBgFCyExWrADqDktP9f6f4NmMQCZ",
  "key28": "5AHEckdaWMjQa1TB7RoBPAKEnkqR8bC5eRW4pqwhrLzFoQvaGtwpBS53LWgQB4zdZU1mwtHggJf5ZzhbLjoWM56d",
  "key29": "2m2otfRkTnzjtcCz6mr3kUdrao3R2QELxyYEPiHUmsSaTFi6Ynk4Be6o6PXaL9pXp8pzgCRkFtcHXJyS7gSrSVe9",
  "key30": "4t7qb3nT9aBHR4wRxxKuy1reNdpp4gmY4Wkuikt7orySPWxJnnknhtnwF3H4e87adQeJsbsHgMQhPLuqnTKracA6",
  "key31": "3vTg5tH7TGwSGc8mrHUpiyzvgRukS7vQM7fDSkWQujLWbDrzHd9GeFJgSZGNnKdAtHUqLNVXqyh54oZydjtw6wqK",
  "key32": "5XPhKKzfgKPhXKJqiQWiRLQdcoyhTDCJzVSaSd9CJHwXmTtKSxXJmkUkPw1Qhe8KEx5bZV5y2GJHE4f68n2eVewf",
  "key33": "36Rzd6zkG7dx2issNdCsn9WPUjJhpH2yCciaDgDRPZNgopJ785d2EivbG46MUGvnj4L7SoV2ZkCMGF6kVyxU8deD",
  "key34": "TsvP3p9Y89e1cUcB47EP9rZoaYjVPkehFWiV8w5mgx3e2Uy8VLfwaweSJvdZQZ9Ub99mXUW2DwygHLbmU3Qi1Jr",
  "key35": "3oFeeFigvH5FWoszNJ6MNXK6s1sZKfxjjn2vAveAMuGP5Cj8bmWos3L97fGNtgZvFNUCTynT1uSbDV1iLpSv7VW8",
  "key36": "4EVKRDPCihi2Hc7RYDEo7TeebWHRuLgDLsnESAw7fRN6MQJwDMiM3Z8az85qnXGqzQkom5jwjUqeSuK1vJNzErEZ",
  "key37": "5ryoubgBax59bcNn1FLzsUPkocQXLiS1FcovYxvaVrb94Gd5518g5mMz1zLUAcQYZBgdH2pFx3nJcYBVH2bFNLwx",
  "key38": "Bs5U4md5AUCCHYvC2h2xoZNSDF1itVFg5oB4ndUbWoDvfUeez82bE5u1zH9iqrq1ixbd917zss17nbX1KNQCiU6",
  "key39": "5Nsybj8J3q7PnMQjq1niNCpLQhzoQEADeJ6N7nbxSzrWkkJFbsT6BhYXU5CCo6nNNhYdXHhH7Xodzy8u2VyQzY8K",
  "key40": "2DRJZ4yUzzAbCypHjgjeNtJeKySVvQVDZkQ4ktyenXGJp6MvD3a99HLbBv48uQ48G2UxfE83Wqe2dKfhM5KhSrmP",
  "key41": "3ycVfHJ74zxzeLrQE5RWumr9csr1UzRjk1LBCkukwHwtt9J3nRV2iAmz9HKxtjAMyKHMLYSEj1yvvUNMdpmWUi6A",
  "key42": "4jKJxtaUijPoYCPtzeaQWpeYR4X8R9VVAcMpCm3Jg7fKg42PrwAMAwd7NjGf3qaGHX5JWhNWGkWckzhk68ZNtes2",
  "key43": "RBTxE3SDYvTZ8rpgHqx6ypHShaTXqDrp45m2fDRKYDWu92QgCdqakqwnWKSN19aBe4nZHTGV9S73qEDQX9YoSQV",
  "key44": "3hqxKjSk6FsoKdaMQKF7zvZtc1ZsSqdiCZvXHsRKcCsoGBGu21naCms4KuqTtQjr8JASfCLoDLnRgQ2dMfUb4GmS",
  "key45": "2kttWGwYbF55ZqotDw6JoYvnZ6opM17XWbGCrvFLWSwkRp5uj9GDNWtPeRcG2S18WFti8x7UWRjsvBcxm3RPR6hB",
  "key46": "67prYuYpvwawyKnMVjfUKEAucXRZQfysWgnPZ68nXJWcCUmVecz5jFqaBWdx4QzSgcrWfXBhW5ysoKXVkGCWpKgG",
  "key47": "5yCyZ38yuoQPsjmq8RFecnvSnAss53fC2Q9yB6ErGjWrbJB77dL52HmQ8p9Mjetv9Y7izQh6nAE8f2SKjgfMiCs1"
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
