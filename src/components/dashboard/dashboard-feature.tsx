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
    "5Reyhwf8idBisBuczB6o7LUFGLVueZMCwRXLV2tUxPp4uCvPFExRwPE782WDgbNgfeZcfPt4SXBFxwM7HBDJe8W3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LMjFDTd3SS1mmkwWHxup365a2p6o5zSaDMjBWU6UwvmvvcUjawapxTuXC2Vk5EdJ1SmvgiPpKF6QTsoFZC2bjic",
  "key1": "2SrgkYcJW7yNRwJJpCeJHhtHfr2RLp5KLobtaAKMzW3m3ozzrCWNXxwQyT9JsAAhtk5kYWzxVsjdQm27WuXtydNY",
  "key2": "4r211TZPRiKtpTqrteYoq7JCNALNFUPzAroT4gvjkbQEKKXihKiENHnecBdUpzR7hBiH2Bs9hK2HFWwCMi5LmG6t",
  "key3": "2z5BoBHZwp2sgendy9Cd4uytSAkxzb32XFAmXx5MhwWsVzvyDoDQSGgunBTkZr36Emj9NYzT3P9Er3UhwWGHyCEV",
  "key4": "5onABR1795cBgJ3MVZ47jmfawZ2fVFRLdxf6d2EUUez93oDqnhqt2reY4jfhdxXy1f2xbM3WRjHgEgzHDbXkDWEf",
  "key5": "4KEdjAgP4nTTL8CpL5UxXZeifPmHoocMnAhn7xdyCHg2YVPJvbGV7pYzvnLUBxujaZ2GwABFGwJ2TV5y83RqN77r",
  "key6": "26DRbAUsnLkojn8kBadg9M8kSbzLD5Q1Yx9BXChp5dPZpKMMYUoBVLPtDGoAHFXb89AsxTNXCMHrYkaTVA8evEPR",
  "key7": "66eGh1Nq9EenxncLaJZdbpTtWYm1WLoob7sz3QqjfGYufXC8mHYZ8gkfetMkejbYWRXPqcQfucv1rmWT6aLw513d",
  "key8": "GNsKUFLaTgq8pZ2NQJmW2t6viqN2NL8qRqiBGAGD6jHKFgrTmnbeY65ZDMTfB5AsWwzUbeArMDL5DLWkHsHQhZU",
  "key9": "2wboNAShvWQbg3TVsRKmZx5cQnDqhVPUoLBW5gqEVxrdP44qcf8rdT7QCgxqyRV4f93buWHELXwJomAmyKem1qgz",
  "key10": "2DHrMkqrV42YSojyYJvyJDNM6tGYSLb2unqJSsGMY7QKBBAJ3f5A49Mvv37NACLSAVhUfMzdyNy6gXNy9M1SKBDq",
  "key11": "qLxHZdAqzGQqmrCd8ztnDjuDpKyKPZXPLYbN1gvEGP8J2uyRB4wEnBn9E45oEyJouxrJyCsDS5nmWUXukgN9T1A",
  "key12": "56YAdbqNXY3Sqeq2PYbmgr7oU5ZX3iHcopmuAwZcbi6cfjbgQ8ZKh18a5Ri9KK3LH9wQZJTzEMJ4aX2tyXa3KzZg",
  "key13": "4NBvRyHiGa3Dz7VYhBLqrao8iAFzZembsuQzjRqxWJAhieotcxPXabLqp2LtcJLGh6whY7friDG1XJ4tMXiSzUgP",
  "key14": "n97pk4K47nystAbzBdLLac5zkUVCjNbDWyB9jMNGtL4bEbCN4W15MvutUtqNdRSnVLtYA9y7KiQUx7M4h8Mv4kY",
  "key15": "261rkvqqXd1Vss47wxdB32hJaSujXUFvq6dxD6drozjHXDgE9nLkeiKUrSxeXY4HWNszsDzdpFtLY5PRrKee8aQk",
  "key16": "4zwvL5ZA2snRPkRPKsMBvtXCML7VKh6YSPM8TPKkC478Z1mrtJzhhn776h6cP8z4My5rAQTQAH4mU2wSicvCKBfJ",
  "key17": "NLK3x3o3wXJKUb2DZ9tdkkrx3h1HbpMi9eqWTUbgAnghXo5omvMeq3uQQUJmGkKyan6wzrfFyGbrcGW8r1PFYkP",
  "key18": "4zZo9yNZPR2sf2fNnr2dhuPyo4hM3P1Mkvt1rZGPqjFX2zu4k6Po16cBAXtrJB7X9Z7d4Znev4xFDCkoJf17ZuoC",
  "key19": "55AK6KgzJLxhBD4Ww3hXPTwUGVcC3WbBnM3WxbLLY4zBrzVfLP1FHMsYBZm6BParPLLP5o8BCuHs7Ps9Zcdat2Cq",
  "key20": "2GW33yioZrsGxtXDMYuWKseGpL6mBxg3LEq2HGKJGUdtch8mMchyGBdSE92bM9vr6Y9FT4tRTQ4zCw7dbq2Ma1a2",
  "key21": "5EU2UQVfPWNatibExVoTJzJbh7eM2xFwxZw8pPnabvZmRA2pZzDzQsDTFYa3uw7we9daqWRfKtMA3ccRFrFnZgiT",
  "key22": "2r75znmD7fvz4Qc74ZnF2fxChnxG3QckJ4KkDp6EphNmmYt6w9GhA1FH8vMcYkaEExUK7woFsR1kVQEJawZK6eG9",
  "key23": "46HytV3y646xffd3ZWH25PehjYZ3ragUeBGeEaGe5KcTdP1At4LuzbzNyvnoSUaVdwrHq8uJsHTTd1qjVnpHJwBe",
  "key24": "4iBS1svCerkAZ1pt6z8De5zTdKqWqmWvBhx15it7zSDFz7T7yExXiekqEtZ5PXLsdc8Msr79Kep8AYcEcWqA3TLf",
  "key25": "5cMJZN9NG8gtm3eUi8boQgUa5NXJhyGFKPWs6oECzoYnqDRcDzwcG4pwWUCsN38De76mFiiTc9qiAsBGRy8yucwa",
  "key26": "3trBxEkpLCcmzSLQcxEi6XAEKZCy9MkxJKRcdMv3MiTDgGMKYbvpRk7V4fjtozF4Msr4zYCWLpdtwHigVxG7qeFa",
  "key27": "4oMqjg28Ny7qayXcbf2pfQ7pHd12s2jm8JFaxAdm8oZd8pspS1hZY37EZg3ZCne7yd8b3gn2QQDJSCf6AacDKxDs"
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
