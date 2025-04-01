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
    "3k5o55Cpn3R5hASbRX54heTtgUZcU5pD88kQe7oakz1CEmXoiSxL2anvrABdZwzCg5S4hsbQrzqnHkx699H6sfAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eoGLQKwGQ1TiBkekLuGR4yc85qzRYynHUuxQemJ2Y7B4WWh4gf9KQyr6gzdcaEYeEgaHmt1viMy7RQ5AXV9ajp3",
  "key1": "uiuZowY41cnW1PvSk4uygPrQnBxNRDZWHg5vtRL5TXPrbG2HcQTByA3Bh54MXnZJKnRXZ3QVKCuh5KL6Tx1E4k2",
  "key2": "5C5DW3MdjHNYV4SqNPGnNGNX9h8xMS4F5dTWKmhxgUvfUyzS3UHh7nzr1ChgXm73PbJtF2zH9Eg2vdnYuXEt7rXc",
  "key3": "2PhDzc2y1GzZW3HE1j8u9bwMDoMdBcQkZT1EhcQovSqHzgnf5mTrKLRZQjaSkL6Bhsty3DxbbTkdZWEtniNY38T",
  "key4": "2RdfBgLA8zfeUyWHMAMJ6RNme9eERaGoGNroFqfNamYNKh9g3JPoiNcWFaH3rMB1JejSzoan52yWpdxpwatSwUrL",
  "key5": "4L7F1xrf1fpUdjFn9tSH7iKH4Kkvif3drLoaTCiVP2odhB4SNrU9vqvJzChjajrW1m6XFjpWvCqZmH8f6MvrB1Jp",
  "key6": "21anzpj4gXcXMg1U7RuiUdXCWMSJSB1G5F35GPMLpwthtJPaR8AaZFAAMuDJRyHAjAMYzf4zwbjyrVvWVkRkgnne",
  "key7": "4QdhmNuemmsLzDdtdChYmzAtnj9NwtoCE3kCUpfPqaiLXuQC4H46RmHqrqPzsMQWfCEzj2VKJ1GdpzCN3MkmCkHR",
  "key8": "5jos42fYZTL5PnPdXgWFv67Rwedq5pznRXoFgCDCJ7qroLnFLywBPfT63XuNoEpr6mzqFLyivfR7qUCxFJvHkFFv",
  "key9": "5q65yb7WYiTRMtQSPw3BSCHYGedY2THsoCEpdDBy8WhQV7Gkigymh6YMBszdDmYWsYFscaMKq4W5GbrSfy2xdHXv",
  "key10": "5ufCZ6xMaa1CoNhAdxDfk4HcaCFktMWhzCP8RPavVgVZtfK8AH3KGrShWqRiDZBGAAVb2JH9SvusrYQnDAHwRDfD",
  "key11": "52avAiExhDCFDnwrXn4ze3p8xNTCocNfGKCbTUcjPT6e9uvp9PSEXNRm7R4c7mTFk759p3f9xS2ZzpbGYg7tnnSu",
  "key12": "3EhzUHnZp53ymVqWWHoXHCXbpTytXuYenqYxy8mPZyU4bwMGJbDK9wAsrvNoWNLACX7TU3pYjSM2ZWsTx8fP3dQz",
  "key13": "ezKE7xVsisK51c4N9ngiCDmDML2gduMdWFfF5VKqHJXoK3FZR2LH34dWh96qbEkgin62F2pRiF4rj8GS3dy9wff",
  "key14": "2APvviqFWA4FFeJEE9JnsLLRbqYLETEJTfLJPmC8do4jx4z12NBx2Cy6ePZdBBzzjVosUDuvKvH3dEQTkNKP1vLs",
  "key15": "Gbi2qXwpcfrNSGd3MraxYKm8ZNQbtsBM2B6eSgjpKFtK9zs4pyedVj8CtCPCtXUFiWcSbcGNHeGcoTi3VkbmPis",
  "key16": "395yZMkGy9yYmBUbEwUjFV3v9Gwvf3h3LZZPYAJAdvGjBdd9SB4k9M95bHW63sHFztRdZKMt1SiMbeKVTSziPZcS",
  "key17": "2oUsxZ7uTZr5r9qQvBy7iEwDnqgzP1AFLWVVdKpk7igc1MLXQzie6FLb5di3cgbhLW616GhdeJBi8XbNMUpBVtrA",
  "key18": "3DaXH2Nx1aeVH2aFH4AdHGcTh5YvbmsoY3Ttgf1oHbRsgRtWyBzTuxF1yUwNH7Z9NA2Pr7RhruemrGrV4AWMF1ii",
  "key19": "3zgGaubxoRn1LspV6TWGV5ZAcjVvEGD8c2LEx4dT4rqjHqv2Tn7wxdasSeqS9NWEUXMJZXK59qAq6zdTiTQofWq",
  "key20": "3MiLCYBAbGrUDSx3rf2tsp8vQYKgknYqKwWAbaAjVqQ8SBLMZreVm9ssEMZhV9HJnjkTUrVoGpukc3Pg1gDZ6Mc9",
  "key21": "3vHYjZoUhZXLrPp5mdK8XwGE4Zrch4bPrrwUfbsrqHbfJi9CwbYL8NrhBwT4emdGehCn4bYp72GgbmeZzm4nLcsh",
  "key22": "23vemwmpLP2cyE2BfoDKbsrpqKrdrgSibzMsDRac45faANPFr23qWc4niEypsigay3X6GJexHs5pTwSmQcX8s3zR",
  "key23": "ogRvBt7pTx7nFfBcVmQD4N7QYKFYxtBX4SSemv3eG6Ly5zGfULrDEanB9ZKTJy4ygNBgnjWjeFUMdZvPE1KVfuA",
  "key24": "Q8q4XYLpiJcztLQHEKSCvWXDejtNF98jvXds6MT9u3hm1iuKmGnL5q5FwPBufP4qjhEnjwKYDUwauAnX9tX6qfL",
  "key25": "3yt3dG4vkqZKcnX7Ser49BZAXPkbsKpNBjg82xeDibohg2CGopDianGnPQsGmBCHyvnZmYf21epQSU7tL26ZJBHH",
  "key26": "3nxT3hpVjWrcexzwd3WQabasTXk1sXLgV8pQETBHPUAwuYcF9fiSyQbgwfAWp2PpCUDPnV4dZSyCTWWqZ4rVLnsh",
  "key27": "5ausDtbrzSYL8hFBjiv9UznHSC9tGyySfzijRK2MYu3rQMhJ6VarnfFwxH27uv4NChYbXne2ATZUaShoU5WLRSah",
  "key28": "5iPC47MzDMeECKFKb7tUkRbCzJE8M25bPSE7DPBEhCKVwzpLTcJf7vaw7HJVhxaCdN7LmPKamWRk1KCR5g4sEacL",
  "key29": "4J9TAyWS8SpXcKphuTCkL54J9ENJnq2VDFqQL4WAu5WL1v1HvBuUVCkM8SwxchMjo1rvEn1b2FW7N3YXkh4V6UQS",
  "key30": "5GqpVjGcERvyHKFRcj38VMcTkZ3J9kbBdxwY6cfjhzjSxJCRGB9XxC7Mev3vVAXHXgQap1m69jk9T8KG2hGhcKHt",
  "key31": "4BiYwTfWcYYkpsUb1gPtqYn8BzrzPaMBEw5yJpcsam2aSommhinJnJ1688Zqu1CZh2Hr5SrQfudsuXTcsbUxy3Qh",
  "key32": "u7CnG5F2LpC6JF9MHMP1oFL9Ac2vBDutKLCD4oZQFT8PSFFrDUtbPBnHepDEGyn6GiDTsVkoRe1cLUwRhT2r5TQ",
  "key33": "4GG2MjQZ9E75FHScfuHbSTchJcPU2ugB2nfCZSADQEQ1xDQzQkbKxwKcVxEoSX2ZUB4JZiTWggVa8CAEyHUMeBVE"
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
