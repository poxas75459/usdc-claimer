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
    "3Yc16QMdwS1ziWHVY6Zox8XhGqxymVeq4kYMSKEWXgE4uSDHseCHwJpFJSNBEkjK4sWvo9bmRYDaCdassEvrS9KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEULv2RNnak8TuvS6v1TL9qF2aUdJHMyeXemnF1PeE51GB58c9M2VPWCcq1PPbgTEBxfj2jDPuEeeqRaBsoUmQ3",
  "key1": "41GC2KzNaWkAqNWVCkFT3gUkC77anaDRK2EeRNXrwnsbRXr7VhiZ7wobqZDPjP37RGc61vYpdCqUrQmnS1HjGTNh",
  "key2": "BHtydqrVYZn2Ar2GX3Tvh5NiDSNoHuWMeRUDKoZWwdiUVAkXRzqThYa7R4nFKfZ4HSLtFLqSqR4jBfDVNDh8CzJ",
  "key3": "AckJeBJ25a9p31dq1yvtT4J9Z8Ht3vPUDT761w21unMdW2uFUetyjPVGU5jUiSkV3fwUnuejhQeBeUxreJsQMCL",
  "key4": "2CTpmZjnG8J3k6FbposoYRzNZnYRxQfMvK3HuMMSCf4zQpsLNdf4Vt7Zh4mU8EhJCd9mqgqZJPMfT5K5ucGquKib",
  "key5": "4NtDsygSyuMTK5XnkzDDa1NhgBdB8JaausGk5gjtz8FArksWoaWWacR6pKLCXLCPNb3Tx1KgjMGJR9jRSyBU38f6",
  "key6": "46JXzN4kA7usy1CAf2BKk9wYBrHENs7jiy6XUK8kcUPMbrrTAutBonGc2X3pkzHavZ3QK12zpWfuzr2WfWSYyfi",
  "key7": "5JXvs7ZvMdteKoRGSSfFw9cN8vNdxBiQ4Sm1o7wsxHKe6NpBLk8k7AMxUjajxhxM8jFbzU3aUD5QNdrob78NTNnb",
  "key8": "XcAQ4jHdqng37NUNeEFjWcWRf54WYb92sSnpZrqG5tR1aX5QL3YNSgHRd1eYVFgTQCguhZPZreu1NgXipBf28C9",
  "key9": "5yBfuzvsNyMFF891aexdkcjsqsNFojqBt69aZttYqTV6dqdQvBG4LVQidNSoFPQn8B2tfghdHNNqRKU4Ay9TouP7",
  "key10": "5w2PK8gEQj7X1FUhZXrnBfLS1MqN5EMkAN1cqgaoGgCrmjTa1mKpUrJCfZ8K2wr2KD4MmtbMXCQRMHA6yRgvMX9K",
  "key11": "vAMiapJKSByZ4URfLgdfft1wxmQ3DgNqAebsNoQ9Sh3unRb8PizNbWJVGWqzdvShbnMWMj5R9HdgJBnCGxV7iSz",
  "key12": "5hv2D2NAW3bA4t8WfQhHTEbGN9tK4Jj7KbKfigD3Nv9a4ELsmsfgKKBbMdjK772is9qpauioj15PZRgBuvaasEPv",
  "key13": "4d6SgGCZ1Gi9Y3GVgTgpxNKu1WwzpLq1Smog2JXnZGdzN9CNuE9UBSW2YDhoteEQG7NyjUFRstHhKAUiEzEWcnxn",
  "key14": "3j9x1dZNdiNvWL9pyy8AN9eFurFSonAbQ2k62HrpocXMfTW1QUHp2PrSZtVky7ZybrvjBi8rtu9iEx3YBuESGBVN",
  "key15": "4CVgCXPP4jfca5AyWoA5G8Zjk8azAomeuZfDMyMAQ5W5KajW87mQgLCik7n48jpqLvju2Cz6ZkGW6vZXbNnGesDi",
  "key16": "3YDBhRYcYwWNBrZcnLrRa1NWaBRt46Jjh3z2ewqX3yBj7vcRgv6hiPehfoeaM9FUdApqVHietEyd6Cgzh7BPmHcn",
  "key17": "3w3PTwXgLG9LuYcGC873ij9TW2ur54bhb43kzMm1uokzAy85YBguugcgUQ6VcGqd6c3bGq1feXaejVvhkjUH65GF",
  "key18": "2VSJsXDT8GB9KyWX1z6ySq5f29juBUiEM3698FnhmBKLE2DD5ZCXhX6WDAoUrBjdbE2MZuncFsWBCkFhfQ5qWz3M",
  "key19": "3qUCTJuqqc5fDfoeyVytdkNBKiAWFy54jKY3Y9HzKN55GgyEdXcN5wQys61GkjRSwfNvsai9MYmp8A7YBeDS4XBz",
  "key20": "56KUNxpXkWcGAauhzKPQD9L9W1G2Zb11ooEH3AvFYbGrd5eKMijJeHiHmZSSDhK5ivodaWruQWz8YAJ7wFDKD9DB",
  "key21": "4TX2i1vnR5HMee8fDGWcrcF8zA3cdT2FrL9kHkxwJjMENkXKAtYmTkQgZktQe3jf22uSPzdew9mqW1vcxnoh7GKz",
  "key22": "JW787mkgbroyueSU1WPPaPPJ9o5FwP5Fa4VHqXqrGdYp3h55acm3jW9Z4Dqus2aiCkA9uWB2RVuhHFn7dqdbeKP",
  "key23": "7SZpLqHpMJ2kEunBw5PayCUHnPoMvTKqDNNb4ns1HGV56GABP1npxxWKZCi1gANQmojzvXgPunYmQwHQoCEh7cW",
  "key24": "2Tuc9vWsVg4Uw83tFYAeuLxzhgRTx6SiY7KsGenFPQd1gDxQNtEBhuyj3RAZWAhauDHvFpzj8Zod7F5v6VcURydP",
  "key25": "2jHaekb8afahRD5hvxRAw8AA3o898jUW5Gf6LfZ5MNmNqY6d3288WP4BPwVTZDpj3zLD8KicAUxv2LTqRdNawiZP",
  "key26": "4Ufwqcf77ufWZff9rbzZDp2Hn84Cygx1nfD9LM4r91hqSCx7nFK2X1Nu51gjjSXvw6YKiA3dXAQ29EQPvSNdKsRp",
  "key27": "2MEagv63qb7S8BZYWq5hPYtoJLY6wVnJcXwvPLzUvtqAswZGAFr4C6WUw6jiHirVe3Vh6e4GoKr4ucEbkt6jomoL",
  "key28": "25EkLHbdzybjHBTwnMpmbyuFs2VYt33r2jjgx4shEHMbMPQCR5HUvjb1sceviBAxVbC3d99LQoastiZFU7MALqPP",
  "key29": "4HKVAQ35kpiPjHQxG5UX8dvCQKiCmo3UR1DH9U2HUbeHnzoXK33kubvtiY8UHd7L5gKdYbNAKBFhQtMNFkQADMeW",
  "key30": "5AUHrdm5FaxpxYPWE6axEEdBGnFm3EcyvZ4wXe1cVim6Wec8xDpmHp58E3U561Vpa8HXBa9Nhgh43hSjUi9zTsiK",
  "key31": "bTYM6fwnGNWGuJKxB5ZUYRo9zAb5zECeP9dZX7T2d7DidvVPcgRDRCqXbhZmhVK3VJbuBwAgrGYvYD5HTp1NRPX",
  "key32": "2QuA4Qy4AvHRCwJ3Pv45zWcYRiggSKUVk2c4FZgPiebApxkFHcAzmcGA3mXPnAWJEEMrJrhQs9gWvHGma7i6tiDv",
  "key33": "4AXDFzLFS2GzDo29PdL1xdw4x4p7zmjQkNh5QbEqAriJWto2zrHbj7sMNcnBJAhiwrq3okJe15WNMS3VUF7SWfjS",
  "key34": "4C1WN9rkCu1NK25pvVMMXkWbXKfUm6HTjheMjqqTyJQjwJuwkNT6urystusyktv8XMrJ5R8YguES9NjQCGMz8Mxs",
  "key35": "2nZpDEoGKs9X9omEbkAKrvB7HDGQ5U2gSzAgxSQjr4R4oGGRvhgvsaTsn4dD4dUK74BEgsRFsBjo22VwLwwpCUoG",
  "key36": "2SwoDRW85HFtX441Duju3BSYqLHoYeNoW5NnZuZjndC8W5NV3CVCp8zD74Zx7cnpDiQR6uUQ49sw81qZGARtUWvU",
  "key37": "8Kp6hQVbHMwPUvU3Us1XukrDxGZC7hKBdbyRjCKG1fxZ742wpsx3dyVW4huXPJvdpSBdujnKxJznGbNnB1kMA4Q",
  "key38": "2efL4pWGu7No5RHpxhKB3JEd4nBseYsfJkvwtFsqUt76EBQ4QsFPjR6gzwxnM8nb1whoMR3fqbFLNY4H8AkBt5kj",
  "key39": "3722cJbftq5xfChG58EgXbsbViNEfyi1CFkFE5ZmvACL9ZLU76ZPg18NicQUvoUpCdTuh9UEAuFpkcGSBJf3GqwV",
  "key40": "AtdPQycpLachJVvFqs595hXd1yDzmM4zjHwSoksMGma5R3kZM9TV7dLZiPc4MpK1RY7sD3RPmMeCYntfafRptJj",
  "key41": "4fENEGXdfzvsHa8qswAHuQuJf7UjmycGnrkPv8k9MJRQpoujKqiUWcMguXtWxPBzbxEGUXChXksDKxpQNzSawWmT"
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
