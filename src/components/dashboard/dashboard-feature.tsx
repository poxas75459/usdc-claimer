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
    "ngvxAuycTmZ5cee5DeuHa1ni15xy6aDfMA9d3HtjZs1eo7HwYy9hyv2T7gY9buqpsTFXmVKqTszKczaLN2DY75Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5biS28XPScJAfH7ZYHsJMiZvY4s6JT9cUS12FcGEnjMyJ2mPuHifgBKcFMoVakdedTa8CDK3YwmHhrm2BxCJja51",
  "key1": "2EV4fmf6zD4w2oC2ne4fc7ydshNx7ai9zmzHV5FhJpPP3ay8s9z1o83FFhXiZ71ooQykBZB9Hdk3mZfUyPjA5JZs",
  "key2": "3256ykxJHphqeLHshVnNBuqt3nmMXywShQXoe84qeTwPzV8WozjA82ZwN7z31Abt952qP4Emw7nEYmzuEq91RT2B",
  "key3": "2GF5Qz1QrGCQEcRgP4LgEezZbmqjJuzGSCFbt6ZrosiMibRpPUBhC81tip2xg1bm8mxyMwVdm2tRdmZhiGKg1vMJ",
  "key4": "3Kw6eCijPcBoGk2Gzp87sKE4PY6gcTk6YfWSBSkYZ3z1wRfL197d5kN3Kf3UKbAwitaUZPpGfCx2rjn2toXa2BpW",
  "key5": "ddK5VvPyc2vaRTDNiL4zAZr2dFQ4vTBonJa7XigCJLvFDBCjRDV5kPyf7pWgtVUnQSMqekYxhpgHu9FooGEztVH",
  "key6": "1NWBM2uf6DykhP9kHskbGgbfQcZvejjPSq4EydsqCdncXES14MrHKvev63UvEdg4YC6D1UqSBz41KQ4GYtVfrYb",
  "key7": "22P3CXYiAPGzqwhY28y9MJMjvVb5xDFz5z7VyczbAJ3CfGwvvaNHwuN1oW5oN83t2pV1LRdvzAmeaicuZ4FdLZwF",
  "key8": "51EijYCdKRAAay9vo4G6r9SHQp9wMfvX5R8EPchHuUiUJJz2x9GY3isrma4Vq7xxNL8vNJzF2mxpg9bsd8LNZrRQ",
  "key9": "5isi3ijrr1gdnht2bbiT8GSHPwBEkcVbU5nXdbMpVENbJeT7C4LUs6RtY6o9RnMwJLiHbkKXW2c4rRFYaD9ZsbVB",
  "key10": "5DAc398GNxFttQRqezhwbTUrrjEHokiBuFNjkeV1pNGuSXrACeQcYL4AM7NsVpy55DMDDZ1DkWu1r8TCfyMR7FPe",
  "key11": "5rY2pLwLVGV4xDkoXaVXYrAtVzVSig4cahEf2qNHNUQFsHtSZVi1NxwdMytC3DUtvNqRwUDL4nRVcn2eyJPFV1Gb",
  "key12": "HpoPfUETZHymgegGazY1MvWY6E1AbqkuJbTvGyRJBq1zMHGmFsHtt3RnKRftinVuBfXTbs7Vbpwasz88f6Y75HP",
  "key13": "2a4bcsBie83R3UnUyNcAfJ33qfRd2Efxc3Rc4WnoMvNdbWRLMnQyfTSpTwPdTtSGvgjL2zGXpd54SbCxFh4LdABM",
  "key14": "4ZaR2Pm6oGLZLQDfxQN7m5X8vVZo3TqEu2NwYpMQfgqkstRrcaqTJiMo6LWiJA5tyB4ngiYpicoA9C89H1v7dS2V",
  "key15": "2ZVSjVTnKCUWrivYJynp156wpia5ciAUmfPie8zqfLXGXboXbgdRRfWxAAukdbZcpGz8Fs9dDpvCYz6ynxnN4zF6",
  "key16": "2W6L4eERoYmntGeTM9uZV6w4kuEMZKsqstG2xVNfiKjkiGPexsKo8pdpYtn2puAqmMMpd4t9N2eEQGKx3pazsWGH",
  "key17": "4jy8ArY9MtdNwoMv9SqTsLPJwYVn2LRHDYcmqh4MBRz67L5H6FwnzCUZ3uHYfYtxRSYAnr35QGcH5KiwB3HvQ6S6",
  "key18": "2uzQUx2SqNfGwHomofhC6PpvCBhUSLDtW457hALcV1poNxp6C97mEDiWyn7tiyzGKiUWRNqmR9MHJ8dAhRNr5BBq",
  "key19": "2tedWz6mSPmSgoArDcU4Jd8Ndk8wFrgK8QQMHzpFpUHM7cteCM7N6yS6HbKfRDcua1yTi47Bipq6snqVL6bCHd5M",
  "key20": "2PHdyE3xGdMe9k5pknDrC5a6xdisBR35CVpGaqmkGNxWDittvwdxXU7duzgeuovNNs89LWch1xNVjEdHfrqfPWUo",
  "key21": "5V1JkJeQCwVwsAdywB1carmYoGrnfLtDiT622rZehmqBCMdF1CB4HxgM8YaT78fV6p2vfzCS7nwA2z1ZfTuXGbQX",
  "key22": "53KQyvCBTkyAxYUhAQWzqwqkDyHnvqvjyTscUCmLAGatLktNhDb9vMGSuNSAQM3erggzvmWFKLqvbhyVutm1dZx2",
  "key23": "4Jn7XNW2Rhp9MBkxGD88yhgJCrxgx2vsi6J8tSgetjYjLMDBJwyBJbnsEbrgAbrB15dTKuz6yHpHopz8qrNei8VF",
  "key24": "cS1yZzqNjfX81VzspdvkNcp69oysKLUNbSJeEdUZSGwHRGAUXza5u5oWW85WvkE3aZV9zQmiKwziXXtApM3MZLE",
  "key25": "5dFUMdsVQGQ951tveoT3mMrfJnmhWSAekHx6LkMcz3v1En5nF5ehDL3N3k5LmCz5NZYXLRt4XqAnGC85jR3s6JfF",
  "key26": "4gCYQu1EymmPy3N6a81dF53dLSQZ7yrCDBhx1DThWeJmTjJ18qt1kqXgAEu8Xk7mSqgttr5BcsT4XEYUU5D4BAit",
  "key27": "4bcr6X5nNENza12dXpQ4Nerof5X9WaMXeygNYA8YipDvsGNVcGnd4FwtcAZJekP9u6m2phLmVWUY7VQHhgKDaYd4",
  "key28": "5Xkp5CZcsR6dgRJpZ5tbAmZgNUiaiXURSvS83SS6WhgbQLz8zidAs8kzEz7eySSmmS39sC3Yb3z5MAQ98hSERxvu"
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
