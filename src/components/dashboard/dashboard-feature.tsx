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
    "nkU4ciBXeU8o3KsMzUX1V8YseDXYTzLPWKeeXJiPfhYfscbArWccLw4UHnXBd7UqvgSBdchwurztcq4GevkhVEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ku6wb2knopUfAverDqAnMUeywRxbDLtoBbE1YRNqjrc72QURVtBNmn35JHNudskexKm2UMhbRLKXenFXR7wnU7L",
  "key1": "224YrUpzqsdF9qf4xPUa1hh9VzPfoATNurPjEmWu4rBU6idyeCADTH6uvUaxmwZbaj7uxcmaJNVMQNBFh5a3m1ih",
  "key2": "2rhbq8RfnJveSjZfTyY73DA2HY9SeRbCpad2SVhqsvJL9XGQD8pNb3kbDQi4SvcaredtvxuGtpS54JC6TW82gy4b",
  "key3": "sSJtZYTdDE9zFUczTx7m3Kqf3JYygq7vnxkfXS1GhGqPFG6KEA5cY4M4iuVw284neCMKH41iGU12ozyhAUHmB3i",
  "key4": "4RciJwCpBx2MiA8Y85HqsuyVsRnWmSByH5sGSHNjVQfoGVEGh4t1yVsZVWz3PwDaLCw5KXt6TAwqMQHCkz5AG9zj",
  "key5": "5U1XiHaiGGc1P7x8Yb42mY69H7B6uRde7nUNKsAZrCKfF4KtFZBbonDS5Z1VzXhwJoD8Bx1gSz1vv5Xt8rWygdQb",
  "key6": "2bbZZcvPQFaGYx6i9seHEZ21dooh9XxPXVC6amtW1SWoL22ud6nT1iYmqPt75BNdjpFhkWsM4RzWrKAXxKvYV8PF",
  "key7": "2JmRT4sRW9ZqwsXEe7d3Q8uokf2LBXxB4EDDWhGp9d6vH2bGytDsSnxFCEHzrUHQ77s6ECqi4fq8kDPyTsGtxWgu",
  "key8": "56WrgqQn4US6QhJcySrHXxRcDJdsUBVmZ6DfUBs5D9r6AAmy4wKdnfFswGzCTucAUAirk2Jt29Udtnz9PRYtAXoi",
  "key9": "3uPTSjPQ49kWW9bK4dzRgwwobBu2Q81pLGMV8LmWEUw2Em1o1p3wd27phoMkCebzZGaTc9ADZYxgMA13XpHzygQD",
  "key10": "31y66rat6NxtWfYHTDWHMKAaDB9eMuJpxuE1jve89BUtQ2Nrwh4DzErxHd5vT6Svnr1xvZ3QfRLYLNBhDfbah8Xt",
  "key11": "31fsLBKMGQcrWxrddhFU1DNDQ1oJ5cshKbsjtXuFje5cwxzhoUYSekygGkocVivp9gxABLGun14GBp91P5JqXbKo",
  "key12": "3YAuNBS7d9rnsz8ZPPjcaT4PDzayvvPg9BSKQALbPoVDk451c2QCCfj8pPuNtR78979FqAa3hT88VNgypp1ho5qW",
  "key13": "5FT9a2cRMmw8vgG9ZxdmTXYUk28oNWktD4mmJj6aJmFpNFYRKmbuLd55jYakPdYFfKUuo3skFY5MCwJu4euBDW3J",
  "key14": "4Ua964QCK7zn4DiMxQiFtYZMSQ4d3J7d8XCTi3wPB5io4Upm8AJ3W9NiHsFQww2vA6HumMzTyvT8t6YRdstswvQr",
  "key15": "5g4GPhhudNsoWLvQdRVdK7kK1iYcLqb9JXZSFbv9QN42ksYS1cKcTx8EwZZMn8kgs3Buhh4dw9SD31VwWeoh6sKb",
  "key16": "63roi2MZyE8LFuvgLB5tXZkDFRPKEXYGD5K8VaCwpgjYAFo4AwKtjre6WJFA2vVnauYNiiCSPmNsVZQHkwW1QDvN",
  "key17": "4Tjjj1TdKUKRW7MA7ebzCvMYJYPuUUdYAbmjwSkJqL8dHEGf1pUeiKh7UDThu6JinSynQAQxS5pQW2QGKmMS5Gmy",
  "key18": "3UwdftPX3gmXDw5cG2Jh5V6CvCD1omnJYsDVtwdK7WC4wAGC97Skt7Pt5WaizC2Rea3VnEKevu7uMDh2stGFBcKL",
  "key19": "4DnWj4G4A9r4z6MG4BicKbzEV6bgEkUTHgasQBJsvRipZehcHxis5x52eNzNioHsV9DWc1CWMpZ6YWKMAq6oJ12v",
  "key20": "5Gb14WmkfdmDNsBB3Y4WWRpLf6rCxSdDNWJUet11LPdYbKZy36saNGy9bC8eVqzfM4oySYVjZTSAi4JbzroW7aXw",
  "key21": "3UJ1vvYoT7ZCBfhM2VPVTqqdzPNRkwaFHwQ82vHhpgD5gWqFWqQZ24BvpC2PYnYgwcixCv4BWnNQrn8Eiby3E3Hg",
  "key22": "zqZ3UgwQJ79JRiR6HPrsSX7M9GVYhernHswg8Mzzby61jeqiBUjqkjzQKDkSo3rkp9URQAEbkR5RXXnQ3r5go6s",
  "key23": "z556zxP45gZpDz63iB4sTaAV7iAA17eXuPUnaNWtyHN7ivywjfPMRHa76rsoZMMLxkoSVfxoip7EGDQV6KnHqex",
  "key24": "4BnrphQb3NKVWZv5EgQtogmJvNeY7TZLJ77YNq2wC4CE7j8mGtGHKNF2zQdpigAvnJnAxUvioiXbhAjC9zUg1wKW",
  "key25": "4K7R2us6jDHBw1vYEgXJdixQ4YycXu7eMvjX7ggG8w1FQH59UGPH4HTCkgQ3VYq2F51wqJE7NB9z3P6Yn7JyBobx",
  "key26": "jMupcp8MkKBSzmMmheWjudBTZc1MzaPLHCuMqGsQbmHWLhtkVdES94pRtv2TiPdfcTKoByukWTwde8VNjTjHzy5",
  "key27": "uUQWSrxDpcMdyMhYasbwZt4FEPWQn1kHy8WeZP2MFFNqXRGZQgcrwXfc7N1UPVMAtWGiR6hNi5sEUDN5n8wocxy",
  "key28": "2cdpqxNbYuRPrMmZz2mayoeqyQ83nPBiywR3FzruuzCcEBenTSAWC7V8xCGG96J5v1EToCheRgeteypi6AuEyqHU",
  "key29": "125sEpr8E4pJ7Sj78Rur5aQWrS8MQjgZ9mqBvKMN5cHLuYhDxfjoJWMXc5D5npGSTF9X6vcZbEH9TBmLzzmrF1az",
  "key30": "3gBPtYz8tmhBA6X3HM9GkqJpjQMq6mD6VbAqEN6i9DaNkrMx3ZdESSZ6FakjS3N61f6LdWUYhgZWq8BhNBNvVzJY",
  "key31": "5A2r7ysxQgJx1BEQCBCKW7qyxTRbcGe2DNu1ptmvCij11WZdJDBvqCGWZb6vJUBwgjBnVPi9yjfzQDWgsUpszVRL",
  "key32": "2Z9Mkey4WUndkXkB99jiZxMdc5hALPXFbdyVRuCz9nkEdiuSWxxD64wQPpeRcfMVcjpqMk1xcA6mxu1qHhnd1UKg",
  "key33": "31WUdZMAMTYwA94Te2X48cs4xvRx2kGtAcxq8GVpnt8zPw2YbH5a1LEJsj51qfhyXcHhExBtRSMDfJFxXc7vy5tr",
  "key34": "3m1jDfELzJsmEkrzHwVGSsCeb1fyQw7MeESvjDPXZ58adrb377djrEb9osnv5X68ERwbHuto4hW87kC14KiCGysz",
  "key35": "2qjaSsdWJd9GoH1oaosFTSYRAA7573i6uuNun3G4hVbo9mxukiAZxThzADKJkiNjQeNAXs4w37yerGNrYPM62EPq",
  "key36": "5JB5J3kCvBwJg1Ui1vPpyeejAHmPSZ9Sd54t6QTQNtwWmKFQp6fDsNXe7W1rXZULUjjKWPwgSwtvrid9TRi7BFeG",
  "key37": "3Q5Aaj1dLaV524Vt2f9v7X25RYpAfNdagpmY6kjjm5xVWceCPF25FQV5un1qdmJ4t9NgWLyfEw7JfkgyjFqicTZB"
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
