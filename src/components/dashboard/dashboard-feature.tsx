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
    "4beqr6dYSMkyEovWsVBF1BX188QJcKGXGKNkU68ohJrmE35afkau8U81dkWqA59odd8KgKLmirpXNrYiWs1d3r2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616ofkhPtPmZJQ2rHsgXVP578iCeMhapsaGciqZxGquUJ2S5yT8n5Gc8d8tTiPNJzEcBL5p45pFe9pdXTABnM3Hx",
  "key1": "2tKuDTxwwitiWpw3HxEkNwpiDa5Lw8Zhh1c9wrk8KcTmwdtw6q1yWKWW4khVrNPc9PsxAHCYtnP53SVei9emC8mt",
  "key2": "5q6zr6x64PWuAnWzu6yARykthv82ZgdhYMHLSeUAhT1tVSaNi1VVvvHV4n8praSoxPEZ2QxfYaJJWKu1BVNc3LXu",
  "key3": "4Pv2fJWx71WfLU1Wg4TRHCszmdhN9s3AikLNRBrFE2cbrPCvuMJsqPgSh8otf75W71rdVL338ks5cor6gVrYB4VL",
  "key4": "2dq5AEdqVyiocFohAPYaHGs7xLmC7gx2hJ77HR9wVLEzQLLnQFpoo1g8QNYpCTTDfL8NqFbB4y6aZ87qFrkgbQZk",
  "key5": "22hD4bZRPhTU7ft1PQy3ykv17sZQaBciwvTBSArrLjgahK6Ge7URBduVFnFnZhY8zQpBrNzroxHBGKc3SWx3sGMu",
  "key6": "5ye21bNn9UixAY96G5auWtFGBmWjWkCQ58TguaYz58pRVNgyjjycmQ612b9HmCCgwzvDY4TKaV1hRYEcYnMMe9m9",
  "key7": "2DBMSwzE7V3URfZuVsKLsSSv8Bh37bWhmJZEPf51UCJakgoXERfrcZLWukZdDSZu88wrw9PsvAgqNZK2pYVGGLkd",
  "key8": "63RLWYWVGfhiUz43hRdDV952jySksTQ2Wj25eNPDAwAegJx3yAmi8RUpnHPTHVh8kBvxXAYqYffGZnaALHY3ga39",
  "key9": "2wX7zrZjr2pJzUzudX9eqwHiUoSUBKtUj6tKeUTmYkaREdfpuYzaqBxv5LHPmRmsEQ2tiMMDDYWz8RPu7nXXT2ge",
  "key10": "3dwQsPNGet272kLUgqVcR7wDiJw52T5Wp5E3Jvk3jqBXWyEng8hxT3NjbBNnRdvrqcvX8K4vPLzT9Fzo12r5GJL9",
  "key11": "4bbvSApsh3kLqBi52nRTAM69z48wwDeos8fKSAUX1H8tHAjvNis4KLRKGeHKgGngDYt9Hf2PRRrAxqUTYPBTXMAZ",
  "key12": "3L7DtcjvtZtxeiGf1GDmLttfVDnB3md2qEad6yVtEdWb5TgGr8orJgT6KeUhSrfHqzDS9ZFepCp9bbNDaF79gVBD",
  "key13": "ubZn6T9Z5TCEZvExUr89H6ndmtLL79C95djW2ebuocqevUgMLqpYAsnW3je9FUuvpwRwnDgJxq86fTFwM8SmWr2",
  "key14": "2iFiFKYxViaBjEJXF8M6pu5eq4rXyhjXAd8xW2NipHHMcyPtJCWSMEko6vWRz5EXZm6WkofzbzSiMbBmtbWAzR3u",
  "key15": "55zAzbTosZYxTFhsZh7x38RKaWphtLcdrJKVFwHvE8mSes1AVbfjiKJMDMEshVbEAxuiygEbHCcewQj3CrzUEdNm",
  "key16": "2ML3nULJg6Loz25QvP1eC3wuEwpLVcR8ZF6YpcQ8cBwvWerCiziNXEZWio1HuuuqxjVzoQKkhDcbkdmHPntLRTzi",
  "key17": "C61vscTwgJrLA3sLEhWsj2xnLkgK6hYWL3yxLKRFN6P3H5RCg96bTEKBRx1Mmfsb7qzQNzRrQYmHiXBWMrZgZNk",
  "key18": "5PMUALndAW6n9F8G39kSM46fVBi2neM8CDG31JYaw7DTCpK5UmoNPGsMnQERH8DvN2p3HQxYfZHhqDXuHYc9DJ5i",
  "key19": "Snd6dzVDKskoZW6zcAy8wituePZb9NuTpQspDnmmf7C983DLGBZU22CSfnGBhHD8XrTVTEwn8XQRo5FHSqYezwQ",
  "key20": "4ptLFbr5PntjPkGvvQNbnxc1QQBFcXQJcBaAaC4HGM2czW3mfYyoK7UQqfqh3Tz1YQC2yZ7wiKV1PCcnJHPx2rpm",
  "key21": "2qA2FcSnfnx9UfDRy8G8P31FEtG7fHDsxEjx9ThX4CoQgewM7puPoSn9furXjkvW4HHopWx3ovaLUEQN8bgbe86w",
  "key22": "2TY6bK6z1ZX1dE9X36x5FA6WhGCBZTUNsgyetGaM1LXnphHN7VfkiYTeyrzAqgRcjB9UM7gAxk4xJ17UE8jTi3VV",
  "key23": "2MG4ees3HX1Cwe8DHV1Rp7ngnNU9mfXNvBFTsajJnPqwu3ZoWgqrHok1sinumgpjgpumwAAScVg3wRmSy6R7jdeC",
  "key24": "3ZGEAHaQgd4qgRTzfq7Xam3usU97zLVygrEqLzeRFA57eJR9atdRar5rxvpKtGjWAChEPEP9WtDzjgj422kkjERb",
  "key25": "4Q5K1eMrJro5NoPvyTpE44YjRAGY9s69oDvWbqCPpeVai9wKov5NZp36DmqL7pxxb1KMNgKomddEQoBmgqgPZSd",
  "key26": "36BDFZzGAgGqhaqW2n2TYDzCSJUbbUbeFWty2D4bAHZTqxR9ik8sqXx7Ji2BUDrspp59zvfGYkH1Yz8apprQ24w",
  "key27": "QNLmXTWEEDvjcVdTwGdmpsMh7kdd9nsLuWEgXFSHdEPJmuwZTkaUJZCsZTj4uERraL6WiyJw3ur22jcEhT2RGAa",
  "key28": "3hoxS8Upx8YHwcKr5khSLpgF53MhcVoifiDQpBSq5RY8BQ2eEgfuJuehPVBZ34XhGzsAsYceCijUcSfR65X4rGiq",
  "key29": "4tDMGZ7gUdBmLXyfezvDh5M67uAs2XsnwiGQveJGiuZfazrqC2Ba7KwkhskBLSYQBMwtb5Nnbj5qUUBCfwRrH47C",
  "key30": "yL1ecPtH1GXC16r6D3RBTozXy942cxcYh7dK1YnXFRWLA8DZaXCc2ygKMNzXj9VvheYy2Ar4ADNqD7aREbyjuJ6",
  "key31": "F2NimVdYz8iDha1SF1tQfdQeTYjPhsRXUBuiRJRxKDcuN7HPYzQxiGuSwGsy254mQmWnpnkgDieWuQ6Mtedk6ih",
  "key32": "2NxyKSFgba92JyK3szfxbEuQr3KXxKoTL6pJMm1ezHNxdA8WGDhinmhrLDaXUAc5NqjCkiAKF67B6H4mk6RyNvQD",
  "key33": "4AzDqQ6h3qF9TwRBoXvbMrr6nHR7E914NrCzj1v1hN1tumDAyDKc4tZ6xWPTqp7DMopxUihs7KkKbYDm1ZKnFKTC",
  "key34": "62ePLzTHabfSR5fpY2viW8Xt3HzSmJGyeB4VMjcB3Gv9P5X9UKrp1SWtQc7pq1HWnnA7WBB2mRA2sTocVrfeDPzo",
  "key35": "2TpuhjpbEXcwJaWYYcMjqmGpxFpLYzs23ubCGo7zyFRf7FiK9mm93choMBPtCqkzeBVHo9hSNZwiKxfRsysBWSCG",
  "key36": "57gH28J5EpqTsAztz2xNoTTPtopb6kfQZVFCcs49seRcShEuYtR3UU1JKwxEPYpaosuJtgDXiNpkt8QQvm2WJ8eo",
  "key37": "56u1z6BRhr4trLExMhFcjkPUTEZBBn2z6DXCZVJVud9nYuCeHsFdYdvvjB4p4iTFLqFaMQpVLZTbttTHqHnB8y8A",
  "key38": "3qmGteCghtyWowrQLTTdPW1pPvhTqLNdzGkYJf2CLqSs2ZN6JPXfQahDsUEdNQN76CYYfQaXT6euiiv43VqBbSXw",
  "key39": "5qJxmVYohueqEqUQpypJ2BXCqEDuPtezieGDkHUD4h5huNQAACv5pjUCFpviHB8L68cTKBRSofS6eT2SzsAqgDkm",
  "key40": "4F9cZudi7hM78FskhZSWyKCBWqgmV8Pbk1nxu1ad76CoqMELsGh2zaWrYA53tKwzjU4eGYf63cn4LFJ5oFzoQ6wN",
  "key41": "kxPbsPWgAxtAroEuaBCiVnmac6ctxep7bwDukg2eocNhz5RAqFDLjfJvekBv4jFNHt2XQpdV4B6nHf3XfwSRaWc",
  "key42": "aG2P56B7Kh8BKPkKisdq8tWGRVo6YwyD1yQxA7GkPbz8rdu7zfxMCucGx5FdSC95NjUqtRV2oqDkjFXR7BfjpJf",
  "key43": "2CYxGuL4oryv8ZZnT8tmZ1F6iVBd1SeygppoT7hLzWsFxfv95VgYxocYarFy7xcxaBnipYGh8pj1ne5PVnkrVEuv",
  "key44": "2dRdKGoHdRoAcihFsSq6nwDPnKT66ZV3VLAxfgLNfVBLdXhwQNXicvkPpY5ub5fHWAYuSdkemmQatjEgeU4fhMpn",
  "key45": "3KcRJCeXWAdVRUFpm62qk52s4Uw9pw1rM9Ane7qorHH4iUBU6z8LToEZLuWB6Et4rtba889Huw62oPTswWVBUq1f",
  "key46": "2yuM9pD3AeqD6TuMwtRHE8vpwzXW3D6d4cGcsCATroQ3oc8VcxZPYrhjkdUS93s7GVBPmGUH8twCBs6FYaWgyX1C"
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
