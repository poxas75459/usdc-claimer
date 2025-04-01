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
    "P3zBYNE73VHDAGDjcHwpgEznqrwUiueY5EYCYW7ACJ51JvXzRLVaW3YgnjMw7n5UrLfw9ifLMyAMpbjVbGAVG5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xaSc1jYzaj5MoYLocHUuQfnKhzxsWuZYSNdcWtsgYwdz9w5ZtEwgheRs2fEZLiiSYXCbXhL6QazFVszpbegKmWV",
  "key1": "4u87XBAxECDDFzdGdwc1ZwKk4CUkJftR5UuWMGsEqNGFMa2wKPgKUb3G7GCTiX97gzCxpD3NAxDc2YQbgiP8EwGQ",
  "key2": "5wG5TRxTXvB1PNkK5dQHFPCYFk65sVU2uauwQY8UfbNy2QjGZun6xP1b5jSK1M8YrqLbhitLm3MeDmheYhzxGBpz",
  "key3": "35nLYNkrcYUerLWCw1Rhez3q8D6yCpiC7qjzFryzBk8ou7nWspVSbyFs96wXrTsLCe4PzKKSh5Q335pHzUAUz6pv",
  "key4": "mDdjZzFAkxKhmuF1bFUEUHmJsfXSrQ5dU14yf6VDdDDmbawduAea3T8iEZ7nvLxp4DNbHwWLsZ5e7h5hWHpjG3M",
  "key5": "xYkHyZCZzvCkAM3bJyexVRN4ezoMCCW8WWLBc1KhgGo1fUkaNzhJkUHTTFwoEgP4Q9ZEGLFJHBiD2WcR5AotWci",
  "key6": "sRfobA9T5PGPkY6ha2NFAZd7eRPDJQpGMvnxKRnwM14PvuxWiubjAz3qnEdSbh9N5RUBFCt4yHP3T4EhKhMJcTJ",
  "key7": "2oiK9GWhsj2eTc2uZ5DGAgAaAFzQ1wxBfkjf1eNm2LmjCm8AwpmS66vXR4iM8fVAYCReDxR61hyy1fh99VhzaRF7",
  "key8": "2QXMnmr3UfCdRqfgFdyARuV14pyaSFZreUpwdtM59jjaUzf3nig4N7hHzYtgUVpvBvg3UzkNrYLvugEDHtncT5QR",
  "key9": "4YvzPx9z9RPAk42Avds5KmBBYpr4kMpZgVnFCrvywJHsoe7H3rpd3JdirHzZBpnrG8GVeSgxhmyVPRZRkirCt57t",
  "key10": "38UdiUBSMnubQy2FDqYE2dUiL76Hf9RnacC3tjb1KcDoBEqjJXYsrUASAEHPJS8JgFqn2UFeGnSLPY5omBV7sH7Z",
  "key11": "3ZRsK8x9qFnu8davPdf5xNFfYZJXcrGisti5Eq9V2QHeTdY2C2NzpQJdy6EFFZuJN6qK4zGpYEJVb7ZgRL3tSfn7",
  "key12": "2ZWzqiYyZzdjpaevZrXX9ETLEfYufK5kDHRYjDdmHo15Dy9HepXqPZ2MzRX52PoTcydpsX6UzRHpeszsaRrQQdzm",
  "key13": "2hewCKdroouaiXDWUurBdMxcm5SQQMJjqS7eyP5BWuWSfTed96NDKBSQicPtruyvTyXqgK1hvDwcLp2jsfjBp4Lq",
  "key14": "5U22nc8hi4ymH58zDwA9cRjsCJnCV5D7QGoLrercswHhw9koxoHZTHFbAfpHFvuaR1oZiDLteaUeUNa1ZCkoipjq",
  "key15": "n71p9oVKM3nrTFQcyfZezxQn4hTYj8U1EczjECNiYPSEjNrXFgMcgqVBvVNZ1gzYuGq9t5bsVRVYjeYYUXokqEZ",
  "key16": "5Gi6zP8foCaqgrMknDa2ron7RJbkG4GS4FR7cSdyVCmnbJBVeJUQjXf3BHUi8MVTZhVr5kNTY48AFovFiowJchh1",
  "key17": "hYGioUZ6JXKcCEgd3uZrEAgaKx2duVu8jB8ur2UYt1MEAxLq3YCaKVYkQKvMado3QM3Kwc97deWRw4SbSxomq1d",
  "key18": "35eRH8dvtjQYcYKFRxgonjYHgWbpU6emgNLnCB8E3nTTvgRcj6pbB1GFJNmeLBPvbFvmTdjTYr6yreNdsXdV7GW7",
  "key19": "3GXpX4y9a9aGTpk3pf3GEicwCJMjEVNatqc6SY4JrfT7iktWCo1yj3vqsb2Y2fwQ1qtaaDziSZmrfArzAs9Z9oVc",
  "key20": "hLH9hkqpHB1RrXUySo7ADwJLz9FE6rrAkzLXR9TGf4nosyJR8c5NvmExzk6CqNhRPFUa4a1YyDwgJBXPEKVxnJe",
  "key21": "3sGVicAWPjeSivzmK6hFVeDbMAPJoef9AztYnU25QadEgTohvqxCrrN8Q8Q2rgZxMExYThELi4hCjtLhMfBxWdug",
  "key22": "62B2Yjorh6R8rL8yeCZy8oiZohf2b9qXdeKWWtctJVgd9jJ3ZaiLABN662HyvCxcF4CHUqt7XdcqWU4NFUuf4zny",
  "key23": "54y7dboFVwDhfcnUXYT64nw5oUbe7gQAvcCKZsSRBCKXAmYrTpySxcFHuWnvmfAF9z2tCsXoA1MKzYpcKxiFtjPY",
  "key24": "3wJbgB56Wjxq2HAfqezb1nCza41attN9bAr9HWCzyckk4NZsJVHzJsJsrfo8Nvv8JYMn7HmjKZXN3RKTs8WU2BTs",
  "key25": "5bRSxxn5mhEo7GiDhFmtvDtbNQ2h4rZPzegKkS8QzmhyjEXf2wn3W3YqtNWeZJn7yAYkpqBnd6fM4gYxARC6TpcQ",
  "key26": "5SPbadTKChEFRrJgMi3ohD3gpe4pK3hydBTBnpbzzP3BEQtmGKtjZaQP4d5ZLEgaPT3MnU1aMnxbifDrsFSjYcA2",
  "key27": "57zQunNKdCqx8YS13YMVmhufxj1urhq6hbKFFihFaW6UbwJ3r5sXSP8pnSw3HGx4kaPoA3Td5QsNKcpjX9WHpDy6",
  "key28": "4THGZ2hj4oHYu67yFbeGGqCRmq1ShpmX7odPQ9r686zeLGt5kMbnjw5strvvqrsHHqN7XdoC79PyNNfTxFUmZ8Hm",
  "key29": "4TnR3n8TNcBD2foPZWdBjiLb2KXuWZyzeWub7CmiHZJLf73oE3ttG1cqm35dXoQTJsRBZQ8ULXZez3GTBsH7sP3V",
  "key30": "5XpXiXUwFxN5aEox9JHnBBtrWZbgTp4ngH8hcUyaSwLDmCc8E4ixWcPsJSQso4q8BPq9qm8Gq9hrfZKa6DzC45WB",
  "key31": "2zsYPuQD7BbrZCrXaxiyhVHfpc3kE8gkSsM6dQQXwHzij2SJ6hf8msjaZmDbmjkGtC4WKNdosBnfWTHSA1FfnQRC",
  "key32": "37XuFgn4ExuQN94C62uVLuSopz6NvcQwgkfjUSaeDaNztoSUwrPmN9ibDh5CufHh542EL8cqNEA4mMAjnpjydnWH",
  "key33": "3dcrqwu74vBZBmsbx4QDshgd5sSiZGHwycyiR9Aj4hQhBRwxX1QEqTZGQ7231mK7EZmmU4JGh1XXRZgmrwmuUVm4",
  "key34": "2kYqKf8J3AJb6GiF99ThkPjP6f179Hwd8WcnjU28AHqFLnBqEiVemw5HkPivfWJzRRhFWtMZvm4fKFod4TDphF3E",
  "key35": "ByjXvc3MSw5BuA16515hx3TEvzhY3Uk89zhMYVTAuWAaBWCdwGoVKwP61jtV8j6oUhPnSyaTbQUCd8nspkDb2dG",
  "key36": "25Cv29r9GK7YCqshhkYVRY7EA4PkMCMrjEyTeboocse5FTwxKaSWoR6ByaWpLtbYTzEekPzDrfNdh4DPDMSLzRiT",
  "key37": "tJt2uHZ3iX956pmmmWFw3CDsnaEGwRYLFxv2NQe55cAk1pBcBJK8KSuvVpYW8RhX2xk4NtfKYPenSPVtz8jKZwM",
  "key38": "4w3WfZp21H1FtW3TABG9Y5QEeqFzd5qbjxW9zBmp8EJx7K6ujpeWQvxfSceU7xb4VPJzLbxC76iTQUSBFSB5t9LH",
  "key39": "3WxAiP5xmHn3myDaSHdtVc7pBmTU1VYzYSrGfjXPmg2Cd2tZ5iMDUM6bB8aSYLyTjA1HmoFKXmjE7wrTSTAV1KLH",
  "key40": "5waQxnn2zPYVvHQcveK7vQC9BB3SupyXfTfenRuecHKEx9UEMUuSJbEfVrVn8jPw3q3uzEN2FaBSNTbwEXqPbLTu",
  "key41": "DXmzeEDC1e1Jp5qmY1M6tjmy3RNCU7aNheQUQWBSmfgWXkjucPGHKAPRS5BnLLtqtpRJyRjFaz37BpbMxe43uF7",
  "key42": "5Dq97jDMN6CpQyjkDGRgZX2xSWUcR7dNGTBgbY9tY6B2U6AMVHGAhpEQsCyp9Ww3HJWx2T6KoyV7CiLj7RMyNRGT",
  "key43": "2g17P1B3TS8oMqqEn8FrTXHB9PaH4veNCsaJLfuYrwKbC6YBi4Ggqh7TA5cEfX2Gb9Qy9t5D9QfnMce1HWbTiBf4",
  "key44": "3pPRg1A7WPmBkLXh5KZmcpVicurCTtjSJ68wmZMUXRSB4gpuygZW7CQW2nboRW3uT5T7bdktyFd3p2rTEjViUpXT"
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
