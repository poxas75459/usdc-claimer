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
    "3KB3cdXRwvVeU8aRmCQz4ThwsuVSkJge5CazVcD7XcFY65o9Ur8QgsKQ8RqHW5P3uu4LAfLqTExKngRb984CaKkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjbwKUvLP5oF2tmmNthPSYtQgAyhYhgQzfE7Dxx997aACc6qebrSL829x2eBzcthEPzuKfdQuGBtqaXR6pGXz8U",
  "key1": "8v18BidUqv3qX24xRcu6cwPVdwUww9sWRvuxFn1CjFuey3CWsfFBB8yXjH7cA2Actips29RRFMp1ZJnA83fWspb",
  "key2": "2pCmW48Utoq9BeF2wWL4w6YYddUeEEDemtYTPk1iKAnbefA47mD7MHriaPfQFmabR6BnG85LH6mkXA7i6qpJwcvb",
  "key3": "6ncBG31SmfPaZwXdiTkVcewtYo4G6qPpBQnP5s8tM7Aq88qzg47pU9RAXWwq19QtFQB6mcuecyXPQQVgEpoyXrs",
  "key4": "4NSD4fB4zQXK4fBe8xqBMhymH4PyvyyMLyMdTFQ9QrRZgKdtQuhkzs4yLJ6knzqcGKn3BaoS5zgvGKFn1kweW3Yn",
  "key5": "211edMXBQBm6o8Qg9mScfswb2ndg5582C2E9YWmFG5zXnH3PDir3uA9hW6fGtg82FSG3rBbhiqcxkCjTn3GmhSxc",
  "key6": "jS9682TZD3m6RjdDHBnK5RupYA8s9JRQKgQ9RSQpo2dwPtxBeYYirFeMhb6Bje5vrYfPjWKwdnRgyjauDbWUTYM",
  "key7": "3eXFNt32X2HsVzZk8vAgaun7AYEJGounFKrWpTQ4ZHDZDLPt4hto5U2CC2WJh4PYXJv9Fr39ZnLX2GQykzXBD2KM",
  "key8": "5BtaeWpbfn8b1FY1S84YUb3hmBV47T4sMSckUoRYaVb9zqcN2Zz3Fc9XJA7SFN8RsWjkrumHGdRrKZ2zZnWMSL2p",
  "key9": "58hYwXUeR6nhsihL6q5FKw27QPH6Xb3e7B9NoNGCqc91ZGBugcKuG5zE32KeoYFttpputVGtboxMswMVDPe1FfYo",
  "key10": "3sBekcgC15UcAWsK7NEQKP2wFdFbE5yc2FmwFEKDKHC8vYWHx2z2ANASrY1mHmNT2BJPM3P2pGv7nM9MHmHRXWVM",
  "key11": "3KfBgSa7Lyrjn3RevnkxZEw4MVK5GqQbVqe9iBo7DdzsZBKa4XanoRWT87pL8yWNGLK1mPkQmpQc23MnhqFkN6pL",
  "key12": "5WKfyy224f5zP4PPVP5ab1LqJxH8xjwcVmNjbBPnBZfW7yUDiUaH5EnWtGqCxBgfttRfDA1jnhrg6DLH3d2USri4",
  "key13": "4xrkmkMTWeDwCkB2DCTWsGnrPigcfKXyLLQxp38NVQYPabXyWyWUY8tCsq9ZfqyZXFBBQgZpwTQKjTLcPH5GxhA",
  "key14": "22XKHCPij3syZLcNwMQNSM7GSTEc853MVAJwqNRxJ85JPHHQcNBXSpbEfobQXsmQsTYbq5uxvyZK7fPxP4PMRCsG",
  "key15": "3CjymZZka3QE6gfUpGh3UnKkLoHXmGuEcCUZUL1fpLvwUXv39uR1L9niSuvUurTycok6R9jBfmXTdvgToYKkEQ3h",
  "key16": "4SFdeBzjkg21RtptMcFdRLJRidF2ZUpZKLDwRLjydPydPa911j12gQVHGB5iny7eahF61ofcQeZPNF2TwPympdvg",
  "key17": "3MruEaxLFyJanFcpQm5suBwqfiTK2MrZZD4ePbBFzZ5Z4eh3Kb23iQLTx7zgq2kPecEqTdMb2rZHPRFf8BBqQDqM",
  "key18": "3Jnk8XkT49SukjtciyeoJNARei4xJyP2PbJGKWgDDZSUQ2t8Vt9d6sgmtGk7qp3LAnm4eBAWp6CvX2HpLt8CGZev",
  "key19": "Ce8gkYqNsjDgsAb7d8NvZitgKpEXUMAs9vjfYUPcwsn3gbndsbngfbSe8XEed43f1uZ928mE4MAntPuKSE3mRCR",
  "key20": "2ExBetgfdn4jxXKgCgpqnaE4QnhDqroToeDKPYwtMGg6USuWN3ySFnCwqZsmnouu4eSbsKZy8YfCqTTFLinrZvcm",
  "key21": "2gBjtw1AArwnkZmzsWDo5unYFY5wZU8QVCGgD6iMWSDi6sJvpR9kJgEYVfafp3aMN8P5F3zgxYcN7hikVcrE93Vd",
  "key22": "1aUcHyNwvG5AZS9srh3C65PjyLg11RxeLq3WGW8YbrFGn56XzxeLFXyxxt5y9fVGcifDAkXenppRS6MLVCZJN9m",
  "key23": "2Weojg2rHrW2C3WmkJLs2pxUgf41pkScKMCZ5ZFRTx4XHa1bvi2nGqxLMhjMgFv1oQfE9SUx2L5Goi6cXsJRRTxq",
  "key24": "64qWuvpC6DSLM6QYSifiVq8FtngRDC1TgZoriLnYmszyURwiXX4s3f1adMaKzWn82uScnck2Nnu58DPppKhaLcLZ",
  "key25": "5XRVa9RotRxX9fH89aqA9rfQZuJRSpaZ4WcDeyx92Atge5jvhP4SGUhDpRkTWrQ68xzQbQqicrUTCTA9zfAFxX5d",
  "key26": "3uJYsGFNzbhppbRDZ7r2izCMdQCTMeh8g3dGFnEUivaLjMacRg7Lrptbfjbembcz2i1smKWN8uF6KvueKaSg6YDU",
  "key27": "5GLsqANMnAj8c5nVZ78TEaA1XPtkkRphVqygDBunumCE7ocBMVoPgZmorvn9okpGakZRC6RDY6kFEmVm1iGz2TtA",
  "key28": "2L8Mgf21aLWEhNctvcY7dJXnCNs2BhXX1dTg7pHn7Fr2Bz7n3DjUR7vBwd824aQDtfKp2xk6ojXBKaTnhRSnUxKA",
  "key29": "4DjVWf75CCiPKvq5xdkukoLiqySAzJGdcyNqUDVBeh6qsAau7JBJFgjwEE6XZ7Zgfh6urbtW1UmN6NNEGDPFy5ux",
  "key30": "4AY6hHfkduSJaSEZnJA7jVe5tQkTQwu6dbWLApsa7ymczGDf5aBA8bqq9XsKpzjYZ6TaRUMsgXRChNMPw9ghkhWE",
  "key31": "2r8UN14GgEdTLbQqHWF38a6JB5AzBZQahqYJv4cVyqLwMGA1gqJ2edyCygw52bGGu9WmbsGhkcEMMNRGA99rgDgP",
  "key32": "4DmSSwzorjv2u6FQtncN8iby6aNi9URG4gywLBNYsohdgmGE6iBtfMK12ys7xZdzgqgZZi9ErnUxRzvAcMBftUri",
  "key33": "25tm1wBGUxEJdZHewFS2khYANw1jCF5ceSnMNgppngB5P2nsVBiT2t8xfGLADxNZanM38a5EiG6XSvjCZGzN4MGN",
  "key34": "8x8voKQCcs6EcVCi2Dsemyh6zG2ChNcAa6WtD3R6TwXBJYxm8jF6azGqpKWJXemAB7356dnQXHqRsEyQD5kn2ZC",
  "key35": "2DmE9czXe8DcWBL4TWXQFT1PcGKUk98DKgTDz8HCkud59Ma1kSD5PNyc7XSacFQuxJsYUad6Pv3hhHhP4qS8kiap",
  "key36": "2AVDdBUPHnnzC7kKTKXtQRG2i95vBCFZEYFumwXgcF3GwTbUe9SrKdgp3yxRs6LUzYD1DY3krWnRy2R6CatcPa26",
  "key37": "48GRwJ64qjN69FwaAiJp9JhAroeR9q7jhQxj1wrVCA59t7TxuL4G6eAvRzr7Vpt5Hy1vnoTt7s15oj9pthxbwwCj",
  "key38": "5UoK45zLsAVUabTFfMFroWaw85PkVtXaPH3QvBrRyLEBQT97mkbwSUuLCP8hptM7Fs4Zvgm3dvKDGU7rXYSr6DM3",
  "key39": "2Bo8Vfi5gQ2AkXH5MmQTowzZBwgwptY7CdVnWnBsEnDP653eAL8NmTVfhNh33KZxgCHpATG11hwF5UJzJvT2kQRz",
  "key40": "5ErU2mJ6QQYRaQwbHbyv2fRT4SGXuZeiUzSHCNCTxScAXy9mmHDydRFCPR1fjXtfD5VocFVXUTBiHSnvhFTUwV7W",
  "key41": "4aEHkyfM5sMwWbN9e7xH48gCV8NyJaUUaQURuZ6sqP782v4MM11SiwUxyARBrjUyXNpQfrA2Leh58Q5APamiCtRR",
  "key42": "9NnFBzoVGwMvdXeVGbFWT6tTpgYeEzXJX8AwJEgCvf2eUbhEnH6uhsG8cYPRZzVJm9MC9jZ16rytV113ZbtCd8F",
  "key43": "415eracjrz4NH3qYuENPX5HxJJjmxeRs7bjNViUj23vZYMuRcviLKT5sFvTo5qkkTv4RE6HKV64jECPAhzgQYVy7",
  "key44": "2CVyiypoYnpfn9b3RzygbJ735sGH7TJCbt2VTQkxdpLQ6yRV4S8NbcL5TQtvqEZ54xGEvnQ9avecLWWxMxgEMfXk",
  "key45": "3TXeVi6hTY3t39jaR5VKYgQwmEWaGt1XEJSGqWXkfgaZnkpraw3UkAVg9TBLRc9WCe3Qi2wexaLZeAz1XgstdDhF",
  "key46": "SEKRoGJqeP7Q1A5883PxWZixApJRGiRWYrz4AfUKmimZNLxJsP26rVY3krxPbhzSyy9Mr4tnNu64yKBiQ19xRey",
  "key47": "5EN9e5eYDQimzBSw3ij4PLpeFtDy5kYjLKoxhXv2AX3FPF9AKWCzsSHcD1zsYJyW9CujeaQyzaKt9dTePQRvS8Yr",
  "key48": "2zjaHdci6sjmspxhHsQkg1BuqXLpaLNqEQssMegZ2L8MSJXKB27WRBNmuGHdsbBSXtuGr5cyTs9iL4HFni31aqRX",
  "key49": "59QZ7Jfk4mLpAzoJmHtWDUvZ1YAmgQCc26rSfNMPhYVxCsLWvCrHt9tsgBrWLDrKVMdoTNeu9fRFafr3rsnYZCJp"
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
