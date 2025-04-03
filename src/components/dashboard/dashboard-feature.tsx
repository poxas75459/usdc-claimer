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
    "p6ECdx5wC3AQEEyp9wrka5C143ooZZ8x5pGT4VsPUGqigVyZvgiSVosaXcVAJv1QmhuA6zTTZvLyRYpATT3X1xQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AkaDHfgCkah8xJUto7q27ZMWEZkGoumBCLoSNdn36mDWLue36hxA854NqKWduDoAY84Uw7QKMzjdGn9QauBxEyk",
  "key1": "NUFeigKpmS1qZdhdGnp3RVd8GNF5ZdBhUdm7Hd1LB4isX5eX4tkoMfPo8oAo2xQdpFNhEDrFrs6JpZTDwCynbih",
  "key2": "4FpksgojdNzS3rJ4LEZm861gSej2mS1pnRi2PJUWCst1td8ZhihNjNErkTvJ9c12krRdJpXrGf64ixYRo87rJAmN",
  "key3": "5JCDQ6qoNL3Mmv8CD2MCbMSuwcNz9DGceNk1hAGwsyMAucBxQcq8q1ZX27CnJYtEdgvsgj32mQWbfZwZc1MYydkM",
  "key4": "4zo3tMyMEtUVPfPhkxzbNexNsp2FZ2J4k5MyhPkpjq3zP8ryxeghTKJjcryMqKo1XdF7yjr24FxP5MbS8bPFAffv",
  "key5": "2hBEqkggJEM5NxeEcZ2XP3bVu5YYRM8pyyeAUigm1HJ6RF6HKrS4PjCRwHgL4msUs922qixyvmnbkiJweTwAJP9n",
  "key6": "6293ToPN1a7gqfYmGnpwFo6zGM86XxFafpoJhyZS6GhpmL898zZWwfCzrXNrwZSadZHv5f1P7zBgts41E1S8PcBq",
  "key7": "RSM6M8JuM41Lg4RUYsrF4sgkC1DbBMKR7k9uqFiRYSxQw2VABmXnbisqmQ9neV4L9De7D17mxKtdbvcM1Vj28G6",
  "key8": "5HNpsqWP3J8UvdCFvtSMRFbcD6zieqWSizbKgHft2XbTxLwKHktSskSkU86j6GRcGePvuuBdCEsADkM3ba9nfbon",
  "key9": "4ayat1AWsLkqbPAaTftjcc6my5gfq2weQdDYjnrgiLkGKviJ84W2CVQGfndNudSV93BWB3e6QHBWfstPQoP4MKHr",
  "key10": "rwLR5tmvUrzn7ogZZ3ZPTyfkB2sBgxvnMnVNTrAgLcWab8CefLVWRVau9DuWsFAjkZXhDmGDovAa4DsNhPo8p5D",
  "key11": "59Xm9ndrfGb4FMwqnR8mn357vtEmxHhPFmnJ6VUQmmNRd5j2kJUabtgzwN4SKS7X4YkRprLgHyso5hkznYkvKQoW",
  "key12": "4ijY8tgnVK5NsBMcor7vxhZjQZn55kimkDzMPgqMCey6VWtjdtvnu66Kr2amXjBsaDeSUdKnW1gxgYJrvCnLRZtQ",
  "key13": "24YUxH4ED3PQ3sCE2rxoLwCJE9QHfB2cUo9Munv3XNB8tFCtcbpQc6rnUw586k8CQP6siAp3qGbVRHNL1UCQeDPs",
  "key14": "2Z6gBHFBbNiQhRocWHwnRn2CwXYhfyyViDYhCVDEwXB9AfgwAWoZAdkmb5qWZgzgoCaytQDGbMQVioT4jpoagiL1",
  "key15": "WNYhgr8Knmjy3qvJzPVSEh6Uf1RammGkYgqMRG4BSouw9aLCgvta8ZExTxqDgxvu8i4eKbXEHXPv3UbRdr6PTda",
  "key16": "4TsS4cYp9fKgCKygQQzuWmeaTT7FNs61JUY3vvkr9b7LGqPuPTviEfHj7Q4ji7KuDjo6331tTHnFfHu2C2tMtnqr",
  "key17": "43xrsaWFd53RCGDrVv9iYtduE3cSHTLwbzgxgckzoLNej7Fr6spLui9ezMvXLDwS5oCmHTeX5F7ztscu8HpC3TrP",
  "key18": "3zBTRcyNbzyjPGBcN2wt2ZwjS5nJDy3AsPtx69KSywrsTx6EcJfUk8GLByWD61w1RvnqYQc8ZXZEiQKN6LEQ76ok",
  "key19": "ANKE5gezgaghCMayju9XwtHdP9Rb9BeQgjhwvmVq6zXVWdL3pVpRv5PRRZt82WJFvsdJpRGkLvCfmZY2kETGQT2",
  "key20": "3532m1BXaEmPmTXE46LvLy6qEW53QxKsHGeVrwWANh7Tn8zxx5PCbwLy9Nr6C6SFBBhyQVNAb9TqQPwoQYGX2quC",
  "key21": "2oH6kXmRT4WJoAKy9rxfQPtdSWN1hz1wZR82hrQqaa8sJcvRbGEfTSU1RjNS9fbXR2Gwea1nLn1mxw9eBKwuR12M",
  "key22": "NBkkmVWcQBvNmfqKgCirfAhA7rTrzmrBmaZN4nQ5rfZq7AAesjecBdk94WPfcv8cVDEGBXcFHWvShLGAkM7RrZ2",
  "key23": "37uq6xoxjMPEa8NgR51CJ8KeeweQDW71MnvhnYvoPnTic6KShhWGDHEdL7ay2CsgoC9bYxKwYQQpgfppRfpikUSD",
  "key24": "3sSnfTbaYVAgHYoqn1wErHX7ChhKfU6PkpnRCfWmAV7afRus76TrcDTbbVETKrnnF75gQ3B9W4Kq5DXAYpXUfdPz",
  "key25": "4DkHvSPjf4Hsh65PkAikXELnBWncQb1THBNQzumCWAjoeakKL7j8CbZBaspRon4QDS1oJTktGgPEbGYEoKjWMyHP",
  "key26": "3pwMaK8gfgDEbQFx4C6upUgsoxXomvt2zsHw14tBuypx6DjVqoz3EAUsUonw6sNUXTzoF1mkC85bP7yJFJQr4v3S",
  "key27": "2k7s4d1AZ3eSxerj1RPHjJYZQBzs5SfsYo69PqoTS9AUCoPLoZbv5rej26zf89Ggmzt1RyWc79dAuntT2fbpYxYh",
  "key28": "5RvsLENycMyWQHhgLvbMQQcyJVPaojgYLrVwzFUfUfpFbYRvyhh688AxshJJa8X5MRCq4bKRW54d76e8EUae4Bxm",
  "key29": "npEc4eYXYBp918nQgu1zuTbVJh96SRAzNiug621qhVssdTEgUPwUW7mYqLqzyfsTjWGNyqRyQh1BQKvX29qf3jt",
  "key30": "3q3W8GfhmYPmL5gsKE1kLbJs8jR3AfYyMCEziV1jJMLQ98PNpjBzNPLjfQ64bAW7RLZ9miRXhmk1nSfU4FE5wsR7",
  "key31": "4USNt22DJpgZHC1qy9YT8YaPhtzFJ3dgksKPaBhSB6R12jQYnMVXsnFVM6TzSFXf2yoivYYcTDYi4W7ivwwnyQea",
  "key32": "czaKZE8pbVz1wuLnfBMFTjVUh9neesTMAoqCYRK7yUqTjpMuWknyiTmrfW54PQuXXDWPmRAxBzzo5Agt7Un7KWR",
  "key33": "E6bLTWtjhKMRdsMzQJnuoa7mn1xDhT4KtshHpk5nnJuFhLMTUkPkJXxi2EKUwTMYLAdEanqcUEg5UctHtqXzqHo",
  "key34": "dKZgzTTp4TNujmMHUuATkDPz4Mc9J5WyZPutYXJsk2rQiBWKawrYVrQrjp2vCeMayL9mWe25n2YALVBdYGuBMUr",
  "key35": "5pAvRd3wdVeEjbycyoXMawgg8DbnMnJbxGgQbjnQdzXngE7GuMoQvxSHYazNcdy9KeXeoDVAuTmkp8LtRdLe9Tqe",
  "key36": "4TTtaLpNGKQL2rTnU69cCie9D1NSV3kg2PDBfxb8vKCYR21RXXWYTUtGNTtt17QaJ6pfRbTUspAngAEXHmyaFoQG",
  "key37": "5T3HWWQgM69v1YLLA5XuuCYBsr1pTySF2ZAQhDUFEAWUZUMMrU6D16kbmC75kXwoLLQ7BZLw1mmPFUARPhLGu5SG",
  "key38": "KXmpuWWMGZzUeTr21U58ckENc3Pa8HKxkwmPfvQtNKMSPQYSVJdaDtWAbrZPRYHErME4Q2uoVteyJX6U8isU5Cp",
  "key39": "5JByR2h1ZXXwPdQKjks2qx5FmuGvV2yrH78C8G1A7WbeTWGMN1Y9PH7RZPWdfUqXCkTUkSQpCtjtYtXZnk8MKeVR",
  "key40": "2mnZXuWJVP38K4JvJjEEx9iWC6FuhccFhQNa2sB6cxFtM8DuSZSSZ28GT1Aau9eRwyXPkmtcLBBtovTtb5U7bCdu",
  "key41": "2mZcCzVbH6zQXzCuGmTdETZ9sDxzqzzREFN4hejX94u37ghuigPwWFWyGrUKp89s2VRt5Utzex6zRfhXWdKy3gWh",
  "key42": "5QitJj7XqgmsYdS5JbtCJnMUnc86tFpPAAmkrMgUXrztaWQa1ryuqT6ekn2SL33iVt3jnsSDRErTVJTXMwSUCrDu",
  "key43": "5YcM7eG1jNdhyEVSHwLKguSuT6SGN1cTiHdnyRJsVkQuioTr7ZcsxZpUU26dDcqyDjAGxNfV23jFgCS7YxYgZsvg"
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
