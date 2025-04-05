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
    "3a2pu3QbJRhkdc9T3XrR3ZF3fCD5yVo2CV5dME6MeUVQsWcwpUvYZF5x5s6ooQSUSijeZpUk1ajUD3Du2NmGunuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2opsHpPuAmfEEG8ws4oDqoKwEN8uTyXciNLFiTBrWsaDGjKmTpbeUoGjkKBFWqu3m1uVBkxxNpooiGNcAhToA69X",
  "key1": "4eds9gNuj3K1ov4shS4ZLP9eBwn1VCSg31KHUL3JDeif35GDzHvmUi36Ygd7jFypyGQqzYZEwDYHUWCCBJPeXJpy",
  "key2": "zgP37pU8BhMfxQPnoKkiAtQfWWTsccJbYRCshD4g9cM3xTxqpDphSTGfCkw6oU1jvWHVkR9DNsAbKoYcXcU8ojT",
  "key3": "3ftYUyjns8Jw1Rd92yY4SFDNcn7yexKxkDanYcjps4V6WrA4fVrivM74BszJL1HLT5QwHBCbQXYDyr3cQxJEdeX8",
  "key4": "572sRepCcY8U6Va7u87KmGbyoAURmPxhz8wQF3HxGNCU5XAjpB6TpiPdpww3pXXx7xZ7GF7kkwvcWRbLXJdMHJHa",
  "key5": "3uZJ354r1aVdcnuDZYckYiCqaWo9UeVcHFMH7jp4JeDMShKsh84teugnWKoGmcYYd9ki376Mst7HPTwjLM3yXFLt",
  "key6": "2BGyNMVyKP8qBfqGP15Dwsjtfso8zdBxr5fQ9wzjZuKDXxyL3AUdwGDaRp6FkymqxV528S4vgD3hukcXrqG4sYQR",
  "key7": "2w4t1mHvSWUyrhX8FJv69bMqEs6z6711t7fTyahTAT3iJf4sRxxeF7T6zeZr8LptXp3bqmnrGywXmoZt7QwKEuBo",
  "key8": "aEiXQJ3MAwyztMTLiNUC25EDw9g6HjGBWjg772bNuGGyLoFfBUzmihxytyvJe1iT8JVUR8reurDegUdTG6jbSXE",
  "key9": "CMZCzqokQ8LYpPNcfX7SYxL1q7ywb7TN45HKULBzub7TdPrTwYPq8LbAKqChZZ8Bh3E5jisc8hYN66TN97x83EP",
  "key10": "4jXFK2Rdic7wTGFmNGMnrcv3YjB4iAMTCMvaKfip52FJ1qoLjuaV3QLzsLv2F9JHHo956LHiBKaHHjv1gCiE7gGd",
  "key11": "xdmbqmxZzCnAhuLSNU63PrvM9LGsGtGAPDJ5eJbkfVnFjGNt1pfV5mxVh3Hhfcf5VWvBz7CJBhJPFFmXS76tNht",
  "key12": "4ZZ3T3Ds6aeWELDV8bBEayjMAmbYZKmbbJPVBjvz2jPbJFCgXJZWg7CQXLuoTGBMZvUWvxVMMhzWjJRoJgvm7MSo",
  "key13": "xZz1Ytru359es4sPb6etJry4CNwG1HsmZ8ra9cdH5M5osvvXp1X5FXzKVwNzHftFnZpe4UV73tHLA3MoyHpzQKr",
  "key14": "3YdLrCWjPoJ78A7oeCrUinwciR6QAXKYuCP1k9n4sNk1HgdbcHWciqZ5qEZ93LjEvD6RPC83T67WuQrvrBZXzAcU",
  "key15": "2Q4ZJrp5EUXgyXrDEtYhDnAyinwtksjdJ3en7YYCQUemU9dLUUW45S8UpDbdk3j3svGmH2zcP8G9C3JTa5QfcG5v",
  "key16": "3aNE3joKL8iRsTXiWpmAPmEpY8tt6yWELs8Rc4AvBmvYxLaUYWjrbLqbE9tgQBuGFvjsfA3tEpXQqFv1AefUoudW",
  "key17": "xqqjLVyR9tbb3AHTo5bAVZBwNF9dYqJTLNFmQ3WaYYjuWVYEdHixfd5ADjZMhmPCcwug4xh8vaJAKAMP28BuFgY",
  "key18": "51Kmj7TQSEarhmyEPHmKybFZxuDpdjCkvSu3QHJyo1AM2EsX46pocBgteNdA72C2MmUYxYpPBU1jeMe2eZTomtS7",
  "key19": "4ocWXx5Kd4tR9Lut6rRgCs371q7W1XjXcDYRyp7KnZD5ZZwEnmvdrcavicUq8rfzSYb7RnRRKMAPWg5k7s43zW5v",
  "key20": "4kmp7Kpvh4BJW2uS1J3M6w69QFnGpsbbv54EWp1ZJu9cxQNthQWdTkuw8pbA3u5qh1c9j9MSQdcCqHRdadiBXo1s",
  "key21": "2ciiodxYDr2swaRaY2SHZVtqBqqPykTDBhC7e29DqKMmRFoAwNWzyFvXqYqNSSgWyioSThAqWTzUMvYT9pSgVWHp",
  "key22": "2yTFdbj9eVgQtcGCgjmuuVeQPx5prWq52Ze9tk7tr6bRMqV3SBMRTiVScR6sx3NSB243W8F1xbF8i9NSAqNCSin6",
  "key23": "2L9FecUkJDsNbwZxWAC5TPAo3q4z7q7KgyisHaAEUkC1JmbYuGPtUJGj2tUy4gxEM16xSNxpNLzJfhJYegKEKK1S",
  "key24": "4G8KbDjnJQ7tM7PSbLwM6tgVNueYpQXvCrz83qxRnYJSfGodBM611RbbQWELUi9zVYNS2Lc7tfmCBTkoUPaqnQYh",
  "key25": "33Kyy2KnqwKMGjr9gcWcer5y5AmEQd3w1DL61PY6jTtsjBptwg9sGj86NrkkRSDB9LkvYd5Jzi3AjDmayDtBbXNb",
  "key26": "5tk5E65gBYfoo2hFrE3DrMo3XtArTj6fwL24woNwLDazbMftJATL1s4EkYQUDJ4c9m9ci1HDH4CqqsdbLezAJBu",
  "key27": "3saSdF2q1VTn6Y9K4mswPQJtiCEXS1Vwv92bGbhg6yF1XAXD9xX6Yznut4FdZyq9upMqdYFqLdgWvb9AGE6RMYhv",
  "key28": "5bTMmRHEBPxcs7mJYLtGNwEuYEr5sZFMDybYreemsqPdXgisG4Z3oCiGExNsD8zQmWsdZwf5nA6qv3Xxx5eRveGQ",
  "key29": "626UjwPCuGRad4dPay6QCHWSCoFC4u5QJUs72VMDZYZrvuoBNrvoQf95NHtEBp9kc8z5i4EDpjptwTcGT87xxWcU",
  "key30": "5TinV7X35pE4aFf2khVVxL15LZ2QQMDBXtwAZPZrq3pdEjVro4NcXP9J3o5eCokkT8dqB6jChipvPEPZTuM9tH9p",
  "key31": "2zyA19zDTyZVy696xLTXB3efshVj23dqFCvA8aeW4q7exwRMf9snigW4wGAypf9Rh3k6sZWiJ19dJDZ3E8ndBypG",
  "key32": "39JzD1tgkg6KRL1AF9ZrCxPTXB5tVymMR6Uyv6pY4LWwnQyvg967N3BrXLyDA44hG3ZsANf5g1epAAkLsvaBe3Tm",
  "key33": "2yVK544WkvFpSkZQ62dVmBU2ttrqikmkRBoDx7Hg4Gzi7xSSYTbV2HZBYDTK8MGX2Q4ixCowmJjFbXambDLaXmE2",
  "key34": "2QxsNURtVTCXSFWCAqbG5trsrhyAMVDRK8f2A42tj8MGmX7324XG5bgyaKZP7Fx6jq5mtZgumm1i2PY2Fn6hkHvf",
  "key35": "4ZGhj8bVaeZNuV1rPSZ7jFAkT84d4rDddGRuK38vbhFAcxQK5DMNsheTvD4MBEBTMqqgtN6snAedDR5G1tf7N3s9",
  "key36": "tGSiDTuKzzcxxXkyrgKhZE5fMx4v5hwVc2ZqPygoN7kcYq16qERrfUgxm5MAQybgVsW2mqoBNebqty4FehvQvL3",
  "key37": "tj6uSuk5ieAv2V14b2iBVxZV5CHko7936jAXJZiBCCiZufEfgnLP1yYiwAmgjQmdWDqkKVLYEhmWGzgc96Pan1w",
  "key38": "yCm4ZVkW4LtPncQywc7hxhNLx7uwA9Fjk7dNSiXfEKKLsNE7KNkdeCofK2ErhhxwkHpCicvPPRcsUhNrvTPWxFU",
  "key39": "4boNVAdc8sDbU6bJTQDnEXYwRrwrDTwNbuHVw4mK8JFCBGAqEnqHbvdjZL7RRNrYfupRBfejcLJDhbMJ6T7g4yPz",
  "key40": "26EDJnwJTtMG2SbG98mWmE4fjY5qTcCLGjRHZrW6Po416MujAGcXEF9QsK1iQT2iDasLjsh4iY3Akes4FzijGuGi",
  "key41": "43HcPXyvZzYPdAXNh4ADv3BGP7r2DeG9BvniW766c4sCRrTU75k5fdKmFwU75GbbmmWywoaKUtnK2QnHsdnsReDW",
  "key42": "5ZZmAjDzpwghJkPXmf5ohavARG6ebMycSY7XCjE3J3DFuXexBgUGDe1Wuw6TRxFU8YXVmpkkPZhSrG1t77ihxf5R",
  "key43": "5Wbb5DJeQ3CGuQG54KufJetW7Mt3X5cEcYQNtXTemdpUEAuCn3XoGX6fzeQdWvT2SfWG4iJcZ52ZPCXXc2R9Hw9W"
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
