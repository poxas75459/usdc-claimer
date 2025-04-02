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
    "2QasYEv2WqJUMTv9s14Uvqqr9MwGd3DbrxR84uo5BorawmsADKkgDVhcY4ohQDu38QS7JnFh2kbpxt2hCsV4LP6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xkfR72DBhPny3a2cwMk33RNL3t4Bk5x32R8Ed6WRSRwrqdf6Hdj3nSZruHsWQ5LiVo5puutysXRBufuCp3goVmV",
  "key1": "HStF2hr8zBAkxFTp9vEFaxF23HxVaQz6xCBugRWmrzJBaYaGguWMpMMgS9g7EtAASUP5Thaq9aYbGCC6kHZ8TX6",
  "key2": "25ieX5ovjuTTkj4Cs6Gtary6VDFYhRZuEi7K4NkVtMtxN8BiyJS4WfYpEvjpNABUJFyZ183ap5h6Q2mGuTsG9hb3",
  "key3": "2AGNB7uqggpFVWQZop62nJWV8Penm1YKWd8rgj6bxMV6DjyzuNfER3w2MqnMkR7QUNLKsetYfEhyh3ESpia6tJxi",
  "key4": "3mnRzwJA7QjfoV1p4YVzhXQryWgdZ2wr5j3CkrrQiL4JSisAVwQhiSUhQejpvH1ccgaKJg9CCMbzdboQKF7KHan5",
  "key5": "Em6cAYNY13owQQ2wL2avHnnEWC5dT6tgBUBSL8s228zVHyw1qkCiLNBaJrK1NoHM8S7W1G4Sw9WC4S6ux2zUKs7",
  "key6": "5SYhZkNRfuB4pdNVHf65BVfvDL5kKEgNJMPE5ZftV2SmdHbghqh5bea8Vy5XGiPCGuJ65M2yvkY7xqgvAA523XJV",
  "key7": "496HdBrJptmwJh4BLJAMqBuzzBYKgniSy1Na8tYZEov4FMirRYiuKwpvk96mqUtnFDzX7NXt9zrHP2fh4wAcSHuE",
  "key8": "2sEEFhLykWEpda3thNkEam9tFgeMw2Fta4DsiW2EukUzEY2ZBefQbFegeepLgN6g5PqKMNJLEPbsap5oULtzrhui",
  "key9": "3uJSxtPXrrR3XHM5oYpBqpLFpP7r7QwDfbohe5zBtP1wLhSY61dLUuKVfHLoqB9s7whr4LzuK1GbB5Tbd9vide7g",
  "key10": "JppRQS6FzzVBFbb3fVDZbTKccC6V8MCbZQ6Uu3Jd9YKgzyQG5348jPBaEwSKmy4vx6HuhqTEjtz8oD65dTy4yuL",
  "key11": "4HC5yVPczBnZM9VF8ameyd9usR8U4W9w1ZU6xyMZ4CHMihaw9dAb4U2QGDfbx6bccuFeN3UPHkNr65apqrzov7iv",
  "key12": "wL6Sv1JZLpydUudLzc6G7hHXuFt7bPRSUt8kspuzqZkbpVXGPa9bZr4dkV8Z7pQHUpAtgMH4jtHzpdw1oKWnpqo",
  "key13": "5f2nQhe3Vwz1X1WGzoJVSb1TD8vGeoVUEhAb3EpAWTV34obdyEeF5grhv3KRaBX8EKZB2EJJXuEaRvkwGRHKZj9T",
  "key14": "4sdmDVf5hrJ5re32pxGqK9X3nFtP7Ae8kj6pZc8LAeKZBnwCGu5GGKnTqCiQyCM9kqy2uASToYC89uMvLJZtH7ce",
  "key15": "3tCSgtXwQWYELVLveDhKGW8sHcxBtWCceFuJUqUnBRZaV4zV43RPzWZoYt7Eb8xHVoyefsHzBAMkmPaTkonJqS5",
  "key16": "5bX3RfhfBECpa7qCP676hb2XYZdJPH7BSYTu7oKb3F7YyJLTSXP6htCF18YJH451NfHTxxcMigUvhV85u4p4Mcjb",
  "key17": "9KkUxkQeVjPqksKRdFBeiZJRC22kuGA7XiEHHqwH3o2wsHWbGyWXhM4iY5ecBnR6Mgj8jwmHyZCjrVagagXEqov",
  "key18": "d6sDUdacXqXcxx8ojELc7Cemob5J2dYYwasFfYwQdzWDQXP6YSyVoRdEEGvuddpjLEpYL34ean9dLrzZ8iCiGxv",
  "key19": "3ShbTrJb8biinsxM5jAST2GcvK9qNUp12M9apccy9ePKCxLv5S6fm8CEKURwKBeLgLAs9NKFjxQdK6Z8CAcKUShZ",
  "key20": "5V74xvPPKXxHiLdm2ZBNCK8jEXaFJT7PEpq7UsqjoQfRd7KSzgkNysgM21nSjd4miKx39XwoBMjCjwky19mzDdyp",
  "key21": "5b5yrmTLkFneTqtbY3nahET8EChi7Ci16NCoN6gq2sbc5gTsusUVseSWeEznhE26zMVdoZM6e3uZkjPixL411oWn",
  "key22": "3BBqcZpMHKH1d34LMoffZiXEQxchoWpgK2sio5Q8A1oDLqXhiDn8Sf1ayjcAgXsCegGyjLSmk6W59UjGcxeCs4Pz",
  "key23": "48HpYZebgSBaPVCoMG4A9EGpXZB16oPsNjVA5RmahfYtvDyk9u9iooXUm2svsE9CWYt96Yku8rdLWmjoMXspzYvA",
  "key24": "5VDRwzkprme7cQroD3dSwYb8cG7hz2rbRMLMpCTvR58nxxVBG8YcoRgrFDPw9Y7mC65ehFLw8WhW4Qtc1rLk3jfh",
  "key25": "5bXkgtABNTMTS1m9pWjQgGhw4wwqDEiwXB1RVA4rh75m4DRs3Z7qWDLCgbtr4kMCEtYt4bwhG8pz1XcRPVHNDJj7",
  "key26": "dGE5kCssm6H2ih47egK7HDkVFUs37otQzXuk1XrpfcEnX2ZXfDHje4QWSNpzDSDFu1NypDcTofXn6AASWTwJPUA",
  "key27": "2jE8VZ7FQRgr7yqT9jBJBxBciwtTyesBxfU7vmpL5nUkQcDkwgbjwiMCgpTgMkmVWC3hUJVprYEHzqYvXNuEBzXb",
  "key28": "4snrxGpyaSHzwTwmBM5gb7bf4Jhfu43fWXcqRFd2mUfRvjDRhGXH1GTfKrwUvJnFbRFtTts2SoPH2c5eaottHLFx",
  "key29": "3Mx32FaGmoHM9mBKiauRSuoowW82WKU9N9tMn6p2SpczX8AT96YSPffxhrQgMPAPhtHPp31CvCidgJoE7iJoHBHQ",
  "key30": "aHTYaj76kiNaGjvY6C3wu8tJFE9JqVgYzxPXKktbtxVxr3Rw3sMPGwjuDAd8bcYiQCUdB84XBgsKsdv7RVuHuq3",
  "key31": "2cv8g1gBSm9CqRPem9tzJeru2YsLDH3engy8VNLSvZt6xS6Wo7jAHqWw2C54uoZUMue7a8QUr8Akf6Qdcj6CMjs3",
  "key32": "2NZPfL6cxbipDytCnnrk6oAwvgVLh4t5C9P4dJRHGiJW6fiXyusjiyFzZkB5kBPXLxBfeUZMkLeTQveMs7awoYGC",
  "key33": "3TybG9JGF9CYJkobHE1V8LT6o9pU499hbBE114BVjg6Z4m7ndwFZwbzVvVXoGa7FsFiaF6LeXTgL4Z3c7sgjYbRD",
  "key34": "2yrRAxgJQCptA9nrsVsmoBvKw4LWGGGthUTgw1WxaagnCNjgtYK9412VnHXcm3KeeyW6nix3zJ5nbRPCC8Uy6xFo",
  "key35": "5i4k8V6qpxeazveXUHCZY9RxTrvGaeZDpgbqGUX7sbNPjgmpde549QzMhih9NJn3nuSCiErwCfkzdZRUyge9D3U1",
  "key36": "51g3aHdtpuZrKcYxki6giB8Te7QqcPeTUvrvhgGsjKMGQvVcsnEoEdeN8rdzXojhQbWZzXbfuXStx1NMXqFMNXoD",
  "key37": "4W2ofpG7r3CMA5kfQn1RwxyKXTcT9CKSVswedmEnkQdt4juJGeoXDUCVtVdZa3J1EWxUjyocRCAamM2p8UvgCyXk",
  "key38": "FmP8WaJt93LnMcDjSXQaCe22RU33oeT5P5zFYSDdA65PbMQdjP3VAp67upPsK7EM5ittp5UdDjtc2ET9es21xNn"
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
