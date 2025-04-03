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
    "3Sz75rPW82VpQmSiLDKtUuLENEUQexHZ8zzMunPmEYiNJ24isjSgifGMooREpuGVfz2QMtRmxSXnTNsCAWFYCQDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8MnYa94gHYFxaEfrPP7AcPrt7W6YXeibPuVo4v6Qb9Hk6gAyMwPrZ3WTx8L7vKJVy8yHYxjcVYSUwCj1j8FNDf",
  "key1": "ioG1jhMPvwMxCeaC71UBZww26WD9yBmC6SJopNt471CGgMcbmrBgSubo8Ksp7C1FQcPKMFboSXDk5padd4fq4GA",
  "key2": "VQNGgjvyhNB8X7m2xoY7Xgkij41u1TAFWuwstbSSvsMqKAmXgNYwNLNozYmV2KYaGNmTTU4Wk3vb8StCarcACjP",
  "key3": "2hDzmuQt9gLqAVLDnMFLHXdK5YK26rqTUME2LDr6s2128c9Ku2h9ZGfu4uSwkenVipjyBsCYrmLbtxxUNkANk49m",
  "key4": "663HGijgxbK14dYdveC4RxHdMmeKJ3W7UoFSPdJmQ7CWs6TcawmFx4f1cE5GdQuVwd19ZoFWBpUZmMpHMM9mUiBr",
  "key5": "vwVcrHZBZweWZhBpc4g7kZy2ZN9HxFDQ1E22M7xajJTDP44kD1BXChm7zohtVYFsMgcQpiePxaqCj5cLYGJw9RA",
  "key6": "5avGxrtPxmL6U1tMokSNcQNYJ8xdHyVZh1qcQLfs16X9jpqSh6c89CFUmnjRKjhuFvcHyZ4im7GiKyvyZ1Mtk9op",
  "key7": "5fGZidGiY5htTrXbc4BMak9sa1dgzQ4zpwdQweo6xMc3JDjhh2bA7z8jtvW8gGN2wWypCS3DVeBy9Ha4K3p81mPr",
  "key8": "5ANaaecYCFnec1yGUTXEr6gEyB3BLcCy57s9CpS6SvL8cdiDJoTHykGBNeMuKJhh3Ae9MzmxjbEuKvS8jUx8tneA",
  "key9": "57dvsZQrkGRqQAeqx6KMtk19E4ZxhMjZEJkkBZTQQtaov6AtzzYYmmj2NKDw7Zwj4AiUDN66MQWBf2cS1qq4hPuS",
  "key10": "4Lzr9tttw1Snk5ctUMNf6KGpUMo2PD8M7tabaHsMejjaNvy3p9EJnTcacGPSQj8p5ZGP3YyK9xGEsNGcVY9Lg16K",
  "key11": "2C5SrSxhfYoteAG3gdKi2dFzyzbvy4HTDoMc8PLw9vT3M1QsJRi5pm9J79UDAqfDm7973S5FqKW9DgE9eTAdNivM",
  "key12": "48PMvbJZn7EFEQHF9e5m2HJXzDPMrp8RKPhdRA5JtdYksgCFYht4uPJFgECkAE1cAyuHCutDxkhxQkyrM9kGGYU",
  "key13": "4hfkeAyFifdqMUAUmk3mCdNw3XBU6EkWGrLn6uUt9eTNAMqQ5JpyVFCWbczhtVDpDN3BpQH4XPS4ofWyDQQWnxrv",
  "key14": "2Ps9Hpe1Goea6zJ6bPCvD6JJQrNTPnDgmC52sLpCmcxNgXSjrBhpATZg3jBKFwbjnocXkfCS5fLLx8VwmnaDRNZb",
  "key15": "4jB53ZSJ95RcR36x311v84g7ufVt6zDpaX1ihL9FYSGhktPnfiPfFzwmHfV5YU8e6DRVnMRKVgRiqujEn8mndnVN",
  "key16": "3voVAftv4hEq3c9iT1wtq8rK4XFKBdUzSnRFwaUVJxKEXi4MjqzYL938hMKoE5fVTeREvaZPJwwTPxmUymqd7kRd",
  "key17": "5MYWa3JHRRw1UXQ3R12N9eRNMX8hh4irg5LnqJCoLyujVPop2UkWE1a4TUv6XvCLxiQ4TzbViPW2jYFdmrFrvZAt",
  "key18": "27odYFFNvGccTv1cAqKvD6we9fXYuwGyxbxYxmFfGQchH96QUU23ZTemppNiipTYbnRxWgfsn87wZD8X6UaJLXzt",
  "key19": "hF34ubVA11WgNVfHLcaReq96gDoL3G21ExFjfCdzx3pFFNUarbPMCtEBcpyGYpHkuujvayYvhKyL3rRsWpjHLP5",
  "key20": "3qAN1iq4bH4EqjNZdYJD9wHi9jdQA7qeyL2oKcAnsiCK7RfQLcJkX483pDMpY8Af8Yiunrtug4MuXGeV3d41wjL7",
  "key21": "2vUpKkddeQJ8siTbcsN3CmiGyRb8dBjuG8gFSo8J35VHpKG8j3WB97AkXwEaD3wLSLHmf6XiT4DUexBiFwFLZ6KW",
  "key22": "5FPMKRgii6CGRfojqeLbcTg4jDiijdg6eAo8au4cDnHCiQs9cXrnRFRnw4fSX9urBKBwirojntgUk4HtMTfZozJG",
  "key23": "2uCeXif22ALxPTMCozGGx4gHeDdtx3W93FrtUPxTe5iJHpMg9vq7LVE5q1ZdaKfJp9BeFLbbwHzMEdnNuPgZXZM1",
  "key24": "4ofBnD8mZ3Weu2PG8dtKh1NB1ugxTrYVQaDKdcU4WdRfa3FhQNNWRnaf3FN4eCPW3uujT3m97djgwKeTu3jJkRpF",
  "key25": "58U7upJauiULxCLJmuig5mWYDh4BSp1tPxoVURmDugcuSdeTKHZVHWjvSFBy85c2DqCYK6QFSehJWugXQocicNnn",
  "key26": "4PX9ELF4p2amQ6RozUFxiVdxKMY9FtAJNwBKDYqa8mMPy5PatRoTXbjXYLe4rJC1fcDHpYtcayZ3CMQoDuQwuyKG",
  "key27": "4MadRzjvjcMXhL321d3DeY69oAaxMncqhLM3eMS1yYnpHMACyyYWmH1GHrkVh1wrZZFi15BVXnLqPBSswfHA67N5",
  "key28": "2r62QCW45GQCvUDLf8zddvXaewANZzocgMSwDeiqLJ6x1rGhFxiv6FhACRgERr7RLCNKTqo4KXfnRY6x5SKsZatU",
  "key29": "3pAqjD6M3XfVjjWcW3cghxtycUeSnfaKhsZJnfeUfMWUeE27dw2LNVwKptmuMRiZ6rMJBH5HjV2MjLqJyvaYLxjt",
  "key30": "4LhtD6ghXTdx2NNdUE2kwHsc6A2JTRii2cDWyq4FGErCJb6QELtGXpsnH7vTVYvn9fGjSCgG6fV5EyXzaecpi9d8",
  "key31": "3fiTRgkVndwpnhjrbi9kNwknGAqQnspxjwQrZDZ4Wc1UE4GiqHcPmaUg98vGr9btrnfQu3VbnWasAtTM8ScdJPn1",
  "key32": "22ySVjq3qHyN5iEdD9YqWQ4jRKTLHATN1r8C5B9LJ2beWFA7geLct2LvoSKLPuuApLHsbbkiDMwpkkEC7Gjh4h8P",
  "key33": "5bjuUxbzHZKwJugw5qmo46xHEGG9DB4URyotUXAUmDCYdAFN3arJkzTnQz9aivXhS9KSZCDtZcMGu69ZWTxoV6T1",
  "key34": "62tXEStW4gpaYPAFDPsWeGDbopzbwLeHVREQd6TgXPey9JnYe2pQSG73eXfxe8V6nmHs2d8oJcYgw76pft63izT5",
  "key35": "5JZKvsaDiXGeD65KyuwCfBvPxAmKvQ3h2cDHAd3Znk4ZUPj3nfZUBHnGoYet5JF54NDuC78Xpf2J9imfaPrtRVx3",
  "key36": "4FCgDoGPczLwexefjpb8pdR1kF1jPXgUDjUu2YDpNtZei6rmsiVzwXDybPkYcZVJyRkPhHXhExCudFxnFJDkYHwH",
  "key37": "59PLvnu71ufHieRbDd1iqh2EEWFPmcMSHw38gXWiciyPXiboFCSnHLCnqJrjM7NLH2WiDYCHrFFv5dAtp8xwjjvZ",
  "key38": "JJbUAzLNpGqDstYmqKCrkhwRUwLoDJAkx9at7c6TtvbGZmCYEhg142RkmsFx73aZPR5x3GgvqzZAei2MruqTWqw"
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
