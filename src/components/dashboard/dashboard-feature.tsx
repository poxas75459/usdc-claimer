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
    "2ri5hyawn3XoJEzzFMPEuhzttFaMyvhwhmaPtHYq6wAaLUm1SAteAADPApSPTEQau6PsZD6Jd9v2CXQRWvQxTTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQts837xpxi7QtyLWWwX6w2wWx7XL5aVo67qiKjwH1VRmaN63KXCjzASsfxoqQWbWe6rcUxQQhX26VwfXYr55Li",
  "key1": "2WMHYUScS3uAwWGCiAdnVXv4wG5twGm9Z1xNivNcfsr1C891v3GMfhKV2VQjn4SstsNmDKPuhjgmNbDJVfnsDFuw",
  "key2": "H49XvYojEqWVJAZhVpr8LJWJnzaz9WwuFpGZ5C5KVvm3reJb5kU4G5KTKmrcGUXaECkqCbaqF1NraHgB5eeBJra",
  "key3": "4u98Hkr98fiUXbE8tUSfU7jJyyYekmqz3gNPC6aXvtHnJ1q7AunJG9HAsBDn9LjXNhYLbH2GoXwHX2uQiSVbVdaS",
  "key4": "5dbmp3Fu4sB82Ca3agkH8dPowZaLFKPUK7dLJkteEtcJmo2XLAs4Tnoz5SbZuThfVTaSxzPRX8aeA8ak1Usuda1J",
  "key5": "5K897kJNxa4Ymvj3PZgDTw6RnZA9ehgN751LokvNwRNioLEhQ9SoXENSKbk6LGKPPns53EN5SZcFuWbH7esEeZrJ",
  "key6": "2wpYeg4vGvoFLU3Lbnvv9BkEAjAC6Mm4ekCyQim5jdFAUd4xr44pyFxDpXyceuvtSiwcoJQAp1GMXSSLBKjDb9uM",
  "key7": "41cJfhrVkQRxioZ5PZf3BhLbJJbimoQgn578VYrRT7FNiGQkpi2VpJygAYY9TZ8H9UWf2XsazFgQSaEzuSLCCvT3",
  "key8": "55AxfjV1AYnnJEsRNKZn2HT4cWKrnTPauJtrFEPTn8brWQcewA1ctQCHwbuEapLnXfrNTHnZnEB4fDe4AfoXYCvh",
  "key9": "5Z7NkC9q4Eez9yvP6CEZo1GWqBq8bWSH5a6DvCd1WebBYPgEYLiCdsVwLsrKsVK7BE3pANjrY6YpGYPWuuDynuu7",
  "key10": "3ndryj89h6eSDe6gALj4nkBRCutNSvYCZ5qvHURuev7rsgr8kpav3wBVEHofHcrKpghZ7MF4J8zXHXTeFBazrZxw",
  "key11": "2rvKYWquDHNmVWgxkNNUDSiYe2zSuFyAT9Zzd4rTYnjg6y5Z2MPGwkr5aaLN21zfRhGReJBpY6ocFyCBNumUskzz",
  "key12": "1R9YqCwTKqkyuuF6xEk1GoyoqkxpbgzC6i2iy1DeNwBYTYz1adoUy1iVRfxNDFiNNkU14V2LaXekTsJfvuhDSCP",
  "key13": "2cVnxHUHwuqgrBU6HAwyNS3Q1cRYCfTchcNRT1RzSNLbZGt6gSr48T9FTBoZWaTfjrD2KJzuYftNiuTeH84zAoWv",
  "key14": "4m22bBokZvsTn5gJRqWrnHkvBQZwnvqe8mdsrc6wGSrBzviqgCa57xJbdx56PiK5xZyPzvuT8joANXWggJPqDvtQ",
  "key15": "2wv7hnuQEmdm29HFXKBC5qkzDavVpi4RvKx4ynFDKufCQFBiTauMQv6wpj24kqzkJTSfBJKF6dCk1sDv6rwDwr3n",
  "key16": "4eqJY75szavxJWjK1NFh6KkwJkwUvNcqCqSc1bcFXE3zeyaKGUNiQYhP1kWm2XHasctLAr6jE9xkC1VhQ1ZotQvS",
  "key17": "2fTxHXZPHeVVtzimo4BbYVJhdB6NYxmer4ZijajGj3R5oxiceKJoAVh19dHwKaFjmWpuyonLZLMupPfDqML3oZQZ",
  "key18": "4A2JKeXdegopvDHNEWFY7Vv65uUXspWdaKJkE9hfXzGmZV4ntsRwpuGmuUn6JWtQCWAVM8oD3XAPGz5U1mrgL5y9",
  "key19": "3rZg2aZctScQpRGfJXo1CAAPqzrEY1322WXZDzLBpR44sTLN8bfTujU65bxREoWaxdiMG45sF2MrPDSWAk5HioPA",
  "key20": "2k5FDE2Kzy4kyvgpP5eQPgXBTumrzj24chYZ911BhW5N4PMUoH35ma5qwTkX64GQy99WTZAzJ3QeoNzBJGUQJVEc",
  "key21": "31DDUX1QnrPUb1bzdkvgk4aCAVBM3MNsuCEXdRMXLsNhGkSK3bYwQqExTPRvZrC1wweyemA1dZxDgZJLDKeyPGQH",
  "key22": "zLfbsvDc4jURy2we4aymYfY2xoYsazZB7kZ3LyhY2xj1ASdxCMYECpt9erm2xoM9WMPTb5vyuezmX3KRim4mQmU",
  "key23": "3g5ptiCo9J3KgfrbirNaY5mJRup7da6oRJHaAnW6gshC8u85CVz5dbVhZQTU6yZWPxTk7A1W8Lv1QxEkcWB1TGQG",
  "key24": "24P27D5ZYxT9DN1HmYn3byV4tPEpdVeo67bXztvxhS9RMhV4j6wN31wkpbtBBFcPgYiVZWaXR4ghgV9sHZTVVo2H",
  "key25": "5BUSTvdEwsRyViJEviqRavyk9zDpxFPEzQ2AMZAASgGorHJWGrHmoYbvUD4dY9A5iKmwP5zTF12BmCPxnjqM7SLY",
  "key26": "bzoqEZ9ew8j4hSWJGN1EpPQAdtBtVyF2pNdQ4Co6XZXgCGaL8jYtDq3u5jFhhng8xTJcGhk1bQiXAi5dvVdPQ3D",
  "key27": "3dHqihnzR3DU2xCnce2udQXmU7KjZauWeEJmKAvt9ePatJpCfuXMB9rqFHztYc99i5u1fsAV61EtdLpwoX5Qw3LK",
  "key28": "fcFmskCpdcN9DrjZgE3EvdzKXUtg9djm56dw3uPHb3zWZGCwsTFT7kuFbDVM9WFJA8h2WTcSbuBSy66Rxvkj17b",
  "key29": "49mpGS6F6tJA3LaMuRyi3w12YMKhkEqPQ2FoX1cc33GmWEFKthsbPkW3VxZeHzXs9KBJfj13YA7aAKfxSkNTeHvx",
  "key30": "4KyhUZNg9wRwR4rcn14kFRrmc2Ywop4hn6HpH8MFC7J7auE7ZXxQCEn5wTmoPCakAvdN8hDvLvaJVrdGh6LUZwY3",
  "key31": "4fGa7pi6i62KksQW5rpSNznKKuT4mQn6yxzN61siC1pMTBrsuzinfjaRUC8HLuCxCJ2iFTZe3NL8vYnzXkdr5uMA",
  "key32": "4tgke2Wn4NVhYt46Fbs28dYHcZv2D1Bmk3iKNV8fEQ4kficXihsULfdAiH4hzorHBSR4RTq1CiJiJ2AMWbzEVyTm",
  "key33": "fnCUYTUm2UXM3K2bNhXpYHMxEZA6BrCaZAWNNEXB3diBbBBHMo7Ex9W6FehBVtVcNtVtqbUQq6yngh4M7pysz3v",
  "key34": "4tAThdzAwvtja89iexDRt7U8gYweLLBC11Djso7WVyrVZHRGXKJ16tQYU2UWyo26QiuQ9PzoY4SxEJnGngrCTz42",
  "key35": "DXn12RoX7XtPAT3DUFcedvpHnmBWy6zvzgXiF21Cevdoj63rFqapZeSUG7Fv6TRkpHkyVDK4eFScQGurcRKeVgo",
  "key36": "617WEVfJ3X4qoTrv31SdqNYawbF3UQvb7VP9vRr4ZEqJSMri12ZgRznLQTc2JiLngGrpL4PPBTXcWFo4YLTTr2uq",
  "key37": "46KXWNhBMxcX91rHEgWvxXKpE389PMmJjYJpeCdDMVK9pDW6aRbL99MfjzU9dBSQXCkkrnA7FuyZkWrL2B2PzUwj",
  "key38": "zXdjGYiuu4NQUKRp1j455zwydVFnfx43jwZwwLw6sY21wUFf5X817pkq4Hb13DtPv2nnr2ye9RmowRDHLwbEfPe",
  "key39": "5Gb3QL6jjvwov2HNNgGoDBvEXChCSRQjEpitRGf2YrSmNZeHUF9dNP5s5ympTUxgezUEUN1Mc5UjRWWK9oobDFHw",
  "key40": "5chF3H2A2wCrKxFRoHy2csf2jYFqZmEAzoUgfrZVf9fEggdvhbkgyyzvbNW9KfiUqBfpBD5X5DaLKs9hH6zemVgk",
  "key41": "k7V7TnCFWKoDWpE8xiJYJRpocoVgGAAv7rTL833w1qz5XW3RuZVRszrD9bzQkAmWbWT6xxwQ6ocxBK6zR1niGns"
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
