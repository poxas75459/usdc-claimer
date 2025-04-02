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
    "tdo8kXbERzPzNkZGiSt1BoLVamCe3EWPuWuxCQB3HeovycapopDUQDAtHf1M5U5f6oEwEUchLriuQEe5DbwJujM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CkqGfj6HKip4wFVKUuep6TWnHCQgsh3Nm1ZjexsvDwKT2QHSEPMwY9Yqks4gRMUFkqv8HHRG7YKeE9z28jbzX8k",
  "key1": "5Aoo8Da7BUYRaGCHLZLUXvTzWhmmPmSsc6gdXB16146Qw8zidzXHy9cPB718gdCMagZJFMrwsoBCBwDz6GVohyU2",
  "key2": "5fFei5gikpvL3qnzsRqdoJz8F6W1QVmeKF6SJgGjMegV52MtvFxWVqHdA9iwZiyxkU9PVXEjKJn4fSvHjTSvK39i",
  "key3": "3ThjGsRBNen4ipyhcXcnxiRGtKYMgeDvUsMVnTA5RV4BfjrU3LqAGgbQ58kAXaQvtWsEPfLGVzaLrW7pewZnajja",
  "key4": "2UNtkpXZWPX7BUEF9ENMPHRkcQBG34haPis6dq572DmANGJHNsgUvHw6UTVDPkb356uM8wpJbQUwjEwutWJ8uo5U",
  "key5": "4JxB4Bweh5c8FM8HBEf7vRdr6RRr3N4r2RSw5GJ6shrQ2zp6HX1PTxzquirFAjYkmFpWvBr8X5pGt9efMGogjwnZ",
  "key6": "53NmhnBFdnpHH16vj9sEFHmMPyTKxq3bVS9nCaZqR6xxqpVxwsjsMd3znvdTQxuuqwbVbrShU8ru9w4mcXd1iUrr",
  "key7": "67pvAfE9WnQVh8U6cvKiqEcrVkAbtTP2SaXUJSBrD7vpzWU39wLG2D96ENhMHdU9TLG8Wg3din9AUfFp8jyEmhQA",
  "key8": "4Xd6QhuQJnxqMwg3HQkD5EbLskG3jqJJh9hoQvtXCACCmjSf6rSR8FnGfRWxr1ZqHAZRd4UFjMtfTz49yz5XGZ6N",
  "key9": "4ibHJLnPsC5oe3eMvcHZzTx2BQYXSCZxKvSLdsdgSYw5qSfzFbDqPbWqVSCnCci5Ca1YApbFtcUWsxreZyKCADbc",
  "key10": "637ycbC6GinnEAW3VhZE5oSLB76aCt1ykgx7hZ3B2t54aAf2K6oobV2i1dV3GURCvPmoE8c6fSsmWptNUTLUSnWn",
  "key11": "au834RkjmnkeudtrZWf7eT3cjzoWmUUTrnT8hdP32CkBB4NhLLxCg5Ci3qtRJRTWSWpspgNUWeZfbqJXEpPjfF3",
  "key12": "2EPgHHnESuvctziKLohqxq9zqX2subeDAAQmi1FqxYjspxZ6zyYs7J1d4g56xMdWA6xmdEUweBXYXNREfQSmByDz",
  "key13": "2mtHi36pBWnWuoRHMrMBdvPXVWxS2GcsKU6jFcDJqafrmT6PDwDprKgoqxtWVAqfhZPiJB4JeYbRRt73XMuf7izk",
  "key14": "36FafQN7J2xdYn3ACLmtp8vA5F3VSAzjtvbSiNyorCQgE5vVyFtwZNtNetLdphUH21BmkndjGF9JktUU9Bbe7Dd",
  "key15": "2CadipF3RfpeAJeZJkQMiZV1GxpGENhtcH9Sg1PYCsXbXYgrMp2pCMnaDNyXPzWUh7xnj53Y2VUPC56u6H1aYXKd",
  "key16": "39Wa12iGpZKLwdtskPUKyVgCp1LY3EiNpH2tvT88QibDrhBPu8ejzb85HfAmWvgRh564zE4AZwuDisDJ9G485xX3",
  "key17": "y4czQKBvvqarT2MtobZq2uX7zMieTVyfDHBVstqJPdKeFY6RSLNp7fUKvZzAW4WUvug3f4bsREyZ3FH2EvtNarZ",
  "key18": "5UFze32PXQETyvmHw6FNYKv8XRHSSrNRjCQ7idohVqZwnUAAUAe4mrrFEwUyuRweZyo3UHKf2TivM2WVMD8ec65s",
  "key19": "228wmNvddLfgSjRm8LyRReYQycYCg75LhqepYtkqFojPWRtvpyPNUgw62FfCxWPuLpDVN2JXvUkrW5hrLcoRyTFB",
  "key20": "aSuLGp98dyBZHFzKGTm4NCLC5GfHRAdt9w5uEKYBB52dHxDeCeycJRfoAToSk7ZN1iKFWdwxXAbj5M7FVe5dTy1",
  "key21": "25LAkn3uLpsd32ArnNmq6D6m4aaVh6yhx4vRktaZaS79Njcfqp385yYW38ontmNu7kR8HUTqLqEF9W29EZ6H8GBB",
  "key22": "4j5L482RpRaRs7yva6uGR6wWmugRjRKC2BdA32kd96qRfYBnDkfhLaWUCGvycg8qSbukY5hoCG9ATmHZwQYLUQD",
  "key23": "28aHkC2eDHFet8wUkwH87xtn2pN3i6kak9jb2kaDvq9xEsNUA1fcmJ62xv2Gp2SfVPoHomyHpAMZSnBg67oZhpFm",
  "key24": "2ADABTaCJuXTfweKhrTmWotYvykTVkVH8aq5UMaJwFVX8t5B4W1VH3mZrb7PJk7Fr8hcG9DkaJqU9mFbXTwScz95",
  "key25": "5Z9CpLhtqU1cxLjgTTrb6mbXzbFpjqmNrNz9YR63xG2L8vCPuwZiAopyfHLkbQPTzQ6hGce6UqBkrUEg6YG1wr7U",
  "key26": "3ZzgisCmnPmaK2zHPBAiLZncZ7EJ8FuPYV4CZggPiEhmcrVRmRpmW4S2ydBd7JNqczSLbsYb1WeHKw1rXid3hYKY",
  "key27": "QPfwULE8qUgmgcbLf4Mb2ep8DQagbzBsTUkHdYCRYqTfYig5Dc2r9G6wbfZC8Gswqsgf6W5HyGsNn7MdXppWujv",
  "key28": "2TZLUjt7r7JRwzB1bZfpJ711YSu6aMkGxfAAkN4WAaBx3usKFpDMnPY753s9i5RtPDTatqfqeZL2YVNXrMApFixC",
  "key29": "oEDSeCCATe68cJkgRVXJks5CyZ7PSYUuipM8txQeY66tbhEEbV81D4f7RVHhUNRi48RBTeLdHJ1jyb2ChxqGyrE",
  "key30": "Wh1wpoxNXZmUciUYKgiDVzK6YAYwCGp6NNpvou3HYPYpWZj3Yu9az2ANvKNT1jP888prw3WPYBoMa733dfWvTsU",
  "key31": "5mqBQuD8P29EtahPzwff3rp7akCgEVQ8reTaoekFWaiiGKSgwbwGCaBZdP5WhkQ3WxYDzpbR2LCXoCA5QRQgLwo7",
  "key32": "5CAECfbjmewqVvTgsAicFN3XTXKbeqBZw5uifTDaM6mZnUx43VZbUg22Z8v4XReZZ2LZmpZEfy9CY1zSXcbBUMB3",
  "key33": "2JWkvviKqnCD34UGyaQgFxDV7Vu1vuf5ZoteCB4azK7pRdDMwjVmP6iskXs8YBCLeVcyTtpMy34SFRKnXD3qceY3",
  "key34": "4tR7jp1WCckfJPZp17aLJcpJQGBzN6KcxuLdXNynMaWfVGUhV6z6Qw9irWbQpm5xRToNReupb7wti1g54NhzVoTp",
  "key35": "5x8aQFJeHxrxVDNzUGfzSLRHeXNjxpmMEi1e1kJwTpmqbWfMuJ72cniyXc8Ztp7G1KyXjGgDmzDkCS5v2GqAbCvD",
  "key36": "4JudmFWfrWzEGMGb3TnxUxXpq7JV7KVpwCirXLEEP7n7oxuULmL7pzF8QSMxHn5rmCGYWCvJeZmkjZFZvoYPsLCp",
  "key37": "4QFdwRc4452rfB723SopDSoKoyFjoKSmLLN1CJsNNMizJ1r7oARsbVEV9vmxbuFn4Ezkzp3q3oF3qxXM82c34aMB",
  "key38": "3pgrWhi65njqrFYoJA6aN5cfrz42qKpJiDSMBvmnqPwWir3ygNjRhECnYmYzs9PzFxv6MaAH7ZNug9wqfnENrgoK",
  "key39": "39Wi1fbNRn3Pvdwppz5jLrj9vj1AFqG8iBwv7NNgYDshDekmvxWciYT7YjbLXySRvs4cpwj4MKFLNH5SQUN4JdhC",
  "key40": "5DMwtRKitk2yHtNzzLAgw4FX2LVwfaw1pVbfQb3DPJxax5wLBUoN4qSzDfM2ctXxj447CyhjYWbL3GvdRDJiQkCo",
  "key41": "V2imLJjrqiv44kjUXzryhhB4r5ab7vmTd4iXhDfdAmaaxvC7oGdTAM7LQtSnYccRDsTwvUVrdNoy3WTuZywFS1t",
  "key42": "5iP4HzxXwVV69yZVT5d6Pc9QMA6wAmPYJtpPFQ4WYg1KbipMPKWMt1RTE19FsqsENgF2bmEN8fbbZDTxbvBn11kw",
  "key43": "5fEmQ7BKoU5ivuFdW52atK1ofMiye5R7aSAGG2Y9NfryxHvHPf6ys2VswTco8TDtwcx2KPs3H3tyRQ4Ja1fVgx4v",
  "key44": "3YW1y7jHdQofgWtHxmrNAY19Fp9WzgNTNeh4ZSpRP7bm8uSWReiWYBFYheeuHNxUZdhikwqbgPxGcxWhorHGTdqX",
  "key45": "bMm2MiWWqn2QSdrP2KhVtU9RNkXkXPFYahT919kdHNAB2Gr8QF87XR8Nwmy29TTgJ6bcDyJupjPdofQvN4k6JpA",
  "key46": "3ePJCFHzXComuutms7z1GyoXQi7pxQiLcRppKXA1EUgUr9n7KygcdiBTty8uX4Qf4jBBKALWLN5AHwSPM4GTZqHk",
  "key47": "5RgMk5pmH5FuEmaXUYXFxVSG4F4VHEz4QQUq4YNuLwn5u2Bpc2bKEebENmjjds7tRcFA8nxkJLf4L1x7Gc5Q3qHJ",
  "key48": "v6RJxwPV3EzQJggWc5TVxccooHaki8v1G9ehja3rfniAH5uEygaRMwiRqXebYeWpLBuPuDuHgqdBoxvkjv2RSJK"
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
