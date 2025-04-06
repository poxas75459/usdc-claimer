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
    "4aCxhF626MzuV5Q4GrcyKr7eKNZL2PBEu9fstqLgewDGZAiinuTxBnVxKVPMdmH87gnpnB4At9x6Cru8spEdDzg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TCwPzKNUUWXMnJmMqzazqdpSGqW5utf7uj1iEe81m7LnffUWt3rAsqyUUyRzwRQyf7jqCxQthdMPiym8nx16HAD",
  "key1": "SZo8oMRQVdRo9thpcukUQ4Ap2PGvtduiYp9C5MxYgUDWebbvj4PozspW5J2rZ5z6cerhX6RTpsoPvSXUpeUSMpr",
  "key2": "V4RMbUXVQzKEZhGZSfMcmewcMV8L9himaEPwMdYKnVahJsJat8E5qStwTQ7SBcjvDxB6mKVp1NkWRkQ7aXLdaLU",
  "key3": "4zYaZJyABWuX4zqRPNYHJ43Pkt8qJf3EiRS663hmppVzveGXPCxhfWtCp9NAwhKYYp5o2bZwzNqKyskfG2XuVYzW",
  "key4": "5vn2GZi5eTK6YtQjEF9DynxbeUDLQZKmvpfRhuNbU1Q5eE78fCGMZKdEXMqMkLFzPepvAswYcd76q19rjYJ26CKq",
  "key5": "2N9q6CFxoRuR4AQj1xnmg67oQuxF1uy3UW2wKxL3Bmt5g8MQes8Z9XPXVtfz9r9oAYTR8TPghzpGJSaxMLw6WH6u",
  "key6": "jhAnTqFmcBxCPpAGqwXZpF4xfgK25JM5D22MhzLwawxNF34hEmmMxqQLw6YJncrfZYiwdbqsxRMXY2m3ZZxMqz8",
  "key7": "fy5rEebM22exPQSfUfurqSiitMj1Qt1xyB2gqMMJFLJmDfAjEbqravL7QURWKMRFa8u18DCkiQ8BnNgfNocE6DG",
  "key8": "4EwKmX7dGzgrEks3wxrk5y8SDrGPSrfjzEpG85cKbGyymeDvgaEwjnxLK74FUELmZTJnF8C4WUMveHkuJVT4UXLc",
  "key9": "4QQboBBGtiPWneP1jKX2k3AdExJFN6dx16sNuySRN1EN7XFVJRhcHnRzBCV7AuohTdVoPiPy7daYVPd391PuHzwV",
  "key10": "2ZrhNNtnaYCVpTWqDSNp8skjPbfqxR2rb4Sk6P6VNatXrTuvwU4hn3eweV1zeaiVJy9yf2sPbGfU2zh5iiiaFCiB",
  "key11": "4B2kJ2QiYUL6LiJmWJZGffR5BM1J2E5qv7cm5xB471o1B5Q2Lf6zysSUt71oVqj2zCkw4bAxSYinQzfGCfxo9T7b",
  "key12": "8xx9qknsPL7Zf8MuMPvoSwm3jSatSDZWW58siJupAfWPuNuPnNP7nxdUyt5AiNCw69y66qJ1P23qmmvQcFa9Gto",
  "key13": "4rrRQPo5fcDkMZFLQD3gYkTtbvc96bXPDPmWdzFveWDd8PsWB3hKRvHdHnrTkxGy6H5W46Zdn9KyvTY8y1Qsfw5W",
  "key14": "3zQbpvKCuQngosVbCsra35SxL6uJKE6MdGLwEz5KUe66vX2eYwqmzCLXehMrHZkZyoWuLJoiKiHhWuUoWjAxxyn4",
  "key15": "3sTVFy7RA9CxYuRigtb64pdC8J2F3h4tzQGWJSHLC9zoACzY784CEk1FBkJ4n3fH7cGY4811ZiRup7P3UQZZr2Uc",
  "key16": "653w1AQ5Cgca3Kko6ndtbxMB9DqzKZHWK5ZxdgPwQ73C7vyKTGmmyRQrKWwj8p3ENWmhsCPjUiuzrrLJgGYLXkXD",
  "key17": "3vevm7W6TfDxRatmdtuxqSXGZXb5wB7QieEE3WFZBZNhmVdXrgYMpRnbHx9AhTUk9H2QWJANXMAh2bKBENJwfM8d",
  "key18": "KtxA7YEyWLtrcCCDpWbsiUcKdpx3pgYVRQRufBe47YPpT9nvGApuCrG6MdaMS3zwq1fDFRtpYJkQfsxK3tqqkEC",
  "key19": "4PpBgMCteaFPYo3EJVRwJbmyRxUahh83XdZQBQXCseH1YZDXQCTLk9hwVC9Jy8QUGC8qyjYo7wqDWFDWcePeq55n",
  "key20": "4JmtrHWWL4ghHCYLRXreFbzGf2qu6aXcnRCChUn8HbkpzfDnwyHijLWcETej2Lk4ca6YtUeWNCpbyGVYDFsoucX4",
  "key21": "3XGaz2ZD91qL8AVjSVARam18J25LZFjqmPN6X49ts5De6Rc5zRwMteR7A3kxLJfNZMrXTGYqmYVEBNVMAF9GoU17",
  "key22": "YmmHP3WvDVqKyDiXBTksqrCSxVrYdKicGA4cgUK8iQwFZ4s8Kf83L8o7ZU9NgzdkygzUyiDXuiW6nQdLFBZGkGh",
  "key23": "jhtawRY7nSgyyRaRgSXLrdbtk3uQSSHTVHFzJ8jBDPfLLijP2nukQ2fifnqhBMtVRtnBQDSHni9ygCaVR4ZMYA3",
  "key24": "PnrLhyicMrchNpL5E6NTn1DgVwvq9nwMxRjXthmQqG2W2bjLRZZR5K5DqWWmdsw8tM6zxYMnmfBcHCvG8kMfpbi",
  "key25": "3KeSaXKWmrWWHmMpLXc4WxMFXy2bhd84XD72iaNB6t9rxYW4MXkkZi7oQ4Vrns2bugMv3CwDTtVZ9DFE2SWEmDze",
  "key26": "2EG2hFPshKxUb4LYzzg97YpcJwenPuPrmn7QhVbhYGVBDzpXUd9fywRW4o32C67KYYkmdeBS5iYGoFuWaUJAcHXt",
  "key27": "53kTWTk1XLSzfyq7sFPuqnJ4wcMVJdnPUxo7oNvnohfRepNhoDzfGqVzR4JqLeuV1BKsDUPt2pFyJYarE9JEoKSK",
  "key28": "58EcqPcNCS78MTkHip9oi2EmCFJdKNm8hiiPVFBc3YdPLGntCFc7K6tSSpezYr1szZcN8nmo65VBVTZ2K6VnGU43",
  "key29": "5zRUGZLVzS3HT6LQN2n89zsHvknxKNb6M6YJVKRBcFeSo9VyLbcmVDNFTVqo381nCNkCgapamX6BjPQXeAb75fUX",
  "key30": "vvR14GuYwMW3jcosr7GeER2JPdpS8r4LSAYTb5TNm1oNPyixg6GtNaDkm9NQezMdofJbYT1u2eRpgALtebVTgNv",
  "key31": "49q9ECp7abPLpNbtyQbiadgK8vVF5dzKX7cLHKtgPiRqz2wvu2wzN3K4YP5xETuxmpQyzHm4fbgbXKgVJrEnEMBt",
  "key32": "611ke61XyJD4GknNsCf4SPCsjvEw6C9EcJyc3u3W2CS5NuvYaeZVUPY8pLw59fEwba4uQj3ewak8jkXvkVK8sJL",
  "key33": "4zd7mRu48bdDpTrMS19UpdvGu8GfT2KNcMunsaBwXR8UcyNU9kMBaK2kMmAEDbFPWmYLtmxjd49UGSUoCZvXv22s",
  "key34": "3HNDPXLfWcHvw1svQXoVZMbN9zGqz4ArRJT3yH6WqajTNmz5fhb8PgLCfBbYUzhTLnycm4hyX5gxuzfHoTiPGJJV",
  "key35": "5xb3qCysBU4nLQ36g2ncv2f3CkXwjexyL2P9Es9BLCFRJwbWfnoJjF19KwiLVz9iYvMMwB2Ed4k4s1gbn63c3cdK"
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
