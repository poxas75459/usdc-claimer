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
    "7zdyofaRzYfUWBxtFqGy7XQvtxsAqUe1J4ybwpt62DHYBcYr9i4QcRTei6FMDrPRm7Tks1keGk3ZDsSZ1sebVT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LtLwTW7ZUfCJ7VvUg22865JYozsnvnqtAP7eqc4QB9tkqYb2Coge87fU7HmG2YyLCriNosLBZRQMNY3LTxf2exG",
  "key1": "5eQ4FyvA6CEVaYH2bNbYfccwFyRYY8szVP39KCdcosYRWTJ2fFC7wALnqXioqooUR3UrhuPRZukucVcBq5VLW1md",
  "key2": "2dMH6YJDmLU3neJrkkrFehf1oMTARWK3DtddAzHvJFXE1J2UX3D3cufCxJ227wtUj5H59Rw1Srkhy3fJxJcNnNjr",
  "key3": "9bkcWrSWGmaGm4KQ6bQZEvsCnWNDKEryHdZio4sBRwXxuEmj2zMXwgXWA8MgrNPU77ArfFj7gUpLSF13ceY6dAR",
  "key4": "55oDvy6nAqJw9iMbBspLRvxjwpEARNNuhVqKvgc429Bwvn7abFxvPNQdm3hTbinDLN78xHgXjE4y7JtykrtxDaTq",
  "key5": "QHSaeEsjiU99AWP3kLgyPb8Xoi84aPCyU5TojiA4J7KTZeyRiFigveavAcWpwqFiEfXKbJfcA4RersW6fNBgF7j",
  "key6": "2Pxkrv1KyG7aDoZUhF4FrUKFBL99yg1KAxskQNUoJd6b4nzozv7ScDTgUWDPwNNeffcvHHk7geQGoupcaudTHW7w",
  "key7": "6122sxjdVcGQj6tAdPn6A3Bn9AudZ5rJcac96za5TJ2H2PuqXrzgXE4PmoKvNYzk7YPRtyEQJkMJpUoMSNnsFX7M",
  "key8": "4y782W5i5VTL6QTaxJD6eixvrL2fdqpLTDo8V8xZ9WeXZ3YCTdQSSkzy5gcvQe2LNc4pvDsP5vjN1VcFUfQRnLpm",
  "key9": "5YiD6AH3jLKvTVUYBce3cJGP2YnKNYud9QpGr5TcM8wj42o5S1mRaCDZUdcJh1Xc7r8Yg7RHTTPi4o3TNuVHYFF6",
  "key10": "232LwHmeiaMjZWdwxLUsDH22GQM4dQozJbgZy6ULNQZaoHk7TaxGw12HjSeAP79YjqtakqEdDTBnWNYK2u9UrYpf",
  "key11": "2ywjtSa7z9Vjdk9e3suJcutnemAET3jmzgjR745ncKWf7tujS4oqrVbZhcUL4D4XJo4m8Qp39exFjWyvXDsmPVfQ",
  "key12": "5kDsm3C9SKFUndQJvyuXoKd9xeZ9JTASFjWJEXuCy5PFYvRkP6snV8ZS5qgLWA8J858wyPUeG89DLmPGujwigkpy",
  "key13": "5LvEzpDh3oAPsLYhHbL9LU7ahxvSDin2thaZRnuupUXamxkANwDMWWTV2iB4BAWGc3P128y42LH7Fhum2jPSsR66",
  "key14": "5gtnnTuLR7yokJii1JrgCX8aQoAoXCCfQNuPyKnnezqkbAiTJo4YpnbME8fmwrCaNNNyHaTX1B7fbCg5fBQVHg2Q",
  "key15": "2pwsoyuuzo3NtUHJ45T6gPeNnsjidgay2g72ynmP9UtryiqiMqhfrirnt2zNkvzNtb2LUkCCCZDEdPpYhmCRaRQM",
  "key16": "4qEVDhJfEWecqp5Seb2GsJTzevPfzsPVyotRvRMgCUEx8pa9nWgH7ZahHCtxWKnimmnqhmRBDgLGG2CmrG8xCbPD",
  "key17": "655BVaBwoqGnbLfrgZ76LW7vPmjvbTDPkr8cNLBnbmQnNPEVKLWpYxWKA61MbJkQ7X5NZP1SHAWBnPZ1cj59mSP2",
  "key18": "5Hru3U6mvCZaCwMNZuuSfxGr5esBcYtSj37pUcPVEgKWEuFLsY9nv3QLXDjKRKKVzCcMaUyiriWf7TKbXNpsEWsv",
  "key19": "5XZCWukFAf7YJkoRDzBEeJikx63vQShMd2AMpsPXZtn2x4vJLbNj8konXfBMtWRohmq4zYs4JcnA3Kjk7HecL2uh",
  "key20": "3j1cMZryx5rhkD6DEpWxTjrCqyChSS7mW99Lr7MFwnr32H6cgghLV7xVi9cBUhxhQFD4b33xbEkNwfjoyxzXsgzC",
  "key21": "2MdiYMRFV2xFwP4ePFTsgw7JT2T1u6YNwu8GkTb1FYUijE1kKE7sbMhWYnK8rKyfT4SREm91hrAnPuuSZNPMZHZX",
  "key22": "5MsjMpzVPKT3wURFKQLsTmAZhicn5axfnZtLn8sxTTx9yUW1cuqYBXmQDKMmUxgd97Zj5YJRddtZbAL1KaU2GuBi",
  "key23": "3jVMPcct2jtB2USUh2SQ1VZ6aANuZ4q4mFEegi8TAQ7fcZjPGmitx3xaGhHy6RoEDsuWUamErrgrnKPb19DqHY1j",
  "key24": "2EH23t2AtmBWSKbFWtV8NUg1tJj5s4KYZuMUjYDdTSnpJQgnoiqRQCN5CAcsCmJMoTKZqhF4bZiiBKZipk2Bo9Hj",
  "key25": "5zLPYiAvW6CZbwpo1mE7M5XqLLX4E2zZfQxyCHK7fb9FWEig4TeVSbJwXGTMdZjuiHsULHSWCDcm5ejqaa8dCkFM",
  "key26": "5Nn5r8f5UHwD5zinngvEmu58KE7Y4xpawdsNMLRKKe15HGDzgdHp5Fno1aeCPChbWtodG5SqLmZ274kVzyNu6wHk",
  "key27": "53Agzm65c9RAXBr1tYWUTyHwN3Usn1BZcLKauYshPPbx2mP26VZD67uQA1NfGydGHJXT8AvhyAR7Kx5WfXmMaUiA",
  "key28": "kyqrMdmUkDLAGqCBz6zCLvxsGy1wDKC7HigHHPahd2EpLgaRLkNod8Sk7XKsQFrLW5XLwqpYosTRDMsrvL64YcW",
  "key29": "3WkrjWyVeHapZSEZdH9nFH6ANLVZ4xJEPgLgxGpuWH2amPM6cmxh1vJa8a6dKNv7UX93Pg9M528ngSRirbBSa92q",
  "key30": "2wf6AYmgoTwbNFAn67RJSn4JF1HaQPVVnctM62akSGxTpXtq95FbNR7dfC4PSQ9rozyYcfnRFfX8shCvrzMCHfuc",
  "key31": "5yHR9utLKVhzetZGdMjcUZLq3Z2VvqqtMoMWSXNkYxdTNuie8SMqHifGL3YrdF1TPVkxPNqUgEQ9xaj5DEJoXsDQ",
  "key32": "3U4Be9UYQWUzVY3sM7t5PH7bndYnvgx77ZLoXW9HoDDMHWBNiCGHL5CtHbYEPXwavtpta4kjg7wNbYWjRs35Qmft",
  "key33": "JzPQGPK8KnbGDDZQmXsAWqanEAgadZ5ztkjDJZBeYiqe6bDc8QzZFTT9AhGGeMDHrqEVaN9FdgqtGXrzv7hykN1",
  "key34": "4SPhh7zfUSL6AwKj93Az6ZbZqc67CM9hn6MFiuA3XL81hGZiV9TxczKe4pG4YKQCcWmiTjXGC8xx3Tm919qqhKm2",
  "key35": "4TYk5CpQQrDxpL3LfNEPqDrVqATqRSXcCGoJ8bqDaaRWMpSwA2BdDuY9DHTU8HqNgkpY9qm6cr1T1PmJ8PNCcZzd",
  "key36": "4ktWh77PiCT6zU5NUExmpMRNT5cVqHY8qTokbaNSKAgEW3dKiKVxwt9XowpKbbAnngZtLAruemvgY4JMHvxj4vH3"
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
