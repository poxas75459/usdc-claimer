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
    "5iBACyHsYK9V4CjivNH3xczJaEAt19o4hyUJaDiqJA2HRinzRbv93ZZdXRXvRW8VWTC4742vr6hoXsp9fkZL8g7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q5gaHT8XhRACSVkFyJFo3LvM6LS5rqieQ7dAf95JtfDt6ubAeG8vULQWZwMYdYVPQRC7Mtkx8uXy7rtAHFKnPqP",
  "key1": "NWDyA7TkDLKwicw7keCwBrxn4XHMRjqo46py3UkqmM3XZ4nQgE1KWs8GPfbw8dPRkUe9ELkrChjoKcZj1qLdwHC",
  "key2": "4ypfAUa71hFSzAcYxecAmSkkhxRHLEaCTFpcCAit4jEALjq7q94QSGtKUntvpfhtCTVRDaXCceZrCRgQe8FByXRx",
  "key3": "222LvUU8L74Zmxz2g1w45go8kJXThV89A1egEiYuD4ZtLvSUF44zSCaPJFocdajZ8KN28txSWEVBzsBeYrAT77wC",
  "key4": "2DvHMY8gLsoJQFyotgdEygEzQEyi3f8MoH9Y122ZK7stXzaMXf12DGsLQmbxC5GYw5f17oP6NL3afN7J7haKPRnM",
  "key5": "35wPGc47dfEwdCqP2Rrw1WoeMNDTWCQeNZ6B4wqnpQv2nZcPfxkCnJMUYAsicSTYEeqzufH4j4WBv8awXbb4pvra",
  "key6": "3evbdpvx5xrdpMdEkw1MS4qDFaUqwABUym2Dfr3K3y4jQ33uGHiPFkmcLJAbLgvx8hcEf6NWupceC3394NB6oyA2",
  "key7": "uMk9ERyNfMiqRU2zoVsdNRLmuW2Kb4CLzCAKV6bksUHRNsh2aoL3KSicfXjCNZW5cQYgcmp6J8cHkQfVrsrYvzX",
  "key8": "2THsKS2wrC3G67qXruNWQG214iZnmfVEUb8TcxVLb9hbysnCFRzDfJjZLJzvvuUEGrMuQfd1WPEtDDDWu7us7Nv9",
  "key9": "5zb69c4n8vw9vS5iKdryeMDuxwY5bkbt3k7cyHLV6CjoqkPyY4RWzJfqgyco4CDmZroGmygcEC2CzWW7NcxfmnHf",
  "key10": "5AA9oWguifbkyvkS8kjhDM7SmQyCRLnTZxA3FXKuHMfDkU2RFSa2o3tGeFzgwF1TnFhXpipVaE7oggFQFjKaUb9V",
  "key11": "4SMCmLQjeYbUGv5fYm7bqFtsar3MKtckK9KSfSQFikL2HdB5MAtGyzbFEwK6sj8zTR3hiv3EZ7s1AirJGA3jUeDU",
  "key12": "5qQ1cGvNd8u16gfsf6rN5QYTDNS5CfvHKVR3KKAqGe1hXQm5xhwXDiSGEp4td25MhGVBY1ce3JnSkPZ8KFP5aCrj",
  "key13": "Z2EeKidzky9aQEabWjgSU367SJ8NX3gjkWnMW5tsHxUbyq1x4o33T7sTCNkW8HAYCBnbNGjX5vA2ZYaNSKpqf2t",
  "key14": "3um6F9HcGsSguCTRyRN6Vt8aXhsWm3uMkaN3V5gLKmUJEPszh4SejGtRQL1ecM7KkCjip6iobdQvPaPmRmTtNysd",
  "key15": "2fFJDuZ1p6vK15WM46zwxjgRQo5o79iR6ryqiXkjHz3mh3RFg6RR7Gu8hYkD4XKDKFtJywX3PD2wiH8JHeeA4Cxd",
  "key16": "5usJ32c8odePkC6CLsQAfyB1JoNxCfJLSDZTMeEuspEVJxN5UnchLsXpmUvSuJpnL5hQrYg6yxy32JJ7tmG17E2S",
  "key17": "2Dz3mPuFekyeo5wiiwJyELzBngzVfgthrtMKs6FEqyPN63uTuG27FumUjJK8j6FrwPuCSt8EHRbRDvoLyqfmUnSk",
  "key18": "C2zqgmD8tAXfisvokNpfcViuPLFojsMi6ZndACk9ueMqAPeJ7wg7vb8G52XENjwG7efqg65b6BXa1ar1N9D3Ddj",
  "key19": "5C8xc8aPNFHShfcawfPzqraSLXS8KEV3w43zK8QoSL7AWjB1foDrGLj2cH1fgVbgZKZmyYdoHRb876zSCX4QiBap",
  "key20": "3U6UeH4t9gnECe2Ddk28X2nBJ2RrWNeGXitEtfoshGhgQTL9jjr82FtZdHCx6yVCbEkFBGsCrdLV9rngoRiAimNS",
  "key21": "5CR3FMcscYSdYnKfMdRRBY1nt7FSGMxNyUUCjVLmcwvKRdgtvBfZ1KWgEcgMDhiV7RV2RRL6xxokLKGWFuJKgJyK",
  "key22": "3uZp37oPXTiUfc5chwzhBeB5Xdw9HsfKXE5KngcntBzq2iX11ooBVezevacjZmFEtbS9wcJqMM7pnuetpBtmCd55",
  "key23": "4a7bKZBzbeSQCTgyW2bXSuJDymYTDq4y1CmYw5CAKUYZawVQfA2B54q3sWXqwRNoPyXhBwK6KGWSF1ezHRgChAUA",
  "key24": "24A3BLXVwZBxNmVaPF7WWWnPkkrjvVfQFUboE8nXtk3dYh2cDF7nS3sf6LwH527gNcaZDorW1vgDbK3VVFVrpK5S",
  "key25": "4GVvaXNFSGXSATyH38jeSYwMJgL7u6c2yRW6wZ8vL5bGyAsAKb2B5JaRroaLz9GuhbD1xhpDmRQNGr7TuDhDkGRa",
  "key26": "4g66h1zSxF14BMqLJckrf85j4Qg6SXNK6jJ9NRxb2My2VT2WmHTNKCqPS9TVcwApqeSnF4Kq3ZELaNNtH8ycQrky",
  "key27": "6ecHk24ekawHDmM9KoqgiM9KijU6Bxp5pLMSVjR2b3yEUirERJg4rZddYzrxyPgYuHCaatwfLYGqpWvJNfbdqLD",
  "key28": "Xpo2TYMqD5tXEsDBHGZWWw2j7oYu7Tsai9g6eww5mHg9B77PFWSiCYG3rjSiovWHFYHcog7GBb4Nsa9pVzeyWMK",
  "key29": "3CbEqgDwpJnGusXhN7U1Qbbub6BPj4RcgcgCkYFjMCiYyL6YxA7BAcuYS2xSwpHvyr16BDVQ5ZGmrxumc5YD44jT",
  "key30": "3tAg1HusaxZ8mqCidjPDCHnTwzX6tDPTgQHeHGjFb9YEwqD9Vi86wA1kZGAvnPo4nBrvJA5UeptAD2eaoE7WxPCa",
  "key31": "5zQkyRVkfGLyUvEg7XxwKkQeabHurLg7DANeHPEXdHmYdfks496cLmG2K4hwoFZ6RShAi2m8NoWzWiWdGfkUusPN",
  "key32": "2tviyP7iSPbnpecJW2cZCj81UQkgBVU2W3n9i7FN2YVar8Ev83qZnJLuF4oajnycgDY6XfanoywNBxBJbBjzay1B",
  "key33": "5bcSuuikJ7ZH2zrmxQHgjQ3Aq2Rcsy4Kqx3sPXdbtuHaV1wQuhEJo8mK9dp3nRPBfdwDeaLLaqxh8uYJxhh9CmQi",
  "key34": "rMds6cQe2fArftBLAjMKFL1NsTHcHytcJkQFAgb3htMGGypBUTeQQMgM9kvSz3F1zp42Dc381XXdLQnakpDqFDS",
  "key35": "3srGCFLPtKahcERj2HsTqgMzevRHRJf35sh7dC9xpX1pi4BVSh3krbR4LdinfEjdHeqd8G56JfHGNbCb1LCJxwke",
  "key36": "66LLGYQG7eo594spSJCehS4MVibC16ykjCfumnHnunXnsm6pXDZPtx2DRNwQXZ3PQR97hkEq3jWh2NXjCuZGWq46",
  "key37": "4eCz7VWecsTQkVS23CC8zi3gnf7RM1s1p3wPEZmzb1vhJGMQCBrEgaxuZTbULo1z4GDjYtU9ySqbbjA6tUKBkAKE"
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
