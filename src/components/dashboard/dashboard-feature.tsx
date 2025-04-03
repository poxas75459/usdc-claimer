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
    "4cZ473ht8fTpSKQox8fxXP1uGgiL2ibcn5YRBo98pxQDQvuPv3iUqdJC6B2mNcVjDjmxfiFrwv2Cmtd9w5dttufU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cPV2kTgZkYKNXSrrjhQUHbyeTfwxvYcMLvpSn23Uw8a8wJtFSHQ32fe2uzpSsPY5c9BUe3XhbkkGRDTsF3CyFCN",
  "key1": "2j5fCdY3AbU1dEhGm485auqkZBAeqzPzHydYmmF4coxbEaB5tc8JeYsnQfXAPyu4CRJ1wDHW3PJCZ51bswKCaZJx",
  "key2": "5ppgXuZufjgCGrZ2fHdnAi5nKVtYgJHuoJ35miVaBQeuqVEgYx5QBZbVgqi6mVN6k2Lp4AUNUfhWT8aY4EDHekPi",
  "key3": "2XZKmnA7i2ZU23JsCtWiWtpWnsmAQN7cTLYiT8HKvsm8YMFjkkeJJZi8p6ewEDFyr1D5Qu39oJnGh7wPEoq9Nvrv",
  "key4": "4fRzxANTpBfCf128MNpxVZ9sFivvDnfYXJvKeFmjVcjnL1ptaiSg14nAzZkS6T5r8qX1B2y3V3i285GYMgKaYZ6k",
  "key5": "y8cuWyoCJGiL36jnDKKHNdVdTGixhqS6VcdeyKNkk4d6cxLGc9dEbPkuyLR9UgM2sDYwF8E68bfMF7KdGrDeak3",
  "key6": "3TpZYvTQXB6ckbrrUdjtk3AgyqiLAZ47CgLGRUFhaFJn9g5ALZQRmqKrMWtUoNWbQJNUBGhM9bxPaqkXTWa6D2KY",
  "key7": "EakQGxFT8bLaMmSpfAX9JXS6Hm8XJViQDrQ5Kf8dYoaQoUrk8XhLM74JYegqTBBkukvK3NyiQqfsMXZJt6RRheW",
  "key8": "2wif4NqLSsEwmrqrxVPzKPanL4ukTax79V9RCKnHjAbenUbGjeYzLBzgfrWviLdBKqTzDYSN7EYDDUFLf6czG7LZ",
  "key9": "vaA2nK6piQHyxLr2nUQ45VseWu6b6Sy75v4ZgCKFchvNrCprpo33yqs1afxnDU95FWEZcDmVd1fP7gDip3Qc2AQ",
  "key10": "4wHWKs6mWMM4XR3A8wZEdvmJ37dU7gc9HwfDs3Yvk9Ms9MUPJbhxv9Bf483jXqHE7SxTKEajqNvaLronRkJ7QtHu",
  "key11": "2NXhVByLHb7bTGCQwH5T6syquRtcyFbLiXYy6SKRdUhaRiciBJt8PM1ZhR4EbuinFbc4CU4GeMFd89QNoHBjgJJT",
  "key12": "28LsPrU6Wydpx1maLesPtEeHQTTVihuDxG4asej87hp7nyDQu7ojXZrsZGoZWCveMwkC4uG8ZyKeU8UdoQVXH24Y",
  "key13": "4aut1WcJzC6uLPvor9P7j8AWtd72wiAjp7LNUvFSZYqpCAknUykDF3KWaXfd9g8k54yHQnGbcJtGHwJWRmDe4maz",
  "key14": "2nQthwFZbujEmRbQHet6ExyWy6D6LRt6o93BSjZYAnHBQi37UsxWUCbcGWNySHLwWrDD2qK1RCkNn6XGXho8uaZ8",
  "key15": "5eEgqn7XgKMpqXdURkJVR5TufqkY28dmAksoQ5MbfuuMhgpwL4qUPje8fJEZCjKgThVg4ArJsE71xijJ9fNDYxhM",
  "key16": "2P6fPoisurwS4CwHcKoophj3LdbxyvN68Ao233LgVwt1BxWraoZQUm1ahF8cy2m4e2EzNzEAqoP5Srnnn5xF2TRh",
  "key17": "LaNkn59BijU4PS3E7WTkmt4UCLGxc7pHfHzZmSMeHbyb4FNXuu7YMcvLwMpaFMN1sZon8UPZWQ3bX51u9wa9ReV",
  "key18": "38qnpr7N9vWgkmAAAMAZ7y68xFBQkVdX39aLeUUcXKgCesGbMv6N5HskPtKp2fXD1xGW3yvw5pvrDkLPCP67ruvo",
  "key19": "5GMw5rC1aieG3Jwv2UsJibSm5UNZTw248jVZiZvwGLfwe1rTgWDk4MAybbVvc6JPMs3zz1Da7PGhGF4h6LAhEGcS",
  "key20": "3U9AupZ8CBRdLUcxnSyAG4ao3AKgnoJkfGwwnv54M5f4uRCYEanMK8Qms3SB8wSkyA11QYwZCPtqEoKaMszVgzPg",
  "key21": "3UvPVr6MdAMWKKRQi6sncX9vNUWCpxaXhHtjUsc728GBGnE4WnmHCCgTE9SnwjEvDwF4pRPsFuqxs4eZ3166ramX",
  "key22": "3FVbVh9FatWDnXwtQFT7FXwvU1B7cZrSdtyZc76UBb9n9oJ8uvfZq8gQkEJxcMbqV5AMzSTAFKSPBRG72e4Ea2pn",
  "key23": "Jpg88DG5ZBZynR2UHokD5YUdaDY6xu34JhRMDbeSxAwLHQdheaDzHfJ3qZFVg8YjCxG4hk8jtSCGgAqAwv18dgZ",
  "key24": "5coQxAtGJhGva9A1iAwQZk3L4XC2s62D2Xkq1GFaVu5crRvzmy6eWWQ3yosxPyV5sdhraCoegHDXFunheuaYvvTT",
  "key25": "3dT3bM42rBid5f2omMKWvJ3ahnMjjADuVdpgVERH3zy8eefYRa1NXn8f15gBq1xDSic7Qy4BWBMtfEYzLUi1VNBW",
  "key26": "5awAxTpSJNMKUXF4swK2Dymw2iynXHJEpJDXp6NdfdVwZGP8SZJe9ZpUtntLHqy1aCEGKLoNoYAuJqYoKBPHVZFP",
  "key27": "1cZ5ymbyYQaQhvrsTbStycSZzqWzUW2PiNEuP14V7C2n89Ydo6SoUfsyirctqiiUoEjDXkha4hzi9uF7AX8y3dR",
  "key28": "2neyucvwHRoYrMwcGxR5xALZDS14jNb69AhyJ4y6EPpr22ijipaXfNXm1DkJioQrDswNQTw7BTfThg2kzooj35xn",
  "key29": "2r4XsknoCbvHfC6B2bTvHxEQBLecwDMhMyp22DYpFxurwepwa8435pnLzN9rto5oHbRAmrQShQJsK1PkrgYZ7Va",
  "key30": "4kxg6X3DJouT6jXfbMg1EPbseUeC5EHThx1z5AdRbSjCd7cLnhD9mKiHXmY7H4nmwuLQieCxW9WreLvKNUt7k8YH",
  "key31": "2t1Hdh6oBGt8PG7He8A5nSvcXKSU38s78P4kCy1dEXoXvqMSAyiY6Lpkv3sZUCgu5KPtdB7EC1MVHQ5VKiRLAME5",
  "key32": "2mNVK8GqwkzysPi9smiACSSsMkapg53QpsKmQKM85cQKPEuGYr1sEZsHY4c232Xm4bdtKDrwwxC54PPLcKWgzqSM",
  "key33": "3CwNdFZMgTaqKQZTJkW2FDShnnS4PriPSMJt9LkXrdJh4wEd8iZrjEeCEwfkoerT4CUba43qFdLSw5e87ys9vDSJ",
  "key34": "G6BtpUkpoSpDstk8D2M7YrF57GWnSCXufm34sh9f3fYB52SemWivy265gZRYKQRLWsddo2fhUfhuVwBmvjL3TBo",
  "key35": "2i4aKCQxSLoENuLNW6GEcnztMV43oFqy1dsjh5g1aJEX6Ahx2weSXVoTcSK9Vni6heypm5dDjVzMxhuSwXUBEYfd",
  "key36": "2TbB9ySss2xicCHwqbXAfK5ff775eVtNRY16DobE9ASuJatH1HxJfWdwFJXfkU5Ckv5wc1UmWkAUQ1TfBJUK46Ja",
  "key37": "2SF7oAb6XVXKyZKd3ADiv7TsaE9VhXPtW7aenUhRvMCd8QFJYoK3BUKBxAvydGefMQkdGPLVwNL17KmLyHChpAcE",
  "key38": "WUD29z9UbwkhJwXNVdE5m2Xp2EX4EhXxxT56iHXzGgAY5tBLvVAaV8EuPe2xXDmA1EPKrBPZX2qewSKB4EZDDmT",
  "key39": "2XAVRgdcPhaKQ5fHUoxpi82jcdswKe67wo6eGgdTi3fY9Fv5VMzZ6vjn2zpKTNFV39FDeQqBSJ4YZyfcPHGVtz69"
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
