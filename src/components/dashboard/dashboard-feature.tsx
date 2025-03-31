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
    "2tsdu44ZZcvF5yZ6K9azLM2QCbejETTzfkRtjc6h2dzj9NPqH8NLhXEx6AVCyBJREACobjfk3FKqV4L8anXrWton"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cBY66TfDC2BkYPUXHJoDSbFP3fKj66JQmbLwUcvV5EhEXGHdfSbiBFwHHxgko6U2vS5hAC4vqsupJUbPEhuhyuD",
  "key1": "MF5q7B3BC7uPoiNSkzps7NUXFuWCmGXWNEo2ihsgWFC8yMJQCP2rTJ2PTPJSXhbXG5GsXwUjcSP5AJ5soctzqvN",
  "key2": "4bXrMsCA2sNKG88J92pPNYBUv3yModAutLhg3e8abqHFBAuYBkLsCs2BropZg2iKYjj5waX35RR1iECQ8ufaAZwL",
  "key3": "3UPzo3BxryCHJaKp6JJR6oK8uD8tGTFDAauGJ1uxDUeUEhYx4dqcPWLuFYtbzE2kF8qTDYVphto1qAPHuyTYK7g3",
  "key4": "hwEW5meGNG8aNJEXFmPNgnEtfkHVCR6NGzdZz71BdjPQu7xHYu7RGiiWYm2qtJe838EtUi2qAJz95119m4qjSQG",
  "key5": "5vB5tNsRXqRUtVBiQewwP3hUwxsyqATYRdT9MV6Kcb5dv7ej4HLp6GAvj2WU1mv8VBLkMhWA52aKAK4ZzPgDHmHG",
  "key6": "4cPn1a7eB1BuJHnP9wRio3uRaqbt4HPNDtPYEyzSxTgEcLz9sAobo1Qb2YU5JDYUvxbRScMjA3ucmpSsXS7ZAD4i",
  "key7": "38QXoVzq6Gvs3ThJXPGGXDqGeK8SqeCoHRVw4AQouuK7iCLwWS7Xjm3FENw8qoA7LP4AjshUAh29Dag5icUP77pd",
  "key8": "5iumJY85fzNGfuC3qrBhivVSQ8CuAFDP5eAuVKmru2bRLfd4mryPcdB4LbVjTLn3LLJ9xNUEqvcYCXGVYLWkPUzM",
  "key9": "5Cvyu9pdEe9s3q5GhpT3UEuFT5nhq2qH4g4T7kPCLHhq2xmEmY5gXWPjo3zasuvdHFW8zT6mXv4h54jD6DDVv6GZ",
  "key10": "5hrnYWjaa2daKRf38ee5orSQaKJSPi4xUfbXG7mFY9v6kZ4GogxPdQF13MJxcBcGenZUNvbMDgzYjPNkU89sS18R",
  "key11": "2y8LkxogqVfmxJQmiCb8bYPJxiZ5XrZn48RRcnrfx1Umk9nrBZgsoACaodJF6uZnRr6VY9TNxZNsqpadTCCBqQxF",
  "key12": "3Qw8zfWLvGeA99kCQ9FWtxoFZtApVtmAKt6AG37PfedxApiQM2nGsD3MwSqyiWqcm75rjBG27xoMjy5guv1uHptJ",
  "key13": "P8tDxhRo5HeV8CdW8TtYAjNYZ4PyFpaiptHwWUgTmApittJY6MLULgMoubpa8wKkAt7geySXMhewoE7YcHrJy5A",
  "key14": "2uhbLNi5ysMwjvAmnoNxCefALLrxLgUzLbxwefft7taMe2RwcMknxXtw1KXRXBNZ1cUnTuLFnCpLT9BgXv7rARRU",
  "key15": "3KcRs7H8FXqy4anYw27ZCwnU6UzC8tbMPSeqgtMjJeD2N4FFogBVLwJpYQ4SAsCYyy3Fpouuod87Q3wMwQqycsC6",
  "key16": "2p26S7tEf8GvJBA4rW5mF5PbofYnYcyD1S6R3MLVTMsQ2zMoCwAUfFtdCLnWLvpbGNVykYT2vpof52TkJFiLf6GT",
  "key17": "36eRFq7XJHKDgQWuGKertWE5LGZkWYL5whbeUCgA8HRkgurbMcWiTWHqtDFwdyY7eWpM5ubvE2DwQ3VEftcC7Ega",
  "key18": "4CpVsoZdiMfLoDe9B2wVhgs5aedx49WAm6x6Q9SyLDkYQ8Mz3Au6XnEQFndU4LySPAenLNFmRctrRNxHXTyMndBM",
  "key19": "5K5Faw9ekX5vGcW7KvdPcSfhr3yNW1EY3WYQQUySb8yXjgM6KgBmsbpiwP4n2cWpQLzf9os5u6XAfZ7ZgyBJd4AM",
  "key20": "5XzHWQ8iQKitv5u3MgVPEfXr6iBbFF2skShMkf4Rx1LzXG2DDGwin5FU54RHdx3gvw8Pxbdgdpurx2thh5zB2j8u",
  "key21": "5fmQR4RMAk6jCvJmxFnHZCmMnCXgH2as7yARcbdy1aqVpC9yEfWfEgLjriruxSK5S68Q2owjYMdV5Fkc5hVGB1Zd",
  "key22": "56VxALYaixsiaLL5UgdEXDyzfKt79u1JA1U7Gskyi2Uhf3M7T1cPeqoaEpLNQxDkK5YnHzGVircqnryKSAcC5He6",
  "key23": "3GnrFkhTUsMeHqcj1sqChnGLHZDF8Ww6KkRwQM6NaoJuGLRr415NGxJ5uaRwBbHmUHfmGkqcnMR1qYQwPJSLGgSx",
  "key24": "2nWJFzdGorF4PNJHrqaU99zopNG1WowL8KTNn1FpvzQYjPLdgYC38M5TcWX31RibRtPMJ7wp8ika6fEQSFjFbGiV",
  "key25": "5L11LwGFFkT2H8Fw623vuraBpv8FBkJ4JYRPaZRNWdCDzVj4c1FjC1LpEhcw4DaxJn3Da3JaFFuVjGXKxC2rWFD5",
  "key26": "46y46uwnJsHByiGPFwgLcFKP5ZeDvApUX3JAh2iNiLtjcQ7rQrnZzhSnM3NZbyxHabHpmjgQtvgnxbVNyBtMxrQw",
  "key27": "2jbdxXTtVA8uezVyinUJWRUnX8z4JrUUML56jGxzujNV7JezsmE3EGCywKKRYMARHHUmAexKaDoADEur6fEpMrFe",
  "key28": "6XnepNEdWUSD61eofz2FPVMjSJLviGsFYWW7RWo5zPM1x3Y6Fmoro4CHBjBFktXxJaJWmsCp4vDHkDMckSRjdiH",
  "key29": "j7ExhattF4NZzBqU1yMg6Aq2WPho9EF1teeJDrSGJgd6vVKKff6Qhzhw5nkYHbNx93vq1AtvzypDFbgk1GAvZrW",
  "key30": "3sSqicmN44gtdcA4EdNgcqJbWZspuD8ZWsG2w5Bc9LoHaSB9G4zVq738McfsoaSXCze9nRF85N32UazjPxdaSvV2",
  "key31": "3MspWN6B193d94pzjpMpSJAML5dn7t1bj9LK9ofm2VRbTaZptwGBvk9RUTJ3bSJU8ZQSMD8h7DfHwZPvMkkkrmtw",
  "key32": "25BAzoTckj753xmXfcaaEJCfngAhNt8MQJXGPCxpNkAJXnJb1SRTfuRRwvAMWR21hsetehCGwyLEdidJTDFNeWBG",
  "key33": "2Sw2vwBKPZw6VyACvM8y8FnTfitZZmB7tVb7FvQ74wfdxmiqCtwDG7ETAbkSm1TVr4SGGDJoUML4RqyRtNftnehV",
  "key34": "qmTpovyR7AQhADiimYPQMsNaXVE8pLpFjhXisgDpTxUU17634woFCMMDczCsMxa4s8BAgaLVc1AsmE1oZRQ8X8o",
  "key35": "4cnpuyaNXm2MdRzGTK3ycAmLhzH9EJPWxVGzRbUJPZyu12D6Nf4Yxq4zG7g6UVrYVhH9p8M3AzLcUBLd83NTLmVA",
  "key36": "4hYdHtm4799wAwi36PhvCc1xXCfhF1nLyVaRqcCg9iKMgzkPn4tqmUo2MQ7Q1DFDfsddHDRSe6DMtDY691TQE8cR",
  "key37": "4hTfNPhmftkN3Y6N2fWacBHFgSc4n5uLgrmEamDc423m7SvC1sQLJQWo4E215wadaYNcZWc1idTcg6V2VzYh6Xe",
  "key38": "3hXEkBWaptLXoAqnFZ1koHvhUm8SKjfUma3rUowjKZs4Pn9jMvEFCmvcUswBQFZdn8sPi7gLLXCxH8rJoXLn9k83",
  "key39": "3ND3pH8qzRk98eYtiNwse5sh7yzPnX6LpwULiCQkES2AdFNtxFgDbgM3ja6zhuzEEnVxxwDY99LSfgzpRyc2JhyC",
  "key40": "5CCWnHZVxsfdzqrZkvR2tBeyFJWrCqiv5wg7WpmWtu73XyCzErviYQTuWkcze7wNV9dGz8zFtuz74yNwFkzxL9NM",
  "key41": "2G1CK8YhnjDmmUtFrtjmGD5N6nxCha8XCLhiSVwtm4RZ7DpP9rsKKasYahDvdNy6EGgT35VHs5Tth2zTBQEhuGsx",
  "key42": "3vbuJ8uGGBFHf53zeu4nZg6XN347vTqyZY31118r8RY7pxmNP1KZHbF3G64gKqC8JnDt8SFdeNGxFbDWTWHt2hDh",
  "key43": "2JLJfaARfHvu1Fobih3zXcLvuSYRVR2s8FJsEiziLb3KkKQkWLmRSAWtuZZtZudrcC6ub1U7TdK9RZqTFnzi1Hun"
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
