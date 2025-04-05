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
    "4E55APEP5Hyyvm1xbv85KnrDpk14pjhYHmkbvZWWUFcz4akYsYmtBjTPeS4QCtpVsNWMqWpne16m9gfBYncjd8Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c5qQHdY3jResmsWYRRLhhCzkEtPCRKhawe5Q39MpUfi2ZBkTGJfiiqKErR1aCMXAfMFgoZar2naBmGnHC8fRZSi",
  "key1": "3fa3Wd3VTGcGjmsmJ2xRkCZJYtHTEEGRvS9DFP4EuNAW7C6qk5szReYeSh6Hd6GG5LP4mctGR7wrgJVd8AGdAK1H",
  "key2": "3zRYrdvAwDmjrgQN4sWq9pFMqhCLKFoVNTMpPZRf9WWBsWRKb9hyBohing8UzdKGiF7CegqqtZYpcZBgxgqqrWqD",
  "key3": "c8JYo62XDADPzM8kaGrDPA9fUWTyXgST2JVgn4tbpnfdWrN7wcrDx6PF1EABLoGn6aGyeGcKhNrYfZh3EKUzaSJ",
  "key4": "5VZJGYPyRVdZ5sU4RnCDfMyVQEMLa82ppN1Av4zeV5XaVGtzD95cwFHBVC3st31Nf4C2wEtfSHn2ZboZg4cqufFs",
  "key5": "59fQV6RTncqtDMDqVC3exSNhKxLyQEuLZ1T2cWSrf88eU6XhoLs54AMhe7B9efwwFqcttKEFDztYcdegngdnFeG",
  "key6": "5bLPe1covocLV9BBzWnBndswhjWiu9bkS2r23B1ZSk7j2xwxQe9PDME62fdtoEnvqrQCG8fHNXuTBdJVkvmL5CKz",
  "key7": "BdMuXQpeEL8UZqGLBRtSBHMDPJQj9wCDGR5XRxW21sDP3F68avyTVp9eJ6X98K75j6wXkcUrvb5tDkeaWdrEn2c",
  "key8": "3J4jazwyayDVaXoPH2uMko57U7qudang3s7RdggvxZrvBpPHB6ivpNP4pn88WY8h1YYFAUZGXgL9nC8Dtqx7YZcq",
  "key9": "4Hnr1RNUZcunveR3v1DYtteZHBhcwFHaMfWYujmMfwuWhU2Y5VXfzRw6pG7j8aYKMKDFXsCFJPDYLa2KQ4a45uu2",
  "key10": "3q2DqG1vDm9codpx4rfomqKVxKweb7BpQRhAF498bKDRyuiBPpGYdFNP74vdJMSVukxsdBxSh41Waeu3jjAZWRTY",
  "key11": "58TK57UTi6AJ1jXDehqJUJAG1iGBJyf2JeK66JW9xeMw15JAaaAskDEJ3s9qpET6b2FZHGtuPepJun36g5yjSBg",
  "key12": "WdCqLXkDr5oTPibuydZgNmhjW9dPgLZDGMrGVBVVZSZJKpFjZtjdD8h27NyxH9rVqFxLtBoVjYdn28FPtFmi4VA",
  "key13": "4kizpjYMAoPjZ6LnpVT6EoFBhZ8mZd96cNWkXSbE6XmZa49m6FpzWTSpAdPUpbcSKmavQEZwm3meexUZWXLLNDnr",
  "key14": "4XnGCdfZ5C56Qa5GKVbm1mmdWBZvfhXnkDvFaHNFF97qqMerS4t5rkeD5vfxFuLNUqrNZtqNegUh6GMRCWfyoHQh",
  "key15": "7hiCo19KweYBVfgg5MqCdcQ3XK2sXRc6egz3pMPD8sd8S5vQWT77J9rPQqEvYZgg7HGuvHQypjusisSP93darXW",
  "key16": "5fuXk7FNGgGQz73BvZPdpQTcfXAB68JJYsoTP1XL1nRwgPmSwHyALAkT7LkMwG1YRDzb97MvZefxTTBjft8b7eud",
  "key17": "4JkY67uj4CdhHjWjdu2FLrBKikLvGvonQQt1VpXosfyBFkFWPQYGzF7UqExpzvNtwxcvmcFX2CNMciumxw6EvwMy",
  "key18": "3EWYpDZCohRvVBLooLEto5NGBq3kxvJTqKsiqsdksWeV8EjQiUGaicdpCFKbkyAf2TbYYsctKKpQa4eUrLdDLCL6",
  "key19": "3D7Xp6hdjE4uxKBKSxn5qEzYSQ3VhhegRD25mpzsibjLt2GHzSNP7zvrYEKj3ZN4oqhN4tU2FmYPGSWruNJFGgJu",
  "key20": "29Z1M9RSNHDNspKT2u6GWvV8duEM1pWo2nFhtYmoddoUyBPJkFrPMhfbnKvXC3JWFv7JwcbegckKK9Q63BKrV9U5",
  "key21": "4zKyFYcHNeTeZHd7Dj8ebfJbNyajjP2ncD6SQEFUZ7JLSeS1og4oHYWU4Kd2djTrJWdEQeWzdB7vqWQpwhWZ8y6k",
  "key22": "UtvFG8coUJpUcznjFkWQ6fnrL2hkrDedgGYwMhej9tSSUE5Ej7kawdRZrraXjg9czGY7tvh9hnMMHtqkoRbannw",
  "key23": "5XDis65Y7hXXzQTP7qAjowcyfr2iYAk9q6KeD7i7rtBTSF3VQKUC7KQXGzL483ykcNcSfzyq3xkZJ4TjLCAUabEd",
  "key24": "2GSXPWhsCBgoeHHZUYxTbxQCBFMk9RVbJ8dF7HdPBTDAdQttYDd9gSUgpw2UR25K6y1Qyc5jSFZ3s96yvo2drKHY",
  "key25": "2fpMCAA4j8SxPr22t3ox7u67VtiPRRSqP9BtjhhnTnp6GkzYTBrVhBDhFkfn2Fv4kDqPqd1fH2U5xMAB1ovQBAP8",
  "key26": "3269D6fKUfLU1jYMuvJD9AYjZtqS6seKcsTyFAGRK56tfxAFrNKWCJFKCws2jUbBgtkiaJ6qpVVfVB6jgRJTGsio",
  "key27": "ayRX1bXHUw5zAwEvFeEPJUHoaYuqPmWL25vait77QdYN4qxg1XZwrAnNnhq1NopZ5ZZyYWeadcGsY7v1USnfXRh",
  "key28": "4pWpQTFazUxJckaTZbUYssqp1QmFeEnM7YbrCvHUqBLaskpV4atJXPP6MhcvB4LDs4KV6nrTNwoLMN9uEhvY5TBy",
  "key29": "219Qzucoyr9T3yXBKuTVf8f1HKr4xCQccJJZWnCGbf5zRrMXuPrA9cvhjfCGYsayURVVoDaq27ppV7DheJB9YmGr",
  "key30": "2B156KfJJUESVuP2QMDWHTWixjHtzj8k5tfPNDWhDtEfE49o1MnZgDLFY3TzKT3SyJB1d24PTwvtV1RQZmtNqj5H",
  "key31": "tduyKP7AZPw7jC566VyJupUZLxoMHRZLZsWUYXqh2K5iCtqnBZSXjwptmMDraXJcKZvFu3gQF7R98iJi9MVmo8N",
  "key32": "3AVX9Jxpzi1RrTdB5sQn114CkkjsFBkSZjAT1zYMxoNoyAnmsSr5A4vQ5x5KqDqKoSt2UAeYiuFitGatex9s3qy1",
  "key33": "51Db57FsGMrNga92BmDmFD8KmNBHBLrohxioJrwQeTfAdxbyaL6dMAhLDtiT5MG7rxyFLo74mqLYqbWWw69rc2R",
  "key34": "5MBhGtYDrX9RaX4fSf21Pk5MFPse5SxNhCCjrw6FBc2f21pGJcxqn39qxcMbamEcpPPBHWfNbf3Dzfu4tadMv1Zg"
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
