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
    "43AyVbM8WqrKuddYSpCJ3VykYgebqx6q6j7jHaFn4th2aMeAjaVivktRCxrhkytiB9yh5XUXdXXmjHvjXMgQ3D9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXBwewSj4YqxU2MRwVVzt6pQ1ZEbEXJhoyds5x9hvr8rzzdYLgZopgrnmCGSpK2S9zLAr1pFVyqsuLuKtsiR1Jm",
  "key1": "3Hxd3GhDDTUYiDQwqQq9d4h2thKsMtS9sAdUeUQ5eirzG68HvPW4HppPmHXDaAQGtaAQN19D3uL3qGbKxa7aVf9z",
  "key2": "62ST2kKoTggUdTzjrVyZE76RF5NFXYn5fC6cF5icfWn4V2UL7bZDmSnM1TKyorNxAM7bNcprjVxCnngo2Mundjya",
  "key3": "3dWebj7h9VTQb3YAb69LhfuZcWyxyBAgqQuTcLMnEkW9Us1RaPT8X597W3jP8qv1qD7kuaxaJ7CtKRo52bhTA8co",
  "key4": "33BvxrW8cRvQPMp5ypbu6MAm9XsN6U6ezYDsz6bVcrcEKUe7tnH7E2YdnM5eDcBjZTYjMhYMp25x6gaAfkNUGM38",
  "key5": "5gmPF9MMwewH7BjqZdPxheNjwcrFBd3wmqvv8AyVixxcLjXYuXe19Cwq68d7zCWUAgJJK3HQRrV4XSBevDufy9X4",
  "key6": "dGHaiPaSC6464UVU7uRyWSdhyAK7r3ZvxuAmxvJUX9wgd3bgJ9bZLcb5DBuSENWYDu1zc8AU1NSod9JjttKAC8G",
  "key7": "3d8XgqgQsqjxny1zaLiANjxpq8H5x7U9FtmbwnnwuzdsgT6bSLRkzZx9hJKxEhFccZ7NWrL4nTsyfUNesfeLFH6V",
  "key8": "4dNsVtshiuEHwCdXn2knEw2pBrqMzrH4V3ofkF73jh4jrJMxfk3oYJC6bg2VY516tV6Wr14gMLyGr4VNAqKYQ9N1",
  "key9": "kh9ypKunYyx26odxFFM2jjwBfbXQY1F36EN3wjuxAMrNcstjvcnfjWkSmQtqsbkKk1vxTVmXyp4fGFz1qQ8bXR1",
  "key10": "5pH1T3RRjdFZAmGTTft3xLenfLqR3fvutxr1QBtMCPKxVAFSRPfWfgNdAWHyDaWLQvfYYmFu6v2xMnnYsJj779cb",
  "key11": "4eCiGQDnHaMq8cPkZXFajQVHUUMSjYqSYrHPsRuKGZrTRhGTqrsxSn1JW2ddjkj65bHNEfCJt4vKN3F2CK2fTAM2",
  "key12": "3DX9HNX32FVkRZMRPFTz8D65G5EpVpe2UWYKuzYVG1HFrNuwUiEe5tF2WJ21G8KbtG6MnzYnsqnDuY24heQtTyPE",
  "key13": "hjin9abKrSEjHd9PJLTYdfox1iRveakeUzpVM2Ntd3xfbvJQCzHTvMBwAuyQ3jXFKPwzkBNFxw26p9T89BrGZ4o",
  "key14": "5M9Abm88b2m1cf9Y1EHRJyZqmx7SPoTBKYsa4FpsqsRDTZLTnFh9EYAdVrMG1HgudDMamXVaKg8hADSgeCych1ei",
  "key15": "5WJShdubXzWMwqSjpA2pvD7xUTaVH5tjfy6MH2ccrj4XSK9HdgzfupaSFku8K5LU8uhzNEjdp8A9VZAu8JHTfJoX",
  "key16": "FizAapZJwQwXJ6ZkWxzuwS7cCxR1dwsY5vgBv7vgHH5UxmG6JbuhWZM6UH6wBYTXoKyzrV2uRo2rgTgLADCfoQw",
  "key17": "2ESHJGwDwFEnsbMbrXpWSDwvdENtHya7NTw4B4mabsz3XdEDpKctJTt1us9iGigu2rMtQu3YM2UtT1jAM6cjuZTu",
  "key18": "4wFLyu2efPQqiPwxtGWbCjRZ3WD5Byi3zNPa4ty83R1SjVnw4vRoJZJvGZLudTj3YQeTuLtCttNqptvjHHtcAdtS",
  "key19": "2ezLoqWicTEvr5cwDdAqu1t7qAeq55Ej5D7HZbxt44iZTZ6P5jNXqDJhcN3K8wzC4Y9i2vhCTv4yEH9djSPkhjVY",
  "key20": "3cDjgP7a6PW3hyBJHWNTvfknBJxw38sLjP7QxVu8bieK5wbBDXhcb1RNrvchoz3FRzcoQP6xAK5ahZy9v2PGTwmR",
  "key21": "4RebzsJcRdHb2GQyP7pgb7gCKQw9kSg7r24mn8N4ryfZw2k852uTVSHQvc2RUXYtQveHHTYHuhBqoyQy2njqp2Qy",
  "key22": "3EH9NZPSjfA2FpQzXzg746X2LwaerSjYqcDvNyESDLVAuHEsL1SpazSEqtFusyeKUeJMMsnGCnNFLvLj9216S6gw",
  "key23": "5Cb7MDFQVsZiMhQ4wb5qGFKRzThS1qPhEhCM5qJ7WDG8sfBhGFqEXkutMdfvJPaA1paGhyj7aPPR97DxVU2v1wRj",
  "key24": "2fktiyh2hSweWS8Q4EfihLbtAaDMHuPNxoPgboiYgLrQqwkDJCJLtyRtnSzku2YsTpE6YNjSbqEzEUq15quWinPV",
  "key25": "31hFsXZmMpxHcXhjPyZy36okkM2j7qjosMhJzuMsZ4YUBPWdAaJTaAASAvYCQsYeZg1ChpTuQr4eH8FKCNVcFnKu",
  "key26": "ysz3NJirzKnmNNcnWhNWN2uMMtTZQsspmq3Pf2fLpg9EACtt3MKSRL39X5kx7CWJC8BDcGwj2nTPcthzxBee2hK",
  "key27": "XTdY8e48Ct6u6YSztbtPkTUo9VKWoHjsLWijrLjKykxTJcKLcanyGLona343ujupE8prBdAbs7iZb3SoP3WbKK2",
  "key28": "5gMraaCyEEJApmLPJ3xW8oU2bA5TwcbxuJGPEzfB1QFxWNWVnWVo9FqPokpV6NE7EQvSRvdyf1wzZ8CdACaeVmnS",
  "key29": "2dFa1hAC5fCaJrnM2fP4VnRHqfx1GSUqf9mBRiZ16bfWsEgniw88rP67rP5yFPsP4F7KCaNDCdyv5vxZeRLshUcL",
  "key30": "3ASK2brUptw7ADp5GkwDFspJgJTxB72erma7R5AUu4pbRHWm5BjbVC74fg3JjEizut8UMXqiAj1L9vTLk3pxmfxC",
  "key31": "2SKXQziLFGLAVDs9fkL2REwRnyFFouTrTZuNmTutiV7yawTWEVt58htff2sJDafsowCvqmkvFrFpkkyqT4gi7QQB",
  "key32": "Qshhq3hUcydGeZt2B7S5pR56K866nnTQQNYFmwNxDEQdvdzGGkbj415w4FfeDNoqjmduMxa4zWDWR1NWCwCCwrx",
  "key33": "66J7MDUokddexX2gL1Hm7PMgNYmG1t4gaRrxxV1WXoRtBkzbTCu24VJithHL5iWFzKmsAWxaY3T8ZBTVE5eWJBTW",
  "key34": "39gn3aYeASb1YNDM3oYSsKEs6BFcvNrmPzggYTVo2K4CYczhDC7e8gEx8pPzkRLNrDo83BsfoQH1gC7dsZmKo4wJ",
  "key35": "5ezm1qKHYpyHBKmYEv26WkjNYtob4GE5qDiqMDCa2NySB9efuuKN3kT41DknyMiC1UKJWEN8URvXpThCivXnPHCa",
  "key36": "2qstQWpkf69mZXPoe6sXsvJzXfqrL77kNXMTRCeUntNBbhyUrrb49STPdpGagNUDyycVM17nUAvExRgNcm3Brj5P",
  "key37": "49oAQHvq6VcKFzDX5FGMtZfQBgzdoRvtftKJkjzCj9xeCjzcRnumL9j7YquTduwaQuLVtP2bqqXbyy6LvbWhuf7j",
  "key38": "5KiEgynGapsAzDzGBKpA2QkNgWH2YNsoWAB49srq6UqeEZk9sA7zEQvSqpGheXgSEupY8mvrwtWmKfwjk39bQMZ8",
  "key39": "4pr5C34Qs1WMhcBqjSP2DxUiSQQzUTsCgXhJmJNG8ubg5rRowwP3izaDUZnCmtnWBK9peesa5p1igxsdAfT3Zb3w",
  "key40": "vBRRC3Qrv9keNcw11jCsN5vGV173Fuzw2zLdHnURUxogEP6pUi4Zb4tp8xxBpx3ULnu3f2WXi77PPb2hYdvMeAn",
  "key41": "5PkVnb3dTJSjaQHMVgaELETF9Yk6avBQPzLaM2QkGMkjarrYT2Bo5vAqbd6UW7BUsDgDQUYtbTFKT9FZxQr5ufuN",
  "key42": "2Y51S1cuV32bdn29jkCbqm6FiouL7RUJNTXWy7BaC2917uiCRnbDbG7Acp4QYUBbzdfN4T1XSTpjwh9fFZRQ24Ra",
  "key43": "2NLyRgyYmqbfHTSrkfmAGtCxSXrjpw1FhasMepfpdKujiqwhDRVNERirPN6uuf6xBGGhenzAfAeNPdL2snKgXFUt"
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
