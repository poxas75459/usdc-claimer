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
    "NEDQw8HLh9QkuAS3Ma41ixs4NffWnqNjH9GCwdT7evU25ZM2vr8QcrQVTjh4tpSnuStHiBrfR4yR1RUdoyieoyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQMjXW9qG13N6pRDo2u46KaEKv9VjTj6Tk6pPCTP4Bm1kTBB5ZNvhKHF78vUoSufkC4jFTSjr14SWSvDVS4t3nA",
  "key1": "kAje7Bt93xxHL5t66YrxLfoBghJgLS57Wmtp3VkZ6NPTXFJtCcUbT1cwo1tbgSYonaCy2qFQ6zExGWDPHfFpaLm",
  "key2": "2jjYuXKWNaTgtj5uMsUYJuru7Vx3w8epkX6ZtimTo3ULgWgQsbvNZba4yee1Ud6ckxSVVowTWadkQ2nArWJEFbPd",
  "key3": "31CTqxrxt6qsDWbhMBeSX7Gysho8VUpwHEfa5C7NsT1ynt2iDF2FtfMSxPimE418aQGwtSb4wnuHY48XamWZDbQF",
  "key4": "2ipvTPVipinXjg3rR4ZtbJFNFbSPcahi4JpgPzyTZe84wntscJLuqr2KWn13nLM7AeXLNKXErrJFw71KAwi22bUt",
  "key5": "vuk6dX8tMS7T8DUXM1va321vWWzuQo2UZx7iir6D3YXogdv459ZMyhkGHRC4CiaQtVbNwKwP9bcQizsxj4XjYCG",
  "key6": "4fxfvNBAb3pVWFemr4FfAwcmioiRKdCPr6ShLjmT2p48DmamtRGgnP8eMWkUKjDc3zpgXAHzAU5rE7dH6v6c2aXM",
  "key7": "5kWeWageho1PWUnAr97K5ycjBEnq9GoUAZi4xzsz6rQGJDDSHCKMaY4Qr3dr6g6aYiutmhyWAzq1A6E4ujhYaXFo",
  "key8": "3orND2fCbdAxFwhbDFMB86ueNvhcd1gaDLvuMyPVWU57rg5Q2GJspmw7nVsJSiUi64vWeQGBQ6WELCsEcJZi2Pez",
  "key9": "NFytc8yMSvpzJw6Sdy6txtHNtDfsd8tUWpRnchiCvrQCkXwpBTwV5UWxS7MpWj25q1M9MocWkhyamyyb8KqTNud",
  "key10": "2xRJ4vctP1Vzdtq6SXQefuqv4brxfzn1uzTSej9hH1hBijyWZQjRfiwH5WuLmMx7YBpZPwNFjxjLsMf2VdqtSBCL",
  "key11": "8jntV2sYKoQfQTjmDyLu4a5tLzWGotBrT6X9PRFKyjXs4CoNNDDh9rwuc8gDSR2PKaamsG6q5zF2abrmdAHur4U",
  "key12": "Z9HfANCyKF7wnNWAhBsJcU7Z311DjQwfjubDqwoZQCwgGQ3DBVypgRrvXRYKt8vwUZMnEkkAdpyawVgzcQfYg4b",
  "key13": "3RH3tNQKeqvcDrQw85ScazJaZT2SzZHQiPFhCZ927JXcziLsiHtMPiuip2yGRoA7TsfC3yMSRxzdU6ScL9vjpyF8",
  "key14": "4U2aPMTv5ugVhmDyMd7LW6w4nBHVgyS4QZXBHzf2smky6i9QJgwJVbT1SnsVR1rfearAJSxroQPGrg47JxSfNyvd",
  "key15": "bRZM5KEkRSvNg1vM4RrJs4buirRgtYngvSHYZDGQJBQPYzZaSYriFKQ1ktpfF6aB1d22NQxhy3623pA7R4owcxB",
  "key16": "QQyV4c4BqHLprKrmBwsb6GWiQutpvasEAQ5es5moZdQcpiSyUAVvxoGjXUGGtMroBXxHatuGCnwm8MJeCn134eF",
  "key17": "4GRXz8GrUJyKWrniDZbnnYLy6Ui1Xmd5CnRRuUphcWRyDfY1KCWR2AaginRBpCmMNWejqVMejZagwjT6yTjputfB",
  "key18": "5GrBkV7UmYDhaiE2jbZwwSDU3T3G7BW9Cbcw5NrhpvSnekxHFk8YRKpm14AU4nw2TshAUQdCdGPCUQVuPmbSrasC",
  "key19": "5cWp1JLWLakWYWD8J2jJrVqMYtetRfR7C2oh4RqHG5Jq7TbbvvAzWEu3oKYsH8ZsdMVwAaAGDw7QYSgrdYxZaSsH",
  "key20": "T7xrKKPfDdQoNVieskkfHBYbHBE1MAVY2gqYmTanXCjLjT7fNDrUeBpSM6StdqT7465ahqQXoSjhUXLMuvR4ij4",
  "key21": "423Q6pKrZr3NTnj6n8CFWV4yw1WzTvVWyS9hxnabgi84KCvaZ5YR32rXnr3FNnS3SDuWZzAKj12JCCQCPb4H5hqp",
  "key22": "4EwDX3qpCs1ZzAGEcwWu1VyefH3J4wnxE3URGwaDAFEmL4XaQ8S1MTaJU7RTzZaG5288FgjGiFwe8Xb1tEW3U5ru",
  "key23": "25juycyPbTzKpndYNWXHyUarnimfviKYV8M165tdHjyLWpag9ZETDt3rCVy34oBxoH7kx72YJsu4g97B4M6Gy6Ns",
  "key24": "4THWeLpXGvuBUuJv4mKQTQDEWHsyqi7cbPXctZDKruazfGwAFpgF1JgHyAoAx2PAr2fYQVBT2uFP1TkNWgmTA3Fb",
  "key25": "jVRJzAXo38dtsY975W1FRV2v8JhC3S3bQru3KvaTYDLmrXTTpErvVTfYipdWYgssnZ6TfTcCvDpG5yCNvKDrF1W",
  "key26": "2wCH4vDsWU7MQ9gunbRozn3EBJE66fCMx9ByTUfqsMG2QzouKMGMaG7CrXLzUPuLkdLaRhHNQGoUBj7QMFtog7nh",
  "key27": "28f8k7VPJxEnKfXDtrCxpg5Jj6EqN7khNSkufazZTfFx8J9u7Mop5xGeKxwALaGcBkeyp8kTtjrbDeSQJWQ9uAJP",
  "key28": "315RMw9NFf49Xo7qebMUwm9zL7WehPMfQ2KScPanNJrujZAqVUrfWspbb1ACbPFwt2wYJ83fJfj9CazFX8p5V8Ke",
  "key29": "J7dkiLeVxhB4hP1naS1Js2VyJsFoEiveEGc5m3sqmo1Mm7WGL7BEMHzB7ZXbKUgnCbvcqVViCRJRZA6DsUf4JPz",
  "key30": "3rbPvxvCScj6w1vssat8nEkwuPpwLQjPdjJNa1zijvtcSv3KaG73F1JWZXnRHhrFwLDKC7XqzJepQ39bpDfAXx4s",
  "key31": "K3oUp8qytdh29VKiKDvWgbrtqJWzjNFTE9Wgr4DVgQh5Kqp8krktwoxduqd6avVaTBKA29F99TiAFPd4ojxzps5",
  "key32": "2NSKce9LNCrTdLjMRyEYLkL6hrAH7FrcChesT36dYdNnDx2Vswwo57CgVnPDzeihk1NbJzZ9F5P4YPVxdMMuXvPt",
  "key33": "2cRzgnSpRJgBRA6t1jQ4dGz5V1oMH6c7RbDVH4eXcRGsYwXGYZx3gi1bJP9ek8bxq8Qd3ubwqVND5KjTSqkzwxL1",
  "key34": "3WfdQMTeSMuaUp9WGyEEmeGPj8fnbRpjmD47czwtMiUbemeBmmVH8ZV9fqxiaDgTpkFvep6yqU71CuciuysfLepz",
  "key35": "3q99qWkBJqVJVfEgvnjZngRYsLqyeYBbpnBL8BVopbPT1mjCcaJN5Y1HcicJUVQurA7Ewd1RyKU1n8cF3CmymrAp",
  "key36": "AoN6REnytPyiRx9cGUW5f52KwiDpCiSqxTEEJBCsEt2aW2AKJkDfmYdaGgLBY7GeoExfy2TvwfMBhTBbsbztvNx",
  "key37": "WhQuihJ9gobPLZ5LrcZtLPpiua1ws66M6offDETCnoHR3C5LB9Yp4QaKsnpF8bXPE8pu8ZW1cRKfjGjBueKUAJR",
  "key38": "5M2LDyBDrirggTvLSrEF4WF147d5W7k1btonaEgCJYWAgDn3rwyd35cfLLVACtQydYs9NQbTzfGJeFF4aAsJh4im",
  "key39": "2p6uPZGBVZqB7NanJAPdpm7BdCzSzmkaJyGvusKZand3m2S5B4pXmBwEp89wLvJfDKBPxRmLu8NPwEY26NptB5LH",
  "key40": "LUzfc7MakUsbY9jaeoa35ktYaYwwwxAy1xtGCjVFstTnxNpHYmMMu2PrS9Xoh6g56diDVi7ydSqp9b29djpP8Ye",
  "key41": "3mnGQKzHQ2HZLdygfap5LHawkYmGpwNJhGmjRtUKG6XP6KwAFWooUPHnBiwHTiWavJxNVZAFXdcG26HAzVGna8fD",
  "key42": "BDjPYNUbnZXyum4v2Xqub384CMd6Yi6j5k1BJX4xL6oEL8wvY8GeBL472vS6LxsbRWoEYNWEysJ7Ww9B9m2p4Rv",
  "key43": "4G1gLRudh5Hrk9kBqSpgRgy8bCBXep65wMpE6K3zDLBxV2i8Jqp5JZjE9pzVTMQfuXMrxonQB6xLJyGkdMf1sNKw",
  "key44": "3rMVXehZaLtu33gbMSNR175LHJPS81kmx2MSMD5y2uff1CQy6fQp72eN2LarUjaLhx863varHyaEdQMn6ieGXmG3"
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
