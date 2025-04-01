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
    "3CiK1oJMLFJagcDSMP1jFzsWYcYNL1JL4tjiyMjDxMoMGxSEa2Fc1LtJEy346TqDMFsQGB1uMUqb6hrbcK14q3xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gBrWvWrdSQHVn4UFbaKziLc5ThA6gG2jtBfD7Cgux9YRTpeiqzCuzcvdw5WL8U1eQyv2pevS5CdWwghTiD3Pber",
  "key1": "56q2T5UruwPw5YL6rKzy2mFpKqSFLtwUyTpptAnMNSyNEeprBdvCXPxTLMKXctUfuc5i8KNr1uEWtC4cxjBxcSC4",
  "key2": "2GTVt6DMjmukn96xt9nfX25PviAbTesdHmLqUKEC1auFRV74v2j61fWKJJesHNY5Wh6ZnxomvhWVTftwVVHmDAW8",
  "key3": "4UWRjuj9gzX32y9yBRA2hJP99uzcNufqWJx3QnWuMyhro6KBKKdLH2EAnGZfbvTTXQtgCXaQgZTHm4kbytRURsmF",
  "key4": "3Hq6H5BJY2BBa86QvNnqSQQ622yKzcRASk4K65pUKUQdYSN57JkYrdE1tkES5KoGdgCuaDLJBeaPUqkKMyYo5Yue",
  "key5": "zWjwLVbFt3FffdWuj4fpfGjnQKXUwVju54N92UFTJRgcG7ooSMZWcQN4576KC6UyuBbbn7TmxnPGwLoZocK7Lxo",
  "key6": "h4vioyoCEkRDFjdB9r2gusSQtpBhhrLn58sMrKonk4XJDNrTgKhBSU5RVBxe5s8RQ75ugLKquF28zDsHaa3JUWZ",
  "key7": "5Kjc3rqc7VqcoU9xsvCwBEYMUPWLAn4TLudj8v8Yvng6fYBAW757kBkLEahrZDtx87BVnEr1vSGZdakpFTDXjkXh",
  "key8": "4yEWUtRyVNgPg346XzpiTiqzgHaL8Sc784wxv77vEUqXxcp56sURhaaamJgDNnMAWt379a6SZhTKTEFoVSRweyrg",
  "key9": "46GT6cGsp1RNNRXkYXKD26Naynz8a2df8PKY5YG854dLBVPb4tEntEPMqDQScMjFbGSFDySzZkoR6mM5ApXvrGPP",
  "key10": "5foz7EgizFf9d9WUFTftjDwbiJCNMi7pkFH6eMYMrF2rghNExyjwATum8NAVRMuygn12BUGNFajyvdr9TbGc65EN",
  "key11": "3VZzZSHpzb27RXTrnECB7mKQK4rR3iFpBCQE8CsEDTqcXkz1Xv1QD12JV4gSBcCMQxWJdqHKi32nftfCHG4ysX1H",
  "key12": "FRzN6fen6kyX3XbiGgQ6iU2uGWEdUDawDNLrSsthXJFzMtHXcLuyn3ZdyEWxpwNW9gMruvUSfpnhEBgx9sGyFnb",
  "key13": "mAyUtX8rsrbVPyhwk3HyNRUP81NVYfGqWNLeKx9iMJH6gYfxz9XMhCXJWAY9HLWe5PqeyJYctofcdLjor96idaL",
  "key14": "GrtxDGejFiYTMKZgUVDQtLCW3SeAtWciXvhdceXUFLvNpzHYaTWYRHPsQ4jnRXLVJjP1FQ9BGSj3BZ5yaD5WM6p",
  "key15": "5xRpteXcqpGD9dZMwUyqkNMhLqFsYAetqBueEFsMDiqUkdsZ9diE8mbGMkdt57mYjFPbW3Q4Dw5dfJxoDBizFEhc",
  "key16": "39A2E4xE9LAasMxFwX87MSK2faagG5NXBMyzFdRR51v8UqC6uLZYbsZm2ZvZHa2d3vScJnxb8mcjBGtGyqJfqMYc",
  "key17": "3YSXtGFnwv9MNz66uGpkh4ZhBbj4bjm1bDc7cnViX8qRKXEfRuK5WSHQDj1giXpcVoscDkSuyuPA4vqdFdi23sbx",
  "key18": "3Ck4ptoiSw5GGrpRKiBB8zUntDc9kVyWiaociCb6nDVeKRrD8aL2jZWkYHr6KjWHUhUG1KHZGKCtFX3hpK43EY2k",
  "key19": "2aRLJ18JTLPJiy9AuQE8um2DMTuaZ64VyL4dUsVTH34ThagpsmfjLxt2kNFfN6GSUMx2SRpDhtPvBEZbPeSNjyFL",
  "key20": "2KQisZMB1MR7pp4EbwsPjft55ARwRHESvarBCdUnQ1BPrV9TJeTgJxBGs1ZKiSSUzxMhUutrMUhN4nNai5GgXanu",
  "key21": "4cwddBF11fB6Rx9p8JXi9fnAxhsoGgYr3kXXd2Murk8DLH1pJ34AGkFqUceNySh2RASnZ34WY2KcUdG5D7kiTaC5",
  "key22": "4x1inzEgEyKwniU4genEqsE7y2MoMFHot3XKaQAWRNMcoKRWtQCCCQ6seGrAptHbxFfLxuoW8kaEbdXR57cGY82u",
  "key23": "2dcetwP2mK5wGszWgkcGUHuqFQ55qUgKFYKTwJ6Khcm4jyHdT6EFVrMuMn6JQS3Gww1jC6q2QwaRKnSbR1g67DDc",
  "key24": "3Dr5tSDBeTwqT5QYUcpsL9BbLLgeELUHpKkyC3ukHd6T9z9dJMXwexxgi8AeMtzBVYUR13KELYZNAeLgTeKCsByK",
  "key25": "21yAr4vf8uM48MA3SqQHzNZY89o8DJh1oGH5UBTbyV8TH64mAjREAnf3CCFGisGJNxKeYL1XaG5gFENpPn3WgSao",
  "key26": "5DsePEGLSVsedrDwNfseUbcRt9LxpUUGPLFDqEuzA7CtRyyptUy2pJcoufRG1978ipCXzbrnzJz1oMWBdWiYT46N",
  "key27": "4yEQn8Q2sTfeVX1f9U7B1TJY9sydfPQmemWLJbZ6dSKZvN42jgWVKBhDGgSZvPtDckzYJsUApZheoJfWvdTkTy1K",
  "key28": "3tgpRuVqWNVVK2Mss1m4nEohDyLPdxtxVyjpQAeTcAiH7m2pxmjZCQG8aLH4HMEzj9jdv6uLDmyXVoWCPeGyvgM4",
  "key29": "2P1SPooXDswQ5vQXicUX4RLHr1tXQVsRnMzGcsTZm7fWf4V3NyDtYoJvmRxHQmTiVqHBjL2STzWw6hu2wmVS5DxA",
  "key30": "BtDbE1UdumJYJHMkEnebY9usXS2dZFDNUeACF6FBdiS9yL6uuppAFpYWwK3eMJovLQE4BRupxuNeg1pTBwzT1wk",
  "key31": "2c3LoZ9ok3P2zkz5rKEat5BVmZ8wZrt53eHoShVoHVyxxSz6M73cwMdoTNwoN48YXTgVgQB3znrjV2GzcjzeXgLC",
  "key32": "NtQtShWRVq7URp8BJDWZMawxYtDVUk3x1LnqbQ1kmz1hGfXuRGNuf91Z3NMnaMV9v7ne4jfJu4NCipb8XW4xryK",
  "key33": "CoD72DcKSthfc6R1oJSTjwfLjTmLY1CwwKYe1zxmF8E6xBtGcBJ6fk2H3MQZpiT3z56t9Gm6v6xfuLKeRZdQAdk"
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
