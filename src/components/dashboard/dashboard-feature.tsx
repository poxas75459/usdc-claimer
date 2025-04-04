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
    "5iB9T2kB4TZZxnPpYF5H9vg5PisBbFf9Brj8VWFYuwD3LTJXGLAtNkMtrtx1ABg5KLxvKny23e3jYr6sDWDErgNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VxQe4c1YTtL16TdyXWNWNcsJbBHZwKvoa6KXm3k3xeuSkbHGgWbHRe9VSycymZvtgzTXYjFVwJGU9mpATWVGun4",
  "key1": "4sjyeKVnZUwsZpYbxrCHnCWmHjoJ1LWEikZJS4BmKZdk7h7oowUTtH5dCcc92VUDwLz24mikF66SZSDVX7jSreGD",
  "key2": "4jq6qjNPwv9wm8YNSdC8ghA1DS7cm4KSkqFmELxSsgLH7ga2Lb5PMiZxbaiMcYYzFr5Yfm9JDm6w3QMTBHJpb5xX",
  "key3": "SiQ1Koeb2hCyqnNUJq6oNDN35sz3jXURyGN5FAiG4xD4cQLpAsru8Cy9juQj65QNPmXaBrSb4u31xZxyNC3AbQ3",
  "key4": "icDSExDZQQxAUQya487CiZqZ3eb8JFJWbaB8SDndmSf2eincjCTz2qGEKzf7xZTLLtyFhoDr4WWQyp71wCE7pYL",
  "key5": "2u1F8mw8vhGa5kVFSvhPkyNYbrfKjZUAqJTATNwywPNfGPXJ8EUY5zoQeFcHZd1PyStJKhEePDFX3TbAoD4n9Sh",
  "key6": "5PCLLtCUH4s6up4MEkE4Hb44FtYk22g15XqSwd6ushwjVwhjzNA5kN18x9GaF4ZdmoV4MoBCXGhh5DYbyn6G1aWA",
  "key7": "4v9cJfuzLSa2txiwmCufpUrbEPPWNKykVNpveAucWYDaUuGvTT7egrvEKu2y3rfJUcXbL6UMtDLNsRtnzB5ZHutU",
  "key8": "447mi8RtvmtfdQt1AcHXi5m8eBAJYDUuTER5cKc5pppFGdoPWzRXfs7jqpRYZguYnf5np41tb8Ai2cULv53YqXTB",
  "key9": "2iHBjEqz84tWJCojJxgi76U3T787LoSt3ZBtnGpkDo9MUurz8yLFcaCnVmfYQj8A7n7XAawLXbYbXBgyQmxLLyoN",
  "key10": "4RNxy3YTtWbxENN9CVq7mU1w7qVtST5P6iwhKcmfiArUEYvWJhUSEfmkKa1dXVJidnaw1CutshBBYrnQevrmS3y8",
  "key11": "33fJfdk6xvSMGcuEaiQbDtG1ykVXXxEUd9mv4BtbWJr1UFEfutcrQx2gM2ghXupmsXz8aE5Vg9HLScw9UmzdUfuB",
  "key12": "5cRWGF4omhpP64BusF7DdxzmdYEoDTyi3QgNw5biEuAvdZioYgPyXvG9B862rsyH7qHKoxLtyJkN7nGsSfEMgUS2",
  "key13": "3EGH52dbKaGaUWVpuDD9Js2mb2ceNmSd16J3ju5UsaTGSkVyRajNWvqzEsC8dW98vJAKjoEUGKtqdNc8afDL9sck",
  "key14": "4EUhSAdLXqWPTm56NeJrC1CuPaJU4Y9RoDoPnuDJo5zgZEHyANiMjn63JFZfWzm44mPDfAnjqHKkKjPWcvzK1Rxu",
  "key15": "4WxD7iS1yvjLKGTLUex18g6xWQJ1w5oPQnZGffB2LKtLdyb1UVRAjWC2CGfBwoEKJ5pnMwtibcUnxWCEVryAxuZT",
  "key16": "2W2GXVcsHr6bieBmcZxYBcSiuBi1jz6H8psvZkgDfBmgrNBZfTtQhXhhWtTJw1NHTR1k4DP8vt9nmmLe9BiNpZCP",
  "key17": "4yhWDeno4PH5WLUYEapXq7zh1vNbBdJqcehhJJeus4DEBBZGEtt45ZWYZvGvogFoDKJCUbK6UQ5RawG2hbpm7AWt",
  "key18": "2GA44sc6hGSbKAFQxuSzVyp7aA8BK8ZivPviZEe2Esr9KNVirVSCu7jsvepRnjfvQQVAir1DepqhjboXvmsHyytu",
  "key19": "4GmrwLmWYce6gb3SfWGwu5u88oNmTXbprc8k2XxfFRiNvFFFjAi5EUhZZ2G3b8xZbyfGkVMp6vFRyYyTRMVQRMH",
  "key20": "3nj3A38JDWhw1WSvrQvmdZbAVya1u1ZGdGKagY7gK7Ybpb9dv1FDoyqA7ietd1zdRREWX2DpdBjR2TGCZDAumciX",
  "key21": "2UW5YGtPeNMa5WGnwZPyWXRoC9ZCpAsKg4N2WPoyxH1DW2icwQXvHgrYwr64ZgyXfichsAUkn6zo7GFmWyeaBtED",
  "key22": "4unVb6Se3Ndofx2KoRjjmRG6bSHgPdo5q6ejEJmiZpCv8u97HDdZBuidvbpD2iccanaFUHtqp7Fj823CLFmabUUY",
  "key23": "2xYZfrWGcxQuAYAMdNttBj43hm58HQ9QJjMW8VVbTTX8Ey2Qx7bD7EqYifXgXKaDWG1BnjRGXsQu3UHLPN2tu2T6",
  "key24": "21onWpzwdnmNgapkdBaiuxtxmfmE9ueLN4w1n2tgLuBg94V663CZDXmsVcGY8nYx8fGkFpDiEhrXK3diu8Ho19EB",
  "key25": "5kyd9xwn1K3Z76EZvMweDnqQSMkWniozMLzv9MjvU71gLVGgQBdiuHGm5CmXZG34w2dTCTYsq2dHrNFK9ag8YFEa",
  "key26": "kh792kAmLK7BrntAabMwvWL9k37GNXZPTrJk9cwDctcgSK3g4ADjL45NHK2cLdGQS4FTveLc7TUxrxktYtDxtMf",
  "key27": "3k1YFmA8Zc5HiemoNTxLtnR6veRg1kcZbTM6raFrf1cmwy8bzFGHR1PxQpDXBYdyRiJFQx95x4Qnu3hivs3w428t",
  "key28": "2oXR6QD1CFvuu9aXFxUdNhMyR7ntQbZEtJLK4ERqvaCtWzZhQSkZKqSnLSuYezsS8zUVLUgzexJuRxFpdtKgebu8",
  "key29": "5MdYTtNfZfvSXu6gZSokW2dNjaoNLoTFo4pXvzqa8gNGssZgbJwwutgbjTi9raaXDNGqkSZxp6kt9C1wYTLXQ46T",
  "key30": "2mx4BbD84Q7qxmht8GUrPG2wLhTXzj9hsKcbp2EnP8koKE96cGg6hbeutLrnS6qFXYgGmY25uFxXJs9TS4y4qwNm",
  "key31": "2pKLLUi6qSfLN2z9CxfANaEZwmkm8NbCPLfSTDMwqVfwPA4XriWMpYgjM4CJhLE32ybzQpWaznQLyUCV1v23no4E",
  "key32": "22EghGTt8LXEqdmZMDceSX4U4qnE21AnZ7Wn2TSFpQqzwvR5Um2HTUJctufiAS9WzDJreF8v8svtqP17FiQhFwCN"
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
