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
    "2WfHqVVNtfLdih3EsWqcLf216y4WxsM4sAmm1v2raQjtAV963FToSQzcrhoKYVBuPg6nhrxx2zHTFsVbCV5Uob3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dVFZx4jwBHWoyjbYrBYra2gDaWYX1CuKYczdqjHNYLYjGQaNmrq25Dcz86uXiCYNjmoHKAZnhEfSR8goMbpSeCW",
  "key1": "5rJdYEdKgnxe9ZTU9otJaLf32a2ZjobzUoFG7k5RC6VG888hCDNKSomgsSPbzDZ6mpqvSDs51Sy2RnAeD2p5ptja",
  "key2": "2BZX92T5t64mxd23n1ADZSUhkYTc2WwJGymgKdcQdE6RnoXagLGHQxVgq7kw8J4Zvu9rDxaYsKsbjM67t6d3rJTZ",
  "key3": "2MK1V64vrZyLu4WVcu5cKQjRdAE1DHR1S8qK1CiSZ7XztwQ3ka9SRUsySCA1bg9F5DfsswPnfuUv21oXEh4DRzah",
  "key4": "4Kt3ap3aQgoCPQf2dMcD6rpvsxWDmGYtk4JmFmficERRcQNV9U42aPYRvsfVyo4N1MHV6Wa9361Nidb7xZfCEYV",
  "key5": "4PVwbokL9F5rz9a7jB69jxgDddW4BKhf83Rh7MsFcNhpQk7TQUZVcoE61nEpnkP3mjxdg3BthJdmfqmEeqyALfbZ",
  "key6": "3cyvUtj2pkCsBgu6nNtukvGHypuwoWZPDJibLTDTU1gDWYCSmyLBDJxg3iQeDd9WLSg1xNWHqYYLQbWHKHHW31nf",
  "key7": "3g6axidTBxDbsyXyjSFo77UqjEPq5NMj5W2MTQMF1vBk8JQ9XX9org1dFEX6zYqSTaqwwnRS2FMyDBMpRJJYEa5i",
  "key8": "3a7MwRPkKowphJ36wkowynNvGsXj6c7xscKsUH2kNUL21QupUccswdbLMimqYrqqgepcqiAiZyS95vQmB2v5ZTLA",
  "key9": "3QyDyioaEp5Z4xZMLx76HEuP5DEuPaQCcHHpaj8zDTk92LQKekyG6H1zRb5UiGNH6VaL62NYLMxupees84SbNkej",
  "key10": "2QW1DjvTWUCnEyTR2rNem6VPVPb9PXVV5PmbxMtmj8AW6TUd7oDaYb2cYz7PwWACuZx8eoRredEcCXHcPcTYyspk",
  "key11": "5h4y6o5mxQyzPA5PjKazs1x6iz5v18ZZcXMomP6GjGPvXGT2gP9n3yd1CzLYadiQPdeFQ6r6eZLKeDBBQrmbv5bG",
  "key12": "5VDnMmCajSwisecz6LsJUB4h8GzGvzzCivbapP883o5Mtoo9eJ7QZQ1PrQZM1z1Y8NCseMTioxFZ2LKQ7M7n5ZBc",
  "key13": "2dg9x1JhP6jeHWovHhhFYZCJpSvDJLbXtpAbmLrU9mRnXnA9saJnqXySVpRnLoxsNWzm6GnXwz24VEqX3yTuT91y",
  "key14": "2QNE8gpsEMHCh1RikAzP6avA2oybN2paRyUZNCJ9WYP2stS93U992WsrySUKRjHQkZjtUo3VziAbG8xsCuuAMbwm",
  "key15": "4ipkXoWAZtffNZvUikjKQb8jv9naMioWcEWyt5yR2C14px98DEmyA4yyHRx9zLA4i5Zd621Mu4WoZcW8nFhAdg4H",
  "key16": "3m5zqPQcen3Y3RQTUrrbT7uEhTvZwF1hJokQNAiawb9NKSvzHW5QMNBgKcoWvff2eaC23rNnifaVSBFkRBNZy5NN",
  "key17": "3ZiYqRAZQWrSRy8ebrizdB9sFSLnb8Se8sxKmK1ZDFarYDhKKGwbzxXYhzUPW7ML5P12CLWwK5aSu8Y5PhG96bsV",
  "key18": "3JMmSirMjFixFXr23rHC4D19AkFQenzL8CgS9WBrUBFKpu3DBd3TrC3tAghML7mmVciVxu6UEDgJy2Nb2queQw6q",
  "key19": "3TqUjrGwqD6pSuJY6dQJdbsa9MGbyA1w8xWeBxU5jL52bBGbj4othsdZkn2Mgiqg5CzBCB53PYhk3opk9rxDYfgi",
  "key20": "3595YZCtbcXJBKAM7QkG3Lk6jwGcpfTHt6q2ySkPvXBnHvDrEZuF1MS2A8Z5cwyJscMuzq56RHmtZf1CGbUWvEbZ",
  "key21": "31P4kXeCBCVsddxqYPpvJeaoemdm2FJqEDRGuAYhU5xgn2PQe2uBGkQ7Tt1YcNx8VMJfEMe8LWRvcbHtxfEw2h1m",
  "key22": "5LxfHz1sTTSi9m7e5jGZHQQupgfMpdQ9SNZeUgi8wvwF5AzY51spNakebv1ZYFH1mtPhfgMkDcmepWfin1phVDsz",
  "key23": "pQ7GkqvK1itXE8DiBya7AskKJmuqFqdK2vBBxJTThgHJSnASvYtdxR4thjq2Yfp1MAEGpUXPxCGG7yNwNvjP61S",
  "key24": "2KMPMAfddB2svWHFJEbjPcoF17zEFvLuSoepGu4kSxkkV63RTsEUxfAamRECnL8Zzw98TiRPjvHG8LVWtZdGhKpC",
  "key25": "4GJRyWxF1uFKgqPMJcxZt58BxTW7KeySd5f7HgwVYvvgU3EpTGdicPSiSGkMNx8VZrKzoi36wUC9MLVVWkfsiFP8",
  "key26": "36s1wM1rCafDozrjTjodCh2T2FP2zLM12UBLxNrCysah3XJVsfvrBqpKvAvrXGA3tCHLFZxjmFEmrqCijJbhNS6U",
  "key27": "9qodPzGyMzRQdycv7ZjyouKgftanXpXqLEwhAeopWHQq6DpCuiHd5wPq93qGj9xvokipQHzgJyqaGD7Hnqz9GsV",
  "key28": "4rdrmwJSE4aQT5sNTypHFLVaZ6fycGvfPcWwSd898Tsic4BghhXiR5GCKevPSdPqYrPP9vUjYGXp8hByHPaSTdkb",
  "key29": "64ThLAno8JoB4S2U1KreteiRcPM9hyLx8VFyUWyK8CJi7kszygS4S4WZA73jjZnS4FHQ1W1jqnSdGGWwKYPcAEJa",
  "key30": "dtJj73syr1TuGYsHN8rfy1nR17m88suTq3AsjCrNCGCT59neUb93fDE15sC4Ef4jN1cKMBPV2iDNkwCkAeb1Nnb",
  "key31": "3QzQRP3Xx1C8xgMJxtMD2mXmsD7njmoPbi6q9sCHe2PmofgkJGHpcmDm2yrZDtFzi2gMQGwMCjaV5GyS5a89FYaS",
  "key32": "4z4QigS2TRZYieroTmEc5fuaf2oCT3RpZrJvT5XdcPnGSj74JJi81jviZpMtruiJmaK8dqKPrbhTu8vscVFpFs5v",
  "key33": "P4QFzmRF5oEbF8FpBaUYFqRZZLsoAi46MtsPVJQA2HcoBGBJj6wcHcYYip1PMwrWi2Tw92k7GRK7y6gkkQQrpvg",
  "key34": "3Xp1fMvghJmD6oDnizLKsR65T4TUSU5VLiSFvEcYs2pabsHiLn5XaAXfytmi4nPQtTZdhfUqj9GBbygjPtQm9AX9"
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
