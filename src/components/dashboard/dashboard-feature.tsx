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
    "h5AtGAM8miugchw45JpdxcxRge1vznrFZRGMXsq3Ak7Ju7XvSAu3Gc9oaz3JeZHRrSnCyg3kbnjLczfuzhb7Txe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CDvMSMzsEE7jKRkZt6HsCYgrdgYS56Epm5EBPq6vnPHLnmYWdk2hL454sUMrN2ivSUNsmQpMyjHzk2fZpXPb5fo",
  "key1": "2VNGKnatgmfzgMiT6nUnwNtonABc3JKQMS1rLHsbcbob42QTrKys9DQWQ41gaqm2hBWYAMxNq4QE9Coe8Wik9RUA",
  "key2": "3utdpJ6eENG8oAeNUC756itKN99QmipPqAfTh16GVPUMnp28ak6cJceaihLY2Td9U7amLqsVQwBJPDJJJyhnoE8t",
  "key3": "3VxhhZTcd5cEJKb1TBgWWuErMhHYs4TyFnXBtUM8EFEi7gpNpVP5x5zeP3Y4uQc6onz6mBABnwupRpUcTAkMCPNs",
  "key4": "22GoeUyJ1psJnBBWLTUtUKy6GFLUUuerjbocnq3n2cqq2ToTwbqDs2qqNBaPz4SDfiXGdsaBFC9a3oXbkrsxEMME",
  "key5": "2pKCXSyFbNB1Yza5N2EKe55LNXPcAgvyYWtrbcoEY5VqX1pN9RYpKT13JAzCRVyzuxW2mp7PowhEiozceTKPdESx",
  "key6": "4omvzCSLtPjNMDG8J1r5QKa6xfEZXXdUpFch3NKWnKbgQk6Ws86nWdwKFde49H6TRfkHqPMYJFktg4MzxieVsPLC",
  "key7": "2HHsRnNsMbgidDCKdznYdRXVmVqHCxwHcHtuC3aWXJDGAU4fUAWfQSjRSEHKYP3oW5Hjfz6bwVr2pzAw1q8DqrJq",
  "key8": "54Mectff2zTuGwDXAT6nte1Dnned367Mr2peXcAfSFzBbXGHTWnRhDt5ZWyKFJc1BS1HtnZgLH6Z6W4fPBhhAZrs",
  "key9": "3KZrbh6kZ5YnTd7oRsUdcRU2HMkk1KdsTmWYk58J2vREu1z1uYMBJpoRWxfgMrahssuMz9SsBGqmfjZGuk2cEXod",
  "key10": "58Ws8pNAWQivTQ7PF2e18bcTqqfkQZwbTiiNha8tsQqiLg1wNS6Xe6e2sWxT85DRkCWSXLAxDZsNted7cioE75vx",
  "key11": "4Q4ykBisWiX3JMRZqK6izxLLThiAmBzhx1Z2iyE5zbVTPCWtGXC2j9GdAgWaGSguQnoN2VbtNPpfi3DRKfuvJwnv",
  "key12": "4cNYvvuxVf9eg57gu3Vj2jAdSLH4QZCYfLi3yekS7jKrPHLhXyE34bRTkv1m4ddwTMSfyq2t774VNMMTtwdqE2Ve",
  "key13": "28ZwQTEBew3Zzhx8Jgz9Pqt7nMPuvKD1mGQ856CDAmybvUwyvxpZQaVHG8Fk9UUq6ScPfzYjQ1NZPgCgeccsn6vL",
  "key14": "2s4mLs9MX6EbBahrqkS5CcdMQ2J9MR3dK8ZUpckU6zwGtLnxB5ZV6iuK5Hemdi27JTHFGa9xKbHYctjBmPmzajkK",
  "key15": "3rZw7hnjbYxxN1h4VP4sxaejMm7mHKgvvnmVkZd5aA24qrz514A8ydrr7NSYgk9f7eP7p55DWTUUqdEihqU9TvHk",
  "key16": "2JL2c8dvCVGfx8MGbXUWwtaun2xCaPRb9w7t7MHBXyq8AMPCKVriEtoGhSeCSdMGjygDTzbSUvdNfVjjcJ7UD55y",
  "key17": "3F9hLm5mnBLcnvR4i9Pg97Mu7LW3WdiZnDCypPAo4QLbaohB9qjxBDyLP6xcJJVygajzVuZKZFVkkf9EWMeHMEs1",
  "key18": "3qxpnQ7Bg552fpXtFxzZt7BtD3ctd4jaVReNFBsXgTDGXGkuDczhrAQsro2EDHh1NQLJcR6xFPHVJJ1ThL6e7Rhv",
  "key19": "2PMSi9cAxDmYcgzLMhzo7VASzw4zmYJC5LfG3JwwBfS7zBy8rcg45Tsi8QuUzwD17H1MFXRweVhTmviBfLGkNYVj",
  "key20": "3GAZYLXCqqTvoajBtUUd9X4Gktktc7RyPSmRvu4kZs57Zr6i6aEkFfLFEmtfd1JeufwHTFnDrhrH9pyYPmpmgaG6",
  "key21": "31WL6aVZAWpc9VvvrtveArpLWr5LEvKcZvvHfBuDVNYgjcxUBcWf4yauqGgR5TXS4xkKpoti56ppRi6qeNMpzLWx",
  "key22": "37xw8TWSqMnWmpT3DPodRy5JpvqbstwKcTAgH2MunYUffYaXmkjEtiN2GmQ5XnPfVr1gtUu3HAfBzpJAW2K1PbHg",
  "key23": "5kSAaq7Sua2EmVeDCfsS1P7eSGQgh1Fr592UKcv6vCPBqEaPkvVJhBFhmi1P683V5GBagdkQ2zfFWt692UA6o4u2",
  "key24": "46JMVWNT8VvNR4UQHWRv6StwWiSwq1iunx5e6G3ZGPPb9mJuYy4CSCH5EfHc5rFtGama2xSNhs82dvvUsdk5WpUE",
  "key25": "nQsDVbjyF4TTZWWWAcuftagzxo5a2Zxasx5RhFpNbdeiKMobfpyxMhTM7mtfGpgPrKzbQbLHzNJpTZbrEVmZJqx",
  "key26": "4XxbFTr71CyyZrrAzyw8UFW7d8sPA2CedtwBMaVcX1TyCoyJnsGUZcyriQKY8RC52ebj1DgKcKUXAyTHjRmN88h8",
  "key27": "KZcjkkHbrwU4JriD3VJGh26Tpnz6DdAyFf7p57rJznG14y4Mmxapg97MG1KxMgRmdbopXbHqMKdTRwrwkTSUkyV",
  "key28": "4RAmE8jsuHwtmjpX6Gt81dLAgYZpQKtX4ufWegY1xL17eHsPj7frBSZTvcKU22YzrMWsuDdLChEVZFSY74DcB62H",
  "key29": "3o5dsnCXwWES8zZk1v6csAuciA1H1cQzLkWPm5ZCw8xnPjsjVRebGfLhrqGvbY1DCmUgD8n4skdFoDLpPxJp4qFL",
  "key30": "2R6iKAmsQdMf9XcemLyXtgCML6xwb9iLtEjZPVG4Q1Ttx7Nc928tYgQ3hoSgAhX2k2381iK15Nntzkjz61CNKGmX",
  "key31": "2c4AyPS8eWPVtjAMRcLmo5z6gZyi2gFK9kDjWA5U529P19rvgP4WQZTwFNMWznzU4zf3CzDdxb556cCJbR65XRrN",
  "key32": "3hv16Ecv3X3mgHuVLacBnHbtzcFNtQxK4ykbJ3wio1TKiWfc2qrWgDu4Tbfh5MAfcu6Low6qbqwLqgsfUgxxvPoX",
  "key33": "3rBN4W3V9w9UwBaitHz4N7xtKv8JxeEVqSVesaCNpA4NhwYonwoH2CdQ5STKLmKVu3y7bMNnHihRY2FP1kKUcxWz",
  "key34": "2U1fEYo835vzeFVt5tRmFBBDXFPFiWjzzyEDwcqJZPGgEEqiMde2idSMU4Fa2LzrBYfVyEaKdeszgVHGjUicWsYV",
  "key35": "4Gh3HsoDorngqhHC8RF3C1efnADam6F1Jhap6SZPdwNb5kVE8x7pYKBMfP9HR9NepCNDT57Xuihm8oqXHf69Uj75",
  "key36": "2Sdxh6wSQrqPL8eY3BpsW6acfBsGYXhh7RBFhkeiWCX7qWBwiEne3tK2jQWk4Gcv8VEcAX3bVK9x8mDncBqhqavZ",
  "key37": "4RFHgcxGcG98KyGPZxSezxRAHs5rvWQUnBzkyLD2u8urhKoYkTwKYBgcHmxdbpHwEsFmyMuGZBa5ikPkVU7SxVaV",
  "key38": "4gYbQKE3k5xP9bq9MaHJNiwo5MruguHmmBCh9rUtAHvEzVq7Tm4g4utL9d66aQeE9prS52Kka7DvC7wMnHeMw12L",
  "key39": "4UZqUe2L86x6Gn63d1syY4ScTLe3LWuAbmfZwZn9zvfr4o79EdSRCbbXoGJhuwyWaoT1RfQmW2asdmfQJEakNzv2",
  "key40": "3Y3k679va1v39GboP8FzcjbBQPbweDHNxag5uuYP11uT3K9s7n3EteVy63X11y4Fzc9zGgBkVRzKKwKTCV3AR27w",
  "key41": "5Y6SykAMTkqBkEPz3Qdg2DYCz1bw4YXJrwBqxK7JpfjzbN2JwuBcWkeLcPkYRUbAwp4LPkTUE614bxDznT2cxv1o",
  "key42": "3mqPjz6A3bV2mcZHrF5TcyeYFVmPagLqjw9QqdHdWkkFTFekkqjBxoaUzrgPzWTJpQSsmwhvKJhs5svjcaUMSHhf",
  "key43": "4QhwyzCogHGU4NjhcXJsD5GFa2whAdS7czAH95Hgn7QPfQjpN13vvoTkie58BkVYHskPuJhPrzmZ7hgD7DMKVunm",
  "key44": "2YKgU4j3thSeyNQHZ5adKLjdzob2HR5n7diKWdm2cWqfQpqnNgrqypsi5cJkYHhS9zWLbbuq8M7yF2FuUk4coy9S",
  "key45": "3UQKhbRZ5k4xo5zh4BjjAgytexBQmxsrbEwCrs4k1SyQRXWr3da4TyAHHjpKNfLWptqB3mU5UqGX61jcoux11Rez",
  "key46": "48Dx86otQA2qfn4FSTrMRt1DN6SkxeMrKjouUG6mFHGo4EVexm5vbmt3tdFu72R7wVSL1ELytxjfqAumPhokf75q",
  "key47": "4UTzC9ig8hJbf1q2z4Jb9ab7YvAeG2VsLYXM2G8pPAPd22FsLGJxy8KL7V9XDX6SHn5HeoJFKyvncd6KjQK6j5yn"
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
