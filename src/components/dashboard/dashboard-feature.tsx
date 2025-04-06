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
    "654Qq5jw8L9HQhcq3PNKaVuUHPQkp2PCi3XNCQiwsA29Q863SXJhAR9gp9qBK4Q1rwcUGWT9dj4CcUr13DE2Pi2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SVwxQFKr4Atq5n5FytB4DKD3zfc6GSPoFHxApnwca8vbG65UuQ5rv8Xv4T8wfS7yPrEEW3Yyx8Wa1eJiQANWCC8",
  "key1": "3W6GADgwFMLGcJVx9pFvRdFkpTDjZYJoMGxijpWkVFiTgfsdwwCvnVYMeuYKMHCwizcEqd6xz4Kwnj7XkFD29Z71",
  "key2": "5hrGBRVo76XtuPXUL2YtSBzmwnJmFBoN7qVBWcau418JSrmgf9Q5ZJkTdmbZWvdhvpiMfqyVWzMSJGGXkEzfk1Jt",
  "key3": "23yR8tdtU2Y3ZEFepAQi5d3n271YdXJyuKrT5F3ekEZDMtjqrNXJZ7j75vmgReoVSAdb9UcVcFD2aaQinCN5m4Z6",
  "key4": "41rrrP9auPsCex3hVC46SaXkDJPdZwyjhRFhkHLXnSBscezUMvG2HJy3bNfKNvP3WDVzqdtuQqs3zhdDeoSVWQ2",
  "key5": "JW5WHpTKftjPkKvhLyVYsu2vLxiesoRogNGfdzFQavcDhtXXCiHwFqHCJ17y8MV3m5iFqGtry9nBJgXMXftWutp",
  "key6": "u6RYvhgVD5erMoqdsrocTvAnTDDCRixWi64agsRRf8gcptWkrU7iTDFDLitS6ojg1BAPz4TromS1HCd683jDmhn",
  "key7": "5NLovt1w468Cfu17ji8MGqj6w3SZd8xQ2pX1XsuBmEB7qEwCrxwNVXmLBiKgHgoGFkujFKq28YMHSCoMqRQuoC3k",
  "key8": "5378P3skHTioq5G1NQmWqQ7WEGhntQhphBHE9pQuX17HxaND2huvhpDFzGn1UqQYRSwE2K34DPxrqoTwKSWniY4o",
  "key9": "33cmFVDp78kdAMLXT9RtAWTTS8fLL8GVjNbfDRtjQ9QQfENx8kYRPXCXSuDrPu4yZ8riGsC4ws6aXmnG5Eq82Cqe",
  "key10": "2eTTjhPL5JWJMUBUSGMx6rLZ8dyRm8aEE3TFjuCYqkemd5yXeGtaFwtyMDiGn33VAHfhd1FPpbBKwaQ9DM3b2Ngo",
  "key11": "62H9ZFxG5ijE7qxUeiyxqGqJFR2SUT6QdeL8JxTaWWjDeqHVgDLcu2tUQhFXE89stqPoWdP9eqX6NaB6gMkuumBV",
  "key12": "3exZdNRPRgv7h8j4xNGpYs6qgGtSvhvV16NRjJsuYTbxdtND9e7eKmg8Jov52eGaTfRLYj4EbXCk6KrJ52doXezD",
  "key13": "2nQXivUaKzVvjdFxoLSQCQuxaNEUDuZP8Jm29RX1XZChFoyhzySKt8MBctZWHDoVUk1Hn1RQHPBsEERQBXvuXd2f",
  "key14": "51weaV36BSmBBGVnMJrYU4oujfZDFcRcWe76PzdXWDMNGhQRTGDVGTMDNreaVaGmo3SyecQmCNUxZvUxkrSvsrDu",
  "key15": "2yWQvgrze3PLcFL3DQbDqDcBixHsT7jG3UHiT1msXXk79Zet6J35kkYgcVS7aea8cjuHxH1yy2WYXizX5gNhP2T",
  "key16": "5EF4ZuYdW5NQxyPborCASpBEUc7u6XHwpqVL4drti2rUtebWdPvCWDPmRPUsP3jtzWbu6v7Bh6eGcPMJANPWA2CK",
  "key17": "z3tV8kMuW69xqr2dBZUE1qVhYPdtKxwCDCLygdV2MbAvb4CmMjgkghx5gnu1tEzgiF1uYrLAGy5nP7MiHtBHuKD",
  "key18": "4vuVctqjSXGVvdkHzo7Nu2n69vYsNHWWW7bGJqDxoWmhSWAFMmwQ1LtAPA2wVKAsNp97p163z891mY6zmEwwNy3q",
  "key19": "cvYwLfJmhcpsPExbeqAASzucatS6iuSKoX7aSky1CDrqSrEgW4fUkEn94m3osqCkX1vnKozUC3XZY6sbF58oEJZ",
  "key20": "5hAen2iK6EQhc2KGGHzzz5TZ5X2KUqGJ9jTWsfVgUBekjzJAey62wmCC9R6hnta9YjNg1gmkdZ9EabY6g59AexEW",
  "key21": "4eiUVLADiVQVCax64S7VC63g3M2eMj5ZpdX1ZXQYrFBBop3r1Dz8BfbTosqcTidZyEoXMwsTpc3N1oQEaMW4Nbxi",
  "key22": "5EoSBBQm9z3xFHkLCmPWYQMCWbsVBDqv57MgKTpdN5swj4pCSMWZRpSMpke7PGssh8WAPyzYaSagoVGH4EWtthWx",
  "key23": "3DUbFvjjqXjwSojLwVP4uv3XcL6yW1vnSu2RvcbhKYXnwWKyzsBLC1h6Sj98j2fQvYbmzyKEKKLX9hcKjY31A2jp",
  "key24": "35TkJEDd4VhA6omdHZeDMawmTiehWsY4TmsjpE5uXTEWzefjfc577EUXtToyJSDidEV5T9k2TK7EyhuXe9oWfMwc",
  "key25": "4iFibFPJSftcfc5oMy4gnadkYdU936eWQxqJzUErm1EHygXtpZXDF1qwFvVzUjUWVgAwMKQqZrBvzradD9DxU58G",
  "key26": "5XMUiBEH885a8TU93eDEdSUGaiMLGehc7wJ17yTUzSeZ6h3FH4uB89e8VevykLCxu9HgAuoiKQgczQe7wWqHNxjM",
  "key27": "5xjFZZy9iJUxgczNEwKV2gJYBPsfVT32RR41Pw7k8fPErGKLszhhtyVH6hfAMNfm4bBrzBtpT5fueTQhG8pQMTZf",
  "key28": "7aZpk5M57sLEuH3ETwkcw8XNvMxouSGQUsoQteMwyL3b8e7yY4LC19F2iHKwgzBpWNQkc4mFiwT1T272c9cpxrm",
  "key29": "4a9ZeiwWyDdk2CV59Q8nMo9EGu1YtCKqFEv1eXx8BQcgsfsFfkUH5ck3Tz4rHGTTwk47DnfSyJEf7VuP5mep2Dik",
  "key30": "26uBf5bCVt33CZR1vSNEJtsJWgeYHVQV23v7cyhAd8LffrjwBmnC5VQmMqiqk5bHMfbriHydQhTgxsZg2JPmVWyJ",
  "key31": "2DNxsD3tro4LAfA6trdUBP5tjBUXYqEW8XwqJykFQrNd55RoMkAGPKiW872DGKAKWX8UX2KroyVQKBpdNkBAShai",
  "key32": "3QirRE34JFxSokcJHJgWd2baQZchbph1sSCEAVis3eSqYbQYi5GsyXwECwfyQxwz4a9Gr4zgaywrgoFcgqcDugou",
  "key33": "FZf7aFfuGDKYswdbm4i3UtBcVpg6698attVhoLdcx1zZw22FVeE8Qqcm6be5928ntb5g2xFjG2XWHWouyMNaACK",
  "key34": "3EeDuxEwK8xWgJskdoKhnUiQFoZbX2D4z5ejEAuWFb4Q8PkowB65nAEYixG26gb8r4ZBxdkbyhiLGi8Qq7iAuvfC",
  "key35": "2NyrGsbit1vfcFNbPgy5rKMbJeg5ZFZ97rbtbrbB6aicpYjTmYSXWZuHrL2DMVFrkV7PeXNdALhHgnhwWiT59pit",
  "key36": "4gd7zwqUGFKrEVVpseweGx982hQaN6NoVyafycZyrXDkbcYHvSnMayjnA18e2iQQnvsqdKCx6jeSBWPievBTp8fk",
  "key37": "51zieS2aQncbTXt63JdVwsGerMoDheZk7xKw2tud38qxqZfDxFBrYSW4566HyBXxNipQ6t9Nq8k4AvkZxy4PKgus",
  "key38": "Xh8ChAsATLyD7FuMusjkjyQNhr3bxe4wQpf9g3KJv2VyyXPJ7DjwHssDYBDXJYo34VhRUUxDR9VLDKZcRHmrRc2",
  "key39": "4qv2TY2KJKTbCETe4SMyxcU2EXUPEqTYapUwQoK2Un8BQaNsT521xCK4uzPJ6VmJsC672dLu3JhUqFM5yo66d9U3",
  "key40": "2F6HbYrsHmY1F6PLvhQNce4XJrCHrLohAbyKFABYvaw88Tti5eQ8MoN2xnJszLZnRFCDT4nyX1xjtkaoEADYK91H",
  "key41": "2SZgqk8wSncuZxU8njzyYtrwBoqh1SF9Jr1gLRGVWvvUNUBkYnZUZpcjc7sVRHEeNP8ZS3Eiu18WKdXPBgKarNLG",
  "key42": "22hMEEDV4WnoVEvtFxNikh3husi2F23Nx6PzhdojTpWjTFZUemnayyPbzWcxrtMexHdrqys17jGkcwLc1htbvTeB",
  "key43": "5eBxHKcH5twipZ3wZT6ScwZuUvDZdskQNzVjLLUsAR6WPUqoVsQ1JiJAqzBJXUhbRswdjmLYyowUsQWWjWbyFxWa",
  "key44": "3Ha6i68DFAc3Qf5DrUgkRUWnGFarVXLwWrrtd9ZuYKkgdDBkoRmcmJxKSka1pRed7Gy2vVv4uF2Vr5JGfXVBH6rd",
  "key45": "3PdgA7PP9nQA92exCVRckVquJp2kQ2fL3sHQ3n1W2TeWid5pfeEVSEwffcL9orY6KBE1beA2nWnNP8oB1AhyDY12",
  "key46": "4mUpxTSXagGebnXzcp4oUwLacUNNUMSbAnAzFuz753baiiL3T94s1qLsxrgH664VVjUK9v976DCio3vnbQzXkmVe",
  "key47": "65ykioW9UKnr7YGw5KDr71k4BETig1AQ11iWfdS33nvNJWgvHKRRmsKYtRseizhPTc5HEqr1Je3dSxU9ZtzUrawe",
  "key48": "5Q2WSnJV3K67JqQpG6em4dkeBZcUA9p8ojozryEur25f1GgB8Kiw1VsvYrq42kZS3YiUxA1gu691xyPvCwLzVVok"
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
