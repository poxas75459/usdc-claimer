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
    "2QpzxkHnbgs5xjf9KEVJMZftwH8w4gSr2C4syU1a5L2dA5hzRWKwiz3fm6FmJHDwB61YsRX1LNpbR1c7KAP5eH98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fHrd4GRMT36fZvhkgtKwTqQ5j4vSKoj3QwYb1tWK2JoFkfidTJhg2ZVhMaKsH3jaAWokFhBPevT3z1amcQLRvcx",
  "key1": "36gaf1edSUkRacZvrDGZBUCkDM2JJnTTjLRwynt5isUj9VhFhkQjRGuVqEmKbPjnecxsKJ4SHgacbYoYZK5BfVq4",
  "key2": "3iieZADRfpLmBVnVrsSoSXrcVjEXfmFNCzQoiGQy1WvuEpikvxUNzEkC9yH4gJ5FCDvV5A4cS4m2CCmPHEQ76ZyB",
  "key3": "24S7UPuHbDwAd2r9wxUhKzGAUZuSsfgKJfM1KPXxWs7FiSorbpdXfsUmDGCxgSUYXpq29JqWUWa7ueNYMbYAEmfk",
  "key4": "2yzjakDnokNeh4vQQf7rYUt6cTRC6n35SRRtZaY2viBNS2S87ATwK4VWRAcBSXpVQNtG8cmWrxuJpGnTfLwGjVPK",
  "key5": "2wFWWeKsfCny45Mygmd7EDnuTzCC1pV7ggiikxW9BUzT38869SvC586qQtcmZFLZUCLSneHpw6crByaPs7zxmsys",
  "key6": "65e2pViWz28tBsNad5Gi1qSwE4jEKY8LbZbRsGVjeWoEsPgQ5nAQSZGxsQmCtgiZ2dT1Y2wE4yitxQqWJuqQwM3w",
  "key7": "3CVdocdew1ynTBh7vBiiFettZoe7xEKX4kAVK82YtGF77FSBhyVZgDuD4zcCiEGMbNzW5uh5747S5uPGDtqvAHMY",
  "key8": "3U2BuLEhej6sX2CC8k1SPRmMejhkak2pfUSLphkipfYQg3wZn4K9RYg6VDWzNkQ3pafVAmfuKomsd9BVcDGRKMxi",
  "key9": "3m9pJRqEmCVUesLhXuJ1W1wE6aD88aqzJbDfaRDrwBoPofh18vNQxsZ3YZ4yztR26vHDJQCHMHmN6HqC2CHp28WM",
  "key10": "ycS3XNxbsDqgMLgGxwFWu2r4vZndXxyemAqkZB11nFwebg4jdepjm61jScVxbYzi7eoSW3hdpXEpnY5K8VJWq2e",
  "key11": "5TE5QYUpxSdS2x2eUp2pqW5y1PkGdF79Frc88tnq5exh8AckAMhBzQ63DDi7fokEB9SeNuFBnFboWJW2HLxsSCcj",
  "key12": "2T561GdxbCCZBPVT2dTQ7ATJBwQKmbFwE7jYhEeX6CoiGu6jj69o7UBsPbPTe7648NnQqfCgjWuLPsSxYkzUZg41",
  "key13": "3QGMxNtRcKfN6WHY8N2Komk4eyNDAC4NKZ7Vnr79eXRLEVPu57Yhoq2SZvCoWWQjRE8VP6n8QufyYSDy8xujxHnp",
  "key14": "235v4wrZzwZZK2Jziee33sHfHSduypPv9vH7cCvrSCyzsS3MGoquH9TE2cCBeqDGTF1gJzU7jCdXD4vGBm1f4w67",
  "key15": "5iJ4y79Bw3SxMHGBVZFGD4VHrvKryG2vKLyJWKpebtcqgXvt1FpjSjgZfcWupfAoEVVG8QAKouw9k3vh1WW8xmrK",
  "key16": "5REnyPEmiJ81VSA6uKgNvr5ir1dhSTm2F2NT6VQhjjJAqH3ts9tAwoxfmyYtNu2kzvtbfhdEcyZghNroMqEMAWJK",
  "key17": "59LUj96ZKmugBm1gu9XwXBmsbPmEquCXW8SkXdwAJJQigALh4LGEtwtTgDBSGUdEgJLGEMZvkyjgfBp35qgakZzH",
  "key18": "MpdmFmG4aNhunqXsS2JeNu3SEzZhEGXffjtpYRNxipDxMaPHHLsmtESmbF9oV8WebVCjksxiggtK3ThGC6aRcbH",
  "key19": "mF1BRQ8zgTE3kG8RUYTbVhwTWQ4BC3wD3LhWZXxkoqqwa9emQ5KsiB4532RtRhrCNxPnwA1phvWxTp423b8smwP",
  "key20": "67iMfnYoK5s2haU4kCSyeDeXfVWJApymakcU4sPzcR8GoFg39qpGW6zow5G3e5AhPEeiMoJmcGRczTang544BGfj",
  "key21": "5UwqFqwH6ZTRFN7T2rkHHeRRyWMND51kWpqmAEK4D2QFaan3jnDu5RgPbySZg3jqQ21GVN3CzJcFXX9VfbcbtdYB",
  "key22": "S9MaQGJy8kMxnx1NdawpsWYCZpe9txscEyhBSGeP6AKhxKbHtaqCNdUy2qpcCH14UJWYLK8mtaxPefphm8b3GKX",
  "key23": "zjM9DmsyH5Afy2uwvQuraW89V97egC3dEMh2bTTyy5tcHoqHJt8JRpCWkgtbL14M327Q4XYhXr9Dai8rZRJKaVZ",
  "key24": "5yy7drFCZQxuehjumefHePrpNYaCiE3AryQ6fHWpKWYQTX1AQDMd1FpcyAv7dviRzsZrJ6Yy8BL7ZQTFLUB2WiRf",
  "key25": "5Tf3TPmBJqpySjy9bLNHVNWHjbJQfUG9iUseqdzTsj7pLwfyRgjy7s8UGp1TjS8iKdHVXZBDCpqepui2B4vkA8Y2",
  "key26": "3urjp2tFvwpey4j8ER42wUPmWBv84vd74kAbnYbjwhki9xTvSkYLsj5BSWK67mmj1Dk9Dsq7f2vL9BLS3cCJAU2o",
  "key27": "5yiEaZo1aK2JmUiW3bbvBJ5ci6BeYirWLAYSEQ2EU44Ur9gsgE3gQsJMxMNEiG6GwV9mCUZJwfsd8Rt5YaXUZZmR",
  "key28": "4tpExExMbPZSDXDJ8YRxYX22aeT6uLv6svvdfNGkPnfzwU42SCtK4i9md7WNEw4aQMogR9akDaTpCczNBmQLGcWa",
  "key29": "4KpBPZ4fh3w35BCTBuwYhEnY352qcPusz2e13CzzGYYdm6Ss4YXbBNM6ody3swCCU37LEzu1eKf5uFAQurReqEyQ",
  "key30": "37n3kGYcDV1E5Fx3xFhkUcaSq6uze1gAxHQhZrZkFVpozgLs1kaFTft5ocVK4YsRGdACLgiedf4MUSP6bCDbgiVi",
  "key31": "3HGaJHoXw7RMuMA6vHAWarnn2d6ByRE8hH3sZPD7zQ3zQPbUSVXUZCoCnvDxzMPRwX8CUtfbrauzZbJLTneX2Wmz",
  "key32": "4yYerhHNtenMY7Z51Jj4kRaDeMQQNRwEyGRhdXQRuL4Kuwux7CaH2ght5cdTN4K5ykhxPeJFxGwDkFqBouWXDyS1",
  "key33": "5dow16YvZcxG57b3fwrrgcmZ8Z2fUmjLPMpR9TYgEm12bQLfTcT4mhf5mcw8DBbhtqt2QZUepNuphP8NTrYEzxd4",
  "key34": "4jXazbuMSBqmhbbHSn4NoecX17Sz6gqN26Szf1JheU2TtLnVAHJik9uZaRYSib8BFBZPZ6P9jafENQnzLtvXHC7p",
  "key35": "qpUHMEx6T39nEWFUApkMhQVpXYyYixBjmUNMHrm5b6GYBMQMyRLbGjgWY324k54f1ePDsesrb6cjixSiyV8BRy1",
  "key36": "3Js5fPkUexH77HujKnSXifFtgoxexdJtMTZRwa1raxfgsMwhJ9xyQE5Du6RctXhGuvJerJU86n85EwMGrsRt7MPV",
  "key37": "28DYc4uW7HQLwCmQppnmmDSYY4Kix82hgpVQKE6q2nXC4dYripR4s7BtrWYPVyinxBWrN4tHTAwW5DfNBdxYmj9B",
  "key38": "5ij5qyNqYSuDbfFBib9TJrKUK4Rgv3sZChE9Nz9qM7HDbYcqKcABoaVRLGvH1hcrjrXEige4UAkBGrAJcFJNakL8",
  "key39": "3CrCPFiMF5YMz4Vyi6QL3GuqMQqCYjkFF1jzovhgaPfDRyibV5mD4Wn1xSFnCHEHVYTRQ66JaG8YUSzpbCGSDJ8s",
  "key40": "5aWkbjY9T2heghZ1DpgGyWKobeC1v2aLd5ePQUVqa37Exzua46QR2JtVkgn3QhU1v6rCJpHb2ruZ3Lg1XozDBsyt",
  "key41": "3XgQVfbi7o7hsx6xNNadxkiaMw6cqx2SuouDZFn8fbfiHxMwdhpzvfR7w9ZFoWy6n8rgiTfCDc2UwJos1THxMJex",
  "key42": "iYMR4ns6xQEeffq7hTKjA4bR7Tv95CMmZhERfkEKd6awRoRvtFyHJmy4q2grWwWDxbCSyPBbq6HZGejnXRH3DC3",
  "key43": "4KYiMKFnKFwqvZBkyFA6ceUerwXZzp5z97mAZErcxariptpw4YAKGnrDRx5bemp54kzMWeVEboYMs69uhTBkFrFT",
  "key44": "3tAgQGJY51KmDGR5AxCfVppiotwkei2qzR9jTSWfn6m95ou9DwuhCeAgceBwF45gaXjnhycsongDqDBgK5ZfoRcm"
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
