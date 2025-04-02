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
    "56Wkg4KuFEvbjMZdL6CCHVBvHapu93WMjvE7RPC4ZpWgh14E4VDXKNLWs2prn35Mz7PdtekoY4mUz8cpfT8bwzi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c2qBccmLnmakBW4vcW7B1SShUgEqptzg2KgxyBA7Yprjp45nknMR89V8G5vfUaqVFFYaJScooNdLfyBhtDVNhU3",
  "key1": "2WhhKMoDBKE6ZyBVvnTNrAXkwwueDcQfW21MjkJ6Lm6tHjccRFdmMfnkqgegBDa8kZDzptGLvZ88RCXvpufr41va",
  "key2": "3oSqbWorQtgjvdbwZ5bTs9BhLCNM5TJPbGTu9MSTPoPzyzg167v1UsJzt2fktbo6NNQvu52rnnUcKMDZqmcZ7FK4",
  "key3": "55CFy4BjBL1nbP6rUyE126C6RMcxVYRVcghqwd6kzTPShtSQD2kgo1EfRV9r8wXYnPzbhmLJTiCyLHQvCbA28okm",
  "key4": "5MjY65GHf5zQkDu8jwakWbWaFay1FPTrKTGwTMyrhm7gn1jh5jXcDkRWnLgKbbkqcauUb9mC8DW5aabXzAGWmqin",
  "key5": "5HLXLBwbq7AAxZHgH63mUbVyQJhP4Mt21jtFDA3wpMUpQUuUYmtK5fA7Db1sehy35xWDLDqzyTGoLhSyrsKRnKaX",
  "key6": "62MtLjPvN7G3hLn9EXpJsJsPieZ8mDHXkc11xkajK8jRgL1fFnJop3EAPJyNpwiLu783v5mErs6fJNYdo54Z55Du",
  "key7": "3wfeeQjqiGiDsowWtK8WHYwAjuuZWSym3szwTN7wfGSkq76LYBNQ4kkAgmovkXF5KYXHmMKqSBXi16Yj4LKrDyfS",
  "key8": "5AHKHmheTqmwWYThuGvHTxoHvNQb8oY1myN4Ewe7XtQipSm2Sf1ZqvjQBwYxhozJQ9vau9Z56fuUr3pNsRDsLkg",
  "key9": "2cjMsq2t3GjBBqaSX3n8vBcgKZN39Wd7cZJr7bnCdhQEHdDgiceGgZzCpG3kAekgBN2YMgXUvM4vti4miDFAV7uJ",
  "key10": "51eR3GAaba2NeMgzn6RYGqT8UxVwzjPKEUeAv3Y1CoY57RsNsaco9r5ktgK86c1ybYDzJYUWbeiFy4HApnmcKD7y",
  "key11": "5QjXA3L5BDxprfZT7jTj1RbHcdPABvXyQCDaxyGtUFW2pjuyvorPAShozNDGSDQYfoJN49SucDot72zqjq7RbWGo",
  "key12": "3EamjcqJfpp511xZJXoBP6YeMvhvgR6XSD2DmJRH6Ymxp8uDVDTs6f6kkP28imdGXdgzW3j3qcAegT97T2uLb7Er",
  "key13": "56T92mKc2JgRzcggqmSBgDc7szcx2qNshVJXqKWqEC5YTpH9bpkcBYTAM7syjD81yg5WXP9KAtzR1ToxvVr8NARD",
  "key14": "4yDb2otrcedmAthkTe1TMXyNrsaaQkjP5bUvk8mLRMBsZUwJprQWoTr77Gc5EjBaz3SBBELQRJ4goiDUHatbrh3N",
  "key15": "5sLigrSuvNS1JzwP7VXrBV9UFV6z6Xhyt9iMZmsM5eGcDRaumoA9uKk2WdHZA5cpEGQPCFiBW87Ziu58BDVH7MEA",
  "key16": "4rawmMr8y1xMfEkD3Y72ed6hTHFgkwumjnzXwgp4og9MpodtjwZrT8aSZXXExbQeLFGboBSf9KgpZMe5sCPw5qud",
  "key17": "5joy1FLqLxfStYmMiYHowVncJwpxfgc5ceX6L921T1ts9uff9HW8t9KNcd7hmBWRkh4nHmbLcJyZtqEKvPq3cKaq",
  "key18": "4WUSJXZmzkiZcNs6nkjQJzxKP89rAVvA2TjDR7opqP6ouWGcPsUw4w6Szgzb1DmapiSuZEq6z2Zur2P9WkADUwDe",
  "key19": "5XymCW3Fo9QswGoS6R1UAYgVWXXKASWPC5ryawF8es4A1Yt62afv9iyPrdjkJ1iemW9k8jE1n8ips2UBhJsAZXcr",
  "key20": "4HxEhsdfvyDPdQbR598KA7Mnt7YFDfYeExyj7kNHCy9cv42jCHqx15JYhTWvKdgpbXBT9AH9s1C7VGLris7chMzB",
  "key21": "31foymBFTpTt5CgAPMxoY8N86nKu2eFLr6X2aYrYRztUeEHpjYqbCAkoCGJjesvZTTpwAqgiaDtx5B7ihTqzrF7w",
  "key22": "5PXadDrJUQnxhNi6gE1yVbnbM7S5wfqzyW6HLBWjUyigapkECsAXVvUj2yLoDBeGTXMVRdraCaTgR1bkfSLt2cLy",
  "key23": "Yaiyutse6w2GsiMxRvGfGZQQTPQwY9jrc8QwejfGbDf6XuktyQ5cBnASz8wCswrRkGkmej7wcoKGV4Swb5dyynZ",
  "key24": "2sk65nHinJcAQ84idCT3FvQZoqHHzyejA2k2zn6chrBZw7zmPaLePQrcjGvV7SJiQq8PMa8tKV9eeofeY9M6Cps7",
  "key25": "4vwuymJVYGQJ4w3YZ1yddwQeqcv8gw7U3o78oSVgZMrdi4URY3nnsDUeRXkWxeCH4qiXAYtn4VJt1XTxxw4MGqV9",
  "key26": "5Sat7WYtUfpQQjNv2vsdWi2nbCbiZKGqRjcdZSXw6gHsCi6qdUCNFD4auqrxuX1dJNq4wJvkVB4ZRrSGq7LrQxn1",
  "key27": "2TpVXB3j5nmHkmxovfjhyGC4ux98EG29NbaUaVbivSF59RnXYmjTaxagd8pjFDRJh4MgoUFswwzYFQsC4m2PK1a3",
  "key28": "4sGuo1Ei27pxdUeGpFgYUqWhgNvdrHj6x3TLQYTyqQVZJCSDhtUHULpCYcx6tt3KByxVKKqxdSaAGLHt6Htj7pp3",
  "key29": "gNvGD1yMwFEZpqSAGFi9P62c4Gi7PH4dG7s1wCUkTXVf9UmB1MQQ1Toe9LPiWFnxgPPm4o4xLSGUHYbKyti1f1H",
  "key30": "a43W4dEtWdhFFG1K6JTopWk4uEWh2Kz8SnZtEdTjGyYXtTQTmWvStMiYZcae898cQzXXg4jJ3LjGigExf5tTWiJ",
  "key31": "5iLjG1wRADWuN1sNhSX3KdXgZK64FtaLJAT2Djs51FpdZe9UF3575koywdF7Vk86tRctgNVZFUoaZvRUrTfSN8wt",
  "key32": "5FwwcqQ7uGHtJSKfT9cPXiacG45jZKq8JdJ1hEExUh5V2U8B8SiJiz8UQKaVZVZUqSs3GUhAxWTSJUamEoTKi1De",
  "key33": "2fLjMC1c5dXQ7eg8JrFLjaGUBDuhawYJzNHLMN1HwHo6NwFaWebzGK13hGLNCsFYpYB4AhAsaHUyZkH7HuNpKvsb",
  "key34": "417GfGn5NcnC5dTnUpotZukzWaZ7bCnbH1QgCixLbRczELnbXFaYbJ6gpkR9cjs5MJik8gajMUFhmEJmqAjbcubJ",
  "key35": "4kbitciegeJoirv3ahQVReiu6MQcbiyPKWCQ3Y1ZnvW2uVTdyQYtSBu8isoQAau8ZEQAX1ffbLTVAHya8qXuqTJU",
  "key36": "5yWcpNFdEeWCo4G6dfkggmp2PRS662QHfpWmooh5tEt1ubAvzViYHGuq6YU3DAgwxQ11rWMEQvEmY6j3Nn5t9yZn",
  "key37": "2ypz9nuds7E6rEbpFaBowa2mQ6aovihg51D4YMuntnFa9vvRyiXhxH4sJEr2w38jETjyBaUvKPMVzxCeH1sL4xAp",
  "key38": "KrVD5YqYhfoSSzftgM3yex7o142d2b5hfqtWH6kQhrsjr3vvvZeTtp7EpZhZ4kHUkDLww2n7mu5nzZLokGDSk7Q",
  "key39": "4jYyGMeBENo7P6GRFnkPCMw55a376mMUM3zsdcazpqjXxkQsvcX5WDyr87i6EW9Ve3SsPPvkP16TSPsQwvPYMKBW"
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
