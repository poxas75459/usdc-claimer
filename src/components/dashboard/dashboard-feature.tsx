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
    "3ipWNnwT6mf3dkvENZ1Ybws1ob5R8VSdKGNNq5dtwDqgBZ3FvV89mZMr5Y7PHAnknb4KFw1wJQv746vtEpJzvww6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBmgCLNeDjn6C46c2x2FBHNRSeJYvz2AqZQrjd6qFsJG1zH1xGbcCLDiHbKuAdEhurXg347bmsNBQSGQWzifbCf",
  "key1": "5AL7ip7eFEFRyt96MQC2KgDoaVe6Nb5HqbEhnbmxco1a3Y8uFHwVnYk8DMcy6oMsEGrqmEndW4dmNnGD8dyxpdfY",
  "key2": "5vWEbB7fcv3VLRskmZUyGz7Q1n2g6bEyhuN8QRqNbj7isyWR4vrYSdyJzSzKUPk3k9WxrBfAr3XhH8w6DHbDSJJh",
  "key3": "4N3TeVofqU9M1upxV9dKrqzaSNJdTBSUQ6TTnwDDaqs693GeSkd4dENreUo9Xb7jSXYFSZ6fwFQCmzk582noBnCV",
  "key4": "5nxgViwQsEdJGuPe9H1zNzZba8aY4WdMaoEqvMw2g1cX7w61jMrJ2ZZEH2ZNDMigczerHeb7jeCPw3FSkM8GxL2w",
  "key5": "DYkmGzgyqia7gQWX6RJUUu9bkoK8qnxMT2X5733q8HrL1Uis78XjgmsLp666A9G1CGvhLSffocXTvj7AKZtsJL9",
  "key6": "4yPDUDbuNtJui5fcwLTEhZ9tuZd4MgKuJELcmJa1hdEr6ts8C5DgkNMid8EMBRUjNgbPgZ5YZPYEmDeiXimRTKUh",
  "key7": "3h9myNtKP7VaZ8TwUqfWH1k2odqj33NTJBQ8jeRtARo9Cgt5mQ7fJW5z2oovY8WV2FuqK1f4JzHvTNgLTpbZ8rmB",
  "key8": "2J7uZwwRNUiFzLBEuxTwVRP7vWk2zawDPYMMdJ3SaU71NtcK2yqLSrWFXZSdBfq1BSQCRWqpcS6hyCv7yQ2yjZWv",
  "key9": "837BnDHDbKTWTSxf4YRbUs9p8DbpNkgSyqX9PftjeKfiRmS9DtENDq5btiztUPBNzbzLwh28cV7m7uGwKHB1mQE",
  "key10": "5BFABNRN421kWTHwFgpKPmyCnP3Y87UW6HG4YBXS5Emh2TnT7fJBnckzpvqtd5ghqBMvmnc7bVxNgRuGjaWgrqSZ",
  "key11": "5S5A78SwjntHts1SDvFYT6GhixCGXXHsf8qJHUa2Hsz7dB3CpD6ymZssbcnHNpvc8iyZXdS5TjnSWJnfmMJ4f7sK",
  "key12": "4Qo6Ye24Eoioz2RA1BYMH7Ec9knwgPiUXzCCCac94ZeqmXXfKypAG86w6pKcmT11miJfMSVDLYpfLoWKh74bWMhy",
  "key13": "5kbAUGfKuzNdJpRXS7HfoittDwJzaCVjMLcCiZw69ZQCEr5mJxtWeqj1tAdDhKkVNPDNSu1EXLuTS8GohPgjD3HP",
  "key14": "5hKyq9YKLkeqaAE78vfP3a9Rfc1NNRZRZzLZ2Zajn9AADfhqx4JkZ8rGwZ7arm58HdHGQvsCyJkTKYyUtY7Zdres",
  "key15": "4q7zJX5DgVniPEocQ9HzcvKLbUp7mtqnsJFkXtRuPbDXGNCRtpH4Ehwfnya26vjjs8poq4AtZaDrf5UBD6CWPrEV",
  "key16": "Cj3f7ZynASwVEuXqb61rR2BA299MxZ7dyU5qbt8NN4Xai9hAbmkqHm515t8dwEY3vrkMYgJjnRch2epyaEMkSNj",
  "key17": "3DAcuJBezNeGMuF53FaLW2ganWuHoEMGAhY1rjYw5tojF9iysnyN17Cmt5s5BvWrs9mgn11aF5rozeR8HEGVq4t9",
  "key18": "29CnEKzDHxJLN6dEettwRyQAmfV5fcFCo7y9vGWfwyY2msbWQMmnikADEJL8ZfPtcbJpiEGTLbAZL9ZeEzupZMSr",
  "key19": "2zaboAaVAf9PqidaFY6C4St52NVSUomLrLsmRsDuCNCKtuxj1CQFBJGt8budC3Y3Bt7EFoEab4HtPbWx3WKDhDKs",
  "key20": "5Bj16CVuPr4FBFPKX7kHo48Q8WzXMWGbGbUgCGnSbfyrjhqH4qxeH5hraKFCvKxgrxQX8xB2VykjA3J4xP9wvTr1",
  "key21": "5gMJD4Wx5m4eGWhauimgSvf52PhAS7mP14KxJTP2Rv9saKtAkoScH8HVegb17NMR63pXtDoaLLwS7d668jtFZaQR",
  "key22": "3v84UtmicG3ZiHxVLLY1cJSXwyvwQJH9Lwum7eE9i6dtrBd8bKp9bgT6MCtageMqk7E4PjFt1vFrT8rTQAm1QDGW",
  "key23": "52GLKDFgZMh3YEsDfRwR8dmz8DmNSSY1uSsBNSnyhwWenWCXZiLu3y1AaXAzwcw75TJAbsUJ3DQnroKYUbtSvova",
  "key24": "2tgep2vr9nrfCZ6hDFjs4PGdzbVnFqPJotj7J2uTBgxZR6zfsKsH84ZHHqc5A1GvLwCox85bZq2dmnk1zewEft51",
  "key25": "3C2N69AvUdVS4VNDvEtdWMZdwu7o32uAd4TxzHK38yDSkPgEQRvxgjmFdPqG5cBhJaqFFCZuhd4eUMYdSHA5rqUJ",
  "key26": "4YY7ExgZ2WhqdmyDQeJ2ccbx3hUT4HCDCeyw4STxwoqVz62fmWSTaC1ccivWba8oTjfonGCmoFeDU8ySnkGaKdWQ",
  "key27": "5dWs3k3m3j5eUVbAZPjXLtD5pg35r8vLjt6NabxpF4S6nv9iEoMJzxJtPRYGDXU5NCpeEDsN2QYLcp1wpYgNnH3g",
  "key28": "2EbW8ph24WEU9Z9ec4g6UqHqKNG7C9eqjkJ8EEwMTdfi8idjhYjARhf7m58SiqhS72UokH2uEKN43JCg8Az3k2Ma",
  "key29": "8LLevhyPjaS6TMfTESFERmhyt5W5DCVv7uT5S4a9ETfyRHvqhn97xnWo3n1bFmkoQFqJc8z4Atud8BaTNVVfxv5",
  "key30": "3usgtN1wr354w4Uee6p9FajTp89AHLcTmuGQyeGfu9YxvTgCBQDXCGwxLTA5qqEXAD38BT2htR9p2h9ub6SHvsCm",
  "key31": "553mbqt5MF84q4xocbSHRduPS68hpKECWuWuN5F8NcRqxuDJYF6E5Uad5Qy7eFwnG3w4Xf2gm8uodcnSXvvv8ejj",
  "key32": "63GHt7B956mWE12qPfsUECEoGdmtjbK8TwM7CiUHcoDwXi2ovSZyhkZ9fRARey3HRGXfAuUnZReeBvg4peDCkgyV",
  "key33": "FgUCn8KZMhcC2HQziLwgZ4gXh678a6nWEGyH5Q9jp24e6DbQ7fHEsWKwgkJTyWGwqCAyVNkc4XAhuJQnFR2x6hh",
  "key34": "5vLA6xobyMEsxmCo5hv2Wi9fpBUGB6z32zBNDbWHVh5uKTvdPyKKBFUR7ihqduRVg91uH6HeW87HSZpxrPssuX2a"
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
