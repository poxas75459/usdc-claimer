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
    "5SHxxRUZip8EgafMTGmqzTV9JA8iNZjnAFRU5g8FpeLKwf33ag9mnpvjdhYSRhxpmsegQ1cXXWkAJ8SdggMNTFZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W9P3EE13s5MowdrGrx4AV9SqPMNmPeyXR9UKja13ekcLTwDzANUp9TBdFnYq9H6pFes5BBssruW6YKjDp2f6Zgq",
  "key1": "54oi3ns1DsULN9dUTyXN9bYwn2hWkH2ty7oDB1wRe6pkwWZdHBkUkne5t7ZMu66Fz2sKM8fsyuE5bCJWvskyCMDm",
  "key2": "3E6UJFZx76yDNUr21uEf8TsG9uTFuctzqQ24KL8mfdtwRyDmDXW68cCHaFnfZ6z7Z5HrBHWiSBS3oPH78NUQRDSj",
  "key3": "3AGSFir4uwRyjZ7rrcmwQCeNrKx2CRuzi7yshuGA6wsWZTvQjovWYuSkP19VYoDZ9Hq99Qqt8STcg7v13WWc97i9",
  "key4": "4t16gs5q3ub2ngMPdHe3wRs88dZetomogdLjza7zUYCrtKH3hwE1W3Dmu9aj6fo98Tv8E4HGYVZYnS7cL2CsgbjC",
  "key5": "5KNR2jGu28PugdcXca6YLVdvEERnvSjogV76ADaZauDM41N8QF3jdHDJojEcgZKZg3MemQKSyGgBxCD5LmJfTcpf",
  "key6": "3mcCsku9wWkgiWKWcsYd5jR1JWpVVaytL7ks9F5pyGhjrdiPutRCuaWAsozqq7q2GXQ2Y2TtYH47P8YtVsnFx5g",
  "key7": "2a6GuoRUaFhoa2VWeesA7bXFrXeGg3tSzzsPCxunREPvVfT8STzRr4SmEyKLicc3UE6w73Esku8isiLBEqVaUPGh",
  "key8": "3YpQrYDoAVUCAmV56tdiUSTcyyoscmWQNU1fdxUhoGMYD9R1dCZg7P6rcKEQSLshJcVj7sSKaEudcmDxAdSR5SPN",
  "key9": "4Jh5XJbkGhaWKAsDJuQwstGBWtSY6pK9wziVgrHVFZ6h675u6vTm2ujkjTyM2UU2n8N9ykGP4RHJe24avbQAxqYQ",
  "key10": "2HWxyJCF74JXqfbSaTi46zAx2X42FZNLeJ34v2vH2xCL2VsJFahmzDZqcj3mUVrvjv4YwcbiBDLtxbksvHEP4nv4",
  "key11": "3qsX8hyjguRuS4Sq9GCLQH6hNsLwE4E8U2gXXsQZkPDBqUtXv1RvVLE2ZvX6bm5TcKp9strDrkA9wgLwSbuf9imm",
  "key12": "4V94DbSbcNhXaEtafrRZtNndFkCNZwndjkmwdsWXfpc99nZqBKU1fSYMCfa9ZyazsAZ1P71iRF94z1dQcznkUuz8",
  "key13": "2DV6S7CMoLqr5oT4W7W3JNNzv3pQiLzvDAhwZjqKgabQGhn2HfKRymLp2tQku1ZUwG9EGgj7F2iCQWGmhQjDTYz2",
  "key14": "5NiVkWMd1MbZR9e3rRPPXc4mNjDAWfLGfFDm6Mhf3tp9SxDbBJTaUAjQrjo4v5tS3UQLYnMgQESbvbgXHFUwHEkK",
  "key15": "55vfQcM4yaYAch4psTkHvZoodMuea7y9DFtVWi3XDwJmgjoB5ZzRGDZbCfoNnVyxhx8UnNw1cT1RaQQzGH29Akx3",
  "key16": "3a2Hr3xHr9QR6EEkxCH6GwKwm1oMbXSLuRULk2gycC6FqU2s9GQEJMkNEoDcewo4w6LabEKCbTR6wJg6VnzUZW3U",
  "key17": "4q2Va4LKhPYhmHFpskbC16EupAwTNjatjp5y8PPeneEQzeuk4zmDDJ19KWkfViHdhyRZbSPASEYKbswT2MzrZSEu",
  "key18": "4mNRVdUq5tWjysGQ8Y4Yxkr2buAGtHVYcXh3Kb353qFfx9Mv7aC2jfYWg7J8UEz3iZZCssko9H6fea7CLt4mHNAa",
  "key19": "2mV1q69JEdp34AFaQLWt5tr8vGcT5XDdV3zV9sAJtUEdXTriigoLPNHrkcXLopxRMC5VHEEDxLovEUTZX7qZ4mKx",
  "key20": "4ZwF5t94TLPJYRBt47zshzFhaaG8KsV1fkjBoavDdrUocMnZTRF2VP4Wdp4N2geLnsZWQV2ejkCCXDZXv8XUiqu",
  "key21": "426vf3nrz8H1cEVNqhUHT2WzCnu7YcgoheMeutiLN79DDcSY2rApR5BKopFWoh3jYv2NjhUqzaSL6ps8psT43jA8",
  "key22": "5GpcBpWWeWJ2i5wmAxCDGjTRyp3TomWF9QeJmqtNS7bAi5F6gHVumgoNBVZPECXDQXZ5ww9dt3A3UdFuMqPgZSUA",
  "key23": "4UCczNLyaMwXHYq4Nx2gctetzTHiJZjTg6TiYTyK3zzUocWR8KyCbkHUcE8xYD7WBeBUj3E2vrZPci6EsuFansNc",
  "key24": "4Ne5rneU8wm7Nr4NK89LACimdDW2HxtviP1ictfA8PVdnqB91TSjLwnDgWDgBMd6zGKzGTEvjWauXqCK7J4Jiqr6",
  "key25": "4v8XC2tHAymrz5gjatRUgiDiRiyzhymoKYCrdCKN9UdFPw1TAEyyPCrCywYu1sn1PPiokAU7CUSdQiUoGR3vKKCN",
  "key26": "3FJKYETp7N69LcH6DMPmPZWHVt1QhRwgUjwcanfbsX92vNHzPbRhYPXYEbGN1zUG4xRGvptsxpAMLeKJuyoS32AF",
  "key27": "4CpUDtmFLkNdh14vspGgvQ8CJ47rqhXHL45CNFA2tNjc7qJUtbAjUVvPijoP3rnyip2jjLZrh8EWZcgwKCMURRsf",
  "key28": "2YmGij4v7tcjGt6x6s1GSuLSmGpS5ngC76xfq7Ee4QfoRG8AX1p9NLFAq31uM5YLeR1fDkvTZPhjxNd3VMCvcfEu",
  "key29": "3LrubYwGAUpPvfqnAKQBY7KHmKJyhadVJ5UYEcxfh2z7DwuC5tHfSqUUxHvFawK3JqXB98aFvtyFDem7j5yy7To7",
  "key30": "2gxhiCFNdoy42FaRb92AoCmrWjar8eaaM1iyo9G4iBzzWmCYRxmS1ydw8muiisff2FXRKeGRfj1es8KKbftSKDDn",
  "key31": "ZCFDow7SKshowU4758nCZdk4hYBtkKqjEqAtG4VLFDNzrgA6EgY3Ndrtt52eeKTdhrHRLZB15me5jC8nCr3mm85",
  "key32": "4wppXei2j9bNoAgDjFZmRkWUhDDwW2ikXiyxccPx1qKiZDNRgRtuMet1gcAjQp3AXFF7KHxoNbiXKtKbA43Pgw5a",
  "key33": "5etCA11vn9qmxzUx4E5aYzy3HzpVNYncQb6PapcUqfJ6jwcCwmiHWMops4TTHmXdVc5E1Y6Yv6pGYyqmjwLQac1B",
  "key34": "3yo1GkFCPAk4z1eh1q5Av3iRddtB8YkYehBXRZaatTKUKo5y3XBsPqWNTnXEywLTLe3w3zyqLbK6jVpdMcitg2aR",
  "key35": "3yYj555f2juh8GLbZ731uzuc4LLkWMmHt3pKpFfr8b3cXibtzt1ZR33CK5LzHJvYpbV5eCHiQS651KuRE8ifCsg",
  "key36": "5a8kd4hNvU2DmbjmFHc6Ec9rB5YAsSY4ciHRePN6Q6zQbGZdDENCyPF3z6AAhvLodqGTgZCBEL6r24sge9Q2KS5R",
  "key37": "67pynfag2SbRS1dSH6pCLwmLxUCK3Fzj45b7V7m56y54yFu845z5Ryc9cLbAqoy93w9ci2hRAwrRqJEA67uBwqqy",
  "key38": "zUjzWyvNw3TUdr5N7jC9H31gFEcs6VdZpzYEToezX4v1nw5LJZZTbxkjFK44Ny1XiqKNcCXXKEGrsyU9iSVGMJo",
  "key39": "p4EzZFw5mnrkVJUKqNNxYHEq26xYZGqv3XJ62VAfavVpYY6spofnBmhBRahJkDS5QVPV9voYuPU5ecd9KjfSC7W",
  "key40": "65dTarFsyEAAxuuVESeqiz5vBasdrxGdaVtmQdBtNGynn2ChwLbyFTWrCbzzkRPnhSZbSn2EBt54SgiJRHJ5gkSQ",
  "key41": "5EdwsZpi8LjWhb1HqitQsrfabYiR1PsKneMCmmAd4oTPSRjT8zVgoyHe1vCUsFkTagsDDUDVtqJFBWxfTWwWDMsG",
  "key42": "3EQmSjPpwdqPVxrah42J4Z3ZtDiiZ4pXafMMZXdx6PrNnTAWuqEKFG2LQFhYCHzKjpgpANMAzV48VdpmZQiZswQo",
  "key43": "4SPaj31dxeCCWFmVDRwaEKbqtZXgpiuFK14txPjF1YrNnyiEwTtUzc1J14htDV7dqaoouWovygbxnWcqbMPRVgwq",
  "key44": "5NFdrFaUBmaDNSjV2XMLmWnFU4kqciwXPn9xf4vP72sRtt1XQ1e2AmSL8C8HuW8pxPoy9qxRE5sGX9i9Eu8s7k8E",
  "key45": "2GSWtCm41qLJYXYKrznYN6uV1CpuAvQ8bjkU32jtoSCeZWXTq6SiEnx7E5b2veJtwKqWSMHa8HBnwiu2dPCxAhZN",
  "key46": "2y9dqawPgdKHzFUvpad246hxKQ2afhaZa5ZhjxLfw2BK3kiJpEEbr2n6Rov8Y7UmtcGVcJDLPDwngnLK4xpVAi6a",
  "key47": "ZeQA7cVE6QysRVnTRjXBrEMYEjqmjSDH3Wy2EFRa9QnFUUotf7DtqcnZ7vXfuyb6xoL9aQK83tLcBJ2bwXNBEFN",
  "key48": "2HThUca9rNnbLyn91DyqwrjAHjUhYiaQC6xDnzj3RmhGvjMdWMMXEPKbP7pLz8xBaU36qjEkZKHdBzVoExCkhPR1",
  "key49": "3fLy7BAnUyHY4aRousLzm2vTMd9LkAws2MEJujZA1VHgcaGYaoVWoo6QEhugzjjfhN2pNaoETEbxYeBaJikLMSgQ"
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
