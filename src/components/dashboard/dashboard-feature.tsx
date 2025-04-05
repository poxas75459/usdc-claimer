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
    "2zkqGAWwPG11udmnH7Exb8KtbZVT3zLcjH3QAgsKvi7SFejvbFdP8FeJjjKjVxr7usFSjUCDyPvWGYeQvNCNKYRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yaS9cx2Tc2agDCRKryTYRv7KXVj1huGkQNVNYpEDazaxwh1fLZTt6xunjnUDqiELumjvhUE8kkincrhxSG8zsM2",
  "key1": "4DJtoC3ezDJovcomRdWekurVwrTMPdqUnMBdMm3ecYsYVYqeLB5nqkMQYt9kMZ562vFYYXJWASXQCANDaawemCSx",
  "key2": "TG8KPQdduTinaYzuJnDBDKpFJi12Qxu5ZVgchG9oHgUmx3skQC7LJqLEoNz9aXWBajj12eRV1h8QyonRFcGgJDJ",
  "key3": "5Qj7sprTfs25S2EB7ZdJzQ82uKjnf9VFRytHTr3fmeyey2PprxiNHe9xuJWD83cSVtdg2rXHLCbNZT18xyiw1h1r",
  "key4": "3NdEiVRvkWXR54mYpmdD3a6EBf1cvJ3XMJ2qjUcAtkJRWvNoiydHxRgUtkk7ru4PmCTDLn4L7ZN96vEpBx67DH8e",
  "key5": "2L9ZYWiqp678PWKkksc2ytMZ4m1skfjKGwcgBkt3gN5isVXr4EFC8WekJEaQHTJj7CKraoSwqgsDkzaLD2FbLmSP",
  "key6": "3KoGx9bGppsjCNigVdzhWfu4st33eDskr5MkWgQZtiMpCjy5EPEEgF5opjWtNrrsADVApwPjBtLA61UerDVjzsPL",
  "key7": "4YyNQ4D9trrbs5cvwXNQcEwZYY8p2MgBvjf9ZFRHzN1r1UCnYTVAf65b9wUv4EWTvBPszNajv3EoNDMBimakQ4Yq",
  "key8": "2jZDbcPULqPqcN1sfaNR3Yr6jVKB7fawJLrAR11rmvfpWNZ5RarL8ENUKTjBUzoPq9jRAyWNAxoBR9dL9JVjyffq",
  "key9": "cVi1q6V57FG96oU8JZeSbwo6w13ysXD43cBhVpDt7gYnN9pvJ3k4wjLhE3XAun3ZomT33ZkR1rhcH3DqB35Xu8F",
  "key10": "sy8bxUodeUz1NkJTARqy3Qd2kt1wCHeX2qhAncGT6TMcnfLeWNBm5dcWiAAx1N6cWB4aisnSnJeW7iw3qwjKp8u",
  "key11": "3kqiefKwPjqghigy4wq4YpsN69QjPDqjfAmqSCcF7FmNd9TxQShoCXWFxTuvVkHjWX27XZrY1bwJSArMWGsPzC8t",
  "key12": "pr2jS6qvLwFY7vsMqKRy9CNbCoPMAU89xiN54PKFtiPw3QH6YY8vnXdzkamJr8GEHbbpS8wpirHH8H3J5dU8qV1",
  "key13": "ajPYUBmCMwuRvSnGZSiUNsWo1MTg2mFuoyKKwA9opaSdNVzH4eTc4TrQUuW4p6spFwRWgJtcRHyEWxWBZC2RWr7",
  "key14": "4vi4XktHDWw739rfnLu8qYHZ2Vy6f1YRdHpzpBnjcvTcbCxEdc65jndx2DKM2F5pPAdiGAZsrKQFW35oywx1yHdW",
  "key15": "2jpaTf6mJj8mcnNuLbU7Tym9sMZya8WJpi6Mqke1ppHsfvPcXCzEY2BA56aJ4e9wHsGTRknDRZbEMYxD2fs3pvuL",
  "key16": "4Um9wkywPQtiqVWB4Zrdd6NBxST6kBJhfnEupimBDPtdjg5BPhhRwzzFcdge3sypTbnSYkYJEzYij8amzUWvmvvq",
  "key17": "Ff2KEnm563XG1MEG5yALwzzRMz9TurybN4D4rfxqdeZVQdkzi5U1RYdTwC9WpD6CWdq2w6mbm9GQeUMUUHwqTiU",
  "key18": "615UiPjRotvf99FtT9DmonRFFvzW9qkCdUU7mZWL2wJPnszv2zoSyA7LbJgZVejnkzt14Tk1kvkwu24SBVPMUCGr",
  "key19": "DByGgbpqZmNQacNY9toEBM1vYugaWohDE7NvzH8drN3DdUZceq2otYZrhaz5gimTUnfh6mcjfbT2JtwzKN8CqYG",
  "key20": "4QETxe6cs4Xk8ef5PTPc8WPz7muzfb6zon9fSK35fT6uAzWcGCyShqxyJ4H44Nmg9LJMtC271QM3qmV13Q4CqSf3",
  "key21": "4yjEdtXFHxJorwo4ybN1N3EYh62Jp1SeT5XMNE6d6nRTbHDhLx8P9fRM2Wh6fCMxnGZcG52CXjnAAwfndcrtxK3W",
  "key22": "3Rv8ZvCTiRhgVeHqRoKkH6W2NFHEovUJgNwj66Je2RhWPJD7fWPYQMiG43ck3mNAfxJVKYxvky1Q14sNC3DJpZXV",
  "key23": "4GzCvTuzsG8BMqd7GAYUD9EJ2LGoEsYA63RdBKCQon27rTxQrh6atnWXb3kPhg1yNGif9bb9TU7mtG3TyDnLikbH",
  "key24": "5wVAtJsEjTpyeUzoV68u6zouMbk3sshTtJtwFpZZ14Nv3TBRnA57H84bw1gARZYdnYmX6vCLHc9LGeu8JYb9S9ax"
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
