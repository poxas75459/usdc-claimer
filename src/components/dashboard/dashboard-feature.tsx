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
    "5wC3aQVqR7JtFPEuctBruCPQKdrUuRsRJoC89gr8P4QBUZRuefqDAqyFJdSHdxPX8uYEDxswiaaVvYNxZmEcUKbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a4F9NQLuvb7R2irea4Zf8zrqWdp4iETdiK3fJoKrKJQHwJQnmsEZC2PcPHXRhs3aJA6uqg3bq1qxLQf9PwETmU7",
  "key1": "2U7jKxKJTjwQnqvMicScdAMN32ZsUtMmaggoVPYmcB8BRMp5aZTEL8ujRUvijjb1reNyrCpb1DWZmfUymZhkN89K",
  "key2": "3nM5qk46h5kAsQ8REqcckVC1VAUCNUpwaY3WCn73vg24buEr4qnwXrxje4Ha41hQoKfH9qjKKdBTPuqur6jqQUeg",
  "key3": "474j1b1NKuMdTYUxnVu2bdh8yH3JfNNWKTJ25sFAw3yqxU7iDGfWELemzDW9jgmeg6kwG84Qb9yz2qKRAmUVxHj6",
  "key4": "2WMTfnVNNboApTQ1W7UZGhKRwFRiix7rGBUEAqqqDkdriVKs5NtawqGQMUKi7qHy4HASEZiL9RBa3fEMJsBSzERc",
  "key5": "5qHSnHeWZYBsdfecU7Q4QPdtXp1qk7afrkcQW9Kfm5J4C4QnvfJass9DUAv9kaNJBwdhaCsudPT4MhBzC4mfJxwx",
  "key6": "3v2RRVdg8qdHhveJEtXm4EF2mHW1HguL4wmZr4qMgJVnA1VfZtHRdZpoqGU7xp1kkSjLnyKmtAHtZt4JNekBjKJR",
  "key7": "4oKn2SJCFuMrerm11bCbWzGJbSZBA9mfXHeEq9U1caiAD3LVkGGzP2jhN4qQu7tQe9y68iXf6fLD8vmD6SejszUC",
  "key8": "2cFcHPP65Zwav7FSK3XvHNw2ff2BNsRzsbdFER94KrsH4uCYBFft2eE2P3RUTgUgGN9VMKcHfS64SFpQCiRuKBDM",
  "key9": "2LMBsZyNvjTiqoJXEiD6ZkYXBUzgxRLrTzTFjS9C1du48s1bhJ9kfQsddNjEshnijzkZn5rB8vGwruPz8rv1rPgs",
  "key10": "5aquWPzD3SGYHT4d9E4XiRXgvnjWuAytCA1roGi3iAjaKvQF7RYvDvrGj9TtDCMN1cnCLGtgHfLr8q9xWSBtbEcZ",
  "key11": "3bHZMV5BF5Bv8Ww8WQHuSyGnie1BvfZMcxTWms6RF3Vs9WMKMLmDsAAT13S1SGkaEp5sJu2UnF63UkvvNxvan86n",
  "key12": "4Hov1ZipsY2X5ATVgoGJd7f94NWVnEpDhWEcDuEfExLSxpJJxA1aFwATjH99ary8WGqHxTpRsaKVU9MbPzFLhCFG",
  "key13": "5RE6MYqS6YV5RRNVoiuYfco3bgt5JVKvzYFZTSSb9sysem68PiN2xpsdH7SSLjqfSZdeuz1DcQFQeTAJDWhWVKNa",
  "key14": "246tL7xzrMvm7BaYG3Uv6RysBGMmdMBRFmqZZXvGQhAngJU5v57unzBbrCjDoWgZTCQeHpdSKvAXYbuUVgceDLn1",
  "key15": "5EVLm1EGiW2VSSpy4QhBLMevZeBE45ACaCkVMTPmn6UCo8LxR1mPUpr4DYFiA96e7o7SmAxM4gaGXR1TMXEmmJFJ",
  "key16": "dwS51ZFjf1SMgB54hjHBR8uh6VLNqdKEVHrQiTjSennF5vYggqryDHwxZD4hL5oEtZQKKbA4ETjuVhZQZe4CYCX",
  "key17": "66L1TivLzQDGPj5h26XRoG4ybz5D8DeK1Y5NDVsXLU8DqQbyLpinRzSVZaRT9vfCQxY2NJsUsWqAJG8zfsJgbBzr",
  "key18": "161VxWz7isGYz31uVFbq8RYRMKX2PU9yBxqNZgbqQKB54nYECwhbhyWWeA1zyGJ3eAJvtneKDT3KphFFqpqqUKR",
  "key19": "5Efvx32DmHgMthqVDmBUE26N8QL4Ljz6aDc14st7HJe67qSXUSE4nzwvbqMsY2HDnQncpKFyyRLA6Swroy4CyJq6",
  "key20": "2WLgtqJ4HLsnM9jHhFC9yvPgurqfTdqZqtjN3csgqyGZQ4Jj8SG81DQ2gJazfNmvC2umNZrTTNhfNE3r2y1sJder",
  "key21": "GswLGcHBnDzHDbXULqqYUiTepUygRS5aePx7BapfGckmnUjY4W4zbXViKHVttfAXQLfx8mBP9FSeMKQGn9vWZ84",
  "key22": "3ebQXPx37g9oCrsv8oSjUZuNVKvd996r4FGRyoekn2apt8qNwdeLJQv3QugWhN73FTUwRpsdqbXDuYdhj2sSESeS",
  "key23": "4YUrL53hb4BezJkj4MazhvVh6zCMwUzHbtSi3Ke4Szhy1cQhyHczJnvFyd1mWCiyMFF1hwFungGbgL3s6QW9jUk2",
  "key24": "dE8wHAd8wFVbiYZy96FMLHKNe9SK1qYNPZAt9XGK8igbrA9GZWWcVBED4qbcC1g8E1NbWb1UT58ze2Ahs6Kx9nq",
  "key25": "4A6RbhV5dMKxVrv2JeAZNxa4SafdL5p7ta7Tmmk3XNT2KrkxgF4KXpjiMCJdNuon7hXKvbzB7uurwdVDiFwRxGA7"
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
