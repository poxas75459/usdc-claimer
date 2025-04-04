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
    "31oujrhhwztZoCWFM3g1kLaidftURoYUdsMHYJhoZYGp1vHSaFkQz5NNjcgL7DXVDMgPVEMM4beVabdFuByxWc95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h28LYFxAPfaVgU8NBn1Q7KSJAhQCVuuppiPj6YA3q7fcKHWtMuuUvZ8tgiFppHamYndtmzUrjRKaLKximyZVs5r",
  "key1": "5BvLeFjbXsf1Q1hH2FtNm4H5SuuYzre6pvUnUrGE5VWKCQYd3hiBpQkHC9zncjNR64W77nUuebRAc3qfw51shzD",
  "key2": "5n8WGNg4t3ScAPRdKhjohwKVewLCTTgau3axZ1Nipn144f7ioKtM6mNVKmYnytBZqw7MGPDYEed8A9eA7YhRKaXZ",
  "key3": "3n7sNZitBVGxqkPhn5q5MVQRAGrw2ApkSfHQSB3AXATPTpHZPjFm3YhwH56DMsQSnXEfWSVCjjcffXMUhAEEdoHZ",
  "key4": "4zfGTNqYQZ5geX3gS8A3sDiLGPH3PR41DcW4ojz5ukMRGTfyixdxKHsxxGgZCSH78CxWvueqBQvZVcmDLhh4wYPX",
  "key5": "3TZMyCdoBwYDwDxssbpkrCu2xdA98M5WLaJWgpsjvV2vDByp3mNH6xBRZcummDcG6tCFTEzQ4iZzjV5UM8to3zN8",
  "key6": "4BpqF3QXZHM9xtmw1j3CFYUKiyjA5wF5cuCLEGHXQZEeR2pH8b6m4vfXZiMdzX2715eKLmLieRnXjyYn7LTqXG5K",
  "key7": "4pT2NXY7V9d86civovmgcuYvRMBGXouW1yMPZwHvEbv82ReZzH2tDvm8f94ayMsiHYwXq48vckZKS3xPrzvtKDdD",
  "key8": "3aW1ZmAkwceSiYwG9ijq4zaoVn49vfxxz4qfnPRDrTmgcLbvS2wsQAqHh2zZ8UWP6931B8d5BBABmUqNpFF1hPXT",
  "key9": "5WCndDdgGPvws7ayywRfKBogRFaPY2dGkoRoMvcwbCzfVtJYidMQophUknU24hptsVsvCiMBCP1mcYc8ggzg6D89",
  "key10": "3nRKC3f9JpccP3QoVZiyGugMeVZiCkHMjdQHRruA4drc1MxWNdof49o2ZB6hoQGTyJw4vCqddfLPZ11Fqo8GyRi7",
  "key11": "5esBM7UPDY7tr1sqEBR8ZcJo8bJY4hjXzwP2BsnZWgcWHnkqzRRUjnTxGrhbjakpMTggZZgwysNRNDZt2PvVXANY",
  "key12": "2BCtysQSRPvXCNKyPkPd7taH2PiH84T17uFuNVYTCBNoAtEbk4WU57LNfdPx9p9CkhMdYGEyv3bgX137GTJ2VDk1",
  "key13": "4kqgC3ot8GL7NmPTTuYsRAo4oH9eoMdcLwibf1tWtMHh4iNnyAVLpJeBKtNNPe8yBAyyqJ3EoghXERTa8vdnxc9a",
  "key14": "4Sedrjk1dz3dcC5EhMfsAuCfr1ukuVGPNiioJYhcRL6THd7kCnsrucQ69YkpewhExveWLf91WPL7TifcS4VhqmfJ",
  "key15": "3rHcdC8GxfMvux2t8EvUMegoCUxow8hJxStHBmsrem863Wak9BbvWyPNxawSY33husSg1teD3aEEd9XdQGE1gBuG",
  "key16": "3rzZ5dgVWvA1jajq6jiVUZMsm5voz7qz7Yjvh7UUr7akR72RQmv8qKfUAvCMutRQyKe2e8daJ4dhzdjuoBdkjAaP",
  "key17": "5RcVKKXfVfmxdMB5BiGxfKZNGcRoWrBFGYg3LL2KzjY88B4XZ2LQoJ3jUqxYKwwWBgNibUJi8tpJgiiMrmb1jBom",
  "key18": "58TkGLvmLxijozPsajc7ZSMEaSHXA6WcA8JFxchg5PHmRe7qPDdJdX9EPPzYMTmkzXVrM6dPsmLNfrujaNQuYbvd",
  "key19": "CRKkNR9kZGRsb5gZQRVZN2ojc2nWKCnpeXUKzDHaLFS2PM5qfbdsPF9aS5CFaWvvgkGZKsF9559SipNUiUxGbW9",
  "key20": "5vx2DBD5BE1kojuREic1EdnXVUs6Z3vw8Cn5Qb5nvyEJPA8fiHQ6EXwzGUTiE5TpezFDrfghcMuP3wRdiThxwQhS",
  "key21": "4ESG3ofC7NhToosxkk56WEZWqVj3UavEhvxCkM6suyJUo8zcHFEiaP5wxZ3MEYpfFJa347anhvfzeFzVHxq4iftz",
  "key22": "35CVgXT8AWcxYsZHrdrQhKcBzoQS8sWu65FgA6GhJjpvzmNsf9XSnj4Sggyq7LeYduir871LcuZpCSyWJzy7iTR8",
  "key23": "4GeoYedizDHP9tTjXKRa4N1P1bz8RqFdLGBFdLu8AiR2oRVVDWgovxB3NsPbr64U7D6dosUDA6E2wzFebGug462k",
  "key24": "4X8XXu5nLzWnak83pVv5X5H8cR3DaHFTXKf8y7CJnecY6RAeyeuzwJdZuLPYAxxUMDsb61VD4TE7Fp1BucucJWbQ",
  "key25": "32Jh9UeUTSySGJ2FiuqqjKkHojxqYJdovNcN72cWZgZdRe7x3yS5WQTapLqn6PuYnmfYjqdzvF8TLTk8bdAVYdiP",
  "key26": "5y1Cw4wP6dASGY4rcpsMkgdRE96xqjHwehVpQ2NJXDhyVGA1wHBsRn9rbheRc6Q9iHG7R8fEFSjr3JpiMxH67s8S",
  "key27": "3U5ebRSYyndWdJ6B7a4JyFV4ip4dVWXDNhjZFGQ7vN4DEgYPJ1eu5tpMkw4Q9s6qfniSSQzL3qPpPa6EeApB5zdq",
  "key28": "3jq55BTaYGw1TmKJ9SQ423yEiYdCSqSQt1gbo8X7j3EUSCwLbBvwL32s4KeKAxkJye862mLtrYz6i9cKXn3Cbqek",
  "key29": "Y3PgePJGQR2iSLaev65DuXkdW4jv5Pf6MPeyjvBGGUE6Ce55pBjZoyX1gojrFoxoKnpKykEqEHDqsnY3nxBhwPP",
  "key30": "2MciZby5dHK7qTNWmLCSmsBd3EjWBZfCU7cXmj8jQEKVosL8ZcixMBM1dmMiCWBWEatqhTvECUgxDJTkJhNvgSXB",
  "key31": "4xYypGuAcN4L76rCFmexbfcTSRQb7525nL8yXeM85TcJsbyppeo8ooudwdtAoAVFJR4E1zbGBDXy1fgK4DZpFE4G",
  "key32": "N5aHjAsYtu9jPgcDniXcH4PwuGJ75kg12zhwy1H8h1PBiRsqqDbwnkJiLpD4AW4g5gbe4nv3CJpefunEGgnwiSF",
  "key33": "5iqvtZwdrG9xDaikp5BWtcL7aEWwxwzVFmqwrKhVghfu6XDNpZNZ6khbNhmufaoskXKukn1vNB7ji7QJcqFwecAo",
  "key34": "pHTT7thGSvtmPzqJpMdjFY7ZwcXRzfQC1Y4UVAscG6fTQNRa92a4pHy7XSU5HYG599y3yKggn8VKjvDCYcZGQCZ",
  "key35": "Qdb9SC6sLtbEXFgztJ1aUSm2uVqi1SgQykmrYv8hTcxMncyWZ92EbHCz44eUtN2vCTV77bfVaZyoMhS5nXQKx4P",
  "key36": "2BgoQpFDTF5ixkXRMrGCnD75mihvz9erXTH5ekbivK5jF1vATt9nd2qoEAhK935wZ14n1fXv5U6b6FvULWYsAbSA",
  "key37": "62LHUiCt8cxzi8WCeXVqki1peKmkmoSTUomuS15bokppgyouPMh1VuftwLqg6AYg6UMktfCWHUsQ62ZcrLigqYGe",
  "key38": "51s9Zm5psAur6vQPXKFRdSWxYxBPEfyQvztEyZXPAawVaEonnZZXZNRujrDqmyiS9fcvAsVu1BY3hAFTUe4LLJa6",
  "key39": "3PodNhf3wrfqDJHB2WTiySjKUXZc5irHiwT46HAC9WnMF5j7hLD3ue7kta2xN9s8fWuoCWRMtPY8pa7SnVrZkqBr",
  "key40": "62j36pFXVYiW2rqK7HvMEy33qn6xtfZwYsGz3Bw2g5YYHxVX7UrMyTq6SXp3JamXBGmXLBkWK51sF2WEaWTagZFy",
  "key41": "2h8sdS53y9izSUmtnNVCrPb4DZ2y2SFkHGsnKoUiNhXhPtSJRxTQhQWw8q8pqP7VLLDFVfpELB9QBcA3feGDCJ2B",
  "key42": "3TLVqU4bAVyeY31isNgofswUPBTsnBq3uD1Y8KXX25hNeBpJUoSm76onAZ6K7kTVMYEtB4gmwPDqPifkx6HmdeMt",
  "key43": "2SRHKUhbQCMRYWAYC33JoWmvE4CtvcNFvdRiNKX7rRP1jH3tTeXkcJ7UfxuRQiKm558BRJG2h4QkmEkR5m939imo"
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
