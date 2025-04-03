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
    "4GLJ9SqZRcEw3kE4Jefz6FXPhq3hEM4UCkMHvWZdpDmhr4BqdXBD5JJ1EE3XSJ6cnQ52iA3kyNnThozya6Nud1Cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QoZSZfGgq3tUhYD5dEhKKnU11EiMpD4E8qrEsSsndsDn4hzcbjhTeHzyR8jmv2CorZ55J8U6YQ3N1dow6dr95wz",
  "key1": "5mHKmExTvm8GFguThgmHhNfBEnZ1ySZuYuQKvJke7w7iBaMxPMUstPRX7y4LC1LBYUNycFkkxdhPUhYEFYSpgyhU",
  "key2": "2QcUTn7mWTr4eMPWKGqwHHV8Mcd4n7CZ1WkZYwspUufXf1AY9FKZXDuw6izxz758JseBaTqBdidBy58MptkWwqKz",
  "key3": "4t9JUDTW7BnfEt6d751kG2vpj356buXnbyuaeAdAanzUKqayDohw4GJ5GvahQezyUHG2fqzfekmwFfa6rjFw6E3n",
  "key4": "E3JNoiy3xZVVY9DNA14PS7pNe75ZPBeCQPVZWUBoQxXoZ1bimAJfS4AKMAZ5f2NoZSWzFSRT5RNZaKMcMTiknTB",
  "key5": "3DrKaioJJGuxSGfzMgDXds4Lw4WC92iavXCy7HiY1axrFQNm7cxN3LQa1iWcqJi5tmNbCLhYS7Dp1unxwfhPhzVs",
  "key6": "3bJqJ3WAJSDaAC3muFbT6HDNzLAE3RV4dLAxyzV6rXcH6xffugZjqmmhTuDs28pjppXjtq59exeXtTiAaZjT8Us9",
  "key7": "51tQZWfMc5qCaz1cuvzSuRAqRkAtzBoi2aC8NN9pdYwBB4qmJjU724B7gURCbcEzRYMmkxcybZkUh7He6pcB7aNA",
  "key8": "3xTi1h8MCpMYGayi8iTxr3skkoGQiroHb2RTretLuE3ewjanfTYGaccbF7G3LQhzeAFcaPX4kiY7a3gKX8YEaTWc",
  "key9": "67mFq6bJm6WRxFL3k3xTpqUqMvporFPkuzgiHVGy89TVX5zWADCPAS49kGS7jqJQAG8wjPRZKmqXreSvZeKhTc4o",
  "key10": "55BfziCjAY5dkak3zYECcavG8fWuKk2apg83x6HrYuyBvGqYH6kHviFDmnHewmQxDp7KrhRcEVRnTaYJrM3FgAZL",
  "key11": "61Vi8ipTXdKU2sqtC6G5RC6cefd6GwSNXZvjkkmS4C4ZpmbBAKKbGTTYG6zBPMaUWMXPjdtYKXg97QiVx1L5rX9M",
  "key12": "38poDxWPWijnbRjqVj4zqFXUKKg5Kc1H8Vwv7i9FTNxEX9FiouyzQ9oBBjZ2ho7g6bFer73MZXKy4kti1n4qHaaK",
  "key13": "27Hi2WvgrLznGD5CSWqTHXyRmwSbMFnmjiwUC59SvyC7CW76JY6Vocg4gySqenirVW85NGmGoKjswi4zAMBUGfn7",
  "key14": "5zAVcxgsjnNGwZQZLAmWo32mGCwodpdcVH8ZMD8eahejgpBRs78qVi7H5JzxwkuwdsNMj7rT2RTE1o9VJ94wx9A8",
  "key15": "28oUnkFQkcZ6xT8wNDiKcTfBNDLwR6FYmZxetxKBQ2gB1rCiSHiyGYPtrhTcuFh6JU6gAdc1K2XMQqVEcEreoqmw",
  "key16": "4wxfP6vbFpt3ZrRto5tek1iZ6BCBG6XSvB8paok5PC3yviKppTqDWaej7J7QSppJrnkadWN3nE7M8jxL3QuFKiYP",
  "key17": "45j6x4rAMzC5MEpNMY72n8dJQHRdz3AHXRmSQmiScuj68vL25opxUZ1TXFx68bcFTA8bDsYhJVMci7nANPbCRocK",
  "key18": "5ECK6WjkYCRwhtfXt3vHxB7ZE7dzrGxNDyxFXSUhzMrsD3g3tn413SJnPJuxLaLfssvLaYqk9tA8kQrhmHAvZQk7",
  "key19": "24zdY2iT1MrCJmU15UEZnGSDaZMKuYoLgh7zC7Z8MNKxJoymbuy3yRK1VLGveHv3bPXn4D1DxDxjwt1RdTRCB7Dz",
  "key20": "6MLY9stvFZzA7yyAP9KdJivcrbPq5MPxtJwaaAGJ8WXfa8HskkybrCC2LNf7JRwy4ozuVsEV7rSR2yvw162V8PP",
  "key21": "EyE8FSJo52PtMoKWGHz8qSezAxceAWjMpe95p8eac533UuJ13Vt6gvJ3z9CYUvPJi5wZEbyFT7Jx6Hmk4B8Taao",
  "key22": "2gM9qrXiRAeNS3nQF9CS8Z7KXHC6pCKGcQRVzjozRUFSUtB64pLghHR8YVHR4Tc8hEkbhTvKpzzauqpjhF4zYqpH",
  "key23": "548UXcoHwk5JR96UKsqVPi4YVcwbzXmKgC34Z4cYNzAodr6BTTMxMFPKuVcXCGTsJTnuBzehfnXAedJNRHAsc2z",
  "key24": "3E9Fi74pk6yPGuwUM1VXY6DVDJ8JBFQkie3xjGA1HqLDtYhbzStucSysvgdHv1nL7NZmgW5maKZcvYtYY9WAKuNE",
  "key25": "2PJYLwSEA72b9GJZbA3JgmQG7BDQ6wPNvf2QcYEyXXunMbDTPnVGWVPYBJm3V4Bctz3WNbrwQa33EFzgaDrUNzmp",
  "key26": "XV17any7DZuLiTE2hcxuhP7FfTk9s6a2a6FLw33dBTw2WSrYAYZ3ndj4cq6n8G6Z54D1EmQ7yjLQqmCrmWLcAua",
  "key27": "E6RZQ6KkFJG3urdhjjEf1fq45tGppGXSoYj1yQXY2fHBkGPDjf63uHp4QuUHFdVvBR9YonR6gsGWsvVqmjVd9zB",
  "key28": "3qb5NQsbiZSe7R4dBaNhRC3uoWPUAbp1QL5vR6UR6p1HmwFeQZ5kTWX2tfbQWBpn64tzrNXVVK3EipJpXFbLhPU7",
  "key29": "4XtPb8SetgwM1eW3rkzmcbsaYvCrssvLt3VwyFNPBLPiJEpDFi5NhG4gsJfEVaEMENymNUv7ex4gPcnPeD4nNH3K",
  "key30": "7r2ZTvXqwQyrNtQaimM7hNdfdQs3KQhZ8J6UyFj5zdThcsKfDWYrPth8hB2NydGvefnE4dLPTCQbTxY8HooePN4",
  "key31": "5vsn8cHJbKcC4nx2yKgQrRtz9D3CLWkuTDifDPSghh5zuUUX7DAbKCMMgepVSkmbGnP5sdTgK49togA9hq6R1Skb",
  "key32": "5ZFPeaAvD55oGh6cdUkh77Q8JKPKbyAXFQoXSerwVBfxrxXdvmigGVLxQC28f3oUDp5SHjUGwfySNBFCcj76d4WE",
  "key33": "5VMmaGBJZdRttdsoJxzdX7F2sYfuxDLe9MHcXfGbrGSo1RVQUkWa5GuKSSssAxX6wi9TXC9HWTpVkPKZpTJjaTzb",
  "key34": "66kB13N4RXPsw6h6TuiR8YMJnj3XyP9TCB9FY9f6mGLPk2PFKs9sc9M6rcYUxPiMb4MdLJN9FUbut9KcBP9v4VvB",
  "key35": "XRMiJiCRQov8NfghmKAjNzQpuoMMgkQSFUuFBVyEy7XWAF283xDHQ3aYNb1ZKS2csVE89fZuoQcPE83CDEUAuDj",
  "key36": "5LmrQjWHnpBu83TDRChpJiipadcJWLVksYJNzHFDgHetB3fSYn7b9Mn4c3CKMnh8aoFxcFZDJsKhCFpvcs2d9vAA",
  "key37": "1CdZa7WcMyYcsfab3SovUcX8qV68J5XnVNqaVA14pf8RaFviwqi7aCijM4S1UCpfoPyBXEfVBq5oHdecAE2VEvH"
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
