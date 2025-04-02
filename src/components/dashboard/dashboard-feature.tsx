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
    "4iNbdUA2rQSqiSo9gsyXowvb1QnCRZsUyBGboa9AEEhwkT4Lf1fBPsZ4ZSYrTHCFk2vMRHMK3sNdMbosHZMjPViV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pP4P9suSU3GXjcMd2Z6saNRx3HXDiZGVWvdhVGanjgAA33h9ZYCbz4SA6uig2SbuFSgaPokS5hfjdBPAJxPjmma",
  "key1": "ccBUcXWc9vVte4iFVhPv9MfMj62mgbsjq3F9VJQEgsT7tvTp7FDCHVsdHhY3L6CdWaSMaxY7AUYe9FUZyju7zHM",
  "key2": "3LvMVbvaAoJ7oB2TFVPv3pqYgiDyhHiqN4ej4mDGZPfAKDmVUi6NG9g8QGYZBQJwiYvP2DNmqKD9otc5i1AneUcz",
  "key3": "65msQRChP1fU6JjVSnWhjTtDECMm8ZDWe9egBU1WEbtP9Uc4RDwLFzGra3GyimqWxFu2V2os4DBh72kM76zx3NZz",
  "key4": "2ae8TeobRsVTQwkmnNzF8P4aKsGshDudeR2fcjad4ewRVYU4dzxWqC8TsMwHhERRLRyK5kHAJxNt1X32148rgaSj",
  "key5": "rrQR3s5YHZKsVrjJE3QusbFohBRZHWGwy39i5AHt2hfiYLkpuwZjEgKk3qooKqbNVcWerWEuGcmCBZx4mUapSNs",
  "key6": "2s8doi3oVsYPvqHZyFtGvL7VJSxcrSziFBqgmCpU9Gk34yb5QkzF3375aUsaEX8uy52u5zx2UNhQzMBtDhFkvUFa",
  "key7": "G3XYHfC1ktQ52cJJBm1mg6D6VDrnTqbUZhe4AQYvdmexyeczKTeQ7xYuhjCE1HER56tu7zH58BCbJ6dZhUzfphM",
  "key8": "WPr26NQjutXHNZUFLVV4LyyRM6vUqeaUavujKWVNGE7DNcpLp9UpxWtMniW6kWEukeoJpMA3pjiRbEpKU8ffETG",
  "key9": "5RDfe6Z98KxyjkwsUmkyTk7atDfhuLyc8tnSMosJ3mA5V1WHkU6SDp84uaka8oWnUcedH88MRkX15CeW5sybGkxZ",
  "key10": "3pabWPSs6EAynUyp2SD8VgM3s4dXBkwFYFJht3dMvdM59gpbmPfj4CGBou4mAogivdQLbh2pv6RTsWLhB2iDQg88",
  "key11": "JffKmq1bsWFKtsozWjMGynMazC49GL6qaV3Xm5EuU3fHuiXjVNV9S7ZmTr3Q1GKiRmYVHa5r61HiJVtg2FDpQXw",
  "key12": "4nwuBVti3pgzWm8ksNdrMR8jrGGhGR1WFN6DNMXUwNvm7LcgktNMpo7jbPKmAaeLaw5GMKeQp9YrZeA8E9t8KaDF",
  "key13": "2K55JeMVjNuthqkR3CvhSqREWpxCrBgoud3HtySrnJKS1DTBM2y4MRfVWLKZLknUXBbeQS8Tpu95wZSs6qrqtb4f",
  "key14": "3QzZbH26GtPqg9WyEjgJbLXPe1mZPovgXaFZcJpdveW8vnjAR5YPSTyuuZ9eyM25upGTuAxyWdMSWn8ZutPPLMrb",
  "key15": "5Lgz5X3gHyqWA2WyN9x4tiYEQLZPgen4E8QfUtcvpWHG1Qf7qj15FWapBnL7DmWXTo2S5NjRL8AwUhiZAC5nVAKB",
  "key16": "2bwU4pwkaoscXWZwjSqdcWPTPohf1qjw6GMzL6XUxnr8WTMtFjsuxg2Mzc4JnvxBnjy4UN9NoBuDrbjLMzgdr86g",
  "key17": "2GWnoXUhYVa83BM17fz6Dv2Y6VXYRwPyzhG55mJK8Gqstm1QrYEpgPj3n17cNuMdYZQZcAPVEd2EZmA1PHu9boes",
  "key18": "4Gx6mLdrprdd3745zYkdK3ZBJVZ6TGBgCiygymSmP3nXBBEafsvnhAPXTVkZnm3focAPVAGFkTTjpRbEfHHBxVxk",
  "key19": "3GmQL8wmVh1RaGLVcFTRzKs19JLErP7NNtgvDgaMmNjzqJSCBb7S5nDWXZREujeAZWTMQiciEosUXdm58yBk32Sg",
  "key20": "3jKAePWyzaNsioFdUhN1C1NWj7opuyKcYY9xkx4JFsWJUDLi9TsNuKF3UiJt86uyQAkiqsM2awpLWKyvKWcbMe9F",
  "key21": "5nWxKYo392xmHnkcTiJTEaeEHbRujhn3ATg851rnvDfPiEC11QTMkiyi9AjGPK3hQLc8V2PsNnQA7QK7n7Rm2CuP",
  "key22": "wCvRBMNr3kMXf7XYGVS6PvZf6pnZDtzyTcC4qiqZxpJvze4829tdjXAjJBsnvRkDDxe5otyXsaaAnPYWemXsM7r",
  "key23": "3VrhnCyfBGhweWvqZMquHwCCa5qLZNho9eV7BgLYYnL67qQZHNFwQtdKw38d8iunUKHXU9zSanQ2TGJmWyWidGsc",
  "key24": "5jthuvykMhT5GFcu8TyDTDYZa5sdPvvdmqp5zBSd8xvtP5yum2UMr1a43QPjLbJhaH6UmAJ893TVGCRVd3Marrtc",
  "key25": "4FGhWdwxMViwK3aFCjZ3fNHfeoumG1oFyjYm2ZVwamQNL3t99SdxjPeDFTbc8HVr1wpmNeEhN223nYwVHbc2XWMT",
  "key26": "27yzpvq9WfKJFm5sHCp1cTeCqs94PTpzpfxw8995wqqQ76GTmb4fkwVbygF9gzVBYYD3YXSb6VvMaHfan9ogqeoR",
  "key27": "39fQpk9RRhreYotPeUyFTjQqqWviicoguGaizyNHMykPQPiTvKzqdb97T4Ur27CnCfyLsRr2wAPNvQi4cTiyT1vY",
  "key28": "g5eRMkBvJbSxvjt9fn7qo1y57pGuqh3438LV7GbrQr68jP6F44jQ3LVwWZLacWRS5dJLqscX2cSeR8jDkTG3vXh",
  "key29": "2CdftzaD1cq89uk3sKkooHpD44NhB1GkAmFQQRiMH443jzcsFNDgK1vSyR5V9M9Sg4jZcA3k67pVioFzoBjd3r2q",
  "key30": "47mufrNCvqhZYpPrNU1PV2EF2kRcNXWQmZs7qVHKZWQ6ajiGwC6GxP9w1Y4WMa7RdsSc5WYNk9uMQ3XGRTJ9WRAq",
  "key31": "3TcB7QQriDDKsm3jdCUrSnPvksYj3RVzyghdYYVLafAZd2DhqA3jAbWijRYox6E6WVQPUDL34sbuVgUiFtdW1q6Q",
  "key32": "ruo6vuror9e4UrTr7p7hTAmZW3Thy6T5jLBPnio8X2dnjVAocJfifrQ4ELtU25jjCiEz59D12XUYPFLrcxk5TM1",
  "key33": "3NQQYHTHhLygPUasBSDmbtreUSSDCBq8twh1AkmnXwMhCxV2yG9PisGReTLLyXYhbkeG1KXyiPvjKqJqLBd3RGc2",
  "key34": "4U5EM5bW2K1g9qCy3bWgA3vTZEmdRBS9SYDzsj6H4GgCV6g4teXgbmrXXE5e3WrmWJfZcriFi7Hnh2PqgfHsUaS9",
  "key35": "3zHw3aekWPPJocDU9jVupd1wpErBzW6tWYmS1RDT8CHPeWSPtixJkS93EFgK95FZuYqChYvkbPqKPJ8hDu1a8QT7",
  "key36": "pEPt7iriYmEcas3FG1xMGD134NYMAYJd5UTE3yXLir2LSCFz4VmNwFa8utDxHyF3WpcQ2b1cBW9tDjgSoS8awMs",
  "key37": "4jbu6VrtfNhm6wKbDmfMpvupiUmEyFZSd9EjPjxSY4CZ68pu7NFsYXXeUCwvepaPqaeXHBCVHAH59iBCvNSBoo9N",
  "key38": "21JCHmjTocYNK2udJz3TxfZxy8QH3kn2xEGgiwFSzpy2iYCGiVGbSVExdgZQuZJGFX6u7G9eLbXx4vMAUgmGVpyD",
  "key39": "2phZSUsjYXc336m41hyj8p51RJDk3wZEXCfUkcAWXihR9PEfU1vpeMr4pQfPQbb42rwXhztp3EbGqaMRqLcxqhns",
  "key40": "4La234CehU4fNbMCiSNXkHCkibJXX47zZNhjLyomADXkHNsuTzeeFv2Hv2dPNyPR6t8sbjDkxGCYDu39rm8MHT9z",
  "key41": "5f1uRGgxgMPBVRtai3xCavGVxdijPipwgCZFLJtHi37UE8f1vGjTohKQ7FXUtmqZw2so9Uedbfkxqwkb14qr1agK",
  "key42": "2BbvqiFCGTzjY6akLBw7JYEaFGUUcXZeTtgwePqJpcbxpP2em9aSZY3n7e46eR3X2ouoLZAU8FqZpzXgPtxMbFFR",
  "key43": "4BzsUiQa3ZQ7bLb919UNzQ9ArmG2Y4Pr89R1RUJLqWXbBy1tAXpmgZ5WVKmZDmeU4AecCEsT9Eq4HELAdNf5Naqe",
  "key44": "45Wbom7wbGRcBjJwArvDwTNF5oBF5AFvKYq32NyQEiEzFj4GR1pkKpkx6x6hf2VHFVWBxvfgSpadopq13SDgiTRg"
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
