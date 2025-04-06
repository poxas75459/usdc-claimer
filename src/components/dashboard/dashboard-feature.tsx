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
    "5kjQThWR8YTrnqWpRnVXN1xvksC1qB7M5kPwht7WgeTj8PHptSZyLzB873zL46S8LF4a9GhTkPddwdnHHgtVP8p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ssGUHJPKthSRbvfuUgnzT71rAekeEg8TehZghPgkrSNcxYmxSP7tpQV9Mmh6DjjjxjkXvG1KmYaMCRp7JYF98Pj",
  "key1": "1pum17c3WSGQyokdxcYetPfXSmTqVrjDdoJ769iNCYW9pAjGKJDWFNFcEubxHwYouPi9PH5MeNmEoB21tpSq7Gp",
  "key2": "5EbWwxqsnGJvkmGszmkU9EzRBvr8FAcG3K9M82JufUjSbfsYsWKYY7Vqc2EcN2bjTsevzG3H454LPMZcBdLbEauz",
  "key3": "25W8oAyMDhPuz61mPytjZtFWhY2PMRv7rBKhgnG6CEW4FeMPRCZUUManNjjKjPSKnBuLTPxqCCPz8ab17uyujpcT",
  "key4": "4Rk2rkgTjX4x8m9eo1cHfNELmSozVh4rTWmmQ41zs2KBDDrY3VrDKAm8NKbncaZRQy9ZLwjSrzLBctYoCL8djDoL",
  "key5": "4YVTkGqwyiSYvxQva2SF3y9CjA3bzbenUuH9cF4JaUoMMidPXcajchCDjC62yqw8iWZZTUxsixrFFnGBqBhHMxcT",
  "key6": "31REKLX19BALPWZuzMQ77rm7NvzPghevQ9urHjTk9DHKP827kmJYyQSUzfgs5JK5cw5WBDwfEyiU9SrY6R63rdpz",
  "key7": "613yX3PDaLNaGP6Niz3bHrwptvEHdrnv2q32jZDh9zAbsuZS59x616vGM2354u8Gz3WUZwweU8dRuymeQsXTfttC",
  "key8": "BEdKvEUTCp5ovT8NWzJEBnNSfTaWTj6gMBH44wd2nJN6HhXwZi45fSZxwXochiNXn5wZQrtnj5wG98uXaABSbgu",
  "key9": "2ba5PGwHYJ2LAKEgxriLZ7gg3dfz7FGbuCEZ1Xy5NBvzxDRi37oyHYfUfDyqzzKw3obXmoJ5JMcDKtKJ48jdcVxd",
  "key10": "3xd32h9rRn6yHSReNL34m5Rxvh6HuwrNpiaijf7yaXKLkFdTmoABFHxjJzaAzoZ32deB39wejy3bHyxp27ebCaTr",
  "key11": "27f7NrN4BfrCV5NMTY5ZCReFSdwG4JRCk7ezdfNUqG7Y5eSZR3ewyZz3XBdMonN1dkbdWJqY1tYn9bdLPqEb3R7d",
  "key12": "3HLQQTxQFdWgYMLfxN5TYfhWtqBsPAA6WX5jDNPhK4dwpTQCmrsevonQqMpqMmBF4GWZnpDsVLJAy8pTuELqnVoX",
  "key13": "2kwa9HKi9A6VyNcaBvD8VJEmK3KYK8hK173SeS78d7SvAiynuayDM65HLrVMzUxrF7XaYaEZfAjct5woghbG2Ntw",
  "key14": "65cgCxxW4M27NC7Cyh65wG6M8grSLvtUKjPghBykFf3n1dDkGtehS6KnDutPyKcUoHpPwmvgcVs5V7oBtS4EtCwP",
  "key15": "3ueAX77kWfJHdRUfXDwywYwcEmjWXMEeBGpBDAFZxpA6BMY2ep9jQJPk2CjenGraCqmGgvpy9DgurWU7JRTWr5A9",
  "key16": "5ryxxzrTJy3Rwu164C7v2932qN7LqH1FrE9aJyC4S3Zv2KTka9gWKkHhBbrbBrsqM2ewLHEjnVmUP5ckoVBPno3g",
  "key17": "QWHLLURnnGJK17L6SM9rHgSBFAuFjVUx2tdfpHmWnDMo8NdABGEo7QgUeTzhjfDdiD9AUT6ZxNwTz3HrpQ57vQo",
  "key18": "5fndonR2NBw4yAEg31QWQZKNRuS9EPdQzdcennAgDF1D4YxAygtzreae2EryquG5KAw45vRFKpU15Bh7kLrANQfB",
  "key19": "3bq9U4Wphkzobep4cue7qR2uqqb2CnuW2G23wHhmjWSGCXP1yMHVFWRjnVDFbQgN4gL8bLQYmd27fmYX8juc7Gd3",
  "key20": "2MZGaSioWLqwPLeWs7aZVH6yUKp3sde1Yp4uTZu37hzRuJM9K1Na9VbiT2LMcszyF7MdhWRoKkcJgsZDvEtephry",
  "key21": "4fmoLCTPU6k2pbynCtkHdH7UMM5GjKm3ZfyYSwphfbbF7sPdMoFiXQUC3Qt6toWDujUfH4G41LdjGTzJACU2nFQJ",
  "key22": "5uZbiUg9Wz3B7DRrJFtL1r5a7fNLjRTC4iL9DQQfcT3J8hPz3eGfusiMqeuEuo1poQKvLgzRivWWK2Cqog4k5Uf6",
  "key23": "MGirpQncdzY2fFjYhwDBTWsUfQkkFz5JKzmsWHPLGSnYYGxkbd8RAxubnN1XRHozfK2WGHAfAHxE7nnVv3CoLsu",
  "key24": "2jo3Lm5BUV4Jkr8QX8E4gZe9oyjF59SyYNUuQakTnBe2txqoZafLL3qq6KBaV7YGfiW3JunXsNuxXJ4WyFz2cXTP",
  "key25": "yVYgMxyTUanczThg5hyGViEaTf17oVWTRWcMyAZsCEL3niZdDnFKwVHr1Kxr5def9o6xEQetShD6hEMmEs8csa5",
  "key26": "4zMZchTFTT98EnXPCEP9Uy2gU7UwpNnkwyh54PDAS1PjXyQq8ZY1cpdWTF35da8nvVmvuPdwUJeJSW6ieeHQ9aV5",
  "key27": "3MtJ4UxWpS23xjn3zvMxAMzf1gxavxoUqB9ZFtCWfpLMD1QEX5bpcRCSzhAfh97Uu27SVg7hn6TpauyMeM4vCUkD",
  "key28": "4Cfgyni45ojhXqVz18CWyispSehNmFmM6CN9PmyJTqpFE8wNAS3cYKo2ArZp5FTFYiGiYf6gZv7iWXvKDedXSwEb",
  "key29": "427GgLtxnHrco13vN6HzvZaNwJLkdFdqSSTsXZbdoHG2yn32Ta7fD86XnACoX5YfgajjjFUFJ8jMG1VwFG1ieAdK",
  "key30": "66RBYm9gPk5kA3fh6hQLGdfW2JZ81bJo2856Ki682LpW3a7joH8XUxxXzzosH2Hufo4iV8stBzyM6NTkHUpkZG7o",
  "key31": "5VwaEben6HraXX2qAL4RuVfdVRHFjzvYuyv3ThvvvcKT3C6R8to9spTKj15eDyyPgjsbwakYm2iB9FBKT3tHiBw9",
  "key32": "gAAysoMKaPcHv5fywyordc5nLxKby3ha11X9rxTxh9cJfnmzmuFBT4GNqMuQnoAr8MCoa4DFMd8EqZNVxyrSjQ1",
  "key33": "2G8jhimgBYeTp2DQegp26j1SVmZCWCPgLU7z8JpZVSfr2kfba45p67rJYh18bw9Zg1Y6dUZKCBysiGWQhMMx9gR7",
  "key34": "2uWPCScjp9jxNDVGBPTGuEGGpzpcTUPcJQ31gCDnCGggqKkke9mG1zHiYYHu8VJ26x5phYQP24erVbh1omddM9cR",
  "key35": "473SrGjh7ySfZ1g8Db3rLVgFfhj1P5NFKCNrPevLoRfRezXcXWGzopZfbsUTgMw3tvVzCTRPVbMqeBRiRijT4KDM",
  "key36": "3xhwJQ27xJcpHYYfpdNeiEjYipJYoGiSAuXy9795mUnL4G7DBp1iVRagoLyrX8wjhDURaD2zz9iR4yFoyhJdBimP",
  "key37": "2E1qmcLEACoSh8cCBXCwXFBxkbZ3uU7d7bCpRdRhppFMA8eCfgoxuQoaEjxpt6qCcath86YsDzACve3MpzU6bcvp",
  "key38": "5HTBU9GJFNWef4xQVvLYA3oUFRMwshqMzeVSi958exbcFHYVMB4udzqyrG7EuV2e8Cd5cdzigCpF2farcA1zejTv",
  "key39": "5VD59AxXKrZabS6Ccyg1TGKZDe893nCD9TKVqtXiftiYGHWdaNQpAL8bhf6vHV2MzEUs4hZRfJAYimtFRmjpMJf4"
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
