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
    "XpNt6o3vq3MCvyp3D3RJHNMMoCchS7KdvV4bbFr1WrSw98LmBXAGkr2GmX9wC8ZAwvdhUAQU2efnik6TNV4QGzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pxDCVxnQMxLGdEX2Hq8oP3vTugaiBpdh1qkx7rSX2hxDC9gaNakrkXHLrkekphGwn11ztwA86yBxsvsPewGqt3",
  "key1": "ZufFisQ9FBRe7sbvEACcyK553rZmwETqoMdfD5RPEY3gzVfTDgY7nxg1iogJFT4FvLK6wkqpLkb5BzXPTqoEZBs",
  "key2": "4CxJeaBNuARx921tkx7hB1DCpyGTMEUw2x2UtgJg7KquGtshmHxFSCf4REqb9z6XncUor5zMMGzgRSmzAEHipMHc",
  "key3": "5Le3usovYavqzqibtyxbiJPFf9u1k2KXvUUcY7ywRShZSMavJNgvC7s2wHyCpo8yU5ModCcYX5tb88VQLakzjEBv",
  "key4": "4nBwvtjYxmD1CbfZaTv8EkCZZqN7jeRvNNynmgs2Vg8bA6itSL7xU7pgZQzDdxoqRuUUMGtkkucgcn8EHNbymQMB",
  "key5": "4qWwVZgLCYfthT8B1RFJszymkuivBnzxA6HVm3a1FFi6PMf6JVwYk4tWmxegGWwnikVHhosgGeB9BXh4iKSQoBds",
  "key6": "64q83yuMdS2tQ6xBNZnxiNvMHR788NcoSYLT6D7bDfW3KN3ysx8xMNfkTkY3BxZGvi3Rx6mZpSi622Ki1ru7HKxs",
  "key7": "38Sn9pRk3jEoSeY9MEdjzjVbzWAwRBqoU9S9tfSr68LEv7CbY6CeDoqQD5p7tm9R2YCwU6JaJAw3UHgysVtyCn6E",
  "key8": "3bBHHpFBDXa3NnWD6gg1kuBvrHr8MroWjzS28G3TLMBhtBCs2YdDHLANeoz3GMx9ydUBjSyMhCTJ4ce5YiHPkjQc",
  "key9": "2CKVUgrhxrERBP8vitQ6Deaf7yWkjKHAW1rg53EjJXjEt3xucu4oRDJh89xisNm9yr1xt7YDVps7xuayEdM5d9aY",
  "key10": "1y3Qy1Mba74Lf29DeiBFEaKbeECDGFmkW792icurwtSSihzP28YKz7h5mznqNXihpqELjuqd9q81ACtPRAGHSJ1",
  "key11": "2bfVdBN8s2WWriR693DCfvGL2u2QDM6PrbTaKDtWedHUH78d3XAba5AFXF6PmNPnQvB8sZHPATU3zPFW3A4fwhfN",
  "key12": "2PYwnvafiiHck8gE9MqHT8DsvgsxLhoom2zFaJGoevXiTCmvmuPH21mxSLkDrrHUbFdMxpsLAM7bMV894Wq5geEo",
  "key13": "4XLvQ5hwpVgh5L1LX9BjPHLMozbqC8mA23j2nno8FTog4wt3MUHYkBvdRakQogovVq4DiRC4YPiYUHvwdTdk1tmr",
  "key14": "2qySdextHRqsZu1GWu7zUWQ6SAq5EHBrkduzdUu9UW362mzw48yBfwRYuiekEWhL6iLD6iBrVQ2q18W6dvek1BU9",
  "key15": "54Rn77Q14fgYSiXELQW1kuLs9G2TjAMwinsjsyXjafppTbiQDKLHN72GatTfiFgmLw8cdSD3R19nsbyLf74cnHh7",
  "key16": "4WFGdyr72rNmmHBoN7PRg81vgDoeW2sygCqH51AUJS7zkguBsXW9PW9fodVEQQvaBVcXWDMGKgxjQMc9XGTykYpS",
  "key17": "TvxdkSeQtkDbGbwUiTardXwLRyYwNKBtiHfJZHFqynW3HuiknNgrHFXoDVypRcJeEGYTYCaFU3XBCvck77emrRe",
  "key18": "2piZJZmLBK3pYawxsyWzqBYigVv8VusFRB4Hnj4MqramCDvT1EBdw9dRUSSWmGsiTXjekrEiLNyyiyGiDucfS2X",
  "key19": "57CMP9Am7LdmyqVBR7dzu2mS2EWrjtPWXBKshJWKuDtbwr3gmrex94ScytPdV9UDz6bRcZQKo9AaAf7sWpHxnj8U",
  "key20": "4QqyA9dTXWs8qUBQzyTKzLyGRiiBZgnj2YGFpPsUGoZxhkwPJnrQSVhM7wZ1E6yhkqXeuZoiVUQ9Ug9yocT7Ypph",
  "key21": "uRsHaJkCuouiZcV4ZSZMvTQ3km3Lz6goWvFLegBqbCbUymvKxWWLf15QKNwLW6oX1bfFAKVGX8LR3rSYospL4j7",
  "key22": "3WVQX9Yy2PKXUUXWHtMd4wEgEiVozC2L2o26q25HygQz4sLtFYBkcszmCzdDvA8rnZZf1JxBqFh5Tc3m4Pv5puBT",
  "key23": "2cfa685TMYtswpzCnUbw79kw6va9fuT7Mif5kKKxrbKeHWmVQ65vr3xqELJt2QM44B1Ysm7PtVfA3FZF5KMP5UoF",
  "key24": "37C4HyiGpSyt1HgffB1Zw1rPbPbvKJtR8zC1u7DgiqrfDfR9JTtAXDp2aUvCJiZEeAkdrG2bmZPiv2kADt2p6pSx",
  "key25": "5RQLktsGqV2svW3URkU6zBDdVGRfw1TpypcK68eaN7vCXGHFDkJ5A2Tm7xFS3CVqTnFXfYZ4ZY7htiqXp7y5HR87",
  "key26": "3nYi5VzDPc7dj117rGmV53P1C21TNoibB1M1tpzuweSx78cDzPFaBrwpm1FHWdpUXzfy6d92S5Ree1QFdZezrM1F",
  "key27": "18WS4CGyhtv1xrfxZhRwod9Jjgd8qprTDFG2yJzi18CF3WhD4kFTobGgar35tdPzr1ncpn5RHi5FtQxKt5sXXMs",
  "key28": "3LrMnjyUG5bvDvZ19FhZ3PhWjAjMU5cnJ6RFXWW3egd2SJd6GC4fRRi5bTocYYnjKCYEb49DeeGhAuckeprgagEP",
  "key29": "3Xq7hMdyibjmrYUkcHa5LAeTNTSNPD8TjBCY2pTNPjDtgudcrAKGHPzZSYd4pg8dkifdVLRA1womzcVCfWQk86YJ",
  "key30": "2adxDuwSTkejDcioWvRxkLnXeRZ3opgqmBRg4odxeq7wGgzhecKMzcBCr6mSmM5sWxxaXA8tzBes5Sxjxkrqr6Dy",
  "key31": "4KkKo5NkxmM8dF5nrHnkouL9aGyJuaanhDhGxe2o4PRNDVhiw6aZCTSLCnXGKCDoh1KGwy73QtasDfsYGFtXrqKc",
  "key32": "5bFergxoFfazyZznhHcyUBmv15qW2K58Fbzki5bEnPqavhzdxvygxoJA7bT4nJjg1EUW1vFsXTnbXWspJ8se7KEu",
  "key33": "2ZUTraaZVRzahXjPrA7p72Ybp3Z3aoVHNQ6DCU3dhrzJYhoE4fNzCEWwau3HBVa54NnwwRtP1zBZe457ZGJzLTh9",
  "key34": "5S5hMUdM3ea3rs53TdxwDWDP3EbuLGfLshiUQeeiqGvC2zmPE8MMwebBUT3dgZeBQiTEbvMjqre5hGdxoMGj1VHq",
  "key35": "5LdxatmhXqF3y69PcX55Y8TSuFDp1HnCWrtQSbV6uYkMPXnK8VM1vCpD9oBSmj2vJe6QwgVN5ZbrZCDgEfuciRHU",
  "key36": "n5o6iRHWVZxYC8mjJofBQUKnGLSnuSa6J4ufxr5F9YUJyjPCHScJbATNUDA8ZFnDAdPACCLFQRwstugZqD6Xzn5",
  "key37": "4UdffVK1T2rgzPdCgpUURkuoBw8qJAMyqBDwyY3YHG3f6nMLMe5e4DmmjNS8gtugAMBmAYm6R5CpHihSHeMd28cu",
  "key38": "41ZGbRE8Q8DXbCdbox2wYEMCmqA8e5ggENW6X4JazzGW7xDg5Z5FKqbDGuFw5CaNn3M8FxHCa6dHq1Pfd9rDhcXp",
  "key39": "5x1XtnuAwNAmVUkWaqB3o1C9YEmkxPrnGqqXQrPWCPsMCq5yasJWv6r1y4TqpWtw69DcsN75amCmAH8Gz4UBRr6i",
  "key40": "3Jd6Uii6WPk8FzFT5ha3hEX8XAaMVhZ1gEzzmgozP7XQA7rWFZEb7LM1UmfL5ShRrke1HtyDhyXuvmVwtNPKpm6g",
  "key41": "4No8ejafRLTzPzToGm8bnSBFR8AVPw12sQZsAWriJS9AmmL5Kfy9bigJfznCnCgT7FxyCPeDnfiS9WSatjuksrjC",
  "key42": "5iZoq6edC9Am6H9dQyx5twJTc65umPwXRsLm2Z1YxvYFY3V26P3qpFebThbtQz46RtL3TNvT5HJCDTjMYsBc8YFt",
  "key43": "4yWuRFYRQk83SbJgLyxgfreQz6xhh8q79HxcRkQxXWK1oxm7K1xHyXn88JN6sDNQWcomyTpHC7RNUEWyH4NYWB7x"
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
