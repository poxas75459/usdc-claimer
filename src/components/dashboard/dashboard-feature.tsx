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
    "25nkMqTBRfqZMM4NnzoYXK1TWyg35qUuSn99dgZGcJ4jyszgrVoKwbBiHTKtuLAYZyxcGzFYmPohwLZ7LJuPXTqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLKVs4sFUi2rUrk4HaWU97C8sYgsJPTwKjC9anADdfM6ceGD9VQgbSkcmsNjKkK3VSz7j15RPZFevao1bN9Px5E",
  "key1": "4Zu3ewnrnMoFGwAsmam898JAdG1cKFfKcyHDnyhnRNgrobxEFhgpnoRcAMNhL8Q9STyrHuPJcw3tUn5FbhW7W8FD",
  "key2": "3aGBhuAyuq9SKiBy9RpwEWjUoAHuTjJu2gMRKp9FhP2c2z4L9k5rpm5hMdUjhnddGVTL5qg1xzmiS8bTekAHfGat",
  "key3": "3yXYBu6jrcnNhRjSwMmNQqSePcQdBAwNb1Q2oreRy3HpNRQ3BMeACP2auv6H9My1czkcssACu6JrX5YBN6TJjoaf",
  "key4": "6z7w262BJyUySMg52P6qv9uvuLahyqNdx1j1ozfVyNZYs2GpWHtc2HzcF4fR4EWrJZkigdC7FUPFeuRFGy7ek26",
  "key5": "2nEbmj5JqbsPhsUsy8wKFUQwD3QhjDtnXgyJy5creqntoBUPHUG83GCMZc6QnzJSch23mJceZefsAmoeok6dwaRU",
  "key6": "TputWGNggX26X8WQ7fSxqZ4V5JjeSi1u7KJQYqG6KTw6GgYQ6CUEomjeS5iaZ1GD1qFK4U3dvqJX2kXtiiyt5Zy",
  "key7": "3GXkfJgkTvgBtnDE8xD1vF9Fvqg8gFnzvx4W6QEz4JC3TzdKLNkBNWyrjgqZsZNAVn7ieGMNVvEisXRnS295XVQQ",
  "key8": "5WJqbhw2pwFYSNk1B71gTi1FDE5T6ZLJAeHZHS5rdjKBt1HVYw1wdAZ932QQ5xiBuSYcaNHCji2X5J4ucPT75ZnG",
  "key9": "4S2XYwbfvmTBPGdaDSFRm8sq4Y4ESExGv3jiBxLPqvxPp887dQeF3XBggZ4Wxj2Dw2LDaQ2Dg7RgYcRFg3aoBuDJ",
  "key10": "2mba5AD6CMqsZYeAy3EdkgVjFQGCFuc9DwGe4wEjQR6zAcrUfgqYxeFGRgnKoNHeqdpfeHYVmQyPcvfA9U59j8yk",
  "key11": "4rkqGgwPvijRCvTfAS9Su3r2sbQVNTVVkPsMVCXELQb8gTda8iWUGbxdBMwrouPhQ614q5Bhnz1DK6tNpvUnZ4fg",
  "key12": "3pfcTS8nSSoC18Jz4LRZ75xXHuCDQzWv3y6qNJra9fMBkhjX61RKkFGiRuDvvzgKrNgYWofqcdP56D9PQRvQnAm2",
  "key13": "pw1FtQCrhj9XhHvMVRELhrCwKuib4xhg2hG3baBDomy3psedGBqpaBezt57uVNCMDn2QetJX1Uq1x69He4gLKmh",
  "key14": "2HFcFR49pnvsKkqWqMQXHgDC1EzQHYdMqWTtn8ZeDJwgs7hmay9rXDi1RqK2Xp7BgY4FX1vyebfTtLajCNVsVEL9",
  "key15": "UJip3iATabn75oZsyEnLCq9DruScHMHqBYQiBTfhfKFqzjphdnRzTAnSuy9WnEeHaHuCycSj4FGFKkXm9Uxrc3a",
  "key16": "nvT3Sobhi9LRbfbPRQtrWJucLHnB3dWaVMNmYR9oKCpVUWQ1jRzUC9o6gXFGhtnBXDN1Cwsme1Decn682agVnvH",
  "key17": "2RsGBCBPfJGcakH1Rk3V9SeptdctY6aSmam6ejTRopk7syFRBtgTuy882SK2pG5iQ5GxhYJx2cdiFCB1xJsgBr2u",
  "key18": "4aprcSZuAD1WYLS9pJsqscL2NUMsRdYRwnLtPrDi9Gk7WVSjZyTEh6TpX3jvFio3kMcESNR6vtst8F6BPv5VpTP8",
  "key19": "5dAcczbiPawcoBHM9Bvu5FbuQRcwM7UBnPZtzE4Hb1E7XTdPJuhYg8hTHSzAFyexdpohqGgywTWjkfmrrwYDQFy2",
  "key20": "4QuCprvmZ5tmqJcn9yfG4pUqDAoKvV5MJ9jWWnocwJ2XU4QGj7hF2Do4gdbbyF7FDLHW12hapdNQFJFiyn2H6LfY",
  "key21": "4Px5pXmEvxgcWFZZWaDSH1MwBV7gPxqNTBgeXwW8mjqQaTYeZCEF6jBFmqWKtC1G4MhsocjvJSSrzMwt3KWN9edf",
  "key22": "eBumRyyLy8sFG9Zo2cWaJaiUE3uRkGSso5KGsUARstqmd4KNNdTsmKsaoM4KyKcHQzcT3e2QfVfmqbKfs4FJtge",
  "key23": "3RSj5QQ6x9sFoeCQXcFn72GkxtFKw1brM6Rn3DieE9Z9UvkuwkKbipgNWDYexJA1c1RrD21DamL4oBtqtmQm5Bx9",
  "key24": "59T1XkXtk16aVJtEHEQYHfzY3fvM8EQoYPZKkV19jdpb7a5WdoPgqi98Cr5eQwew1iBKPkXCmhGifYt33aPmz5RE",
  "key25": "4BnQMA2GBrMvxvcE681v3hE253J9BLnnM6Km6rNnukwmxjifQutA8UN2d9g3fVCxbVLvZVeU9Z2t5hSCwFgXWsDo",
  "key26": "5dkG1eLHC6JojfsPK4gw6YtLGLheWXzyrPL6ncLZK9vxSd92hmqTQCS5vzszcGawQz8o3L4HKXiv4VnVai1xh5pp",
  "key27": "1Tpbm4A8F5yQntrMJjHg4qqJtB5RLVpMogwpisTrkuxXadJrQtifJ538DppugiykC5Y6RENKbeNHT7xkPEkNGL3",
  "key28": "37VrQbGo9uPpvJXMFvuZ1kJkWfRdaAWAW8hrUTTRSiYMkL4piTn1t4BBnPsvxrYRPKsbWAKo885edT4VwS5D69vu",
  "key29": "5YefbLsAcJ3RXRovey2mZcysx5uGRZYWF6tCjvMag7afAdHczjh5gsq5RFfFotYqJm49ZeBCxPJ2DQAwNMavJ6SW",
  "key30": "45cJVWykMK97J1AV94jVpEAL3W5V8sFrueo413kGPJ8smuNEZxPGNJuAggy19AC8yzg6AioE4JfESctx7YZZt2PJ",
  "key31": "2qWgcU58drhiE2APT7hmEKLPRixkFAXo379mthzRaCWthHQRwBTZaPW222c5ZF8M4aeaXziCpiyGLNdkq5Cxyk7e",
  "key32": "2fu2d1uB7si5B5AYx6F1dAawfyp9ihN9MJ8CVXdg4KXJvjwxJY5gLojd867qC9zBrxctt8qshcByHTb6MWKBJRYu",
  "key33": "25rg31ZDrgNEo1p2YTWb9e6G9A2y6xRJBiNsij8DMv2y7AeCACAZdybTXHis4pr5vwuZF6LbVTsgWxJJpDMQGrmV",
  "key34": "2YH115HX3Vyn9aXU8rFodBshVJP88zX1aJQgNwGMVXg4wtDxAJrM84LvSSE251Akn3kvdwHv3F8QsT4kWxpkhTRj",
  "key35": "2AgzWRGBy5CJwToVKhYi4i1VkcZy2QRnHt6LmzSixdzQuxRRE48JiTqkJ2ax4EtYGj3iL1hUsGKvrAn2jkafEzJz",
  "key36": "2xxhAmApGkh3b6LVcjh4ey8i3BA3xzKDvQa2xR7FmtjoHic7T6Cnih2t3P5hWt8jJyv7MrtX5fUkEajMQ3v8J6ha",
  "key37": "QgubkEfgU3ERUKAA7mdZ9QZZopmwHmFiRoGeSsV46sGKuoHUcKrxm1NuLpY5R5nrKgn9bExiWfUnM3FeLmfbCcN",
  "key38": "2Nt9nT2XaRAS6cqmcEGctwuGZSctHB5cNZw5jFzcrDm1MhrUxyoeb86Qse4WEfy98zokKD89A7ga4UrV8CiNsutt",
  "key39": "2pkXyQVfQk3qyQrYNGbdha5oZYxAWZgpuJadh98YbXeSJ6rZGGmdV8qFjy6jXTXgnHdtJVzBBNJf9h8vKmURern6",
  "key40": "4xmmZwjW7AZZoT7tVPboTs2F5Yo7R5ofpAnbvwiiumh5vu3kWk9QopDzuLN3HJfA35kCgCU44zCgKh396Mifrxsi",
  "key41": "5xnmDz1jDsp1FTNfLDj3f9cb6yt3EEUwx6gJUHZz7uyXzMckyPNDCFemo8hzHQR5RGJBNifiCdM4NVZpXitUJkjH",
  "key42": "4NMHTk6JWmmk3EtxdYGJ2c4yznsv4sBGZXwr91LqUSpfJeZxftJhFdNs5U6e6xEX2FXiqiuH6KeuZZ7a2HcuJbRm",
  "key43": "3EJmCWUxdD2wqakrUNZLBW6KeLFkMa7tY9PRuY3PSdrvVNbksgp5FBLCPygR77j6eUa6f98Lf584kwG6yGMVKUv5"
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
