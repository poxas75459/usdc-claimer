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
    "5bnYgcZpzVFbaE52gKeiMappVef4sxWRgBtiavoPnjiXXx8qLvoqVBHdKkkyTUXD9ZTC9Ui2opgvjAyaGw2Vipt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SP6dmQDG9Jk1BkJUuZUyoJPJr4xG2yQiiKXTZBoo1E3Uz5dV3NB42t4XySEDrs9YPG3Ms9H9DeRM8jp9HZgPgHE",
  "key1": "5DPtSfTZWnLZyTyzkLdNQqPKyQNKKqcYFKPGYKvQnU1Fzr35dJmTwbZKKufW31YuS9M14Asm8MWW12mM6TdnPCUg",
  "key2": "3oYZbZu6y7nxeZn2CgzcgHPiFcURwyMusw49k4nyV8uAtrLW3iVYth1TmQLEVrWDUaHwmKPAXAjQ8WAqToVRCH5L",
  "key3": "UWpPn8a8PQpsMsvdaomVjQ8MsoLKBCXJer1jwgH7siaCC5ao3AsnKGgo1zLy578LeSz8a2V5QsVUaBCPiHJPtRJ",
  "key4": "3Pdg6qqNYGsmFgPXeqgiJp6pJN4fdPVQ6h3Dx6bRKbWC8LcTuRJQNtHbEwLUBvM93KPzVMFyby5CmscR6k94DLDb",
  "key5": "2auf5cFzmVmwiwE5qAhkiY8yL8Gb3v6gx6oTxEY8D8cxFg7AeGPEhDHuhZS7YD5BzS21uy7rYby7FBxsAKEghp15",
  "key6": "66ekR5BWsy4myx1bkKfUnApC2uuz6nabAi1Kj4TW3NM9pCrT5hHjaQUu346vpqtnXcF1wnzeUrvbvHXjpQyBRDso",
  "key7": "2xLVfrma8tYQWH4AVYAweLZRtPTwrCTA3ZwZ3qwaEWdjTrXeZuqArv9dCGFwtX5fvQKm6k6ren92VEvVEJotz8DT",
  "key8": "3pcQXtuLBovBRbHNVBSmstxPp6TPebAoNWV9nUpBuNXQraqb7xLJhmacwC6FjXx3zq6zMnx45px8vJR8PtCfoAwG",
  "key9": "igcxLgGcrTQn34VvvoTogYhFnxotPSz46QTq8JUGMwks1q7xaCrNjHK1t4cA2ZNZ3BzHxZCw9UpH2ZK1bpCBSJF",
  "key10": "3mSQNGgsbMQ6ksGWu3XK2TkZ3ZqnnMMurRRjHs1pRUfQmb6vTvvnoJ7ADBTMfDeZZ5hrEC1NZgzhhPMx3D4AcXDw",
  "key11": "5hm32haxdpMHYbgcNi6zGWwg8424SzXzZQBtUz84jdPaFkSvHdtbS2YE5WBsvaWJqnAEXh9TfHPykAAWmWtNF3TN",
  "key12": "244d5LLvkXpi1mpoV3h3dECXng5a9sd9Hd6SiQENfmYBxaYzW3aYLK8GqUBQXrr7EYwp62iQwzpYVsvmqJiAEnYW",
  "key13": "62akBYEfGhkU3CrwMKhBcDLuYxazPH4ZdW85EM8Nr6c2qk2RfBKprSoitEGUK7uJiaULtftvh43W7vBWULoH98Zw",
  "key14": "2wPjKhpLBRCr4TXVWfXy3F2abVSr8KCyb2MDxZEzKzAdyqQvN7ugCdCqTpmSDbAnRi48mDoMCf2bUy2VuzbbLF5o",
  "key15": "3dtMdmYYwuGn5kgo9YktPLPYwdtrQJLLjDP2wVSsr2NuvgVM5FcALKMvER5bbPVU74XevosZKzcoxaYb1BnA8P2b",
  "key16": "sA2dyaxbQJKtWKHJgNufAW5aj2GgEKP9ahnWPW7pDnZtFSR2YEGxd4LpZXomVQSvpURCviBC9LFnwCrSmb541ga",
  "key17": "3HgW8iqpw5UiQeDnEoQZDcZFmze7HpSzRC4zFj1sFGvhrZtoYQXjJunWvLFbxuy7XKmGWQAhdJ8UumdnyiG1YeSM",
  "key18": "G54m19GJfAwxagVNqsepjfpfY74t4wJhjMWFoCh5jp68xCMLwvF3UHcqdtJwSfHxgPePdUFg8bixXdBx5DmsXP6",
  "key19": "2xoAVeTiQtswhVSkmQyKXL13Knbf7KjHDHY8xkR79bymMsx1DbUB1RMeMgP8ygpbzw3XC2RAYTyZkvsd4PPLbHuC",
  "key20": "4FRj12rXhaL4F1YrkKKHXpo7kMjSuMaYYscLkTxNQdgN9AEx3cUW1G3ur4ZYbpjikicpSzWuZzmDuEz4hdzGE5LX",
  "key21": "4sZHGnKeHZrskF5dQXmjeiUQBneQbHKhcFtzDCLKoTyx8fKZBwNPV23ZbUpP43NKRrSWfRQSsg8Snys2Kkkgc611",
  "key22": "38497DUNXtc8Zrqkc4VYBcTftDTCtEBXDrykYEnoBguoyoSJp3cY4KW9X3gsPD7PxW4d65VxSkd326pUTQBuuFw4",
  "key23": "wPjxTafeZcvzCD4a3WCJ2eXALqzWc9t4CSviz3KBwkAnhiEgpMFqf5mrJY2MmzQWStsL7gYDoSPgxUnxnuC2v1o",
  "key24": "2ncCPDf8G7EMd8x9pmosmD7RozoCHGMzyk6qv9vtDeUA2bRpxKWNp15KjhtMXbDsLFfWPyLr9Ex8e1f3uRQd5s9u",
  "key25": "65sQa9DPvK8P2CEGrG73Jbwy1nvPYsDmdBEx5ywrNkwncEqTz1LjhAA8CEMtnVe9TVEBzskScztYkC2Ui9jJiX86",
  "key26": "5AQiFAYB1r5ut3NUPaCPsnVhfLBzYBJ33sD9ambMyZ8ze7enWGoXA7QW4qiLBvEGdh6K6VPnVJziYTbw8Q8o9Tu2",
  "key27": "SXGu2XphXntmArN64UxKKcWYfymrGdm446AcGwVwABTxKys3jrg7C6i7HquTuZHQVnhWTU5LPFhiXFFB2DvsGzz",
  "key28": "4jSvV8ChQswxJ9CcDFnYyGdWC1nrvdQBY6A6QT5M3rDBSHryCkM7QboYeXZyrcqfqWF1QMac9wJA31Y3rrkcDTfi",
  "key29": "5RhxVKRYGzhZ5aStWsRuqL6RpxhtGXsKX1RbG9FKoHaCjWJ71M47uejX85dpiQkK3uhf6HACn3YoyVdbG4MMWbsJ",
  "key30": "2Cdw5KZdgvYXE9WputYk7gLEbM4yhQTa3r6KbGeUzxr3gainhdUj9YrBsNmA6J2hVh9yyv9ePmbxnJTvrAUFPTT4",
  "key31": "3zi1UuchrNdVjoauuc9d3yW7tz54R36NbuCv3reqC9Voe9yHsL6XyEdBgmw5A7cXzt3JMxvT8R1kCzkQngx9uTXi",
  "key32": "3q8Hd4RLGHyCGgfayuK6yP8YXpzd5CZ1fUTT5WKskfHomujESTZUZXRsNZ2SrC7UAs9JSJAEsFLmh2R6FgyWNxqC",
  "key33": "3tEEEJUigqRvyK9rasiaYaKanSnz3tFkHNkRmdrq4cxawPGyvuwJB5F49CrgmZ2M3jp6n6c1SDj3vpjofXjoQXtp",
  "key34": "5grtzMyodn7X1xiwoEeW644ne9h7EpiTKK6PFRZA8pM5TFVvd5VbKUf7qqhR2ZDpnAZE2zfZnEYJqVJvYyKWcc3s",
  "key35": "NcrayqFKiFg7fQAfP11R7N9ZPiMNSJRQLo8n2CLUqsJy9MMtfRKPu5ehJVMw9FG9N622QwhLFccZfUgAMc8GJ4K",
  "key36": "NQVZBPKpowNWrypjMwReBBYE33K8BQMah8hMUdNUk2Bi6Ca64aVp8Aa5swwh9wHr8ty9nxXxYqqwHyhDFSp7ymp",
  "key37": "WPMVAUNSc6frcQ3GAmP6MFNf6kRtjWK4tfZL977KSkXsumia5D6aBxht2RVk2zLSB2LvaQseyHrXzSh2KKvcDnj",
  "key38": "4rFqMWTrrbQUabGRoUpbDJycDDX8pNyWzNeWvU8cv7eENDJrPXWxShpajkqnmbGTcpw4SqA2KbqsLUrWbtThEe5L",
  "key39": "3gBKu1GTasfdv1woySP5ghLrvJiwmh7GS8KgfA2agGtPaAx5XXFXjmcJqsYdBCWw8VTp5p2r9NVgppyzFhzDb8SU",
  "key40": "LTerfxVBiHp9EtAvpVHntWkMdHBsr9MaDVFDf1mqd41bnzvzqSfcPpKw7pVXYM9XYKfCiUF1Ajfbczer378Ur1Z",
  "key41": "2N6LujEr9thysyRzMVPzdELMaU6XYupnYktCTwoVmdaxGHXQJx44UsvxgPeBHTX9G6dvb318xSwFzRJcWnrT6Zqr"
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
