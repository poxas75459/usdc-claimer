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
    "4ePGe6Gfhcnkb5YcnqhFXeQ7z8n5qX8mtCE5myecw4sFW6d6vxabV3ZJEzrEHoTUoTeUfLTSMxAYyzpMe6FEmWAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u6Sssb6FQDCokwZfE1AZhsbG5J4aeEAkQBSBiW3LzXPZTLoBfWUKkufFJnDVyS24ozY3MbfYRQpdzbbYNPjLH5",
  "key1": "63sXSLijaNt9EMLHv3vy9Ez8TJF6A6bGh5vN2QxtKzbquxakzve14W35QGM2wv5t97JSb8uqH9FuSFjLgY5tGThu",
  "key2": "3cpWP3aLMFZcv4ntp9zau4tbyWpMB5Ka9hCckoP88rEJLPDAFiFKSGcB5DDRjgXFX1PcdJ1zWNia9JkxqWMXogp8",
  "key3": "NQtAAWFXttW2xkXwqHfWC3ExJqVKr3LHyEjLsB4uiTMBqgzNaszf6YxHGF4p9Tb8GSfRip1WXh3p8dXy2T3Wi6P",
  "key4": "CJWY6qCQ4UrTggiFnAUtvsmNmAdpvULJuGmFJj96Nb7SbHw7FfW7cVJV44h8xAngfY2twk1N9zhg9WEsC4ogQJr",
  "key5": "511KE85VLMwUHLx7NNangbDoKRHa7vVQ3AWAwVCrwuAqBrtSy6HJkBahuzj66vEyxZdRVhCsdb4wGmFjmVD5TaS6",
  "key6": "43bgbSdamCmLrNxwfqhdnHxobruW4ZCkWFzVcA7ZgeaTwkLysRS2CDTMf5LBkr6NNtPCVpYfdJTNYiUqRscCGENe",
  "key7": "3nFZGKPhiu99JBTFDAmHFpYmrSr1mK7h2G1gyD9W2oS9vSfEnNLF7YaqC25AqL8uBmthef1juurL9NF3uCsW1mVM",
  "key8": "4kWoov5x3MhuWhs1oWXe3Mp8daWkguYXvG7QWdXxfyZJ4YxZuZdeSXHCfKvSNP1UFNFZdALh2MS8qzEL85jwtmFW",
  "key9": "2tSS8vBo3tFfrcTrsTVEYLZh9LewwzkNvnfd3MPji54oA4ZrbPGBon155FRS4PwTQ1CVz6VLyS18QUDUfPDWBaGt",
  "key10": "61RZJVM9eSuLbPMoznPvLxAiLji9E6wuHkA7dqRMbPhtwySDdf47deyAEMyRQie8UhPTv12xAWgmSxAHfFo3shVK",
  "key11": "2qPzC6n6mHhRVBBTRUnHr5c4CbvQRzR1PiSheF8RbsoAXPU4iaZsTN3xv8tECHS7gxQfLJS1XV7mwYoThMbFfNd5",
  "key12": "3JCfvNvqBTj2kUFmqPbjQocNd8HmV2ezku5454vo2PQTxjtUyWep4Mj3aii9P9Wha3to4bSQyuZoa7adUKYMd6mH",
  "key13": "4ceXEEVoNbF3UBqozwGFfTZBhU8gPur8YWviiVtRTismoJCNRmggyRFFGuuDvh2Ko2spq7BpmqEY4P35h1jDHRYF",
  "key14": "3QpiugGPX9QGRcCwXpfczhPftvL1Tiy1sYXrgm1e8go8A31h7P5FKj2sboUPY274ZVLbNmCpCaXiEngmScZ4C5hf",
  "key15": "4XYG3m3FXVsxMjCKnZyJDBxsjBBhbRhtwzkRknDzueLMGETSEFqk9tDXEoaeyjGLE5mySZN9tCL8LDEY6C1s3ZuM",
  "key16": "3rSCYtQeRUYjNfbZ7cd5Xqas5mXQrJ2KvNBbUw1w8wMP5DfL8QDGgsHuJmqwAogSQ1VfL1WoGyyafWnUZQq3DYAX",
  "key17": "62SQ8XzYt9Jqu9QjS7KT69ifnzaKZUothGs9NBq6GSk7LXPm7vCGjVMcNfwZB7v3jqf7PkkfnFyh3cWBAHDpYy7y",
  "key18": "31SzRto5xTE8hPm4BAK3qVWmpWeQrVwdxnTanqR1JC5YCzhRdigxffap3g1j68F6q7quhbZdxQdsf3UgtJE345xB",
  "key19": "A4NHz32JpwiKH2y1KKdxcKSnmyuD8MyYkPw2nSSy1Me88vuvutSTcmj1gGNeH18VeAKkrNRxYhJZDGwgsULxbGy",
  "key20": "49hjFJuDhswZTDuoassNN6aTtoKUmNdno7ecFzqqvhq6r7HoiWav44d2z8UbPWGh2AhtCzUjkdHPQE8d74fZte1C",
  "key21": "2SYLVX9tAs39ZGpU4GSb59jMztpjQVxagyStUiMZfmALM2phNjwuUnhBCSjkxSem6ErZ491dN7YQN2LHNYGtzCRH",
  "key22": "43mCopn3acHLtxcH7oNv4Vz9CbYuzFVqc4PU3zaWpdvbLZNv3RJtPxhKoyCCgF6hnJ7i5ZE2S54dfT1wq92evPuz",
  "key23": "2krLC5yU8mxfvcXh969eDuGMTpHbCpmgEY5aKBiFad5CCg4q8FF5m5ESP7tXwpM9VHNd6w76o4D553Wm6euaXUaq",
  "key24": "562B3wbd9RaRJVgJ1dQUTiA5WRrwVz4J3KoPbQnnNsEdqgEjkxoShpCRtUXRcHnU2xuFC3WPBVR9hp8iDfvbnJGu",
  "key25": "2PYvJNjPFpunq97eAs45zS4xv9v5MwEah8wrCpeQsXyyiSutYR61C34D1QuMeUjMTQNXFA3YNYM76R9o31o7eASY",
  "key26": "2JJVjYsdLdmNJaDBFvA8bv2vtAoCn5en8SEHh6eGxL2s13ghD8j38oZx18NYf9nMPyS3qWr46HMu8KoDgUarytPF",
  "key27": "puzNe2ut2MBJgmEVJddAirXtmmDLvBLzu1rfGy72pG1hJUMjTUjEdmetotbtQmPCMhM7GuEbBc68VDm62fBrmqZ",
  "key28": "2ooSh37LACTXuBfafi2fyfznCuH534pQCA5AY9th763MKFpUByictmJfaiBCkxS5MBwMwjuyuujGf3SGCpXH5rnx",
  "key29": "5PaJmESrbrLa2Q5qaNxkeY35mCquDhCocwyc75rZi727Efzrn4GYUvqvAvamR97YmCbSTqUkDbWNUcY4pSEsT2MW",
  "key30": "4Q76LR4YotC5gkuRz3EUFC47ECJn5hLStW2JSWM16VQAWDcRbA3Q8FuZNMZcYfcpdeYqq5iJDWs3q6ehgRcgvtJ2",
  "key31": "4yqNWBzod2uCN7o85Fksc2cFY1rcJdrz6wcXi187R4krZ6Wx3rUvs1Kkfs2FY5R7EyLcxT1FWxesCs6HU8eNxxDG",
  "key32": "5DSZ19fu3PEd26gGh8rSeBCCS2xoekC3f6hyVFMNZVXWBdhqTsVnezvYFyvhU1a6nt9jmDDNoPm43NC3FkDQaJof",
  "key33": "32qpHLuSf7sAy8WtFPFmtq73UxXxX2TAAm9JixamGehHoLfDKta6JN7i4EwKNX2KyNVWTJf5pVBZkAy8kNMYkZT6",
  "key34": "S3AkCaLrpMVCJu67WNGLtpPeij3AP7inHbeejvjfcPkyen4s55vv5FDsKc5d5xNiftRYLwgW1xnADRW5D24rgsU",
  "key35": "3sSwfZBFSaTQCXFwu7hTgQL2YRuGr8UGPLeiKzn5Ltt4s9HuDN2fk68gHykkBHSa8SoAv6j6Ud8YPE3y1sSHQiAG",
  "key36": "Et1FHjMJ4CbHSAWDXs8LB5W66g2MsFQxXmpgn9jcqgSvTFxQPqWDddinUGWLQn7aaNGDLvFYN9QCpyAyx7yC7fa",
  "key37": "5EtvESbouMQr5kja9buXJ4ZkbErgCVLqJkJmaa7r3CsFXDvw2NwkoimsZhiwBhFodyWwz3vDKHeDnWnCWs4xQ6Mx",
  "key38": "jUkwL96qZgHdJTMtrMXt5iyS5XedqhANKXHhfbWwSa3A15GeE25We9oPQftJQLL24wTRebMvxEpEZfAYSd9W9gm",
  "key39": "2hHxNTi6PnzhuTfj8M4tMCBM6ayps4y2vv8ion4QkSvBp4dZApQRWSMj7zvCeA6QvqvZcrCRukF61Fb2VVrQX4HZ",
  "key40": "3uUG7kH6z6HH1x12X4EwiywYwgrmYcUjKz4c7Z1TagTd1zswBnboZwwg7LMsuFg5r3oABiby8tseRLmezMLKobJo",
  "key41": "3ruJiBPC8LpqF5YG3uZyvuoXGRz1jqhGec78xgstfTL8CPgQJRWtGiNtotvCSj5tCLMt2m7gFj6SYEWrHcDE8n42",
  "key42": "2HLxj9mKh5xurtwS7GypKLdoiQwYi2ymP59WJUTDashuhDug38kAEgG2pvdDZPEP2LoStoM8aiDMk1rfmCVLfy12",
  "key43": "pogC38J1nRoHvRGiAzG1WQ5fchZv1tjypnmyvfNkpcQUFkkebkcGBdsx4AMNXbMPLc2ctKXyMfAzEMnJt7Wp9nt"
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
