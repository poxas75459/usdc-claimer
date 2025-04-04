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
    "39Yj4rCsBLmC2FRD94khTCS3sZc5Rc1ubLA7iHAfGE43aWw8NUPgZpbwDaSXKfG72unM8dFZTbd6xmWzaiMnbGC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wpRLyNNVnWvq61zQ5SNZPX9wx7eQfpAdVRkeCzYR3SueSTf37a82vN1BxEHXtRQRXuCoo5hPvRNAbdjJHUSkv2C",
  "key1": "3MHWwSEmpsfFzBYnXq5raSRQSaeyzN4RnLURfj3z8e2EQvCn71r9Eu8DzpVs3gP6zHLuc94cPcmBJkQshNgwDEit",
  "key2": "boY1QVLWxE4hEVSbqemYFR5HbPnWSRgkQKtay9HqsA3G421x51WDJzAS7Yf3WVH9H9FpSNyeu4A5sL3BvKZ2EGL",
  "key3": "48Ahu4aEveMP1vom6xJhjrekax2gkeeFUTzM5mmQAEQSxtpC9957E7i5jRvpfgUyVTxnkxxr3pHXcEohTs9y3eUu",
  "key4": "5oJjUF1NAeKJbxiXTV13QafNpYs4QawBrpTFs2QtkuSoNs1cqe1Gk2pAzdNuj2ffSQvPXMp93TxCF2oz7QKeaEXJ",
  "key5": "5hJyj78SYAn1g3FcKW2c9FCLY35qqmzwj1rQrys7UzvAtoL6aWx1KZA1HHGjzo84gq7dB7wS6kHQZLqW3rYbLCoe",
  "key6": "GF12xoHM19djiFDP55AfbJQQ5g8SbcAYYvSjh968zKiEqSWo8k3mFVpD7tzntmbR4zeDzEKW43ufHaY5NEoMJLn",
  "key7": "2dvEfVXPgNJYwgL9E3hTWgLMG9kud22wsJ9C46PJs8mjRsKqV97TKBhTX9DAUHSH6ACjemf5TPzQj8Zf7Y2GjQHu",
  "key8": "5EkVJHG2YEVyv8K8jre4FZA6LmaLDDdyoXtcy5hjaS8RKvoJJJTNpYkeroDrubVWfCa6sce6wJd3LvzgWP6d1ieA",
  "key9": "RB9CDd9paaS92qWTFjDRcMdPg9k25otmm4dZ7wLgwPQFSWqeF1av1RrDFFa31pv9a4gpbubwJCNRNabPFBrFaY9",
  "key10": "59NnWLiR7VUucLWYLrJahSwqvwJFv3kxFs82WuWTcaLrLtNcrxZYXpkW7q7FgNo9y2KZBWTnyYZU4vwCkTVvYLtW",
  "key11": "Jj2v2FAtkLPw9vYj61X5uDW7BAm5x3JBxRPmG6o7jdgvdFDUzpgxQWVe6cpYpLE2Sxwy8b7SEQfjyxhY8eDcBHG",
  "key12": "4Jp6yC5Nt1MGqfjmTZjH4jcX8dwNu7QGh2pk3CsXjyLRV7Norjibv8Tp8a2bEq318wqydBVkuRHr9GtmmXo3g4u5",
  "key13": "NtgPScU9SHjJb3ttrXvpUrN51c9LLM2w4SEwy6HfbuB8XpxPwnKS1eQUepoA3toFBbXbcadxaSKcQ2SKR2WGfCs",
  "key14": "5SS2fT71WZGQ1sar5FashnhcXSXNK2PbX3znE79dk8AGDPRThjBmnqqqUDqZbJcJWBzYcnZTuhu4MfNmbPgBXan4",
  "key15": "23LLM78c25iMDb3H5abiaeMbiTpWPynr8pBJsCmMqQtCYJhxyoNi5Z7iB2nf3hK6Zc9jAmigE9UoHLuBADRaFmL3",
  "key16": "4kpUeJtAAzTmujqti6MKrhoo2S1N9CpE1icapN3pLUVEUvfRveikVgepFJ8nBhUa8GkMq3SUSpzGYQwALwUjfsWe",
  "key17": "5N1YPWWXdeNXfhfmbZPo3kcwwRjLmm3iERNTiagKtDkLdxa8BU6TLMZEwMF1jQwRV6TCZUvk6AJStT3Tdx5hAQWS",
  "key18": "ANwVVZCSEjYSXR9nMJQxTXiKCUpiT9hmjaLUcxyoXuYxeT8g9PfQvzbviRJ3WRXEMDisdvjHdNj7RVeU2e51xMD",
  "key19": "3Rp1yfFXFS755aMXgHESK3ePvSu1Y2cHMGGmM7ReoDcRHqkTrfk9WMsr2GogkmpgYHmuipG43XMrW6FyGUMAaBEt",
  "key20": "5VegyYMEwHJ9fn2eSy1V6ZFQEqH2xhjUpGk5CmD3nXRRs6w8JwBKyDgt6wbpVaA834rdizNyjJEGj4KCEQKPkCck",
  "key21": "677auiK8KuQJFEbKdMKdEuRoRRqidLNquxh4vii1Ug153D4bU26iYokNwSDn8V34SVwQTg2bDs9byipA5w2epBHS",
  "key22": "5FbvSGGpBm8DNnSC2PB4Wmm3U1vjSLJkk7uMWVqcTQQnqLTgexR8DuDvP7qWFHV2WUVFF7Uv9fsQkiSk1puRqekW",
  "key23": "2aoJKXfqHE64Ssk8HQ8T7c2hyZ583mRwQd79gvhpn6BmkW5eALt1t9dW3iovCm1DF35shq58KZKGZFaRjBosSsPn",
  "key24": "2hnxPrYXo1y8LcpQDFBQNyN3d8HBsPyQQJNvxpGLPum1Q5Nt8u39w4UDkB2UqPd2ZiQ8AiSHwMAgp9ckPgvRWJMh",
  "key25": "3iNdu6BFTMcjz6SLCtCFqpFpfRRFSkJrtnutFk9GxUs5TS1uZX9761b9jwtwnxSN16Ddc12AFHmYst8VdKc9zRrT",
  "key26": "agsJ57osTzrLYZudzz8sekBpuKuTEDCgKAxMmRXPRvgpJ9hYufV3ceWJQkDkaUxKKKWurHTX2WV1JA1Uem4jWkn",
  "key27": "2hJKvjvY6VB2HwvuT9QAkJYXLGPvbDZUXroyjhYWWrEZinaYNMqnuKGDS7qqUcaWaKhyzLLJCB54PNTkS3gRg2Ww",
  "key28": "MX7TUVFovNew5eYUbxV33KDjt4dfujKqLtLtX6XEkZorQkg1G9dVsmtcNKjBSDYZ6Bwi5JunmJstknQAW7PtE2v",
  "key29": "5e9mtV4ggBPBx2Hxre5hBYiCqvUpvAR1nMJH1drBJNHXJYcvZ9ytbzS59J4iLKmXoEinkqz4yfp8CprKSEDfTgFE",
  "key30": "jsU3LSu6q9iec3fXpueLKtrmF7JiXT28jzxYdbUNzESNAidHwYvVjkAdfjnjMxp23ppDmdmPo4D8ZmNeJcoDZjU",
  "key31": "2U9yDyNeA86Hs4rX2SsxG43sBtRXdkfzZNghN4ZtqJoC9E6shKoiAYh3H6xKaumgrzVxYHFGuZTUBk2QiHE6aSoV"
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
