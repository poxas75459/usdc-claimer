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
    "3sgcGDXEKJxTiuhtsJXo2b8LuP9QiHc1iw8LmSkoaxzf9Xoru66LNcLL4ewHpVm81rBQUgQePnTubHrQ84bSDCsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y1rwftnpgFss1n9ATz5hLT5xr55C1PwaR2gK2K8WRaQkX7CCkyxtYxecXxPFSnsJa3jRULVQhTo8V935BAq8Fkn",
  "key1": "3We2MyruT7RyGhDge8dTeudag5puh29AHRJKJhp5wdrFkyFVUU7LDSgh8qQMPanj59gyFoHWU7raed2qv2aBUfGT",
  "key2": "2YJ65avYbrjArG6n38e51mxtC7z7LgV9c9tVtdY12PHezUF7mKW7WxmqDhFAVEhC7Wd6ohDqeVaXfkmoyiaqzTeM",
  "key3": "22wY8KfzMipig5BkttPPyeEVpmYsT6NnoHFyrxEKrpRkQxUYdWaoGD7gvkKZb8bgb43MYC498KZkCtDgkumydvVU",
  "key4": "46UGAiXtxW3Ntd9219CZXqJ2Q9ma9A1TkSV6Hfh4h49m8hLNNSQmBLqRha4kLWzFAGE5mvAY2XeduGtZcbDDK3o7",
  "key5": "2qFLLTEgsKTRG7Gxdy3ix8MdGxhmgiKjqBSvtqXQwH65SoenB6djSDXtEntyAnq6gwwRVX92ZzFXWexJRk1MHtt",
  "key6": "47rk1YRF47gDsQXo4CTm6cqer1qqGvN8ZwnJgbzUPPHrzWNANGaytotBBRZjqGWrJWCLXX48EYz6fVDDeGdE7XQg",
  "key7": "4v6qMaiwoeGV7K6xGES9SiqLQheHa6MjMYriQAtMWGKf91XbgHkWbVkirUqFP6CDMQRCRtymfpYKmZ76V5JhrxX8",
  "key8": "3ed4UG6gTKAX3qXj8sxojqXFtMQRpcBtXA7JHeQAHrdDrQzyZfSNYK6AUcWNiBkV5ZZG1SS3aQQiUVHWxk8LhbRv",
  "key9": "BZbtHu8m29hJhYws6K4vypyh8X9k4ELgQ1HD1J4CNF5skm6vRib9EQPshLesiiUm9ciisR25brgnQdMdF6r838J",
  "key10": "5h4NanxUtoHHqNMQx5JMrVkbsoNPm9sn6MDMhpdXf738xagva7aNJwfedDmCeXe9Ljfm67F3fY3SLiPLBy4Ndo6W",
  "key11": "2kB12QJxWMjc1DFuBuGAtTnwXtsnMkvpEx7c2C9WMGzNVQkJuDxwSdHrFVtN1HcCXS3RfLXFoh7AACjcrENG2q2R",
  "key12": "npfvmJgGtoM7RJiv2bsWDkBbK1pWkM95pjtzGbktr4JysXJYnsnGM3ir5Aeo6tqumg9Rreb2ZqtVC2QtSdTK5Cp",
  "key13": "hE4XCKZLB5gFMFXJL85zvSAnawgPvCRhh3RUY3TPxAcdbLGSQrs43Vt5nScshkSoZfCLzzuAiP7eCG9mRhfM6dh",
  "key14": "5jFtvMZcbWRcnGwrN7nJ5Ro9GuRngnoUn9QnHpqSkDFE17C6UeDa9NBzu2Cx44Yp1Zo39KUJtmSk6twWwSyZivVh",
  "key15": "2ytz6V4ibcQWZmoXXpZDPovcnK5cCzh7NqZL7iU5Dv3w9xKpBJ3RDLWANm535PDuUt6CoewsXyyJMXaYNHq68KFF",
  "key16": "5ceiiCUvzgotSkHqAb3mjzeFpQsVL6GmbaEzHpT7vPdodGPMk35s6wusCANqoHNZMiscfvGgFGBw5Gik5XxaCeN6",
  "key17": "55XyRUZrcUQbmfD3gvdeXXWUaQLaJvcCh34EoQ6mxq3S9SegKzcBd7n1S2UAd3a9AnnEBACzRhUn958sqzf4oJXb",
  "key18": "3riGeJ4uHoCsFtTSFZDZHWBLxMpoVKsNP1owbJ2M5hd6D7Yoqg85XmBSvRNaBRPDdgRzr5q2pKfvc8txUYiGo5eb",
  "key19": "3d8rFQWmNP7tx7uJznqyT1SQFdsWPu8pNAQQ2TMW6quik762bmCsGFUTMZGQYLD3qJuW3GPkisoj4a8x2moBy458",
  "key20": "VL9ct1D8VfDihqA7gvM9NkoBzyCe8bc18h5y6LbbbNRPVZH4r8er2FpjFU4MT2xkEaUTGRtHTbVPPfV2TY3dBo7",
  "key21": "EsnKF1yQ89BmhLupKA6zVLNa4HfYHkx5uKLHQzEthhpNqf9WUKkCH9LSGVTqizn6Y4vccDxPmtZe7Z5YTYtwksL",
  "key22": "3E3Xkegug1zgFkn9cVXnjRDVQViqjtVrLeHJk6n9TV8hiexSPJzdwEss66xXvocXLcqFy8FQoYXeAYfCQJ2c3d9y",
  "key23": "64a996wk42ZPx5X9D4TwqRiS4nBL1vvUuEY64UZ7TuTpnZHCRHPqEqpJbExLuAF13wowSTNtGHeUMaWf5ZFVPgdx",
  "key24": "32xYjXSGiAkK7Fvd4VAdLuXNaJnz9Q3G2cRZh2fqvXnuM5nxBThdi9WRsf5BEVAR7AoZJSjxUXW8tQ1p4h7YHMxx",
  "key25": "3XiQdeicMTTQDvqgKoAqfF2V7aMbBZBty18K6bPdY7a3QfU6JXPdqFAx9eTcUnZZqsd87CqpF5eP7eztEKZixzqA",
  "key26": "66Zy9K7ampa1fXnvPHwtAgn6EmDDvp32pGfYHyGzzN8EJ5KWLuMhM3HbDiHTdKMf77dd2BgNFA2KsAfwfDu59UC4",
  "key27": "4RVrwKqnoCZ8sHG1ZNR5tua3F1c2ahvnDufXQeT51XZnCDc3LCoKqHpWmFRmPokzDstPZNegieuP2GuHdX7jxsL3",
  "key28": "51JQqjxEp8QPmv7m4GZz2yQyAZTifAYGNTXTstGP7beibY9UzncCMHM7kaRssRRkQJidUuZd9gJwEVTykCuHt7re",
  "key29": "5BTSZkiE1nxK1WSLE9JyfjdtVbxjGaXxqshMKEjQv11jqzNm3qUS7bTRj8xsXxF9nyoxQZ8NKMMLckgVBZrcEX6o",
  "key30": "VGeuUaiafK8AJxKMYgLHPKjVpdUnoW9S8CbzwwLfiSoTCarXb4HG6CEFUJzWP8dGHC5MWeorLoLJNzSCB4YzN1A",
  "key31": "X1pzsrsaJgqLCwHDwQj6Jz8U5sFN7ggD6bZUu1ZuXvRhu3Vawde4KdAuU8xVioABjaj7XRskdZpaR7YYjVirThk",
  "key32": "65AuUj2AdJBT62QqUX8iaJDYhaDRgRmFE643QQFnmSJjPitNsc7m88nLwXqrz8YZFWvJ2b4pUvsrrq1JtkJd14bR",
  "key33": "2HNV5JHSRx75vdonDcaPdjhCsye9iPktmhm5ME3UjmYV1rjS2C44cNzdjAH68QhUXBkj49y5jCX42U9hoPg1zYds",
  "key34": "3rZHBzo4ExDe84gYQsr3h2V65uFdxXyW3kCmcnRh8NmCn7Q7h4mbS4DTucxcPGnxUZnypm5yZqdxcMhZrN57cGMx",
  "key35": "48k5D8isxk3sBdqMXaZMU46jjBeCVtdqM3Sf3aXUsDfAfJaoorva2M8B3QwDtCp8ZB7ir9punG7G3ePDVALafWSM",
  "key36": "3jGtC7nCBz9rTDM4wayFdedRbraiiKXcLawaB4Uag2uwi1CLNToMV82H2jnE2Ry3rywK88sNWJHXCR1yyeXpsbfF"
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
