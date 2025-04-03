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
    "49GSXfAaQqFGG6UCqke1uYYWBX24oaEdh2kQQCEMTLek5VmmYmE9osboKghyR77vSYpTWwP2z8yFDZAFq5vWWXay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkeNaMLkx858YsF5Md3EsfXbnKahimc2g1BxyydHFTvtZTCGAtvEqdxKeNiUzxjZNT5pjVoLhPTCR38UphcXbNb",
  "key1": "2kxqYEvEmUmyBmJkcVmEHLtFawSWK8hvjsanJkkz2hFayBqMBNWtBhVZRRbjduyCzUc9h2tP2ECqexkNQXH3z4qo",
  "key2": "3fyQomrjfZPyvL8iYGwo4ixdKgZTwqX1GxLUYsWC6sBabhyGevKBNdndaaW7pEDN583LKFvAbgjwsx7BndFjv7sf",
  "key3": "3r3cro5C4auf1ztsP3G57JjFhzJag9eeFTE3Mj9gbtr1Bc3jdjQ8Lc4H9sdNGe1gJS47qLyQ9JddMKowwWhVwUms",
  "key4": "3G1LZC9C3FsNbGq3TFpDw6pmtUFypDVPBr5zrEuzLcMVA1eCG6XSyi9JLyVHimxq4LtNk22FVCspSij2vMV8Px5G",
  "key5": "2rckZEa4TwnYC2QubAJGtbGF7DwtSmdwHpioHGY9Q5wUKgq28GDthocQK4Xx6byuwoHiD2t7m6jRw5UFqiDcYbs8",
  "key6": "4drDXNDVNoJVoSmG6aCjM3dJiD2KMJpQBKFKj2PM1uRz9qNio2uitMiGSrjKmF5oDqHVChfx1VTyAy5ozW4J77k9",
  "key7": "4zy4DKgxByuhbSC4coeR2wpwqNkwCjjFhTLE4yVkmC9gNpbXsTxv6zhFZwFkTy9pMKzA6sEsgTj9o5mwF2xrzT4z",
  "key8": "5NV3RArt4DgQEFsfmA7ne8LibHSzqRLZPBed1GZYL7EV6tKD3kHPNXpaAZFcBNmVhX8xwi9d5cS9NdTxJrQL6xDM",
  "key9": "5azU1DAKkSayqVRTLzWnURvRjAH73y5Cx5RJhBaJNmhrgePcyaHC5HG4xyaWHXWcuitTpmTrWxtoXyzKjuC9STWE",
  "key10": "3uofPN9PLhDkGbgmxfSa5nEHc8YyasM8sygTWkZqfdgjLScAdkbX6RcUQyfEwMbMo1ih2GAbp3i6T7kj9qGSvxeQ",
  "key11": "5ufDz4UkjZ5vPaJvj9Bi5nT9MoGp8CAto4MtBVSJ45hXQXoMWvAR2DpMsjg4v155pwX44M2hSb5afri38nL74n5X",
  "key12": "4oV1ihJE5r49vNixNPZL75Bp2JMvbMy9F9NmXmPSt47UvG7ip9J8osCSEMCag2w7Ymb1nL2att4UdptCYnXuMTzX",
  "key13": "4Mjf3gXNQmB7PWGzN5WdWgjF71tBgWFdoaZmBCGjzfHXan6XyFYNJJuS2vwhMsQuqKT1tF3QoHwQQLqMCMGAPK6q",
  "key14": "vQdwYauTU7yiyxVYkrAFDH7dDASd5zRMA9LkzPCmt1AJxggEAwADLJwBnJaP8GhitXSEZiFT5Qrmdp9aVw2ZKzg",
  "key15": "q8c7aCsBvWj2gU57iNisDVpn2NfFPr9Qa7EB79XHfupSDVuy2dWdLLY5h7N4nBJaUy8ciKEm8AmFxFKScCXop4J",
  "key16": "2Gtu91g7EPsRMQGN9Am83x8dGayWz1oB19jTnAG5KkNjndpHJCyGqCTb57EtWUnJ7P7fKGEbuze3qJXsEYSkysPa",
  "key17": "4ykyWPNfJDJXnpmUB1JhyVLp1EhcUzbENsyxrD17gcDSPBdpQ616edYVGU4GJPkPZs4hRJ5FcnQAo4Jv531P8qPR",
  "key18": "5DRYvYopCGe4v6yxuqYcezyFQwXqr718cr6NaJ7rfUmWCW26X1L1EUqFvUb8z6hqRQ7mah1eKdXX2mmXo8P5WyaX",
  "key19": "4XbKooqQXGmGejy8NXsnbons7Xo5idCMKj56HT4TYzVmki7qQRyxft2Z6y6TznJu43gqZNCVJctjhCWnKzBmgVTN",
  "key20": "3n3zthCR95UraxZf4YZ2zgUyvs1rWitoMACHg9Bxjofr5HxYcpDk5NZSAua76UxR4r8tw1NzaYzqFei3K3tfiKyu",
  "key21": "4Hk9V3h4WKpiapz3J1geYPo8eyqVse3WmnrkPC7i5PR6wT3WDMrjxsjCc8FkaYapWCTnkrA51YNtmCmaV9D9oauY",
  "key22": "5KzBHVh69LX2ZxNYRSJkV9ZaqzKxiGNUNLHGZZTFt6CQoVb8YZem4pnGv19sPTgSG8aSgxhSxrFgw7M5qoEBEUw",
  "key23": "4dxSuGd2YgoZGvc5M2rxnLV1Yyz2wRjZVsnAGmKYTXTQ2fTEZ5jHoCKrNwi21AaaoNvtAHXyrtxtBy5FwHGn8oJf",
  "key24": "3kfjtaaZdcCMfFX9QS3ALyVQUf7gx1oNtoPpVAvEMdyZWK3AesbrLuAr16DTprH8tHft9jC9ZuTKsEsu1MJsDmzT",
  "key25": "4AjoEy7uQj8H5ZPaDst2PSdxuCuQUaaBHcZuFMZeANoivtn1avG53Nkk1qxX5tZuKzSDJWXfChRBqxaUyYv4ZJMQ",
  "key26": "MSj6BuKGNZZW4pNXDRBN9aYFbbaaexbGiu5fjze7tQa31gdoHZmNDJ6CUgV2QMQfDopStDPmc96Uo4WkaW4bzZB",
  "key27": "4oq62EoGLMb79uYCa6iQ19y5MFABpuYRjaCgWdxjnSu2GsXtdomDK3kLGSjxcX3Hd81QwqkA8eUdiuUUCdphCNkj",
  "key28": "qHyBYUNAySpYaUZZN5tYoGCBot5aWYqh1zt7SgAu38teNJnoXPsyCs2Fcd1QqvSeQ1RA8tY2euEz8r1Tg8SGZoJ",
  "key29": "5goqXmQFmZ9uS9m2NkLcAUxqWeBi4t1m6Lufm45uADuXTuvVvyQ64rGrbHTJcQvD8xV2jusjw6rcRUuqEBBtX96Y",
  "key30": "5YALyejWJCgu7fyC8oXhybHmLZ1EPpcsJgqha8DXTXbsUDxTzEGCTgGDWZCZBxnh4sozsoP428BP9wX85VDyNUyW",
  "key31": "4kdRvUYRVGxe69xpShxkFnmcTMbfchFDqPQX4Jd6fUaMJJh1kWQQ2XJrozd5e8svCJZyFpk5MhLdG4oDw1emSGh4",
  "key32": "4pFi4RjpdmqyscXDhjJg31SF2o6qmUkbezLxmYktRgVSiw47fybovXkbPHy16dgWRfyyfqQy7DkKpoEjMNc9otby",
  "key33": "5HZ2HVk7QUC3SzHqp6EvesTcy9Ca15aCfotYET65a8L7fyZmAt7rVjprhHtyxFMU39cznYSpPkqNJep4b5gh6yKJ",
  "key34": "3CG3uJrgGcZVq3WiRVXmXKeu1ksHqQihsBBwH3v4wEbAK28T3yxNPuoEbAfqrZ8LEiSrtyQgPJ2NLcNP7T4F2yVe",
  "key35": "3T339EBFTyg7vNLqAVGajAbuEfFiAjJSzS4PmmUZCrxdSpTcyk57tYEPq4vuhfeF2a5dszMzXuoqRGHJGVy8Yx4r",
  "key36": "2xrKiFE4sUwM3Kgw3jQQ8CwLFGyUfLXtnnHT24iz13kznWFQCELnmXbHn9Sk46BBKy5ZXVCPxmFKnNFrtvZTR3cS",
  "key37": "4TDjvLTk7cc4QzpUa7mTcGweHdsSsyxnnZ74Dn38298sVYW5Mm9KbLMJXkQm5LSokwpwhdgJTmZL2xyiRiSPAWGN",
  "key38": "5EmSsyBULCDmR4vMaiQ9JbBvXpPVDVnUT7RPYCrsLsUv8FdjSTHzq7JeM9EFkqXfQXJnkrs2AqQTHfMKjVECNzyM",
  "key39": "2qfERxBN4z6Qz7ZQVvDYCp2CenNRyLwvWsLyQnGGTANj5n3X8r5tDDbi2QaspEPLKh9hptfPeudzhSeD7mTC4wmo"
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
