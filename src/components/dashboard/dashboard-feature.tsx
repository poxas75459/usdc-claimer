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
    "2Knmp1LsQhLWbbLdK671gDaomESsgdpbdYz9TZkAWpLzr4mbQEZqZvpHzt9pTwHQzBcNdVn38iGXiR4YgBN9gS7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ycvcodQ1wDErNbWmvS6oykVKqjFBBC1vMghXkXqfXUPDJ8XdEdGp7g4N1k7ZXVhp6wxPxMBY6J7SHb1e4oRVGvq",
  "key1": "2zEovvBYgaHMJnGeZZrN4ytGfvnjV7NqSS3aPyD1487vdWriaSbZ36ticmaPneCvsCjeebRG8kzd2fQ82B5gcRU4",
  "key2": "42r6CuSLvyf7ajMip16MujqeQDdy32nMViwrXXEqA46G44iiRARSZzhYMJrWxit5u3UKq2mRRXgcWFjijYkkn4QF",
  "key3": "4KcgedncWScET3MgPCMfvzjYP2aXUGGvbsM438SnuF2pZFYYX7yisnsuhjjnkeWrYQiK4qsyyA18vQ9P16txz9Bx",
  "key4": "4N51PBFy6s3VQ2GUBi8VPvKbETK1tTjXf5MXAfDnFJRqrbPVdczbFGDm4GHk8pbtq97Qn3rWVEaTsHqnJPvYqpLd",
  "key5": "4Uw2q3BKMkuUyMKRfpThvNHAWaNtuTJRitRR3Ue3GuPZKaFspG7aLBgoTQSAc9Em5k3jqe7Woo3jK6aVuCmSYpRS",
  "key6": "4JGQL2hDMvDPb3kwG7qrfDHTjsg1V2gMKn91vd5s7KLc4DweWV91NtPGWJyKYW2z9DPdr7dY76KxWb8TuYqimoe9",
  "key7": "AacRUZ3kAmTxQnYbrH2FCxWy3GRdiPrcfSiAdkhZmL6M6jRyuoHHfJRLcEBSoatTKaNzMoEBLxuL7gaiT5ZrBrJ",
  "key8": "4jTVRVGsLeTZ3ik5yEUvmRvzkLYHZn5XhLzTgC2hrByCcBmZ9EFGFq63E6QWAyg12qCFJkbLwDVT2JnNFmrXoeeY",
  "key9": "2NeBAMj5D5VrVnW8uvj9KEofJLWCoBZNoBraaCFR9Noh6EZHa3bb2msV4tpXCVQZCipnBxJM1ttK2TsornKsh8CK",
  "key10": "3jqog3wXfHqwe293BfMKmqy5CXFF9xYs3z6BR8iUPUU4kyBRvZhV68GEhDeEeLC469KFQgnanrj9Paay4cKYiraB",
  "key11": "5zLTD48WeDjGR52DDA7nc2XksA1DvPUPi1USYTkg4bdBdoqj8QfqKFiPtSUZ8a6iFXzu87gqzz93NprFfoSyKMAw",
  "key12": "3UHtv56ZTg17S5dQNGDPQWx9tZYT2k2JLDV3T9FRAdGKXjK79yEcBYn2f1i3gnHH5CgTQZkBaFTtFgqvRWsBBKSk",
  "key13": "QTZUFJwprmPHAJNo4t99zh6b4Mt4ZDDA7CwcT3FboaXnsVhyd1RwWkQQpGyFTrVLCjjZypNCVNpw6Q98jbRwrTp",
  "key14": "2wjPEshLV1tQRrQwqfKhUTFBw719ebz95ZAdRGfCPNioajKF4KFaeFpLUmQzQHpTDgVqZJEEpsigjRibCskpj8LT",
  "key15": "5ggVucPBCFHDykdZc3YZtvcsRx1pwE2Q7PyDWBZ1iSrEHcHxXCX7ky3gHNmZwBbGb961AT3sp5ftYgqxXjjgpQzb",
  "key16": "4PE9VcxiypV6y1tDjQgojRPLHyc532fPXA37kAS57vXDtpHSnKFn7xrT8GzCGE8CaE3kTBomuNtP9yF7PJMRVkvs",
  "key17": "45CPEUoy3EJWYFaqDocULtNaF62nCcXbKVHPcSJkqsugEryjRmS5exjCDgdWs4sGQf1pzvnF9HA17VgRK36Tt35y",
  "key18": "2K5PKSCRbwni62jfLGfJSdKBdZr9TzBX9FEHbLgvyZu1r4uPZN5BupXz1XLQuD2Kz4SvxVwLFT37UtFwhzBeTPr3",
  "key19": "4cA95PqfBZ41s4h3CqZxpRQPXLJmqV843WPcYZKTNmAwh7p2ZVzYzHi91hMN2NtQzPC51vcCCzQWKJ9sSbEDJK6S",
  "key20": "5TQwpeUA1aoZtHpHGbYd37rYkbahd9Ng3Nc6vQoh3UTaV1KpBy6VHSex2qRUau3hWf9cPXZQYkG6a8yfZnrnzbrS",
  "key21": "5JoaDUeQGD7rL3mDtfdgW2mtCz2Ld7vd7wFREzaoCwMRtwPF8x3wrwMXqVp8RaUrrvWsWh543t4CMB9vDg89R8aG",
  "key22": "bCfhi4HKW3Bq1bzhj5hZEKV1nbSvS8k8N9heNRnED9gegAsD2ouZhNDTz8cYHYMnRcu1r28J5ewHz4Dju3MVn9w",
  "key23": "dKFLqHBNkjuGtAJMdMBvJCd5uSt61u8zyJ5zT97VJSa4jXvkATXZ6m8VynYfCKEdZnXFPb23f4eA4qeABv9LwCU",
  "key24": "4cpda99YRnEzwxYyg4JA4t6nt5uoaTXLZ8L9DfYZh19ToLF6C4vEP2LuHsrFRAkk1736p1sbybRCaYq5gdeY9QB7",
  "key25": "2cxsNbNWiK6vpWLVHXDXNEZdJVD2fecNEPBRpjAgQpP26p7ZKkCzMM2R8qmNep2aoZqyVFK4378J1yc7pF8auEt7",
  "key26": "5kVNJ8aRopmYjDf54A9QsrTt7LEYW2NV48LZD6xtk4Wp4ujhZ977eXv6oAzMj3tbViLteoo2oyhAmydMKpV7PRzm",
  "key27": "1grUSA6iU1NDcRtd82awTnbb71ckhiMZHXtqgmKUTgoo3wVyMzzHybfzU8VTwvmHpAnxNmGwu1Dwb5sQdEwLX2K",
  "key28": "25Cdd37PyFKRxjjJW9wQenkZ1G2q51ZGqfiFpavY1Vf8X7UEA2emdnAZYtFgNhdgQNmckjb4KyiKuau9W4r7VXFU",
  "key29": "2LUPEzKhUX4Lchjt1KUgjVi4xYTeDGU3ctvVKmaNpatvgBxBBBx7ewxAvE1HTn4Tb3mZzWc4ZVdXgh9pmd5CGkUq",
  "key30": "3MJsezLZMjQm4RDAHY79P1pRtNWDobh4aPHudxytfcyYhaugwwthRGtfq3edNz9XayJpCDuMpmDkymNoUkkhWaGm",
  "key31": "3mTh7ctvhvTGYXuwegb1SyCjSwDWZTEBzHRWHrSxoZxCTWipS7tewcS9TFBaXDjpDmTriam8Cx9t7yMk2PgRQmaX",
  "key32": "22keECwvtzw5nRQREinoHdQMgB71Nb145vqSeDLNHrmtGsGsUiHix8UaDnHFHMUCqjXMWUmUZpM6K79yvcqm1nWh",
  "key33": "5a2kb5mfo8rXzztJFprzadXaJjFEs3HXurjJjEpU4dRmGWf69ZuuqaNttxkwA4zXsnnWkd6V5AVhVYB8fACvCA9S",
  "key34": "jYyTVqD6icNsj5HQYQbbeCCfjFCcpxr8miQrRMWqS6MjZQCzQKcqRsyu7tUyV92FW7w4RPsWBb4hsFZc5L6Kx1h",
  "key35": "4k2SuCF27y5K8TuWCSUbWmPofpPT9Mx1Bt6ioHE87FgVDC9qCHoPU6fEuM2mqQkajiejUn6QX63DoD5VG2uhyuHh",
  "key36": "4d1JrYqXkMVhzacTDkZt8HXhYudzLgurf1BKYsoTLNCnRCvvAQjvjPp8x8nZiUoVdyuzNtGv9Uf6FkKFvkTjtsBd",
  "key37": "3pcCHzFLLWYw4Bz8hUAyysfYhWtn4pm4egKasYkuuSYqghwYanrKELJLyZtuLb76EZRZtFJPq7ENgLDAkT7wA1mh",
  "key38": "2CRRzQXVCVH8uZL58RmFPk9H3pj8imRBcN8cgeMQ2qru5zKzVXHYbUFVHtKiUqhE5YnuYDBxLLT8nA9SYiCnVg6g",
  "key39": "61ey7pmB7Kj9uSmBUNqWkmdzZpTUU8kzpM3Z9Kc1VvYrJip24SwBywGCLkeU8oz9bm7C4Kwunt4Qw4fJs8PZfBbJ",
  "key40": "5fHSyY2kKFfrtZM4KVpQdTEE1iB8Drmsu1KaYqvzuiCSVhNugTypqQBKnQn4HBkgw1ay6E8U72P3GTnwHkQVVvta",
  "key41": "4APk14PNAHm2VnBhijoM8uaota7L68fRBEZc8qoZJwp25Aj1j1sQMRRHJgfUiVX6LUh54avorfg1qp2UqQARVfQp",
  "key42": "5H1rGR7hxpt2cirtk9kdNoc2jwfMiDtbHxpyBjQ6yPWHPKahvjdikJ5Ubha4P1Z9kuFzRmScz5jWbnLWuFuo1xMi"
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
