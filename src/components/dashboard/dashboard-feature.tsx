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
    "2kikSE9d8URf8KyYqPig7g9XsV2Hd73n9saA3em3jLmru3pTaLwfWEN6fJwjQFWyQVyCXyz8jociEu9Rdbu4948D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X7VMDi5yMU29Z25qAyXiHUM32rJBchMY6imFrdLN15mikcqf8g1JcXaKPAo6NrfeSXYUoDTkunLZo1iBynid5U3",
  "key1": "3vsapELdnyvecWGSEwRxGx6zyWvAeUhfQe57rRCWtG9aub4tkRo8mN5JqW6XuhweGVNj1w4dy98dHP9d7PHgysE7",
  "key2": "3wXUnE1C7jBrggHMRym6Ho5ZnJJfjWXyPt3p3ccRCbC6q2ZaBtkU9eeEhPe7ag46eA6gmhXReroiXc3K5sBdUgoo",
  "key3": "48XozRKFJp8DYCX8E9fgdZBnJc52pGMXA1664itQCsBkPoVZ1Uak6NJY62k5YZaZJxhd1gq5FApio3Md3TnUx9Yb",
  "key4": "4yy22NwJqowEgJxW5oAMfENGwveUQkBHNkuNTwcyzSKa9f5EQMnFc8V8WtYJ7DVWZRpzxzPNZUmbcK6xT74YK4X3",
  "key5": "585nRqY3DSDKzMK1S1S7PPFvXjrnDAUnWf7SRkR1aXerAkCRvxXPHiG1ALspXF7evCr1h3tXXhioeCYEickshaNb",
  "key6": "2mfyd1QtWnuToKe6udfB7AXFAscwDQG2zq42fXz4ecuzL3TFSWLHpfK3QTjJgsNqtdU1tgEgbRVZEJq1k1DB6Sed",
  "key7": "46WiCNfGqsWmv8wv6voWHaDgmM72kfAtFqQQjaVTdDXtQKc5ouEFwfs3LsUp9JdvQVjP4ouZcsAMfYu8qN2eouE7",
  "key8": "2pgabEbqcFQCnJuDcWuUwAA9gY6JoDRpopDAcxfwRANvZbY1c138E4oCByh8JKnqaAsnu33iupsrYkteUvRR5Qgz",
  "key9": "3ZtU6fWRbpfSTnV6FENSLJ8PYrb2imV9eMxya9PjfP4yHbwCmpDBvZQtt89Lbh6CvHeCG77mthTTzojuTfgk4Hr4",
  "key10": "2xFZwB4cN1xGCctMZbtiqReLGQMUTeLwseAbjudCxPsrTBR1JUmFoC67kFrtJdokd4NajGZBCJFrUUbcXTbd66g3",
  "key11": "2cpH7L9xARFb1Psobd6aphYB97XwgH1tXuSVzMoDg4qjMA2oamL4NRMiVaNF9odcqacVdSwMwy6sTHSLWsy3goL",
  "key12": "5EUke81rsH3Ro4EakJxPKwazGEYwMDyy1KQabBQfbswX6EjtjSYjXxLuDHGbG2LRn1fMZrZ3utXE1XhkroSMkNmR",
  "key13": "2gBaGVpaqdaB2A1XHbLvqSBKoeF2ZSfT2X5PfxjzGZWaY8XaFUDxhqDUCnkt6SokLMW8miCusEiU4dJTGxUKdKjL",
  "key14": "EMAbevpDo63EC8kQ6mMvX43wef3b4Pa7Dxw7bcu3HMaL16zTXvpwc1Euin5opzX8bWEsFCURD5mZKEPURmkVTwY",
  "key15": "4YNgjp3f6Q5m3XCr9kQofSgB33Tuip2LJ1oQa9ijFUZgrtmSCoi2Gp92m1DA3ebRGJwAN6YQ1tC9TA1aYZPJ7NFR",
  "key16": "3Ed1APxpygCG9Zvg5S2aojAT5zDwDiTYZTGpaVaRBU1Nez43A7nnuQK3t36G7FMCwNEJMN6St4sEjE7oxQTwB4WW",
  "key17": "nEZU4YE6Fc3HWjVmCYJSZzG1uGkNHJHpM5cvoSff5cbKv1LpQv4vZu7yzyVzo4YQEGYWBTDJNVcW9RZh8GFrwfd",
  "key18": "3V8ZjMfpoHnGedWEugWdHTQq8WiCuWhUWEu3yPZRMdR3qfwim6jErE93Ja9SyCNASDdAWRmb6hSo2sn3kedcnige",
  "key19": "5CCvcyFokWQrCVhpR6VZApHpHM9Ma4gA8seruEheenhczW5AjPFzTX6pwhAcrMX7o43M6ZyPWGNaBXibqQmTbkiv",
  "key20": "4EvfFx4gurZ4e8HEggKiSLn3dMrvFVeZBoSQVtWcn84zBd2oPWYKNhnLyLtv7XZjwiYdAnSQE1AbkuMkTtyV5TZm",
  "key21": "2iLpGTxUxSeeRyq4GSSypwiF63VfFSJW1ZCycYfvyAXCsEdg7WvZGxcYDE1f7vfJNBkMLZyJirZPFX57U2Xa6vjW",
  "key22": "2FaBEfcKjcihujiKobJdQmqvD9yyrc8YndY7woqbBiMAVALDgYcVyvj1W1tmKKUaNheKfjAWPHMyCKkspaWJzN9Y",
  "key23": "5rnAriz9x8GyjYpMALpcWF3NvMrB5JPLweLXRU3ryftdzKWvRezGS3io22S3tjtbmvSZDcUYkar5ig2WCjR4J8m9",
  "key24": "2x22kGdFbKcmC4oFuDueEAeWSNScSPYKyHjrcdw5tnN1itzGWtk2cmKULSD3Vk9MAR5bmroUhC4jnCMsuMxbBeUQ",
  "key25": "4QifSs43P1RR5KvMvFKamaSv1C5W7sDitSAtvAqSJ4ovV2XsRnQ6ydFfs73jBrcL162gGcmGjVrn9rhnm45W6mN4",
  "key26": "3sZ2gKGmeHS76E7XRLMN3W2FbkaAevRunSdyUrq3oNiGYW5NaDNoZfZot17EpkbTNYm6rdZTX8foFRp4Dn94sG62",
  "key27": "2ZmXPKetoR2SjV3HehoTQEx9yr9s4bsmo5DKwM8LmBnbqff5AyxdMpNnrNaFzc3SDhjdYsq1PjBtGH1HbYtMqkGm",
  "key28": "5G63ppDKb9Ub9CoJvRDpAjo4KmAWfKbRqDMtLQMkzdQTmwxw3RiRVKgiEo1nsdUNwi1BtdvycLBsSLoqJnZxweAQ",
  "key29": "53eYuSW6MC9XzcdYvn49gvKPLJwEi8Z6NLtyGbw1G4vgePaxe6CgdjPBg5JZLGs93zxJJsSWd5rFZc8uEsF99dSV",
  "key30": "VZBhRUyW4JktRra3zRkH7uHjW34JjgyZ7HPS8x5DXa35w9SiAWXJR6C5RoJgPA2air4x95f1ZsggJaZgYVTDs5L",
  "key31": "fYv6mbamqnNkLxawxQiDkbE9eme6RhfShYzmj4Qq8SceqpA8KvjLGN32j5UyZdqGyEmUMKDef14JgGxwEHCSHgn",
  "key32": "2FDxDhrzL9WLEANWcGHB5ZGVvYrcHWG9bf1CEVVZFgceUBcqYnRaRWSYEtG6i2XmNLwSwRvT6564Z44Qh97KXFja",
  "key33": "3cyicq1r6S2xv1oqo47asxit5D2Y4FGMLg3iwSFEpArouhFwCYC6u6Ni9g8DCWtRNuMjdBK8oZM9GSLhQbZ32rKN",
  "key34": "5hU6EC4KgKAw4A4h9QLTHwqRhJQC3VauapVbp2qHtMkPor3LB3BSicCBs18zKnaiLTid82pvDhLgJDhvVu7hPxvH",
  "key35": "cD7ekKtmUhexyYfD57FvvwwHCNbDbqRbiPEeabe5vEQ9baoXzqHP13v3HVzhPjEHztZksC1eKRx6hBaEtZJR9wY",
  "key36": "437MjMTSEEMMo5tMG4XJNRenDr7e2vqw3thtWhXag8X9eeXJcYpHQz9tLh4DYKrxcdJtLjZRf51GvBTyYeSd65gM",
  "key37": "4sMNuDUYsGhw2aW94w8co3B2heX4BH9Rf49guL5PzRUfm4Sk8smxHStMZUHoViFZECkTpWw8Jgytaj9qJxbv6A2T",
  "key38": "ybdfdidBVafsnMjfQ3AVQPi9FwLJmEPsXbTTD3xMM7iVnEu5PA2Jv3mJkshgJEW1egS72yJUzcnHoUFrGDF7g9P",
  "key39": "mW15P9MoXyFQYk7X7S95y6DECtwbgxXbg1PACRpFmds4wWmQN29z13Cb8CuWuJ2u6vidhgTBPWxXxvfNvw2amRJ",
  "key40": "4pJcirfMfCRM61yZpXmnz1aZmFFAtuDtjsFWkuNcCXv2FwaBLYsS489Bdt5KhNuMdWMpqcNo7m5YVvWp9yzwKHj3",
  "key41": "4rZy7m7nGrbczqi27HkYUDG29FLmJFLRQC3oD8eHRrNyQNqWVmWUoPnkT8sq1p1uBSDhLu5ShbmDtqMbo6PCYoWU",
  "key42": "4ZP3qbvkTJ31ENEFqLNi5AvkZfQF8JRHeMSDsEhMY8aysWVocmnC87EFH1gsxpS6ws4ag94gDZFb7Kqb5YKMuKuW",
  "key43": "5Tq9xpyn2T7N8LmdtUNXj7vEy6qEkMAUG7fc1JK59f4dkXwGo1V697V8bC3YogZEwxJtptZATiNT9qxqXAdaJrDq",
  "key44": "5QtC2LyTGooMHhi7vxt4y9xwTHqZxd9npVhGYVGZFw9YU7GEiJnAqRpAR9oNuRYD4U646aS6oiMrFRRknwBFQj5K",
  "key45": "5r1Nkw6UyRVvuuq68478dPE5PzDw631SXopMNk4UVZBb6qTuMVMnnLgRHFVQysiE8YSCeF3wFzmYvHXLvqEN1DXL",
  "key46": "4rMdGLZpLhC41htWe2pe6ygVma97Wph3Wdw9nrtyUT7ESQYuJennuyVDuRZdfcmXuqyvS6ZKpMqaoe7Yqw6cLDrw",
  "key47": "5EN6fZEbzRf5Fkge5oaJ4kTGU76aufSGrkRkykuCYD2cqUVefGQxEZbtbfkYB3nuJYzfeHhRLC1AENSHEMm1DrRh"
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
