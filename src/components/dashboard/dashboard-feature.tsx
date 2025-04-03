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
    "2D7uATz7iHAKkhRanB7V6ByVYXk8eotivvniMzqhBB9voV4tTkzmZRgev6qdT8NFBT53V2Sr8CBAzV2vMu3qxQmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n62J93ZhrzNYeaw2bgck58uyakvJzzU7BC5QfopmdTmaEM3nR636NZNVEG7vd5ntkqA4UgYVPY9s5ppfnEr6hpi",
  "key1": "3CKY6CohuXwrRu8WU2Gy6CShosNmYDZ2XLeytmdbRksfeGUmkuVSMoc2wt1hqS5XyUu3rTpNniM4gNUfi4iRhEft",
  "key2": "4BbrXymBBT2Lf6gkGBJhRz8TrVo3Tg4bz6RC3Qiugpa6wkG32jStg3CxmjQE4EE5QQ3C9gUhjCwnbAPxZb6XFaPM",
  "key3": "uq3Yrz3wrAGze5KSTJi4vHknPko7vR4PtpuF8pVkGDn9E9CztR8wach6MAJUGMzsiyY8RdHcgQUe1piJisBgpEA",
  "key4": "2vPJ2hBqCMU8NvfCzxzXqfBRAGpBqEkQkNWQxwy2g7XRUjDz3SuqxoKGyUqv7fr7yR83xsdz1XohSLhVSUuTdMRR",
  "key5": "ftsGkfUHuSArdjh9j3Q28ePEm4JqVg2nuVaLDfB1iEFV9Pev1rQPJaNzexsU2YcwX6X9SoqqfBDTu7qDYFgaXzt",
  "key6": "5AqVv7vY4LgjFE8hACgpKSZ6qpHfXteaQdxtD4J4RqJRVPDadUsuegcB3yirjpTvBoggi8M9r7UsjEgEGmEoFJoF",
  "key7": "4S3mH92SMKWEehTZC73ix7hv1JEZBJQ9dX9ESuh6zNJXq5QRgzXatkEMn9X811eE72UHj4NGV5adscBJQDGuN2gs",
  "key8": "5eskEr52sNXAFRKY3t6gpBEpVoCd9MpQ46tHQ1wwtzPjsu3hWtaUM6cyi2QQYf3UtfscT4RyCYMhJVFa6NDFioYA",
  "key9": "3DFvkwsoWMhGzd5LA5rZvbALYMu13c6Z7fXz8B5J5WrfSLfaFCRGJAjuDmBVypwfV6WHu5kakDj3HUE7qnCSH2Q6",
  "key10": "3j2g4x3vS33ZUNhwNg68J2g6CAdnBfvjUV4t77CPJr3eUwRPknMaGiqgHGsTJEHT4mbGwVSYYrRPFN7h3mtzY2ej",
  "key11": "5f9XkqqjNrXj5EcJD33bRYeGCfyPFi9dfhHoDRotrMpcx3cvhF9ZPwE63CdVE6csGmVv8Qw7EzS3xBta1RdBJMpx",
  "key12": "3VekCJB9LFd7EiETsYf858GUJefbNdStyZMEu8fGEJbvZAMjRXiDzhuE3TnbZZVjxbQX7qL6Su6yHCLnsARJVmZz",
  "key13": "fjixLvcEyS9QCkHRq8qw4Qa5nhMybKpD738ZRz3SaRYgZVfd3pBfVngMdzYkDhwuvP6JJs8FZdECXx8Vz1TdAHU",
  "key14": "63qFsrb51sNFEkSwhYLjkydZrNkgjmr4AtwNC3ZAjGD4LapP3CixFNrLUHc7MFkVRgvSBaq47BBTw8uWP3HrRD5q",
  "key15": "2RDFgqbtK9RaYmVJWdi3tpjaEnE3F3DTEqPDVhUSpgdHUMmPKyGPcc8EJia9ULXJm8JvE7ZV7dCeT4bYnujxf3g6",
  "key16": "bMyUVcVtBua3fUC4Y2T48o4FWjU8wY9m5F5CsP3MwpviqRtYaWvfdbwhnUyWwLgjpEQcWnyRZYau77gXg3aP6pL",
  "key17": "DWGtVBXq5R6UrJTKTyfHBrDd7ALLwydCdZWjPRLUbn38dUKKPrdhLxHUDroq2x76XatwkjEgqKGEsZ8Z3ZLN8HR",
  "key18": "5UvJEqCRxSF28Xowk6RL9mZVwfRVFUDNGLD69GqAaHNBSTdWU9yxp4x55DWSxDtFzi8qYDqAnZeY42SMxeehdrL5",
  "key19": "2WimzscV97EdfC5qrenmUN8s8Sx8CsBcCiPQx4vto88LsfwEEKNV5s69QUPNc74Cv3AfjtWGH7DJCpm79YAX4Dcc",
  "key20": "2f9ecx88h32PyYaqkCc8N6VyUe2ZyLXYB1vz9gxUtA2Kymn9JV6djw1jNxar5ztwPUcNXVbqYtc8szDY73AcYjJX",
  "key21": "2xWZeNDDHkmb5L1mQLsAHL3kCJb3T2AiufD6zTZcBdHJwyi8L87QutX4xxLX8GyqLRR4RnXz5fAGQkvxcUVou4Fh",
  "key22": "4tiTwrmQjZJ2gp2TsRX45EoToyA36mqUesEPSQuGDSi46HyHd3g8vpCD6GwvURMsQhDAyXDQdLjj5HC4AEr2v2Cp",
  "key23": "3eKut9BQMScKHbhqDHbrCkNfQSgTmy9UajuVkCZ2Hz4dxVFhMHM7PtozttKS8kpuStKhujxSNDmj7iwrqPHisJtp",
  "key24": "4cPksg7kvtBz17sNCbP59phCY1J357zGcTDVmXjtVp9UoBk1sxkUhyAiHYkhhiK1h98NjexDa8PKTubhHWLyH8mE",
  "key25": "5t4VNUQeqBTC5SMt1TQfrJUpCahwV1mLVWLCsLGqtdnDyVsr9JyCFZsDYftfE2j1j3cEWpbZ9g2fbvzeu33b85pT",
  "key26": "b4BxfY4bmtkchUsDa9rBAL5MwzYRjPxbVZRRrvEzLs93P95Mvwq7MiXHeGeC989vjqahrKxVsQHjiJ5doA7TJo3",
  "key27": "nFQfYhTtnbszXA8YkeKNRFQsTrcLfk7GK5FYhACUzsv6zzk96ZiStPczGd89NdNC5j1oYGJiQFJqjY4zD98QNpg",
  "key28": "5SqyPghpEKr7PemMaFby8ZkGgPa5U2muxcbT6HjBGcj963cTApmEHibszsy1v97PjPqBQvNkKch1Nfwfu8ZFQ7xF",
  "key29": "ntimNkx8YPg7hzgZ2XojE1X9UJzEdxBZaqceuMvWgMGTqADmbcQ1kZq2KGhPKvzMcqT32zhWQoqizymbdH6wVrV",
  "key30": "Z3vmVCRnatzUjUVhHqceqiVy457GXz5wZhYbeErgS7xaQQcTcFagdroonwVABSZm78ZrCkzK2WAodNfEAKUhEqF",
  "key31": "4F2SSPAHtyPJg3iYz3vC8siY3ufhNE82qzb2m7TMMKjaVukgipQZNUrvGJMun35cLKMz1GJfsyjuDdTjsFQNnVKd",
  "key32": "5mfFa5CTQSthhK8D9rekSYWA2XVXZkG8UNkQQwLUJBKEZp44CtWnb9JkDXFhxiTLrQdVhSW5DouNbLDvjguaFKvZ",
  "key33": "5F4DvzTKbqWUpsZrtE6FDA3m6vEHWx21DBmFySHZ3hPzC4prvwU6KFJKmPMtjvgukkDQkastYh3Jofk3eCVS4R3R",
  "key34": "2hXzHfQ9h97Pc6tePCDpvwDgGRcbH6C4Jzbbp5qigr7fmmNX1kUR6SJRrnwUrr98PNR2Bd31GgwgjrPM4re9uVcE",
  "key35": "4pEcjEWhNuY4i3oXK72ft5qZ5UvDy3NHhkxo8ChHeabhBqyLr7n1cKgqiBpDo2JWzFsa1bFZZYGvKASjKYUvvzXL",
  "key36": "5rCinsqkfAXs1d1BNxsNbBY52sNwf2zY3PGGy5QvPmCFY9oojreNojQuyKM6pc4LKe26rEX2dzfGYVpNEd2CJ4Gw",
  "key37": "5BB5kzS2zcTDNQV5HuqPD3gcf6dxxQcmhw8b3DKE9qrsVcQYfXZfdzYf634KXn5ikeDKvpQyihnGiyVEUJLamaGV",
  "key38": "3aqnYshzdHf1Fp9B3P5sR6uD5SYNXiyKtVpzVKxrBRNyj4eNGx9mx4eDuwhcHoErfkjfkyTCfzkY6w4XqLKjoPGj",
  "key39": "4zhd19uR9gTf62JvGoStpJX4232Ce91UBNPEgM8eSLb77E9aP3pHasJEztBFsUx5Ryu85CWJiNjJG4xXF9nAw9PD",
  "key40": "eRfmrYQtENJq3g8MRmA3mv2Cqqx2uNFXjNSgzVxjYdQ1ghuLDgrT7PVoE1oADo2mYf9zTGHpe8z1j4BQZhY7Eog",
  "key41": "3sXAYGSY8wRrGPUsAbhH6iAdyHXyK97jbGJ5248SJKozcVy5KoifvWr2JjH9WmnimJnWP8Vc93pxhotAvYGK4Ay8",
  "key42": "3YTjV3nyuRAATUoVFHSSUUAziUaEj7MYoa7VMV5fs29ciYwTrm3YZNFXx2hgiB6YcbVV48Ck28Eo9fGNSvWqXxo2",
  "key43": "DafWq66ZkQWNevFYs1D9kw84yhzX1n7ZZ9T11iTbCJrVdfrzh4Sah1CdPLDJAWm1pbnGWqvk4cBNxUgjKBrMFNf",
  "key44": "6BV2nbSgL3FJKN1R4pgAUHQm3gpMX86FN8nEZAdd7h6c512if5v2AJ4KVfAYT8rcwEbDouLRMa4RdhnMZrXQmaS",
  "key45": "4JScbxgWzSnpN8Q7sKqZwD1FWM4FmPTEiUygJwUnwasBQkhf3Ea4X8ENEma2JkysiBoTpTk4WA3KXC2RSmAtQ3GK"
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
