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
    "T5rRwQDtvsLhr6eXDkj1R2WE3wKHqZKNww3WKCRaTAMUnrDGMKpicQmcomxhGRRgjouSmSiTzCj5bUkjmzpia9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YQPJQkT7AgRGFbqMCEmpi63fMHidbzsRLALAApTvAxCxqbJCayfPZbtpuQEVZWNUN1wag2etfRmhT3E9vTmw24o",
  "key1": "2AZxwdSTaD6kXcZHq8zMrRzc83YDKxAEu15kyKR2WoBBSpuCAYdhzRTyAdPC3bohLrngtQ2iJ675kiyqqyjBNfQ6",
  "key2": "4G1HRAgR6Z7VPDvhWn85zUdP8oD6uw547K2CmKoaPdyXa92AH7QPBAKtaNAbMbPi89pV1NpjBEZNx9KSFubtuUgL",
  "key3": "TJbyZEn6uhmQ7PAxFbeDpEwa52AKwGpHEoMMK5cWfFBkQPfjYa6s7C1gdD6Ui4ckzUm7evaGJBf7tbvGTQAJ8Hz",
  "key4": "2ovnmGjJTjSS6aC7CEyBPBWZgmHzPgpE3wrDk9QybVv3NN1gM2PeQyS5CSExNYrzGnFi9b96fCyuS11Be64mB8Wn",
  "key5": "4S4KvEG1adTPLkpMREmaH8PawSKPXGgvTzUpWqtmGR2NoQseFw5unwscKhNioyfWH5YnUR6RjY3QhSEVjRM6afGt",
  "key6": "3YAQnQ877zwG185g5ictymGZoMV3qkZKkj5BbWgngGtVeLY3u4NW7xBbVVL5ysS7wQHdRc1RcC56HB9E9MgPMa4M",
  "key7": "5kpNkb5epK38B79KumGhFaNfSAyLt5NmP5eTkq6MUCuqDScvQwwFxuxwaeunu1pk6YgkEeFSzgsNtCB6wmdugJAK",
  "key8": "4fBXYBY5pSMTDXxFnL2CUSuDtqCmsHxY55LEaFxXofzqspGYuKinVaDoUtYXJN9ZcZnEpLxBMofcVPjSGkJBGi5x",
  "key9": "5KuwX1qnReTaJQTcwAT9B54ACJZi8zbvCKrxdZ36oM1nhnJ3PTSqRxgsHtkjHeJXYkpCbqpzmTTaJ8WYSRbgR8SZ",
  "key10": "5e6diqaFrhrbDxMFzpVJTqkg5PxtyBP2Gw8Dp7Xsxo6x2DyFBAtGzYM7T7GYTukHLhYGJvjACGDWFFdQzYaWJDsS",
  "key11": "4gBgTJ1ULHn4YjiB7fWZ1XsjWaCTrbNN4Qq6gyfm9cx3QuXLPRUA7pJrWnGNfXarQp1qyyHjLi8Wepc1owZhu1wY",
  "key12": "4X8brUbw5c9Y15NNCAgYSV5qjBNkvczLAWKHzhXyaRvhpvxbrbAaY11ovjUn6PvscomVBABwyjZLq4XYi8ybY8Nf",
  "key13": "5uRWaeFEzr8t3xnKVXi3CLGfgiDof6ZbLsJdio8om4WC7zc8eUk1NBJRy3cdHg5bgFtQrt8rbF4d5WyBQQEo1PMU",
  "key14": "3oURCjbo2K32a1tbErvQ9QJ2qKsYGjr3ek3bJeApT2XBbjTSsXiCSDXWWoM4Mm1p3qq56Jv1tf8fiK6yTnfDt6bo",
  "key15": "5PGucRmjpHSEXZ7yVdFXGNLhePfBBbmtcARdCVBVF7FaEbFY3GGiXRUoHdkM425CZdvVbD1jc4Fji9cxkANFnbPj",
  "key16": "5UsBDXBiE4wQEtvqmT19fSPA1FipxxuyBetXSWKg7MoeoMWRGK8GY54bWAvnsTV98wE5XMnL5MziPSXGqykymMmJ",
  "key17": "5fzeWxZohNcwvnK25i7MyVaACAQkcWypA3CNLGa8FNdep2eJUAThSH2i4jS1ah97wdu88FU5Hi8w7pqw5rNdDof8",
  "key18": "4bg2xXF6AkLku3yJ8kndFSMUMtVX1Hm6dAk5DTywq9qpjA212iVNnJEn6cJbzFjz7g5YXyDnvELwjP4ham1khtVq",
  "key19": "54rihFyDCUGmnpfodUTGCaCT28vTxFmFMaQpaQZZWehPA3qr56MMhgVfC52WU8XN9VRM8nGjRvheHoU2Fzf7TAij",
  "key20": "5NoSvaXjvdzZXuGLLZFutenmpZYKqrtJPky1zZARcigvZrxFKmLW6BGx9jtMnzjpuPyW381NdFmRSWCR3rzEVycU",
  "key21": "54LPdF9khef78FyYTX81R4MzUfwTz6vXTJGfGTBbTmE6VrcjwQoYCLD1gfuVmyknxZ8tKwPzTkVj3DeYLj3LGSA",
  "key22": "4uohj4CGiVP6tcGvN8GKeLJ5fARcjNHfnEeu1tDpGXqGNuGUtE7JsqiKyLL6QfzCdsyHvbJqV6qKYV9DNGVAjT2d",
  "key23": "3M8XRo7voUtM5AKgQeYHxN2Th3W9RF4hswS51LWmQniG1MJsPoRNNG2ZgSbLMhXpBYEULytAJVPNFoeGt2U764wk",
  "key24": "4Nfr2AT52fo5zbXS69PvDwb8uocgVPaaCCDyAisqMQvcGeamJwJqUYgmY3NB4HXjVRWxeRWwpNTXMQqtUekdDvha",
  "key25": "5MjQrwFtEYBUC1mLvEbtBuGaQAX68JE99cHYPFKq89MbnDZ1C8DmitNXWd1ttLE68bdNseLGYXbnxrocPKjNpfMM",
  "key26": "3DCPuc9U8cY4GRnGwY9YUr7vMdkqUwp9jfKd6dSUGkt5yv24QC63p7merjbjRwRHGyDHoG87F2NJAz15n3hPZtFs",
  "key27": "46oAYpjGUxKgraeGV9pg61aCyq64nucSzozk3TpxswouinrxnkUBKGn21ChapCanoEvznp4wzCs8wpa9FrqjfMAE",
  "key28": "4CQdUcuGmAyjjp2QEjKqjj9358SEaEJPACsduf2ACwVMhkJyr2N6SLRC7Ap4KKrH8SgGRxVTpaYgiD6gumsUXvgF",
  "key29": "pzRzwwf8eEiETpmT2kHJsjgVdr3db5us7b28xP32ymqQkxJ4WeFbV97C5vacZR4PLNEVvrj5D1RHvd4M9o84Kp5",
  "key30": "33NTjBhNN6gbKSZiULEf9uqj5mdJ6GNkNn4BZzZ5Z3ZNm4TMfnsj7i68ZMxRuFAqibfhs5oBnwGusnQFdZG4v7qV",
  "key31": "4HdhJyJKddyLRg9JDKTJxv9Bp9HjFUqu6tmBiUcEEcWqvCpqMfBpL2X2UsMTrBHA98FY9hboRHXhJUSqsmFKaVos"
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
