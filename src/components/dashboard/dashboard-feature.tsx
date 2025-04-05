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
    "ReoQ7NKGp52xqHMCG1ELGiAkDPAavDcdgcj1xF1PiGqCnutG3hyqNAyodAaJc5E44GSxsvY21tfCuSpRFi8GzM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfxss7XgnzJT1dU5UjtReunyvLznvJW9RBMNv78doP5hTWCGZBPGSLVWL9n61qDNQdjTrfawqaweStRoRfGGWng",
  "key1": "3YME9R3j5AuwsmGFXeGH73NPqfo2dzfxcpfRTm46ydLNxvgf4DvAPvH6JJj154BTujquKa8uHb5DwW7ucyJ2Qtjp",
  "key2": "pA4U1T8e93EEeURRSxVa6KZxTTFdMrfNgcdZEUp9sF4fgT11Lkxk8V7Q9FhV23LBuorYfataEFNDmtEPdJ6kvTN",
  "key3": "5aceo9Koptwp7YbpW4anV5WLzZuP3m48nAsJRK7XT7sPbjHeCfdNQuE1Z4t392oDiDGnP98Ddr9bhwcqq9Aqm1hU",
  "key4": "5E1fULUxB7rLaM9vYvasN5EXaDJXVa1GBaVz4Hp4rDR7ZQfFJm4T2tc2hmDEQ8sH1KDcBpDQcLbo8m7nDhnqVnC2",
  "key5": "M4bxaiZmYczk383F4RdExYoHKWq3792HXo2v5DPaTkhfdi4dKYHsXhtrTwn6nuFn2sWN2RFhUxk4A2uwcveJ6bY",
  "key6": "5f59Q69PQcmh5bQs6tEMi78JavZsJrebXXmTVfqGqMULS8g8hDSEsHA9yCgftwMYMeL1H9LQYx8Szun8Hsq5UEmB",
  "key7": "2xfLdHcua5z9ZXgHRL72sGouHhQUL37UNry7Wu6mgDcjhCSVUP5KRneXYzHQFBcvZwwaMoxdxfxPaUhS5UghZ2Cz",
  "key8": "4ULTJRvDRFWxbFE2ntNtJoacdvvkbm8jrC4ZgWYouPf67qQcqFJ2FryUQoyP2fFpWRm65rVdZ5whYpioYPDbUnsT",
  "key9": "5AjbpYoi2qPowxPkrFheWux2wgyCYR6XDoTMHGf8NF4DKngUgefhGUqz4LZGmyYEXDizixjkr6rz6JYJHYMf5dEV",
  "key10": "5F7TwsVhUHn8CkLqeNTEyvmbQWSsSevR3czPpzLa6UgqqgR4KEZEmH7Qfcs8P4K4wtqXERQYaSgyn2XxU1hQTsH4",
  "key11": "5L9ScQzprJbX9cxemBKFxWajqCy4TeRw2mdPvS5B2tWSDHTa2RpEcnShAmSY9M1XHvJc169kirFHxfmudNvrPZam",
  "key12": "2Qio1sjxJEL8kSj6SXFEBD8VnGCfs82LV7rEDBpnLXHTNapds4P37dgjxKChKAZxw7iRZUFThoofLMFXiFXCcz3p",
  "key13": "2SCab4ddJqa9GHzioiT7BwsMe1TSQbTpcjheLmZBJ5E6SQvJ49g33dVSimpuzQvXTUWCuiXpuHPEcVQsTAKqT7td",
  "key14": "4jaAKYA9ddMNBKyK48DuR5Uhn53j9vUjnwfTYW5rzLh5T3VGMyDCmpwygd418C8SpyD4QvDPZPWJryzj8WEeinJo",
  "key15": "51A5hgQW4U34bmW6AFDHk8gQwgNfVb6DGA1LJg41tAL5YbG1PqGHvGpJEc7AMUD26HWxDXQs6LwREgnJB8KJYk8k",
  "key16": "5VyddgaVvvsU9iotwXdhtfeBH56owDAuSDWPGLowWZhuXMJGN3axfAoEV97G2FmM77SDPGArnQq2SmYWKGkawUjL",
  "key17": "5ccfD1JvdSR2fjGYqaFwaqDJQVBuwR2QhanzuFNXgx12wJiP1jbSxSvF4ZPFZEypjvpg1JPbfD7F2gWzm7CDPfuT",
  "key18": "5jeRQb8VjNTXuBq4MG5xcY6k3DqrwSpSjDgxZ8fCWsbLwLZxfv7V7PuCPt837FAeVypYAJMxSGu3RZGPTwq5w3oq",
  "key19": "2rraHugg9Unnfg1FNWPDZrrzpBA8TSSQ2fPNQtAWYDLRUydQPQa6LRj4GzQiHLpkUSzX2t4krr6gf3qvRDHeAQca",
  "key20": "34E5tRvvhd2jMvf869Ucd8zaSVpEk4HuZsdTRj6iHonB8giwBbe2zAxG5BChJFSWVBjGZD411VQNYkL7rLAmoDRv",
  "key21": "4dNrp1vBMcQyam9qcR7niMMPXSGzeWYHATYHKyS7pHFxpgDhsaydQg2RCpvYE2AkozUK13cMFtBQVNBG2xpWCQac",
  "key22": "5wSNm9rQFiSZL6kJ4SC1xoDBKfSLx38V8kLiz2muNJ4NQc41aQBTFifGWaqqecRW2tGuaBiNVJX36MvBXRk19SgZ",
  "key23": "2UFKzV176wAZ437NbNj4suVqmYG9YYtrBj2AdoSuA3oFrMuEHgU75RHcdGxZZz2kvy6roP9tjNi4Auddwhmf93YB",
  "key24": "26HRH3y8KuSq4wr8JyxNeHcHv9rHkXYoA7PtrM4bF6FVPQFvUjMogW8AoJtbn9d2WJz6EY9dkVZdGnMcQc8y5SV9",
  "key25": "3EiswgVJzns9F7XFMxW4MSxTsrE9cxfT77w5AsCQ8Fucsc8RXV7AgdRW3FYBcwKJPcWFwWQaiftsZ8e9P2byz64C",
  "key26": "3JcyrUWFpdVvqDm4wkMXR2uS4mse5UJHQ4vcGJCjL2bij9QR3Eg7ywEdR9SHbq1rXL7JDCFCMuxCrhsYRGX1YHrk",
  "key27": "5NkiEGFRiY83ffajtHrjNtmBtA2ZrCGrMzsfTTTcP7BugKf6KoCpDFB9oUaeQKywzRszdBs95QEfGboc4WYHoao2",
  "key28": "TVmZHmGtArcNvHonf9vaHu28Z8oZdzJRggUJGmG5vWo12c7rUdtkkDZockK46yWf3mr3bygy8RgCDnqdmJFHH76",
  "key29": "5Thz2B8REpeSpSoQib4KTdKnKkv5xKAoCY912PgUmmrUWwALjVp8Z341gCLBw6iL9MLoUuypZ9XpnAG9nNY4SSko",
  "key30": "3ZMYWxHwqaAXeyeD2yg2BtckyCm45nZFRnCHTMwGCFJKq3LXmnqTEXWiu9JMKFrhapuZGWr35HDZX5thREMcF33M",
  "key31": "4nRcYD2W9kFHEQiya1KAavfMvufWHtjT5TmCPzimT28yaRwbakS5iuEKPkLBp1ccVYGZhJBggVJjLWdbdQPahQns",
  "key32": "2ZXJwWCkwnUXyzUWtcXoGXSgEUfxKCKx2dWAkJMjeUatFhA1bZqex1PAdQtyxFRs1Mrk4kc9SXmnRj6Xks5L8RmP",
  "key33": "5ndYbzna3qt1egs52bLpzrzRWXadw1jnMJ535gzczXYqbDEQZE7mcC7ffh2GzMZG9si1tm3HxDGCyQznJZeJEToi",
  "key34": "3PPv3DMcn7GiffEq8zvuAh8y9gEp5RGTv1VoeiTTa578z8u8PT76tKsNhAPBnrnaBHtw1UYcBgRAZZCzAebneJKr",
  "key35": "58dFKNj5nLrbiFdzFMgiAkqeoMpMEGo438QL5dv7mBxRRGUvtyR23ZMNW8zULBYKwYiq8VFwwoLJWEywcxWcXkXT",
  "key36": "55FxwHYxANJh4AJJp48PDdjEKmNP4Ui3vmYbB6trBHCt7QcyGzo7HjArFc9aLMwuTg54HNExsHM4ZE7qezvVKiBs",
  "key37": "5va2LVwpsQc3pMkkr5bnYVifKBFPrbRF6ERRiTi7yHFsDNFzAbnoFW1tFFqKPFG5uF8ToMwfGph9ZJDgRdA4LWfU",
  "key38": "2KxYggQcej92eSoRqdH3Lrfsr4iYQFw9G5z9eXKgjuqg4ajzNCf1gxtLg48oX4Z8ujZSuhs7cxeKSPof4XgAdYr3",
  "key39": "5up8aaKgBMiYqYK6bZ6r8Kwj9MBaRMAq1YWencmGMxaEU77U5wKzdUm6y8Gwa3xKieps3H6opdPMf2eYAFBfMJPe",
  "key40": "4Hp6fS6xWnEH8q5nQvtVNdqAPQDvMXvMbhw4UjhQ1Sbs6WqdQA2XrTwytvWSoPZKuwRwFJWKUGM7Qc4WxpLzqSn",
  "key41": "4rw4X9aWDjHLahxiBMQZXEgfwGaWBiopHQ5FcE28qTT6zFzGpAforF3ey7drvz52oGT8FjnJBWfAiukynD1u4DvN"
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
