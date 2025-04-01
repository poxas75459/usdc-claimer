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
    "4gFuJyMgn8w7b6q9TPwzhkL5U5oRjv5334kZTxa6rK6RTX8wNdDXfmnpAECYsHF9JRZdVpuCXMyN4iURryvWtqEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GzTXZrzoCysjwBSj1iweSbnuS655qDLZnLxysCTfPaQpDBgUk5idobDPxe6aYYrYESUDdqcNDKYirnMCnuPUFmp",
  "key1": "39Q67cjDChpXSjrn1QpW67Hd5uU2ApuzJqjrbaUwfURgkqV1QADMJ4AUbUGwbEwb8q5SAFguvsB8QempThSaSbs5",
  "key2": "2L84uTRoizXVi1hdsv6WgXLPCF66vudJyBWPymyccwHdTFcWZcDiPaozhnt5P9p3D2WzXLGv9rWVjGaPFWxDGVFs",
  "key3": "5S7ToEdhTFvxUbZxNxujp1Mea9Z6ZQ4Mx9ayUsJW75S1ncA4A9TKFG7noA5FRHFozHvoxvwN5JkkZ4qCtHgmxHdJ",
  "key4": "4VzpCi8Jee9cpaik9wMZUBFnu9K31YLtgC2jyXSn42qhXz7w9jXWpSRJbiMdFEvfuCHpUJwwpwZSJY4vr1x8Nymo",
  "key5": "5nAhhHjPK7DVyHZYrDr3qABHgKGwrNUrcjoDyJ5WB8dfKbBFrM1abaMc4jzeMZMhoi3Sk5CRvHPBhnBfzn6sqC44",
  "key6": "3QyHqvoR3BoLs2nnGCAvRH4XKU4KbFpz3TdJQ2enSYsmxeWvGheN41YgjKQsbUapCzP9BsZzQoXnGJu4SbMCm53j",
  "key7": "3m2UpfUDe7UA8W8BbzvXEemZYUSczkMD8LK2NGhjSDVrEbr1L2ETaFCu6vcTaksda5R2jADJ8kCYjibgWqazHQLy",
  "key8": "372vdNibQoS2wzfuo3QxRyZM41QR6QxfZ2KAvMgykxi4sPHYMbs7mGBRUrbu8YGUou9GsnnGNerediEtE5dZQLxk",
  "key9": "5gkaa8UqSVH4M1hdzzs2GrHqG4n84xuPLewfYPVMBox3DtnAc2V8V6LTJmFcUtqmA84RBjWJDDzregPitwDKSzWT",
  "key10": "5zHTT6UZUjDM6u6bz1iFuWBosHqTzFS9PDpeP7TVirVe5rydHy3PkGfHurZemaZHbKduJLRFUhCzDCrnN2eBcwti",
  "key11": "3Fe6Bhy4NSSY9GNnyb4TSLumuRyFYtd9dxTJgT73TaefuhCxAf4rkx6b7Ss6rEYajyhQ2RHg68V7wPBBUPbhsPin",
  "key12": "4ydZeAHsxVjhrs61DWUut3kvTgxw1K3xJqLg6tHVSEroruruSKXVEhbAwWYHZDuqAA2oppAkq7QSmAd92nRAy5Kn",
  "key13": "3zgcTbjWviRFr4qkwkVFe1sHU8zbWYNfpCpkCuViMpwKwNCoPUZvn4DPwtMt7Uwv3HL7p5Juh5iohBinD4j2D8ix",
  "key14": "3BKFyJa5VvZyaBs1nnJxhho2vog6LCQFuDAanCoXX1gmNDFrkQatsjZa7fnD4qgVnTsoJ2rsMkLWMYQabuVbg3Wt",
  "key15": "yiKvcWzc1NuuELC2kcCVwejXA8gxAvP4HxvMJd3ftcw89PQ63E6ZyPjUcAjwtcq2Nx1Ah1AS5f4x9pVGvC2whLD",
  "key16": "aXJfzvu5Tig67nk6Mw3eAZ7S5GydtwdjNcLrvzwtYkdVe5bavrgbEu7t1rDednMTheQ26dtEiRYJrUsmSGweRhM",
  "key17": "5kQKqQXS3aUsYgsa4iFSfaboaEcnrvzYBa1rKGUzhtj2MCTBJXQoZMkwDqPiq11CtKjimqX6atLmz241jSzGfzq8",
  "key18": "2XJhPxcSo9QRgGstmrwmV9uMw1GvR7Mp7xH1dDZVfzarH3YCgjf8gUhHojVpbG8mngrgawbAdJfcMDAAGAnDENF3",
  "key19": "hKVyyfX6Pq1VPkZcZ6o1VLjzoDCrR73V3LJVZmcGQczERWebx4zyadNmVzkCfY3De7muWL2kzMqiYe9kCp68iv5",
  "key20": "53u1MNxScJf8mBKRVpY4qDFAGHTrBo1r7AYWFJkXwFGZvzY7Ds1tUJC7GoAoq5sBAjCpYpwR72QyrBkhTSkgX1xA",
  "key21": "2QGKUUffxXiEMeh1d2mFcWsDRmrq9H1fs2kGBhmF8QbYJshVLYFBBRJ8oKH8ys2Y39n6542Urp3c1RVVvbcC2pxT",
  "key22": "3qo1xvjMcQ3gFo4W9BnEK9U4ST2BrJP1MJruDYfBYKSei2GXq6w6qfKT2nzjHSiZu7XYfggG9vG4s5TzfNrxfj6r",
  "key23": "5eKejdk4QpxfgH7Yw9jtciVZVkFaP8ynZzhhwN2NcEqgbdu4w1Krq4PSuszYPeq65riRSusfnhnFyhaynJoDUqDJ",
  "key24": "5d9eMryW9dpESpH8n5vuYTKGkse4gbkyasepmsq7cRiXKtQk8oY6Nd333sdQjr7vhZFy2WpF5epcC3QpQ9QocEgF",
  "key25": "5D8EDti9stDwPgWrqN7AukXdQPfAtimqsNtytvPA3c6GvyMdAKMsJXHTps1LxoWUtNY7RukAsWbreCzMSUuNfEPK",
  "key26": "Y3oR1WtvBr6jnaFAP58FoHUiHfpQDWd6NoX7mJC8bEKYM92aToVeuDBWw6aCfjcfn2TxLpZHcZZAUVb9r57v5TT",
  "key27": "3ZKpuans1CRUz744vpTqhUUX7YDjiEoAuw1r4NGUWNJM7nKbZrCydeouAtYr7zPFUX3FiN4v5UxLvfcm2USC7cuU",
  "key28": "1qFh8dyyUJW95mA9zEzQpA1bnsVZR2ca1eZTDm8oARbTPd5hpE8bUxCasK6YQqwV2i9fkFmLwkHjSEBjCBsccE4",
  "key29": "2q86xzDS31qyyBS4MkUr4yqqXbifKkHFWYdRkc5UBXbrDEiUz7MRatyggHd6tnno6VLN2s3iFpq6FeGzvwXfc4ET",
  "key30": "4Eu9dTrZ7hTG8NX6GAec4QiYgF4xoQ8wVrqfepNm1xMXGrMHtwAiUGnCWhZiR3hj3KYQTUBHXSYe5RRQqyqgC96n",
  "key31": "3NjRv7axPowsacjHE3N99ktMavNzKwToXh7iasiAi33wzgT7cdBwgajxbuM931oxzSuXmWwpxsBWD7jTG9bRTn1N",
  "key32": "WVLqPp7LyEGb3PVTeZmNwL2Vxmzvw3q9h1CreKBBAqavEDX36kx83bkyi2Yo8aT2YyH4m5STDaaDLFSUfffGAXo",
  "key33": "4V5EhGwTFdmZ8eY3RR4PSfHuX8DvPq1Pjm6mw1gcUMdeZswnHJ2wEaM7HPuZicUzq8WSMEZr3pmCyJRXzEEmWEeG",
  "key34": "3dCfcPkNpmbesdvEuaWTfk1wqeQULXedhMvTEY9eLjQPjEzXXB7ZjTRoJNWXfyxjoUu1G5x5MvV8sWSL6XVmfwRB",
  "key35": "2jxALJRyDHNzUeuUL6ipH5iTKAsMA8y4ozNVcpcv7dv855zSLSyjPvS3sXuxnH6Mh3ND2FFjp5b1wzBiESjmFqEz",
  "key36": "2oTAvUhtguavviVva2GVWATNExhji21Ppmjs8V4kz27QxqCj8RVgSZVU3UYi1YmphW37fMtDWDJkiPcFnREgviz5",
  "key37": "28P4Tpum6mUsXGujCqXjbEXZ48jz7CGvFNj9tnFiQ3RQFXRyneXoYoL4NJtMDKT8bux6fU13aqtBdUf2AuzaVSbY",
  "key38": "4o25cCRVrsTJ7VtxXhMJPD1BEf2bt7Eij2gH44S41AFYx3JMQK4EyQjwUy4Yqer75ZbRjyXfHidwM167gwWbawCX"
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
