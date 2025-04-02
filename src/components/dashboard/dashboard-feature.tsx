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
    "5MjUkxBnSQFbww847paWjQmnbgED63Fq3CmQ7MBJy6Mt333jYNbgRETpDvg4tuWcJJM9ExBuXi69AQRJZv9fYVTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VWPQb3kU8xZVsV81ezUvjk4V7Wpn7o49Y98xpyxhpdjwfbqJGj1iT1PHhHFJCUpVEj84DJkvKNh9ryjmj175CEv",
  "key1": "28BL2HpyHaudSKMu6bKSgnU8iBWPnHJZMEihdxGJq87xS8FfCmssWE8DSAJuyQtaNTms1Ce4cXvNyyyey7X8e5WL",
  "key2": "2cABv4srjSoCYb2K9stQ8Jo4Feu8a2sFkL2xmpBBFobqpFRk3R5wn4VH2Fat2ZNghvdktvjej4d1qXtDqqqpGN25",
  "key3": "5cdaz8fYmQ82MnNUbd7HtTVgJwt9Aqbs9PRDEG3gF4HjX5tca3sGhEhKj9wevQW6KZAa5Zm7ZDwikQdZzpj7tJiv",
  "key4": "61xPShyusAG6Q6t7D2NGjcWhQXPUhrdkCLPpeLLQkWwetiDBq1qk7DU4yfmfMe1SGyaMggs5V9oyBD3yiRFUvYb3",
  "key5": "zSs5gh2XYSUQn1QWCicGeFmCPvZ9nQFEeAU2fHqBxGPX2VF1dKWMHr2Nf8svtEyhr3Q8Yb9weKt5eVJwDLctc79",
  "key6": "269B9boPCd6LVw9QR9rNy3Zuxy9EbnGRWP5NspSWtVibwEbTp5LjHynhZiAEEfiGBJvhZqT8aP66dcvmCnEDvN42",
  "key7": "4VSr3wZ8tujdEnuyDac32xyUD4KuCGDuD5L8tA5nXkofnMdA3tsngerP9kqjSiXtwmUGXzdwhuCeqRddCWH2FZdj",
  "key8": "kopwyrpMSwTzvbvCFhEBTmUvhot3PGwE1NFYUxCJhvKBx73qKerLnzhWszBRjEb7aPBQgjpY9C81vxTyArz9W7B",
  "key9": "4pooESzqC46mSg53zSJScX8NXmJb6egRh6hq7KGBnHFunEzAxZN2svqHLc3SDP2TEqczbYHKk7G161DYE4ghfcbw",
  "key10": "3Jcsy3yLn4EivHAQs5BqUndMh6kBoxyHpmDjE2qkX26yqZL28FuWiCQx993G81GyeiWwTBMrm2iEBBrVj2ipr4gH",
  "key11": "33S3DqhifML3e4rZWSW1WGkrkAXHsqevBcKYpHBZY5VKfopoUhStz7A7kJ6XKxECL4V76wd2DKvTKr5cAbnifoXr",
  "key12": "3pHvZme1KiQChhoVfCVMJp7s2FTujj8qbZ5Ss3ktz7RBHicmgQcTsCnZ4EGjmTF196t6GCyS5jBiaYVt91CCiogf",
  "key13": "3t9CSVGLdgptj4VtcMRtbN9K8UrrggCJGoYdug7ZYcFRrcbXpmLEf7wtoWNUgVrzTNbqhAzshQTcVLrtY5tSMVmR",
  "key14": "3BTYzL48FH1SkgcseACfTcEThy7bDnZ5v6uXkXVV97RZWrJVeHeHJzngo6FCj8joRuocNFZicv4cVQsc9Uto3fqz",
  "key15": "4eCNaFgDfPbyioB6ANgKhqCSV6BW8RqW7necwanUNbvuXndh796wHrsUKvHSbf95XuZzCxc8FvcyRsvinA7PBhVY",
  "key16": "JjdgfFc8YpcHkcEcnViFKe3xakRjVhJSSYYZ7758qZyu9nHtLmpjh3U52Ee2zw3dHr8bguWtYo6BSsKXn3oUW8y",
  "key17": "Yo2rqQAhy1ZGerGetASRP66wVNR9JbiP54WfJh6VVDWv6b8nfju28zAZo5cJgpVwMWEt7XCQgTz2jDQnMbbN74K",
  "key18": "28Nz9sPAqoUYom46tbfUjr1xS5dAHpKx4pNcwtdEkE3GCisA6uWMwUWRqdsBBNvhyFPfA3snZQbVcFhxXy9AUyHx",
  "key19": "4Zr8C5P6Tx6FY6GVcG2HXrTLTDUiaWW3BCFXSFpsdz5u4RpaZTfwDU9hYyLP9srNkDzfqiUpBLCkTt6yChVrc3Yp",
  "key20": "3zCxEyLxHcJwE29q8twRPSqiYC1X1XwQrSDuCnJ2GMe4WsvhhU37SEVBxbv7SmxPWc7jZNdGExrNpJwRRB55eNZR",
  "key21": "3mwetab1x9jGriS63Wr2JD2Ye4gY5g7HZQFrqKBAUqDqgG4f2JjhbjPX73kTUDNp9rk7NK6BRAxW6BWJWTDs9Gtu",
  "key22": "59Jym5DTRCgcAYDkUTctez6r9DJxJPb1FijpjoghC2bVnyxmBjMuqmo6F9M7KuVFUzYmhr8w1WHer4jspr1QS85F",
  "key23": "39jyrrJhkNUupebnoPTBdovka1dFt1oBiZCJLztKKD4hEudHnrqYRWLhDX3FKdyKSMSjeSkd5tkeHKqWzvZrf32C",
  "key24": "vb7BRwN6jLkPLWMKMrck3GZKkz3CvwqYE4ioUYcZFGDeE8aPWyRnMZ8D8A6Twpp6iTY3yy2ZJGzu1ZDqzwevFCv",
  "key25": "sKomaxQYhndBch79xggnVEFPdVgA4RT2Yqv3e7mQavMjg7T4BC8ct2sAA6ytgWYqPTApZyEUEkYuEr2mMLrj5qN",
  "key26": "4bVFeR5F9X7SECUbz2zh3M2hcaw91RAnYfcHCnvFDafHpcbVRmA2ZT1HsMHP9qsDAtkihvYrU39zthqQoVzaUw9c",
  "key27": "3wY3WCj42zpPzEVwKuTq8jNfodrqFtW3cP58nSmbXdKQLQrMVt8zeaRBFHUdBG8Mv8nHrm9YNh4bkTpZYbtfGB61",
  "key28": "4gP81mHhZaEaw8wDtKpAgBD7yBDwNTs9yPeQWhDvZy1bCELbpX4ctZVhZthPjmeSjs9J2MRMipnRieeGKYwrainU",
  "key29": "dbYVagMUTafkJKPacHwty7kvLP1ywkAKWfeHCC6z6hBYYnQjqp5PUbYawd6sVyvWrMMCnRuMHLpNjxctdRAe7pr",
  "key30": "3n1WcjGZpu36p6usCcMeQCqzHV1qRDikaT1GyLGQv7xLK2sLPrxNk2HU3grQoFLBH2V22cMcB7HgMhifi8hy6ijM",
  "key31": "d2XSHoaBiDEidLFFyZrepvsfM8Q4EqShXS4pzJvGsSEwPTP9PjU8poziSJj5k19bhi99dTdztpgjigmk3L56TSn",
  "key32": "njwwHgz41iJrc9vogvq6KLvkrK3BgmGDxXjCvPfdiSdcknajEJWTEA9KKtKJQPd9HMeZERTxv3wTGanD2XRwHxZ",
  "key33": "4SqABePbHMf77FnYHqPiBX5xy31gi3wHSEtGNdRoeqgPKgZUvaBsuLRnsybnqEj9Y1Sn8iH4qqvAjFcY2dZSynic",
  "key34": "5UbRvdrivsEQNR7vK4M3cVDezQSArJXGvLZRDAKHk5FgNkbKMvPfADsrxUokwmvreKk99tFiwYihxQTcvBM33669",
  "key35": "4rnNo4AqFnpqk11t3vJFJZsSrALxEUqJ27U7cp9pnnzFyLjTnuMUJGkUXK1seKYWYkT3k8EtHYSoPMPM1SsEc5Gu",
  "key36": "27pdxz5YS4Fi56dX7kfdXFN2NMUr4ToqfpjAyWACyJVewnp9GeDW9v6pu5Q3FiMZENP4ePdzi9zWbmwqbEPVF4hX",
  "key37": "4W3keBfvJUd8K6nj1trJabfNrFEVSJGd2NxhMQTmsehQAu6oJTiunvFEqzd8NPeaNTmMzjgv6sDP4DmKi2NzTnEp",
  "key38": "mq1ibPa26wPWstGW8LLjw1umFs5TR8VsX9yjukE3tJwobor7wj54mo1XTNBkmBRoYG76fHU53gvz3618dEvmAxg",
  "key39": "gaHA6vwCJhjSspG7cyyvWHJXUZfxkxbg9J4yzyEG9G5UNJjUSEPAosv5JDesMD3jzdzu7BuPuNehEkWBu4cXeqT",
  "key40": "2miqtearfaKM1nPFQuTkNbjKSe8EXqLZDWTKZfhbQi59LYFyfewp7WuvTTNbGCmonxywhuJehsuqxdSkrA9WhjVG",
  "key41": "2WvrVegguNJof7v47RtS5VcYnSpnYfW75HqytJMQRTDsp3Z352ih6trzwUqt52sDJCSEZ4EowkdeJSWFX7kA16da",
  "key42": "5qsrvjHAGzT68cEFfFqvjbPFfy24BANCUuEx6FddSnw2po3jh2xXiZTWgciCgKv3yrBiWj4TDcEr9BNadetMgjrj",
  "key43": "5x4QcH3jWHHK3zZMS4bwftzN3BMGbjA9GHsSdVtzzErd5SLajkW8aMDCBDgq5Wjv1rrYAQrnSVuAfq1JEygcgCBj",
  "key44": "4doCWCsuahLC7sa84RbBNLF5QjYGHFMjeDCYpMHPqasPJnqwFW1tFJ4dfzNwhS1xX3PVL52ZJr1ShqJUY2YhaQnG",
  "key45": "2e8ahrNMXT4qagiqYN33verd2wb9UtdfP2oHS4F2RhcBBmJyrL6KJx7wUfHS2TcHrYZoyp7vuyy4sEpiL9TmQH6y",
  "key46": "5P8w4MNQT69dHvi8uYY21rNR7KgParydaP1YBSJz1PZ7uYHEy2NvH7j8qhYkMC37Xa6SMhY3MmxYjTnEkdLNErLZ",
  "key47": "4km51puAa33RemcVQzwEpJcCkBU8cTeFRcsqgGEuPw6fzztVoGSbXbdvooPk3HUKHUHo9TniFa26gXFVyiW2VK7n"
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
