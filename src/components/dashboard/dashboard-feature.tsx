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
    "4g943zgU7yGSnJpbSh5sgCNEQCpsqBK9Zx2MtQrbrq5TubgBGHMmnGcVYUowX4GLUnJjoqUDEUt5bD2wuF642x8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f4QzKvsKjh4q1g7ifnMjnaregcUSdd61dAuLWdVEBhjMoFVahJF8BgWzDR9qoYvtRpoucCRUq5xspsTU6tehMdL",
  "key1": "JHBcFahFyQNuBjdgDzbdKXXU23UCd6SJ5U5KGd4L1ZLxPYjtm1LaRnEQLSGukUB9FFEn8NLKo4in6nBZTBG819k",
  "key2": "3yU9VQeutmfs1QbBcYoMLHmCZ8c6emrNbmDDBD6P1SvYtJtv1a816pgUf5VQmMQCqTMQ5b2Fze1LMvRj1ymKSqBa",
  "key3": "CGge2v52g9imw1GaazbPmMo9dMu5rNu1U5D36TA34SXoQ2vSdudTMemrx2kMHk4ukJJ33yx3bWdWKXeUx1FgE1z",
  "key4": "2YLKh635cUfYREgAb1WJ32L9t25eCje6g3WsWsTHXMjXtEVTQ49Q2BkJfgkCEaKwxUiRvk9vJrVgobNoavyAsqiT",
  "key5": "3uodDoiurCFqEqRN3GPA7e8eG14GWqJ9Eoh8JXneFRJjYzuGgx9puZjwF2UndHPxx3BUQEgYojHehFFREiH43bw9",
  "key6": "63k1rA916bwTMZwqdL6v8ZDcz3ndq2tPNuYKHgwcgyhumP8DEPeJt5ajtcQHTb5A2UNbY3e63H8fhXabPBMvT5Pf",
  "key7": "5VZQtbkqhxJxbpi6Z41iLRNGoy7j3TYyVJzD2hbkdAENzbyDSjYPymsD4YwBGu1izzthuQwn3m7vqMi2mwgvAchb",
  "key8": "3QXsX4RkAPf8gamTNaTgRAhKGBk8WV5RwQw7Fhw84UscZtcs2PGoERQYrfhh3JPNZSfMfV4e51Cy6rF3ncy5HEzY",
  "key9": "WadSnn98Xf6sJqPemJuQTE2smvsucMvmNisBB9pS8u8QjtBoJWLH4vb3kgYzQ3kERq9KmXgL3fE1gGve5AfoBtG",
  "key10": "p9GmHwBjRYtcKuQU5JvmmdHqKfD7TRG4w3CrciU8tLkYneaee2opytrwvVgRdnud43U2esGNbi9m6fdM2bimi3f",
  "key11": "55gchKLZyzKABHTWofJw8bh4Nnoc3dyApTVNRzTTkFfbHtNZimymH3XPBsJJJKghCMD1Kuq92xLJ8v4LRJHopcWq",
  "key12": "4MZrzWTrhG7n9EBfS2NkLUjDrJDCn1TfNqtRbG6MJcQFcdQqeg2iGMe1DmciTTACJwqJJQDhg4Z3Q425oNPD7q4V",
  "key13": "5UGCjgtQasYrq82CtEh8rW9m8qoWppSQBX4eJse2KynqamCrPVf4PKkjav6sWSPS17uHFmKjFyjAUQ9PFh9mAQMA",
  "key14": "5ZAoeyHwxKhyULX4mRrcMrPYHgV3S6zayfZRyusEjkv43JxRuyHBWQcXmHT92C1Lu84BrUnwGf2XZW3xfMYYmz46",
  "key15": "5TtMzwWkvJmVa4T2RP8kou8b6Zim9uvc52UXjhDZ3xKPZPvajxNcq3xyESUvrMbE5QJHAPM8mT8LksNL7k8FgtJ",
  "key16": "4dXyXdsxnA5WVvcYfn7qv1sgnLJhJzWMKxuXjxDEW4f85MpgbFc5SFP1T8iq9hFfjkMHobpWER1QwxR2mv8zzCAh",
  "key17": "NRto2s9com24yRnbWEvmmKDjKqRLYJ9vbohPkd5i341BFoVndzHjCu8NL1oSzUoxp5aK4j97okambJAJFUqj4ay",
  "key18": "5XMd5q75B47oBc53q8vB6T6L8e7X5JukdkMo7C3aXTJVVuSWrZWK4KCE4Xdxpm8Z4iqxrXxJWRSf6DKhRTuiyebP",
  "key19": "41TkQe1DihwfiQFxAcC1fBatJKFUDj5u8CN182oZMakg9cC7xKrXJgA2qVzsnWxXFpv2FcxDq9yswWq5XoMoYRSX",
  "key20": "pVB17B3ctQaK9xWrM8mTWeehE7b1GXCjGMZkiBNxFwMWc18w2KNaRC4RkZ4BPVkwWmx6qLoM3r25dtKzwL8eyYP",
  "key21": "jsr3Y1sktjpTz1yTGcu1VDy9qnF2jCGswasNoHY6tLuJxS6K8v3yGVbyhE9xAcvibUDi3owdeKRAVRcJkb7idB3",
  "key22": "2j2a371s4oKFAdGjJSgUQyBmrtEi7J9P9kq2Vekwm4xMTM8geHeySDp3dUboDyqed1c29chU5xwAWusmx2J87wq1",
  "key23": "5fNSVMp92ebY4WSuNCEzryT7fR4LNxsWyM5pw5XQ52mkr4aVR7UX6cfQMQ6aC5QSYcaWHtPi7okpyrg4aqocKUXG",
  "key24": "2LpWT5tixuGZkRxc7WFvYnm3L4bRLXKzicyNWMFgyTW1W9FYuZs52XD53VWJ4jwLn73BdHCPTQQGazzqY4YgvaKY",
  "key25": "5koqJYSSXMfTjkW7Q5SJkcaE5iQ2XDoAyWkP1ZgGuYmUWvwUc3wkkjEoMU4ajvG9hqx59cp3qjzFvSSn5yDVy7r4",
  "key26": "5aGpcLXg23Hn9XDv4CqL7tWs6JhQZq7MXaGFTyCgzenXrpRzu3MFMZkurJyKgzH4cEPm9JCe9j5va88dDtD765pH",
  "key27": "2emrnABYa4US4J7zdiLEZ9agcDCnUfrQV3Brypa3xsECgj7zLdGnNwabb7qhtdz9L6gpif5RBdM7nbf5zU8P94Ww",
  "key28": "3hV9JAyQuoSjG7MCPBU4fJ2Y17jj5e6jX48shs2H1STjeSK6ya6PMogjsTGq3y4t8351qeRdJ7qRCtEje9Ku4eA8",
  "key29": "QyDSX1oEgoKhzyVEkqUFXDm84o5e6NMJ7EtkLdUQ8kXNRDpgvKwcWzrprnStE4cmnCYdc8K6sBS3N8vnS9k1DrZ",
  "key30": "25eJdhozuPBTcGYKLp2YwMfxzvob4ryT1W2BpsHdosp2SCKYkqKYDWeQyajmWuMwrkUA4nCRKEnLsQSGrgzrq4J9",
  "key31": "5s3zqGL1fGta2yznp6YcCS5eH28ch7uyZatPNLuB7QoFTfRMVBQAL4Aczvk19h439trye2rTqi6ULdc8mtGz5sgL",
  "key32": "JmFpzt8CJdzdhZ5XEsqTccShPveymmAMSg2sB9Cf8nBJxuirgdSyANri4cwjgMmLsqJwzWfjuUoFgEHbDJNC3Yd",
  "key33": "3CXnxFpr2tcVxq9AJA3zHGP38Zh7BuxmLpVwDY8UzQYbscjYMJC8rhAnv5kRnxVAAifLrcC9gma57CJ7ECnw6zo3",
  "key34": "5prpocsSegbAJ3qMXQjpFxvHggqChoZ2DcyKEMPKUGE31n8o9xygY72bvvM47DE5Ffk6so9TqYccQyiZiPCRtV6v",
  "key35": "2tq3TaG7jWySht54ssu9DxyVy9dT6kto1aUw76EAVUbk2tqBSxFZgj5tQx4qqCzyNyWEAyhhgJgF6XT4zH6odij7",
  "key36": "4euPGhhdpkX82ztNU7tzX9JjoP93HybuAvVWiVpraoFz3F2CGUQYyqJUgyczghdeieGbtLSPkWbsCyzvyi73592a",
  "key37": "3rtRoFZePqzyPiaR2fNnbUi9V6Wr1FoA6zq6rzj545wMy3nyobY4uEP3w5oaj4Rc7sLCV8FCZcpBXdCWUpfNWvdy",
  "key38": "4CuGXYmwrQQrgApbogTyQscZW5CCepmTZGDsQjQwjzu7kFzdaGg8M4qPSHhofnzFY38nH1gZDiWfPsMRQHiohjYa",
  "key39": "3n9pvTj9ws6CYfUrLcDoQJUuJTJpEb2P92EEzfkXGMhNhkZyzce3uySUqtYynbBoErYcRybyJvctKVm3kQE6SJnp",
  "key40": "BVAY52Pd5iWT8qWpPKaNHaKYgSKFPZz4citLviZXRRKzCktQ9Tkcw86g3tjbhvCu13cYdLHsPmTAxgJWib3RSSE",
  "key41": "2A1NPpGSkX5JVowrRHhCzZ6WAXSjsMg3acBmUghaXUC13PfxLp2NJjQh5wQfNBojpq6GKa66DN1Go1cfurAUfg7y",
  "key42": "3vHzUGcrymS163MbnFciB6mDYYndq8inCgpVBeDD5owwSVviw5SAggqBkd2gYCJbNQEozG8V78m2S8j4JrdW9DCF",
  "key43": "514rTkTUd7oXTgSjqKXuC2YD1c8R7h2AjUrJVwknnX3mtv4UKev5GGUc6h1uxx6EHvErX2DzYUnnRw32crryweid",
  "key44": "4YfXp61RXeK6ufsKVv2fr3wFNSj9kZPxSZ1gYaP2DawbpfMPnSEdsycig1Qb6MCjLyXz13VEWYyGwBuTMdEzU8ZG",
  "key45": "599EBWyFTHwwbrx1NQyh83SFfqTdc3nKtp91ZvrGs5U4424sHu12E99NYCSAAU7grAib95fBZ3FGYyjQKRc3UPaL",
  "key46": "3pmcdwqNYMsNrusjqg9C9t3qb1cvS3Va7TNJSGYTiZb4LZ4cDYa4bqn9jHTF4HRYfbWo2jpAxd1pjKyoL81C5f9k",
  "key47": "SSPwmp7w6aZ8QhmabHGoARFWmQ9Ha45Sn8QESycfRxioWBtbqFpBuyDefWDPapDNLWy3SSWMhu1AThQ4HEqKZZZ",
  "key48": "2vi9SHudPHHbHFHP8AK77SYU3h2f617jNv2u5daHhwFrvmLP5hhhTEGV7xJwSnYEnVRgYP6uPTNDxDX9ZJvn37gC"
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
