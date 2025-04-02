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
    "29sMLEGvrus7sTpPzL4qA1c3jS1Ld5t3xjwVax2bAUbMYeAjvwaQ8rAVCc5QfRirF9T7cV56CzZdSFqSBxqDsajG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dCDLyzAyEcQ2QsWzJypsesd56uj71vi9FRsLDcqxxkTx81xvxTn6xzimuyeG55erhUtxsmkKACSK4zwqDGLbpWg",
  "key1": "3RqZZJKsdRaohXkaaHRjqj5KMT8PtXNRXp2kjc6jVsRRHRK15skrnjnddkYnUdYvWfaXcYPYXukzMJQzqiYpeP91",
  "key2": "61egLc4GTrv8fbL774EcRMfByTRNUsEyMTP3j4qDo7RkkKd1aWMsZgBmfpWPoT5D1yh4TNF9FQqyuowEc7MWibSt",
  "key3": "D89ryAjCQoNBcT8rCQYQaZMBUXLNSzCYUoamR9X5EvUuWLdtZM6MCQw4yqb2i6VeCWAQfpKz6dFu2BLXnMr9VCR",
  "key4": "2zAdaLSB6wjU4rXZeFhU5uAmzPHdSRdeEpBcnXiRADkVRWe6a4NBiK6aN1ofkd8N5GtRfbKDQyGi4XBzpQwPDBwB",
  "key5": "3EB7JqfwS8uAf4a191FU8EB499HaRJwMQtHef79SPYF93YA7qFQzPGr7XBY2DS9cvuEgN47DoZEnKggD81n2vxwp",
  "key6": "56L9FCdsbJHcqqfcDFwJeBjQzHaZSWnCjEacioDt68VbKoqJafnQ9Gq44UNLSNpStpYMqLFyTknpQAkEYjSraEej",
  "key7": "5yqmh7KDAR6hBBMoF5bB9gkp53EfD8wjZ6VgsdshUt6dkzUa9CWBXWFXuypiLwp2fbqAyAQHPQ1vPKnhuND9RyeB",
  "key8": "3XrEq8NbwC1AfocVC82ZgyJvxiukTxPfkUqzgCAMt5pd3ovKiYHbNHCQoDca1QYMhATARERxncrGmeaMigJv1hWN",
  "key9": "5TWqTYb6uLMsPzmmj9PAJeRTqDcWoxYvPgyoAsuGCFJ3JALx247AtYUSZnZH4ernaVAJN9MQbscUsuCwH37kKYK1",
  "key10": "2mBebBvcU2893kE7KEemM7YaqfCzx7EnuY9DTEUgmnycVQkV2U1xL16PAfETTY78kjx2XyKCvYpidE7RsSowaGG1",
  "key11": "4Lv3WRrgmH656ak3t7RKnCsNZcbd42G5DDtb2hLNpQ9Tf3XdDSEKim1af7rbCtLNYkAjRc9cYrh8pNdeAWn6hepj",
  "key12": "4C6M4HtqMeiKEsk9oV9MtvS5uwSJAUFsc9KqRr7iNHMsxppnbguaFZdRfTVeiVcoZscMEhEQa4JrwGBFza4RDxFv",
  "key13": "2iJKwmHAvNvaTjobftdCRdF7ug2rQ3ULqiNq6yUuQLJPpQywrZWFH2sdxtFdes3SbW553BbBWE5VbVVGmeXJjPoT",
  "key14": "4qEdy6HLWEU9XWhZAoQKyoLfRAY4jfHBv4fcxPFoMve88aJLMavF13d1kRApvvQWVNFpu6XatKQvsdkn9zHhWTqS",
  "key15": "3w9qAfxjzYB2bXaAej9p9Tq9zNKAKJLpZrSJhKCHMF65ukzCHPLxqvUugtvbppWWDtnMoDK2KeYtrR3xH7KqDpFt",
  "key16": "3hjpUPpQAtfVdF8qnSuX5UGTA3MyHRC3qx7pip1wjrfXcbGKn9r3z3BMMHv5iwWUacHgk8bafzUycZjh7bmnKLEJ",
  "key17": "3WLt4RZS85v3vS5k2zVK3dTUNW8kA9mfmLhGwR82Wx3gWQKPUkufoJqRahZKMQ8Rg47Th2fnzbQAN22bbnVDta4X",
  "key18": "3piNQDmW3Zrox9z2p9fsYLPgXASJmRgd5zeTg5mU9MfQn43UTQKu6FLMCZF999TGdYsP2i55tgV5EwHjtjGz1nCj",
  "key19": "5wb9iMsEUywjP9XX1wQmjMwXj6oe1K9ya4BZUzeJnkVwdzoo4MAjMjAZxJfGpfu3M1uim9Utvo2YWEcBAdowMi6c",
  "key20": "6n94keoKid7r8HzfcABArYCu5KWcqEW3yqmZQY2prLwjRTXZpQsDeBfKvio74EhKxVPcAUXfdbaMY2qm4ywXNQz",
  "key21": "9T57VaiMASehB7mA5fXX9J99GFPxM7LJwPvwoUbe6FetcbxqZaJNjYjUBZxGFXFicLphzNbx4FToK6DHKwXmmnp",
  "key22": "3odFXvfCaMx3v5TMLd8zmDu3gUPyKUPNqPtGeookne4eqYWqAAeZCaEtHADcaQeihpmSrvz1iC8UMaG6b9jFZTx5",
  "key23": "5uEyTJPXYnLd5tdJeaLu9NFmTRYHCiakpV3oHvPKBvHRmCJnRLCTdPYW3UQxcriNR2YCUiWx6nWejUdxCBomPAC1",
  "key24": "43oszvRqZpdwQmMJgoYu17S1y55XfAx4RTUEcjXjTyEZgZtZEmZz8RzXUrzEAawwUapnGKbBq1nL9aT8ZYko1wC6",
  "key25": "5zqCECdfz3nHHdzTVsELPjrUseWjQwb652zdP61gydtDzg5M6tVc4kTuYijABx3GNNjVRE5JteoMBMF7qA8XLXkz",
  "key26": "48NGpTZWtaGi8gjCiQ2Gj7EvPDHJrPkHoVZQJc6GpPwRVvfTw9nfCvAeN7eUD2wtQe78wXmQiiERZum1YJJWwiAQ",
  "key27": "4BhnjW3UtXWPQV5AxfwDT99fq628KLQBTnEMNm5kChsoaiBgJp9Tg2zk2BxJmb8KVDcUQyw5TVJgmqF5dxU6bkm2",
  "key28": "2pTvomn414dMT2Yz9yniReurv8nNaXtSeMMXdCADeMjPyzjczmUXS9mFgnh5yGunxBm3YdbFgDEdxVfgWnVaVZmn",
  "key29": "4Tjg4fTFwq7pQgrkeswpFgPaeU43oBeqtCSsfJu2jwZvwEFZ1xTAKjigVe64hTyQc6EXFSsEeTrf3B6q6G3rb3C2",
  "key30": "71ZarA2p5eutqcxBqFLCYAjGn73XjPJKhV71Ym7ibUjDHhm4Z5ftTAVBmUu9WpUePm6mCxPM8RkvH11xM3ihrzD",
  "key31": "3dEi3v68qJQ3s3r9kCuK2GZUCmLkG5L3MRhAdoWUpggMeVXzSuPxS5y2y36YLEfusNk8W5Lzytx6jZAejq1dyhK5",
  "key32": "4Tw956ToF3SGZfy54aiYrGkVzJEbRka5NJ8sVKxqAnM7UDW5Cowjz1L7PV5uqM6b81SrBTbTrcBKzQyefoMXjbbu",
  "key33": "3Yu1FGSmLFWKwtt9pwknBQuMefkMN3Msvd2YFbncSVuE8F9emMudd11VWkNwerDm2V4ebJJKVypeB5ZgKu763VC1",
  "key34": "qwrvgcwz9gqzCNNY7DSnQtZ6GYht3CCeJN5MaqUZqcNGV1UpGBPSmV7LyGj7t6jy1B1y6oQRsijecLMJCKj8cVF",
  "key35": "28wz21i46pqRKq1cRY4Y52jG5UxMJVeSEUCMBVVwRaRw791VWx6DHRijhbjAvtFxDbf7qFjQZJMx29SMuarHJR7d",
  "key36": "55R9RzdQMjULR3ccZbt7VzcjuxX6s2ad8UpiEkbmEbkxVuDFhvZixHf7KPGzXsXkxD87Z7DbK6YsPFHWCEi8bGKP",
  "key37": "RBnvAZzZQkquCzqwrRsQZm2Q3K6xE8uRWYV9dsc1Ezn9gtDY8vUekWqR5h6BoE2S5esK42bb4qha39wqP5bZnms",
  "key38": "1Ask2ex6UrJR8uieqVuooWMLS3YYp29ZcwUiGsw2yzQzMFpcvDztnXFbtFAjknyNVMNhs2TK2RkHnTdzWKrhr5p",
  "key39": "ywvpiMP8n8Zmm6BiDXycKKtGQQf2aoSqA7GZF89Nu2Bb4skqECfAkYDdCsGk3kJfJVJQDsqg8Yf1iiJ4ECQhVHF",
  "key40": "4V83bXP4yaGbvnn3RpZCke9vZbZoFujCnPc8Ur7LgGYKbsEZQQK3skaQLVz5R28CgiUsHoLJW1PrQxosa3qQTbDH",
  "key41": "3W5hJ2cijP66uz9dS9k5jZQY1gFwDSZy5THNLNvLFjQ5HTHcTErz5JSFDzVviMmxKWDdyh7dPxovVJDmpnmgyneW",
  "key42": "sL3o7XUF4aHh3vhJSnJQLKxdPSWVzMxGS2hS1hGszjcqo6JJn7eG9B7zmmNMYKqfF7FEdjk75QzCHux1nMBoFHc",
  "key43": "3NgMraqHhKVKM6D5Y2Q3cvKNHZp6MZnviJU3ygczFwogbfFDv6NmN9T9Db1dvRRigqotR8TAbMHUsPtz1jkHcXjk",
  "key44": "2moUE196WZayYoP1xUiZtPpcatiHk45VWSURR4oHB8nRDqjJWGuRuxsRPxE22ir4HEe3WxQ9jXmikykMLpC6GYr4",
  "key45": "4r85FR2ywzRbnV43kvSVP5feBmTN4Ly1aChkhzQm1Mig4FQ7XoVRW1HLiZjQvExsaPR9kjLFx2ZrMvPauag85xGV"
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
