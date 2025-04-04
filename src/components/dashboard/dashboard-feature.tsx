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
    "6jKHLs7w8s1mJTbLXe497yMpLQRGDmkHEqbPWQ9LZrNmdjL1MVqh35GcUSfYc4zPpVh4zH7rqrvjHU4eq5H4fRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35MZuQUkpNAitHD1tdRuZszK3CitHEHYz3AWPiEuci94FRYZa7VjXAv6LfzAzRnX7XBNeaazD5fpGr7Woxcyryp5",
  "key1": "66QX31DTKBURo2kSD5Vpp7Xm15QKvkPeNv5GPgt37n4E1JQShGKBufcZqcZnokiD72oSrTP1cbipsWPT7J3bz8RP",
  "key2": "4uPv5VyV3QbxDbYPAnvtteCBKnRLsDs5RveG8kYNEyveq5nSxFdv5ecGeJRhW4iXbDjyYdvDx81i8YbE1cPodDdj",
  "key3": "4eMrSnMV57UihSYSfg91w7K6eLm2uJGpMfAsgiuAX9QcVf8TFDMNUSXD4J42DSEB5ePwn2rhem3LwR5AWcZShaxW",
  "key4": "42V7xeBEo6njUYfMsnFEcsYAnJVF81yJPMg5fmBmQaXWtPBW3uDBLJedAUS7LiyhQPHqZQ3DnkzvJo5xAM2Fxr2t",
  "key5": "5TYCN2U1YBPW319AWcBgzVEa4udAMaK63cnzLjRnxvpDsXcL5DycKnrci9bXdgpLXCshnyuFEgm5mjJmvPCN1RVV",
  "key6": "2ye6YUzRJkcQWnM1NBMVzFs2w8CUZyYSgcU75AzjNcABtcFV3fn9JecTdaFUsVfMz3hkFg3ymVj7zByAZKyATXVs",
  "key7": "6f4aMb2cbjQJPbfrDTkRp9LGuQ1LxuMJVtapu3WCVKB27LWkyzp4kAWHqbpeRNCEaAyYc3CQkAMGRSDCV6QShXf",
  "key8": "4Gc3yNPe7ddqMa24aAEwWGTVG3MnvryMY3rWm4ZJhfAvho2ZVv8HFH7P3hECZA4RmxDcGusGKMWjx3BoTgTiUc9w",
  "key9": "29nhQ9mNAkFXsxRJ5D7qdLwxBxHGgVfy7DD9D5eBFDSVgtWUWsYhzWa8Hqu248iz8yMuRxw1kvKn7qdmknRh2YpC",
  "key10": "3QUFQiQ4Rzjwi4yHByESajbrwqNsUVH3qXRT48YBoWe7ivGFbDvhQsfF4AsqUMAHpHbR2zSHXXbunHRrPVMBg2gG",
  "key11": "5N6WuJXTT11W64R24HWJFWNGwTBHL8ogWTYGHSodtYoo1yNsYi69zqPjDWb7RvRfed7W1kLWA4bTgJ55bdCEEnSG",
  "key12": "3WfyDpL5zEWKsyEA7kKR24STyX8aoqtwCEknqzX9UAFn2AbZWBW3TBU86VdwMGCpWKRRe48dDQbjmWJuUJpdmuTq",
  "key13": "62QgU1fpcZgdw1LXh6CV2hgzNY5UfzHQAUrTZLqPa1vuXkoHs9kfdykePmFAPusPMUmLZ9hfaTNVwodbLUGaLzMR",
  "key14": "3E6EutaaiZvgRjwaWsSZa1g6NA53Z5ZomRKqJX8R8DLzAK54KByBMfNwkrH5m7YnAip91bP7BQhHu1GidTee3c1s",
  "key15": "QxhBvm6AMdLJ4hEaFkhvFmscVQDgjyFRAJajuiG1DbmJvD1McRgdTsUT2TsU6MiTuaLvkBQgwkJTi6rgLpGusQC",
  "key16": "5TFJ1zU8MMLyibjBEPey851Q2BXuf1FuoHLtqymZkjggcpVU2rDJwtMhSucmRv8NV5ycG7kN2mnt8P4ZxDjiuBr2",
  "key17": "2K62N7uG5aHWbLtqqYVGDpqGo4kDbyrasmRxqRuNqYcEqcPNi9rLuTfs8HCB3VvC1NeFAW9hoHS3vCSCHNyKK7j",
  "key18": "34i3uaYqP21YzZX9JiiWZCg1y28jqCZKUb2tQ3pxQqmEoQwigNgiJNN8bF7yzYXjFTv2WCKrAqzfEdtTeaeYkyMM",
  "key19": "2aV12P9PC8opbEjgYtTLiRMovdqUPyCZgKyb1qDrK1Vs1jMXxTJoa7nzFWZjrMe3Yd4ZwkHocHKKZSKhnCP7Fyvp",
  "key20": "4Ryga75jZQUpjVNYve2TVctieV3ZjNJn7ikKz5Nr8VbjJAuSisDKEtXayXyFP5D8XCNSyaw4esyW45EVUy59ZgDG",
  "key21": "5FZRiVJfxyFBPLFDj1tqKTyjuenPKGtqibyA8shY6ZkHkgyRu7Dt2DDAUU1p8RvK2NNARr2mpjGxJqKcmBvAJSrY",
  "key22": "3yoiHwdTDVJoRx1NzDM2MgnZani8L8NYRDneD5AU7PnhyU15feDzTdXq4C7zfJcVKQhhTWTfZMnDGVQHpogqKkBz",
  "key23": "3y2TEjLEdES95Yuqv6eBraXrT82qpBewBiCdU3Px2L6c3JhthDtPbm6QevrjsXwuLM2WrAoFhXKBRvXdHBoPy6fK",
  "key24": "4HS8MgxDeWT5MriH8x6YurcCVVtzh9rGfahd8qPzubwqN2RJB3Xnddka5sssDNznjLGSEugjtskJX7vVB44NuMf5",
  "key25": "3qHjjtrW7jCGpJtQ7shZyc7dipebPqWLQFEvEjnrUgtWjHSgiDT8Qck2gDSGqimq7boQxsG64iWzM1TLu28DRHoD",
  "key26": "3nUcd8dXciu1r64iFP5bsce5SLM5GGeJuU5Kf3CDvrxfHMy1UjNroWEjjQW4kW3vrgvK9ZrzApV8U4wDVWLL7JpH",
  "key27": "59oFoPCsJDJgZDnQZMhpj89P37DE9RxaZuv9xLwkQ4BYTFC6xDRjxsGzcziBaVgLyQRQbjkYHkhq239gHr7fAKfR",
  "key28": "4wTtxkgWG4KBGhXe37HtbtWp8W6WWMLwrbFKHoTCsokpe4vj8gAhfBwPCDVD5y55coXbc3DjdZ79V39v9CEhvXJE",
  "key29": "34MkjnDWH5N2GPixHiU61UZBDifLhNtWth1JuwG1jvVpKmcpcUDDoGbadsMiUKT6ETyZmjePeLpf7gQxyYEDLxie",
  "key30": "2XNsJCpweK1foeXYb61zpd4qQEQGeJdwWNdgBxfmQxJt9YswhDfQARbQ8KPEiUJFQtSz6Ve6yDDMYXFgkqdehJVe",
  "key31": "ofc3HvUeWvgmEqnVTCWSjduR8mwZo9ecMMsHCowSWiTGLqb7ufJH56DMjDepNjfzkZaEnEpfXfdVubWykXbsgpo",
  "key32": "28xAVXSu8mtzLf3xJbCNbg1ysQn8YsAwsNJQfJTURBKpfsbSeRecCrkBkTS7q9VVUaaiVD7j4hQA4z49BXeCFPWd",
  "key33": "2NMUe43G5fngUssGXT879oEJVAxpeksWg1LdZ3kc2TTX94zWqKfjWPTzLoW7ApQNjTzsMicqVhiwnoRBvYtjdJ2r",
  "key34": "5aoyn6kVCwrLFpHTbuSAo9ppm67wqcKm1CFR1mioXrDCjUQRscfxxoKhjLnFguy5qwenwnMjsqLqtoJhUNcthfhT",
  "key35": "38M2tzymnNWxsLqJBKa37shH7cTcBi214aJU8kNHVYFca8Mp6LbsyhNWPZMXTDNZbwPmpr5Ska1yvS5QyKtMTr4d"
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
