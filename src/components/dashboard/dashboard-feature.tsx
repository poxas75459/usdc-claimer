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
    "3wnZCH4zs5SV1FPL2xRb1ubPXXh9rpebnz7ZGjP3yVdobUJUAauKegFm7rTCeBLS8yKZyHfNkitjisew1DKzKbEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2go5QtTTYJzrXXKz99P3ATL4J6FLjrSa9ZxzwByGCQdBNNUcR8EMv1GTkJaFHuQZatcC5ZdU2hJgkqeYXpRcesFn",
  "key1": "2MteZindrHGLYEg46WJJJawTf41ohwStBM7FCvT1HKoQ61zWrAq454fu6ZoX8hoFieQKpAPu73N8Rnor35fAh6TJ",
  "key2": "3TuExnhPzbdEUGShSDGPr2SAzVqZzfZ6yj283R8BzyjiokWDPdLG1UKnD3jokQW7Haa3FTSMJDCamcmgyW4zs9Vo",
  "key3": "2tKPEnGgPt9HKw49uaUyaZDqYkfZbTE5VrAEzHRx8LFWewvy46dogHJ4YrFL9pJjxJAMXU3p2FbaqYKVLC3u96V3",
  "key4": "md2rYg7736VciKhAVMCB9i8mA42RcoZP7d2Dw84o2cENb28rJ3weZ2GCFc8PB6vpxSXSgX6jJETjwrVttPTgFu7",
  "key5": "4F8mGoijnC4xSPW5WSnRdcvXcH6YLmWpNZb1YKtTXBznCkaED5PezqXg6Lqee7GNmTrjjPgU56y4Qxx3L71mFqKv",
  "key6": "54syqqNJyUjh56Ppvg1xzD2gG2UTyBHLY4h62f7gaczQeTEqzvCFyW3tu1zbgN72VhBKm75RnBUJYmPQAqRd6ZJw",
  "key7": "54xdwMDXFf9d9DwGkQ4EPwNUuP3ADhuPmWix8UwCMuKMFVy8CdPEfuEVtskZhbyNtCgFv1PhBXkUzoUPGDhTAhVN",
  "key8": "4dSFF1zwG1kmRdExeeKZw7bDPzZRmBwntVndH7uF9FdWhGRUYHruKR3QEWUSkNmfh7iTYA9f6GdHsutKkuP2LQuP",
  "key9": "21ySzfstywoYSzsLftsmLRLwq58PYbSBCvFo2oCHhGZxcN55Tt9LaiEwKUTtzdnqx6NRzMRYnvusu3NHf9ZjRzdo",
  "key10": "2g69FyqhbhNLKny2vCNaWxBMUHntrKaHaot7xTQyPj63G2UAaKJSVrHt5YTjbifGkVs5M7fkeJFsuagFKjbg8p8M",
  "key11": "P9naju5S4S1tjd1mZmaWDrCJsU5nbjowGMsVD6eo9YhdU3fmxYKgSRJ6mAtC1Uc5TmoczKbxuGiDVfEbUfNnFho",
  "key12": "3JJQGsPAjNhETCrg2X1uwK5ZmUR1W55LP4vnUXc3YVVMbrWKKwHSESg1myjTnmurjA74GJD5bbYN4Btan3jfWwYx",
  "key13": "5sqPRVf8JUF2HCfzFC7HbHBQzG6jNVLNJjJS3Mg3pcWQSmVV7deieyUCMbZu6v4EyKYuC81EjkaK6TmNQUjdddtx",
  "key14": "B1ChytNtxxRhQJQZivru3789J7g2f9Mbi6T8RGrj1a5ZEpNhUb8e5VwJDMJUyRj7zUmixJcF2SMiHvkEC6iNFgT",
  "key15": "2m3ycY3AzkcRhpoLvhLPHMXBeExrnYW8DHyqdM3XXSxFbTXd8NGatJPi85KQ89XNTUMYKFhSiTWgHwm5u2irvdxT",
  "key16": "5V2dqHZHwE4zyMsPeg8r4TEjuVhdPg9iftcK3BrdwTamtb352B4u3CiXby8gFii9h5Loji5hYWyTs7YbCyc4QjG3",
  "key17": "5tZ1gCj7NLnxPahVDMYA3xboqcnPxY44EAkZfRU8puTtEX1hmMyzsQrSc77chAVFM8ucFRaFtdLnKeuZFST77T3c",
  "key18": "49WatjqRNGhkgZrihNGx2894iJTM7S1LrFByrzvdRrs7y11ehr3hfdx1R5KqTp1zQyG5CEprhc95N7sEJYcxHHDo",
  "key19": "jHrgs1ckmd2j7t92FwcLTKd6PfyCJ1BJiat8q8fSRz2SP1vKLqehEYfoirc3dzksWBt9bcLm78VtyPh24aRoEbZ",
  "key20": "5Hw3GTvewJD6MpqDKFQLxgqcnQTmMepXUXp3miiKqMnCUefEjeDzbuVRLmxhckMueZZe488RtiDRpy9xEJ3aaHbq",
  "key21": "4MWAQuXbBwNmDNCirzBYo2mAE6EUrk2hw7hhfkQXGZKh5yTfy5ywYAHGYyQT27yBTPR8bTBXRCrh7u7gdv6SyDRL",
  "key22": "4Gc65cowvu5qwcj9ozpvbRzvJUYWoNygLAJkSxdvtDAUmznRwVmz4NCBRnVCp5RcLreKNAn54LMGSPtvSVQQofJy",
  "key23": "2ZfSMeDfLjT7yR6c8W2AJjZrqMgZGQyzVkd84BWWnShdnZ3qSD9trFjYcbULQLEE1JjUZSTcEHBWHuG6VTcRaxt3",
  "key24": "4BP8avTsjs95qD2dDvA8e2EfRBALnyZCkb8ebQpe8b5DZDwFuiRBmSz5nbsmEy44iwsXzY7BeoQopqcwiS9VCnN6",
  "key25": "39UyCp1JRtpmbAtCBUL99oCstxtcUELYdsBUgdNKgVZ8G2vqm8sk3qPLSSmEzbukgfT3azZcYptmfrFCTBhozhMm",
  "key26": "2wAenDdSGkjZ3JE4jT4Rady8C3oZqidac9mpv4H5XMcgA6NbqVhZUnWjr6g9zr9XBmhYNv3MDEJN2ZeZp5D5EaGm",
  "key27": "59jj77pXR8MoYMhQvAS3vecdZF9MtqKYWYLrCgEzUpP3ugGqC5MRKJQQMxawgAJgcfobGQer5w34Jp1tmNNkJkZn",
  "key28": "3adz39jdQ5V4cZx7s9XTmXyjgE9kQs2W1ffgNJ7VpZBtG66Y4TzfrbJB8GWqtx42ySXSa5dsJDKyKpf3ULc8XcKG",
  "key29": "4zUr7t7aCH6GBRqmoqKHDc4gdpLHhsiWZUhdyTE9xJJ3oFErXmAygkR4sYxnRnsEMjbEspbxMM3NMBg2sQ5mDiHc",
  "key30": "5KDNQ7A278hxK6pn5Q2Hr8WxiL4wA5VV71gjETaU4hhZz9SR8FcAZVt8tzT7r3uzAf4wwMbFRAZTskwCVy4Jv3si",
  "key31": "3YjvwepNgxCLNCBXBXPPKv2NdrpToKJpm6CavT4o51TJd7ULQcPYkzwZ5hRBSMMZGjXaB4rb2Mn2syzoZQk3otrc",
  "key32": "2hM51E7ByMcweWD1aBRjAerfkRvZhMV6E1szyzvuKCyCqoZKvtMjYK5VUYE8P3stm4SNyNsMPkCpDf4EFKd9vzBt",
  "key33": "2V71i4ddQnETGUCwpkxQNjxtofuWRZDdZFcdugWBa84gRpnKdQwtfJS5oiER8w3DbcD7QTSQmHDanKnLAmL67ZTH",
  "key34": "39hff3iByA37XpCMum267TYWe8ZR8tAiTqqxTZ4doFcDmQDKdCK4rJcHioPVVpnm2uhjhBUEpENF88tzUjgHqhVX",
  "key35": "3eftiMagVSVtueuSbF4bDrxoAfAxP1RPyV3m92JRiCY5sUkXnnCCHvPPnpeEFtFAQbDdNCN2aCtzExRJdpNXmD6E",
  "key36": "4DiQMVLKkrrs6jzE74m943zW31Xj5eet17zY2q9LNRuTDhh4wH1AUMzvgBxbErMD2EURj9Yw9cCy8UEFoV6Josh9",
  "key37": "4AWGfqrEfj88fWSTYkasdP5SWsSotz3qQB6rBfK5Ywe59cDF9FV9Y2cZihbPuQEWLbjFS2FtvRjcxemnhx5ogN82",
  "key38": "3MDkMhu99M2R2bgVjZhCPHEgdtiZAeJxHA8vSavyX3uh6ePogndN5dFSc9zUDcUvLppMYU9FotAmQnkagDXZmhjM",
  "key39": "4KYZA5mJ6fc5GDZmsCV95qWv17s17Xx9gA2xThHvsPQG4oVRRMymSARNDCHc49DcneUEWQCz3eekuiXWbFfTuDd4",
  "key40": "hT6hFe1iVuRNFvvdNjheiyfZR5gJ5xgUyefLBsWCi4BMEctHnt3D9quTVdt17MW21CPXUMjM29J3Kr6AUbuyZTS",
  "key41": "4gRXfiaAapgbqhDC773HxAuogtvRqTKwNMmkrTQr3fR38mwo7uK2vrNzbWBcJirv8c96ScTjxgqYVkSeMm1MGMRx"
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
