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
    "347pRtJex2TvxuBBwaSma9jMWEdMSzwE5euiP243uC2p7GPaWEM7ceDWYLkNkfoSzWPb6isJ6TQFK1So4iQYWvjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y93kL9wtmurasj47RtP8yUUXpNSDKHPc7XCvFN8kQwY7TQXbjTLhSAnfMoC7uRzUTDzVWs3Rx7yuBkV9ei6Rfk9",
  "key1": "MX3cmMFkjEyKoVZWJzE5HpJeLptej4qvXA29dK1d8QP6afVcDXPtq8Wwi1wSy6VdtcFtFrFMLTw1z4G6NKKJf8t",
  "key2": "vaKmao571jUfuPdS9Tf7cgKaysQo2fTGYQWh4YC24CV6op8rCLivGwZt95pzNzVgihRxoAAg8GimvScuzEB8CQd",
  "key3": "hkG54Smr9L6rca3W4UozDxptZPYU4B5viYgoCq7HQbsv6KkdFxEcu2u9hgLtbhTkGT9XxifXDh8bmrhSJDMFouw",
  "key4": "VqCvoaGsEsh8BSuxJZVGdDi8tCZSkGyDiWqKJCemYeitgYWcJccxeRCQBVZFixcyyaCr855P2W3AEuArGMceGyD",
  "key5": "3JhJbCPQdBQQuGENkX2cgtvv7G1wX6qBa3NnFnvBxCNudLCrNnzLrA2zYrZynn24ZvNfxnbJ1SnsKa3Gc54mzHA8",
  "key6": "3KDf1zxt8qXynUzXNkCq4n3JNTXdtWm5KTdQWPvNV32VeuoUUvdLK2jFAe5ywRCpxbjANDc8XR9M4A9dCeVpfkSr",
  "key7": "5TaCYecteqDZ9Kwrdzpj9y2siScqig17CPscWqfBxuycLCxMAeRi3Gj1sQzHoGvq7fbq4qxqHSBrgvfoJXf4GwwJ",
  "key8": "4jjCZvhcTz24fcbAZqhi6qnRDnkdZkej86TSZaDgQwcmHw8p7JyZMxtFrMKiQDQdTgsKNc4pGF1nLEqmJciiqBws",
  "key9": "2qkABiyN7U9F1akkkFfwxy6M9YBi8ontrV39VsvoYndv8mWEm4MZ1o5Thec4iTMdcqH5keALV9NbpzBkxz4ZesUm",
  "key10": "5xcRNGzmZxdJ2foUeZoJhXnjnqK86o5nLMF6TQn32VmfjhMKXVYxDbsijR3V1oLHHMPyBaA2cY5s5JSYyvm9kWPi",
  "key11": "3ryRJRnkC7ZkRHZEFCRCd5bJ6bLfhQYxtUcV79NJJ8Qjm1doXXGZNe5bEbxh1huEr8mRHcQz3bTY1nxhX2415ab5",
  "key12": "4FWvbheah7BwzMk7a8KHkafNejU7W1dR1bbRbNQhM2UXpGGEKXAZeW3Li9Uw7YuLnTkc4UY1Dse5BgXNrLtCWp7i",
  "key13": "3mHBaxDtCYhLX5DEq3k1qzGipWUu34C31kJQwvED5ikTDxXvifTntP3sUv9X6oWJCrY4szDW4Brf9qm9haVrgiLK",
  "key14": "2ZnSYaNmyCpuENGescKswn6nzXiKn8He7sd2igUzoExndbK94QYAc2GTvZUmB5FgUsqqjr1CQmpqvycAmzLMFmQR",
  "key15": "3ZVSgRvLZwb4WikUMb2vZXapRQ8pnbE6UvpagUzriFgyXqooGEHaeYXuDkK2Z4wNGRpRBMYsFGWJTz6sX27pHCD3",
  "key16": "4CYe5z7HubUsRnqxEY4yxiey81Zre883CKmKpLme24dww8Gt69bEUAoV3B3ZvWSWgGkVEgyU14xNmuRoXEjpvHAy",
  "key17": "NEfZWkBo6Uv37EjPXnsemJ2siGWwauXGawQbsZAeuw5wMgvsWDMVATYryAy89duCv31yd7x1odS4vyQNEFhjPp6",
  "key18": "5jbM1TS5k8YvNQMWoGyZzDTiGBsx61NF6qCnynR5JknKRb3vH2SNETcsBLFeBTiYgsSeRrK5UM5vbFFKUSAZrBfs",
  "key19": "2Q82UeTodk3jQ8E5yD9d3nAiWDgrannwQPfp7RfT1B7PcatfSAJk9vij5b3KwV4doxvDjdZpi6VUpHGVwZAViAZn",
  "key20": "2CkEkHYHM2x4Mk5ZUEEKmoPFKD3tkCPURAnk9ZthSGh5ST6zNqWQpVAu4yryBsVYGyHPAcvG7Ku9Fzb179tfttJf",
  "key21": "2uLNGLBQNQw9eRmX1yxn7EkdkvULB4dhU4yerCYqzsDq7bKEHYohJ4CRkj4EFtA1VSmfCp2sRx5P5Ka98DJxx8eC",
  "key22": "jXymUfx5skD8CfZ2f5vgLc9BLc2ZBxTjwC6PecKrsQFQ5eP1uhGiTxkk74ScqT3FVS8DTbmS9PVERgW6SPAXgFd",
  "key23": "5dLZkj44Qbmiz11pCFXbzA7TDBV6dz4a1wbSLGnddZVYDwEhTxjK6Z9iqckGHjq8wSw6Z5q4L2X79h26D7Tm2oPC",
  "key24": "2omRVEJk23XrKQ6MRnKSVxoREry4cDRbMPzUi1yoDdgyyKGKW58USW4DyK7V8YVUfdUgWoA1svxRNPM2c64Bpkyn",
  "key25": "25tGXW7EfEztXPgVS7jRjUyp5nNpru839Y1AiT1ckc79cx8CZN3d5zENF6FwLM8Zs7TPxzQ47UCmzMgtBFur29Dy",
  "key26": "EEh2TV21641WpczipchMgM67gcuaxcNrYLwhNjVAiQD3u9mB7MNimpMm6zJK3jwYgZs6QsycS1MCsEkbZcD6EhL",
  "key27": "3kkNAHaY7XLMh6k3Q3EutL2t7VHD2bU2PhGcoxakcHEUvPHH5asK7Nrsd1qWwVi8NFzBDfKXdoGPJn1ubirS8EQP",
  "key28": "2m3dpTzYuSscBXV9U5DguqxqZ2SZRXoCSCsmupG9guENE9kAD7EAjxyWxVpcYThbfCoXUYF2jWKDS65tXhRpujTh",
  "key29": "2uDopZ6fqnSjdP7vhoTq5joG3N5UTnXvi2a3UrQ3gL6hssHwwtMqvsXKypyjPvMWCPU92igajNfixLtkNtLs5ZGD",
  "key30": "27FeBfYKuVvaGCQCwQ5rbow9mYg6eteWkubwhVkQVyHzK3MJxQy55jHtgacQVdPzcCN8A6KxMjCNoEyyhNRyMYSz",
  "key31": "2SfXaqP1g9k37p2EvQk78mXzmxU9TCQYEsvWb2JHJuELb4L1VZBum2WgsPMH9iCHs4xDcau6QQBh7ooLdtvzn1UY",
  "key32": "5WWP9HUsxcnVVv5sLPa1gJbXqcjPcxX884KtxnfZPVq5Ggc55HkoV1L6UaGiKv6LkdGet2bL759QuMiDraavoqQb",
  "key33": "UbRzmdhqVaYLqsJZ6RyQLsnn4gy6XHSRLPhcWEj1yn2Zxsekqfk7PHsAXThudx3REpd6c1MG6SrPmTxxPhodN34",
  "key34": "aKMGcmqdmcDmjeMKfqn5SDefaVXPeUwJT2H34jiCeG81ZMg88MsfTLK9HiN6UGBF3SLTzoFg1D8cw43tj4YYpF8",
  "key35": "5EQy8GKgzKkwnhpU2nGmsFFb6AWSmK7WBSgUMgRjURbvE9U6VXctWe7J4icbE9tCdG1z1PEYv8b4a8jmJdfEhp9B",
  "key36": "qHWKnbmdEHyw9cRo4FK9FkPcmea8ErrtCnUtVJFfXcqc4u1zGnAW5QoFMpTGusWykHjPKpnuiUJtEJ2pjGMQWtX",
  "key37": "5QVMinnfeZtF38JQ6uqSz1W7WAs35wPtiq1LZYRANsifkwe5ijsp7Si83JArL8HJcYPyqdVycmPKahoVpZ8V9MbL",
  "key38": "4hUvuSxKwyCCJuNBqipW1NrCtTDrbEd44DG5hKPQhLtZ1iLy81zrQYrhLjrWXgWaTA1giKa41uzANP7pd5KHJ6Re",
  "key39": "dwhRKasexABteyAQrYy2goxquBzCmjzu2jsmraxyRrcr4x4uAvdH6yJGAX2xB2BpycDspL7ua8XU8Noii4GuGCk",
  "key40": "4k6yjE95cTcBtBugvGgHB1sQSK7fgsjufvHxGEUo65xLVpSRJ9cNF8WVeQLUiWKrMttGk5QSydeduGcmCF4xoTQ3",
  "key41": "5SAcHmRYdHhGj5itckbN8rGgQDQfTWouqKc1AQ4DieRXWSobKiHWx6Hf9DPQVaANpX1fXH4gPqdQaYVRMwdwFVUz",
  "key42": "33wgcKpDbT1BLiKcegz12YNeJNGyrtH1KGLVMXUC76xL1R82FBEp6vZjDhVY6P8cpmknYT4duexsCrM4kD3dCqCR",
  "key43": "ybYs24oX7QvwURVwSbVb4vGdMaW3uDoE9GfEbymy6XWHQM4DavT4wTdkSrQmGUoWftiuBHj37h76yow6GyLF1CC"
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
