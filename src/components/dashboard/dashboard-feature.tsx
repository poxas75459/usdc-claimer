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
    "4WVNbEnAQM4ttnG4wyb7kMiHmqYivmcNugF7p4huqvg8k7Jv85zTtM9GznQtfc8qLNNQCHueZvCicD1TzTCwbze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BoWJGnfSP9hBspxnuAhGQihU1WmhYgHAJgM8PJPtTBEQJZ5bQ4h7XyY7uAFmc8cybGS5FQo8WmQbQc7BCAdvjfQ",
  "key1": "5QDDfRLPEtLSwGmQ8oi4ktuXhWwzWa4qiXFGbo9oxDAX9ELQjyQc78qKj6wnMzPwTwz8E7Y31L2WAoq2MAddjHe4",
  "key2": "5af69PDvKYB2hHLWU72dD82aNEoHdkemQesN3ePzXZXSGkjrQmZ15iSankJNeEKwwxS9tcASzriGjaQ41fPZ7UjB",
  "key3": "4DMhZVrPvxnLaFJLrsxZhustHZe3iJRA59FVYxbUUzLhAdA9WDKaBwK79z7aJMv3Znj1f6eH4SxUXcNUyk4XLPQp",
  "key4": "5bQY6fs6VWUL3SuWykD5T5PA2b5bCSaUYAWTvBBHQyYixAUxjxcxxoDugDPvEPm4Qaxr2DFx2YJBRqZEYePo2WMP",
  "key5": "phRLz19JgvC2cHakDigvd95gQREdnQ39tjDtf7dhqJMmNfhZJkUtbzSRr7vYiVdMXb8aAgpPDT5XK6unQet9aTz",
  "key6": "2DpGhCrF6WNxJxrd8GDP1bPyzaFr95cGw2sYnzbheSbQ9wicBXeVSNWC6p7M17hFoSHeJMa1jRsJyovE5z6tQP4S",
  "key7": "3C1R7fFDA4Qe6XcFJ16cha4jTAnQqsAJKswxgDL5twdvSKq7h1ei94UTNRYwkBmYnwiDruNJcHzJWvvBbDhxnbC7",
  "key8": "3Xnb5qbsPHRjPSK6N6KBcT6jaU8SAQPVs9aFHddcjn6pw49qAAebhpU3V5ajivSwbq2jtbJdh3uF2BkWbXvCN9Az",
  "key9": "3ismp63V4ckeUz4nuyJjkz8RwRezdET7sEP5xdryF6DoiXh3x3SyUJx6LAfbSDYXxKrLmNHwt1PjcQ1NfkwVVeAr",
  "key10": "54UmbPX5CbM81SKXKAu1UcbS3kfoZECJyRQmupbFHa5hySwYTmdrRE6jm3ERBNRFg6R4Ari2GvBsBQ5CgKYKA929",
  "key11": "5nrzjZNhbPcnJGmcZCwNC7TyQmx5YGhLgY2hX3MrmMPJqu7vvnHmpQ4rjn4CLhn7YyC9Rb9LjzHx5SHSagPfNKrL",
  "key12": "51Dvw3sxAKq3B7qCtNBStaPtFxFVXvJffcVnaoc8EdkJyhksSGpYihLuinzRX1e61BV7AR3MBJE9d538qxWzQXwE",
  "key13": "x74yM6ruYhtPpnWYXtpyfVwRrbdS45YMho5X1V6CZC3SPxxdZC9MYysyaEXMfLBw8FFLfeDE6ojGJdnTeVqA51n",
  "key14": "2sX6veoWRW1hY2DBpZPgfnmxo8jH1mYpFXNRDsuQntNstV3FAvULds9Ujf1kkNUNPB1JxtvKDNTzziyN8rm4yHJV",
  "key15": "aJeJbPpxwrsrrJPNWvG85NRFWGQUFyrSu41oJRsy7n6tvbQEZ7zMRA2CzXjxinC6EMcq5WdbDxhtLGhd9gvURNC",
  "key16": "XiunMWw41zxU92vW3x4heMNtwtFH9B4ufL1VhWH5mj8cqDFkGfd1P9EKnrcrCZ8TrEXxAUnPSQwzxQhEyq3xoWZ",
  "key17": "5h9moyY9VaR2J6TLgSbBc96Pb9zQuFZJyNorjYxpFzyBEAxXc2CPLirh6CpcgsapksVZingP6CLbYcAL5e9BMWQf",
  "key18": "2Hm4r2FaE9qRoZZTNWC6dUAfkoRr1XWF7VHS3Zpg63UNKWzjUC15oHcZnbFANq94y5xjJknqzr8wmAPdsJmAZRso",
  "key19": "4ytuyNYXVYkf4Gk6XRUQy2jxtKguMqHGQRG7uS9RinWNg6jDY6webvYwKdSDj8X4rW6DDqFeiQMhvqucSxJD4UPY",
  "key20": "5P5MGuEGbKRusUVReG9yaX2khQM5bxDz49wPHkNuL6UdY1xNFarNuWhAqKmT3LBh7dqqAxZHhCZ4QNX3r6suTSbK",
  "key21": "3qz6Gk3Uy9UYRMU2FLAxikJok25im7BSmTdg32j3svX8wjVcmpbYmF2cb1DnJcJRZDVhtRkE5xwRG1wsuV9LoJqL",
  "key22": "3tuXwsfXxN3Lx1XNkb7uw2Lz1DPhobLhUFThzG1DZmCqokvyTW6rdgAgkBBQHGeKY7FySWm8QRFzNfMFbdFbdnsp",
  "key23": "5voyPe4vd38o1prizwTnofpcxYVf6Jh6QiNoLxHv4h9PHCodJ497zD58ke6oY9ebXV6Rx3NwpeLHWsYpHHzdzC6o",
  "key24": "5du7H1SyoRBcScMsXy4EC83NtWD4ovULyfmuyDEAEfti14HDW31jX9Q87AT59tBHxUDb6j4CCCj1NRCyYsBepLfD",
  "key25": "34YvmnxW8dSR4Sqj1xX9JoTS8hVp87NEkkSTqs28cwsroTMXXVD4bd3vJw4ZgRYctYMfSwPjhognXFALAxiFrDGd",
  "key26": "2HuESmu25KtAbicCJ4X7nfHLb3Ae9djXz85cWNHwQWVwLuGGVSGaie1E5encmSfywJ2BfvXoAspABMG2azc5oUcR",
  "key27": "5ZiDHrBxgAwkS22NoLWCi7RsePq73uxtLcuxkrjZ5uQYNH5yGd2VAamU47nT246CqufhZTMMPoBHoZ8G2kDdsGbX",
  "key28": "dxzY9j2n2a28D9sZtEdwtC5qFLqEyLYQ51Q8q3HbRwKSwLVD7YBMKYFXMFTCKrWq614duYQNdrK2sxg6cz6Xsx5",
  "key29": "2823GVVxx53xuckgQXwkBkYWYuDB2Z9zzoBmMA1YSkUcsqVghrfR3PFaXpnBQ45ZEtCGEpS1Z3AXSmuQbouQFKSo",
  "key30": "31BkvwBonbAmkNLzm5r7F2vpPTKj4NxyJmHKDSE6M33QMJb1Bs2GHaAd8ymw2v9Gqm8v81w7UR2kEjVtEkgMo4YQ",
  "key31": "2nKCZWPmjnCktUx57SyxTQhDFevpVD9TN2TCxzHYB4ce99hjEFsHxVTVL2JG3dKkcC7EGRZ1ucnk4AF41vLUm24T",
  "key32": "2QiVJxfE5FxjmvNMrQW7maJKph1jwUw26EUnqvzgVNVpRTMSbfaLPnE7roy1ArhpLxLGWbrHEDUmyBeoKyg9VQ1J",
  "key33": "2gyzfVH9JLVWQPsFxN3TEb9fyFNM69b23vSHgkp7ycYjmeFK6pmh11CCPyAJhMbR3UAaS54j3HgBxgPivYhJtHAs",
  "key34": "46J94dyao2sP8yGLnczocuQtXkWEHqvKNsZNqf9vRrNN9vn8GmjgKvqMGZ5LmVymU3nxcz93TYKNSmhwu6bwPECu",
  "key35": "2338BLQeGDLjQWpA8VChzbwzTJ75sTKkqLd5HeC6L8KhMy7MkoeDj3S6VvY7neTV6t32q2kauusCgVy8sTazUofS",
  "key36": "4Pztzntc2hwJfHPdeqFxsEt66fhR94S9eZxLNfBn99pKLiNJ5i21knR17P6sg53zmh7BkMErQKF6RLdXP7K7FBBM",
  "key37": "5X8voK1ZvzeM6Gtwwt5WQyKDD2kL9GtPiuKUjzFSrLHuZe5GaHs96ei1zTzrsvPiNtUkn7eQVKLGF3kCDQKWwGJZ",
  "key38": "4R469Y8isW64atYsrm2eAyWLrenRVj7GfAofEazZdsXSxQvymJXvaviSD37Nq7s7qcLaCp1U3aBRwJj6BvJskNik",
  "key39": "38zaazxUfWStJswJrXMweAwuqm5cxDsKCPt75BipffuziJZfwTA6JevqfrUKpgXex8vSPZxEkX1qhVm12qKNYST1",
  "key40": "3gDweo4MX4iAMGPeSCHpPEMFCYuwUrmjd2by1NZV2iF7558HBUtzDpNQ4ic4B7iNK9adzkwG5y6W24a7Lihdavt1",
  "key41": "MCfFnfyqC2vfcVVqiY19ioZa8ohzhu4UjJpVXxvsA6ex8Jp22mHcJv5CjMswNs3htqghdpu3HVLp3HTVv8k25Qw",
  "key42": "34oHk2EY92Ysog6Kmy9Y47s8owamu6VKsL3ksXcKcCzduFgVkPPKr4TsqYu8LTd6sZ5cYT93a2awGxF7Hr21easC",
  "key43": "2ghUnLLPLo8c8rEwP4LCUKXdE2w9KRHCrcqjKNrJAkZQdt9xF3EULP1NLSUMDfeJvRjmjmzdCQUiZmjnrJaKANHN",
  "key44": "52YsH7xmcSAEgx5Djy2fPgAYHYspJcBYG8y7v3tzqCFSfzWDXMGgPxwNwRRswRnyqPHeXFuUy9V2FAToSiCUmGyJ",
  "key45": "3UHMic59N69bBKQuQkf2oZEmr4KpzXdwvQtRwqEwYaA3wsnD5x3FvK27Pus16ZB4FtM9bSAfVVdQZgmSky5xmuoa",
  "key46": "48MUVAN92yRbi1SGrCXBBhkBWNvQkUrSJgHHt47je6t848zJbL8QmfeBRLDGrzWoxe8DwrecSsTRX2fESVyBww9e"
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
