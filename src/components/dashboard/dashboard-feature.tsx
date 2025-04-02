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
    "29hLyhJTjeCyciRBUeyaCbDt1L9ibY72EMf2bhKXdkxR5Z8LdLCAX1J6yYdq9YsmjYYToL6dEVPdMuxmHPwwtCBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZKRxNfq18Tr3fSJhgQX8LcUwcwYgebyqNkDFqAAsKuuM2a8N8hipKLSS3mFk7vUa1GikAb3f6suPCZPeAT6gMBF",
  "key1": "3qhEjTwtiRio6yyomaePA7yw8EAGroEC8vneAgmvFD7uTX34P19bfcCV5sP556xpuSZ4KW4foudLHqRU7xqCBZYH",
  "key2": "5vZiP2xhqJ7bN4QtvAD25MVHMxoPDPVc24SrQrgHu7aL3cLoNaqaEVkeY8EZ6jVoiEwf8QXobyTvJaTijjdfzzSC",
  "key3": "47Xz9iRFQdUV68qyLyZDBiTtaaRjAnvzGHhp9rGPRv7pS5qWp8g2ze4a3zfDnBq2An2pZyCcxXk7ovn5YqZs66Ny",
  "key4": "4V8evnj5DD5rE27MzA2ZZRmdbYtNbBd32xLDYfJMZ7JQNJSR4BDcQ8L1ZiMaVQzt5bEoWcdvSfv5kpnP2pispJqs",
  "key5": "2hJ9HSGdY8traTEY3HBwf6jTFTU43V6Hk7bRPDWo2F1ESKJ2XWuKJfa22ZLQLBgAkGJHXfdNquCgpmzfXHLSFBQm",
  "key6": "5w7vgDZ7jogVeAtYYDmm3PQ3xgtApn6LnuJciLtKuycPmnr7NfqsRz95LE7STR2LHEvaLXzmYMm7BT9jx9U31ZAt",
  "key7": "5aECndFAemEtzzRBSUaPnWrQz7SY8Wq1Z7bj7d3Krne6KefdVsqsP3YxQA8QCcySLpJ8Qnw3bi35bKF9iWPo1fgp",
  "key8": "2ZDnbXhqeCvgZ3tk3vxGb5R6dzit7RAjcpcbNvE92efkKkGfQnmjXFVRVHDr8JsKLrq1sVdJkm31AfFuJfQWUT3e",
  "key9": "5YXw5WQMLHcDeCncRZGKoStwKdg3GTSGpjuTpJBs8dHsdxwaMwx9ScymWZVFbHXDEkUjjwYm4amu8cEWZZRrEbtc",
  "key10": "zPs3nfFr21zDF3bjFcT7iPEbc1KsB2hSfBfSxdN4xDw1oU4qvM7bSHE5bMcNevJyDHna9kSw57GMzMjr1tCcyYL",
  "key11": "8cLBv1XhViHSQLKCEjjT7yVU2FQjYAcZ6sHsSF1i6HA62x5ztx5GhRXv4mGJ2Np3UuLtp1o5cBm1ccxPC9W21at",
  "key12": "NDdnG1YsSANAs9mZNJqKxXHbGmhwWjkKWtHZGfMFptR1QcneUafLx9suYWucDALQU9oRpFuui3cvQFjCsYA26JE",
  "key13": "2Lfa3SUDx3LmNRsF2TdNZyi7JcvhvK4gUr4KVaz76njXLbhWUwLSPF5hs9AuPRC3paQtRxVk6nZueXg4h89RUDe9",
  "key14": "5SR1a863UDTRqx9JH4VJbhVicpqgMuZLQByrVDRtoha65zE34NH8Rabbk5YvCdhqSAFJqSGPXraJReD9rZ9nEaWt",
  "key15": "3KPKCvYnetctNRQ1nKfzgQfSuy9iVL8GqrYGEVcf4mhBShUENzmJYwuHwQJ8CceSKmaRJtZCgvzH5PGNRBzsirWk",
  "key16": "5Jy37s2DX3knsXbsiBdkVe4jGJZcogjLDDadpnhRv3vMjbJALWjULCvkMwwR82fQ7BBoDmBJGTPKchneJ2fiUtTG",
  "key17": "2WBUGe4nxFtNGiu9W9uoSxvVG4DFCtn1Qk4TsMVp4ZrL5XGMPjVno7xWvV4ELeCHs4dMyj8oKFCuL8wzRauV9pVJ",
  "key18": "4eTJ1NCfCzDEG11znk96KtgYHKnytkz9VAcdT5ujLXuoXKMnzS6oFqnEhx3mKq5Zb1b3NuFG49tYHfuFDQtbBk63",
  "key19": "2dg2yQJM47oka4yzW6VsWLnEuFwoU7b8WHvD7i7t8gc9iMRy1F1NTJbDBAQNqX3UpGJPXFhecgujqQ816oaGGXyp",
  "key20": "4Y3bnwFwDteaUiLJorEDermezL3LdG7L7GxBQ2Qu9epspZVfQdJakRF1ADzT3boGucLmiJNhnbMy5queUcK8DMU4",
  "key21": "34uh8Tmxx7dRbkh2bNxNey7cwvibehyL3wk17Dw3gXUbiCczRiYJCoiYRtGyRU9xygsUFjcCUE2jw3QYokXvhHLo",
  "key22": "2mkds7Y9DqNLJgqfhTrkxWKdN6y2U1KB8ZvHFTopTu2U35n5BAQNsdKubdUKLSvhwstdbDPjEFVSwhoRR3L1nSKA",
  "key23": "3oFgcyx2ipvBFo2cUPfQM6bAvEHiAJiQtrwXoHHrji2RfC5Pxg2YBnEqVGYebXDKVfdgWk81596LxfBme6CwFXSj",
  "key24": "4VYdx4MH4VhQmaBscFqt17teibdrF2yo61mcD543guuiU1JbSi9e584F48yuD1fGh64Cx5nSRXvy7pGQiGyXkPVZ",
  "key25": "GYT5NjjQXc9DBfe21SwPz9wjncSvF3q5YWXuHzfVEJcNv8o3xhanvekA8xHtZh3Zgxr6nErHC63Yz8AppXbRXkf",
  "key26": "3Lnmhqq1kHcaC292mvQKmJV9rQLm3j4uy5Zq2uZ7bhwmj38FRoLp1NTt9EiSdQJxEctjXk1e9oSHGwnrSMDdkknx"
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
