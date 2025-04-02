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
    "24s3dKkxWPDFZj28ocXVuz79weXsTdUQGwLha5P1f6h1YDgLeeBj97jdiHJbxNfZ9ZtZzpxPStnCJr7BWsWsK3La"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgxKExb8xLZZ9SK6bSGs86x2A9SqtTWkyRqGjtKNvev9aFaWfky7FhbAC6t4FxY2hSUTVx3RXqLJ6PeRE88kcds",
  "key1": "naUap9ev82d3QBLEJwGtvsu1Nf2fjj5dPhJxTBzP5XdnYmDjmH9B1hQsX7aYBaJWqfkLp3KzCcDL7tGXRzkWHjc",
  "key2": "3wkvxFLhfLZfChGMEA1y9s4zn1z7roUQr2DkvQwyRUBHczB4Qjwsn1Jo2b8zYQHGDdcaDYGDo5pPj4GjW78ogyyg",
  "key3": "6615XZkqoAmFL1ju19AfrsUmx4qwDWyW6jmgxocWFReX3wSpXYJGzgdJzAhBJNbGShDHHhw8MSY1Sj2KoERUreYo",
  "key4": "5AXVyVjX7mVdvS2pRuekrcxyBf4FEa2bDPTCGR28T1yFKsVV8jx2FdgK5ukXS6nRQ7KmD63E7PcnX8ePjHqDBMiV",
  "key5": "K6Q7Ff1MzU8i9ynttRzeMU3qjViEEAvztg66iakuUKjxVrfCtXwTHMBqDM3xgwiAA1T6cvNaiDtzXN8nw61RsRT",
  "key6": "QK9fhUZHdnrMGpLwFp1koP7w6K1K8ntCXtCdSv3niERBLfuFPHTrdinNwsj4MoJHm78XzRGK9orM2Yr4eZN1zb5",
  "key7": "3ZMUQWDF24wXyKueUWwChYo6kqXvNe4PBrTuDE3yTrdWNa6UEKmJk22yHczmZLPB4mf6fwWJh8CSnspC83or58V8",
  "key8": "j7C13aebU9ms43Nsdykx2VARSaE7JzXCoKWJLnBSdaLLW6ZUe1grohETWQV9uCvxvryLxGhZmh6B6SdLUWkDiGn",
  "key9": "5g8ALhuqFSomSX2F7i4gk9LKpTYs2peoMQ5smU7ofg6Be8Di9wYdy748XxArbtkGHp86wNzvPATKpQ7H4ogdFM9y",
  "key10": "2RRDCjZSybwVRaanenD1HsLdE7ZpJtR1pPtQdYqA2dpf1Aym88JGvwwiPh3Yr6msmX79tWHasvhxu2aRy3bFHcQ3",
  "key11": "5j3HvC58kkCvQkjbGjPCmozWUnWaaNpuXn25Zhvdbr2DLf7MFXt7N7Ddr5hECQGcafTJPkD3P27csQdKKdcHzgYC",
  "key12": "54YyHedHq4jjPRj4K4L7CFFgbPzEvCxhuBj71szrjy7hBijRdroaB7p5FCyE9WbsyVvuQxb8udEFHTML4aah67x1",
  "key13": "3mHfnTfGwt9Np6oEqNnHhXCPsupHKvszeSK3KzJqvgFDok7iw4fBUEhSmxcezNmZ7aUYF4aZ2bazCZMXowpynaL6",
  "key14": "3LFT84LBxDWhCJtBuWYiZNqDtLEx2geKaDJy4eY2uVwV5Do7UThvefqkQwHMdRi5WcrD94gCSpuj2nmx9jxwfbbw",
  "key15": "3FyNZLRRi48qfsupUAWFuZeABPSm2mo2bgniyA4uLdTymsWJo85RGFNkB4BLNLddJ8yBCkL9Y6xu2jztv8rGqdLj",
  "key16": "5F1W4a7gLHD7VQz48FvmEP9mPYkCy5ucequyD4kdL7bZQhzGZCjcbHM7aHxZ9eu3YhL17uoNXZAVBjm3BdKribgX",
  "key17": "3Kjcsg4ZjTRj1Aw9CPAXWRufq1sWmwvfZQhBXmp1dGbq5GWMVkjqJJF7apr7KRMLbpyYwGm8Y8xoJjeR3z69MuGs",
  "key18": "58jCkp1G4KaCbME3BKxxiQVpp92sTWscxmF4rRFfvNrkx69rJKAs5SAAsCikEVdpJfEUuK661LZRmfGksPmwgo7b",
  "key19": "5yrxLSorX7FUS9UQRiGo2BKtTx51MPrum1tRaGVGt6ZYrnAU9RZopzZebFHmHwZsSpXoQ1X3Bi7SU9ZPCY5958Gv",
  "key20": "2zKXmuuPkYCqLiVuipBVSHjbtPVnFbQJVLDaNfwnofwj9c8curQjiKQVyoNJirnRpHotzNtHdV2EGW272WyymrG7",
  "key21": "58yzWYRrn5fDhjsoXbpfXX3Gj1jBEiBc8AG3kYXhYPN8Bb2j5eVGxJJSqiajfgmnzi8XKWqsdvG3TrCWnxPBzjj1",
  "key22": "S3QuqJzrtTq1CkDQd6QmYtc9vAY4o44LEwcrxfU1TG3iH6JUkphJAyEgx8xxeWjWcp8pEgtFwBZ3oSdUYVEUo1x",
  "key23": "36EQVCfGh9N15ejaWUVBWdqjsMREtGjavpxLMK9MS6DAeKHsaEQvrJ2yuERNJhkLMZY4NEBEyP5dguv3BsgzJQts",
  "key24": "4j9d37tcHz6jWs3q2foA1F5oCP4F9HWYpggXnHvETsK9sZP1N4vNMzQfxcJkqp9vhENRt5tJnn4fiQTpW2JdahDb",
  "key25": "3gfa63bUUWy99BM6YPfYcYYg3ofF29bDBVJSMH7W11repKNnNDmFQWs4wJLET3aWu9A7j3GqNrXdr5MWK9PZyxqt",
  "key26": "5WwuDrNDiqGPvHbAuFxfeFRpG3EBFu1kKGw6oCz4ekSt3DWuWkjDEkUrRPCxatbWQxn7nfPqqxqqEHcLXcdp5C9b",
  "key27": "LjQYNBd37Z7MP9dQBRCFMYxy2YhC5uXw3DpiULn2PnWKbaDvCXRCnHHtpsUWC58UQKQWNibAr4iM2iCLcyjcMtU",
  "key28": "25Yer8oc31RguT76tGh6TGeogp6khh7fxEz8psFHauivfvfswdPcmspKstcdgUhgQUy2bA9e8swtdpVmcdapJhcd",
  "key29": "4oSwmwrXS3oD5pQbVoNEnM3D2BvNKjBfsKsoJE11oXcXC3Y86uX9GWeNRssCDhQCQD8NHkVKzriRckGYWube2KqH",
  "key30": "5FE6wY4BS7dbbbUXPPU4E7Le6cfZDhSZYafjdukM36mbcYGJEUrvUSpsup218seUxMAu68MK89yzr8GVpnsXr6Mm",
  "key31": "2Q5vvjf6EiTLrET2L5kMbY5G1JzV9kH2THYwf7W9PjRE1hwnFwNiQw6Y1PBwCLLuPkKpeVHdd6UpGvkqoNZTfXW7",
  "key32": "2dAtdQB8UHLGTz49Mm9pfw7Q5azcLVgKC6z8QTUSgUS6Mqsg85vcP3UJP2JDSZWADSwJzwCHcwgjXVxyHXhR6q3M",
  "key33": "3CpiEu557zqa1oBRw2ftaNMj6FjuohXpRme1hNqHj7GvQzMtn3kpkzirh12zjQxUfJc8TLDv63cb31pTuCLZgBQk",
  "key34": "6oiJtaRCjfwB6YqmhX6BxYQMXNcGA5B99vZHqHnnT3t2sQyoBxnsj7jxgbjwVN47ndMix8KV978DXqY7NZ31NnG"
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
