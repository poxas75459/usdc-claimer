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
    "3tWEjgRbXZExbsoueAUbYn9J7vaVww52KGAuUw363f7uZRm6aFovEi8BMKqfqAZjfykZzQJdyC48Hp5NuZCReFX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FCd4k2Yx4SCVWU9xxD1zBk3hgzXoFNZcUXTru3ceNB6Li2Vzg73J1zYRoAGYSqcwuSYHr9XMgCZ57MZVzTjg4D",
  "key1": "2W4mrWqmEeF7tD2BZx5nw425cxNFDSFYUZbqp1CzVXTwYWrJEVRZHB4MRMbvQF7KKDXYmJYvQC9CYnQi78Wz1DFv",
  "key2": "2ccXGcPSzKr44FsUCMep3cNYupb7RTE8d9HDNbsWLX4Wh4414dLdkyDAd61wDLwW1sdcGXkkTodxgoUViE3gyBss",
  "key3": "hMAc2BijSGvG8NBf7w2qub4jjnRHpRHsjFYNufYzJrcX9rekfRtWz76CGvnp4W5Q183GSDXekHVWp2o6MHqB7Nw",
  "key4": "23QezRdPwt3p3E9SeLLhDwuyM7sYPYwJEGZDTURqEtrcn6G1dvrBDvsYBLa9W6qJV52rJT2dgB3NZ9NmbFMrMLat",
  "key5": "9ursbNGSu3913JNCkt54fjLTUYSWRHVg4fDVtDpZy6DCWL7BYqX4N8ZC92yErtnHpe3iC89YLw9Z1QBaBVyr39X",
  "key6": "45M9YWmPh8xoDcSbd77FNpM5wSMy4E1RFAgKwNBRjQgJ3irMp7LLYkmW4WQzqX5yst4wT6teMqUA8QzAoQRe7t9N",
  "key7": "58pG8ydJPL7UUit7bC1QvUEm6F6gFQC6hMR81AZ25hAUEEw4x8uQa7aFTMCgtHjtU6gJEbgeVtukKUxgQR3Fr9D6",
  "key8": "4c317rCmvF7nZGpvDnUHUbRGus64L3QxE57PY6LGZwRDJqHfT7vfzm2Tk66mgdt5WSmWVF1irEsG1ENL85bXAMch",
  "key9": "5imLJEEuEdEWXvPh4qTdsq8czkFu5gRj1bL3EyeQ7v1VZNVgpHk7tUeh4tGC5EBVjVzPLoQNWA3qrbG58igK2Y5S",
  "key10": "3tXheEhtSRqSNeNfZvcT3Q4StWzKSsxwzKQpFDjpcoNbUpCntYZW7tuQLNdNtPDtGbX3P2uQWTuwQBRyharWWB4Y",
  "key11": "4SnQyVq615J35qrsVTfRfJPRWZcQzzgRDQZnD7TkdqL9TB6aFJ6adqDJYLSFHwQfKJZz9XY49dAp9SmCTBJboVs6",
  "key12": "3GtqgnQ1aGjejiPg87DxegEF2Bg8JBcxtVY1f48hZnwbsESjFXyNV4G22UKRonWAqVGMmcoipUQSrrSAKeYzM2jh",
  "key13": "AyBi1DEdqwSN7AqxWxVUiion7GwcURASy1fcdx8NVguvFAFKP5UE692YobHBehWKncWtHPvfb89mvQMBjxjyHyN",
  "key14": "4BYqj2XSfJ4cDHzSZEw1cEk7kAEnvTCdBCo7oC66Ezs1pU8udBoep6afJf3Ldy7R4B5aTjmFNQDNZNNHoh2V8vdK",
  "key15": "4Mq2wmjga94kdRcqCQpY7erC5C4TVfCcifPf4UzRnuhwZMQhhABpwh4TSsMpcErTaayEYw9NR9KvEzpzzKhF4URB",
  "key16": "3wKNMeHUaMGntAZTTtrfYt2oVZpC8fgEspxRrrpm5zBQ254wswnSaM8MucWWp2AnDoV2Z1e9uaDcbif9FninR9zR",
  "key17": "52nTEoQvJMmQLKEkNWaop3dwfKShQwa2W5msoFjCWVijzjVFhZweZwJnQPdDLxWxQSzUY8eZdtAifnTReLwQ8xve",
  "key18": "5SbJEbwGRaz3Bwd6tw39rJfMh96TwKfRohHZD97h6XgMKMcqm5n8bArwYHMLY46j3aHgktLWxDzt3TcfVdtzuTn2",
  "key19": "44UAtvLNnJZF6GArk95quuYyd7mvNKncg7eqZ9GSBjfEqckWaSQRDjtcxUJqizqJ1rEZLXf7L1ye9cXxhfbwCH5d",
  "key20": "bBbnf6fmjuG64HGnPoqu3JSn8FL3LFphGCCfgyoZWvCBm3eicgqL5YbJHhsgKM1xkcqbCrzjXU5FfhwykCqRMmc",
  "key21": "Bs5WDFMH3AYwuqPM8vfe8G49dz4dtXNH11Tp48gSVcZiNFs5ccxN73oRViPpyoRStsnF2h7EHh3gyXUyikVn6r9",
  "key22": "5JCxd7S9VjNjzqbhHrm6W8Dnwy1Tiw5mCRKuKhATsRyVbcFeJnXnSXwQTqD5e3a2j5bDXfWbMjGoC5SD5DzCj1ML",
  "key23": "4rs1XDdfPuxcfnyrSKuiPr5VtVQTUqBW3jsBGA1rT8Nm7dbtaAV6ensWetyLB627t7DSYxuhnLznQhKm1mxLgLAE",
  "key24": "24qb1PsLES5PZnMDVg6KrWvZ1MrCx52EemynPmF3pFHHBv8w8B378xd7Qjsxyxv9fFqHmBfVUZZP82cUs7PYQHAT",
  "key25": "3WXYHkiwmCe5idQfof19zjV4xPCqAnn7XxpceqJaMusacsUuNVVH5Z76xguoETQWL26k2s75gmNBSMar8b7ky3si",
  "key26": "2gcUxKknJ7sYPRCwHh3RVd366p1ttXatEZzkHGNbdgcQsuiS6J9VsTG8ZeJ4AtYH3EkQT6UDseLQFmJAKDhL6TTz",
  "key27": "23zxjhhrCMCiSWdPzJ6jcXm2L6mk1R18VS2LuxWcjbXeCsbL8mGZ1cWRrYv6pDFAKRNmmSTuw8XhCBXtVSbKXh4E",
  "key28": "AVLXqE7Y9EEzmu4tP6L382qE7kPrqG9gZegnGT7LFLsA7rZKXYwVNSj2ARJVkQdysQnQzeXKNyUhWLyAMCgq79j",
  "key29": "5bL5KBtmhepAKdVYNXrGdMfYEb7pjecxFayNTqBu7qk1BWZLLoPV6Peqc6C7PYEPdThFiY81ZizTmiFmgvcJM6J6",
  "key30": "5YwRKTDGdwys5Z5fRPq4zMS72SJLaPSEFx4doTYFFNMUNRNoq3JLA8VstGHjz7NhtoSbWz1zwT3yjkTtyG9ZYUxo",
  "key31": "235cxTixdXY8M4hbaPiFKqERQFaiH4rHGzutJwzV9WBKdRAQYacuucsjJsZcNMMeGB2T79ur3YJFyWZtRFMsvUKE",
  "key32": "5EfgCap297Qm7aAXks6BdJ3XK2DbqyYyJFZzEnFcXUnSuaJ2yypeoVU5tFCjK64zXBj2FL3omNiY7Pk4QPbisJ1M",
  "key33": "S6yMRicvcjtiJFgsGnFk6me8BBFS68pDHMY7XkwPgMSeCXtH5dwh2LtVtJqoFsvvhipfUQ4PhUygG1Y7EvDuCA2",
  "key34": "62ii4bJGVyukqKdYmoZ3CL436PdAM2Zh3DDsG7k2y79tMVvhjw9DpDCirMcmDQN9ygxdRMyMd3CRKXQaxodA1gw5",
  "key35": "5TEDsjTWAuAUop8UJ8cTbH7ppNmjmMLNCFwzyY7VbUbQN2Mhembmf4GvQ9usnmdHUwxhWjHPfZQr6dN8N5GDkxyU",
  "key36": "5gq5Bg7KEHg4MwHL1RtGTZLt4DFrVrnkTP19tKuCDZGhaoUtmEcP18rWJxeTUtdzivewCPrA44TiCidvN84jiZ7v",
  "key37": "2YdVfk9chJBn5E7D4hXCa3Lc5gLQEiQLEKgK3TPpqapFGBawNG4UBqa5WTs9Sdxnko5NHw9Qu8jYVRCkEYWDYVwt",
  "key38": "5Pwi6bENVUD8VF6EbWZkknv3wK38PshXoaAZqc3AGWDe2TEPCMbYr4aGsMJuuxEFsDj5kAkgawgfeZJGsTGKddbK",
  "key39": "QkosWBQKrcLM5NuKwqzhhyxwbNpvAQwvb4Gug5NuV5SjavZ18VhXFQGpyXam4s1FA1oWnHvfb57TsdnktJJUYzZ",
  "key40": "38TX8uRif8DpuZBX67UUJWyCm9FNAUswBzVwvtF16rRtdxYk1ShNRYn1kNY9Yf6wEiHj24CXoDhpGSTZDDjHJh6k",
  "key41": "WkA4QJy99QgVnxiVs1owqa6a7uoJ8zFbL1DzpHKFWaj2zYC7XYCsPSpuBgKsDvhzQ8XiBmCSvVwHcMEFysuvbvL",
  "key42": "3g71ModQbwMJQpMvMRVET6PoFg6ygeQcfG9osrC8swMtZbmMAuQVYXcQDDvvKEQByGB9HX5PfEuKFQ7eyoyDPkep",
  "key43": "3AFfSfEU2fGMfZx9axkMgqF1taTUR3qmDouHGFXz8yFiXhh9RnM69c2PLuN6QKATP1RpLYjg6RiPboaJ9oczcvQV"
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
