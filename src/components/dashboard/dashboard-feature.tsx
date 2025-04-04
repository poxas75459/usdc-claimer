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
    "4ebUXAvYrVM6fQ5GUMBw2ozqsTsDta4aiAcwrjM9Jd1V7G16xDaj9PZwG1gBYMtirCC7dGLuBoeMvbVnLVryt3bY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dPQ98VMj68apF8yoTPgz4J4fyDkJL3fc2LURqqX1Q5fBcEo7qadUC1XqyjbmfyuDKzWBgztpNLpFze4D7BDzxm",
  "key1": "oFB2YBsmJSbf15pe8oFTKtaAD2HjkEPDkWZitQ2Uq4XB9N2dbAQvBgBXBVzuEhPAaFtrVLXyE8DGUWtuUXwKrds",
  "key2": "43Y9byoB8PenoVCCkhjCdm71yUDk3YYSaV5i2cAKZjJwumUc6rWMb1GaYof3DA9NtcuwNvkVrtfHzcM6weTRCzCy",
  "key3": "K8XJQSjKquLDUuQtQXp3su52QKHKourJUhyoNnoa4X5f8UFdCqkydR1WbtZH2sL4AR8ew7wdu6QfBzdu7aJJtLU",
  "key4": "5JswKmzVSjh9m5vmEHJBicgyf4u8SLYgUvSNCcNKQsjvC3cnVWUE1dthRtC4FA1ds9SvYZVKeMQa157oqzYjuyJK",
  "key5": "4DWAuZQGjXKPVer2xd6xJ3V9H8epME2asMtmcp2rxD33qw13U4ht1hcQSq9vzAtgLL7VSZSjusXvGqEVPqCBPB2z",
  "key6": "hoBVCdEistKhDn5umyKg2cP75E7hZiHkm4wt9KNs6gUjJcWwMLchAojrasM6mdDXsSuHDqJBZJ4LtBRBMYG5vfV",
  "key7": "5CtDHiTr3BTHJ5bjxKH8jbCjguQC179BMdHXYqpfCjgbi4iBx1AsTrPHPVNdwfxqqMqTf6r8NoFwnkwrEDpi9gYg",
  "key8": "Sc7xoTAuyRjrHjtZqKNaxHrP8UJw6wbxRPztW8Nkvy7qRRa8PZANxEobUBuf1Ezo3LadN9Bg7QTehV66Piq1H28",
  "key9": "2g2fSPEgh8VeSW35hG6K1YeEs35YfMtwoEFJYGo9rXh8UFpEFZ9c8hvqnFSFDuox5Bs3BBHAfnhFXfDohxF5s3va",
  "key10": "5zYezaEGDNVAZuFoSxyDu4CGwRnYkwNV1RNemZ3v6fSzDo2F7zS37GsMHm4mH3ByseFzwyi6eXZfHF5uBgTFFJHW",
  "key11": "46S1GkpaC9sypnmVhjXwvZfttqqDFWqQRypNbcwaaDapSnWCyNndExihwUvrbVGP5CN7o1LcppYnPgaTDFToM7ov",
  "key12": "SeipacGVuuzFRDGwUr9X9hcgMR6nPsCw8mnMf1zULT1M6zyMAZ54VNhjXmeefbU3LXprgZRPmrhwveJjbRF5ubR",
  "key13": "3E6tUd1bYmHYQ7A6LgiWvVs9nNju9oqCPBkTqjcQbwha7b1RdoN85NNt6QHc3wrMJJXJ1R8kpNrCHT2B9PRrgVsj",
  "key14": "258AD9rzauUFnJZSfommB6eKhAjYjDn8zpFYK5taR7hzeKqZYhx3NnpkV9E9agoFrpmo5DGUiXuPioA8QhRzzGkh",
  "key15": "hK9uuDKjVEoqU5sQ5HUNpsrff2xFmVFEZQUJ55gP6yp8L9LUsdTDSmmGqoZ11s9PwWxvJT2aaQ45JBmkU76Fq8T",
  "key16": "37PqRDxj9AipQxkkWMcM89CTx2thDMWRdxRTSsNKWtxAgkQ3PSmHL9r28E6KAJ1fmMsRPuJpxjxaFGGccKG3W72w",
  "key17": "4Qz1VdXoWYbCXcAo1fCxeKr9fNVPfyKVBwaWTXp4a8NBxL8XceXz98igcN97zmfJRzwrQbDP4oJRMoEDJJQa71CU",
  "key18": "4XcryV8CemocMMqh62mnvMFrfGZK7QF1rgt2ByM27m3ymJTkxzNyTfcaEWp4d5VYiuDzB1dE7Gb4Ftv8q8FfeFaP",
  "key19": "5tSNZSmnxLrz5abfCs3kkSjsKrgXehbp7d2vXprXm3sKiEMPYf1joSoVGYHNAsqx2PDM3HzDacf4ppE2MmHLiTga",
  "key20": "25J15tnmLbpKw5Yqyqzy5zExCAZAzfYxWCCUsbiP12LsgkQnztyf3oxErGb5LRyYQx51aqhwhK6C47Mb6SWYWHKg",
  "key21": "5f5N5RDJJw7ki5uMi2XYyqo3i4gFf5GG43MwTNKHf5siMgPTiLeutcpf3Qqed2PexoF2Htidm7GLgUbvC66Gpa2N",
  "key22": "2npSEvwuRroBjNfggje5jttgRcuR4CdDAReTaJpqCq6n6q3qccTBoKXqq7N8wRnKXE7qU7aRwym5GkJL52aJVuyt",
  "key23": "2vZ67mLD2mpAWe1TW28qpJsHFBLcBo4imsfuzQ8uTLH9ENsxf7sWTevPnkWyuCHb3pY4AatsYc2uFpEdK5sMGen8",
  "key24": "kSxLPLdgWEj7Ugj5uoPd4Mp4cFZdmom9wWbFoy6ynMamonPqY1PZdQqedmAWDaiPPaPHzLSysZ5YNWfLAxZ6mHL",
  "key25": "vJtoj4hGz2wBRrNftRR3Ypij69By3fg6tuAmVMV9m5qdgGGBGXZRxChmsGGNZLzPVeJf5KxWKQeg7rN5fRrdm27",
  "key26": "63H2ABpN47V7rE6nGTsEnvAEthQ9yM62wvryeEQieGpFpfPjRgDBQMscaQcKAU8nonxKNTEz6avqxuijBZyUxcbk",
  "key27": "4UY1wAsehrvMmKdj8KCPzjVJVoMFH9uxb3EAt9dv9jSaec6aJTghXePQyTj1ByhMhgtMp9Z1iW2JeBPxr7UQYcNX",
  "key28": "3nFvgxMFKiMVYCg8SaTAu8TURiqgZEdugx8rzNYJYkPGojoZE5fsT7w4kbxajeqkCLAgn8ABkcqpJi8obJMHABbj",
  "key29": "2pCfeFUpeyCuxbPYQK2RMJx911BDszGcHBPjkuyXLnzAWnqXY14frXLDdZb72q4nsbFvXj6BcTzGNqjwdoXYxmx1",
  "key30": "2dHQSzuEktbZqaXYYJ7dSZUq2FyMMdGpo23CTj8av9qD5g2yPWt4wMsCM36ZF493e6io3zK323u8T6FGWYbiX55f",
  "key31": "3812WUevZbWXJiVfUMHwCwL9CswuV1R1kRR5Z9BUK8gm5FpYBPpdVx7gKFhJaV3W5jvyJgCdfaifZxEoK7L2cAET",
  "key32": "3mWCTP4Fvz2Gg2DQvjo4PYreYAhJ2b3YTxVC3LxBshBGrwDNZ8CpmT2NGLbXyWW94rEfjkANWuG2EQa2cC8E6usS",
  "key33": "48tskPneJtRStedBHUvaUX1hZnWUS4FM8wZnmmaj6nHbaPhMqq6P6STjh8T8upwJVrqRxw4KjSVJZ1Ra7vReB15Q",
  "key34": "4ghy4M9sD2wwKW7u6C7KV8bnKMZpb1R7kEz6GNmciMLQvX9CLiMyn7WLFiTxMvALE7Y7n89FGfEYxDU4VZtYeh1B",
  "key35": "4oZKB3y74WkmJBZhQa3vRVnEZBSDrYtrCSRCfNvt4oz7Lbm3i6ptKJg5AHgwsC17kvQU8QZ58kzS2QpDoraaWXpJ",
  "key36": "X2x8ML5CuVBqLM5zH5Eb3sEvAwRy3c2bELmQRCqB2ZtzpSKURDqSc5LBLgRByB8FJCkK5Z8NXtCWpHSSeFoXPYf",
  "key37": "4548FTtsGVJZ6uGb1Gnkp3zcjsEsYyx6ZSWkLuNpkuQH41iGxSHzoTvDRdBiefg6vCRLeJq3txUiNt2TaZBTqiDx",
  "key38": "2S375LVvUq2hBQch2faqZcbRVycBfmD3AUzM2FU2CtBSnFdmeJHRWzKQuCJofsK6iMaR4pdVKy6QQ3Uygt3a5rbp",
  "key39": "4JcqLcHHDNG61i6Uy4T7zHoXC8RT4fq19vYQRMkwKjgoBt5fzQ2jiBS2jwAqkCeFUiDpWhoxo3NA794VG38mZWgf",
  "key40": "L8S7LgmQJR3k9Q9fD9EerBwVgxyCiqjgnVYSRbW4ecPNADuk9nTDeLwC8P7DgBgAyxzNSC8RdBLR1Jk9WzaiUoT",
  "key41": "5BajQPMHWn427ejtnv5TDwudhd997iQdAkTD8H5Va3My7Q3dX4cjKuWw13kXNpBfgbep31wuNMpL8Sw9P7fk9y3c",
  "key42": "hkCDSP6LY7BYmd7SuNMK3nkPg8UmeSrQKSGckM7fBJTZVox1zBLnvCDzLPTwKx7FaYXUXkmcH3qjKbozN8tUNVz",
  "key43": "N94YwYAkU33jCNU4YNhARkYSXGNx4qMkYZTKmpA22yBvNJAroUNGjXwmAnu9LHJt99p9jcRnAffEvmJRhoDjDgB",
  "key44": "4RxtywgjC5Lh5EE3ergw8PHURDrzr5tfFnBcdpnJ5VSkaaNGfKqAACEp3ZhyTGHdYzphH4PwKcFWSnjJsNKSiApb"
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
