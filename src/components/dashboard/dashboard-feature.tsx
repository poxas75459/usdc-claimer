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
    "4zk5kx4qiBrfAGNqU6DePNibvsumPSCcwmXummhQ7Qud8LgoQsW1nyRqvptnRvcz2vuodk3iqyRLqTf3td6fc1tZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XekpcTNsWDkh1UTqEiGLUh4kx6qeu32giuuesFSsQG11dXWQY6MMZqXnJST9F2FNVxzVZWLvqMnYMmurMJxihSC",
  "key1": "3yWwmgWB8XZPawXyacrYYMpFS5ijzciKujjm3zLhAf5WHGDm77H2owsQAM9exq2qx1vokUT77cwHnq4VSmv1RmJ4",
  "key2": "4dDJtx1XDiMg98XUoQJjwDvKmcK2YcGYvtCfKbGnvK5bsw1dxRtEd7mSAoSyMkpoTagU4t8TUxkYJh4fkjKgSXdi",
  "key3": "ocBQ7hrWpyN369aeUvCQYSfdiQYvB5X87jfkCyczM9hycz9LJRYccDPt58pvs6qjD4K8XMX8iSjboP9i4TdfgQT",
  "key4": "5y9PhCWYvBUTbjPvPKLMYzk4rJrzx9cvcaSjPrpnTFnJLJco69g4D9RMVrsbmuiTBgoZ3kCApcuZ81WtG7bRYye9",
  "key5": "5Cg8pE5yZ6G4yqof4V4zehELLKsXzvQ2q959L8UNV568Z7AtDahrPbKupJWt4j3iAgh8K4jGGw8Du9jY2r6N4gsq",
  "key6": "47JiYRSZ2EHrgZrSTa7gYQpahthyTgp3mtfzEUemP8NeQousiFsuhHAhAYhkWUxJBrAGXwa8dB2jTWbPqndUZDmt",
  "key7": "5uT7t8aQNkU978xHgvoxjH7oiWbRmcVtGjgpt3PD6GtRL1w4zNW99AExV1TgA71UF14177dG2Pwsqzx5u69C4LGT",
  "key8": "3kpbN95qBu3xgX5feBwgTHps7ur89qXXvdyiYLJgnH2SBvg9okJzqNBPui4fth4gbJAuStpYmZzhqT72V8hjgLba",
  "key9": "2JCYLoKztq3HL6E7rvnQRYbt2ehDwXtcRGQ8kuhtMFAv1mh1Mfwxiz5egjY5AJMYVZzBVQ1EynvrSncw7vEoMMgu",
  "key10": "2kJArJ7VXj3GAZaCESZbftmrvHDyvqY3ZRVGwfemcLkV6DzFzo6AWomLYnTWwfCN58bbxaQV69RbbZg2s1CRC246",
  "key11": "3ZAum1XXXQDWCAgY2pwH3ainn4fW4S8k6pjgTfxHBcvwpu3tkkejkczThCwZkC4abSouqZo27z11f9X3Uo7BVc7R",
  "key12": "4A7w6z6Kiet7S33C256WiSTyW9rwcK7RNm1QVCfmmbPxQcWFzwCTyz3oKdFXqxNJGt6bBxi1sXhdpqX6y2mFUV66",
  "key13": "5J1ev7dqoQBnH92aZ9DcoJQJ7DiuNxZ651JpBQ3hhDXfnureACUiUyPCVbGgoS4TjfY1cSp8DSpAo62PD5mEUPNZ",
  "key14": "4u3CFr2UqKjw4TjvsF3QXJVXeN92CpEDGXQgE5YeDfpasv6ruBC6YSbdZUAux8RQP5ZgADQ5KdH9y5tYsGkbe2zF",
  "key15": "4KKruWMhfaQ3jb5EYwBUseFM3c1ZAwr99L5gGEHg2ytnnD4GzfNGfxyehBXvVC9JvRK2XAEeExdRTh4TH3snQX2W",
  "key16": "4tFZyBjSokMELhSjWySu3jQouu57swUqRw5i9d7XeWYGYGiuAkEH27Vf8t83yMBqyHZGAwmJntFGptMTdG1ErFZU",
  "key17": "2WLjYxhiRLmH2WfwhEfHn8XWdk31K4yiDfMNiUUimKiVYPZzAuUBfXGSwLq88ojaR9iGvKbRZjga4of57HVi3VLh",
  "key18": "2GGcpXeYH2vGLXngWHbQvun3yJERg1ZLtPtkvFA2kcq9XmWeTFPD2phtRkvrBq5nzDq7y74kkmfdhpLWR5RSEQAE",
  "key19": "3vaxwJsNSfWJGomeytm8f7y6hpUurrtJ8ADtDCYDWKNtmYiaa8yKzGuJ26N36LK4e825yK1or6cayRcLStRgXyjG",
  "key20": "5uYP7NUfjXrefaZiEatAsTDCiE8CNgYG7KuWty7DwM6SYbNPVA1wdYqcFKtzxz1tHSquoS8uDo8hGurvt4Dx8A5S",
  "key21": "2qpEMXZ32MqxEZjRdQAS5hK5nx9FEVLAhNkEbTKpqTf7XKao8Z2S8UxZWUnKxR9rSr5hakMNyR16X43yxMXk8bwj",
  "key22": "5FNNLTmu8qQjh4a8MxRw11uiVrAc5VUZTgNcGgRh551UtJiirXd3oyUGoUqSPqjCfyU47C6VpAJSFYtb6PRFarXb",
  "key23": "YEMsXGNmUFfaNbP5AP6u6e3fYrVmsHf3xwwAYczHwLhyYokKQUJNL2yqqzBzhMaDU44H7KFbfgYazqzWhmbRoUq",
  "key24": "buJLRbdvhHxb5VDmknv936VveXM89w53eoXZ3dsoS54PnedNnsrH8ooRpDLFtTUhSuvrDWXBnYqiJ2pTxdCua8n",
  "key25": "C9jrWN69QLFp1frj9mP1PSR88DC5GJS3e9LyCdGuTQMdrnoh3guLXBFHtimcp9CKgtCZdrijcW6LtTTwyeUzXsF",
  "key26": "B7LcrTxg4P1c4aTUYqrsCY8uiWJQTgPTr22puZGQxDPuvxHRbpHbAwMtHsEMjXukQikLF1HdPF7nAU18nsShhDs",
  "key27": "2scn7TToi91c7vpv7TVhRcxKWeFCuYCWZQb9nh1W2ZDXMGpQfm3i2gDjQ6n8NdGawMZP1EXGvA979avJ8NMnVjZv",
  "key28": "5tbbEKMJ8YYnPFkfJi9mnGc6R95rKcDGy1ab4PZB6utcK6PKP7vD1rbzrrWDJwELJjA5UgZv4WACgSzdzYLri1bk",
  "key29": "5mPbpnWP6qZrVUDwoUPbKmdt4pqgDqphiDdMGNcn6sXZGRTYgcmuzE6JqEMHMqihWbSh7LDHC79eBh5Z8cpG17jg",
  "key30": "4dYZsn6MiHhPr9rsesJm2zEN9SkP9kgPQ6wDJLe5Tt1nWeWqz5YSaEcUWcuZtz32rPLLxhwW1NstBnfXdzNdT2rz",
  "key31": "36VefcwwVMzZwVkhNTBHV5QqvtBMcqLSGutq4Qkg8uE7BEULmJUKnT59jNZUz7Q8LD67jCKVsndaWLZ95H9eLj8L",
  "key32": "2RnvXmCFarjRYZvEwHr2C3Mc1UC2WkmDb4RHNKQUYYtYxDDdwvfgCgKEvE1om57P3erM2TWVBimWPFAuEzAmPh7t",
  "key33": "3ae7s1FPvvihVoUQZJLu3p8hEpRYKpft6BJktSi5aNs7yP7x7vTB9YibnYq7t6TwfFycq6wo6qAqsQS7rLudBBaC",
  "key34": "5q6dtwdDrPMXLTDvq73sGn5pDgFDXfXCWNfFu7TsDS3S7Jo15VjagwGatyR5RACH1EHKiz4S3cm2GtkqZbkRgC7z",
  "key35": "3y9Xu56qe2RMa51CetPSrMwv17gapkNMhWUgJqX8APTGfEwUFBWqM6Z4MdWPRNEfvAjDWZTqeXvQHNm7ZNKdPd63",
  "key36": "2ZM4V3eJwbz6fn1YrPf7mw1ir3aHZU9yd9XzshKUk9xUcVHezf3khYXsu9pafQrvTr2EJ9yCwupDzLmvqNoGoUFq"
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
