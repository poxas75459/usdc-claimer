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
    "4UvRjGzyqU31fi6TzX6KEp9rLvQtN2bEToNqXAkQvFgZKQNFN4AyLDtJtNb1cGLBSJWekXHmGw258eu1iSFcmBnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QK8vARhKVYZ3PjR37pWWFrQa7U3gzhHK5MQNMRWDJEFUUk9JsYYSKgmWxEVCnvhww2Vfhug795GoX463iEZAWdx",
  "key1": "4CLQkUgxPXcrCVFYnd1w6JFxBNJ5yPAsaG1P1TFZJ52xTHuqLoq8L7k6ZAtEXzznftwpw3MKr1Cni1Av3qDyZ8sp",
  "key2": "5SS7oXkTTqRfDmdAERzXzcmYqy6bEhgnkvRtnv9SJRhHayfhgkZhiBhkRgktSsmufFSVZWoebHs17Wzc54UUjngk",
  "key3": "2bzVbFcswwM3Ry8oZzvpKz1JuQTZu1t7XvUtZbzc7KNRuP5PwydKmYDQLTkcssa4mu4anZzXHbKEdKGgtuEqV5XP",
  "key4": "4UArz24LycPLZZydMrPgDiuPAcK8chE5ZNWMwQPBnxHnqgYEs5KgsbpnbdDT2HUZtgoq4vnf8JmZS7oDn4AGHHJf",
  "key5": "2dQwxTZfDaaWSEFtsPoPx4fhatMfUFWGjuBNXovto8vTRkmZytgsfKPsuRnDNNDQ8s7SjJhMVNyzyCDHF9gSuqGH",
  "key6": "63fNzakGw6gXb2uFA2sVm7SveHjLyNW8ysMoegBFcHTot4XDRhkEHFcxmHxnctpJf8xcEogg9KitbNHaq58w8zXr",
  "key7": "fALWfsH3jXbtvPgX2y29CgfbhiCeYDVLDcrFoirpC1LxDuj29u2pQLpc1sZ1Trwh6NeNRAVzCr1fmr6eL1TKxY4",
  "key8": "4TMrZ8EmyQ3csB7VdNshGkppW5tWXeWXnSRSyn6rgT3LuEBv6KZ8z6pjhzP6acCxfuh5SyY7jrD7NmVTtmMns4c3",
  "key9": "3tUjcuVU2ink5DLEc1cWaaNvSGjoopbddyd1Pi3n9WpBPZRrFNxjmLakQTdqYKwrznuY9ZTX7VwwtbLLGrV489q4",
  "key10": "3jYxPwbYRuT7ngi2Mnjnabf76ukgHLbHymniYxHsxxJ2223ttD8QXAJdR16ady5ujxR25j2VtjEiJWujb89gMtJv",
  "key11": "4sTRxCHn4dSTqerb4MHCGacBYsMEXQhWPd52bvYfPHJCP9w4wUfxPhBGwqRU29ivpDoFXHCekx6jZxeJF2LyVJSH",
  "key12": "53bYhnqqMVvuaxpzJYY7WZTeyFWQd9cmHnkyWLrX5R8MCWyHMdmnotLc4LrQctfBWHNPYfPvJRGazP1WLqnBHKqK",
  "key13": "34VUWnm8YtcF5qk6Pi7WGrPPh8cfBfLgdtGWh948PqMf4WYrxvTGLP89C8i7oMW1XqscP53Z9V8AoXD7Te2fHRoc",
  "key14": "hUhsAp6rVG6dRvEh3SNLKu8pYFGitYWNs5XB333LZy82ppbYi6JLyJLBcUtDajJzbnbGHhbPMtS6zVudj8py9nS",
  "key15": "55jpB6mAdJLThymLFR69HRjFzVtEKMigqJVdtENkbtsmrMvAmt3y59HDSSm9C2iTrEtMzRy4SVSaUiyAGE9X6ek5",
  "key16": "5pwgpbWxVBRHUx7M2mBXDYbfgTCuipKs8e5Su1EyJDXofgHzrzkyMVRyGAfN2kvxCBi9SAXL9e4kEvFS8VUhW1N1",
  "key17": "5iiTVB7nY37bWMXaJA2NG6z1tecY6VfR7UK3d9LMxF8yuxA5tuoKyi4c7J7rEcGo6STb9vf8LEphiAsSZxQAjEEL",
  "key18": "3sEKN7yocWpdFjh89MhN1qVsacTeMWX3dDGZmsB8YeHpfT3DQegnnkXj2hiAzmqGYpxyjqATZi56EwLVH43T81bp",
  "key19": "QSCw9XFz2ThraG9eYHzpLjGbDDGp82BU1bukEMiDe864ZeeyDwb5iqDeLs5tUuJ3dJNrHDqTWMaeSUrhTBpfdC2",
  "key20": "5m9vkfSKNCUpFcsqPbcSHVok72jSfBtxmSeFjFa9n9k1Jx9dgDMhUnNiLrCjDeMw1Wbsqd4Dop3roUYvdYVdPrvc",
  "key21": "4PgiX24bLyKAhf2gJP2M6iVr9aKmD4WuHhNPv3gouz2WD4bKMZnUwp8egYWhmzoU17WYUkyQnutkYV6jgdsv1jS9",
  "key22": "quiJYhum8rDjjbjbPUdBqyjZ3RCDGCqWG2oJnHNrDp5TK8KHWGLvYFS8CZH56JKP2rdgo1u9VDjb7mFTvLktkL8",
  "key23": "386AcJ4c19yiTBaXkPCTVMGyYBsrAoM2Qu8a1oJBT1nsuqZB6G5gL8B3wGFkiRPsAZyfu8GD3EgDAsBXxtFpU7pP",
  "key24": "28hEC3HxcHZ3rfJTMQhoQUX9zSRqUham9GAB4caTURWju4sg2HcgqWFpHQQ5Tr791MbNaPZRgmiGqDPHgwxZvq2u",
  "key25": "33Bt3wYBXnqEp82CYBtH2gCKs7VMnwXJH63XEKaeXS3ydci3hgsbxnMZp4Dnt6w3yBg6EJEmMzoqKmhBJBBvd9Hn",
  "key26": "5F4asTj2nJCSsJuMoi6rLiEMKmABngHRbZUBnoDhQUTsbFHWiiGGzt8PXmjKVVN9GQXqx7Y1tFqQFsXDZDGoF6GE",
  "key27": "4S9xPQ6rVWjtHxxA9crFDyZVsPAVHCy24CdSq5nPCEWS7HZffkkiAXKg6FGRrahpwDF2qqqCRc5NpkMifCoFwxM",
  "key28": "3gQkbjCioJ8YDwxVWJyJQ4VC8xWd56X7YZKMXvaQWAsZwbUf9bswXm3tzY7wYikrZtKJbTL6hNdLFzW1rEULfBJA",
  "key29": "4D7XDkSbq1mGmfrqeJMd9XPYZN9tX3wDU9qxWhYKRWirtTbYK741Wx38KbgJXhLRyfEa3cSiX5vJ2SVTBnPZeGB3",
  "key30": "4J8DwHmyU1LyPkR3ZAcUw7UqBAYeV7k8nKssUWdXaepPszLaMTRUtfqpao8UT95yqW73yB7FmKifqq5JRXmg3mSy",
  "key31": "66rDNSXEWyMW43r8UeNp5zqNeLe3cQWePZQeUgCSjXmAqyaBxW7YmriBszd9aggnZ8tFfjuLnc38sabLDHDVMsMa",
  "key32": "4Z4bimufKW1QF4KD1nx1RZe1ZYDcTN8r5H43DQLktyUHpLU1UEer8wViNnMxmVC3s76YBymPoG12pc1Dz9Zygarf",
  "key33": "49Nk3a4miakKDswgNgYxMYCSAckivY6RpsK9CF99wxVjTgMNGSbq2U9Ec6YjW2HrDY3449Nq9CJtXykyF1M5hChc",
  "key34": "XQQPmh9rLWYjdqm7mqQgvPeVFuLkhjEM1eusstGYcVKX6RrgqVMP3WNEYo4isrGabCL72EnMMEhApwp5BEgdW6t",
  "key35": "4HJ24gvAsENRt89FuaWceTGRFHWtsiEwVxjMEZYm2eBYWeQvkzeN1TYUzydnFmbwXXAgg5o9eb8AsTVDZAdH7zhp",
  "key36": "3PdtdMrUqL1VbtbedqfXjzJE59DXfBbEaCL1Hdy7E2jZqU2ksg98Zb5YQEdqxYy1skGMTqG2d2FRzwzNRN1XSHxY",
  "key37": "129fHpVtVxhUmq4Q6Qv6cDrL9R174nu6iR2dsWrNVng8N6jarru8jwoSngyqhdYViKWe68mgr4wjdvLujk2VhFfi"
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
