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
    "5BBoP8QPdd54y5q4QAdTf3HDtZmgnvynWoTP2JGQatnZZ8VZV4qYR4AGGuyM2DfF5xyyLHy2wvWrXW63enNbyXk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27fDUqeWrmmksDXm3mGKHCUBAzALSVhLaf6pCahtnG9roDbX7fSpMHJRf5LwwQqhp2CBG5zCJKq6YtMKYTgtx2uS",
  "key1": "3Z7eWgEGsfgR4KEgZPjpP5L3uRowRyGZGL3kT2GXxEdEoGjSveqnR4XtKkzfjhWa2kh5LgUZhUf6i7tY9k3wUxBp",
  "key2": "5JPquVnwCcp6BSheV5tDNHtyk7d3bpqWTADyy8CcT7sC5KwbB5VAXaPSBbSQzjj1PcEsETfCkkHmDLBVvnP3xZvr",
  "key3": "2zQrXQZMYjWBwMfAD7YSG7kBSTWTx7eV1e5cGUV8pRNCTHQRmQ3iiw1K8FVL7bu1UFpz6TdwecKbRZfcjufFTtmo",
  "key4": "29qmzGYU9FczgV2M1ZjK2X1Fc94w6C3VKd3PQRDMXEWTk763UFPhKDBRDTSWb4mHSxkHB1RZCRhVik5wxDQV7CVH",
  "key5": "3EH3FbYpuYegz3V4ZHmG9Xmi8vPY4MTbbyMvaMhj6FCE1itwESkfni57sNWAubux93K88R8KxwfEcx7sdgeRYp62",
  "key6": "4jhhocw6XjgtNEbpQsRgNugyoj7dLNDSoqZvcvWfuGrbv7yVS1YGqdzcyWBY6K5rgLxRE5GVz9irBiXjbaSTQsqf",
  "key7": "571cjpoMHAT6WUvKuMACyUAJVdvqdwDkXJrjS5pGghLP7uSPaeCqLUHFVsZiokcAESiMkRam4mQKZ7STL7ZprcdZ",
  "key8": "3npkaBfizwvquVpAAhdqWjPXPsy8eKYwevLADQFVPM7E7ovfvn93N88g79A76my2W6nzJzyNqEmxKQ3Wc2DuDYjz",
  "key9": "2qEAowQB4BKkkraPRxuCHp9F2qNwTMzgAgReY66Ep1kYBy4KmHCzH2YwBCscUKfnJo9RpMREdMEEFAExsnNSq9GG",
  "key10": "Zsb6HCF5wDshovFjY8okSZ3C27XC1urVVfj5iqUYo8riEG6MUwWfPm2dAxahryCboejNPCwE2jmXHRgRe5ap5p3",
  "key11": "5Xvg8bFwo4bVkFdpQhiGUfzQr6kDGbuXUNAep2f6DtmxoQ9cJLQ3rfGJoMq1gNU3dVd3TLTcMngUgP5ijwwjySR9",
  "key12": "4G4JroXvaQYwAQc3ARekeky2WakbQ68z8ZHK89WxQjKh4ScshMEn2JukxCKBs62YqFGjYzLG46ZU1EUyNjAhR8so",
  "key13": "2RFNto17SALrdB4se9irkDPmo9EpTGUuH8rpF79vEJ1CVDMESanbRkJy6kcTY1AZHoySM24TJRY1qs8WfRG8RU6e",
  "key14": "3brjPKcPdxyMVumkDraBM9KpHU1z1JxffU2AeTWdCRwRsASpuJDA6kXtkwKZVR8uSoPWqSx51ALHmiwji7t4R6md",
  "key15": "36mxpJBE9mjRfHJjieH4JS2vUeosLoC7yRCs2rV7CRZ6Jhz1hkP257osZHu5uP7LvwGrySkLcS6DYyFMe38zfqQU",
  "key16": "4HSP49vWQeUZh8LgJ63sWuKHhARmBbNitx94KNMcsL7drdtC4wafsDHorF1C9W27faSatcXAxJ8rnJrswmKcBMon",
  "key17": "2sD7ymLNPog22FeZmvpLSuR45ZT5JS5r1YmZRFsFKeqm5riXdq6YtoC8v2jfxVfbcNUwehyFBApyNCTEGQ56r89C",
  "key18": "37Ki9csxHkTBAaMHtfiutrraXWFU324QHJvTMFR1isFfQnnPiG4bxUPcNeUSYtUvkGh2M2eSSgpcuXK27zK2sKoL",
  "key19": "4UeaQ855nNS2w5mV9aNhRYWrUzaP5FUcyMgGeWciJJ17KLsGrvYbNbmQUHLvExfNapR2TtyMynNfjYFUYc1BTtrb",
  "key20": "5Un9trGHkMSqmwgkZUUJXsdWNoegSDKLDeQLz593e7Qi2pJAXs6f27KebreeimcRkeRuRNiBUChMfCto5RLA8WAp",
  "key21": "3JbDsJf96GX9suzNBTpqKhUq4FHpiL4xV5QQqtfoqE1tJYwEZQkM5hM81EWUjJAkNZjkApdzk4PBUVdETbLhHzCx",
  "key22": "Sbx6dm6dPJKyeTwi3BN3vaekLDpaU5CjhFWHTuTikykSXEB8tFPUhqXcDXZgzRgF5dJDwyaiAebe7yF4egDWC6d",
  "key23": "4kpS8hrYJ61a5gP8Wmney2kssczkWBZjvFqLKaSMs4JJaa8NH9uBKvRQn4nmVucauHWVHDnDod84Ft1JVGHwUDd5",
  "key24": "4wqcvnhQwV78tRXk9Cf3Ho5ym9sPzhb8BJFaTBdMBVkb1rCZEvfh3CQPYJeF8tUFQPccbimHY1CcEhg7Ay2t5KmP",
  "key25": "5EmGWRwvtgQMmKvTrdJLceCYD2fcwmjgu3XyzxMUutyv1mKyuFcJWLVDuXCrW1TTRu1GNq8mvNJ4FLQkGH1Xj9ok",
  "key26": "5FQyxJTg2Es38gayrBrL9dmc98zRK1JKMAo74msu1X7wsgyrpaZVz6pMLxMgUz891L2Dyhba9RmUpctSVz9MP6TF",
  "key27": "46Uo1rPMLummyEXkHXfgrtGqq36hgKCBqWKm7Y7Y8MtSqBsnUZARmDLm4uSP7RhEStKRKSxghZR4bsRL7fwSyJeH",
  "key28": "37BVcmxNz82kwMCXVer528Co2swNQLN7dJeagZUpr7Ng3vphpW17w23GyRuc94phhRBYuxuoKpT1RsTebPx4UkXo",
  "key29": "24BC4aTkwiujkN7KZ5mTXxnyn24SbQgxSP1LvM8ruSwncK6vS2bXC7U1J3TxML3GhhswdGg1vocrWJnwvRJg4U2Z",
  "key30": "5RVANLDF2tTYuqjNHFoqFTdXNQhw2DsJQLmZaPcaQt5tcJomiCh3ZsBtAjdQMCvvy3q779PjghJ6SE3H2GizJ3mi",
  "key31": "4sxrW6L16owM598B6sDt9yngkATxQGvNgQEZPxz7jYbuLtbH7KcdcaYpGCDFGy1cwAckUDRNuATwxdszD41ZyYV2",
  "key32": "3q9rwxL2rZ4EDrF2XH4BkXfuP6u91kiqQ5k5giL5EJkc9is7FLefxhmCJUJE1ANgAwoS2F6jvmsfChmgZsKStMD2",
  "key33": "cG7jso7sHeSuejFGpSxC3YLG7GRi9sW5Q6mA7A8awWgSX6gU9e9p2zfSDU4sTjwywaSYRzdKKfke1gaj1t72s4K",
  "key34": "2w5vFbYVfShrjA7WNPtVc2aiThXotyz9LeXoknVNguEDMNduczf1anHZdYz5yMYnosfHYaDSgENZ7tACbhBjsHSy",
  "key35": "gdiLShspb8wJWrf3bjBMGxhHcUiQV7sPL8wi868ZzMyR3AATs7mkdPvothiVzejxdqigYT9Df5kgZCfSSdAkSDq",
  "key36": "5fMLMEeBKVHc4NHYUBiWCnY8cmBZtmpqGeJV6ZhtB8Dj7Bm9nHuKVN9JdjVkKup1trTaxkG51QWoMWWv6ndrbMxD"
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
