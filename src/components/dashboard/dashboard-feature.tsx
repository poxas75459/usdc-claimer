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
    "4ynR3itz1BXjexiRiioYpvNrceYCgSsg8RQgZYwtahidtSL1kHkbj4HsYVgdJ9XdfJXG9EjAEw8LbFS1jzeuRg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QqWRqQstz1KY543QSKgp3Fro2akP2eGbvuY1cgYuv5a67GwGCRnQWszPVJqtoMQMwXmyjKdUfKgEX2RuB1sMNeY",
  "key1": "4bArcenHgPh6nus6ALSiJun7Xkz4mDozkq7YjZW5Hmu8CT59sDMcKAf7XvDch87UkzRySrFsJVYEV3iXRgTwmTQY",
  "key2": "2GcxaK1a3YLt5HQafmVAhxRmFgBXU2BQMTkaxGLuiazbsGybZnmPvYceKxWVUB6MaBtLDqJ9RQ9DRnHvXLwPhTMx",
  "key3": "3wr2zkGiKgJZVSQP2ZKGpHCxkXFfNDjojJo8XrhPLwJNBrErW5Cz5n58VqEQAQ49zskttNa47qstPSsexH6Pdb3B",
  "key4": "45cc4eyJdo3DAE3vb3QKW8zq1qmf3Df5xeQHB8cTfTGsqwQ8Y9zCQ2eBLPH9xsTghWVaxxEoQYd9f9w9VMZ67fAQ",
  "key5": "2qVmG7i8RfLLqgvxLHLBiXoUZD3C8tVP3JwDswZxmM6vxunEThoXhinmt1VywMXvH4uaJbibpJFMqc8zi1biDQpP",
  "key6": "LuVxZaBxMdiKqvkci8LqEY3Co6n1ebBXtKk56AbWKCxpyQ6qvMKMGdr85jfxWi7ACzYT79SHnBM531wYLTPkLzw",
  "key7": "5ZK3m286sjo2MvMubcqA5eaXAc6zN1RBcPdSa7rBinzWhrAtpLjW8Evw7d8CppewaJkSCBanRhmYHcffy6txT9uP",
  "key8": "3E667CpTB6xDL1GfjrEsDBR26eJFgQyzJxkV1hCBgnkg3nSLmh311a8vxF1kw7PGqu2ybAFnsAt9dPzAdub1UCCk",
  "key9": "WX1S8oHCbjxmP8DHpv7kFczJwPw8QskcuoDjgPPNjtBeVokQyWkRWQWCV33FRy7ziPjFcNtjC5YFYT3reEKydWP",
  "key10": "64cqXANvaSoLRreXTTVSeV8dXBffAZjCa1VtQUv3Y5AJreCmH6Zy54SDA6QEuezgZH57HZCEVFbXLi8icSLNyB4C",
  "key11": "2BY6qRrkpTKtqQtmJUGfico7gaWLCAHAH8RX9zE9egC4TrUuJE4kEpbxdkExVgd3sw7CLaM9Qzp3fMJ5D3g8zbFu",
  "key12": "5Zvv4XrnqZmiNtDa78scHQU4h9yvtq7XWZvNUrrozwhEqwdYJczXCHKZXZu1hVkTDXBF8oCyHRngt2qMBVXm5KrH",
  "key13": "5a8z8mkLRwzzLHShuJ5fc7RU6yezJGVkRVGvqx2bg82RRPadjnotqBa6bWdEWoAe1GbRAPa4KMAYh5NMEXfbchy7",
  "key14": "5PMwsNnqYMDPu9UvqQyswQhioCxJXXhp4cfXiXwyJmQGNcCaQX7VDqb8HXUZgBtZAEnMnJQ6y1EJd6omPr4ob6PS",
  "key15": "2iat5qN7gVPHzKWUrLw4sAzfHMDTexckZuSCugZqkcaKDJSnZi99LW948bfrJy7eVEoi23yPfLBAZ13LpKj2n1c1",
  "key16": "2u2NgditckR9B2GHQexRKEoppXNrhvaauFMgU5UxJb9CFY5vx1hSfmPj5dL5jU12LcooiqMcyvGiugfVyU1Z1FoA",
  "key17": "4jeCDJwqccAWm1DNgX54eaD44ZHpi1XbKdYm6AzQjDKbWWjJzb66ry82EDehLz7CGxGYiBUJ6nHPmtGYhTfAKqDC",
  "key18": "5xU8UgYkbTCEuPLraqkoThU3jUvf6DWu94DPXcY3Eui8rN3CxUzP1HLQC4Mu3hSYrGVhjjK1Ep1Dqv7nBtsiUKPq",
  "key19": "5aebdeSMh9Rm7dxMVukG3ayZrT5ydCd9GUMpTZHUZzyPusHNdcWjyY1myEG8Rk4Rdt1SRiXJfCg7F88cqsNy49Nv",
  "key20": "34JMqDWt4FNiCZv4vRsGMS2Bftn6fS5KqMU4MkRKFym6tqZv6b55Nncfei1oDMoBAdf6otT7fvMspRa2a8WsVioA",
  "key21": "JKFg19GquxoF3mi5au9s5DHgeR3g1ePnZNjFkG8ARHSSR2jctWjLhu37ZvE6MHuEgB6JH1yxUUafW354g75xx1Z",
  "key22": "5C4ddEffiZvAATGjBuA9yik2xbgLnveeG7dCjSjuirVaUs3w1iNxurPjMJkaVptsZAyLXVf7RxM3JCjJgkJGAGUw",
  "key23": "4e9HnfXpo6RfCsDJiw7yjM1EfHV1JYY4Ts3sC5xQEP97wEM6kNUm5H523w76KtAARcp2rzKfDTuApCfrBrAHJwpY",
  "key24": "5VJ8dhgZ67qKn5HgKGmJcbXE5RJsaaqwjp4BRYktxpAmTsFyrGhReaUnAXjDfsLBdG9nwiXEfTUYzFt3cwEgYh2x",
  "key25": "4GdreKSVVP2moiDX48yftt8CmFnLjwW6sKMw6WMMmtYs2QxrbmdrRCKz37dn9W3vPhj4a7nJ9h6sNWjqKYkqExMR",
  "key26": "5RzPm2j9JcXf6s3us8HtYMzSZiqyg46YZwJA63EfJxAB1bKpyP4nk739mkJsg27gwoBXcS5CHg3bZd85BqvpxN9z",
  "key27": "4zJJ6w7FeWo7HoLGmrfQHMmQTjN8t87TKM43fgPSUjKAHjJ96p8EXGTdRHByuK2Cy9U4gNfaRkTx3kLBY1d6CrBm",
  "key28": "35Dohh7xpanHxdCCTUg1mwNA5VYHtTMXZSE75mgGB6RrnsPEmGxqFaSPrTwXLTpPG2X5QxCJzsWP7rRozK2zQcdY",
  "key29": "5QXzwLP18s1d3GsEe1ZbDeJJVgzSRM1TvKUyUgnGoj6x9HHDF67kvcSMRPYWPRErENDpS1DY49K7JN4kMMzmhcqQ",
  "key30": "3PbZALwR8Dz9mpuVB4bJVPxgrpHvXWWfWRiyEYHriaCZqWQFZVtVoqryXr92mEN4Gnybq343sSdRzPgf8CZNfNbM",
  "key31": "2L7tbjg6nzUNq2kt1nqbpuzwc75zNZUWmeAL4hWNx9bYjgB6f2QijA5QSSTiEULvkNCENDcqM3BTocwQsGknVDKF",
  "key32": "GnhX1EVj2MEQ7RkSEHHxtN2FdZ2Ro88KL5jXxBxfWtvcjmzQ8DeTus8jZceiSD39aBhbjQcaM4ZvqSZKtemroLi",
  "key33": "2zp4MRGXpkgUYqgFi3tW2Phc8hQzbRYUWewgxMhMVLzjZhHNBA4X7GgvTcRDXLUwPr4SvCHRiXYSgkTKHJrySfhR",
  "key34": "2DjDAeoiHdZD4KPwB7C996NpxctrqABahFNaC8MrWbKMYFrXoiovk7QNkWzJsLQ3AYwwyX4K53hPYFW7wyZ6QT1b",
  "key35": "9MB2hNmSbkp7hQkM4rXSsUvd6Ubx4V6w5ebk8VFJ5xLwCNtvjgfGjvF25i3ifMTGdSkNy4tddmzcVcdexa3vXm4",
  "key36": "3ZJAd2mf5RFrbw5FHLCSbWx7ZdUXLHQfYTaVXZtVW9Zvc5Kixzf3zZfV3No5RkJr11hGFZSBuydgRt5t3wyQcUHH",
  "key37": "4GQdwBUqJrbBSYzKze3ueyw2HQbf2DhKnBAiRk7uHDTiF5n3FaUTDym2ABazi68tiJM7WtcFuGcF7r1mdKmCg1MQ",
  "key38": "2H417aEdYmEHPBoEXCwGKSGPnkthPea3ti11YTa6TSzv8KSAZaXyT4x5PF5hpBXhDTsvPMcSzLhRo7rqYBe8hY3j"
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
