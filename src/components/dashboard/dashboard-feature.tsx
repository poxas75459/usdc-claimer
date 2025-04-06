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
    "2QJUQcoydr69uxh5Z8DbKkLRvFFa6HU54VXtER9YAmjTuFFNznCeKdGkZn5ySjML4RzVDJE8dTgfXLzaBE14nXgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mofVevpuFAQSf82HBzGBJz6TzYthBqDUCgf7KsfyruYJH3SFtUiaQaJxK7J5btPEfPbxjdcuNGYTHbX8Xy7anYK",
  "key1": "53CqUnyjDiGC9Nd4uoutPS2fP6P3HbTcoAJgF9Fm2H1VJoVTkRe1uBvujup9Vjhwo9KiDfuZksEXwuh4yX88isxN",
  "key2": "2wwD15s1veaAV9hEXKMMi83UyThNGQ5A8fkA6DNwx3bQk5qzHuPtFWJqCBXZPLitDkcqMVrCPBvGbyDXUEsCLmGH",
  "key3": "29SpAtUGtv5DmKY9nRmMEeHAYY9pVAwoKaw42ADQCsHCuDcudaTHH7N8cU2QKyKQEi5EYaZmfaMUWJN5cyRW4QiX",
  "key4": "GmpHPFftjdwFDygPhYN6hwgGvAhLoFSKfYQAdGVxmS3LgMYCxiRAjcbbBd4LqvrHGpuTSD2o1fj37duyR2PG764",
  "key5": "28GzLX3htRgzQw5Ew8GubM9gReEYm1PN38d3x8cE87aSy5aS481cgrDbREErAohem4Vzomc9A68C3i39V8MxFZNH",
  "key6": "3sKaHues13MFoQj1eo9C2z7xTECNA25EHYkbtF2v2kmqA7VB12i68bA7GVwogYA16jk2CHiFnVv7aeSpsY4cbz2B",
  "key7": "4XnxFYpQiBK4TZrfMer5iN3o4ChbXLgwaSEXqVj6XHdWGfVBk4spritVa2C7tHrvXqHT3MAk6p8WmnDuXKyWvHmg",
  "key8": "4xRhydLPu4oMJ3JAGhLtajtebBpjU899rAdvRPwTTSqJXzQpKW2je2uGTdYNeZjsHc4Eq2z5WviZovXCQnWC6Bty",
  "key9": "67iuHm8PmzNMfj4uChaAHUX5B4zRrjGP4Pn9H5cNHAofwixWEpekTw57ErAMo2GsL4PQ9LNQfAa2Cb69ZsxzVxC7",
  "key10": "5M1u8apPFF59aao3h3V46wRfKaCDS2qBarWd5NwRJCMnpPsvemCc1v2Qk7oVGGNqEVE6PLsdEV7NEed2pSeVaw8s",
  "key11": "5WmdayFcJBbqbY7nE56LX7mVGMwk7UQkBk1RNFHYt8FFZyDVA5g5ePAxagfDHd5YyC2ycb9TiNxzEFefNz2JG6P9",
  "key12": "34onf4gD8RSXaUh7HG5YWeRBrLAD3HxE4JZJei4Fs2i1w8ufACSm36Wwsu299v2gJhoLkLtjAZLxXhj5zzdnDj2m",
  "key13": "5YmKCmNuRTrT6yxuTJGTmiuN7424TyK1nUgSf9YEwi4WCzBRZpec4TDorP8n5tpPNtoMCUh5DziwqQDRrwmxHgvk",
  "key14": "AzxA7MC5LL7goJyxBpey7dwMDn3Jk31DHW53A9WPD9RMLPD3NWCrjxykDCydgxmKnQiqcqNnrub2hbqVGanJTLG",
  "key15": "6VGGGEgMqhyk6ZiqZGhgS5K21XGbmyQTBdNaAAsw3WEgRqDz7JVqCVwmgduReS2gvj7SJw8ifzSoicN8gnoexjo",
  "key16": "3eRZLincRLYK7cb2dvrBYLcZ81TaJSChQ6w9wsLP87U7Vw4JjTkffq8Z6ZbT8WK4euLKDwz8YPJaCLFCrTWVnVZi",
  "key17": "5j9GYEbbdVGijNdpzrKQTu6icjgiXo9P4jeFGcLDwhrfue4nh7vXgRuXu2TY9RpqD2bU1K3muZ3yfVjkKXNLyuzo",
  "key18": "5x57CmDiWk1j6n3WoKjhZfdQg7qJFSwzri97SMFMq3Jv7k8hPMBWnyrn3c6bNfYADiHZdp7VxvDFGeojVGYS879Q",
  "key19": "42p4gFkWV5owYMznxRKdBzj5PuqgJQ2HWhgmvsF1YbUBbAwaA8nH5ydnVzuA55GNxdoRaEoxzNQmReZmjbcrqXcf",
  "key20": "5aPkhgRG6XvpZ21YjF6BpoqHMupB1Z4PDp5Qyu4s6xndk8yXCrBgysYcK351h3NPXkPvveNfNdVZwVbmZdjTrLxa",
  "key21": "3fJYrqRRKdLVDJ5HT5P1qJ42e3439NcKhWxztS9MF4GKPtuUsd4UdrehXPTuuEaB3NrF6d6NeYjcQrPuFYEr5kQt",
  "key22": "oTiSu9KHi5nKJUpWPxVJgGmAg5WATDzRWq3MKzPfthozevuks8d7iYd4nerhcJgxHX8t6k2Fh9X2b4RrPcCw5qL",
  "key23": "wcUE7wvtkB8dq1CoC2PX7tpYcWEHFWKXcwcstSGBLm3kJdFV3NXt8uCR5VBMqkm9xrKADo87mBQpi6w9CJap99D",
  "key24": "5W7GyeEbAXgXUczu7AwjDbvrRqXQSgmc8V8DgRSacGzRpMvA2Gs8pRGJHjhxj5TyZrkzZedEsrNXZQKmG6wizkCt",
  "key25": "4ZpBAMbSyL1eQ3Qq2gNkvKM2GK9gQefix73Dz857BNLRfMr5ZX7vXCuLxS7toeBxpQK5kR3JCfuo25bXG1szW4iN",
  "key26": "TgojgJ2xrnuX9qExqpeFgwGJZdYjXP7BAifZbHo3cCYTH6Bag371BjQDxP6nZmYoX7hzev52aM77NrBNqvVPtLn",
  "key27": "26wCgw2ofRgNDvJaF6DZj7QMcAnZEXPWb7t2rPGV5h7Vx1HB1egQ9vjWMStAYmaraCEkq5rDuGHvf83wqsomuQh8",
  "key28": "iZt2GntSQ8f2KhFfhwRFUotHW1EMbjYX2TZWP93LbBR8m2M7SKJ1iQ4NQFb6anLWqnUnEmPw4WQtYSkAKCBh5dT",
  "key29": "bZki2rkyCuvJAjB4jwX4p3h857C2MoSConVwwWE6nBisDuJLSp7bFe3dRDjwNWYG7VC42fF2HM2HkNtceS1AbqN",
  "key30": "2FwrM12cYUuJiYPNqhBe7rpxb61eEQnXt4nzLvFAqtuLr4f7D9ejsKpr2kNPEnZBby4KkpBTuRAkjxFKhwpixCDG",
  "key31": "2JvQ7tuYECibUXGQTVwUbwQYCyoihHPsv6ucYy159d8rFHZZWFtWQLdajViJFyAGCkfTVksUUR2kJ7EbQ9iFBQFN",
  "key32": "2Vasgywd7K1kBx7ZRWkddwu7U9EmZrdmuuixvHzkQc7BGcwReAUtXDtzxRuEkH7v2fWpJdgTLmC1ywNandjftt4w",
  "key33": "tDaMpaahpWJoA4n7A4m34cg6n7Vq7jqcDWwmqLrChQv7HvgfngE6ZefeRiBudB19MTWRuP4KZtkYq57oktzqJ23",
  "key34": "qsxkZJY1PFWoZnnJetMCxawirJrpA7JqXVFpTQvzigqLedhcD5V6hpVTFQmLBCaoZgW3gJodayyEfZoy5EdhSBh",
  "key35": "Xz4TA1PmFahB7t9xDQnXTt91VHcT19ZwnP2ZRnvs3Uu2CrsY8NwTGZr4UfgdJvZ46WwgPBGXfZMdJFiZYvaZGoa",
  "key36": "58suBphM2s8eL2UB17Zfg3sNDjfbcxvtG2MLTef7MCDCb5fAP6XrMXuRHh83tWsnzfntENngeXLebhycrgTPQqhF",
  "key37": "21aRZwaULkiLJKh24ihbmSBb47SuirtH1tqncZYsNBgFz59uF1sPsVrbW8WH8E9cc16xjqckAQDGLbF26tYLxKZ3",
  "key38": "4jiRFECFaErxELLmzm1V4TA8iQ9yGMdq5QVbJqCY4qvuYdYGK4sz49yZu1pBGe76hatNRdFNVEE4SvAL4P7oNzE1",
  "key39": "4XKTjEVHGVmed5EwUhYCkuGEDcVEpA64FLkNnZk2MGGmQ4VLAYi7JkivnngSG1BSYmjii13phycTaqfpL3v2snLv",
  "key40": "4Y1qw2SZJJoyM1AEX3FCuccCJQgmR1fwcJyiCvycz2pDYrGx9hM7dBxFk2ZwSXxXy8PzsQj6dPnRfRgnVChdWodo",
  "key41": "42TqvcN5Q6vaZgtJbNxQaYJp1NGC7xJBkByxa73vzgkGS3FfpSW1pKHyY5MXMFRKBgP6tDrTSRJVirMjK6Q5yLCk",
  "key42": "GjDhJuNNT5UQY2fAcUa5BNPfDtHGnn7ndeaoA4Fx9JpMDhuoz9YyHoRo95RyFEbP4hmkthVsCWVXdviB2i9MNTx",
  "key43": "5XAwoPj58ghaPhP5iqZMNG1NSmSc8B4NUfh5ULEifkZfKi3kmEN41DwHmkbj9BaDySda6cvqsp6FdRr1JKC6GF84",
  "key44": "5hQu9kRr6b2of593G7aSnBHfZxtTEcVmrGxbiEPmYgHaJbih8pqVWHCQCEFLisEeSvnpsdJa1tTkACVQCHAwy15W",
  "key45": "5nBZGyVWzEZ12V3xjqLcmec3UECRp4saaguArZFiy55pLSAdT5BumCkzwrCbqDDVkM5bgSJsUFmvNrY9wHMzXXa1",
  "key46": "2NGNsoS6ZqNNeZgNkEnJvUUWMV78naubdBeVndSqf9FHs1zDtGZ4ujQdt6KmG7uaq8ctbbnjvjutWYXwN3VZDdDR",
  "key47": "3B68oNsF2AasXAuhn7oEqHidbHLZsEDTgbuLL95F5sbescfVHXWDBBfvM3ouoCDjiMdREC6uo1YvkhijoKh6ej79"
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
