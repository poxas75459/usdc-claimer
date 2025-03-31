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
    "4pygaDQ9B4Vqs1pEdKKkoWj7D4dFCFdeZd3dvz5buSbv5y4uHHoueV8pdXUM1Zu2yAWXF1BzmAXRGt9aWdqEf7ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hFdTK5fgmTGbGt3cUWPad2sKt7xBGoGRpKPMMMAXFHkMarws5TtgACs8PHkATsXHKTUZgMKbL6BT19iiF9cQ7ec",
  "key1": "bwBv1qDJMgyXzgvZehKRpMNtChHHPtt2sCTDtMixvKQzYPAtsv6pggb2TffhvdTrz9hntcUcwrDuGnmizmhfBmJ",
  "key2": "Pzxhxpef6oF4yETiVnBuVLgKixfnkRTZoJXGkSt2dA57NTVDyDEBDfcZ8dxsUY4fga7xcrWXt3U1rSwGB2cXy4x",
  "key3": "4KkKs2k9HHjwAq1oi64GXLWxZmQDAgwSAxwN5AZT7NHxFZvhc52ocU8HHQbxVuiafvqcyJvcU5zf4VXQuerTbPwq",
  "key4": "2HitfJwN3GqCtJSVULdgsd4tLe3GCTtEzQtpYrs4CT6kj8MrDK5SDVGojW2HqXwcD4WugqpRsKYDdi8ojH5Ud9kP",
  "key5": "5cP4aAGoZs11j5dZRtHvSWdz5UH6UTwegxujG1id7kW5qHEZHS6kqioUZZVUJC2CUsVDyKVgLvLHQ1hBKLETECkD",
  "key6": "51HspPJX586YPvnqPrLbWNLgtsuH4TMxYgk3DwK7fMysdQa75kvgbVo2HuF7xT65Q3NqMpUtiM6suZLRmK9egw85",
  "key7": "53Xpi2sYszT6iGNJPYi4tUgSZsaERVRk8CntwwSmtMHSV6xAtqhNNZUqZGUUfsA6GYhVpVc6pAVZVB3e73yegSjC",
  "key8": "5fYPCYgfrKUJrXKDH3REr4b675DWKPGBRgBX9iXHC7eQfn6zj4uTXfyzVMyML2KhbtK3pAVoZELGGhoSmFFcViM6",
  "key9": "2XkDRPugNqhQM8E8S2rokcN4EjCFoqMQR1CYZRs5XApuCApiaWQCf7dExqEWK9yjCeduy8J7aWCe2QpwWFAMCTgm",
  "key10": "5PJNvnZc7TmSHrVqeP1GiiJXKvmEFQ5zUgPuzAuqC7n2RJPxKywP93wZR6SAZWPKcnhqvoWFgs6YYxrui4vbcG61",
  "key11": "3eHzDZGW8D2ENjdVbJbN8SW4aM4fGy3SFfUP52p1YRqADteQEJht3jNoBugHx1sP7wLvSw4YZmFATU479L3J7CYB",
  "key12": "4ui5xxcDi45PFyLC2nKnUBZxYbYZVxxbiAjvKospDvCtpSVQ5fq8BuyieuTyMtxVTcHts1rgNs6Tu8mEzy69nL9M",
  "key13": "5wcbZ54WAV65NvfZXBVZqawwW1hxepkpZnezseybYDhQ27JHmwYGy3tttnQC4u3xz22j8TC9eHK3BRDd7qXbBsEi",
  "key14": "3Ls6B4VAj5s9xjKgUoPh5dBpbNB4V7xRuymaX4p3CvHSkyF4rmf9Wz3fqnPWuuv4sDjdjrUu36upKofxgxJ72SeA",
  "key15": "5j1iaa3qXfD8twj5kbeiKhj7SJPMar6m1GP6QVMgHiKtExMcukYY18AP3iX8GouTnaqQ9YRdwuNpbUBQzUYxHH1v",
  "key16": "4ohx5YWRcV7bJku3X3XTuHFp5gwJTVa9g4TuRU7iodjAoQrcMVXpekR6e4jDRXRM82cswBXUUtfTg7mazCw5v36q",
  "key17": "2YZCaPKhY6ASYSgDL7KFwPPP8bAth242A9Z5vFvCYmWW8XAoQu1mLv9NPWX2EUFbu4x6m12u9SCffXiNabdVAmbu",
  "key18": "43DgsWqokz4tBPHpsoxTXikHfVKUF6gAxxZJiDFCdP7AMmmqH4NyEULUZKdnSnUx3bNWKYEdp8PPEq6TagGDAFw7",
  "key19": "47tMdY8Sns46REVY4cNLi5bkBfqgz5RmghfSf5YqUzQv3XXocVfyqLM56sSzyGQT7JFhaLwTsjJsPsuETtrPyhF9",
  "key20": "5qRa2tYhU4xoawNVKkHFPfBUuGHoZEithQ1XrFGkPd6BUPGXBBkmtsjsRgecun3boMUuKAMHAjbK7SiwvAvJnSbG",
  "key21": "2Z4Jpfm6HZUJTsJtSteZnQcwLEPNVtmmZjyBgboT7pQEsYuFUZdqQdejeB7MQpwdtcotNuRkvWCyW4knLeF4Njon",
  "key22": "55TXGruqzczb2hJFLMrPna9TTU7jEDP4awGkWHBvgyWsKfJVDH5E1RPHRZaMumPYV8nmDUEWqo2Mn3k58udkx6sM",
  "key23": "3URGPRzuMiv2q2GmM8CYyQvQ9ahy9jEeYMULRrzT3Y4jDeovPEsSURzBHQiuMZh5ZwD7m4QMwXHuhs9JZavbZs8d",
  "key24": "4zNXLTTM4bPdxydBfDgGricHsAk1XByaPSfJM97ZTT279AsvnpY7fN5DsMTxGQ5hgvPJPTFPijamMEvBp4PxHtsK",
  "key25": "2TP16SQuoWZSZ6PLUxDkaPJnDCVNTWSNQFVTBac52EprEMREUpSLgoaTsXYbELcWUHpfBRuDBwt3qE7xsKFaJVD9",
  "key26": "RRSszZUUXbmEWhB8fHA1ky4Azy7AYRaJL3WPYCmTDZVYbPsBpFFtEhkCnyGr8nqA3wG4oeAkE1XaAt6cBLHgwR5",
  "key27": "5DLTRUj8bE2ahzRT7g9nw1TRmwjG4WDoSSzQHbeQsNuRrYczDWurqGYRTDM99xhpAVJhsHphEK5w1CzL9SWB5VSB",
  "key28": "5dZvEjFpsJ3MTfXtwrZCaoRSxM5HgSXsxCDewtGnNYczxPiHocf5UxkdCzHBx547DZHSMnNacGtD4VwXjk2nRJUU",
  "key29": "5vwnWbrLVoZ8jvcD1aBSsEbe7si1QifKFe4RpC1CiVnyprxaMP9TJgsbQs3Y1jq95EU49EaXthQVk659wrufSdz8",
  "key30": "4ctvdP7DX14WyJPhLCgixbckf7YSiof68eyrpmVd46aRzD7EzgU7D2n2LdiaQqoUofXAytHNSMhdeeTQcyybsUwk",
  "key31": "xbUEzD72xAHrs86jpkQWYZEUsoCBUnAKnNeicntcEgAPXEMPpNi8tTGh8rPbqAtiG6XC56LCZi53hWVrdxppvHF",
  "key32": "2jt6kvWSNeZLrxCg5RkkA8T3NmTAZkti28833JaiCaYVb8uD1u64SHEEiyzCVa2cUQbVwb6sgFQjGsQFZs9ArzTS",
  "key33": "pZnPcBXDjsGWm53qGFjprjAxW8y2ah5EUUqzDAR1NFZ1qUFPUtmho76VmfAECCjC6X5t9rVcuE9n6fRsARDSyQA",
  "key34": "2kxMSnSToFxozCXiJfXwdARJJaGb2F4xHN5M1QvPdv2Kd4k6fXhdSBiGNsQQDKgFMZCZhVG1NxUgzAuKkLcYpYnf",
  "key35": "2i1rSrARSsqNyD3dsDAtjQu9AF2LGAbaN8gro24a7ipA8ZiZ1TW8B4Z7FzYpkudBgU27QcKCKziJdyPEsb5gSoSx",
  "key36": "etTUjVf2z3cvaCUb1nueqvDnUvihcH76JHoYLX1RmVLk12p15zajfz7UuKWddkAobytRRU14s7Qaahry6tKzdaf",
  "key37": "36TRJ8PCUm1CRTGSVpeAHaWiNMVF6MNgmk2a6Kgab9E52G7B6iJ6Sc29CRnip2Xpe5SZMNdepxRmFuGFp5KhZLQE",
  "key38": "QJVH8Up8GXyras6zCVkJ7uKncQ9y4VVNZRxXXh6P5HUaa8qkdC8jNUknXcx4rdSCJShSe5BWuQ9gsXVbUe2uTT4",
  "key39": "3JdcGtiEswb8zMxKwVKBStSaCtLvTBbRnE1oVyt8b89CxKuAnLXzrEiiXZraDqHA2DavVCubrUxeiBRSFZwBLmDw",
  "key40": "5z7VUC6DPt8ep6a3r4u1kQQDn3qLUwGtkLjXoqoVVu6kjz49Ky5gNPwYNDwJRcA3JtY9owhF4Hi5pUkEo73QRoYS"
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
