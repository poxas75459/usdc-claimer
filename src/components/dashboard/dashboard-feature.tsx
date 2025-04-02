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
    "39tqJEArYkDKaHv5NkHibKviXw8DF6VYBvFvzVB8i35ebvpCbkA45nrzDkP69fE4WYLzsh9RF4ucpMgXqqtJa2C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gaS4LxA2aupnH2x8nn212eHkLGFpBVU59Es89iKM62P7ouLcXNrTXRR2sf469gDxPYhrFaEMr7t9dbLp57KzWBp",
  "key1": "42tGms79yRKrKbahEnVxwRwYfHERmBmioziXBUYagM4BVAxiHN7fXDzRGpeEf6oM3yphmBtA58qzzG5x93KFmw1h",
  "key2": "2YWicF2Gg1Q1dcrPi59khD9S8RVwoJkJo1yuaYzvFS7CYdegLX316RV75X61ZNmFw5DZkeAsgpZyhiLY6yN4Mc6X",
  "key3": "32Dp1KakZGUqjQhiZeSSHfth5z16g4WtvPJ66KzQtXghViU36koP4YwTg17rEkCKQJ9bisZ6iaXLHz9pKbZChNow",
  "key4": "4pksjxpMApfmnDFMScQbug2oXtistPMLTqZZp4AoBWDT3KFnuZ5r8qUyFvbA1kBNyBHkn3Mbf9mWc82Rm2wp6nWH",
  "key5": "5d26SFzZQdbSNUgo5DZTvGfK2Te6xpBuLWoyjpkkHcRkjvZi7xe8vpG7PZAA3UzMJBd67tQX3tqPDqyY7bBVAz38",
  "key6": "5ZokEcLLpG9yMPaExjqoWUopuGqAP7nq171GcVMts4vK6R5swCuZ1SdiNSe9aPyoYp2VTnwrF8sYnpLcArW6Tb5r",
  "key7": "5hBfcwBqcP2UaMToWMPvZtwanefrXAHGDRLGuRFjHZ9uiEx1uz6NqXMu8yr5XaysgaxR9v714zNVYMgvDA34Gwpf",
  "key8": "4HrXEkDPtcZXCxPxdA6pebCkm6qtGAAU5ry4etKoPwwuyX1SitbJZnumsgSWNvk1NNYTgxEavcZ65BWFiV1yY7iz",
  "key9": "dunfdxQJyvE6Zuwcj8PxDFF4Wb61chS5TW8gzSECB47DYsro53qmajNc5sXPFbb1dvxTgD4PRiG4r4ckNfYoNkU",
  "key10": "3XkTyjtEAP3qyQDpxFhrWzNB6XAabBZGHLpWFQDzFhTHjm4mScDimUYNJ5MCTgbnmxsr7VWwWQbnCpmE4YvCTfff",
  "key11": "4kQ4Y9JXwPpE2wy51Tz7oLbdyMdoojhvuKBXS7JfB8e5zuhHHFLXVitvee5cGuRitcc7ecP9UdRyNLb858G2GZv3",
  "key12": "24rsvYrWYKnonwNWMbdQo21jj9yA7r89MEHWKHBB34yKUDbghABvPaupV7fn5ThtbBR28Mkz831f3Q4dKuYbrbPE",
  "key13": "5J8xEquoct4FpH7HdXaVqKDo9oq8QYpUGbGtUj8UuUcbdBYYFCCho759jZpDbwwBKZJhPfKjr1pDZHXt8n7wGxVs",
  "key14": "21mN6sJvkbtwXkWbEaFPWskt9U7w5w8qmLt3CHWSD8o9fanZUbLyyMtQGRthrooqW2TUyqHeEdzJUTCrMhcrjNJb",
  "key15": "5wEPfFhR5Yf8cctUKU2q5Qd9uESMktz8Nnc71R4n2AqDfQvVMgVa8v1mScZrasZGrHbDkXNrVty4oxAoraREMWVU",
  "key16": "2NGXYA42Tzwg9acPgy1XfiZPjyrfyFFjxPE5BuL5Q1NWFrDp5g5Zwh3jcqr3Dsi6KYAZcc157YyZ1Fx3EsJgMeqm",
  "key17": "45HQuuZdszUnt4GqgoGR3hR44fSN7xMGZLQAmBQLKtzpRMkGjwD7z65MuvHhd55JjLoDZEsR8cr7aRPWyS7E3Fn1",
  "key18": "5Xq3Hm6UDtHP6sqbPE1UZ3Xnwe6mES9ZSUVtRFsUyYPe53DK9J9NRY2Qp2LhggPjpbAziKvUKdrhWvo7BQLVLu4H",
  "key19": "4kgQKnBrZtddWc4E6zDAfkVQYtyHkeSSbvGP4iXoHFGR75yhLrujjFRTdAFq8cNhZyRmekAycVeoDbtG9UqbkTDW",
  "key20": "64n6VErmBJVGF16SzvCy8dWZxdVFTLXQWPAcCybgJXybdjgZ7M9MNDBdLYVyCut8XrAX1hf7NP1qYsehL32MeX1k",
  "key21": "5aCb3TFLMXD3xi7aPa2y8heyqCctpm17KwbCYDWf3WfSkao78mNB8JEb9yAsRpavBSgxZ39JpjqLxXEmJQbqcNcd",
  "key22": "2vL4j7kWCPHCTKtVh5eKaW3MZJtxyp2TYJeP3t7PydPUgkehy6SeVmm69MHMpioGzmAqqJyWgKB7k1Z7JiZSsC1E",
  "key23": "4TQuueaJ6bxsuL5MUWmcLKtrqprtxYp5A4BBC7fcSg7JYrNG9p7XE8B9wvj17ioWQtowbtG9HbSWFdyaZbpRcdQB",
  "key24": "2FhNFja2oebb5GEN4PHR8nT7N3YXVQRBmpAESufVxhNB2cP7w2WVgDbjPTvYdT8EWu6YoXadCT5og6PQoqhVZGpS",
  "key25": "4Bvu5eh4tJRE6rTEVYBvq72Vvvg5oGiEbEc4esbnq9bbrNvTmTrxdDxCKPEwe4ofxtd66d7bZsmRgXaWKe7Wtj2B",
  "key26": "uPguuRE3oFuwFJ61WhLnGVXiNm4NR47EnMiHt9DAJSwhenTbKhjEJY82bqK1XWaX2moTvAWMbXSy2DT79gF5mut",
  "key27": "qAohjmxiQ3YZSBdGsyukarrB1NJH4ZcgLBM6f4L7fnVTFkkH3CaPuAGZXgUzAaT1QYyDN6AmEUGHGijjyJPzffJ",
  "key28": "2PV4JE5UYWDfgFx6VVKicjA2cdbQbQeFsFeptikmAG6eS7MCLJ8WSvMcTb75yWLmcPWhzR7MZbLpTUWnGWBBArqP",
  "key29": "4sWtPMLFn5e83Y9opSwrfv9GHN4bMSoLXRRFr2eWG6A7FzEcfwDoaPJmX4316XZuQQrz2aBEdJsqNnagKbHqecy4",
  "key30": "5YdqhkVUrFSj6sXtyqvz279yr3na7kbp5PAAQdiBH9ZhooqAUKDGgttGNf9EfDeVwe8x8SSA36YnVzJWfxe8Zs8U",
  "key31": "4Zg7JWkQGD91qB2aDxSA2rQS2xGwdp5nBfaqywUS7fhocqRrTrormsvesoL4Fkg82fqMDumpeE3JfR7JArQCzT71",
  "key32": "5fdCzfxbQ6L6fcD9mE6C3QtuPhLm8LnRMykB23TPbWtZXDJqfD7tzg3TUrSFPUeeGFmTvyecD8xcuNAKDAncSWko",
  "key33": "36iBGNSsEW3hp5FUKFhAxwh9tKhDKGHudtDnNbuqpGddkgGNauZUs5m2zKQMeq5bpijPLrfZAZ8mDNQzXidZHegb",
  "key34": "pGwa9KsYNfTxdCCVgmojwZSAhQNpAtCNGZCACdnz9c1Frtqp3ozaP1x27koBc1xdfEonshEgfnez1cPsW6y263j",
  "key35": "ymDXGUhF2CkWGq3vYN8g2m9LbRxfLqWKgHpsgBnejnvHp6dVqfVhNjJyVtt6Vgor6Xsu81ZxVqAYZsDUTTYQ8yv"
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
