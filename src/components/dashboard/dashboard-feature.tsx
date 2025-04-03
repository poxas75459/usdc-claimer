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
    "3TeAKz7ybdsWWzYF9XQKRCToZm7LSVKQ3nexPf1eMcMd1FyASbX5eZRUNWSckqdWLMG8mS5Zo5RrCL5k9GdguLQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eDrUWdYyAPupUhNtVDDJ39bK1uq3SzA7E831DTgJfdqoFr2UQjqD247Rm8m6SqtmxSpZhBiQEbuk4srdQm9EhD7",
  "key1": "3y7NpauCQY7iy2cVJPcg9h7FNPyuksFrFgZWMoRD2Kc3782z9zXJptfHwmnR3t2bVdYDWgJ4tE6J26kVcbTiX6bf",
  "key2": "4Svqtb59hxK1fYMp36BzrF3T24RuhJWr85YmBGJ55vKAXrj5m18owDVHq9jap5WVUZKx4FM7PFdUU5H8o166pmMM",
  "key3": "5rjazL1omaXQQJfSabwuno9K7eUAvqdsGUgt4c4km8QXpK25NLikfLb9RKH17sKEtVwuTsZcMbkgNFSCPkM66e2N",
  "key4": "2LUDbNbCznxVi8BCtFUjvnreeERTF7AGs9h5QN5wKADEqxU38Rru7UQ4N4QkwAXhYMQpqQE93XT1q1agYHpKppzq",
  "key5": "5w9TQVeS4eFpSFjkbBTt8KVfj2sZ6VYDXEpHeaJc5eeu76NCP7o6sawbq8P7RUwNU3EgxBfPTzM7PCp9iPhQdCWb",
  "key6": "VQwqAWUtstAt18y2JAM1UyT3SZdoomeUmWBtFbapexvmkcisTMDtckhf21w2qpc6AvW6JCSMQZNXUeLtJADjtyN",
  "key7": "3wScCg4PznTkyDmf31SB9j2eVJYNto7GAmXKvS896iLBduRywET9YkRw6dWr5C9P2AsPawRzRZe51pBJ7ftDRAw3",
  "key8": "3SQbrEZ6jtgmS9g2rPRUaidyWyAWP1KHxPC5KX9zEd13HLjJKveBNiodcoEkXR8LFRn4jxZK7B3VG9KFGfz377kH",
  "key9": "4k5EceYMm9SN8J1fFpoDnvKry1Nv8WBaiijybLCJ6fKQb7Kx9aeFxAw4TyMyrGKtKFLsPVMMwQiAsvFBjAa4Mr4d",
  "key10": "5BHJsG57ayr9oRjiRPmcUQEcWGZdcQAPPRkurmmUmqJJsAGvgfm7F9x3CimjPPBZBeRLisNWnLQa5edS6vLNQf5J",
  "key11": "2dWqwqEVVDu6ceKRr38DybjtR3PRX9xicSYsJ3DePDqKoHt2LkpveCU1TK1gPocn7Uae7cJ335feoP4Fnby1Q7R1",
  "key12": "3UmQrQG4nAoyqLoPkXDGXiQoocxxQBj9Y2CyQi4v34CtaduvQGKAMQPQAJ39oXcaenaMZ5bTP3hVsJS8s7Et9AjP",
  "key13": "4UGymiHLUqrf6NPkJRf8F68YS6XA9Q2xdHBC3FMBqGE5c7E1Ny3tQWmjC4Q7FB91xV8Tah1xDtvR563dWCTG2kR4",
  "key14": "CaL2FqVtqLyVrYKnrWFRZase6epVNj6LpVU6GVUrtxzjapnEXyQfoAG1w3MyanRXEKpLUpX5Mt4eVJ49HDxyqu4",
  "key15": "5c6XpHToCrzjJU2e9xAywp72o9fb5Gqu7aLnvdrmJKKVR4bhKa8HhMmW8eM85JvX7AhxzjXdLFTabZmN5ah31yfc",
  "key16": "5Tx1NLjgqw6RLkhHJb7pxBnC8GgGte7XwjjRKWdG3nC1FY1i2fEexiaqjDmYMGeMAjdqwoZCt4YJRZu2MjZdk8Gd",
  "key17": "52o6MjkMH54r2V9porigXACR7xWWU1kJswSLQztTb1FCcFMzWY9Yg7CGET8yoCa78X8P5fHVB37HtGL86Y4Uasr6",
  "key18": "2qetURFiZmArN5pjhjqryQDiojJQSTJaivJf8tEnhhk7FXVRhkotXxHn47odEa2yz7SZnseywmmc4ApqUahmAAJo",
  "key19": "293bbgtzeEBQekXCCQgSYbaiZnKJBSUUwR8ZoM29JDH9zwn8atzQ1kVCpxMUwVTV21JLhQzZSGDNwVksrqoh1HRH",
  "key20": "2TCVGoJ1d4LQqnFnwck8ZMjR61SPAGZPUfeYhkyjEtXEt3Ez5uaiwbVUzmyvQdyxNTc5UngLMVUxcz4w1arFAEs",
  "key21": "2eyCLWudF9o88i4ExqVdWMdPimnuHModNdgbXfxkXo3GhUfLDhcL7qKgWLGB6Rnk9sz8sJH9GN1KZMFSqhr5t4Aa",
  "key22": "2GDLK28d4sdP3hsUmKPG5zPAQpUv4L2LqbQzCyav5nipugEMofghif4wE33oHZcZ2u3PNhjeNKfwykerV5YEPsLE",
  "key23": "5Y9BZB2JhNHs2Pb1ZVke7UpGL8XTSQkQHJgabV3TVo13gAqogzhCH4HCY4VJhh9rHT8NyCtzEiKiB3NkprxZc6zC",
  "key24": "5LV82D17L47kgyXyRCTX3zvvLUF6eJuBrKvkebmagXArBwbnDm5n44NzRX2c7bPCWq4J3k6KC6FDLNBhnDWvV16e",
  "key25": "3ATAXziW7aDNkF76gP4kc6B2LNvHenRkLtx8rnCqfHHhYkdgg2UaqZHXUSYxdLzwmkLe2ZWqLBPCSVQQPweeBxxg",
  "key26": "5qBp5gEAHJfpyBvcsDcyyzwycMM7uvjsapT5BKx34RXxtVRWsPoVg2k6BTXaKCmcpiH7uSkaEpUskBTC3qgjR7RP",
  "key27": "CbWgyhfxYM54Mnxy3fDfNpFQBRHjxdZVhrsSPpPYRfT8s4542sazF32wyjJQB3e8YadM6ZBjzUJU8m1MqsmshN4",
  "key28": "jmoWpHZeUPmpeea1gARpok3TuTNLuuC7QPwxHj7DdA2a4w2kUmaUSu99iyMs9yCsHjcmxF5opefixaZxE8gjgrs",
  "key29": "eEfFjyAo4J9GhSDRwvqVNyQ5c2P23U9VKipZs14iYJgKXnbvVBFqCgYd4HNsmjseZ9DfFBoPo2DFbUwd1aGTk9Q",
  "key30": "2JNjxdP88eTTf6W1SHW2SoTLePMp2TxtnEQ3z4iigRUX7xSBguPBWLKfjTNvJ71EFqRJtJtXys1kYSTygzbZMZTF",
  "key31": "26o4661oqvBQN4kQwQbovkwFzoTormrnJX1zkCjGs1iuMXXNW4dsakMY7SoFKtZ3x44LW8dNztpSLMVS7YhbT1j1",
  "key32": "55H7SqxWicTnjFMxesx5UN3i3RtCszFpyyrESDtHAFpPqtXtgC6p5zAawB5vMRHKTZKfv5thtW5aHjUbiyYjKPiv",
  "key33": "29WeQyfDAQMAn2ASxGxXEnPP4xz1Gaat3S97cgvCJZCBv6oYaYRHVVARoGFjiy9TA4NfumC42y1tkg74ZXHo5jW5",
  "key34": "23zYNbqPVV5yFyBo93iPHZ5EBj3A5HqWtxSJeojrHEqvUobxa5vKs3pzNM7kbBqfEFx2C7Dk55pvRCJGCaiKfadV",
  "key35": "5cEUmAErzo7wnaTj7rRb2bXdWnYTdyKwRv2QACjMWSZzj5PEhBYaFExZnmgATbBgMQbpJQxpfo2cpihhZ44UqZhP",
  "key36": "np3N2RkM5yLVGhgs66gzi55i5nS8tPVurgzc3xzMmVrSQD2p67WhNvM6s8DYqjfmeYHPN72hBzMwqBMRASvbXpt",
  "key37": "42PyXBH3MhE6ioxoqXz3ntxQ7yhKX8FMGGRDLU6zoUgA86k4DUQNyKcWtMh8LjKCmYN6fNBWjaBMstfYKZupsN2T",
  "key38": "3KNNWfz6wQcfC1y6EDV8zWmwxyA1TJZRFFJJP8GQgE9zhSv6vKCA2vFhwZBZ9xbWb65D1sn5aqR5Z6deXfcMNwGU",
  "key39": "64dQmXuiCXTRgNnTZsTQWFFsZFu8rupGDxuzEhHdWUZbyYVUbaw1XYsZUDcDBa45HN5EuNnGTjk56p3Bmc5F7GTk"
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
