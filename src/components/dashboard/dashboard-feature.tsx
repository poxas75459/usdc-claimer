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
    "4rtrsEoGfegysegv6gxiPnkysk2v66c2xrmH6ezsa47TfeGCB1KziriUkMeey38rpBktky6UYJVm6e2uwMpJMK6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mGBJ8vJsdGQ9qk455CxxEpefuj4KiEAJEbvbqtjsf3Lpy4xUmJBoHAAFQgH3x2LNMJYjbmub3ECpz3uqMMNuNuv",
  "key1": "2WMSeYGpVKSikNoMAbmhb68HzfnuQUNR9fkThiBwGa5jp9sA5Wv6ibBV35myqWDg7hZpN8PFGKweYkh9MKsBpLZE",
  "key2": "3kYpA6TRuE1Za1PEM1PQw9pApM7vUutEJ1qaWjQg6BvFimY7e5PM93osSAZcH1XdrtL6DWKTHP7RRpNYCFoge6PN",
  "key3": "3JTNu4vMyfLmxwTLAExqp2kdUQbf378xv8bzGbvyXcdrC4svhPSoUZTSyhAdezufggnETU9Tw3gQZifEhoPjLfTH",
  "key4": "Hoey44u3SLE5U7qgTioGFLxaKbHcjDrmyyTmwEGt8J6YrDbr7TnibJKwiVZphcthAQYkbj2xvMsm3TPFAuuYfAo",
  "key5": "3c8Q3eNejavsZhBS3aLR3Z6YtS6bXHBsob6d8qXAMT7q74CuFcZipPLL7PVdx2dmEaDxRS9RecRngT11AaMVfbxU",
  "key6": "5kDZdZPUQ5tY21YQWQgCobmUrtvfmHzsbCW3pmMXURmB6fHLU9WHicTsug55LgV9tmRc2E7NLucQJTJxDkgb41xq",
  "key7": "2d9kh5Qr7fw3oDZzwFAyidm9gktyNRzsNbr4giiairvPwmZzVgmNSdbs2fzEXnfYmD79auXP9oS7Gk7RKi4BZKry",
  "key8": "3xsv3p1w6vaGqYgsbsdFuJ6ceKfDG9x4iWXQsr6U5Wnis9oKgNvGE9aVHRsqMpzspnr8deqQsK6SYXvMVq537wjX",
  "key9": "2xUaweq3K9R5do8HqKrX2CkUf1eTFrKLz44PRt5LM9BRnif1vaGXiTBeWndF4hg5w1kZmZNwGFPRyB9vgB5dLEwF",
  "key10": "2fn8Md7DzEEvjWDmZqLDJvnhMs2womMgmE6RPnY1fHL2LxEarZvMPRcDqFASv3M6TpKxFKsqwKhzuPYGYRoZm8fQ",
  "key11": "226ys5Ct9npWipAa6vZCkg6s1uanBbDQHp22q1RXrZTV6Wqer15XVb6rmT9LGWsUPKVDVGjtNCDey41N9YYWo7fw",
  "key12": "23rcm3Adm9jT3rWYQ6xy7SMW7oZYgWs2qve5MMC7Jc182YbNKjjX2rqtp8mLt85YHtmL9zXmkiKF9nGaMHkRFLsW",
  "key13": "52fVUDPn6cepH2bYn3t1PEAr8NciaTsMcjFdigy5zMwCHcoD39s1SjEozih1YVGqNGbn1pYdfYJrke1685ng1rQR",
  "key14": "rXsjhLWAAXjHTYfjkTb8VMPJocewSyypwJR2XKMgC3erthZsCnNY5QrHGLHF38uCjjSPnpNYtgudZ2b1MG7RZJz",
  "key15": "3H58EL1gW1r7vxsTYeUq5APq9687b9CK9tKmrte5NPxDYD61mtKcw9ZuC5Tb1mrh5vrN92GJWgKoQQKG9Lxq8a7M",
  "key16": "29APtxit2xezWH1wfSBXbjNUvtge7zFX9yn63q7aXnfLbg8ZwVErjRKYHK6nAKQq7eeZwikwbkfPY7tyDTrS4uUZ",
  "key17": "4tJrjFEqPfkvDad2kDBHGNJyt8NnyFer4daP9j7t23nSbMFRd8WzT3SPdtWDoL9GjnCzeV72ZUqs2yUhM6sMmuFr",
  "key18": "5EX3Q8ghN2jHZpBytahyo5aaFcssLp7N3j3gpvDvWuGNJ7GXeNvuZL4SAeyUJZp9FhqP6LLzEiNVdXnptTXLK1sP",
  "key19": "3r9kPBqbkGV1UmhaJWDQsPuRWr9RR7p76i6fNtapbiq1GTG6uyaatv5Yi1Y2Qj4aKfyQmTvH4ArzKm138XbSS5gU",
  "key20": "LuSy2dU19A7MfYkpDeVGdCr1tsdmEEYJj5XcATzhhRUmLtSxRRnybBueAfYWCGfwS7CjwHboCutZ2xpqW3qtj1D",
  "key21": "qVEhkbs7RPJTq3Fkov1LHL9hBjEtumDtPqFDguuRNozf7Rd3DhJzeG8Ysmts7pbmDCLK1whVPboGVBCk3fBnfby",
  "key22": "4UC4BW87cuqQpcxL7K4R6Ked5Up2hoJ2JfFUBenANYP7NmmePqFdKBvnxSE8H6HywFc4jB6zidzGHGJJMk4RMqFX",
  "key23": "5jsXb14R1A3xguGXJDW5Thcjq4W2BwFM8yRZMMPCz4bfJaRR7DmgK3fDb1rBH4DcWnE8dfoCRqCKZTej41h6rnqY",
  "key24": "55fz3SUnTPAfV5weiQJNmBoEVTTkiaAouVnWEw3k27jJi3HiBirrMPD9rCMwtA2Sn8Dg916ynDxZojvvr6u4BGE8",
  "key25": "5N6s6woMwYJwAgJJCzjdrs83sHpocA6ef5ZAZpYPPdQz85QEZNWpZowsRXNVyUD27edgbJE3ww7ejSsfATPA2Auk",
  "key26": "5BPmw3bc3ftwdMiVMy16wPxKfdVAkjciZRVAK4pvLPETffiLVexAwVYHgNkZNryV8CUGTT83GCJW52gjJ1p4g5zT",
  "key27": "2YiXGLFVgqfJP1cDCYiFgU1gcPZSi6YoayvZHrqQAKKsjUAWwziNezHUWUYNeSRpWXjyPiR6c88Hh1yapWXjCSGV",
  "key28": "31ygWcHqr3sLtVoD4USaKK1qVJSMKZtrmuBNZ3PDN6KCTSA1LrzAe1EnwGd5gWqQvL77wdypJgHyqnAjzMN7JhEL",
  "key29": "5cuKVXoeXDidN31facmH1avd3GUSMzoUPbnxBiwtgFBUhMfvxbSXFkzPmqjSfDZTi4bY4wLgwUrkuGURG64Vtz4k",
  "key30": "8WNF9LgjKK2Jnobb64E6LkDudiqfH2vSNP4SRKjBoYqxxfVGshLqF2SfY2E8rPvfusgCM8n228TYRn2Xwg5Rcen",
  "key31": "5BFDrXuHK8dZ8xoc6dZRVAJAMFWNmbZYd4eVgRwH86e56rR3bw1HqrzZKVmhayR1TjihdWRdmqew2kb51AZhRFWt",
  "key32": "5mS24QoBF7Ve7r1F4Z47Xqzsr5HSsFpH3WVXq8AXywnWa2RGsHXfTTvMiS6W4BQKobzxvMYnZQfrPrubMaVpWEtM",
  "key33": "31Yq3NgZrYEkm3MBvYTPc4roWq8NCqvx3HgxDHNF7dq2kvoGFMUMpnZKbB9U2skuEnwYQDs97c5PbZNsSsqpuheK",
  "key34": "dYLKBeQMKv2jr6ppccpdwxDojCyHXyWyxsgMSjLm7kcGnvKaF15TMC5CV6GjUWyk36Kt7L4LBS7YSxM5ioBcfdp",
  "key35": "3VzyTKG9tKzwfXV8zMkHnrXyWQABXv9JUo3DCZiRAH9sKDwdCSgJyWmU7inezN7nSjDgaVy9mJxeybtmhufovMrm",
  "key36": "4vfY4P1THPzzfmYGZXBsZY1Cr8dXNnjyN1DxuJYXBW6UuKdTWeGCz13SdpXXcdaNSMFYRNy8te6Re8fdbm2negfC",
  "key37": "2ssmrRQfBjCpri9KeFpi51TcPcsfm1QPMvFUQjewpk1vtJXp9iqrojgS5M9LVkyKXuzz3L8n64eZfH6Q2hrTTUmT",
  "key38": "5HZtRcEHVsix4z6xehJdTJe5vpdxToEXrVRWAGT6psQDtqdkKDweTzx1ibvqDXRWBNEfgVZKefqbtpqewPGawW9h",
  "key39": "5aNpaEPRnEQcCvYcuYHnbF2rgkfBtyZc78P1zM4BoX2a2kSAp1uuyT8zJekp6yJA4QpzD4yFQ8NRY4s5bLg8EVq8",
  "key40": "5TU51v2beDL1g12A3rCY5c85FkY6QQvjTuH2qq99LVgwFUBYT1Ze9pdkra5pa4MgCpLs8Cw8P2NvRS1UC2hrH1i",
  "key41": "3txnN7BtLUVd4Z73gTv9KBmmBCDffzcPwHAVkNVxURGuuh7f4U9wcrPcG7m5NPc8gazQmbroeVBBToPpjMwX4EPJ",
  "key42": "2m6XATkccHx88fgk5e5wtfzLM2bNoT9EFCBsLiPYWzuLQLd1atcihmVW5ViGGqKjZd7sBozQNUV3yznvLBDPfCma",
  "key43": "2tHm3TjDEFki82cVPFC7QZr4AkSRz3UccMYrrytxxxagozNvS9LZyTKcT7kPu9LVU1ajfaPkEX9Ze4eVJKsY3uRo",
  "key44": "4Yefn3owHcKEXWfR7sAfXdDeQRF5TKAA7pZrovReYHrEqZKxXSGiNDPXPXWr76mhxArWwUp9Ek1wq3Gstob1Kbe4"
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
