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
    "3PRXScb14XNvtTs5FtKZWJCY7xqo3eogFkPuQFK1jprB2Ax46zkhVwLywAzzDzS38crmeNnDKbo7BTGowPrszfPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmWNMn6XcSzJRskGsjHQT4B2DyMZ5ZWi1XpfsChzzo8LJinwYoMN5GPqnsuNBp2iWotdLBiPMNHs2AkpLf6ZMhA",
  "key1": "qEJS9Sddpc58veGe1XiM67VaZWgQKQ6J7zn1ERnRjXdJ4KhRc6ffZcK64vBxzfqy37aVvBuz242aN6UTw2cT7sR",
  "key2": "45q9iM4n8coEJcYB6nTFZ1csRoe5cSCaKyVTdFaELmeTstwxTdSMyg6KfhNNDBy3PmCPmFhLMRB18Kbg5tjzcSpT",
  "key3": "idRJ75paFtkGX12rmHMcNsRyWVZ2XY6Hk1K4k84p49Kresd7kRiD2H1aWvNNyAomie9M1q12XXCxNCHXvnxckmc",
  "key4": "36Dk34BJk4vGRbAqxyHi3vXCPcnPbMEHGyR9ySaZZC75zfw4Fujxu4vTzRLZL9CYKcEdngXVeDFcmC8Wy1BsmYLE",
  "key5": "38EqMUPCg4njTqJnko8hAd4GW7ZUfGemWJ8G7wcYDs9uaxatkbmiRQ9r3CGn9eeGhUpF1MfzebnLwqA7xctfeA8c",
  "key6": "LA68AFiMawDjFdjfNtK2EB64LGXoTNw9GFykkv4TM9mbz1mC9yEtBF1oMVg8AxsTNFeotx7J52UkN7hS3RLu3Nt",
  "key7": "2GACXBcWk24rZ7GTQtNgjmuQL1SAWwDGzV7bvxUNPwEvdptkUGKYXi3Ka9Rc1TNs8A3gzH7otVL1QhSZ4DU8SFwC",
  "key8": "493ZnKBNmuEqhFtQinsUXizx5vmzzB5N4JCqrGbbCu9gGdTwPrKDU6HfQYB2eUm9RgnnGrNTdfLuCwkmZwCg49wJ",
  "key9": "2AiPFsdMUfCwSjFoo4g3GFhYnM8Yb1sgehKyd6AaokfnVYu9mGmb4FhCn8yDoUVtwxeaPiYCMgpRiZbdUFD9Ffze",
  "key10": "282RNEQ6mgUVvcWAKLCNtFFaYaWMuFRwJqGuTQKRaz6NRcW8jLdbPutsgA1HJzv8tSyKuwJa8rCfVEB2ZY4Gjysd",
  "key11": "4BwKBCwCALQERjVKFntKxtVfLye88orRW6qAr3t3GSabonGz9b44CKj852KbZ3PXQjYuVpZirW19KReHM5kBvJ4R",
  "key12": "3vnNq4Wfdx7ef7jJ2JCToHaQBdqQGavjZD6RdWFPxHGREy6nN4v2V92ueZGbUeTpef4ngvMwXqSJQoSvPQKb9m2u",
  "key13": "3gggVaXfVAZPLdevph6sraDHbAB9XGNV4mUBty47FYegrabcWL8NjjTva1TpG8sV5ZE1sp1JkH3PFn7Him5tsPMU",
  "key14": "4sHyfoSrpQbdqmyitjqXD6vsHq53SB8ck1G3eq9LqwDfYmYAuSzwVhdQKqpVck4pdMvQU3HcquSjA2E4w1418Qh5",
  "key15": "QyR6bvq6tmVYXnzNzAgQKrBJmUtFMzX5ndwyV34hSPAsMyB6rWRgxxiziS1xAtdr3TiuW9kUA3Bq3STWQdVUNso",
  "key16": "jWBPSCzMskqDuhFpjepnEqRoinGQBJoxCZDhYEamrwhYcHFZJx6J24RsYtYNemoHo7jwPL4sjd4pGNWtgSZR5qY",
  "key17": "2AeCN8URwYsYD8gVA5vZXQKvQ8kmwh5eTvQWfajvNG963XPWBkD8Ru2GgZ2GWr5kFvfsVrSWD5hBohPWqfQZKUV4",
  "key18": "4C6Jh6tFr35RzdLEKniRMxeSFsbGwVSY3Dg6tiTq5boCo7odRsGzRn1AyiyyNp5hcBMAC312EZ4LffTTfZ7Q6S3R",
  "key19": "uJ86zrXJrrNgxwLY5X4gcDMDdsmaaLqJYg1j9bF4WEnsX4BJv5se3CTr2L1oeZStBBXsqpZvWZZCs3GizfFGFbR",
  "key20": "WHgx379fwdWettwZUMwZa3LmndNSZ3qtaKcejd5H7bL2BbW8HcdKXxNpHgNcyLRHcRUH2qa1TZJTgCjthKyBGFx",
  "key21": "4q79XAK9o2AhXmKcNmHb3DncXnaFPBT86G5RHtxFLGr8U5EfDAq7SVG8WPCmu3Ljjmo1LLYag7bYGqYe6ShtBbPn",
  "key22": "61Lnq3yMe6bjHdo91j7Nc8XDmKJQFEraLsmFBVS6UvJwK8bN7hyFyxiVmJpjyW84mc9jc92MH9K25D6W6ZUYyvFo",
  "key23": "4rZLH4RBykMzAExur3qegZSfFpVmCNpLdXcLdT1RgzJZapVe3sqDSn9ULSdM2G7ur4xHs5exYXpy3Rx8H77a9StG",
  "key24": "5e7z4fYgroGd5LMz9tFUdaqYcfyg3sFkvEQVi1wpnBXXFV4DKwJFg24BPXEufCG7VWPvXp7ryLWXXpZvFifw8SbD",
  "key25": "4915EqF5pPkYbopJY1aq2wJ5BZhZZ82oqVyka4TcBHHLNcm961dGtmWQjQApX1K1vBuCpiNyzf3USuuRpzBoXhgF",
  "key26": "4LK3vJUX9P9hnFpbF5BQJ7gwqJ5dQTt9eYy46tz52QwwbEJWjx3HXKo3KH49byJyE34VMuP7GUJB6Qc2LKDMTqq8",
  "key27": "b3wpnc7HKPUF1A7F91oiyLyrKck9yRuvdgs2RzAhMELqsDwH2Fb1bZL1HLuEszP39vJwB7nk9CggKsQQkYJiZvC",
  "key28": "5dMrmqfF3xXY3XUM2yP41rjR3bd6k4VvSoqZq6VRcMiFDJN5fmnv6nDQtWyq6tF3RnC73qC8JU13LfWWtjuBCDJQ"
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
