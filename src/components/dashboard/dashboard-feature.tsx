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
    "2eVCp77nuuwmY4oYVMBcgmRt84Se9ShYo6C4Ydw3rAPaatsyzdBqPmdnVU61jGQj5JX7oWgwzLbCsZtBJutc4W7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gdnrHX1ExbAWHvTzVqLVCDHzb5cfrQbjcHugELZ6tPwJySFGJdVsn2AMJ6qhuEb1qHGzdAPVi4XSG8QCY2xGYQf",
  "key1": "tjr9hfbFG2uBsKADZjtUn85pEu1wYfP8Wk2L2ERSpDawuSFTAEbtyDY4pC4Hwrkr98iHmXCyM4qxfJoHUMN9vQh",
  "key2": "2bdRwKuXphmtPzHF2kRZpCqkVipZ3b7jUUYHK1exSZeiHsLAfu28FaXwrorWhHiJTYMv7H2qJ7ewdNuVY7rvPxbP",
  "key3": "W45uxAHLQoYSbj5XfthgCNVS3nMrXiGtx1dEW9PCwN4Ey5PeQePgx3zRczjv5qYoBwjx1QwKasJwnoNqHF5yAfW",
  "key4": "6192w5ZgdYoak2jMW5ncgFdKXqyCZVwjCTBjfKbj52eCU9m5FXgfcukY5cWNLJreHHPft3wGWgmoYCejqUZ9bWDJ",
  "key5": "Cj7r6bDEdSGVXiSmCeGaWXjUASNQZAMHPYVWxcsNoRsJxRwzL5voR4aJisjA8cQw6vjog4hmcfRAkGdrN2vjUwL",
  "key6": "4K4wJ9zDKRTQAymcnFVnHDCQNy4SJEbJ7c1DW7MZ1bx6bGjEoKN33NWxPoBhYKvSVUaRbdAPdR8bPzARNAPmkTxF",
  "key7": "fQT3BcbNZAyGdQAm4mjn3FyEzhaDhkRiYjHKSdyAsDgRuX7PFoEmy3E7yLNUwMtkMW5MVR7VMf2RzSCujeLgWMK",
  "key8": "3hAfcvedsCQ83bG6sxuQSHW8rpw6GKskTawPiCMX6tsVv3P7JMYoYCBTBLkkPtJYY6FNgtm3RC8troyvAxMFjBua",
  "key9": "5FVXcNmbyQbM2EufD6pDAQXmdHf8FJpaVN58FNmUJpMgdjnS5oSXUbDAHjKX6ZSUv2SwAZ4ZPnu9287MBRA2Sppu",
  "key10": "4a7hSxDpBAkZ4HsSXjEbdyfvoQsriLD3P7wW7N88j35QXQpVK3VvCXVHowZu8Beaa26it15VsX8h9cUkJCdPic8Z",
  "key11": "5QHWk5bwjKY6jt686bTXPyjcRryuVrL1sqe2Y28t7SC7QsAn6Hs4xosfEV9c1C7Wo1sUWoPwg3EUCaJ2U7cvY2S",
  "key12": "5iRUDMdK2pA2G6yVy1k7f9c9LinEKzsAdyaWSyQPfjDpMZ1CHLFUoEibp1QPphfX5q2ptGsTMLqzv1WaJcktQkjs",
  "key13": "36n23wJ7bgumfY4Y3C19h639x5BfLCJj1hg843vskkXSpG7g15f5jd9naepHzrkvUjQVs3pXHLMtz6JGXe85LBEt",
  "key14": "3Ph7J1FwhAmFkAsqh5W8HjHuNbhnrTT658NpDNedQQ6Wmz9eqkPm6epaodYxbXUfBJqwfGQQuuthTbdBfwEtdrd2",
  "key15": "5dDBFDczMZiaCs5TV1DjAfMWa925fj3VreH3ntJcHCyfpBuXHWYTUNHXhT1y8EWJe4vAEiSPuLGGNmRLdHNw7LaT",
  "key16": "2aVqwJTPTiMhu689K6LYjLwbBZKp9JZx6C3xH2CK4kB4CCbfYompb8P2men1BfKgv2TBi49kkLkUhyJDgyqR3mXC",
  "key17": "4VakMbCjxWjkTGbF23LTSQTxGr3AexS7L21x7fGyTVPqa2F67rNXDLqombK5gQtnFW5ZSD7PqD8uyzAZh8ZsYf3B",
  "key18": "3ZEtBjoifMQdRxNGCMjNxxtC9B2MprfPvMTXRgHoefhajc4ryBf42kqFZdpigr481YB56R5PHnzsRQAVFUqDnSsU",
  "key19": "5F2b8WMueNUHYKFeXHyeuHSXhBK4JezgoK9HHfkQjgK4X8zEPATv9wACN9sFYKa84oAqr6prjGzjaQGav6pb9XGT",
  "key20": "3pd9fRKuxeyQCPgFBTiPezzGCsnitmZku7kgD6mqL1Hz3KruJdWcP9RGkABRqoKEoS47F8YQhNxiinFoXtdJY86o",
  "key21": "5HgsG56VWtmDPMK1PT5n9fE2fipEsPRDTCrubXRbv7sLSZmcX5wwox1jNbbUeLZ8uUgxzP4THm7uRwbgpAJv7v3r",
  "key22": "wdR96NDqfBY4e3io9e683HLS71xEsVSShtvknYVPTHhbgWzowhNygetKYe5n7hfR1jxNSSiJzbfocc7r6aXriAG",
  "key23": "5DHt3c86xwVhxXPWNTZQNm4JxLYTgA6ib3iUFDGo8RuY8t4ush7qVGS9XugANqinhLr5aygutcnHbeLjWmJNLox2",
  "key24": "4MtqEwCCRh9fY3SJKARC6vRndjs8PBrKu4Ji3X6r6GKGXctKrkGcJPrrhXC8HGfw1fodqkW3iZdWHWbuwN3N4NxK",
  "key25": "2nPg5yRumXRRC5X5VCw837wfkPaxjFVqf3SzKY39wSksbyzLMWZSvpeVNDqzrp1fgBdyKTU2JJtAV53fqbCW2aUv",
  "key26": "2Jr52PgBtDV4GbzeSrM2oXFzaAZAbNuDcr2K3NSFsUC6vLLWG8KqwjZwopV8Bxu3fX2L2jH2UEreAVQ1JCFdjV8v",
  "key27": "3uHbwmFxXcQtupPyddd3JJiZL85yR9biU42KLTtX5myS83T6XjoaZ2fkhF6JWRcunPUHyJpzo11317HdRD3H1LXV",
  "key28": "58xqBf6kTfA59rTkqycZKnc7dQkCnkHDyESJWhefzJWzFawqAKMWpeU3MKykSGB95SRiMiXXKanTHpZCnfZcNvCg",
  "key29": "5wnHfAZtj4S2LG8W7KAzZ46jsqtrNdwvE2M7ms6ZPPzcUzMNRbdtpnaydkmn46Ggo99tomeBtj8EQcWhU9Pu7tnE",
  "key30": "5miYs7k2xhg6oa1fFxTQbckByJnUfAZfZQ6kK2xy4NDz5TvPUdGMTkEA3PzQqg3oB8e3m8WrxXad7wWtos7kfrZT",
  "key31": "5t22gBQ5JZRoysBPfRqVVF9fQbVWgkFkqrBBkxdqYxc7EmUS9GmNp8mwh1t6Zdnqkvk8Uw2seuT47Dk2RNkQLvAj",
  "key32": "ffmnX9Zcf8npNmNrJ4DEQmBYJ17KrZW89TvF4dtaWGt2uDc7Q5scNZXMuegPynXcJcXPwzUuQSiQqoQzBmFT4nq",
  "key33": "4erE5NbBd3KX3Uxvk2L32ugsZUkJtLbXbfS5eDKx2PTRuVWpnmj42HGKEwbMAmNG5zRSRW8TqydZZ7EgwGRse2no",
  "key34": "4CqSpEN4FV1T9WnN2dhX7Ruw4WDiPfyZbdEjo4T52fVVzBkb6KjkA7ab9ESZWYyJeWkBL17hhgHhanQUZGb5UENZ",
  "key35": "3fDFHur9ypyuy6S6YtAi13jC8qkCHvpT3E4dD37hK6cgFmz8ZpDxf6wF6Lx3aCTusJQ4JPQpKfvJwCqt75hPZbk9",
  "key36": "4Atjdh5EUaaberiRz66UcEXXtcw4hYdFiPsx6KVp1DfCZPaFKihYiqyLdrRHnJaEAMDB3wjwPv26watvxaRKxn4q"
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
