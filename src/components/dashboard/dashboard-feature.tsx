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
    "2RzVr3U28ehyTUMj2FuGaULmv8DW3CX26DmzbaSp72B3Ztpg8PuFV5xWbhZ4sYcM974nKBoKw4c9Fd3ZVYmv9qca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJCsAjdoc81p5ta5na8Mf4yzSngYQSfVNPnU4NsaQbQhJFbqGLyry68dPPYhkgusXn1t3bgF46QkYdS8jz4VJWE",
  "key1": "22f4byCfVWWEpn4KCmFTy4QMggouxNgmiuUCeAYrFycUHtL8WCjSFdCJjoq1y3mkNTPRtKyLDADxRWm6oT58zrhR",
  "key2": "5nkyp8rxEN8VBYLsKLcYE7uEG9N3uzTaNnFKN89rgQ3nXRrgudF3sAf4XSH6naTY4noxyJfUWxtJCom4ajoVxHHw",
  "key3": "52k7xTerNHbVibpkNnW1j1zg9nJgsw4QiGft6kEYiCnUwsrEAKf3J3Y8coW9wFyH6FQ8cpY1HrV4zu7pNWE9XpFc",
  "key4": "4DasoT9ZJovi2mH82B9L4LMMU1pV3ZngkvuRmbPVhSaFJcVtfycd9etG5KTiPBPZpC751aQqNZCCVfpRh3kxRExf",
  "key5": "5Twouv4Nk19PBMuQZ1uMUbV89r3t3ACi1xUyP11qjHBpNEDXRBigGgNzdRPuag1HYgwC6MGY1dgP7raWcVzZXPqS",
  "key6": "52E3XuY4na9TnBLGMQ6ShgiNE36hm6XXFBfWQojF6foWW5xJttWGpzBHMeQP8i9qqzxJ4ShrZnetKfyWTFXWcKsc",
  "key7": "2G5PX4eh7uWpBEfivgi5B2zy8j8W54PPB4aaKHYEY52sQt1BwFeia7QRZfDza5Kgowb4UqaJ3nPiWDRKqgf4xgJW",
  "key8": "5pYHNBHGRks3Y3sQe2nr6XJ5VTAH7NRmgrETbqZysqFXXveEvPUuXJB8wPNfP8tyKox6Siq2cSsw3F7E22tb3zsV",
  "key9": "5AoWSM2haxgmhfGgcDo2C7jAQHhdLtembqnCaJpBQALjxrMtC1z2txw2moynxVqk7FeNa2JF14eg6eo8N31X1ADb",
  "key10": "5AzTYEjneJ8AHg3g5YoQoaozqA8DX9oo61P3uaJaGhdmYN4XWh9S4nRspfwtP94pXDj9Wc4rR9D8RrjSGi4eMp3i",
  "key11": "3YpxwQ2DPYmqcdjaZLB5s34Kr3m8ywX9Z4z4KwQfjgjH34tzq5Yr5baN4ipDmoPK1tBn4h18DPUd1NSttauLKNw4",
  "key12": "LQ4zJSsn5gaRkh42ar6YdMGzVvmAVkCQ6DYHjrCmiqLFvE8oY847Tb9VMRZUiLdEnLxSFo7Zh4nHrRJg2JEvmCk",
  "key13": "2aCj5nfeDyPhTuQyKqdhptYE5GbeuAUEV36Zpho6w2mWz79J96og2s14cUcH1FcsStMAHP1EpLHp8agJfSvMfic8",
  "key14": "4k7hz6yzFqMXxNafzxv6exxp9kJJyrqCLv1g7C4DT4EwdZzWkJf1KbdAgqpHCKZuScYC1tEzgktK9cW8DQop9NDU",
  "key15": "3mmABfYNGSbBB3WXRJP3iG4jzDzDzz2EkTUdjcNx7SK2yJ33e21LNvemfAQZ8fDoqhs5wGorp7gH1fd2aM4yLBVc",
  "key16": "5WAWhgkbF7ieQiScVcrdYSLGsQEXhYbd94VSrjZU2vqy9Ph5Y2em3ifz4ffeNNf8VpGp76vT9dgZwzSq4Muph1cD",
  "key17": "5nrDNsS9d12UfcZ5cVdn8mjXmHDbPt6rNuREG27cXQayiB6gqXdgZxFhsL73FEWFiVvx4CZ7cbyKoxwpCLm7NfML",
  "key18": "3k51ydwLMDkrPWR45wpDjNk7m69knQZuXDQ6YRpJN7pWK2mh79cQDvmWRtSEnj3RjS4iq5atoMNhzQybwo6chdL9",
  "key19": "5GySon5uxKKUvukXeDeJ9sZyUVE7JuNXVJq4jUKcMwcQCEdjcXVkFXBkzxMUhuWtV873HLWQG8uifvUisTne14di",
  "key20": "2CqXxjpXtKVxCFVtUpiY9Lwaoh8yqrxHpaY9qkuiDsFUGQ5No4WzEunMfJfKPpYKh1qdfq2uaSywbai9UwkhR5E3",
  "key21": "1u7sLof6YG42zf5HFTji6BK42wf6XML7K3jAoipctB6Z3Xxm7HohCky1mS9qNVX7JodWc22TjQsL1aGt4uL8LD5",
  "key22": "5jTmGLNi9TDbdeXK9M65VvBjGEerkZmYT45aNzFSsMqiVtFPXCHsXTNMTF9YsBuvJDGJMwuihYCnXtPvxRkryFfd",
  "key23": "4W6MG8uoB5npEzXfPrjqDwPDiwn9ZXLTJyAxioUNdBY5zCivih2PbC18FiQEJK5kYnWuSUUEWM7vmWdrDUYFC1g8",
  "key24": "2VUbsWn7ovcCkmmQinSxmcLv1r1FPNPmzBC2JMpjhWmqdz79Hh211ST8uiuoZ52i9yXowP4x1GzFCQ4rU7Y4WG6e",
  "key25": "59T1YpaSVgZcWztDAFmqasZit3eiDjgwAhqjVPm77nX14Gwofaao7p6Q85aR52JpTeKRnV4mauLTAeYNYw12yZpS",
  "key26": "TCBDYtNeNxAjQ8faKou11Vwf3c2eENwf8Y1LHURNcYJi4gm737xKKHeoHnx5JjE35d68qnUPbBdk56sr9wdM1Ev",
  "key27": "58a9gpkAXmmUbucxDdLEhJH2eNzE4trnYSe3EnfM75fb4uTFErqsMi7Zhp4oE36qPdXf4dTWCVdnN3So7nXESfMc",
  "key28": "5mxhzfUttKnPgYZELGM6BhrV4oBYwc4VcBw4Fku3AbRkSn1FV4ZtEsxjvWmkvRTwWUQSS2ohtZMoTrkEnYyTrNiA",
  "key29": "57u4xZazfwWDQVLjNaKc6hRX5se99bCkmAHhCVpAr7yYZS8D9JBpxkG8db28EBvzcpVMTkjMPm3n1NpCZJCLfyLW",
  "key30": "3zZN4yPFhcz6w7wcm2wxSEinRiktC984gYsULH7Gi1xL68kr5jFJoLfT5RHa6XfWQTuh59uqoTz28tT8iP84XuTS",
  "key31": "5irC9t3RnyFP6pGL6k5dhtpLuLg9KbBAJ6xBhVpJ3axh2LfoCECEJjyAxnbWiRvscQYPCmYUV4hF7uS62Wr7TbPV",
  "key32": "4YT8S5cmn9zAz1X146c6JqX1pouQ2cfhB7GLaLNC3AhAPBCfM8VRwr5uSWGVY9k96nV6M37k2kNi9d3fuweZo4vX",
  "key33": "46ShVfn27btbNhLCTWdQfksoEZuNRdD1Y6xSpwJ9Hj1wtG3q9wJWWo2pjbfvYk5QiRf8rrkpx1zxofjNcsv4CNbh",
  "key34": "4ff9SedkUUex6G2JFihLZx4qTqHhsZeVZAko5QAmVQdZ8kA5Gb98utefn9vAMfQCy4bCyKZdShbkG5DNiEDV3aDg",
  "key35": "5w8WKuU4bPEnQTPGy5NyQ8yyMYA2yaccpQH9yX8nARjvdEeaehXx3CzjEtvDfcfD53vgHLXwoiLA6kZGa2jVfQoG",
  "key36": "o3Vehje3Kz3iY9w2N9E7qLEiPgjmHizzUVwC6io9QxERZnYqMJhzTwEhUkabT9H6mkgrmGq1Gyjq9aKsTHEnGUJ",
  "key37": "5a1iEdrunPZzJptTMSnPV6AZ8x8LKv62HUaemKFXNcBxD9xH5J4sQJNL4KWpPN7yAEZp5nPL6tbQ1fJKXg9QGRhc",
  "key38": "3RJJUB422hMiq8RdA9msaEUPeRw7aa1296x3tg8Qy9JFG79tjrUZ2svLmUEAiNEkGRFHck2KJiSUdEmvfo97Vbz8",
  "key39": "26bCsJ6cLBgJvcTc1jbpfr5qazwEPQf3H4Z293TwWkVFesrroHRyiSdqYVm5CrSqsL8grDo9aQuzyuf5tsFunZ5k",
  "key40": "42q7hBrx6C1FcbJoU7ijBwSeJ7NPsSRWmk7C4si2VXCqhebGLy23GMjXRQmmxZbD3iC5YBCN8zRZ31W2FgC1Kdr9",
  "key41": "pEaEKzNHGzUg7HgNaLe8i2Wau4VQgfBhW52bBEw8j8fiMLSQMh7KbbfpXzJaDKucNfpxRLCxJXac7dmCbfpgFrg",
  "key42": "5XysMby4vYciWTfufFTiAjUFtXQmGz3Miw8wF2h5FxAAS3MmacJa2DhMbtQaQBMuQvXWyy4S1EPqwJFinvoZSrYh",
  "key43": "4dXpqRvKZpCAVFqbSPR5B8hknRTaFrwvJzV3a8krzWQvUBqEpdEBsYLRaMHejGKxXPk3BJ74T9EKBb26A1q4BzfC",
  "key44": "DrkmGsE351Kt575Mf2vBm4C14HGnYBkEFiBjbLrf5zTVxwx8RubEjkqx8CbbZi5P9vbzbf1cBXakFyRBhWUeiRn",
  "key45": "5N5avVG741SxpSFHNfmj1mSHBtcZVxaHRz1NVgp9E66AWAyVpUNCgYDKDUaesb4DTz6dvgFcwCt2CwxoLBkCzDKg"
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
