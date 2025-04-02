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
    "3dLZrhE49X7DmEtacvTP1Q2zWS61GSpyWb9MgmQknqhWKnv4ckgpfzJsNz29d96gbYGtQVR825h6sYLRpWGp993c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59vtdixUjhb9M1hgbFQFYroiTEpDMxxM5J735nmjp89dUpoWvT5Q28jMCHvsFGzFnWYdyviNpbQJYnHYa2ZE5N78",
  "key1": "TDj4QNtVwyFTiKe11biWoYLKFdumm8ZcZE9tLNr4YcHDkyT3Y59rv8PvFMgVmbNbh8DKWBBrb5UKrxYazuXdiBo",
  "key2": "4wUHd5acfKjUdAf7zhjBtyiBUuYE2bAHqqsrer1dSMhgxTiPqWmVdbQC7J3k74zE8653RqQtWkVecWyRd5wgK8XS",
  "key3": "4QkNbBpQ6xWLAsVk7FawgwcbUMF2bfvK5jeDh7ZLbR3rgWugsXt9pHcPuN5hUXdA1fXW8H8GLauXFSaiCRHhGo4A",
  "key4": "hypFXi1qr79R8LcM8ABquq4ekR7eDYuvgtnWBY8M4iquS4kgrHPEBBT7bPg6RN82hCnUYkNTiFFaBCJgfrJSfim",
  "key5": "241qoYZ8dYogzzHxdrGrA1TpVNKPU7rVv1TBoJgkxEPpJpD2GdtMS2B4CtHaAd7qb4yKWpoRtDbPi9KpjzmeUVoy",
  "key6": "2z8xsNJzr6wSc2QqShrVepCm8PNtCSeWtD75616MjkdAcEK16ViLnk76XGgjXWyhcMrrQBKp6VwWWNJ533XwSkCj",
  "key7": "4TzbB8DNBnBzbdvHBtPfEBYwJi18URWE1ZfQn5w6SHMui1SkzHoXaL7wBgViYfiVZCsR3VMF9tFz8FNVTzCCSCy8",
  "key8": "5eDbEWhFZPJZD99RE2iDp4GHS2tQppR3wxXbLkPFqXtNqXj3nNwJwjezPS4UUNvk26Lx6up3YkGJ2es2RJ1f2M5b",
  "key9": "5tNhJQXotPnEJq47Uh5Ssb6gP5wFP5HCqTok1w13d9UZEE1oC4N2FkYAE6B6ckjTTXsEjnFhcJXcrB5RKEMCG64n",
  "key10": "5CqPZkkM7hTQ5BuVAXbGHWA4yjh4YtkYQPYB3prLxkQkXsqTr87jRMYLdsSkVccwEFXJrxH1r4bhTx6eG6mQ3g3e",
  "key11": "2SPP1nAjM884Tai4C9ZcEcZwBRaL9fUhxM8QPPishvM64zM3SZXLg7yMntJj3ruuA52jM5uhxJHJ4qGYdqzAeLvW",
  "key12": "65QZWMRwiLMxiG4rq7ChQzsx5YvrjGwjseRfZyFfeUPXxdo76vSVyNJZ6C5vytJa1me6b9E7rGFsMCyAaHdV6hZB",
  "key13": "2KqMWyQrhD75aCDPLvfrji66Fr3oNdHh6AsCQXGaqrmy2Ue3EkvB2WYMLxZGnzK29YpaGFnVccxANnKiXyUD23qp",
  "key14": "3m6y7Yvm91gPmUZaNPp5F7MW3AbUUrBzKqGu5gJKbsdGwp6hw4kxV1x6GYxPmBoD2EDnjbTLQ9gz436WZNGHqEhs",
  "key15": "3BJi1EtQLMweKLoV2hzRhQ48wzhLmo6wVEwShuBfHE9VVP9gQNez1yYuYawLxgU9T7wUgfU9JfXFKoSP94ys8HZq",
  "key16": "4SMBMEv4dVQPb1wpQmKDEoBd7PjkYZzAvQWowhG1zSQAbSKpjE65i14DjxRWXGYDfD4uRto2DaZTfbNCwFcvLii4",
  "key17": "2CrjfrDdjUHkZPi8vYNbEgczPgVbkdwcqTHp2P5nfRZSPXWyHie1feWAibDRvgCpTXrfexT9nyrN2gjRsQwrdhuM",
  "key18": "M9NWyjBDWWSY7aH3AayP7ukisKNfFHNRs8N6uxr5q9DQSqjuoKrhvPoKsEaGfthHV1f5ZbBx9yUpNCYTLiGNpMj",
  "key19": "2FTabCDTixWDPmvWxVQNedYaCiA23H2sNd9EJWKnVXaq9ESvY5rERdhGSRCfv9Xt1rh9TcTQDa4jrFp49KjyG3oo",
  "key20": "3B5qNRiMRLxupdMvVyZwg2vtdP7bJ7DtfZmxiK7pnQsQgB3LwHHdLHGbPUqVbrqLW2CDBGTFnptc4BF8vi6xiFzG",
  "key21": "6xCgMLCbP4nq9qW1HRCpeFXfGegWyJCToVC8j31GNmqDXu84PFNbym3MkW4WV9sXvAk5sujeubt9EBUehrK5BbD",
  "key22": "3VcVLYYkS7nTv4fxcPQNaL5dnPBnLE17zHDGBCDWseXMWzF1yfFbHZQTaqx4EMjU77LHZdG5hqGQyxYETim4tadR",
  "key23": "5Bk4N76UPcMiNrEAXDEocL2P3XBuMv2qfuv6gPF1EwmAS5zogkAyppomixGTzVf35jQspug5yjYgGeqHVQpSMUhf",
  "key24": "2EheWeijZn8Q38gAhnXW47YAJUmVVUmPPrzmM8mnQpwubW6TRArjnfbsk2bNMnJPnGXWqwtdhzUuNh9TKn5psyo",
  "key25": "63zChLAnBHUpqGY2uBZpGE4AvUYNXm55vfFJ9AEZDiSSw47BCMro1kL2QxpkpFAdmyzLhtCG7u495nxbuKJuCWR9",
  "key26": "2v26nSiSiWk5DdDuaAv78auiDLjmNpefyXuCdimyEyWLd6syW3BoWgAj1yddWt9TU9e5rEA2qfF8xotiU743Dai7",
  "key27": "5gDmWs2maPqdxgYsEnQsZ8U8EC8c6ibPLiMaRNMKKSYAMibLrMpUzaMgvnqvNFdVGDn7qzpBYKg9pCgcGaLiSnvd",
  "key28": "4eXnJHfAtTVSGWHMdxStjsHA1TNcfnxei9ULDRL8igJ1AhnG3o4RbZMCWGHF7nybMbQytr1d65TG5cMznuDDixZy",
  "key29": "3Qnb46ohMhU7RzkFfEERcBnHFeb9Py3WeVSfKZNL8sYmW1DDD6cmLymGX7VxyiYoPpnv7CtX5AyT8ej54c5Tg8zR",
  "key30": "MKghM9GCHbn23Q1VimZz2T7bBFYf64uaeY4ANomrDQFJ1ebAmt6FmoCcXLmpjvM9jYwoTn6GwG99t9UYcv5cyk3",
  "key31": "5vJcHatMmehyQ34cA4c11SfYCArrmx9pKLsbxFPYqgnxGKaScNC6PkA9daWJs7Wvu4DsmKXyda8AoJELwqbzYUYd",
  "key32": "38atY7KCyL1mS7UapHWZfwtDKxWgGiBEDesmETXRChnNp4q9zsw2kw7PLwspEvthtfjqUA217WSktscEKMsA8maK",
  "key33": "5wJpENZREug7HaCsCYuADL38AbNQPzvB54yzxiXBbyTu8Kj6GmbfETHsnahshe4JEdoy2YsZkqRJoEZX1PTNut3u",
  "key34": "2hGakQ31CNLU6o6cgwGULZe85eEqNJmh9gaQ3U85S1RtiS3L5gZs5AkveK7nuXAnCHCkqQE8FyHHH11BzXDXV7rQ",
  "key35": "63X57QibqM7iSa1cUsqx9JnUM2QuLNsLE5ZQemfWFnbD9FFKxGBNUVt2hkFKT8q2q1R9aZQpavC66NrUZoRY4kNZ",
  "key36": "3QT562MVGwaq5ENykz8MJ9ZpAeqyBVdTuaE3kcDjn8kE4sR41RsZ18Z5bcbCLq3KYsu9SBiwCsgXfnCnQsghGRAy",
  "key37": "5rTxUsA1owQk67g4CsgEg4y4bQde43kLY75KxZYkHbPtxRhX7SV9r4SfXxyJXVLq2rjD4oG5DKXEbMb1AJGm5JZ",
  "key38": "3hk9KJHBnHvREgrcJngHmSz8uGhWFR7GSAPUekca9KZHaP74fqPvKo5NHyjSturMJtPpAT873brw6M3Jp1jbgxKv",
  "key39": "Pp5pmKwavomSGCbf7gm2SNeWZSmaMvnAcH34uhncGgBTouZMvW9bWNBUcCJhqbTTYr5fx3RvYou3CA8ti4PVQav",
  "key40": "3y9FPE1ZxD1iTwEGiNPDPEoiqxDjxJewyYucW4chuGuMhSNXviMYHyKbjep6SJrwSWv3qbKCmvKyktyZBE2jiyB3",
  "key41": "61JJKVHfRwKESGn753soGebEdpAG1ifWeUVDhLwoNvZQygPxWTRQXDDKfEWn9TP5M8k9iu6od82GWWSGpADyBJxB",
  "key42": "51r2u6RYoKHrHahsb1KbZQGzTXNE2gFLVh5NRuHgt1rivEhppDbMm1DNNvUQ36E2JYMjgYcWDXadUQc5Yj1oL2km",
  "key43": "44QMk2owL7SF7yaexmh3k1cSivrNCQTBjWCP3i1mBVpY3BBKNTfszPNepBKuLurvspQXPeap2h629jpG8eMHyPa3",
  "key44": "4bH8xyRThzbSmsTYFMbezdr2EA2pJBCWveJEYNZdaPsvK3tyKnirHjcXkfu5EMuhiawpQShvsXDcNV7os9GdgWeP",
  "key45": "psc6KJDcYJfJy3GE752qGcBeZzwCbntpnPhLgao3aPuiH2djcEmuFS76khwFuTzHbk3ZzGJTFuZd9q2TsHGWFQT",
  "key46": "2tNvWhDyZeAUP9GShiwCrCRWSoDafR4wzcb595a2f2Q78C4Uj4JHnZ6kiELN6DDrHy6WCim5uo2L17GZ2d3Bzq2c",
  "key47": "2UCmVWrwR8ncSwaxbqHsyxN99549qLQ94xNfmeEpkwaHMDoLV75NPmcLUA6wJksPFUB9Cs7mfs5DgKvBtoiJsyFM",
  "key48": "2qYLoHnwFh1KssWwZ6VDu4sVwX5wRYzrgpCXrQbFS9b9TVxgrW6AYAakbvf4vN4Vv9fxtkf3sMdswC5HqJp81Wdu",
  "key49": "2hMNT8mxe5zBavg8NNrjAvV9DAEq5QEcKvoPdtgyQvbERAWzdJDBn4SHYLNRdMVChXKNPMqbBBrw2hfQND8kzBAz"
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
