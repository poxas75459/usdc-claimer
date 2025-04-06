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
    "4YBRxFteEe1jaTFRZBTpxiTFWZmW7U8WchMGXYjLD3cNkV5hJU9wT9srwsUN8xRpJgNtV9FvJBwTBPHeXFJ4YriZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5goKm8sXNVuVjN3kGpDJTJvkdGBUM7AZMojDrFpDP12UQWPykHD74n8PR5w8vxWsmWbiTt39G2hdMTDEYjMV7aS9",
  "key1": "2VWc51pnfqUoc1cjG8LVUVZm7sMpEide3ZdF2zEzUa9KnRsCuR4g1MFwDdyuihuZDSKwK3GBxNTGQzEanAZeWAhJ",
  "key2": "2TJ5asY7n5oDy96KyiyWBQ4qMVR866rc2EU5m3zPsQwpY7B7brawjRbwn3zGNnhf6qo11E68xNn9k67SriYKDNt1",
  "key3": "voWknLDhfCjrbAzsL6M4vuTjntvMbfNvR3MNrP1f7Kk3DRaZFUppg761uqkRDsgEL2KDcipHGYRj6ES3ifkxgEE",
  "key4": "5TUjBioUfgcPPHxg4svoSr6R9k6bRYAYh4AuddG8hMDz4vJmvo68wyaQEfVkHdL3cKgE6oMgpQiEPQJiKkRL98iL",
  "key5": "2HfGZYz2qhbr8zpjyiaP37BLh2G3S1jVjbiTCouSUwd1ktjM3QDhoytDAeZbXMW5zsabiV8TNwhCeZDF9E4iBYoL",
  "key6": "3wSZiksyNoS8vui3XQpGhcnwexGKMspApTLGx77AXzJeoVdLXTQjrmhdY7ZenboWfUDZCPZet7hyPcEeq4uHQv1c",
  "key7": "5xYieTtqi5tXGvMXeKzSzHz2yu9pp3zi3eUNpKwbewU1c7YHPZmahPx4UiVvJErdUXMk5mua6y6DdqaaeWpnq9Pd",
  "key8": "25Ndvwh72GfPN8W5HeWA1rbnFLAYPT97VnueNnsyrfJNdBKbiEF2xTVc4oFEfeYiVZ6p9t9YEmFDRZUZGsiZ4awX",
  "key9": "3e5ptXNqxmYE3pjyHxpCLdoCXbduETGA7zSurqHRHSd6DhEfcJzVM8EXHAZVu9LE2rcncoBKYq5dd4wVsZ8CdwP6",
  "key10": "52YnaMe9GbgnM5zinyabkRXxNabAfNTbtHRAzQucfTVggHCN6YPzhKm2ag2dnp16NHuxpXoXUUUcDduL81oC1mB9",
  "key11": "572iYVt4N2Y9omWkVTT895GmB2xQzruMG2ieNHUtHn5Rqtv5ohWcMFRcYQZj4yZV1JpRE1nm4BxzRfgvZuxWhgG9",
  "key12": "si27D82tHFBxhS4ce4o6bUnNf9R7m1Cmrg93ys9txyHPFxeySYU4J7ArRLXCE9qssFBLvPsEzdo5JPhZVebQ1zb",
  "key13": "4WLzJoSWdLPxHVEPpV6sdSsJ2QCigJfSTSJP8eXFbPwdVv5U2WEkskd9agZkJM6Rci4ffvUbSQvUA3dVgTg75fwR",
  "key14": "5htkyavvqkHTV122TECrt7PJedoBhVAreKpVQgYGDR8jjv4MfzBYkgUUvCMtqdPge1S78A2cZF9K376DdTkG7TFD",
  "key15": "5KVBqeR5ntDgtyUxEWYKhRbfkxrRAKizJvUGTX1L17pjkCS4kZ2PuX8h5LVsd1HwDuiVdEHYvkRjEFsQbj8dgXgL",
  "key16": "3gTdCLN9akKpUd8mshBHBsRWgs3ZPD945NRNwUMMQZ8meMERyzTbZA9FhAaHuEzx6bJwsLhAmhwD6f15AL5271jz",
  "key17": "mLA4Jv3umy5s5cznMDjJcExXGJ8pfja3pzQLW66dnXW3UPyzyGKUbufbpxVLpxPFW4FfwwwiBaKziEy2NEmKWFG",
  "key18": "2dMNngMCpWrxWAjhtbGzb2RZeFNwDsr8bCKZ3LPHZoyf3zX1sw7YQEe3PxYNyt8nBzBX5kVb1MipTDhGKikdrpKr",
  "key19": "5jrucUE9PTrZowFhY2NaNm46iwJFckTnnuGqyCG9ZKojqM9yvf41d1m9uPfMbeYVMjGv8JLaiKgozxDX2oEUP3hb",
  "key20": "ycDZsXwoMkHs5vCnSVcnUAd4XfB2tDyMakRpFw4y47o2Vb7YFiPWydYpa1RWkxbBK2vsdHRViBN27hDq6LWRAKw",
  "key21": "3NFdvHnJVcctpHDN19hPpVd8bvwCY31xBfdgxKmBRY49Pgkheib2gBDt9WEBcDfq6c1GiD3rhXSsHH4EMtHu6WvZ",
  "key22": "4Ra6c8BRN531kRPYPT19q1y7BUHRqXWZHhE6d1kes1H6WBDxRyA65Qb8Pj73jSg7FEBSqJFYnHp4uH1zgXHnkK7r",
  "key23": "4tqVbDqNS5ZCsULwKFsy2pZAeKH4yXWBnPnMkKx8pEUCWvXRoDJFU6XsFkaK9T56yrXKEs2SFNECtHLh2gSYAiJ1",
  "key24": "61U4PKjVUDXEn9znm4fzaUvveo1KGpgpKaZt9rBaYKJdqfbsHEMeroZDZgjU7tzQ2SvSwGVMPVEAXW3xZe5gj31t",
  "key25": "3NVyUFW4Z7htaK8QumTpsmSMvAvBaFi9Rjq6xYX49EfL7cCVMBF2zs5sXvmY9oxNxipDubx8CLkBUiidtoab4RUF",
  "key26": "sFRskdsHPD9S3hKZeANoY688BZemEzV8tet4JV4Wy51wjjmy5ck7F2Xobn6d31SnKxCi2kEVnDsUtjAffg8dBUx",
  "key27": "2Kx1tiG8QRVXuefNja9F4nvTrNsVm7SBdbruB2MmKbU4SKzcFCSjTB4WDRf3Ywf8UGBpkeJeyq8Ew3HySErgh7qK",
  "key28": "93eEyWPRv6eUm93hyiZrEfZNd4ebgSuGnY956YzZAQSmizFQCq2eExBMEvXbsBwXX4EsLSqqg4dYgb3oVKr5VMB",
  "key29": "25PZrdRpXHZXZ9gRdxN1jw8JDYw83f8zzp3PPgxiwArQMbDLBVVkSYiv3SMD2wWaW8UYiD8bFp3ALfmX6myNHKSt",
  "key30": "2gJGwT3vAEZXYJonzwVWRuEzU9yTud8Dnzec4t7EhxM55peRY3qbet86QmGEF1jUKPLc87SkoJpwtVux6HRXHTUK",
  "key31": "4HWa4Saqp1cBVv3uMziAH7X9yLR8nphZT6MVfF79hafhBDt8jabcg26wArJ3K5mCz6vBsxhgP9HSLW6L6iDo6bqu",
  "key32": "4SHLzUq7eDbiAXdhTBdzxnL6vFtYj94mxM8g95oYRrPwwp1ewNgiw4f4kqZBAEnTjuFWFNVQYV5GuaQVDabSxCXp",
  "key33": "4TQHrsp6pCmuWd7vHX1MaeMqbRt4gCbSCeQgAPA64mPv1EhQXshNoXLteA8vkKtDyjiFd6Mc5DgTQpW1Xzkxpc4M",
  "key34": "4EMrHtgHdKwgLY8sverNL5ZJ8Ee1mgEjWt48nRNNWi632LpTiFcXeEn2W55ge8ddHiQ3cQeJN9CWquUQxp1rTDhH",
  "key35": "3gNX3CFbcuGEjsKXx4UL3wcgsX2BBDjGxbjJmjJQJc5Ymo17T6VZ7omwUMVph6nDyporY4DdmAiv1xsMTHiVbSKB",
  "key36": "58kn3oGQ1vxh6RP11dmLf8k4LWmjJvv94YqonzHHb54hVXNTDRjQBNSfFqrvEYY8AST6xKYRb7D7XWVeTg6WmcPb",
  "key37": "2KXjYL7Vn5WiwTCruSQC2bkCYX87hL5BuVRam2dZU86CUck9oTVicH26WjefDAPakn7XYwHGA5YTyrFB47vF5ygy",
  "key38": "49BoxMrL2BjHpbDwFZ9HFjUammMx6FysLDzEWSQMnsTyP67nSfxQM8yAVAtct8q16taH67QM93ZBrAu9pGsU42c3",
  "key39": "F5pj52oFCFo2DianvjB7Lx3QSiW7Jg8ACiua9W5YUm8Pq2XRfsGei1T1ME1CKEofozR12q1bWGZE2BoiTaTB4JX",
  "key40": "2sHDwiTpyv2TFXnDkxCcyaU9N3uL64eEWbwySMP6KgpiGzP7CT9mQeYVs6rsLDpAk3wKJRMLZyxy55uXvS4Edf7q",
  "key41": "4QarHoY8qwzoiF5PB96qhfxfUtu4kU24cW7XYyosYrAZkRfGSRRDA2g5Gckm68jtLbxYBEuLQs6GCMgofnQ1dHEh",
  "key42": "iTzr7LbxcPnHa46KT6NKmMxJ6oPaDFq9jfv2KnqVdKnySxu7X2NTeusgfpr371Z9SbBCVvMiinCYGqzKLWdJLtJ",
  "key43": "5ipM9tYK3NDcofAaXRURL3PnaapitToc6aSQcHDxk1SxCYmNgvdMB3YXWvSMA5wVBMhNF29SCcCyEvbJ2YneFcMF",
  "key44": "4PwLgafLNMR2zTdfNk6VSBGV3UxhZXxd878aJvo5irDywf23x2XLTdGbrxi1MsSK8TKmcKoM7MrzBN2viBijiQqf",
  "key45": "61YjhyyD9z1atyc1ATfqsYM2w2mYWKa438UdNbKiL6HfgV2kFMvjxLmLaC7FSmC6sWejfdChXvrerDXcayyUayZX",
  "key46": "6nyGFrqPVzboJRUAawNsH2L4Z9CTzcoUwTve59vvkd6tLp3YrNY4FrLyDW24qntoWeDd4kXiYhAhB3FhY3RVfrM"
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
