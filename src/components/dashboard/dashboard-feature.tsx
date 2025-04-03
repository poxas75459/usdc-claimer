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
    "2r3mQ1WxnSANPNjdtxeNKDdmYXYcbezN2YfhR3aqEat9WWd47UQa1SMTUSEBT5X3hpHNXF5knoZkNnsFUU14fg43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EToZ2akChXpfg8MRamioZcqbDZJ6d1EvS7aFS5aNQDHSVgjX6VpfwXWmmGRAfNrnMdKk7zegPDHXLnwxtST8rx",
  "key1": "3Xk3AjeuC6Tpxg5vrYTcs7pipJGLafBqBHrw8bg7mtCqLh6ErJCNhBnCeQb4rRdwnJ3GK37gPP8otvW5CxTHXAsR",
  "key2": "5Y9BbAWFxKbTarntxN38VQ7BD37oUFtKMQvEBxps8Nm1NjUAiCFUdsSaPCpSoHp3fw9Ybeo6wo3HETa1FPZR4XhX",
  "key3": "45aCbp2EKZvJNuCjcU5TyAqc2MBZCQFnYScwPZ2p1tMUxYpyd4tpDchxt26b7GBCuqgzvUBgq6Mvwiw9JZSYRzUc",
  "key4": "4FXrdKYWsfVJeWyRFDDhEo1K93zWyjiJC9FELs7VVbnj7T8PVxnTKptWLf2ptYrZ6tMmaK1atM32pUaJfSNHqs5H",
  "key5": "3pct4G58q66KaioANud4xMesqMAVaKvnozuv39ibXUBVWhZWV1N5TfcooDY2v4MF2FX2wqcPCvpuCCZCo6uLQ31D",
  "key6": "64VpGmVYMvuDUuggjSpVwiNwRSLfX8MwJVdMxbvi4yjSGcwouUCVn4axwG4V8Lt4iYs7JzudGAZdB92QGvgxyRja",
  "key7": "GWBCebgMXoRxpy8YXkiQxrpVGoEuEC4JmLhmtFnkn6XLrdtz6mrv8jfN8No5ns4kW67Urx99FgELxRVmcn11QVS",
  "key8": "3WwezFCiBCWfBYMnAFomHVW4zSqCf58mYgdip9bkGRdWxfzThK2D4RhtEMKxfk4VCvhQano4rrE9EUveYVEjrJef",
  "key9": "3N6qzRNiMcz57BMMwwx7Kq6NEB15ir2sU1H9BTXHuxhSiXhjmBvvzMg8GpY7fYq97d2Qc4iYV9Jr55Hh5KKYWinf",
  "key10": "BdTnRmiPsnhj3HNZzot9kCpD4d4oxFywuTiA7R8rxx3gzxcEYJgHiwqTQXUac2b7bgDwyLq1GiquUoSeihe6qEq",
  "key11": "MywibTTybrNyNGZn3ErC3D4FgcDTGbuPsGQXATzWKMK2Kmxb7fwW7re1XkEco35zxx9i9jMEHtz8d3e5rQJoPFe",
  "key12": "6JsQnuQokJiueoFggvvVGQeu8xj42VkVWK8TMoDmyVuJSEQvApr2WpikGXWXSWwWkJmU5b7KcKvXV7rihZMYywx",
  "key13": "36AEoH7hq9av5PWGJBWKRTRQj6XkxH8MHozrPjzLKfkJ3cFEYtmQRUtQeCRGex5qujhBDNsLWXn8Abj5FyagqHSL",
  "key14": "2AXcbHoK4zv43HZL88Nmx5kuUXEyYFH6xPX8XgQjbLgu5dyQVeQXE3PRDiv5ELbQyZM4FwCKSQGEzAc1ftLWdivB",
  "key15": "5XZnkSL1x9MHku6DPJ3pYDLr3GN7W7Fiqfgmp6h9XA8aeBrKFUBM8X8AmNTMUE1PtrJoSQGA2egbWdMQGgFHG3jV",
  "key16": "2PAaDBkvMNYbmrJKPscnJuEPXXXvHve5ufaXuCMJnKxisEo6cufaEvqZTDDmhRNn413fdGofdd2hKxnkuAvcZ26C",
  "key17": "25PnQV8KYbbfUxC3MrDtZbr4vYrShkc3yjhatkxhtSitKEVmCtpwG9fppmxpjZsHbkxjBqAeC5qJYMB58ySeTzgs",
  "key18": "48K8bREPDu3fxB5Q7KWBkb4x57gWr7gV8cDA2rBKx5qYhhWqnpg2ohV2GXJdpHR9uroUYzfnMZP4FncQDeJDCTND",
  "key19": "4XqX1y4usbaKkX144PSgy8GP77Qf1PATgnk9btvmAn3xPGQZbBkFjQyn99XHso9ccBxCSZBB1rt5qPzuPQU4tUdz",
  "key20": "2eHdBWujcw8H1NQY859Yoxze2FgEpydaPMXQpWrKWCUw6mFjVAaSnTUS4ovzp4a2pkUw975Le1wseUvBy54LXMDD",
  "key21": "5ZW1ErvQTa4bbuBRZ2Z84BzaYE2YMHFgmyNbEmNpkdaotT4TD6ri9HbeyPMoqUuQyGQMmLRsgFufHTT5dyh81kgC",
  "key22": "3Sm1qqns11xfw2WSvTykFdcNAyVKJtcKpVEcqm78PN7eaYNhjRLZxtnsqxX8f7RSrZbnLhnRyU11Bb2h8jHV9fDN",
  "key23": "3C8B8NjsxgRT1QMRgCxJaXCkZxGBj3qT9zGMiW8SBuTKW1rtc22xuV9UY6xyhwXJ3BPH58r31ttWmaGLymQkTy5r",
  "key24": "57pbZvEk2t7qEAn6HUkkyNhqSCcV5XAXtx9kDXMtwBspYsrKmcLn7iXoBw96282NwUpjdickJJdizrGot39EQjE4",
  "key25": "ceNBDi5RR3H3ia9ecvTfX2BNDaUjircwUb1BBqrP5ymZHpHBFccsvcQ3NQBP3CbA9CPttz5bTXTudtQ1qDxg2Hp",
  "key26": "4vv2e3bKk3HQHhg2bEpxpfPFwUmoLArkGWFgvaaG2ZPAe95UdtyhgZepbad1v5uuD1jT3rrqvwhALhHJ9zoBxMiZ",
  "key27": "4yDPXDVnFZRhAvBw5g6C6BhGQX2cofaMyxvJpKTxh7miyrqHj6UQL4vySiRdQRUBk2Q9TZMJMxTt4BZquDiqdmA3",
  "key28": "4JNUGMuudo2qLdeWbgxwu2VoGfPBa5L8EpTud9CCEbhdvkeF4XENzhrWVoypg1gNpnNUBjGwEoAC7ibMegQHvPwK",
  "key29": "2ojy8jMn3jBGsrkAjBiYFL8ezB8qdUBU4wCVz6PFKW6i8gpXYPcZuLL3xQLJubjqcduaioH18W2Lvj7QLPJNsjQA",
  "key30": "FLavpYX5mgqtKHNHKnGFtL7vh4JSFJiccNwRqLYc3jPJRcJvipxta8LY6fpqP2jsTWvNMuM7JwKqXMA393iVQYR",
  "key31": "5cL8xiq9jSsv9nEuyL2YtaDJvR5MvxWXZUvF6AA6YhRcoUREBwh4d2vmPFB6ySXtWu4fB4WBde5tQHu8YJPz5gbT",
  "key32": "4eGYxm9Kv8wijisinwr2SkEDNLCKFAgN9T3QraKK3qNQePEHQQcP7fFQbaLtu8adSeLDFeRqRvzCpJVPu2YHxYcU",
  "key33": "45iW4o9FsKuSHURQBqH1m8F2hyvUgDcRQ4XXMDwrrYDqYtxdYUj5yN3TMmyapMLuhn1gGs1UM71tLLnTBe9rkhsH",
  "key34": "5YQdZg36UVu45JeMKyjjMjinRLnjGGapwpp5ZEG1wnm34PdcvzLyZL6RWmCnXHLjPa6R98crzA3VMUdGXJwMM2LD",
  "key35": "CBML4ADJswCsSv7GRuMPtHGNdGYdTzRjm7qbDBhzEWTcE4JruW5qpYdGuASBrTPRcm27MD6KncoQgogw4bXVuBr",
  "key36": "5Vj9ymuW8iEf9vC3x8iUKC8i2q9APjqu33NrYzmFYZMLi3xLwg7F7Q1Q8oLnFnUt6LYRn5LcrVsmG7ZvBv3k1KrS",
  "key37": "67EPmPHsXWG3y9UzgNYsnCYs6Wmu1X6ruNwE1EJHp1bC4K2nBFVJ2fzKcaEF1G4SdhH4yMYGP8zXzYcUaCMu3n5m",
  "key38": "4eK7Yjyjgi94BYqZzmkqNtrrHDyaS83zHG4nxuV5BPdiTPJe9yJnzFNMPkS1HYmJaeKiKd8Jsr6mF978pXUtmQwe",
  "key39": "7nEfeVMS5vLsinj8txAd1iNSaHetKAEkqkPxFHm7uwxKzp7jEd1R74Fod8hh55YTrtDoDCxmshWp5Le4scEesuB",
  "key40": "4RAvBeGRUGDc7bTQSWAwm26Wqu3L8c47extEWem3xeAyvADSpv87UpY5cE5ZX93qifCFw3xGo7UvKjrRjvvU5eZ9",
  "key41": "Fg9aXMv6NTGvYeKXKLnTs7yt3cjWVEJH3PGTE8Pt5epzr3FdPpN6xAhjhCbbHwn969vhYApaokYuf4poxnahX7V",
  "key42": "36axufsHafB9Y7gpVLmtBJ3eVUeQTnX6Xv5CUL3Hqo4fMUPnta7N2npT4TkCmBC48LB934VL3s8yCEy1FztwSeHg",
  "key43": "3o3ZeeexXpJN6FFu6HFHJXUD9jBzHKKMEohejb97iXV4z7nDEvSA4oSHFfDyQvHGLBcVBk2Yetg8dJMSuSUetGEK",
  "key44": "2cR8e5EmQ9Na93gvLQ5wtyu4CtHCWvzCyZ5DHVf1ngxu2ahcmzbg64tP56NviSfgdwbiwDaAKLbTcg75HqyZfhKd",
  "key45": "2bsDgJbrBXc2fhf9caJhB7yRCCXbpLNpQARrEtyerEBu2BGCW21PFCNbeZJxtfGvpH3qmTNwPmbVRaWKQjrtg1Au"
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
