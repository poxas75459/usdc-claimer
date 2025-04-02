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
    "4xzMMzSny3Z1fwCPpXA3ZzLQG34R21oV3yHmZpMYhDAz1BEzH174hytqVj2arLtQFjNv9u3dpfG62gDg9kyHr2tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oBQ8P8rzkLWMxQCztRreac9FkwLSXmBkbEfvy5KKcHLDnhkkGpcTLDqYdtaUtvCc5wzWqT6msnB6rQSXL1C8XPH",
  "key1": "5PRZ5sCY2fyMBZCnQRuoHK8aHpkUZYbfyXe3orALK62fjqfbteCRqUNgicKZc3M73ibJfVMuiuynQFdTLL1nrvYS",
  "key2": "2UxFDXBnPrhyh7TWaaWLHpQwBRosM3osjeKVzyxwsaKh577YqJTXHPwWDFiXE9dnq7VEJfQ5a8XGLc7Xvuv4twFB",
  "key3": "5pqFkXEh9Kx1MKRFAnBiXLgtnUQFmRZDx9xQH4xgrdrJyq52xGcKMRNV7z7s4MN8RBJXCDRpc1ACkb9B6ut26NrA",
  "key4": "4Ui1NsLLnhFk4NADHzR4Vwd4pHegdXdzamKQqRFkypWfNn1hu745p2bJoLxDbE4sDEiu6vvJKriSjQtX3wvDMCup",
  "key5": "33DWi9mV1g5g48MWAAn3BWyj3S9ERFxxaS94LYpWxzKfVhmRzeFZQLdpSA1nDFQ6tcCb5q7izKcjPxbLzMu9HNh9",
  "key6": "vYN9SamKzwa2t8D2uHtMRBpchnK5WFDGBpmqBKCiBBwKkuTBqbbDH9cPxFM8PHpgPfd1BmAQyjb2YJwtQneYnQ4",
  "key7": "4DzAA3EnYBrm8fLmSfkA8ebpRbz1VLVaBAsAUkCZXDigLEV9jnVDHXfz4rktn4rV8vHGFknDteNouryTetTN5Gdb",
  "key8": "3hY1dNgBgoAYbuuLTafDPaEbywWfBsF9yB1qN3nCbjg4LyLDtczWevEYS2gfu4ATzVSjW9y3gFkxjUPg9equqnm",
  "key9": "4fYeJ68qSRANGxUDBgzC8jEBYLoWhQPAUEczHXeMGR3WrDdEshZcqDiyTPBDmhfJrHSXTgU8LyC423u3xGWv6fN5",
  "key10": "5dd9ndD7GmnvaMyznQv81ZmrfwJ1DrZMhtGkPePBsZrKNsxAmdJM1zoCHBeQEnXhx6DXCor5ufnKA9okAw6DrJA5",
  "key11": "2vF19CNmanye4yh5JdEfteSPVs344Vp6fKhgNrPFwQiSYsLRFz2Q21wNjBTcXUAQRWVjpndPuN7GkELbHt83xoFi",
  "key12": "5XbYQi1S5SSd3T1QkiuGjAj3JeF7RQLt9aTqevz28mSWAXj1v2Jqhwx1oFoagKc5JgYpujtAReFUsPmWFgGvnMxq",
  "key13": "5oTomz7uZUrUXxKhscHp3fRvwNxEaVtFkRLwJZ765uA49qMBfSUqjHdWC48EWidPrp36SLvpyjSE7q5ksocLKpm5",
  "key14": "3NJPbEKpGz7r8SwRaySsk8c4CE4yDksrWYfFdofyixeFbaQdpMA6EwS9qUXPW69uv27vWxi9F1qAwJLbKF5Cp5rD",
  "key15": "4mnau9pFjxQfkT1RfQ8378GoY9x8GSLVtxkGSxyhSDpfkLckHDKtWABt7VHSsZDYr7Gcap364gp1gVHTcEr7LG4m",
  "key16": "4hTrnLBHZmAAWTQv3juyLQxLkcAn7K1Ex6hESM6PCJwmG4hTXQw5MKkAvAAhuT7PkRSNnmHMw3ufkgeQQd62DfiY",
  "key17": "jLXzeEjjCLvHnYH3S9eoqqr5EvCRzW5f5MM9KkFeTbjD5C3QEuu3raoYtN2L4LWu7LCfLaSXpvSK2ygeqsqW69i",
  "key18": "4H7KeEcVYkGQauFRpruofezkEkzTxu4E4xYVS8XHVR7ZpBd3c7tv5vsDAPQv6ooBTzE2M9oHUYYczJbeaRvu33do",
  "key19": "4p7kHrB6qiEumF15brbgLTKHCcrXSS63UNyybrFrACmjTCcU6iU3mHt2HxdvdKJLq2N5Lan15aJXLsTbmv35x6Nf",
  "key20": "2bnsGizibNCR7ygVEQnZhWxuLwsGujgJc18pNkVxdN7XXX6ACTjvkRHVRVPg6zM9YUXfNogMcV5UQ65qpPuescQZ",
  "key21": "dUBi4Jz3qvVm7MaQmQXHiDPFMdjgAYWZkvWJ31G2FKJkjd1DbwXUKWHPjHptJ51Futbzj76vpXgGBew9AoiTz7q",
  "key22": "4AcRLGNXF9KevoYW9AxuHNX7bovfDyvWmesGtPrsLeBjTGSwKkw9AzemTfnYgsAkMfVHfkX7NcBJkGxhKeMb93k7",
  "key23": "QvCv6d2nfadzNV92t2vXVhbHAfs88PpjEcuWdqppktrJn1uS291qihL6sbKZJr4guPTMzLu8Cm9jnHsDn5JKXMW",
  "key24": "3DKenEKbHStaNLuPeM5Sp5zPgz5bjfTVsBtzKQd4XaZK8FnQPN7ZyKBi9nxbAGuTX19J19c7drgjkhNC5KiSRycg",
  "key25": "3n7HGKsvsNRtQUH2Y7pdS3AUUgjLzo9DGd5LrBoRJ1w4yoFQAiZg1RC9EjS8Cw3zP5WcCVxqR33ykBFZ1d4zPFoq",
  "key26": "4FqLzi4YK8uXQHG9HcPHWQsJTidHaBLmCoiEfCseMZ21pMtta1UoypR8zMrsnnQuZ8TMAeZpjkguJqkpx36DHchq",
  "key27": "5itH1CiPcWYmX2rX4ijwFEYDjmEqCt5xYNvBXy9FUsKUFfHs6Fypw9SUgkTJZ6XTJEfc8oSDxg1275xerPnmawN9",
  "key28": "eMCQcnm8AL7Y1kTgpENDnJrn8NfY6C7y8z2FCaK2fJ1eyKxUKBvJ1WTwiBCVZqnmTwqwp8mEKoqJeq6iqECKqwK",
  "key29": "ThHNaMmdy2o2rS4eApsiRu4cmGNj1WX9Xpv94mu27CfBBvzcjVXv5nG9cRFa3hnxZob7K5P6KZz1AvzbwTbrbxL",
  "key30": "2QbuNUZWkLDP7BG59abpZGfWnyLp5wvUrGXPT8KowFiNP6FaMiXSLRMDNQYQ4ngBjkiZZLqDznfMFKSTo16PLQGw",
  "key31": "3VFMJQvxZ65FHSWu4v5QZMowU85atKEdyEcfq6wqcepMTSbQyrsc6sTLwnPdrbebh8grfegY5VjLQiQqP7jsUgG",
  "key32": "39sGgRYMwam5Vgyfzv6T151i1wwbsVApnVSQhtx33GWNcdCo9kboWU1WKj8ucvvymroWWyYbHGEhqzH3Wh955kGN",
  "key33": "2C5zWERQHAPMDgziLRn3JgG8ZoojZBv6CeTovhdXqaVjYpr9sLjqoBv7SPJXUZ674tQrAJe1Tbw97azry69qtLrs",
  "key34": "4sAFVBpvFMhPdT3j1LxXi412MucNAjDg2xdQbZ6eUiZks8kBwSfSHZpPP8JsnR1HCgf32eXoGpLHrDfx1Qthwu6C",
  "key35": "8WknxcWiuvHQhqqd1Rf8NeHjp8CNHGEu1AWxBv1azzFEJixzddX4h6yDNiLWhuW8Q8eACsr5PtXCs8BWkrLKyNi",
  "key36": "5amqTQRyArnKXQREinEcdKhXSZnkxDn5rLY8Bkac41LDxfqSJ6hFy1fAHVfdVNgv8cd8Y9MufxoajzwgN1SXJqiT",
  "key37": "2svoPEfZNvPiQs5ySSjWFHaPfLBYwbb3hiwmHHTQDTdZQRzy8SYbNHXSfkSnY1yWoDWdrkC7JKpThHeMAYRZcPhU",
  "key38": "5pcQu7HV3gJnjJULcXfjYs2btQf4dkSpKWYBGjbP62vPjJvNyJo8fs1jSu4df97MJq93zUSY5C6YYjLxdX7pdA4n",
  "key39": "ZZuYxYi775VZHsYiSNE8UtHEf1hvwyUJgURFcUQiEijWJz1VBQJptqwn7rDWXpQJaEiSyJhP7NRiqkFgqNuEiMr",
  "key40": "4wvGV4CnNpWSjNdiXy4rZFQrwQKfYwwNHAopbSwSc6uugLeN5Rti746ru3M8EYkhDeSVCndyVtpEenMwzoePqp3t",
  "key41": "57QNndy2eaqmW39CR2zaJT1FJBS6P1cPEsb4epDPAE5Mhavcj3mMN2yzQ5up9Qhnpo3Vr41XtmxB3cHE4tzAfWqp",
  "key42": "4uUiZPgz87RPeiQ5k8cibwAbP1BGEyJC9womCt34d5mhjrgm2Unoy4BFm6fdSevCxQ4NzkttKNTE1CGpds146XSZ"
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
