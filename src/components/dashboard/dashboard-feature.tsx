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
    "5V5598JACEE1LSAdA4ESMibdkjkWMMmjE7gBQEUtYxRBzkTpMgnS9Mw1PS4JZjb1Z9QLrq1yx7Vwz9mcN3fiSv8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TcCSQSJiqQZc4z9WHHhNPrZAmP8toJsxUSoWk75BDeXDGQQhGdAUybXdARfdxNhJ6QdEGYAdsQbancV5wzSibMy",
  "key1": "4R8TUudXwNhKw2ZXYoip2yA5iLnLJrEQh5MQVpTX6p7YF7uzA7ecwMhLoWvC7ctQUNL7V2hxYVsSCmwTZVitV2gn",
  "key2": "3LLUwuTKoKebVPmyG7ju4T51FGjF1bJghiZ1XtMLcmdBHLqiZSKDiwbmBbV6BgJC5xJXz9pCRSVCJTVf8JxiNsG5",
  "key3": "3SJGBBupNqCWfgZASs9vfQssaXWbuj4EgwQ6iMQ6JdbNGEnieCRobtsMJSNfaeZrEpzmaFCVGU8BsSTPtqtFA5DF",
  "key4": "4MAGKtMHrCRLnhmPFmTarB6P86oduirKYdt8hD2LpySxyUN2gERronLkD7LYJVrpdT8aDc74bMi4VN7y5rb9vHVy",
  "key5": "2J2J1Nk8pz6WdsGBMgbxCUfCrKZ9MfkMnzMGk5LYRs4YTsW7FHu8MH5yTPUkvdYHipWU2oHTLFYHYPBZF6hitFkn",
  "key6": "3rFDM131uAS6NDomFnbHhhpfDpM8uUVvc6PKTN8gdLC3avrmDKegp33W4yQpf5FYPrUVe7vqj2HXsf61GkZZWKd9",
  "key7": "67p2FfEss9ZA2ds1sNy9NLt8P5YBykbcqMznT9g6XviUemxtsZnnaPL9TyscvbMsX9nLmLH1CYkS1TREEwybi8tJ",
  "key8": "bqt6dqdpTzmtoWGZLNq2TTCJG1FChtRFcXgiRu1UfKeJyDNU58Y2i7Et2Pmmz6Eb5QpFvnrtLqNASrND2Qojrpi",
  "key9": "2uoRhWuUVhMKoJW9aY6nmBvinPWa43mSoVLibYx8rTXEaxUjF2yEKcTudGzt1acyVoFjR2JQB87dzbv7v9FscK1G",
  "key10": "2k1NToUmZhG1qKLepg5qMpWLtRdJLv24jxg58HSvd93zWrtRN5V5GWxzKC8pCWuTvVWcp6YsfppVT2tvhEkWWBNN",
  "key11": "3skzJU5N29y41ih2RocHZcwRZUv7BUqm2YNwqhhQPNgLg4axvcTGyv3aJF5WBUhyob8h5fq2LASZSsLJYbADda9d",
  "key12": "3kvu1sirZYYgCz49QVL733BZEYAy7PdDBxHyYLoehgBoRjjbh4CXEUC1vgdn9vnaNn8nrg1KoG6eZzSvPxrgKv5f",
  "key13": "5v9HMjva1xHB8oJ6NvBkak51yUdZS1qp1ivXKBwFxLkSM57EJvcLyW3J6HqdCb8ZyKrRq13LqJ21L6q8g7PxXNrB",
  "key14": "2EYxJ81CY5iRVspTAWSXbzj4kFq37UnfHrvUQbtsQAN2cvuSmdLvPhtwqRu8SErRzNhHXdQFoXnmNTi33ZAvMhkw",
  "key15": "3yCeG3GVWYakxU9eyG9wSGwDu2G2jAZBQqqijqi2CysErX2YYbmH33F1BdspX3iXZDPAgatSa7PnwBCuqqQgkajh",
  "key16": "5329obnPjbQdpa3k5qnGWMN5cRkkxYqYUdEVCnjryBdCNJYYJVm9VaMtUXKHBhnjydKDJ73BD5kG3gpB3gkzrwiN",
  "key17": "5mLVyAKhrTKXP4t2wwAtmNKBrBCjwoT6wcm2md26ZrB7ePr7X8VftWYBHyDrHAh5exRPVat3JWygsjKgqNga7bLS",
  "key18": "5ENRJf4etSyqJGrwRTAu3DYrbUMvvL5RrfZZ7Z2K28ULpTxgNbMGJUJYL6RytcS18ooRhBJhui42kzzWSjJ4oHkt",
  "key19": "2Z8yaupsSxKqmsba5RHVu8EFW6GZ9kFck4R46m6aVvMPGJGhZeqSMDNQxxASzUiQCRK4tvFGQyjRgmygS3N5XQNE",
  "key20": "4rv3vF1idXe9eHZXgiwyQs4nQcszSuSXX24XYpSGg6BR5cArTbQa4DsRp1bHhoYwq6zWGBtEbjLf8tmhZ5A9h9FD",
  "key21": "5tKwWj9gzBPhhCn5LQF8SSHTr1kEoMCaVxxBVsF5sB5RaSH5VU9EiCF9AxxPzrL1huZz8WqA5kxpSarKUCUAoksi",
  "key22": "2YmFGf32H5jgBZqy4RnX72zBBsEVBvSUrno4ik6u3EyMecnfKLKkqoRDE4VFsWA1vEk3iLPRxmD7bUNsquuefa8W",
  "key23": "59Tz4ue6w3D33Nd3v34CWv5m7SUpaiqq2ocLXZB4CbZiYv2PehaoYbekcowPre2FUPDoV7F3nfiLhrzQ4Fv3Xvnh",
  "key24": "3iZzBXFJiZjAtnbe823VXn7Y9c93gb6iQ2C2NDWmXkotABtnWEtRLpAyf6zALngQbubSGkckTtiNru76ceKB7uHg",
  "key25": "31AQnYxu2CT5qhXyTrq9PrZLuu29aqYEadRjYtSz7GBac2QCWVnd148yyabcRVKBi9NcsM5G3HJ3iJK9TXEETMXX",
  "key26": "2WEgUzvZvLS3m5xkGVGwT35qmv9Dk2fhPYnAcHzzd6Vs9Ui6ptD4D71PjcU3kr6Vb6KTL7hwrpscofR7TpCzT4fH",
  "key27": "4JxoYj6heojMKAjPhwM5wV5pgfVnVVTbrPxRMNrJtqT9XLDFxNmJz5NaRWuKsdKDJwRf4iwrp4h9jxrDBEoHAWs1",
  "key28": "2XZjJZpBX7YjEowxjscCfZkm8itNRaitQ9237b7eNWfbsr8NzrnSRddw3NJAPehhgt18yMr4VcakdTpfVWQu2cjN",
  "key29": "5PN68SdHUmjbHaA3Jrmu5SzXTUQMR2PzFcRphuGhcyhQYRtEmVR4tmK2TisetrNPZvA5xjNMgpNDpYHrfiw76z9h",
  "key30": "5d3MyiigpeprhBzQSsc5bVSS7KJwLF4CiR7N3YucEVcKio41YVBMoC3XdurkA2ureUp2VjXcZxQrnv3h2qSH8tPA",
  "key31": "58pF7e7r1iJ1w4w2TFxWmAhrjjghpXWBgQT85nrAH4oULjnZz4yfMZhzXjft8kFyTuxGhRso57CoqiTZ3D3KToTb",
  "key32": "m2FWpHjpkJxpAYZV5XxuouoP41NWXxjK4ArCGUoq8H1fckUpeJseLrq5TeUJvNyz3uTsz98C15UnG8p1D4pYUam",
  "key33": "2HP23V8Yej3YLmVTmD1A7FPUcbTTgWR1ke1hPnx23UvfXZSfF59FbjMzdGe2Da4yM4KiY4Y3cMPwvUM1z8ujYsmW",
  "key34": "3pr3BthL6cWwYdAQDR8BjPmzvXiD39V6BA5ptFtFjmqMUtpwdAU2fvV5yZjJVBGXxRD6SxLULd2hzUGKiEJvCRFf",
  "key35": "jHY29jL5Jq4h37nB3y6kwbj1fzAyZF4SH86Gy17qubWXQsw5vJ5EyLFPtDrNwWXMgafNV96RYyftcKbkG18zLLg",
  "key36": "26EXDainZ42DvHnXZNnrmyp4V2UbFAzHHnjn22ib23kynW4nNJWUeFcVTd72mJV4nP9dojTq3NmcvpQjmRLyM2WM",
  "key37": "292GL9tKwmRCFa4duEtCte69yTv46SeXd6UHnsmEzAAm9fEu9NVkLNLC9UPRJ3jhiaGPnBzSCxKYFE9BQ59PKiEk",
  "key38": "36P9XSawAg1zUeQuvkAZLpEgHkLYcTpgBkCmpiCC7w6gCpiHb2u8gUnEDbhNLWt3mwKYdnNVPNupsg7zf4oKMhBx",
  "key39": "5BRXHJizVuvmHz4M8FqUjqtsmSipBWHJHKmoQkSzjSxSQNJdaoAUx2mJKJipEVnRpeZxb67ZcvX9BX5ittFDSw3c",
  "key40": "3J2AWA1sf92As6N9pSqx2esDYYjCFgbQvANz3SwXbw4gf6iWJ1HR1pyYGmA8uAXGp8BWGgBXnJdXQzrV37u7ZxE2",
  "key41": "2gNTm4BwSB5jF7hqaDBbzU4yWPz3rLy4SZUVDUUJpjvPArV2tAVVyWNu9grtqHnT3fQkLjhqqkYW5aqXwnGKHMzV",
  "key42": "5SpMJQFKG1h6pcrwj4GaTJipCLsaRikrKuRYkoK6nG73zg6ygbisLsp5SmcxS8iZqGz1mgZSuqLUeVauZxSUBPZ4",
  "key43": "4EwJKVp5wytmGgY9JfpGVNziSw46YHtvHYbaaKoeHY9ePadPCkT6HqDf3XhhPBFe4BvFmpM59QttW6t1tK2uXvRA",
  "key44": "2zCFncuzXTYRX8FCqPXdmiLNjcx7MebTj7rWg1se7guxZWEc8NduaEQvpxCCxxEWeLFCJn2PbSRykHFsgPg39GGW",
  "key45": "64AD7SGC3n6ghqnrLUA4RTgaBMNicBNz77ws9Kt3iqDuHFmE51ZtTPvJxUBLZM7TfoDJzmgeQf9SWdPxN1gmHgYi",
  "key46": "FvEADttCJtJDJFoS5QUEoqfgNTsuYxqMmYJfRSpK5cZJNaecpaYEnoGJqo8YrmCPacmKxtTA9JEXAxUXGwhUGNq"
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
