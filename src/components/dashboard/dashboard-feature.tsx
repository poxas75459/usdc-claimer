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
    "7tufcsoEDw7HD7RcNEHK5FYkYKRaLZaqxy9tGoES6aXkf5aqi4EbjGaJxpfbHzYPERPXZQnmYiruRUxVLovB39F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sk2HUECNhN6DSdyo3oYVqZbqQQXZQ7SKDzRG6BX5cWSMracEevNHNjJxyAHqehc33zMeRtGypUuAMxnMCH2QZfP",
  "key1": "5V1GGAXxpiJnX54uRf9993LwZHWtQXEffd3NSLKgU8CqxKu3em2sobRUWZb6FFzALdWJYSitRTvZwPGpcyyaKxxK",
  "key2": "5geE3ip6idtu7n6ngqZE1nVcfJTuhzoXEFvvzzamQNf7YjcoD1XB7zbWXPBpS8RtR6A1FZtnKBK4eC3Nuf8rSRuK",
  "key3": "2KhaHbGY9EVfc1DH8tFCMNjKmaGPg8oA9gY2p3Cp1HDogh3ngfhTWwA7y6193XzpC1LcKRQySTt9LypK131f2KBq",
  "key4": "r3vhBCGDvmsBUjx1Dtz69qxBEPcLPyLCukBngs4jK9DQrHAtRKow4S682KnuR6tsvkZHQPsyvSeJzjFzwFEEB81",
  "key5": "5EWuRuysW2UWP7vrrkGNcJynFS24aguuEfkbq1UuZBkyRKk1LNVoTZEUtyojsSazksaQPwvJwZMUsqcrupJxXbXi",
  "key6": "3yUAf88XA9pbhxPrBNGUVWghjsLi8Ni3KZpjXd5nYLPTvh8TnqRmn7dr5M4fjFA4ELWmgDgz2qRyywzzAGJqFJC7",
  "key7": "38ah37qq3ubiN4eADDAiVm6NJ1AXxsNz1bJburGfKyNip5ZQmMDNoihArrGL4mu5AGb6GT4bkRL6XAnsfNXvN6oL",
  "key8": "2C9NtsxrhSpgW3R3d3oLQ5dngGjMXZ6YYKrp2nhgs6BirgncGQPR37BP4go8CWdwJ3PUBx2X8tBTVRN2RggW41LE",
  "key9": "kVKP5wbifi3Wj3o7oh5Tr8zcRazCeH8v3itnCwe8dkd6XgipYMPrDr4wDgyhhh47iAjBEVDqJ4bCcfZVrBhDjaA",
  "key10": "3N4o2nWPBX49CfycjcyiU8L1FBKdsE37qc62TiAq1EeL5zojt398n47zuWM2msiPPLHZ8oaeQGjTRoU5ASwhbSjM",
  "key11": "2vb3fXr4ZkBx64m5E5wchMsskvkyuoyprCQRbQv4hX1Etw89Bx1SsPgXeX4eFATPpYiy3enQ5sF14xgkvqy16cfL",
  "key12": "3hDDwf3VeG1fH5S3wpX61CMrNb9RuGdWUqhxiHHHBgJ5uc2nqKAfnz6ir2GQNoMn2e3sDqEi76ccZF2qFQxw7pUj",
  "key13": "4uRNAgkmKK5S9JJJPFK8XYppqa7LMQHd9gY9PPLrMKXgHTHhTXE6gW4bkRgF3CDgPFLcuC9TXZHc2oK7DZFkiBr3",
  "key14": "2hYvweCcz8MhyNTq486HhUtfd8Joa31adpQooABzpFrtkKLymNpHtGwqMmGPanc2S5eZnwW1qw64GqUaWjefFUqX",
  "key15": "FsxVGA5AWYLiAdXp9VEuLp3QyYY9VsKxSEzHyGZtGpx2o5hikkiMmbEG8Qr8kgtkQ3VEXXaHFJc9gE1WQ546Jwn",
  "key16": "5HRwXDrxrkp3jDK2uv3jubPsDaSeDYNDAdYJycK61EXvojgMMUCqrYSCHcEaodbymLjbTDhBSSFBEvPgF8aw6daW",
  "key17": "5fMHKi5HE6ezY1MQxwZNUPbe5kU557AjjmG8ExKsnCKDD7Vre3bBNRAt1KPeMZ4kpvM4hCFU3WZnAQTxyQcZPrj4",
  "key18": "SEwqFoHnkfXxExujV6rs1q247ZQEfmaoGBdJz1CQBaNQtQkPLNQ7sEdAUMKsGo7jkwS3Nzxn2NwT4kyFssfVeyR",
  "key19": "4F3k3utNFi4kWKhuSk67HfqpTWNbBaynicApzzPDCGwLyi5eeWY7d1P7JgzU4dDss2cbVzjoZsD3LtQEbmsYn7CT",
  "key20": "4nsAoSK8u7ov5qMFUveUJhC2pcL9KrCw84vRkqgSxNX31B3xD9ZS8C4gqHbCqfJrnwt3qnWkP8DJDxkhw31nyJgW",
  "key21": "37yS8Z8cfWxMvSB1EiAs7ZAsjTdbNe56aiXXPYnPSuTHC1dfHs1qwDwZA7Bu81PF5Yd9hwkrLLt7vC3wevRvy7U6",
  "key22": "FVGJcAxxM6sDz9L6XSLYmbxwGxRudkNiVvyxd17cu71ASsUS8M4CLTV5DGVMgJ6T1xEsvMqVFGDmJerJJ6NyqTV",
  "key23": "sgqLkke1DEsPXAXj59UF25WWFRvVZrdLKPrqBcYjUUDsHhxYdMxtRLSR1NqKvKGVCFKGJsRYBwJgTLSQNm3Td7C",
  "key24": "dH4zD374bDhEZCFbPiMcr4UXbkqhfCqLcWxbhRRViMH5zsJttFpTU3cQuHMd1EHj7eUz5ScReEAyWBoMPnpmGUN",
  "key25": "9qtB5PUPy9DEAgNq8wbx71Q5ouMeouz3ah5BYUXWnt18zhkJRbCBfwofCzggKfyMktfKQeeezg6meDhKrizQXbZ",
  "key26": "49L6YnpWMftTFxSDMjSUd9jJK2E8TTf3bjV7b8qULvxQctfZKa4VfmefbiqgwfitWuR35LYxbehS8PnkfH2dncMh",
  "key27": "2zXAak7tLppPk473fkQZPkD5ZHagQpCzTLJAV6VEgETrrgaxhhfhJ4JZKh8D9HgA4NMbB6jiV98JwnShFuQpNPJd",
  "key28": "4FasAgZMMJQzb6JJmgQyXPHHtBRGMxBVUTShhBZRoGbV59Af5WREKtSGrmM7aoUgciaxvXNJgUXMWH4wvqrCR2Q3",
  "key29": "5gzeQhjnf783hYVepAcQm1iHgjMmLY6GGRjCgq111P9NUnjzYWqaMe6PpkgVtAAsZEKmeZrKoMoRXGfmb8aErzPG",
  "key30": "N6Bh17F3VBNNjrcX5xpsDfEbk7FHB5mhe1YraVPuRbM4Ug2Q5NyjNTvstiqnFXU2bBXi3iFg3v1wd2NZDkBtZCR",
  "key31": "2MzYPQ7f339A6bwQFyeaovrQJwkhRPnFM7WnVYW1BL13Ma33AJxFoStg46geNbhepmSxszNgnKZAmVv5y1QvHyY",
  "key32": "Eu3AeodYbxUTx99LHpBAtje9VzFkAznJYSPxVP35s8sduUp3wXBkteTiFP94ZS7SWR4dXpHhHQcWK8CePjWCjAa",
  "key33": "2acoL4yRc7qeEH9ahSViAbTpr8eGzZYgQP6RtFkHu4brEXKqpgFPfdKm94f9uHVmY1fBaB7h1RokiyQ3UqHaahSQ",
  "key34": "3PGwiKeEYBmZrLiLSShpky1WBYg8ej9N5TEPCHwkLrEh26YCj96XbkrD4C2byYofGSwBfJt8WuHS9FYVcbqBLDqy",
  "key35": "4F7e9FxQkzTYHurryy5uBh248Ug3tKcZu2z6Vtpv4vzmJDCfjtvNmyoGhhZQcbAgrkhiLTDhV3YJxqfB6bUN2rCe",
  "key36": "2nZTS8eJYui6EDCRz6qnAjRzLtAxKWunWE87kPXgk8kJt4e9t5EZHME8ueKJjQ1PMinNE5ZKSyk8nqMkU5jWRbJq"
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
