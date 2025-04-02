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
    "WkEZqhsfnzoaq4jEHfQgskmycaco9AWvreqpLfKrztBXrUu7UsTCVJ49Hn8qhkW8HJqdPeM3MozaqpAyLNWWK8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zz2aWZJGd9dn5D4opVenoAt8D2r8tfPPpzdTNSSwkdRW9vaLF5BioEjz8MKpm8wrvoLLBcWm8uWrVToiFDDXqjv",
  "key1": "4Wqpidotyc5acLHC4N9Wk5MTUFLm8Ags6rTF4Ey5zcsYogJiVayrnbfvEGasDcLMjGkrSTsWpvJZBrJ6G5rAWfqh",
  "key2": "5cFQut7ARBUyNycyh3m1hMdCf8NRfmTkSArRve9UdboaFJvCgGHwBsYWGfsGf9MVBeFhaYpkHQUxpR5kHSxyQVgs",
  "key3": "4iR994UmedDFPfJy2jTuPVhneEn5UqSkG8wNFgAyyfEiMngQ5MSTaaZKyMDoC4ov543NFooyxUYbkWGesEB8YFs7",
  "key4": "542jaAHPzKPPaMZKL1FSczSxVqiJFHaCQjAP1FL4oCQw2vuACdGLC2j8HiANEeP7XK1sfYQxomqgtUpqQwszjZj6",
  "key5": "25v6sRCzwgaFhUxUCX6Xvqc9LpRbeN5yn1TFpMmmENWX7YhGYLibUMLKqyZKjr6NoWtkkA7SmsKkAhQkHA5hLWx8",
  "key6": "2U1jApnq5kg56vUXWXVvbYMdujsPReieT9SA3go4jq7Z8EFLpL2GBJPzVHbVp6WbQkH4WmrwQNeU42PqqfwU7NYy",
  "key7": "2mjZZukdh7dWS7AaK1GmvDLx3bFXReqwAsnv9gQrG8bgnNKd6jFdAgceq1HUUUeph26wY9pZXQvUWLv1KogbgmoP",
  "key8": "3ZgQZqUvDHVLgxp7qy5yFn4WMUzu2rHBL1BgKPAmqx7VrCy9U1hLDZyRDHZCcKJTB8GczWVAN4r4DNcK2Y7xTTXE",
  "key9": "54zKhi6ZmYNXXoBVq6Hq86xAPkp44zXaTAK6V1D8gYRYT5qy8HXwi7arcCk5ssGGxokLHedQnFbxjgsTjhCieUnS",
  "key10": "3uVv2S8aV9XRLZZ5DobvVmaGjHdRVtKvWm4m88nGAxoX8ThWhvbMMCbejoM6x2MKFZnnSnGxf4LpsYF4EADz8VBA",
  "key11": "5foW3pzZQuFQQ1Z1eUkWqUtYiLUzpPF734ru3B38Mu7CSpiu8i8D2yS4CXWAjYngr2kj1Goh9or5eEUcJ59uUGbE",
  "key12": "4apfz1LifSeLok8QiyBspygxjV6H68PRZevcXj1nReEL3V6Xk2X5mvvgzLHtdwM9tGShPT3xXZUfC7vfvbbBV4Yv",
  "key13": "5WQZfNcrrTJkw4ughgnnumTNmu8T2Ux7AXinVDKByi8mTGH5U8dwkEYkthi622u1DNkkqbaUPT6C6Sbx3YST6jeQ",
  "key14": "5fsSyyTU64R7WHvdeeqXeTfGkxM9VopRTqoexKv2UsR4NBtVjh9CNtYsiFhafL6GBbCndZkh3CctR7vw9SFjzVM6",
  "key15": "5KkNYVadx2E1HvukFK25TE54e5dkm8WYD1TJrCyc9spNZ9sLSDPncxhQNz3qfmUmF8Foy361sXxdNYieh1wLCB57",
  "key16": "4DTLbGpzMw6bNPp28t2CLidWhS11sEewcbGDqVvQUfF4uiKHDuGiAQ4gd4Q7Yt1MdQjoYes4bZQBDnSV3cQuwE77",
  "key17": "4rTyRMKVcMRM8qBJbj1FBPFi1p5ZnnoJtK4jEHj3R2KxuaEVTpVBhQCepmxhaoq63tkW23pSJBzdLLMqCypnaJHd",
  "key18": "ioq3tcx49q7xJYayVWUM1FwdK7p69LfU4bpmp5uT2gru5Wb9V8vBCjqiPcN43hSZ6cjvri6PTuzfWTUzFuiYJBv",
  "key19": "5hRNsj129SGoFvmUNkAgmCBvRN86mB5i5Hjaw6nFbyiKBqwaCatHMdD5ETwLKQLGLMmM8fGx2rmCUzvfgvGaDgMz",
  "key20": "5xgf9hHAg9xgs68zkRfZmwG6ZU9o2XFBzWMYmrnXMBq4ALCRpoQM3CEARSCbVXR1gDvfZZqBypQK74b7GxQXTnAm",
  "key21": "3zEdk2CrV7qhbMBxdxx4E7J2JDFPh2Kvg6dXSgWyX7EbAtMvvKU6TnKsUegQvgJaM7VgFTfdcha9tPEykpoJLBud",
  "key22": "4fFFR4tFr1RSzCRmUpm76Ao1kB7niWqGNK2RYkihPfqyX7b8nGaFyBKAW9WG7qcfNXzRkqJN6M7XwE7CikZNnX39",
  "key23": "TT8THtugC4iXdmyvPTKmMBVGtnJynAx8WDBp24BpMmQ1QwwtJXsUjPR2JTYwQJiqWR8gSLAu9kPvVyVgPUsb56r",
  "key24": "bAGXaFj4evo6dph4TDWJBvzxrZymQHayeUVL9zfMPVj7e2YZzX3bCGpB1nK2GL9AupCr45QomqdRmnSFhWi82oc",
  "key25": "2gJ6QiHka5gzYKi4YR8gCcdUd3ZvmZ8cGWxrAquqjLVoUmNovcXhAa5Kej9T4mbLJqqqmizuW5bTViq9xbiEma2b",
  "key26": "rqZ1D8ZcbRVY93ynCiJBT6AXHfw2syJb2vrnvXxLh5hd4znk2iMxUnFJZBhDu41zvkqWCRKppnPpeVgRbRLKUCB",
  "key27": "2uR3rJ1uUJggmTRufWZbQ3JTioQuN6GawsA3FxwVeQs8QkZBKpTospnve3h2CBkTEY9AZkjnoeVwD7i58TgmX8N",
  "key28": "5kyLoc97JGYRHx8p1zXudb8oygMSifVsK3z2EKSa8fAornNCCMeMYnzmCk6AUCsxuv9HmQRH2HA26g2aagvXk1Br",
  "key29": "5BsxT15y4K91xB3r7teGtayGqXydJrNUuube8JPBRKC8dJL2kScSq9PrWreKo5amk7pzwU6u4QzzyZgDzMt8YABd",
  "key30": "5xy4m38C1hBtoceo3JBtdUakLVMDH2pLvM5WH7m1GGT3FN8cuJ9f6nTH9LaY9GEGe1fYiSffYayxtRbB2cKkNdNw"
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
