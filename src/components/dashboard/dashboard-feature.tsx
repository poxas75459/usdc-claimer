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
    "4KKw5bAXG6H6m6b1QgZcdKqFfm9rCyJ8xqc9CehzgyPmtHbQdPDG64ZoaJptp1uBYdfz3DZH96ZrE7ad1m2R9Q7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yANPqeQK2AQhG3Tk79iEUNdFqtRnuPusks8F88kGFXciYMunf7K3gpHXLJUjbfaVXhyFns3gGpijqoCwcDbNefV",
  "key1": "4pTtq4455b4jqNaWViv1p48H74CfiGyhWsDHJzQkSY2GcWLFnDedj8VUYpQUiVT3x23yREpD53vDetHXLixiPGx8",
  "key2": "24QMrHkLUgmjti6NVcR31v5WZELWAjuwG2iW2okLGHPgYkhD4F2GZZEEpMNLUgewjZgtFggB34ynrd3EgQxXShA5",
  "key3": "PYYMxwS5yV6JL1ggM8BHkL2fBgURVv6uPnfB9MGr9CTUnqWNvkAGiLU1X75HLp8e7mZRe5nio2kJmDnD1YNK8fb",
  "key4": "3TRy8WLwhTN8vmu7SMWMXNmFsuveGAtFgwPukWC9WRFSMfXQoovSH5xSAinWEXmwLT5AvX7KAzio18kuvLSgmjMN",
  "key5": "hBziDZmwFzeFKqzacoVv4kVudYThSzZv9peQxsQeiuEMcX69VZUHesSJJ7jGt1YYAxS2ws62Uq4dv5ywtSeiUqP",
  "key6": "N2DzDRkxMEcwrKeHc7vwrd2WS269hTLXBiarGK9y4brQ12NkPspM5i4X9eNYWuKFzEDCFXCi61rTQyPakskvR4n",
  "key7": "4ZsEt8TVk7noq9UyLCUPfjDfgaXgDeBsk7ABWairUvarduRWa5yLi5QQTNepYALQJ2Ze1kwYZgd9ZsdVtbZ1ey1r",
  "key8": "3dFdP3LTRNST2wHKUTFTt71RL1YkDN2XLoazJmoPaSpaA7PSY5f6SKXnjS3qXdMSyhreodqoUfQpy1hBz1o56siR",
  "key9": "2Up5u8CkeQVuFsyGS7ARre3V7DYKQbg3unWxx2VBAX7abpMeZhuezNMGHWpeiXWn2h5M4wBKn7Y3EdCnPJ7DcsWN",
  "key10": "HyHaAu5Kp2xmUa55LDKtDqh3fxqFVGYn4asJjeeEzck2MEidCqxLCg1Ym8hxWzEZdJCJ9uzt5adLWpy6jB8WhNU",
  "key11": "3Ljb2yLySznstQNDCNDL94QvmTr13WD6WNT7FEDv7fNemetVCKeZxft7Ku7o8HFnJRy2Ax2uADjfHBZsGQMZrZsj",
  "key12": "3mPqF4fBVxyU5SkW7KxLg5uQSVycAqjEdNyi44gL5ktkUXCujpCrRp67NKanjS8H5daQvWo2eBfg4yxXARp3by3R",
  "key13": "4G5u9nKrVwXJGMf5fwG9uLXga2x72vgupghns4pvvtUNBT4hZuFFbzamzwAGZz9s4pZMZqQ1Dj5jVwBkp638MC7g",
  "key14": "5wA3x57pzw8fUbjScCV8RkyZnkPq9DdJHFrKmxvTjw2nKeVHkrmigJ2fmVemHnJskZSLLdHhAFJiGazBTpQzvwJC",
  "key15": "xcSrwQLFQ15cdHfE4xJftRcn3vSmCHc8SSPQ2WdTLVgYwfNqjQKwvLYpzCNFo4tA9PKndd1U4aQGdsb5uev7HWa",
  "key16": "3348wkPugVgttGJKT56NdeHZpfzCyAkzRqh5fxnBp8quGtDPGYZGgi2vhE5bLZpwJastbuz9AktvEbFqz5sovn8g",
  "key17": "3HMuSQnMr3n6ytqWaTmuA1bWT7sryD8X6utgfW5hphChuSqbW6td2hM7vhg3zYaD2SJ6NDijP4vqLKk9VmCZS2Cc",
  "key18": "4EPW7QJAjutGmujaxyrwWszMBAMcuwARQ44kdRwToKW24yJSZiPc5o1KLmqKsiJyipEVT9S3UA99sBw939U3ScnK",
  "key19": "3dm2XVT7uvR74VxozDZ8BBsAR4J4FGh4wj9hjL2TdQkdbCj3mSCLE8WK3os6yLxzodNxnUPvpvWaqRHNium7bWwp",
  "key20": "5MYpJ1xi2V1E8v8qTfifsCYS7vuE6vG5raaXrUmhrcoxHiLrdu66zHXRi5Bv9MgsnR5oPFBxKabfvetR97KoknJv",
  "key21": "4D7uuYnwX2bwhSbW4vFp9wfxLHcysSsYoxCHLo8wrpkqPRkELkFb6h77MfEvx2893CoxJoFBN9JHs8VsQS6r9GH8",
  "key22": "4btpDx5TnCSdtjKZVZWC8WD1tCDoysQfqBurU8pKPYU4J7doeutxJ1B2GFNNd6XwE3rbsxAKLmyBUCX4ZiyWgHag",
  "key23": "bhWNafyDj1SjP33GtsL5V8CP35HA7MwV2kpNjDdXfXm1LWUqxYSb3nwE3VoNiU92V1RYzvFVjJhZneFTY1Z9AAy",
  "key24": "2qAdKHhmk3PRHNtgWJVALStPFaKigc2A8CufVQ1fMxVgwzeEfQG1Yt9tPpmv28CZUSQw7XhU8cd8sDX3uGkNgyfB",
  "key25": "3wjFWGke3VhDPrDE4DAdcQw8gteGYVXotnfWb9AzDJitXHLcSbZfKm51efCR7uQfEUUffg1xdc6TACsxSTFoRYYL",
  "key26": "39JeX8cq3tJheiYamATVhjn9ZmRzSsjYY37EwLMCLrNAPa2pQ1hzgErs4WuU6znZqUG4MmdQLPDmW8fHdQUsiUjR",
  "key27": "38nWBAWW3isbyzUiVw3hj1ETBc9tnYffnGzxB5ssPa8VJ24jjGv5eZvi4SDhAdJFvQAb99bxDA2Gvx7MApDSyY84",
  "key28": "3G1q1rDSCG7bX361tSNwBvDJpV4Kp3c5n1RTFCvgdMmzcvWVcJhWVinDXfWrvgYPDkj5hc8Ypzqz9GeaeBfwjFr6",
  "key29": "25RDJS5Q6yKy9epnR1rfhpp9GRduMBy87M2bf4WCoznsxFAo3wWttYDUULDxa2vy7VRiWTtFW3kLT7L5dPETUZTJ",
  "key30": "5EASdPUSHGeijgdnLGo35Daoe2r3oUzfJMM2mzrUcjsKs3mNcr8yeog77Gamr3os4ZEyGejKW5dVZiVSb6yzd7KD",
  "key31": "jdJn4n2stehBG3A7VP8hhn12wReG5osd1oetBSEEFCUeZAkRr7ZiT6kcBMLqKGNc2rq7nUVkzJMCeyYpbux246Z",
  "key32": "zUs5J1KkhCMvGCjVHMhoYQGYn1fiYyUhELc7Ni8quofCJifFsfsbArAnx6fxwuXQLv6Sn5ugTuJYXo1YDCDcjaf",
  "key33": "4LuCSYfZwSsRhZprJoggZX5PQQ8xocWVtBFQeZDKeANMY56eJLWwJJrjkq7Ss6umRgM5CdkWTCEYNKXhR9jh1YJh",
  "key34": "3jDp8KGSisAkb39mjUS1LyDiUcD2LNi3cqVLzuq9kghCL1AXLjH19RRGBmhfhf2aNKVXWk4ZRxejYgbGrpmxmoBL",
  "key35": "TAWT2Bk6QvUQPGT3PVgCeKhfvs1iJkyKUDmjhPD73hRYVuEyuqharNFvWHzvLSNpN75QAtcKnXNHWYR6xtKLcKD",
  "key36": "5Msde4S1HZPKCQrLZ4ey1qpg3sxwSbDiXHiiaeV5b7xB1oZJKJgHe82pgqeBy3tB6vf8EWvtzELFmHmQnSLwJ1pH",
  "key37": "21E9Uu9rXB71Nv7eLurMCiKcba2H6U98jupmhvATaTeY3jXVqSDr6wMQFPuLXb5673JwYaviXGWue4Hv8G8tEKzj",
  "key38": "2Tr2uUJZU2XSTBBxuBM2dV9oDddyQMyGhjjUFLLSrh8s5iFzLp7saP1Z1aQNbCzNXKgy2FqcF5yUMJFoKRWsR6pA",
  "key39": "UoqJwhHoczRjB7PuiroSPqZbpdGCxA9Eebnx5cNRRfbvtnU3jcQuLjar5BPYkUjyM9TWvUMLBQ2GNcLYDLesG6B",
  "key40": "MUbNR2htReNnTSVwcwFNVsmej5UecNSFrbk4FjFgTen4P13fXwTrUM3smVKNEhFxiHwNvrhdPS2kpxGEnosoXJC"
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
