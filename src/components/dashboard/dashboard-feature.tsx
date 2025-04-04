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
    "5BwWDbH528CLX6yodEu5D6fFGjeA7kSNTQ22C38VvYcSZY22qivfSJkSmBZhSW9iWgtzuxVnep6kRj5KryT4MAX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F5KymYV9SFFDZdDEaxpckBcFmHnEkCuRLJudbzKDQtAWCEmyV1B12Y4bK2a2cW8qFYPH41eguc3RrZ1QRfsh7vA",
  "key1": "4srVuxvLnFrHwrd6nWqrBeK5UfGj7mKHkFfGTTZczaiH4FffVG35kHxhPtHLGJyzDcALgq985Q9scYbNE8iRCghj",
  "key2": "2LW3i48eZQxj5n5JAkoaCznurwu96TGezqyigcANep4R4AAuzhE9e8c3AiZik7NWAF5shQmpqM76k3bJy3LQSefm",
  "key3": "2KEEgDbM2RojkZExwF9X4vTK59JZjoGJA1xKxeUqUyW9riWViHNnvqFDX6AsNi5i15j7tU6UVyaDhzvqdwLNtVJx",
  "key4": "4g5dpcL1Pi1TN5sni7g5JrbTwDSo5DwkgcZgbSUyiDTjdBK4FBiNtHuxX7HPgE8Nv2gyKQ6t5HHxFMXbp5qTQ2kx",
  "key5": "3a8rGokXVjih7heaw59JbUWznTfYGe7SfSUxPugVm26cdQToQRgUhfxLhbMKTDN1eM3qFTE4hNPNdrPxWFynXgda",
  "key6": "4RNR3Wt2XRHM76ghamSwxHpHvXeBWhkWP6LpccuVrN4FMuu8qovj9J28qmMDiaBxJAvz3cRAwWhEq4szK1PNGyZg",
  "key7": "3LSMiNFcANk3RZQbV8WCfvcAyUn5GvSvntZ4uKZ7x5kXtXjPYHcGMxEeabggLVbjqjj8NfmSFcZyxDg7JdXpKWVG",
  "key8": "3NLJV7h2RZmThVffy3uaN3yvgQukJHgQTyMuoW5pJMzrwv4bJ4pz7zeLFfxDtSc69fY69gG3H2iBKfU3SceYkRR",
  "key9": "5gBsPffitNkUwx7SqYQqKZiPxwRtiHkrMpax16RH2FgATaxPqprpQGw6ZRcBibr2DfbnZxuW4aDXhKyk6kZ5QLUq",
  "key10": "4XqqzZtmxK2kZcqhEBsW5zwL7KaMiWFos6w5YkUb3Bum5wrxgbSEwEZSYGcMrCXhMJfBXxZZxWyLJgg4DLpWx6vz",
  "key11": "p6VHX4SiTSqh4JkP5wPmZZTa3X6D1Zvbvd7vGdaCX3T48EZqaXqXinGCAvFUYNgttyq9tCnYeQGe3LLfdoG7K7w",
  "key12": "4ixPG3f9B42mVWjsE68GJoCPvinFPFvXfWSamsNRWSMTUPA8dCm9eVfEHyg6VNFSg4UWcowKLR6S5mmjB1dva9CN",
  "key13": "5RP33UKHybaJZG4eQ7j34Yge8oyMPKrSrzwjEbc8xT5zQakvLTcT4EE41Dcwrr7XwSUiHFoG1Hj8k8FcxQsjmNiq",
  "key14": "25BZyozzvpxyy5Yt23LtMw4iWs5a1fzWHm3nGT1ksgsr8mhF4SDUjZVQwUUn61J6VuBGv5sySMVf41KKh1bzGcUM",
  "key15": "24uhRTjnqRQE6JhNHANWCFamn6cz6ud73X68Qn5fm7tKQ8BWePLTyqD4Hdp54QHRJYYStReSm83M2pTeaqM7cFz3",
  "key16": "3A4QqxyeT8uegMMyLSYy2TeDTh4Y5ciAP3gbd9xTbsSLcrczgJVt4esrAbM3jY4U41K17yjtpY1Z1v8FhDnnpE4v",
  "key17": "366PFweRbz5Ls5GTGKUNrLL7HsbHJZnecqLENpuSEd7jddxieFur51DEqoZTrugD5EYLLVhLzBmhsF39kWzgKtKE",
  "key18": "4K9Aw8VZjeWx3w9pKTuDbuTwRvBTQDU2sKEcq31UUbwAkqHRLgHnFz2x2K5dniJHLrUQjzuutKfm14cvCFnUkn2X",
  "key19": "21QHSQjnUKf9Km9RGhRT4w3BBnuzwqCK6ENVPVsvgT5iHeTiazoNVYy78JPyE7uaTEusjPJh6A9CTXr8gpqTLv5B",
  "key20": "2r97rdxE67RQacUkXJtFEUhrDcYMAMBwHQkSHXKeieMEhKmExVFVs3bhssMhQB9HTwSTSj1QbGYC1wuZGqYgVMcL",
  "key21": "3DgyVe9UPTjdF446PrfJEJwz5x6vgW4SgLdMD55ewu3Zj5HnXiudv9x6T96TupMcPNfLPz6yXiKykJZ8JgrRyjH6",
  "key22": "5kh5Eg9h2u7T6fEtTKktovh7gQ5XTqvWt7q9TjLsYhvesYQckoUQwap91jbYhv8Rz3z1qG3Dwkk72bofEvV56txU",
  "key23": "3ifnCAHRArSBni9MACjPQjDUk3wwP7S2hzHau3wruwyA1uvHmNcsWrq6HPDr7MZ6xNknPzroLgPHnDctS2LZb4Ni",
  "key24": "4AD6osNvFocdWvYLsjag4wMiwcAooS9CM9RDUjWrpK4fafyG5NvNHxqjg35rT2knCbxNzDNyrntBXg6A7ZPqeTG",
  "key25": "2qpR52hoGJUKdAFcTdQCd2HjXFH7i4AKaFLSXe3t74QbWhf19WJi8FHZRHUi4vUKvzPuDoYPsaos6ihfc6oB3DcV",
  "key26": "5uhQmv36fj4LspBFV1QdbQDGuwQnuY3Eq9RVUaF842TWWqV2XRwSWpWac9QeBraKQDxYo8JxyXhqQDwpF8U51pi4",
  "key27": "4QYuiFu1TAe6cqdPdBL2hdzmo8DCVK2y72yCA5sLU2XQnVpuc86RDiKX7Ve3Zde75FiY8xX52RUqwABP6Pep5WqB",
  "key28": "2rasCrhhhyFMTRZygcBWLNGPXLRHhAojWgBgbmtjhVcABDFUgXEiEDRC5SwAYT6vcWcQrzVSe2ksyi7tQ7xBWGKz",
  "key29": "4EVY1cPPfJebAB7Sns3W88gGLoG5ntHrvr5DXYPcSw4ecjxZNxwmoS5C8Kwq3V8SR5SDybBQwLHKBy6ThDfbhCCN",
  "key30": "3Exqqgo1qnycYXDoRJ1VmeLDou5s4sAvLJ1Z8hNR7Wz2MfQFmQGzJ3VyqJR6qagvM4BxHxrHNziFoQjvZsYnzx9",
  "key31": "wBq3CfXN8XR9iJ4VCZbfDgtEp1c71HTHpdAjqd5CUvn7ZngEMTZETu77D8aftUuTGQD1BAyrcfvTbNSYrR2FzYB",
  "key32": "3BxMB4AWM8neGux3zzp3ihfBJzSEaB9ubnb3jLVuSXFVKNEKZuRhw36ig7NqjM45Vwht7Zyp4nmVd7VFMMKf58WZ",
  "key33": "5j3UbgnehWvjms6DrSde3UQS5VBS4s3XM9qxGpG8J9X84o1LhQtaQu62iuPbfLX5W7wiZruwEu1FKEBoC4QJri8t",
  "key34": "2kgJ1w3FHGeBapcdu68WnMb3BaB2818S5gdejphiDsDEXsSFCq8WLQ26AT2e1TUM1pkjMKpcoGFCwbGRSDoBjXwk",
  "key35": "3vFDANsRQjBUqT6jw22mLjmWeJ889F1J768NYmek5nCjGmiNFBD575YctE72LrdnQgLLBKjWimFafUHiENNW3X9K",
  "key36": "TGCUEeudzfFb7aZ7nT419pG2s9mCUaUZFsEFY86RobhDPxj5KTkA18ARcsbdrqP3bywBYce5xLQtotwQ3rf5Drx",
  "key37": "39rcNoEyhSsAuKHuR5PN66jXJ8E1WrXJi2KUG4Be9so4g2PqkmZY3Qrdt9sx5emCmuZp1zCULPbGi2ogbdbRV1Ec",
  "key38": "4FwK1Yu9U3QKMHkBh3m5KqeVwyr4CEBmgzS2bdHzDC9uZrCegE5fUPpxWJG8LGQpK7cD3TkCdt86ETU7JLAAM558",
  "key39": "5paUBnw2wUhX7up2pJXsaXB9kw9Pf7CAW9APfv2i5QWYr7isAwDRsyj7uXUEVg7LGZ5tYwLXZhNyvqSJcPJtnsEP",
  "key40": "4QCTSXsEURBoUnYd7woHunRq4tY2USkWnjaDBzazpBEjiXHR2d4cna7KcqL13WSvETaKPo5KcewAn9gQEGgqZV8V",
  "key41": "dGFh8AXzPtbPKhDb2QCxVMD4jT9rDxh2ZhF8CG6sVCqiHTMKv2QsKfA76UvQqudQJpCdCBSbmbt6guxVhJJHQk8",
  "key42": "4JtFByFmrw7qspRJ5TSh3m5Jnikgz4iSwq8VnCnp1kGYRQ4d6yviX5mXYfjfN5Zd1BKkmotqXAjaGDN7gRb2exm1",
  "key43": "4xKuXSw5irxnC4KBWnPkbTRQU58JgWeUWj6izdrN5Juxh2ApXpuw5fGzucfMPkfDAnjJFSHFD3yX6XKnbE3bKRL2",
  "key44": "3kUaHWSY7BRsM19P31r5zUK5epWCQtAY5wkj4Moyc2xk6nLqQKzeSY6kLRPPuP6KDcgpw8whQAo3FUhqzz9TV59d",
  "key45": "237n19K8nUEHetzt2RVdz21umCSieUxWDBn9CVdCc4isneckVB4ZwVStHk4uXSFUAAgS4nviA6A7wa9ixMGXcpfo"
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
