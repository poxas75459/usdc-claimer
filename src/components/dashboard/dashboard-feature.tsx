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
    "3pTnBpAqLsNvwMGzsj97wT43F8JJJLpKYUwCtaEowDidASBDAwt3LgV81TxPAX1BMF5nrPsQV3s9LogbMwTv2ams"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBkuA4EMEYohEK9UPHnxTDWkzm8TxsUajJUUjAzhsbaQUyuhmpJZo96iraMccmyK3KLVPmshXhoKR3iYhSkdQqJ",
  "key1": "3CUWYWdnsukGuPGVyYZNLiQ4tQxN2ooyHVexQ7URRABjg5Es6cBkgcp59U4mbVK7WfPrF55FJdyNEyNZ63NHj6dk",
  "key2": "2yvU3qDyrtjR8T5XvG2QfRzZjG6mfDMocjBihRdrFqoGsBTvbh8ydJQ9JpsNhuFMd8MaGbPCQ9RqJTCHWTpDSnqS",
  "key3": "2hQ5ERjQLo4A8o9kz8SYPh8DzDt8N4KY3a3LLhUWKuGTdh2bjvnNWSpDSa9vLWNKidLR7rQkPbF4BjVZ9vmH2c4J",
  "key4": "ZMvAwwCoPwuJvCNED91X1Re4vGp8WvWV7S3wEakiUy5X9jnnco7gnBL6hNEeRCGgkbdXQXbHYY9oVeLikk9Vhw2",
  "key5": "3KEaoWPc4PtzPhptkvXFTMycp9JSTWGxJhthgy8fzaYBdyG73TDrkRS6StxEruU8qBThNUizEFMVKSSU86x4soqj",
  "key6": "EAgPVFJDw9Fr9jZG8W48vajz1sximHNfAEzUXzAcNWTQFy8gh5TyvXmVQ2rhbjFLq3qZuwL6Zif27NHMNKuTfJi",
  "key7": "5a52UByDx9zFZD3U2ktChjE9Hq8UHwRfSLpKhxS45QRvbPfm4YfUm1k3L97tiXnHuhxYwVi7FJCSGEkzEc3SMzbs",
  "key8": "5TR7e9rtDtFB5Yf3sFu22XDS2zVKad5NpHGD9nZ1PgukJiouNSdhbva2v91qW8Wy8Sa3j88fLEgLaK5Y6FiEp9mc",
  "key9": "3gSpxMXipgpuGaqHNFTuu7NkYbscJR16yh5Qz1ZMwwQpwdudzTP2z9v6gicJBk5WBrnFUCNWekxkZPC7V6JBbe5x",
  "key10": "YMbjKfBMpxewvoB2to637hxVfzXJqBrWQcJwncjwSWgm92KwCFYJYsNwgZ5Bx25uBUvjNYXJYcoYN9gm3D9LvPt",
  "key11": "MbyvSF2W2pD6rC1KMUHSdpxST2QgZEYXpWfVrUbkTwm9CCVC18D9hkMfJz4v4H2ipnYeS6vbfgnT7nyoERfyNX3",
  "key12": "5ptqsSTsu5L8qtGhw935LP5nFCCCPAEn1f3vM6deqTtxknvtu5SQeh1equysRqtJD9fcWSrRCLF9UvPcVLYNUhcy",
  "key13": "3xqAgKLgbzesXLPgmkmjNZcgktBspdYGtACJ3A66TrDSKaTqNWfJrpyxfJj1CbG26DEEjiGN5Dr7QPsZHFy7FEg7",
  "key14": "3wmNQrU3SE8cFkqX9VPnahxTu7keavFiUzpBUfAssVzVuYgvxDXpCRqfnaugtx4tDMSK4BDrpQskfxUMpCCzD2d2",
  "key15": "3GEQFYkwz5EdkfQiHiHo9miFcmqLT2zTQA2UFNQw14ACyWicZQUf39xeh2qje9rAT4M1Coc1WdSiFz8EChDctiEY",
  "key16": "CLDmQD252zZDTPC61J7qwwGWEE7iyP7SnP1JJhDM95VrCcjoNTXa5WcY5hZ37HicZ1op7KUkPpA1zMQgJJnYzem",
  "key17": "3vZhsaYR5nMdxTzh7so9dMs7bSwS3Mg3j7CiwtHgmMWqRPyWN8z3vKDppqgoQpVXTPDqhN4wzGgeho9Z5SCo6Wfr",
  "key18": "35dUYTK9f8CCJ2gEmT7R8ZiTjXRSmppS4BRyc8nUqy2Nh2EAQJHoRMDeg1Kwwewiv9BTrGC7bHXGRB1dGFsVrrUG",
  "key19": "43Ken3enLoAjT9phFFCbG1Ei1uTBPQCQTwfMGAKdAxyn1mC18KwhWFg17vkvmV3FLuNNuKSbSAspomgeLhyFwc4s",
  "key20": "5g4ATs21ADGBEgTPscarki9Cpyr7yCq1aqT2gn2BCS8PsnQbUVcMpLUQsAwmK3MKmuLLPD6ri6he6fPLPK3Kn3te",
  "key21": "42uMGV3fPFVfL8mUidpwHnUUVJ5e2Dd9B1yig4M5tDcqSA6HGsy7FCj3d6wHTMZx1CfqhSDcZ4VokSkPFCUau3qp",
  "key22": "5PhvA4qn9EfzRaZZHkK8tRTos9HnHi1WGZtTtJNz9VQcYj8H39zkA4WAB5Lm8axk1BGPU8KrAQYRihBJZDLNUDX9",
  "key23": "2rJVmnmq79NwFsp9XeYEn3xDqJaJwqEC6XYoBSgHMSi6ZYRSkc1fzMRp3HicUmLUTWoudLUch1KrpT6DTfSjmim8",
  "key24": "5W2dwJ1kVT2HowkeT8TsvvgNmvZUy7NVofBdcdZrbi1XddA9rL5zYyHgdxsLYAZtrDRvuJWDCWDAyHbmFG9fi8AN",
  "key25": "4AAkcqQjLdUw3fs424AkaQ2bjFnQHPQUEAftiTKEYqKqHTmkL4qS1Tsy9tShi2zYyvqfcyvGDQ3mJSB5qtVnwSez",
  "key26": "5wYpmzayh6dR24AAsGJBSZLumDJ44bPDQhj3AopMbkJmjZUWZdtbYw26Jdqt5L1Ld8sDWmA9RyErdPCRSr2gpUWV",
  "key27": "5YwXfP2YpCzquo2XJaifhMeJ3NwWHw77S14qGULh12u1X3G1Kj8ssXZHwyaB1p7awa2th8LvEw4TEQE2Yqttw5n7",
  "key28": "dK37awFW5zQtUBWc6kyea8Y3ZR1sThhguYH2VQv5N2xMv1Dznfw9PY9RboXtvhZD35cvvD8vP5tA9Ls148qkkiy",
  "key29": "2pTgLR7dmD3kEuZG9cKyTRzuaZebuua1ysH3TVxv5FGVVab7TcYDYkZyvHMsudXp2A86Cr9SGb5LxVYZ6QRnsvRW",
  "key30": "4bNNcLQZH4qmvzBipgpkfD9XFUbjehCBUuMGYe2TNvsdiNVJMC54WQzm7ybKCYFUYsTVyR3Rdpst9V4EtSg9WTcN",
  "key31": "2z24P15yEFp9s1apwhnfbDVg4TZuarGvKanKWS67CqGyF6R9e4YViUPHuZuTeUM5MRrKHZ1LLVuVgKfrqey5uhSP",
  "key32": "37yiEHij4TiH6ByJAmZsctECDZrqLH7bfh6QanRbwTnfC2sTJcCBa6Lt3d999mdP8vq12s8ddif9Ljh2mT9eYWxk",
  "key33": "61ycmDm6rnZNrHB5x8fXm6NWKdhEmHzRPW9gRFMrs8y1e583bLUoj4DXe91psMR4fBa7JLPwUQF533C4kAqtkMTK",
  "key34": "np1wiu6sY8sUdYSgutZGyt6bv2w56bNA5BSweF6dBU36BdqHkwuLuF1btERpR6rfe3zv82tyw9B9UJeymWXBhuw",
  "key35": "3apfHbJtx91JuSsWvFevDHhV4m8PKe4LR1bYx5Uud3LZWifQuS6awuDz7cNLyoucvbF338UZf9ueTP2MZBsrLACK",
  "key36": "5oTdJoeTu774JRJnZtPn4a1qXPT9wxMztnBSrhVq9e3Xp3uKQYmpn7rkuT9osDpKHTzuU7iHqyvip7BEdX2Pa1QS",
  "key37": "36X84f4ycoDyDJAGNBZRVcBSQURsN4si7b4KmCNSH2yGtzivjNozqKgiQzDRCej4q9oxQVHnk2aHr75fevZTS4pf",
  "key38": "4qfZ1zYoNA5DpkaRfzMHUf5QQEVaSRAn2jRe4eYLtCZ8QngDCaUoE6EdMHNnYqAUb5CwxfJBrHHov1q8FGKbABzi",
  "key39": "2zyFVxWX2nuh8mdUs8FskkfrM8jJ1AuAzp97jr5FBNZgysM3SvQYhGbW5XLZBb4anseBbTj6tvrF2niApugJZ8zH",
  "key40": "5UyhKSFHx1wT78BHJUKbuxbMMsSMjnbqsJQRwAJmPqVS7sEQ7eAutAt7dv6Cjyj4ouz7ZEY58ocEnoH1qf8tKZyS",
  "key41": "5hpRenULviV85qmrsgY1d6SkirDqv4vWRLDQHMR6GdsWfvFTxfBAm8cC1XsvVor8ZXmKxjY26L3EaGmR8Wv2MY6j",
  "key42": "2zX4V1govvbdD87nshGZzE2aqHeQGjwJdQqY2M2v7N7u9HV61bJrCKzF58CnpLydfyVWjqqirhabG9KXEA4aujaS",
  "key43": "3Ta2GyvP2p8m4eKsbdDQgmkDuSTQx8VByhYZQNrvtr9LGKL3XFkiJ5J9wmESByHPBgNAUv35nxnJfDVAkJqG11cm",
  "key44": "5WdKkVbqdMAmcFzFqEYkuKKponuQABWV3SvFgRHjtKz5LupnLr7FRVVQCFfTkcuhjVAAp9beSAExM1XCU3ogqey6",
  "key45": "4XQN1a3CUHvkZpkeohqZ1w6ZfLZvu3jSiGdJMaLXWXX63hLVFAzrzjSLaQG2axJT9ux4ywrv2GMRNfz2nqPHtvks",
  "key46": "mZ7gNejDSWgiiSVX9toK3NPxmiwb2Lw743EmaEtbrdMqTP6x2XFM1eyWwzDQrBMvW4mkz9xf1pWou7UxjHFwhgS",
  "key47": "2vdEKf791seJ84dNJDrskoXPj6XRNtiehyP2aALhB7iMnADLrVKX1dtBjGCVWp8691KP9ZEDmGYjQY1KR694dh6a",
  "key48": "4pqsmSbViZTcf2idyiwpsqqHHV8RgSXNu6CxPu4jznwcBZWYgeAvUbhyg4SFfq379b1qbWuYSJrd1fWJZbnJgmj1",
  "key49": "5PdLNF1pLUq8YMSqyt6oBYaEe9U7mMmLmtehBpFu7XLEEcZohbNyjf7ckKupNVtKURPQVV5ZwwzXPP3Eza8af2tv"
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
