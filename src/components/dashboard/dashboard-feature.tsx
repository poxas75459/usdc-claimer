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
    "5eeT33tVZsCJBNfCHbsdoJVh6X8U5AA9FUVDPxwfDu73wg96MVBdKZqgzsWgpye3k8JPvfk4cgWmYyPvTPccsinN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2i1GWuGaMrXiK4NdaPTeJ9GWFWenML32UKnFz7SRvmVpJeQgxAge1NipUMav2yc7auoxwGRENR2WqYhoCfWexd",
  "key1": "aELxPdKXrc8r98KYuFUBYE7Fiie2xtKf6wL6nTjibHeJwpitYXNa4TPt67M9bwGstg1K56nT449FUc2xxX8GVd1",
  "key2": "DShy3TkyZwa68HeB2nkMdNCdqsELzzAq4UF1JzsJ2EsG8y3LyiU1XVN9AzsDQxD9WufmdaPW7XDrcFCFLnyerM2",
  "key3": "3e2emvwqkJ1waFxK6omqyL1HcUF3jQnRNtHiKcwqXyNW4EduE6afmTmCduydHGWReNgSRveHfN37CrLwmKvPms18",
  "key4": "kYcAnAug2Dyn7Y2mUFrNT9tq2MXmqiqRheCvYvkurwys1BG55nZYsZ41GpT7bj3tYNB7uBzVqG2pHYswZsTFey3",
  "key5": "4CXMMu88EG6VxTpCQFLSPBBXJkcmR6Lf93yfsvEFtRjaqJQLLXKwTK7pTCZfqmCFw1yHVu9TwL7Et7u2RZvxxrNm",
  "key6": "2fdyuaEzEV5CTzJnEuDwjmEUznWJBtgwr5f63ZR8ukihduEgjiSsmpUfxmqKKvw8e8iAe49PrGopCL5Kn8bT9MDV",
  "key7": "3HqG2dCtXrrSfKuSKy7Cp9ihEJEFzp8Q6GydHXvCQmnjrWoSWteqCFFykfdLemwVxjE8g7rKp3CK6iRcA163ksZT",
  "key8": "4McctB9hGAzTf4P8PNW8rZo3uctSzLrBPvPkBkMWkT9BVRXrF2pRveBogm3smikxqkMWuAmo8LUnetb2vrtj3HkK",
  "key9": "3zNi12Bbiq9YZKmW5dwxV3BqAF2SZN7DWzjsMFj99GuLf3hfBMpz1iNetExYLTPGezmcWNPGcCsN6ov2rFRovQgu",
  "key10": "5V1uRiqrmTRH5vdD5cze1UW1JJ5Q9YvZSSKkmZnYCxoTALwq2gniGnR3qtWhQqRjMyDKp8A4wrzZjLprFkUYTgHv",
  "key11": "4b4mc3uHDP4x7dQRDjNQNnADJPTwT2f6p6gG8XA4HGeFdehwoAZLnvKGuKLDc7nqBDuWaYmBnEhsMLs6SRJDnQTv",
  "key12": "5xDfWw8xCvmMP8nRi8xboJ5oCjudnT5Jp3R4LxGrQti3mCbAz5eHxHkVkW43eX33cUAVZVZ86nUnPVqeKnokAsSL",
  "key13": "2YpNvbsz3W8BZYLm9Hy8rRRoYFewJUUjZoLfxq76yyQnh1pzFv8nJGQbdRTvq5qwVrTMMEqSSSyy2TiHSV14zqZR",
  "key14": "67XfEzPXwkuDRcEwFGEBNaniQU7wYmmnZ53BrEKMqZAEnZC3YE5PeZFsQuwWPP7mZBi5rvqZozRgX6ekZWEDV1CP",
  "key15": "4DM2cd3huMoxcWyBaMaHGiuKeQK95HfLTASVv3pYJxzL27PSrvQv6toydS5F1dKdUDncWXxJUYuK66u5t9zuoFMv",
  "key16": "3P8zNyj2iU3BQV2ByzWBp7hx7rPdcTJyHdwaP5Tj9wbfy1xnCgYVCAhzGfK1APJynhaaEsPKdPLFNn1E8bvMe7Qy",
  "key17": "DiZkUKBaFnnSci84JKnRxnY8ADPCWkewDRH3MuMeojBHk4dfbNL9ZYuGD1Qd9CGh6G926WbFtvj7NShauNTsJM4",
  "key18": "nvkGPsKMsb3ijHKuCk9S7gGDj3g6HpwB7CoyaVHPrqubHJPvnBYtyhcB6zrgxzb2c1dTri4grzWLk9RaLXQZAKi",
  "key19": "4etJZQeSUyTyqRideTHMY2JD5iFQ2fMELWQHTWFF5TPj2LcHunTibYNg7houMwVZCTPuTPSD5u7o7mdJ59HVaZkD",
  "key20": "2EdfNfurxJTSh4ExrWkGnvPNBduNEBnADBpqrwU823m27BYoiajDDHFhYHWVs7odHQ4Epw2bCquXYf4y5RH89JdG",
  "key21": "nkj8mzTfav9hX2iY77pCZuMNxsj1N3XrvFkzXM1iuTx1Lpqs44j3h3r6wKeu6tUrzysxGtzFqKo6y1tasXwAGfh",
  "key22": "53eff6MVvYX1JCCHNQkeNbEuEV6ZKhJ2mS5FfnP9RCkLgT5esnaLQnjcA7RN68S58GY8u2ttTF98A6pbZEECYrYm",
  "key23": "ehvCVCkwmFL2SSFENNj2JeMeYBYFwJPRdMMhFNoP3Cn1gLm4Sdoz1BGGCx5PJsP6fLfthmCrHcfvHBb9KkMbRvX",
  "key24": "3cQADYAJG31o3SeEuUJYXKgBYE3XaZxd78U6doZ8S1KY9j2X3wKyStZYRqEPVHbqfNCh7tyLH7GGdK8X7fUvCqJB",
  "key25": "4S1kRh5fJVyCAYk2tAY4cp2BUurifs3QKsZAAkZ9MpXEDVmioQhiZB8TFAkS2PTxoSAeReEwRzEasn38j98aiGSK",
  "key26": "3UswMqp7skX3hvMgYJ4F39fLS64RenfKPEKa3aijyeR226HwisgthA2BW2ZBH3BG5DcUZvCC7qjveecmMzB35Qsp",
  "key27": "4DLxnXa66bSx4FrZXf5JRsJHi76Fs86qdTinKCKB96tZmxR6GkqhbmaQAfR5mB7kpoziN2c4NFiCJLaB3cz9X8n3",
  "key28": "4aRdSEWLaTKffvcQ9XiGSFipjiTZafkivJQwy3ZgQkX5HuDcRVmfLrcXJ5FaFJEuk2s1YWWTMhqNuPvFX5pDeUtM",
  "key29": "2K72uekgS9pQAaZN3NLGQdhbGq2s7J6KPBs71EsQ4sqTgyzphRBkeipPbpxFUtQ9Xzhuuaf5royQomkRTbUD1Yb6",
  "key30": "5E1Zcd63jkNmBLB53nWuJwu5RUerbBQWUc2TrY4RePPkhRf8atysd5AFQn63XpNmfkjR1jzx2ZDLHUJGxsxkqfg3",
  "key31": "5NTi1H4NaWs8rUUkDUG2LcJXjXmBQvzH48Dxs2E4qVvaxo5JFBbdAY8uBCwdXXupXtezScS5vct8pK1iyT2YSJ8w"
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
