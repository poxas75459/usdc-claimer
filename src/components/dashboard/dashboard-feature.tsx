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
    "obFvtBRjUtQQGVV9N6HrnYHyM5xBK6An5xMeE1LrUm59gdEQSCJrSdYSoQzVkY99JvzL3MpLrZjew8w1u19xaAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hP9EjZSssWEmXfe3NSxnJzpxS1t6AYSigYftaCVXFjtjfihQ8wg9iKRgKxP5KwEnN6447Atvg3q9tXnXneybmYd",
  "key1": "2VTTsUw6TQJYfhrayUpEq4crigsN4QtbK7ZbSep573KMw9EpvidvMopYJZPZoLBwrzN8anSk7hSKnDVkjXnNTmzk",
  "key2": "2aeUpQjZvyqJG7JEzFATQZ3fjQ2xFMwZXrwAB1KfKN66xNaEE7BSssNo9FEHVA1WAbdLastmJ7nzzQthZPPQq5LD",
  "key3": "4LGupf4nGdPLTnuuFF8i9ALSkjJ3KZSLc98iAdzN9JBhBs2DtLmojsSza76roqPg7HzDWarBxDyr9CX9rz5Bewas",
  "key4": "4pJzSJQ6upExoea9VMaDCECp8xmKmKfu1LUC2mh37xxudk4GuUTbeKvkjWA5h5BQCDZ2Jew1GombTefGMyCm9AV8",
  "key5": "4GNpjDLD2HwxLJCgzTFghbwqU99rdBHJJCaQnSGk7ZPrfFxTBfXgBfmKA1UUMfRzURfqyJs1gYpKZBcezkugXsHu",
  "key6": "56TkA8egKVa6HTSYLTwLCjU46Sx1Ljuygb9kCkT8b2UDcMxBH4Lahp7tk34Ce2WaRCLY8bc2wU7d3v6k6znJaWSS",
  "key7": "3YT9Mfr7fizjGAqiipL2FYvgVVo66u9v7oeWP2ouYqeuNNfvfj4E2zYwEZNCmBY1tjZK2VXYaKRa4bmaFjaLfcpK",
  "key8": "2HCCuhnWxQwv787ZF73HGqq9kd7ZfDYBVUvcTcx35escLmku6o8cPtWvRMyto6W9ppUf25QyVvq5HFD8vHJSnQkm",
  "key9": "3fUHsEAC9FgJ2rLDtZDw56AxSkXArha26VxJ7NN9fsyySSoWmdM7nb5GbxXVXyZtpfnJitQwAFh5kuAwXxWEJGif",
  "key10": "2r3RtQPX3z3YsZmaLVDaK79MX9UoN5Zy3Fsu9Q4E2xmbXNcYjnrJrUV1AE7k2ab1vtcN4xCmj3mbkxkzRkDKzNFx",
  "key11": "kZ58C4HXe9TZn82Gwu1vvpgAkqZspZbCjWFFpwVvW8Qtr8UT7Xb6CqELujArmpZPTuPJSCYPRiABPzyrEXCUPqP",
  "key12": "AvGvBm4nUYYtiqQvcnmbSQ3ZkEuVUPhutCKxFHREJoF3x84V7vyTwKr77jALKk3tLz17fYTCJhZmV5JGtjmMtVY",
  "key13": "5yeDKCmwMWsyAEBuPBE6svs6hsWehsUsHKu9d2ae5b4x3MBXApLkdLfEuuDXFCFApq8CBpVgQeNNjQb9T2bTpuzH",
  "key14": "2ie3TKwGW96ibHvmMcMH1Zgeajorkr3oW1JfT1Myr8uk1MaJUdKkBfbLDB1N9Xo1jLQdLEjXCiTt7DbKEfuw3Tzq",
  "key15": "4qEXUnrtDMV1AK3mKU2voYq8DdF8FzdWgAGZy5nwTadqnwCDJyva2bXyuWL7nhyoAQ9MRR72RwAhcQmLMD4sz5VD",
  "key16": "3iLWcFLBXdsPMsSfNBqb2wsTS3txPGXePRoraXRTjC6C3EjPbYHtP3aHopZATMCHCwvw2p2Xsm85RJC452EMB5Vi",
  "key17": "67o4u8N1XRPiUZfwfUSjhTqbpuQUJi4Y4DiBQ6c8ndMR5ChTKJFUpiESXwdxyuGHByvFB7shzhfFyf44eoeGz9aW",
  "key18": "2zsBnCxKmT8Am5BzPUyi6fpiryr6q9ZGrJdSxY5fT8j6N1yZ2brujR6witYC2wYgWR2WZMYNCMxjT7XgGcaiYRg5",
  "key19": "5KrcAbBTRaHFUCqKMcMi5Qe1w1rfKvMcM5TQhxDRuzKfUnkLkuYKW3fugiKrhJCV3YP13TM6ML4ozEjpy4giHNG5",
  "key20": "29cNwNyJkaTkTUdFJ5ku8GhVvqRxUjwrECCbyu9oW2dvAmzKqGyWqvyoLiEJj21zEJAmpiQJiUhwHCiHgEsoYymx",
  "key21": "5cHzk6G5GovkJzkwUA3kb6sYzidfB651cg4s3MFohReiniLFJ3FajifNv8Z9e1JunhR8xaask4yDWA6Kj6yBHLUx",
  "key22": "2gwero99zzDHyneafx8C6KwR5rh6QM87B2dqZvyUXfptoFQCR9nqCuBqm6f3TwtAAmCLaCsnPmoBEkTDkvdu3g3m",
  "key23": "5FWkyN9e2HutTz7uX8HxXLf32vKsLDwRp8EuD3a9EAtkVHbA41u9fiutAhY1woYMupG2u2aadNhM61rp8DaktiRB",
  "key24": "4RXuJpDjb6pPeqcrLCmqVsUMD341isM23Y5ASASKCYAVPU4g6AM8MLUB5QHMur367nKJhH8fLbeRnz97HwmZ8cNb",
  "key25": "46gLMWoaGz2nuuJwAfAkutBKpfmsr7MfZ4FZdkUgXRJizLrw22iC5C4ZJtaiU2f9VdjZATVJY1FEJDD6F8XFPDiB",
  "key26": "5FETYHxdrpAugEsaXgdL4rNt4cNXJ6CtZLNbxr2enY8CJ95FHNrwkRpq4Z6dZE8byeSFvXAbamStcEfatBbZNJpj",
  "key27": "5vZya7BDBfyJJTUd9QgvBRw94apj9kRmHRcqUA7ExykwATitkuhywGUGULoYx23TRE78FXqY7hajZXgzgkEe37cL",
  "key28": "4wdRMdnxv8qY3L45EfjtUcxthLuV3ADcwoz1iAWBT6WUgTyQCNHF4Jopt6UTnYKmB2BsAim1L1N9DBs21W436otY",
  "key29": "3fCFRLAgN7XGYsuQ52NwXZmPNmfvcSkNyPWcVGSsuWLKJgcgakAwuCScxr6AXBvAnV2u1brGxBfEUx9Q41Qn1U4z",
  "key30": "LDt3vedhz6P193aBww8khn3S44rGf6SKjnacJEba5HDDbkLozvN23jzu6WJ9u1X9UhC85Cd8Kj8H1YbxYCa3wGw",
  "key31": "P1E6TBunQ3iU1yUv87bGkFW9774kzgoTThCikUutXgAk4B2UmGnb1KXbDU4Qk5nAbzDBRLdfkkmkLUeZAfGFwhy",
  "key32": "252k9NVWgjAZCUTxXgtkv9rbrSigdjfatBykXC5f7z5YbD6qmE3YBQx5wPqzvnRCRazexyLv1e9udFefw5Cs6HvP",
  "key33": "4xfvdZqrdjZcMP51szG7evbXcrrVTH7fM5hXVJLeU4PbmJuk46gGMxDatiJjq8DMx8Wyaqxxvwe4wbPJVapRRdkJ",
  "key34": "2M3xoNDfJzc9DYCUsPxVhvuK6kuvww3hocsQjm8a5AKFw6Jnxv9X9nwPdodTGnFzQCUA2Ji5YXojz3VhbUF4EYjT",
  "key35": "QbMnCo8jFzfReJdNto4tnHPeoquWT5YrHWRMHDGMMkAxc8q1R8Ke5N51qetj2YMEkuJnab9RTmD5eBCedrpaiLo",
  "key36": "2gXvoxYjaZuqHYwabhgdwEzmxyYucySWCxMzdmyUzppsTpTr1Y63EF4M36ssBD74TannZsTZyK4e8AbWs5cCyjfn"
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
