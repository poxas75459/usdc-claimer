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
    "5W7mVVEtjefnpatUjXnWFmAEBsyFLPBWnF1CcrhaTk7AmPGg2wKjhdHJjaLpVzpEDGi7FmgbW9h7L2LzUprNACpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9hm64w1VJHKuZZ7w8aPVyjyV6qdPJzFrVjMmKqukkj8sUExSAYLstsE4p1HeXfgQ7zdrcmEUirajicQGN2k9mCy",
  "key1": "2gaQyEo3NexR4RKZ1mrsNZQc5howDmiTuDZymPFpv68oCw3ZSzdTz6wjgufxisoxhcPguE3uPMK1dFPWudWhM9bt",
  "key2": "48SNpiBYxWNnUiMUMcWBWSawCSqupYZ7tZTNxYNyLXrcmKRyF1QUCKoQKrsw65S1S4iwYZWcwbWNBU3nYdZ8pFjE",
  "key3": "3iR1hZUrnTMnfL1N2vobWwJYZCDF9HzxGn2zb8Swr9tMBJf7PdnHYYDC1oj4epqftokm6Pn7TDpg4HmeQiSs9ZjU",
  "key4": "2EpsWQ2jCwzuf7Xq6h21LJvHoMsniDE81Bi8J9qCMk4Sdg9ozb7kGYsk582cfd76eYH9AKiytjAR9A2zxaeKZgUf",
  "key5": "63aGk4G4s2GbJNQc4qkYxaPZbq8RDwhxr8o9vizYnFGPaij19dajH65LJkRnZndAGWFEKrJsNLs6hXjPbXZ3fcuC",
  "key6": "3SkMEt6YX5jFRd31jjEXnnvH4r5Qgv8GZg7SUAz3e6xmbrJnpgpTJZe1YesvQNC1fkk9u3V9hyYmjCXV2LBD2d7T",
  "key7": "5nhvbMYTyWhHgfqwBWwTDZykhnzoMiPYwRfgET4ZF2pohB7zCRyi9HNzWBuVHgtaF21gEH99FmUZ37PcuUSjqnYQ",
  "key8": "Nv24KwKJ5VGJdLwSYKfFHxPiKmmVvk4RUEGj7adEb3L7HVpvgq1nytr5rsziivTvMd3EM7ozANEyASiVSFhN4Rg",
  "key9": "27y6CoWBE8UYEzHFhVPu2ALzJsJcUf5bUWQ9W8Bn4fiWpwcUrAxCDhDFRw9BXxVkGBS5fpA6UckZDMBSSGWBw6xz",
  "key10": "2ZMs1JYm8pB9qVVQ2EuLCcZppAjUchu5jjhrUPRa9APr77aYgdLQqnkj6k6cFXonXpFyFLgYZsxqwCXzY2UYmJJf",
  "key11": "28bu9mu3QXSZSesPSWYjvMxpAWSWnygL4djbnK25RgB2L7pKL2As7kHHPcPLvQSCevx5wKQSBXhwJEzs91fap8d5",
  "key12": "4LWAoHrzLRg9NMzQgpxccu8g3B4ABEAR1Zj9tNAf5b7b6Gj1xUdP1JY59Hp8avg12wJqbPMskYn9SazD9pgyPUpc",
  "key13": "5pqwgWKrAbyKez7zLFoERfSLat1xAJga9AbPkaUZyyhreFKsU4utNJyVSZmmjFJwdr8cn1jEEypQQD673fHAKBMH",
  "key14": "64hqjtvqNzmjPzHTDCsDEWnaTgqYCyMKiVJyZmvZozw5DmeaVn15A8YCwYUAfM3noFhyEoqtB4JqmdKKE3pQ4vXS",
  "key15": "2ZmJwLkX6yv6k2LUzHqBF6j9b6EaZKtSXK13YmYuBb2DXCDSVQTcAF5wzEQndJ96qxpwGtgyERMYSnpJGG68EjR4",
  "key16": "2pxqgGQLUV71inz3vYtr8aV1ejjW8jWeFcQrd9tHqBXc5ynBX72ghZ1RQjV25ztzsqTarV6L6R7G1KXjpt5tLXjg",
  "key17": "3GdyyqUprEwH5byqVUxwrfTKGqq72LoHdnhdZC24DcQqZyZ2GzGNXYwpj4axc44ux2LzN3WCHWeGKcUyTuMWuyRC",
  "key18": "4LFL2ra9hUXd7jL2PSW2tdyCKd5NL9Zy3pH915NZQiFN7X2bWfDj7jAzsiUexADhs15rj3TwSGaiWRXGhGSByE8A",
  "key19": "3GMHXzBr9K6WJNL1Rth5t9T5u2UJ7FMxdpesLso6Jxe91PsRUjAXW48VVJa3TWmGqxmzsq4nF3msf4TtrbzYmJgf",
  "key20": "2WND3Dm3DNvYvMqXUF7hnfEZro3Qc7f42C7EfYS9F3ECmJuozJrKDDCh5QzffmdzK4qGKG8sX8A6QCADYFtpyaVZ",
  "key21": "5gunuh6eqbLGQJKT3QDVWKiGXPHyAQPiJisxMRp272QDqEzcu7ctfFvU7bg2q7CBp8unwgnpB8h9YuW2UcUVMgcH",
  "key22": "58zz2toWSWRBqiNgzDAyAbstTeb3hSLwTsudpFVmHifk3M67ruf3qZ5MckhHadqay9jKubjC1FyFUhfA47nyWjfc",
  "key23": "4dRZQDk4QwRaZgXb7UagFHvn1GuZ6MeoMLLaZEpbfwvAHYx4xkDN92uWHXswEeK4LfX9bMukMr6TAb1RjEK4E57q",
  "key24": "uowWAAHn1xUDgd4aEgJZPwW5fPbUXQUJ2DM1mPk9DfVYjYcew89SLfm6ZaZ7oAcfCzwzTmUo8erkiNx83gxPyoh",
  "key25": "4imYVSREjgn7HAUAfezuAk4sDfKoycpbkxqS38QtCF8EhZktMGE4XUQPCPHqKwu3w5LJmpDDNKasgohDbFUbjd6L",
  "key26": "4dbt1Vw3oNguYNrqwspudw5ZmH8ZEZEKrAjswtwMR7hWTAVSJ4FcFsZWrvxx4P17MRBzPaAXHpQAJjdkC24Z64mA",
  "key27": "qNzHbeCvqxD4wKKNQCzc1N1kGiggSh362SmtZXXw5pKRNfcyYvhJi5xZfsBSSbvR9AMiEobptPbwsWuCvTifTMJ",
  "key28": "3d84EcR57hfdKYF72jNdD2EpP4i5ijRLzCm5Q67kNKFwApgREtK45KR3vTkWKbvjFr6JtwaeVBknjoopj5b2m2RE",
  "key29": "aoDtx7xx9BeJAWfF9EPzu872VpfJN4nWngcDahWw1cpcCH4Dkn7WVtXucdvZTeyzwJwanexswoHX31BY3xDPpmu",
  "key30": "4eqjGXkhQDZnpdDHXSQn25j6jfgAyFYT2JkGvu64ENkzURXwp3vbhtBQBf5x4teio2mhubMUWLY1cEwYGdb7aEq7",
  "key31": "328EkZdmfB75FkvNrdZyNptXgutwSHzgd4aSskj6e8WRDBkAHiMnqDvayWxdzSsuRbXsSB8MvorRpuGz4Rfpe5ZY",
  "key32": "4YoR35kj1HKBc5aF3WzXwhRfKiRKgvTe6pBRoxoz3oemdnXUviWajREBkeby1AEZ6hZBrJ5gw1xD8vFAgyUf1itk",
  "key33": "4R4TSVSj51PYgtoMBnRQ3n5bvSJgw9DLZKV7Ckn4JX5agHLheYtXFD8n6Z1egVQV7Tf95t3XRHfveQv9rft9fY8h",
  "key34": "5JPG62MXb65xbUhGtSzx4R4QnPSxxptqMNRhbnwwdXGDkbchWTwo54SYTAPatGygVc5WvFvdPkw59nioLfJBW8j7",
  "key35": "51EAmqtdPCpr1aP1xwjBqq8iNcFJZozHWZfCQAGiEZVoo2AaxeAu6DYU6S9UL6u5bKMSNHbFGyu3GtWLHMYfE4PR",
  "key36": "64jQALjyZAsnXBxjtRETkwgKogiKJV8qeZLKLJVJqUcqEK3djCbpQWytFTbGgQK7vCS4SdQx2yEjqNUSH5YF99hQ",
  "key37": "4PwTSDcHLY2u4H2kbFgsrUxZaABQkNdA9pecngeEKtBFsCEKWfKLXL8kikrHcnV1sVccptNLjYhAC8ZYKDtLKSSC",
  "key38": "2BGmr8v3rr1LSyGZfQ445UHKMNLHftDfEL5TYCsquJWq1JHA8ZaDAb3uuRTG518AAhazEniY361Sjz3ipkgvk9Kq",
  "key39": "4L9HxeRjUyXsk58z2FwFAQxJdwoS4CVEtszkCFWrx2QCXu64H7YH7EXBtsUG6tssYBip7b58iqsGPt34cBtc7YGP",
  "key40": "2CnZGfYabe5yGH4o7sitKcHu8SRmKbp2Ds2UCXGzdF6qqEhiJUYhYieDhuNN9vRQfMEhkeppQFUTHZvicHvAMp37"
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
