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
    "41PuwDt1fsB2kP8XB8trWZDpZtiJr5khUQYquvb1dRw9dLKNdLiB4YkkqvnUqyaq5v2PnStisd3zXgo1F9rc335w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "614xPyfPKsUQj6PSY92TKRhfvYw8tKf1f1FtcbeozEMAvr1JnxtbVFcGAafMD5z7jhr2ojbnBnVMrgHwuBxPHzoS",
  "key1": "a24cXhRfY6m5VG6xiHLyZvKnqK23bq9tjaAVSBoASt2DDnM6ZNnMC5jRk8qf5Y9meXy28sfWScJk2owc7ouHpo5",
  "key2": "63r3zbqN6qawcaGV1EY7SZzfHMAQXPbW4XH4NiA3oVKH9gx8KdxiDnVdmtYV2NNnycfFiUU7dhNJmi82DrQy89Rr",
  "key3": "DgGftGnVteTwMhg5vsTPPAChuH3T4MJA5NaibouBvbrCnTfbLqhXqSnB3xBHLqCPHeUehHjmqA4SM8hVH4je3Cs",
  "key4": "4owKTSvzTQ6bKpohzgX6UEahAR61srF31jw1EdBEHFMDNG9WP4MWnF8y233xKtsYc4ymm3SoVGps65b4NVAuuGye",
  "key5": "1AtorYPb7vwfgdFp3ridMLjzXXeH4iQiKamoaRbxdMyuzrHpHcoEAiwhTQw1agSoYdjSAhH8YUX5voYA1hoDMTk",
  "key6": "BUVjQVgb4sR1a1vtv7K3cJ33ywTQHjr9vJGUPjMcPEj79LM5PXvKJxoGKWBwmrCX5rFYJQ36bBLbdE35BH1tFar",
  "key7": "5ckfwArEPQ2DoaKNrWDNrozs96kWkKrAoLXC1hapK5rpJpZE3TZoaTt2XKQcWeMuv9j88eYreJinyPNyajnfFE6Y",
  "key8": "4C2dEy73Zfbz6VbT4PLYCrMm4Ui5RdvYHXBkWA47tsY2JSU7KJzvpJuqVtowXgH2g5bgg9D9mJmZaNbRT1TGBPCi",
  "key9": "4rQ96r77A7EauoEFfuBJbqhcFppxZFYoFEXmXHttWGKA8E9CBjCBQsNJH3bHopH516AX6qvCn4v2TU7EzdUCR6bQ",
  "key10": "4xQA1P3H94GhDrEqzHGNNee4s6SUSq8A6iQtKaC5R9msyJqBMz1fJpvEfdUYJPFKg2KAy2sQPkbLmrVMEUEx9SaG",
  "key11": "3Tt1cwrbUpo1M5o2Qgctjc2Gs9Cop8aRp6nKCP74y7HGvzMZF1cpYAtZs8yCFyJ4mF8aR1cTksDGtGGahpzXWLsA",
  "key12": "XQWcu3G7tqC7KB9mPbc1TPf5oTpHN1uMqsox2eNfLEWAdERejR1FyfqSyt494dadnjiMf7Xr8UkGux36zo58Ywo",
  "key13": "2pczfrJiSTLfigLvY1usaPrBa5cjpucZ6SW8jiSpgjhqt5dc9jS9aEerxjfeNBjwByJD6Avo31JtkjS7iDYp3tL6",
  "key14": "2vmMMw6sf4ojpfmsVHDysnzN2ACQ9Us9mc9wXwoetKTWcgAhcaW8nHQL3PPWu4j1cLuR9TPgFMisxt5fmivzJ2hj",
  "key15": "8ctyvMztEzZzVFXGK1rXLKNzYYWWySR56ovn2Qk3BmaimJVbab7n1GajWizdPWjNXFvafUCCnf1yTM5PV3Mtwt1",
  "key16": "331Qy3CkDpQtiQ5sfY5QNP3bF9a3o9JHbivHYc5DwquTDtLFvWMo9zYwrkzH2APN6rotwDe9XLu5PVnUrvZFesLW",
  "key17": "4uYxF9KZGa7kDk2HK5bYU1KJUKi2GWPHsyx1q5zebBexoGEqgm8zR75ciPT1MPCC8qJzRQzYK7uftX1iqsHMZNbZ",
  "key18": "3QT7u4CrfRzHfFWcc2cTm8qeEq5iza9eNztQJX5w91k3eQU8K5L3Nst22jxntFPbfNLvMHFZ4AfEtTXLArAP2yQP",
  "key19": "6Fod7259piQzUU6yNmqqgauM7pvCGwQh2YJ61WDXM3irFNNagEvp8G1wptb67q9AnzsJt2ZoCh1pbsq48gXLqu3",
  "key20": "QfcGzd5hBerx6eSxFARFwhfkZxVzmJUo5Tg3WYcBH8cytW3tMNJxKC4qMz7yCWbEp6YGFNdhRDQZyD5usVJM4gN",
  "key21": "5CBLG8hMU9oa7VuDihK8LxD6tndCXuJMHXqhAgsegwV6PD4oW75WMaQQC3BK629pPL2fycRvgXM4UvQ7vaW5dfoy",
  "key22": "5U9wqjKS6M72NEbmYaNZ2neCZKGPvyHRAEancjcNh7a3ewi3m75tcPYduPiuLkaA4a9SRNFkGLjnjfaYwDRon5LX",
  "key23": "41MkKnsZNUYSdFyDoFriuVcMfRj6CREbGSAi8H9k9nqNqGnt6Nck7ZcwWAoRU83EWTYuNfWa4BJvYsWV9kcGGQBT",
  "key24": "4oqewbLHA2guAvbZUtLm1hyifdN71RNNEgiCUaJUtB7TK8e5RBLtv2AWnfGcregLS7uqDNy6Cv3pZXP2qp9YoU4m",
  "key25": "2yKTSrZC6M6pwTXFKsynViHXtZk9my5HnxwUVZzWk4xXidtoWSDgBPCUXqPJzUq9XWrqz1Gq1dt1rAohNXQ7JS7Y",
  "key26": "2apDjzCDhZ6CqAHEeV9HJ84c2kiDC4By1UjLHTkcsQt3W18bJsL8jDPRAiRU22qCrTqQeZx1dv83gWmmo323PrrN",
  "key27": "3qPwCcYTcuiZyUUUFFjkNr4xxJJme7jf6nKoDrXTNE5RsQ3t1772wtrNi7LYqTMGoSrjMpEVSH3eLYgFzHfNkm8x",
  "key28": "3e9B47xW8b2TsDjAoKwAZgMzgAPxfVRhDnZ8J48EdN6mCC3N7fD2GjvnnxdQvNHLr8QF3oY7xmR1Yw2o3x3krUpu",
  "key29": "2DSidE8mtbw4BpBpZejnwxdgdr9TWxqVn6MWhnpfckCqYzjt2sSG2C9q6xLC6Rykuda9dhEyT2kjaZidhj3bdaa7",
  "key30": "4BcPza7WYAupKHSuY5iik7LbrV3jDUgrzYitoF9TNxGmdwgk7H6N2MWEpZidLLLsdBvSXmJWFJXYot2D9oWuhXL6",
  "key31": "4PnyTFgarauxr1Lp4smikus2ND8egjKbnhKE9gAxectRNeopPr6DgE4huCS1kNeCm32ySitHkqeNKP4H5rgSvT4N",
  "key32": "M5vqowePyDPekwBVaaD9Bseu9zLWRhCASgGwsNGNeR33beDGhLrJBNa8Ayy6qryQktnc5uXcsjoKYs2uysq6Fer",
  "key33": "2Y87BLG7GqfpQEKp3aA7iavjrshLv6qLqu7N52GLkJ2VYt7XNvgivAipLbWFRdYxWddgfVobxXFJKyqDRBXZvqun",
  "key34": "LqF1Z1S4YVxyM5VH7oZ3VoJXzTKoqpGE4qcSvWHohiVyPw7Hr3Vd1nsxh9fYjP6y6txe1xKy2L29yGwUduSNjVN"
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
