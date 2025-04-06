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
    "5qgn5MwJhKuYntZzx8mJAGQwoejMHU6aPz83zwv8zrutvStf8NrP6r2FcXKRoVRkS7PKPALKWWF3B5kGvDsgffM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vquRMtTyKrfCZV67LmnhuqHsDa6CVmtSLGPFAz1udh9akHV2rzHiZ1zEMqTzfV5VinLfA9EgvaT4xxgH5XmxEfw",
  "key1": "2VmVRRLPxWoYSWwGjQLxgyEjsjBegRyPnyboEdKk8L9Y8WmDN5ivaSVgHZ9ZSZXQsuSCNyiqrq5pftnV6hRXEHGL",
  "key2": "21P5sfc3mfELztYFjorLJZbz4DXUsbwxrG5Z6hx5ovC1rhu23vX8cCs3sNHa5DLVN33ymP8zZorC7x4shvyT3NVZ",
  "key3": "2h5Kw8oXWWMvoCKXaTXTF7Htyxfr7pffTwiSMmaUBqrGVKptgxHtDh8oXyBwX2ynbNmKUMVom5kArEhetrpj4eAL",
  "key4": "5k3dsg6VkuvLU6MFC71QFdVWBC246dk8Qnwiq72HsF4VVfy21vsU491gTaY7sAXeGKyXPHpPqeMvFA7rpEWuMnSx",
  "key5": "4tVZDruB9onLaETYbSNTaMzAwfAQsPeY4SkJa4mBsF2YZKHdgTqbW7Rvk7yRBr8L6WLQzcCvuFMvrPpWH8Sqe268",
  "key6": "iB4tJnSMBYub3VXyQxQSU46ktnZKLFAVwnveuGYWRBEndJgfq3rBSMeqZZeQ4Hs5STUSKopyMRWWaUXHqanSKSa",
  "key7": "4jEjGjXre3uCeLoZJ3ydyjQN5jaktYeZ31FMe1xZ9Lt9SgTstXK91gcuj71vyXC89S8moDjZCXzvhrvqViWtEQXy",
  "key8": "29wDJrXLoPnvEJjZBrRc1wPGQFpoHsiQgk11BEVAe1arHMamAupzoNAY5iX51nvTnHQtpr8dmnkBmErZGDcnz8nY",
  "key9": "9fh8p6bnsTPKVQGBtojgz7mt8sGijqCMYYYjEdcn7qZEciZNfk1pb2PxJhTijM4UHkGPoS35DTqWT6Q4VQu6TqV",
  "key10": "45tcQgQ1sAcai2LsukMHkW1iQVKF5P71GUV4jwf5ZnP3K8VZvXnu7WGn2jDXhHQpNoyFQGoFZH1gBFhjv1kt54AZ",
  "key11": "58yZCzPVQNjVem1CkWwPx5P3uGhLVBab6myGzymEYsnaT1XiJLEfrSyeQG5kzbjp9RXRFwXDVXEU2SN2mWBeZv5V",
  "key12": "2cgqifF7D45VqLQubWVxqRXsy3tVBffdQXDSgA2mLpQA5RxLdQmJd5NEftw14hDQ2podym5M6MZvjhjMtmqXwEFL",
  "key13": "4TuA9fEyr6ZP5JHSFcSx2gu3wBAXH5z3p2Si9HBktfjoYFe78Xb6dBcxMr5UjDyEvPJXQ6rVv7a4qE2P85ANnBYv",
  "key14": "3YRfS6wdCn3a27QGs2WrGTQE45WG4V2BRvCF93forYxs5WVtfTYhhKX21AoQQxNL9B9XcBdvfKewgZViUpXAA8Rj",
  "key15": "5jLxtK98XK8njtsMwbdx6e2rdeowWqVc8hNCu1V2uBi5iFZ73cxkqwVzeGV3qFGbTZDLA9Cpv8rsRnZL27GHiv8N",
  "key16": "2dme9aczfY8PpGVdSo5X8zzxBBmrvQaiXAeaCRstEjSt2AfZNFrVCmoaBeBDof8Pmn1Mfjsm1YbCQrGvf53rB1Cj",
  "key17": "3n4canH7yrGUakA7bGjVbpLMKCjvTYQKVtbAoVavyoLAt6EqCMm86kCeWzSMSv2pbrNr7YFMFiTU8GmcSnyNcuqW",
  "key18": "2NorBAu1t4THg7ZVXpYMTL8WxAR4WF7mDoFMXw7XQyZAV2dgNy7hrDirnP8TGVDfFzF61KZKYEQctvQbZJUHGpjn",
  "key19": "qguWK8442eFJwrWPfRwBFzLt4sFLG2vd964FWGj9XM8SwyCxYLJyLKjumsC33KHpbFjazfikv46YPfyKxr51cxQ",
  "key20": "3QYSztqjqUVpp1XExKqd8H9pWXHmTnp4DSoEQ4hicsgsvFjsQFFfLgLFs1iMoT43Pjn9N8gwPeiMASpGkvzcdnny",
  "key21": "szy3hFgVUMtRNwTxJNtndsyxe3hafGEiQ1icr9oKzZJpwqKJ2nihcGXo8ZzdTER2dbCiyjbtUUqVqsba8VnFzV5",
  "key22": "Qfznb5D3SV1TT4BXzvAYb64VMouL7E25vWN6gZDvzJXJecb4r6gFUcfixmBewvFEidjwxj2E2UtWx85ttJoWgvp",
  "key23": "4jUrhnyiG9uAj4FqMYeX26x7vXw13KkMa1R1PNVhZ6KChgJnoPvzwVfCNgk73ZKga5vNcdfBFJuwHLsZPtPGeBT4",
  "key24": "3BmghEngWKKMkBdEo3ULC3uPLr95cnuDggbJ3CY5pB3NnAoddCZjab8MPVTz4iuQyAsiGym3qBYsRpNN16wgKDmL",
  "key25": "2CDnXxCLVdtK7nGZnyULEBFt1ngibXNeDnhjvTDsZ77hzSTnajKuGGpRzTkcWYHzoYUa9s6dUBqRTyMRnEtRjXzL",
  "key26": "4BSYmrzMc8EnPbbdUobArqbYYveRgXAZn43zbdnxUFUmgmfsrcJT5m7GMrboAGDvPA3JbjVdy7sQMUW6QjQAetLx",
  "key27": "217WEQyYgpnnZ4dRJTDwzWn4UkFxSosbfMaJ5GPAqt4fH2MGfrV2eSVgKTXzi7WwEvp6rtvcHQGDCDTjXGuY5F2i",
  "key28": "5MuFAXeJPc6q4fGCMr6EvYytXvgghZwFvcWRT6hH3nxQQG4K57H12LRNwFAGFF9fz4wQ6oiyEovVSnhDKuRee2pQ",
  "key29": "3AF8SHLjGehe3LJoGhGk6jbf9N9SpFzj1mwLZf2qfDY5mLxTTz22yABfRSS6ADSeTJKka8QQyqjoENvxgZ5ftn5w",
  "key30": "nsCQBRhgwXkueTtyDWi2utPgGPr9rGVHDTYtgzXuoieaKgH7X5iKUiZ1v6CyNaFvD2Pszmh4aTkDSwveoTQJGFd",
  "key31": "2ifkxEqNt9VdqsWhBgVwetyCm7Cgbymenn8CmDKPt4qnKqT8hy3tf6quHExF2kohZDm5AiFLskUBeCt1Uc4CdNmp",
  "key32": "2QJ59PWXj48Tdi9X3tmqhYghMHU18JHzrHHCKyUhytbjazEhaKFoGBxWe6Hr2hYX6YWJpEobrV6AfTurQTRWR1Sb",
  "key33": "5gHKjVguWhcMmaouvAV1tjLoRf88PyLrQ5CR1qqTKbT49q3KuXn9WA6PQugEUYr4A2eXbqV5JVPFvL6uUV7HuyUp",
  "key34": "3xJETNZeRRQ6qTmySuvZAFzFLeCJfmBWxPhcJY2cuFs7iBDDFhbAkVb1KJ7cb2HVAKg1xhwfWmkboKvLYfe7Ftwy",
  "key35": "2TRPihxm35Qu2ga8KdgKHQWTxrbvhNu1DUzveybnCbhbu6TvJqNvX4MxkKdVJGHrZQbVcHvQJSi1mhoZ4RhcXxX2",
  "key36": "38i6R24seRnVidA3WLE65uBwH4Rrny2ynFveoMWiuZD1LKepcHTDAprs5PJmpJHEFN5ZNbPL93mQVT5kNWeWjK6z",
  "key37": "4kt7ocE19cAeDZaG4GNajTzikGXreKgkhN5bG4HQP5eWGWZRrucZeQBZ5SXxmCv43c4TVGGDWMRQzvio25W3b3iJ",
  "key38": "5pYDvBzJbfooWsLo1LuNhsYvBaGdPcntu8UMrY2zfKM5JZvJe9JHL6417Mxq3F1m1Zsip3KmcGfLRbqd1fVF6gvy",
  "key39": "64KmF7B2vAcwnmWvKzZnf31whTLEmnjVf9GJUY8ffDUeM6TEpJBGYw8jrEoEvN8D8wBJgTQm8CHjkVFEn7wkKg33",
  "key40": "38kTjS2mTpMRJXaU8NB9qCzbGJbKKo8Bs118GCBvCZCV18E22PvAEXax7Z7Ay9q3KTJMLmqo6cNkxN2ur6xtsBdB",
  "key41": "4AjP4Bqb3soZPbiGtqhasKSA7RwnygcX3nWDtQGo9A1fJzQabvVtAaFE8njLTUaPrSuAyTiaAYoKReDL1DT6c92h",
  "key42": "462qTKc61ahe9XvCUKd274ydWWpKhXNSQrHahs17T5PMQ4JdNFEwidhJn2j4PLVyh797QDmzVaMma14Ly4Fy1Zg2",
  "key43": "2mShSZBCbPU85ojx1GjQ41NEDpw7sitG5n8tcPnTLgDeGPUhgHSUPqnoP2C8NcnnR6g5BCDS91KokjebeEdCwHQ5",
  "key44": "2qjdMKYmWpu6uiwgYcKWQSkYmg5sN7847XTM4whpWXriQsENc6XS3UghXuv6Hi6nbFfEBFu5HDBhaJF6Witt2FBn",
  "key45": "4ZzkKDpf5i1v9sYGid4tsfk6kbAw7k17idrdxUEvd6SqTiSbEJ9wwdwNB62zDqZv2KRKqNMoBqr6N9VxHrR5WF8C",
  "key46": "2642HUZovdmYxCuFKfQkMG5qXHM1LKPRBzvrDSBKTThm1XHdqRaKU1tEGJ822pB6uxLV1L9opndSEzbK1b3YSiD2",
  "key47": "1btJNbEJ91k73NC3fvLz4AEvi9RZ2Gjz2C6eapPmpa6UTqdsgMyk2oxKRxmMqvBtj36ZhtyyPWEE7qPRmZWjsZV",
  "key48": "3RvVeYUVk7vUiqCsoWGgiRyqFHTuYMUDjq9eXzXrMWRCPzuDyTQG7WDwCtjbGoXJQfK2D1ZA2wv9mnQMm6tHE12C",
  "key49": "3wdkzKzJup2wUHqHs8dtA15ENR8BWKqwuYexd53NC1KSGTCazvL6BuNpcHwuT8bWsRWq8ihZ9B6idfdHctm81Ui4"
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
