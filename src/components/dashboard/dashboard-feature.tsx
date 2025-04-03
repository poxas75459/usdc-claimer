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
    "65GGNeygn66QYmMf25AvYtsupi39qXaZZx4SouehLryBvAPBKpcmdYXjovzym5dQ8LsbMfpqhox8pa7KsBy3Q4aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jwE1dufBJHpTFnmUXPzjGvxmgvJzXfuQWNARuyzKyJLrDDD3HoVuRsaCM3gHcv6ZSbpkYpmTbMk6GUFBZ9GzwKs",
  "key1": "4rw21hY4jaitvuvJbynR2Qz79zDAF4EkvsqeqU5UEMHQL8SxwLAKxHyGK9sNjRb7fgu1sbqv928ocHj6VXo1G3F5",
  "key2": "2Eqn2RnfmQxWiJFf24EEzpe8t99YQBxWkm7UKmTTuaQFN7r9rKKFXAeLqB29EbgYhy9m6RRXjHaDgGxtMaJqiBZu",
  "key3": "d2zPRVZ4iY8USaCLhP59ULYCMiejy5ZEYJ7LwAddQeubi11zcUvUVAwib1nc3fi7USpyuPQeYJ2q1xyzXL6JQb2",
  "key4": "3FJqZzKjvS1trYSGosWLZXKm5ed3JJ5mCAFQt7jY694m79QTcahhP6X9q2fBa1itsahsfxuCwJT25U9aa8sVuo7M",
  "key5": "3A5FjXjNqYn5WG6wggGcpA5jXArAgGZ2KRoL68VEp5rsLXA3gDRqg5XAv2RkQy6RqzNWZjFve4qbZA2ZGcPqdhoa",
  "key6": "2N49nrzeTmjgAebnZCqkgUdQ5LSn5D4LiNLMiusFs3FUsQe59VZB69gZ5EuUsWCw7H2ppxsWsoy8MkatSxxgiQuP",
  "key7": "4DBWbdxQ5LpoKyBFpwE54ETN6mpNRtZZgoLbQfkPEN3qEBBLxQFVKxSTuyGcyctiKzp1crQYUvwDxKWRnt7cYwiq",
  "key8": "39WC6H8xFnNB8idAPVmnmoSxvagLt7RBxC7gNv3xucvYpx7ZCojn4h1YiRj6QTCjovfq27PY2KoeYMD2qnytU5e",
  "key9": "39kkeqqVjnhwUWx7xJNoUDi1TRG3DTu87MDuSrALQZ5f9ZAXTNJ5UpfGKQTfJ5DPmxj6BqdLRdgogbaH6jNE7Zer",
  "key10": "5VdkunwxuGshrAXbv5DwFV9b7hNC11gGQTnTDuPe2C1tE8BEAQa2t4AFSeHPSCgcXu82MCeQb8fdkGhbBUxYVAnE",
  "key11": "4yBvyZ9Ua77B1P5mHjdLHkp4EsgHKVwtRDL3WtZFqUmZiwUUJCy3CJPirQmCkx6xVYBd6BrDhCBc8taxhUa5vKB9",
  "key12": "3SvXxmX2U2jBxXbFAZ5PwRFGvrW4AsLewxHQS86sEGShkkxW2CKC2ENUFPchnvuaA5fwG9CCff6Fe77m9ogrzUk5",
  "key13": "4CjVh9f1GzNh2x9NvEurQx2aURJg7XTENiB6rgohKA6k79rCJSxbZGcK5eEJzCMb9t3XiWQMJRhkhaaxExZvFTuF",
  "key14": "4MuHgiRDTePN8PXnPmKF2tf7o92tPX1G4nMiVEtDyhVccTbduNavx1uuVgteVgLHa9LeCgansRWXTD6zupFm1TJo",
  "key15": "5YSS6zpBoDBMH7o9EfxzkLFWBC4DrtgBBfNgdyUFCA1PXtaMVmYjxBomdA8ukakCn5zgjmoTVTBxhHZvqE8D58sS",
  "key16": "afLnbzKsnxQV72zVMfi7ePLjJaNRLvTUQcsgEC5miFYzvm1bptUNf3pBsWGeagS5NJW9dJpXYTTGifzB9aBJLVH",
  "key17": "5kCavAuEQPLCn8QX8kkyPWrvaDxPSbiEGNFarQHeZDjEGeVspTEpUDBhNRZwKd6TGiVnXzuqp7uFN4B1zMiPiFBX",
  "key18": "2ntzxoPXTb83KxmsXQx73SQEoZuQouYL6v3SEPKiLErDt6D6E2yB54k5SYmJ8v6p1q589v5JAuLNMMMaLgfbkVZU",
  "key19": "4ogDtBsozxd7tujm78KcNpbz9MmX2N9VHAY92g6Ax3CPUbz8KYtBtHFx6avW3rJfCz1QwySKbEAc1UmxfH4M1pSP",
  "key20": "5GBfHRq3ctCfk88Zjj52eCAsADnzPgbFMd52j79iEdb5pDwfGWZpYVu9ayeiFgfUNqamoZML9PXHhtvGXiYJuc8C",
  "key21": "4kKMGhbbpXWgWvzPy37mokB8tVtyrono97CS5UendjL2eiHEtiNpj5qg84AEf3KpXbRGGL9A26hv6jrrNGGWiHdh",
  "key22": "43aN3iwcLNWdjHSFWoDqvTFaXJ8qKdtXeC21aU8BZJbugLD9o2RtvhTVRUmXzhzojoDoGHCqqnSyyRCqqRAP3nRT",
  "key23": "mK11uqSzNN8W1XptBLqoFPWcQjoL3hhhTs5VDzwMfaSg2mcFoAfCY1hzPvPEKJXKpapMqxJBjsp1aVpVyECCr6e",
  "key24": "45XcMTJykVUh9anAW58uG8P3hsnDApVB9DuxFjfgVChx4Dkwmc866Mp1fWdaxPDSZfNNFJ4F4hqoGeQeYqE395Cj",
  "key25": "5qhgb7iN1gNxbXmbMiVJXt349WBjLgMY8UTW17RwP77vnVCtRhgWWm8Duevyk5dU11PKJ8eWmig3aYEWZ1dS1tAK",
  "key26": "4TdRvV3i9q8L7kXoUJ8pNdpM1pzbYPwijaozFMU1oSUReLpcqB6zJcdnPCufK64D3paW8981U7Q3zoD2svE26Lrm",
  "key27": "3xXt35kpcdgs2Rdv8JH13zCPab1njZaTYCFWUjjQCBt24uuZ1AaYsuqjVtB8DCVMMKSAZEYQBjrT2MrPGwckE8M",
  "key28": "4K915ygsX6EAiqAZEVVbeX8wmmUFfuauH8qMnwnPCmAADU6jHDDXUSJA4h3PaK7GoSH244SwYmHJtXFidyBPiB7u",
  "key29": "2UtcLH3PNTuKGZhkK39feswejgYtMck1FQoNwmAAxhbHqVYwnkBa9yvuRBT1SeoBfaxXam6mAwAFYi4hcFiRmucf",
  "key30": "44vAxMGsJye8szh8BtETw6JKnb3ShKTPYQR6zbbwoGft6vujZyJZMjBvqPnkytydQDwZqMahchMNh1kHcCVGKFyh",
  "key31": "3RaiFxZB7uQ8immBUebU4AR85s442yCPusboFYzieHedgaZeQgnSTqnJo8WZXhqXFuP7P31j5rTDHENA4T9G4Awi",
  "key32": "34TnxC1zMe8cxdEdrPBMyyrggjEvhQPFAoQqtzTdZFK7yDAKb3ZfrAYnEaqi5STvAowhhZvmzq8yhwuz3rPjgfzq",
  "key33": "2iu8PJA1BLQY53aYcfcpVmvSZsQ7KsKqK99LN9janhPqToupj3ezmueUpTPRtqKfqs7xW4dkPJZJ58RTyUtj188c",
  "key34": "4yCZsLtLNjfvjGfNu6BL7Q2RVbmTGG7wFDEwLd27S2XdsYzcCub4kyffgeBN9en79iq4BQFZMeHc7YUP2kYJgF9W",
  "key35": "hRKpZqUkQLxzcuXQCK2spY8rLMR9C8hBainZNKa9ydiCFaLaKwHY19mYtUe2GtiMxk8Koh2wiFJTiKhKAgh1Ave",
  "key36": "5Sdin6XAS6Vt2VobrE13W9SnQkRjWU7ELhFcsBcMgNzQZtfVkM7UrtU6Z4tBTw9yUbwrdmv98e38jwyg5hDYPhW1"
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
