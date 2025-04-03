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
    "vV9o1UxR4xanULDyBQQLYY7ENX84H4gv2TVr3PhKnGYMfPCHUmX5bWcTFBLjFcWoUwdqs93mHL3eHoBRSnwfd4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53L6RcbVBh56NovCWTDkuZVM6koQtsJ9qCtENjUpN9TduwtKFyXARhSRqcqssr2mXFzgMv1WiQm9zswZaBTFzSm2",
  "key1": "65E5BtqenStuunGdpxeoK9swuP9tmSeU4EbRQq1dvrL6hUf8o7fypxfpv4E4L51aiFKXQdv76AJj8NPnWR9vKinF",
  "key2": "3pkGHgAQWpBQwH5hPrwmf1D8Xy85fuhwTCsQMSUyKw5PYGPPjzpPYmsyf4N1XdxqK4QMWaHyuuvwW5BmRYS7khfi",
  "key3": "47Xsidd7NCeFtJs19Kp2494vyjkpxiYXEzzpjeRTdXGSicNAVQWpiWPkAtGC3UDhKf5cwdyWvUNYMgFySv1atfJj",
  "key4": "5dFGvN45ae622Q8PqzuEW5ppsBX3NhCTcsNsu1JAcfTaVs7kHkrjMaZ9LB9wYsiGw5AS4Qr1CM1nQSNTkLewAQZn",
  "key5": "5xey52WjSadkwMjLZdSwm3q9wNAbLeT7DBU9BapCrkRyszF3TKHD35ZmcGJ8zH3Yq84ByYG3265nXLqLa5vHfo2F",
  "key6": "2Yky5QvzT59Cg28m7AQzsauTVYMeSb9sc98VMoHDQeBn4nsDzhu34fUdVWYtt74j5j8kRDFojPnzdartUjRm8BJg",
  "key7": "3tYaN1M3WvYF4q8Sx9tTVRJaergMYyBhhxf8A1mUELvUrnTrfHH2WvJgs5xE9Tz6eh3hXo3Ud6LyWQdZPGu6o2Pv",
  "key8": "33Mv4NwFcVmD8NDf2uCzaFqx3qgc9VUagDaf8Hrh7tLr8iqAd8rrBRWRmi2bzCmCQtw6PBM149JYpeJ4Pu1tFax4",
  "key9": "2nX7Jwj9acKuG9uFabtou1JUEjfXHMQhDt1zF2AABeXXFrqYd2aPynQnWJ1qEWe1knBfRMsqHNHsR1rhAMdVRKf8",
  "key10": "5wPDFQtm2tGvEmGm3LBoyrAgL9EJJko76jMvv6B3wop3VkAiHKFWLccnyiXKBrMfcEedpwSDb9Z6GLUgFUfv5YqS",
  "key11": "3idvvafkGy6mL7365xzf4rpGcSDnsJDh3e4YCbeqRY51kpb32VTs5wFKjnTuw5x13vZRwQZAPVemVtjcUrxT84EL",
  "key12": "2zBqq87eD2RFZYQRsJmgYNgrLjhQGWdiyc8YaPGs4R66LShSJSCDwoP6JHkZmPLmScWWMHeJ34isizp9zYmEroJn",
  "key13": "QrL429zg2ZHvYsPEf9ApBT2rzDPQCQCx6E8XkYkvDcdixVXx1WFCtVwSrgaatyDnTp3eagVnS8Ce1aHZ66mWuUq",
  "key14": "2aBKc7g5ZLS17tWfxiX5mgVx2ZCgNQK7vB3xh8543yQoegD9kTCAvPeiKxVanfgpWR9UvpnWz8hjUvmcV8ufEyr7",
  "key15": "5q1ebrMfBGt5atdKPCPXVuRn87aVWEFCfU1eG8JQJXQqEdaUfWHpqemQghUaGtKkmzHNUmAeFpA37nTBGCYPcPNk",
  "key16": "3NVBRmc6uSr92DBfvKbaZ6y8GZHqEc8QR8vKoEQVV9SUu8HNiVmbwf3uNwwKq4WjcZzaUNKP5N9mdbMWok4ZsT3S",
  "key17": "52gaVfMqqbfG1oJb3Vjf1oW6rqrzVt4syPkPLTD8Jd8mKhTuQ4ACEontVbD8coyo1r6Nutop99renLzXB2VQyJDL",
  "key18": "3EV4Z6hNx7UoeamjjkMspLYCAQuDkdvC8BG28A5AUDJxqtAQ9aKr7EWDozVmsjNwyoxp2TPEFZC15JMrPSc6AHDp",
  "key19": "2Ud8wBYYTmT8zqpH5khJr4Fs2k3jdbEta3bPhb2QRbhqBoHTqCo5QuGTKVquKh9nWMxQP9UfF1P2hqG4h8v6FR9p",
  "key20": "5aUkf8WRDaBgmG5jWjop58V4YYoE2Tknsj654sxxPTJHsKD6hi2zj2oA3kz2TBa8TzacmVyGzefHgvcgyqSnGaWe",
  "key21": "2usr8CuzRVjJ6c13vfPqFYwR1sEohtzBAifk8RdhpMBPnzNy1C5EgJxsu3Xwb3zkEHrKKmwgbmH9xrCvF1PsD547",
  "key22": "2FQWNtQCJJqhyPFdcAcenQFPtKSSj1TEojQqQThSLUiEFXJFgAmXLdzySu7cPnhgGcgwUUG1sueXAbSKcmLZz8Lk",
  "key23": "2yAHYzkMJPexSJ9DfRTb94Y1DZyUZ5zbnHGmvMaFBiwE5tUX89FrHBDXR6Ww7gcukwysNm29PJSZALgE5EN4cDPU",
  "key24": "4b3o5E6eA8HQeUFZqAtF1zE3b4Gnr5is1ZA79qQuHPkbkjRg9kZfbMA2EprxZgBsmVPsepm7RGGUPaDXE3jNpQLA",
  "key25": "36Xf2GStpLruc9A56hczwS7ayepTP4oCVdzfQZACXmJKMnofiTKWLnj34t3gYu2NuUjGMJZr7LmfsBBYHRK2RSrU",
  "key26": "3xG17kfYHQQzKjdB5PrDguwtPMezAXedyVKegfmaGknWNMYMGMyeFdh9Btua5CJYL9Ax6J6uZwzwZ6HfCBSdRRg7",
  "key27": "5cY57738R7zL4eYLER7gVaZGtUTB6TXC98L3gVt9CffpgDQG5gPmuDhEPnCWezsqVswSFbSXC4yaCm2nX67XtdLe",
  "key28": "4hmGcE1pd2uxzygYbkmUWH8fWA8c8qnJQP5J7nxqxkYUXuWucuVYuSTNmPMcJ5ehiecH1vzJ6ix28RJ9DdVp5MW3",
  "key29": "3b6cGYUwfTLd66rDDRq9mSsA8Yd232QKQCWjJiQqxUkS2AJpz8WKhuZjDxffRz9QEDMmrh6ZSgL3k5ZGi5LTh2Gs"
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
