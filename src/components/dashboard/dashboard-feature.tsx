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
    "5whUpQtCtA9Ey35imG8tnNdJ23nMSTQjATKWnwacQFHUjKCGmCKdg9pm8YGy4VFMp4EA8vnNYVaGh9hL4xBcMeq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XXfx8A4u8nsgLtQjvR8s8upn43BRTiVod2LN1uiaE2Qc4tAXcfjGi9DkXpL72dFtk7yuZSB1fzYmQ6ZQ9zRmZvs",
  "key1": "2KU77iXxYAxLXBtAujyoX9aVYzXsPb66xzakUSuFvFQUGBsQ11GPxWQeaudTzv7mrYFVFKp41jC8ZZqwjsJjdNVT",
  "key2": "26n7C7VeeDYWhy5nq2kDngC98vcUSAHBtQaQucrhJcM9G9ZAPMepwWNLTQ1ZrqshVtjoQgCmBe7siYKmBfyV5VAL",
  "key3": "4StfSe7bbBCtUw5gUKtBLBo4snUdsHcUgF24TfLJYf4aYySuumWpM4XWmifYuZBNPCPqHPjhcZK8shdXsdn8f2Mu",
  "key4": "R2vThCEjb8TQfpnYq2QshpsQy73toUePY4CouXdNTWmNifnbjkJa5qGuKtJ1jnJtUAm4d8EZ5LkZiLtHax4Cqz6",
  "key5": "UX2MKAvB9NmB5u6K9KmX5fvcje28PfToUrRq87VMVEFiJRjxkHgQ4m2xr5f3PEbWS8HKQ718MgDZ4PKgyrChGNc",
  "key6": "59P6nfgZ8uC4vfWhBgEXFwziGgQdEpVEFrDU51mx1oGbksLGf5fZGvNa5LTXiMEg7n7TfrLLM2ERvcZoq4HHQ82Q",
  "key7": "2T1J2oSsYqWmE9eDvTx18MinqeDPkcuVxUosKH1UaTgdzqxUkcJfx9EmVfm4f2rJqJRc4G8Z7E8Jito4cNgMhSTd",
  "key8": "2bYKUzH3NDLDe4zjyAbp2gWNhtMcbWg9AUj3LbaVJ4Mdg7wFFrRjAaKsRsAmJswDzTy1sjefaD8vzX4xmKx98xbL",
  "key9": "5EB9HqwkateCd2ZS4yPGj38SnoVisgdRzNvE8HBnrivZrj2h1JsdFmiYppfSUr2i7E5U5VJvHQNgZ7xb9KF34g6R",
  "key10": "s3pRo8T5b85No4o4GfrpJSXrTgt5c2syx647tM9hcL63GRvwbjZFCJxDgt8eHr1iKBfWN5GnSwq5ZnDLFMTLXRe",
  "key11": "3oNn9f1dCnHkr233BAJNeBV2bKih2Ph6CZ4eEv1eUd74KYaFYFhAY9yLhp73tmgCvvkHtcJzRQzskX2mnLXswiua",
  "key12": "VykrSRhAx98Ek4wVzxtvHM1iFXRLDkNoQiDKmJ3kHsTsyMD2PmcBTVo9GK61Q38UoPcnN9U2MQShJYKawN7ZvVK",
  "key13": "4r144dnX4oSqb3TBLEQDN4UvmnasCR4YyJP8sYjnLYaH3MTSfaycBGqN15azXndHqxAjUKT51X3gTAC5u7cbeRcy",
  "key14": "2JKfMCywxXeMTBbhXSwqABymwkbF5m495HAi51aRnLVui7LMRQbP8Wrhm4tb4s84CwNGxQ6Vzup3gSQfDAaBvww7",
  "key15": "3ao7ncB1GyKjFvp3EfrcdFqt55tn4R9G6BXEKiV67Dr9YS5Jf22z3Z676GuJAj6ci2VQbZy6Hs7YUez66wU3cUqG",
  "key16": "3eMkLrruT9vL4AKdVYn1AGTDZ3Skw2skJee4Ry67YjArrtR37sC7u4jxpGsF8niKKw9gJAiRdzhvDZQM7mXptzCP",
  "key17": "4Pu6muicXRiosS56gopgFGff7H4F58tqXHZDt7Qu7yzKTYEQPRr9vKo6pD4HgHTybP888rAuHJnKHH7AWKvBqCa1",
  "key18": "4rrNgqfuboywuk4Z2QpKkWkXpfg6CBUhk9PnH56gCYdBjHwQnnMj3ge28DDfbVze1qFzjv8KfdYHRGjFVnQq8i8b",
  "key19": "2y8vzc5dKQ6ENmr7yh9b1YQyGSyZJSgYHiUYRXuKWHzFdfbqvvEiyCiNUCdbdrtUV2aU1Uh1GUriee4vpJSfDF3Z",
  "key20": "2d4u6dH7brLn2xJ7TLTSia32LPhorA7Mnm92hpGsbJz1tHTQ3pL5RL6e4k9rDMwiFq1WipMZSf5iwqXm5urkhhCA",
  "key21": "3JgY1dM1WbEePVfz6KAxNpUmcFy8XD531GbggGwevPKF4aKZDWnddSxHS3Lb9FQCrfEW21BKZiUxkdtjsaWUodPi",
  "key22": "2BQPw5Kya1b8Xi9GxnvdnvNsZNPYgRTLYTLyEhYQq86GJjqpzt6PfQa7DYwrj846Nxfvb2WuGXVAf1GaNbnGLsZa",
  "key23": "2vUBnbQHPR2dhkfU2MJ6qcpJR4JL97dta55g2Strb6dJAKMXJx9ThL95cCkneCRWAPzSsZdAsgnEqWfjDw5cmKez",
  "key24": "fcdu74Yu37cVSa3RBx8e3F3LZAGfzWcrwBQUg7i8yKbem7Kb3gKTUWMJshsV2QzH6tGWnTH1V6oh26ySdrCX2Xv",
  "key25": "442q5BuS7rhTdR42W6i7T1u2ebKqK79wA3ZwtwDvwxKKxh2CKV4NxUuUF5JBjCaN45LRPYkErwvrRGFDr3kpmd4E",
  "key26": "27pn999A3UJzFDk84xzagJ14es5cR5FnGQjZfZAjaPp97sAEG3wZ5kwq94fMwUhnGHfuvPdaFGyt24QMsiLenQjF",
  "key27": "3uPedT4Z3KcHVD8fATGbsZZTLi2PfaXrNYNHRafwJWHqsU9Lxo4aiGELGT7i6R9CYnotfsovHMtsR2CUxdfbzjNV",
  "key28": "5BE363ALgM7oCa8QJY985Hyk6Subg678dcBxz1auoRSV559xA6bV1sjbfzbCNsfsymr8m83cgEvAmQGP2S4R1aFE",
  "key29": "2oczBC4arGGzC6FPgNrETSor1w5hG836ayyyh4gkzSh5f6GUW8ZSkxwWzkLgUQAEB6dARm19hDZDGuczpUfEwq99",
  "key30": "5mCKZxUstqv3QdEMMREgtnrbToHmZZ9DZh8XhL5Ju6RX42bBXdiQtCDXN1Dv7gykhWPxXA4nALV5cjxWyURK4wCc",
  "key31": "xsmKHTERbBKTf69doLv586BpDGQomVPkNfUr8DCuYPvfAykJoZo4qDnWa4VXBvY6eWKNPgu1uFRCSLwu9fC73tb",
  "key32": "4Z72JAP5wvkDCNf42bdFBMxqtHmHExFSxZE8v4JJ3pTitBfBkz35P4PDaRezmoD59bHkSfZ86RzE5dYMgjb6xpxd",
  "key33": "5kJXj639j548bUrGh8jik4yNYRDKyhqtMPvVh7xpqRuk7CQHZg4hQsKLt4FRD33SF5SN11dSPWBNB1ifY8EGwPuX",
  "key34": "tTNX3cKSZw7Pwf1dZTgeAnpUosggNyLuKGyHqVCBa4SG1GfvrfNHNvpFEMzwPqz75QzvwRXw9c5GGogPFX74kX9",
  "key35": "yV8X8A8fMAnfJLLRvwRA88i6LXBwLMtPDBZ27CRd5UeykzDC5ZzZajBmWZDLa1X7vRMTsWsEQAN4pkqDXxxKBLD",
  "key36": "4s7qZkQSyHc5Dfcr7VLKrSmJtUv4drWfK9NGGLcjyVR9vrPhwSiwzMmqsbkDY9xbgyUcVYVQzTWR5tCBdDjW1mzz",
  "key37": "64W9phunSCCzDy69qmQf9m47cq5gLEUpmAtUs3aRpZbLBXbmttudrEp18CGQJfHWgqCNEiuXGftzW824LufhmyZK",
  "key38": "3kVe9guENzhsYFMYfnJE1n1PfCWGto5oVA2pWcq4oFgkjmBZNHgAdPAaaCqrCP5qutTSPQ1qoQrgt21zwj2NEtKx",
  "key39": "xRuvqi12qytfBQxynHSwKoGSGEZQ6ZSH56fGW5jNpY3YK9Db9xrSFUoAjzjbX2hNP3jHsPTi9TNYE47TCfuaMvE",
  "key40": "4fSnMR711pLREnQRjDyyFzwxvPFzCbrBHydCrQHoKeHMAAMF7G1wnSZHejwrBuX18ZEDrFBPZdz9dPxDJUWTd34h",
  "key41": "5RDo3e9b8aGiPYHiEkydFSCUgRX64BkN4TVgsfAusBFRTrEmwzndp1euuEhpb6CW4uJGcGC6T8ozaeq39LPYEkeZ",
  "key42": "fFmmzjBRTySzWpHgPBCFXtjWSEgH7nyWJyrxkV1NcK77ZNPHAHGfwCfL8KURPnVu8BRPzmNdxgDm6Q2SNtJCWpX",
  "key43": "5kuNFkCdqHTHYzcXczZHKC3rvsF9EEVhKgM9yXVtokbK39cLBp3eJMM39BWzTbEqGq2ZEDkBJF9FfZcEu8qQksLM",
  "key44": "2fAuFT2Rkef6fUbuzzmY43J7PhhNKC9PypvTghZjZUPJEhxuCiC5xdjh8ybjcKsNqQ4ZqwiPZui7znurcNDr8MYK"
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
