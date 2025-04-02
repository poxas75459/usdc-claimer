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
    "91uF7fssa62jLJCEfqcy5TYqiu87T3Hff4PDpB7qYbWGafFEtQhngUF1K1cXczZ1kqrwuPNA5zGsUWyotYKhHDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NwAe5jskfvPLLGkza6S6JcdnERArnx2XYUzLPPSL35yJgMcXJzfKjrXcfkCheSkZ2TWEKChLkvesrznkyCgo2ur",
  "key1": "4xPctA6eDRHmvixLDfX77Um7DsYaC7C4TDQUTuENjVDxDfjjcnztYVZUoPoXMChicduMKcisy1SM3Qt92pmm2NHf",
  "key2": "3mp4f29gSuv2HRYboeMF2vseJHTpQ6jVRPVq5UY2jwMyAqE7F6Mmh9FJ6wAvxkb9JW9U9ckuFG7E8G3P5ds5y6Ye",
  "key3": "2Jcv2oFBQnyj4zaaAjkJ2RLWkDto3chUdEcu5QEAoHdKTGYRjxjaGBPf9DjuKgD2jT84hCf7LtREoacjhMhY9RUo",
  "key4": "5Bx7RMGgiEG94uWmV1XkZWXry5QrMGKw1AbrHF6BCFKknqesjnuL1oFbzfJYVAFZ6p1FpTmHS3tnFGZ8PTEbmGn7",
  "key5": "48brJkFkfV6aiZ3vQznigCRYupECUjfZGcENSRgmsimEMCu4UNjdcStiEzd8HSSCUYDfokrsCqTxN9xYkKHfnews",
  "key6": "5UvzYNnB131z4sRP44iifS3KCRAnPiw35iFu7YACSupgsA3rB2t3T53Yej8aZmfkeyBiAwDMteHrMfjpi7FXw2am",
  "key7": "3GAi5Zwaf7MF3Y5Yg7rg3RCCpWUiZe7FNn4rxa3EFZaEVJbhiQJFmKfsBtiDSVWeBUhFC4eJDEr8rwca7s66Z7t5",
  "key8": "4H9bnk9EoJmvtbCkGbSCnRQBKG6kGUxtn1QVba4ZN47sEf2xSwh7SeyaQKtx6FUjRCRNjpR3jsAy6vL1jmXyoRfw",
  "key9": "2JDNLKmwGgbS6kLVrJy3wj847qpEmKr5n5DFTcdussVWDyXmKUWxyKrRSstyZqLvQTYT53aahrNMVs7iSdgkc8o6",
  "key10": "4r9XAeQr7kpQSULWAqZGFLFrwuxPS6fMw2MM5dWuJb6SXk756SRqSohAVSW7kU2KUEcyBVkajZamcdk9U6dGVzbt",
  "key11": "2o624Cjb7phtqBgexYfey3ZYvWpN6gEE8J25vPf3foAA4HgzvKkDEbG1BDqS3qfgV7eoa2pVjrnBmnr3EUB8DMea",
  "key12": "34wMd9kFm2xjb2Jps5CX1i5NDqNBFNucjPgjV5fSmy4b5tvhDUFE3V6k3tTd8Kn2beUK2UU25ZTieRmaEvqbdU8w",
  "key13": "4gBbErVmJqWoFSRUxemJLuhsHSAQABNQG1KKQYqnXctnNom1Tq17HoWAr9A4V32acjGU9kRLbeSjTPnLqYVb8sYa",
  "key14": "5iUyZdEbNSQXE9WCp7Xm9rAQqg5JUoycYCfkSkb5eG43hk3cpGJ29ZmH7QYKtWiGPdtsLEJv1GhEr61tsLknD6Pm",
  "key15": "54Jxo6E8vuQHc2J4MkveyYHp7RkgMvvMchZyV7JmkCUunRStBvoRoAyAmG4a5DcF9TJN7rznMaMv7FcPs2rEk7bc",
  "key16": "3XrJ1Y3r7tfgn8zEg9xDDg6LjrLbojkBvfVzyNkiigayXkg5T4AK3xFhkUF49T2pwDMAKq1RRG9AdzmPt7EPJhAu",
  "key17": "5maoYg4LPeWk7hMe4NiYYW3JYWwKnfB5gD3iv1vXhWYnGaN9SvRzUDagqRKzNMucSPLSDsuUM642VzJjopCgnZq",
  "key18": "4P2daFvQX1N2MndRoLFr1ABR7rbDYQmFAP9NjMccmoVNxfRyKtFwthwANUagW1fvrgDvh9pXxB7wdVB43HeBcZz5",
  "key19": "3PQNH9hgoy3C4gv4JzhhU6Y4MgJc7J76pvSW8X9sR2wD1n6uA8YCWxTNEvsf6AhaEFeZYKVivn4GHyPd67MZwPJu",
  "key20": "qe5oxEQvksLEfPF4JS2hHT3ApH2AgiHepSd8xVgnj2mZx8GB2kPvP7FuejnbTQhvT63d9gU83ADQ37aa3t6PsDL",
  "key21": "2crMUS5DrUy8mzrH9QQTWpax7b7XXyTm4AM1HePE26nHTjHWUieL5XKJFzKnJ15eWZ2g3UdWJvQrpu9exA3nd3k6",
  "key22": "2v5JCewGCRCiovAfg5VJcy25CfhAKgdeif7SPz32HWWEA8wHkYoPKPvCL6f7aSseay1gnZ7KnUZJNViPLhmc2YXo",
  "key23": "3K85dyQ2Efx6M6GJc4Dn5mT4K2HLyELvJTyg4wzuAzaNs9KGGf7WJrcFdksyh1tQ85goQVgpDHBxG3zgYmLbXyV4",
  "key24": "3SMPmmko3NdB6TEKcxYdU65SLyxHjfCsXW7NtcrNA4id1mnGbrBSWoDCULY6Eez82zAQahNVCz1gseKFyUFWJzKH",
  "key25": "CzXnqshAET6akDUynHcdKJRgKMrEmMiTG98AtRmekexGtrzCwigCY9e8FMuWruQcrmpDpbJtsBFCz38Qtp4k6mM",
  "key26": "27mGwnFzgBbuofNSrjLhefP8XGHqQC9SJCf4VENmJ8LCL2ga92RyjkKvvwr4gAUHGhccmaHDnmTW2qJA1hvkYidd",
  "key27": "3nLdPd9pa23d3cv7WnikfQitqLUyXjwpGVGGfRgva1vweA1WZEWQ4gfU3Kk9zdFbaq8aibsjQRNzoS39W5KbvKXp",
  "key28": "57ZM8Smzo7osxsgSiQfC6RdQrcJ1RB8ofgSaqgXvMbZxX576EVaSAxyXY4BSeC22PPo91uWGAGnRYy2rVv7MZj7m",
  "key29": "21tnLfYWhvPTof2CXSGUsNwUnP8DXjdwPNsEGKmGawMXYqkpayaUy8BLYtR4YBH4M38UxXN6VHA6kjLZpU38CVdT",
  "key30": "94uXmcGbztpDJT8EQBZRN7KDkjpiggNVUjbrSpUPQFXTVkLWrzmE1bdJYPYZEBRJtX5Jaqbs1uAqBeTPAYE3PG3",
  "key31": "5GXBJF64kah7gNro26RcJAKkCUmTbuMzYz8iA68cSEhZRHzfwYnuSfHFZt9h3if9Y5c5jprxLcJBfEdtamtCGtdZ",
  "key32": "61Ght8s3PnhN5T5XgTsSTZREjk4U1vQ1wbpqmwkf4cwm2iuXNM9Qdihm7jib6vs9VqWF8Nkv7gJ5FqcfTefZMbEo",
  "key33": "483FNs9Cm5TjoW5d1hpCeGQmfjit6fMMKzEJFcnZXGzUtqFKt7B98cT7Xw3ZdMCbDeGdSfGfcKhd1Hxi8XBHoQgr",
  "key34": "5VfisBMyG6j7Xg65p1YidzaTjrK2qBpNKEkU8oKs9F2yMfYi1nesubkdTs4GL4PUvQgop6QBtAXXw1kWL5TsjdiW"
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
