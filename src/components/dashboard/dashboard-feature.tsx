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
    "4kJPjdBw3Ar5W9rJwi8Nzj39XLsHHKmH4HmcAe9ZFhVkVeirdVYUJyhxC2BrPjjs8Qyyh2wojE1b12yDg9Hngrzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J5qtyyc88UbZmqDijjWXdeVTwXUQRAY2gkDQL8dDqfThezYZfNLr9fduG2LXEZj61rNYE6ULvG9wSfxdNh1yC8w",
  "key1": "2LhVnXDZfSeSpAwNyc2eCi83kdL98g2wTGijVdPWZNQuRy87ctENaQej7GUYx63xgLz37xvZAkVzAEhZBwmSfaCT",
  "key2": "5GYau5ZQjrMDmE7oU83Uqxoea4adyLfbGmhY9EgDezuNFqj2Kw3ZHaM52H2M7tk4i1qsZT7RNa9wmKAKZUNFFaCd",
  "key3": "27EqzdqENu7KjoHngiCAJZEnSFvzoEPFafgCnYzU7eA9ALVTm19eUYGMykw9W1gA9mmLeUHFYvE4gJ7j44NbXZyf",
  "key4": "3RruBpkQrUerwq9d7PUBU28QrkFDcNAyVTiTSQ83fA8ws6WKuL42DpNX8itbzTRXfuBdmt8uDWJMQ5wPEL77PVns",
  "key5": "2rsGkJsKPJhYaErzRhXe7gFhN44h7pwQAwor8i8UgXbc1QfaHZfTbsVuxVqNZ1NdBtD8LGJvc8vNF1MFmU9x7cSz",
  "key6": "4qW44witJgR9miED8MrFaDJESofk17RpLJwA9fg9X5i8BYA71tCoDNEZpyuDsgwyX8e4jN4voDP2YBsGJz3mb7aU",
  "key7": "61ajbmjbrE4a1uuexKeXXuDesotMaoQ3LbtdzfxPSak6HwY3arakuBt9w8eJvq7yGmNsoyfRYfq1xgWJqSDrJASR",
  "key8": "4SAeNBYmbGvjV3DSa6wijN67ufs8TdQ43PbbubRqjEHu1nnLMNdfDzC4zsBgcnP8yMW1uikJzukWiahdNCDVnRoQ",
  "key9": "3pKcqfy759FZbBJK9xJ1Z2bdpxkYnQ3rj88RwnEejxSxHUrv2FGdv7XksEj8h5GKZS9vLWAhQMJxAoAosDGRarBL",
  "key10": "5Hv7EyjdKiXxhq3qw7EnGaib5V1z3TFwMePefK4cAVPYu9LoRLk7W5oAJu2J1et6bKFcASd4UGiUvAPXZDtD8Zap",
  "key11": "2AyMFg2xzTBRmGTMHYK1ZiTot9L4Zxd2ZvMH44JpZiSc449vQpFcSTcjmpt5EmJwQY2yskbuSWHTAu3GqaKF8ZXW",
  "key12": "J2RDq4tUbs5Hv1t35qNZDnjd2DphS9QVvL5mkAG6kZsYWT1Z38hSuzyMgw1wafp3rCcsryugYCkz7BdDFdQ7r5d",
  "key13": "46a97cgpsfTph7owpJqQht71Bo8BLMq9CVfUzWp33dzyWe2BDVvLJX4fUN9JBu8KXQLyvN32kXYz3or31QamjWBr",
  "key14": "2jnJQBGkkUgHKvg5q5XVoBihTphnVmEkMmvbWbKtoAugd5pUbjVPGm4rTzSYcU5Lui2iH4AeeB6feyqNzhxWWr7n",
  "key15": "5wnrH51DSkUQQTRkfRaD2QQFNigDF1SkDmkF55UaBszd4fK12vwhJcojt7biLzcCVdWK5YsvXcToyv5b6AQrP4TY",
  "key16": "2JaehmbG7DLLAX1AaE57AZZRmpQbMjhgKSLdUivUoihsiWM2NC4unrnDZ5hLt9ZocV72f3UMX6Qis9HknAQvKUeU",
  "key17": "4U97RS2sq8KpX4z6NTRGEo19G1Ssd35uiLduZ9DCHiBAjtKqHKPEKdEhLSZ8mXL5MWxhHxWhYb6BDBzXN2iLaJNh",
  "key18": "5XMidtL936biCE5QKUiUjWDpDeJ1JM5StjMCrHbJg9Pxu7g4NgMDe5A2qZaPojfb7K5aYcZ6CR1YCaedbSX97hRs",
  "key19": "3YAGrBWzcy3o9PeE1sUuqrZ2148kWEwyGB8eY4pYiwAhghP79KV92ZDoPY8KEDtTk3X3LbMDJF5CiThVNfuA9V4S",
  "key20": "5mbJnoAnEthnANHi5PNxembarn62t7B3DYqP3MBvUWUMJg5zisX6jHHeSvcBVqUPmJpA7ghzd6pRusj38kjjaELu",
  "key21": "3TWE8nzv1vZfjxqph264Vo9JJjbN25wFBhjgVMxXVRmavUG7q99tkAtQ3Bzvk7QsgxbnNEkSJg86WV7XJ7xEiJRo",
  "key22": "dT6tfbwyMVx4QGJn9SPwHTCA6NyNUsRybrmZgo3zCVyNmiCocWuqYVUyy8vH3hinvAtaH5pWr2KhqHLLZLGNCeo",
  "key23": "4aZ4bQAVd1t6NsM1SY9XC1eT5te7fRTrvS7UnLWYjxhetnnSYrPEzL42dXbs68CDqvEdsbhFuoqjvBNynwD7TK4G",
  "key24": "5vHJ1hUUUL72geoKe1x2xwpZUsusT5ghjPJdPCFt2TTr8rWCMGc1Yokzp1w581tU27HxgWJHXsxoHpsrrTeUSasr",
  "key25": "4L2RhN8MuM86uP9W28ZTwjEBiwfJ4dqxxJG4rfEcsxXfYCMpJSvwzrJZp1dmWSVm4dffwShFGqCShRZSJUKDFBtS",
  "key26": "2EqUgvei1rsm11HxPFDb3vEcAdYy9ekWa8ZGQYjjf9ZPkoRKb55Wdg4xonSG97BHCz4CD1LJu9zBXRBT9ZnwRaUe",
  "key27": "ghEn4FLgRv562LvbPZct8BFX4Hr7WKgfy2Jrz5vAh1jQmwMeav53u7ZzKZJbgHs6r2ju3He3a8SRnd6F91GkYwU",
  "key28": "4oemhF3mbeAUbck1bVVvMzhhFNUL9oGKwacqVfuibpegx6Ywzsgzvazcu2BCtPvLzikUyZvs6QRLaHRjXqQCr2TY",
  "key29": "2Pb4nknjQecbkuVC8sMexVM9pWSkoK3QFTp9zVQv41C5Zm4r1JesTyF4Umgu9wFRbse5JmayHRf41AmvvBL3hfwo",
  "key30": "4UjvibbxZrZUu5Hp5DYdgzooPB71rN3Up4o3WqHJsDw8VzDqgoUMDAQffsGnJauyXsNHC26U3mPjz4kvAjuUYeoX",
  "key31": "3z9QZruGafXEcT2Xr8rugjvaNH36uxc72Vh47z2Pw7YSZVDpznhzEurhkE7nxg9HUxf1Pyzp99FVLq9WfynqcN3J",
  "key32": "4CYog8ksfr2vBgZN9uHSuvR1d9MDGjB9QEG1FnTwUpUCoooffm9urqujarpLoTgrDgDKAqtYHS14ZfsB3onEHBXJ",
  "key33": "4P5hzPyUpF5KUKNgKz2zce9KaxqZBBJUG2oDN1XpPs7q89sgX33rhqtuhDEDy6XWSXc4LrJF61z4d2zN1JbpgJ7b",
  "key34": "4dVJiA7EH6XdsbbkFt6ipMy7c69xEAymRAFYKC4L2vKAkWoeKsZwqqJq9hYVcVH7YoLV4yBk25SSUK6BjZ4VJvgf"
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
