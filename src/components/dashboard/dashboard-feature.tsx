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
    "67CRBtDwdKBwfRaoTs7cbKXDTQhaC8W9kEuUdWMg1VDZsXJP2j8HqBCtt8DGU1Z9kYGLX3KuMxa3eUsax4ReUNcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MdLhy9HxoADQyEEJ586vFj8zHgo2y43CQ3Yxetvzx7SemgTKZ39hz5fYfYEfzBvrP9TfwR76niFAYdAhQer3BQU",
  "key1": "2kR3oFg9BhHtPoEjAfRgfHZ2t7mUhcc5uubsPKhAMWZ1GRcP2ueBoxTi5oP3qqdXcpUuDxMpKry8VdoK1FgSE28b",
  "key2": "4KJqm8H6WN8Zkouri2dBMos6BYZ5b3t4SVnuDb2jKg63BLXKjPnr7koFHbLRkjBYU857sy32BAjj4JjE2jw5ewiz",
  "key3": "D9dXjKiemFNtUrPQ6f53NDVZKs1vDZa72rbV82R5Pca3HzhZyi3aorda3QS9iZmH6nJhp2JsK1FGXURt4KUnYQY",
  "key4": "317wc5G2ACBrVQZFcej2DBewiLUQdu7tKzgxWJYoxSqQRurbYpbG8n72jnbfXo9JrvRBxenoroR4siDGFRVWgBW3",
  "key5": "5PamKWcQRbKSuzGjcLrFrBagu7EbF3KRgkBZZwM6BUGrRPXj5KT12R4JPrYS1xLPMXbq7g7oqP93edQ9fupwhzxi",
  "key6": "PrboaAfmt2SRsmWx7VwojBoFdDgXBgGLPTDQJkTPagFBcg6sMc7ELm6LHgZnvyQeVGS4ydczJJpakX7ShJui68M",
  "key7": "3mWDyLPeoLJ5CRoCW2bgW6czu8U6CSuY5WAymntAc4QnxqsGeEpTK9Kpo1gJS3qpwVn875Ux95eemqfKKi113U1k",
  "key8": "2eZgDWJsJoy5ayhL8CwF5ftTuCmqqAFSwEvMcFSQMciWhjBQzdjVRCqokHMjPhKRQrrsxWp4QGaCWQmoPmFUc42T",
  "key9": "51WDv4gVGaJk1kbYu8EBH8YAxjTcSuQXnAS9eD4fabvTfNNLfhLE213PRtiHK4ppwhmiaTVwmoUzRSjfEV8qhtHx",
  "key10": "2LHGzKdkcQj1RxuG8s9SctZNMaJiKyqmGCJHv3bNBVZsswiiv5YCAbTP8xNUaBN1pScDsApN8mQDgCd2FeTymkuF",
  "key11": "28N4JzdLB3nekXQBXqQg7MMLzDtGypKvvM8REoFws1o2Vb2pER8rbt9XGxTZey8riQJCPiJnsypzY9Z7AUX8Adrf",
  "key12": "1236eWvKvJuSSezaBmjeppSmy1rEaJoPCjnAivxFFWkGiyQzjLTtMM3NH665wKBtPKhTfKp99b8ykkvLopTJetRP",
  "key13": "4AbUk95ZPjVB2kNSRwgja4EpZyLYXG3WFq3wuNP7P8dCu5XcpSif1YHrcGZoCfAigD9Fn5eSxGXCG9ikRo25zwNQ",
  "key14": "2f11C7YyAHvNBKjvu5A7EbKwxJ8Fcvc3PHgTgr6fKGe17Bu9TArAN3Hv83rVjXKQPmFzwURexHw4wxrm9HFZGFpd",
  "key15": "3xfxUkE1262nQaqzCqunhYhafZ4kcWTAVWoETNKApUetjskj9zs5M6xn3qJGyPcrixtKZbrnKm1mAYqYkMTz8AFL",
  "key16": "3QtFYzpU7nm8zrtJtsnKBtGMkayFTY4MMgiEhG81VrbJArPEUin4DMzRWv8D1cKNCvk4SW6hkcmywrtNDXq8MbfG",
  "key17": "3o6MzM39XBxgCPX5AYnJD52dPBozVe4KMeYXbzFMZYULkSw8S1ygJPFci2yc6wNXuv2wefmKEAUDotMcTvoRjDKP",
  "key18": "4iW3HC9jsDszVo7VCRvLop91JWMsxWMGqcMTEBvzCRPjgo863uaEBSk7adSYHdacjyEGLSyYoLjWmvhoZBUK5rfo",
  "key19": "2M2DmaMkwFwMHauDtRTEngVk6CZicDP7foTTaNCz14wUW2FwFQs8BUK2v4DLucXYDNH7Wb81LzqJaUsJZdcDQ88p",
  "key20": "2oD1Q6KJv7ym4fbZjGS3eKiAkYvbwh8C9xmq86v1gHHY9GyoPuX7yYjwDvNg1eBu6M9y8dTgQfzGfEVdg2JzYkpx",
  "key21": "4rkyUHpav4baQRrru8PGj57FeF1ah1QXFwLud7ayyjRESxaVfVhkCZseQKbZcukcwsxTvf8dVsCjHmJLiPBC54XE",
  "key22": "4a1pBceLEJ3ZcsRVBpvpeoGPj8wjRxeCsEd198PAh6E9rU7KDMMYnvrLaLJJvT8HRjUAjhrGiT54y9D3XJc8kkpY",
  "key23": "3MmnqBSuGNwZX7FmkgRsBzuSDL4vnh5z9P9K1bUi5nBnvcU9e4rmGGduXVET1RLLxdrMRuKtLMWLfYS8Pwoxjczq",
  "key24": "27ua73ettmwgnKopSEa8nwPA8rtKVZ95ZQPuSfttnxJHNmgAYZsfiNuRdAJtnc8rYbVjRH4ipnBVdd9U3uWF4TWY",
  "key25": "3nDYacwDXbKu9LG4DWQy3omxGQRaTgJWfuhLXQ59jThVi7jFCdqmNNZ5vPztdja1MHiBZx5MspjCPRyRDBpLSv4Y",
  "key26": "5TZr9ww4mhY5YuDsHRxEYUdS9XBArSW1Y4Ry224jou9mgUkuweEssXQX25FU8WhHKqpZAMUz23DmX4fPcKApNejC",
  "key27": "4fR792kjCpUg4Gg2XJusmTdN8Y2Tfzq6PKk8Mk86iH559gYtidFaArQikv6He1qiKCJfC6WHc6rzSy4sUqrYyXQX",
  "key28": "TqcjQJckhitRAeJQmdU27hPR9sWug1xppGG5vuVbhCEzAj6F3SZXK51LLKFP6UXjoNhcmUq6WpghurXoZAUvKxC",
  "key29": "3FqDqe9UE1vQJ9UczYYD4LxFCyChSKtypNGQx3WumoUUwUti62vWVWHwP5uwaBcbc72THm3yLzaDNkwUipVjN7v3",
  "key30": "3xtFBzmEyB658QeErNrvK5x5rDMCZPJmbWDbGWXsct9ZGu4ZQiq5H9MBdrL7xKz6ddmUKqg9MjznMqzzxegsPYwd",
  "key31": "5wiNy8D1JEA8jESV2FF11kemw7CL1xRxToRfZGrnjD2ZhHkF96GuiUXkW4XKja8oKfQ5zNt5zUPH4ftzDV6mh6mh",
  "key32": "273dzsLtHU48Kz3Dr83RcKcxMDDE6yFZXTQpj61DwDHKdrcwiSnkNdsY4keymdjTuRLyT3FYmWn9QCp4Y4pHbXS7",
  "key33": "2dmR4G887ESK2zBsMw3QAYjDMPtc8pxRfcREQppAoc7ZZ6nRzpn6fDY8GLS5faDzawgnNx7XMfYYHjE54wKKEAoQ",
  "key34": "2vmpZ9STvVjpKtnaWJBDpc8mN1n6x6TTxs3GZbp88LMFh2kdzHSie5QWYWuxPC7Je4QzCGt1Ubo49qQJttu6bGK2"
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
