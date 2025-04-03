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
    "PDnaoDVg6PBuUGe6HiFZF4BNcEJqF8JB2u1ZfvLuuPxh7AW7ibtY8DvbNVkhMhnGhwzvSSP8vAA21Z8wd7MVajp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yZT18mrrN43nEsyyFQ7u3xHdiFJyi6mgptGsE2qrSjKypScQzduXgiHc8435A35SUE5GGYrKKHWFq6pmNfsjhE7",
  "key1": "4EmaaLKR7bdgECN7LuALTh1Y1wgabKYoomRzvUWQHQo9F1injMLZu3DVc1ouGdbMYPNH1SCEDtpmZHvWxnvMX9F",
  "key2": "mTwshRxCzB1Rcg6PW2nvAhvAnSndFFx6gAXK8qjzf9EpMV7KWa7AQSxkSYq3xUQGgvDhUdvLL9psWaNok4r8eo6",
  "key3": "5VGTnSDEmpGPd2n6ks6yfEVmukDnrWGHJfYf2ktS5UTSYZeCzCXktDQnuSTJb43ipM9onjFaLUn3LnNRv4X7Vjar",
  "key4": "hb5unCuheKwKtVBYSnBuR73fREgWqRwoCA811bRosVXaXZh2SAUUEsS4gpQpjyvWaXqLuu3yRcBCA41fsi7JgHu",
  "key5": "2UuPZqJbQsJs4qXuK1SdF3RF7YYw9NgwEPEjTWfG3T6cr1HcUqPo8TEHrNMST6BWGNuoMQ27Wjnv6yKhpoJJNbqo",
  "key6": "5THLJCp4GBMC6eGcHbt8bNXzeKdsiMeyUpcUfq1PfVDpsxSzq2Ktggh4sDRrn89U54YZ72qVQmnThJQFk5S2mdvx",
  "key7": "3Jrra5zn5i5Cd4dude1RiQuoS8PJSfNvWy7rGPTF35hmDnuAmRbxsJJKK8sMG1iJVoBQQ5Q1HTRAXjK1DQoAHUBY",
  "key8": "2Ju12kVk3jA8mC84hQeuSHfcgAYoufAQgPha4v8YwYxRtfCoGCr5ogZNNmL5m9BM3zYeaLvam4YeAYPFu5RMujdw",
  "key9": "5gzoE2qWxww68QWbY6vJkBNq65G3zvBchNxLAyxvoVvrxMXnWKfF6cNkf68BYiECJ29KjpdVDQdiuZC78dqs77ew",
  "key10": "4RRaETViT5CzFvdPqqsKaEyEdjrvR8i5S7phW4rpqpQhS5yG5Ss3dq5u4JE6tkUWL2XRw2ooX5io5wjCSD6FFnaB",
  "key11": "4aMoZFHgFmvL9AGLWxKqf3UpKwhu2n5wZPQMQkvZjGihUwLgpjKm9acTyiA3fSShvi4udxugwcDi7sFuop45zbtP",
  "key12": "QsN1meTtK2vSNpe8HUospHbHfc6qT26ZFAZphpdjcD5SJFYKcoJ9yLEx43Wx363i6iXEHNbCwm9RYZWhTZnXSK4",
  "key13": "2WEvFR1LVDHfVM6nj2Uwm2daWq4jm1RJUbz7z7LyFmnUyjd7T1u6JHfnhsVAa72KZ4u9HMeCecUcwy4XU6KMcH1w",
  "key14": "YoJcft1R79f5hhGZxErjMwfsSdzgjsbrqyxqGBLJny8uBjJd3GqKKfdS8LtuLmEPBzDbiu9tkGdRFQ15pEAvSbr",
  "key15": "5osnUoS2YGNvoxyUm1MH21obMcuUiKX2YVDDr4Bb4uSd2R5WXgC3kUwt8dATJW6rmaRGMTCgVvfsV8PdegR1JLYG",
  "key16": "2R4TM5d3daL16PpByTXGMonWZnz8GCx8iJ127swjhq5vWrRRHjdsoxLhTPENHE46vXn5cH1CPigie8ffp2YLZWZ",
  "key17": "2FVsyvn398CRfXzaBinyQ9iudY16KqjTRXEgwFBNtvvy4fUPhLtgUuy2Z3BqmLg5AYob5c6r5PEwiFBFzNzzkEpx",
  "key18": "2wjSYnjbmw72K2Gz4jktA36SashyNxncVSBnw8mneVxtM8mk2mpyPgAcnrPJAmrHW68v1qh2ej2tgwHx5akuK42i",
  "key19": "2dLRnyCZTqEhuKXoKg4mKeGJj3WguuXaCKErwvjAD8Em9TkBwg6MBFNwfxehMygGRE5pvYyr6mxKJEGdpXMxXS6",
  "key20": "58GSPhFUuZPF8EU5RnN95KZ392yWxWLr7CTEPu3iWgTQofA5bccctqt91keBypKZJZYeBHMFqYk7TfDEip8Gb85H",
  "key21": "36F9o1fZqoqzRfz3sms3isXxCSAKo1C3SeKcyHToufP174a7nj9qp2bPCv9WMhFgRaHiy9QZSr4ryTdhMd1c1A1V",
  "key22": "4FByYowaF2fDzdkWqrhBBZ315GRvzdDA7xmnrc8TGyuWHg19s8SvA3G9SEmhogNzduM4QbCQmcisoRXXkFCxwYud",
  "key23": "4rvjarzCtrx8baW1dB67J6sUtVayehNeyhMVYSQHWwhU3V6FFtyaxHGwosgio33yr6bByN895M3dEeS78qyMCkMr",
  "key24": "5VjRDsuD6DQ8w6iekwAX8QYy7QRWYshbbMmxoECyMXEEiF9DSyyRD6u5ZEGCN8qSLQfuA7sX9BoWKs9etXmFFZZP",
  "key25": "2g7hegyhwtaQ5xQUk95ChSbDbDqdTxXN5YuAGBbZS5MPmmGmKjFZfFoVVzTjZJGwkf8kgybLcR4VZGFaeSW6SW1p",
  "key26": "4rtX2n8dRY2ui4JCNTcLbiSFQCUwJoThA9WNqMgMMQnvK5NrpyXByE5NRGiEZpfoUyecPYR2p3jJQmqHrcm7GmYu",
  "key27": "3GmPffiPjLQy5y51Rt58h5p183GcSuLmTgcDCTdL1rCwArS1oW2QF3e8TBnRWhpf8Dm7TmrB3ER1w3VBmNpkaXrf",
  "key28": "41915p2QNuFgdPQ3owxuCNeMyDeUz4jDfEaWrNZFs68jSLveYQB7tvZ3CG5aUNJx3HjYQYtHraXT6tpJdJrK3noc",
  "key29": "8mXrcX9FAQpBg8fu9C7C7A4GngfwGJ28JbjsExSjRUQfTqhXhUL8rHLo6Wg9JpgULomjtVPRWihhKMJWNMcXbi1",
  "key30": "3kNMMHtHcciWL176WjkNcx39dfEHnyFNA6hstLTEJh17jqHpj363VXLcenWuq8uCuoCJFa6fcFjaEgNjGhnbu8wx",
  "key31": "2zfMXPNqdHqySJ2qTzSsnhac25AJxgQBnZ1PwUaXyjEv1mvDAhq646PSL3cAt8MVTq86N7ZcKQRkdd5ns9XRrVLR",
  "key32": "5PMuPJ116QudgmFRz2R6r6aEDew83bFJ6vKaHrvqgzkk1ryof277erUy1ykckqyfDFPGEw17uggQd2XSWAP6Edq9",
  "key33": "28LMzvaseRDwgWqQRPf6kN7Wvvnv5Pa9nJLFWMC4cVhUF2tzuYxcgw3f62bJWCLfV25cmAmpMZdaWppLFoBHsbe5",
  "key34": "3sSDndS1F6v4SXUTNWF4EMCH1b8NSH7S2vJnQnaLJdmKaChVSkKhwa7q839BdzLE7Lajq5bw3GWr2g6wivEHjbcV",
  "key35": "5aXs6onTDUJVwdBGtwqL76NXMN1DibUqbgKzxGSy454tgtnJPFQ3nWdhWfAPyiGDm87LacdisSofiDMNCWpaRgF5",
  "key36": "4m5jMNGDTg3Dnj8ec9UsmrCcE9qbsU2qgLAWX62N9kswqg8WH7ymTanVEbbAkEEE5xrzXm2qmYL76UfbG9YiKmTR",
  "key37": "3hV5kVkH13AtaVhDdZJU3BoPf8Zg5vo3SSZHJdkAVuGwuT8fa93QVcvy8CzkcxjTPYH1NnSeYBDTTNrj2xGWHX4w"
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
