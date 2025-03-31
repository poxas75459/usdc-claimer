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
    "3HPbES98CJerYH7Nao2UCcNGgBgivdz25ZxHZKZZmLCtVXTgtc7hbPEFHczKct8LnY15hfoXLzzuWkD5WKq7qJt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TPPmBsXigedVEsBmHRuHvrKntd8vGfoADUZTbLg4qzjbhxSpMqgygLbbVELWFxbHyQEfEVsowDq8vLR22TfGZSV",
  "key1": "JesQdzzumAHGwoYhMPtuv8HUQMrtEF2qckPZaXS347yampnvHVmXkczbXSC8CCkzNRgnv8kXnVJ2CrRme6gEisR",
  "key2": "3HFpQDFZKdbjoWM4F3bEDVf2Dvx64fkvi1HsZ3DkKprQZ4ieWLMMQHZ6CDD4zi2L9WvdsYrS3JcGyNUVjSMGGMdg",
  "key3": "sPmHXmYeyiCnLrDJCgwr3rsv8dC9G4FuDcbiVsR7LcobFfx84Wn8ju5pDNiuHANk2LYVWSGJWmf6H7vTMCobLHj",
  "key4": "SBsi1DDCKiN7QmysN9ZSthn1CtRZ3JF6HVyEShBQLGbewqkwXBwRpYYX5BDcWWDijfVeJU5MhC9VLiPRnEZraxb",
  "key5": "2QMxDBuWj2vzWEPp5hQt7xPfji984m5WUrdVTdBhXG4H4v5pFGsGpHrZefeXYX9Cuoj6ZCywViDLCujb1MfPsqHx",
  "key6": "54Lo6ML3mMXzarE1jT3dwb9P6uNq1VCYf9UUU39c4CwUeYQ13U4pTJGhdx68CrR3dttvu6RB1t9gqYQWy4McnRkj",
  "key7": "V8ZsAQZaxih7h7RRzLVA3sSFthKXpZWvpveERgfLr8aadote3GZaPyUDGs1ocVKL5ETeMY2GjoN6coN33uJNLqX",
  "key8": "icTzStHU7MQEnGSErM7D5mWm8g2QowAh4geGxHNCFBCyhZqeNDpaTCJkXkNBHvgdQAAJtTbX9e2XJCB2pqrqr6u",
  "key9": "S3E8cMThJmG6bQxquoTZsgm32Vf3tBizC9qiaqtDB82TKvcwSY3MAq5MYyD9NYK1cZfmEANbPvwwzRkQAcJC29e",
  "key10": "wC8W4QS4wNhtmBjKSFgGA3xNJjH5wZGW854oUpKiQjQGtMhmoJvvtM2FkqbzjWHoae4KA2Fqn58VsCcyy56dNij",
  "key11": "2aeSo2uR2LnP1Ua9jN8Z4BE23gHfjTpQfmXXHyaiUVZ6W7E7qFdaBKsHRvyrqRdTYGAMUVKQkim1gecGEhvoU5Zp",
  "key12": "2Fa3pKZVyX8G8qwDA7GknCXRYcPfv1dqe2nFDLHtNLJV6iKtrANstsS5YiTexfs4WFipyzz9zXxodZSYmRaBUDTC",
  "key13": "5ggabBbu7ui7QDDgb2J7mwXfSQNuaA4eiK2EQU4mUsnnVQU8RABDZmKUcWgg7C3LPNvTcSR5nXSisi8yT1gpkkG5",
  "key14": "5eXSRt5wYYkbW36vpq4xE1dST6FjuXzdnRTT1prv1GCn7TxXHED7CGJhoaYx2yjvjaZfquFKxeiYFaTAPeDWKPht",
  "key15": "7EnPVyDQ6nupJCDSQNRSAJHeism8FSfMtrA2fh3myQT6bvSnSwSidobRjtW73DPGjoc5Hsj1jtgpNLsXH1sko3F",
  "key16": "4kbQ93KbVQwYZ57XsYeCj6ewxbsomGTm2WVM5tWz1jvnJD7YH4tfW3tNa5XMxtR7WyDZCiLqHF7CAquF9Yn81mrE",
  "key17": "kiDjQUeZo2f6L5qHfYwZQtVyXHorzc1oiBGX8NW84dkByjmX5wmRgkKfLjBjrDvxtUmYA3VPPttPKxUcxg6ELPm",
  "key18": "rxCPeG8dQAkrSH5WiKGWsVMyNMSnrJ1jgmYVbKvdorokEpReawMXwwHoMKGkD9s4g1XzZcGUPznLTnBsURQYWFM",
  "key19": "4eEbTGYz7hWxWSQPKVcWs3KwNbNYfpqh9CV3Db78VX871HYpa4nMG8oiAx3zfCMw9FHTgNawc4aTrK1Vd9fPZmuL",
  "key20": "3uKCurRtH9ZaUj2wtF7p2gAs5EtbxkppwtcrJ1FW6x8cmvXXRvjmbbfFqvdNKj5uMQRWx7SEJtn7erZS353oESdS",
  "key21": "3qXTP8hVFuY3cQCzHCLaJ3Wxk1ZJoyw1uTPzYedMiKoRs2ibAnFjhAvhxjSyFG3nChaHrMp41MPo3uWPJP8QHrxa",
  "key22": "5LDAc9CQtTsYhcjuqAznarMn94fT4x9F4B2PcV6FQTY4CQV3Kk1vTzo54bCkGbPLrtYFh4KSZkLwbgT7exq1fMQn",
  "key23": "3LiMvGud6yiSR4HnbpzDE6euMF7Ds1Hqq9C2JE1kau8N7UbJRioWmFqGJQATb9bPiHEbwuaVx2nazjLfXnTv6tpU",
  "key24": "3Tc8PLzKjyLE69TwGnA8uDjiQ2kn9NCPtLttFoNkjwzwqfhMbbuXzRyy6G7AvcBBu3ye5SwAMFkXqc9siWi7Mbh4",
  "key25": "4qqADE28y4cajv4gVczSNCyqsCHJ9itKb4TKDYqXaQh6JgEsT4N72E5AgPPkeYddQvaWBN12FaNepEUPosWbWiSG",
  "key26": "2PGzLuMvSwoTgoU1aH3VKnS9DNW8aNhGvbMJtzP4L8GvH73cFKBmx91s9PbQxGu14to91yfj5GnQWPPYqhf1dVEN",
  "key27": "5bi8gW9PBRrmVAWVZqxjCTQrTWgu118ecLg6Kki8czq7bDtMUUkaHtB52aJCMo2j8J8StFEZcdfYMTWMmxLVb82h",
  "key28": "35qg9BDC5zMmVaaf5WP2FcqU29YN2eDaFocRfQmYBUxaFbfBxtPzwnQwBH9ZQHbV5jRnMvcB1Z9fmJGufZNgxGRs",
  "key29": "9vHDFJt86Ru6Pscto9wvTxp5hZWZBRswq4jrzjjnKbyCSxGEnAjdtHieB3RJmf3ShYS6suwYVCLAgpMGadUfc3q",
  "key30": "5ZbSwXmGJyXRHYK1HQpEvzpu4DFq8NDpBEtBCdeKKVuFwELDbraBjWBq6M9Fm6rrUAbNHNuPxfai2FL57DsbENEk",
  "key31": "47LstDJxEo2eotJRhP4ctKF7LQfkkqCJNb1LVFpU7H4EdwbEmb9DJ8DKShzkXHARzJmLAsaPdA3mLp3NA4ZyszaC",
  "key32": "2a2XDXcbxcFxhdQJqYFu8D8DVz84QL3CWCy7ZRhWWvKwfuPtqiBYMmnoyNveKTwCXMZf6YMfjUArMdLQf7HRpYem",
  "key33": "bWfMSpXeS6Vapmw4xg66p5KxrMTX8VYrdCcVhE97ek9zq1u4ZdAbedRzAMEX9kh7A9nj1JdAQsNC2n8BgNo9uc2",
  "key34": "51L9AhmZbfzrHi3DRdkar3qA6x2wKx85JrVhSxGsWc7tg7PbiNhEeRCcoqiq7Hb4Lnpv4PZNztBEjQhVBasBH4n7"
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
