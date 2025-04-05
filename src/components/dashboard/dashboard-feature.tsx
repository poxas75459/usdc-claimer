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
    "4aQyTSVtuGADfT4J7eLY5zbXt66yA3zMLchMFahjA6JRnjr1cjbLtL9PjvkgBDUYvoBwhZgmvkQxQ9vzYmhnq7WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x8788nSGoN2HXyPBy6qM9sHPbvVkMbi8bg2ByDPpoaEFDeFqR7YJ2sqN2o4g2DjDCrQYcaCfbBF5GXEt1rSdEGS",
  "key1": "3vgi2ztVnbRWyM1GdCAGraeVHBcYqQvtCyY8xgJNnfib4Tx8b1aXWB4hcrYBmXbeoNmFcZ464BT8hfcWpcqy8HRk",
  "key2": "9PHMgyerbfjCp2ivDEtgDXzU2832NUtt73D7XgADjuoFgM8XwbBjqfg7gAnN6CqRPUK11Ea6kjvvV3X1wBF5YSR",
  "key3": "22Kuk9KKk3rpyhENn1uHKHTBLf9BsWDr4o1wWy5pYd7SHqY6q5mjKu8SidTbdL7KhsaFWpKKKfSaf9YFjkjhzHW6",
  "key4": "3csGJGJWKvAq5Q64d1mVBmxsfsafLF3uC5ssTCnoiQfEPZyRSQdW9g8JP9ZejFD1mvFMVca1r1NmJix2n8yNujLg",
  "key5": "2v344mqgrHmcaBMjDaDUGDyN2f2L5s1E64k6YQ7KptZMmLaPfEibM84wNDA5pmdvXhvRBugUJgBk6HWuix1N5t14",
  "key6": "3bTVaYq84NCDkEpXko3bxGNQDGQbkxtkZG7jAPozBd6eyDeaGciBfFKy1odgPJnLfTVi7VNs4Yp81HuuTM184Q82",
  "key7": "4egtkbJ4H1f65X7HNyaoEUHjGVx9TRZA96fBi6i3oJBYWapRCGnvySmPe2YKhsA8dtWuf1q5mBAXDYWccxRQoKhX",
  "key8": "5Nt6cQsuAiSnrWckBCbfwugBeKDNxUGst6V95VBb5wkyiZpq4BSfAvoiycuciPG6SAt6Ui5ycPqQKCHgjXEYphqk",
  "key9": "3eLyG9qwDkdH8eeciwxjforUd1QkV5kWRTrtpwM6JGmNa3mcLw99ttccEaCGKDBVhHd6G6JqSyELZvUA8cbqUz2d",
  "key10": "46342e53ntq44qE3F1utSD6JN7smSbJTTxKxBsyDeTtBxUHus19EWwJUtPpdWCog34HcGeGjg1wnWLYc8Ex7UsTT",
  "key11": "w2etsDn9TmdwphCUoTYVdUtdU2hPXEhEx6JxBAyC3wznqzZf145kdZj31Yo7V872kbQBby5BoL5VnHYmrskgGta",
  "key12": "2Uojj4BnvHNTih2ZS87j2gbYB1Fm8wRKC7Fg2smtSgjJLQ58QYG5duEGU78pn3yX9bD7kSvvEBp5JaMBJFZP9c2c",
  "key13": "2nMnfgT37zG7tBEsR29cVyMKZ7eqVNuckJyHExYXq2kYDMrM5nJ3ktvKpRurNZkkpEZ2QGNKqbGsbYLiTRY3YfN",
  "key14": "3c54nE2VqeM84zSDTHbErirquHrrvCy9UwCvSe4SppAZisQMwUj4ftyoE6j7zsy9swXSPzp6u5Czw688sV68RqP",
  "key15": "3amkMANN4Nzkn1k5g9cYprKgmpvStdHdnM5M1J2u2rr1Ht9MqCd7Pj7eg4VrjC4SMkaN3kqyTJuvvVDmVxob7UY8",
  "key16": "53pKsmFhC5jX68jKxJ2cSyj4j7pNnGy1qJ6LoaXTMCJw3Jw3v7986s9iEEwbkSWMCV29sZNZMXBTGiRPKs6PXXxv",
  "key17": "5GxEftcv5DrptSNJjWe2xuzNxZkNNM4bbA6FXjcSifpNLXTi3FGSyLaezPixiecqKQ23XHwgPUCzphXgGGwDFZxL",
  "key18": "3T1ZSsZWEk2R7de3zaBGVKibevPV2w7DN2Cctf5zLF3ZVhTbjRcm7WhfypmtRKp51NcBTxGYFjWa7RfHMs1HEgdS",
  "key19": "34RxsQ2UvXbZCaE3pEwbZFiX6oaxfrsTSRJVZURj1bdt9Z3v6QRijsuYc2XHuikHacZ1z5NnJjpakpeMn9F7nPFn",
  "key20": "JyjExxH5xYzUnxbQKVSFnTKevQDkp4J8mM9fT2WnAo4R5oYncfGahK2qSN2qK3KjYimnmHX7DXdBVFXGk5ahCcv",
  "key21": "3tnw8VAnKRoZhEnew1UmFfhh4MKH8jfzWfUpwiFZYJbCo4uJadKDCaerscJ2yv2jwHY5XrqGHfTZTn4HZULUyDns",
  "key22": "4BvGoWgnFgQXfiv5KJjFCLDN8LoeS2ZyrKoovtivZqnTxHFtXWk7n2mGjqMdvyAvtCZ8Mzy4QwL4aJKjhbirgMpC",
  "key23": "3e4sB1gdDEeE1cd4oi9wz9snr9cQQSiJ5W8CHE2YeNsR2fYBYMnBAHfubvFxo4W9oiFmURGB2kw5werAkr8JJ5Yy",
  "key24": "QK3Wwn3GaXt5DPkSA7izwLJTUtiwhHLC1Dy3pccish5CTF69cBMdCTFTja2D6LhGW5TmVDtUvrcZnL6jMjp9pFz",
  "key25": "5jQ4MpSnoapMtHUrmy1YMqzZp3VfhDqtgCdxwoYbQbyeriwiQyV6q4MQMqzaNX7JmEEPkSKKQ4Dki6oscHnwp9mm",
  "key26": "48VxmwE7qKaijmfr4ntZcirtC5b4MeiUAX8rz715nnswxuekKzXDXVrqEurSdLHRBf9nyTWmkEVrPLKEWA4GV4c9",
  "key27": "5KU4yxwrPmhVUfWPoZmLciBM7eCa7wTBx5zUY3cWB875BzT5nSeRTQFLrvQmpncrKnfSweG6kuivqeQe3ePGqn2G",
  "key28": "4fhaTzu64L6tps6eS2rTn69uRfM4QD7i5sMJoBYmuTvV6rnHg96ztzVfBKN3sutQmtUr27U4cjEnqMY9t48sKK5g",
  "key29": "oCihhY52C9p8Z5ZYpP8ptPRSWDvHqMbuz1DdeEByRUrVNeFqDMG4mqAGMQeshFH4fXaBwkTGjy7RyVWJXVkXbZG",
  "key30": "67caxVoBjgYzrea1sn6hvnSFKuxkQJh1Y8HqsB26jEhvzKzShB5WDhXrhFkc8D9r9zk5ft2rjVYnPBCPDHhA7FzR",
  "key31": "48PCh7KeSM95AiKg7Fb7Qifh4PmTQozvVibWKA28znRHT73dzY6G1jrpLLuwcHuKLKmj6JGUL5FFpHxia97zbq1F",
  "key32": "2eRk8AV4MUtqJVxyWqff3LoB3EGH7UjtmjHroVc3g27Knz31EwBo9wLkCh3XRDCg9AoMjWp8PQAHM8qeaDYw9Z61",
  "key33": "3RFD6xmwXHJ5pMqUtvwhTeqsX4KjP7vYEqd22AifnroaakrjRuJZmxBiuNetGmoCLCagTW9jgev9odeGUmGAHVAZ",
  "key34": "4ivtLfbCgYooidxDU3Xo33uUsUajHPtSeVDDJAi4tivNhh4hPTdy7QVKuhxwnfBa2EqigW6LubibyBHTwvtbPLUP",
  "key35": "5jWSiKEWv7xdBgr8FuHPQpxEAGbsAYN7BgWLNkYTKSYAViwhfCGPXURHxZ7WaYHTbjuRNkKJVCzH8KctRMDjCjwy",
  "key36": "4BmrFeGhsJvfXhskCpM3tJLwUKmPabUZMTRu4nPLQeLKXUKScrDPPCtfn4qg1o8S2yzQKzTETL4G78LbzeY4y18W",
  "key37": "yfXsKDNq44qHAd7vgyaUbn4QZfH79Jf7oUL8x5LjG7UB6jpCNpjhstgHh3ChRRkbjgbQ2sdaPEg3asVFh2KdvJh",
  "key38": "3wDqxjS76tcYS661XHkwncD4UXR8qeAmdbaYop2zdmi4qWmzAPwdmmgphFQxjNWT7QSWr5ZV9xFfobVkEyfYixp3",
  "key39": "3vUKyKyQ8ocpj1hHQ1D5XXZcw6Smb2Y8DJPrFQt9gDfXRGetve379iJJkL8RY4GHTivhvmYe5aSah7EDq1HfZZU6",
  "key40": "DpBSs1Kq7cLj6Ckr8RMqr9weNXCTUqHEhK94eT6ULXsi6jMy7s58BySp3WRD4azNWV5jwKcVWnemddrWU3aSqL7"
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
