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
    "553GbGQ6bP5ZLf5uc6HawDm6VmuHi9tvaKaGFrpBXYhMWHoT3VFYKfR4Xkuu8jcHrBLLfCVL6KEV9uhC4h7GHuH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R4pP18ZkfKM1ouWJxHH13kiXCLXkjW3qBrALYBjhDQqor2uYzt9z8o4yg6QJEoLGAZLr6waQXYx1zfMprqyEnDd",
  "key1": "SMLhypJt74xTrq5HegtatdqSfU6eGNgK58DENFwzmJkcZRJoYjAJzqQz7KaMUhgS1LTAGt5qZLtJrbe7vNg2eDf",
  "key2": "Jdbg58Q74Dx8dt3UhDScvUZn4HcesathZckfao4WFK9h5DhUsTwW3yKSmnCBn2zASXkBQHcPg4qpEiZwTryVEAv",
  "key3": "5xKwwd1ScWD1hGUakcH12YeC1iL4LJhAWEYDZp519amVwEXMZnsJiHfWgom2SqdRShTwyiQiR3fQSUFupXADhyRe",
  "key4": "2SnEn8yMhZjRQaTeYNzgj3jmD2fMFREmX3aJZVPf1dckhsaLQbwSJGCeB91VfQ1hVhH28no8CJdNQJa6Hb78nc7q",
  "key5": "47Nr7SmNfpQHSoRKQbJ68mcriq4wP5CuDpqh1oGpJwFWBH9HNH116uxwJuK1U3tHo7Lo4dJMMwWbY4xHMq51EFET",
  "key6": "4k2yUJhTvryyHoMXqDGmtR7yKxdYc2iVfXa2HonozetF6PMsUv8QpD5ptwQjy322MWnSoe7HMqyVx7ADaxndvLnC",
  "key7": "JYPo3rDv7kXWXKj2nMLznq8LQ5vqUwC3dBZqPH6q37D2CimbnSnAi9r4RcaUUc8rjg5Xx5FDkwJEgGSi7gXGezL",
  "key8": "62FLsRj8tp9KDYELYaqgt4NWZP6nMTR5hD2J9GpWjjgsxJk4yuk2QyymBaebTJWaV27NQNkWbnaKcUjc17a22gXJ",
  "key9": "4H4m2UguCYh57MDkfv3p7vfhANb62don3Px7VwcUreEJLcjAzArsDoV5xnrBSridcPHcv3tL1uVVnkX8THdNdTP6",
  "key10": "2N5Xiz1Mic3Xfw9FsWt8xZfnoEFoGH57UYd1Pe4yRc3EvS8GDCv615jtrYhrwXaVKADkpUgcpvk2HZQFToYc2DNL",
  "key11": "SnUHiPQoR6ErJ389Q55MP3rDH9JZpkjRDunh1wWDmhXZ2r4zXwKgxsz7xtCPaZJcVbALdNw9fqqci1tz96LxvVR",
  "key12": "3KXptMWXNSAsRus6P58vpPmtv4zkVMfLbSy9s36SBioHXSaY2VRoHYaiaguX2J9V9tGCctD5Eb9z6aNYokwyAHSn",
  "key13": "o4QXnav2rFDfk7yQWVqQJq8srWzN9deQnZ3pzugre6QGpF61P5MTNnLnF8QdpLpxgtmh1WL6sQAcgqiuixhmeDv",
  "key14": "5ichetzdPVqaSadKQeXt4gJgtRdSjgSohrts8Cbi3cU3TrbtNKxunFUo6nLtQBrvojSnBZ721t2BM6zcHQgCD4p7",
  "key15": "2PXSodcAgjwLFJU7BXkNkcaB7WBJqFWGQjuBYSPaf2fGE8zcU4AVuQj79USynFCdb7NW5iw8p1WhrGAkRnNcmjYp",
  "key16": "2oWVQigmgwzKm71JLC7NG1fqPS55nS6r7VSLzdTCkoKW9WqhbVqTvXJFEbYV1GPdd4Ed1g1TdZpw5bqTBuEjx25k",
  "key17": "5TqaCCaZU4k5MYZb8DjdvtEcxRj2sURg3garomAZBA5zPGkCojis74ZYo3wcdvPGDeQD3CP6Lar6dr2V6sqhh1kp",
  "key18": "Q55w3Le4WfXPghrvoMRhUUNqen2EEtsD5mhxe4LXrzCnUmmgyz4PSChJbfu5e3ajbpfyuwaSUa5M4r1Q2bmbs4d",
  "key19": "33HwV3kLNJhHTtcmxJ2nEuqbRWqSFbmhwTgiPTqFfhUXmpC3cvtBfVLK5Ca9iTgCTzS6wTZAiFZ2q2XriAsPkE9P",
  "key20": "2xHE558y9JXR5iaPHiU4ZpbVaosTeBodgkRrHGcFdD2bgBBpjjVhT9P5UHubuXTHndjtxZC2qjXtPWgLR7ZvUV7V",
  "key21": "2sFpchdkbWMKsRStTSQsKS3CtgsyTdGqPiwizrorn6aXs6vguPURuJHs8jxyFLiLRfPvhDoLm9JE4Sq5fka2vKph",
  "key22": "4dEdDxNaoUGpKbCfrpfE8wagqLKPninsZY7mS3ANnbXx31Rb2kzeZXQHuFPuguGvJSpC2B1Vz6eDezuNSmMGvvhT",
  "key23": "2xSHgn3znzSi8efNEdJ3SSvopaBm3gN8mCVrVpEf6mdMnHk7sJgTG6KAFk9Lxq9pbvQerzQr9eMD9rvrsnmHfnhC",
  "key24": "3EtaVMzt2BMweAuwbzTYe7Q9mdsBDdG2RYJ6zfY1Rc1meBuEFBLexZ3v62AsMQnPHu38sa8Gxcbi5tATRRkwAraD",
  "key25": "5opAVyhKALxHBudn2jJi8fnXdxqkyLLo8n3ZZ72iFGN4JkWQ5iL5ko6cCziW54Bw6CxjyMHV1N9UXojykEVRZu3F",
  "key26": "3QZWbnVX8NSPMwxkyEiU48ygJcK9Kcpt4ep1G3iswjvNydojyGTu6BENCBUEKYoY5ySDirQeBgy6yZagh8QQUUSG",
  "key27": "2BDWiLvNXi4csY8cWc7JNDGuXj3SDhuVQUWtxRaYToCtGWP3GUvoGikm4P85yzMXr34DJjjDsAuaGXdbLo6CLfu7",
  "key28": "3gg5zEtGE52dpsqzQLAMzdFo4SqRdwqJobbMgKCJ7zAwvsP7Qs7Efn9N22BvaNpX4pvXbhzPcmfMMq8EmLJGVmnr",
  "key29": "pM8r9Minho3QogVQVeWPwBCuYnFRe9VZPED59nWTJAmAktBKuxWvdeYb3jFB1uNAnpoMP6KTR2dUT8XRq2vuTCb",
  "key30": "2eiqZmBssGTCFh8XnMSHHTmZNtJj5HCChQJ5mRfd9iURsykyzftiY2nwA5jmqgZirRbJDuArHrj5MD5BUoQFwW9j",
  "key31": "36Pi3b1cFZGVcjcLDffemrWguMEfUhefPMvKqMYVPy7aNWrf82ixzpFCSNEWbPWQqxtGiPQHytAxdM2kCuk4YEYH",
  "key32": "3WDeL3xNoK4vN62KxdYUkBQ5z2Udj3w1Cx5AAb7gLrUt5pAWYHE8r8PUuyWLDQH9bJFQ4MZr8XYh47yur6ucoDxx",
  "key33": "58GeoaDDUnQ5oKo95ANAxZiDQNHa9bjjmRyTFdhwJtG3HWqJMTvnkTCV1X6xt3PDgLa6MWxPQBWcyyuP84vP55GD",
  "key34": "3ymD9tHyUQnFs26VoYygQDsp6bVeGgEeCCJyGzCacGwgqa6SKoEjDkAtFc5nPJQ5N22bzALDWxtK93EuMQMBiPhm"
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
