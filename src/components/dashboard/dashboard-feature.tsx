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
    "iFZgGWsbEiUhHBd2T6ZH9C3JsDrtp9KeVBLwhHYRd3JE27JBCg4KBJZ9ELJipYeLbG3bvVMgDdN6GSkK3Hi9E6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fs3oNiRj3VnA9m5Kj1nh6LmcPTXaPpv4gGMv7Bb1GhThzJZ8uUaDs5PfQ1biXEHw1LrkARCRgsAL2wHy9a3agx2",
  "key1": "adju5jWTFz7PdW8kFn983GQ2tSCjTmavqtsANjQqLbVyXtoaVokztotkTTqvPB5SGe8ws3Q7eN1zWJgh13JpyDt",
  "key2": "4pxPVJnHb7Y6QP7pxCJHHQSm63QC2NkLTcge2RKGCQtB9KrfzyGHDreRR3jgMgdhiEjuw6McwhDVeg4GjuqD7xg4",
  "key3": "2p24Bft6BJ3jn3qNAS253kUriYqYYv7EXXpHE3eGfwMd7NTf33LFf4V3aaB5bRL7GmF29FkoDxhPgheaoGVL8oeY",
  "key4": "675FFpnKmpmS1MTGDo9F2GttFrQ7N4pqyr2ozALTAVU3BFiWbEBEMFXTFXASbt574pgF4XXoV1mrmc9EPS6GCPEu",
  "key5": "618ADU2PyoMAi7b3vCkVyB3NVC5Y81cs3pnnMY4vPZxLYLBdaNgcx22DBPJbQ8R6mBtwGsJPqf2Sd5ry5K7WZGRz",
  "key6": "2soHrNtVSdZxrgWEFneU65WjxBGmrYPCKZbF4J6YqU39PhhYwKaSnAeHAWmC96boY6BiBE9R5dnc2edvterhRq8e",
  "key7": "3RahoBc7YVXr6MqoFT6FUj46tGJqC5nuW3osT2WV3vFNmaZVciiUFtkeh4mvo2zkExpfx7NXth5NpGWJYM3ZyKDh",
  "key8": "3LPgSWbyGDKV3uNXHDJnG9T23E3pJ339xmpQvihqeyiPJLY3gBZtjc6dyizySZTK1ra1PHdFtwBv8PtwUa7anP1m",
  "key9": "46nxwEckxgbi8it5yNviHJvCQZnjEerG25nXG3TFCf7MvfQkPfKTGRDahUpg5aL4tTLsujNJTDMRwyxkEHbDpLN2",
  "key10": "jyTDFF6MfVZjG4LaAiTsAZXMsCAkwJyURQ78tfqAaWc3yWR7pNACtCyreuQNgjX6Eh1C4hFyKc62ZGnExhnX8Hu",
  "key11": "5pW5YSPRu9CFUGvvgaL91mpUTWAGYLodicN7FZqxAHbauoTJRieTbtCvvfduaXDd7rrpVKh6B3LwgZnq4nf1AVpL",
  "key12": "3JjDwrBnzPSceatWdkSRfGDARHna3dcv3mBB5zYXTwkbHv4aB3QJR1HDWfhYj8CsbzRBSfVYEcqXLEamLKz2fnwd",
  "key13": "zQtQn9VdmcBY4Xd8u6gX61SffRf4rQdWDhgQ9JAK7ZiAxoxK1pt6P3UP3FHr11qoWRjFcxok4MxnN1PTuuec26L",
  "key14": "DQgkSycwE8G87zUxtiBU36be1WtJYWucPhXSrUM7PEXgvfbGtNRM8AsJPSmPnWdhuE6UUg3o9hCcuPuwACwnbGD",
  "key15": "C2D7q4zmxeMNYEoJnVWXPqUo8ySGd895cXrrPq7vYYK9wWCCdwX4HCwsGCCmzqBye1DcmsUfaDHK3pNRwQkq3nm",
  "key16": "2eNieCRTxkYAwkPnyaKpnuQkRkgfnTgsCrnHt8HqBvJZHc9GfhNLmafeRkfabWBZGJyovsVfcnoa5R9ZdsEkuf5u",
  "key17": "256CefDadUEr8A52ysg9cBbdUVRu6g7KfV2aSzAseGrKCw6HUbQbv8cKAAvgU8hJkp3EFs7Uaw3W4xT16XEzCZkR",
  "key18": "3m62YSg1BuutsM1nQJQHAWEESYdDSM41SbW3uHcNmM8BNR8z627MheajNFt4V7xQFwzgXZdJK6yb86AsA5HKQW4F",
  "key19": "4ULNRKdRunbqQjsgQwmZUjHZV19zZMdQBjmYnGVGa41jnDzD5fLD1g7jyDHcC4KKvhnAe9q6dLexdXvaYf8KiNFp",
  "key20": "38NHYqKYt9WDEnDiWsXNJxrqyU76wki4oWtgS6uc7DLKySeickE7FFKPbUiX2utR6kSCMVaCGBzg2W8KVyqJtb5t",
  "key21": "3656DVs2R8kXSLisKFj1438mowNNNZga2Rr4s6893iLzKXMtEv6VHBc7kxB7j5NJQy7JqmKCVB5zMCTorCWMBunX",
  "key22": "4SwehkrseGVQTLzppWTTdbkyRnXe3hvoUUAPfKoUZqzJeokSvhWzUgu4KwRG7krVkkLwgZ9Q1KbPdrC7XNuUschq",
  "key23": "34JTb6W9doUovTnhNekCmTyMAGeXPzy8LJTM3auEZzosQdzyBctDBYRANY9rFo1hm4xaXYkHL2cDCrZXDu89NGCw",
  "key24": "mohxzKStKbXQgsv1NkJStvGXtfgNSJKgVcMbS6eEc8Nfdw25VKbuc71RXBE4HX9d7pS33JM3or11wUkUzDbUgLB",
  "key25": "2kuUCt3kPBFyX2F4mgSWym6X4kFcm99ieAoTvU6HKypjf1uzd4MrhFpkEX2WucPEV6soqVXST4FRsjLwGrwy2Lsk",
  "key26": "5UjzMcfvgZ67kUWRuKxKMMyi5zX9hGbKMe8J7wA3CTELFU1pk4j4FVrfCKVAiLu1JtmbadR9ZZcVfij3zuWHPio",
  "key27": "2e8fepb5MfDWSkCRHqh1oXVuT5wPESCAe4iGppE5zZypmZfZ9zwWz373nsS5XDd4qJj5WTqeQbe4nZykvay8H31L"
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
