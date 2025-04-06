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
    "4iBrjh8JDRUYseCU3FFHyh53oLvjFyYgQv2kbNXXDQQg9JJN6WWbAJb4oE7FSeEHJyJvaMZT5KPSKoVrbWJ5safs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yekd82pHi1DtEh8QLXW2nD5GUiuwcPyY67s79CpFca6rp6gRWjYDhAizQKQ4tQrnBQrFpk5u2Gjbyd9ncZnb6UB",
  "key1": "64Ubi8HoqLo6PEbH7jB73vMVPaUEDSekx3cLE5WMbCQ3PK4SvjiwYnCTm7DwyhgkEMTZhdWarAGk8SQ4iAicBRKJ",
  "key2": "VWnPsAPPzB4o7H63v9VF9P7s2GgGz8VmzuYRzwGE4meyWnRYEVQEuG2kS4Wyoc1xc7LRJ9r3i2cztimC7Y21q9m",
  "key3": "2VsdPaJVZwE8HTsk6TCHVJdhz3AzUAGQbheoppwbxiYAV1xHuWw3CeJou3W7h1B8h6TVvyEmZ2ZyKr3Wzbct4cu4",
  "key4": "3DWQaRuSAiEczX9wzW8zEriL1X5thnGpw9KK3MYcrrQRYqKP34tcyaXKt2Bvu8MqcA4coDrtDqMbVJctXh3iTg1U",
  "key5": "434hKqjxhGzQhpbDMTLBzyu7ZCheXoUSiozcd1KduKEo8SKhaxAcG8SMdbT2oUZnMGzjECocmvXZh2t3dvNAtjcS",
  "key6": "2wZh825fCbCoj7rNw7FmqMCVnjbXqZD4AqfeopoSXC5u5CQWnidTcJafRmXtCk7RPJXASvg5FZsZbHWP3fCcW7LU",
  "key7": "31py1PKzaZSa2Cb9gBBgAmuJ2mJBd39FMYvPQA72ufRg9pTXd7GSSAuTNxf3d1zcWdBBGrKW7AaoKRDii2hHn39B",
  "key8": "2ZD4tRtUhZrykcvRGuCP6WKkuxEoYn4Wwewa5xsChGffSyLPHwvDdfnLB76SkJtRQGYCHcxDfPUhgEDzCKrwinZp",
  "key9": "2jrA6NgyF5RYsD17y2BJhBwSh7SCnWa9YLcYrvKKHgypBho86kZkZSE9Drssmf2wdoyJnUBGN1G8sx4XnHVyvrRB",
  "key10": "5vZT64h2GmLcQFHNzEZ1aYajQPSVswxc6HN6v1yMKgwDvMCUhAKDf9jeAqMn1hmHJBxp3u9y2pjfU8DLM2if3VjQ",
  "key11": "CVxFoDE8VncCJ5D1AEDSf35J4hWTQE6vZo5pBS1ocSRtR7LrCGtXq17dCHHeMjgCneYodAu934RqYXEpU8qPa9E",
  "key12": "5VYqhVG7jC1Bhh1hPDThrwtjX7Rm15n13tpE3Gx1Vph2ZiR3tXUHmoFscxmm8QqH23VDwncrNZRHPUsjkpfTXrbU",
  "key13": "inKRwmVxoGjXAuCrBP6SXUJ4axzok8ccc7vHg16pFKnSAzyDCpcP2wYx3rorxY5wKB5CtckWPteaQ69T2b9BZNq",
  "key14": "4FXpaWhc14EPCq8muW3ZY35zeSBa35UPkGo2ykLLXdDxj9rg5ZmTuohWntufYhMuj1L8UNMZ5BHXMg8AWtAwqhT2",
  "key15": "4cB6VcA9bZz47yE6aJ9x31fJWQPPemXA1qzfmTsHzZmpXBT5zBG1B27Qg45D5ZNQEuLNZ7JRZG9FEvZiWPAWw39A",
  "key16": "98k3prbNbRaM1rVWi7cPnMhaHxrVeaj2Z6z1XDrMK4gVdU53ooBwoDsCtkZAmfgNrRBbGvVGDaLhHgk9wKt9ygn",
  "key17": "5VAeXhtHezWgGd7ZiZTifWn1hgQf4ezoRGDJMTE9yCQuj5Xj2SbzBsQUgmriAmDEMAjyf2L89zMjt2YqEEHPfaM5",
  "key18": "4qXGt8mjR3BQcqLnwd7wVKxedSaHdYyGjGzB7D44427y1KxkUcEiUYhqSJFC7Jvdjqa2awVC4oPAqF8tZAMWve3L",
  "key19": "3atKyGY1Gx4AArV241Gp5tkdwCV3oFVmsVGHS7XhsyLgu78Vy4gy2UqBw1hmoDjersxJ4Zewa4CqmeBhaSL2sitR",
  "key20": "3mCLbka6Jm8xfTPbW7PqXAuPW6TWt2WhnQA9xyd48DJctKa89zZnck6cKUNEA8oWFpqYW2XmVFNSeGor5ZKxYVyF",
  "key21": "58myybMtB3Pqn7NJKJUL2oH31Q87sESAbjWwMiBq5BbJCmuHoyYCxLw6sGskVpUnPFfcKpLjEBYHZkh9MCm8ycyz",
  "key22": "2fPQF3tmfWxK6PRxz5jVK2MCicqYU44jh3XUfg4jY1yQL8u9PRNNfmAkNUyHqsRNyDdSPBCRqSN4ann8k3u1Uqu9",
  "key23": "9k4Z5piJfivbUS3dKTfZWBMinnSgpnVTYTbaZKvBppdzJr9b43zvbWcX4Cdqi9rJtLLJEReRasgXiZYcHKFroU2",
  "key24": "xMxYwkd9kpsREe8r5TJpuJd988yNhe3b1PGiTcSNyhHwjRkXfdyorgB9RkJfrzthmoySf4Bi7TvYXhoYbXpEYcf",
  "key25": "3ZZ2qdfUM63gLe3fsNo62b4WZtFiSJCbk7qqzfLZQj34GAVxQvb9sGSo3Kdz6Z52t43i8N35CSYBw975mXHihuEz",
  "key26": "124LGmEbJAdPsTk27oeRxqXmsroHjkFoGUnmjWmVpAVJsukpbvVcAFDFwgZSzSsNYrF18ULKSL2d1GiAeqDPehgk",
  "key27": "6y4T3ufLY3UDuedvMv71Yo69Bq33PFtqpJbw6B1ib7JGPfpG2Z4DHFGyYUYvVJBNcBSYcwXvLS6yML66prSYrNy",
  "key28": "65iNMxYaWfDNpMAKmkAByDqGC8BWEALt7kCzpQXrhBQgeCMQ8bAs1NS4MFhmNxmf3VpQoL3tsT8D4w8WS7DniWch",
  "key29": "JV21StwqfmS4id9cuC3kyZMjnrer7VvwzuP3nso9RKTxehQ1ePB8FmFPQwsx6pFyx9z7WoFGnGpNC4fKTDrmQuc",
  "key30": "4HPaKg5qSE9EjAA7GA45iq8y4ZMTXLfjq2tZSkYywFwG7zHHPkUoDvQDV7g5QnBUeB1Le6xFsfeywU2xsmyb2xKM",
  "key31": "5cBtyFGAFVWWYVbHkzFMVAai5AskMBBP34q7WvbYLd16n4X2Wwjme8RcCYgyQV7gZFsSiXu8W1xHQy2b3nEum3Fz",
  "key32": "2MGH5HureBqtmX8uQoimLnV1xwu9R3SzrJh43VoastbyhbC6fuWMxTwU6bffg58XQWYkcHp4RiZmheucfHW7DJkH",
  "key33": "51tqQu4QQzVWhcwhfZzg2iuXmXiR9JWNumx2GMELm7vhR3ir6NjsSZTYvw4fHrH3NqHa44XdryrjDKE9ZH5Yo3U8",
  "key34": "t5Zx1aiKkopKJysGsGjtRfrRHHakSGs7QZTN77pX9WaHqn7zzpAaEGbJDiMT6EjaumPHDAV3CzxczVRqPRyuo3H",
  "key35": "5UQTDTVEawsrBHoFHm1BR5ELPuPE35khr1XYRJ62xTcw2dt5oNmoGp38uxuc2cDDH2eWKnEHLDaTogNjsnnkmpT2",
  "key36": "54wiSJTeNquht1ZKfEP2EKmiYMhz5F23bhmTvJuEKZqKSUbXAmmfp2zv77QZCw5xv7KrVzBjekRqgE5n2k57xVB6",
  "key37": "2gZB3UmZdYE2GhnsPS2UiNfF7B9RE2RJZd3ArqSFKGqJF52ECkPrewAcBvy95JKW1CLRkahLA4sRSz4Lkz7KSBYQ",
  "key38": "4oV6oFxdQuPA3tiVToUxUGj9SJ4frULFRGXd8hj6UoTQokhWKb4LEREscif5mMav44D5SX5RRWWqLJ1y1A6imde5",
  "key39": "4Z4ZhynsEps2CQ68M47i5xt9JJvqBAqNFYhYWvhgeqz7q7arQwBHNVCXcAdhUY2rT3xfXfvctKEdoJPrjmqrnEtY",
  "key40": "3nz92hsg1Hcp2X7mWHBJEDxQ8dgmxsV8hKibqVo2DdVKMbUGSDSp2DwDCWML3vzbz6S2e7j7VvKF7S6RMQdTD1n9",
  "key41": "2XLRgdYxVAPx6g8EKkaoDWwqL11GLxgnbHiVamz3Gs29FCkjCgyzgoZnht1E6hbLbLRJqhU2FUhrpUD8b6z2T5rZ",
  "key42": "5qwwwc2PKQsuA3HfYW313Kc8oa6wNrRnyBdTPsbp4drY22m2GWs92iqZM56vabj4pEEBDvVPTP91svNrPYx7qfUZ",
  "key43": "yduTsgWdkanf9QamWwQMV8WDhfHrCH8sj2dTs3nzqFeqREK9RRs7f9goH5uG8yJw6wBcnPDwgpZNRWGPKpFtqS7",
  "key44": "3s2fwEYa3GnmXAn7bx4YgsjuBT6L14bMsuQsCyo459dqNav1z8vhpJjZoNcbqqrh19oVmpKRSCokSNwc1nrXkkrw"
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
