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
    "3wbCKgZHPLZtrsdcFzui8qiKiGGDFT51hNEcrsAsMX4afw4mfS34txPBF3gjtxSwGjnuHLXyT9zK5eVXVpccf21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbayNLD8QMai8zDMZNDctwa5WB6W9isyVMbfCAQvJ5aJLqsn85nYppMcvRs2VngxrbgBC9V3qfZ6Ey7fmgDbiMo",
  "key1": "2KqHLEMUxxXrNXzgA2Cgtss4nFmtTBjtgYk7Nned5FD16YFd8jFiapB1o7ovCsD4d66vejDVmpV4iEtVsK7HWZLi",
  "key2": "2A2WroHAwXQ6R17LsUXPUpRZgdhpqS9XgZcRMjxjfPxRfxrfjL5Mt2NYtdHpDWM6DECVrd9nZ5rhDJVpj2V6FzqR",
  "key3": "2pvdGpF5Lh2whUSHyr9H6EN2mWFmooJCMqLtA7eYQc4R7W5a3Rk9V5gqfVq721GiPxYmxMZ8WXiYF85Fo6yznjS5",
  "key4": "4aLFYTFFGAh51N1hUWRm2fwtWfUiRGyvaDzDiGQQk34VWGrUSeEFrL5c3wshAiYU49Kv5HvAwy9Mmao3tQPVT2TW",
  "key5": "3DyzVybNPdVaRP8eZPE48fhUpLo5wijujEUTrqFSV7h8vuD6z3younkEiNbXYg2zDVkMouETxK8usCW3RVN5QnSF",
  "key6": "sp5StxS6KdvExQwfF69Gq2jALkc5Pb5HY33d7u71QYdEPrXcun6VzDPeYfibFHrNhy7hmDBSo8y9E7TQ7uMpBto",
  "key7": "4H8iw1Bn2GABc5XDnF1uZbpnymfQzXcGHbuMoLojurCCRT2ukBVGVC7HJ6Eu8JCstHBBF7suz6MT8jvntKudmjYN",
  "key8": "39HhvnCiopfBYFsK9qTVT2dkY1tDptyavCzRkU5TVvtVRqaoSRzrwfK9GVFwaHmjU9qn12fzumcJBKYfGpZBAumW",
  "key9": "5RGgoKcsaZ4j7GSLBreZc55hb2ZicjCCbJscKE253yJbvmpcNbW71fJRTYAQebkKQFEqDA3Ds5rnmc95f1WCmiqh",
  "key10": "33v7XyrhyVEfqaTPkJpS3ujHie4H6ZLJJspZjKL26Rz6ZKo7CFQauWovmvo6W26DMrMAFTschZxL4y56tvjan7S4",
  "key11": "4f5LfLg63L78nf9fP4yY7nshQkKYMrbT2FkJhiAFhToR9zCB5Ey3KfguURypqC7exGCWaSGAnJLQCHtAgZeWtaYS",
  "key12": "4Y3pjXb3KFM95CzsbWfpg34dnRGQLiqqywT6pN3bjrWZgSA3TvcZzEEtAjbEKZhMUq79GrSNNmWUJmKVA2iVYS4L",
  "key13": "EGkaSud647VZ8Cxqa4efz6vZKpucTmzML3u9fpr5Ld4H8TjmTrUBBbvZvodx3KDjcCRzZWbWyDagVt2Cndtvrvn",
  "key14": "3AJr7V3uQrXJ1LDdK43DoQcG54UBwEPK3XRoYHzHo6AqKkntYejfZRvFyf1ybMfPViYJMwSwLR8spF5NaU8BVL9s",
  "key15": "B7Hr7x8f8Jqi8pAzsnKFXFPrShQav34NohTpJHJcF4rFZEQLr9skHD5JMUxN5nq9kkTL8rfetX3C2GjMbg52yPj",
  "key16": "4ni7JRJW41KbziXJc7tJ5seeRrdHYj8cFXdispzQJVUT8etsxe9JuemJShyKf14apxuLS3dMAeDDMXMVkkqUYZTB",
  "key17": "KJnE7iBmYfRxfy8XGQF4c4XTQdPHT5mYx65DKiQqirJ81GiwFU8fpq5NNHGE2QcRjsykxDgZjbe34NUTMSMPzAX",
  "key18": "ACT1tw8D3ThpJoHfaj7pqF1FX5jQtFYxq9sXJqpqBp98tVrtVF9hNNTmrBJpVA9yi1zgPcoLab1PedLHa5pitBb",
  "key19": "2fGWjBq6QUTEE36KZNcS8NsKHwCrZtJjCUsYtdCoad2mZdEPVN9sm958XRZ3ZvoUacJ1iVHR6s9WBwFzLrQJ2TrW",
  "key20": "2RSBeZA2qws1y11pHfzgrGUmuCj2YfEisxEjFNPKycajTuA3TWpqhu7wu2n7HohZvizTjTJYsLp1sH3QRDpLLToj",
  "key21": "43gsNoYRUNuteRfKkKpGGaobHFc6RcAxDUttfLhknq2PcZUCpUCuCVJ5ZSDpJcWDnbpNdJediMSB18qssqBoD5gQ",
  "key22": "SgAHTPb4VvT9iSEyZV3kTF9DMwZgfiu2EvdMj5Teirk86uyr8npWxDA48EFSRpoog7ZvnM9CkoZvkftnB6DrC7j",
  "key23": "5zNnAmea99G518xzZ1RhNzD9K3kd4HB3ULr7cmGgtRkysFx9RQgavm6SjSRSyqNR9iSNU1erTzBMbFV2sQdBVPMR",
  "key24": "44RT4ne8BuRVu1qC2bWJZxSBiQw12UjJ4Nfg9sfVPqecN714NQ5orQ79ey2XQU26fTqR2m38XoRRAVP1XGxYqtJb",
  "key25": "3DR8LxL8cwa4RcNjrCtybZRiLHZnBHJ9kEe6DwaKYvQtiGk6DEFxENNAx7V71CPZE3zU49typdh7P43gKwREtGHL",
  "key26": "66WpP88DZnJajGx8C4WAJ9LZaJ1GXm7VYAvH1HD7bKB6FZhYn21Rk7BxNn81TLV44SL3125FjDN3vyy4mkuQNW74",
  "key27": "XEH4nw4Er2pWaDagvnePFwYhHeXLXsxynVUfXdnSFLnQ4jJ82MLxEGVgpBuptj9aRYBmv6TgHRL3wEjxSxLFcqv",
  "key28": "56HfyW8Z4GQymHQDTeGDKGUeUQ5PxbpEcNFi5xvzQBUBardHHUtj8CBXBchxvufP1LWxxokQVP8yNJg2Zb1jf2x1",
  "key29": "4Yq1bA9ofWb2xJnFxcbD6fD2CZU13bxdKqaJgKRBdCen75es13VAMbitaSMJNZjMBLBkBS62XA2eJXBDRaq3TpK5",
  "key30": "X2G5YavLGT6AehuZUDJy5x81DLsm1AfmMEBhsKFTvbzG2jYNAtBmCGDpmD9xTxsgCBNSTfqZ7kppTmsArqZHR4e",
  "key31": "26BK4Yn4xLq3r1atWuqxKmpLSWN7s1oJJL4BJuyCPpXsFyHYL33srWSAjtQfAqMPaZaYggkPdjguXNgCgyPUhYnE",
  "key32": "fBPN2YEracj7Y4PpzWEgwEEZJED7sji96CEVjfj84wbtzrZtomXeGALQtn8N1DDPU1XFieWCG6nX6MQaV7MC1nU",
  "key33": "2TuV2YLHo9AkmXUbFSFXDzeYZqSKEojR9ki75TQCBkFHhusDgoWKNDbiEMKSF88Cwo7fLwKyFiLcEdbSMU9JjUdm",
  "key34": "4mFTZQHqW8PbDMxMztG7cm3SUaJM7mhQGm1QpQKcir3MnGmPwGp8txizKYMSwEz6eM99sgihJLmURq3R2PPW3ocy",
  "key35": "23QFqFmhbqpD2CDJAwoFbZpfyJxXQD51ZoXtqhiAD25hSjSqsNhg3SFx1RHFzriXAPJNCstixu2UCKGWxbczCAGn",
  "key36": "3p3LJZ645wiVgwFQUxoZ2LMiYyCnTQ2gSgqiSfJHa4gdk7UhsisiURccpbhDGpBp354qjG8pF6uqDT37F3zzykq5",
  "key37": "59pip12V3D23jVCdA7BptcJ8Ftc4DX2JGbPpZfQv1atRf2RxUJcUfoZMN9evVPS5u5MFsitJLsB6mpc1UZB1w3yu",
  "key38": "5MPvLGTAUL66E4UXmaWmJG7iSZm9h6K7QVtJWx7wpTCG2UF6D63wWTyvxbiaZW1SyCf5DrZkA3Pwqa4CDUbWKb27"
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
