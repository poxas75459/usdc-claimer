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
    "27zQovrS2DKcCZSQ6kygF3exemhX6zFzabusFgpgWLJrVh97TfVt49d5HgM4mxeuYSN3E1bkDyPr4qGrHaoTF1Ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kEx5rd1NuEBbKKEAzUYB2zcSpn6DYckZGioTPjfmcM4CXHzPv7bm7Ny88mqLw9mH589EuqgxHqNwSLDAfT7uVG6",
  "key1": "4s9aP5v6QicifXKNnWNTRPpbvUgYCPqea99bSdt3mYyHXfFacnuNkMtmFyw9dEGhL6PYHCjYcA8orAHmVJg61qgM",
  "key2": "uj61bPjj6NgELSLfkRTCiecJ95ngg3zLXohWGsvte2qf2XGGSAGf8jEDxPf6teBZNab66oCdHpSTsNadGu6pHyZ",
  "key3": "5SeSdCrn1EKDK4XRXz3azSVgCQQF9RRJ6bt6aNNVYAN7p9cMcHMs8zsFdBLHBCdfXRwZSTG9dfQ3AEeEopMazC54",
  "key4": "4gQwEYRAAUNrSvfy8x92kFLobGFSNNjotyUJPEP3fDgR4sdFJHuxSMEGTew5DCjDEMNaWtBkqwfMQKU5qAJonCuZ",
  "key5": "2iEkdxCT8Z9HoYeyj3L4ZDiFxERVrAdSxab7FcSVostuexYfQWwmjY2EtnZj3t9tGbHfVLMtNBJNjbWChdgUdNEo",
  "key6": "3nh1dnvS1quKe5CMu6Ct95zND7JymxXY6Ka7gW6onpthRDTnghyBGPbPVV3Eo5fmnVeHEmnka39Lm11UsfdcsB7s",
  "key7": "2hKLTn56muGSTrVtRLMz6WPNCE7wResGz31HKh4qnUtUtwAvGatxLWKan8JAyeC6JCK2e3DULVCgoX4p2Ds9tpkN",
  "key8": "5mBiQVcHUZ7LNGv9Ai5oy8ptsTQFRixTuSna24eYGdXvgyuDZMHf8LHNujH4Ge8nRYuKjRiwUDDKepJEC8e6jPmP",
  "key9": "5d9M97HkjrLC1dYdHisHzoH4CC4RZ1fL67Bgz6yRr8VxLuZhPgibDcBfg3qha9Cw6p3mM4rFgQfSzgZGvCV4GiiJ",
  "key10": "5fn4ddveMkoRsNgkmuKp9sozp7UGpQsqj443ubDCnAVHpUMoFBV8tpymZ9LFqsp9u8kPudo9BLHKxcB5HjJfQoVB",
  "key11": "4VtD3mXCizRCKVCYjoDXDAGKwPcpAuWNGXteiNT8qQYJq8dbQQ4GKMHBHHHTEoCYP3gLimYVCKyy3hjpmgTwNfdj",
  "key12": "2uj44NbkUZmuLVCNwfz34cLWCdj3pnoRfVQiUcMzrwrQhxsVTB6qVaPrzyVdHBCUBsGUjoU2NzcGFMLRYNPY4UNS",
  "key13": "3mkeFtTaXLmR4BVQLJRjqJBGqMH9rT5xMbCVnARwfFNop4spqhZ9wBJhAmc5Xi5aaCqZMHiGyJvFw5bjWcZ2HuTJ",
  "key14": "5aVego5KPnsS76TcXTMagR4MfTJBF7faTBcTbzkHVZooJ66u2afNp2Fu9qS6KmuZ3vjsJ31niqqXWav4KUsWrmz4",
  "key15": "3bQ8oTMCZNQqpuNY8QF6uH5SEBRhSh9GXhuDa4mCcmYKisXfPUyNF1Bu7Yqcq3qWdierGb8H9hnm5wZ49Q6Tk6m9",
  "key16": "4QqAocC63QfXVEYhuZ1Ra2Zoe56QpWM1f6E8SeZodjfRWz1rV2gW394WXooYhUz9kbgW1DjrJavvWTWWuJ5doawk",
  "key17": "3oNBV15QiM7uFWKCzZJfXXBG5akuePuTqiEJEp1mNb55KBjV4xvBzC1T9b6qYg6eNv9YgoHrrKDWXeFUvdt7kvKV",
  "key18": "4EU4fEThyHBn6kRnHVbKMMYdWdFnDrKtJQqYw9AamUhiYDovDzybyF42haBCV1EJ3nrNt8jJZHiMiViBGDtzjdYv",
  "key19": "2tA8cVvpgomtBXrwxmEG4nNYgZPFweYRF3xy1XZiY43QwQGqUZjfEmW6i6PcVwTUg2xfViebPyEsmQGQGRjvTZPW",
  "key20": "2oymt6KmpFv3bqX1M7HKQsN6MH4xMLzdochfbpVyGToWtwKS6acTYgpdGfom5ywcH9JD4ALMR3ZQ2MSUZqyYigpN",
  "key21": "2ZECuFTcFeUbaW48NExuRqCcKQPjgUjLNWtQYfxKs28kFMWFxjrRAY4skfTbCDHYn9izTUpEJgQv4ZY4w5DuQUvQ",
  "key22": "2FHWoHE9kRfUnhGCHytqkbBWWjYmLoCaF5bdpcT967KVPJufX5LGS9EhuGqFVVZ3R4RpVG9DvacE5vCora8pbJ1Q",
  "key23": "YyEungw6bcj6tb31Tww3tXEDNhRgCq9iFa9cYv6r6wyvFMwbLZDYcRpeZKfjNrQLysLhrErUwabBEBZmtfboFVX",
  "key24": "5TiAqZYrNk8RipRtC82UeZxr9hJwj4UVXLwtcwSVPe8ghDWgJiuvdMS6YUPBQmY3kmmTciQuaexQREjhx6dkiX93",
  "key25": "4x3pga1TbqNuNgMmaoMx3hg9p183QsHFNpMYDD3hbswR3AfUD4CbRwLHyVhEPqD4v82s8GNnjGubgxGguXfoXsX8",
  "key26": "2nxS8HLVtA4L5GngFDX2kbA4YDYPgZg8yCeZW4nbi7wjir7vJcUEpF4f5krupCquuk4ydsuT3LV4tWeDzNmXizWx",
  "key27": "4yroWAW57NqhkRURPGXuhAh5UFmBXc1cMyeUFK4EaTSLEx2PS7BYUFtCzF5qg58RNBardHjudPq8a77ib1ZJSK9Y",
  "key28": "64FVXvSfeA5vDMY6KnDrxcU1gPsntbvAK2XYzR5mSaW8sYaFCSELkQwzzHxCKp32G5w6DxXmbX1udqndYZha8sdZ",
  "key29": "5EDJ5x9KmJGo1VyYsuQz1bekrtEXcJWGu3rKsMkbKdYC7u6rmqQ81xCn1rFS6pV8ziWrtSoLU33ocndGENTDjoKW",
  "key30": "Cy9AvBpRkbeBh6CGKo5kJ7M7s1JwP8Gg8QwyXgmnVAkWdUaDM6EfixdQJWhFoX8wTNs7mujGjQvpHLrpt5ZR6Ti",
  "key31": "UbjinG14JBzXB3NGCWdqVbx3DCUhWegeS6K5zWcoPfDFduPJXWTff991Md8wPAVfopwN6mrQt1XNdjvGXsMsPPv",
  "key32": "27cqvWGp75LFCBXqnv8JYMhQCYuTJAYh9zUjp9CxUCFyVYr26t4kp5HDbt2nUD7L3Zmxh8BBohgJr3cgTtUyCGqR",
  "key33": "2Zg61VKfit6oHHoALeCAVQePSj4jkjo4W55PKM1oS8s7TxPSBPmZf6JkAzckqxAJwBa2YGy4FwXmz2pRGBdVGsqw",
  "key34": "3dkXu5K61HnnuSCPk5oXhmtqRxmUU3o4dnb5cPtEAkhMj7JnKihcBv4WCw6PkSaNzY45FcDZPaFJGHUsR5VGEiF8",
  "key35": "46g6tjnTwF5Jy9ydwTL4EYxNYy8tuAUvYbMWkc5pALKYA2gZnEF7CMw65Zzfk4QgeTVd5gRaBBYgGfwhW6HFuC8N",
  "key36": "d7GU1Y3Eq9byWU8Navex2m5HUaC3Nqp9t9XLx4Upi1dHCXiYohWc72M6aKT1p5pNKJvTr4BMGNspMAcPLwhScdL",
  "key37": "3XNjR546P5M5jBJCgYvmRBWabFCAhNxCxSdRwuEEbe49iFWbUkuhSFoWAdX3US66kAHNeDbinFuHbeWbHgu7cwnZ",
  "key38": "2gJSv7UqbP2akqCDxHRtxe8eJiyd7asChKLjJ9v7SVV3qeXXE8yQfzayAmw3HwJFB8JV8kYkRKyPSru2MNJQRjpc",
  "key39": "5FMkvNFqtkYKWYgC6GxrKaoNsnbT2UYcKt2WGrphP5BLGQB8i2joX6djQjqqnBda2wJdZEv5tNbgU9z4xxurSDN3",
  "key40": "pWr7dtFMd3gsqGJYChH7TA3VDfQXYeqb8SQBdWFHHgxEHJCwaLNjZ9TFgKhkd6iStqeQ2kcxppyh5zCS1duvgDw",
  "key41": "4YLXhCDAuGVy9XPKvu79QEsGDGsUZN7BK5GwGjdPRrNGmFHNhCQUd1zxFaZuPtWzaBNQtcXQHwYetqeUKEiED4nu",
  "key42": "4vcVX1xrQ3abJ8YUGgdjEbRiEueo7BpFoJXhaTN7Bcse543NPi6ZUqVGWdA1pFtwgf5pqTPxuvXRsfxUzaqFmzuh",
  "key43": "3xC3tWd8searA98rtATUu6HYdz2hQVnwtSFduTJpqz5kpBf9A7mR1EFEienpo97bDGoJSGKdqMNH8J6KPJDAX5uG",
  "key44": "2xenrYB4Ht3zJPueS73zASftzFTKQ1NkmpGEpoRUrkTYGeUMei6CFCgXFEJtEPZyLqFx9rLyEVrEsRfvTVRtNwZr"
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
