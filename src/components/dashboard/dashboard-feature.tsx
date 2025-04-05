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
    "5gBaPnVRrVmGw3SESBX15piz7PxtbyeL9EdpcBrX16ddx37CyFMxRJjC8T5ebZCKQA2ApkheGZxxK5Vw8cfBCBj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hHSamU8TyMLVLwXZMFr1ZBE9TYjn99AcE471ZQnfxG43nDoGWnqQEzSHGut1r9ss8FtfMtUWiAJBFYtVqm13kDK",
  "key1": "3bgkGmjBNeTMxDaT36ELfcQesGYobMT8U9jqgkHR5Hrz4CrsAS81JFKgVxhoMiYTCJkWJT1p9HXSBSuxAHVNZ8kj",
  "key2": "4cPKLcD1BoZfbUSccYdE5Pc6e14F6qvLHabd2ywUomqj6SikkmLSnK15ynxD9aaENz8MPo4V3aoTFhYCd1S59AGT",
  "key3": "3kB8yxJPtBktBbmob2Tqcn4v5HqmEvJHEXrFqT7rHtLdvEzQKmvP8Y1BqNvWYys2XKSyChqJWk7XNEYoUtsNJAzD",
  "key4": "2xdXiKSh157A2po88DqhjLR83Wz5tZKT7EhG14CQhG2Janu7hMNy53XL5CLLxmxHeXS1xZLMycvwCSX17mnokoKN",
  "key5": "2UM5GNiQxkp8zMZQzERt7aU9GuqcMZEMo2gKjaHzR1DW1dT7Yq9Nf9h6rRnCC2wWi9FQFsagQzMGqTqTsSKpJLNX",
  "key6": "JfWg8W8DT3uLsryY4VJ2Zh8S1vGu9yYHHcQqkRyPZKKFvePR5UXrjhHDe2kh6r7gQ8XzgHBACQWnnn7UPX5VUVc",
  "key7": "2hnhpwx9hCZ5PBy4QbjT2bJKuVHRTLYjYb6prccyvjMgwxActznK4WooPf8hMqJgkQfQwE2LVPmaZqgwEy8hnX5G",
  "key8": "5u15Dp2qQvy4vaXxKGetXpiKwMzqKWmi6Cbu1ar8ufqNS8c7AZRtBBLx1Xd4KMT8Mw95c7fsGjPqH1S7TifM2kSx",
  "key9": "66ofspLgEwyUh5nVyxnxa4DWeR8hqpg4gLSAx6HjeaeDwDi1jWXtQDY44uCqUKxqtcJsCzN7VetT3Z68pjiZ3V6x",
  "key10": "21TGExozwNW48ZAHxUVSdiame3XT9XnVjq2aDjEDzYEi6A2YULAVt9jpZPyEj6ff2JQkZghcoVxV3RCyX7fiKDYW",
  "key11": "x7ctPK3wHW4AH8xvf6X7xvCh6jrjf8vbJ3xkS4fB9juNDwsLqr9L6ozP7Hpng8BB1oAV8Vse8vPrAN1iR7C7juR",
  "key12": "5BYnjinK4XJtEG5gAjehQM5aRhK8W9KAXWL1aCvbEDa3QnYLWF4da83vyzUsHNkH7PoaZsos1rs3yTY9u89J3vqX",
  "key13": "28kQhoHibg8PQDg1DTWJYs6qjnDWPXfo3d62VP4medueRhQ2ESRVdbjNUZxTNuS9UTjsStT85oCei1XsaGLaroVo",
  "key14": "K9XNwBRQzWxxYo5pMajnojJFWcK9hAALe8DtjfNsUEE46bSgebnjXYeHAWp6K8TCitSieVmPjs1J2R8i2dvkQSU",
  "key15": "4PPuxpNVV7pndZ2jFi9XeyhYc7nHixAYYHpJVq1mMQk98ChTahewFPfH2wJeQSKnRGKwfhnMqJnbgxQb4ZoF83ST",
  "key16": "2veMJFL2LdcHvbFozTdVowCstrTQQrFPevCT16BKkEFKETTPQZnSDQaqLen31xoM51FdQ77cGLT86hiDnkvQA61R",
  "key17": "4FnoHNZgHpAPLSD3jCqgudt9NXJyzzMr6NwHjAgMWKgqZEXiXYUxxtwfpWPfW75BMNPfvzXhez9fmJPy4P3KAARu",
  "key18": "mh7q68DnmHX3C3j3hNRYeJBMFfW7q39PiKZ7rtCYEFsqMEc3vxoNozc4iXyBa1xt8HCpxCzB3mxrCxiXzXjDoJD",
  "key19": "5XdNhr5G9nzSFLyru4W83kJ5in327e2HWy1fNNj92RvTYpLWHPWfpfNhEL9ZxiDGFvvfh5KwKixgZfGFFJvAuasv",
  "key20": "4Y45pvp1ecKbCR8t2SzYGBEpw9TAy88eCH4aUXYzMjV2fNrAz37CefvSvgnjaZqBx3Z4wpyqEMs1vTfykQG956rh",
  "key21": "2uFsp4Cvk7XonCZGpErUb2dEKWoh3GkrHWFbu6ChcYJaxet42nMiXnWgyrZBp8W1DLs6jCpwjHAMgFYV4wMTphwJ",
  "key22": "SiSJHnqmTvx31rSCDGJ7vR314onvRpssA1EMNDQF1fFYupkHWmQgww3hke2zAVEUHaHk3Kwt2sauLnovRJUkSqs",
  "key23": "2pYU8F4TVFrMPRjC1jip3tfVpZMJy558k8AZthUAPjLX3jFtyQbXhsKjkST4LgqLN4b5Kr931Y6mQx67mt2rYinj",
  "key24": "2AzShDnhjs3x2Xhh5p2Gfuw9BoXdYTpaDRb8oXfwXKB5BRczQCMnw5VrvMRPbrh8ArCx5ijivFckDK9dM3ekUeSg",
  "key25": "YVS57rEHaQDqqhC6LpKzGtMJJ54wHL4YFMJw6AsqSwzheDVhQn9SXpLdW61Lze8MGhnpyCKxCvDWg5SeYtZ3PP4",
  "key26": "q8EPLfJY74NC96CmadZmn1jspG8XSo3RoVimo9CfURnHKNZ9DGePHyz3q4PTEK84naZ3HiLrR73thtHto7fuzau"
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
