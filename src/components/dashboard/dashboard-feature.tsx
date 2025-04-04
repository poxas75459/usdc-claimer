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
    "3m7Qk76voFFrJiNaGDnDS5pBik2r2TkyUCAfA22zjEkbzMYDm7qLRPhPmVbJzHLC9Z4u7bTHgQQ8uP8tdhvjGc4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uw7CcbsJodSUCjgvhPys8uMvC1P8qCdCAbypT5PqBZaDW8MJ6TKhrQeUHqAjm2rqhFqYNFBDmwdX2PPVVEDYexW",
  "key1": "3VS1SUxtcf7CZejEmCrL8FogJAiYdvtx2A1XAWdHYwn6rV1Y7yrUeonx2nyFXBbnYZKJncUNuMkc8uWiZedRy2Ph",
  "key2": "2B6d1UoSjAvhsFycUvXbxZh9qM3KyYFrwkSoaRnct1nEwLZKzqipvBDyJHLkZowYMNhiDg7jekGD4adkzdYgXmJK",
  "key3": "2Ve4uAhhTeqH3ueeifXUiGgAszv86tRnStQLX54wdQcA7zQLs4Q99e6SMhm7d6WwN4N9v43Am9LkMVPm6axk9J1o",
  "key4": "4XArhBcvk269osc1jXp5c8UDK2jMNp89dRU9vpeckLb3zPFTevq88MuAS4bzKcfncnschTHABtTrkJiuujVzaGfm",
  "key5": "4Fn8JBgSiH8RGmdYzhiUbbg2LE1BKEQbK1degePLEdyDJ5EiFiMbNasNjqKBb4mnQdncZyJWMUJgVRASE81CqSXv",
  "key6": "4gade9sSsCMDGmez7JfqZPhDAcLMjVxC5AtDMkHwM4dJSGUn8wbPYm7yVmrLHWyHxhqoMu9m6t8e8BreRKQwFnsA",
  "key7": "taes17HNFTj7S2h9d29ABENDu8Xr1HPBAhPHbu7NDyP1XYJrCXMdjMJxieJRRuJHCZvzTb5uLX87fuXTsZNwT77",
  "key8": "5ZcTkfpCtTpHc2X11mFF5y25n1AHPPKKW3sShuBCvE7PSP7yCGscLtK3kFuDF9D1ijCtubvXNazfbxG45yNMEK6G",
  "key9": "3S2P1Xo99ZpZr7t4HVRiEdrDC8GfKe3sjsdjxKtsifpyWyPe6GBf9kvz1QbW9aBQZ6eru5hd3w6xuKBAHbXEUpYL",
  "key10": "45iRN6SFCbNRcxxaWjpJEPwYBaCqthSAAdhnrM6Nqf9wyixfMLh8VoD8Rvim7A2ZpjXWtKmgHvL5Hb8ALtsdSrUn",
  "key11": "4gqFuhgDcWGKMJDnmrb523Z3xU6LWxhKsuDaPfEkKdT43kqp4GJdR33GPsZRoErLAcCv1GsgzrRxqGVdNBPeJPcj",
  "key12": "2dC3g1pm2dAqyBnuFwuR4m5QZ26VumdUxDGznZsRU4eXaoX2AVWtcvfQZKUJNJE4UEGjLrWqWTH98udwGvb1iT43",
  "key13": "3JjwZ916MPEw5yZzLEsDoVTW43vCFC2uvdpRmvsj16NwekaMW73rkSo71Dar63ii88VDxBrgEtGrawg98uwdUGdE",
  "key14": "56qEN5kTvJVMYn5oDAC5vEZZfn7gmU6jNVQ4ETtfvEcuGquxCqk6GxqkX8kX8HV14coNRUsDmEwFmSVerRrJNGjB",
  "key15": "4SvFMYwrF7YCgs6uubzZ3phJVdLz5ubQ6na7gkC5cR9nQMtcmMMyFL9GRoqBE3ZMsDopLEPjc7kFiQneUe4LVMqz",
  "key16": "2fPMsZrUfkLZLWbdg9exU4jkQHrxa2qF8db3WfJ2QyT4MhC2Xa6WoZAYyMpACX6Z16MdPstAYZ4sJsiHsPRFHztK",
  "key17": "2smFMGd4MJmBfxh3hKVZTKyAkDsjx73aLMrSipevFVWrR66r71z9HWW9vay9y9Q2vwLAp9LHc65iHMNuTrjdVAhd",
  "key18": "xVgmksoU3ACw6mWn3EGVBN3BGNGFhBxt6MPemgTWfn7rnM6MTQJHZYynqeFpiXji8NGrVnk2XG8mWyJ4FYSq9qb",
  "key19": "5GnyTi5Z3V6RH7oNHKeRpsVg5zyrx9w4iumiFRyNda68U7LanvquYJLXjYrpQjDwr3w6BKtvDxcB9xqKXGCYPp1f",
  "key20": "3k9wqcWCf9cpRAcW4BK2fprQk6KB7qJeSXGru5ro9YLCjX23XnMmCg95oSe4ywxfvCcQkwy68jV8ph6Q7unT6A5K",
  "key21": "2CGbgM3K1FJW6SbwX4cASR4MtVrE2uB3wqpCaWYC6JocSqQ9aFtPaKwhU7FEqtESUWLkqqAK6GMg5K687wGmAdQw",
  "key22": "4AvFKbTcmH2XFGcRVronRdYXX8eok64U3xU2RvkzQAYhhvGLQzefyrH5zrzBqcj2qXYv2ExrbYi9kZA3xq1d8KqD",
  "key23": "3vhEeTvEzKZgci14z8P5HZVQwdH93wDKe99GojTBK58it66tcGDFpk87n1y3xHuwQ41UYAEceYphwtf8bcbbiSp3",
  "key24": "5TN4ooXuJvkNiQCPzAFfvejDb7BDYirKeRvLU9UN4RMg3sfDyiUVAR9xyNVbbNKxhprSWjfGHZKkNsoPqs6F3A4J",
  "key25": "37xio4VRNePcEdJsDGHdLzVGABLjGPBtPXuSZfTUtacHqvzMuzJAgcvA87mUe4LdVXGQhNMWwb2iiRkQUDqdun65",
  "key26": "2WcSwCwWMxqKaWdTstBWNByAi5o4BLMrTV3tEbtgCrjuspAo5fPsviV3JZXt3hHrTQh27pVroE5XRErD3dRXwVkM",
  "key27": "33bt1NNaMirmv9BC87z4yjNS1Sd5u3pzkSrXCiRmH8LurSLJe7BkJzLmP4xdrkxWsBb9ESQV3dd75d9HtoMsjjyu",
  "key28": "2JE4N15FExujb53kpibEUQmN79BGcqLfR1e4MQdzXpwAdXnwjqxCEpUQuQKrYmcJ3XaSbvt6WQJRy8sSqGTkapVy",
  "key29": "3REfnrkeWz6jBABPH248kkySLHvjCvXuxRvSL8wXjAusHxCfsKRjojj31nrFKSYDrcX2m7S7JXWNsttDWtDcvCBu",
  "key30": "4Bf4Hjwr3mR6Df455FpVsk6dzhjFYHsBubjyx1q9cCFjFTLDtEshNFaNpYfEq6JdHDnX7tY1xPGgquzQQ1PjBxys",
  "key31": "3Hfv8J4kzzwJvDWpVoXtdGemh1yJN6vbZqCYG73VKHLzrGxWiWc6eVZ28nXh3jik3nAW7zr5js4pNWkxssCv92G8",
  "key32": "5pCSJbgXvNGd8Tvi3fs8HVZTb4dH5446TBarWsdDiXJAJxY9p4toue4Her2kVS2swzgYBqmSQ3GESMMyQLmJNnzw",
  "key33": "ZJweHMq8629XANf8He2ogwPsH9H8YmgF5w7gEggC1mvPNH4FYnPdkFf9u7xRZ2UQ9R9vBwMmWLjuUUF4aiENL1W",
  "key34": "47t8xyXWFMNgQqSqUujjnDSi22JnNdcKomGmeKn6ikWWh5x8KeCKfdWZ2wB1g8Ski7EKzt6u5TJ8uRqSs8Apnm8v",
  "key35": "2fWQAwiTTLikSXkRkaaKjQyKuy3EbNBCLCq1obEGVDzZmadFwdxRoayR7RTTc2SbbYn3YeXHatdAvzG7XQ5UHXDr",
  "key36": "57dbVCYWpTi9UuUEiBg1bekh7TWMigtyVWH76tWU3w3WBdANX6jg8YKXwJ2cdwWAmGo78Wuxarv5RFtQ23d6pzsK",
  "key37": "2zwPJWqbJfMkCQQgBfFMniLucszXkq7iWfaDZZHhCyT3BqZQMb2StHU5usYYhgbXMhqwhjTcQvaqnoEj2yp9f9Am",
  "key38": "3Zw4ZNWQA9xMkNyy7BkXA6KB7Du6UHfi91YDJFmxujTBugD8NgHj6YcCjBeidUHcp6X7UX14WA1BrRy1uZaymVz6",
  "key39": "5Ruee2cj6FwLLLcxKcUvx9F6H1XijfwR3JqvVDhrwo469HYRampZbRMcd5Zc8pPE9Vp1gH2W7NAYZquJq77JkyqB",
  "key40": "3haZzL1dohZxwYpN6nigjXo5NLyo5oxHn5xBb7EdhZM5thBDsMHMBaNmYFHzg7nDJ9mUZ6HzeEkKZRJUL6VdyJZL",
  "key41": "5skQb2csnT5E5rPAMQZdPg4qu4ZThecozqmC3z9XQctXSw1nxC2pcWXJEHjbSL4eKwcRZgfYMXfDixQMoADVazhY",
  "key42": "3v6oQC9a8BaTY7JoQYiFJez1eg7Ssn3GNxEPcmU4eKuHasBCccyGF5BrCHt7axUBXpoBDjsCAcA1BXdEi8ZwEf6W",
  "key43": "4SEdS4fT3x2r8XFdjxHkhRXp2tEvtU6kiM9sR6SfA8VTHDXSErLbPcfNS8BD9AxjirVscPjvHf3qGXN7X5N7PvKW",
  "key44": "d9ynqFXqfJDdfQKbkSCVUtTDaqqotkeKM7zPMPjcuJ8hSMe4KJMbDD8JdL5jk1KhwUrx2RzPo2QY2SFFmDF8Eup",
  "key45": "5GCKwtrc4MQsCFa54qrzdo1MerTvscRrDkj6UUSyzkiaAeBwggmJ8p2jNuqicwUnChFYZPXNQ92GZYKUnoUTWYDa",
  "key46": "5Ez59EB2HKEFALsPXvSyhnre2Pqc6vxjbUfqyAdP9vHaYQbDZub65UEXNTEXPZMSXEK8SauieF8y1WwtHEEnYKvn"
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
