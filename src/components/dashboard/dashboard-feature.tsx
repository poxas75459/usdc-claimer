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
    "5uQtUkQNmm3ySAX5tN2HQ4t8vanq3GJvCAVudxV8jMgZegXivmUHuF1HbBoUBnWCPaYYtvYX1eACdgb3dk2o2XrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WuvZArWi3FkRocHGYSLPm2CJvNfW2Nr4Q2UBfgcFG5zNabpo2amsQYEhnZiVVNP6LaZyNfZ1J3ixNb7HVLBWZZ1",
  "key1": "5qdrnt1CfaTbLX5upp4XN3qkyRH83guLQG7N4FVbKikR7aRrogQL4DnYmnrBmSszejAbQonf6SX3e8wsLnS4Txez",
  "key2": "3U6MGQzhmC8daKbJK4yAuwKKEyF7tfdie56bXk51aaeDX8VQn96WBLhivZ2wC2v9WwyMkhYeNc7ArWMzVgc7HQov",
  "key3": "5n8DRCS4bPq7NdupV7RJ86rs7WQJSX5oacZUdxjZZ4NXcaQ8uiDygtxR6QCsDbrJvJQ5c113Mkxd4N5xo48E5Sjr",
  "key4": "7bHFK5F5L5TmatCwniypyN8e27egu6i6VkrCeDCewiVJe419CV9tBQa6A7xbJ7UFYWg5a9Mvf5XhNuqsJQub8Gi",
  "key5": "4cvR7mAfWbCRfY1J5YbFTDNXbcztzSvZG5zBSfRKD9qmE72c4hGwwDw9X7h4ymiX324tBo336DaaoRq6gyGoT44c",
  "key6": "64XxVMaTtGdPQumt5hq5tuKUjD7TFDMAwoGbHqkVHg2UCtRbhCvSFqqmMqA9WZW4gnmYapreReFy8zPYT3zkDdXH",
  "key7": "2orXZd9KTQ2MhgQ4j6huM6ySJuKqP3FAe8xLbpcmiq3bTEfuezKagEezgpsx8QyB9aewY2FGfosAci6TEJUXvd38",
  "key8": "4QC2S1DqiTEHD7GikccrynGLD2Ja5ZDakoib3pDK5StanTrNm6v7KFnoTzB5TMQ7FTKmVregKGZZcJtMKafnrzAt",
  "key9": "ypUQqWnBgzTdEy7MbJpP6mjcWNJa7agXRXRkh3sNJySdsXh4o8zRuyMrJtgqmczZTuqUVH7UUnWBp5F9jZzSdxP",
  "key10": "a5q9mT5wez9eiaYM6aDvGzmd9m1Gtt8iLsTe3SscPvdqUH1Mp3m5hK166Yy2HG2yf27uxmXp5s8UQEVVC99RkqU",
  "key11": "9JsHmdCXgUQ8vLxndRUwbpyT2roXkhR1Y9nAW9G1pWEH6KLmFmCx9VCUx97gZmzYHHkiBAwp5zP413RbqTY9rE1",
  "key12": "5Sdx5mH6mQxMxQAcM66U2HvUyVGPSjAGRGgoGuHMdmocB64fsM1NaASDA9qiEtiwUHTW65nt58mY5FPvHDH9pCjd",
  "key13": "2ZS98ixu55wk6uTX3dsnTsnJmCEbnHqcSYi7NtXD5CouRu1fj7an363efDRqye5TeKFEqzcQbcQqECSkEP7ufnzG",
  "key14": "4mF2B87QBPGerzdFzWmVp7SspPtjSVRQJ3tw5aC4fND9EpaxCPoX7BDg3HwMYuKtWi4CYoWetYxrtqFrCfH3MV7F",
  "key15": "Qa2bdzpTLDErB9NMaVXQgcC5WyBoSpfimBkmveCpPbehQ4PgA5rxugLfU99KdY7Lf5JKGVNEBxhMno6iDUkfG4n",
  "key16": "5LLxwTjZJ3Qo36LNj1FmMAd3zkxu89pMBXiezsJJDXHuEFHANY3M3J5sXk6h5fKBbwhcfiW79yGJJDMg2vuCemN",
  "key17": "2xqt9CMWLV4RWzTM5GFV3CcNVut5PpcVfrVRTu3SNuwxG6e1UmHcQr9ot1JgVRdYKw2crEgt85GGBAzALLV7pCry",
  "key18": "3QU7WZWnM63ZzMKgsCH8yVN4H2XFGCs4GAxg75pQLrT8h58pCQyamS4RzBArTGvmYHUxPzw2UpmPcmB5XBwCn89p",
  "key19": "3uXQdFUBmmWRF1nr3Mm8fFThxovBTqQEHvPd1DqBJesFTyXEgryxjLsKUV183uk9mTNQrjSJLvcBgt39qazbu4TL",
  "key20": "4ijphMxabFPavXtGBmrtkgXfVGGvYKzN8uM6DpJFdayjCYk17rqWGysEe2pFgZvYSUUqtCZ8TAtQpgsN46JerMNi",
  "key21": "jdEcwf1ocjTDZooo3Nwejncin2ZeuQ8Swn69NqTMfgJa5bz6P9t1ABU6LHWSyL26TcjZ9x76oqtQuL9xLmfpJ6t",
  "key22": "2WXvSBEXsMhv7pNo9LiUyFDs1EGwtEiFJw9RQzKTu9puUFPhLqPhorFzcaicbBs4cigmUZ1VjbmvkKAZ8nf4s8Vu",
  "key23": "5g9M6Q4UjTdmZ9CRKr9z7T8cZ3UchmTzcrkHnVMvHQHY9zc1Egfs8wEELUFyFMo52keqNbgvvzT7wyKAtu3sKGBr",
  "key24": "3mAzqfNBN2Ke73sxsHaPsMZxdwzgU9BdzW8DDED2pcVhJfcEvTuCHsnQzym82zT5Hngbbsm2s2ZpYrSoYJmB3HxB",
  "key25": "FwzabyaiQ5a34N8nLJu5RxkRtJMg8RMNsCLEjHnbuhLZR4eqz6qeS79wNv73aTLYcqXiMK9ybkhH2LxMTK2gTUx",
  "key26": "2FdnDWMyjduqJoKsCUtdhGU1gYch4FbLXdmLHawYbd1Z9WECVaaahkonza5VjzYD3Lp6KfNxL73bZHzPBmcXsfSg",
  "key27": "3N1KEgT6Yo2TVpPFmJowdQGRzGgMTpVBkKjBKxeVuHYahYXiztEAwZ6Tc68jh8HfHtuad4HqGuVYY9VZBB84W5bJ",
  "key28": "5aySVSwXAitMEsoj7jDJ8rE89YYDUNrL99LRQf46VdVBdnynbDXon2xYJRMnRU53wCfmNVXCf4RXnGgVPykb9H21",
  "key29": "2FCrUk2YaUGZyj4Ai7j9RHjRcPWGCshvXBkWpsbgnsHp2uBz4BtrKnDwg3aCAyWxyPYYaGogRzaZoYsm5C5K4ENR",
  "key30": "3oxP5rNiujR1XUHYMHAPJDETu1WoZuf1zfZvKwC4UjiehhuakXCk3JczA8XJKX9ee7EqAFHVwPV2EUJUvLQpQv5",
  "key31": "2ZBTmjtw7u1UuvbtWWFMEeWFg1zZ1j14Yd2XXFqs47Wao3aRoCWkFGirv7Cc1j1pW2KQcTnVJ6yB43oEb8wNXRH",
  "key32": "4TqqkLDjSxQkv5mFchySDSEaf3UdXeXi1fsmUpgkAgNswgKYyEvJfCPBMW9HeAibK2X6LqaS3Xt7GKXWnJbixAnf",
  "key33": "2M1jT8Uu1znrozACYgAs97iNkawudQdwCP3UkkPx2XUAUq7RjeBt2Us3Nb2RqTCt2C7fvSfdJmKeeGv9wgtwXqWr",
  "key34": "4KpWrzbZCyGAdwkpvxaMUj8VtnRbYr77XCGxhpK7KoEL5UYZ8wvv4NNAvVWGMmZ4kSe7R24Q7XskFi3SDxayJSW",
  "key35": "8vQJez9Cn4viKkKmh9MqSc1uMhsyuTFda6QonG5B4UGWrhoZ9HfihnYbkBLJ42QGp6TaTAiXYo44yxr59UXChLo",
  "key36": "3LXVau4PYmxJsSQGC86EeKyyxmWCBZULP5n1aSpBcnGU6bnJMT1sSvsTWYoUaDVD8sX4xtSNfMzpkp6dyENf4MEL",
  "key37": "2yaHmAVoEKcQSPVouoND3kEsEdXHcuWe8ds2AN4hPBiRYwV2NFUJ5CCXW5svu8MoY8WPnn3jVNULGoTEJDACNnZC",
  "key38": "HEULB3ejaEvcWcBMc2Bww87xtvTUrUfLGs8jJkXp6BDB6UwqgERrKjGK5J6EgDd9J3vHSmgJNFmENP3d65aYdQB",
  "key39": "3tJLimngs6rW8PKWdUr9epw3k9izeS1mrZXvghi2qnsnJ2fdW3eg7FYSpVYfctZCPhMwAjExTnLTb4CuNvPUb6Ju",
  "key40": "3gmCccMiNwvMdSzMyjTY9PudkY25hJTB8UBCUkKV4uFDourroAMm1QyB3con9qi1pzkRDJC7Ky8iysrv2t1BKNFn"
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
