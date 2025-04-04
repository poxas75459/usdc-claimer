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
    "2862eiSa1E7UqS2HKWSjx9Z3VAFCxN4cZdxBY8aUwAYfrTDfpKdoTLwSMSjvEmUEyhpxaCFwAT2wrgSueTDu2FNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TmgsjPdkjhr85NkSUFiy7phaq6jkREuwj9Jditzabx8eYzR7FfNqx9k6fwA93futyqPzsMo399ToQyeWh2dWBQ",
  "key1": "4Uv8wgdeXPy1UcdhYL1xiPngpfNmgdGKnQWbZtMdCXCQ1pSKyy3dcKw23aor1PQkTFZHDc4upu5BtofkrP5nSAva",
  "key2": "4Gayaj1B4K9AVyc7LqibhSTvNG4wJPnhUwAHoao7ucD4RFq6x63Q8sK7EwY1sbYSrNBekWQD31xkpP5uDwHpGwu6",
  "key3": "5RVxQHb4pzVNz1hT8rKCbH2VeEZnmqKnxh76Ey7FHEhDMeVSDXZRGxheREktWj8RcV7rfG5CQCPFWq8PJ4YGyfW5",
  "key4": "4doK6sENwfYwxPPuY9MVSFQERusbqE1FdQh7m24cujSyTLgPFYQsgkUsiWkBQN85WnDjwVHqqQ2qV6BYveJdK3Zz",
  "key5": "2U8RHrLyq3UVUpT4VnbKTbg2QEV8zNq8chsRCFF7YewFjKaSgUoMLzFvWjhYYQKdEqS2YWc95Hx4MsPC5rTnpkHy",
  "key6": "42DqpMrQxmFDfiMDanw1mzg8cayHUZQD6TY7ie7cdSuVmUoDzRAwtxsHJ87FiwKwhpWBuyzSbN4dBx25gE4rAEfb",
  "key7": "5dasrBPguibtacYtPmTEVeVZxToRhPeJZBdAHss8cu2gyu8DxYDtv1NbdzsMKkYuxyJYoBdBmWwV2SAWwzuyGuYq",
  "key8": "4wg7xj1PTrygLEFeKdSYnDvQirQBf2YR1pJBfff9oeRCBHBfjJ2G1xm2ZeFsYSnZDX2eHs6XVSwcELjYA1ZYnbY4",
  "key9": "2LSy63JRTzu6MCj5up7sCgfqGchnpRBFUaTEbNPpscSKUoKp4h7tTDWMKAmiW5Pim61r78R8CBCAg4C7oMEGJyxf",
  "key10": "yuNGKwtZ2Ys8iDVLGvqeGB9BULcLUCmDf6gzT19zooT53njFUSp6P3bQAi9jRhcbuzfsNCPW8nuMnSRrKNbvHAF",
  "key11": "EodEzBLvPXGL9bx8eXUeJLSKK7xWq9j7wNdREPmNSiiXRW5SJDEqrnvvQHHhavqUnQmEWuvAAy65zKEpKNCZpgt",
  "key12": "5cgerevsYdWsndMAedaeQDFYeH595UQtmrTrFh9uuXkYXVG8umKvJ5c5F1QomUYq9WtK9jvrYYYuVDxVKJREnLG4",
  "key13": "3jLw6YGrWWn3PmJNnjwVy7vTTD5uwbktKtAn7oaF14UmhaattjpYJGSoaZ2iEJ7m1vFKQNhLHJvMukpA9oqoaJ1b",
  "key14": "3kFnYFeaL6KFjDQY52P2G4i86bnsgoahZJLFevPyRmUBUXfCAvU88YYwneCHRYc62smhZXQdFg49TJ32uay1cd8c",
  "key15": "2kayyM5TpUX76zDnqDDVifUrnpY7obmps59xtYeVQVRDvepyKZcHEqeTrDgRn2gCtNxxHtMV3svARNfrp2MBGXZ2",
  "key16": "24H4UP5fhE44fytPCj93DHZLtEUeMpHewmnZDHXW5CpsQ2bbxLtmgPCQDEGoqfS56frbnSXvf83GQJDsRsnA9Xb5",
  "key17": "3mmZVNaXiftiF1CNsesu51L7Z5V4BZzdvCpmb4mpyv9NmXF3jTar51WoaE56L6Tjbnpoy8iT5bwcSxag31RaWFpG",
  "key18": "2NUTLyoqw4BVrvwSUwFP3Dd4mGaQh2QYKRcKgMMoQHg2U9LDhbXTJRwQ6u9RXmsJ3NB3pfnhEv6CCXSC7SwddjSn",
  "key19": "PHU8kjSU9H5Y2EEK3sBZ4Z1yojdq9oj97dSz6dWKHa7AEjuj235vEVU4jH4bqZTegtjvj8AwBUhkrMhCp4BeMHa",
  "key20": "331t4CwndXoePweJNFSzQqUqHSTNrVK8kToS2CA3M9asEdTxdFZCwcrKe83EhM7dWCnqa6NrW5w3CSYHEbjWhd8U",
  "key21": "4NiL5EYGtMrNaLnoci1SyJS1B1GHCTRdNhsBJ21AgRgU7hkPWceNKXFpDmfZLoMjntXEY2WCRuwog1FpMUcUfUu1",
  "key22": "5fnDrxshBX4798eswj2FfnV2igZ9ffRQUk9CiRAt614EKrnDvsN5zQAsj8CakG3oWa6y2qfYPJjSwW7QbXCLr29Y",
  "key23": "3Dze1ZMJsjgoFCo3fgxTSyY4xSiTxiXb6BjuuUxTtuEBPfXkWXS9yra9VfDKyBd4T5NC1cnUc76minSoUGxdXy7k",
  "key24": "27UECeRTqy8yEjKzaKy7aDBBbgmg2TZciNyhW5skto3ZoMyZiRVeh6FeYrcy7gt6rJ158qaXErm8njTGp1PT8CLv",
  "key25": "3Dk8eA8ezFmrYCmmxMs7V6QyJQjMpeb8e1kc5HC32P6QvcT94B8ootG2iAYTzMnfpDppZNgrw2oisjUjPWUhMocS",
  "key26": "3PuGAuCWCE6bQUioZKYNkCPypkFpgATzXD3KCyix7jgp7fHuuizqYhoTJyLvaFF59rPLYBs6BrfsKj9UjYpzVMTM",
  "key27": "23vjzJmqBQQm3uqQpjbSJ2qzUwGvNmAkYafRpui72o8KfEx35bXLr1Eo5eaGYNUQN5C9xahBew3y6YroFE1NbqUw",
  "key28": "4QmNZ6R2zyjMgQjXBZSdFVF31qCzSXL2sLWQRaVWdUbz6N4tyMJMQqQnPiSqR32VShDDpBUULucyDvXCV1L1WHYq",
  "key29": "d2HCMu2hqwZXTxF49XbGhNttEYn2FPEiMKuDT3fVeE3E4MkbzcFCYcj87w2ukMq3gppg1kJTvwLFWjmVFDGfUrd",
  "key30": "4wmdcjDxkqtWfzs4jG5qUeV7QjXpFJJjeEjRp3q3QTf3feUfwrRVS4YeRzNAAxQpgKQVAxMF4gcGDvKxPbQVA2Ab",
  "key31": "2wdKGCAHLcbGuzMGhqBv6XE9awcukFcmquUV5RBEeYXStDAZYTM1YsenLUGLHhb1SV8sQsgYyvTWqnuxptCe9v1b",
  "key32": "2ZSkDgxCpFyV22EPk8GFBPnok17Cj1DZ1zwNATx4651aVXyR98Dvvd35w5x9pUuuLKQqoChkEB5sjUnpZd1H7ox5",
  "key33": "KxtAEWorneXgCGtn5yBSQVpLrcpPftuEWXWz7ogMJF6e7cex1UhkFrAy6dUmgrZotZzsD5LQcqA7127Ufv7A2NT",
  "key34": "336RGynH3UDmaFr34REcir7aq4t5ECK361wP7oizofJGidy6kGWjHJ9mQf3ZX6dhjmrWh3SHusV3zrJtUnVfhc5L",
  "key35": "46yPR8BoKPqYpZYmLD8h2VVVtbhHkGgJjLzxHJVWtJppNenDfJWzQY6QS35wi13HHnWedF5Y7SDEw6o1JcuBDmWk",
  "key36": "3F9QxQtv7asLBqkBgTcPpxubgcaVSmqN1DefzYbtRuZHVeAHpwVHBVb537cUY8GpLiM78t7ZxnmiEM3vUp1XqkKM",
  "key37": "3R9gwEUseQBiNujRfcFcyFiB423ujiaL5p1vLDBbJDeauagirAkDphioTWF3HE21TCHV4e3YS3YaPE2BUtiMFKRf",
  "key38": "2mAMRMWdpdPY2mAeF7p4eRbp8MzZekJG15bA25YBE7et4KKWdCLfsRU3JaLvs1GnyrXXeTspXg52v8tco8rHtKAS",
  "key39": "2b5wb7rCaHjGiMmfXgfUd6UowyAjd9inTyQvVxwGoSWZd9NTcCm8Wc23PfTLPUc6NgM28WtgoDQxi3WTzrDdUTUk",
  "key40": "qCEKfywKoZzp9Jc8zEStBMJX818shoQUhYpBAmiBxzCEbcHqyck7xdXtDLwmyK2aU4bnZCaGsjHoi3gaxWfbdz8",
  "key41": "4CWGdF1aFpxddMvDK9yKRqaMHaQ2qZLqzNKP3iWrkMDRiprsJoiiUMKmymL4mHmwvVLeCBmjbrkztyjtegqrdkLb",
  "key42": "2BNEWX7JWBZdcsiHc8sXShfzQriiRKLKxp9iKB8nJCmhzUK7moYrL6zQVY5idMyxBW2Kk4xcBMQCoi6zd3UdBm6q",
  "key43": "3joVzMXdV7RouKZ85udJ58f6AbvJERL68FDNQhUAqTJKhGMbfZW46RDszDJvAL1pzWAohhLQQ5SdajYCCqe1V8Dw",
  "key44": "3Mj41ZY57xvyiMhGqH2ZkbSaQ1QfEjeANNsZhCgqAgWGStJBkaqA4GyHxaehd8Nkbsi9oNXnxWqQ5ZXsBoQ9ea47",
  "key45": "5WKVXKJnB8bCCYG3KbwzAfNSmkvHfyMGA6PcNBDxBdtVx7G2nC1SSFFYptnsoyajMyAHC2Vt5RS5omcn8mT2e43A"
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
