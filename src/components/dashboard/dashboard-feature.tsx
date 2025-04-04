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
    "4iCTtb6acbScG6yK3jZQYMpYRw3QbHKt8gctpUYT23UgApWzxthqDFMo2yjb5gnAyeS5VHrgDCkPjr1guxAx9rSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UuaXZLN8YiSmadrbqpiweNfZNWc4Skij3enhLQH8ci3pMWpYZunZVGAPqV6wJbYrVNka218HFz7ZTxDwzxs6bPb",
  "key1": "4C6fXe6sqj71yxDLjWd6YZfs1BvFaheuskJXmifJYnTZM7YBWCy8YMm8nZLtcrqREh94wxdJNDiGLW8oR2CgpQXr",
  "key2": "5HVJU9tNadvsMVWg5mgsjkiVtw9JqUEDp2GRj56tEjpynrMmFL3S2w4gVMMUVSUQe3JKLxotybC2CnbGfHJgrD1j",
  "key3": "3oxPXcJpTKNNKnCcJpYbQjKLV778gu8FSu2EMLb8xof3RtjNcWxjw2oADU5esCd8vQwJ2nf96kC1Tb1Z5MbmLuWs",
  "key4": "3ujMU8bEczJxNXF5ELuJuNhj7srjdgTN3kMsia2hZBAYa8LYwvBLtbwobRYLG6imjg6JiyhQ1fXtPFopWMGWVQ3B",
  "key5": "4PB1xXroEErAqPUp1pGCoCqtMRtpcucWsvAXsVQvZxHNg1eTwcdhsvCS2QLvhX8yJzfQDMjNmrqiaX9qzCDkRqnz",
  "key6": "5W8DBnhSw6YhnMcj4jMeGzVGahtGJKsvZHyhQ34AjPC2oLtQpz1bEtd7rbQynwZcWByu9BLpgh4SdA8pi651Bm58",
  "key7": "3QCTVDooRErZ7veBvHtvpqCvhjpcQqEQYm9TAqXJx2EF83aMvx5Hg7tuaE4eumGry88mxQgU8w9jFaM6yr5o49w6",
  "key8": "4akvDXgn49aNMBG6ei3epDbZBPeF79qziRQEMopoSvWpzMbPXMyppujbxEG2STPh8SmWXs5iMqXHnYRxcGNN1UfE",
  "key9": "orqXpSb4nZk6NXE73BTsnwAhNrqiwCYt5cVpPQncTpWNVjrkjWnqQ9KEUgRdS4vjR8N3ni5Sxb357QGjEjYQFSw",
  "key10": "n6rMZgj39Yi1TAs5bqWB3JoNfSksrp6AvLXjEdpCbqW9Rb9QnEVdPCgzY2dG3iQqFoBbYsCmWovAzoHi9dtqWMK",
  "key11": "2bjxVZMU8MnQ6qqsA1t4Vwc5TB7kAPJsLGHc3pWChP67PTe72Ma2xNLFnFMqgodyc52is4rEDrUqN49Ucf6jGdd8",
  "key12": "5ZWy4RDNP38mDShxFy91f7nW1mh6ZDgeBof5mRVw1qvtHNjgjKuNLbVXEyRauhQyzxsYV54zcLyfyKyypqDZRXJM",
  "key13": "FdAsXMmJYpMVff5crAscEBdsEzGpgxZoHdT4Ckxj7bDw1BBxjUuG9Prm1HYY3twejnzeQrEKH1UPhRfj1XLuWQB",
  "key14": "5kB3hMy3FugtyDAbVHyfFuXc1HG1CCQF7cxR63Rd9TwZaykYSPUrNorfH27VZmfKjzwYRYrv2ukLKACBrWeJFGe",
  "key15": "5oXTbipUtgthBe9uURHzc9UVQdo2zVyhsxfiEJRdaCYpmWEohKgMGVdNRQhbFbcboCR9QonxxHmBWB4wUhZCNvQ8",
  "key16": "4BidBNqCfthcAcyXBiamnJtSKXKXYiFcYYW9mzD4tKWu4o6f8goHSzDKmmJbdBHiJt4Jahg1jUbJhEGGqHB7GdN8",
  "key17": "2k1HhVi1GvNKQgnLwWfFtjUcpUzjuPHdtu3TgcuLcAyHMLnXEPCsHbTjQTsKvQu5MkeN6GsvsgPHjfdpUMVWLNmH",
  "key18": "2uqb4yLvGEwrsUvzfWNn7cWJdRJtvAuG5aXYtHMzYfSVS5aU3HetZ5X5ZWm35H7hvEvx6gWooV694vn9DANTXgBA",
  "key19": "5QmD9DF7Ve4tqFHZ3Viyiajpr2UDfch4KuhmNMgRXu4dm95dnfUUMM2ejxMbzxTaksHW1qATPuiqR1RLJcXE8pjR",
  "key20": "5fTUJyLiNnvqKxnNpxLwro2PLhxcoZJYKiw7ZxYbzKGuHW15VumXYpkBwjWQLceLxNMYggixC84kwjcRL2twxzFJ",
  "key21": "5V5McHxjwcqvfmmwa5tsVdKPznUME75T1tAW69UeeM7exa3p6bmDTMMSNdUnazpB2vn4888D2j3zCkEaP7MUGcbS",
  "key22": "27azMFWWaM5AaPkuXsreGzv5iUq3c26U8QiCyh2rXdSt6w9sjYupKtkxiyTSi4xuCdxLm4TUV8oVTtN11UmhKZ7q",
  "key23": "5uhpsUUJgkPHY84vUdfFhLtEh4XsLs3wJrdqQA1froB3Q5LSVZhmwQz77wzGXiE5MjggZXNZ4zTktV2UJJHdqQqP",
  "key24": "2J6ZwmSdYQNmpEB9WqX3KKmLBuum31FaPg11QEtd5THRHvh5iZkbdNZRn31Zogfx3tLcuMc2fzivjaHLm92pcM77",
  "key25": "36T963pCvBBCh7KcomDTRLnb7Vg4kCCCE7m4kqxJNjKNiCUZ6eKoojWFinr1YsUZED6yYvnoMQQUscyczLHnX4U3",
  "key26": "3adMiPXCw84dVoVZFpYnNXcZmHG4SjXm27huQXgpMtqKNWDkXaNhdzGsNcmraX63GNbjiU4TTDSsqBNqPZQXMED5",
  "key27": "4SmSQNzebmU5yDrVyGFsrUVkZ8uLYxKcixu9LJVFgpYodNP5DQtqxjPKDijWsVrgu28gd7UzcuUr8ZBfQvmHBrh2",
  "key28": "DcRg4LNjTeWo97eyuUv4AG5gf7p2dDTaKge2qn4gcnqpU3nUSDegw6Kk9ufQ1WFr4dqdzmNGeek8FYAikRGTUPY",
  "key29": "5EkEDpCJ88qxacTi2yKoTUXQCzHak3x6nwewcsxzBhKkt6n8YxpbYMtba7xgsVZX5VyTwRZsGdGjRgPQmaNK2g7X",
  "key30": "5TFESk6NE7VphsjTTdUjXjVeB2MB8oMRbJqV3rP2kVZscnFGAqp3QRM95pjHGRgR9WVdmuY4veYTvG3znzx42Ssk",
  "key31": "pRLhJHXnB8Ep9ehoeJzoHEshhX2xosGvsK6k1c2AKm7wn4ktJHCWrQuTam7EHG5KSghUG9p7iqx3RrS18XeUC6h",
  "key32": "2naEQMotgYUXTHGWarW2qHgTVCQqZgDgqTxePJ2jstwoG3oQACLkPGE9in8uk5DEYWRPafszT1jGA7p8HRYWcRfD",
  "key33": "FVVPQ9djAurKMdKokpknPhGiySceBrVgMD6MQBC9esV9xRE5U1ddavn2mPWWU5RP4aQ2jB7zgLHQu8e3N6sVfe7",
  "key34": "vkMhvVj39ZphdpxXJPPTG23pnEhwwtU1DAQd1rkpf7iTf3sJTZFKAAYP5DM6X2a7DqFzCJ2gjgzV72pqr5a6vxd",
  "key35": "65snnKwuy6Aj8d8HjD5B6Y6ttY8cbMtKMaNUHMKFKbvZ9KB78zmzi9XzfSBXzYcWqi3xUUo1FTQL6NZAUVug946h",
  "key36": "5qbWmQM2Y2o2QFYWMCt1z8VkooJKjLaxd1LGfVCRBe4CMpGfjnHJhN7XMuVQymM185z5aS3P1bXcu2FqUsvRkWfA",
  "key37": "3rYzck8FfgSc2QJtzfzvTbPMCezz1vdS9cVGwhbKfSQtHzncRsbZ5zZeCTdNAP7Y6tBe8uJsyzsziWeR4MBV3i8i",
  "key38": "5fVVSVc89qFCyvu9sF7p3Z8Pu1DZfCC5mpq8YKr48tnGsJPiEyB6svhdWVfy8d7Rs9dVjY3JdKrJwiVEh41cuC4t",
  "key39": "4auUEGG9NzuG32CFiNt723UcRZ3bPSbC6ad3mfXzeVqG6HU5UaiSzx54p5vnLgWcp9h1h7j64iWwiqbBujsJzgji",
  "key40": "3J6zJSkrDKzmEhobCTStBuk7TL6h2F7wnTCwZ6GZV9z7rQGvwgtJ9EhUJj8oPWRbLWNogqHjcF54F9U6XKVTfqno",
  "key41": "4jS7medfZdAYh3y3bpE4vJkQXnF1NqqCdQxF1gHcLShjCS48egJstCHuoqSi3mhQphkLPGYN46sg1vp1cabEgLnb",
  "key42": "5YSQpDB95RYpWa6dL2MuvsZwZLGiQ1tbbVBTPCmFuJQB58B2EfyzxNTu2j7jtkPjNPeLqAg8srXCRQ4RuVXXMzu7",
  "key43": "5WwExmU7hQuAS28VkhukwM8vR5ZVKrdBBAkQCyWnKLNkwSrgaLqZw5jSzvy6bd338JsNciC6prAwYmGUhyAbvmi4"
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
