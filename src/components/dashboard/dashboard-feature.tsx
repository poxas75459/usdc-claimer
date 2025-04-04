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
    "34yEkf5CFv5P5oR4syKZGY35gufwiWLYYYapEZXDPXiZCrnVPQBkJVucWCUgshB9dEWnuu8X1M1h7UnGrBYAyWcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ac9Vrt7ZKbgB6cqmBkBPcppZYobSPe4mznSWvp8jsX6tvaN4dJTy5CEsSc42xtNdkdH7X9ekMXNfssWGjnn3Kdj",
  "key1": "5PQSCuDeq6Y2G1CgtuwJFpj4Wb9AsGR8WQsKUDUm81NPpUWEgQoVx3FdB5dBbFMtBDx9hw7qdLNvVpfUdrXsdXMv",
  "key2": "nKaTEG4DBryR1A5oMMiBgJbLCgFqCnosybGi5VEL35gRWipuvKdwkKRrKCFyLSeGTtHAqDHqHQ9ftp6DRNEw7tj",
  "key3": "67V4yLdfUHdnVNh7nJDLexA6Nt6spJLLRQBDLXiupN8wFhyrp9Y6bwm23fPgrS7ett4VrMwk2FrQe5jZT3gFRbhf",
  "key4": "2sZqTUdQyC4eoyXZAYVZEMG9z9c1FpHmoGaFneiDtJMQ4Tzh8GCfxGAimvcoEbWu13HNCQv3AjihPaSTZWtWWjoN",
  "key5": "3zuGVAnM6w2HUUhMdNTepMWz93gExqsMfqRvghJGQvGfrJx5dLV7aPUmPjVChXcyWoYp24Hup8pLygWc6pfBZ59C",
  "key6": "4m3NgMMpvmrUAuK6SerENgU5isYuMhTSgFvTWnD4dVPqSFZJmAZP3NZZVE1Ntbn5cN3QT5meobB8SZmsM5wbiGkM",
  "key7": "3sbyr3kjdn3vJPxG1faKm5ACxHLGn4oS8ymiAnTvMSSdDhqYqZhAvVUxeu6YvKVUZqpAHp4Vk2efrbzZw5mYkRr6",
  "key8": "2CdyN2wULCCucrx1Bzdzw9UQwHWjeLcPkHn6UtxZ9sV6v6aqnoKiogTc87tb5Ht4FxuG69temLJgceei14nKSCSt",
  "key9": "5KxVMgzQgiV3mCnaoH77gMUhc45cgeo2Z3sCs19iy88kCpRanf9puoQLTRY4yeve6mziiLzoC5o3TbjcnsotcBbk",
  "key10": "62HyQG8CZU34jVFHJsRdvUP4H4PAU4vktphkxHcBYxPF5yrdHxrHjGkkUzzU6i1RMdD58Uw7jqYTZp1cRWZctDCW",
  "key11": "2XehLVvNsfDVp69jEk8QHQHdGcL9CkeVn3mgVZrkHurVQ9itbAxr5G7H5bLdi1uG6JHe2GCRVvPBpufeGB7gdLnf",
  "key12": "HAdkWAvSokpcjCVXDKLsfnoJEfsKP7tZqTU5v533EWe2tJXxkz9tqC16597G6Dm7Xhv3AdZdg3HmZmm17KSSawQ",
  "key13": "HiCrdKRnGmt5oZFn655u6MThdNgSD2uuixfjaE7CgCZcbg5KLMcC6ASg8WfLZCZmf57MFyspecJgK8cTjioFMF7",
  "key14": "5XXeYR9EZn4uRzHq185BzHYXEMXxwn8sd2DfPdtCmqWmE3a6LvT5wy28SygdUwosz1AeMsJJ9NJnqUoCMhuPffBd",
  "key15": "3H1b1d2JAesw8bK11ZN7WRvFxowq3fPq8zfh77n9yky6z5Hb6zN57knF3gJ6HoH48yjBPof3Vt8CMaNgDyUpK7w1",
  "key16": "5SmPYX8EsyxGovKGG3heCCDrKLh4bX9upVGogKXaoeESNYY9BADUbcX7orVXFuKzJRZVnYELw6Wjsb6j1c614cfN",
  "key17": "4ijdZY786WmUoEdc9dwyMbYEwRVCYvR9dAtngTp6ssNcaTtb6FM1cGPQqW8pfioDAeyBwWnJ15ZHFNao3EFxLdU",
  "key18": "3HvPRAUxi26VY5keF2aHCLXknE4Hcy7Yf6F1nxhXAcb7tiuCMuScJDFdB5KmrL1JvMFeQxLKxBQ36tAhfApfRvvc",
  "key19": "4BecQpr8wSv6Z8BhJJZADAxJx6Jt1HzzfDm431kWPa9UCARFSt3kzgKvJgfmL8HCGthrpAguGSk1sRB5cffYEars",
  "key20": "42qeMLUdyR9jAcPiUcstirGLk5G5DKn6ocbUPPi3dbKFMiEwCYfcZNCcvbSVeWm1WYvQEBqp2m272iEVqin2JCw8",
  "key21": "5gGR7EM7bgSMf3RrKnP8wH5Y9mMSAixRJtQWUHjk3G3AL3g8wan9zZFrDMu3Dnp8k4sYDAZBEFnY2CDbQXidPriA",
  "key22": "37mhYS8G26wj1hPf1mCrNSF7q2HXfBZHBaKrEcUhAiyA4pwCf8dxmXAZdqPZchkTTj6iWcx2Fv6TGxQ8b57MT8ir",
  "key23": "2J6tNbzvudQLVhsWg1epEwueuHD2GjnhPsPk4Bn1X5Cn6gVt5sq7WeNTCAu2QJ5fHfJgCJ6RLBRrozWTtBFAsykN",
  "key24": "4hXZH3JzZymhnpx4QQ1FjuxutyeWo9VvSzHKYe3ZStQRU3ddJTmZJgUoVJpF4jdqLYWQJAxkzTTEbmWSJ1bRUVWL",
  "key25": "2Kq7sbyDnaHPWHjZY7TKNwp6iVR6gJbd7gYMM3N9nawMKL93o35QPo7LUQwbmS8jf8Wh9wvREqJKvP42ErpT42i8",
  "key26": "3UbP4bDYGo2Z8nMF9W5Y8cLddfNuLyys87PfNDqmz2PLXFUdFJijtV6ewBAzCz8HDjwFepz82F4V4pKLuiiUntRp",
  "key27": "3137FZMGmdwXrr5uFyZaS19oXkktGFAGnSTCQ56G2jrLS7sQY5zYapPmR5X4VtzuACsuzAeBAbNLogG9zaEVkWDj",
  "key28": "26mLyUTcJUoYnwd3m1FKdUGtYGWHezMfAAHYUZYVmtav26QGiCdJQQikeobMiuuVTpK1d8v6t3c2h5NHYsoPo7hY",
  "key29": "2tDYam2Vcb8gsxXLFY9pVpL4Bq2BLzSbkxF4wn93bgKiWR3GervMvL6EsTawze33ZeWih8LrYDF6VcVf7tQmsefM",
  "key30": "Xq4S9uMAXpNTLeewU18qjLn4VPRgM8sAHBGwkU54A5x3vefJrTkdjcR5ABs2PLpW7qqiSLKjnsvgD4MFmVKQJ3y",
  "key31": "3Z3U3q4spKySD5P1CRRnFUt2gzCstADXVNMTjpF24MFKJkCFPhZziVfWcsz9GuhaW48HvEzkf2x214PdTTNsvyZv",
  "key32": "5PD2Zspx3ki3uBKCMaqSQN77G9PYiLMXxcXA9aUhJfJ3scdBTgvUz35dPPdyMeBrhNVLbya9rKstPovS8kA2sQnE",
  "key33": "2YyWvyPcku45g1RUQ5A4vrKRbUgh7Q9CYdyg7jX3kmkNuEDBBxThPDWNnBco7ZpM5JheAmLHj1SHgv2pkVP6NYYE",
  "key34": "2uAwqfUnoctU7ktmFfAFf4L5pimAoZVLw4a8WbeGPjb4V51168Svj4X6UChp2Fxk2VhnLtHTBmcDhvKBp31cbZ5R",
  "key35": "2NeoZp4sCyGUdbwQTcGfs1znaZstNQX9xdXK2dFoJQivuVaSNZwRidySXhct6xQPVxhLouVjDLPVRGDrZfbRaQyZ",
  "key36": "452VoEHWyRCEJdwwFrMfG5nPAn8nMYdyVxEB6EEg13ZxmaqPgZzkgwPi7iC1wY4FVmt9hgsYob9yuDYadB1dyr21",
  "key37": "BH6mF2HKnDv59aTd3X3FHwSezT2zTxu2FFqyYiwC5cqhskpEBSySwDkoUKDMMkU65zhFCaGjk5jZFUqdyJXWCVU",
  "key38": "4qCUdWoBQhYcL9wz8cFkmsZtZJBzo3s9NHBMJkgY225VX8L9EdaGGGojRbnNz7R5uwnTmqKosHYRJaT8an8Ewwa9",
  "key39": "43oDJM9Eqdhg1DX6S1XgcJyXq1grDttt932cKNtoBAUASkGsdHL6JeQCS5d5UvhxzjzggXMLM9WJwvXJ9bQTiC7u"
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
