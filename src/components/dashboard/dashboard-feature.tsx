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
    "2BF2aW5dnMtbDy2KdYVsP72CGpJVUo2EzU5nZ4SWTsXsE2dDjCtyxEmVD4WdV7W2Zi4YbppcKz6o1bXnE3dg1ejN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52s1qtCffVuJ5Tb7E5y1hzusMxWFV6JaJw7mcbjGMXx7KqRe5U8yEDqtSd1jtv3zQ9Nk6BcUKMLLKn9XGhUGC3JE",
  "key1": "66jnNDQWAxvtfsA7ZTSPK6kUJF3Un7jZrbqtVeodu2y1vKsgeHJqcuSNHaPxvZcdmhCy1pCPFJzvSiHuCn34grse",
  "key2": "3NVZuwe5pu7tT8VM2uNvk5WVe5YZdJ962ixNSdZcoq9DJd9FJoLxwysHsVFfwC5fT6MdPyNYXftVxj4ySmxPu9p4",
  "key3": "31QAqWT7xvaMKrkmjyi9Krdb2vGj7GPV2wcmquZ6TXj8peiw5Bgyo76YiCr2jTjWcMPwd2LK1jX3ZdYmKykAn9Wk",
  "key4": "5bdEXXCnk73t9CDm5bq59BT5kEG67B9ah1s2GdHEesjufWYSneaes8wk8nDoKnn2C3Jdft6nWS4idXmTojKkZ6FJ",
  "key5": "4ZXngiFxsA1rRRxmUTdvNzXTR7EUq4D5C6FGMBcV79T8vzN4h44SmSHmUHriUyJqSD61iFVzCMLxbAzJK257Ac4U",
  "key6": "2Tfo8u3bcEtGzbYA9syG6WxU3fySXTyq7XQkx3XhF8Ntb7kCxahiK5qxto8ddVzkY4AFswbxq1utE9Fm4Swv2am",
  "key7": "5EXJkFN7BzGWFvHkvD4aAZhJpg7VDSe6YoxwvUZMtNuoYcLbgwaqdYe7DsVGBS3Z8LHXMBbBR4vmQT8PLrRmAWqZ",
  "key8": "4JsamLfmUbB2hRq9driB2ZWaxMFxEEkMbERs37HrrHbdmETWi5Hs8dyQGcPoiYAWG8SCtuzysLGN7j4YaVB7HVaH",
  "key9": "5csYZKPnaRJrkeUVRuz7mqBCTHJPa6qJasPPq5HAUfPF2kDLYHMitr6548AXN2tpb57DWKrpC5695hZ2eVdgH5EF",
  "key10": "36zPKgs8qYenu6sVS4KBQYAKK24r5YbBv5fXUjEc7McQq3qkG57YDYf2Qj9F1CSAALAHa48dndT3ZiG9j8V7X247",
  "key11": "Y3QM7EPQbkvEUYhGJAegW6DGLzpdFGHBv4r7CLLadu9NvvRq3T1BraPiuHCYr2RujUNVJvZzNgwQKpr991eY9mQ",
  "key12": "2Sc3yauw8gfqLuo3QPbiPEMqmw1fBdPbezjHKRoEcad49KaE9Rf9963Jt2R156K1Nbb2g8Wyz8m6YFRYYbbsxn9t",
  "key13": "5ZM3p6vuNUKc4p4FSdQ7R3HJrNcWR2XA1VJdAVgcLQUvahQ8ayEuukdYT2f7B2P5oKatBWp5ksXGvUftp8LhJDCe",
  "key14": "2pcn5ddJSPCuGsMrGexBVVKPACZKGtRCn28kR3T2cMzDdgUX9U2yrKuGVNikKvLyQxcUwCR6FpPNNLndC6Bq5LxW",
  "key15": "5UPckk8xKfhPUYZ5g9cxGFMC9g6cakTwP51gboB9h6RWegLkQGc5CmWYd9Z1FAXNUPSBuSbsfWGDdjKYfmS9cscV",
  "key16": "2wGbC2vCW2kgrKxXC6KgRKhWvP1gTsvb4gX69o4N3MKyAbcL2DKvWdPLQCgtStNb9zYDqagmJk2f7bqwDXb8vWdS",
  "key17": "5LDMqiGB5PhB5r5ZMQ44Adv88cL4A2F8eaJhDiiCBdUgSDQMFhx3MA69dpMoAq8ScKRZNwG3mSPZcFy7w5NVbGLo",
  "key18": "fdbAx7KvHkuixLpSAgxuWBMv27GGFi4gBXALNPmMeFLBn15dgyzwiwR1wTMMJ5GtZu6cfsXYdY8vzWX8EVtWqxD",
  "key19": "3UBRyc57Tini12KfhD7Z7GQWM6iuDzXAdn9b7TFVuhoHq7pMsubJPgFHrJsYsK47FGDXfKJNThVMULT82yaxumDK",
  "key20": "2jbzivbGWD18K9AevKwavema8y7U4wKtChuNXfqyjXUUNjAAn7buSbp7Y5zkQCUUup3UEWyzWFG7kjUt8jS1T8r1",
  "key21": "3pkmEYuJqRWsAWYATk4XPREJAacQpAUEBt5en6Y8Lpum66AsSJxNoSz3YAeFxo984AJukGgFrKNpSGjgWjMyiPxz",
  "key22": "2SPGU1Ymnh8hwQ6vNakgM7gVKcwRdoat2R18rmbZWPogKperMoekDy862RJF4TFWiKCuYbXdVPFvr8emTSWe6aro",
  "key23": "2AjCT1Ws3Fp5S5DXiKhmQBRq58chCk1U5PAFg3QGzNBNcBbTN7jdk2uw9b6jbcoxodFVtxR9XuKuK5TVfLXLDvaU",
  "key24": "36eM1gQyGMGa56BYtF7DY9XRsd7Ag9s7W7mfo2cVzQviw7yHzHvTUUCTa8svfSn9ybWPMzRLqnXeyzpYLAkdSoJv",
  "key25": "2QhziUVcLZruzFk3bpdeBb3eRMTXSm6tZtNbSmaXBheJJH9K8zXfuY7S9KDhVYdjosJYdnmFCAagfZ7jUuQodg5a",
  "key26": "26B4ZWjThtWybAgKzgfwXRU3FgzbNjaNutN81tmpDzwtsmFEnTrN84oo48REXF9wYGmB4L6XP6Sj26NMHvnMpGqn",
  "key27": "2mjoQNGYqUA2LECH81Pnndsgqc86Vkn9y5kwaZTfZnSdpFZkctWcJGZvbJMK4vGXYtXSzLCptUuA3xJUUHKDjYB4",
  "key28": "58QDpo9bnPqyjomUwWb9SPo9W3QukPadDAeiJFergXy551sELXjx4MwwCdmtQM5MsZQghgy8D1vKVR4jafVAxRqq",
  "key29": "5Rrz8KV14VFSFEuu1YQttsDYYMVuTaBrHkkw2xQS1cZx39M63b7jr4cdQAYnQbUKq87pxzM1QDZJMeDtszkRaccq",
  "key30": "51t5eBv84jytETxBPh4jzqDBQUhpP8pBbAPfykdikAXJ6BtLsKsYwdz1BR1ewrnkH8pm7KjsqMBDtmfbF6E2gXVS",
  "key31": "3Qu6WGeQ3JdyK4LqUaR1UNZqW89kgt9TCbQ9UiJRuY2wqXDpQn1jdFhNongrCC68L2y2j6WZ5yBDeUBbhYRxxqJJ",
  "key32": "3pVDJJNFaXu3XpSurk7dJPur8u2R8n8oYCVoTPHGo8aze36rMSQ49URD2LDrf4HhUmcD914APKuniMAgyLaFjWv7",
  "key33": "39MgjiJAk6CxHLv3XJWSVz4CXhvT1Aw5CJA4QmdNxJ3jDgHcAYcywuP3ZmRCc3m4qSeHw67G3Ax5cTUchP7wLYki",
  "key34": "4RzvT8Q32E6AtPTA64LwXJQzFyThQZjAsiFTuznXBWXSqvJdgx9MHuwBuYeTC7E6J4RDVtFJmFhgxVzJdQTw7z56",
  "key35": "4urgNhYqCnB7hcQGt2FK4fZk5RZeETvt49XBzZMqr4gM2TL58pPVioq3KLSkAcuCk2Lp2NnDvAZ6Ng4dHE7RBjMS",
  "key36": "46JRABc5txJa3TQCATs5dYhieRZwhrhDHvrEB9ARUunFqdNpgeNMVJ47nKwdjz6nSrrn66gykKPjU2T4TRed8Mmd",
  "key37": "BRaUVs6BqoyJthx2SGv7gSCya8hF9y6XCcBowr34LgQBxef5otk5TfPMcT8fRZrnGLfXuXXUKZ2EJ1iGRexUv2C",
  "key38": "36N4EQmjJC5aw7X9KQt825taSA7pJvLaMQacgUtibi6xR6pGeo1TSymkxuMCQA8cXbsRMxcErMyzKdFVWx5sbo4n",
  "key39": "2Z13XTUGRNVzH7VndSfnXXJVj6QRrUz2L3WKYPZuXgwJA5SyjFBtkxsCW9uUfWBcNvDdwMoU6cSuRkrvq6D9yJ5m",
  "key40": "3b3uMKGxU2jkw3Qx9TNQP4DWjj41D9a2YQ7wHDqp6R3h87fw1nghJ88yotmkS35ihCbyoxfKo1mzHkNgbAZppp3u",
  "key41": "WJsHPowgFXGRNtqqGnSBkeHJ5VYhrhLetaxVHM22HB1VrJcPjCejdRYtixHKoqyu44UybipqPNgVLuetpfBe5hC",
  "key42": "21Ap6cUiXAHR8P88ytuLfi9peLKH2KveP5WtbTVXTHev6zFLzfx7K21qJU6oSRegzTtc127F5ZL7dMJC963EesS6",
  "key43": "2ArejhxJ6pdzz3oyMWEeiaAt8eauEf2cyFsksTS5iMtyJFqbsuS2hU8QWNnD8BZVS66k6b1vUXY8vsQt5bMhPzB4",
  "key44": "3tnfSiNrYG8Mget2opGqzCVPx1TubYfu6fPrPshtgWr8bmte5hVBJEvALNzvD9a7UoSF9cKkdyxf1tZ7i2uFjHkD",
  "key45": "43Jp9p9GZbinMgqcvydpVsMFYSboyCHbH1MhYfxBCVqjbFfof6CpxdDeUhZM6PVur6cw23PN5wCp3ievkptuqcE"
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
