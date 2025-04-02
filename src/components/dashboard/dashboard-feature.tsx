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
    "37vj7E9SGcyTTojVnEmQfp8qjSziARwsemjKbw8QdvwMiDUttaUJ5xVQkMshfvncoqU4niEk6b8veBoyVErjBDWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BN7Xh39Pjihip3xgsvYmyQBubw8VmKdmsWZaKzhptGRq1dPoKH3ehgHn4LsxFMUk12ZqpXh4jvgZne25AYbSZ6u",
  "key1": "7RuGgowMvyLpVer83gaRZJCQoxrY7X9X7XDUGT7brEMUbEw4Ju31NmyzxePnRh3noL8pLfiWfuTxGAbcrDCLLUD",
  "key2": "42sDKhP1PCAUPeTSuV1sm3mgiGdKxnTLgWXpozjEU3PAAiMaVyvS3mCqRojBZWrqV8kAyWCmxVsMVS5xdPEjmwZS",
  "key3": "3xqMqMstLvrsrtb3z9KM95DpZCriDN51PEjgZEo4hPMFr3VzH8ksu84M85t9TRStt37E4PDqGr5x3oSP1CVG9jFd",
  "key4": "MqHWWab43ZxBnKwyTGtxGyAMs6YLGXweNfCypQnhV86cUv1coB1e2xTjfamYhQkLYGgv1npHnjafiFzLtSWTMA2",
  "key5": "66mgxPkQtamtyXWzKFCouwCcp6y8JrbKDFgUXtLfFpceiw84fDUhnjFeUx45MBc2XqNUp1YrrSue78PJQUcmNT1a",
  "key6": "5a4cdNzBzVqwsSQQJxz3yhWqAE67ZhngeBzBCwMT6DwPiVL23PM7PVTAfmAhthsnZYykw4g7XXjQrUu9g3CehyhB",
  "key7": "5Jbj5sHkapmBSdGrhewAwVYSyc4C5dWnBHMBvUuM7zALkDnKEtuZ3eaqfckpSisyB4CKmnYykti9djJevxo3ZmmX",
  "key8": "3u39JqvbYK9nnnwtkDrgxe6VfPbztny96Hk4H7r8Ma2LiGRktG56hVq8L472GoHUrbWaXJjyHcPf8Jz4aGsedkfx",
  "key9": "3akxxCDSF3tJPUh1GQkmChKJx3V9rhBRFahK7Kvy5fvLBif2UXfoWY6vU98sbiX3W3A8LdTVjLEEfJmcx5sKNkp1",
  "key10": "24NCjH8SNrMbF6AoN3JS1dLKBAb2yiVSZHY3PrZTTMdUrhQohnSADjMvMfpfYnX37isTNEth97mGM4AEq7LonM83",
  "key11": "4o3NKFA4n5qFhmWi1cmaFjtBvCEGTVPdZMBBrfH341Jy2mxeJZPX7Geg5M7CHo7ANH82Av1mADvLk9wxo4yQnr51",
  "key12": "3RKg6ZsSTXsttJwhcPWbSoMSv9vZPhZznmK9Zyx3k19Xtf1Foajf4EyHYrPCozRKDLNsBondjdhaepJ8yK4Y75o5",
  "key13": "4HZ7WKFKVxsyhLh34WFdsD2fBiVn2bJJK6snrudDe5ndvM4N53w32yWyt6LR8XhdWbqGoeCivbCYSC4bePiP3bAr",
  "key14": "4kdPgA8Adfnc9kDbGq7iWvzyXtnE89FR1xLTxwQRoUxswpDcQyJgK5cnansdN7ipmmEosJx8trEcMch6KAMCHrQz",
  "key15": "3woVujgKyF7cHXxoquCyyAuRyLa1kymyjqLaHguv9yKZZC49Psu5ArtBwC71MNfdvuprTpYnrkafe2j6vcvq4sX2",
  "key16": "5vrVY4WF4nd5onhg5svCif9beMsZEDKfY7fBvsEHDTqVEFdniCxxGMY9CnBLzqbvo6r4VcsJDtKKpwqBWPTgb2vb",
  "key17": "53XUndgCES1KJUZ4x2pt6PSbVcESimeQ26P8KTpo5yz3kgHYAdtQ3g1jHmJuYPtj7c7okgg8cRNWzHFVEpCYEytK",
  "key18": "2o37k1cbvD6DhZwPG72FxVC56HQyJTZZAHBSVnojxjjW2SumppCfegHuibPXQD35YmK9tJGsemQgaerRsJBRh1hM",
  "key19": "5qnHoro8RpTtYdxprvnoPPqneCitnQN5mfkrWxPuL9FCZJhu7WoQSq2DXUdyoRhK2F3HiVXgUsNcvZHjLiwMgnjt",
  "key20": "3jKjLxNV1jLdjfCUTQRsGtTAr6MmCXTBirym4fwxnLpBy3MEWyjWCnVrNawV8h8Sbtxf55itzEP1h7SwWhYNJYuA",
  "key21": "3MEnzvnow8RoRcVyUwL1kCMbgDUpQNDQwFVhz5wYjJuNgdusAbNEWxEmt7Q4vr3uc4JjWG39jeAzNx2CH8JDk2Lr",
  "key22": "5m4KnDZRGBVYB3jgSWBBjbyxJxypxzqi5Xs43gVF1FacEprcRrxdYN6QTpMagfcDgFtvNNQpUTtSRLWQVWJtcXt5",
  "key23": "quQfRFu62kKimqwx9UCrYTC1AabSxD22L5Y1Pq1tw5nzRXcYsxrnwJtsAuPQDtbxss8sfHRWTDMk3u3ZuK3aLuc",
  "key24": "21bNKUyuNd1sjxkG5AHE5ZPUFPXJmdtxx6oHUeod7WFwG66TpexeYoLMMMMwkqGmMzwqXY4jMc6mADeLSKe9xEQz",
  "key25": "4NXvwJX7ViuuZwgVeBiooK5s6uPNF19XYau3R4KqXDf1YpYVCqoXswYvfvjze7U2SxePuhZkJDGkGXDWnWcuxVgp",
  "key26": "5CAGnK4wnexU4RtG8gL4YKjpRW9WRtJbBCEwimxawZRERjNPKomwWnaADpDVt8gMbaXNThvYZ2cCJ8mnQTEnQysn",
  "key27": "5DVTfccNAbTrjDVCpfjLHCvhU56NqvbdgqSH1qfJSi6qtQSNxZ4sW4voo9GATfF3LcsdQ6wzQEqPpdZ4Z65R7wo8",
  "key28": "5eWaXzbkiFvwx6quyKzfHoTRrAAXtMgZXEYE8mU7qQA9Gw6QLVGsC7456LAADb2K6bCZdktugeFq7y64CYBDwqNS",
  "key29": "2FCSgjhRYZi5KSfzy6mnCQD5aJfgy5GM34NrKQTBPS2BvCNXQn87DspaW4mtdMAgnFCNzRrwU6pQ8tBphZmGVuB8",
  "key30": "4vrzaaQk5hGqTxZ1mTwCzLLRVbj3RztbNomCB9uXJjoELXtrCVjpCWc7DLUVnvYT61R4nfd39KBhMJj5P1zi58xe",
  "key31": "4mwHw8EpKK8akKP3BcrjYoRYyRqbEfBUNbTBgpxz5roc6Bpbx26Bpp9BrZTVqLcVcHsFCFN5AyypdaVc79riZj2T",
  "key32": "5wnigzvg9hn53qnUGmHD8LgzaJ9tcJPwvgfYKFjH2iLHx6ZBGj7S1nRsggvcAEVvZo99F42qAMS9fPegSdX7yN8N",
  "key33": "54iSfL52qk8cbFzdhVxYt6vFBfF3A6pVbDsdYAWnTT5EzFHW2MTswfz7SfkoPMtsvwAf2dBcmV8bUuPfhMi54cr8",
  "key34": "5fr3p9BPKvGjLhbEH2pEkAjc6ieAxJVRxujYMBVaqBBkXHk8bp9TLriCygeX8BiNmaqmQNhig8kEVmEo86RHt4Am",
  "key35": "5VkHscp4hBJn8C2TgHPVT1T1oJHPLbsKvB3CQaC8Xpbgan4MThMioLTzZM2zgTDnuaRnqtBzrjMnfht7JCg4BA1Y",
  "key36": "3EiCDu43is3xNgqPd7H46tWNfNWPZLidAyThyukAKGxRQNuTn4jjqjPq2tdFNUeGzr59doXr3vTniZzKfmVkewZG",
  "key37": "58sGwVsyD6VVYCSK3LWW3N5bFgTp9LSwNRbPrsXtLdgZhS1uEBCBVPhhj5Far7fajLK6ezyKj8iFZhh2Kw2kcwZ7",
  "key38": "2Gdr5b7prCesJEaWhkx3rBHHx8DQNwTVpJxMF9bMMJT3G1SKxE1PkRZnh7fmD5Cf67ovAkji2PtNKZBXTSikRmU6",
  "key39": "5yz1TAZZQx6CpW8e3c9NAkX3uYpKjBDrftnXFMWykw5EEFLei1GoBcbNjTD5x4LPupvEwtbwxph57Hi4BfjweH6i",
  "key40": "2Zoyy5HU2HZcyJKhWdsXiJpQsLzGGc3kLeYHSPMMNWcQikfM9vTVfdg7jUUfAZSTrRhx3gzAh9zqxXZteUcSFWF2",
  "key41": "4jmKsff5jSWkALeNqP5RZbSom7cFwr3iGBssaWqq8uunJsXUtZy5Br8K4k5rHsnsos3mJbBhjuib54i78h8Dt193",
  "key42": "633gG1TGGj1ZbXaXR3oN5P2DU8SXr42fe63nwiyRcb4mf8Efx2yGkd63kU25PFVFk4svMq62wqpu6CgrLGckpTz2",
  "key43": "2nxNWyde9wSLQV4jouPdZsZPLkzmWutb1wRFCWZswgYrgJ5FM3F4Sv3jwBH6U86gKULvwukTcciuUD45paajSuHF"
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
