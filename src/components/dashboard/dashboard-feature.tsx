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
    "4MH1HDJ97HyQTP5FqBGgvkjgdq515kuAPFMR6Xn4pQB79rd3dCUqRLAEbLVUjwHQipDQ7rDvkDqw8ERo1kKmwjqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VrGyG8jcoFt51q655tv9F6215vzc9yNR9RtFtyokJduFBywL7NQRFxPr8fuzbP89cVTtJbmNsie6GY7jzUW8WGh",
  "key1": "i3xwF61rfKiF5ZWQdW4aRdmwyM6b3EmkAAy711Uf138LuRwzPPfjTWxSrNcADSgSzKTrJdb4ZR64TsnHsybod2b",
  "key2": "3yHsfsQjmsKHQJcaX7X4rwQ71ybXpVsWpS3KsvHzx5g89jS2oKyfsbk9KPhs6QLVGSGU8qacmP3WiPGtfbsFbrxk",
  "key3": "3DL5jdJcPNEjH7Jc8A46i3fXvXFZ4mVMLFFZaqJxYEz1EacDAQLuV6qxYWmGvKiTVqCrWNMR8Fk1EeCJHSnAx2VN",
  "key4": "3eAYU91my885WR3RsJwMc3JfooMyN2K4nJd45dT11nvLuiUxV6pVhWErBwjsb9UnrXXzrqxzNrFtignrEH4jiLYA",
  "key5": "2wAb8gaTZXS5T4TqVVT5Yb93nEBKeLhCVBporfofvuVj8Bk3eEEF51mDpezb1gVq22NzYWkwodviNKsvnniwh3iW",
  "key6": "4VojnU99jY2R2oq6KwHVzhE93yXU5d1e3rrVBURbuebd95o7AAeUZs6U439MTnbHvV9dK8S4b79srhcjkq1tSVTh",
  "key7": "3y6Ug67KZYCtnyBfmMFTttTHVbG8psRdLHh3KHdpKyXNkkLGJv68hxGCswr8o878wwD6cPUiwC19KtZ4Uz2bgwgB",
  "key8": "5oJCUtZ9Dktwbe2KTzJVCYEYMPgEEqVLjNEmpsYFkXXrk7iYxhtBrkhtdhbsyugK4UPLwfE6Mw8ceFTFanueNPT7",
  "key9": "5L3pmceVcmEwDoLsocvfSGcUNvTuCjftvAdUMKoZj1qaGJts5xzMNAYkkTABxeegTChjtAqcnvXhMJ8HM7PU7dQy",
  "key10": "4MaDWmShKU6qjGXXCHx4TN1NeCs96w9sC62HYYkmj3GXgutRwJw9hhRBnyKUpFKVD25BXmNMzDyu7LY8qvpy6sDT",
  "key11": "49huGEaBaH1pmpEwr8o74F1GsVvvZJrLMuRBfydh2EDDefSUwr9AvWNZeTuzdnVgNjzyfyrN7Pj8ymYUs4zrWZh2",
  "key12": "5u9jduN3ScYP72kbEsvDowK2XPipJHC8J9er9YyHMRPC9kmqz7P5ZAmXzr5RM4j8NY1AinbFxCLBzFfVKYv55y2V",
  "key13": "79gsBtgseeqeSSEUpxf75N2v9UQdELGKdZQFyP15TsL2y4HwoRxXWp2nLtoa2c5jcFXxDhbT86DARJY2kxZvZvo",
  "key14": "7eTnnpXvqyxkFxx96ynN1PFFncDnwPuHGpurxiokBybMnSfb7sRAM9bHSdPCFj2dQJ8SkH7yrgqhdjyP4Ffoizx",
  "key15": "2RK3pHC13Kpo87pabYJd7NRGFAcTy9Q6igEebKGRbj3yX9jkfAYg8toNuX7en6k18LPDGnc43YSgqjBWWjPMAUD8",
  "key16": "2BgDrY5k24c15yzAGBujmbyQMUay4L7pt4ziEGsLFGMF5cQsE3Zm3d8qG4U1CY9tcby52M1SrBVvTvBpcF21tCA7",
  "key17": "46SKwSgHc8t7imkHD9f2CCN2dbP3yk1cFedY1uA63V3giDfreR5bNyPmF7yDJqBuuEtR634943t2moJMx1Q9AuSn",
  "key18": "4Hr45DSXwLWn3AJdSPFX9rMw5EQH23hudgYEZC3HKQi1RWXoxYLfo4BpMRaZVxPksGu1CQazgdxGqYkw3edPPWns",
  "key19": "8Pi5CeLrqfF3764X16kRj48cGboeJksdseyH1dUYNwYU2Ra1CsDJ4hgTg2GC1as7rGKzH3UTsyR2sDp5k6aQzRm",
  "key20": "2SsFXCbjfvmxFYfH8PYbWKUXBTns7XsdtK57Cbav5cXrfUtpnqHzvx3pRitKq4KfbKu5n13ifJZ9Xx7FjBqZG6Tn",
  "key21": "29gVnHyaeeDtpqyWAZgdzcn1TJ44szsChZcwgyeifros8GinYjxs7c8QkXqL5AtfDtK6WF9mnQDY5qXpVAKW62EL",
  "key22": "AseiiJ2yY9iAV25GhQhtrWfkbwc6hcLVtkLfKncS7PKGDjK5WigeQhpbj3bg95oQjn1rYXhLDF6MK8aJesjLWco",
  "key23": "2hbF8REV1cPgubyJmpRCHqPRiGWQfYsvk3LFrNAs9kK387wj8XVujoqGo7HE3Av4tU297o67StzLH92XwhuRnthq",
  "key24": "judkPRBHPm58wFqcikFcvPStpsHPd2vy2yKug3doQAZ3pQquRDKAwPW3XWEdbNCayTjRenp3cuTHZTsdhQEtaWA",
  "key25": "M33JofLjTM2cQHACXkz3VZbaRt6EeRZ1jzGPWQS6rCGDutUApxhMAniPbgjpVkS5zvgJxM9N1TPcCZ9Pks8H8VY",
  "key26": "2NumW5B2yhVpu3hZaYDhAYUjDNwTwjnGhZguKGaeCBZrYXx6bnvMjR3mN1jT8qhEb2DmvMM25YEWzBt9rMReB9sG",
  "key27": "2KrAttEy7gH1tNkTyvp6gYbnoCnQZ1Q4HfrLbdsAqhNvYrEXJYACA8cHUwzhLUvmaU93BoXj8C3QXr8sQnowMvCv",
  "key28": "4gfdpx5518VP53yakgETtB4SbGxdJDSbM8xKxjyhJHwLMo8Qi1vKZTwnTtP8q7m8iGyo2Y2voKvytcaBxppPoA7k",
  "key29": "4U7XT7yNMgGK4fjqpnFk7mKxoHeAfToJqJxiSp9WrjS1kA3yuFSUWfs5vhWchFqUCFPLhmp8aZGcdZmKDU2A1SAe",
  "key30": "nbg3mRiRx2uMbJRp15MER9UcLSFt8imp7ZCBsQAJMDiwAACcnBTCypMrP2PJ7bUEjxCXeX9n4aPPchPgUwpB5V1",
  "key31": "4Ls5F3jmcra2rSu3wphdy5wAP6ZnPN7xGMiA8M5LakhFumeEBzZyHYp2VSbs9qkUZPZ1VFaysjwAyxic7UaMeSV",
  "key32": "2FRgJmEyySYKF4redKsk1AKUpvq4AR3nkST36KfpdwvN1JWjJrQXfE27m1kGMzUrRPETX2cTAqypZDhwrazcamhR",
  "key33": "5DLp1GACfxd4kpcbzirzCH4LkN2zs3VhKfjrhsYy4j5HgBE61HSp24uxn4SNqHKU5jvtfBUUf7Kq8js84yFv6HEE",
  "key34": "5ZsQx66Xvg3aLqz7ajz6Su1Ld1RM6hQcVzJB5pwQLm45pp8GUrwDD2UXih9YeA5ErG5Fn3ThjFYpzZzsvQYAjtda",
  "key35": "5dGWAxLoUNLw21PJToqcMEYq5QHzBckGG6ALtJoU2H4afkKfu6TPraGMMHQUuuTAYPuiPjtG7sXpcN8GDgbHfn9J",
  "key36": "KmrRvQYTCz49vrm2GWeDD2TsWo2tXE1efn5QXkaM9GwGUDQgiQNC7hCBbUtQVpX7MzKxFJcjFWZtdhVbnxvFLLU",
  "key37": "9jUNw2LHQhMXjN94JFiQ416c8mBbZNktkfAJ6g4TKJzZYZMFc8gVoqGTtN1mMCMb1hRTFigEWoHidKyPutU7tUX",
  "key38": "5tPaKN3Z8ia9Ezeew47R9gehpwACmiuu68JxjPC1abNXKvWoq9Ygye3Zp4Q4xUjHzjBRKNsw14RY9BmB2HY1VTKD",
  "key39": "yriV5b9kzZw7oNoGVwM7hYyANjUm27SZ7jR39UwPX7ZsstvCeJcC8gmBProdkJi34qKDuCcLeK7LLkEHnZCC5N3",
  "key40": "3Uk68CEr1P5V72HVT1eA28ppm3ALFtzLXZs6jaSoTo1jzZFzivTDsKkbDkAmXBXbL61fA7mmY6bjLVLm8x3tJ1fZ"
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
