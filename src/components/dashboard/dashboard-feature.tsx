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
    "48d2aNiiFsjPgfNTQcUufrPRdMcQYp3R3oa6LBtavEBkXGdjRiTuQZbejf1CrLVE8sBrmem8xoxQyZXx2ADmfUjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cA7tM1xjQWaLHpGJ1rjMfPmsVFFGKHg1hXz7pdne3vUPqATSvhpkmSdZrXaMAw5ricFJq6rC1vDDkQqdYBjTUtK",
  "key1": "2ZtVRDWUXZeJyEFvYReuQJxDSS7KJKAZNnn5zmHdaXvoEfEBkPF1JABrReJDMUsKdRJAmj78n5wSvd4KuVPbzHZ9",
  "key2": "3a75KomrCxUrhFefzELJe8rJUyCdUofBS1fhs2mCT2Ay9GSVJHqyaHhKKtJ5tABiZjE8Rkx4uFxAcji744iYTiP8",
  "key3": "5Mh8HxgygVWPhyHin3XEpX347W2NBLqVSKgN7EAurUSxEFFkP9QQEvurKxycnc6a4HDDPNbuWtoDt5cdAKYFb2pM",
  "key4": "5jcRW63rXJSKaX2VyViuhgfGyz4rs8ngjkqamxQNhDUHcof8aDjspK5is5S3eXMxL1j6Vx6b9R8YiGkrRLbwm6DF",
  "key5": "KeoGsTHjdt3LZULu79hy4CvoL6AZSayfePfSz9eQ56pDk3fUdzTvqLV8r2v5Jdg3eBrpx9wH6p6bWZwpmca533v",
  "key6": "V4tVVSzfocNUH8QMmGpc9FVwmAJUaaBWCqLBwmpxNrMYTEA9fMABq4ahPrcU3RaNMkaofJXk9oniqXtRsfyUMRQ",
  "key7": "48sA3XaUPAc4tHfvp9YcKcarR518fU3cdEMvfqyhy6jb35YJnuT7V7RgrEFoJKQDETPhKVBgB7q1BUpfcQoww6BL",
  "key8": "2jVAuSzfmfRJygc8yXTkgyFkhT8bLCZMAjrQnkATANPXQcNYkDNnMqT9ZibMujqCAPm2g1EbCdB6Su9cLrHBkm5o",
  "key9": "5fB7V7zDXzCaU153VCAaDT3EyuJ2Wmi155gwWtdS4EbMfNAa5pKA2gHyHMtNrC1VVu45Pgy6Ds1eB8STSoFLkcYw",
  "key10": "32kGUGRRNTXTgJES7JzqTcQU1a2T2HbG6UjEhq9QAmh79uYsuQoSuTTaxBHnrTh2fyh42Aead3fwgLij8bvTJH1n",
  "key11": "XpFHZCeK66F3mktMKURt2Dypx9EDRe9RBytibojbbTpUQzEKzHNgKPwuq4MRZY9dH57EBkvbv3yUnnZZCL6Fvm8",
  "key12": "5VD6MphzJv7b1DnBCJNopArZa2KFHyvs5TBWq9q3jdG6hDDRGnWAY2xyQNNujCfQmnBvL1mUjnFjwSkj7EhcxTa8",
  "key13": "3UFApFhFBFW4Spi6cJqdR3QXrE99H41DLEDrpanLxUR1PYKnHWg7apCMyfrNbfT6kYdgJjRZr5QvMhWaQpNdDwT6",
  "key14": "2HnX1y815uDUUo4NSnWYJYTnTd5jKQKMvz9t4zw5QvsxDMUFoe6uFCRjbbTt7FgEzS7obgHHPp4vaUnLr38GzrUw",
  "key15": "54whoG68Tpn2nwyr4T4bzaQB1TGBPRunMTFhLwgjyxtbSGimxS35AeJ32MHK2X89g2bZEMwDQVDYsaYpytiCGAKj",
  "key16": "5chpSrgCzUCJxQ3yHdDpoiybdZfh8xnXMhSVzMq6Fb21zHAg8ujPTB3PK54apKCuxfkkY2eQAjHWXQJv1kBmHwas",
  "key17": "4W7QpRH3Pc3kfyoX5VF3szmGEQM6KR68YkrKyxDAovrnJgN5DqoJk37YEhFqeKWX84oxX41X4MdD6tp9XpTRp6Xp",
  "key18": "4nM3UnV3zMoBkX9DEtd11PX5F1Fo2eky9Wwj42YDZ2uYhjaHC12nLQx4CXZ4mueAGWr4C5tv1RNwDd5AQnexNGFY",
  "key19": "4zLdVmDhyUWs6zcBNsb3XXyg642uNZcN9d4B5aexzVyH6S3rBwmawdsVuzezmHqAwVsJB1A51hkE1PGEXaxevtEq",
  "key20": "4A8hwLiRG9NTkyg7tX7bpwxqLkogLcfLkH5rVBUwFwCuCis8MhFkeNZnnvjJJQuFjZ6F69nyn9rhHfiJCHajWs9G",
  "key21": "4zHm7CmYGxtFyF7y7Zx9VPt4sPfxPekGea6quzZjcum9kcLqv8iqij5Hezex7B1bYoaW6b7Y9cCwgEnRtQMLLjdX",
  "key22": "2Rdfny8LBqkB8TGxj37X3zthQK2uve5sSdXcQv6Sgfi4yXaLJiw5Zvu6yFdrM2vewo9qDrD3WGh1DrVe41Rth6SE",
  "key23": "2my7THa3PU43NFdoUBPDNpTFZs6NrBvuHX7tHgqRNZbEtGQAo9wNxHEoJwWTzGyabuyQLqVRoegTGdBHGjbEYKCF",
  "key24": "2Hh3WENUreygGSkro9AkyjcoHawj6LgEN3RSTHAEeQNEHyHn7zDdsjrXzef1TRHaw5GZJEEhuBVxHKKGPodKAkZa",
  "key25": "4Xf9SckifMnjgwWu5xwyhxMRvATDpeaur9JgVSzbD2UENUpAtheaxmgA9qjA3VTfYnYsD312udFPaG7pRJf8B6ZB",
  "key26": "3xPgkH1zRf4CFuRbSs5Y3yBSRxDEwgrfLokCjepnbZRmSa8BGMQorF1YufAYAkkYPrEhysj8QCf5xcGPz5MwXUwC",
  "key27": "5y3ufVWXJSkAsEZQHi2Unk7HDa1TT5kNETDfHY9oxKBjhJWvh3w6eg5QeDgS3ghRZwQVtypxFSR2MQf4a5qxKVCg",
  "key28": "3se4mBQSwmdMhd1tyiEWhrXwDM2ZHScFvGQcynagr6bH7LFc4fKu7AKRvKWvSXgd7hhK4WGMzeQDHaoSVmLTKJc5",
  "key29": "XdY32Gq2oNoniCdR19Nw2T1YMPypTrQEZYCz1EYfVM6Jd4J2ZCyvjoerBZqKzc9v6sNXTzjGcKwhvLhPSURqtL4",
  "key30": "3BwSpQvK9hypH8peqCgCekeza1CUp5PeidCoTcdbhTciHApLUUepZhx4czJfT16bng2SK2xTm96nk3RBKGpUsbxw",
  "key31": "2K9dZweruSTF9gzMzSwiyAbHLrzAM7Mze81t8cxK3c1Rnp3Q4CKBojgwZZ6nQHtCyHRLejVcHEs2v41u6ZjMV6qA",
  "key32": "3MdrhYfqgM9nkQpnK9AW9npmnvr6SHv9idLN7szAcBmAXdSVcyvQFj7Wb29cw5iT65QiPtM1Q8NK7PTHa5wSmjZ6",
  "key33": "3YUqiEhYMGsgXCZLU54KRZQYeLenpXfDwkY99ckEQNW4NU2yocZ4PAnGwr71ksnEJNdUMiYW6TnhYycDvL5QS2EY",
  "key34": "2nQXos6iEsHK7ZNi8FB1wNJwaxfs5U2G9E51ruE4vrVCupsqbqRNm7MKKUTBXfcGf8qCFR1SbwCb36B9Xd5RAeZu",
  "key35": "3CoBfvNusMuQM6u2z2Yegxq7iKn7pbiiBnYnEjvX9R3tJ1wfwZQ3Phqt5J5aX5DLTMzm2dFkdGAY7MV9uaUi6XGW",
  "key36": "LEHpJPjjrLyk7UgbMEMY2p8DufhGmV5s1655cDSLAKW6UaFhzf4fUdmWFafZNEqHNUaD8SNoTnsd6aqj9DdUJTX",
  "key37": "5bRoPMYiCKUsXgoNopbwdtveLugxy7sCN9fKpM3FdtrYXL6VU4Q4gEe7jrZjHavCNdieDMfyeEYnuf7pUrcnv7PR",
  "key38": "2ftRVKXc5GxDEHaHvaec1PhDeh44gxYNuhaVWnwtEXGVHCvMnU1uv6XsCTkaUeRsr86RuC7b9fe6xbQW7CbemeJa",
  "key39": "2Ze8CL12Y4c8MYUU4c6jSJQZ65RKDinz87nLttasjW55XgBWLuj9PiQqbnaWmeLZQ7RT43nQWsQbLGxM7GFU8sQ1",
  "key40": "3rCucmZHTbE6unYQMnP3FK3WYDK5uUJZSV2GGZVhjtgkyEN6eute421WnbtYW13Hfnkdpe5GaVg2gDPXgHiZQRZ5",
  "key41": "3UNyPcwD2Vp2cbmboPrxSCkZf4UUC4LvQiVoNKaRJVYoEg4N6xouaDSG9NXRmkSZC2w8U5fEYDCj1rSzR98PmFig",
  "key42": "2obRJKruhTNhGaiUuyR2tcUoYS5naEM72LYY2bvqkxtBDkKKjNzsbs3o7QYsVzZqQ8iFpQBq97ufMWHbNMN8E7Jx",
  "key43": "3Xm7WMHLLM1yizsmAESz5ngUzudNJ2BPAUtEkVM9En33j7LGHZFHyStCtiCs8xnj86UCEbFrVKhAkedz3HUPL4ss",
  "key44": "23D3Df3Ygpd68inFTpPd6aEZoKgkVJVLVvx852vS2qwB7YswSb7w5QhWZva33E2dvTUnT7rm4dKuoPiodMckeL4X",
  "key45": "XjX1tmZJ8VR4m63jLpb8Q56cpgexMdHT62VsWuDNhksf4gQ4eA6w6rrWknPssd3h8paQ4jE8j5rti4Zp6PJDkoX",
  "key46": "2qRzctHvz8Lx7u9kyHrp5q8WC6w6Pj2GVkHFjnxJAkoV91wPzV3sY8A6s2mcFTFzgqazaK6ubU7ZmMWthV7QYvTX"
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
