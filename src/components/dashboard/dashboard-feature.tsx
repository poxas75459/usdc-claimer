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
    "4iN9v46kUGcpNXeo8fbgWtkYobJeE3voebD2yTCBYNVFevEnb8ni2ycXDCpZuvTspFkYEgJRpYGoUNLyaGGVpAF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fejsrAy4B99M2zCN4VGzucxR3BYZGZi6f1bviUvcf8azc34eKWoTRB4qVcZFBrUWvWSj6xa26o8ggxzBHXXZns8",
  "key1": "2HBeZt2soMTTRWFjUpD3iei4XMG8WzvPqh8q231JpgCrwBiK2pfNcN9Ym7C2VjHkdqs12WdVYGyDtkLxc41YpWft",
  "key2": "3F9x387Dr244op4LqgmJW61UTcDGkzv5XRRZDHbfwzdD5pux9ZoWd97mAYN3ZZQ3x9MRo2PFCq74zAkdALKLLBpD",
  "key3": "2MP9WNWPyy9DrZwvSLJePrr3X69s161Wb7KH9oChd8p3hezNRM46orcuwjqxgr6xFoG59pHgUd4ekBHfKgwJb5B4",
  "key4": "3j6pw9Nd88fcLFgeAapoaFgjTPvK1sNRpLAB2LrpHE3m4WTWYo2PLn8LKJKMRYto1shjQ36sTV2LpeFsh9j5MvP7",
  "key5": "4wUYByxzUFbBH3oCWFqJBjEJYbfDSS1fSM9dPuzxd8td3BiRrogmqomNqgtBmRf7pN1yA6cggMTb2ybkFwVgbrJU",
  "key6": "29ahaguQpkaWTUdCXAdSb5kEmQq8GdMD3vNpjxUiByESFZ4N2acAqz1yxx9LpwshMvCBDUGd8VMNdfAaJ1Fv8yb3",
  "key7": "HrgVfN5G5qKquTLhbnsWfLJaCskQbi1hsGScHm21dy3asuJNniGZ7PY6VfurbWgcq1oLWFwMCiHK1SSDcL7MByw",
  "key8": "4dngnj3qr3AeoeMB1rrjnhEV5rAM3Q8v1dV3BgNGfCcE7wcmYSnwDUWKFT4KhRKMHXfMtwkShCVBid3k6NyaJ8GA",
  "key9": "SjxwLTeMSFRWW3kAzWt51J3iaVWdwu4UmL9PohQ8Rey9hQYTs4Az6dboanDYemFuW3B4x1ztw7pz9dQ4j79SsMD",
  "key10": "2xKFkAHLkF78bta5NSV22BVXzCL2cWGg8m6EnAjWCPsEx4UVxGhjVkfYJjMnH6RF53Ns7yyrZmmU7U3LRC1uFW8Q",
  "key11": "63i3f27QFWBafNyHM4wCbMrF6sNaPKb8uFfQWFqx9g8y3T1MZPztnzchiqvBmHoov3BDFvndczr3LV7agy36Q5NB",
  "key12": "671EEeHjTNfHefie4Tn6kh4JCvG2THFaCtD8a94HBrHL3Gx1HS33cQsAhmAs5p7N5Zaztz2t1fWNFZVQyCkS6HPX",
  "key13": "3sVaaNhsrorJw78GQWmRmAmYjjn4hmV6gkXuLxBZZYjfNJ8aYsBQbah5ivVA11aCEHNfwVt2ovYvYMDmKhUQptU",
  "key14": "3rAnZvnNLt4yS9v1irG7g2BYmZBMQ7akTppZRPKgh7VEduaQMcGeQKk75LCjtb3nxwW2Ry7VjScEYp5K1tvUd3Hc",
  "key15": "5qDxCt3evEj8tZdtSRbW1FhRFBExKFDsGcU1gDYkqK1VZFvT91jAr1ZhveUAh5vPmSzsYpDed2kMnsojqCGA85Mv",
  "key16": "T5fBayixKGiUw3n5xFqUqDgFLqeVcSEkMaAMxbfABNuENPdYsvMoB5gryw5xeryE74BYdrrs7RjxiZFYuBZEtme",
  "key17": "4r882BMSgjAd1ioJxq6BN12kCjwNSv8Qxj3ZYLwuawRKehVM18drabAMUMfftGTgCRi7jeiUCB4jqDXFhU9RUwBc",
  "key18": "3iddNSBcxsMSLdMEk9UYTGPn7nMbAJ3wYStEdMNirHWtigjUAx7MTadqV81kfTKnLDm5tCXu113b7Fby1NGKv4rq",
  "key19": "uX7MGKEXqDVqadTueKeHvCnuNUYDzuW1UJN5tzLHdf1Y1rL5E3XpkTvKmdeCiuJPFhi7AcrmsRuwUJ81wckegJD",
  "key20": "2qKy1tHjaEUZEgJknnLGzSH49Fp8KLCzrDMqBnRRSunSvKNVdQ344cvCgKuGsaCWLrbCAQ6sf9ySoxcu53zVo6rN",
  "key21": "3JAPm4joVgZvjHpqE1R58tY2Z3q5kMKeDYi1oQxzwCBRWuh9edQS2NUKqCYXQr2BNqjS36EmS6p7E8qQuQPBf8B4",
  "key22": "yzs8RWwyaMi6VHq1vk6pmf6374rdG8Dq4Ghx6RyATYVjASsq4ZzPqGrKUHrHbWXcWiZk1H3AN3aMHMTUUr9UALb",
  "key23": "52uzAaF5cohs1B9Q88kDQ8PVrmuji85U4z5JJKmDcsUEfzcNn4y5QqPgS55DZPT5MdZ4tZ1MDrKDUNBjrJBjK2Kk",
  "key24": "28b6GpuJW1ijjZkfgPXuzH4zzWTrXUuLNRFhPHCNKLVdQsKpm5919BUus3F3ipm2bUng6jvzJNm92A9bcE74ENMk",
  "key25": "5yeimkBNTJZsQ8PPVPjKbrxCFktMWcZ1GQBsmwY8arMiV6mtQtPpxnkMZjB2pdmhg1nmVfHzpfn8wPLU6skVK8pd",
  "key26": "56GWNjdgsjkuPy6x3agzfVGyFPiUuaG3T8i4WGp1eFQ2R81RW8aej4Jfm1642ib4Xj2w68moRfjo6jiMmx1UzLrp",
  "key27": "5GfMjjon8dP2NAXf7w92xvRf7FXrmuHH9pRdn9iLDg5UPyrSAZd9QozqkRuWTjhDxPhSPQHB9MXce5Y4atKLPmKr",
  "key28": "3VrTNDtcYaDHYPxNnyNrv4yU9rqiNpfgmoXgqciuFj4NEqeF5KikAZWm4XZ4PWkXSB7fwZYrP8uMAZTXzMu9iFRG"
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
