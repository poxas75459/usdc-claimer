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
    "npAN5hWdJ9D6jsP5onYSrRnDbEgVbxb1yGdybufLVRejJFyfMVSvc8TUp3BGRQoKybcveMiZufkCRFEKcZsC4ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sViSmymTpXHqcR1C9jXJRyxas8e1BA2ZskmaG181cYgJyvkYn2b6FBicD9HucHZdRo4xwTv4QyTPZjzL7ysNaZi",
  "key1": "4y3GaNw9hKaB7TfN64cnepgAfiBvVLLTrHbJqMPMhGcGwYUB63zDSdTaxVDXv93b5VNgmDoTT8wAyJQgPAXALs2s",
  "key2": "3bZQRGMu5bJ84APEoC5uj3VCj9A7Drjj7riLG7KrgjmKYL1icM7bt5twBVTm4bBETxJmj1hzgy1xabCPLRhLNfT8",
  "key3": "5n93h8CWs8W168vGRRYHtZKiSnQGn9mBXYBa5CJEhYvpHKJ2f2Qbjv2iwvABuKcKLnS7YPWhCwPDbripS6b9SMG6",
  "key4": "5Goq7odRH981e4n4NRR468FjdkYxs8RMGDwYnW9NCHSUDYQ8udQLi5T3DbKYfiJDf4csLSvbYUU3vFoMeK5eFL1B",
  "key5": "35AD64VV6xJkBd2ozAaB8RT5gikZb2bkPdzFn91q2RPx7RksJJ9KoBeKEggPfrHYAgiwwp9ZKecVCSrcA3QkueyK",
  "key6": "4tArnuzzqGam8X7JvseMdN3UgtvhoexniMtU6YpLPdBHr7BzgJZGj8RJcgHzUC7onpb6Tohh2BP6oh3Ai5Wj8tbH",
  "key7": "4jZ9Zn8ezCkThiBiKt5VMSMaywtxhVSAtD8dKLKEmyYZHduRQaYENoLdrEw1dcJTbiMNqFJGeHdPanMYUaD8XtdC",
  "key8": "5r4P3YywVBE5fZK7F27CXyKkY1HTux4sRywgc1WBeYobzG8EBafcF8JTnTbQqsszyeLQjHo8JtZFvd1ScpN3Ts4Y",
  "key9": "4RA7mB79TgWmWCu5VtsqdHWwKDwV2qb44FU1VPaq3ELGG5hAch2ujD7uSBoLqDuj4ZQ8Ja4BGsoV6zqWK3JzddN8",
  "key10": "2vVHYS4UNzTcRKGUYtodcWhx9L7EHxBP28tULxdNyzTGVLoSqDWqPKT7cHhfcABnzd74ZttVXEr2jVNwxtyPR64X",
  "key11": "4XVSAfRE61c4oDjUJvizj4eSFem5STcs7XMmX1Tp59j3W97zDdzvDybsZWutcZBkpmnP9dciSvQAZSRM2XrmKEnr",
  "key12": "2ff1GMpFRXwJQwmdD6HAm37hZTiP9iAjdTRYNa4NPTa7cpjRWpXzQa7wpr4xE8ChGa2rWyqH5xvRFgWHRQTc7W1u",
  "key13": "2EPw16Kmc4up3Cwj4Ew5j4wWwrqb4LHe2qqghsC1DwBQaQ62YkYHyeikW39nMyEg6mGRG38Reatznas3XQEoBpYv",
  "key14": "4pWMK5DtH7uyCXGpceo2zEv3CLKW2etWwMevmToDWGhQ1e7fpAMCAmAsC2aipdP8uDAZ9Bi4DrHBqJheBsnMqByW",
  "key15": "4LPC1Hg8LSbXF6hejvCtGacTctcR9xjwGATCK7boD197yfY8Zz5moE345iXfkRG3z1cCyV5tmBwMHV3zwdwaisvm",
  "key16": "4DQ1ErCUseLyZCrGYB9Mzi1GTTkQNghR7eVXYiGbvQrm1Q5w8pFumzpTgb5REvgvJpDdLeFrQ3LK7okCR4LeTxQD",
  "key17": "5kMd7GxEYTUQmuniuSJiFSHpFiN4NjN3wYAGKYgszbH9FApbXeovqFqHQct34UENV6R8qSShnbyopr5EEQBB3NyU",
  "key18": "3pgvKVHknefPZuYN9J1JvyaQZD4aagcQ77egU14qJ8icSTBXpVJ2KnAPHmV2BzbnGEidfwPJDJ5hSHDDkuX9MNCP",
  "key19": "2LWZgtJ1ijKR1ezwY4djgtfjjvP2kcSLsUtVMncbjc4nobuvQNEat2tHBrvYxK6ApX4QBquz3YsRXCNSkHc64v4W",
  "key20": "5iEvdbBDFz61Snj12fgCJw5JFgCniLFzGsAMNLdWbMizc2VzschJW3S2mReDtwGRXJmpWLVamycQLC6XRYWbGCTP",
  "key21": "JcxYtEUvJ6yesycinTBwSDoS3xEcfzNvV24Y7Nf9kJApxNf1JGsZFJKSACE9bEAbdodDd93VrvoS9kNaFsgjKXX",
  "key22": "33fhokqbg2wMuZUxvVYY1uUsrZazyQE7VNEqys7NatxYv3CUQmTa5JpgsBxREwvUcMYYpRNG2R5xSHZJc3VURpZB",
  "key23": "3VwRkv39Es1FWpce1HBGJYPvmm8ifVGWPDhSem8zm3YjTd6EVt1ATSv5seL13wb5JPSs2b4J3aSaMx61sUQh4ER9",
  "key24": "29eDYJUJQKnHKtCTKiFJ3xB6qegJWjkGZMzhD4urCU4yxgG5eY13U82q7F6UWP8SsuiVyhqUzP2Z2KQJrWo3ysUn",
  "key25": "5hiLuJ6GXpgqhwvxGpmRXRnEPgbenvQjZtaEEZJpSs3PZJdjPGaZR8EjUbZqSPEfN6zLw6DfWegTW4QggRv4Ps9K",
  "key26": "3FBW4i7gz47WDmNNV9KPAomKBVNq7QfjFLXcnKssvW3faQKVHq9D1dP3JsYjJ43kKpDNovgaMzjQhxg1pZaP9jwD",
  "key27": "2ZpDhJjxeRFATGjetxXGBnViGL7V2ijVxo1wYMAAgeVjyZP2ZjJZfS7JWK5xrHa6eNuTWxaF2KNELoXPe8YoiFG6",
  "key28": "32L7iBSEKQkwM4EzzrN4h5NN2KcxnBcy9C199mTuV1JoJwBM2bqUS4NLAnSstyEy8nEUzkJFYqURGr7jo5tozzpT",
  "key29": "3LbBKygzd2TXDKum1ECjBd73ZkEfTGCBxWeRNeH2W1BcsrnemEQQeA7mL11i8WMFNxk88mZD8mjbZcjeorYQ6UK9"
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
