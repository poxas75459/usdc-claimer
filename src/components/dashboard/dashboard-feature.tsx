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
    "3X1aqpq2ssV46mkL79g6adkHrwoEJjpb81Nt7ctiicibFmV9u6LxBrwPK1Uem7RuZoWKXuos4Gysv4fDEvLaNxNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmzG8DXBNpK4huhWVwSmfinGmkgFLoVMo7mTfUUfe5G3ffBE49btViK5hSsoDfkMFfVUTw63ZL74k2uSgvsR1iT",
  "key1": "ksmE6Ehe7828J2zJ2Fizq1qcS64334hdw4B7qHHQ7nbjhkrGmxW5xw29Tjk2Th3CvKrDUrS4bt7F6MkmzEey7MH",
  "key2": "5H3FgtTA8rcT99a1UGGsJB3fJTRkcKjAgnqUsb9y9BFN1gEN9Ln2vpPaKajic7quW59wKT2NVFsDzaYdxUPVzEnN",
  "key3": "5vjXehBNUB9G54QSepc4MatqU6kfEp7ppE2tTG9UfSmjCxud8BQXAK1GNbY9qAvL6hBXSvFxn39EpGNzJLPjG4Qr",
  "key4": "42jMfFeVtqcFAwEJkSosLG3KCZdapZaMKqBWUTD4WUgT1dPWXQURvGxAq8HTHEs2oB9d9JBRwe4BFu6KWGGvRtWv",
  "key5": "4WooF9pS5QZVG5XeCAg9JKSEfACrSZeFLa7rBtJ4vqJQ595VsxoaA1oTmQx3AB3UMURr2Q2674WqTKSWXEyXRquE",
  "key6": "sWBjfzQ1inakGHfkpkCtV3XjPYrbVie7fr9vytHKFpDU2sVd2LKm6HveYRdYdBqWriebgdjKQZvMBmGY5LHSAyD",
  "key7": "2aXqiUPmDhvAGTixr8KeHDrQ9gCUkoEywMaSxrpeCrVv1U2nCjAL2CJss3NNbicaJNYAPc8wGAPmfuv39Z5ygJLo",
  "key8": "3p4MNTvzgSpcDCRXtvB27zWgPii7gd8xyrnoWA6nhqtSn3aNmixjmaQn5LLW2cAEMPzonSz1DvMKxs4tdxjYUGPo",
  "key9": "4qmGm4FwA5GzabAySLvjR63QytXxNvJyVq9iXdwHqaAfc9Eh8cbUNNu95WpZ4dcvqB6RX7m5CdbvtFh9yG9wnBif",
  "key10": "4oiWY6Kjczo16K67qaWCqPWJx5xDEy5WzUJL4XfNivEuasGthW4cYECFMeH51yCdFkRoNhja7UKg9zYq3iCg9p81",
  "key11": "3Y7zMsbSXMB8VtesEigB3oVYKSbYm1nzMyHWcGRAitnaCL4KFsUskYtuAptgZ1anSey7wPWmsyKPeSnHNDo1JqDY",
  "key12": "5RFaQGdZf6Tq1adtNg887Tq9V3BPd6aRHQdryBci3Td8yzYwNmWWmfVaJiQbBedBjNLWT34J86T3uHLa5x6EpqE3",
  "key13": "3dCMynAyUdGcnxPhB9J5rYouRYf33L6ANjPeKC64JPPu6KQBQanLC7CjeQjcuYNFuKGMdqCSn4h9wUW6hkyVqbeh",
  "key14": "5XUM7jfRusA61tyjDnuTnQUnykYagG7CRTr2VGEi8HBo6R5DCXuWhNfkQPbobk8aq5g5Gi121qWbPtJmtRmUnLVL",
  "key15": "2B6DLqW1NJdUp9UR918KNDYRnmCFbUGYuuwapZbXHu2CSh1RcWV7oJrw47g6ETnBKkpj4kL4k6Ef5cs9fthTqSiw",
  "key16": "3kBXQ1in6tf345zPw3DNHszL8tQeLyLFs7vtbczq3TfA6w9H6R5319qiQ8n1fc37btJ6g8yKCXXkEftjmrre4Kdh",
  "key17": "kYi5Vy9e7RDDuELGMQefP8LgaoMokQsPLGJD7aVqxDvQUk7VDMjCdpUguVtejaL4BJXNsnx5zCe1PADQU5jv72W",
  "key18": "32uvaWwyyDqjWPriAZz7armV9Ft4oVq9t2kK8H2f5XAVBoiXnHrtUEmec46UQqjPng839M6yLGnpHsWCQH4551ag",
  "key19": "3VAqgdXz3MyL6HSznbJD1QAtmfuTxY7b3Dw8JGHZhRjLoehnirk5iWR9djhQkoofip5c93uyopYWqBp5TRjEQNR3",
  "key20": "kUncrKMJczhvJo6ZWkAsXLcSom9MLrBG89DcHtNsBgfpwhhCNKMHiR2GpVzpbmSEpfMWe1NB4KQsLsUhNjBpmWh",
  "key21": "3sDrWpwbnfgFxsN8pMU6KqUAtrVW5PLf95ZUnwswuhR8xmwupT9Zqs8c3LDMTcQTQiHiiYH7WkiU7KEAyxMNhQVc",
  "key22": "2ZFDGaHVJ7JtJfFNrYRAwG6SqH5xzoJQDACong5F4AVgXod8fusECtWtJrbJUc7SP997uoKKYBtHrur48ySWdJaA",
  "key23": "3CFCEnLbMmpVxyZFDMpPTxWZML6meXtF5GGoVV9taC1yRjjwcDQUje5pSmPRUbQP2xF2U2BDt7LaS2TpYYooApjk",
  "key24": "3nAffMhj4XdMTYKAxwbyeqX1FpYrmDjLadymFEZhkBE1Q8EMh2HPQTFuZ9sMNco2t59ZjhNqGPXWEJ8XLuXmx3de",
  "key25": "qiE2TPjGwfMrC7vhaukS5zy6uw8w9wN5B6ShmLT2VzDo8a5XKqtqQTHCRqR4gaCFaaCEJmoR4sMZGJkAMmq28Dv",
  "key26": "2X2KhFy4gnejG2dgfUMpfUeRvraHNvVaru6a4yJKvvbevFTeAJy18NSBPLKYniVDnLKScUHW37es9xxAiy9Q5Lh5",
  "key27": "5ENse6Tis7ZFpdt2LW6eLp9en7yUvUcLu9bJkHwaKH3ppD4XPVpvLVs897h7tdNCLQ8LTkrksiXeL7LPZHpuGZ9f",
  "key28": "4TPqkJ1G1nGVh3GEaAZ32NWFYKKybUbMGsFhd4giGen9EVi8h77JfDSvqH9ZsBAZikyRe9VAZoM4d6i7vrBQiXY",
  "key29": "5m6fFdC3esovwngupBbmrfR9u431iq923gndqxdpvP1HyzAqt4kkHbvPJW4Q2xsDvfEWSqcQUwi1DCMx7Ne72C83",
  "key30": "PX3zvNZYEiVSFJYERwSV7PYVcfwMKc9zMVpqUtfX4NMy3pVcBhbiXsyuEJ6H3heFTAMoBofDjQSByA2gbKg51E8",
  "key31": "22btsiJjDYcWGcQSiB9ctSo1YnGy5MKavELkRDuzvkZ5kavgYnfXg3rnU3gDZYzjeysJmmKPK4BESWcrpmkT3dnq",
  "key32": "3ctDAQjbHq1dF51PKU2SKKSJLm3eEi2RhRkWbUAt3j6eDx7vb8vGwZLXYBEDMLKX9i3BdY86FmyVfuUjioHufP1B",
  "key33": "42sfrXvwgaL1QgZYSVK3Ke1uBgTyESM9U5f7rneSaf3LVyJeCQkRQueyhA72hGe4LWWoVSruA5LvVaV5Vot9Q5E1",
  "key34": "5hKvHiznrBgYtyRKHf3J9LrcmNGhVLaLUrf1f84XhfWmFuvz5cAz174gLmMm9bzYZeezcxDw9Nxqfw4QmPWcwEgD"
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
