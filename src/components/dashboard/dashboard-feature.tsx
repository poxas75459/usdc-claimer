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
    "22f2txxTqSxvDvuDxh4j3VE28T8BqFwoCeH9GW47AHWk47pfD467tVnBpBLn5mVgvrV395BKm75YyBpY1i5hQYKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271VhoFCCEf2hr6pHEYAPhpwfaisNYsX4y7gtMugsMcm6SAkmx1SeR8xwXy1tybF3xoKCubcCFx5q8xyv9XPDu3s",
  "key1": "4YADUFVUqPNFzJuZ85SUJMtuKh7qpM9cbguQiigzjjLTFcExt87rLXwaYLiG2riAKkfsQo8gMbby7RddxSwypqpa",
  "key2": "5xNz5Xrp3M5yk6LLQvLvLXZyGZ2gCzPBfHBjKFi9ycch9G1pz2ada9akLRiEu3bJKrU2S9vNErNfEdEwYW5SsxTQ",
  "key3": "5o3oapFyYVAKtAygYRgrZB85RmFFxE5xCpFJJZkvuRNaXvSHAUNpXAnQ8eKNXfkMQew5D5AkCSmB4PfvJS87CpKx",
  "key4": "52G9mXzDAhuESnVZBeF7wXpQz3KvsoamdKJN4QQ2tUhZ645od9GcxtMzrtxfc5Uhf7ePEUPnCYBMkEtjB1jSV8aM",
  "key5": "EMoE4tYqTYtxvPZM8gzBgmsv2xPd4DqPw9sxWCZbL7aQypoEGnoqSVJWCJZgx1PuwenEctiLHD5XeSjebptSyAt",
  "key6": "5eWWLizCUaS48MExetCoZY2v7ZVsSePpBNR3TQzeNu1SS2n98vffLcsGTdFiPY7SdHdMuJNJTrjroSSS25x5yRFk",
  "key7": "5rXHbgV4HTXzUPzNXQ2TLeBbVZ7JdMmAo556NR8XqSjq81bCaRdBTvzHNR8iDn59BoHfWvyT5WmBsku9cQS697DD",
  "key8": "2h2DDJUKjVYc6LHMAKKvZr6DSiz4Qxe6B7StDyreBQ2nBb4sCGRKtPjeV8StCobZiVdDarLzJNRidvUztKXtCW5w",
  "key9": "2PK4TySjyxG5rCGSdxJ77zWJnuWPFVWWfyeV1XJzKLfscDu4CPN7azS5YFYXUxJ2Lp335NGpBG2jL617w7zdC6i4",
  "key10": "3ndizTubhFqeCqRtsHdmwKT5dj6Ryn59EwmfSeSddCNHsx4KQVLpy3NEHS7THK4pgQmXQkktMB7TD2YhqedkjvYS",
  "key11": "2V8PhUWmm4KxRwWVK9duDasfAXR1zPQ49hL7ogBFDgsRG4BkNwPTuv4ZoFMsCY3sBENFeWY9b4bWpov7kKsPzUEm",
  "key12": "4MNq9yMMnuoQkNAkurE2E1bo8qUrxuaWMsLbzhBUXjXKuXKXdEGVWNvji7vpFJuFavPqebmM4ahkTBLc7UP3eNCM",
  "key13": "5gTyEBMQvvRUE65ydEos4uxfnZ2iN5DeLFP6KrABYsPB8eyrtfR8QMbC2KRpmCvFZftrWdrDRFvs1EhvsJwgL5Zv",
  "key14": "4UhGEqW7TUgRBrzjEziTujntHZ1vCALZkdF7tts1FCSQRFYRAREeqsH5PQEPwdjhFdddxr8TNKHs8Bhetpm7Kn5D",
  "key15": "66Yobro6GTsPDrFpb3urGfr12CzwDe6WCkTGVpunQJ9uhbwpo6TzMEgg6tnMY5dwnApeuf1fvCFWxQLuapThtcCY",
  "key16": "4KmRAZaV2ioRSb1q8ZUPNp96vVjeUGyixJ7KYG4esJbdYjTYGB3eF1LFE9wiJA8NucvekvKpEWiBGV9xwhPdnPT5",
  "key17": "4ocQ79jFHL1cMtVDzCJejafdJpxFy4dBW5YYoqqdH86FkpMPAh91DAC1h5Y2asZJEmXizi3zb32QhtdQpwmchEWJ",
  "key18": "5sJCDf4qCLYFUAarH3xoTw2rjeWeuzY5S63jTgQhb94Kj7i9N5yxiym4DTX7T3ojXef7kBrVANNYW9rL617XRjKv",
  "key19": "aj3qz9q2tXsVnABSWcPF7FetBuozur5mY5gwVowaggNHGcZkDH7bTqrXYMGC1t3GZdyzJHkeRDqWRf5YVESP6Y3",
  "key20": "4YW2rJufqxmeHzv2nY7z462GpVQFVaf7kbJJq4od9eqCCXVgPSVPS4Rm6RvHb6EmeSeVfDwpbMtVgHJqCtd8dmKD",
  "key21": "C7GuWaP892fVdr6S3QSBPmoRf4pNzCKQv6Yt7AKEDyMHDyWWSUzGSDQ4YGEpG3dTNWycf84w1dPe7w7G1wYjd7s",
  "key22": "5XrTshZvVBjRHZybxaL7Kg8VWsdadEsrsVjsYNk7BpNkBS9omvR4Sad8PQ2RJBmchagSJa8A5A5AdsPNynZmKfwX",
  "key23": "64jPbCYdrztBFnZpefaS77Cn9HvmN5P4eEEJSe21qSjBxTKYViztpt2wc6GjjNFvYThPD61uahnzhgyeMKxtmnU2",
  "key24": "2Xx2i8WaVmJZicAQUwepjZaLdQyx3oiUnrkntDLEe4LUA8Hs5Zf1sNoKCgkxT44pQNVNyd3hjXqswJcNzfDFesH5",
  "key25": "3GC1SgoRFhs4JgGKQUW6wDMtiiVbmoF3U5sJxQtseUWG3AACPPhRaHMpKTdJo8gp9qPmZtqbN8RvkSsDv1NwnaSk",
  "key26": "53WrnBDXGrQNpxPMK2ryFWgmV93yN7AkKQYrdhwhJJunN8hApwSfKGgiRPzgFmoxsHXHxyKU6Cr9CxsuXJrLz8vS",
  "key27": "2QqqVBtLa5DpAd2bRgHMLkKr9TFjMv5aiuwMpb6VtD7FBEqqvrzKrUrKfCddytyDhN7UyUyKdFVLmusNnmwaMR58",
  "key28": "3Rz9Vz2rvHq7WidhPn9HEbHA6KrFcCZ3kL9xjxFKXYpwrjG53D7yyA29LbuhBQEYRtaY8p3M4y4hXa16bvdgbQoR",
  "key29": "415PPURh52EBCpL5k1M17z8VF9s9Vj3PWXnwgHqLfpxFjcCFkuC5S1bDGRyYfu9azF5VkBV6K5t5vKuLtunWxL2J",
  "key30": "2b3FRz8jHVLxom76LnykTCFUJ1DvCAS1m9X6NkhE4KuXTAjm3xJxea35efSWwcgcEtERZZtQ4PkdbfKXV6pcGvG9",
  "key31": "3FsDPerpRjuyBvJzu9q3bb3kFugzgyTdpScQFXysxyb65Yq3Xh7SAowmgsmCZnGZNxxvVvhX3bU25xpNAqBmXpyD",
  "key32": "4zAZ7XXsDMevmKxMT2T4aDiZDoYUwzS43aFitb1Lttk75Y1s9pmcdizYPKZBu36oyJcEMF5mVjcmvwcrNquJxdo",
  "key33": "2gGPAxFFNT32ycAsNiGpyDaEvGw38iZ9ou3pnyvJjFmo8Nt4fxJXpSYXUjZfMDbs3f63VRpGoTBs3eLwHaekJrcu",
  "key34": "5x6Daw3966FdNyzhmirwHMEor3FLKBAruTXikXCBjs9BK3dYuYdfv1ebUnjdzs6dM9Z6Toxhz291FBFd2tJRfNDz",
  "key35": "3tGEoDFqryarZzsnjzm9D3VTdVykn3yyrY2YnjuTxWb9TwDuR681W6LHaHfkSz2mecPmMAmsxu8DapsedKAg6cq",
  "key36": "5RqQjAXAD4EoHdWEbtMmfojKkUhdWMpSPLdPSMLT9Gk5LZkQMQaxysr76JPs416R8jEacWeASsfapZjmBsPnH6iQ",
  "key37": "LuJhNCdYet5zTtFzSLQYtQfhadr5XUxPWmc5g67LMkR1zTyLPoY5m5QdveoFNQ9KBzboxzT8HjTGfmae2TYArYL",
  "key38": "5egdo38ypWPSesmS1pHsCKcJrUANoAfHJkdSRSJ8Gtmv8Zqv4Qn7rCPKMTeh6FpPD5zwhwF9GAtTx3Pzk33w35jb",
  "key39": "3UeV8QBDd4FtTrbHp2ZJheKKVqXHesE6MgrK5ynTncdH4QRuwNPr64ABobj4EbUXj1S84shaSx1Z44jgxiQYKv63",
  "key40": "2tizPnLqDJ3WdLoWShiAvv7jhH8HPb4pWNcKfxovip4Jv3N6FHL99iAwWtgxGKdtwEPqv9euifRr3VhPyXbVntWL",
  "key41": "5iJAbTbGd43nkR5ZZhvjhcq6jGMwxM9v7BSXY2hn9GCY8fYwgvZA7hgbtz5cyPFAW4kYojDmjWSSN3xwMNp1shAR",
  "key42": "124oDz4qWAAKoehuvm1eaoaPwJ5BqYQXrCsHMqgsZdDtAjNyU5Z2aZr7NuiShfKKuvE7LHFzfGT2DYfTf6svPSDv",
  "key43": "48SeyLLcQgFTmhfRaJfNER45F4Snti3ViaBWgDrBjTjY87JTugY5DQHFvp2W68cM9fC8XKRyemLHgWst5NrEkTKK",
  "key44": "42KdpqG2y5czjzn8e39a2GMJmaogTzFqKvLF9BsznGWi6bP49G8wWMDxAm54UjjdVXVhqh8YuMeTeYV25Cx7r7H2",
  "key45": "47FWKXV5NdmaDZQijHbPDyvt6jJddjT1asGhK1LnNvDXRyH1Qe2dH1SrYaUfz6w3Erho8nAGrFcKxc8MrPvtivQc",
  "key46": "F2nKwWMmFDKBvNVXrmBEScNG6x5koiHBFkrL6RTVw7Y2KnnPKpYeXz6gqoBdfgnfaMDdZmn1Uv3YnQRHcShtiLo",
  "key47": "59moZojCsaAR3BVARvo4gSAeNdZJNPD7yoZWQsD6Xs2m15sdNG6ujttmgnukY17sLKU1CYDf5t4gDAxgkpaJmvCA",
  "key48": "42cv27b5J5kVAGuktaEfmB4NoyghgECjNEqfwgoGRPbLk5EKuiX34E1Rq4Js9kh9hgr4ohLmXwg8yjAbsrwRWD6u"
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
