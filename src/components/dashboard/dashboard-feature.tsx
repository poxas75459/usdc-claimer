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
    "5qRTiiZg19MratXYiiCnwjWPVT446tbTSD5dmQLaG6v82piAszde15CXRw3o7kbamWUUorPoSwGYPCwxy9zxP3WE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZaJRJ95F6b2xvCMxPZg84KACrPur6Tp7yjSVsYEm1LvpZyyksajN1MDYNqUT4d65EpcFq9yb3Lg7NLzhMnaEQ8",
  "key1": "3cMHqr1pXqmpjnpAMjkZZgpW1SNifETUDAc8hTrT6VYxednCa8bp6MsDqV9vCSUvUggYTecLJ5izNmngseuQKrrH",
  "key2": "3mYsDUenYqEeztnmD1DfLZnedx7jDtRZzVRP5L1bNBLZwPCxHKScwbZdDbZaXBvjwR3cMTDFgBeYZmjSeNCCbdJe",
  "key3": "2yAvp9swWh8Ndsz3c6eJh3AVvGs4jTT5ssHd2Y6LbEhd7fikxXEKQnvna7czkifd3PJsC9H6v1fYTYRHZT2h4ncp",
  "key4": "4u16tMvdfmKEcpJAdmiTbeahXa3Bad23agJe2n5zNQFhW4PWwfSoK6qcdY4XmzFVpaax4iTUKE7RNFqoMVULiXHd",
  "key5": "2n8N6pEkXSrEis1NAoaJ4vWLR8V11XybLpfiUGZxSRFo36WeYk6YNvkFMWJe3ihSQzHLrSnR2vKRTHb2oc6VLkni",
  "key6": "4PMLXVcLUPNd9wefs7wUuDrrNNzt4FTakN7vS1oKP1cNCmW4YseTyDUURxpcvJvbVGHfxCVjMkucPe25FHWvKimb",
  "key7": "41ZCk5Yny3VEr5FEz9SkN7nbS486VKzDCgyYP5osq8tq7nqq3A5w1MxXYhFeE2am5NkjTNoHX6s1GQBiXkMmTYsR",
  "key8": "kAW2tzL7uwcUVchyBYUs9uh3BQAbM4LULD1HbSNaobvMyjxqkwUuyZzHmVoM61wJ2PjXenyNTo83tT8aKPDBpp8",
  "key9": "4ak272muNmfpjwm7CpCDEp7k6cBp2FzJmJmUfAqrJaXQnSr4Jnvi6HvwRPn84yuHRc9LTr2sMMw4uNUNgRnJVqK6",
  "key10": "35aEWiWZ8YvtYxXdMUcDRZ2DTSN78eEKHWhf5RzRV352HC8ZnXWWh3uwJhCy7HNgWNUofdDGX8SQKNjGUMrXJhFC",
  "key11": "5VfR1RGRyn1adNSw3PQNTvypJN9b6LSMy4yEDu94ds43wDi8A1nGbcRH21yqToymQc1qGbS6YfRAHHV9qmPnVSwV",
  "key12": "RktEz4SWBCENwM6LqeHTw5ZE9rj8qpj8WkymgK7qtQeZdyX5Tmb28LtjK7TUtcNxUUNKhzcui3R2867eJLWsHbc",
  "key13": "39Li5Aiv6wLqDYNLKbE1aSRTci5vSzaJJwY8Q9kkB9LkmxfamPeV8SzAo6BW3H2yoyML7nKrZJV9h5TbViHHa67m",
  "key14": "4xSF9GBiWjFxTRkQNAxNDZZfAgMHvFhsnXAaPdZBSx7dJfAc6GeVthUiFzH7oFCEktYU6vF4Wj8ZAaoBw6ahgeY2",
  "key15": "5fXWKpg83JhVGg2u2eSv6rzf4PJcPLGzb9R4NLrSTST44VdQjZvz9yd63r7b5v9GR9QkBDC9Y1zgvBbMYiW8PEr6",
  "key16": "2oj5VBmZt9L8KjoqczfMgxfMAWWERDZ77Cg3dNtgbbBPTwDeiYgzBPNQCGu3mvieQUhYepc2hfdQWruQCB1dUfFp",
  "key17": "5s4NHxdybzfLKBA4b2jQS3B987QCtmMWHts8krVFT6MMx8pDkwgXwMHhGGemVh8Pzn5FX3ecXnhAn3STF3NtcVKR",
  "key18": "43uLHHY9FKUJ38CA4UioeZTH2jP2UZnsqB3VwcuEMHJEiSPu783sZLhsSdUcv3j9UvzdfWJTqURVyhm9sjCCdrMw",
  "key19": "2mS8DwnEKxXgAybWTL8ArwnFSLpHKYgtatnrv22wRUNLzo9wppctFKS29aJkgQLKvzcawAohoFWNdMpM75ErRwJM",
  "key20": "3dLefNVUtuScGdekAEGRhJDdwYNQQmvPJYEdCtM6CcGbaywDSSPBGM7U8kZ4QKmWfVXYy6TxLn68gXNpD9qXzCci",
  "key21": "5eNe4DYGtZ2x2uEPq6mwT5c7QwQcDwJDM82KQjoSfJxWmR44CAc6nA1U91ZSmadJP5y5P63u9oqXwthpQxkwnR8o",
  "key22": "uratux3LA5DwPxRNzGkj6VZt7jaKcMi5ytxax6Ea8zUUAvAWStfYaAeHY3r6qrfT2heCKmL6FYjaT2LC6NMvmzz",
  "key23": "4jMN8wcNSE4ae1xN5zUV4Dw8HqZiHchqBfb3Sh2UjEsamjFGTeHsE5EbHSEEjLqCK1hatd79zH4zKqC4pfwceAf4",
  "key24": "516nmrBihtqUjXQxq6Q15Y3r9ibtktXCn4Nt8X2Aq3NcuH2EPgZyVeUkR3qdSkRnRhwuajdd22LxUiyabQXcsUCh",
  "key25": "25xfZKJu1mePBK1Qk6cHKeggXC1xYC69zLfhmeCErdvu7UFr4wvVVyyoTBaXeo9oigww4wRg5xwrJmjJtzYA7HH5",
  "key26": "L2dmUZbStWgx7K6avjDu4XUL7CR62w6ydFQveak1aBKwLFdGVfed4jfTAPwSnUHtvv3xSEfKBBq7ucKdrSSNVsV",
  "key27": "utc9ujQfzL2PeLWrjpr2i3vJRe8NPvPdA66Zcz9xXxBmjQM6sx69sj6xuGLBzTKnSb4spddBKrHQm3yxb8PXbCP",
  "key28": "5mrG6dHDsL9y3d4nPmuDx74syZuZx4YgarA8aeb3Mjtv4EXbL6G24dqWpL7RY5S6fRryL9cj4vot35LGLY6dGro5",
  "key29": "4Pj13pk7AvxqSguKfZok6tHACENMww1mqLUUuMeqh8JrHqAijANBSwiyg6YceDFQZwUqxv741a1Ub8DhBNqJE23N",
  "key30": "63eYKzSpQQ7e9ixCcwW25n2AVpZx7Z8BkHWJbU74CpakRyxsyKyeU9t3ZvQyWZpxDmpd3CvCMiFQSzQtVcd844sy",
  "key31": "2X14GYVk2juTcNUVHRHshvsXzgazrftguLv9iLaukQfodDba135nGEB3Wki25ctDhnhdJsiTaw6FuuujGdcthG3E",
  "key32": "5oYMv7KVWqLhoePKF1xp7zdfNo1QRrGwLWZN7gfzndCXjAE7gbGr9GpAqrR9uuUHLPcAot7FdPZ51AGxaXmvAtKU",
  "key33": "2AxMS8eeDpeAPqcejMSAfnCZRJ5W36w1RL4dnfL3q1NpKiAVmXhy2iHsWTRPf5LyxRBkFwpdgauQ8LhVbpc2pJNA",
  "key34": "61hVbo556aHxoCcc3B29f66hYvDSVrWw5aCv76L2NGoHfTCHFtqVLpPzrH421YoFxAe3JtM8dGqXfzG1iM61sLZZ",
  "key35": "zJGwQh6xfMirtV46w9d8NVf5gorrhctUaxm5YftT8yF8qKNnGkyPvq4NotnFP1FKLc8BQxaiFqLzH8zQknuB5ZH",
  "key36": "b3mbXmgYtDFkoySeoZTQGLbJi3mu8C9n3aD5L8wP7ik4ue2mNHQJLH42X19AiWqBwNXV3TMg2imAtm29hLoppkF",
  "key37": "2qQxrDGnFwqAcGXZEqod24VuMNNuxdwmMBovuzra6g8KhBXxWFRqdJy71LR69wt1SZ6nDxa39HRh8oEmEa2FcnQa",
  "key38": "3KH2rEvG6wzmiDGE5rqxfUDgvqFngf45bmmaAAArVFN4GGxHH3UDRNLkepsuU95m27bcwo5DJ8XPf9g3zbLDa4Wc"
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
