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
    "4wYGn2eKz48qUFDYtpsrgpvrX8ViZuTbGP8s874LSySuiovK6bwphbne94fBGsae22yc37y78ZaN4aqpSk8hikbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zu499hb25kUCWmwBCtXQAs7B3gvy5BszScRLhnrd2g1PG5m7TgqqHoMRmokwowTXBUAUZjTmB3nLYm3mKhmZAFV",
  "key1": "YZfJJ148a2tbzqgxgarcfUY7jpEagD57CcYihbsvzfZA1Dxh2A56pCDFfveE3WPuM47a5q1pTKQZvBf86hfbkuL",
  "key2": "63KUXM4USAkENPbC3dn1sFrVjxHfEKvVSDaiB1MCQbp6JR7iGgjuuvvzw9AeZQCFk3fU6xShP4rdc6yrQ1qmHVq8",
  "key3": "2ux6a5ejg5JQnhmVKEASVvDqe5j4U4728c7YBPW7gFhGuaQTJ7GgdmKESjwXcJxJH7Sh8oi4BBR3og73MLMs5F8D",
  "key4": "4cqUT2tpcBoAM16twc7dvY7sLhRZjNeqv1KMSZDNgY7Qfa6cWD14tDKeVnDU7weJHz89ekWuciRCFcSNDGEESArG",
  "key5": "592n6xxB5QZSr9ZABjbuk2AvoF1DEWjbfoMT99Zy2RuCn33HPTYZyXTLEcJeyXqHK5RNKjLZ91NYbAhk8eT5qUeE",
  "key6": "5vcD7iHqDu3StFUkZt5gieVxBGFdAJHkDPUAjri87tdgEWSmDU9PuCdv5cuF2qPLbQU9cYi84K7ZHvdpAVhVXhXD",
  "key7": "2pKNURCvTaXtpfCq7AwANFqVFg9f8dD91gxvasYm8EW2tZKdfHVvkt6ceWzKqYDwoi7dX1GagQVqX2wjnvjKaZHt",
  "key8": "5nR4YroWYfKyuu4ZYHojXE34DddCuygHoUUjgyMXemVQ6k6VZ1VW22CBFXXr2qjigQKVHmDPSVCpbBz3RQEwKJA7",
  "key9": "mhrEy1iUsxxXuRNiaqGPB8dtHCn1BxKdwHxRX3XrxGEvsuuPYnHk3MWQ9V1KdG7oUTA7DQbbHpqBBQNYa3wwnzQ",
  "key10": "5gj9wyuPDVUZayjNiz1GAQos4QvGbDiFW9igMNMw5mJ7ovPfArBG72n7qfEz13MUFTG71zc7hvrqzgYCSB2dw3FP",
  "key11": "5FpyhAMNrQoktPZ6GNDhKry8DWFyrkoszuiFMR3w4NpwtKpqfVc5sB5zYkigQqGVvi13FKwJjYTtLfXwqJ3YXiKe",
  "key12": "2KcyZBHLscSe8L285tVSR4Uos1Q9vPV3P6Qajqoray9vUWULVdHpAHG7Ehd5PQnyeLeujxUvNKgd3HgQqHCxT4p4",
  "key13": "47aQcocoQqzoJgJfCS78jJLtHVHzejAkXWFguAn4he9a8uncEgUcgwxgcygXY8Y8td7fhacsvubnizz7bHWuGLV5",
  "key14": "2FC1AZXgM2MLPudkwLAFqjLDYXRV3d741PGt6ryQHtPsZQgS6u1AVNjfBUqHMa1hVAZzqcq4PL3B7xLiBmqFnUwa",
  "key15": "2HMTuVe15LB44pP9n7MbXXGjc3Ugt8LJ9jXHcGYP6f63QAQVw2wJL47Mg2tnrLJQ5oAjFyT2DZRiou9KcyjF9t9A",
  "key16": "34uBUNcxeEJ6ixUv9g4SFcMd48Hb6fvRSuQKKfGm494AN55UGqesopxWj7Zovvas8iGc9BzWPycpGYZrq8Vv5Pq9",
  "key17": "5HogoSBp4PMXi47MLFQFmCfCpgvLN5pDcmnVsFW2bYAcwE4Vo1G3yw9VrfrPmuE7PWCXnjaVGyXrpvfVgs8cmNmN",
  "key18": "4okSrQBzNbL6qmFzWdqyjSVgsg3bH6NkGbvWWTpHpsBcApjpPtKma1SCEthw6tJGqhn6uAuQq7nBEJsXG4VbByiB",
  "key19": "43JjkCTMeirGJU4UnFtrDp1ecQDgWn3yB5DViERwhWDDzswHoJk79VQXr1EzaH3TdiGxqUqX4q1cGe6NayLTwqWd",
  "key20": "5YA5S79jpH9kD6sRxff3mhyTbrkkECqw7BhTCdgpUHnssojRzFpaGBeo77cgzgHHGd2sRcEHRtG14Adq4HPcuxEF",
  "key21": "4gGxsSX4q6hcp59a85cogzzCyjLVYxpuNcCh1GPKAKvZnHwthGgcAyUEzPFgaRqmDimJQBtaUhqiUNqWFav1tW3S",
  "key22": "4d6GVqsQeaXcPYaa5rNrqxnarsoyVbJcYnXzGwQzTnCdYT3eP2G3mD46989ArHJNUZnEy1y2q7hZ12zNyYMiLBNa",
  "key23": "4c4CpWsCjrbVaZA5cTFEEV1BuoPnH4q8ssQGoVNJ1re6PturyyyMUhRMCPhyMXKL8qQtUkyiyMbYC5GuG95ohPTt",
  "key24": "24yM7dUdMRE33EkfYTUq8JYwyuxi9YXGuYKLaVWSGFKU4f5bvaU6ZV1QyTQK1fd9qqJqAXK2QS3EegQFiyijHemb",
  "key25": "3EQ4ZCbDUQJg1APkwcirsp3sQFKZyFKK6s9YbwuiyXnM7GXrQv1gWcJnzetLSh364VE5EKLtxGPbENhxNCFCXBtR",
  "key26": "4Lsdvd3TLWDBUwTUpAHyhb4zWCi8tSr8i6LWF3A4DH1F1EVChQV2R1KjXiVXAK2zbRF9cso6ir6YGsSWi4H9tN47",
  "key27": "445hUrNEpLAG5Y9a13qLJ9XPJmpquUibxL6Li4QWbKABHw4H9p9FSL8agHiRuCecm7tsEhouebRfykEa5kjoBKxr",
  "key28": "38XzGq86hZdBV7r4AmyPbFaGk1LCVA5euwR5E2F9fr38DGcPwasNEhC2sSaqvBh7my9BFn3icyE7Gmy8CbpasYt8",
  "key29": "3Zc4QnxuBZsxqFyLjTtUMeMSgbTN7ZQLhQ1sVjfRtiFm9oQNudjrBEHPPDt5SQPQwa7iDwNKWauE6NPhNc4YQvjU",
  "key30": "3KX1GZzvNHA4teuRcadjNNtW76gXPCHoQRqdioXNY8Y52fKn9cKNxMoWrAPfMmaMhBwusvZMtSFsZCjUfet6AGnU",
  "key31": "4pvxKkTmsnY6NKxZGGADP7baebejUPhU2knT9cBfFFZor2VorisxY63eoBEBum1w8gCyYd7hXAaDh3kdanBaSbZ4",
  "key32": "3kFtq58HawrWFp3jqMpThScjvxgAZuNqKCnu7tE8bZoVosZ2bSF2i3qp9Q1CzzF75yXTQdh8jWi49Fs1LQELu1Ni",
  "key33": "zjY4GAsxnDCxvBM93AKRoEXubdrRFYHZG5nXyFhtHAvH7hVJm6mBf4DEQsf4npsBLivKU1JWeA1Zoy46BiE1Rvm",
  "key34": "3LVp3bHA7KhnWj5FvNzCWk9xyPuCt3S2LxiqAP1KPcKahuwYLczYN6ktRDve7VqPpwgjj1iZ76y8i384gEu2Td4A",
  "key35": "Fq8sxLGW8w9xkrkoPkjNWpseVPU5Q1YMgrepZToJ28vRjss2fWJqnpzNHVbiQvaELBpDu5c6sqVY4NnEP8qFJJ4",
  "key36": "4o2kBwcdqfjhveHw61MddcaQ37BRBW8Ce3NfGGiAff7CQx9GnvgYDQbX5SdG5KutpA5evxFBq9oAt82niUuh7AER",
  "key37": "3jPNM3jzJ7uc1fiy6LucwSYLXjZJ3bsGYuD19BBtLBviX9gfLVcMvunHaRrL5JnXwQvvsdbdfc6U4KwCMLMizExm",
  "key38": "44AxqWF4r5XkFNF6jMiM3jWEtkkaCzh9SCLK5u5fywzjGGnppGW5kCKxxdkP53zuNXGVUVoFW1V7KZbcsyrBnXWF",
  "key39": "4nZjA2URjZReB2zBn9tdLBDfHXwZoonwiprnYLgJ8gDeaiojNaY43zT5GTdbwn54u6KPTjMA2bdQ9TVq82ZqVZqe",
  "key40": "MCnLQgdhKd8mKe3qDU3iASVvDoLddi9xwEfUE1owqRwxD9tVCys5dJoSPDFiPrr1udadtEpETiBGnUcg7EdQ3Ba",
  "key41": "5f7KPPdK6YS2fQbN9LZJncN5HeAHPx2vAqLer6DpSW9uTg1EKGwsCtF4Rm8AdpJsQrMqZs1VS2Ai7Hq91Gx4i5H4",
  "key42": "3XueRki9mKRaVfaBZuTp9VMA3LkoA6r7bCth6SbGQAsrWispLUyL7mKe2j8L3GwvP5apyvZkpQgzg4BqAYWBziXs",
  "key43": "4CFVZRF6U8jNiQmnqzPm1arnGKoYteiYoDtkaBR1Cx11g2PGE7hbm6qi9HWd4p2R2eogLeDtx2aQ8tydAeAboQC9",
  "key44": "2EjMYuQENvPpNjwddTDXCm1Jn3svYyHypxvxZ4iwbfUWd4Z9YMh5zDhVGTj16yEQzR8d7B3mg3oExu3pHuA6zFv1"
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
