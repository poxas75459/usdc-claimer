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
    "5un7JHHyhcqJXv7oRsw4kqyF3MjbHf2bTquq5pu68m8DP7yRSuZYrNifyU67mf61C5tdvNcbXbYSonpQ9qRSngUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QCA22DFqmLiegoe7Uqqv5iDKVQQVUdLq18RjtdNMiDahKQewsZ8UaJRG6iz8VUJvVwcPtCg7SboBjjFG688HZv7",
  "key1": "istkQzcmEyjRZuhcaRaR9SpxGz9rC8DRFBBBW1YVDtABbzZ2Ei9S7fBuZhBZ7UCbRPEzosy7dff1p5potKrrzpa",
  "key2": "4YbEEn5xLwHe5tSfoWw7SFsEUwE868bshccNEabKBEPPukt6NAJfHM9LjNwceqjYGqMnPGSwyXB6or2ehzsbcdzd",
  "key3": "5vD78kCGtXn3NkvdDNHUEVHr8P1w5ErAMoQ6N3aHeQ59uvzRcEihVxMjSHWWffwbgVjez1HKkkToJno6QuWmk7kX",
  "key4": "2SGVBfemZapZMQTmvLEgi1KRohhJMuK9jVgqYjvayBuMxD9HTtdqvfC5AyjieTkrCPEGBZKBjHQAPyo9rh9jPqR9",
  "key5": "3SU5DTV47S86znnBnwHFdCjuSf3AjhSH9JqW4SacMupAviFHXyZ7ti9w3gjSLyp4AxBdhR9KUMDU2fK2WGDp4LF3",
  "key6": "3yki2DyAG13xJBCfjAdUuzcT4VsbjRhdprJkputo6LF2gz3MswekTwSHKZqqwHPkaKP7e5Kr535f3YSB52cP8zzS",
  "key7": "4XqMmptUmeudKad7k5EK6ibEPgceJfZZ2brTU5h9fhpBW186hj9GpXm85Qd8WjXinxjZvwAvKDPvwQ4YZ8AHWNJA",
  "key8": "5DSbTWFF3PoMUe3cCHBc9W69nH2T2T7he814oGUaLqCxXYiUpWuWjLpHvgHkdhJHTVXeSEy8wgGhVY3FjNR2EogT",
  "key9": "4T2uipJ2GyojWsud2tsZ5ANoh5ErNHgZFU2CGk8GQeQsgxAb8HRTsj4Kg75hncMm265yJP61cg6L5gpAhuhpELS9",
  "key10": "3g9mhcWwBHUCaZfxbGGoGfJPXeHDAV5qy7YdQbVa7ZEVM3FeQSNMgavYRPjMQknqY6Hp1KUxb9PGGbhH1kUBBC1E",
  "key11": "4kz9VX66Nr7MxMZQPGjRVaS7ovwmgvTZbsP7y4osqcDuPWWZspBCMhnwqGBVbz25d1tSGXFFAK7VCD5xJoP6WsGW",
  "key12": "26hWxBxMUh6G56mqBi8veSNsq9MkdHciG8Cgf7M5L8NqEapE4JKVHM1ReZNsZr7BXSDeA5ieQdYtGyCo59nbfP8L",
  "key13": "4XNvxL7eyU1orrA3VAXK6RgmjAYY1h7c1y4MGUfZw9BjVcbRELfD7gqJNkZdnMahpKgG2FVuYKBVNKP53RaaYY1X",
  "key14": "2N8hpdoWHKRWTxaotszLw7BqzcUoUKB92dSinJ1ETJ7DJbdqtBxRKbXp4DsWq7ZKyrEkv6dFcDLKiZTVHWJ2HFGX",
  "key15": "5CHw9SeHFaudxwWgwCYd5Mry4TccsYZZaqF3SgRvVUnJgd9fNRUzPGTruj5BdCbipo7aaA2LqS6R1PiVza3nk74m",
  "key16": "2ESjJbo6EAi41mHicifbCVqN5Xx3MkjEfy52iEYuH3GqmR6QPMG2c6iopLM79sBpFciNdiT3iHSPjtwP88UVZnDN",
  "key17": "2nE71PSWBBWBq1fEq8NWfoU9i8YA7yV4HVK6WnGjXQLND55YZaSXr4fQ46YswbRdb4xYJpsYjF4RxD6xw9wgbtFP",
  "key18": "wEkUFuNLsoM8EhH6LMg4d2Pbbhzv11LCmy5oY5sntPYZmqjUyPPfi38UaaH1jWWAqLnVVgCC99JrRSNDPC7iDiu",
  "key19": "2X232Rv8xAAmATshQieRcxcK1QaGrAXvsdRH5UkGR5cuUpHMvmFAEGSLdGowomLHzHgTd5mTCXN4gvMcMx1hdAPM",
  "key20": "4Jcj9ayf693YoUTsh87S17Ks9nsnfh7v7jkNrjq42LxMAijCxg1BmB7rAzCRRRzuxa3eZjReru63b8gYZbeZKjEw",
  "key21": "3oWazQpXCnSndHkRmDoDKQbLdt61bu5KEYmWvsvjXucW5tPK2gLW8t9iwBmKayTEuDWTWd6byMVeufTrCLh78nUQ",
  "key22": "5FctHdLTMmwaHY5YWg6nRp6VihCFjwK5U4bdMgTqryB81aAhWprogMYHxY4mSEstY3K3Ptb2dmjRV5iE6B7pDh2w",
  "key23": "35yaUZ7NGqN5AaDfVS3V7ap9dqobGrkRxt5vx6RfEJS9EaMDTt3ZzEBLvMoHADH41JWB7MHZtHUxL2GgLnsHGDP",
  "key24": "62BwW1axmGQTgJWLaZVsnQu8zTDghP8bFuAVEWrvse7ar5B4aywU7GwXXVKqnjLxtQ6iWNytKsZ3iyBApFui7L7s",
  "key25": "5hjZsnnmUwyaEVJR5PRVvmqQqPEVktkEDvVJZaSsh2NrwGSRTRAPFWEhHmPFG2oq6XfMXaww6fFPpsza4Zv9HKNs",
  "key26": "BZWyeU8pcdm2u2ok6TZFTVU9Qq8ahxWiNpJpSPGTzcso95DbuxeE5qPN88hUzShgNAsCmWxF54QKvaFZwcskpTH",
  "key27": "BduHPt2tRdRr35SJyDQFT16q2g1vF8UfbqqeCpXB8tWpNHxe6pB7JrrNzWnWLsYM3tPNoYR4tqBhyWYevyRJWZw",
  "key28": "3SNY6vpXZTcPjRCS6CHcThCRFQbvuTFU67qS98iJ4vThV381JchXiaup6riYR5qdJ6pQAEWM3kni6j8gxxfYfhtf",
  "key29": "5HQi8AKKMG6W2N7zF7rMTKC8WeEpk8LHQ9QREZLz3PdvgbovmD33uiUJqRLUkH5mWECXzGKni27DercJVjjTe6UB",
  "key30": "4CfxQuYSPqcFCb7ebUKDiX3shuyook9R1n6fqh8RukRdBKAFM5mb3v72G3W1ejaba2oJ3aHboMvpytxRHVg59uyv",
  "key31": "i9AgVjer9VBfx1TykEhtUiyBwadREzyTr2ZM15i6yw8xs342CVCQDd8ZYmm17Q7GGtwad6ENzVCwnXds9KagXcW",
  "key32": "2J8pJnKGN3VW5bTWdC4LMzuUHYbNBbBX9LHNh1UKkgzUxpCvG5fcfqXzq2BnLbk5GMmf5Sdsyzmsi9T7u7rHRBfW",
  "key33": "3HLJLLPYC9UVZa1e9bhEP88Zw3f6BH4vmGhkwqdtHNksmAakeSFZEtN2ZSWkvWgabf6cxJkPc7kfx5W9pQUabF5e",
  "key34": "5nszrz3uM6Zu6B3T7LcrtYTgWXhNhduraYXQazd2YEGFfTL28sY9aVGhbknqinS2a9xVa64sG389EsUhiy7U4UPB",
  "key35": "afGpZ5SHtMRGE67tJBFrr9ysJU6tTPJVkFRmzT8aoSQhvi49fAMXFhutuoSHEEvsQzEPkKBScyktQ57AzNmNzDY",
  "key36": "5AFkqox4WuweQ4wABs8ri3j3rn8oJwqyyg6mXRq8MwRMVo8LtwHcZtmyfmQCgwQakMytzMGKUMsbEWV8AMTYaqvp",
  "key37": "4h3joFJbwa6BBGfsC7TVHQTmb5FKnJo5kFm4HBuwocvGTEut2w9CQHQKob6MFsx9mUEKhymdVGWvHxjnwxSJJ26J",
  "key38": "4awZQQaDRfGnLrLrhnKML9QzvJCJYgaQbveyoDycW9C5kdeQ7WGgRG1XjqTiAZRWD3C7dbZLkWbeZvCVnUAbQwfu",
  "key39": "2LzZEWAxDzr2ax98mL18LFEpG2uDXi6Xdu4sNkPJQbCEeNyKnbPtM9k23DGxyXeopk6dgoXr2dupnxUErtFBEP9j",
  "key40": "ovX7rT1Lg2W5Z56zv2bmAnS6XjvZ6avNGbRfxtLS62JguhtZqCCQSnCdy1ZaMAMwaSJjGLV7cBipiDzrCL5FvNA",
  "key41": "HH3kP7cmonWzEhBmnvnkK7eC9LNpEkTb1JugUwx8B31zYxyi5Be3QMX9p3oT8octWBuGFPFSaDxrtRY8hgiqrY1",
  "key42": "2Phh6HYZ5gzun6N17zEUoh8GdAkyDNAYWTcUWsG6GNnvddDH1FEZozn3Xq3zUnqTeMGaFnDunvtg9dPnHVjCWYiT",
  "key43": "3SCAWWVJPH1jJpQ8T4LZcrMJzGEas46v1xXJbKpqXfKe9dfWXobnjkwq8SuXdfTpDPYkLv6zch2QGggfWE2KzUvt",
  "key44": "2kALRV7q7WzT5B2KdPmVtk8SLCkNb9PUiJnWYXaJUoyLTTtoVYZR5jvMxjQb6pYbp2ZjNEuuosMN1p2Pi7MtA5Gj"
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
