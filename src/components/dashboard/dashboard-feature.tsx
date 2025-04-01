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
    "3VJdB5Fovkp9yffjBihy51DCXzfUt3PW3M34w555u5G2PEgqra3n8DXHtagC7VyZhK64kcteuSMbtikyFpEbZZwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUUwMRgB12xTGHx788JbrKpMurGnwtCUK7wm8m7BeekbFxDidYPiHJuUqoADb1cyZxujLReP743XWjQYaoczFbJ",
  "key1": "2zdKyLQnvonn4HVRJJTKtt9Ap5hYfeyLXbUQ5SZE49Qr8giM9p67f79Fi6GHb32zrxvwFruDtSifUwXQQTYAfRzx",
  "key2": "4ybghQKwBnrjyRDguXRSx7LtVAteor9abYjrNYSBrFBDeuryGxkYnmiHwhevBcnuvocoes8wYJrep6c99B8rdzGW",
  "key3": "61FE6CdbB96JjGrYojTK65HtaTcGGf2rCvyh5wGUUnf4C8s7TyHCeLgaYmy9cFCk1k5soukPKetek32oJj93nRJ4",
  "key4": "36nvNZiB9wAMe7tU4HwEozC6RMh4R2925rLai7DmfsJaNAvhWm32GQumoZFrNc6taee1irhtCqDKc8NZVddeKsbC",
  "key5": "2rDUvAwaSM5JCiBnaPfUwGVZpywPvogPXdxB4DxtkkwjDuvCK93tyCbdH9s2kDnpfRDxWkUAVY5SgSV8JsqVoMgG",
  "key6": "2AaRHw2Q8jqinjRLkxJkfJ9gVfGMJspeYs8CJZtqrbeF9fGHGzFVyEXskZBb8m8y28nk5fii9nDmnULtXTcoLZ1Q",
  "key7": "kya6Uu2LPBBGqq1Ux5st8Rv24t6YAepgV2fx2ofXLd7yJknRqKw58wXbfWvtmP6HAWDjcVi5WsBe3LhVgPkbusQ",
  "key8": "d2hsYPXYcVEfjKxZr4e6hmizTSWe5huDBwdGjJrNrJNTkCUMsjjmYw9NvUVBs3TWwhdmEBu4SGAvMXF9Si2XnSG",
  "key9": "24omHDPP4DCk7WZi239p3nPrgsQRSdw72GGVT8Z9hyy39uSqZA7uQRRnY9nMcjUmiQqJdBDUi6cpegPTbbcqma97",
  "key10": "63mT9kKwEfBVDhAaBkk2jybCHDWJPMzfkX2xjkameFyUeu7bdPKA7QSA9FtvBfWYUbDNFoRetXsWePK8Wn3hmijp",
  "key11": "4kWb5awxZrwEwFqNBRytZUbdS9vBZXAGibaxCXWRdZ71EnuSK6MQgvG4xzyWoXuZML3Y7yQUbwm4y5YZnAWZd3h9",
  "key12": "2BrcX2Pewe8TsJXNBo2uqrfT4biAg7tywx6Kt1pbPrRzcPSF6apNP3xoP75gYmcVo6maqrycw1rnMMnghF2FBEL",
  "key13": "42Dt3pUUxaTnL2nKtjvchyhqQWuH3gtnpg2pnC4pPaS5udXWmgMqTYEXK9YHXofByhW7EKfrgoiTDv8rvzepN7JC",
  "key14": "5muPNL4FCXQhnsU5JkqvnXWPCFNMYz4dSSd3dLPc2Xt57B3dszHhKYrLEfWjhjKc2SzmV7C3yFqYt3V1GAjaVZ61",
  "key15": "5XWoxgUh9oCtmnTzRG9phrqA7mtqLn5qbDwspY6jLQxtU9J5JjsuQN8pGeKGoktoMsRFBGtdhBEpW8zMdYMjWcK3",
  "key16": "3K6jaaZNVGFob97U1Zun5AP1WKW5dawZw1rXwMvmjyimqEgseosrLdpruwYXbDEQTFsofrkc76rK9WuWzsQqsh5u",
  "key17": "3JhDmqSwGSMwn1o3hQV9B8dG3GmiCTPZjicC55dw449zaMx8hjuXLWBX9Vrz4QCmnbC1MiTHMB1GjQWfsWAahRUr",
  "key18": "4y1c5bvMfSwgJJWcjz2Gq8GsnmbJXRr8XwR6Dpgk8sdsV1HC73GcdXmzX5aWtkCNKw9jNRcMSkZ3uiZ2uxoh2gjh",
  "key19": "2xZeYcRMP3LAQ6ATdocNgfUUtg8kvKKkkJPHmxHG2LkvF2zpwMKmJVici1GV6k2GMup45LURADGXrgNgEeA2VzDo",
  "key20": "2sW3cbqTFh4gSQGWbZfxcqoS7iXHESmx4eiSXGut4XPgKTfiuvKeqhwBsPPZrcDm4Tb1mSjJ5oVxvL5dBh1NC7sW",
  "key21": "Mij2GArfCFbhuHwwifZYk2v8FWLGtE57ZuJkJs2moirFodGSMbD7DU2HHSt6jULT3tYpfcyaQPJrjMj481mG5z7",
  "key22": "3sJqVTpXpBmSrMLjFFuqvBLyinm3noP79TwQD1rCLMBcQogixfCQYw457peJWrYg6UUvEMmFS4xc57mq92Kk13sv",
  "key23": "VseUP5Ld1hRZmS7BY7pKys7mevG8sULwU8T4vmZx74x9sHHcvqXTDwk17CWMrg5WeBuSgdZY8gPnj1eRMnMb3MQ",
  "key24": "43krjTrZM1YdYafQ2ffWsy4tmbZn5zhVVFk5UBdXM6Y9ySk3mYYmgVTva5WT4mYv63PhduaGymdFA6yCi2xSnY8S",
  "key25": "3cKtkeLcjaqVzjeeThqntyMn2dM1XKjHiaAGd9vTpNe9vZLJtCPutCF9qDaDqwPrPjs7v5CmSbUj6YK1nkaioLzH",
  "key26": "3sXTtQwtvGUw4m9QobpqxkbPoQLrvt5hgGCWuJDEa3HbL97NKgQ5o7BZo3EFWinNEFLToppCusDWUsqFbhvVu5xk",
  "key27": "4fr7b2rvFDKMAsobWs3DYHSctgHBhrq3ybvk1qS7tRSdYZ4sVeWTcorVeyEcDNWNJ8PyQrxHhJLgewBdQSChXfuZ",
  "key28": "2Hs4syTohHzDLryBfU3Eem8BKNU4nxa7agdvy5jBkUawmte7AdBpxWQDTJbWxg5MLMgHZU9wpRZne7rfSbD2ip7Y",
  "key29": "4LmTd43eDn6YGRo1rDJjjsctfAYr4LqKgMXXvzyWLnSdNg756Aswgr2cmKXju4miPb2eQvM3cEGD1wSBiMRQ5QP7",
  "key30": "2jNeV1SVzrTha5V5XvNKRAKBeprMqP6VW1MNRekKGqACGpgX7Xn4r1MtLmaLtEZsL58Hevzvn3j6i5mHV5K4BRSd",
  "key31": "2VVxieKBoi7ocKbbTTvUcdQHpQqZqEb1imr8bGW3hKyMhAU4gWZ7bDUMsLPr7JhPWvDgWbCSXd7bYEmADwarVahP",
  "key32": "4RuHFtJ4wLThha5j2BiurQnvof5AbALywuM9uvMAbgcTptjDF4KFR6a1MJPp2xroCbz3VNwDhnSZprjYwaxQvf2G",
  "key33": "2AbkUw7YpTrzyx6D9MBBzjUco1kxDV7D1Ldu3WyvNMJY7CFZVLs27A5SdzeVigb8PhW1rE2AXPyyUbuXgNQGpGCh",
  "key34": "4v3DFrJFYBgcSMs1maeJKSS1kRWiFzR18f2pQBsaU2y5iyGK3UzfLMF8LZdUWpxxjwyrpg8NMsefBu2UGrJh31YK",
  "key35": "2BPFGLyHkMnK9zvpG4hihGqNDrPXGqUzSXwMZcPfk6ELaPoTejt8Dt2AqM47dtVrbeKwaWkYZQqtuEUqks6cueSn",
  "key36": "4FEB5VfSeKc5eEvPsJodY8xNFFd3miUmXjrhNLt46hFAZpaBUn8SphZofxxanfNU2xGdeQcRJDUoXif6ttzwKddx",
  "key37": "Kz5MusGxAhDBKcsuJWczeqCHMDEsEZy55XD6KAXV23Waohq3Pb2WCiE7JJiGuf5ViWsYjbpZmdNfzf1z3kJiQNb"
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
