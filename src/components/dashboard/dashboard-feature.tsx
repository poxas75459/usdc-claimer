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
    "4MqwvHU6vc3r1SefTdwNGvTiwPzG1jzGD77ieP98gYETJV6P2EyPxUtuEEULF896fGj38s8VV881wwERv66ch7vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jat7UZfsTD6XZUaZTRyE3ALCz7PZQSyrnXSEbCwuhXXSS4rYP6rdygy1BzWfbhq7zJohw3zJatXjBoFwJ8AD6Z7",
  "key1": "3nc4xhao794dYfmEd6xf3xqjCZ5C1JJ87fnu35CUMf4qqobD2VppujvvsDpdvA94kiJ3kqkrkWGC4iSwUvyMDbi3",
  "key2": "4R1FBMW1TwkVj5gSu1ru5NJM9DpUDVn8oVWquuN2Q71zVCk6Besc1janKWLGJUT6hRWxZAJcrj53zWQQrcUPgsmr",
  "key3": "k2JUkQnteLtfhe1P8PapQq6kU8geaJdqfLqyWYLkCzhqpLpLd76EjrHdsMfzH6PACcMfGnK2MjG2xsCf3Y4KBSf",
  "key4": "5EHwX1L9JQmHJRRyRWJCBuqdDgGKeYg5us6G6j71YaJr5G4MKarCLKVBtBEvKrDHsA8EVxLbdPyGRXV4CgZhNAsh",
  "key5": "3N28VyG7s2DzRZfQEPUVgXCWCMyB5Rqz8JLES5aqCBi4Kxy88UqRuDWD4ab1bfDKRPa4qtoJFQ9Y5CCqxmKcxskA",
  "key6": "4CiuNZyu4ShagpunuqqDkFR9CqVQmsyEao8VXC4Evx4AsM7Ej6LUejqYBdUHkbSfv41o2FEeM9HaGcikssjuAfKv",
  "key7": "3TeUibodMCLnvvp9FcoebKvrSSu1VtHFavZRDnfN7F1mrqooozS6JuSGDHAaGHnqg8ebCJa7YzSGH4JsE37pEVSU",
  "key8": "apNFnYHMVEQ3ftdJHRLoSwrMLXxrBGN57aUW5Nup5jU6Ce9j3S5iGegx3KbEWCbejZBMfFTubrybQzEavc8JcS2",
  "key9": "XzFZpuZC9Xsam2fiqF3kg3kbMwxUfPsrmrx52WunE1pYwQwjc5YmrxYNqVLdhXrW4HRt1P5LPja8g338aqrV3vG",
  "key10": "DkWCpMe6nqpZTCWE2DJ1x7Sxsc8Uh5he87cKHsao4pH6c3jos8qjjhJkK7HfZ5hAKXorSzQpWZaeiyUnnQYUhLr",
  "key11": "UP7pUKZqBVfh9NUyMCYo8xovkjWA9AV9L3CGTQ63pjwRTdK8DTTHGnUC7zB4rhXDq6KCoMXJanE8kHrFrqk1jTa",
  "key12": "4trTWnmCQgJL1oJysgdCKLBy9N8VJ5b411MS4PmGAYnJ7HRQJzcHNgBrNgm7E48pEcwrPjoumwSNdVE2x5RHfKLD",
  "key13": "bNLH7Q9vAGHbWHcJoRUtkDmTtQ2cZsr7pPwsbWemn3vGf4dVZ8Pb6foA7LeQ1c3hVj5iDLCphQx4kMBXDyoibqE",
  "key14": "3hDtvj3qiNkbEy4cRRphGngraTpFRg285T3ghWB4jp1iYum5kHFmq1jDmhKSMvMax5sqhnoCPf6fkwqammiLvF11",
  "key15": "3NrDccDhvfDKUohHmu8hr5ZQMGXhS8Cmknky1YPWAbC5YdpgCmxKzNMCztFbuyZT6QGMi3XCtuySdoTCrDSCW6wb",
  "key16": "5VDfFcsxueUZYYi5911ZD15K9X28KK9Bux7WTBxd1NydqUiQN8V4DcWHXtk8nuNesiCTAAa5nnTPZKHG1EVHdp6U",
  "key17": "2GH1P9eKjwisqnA3Csnnm5xiQyHAcuEi8Sk7QjRuoejGZXWQHLcuoHUTDMiUvvCtUczQ5dCm13Dw7dcxqinWzqEY",
  "key18": "4Sxsz3SoNfPesdfred6Mdehd6727izbxfCP3vcTbSKmEGYhKmsvNyfKLPXfLcYxTzkm52cea7Yi59kqZTY9tJaYM",
  "key19": "2GHeqkcwqPrC35rk6oBvA9X9JLcvzXZM27UWMwc9TpVE7mJjzjQF1UYs42FvZ59Fu5UAQuPL7Yo2jPJsPFpyrgCb",
  "key20": "25cdjciX1D495BY3Qoa5xt5LQtko9dRrbhX8ooASQ28hyh8MpVqGmgfMTtAGWXUppZzGfowbX4hZaYzxnB5ctPPJ",
  "key21": "2aSeQ5nXjAXmizdo4mPyGXxQaK8qWrYm9dnNMZaAkvQ8tNdU52KroZz2aW3pWrVdH3m3Qv7t82SA5mq2k2gEiLg2",
  "key22": "4UDHFo67sb1e6Zfu9TdWPd2iva6B4RbKBbgNFzDtwsWKLbARHKutNQ1zj9NBB4qgr4WyrmwyYLpALceqNDWXQHeq",
  "key23": "5osJfVq4mCEgDX5FzU8RkaNGubxPcs8x4wgGH11s8ijSDvaFeDaLf3ctax7HzpBBkuTMJs6Kxnm5JiFmPYUtGpKq",
  "key24": "4gWychRZb71tsTmXkSUCaw1UskLf4ZWvjzAqTroPWkJrHWJqhsnwHHyrtncdnTMbdtLDMa44LCnvSwAHuXDd3U5V",
  "key25": "qsDWf4C2GwTdBwobWYRLUskN9tHhWtwPpt6CLJZ4PJoot1g7qdq5tcgqeviCpJo2nBCquHEST9pUh4ja35WEGcj",
  "key26": "2cvekxCVnXf6STHpJC7YEb2QFDRBUkEiSe2aXtnoRnzXBPSPqKqtr8eswrKQiHwm69NAi1Guu1tV9CXSnvAE5q4M",
  "key27": "3KemjDW96cawgCq1SQk82EocNLq893swPChzMtz6MGfpxo99PfcJmGKs4TFbLjTfKNuAq9d4eFL8pYXnEvfnziLm",
  "key28": "uLLgdF6UGHyf1AEGSQEDCLnSQZWv9fAkuHcDbSJeKT9FCE4W7JTmGAa6vHnkBwDF6z2x55YLpUgJqQuu2m58SwY",
  "key29": "3ZNqyft8iDq48L8hBRZjskihEYS9ZCCsNNBVSy1GBN7iA9BVe58pSh95xeCNiMdEKfncMqynrgHfmQwrEahf7vMb",
  "key30": "28z5uhe9duoynqm6X17xqTjvEmv7TMHUEu3EXEjKzNaMbjSjKbHQrM53iv34WHv7cSKvmRCASV9CsN1QQdgr3pes",
  "key31": "4LjdZzxRn75jS2Dw5hpH1n848uhYntpJngrSnDzB6Faay9T2hoxPCi6oSdaUbizB7Miq3wsuAeVGwB1w4XkSTN82",
  "key32": "SxRZYyirXZxed3P8FGSi1Kkdc2HgMYC4mnwnJMCNkBK1Z6NEYTNSSAapWNBRDDYDoqEq6ogCuKM6H8qvNkmR1Ng",
  "key33": "3196FtbHvGncsnupnS8UkNHNHp5bK4DqwB6MQtkBLNfZpcXgJ9GAwpoV4qw38Aej8Eumj2rmSqqdmurG2fzF5u8v",
  "key34": "3hRDMy5byKLWYr48iHyTMY2YE9zJravt7MSkhvWjoXWcXnnSQNAj347ueeQWhNAzdXcsgiFETKswbtxB3WRwX5tL",
  "key35": "49CNkoYdLgVoRiG1Enx6nQ65yutct9r1qtujhUH2yH9sLqqXVA6qQhkXmPFY1pGzBFvveHUYhyPR4LZQ159J6AHv",
  "key36": "a9WTvyF9H7vz3RHscGYsEXNHb8aRVf65c8YeA3LGsaZjvkBY3LqKArpsHAPCeujRGTZ8RZaLXFRvbsVa66EYLeh",
  "key37": "4WgusgtMJN6R5NMjsRKdSE1k3rHh3sj88e3ojiZi6CxFzFP998nqcQi9Umgm7DG8KzmyCy5znRnidFJ6w7FnNscS"
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
