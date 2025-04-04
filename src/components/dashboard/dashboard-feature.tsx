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
    "4inHSc18PiR2G9CYQ72hDp9nwVzpuDfWmWQXb2Jm6MKJTrwY7tT4Gj2cpJo3E541UjTJBLQB6th1mwykkXaRbhAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rmeRPKqSMef384B3p9RbUe8UUqM9JvEHnaBqrZXVHq7UEnrLZxXaSwUMHtQ8yhp27PJGC1GnGAxJ3YmSnthgiSV",
  "key1": "mG42T2D9hSaK82S748vB6jYwnCVaXnTJHWoys7ikNRRzvX5SGj58d9mdqrakGPG5tWAoEyeLQpFurCujE3LYg56",
  "key2": "5xiC4Cr5gCL1pJmc4DqdFEgoy6NaBExEhNVPhCpH3AffD4oCURdmY4fYzD8SEFqY55Y4LXqf8C8BzbahdGB6NPdQ",
  "key3": "5hMtwzquXdcExpApSNRPNsAK9LMmWaGhj6eA5dwy8VqGMfcmothS4HjuMKCHhFdvAN2KxzPBtswGsBWHcvQSHVgc",
  "key4": "25axgv17Ff9qcGwJvni164sYfq7H6UbJ9y4rSs3aroPKMsCwmyugWWZVKrPibTAZqRyK2fHqgiFyxTGHAq5Y38J4",
  "key5": "4nAmvPYcffnD14adidguP9TJJkP7SeV4SxH9nTUVKDci7vwZ9S1uuH2fpzG2oSwWpqE21nYdv2ueUrsotsJbZCNR",
  "key6": "2UjjrS9dSEiDRhKcZkn3Cc3mNqih8o5KXxj4UuQZ4mPiKUM9omtT4mZDXEj2vAjB72oYkSxMhqAC2v65Y31iebTu",
  "key7": "55fGDZMLPqbcNsvc6X8WmWKuyQ4c9qbFqwUj3Y46LjDfzTrB4pgfTADnLbxG98KCBHYEe9udRJV3gs1p57sDeLVx",
  "key8": "34ZA7GSDN91rqbg7msRRwuzsBPqZMtE9JWKtUHui4rhWGRgTtR2QBo5pxuSRRUs29r6NenSZdFGDDqNnM2RADeXf",
  "key9": "5hazaDTwtwJwCPZYSdGvMwAXCfdXR2GkRfAwv8qyajF4dscLMTf9UjrcxTKE5rZrZMpyiz5J4cofqdTNHHAN96ub",
  "key10": "4hNAQywWUaQdGp1rp1ttY5piKBvMPsFnzyoVztTsYf6NJgGWQPj7v7Tr5BmGoRcgjXbhCUJBEVXSqQeyibZg6vHp",
  "key11": "41xeC8EJH656Snodf3SPgNDiCjjqtJgG2A7nJJLHXBosMSsGLerCYEkTA88J7gwEGcQXt8nyJdH54tZFcd2nHoQ6",
  "key12": "MGHJZzmn17hp1Mk8dvmwxHFKEZTGdFsPxiXWBxKsyxsPEr7JSeM7pzfR5RQodr3t1H9kwhZinJtM3ekKP5oe8a3",
  "key13": "K5kDJpu3CTTBgzTtUZPZNRiDptmf2ausGj5g4wvXL5DHeXinzYsAjBmUJmcn8QNzx6PWgVtxwmx4pWE7xogRogp",
  "key14": "24zkoBckuZYi1iJfNYyVJvw9RnCuv9JbVUuWfwAhhn3b77CMe1ryA9qzAgvNq9RjQRvDBXPNhs8m4YcRzG77tfbK",
  "key15": "3Q9UvyANMawtKkA9jEp1KMYrHZBxrYgwZG8JUXULw1cpJBf1iJgBM56d2h64bG4rBkFmZ3HgSVL8GCL6YJtDfedL",
  "key16": "2VA9e9vCcmfes5u2RTgTRADw4MCF1js3zt6wMP9c6iT33VidGv5dfKMsFyjaS4EQjTFHPneqmXRbpYsveEifVPAb",
  "key17": "4VRYb57vsUaUbJCsrobig2YEr22F5zxveH94RjUvjaPXPQ5BN1CP9Hbwcarnvc3ctn3k3z6tXQoRUPqmvaLZhzaq",
  "key18": "2XMCtXLVN1ZcY6tUmmH3b5zrkwA7eKs8Yo4aUdAiQD3uwFjtabbFf482pGHAK5b4YWJ62iP6WpMXkCcQKcQCnW1F",
  "key19": "9cK6hrKmrVt4WuKdDpNumKnrs9F7G1Uv9UPFWTV4WoYfE4i6u7S352EkNhSAfhamiYWpRc2wkVDxCkzNmzsFKB4",
  "key20": "42HKm7BJdec3YW2jDDUhTbyLpR2tQuTzqpoJmANdppetf2xN883LpUMQFz7zRr6KePK8mNZbPFpTjfA7KpDpvw4p",
  "key21": "Y36mX2b7T5NrX1yHaw7x4q1Y6X1SDqTYvGMuiE3WCXMgoK879kwYBuTwqTm42XLYhgNDYdV7CotKBKJ6S2HW8cM",
  "key22": "63mhm6jJFzkaxdyH5giTAXDNLwqEHUjms9avTYKshn4CEVNBnd59sjgwzirMfY8gGZGZnC1pFv321GrxLZcS1BiF",
  "key23": "5PRGjzBTH2aM46JFHkkDBhDWvJDy9uQcwYVB5K12Qep8Y967qjHZxNMgL29nznHdgCUF74mV1hGVxY3xtjEnjZRY",
  "key24": "4wu4EbysqsBTNXjtwkHfbKmJxa2tnSpK1MhZNtAEm6vMna4zNNoV9iZ2SVByYihUPke7d3WY8XDFsbbmsKz1PXGz",
  "key25": "4KWES95nczRXQ7Er5DMQy3VtKmV1srnAJEsCA6cfuteGYGtTBvEeWRnR1r96X29o3RUUyR9SKSfDgKvvgEJDYPX4",
  "key26": "2ri6SuPhkd3ie7TJeWqyZyyLZKNACW6hSNLoMK69ENemSN7gNpcwfj9wuryNvMd8BHUuH1NTrRtFC5w9ddxhafCc",
  "key27": "537m4hJcmmMfEs7KT17FaKR2c2ee3KETLmw2PEafNBcuLu3w6eNEW7XdC3fGn3gAjwQBMf2PeUtQSKsMV2A8uqBW",
  "key28": "4UddPJxWDmPS7cgLUhaFBQ5thiqJxX6e4ojEYKud2cQTdozwd6wJdvwN3EFsatav1z5gzYjvbkQUCo5ogtLrtdAe",
  "key29": "KEcLtzkj5RYh6asdkpufaEDvEGJrSL9kRonKKBq8S2urMENs9k27aZfWNZt9TvBmC8Gqk75ycEzr35u8oDi9tpk",
  "key30": "5GQdQ2DZt1jX7xrwUe7ynKGZaKpgaCoGFisEfkfpjJghzX6rexn5PhxLfD3SMLA842QhUud5tsCPU31dhVLSi6dQ",
  "key31": "5a4LoJZYRrcomyPMkAyMbiPAcdSYwzBiVVSk8nbaiCvZZo39cg8Tw4Wq43PxCRtVeV4AeSQeZ7isJR46Z2Rux6hA",
  "key32": "3vCpLr5fKb9xPNSKnxQGhJT1s5pbtNyotYWDfXcM22UVopjZcKuzrdEW8FXATraLqJXDFzLqx9WhPCe8G4xdqkr2"
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
