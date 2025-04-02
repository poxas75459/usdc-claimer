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
    "AbY8RqxZSB5eNMAxAtF6LPpAzuCjbyyRmfCcK3dBDHqjZQxNUtSfUTegPf3QMwUkTGKvcS8WoTyyjdxH2SfFxHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgytWjv1VC7sxCE2rZ4iN4n7VEXGG4S2FnW7gemmCL1fzYE17ZNG5Chv2AgYYambcNJL8C9D2m8hCrv3xeGttEr",
  "key1": "66QAQnkUQiWkr8my6B4qCzvBYZMp8GUvmEQKWDThCYbRtQvH8whRp9LGFXVzB2MMp7TZvx5cYWDBuTBfEU6QMpra",
  "key2": "2HTSnoPavF6aT7aKJa5BiG6wLZ9zTteTLDN9fD5A3HYiZiCqskHZ5MqrKyNX4vXaxo97d16bu7PrkgjxX4DcWtb",
  "key3": "cxg9xuyFgWAhVGJeZHrLKaQuankNTTFN1nULuM99zJ1VAMbqgrortTmWSdaWNNYf63TK3YqmpmfomWcoW1tv3SQ",
  "key4": "4qaJn4AhJeuAtKffJMkCUg3RssFKp7mRxK2yrvQYeBiSKip33w9z8YHJWinKLbSgzw7UvPE2E36FjSJ6ZvHNwdbf",
  "key5": "9CTRZpze6x216NfGBBaWvL5pxZvDfxcGvnzjxv2sXsuCxceMTxEM1yU2DmTPVMVDZt5t3mnfnxY2FWm4v6gFSHY",
  "key6": "eQ46pSfuH2mGTkaE44WY4kd8h5fBaVyvCtRY6yfNyyFLJNZd8UWx6d2JEU6itXZT1R3inoz1KQtUkF8VecsniHU",
  "key7": "3g3EBYM2EDkkorpdAN7vuJSHM6kEMyTMzKuRYQontzgf8Xy1RrtAtHp6C2LffU9UbwaKTpR6kvPv6eATBBqaXKFh",
  "key8": "4kUKdEmv57R9EXgwa59D2NZuuEP3yvyRRYSLh3s9rPf2c26PQmY5JaTGzWWWLavUTQfLjQzqi93gsrAAZXhVZ3Jf",
  "key9": "4fT5ShrKCn4DPEcA4suktHZ4fmDYJaxsqtmFa9x5Hdp3LrAB2NC392ncdDVSWv482HuaWG5wfMxbouCgXHd5PMX9",
  "key10": "2XX3beyin2Juczn2awXhEbPbwLcTYLpcGpBrFcvv45RivFR9jyZCwkVpJg6ZNwRNgUvngY6reVAEXLsVjSj5cfog",
  "key11": "3UYXvMxvNvxs87J9PXCuou6sBAKbMbEMxVNUi8PLGFfFUVH85t6RA5PLNPHQ9JrKypLozbpJHEjYfPkUGMBg9qfp",
  "key12": "4p4RnJhuuFExeYZcMmBdF6xuGJcTa9E2bW9uwU1SicnUiJyN456aYpzEmVw24U9ooSqGgphBikx8izxxkhgEoiUb",
  "key13": "5B3RHWBtVeAmk59UEJ4fDtfTk3No4VtLz6B1EXr4897h6vjJyxr7SnNkSCS7FfwxPxzpa1mXRF9AWKst9ctZ8KP9",
  "key14": "5uB4c3P2DbTJLS9obZXGGQ8y3oDoTw5hGehVw2cxBe8CRrMHsfouUdLMqRTnhGyjHfAtzkBvFE445Y16J1HGuixo",
  "key15": "5TqndpgxA3vAgymsYhju3vRNb54H8zpQv9VyV97SuzkNZcw4ApWuX6uoyYPPHq27ZomVVhaZf6PQgoa7baY3PQMH",
  "key16": "A4pqKy8fs2VaurEGRGwXeCHoh4YDEdqfyvdS8Rxk7cfm1z8B1UHFvA6857fs5ass1hDfiBE23DdVm9Upj9fpaxB",
  "key17": "2DGNEcunEJvNj7BqSBquvssvjf2Hc3kSTAicfvTTB7kXdDMn5ZyQZeX75ovd7pHgXrFF1DrJ8bJdcLhsNmbtuJJY",
  "key18": "4FQjBky8CiKUL6VsSZZSvMxcjnDG1pW4ghi1rgd1W1K13Dwjv68Pjqz7fCc55TpBoQ1y57DyYC4PsbgF1zn6jMp7",
  "key19": "3p7SbwFbhLhfhCaT5zaiBero7rWpc1zx7zndaG9Dnx3AbQFqiZ8Eg7nQCAAAgKRG8zM6ornHCzTLvEXa3LbHuW56",
  "key20": "3HgxrfxRnqQuBAPr2zA3CbBLKTDAQrx2DVHwfCWveRRZL5Mx1KzH1sqaWMbjMDtQKDs5Wa26UmYADHBZNB4arLY9",
  "key21": "5ki7h76hAwgKuDr3HPd4cCDT9oNynt7pjNo3Rj3pPv9H6FVV7pWJegw3A4zqvE3NyLDP77KvKivdDWKpevqsVZk1",
  "key22": "3MmYKVZrmaWs4XkGKUMdP2HvGqsPEgQQ7rdrPMH7txSgGvsDKc31GTFjMV2jXUPRG2hEVGRcB8RNTHwtiRKQ5SaG",
  "key23": "2dfpagdhMm3tXm9tr3UcSWMYWpRmo1tcfvsxofMDJwNRV5c1xoxDH7bsg1QDutwvVxamKsG44aeLD19Qp8qNM5oS",
  "key24": "ErpbLQ94QkqtLWrrAQhes5bHdsf5MjHv1kFDtgJhFYQDp7TAKhsbqkAsAcDk6vvSJWLCyEzFAV2rZtmjRa5znU1",
  "key25": "R1PqPa3THV6Hsmn2RWBzMTL1FKpVN6NNZHVRUzrWsW7B688UJCga3Uw6ZE368ap2wY9p9qpFn26MQFBRHr7a7hu",
  "key26": "4rYS1K6bXayDhweRpyN1eb9bcS726i9jU4BbRwmWH7BS8ACDvAwqvfsBLGLfXucuUWC3MBwv5zp43Mg9Go4XEo2Z",
  "key27": "QZQmhisGYgfchC5YLTqFEZYySk4dcMqdT5Xx1MgBhLNeNvcgWtV4w6eDgmzuziPifjnGhBaJDX8w24wJ6qiavEC",
  "key28": "4Jwh2iCwfzihYLmWnpvWdZpqHm3zJLVhipwtXnR2pWCF4ZEYh2yud8HoZ4ykPmEXvXqEtKP6ZPqb6vvRTeQ9LMEu",
  "key29": "2oQnUANFyQtRYoZiinxm7VFPcRA9oyCwdCPYLkzjQSH74NYJFuxbjRfuEMZSNfDZUWQEfeKofvyBcnVPvVTizzcP",
  "key30": "zdyt5UThQq8kyLmYExhLzq6muHWpEepYFmL5EC6tGF12KVzrjzY5fdXYKPho7LwDozVeu4Xr9MG58PzP5DQ6aCw",
  "key31": "3pp8d5f8aELsjYMWZKLGVghLipSgThBKqMfMYSUZMzPnjMkdM1ceFT63v9gBUCcqJUH64gQ4fURBcA8b4iWjyJji",
  "key32": "Y1GGr1E5xVuCdfoTGqmJPemzE5qEnVGZoaMKaujif4fAbcjpRS4zwsRcX2jp1wex2bDqbVRiXeUG865Jdtj5EHX",
  "key33": "2fUmVGWXjubRaeaix2epxurPDz5nViBMQ4eeiZjuJq7mewH1nMZBseCyDerGwEZ8pzsUZxsT3tkAZC2vXqZk9DLA",
  "key34": "5z1F4tcY5sAAjbNskeRoXMCDyVnumhEPVa4CGTP9z1Niw6nRucs31NsKAy9T9HnF9fjJczkqJ37pxy3kxHNE116x",
  "key35": "5o82L7FrYZrvMxVVRoW7rxzSP9AK8MqxSunni57oSS8xg6oVrDDyRuCCSJHPwbDHsJrbVkuJYJo64Hf9kD5bf9S7",
  "key36": "23R6MqYo6KYHg8tH7ghkqmFAgWzCDN5PmwcvwMzmyEiU4FGMBWenQJpfkzUqqo4BYBYBBsJgEFsdPrMSr1HtbieL",
  "key37": "39K8GbQ2bq5dsz62m1B5KTDXCQLBwESvBXhxmkSYwPELW77pVmnBf92D27WDHeNm1sKXfTb9drGPDucidkPZhTcn",
  "key38": "4u3MkCEmqDxxzT2gCREVKyBjC9FQo9dACDPr6VPrvmGuvQ78yJtyq5MkQEbMGXLECv7j1vLCG8jKYdcRTRFfkefd",
  "key39": "5BhwWdgDFgLoquK9hbYiCNcnDYgY34WJULJMyMcy8es1tDANGwUSQ3CsMn8oVMnXDwKbG6xy2hAx8puGAGRuHAQ9",
  "key40": "4kvR6MWKTsqzN9TiFe3H8tsMaaRph8cusqxoVe451wUUhXNsLftCjFyh291TUezSb8L6E5Q5WEBwSFLncwChgibq",
  "key41": "rGMcMfn7De4kVQT4RdmnkZwF6UftxtwqmsrAtfAaLG9wxDJTH1DpJr3T4RxtHoQZe9Najafd9MoVJ3s3Zq1qu7M",
  "key42": "Now2wco49QLTjncyKFkS7Az75LwT5iYuSijuzvcGJTcJxuJGZP3XLvjGLr8QhxWkv6qzEnyGkJ4bUFHA2y2GCYJ"
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
