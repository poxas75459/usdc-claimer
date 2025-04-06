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
    "4HvwBHzPiMhL5UJk15VdyKT72Co5tG6gipmAQk6q2o8CcWfaR55APznAMZ4rxMy4KzpcadKzWiWXSbC9DxGfRBvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PrK5qz2c3CaRhjpptDbBfSFF1hNcLx3ysipMQDLBGW6hgA92jm6wNbsq1sCTgEE7Vdj3gwAHgUwoT8yfeQrdsdv",
  "key1": "4VJWJARdgDBEHTgNdmMijeHfoTELeoi9TsQzt3NxanJ7W57Kra3XhWB8QjtbBRXaCarkcUQhLGLFkeLif6zrMWsH",
  "key2": "4tYWqXM2pwmnvNwLcyh14pyaWSUpdS2aZfkHb2in9XC97Sn3352FgLmm2mRD5E3i9tk7gxxuKQQVKiPSZSEwskw8",
  "key3": "2zu1jSozvSmHE73ioW6Wzscq3PubKXHfZ7vRQvsxYbPUMgXGA3xbDLw1droe9ecg4wvEJ3BGSm7CQkj8aT684JJs",
  "key4": "2PARrLXJKFtRXHhJ9p9kGcAdGxMNesu2v3vQiaoUpfz3jLoJGGK1AARUKWFiXTdcTAanCev5a6qRFhxGm4DC2tFV",
  "key5": "HnN3BBNEBLft7dEozYiYiNUV2kF4GxVBX1atzZ8FXkQMkNE2wQg7NfM7ZV6tPDpStfksCMQHTHcr3A24WrAE8Fd",
  "key6": "5S2HZYCayirMzoEsqNMVQFF9i7zzbLTPNZuL5RhQxoCCqM513j66tV26WBXdJN96iNQrS1fCjqFVHJmUrYUdu1qy",
  "key7": "56uWaVyvv5srGtVf3iLTYv9RZ3uTBWtN7zeZKjFevzMFKjeiqVzKeqxesLW2PEXHe9CAMN5brUEr8JwX5BF7DKeN",
  "key8": "5VwADR8v7wft4oT1cYk5Mw937Tct5mK6HwXjTiaoCXoKZWKLQpq2raoahyg18JcCrnKJ7S4ra5EM81fb2m3Q3qHr",
  "key9": "ZZetbWGj2A7HrANy6gmEThFHu1zSaRzX6kYJfAPs4CRgG8dKT5BKoAakmF4o7M9p3Nay39eSLAXHaySP2aw5WWK",
  "key10": "5Fkh3D1w27fXxudZWD8SD7LTZRKxaURabjTPRscx8pQ5eZzwFthsSF3rjhPDFgTTvHVuNEoPgpo3MvPkgkiYaFkt",
  "key11": "3X1KbKmfZk6fu3irHhj8P71AZ3Caax1WEuS86t4cMbm1hRBy9eRovo4cbgdys9B3nwELvcsYf4X88X946G1M12w8",
  "key12": "3u5Wrv8YeHt4pAzrCioFzLwdRiYK7e8v1pKdWrxV9ThUkTES9WZc43RuCyfkc8HCwngHA7HgKBv97zmTCaBhv2qE",
  "key13": "2fzkGtA77eMCbZpQgvjuXvqSYUBdVYtZ3PEwZsCiMXPU9Yjeieopdn7pUp2RDs4RGAiSetsin261A3pQU2WWvQSo",
  "key14": "qNWswJwbh3kJEMwq1pksKjf3PsHz4whuQGJ7g6kw5nigzpxtwWFzarsJTmDpZcdMdgdyg8bmn6Xw3cLGxGQNp8n",
  "key15": "35Sm68YrNCLwDp68zQ5J2HaF9T6kH6FsbgcHT6or8Fq5jnzj2fkrvtNEk7r6hAEYQ8JEAWy2PQEz3iXNa693p3Hv",
  "key16": "658hmELuPXxwEnvqy5XAiJx1en64qiACRAUBHQkhJ8ckkNvumXKd1B7n66aiQX9MfXhjQw5PVsSamayKVBgbJicq",
  "key17": "5gxNHJD4ezjQvnPFmMddQBdGfu5Rqh3bRaSeuZPjJxf8at7XziP9yNMpMzCTGHyH2qVf3LGQsjoYJiWhSkLveXDo",
  "key18": "FcXZGVuzAF5kMhEJQZYevDQtsktP2RXLA4kAHRwv3HSDeVBJwVSV7NsQuihb4wimniBYyeCs2t9jmGmxYzdAYvT",
  "key19": "2Kz5J7fgZbshJCsr2XZaEJDijjJsjknjn7sTeQaCBaoMe1xMGf4kdx4xM69arvgvTsCPUtxqLvsk4cJJfi6mHKKQ",
  "key20": "Ac9akXUZ28JgrAPFfGb8DER2eQnntR442H9kXuduDkmfGWZpH2DkfKwxPabEYZEXZDPpsEzXaJpn1AhTwWFih5P",
  "key21": "3wvNq77AQuUh8FCAntvHqLQYEdFJXhb61K6Yb7pYS162o6JV2fp6WdkdU1wcL1TN3o5nLC2XUDKFbDzJd5DAZaCL",
  "key22": "51QvXGthpTftUo3YMxvYxua9y9ypKtAmR3AJB8VXCWMYJ6tQuQkSRHFC6Z6dKZ4bwDB1jWKWFDbzUeDyuhtFARaA",
  "key23": "5BMd8SGyECgckwAmayqypgaQNfpS2tAWoWrwaqENDBh5yRiogiDKpPdhWJtssAQ2PEnW8oUgn7JEEJwWp17udrmh",
  "key24": "nvaCWoon71PSDBhVwDfWm62ArDfrBaivf2MD6sawgqVbM9aTAyDcpLFE2scqXuBrxfrCBC35Wwq6sPzmZrNQnSz",
  "key25": "NiVq73KTypkejpF8HhF4eTUjxDUSVKFQBKQmBkUjwpCjgthjduCNvMC86aUZUkRfqxzT5aBqS5iDKCKNHBGPfqz",
  "key26": "5YVs7KPHa9Lrde2WsgkqoXRddhXbm161zfXfSnPrUrVdkd611NLmPz1HXSm8XEQ6poCq83oNG6WWkn8dj7yh3YzV",
  "key27": "3exc5oSdprnugQQmxWHPdKMo5zNn4uzKc3kJnU2er6fvFAz8SuQBB5gzLSsv7Q1rYDNwThjBsVLoqVcRfh1n3zcT",
  "key28": "fp8P6aMyfLupNcLykxE6odbBN37QkfBfQFnau1XEYPkHTQJXR5em7jt2NF8jV9CaVk8qb1dAUmJhbpXA9uGv54a",
  "key29": "5PgdLs7qLH8kHa5JZNMxWXdcHCfuroVksFwQeUuMaT2QBKe74HJGu3jGrfPG1r3eY41kZTdZtaoR9pGUDXrysfPe",
  "key30": "2tYNR4ETamx3CfLJF7FkAyJtdgZC61dmctBKySiSDGtNvRGXKXtezdZPFT9tN6iKWmG5QkqMAqSXkYTiUnVRmtk2",
  "key31": "3v637iwgTVdUdqSDuSdwtYHyqpDKYarBQMjsnfLRGQLXKywxif4cCAR6RBQwpeh6T7vEXzVHVVtkYGzVqpMMNhS",
  "key32": "dQVuanPFyrmNcyhKWjMRcRRJ2PASeBWbWCiNYUYdmWNaRm3nnQnpQEDJax835ai8cRe5vG8g8t2occn13qaFp3R",
  "key33": "yK4d2ZDsRiiQRFC15KRyh9qSJfp2vHDwa3wLdCHMyyjTnGPfNujL6GBtwAthd9BJkVpCBxkRFdMj7suw8hU6jBf",
  "key34": "4wQaQ4Hro2bpgjEwtseJn1mCHc8AM1D4QHWP39X2eqj8pnrz4nPcba737BnivuMYX1qjr7F23PN41NL1sZ7FnCwa",
  "key35": "23pDzZUWq9VmVQfP8wBW9q9poPRUhtxpkiAsHoDTG71qDRAtkqkGhdeNu7i4ntWrDkSVu4DAFoeKiwJh2e3phbhd",
  "key36": "5qwahiZ9AdNzqkRE4Q3UZoPSSDXitGbQ4k3zw8Bk6XhQRPzwk96uZZQ9XDYcqaSdS9xRF1W5pUkvoBXAhSVwXNEG",
  "key37": "2ezzR8kXGQnqmwvXUgTD1vuEPfjxmfDfeeGgWyraKvEWPyyEjZaKQVn7UnNfDPQTDV89mGKP6Yq4uxp9Qap7F1Cc",
  "key38": "2RwFzMgTcjYQYwBSZQhwmX5Yoiu5ms7fsA1xTfF9yvXqhqyifebSE9rKS7uk9XR2VptqF2AKSJe3gT3vy4cQw7my",
  "key39": "3BYm1Z6cJnmP9EqcqGD9XYzLpioGAEgehiHtDXsLksXGLTiSHT4g7mpBRiM5xbgeMrKwtssF7NJYLAFnF3nY6Deh",
  "key40": "36guGdJH5B3bqF9NXtZMc5Yrisy3GoPLUgC6tP2d6a5ZM5ux8UosDzcfFex5fcfRsTT9aYBauZpfH347mGJdBj1m",
  "key41": "4FGGKnsNqbsMz5fp1u2cuncoCarnQJ9UzkKFpjoLkAjxW8FdxAYLRLwjgxYaExt1rGG1wjhmRK7t1PR6QGXmoeY6",
  "key42": "fhL4Wo5SmRwciHjxi4z8JRBDe3wsiCpBWwJ2acEB8EAZeyL4XSmCHFCfMrpQhfnEdG89nAVf2smUpQPAvypEgi6",
  "key43": "5B7bcB1a2deouHhh71DPXuxdUdJaqYLkaVkVkpJp9pFCNEpsYKYSJh8CiQ3KV4j1iFtoKXz7gGdSFZqAnNKD6AAw",
  "key44": "65LmZEc5hqs9MdKfjLeVdBr9sDsiEvUh9pRDZtHxcMhAQpRFgsp9MNLFUqRkEAWcmt6mwnKkyHwznxro3hqpZm4F",
  "key45": "wBaCEm5aTdagruh5ETxG39Woh9KuLCVtsEthisZGJEwfdwqkvTxazJf1XySout6G9r53sw4EfwHCRkvShjaWsrV",
  "key46": "5uTitznzReDbMMJ5xm8v4mQHnsQFBTUKrKZfGMTN7amctnEuBbsi7WUJafQkSWyBQYRqR2KZoZDR9FVu2uVAXKnB",
  "key47": "zB55Em559pdbeDNtyJwYiH76CzWWHDmF3yqXqMGN6hz2WH67FF2vA3pRF5S3dD867gJRzRjxePNGR26SKsbC8Xg"
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
