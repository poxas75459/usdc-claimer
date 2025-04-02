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
    "5sCqiu5bgPMhY5G5Ej9bkudMu1yN8pXuZodwCAsqf1pmBTbXSX3uwM9LHdgvUe84uL3eqNjKyo4Kbrqg7CbDKMVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ja65NFjoVWRxN5qMFcL3xsMvgDn2i8e44LfXzn3ZrzNVgoCwWrVB69AQyhACwggZ38WffgbUDxDxZLTeGVuc134",
  "key1": "2JK32uvrAhux9NbETtfMWZbDCXEuDfiCFBxKpS76p2kcEGQddXoy1kECRS5TzcMCX4an376ntnNoH1nrYa9QECYf",
  "key2": "2D6m2fHwbkU3inGptvfatesweDpXJP9rv7rxF7h4bH6YZ8VfHAVV3BLL6tf7CuxUJYuzyntnic5eiEQubJ8RuRaZ",
  "key3": "MyvCDAWNJH2gsHbXWmz4RW2aWMHmQ4ApC7MLGr3zSgFiU71s8NpHKNtC2oP3wicwg7zYu9yWELVAREyC75qZ5Ue",
  "key4": "2hbScqcKosUdaRi28eBron4ZVL4xnLW6fwuZsQXVGeWzHSjrTDTGdMqGp6LSRMW9WciqSRwuhe8AbyN6iwGwu96b",
  "key5": "4jpo629K8MaixovqXFXWoCSViSsnGV5AC4AdsGuTtCjv6jF8SQ3hnuBzjJXk2j7xoyfgkWrSPj7QzB1KJw2WM8Dd",
  "key6": "3BCAMG2za1GuNuHnAY59hvTrow3JQyj8n1hEqVoyWMwT9C7sSWijJfERbRvEWA2Lq5A7W7R5opDi5d4rUirBjVSf",
  "key7": "3UrPUurYiTDpseaaJbW8Gg42qDQoVfSaZeuehBqtVweiz72m2e9G9dSDv7x8n6B3VrYpi7VucQP4KxvnaKY4rdG8",
  "key8": "49doTmBfufhJ358TMHyvRX4MgUP1QgijSuGJrjAz5LxnBeyCijaD8L4Rer7wkZRjjUdhwgbpKZL8y4WYhkgs5Upi",
  "key9": "jZGnEa1Eo44TBZdtoPHeEo7c58PHsw9Rzz4crzVo2nn1aWsNCkyEXAhBZaG2fbYvDH1TgWL1csUqNEi7sS4ze7y",
  "key10": "3i57sjTXBHVd5o3Gu1kVzp1j1JQC52LYXShzU2h1QMt2DhfdrQjKPzvtZjTxqgkK9qUrpgZMNyTPyv4CiL4Mm7kX",
  "key11": "56J1KGduAfTmCFADVnUk34qeHQ52Wp8rxnspMYjz9wVdrNvDL1hf9tvFo1eitDZ2iusxjLMmHjozeKwFdiDM1cG3",
  "key12": "3e4ec92ueQFBhJdGVEvia7Qz6dZbfd6s2UK3vvfjb4rvz6abjUHCjx2KVsGUJbr2E5FifqbG6oAgxvFHp8veGiyv",
  "key13": "2mnSjNHV7mBxkdBSx8wq74v9bR3oUHxhWvMShuQwSs4cjX4EjNaed924ACvvW622igxL9f4E9DLUtYAaNJNwaYs5",
  "key14": "4o88ruo8KwTKz6k2a9gAWKh8ohwFS5WUe13uXcLSTmwV56CozjgNAvpv2q519ZJb7JKDSPGdRnTeejirddHba4MC",
  "key15": "3gVhXXxfDcacYTvSfn6VUkeZEbwVaanpd1gSK8jRNhkzTmkzkt53RaFx5Jdfy71uFwnswX8uEBEFEbnS61e4wCK4",
  "key16": "47mdQrKP8aKUiGKivgEFZ2aB74q2Hy8RczXyVjbAx7F18atRhW34TxiTyRoehUyVoCJtH5NYhhcsyrP45EdcDicD",
  "key17": "kEoCQh5Uy4YgFayR3URbQc25jxCo9P3Y4wnpynL68qesfr8hX6dc2inywQ717Sk9HKj8Vqvbhi58VAaQfKhQ6vn",
  "key18": "4qXwTZsorjGSsY76Z21u3Xb6Xa33xf5T6SnYggtXoQEtFw8vSGYE1tejCLVHzW55zmjGzbue1YWJzX414Nb6LGPv",
  "key19": "3hWztPmmibZATMZ2TGfvZrT6UZze3N1SZGTaQxfaH4rybMJVEqwaAMcsqj6tiWmzyNEPDosZLmALhCwMjN6jE7Wm",
  "key20": "vBvtRorE9yCr1pAmUFhC8WKRZw6Rx3isnZx9kFuJ6nFbyjoA75Vtz2ReG3wUZNvYCSE2Ea3w2FrwgVS3iP8R2To",
  "key21": "2a5Xk8nKsy37Q3LXxQBR6BekdXdRRj88hoC6rssyFDM6WmY5MqWGNoaEnPfBuX6Uy3gStDE4xNiDktwz3H7JvjWi",
  "key22": "4CKoboMwEeVz3zHhTL3vwrTmZTT1iNpPfssvnVxZcB9xcnjCHXGeTuVFdexuiFE8LBafkjZecEv3yd9R7Medyyvh",
  "key23": "2VymR8kbcrRiV5VWbYdnM7nL8bRopWFyaiXBPhZKk3bYEgSGHcy1rCtbRN812LZcERunY2Ncw5BVeBLJCa32Xm5R",
  "key24": "3z6ceMiX4hproVEuAuphUaKTSWmSWU1689zzwVvUke2gKGTVBdUSF7xaSddugMY3xwtafdMyhCwBhFafkfMCmryQ",
  "key25": "5ipdv7rj3WXS2wPYwzoknbc72jFaz6vSWnZCTvYLcjPeFYNaDSeFknnxkkt41beH9sRUiuw9pciCSfzvZ95gwZYN",
  "key26": "33qVK5NWTMSnsTY1UWeVvrMLy9941VALMkyvgjaKoy8u6vPn9VztJHcuCVZdZ62cyoW21zNC1XUNFx3mXzgWpXtK",
  "key27": "3Y4Av1wHCo1g6dDv8VBRDVWA3DV2kHLh4cKkQ3iArbbhugKRijDEHtHaCvYyVgBKjmqcALWck1uvp9AsuZUYRb6r",
  "key28": "5nFatHky5zsoBNTeL9q48dMtK9oEdcjtgDMkUHw7xyWx4wnvR6TMCqR72A3VQCsWtYi49KfHuM94QxsYfVLQwVDH",
  "key29": "MJhLLE7aX2uY7Uw4kAxDKkoPMHcMH133pe27oSRWjRpQN4h8KETrNDixqrLNEEgWGeagR9Xmnn7r3iNbNy6wFtk",
  "key30": "Bvrru65C1kN97gXPUt7k3YnHoYgTNYtf3SCPpswF27ztzoiNTJ6bznf4VywNZuiTy25H2BK1rLRfXG6ZYvr1n8L",
  "key31": "5XiuMJAvhaJVGV2B1ijGHT4cjkFRf15HuUyXbCuUqhEyCJVg4cFguqkoXnU5ZEvRaEPBCFzN6F2uAQa66sixiFXN",
  "key32": "3zWtHvPe2QuZvNouHpaqVCFZjddPWHYezCRqcdMBbaoso6iy53zYTs4Zkp5FPprWH9Yv6Mmok1WEjA5whj2mkKJE",
  "key33": "4z647tvEMuFP12SEK4hSqXJBXrYNfaSspzySLfTKvWWfNi6A8Kuv2GCXx1ETA7GHZdcC7FqMznhL2wLapAzkcFcF",
  "key34": "2vDySsh7QNyGmSAbNAMvi88Y29AhRittA1KhRALxCnjeFm9H7TtVU8n249KY5ctprjCT6VjJzKLHUiG56JRooT1q",
  "key35": "5PC9RN9GTqx9xvb3T1gBT9n5wJoZPmKZdsR38sfknvUVrHNTUKtseUn5r1P6LjRN8DJY1ZJAsEztBs9PqYiJNU74",
  "key36": "4UuaEZBjAeBcJD3AfMvxAbFFXgnjxMD677wwFMbbLXmpypSXgEe7ZXirfgKSC7NsFAEeHuQ1pHgxnvMBqLmj9a6s",
  "key37": "4ae3Ctfwrye9tK9JRaDAbbVpn8ntUSbMWs25eFhYFtnLMw1UubbjvvHivgAHAnoZrWuUo4RSzY8mcXwcJrekWts6",
  "key38": "2vkCefro75VqVHZie43yfConQuhdaBhqFGMnnzSRFTxCXeRBmmq2Q29uzmWTUrdJMvYTJNr2CS2FFpXt32yimSBw",
  "key39": "1dgaUEENFxrmtsarFFCezvz7FK5HtAwTPhRGvVc3SgkCKTr4W5EYG8k35XdDVfY5oAGsvTHNHMQ8ze5Mw8tvN4h",
  "key40": "3B3F1WxUFoNb3DfqRtTtMQVQBr9EGvoT712SEX5paqBcLJBYjuxzRNRNq4EbATrxjA3KKNmuuKVjhq7h7dGPvttu",
  "key41": "4kFjNqS21AvwA54At5FwcneimWtdTQvw6W5Pwh7PBQLRSeWEB9XSfaXVtsAWFgMqizy5vAy3wHwnrXZ5s7nzES6b"
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
