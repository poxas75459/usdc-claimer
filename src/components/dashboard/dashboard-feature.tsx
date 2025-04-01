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
    "35KyRDfLz8XcBYF6aK8xNr7zLu5HjJRMpgCxDm9XEJbBFqiZZ9z1oqdQADwHwe42pf72sNv6x8nGVqskqnDZwtRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2endjLoEnGzjWdt92DSSQ6YUbrVjrhiaoyaxX4hVxparQCfv3UTvSCSGGP99pRA6PGmTa6jkY6UEakYmS6rGLarG",
  "key1": "2E5j2SEQEy3VTHh6xEDxvER7Zv1TXAWyYhLVHDpcqTv4hKEzU1XqJ44y5ER4aarG7sCjo4MFCf2m15ccynSutD3m",
  "key2": "5PY2b9nTdAkhKfBMsZF4HgmQeu2QTqk93b5E1vyyzveb6GTo32SABvCCgXPqrJ75AFFmFDjwXV6hJVNXfBJC15TX",
  "key3": "2UkBfztGWfx44SSqhpnd4zZALY2vppybM1dxtFDC5FqH78KqUYU3Y1mfrtBBbpfBfazpDi1Hc3h9ekvWgi3q8bSC",
  "key4": "2YN3fDLpPZK6wKdCRn3fRUUdShghgghExbCceMSDuQ1aqXHZU9XbQTqQtVvKqH3McuERuoYUZiB5wqUYdkHZaVpU",
  "key5": "4AdtnsTFF9MT8gLrXaKomNtaNy4ZfGsHRVYwQkrBDnLmL31y333gMqB9rf38N2UJSks9XqsgVGrNtmEVgqQcTwXx",
  "key6": "3tZAmaYfFV2RfvbYhi9GNaNH5K6LurUFsH4W8XVC5S3a8MXCtimV3dAz39JVJTRAUjURxNYRThJtfUqE5wtT7nEE",
  "key7": "2tVJWKjPxtf8D3R7busksSchsjGq5zBeTf8VNuy5akh4wq8io9XpAchAJA26jqy5mPfoWFUEEnKUWqvxZUUbX9X6",
  "key8": "3MfxTPAVhu6hWZPtF2cEmqQRF41zeRJujw6c9uhB5X2EEJAScVpYNUoWVsYzfSrZtQFEpQmS2aX9CEB65uJCubUk",
  "key9": "3uHsq1yjSEvv8P8JVbyKpa7nJnwqkLfFomEMpBCRXD8mJfhGMuLreE2PTtDkbwjPZnvhq39xyXzhXEciRzxC4Jhc",
  "key10": "2PEvYvHWZgfK6PKVT4VD7iGAjyziKa6SjEd1MigRdKyW6cwN273rHf8eMA89mfVGhY7RRohkMzcuabwXCyJoLEbo",
  "key11": "97zgf11wwcYzwUVfHnd876MJnjioNARDVhd5cvtvuZiJ32onoUnnbqtcWpHAXZ58sLAuTjquz3qYnjXcLnYXAeH",
  "key12": "35t36wtzTsu2inhx2zizxCXjezAWaADwDsH6wMHrbHSfw3BwHMfkYhhD6ELJYcne3YANntVRX1LDa9ZpiTCewXD2",
  "key13": "4e4AZLr5XRdeQEW6fFhumA2savDb6mxB9UtHkn3epe2RMhHXSdQn94dXmpUutnvPVGQVrDFRJwHNg2cbky96g5qo",
  "key14": "3a9AEr2Az1DmPjb1M6BbKFVuQNf8vfEEZs4jN5d918spyy4CHZpoZtSAnhyUBwdke17yLkoxyQyohGEbLBjE8v1R",
  "key15": "KLL3qL3BnTpguTJAfpE6B8Md8nB9gmFmfLAxzF8VqrDw1Z7yoQEPstGCupAPhCCgVvoXqWufjYFP1FDzbgpJWkS",
  "key16": "2vUkoADygPaSWukyes3cnuYSybeA87QaoMqm3ZFfbyia76m7brvpxoL3X3tKJ8HhqtTa7JKNkLp8WidcLhdxnME5",
  "key17": "3M32o13FcCcerEwMvD4Lmvij5X54beow9rxPdbnaMXbRBd8eozysyembcYphN6rXp2P3Sg6m19NgX2evbvttiCcD",
  "key18": "3QBAeKgbwXHQZTXz8VzjuHbEN4EDpv31EtNvYmAPnVMSAFgV5MbV92mGSC1Ec6Tkoo2v5vrfpjgrLpDxGxwwSXtM",
  "key19": "2xtdtV79rUsp7UnQWexUftLn9jkpEjMYvx2a1azGBKkoUNqbzHhXgUESpZNwJ1BnxHoCQHkyWsGwh3w87deUMaGQ",
  "key20": "27oRZkUhHQrdoLkXKsBkpkR9ax6nfNw3gXZFCmW9SsUkbZnGBvxGJQe4WwFumneMLPX4gkVWmVqQZ9XrYVjbnySQ",
  "key21": "3V6c22AnAN8xESniAJQNukicxHHSxazLChj4Eq9vr3zid5uS6z2wrkGWZdF9MVZgTvQ7L1yBioEF6JtCrvZFnChB",
  "key22": "5wwYJg5xMKrwCTkR2pwdrqxjsv2ad6X7QhBuSVEwMdrwYwVCEkhCyC3N3nVTtLYk4Syys4Fsij5hiDRGdv5oxGWW",
  "key23": "2nuLQtFSCrkPCpfCwzqBPnJgZcSsUt11mUrstsrZQkPKZsq3KNTjGYHfG5tEgfNGeK33ieHZz1FJY5Neg91JGP5m",
  "key24": "5nfZrBWCi7TV7tLfCtoWJ1Rxr79WbSb6d5PpxWqcJ13DgEbuHzgLRTfYchUdaJjUtYwa1NnzNVMpT7SemaMsZKpe",
  "key25": "66cFoodsEA3r29dxWDNAhm67mfLxrYzeMMmfFapA9QQaP8YfQ8j2RdfPPzbgNKjAXTZLfjzPnX5YjLLVAzvZQyk9",
  "key26": "63TnRhM76Q2eWYw685eifjTFtu7vD5ptiKThw6LRSzoBsiKRMRQ4QZpBWACUd5ufp3BivmuvYZSgkTfx7ATmN3Qa",
  "key27": "wtVezyBAav9dB2UeXneSswjwMLPKnVCKTLPwqi83fTiGSmaVLDhzfdQFZJ7VowYsgTStSmQa5Z8Hpq1uLiNrx8m",
  "key28": "N9UA6xbsJ165SX39ri2r48zYiQiYxFubwmgKRWiBZvdTtT7xdJATCD1ijv2bmPbTxa2iSHrbxehDbqiuEZWPCqy",
  "key29": "2WPDSCM2RVZDfHy7ZnVsbr9xpcQm1cDiSMTUNtpeftaa6tpcrcZjcsdZCnG5AaMEpjoEC4duE8QkvQ4G5T6qre33",
  "key30": "3uTmr74kMvWoBUoCMooE2K2L4Bok2kiGQbsrK5rkzNmv6GPvQjhdMfKoG6PxubAXmnd5pLwerjHdYiiDFc7k7yHx",
  "key31": "3U2JmwwALyE9x5VshyGc66vNhAwTVbbRRowgETR7gQhRpJnKPy9mjAjAcDscmZwu2VLid6PF1CSmocFpTZBqqcAX",
  "key32": "5zU4tV3M32QEiuWc6Rmj1WVVBjFvnD87d4szMdFg1J7xvYJnp3ek7JUL16GA2rsZp3U8Hk86tWSUxAXAGPnuh2cN",
  "key33": "3jJUPdArdFBjuhRQNTQgPNpGDm1Jwk7A5eKGqnafUP7cCNTnD8rS21QsSdtU3yZQKByv6h9UVVyCXA3R6kADuLv6",
  "key34": "4f2VdEGXdNqe3yB1Jt1wLGULAppQzuCLqJaACKND71dp2p15vc9vdyjP8eiiscTjnA6vcUnTSd2g1Bst9LmW7P98",
  "key35": "27bf1kxNEaiYRrpmZJJZTzeRWjNV2PQT3uFqL5hRvdPeoeyhoT65AaDAE1VzpMtgs8TyydEmqoYRvmEENKn4uteE",
  "key36": "4amRAdqShBnkzesbYsKw5y8sPZRAZR2PZdG6iboqptnKwufCTy6A5r1KzZ3EsKuWQXHAr3rn2j93y59SfM9yoLWT",
  "key37": "63zpjA9XDbCkJagVmiQgg1SYWariB4bFcMkXZHsCLVTtbG425NfxZLUodrh9uFHBxoRqqwdgJ7T3Pnk7H1UwUuJY",
  "key38": "3GztfPFk2TuLv5zg7Ns38MjHqXQ5vZmxZhv16ScUxgXx7q6onQcGErSgx12vDc9hbzeGCEupJJ1JvTwLmzKGVyR3"
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
