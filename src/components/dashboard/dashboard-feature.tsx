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
    "4RGupQqNf7HUifkUfoQscPUKbUh2JX53hQek5oM55squJL5D7YX2HqV7jmdg6261jtPqdcJfU2jWs7jxTmZJTDBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZ3mkFA7vFy86cUnYkXybSg4PeTsFcjLq14GGQtuqfagQHn1TCETCCSqhxvDyEwMf2NTxYDGjCgRBm4vaoQN9Ce",
  "key1": "GqPWtMnSB12YCpaXrtCpuCDputzUFpkeqCG7GTvBPuD9bbHW3ZtTUTkbxMyuBLe4CeAGoA3XPXs5crBFHwN7ARS",
  "key2": "32ihjpv7fvgcYi1fGrkfbWioYMy3KcJme9Ltw5b2AJe6FeZHudH6N7abu4UgfBzrwAenjdjnj7CaLBwV7fPJCoiY",
  "key3": "4HydJx1tShp7gdWkgQfLTnmDJhmGAukVeJ6PfkgwhRk5etVnux4pGPbsh4SMDvDqjTXA4vsyTqQJTw8WMA7qoyip",
  "key4": "qBLdKHaSvzGggrxiWb8QMVNv9kYZkZyGWVNf25xyg8358xxGqwzBCCcxdY9ZjijaXP6HVJsQqTrB4REvE8Mw5G7",
  "key5": "4qpCtjcFfyH2hKTRDNH1UfM9poJct31yBMYKzUr5JCFmnSL7wCQp5Kj6CqCP99ry2aYbZUERyDQ9VtizrT9VFnqX",
  "key6": "2sgVvQKMEgzxjaA2QCkKegkJT5U7TXc1hngcQsjoQhHUAK6KRvWYew2FUoZjbY1Z5iSzY3EcHUm32faNtjY1kJTY",
  "key7": "4Q5fWqFg8qKt5ZMGwGJidAgy1HacNsS9vdPrz6FNdZxxCnQxCu9znFiuuUW4Xmzt63sQtbPFiMfKPSJCikguX7Ua",
  "key8": "66nBkAr7LrHQo6Li5XQpQtgbnvFsEgPHThJWG6MYdo9JfJs1jcMtbjoMuPo9nAMLiv9QLNEp5M8QrTm61VZenevP",
  "key9": "4DAiSDQ3XyDmNCD5w1auAK7mriQir5cEyiUUwAPtigQ6ehNpRHP5YoEhP2amcvMcC6wpvQ5xjsYcY9X7Rwvc7NqA",
  "key10": "3nH6jhLdY4bwBhLz58u4UozspCZ2Dxmuk33LB5HzSUsp1wypK9WHLmP7cnhAHo6NrPU71ApbXhyAKXL5sNntZaKU",
  "key11": "4VdCRAYdSkrk8zqc55bQZpqRZDV6zm9nWMr4pUrMbXLkdYoy6jJoHH62hhXGYPRB7RCeMDNQcNznyDH8tDZwGDNT",
  "key12": "5NggUeMZf7YF7JjC1AhN6Lq6b46yaDkATfwBEe6PWvpXHRnkuZoJC4YYatVTah7Pwq8kMj1trAG2eitqS6NmzRAg",
  "key13": "5mTXJCHf5ntxcbmJgfUFFUmGHx3KYdNuSd8TsU155BEkFR76B6WMQCS27aSjuERKrmE2oYeWXJNhCKLBSdx2bduC",
  "key14": "5pGDoJdvCccBaTN4UczjpbEAZfQnVVTfB6xTp7TUepu1WNuMKg5ce5eq8TFcj3rFeeQk2m5ypuycp73Q2bdUMMK8",
  "key15": "3DHqxXs8dPucbkpkUBtYnoMy4NJtXL44fD7U9njDTwyzX8pRuTBasZ7ij7sqgwmRMuKt2raWpfRNW35TXCGX3VjG",
  "key16": "3P8HRyx8jsKnJwkrHxKpW3m3ZfPTs1Mqv86GpxPBF6NVKWFV1PxJEqaPkF3upY7EiwC7pCdz4rFkqDa3tC3zQ53a",
  "key17": "2ChHaGR8eihVmMPm5LhqwRwRqntvBsrkt1LzCbLoiXsrc3McKMMudAFu5zKKvRdPWDzPMRHvntQnoJ2WVqj4vAN3",
  "key18": "39djBnAXhdCJokJri7piTXSdZvhB7Pquz6uJJBDGRksjP9vRUeHemCtyWezfux9HA8h9W9nf6DcprvBK7udKV72D",
  "key19": "2TYE8WhLKkC8mBnbvTeg6cuhx5nHoznQmPPYGnhaGKgcAV6uGRrepDc9yE3RERJyPMn16vZjQ4NLDh2bd7dHiYw3",
  "key20": "4QDQ1DHAfv35Wi9rcp6JKust4xUsRhRL6zkhb3VfDmNyWRtUV4Gx9FKK4eJrU6ddF1i7anYbYYpCSaLekwp31PHf",
  "key21": "VHssLNrvGTcua8xhYyYKQGGPfb7CuoC1anvyi5PZKGK78MXU6x7uSrcaSDqG6RwGbmXbnrwHsGWJsmt2bQsE6oU",
  "key22": "hDFTm4Dq3uFd2RBdmCxaGELRZ5UQ5krQTApv57fsLDzqsWtV7PBgpM2D17FzZ6gekyVHPkVAs1btSrrDfNDwDu6",
  "key23": "pzKjHUK3kr1wtj8nKezdn7LtcXtawpgHY1d42PiKd3Wqb6Y8KxpufccnUDuXdKuNQuk448TFuK9Sv6qNY8VtdCD",
  "key24": "5JxKCsYaMkAHLrEQTNRmKffSa5pmmKXmfJNnv3694T6zmKEQR5Pp3zEH2ZFNVQtEUT7JAQZirzDtkNv2UBvEr8Dh",
  "key25": "5qFztEu1oczi1qNPWvHSe8Q8Y5pfqPXc6WjbdHii15jhhckARpL5Ron4sMRMbMBF8V9txvVQwsQnNmM3XE3eq2k8",
  "key26": "4faoTPgXy3Xhmf1QMcXRbasA7NoALhVPj9AH8SwSQdVK2h7XggmXB3astVMijmtPGP8nXbpyPf7ThxJRW4RM16fy",
  "key27": "2EmNZL2EZrcg5LZLwCkyX74nvDvjjsrQXR8HofAXbXoTuaGkyRtDY46R9KZmyrqd74DeZtRcqdxJkLbsr9J7d1tt",
  "key28": "3P7AK5vobmCV5xk4AiDcQ41zyiG9Efmsa3rPDvrXcnovshUAuphjQttPZWwL5ubZJBC4hpibc62TnrcUqua7vDfY",
  "key29": "5QbCNdH27GUCuQHQgzFt1m9Z2naSBg3QxRS1dVhuPqC93doAyRCUVRParzeUnvEYdsRu5Aqgd12Wmw8JFADoLjCV",
  "key30": "mkMhFECraGXMZBxNKFDDbVjSF8bAAfff3NeiySSAVUZubBLbFu1hZKs1KavwhpMLqdzSMjdcWE1dmXdvFoQLgme",
  "key31": "2csB3N1ujLsBw4vLXvn1ZY9x1En2cse78xtcf7YTT8oCVwDStMD7A6UuAQcta4W7i5b4VeYicVTiaLhKp3HYaSzU",
  "key32": "5BVSjETUV64jUemM5NQMUh7cattTyuPK6trakXzj3ktYFnHnN868gm2YQMp3VXGycCdmcdGNW9PTRxB6R6JFWQUe",
  "key33": "4u1PGbgBosSqeMTTKXLYp5u1uFp9vEGemaWEJEHDWiysCf7iwgRcnHKGtQuygYSohnC4CBhDdpiUEMJ6riRhs15k",
  "key34": "3WfJXdnwoYyjNrNpUoEG77Y9mbssU1Vd6SKgn9VsCWZceoy3SZxnaiBXWybKzdiTVGsXBFLPqmxLqWXBKqxad7uq",
  "key35": "554Mzt2CapJXFNLsqc9G8ff191touaAjzEkownxnmXegLfe5jYGHeGhFFCxBbc5nQCh2ta461qqW6MtHJrF9wFDw",
  "key36": "Abs3qrL2WLgeY2QF5EjZurJ5XKKgtWjBFVtYC1aihDsAmYxvUyHCFNXo1BEWN7P1p4YzR3wqB4bEqrDFEgBeDVP"
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
