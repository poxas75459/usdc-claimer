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
    "4gGa7exxr2ZJ3GWUHWJY9PY6PV2BUjj6hiN9heZVufdLmNkNoQoSrNtcu6AH9qxJtiDE7V6aBCUMFAZ3u8Uziarm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnBnKSBNuY8WRE4u2Za7wyb9kcdgaNEqvHfAX7KEbk5pEU5utGfhmNSMeMe9Nna7bywTeYPQmLv2cT4q9HEGWju",
  "key1": "ecPvAvxQugZPnHSdTGYD8dBPA1M4WBr6VqR8bvPEiFasgsGgLcTgyq9fsfQyJrwrJpQqTP79rsf1aNMg9D1GiAH",
  "key2": "2fttmW3ryScpFAF2AeqeZ6Lfg7qRHj4BHDdspUEC9PY3vQYFePry4C5P6CLQAbx57nrMzeFCf2PXheTL95JP1U3a",
  "key3": "2UJMkQp1ook5AMs8h4c5PdKvautfD5pdctXUcWeTdQMuduUXQQyrcjJVQm4GbMKwoRdwgMsDJK1UUwHvYYrHed8K",
  "key4": "4tPkexAd5cPczMTaTGuKPFEqoQSfCcu9uGmbZ2eyQEQUS6ai95RnThtauqQZeUtGVXuhqVSE22aRGWqev8uLU2xa",
  "key5": "5FJGgCPqqadERyzw91J7nUifZCvczTE7dzPGjzGCZDdQP16gG6vgfyMWdyq9KeGG8nMfe1VjBAJmnGjFecmcf38c",
  "key6": "3UadpnuZ49zNmXqLV11i2o5jtcTsKP2GykEDmCWu2bE8rCtW1DtRkq5m1YWYKjuYHrueLyGKK5PfZuB2HmbZh59X",
  "key7": "5L2F5Z6Tx2rX1aodRthV9BuAkNpPFmXGBNE7yu7wCDAGumfnNYwGEHsMrD5meeUgezyYnnLBBmo4oebffbJAi31D",
  "key8": "63aob263L8iUvQG4X7F3EspuxDuuM2v92YUhJWPFUqTR7eHcX9GQHAzdEDZzsg1TKtn8MX9RWNv9kosujkG2JmqB",
  "key9": "4w3QeBNdC72LoccAKsQcU4qQWm6oUb2gEj7TrDYE6yvrFvZDh9BTDyVqtG8X2eUH6nj23g75EpAdMY4PEbdaNdag",
  "key10": "2kUmzN1LkCPCpzFDkrCbQpP56s5EarZvfJCtHDiYYYP8cERT2jfcLFmU2eakfak7Vv6tPJB2jjoBz17N5Xr1RqF8",
  "key11": "5DNt5ZDhdVDXDqFT45Xk5wz9Kz6FgGYard1MkaadqL9pnKW2EWaJjW8FG2yJD7FukvYkYY6qk2dQft54dJeAfGsh",
  "key12": "Ri8VB6X65LKu4Pt3YEJjv6Rkqp3qsVB73w8jrBRmmC7sR41hm96rtfT3haN6T314BbMiVoFsNUfgi3MF46GPSxd",
  "key13": "24aqjp59FwXtc413kY3VKEXiK6MKX2SjVyqnRRaAjdXC2tMAzSmFTx2hwEgKYbiXCzxdKbxQ6QYwRxRM6n7JtBwB",
  "key14": "3koY1uuCPx2Qq2x8LtZ5mRrn8eMt9CyLsJwF4JmBj9jL2ESJ2xjUc5voXkU1aUnAxuh6Fk7WMUZehFcKZyrCEgw5",
  "key15": "5pvR6uGhLrdo95SpXpUryfhHekKhAQBXW8ViMuoB5euhGAYpoQGFLYNW8Lm5b3sG3RuLPp8Mr7ymRUB2UcNtu4ZM",
  "key16": "5nSui9C7S37SPf4uBQ68C4z1AcLNHYsUQice9cDSwbW6BkK5bWbW7uyiSASrx3G6QpcKF6i47ShvwmZnLKE5rYCf",
  "key17": "Q6k7c9hHdf8RivnzZio437KwjBgkDqy41DsZThoNNWYXysXpPUvtKJRweJgGoyrAEgkvwwm9AEk6t76yUJtQGGc",
  "key18": "3BhHNRGd36wX1BGJjr8kfh97wAyqJGB4No4kxfKAWapSnTwczeEGvhotVRKehQk4UFpRZTxE3jxtadxnY7AuLPZ3",
  "key19": "3ChVfNnnAMWP9SYBQ5xhKC1gcNASXT3363BekJREJtDAKJpwHLRGgn74AixNSDX2czGJJrPMw2R8Ypvpm6LYjdcr",
  "key20": "5CP2QzhFYqp8c6SiCLddQfVj14iZg99xjYSZCEHThSqjDvXaLYfGbEnarwyYyet5siP6cFvauLf6ESTBuaRTwNCh",
  "key21": "4GALoxJA18MFk1deRdociudQoaqsDXpM6u8SMqXmpBcsSt7FrXY8HXxLgRsD9QLq8Gc8NXnRCY8oNGGqC5C55Quj",
  "key22": "34By2bJwFD6ozrBsCqTkBwdauSd9kiWaTfmMeCGKhHRYnLpu4mhns8FAHUevK2SAb4t2fwb6YUeqJ6dXvqPAte6K",
  "key23": "2KNmPdCreNXqo4QueBPf4viDmLXDtCFY7LSmJ7sfeXwFvMft3HAP5yRqMfKer4xrfV7L5PussgrfrbUxTiPe4TQJ",
  "key24": "Z6A4aSc8mPmgdzzwMZWkNKHxYvW9tVmogiMpQ7cu7xhZT3ugWdGiCH4iif87YfMBE4JM8mywF4MFJ5HxtodhEc7",
  "key25": "GLQGEgVUSTNLysfbpkri3epw9PGuRJhf6v8zgRhiKNSo6QWXWT8e7Q9E3zRsBdHFpS23gZTyvnSjJK6S8bewnmD",
  "key26": "zAwQhgzwQEVAc1ad8QBReG8ZVx69WZMukTwXmKAzzPz4EABCBL9jSAQxXzRGZwPuxJu5MBVvWMC2LERnxRvUPup",
  "key27": "4yWJbdcA9JKiPjwyASYSz6Y65TbccrwxKUPgapcS4WFTSPGpubfMYNEKXrVw3SvrXDXznMPc1uEhomqE4FE6yfk2",
  "key28": "3aJBP2DbuP92JLyjfy1XF3DpQJNMK9PkcMMLQfcZUq97AktY9bDXZPgKAk2RYoTNwkM2291Lrw6MjNChWnTWPiwv",
  "key29": "28fmExQitpxfUn4uee67Tes4nA2nLaQsoXAspsq7Q5NkxvtVJVT7HSA7B45us3ik4pesNCUk75deNGsKb7vv2ur3",
  "key30": "5DZAcRK2Qv2ptBLNhRnGk1KbzsriV6vHAE3Fvgp8yZN1C5YJg75qr7KMEWBBHewo1wP2t5HHX8qSC8qHN6MEEc8F",
  "key31": "5UeTXpZJGcoq5sX6iT5VFBSzRD7osjoHNN7sjtz4McRgEsZLQabN4AvdaT2PggBp95mKWxNbrZHBam4QnpgVL8DN",
  "key32": "ZD6WzZ3tdCqdaZDA9Yy3DxuFfqf63TgDYHnqpWtHJgJWTwsQtQJ6iMkMFrgHmS7FcatVXP7dA2X1dMvwfU9Y4o2",
  "key33": "AKCTU1Smo24Hf6sGjSMujJeZTcpt6zQm5FGJbKePVmWM96Csf9Z2U4es922Swp2d5GVGWVCb6BAGGhVNPGNL5F7",
  "key34": "4UcEgK8saTUHdkESsbp9sKqwMnV56K5rwzFTh3TC6ufwMAnkjGzse77QBj5Mb3YWxZXi6EbMBhzisavM2kHC5oeE",
  "key35": "5abs1Cb1Ntjv7eyyeEpwZwEdBpUPZJduDMyXFHftVNs92ZdLQQ9qdW9fe97qtDN3FvVrNC7GEeVTHipcEnKbBEj1"
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
