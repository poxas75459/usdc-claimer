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
    "3o6mXmqUFEtGTzZknunaVLbp44NRLAQkhUJGK9Rfz6V7ei4QwpfPfikfULUeCdUAneDBdetZobLLDPMKaqqicWwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gLCnfGXS2tvZcjzAX75nAAfYtaRKkxMWTe2KAtW8zHBY5U4BfK7D7mCaDPchyzNCoVNSHnvWHv26Uqo4fsshVvT",
  "key1": "37EACH1vMskbc9ZUP9poaHXGtLdEVdRQzZrFFW6wGhCG6T7mgsR1BVguvQPGdBE4e1SpPBBACjirmoQ7L43s58tk",
  "key2": "33HQeovvcq79zAZofBH87MppgtUcnuRULDKGx76qBrdUn67UJTj5Gs3SSNxgkgj7habTKaZtnZYv8U5MCemWHa46",
  "key3": "kVV3cLpQZe1EMUaUB2Zt2RiJWCzFsozGevteSE1WBneXcaoDMuymgsgEafb1fiQ7TTa7sRwCd93A3VSpA4phX2m",
  "key4": "3PVrNP3bPDw82ZXCmdU51QzbFvhXosutUQ72mynMXx9ypodcYhfWEcUPbTCLyuPe5XPh7UrXY5pqspL8YHBATG42",
  "key5": "3h1DDaY1rQ2Hmao3jNPNn4SapPptormE3uyvrsNdvtparoC4AULLbzwh4J62tsznvqUDYjUEwR9BatiRaLi653S3",
  "key6": "2b7vizfg2JiG5okwFKhCWV1Papzd6LThzmEda9NWt11m3oH1vMUptYgP9sejn5kxKL1RvhpaqXoZifv6fKV4CTei",
  "key7": "4uCZEMtFp7Zd4HRYzobhbtTwLFESu2yhbdeZ9MEXy1n3wPVU7Y85oVwD3sM6wECPmVyGq8Z2ad2SNPLpXbBiQH5U",
  "key8": "3Zo4fLDN8yg4vmitabkiemLQWqSSeXTTHj5gCGvej7SSp7TzXeJKvo16Tcx5ieV1h4YCKjg9LVuEPYbh1STSbYRC",
  "key9": "2SYfoYd3SspBx8VsPR349ZtJ3GmwqsrCVhoGRUyo8ypDyoeGM32TThtJKt42sLJX9dpPsFfx6K7LVWQcs2GN1nY2",
  "key10": "3SeuMDaxaVr79X1GBq3kUJ39s4DzFEE5MdtmunFt3c6asuDmqUWBh5kbwnTLDrbQ9wZVzUu2DNp3FA5n1pZV1UPk",
  "key11": "5kkQSxuGi8pUx2WXg31iL7BS8HeXBEWKhHjjVcsCXcMyCEaNrKP2hVjd2frFFCK7VWeAuAyiBrRmqhfS1Um8DdPR",
  "key12": "4kR7LBdBdgxYDFzH4sc8hhCtHDw6vNAD6Em8RUR9qqcc1a6QtbkyX5bGKCZu8Gsi21ZyiVzTAJJ66LSLfsKyd8mU",
  "key13": "3QsHMEvzNf91S7miBAyH8fgcSUmbLoQgY5NoMGWd9LFQcegdfgskjraH5i7X2fu6KwN4mRSt1AwMUVKQCYhg8hgh",
  "key14": "5CVY3km1VYZ5aGX9aSG3CPnbfbLncqhVYeEZ1uDR1bj6YjTF6cWGjMWSDKaPGFTJVTv1oDs6JEXRQAEasEExUiNE",
  "key15": "5Ka65E5y1wo1t18Gz7gnDzLYCsiPZgvcw415jeVhyitQyfSbQ3WRNwVEaqHb5A7DsyAc1SMZivsxz5tmP2qgVsLx",
  "key16": "UNvZuFe4TqfmQLFMfquxyMARGV9wzSrkwMm59i2Rw9me4kNfUKAsPCgBRAiRzWXGi3FM5PQwFpJ1DWAUNsumGEb",
  "key17": "9saco47cYafZsvNhyobf27oweD8PXBZoaBTXA7M4xVeFe4hapn5kgeahSFEQZa5Ph4fp5VtqQzPZcACBYBfEQcU",
  "key18": "25WHWw9hdLEzdZQ3PGNdBd4DQxyen5qtZTqEYFjxNpSsQUCbPWXqiHyqmNy7WYvNtW92z939esZh3627cbxtSsYb",
  "key19": "nF9feajVfnrphqRV2XzXc6esgVEjXKihWJopsbvZzo52JDYGeWUHcQo1QgW7nFNCYvj2MhDSwncFU4sXF7YpyVu",
  "key20": "3zz82E4yPsFS2HtRwdDj4jM1dhgZKzzT2LdyjFbMmpoaDunUbqJyr1oyf1ew8jBocJFWcUyse3uLHR663x4HgK6Y",
  "key21": "ZYBL7LqjLHGURLprQGsSGXrwCWkTX3mKENe5DefMQYw4B6P2EJKghvjbPkbnUV7XCWzt5XWRcUPAXZKuR6gENx2",
  "key22": "5Aq4Za2UPKJMMeDCzqUmeGoKrZw6sKT4i8cwSQ25Ltd9bxMfFrSok5dqJmA1wNrpqQQGM4fMTxNTNxmV3Un7jq4v",
  "key23": "StXiUaZYJJSrNeta3XWy4R6c837Tf9FPHztWR7vUZhgpuQNcc1ymwBemfex3qLVnkFazgjM9i7pRPP93ckQKNjs",
  "key24": "4QNEBDjZs29mh9SKBqEcoitSePsc5azEXhgYNUZMFUYZ5L9xt1bcqyKSTmYbmQyqbNhp9RLY5H4xb25DwJ98voGm",
  "key25": "4Pjn1eDSWQtqaerFTfhqPr1MK5tHQjV6YJo4DiZUQt9sHnJB3wbwxL2CYUGfyygNBF2bfJYwQzWWhNGVmXwgLRdf",
  "key26": "3dKJKadC8Dd1SSZoRV5mmyBuWAwKTEHJGrv8kDCAR2xjzYfsPSPccXBQMMXPyHoWL1CRGa3ez1udP8JJXi4rfcZh",
  "key27": "5TAQskuHVDseXk6xjNk913jX19VQ3RqPNjsaarQNvnXbXuKL5skCPQxLt6kLeL5c5ScAgvWNyANnuwfMZAy7pcia",
  "key28": "2j4UDixxUi2fhwLSsTjfWH8MRwKUC8mSRVxG4osNcg17cyaNHSartts7Vmu7vci1PyxFZQTdE1xb3z1TBLcFN2mX",
  "key29": "27ZTPnRSaQPv3gnZkMYqGgwYcf4jERxYU95iFftE5BWfxAcjNyx3d9EoSomHn5LMGKHBgMMVxrPDS2YtZTeYrvQe",
  "key30": "DgGgEVj4UU5piviC6HipqnkWwGF6a29SkWxkFgZ4HETxP93cBwsBDKREAXrm8tJRx9d58FHytNpvLggRS6ZS5wJ",
  "key31": "5jA5ntdSMS6QQaRiFqstEwj3AFw8NkzKYjbTx7v8oGgcdxUsRE8YEzmhfg6hmTCM9hFMJH2bsr41TrXPGo7K5BG8",
  "key32": "51vXRikE5KaUXdzgUKScSwQSXSB8zJTVYh8gZhtGt94pWnEMQ6563adk7TPmQFQaHGp9rNZ4m4coYxYSNvFzZSxf",
  "key33": "uAyvcCS7JHWW67JpQxX38VY1ANrZ1f2YCDZfBAiAx1KDRuEvUA2DzWQfj1JHQCx6Lfi62ctkXzwMPqjmJyyKr5o",
  "key34": "dighyNifHJSNXhcSMkmiMTbaD44wqyS4HJEbvE4gcsQxBRkRbMUM4r5K1DUsZ3FLpFJc54Jc8pD4CpsVQsMdy1G",
  "key35": "2ByYdiNBXJiqdRj47xMpDX4Bsbhzr2GHAECCqrPUYrxVTnFm4Y4j52YETpdQybeyN3fDzQBYRNJCvBAQtxs5iMnh",
  "key36": "5fdQBsr3dMRoX2n7raDMn2Hjh6tgM2hetHCLAKVW3p9XU2rNu4ZmLTfR1kV6xWxiPhKKzkq3DLBu1kiJ8BPj3HRj",
  "key37": "23eRUSBZrKwBCyqVChzoUoK3QvtxVq9sf2YNXLyMakLdFHvJ3Z7fjTjabkZfFJREUp9G84bNYFhGkZP96Rh9WHd7",
  "key38": "Xx5z1X8S22CZdDmaPZyYEyyrLrrxdbwDb9Rr3zZ9phbRH1hXcaeRTLntXWpZa7QiFNW1HNqHAKfyvrQEyjFGaRr",
  "key39": "2uzGM8rwFnFSfX5JxHEaKVdZoh791vUUqdGkCU9Ce8zeEEsnhoXAH73HRJ7RfRenU61xdyqY1AETqrtV9ooEe8rA",
  "key40": "24pTowq33zYndNmQTqbXzprVuetWbdAc1hyaqLZwU3NHD6fZLYe44fxsoHr7toUkEMFsCUhd8NQVZrCvAY8LS45V",
  "key41": "62APDDMU1fDuWdQJWgFc7VX5c6dRMjNgtmrYAPWS58KnxNVeXtxnGz38Fkz8p7MrgFQhSfVXxHyrDomAw2QAHoBd",
  "key42": "4mMxqpdpB2M8CWWi3RRU6exi8U7MeKR2tx2vZvdfN1PkXHerYQWQ6732ywjsdpb3FbN4LduNRbcY2xr34Jh8HWgh",
  "key43": "qdA5Y7MYJEx57Q6tvwq11W3sXcK5wNM4wGNgpeMebfFdfGuBybnHY9zVRU59x9cMbU1UwgcQbr21TtrnHziDjmJ",
  "key44": "48RTbhTims4VhduVodNytq9Fag5VMnXsKvpFRgfjjzwxxSE4t9bAzy2Lw9AuChFfXL7GsAVGByhVjNuUrpeBAoWW",
  "key45": "25yMWPDYB4g1PkdGbPjx8zMrbybK58kRaieZ6M49HDCmxEvDuhan1hBDBi2686n7joJ9eczM6f2hJHLXDxtkRufq",
  "key46": "4AQ2qyWHq8jZaMBLh5VemWrebEiy8cjhiowxsBgfMximBgDkJQTzrPHBDUQoa4avRhpAxwgtQnLgjEaVLLSLnrqx",
  "key47": "fWhsAiLEwc3yrPXz6mWAaAaZSBacCnr5wxUthCf1XAAvAzTM75zs1vQTvWLqG6CLzjaELNea1TSpxSqPoF8xxAb"
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
