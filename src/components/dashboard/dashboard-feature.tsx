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
    "2JHTykPghS9nhdQyViq7Sm9mqxt4YTyNfRJDC5mA63AAjZ2m5R12nwVh4xUDVq36Rxj36oLRUskS1LtnEqQGbx2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGx2xiV3gPKKNQ5PZcbcPhk9evibSWyenXEzRUTHKejTDGuxgWcHv9EdVUikjTN6td7wS9Ch8md9AvniUkmm15E",
  "key1": "vw8gDFia8GV63cxDW9JQsNMkA9CabAHLKWsG6bBKET6GGKY6uCfs9hwgYMACt2nJBBC97aYYgqtaWyXodZCoyXP",
  "key2": "PvfrLuqPDe4a7bqfyztXohFnXPL9zoQ826E8v26XqgP3wTQxU4PLXqKMPNUwLsFpvrJY9iGPXbS9hvvwGfHkvHp",
  "key3": "224o1DgVWcM5LhLmK2pcCDiPNhZnxmAVaFrcBiPrhimAMdJiahRn2zHC3w7kFkxQxGHEdanKKdCP62Ujx3eLUGiB",
  "key4": "4qetG1jvPMcY258aa4Wg9yTMtyJrr48zmJ1pGm4vF98NYsss3J89Vxq7zujFyqjStvgupjvB7CMjmPMPnEfXZCV4",
  "key5": "41H8R51ywMUWaz63bkbf3LEeRpGrwkz5jRfF2nXNRi5n9LbG4bU9uBGCucAvCjyU8WFmVqePm8mEgZt9uhN8n7ms",
  "key6": "3oeoDRdwDRq4uBTgyZSu9NjpcLFNU3WChoQzm5V9HKx6Hv6BNkEZtAuNLwJSAn6v9LyDhKKsggypRtzByu8BmsUE",
  "key7": "PvhQA2Dp7tyCBTBiKuc2FoiNBGJbnSvUsZNA9rWfey2UUe8Kxfm2R4zFQoVNZbUgM5NZbkZXrjjoQpsxngcyHVk",
  "key8": "3TP2F6HFuZVDMnMFq6bKdi8z2iGerUxx8kfqN5GV74KNZ28xiam1kjgPtq1FJbFTEAjA6PB1ocxRG2FCvv39Wgew",
  "key9": "61Wx3XmaQAp9TAYUJJS4j9RRHa9R1VkdeXu8idmrdAt7ANZjz5fCc9p7a2XfXPE9KzmuC9T85JJMSRQJKh75VjKZ",
  "key10": "jbRizX5xmZtU1fVxg6ShUdYrE6m5D26ZtrFroPyrGXEsaK3RbjqeTrB9PyG6Fe2GPX7PyjEDzNibEJuNZv2gSTu",
  "key11": "5sWTDbZQNyeTYkYtsEKDhZs9haABpgH58QqjDnFiZ2NN9AVPsykKjDdUhSKqrTZ5ad1qT9bqVHvou9pdFNQWtkYe",
  "key12": "3uzoJoJBixFv3TLav5Q9fqH11JqwZKiTorTN8bAnxbWkSbKzuNdtnDVdpcMRez7AvtM7dwxZLvxeEiFRzSHKbGKf",
  "key13": "5rNmhZ8NfiHirT3ihgpEAqpQD39zHcCBHckt3M4qwhLysBej6SSSiAQy9ns3vJBrZKSwoQ7sY2dgGCozHYYx77MU",
  "key14": "RdAvekuaYLLPrqMBaMnkjGVPR2L762af1BZbQAYpxGnPynpVf32yAKkob85apZGAJUtiuzt2kGdxkRHRdrhV7XV",
  "key15": "2eKrhh6MqTaPsHcUU27kq88Wdi87bDLoEzSq1PpzqQ7vJTyGenZ744uMZAjcfYT361HXvfzY9RDecU9k6qUECby2",
  "key16": "xpSUC79dgfCEiHP32Cbww8eBWAXxu3AuEs4i6BqYvAVa5NfhE1oRpqrAKei9moYaLzFkkXqMNd2jN1mUa2twiuH",
  "key17": "3ERp94TaHc6rqFBajGCkgC34rpcooQxvN8QhhP7FFbqcR1MfwjFdefeXDu4VhM51NmXxUAk7AfsfTT7SKAcCxihh",
  "key18": "4gRTvdCEHdf18oEg2X7nnitf9JxQYMaQtMJ5TUiLXrXLqc8SwDx2XyQ1R5a6aMcgF9NX5yVHmBYenzpDmMorJ6WR",
  "key19": "nhLz3EozX6XcS6RrRwBzwugpZFoiN3i34DJZwfPTKCrWFBmx7NE7JEzsEPuwytUKdqjyUT6ygjGCBv7Rwtx2Rze",
  "key20": "3gMNjDsoSDBHmNKAwZU9bLCJzXJYBhKWUhpxw3bh5f6VE2Bhwhm89immXLQjx2hX5UFqm9ksKoWaUXrqbiNnP3d5",
  "key21": "3capKqYn8cNDXrjjRcbagDEGQymZcPavgFCcuJQNZr4yfjkj19xiBxPcxrRTfXKx83ivHeZ4KhUsS4jXiYerQzsS",
  "key22": "4R24CY1n4YpFscjsGSJaHYMGQYb39zDfK9VF95PMaNuGPp3CnGT1vYm8RFPjhptAo4egKoDSXi31kLoc2ZCdJDqB",
  "key23": "3NdKLbhB8PHJPP9ScwkfGTrkBcC12ZjYcDYBQSgFfxbZaAY9eRJYWLYhXgbAZpVerivheAuDKAk6UCZvDzJfMbU1",
  "key24": "5fCgpnc1VfzhW9WkGd1TpjXKgkcHhgwu9ApKBKpBDvi1ZjxjKg67Go71TqfTNWXTz4ZQxQ8ekrn3ANhpaA6eXq89",
  "key25": "2amPeZrn9AFSBYoeDei32PyCv6HZ29mrV2GWn2dLZ6jAhV87oHnDwFaWACtX4mpQLdKrWV87wXpQT7iujTKzNyCJ",
  "key26": "4z2TT7VUKiox1Et1ZRxHceDDwNyZmMb6hqknp9g5q1TYnUmTUrhtFBhuqxEVVhesUNCj3Q9D81LCso15TeFH1EDa",
  "key27": "JUBwpfQHxbTnkDLwUkah9MoYhq1MhNQUKgA6Rf6AAnebzTi7DQ4nQf9kGULxGAUiLyDbH7mSwPLxqjYszegdYYM",
  "key28": "32yvseWuTp9LQnAkhP9VA6ygkcwTVkZggmyrMqPpq71dvJXjnoAkEntp1FdHAphyRvxF3z21iQQeme8jimgkk7qB",
  "key29": "3hxckcxBFzuGqs3Ry37fRmAxFZLQczD5QpakHGkhyCkhdZ83YbDBTucRsnVikYDhQp9auvX6igir8HsxXZ4xZCj",
  "key30": "27hVr6YSbNxgABxcmoC6gA4EKJNLnKYdePsbsvSNidF7Tz2xVAyRdTpKAqEMtRRbPKnmremtnyyDnAEDTyXmmj1Y",
  "key31": "5TrbFQSQdZrdUsPtaRACuARSMdzYfrckhVqWbd7pZM6Fm6Cq5igfMyYfjoYbQWqQSzoeuJaDdKVHE7raQqfcqh8B",
  "key32": "5QyufnSWecu4WnUAUuoKed9uUjGh68T5JzrFvboyh5pfx3yfBjcwq1HAApcn9NoarViK1nhQBJnQDZQscSpwPE7M",
  "key33": "5gMkwqobzTpjWnpqyiFtKnfjHF8P3VdSaBkwkxAGNtSqCW4XwyNECEAMZqNFjEeSsX6AXQDoks6zB2CL5p6gLbLG",
  "key34": "K51XZPhFXQCZgjdGbjZamZyfuWBUHJtyTRRzgtq1qAxDfgSRC2BfWmdfxVB5KywhafGmVg82PTWxhGUyrjqpFhn",
  "key35": "bHubzECtQg9njYnEUqYjprBHDRBqqXNwXGLZxZw118Zg19ZzK3PbuS3Z8Rj6zqDqLc6adigb1VseBMhejXAPyLM",
  "key36": "3DXYWMbHzqfHUgBv96PnuSvsC3KC99aufSZvn5pLqKZcXri9bsrEprhm1yNzZSU1hUG7wYHwkdTce5dEetKrCSnj",
  "key37": "25YHdsjJbaubwzTMnvTyxVnC61D6DKHU81Eaw6BbaResvoPcq3p6EJDD52QVbyBwoP7PKZT3oAx3eSAQPwnQZJvM",
  "key38": "5gG3U9zXx5ZMDR5mfvfMNX8hyFXvCBEw5HWsojuZxjZ5wNW9zq46FdhwKBV8jFTiXuntkJPZeSd5J78gogdbXekU",
  "key39": "5ELF2G8WEnHBex3i5r6NvyZQjKWjrc2dvpKasssnfyfyUuHf3ogpfvfrWd1v6ybxgGGJdt8uLxMuwY2MiHVB43fC",
  "key40": "ztfqTBYz1dZSbQ8gkwCkZKgTqFvNfuc6aippRbFJtLD2mqEFRGwjDPJXJGmumrQ3bSu6LMcdz7yEonQRoFLryoo",
  "key41": "3UqHYXKGDNQiEiooVdvJFjCwhTSgUiJ256dnCAZ1kvFo2orehMmY3j1q1WVwHyBS3aVbhoRWf6SeDJ1TENyiX8FG",
  "key42": "5sC3E8vYqVjid2ixDLGiZ3fkXRvd79HQAhF3oeRZVxG4yvHVs74RddLhZoDNmaNSWiUgzDAbQwWbXbkiEHPRWMBD",
  "key43": "4DfMNAzCHH5ocX9jQwKhUHeQHhVQggkDUPyjkEkTTFBouAHcGPoe26YymbLHZB5BPb6fuZWpYdwNaDS7D11N1nSB",
  "key44": "5x9xgDuzTuhbhEjiN9V77NzMaSdSJoAnkm4RLgP4KdaxF554dNqR7kh3MtU5wdfmjr2nQjxrsFXMfk3Kxu8BUACo",
  "key45": "3QzHzX1Z6NrBq9hhDjjvJiLpLfKbcEz7YKCtPBcHrnYNmYqPLNdY2pnVTioxDPR2JNWvF3fowb8YdA8o6gSvjTfk",
  "key46": "2ijqegPcJsX3iMc72UX9KTdyioDfn5UnMsSoaxB96hFaG5LF1HyiMDThAqDoUo8M6rxySG3CdFGbwaNKud5q4JiV",
  "key47": "4k1CTSaGbKtud4r2xFPWUESfEvWawjJGky8ZU3qLGjJUDJhZXzkYgP4gVBfYCfJcL2ZivzKUEVLCZ2RuKN8UhDTt",
  "key48": "iavrqBfwwvyxtP6FVswUWLjfEyeNmUbjB3VsSxTbdZhGJNJM9WDrnfkP96St7c1AfwGfgk9enxoDVdpjxt6DvcC",
  "key49": "3EMh8JhjtcHTA9kJF5Jha9S2ax8FGjvtQNYMWXb8eJ6pFpNpyvodd5VApy3tvYLXJ9NPbircrHszZwgvwoMkYUWH"
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
