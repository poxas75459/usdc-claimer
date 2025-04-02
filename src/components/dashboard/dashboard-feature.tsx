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
    "2UjY5CD1RE4tusK3adttNSFRgfPSH6D8mEbZBDESTnZv7UzpRZgLiNoAteQMjD9kZEXYoefL6wt7JQ1Y3fzVjd1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VpowfNdkAzDwnPmC1pZS3crLAiYmr4JB2yKZeyh4YyfRQTKntLsJuyWekgvsYXpqjna6WW46mnGPDsExHPQ5EYf",
  "key1": "5cKQKcwPni7QdahuFJb1qnd7sugc1cmBv2xk4uxRRQwaw1F87rrpVucevfR38hrs38WqNscpFsFMKPGtxTwAN8y9",
  "key2": "5Jezsfgc93PEvcwSAqDrGV6jNboBbyNDywVsxKME7DmijQ2cijXsHPAF6BWwN3DnXt9rvKZ1ytu4bpLnAt3qnKbQ",
  "key3": "35NinShyffHDb3D4XcUC25MZbyAmNAqxkCuGUXuWGRiZjNBefsSRycBgG6sYjAF3RoubemzYvZ9nmJU6KuXVkzPb",
  "key4": "2ZhCEFqWcLeB8bbY6zSw2hAkH278NGzeUDyZB7WNdn4n4ZW5r7WAeGDD6XiGxPB7U9T9yYVaGZ6tHYGRGXbY3kML",
  "key5": "3isJshAXFvCZit7F9BqM1cUe9Fqs14HajchyWYHZnqDwJNmn89CL63fJHzqY65yiX72Tjk2cvoNAhCM9MUdpn6S1",
  "key6": "4EVo58odJRUxPimW6ZHzKeWRtXMhQobXvUok6UX8uXmEj2KtANUKPqFV44joe56cjJ9qiuGnvnMTBPyPCNKiLmG1",
  "key7": "43uSPnjwMKH64T3t6ch8ouf6MiEMAXedH7oXp7vkBGEg8JC2VHg9Scj7j8y9LMZJgonhapu9sNCFm1aSM6PxNcVq",
  "key8": "2y8W8ZJnzSKrbp4c2bxFTZPkMsA7GSYSw9QKmkwUyWPqwj7xgMxUGAm3GKF8RUyDLHW6jS1Bsune69VSq8nsdvjY",
  "key9": "hJaTs9qkMPGtaTZ9oYvBHEssP45wLWEXd3iqJ8kQKFX5yKspb1dQrExEPviKr9CHynwxyU7GSKnrYtY2mo2tEma",
  "key10": "2BtekTUzUXJtq5XDEgHV6DMtp8WcpCr6rTeFcwEgEhwf72XVSQV7wYSduHM9ez58DJztQ2xf1H2JT8om3S2FRHX5",
  "key11": "5NLtg8mgcmEobEy3eLYA4bgjybTPqkMB2euo4V2U3VPdcKD4P5XxNsunLMf2Zsu8gJkiU8PvaxspKGSjXS4XSNJq",
  "key12": "2h7w9Eq3Nb7bUUWx9RnC4wdN4kkYjXzhXiTFwt7uTfzsybjg1fZBJksVzUx9BP5s6vFb2xzmZWDUVfU8yS9wjsB6",
  "key13": "3kNzHPqeoktdjSdHsjq5Wyp64t5Xc6Jrfb9fQpMkvx8qYj2EzxUrCGLvXZNF7N6AYA4N1L4gYWrN3WaTQUydNjAB",
  "key14": "5gkfEJcW1qgQZMyfa9NWceJa119anbZZkfAabpvJM2wc8Q7ua1iXAnwYCVWDphgLwqxuNmjGSEqR1TwHsZuvmxdV",
  "key15": "4VzGsWd2AmgYY7MGKcGg4q14m6Cq1oDzGMGtD3oxApZP4rfNHve2mNaUTZTLb5vuRaDDTZag6f7rarWFuou9gJvV",
  "key16": "54sBHuCfx1zXWLs1Rk2T6k3Y8NPQcLz2hquhBaqosh2Ds2Lsb2H8tYW2czgsBQ7hVzLpVwUTfguGoWrLsvGkCaWk",
  "key17": "2JfAgTGDjPFNF1RYvwuA2mFjxa2S23TxQUx5JDwRn5u1Qqrf4zxFGsTjfRgmYRQxKaDN8vwuox6SxEUivvSwdRMS",
  "key18": "2WTE8AuZabpYYn5QiPiBH7vVA8GwjvpWV4pZFvPk1viuSnXsDrXRXzrbV5vpGFnGH6EXggRc8TJ5QyUVU4NxzKo6",
  "key19": "41Zc9vNw7wPnRBguG7g5CsRdapRKypW7XJidTiZNUkUNHedvXU87iYRX46gk34F6FjGWRrPNBevkb5AQQquLW5Yf",
  "key20": "4Aw5rm4udVZunhWDhmAg5DNr62XMAvjB7H9YBzJXePymRRznKL9c5H47LrZpvgwRswdmxH5Kxxsk4AD6uVUx8rdH",
  "key21": "4dB4TzjVAr6cmUdrxnc7oP7jg9gVRSnd9R8kzdWbwpoe7T6ziQJYasoGciScGQfMJzPADdGYyqQdgLFe4MPXRrZm",
  "key22": "38kBWFtnNJD3n5GtHDnSo3dNg7jPTRgVcYnbLnKZ62bu4yoE9vwTPKxUZxGZENKFfcFybSkPRZ2BS4MCns3u5h4X",
  "key23": "5kbVymufEqRayr8KhW2v6rbQupvnekAkAo3FnNi63Efw1xPz8PtQpMAzDeWR3DVYenpMnSwBT8kksyzYUSr8zJZ3",
  "key24": "diHgrhqWUFaMj9mPcxsqwAQtwmiEmq6GPZZUawWzYNbCyQ5oDu8MDbtVFxYC7DvXsGrDyZArvUGctpUwogwt6eJ",
  "key25": "3tV4sEyr7pGeM9kLr6CRW886QfUjfAtzWTcyZZuwyg7FK4sWYNwShNjnURmJ8mqP6uPmphvd3ck5xhZTSakTGWxD",
  "key26": "5h37i4n81k4j3ksEb37e6Z7VrsVSdVBUupCPAhGJ5pC5TyVQwe3zt9PRX4RBGrcdtCpDqbVPoxH9aCghMVomQMUa",
  "key27": "3eyG39izKsPwKH5cB4ntjnvFJDAcGYgRbvfBDi1zFC5123bTVLG6QN6yFTVx7kEgCwrZifM6Fbb4JenaU1hX6v9d",
  "key28": "AX6xPUzXGtNVyc5iUVmXYkfFve1tX2DhJtkgDi6YvGhe28bQVrKbYEqPpMF38Yox1NVvRsBU8L9BNEsYq6kp2kC",
  "key29": "3iedt8QXJKjHTJkc3RWewCtoqMsVUAYsu1pWCU1e3DtFix9USo89aHGwm6ZLJedLKXV3VkYoFJvJbRm4CTwGJmRt",
  "key30": "5GDNCjpqn4htuH1cdgpLEhxuZfisYAU2VqUT47itqGqpu79WvuWsxrusqHsiPdehnDoTEPpi3vAKPKrU9tLBRaAF",
  "key31": "eeY3b9nN2yMATcMbvguiTVj3XVLPKEjLmKvcLp9vjkQKUc3MRd3A6ii8CW6Zhnju5CWT4izDZ3B4sYHfb74mBEe",
  "key32": "42ZLoNf74hiHSAN2GQNvetGDC75qfqkACCCZaxxYD3dx4o16fkcnwnxLhUaJGgq6vrJzUnDLULJCVgoSKBNUdgVn",
  "key33": "3t6GxReR4grsC3UQDzWqCkqEJNMrFNw6LTZQk2XbmdSfyerbREpPLsdZ43FZr5Eo2Sw9YXiKD2nNjSXtCArM3b1M",
  "key34": "RRo1KgqEv8aV172yR8GEvEVKauJzHYQajC6krGVx2ZrDCaxXbArtFtNy8eaeEHvgZ3YthH6Gy3Y2TfGRV9N899X",
  "key35": "2FN2MmRUuDiSuyyWS7qyPkBitzm7Cn2rVBsQXEVDknx2vUiYLtqkNKodLoqdoXtxuALk4uBnxwzzMhQk5JXHxMTU",
  "key36": "5wPCRaAJwUBa5Y74XjXzt7XzQe8dZXmoURa51tdmCK1fzt9mxwAhmAFXb5fNVUA9ZPkesjjSgaaGxMhYM7GgDZje",
  "key37": "5BnxHyGnMwBbdc7YCG1UiDuXvHFGmiDTJwvqUXyng9mghSrcPNmmBCZYg6WM3gYzG1iDTqcTWCsqYwk5YfpFAakd",
  "key38": "5eSPFTN81k4a1ZL1eGZi98jLcjFoaHvr3pVUjqNJktGNrFQz7HpArMo6VvorZk3DBqB2Ko2Hnc6FCZWyDyeK8MUc",
  "key39": "4rX6hYQCESReP3xq5NqTbqhNCBLjWE8yMGiRBVXrQLihggt57haD5NS4WQbetiDvpDX5aZ9cnU2djpkp5pShjAzf",
  "key40": "5CarZREQuw7v3SVvc6hMDKXSLV2qrMwPiQ7MswyUrv7UeNXc8g7vhKA17nbcFFz3jgzJpuiq7qnuWyWurLsgJNyD",
  "key41": "3FktGhUek8fZq9Gac65wSWXd1wHbG7ctMHGeHoDXSzXRUGS4yZkqFNsByQ2nZvG5oJPuc3vUoFin7z9ER3pAhxX3",
  "key42": "3J16zhSYcWC4iBjFYDj1daEFLEqrqW9Gyft6DrJkxW1myardPtRkj3RdGPccnEJEmXm8ZBn3L6MvUaEJVrm4fYQ3",
  "key43": "2eNXZFvgBFgaFUT78BXnMyF8f6DzuJqs6ZvqHQBgrCjpvdnQp3H4t2hsX8V48D3FKUBx8VnfJywQhDE7BRHB1qfh",
  "key44": "2dToh5r99jgJyVeACeXDkvJkKh4n8cFd4eL3KjYHcCX9CB25Hca6SXoPjHApmMmZF5DNS4RHjREY7PpKkJsujqnq"
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
