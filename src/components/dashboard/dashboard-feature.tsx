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
    "5WLKLzTJvxHs25GpV5pkpDMBxkNR96jGAGs2shXXW9RWm7wuur2Mb6mU8EYAPL4xgEQuSm19G7uh58rtp4ntnwdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZjNraeqSbE4yWsVxhW5YK6vRh3HLaA7KsdjiNXX5woY4pJQu3zGDqqzeTUurBL3vDzZiGpaz1sm67WjeZdSiEaq",
  "key1": "2bG7ADzakMHYZZbL9gdgpAVnsrPHK5MzcxfLzKf1DZempuJbQaGW9RC9UiEigGrwrzZ9PrTsyVgFvDQQEoNE7SZd",
  "key2": "CEx1EnAtD8jvKZTC1k3z4f5KZb4oHzvgpkawPCCtL2WdRHZmwfjbHR6gvMD8DGhR4TfJhQCJpmrB7DuigqeHajX",
  "key3": "3c5VJL7ECDUW2jyjNgFDu1FNJTvRfhRCun4tFFc5zVhjgJnhVeR4UiCifNApE3pwykwqY94ar1s2q6M3wJiXVVqX",
  "key4": "3UHquAP9NN9sq1wTUWHPeAKZe2fupqpnZ4P5mycacETPpjKEM3wrzhBrYyhLPNGdrsTBFDdZFRB2eqGquLnwn4v2",
  "key5": "2FCsdbJifDtpiuRrkSoW7uz9RTaK2922yNb5wVgTxNDUDL2XiGYBgpY5DvQauMnnvwviwhvPK6gk4JuBQEbCgvN4",
  "key6": "4W4j3cztSPWdXbuqMh3XcoqQgLTaB2AusUg4RWtc7E1FTsrXkURAhcVK3Q1zmwDCrAnv1ZXsSUcfRoAGKviDoqLN",
  "key7": "3T9dD8pVoRpqPY9wtvT7ZY9m5hHQRifgBcKvFRUMnjc17eMggQDjmLkewnA2Yp9pf2sLa7jBmCzHSPV7Nsb8RBwo",
  "key8": "3ZJ1Ev5M2sX86Dx2mvAvBFBrU3CbtPEXdahr2kcPZnxonpANuLdKWqEdWv1vCtJt8kBAqh5r6P1hEE67Sb1zoVv1",
  "key9": "64XeL8zAx2jYaJEYFqLGLRh5mfAtRBtWykarKNBbEvgZxi9XDF4b5BY79ncWV4wveXFf5ZHfgzMc8mojfAUWtxwE",
  "key10": "K97vCagZS8Q8FvvD778CiLiE9uc7RvwVK7KJtYr9x8YSzRLVekHDotroA47iA8MsNvZPe1P6bPDfo6bxARv6dmg",
  "key11": "5YVMKaMi9i14Xpf5jkAKzYe67okfNCevMVTmRuCDsjodHfCug3u8KCuft9nWnJoNpBYVEpiiguTAbq97EYAvqF7e",
  "key12": "4Ex5WBfx5gAXCCd9Br7kpz2ZJhxJ6S9o8JSmwHtzdFJPCAuh25crZpBgqevioUTJQYVaNgUUjNEZe8o4NKvR368v",
  "key13": "4hCPhxtw9PYeRKWQc7smDyL4PZwp9bzU48B6vfupsaEfhbk1AQh8YqEEtcdWKzAwZdvUHLQ2Ub85kZnL49hXgavB",
  "key14": "3tSfLCgvviXbCH2xKqWYgprUyj1LdRvtj6NHAcKEJKa7Uda7ftubRtzCfNcygfydDUpVRoEBL8ypMuj4eWJvKqDS",
  "key15": "4vztahAJoVD1yJsuB9DjEo41vyEkSMkfjTVcxzPE9ejyLM5BZqmWNbjkzUzBCNQcuLXCrcxBQj8ZsFQtqndvPkSc",
  "key16": "2RNY1TWHv3CeuikCQ3pdA1xQAdkn1zEAfoMaqGS7NVpcUsmf3BgYdi2iNjLszZ24kjFNEyxekhLgVXHYdHHhMB8A",
  "key17": "3qvdVnHb9E2Gz8ARN8BfXbpgF5K4BGv3y3iSML4qqjYXm7K2UFqDsPCFiDjFfQ9M5NwA67uE2eW5T9GCjS8WiA1C",
  "key18": "4MUqjBK9RPRqyZi3iGiCU44wJxBhyDha1YvN8GiLj7B752gBj1wBNNo8boAbk8wvJbCMPJCBLa2Q63NhBwDTcmTD",
  "key19": "3f5L839RevVZmHU9VhjBtY29FTLqxgqnsPgeCU7wuBjRUmws9MNzmV3aMVwghSM6JszEdaYmSYWuQ8HwJQrtjXF6",
  "key20": "248CUKGPiuEqMT2EJX9GeBaxC1127UwTzi5THAG2RmP4mn9uMy7JZT99DBUHAXeo5DfbDAmb5ZppDTcXTFdFpX8T",
  "key21": "MdqvE9vMRp2Uo45JQBYwr9UVQMcX3uEWgtxNL4pHJSAZVUDGWYD9cd6xACqAJkRhVAwrKtC2xBq4EADnjuTagfh",
  "key22": "3hWfjojy6w9eeYW83phPhBLBnVoZBVc8kEAnqKzN3eSkUdTogS4qYxSYDJg7WPThwcvqEsy4Uind9DY4VDvLVdrB",
  "key23": "bGhDFAeswr2VSmhBxem6h4AzR4C2hGThDtiiGiJKerBHKJsSmEdZ3MWR1AuHGVer4biWCCSLvc4u4uDLdq6jgDP",
  "key24": "cwx2i1TwdkHDKBVNZzJtN5B7Jd5GJkRrS5nCdZz7TJJKi2QTz42MDBL5VTCFsZuzhgWEkD4pBZYs8TYiV9tncrz",
  "key25": "uGbc4ahCqUd4WspnnGqGC1rsvjDzkFtmZEUWhX5HsNgR9qZa2bnzYeruV4Eyc54afGkufZF5JL9qjwkVXKyBP9B",
  "key26": "5ZZgBqbPc6tatwyYr2fjBKmTywuWjVnxv823hQzFrM7ASM4WPNUC5gdWfvmiygrk1iwA4VVJK8Qnst1BPZv6xBHz",
  "key27": "61f6vxfQtSoBegBUiRw7hxUvXxkTkXLEBSbsMpJNJ4PXhCSWq1vEw45dcaMmUyKZvZrYo9jNtyWYLw6mnVPVx74u",
  "key28": "24ZC2745aHZj2YKeGZCSEUMgGPJr3TnTcyT8VY5p77Pp68WeRmcWXfT3KrTZBBuWfRGDxLdUWLp6tCYTNf9BJiGQ",
  "key29": "2ff738jHED6kqekz8FSxMa2qesA5zYhRARTTSQTNEACMa6C16pcqRL9eBuZz9u1mU7SjmHoNKJXq1mWu7hRauqCg",
  "key30": "3rdVZmWg72VzAeitCfbZa6LoM43x44Rv9dcJugfGe2Mq9Mebw1Sq4452BfaFM8sVgyWM5H97vKeJt8yibyCYDBBy",
  "key31": "2VhpYEnE7YSRx63mDJQXqcSxmir2GoLasKMeHF281j2n1WeEhTx9utzWxepG7pS9bG3SgVrVbxGZB5WJdXEXmqrc",
  "key32": "5jztN3ErvBPD4o5cewNbYP2jc95YFLNxMw1bBmMEugTznnFigctiLmpcDpXg5FHab1RnH9KjXb6fEYjqdLQobKzQ",
  "key33": "2vLtiUhxRkiQsQ2WUnWn3azqwnHxU1aTDko2XY6fCjtZcknxwNoV13DbMLWL2NrgT9wmD7b8V4sgZkQ9HBNFttxM",
  "key34": "3pK98uzDKKUSK9t2iRuuVvAcpaasHEh3ZCFe1mBPAsETtYo53wVvjXUQiJNyWw2GcWfms9XT1tZTuXrFF5xs5Fhq",
  "key35": "3EFjQoccnynr8VgBWqWPeVZJ97j2etDxmR1RntDQnLqzt5AkAbEYcAd7FYuBKV6xYvvE4rX4nkwx4H7F7xqvNSEx",
  "key36": "3B1WQuntUuCuokD55HjzHikrkgFzqqLGs3FigyZxwShzXyxwhFXspUvsJma7cLpmb5pswCxnwqwWDRct17HYqKcY",
  "key37": "4XAuL13ZB9ZThRZgpwTd4gf9KHXMg8DKhKWbfqRgipfmKbcvboeaGFnFJBF1ZbdiAEW7BQ7rGPoCcBLaLJF5Ccow",
  "key38": "rGepi19XEKUKSDfbfm57fTSQJaYgMyjed1Ds1coDVUEyWjBHnw1y4os3Xc41stkVVeZhcre5jGSfMDuBn3xUBER",
  "key39": "3PrtE4MxeA9coc7bCzNEsB3aacDp6p6qsKUCW9SGU7LZ2G9QJ1Lnat77fQ1ZRM7z4mc8JuVMLbKJoP837tXZRyA9"
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
