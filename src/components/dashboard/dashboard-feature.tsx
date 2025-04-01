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
    "ehwa6YNCyy5RCHCmJr7eNAdvEGxguVK5vBiZNMaWUkJdTLZxuWiJ49dNr9XBfSNv1J72YWQkBwEWNGjKNNXy53s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yre9NLRYkmr4BzPS4g9cw7XmDdW2ErG9tjU5shvN9cuoKdS1coZyjWhFZBa3jubaWDkB4BDCh6FhbasdgJ6oaRa",
  "key1": "4qZ596zkw8KLdCBpk8TCjZzhfuthquGtz7V8Lc5EyfXDD4E8vHjXs2gF8p6aBE1NPV81wCxEfLcJKqRvRs63GGyW",
  "key2": "5EYYySfw4dMDNRUD6w28KsiTtDFXiWoRG9Y27rsATASPq9WDhmM7wJpGVPA1zHfv1JS1rrn8pUaNE53Wxb1k71LQ",
  "key3": "5DDT5C4L9HX73gSheR7W1zdsmpaMZ6BimrUXksGqmTBmxDguLpNGMPSqLh14soiK1grWWGE1MiyJTyVyQJf14jfz",
  "key4": "3zPh534y6vWw8xyDXe1pZrjzrVwmGgeecu4zMXLw43Y3yCBMwgGHCuBjsiLCahvr1V6VTmeSChqy83hGYDjwgrdE",
  "key5": "4gToMqLjuYd4JF8ABJvY2L65fPc6SNvyPipYnctx6SUCJo2yicG1U63awD7h5jHB91GuHBwA3bVM29hVbgRvqkSj",
  "key6": "pif8f3t82nmZGDv2u8Bs5g4GDttjM1HevxYKVx9y7VKtok8RKCn1LPjidaANFxWUwgkcbmy2JR2shRqXXTxd8P8",
  "key7": "5Pb2roWdnxCwPBsPojQmgteKPnENs7XJZnSv7ukLfNtdHkHnCCTqZwJqPacA1FZu4zGZVJaGw8mYgh3EwXU45A24",
  "key8": "539NxgZnoRfSqT7jswr6y8wXbUGH8pfuCS4WiVDSKqvPb8V6MxnpiPkazhRXa8L3uhXPbqo2Bij5cP9kpzAw1Mg2",
  "key9": "5MT4hix5KZnmZ6iJwPmCi3amPcxoV8f6ouC825YXG5fPbs5mN3FAqbZnRXjJczYLqJT4mut6sNwBSt9kW1V4s5Ud",
  "key10": "655TjRUnvDuJGN7aNATWLdSfW2cnzMPSoE5nmwev9XmftzvXLsTtCcZxw6VY5XoeqprhzJe8sYvTLZcvh1SiwhcK",
  "key11": "5gDm3AK1a4DSUrPFrj8N3SNteYgyHpGZ2fJRMPCjbyf3iWsPvJ8xYaooc7noMzujUJtNSxbbYMnTWiT5JH88DCRC",
  "key12": "zjVCoycp8k1rodGWnUYFSBNscQMjJLss7JU2zapVFTLDzsjE82ATNoDR9Tg91YqJLXCrDJmm2Te4WQyDHXbFHVQ",
  "key13": "2vNVndtwNz5KXpTq6QXt4AZPDVspAaGATCUDueGXsY6paMx9qpyjzBFWWdAEjK5qFXXf6FvCUwe6mxpGdnUBHCQd",
  "key14": "55FDRoU1rZaiiUZjgVrS3sPtNz85EFPZJupQBXDDmRGAigtbLVF3uDYbLffiELYFK7HbN3F9zA4QiEWtQurosyPA",
  "key15": "5qZWamFg6sUfzUBfbsfUq5hsRcQWYfr9X4WfDys7Q2AFAcpiY8qJtWDQUHA55GRsXxvhxtXMuYEvBnyo73rPnBvM",
  "key16": "4nwgzb99vq5FQdVdn6VUMroj7p9YzZjD18dKrMYQAhum9Zv9jixrJENCCwrZwQgE2EVYvUfNSighenYGY3ECGte6",
  "key17": "4SwAoGk6aETqYqyv8PAPdBYtLHjvXBmrcmrAFG1jZ5iyvnuTo3MspRoDiRjKsTryvXNNvFNE2o2ghCDgyaJAgP5g",
  "key18": "5EcaBZzJWFcJGvi262e2qPDa6Y8MhpXqLbgenvMadAyacz4fowCYWM376YKc6DP1XJgyRVbnLZ1gPykkQ6TcPDaD",
  "key19": "5i7g1vvUPg3YAcSqUJMcfL5RGjYExCWqUsjyx12h1wSYe2DGL9vXT7CtqbgNeYFA9gCFBFYRQmLNX4Pon8oba9Jp",
  "key20": "16wdjBn1Ky3HeV85DUrKUjwY4c4aiXKsRhgcTUx3RgYodL76DNmLqsHmuVidGFpXsWeJmDmfer4xEq5vMpd2oBA",
  "key21": "2HYmq4P2xrbcLbULz8XswRh5S4mKEn4KjBt3NasuVSaaWJJPwSTKa1PTHX44WcBLDvaemWPbj1roEwJm1eHPF2Pf",
  "key22": "2tXHNUQt6xfpLQ2cqbAMznLsfuyKw9SUygqLihHchtouS8hsM9adDQMwh8E6nRAn5H32o1dWtvyk9wHLaqLN2bet",
  "key23": "3nafd8ApLnZQesFMtyvmNrP1kvvnt38ZGWsH8MAqZaewwMLXLy7WeTxhHNQnNhrhFip4Fzkc7k66Yc9ZQoR26Qsw",
  "key24": "bbmhHgoRGXzvaJiiKxAX9jL6NvSkM1dJCqPvTesndzHKrMK4y63XBpvK8Q5QQU5bv4GZoXuM5PqBtGTCjiw4y1E",
  "key25": "4A2vZQiLUapKKvsHbgaUg2YP5x8KoULLjR4cq5Ka4uBzEsrz2ByWYNr6se1Zn5Lc1hnReEK9FF12JUcQTXGu6TGC",
  "key26": "2yhtQzSYqd7jU5riayXQEdDHzGMNWjbPZeSsu9F9TMohbpqJUepXtCzSdtd36SzGV7QwS47fS1UQwzj1VFTaAyHE",
  "key27": "1SwxPFPLrui33s64g7n2C3tpSXUrMa6H5zBhxmf4VfYiqZ8wmJD1QSQLdVE1jnfMbQLyTkqBzeifx8wh82k1QpF",
  "key28": "2dxcgqw6EViYH8hxKsig5JTJLMEXuhmWJWCpNoMPqWAR5HXvNyLyGiKx3qwuMutbXdRxiPCRFdcWChWTTZv9CwjR",
  "key29": "3ZpjuJ7diCJayRPQ6KQtWdCbr12T3Xp2y5zYJhrJsgWvYEwEZ3CDnizLLL18sBsPLhukznibDMtEXdGpPLcDSzDV",
  "key30": "3xzmmWn2tkW6JWP2tV7G1Sjy7feY4ekrDPCujbZAb56NzbopamiDQ6QVNQe67W8r9ELPkPru23a9pt6cTEBg6vwN",
  "key31": "4z9QsVe9dPP1aMpgaSggryBHbp2pgy1zw7gLWoF7Nbxy6SGrnYFenhk9rnRhLgpZrC6hFKGxAynVf2JEifQ5bjm5",
  "key32": "5XVgxU7BBUJbiW534b8k8Famp9AD4j4CwWSEfzmuw4m8C6FGxbxftmpkb3Ca1eLUuGVFKZXxFmCNpLuBrAqiYpTt",
  "key33": "5u73eR1yrAbDY1FniKwMhHJLNmAmPpacMJkahTfP4ycFTD6oVVdjtASHqiwKEXgxdCLhmijV8VtzDDU1M9pvPGnj",
  "key34": "vTkhuAvFRMT1TJpJTsh7Re78xjn89mkwGMEvqhaxNh9W1U37ckzWgBW4hBXaGoUPpZpfM7rwNcYB81YrxXezo3w",
  "key35": "5mNwJStsP9nEeF1xV6wiqpoAiBi7B4dXEgGVEnjEwQNn8MsohUT4HYh6KvmbbM9Lm7GN3XHq6aw7AYz4w2AvkSfJ",
  "key36": "5B8rpufnXb5kn91UwiP19wfwSCcdY5YrdyccsrWipGpNp8vo8RtaEouFenhrVcazyJR43UzEzQJmmxZkSGicN1E8",
  "key37": "3TJFt5Maxc54GrBzMcyZC7JeQxPN5hdoTzX6PnoTBaRxd3FBto2tMhvBneHz8WCzmmxYpvKLJu6LfbAsW7VoXRfF",
  "key38": "4kqqpPuLM8UNwBE3z2eLbec7zE5oU92WotXfWLD5u892PaAYEcuB6zZtWjVmZMpEgMj6RknqFwcZEjwpbUM9x2eW",
  "key39": "259eQySzZmbdPRz3cVfuXe9cJvev4Zj87h4hKGRJNrBmJCbBskvqhWTEqnKHk8XTbEdiheeviXRgBATk4rQLa5ga",
  "key40": "5tSRyp8UyiwF3Ysmamwgk9d3QsMqBEhzbWyYtCsaudv5uYEpm8sXFvEfxWvnLCAo91x37hiV4m7DE35SDYb1e14s",
  "key41": "dBMsGYMjC8m26Wor9R38pDTWTPNfbfL1s2aj8PAJ2vuyL8XfBgGX1KuACjzTcZQXkiAowoVnwCfCBTLarcds9sq",
  "key42": "2CUFRnXf2c6S9E3nK7ctm2V2EtT1UxeoJ8u2Mtddynt59p5cWPLwkNwkvqsPo1WtUPXoi8hW1znokDw9aEKrSrK5",
  "key43": "LNqB8w5PwX2G6eQUFNwmRS4B82xwUxcDMgZPE3wuxg9AesRZNdLiDYzKkhD6SP8trB7u1gEyhPcQLyfza3RHo3G",
  "key44": "KrvhYRPukxDGzZaWs1RjmmuqgEG9hwu3S5hNWVBPwTbXAwyxpSXgN9L2bijv6eVwiTZZPCZbLHUYPDVvGWsmgtL",
  "key45": "45Lmctid856iXu9xBseLwAc981Rsg3iTp5cF9Trqyi3vsjnTBKycKbG7CwGHVRNPH4U12jgUFojzvLvPmT83L2mU",
  "key46": "4fRYSwYQSbKoR6nF6BX3JrGh1ERELXMPyz22j495Hd5qrTcfN5k3S4XG8UVb24Bbv4UWrxCgsgZ6chZppUhZDKiK",
  "key47": "5JoMCE2pVcANhmQSZa883iX3tjG2S9V3MyheN4qCYJPSYfSXR5tnrKhe5UTdMUQ8LQfnQx6KkG6d9fK5RaeD3MDa",
  "key48": "2KAs4poFKMVyJDfSENSHRcYVsnFJqPCnxT5ZxB4caHLA5FstcuBZ4sDLcQ11tGKKcrydNA6ggUhxux5M55gd2wyv",
  "key49": "iKRdtTQvKCUVmLpMduWFTrpZu8CAJcy2GCyrmu8rRoRHeFjHDcBNHEn6wr19YLckt9XdVPBHVZ5ZBs8aEdLVT94"
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
