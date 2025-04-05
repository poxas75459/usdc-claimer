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
    "3dRyEZmTDuzigpUfE5rX2GfV1HWWxdU4bnZjcVc8L5WqSLgaYnBvZAh9hxjjwVLE8BPZ8xSZLCgCoA5gSiYZtsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qnL75rpQEEiUZCQp5SD7Qx4oG2GXy4yxb476dMYqWoyfWfgVTz3LRFRsyBEjUVe48U3q1JGrsdyEy3gHg4esfht",
  "key1": "3WFCi3zT81TkAbearHK8gjeFQ4KTiePE5Nka9wMfWKZ8tzXt1M1DcNcrQVD9sX48RqkA5u5Qck4BN9QiinyXSbqH",
  "key2": "5uE1bqyLNyWs571TS1oRr7L3TRLuXsCNq84qJ8UYrgZQTvKgp4w9m2ZFjJETwFYTySW72DfqbZt64rq5VRaNeN1J",
  "key3": "KH7gaRWa1r6M88dWpsk2PUxFptRVRuBZWdLWZT4AV43YFEUBj4ag6h7JX5c4NJPHv3cQ76m8iVGNQYSZRXSF7E4",
  "key4": "ckpL16exvs83miiUmh3C9dKfgXaU3Pe4Vww7GFrMGKcTRBUo2NzanRYVeiSH4j4J5uukt9WWcd5p35hFswNoEwo",
  "key5": "g2jVgRa8jZGLW6hEhrPsT44uGcEGsJEaCXfswdjM7Cxm7nvzPLzREgrSbADza3uM2fgCQaW6YGkxweNuCSQJxc7",
  "key6": "3fR2tPRc1vc7muTLF8E3ZRMzhfE4BMULt4RskkTVToHJ8raiuqzyzYC63TndDBoPMai3WFR72NnxquW5bRyiYhHo",
  "key7": "34JXSyrexYKSX7aZ2e3YHYzHYtastHp8REfxkL83Na8Rfte5nLtap8trTMxzbTUXxNYQLkSRzg5irC5Xu7jx8zec",
  "key8": "5yScH1QjiQ2q6EvBPYryKuGJKTBBqpaALHFvTYYzydUikueCRDjFqeADZDWTMY6jxxUtr5tHiMzh6ewXXyFR5e2p",
  "key9": "jyKMjx3ubsPPhsgjRooog8AqJvtJj3iSamKi1X7S7Rp8kgjjvPER4WrSop7GkCWV5AEExarDGXgpdPQTD1xRRYk",
  "key10": "5yJjA2LktTJVxoQffWo3NEHpjHizL9Jdf9brA1tijhbr3p7BU9pNabH95o1wQR74VnYrDKXF9gGqgU3f9MkGXePh",
  "key11": "5TykejfMWH5TvpwqZA1gBFSwcL5b2Gq15mDJChPwJt3Aq6Cyb9MycC6Hvtc6cAAWoAXKie52TigTGpwxnAT4beTJ",
  "key12": "3E72nq3PfBGasCpG5hL1Vf3nmyFtveqifyC4NjmKXtArsKmfRpRCaLV6hiiKzEMaNKvfAUqWmSkD5tnYCXWWbYJD",
  "key13": "YSxWRBLngX9h3MJwnQ57daHZbDK65oGxhLPhw27BB9JSkDnwA2KihqUzUGLvUadj97juhzVtyHAF1yZFGkjDy75",
  "key14": "4Fa3dVZsBiKh9AVQeo9TwtUXQLQb1UVHXXkE81vQXpES9Di6zhddKDkmpP8vznScwXDbLxsnvUfTydkKo4ZABkrL",
  "key15": "2WAD57bW7NE4tRFsDce6qiUHja8rx5btScrQop4Cw26zWEeAAy3Jweqq1bsREZrgmhuvjy9LXFeRghyJ71w5fJBp",
  "key16": "2gQV7AmZB6KJKCXGaSpdLS5NL3ypP83mu94bR743FN1rjYGgbSAgzpHQD7aepcSBHh6EYReU3AJtpavvnPmy4Lb3",
  "key17": "5kF9yzxvcnqiK3oEJ73NoWWpz7Cu4FQkeuRX4SQZMN8Sc4TsV1myzPUYaJmSEtwG9jcVp2ueMVw2eX6zqAUkNekD",
  "key18": "4DS4PXUBhNmSYAndyJenW7XtKStCKiLp8JYCQWqwc4MEiRpyFwNppp5chRv3S23mdbZ3j6TijHEr38Kcg8yX6uPq",
  "key19": "64TNivm9qkNFLW9EBuPzLFeVjMigYd2mZQ5hPZ3jhjnRvY8kRbouPMsQabMj8AkTwE5Zb81E6B45AsMbbX48oqF1",
  "key20": "vnsxhh4eDU3guJnMYn5yv9ateTtTFNyKGmhaDjMvJRcsxNaq9oQFu7S6RKzjaNW1ywG454Qq2XUHJ8k2BJnNwmv",
  "key21": "5jJUWy5EQU3P2QHxNDjrmERD11Um6D1xhu6XiEbS3wSAWr6cKzJBfUKG3F9mSDk3kAmm8nku5yqCKyAmcChNyV3e",
  "key22": "5x4z51KfpE8nqPtDpSbX5WnUmFHVPw63UyzaBSmfhPTT46jUju7CAmP1RQ3kqZVb9T9VHF2sKcXQ2vsBiZpqVySB",
  "key23": "5SipsNZqK8ULzQNg3Y4AwFvRH4jJE82jkmVK9Ubq3B7qWJhY1M6QiUtAuPzGWcHm7vsx2cnMMQbNw7uHHy7mW4AC",
  "key24": "43XkrnVuKywb7JiVa19bTskDsyNbszadrPo83ioq8B43RYrou5zaQJu3jgGqhfBvaPLZeCcMjT2ps8cvNL8YuC4N",
  "key25": "sBhxMtYjUBdXdvm2A6nVu1b8z4sWdEBdvZv1SvVih7uP1TXtbAMyquFTFNns3v4Yy7L5dLLtvYh8puVyqvEdvkb",
  "key26": "91T5cRN3WBdCmHXQ7t1xZEXhQvktp6rjoYnJn2P1mQBsJ2fCeBSMvCXQL2AagXN46pQ7YDy6GDDFScaw9983bEE",
  "key27": "5rts6K5q9NJZE7FZcQgcYoCoNapXYdjRci1W1xqMG68hDbR597ED4ELaarxnv41xBXtVMFyE8ZyJM2BdZ6Bci2nh",
  "key28": "eEYWhS9CGU3Tg4Ny3pn1ayBTWBSjue2JGWfCxRCgqcPaRoPpDJS4Q7DF3tvbbEbRJjXa2bvi74YF9Sezg1XAszL",
  "key29": "2jCkzRs4QiSXdRBNUC1uPg3XqonoTMe6vDSQdsEnuFiSmZNe6BaBqM6cunmoi8ubNfMAjoC2PpH8v6SQzg9zohjZ",
  "key30": "2UmQaJXGFLLuW8nGyR2aTF9TQEuSuPvZMW2upEBqGZDPZFJTU7L3wpNqUBnEKsEyGUcK4By5qJCYnYxTyb6hN8ng",
  "key31": "4JsQ6ME9fPhkYeydgfEsCfgU8M59YPwYukCPourejFkB81Xs6KthKVvPZ3fgH2KgAYorhZujJzDLEurAW8LUNNXA",
  "key32": "4HVYfDf1vGPU79ooN2JNYSZHfTsFQ8iriKn5C1A3vCbwR7qspNCTNhEV62pC4a4UVxTWrdPBALsmqr5rcL6UWQf8",
  "key33": "2EUfWU8afVNoyn3vwYLm7vY36XNqXZdSvCMvFY6ZXN79cUoQQHznTYgVtcEwBkw6V25dbb73ndgh5WWVShakJy9P",
  "key34": "4cEJADB7BCEaS3Ym3NtMAN8TPdjGHh9G5g8pAwc3V93HYEbYBfmgQMXtSTNfikcR7b2ZPKcGmiMnKnjEHBocVSd1",
  "key35": "4ryFVf3dnUt54VUHUDRxRFu1FUBjeaxtEgtsLadtYW4BN8aHaGR43jm4Edy1GMGLZjSvrxZcSEKAc2ByiZJ5nJ3M",
  "key36": "3Y79yddatJ6DZNqvqhwoRrjxzVTiBWNuAHu77rUkUuj19ikfjEvTdPaKYKLVGGr8jHMcvPGgrsCoWcgjiVBmi6Mo",
  "key37": "55KW7FqMMD37V6SpcJYULtJwFYLhXVthjbXUrEnKjDHGwborrQwPjnKcoquFLBDzGeNV3q1BMkKmujMhnvDgNokY",
  "key38": "3EiDCNg3yW69mA4arGDotQv5ZBZc6gprAjHwujvB5yVz4yvWtDGr8MdgKQGMUsr33AfNh3wEiwUMA8GHw7Umziuk",
  "key39": "2txa3TyNR1EkfJn3LNUDfxoVJAhWNqtHLjuzxk89YbNTkvLcBq3PkRGW2tyQ4xLfDGdtCw69XAB6kaYe85vzwWZY",
  "key40": "5R714KzQwJ9mK4vyesY3LZdPgkyuUtp5YKoVTgfYdZEkEqeqtZxWdnyeGL9R1aciVK2AkpSijaLD4EMB2msKy7ms",
  "key41": "4zE9T2FNJv5NsUJKNeccqkkLKQPxkkfaUZ4hpgmNpiKZLDZ171LBymjV5XeM4J9zxiSpHSb2NicygCZSoU5Cb4oZ",
  "key42": "5ibHzpeU3Hi5qT2dbEj5sJwmk5RFiawymCbq98WHs8tX9nSeRhsavXhuZSX6ZZPv5xQeKjx3Dod1MT4cVrtna3A8",
  "key43": "3htNZZFkKToDAyYmdZR7zxg8uVH5ZJzJ2wchNcBntLt1xf51nCL4EBJEEqo8ouRrrC2JyvvVX4dYt8oxZqCAgSzb",
  "key44": "2ZhdMt5TyLxz73Z6uP7sAWSLDuoQJy8GyiRNgMC361Z1xsvQiXMiAPk5tXjxUpitn1LXZaiNzBSKyhtKbABGuPkM",
  "key45": "5hAdpQaf4tJs2oVaqNGkzT9Qm3MYbygDtYLPr2LJDVSzSYpfTuF72joH4RMhgqZbHAfLyHsi3B9wJrTbEquxWnJ9",
  "key46": "3bKZnykxNzsX1f4xTMrHnkX1GTshbD5SkqjNySLySiPnnc27f7g2w5QxCsBvo88wksB3AZs2BVoet3szcDQ71CXg",
  "key47": "2u7d8YpJ8NPSXURQbvwu9MUHUCdQRSkhMjiGinobR9bwFgPwFVD8yizoXVUcmwfzSWLftbCt9eqsJaGLfx2xxgQk"
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
