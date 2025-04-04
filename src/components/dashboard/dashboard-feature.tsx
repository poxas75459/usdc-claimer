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
    "5rhJrXmUpvNdL3pSDHRGymtbmDenVmobgW8QQjKzAF1WbRJs5VrcC23KtJrQGdAGHa9y8nb44jCcT7N7gHz7YErh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eorXeSn9szoc6xrHTd3HRoZ5zPtBpz7YphpG3HTUhTqaJTzeRfyYLzufd2sZwfzquEkpWmaKtZMLFwighs9nWp1",
  "key1": "46GM5xfZXwDgPq9xLs8GTJCjmnU41dAsrPDGXtL9jNWiLpju36Hg2z59gkYhEEdvo8AwvHiDE4CbGsXS6T1UvDCf",
  "key2": "vT7pCMMPtsuz9PkoHqoigAbtPcSu7XTgPBLXmgqAEHkRLSJkyPRnaFp9mqutBYy2ZE4WafgZBJkKgThUpESdQ4R",
  "key3": "3w3iQbAajp8Jz9fP5ofBYehNULSA7VSMXnznMQs1LmdqoREpnQT58ENFTSrHtnjFoCZ8xUL7bb6RiDZeCwaUBaSH",
  "key4": "u9Nn46EpKGiL19CF1azryDJse1d9kAxqJ53m4dzWC1TvFpgMjzdkb723Xdf4BDsU5xM8s3JiMEYb4zgCrzAW1M2",
  "key5": "ehoD9NXHYxqC4Enbym29sd5jDwtGSVnrxJGpnUVgzYkkRQgGL6u8EVxttgdvhhq4uA75jnK2KDjewEgaffJUbpE",
  "key6": "3hSYe5UDpctjB97b2FwDwjjpQ3zN7PQbTcz1njxWQ4kyDtjtDQPzq3LV8EiqLAQ9gdkGfYjAmVLaBQyXqif8M97h",
  "key7": "5gk7oRAiosKVj2ou1djGcDDqfz8kT1R9yaKFFHxZJZR1RduexN2ZKSXNiewzhpoympdrE4FaoJ9UjHQgJLLfczBW",
  "key8": "BqzbgLW9QUjBtRiVik9K2g1VzomRqdp1CYBLi8XhzTJsq5Zuwt96aBitnoe6nZCwpgN2iddXeCS7pCW3ed591S7",
  "key9": "323ERypgKRF4t65KwuivUNFW9GZaB5BxMgsbUEGxk6XccwCNZPycC3iAK2sUJQnBPDgxixHmooFR4uCwYzZVL8GG",
  "key10": "66UT3m2cK2L6LPs2V39yA4HpEkcSdiWb496DDMTBb6RzcTKv1Bk1e2B5umuXoo6s6JXcFNRW2xxbytXNmCBi5naP",
  "key11": "52CcC7FB28fszidcjwigpdbG2yXeTUzBqUcse3xTHVYvDN5Tc6vDRNKRpQoPBtGPCVfmPgQE3QKbuV5ag3iUv3et",
  "key12": "3jY5sgCcWyNKXksGEgXeKgjhpnqF57x5Ef9nrtmM8YTXzSBvvWSA7xdRsZ2kTLJkzgTBV39wEa4xcpuujp3NkAK4",
  "key13": "33bQ2oZfMjxu2VzZ7hFTJqFpzLg2hGzuUjUj8CG1znBZe5ct8Tc75b5qs6zZHam4gKgac1HySfE5LYVBcPdu8h8a",
  "key14": "2G5GKVC2RrnPqQaBYz8wqYUoMAPK6UYFCb1SYi6mF7zVtxgxDendJPRktTTMvmtPEZJqQYzMwSZtHW7qJAnNyfs7",
  "key15": "5EnLq9xxiJQo65X9t5Nf7zkk287hczeJ6dHbeUDQJG2anmEzcabjrsk97P6oX6uXyvMWr396rwcFEDzDn4dkUzPJ",
  "key16": "Bz5aAjiUfWTjCR2qK7MgTZRueQyF5eaXUACRAPeSXA3ZMwNWQruuk74vFm2wuBFci9qKAovTmeZtFs61HNfGyVb",
  "key17": "4CoaUVQWNXJMk3j49nqiJ6YHdhZLiS1w86p11eQtfEkgzkydDV796cpa8Cw8fMnM3hoFHJZhyPChMXHraBY4ocgH",
  "key18": "5GW3kRomT6weV2Xp7dEMqa4U4oCdD2mwbt31fhX6mAUay2nfYoA3xSYQKXUaVY4t5tPXiGudMcshuUbaaACZdmVw",
  "key19": "2myaTk8knzADWWEwyANmXD2orG3yB7WpsY62PHD7onQ2XGBN29ovgGGNjXz4kVrSxmDcKiivDy5JPtcykQtdjdwx",
  "key20": "66Tqhz3H1b4TsUQnSv8TKcHVXuCHnuB5XLUZpFrkeT6LMjpGbb9aobY4Z8FqXP4czvWxt45pLR2wGUDvbq2cQDYT",
  "key21": "MpMq5QKv8xZjJUgXYsqEyGtpCXbR1hbRRGXJBJYTQgV1Yoa7ynXE6WmadwUKTk7oPYUBbrdR6ULr5twLaTaDsod",
  "key22": "4RYpBPBDU4Y4jW8sXawQ2MMwwsF7uRC9D3vmgT3em2kPCTsfd9U8bEQbRF5eaHYDRi7zjrGbbML4M5VrDAE85Ys3",
  "key23": "7n5RDsZFzK51UVAj9Zi1uM1b8wscMKRFZFY5TLZy9e9b8NyQ2ZLxT1S5bSKbBgfw9UQhokY3tduZgQwTRnea9VQ",
  "key24": "43uZQMxcrmBKj2oYQhxgXfyrsXWTNKy2wQuxpGFzE1fY2on4ShefYkuwUqy1BpzmvnaGRU9juU2KAKtaDb1ky4rf",
  "key25": "4zYNHgwMvubZQunL6wv1birQNDxNvR6Km23nVaqdQu4W71ARZYPXg4j1oKpFDNmALrJe9WjuZjgC4QiQD55U9uur",
  "key26": "32efCCnjheLZcWFy7zTfjjS4J1PdyW1hJmaLRWjqCMbggtH4bw4RSxCAc2RGDh7Gbt3XZY1iVo4fTAF9LZV7Paoh",
  "key27": "d8MPRFuNNiQdtq2BT7E81FuFKUjkLAmiTLkVg6ac8qDRrNZTZ2uwmF8GpbfMnTjm72VhavMBFqBPpdXK6TfTBU9",
  "key28": "27QnoLw57RFVudYoqsk48LSDEDDh2gEKg6gx9SoHQCYZjS1yoxi4awyhXhefXiZfsTcfqNaRw3f3jk6PskSTAnh7",
  "key29": "5q4wY8xh1Tuf1uM9pVdDuQVdy4iP5YKyFBwWdfBYBuByqEnXdUacfevT9DjpJScaZLEdtnbHht2MhgACdRtwHxjB",
  "key30": "Rkv5cENXHu4vBsgfpYGUaWBPQ6TVx89TvkVQdkUmMB7csL4GWrACaeAqcZkAhvVgsZNs5y938mXmutnkU9nJKhp",
  "key31": "4tpDcmUw6oMC4gGoYWh1kJ7gr5nfUzdKoe8b3uyEL1Sio3eVyrHeu2M4P9nasQCmfxxB1sftu6EV8eG98ddtjFXa",
  "key32": "3BVPyjoywngiyQ3tzfBsqLd9jqbAXqnxsS4sLuVwdJsSVLfpSru4aKc9DsFYfEZ2LSfNYTLvgZM3aH7MAD416mMK",
  "key33": "3tnrdGkVZmChDofw2njF4fxWpYkT6DHnnWp3pVKzhnfrg3JUg3zzyoWzCYdQJqwD1DrwBWAPS4DuAwUxxzm2h7yD",
  "key34": "ZRtrV94PMzTFFk1nho5XRNETfPqiwyzwSTdSjGkvssZsCVgCh7inxhs5KZD8wqjPa9WpUJHoX7DhJmqsPqtaMD9",
  "key35": "4j47nkMrvTnQ5ApX5Xh9M8KDs1jpdRvVcxp9bxiQPEdRC4mQkVtoC2Z4cKBjinyQgydAHA39x4YF94EGSsGeWfVg",
  "key36": "6512tkhwZpvbC6EVnbh7bD6SFkpEMBD5Fig9s3xZNsxgX4EMbZ7quFXbJaNWrPQ4hs5iJpGfQYbiT9sRb6QSpUVu"
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
