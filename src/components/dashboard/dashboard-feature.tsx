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
    "5wZ1zpxFBaJ81pSR9SntLGgKLnZHydujim8X4qYhwE1FyjKcALACswG8MyLU77W1Y74jM3b4RFnMbc2dQKFqBEro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XPdGcShYmGfhSYDvDYvbJBifxwjHektzU5fByNnWfWwZtFyEg8LNzPzxPxCFbPmFYpscSLTuAkhqaPvmjyuMDEz",
  "key1": "5QYXfVuSVbmqwWSMXs7wQpFzh62ACLs3xKAVgABQDiHqYG3mNj8TpxhhWtPiJEefKoHCMNdV1cLRqijStN13yHSs",
  "key2": "4yKjtDTwriNXEAbw34fkNxkT6ofQesWAze6G853Y5johQCGkdpFsRRqmicsiR59E8iqvJmdXopr1V1xiytQwzndP",
  "key3": "4FcgGfj2STaSfrkHM34zo62M3McEmBKP6MJCdkTa3LvyEBq9pm61LuAziNp6bzT7aMBZy1dvFXkhytDLebs2UJxE",
  "key4": "3dbSxMXKrkKQqfreiSiRC64op3fDEQJD7yvRFetBPozdWvFgP1ncNN5TexGCAfYmdDhbJjerY93Jore7Bbb29sVc",
  "key5": "45zaMsE5ELBfKJqqGr2rxxfkHb5qFn47nngWJffbSHEJnDf4yLWCU93qgsnpSbvbJPY9S211RJHcpZ1Q5SBgVJ7B",
  "key6": "3Qz4GGMigkXuiJ1XU4mHJ3g7WfX9dtnLpU1EWmaNEFQX5m4Lk3nRFbG76W2Loby82mzQF5UWr4QWMn9BMsJ9fnkb",
  "key7": "inKyQftX4nJh1yQ2ecxPjPav8VvitiHLJe8UeknXpv6eCV2e3Xbs7ZxdPXj526cV8L4XGic7HBLxNaNLjE1w27t",
  "key8": "3oNzhToLe8eaQC8Yaea3X8AtTvwsuNrzEmL6MKjnzVMmfmn4T7uMGnyqPkBRQKofHR3UxYWWmxQcJJHY4s74TnGn",
  "key9": "nrgsUGUzWHzXMX9FnMimWRSGnyN3YKdprnZmntnsskca9dQoNP88fRrGQyNnd3b7qtpXEUxUXsDT6Q8S3rGX7AT",
  "key10": "2VvGeyA6ABt1HvzmuDU16j1s6PGwFGKea44qvQufLQ3PbD39mgCPKk8HM7j6EGNgci4SLYvLT8ZuVPiVNeL9wGHG",
  "key11": "3jG59cmvbt2rEn6srqo2wYe24uMPb7pWH9HDGE2aEKg5b1vbWCop3hgd4JQJ4EMe5snq5u7TBVog6k3NB1Pi6YJR",
  "key12": "3wZ8u4hzCaRSKR7R93UvxbMHrbRWiWBX4z3FYrEQ2ZC6JGmu62hq6K6mDYHFDcYcQGHYppLymWdzim4fdvrcrkrv",
  "key13": "32NTyarQW1CSzfrfMyNf9qEx9ddCJ7f6U2hepqAUxdt5uazeUdRGyTHksubvebkVQo5o1aKK3TKC9YuugnJX82xZ",
  "key14": "2LVkg5giensPS9PKD9UJmDnVVkT9qsKoWwjCkA6qRid5oJmZQNpCtSzG3v69fw3GeM97FTXnncS5HoJVSJEDTERR",
  "key15": "5YNKVBQXeDpRH6zpzgfH9uPgyYTJmniDTBPtaMkExVqXR1VaXYcp3Xj1Ydi2Lw5S2BVWczHGpkg89tAYS9LRNNd8",
  "key16": "4PumAwZCGyxrwGk1gqEjBMJAPtH2bokm6k1qdQeGBLR3cxeM9vTYCCZpvvxNEiJAubgNt2MSkG7HvBFzGpp7CRFA",
  "key17": "1KjpafMMec7JuGbdnAQ184zuTsD2ubKooUrRHgB8tUDX8mZY6UMvFafGo4yDM4Dy3HWj9JYFWSVUzPWf3tzmuXM",
  "key18": "5wZ3QUxphUd7gUxYj5wjSm6jv1RFhrrftLCvuPdaNXgTwckgtBRKL1ShnKEeTfYezmod4Dozpk1qYoSX6PWRBKMU",
  "key19": "3tU8yVoPD72hMyRwQFcBSucf3wHFGRbTNd2cXYdHqxayZ862KAEe4qz7ERomGUKUkDa3UzCmRBFG94FahZQojKgj",
  "key20": "2dEHKHtbDoKQ8ZZa1Ca7jcTPuaiyqYbcta674JVb1DZWULrDrn887ZLNv2qs23MZo8e12wcwuhwHrAxe8jmYHuj2",
  "key21": "2UTL4QMGprpTc1Gza9JdY4jngphEwsH1TJRMyQtdZPeQ6NWRJ11AzzPUh3DQRFties7jPmoyXDVTAXfxpoGZsXAy",
  "key22": "4hFGLe628Z3Nis9Pbx7MvLRSu65GnprDEBYoA5kVnyzY6asWDyLxJxj4Baxj2vZDufdFuVvkHbwijkS4ncFpgtJD",
  "key23": "31RbH3qvwWWPt83ZfGshWEBNt9yoBZwo2sPHSZY4fWxGz6y6YYMc7KDY7rBiW4K2vehNpwghMpa13SrpnP2LUV5b",
  "key24": "3zhYPi2wRAs3h3P93ipNq1fTCpc2zw5PpfCCSjAuWHrC5qKA7NUgyttisvQJ4pGJSN8dzeDQj2VHm8Xmmf8LpGhV",
  "key25": "TmNPmfmCybwedaBQKQ3g3HhANXeBm2SWG1kB5C1QSkZmX4nk5w8mN7zkZ3jwiZZmBYYZn1QbLbdrJAxk9DucGjW",
  "key26": "pfHxPeRczrtCxsRCZEmFzu5vhfp2Jk5EgExyAxjapUoM9z8ZVyQJWZWd1zsYZnXLsB9e6aSfqpi3eBuS7rV11Lg",
  "key27": "Kb9NYGay9FDNBPuwG1SAueinB6Jd3VVpDXvdfgxu4bh2f7wHwisoL5oKjNJ7CqA3LDF1gRAqN3YZPZuNq9d6Mhg",
  "key28": "2gjeJ4Brar521U1cYUATqRczqNz3HzWPv32UBS58GxE5JVxAeT7HMNkdKjpHHveaGDsCK2JnpeQJUBwm73pJ2aQi",
  "key29": "2idzUBgVwWvyzdrWrTyVEJ8NRugWRq93Wkpsr7m34v6y5aGh8vsCXXwfeMZThQe5uHCfH2EcRQntttQ5Qh9XQZRj",
  "key30": "3B9wyHjA9kpEWKpLMoafHiNMpqxwhLHG4gYLg8dDwLtPrqsfMHifwfrZDWnioPYpstqhAvD9Ja2G1zG1RKcgXNvk"
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
