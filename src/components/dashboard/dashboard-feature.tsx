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
    "5bmf1CtiVhaLBUfEc8gAhEdY1mC46kFnJTK1gHSpidY2gLfiF218tEF2Rmy7qHB7UeC4suMANXYNpMm3BZ37LjKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFV3bK37DPKTj5Y41hPxmVu44ueYdXwfEP9JBtpauRiSvSPgxsKm11nQ16kc6qh7T7Ez1QK4VgVNxsPUcJmBtjp",
  "key1": "3McndbF75uvr6TuhcEbdGLHZ1jde9bhSQiQfpGp8eH8AGdchVvkbJxX5gnFjSgFKNEaZxUcMepc43wk29k519YFY",
  "key2": "5mqDkLwKoCepKzMwiymmhKgTJTT5vk6QaMkzsUcj5WnVVcZTtHrkuBC5dwvdqbbxFGsvDt3jNPoUjK1HAuqvecHv",
  "key3": "39gxSknYihaFC1JmyBHNWEQLJ5u1UooPTn1jpFk8L1C1pNrGktboiQMLiDQifeY8SBbvKqPja6CjySmnYtMsDUL8",
  "key4": "65kfv4d1g9RXRCgRZDJ83evJeTYym1JJPPJZa18zWtbQdWwakFDAYyNeiRzhhajArjchLHVYsRqj13x1nhpr6nQD",
  "key5": "4wHYz34cG6VYte6zkPVPvz7HAPK62b3km6DwcJEejZaGASvQ233yDbwhFtp38Yf2oR8jRWr12VctcGxmCHw9a9N",
  "key6": "22xXrYs4hpsK235wxaR1SyngPkTksod8DG8HsoDiJz59ng8zBgvZvDWA2AvDpBZncpYTHiL9wYFZLSrx8qgQpaaZ",
  "key7": "5SVgZLvqqWp7NKnChYYV9jrnHWbRv3nEwkPBhFHCC5cZUvsaSxJKjro3hdP4HrScu32EA19rJXhYZLP7mKXxmh39",
  "key8": "4zyT88SM5srP3GCyvL9AeHW7hxyUFo4TpYwZXusz8M2ycQiTfWxVKvJmCix4Z4jL41GX6qiUMh7exbS8nUHNRGXR",
  "key9": "2Y1DEQ1vLFbr4py7AwNCmvKwXVRbE1rXfFyruaYCNrFmosfBFWYExaqMSjLCj7sPbQParrmRtrgj53EqC8WTPzzF",
  "key10": "2Y8PBa668K2hN9FFyP1WySqgt6amFi2EJ5Hmhb5ZoqfzKeNVTXzM3Xbd1HcR31CNNRUybH8fRD4wCC7DwbspZC2F",
  "key11": "KC1NPMrUUJukyyJmuRfDZCShSr6NUvXZdFEQgZgP9QL1Ybhh9WZSNav3BHMZyXfjGWLXPptQKBUd77rW91uauCy",
  "key12": "5LJEdQ8ABoYtZaRfYHw5hnWzDQMWe6BeLFr6UYFh4QjuN9LRkuyzfr7DYXXTqCpjotL8xfK5sRi53BUBasAYRb3i",
  "key13": "fXZ9KFafJyREWkmuWgyXKJrReozkcA4av9BX9cJcHGfKUtz4u3Tkee5J8UXsy5BPHGTYKb66ZJbj2U1ykLfwRqr",
  "key14": "c7usr6vUaiq3aHHEECE23LjFN6VofRpP1d3ZZC5hm2bCFnWTen5UMTct8qNMzuw7ae17Pmy86czT5nSSMLgB1nH",
  "key15": "U9kwNnwRzq1R61JzCEgHkU16U4tR598FCeiB5Sk7qRg6eBKqKvJNAeSgVhKGTPu1HSRqSsG3tS8L63EtNqwkegJ",
  "key16": "o2UizAZHjBL1MfGFczXrn1rbL55EZCbzy3WjbK791C2t5FUiEdJQ4GqJYAF6DutmFb71s6VaH9irwxjDseVbRDj",
  "key17": "56tVrCyryEs7ofkPSnoycH9wo373HmVxmJYjF8W4FVz8eYaEGHKbVQ7xCvc2FcwvgYycvM5tRyhp9BMA6KsJ3cig",
  "key18": "4r4RPkwgE5VgkG9ZsiKHwFPiRUyhkz8ctJp2NWDrAgvaYxgt37uyE5XkAMDyRsTsGJsJCGSdSyVuxrmi7L32MmJ4",
  "key19": "3J6fRHmkE4ML2oamNF3TD39axyt9wAhboA4UaQvNGYjR2bf9QXBygV73LQ5uJomWbJxEMAhbEfEfGEXPufcDgEdj",
  "key20": "4M9orRaUosPPu9AJfnaNPhZzffojzaWBZG9jXLWJneTBayfr2WXot1ubtr9Da8Q59buUnZDBztv4o4beH6utcTYZ",
  "key21": "4FB97Q1nei9tMWfUoqVxRjGcWUNE1vaz3g5S4ANqTrzJrrhfjj1iWo5K7LYYiMpmSQzu5qYkEGwzAGPjsxpRtB7h",
  "key22": "49ktFZRU2gYovanUhHqQuDCgRUkkcPdFriQ89AcRv8n9cUpMuESH5kkp5awdbntDDLXVxZjVdLPdtpWJXdXkLX1M",
  "key23": "6WCwK5sJ4G9hbGP4o52jNvmxgUoEthQWwGYv2J1f94n5YKGUW8L869Y5oiKdGXSraJV3VQYSpEAL8Xr2xNXGn5F",
  "key24": "411i3fso41dbfFJbNbo1QxGunAWpTRSRA3ZfoZoiZivKqHncYyMFYFWjg5WL7NTDVG2QrP7qVP2AB4dxyuRLhW5v",
  "key25": "AMBsJeDVyaaEzw396yHgfyr31djNSFTPqNWm7jGmvGSeMwrwxTjE4qteRhBBoNuZH4ivWqHHjSLFY8urkTAuwmD",
  "key26": "2J8mgNmCrXUdMavqjFKcrVPikBtFDf339qUXDJwnygDNp8NKSeywM2aW44vc4d44TpAKf2VqkSZ7AmKpFM6jZZtD",
  "key27": "Hafgv8q9p6ajDSkfXgxiaWzXXQfPCDuAr3KnLAqNaXvFbLKyVBVkTScCsrv17LLeJe15SwGw8cKMQHgdnW68CGU",
  "key28": "4hBBWYm95F7Wb4u5QnFHmJChMy5A24amvzrEoBkYWtJbre67SsCb2q49faCiALKQfoMPDPFndsbdYhMyDh3To95A",
  "key29": "4E1HwYHBKtazAYE3QFPhKjh4vt2XxLNW4xmdwpPc6pSy6HqJ2PHf1qZwxEdrnB5KAyM6kA4gQ4RezBCV3Ws5dYym",
  "key30": "2BWX2ArMD96CHR5KQ5eFbmk9m9wJXZNz6k52GhfMVV6FZboGFZUeFZWrS7TioSnYbHBtkarS9h7215DULufAjR9H",
  "key31": "39HgYExEmXNcaDdf8EJ7tnbUB9Ws3gtJydLeGPPhoet4pzxVUSuZZS8bECcQoDgEqRvhhURWFSGCcbCbdEnm7s67",
  "key32": "3Lq4jP58N3udA9bFUvPRZNPDVR41aop1iVnmg7bRFGRZDWnWBaDCtE2aMSHuRaqwX4o8dZNWxayuJgZvdQfZXVXQ",
  "key33": "4voerD3cn9HEMZoyzHDpmQFHU3kZz6gQ3YniyDiubfjKijq7B5X5C3cjSk774PtX6jTidTFQqQTFJ7b4zn1tmo4C",
  "key34": "2V5jM8Gk9KTTLcWqmAtYMq79PxJ86XqM41X7qJv816EF3vYMtPX3rc48YfDshgQhk8bi2gHn4NjcbxWuyrFRUsdz",
  "key35": "3vWupdMcEmqzEHE35kcxAhyYRnFYbpjtwWWyUioVoFgQC6gfiefVUBpYUH9LNp7sSH8Dhfye5VKe5RpsdrWbpjK5",
  "key36": "47AvSah5ZW2VKDxxXCzVCyrHjUmgx4gsnY7Eizq5V92PUyeaHpUe7us96znNjWJBbWLYJSh8bKfKrGkUHLjag57G",
  "key37": "5ukfEjgFZN9S9jzohkH6wptkzJiRQX1qwR5C5gb1Ed9reUAXsovEWHZq56d5fxcnyRrngP2QWFGjPRBSvGidrtdA",
  "key38": "3aN3DEXZ75PpDiadG4tkkLTapw1jaJtVedvwvqYCvxv2U782HsHB7pfuyUoa5LkJeQy9FSUGHawWtiQS2nzrvGTs"
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
