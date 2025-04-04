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
    "pGZGjkEkp4fGEHjh4iipFuAd8FqnGCHiJq6vAHhAhQ47zdqdc6PXKRbTjGqnJtXB7qtNazbUE9XSRpJ5UxyYoXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61MYgj5KubDcXvZf71WmZ2GZedU9QFC87sBws2aVLUspmz7eDfazxusj6kuiiFzXKjADynct8gBPeXJmH43vXxZh",
  "key1": "3Nqjy8GVcqcorKKeXTc67r2KM42w31wf2zyqcnRffmM4E6vNnU4bEvCUaEfio98Wu3EztD2PW2Ex9jZFZJcGTqGd",
  "key2": "2uNJySN5Hi9R83fsB3iKHBcHLUe6ttMtRgtDfdeNmEfqH2s19MGuXhYSG3VHvrjjtgJS33qYoMNSYqWAvVHhic9R",
  "key3": "4nqkBme83ZKytP1MkSGfdP38cJDNnPwVFwmk9DoiR22My9EGqKHAN4LSydZnaQgmswc4yjhfcN9DonPavARcwNLo",
  "key4": "4n2jeKBSANA1GigDgECN6ECBKKB5J19kC5rxS31HdRMaeReAvfbmbeE7CScznDtsXsV3r1AFBxP1bGHvUj9KRfjB",
  "key5": "5fLZ9vEJzDdJQ3ij5v6KhCM3hroKw3E43pdEDtjvxUPZq3ukEKqUbVMgs2m76kgdaip9VTucYHSBvPmZfDnKHRee",
  "key6": "2jaTeeMrdTyeidbjoVMAFsZ6BnviiuoF3B3fX7jRVeP1oNSu5TFxU2RD34sXkS9YgMhFzmJ6KwCWDjc59F8mvQPT",
  "key7": "3PrMUNoMXaHP3wtZFfCND8rie3ogyWPfrG4DC2cfwjKxzipttHvi3mtRB8VhURAnX6MgNm6FDKDaHcmkzXUDZjuZ",
  "key8": "6Q3BRzepbSk9RQpCb8gDXGhPuiJroYSwpHmH86z4hKU9i4UvWWBU1GeT8QBqJPYXRK74Bdbi8wGiyB7uFtXz1g5",
  "key9": "5Cma9fPVSq3naETrqnGssMaYjkVztiJ6nKM6Xx9QD16FTEput3xTGLnyv8pbNGV6M72vp3Yoa8iNzvF72q9URBV2",
  "key10": "3bXaEhouvcHi8d81cHPw99dVFY17Ftb9izpshWB61kD23PjTqcFoarn4bT52YjHCZ43H2mLjeSGE2LEmBqzMzo2X",
  "key11": "55G1v6n6ujatAUkyfPtBWjbKFr6xvYnE1dfFcMBc9XrM8hZo9nySa5HyCz4tW4WU8cEWuC59zKoGuQWy4HM6Qav4",
  "key12": "2NW3oHsPoxugTjum4i1TKU1fzKsYCaugTuMmmhCQZWyvMUNGg6mJwVPkvJREy4BQPUD7apXPff8tu7nCaHDLbLFv",
  "key13": "5aq3BS1oSQTUKmp6khsdExj9ceAbWbi86VK5g3RqjYAb8mahXnygbThxLNQ9ukCamxmZXz1EndAnBQcdzMUx9YrN",
  "key14": "4Av93HjefFmJ9h3j1rYUSjgrnVo9qh8qXiuKLx876qn1nZCJL1TBLM4AJnZdgNbCjswwjY6eHyewk5BwzBL1ADFx",
  "key15": "2G2JFRiCUuUUMiHbouaGWWYSjSiWm1BBdjLcS3vAh4PeYpT6AB7xwfaEKMSaqyroJh7Jx84rwTYNRNJDLJkoqzC9",
  "key16": "57eUGcArj8jp28A17Sy3RCRuVNQnPmmtAr3UNGUSVgPY2WvXLej4TJhHfE59SpaGvT6D9rKCzqvYP6eTR2qtDndh",
  "key17": "4E2cC92xipJsG2S77QWgUeMkWpbd65UhQtFjzWEuzbFBqcEuCf7aeFmLmmRb3Rrjbxowr5BxwnDaGR4ZymWGgXme",
  "key18": "57VYHUK2sSdpFfr5aJFkPm85WPGYy3ZBwDr23zQaMr3C3BEGveoPJNHpqrvsbrEK5ZgvK7m9FP1LnntPktShFBBW",
  "key19": "3u4Df3u8YwmbGTpbPZZLQtZpHWp1zunLNKe2z3vNwkC1Uhc47ufEsVwM7tQnt7yWBYBMS5ydkB2dB3jmE3bz88ef",
  "key20": "5Uq9mrALSsiBHTTiQRsbocf1xbZpn2uSZ447tch5JnDYyCbLKhTvJbMNSnamJ4gQh61yK9qJkrg3Lj87VLVqtiNS",
  "key21": "2wvLhpdwQEQAEtec3kkjd8Ah59sAiepqWFLhxSu6Lz5avKKtuMpg46oddAxf1vfDG6YMbjqag3RKf1dhRmkDfCm4",
  "key22": "31BXhXFMk8RsPabQqBsL8UVUUMi5REEYTrQzq9JSFURrX5FykbUjgh1qZftPVzUXLTn3vN9nVFHwY9ZezvNcMogR",
  "key23": "3Fz827dotrz5842KJGjv1qJTLoYcUh5qpCeFH97v8QKhea6fVpvU82uEJaRQLaosTVyoRUcGNZWt7Vxep8VeauWT",
  "key24": "3M564RgkfKUuSqAM1724L9RjScSSoWQvLw9xVcuhTi9ubT3BDAb76n1QyKFAAshpe5RAsVBzZWwZCHS1RmBhzDiD",
  "key25": "3zYCQQZMMtnqv4uDb4dQyqNHiGQ8NvijHxxcL1eLGduMcU1jBahprN1VWjEu1hL3EsvXeNTqAfc96gLEQtexexkW",
  "key26": "47BD4Crkk8eGLvU8WQ8D63rf2eYBxD5euyWwFmRdFfGwt2QLZgZzBXMSu8uccD6bqv9j6c54fVEYiWoAF4GPsZEm",
  "key27": "LiAPueXQPS1tcdR5CuRtwSaNUGbVNZXt9tJ3DnUtp3DQbPkWK8uVnVoD8pwj5ZKc2jcjNT6ay9rDKiJjiW6wNwT",
  "key28": "2LHaNPtTDdKz25m4SMsCYfZmfgZBvSW5JRQtDNKB45jM7nz6aZV7W1SP8Ag8E7m3hcZ2HoivD5JsQGd3J1E6t7c6",
  "key29": "5RHYFL3d5zrfEcJfFVNFYLg6SDBQZPby4kPwNeWpHQTjipTXTJ4WBeVuchZuhJoBFhZ2E7QxAKpvXLBSVjUWmmBn",
  "key30": "4scXX1UmX5ZZSgmXmVSinqgxZxDQYWBB3KEXrQpq17cVCyqNTaoTLbxD2J7KFSmwYgtQea7nCm7mrqqAp8t4TC2g",
  "key31": "4fmiE188gRVvTCepToBF5EuWNQ7XaWeTvyuuDwQjJeURxKKadB7R8KzikqpxMopggZKvLK8By465SV8cQkukpPVM",
  "key32": "4DaUZqSJYnTqkSwtN9hEy8oQxgGNenKDdb2md3r13xpTd1wu6RJzKMp9aXB4X8ajL54SjXEP9Dm5YQEM7WkueCaZ",
  "key33": "57Na9sj6zzNQ3XdTde2P397mYk15TsU1rUju5iT5qssyRhBPrZWW9jMfSj1j1NUg5GwsuGRJ6SYZJ1PzWkjGCHgK",
  "key34": "LP4vDLozBwP7KyLbS4xmZtpSK3ujrCnjmuim9zGn2LQb3UeyPGED6PfEwFMFmQDQWgGDsok5GWhS8MkkfviwFqp",
  "key35": "5VTSS8Pnxs6yv65SaGV1X2fxkUGcXwfzHv187cNviKHZnw15Fewx65iq7NwLnUftM8Wisqxxd1FLJnM5Pjx2XnAR",
  "key36": "4nViCAugfnQstesXDPs2r1nLw7EE2xixPo5bHagp6sA9kaeuhcwPTFH1yFgnpeDdNjfyiSqRtxWFRjZw9MTRruHE",
  "key37": "5y1EyYKFhwoQ1gYnetmEsJ6vuMa1cAVa64Jeh4qyUjXmxEdJA1kJ8PQGnamDdoaPvZY9uZHwfyeh2XpbxeuGvg9p",
  "key38": "4AerW9Gs2Xd72xuqp7JFmXRjyshcEQiytY1irMngsaSbzdLFuXRCtjHFJKch3Sqtfw5CVop2tmsdXBANhsJLpv5Y"
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
