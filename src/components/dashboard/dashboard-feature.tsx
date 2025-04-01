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
    "BotjQaEv12tyLhu5ZfxHgHy1w6wcSfPyQHs1EDxFoLC6qrCn4XaG3Buv1defHhs4b9cGHiLeSRdHSy63FcZsvqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MfGTibZvupqgitQeSEvZbqKD46Z6pTKKk7LK15c5hMDMD8qwMBy7osNbBLoenS6ucjeLPn7LDai7bLo5x68a9Mg",
  "key1": "41v39vzg8YWAbxwNEJwACQWdhbSqWRik5dnUDqAjCfMpN7PwhqRDRMfGmHPx5P2qdXpr79AjGJhg126f44DaahJA",
  "key2": "2isGmGbs1YTZwCrajtbHnp3kU3k1zZvfHuLPAYyTAUPqkiSDGka3wnUrUXeh1WMWntht8Z3QEPFfSAikgNPEmVcT",
  "key3": "4DfUQ6WvzMqrix4AA3sDLVVVtLrAzgjuS7Yjtv8ueywC4qv9ouXdzVcBCmm9YC1pu9WscjZ2ojuDSebRju354A5P",
  "key4": "5u86b5aUD53Btp2m8tyA8UiGBRqVnk2rHMUqFgP3L5k7RS6okeb7BHCsbR1f5DPaymkK8uiRTEuBy6NW656fwE7Z",
  "key5": "NRcywiMbPkcfxyDPTJ2KHxt4cC6uteZRVfnZvciCu9cLScKz6j6YmGxDfcEqi17KmsJMcSu3cjjTKRV4Ud5Ra8F",
  "key6": "4iuv3VtjVDNM1qph2P7PTA3oqJQj5WmUv7L4UxP9H6Ci7gPjndWVfFbow8tgt7uybbZDnThGaFQ9GwsC1fTKUVxU",
  "key7": "4kkRkwznLoRUPMLnu6GdjU76MLGYZc4inrXKQFJ5cyZFcWZLci9tqrQujRocQTgzmnQjcUFryWouqATKjhAqVawJ",
  "key8": "K7LsYFZPmX4wgnPzEfFutbrKVceR8mKizpeqNycbvE89K4ZmVH3RKYUwdgpMzxTJvCMmvAwy7PX9KJAw2W1VASv",
  "key9": "445K6a8V3JsBtADG7SM61UtsXKDsyr93Q5UdvquE7YZ135R6CkusQgW4SdpS84uaTywT7Up1wWNraUu84DXPrEvr",
  "key10": "4tnShJzCMRzFQbMwYPvCpnhHZCnvA7a8GXSos6Sgy6DRZs4opZJkgrqhL6ZRRaLoDBkQ677Ak2DskFciNmMBcysD",
  "key11": "x2fVBswkf2X7AJZzmGvL6qZgpUwG59GcjcyRty1Aigduq6Fxas5cZdyoCsiSySrtRxF9mgwxzpcET6SKN8DAFCd",
  "key12": "FT9b3wfZHSRC76c6Qu64F4MwrQU54WcSVMCUKMj3nZ7DBvHtHkctKG7sqCMMrtGGjFzey8Yj1E8oUZwSKZ4yUji",
  "key13": "63WTtVCBLUPykcPM9ixMhp9orMBkRCEhzcsJEccPjTDkriYC2fZ8LFp23VhUqVgwqekngFzsGWcxU6WwCBLMV8wD",
  "key14": "5m2SVh8JhdYPXtkVWMbzASqktcTXA71zvu9d254MhYy6nkyjzvjJBRbMCistiQRt2gEsP1WzfMYwm2oHcBH5LssJ",
  "key15": "4Ynr6YhcKQ7zVmBNDn4VeSczjCrvuJpR6rW6domYUn8RRE95u4k53Rbdjyve6BJ9gqQcgMpxnfZDt3NfkkTvmZPn",
  "key16": "5nuwxPQUweG7aCV7WeZpNQMg72dCHSeSnSXtcVaCx5b1haD6RZmZqN8h1MBre75Y5ABaUm6MeH24Vdu8fCMRbmLm",
  "key17": "53GT4rThX2oZE5izLoXRuoEFAsYxeL5swSumckRv8eUfXYrPoudsYtaNnezAw6c53Q9ZcaB15dQNwM3ETvHGUhU",
  "key18": "4ogucbMxYkBYngnoTiHaQCsfHMkmtCmRXrVAb7Hb2XsDfeJojhJ6eyKaozVRaBJM7N6oLj2mvLUj5HJaYNUmbcRX",
  "key19": "dC9o1NpUxjSrBGcoSq6ds7kFrvkG1rdTY8fZWkaPh2mNvukrk96UtaSyFVPPhJ2aL5NHbvTDZBtqqZcrpPugZqX",
  "key20": "vz2HFfePB8nWVb2ipwVaKpveozLv61KFGzF8XxFusgT2NY1hijDboBujGp7KLK8vBoyaQqUtNn3hrhKErAiyoex",
  "key21": "3Go5AK7dNVsRguVZWds1qjc4862f4g8VBPeXM8ZFCZ3ekkCLho3hFW9wUaPHEcDArc774kn4XQDsiXYq7FmjRHNs",
  "key22": "2xk3dnNgowkcqVXwcWVn4YSq1X9RDotUmSNkqySSVS5xXdxW78x7d8VfNMu3KyGPyJAR7pU1pLarr73TzxACxvMb",
  "key23": "2cxpenwFKHzcSFuP6VVkdMMA24rLj2A6q6kz8xjP4Qbd85bdNfEaAbddQe97EwBV7G8uTeBSTtwGBeSYtbjpCE9W",
  "key24": "26AKYFRE5h2NmRE7KftB1hnUqMnNfMdgivkS5N2YtuU84TvitM9Yjt6aRJAcSLrKyyg5ray3GkfWHZy4pzVnLjUE",
  "key25": "3HDMbeqH2tAujnoeRnBZ4W1pEgYYvfdtM8SBAuuyZBKeuSQAr5dZ5nXKLdq4FBdBYTyaY1793GfM7CCjzdstWCR9",
  "key26": "2CxPouGTJzHSLEra9MuJKHZQK7YDxbfWjgKevAwjqMSqncW2rFmxPVfu4SN6Ei914SYDVfkwLmAj5zKCjHd9t67o",
  "key27": "RbcQeuJrDfQ51sZNLz9ogpuKb1LCugtp2ntnWa2otsp8LCvQkycLxMgmH8giCa7PaEJN9CYcZ2cxaUECaXMSWfR",
  "key28": "3wcghaAbyizuRFEZDiyWC5FDGdsboXCWEsm7RaFbNPPPyAH8q6dyBD1kut2vAJ6dGBHBsHjWMLQ8dBVErz34UHTY",
  "key29": "4QLLMVEidkpdsMbVuVrFaAwqqQD3hP9b9Y8zgTjGnpo6F5rkchNy3n1wvPn4tUrjc9mkbYFPjnRDsMTZUnSXUpWa",
  "key30": "4YcT49pPora8Jv8pnpwiWJHHuaU4ZeKEdka7kYVBpKmwpKZsSN5uM15YeJU5Q7g8XumxibMfHsR826cvxfmTcoXz",
  "key31": "381FisEF7RumywPS3EfZ9CYqwqNSLbBi45iaoYUzHq52knKHTgBzrPWW5L7ewWawJHBsYfJFPs3cWigT6PPfhbYH",
  "key32": "3uLmqdXaJoexZuTsLed1iTjqQd284znLrAYAnAFP75Ze5UEQjGZzkmud8pKbj9K66xosarZc2fv1xz4b3MQJBHvY",
  "key33": "U2k59FNbm4ycUvhbU1YWWhch9M5qS5iL4Rmtoeutpd4vZ34foYR8DQgpBox2N3CTxr6vwAyQRcoGaEXoVZkHLfX",
  "key34": "3S2aemE8VZnvtkRGZDb4ybQqKCCVKSABJdea484Lp5m7mQCt8r7moY6Equ4RTvF2SqLM1orMHPJBg4tSbdnymCvn",
  "key35": "5dkf7AELZNVjAedEbHYb4aMdm2djvtmi8Yw7R4DyYdXPgoMnZ5C9mvAfRANzSbiZprurt8f9aMa423XwVifLCkHz",
  "key36": "2DN7KVVFueQGU6Am7KZbuUaf93kKrCLm4nxyeTSUDdwYHE2J8dTemu2MG4BhKvWsSsooFamkjDMwonJSqapxmBio",
  "key37": "2Dz6YqHuQKov4LjuUhiYmKXQHZsrCpfer1WysHWYYnd4RSoiPKJhG9CKkTjXioyQN4DdF1nduN83NfGK8A3ZZx2z",
  "key38": "4UV6dGv99iFsLGJkBAUbJEvz39qNUT8HWToS42wvQyLKjEbZ1T2VVdhkBYAf3mqSS4yVLj9ZyGpEKaBKm9Q3FNRd"
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
