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
    "QSsoVfs72v6ZBHFWc7PyQUdEc5TiEJ4s5Kq6Fq8sw8h9hoWMfG6hNwSFeeEXSXhLQ5ABCmq5iJPBcfK2M8kax2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aBc67Thdhdg8LNSZcex8bEKr7S3b6s3perajRg3Yu6AaPj76HrYNBAbhksCkfTTTzstBYzQxHqfb6TABYUUu8Ci",
  "key1": "4z3HBuX8vz4fnrKhXeLDwYbAeg84NpawNwdjT8vtSNENoTtp57WEN2p5WbAyDYz6cZ3VbMo7j5w9SvNUYQhabEoW",
  "key2": "RrqVYwDz3jb1sCygtYk5s7Mu8jTq2djTznRauS3na9fpAPN53u5RM1rZTmJS48PRWduJiJtBieyCXEXvcMJodmj",
  "key3": "2WBxsfuNTM9yHihB6L9gndE2sETMs6wZDyFtBWQW6vwGsVBkvaxtHQPuwVXBpgMzZf7xN6UbhycA3Zhx2vvC7MCg",
  "key4": "5CyKZ9bYpwgh8jXgC7KfQjon3BkfAXUBrBWUBUjzA3c9uWA8jL2S4K7cxqjP2eWbePM7nSw7ciVsvsStmLqVsowu",
  "key5": "43tGRfRFC7Q8ABhTdhACgsgsjskV1HxatPBZSgFF3PKZve7625uRLvzHoKGiyE5kfQffHo2SDSBJDoCQnbAN31iD",
  "key6": "62XHZMMaY6V89Eoyfrkar9VQy5cJqiL2bxwn25Jib9FACUbgjmCDfTRDA3g1h4b5PrLNpXx6fddRbE14ywevYHhb",
  "key7": "5yoYqJAyMXGkSofvyRGNAfPhL1FbEHC75H72cT9BMMqoMoWrgecrPFRmJufkNWsgngWoE5Z9HNZdHGW94u2g3LNy",
  "key8": "5S37Zd8vHCyHxiM9pzvPsQGHCoT6NthcxdhHoFsffHNR6xFSx8YniBJteDGbPrLQEiLYahmzZ89W9VJ97kp5ZswW",
  "key9": "tahpj999FcELockUwLfXQvXqUuFdiWw3FsN6nh84ozBRzazceUPo5RpHvSs9Yu6zr7Mjo64u2Grk1PfWVCiWY1R",
  "key10": "WdrDepdYMn3ug1VWMgguvaAd5y9C2VrefPBAMMgn6JSazaQyxUzjfvUBB2aoVjrFdWmP77chNSSs5Toco7ff1UG",
  "key11": "31wRZEdyce4bHfy8nzmPRxjWd5ujiBpQAEMt14SsGYB7QcDf2BWVUucP6pujmQ2TDMU7cikVhQ29Bqj3wswFQPka",
  "key12": "Ax74f3QrQjKMvfFEtsF9mHkiprewhsyHHdkeo826f2HVXCyQdYfvbL9gLU6wuh1qT97ztjcrN2UHnnA5jA2KxYS",
  "key13": "3ADvy8AGmbBW4J22RmjahRr5RAKLKcWwAkF6mBBQRu7BTfThb5349aHpKj62KWBjWoR4Eo9ewrKw5e4z52B3wgAr",
  "key14": "4xypppwJadeBKYjqNE8sPa65EiqzHekf75NTbx7VPrco9RcsJVefQoCVpgE95TahkiEGgcqMxK9jdRy7ijhmjWRd",
  "key15": "2ZU1AMTFd1GnkzVNpy89nLcbxkRwBY9eLqk9FN5JWqMgABNzhrFde6kv8So5gADQyn9b73V5PDAfkjWXHnZekfhp",
  "key16": "xjKSsPCBhLwVDmb679CUxgjsFtQteM8JfTgrHNqMdkyJRrP2as9kfTzYPWkPKYfbKEXsbAncWdypumHcrTY5kg1",
  "key17": "2oskZL5aKfFat6NuLZLKsPCQtWYtEusoGDnXxFb31dYGS2REANgg5tR5w328PaCUkSTpQgqMWeNsMcDrqxU4VG8X",
  "key18": "5S7URQhVi2HUeWqWPDnsMDFfxykN4zT2ew929FfQcZmt7iXAaSUa81nBrZLSZvwUjLH8ENqG8Te77gSQJpAWLHse",
  "key19": "55j2UkrzN6T3Pg8EtNG2rWZo3NExpWhj5a5aRHhnfBtDaoGBpSU2xpaX1K5vyziYENtAXUHjUq6S43jb52bQX44M",
  "key20": "o9qqisJHxZRgK1s7Jr8JM9Kx6ZBGJtXMfQbqQd79Et8zxjxVeLdkHwjKEWtEHUZifYjYp8BJdJA9nUp3CPLxBMA",
  "key21": "4ndMmF8SB7rmWTMzJYrHirDQCXEUdAzfeqXR11RGJToiWo635H4UzMLM9Li1EnivDptLj8cQEJxAyMwvfuqRLVVh",
  "key22": "EbTb9bTCXCu7HkMzkXbVQBhWoAgGUPEXdeQuLDRz3AiLDwDfkizUZLchu47QmwkyPtaLy9kd1EesY8EF2CprNy5",
  "key23": "2J1PR3xcL6gPS22rrC7CdxguGhtV1YFNQ5DHimGpn6fU938eGJo98ZxDucgQzhi6pMJsYr3eqiUtNcqfFcj4Qtia",
  "key24": "3ZwiPvCxrfprs87QaATtgEMt1QmSLs6raSqhRhV5B6P32cQzEuAGnMGxRZaJSPpCWYK4htm9SYBfoXSVsRCavfqg",
  "key25": "574ZftYZkW28L1hiAMgpED8V2rsCTvUgQPQjnYcQi9avncPcix7SMXm5LfTKFnz3WYxB7ujnGnRoigsYh7CJee3E",
  "key26": "4Csk59xJAUq5MLgJCp1TGSpXQS9czBmfy7P2VTHEKzTtW8Lgqvju4eq2w6xB2d63R4C1jUgrntbkUYgpKCnGzCx3",
  "key27": "jna5RqGhENFKfWw82JAWPKi6YHPUm8tgPRtkAwKYtcUu96WkbbMkY9Tj1S6tvVxuoQh7kB8KDaQfq1FTJzR6rBc",
  "key28": "41vHMdYwfo4FTJLaQGRCY4sZa4bz3dL9uR94Lq3bYpNc7FC3TSN3eQbzUfpTViAsu7crSVx9UUQTWEt6mazihq7C",
  "key29": "2sF8qu422LUqATifSE2gATLbtyRXPaEnDr91rQc3SiqfgKXqVF3FYjiuZP9WCkjFJ8r2VLhh7ZHxrEmBNxGnPDbW",
  "key30": "476VQZTWqS8ta6GnWh9TEG2r9hVP79PH6cYnuKskxtFbw4ihjXPEUpxEGGRLPadWHt1gk6PeeBV3DFWfVjvQ7VhD",
  "key31": "2q2J68mtQvYx8bzuofizvyc8aqQEsnf6Pz3h5YjouH3NHSrXtyjaqa37Xzw48FxKm9Z8uuMpmu6ouWP7u4k2VxZH",
  "key32": "3zRp1ZvN7tAW7db684uV8L3cfxcTPzQu2UVjbg9oa5YY8is2xx2DVoAXSySxWaiaHFGhHh3RHhsRqWD6CLZsnD6o",
  "key33": "4W5mk53Py69ywkz1xAN3oLHp7LHhLpviUgug44JHMAcWQkgbqRtTY34iwP4tnRtfxbrc12hxY8eseJaue5MjqZz8",
  "key34": "3ZJ271Er2fJa6N1DtpvA9zvy2ZjKuNzGm9vY2K8n5ngKbXruU7fTxqPC3rh8rtexb272f2T27RQfqW8dEZCkDKUg",
  "key35": "5skDsvQTpZ73UDLYt7Yz7CbSAPnvn9vBoui816t2rEDAgDLitUrSEzmk3MWTpSgiPzicJaaxug9QYYDxndBfHoTA",
  "key36": "3REV63Z9afHSvTccyjKQHCmbvyy6RLhe5S4tZ3PWjnZrEms4CcUSWir2Y6s6Wd1fAZB2CGWWCm4cFw36AzFJAZn5",
  "key37": "XxcQTZ4JojBfJ14vgmUYWSkLNL2J9UJQXt4dTBEiCHMPZQF6AbFyfDLW7Bkm2BEq5ZkUbkwk9ePb28PtapgJrMD",
  "key38": "SjDi5PU5ryifRcjtbqTLEjYR9558rp4XsBrWsTW7BwRRuaCDysuPixBHQzp7QuNn3WpMvdga9dnjs45j8PQPRUq",
  "key39": "w49G75ke4eibqR8hNgihoummy71uJQYQrqZjVTqyJ4gE4WFSUtK9W3yjFdCX8L37SmWdrsMwGF6gSCke4Zjb81N"
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
