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
    "5upeMedtjidnYsQ8T7naARkTGTYg3iaqvqoNqQLU1ZPvRPgJVTD4WwsC1MAwHHTzCpv8rJUu43qy1ix6Di3NDs7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CiY7Q1m5V9oaFarNdyUpeec4qcYNrWYWWtaxWXNBdDinmy5ujhjNo4hkJ9oD6AcS6a2LjrswWDjkydaYHcM7UcG",
  "key1": "JmPvoT8aE2KWW1p89g2Ett1ooxzXmQjjKVu8XsBy1ZLTJjUm9E9Cto6kvFm4L4t9Tt9hiH8HnXRcWfEcDvyXenb",
  "key2": "2iwoXSxha5CaqVUMsQnZE2tNyVxf8dAez69bzRRni8JoHCPjYQwU3PX5nyYPsx61ap5rh1JEwjLAtPFDXKRTd8gr",
  "key3": "4SPHwByNXdA9iFZwT7BDPmbQgfMrnpncTGi8xqggzPrckyC6QUmvf3uFQdyMo9LHnf9D1pDdVDKdohYoKSNX39Vh",
  "key4": "3eQRJ815ZJWHzHAPnHtYJ9LRx1dUwARJ2hqPaHAGCAYnYzJ9p3KF5gjk1EEp97G7goS2N7jHnwjjpDpe5VW7FvAL",
  "key5": "61cdtE48JHFWJfNNJnFXZmb8jTaSvM5G2GMYAE3bXpeBtuzzSjYKnJdVqEJ4w5tzFsDrV3jidM7uDE3ysnA8wjdh",
  "key6": "18G6rr1amjncNEB76EmxeR14RjN6KAUGkEZVfk4uKvx1i2t7eKKJc7MGKt5PyRbfANkayFAPhCj8Caa6LfgsLZ2",
  "key7": "4ME82rE69EHZYEAJ3iGcw2JjNuutWZHyQZfVkTLpDAU2YE2XCQH7QQmaAVkzRWgAe7MSCxpa6mSe1uHrBxBvjAPj",
  "key8": "242vcUNVgS7CFa9TgtcRHmi7AgpmLSbBSN9BTseVsHGLunkaeMjCFftKXuSeFN17UHAW8zn8CVzB2wQffGno7ir9",
  "key9": "61eTCNSfyyjeCcf4ystBJdHF5RtNAJBPpQoL4PqBJQUwr7tYqk1Eys3VDLGEJRZvePfTGP7bjeYSjXXFQg1SFKNw",
  "key10": "o374qN5DczYwdc48biS1dj7QoG4Q6ZNeR8i2Evz1ivtnmdATz2mXsKjw4EYWqD9hTv7XgiAvxeSb98N6AVbnon1",
  "key11": "5kmAkpTY8MzXGTS1uQt44rHdJL2jwFQRmcFjycNvFWg2E1BLLGsyARHG8HVgyzJYmnAeu5Nt3Kgk1QkbMGv7DehD",
  "key12": "3wZ54i8SpKj9QxGCtwVzHWpmgQp2cmrDTh6HR8EpysPituKSBPBUdbz5rdbDumkTUXCXKgvDbYQNtQZQqca1MJnY",
  "key13": "3KqCRTj4yXVjNs8tk4GghVj9bzgGDVcahA3sbdTNMgiHozbZZ21EcvzevPVkAti9xkU48Ft3LxCPFsRU1QtiEctD",
  "key14": "5cyHZuZ25RimXAeSSRFPkx8m9fWFy7Mj3T1YNMBbLxDeQBUgSP8vDFyZhzZQKLyUo5UNNPsHJ8GdJWPGJb2pgKC3",
  "key15": "5PmBH2KaPegAHJSv3GMTQBRbs3zdPzuPjJaYtAjX9oogtBNwPWTkM35GJphYqtA5wQHvwcHEpC9VWjxQdZo68UnS",
  "key16": "4rG3gobQKCh7yeFpgXfooSduwSsZx41PdYEWhZz23crWzW6SpytoSHTyq8FaRiSP7FqRrWFddHtdqPqjX8fdZAPu",
  "key17": "2AZMHjyEx7XjLBQ3sVGkrgHsnRARroaFp8iAM3Q5XPoLN8QHTChVB8mykcBGktVdnZsAwMisHTCvHhXQdHnYE3s7",
  "key18": "GbcqXxwiCJiaYeRwXYdKUz9z7GqEMhiAWS4MGFUMFwPFfscB6AureSzUpJ3euqe9WRfQRhMkgwQZRBirb2cnwUj",
  "key19": "4tR6GumUL4gcD4wCCTArHXej7c73y9342kkUH7MD6kJTk1Lq6kBT6vUw3Zvrn5rNKfDjdmHE9XkKuGkYadabCWRB",
  "key20": "3Qfd586ieVdT6iE11nTYd1zRVkXpnKigrjwH2eiaFa9bshxKQpwjyrMrGPnyhKigZ9QRnYk3dmDG5H4RFPStCAnS",
  "key21": "WbTaK8VYsaB4aVMa7PMrFiuzNjX36gP4pHzuYTC8ip5MUYD6Mf7RiB197333izhyTA5SEhUmJHtRs4j14puYTYm",
  "key22": "52LtifVTDGWgydFg6QzAewoXktu9V85mwrD62Hegrj1LvvjK17T3fKpxxDtSr3UR5DE36es2fg4jn3ScnXWaKP2i",
  "key23": "5yY3TBFzPNyevg26VZrUmydb3784VTBadkPoyuaHj6iMgx9cT3s6oDfGXkmm88UiuYrzbgh5JuJtENRSnhQ9dn7z",
  "key24": "5EsYYRkXnKfsM8vmc3ccDPkGiEpcso3VYr49QecNUkpVhwwsShQa3Q6pgAR3R3x8GHXHdQCLBB4fX7tE64gdayUT",
  "key25": "6jh6zVjvrpJ91QYKnSzWsN8oFTwNGHHLarPWj34cBnZgujvSSHpjoqGiA3GyPGfkmWdNYXPWdDBDwMhRwXnrBFm",
  "key26": "Kj6fncFCEEhxnqo9swUVMv3mBCusFADAChA2giRHvUgKeovxAKzdJUxNSmcAbE6JNBuyVqfH64DRHKhKgBMaBAb",
  "key27": "2HUyNsS5akRKGbSB5aG2sqhtjWbJgYkYr8fHNWRSGatrLjPD93eTjohhaeLducqDtJdPL4jTvg9ThQu6e97zGBtT",
  "key28": "3dmp2FXWTA7Ngur9xxQSDgQCDb9gDtnwNPjcQ4pyBrZfSbdrivB2yEJw5fB6LaWfK8Gs6heGfeuKbd6A78Xh1Abj",
  "key29": "iMZLfwBwwmYf6r38cBp35qnvYV5U1yp3L2R89s5TsiHpVahyriAbvzCfjrp3f24XApDMrtbQFqPLKRE3JRSUXz1",
  "key30": "2nj1nNJ9SqBuHwMpTYBw2kG4bM2Ricj4hcFnQjXjZCbdTz7XJkTD5P6QBasT4PRZiLgRPWac3zkeYPHbRvoukGL5",
  "key31": "3E5Fwt7noEPgjuNKGXFCVXmGWcEjM7xsPx9E8EYMqm2Ak84DoiHrJMJcFhRnhsyPnbXUzssfgFqHiTJBH5BmtS4M",
  "key32": "2tTEGn7f9fttfXGBq4Y2uEZvpM8ZHjomuTRQvD2c3133RKeRpyRu4kZ5EpGYE5d4GYLJWCZsTbixfvcM37SxartD",
  "key33": "5CJwpAekPkyioQXkjTfz1wVz7XQ93sK6jWE6Ar71BRtJpNCAGbtnGh4Sqv2n3KErNHNVtoyZj8Vu55Li3xr3zaDU",
  "key34": "5mzVjFo5eSSz7LaGC5cnN1MfEkCE1dDsQegF1uCBM59NFDkrthgSWZW7oXw1wjfeNwZ5HP6wNJ2n7yFgpxnuv8h5",
  "key35": "4mgNV5PS22qijbPu2Ucg1KWPrripModd1CrFeTxYFZPXaYGxkMkuBTrGsAySHMyZREFAxtRSYACPVxTz4JMCumcm",
  "key36": "31ccr2Hbvy6pRstaUEfYHrrxTxSvoTsxsTjCzdMe7VeM18v4xUG1BRJjKXxj3QU31B3w4PmG8DRzyDS5xHm43VM2"
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
