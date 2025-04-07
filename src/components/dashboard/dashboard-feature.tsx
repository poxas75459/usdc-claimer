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
    "47J5RRSsfD9pMP2KG5NBRFfAJnCRjevBaogmkj4uFWsHqD8JUEz4yHhYxhxQvcDDc7d16AsLSS4nzdpE7j8pAEq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35VYanRW7g6Nnyo9rH2tCPkYR6ojxxtXriqUyffVheSYAThJTxAsaq2pSXhQ5hkYsB7ANRxyjb8Fhoq1rUdLYSUu",
  "key1": "2EvHcW1KmZ1M46g8CoY2UcedTLMsGGFWUuSyUV15KXKxUP9BTrNAEv6baZYRPGKUN3x6x8GPPYaNCWxbaaAVEw1A",
  "key2": "2H16aiDQvBELbyow7K2bSv4F6gWem5yeTte22XvYCrKHofEXa6QbiZm4Y2LpwuZzcPd1vMzm9VNw65VTKHtEwSaP",
  "key3": "5UaSWgRgYnBJHnE5EdV9MrRKtJ8XbuVUMw4qoeQYcKJ4TAhirZjBbRubSJLdUeeUJs3xGxomwVuou4uhYW8ZVxMK",
  "key4": "2DDjRt6xno3DYGtmgeM82ex54Wvmia2nyxU89ANjDnsxX3rA7GJC5dxtFLKiXMS4BzPngPNPNeNdN5tpDtXfqSy6",
  "key5": "5ZAuFLDQmz1qt7txNUMV7hwZCztS7TXVrNh3sWnAVRQF2VbEj7zpqFVZmJY2nj5kHayVBa4fKZsfocD5vUooXNe",
  "key6": "6Yr6QYkMw6mpxQ3oWAzfwNwDHqGbHdYMm6Vaq3DcKBqMw3zkDUPmbvEEMEqiYK1E5SBkQb2GWPfH4qz7mDzuB4N",
  "key7": "AVDediykfifCwGwuBwAN9rdPPyMBi65WCgoo6QmwQZfk28CkobyWGsbT7VSBmKuynxh82TcSeooU8cqYzce1mmy",
  "key8": "3KFCGwJv9kG6bqfboQ7wUkKqoNQRoJi3EYjYAbxmhKPUDkuJQHVVotyaGkasECu8cAgWLDSQ8UJnaU8CXdUMBVZa",
  "key9": "yJdEjoYhrfR1qiYPvJ7DaWqr1SmY4CxTPyJ9veg1kmGzzXxR1wfsTrfZnJ9GyogcDzavsnmPZnHVbGvwha6hkCs",
  "key10": "4Qe97G7gm4axcgRgcfh4t8N3NPXWcFCF2izMcMk8ar2Pg3KtxQ4FSCRvGZMGGmcRgtFFXsit6ik3LgibRE4PDQcC",
  "key11": "55cUkcf9Txf7MmRuhXG6DtLVFkPyKbAENViW72nZDUABC4NyCgUYe3e4WFBmAX7o98uygW3Ajjdv7KrGHdTM5158",
  "key12": "2QezGPY7iuLBCwyAZcFo97CeJfqGTpjGW4o6svhtrNviuRoreeui1JwtQq8uYgkerNgg5JZgwCZJje5VDECTWEYg",
  "key13": "5MQ4RjtY9EbiJV2rcYjjSBkZ1QqUhyJwZ4qLQHsBaBDxEceUjT5dJpMuK25wbakiitaZFrH6kQUFpUik4zTyY2DE",
  "key14": "47QSyPR5UuNccUJgctuj2T2APRG1EicugGT955NSRZMkFRNToMGKkoNftjgy9W2JCibU8EsVetMwzN5tGho18zkC",
  "key15": "H9tmb7QtioY4VKmvDURzqH2gSnHhzeVHsmuQiF18BRvYxZiiUyRcaeYoA7baXy1bwz4fh4vRbU7vv33gXLxyiSU",
  "key16": "4gFaU3rGLoBPZkEtrd7u1Ntp22gCRS8ooMiJNdsn1M9VdAVrLwzChQ6VXkPGGjwxu6Fwi738EjzJGLfZNefBpqrd",
  "key17": "2RrBbzFZZvWDAg7iDvqo1VEif85TX8x8XEDjkJVixSwwv4fUR3ym7VWWHS99t9S5TghxVb4ydNVRKNu4C4mk2oco",
  "key18": "LmiKQxRTxzriLz6tMLScvxgqb5qxmcFwogEZqQKgcwPwmLYfbz6yUWsWbav7Ra3DpcfaAg5Ad6jYQDbsF6G55vJ",
  "key19": "35v6DcPd5nPuMa91bYwBGrBozSbrVH9pywduMSbBKU4JYQRQTc6NwPQZMVwvnndP3iCzuucJSHvT1dRbBz6d1U9t",
  "key20": "5riubqZ9oTEUWj9zQmMUnTF6hfERZCbSjajUSaQZmfgGJdkuGq17CuGxpeGoeaLdapzrgc5JD4Ef39K8wuUmycVa",
  "key21": "3Nh9vKP3ACJjac7pTWEpYgx6NAfKujxQXo8NwJLQMfYfP2iyXY2priPDesX2qYGKjogw6UjZV6PK1k8q77x8aXwf",
  "key22": "4msHMa5XnBxZGha7VQKbTPN9fzGCTNHUPpJr8deSkM4rrAuQbxPJLMw1T5A2JjxP3tzECWa7xWN5dKuoEcK3jHML",
  "key23": "2trGLqq94aeWk3N7Z8mb57L5TyoGikfd9MoefpkUsamqgwnWfAhNAR467VnjSJ3RFjBWvdXCddUydR69AF7vufVZ",
  "key24": "3hEaKKkym5N6wtpU7RZ93L8VtEWMAXoeUQbL5HHr237fnEnZ7SL7Vy8YwFcBEFJBQpLCXxc77EwHx7mMifh66CA5",
  "key25": "2U4Z4TspNf9bm6DT6H4ATQpbfKbbK3nBqScZfP8FdDc59mNw2zX59aDB4CbfjYF9TJ3C218Shj3kFJ7gmF2sztuC"
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
