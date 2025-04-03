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
    "TbYW24jX71DPAJnR16Ysa5rUsx1PP3HL6gYyzyPYaWsotBMuGnAnvUCB344fChwVobKQY3ADRZkTkH6PnPHV3Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GL3SoWtjnN3ENMYSfsL11WeweFZQyayWdBAB9NxKVRKGBPFwttAMbg7Qa6iCtE574LoTLa92AUdS9iXGs6XTxHo",
  "key1": "56CpqBb2cAksbpKjZLiDRAVcTWDuYwhmi53uQyuZfajBaqNvGCLRo3aQm6gAnDHp6TPzmT1j8d1mNeZTZKbnR72",
  "key2": "gbC6JmLrtuKCdPyLMiQiALNE9z3xHzPkRRV9Q6d2oSWNWffnQqatefkoouwhhQRcYHEYYr8crMFnTCYzsJLtHho",
  "key3": "49kiSoL2TCLHBsEhyJioamwt7WKjhdUXEZmEHprmaXUZF7DUcPaLjbRftbAjFnaAQG4EwCfA9ySzuZyTvmg78vP7",
  "key4": "5Txj6NxPsHAPsq7xPokVcdFySBRc39QojHUw7F5Sk8M3LLp1iTA9k1jQFZTySWbVKGuZGJEQCDREdLXW6YSYk76r",
  "key5": "4NtF9uebNHA2ZCAHEWyVC2fq8k2QmkWZnNejsVzRZBYx1ge4BTgXJugGSRo859pFzBctZ91roVwGhjyHCXykb9y3",
  "key6": "KD1nWsXFPtS9eYErZ71Rd752WRxeF2meFm4BeHBGcgoQxWf1Um9oEqfvJLsQ9rzynHG5DLDg2i37yNRtMEa3efs",
  "key7": "2Wi4hBp8gvfnJ3HogjxgdbkZLtTMbhoj9TvUmqNETUbeJfr1o36E7BZwzUi4wFuXZqwA1brDCBuxFtdckxDXLvJs",
  "key8": "3tr84otVRabBKqWNRtVoyfSn7XiamNvhB2PgGpsW3GD6KDZYHkV7jEUHQqtgpCv2acsFzEaCqmyeY7FzogS3wdof",
  "key9": "3XWt95xsyCT9LE9SewyBAAiuAu1ym2i6ZfotJP9Dv96XcSkty8p6Yt7hS5qHNfbgEW8BpxMqm4Ft7vkTFu3B38m4",
  "key10": "2S2bF4RM3wgvxutGyEpsgn11WePi3g5pQGmagXZmkB8fN3JVG8WtHCbBS9TviLbwpaCpf1iWH1MX2XTiNsmNNZKP",
  "key11": "5rFXAfBDgULGs3VWukEj7o1FhcDo1CVJbKLVRaw4ZmmV4M2NEZGLxJqxZaQjGwHeQzwAoL8FYoSyikK9vusPYTWf",
  "key12": "2FrL636G5V3BTzoLfoVzs3NreQpseWL2TcLmL4mwCo8eQXgpkoqkvAH6z3kccgkHBJSdKxt1yrmRgWxFLy2qpf7d",
  "key13": "5A4nFpRYYuNNGjmukxJV8RPih5Z5nFoDQyvxuje1DLmnMJ2zxduwrQERmtnuXA6iFx7vtP1yqFGVARCDQ1dbJBgM",
  "key14": "2Ub8WKMzTws4Ra4CU5TqLwwz12YyZUN8EbkaQ11teHFDmEKkpVSKjRE5w6RiK7KfazzRtuS3T1n5PuroUZDiaMyA",
  "key15": "3SyXeZeP1ooGtwXNeBsDZ76358C6G7iu7Y5cZ8eTDwtgHvZkek3XmEz8CHd6Vaw7vrAXL7tPYPfPWVi1Fg3CMjWb",
  "key16": "3RgPwmU1kayFYm65QZfqoEdCVriJeUbjxn3JHTCYgqNm8ijYLg817cBrK3pkv9MBCo2Y68sTJ76q4n2edPYNtWoM",
  "key17": "4XEAbZKsSgsrGVFBzTjDeCB5iHnjsbXaPSEhFN7dsefr9pLSkUWeb1suBVaqxUpqgh9R9b8JfATNHTaVxnCHB8j6",
  "key18": "628MK6gCa1GhK1U61TivsGP5CGf1UNSYWK3mvebSrddhv6i79jKWFisSqx9XsQjLN1Puvbq35AC6rwucFL7KpigR",
  "key19": "5aWyto1kjvt4ndaX1cbZzi2xXm8XJvsShTGEvhybVA1Y1RhLb7naSfKktpyLjGVeptw34fnkEVfGYe56iX1u3evX",
  "key20": "4vPZzWedEsfYhkpW4iuVkTCeAYUsYMbVpUASgdgG1yQfBJLS9pPL5RztuD9nA6EM1KDW4x2TbucAnKAL6vPVWKsB",
  "key21": "5aQg86kWvvdKBqFrxhAz5wtiokMuPQ6eY3VEJ8djro5aTWKuvzq5UU3gxGfzYA4NfM71N4uJueebhUDoTPnBMjXE",
  "key22": "2XHFqLMKBJLs8bVDMUGcnpeBdZxkMRH5jGQ6PaFqtRrXa9sW7mvhUib1WLZ1wgCRnx5RgXcpg2V4s6f9BxSFy8qw",
  "key23": "3C9AJ2CaDu8FgcPPfgNiuWVioFoUhqaPAL8ADFcCFLPtadWWtiA2FWG1o3q3QhtmthiXuG4TKeeUXMdg3kc5vHGs",
  "key24": "U2ykMLBmdmppq42mAGS3DUA8PpfxpqFGf4vhpXCuvJuZc3uSLRq4ztVcWsQcvb69qvMxXRbyLUVHovM9wwwCmEi",
  "key25": "4dydNmFxUuwMjriTrhCbnGRvV3221Dt8o3DzyNdD35dwtFNb8N6C1ZSZNbpv5WRqjzxzUFbfDxdeyWjmrh1FrRX1",
  "key26": "FYSvZNY78Gjsntog35JFQkGeGHCszgTBuQNQBQkXMcXWCVQgLp61zGM48DkZtiZk9e84D1QonTj4GMp1BJhjFPC",
  "key27": "3NA67geurVyJfMWPx8tENKzN9iREgLvsgaa67m4W71LGskUieFZNGmPJkdYSkjVZ9FNWQwR7dg48rZ5SZ6zt2CX5",
  "key28": "3kUTZsuM2DK9VAJ9giwY6rb97i9mE6PxomL2gjCGTQiofA8CS1jm7y7vfr5Gebsrv1rDcXDhzwrfJBrEYuiAYUAW",
  "key29": "4kLLNMxY1aJ8LTAKC4FJfRUupq46Hx3ejTqyPkim9UWm7VGGDExu9jPryadzuu3nTWFkHym7GZkPD1uhtLs5uJXT",
  "key30": "636fUzGGQAXE6wq9x1HjhxRQPeo1UP3SsokPRLavACdp1fKuA4qRcGPxAb68kJNA4QbZ8JtWWG11GPcgLEigFRYN",
  "key31": "4qwag7NPQDkC7g8oD56AiTpnoF2zxRvJYkuPjPLQZdfcgow7sesa8cSvn4rtPBVyPeJV5vDwsfgWK9Zz9UwtASdr",
  "key32": "48L85KE9BZQ4DcyxeWdZzi2tJb7QNSArgrfUxxKXdaifoqFE83LW88jB1BjM2qtfsjDiatkWPsBH7xw23SaLDbkW",
  "key33": "3UMKYEauuytE8hcREeAZLGU2VbmKpimiPoaJUxrP6dkrvrNfEJ6uF6Eh5YnuDtJaQECdTjVi7KeWaY6pSCfhoVf4",
  "key34": "3jLwWy6DRSgAaKqNtfGN5k6XmTgZxoeQEcE5FcJ5tFGNpoQ5b3N4DVitfuuS8cE1nce9u1P3nVKs2vbUPZK6Xxex",
  "key35": "bHckAjqG2Le3EYW7e5k9MTQTinShKdnY8YLQnKpekCG3LkL5Hqd8zUfvUbShHLzpJQxEWwk3YYEGnJMe22QH4AN",
  "key36": "4a5hoZSMPPRujmiFfVdVFbpC2L15nhDaADQUaAY48MvqmAgZ8yvZwn8MKi9b514mTKnm9FXhhxDqGXzbnfL3UpkG",
  "key37": "kCpiBZiorE9MnUBe5tc3QvgDYAJqSCV2DQcDC5NGHhxnoVjMPjBsYfL8amkU28nSpazNWycQJPUk5q5cYidijvV",
  "key38": "4oSHm5cEv8sWZ71doQr3bfMvrNzuJnqD2aAoA785XhwiyFZz5owPUQ3tfGb9ff95SHz6NSBXkx5JHiRFQ3mresN9",
  "key39": "fmkR6huCFPqFuYvP1ZbBi5EjG6df6Cp8FtmhQgyDmTacELj1N8qkrxEJrnA1Wa1vavwHWz1BBLh9NCmwKy4pcsm",
  "key40": "3u4J518bU4TGZ4yyG88pobdbRn6hyiSC3qsVYejyCVvKBonmVmgR2whQoewLGAxysGRNWDjAkHahtT9wyHwJ5PVu",
  "key41": "2ZcGpAePg9TZz5oh29Xu5k5CooP4XSNg6tQZyqx5L4DsHHFbWrLStMLiBTQemUDXjddHfhEW2C9GucnUgXeTwKyY",
  "key42": "3scMqGEjHAyCKNB7ue8kH4bqMLeFq1fLRqaM9YjimeDfMXcH579qDRM1CiLa1BNnwuHMt5JFPz3FWHodij7vRnLz",
  "key43": "31yoV64SVATt4Npx5BAB95Syb4j8ZKSNUuUxRZpXWEE4uGXwX9dhC2hc8jJjwprAS3ctmFrsnS3LqgQMSBGqABx1",
  "key44": "2uXqASEmGzZPWwexvyftTgM8PwKgtkHpbjvSpeiRMsWYTJuP5UQQiwTeHbqXZi5ScNmDAta4hq9dXwRPGhrtgHK8",
  "key45": "4NNoZSfa6i3yi6k5H5TdYDjA1LyxWzz3JNfdj4ZSPwgmWtPf6KTFUKHUD7ysbp2Cr41AFooRGWo5SJV5gif3vQDo",
  "key46": "26qWxqqEjcFhRi3x1r89MiurAnVKYR1vMNWtZcmQRafxKNhMP7PN4vJpC1QBiiDPVgVqB98tAn6EgeUXry22seD7",
  "key47": "3Mxmav6Q3SGxz39XDn5CsUDVBVDGoLz9bnpTRHfQzTHHGRzUERQEUVg6bak5S1KzvDr5RAdu9MyScz2u5s6zu3fN",
  "key48": "33WDdPNqng3hxD3CHNFqt9Kc7BtNegCUjWNadwAq2mbpqdBcCXx5DftAqgfiNShHBKjp9vU665JymbgSqDWfzLJN",
  "key49": "5H9sSKAqNoLNFzonbq3Y1a4VW9U1SXjNrcocqyXSS3N1WZi4CNAEaUY95KEndi53j3qEKnrEbSoVJHC8r9VZkXPN"
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
