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
    "yx9knCec4NaVzNVwzdEJbGTB6e4GCi5AXCNfubjLcDxhh9ywaWtuAUAYDAZwme1DiHuCrAAgUiKUHgiR14i6HGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G3YtztZhY4xdW5mnuACgskfhQ3pdWPzGnTLc7QrH6hoGy3We6aWkBAEcv6HnKC83WSqNHJZwRrPikFVb7ww3LW",
  "key1": "2RWKUetgyrB2VfAKt7kKkFhh9MifkyY5ouXcoUGPJi45PLui32QN6ApuVEeNA8W4jJ3n8Kn9gTSkk93NtpaPNbC7",
  "key2": "4Ym9m5JNJFV38GSRcgoa2KkQNbHm5yRx2ojKsgSKAAUCjWu8QiDrpk3SvAMtNxLFrWC7Uqx4r7UDnCT3T8gwMEng",
  "key3": "632bcLPWtyFC4AWFoNT5nBJ7BRcbsDTAtwqC7suMKnjBDM91Vw9JTRMPGmMLo3h1rUejth9PcEyKH2DibpFXvzA",
  "key4": "5hpQTbeE2hfhUCz4qtu2VXyyPrBoGVjaGixx4iFdT41sAoKt7SArgvvTVQCmHVzx8KbfEyVFk2Kov9uMjLnniC7j",
  "key5": "5vdySbdVNsYycmBwGLh94rDeoiAbXWsPk5UdzDLvPSBhN3ur3wJbSCAZH7LzSFqU2n3X1QjCebiQwSS3CKXH28uW",
  "key6": "2QbtecJhFhaFFrp143afMyy4zSdWACeekr29bN1K9oSdXhuLb38BbwnEDN3YxAThYtAXfPScta2qfN2tuvmbSEHT",
  "key7": "32bYWqGKz4SKkmG5rwwFTe1meCiS47H7zh7KKysHuYCR7niBYc1GGXc16iTo4mSnFhy6zb3NvfF4vikxyHa85WmM",
  "key8": "3uAK8TCe8Xkg21GU9F6EaeoGbyMux73Uz9iEvreXRzD2ay8QZAu3nQNrSqLbg1Ej3qoBp8zLXr5ZeV8xMH2gg1LX",
  "key9": "fUidMkBdAqkH4Cab9hyBm38oJYJuYpfpUq1A4dxWjGyKZw9oPLUxTng18XgB1uypFm2TPAANfYnDgvYQoSs1RW9",
  "key10": "n2JWTQ6nkENSMSJNPdsyJdWCabHBUPgengB5nQDLLUjsoYBVwv356YtJDMjc1G5AHVNCisTPQdryHBxzWGdcWER",
  "key11": "3CxZgoR2a5D83cGyAWt2SnVehVc7tqZSuTk2NppWx2CAohXvvJV98XzqLH5BJsfBavDMfvqPf1Zwc6QnrgLgc6Dm",
  "key12": "4nJGmCrjW4FRJUkcfa3QFesbssHSVnMu1kihjBBraqcn4pX4S5Jd9ERzXXds7eHcGQxz95pQnkNkm5xodnEXDzmJ",
  "key13": "5PF7oMF25gUyBei37FstYH86KiiFKXA1g8nkJVFeYC3KxPL5pRbZkcpzQQia29V5RxUsABJMqv2QeX4NF7a6qsTD",
  "key14": "4762bkqr8pNExUdGcEWgZceaHt3LLtotkAno7kn5f4gyKAfRGXfvTXpL5jinWHwDzYDJbJhryHWMQcnVLhmWBZ2u",
  "key15": "hi7MVhdr6cGoxQuPjbbiMYpbYdCWHskSPBHfXXatdpY9hboLFVAJgibFBbDZgic7UnLT8jCmmb9quDBcwLL851z",
  "key16": "2u7nnyVryqAnhtN8wvFSmCdmKWzvSvByo2HWdSNZK5G31awN2Un8dQ74FR3hEVsETMqBY4ZR8U8gG5rmR4Aqr76G",
  "key17": "5jVoyBB9c93Rugmun2N9ArGdQHHTMzfPAcDs9fcebJmJ9REQv1rXEQJKVhmii8s9p9eLVioZDpTchwAJroKo5eE4",
  "key18": "NoNyj3Pjjz5XzbJygCeqZSW4vZyyYuz1JynXqoR8fQthyemAqhAmqZhGRMtbPVejr13QMk8AoYVBa4EkgbDZXM6",
  "key19": "BA7939wtxhJJUkwVKXGX2BhgXAm76NgRyDFKZGUhPunpVrsnRUsZUMTeFsscVXPKKX3XCeRn9fY91sN33YRSkyh",
  "key20": "3H6R8uzaM28UHdhhLb3Toh9fVjzyJZAph6fkQfdbav7LQstukydRVpHBxQEZqMNiJ1et1UrhWcQ3237qmnnNieQG",
  "key21": "4Dh926GXkhnTWWjZvKDD3WauuChH4SekgcGzoQxJtQBS1xWy14GUFBPWvSqH5Z6g4b7q6K3WmLkqg9N4i2Y6Hh3Z",
  "key22": "5v8VLyTaL54XRPPbqAQP9gwitGSTa3cuF78pSkHm5dc2Kcr7PqKDWnCW71WYffN55s3yQhquPXRWQi8s2WweumTi",
  "key23": "5XoSdgJ9UqC2egnLeiXVX44xU3ZQas4LGd9n4nEVi8pDjj5mAuSL4LJq524eqQtkWqesY8fuqNWpcgTv4ZEtPVKz",
  "key24": "5koNqm5Z3ExzRdaSgzvbWi3dVJHHVNvAiicLAy8MzYg5ZeZB7WZBu6udedygNUNSfeGXpQ5NKEmpexD5FWU5YYYH",
  "key25": "aujEkhPBSxRqsw9kS7geY3eXEBLiPdNTWKFGH8THNnxjCCfyWxMKWXo8G6C5sTShs9ZknRMvBVsz7A2MQHnAgM9",
  "key26": "3uv19AvDGqSsWaguAY39rbTnop3rsYvktoa5YwpGzy5famP4AJ6dyy6rBGExh1EWR6jbTjhnUvgzpxUw8zgyeBpt",
  "key27": "3GqGzXfmwy5uFP3azhhGgUxpFAiuEAEfnMGkfSkRWFi5zAEFkC7vvXWpayyPZ2j4Njd6H2jfmXUckcnxqq1MvjWu",
  "key28": "5pJ8QsUGCmcFcUMYWLoRRSYhKx7TtCMxLNRRfVXMihWtTkQJ4SuLEwCQKxXEvKH59uipNzVDumC3nXwdcTUj9Fx7",
  "key29": "5e8ZbUJaRtRADCYK2agRVEdS6PvdStjbQF6bpLzoZrcFe5FUm6XKJ3JmqcuFxRwtkjcKoYbcwHAGMGwbFvBrmxNB",
  "key30": "4iRnTyu6gswvKDRRFBDWbNC2Ah5PW2TTWgVi4QucGsZvzq4abDW1nZ4yGpMyB2YsP1GGm1haVtEL1bLqHQNEaxkj",
  "key31": "2qxspigSNtmKdUzXA9AuTe4Psbgeet8vhoA5n2HRLmMCGqNJgAF3d5HKGwpLcY5dPGuFcsAPkpQ2R3HbUp8fkzoD",
  "key32": "3bRgLTBpDQ29iU5hM7r1j4ABwNP5yA4bgooUYsYmEi7hXMGoxNzT7puCqPC3pjZmk5zXFQTyWUQ134Qtq94pqYMk",
  "key33": "59K1tYzAGL7beK4gsyNddvNxJxCZqg9j16Wdhy8gY7NRwzi4if6CWXgxRQYmjW3UgpYoeMNrdFe8frZV7SiongWg",
  "key34": "3zQomkgop2k5EBUXcLkGJdX9Q4A9Z7if1YJN3x8EqaHfaRjQxcpr9HfVJvLNQ5csWuFAMbFvBuGLbfFqBF5qUdD6",
  "key35": "3sq6uWV3yRWXXHMt8K9fZCVU9hnVPuCQdYSfhgVcfBrNeX1V1qH62GPFuQpUeH4zH2g9qLpoWvCGVFbNJJ4RK1DD",
  "key36": "2FzVYAtsDK51fJ9ZGdwKyj7kTJWgv49jPEsR7mxZUy1uayhJngk4HaXgMXU6TBwMg39D2nQnZ1gEvWjr9DZbDi7u",
  "key37": "4vF93mw5LVfqUkDpF3QWKRHZuv37chxHnPE4nhim23VMJNeyFMAQS3ZE2y4h2oHjRJ1aerLzH1RmeLzw4jS4LWYa",
  "key38": "5kpHyEXSkb6D6MboVx6gHoGbosgUWxAYNANgLRDW15DFJfjMx86EJn3sp7811KSnYWeqen7tTzxFAdqcpa3qATqU",
  "key39": "3DTsGXqzPUgvM1YfHrkKut6PsRmJ1QQbDHQ2Eie1PXuQk8bJLxrMtb6mxY2rTA8vkMbJ7xwoiSxF65or9U8JnXDf",
  "key40": "5UzrHy5x3K8kxBwtwgnyNx94vMcievVkotgt3mEiHcLZaQqUXoXLESEQ2CMdnE6mpYR7hsnmBHgHMh6UmjxcGV4y",
  "key41": "UcHU4wFX5dvauxF1ThU1Rfof7Ay1UMyyr478eexhb16hZQuunUuTUkLnqTTLMXgX3FqcjwUdLn4R42BHNEfuamD",
  "key42": "tQm3Tida5at2D3gtCDVoH9K3NUGt4mcz7j3HtPqjALLhdrTnPnFdjU2mBuCLfj2WK7wPpwRo5sE51unXntJgadL"
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
