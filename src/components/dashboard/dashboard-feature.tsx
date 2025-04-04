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
    "4ZPWKqENm93XeDsg3iVRK8HeobF5989NNNmEdC5ji1pj4MBdxkUZ64RQn5txhWL2UFjxbThmAWUTb8uhS8Whuz3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zLAEPDjWAyjuba1qFD4q4hYxsKp7K5qJxDxmL216uc9hyvjxVg8z5H1tDQpRtbornqVyddwrsgwtu2RiXKoMuLM",
  "key1": "De44VnYt2dsrxySnq1WirscQMRKLBKHk7JqtMejeGXkqcYpap4YW3PMHFtTCQ5nWZz9W93wv45P27JpJPARdvyh",
  "key2": "4K2rrfiH7Wn9sa3qaDKEWmSUqNfhnpLS3WEeUeo5LpBCnofarW61zfSgHD2qg4nU8GgJkSgfPCDePs4PbCrsedii",
  "key3": "5PfxAShB8CD8R8nG7P4f9wenAZLCi481tpnNZxvpo6yZmLbn4YW2dYofS3GQC23FhuQEECth3T95oRgovfChomsj",
  "key4": "4nFhTfzysdoMWQkZYJxDx1LQBjEt3nRNoPH8zPLHUfvDme1th6Rr49vwYfsxaKWxzyFJiNbdm4qP1rKELzjbiuJf",
  "key5": "3WXR9rQ6nEqUfnyNMpdXRa8RoBuUfkcM1DPdRiQw3dgTAfF5vct4RijG6Ac91Vg8uz16iyVTytGdCFxM3jg3LhE3",
  "key6": "3cW7nigCzJe6guL4KCCnWogE7xZ1eno2taSV7U6Y1766HKPvX1XSZuPVT4Fdhy4bTDSptCKjqVyxzV6j9LqRixFv",
  "key7": "ytBesjegf5oehToT9XhcFGaXwod9E1ZqC3A6ayHd5vkMszbXv8kmWVNvJPcPHec3SzPS5gFhvnBeDLqY6gzd9c4",
  "key8": "2stBDMDJWYZWPJUtXpomrw2hkXrsnuzoZEerFSECLjmMTQQDnuQ6chFp9h35xRkc6LbV9DFMQQSJF6ySHsmsMSDs",
  "key9": "zwojf5v4zh9KgGAFKVFM3LL69sQDevKEkHCw4RFRdiNCN95RhfMSF3DXwQEtDpr52dKnaErPDxWitLKVsxKT7Nu",
  "key10": "3beBsJ1kDU5PBnpyrtkTbmSRdhFUsb8k2drZbHFnkQMy9whwHtgDg2EU8foBdU2BAXh4RBSpxQAbYDZ8xJBFcqKc",
  "key11": "4Aj5M6GtJTXKotK7mSABYnzocAuKJSXbHiHxaoQUmvrYFjtpTKpCGQPBBS5H6xLesP7wKHBdqXgR5a7RSF6vVBRM",
  "key12": "4PmZHT6FQAd9PNPP8r5tPJh6AAHso48NjPexHF5zB28tSwqkAykraLF3jzt3WWR9Mjww1BV5bQxkkQ7AQM7WYFEL",
  "key13": "5351d2GXFrmszcuf3ozd13rJ55JQhgwheUQS44PLzSxqscAHPYNHpiEmxwNCa9fv3FFyMEtPGU8oNybybtSjvwmv",
  "key14": "3hWAPpe3iJgVYH6VK82a7Ed7Km9BbLX4NbXS1qYRAdaBue1VhzCVYN5pESQGShMhUoyvp9GBz3X5bb1uqnXCiwHm",
  "key15": "3eeEmHtLjacMabrcbqQmUfrJnmpccpdvbrDp5P2fwogdvC1aKfjhobJcg1JMQhoiLP6DtfLkHibEqTHpFyHpaRWy",
  "key16": "4eCmyWxYkPx2cbsPo344sX6kkJcqjMvvgPfumayY2g5CfTbyvYvyHr8AB3bPKXPfsYsEQyHgU8BmHg9v6TRhTrjE",
  "key17": "3fVTern7VtRpjCoBhaXx4y12rjjQfzPeCYm6U27WDhNHn7GeLyZxFhc6iYHwatr4VnhKoX3N1JoefzoZWuV3BCqM",
  "key18": "4RU1ftrHHXbR6Ty7nSexJCWBHEyGphtudtDK6K2pdGiPrZFnn436BtQS3XQRvAMa5FgckyfJRzte31PBSBAqbokc",
  "key19": "3LeotMWmrLT5eLo1x2Eoy6PVVDpCdG9mRoqEHKtr4dZMJH6zzVHm2R8qXr7ckRwJHz8mvos1o9SLGqLM7y4hgGGk",
  "key20": "3v36jMxRYeDoZAfhjYniTV4agvske1797c28uyAmNx2ztu5nqoAQpUnsiJaLT43mtnP3LCMUhwVAFvhesDTr33Ji",
  "key21": "39WxgmTjnpe8MWBMNgC4vCt2tx4mRZUhhtjHNkHaHC14Re4yggQ75aNAkm2wDorG3QvRZNkY9GzWUoKqwp8FfQUN",
  "key22": "5Dkg36V1r4LMKNq6NrVh3swuNqzE7wcSMSy6k6UBnxpdd3knYbVKFz4QgnT3LazxFPQ13sd9RHtzBfHecuDqYPyw",
  "key23": "4jZte7WpBgvkBH8vmwLdtgNXid2XhCKDVE6poX8Q6dXvJaoTqDXwPVKjRbSc5dZ6YHgf8uRY1G8SG8j5ZoALfkQ4",
  "key24": "3BvF7Cgx1hzXPjknBxt3KqrHGBkU8nkfmDL5ZVt9ijGUodyWHg2mHQPd7vRttRsS3BWq4Sy3itPexgRhmTySiMtz",
  "key25": "29mtkJXqm33GAcMSnjPq2Y3idu2T5jymGJJK1kuemeoBWMukxojzPBqMMB8P5JSUi3UZ2SeiU8DBX9NKtoVBkCCG",
  "key26": "4M1VgoYfn363qRxcuLRvNknHRfbknSHPqcfeH22VMJAThUP4NJPL3s4T1vPCzBy8DLYDLeZaKXNU2Um8KKoSb1WL",
  "key27": "23cMU6MfwTCmDJqF3jXeqKnXSxa4X8HGgqxSmYDgjs2uR7ZC8yzFHRpz76Dc9jeaQGNMV8TkCLJ2yRCXSP3UHbT6",
  "key28": "2vJyysopExFUio9bKjdQGv37f2PMJyukYi8CKPmVxbppVQpuJagvc5gF875gZJiDQ5PDS6mkweBSgK9bbwmti6SH",
  "key29": "3e24t1SM2iRFw7nPhypdTyLeLZcqsqrSWuRfBWVK87daRAr1em42wnm4SQY5cCMzrYyWbqFS1LxvKEwBQKtMvJQf",
  "key30": "4Habf6c2SwqLe88egaP6oUxoXNLMiySqaB8uv5YqvVgQ6eoLJhUmeNf51kC4XVNs4wbYMV3K7iS389dEMNqKzXAu",
  "key31": "3wTZZSjJ6Lruj281ekmwLRrCrHqoM3nDy3FsUr2e88QzbK2kZzVYdcjVRv18qaLYT2o18JCu16GPbPqhvwyXK8xy",
  "key32": "5BLpQnu9WRzhWaFwv9LjXtFu4H6oMSzbRjDXn3xXsE3SRkRfRA2KCwvvH4stBTXTAyVw2jK8t23KejpLEgVjrbn5",
  "key33": "2PR2y7WFVuAG1gWbKWkRkQhHsxh2KTnyFvQGmgtf7xUgose241DxzZdEuk971FcpwEs1oxutYDA8bxiePn9pz87X",
  "key34": "4rBM6gbMpFnT1JGy4N86ACEdBAvXkaoL1fvaxVTa43WSgBZ8ZAuCXDtVRooPCDnkU2T6WutGQfHPhCCGErANGaei",
  "key35": "5C9WRuN3CTwbiEcBjnpbhgHzjWZu69MbqrBr161Q65hXtr1F1jtund78Eu48QaxFufQZhyJSJVzfgZcAKXLm4rWJ",
  "key36": "3h8cwhhLv6tck23hnhPSqGzJhk87z95Qfp7WDopfFY235Sr9gaSv8sGNRjXivg7xiFrJv17XnZsVEEJSkfsgaFcY",
  "key37": "V9nywAvhhZwdhPd1Ymj13aoHn7r3yLKjutPVCHPD6CWkTs3EMoc6GmAJeZ7QPkMEqAKeFLaDbTizvgWMjNavrFt",
  "key38": "5T4rNjcoaFuiAKriTuUfwXfSwtT4hUzV4mv6mi7KVo6vD8LjpyJuSVcTQ4XiW56MQRC4hMRf6mPSBzWFGFX9AaMq",
  "key39": "Qn4yH3zXaNGnqfCiEFxFTKZgjngd68YGWuGeeFTd87bNAWkPLmbBm3gMqqp5AYKN4RazwVf61iSsrqNDradjaVK",
  "key40": "66GZqnPmkSWzoeFX2BXS97KxBR8xnm15qkqkyWpXu7bLQ9z7XsytBXo1Hc2KWVzkD5L648Ax7fGTjSmnaio6bSmg",
  "key41": "LEQDfQp9G5jeLZoXaM3XGqCHaQWH18GpuSwVTXenM9X1vx3Z5AiXHRgdvky5DBq6XcnrZqUPMQqhGoLfL9qcCqp",
  "key42": "3vFJhtyqEU6DvTPM1sxLUcuLerGM1erdLmLFFCyrNiRunje74KpTWoLGji7rUprSC4N2zW55ptRYkpBKdVdHWp9",
  "key43": "4G3ySm15Xa9naD8n5cYRbapzdHXxBnHMiCMAW7PQ6VWraw4xPda6GZXzJBfXix2AkHxbQpYgQ1jpu2oJ5eVbVYoJ"
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
