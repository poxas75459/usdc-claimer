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
    "3FESPavRF2vYwqbF1C98SePgyynF7bempFuotvXYNJ6JFQuR4Yqe4eUA3iZnUFueSoRi9BZADfFGmaCD2PUmAo5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iVk3Qnp9Hdq676tJnsk28FN6h4oGJTcQ7JPXtrYt8DVyg5cnnPJNPrff1aukkrSKnf8KSQQvEh7WEE1XYULh3n4",
  "key1": "3xbDBQBM4P6HpwZsF5AemAxphATqBcARSS4r4CcSqYjNf8NxSzXiSYTjAKkXJfLGtdYYfbwMuC1BUw9xf7xnuyUy",
  "key2": "2dsoq69jQVHx54Yz9pVeHWAUrf1uZJHW7h6EaMF6SwbcfjgKocxVRB1KeY7JGte6hRbMN3KGY1gzeDsTPB7syvjF",
  "key3": "5bnKn5adbp9HXcw7XwtKPfDHasK25DTcrFPyJ2HtgvjJgPjHHFkD8w39cCMQV7x7S5Wz9nB96v9mhZCgLv3iWFbu",
  "key4": "GBMrpZgJenFkneMEvTrC9yxWLHXiSGaF2TVdK5zWqFTvG9Xhw7yWdsDy74yKruJxkTqSWJ9TNbsR8ssvJ8iqrs7",
  "key5": "2hbrdPiexZACXCgxZrqrqJH6pKiUiWCczWsLD69sWanqU9Jdz1Zn59ouCDiujaFWtyjyYoPETb4TKVfch9xRRe3v",
  "key6": "uaGF181oWhFU4ApM1kLVZ3yVmLwP3d6UhuWNtE7G4zswWmboMCk9LNjaGLgTAgQ6edetkWwtknEzKzm7nLyPPHp",
  "key7": "jgGVfanCREhfgxNp3ChAetifBrQYBpdRA566BpyW7EdFv79dnChtHQQrfXy1vLJGYJCbRJTXBGF7P9d9EcVZYGZ",
  "key8": "4xrBUiELwQsQsP3ZQ44He2WHGq4XdiXKMrrYD7fdML5Y8zr3EpXucfXyBRbSg6caWQwLiwJSuM5Qih2DbJYyfkJV",
  "key9": "2YUfcvuM9HhtJsn8FCizVFhgkuuvZ88tKeQGtdzBKizUQWNwaoge97erjBP5iK6m8ybRWsUGehWBGZzvK4DZRGto",
  "key10": "5takM2Pm7DhMS6rimx7286C5CmHDtfp6Hec9J8SZuR848H2Hit2XMqsjbXRSMbn2SBL86e3MrZ1KLRYrQQiAPnaf",
  "key11": "3pup8y5KzPrxCu4pPs9EYQ9CFESeBzKHQF8KJ2PVbeZ6UzzYn5PaeZzeFqGPPxN1QoUrHvFzjAp3heimTDUrVpYa",
  "key12": "4zkKh37HcaJLqCYpUYi9FefNuxcd8Y3iExy2n5woMG9YNa1AHmyAer96CbUkoF2GXzcHxRAGX7XZVU92PPFJs5rP",
  "key13": "2rg2mxxdJw9yK94CqspkqFvGqgs8pKpjZ3bdKrkxeF2m5VXTvrvkPfHfcYUf3WGsZRy9V4mTRAYdUfKjLNckgZp6",
  "key14": "3mwj94VBFG22DKUtqzj8GusEvWp2KtRcMPuLS3EkNcjtk5TEeb37guueQ3x6TQpqc9WaEJdBkcmZjp9C64dUukze",
  "key15": "26eQz9owZC7jM5SVhD7NJnGjoprGgtrExJKETpi8VyuqTki8sEtsjt81NKfod1DPNiWTkaAXpvfood6LBwfzKfu7",
  "key16": "3NBNEDyyWTcHyKQxpKs9r9pK8RZMkfRFLpohgurd6y55C1HfJgEUmCtUtkLXfNpNZarvBA5A85fgm2cy7tz9ZWPd",
  "key17": "5s74YFFPibPyAYt24HxKNkNSK4XK3NwBU3RxwTHPUzsA7pN5Q8zbbsW3TW1p2Roo6P31WAZc19N8iSQU7Pq7fSvj",
  "key18": "35ntWqmnhQC74pvjocBjq2z5vaYE51TrFXqWw7CuavXVw4z9c8uqopYJwwWeJoX5fEEpU2DKENrGmDegrM99VtXD",
  "key19": "39eFX8WyHjpHETVbjKfsnZYZxsirPCygmvP9oMzvekX825XPp5c4ypTvUUG4e3ByQZRPXPshHUQL5Y4NeWyMh7ip",
  "key20": "5gXa9NYfiW9FKBeq8du4aT5c5wJkbE1YUqvy3VPuoTuTgC1X31LDjDCTnH4wV7U39M9g4vZvjB4nThVzfy25USjG",
  "key21": "2C6MDHQE7xy6aDG2m6muT72enfDUSF7N69Qhtv4yjsadkt4V6EsmodoLyYnoBAEotyjZyrga5ui66cpaT43foWny",
  "key22": "xXZEjAQ2NgXa7bJF8FXKYwACZBKMD5P3M4Bp5bEJsy7fdy6Yud4mqXdvJbh5pymKvsevmgqrVRgKm4AnU4Q1fKx",
  "key23": "4AnHGAnKWSJeHmgpJAJPEurBmw5H3kBS4cgV9EzbfDJsgzHJ5FrEKxGsXfmfzHFgHUimCcnVimi5xbWY1nfMEpUn",
  "key24": "5PfpBgZS3JdnEsdisTDA8ByM7UHgoxeA1uGVCSp48k1Eg63TonqcPu5mDp47anZzE6ads2Q22uJCCdjBFQEueiH4",
  "key25": "5vNMvipu48M1rojb4VSYaYnN24NKZU97dLAFfqf9xvSzKpoMFoKsRF5QxYtYZt98gUZgmTnFfKHc1J6FCwReMzGy",
  "key26": "5EY9xjv7o5xXN4rt94NP6XAK17tJPgDdtxG6kgNaH43yK7VH2ryZWXXR2GnAVfHpeSPMTiMysa2pSx5LqE1FmL1x",
  "key27": "62W1m2SeRFLeJ1ifXAE444ptDLwsBJHuyRo6TJEDTQpMkyj3BkHDcyQ6J9Humcg9rA9CG8wJ5H7bUY4Cdde3Kuz2",
  "key28": "K956n9DiVVJFTWA7rzz3yGTTRsEfXRmryBDEVUdpgRwTZTQFZMH4PhyvdE58BWC6J8X6v1z5StNxGe38kFT6G4w",
  "key29": "BkotY4CbpzAbF3Pf8Yrq1NvafWbvaT8PrPtNav3DN4pXHLHy2H1uwr3sqcSaozTHJuehLEdcMYdeG8oi81XcmZH",
  "key30": "5gjqD4ud6NLByvBxTEkjmeJMGteqwzeXpLa8RWy2cUYLvXPdbcZBqPagMGgQAZ2ZTXPUuiMxqk6zpya7CKeCnJuj",
  "key31": "66Lk1YePVjSLX4b7o2Apfg7nvHVwTaCmWBjdCriEPZ39b6Kw3hzxX1VmV1CQMfdpyNLYVZNAgU6DdoPZ4UM1p73R",
  "key32": "4vnQB1rHM1WKZ3NXbZtBNMZFAhJD1DVCcEtwsCwoZNTXtZVRCHcrxhFNhwKFx4EX3ZkwuDpY9o1k56ytxGEPD4Xq",
  "key33": "2iqaNLuSz3EAjtorb5QR84RbdjduBqYoTYx8Jg9taE5pkpQnEHjqFWvd7YJkMNGFPUWE1XC6iAoUJ8UhB17oZQmM",
  "key34": "4B2Tnn5yTnWxzQb9bRoRN64gfKbELQwawTQqyuzjuFHVhi3LeQ2B9Cz57RWbsv9UoJbac2cN24Lb4sXVmr5YSMBV",
  "key35": "5SLq7EHEomik3eKhyJkKy7zPzJYkJ7ZYsbDToauMVzacZRykpu7YPvZeAN1vzr5GKu8V6af5kWz5FVzZQ8XRqPWS",
  "key36": "63znC7JDi5UHDNQAa9nHJ8zZSYmPcTQXWAr9hG9VEDXYYUxAaPkZfaEgds9QrJEJ6S5bLJfcSB7Mew1uPJYkDsxn",
  "key37": "4TGHS5kNToSiB5LQYsB4FMsTPgHcPNUQis2UgVttaqwHApSr21mRkJP77YSTauDhSnaZ4LeaEtGqPxPUysxzKKRS",
  "key38": "3jdW28z7JHbFuntcom2YisXXpdjhsTvJexshXdWoDV2jqWmLfSPpDYNdxB1Qu4GEhWrMSCEj1rW33ta1KpdB8xHN"
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
