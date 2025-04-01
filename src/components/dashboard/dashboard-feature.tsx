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
    "4Q5Bgjdj1yKNS4NxrF7kt7s37N932LrC7ASj7abHnJuoYBLb3GQ67ZJWnnHDF1g66WZ5mKRDK2ehrnJ6t5DfAo5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QSS2pbBsEq87nLDo98MbhDWbWAn3zsZA3fZuoP27BYyfU3bfjTYxXtyLH5hsCTGgK94sstdvBnXygth1kMSyPsa",
  "key1": "3heNjqLh4WPVugHa6SJr1oUWGmQ9SFXLsUcRMmmbLvyJ4HwZvY6NvyoGFoYdgdLakKQkoC31Zpac1Vyf34zseJxB",
  "key2": "5wjNFBVcaxWLhTa1V9JFBGYG8yRHbM2YKiZN587YWjswSq2zJHDCaA8Ga9ScANdAHtgPNvPryT6zsxEsFNboC8Jx",
  "key3": "3ab4jnopKUpXrha6PBvNVnmwLhGJvt8te3RRjygKKzfZFnHTbnUptZDGeFwZmvRb1EcFyBEfcLA1fSgA89gXY1Ah",
  "key4": "319Ekqgt4S623dsZY46BwpcLb6BwWjabbuCLmZG7omWi2k7W1PDXQzHLfzwDjxKoyypYohtvYSGgTjGSBqPM3WBr",
  "key5": "258xn9GZSD98pEKpGZ2NEzseZJqs7fyDr2cHwDF827HLKRC4NDc1n49Lezs4KjQsf44TZYBcHJT7Xv49QyXwxtfT",
  "key6": "4251gXWXqT5RhMASJxZpvZuqbVeMfsbeiAkZUBS4SZYkuL67xigvAG6PtTDH3ppQNRjLuSmzBQcW29PGWZq9AD7a",
  "key7": "3aUvHr1b19QiVkWR8yMnjH54Z8W1vjwpw1YL4z16Vh73oXuNa15FA4o9dWyt4xvQ7NTaYaxSRq7u5WeB1LvDNR5Q",
  "key8": "5kXjwHo8nRSxvr4fGNY58nUwXxRWucCheKteF4vQHXJaG6y9EzmczkivkCsvjZK1bbLMBD48RfXpZxPqwdEPZM4c",
  "key9": "5yCVSqHpgxPpsZUhM7kD6rk8jAbK6ZsCa19p28GV4P2fqadBF6eq7n12kR8tZdR7Sej6eu1zJntrkdMxsZkf2dEQ",
  "key10": "J4BKwWdm2LaWJMkF4M15DUE4AyYzzBC4AQXDb4V2eKJaKbH2UGquh3JkgydxjsAbevisiAbRVwvs9TbptsAFHxA",
  "key11": "yNxyHmeiV52QrPFaVz7iMQXH8AgK8HE1zgBU58U4Lyfq6e9i3bU1C2AqySs3P2odiQh4vevCsAcBJNndkETgJP7",
  "key12": "oFYkcScYNBQvAaNKcHtj7AxEdqy2TjLsuhPmwGUc6UXvwsRbTjVmuAMajjTuKxkrECDiEn54rjfGsZKeYAKUsLM",
  "key13": "2xHHry2iRWCUjaT7jHhDLix2C4kcZhdNwDPXNgLpy22BpQhwnPuzhKWWbjMRCRBZxASWWYfcViMY4EMZe7qpXmuD",
  "key14": "3Ygd5ihk7PpTcp5Hvan8vvtD5xaPpEho4uYDGyPoRV76Jkc9dQYrtyt5uKzm3BogJFAFSztuhyFgukuzUShVG8cK",
  "key15": "2fKRhMZPtzbEuavUXD6rMnLmyXShjRVkFGvxPyg58Vjqe7we1vEQGqXPdbPkvh6TZ8g6PsLbzc6yNFGartsKbymq",
  "key16": "27pXd3BYJApHyok85tSAQaie1zeTLG11KGeVU2DEgGqJ1evXjp29u5rGoYFYTYK2T61dgov5EJCTuuvq1A8FHEFp",
  "key17": "3znYeiD5R6ahwd1SNjZzehHV3dGwGLuAgQHQ1JvMnoeBUaopE5fW9e9qnBqYcFDuRYF1Tn3tPbJR2hW8NZJoNqkv",
  "key18": "HFXRCGy2rkMfQKxqdtCcLJG2Tg1Zd5UwM8qmZcgB2BiK4r9FkrKxCt23XzNseWqSdkBsn37byh75QvkF7L9pX6v",
  "key19": "23cqhGRDLZQSbvceZ3kDvortoDdQ4van5r5VFPtSe5L8WDMHySB64uoa9NZHo4NWM3kAHDeXcq4fyxYJDVB4fSZB",
  "key20": "5xkNcKLvy7rmkmw1ks4wFcqvEhiarwQ8c5hGJf5bCAJWk8mqG99JrpQ3XGVNQQU81dKPn239YKob2FmPomm1RNpX",
  "key21": "5s5W4DamvSbUkXSjrbkw2hgDr1fVyLnKRyMmBTHQEfsk26KcFEbeCXMLSK33tfyde8Baqn3qGzm22XYencTcdSRG",
  "key22": "4sUfEoJFsGRpuJGQCFGRdmXi4MLtdqaZwEctbZ6mmS5enYyA19myZQD5YyU1P9145u31rcqjZvuq7x2C7Xy8LQEY",
  "key23": "54echpMMJTvg4q7zcigs9hYAFRZNzWRdqhkMazGiiYyHniXJqyAHDDxynU21zYHo98HTwqfPEhZeLCDEVxY3bXh1",
  "key24": "5hS6SE9jd97yNLhXNJRntN1vnpC1odiG2Fk2t5M4UUNTrPfYmz8di8nf8fbPfkNRPZ27YMBfyPmyayMym5yAXbeV",
  "key25": "3wyFv6XL6gULsbcvTr2eEQuT89Tp7PpktUU2gjQ7ozqPV4PCKxsBgT66WCgPeMdJvDD6SsqpB9xSFbZ7gP1CxwR7",
  "key26": "2Su5iSebKCGvUByuvujciGNYWuNEGyg2Va5WAbbe5aJcQ4ta9qLxfGLQ98BFBYz2NjSUnMnH6CBuyNNMhZ2ojQ1u",
  "key27": "27dKYTKtfVTputRoifBBA6kvabTH1PzTLngK7Us44YwxLzLruaFuEGpFMntKXYaM2i2hbuVottHQda5ZGFar8rSQ",
  "key28": "4dwYukMdcfkJDMJatsXCBxuuPkU93UUK8qnphChmDb1cTkB9e67tvqDxSDwXMN1AP4LAn7hYRqrHK51hfPUWUnqx",
  "key29": "4p8EwDQbuxMQsm4s8RV16GPuQSH6qeuTWLMXArZH47zBdVQxtdyNG2k8mKkRYsQ3sYFGzSRPpT7SxNrFa7NMaBks",
  "key30": "iHFac3qV5PnRucYFXn2GA8fmBYssc1htz7DhdabtCNhWb9iDdoU9BGCQzZmsfN6bzFWhCeEoXn3Vndoo8pLpUpS",
  "key31": "2VTer2hrX6k2971kjjScnVBT4rYQ7gGRPDkdYEaKQBkteoQKsrxWGi7cEpJ7F4Wfm8qYs9ABnEh4mADikeMzD8Bs",
  "key32": "4rzksBaTpgnYqgEVPNwLgT8v8YQSPc54Q7J5jrDsL8XfPtBA3Sp6xTxFB3z3zzHiKXAaSWMgcrpMjxR2GBy5Yr9J",
  "key33": "5KWMGQhyfxSA8aMYqFaPeD1xasSy9kf4o96YVssMgWRw8Qdnt725KrpCPe3XK2uw3cAtYSvdnmC2kdaxf5arubNt",
  "key34": "32UY6qdXCETDp1yqcWLmLAG5fuQmEUVCMbEo2ZG8VJGGf5eWdY3xomwLjLVU1YFTEhnbQJCjEBxuLMGfKQXtq2DQ",
  "key35": "3n7e4TLMTN1RoEZuMZSrnJcdeq7kMThRWon1HqUeFE2118nxHEd4xfEDzskH83YiXJyNUJ3kTq4NxtiJofC6XFdo",
  "key36": "X12rVpauypeLaukQgLtqCvUdQavRxc3GgYDQ3KR9Po6X5LzTAwDcJ4GqjXaCQBAAhku5dgR9kiJRLVVTZZDcygM",
  "key37": "4htNEvVmFjTyginpJGGNjtHdEro4X3TKz4oRGviiQiQbDfg9aUgR8grm6PMVk4U6pagGqBDRqJSK8Z9vw3eF48qJ",
  "key38": "2x2HZqUANuDQnYH7cQxtZTxnWE9ENWmWtDwS6VLMrfN7SwjXXhq9CYog2YYzwcoLoSYf3pvuNKMhz6dfsFWimrcD"
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
