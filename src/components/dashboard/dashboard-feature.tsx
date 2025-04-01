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
    "2QQeBXteWm7VoqN27rDsBPFxiJAiZDC7ioVSQy3BLWtZGJ86nqBqEFk1teTFA3K2TYn7crYnU5E3p1wf2v4L9JSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iJuhL7xiEMvuTh686njDnWA5CCZF3eSwqkEipgyH4EAYsYEtNnrusR5K4tRJJMDZjfYF2K4HtAKbmx4HGHac4eB",
  "key1": "4xymPi4T5FQNxmagZGRfrV9k5YqrTzcm86f46nkfNqQXAMX827aSiD2hvwWtAuLBrDCwzu3xs5oEHuLg5SFVNPq5",
  "key2": "4tBSMZSzJ3tbhC79TTTX7tXwE2SuXsAozCjor9QKX7ohTANadfkMhZrmnRPBfGDYAN9zPFs21gdNkBSnVbJp1bE6",
  "key3": "F3xoKuc1MHYniKTC2vdQbVPBtHFzdEAqdWBakjDn3LjTWBU8Vv3r6wtBBy1HSJZhE7K1e62MVeCd3J84kog71j4",
  "key4": "5mscjDvu9xb5EdaG5MqV1pu7xt7M7UhxuioTXwJA7T2XyN1Ej2fknwf9w3dmsL6FJYdURhZ27t7v257GYY2Rt4AK",
  "key5": "3WMpkHJTssJFU5dcnGXUEXhuWSXndNYuynxNUgZyq3PnoZB68KB9iinj4rQX8rUUQMBgYZxEAPWaZjiMrTHPEhi4",
  "key6": "Ba8CKypzXas7d3bVGCGHzfaZxeTpdmUTj85gmQSqJuqKBbcHiJjTCpTu8fEsH5qnkTVYjoskCtPgknnMfQoEZNg",
  "key7": "cJbrerAPTa66TvYePW8z6esVoHn8yh1GMxcxVbWSqTagr3kL4WK3kajV69hZ14PEkWzB7FKbzUR3TRW8SWYC64o",
  "key8": "47R6f1gyn61xVq5FaVGrvCEVirWFWA1z6wCpYRxNdeCVZ1abwSRTe7nmprdvy81WmFRDPeQfJeDre8LMNxLFMLhj",
  "key9": "5R5dbWTrZFgKvgvg7abhUEhX85PQJoaVGHb4W8TrGTed2w7zzTpFYdHWorGdKfgse9JHYSQaBH4g6dPLoW5RYZQh",
  "key10": "3jVmcx3Gvh4vJLZFBeAThs4cwxGqZkEnsZMV9jHsJm4YWWta7QiFpKGSyvUqqmrygongjSm2aNSCDj2yoCjCs3Wf",
  "key11": "5n2ZJ96PFjD1Tf3261VWTyb3nKsqRnAo72LDWaD1nFM9Ga6cYd79zKohdu4AenuBH9sXD5eoCDfvUDtL6uadF65N",
  "key12": "2KEsE6ABu1eKsGL8wHBBWKSkaqJWJcX4C6vaapCw8ut9Ck21yVL3H7gCGQzfuWw9s2JYoG1yifHRYiH72P1trUgz",
  "key13": "62RsBy1AAFKLa4S9hKavEej95XJ7oJ1ESxc7gMvZJhRCVGAHtNVUF42WMrVi25tA62tFE4XtprFBxBt2UWPwZwmH",
  "key14": "JQhUxFYxWXLk6FtBYWXUSmhVup9e1gmHGt5HJBsEdEKVVgZbAaSsRsYGLHnw5cxAakweaKHNtrUEkLfFSN9iAgF",
  "key15": "37VCKDkiYbipmVqSQ3FgFjDSXMtabTgJB3btsYpHrv7JXLW5XG7LmckD6tW7ym8kQHUgUBZcYCZfC2Dhg9hCitAU",
  "key16": "555bixezHZzewmTTabL9fz3yBvq8TBMR8TYGS1f9nNoP1WTAS2zv68Rtek13mELcTTRYh6qpuE7Z8PDebLWDehsJ",
  "key17": "5ZTgV3rxyxtYKhX4RKfWE1iPh3TUWKavTfoHGbnPBeQQq6nJjuVJV2msaKkSYEbfRxn7KqTj9kug73JnEho7x32e",
  "key18": "2eJmNA2ScGBA7RSPm3GYZcFXcS5YhJkXmPDPQHuz4ixKUP2kYZe8EJstAYp6Q96NYv2EC7toaJMuetq55Loa3Wui",
  "key19": "55DVdh7qxkukBBPADeNYwoKWZothipX6j2qYzvr8bEKNxgYY4qWKTZTKv61ZyxdBnPd6uan6J429KvHM7xmMuvDy",
  "key20": "4Zu6URUG8eHeKkdEE4rjKR8U8xFERiQUq6QDfJB9vfabmXg9GGzPi4TUs9VQg1KnLKoxUX6msDbsHax5xUY7qxQp",
  "key21": "5CjCXGXy5GnaS15sRPpA2qNGBvXRoibBpfitqkaNYmJ9eqKMEQbMgxnP3jUEnhwbt4iEqeAF4BSjMmhyCJ1v6CjM",
  "key22": "4tfy7Bs5Uo7Gkvbwpf5jchw3jinmcrRVkEuS3uCQrwjvxZdaM6nDr8DsWYXBm3iMDr8KkhgwuDBM5L4CJd7kvQca",
  "key23": "5y2bqBae5qwjWCbKWTU89hCYCLMMcA3hgywpFYjUdEhSGaouqKECh7Fg6G44UgkLFaaXu2Twtow1U1rmNQsthAQK",
  "key24": "224DbzMqSYnoFgS24wppvqvTaM3vtEpKfVAEMQx3zgKPZZQudhPgQh1iryeSoua3J87Z6G3nGbLSJJRCA53pLRY4",
  "key25": "4GpHwvh2AiYrwfkPrLeegbpXrPXojN55aNQCq596L1kAwp9TS7GEmYz4vmxSbdmcB1GVQYkAubwUTGFrph7HByxj",
  "key26": "57cppLbfjBVBqAsLMiiNBqUSLaSDvhR2R52zcdwQKNsWSmsZnDMmDrhC4MELtX5Xr6y1BU5ooqXBuSigTm9NzZpP",
  "key27": "NYFgxJwNpwVD2raVvA8LjZ2DRVKNgSPBNKgk4aQUzyy2SPYprLkUq22DmSdfmX29BUpz1UHXnFhyELfwn51Zguh",
  "key28": "PPW5M3sCNnb3rDcV69M6Nf8fdVaWkf8oJFQUYHpyRVGPDN2vDQ2Jj7aVnnkC3mZ42E2M4UpEaVnxg7tVzcurSZX",
  "key29": "j8xc1RUMFcjSWatNrurhQL3XzgChYXoNjeqNSEpnHj9v9vVTRoPQ1mKQUvQ4HMAuZEtMePBUrz5TiakYQftsYwp",
  "key30": "5rNTAQjM6msgEqTe6MkKPBggTBxcFh9z4iL7HCS91b9xbPWm8Hgo4UW4xTfuewTukdM91zS9oe2LtXCfrDwj2gyL",
  "key31": "3B4RtifVSiBfT544mPngU3RAChon249cmApyWvPtmfuBtqaViZCbSNyFjs82ZqrY6tJ8UK5vp95AB22a6pfuE12X",
  "key32": "52Vv5yTZB7HpNDPjwEbpT9Kf7xANoab4499Q42QQyq4P6aANRC4od7LxMwu6nvHv2PwjU6rhZKEWf5LoXDGu1c33",
  "key33": "3XkbgHWcBUC9srcgYgGZ7kHG6vy64hc7YDtEb9gzKQkdFTZRAeY3wVn9t5Q96WefqHvQLG5w8j8YmGJr568hJWz9",
  "key34": "3Q3Nyj5ytFVfYAgyKrPxbscx2u7hYN4KFDoNTPAfqydD6x7Zf3sDGKD4HhxBcaL5S1LwYB6rBwevGzwCNWtDCvb4",
  "key35": "4kCcoHigL7dwBUxt593vyw6buZty5zCdxt9pCEkh4tWmn6DWfRr6gkNE729yvWjzJQM4VtCGyyYsLWBPLBBjusHw",
  "key36": "39EvpD5HbawhRNEEoSSm2hhXZGkh3trkKLqDX3eU5TiUC11GR8zYLQQeWcT4MqYTp8HMGrBbGaFKrsJzadSE491G",
  "key37": "5YfoLpMta1EJZmKKpPWJuj5XznAiF6HoviEMjcZZXr5yeHPF3XPYEfVjF8biBjJgBCrbJEkx7kBa35J2tU3RaoBE",
  "key38": "42rnWdaAdbsghejzDPvdYeWu4YuTtaSjGCuJmP8VjeS4Kp9rqrSwQ1iExbJkxQBqsqmqbdJ9JFVsSzdRRahxoCpu",
  "key39": "2f9zENyGS6JKuDnHzQYNhmKmoKHiLcN2c8aTfu2M2hKjNTFTBifnHyAmXHFRaaVG71xMoVKiSE1rMk7ExAZFyAyZ",
  "key40": "8XbnHHKTeSYN3baqQTcEFmFvZTWQh49DNMAHfHXqb5SqdbbdbcMSfA4eryHafaxq4FJSdWM3ePpYC4P81GqfzTr",
  "key41": "3FdvDXaLo3HpnB8YnauxuL6PKAkikcewj86DT4dtRUtTrXd4pw4BTDmubsbTcLJCf9cYtozJ5B2SpG5wUhaCgxtt",
  "key42": "RsBNf9t3cy6yRr6GYLtMBcPStz48dcuhFYxEbMAHnmczeXmKoMeoBn65p2M4sAuWDHTZbJj5yeBkC9LXxL7vAhn",
  "key43": "4jFguXc534mtQLyRLWn5VAQdewiJzcMmiD52Vbd37qdWiM22A4Hv7QJVv3zwghREYYpS1B5QRyFMHKWoekbV8r31",
  "key44": "3WNgDJkDaXzrXRaWAK1PoppphxnR5d1385mmroU4GvYk5fQTSNkefDrCiZSmJee96fbbtd9fKshd26Lg1aWhK8QH",
  "key45": "5od1dVV92CTwMAfPmUFbu3e8wtMCF3cmZEm6juPuasFn8zYgmjgDKdyjL4w54hdQS94tRBgh2AcGQD6X7EdYBkTV"
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
