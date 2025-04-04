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
    "BFc4VqxRcv5C9TptqPFBjxQ4YGemfUT3oH2JUMXaLXXAT7j2c9XZpWnAKn8ZBhaW74PEb7esoNfDnNoLBL6D7w5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXwi2UKRifkqgH21uqH6c67TppubJfj1ka2uQzEfn6DVgqPLzu5mgxpyodmkiB7A6KATR2vLW4MRzQEJZ1DYsm5",
  "key1": "1vsRKBc8C7a8VGxGG6RpypzgLmAbxEvdcgoUsd4QYE7ch9Tcp7KJcXv5VX9bJEWrdcV9nfUyzQNFbKSSjxtB1ph",
  "key2": "81YEHjJRHnVbGkcsjsrrTFVR17eGsKfgoxPM8385PnHvE5Zj4HcHzJRkcPVVrMWjy9SNTwJMcGGN5MUdgZbr4EU",
  "key3": "4dXZjeQabXvCfZqZ63QbCER5Ag6vkYV7dQQtmGbs3dE8AaQSVEwoykEJmaA6DzwAWNfARCJafKhAmrh9vtQGM6H4",
  "key4": "YPGpydbp6A4hwXxWCRrfNTPhot3R9caVHF2ptQkWDnfNp6hZX3jviDjn9MAGzPqRDxvhypQjfC5TCcrP7yDzzRA",
  "key5": "zQiBWupTXkgL5XDFL3q97T3DrTUoSxte4NYcVc3RnS3YAx5AVBBB1kJ1zbgVGJuCThYJirWkq6JbWp71s7NLXkd",
  "key6": "2vtwnuo5nnhCZWnKbKhZVyZNUR3Ryn7SXJpV55PrfNTWUGFNCEwjHnwf35kFC9mWm5WYzASa1vS7XfuV6X1ekGB2",
  "key7": "YSdAKHs9ny7FbSPGGm7VQEmwYaEhrfvYPKJWbXA5RBjyG2LCuyu4sqMHSh3yToTh2Ji4Gn3pLZJd2em4F1AsuTu",
  "key8": "4v15rDevUzQsZgr7qktazfjb32ZY1eVbb99LSRs853u3SCZHwMwkj3J9pQEBUBF5DppwuGJkRX3y35SqNR3XcGk9",
  "key9": "4veZGGKTUA22UweZzgqjCfTkzkegZBPFJqyVF1xFcATQ4mF7ieqb9tfgqR21TKXMRGF6ZvK9FRaJsJwBucisgiji",
  "key10": "45DdtEY2heqkaVhCNsrGs8Lztphk83wmuXAKq7NoPQge4mZYWjB6rsyJzdiAKKRbUdH8UXDrPCcqmLQS7WsHS4QZ",
  "key11": "5Pvp8Zsyq5FYk5Fa4Q5Jkdmt4trfTKJ2Q4vfPViXispHfthXgWysqfZ6tVPxYphPDdJwz7kcUQCatymwd8vVWV8h",
  "key12": "j1wxQgoJGWnkutjx5ZpQZfSHkBhXkE5xX69Jhy9SwuS8L1WgrPv46zEFYiMp9H8kAmwo83MuGSCZx77NUWkuGZe",
  "key13": "5dTpG5Zrpuik7crwgBeZrZnoTZxrKxUPJE3w4dQUpzB2wQQ4UCtTE4Rmibr6x2jFhUeabE63iHSYYPEsEw9mrSDf",
  "key14": "2yXapKdKYzw7fMfhF1iiSMbzxUVjPmJPoDKnjXcRRXAmc3a9DQM89s8B62knVJXtMWTpVo8fcAXCvMifowH6zrgP",
  "key15": "5mdPUWWmADYAKnD9E4rsrwTK3fjzpYwQYcx8fBhbB8TSeqWMGWnC5J9vdusXXSKTXJxxHeHrMcnAwPGHf7EsXesc",
  "key16": "4jBqiUzEbC11Fs8pAZRNJUX725wiVtkeWvWyxd3Y8jiYjok6a5bdPinwqV9iupm6eqxKtdzyPCTcGxsTvNsZq2os",
  "key17": "21oQAySQ6FKiru1QFCcSr4ZgovxwUuzXxwRpZF5Rcatb7YJnWmJ4LGWauzMprengbNJHG7wpitgbeifMKZuRjHGC",
  "key18": "35Fbc8mkbXnAtHUKh6nejZT38RRsPXrDzpKVF9fnDNd5Upg9jJtLg2J8z8pbSGVPZrUtNjK7vXQpSkFKNf6ED1f",
  "key19": "4aF4fSs5nU7X7JwzKrc45Pf9LezKTpoeu6GBW5jKLwjj5orBBsBHDZLidQCiMTqCVdZGi4p2JGPCAK46ycGfnzie",
  "key20": "5RLLucq9jaf7xMZrvrHvkz6cGcxF2tQRdijLJZ5EGMNgXS8LpScbNgKByMnomUa6aAziLMGfyDwEcFoBD4FsYhXo",
  "key21": "2PHzGPMkWCVAKhUvPWahzHyVaa3jHArXXfJLCkgodjrvCufufNcxhyyuBo8mF8wSPTvd1jruXuVrwNKZaexMT3Qh",
  "key22": "5nL5EwwmnSST6MXC9oaBZ6K5YwxdYgJ6WD8GV5SdJQdqYYuxcrJsfXMESQauKc1kvcFPc4CzCZWLuSFBYA3kSTst",
  "key23": "2B5F2Ct3A42kbNmYeP2AGNKS6N1x6A54QnKwxnuW9jPEMiNtFJXaTkZMgbwgDcorTWv6yJuVakpMnsUewYCHb5rk",
  "key24": "5LqBP5dfQ6NrXk1BH4QapFTEQ8ZT2VSZ2QbczYR3ifjvoC26NUgRc7BQJBcqwq82ABYiRiqHCCcZsJAtbJtBvwtP",
  "key25": "5KEWXtRZHwtaVXSkUy3dojY7BjsjkYukMZCfSD86xb3mduoR9rPcuqY92eduYSEUrTGE6kHPJEgoJN13Nmm3ixwN",
  "key26": "2vQQpQ2et5EN7nXycAHP1hPvWt8XPHgmS2EKiWQqkQgRmg4caHBGu848Hezv8pwZ2owM9bkyWfnNvaZ3LDJhNPFr",
  "key27": "2vMF4GMwHTEDBCmJtkSBne9mWhgDLtfEB5rVCPfawfHbcBQj1W7WBkkQZ1cWG9BJsTpSoAEgq6MN37SVaNnewpqc",
  "key28": "5xv14pELyqxgbKdkGqwhukZ5919uDKBCadC3A3swWimMPG2mRg2gTnTnzp3tUXetL8wpRCq2JsUNhuXmfpu9Boec",
  "key29": "5AdJnHTHpFFjDaCWrgsSp26QKBst24hrKpN38ShJYfXwp4BdV7Sy86CNveUuUs7wWrBrYFvSgqPte6pRHm1wc9n7",
  "key30": "4oAwNL6JCiNmUpnGhtffd6gJjGv51DkArEvAyv7RVdAyManFShLUq2Yg249mpJwZatFKbwnoNCsLbSRhhVMArAJF",
  "key31": "3ketNZEDsRCXPEzpcuiwa6vdpyMELNGvTCXDaWmPDm29hgDQXQ24xSa2Y5p4ijH7iimtuVzVsbNbirJBqA5nEwQ6",
  "key32": "tgBnf2uJwm5co7VisR4DMiUp5kKptR932Qih4wMXuboozqHgwxdSJutg4cinU67hyycPeJMzGX9QTb77oDWJ8SX",
  "key33": "2VsHVFhuf9w7JzjkSAzKo1UiBrsmj65xqgmQ2t6aiQ1q8wSHAej5xbsisyEN2L5YWhrkBsbBZfNyjZfJ17HdZmMF",
  "key34": "5ihruQDLbkxMKXeDZbvx3k5vvdnUfjqXvxwda8VDpAJJEpu3JCz9mTRsuvM9U723aHGRiMrWMzhQ515Xxo9V7B1K",
  "key35": "5oddTzR6yeu6SJfaLq8ShBMeRsr9r4jM6qW5D2UMsoBovahSgbRN4NSaYcFt92asbNaCcJZN79rAGCGvywP4pmne",
  "key36": "i2mEMvGWnoMHmGMffXzhzWwTzVRKJ7wA5kvRZN32n8GnXRkFBBVXnmZpva6Tazt1ggD9cWVddpmUuHzw3TrTYWy",
  "key37": "qbkatMn2hhKG2q6E4NtEVS7r8dvzGET2RSKhQtDXKpKMryZuGzSBdvFV2yKiLdgxFak6HZnD5CeEpxdStuvbfRp",
  "key38": "5z94w7zbGMjo6hGUiqYCp9iyQV2qBMpsqojqjA2W8VapjtdKCqcta5tZVjbfqGi78FErTtJ2kRfZRgmx94JzLvjD",
  "key39": "3bcHq2PvUDznYQkeudd3Z5KsYhcTvGVhdYrfpP3ZeM1pP17FZ7pBjxXPYSGjKhhLtmJKLi8fSN4z6YtJhym2675v",
  "key40": "6xH5GaMxVV6iPdyGmU6b4GHWsr6Wbqzwa6RL6XV3MR4iLiPUDSLQSL8NpyyRUg9iRSNyE4poDbXX6vJGkEPCA1b",
  "key41": "4xhpyFKJosY73cgj49KgtQApAVVJRdkg1pdQ4J7kh3iDmYQcfrJomzBn8GeecKWF3FaV3kgqqMyydnmxbRSuJfDm",
  "key42": "4pLD4YqbvqsCq6v3UP46J99F8rx65FU5SjQyvokcctbQhP1pk7j59xg1Bmw57RbU3udG14Uvb8xrkqZq8yMNhJub",
  "key43": "4SdiZCgpopTLub46EdUTpXH4nye8Q6yMi7M4uvnqJxytVP7ywzA1BrmA5TQ41SSAE7Q7DASAF64WTfcoXZEvZ81a",
  "key44": "3qf5STSLui2eBMptd5XYMMNd77wKoXxP4jeWmy6esVZAAuqeVphf5qnwy9FAotN272T2q9GfVpSTn2Z9DK6Xodmu",
  "key45": "26ECBhUoggm8DAAciEizeoY1rKuZM8zxJ8S5bAw4vKNw1MW8G23ykV7Py6sQw8ZMzZkJbVXNFpDLkaUKckYnpskL",
  "key46": "21MG38RLyNqVPgmmaS9SG9kKH12PyMkDMaz1TYJSVeMj487Nh63EvZErtTn1gSYsjg17tuLK57V9M2r2vJj6zU1s",
  "key47": "5BSMvgna5YDsUUA22v7cu11ojD6FtcqmdHSH8m1MVkHa4AnM4vXcPgUJKDVuX1o8rfqpbrsC3h7y1ncZzzor6E8u",
  "key48": "3oNEYaTyFjo1Z6qKjNTAgD3xDWB3CNKoU8p6ZzAf5cRTAVnaGohpn5NkvnvoHhdSKRaMDQq2aRXrpbmcdArx6okG"
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
