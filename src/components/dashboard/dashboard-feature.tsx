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
    "4ifsh1m3MRGgQWKYc4EeqtEPLXaNvx7ttWBFhXmMXm27wKnLPYmR7DUfKfdmCKWuFiUWq1bQzgjeCR1ahbDnUhPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49BJB4mmzFhPUeuXewndPUoM9gbrqqSi8HTWoA99eAbd6PxXfAMkXAgPk1uQVsiDkex1d4kWCbmBHGtjduJvuE3U",
  "key1": "p4ihPWm8NN358ztS8BMwWGRqDP2p4vjCvoo4UHfwgUhApUF9xpyvsrYEJyhcpvhNVe5bVV4nKnZf7WhojYMToMo",
  "key2": "m3fgxQrvCGHxCpM7fN5DYPXiKaQMZFFZJrhsZDFk7X2j27DzKwwnaS73J6newKPfFXrUuvgTkpJ539Tt2tzSgcn",
  "key3": "TbHXcSPCxSwLSezd6nRwkf9RciHbri6BQwj4eJ5XgdyyXfrpYYnXxdakdf86RsUeHbPzRgQHpmuVYsuX3HohTx2",
  "key4": "3NCr5LwZ2Ms7jHj6T8FCfAEdbfqHmLDLPAfxJ6DFwDf8R6PSmEfSn3i518C4ipvJCkUY8FP1dqs4gjyWhQS3fLTx",
  "key5": "XULGwcWXCE5j119M1ecvUhTMvRa71p5i55ZbBNevbQGrM3TTTyPsA4Bb4cXmc87B7tVeFmzzxbhpuJkwSVWiTgz",
  "key6": "55u8NpkehY4qcVXKCkABZj9tiHsqGcmZqgBThaM7yrpkLGHoXjRsstP5soxM8hyh3PsDjtFoWRUdYr3kz6AXFXZE",
  "key7": "3nQTmPohzhEyr9DUFQm4zqs5CCaY5qnx36HPSvuravykvRjaK52ieV5wbuZHu7oVoSPj2MpEeadrpNUv3ex8fgt8",
  "key8": "2HJDwZsUp8wYFqWpREL56BSceQdBMzGxwMeAe8pb22bxNct43NSM52xh8Ct4vb25bz8amAPe6zM2YdDYrM3B567y",
  "key9": "4K8qWJ8XQGye5qz96apxgShSCHF2N65EXEtCAG895MMsbsaFtn2zt4yyDMF75g5A66SnV7kBYhMiZyKo8j7mKFWU",
  "key10": "3EPLJCuaXuqigKa95ctEPyi2gRteGanqFT4sx9TeZou6q53ZcM5YiCC7NNUzaRNqgfBoXYpeSr5c6vN4TSLAqMWp",
  "key11": "4S3SgC8ZKAbZyraGcYT7rdA94ZxgrLYHBbVDRTpGrBg8X2AM5wLgiTBKoBiixJo1ctqqwR7jQWv1aWbsKURQhjKq",
  "key12": "67A9f1u8986d3AiRuutDbaqsaGgRRycBPZT9vxxwu82j8i9eYtGw6Kb6UGedFyKJwkP8DjXjZVaoHfu8YBd43fhY",
  "key13": "5TXxyN35M8KPiZizGxEji9Wtsw76UeRshqtP58czbyYBi5pqDoHF8mp4J2fnouqDz6MaG8JhRLz865zypNEaDQUj",
  "key14": "2yESD2DynsG17wzJtUwzZw4X18Xoi6EZDSydKpaxVL2sQjN7afuXARCDFEHnFeYF8w3zPtNFamQEP3sSKVKb4G57",
  "key15": "gpRDs3it3CitBiQ2qWhKSBUJWePZ9892BrbiK6TpEgaf7KAkguREWtrjbeq8m6tt8y9xLrJz44ujZJzuivgUfJY",
  "key16": "58FQGXMU8KaNh193df7aoW5mX8zCUX8pm9f8KD2pfPQ2pWWZqo5xd4xXGTTe6Lv35syn3m8Re3qWpbuHwCq3Z8nZ",
  "key17": "5aDKTWLvigvatHMvRERCehQB87SppkwocRagErf2bixw5FPUvtMUfv3Dm5EB69bgNyFXkwELu6Lz3edRrybFc4nU",
  "key18": "3Zr1N5VNRNSbugzB2gK9wjz5MSEH5QWEgYk5JMzauPYfcNZhmjDC49y4QEiJT7ngExhn29Xa1oMCBFskenV6Z4R",
  "key19": "HBSqMzdscd3QgCa6QgnKLMG94zLL9bEu44oA7dk9Xyu9fKCqHmHzrwwiTJm234ibsfFAM39hAAtHNBvDYyBbkwj",
  "key20": "4p7CXoJUD4cymwUb4EDppkGKaif9cVbwvdhPf4vomtWnvxH49BrVL12BTreRY16qoQ7d4hSs1Rb2ukC7FP4RXant",
  "key21": "4nJ9Bf8Ueb1dXWVNkRvjVrMAG5b2o4c2udoicLpvQ6aYht2qw9L7RcYeHqEzUvq1KafwyC4bNXjAxsdTz8kQ1ceu",
  "key22": "5QeLQhvP86m6CSd1hbKD74ZLQRH9nyLZNGUkX7xhBXe9YhyktJGyhi9UJzEVHKXiLZPz2bjiBYdMSz36FdUvgSnc",
  "key23": "4x6uN4qY7DGdTbePK7CFn6iFkfxYZWHxM2yrmNq6hBKFTDCfXS235geZqFGje5coU18FsERgpKUvseGDcKxLaty1",
  "key24": "3o6r5eHhmvHyrpug6oueVT94vjH9C9AYQQgH8NBKcGyLyzZ1RCuJqQpor3phdvn3jaYmdwHVxMUycRUHZbGnvxFD",
  "key25": "2e5samDaoEKHxJdhi5HteGdubCnahbXmqkxXiZUVXCQ8BzRPG6122RjmiQenqjiicKBWvcjZmexfLUPqj9dzLo7J",
  "key26": "4E5Y9tuFC8TRcCkS6vbFhjFhuuVSZ6cx9hu4cxpkskTjhqiXewMrBFNSWHar2n8Ek4eZ1fZ2k4aRSSBASQuCHRwz",
  "key27": "w7WjcugNgWSrFJJ2MM8zDtGqwpXf3Khn6fsV483iUhrGbv8gAUgrfuY3H3APFNVC4rgBkL54NNowNmy9gqBR8hN",
  "key28": "3xfkTMjyHM93xPfZFUB2FmUV1xwUM35dw6KJRmyB1Lm6L3S3p2FVQNYw5wkkBtbx9ubQqo3kpToLdkNfsyyooBqq",
  "key29": "46YC6MiH7358Ja24hVmDM1ASNsdkNEZdFzBsCsX81wjENuyYWrL9pnHhcnfrWFLnFCNkNt9d68GtvbdNoJY2wpjo",
  "key30": "9Fyy6DtTc9tFE3ptWUQoUDL41tmmjWsDLsJ9D3uZmuVSsA8PjKAmwEJKY3ZaZ3i1KZEwUyWJnnbH5fvKp3UfHCv",
  "key31": "3KtVhMJrJ26GwDsTWAstdSwoLv1kYQZWodiCiHjcNHsY6PRmu2iEHB34ghcY6Hesns1Wtwnm9MCrh9ULnYBsCbVS",
  "key32": "B2hoT3NZ31jQEodg1EPzcA8NSTPmDfYL2zd6WWGfyUjtv66MGXKCxoAhJvYT6uFPP2TWW2AstrjmNabkycoyTYk",
  "key33": "4L6h7b3EwYBCWwddQL7xryQL2K8MdZ3AEBrC4rFNJvtztkLnGcQRWdyniic5tfeM39i7cU4jsbNkCvRuvHm5a2Z6",
  "key34": "4quug7frvUqFvnFZAeVJWJTqycVynz2XhupWA11MVV7VtcNDNv9b98oEJ9QEG2mFT4Q83NsFKBZ8dVuAJUhALYaJ",
  "key35": "62nnR8jgjgygL94dSAGUGYMKTXzrwUDMiTgXeHqUypg3mGZhbTkxA4CjpDtc1hZ4zv9RRTRyKKX43MzmXLqvj5Pn",
  "key36": "5MtsNwFYMFTVQ3iKco3cX8DvZpYnvMFVxiGxX5xjD1Nx2522hLC577JLL5ZxBLoXTYcmwPfWy8JvQYPSUCCcZKoF",
  "key37": "5vy29VzHLmxx1TzMUyYCgzSgz4qhKZ6tNx8yPsmndiL8i29RQ1UAznCPCH4eGBWNUsChaALF61xi7UL5je7Y9CZi",
  "key38": "3oVcfuUucF2ShyFR6Rpsz6q6aKEgnW1uyhpgYXSaw7Bt5a9YWifgAHA9KFPEzBuu18NP78zZLsUwyxqmwbx5gn9U",
  "key39": "jiB2oYB55eqURrnyFGhjLkeRn2BKzKZDxx1cJHL6sn1tKNYaS2czSgDrAMSrHAe5Yv9Tpt7nUJ8faq26Nkvc3id",
  "key40": "3SLsEVQ8gKzhCY475UXV7ZHqYKWQJou9i2eB9uNH5vDdisBoqo836NmQh7zPhw2t1QEeW1NvZZStczYmkM6D4zjg",
  "key41": "4tDxdV2zT9Ex9S2QWeq1VbZzJwBMhqUPFcmFwg6W14yaCTJs8TcFg5BNY2ha82GNdrCHmVFP3MYi2YsYuYVZJTWo"
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
