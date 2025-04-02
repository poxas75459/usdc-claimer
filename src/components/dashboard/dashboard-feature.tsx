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
    "4TbVaETHLs6Ps47ak9m9GvQYbLTrTUhCANmPaxgbBs3WP4Qp3fwzJSTHmwmyepTg3gQrqv2Qk4Ajumh7rCHwKL74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wn2uv2rV4uVGp8Mgm67bV1TR5FQVTgetdexYVMaTnDqEM3E8LnHeTzEnsYRmStMdwe5FH43UHwYv8YRpnoUnY9o",
  "key1": "2XXGS8zC7cxcAGN4ojAtz323gvAvjvoF8kUwRdJA4nayTkBwqsu6R2P6gtY8giBJUGzaqvQeh2NAv8rTkYHwktfP",
  "key2": "4DUhRj7HjLbp9N7A5kYKCz3kDDFVHyBPCaLBEdi9zmMppvCresKLiBVaCVJ3Mv2r2rw4hBdx3Cqu2gjoyE3WmCsM",
  "key3": "2r3taJEoXJnjfb1BzUTXHNCGNUksFCGJaz9crGYnGjUbyTadHPqHNyhzaetrLdG2H5srizmEuJMaQCH8ZDhkyetk",
  "key4": "2m8SCgzoy59pCEpoAS5N8agurR9FagC31J4MdcxpNQrz615t6JH6azf5nUTU3wxU6WyYqDggTHzSJUCguEvwswoL",
  "key5": "39tSJpb7zTJyM88FPsGe7XRrPcyAb7A3DTwh4YZM2o7LbcLpj5WkmZq7KeQtESxiJinqoYMr8Y4QgTzyhjwd4TzE",
  "key6": "qCqLF4E4zdRC35gMWXa3rjofxJwgyQc7cBqJpQ7Wox5MEBDsBSgDrq8iX2JsG38oWgrpCtfBg46sFUgR11feENE",
  "key7": "2fF97gQzHoRzwXE68T4FqhcEJxY8SuEKHcyNPXZmSRk7TquvBnHyWjRbFgbzDPVdH4pPqGiSy4ayag9QofaLRhJk",
  "key8": "5ckmwLgwabjNdQMWButzESfJxPwzPnMCATtDPBMZrn5WS4n2TLrBwA9LaQLQecPFTqsTbnCdCddza4aDfuw2rDdg",
  "key9": "5ryAYxdhuRPzypkS5p2rc5Cq7b2uSajEtsoLFCEpLCdoCA7JGtbe4bjXZcaPrf5FHEErHes8DedAzCfmq1uhxaNV",
  "key10": "28NbVvDRMRtA8ts9dTwXbEczFoeCEfXqPHvDgUL5f8nc4yd67fMGBp6HpADmJVBCbq3fY2f5NJHRDr2SQJX2VNM8",
  "key11": "4QVZXo49M75oPrNF1phWNsCUjjLMTvQoqXzAxcvmEpbNHJ66NX5XBsyAKeFGA9KScbTtT8xd6gCJ2S6o59matjGf",
  "key12": "2UmKfdAEYcD9s8USFhyFu1oHgwRXH4Uz3SMerWDrzbHA2QU2449HecHfPs5KGd9zvQMiT13vLikGeVPfVGdwaZLY",
  "key13": "3jwF6SzYFvixrq473fb17m2buwA7nqXEKfudfvTjqKzScA84RP1myKYav4GBz58RqEtcw7dFzbaiowZ3aYoeTyd3",
  "key14": "8QoPvYni94SDVvD9zGSoCRgDzqzh4rd9nKqdkXNa5s91xz444XFDwUGG9KmEcU9Kbh7axmTM3iDw2JgKdAzaCtW",
  "key15": "5Z7XseiGXhrJ93HQDHi2FbTRLx4Y1kVC2LfuWN8ncWdAee3FwDw6H4npisRhz19VMSEqegbzaJ4tEH8m5FQPrr5Y",
  "key16": "4A4GimcoVMkWUtSXy1nZpgmV9hiECyXFHZP83wrk3mpBFhu7cgtG2JEgSRVmcyNET8D1e7FjXo1MeSAzWNfUjJSK",
  "key17": "5cS2Z6nnPLdcA8Vp5jsKtfN4GFcmPm64W9hRevUzn8yvB1F2Vy2LHpsWNoMkCMJTHtteXkepgiaMJqFvTAFf5PAu",
  "key18": "5Ve5EGytoMSFQJLMcSF9kg4kLbJPMSJinuBNC91SNkDEe8e2agUJ2gcsxFNVdKL9HLkWVMphMvt4pXmLgEzLwVUM",
  "key19": "5B6CYjqv1AGe78Jwxx6iCmWhmQBUMFBsb9Rkya6FhyemwttgNQJNRQ1vq7SCxJmhWtDnfAGW6eg4tC9fzELvZtBE",
  "key20": "4kdNpDiNYo3R8zNwgXNfS2bAomRPCjoHFpLTaTcDBwytkMRCQYp61zUR7BmWhR4Xdcnku8zmwXsvPmeeEd7sXPUZ",
  "key21": "55NBDPfydUj6AscMoypu6CMDbk38DhLGLV1wr5Ne1J5RnCkur1HnDuWDr4Tc5T9jprwBhReTGjM1vz6gBG1QDZfA",
  "key22": "4heCfkqdQww8kS6qYr7RPkt4WMVg8kESzqiKmAS1bZukFBBkpw4JDMizmHZrUg3uwyyHuMV8ret7orMnAVfiFzsQ",
  "key23": "isqyS2hG7f4xf58ZuLr8SW4zDxzUBHxjp4usxm5KJKZ37uYzydHFwaMKStjBjzXieAm3wyWQv5uadPJnWeZWRqy",
  "key24": "65AgX6cNSD1MTQpQXUTYMXoXYDmEKoRpj1Um9Bt9wwJvrhedLjU4Stpi5RjHhdtnJBAouGUeKHmXxonids3uRTdk",
  "key25": "2szm1hr6w3TBcypJE4KqQ7bWW6ALBce9Nx11mtqHbkqeB9287F98vrhUrWnPTxX2XHBMKTND2KPUm6KQueeyeFp2",
  "key26": "41sLP2XUaByvDEUFk1dfy41Wbza5CvNdEVdeif8gUyZBJaJKTJNbarjaqgha2z9hq9ecyUuXu3N3sq2uSMrNMkMr",
  "key27": "2MnpaH2dyM7BHUdwYKjWXT11W3AXriQQfdGDZQmabDMacme8jr2AQwPxaZkFnSk8osdJstBK3urPXsuESLBefdP2",
  "key28": "K7euNi9eb917bHt9vQPELzvcZxuoJtYinbxBqUYCFmHBSa59aVPc6hnVDEtKZhqDXJNt8cqbK2h4BrpA7h6rxMw",
  "key29": "3gtJW2jAXVkXmfMw3buAH1Kw6GckR3dLrsGM3Fd8E6d919dX6krQ9jLwiNcpkQ6CT2SLyt9d4HJpiRWYQ8fTxAsq",
  "key30": "5V6pTToDksPNp7Q1bwNFpaHoPE8C5xhLCLd9Agr4iD1VMH8KBoev7XX7T3dHNrNyXWrypFGBsBNqJUMD9BdP89SD",
  "key31": "akfZZuruYwcuRwritw1EMvHk6PzCFhszxjT8RD723isMB22bsPFMJi1bAvMABn8CtRXrnMm8MV46594HWoiHJ6E",
  "key32": "4shUnAJMmJuqVpvw58vzKfDC5JFUoRAFivGRxadNUC1483tVxBVYoebj5wWmU9kTTDKWdk1NViPitMGqUV81bNEb",
  "key33": "616YzCjL5ZdKLYjwfV2enRu6DETGuNcAeF7fGCb6Wrjq8r3UNwfCLbm35Q4nP1bMfLiqrpvmG2BybHqe81vb6P84",
  "key34": "3W9aPmkH6mtPAVqMAyAeWmJ7XwE1BCoLfHqXugRKwvbbyEnTS3GqWJco3F7dADCQ6ZLUvxDTcdU5AizJigkKiYqT",
  "key35": "5qeJSeEKY56pFBpYThVJrLiq86qHFq1xhCaajCvANj2PyFVmQtckHNNEo1P3ovC6aUT2yQD4bSUQJAePYZna2oJp",
  "key36": "TGvo5HtCJ1i59h98cGKCSerZizmqNPLeUKM4xMtCzdiuShGuHVdGNCP3kbmZNGM4wwZk6viGZuqukswDi9TGTuM",
  "key37": "ENcuZTUrxHaNrxRmTUNaRgFR7Mvczqm86AXZnUBvq7MmeBPqRQSvHWbdeZDrceeBgoaYv4BCyijRdM66PLZTiX8"
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
