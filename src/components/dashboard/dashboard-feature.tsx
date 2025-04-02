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
    "5m5sGGfapzvotxZdeNqXECfYqH5LEdCetydTWPjwsvyvwrKCKaHeFc4mqoTKA6235syyzjnCPKVCDwvJCPrHp1ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GEqAvwGUvsbqiGMhVKNMVYFv8F4DUKf3oYc1aCJzKQLWmr7h2dPbxBkJCz6LGDSwkAVKrKDtAqNZJ1CrCEtQa5r",
  "key1": "8BAYDjDhVoSGDKr7VxkHSa2HpBcZs33aT9SL3XSr13Cj87iVH5yAWJmbGK91jvPxTWMVP5PVrEDZfZC3JZRDhn9",
  "key2": "5wzTejKyMJyKLUWfqZ3ZLF1KfyzsRMYRL74YDWK8gLVWvaL6JQpFM2mrVpJ1hkBfwyw445XZrRQKeS4deiqgecVE",
  "key3": "2xddrYwkmLLL4zJgvMF35yNggw15YVJHCsFLHwBuprMsAiiSHqnX3MhGyR7VKFwWnyPMSix7B9g5RkEepVTwswdh",
  "key4": "3V6mUXQ6e1cjD7TB2rFU4A1364ftf81zJUVr7iEdrjtSMZkZpkGgXdMJBqWDjoZ7kCrcGMvttBjSiLb5CZoHe6h5",
  "key5": "27cp9DbTBAjBLyC1aW7NjDJ1CQ54XKXz1TThWbQT7tLfaLnZJcHhm76QJ1cyhYGUp4bsqpNfDzeURFMXj5MifzBc",
  "key6": "5nmaJzEG4R5is5gsuDT5p7gMKwCNdA5preTe27DETFiur6RXJ4kdMHFYgAAtmhkEkHLh2dUixyGUFKZQSvTrH92e",
  "key7": "5eUCcvZYuMLkUo5AoM377fDauqcm75vxxCam1dz4PsX4aNJBJRRcGzR8HhhuBkUKq3DtjPLdhoT7b7tXVWuyJL8o",
  "key8": "1gpALu8PyjMd7zpvXnHrdoowCquHDzijbzvizRzvsU4XqeTYRmNzgKzY3XiRsEvPr8pS7eqT9esRFd21jcPUXDG",
  "key9": "4Hs8hNJAKCtSTamLywmK7gh9NYRruxUqadhdydSttaE91uRFhiBynyJ8YDe11eVwfb9v6x21Qu87sW1rdBX63CX9",
  "key10": "FVXWfff2p9sKfe1PeDVZkTTQCiezPEghasy9CSL1C1BRUFJhtGux24ojjH5Vi9cEScNvnPZgbou1DYk2U2Wfy38",
  "key11": "5bT9UYnzHzzdaDMbkgNyJ34cS3r7mjN2NhaP5rGQYapReiK2X21Dv1uKuY57KkMBXp1tk4NWhdZuMLwb2ZFUPymQ",
  "key12": "4mg2P462CLF3fqrthz9Ep4C58mSvBKVA3k2R9YfVya62XHjbfHrYTuRjdriVRDS7Hv9pP1cdLcHyAXgHU73GJkXG",
  "key13": "5Z7ieb3PyMEvZvcEyXMMGVLrxJx51U4AcdVR5bVFBMy41T918WKkUzfoxrXDxQiY7B2jWtvgEyGRA1BGT4c5PecB",
  "key14": "2MGy4RqbRV9b1k27Up62WiZXfhX9stwk2HxaNruhC6tUUdDUdoiV1kq2RB3sk5LwjHFs5uCFEZBDMRvEGyuBk42F",
  "key15": "5YBK5LraTPSQ8MN3GL7B83b3UFfVJM1pU57pWJRDYpvDk8FbcAaZ2yWT4JaLAVAKYJMMuWJ3YNqRxdjP6BHxvkih",
  "key16": "mmGoL1YV2gh29F5Ab8Mo9p86RV5YsbzQqZKEa1WDAj1cGckriDznv7DpyoLb6KSnBA9aeX46r5J7LE4rPEFd6bq",
  "key17": "2754BUE6Mn9Wg8a3hg89QPQREFanCHuPc7wmB2LWKaSJ75rtjNotEDdzdDy6DUSVZ7YVCeHnfCtHFbZ5Y3CgeVxk",
  "key18": "2CZ4Ji1rGtvpAbPsubTnVYMSBna6RbAX18zvR9BsgBPuDBRPHe34RtEkkyZLN7rSot29MsVnBQPs1L5yB77xSh3W",
  "key19": "36667euL3A2oVWW24v4KrWW1v8LRiQJ5cUaAdJixq6d4YnEH48FLv9B1uJhEA6zMzjPEEGDWRzajgC8zYuBKUJcL",
  "key20": "62cdLCwEgupfvVjgyifoNoaKK5DeCesvZpLKDqJgBiMJQGS7aaetB4BqXCi67yV66aKbn17q9e6Tr3pSU7GxufVt",
  "key21": "4PJqTPVjPfXZb6gb3FscbK9JmsDMn54P9joyeS5nmWREQaUqqLJM9aJrFyfiLnLWBFN4MG2kSWxp8Mmsu9ek29Pj",
  "key22": "qqYaaxMQXB1FyPpTPWGeDmCm9w1skJYh8wEUyEjZXKKUEe3wup9DDwR9GWEdzFC4JRxutSyVFAdATfSkpUrg8u2",
  "key23": "5pyffWHmooLyFc12jpLr5NESZdo3vGz7m2t8hsNiWEsijWbh48UHype1hf8uKuFGuCp2zVpHnCZGDoZft7Wmz7Up",
  "key24": "48AbwJGArpChg8QpWEDGefFgERHDmmtHLRUpGtLY6HESaxTKdhQ8a9eXbp21jhV5XWgD9a6BLmeuSnNdq8qTze9S",
  "key25": "2QfXPE4nDpcUhBfcioBYgFPj8zTXonHYUpH3iz7mMZw9N7kB7szJ2J6VdXkhcGuEhMYnHHv1LcGQPBV8JJTWQCKa",
  "key26": "2YfELYYWdaFJr9PZJZyVHE3WT8qZNLucECm4znE4SZSV5pmzk31kyNUxSeJHphWdopZ6T1wxDwiDKDVjKTbayf3S",
  "key27": "2qXfr7j9yKT5gJeg4tVcPjwGudqLJ3kj3CnPA8wXP4utNsmzLS4Zr5w59kAqwNansEGpPkJJeMKzkfWVp2vqQVet",
  "key28": "2w4D9vg3QtmpP4fKaDmtPrPNM6mZ9NEaVDDx87bzHb8jv1StXPcAHmGJJE5QSt3tRYBDkK5aBdXBstxSJ2QoVkPv",
  "key29": "2Aq5vzx8Y1VAttmUC5CaH4FVes8NGCKuh3e88H63e8G2AhRJnfEoms4W7AVSGo38pgQdDWxAjGr5Yr9XerNokFQB",
  "key30": "3CXTfXZeBpepmXqobjhqdfVLwWVsfkWWZGnu7KpJYpmrhh92ixmS6agE17BNBjC6ycjZwsSrqfg1XVBK55a1Cczp",
  "key31": "5Ys83oBMgLnSmeigXcWL9xsfYsjZvuxybaKLj3d1H2KgxcPsCsmLNSKQuQc9BjebsaELhRPnieGUT3vTCK8ZFKK",
  "key32": "4x8DxnzD791ejT6GsJKGAZdWrAmN2AhUGUDCbFbu471aorDBiX9c2tkq5MEw1ehKZdCvWYQnbapvUbDnSup3mMj7",
  "key33": "3RbVgZirBnbBNiVsWMUgGN8LihnbhSMDvBJVgeKRnAUoUF94S5M8jeFUmZUYoUiSah7J3m6yYCdkhNaNH4rtCAUV",
  "key34": "nCuhqHji8tTDLRcLPZs7SQnPKeQKHHPWQ9eB9eWra9rroASs4ntBP1P8MLHeUcEJf9He69YrQZWpeo2ekCYoZ1D",
  "key35": "5CJZZ3gTEfJi3J2fCRYF6qpGCBK7xNrF6PWrs7T796oGpC8jVPhWgPzc6domjkWkFupSggSJqv1H2W7aCfYVJBo2",
  "key36": "5emLXJyXkivXPZG3dgiwrqEJCiBbj3zfedVLtnpAbonSsYpyCGe4gfJJKF5EMMmM6jWkVUyiopCkVSfrc7Qy4Xm8",
  "key37": "5c5H4sgcdEzcfUA4qK21uxWtcFezMi2yzPEcsCUy6nE5kBVr13mWQWDuSJd7s8goTfCMUkXKdch74vyhxnadxf1K",
  "key38": "4p17dwvq7XZ4Ecgr8ynPFgVWATm6ZFbWhCYmKK8c9TRaKo5E2Xbceau485tdZPZNiugAmBn3Ch3x2ZENjDeAFGY2",
  "key39": "5FtcqxhL14KQtrokrsBLNMvPRxgLDPKAeYZuAviwNjcRzyxVTXbPk2ZTAY3GRB6V8D7bpmPcsE5cv5pj1Ybo9ds2",
  "key40": "3QeZY2cPUj9Q6BF4Mgjr5APgWc8ukiEBAhS4x6p1zsPJqbAzhKADbyiGnMbYJEcw8EfmmJwD7eKb9Gsr9gDezdJC",
  "key41": "4eDhuoCuhfFMUwPw6jzg3gW67bs4KFxsVJ53p9qfjUgi9q1cMD6fgZyxQuiR2kE1C5NRTDQuf2AnrRHUDjX5cUGV",
  "key42": "645jRc8o3tuTSnuDMamwp866PAHEzZXQVo5Ce8iHJVpG3gVEUMwioPEHMXSiPZMVMuqqr8XvuVGnK5oqSkbKmV5",
  "key43": "2NaD4Gd8zXAuV9VvWGTWgkJoQyuKoLRQyCoWW23zG8Z33eEUmQ9q3MmW6oUUifdD9oer1qyCQy2LenHpZAvV9oSA",
  "key44": "5PxDDR6JnxMuA8UvQT75kUS43dzpxhXBXSw19gGNPSaywotcD1FMKaz7hmbn3Q7YqNwZfiF8NZgkr9nFr7aj9GzU"
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
