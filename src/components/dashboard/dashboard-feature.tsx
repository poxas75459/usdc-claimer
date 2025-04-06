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
    "5WoEYVrMytCKbo8wgk832pL44hm6Ld1BJDMKVkg9ZzsYQoRN2iZcAKv24gzhwZauqXPpbft2VNEfXcgFqyGB5rUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tP82fdjrB5VQWcNtrEs2FvEwRiisEqYLQb7uxBw4D3JH99FHMwa9B8h36ZhpdnuXArRpLVWRsRinv6G3nu7454",
  "key1": "2LXUtx58g9FcUeCKMdsuvKe5KyJZphm1iPKFvJhPEFgQNkcpFCrrYVx6end2pqjupETm7YZJj3C3EkCeKDoy5jxm",
  "key2": "4TWgw2M9YAM8oSuSrCGhGbTR2t2cLpaqzeHuFa3PiPcuGFMPQdv2ZUGSEMnZ5RWv33hgmobXLRVQouBrR1aoTJrs",
  "key3": "3q1uqzkT4qv7PrcnRR93Rkw3KHvpbdCpfEw9N3rCNcbYbqT7hLKWY37R5kbLbbaxQ2uqJM9WKXL7SmewZmBZHWA3",
  "key4": "5hZ6Qk42JYugw9MBQkK82inWMvfrhfuwnEn6mZyoUYsdyZbbGxh6U3gKq8LRHBv4arpxpKQJjwEfnYUaQXtezjMK",
  "key5": "5A2JernPj5LiDyxtFN6WNy8Zn9bcJ5h8FUJ2rx2tGouYMiQMs4njKumGVag9qhxF6HvmXbLwaYAFTTwtwknpkrEa",
  "key6": "2jrFjaokRxijKEsMFnagEd4DzdGqMU3TcevhwFf4MjuibrrPLtPbm5wda1YskNdrqhEMJhpkpasywkL1fTF3cMDQ",
  "key7": "5he7by7aYYqXbpgFN6TS8dafdKcbiUMqjuVTRnwSafE1xvuHtSo8VMBBDKSCKK3FvWSPzSXSQZFBo6eu7zi6fxmf",
  "key8": "5eV6p9eLtCyCSSgyaTQi9Det6fwD7tSEn5A4adfXXK35tQHJaGapCGNRi3RvjjybQvj7ePXskb6ZEjv88wLGk2C4",
  "key9": "2tDY23d6enVsteJGWh8MdbBnbDLoZsnKw4u77FvhHjPFxuNurXaDxy6M9uZvQxLJtgcNcy1akvmeCvYcXyHK3ZVv",
  "key10": "49ewo5wysUcsU4c3YPmCg4eJVgDr7M36TeD6mhGFeQ59wRamPTzsScjKGmALAnKgtovjRRazKoQ9zDmb27XnBujF",
  "key11": "2xgbgrMdJcURVNYHvcmtQmN6rvSP8EivtYAqGyrwMbSZuY6Y3RGfN2UuUpVPk5WpR8EWXg9CTvAEd9oEayBaFRfk",
  "key12": "4mwETvNFqdAsYGB3WM76VzWFAbWLqtkdH3YYNgArW3LLHTkbsZU6XnDHvPggrHvw5kj6CNquUVvhbqNkqGfJHWig",
  "key13": "4w9rVmktZ7LeYtPSnqCMWyf8cYFrJ4BvJQxRkFzqjiHdKgsn1zjFmYSGT3xf1YjFbjpcKnfNimBr7sLoah2QUagM",
  "key14": "67YFzmAUSamXKwRsPpKV8b8qrtafPddGtzLmmqZQLLaBmcLSUW5NSCRadCivncRw8MT1qSodY7GLyLWpUY3c1bsh",
  "key15": "5iEMSBMNtpqRDb9tzeCJAJsxcYiV7ktmzJbS4u95xaDe5M15gphAj16VsqbAmTLGq2ZahTVnxr25SjSP7yPL3Qk",
  "key16": "v9fcV3QNhY7Fjn269FzT94Y3nNcpYeupCrtjr9K6htdSFj4UWsuAxPTTT4b6r4PQbsV6sJUX7MshxqVBmiLQiJV",
  "key17": "2UaZDqCoJtmNp9LVUQSwH8SNQRHTGSVhmpf761EThrDZ2jH3ARkLZrFdFj1LCBmCG35C6ADwMofMyvPb5e74krH4",
  "key18": "4ZqCHpRsoRMwpUtbTZ9ufY2wnZYuEE4ZfL121Yw8SSgtyH1zNbb1QXzC6eu4FUpohBkcj6XxLSuqPirdd7aMKBun",
  "key19": "4texUvoT7P8bBs6NXUWMfHpPJrRntggRoGASLehEZTurtj1HmefYpsaKYr1WcZmkY62Dk9Kg6PHEYcWYfnS9UVEv",
  "key20": "5rRqxAUkBobuseB8YGxeU1oTcZJMyvt4UHnDoMMqgczYeejpPM7Rnph36JjC9nnXG2kqJecKCAAuCVdAwBnUyAHQ",
  "key21": "617TVEuzWDtPx1oaQzMS2TTqxGewc9TKjhKEHp3cEvnMWzhr9sJvt8ce2qh8xGnVTpZowcsUQdABEG4rq7z7EzcD",
  "key22": "4bRPW22Lqd75ykSwnbCcq4CsxAbAt1QPgjPuRNw8YmgWZuesTuELNRr5vAMnSuEtgRYTWgBW7qy857pDg9hE6y6M",
  "key23": "2eU5QzqQwQ3XQjv6reH7X1iYuUanrn7xoVqE7yG1NJWYw57X1qRPBoa91H7sSG2t4wM9uRJtMW6fRp6GidQbjABk",
  "key24": "5HccQc5mPAAtZaHse1GtWoi4agBb7AqmshRZxKF5vEoG8gFqBALk2d2bmkZu1fHWsWEaNkdYubxApEctNnpvxY5D",
  "key25": "3yuzAVZ7hcRU7dtEYwwhfJCtYRQPwqmvxaTNVmNfJQTntb7Z7en9c17MCBU2S4HrRQnRnRAe8trjdtwfvuowvyoi",
  "key26": "4kwiZL3jxWfAp4siKUsovhgx1LgiPKL5TuLPzyu5RXhPExzzP6VZ2iJaUp9VrSRimphfYaKBTWydpAUgJKUzr4s",
  "key27": "2f23vV7cvejECY7ftiiQSD7BCwMAnwhkQSGP8QAg5dY1xBvDMF8yksBuCBSmQAEFkyTwsmJJ9bJkxeCpcLXsEFfc",
  "key28": "3MyFd6aK1WRZbEqNcqnhcdqN2gtk5wuDff9MQc9oaLMnBP4nU4pcDthtUPQW25EBc9SumFcf8riCz4rq4T1NF4fs",
  "key29": "tSjPppNHdJPnqBKJygxYGzJAthVJ946NMZvDcWj53J4ERnEUyYRQFbK4sk5KwHXomCQAAH1z6GbRqrZbEMXVQvg",
  "key30": "5LjLpdG7og83dEq4MAyds4njVRndQoD4oApHwLsVfYdwfcBGz656YHaPgudaipYWa3kqnYPTWRJCAd5QciraqPbJ"
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
