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
    "4xmb2rBa6nBvHJ9XTzUw9uD8Hd1Nd2tWddRB1dgPnTptz49usvxHST5SGFHAZ2v1DY6GogHzdZjD2MfQ5kNNn6k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bAzGhUiP8B2mLpSeVaP7JMUTiNxyZE4PvderuTDe77Fn4nDmLTHH6M65jyaKbz4jSV5Zwer38YUSf9FXBqQFGSf",
  "key1": "2w7eVkdp2TeWHGXyNmyBhXnjWBmkD1dtfTvuVkMhJSghWG6uQQ4JaKbhCS3xPuwfsJkMJVBPf9MZsLZY342b9t2d",
  "key2": "wZm4rTzG6FUxoP3NZNGTGvoQiMk3LoktcTcpdwH4GuKYnoaXHSQB23NREHWs2hUUTDwRnZQwa7JNLxNkMLi1q74",
  "key3": "3M22FgugCBrHJxbhN2SBBTvZZrzmyZGxroV8hJ71HBCbXF7JtxHZuK1wvvwGG1dPPcti4nBFLF5J9t4GP5Jth2pJ",
  "key4": "63tzspkLsKck2iD7pHULCjN4sU5ime1anX9s2TqfDiLGYRVdgjbGMUTEPtNp14Pr2K9m7M6BdamTELLY9skhSRFj",
  "key5": "3fzo5ZxJ9GVVGbUqA5uUz8mY11MCeZHm6EdpSiv39ev4dU1RyBRQvGzgLdKTQaHzC9t18Faf8Q7ZVVCFGDsGKNSg",
  "key6": "568A1bLWrvEG1n92tt7vVhM4To8cfC5nPzFbJsrqD4Yez2wbW3bpvqBgbFP98z2Ft39B5z6inUwAUjAeUz7wPcAV",
  "key7": "4peTPyjjWbLy2vXHtnPFAxzF9MULn91hxLyWc1N5Jv4whogLMhYsrWjAn1sPnbeQUaJLbJzkve4Y449jj7h1KkRC",
  "key8": "59jUqZyjmw8ejxJg1a8apjcpcyXU6axJXWrGCKBvwsDhVYyzWvQzzcGTDXiD2cBF2NTV5NskfKnVRJ3Gz2YiqxZw",
  "key9": "KoxqxDCH8G5cgUbdi4qxCw5yJwUtQnJftYsXkt6vgzSWCMRcNvjyepFxDGBWV8wGEiRCpZUYj7XHHmHrP64KNom",
  "key10": "2jGkyrFnTKPVQvdXKkCT6eKFR6WP3dmJ49agCbJ1kabFUX36NRV4GeuQeeD78MKAqoRooAvbMvLCV7Xc1Y5NGtsq",
  "key11": "4ELnBVPqpbPbAersztFnCymMWZzARBTb8FvYytR1BbpBc9Jxxyqhyv9qg2P3ErbzQGQqZb8Adace2RSxZXaWedD",
  "key12": "YHdXsZYv1EXbPryVReTj1dtErZN5Bc5s7QAvEsD2BTGWa6KWVdfYoDzGLFy2izNqSyGr9D6kMTK5FwGG2JeSwLg",
  "key13": "52PS9MCz1TXu3VqexukJUwPdtRLKXdYPnzc4STMGVrTdCodTw9ES2hKG7tkDfu3X3tRRsuWVVYxf3YebwvSCMjU8",
  "key14": "x5zrhAENFVgGip7Mb18x1X2cuXrNpJXRNHpbL2t91pQJq92Hddir2Bb5SpRxBxwAsVka2RvQj6MVwqMa4SWTzoC",
  "key15": "5HwYCGhgdBYvGeuyLGsVgAt9UsGDiKYZKNMaMKweAdueRjuyrJk2GTAnTAPq2ERshwEW1DFhBGrSrTRzzRRN675h",
  "key16": "FBaAutcLk7fe4vDvHRvDHjyKNyJqaZ9uthN3UoMQjTCziS6t7QU64ivtSq8hS2twMSiaSFSx92G6B5e4iooH46w",
  "key17": "51DkDxhzX1zwufe4AV7cDfdSE1obLwqK6srqM88Qk3mHKxxURukBN8HYsx6EvsK8wYBu8D8mj4XFQRMWnNzX3ktx",
  "key18": "4HSL5h66a9E7yLceKWpW6x5BMUPxzjTjutGTBRw7jbkt6Fb7qfu3Xupo1S7oDuUhPEr2eSfotrGHR5PWq9fao2av",
  "key19": "4hSDmdgEq8Mz7up6RfHa8jfTqnTvsLTWxQ1tbndooEMHwqGFKXQtWPXJu3mREpczmxLxecymUv3yWGJ4oxDQseyU",
  "key20": "Gt6tgjjCwe4jrpgShV1ZdEq137EL8KL3wNBsCSFMKPNYr4mMZH7LePoeNCHYEjnmemhyGQUggztqiYyPCBgaZWa",
  "key21": "5MTjDwLiKXx3AR6SNZcDAWz2fgeWLAhcqab5YnpUcdvMfXTEeZwKQH5tLsP4ZTLJz6ryBimZjzTxhDdX46EEVJnj",
  "key22": "3CA11EqvhzXXGw3Tpa65jSfkDGrouhQVJJNmgEQTGWDooRywJNLUsDDEiuEhQLUffgTRHh97gZUHcuD4QSepR1zc",
  "key23": "2RzHmVtKq7sJ6gvS6KjUB1Av4j3oHv8HUtG94uQb9oF7RZ7dKcPzSGiT1MbFG2UXPje53i8qrRECruasL5EyGmuT",
  "key24": "2WCXeZ1XmMUFGU5D1PUkpdYwnPUHW5j15GBZpLhpEvfrmePVb7mQLsNgdvjNqtKxFXZYn83GC9jumuRMmVczuCD8",
  "key25": "2aTKo4nQ4BuQYzstEZWzsqX8UQEcW3WibGV3KTN2kFD2d7taKwNPdbnRvnRCYjsykLkT6q8NPcSgLhkNoz1dw7k8",
  "key26": "4bDGEsbNvEsd1KAK7fyNwFZrWu7fgkFNFa74CW1hQxELkLTcNCsiWzk3H6JvhQ6AoZy92mV98UYdDfPkmYt9V8ee",
  "key27": "wwugJXXfph3uoYfGhkf795AJmcRaMDb614f63UFPkJCN239aSi88z972Y1wK24jmsP4k2r3f54PL48hhYMjN71Q",
  "key28": "5fYABtPM6vGEsR1sP1PrEhhGPi1Ent5eJ6jybPZuXuqnewXV5uS6td7THRusGQXGARrkaJtUpU7qjr4DBJxPpCe5",
  "key29": "5y6ywos6zeueSbwvHdTfJFZYWoY3XqUiq1vKMJQEARhSQLoWn2upkCYyGgaNeiLea7cHeVgen5hn8xhWomgpPTa",
  "key30": "37JEVLBgbsth2oNJrfQSsoxJwrbkcY4En35xMqzWGc4upxes9Wyx7L8PPFgkhuQXtcZPAACWZ5Kb81hW2kk9i4Mn",
  "key31": "5TLoy8cQdtekxQDMNNEmsf7iDxc6u3T1sWdyHW9A4ikhWmHD6YD72i7nrWWS5W6TjcZvN5AR7gBekLAUu4qvrk5U",
  "key32": "4Q23mtDJowgHZGwaUwscXvDX2kUw3cfuwtdgbLupt7Abp7mCuLDTvy3cXWLTcLHa9EWvV4D9XHKSeCKYGGwCn836"
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
