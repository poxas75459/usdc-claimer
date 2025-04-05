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
    "3VcpGBaixvBkgbBafZQp1THiGcEL4tWnKN2FcQE3xzVqKpBdqZLEYGYVjcgpshyVH2EYKr3ZESwQed2zCiTFDgrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wZvkJ27Nd8PwTEBatijoiKbtLjnYCYK6nk5ibSyRqPtoQxw6JvknKsZo6gUV73HctuZq8Byg2dLvcFYEnKYDkZV",
  "key1": "2sVu7qLJTM78HR1Vhuo3JvYSf5NHYb47rVdAn9gSPLJWC8zv9XUiPi2FnEU35mBtQk11URD4oPQt5pyYNdCAXKnq",
  "key2": "CkvcNesEbz8oZb3SQspizruktmbEo4C5TE4ke9K1XpdpgdfoQ1b8M34dk1Y14gommn4q28Cgbeia34bLoXzuj7W",
  "key3": "54nbCCZNBKumZJRBPB2oEGJEt9HLUDkP9Q2xAnBzDo6SQF877YkTrZ4aT2CDePDnHkAbu4z5rtSPRWbqzRCHe9MW",
  "key4": "5EA6c9hXAM3apU2CiL7hcrLbifrX8KL5TeAK6KbDxYrcjKYUMQb5t1go763ce95iRSyLwpHaJKXCLUVQ4JeCsEuo",
  "key5": "3q6jTqrreXB3ggYB6F9DRNsorTmLKjsBJ2o7NWUawM2mphaCW8GSJMY3zrxHGHVhhSkf8JHVXWfphMsNfLsc3Twh",
  "key6": "4q15cja6oCWzhpVj5pMLpeMPo3if6MWHgRJnGqnSn8vno8ez6e5G3kwawMi7RNBC4fnVfLPPsKfnTfSRUJmuBQnx",
  "key7": "esn3NKyc8KPB2hHEsP9tY6FAoTVJPRAubEFEJCGTC29FXF1VTpuRWRNRPnySGbGk94QSf5s9GRfWCv4yMKdmczn",
  "key8": "5E6fF6hrn7ijX6xJNv5avGeRg8Ur1q4veMhuehs5bcLJK5VQbNPhc5kydEUX5tvkuh4b3cCghYCVhkWTaEcmxsBM",
  "key9": "4rsGceUZaC5RTGtAjFiFZW6LwNg5hMEY8Hw4G24DZkkc67iAZjs7bTSyWbC79nnm8caqR77KqTLA5qoE8ngeK1xG",
  "key10": "4GtxzrCYjSL1NU55tF1S94AydZzx3YiHXFFzrwUwEydDbAVYwkzevg1fU3WKu2b7j4YAmV3sQ9aJXsTbZ1KJBJ5o",
  "key11": "5NMn9kgKN2pZ2kfG9LLSTi5hSJbbYz3ViV59S4kj6rx5t4CUn43dGAVeQmPsASjJRyrD8QQsbr4M394zpi61wTYx",
  "key12": "5CEUxqLLAFuy9ZCCSuBttXC4K1UHA8vbweJiWYZdVRvHrZDvUE4m2auGod2U76xNiuK3QdWLAtmSpEodes9CAkqG",
  "key13": "5t7ZomsXjyRskmXY2jEXmqkLJ4rhA3QN9uSJ4pY1v6kVd98Vg1FiV3hxtQfG5JuP4u4FLBXPpZ9CBodpS29zJZkz",
  "key14": "5AZdGWAuHnWWL9N7De5vb5oYodSJ5i8r3SiXksgLT664mNfx3Hs9diTootag9rHoUpb2KVCDVS5GYP16f5ESgvHY",
  "key15": "X9CyeQD4ESbtFJm1k6M4XS3BbKiykiNu3Pc8GRtDw4sT7MKxiByPDVUMzW54B7RLCLpWgNMbMvCpQTcxExtHUBz",
  "key16": "4DyvvovX1Nec9av7an4iGvT3L9WmHxHhJv4rHn3L6qnRrzXxm88YVHy6xQTm441oR8371HNo8ziBKeskjMqjwx2i",
  "key17": "4H6pwQewXseXmC2iLK679SkfeXZRaQ84r89h56ckbFYZUJhmks6fwJXhN4tuK54ENKtso9NgbziwUSNtKPLuVvNx",
  "key18": "4diX4Gj6J5kqPtCH6XyxACCsW2VzmPfUVwwxGSMwSoxaspULEbCCLoTtiYvHZRgbntcBz4Z1uEWfeY4aKJHAhRz2",
  "key19": "Wgo9xWb433FAk1sAqWtC9xNuCAmDthub8fNLdQMmchm1qpAhqrQehvDUPKgc8CRGDTQkvLp8pVqG4hMj38SCHMH",
  "key20": "33t6NgyXAfggVa1pnFHTbXq7gv9KWTBZtcfjydMwQTwLExQQ6JPNNNS8nG1SFCVhwHtTfqAhDVnJWX865VBV4kTf",
  "key21": "3tpK3aPFfS1xqo13SVoP6VUDpyzwsGrEzej2qToZQ2UyRmjWHauPsUUwniBVcMSD7BNNkm4rYkjvM6DFNkTWYhqr",
  "key22": "5wDUG9sX59fChuP76QWzRyeirJjfdWuZurSomCpn84WFc1HbGdF5T9Pq6qd8dwF4HTSgwczYgEU54WXtc7gmYXR2",
  "key23": "3KrpAYPsu3wVvB7H3cT6sTzoZLAEzSaJprJo6R44CjSEmpK1gWz6v8HsAiocgVPrdttyvYuyJ9XG71fzvBUjUMV9",
  "key24": "tRg7xwCzPxRd8bMkz9mttb36eJa921R6YKkgUdkLkGpLCPigmEtrDGbnvKksZWHjuMqe121oPW4xL5f4czib59D",
  "key25": "i6cH7Dh5AW6Gx2gX8wVqyYyKxgtqBT8A7KSmS77XgyD5z5Fod2YppAN77x6aRmQPwodTw7Gmu3j1x78wN4iz4jF",
  "key26": "pfMMNJvYnzdkjVPWJkFJCojoHxWvpxFtSYsxYpSTexxWqwFmCDmf4QjV9D8sMQSbSG8J7Jm2LNyMWfRecxu5Xnb",
  "key27": "2XwoZq2xV5EVXLScx4JBWSGBv9V6Nn7CLdj9dABkLKWMNfwfi8Wc62yK9FqXak7kVWGYEm7DKJ7QLd6SBQnFamT6",
  "key28": "UE8fUAYWkvqPeSabsj2emtjHRs2qA77NyzhEtC7UK1oxcFmpMGeAP8hCiBshj9CDVzoG4jXPjjfhLd4XHuAhAJF",
  "key29": "24HcpLWgwUTere7G2NRCpuYDsMc5j15cLixjNvkB548RHF4wwLQTBUg8J91nYZSu5oKRwL46Dx92Yx4WyKp1ZusH",
  "key30": "nh7qLCwPQzHPSHTGaRczHxBDM9vSJkgzmV8MCtgeKsGq6cdPLVYDvd3PXMtU1xFHeXEZGgg6kbNU3516JpnuPcK",
  "key31": "4EZyBihZkMqtsti2Qb5YqfAFsojAdG5ZVxdkYRzwFYYGj7DtJmMbH2K2DGj2VHXqwoRBpFXnA5U6mvn9iuyp16iL",
  "key32": "Ui5cQVEXQ2Cm5smXz8qfjcvrVYrNe7oV6Bpbh2U5CgnhCLJZZVNgqUEVpRdwrEkvteALkvP1FVZcZenhyx3oj47",
  "key33": "3j7wWMXdFFNNo7cdJTv3X5SHqeahXVuDA1iJdpPFPDs7TzRMEFHKtVUFHwo8DwwLxsdKewbm66d32THWSi2FNjrs",
  "key34": "5KNKuJp9aeaEksHTc5bTKyf62MwDfjR4PoF7hR2rA47NU6xz9aeVAGeJ9UHsE6KboyzVjZLo3Nsa1w5VwzuKvpRR",
  "key35": "3yon6fUx6LTLLgXbixNZUYKCwd5UUdsmXzy6cni6VVE9w1ahr8VVH2xGsyZTMUQAmax3EJkHW21gEt2qAiVwjsMJ",
  "key36": "45rm5cL9dqRpY4qSyvmSqFdGYABUj7mH7nEWq47VAmtj1Ee5Px1ouTtWhmi2YVVhnMuM5wjZhDxPrZ1CnBbdDA55",
  "key37": "4QCogGarpML5ERczN7PQAx371SEmh2xrQzafxAtArBNgyo92FSyKqB47srTLfbC6ePg3VQEZxhNRPEKX9RKHbGh5",
  "key38": "5YdTDh4P9iG39bEw5mRA4LQ57RwDedyNRAmzv1EWbRosP8jCpSJCsiH7522z11imtYqQBShvnJSESnXAbciiLhNU"
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
