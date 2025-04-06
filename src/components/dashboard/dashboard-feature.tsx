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
    "m5BHMQDhHiXK6HSjfcojdQ7ndxfsrzha3AAU8PrVdLchGvgrEiwP1Hky1u4933umhd8zsuiX8a9Kwy7HR9e2Bja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uT1tpLqVWRis35tPowqJMtF2LxVNNHWnU7WQuBN2E87Kov3ecYrX1qZMjm9nbTvjJ4pqjT9gYhDPx9bQUsnfrAH",
  "key1": "3jsmvsLJNmSHSNwWf37ShaC3r9t1PxJtZL77aePJZvvLot2gQSjW8hH89ttEJU1qYi1PGYf16hJoJkB4j4usuNGG",
  "key2": "5HiCyYTs5JJzpLBiYznhBRo5K88JydAwAwhaWLs1eWxyJQKu3a8CvfTkzX4jPzBhez7wyWNoKS1Hdo1LQ62FYxau",
  "key3": "5zXuGt2xPVLyiXm2mgrV6b9F5TR8MUNK6uFoz3WBBRXRtCjNw9Qbtbfs6zYsEnt412DJaKmKChkAeVdc1ZKDeYDF",
  "key4": "cBzeh7LqTvwj7UZW6QUNPCeN2wCWKmHSRTvrepV1ba3eQSU4fzz4MBCqWNmhFgw9LfavJShgAdnSVwJ23ohb6oS",
  "key5": "4iKnHGruTTDW5pMjvSQts4BJjNE9CUeqbT9nRyXcnPMFS8sRKYi6h9uuJFdjBnxp4dYfJAn5AxNrzw7QGittx2Es",
  "key6": "4tu4aoaj588JEcvyWpsD1SgU4EaKHHUWTSEmaHDf7iAJ3xXciQgzMbjnBRbnFnHvoEe4ND8ZAXaprxPTT3ZiTEdw",
  "key7": "2UbCZRwQWoc3tU46C3LweACmaTaTgnmwUa9UnpjH8MHyMsyrub71nT5cQzTNLm9aTdsuBKKAZbKkNvsHp1W1ts16",
  "key8": "46LyRVDTRoipA3ih6fZE1xK4wENtbpvEJWabZSoqxvjj9b9aXdCFdA4WgMLk43ixRzdukegi3MHvaKj8RYfPdC6e",
  "key9": "dvFrBk3rs1GVkAHmSymjaPLDnqZRSBazVK22Yke73LXWT3beAtTXZtarFMrmwziA7e7rbuwirk3co1KF5gA44Qw",
  "key10": "3bR51KyUBXQuLumUjYkqDrqP1AMCgcbcrNLFrRbQwYPZQCZ7wed3cidp3K8TBLB28vcCt1cwnmTjXTzFwrgFrutb",
  "key11": "5eXDRDbnzjRrSuxYZBCm6o7UGNTFrGsfYatEe4rQEh6iqohnJK5RsEqHnSAo4mUxXTaLTAhqRCRmLKgTCKTYBaYf",
  "key12": "5LMvkEoPUs1BbdpcqaRP8XsfAwjrHn2nPy5QbC3y7Z6o1X1q3vogWTFwiCaA7t5AS5yNr2w9nvetHT56V4rbNsoW",
  "key13": "5fJfASHGahRA8nsPoaZmcrzxuX84iNxMZjBszz1RyMuuXtnQwYnSNDY4v9VvrpVAWroKLJREGLzBZZts9iEZRKx",
  "key14": "4BjcHJTuo7xyciBt71iCfmWuKAcDWFtciY33UpqSc7MQzcEa2yX2EJa9AgoVxXNahuUR5Fk9eR62mPDQ53ZdhBph",
  "key15": "SH3xMSfUqsXfYm7dJs3Rsywir4GE8Xupx5D5WWvoXRySvxgtTt61vmvP1rDCw5NiMXBmHt1BDLL8LC8ZpEFrV3i",
  "key16": "5PWw6iJfCTvyUbeD7oAy8zgjjfVHze7WrhCzfmMYfn1a9KycJ1kcAbMu6pBwxMsRETgXaDGRbVKq2grajph7W7CA",
  "key17": "dyCzdh78MYrfqeyZe2tgACVnBRaE72iArcfeNjhfTb7W3EfVxLFivBnZgmAsDejjjbwRjmmpB3imvRWAzB8e2Ar",
  "key18": "24aYebMqePgeZwbTMnBbYnA6zRh47n5TfR93Xc8LuvpiaKpBmDcFU2xwBpK7xau6BKvD44NR44HZnwCSQKLBPTDf",
  "key19": "4CLsZneVW99pL1xQZVyqDX9qP4kLVzpGHrZ8x6Q2xC7gmLhWCZkNJ1RJeywgoYBTWqHaHDabstTmK4H9kmcm4Nid",
  "key20": "3eJ3JZoh6fNxBtK2TsRsokECz3gahJF5CMFSr2TpsKDNbZ2WL8bJuSNVTdGQaSZSba9J7LkJDSoMiFxtMg98THcs",
  "key21": "49ALCe9mUh2PHVQo16iJnKWoTkCd4bb7ar63ny9XVNUQsggnUZQzbWaCjqUqPKrm8Em56RSnvDDcdEo34czrjfod",
  "key22": "3BicH1Pik97HJKf9VvdvMqd88wJdyrRwxmMbzqACYySDv6a9kfJtEUynrjX5Y8koCHgRDHT4nmvJAG1CNgoCgBEH",
  "key23": "4NkAVYsX9AsqBtoDNvwKEbGB9CXz1RT6DdTMFh8Aadheq7FhuNUNXQ9swih7cFoWsHWjt39jTkwfSCCC5BTLXPCN",
  "key24": "4zBn8JP9nDJPZW4rUyfJixt84PaNL5AHCgmVVTc9uAZzkCK5XtGcUfoUajucqqgoApittmStK2XjEy14SGZ8gN8s",
  "key25": "3r6xuXqHhKGtuUL4ahHkHF4jbU3NPh46Y3Hs9JUEs88b5JruG8kp8UJxQdGgo6d8AJPDCm3xSWvbzSJkTC2QjUir",
  "key26": "39DsP6iVBQHU1HH4Dwx2aMBTkHMQ41JTJGsag1M5BUvv1ivc4nb3kows2Gv61hEgPd4Qc7XGPZ6cAqezrJnyt2rS",
  "key27": "rr9MTqJbtc2RHyyNro1w5rcRn21aKvtdX1x8PepTDh4GQ9DNAny9Bjze9zVZjGC9PzqcmMYcR8hhzx3MqXPPNx3",
  "key28": "2a5B7siptFsAduxpdtEKTEEkXUqcbFquwKsCP5cvRGZZWmmyXMfwSAunRxq7UoKpCHGyAkWeGpgRXdEsp2M1FtmU",
  "key29": "3rowYeBD3MtEXCCKwbncsubd17XnES3sJrqqjiankNjjTau1is7LHiNu6FjbvsdXHRy33cTSYiDgfHABFU7WX4NJ",
  "key30": "2m4DtYwtSTuGnRbxztZTRw4RkudhiVBUAjnZ3RGs63dwMPUoDMBhELH2Vf6xAyZ4s4m3hEKRE5ryYWZFKuN1fnTt",
  "key31": "2gXokQbgkph8bNChkrwV4hNtuiqVubceJsSFKQyt33AZEPuDs3uYDhWGCoRLbC2ut139VpGfEnxCN37ntWoicbfa",
  "key32": "2Jo9NpkQG71yKHR46QCmwpcYrqoNEMQmcYnFGhQLkGUsdnKZ8uo1SWBgdVsnRLagVpDqxgpJZZsUSw6FpPNPvxxY",
  "key33": "4445JCGJvWqDjYJKp3GtCSXJPYWTVnRLhf8oGRy3wq1jbj6NX6EtxJUsNvJCFwjhBhtBaf19jnQYntSMt84rxc8c",
  "key34": "2ihnDYMsqXhmya1g2VK5WDCh6pSLMKAFCw13Xw1XJqgjVfgiVrARccRP2QwpWAk5RxPZ58xYPwpcjzjYru5faqkj",
  "key35": "4ei4SrQbpnuno7c7avrwtWbzvpkShiJn3vq8QhmQ4M4Ri66W82SdN87saPHw1VERkjRp3uWAzUS1YsSE1neWkaWR",
  "key36": "5nsxncVkbU2vjPrHdUexpNGKgR4sBkRnQPx72FzfAb6tXkvr9orZh7JAvuzADzWRwDcKH5vmQKm7QReYZDdh6ads",
  "key37": "3WPpzEmbzvP2TECtWA8QgJufPLQY7tPk3paXVfbFhsV5QyTZqhaLuP8GcrYbQWWTWMsLRBQAwU27qih8DbNwtFkg",
  "key38": "2VvckHKu1hCYyS2Zn8g4cvyszkC6BXxYfMG6vJokwndURHtFMevvnyjiYg9CKby6MtWQX2YVT1ew4J7UDddn8sMm",
  "key39": "27pt3Eaw5zBVsnJ488mwZpUaczZgafMDqfFLJc9SB5KvRgJVuZkNUCvTt8o2ND226W3ndVzbrnKtWHypMHN14gNH",
  "key40": "54VpFKbrh6wCr79MPR9Jh27KAY9TN7HhbXBRKAyNYQXJNRwau1FE7sncq1aF6VUzM7AQxjsQXSj9Uww5LTks2n8k",
  "key41": "4smeky9bF7af9Dc3nSKZ6jAf8vu8weauS46qmDjRab4pcFZF3jmDX52snMFUtY9Lei4hq97vfc1pqL6RSPjF1J9h",
  "key42": "2caDWqSQFBZr3tRzQmfZraRCuEvdFExsFwcGAbKktK2LadXMG9yYjWxUTHJ8BnbVqPrsaWuNWga4aCto2wwuPGGf",
  "key43": "5XQAf1NPav9fGovtih8BmvEhDHamEYeWv5QrBn4KjhR86U5gNX9VymFkAQp3HVcik45KK6dpFU2FhGr3PtXPWtM6",
  "key44": "4q2emm73JumZabhMyCWJEyUyYCDYHvDrEBamuPfjcNrq867qHXFkDt7LfxBYaf4DavUKMv4Km6YZTgkpR6ZtSJTV",
  "key45": "RaJa8RQzhHBdxBn8udxS9H7fMhvhJx26pC2m1YMCDLFGitzBnGzuTskYBQkZWivaFmFNaz57RBPgKUZN5ev9SDR",
  "key46": "2W1Jru5qyRXH5k8cNNaPcEt1cUa7MLicbTaRH9Sygjjp1L9uuVrvLKUg36DqqJNBWEpFXgEBzg4faP1yn5394R1H",
  "key47": "3r6gS83jSrcRqNaHgZVb8zjp2xvDrH7UtM2MHoY5i2ZgApPpoc9WaUEmayE6ar3uum1v42MaQLDPmP2NMzTmxVng"
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
