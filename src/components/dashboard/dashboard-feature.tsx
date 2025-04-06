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
    "4G1ftokpnjeY5cq5DpPU8bZPwFKMVxQm62tD5EW8KNskrEy8Vuw5aAqiwXzhtFcSkpfZ5xZgDNVCLCFEHpEJLvPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t9Mn2frLXCVLRFFbCRVSe2Cqtr5z8KKZP5aQiCYXSdJCEeLykgGjQiuQ3fCEMuk1o5mmkCtWTd5exsMqTdPKohM",
  "key1": "2YkHCQd7yg2YGuLwsmhVZv2y9tzqVvBn8NyWAkkzhap6Hd9fnyRc6q2xJC9xAgi7HprpRyqYHXbwq9H6kuVjTBkq",
  "key2": "5tQDbyJB5BmuFGhQJbzS2tR5VpNNWVARhRpdnTyKuJi7suYKpJihzvAh4G4yFAXLJZ3HcLJenJyyW9PRaz1YQZ6V",
  "key3": "5J5TmauxLfMVGKgd9bzmCWBt2uSxjHRCBnS37jGosYv7aYG3RDxnSpzjAAweDsCkunYAVPAFF3UEYXKzP2CppWsE",
  "key4": "2XPKP5xQuJs7DfpTaK6GinThkUBTDR3yxTXvPFiLSoCQ1Y2KbaqTjP5DzKPfHBPydDaFYESGQiA1CbZFmTCLmGfD",
  "key5": "23hAR9HZYMyTFgdjZWrQ2rmk2mveTUYcycLvQzwZL1JZiGErZ5CvtnVtYvegfaJVNaZRa8HQZFu5N6dw82AUwngn",
  "key6": "2KLG5QdaTTJAtcSDDuUJ37h5Kcw2vpyFf7n7aGitA88dj1twRFogsdZm9jkTL6bNLjPHuruJghe6mZQYzizmvnwe",
  "key7": "2EwcUMSBH26Sq6uGgmEVXYxBxFkY6GSq932YXLhzT7z6bGnzEFPa97kFrzYfAKQ7dJ5SPzKea8MhfcosSf5bifsS",
  "key8": "5idrQnv9qxec2Jhs4VT9feBsUSqj3zdjPnY5vbLXWuc9dVofVWzfc2BMYvoma5xMTgRZBwdiFCs6P5XkgTDZfFxh",
  "key9": "5kBwRD3uWUreWb9jeaB3RQWV9iPu7B5bM3iS5Bw7CfW9KkiZGBNSHqT1zga7GmzwUNAVzTwmVCqC83PTjyRPxhiZ",
  "key10": "5wjpDk36QUxEGocpbqcuM74AzuguFWbkLhKUnsSxdnaC7xDA9J3nuDx2afg1E8GcZQmaEZM4RmRsEtbohWzoVyM1",
  "key11": "qHhwk6nbCsN8LGYsY3J379TntERDzgMLSE9gAA9gU2XgycT4iyZRchcutuTpy9QvYKfEqumFkxBY1BwZtqHCzVF",
  "key12": "4uMgWV38yqsuYhahdBgRifKQ5yrqjT4yDzcfrWsGwg1nTgWH4NZmD4ck3iy4wh5GCDu64e5vj6U3FG5qDat5zvgm",
  "key13": "2VYrKymuvdspfYHRf5swqcZwjabvDZmxndPWtGe6GbH175UueFNUPvvwHQ9kARToBkz8sYGP4Cz7Campp2bB41M2",
  "key14": "625hu1CrkbzPEKAAYNbLhCQ2BT8DonpcZx8ejYwBqWtY3p9FFLj5KiPpnNVuUGA8JGS9o5JFhVp4pireCkTC9Xms",
  "key15": "3DTJEvB4otcfAWuoEtxoQteNtpCJDiSwkttKCDG7cw5Cm7jLMDRqgUZ6YinppoW3Ckegziah1XKLXjdYnY8YEyvk",
  "key16": "qbheCRWc5F7ePfq6P8rVaW3kW8wM8sivYYZpmo845352aoM1GxiJaa6S8TJ2vLhqwgEFqEbUN9gNrRxJ7FwUe9X",
  "key17": "2ueC2SgkDeXv6692gJ8bUGRsXiCiwHUh6BhwHU1kVMuSK6uULCNkWzStA2Z6XQjnKKgzMC4Fn7mbqPp8tZAfMUyy",
  "key18": "53tF9vmg8p9hi89BTADts9V8xVVat3qPRmutY1uqtsoYhQUfrktALS16RbrqTtiJaaPznSr5vjNVGcasmwEE4bC",
  "key19": "5VJsnk1hZ1b1Ava7AFJtVJBosaDJ4uzQfpEh6SVfEDV5MTnvht9hhRDgwhCk3q3cS2dUjmtvt96WpsSac5coKwcz",
  "key20": "2WDZ82UQHu6LeFmyqHpH5zmCfUJjU8mtUbKd6yY4EMfoLFbzHVsffzFDvZKi5qPqS7H1eYiJNNK2mxZ3ix2vTXUH",
  "key21": "5iawL3FHzEzum67HKeqTUt9ZiuZyPZwcePa9R9ydSYJyWkY5v11zPhtPDcojPD5i2AGjspQNJ7gy28vUpaJ5gg6W",
  "key22": "2x9t9d4bY2xRkvxh3egPHpUWHpdbBWoFDKcVKaA5jurCgNYKjZzgKcnDSLqZd3dJeuWVFqqWZhcmJLnMUg7PNuR2",
  "key23": "5D5s2ut9gC8snR62EbHALGXJZhMBvF3asTXzgP3shCjDwE26iNXwTRmjg2TsBJayfJKL9MdRTKko6ok9tmjkNcjy",
  "key24": "5W6MiGPjtf9z6E3hvA9XykdjzxLqETo6VgJAQDDJ359kthM5EDmVLzsningUaJ5TT3Z2MujqnqNgRQHiL1B36pMz",
  "key25": "44DdNqrQZFy7bNAdKtjsiaeMAx3RJFFgn8ZMu5QcrvGTxRffUJoqzcGRNEvrxGyS5ABjJkYd4G1A8r73a5rHRked",
  "key26": "4NpAq2mXy3CX6XyEZALcFSfDFDVcGtGTNVzySXPbD6s8tyEivEijaMi4jaYoDu5LJ9TEFYunZctNkVKBahrNbJyY",
  "key27": "4jvbwdBpGEan1U6v9y97fUxATGmhi5t6qQRH2wdRDjgERU5oAacqem43J7QX3tuitP6aWZum2zAuoQXdZhfdDvkY",
  "key28": "2hVtvVaMN9QhUd3z56FofZttmmTP6tV5WNNZuzq5BqBEf2kzpBpgjt6yT2DLgw9W9PHqtVyJDZgXpogtZqqxaqJs",
  "key29": "5t3AgQ5mP7JvejW5foHqQ6CcHJx9h4m5ED2YfjCKMtQeEP9fULpL96ahznvNSt8ZCHNpvbQ68oKdFN5L6UYGzdVV",
  "key30": "3f3SGFPgNrrY3FditSvieN3tw6StxbMmDQgMGb4XF7Rfmi6gmg2VzLy6WNVgpjgYTZKVyuP7Qoa3Z76yEBgtHNwR",
  "key31": "3maDpGb1Sa8eYmGYiYAC2Gma8GFAcDrZxbzR1UwHpmR5u78rgZkLx2bK1oHXn53jP1iGSnfb5Fx9r8gFTScrrBU6",
  "key32": "4fiSSmDezLC3MiDonUNTnuSKLaVEY28ojXdDiCtcGNYw8xPthCqHSJugkhgP948aK5AN39B1Ln9f1KqAxuMTtCbJ",
  "key33": "VhSW36zL35gBVtPT449Ukd5QQ4kRWz22cCFtc7VXHFeZ6R3LC4pnaeWg9LrLQJfPP35GT3nzmLph8yFHowsWx4v",
  "key34": "5Eip6pLdtep4uDpBvjUH4dkpKN92T4mHXh3ZhruzTdKdZRFyoX1Gtodm8ayYsyTDGiWY5PHLWNup8QGGH1XpDPer",
  "key35": "4j3YUH5PTdQ4961qNw2jriZMv7XnF6S7p7WaqxTPHvMJdToP7tC6WxHtK4Y8qQou6gCHxcsigM6YEV4ysnCQZc2M",
  "key36": "jtDZS3QYxoeFbK1w3XjnoVCATMiciAmbNRCu1L4WZS7B9a9vPwm7jLymV2NHSZA7NVq6TmRdKMnNGnYtBYppcpP",
  "key37": "jupxtQVo4HP47dsuBU82uf5HoXj3No73rrhkEHtCLcieRzH8jAdy5dNGVSxsS6XMZsy4zC8aFDDtzTH2AMsfsHA"
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
