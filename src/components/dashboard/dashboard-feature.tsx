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
    "4zX2rEpJTWWLwpCwvP1FPjbcS4GGz2oY4uwazPEyhWdqXJe7gWhpVXLRkpzitZaqZufXLUM3T1dkd9eWoMmKrfQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FeCbsXyFAEUnXfUDyLWU48jUY1Dh63qVPpxvXpwQFvvuyztdbxmp5FK3c1jKQpKZrvKJD2ce6R3DgNdi8g3HzvH",
  "key1": "NTJQibJc73jKaNSpcyg5b1Fa6TRPWU7bn2ZMZHMQC4fuBj7NHwoC8GmHdQGyq4EKUUEn7GjwtB7rkE9YV1GKujc",
  "key2": "3mjguLoLjHhQ33FxMRC17VqY3Kdm4vUxyrvEvY2UVuzRu8oADvTgvnjS2BkwVddASxX8EK9c8MzKguZ8bHM1Zt33",
  "key3": "4LmtftdY6EVkAqLaPmmzJxaY5L3BJQW3snLx7D98uVZF4pLK4WQtDG1qE1Nre2tyCe2GuCnt1biPZmVkxYC4ZFzA",
  "key4": "4L2koaWQapn46XVodxG5WsBgPhJTWGtv12cCuRrEtRw6C9oiMsjdGTCnVLtcNP9jjBbFGe1KHvZSd4ZCTs42wxU",
  "key5": "5cpgvq8gEgqFCJVbKJxkuaMnY1cg7SmPDERouCwiRFXKLjXFSwWyHFcxmZoAZfVZxdGu7K8oc8cgCccQoaBHaGph",
  "key6": "2daQXAWKqYoPTPmkCPZQUHscMAWe55uTe83vz2a9g5M9WCS1cLmb6iAjXp9ZuBef7yQtCzZ8YPmseRPksi57zHsg",
  "key7": "4e4kCBCdHg3z5dqg79hbpwcPi84chVFHHeBzUxPsdwqgjuzbz7ZuxChBAQvaWM9V5qwCR3u2fHVNEF3fLd3em5a6",
  "key8": "3JE5A1rHbHGVCCREowJiKn2HAYzxkkKsfDfw3TtLop9PccRHgcfrH44VP7kAX5zr6X6UV1YaAdHLoSCv1Y21EykY",
  "key9": "3KigEGPxfdNoyqhZo2NHeEG68VUyKWo4Jjh7ypQCQFQZV3VB7wi9uq3YqVu47uRrqXk95byHJ6StwXebwJPjZx3b",
  "key10": "5XxxjpkeFvZdRCYYbFPDKtsGeW8fYtTLG8Rk1LHLneZQEJvKooKuAakg3CSNnHjjMJBDaua17hiB8MGmhP8jKSiX",
  "key11": "2jjDgDCoPstP5GEcwk5o3zzGZV2uFfZEksjGABmC2LLzR5dQGJ4GaZYX4KDbhK5mW7hwHjwf3huxPxqQg957Hd1j",
  "key12": "3knaRypJtAu6VC7c1qjN7EtCeTs8Ha2PC6mRxgHzbwgUwvWhf5MduE42ZtmctKDUvCGUfLPSY16zCRKLf479w45k",
  "key13": "3QL5XpfDoPE5oJVHhL1j4y9pC1M7xLMMvhFS5oGVrJpgymWrVfNdanRQT4i4odZqpoVU4Yd72QtPnLov2iP32uwS",
  "key14": "3bNPpou2bJRJqwR2ohwsSFaojmgieUqTuU9CwhVfWHrFdNDDnxr5e8Vzm4pi4Eh251nq9VoWTheJgVeq475ENons",
  "key15": "25EuNg1WVeJe4TFow4AUBFi7G2b8jHjeSSsHmYjRJJsSKEFHBYeQ7RhAsc6rHx8EyuEaxkDG4rWq2zd6b7NKe6be",
  "key16": "3KY7XnfZnu32R2ugDTCjEZGhjkKqayWvLSfR4QkJwcVSCKpuB3A8tpKAfvf7oZhrDq6uTD5NcZUyBw1eMPkY78nn",
  "key17": "3zmFn8hHMAdRjSZTZorAnZ7nMhY1dRVBNMDD2KcDvh3z2pEStfYEwU53KxUYnQL1ZjWTMs1jv2Jh2HcJksGFvD9u",
  "key18": "2RfUarDLvU88LKNZDyvpdfVfPpSDxUgDfiXhqCgXfy2apgKRPcND4eb5JY6yMzMf3EAWPPjDTcuh91isTf9BFFED",
  "key19": "2F9WLPtmeqaiXWzMqoN22ntoxm5uCaYfXc8HKGgdzueyJ9uMvnd8CGKPmumC9ZDbA8dvvAeXfQ8r4WXD6Cv2RHEX",
  "key20": "5VZcQq9LBY5i1SssZj2K42GcBTFu32GmgbmyiyY9k3EZAFgY6x6h3qZR4pouqks3WBCpzZ3q5WCbjzJ7ftGiqhAF",
  "key21": "2KoUbs5daJ7GANHGNrGwWa8NuKZ3bFoSoKFnXim9qG6fPayWMN85EVVXa1pa3YYXo76woNuHkWBv6LfezcSxNqw8",
  "key22": "gcU6xXRUmZFL5U8YwDyNEX7Znan1VVdaqYG3i4N8rQFCUeDDxDQvFPQWef77jnuJHDVzHEupHayN65ZgrnobzFh",
  "key23": "TVausxSpXcCZznGS6CRnHjVVS5jeWWb48NvEZBJxxFELouC4rAyqk5oqVbfVJGDmBtDUU6nR56g5uT2gK8EELz1",
  "key24": "gVFQBvLtDcdKZm2jUf5PKs8HQyLy7nyxeRvw4yW5fpzfRobBUgKr4yB1rZfjrfrPohmcYwRUALXUTrFJHfXbx3D",
  "key25": "5MK9FuqQJVT3o26GYJ1XmdB4o8jnHz3F5uyifdk3psQXaQhFp2nec9vX9pF9b8W3VPa4tZRxu86SvCxzxkrMHdVW",
  "key26": "5bKmBCwmxhAjCgznnPB56fyPyUgycG97E4svEqivPBF17JH4zjC6SWLaAXT1WeB79HsTqdMUFugJGQBEZKndTf7P",
  "key27": "3TXDQkBUAMdEDxqt6AvQVJwpji8NpE1Z5U5V1vN3oJ5KntxeNmKTMjvPyzgTef6Ug3URn8r9FrmVzNJPcQRKUJVo",
  "key28": "28ffKjhWgZZtMZSvDSK2BseV485EFMEpp11cKzVcLD7vp5Hbe8Mp9qMGnUg299m4ujCftPDziawTQrh5vmVYgqX4",
  "key29": "4HoBLuNq5RbcvuTrzqFnkQAZfHpUVLLU6DTTF8wYHKmvhFCSPBujjj7KZiw8ULDaNqNKW8xTC4nbWcQkcDudjZ4V",
  "key30": "gxSJ8kqVUr8MtZYfmfp5aQuT1WmKZt3RF3YqMFBsVBf7QFqWwRSnhgzahokPhJiWiUZRnbazzXuso2RidWnTWDw",
  "key31": "5WNfP9hafmGCC2qTxPBp3H2GP9qD3fdYccn2Cy5yaukDdXM6Nmghp1P9MR52aFLBBaJSSWMe9aScLJLNaCTEYpq6",
  "key32": "5DVhSufVQcPYLqX2EAJiMw1u5irbU3xCMtoJ3iQMMzid9SStEa79bUcKAGhF8TRWDp3hCwqhmmPhTCxxZo59PzmE",
  "key33": "4daEUXD7b4siPsLHeswkBDq2sLbssNNQU1AtvRViJAqgL5wncXfbA6MMfs6iBoiAfi2Go9VAim2xUvLe2qKiNcyS",
  "key34": "3awuAihPN9e79hkYrR2J24JWoKo4S1XhzcusrmC15wsKS8oRhPFkBy52TefDQUPeDaZGPuSPaNcgyob6qLjmbeSK",
  "key35": "3YLepHndpWb7fpYJKzGgRGGmGqXhttcKUL14Sfdo3FV19MgTaXVP8CGsDYXixxHwjazyJsfHJxStGGcgkcJJtqVV",
  "key36": "5XNTJ1sd5a1w588fvDJnue7Bzfo1vJaQXUn9Y39hjXHRDj49rrCZMH5uk7MqEZQgqG8fp9WkZGuZTyqP9pcearF3",
  "key37": "aH5EEkddszgpiscRd6hGU2ejRcb8HZbDxEuHbGauH2V4Jkj3MPgGqfd6qdUhvvFBW4Sh1m3Pbx4wQ16rNiw2jL5",
  "key38": "5JRye4jQcTgVM5o3HzYbALABSwwgQvRQsse573MjzijoekFCrAwuXXeKpqgfHYdPxmdfJkDu6UW6cUBxEFqSoWUB",
  "key39": "5YJxdbYaoErtgXe66C4QfaSx8LCc81Vpnrt3FcUENBCRhEuyYUgmp2oUGMhmPsJG7Rs7ZGyWsVUAM1NYsvCC6xjJ",
  "key40": "xCKfBTTGdwgZfZiuFPyvSLiP5SqQtefSFVyjgiHcEsMiZvPWFphiUUHrdt7wzh5ASLnSWzn92AKq17D5V7cQqUA",
  "key41": "5HeCZnbTQ88EJK4AkWwFo5K2GGykUKoGvkGmvUzMjk3ALFiNGeq6gXtdiuSvF1UBKohxxUy9hP6F1jGMVK4UyCtN",
  "key42": "2MhKNjrz6PBGFH5gzu5vP9jrw3DSSC4fguQtu4uwmqRNdjtZKgN3qkR7nX4gkoZarZb5wWfjnTcoDCXJFANXxgyc",
  "key43": "4Na9VfktfVY5sv3MqWVtsJsi5dswWkWWh2XDXFXoMe8zLHC9vSX1uapkF39rnWWWEq1kd3cUwUBusDYLTNazL1CK",
  "key44": "4LrAogsNnHaGMe6cJHkVLgR7zrqHZhexB2kioMoPeQkXHm6T1ewHTM4gRGwdKhNo7D6tcgYfiib3gWYrDP5zNfye",
  "key45": "5X2JWFaYgxke3dtNDkn61oDG2SDRdJDNSaSesxuQGQTofDMYLgZAo1cVDaeFpHQWrp3LArWy2iqjLakiVtCXNyoT",
  "key46": "5nvkrmbn28iKAeRZVQFxgPKF1xpmaS1NBjrCApRcnyf6GgpiBKeEXoao9zmjpwoW8pF3cCZjzAD185yHg32vHfsF",
  "key47": "3ThL78pNBXQeHUvCVeuYX3JxsQcui7yqqED73d4SKUWEfqhWPjAieW9drzK2uNnGcvHcGyWKBAdch6duPNYBN68Q",
  "key48": "DLhJ3Do2kA8JJpzbo4oSrcM2QzaAg1xuTmxQjWU6GTE8sGbpdYpjLKxu3fyKEHqt5XAiotPy7qRcmFkK572YWxV"
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
