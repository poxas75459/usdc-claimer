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
    "3pbqwmUhn7iSB2vdqTe2zfoehk6DWfAoZpWczKcBCspbT1HGqj5qrpM7jBoQHdvePi878Sa57qPwmm4bmfcgJ522"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FR4hcLo36ZQyjgDjV3DKFXkWbERWBgAc2EgUhShiAgNWczxhLYRqYMJuXiwc4HBvJRvHggrsvRYjCgpMmrhwV1M",
  "key1": "62k1nu3QScmWWkBJiCSjZV9amKu9dUptQS5Mwsqp36KMmgLnEfjm13DfLFkAnV5SKRCZ99FMbzWUPhMem3i7kd6e",
  "key2": "4BjHVYKoSgAaCBt4ihp9dHu5WNfDr8cuCzFsExumnrR5Vzf3Tte45VsEfsn5ginH86EHsvTFVqFhrMySFeVEQzpK",
  "key3": "5THXiSJyB8kUutzTa47J8a4jKWSvPjN73a8ypj9vPQydAmqFr8i3FABQJxNke6V39J4aMrewuApmhdYsGPnUguLn",
  "key4": "5bgDMCbYms3uzms6q5trqNpLFF62pNFhypqEv1e89qFCGaoUXNMr2BypbqosEfh16HaE6VQztnxABo4uHteA43ty",
  "key5": "2aBRQ5ZzhffBGqLyF9dDmd7SWwKGyRxwiq2ngBw92BXMFVGzMoBUrMp42dJ5WVgDG3EA9iayjgTU15mPQwATsBUC",
  "key6": "2WZvUFbDZEzJJZ8mdMa8cPiZLcftKxSp3Qgp9aTeLRrn9aWQZJGxoFf1zXC7Rwdmf1vmno6WcTGiSsmNrqpZWtD",
  "key7": "3Gz2AGi1PvRHSFsMCTuLFRoZ5eo8zxsVFGqGstbZzsYfzp3zwhjfi8tymjoLXvJ4d99GuAUkrbuEY3qokNWzj8Dp",
  "key8": "WPDjr2WXgaCM8vUXaVJMJFQhH8LYvAjfkPwE4gogi5Ev9AHfFAECJwgBFEGgwR7mak2wPJieC5tMrBUCuGwabAt",
  "key9": "3j8pwSZouKGbFoLmLao518jZmVFqhjXkZK3ED6LSLReX1pqs9mYvos3ZmqLuXPGx9d2KFVqA8Sg3hAkJTZJXcTHS",
  "key10": "3PRS4qozkZ1vQg6L3GEKVHmWhVhfS67gk6pJiJaVh4xKXkfY1npW7C29QCjX5ppoeMQePJZkW181WmRQW3Qh8YLx",
  "key11": "5RWUzPyv5aXRvHtoCb6kV1s6brW7UcREud7jo7UXXCxYWZMHinfjPHUWTaqNpFgBhShaGzxPBPrGD6M4TV6WFJ16",
  "key12": "33uouRbyD3oBJsANJ1TiknBu7kkJZPYoV3EW2JrAainKZZTYqy11QUA867LL9dt4L15doWarq4dWSQTqtSppcMX5",
  "key13": "61k4i9Wi9hKv3ZKTiAKeX4PFbWK3ib1T9Vs3PS8udz2xKLNXxnrEZXWHY8zNf7iG3rhvRJ1jc9WNXDFwR1i5kcmw",
  "key14": "T7JzTpPPygqHssQd51jGMJRNicXhZGer3srd8A8VzY16UmyU79Pqveat7HJTGvFJKAv6MP1WeRYxNnJQJkAdKGA",
  "key15": "4f6YmCAn9NPQtStj8tSHki9QUtsBLYFDH3F11BzKFMi38qu1PJhmdody6w6JEFyuzAjebjPbURzTdfYA9rvqgZQm",
  "key16": "4RcBepgTyGQaeRxWpg3BPLc4YJoWQEsCpn5TCjWxuwyrxUhV6Vv9ow4Xe1mEhvQKGTkA4Q5G5RWR9khGcjoZ3JeB",
  "key17": "hp9DMnxsXzEshaA5SfsaRpUdM4f2pHGJd8boMikDiXkD9xxcfHp8CCK24VmEn5khEPHo14jBb3FnbMpsCUKs1sF",
  "key18": "3GyLF5gP38Q4fo6GYjeoZXMn5a8EMpY7cBhvJQWcUXYYZrabb82A6fnVWByFKCQzWDsFmu5vAKFWNVZAvEYH4yQr",
  "key19": "2fyRAdF7CNdJauoLcFp9uqDshnhrWHCeAWHnJV2cffw1JaM5qkzUm6ZAQRdSfLTHiwbDN4QtJPCPR7vYPwLw5LSD",
  "key20": "EV5EYjqT2gh9BXTwko7PHSfwoQjDh3JQVp125CpEVgNSsrEYCmv1TqunggE11GgGjJ5D5M3CYhBjUW8gFvBGysW",
  "key21": "4Xa1yipkReX9nmj7HnfUdkK3AoazFE1Te9S9yyfWGiHqFPtnbc9GJUyoML1HeNiNdV18mLJFv42E6WsB7amq4U5n",
  "key22": "4XihmUSQ8TQkuJZEVqXaBkUgB5Xo9gzUKPZFx9w8CKwzNcPKmnX99qsfE2teNrwovZw3RxRsvpJb2yjtW7GjP8Jx",
  "key23": "2Krvr8hF2T9PnBNYrcrmZj1MpmfJUXpjAJ5gjjwZfVe4nYZq7p4wGPetDZ82o2xyL48SFWxSgWaaF6SpotqpDxzd",
  "key24": "57KhW2ge2MQY8xvHDS28DAou8WQJKhxRakmwWt3rd4n5yZJMYbUsGti8x6UVc9FQKdUyD2c5b9bVqKEiuqWPQrQi",
  "key25": "4JzCg7XmKYusQ9WABqsKQd1uaxU2276QkWjHbNrjbdpyYSBtasokGt3ghGYVfHDuSMct5E6AaGqayr6ymbGq53yx"
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
