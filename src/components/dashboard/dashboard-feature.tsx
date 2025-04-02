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
    "285djWq2vF3XdhG4qqZ5o8jBHEPGfQR4AWuaNoN2KPqf7qGgJjR9zWAmaz6oZPwSVjwrhmo6s3coeddQ7cqM3VBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EeXNo1M4NGEDPoZhcw6fm4wFio8UPuEG6CqPdtYeCe5CPu77Z6wAcrTovdrfPgoa3kyrnXFWeZAqXuuBR2idg7E",
  "key1": "3YPaseUqPAbxEnRxc6M8jP9axjhBLmvBdXeGGdVo4MARiPZKHoCY7Sw6QSbnQv4KrzHKiAkF3eGTp9i3yc2ynzvS",
  "key2": "2y5AcMZWSpykyUy78nrNUXFqSq6sgAxEa3ubAoBA2j4EGabaKVxScf6Fm1vha24kZvEaKqYyhjKeubLEfS3UBwdd",
  "key3": "tS6tHvfnbxvwmroYmoXNm6rbRXpmTh8arNBtGbEuApyG66ZaGuSW2m3yMv5GHZsQQ1iFgdm9uZ4x5UVKPUxYQmK",
  "key4": "3cwHkt8Lnam9GT3UV7dFzmqkRgACzW21wqAa5cBjUx691gD69Njo4MniFvTmYHBxXKZcaB8JgbnAMzdUDpeXQwGR",
  "key5": "4kkWt4Jp2FGjUPhHHUBrNj8tzieVy23dqgFYyiaHqKZtBxnJgwH31SsC9w2EyMqGn8vThNa6V5RoPRY18nbTRfFE",
  "key6": "5myj9SA2hwGY1vcWANYpA9WXSb9xspjZK7AXdtNY6KfqXvNz5b1MQM62hksCmxFG5xwmrs7sDLo1TPhyxyzgCy1f",
  "key7": "5obW1ZmvZX4eHbEuoNrZYHUrWqecddZSbFY6tsof4uDjfzHL8xEMAVaTMivrTAmBUC29Te8U8yTs18w5fGEYwu3K",
  "key8": "5tkqXrA2YMKFP1FioYZxeNs2qmpBf7vxyLYwfzKPqdzXkb1gRwdzaNcfzvg3YseFEV8Km9rWbiLa3R8e4Mcxhnyd",
  "key9": "4ckN6gfxBcqBj6JGBYczE9jwPTspokbE5rd2u7zxVDWYsiEj3osALvmy9HHr1JFnTHAyx95R7jpV74MPQ2yfu4WU",
  "key10": "5ua86gvL8LuEpUbCdWt8qr7VxP5ndV2pg14kkGaXoDgFk7AfWMmX7rGqtPFu6CiH4R6Q3R3H7UPp7xGL6zCkAyCR",
  "key11": "9ujqudxTBvC1idAvzyPR3GZZwfUUPeFkGzQnY2ex2TdLvcNJUHstsRTftKFe15hXuWWQBWmrpu3QHYYju3j7ABe",
  "key12": "4PxweW8a6x6ytjAchiVEEyL16JnYkHpUFLFQsaXTSRG3eJTDfDHdmitu6MuYAj491pm7Hsbh5Wke7AMKup1moonx",
  "key13": "5QUmhPLB1qfZmwmxuC6nBqJ7Auc8p4dC3rQvDNPbS83M2vNE2bS3AdnTQjeP2bNRm8xb7M8zS92gXETP2rPHz46i",
  "key14": "39WoxH3E7c6LYNVqQNEvmorByTipQ27qwdEpModjD4xt77rYW88yupobTZEjtNCstZ8j3eTpDzZSYDCwPgQMZASZ",
  "key15": "27Nfv44pGMUazoV82wtUuapx1gn1YRgCTR9csWriJwpKDNRWDoLU3FYg2eKvghxGkFNGQ9LCK8HgZgKCBHsFznyr",
  "key16": "5V2xpp2AVYz5bmArYRinu5W5d4WKrvT5uSTmx7bDv8EaC1Wv2XXypC2SdWKgNh5VDzvKWu3cxy1x2fk69jhHhbpS",
  "key17": "FVVZ3aXveczp9F4KyKSzveyuZSZjhvW3791z3VcAwJXXxjcUWm7B3QS2rdCaFEeY8rKfKEHxFbcjzbEkUwGTSHn",
  "key18": "mEULCpZozhCUYMEpop7BHLMM1T79irZdRw4ZBg7gQky8YVBqi2MV922SDyoixwSY3C6r8AmHQU5mwCyCPprZxno",
  "key19": "5BXAkoNYAwLQp3HjYJuSfJURTut5QhjqnYHJ2XE2ArcaVemeaaD9nihG6pUQ8PfAEqozWwZXbynqLUvb3X6xmeK9",
  "key20": "DTcnX1EPYUdogrQrGJzGWvPGAJivJKbkbis1ieJV4sWiXpLWEzqGhnBLRp3PFdq94G1mt21Ju6gxKhwNerKXKeu",
  "key21": "2TQUeJsjo1jYAgDPRd4ePTy3iY1Lajh4s8HXTWdt2UrycZJPykNULpY4M4NdG3cgDft5hqesn5tbtS8ibmwXt7tq",
  "key22": "2t3eHHVHYukVks6qZvcXKjPxapY945nLxw7eJkWyAedny1ssN3Gha6yRe44xLHRiebDpfsDrSHqtSZLaeAusVdwE",
  "key23": "3s6GDJvoGe5Fhuks48QsePXbSxc3SJijsTptTvNd6ePTVycgntFm4d36QHvteWtffa4Kv8Kwe5XF8E7XRsTB53Fd",
  "key24": "42oBfUh7xB6AJWi4UDT9D8t1cwYhuDX6nUf9qyMLW6hBxVQVEDqkZyjpPXdDt5yF8SHMHpCxrF1bu9gX5NGZdpWh",
  "key25": "5ySQusct7eQVPFPuxCyiA5UznPSRFk9GLTD7LDnu4gPMV4CQtXPD1YFdDt4RE26uaSfbTujDKmgA7j2DUETkMipp",
  "key26": "3fgV25axicMNj1YZyd67SaR6mqzVTfDdn26HN35dSkYnUEWhF9jPuypELsC2SGoxDG9iSnQcmRsVWNhqTVTzLhov",
  "key27": "3ohxTidCeQkucM1jbYBLrmQ4jgX9VBtKFiBCX3CzuGf3mZQqsDcb5QcD3GdGP5iDVBzUYAdFCHZoD4nyULQHDZJY",
  "key28": "jZy2AbdJK7rgkXPXbTCW5AmBuQ6eCtczYDtZ5SEipjvuwZyg8dhRTWqwcp4HvuGEYk9y4YKT6U6D7vnUDTuPFpm",
  "key29": "5s2yyovKUCqFrpz3BG9kKFCTwRv3nha13WFn5Peg15C1CfxLrfyMxjiYsDNbVzWFN6F17K7UjPo6KpWt8AFfXtxU",
  "key30": "5rdXBrLfYkQYJiTrC2gW1KfTfHC2oah5HAyFGPS5pkAN9UbYJW98zXS4wGrBe8oZKFAAxHNmGiyhY3jparWZTVGU",
  "key31": "4hBdgJTHQ2Z4nqSXxp94gnbaJNNEm6Jq1y3BXB38kAmzPxkBpJZz4FNoAe133Lnw6m2YnstDSXZ576MrRtd1ExnK",
  "key32": "2agaPvyvMdrQnsYVijmkgEyPDemzG3NNPK3wmMorQkRihEQZdxk92yEsAiZeAiaL25H58wCSyCxGniDC2RyPLkzm",
  "key33": "3RU4V5nLFmSFeEmkWGTrVvCvd3uUztzg7rZwbWUFziUcaDk9BtYAEH3oyMrGSHXL5FarMdJ69mhFvhWqRsjVXH4n",
  "key34": "XHne7rgT4o8Hdi5PuFRvRZJXe995jPjjhTwReSHwsEQTHVMFcFd37AcmmDPdsi1DS2bMs6FHH8nCjyqMaFeXVWR",
  "key35": "3fdcXmurLTfVuYTm6N9BjtJDaQpuDEnzLEMPUHTQYBxnkQMwXs8GbW6xSHNkmiUZrmK48jNPE3JRLtzDammg7Hvy"
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
