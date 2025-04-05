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
    "5oasLACqwo3Q9jDah7d9WyTggn9QTH3wed3r3LGWL9FzfWEL4Zw4DvRPfMwGy7Pfga7dtjr5TthYtZRGSY1nXRzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AmXaPZpcKjw8wtuio1qJdfLMF5V7mKCPEQqgbY33i3xtJePwGyCzYrz6WUuevGGkyhgAQsDuK71xFSuduH9h8BA",
  "key1": "3aBvWnYG7snacFkuRxWyoWrxdGZkHGMxX17dJg25W9opkqUurv2bJPsPWMTjpKih3QYZiCHGX5qrDQ3hBR4o7CW6",
  "key2": "2jTZYt1q2coqiWgqUNRhc1UDrzSr7XLtMBqyhHUYuDp5xjfL2QkwiYU8WYA4FtU4J2c6Tw8sPebruuX4taNyHyqj",
  "key3": "2uuBErKCS1XMH9PhJJXi34vmDrHjom5cMf2LNsDa1BQescXQqveaKijrBatuDxzktegERHryrzwEnAsRdjvUfZpT",
  "key4": "9ETQgKQgjhrLMjLFCNRjZpF1Y8EgUPeHAtxHZVz9po7scbbPtynMgChwZLKEHQnzpgw6JkeMmyPr5UgWCeiejBW",
  "key5": "Lutf1wMiM7by3sA19bDhuGMFxrWwHMasRNVydu9dsn3YXUnU7bAg4avSSHFHPno6yKC1qXGmrLxzzLvS3LqxfbX",
  "key6": "8fiRhXkHWd82pAofWSbkTDUHdX59hZUyChzpd1vdZJVUCnMqVPeRKAvtEThc7Letx2XzagWR1QchRkujN3dAcXr",
  "key7": "3wPMSYwfjtFv5TaWaUR816VqEJoemSYWpgvXxekxtLiNydm6v3t1bmbWduts83ii1eB16S6PYehpDgw6NzgcDUUg",
  "key8": "3qedHYBtLf8MdzH93Zpk4wkDfLp127SJMnpi1P1yZFb5jDZUjBcMQmoKk2qxgVsLHeZ9EYuuk2DAxgFMChUfJFT7",
  "key9": "47oWjeGXgyMcRszfznsUGxHFLMkWYfyQsZwcyWuJv9WgjmbWiU9jUc5zd75Muo6eiGaeFWeuHzrYdAs4Qea7U4Cb",
  "key10": "4ESmsfhJXuuqQ6ddL5SKaB6RQ4uhemwmBhY6L1X3YvUvPCsnXr4MxdVW3oTh8CixWfiXTyGAr4TiVZumCFhXkzj7",
  "key11": "2viw31DUGCssb7HtEW3gF4A9Y8feMbR2nG8WHNbpNd2pYX9YZVJyN7Tctr2jeHcnRdYAC1woDTeULNxcZCid7Xaj",
  "key12": "5yxZ2GPuVt3uJAJK1BzJyDU1y2MLAhiv35GrXt65aqsMU1rPB9nadfUMTgwWU3R92NcDu2qUzpxyW5FdmzHf5k2B",
  "key13": "Pv8pJwkuw363G379FWqYFRqskGVvpsyj3GhdA9bxixUSRZwG3DMFMRu9Jni9VXHbDWApJ3WNx51Tr8XoXm4V9uQ",
  "key14": "Xnwr2QZMqMh65k4NxigkA3uxBjZc6zscCy36P7GThS8ULH4FFAZZ5DMMZeVKdNKNN899Tcu4eKa66vQqxNuxhRQ",
  "key15": "5Z1mYNfYwQcGkTHLkjt4ArQTjYinmuH7cRmEeQEg7HNgrtnjhMr8SaR5TonCR1N2eNfjLtdj2XosYpMkQQwD3w58",
  "key16": "3nVy93qP2Wgiwin2PqGrABmqSYnpyLvNxfKQfJF84EJpTkK2e841cDBwDfehktbsvQgyPFHZLj2NeueobU5dwCzo",
  "key17": "4L2256Z552R9ChbW4kPw2cv2hmiVR4DFjWnf2CpM4M8kVqYVSr7oeFW2MPPmxFicUFt1fugxdKjXJCxczeK7WEP7",
  "key18": "4EMFvZDEynCD576SpZ448PK51MXvU7mDanbyV7oMPhwnDXN9U5merxBYqdQ6xEw4jBBTdZpXK1vzd7aBCFA3AxyQ",
  "key19": "5FLYeJxzgv2EfzPnEJVXPhafcDjx7ugLZBCdWbxMELJgRQ5YbFYMiDXqrbMNRs3N7ibLRZMQ6SmApe6w37n2DsRt",
  "key20": "4LdpT7cgDVkeV2qAeS8CyUaRay97BrTZ7HPoiN75EofQCnsqvdnNRMnaksC8n3wpHK5qJ8CdgY1MHp1grcPiTJw6",
  "key21": "SMunjh68CLPsCnfWacnSVENagycPR3q4ALTAHhZSSBmHsZ1qn7V1VazVywvJCPWHU5kCCLahXrP7KZeDyTbtuEh",
  "key22": "5hvmdHyTzJBUgmQyTz56FLgpJdNzuy8u8JHoZQVeGz641oqxFR6SQqqo62xZYEAYwLvC6hQTppZMhLGxuvLPns7E",
  "key23": "2SmVYnkby96GttPfJ251SHZv88K3yj2j3d6og1579CWGYyX49QJCALECxG3xP8vSx6i9EuJgoNgTzKjbPtqJ4qhN",
  "key24": "LGHX5sJ9nzLb9jNmTPt3WiFUvXcFvg2rj6Ld8DpBbJ7comrizB3JgzCUYop5HquWjV1Gm3wUzJhgagmhUtMRCZT",
  "key25": "49NzeBLVi6YZKzXAjxPJpEGc78wb5cXeXm132BBuHZab87vyNqzQayTrGvbM6Jrzq9324fXgjsGL8PBKtgXGenwu",
  "key26": "4yu6z5sQgrg7kYT9WHw7fmCnes3zxX42WkDF82BdhYnSRoDyS3zQWTjtS91PFgq2dRbU8jF8LrKZtVjzqDFWnUZZ",
  "key27": "zjZwE5thubZW9x4qZCYECoUXAiuWRjzgbqRBa9icrfam7WuMRZoV88KaKWXDrcApn8sPdUVyaw6kd5ms1X8tfSW",
  "key28": "3XmbRiG6Rz2LDXqqVPdBrsNQcuBUYiWW2YwSZdBQCdiWrAFdqYFgjbM56rp3DTrWyKnZZVsUiEbr8BJLQFcLA6qB",
  "key29": "25DQQMoPsDMcHmqGzcn6iEVchkbJUbrmtGH317abPnqodPt1VEyfjsoe8prGNg1YUxXAM5Bk6y1qCxNEtZLWe4jJ",
  "key30": "26RWCXhAgbitK9mtnQJjmXDKf4iSQLnPc5cEc7Z4oLrnz7ixEaEQxYFsnKdhzq6b7XLnS8Y6hJAUxXmajcBQCWq1",
  "key31": "23AudFWBBFjDZrLL7nZ1FF3AgR5AFU1hpmkToZD4nDL5wreFQQhFPpVMWoyZwQKMHumGLBiZiRykXtVcm4LQuubq",
  "key32": "342JKSzepuizZMiocyd1TAMCboaFCBnychyExMiQyaZ35LEMpPMV115PAEcKsJ8zf7v6H8hNZzo78q3ET8zkGoF2",
  "key33": "315FQrG8gTShGQmpFFdhrcwU3aWzU8gxa3g6U8aADbpF2s1qX9Ht3gGy7VyYbCmYwBwUvsTXHYgJLKpLJcVVqbKU",
  "key34": "3zmx4qD7RB8wFwkgSoGhUyyEapGArGYq9TfaMWmpzUuytCCKxJ51fZcdeEdrhUjCQT8Q1ygfvK3aYCMccC5dyrpU",
  "key35": "kaQF78GDZNAmpXuWcbUpvxfd5CgGJqVR4S1TUfp1LE7n1UiDnGwU8p93BeaGazhMSj4Jj3tNugnhFJyhLb4W6BT",
  "key36": "5TRcfu8fHPdS1TiYL1rM7gfocqt99qEu42a2YWicPnTkQbK927ZBNvJFcpSzsCXacgFwvt5LyiPEKAfvNZ8P5Wvx",
  "key37": "3YuzQwkddwyc1irFuosbJAGjZD88CkAHEMzNzQ2uy32FnBPendsKLdgoSsv87XaAuz77GygT7qPdRXJfxnJdPWaL",
  "key38": "5y3TrM9kUME94CYWLyEt3gt22YCYsHNU47kkZmdocjKLrB7QPGPtRLGH3825DjGGYwKbNduJmFee6kqDfW9Egodx",
  "key39": "3QQX6Xx9dWVTYfpnGEJbq4NdF73ub42fHj3mvD2yHSWyqEBp4uVEUoLFWPopc7uUW28XWkkKEXL6Z1ZprpQcLh1T",
  "key40": "5pc8tP7siMwyYpiG1abLh5aSvYF3YKxith1ZrS3EJP2EzrL7uzoMRHmqnGsYMXhUW37YXgFZeBt8nb8NuzaMz3CY",
  "key41": "32bxtNpEX9RPyJARiuKUrNsypATPGZxHPRAWWjd2kj56j34oMBdN1HtDoNXJ5fWSr2pn4tC3rAAtBqAYFDyNLizc",
  "key42": "48QFtYC7P5idFZCX8VZEjejp8uKtaNamJSMNQNidZdAm2SLBbqGZoFhV3wRA79i4htAqKHM7VYg86MHk8BzCKD7H",
  "key43": "4a742wZm7xHfCQmJ5EnUD82PbtausDYQ929fqn2DbvTb7zNaqYgosjbH6qaeyYNFvSzfxT1vTCvPmvuH7BxBu59k"
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
