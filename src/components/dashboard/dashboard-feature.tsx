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
    "2WCoUGFkPxxJDoYcLrTk3HjDY6PyGUuYw1GMcctzq1vd5YQiMZBxMC5aH9jbFQuFU2zAjNR3rQrv2vUYii6u23KM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "soLTWPs8tjGkUw1QFmf4FtcTwLdSV7m9brATu3fqnK7M2uY6vRfRXnHLrzX1278hzUHrRCPqGM8PqgunGAFSMZX",
  "key1": "46nZS9iUgCVwujKot9Kx17LnrXHg22ukBjG3swq3NiPJTCKLd4QQPcAUhsdj1of92bssCRtkMa1qQFbAbo8xBab3",
  "key2": "vRxBLu2zY7VYDtmQNvwGk9rLaxmHkGpNiyo8QyLPoGDGiKkjpLcYJqZMSXvzBvwbWXXo9pqUJBLzND76uz1LwDy",
  "key3": "643omtuKC5WN4Wu8YSLWWyQs9oHaMpnAFC1gnGLa8PMuQNu7AWwSkyedCPzSSZS98TKUr6HRz7Z7YgdiwQi2utsJ",
  "key4": "2z9RWQa1bytQUK2By5xiCDttgQ3XuvbEQuWZG6dx6Mi3B1FtasURL6UXVvDbG9QtEJKb8eLro3QFuzHoMNd2Ghjr",
  "key5": "23tATsbTp9BvpS8LPjWHsNn5rQwjqSvKEbb6bsvkvhFo73qwjs9KErMu4kqNxwgnPCkZwDHnZ98RM6HfCNnNqdfZ",
  "key6": "2zryGrXW2t4oMp79sn9DBZTFRtvNrV4dpyJYaGhzizNwbeHsddQ83V3qA3TcondNBfiehWpfcN6u7Fo4gRXt2eLh",
  "key7": "42jbqcgJqLmNS3E8B8sjy6TEwQ4uHr9yv7HWaE3ESyqMBpkjinCzvp9NpoqLzLhA9V19QdtwEoserXLBq5P5R6Xg",
  "key8": "59nVVnZ9fDKErKnjKTAPfvi8jpRiPnNEpFtFCvd4BnSE2bB7YffLCfCA5BS1mTTdvJebGCjqa6N1X4egbVjfh6aT",
  "key9": "53RjVmWGX1Un4inxGMTn9RTTJjD2DRVweEyzRHiYiy3EenhKuP3NjYGsBr3xVpkmbEuRBQ2JhA9wjY78xEAyainq",
  "key10": "3tuY7fM6C3UFiPVfExwiU5Py3YYRFA4emKgvL7A6D87DowQLWSxJwW1ZH7STssfo8rcbFAonau5eNbYzfpU65nd2",
  "key11": "5U9SMBTSKzLYdX2Esk6MALpJXUCxz67kqE6dF9a3eA5yszJ48ZHAyb1himPBMm2jqTUZcsKSHXXpD2Xqfm7Uzx3M",
  "key12": "3BvuJR3QMFfHPWnjAYAS8r5dsoUpKiGbn34jsaYSBwtgn66UuvEnJx3vD3RgKyhcf3vUuhdfyiSHsDP5tftaf6aj",
  "key13": "5Sd1gVwTub3mAsxd7k7GEsA7AnF62xDHqGozLQ4RnCL1gutwAUacovvAhZBFNtH3LnPy4qt2bSbwwUgCW3jfqA2u",
  "key14": "2ob7Q5tixVLcbePk4WeRUhKzMg5Hg7q4ggLXQSxnfqtCJiFhve191gdvSzMpZ8CBLdorBLbSJ6W33G7PigtazGZm",
  "key15": "5YqvsVsP7Kb8T4Zuymf79t61YsPiH6QthHwdyBad4n3T39FVM93ZpXWHFjZmkzLTro1AXE4obBvVEKV29QUchMKw",
  "key16": "46i9akPyCPmc5B5Yds7JEkqWKPyRs9Kn5Zr7DacjbL9bByJjxEkS32wb6mELSayKG1dZ8wqWeBqJHSuBSxvepfer",
  "key17": "4xtzCLt9QW7pfcwDdfiyJYDR4gt2ibQhGtuW1nsSMFHGuxVdU8xJBgUKFPaEYkMJjeJCidcV2BUdVdBLTVj4LHDM",
  "key18": "5o797mhk6SWTDVV3zL81akufJjC5W5W11b3VftjnXQenAKPgM2mUGUkjz4NXsLDdw2b4Vs7j8NguYUjdkMNBQs1b",
  "key19": "5knHMMa4HP3z77mZ2Y9JuwPuehzrnpP7XdzmjekuUCb9QybfVpBvV5Gcy6rYyRa8Te3fKX5a9Jiav5rHynNpmoh",
  "key20": "4BXpgXdZHkghfPz2fePFbZqFVmbzvmjAopRc1HyqZADjcxGPnumu3e9N6TffYHkcWVnkGg5PA32qEu82WvN3fcPy",
  "key21": "wXLKcHiJ3huAQBxBoozsJ1SLREnbnnqm8iMpKWgcVEpXqdmWwhon2Rb7qDU4tjiJdYFXcE9uY5cqaCBGFkWNAYU",
  "key22": "45YdvUo79KF5QUYhA8Fsa3getqEZ57briiGDhQhxF1t64qFWrk32kjo291uBUKVrWkojjxHLr3yxyf7Ys719mxxQ",
  "key23": "4BEH3FJaZ86uCBvs1f5TYp77wg5tZps43z8vxeHYipNchXwtgFzPHLkfptjNjW3HFTnon2W9hqXrkEfKDKUUaxMt",
  "key24": "3jMRc6tSBZH9iGUQ9yZ9VLD66oPtsSggwZpQUnFfFLUscWYBY8tvPMBAswxx8LHyq3GjGJRG9KJx8Ssw1ACUuK5t",
  "key25": "3pXwZdHrPq5jmzGSHz11Jj3HwRo4KvL2Pr5skqepcK1Rc9MB8UScFJRhoNBw1BAbDyQCbhGNVMGdMhFyHXQhLYYa",
  "key26": "RknsgPHZSQv8SSiaHW1W8PSToEyVxEsByfj3qiPsnWLwry4EZAADhceWsdgN2vPMKGW8o8disWHok8UfWRyeGnQ",
  "key27": "QfkT7TMKyX3D31Ai4CutEgN98TaRhdoaUCDFbxXvAQeohqjGSAeXhrSy7qVsptADGGpzBLfP29qxWTqmq97jMHT",
  "key28": "3GL6iM1RE2j9V4DCbngor4zsegKCtR2ykTjjmULJ3KFFoVZqpoXghQVUgTptA78oixFNeo7mLu5KBzK8VxbVbAJN",
  "key29": "3TKVABhnusXSsikC8EeGYHbwveeWKVfN6rF35rasfR1CrtGCfeZ5uofoLS9YcYTeCJNoCi8woJPDG1b2ojnVjBN6",
  "key30": "3jhEQTfGsz1QiJ7QZeJaieMjY1soFExHWFZ2wnLNPvRsixXymYSewnq1piqrofKQX6pNDZyiSRiAWvuoF2AnYA5q",
  "key31": "5AbtLXekhQ928gWg1EGy3yTorLFid7qD3WRxCCd213L7FTBFQPfDQhksKJNXmb7yu5mFk4ht1SgRshEfqmEsrb3m",
  "key32": "3PJZiU1XtLBf1KBZNAJkR9NcuBTKFzbgvPDXdEETaLqZa5GKWqQEudSZ72KQBuSH2JVpBaY9aye4VxonqZyLVPkY",
  "key33": "2GWiR2KPXA1ZnrzbwFGPPCc8RbFEJme1fRD7aNm9EqkpxuLzjjFF3WJ8wfUjx2Eo6wD7HqhEdiyFKhtnt5rUj8GZ",
  "key34": "54u3FDuMiYS8RxuTpMRvhbKkYWEVsHcwt83DMQUA9FntmBS15HszDB381Ype99B2AQiekGKfmhSPzas1hD1CTSho",
  "key35": "2YdFxCjvmUuWNomtWjQcFSBMXg6YZQp1xS7A3gQS8a7wPoAU42HR5eARFMYVdzZ4khVwYFvMQh1WZcSJmsmSBBpW",
  "key36": "5k9kKfNUepRv3fZFgqdQE9NjQVGHrwR1r1QwCwxTVhrzNcyo46rvESg2c92qe2dMb4HSBFHGu4VwkKoHCFCaDCen",
  "key37": "Zy45tzebVkTe6AyoQJRkmF5zGm7t4rHUf6RZ996He3U91UF9i7u5cLEBzLnhNmcGuVzYkrfJXsvQzvg4bkoL4xb"
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
