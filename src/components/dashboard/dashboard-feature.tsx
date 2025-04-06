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
    "9wQCFAQYnoszEQmkK262a25sioTUYcuGuoQpCBN4k7k7WU2GxNUJBmvAd7vrPqpKQKXQ9UH4Caw6oGh3QFrqdNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXR7NKPAhjuGpGqgn79WwPtrfUmQt55PXkGey4dz8kSK21KZeuEZHvY98jWcRajYBA5MnExGuLSPZs3WKJYU82z",
  "key1": "5v1RejywG989CMnfEv4o49k2kSJEE56bf6QyCAh6Yo7yt1zdoxSUQ72N1RvtcKgDQhifjmhGUXHh3m1HDuEdkqVu",
  "key2": "4cQv8hUhc4aNLJrAM58MMgJBnnzpZDTeQETEw3Z7qe8nuQK5FWdHnVNJjhTpG6BjWsdnDApFspC692qXC6u6ELej",
  "key3": "4vYvTxiPk5EQgCb7CqjZBgQPNUb1qpxjDdzqW3RzeL3STcZg81Ex9KzdPMJSkrDrjXh9FkoQh36yLj4izXDcCzWA",
  "key4": "2jJx7vK9Cjy9CmGUXDxk6exk5JU98PTLkEZgXAkZnQwWQipvG7L7nWM8n99TN1iUGvqVRyutebsBshZxX57hug8g",
  "key5": "88hf7zFSAZ2BXhmdKjsLREQvfgm8mw1gSwcpwQyPgtjsbKePv1ZvMG36FWUNcB38qS7VLY4yTAtSDXViP9A6aLo",
  "key6": "5FRsYhZ9HaMCtvwbTDq6VqP6Jgiz7o3kxPGcVQGjmZwHhPAz4Fn5bKyzma846P8cGyjNCVdA7udYKQuv4a87CjXK",
  "key7": "5x9ch7EhJyapmZ6GTj7QgMtaAPHWXnM2savcrj6boG2jfYXw6eBgBESop4UDrf4y2yT3A8ZKJkbrffpauUMcAZGg",
  "key8": "438aRGkXLQuMsDFm4HzGj5yymx2u8onCuU7QtoNUAfkYkzxMWgzay6npbnaKw1PZ79uPB6CHLaaV8UrmU5rgYT3",
  "key9": "9AWLhDigB82AbDGkZfQmikoGnmEtkiEvXJ2QQfX1q3vitK55EaofCU2jd5rW7ChH3dhJJ6AY6xq678C84VEdh2W",
  "key10": "4DFGFhoLNuF8W9aLnfEKxZTPz9mfvvQA6LMP6KUycRh1dvr39qK5rH2u38ekMPHLoFKrRLUeuWTQxvbZTv5Wnrhr",
  "key11": "5UptKzf2rBq2hhyW53WEm8PDHXGyj1QXhEzoA5CjaYfRv3dynXCWNh59iC81vzqfBvoR4Q3drP6rfSiVQsJ2HsgC",
  "key12": "4KPjn1RGhNE25uZpQh2zgoyD6xUfP8szRkaPP6CFApNNGs1JQpoEfMwg8fbv4vikTPArJzseHVrt6vEbTqipdRdg",
  "key13": "3pTPQDshBaGegDhEP93Lg4jE69owuX1voyCZGtSUceY1QaxKXTY4S42rZhg14VimVX84up3Zxp5uWch4sNWGQj9o",
  "key14": "3pPpnkLXQrSL8aitFfNdhzEJoBwg9Tv7iYhYdVigdiTXtLAbNdS1bfVS67hxTZr2RSYGtYsPynSxWYhPCtjbrcWj",
  "key15": "2yryHeREMZtMv4nxqgaJzk1pHaEkcCj2Wr3fx2vUMWpbCQbVKJaE3cg9LzGshA9529KdtE5hJBtxw3wC29f12CEM",
  "key16": "2eRBZKebjBUCaPwX7qR5NVmDvqyNYjNFtRyDJXJdyvGZEX1L1HkNsMba9Dr6huqqVfuH5anFvbkAZ4YHKBdcHd4s",
  "key17": "3fDBd5Azuo5fJdua3gKBWs1bvXo99JD5QGUsu5W9hnqh1dptKKz9qfRkerEauqztF8uytho3FXjF6ai4PLrmNJ8Q",
  "key18": "4Q4Z6PrVcJvL3SnwV7j137cjWoU3W2Z2bug6Fzen4ZHmMHTkFCkBjkQw6Ms8LbdTQ4SpdQUNNFxZ2i1Pj2GhTQLh",
  "key19": "2aHnw1pGWvJUBWsSEpEP8XvUN64a9HCVUYXVfCFri5tCqS6fw4FNW9ZxE2nD1UVuyaGzNR1nAwHcJnV9UvXAd1Ez",
  "key20": "3FH9y5LX5Pk5YkLHbzYg7fv5EegDPQmya1riaWTM4LdtwcymDfQEjwzFN4X55zXqmUPx2sJmmC3Qsc7KhpX9bxCB",
  "key21": "55eCcTzu2PZ1bHe94MLr3nESGjCsx89Nevv7uuNT9wcGT6Jawqoyoy9ph3qCq8d49BXmGeUAzrRhXspE4b3XrchU",
  "key22": "n9ZmeP4cbXqABsTNaqZnL3ogRtcujRU6NcNGysQJ7YPVK53y7jBxuf13CVdtGpL9sspAjEeAnHrF7JcuXJ1Tj97",
  "key23": "5ZbMbognLy9KgePfnhLxPzduCChxYNwLiTCEWEiiemVdrddeaba4Br2tgwJssiLQniyEAk3rfVLZm7JwDhfTNCsu",
  "key24": "4hX9zQkaVgnBSk3tUZJpvdwHU4WtUw4EDSYmRadn7i3Dxm2hAzs1aGKpLpGg2nt15zEMugb4GLpxXT3rEGKgvcbg",
  "key25": "54AVVqS4byALbsD8mohDPxCVNoVM29KAgsS3GsnDSbRffdB6odU9Q6Xd87ktudg2HrAajFHxVXwijYPpsNEYfjeu",
  "key26": "31y7DxfxqRUdX2TP83Vtqw2jcUXqBa1Qwcs7BwfVGKrEPGYDNheZqXXQu5ChayjWeZc5vvQoHtDuV8ciWp6deEdP",
  "key27": "7CxUjrPR7REBuvefHMyGa31qRY7QBPzdm7M5bAJbQiwjr7q8m46qZRUtDkp9YuKj83TrCYgmZPFSQWVMeUq5NbL",
  "key28": "pkXKBQ9jcgkcrYRh9q6412dJ3rK8wAfgrJst8bvqYfcqbMFR56Bk15TsMPEFZAyBkZ8ESrjfqpS8Gxey2fZzEud",
  "key29": "3aMuUHotnHgF7ePBfiQTwno3y6G4bqbQUT7jdYqrNLqAU5gDFFuSmiVgYjPnykeSiedranvT5PWzngsLTDF9B7Ad",
  "key30": "ezJT6BDMAwS4NfgCreFi8R5EjTK6tRUnTBqEFFYUGAZ22bcY89YN41BgNH2zxQDALaQTn5nSS4qq2wB2VMYNq58",
  "key31": "5sZAm3vVpNEPuB68d945zSqKCNDqgSP7YgfSf5qWDPoFUAXqQFgy3MA7aCqQ2VRbpk9mhnTdpt2dHrTdYxaSSWYq",
  "key32": "4BcdwX5CPWYwA5FRZYThZR3Y2YGXEWfWHzUUVXHuTDbBkkUufNbwHCtzFcNtxsgFnD2HXPxCUrL75nogA2LvRMrJ",
  "key33": "YZySdSKGB2tjyBCuBKnPhpkHoU6DvBNPtCktm4V6cTZAGqFUY79kCJQkMB1AifdGe8nDAxB4AvYsfDi4ivrLoi7",
  "key34": "3iwxrQ27WvkjV5g3J768VCU4WiuXx3jna1X5DhDcSokEBTGfVdVV38oXMT67aQQAdYWX7d2mbpS3DoEMm5T3Z5Yh",
  "key35": "5g87jr7TQknXJJyKLbjPSL63ADMZKXyuMo9NgwzGbsFBgn8X4fGrX2RhZtbEPVDasEEPtPF2J7TjMNEp7fWFZcef",
  "key36": "Ndm6K7LyptST46UKfnNiw6FVSWcLimEgiwcJCSNb5E8PPoYBAYkSGUgCAuN2SgXNs4VBA6vdam9AKBdybo4y9Cs",
  "key37": "5kQPs45Uea5uCtCPs1kYhUsXB9EvcgfmGzUMVRnPZhHq8D7jvqmJQdm3McYBM3fT73dnqrxGyz6LCAp3827hV36a",
  "key38": "49AjtbWH5mKvjYWt2AcRBsxrgFY6Z1dncn51MDoP67YKiydtyitAZ7HfRqDHKKHXBhX32g3w2e32TpSJzRoxMCWH",
  "key39": "3uWe3m6jikfv51A429VkxxvQdHLo8vijpBPYRSzZdZca7GcpmrhRYQ2VTZ3WdgB3U2pRxGANjBVGcjo5mYG2MNpc",
  "key40": "325DRtSR572SF3JTo3rQtCSJuNfXHa78ze1UXaFmrUBJvE5MK63fs4cEfyJYdMBWG9Lb1RHETKCWweQQChGR3car",
  "key41": "2jEsTuBFXB2bWYzvyUbUvzhCYib7uu3JWbBhGecNyTeLLVP2fFbKCVk2TayDcqKwYGz7K4ZyFhs2wwBJHtpgBpc7",
  "key42": "5fRuKKDz4ww8tGPuTxLu7T9YrLiLQaMaK1WFCPoHf71Vxo7XcRjdGqB5cDBSFaTzZtByUvjSidpNHHSMGp6b8ehc"
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
