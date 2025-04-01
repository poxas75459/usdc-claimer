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
    "395xuc7DaQ6Z9HMYqRqgPLKeiecVGz364emGi7TWGLpRGULBi8K52oB5ohgzbhWCGPUbfVWj5haE3g6acU7JDrQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rAtzXHgvtaVEkvdzsmx13Z4EJLb8h4LtVzqMpm57mzQBy5XXe1vVQHtsG5VPRPpYcMmAhfLSNGKcLvVCpTHoq9W",
  "key1": "4mAjUDzYEfmx9E5UPgxgdj3arx4hmeSxum25tXDBjdwNLHXxFbWKMEJUqK8kixwLJ2zqSmaExMZxVVntVbQSFcqa",
  "key2": "2b2WMdWc34im29fkN4UEMwdqeSSWbdxuQ7hZeBwi6x3J4XwLsUi3sMCRU6QocZRG23g62oF1a5c7qV6jeuPn2SgJ",
  "key3": "afr21mC93xu5ccUGhbjRPASxXRxuuXvkhojxJufNKpwuEztabcynmKcwZ75WfcFEN79u6dKYX24RkkGDhzNx8FY",
  "key4": "MScXSTSdoGv45DKzQrWfPZsKBSeGnSXQ6sPpgaZPjoMEngL2BoYtB5EmED7s8ZprUuPid9Mk9QW2jugNhVzibio",
  "key5": "4seaXgfpo3YcCyJQiY8BGGf7ATc12tSPVs5n1fwtPFaJfj9HXFadbAmqC4xgkbSSd4xy8wtPZzwxL9YgoD3e3USm",
  "key6": "5yX47QyABHdf9jwXgxDNEQzEDdfR7TSGEGYjUSHCBPLiHF5JEfx5F3ssTvngnqEKoXi9YKWHagnaVYdguQ1Hswkp",
  "key7": "3mRxEgEX86mcRE8bYxB2PdzcVf3VSip2bhbgQDTvU9ajjorXqbWjhdH5EU6yuQS41hR3PWPCqEoig8NV6nrdUQet",
  "key8": "3tuRNYddg61vUB1G1re2KXDZdxkwFq7UsQnC5qHFQSV1wWoSzYejrKBRcQ15Gn7CcKKf3iTCHKxpHbxbbKGchDiJ",
  "key9": "Lfo4SNmg1Bw6qAyVEoZmrdVAr2ujSiS3RnPSNPoeadRJX3vWS91dUyzYXWQdJc26bLrypMseCV59QT7d9kBQmRu",
  "key10": "23Qf4SMPivLwUoXhBMiRPLZ7xaYxF2jwZa1NxjuFgeKkEMQVNVij6TEHiZjWK12nVmnrqRmXQwWDhcywXcorqncm",
  "key11": "3S3H1GZsXaAobM3ZXmwXZiLdkxcA2iyjZgkJHfWKndLXCbGR9A6vJf3xyg1KoddpRHLvCSCVVjgBsuhN2BMaRii",
  "key12": "57shgyjghi3y9ZLRYtud2f5ctXm5o9SWS2c9G9e4PRkBuyowWGyk7uYwsERdoF8o6i2Yt2v4mmwDXePC2TdmeajQ",
  "key13": "3mteKT8jKgg41jiqE6p53iBfKESGGxoMmRrS794KzG366yvxmHcPi2wtZA6hUAZockMwcHoJVR3uDa7qSXkH292L",
  "key14": "65x2zN4aUc4xmkgiVvrDqY5hCh39EMvJwsw6NLe34Lasc2hGcBhcV1895bSAqFCV9sJjhAs5G43nBD9o6gAxWy5Q",
  "key15": "5D897UfobfHRYd531nnuTwKSHLihT6XfrZx7FCPoipr1mvigARKEopCzRGu9GdU5uYhYFRwF22ejysdyDLJbRHeD",
  "key16": "2hNABBuBmTwkJYtoQQ7HXBzosaM26MjUD5nYfLK2WhqgDdGxwx1XDHfcKaDFYGP232DCdrtyh1ymSAaPPSXN4QrQ",
  "key17": "DDzuomevd7RVcK4iDZ9F1yzSKXpVHLRXhYYt9Z1yJyByUgUVg97U7pWgy55hY25YJaAHErgzR98yJ4aa2gyQkgf",
  "key18": "3eDw377osQG2m95xrZ36An6UwgNkQqhqPEbhqUagRZj3o695TAGuzckrcouj2YVm9judVRQGSJZzSKrrV35rj9QL",
  "key19": "4sdScuqNCTk38RWtvzDnKBVfThFkx7QGDUBG5PyYyQG6CaU1Q5pACdFKY9Jdk5YDjyM5LZmwV6bXaqempCDrpFw2",
  "key20": "3eJgzRHdsMPLGr6jt43ZxcLXYpkHAAyZuGsWZ58Rb38fiGxnUuY7Xb8X68x4gsZDnigCsxKZG5wouUP5DYnDihmd",
  "key21": "2cPvGxFmYt4njAC2xug24sDu4vVAe5WdKvXNt4YysT36HRZ3fPzMtJww3gM7jLQTR3HeEZ2nRj2yUsXrzvTNVqij",
  "key22": "3MxJedzCfvosKi8upnoAbtbsSH39sEQbdTGCnsUAvHq41qFed1mXAkxPp3BNGAs159b7efPnU3zRUc3t88C5rhE5",
  "key23": "LFUHWeB16qjNXyA2H3eKxp8fGPf42xqUcvcXqr6KZdY9Q98yCqC3ze2xtWjAPMRZGDqgskQRiNbXGaZ4DC3GQEg",
  "key24": "4uP4A6FM4hwGM61zuVbNNuuiv9zit77R78ybzdXriL3smfrvLPactKBUSJzyGiiH4H2TW8quqF5biMeyKC34piM2",
  "key25": "45ZS2ENXroYed64dwCt2wS7N78UBso4BYaoX2MxVFuQbKM572dVSXJYWu93hcm2mtEFtnJw8knFZMAoXfKm25Ynw",
  "key26": "33FBESUssz8unpARh762sc7XtSp4LZd6HuFgYCzKN91nytWw76T5TCAVf1HtH2rhxG53fec2Sce3YBGYVvzzhsin",
  "key27": "48toMbAm7mcy1p2c9Tbv74vHxkEBTKsapv2T98WZCgGW4EEqMcTwKGM1M4ykwNnDiApt15LuNdo9dtYh76xg5gN8",
  "key28": "5hG7zkm3ujkZRwk8tnPgd6MhSQfXyWFSauFTZ5H5TP6dp2TgN9rDjQiNrSsfc7cDW16N3JQfxU7NjgHV7uF3MgTP",
  "key29": "2vC1w5aj3ugKNeRTbiPi4Bo3Qrg6EqG6kKdQ6vJZhZfjaVq5pzauiShuUQjMycMcPFxmS78uKy51inaTUTt6sMFr",
  "key30": "27uWiAn2EC9gyNtfFZm54uE3rRmxq72bDruCEXCo56fYWqPKMotLv23W9GxDT4CbKrK4TUqsXEYcogBvR9RugZuG",
  "key31": "28VdkTjz7A1sKbvXoWR3JFTYhzuc68XLquNCc4yRSXMvJUyGyqFRLk5PDnvbwjBgXCGmsi39ADiaM3V1xCTCBY1U",
  "key32": "4shRWVDDAn5kHFkJyE6VFSpRd9ywN6K2N4d9NBcGaXYFXf5aGRuYNjySAzd919kPCMWSs4ybhV9opLSpXpwDVDNM",
  "key33": "3iYCJ3zkAXUCjFvG3yf1muJehmrRNNd65aocZ4djwEZk6BCGLd3bttpbQrep6KB4TLnxBzvuupDGBxvSJrF2isLE",
  "key34": "2K5UEAVvEPfkXkReZeiLyiesBMPn8DmTTRxK7uWY4ePVX3o8BGzz29wJDFJDJ7zQt7ULEoCB677ZCBFQMjFDXS6W",
  "key35": "45o4sroVtv8TQuNzCudHGAp6mVwEY3R2cFrWwD8SxGnBejXMyaj2iQvNm5n2u2NQYzjpgx5peLRu4v4TftjoAwJH",
  "key36": "3xn2M2ts5CkPQVL8aFhghVqKfy98rBa2fY2RZyUq5Q6MuVDcx6UBksi6VeJscvVe9LDNcqdgP1GcLAHogf8qxyfW",
  "key37": "4UJ5Y1cGofXXaK1xway3r3NjXHsQhL6GLADqEkqbq2EsbtA7V6mkjPrnmPmS2jADRxvg2z6cpNZt38nCMghHkLYg",
  "key38": "4xHMcPsucdLAkrnsRcXPCPaHCeepDjHB3nhUvD761GE8d2Go3PZyQXHCs3L9dKQJ43vpjSyviT3YtGvSvDNsQNnC",
  "key39": "5zVdkj97zDXtvp9kfuiCNzzqUXmRCSMMzBouqhFN6Zvs2FyYGfm3RTrCBDf8EcWiRMB3GLiPEhSdkpajXQPVwjHD"
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
