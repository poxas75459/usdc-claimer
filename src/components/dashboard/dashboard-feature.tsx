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
    "5WNvDa6TgSudHZne811RQ5UayBoaXn23MJuWTveMKLhzWbRckSNFzXhtSucjj5zzSDZG6hcUim7s3mKrs8to9z6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RNqbRjq1Ps1MYWjiD1dRK5Hm4beMYR74zCXMDwoMaoRb9bHnMQbRLGCcU2aXumRMFjNxK1mCoAQY45DEtdcUwzs",
  "key1": "5qRqfdPjVtX7mv9DCeUjT32V1DMcdUrxn8KfvDvZdVbDrsCpi4EeqW1KB8EE5LZbYpj4xTaYXJr8mVebQsykZVVk",
  "key2": "4YtqNVDeuV3tDc9AZSmbgUFZ8fBb3U32iDcZ6wrG9XS2QFJSqWUM4EjAw2VWQ3RAtgPQuuWq9Q53mgJ2rcLazwad",
  "key3": "3aW1CEX6o1CdL2t9JhRjB88zJ1NQz4sRSRrJJrNHAdmWje1PqcBuJviqccyM4NF3AiE5FMjMvt8DPPJVDAMbm8vC",
  "key4": "5HXErt6EhUEDsxyeWpRteGqerxgcrrNBbZiyJjhdk8xcYdR8P3ggjzQyk27xAguiRVD36UiGd4e778vHbT6H7w5g",
  "key5": "2YmTAcAZLqtZGmCRgBzCPgacJjZZxqoLJGwEZ3TLq7GSce3v6EbFTEWjtRZwoikTaf2oeTjVqGpvactPQZL9zHiA",
  "key6": "2wSYvbtrBU1ynk1wHN89pzp8McunPuVmXGxQ48TN5Efd91zLgcm5cFFzyKCDUgSF3Xm8qUhnMcqWnPCgLPYteBNv",
  "key7": "GHq3hKnuHzGaWKwTS934FZ22fMiQDgGQ8c6v2TkGoVLofWRByvEXdY8j1SopK8sKFTHA49cgLoqGbSoKbpfoyUg",
  "key8": "5qVGdfMcgYjd9vUgEexKtwnampJDuHxxztGxCgEFfmN8UDi6DPC7KT5Nkb6AnaTiXdsCBxZnADv3wKvmxaPcwd9w",
  "key9": "47CHCGwg1MCWWcCxM6r9QFEnUCprZmmiMRPDsXuPMKPWPpQvFLbhkpgypAmBWac26dWK1sWVRZ7k5J7MfhfLxVnb",
  "key10": "3njKBrTu3GZ6e3bzbqLdeB7hyUqpSnpm8oLkgHrLhnENmV9FXaVN9LjwvouVdBpAERRscCuUXwwv9GQkJgwkfZS8",
  "key11": "3zg1SaMTE9MMzG5YDrbZWRJikwZL37qz5NaL2NuoFHjwdEunjH2xaco16CqNCjBRLWzgGoNDRaoTEU6zovTQdTFj",
  "key12": "25rzHz2DAkESNvdC1zxtfeC87mFsfMKvZVcroVwx7L4yEkdCrhnZ7kAr8ZqcT81He1Pq6YetYb3EkutjCFSQyLUN",
  "key13": "uj7rpRGBrjb15aSZ23MBmtrp6ca2ky3EZY1JxkoQDvcugjX4Go8ZhPgyGZ6NaCKLp9d3WSLznzBBAM9yAM7xHfF",
  "key14": "5Jj3HxZPRmBGj8BeaSgN3iA7ke4W87vdFzGyxwugZjeNoTpQtNdBsYMYN8Cc4uG9wUGsbVgAgxhzx7eRUeZnCUE5",
  "key15": "3oDU5ps4wRnLMdje1XrXsbtJN4ioi4M7vzHjqZXXJV9mGUHSuVCBu7TgD6qLBpGbj1PaYfeWiUMWhDcTDgxDNtGW",
  "key16": "3fejrj7zhSff84QMGMki1yMVoWAxTkXf92y2uAiLJGgyhap8pALJU8DybMgbN4qos6QLMDmqocD1vQGRqVhTA54W",
  "key17": "26qiPRn3QsXdPMJejaU1zEx8JjuMwvPT7tjTXmddUBU2zbf9EvyLohwhzKa6MEA2fcmoiufijezN32HZDWh23Mz1",
  "key18": "3QYPTjnhrLoEYiPfKahcNpRG7KRban1Y9Xm19jnSRsNHqc6TuCkDSYTpk35B55CaKHDNWEx7TzZ1PGR4Xpaiomrs",
  "key19": "AqN6E9xSsvyweUxA9tbSB8AkkSPmuVcHjFA1bLuJcrG1tWAzjV7y4dkeMADcvUZ8Yd1ckMZHUSCY5LBSNuZ1TVd",
  "key20": "5d6mnrrT4pHHipCLNWivagZmbCv6T8ceetQ2koY5AV4hEmAuhq7znmrXPmFnrLXjAu65cqaCS2ksgYtipBXxNzki",
  "key21": "4M7coT8KTMuoZw49qjTeBW9yZvgXwttTSsmwRv5ZgHgA4qazK1gViVS72UhXVc8pbCHLVdUmxmtwC1EtVNA5HJRN",
  "key22": "13yeuK6KEoyubk3P4dnE7DwW1nbLUwuu9VECDi9GR2hqL8cDZa4oURudAZ1ddjMySKyRN4YraAGMSoA5Yp1BjV6",
  "key23": "2Vw7pRpRCZnS9YVnYYuxBMijchMkggs3YDjLhBvNYmSSFGiRMsqVS52QaQQLFV1pcTGLzq5wHREFGYqPKLfppcuR",
  "key24": "4JKqmYv4S4cnwDt5UHBpBZJQRaA49QeG61HQXj33eVsXPwusKyrk4Gn9rtQwjjmkheXn9fZrB9Vtud4xhkzPKCVQ",
  "key25": "iEFDuisr47rci6ypAGScmyE4q7YfC5sgLpWeMoqkbQoi3gUwL24kvnYCGYvzk65oLKxEBPuK7x64edbKURmnb92",
  "key26": "57PR1BXXnC3g2H1FgegAu2jXu2hZ7rLA2rekTDMVfqgQnbNAxgChCKjuqEkomfHZTaGqwrAnL8EVAei3gtZWjEAo",
  "key27": "5XCdZ3EBzd5LPooRjc6HJjk5ydJHteAeMvDYrjdK14XXAyX52Ppa3uBioeQxP3KSKw3CBSCeQ73s1PrWLWgpehq8",
  "key28": "53g1EH6iRgDxHSH5sLtkNJYSpu7JW3c1qpzvHU41pE9TrfzXiacP4FT44tRJaeGr5B8TH9GsY1miNx9CGKwYMW66",
  "key29": "4XA8CVqzC3EbXSCAYjVF43FPfiAc6NJyuejCYsrKUAj2XxGJRj7bV5rEi2et4KwQQMCMYrTvz2Gi871iyFVrTRgi",
  "key30": "4DpmMta5QPmaaAVWG6tmHwkuxLC6WrVFiaJtySGNgwcVQPhgxNpmkev3KeEqnjPsxKFSyi9gbyegNrZoJFEfFFSV",
  "key31": "2W9216nCGMASr4bALN36qBBbEBzhXHnVNj8gMneTaWHV9TDkuyNeCbZxxzGcSBPBKnCvvYJw8EWJJssp18nLoD6y",
  "key32": "5MrkYfP1YpSa3Go6e4ExxtuqBhqeMp2JJckqQCPDDCC2PEQgwRCMJGPmk2XbJ34bByq5uJog9DJhLYrSJLVKWpVn",
  "key33": "3tHC46QwbeZYTHHCzUmosWQAZQYV9pZuvWmXXFqo7KSpEkaCrMqKtDMBMR4tuZJiPZYjP6ER2DZ5kCLe4CJemGpY"
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
