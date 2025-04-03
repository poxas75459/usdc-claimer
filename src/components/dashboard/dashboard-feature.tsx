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
    "37qAXGJry4YiTrnMnYjtEiTdLKpMeUb3qd6bUFCt8rLcdTNENCxVHBfe4Z6BZvSJGb7XEwkXpGQFydH6RBgieNfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qnSnysXYGR51DtGy5zp1YAoWeB1PBPbkjfnGwsMULxKTPteQNicDUgbUQQvX5y83kYG1Dt6GfTt3ewe2FSWv71p",
  "key1": "38Vc2sCmHK7pokv1crAGa3PEREk5vRbHEsaLua17A3sNxaUNjDxmcWYdfism3kvc1Y47NyWka4meSw2AVPe2evKp",
  "key2": "2BjGoXBTEcAMERpvLS1gqa4MDKKG2sCf4HsuH5NpUQ42fwBcgPnariwz9QhcqHtUGyv52Uy6JfGBJLqNevWDeu34",
  "key3": "4HmhAGPCwUWeu8qyHcYM3NxeJoqGrgkshUfXU3iDDJRPZrV4KJvPQBeMW7vabvBFPvk4UECeHtmxdx1zzYQt7mbQ",
  "key4": "xhXpLSxaLLrKHBpgSBMVumPyLjNGaf6x8Zo989CmhrEyVk6UFqWayZQ4UjmW1CVwicTX6ZF2ymjANHdJDKqWauJ",
  "key5": "3F3zBFqxkR7Vn5HW16y8EaG9fY7kWE3MKyHAuQC1A9zGYFTRSgoyxzJqVSPU22CYDkHTuWav96Kq7nQePPqieLWJ",
  "key6": "5vjEVngUg9aNS1XsfEiaAU8KdHBKog4ZkPN3jb5Q7fZeqqWGyyVXTodQF2LtpzsgzMkjfveuHyCaSisgGF46kkVf",
  "key7": "4cZMgxmmtMJdEBuM17jYpzLAJ3LiQWYA1K9X5pG1Px5Zs56myn1KVm3sQsmMBp4g3HQhHCjxLGwDibgBD9enUBVv",
  "key8": "4tDGbmARSgd4cNaV5jgEpWg676QRi2FQAwY5H2rd2W5icPUZXxqnSUS168XALpM9M5k3zTE2CbeSGbJ3YtJpw1ux",
  "key9": "3ncxgLZHnhczvEE2XGYopx9o8b3NuZUph9TZRsU4oQRsputXokCUKQ61bw8GSHEyybAMVHHTHbseYQRV23vwRprP",
  "key10": "5dJQKzykskJx9PFL5uzXrPtpN1F1eq6gAVrMXPZbAwstxQLwkab2456jy3hysvofsWNCPnq6qnSauJA8285iWLgG",
  "key11": "2rRQBX26WsFHy6Kq7yuodHg2Kgzu3NY6M7ssUYeFGvVtdaNXs7x9wKqdjDja2UPLrsNUT48ffynjtG1K8F7udNAa",
  "key12": "5crdeGrzKffRbfoiayopMKp3xDV1LiVSZaHX6MsqaH371AEKk5AHQtGUJWYfnQHoDDCFyVTetCycZhV5puPnnMht",
  "key13": "4jaxXi8Hn3gdPqQNfR9k2Aif8TA87g9yPc3x1dkU6qnwofJabNLStSsEAkYncv6fBPx5QHwbFjwHowkNozUxdSeC",
  "key14": "3hREqxHJdB5aWom4w1DCjW5KaP6Y6nJdxMZ9bKcS6QhzcaqU3yh8MEfnNQJAMAEfzXi9sY4Sphi1oXUcZovmySoF",
  "key15": "4K79zQRrViTAxBhw4EebfU4L5JmymrsQpz1oMprLtAc62bkaBgiDSNJvo8f3ypWhUcWrYFD4RxhDkuneBfXaFNuz",
  "key16": "2p8p7GYtxZ7MEQEPZxTAkTMUhd4zQ7dHCXapzBcgdJoJd7pS18ydFeD8UZRWSP72eWHcyJJLqQDq53ewsZRbKRTi",
  "key17": "4inMxiUxCzxw3fUxMUpQmWzyd7ojLiEjF9P5TvtPGCScAfKvUJLG1CsBwy6jnmQmtFTpXhP9HL84XDe42rmJianH",
  "key18": "65eJzxsq1bvtrMSd574GYcmhgMh4LSMThSCqUVaS2h1yokoqS1AGR6kEZy6g8284w2xKH6Ui5fKdD4PESDH68Q5Y",
  "key19": "PFeZ8ihXhdD1DeB6fu1JauFSMQtkFnnMapMTLWoji6MPVrEcE5HJnsH9Gfa7A8kM6yAFZwtKeTC66gfxzfpsJvY",
  "key20": "SX2ByajvSii3yoavmBm9SCARFadnjBDVnUmvf9a6zXgGtzZupmbyLHkw9NyR8G515t14NkRfDriZKnWXxM5nPkV",
  "key21": "5YViCJn2DdLVAFsTSLQkQZKq6HnSGyz9BW1VbwwVqQjhE8CCvqhd6RytzL31QPXDRw3Xi9NUxd83YcQi8KSCANbv",
  "key22": "3wFbv6GLegPp8pracUpb26ndevcVEvGD9vUyLQYkzC2P3fgCSucsGdeuf5BZYGkGUbXHpAPHkjH1AW8synoKmyL4",
  "key23": "5vDKv8Cuks6rYRP8m5kCm4Q72vg6uWRRnAmMm5gRFAG3LkWdFBATwV7AzrZSiyuS5Pnro4DbfQ9MnWcpwGGNmBRo",
  "key24": "4hAeUJk6RzMF2K8pC4dcx2XQURp32dTiU8t9KAgP6ATGS6vGxWWDr6DS6rwU9sEne3YateugWxUkMN141qzkw46e",
  "key25": "2HLoZVRXAb57VwqVeauv8Ht7FubDZVLUfYLEKMjtZbJaQUcCgDiKRGg4srvaK44PRRyMq18cCwXjhqDkEZ9aod3x",
  "key26": "2ywt2tSZABcYhNC7NeQHt6Do3LeZJ3vuF6UmcY6S4BmP9LwXPSU7heYSH8MgkDJxYikbu2NCAXn3vM8TDM8mLFUH",
  "key27": "3D1tsbt8AVym8UTYdPk6NK6Gmb7PYJpEx5DyBAzQb1mwJNHoMZhPRohKNWvjgqc8bMB6DHgrJ9vQWe7841Uu6qY3",
  "key28": "4qWWKmSoWGdkDSLhc7J6Y6dtz436AVFWege1oUGD3L8ZbbMTTEEcJ33qN7EH8dca4cBufaGtXu4hhjfAteKe9ZT9",
  "key29": "2drBEKsFEQj7ri9WVUkeV3ZLR518WeBuNoFuTcZCZJxWkWuVqZ4FynUB6m3tR8jV4zwC4MTBRssSNBgrjwQr2Ave",
  "key30": "5pyRUBFxYQ3eCQwDmWGdS9uYaLMzBjWosdahpMKesdyAzwtxrTuQ17BD8hQe3CrYumMoP7vzjMbNMo2BzLjpXT9H",
  "key31": "5sy1rZ6CznkFACJczwz3LDAjbt51jEPqxcN1iydGHq6vUjKQda5ZKr8yCEkeAfYXSmWrP8dsXgXv169JxfUpEZfX",
  "key32": "3aeUqQQZXUH895s4xj6TZkj2MTJk8MXFV2Rig8cppaMsx7ARRWwyT6MaT3poG7Z5xFb7uGBa69virHJAsiD13q2g",
  "key33": "3FMKSovDaFJzgDystdQzkfKC8wJFwJf69XLy3n7BjCBL8UEfEd1pD54qE1vHypk2tSGiVT8hBXDRQzt11czqSZPy",
  "key34": "2Xn8ELRMucb9kgSuJoj1DsAvs7UNwWNJM3YvmAkdwRiYf6atbDQ3hJYNCsDCfzRN4rRFJiB2tqYE8cvdf4s6TqYT",
  "key35": "5Uqni8WcqZQCDQGDUPCKTGHgXGyVwwZ7atLBi2tKrbS7pwnTTw1Me2MFfv438q3M9kY9ApACC1CyUAG8yMzE6Wbt"
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
