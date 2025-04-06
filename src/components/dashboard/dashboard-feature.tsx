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
    "51P1z2t1z7BLev8ZKNfTPZcYixYpU6dwr9PmuNGvJX8ZBfo1swoCiobyv2WuB5cpT2HpVw7PVQcVyHZTgqf5faCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izZiKQMmpmWorRktfkadjTeGpNvgGhF8hxjmmAgtVRDpv5HF2qzPW7dpxXoSoPVNJZWx2rjk74qxeriMnZDEWKA",
  "key1": "21jyiPAjUz9hJvXzu391iWELaifNbu5Xg4k2dR384L6Z8exBUoxRmHczaB5CMKhe85rQb6Phscespqypt8oBTVJB",
  "key2": "3QjuJi5JL58RaTcZP1oPE2jK1J6Zw9c2VxZG1CeEx3UAmqY48xdki5JfUG1ZoccYf9Je6FqvQEsAnihD5789j9VC",
  "key3": "bPQofQRLw6zyxbCHjuWjFNq5VhYtb4RgZnR96N1HCsd87PHLS3Y3AjvXTcXpiXfBbW8Mrsr1GFgz9NszbApesZG",
  "key4": "3ZCSai6vYVxxbfEYybVg5gPepTev7ChtVvpwrcGYij6bqDCyxNGeAHWFgSY3qYzQJmhbAoV8RM7jqijPw7uXmrtw",
  "key5": "4nbwdhoCxHy9jZBSHm2S1hhnKLbhEinwvL96TaeKLZVcvkXSJRsX5WMyDwxb9ewcZ2WHPpWkeYC9K4wnyHtGkmMt",
  "key6": "FzJuyzgC4Gdy19PerRkoGh3wvKtWKipJv1S54BoJmUTBp3rotjzQDEb6KPDYvR2BRgDXChW3RCSjqeBVukxbCXc",
  "key7": "3FSGS1CDAigWAUF6jRt1HHJYzEEAQXUGJCDoJ6svxwqfMYbX26t5xP5Lacf1QPBQFxJB9645SnVwi4joMawYf6Ra",
  "key8": "2PCF793VNUi4dGFDaz1q2dgXF7xqtrQXxeYFMn5si648zjFFubCjSip8r3JfQGAM7wsUk64PnGztMHXgw32GCZek",
  "key9": "55qpChZ1p3Uk4wryubWVQbw2sJJnH4J7BSTQs76J5B3iSfRXTNUvoHQr95At2SZtGGoYkYExfVSvHjs5NFAUuaUb",
  "key10": "2DoBMqmdKHTtp4o3kNnD5AaEvicvyJSrDVpiCZKt8ehxDq461x7wuYpMMC4KTCTVmr6FwWeV3jKkC7H2nHwV3DpG",
  "key11": "2YxjmtCa1DinaPkWM1bB8nHkpZaPKg73d7kqrYdsce6H16RREbf4zN4jZgngSKE9GiZKxR8QHqbR4M7H97PHDaQe",
  "key12": "53xK9oxvfwMcB4qX1KSPLCUB9qbQzQhbwhc43c5KAFKsqkJmFFdemRnAKGRbTgi45qkbHGen2vUYVVeGQyEbJ8Fx",
  "key13": "4NTEG2B88ZMNMUgnHD9rwJjrQeGSVUGprj4paTo14pVRdaQ2fC6eaWu8rjptjrYpbRzQGGpJMzQURj9KYC2f9u5j",
  "key14": "z1V1HnPXtKyvX9tAcWJ9ZjDjJwZ9gvhPfuAskSyqU1okFpkHxdac5db3Az5pmFAK63U9MuCZ2u6sJudssntjtd5",
  "key15": "5Tr6CnzsDXSDrWrZx3o4bamLmbHMKE6VVmRKx3ret9QAHLwvnjqVbnkJ5xmYL3uvrcsCDJ3foHMYDEav9MRBpHru",
  "key16": "3rAeuAwq9FWBNXS854EX3usg2uTyaHnVhVtBD9zxSgK5gSGoNLG6p2dWBomhe6z7eNqrh27rLyoKRaqMofNkj9pr",
  "key17": "FnRDiJiBCkXBAw43vb45krzoxtzjeZvcX58nxEjRsiMGpXWt9bn9vXZHpuX4rWJy8QAee9pisHuTyCvoaYjvoEt",
  "key18": "2AMndNruyTaBREHudRffgVQ76Hv3ELJoQgt2GXico8v6zmHbk5s6JwEf1s5xnFxGuxjxS2GTafQ2TjS3drU6P6nA",
  "key19": "BV8ZnnLS78aAcUWxQfYVssKNxxBawxSMwfNQ2kq2oSZSnzZwmjUDGNfS5JQ1fCuYa1DXBdsiqbMTTps9fiMdmXa",
  "key20": "3YAkc5ZkeF4yTPD2zxaUXeA6QusXqRQHEUErQn1igLcXtn1FMhT88ZDatwE8Wp87RrjRKXbCnM4SgYBZJdcn6ydN",
  "key21": "5ew9aipaXWcWihTYeuPtK3XRYiomDgLLtMVN3UqiPx33KzTpdiVJfwAXHNgA468ixCbqMXLMQk3jpVVXJApw55NT",
  "key22": "5YRt22HbEBaobHrH2tBKuPfYK9aJommF5qrFqVeJTEFLrBjquHjap1tnEWBVfA8PB38tuudrZpd9563pDbt7rt4Q",
  "key23": "62pbrPQTiiCoPmpErBCBCwRaBFaUUSW8jtDigSo7HVAYwiUUAdEtBdh2VPQQsaGpU81jEvyEc1kdEZJpcDu89fCF",
  "key24": "28gyKTjjm9CpBg47wpSeTwEAyU8eRjx63P9gSzDvSv8yz58UiL6od7jkdTjvin9Mfq7PjnW1zkYe6dXVecrszjMQ",
  "key25": "4AeA4DM5pvxwf2EkkqjPH6enQmMXGswneTtNAxwycubymcu7aoKKrEtnyGC49TwpAfV3kCfiR1ryBzCk6N9iw7Hm",
  "key26": "R1F7JB7cZecZ7uzCmtingnYPcgfXab8Nh84yrfjkxxhYr5Un3Jy4VsEcHgQrQzTaPQjJWfDoreaw9ToVgSZ4GPC",
  "key27": "3qVKYwRexozunUrpJ49D4XG3ccnMMyxzNiZ92JsJB6EXvakzhmJ3wg55vPAxv3QZYjesozz2yq5pyuHdyMk2pzJM",
  "key28": "3eqZAH7ekHUG85Hv2v99fuJWPuHpoArymDXmvQ3WGmoFEeXqqsLPEgVfMabGUWLUZbKFeRR2EiLjYcXjTsXApL9B",
  "key29": "6UKn86z7mhLPxJRyo9bVJmQaF6prWYqakEdAb4FtCB1iUG3286KiiAXny1n5MZ3zBoRPVQA1uuSpQYR7rCB9A12",
  "key30": "4ay7ZdtkzgahP2tvgq8ssCaLfvq8VbfPZLruCD7K75Ez77hqzQ3Rc8Bt9Z3Dphp1dsfTAy3Y5xDaHx7MZwisRKjy",
  "key31": "3QCf5gvL3ZVQLHKvsyC5vHaiefuVyRYWSgQCjGcHhS5G2zAH9FcXUFSW1Lmg4rp94KAUqrqLbh3nSg22zFXgwyFJ",
  "key32": "3b7cexxLi2YBGcRCjmDJZSEnMg1ZcHhH2SmEFgdd1uYdKGteyuWrQNdxsac5WduSnxZof2CPCJZ9D2nvt3tbXap7",
  "key33": "4mU5sBxVFMUWsf3hVwVQHvZzfp4KvKz5zvw5ciNaAaJiqRhR6xaWCYX12gnmQgnZykT67kZLGTL8HvjrQSvrJrnR",
  "key34": "3oEHvv8FPmWjQmnwhzyVgGnFTgJUjKagHybTLewsbE1P93vgkuv8ztDYx6sZHqbPCkTDyHi2GZEh4rayK3B32LyW",
  "key35": "nEnegtSkj8KvT41FTUi7XjB2PLhGXVfjSbj5ydMFDG4vHk9YSQfiRQfB5aa2Pa7uMWnWHscVvSq3vWBV6d3WfBx",
  "key36": "2XJ4cCCgoTAfBuuoGHGehQcsCmC4iyvgcxGdYwApxToHeUsCGQnAb6UvbwtmpJA3FNTRo38jQjjL31yRjA73wDzm",
  "key37": "2XeX1kC4kwz3w5UzCz6tMC3eEEX8CFLvg35FdjfAMybvMsV9VSrgTdqZP4P7Fand6L4mFoBVy9B5S52toYs38CwU",
  "key38": "5CNi5rtt8KRBRdmF11oc5Dh6PGxJqP8nwRmg7yaWxXDCwouRgT6xV8RErhD1tYyc6JCj8zWW2vfiBFY33PkHyNj8",
  "key39": "67WxnK5DiJMHQozcKUJ1h4XUSEMXbpbSdtGp1ny6BJwWkUsb6uwMc1jN9C2o4cA8RmAB1ZdXQpz2tLR8MZ8dUwGM",
  "key40": "2LFZWENmunaXLagk58WkgYWnBLV6MDGYnJWDE5hBwa5CJihSudWeUVZEsueW6o3gZcue5yyWnbRBz2NVwc4yJ5d1",
  "key41": "3a2uLxYEzZGWmmDfhDVJVXNKc8Z453srd5KrctneHd7ehw9QsTnmCeCWruX5VysCz4LGyPwAjFh1VmLa89vTZ1aX",
  "key42": "2PZSZDjcRZBzBB3RYg4U9iqYrnTJynBLbyw9QjKXgTieYSxt7kXXwVfaiZSJiwFgHPp412N8Mb5WHCLbuXmQufFV",
  "key43": "5qd2CmLTG5GGQKHX6iwTa7UUWHmtAUxCwWCyrJc4mESUF3FiLJW7cQpn8iDv3PFTtC5Tjvv6kqmNrNcR5farqvRf",
  "key44": "4xJW392VWGeUGMv5KJPT2df65rGmH6r8LLrafquRjoiidEtJXtsitaPLMvdLuXJBe2RtkqeKEmRKbCztPfguSrYA",
  "key45": "3iexSc5gWxLeiTHQbo6NbsrkG7Z6zsDHtf2UQzKRCHsUGymg1fvdN7Qh4TjPUjjwp6rCE1hfVdBRH7117TJHrMN5",
  "key46": "4fxUp2DABhkoVcG9RdF8arbhnuhVLYLWopPgZydqHabmZ47cRPfB1PrvyN7eXmqGwXAC3xhgtnANFmMPmKa8njY9",
  "key47": "5C8c1jH1X4kPdXt94FLDUm8SSLQu1sfjYG5GCM24S91eic22HoMsfaFRbqbmfkK3ocVkLxT3uEgkJZDCRvY7jrGN",
  "key48": "22MvAAPZDpXsXb2V3FKdDF3ttdbpcEmCVjSwn8fzhwimTWgnPBVchrkA64dDq5YsC2NvNWg7ZZihFF81c6aJHqY8",
  "key49": "3q5BwY3auFqDX6pUWRUFULLLYwrcqiGDZjtaDYz5UCt2q4v8jarz7qySVCburZ5eXhoHrJcRa1w8xwYVnJEYGsEs"
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
