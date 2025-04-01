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
    "4uUg4nbNensqb9iyJ63vTKZVHRHSqUZaVSnmXk638kdZnCKnArgybnkBoBpMXpizqzwTo1iWaNkGMVPqaAhFXyv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vCjeBAymRcnGtsgUwXhcvoK35SjEdnr4WZkiMCUyPCtiPWvMmZZu6oqWkaEpJF1pgEb5vVh8WTKqBkmiw6o6BFU",
  "key1": "3aMfk18SJnM7TYdpqzXVPVeLMcRYriZJk3EL9vJfUQPNFzNQw9EbPeKTE3L2v11LqJtQd9KZBeGZxUgTN2uhGAVY",
  "key2": "27BBsPAG2dARrFYo1xSQAcUegDcHrhDbPSKi1JHqAgiL78wV6Jw2fYxdEQvhWF36AW3wsmqyF1cUa7cQm8yGZ9wx",
  "key3": "3VPZM7zuDAa5gV2kwrZKLzuonnKAJGWDskcD5YxLP2qHaEJrycKE18aatoKsnZDSBm5bjvkdx92Hi8Mo3m7T4TnG",
  "key4": "3xzXDsBX9SrXXs2BvocGABqk4iEQiGW36Y2MpcwzpGSDX61M7jZt4kS1V7nrGhxCgYHhQepGsZUoRj1mTh2Uy8Yk",
  "key5": "4uPZA9LS8v1AEYEeGHNSXTKkAYH2Z73U3VPgsPqRiwNwPd8BADMrUGeNVsswUS21Hr6bXmvW6nZQFd7WZMTvm4xU",
  "key6": "4a9ejpzLadpQQpboWyupfsWsLPqRyTwL7KWF2aUADshb2d9ox2SJhuFreiyJW3hvcHDS8Pp8KAybTe9qTHQsoEZ1",
  "key7": "5D9x9p4e1oLxNnJXYUXLwPwBM5uiBroYj7etHq2ppRiCP6dheUTx4pefNbZGCLVP2hGzB2gNa4nndguBBEb5SFzz",
  "key8": "3iKJLsfgXjjW3EE1raRCEkdaNMsHReAi78a1ZqEHThuaPyc3YzTGomwJr8VmawFs5mQd9mHfG3UwH1PPRqqAZrP",
  "key9": "YPuiBr5XjKwpY84aM4HbEX5Escw2NoBjcCdy8MJ1JHTtA234TXhEtPNz729t7euruQSo8byuiymVCe55zJHJyLA",
  "key10": "4fdwzmwEnWUuwP5KttS1hq241dEe9LrkBdRccYeWsCgRqk3WKKxYwNgTzGusJakqK6RMMf7qccUaBiMmvE7cJBir",
  "key11": "3bb7tnNaJ5k6DokotyoE8v1npHE14vbgVyUqhUhyTR35cUphUf3sfCcN1zakPxAigCtms5eYCJNZZgc1ZsCBB6co",
  "key12": "3L4yHxozQxrr9iueDoaD1xWVuV4npPJKPKR25zNahd7dFwxdzWkMeS8vhb68pRLjyH7DA6MszGGr3Trpdc4zUHrh",
  "key13": "4BcHWAC9UfHydY4vMS6sw7CvFNe8VYY7aVuuUUFDNPnKCvZgQK53udh7FUgb61udwqCcPGEcJgXadgfehFNTnuNf",
  "key14": "5fNhwKVGF9qkpBm4qPVbDfyPXHs2LA7MTk2sGxuz9HjWFbt3m1MFb2CkoxbMLjE7LhiUz8D6MgZMD588twWwKzNp",
  "key15": "4j13No2CrHaXNCNJKe4TRtH24XxWiH3GcPt3E9UMY4hKuT9F9PcMrkNMWjysrHdMEViWrz1wehWiE2m1sYx3SQUx",
  "key16": "5EAQ1ZbgSc8fiYpi5ukg1BiJVvG5bdbAZRrMCgimH4FoPzrXhggwhK5VaCQAkvbWdBXGhWquPJHTYXSfvYGf2VxR",
  "key17": "2t6jNKUBPYcKj8o41Xz5k2BYBcBzRS17V9Hy6qQoLGcfXZPqh35kP9rU4fMoHDdN86JZ5XFXpjc3w7Dq2eHuVECN",
  "key18": "48DVTdBBhNvjAdQYmGDw2ofPErUNJ63o7CfK76ew8nEQxgT8EnUbrWJJzpRSLq9d4rqpYy3DoytqHHhNPAwy6s9g",
  "key19": "3DehrLtu7V68cMvA8oZnfacSfTaKZMoDLgNhF9R6fywoQjRm2ZNo7zME2Z7hD5L9zRszet4XfRBmcZibPgoMC2Pf",
  "key20": "BB1Jgn7ipUeHnaxpMcaYMT6J7NbSMkcqYHVgzAitgcK5XRmEuRokP1LxGzyZmJFXe8rg7jn6T4TET5mqu2LQDRh",
  "key21": "3Y6Czh4ZxR8feasDMp47RnDZDBT6zPBwSnGfph3XqYzrRuiD3DxfuHShocyEGfkm86XYog6wmQ8xYsAYr94B53oq",
  "key22": "65Z3DdoWTXieaedm5rq8n6gWprr8ZYXyP2B84ihpd86m6UqZ1doeJYEiXxU78Yc2L4qaws5EHi45TnPGHsfcb7gU",
  "key23": "2bmjzgBMuZy7qo3UxDLnWuUijoDQDJbmvtbY7C7bWo5h6qsPumHVUKRCyprNap41wQF9mTnXYUB53c5qWDiMYN5H",
  "key24": "49rtt9A1nkoHafFrsDxB4vGGMFmXzzH7ciLUXg6khQohfNAxTjKc3FbEiXzxSfNr3sL5e5hgocrTRpTAHCbnRZq",
  "key25": "4Smx6QrasTBfiLoyR3BbKXwTfTP8KDHFGj8Rqfmv7ivEa1SkQrqso2MoQD5aXsT8xERBdKpAHXLBmDqHxAAkNVhz",
  "key26": "523w6d1CE74KqFqYj4ho6i1w51uBs4Njcatt6orXA8bDmXAJ7AUZdqWV4Q1KsjEobWFj6wPC7waPBxyWsiUeyHBM",
  "key27": "3ZoYjqe9pZcmXswQZ7CXQMpA8WNFQ4zYSe33tb4ozuNJCrgFkSrM2t7XebT65253VVQtc9HxjLR1XLHssu6hqwkm",
  "key28": "3HrK1azAamt8a1KsgTXTbNGcTfNhPv2BBCZ6fSC5NAAUrkSoFC6eMsKzUv1ETaCStfNp4o3RyedLSQEu19D7FqPq",
  "key29": "4EehHabpvNPRxzSkmuuko8mJSmjujx5y22wtC1xvPQoahuyaBHbBrh2hP1EDPMaVaLYMeeQZ61rWGff6nJr4nJTa",
  "key30": "2jgYcW2gANMk2puNZPf6oN8dUWvyMbTXCTwnEHWSe9BzXw4opELhoHkuJodqEjVJBjS4SZdvpVUKRd8a9VoMNryj",
  "key31": "37LZs4njqw2ZHLTvy6HyKPfMn66WX45kecJiN2dzoYK3wJaREagkYYFpVszo5tJ6zyM2DZLnAHchohPaMjYRAPGx",
  "key32": "5ho5xpAgUZYG35WBuazjBKtD9XcdRvyq5xsqzSvMpsN43tBLYYdgF47DbZ4zrv2YsoMxxCzkSc4X4BEDk7nTcYz8",
  "key33": "YX3FJJKTvpYiGhihpu5YJHNi3e5uEnwg14rVEt6gqJfqt9H5vY8a8CAjZyqKoDF9YxyC4tYqYbZUk7Gv2UrwhwT",
  "key34": "2nNNj9gMLQMaijNU4wfhuByEgMPSd16czJkErXyDW6xKxqoemSGr2mzewjNukRdKgxaLKndLnog6FFYp1KuhDYt3",
  "key35": "4g2JxLCTgTcPuaowLocjKbXEC7qPqWDecCwpsEUynGNNp1T2KdJzvpgPRDspgYZmPfe7XmfBrRRGxDmRHooYNFoG",
  "key36": "3PD8VatfJm5nfNHoe4znVWE3u9zJcimVvx1fJZsgQE2T2Bghsq9EDCVeFTDbkTs1nvfxpmE8LUYmmdeRJREn8Jpv",
  "key37": "5bHiqyz3ckPGqhqBvJ3V8MfxHRnyPFjtc8r2vCdNHcAcC7qoH9WDcjkeopj8L1XqfSZoEsKsDX8tatb5nAHhdiZq",
  "key38": "3f7w7hhinTm4V2qTFCbYsvpabKyp6XKKEz3zs2hdTmHPPRFCsWmheG2PAJoWxgdgDPgnhFu9v3SvMMW48qZa6SNs",
  "key39": "dV9Y44scGAaJ9AH1CcuoNUnC5WqxwCNdFH8XFZbhJMq5kVaSpDssrLDxM3pznkVgBQaDCLRGcot5ouJ8P7VPkTL",
  "key40": "3rrf5BggmV1vAS4YQpfdQsBpYbyAqgMo2wFc5AZ99T6DGVLHkaCBuLUuhJwopDWF6UJCFiWGoN666pdeqerceh5w",
  "key41": "2UJJKX5GjPSDqvo4VXCLQvtPizqh9ZArWDJDPMce7KzKahZ7h3ozbGQFhHBYfRw9nPKKEukS1bJgvLZ6bE7fWypj",
  "key42": "3h97fU3TJaRSsRpUkkPKP5aQxiigDkp68GFCjUAdaNXRV6gGLMdrfDBXn1AeGuxoDz2aPNwTrM4ggJaJjXMQ87S6",
  "key43": "62Z6eyMxhwxczxySYSkxQBSCG6tgPqT19mrRJdfVWAvatrcrJBcAt5rUE4rnuJVr7JkphxtELNpoiHpLiY4NTaEu",
  "key44": "FRCBT9USrTL51dfRiAU7gM7eTcik5fm6sTmunLKGGoduYh27aZb6HcWEVzRtZbNqJdT8zdCnrmcDjvWnLW7RynU",
  "key45": "5XcZXZTgqmo5KwohQdohxbcatyJDNHbsmfydNZCKVprw8RnC2DQDrNgDE7mC2NP5sQKANcFm8XGDpFyEntH6NR4Q",
  "key46": "3SmLGnyML6gzGgjETbQaCv1tD6VV6fsZWuCnew6EmQC5m3KkNeMHB9TS53ZneBwwjLD5Pxu4oAMBZ2WEf544mSYh",
  "key47": "QFkcbpjpKNFiRobyBcGxNagRZaFrBC3f7SSFfUYKUrWcsN9CQo3JWHmJAKv8afrWUuE3Vx4jF3XoyQp1bcw2PC8"
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
