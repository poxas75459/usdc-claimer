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
    "5ifdiy99z1eFNq9Zh9z2y4TM7rqSuf6B5czke4CbREorvHattegLE7zL87kig7Z7yz8CpbcMJPFR2CdGA315s8Bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T6hzhmd2AzNVHaWduFm1ZjAkWTkjvQCz2EeRJNDAD4HafS6Sns73dNiPmsPyUsFtCMXH4vJaSKHKLm2FJiTSc67",
  "key1": "3rXeNNzALVqy3hnoE3cSAizEPjUJbTiVUDbXZDPRqEQcTD3TQM6LWgSg6RpRKJuFyVcahohAa8VW5feau5Yui1SR",
  "key2": "5SqFz9J6qgKZLbL56RZDn7ofeSRVDW1H4nDtA1pY8mEYGzN3k5zEwMPDcBbVDh9v1pNKghoYDrbuHfsAvQmNkaXm",
  "key3": "48QtkPhtEoL61VZh3KGCCcsCFpkBLigD6n6By5hHh8sS6coSm4hDdf3UbS95UKqzgabeB5E9wK6xvC5yynFwu515",
  "key4": "4f9ZE8gTLU1N3qQHQhbPMiKsVauU8aFDkiLnN2EssNNTXBHDVZCAFnS96we2vHap8SaMiqjS6XK5Fqj3zoMXR2dg",
  "key5": "3X7Bfv1vYQmaWW2r5pk93cTt71HF4qtjNRhE725AjZZNQ6G3sToxK3NHuvyK8ETMpACMSZx7UWBK5fjFVBvSBCFn",
  "key6": "4pyDUbWPp3Pu97pRF9Bba519nFqCwaaTWA8EdFh4HSGei463wF8T3vkroHcrdFMRuAi39yir8bYxzwXoSQYYgXKp",
  "key7": "udntvn2oMXqVec4CpyHyS4qaQPjfFkGF9npsJ9KUTnPVZktWyTcHVEV1PF9eRuJ5YSzDJ3J64iLnZosjGwzSEgZ",
  "key8": "mCEYkq8fm7EKjCaBsxDTY4fpNwuYh8HjVrnx9ZMVYNJqZ9jEXwzCoTaBshqHPoSCyt6eq7LUKrKe5mbeyn8ZcG3",
  "key9": "44uWH4SHGzCwPVR2qRFwqqBwqZsKZtvaj54DF9kAvozcuEUJYYndXFLcGHb41uFNYcaYFRPcsAq1tipM88mC38rq",
  "key10": "3mU1DvtbHPbQyWD7eM1JjDqooQeW9gnJGT3TD4iFJpdGsDf11d2p2ZyHhqRMGSYVQshvrmq6WcDC5VxC9VeCJgU3",
  "key11": "2cLRMKDegx8ojwAS1c4i4RFoEsCYkU8CaohMrPt8x2QqLunND2SVUJUyTD98XLuph7qxcypYREJvfrTvRvTi8g4d",
  "key12": "5ibzmwhyTpf27JDwdmDuuaKapivDt15q3t4KFw2kBA5ZRnoLs85GvKLweioc96Jbha8yAfNJ67Lic4c2cofUDybz",
  "key13": "5VDGw3ZrLRHkAZmrkAhTgdYyZemzoi1nSh3fW57bjVMwjyBepqGDr8WaeMAJfcGWApwGAKUZpRPj2PnhP1HWKcPV",
  "key14": "UjmBCH5qahJmq1j4se8rRovNFyKyxjg2ZYTcy5awQj1tf4zd471EffskGrW5DRajexxfvZ6Mwdf7wpsT4YqvW8G",
  "key15": "5uJA7yQeeewxGrArUkEhCkeBLEdzMYv75ougFNy9XL9cuUvzCkyHxgoGGcYKVA441GS7JBNc6vqTS9z1FpLtRfo5",
  "key16": "2Vw1PnUr7vLzpMgtzxx3SUueSF26btdWXD4MxKvXVEyChaDj5fDcsEjUx66AuhkuzJYz9qmXaMvALNue2do8Q2xk",
  "key17": "2Sg3fBWrzE7dPVLwXorUNtfLJYjLVJHbWcHfu95gopBC4SUS6JkgNE3B1SGaRS9gXc2J4kxdnwT1ewVFMr9aiTkv",
  "key18": "4HZWyaqcfxWUQdgKqsE4juvyMccG2TPJEfafzzPr9Vpaee6Ad2aehwvudXpPcnpWMmxKFuGHcbkKwobdnsCxq6u6",
  "key19": "FTbQzcLsUxkNmcDDAUqHB1jKUEDgdDqGaE6ukY5WmRHDbPxX7T8NST7VgJyC6qiuBYWi9vy75pcKurzBEmtqoEm",
  "key20": "4w9uJs6yznf8HNE1unRQUZFxSXBBkkRWVnqSKsx6dzXdYHAW9p43x11NBpMfVrTc3gmV6S6qhxR59VNSuPxkWTnR",
  "key21": "AxR9Xors8HFAm61H2hQgX4xEzmvYym3T6uNxkboJVkMMGrZnKMxbv5i98RSGD8vV8TpEGJ6EZ3pZUi7Fz1RauZm",
  "key22": "4KUkR8esro2iiZ1R8EgB41hde6dcPawHBV6xN2j3xo3MLjrFb7qyA7ZnXPoNvUAktosEJBm1m5NkzpBnmmVRhwh8",
  "key23": "4748xsc36q8vdRSyS6FdetfCAFvJSLhenCQUbKyieq9BRVGnGmXKDdbH5SkfJVqfuP3UmQwns4BNkpJLT1Uosg8E",
  "key24": "2XgLa2XLZ3NMqbCXLFhF62nMBEMhyJsUCTCYjYC5VvHqM5qdGQURi36gQuuLWc3UGYaVxRCfBsYAXfAoqo1kk6QG",
  "key25": "5jRxuWCJkm67c9jp7dy7HhMfAcQESNgtorNVY5G2F886YqNnDSpy84fJteQv8wooGXaJ3WKod3mEnqmpYe4Eqcs5",
  "key26": "roDAzMzTkMcKjBWAZ8w2pRUySbQjTQmeCESXzWB9s666FZYhWP77gircgYzGx74nEiX5i2FHmB1M39SiERz5DTc",
  "key27": "3FdMkm7TdvYoSUQsWs6kq2JE4xPuGd6EeVm9CQXCRdhdVw5YG4PJn6e3wfpzpcrZSqwa3GAhS7bA2nsGZa6zu6iw",
  "key28": "yGYbDymW4dKomjmjp5mUKhMX5bDWkmJkeztZLxx81TkvJNQ2HjoHDB8qd2toLaDrn9LejQF7DYuFSJTyzAGzNQD",
  "key29": "5D2ZwPVbpRT6CoS9D1BjwERykQRULbk2cQUtLejeiEPQyo6oXNWxFP7BKYHTqcvBFfdFwJGYQxWj7PHvbSuSu1m8",
  "key30": "4B6mmaY2t6e54UQEoRS9P4RpC6WSnE9svKRK6sLGUEtGZJb5wjswe5jXckPmukK9c6FRq4GnU5zxrGEdmPRsE6Nr",
  "key31": "4QMkPkAPR6AZv2pYKDP36rUwmFf4DtC2CTyYCMNBEUF5KiFkmov9BY1gWwfb3cTTAPatuwDpt5jzaWMUNZzu3HYu"
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
