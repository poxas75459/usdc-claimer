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
    "2t8e5hT8pGdbsft7HP683uvgtijVDwVAaMoA29xgPd6rYoGZPKtGTJsJXHgeaiqREVszHRuJbLXQ9wnfV21T4SmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uYvk29EFx86VRqLNrg2MPZDsZHZsAJfwC65J3dBATc9z6hhHy92955dD9sCsTZF89amr3CfpneuhLNcBNqocLrP",
  "key1": "5sEA6A7iV6LndyfWdqAR2jbVax9tuufHu9sXcv6EaVpm7JMyNGmyX98KBcCQz8f9o2V2RWsVghtGFvQWtT9CXokz",
  "key2": "2wButmGPkCWgKKs4MdAT9FHgnWoBukjzH5VFszsSEUXRXKQQnoC4n5eAzr1ishs2Xjd7jGUzF186BXgEPBJspHw9",
  "key3": "2krbN1PiipZv6894KFDKxz5HhAw1zwK3QAPPyYDUXYeBaW6SxVQJTBH2vDesGD49pPpRJHsFAhCYeCummNXwTVCU",
  "key4": "5M5Xcp1gWwvVhUDS5rhRAdDu53X6qKoLWrPSEYBHzvkcDqqUEThB7Wa8ggTjTFtpsXi4VsuTn7f8Z9fhP3deenBg",
  "key5": "666tbmjVSniL2Lgbk6xDdudaxhE3ht9DGcj7efksqLaXJPTxHEox5sWdsTix8dRZCUGsHcXcb7M4XWUL3339BnEY",
  "key6": "3YnJnJPooUrnmU8D7qdCvYC8nYDdrobVV3axGterpJR4b5thT6cMrA5STCLs7w2Eo7rFVwMy7GVBMcnrz7N4vqA3",
  "key7": "2H7ntB6oZQp1xEgE7CB9i9GhGDu3DFv6Gw5kBJs4rozeEUHR5TqvpszeKxPdAfuoKTqCDx5E4xA4tAGQDvaSmdLG",
  "key8": "NsFPmKCoEwdzjA948DS1XbPSTdFHbKTRJAoVyx8SgCdbtqwFWSdJwdKD9nYYYfy5AGPXoeaNBTJaxZPgHwTL7pt",
  "key9": "5MQMz58EpWqtuDFhg9FqHYTo5w4W623CddmuhcvZuoaxmJuKtnLEeVZKzvaPUD9rRqiLJAL5T2Hy29vEchsfDU4R",
  "key10": "4tmmHjYiADdvpt5bzesCpy6MaFuuQr3y1ZGsrNyeCH7HrzxPQrLY1H27Ghq1joBurn6S3FfGBDqhNktrqB2Ewjd1",
  "key11": "4RnugerxUykaEgp6gbFvpfzVHpeaTWtRotgeV8CweE4vCMorr23PhwwKWkkdDfsqcQQA4134eP46qAtLNRUH1aWp",
  "key12": "3wpck9voMpPH9GVi4JUQiNen7STvhDiMna2BUngTxy3EZRzRfhxXpnuvN3DscY3foq47pAop1GA7NHArkX8ZS7Yh",
  "key13": "65E1SRKuuYUYs7TTY9oKY7SXW2Gz86PhrDbVyNYBS4BWU36UCs1VgcWoEtM8o8KSJoPpEDBU8rSyNziR7y8fajNh",
  "key14": "5u4xjzAaFoVfj3Ri9g1v6CudaSNU3wjtHezhkaf6ksLfT6duQTSKV49SKR2vUZDaMHXKtE6fSjkShTTyMA7rLWyA",
  "key15": "4QEc4CPH2wfz9tRXGtjPsWHxvHCFmYihtKv2PMspGCnHG95MPMVX3FvAnqCE7ufijqr48KxgS6WMNLtRgcFDVDiD",
  "key16": "5DHqRvea2J4ZwAQw26eG2v4su31FUSCVyF1jND37Xxpu5TyZZ2UayjJbLUjdVpn2eVyk1dca3sAdcK2PLvLq8RN7",
  "key17": "5aMshQML9pwp3GHxtHPG6Ge4CKRrf7KHA8gx4SZTz3rbnMsFwFHnjU3s5w9s2JJmm4aruKsZHNsrLNWQtQFH6VH5",
  "key18": "31Ct5ojRoAyS1vqAitz2mpuNt1RpGrxr9HsoHZt2Gn4ZnrV7ioD8N21CS74vXUBb22LQRr1tXDhBBExVLkuFgr5r",
  "key19": "zZwgWdvX5PZYBPZoNaQpzMPCEiriruSsxqevKRiiNyXZeAZ6egKDriroeoX71Hv2GDyYwSRxss7nW5YY2AdpBZL",
  "key20": "Vnkr3DdvMe95ozFE3XbWickQf8DNKzrwi6mwVGFkRGHvXNyEkCYYSknAiy4P9TnxR8BUvvar2TGc6qozTW3wSu6",
  "key21": "TtHjM95q1JAWeYVV6yRmpgLYmwbLNvhDajB5C8m9VM7aKww9gsnxfX9m37aa2Xh5SMj82nrWw9Uh78KP9hVQyKQ",
  "key22": "638xVU5AUkcAsQAQZuAynZn4W8KfojzhZkhEM4hLC7q3MKPp4yZiSGJHzyC4f9skWHWpXJtUg4qFfhdRZEaDzeF9",
  "key23": "3VPCwP4HFCFTokGV5L7ECCST9RGAz6aGF3n8iZxnEPqT2Rz44DNdYFSi845haoYXhitgXxW1hH8LRjq688ZkYEQL",
  "key24": "26ypC3WCNRpZ9egGrgVhC9FoG7EbnHDZa17s9pwCkQ9HaiLGgcAGNerBVj8yitCdzkiLGw9ofxq5GHZzJPjpfCpD",
  "key25": "4uqfZKcWpjmyZ9PpgKAxiqRNsX3mpD3jArtVM9aycFv1sQkkdcyBjBpHiJ7w6FWv4KnxY32ksaJj5z7L7YDth1Vn",
  "key26": "5Qoiwv8FiiwADCjLanAEAHTNgLrFKJTotavQmg3xj8BWq3kvAYzH8nua79DQHAV4WFfyUhsssmuP45gnZVboSAks",
  "key27": "4v5FEG6MGauxrPgQ4B4bCmNuRjwkpYLGPoezkyZKf24p6PYN5jpy7RWLD9pDW7HrU6eFcnJmyA3rCHi9YRFoXFXZ",
  "key28": "48TEPN1ivihEhnwrtTniP6KLPZGSLg6ScjdTXTZrnXap9kU74nScRK3CWVpxxoX2m38BoxWYaExWMxXRwypmDetD",
  "key29": "4kZgd1oeeuTg3rY8iKC3C9mN5hrzrX4ggMYHutiFeNasXwjBbuBjtNiKBuPgHaXGd1q8frbTn6Sqc5owAKBJwif6"
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
