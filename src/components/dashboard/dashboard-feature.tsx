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
    "3rZBNcHmSCG5rcG7uGJ778d2KXARwi1RfxdbdT8uetqHamFWvzjeDCA5WuoKmeg6LqDCq2y68emYKYoZrmmutpvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mfeMPiTuHLeLQCiji58k8GWrdra4pb6ff8QhY3u1n5dd45ViM7meH9yPrkHAweE2WDpW37hWHebEaqgBswrtSmP",
  "key1": "YQwKVnn9cAUPuxRDi3LFsNkBZNLLZ7iL4ngirFm2JZJYdKtcX8fVNFt4taUZRwGsoN9W9byUxUsWBB3n8Re6jNy",
  "key2": "5ZpeJXU1MfC3kYey1u9EHKYBJGy2MZWadTPXUEiJMFNGJJFe6d2mf3SgcS9AJeUxoWBPJboBygaDSX43gzXF75ca",
  "key3": "5Z7jfsV8LtejdnVhj2D2zYpDjDRdsyvnQUWWR8RBZ6uDAt81DsFRJvjMMqNzuWsG5PY6og74DYHRaAGqhd13qUEc",
  "key4": "4XMUkx6W3qbpyKY2k6RvRYtVHABfSba4ognqrhv7o1rPLFUs1LvCVubWDYNCETjF8NwsZwDD9BSxUuRQfY2WZpVZ",
  "key5": "3Ny1T9sbekjgaYn1vWbqxbWistWnnrhFBwkU3JAqSWdsDCknnMRDN3KuspXVkZXri6RNW99kDoaPQgYoLJybJ9Rf",
  "key6": "2xeHoM1ubtQucyFX7oq3PtYa81cqmjwRwnGghfmoji2hxrgpytK5wH9QRVaD23JH4qVSpXv9TfD7NwHhZUjBZJC7",
  "key7": "4XSDuNMZHTLFAUpqxKNnESeh9ebfmuzs2xnmT7azzAcBzJdiaaoApK42kXyZweHBGq8HxAKF1W8KqFVde1iCdauW",
  "key8": "ubFH7drFBdfgTRJ1VDk21d46JEoE6JE9pqdaHSm7wHmJ6hK4mjQbtJj6sjNfgawXbKcaCeFFRmcjzx4M3cEDaaZ",
  "key9": "4RcWPfcTKymKAEBm5oZuvmJ3AquPKP1tMsBHsyXnidt4cdH5K7oPJ68YZn3xcatoYRaXq4RLCYJ6uG7TGiBT8pu3",
  "key10": "29P4WJoNuTpk1CNtC5TVW4wcH68BsedjdEUfmgwficJfANLWMXWQaAU1eu9jnywzQ9CfpTLXvJzbDJMWsFBEfQBH",
  "key11": "4LjBdTdFL2uYHeJ7eMyrj9JLu4wFfgosG2QwKi4voefvJYjMn3MC9Qy95Z5W4M8urG4bCXGc8EKYoUXMrgr9AUTB",
  "key12": "4seSGfGaetL5rs6gMvvSbxScYRe6654Lnh2VxVtWcwWKhLYn2uezd189WANkxWUx2aMYH3UcNfzW8cetQBbdNjCx",
  "key13": "64iEw3ABjVRa7Xmat9p3WSwmgYFJRmFsjTVnAnWLbMsCJm4uFMyD5AWMHAG7GpdYdUCxAgTCif5EeDiLVCHkXAc",
  "key14": "3RSSc8KsUDfPzHUvUbZpK7CtfYD6AWZzgjVmaaH66FQdEX4JZuY9ZaW7Ut4xzfkGeF5eF2RdLrERR9voWycnAF8j",
  "key15": "23tc2u1eKK3R9rEDX7XK58N5xkHiuhMWzi9jFuHZsbJhi9pVXZZcAZz6k95gocw2W4xxwAGcVukw3seWnqAwbqmD",
  "key16": "2YzSou1CWR9wjBVw1Pgr9he3o8gGDjkkdutwRtDtLdetpkJVQRvSXGKxCdbEbQPDUrz26NSWEX8MLmU4W4Vo4fmz",
  "key17": "e1YzyzXzJuL83xDEzXs1CxB6Kn4BiZm9wNjqLSFM3Ykchx3rurjscFHEwQ34QgjtqYyoRVEfygafM9YEYgiJv9p",
  "key18": "5UhRawMzoQap5hYPMYcYK1c6sKFTsymugV9jUKoGncafj6K9V9qBS8QV2RrTAcenQ2NB4sscU9DEkYwbWK3uM6zq",
  "key19": "5CNUNCi2xQeN9kJkMU24Aqxn21Q7fUiFhFEA2uK5Au6FMa7nb3abQMnvUKcpJPZLxeZR9C2gfhF2PGspRqdkzb3Q",
  "key20": "KZ7LRArH89hsz3qazGnw33oBrGiy7DHSxVFysZjGU1UkVcE877oTbSc4cosejuZUGqPDofntrLN3X44VVkhUtav",
  "key21": "4voCe7j3J5a13GeXGM7NKskGxQcPnWVqJBr6mxZXtgZbe6b952zpZMjmkAABuVwDmHzW7nVuQqsb8ccuB8wHnXX6",
  "key22": "4mGnrSjC3NCUdugQyPZw4CGGL2auJ75LkkSNRvHTpUH4NzwuSmyX2cVCq6Z3pms12iSaSuNF31WcFe1cQBsns9yE",
  "key23": "VnFym8bTuYJQxZRJdjMiXoe1Pk1mvxD4ox4XGD6Tf1GiUjjNqLXF4L7hFwKpteUJENV8es93HNvgVDrM4YCbVSd",
  "key24": "4KEvQtEgwofJ4UzMrLpjEkriE2V5yfAEx4EK9KoGBTdM2wta4wQme5qg6mu1Fia85bu5Q2TW9ahtEWBsdYSoubAX",
  "key25": "4xp9gbA5RRDn3DrujetJfwx6XURymyw6aGWodVquRaDT1qq4Fn67utkPQXY2uREH9ao8dAahi486iMc9HPdejpTB",
  "key26": "38af77g41EG9SneTySaD4TkPMUhsovCZa9PohzDe97JQ69kSFmB9hynH7s4FAmUbTsXYpt8TgNq2a444nLi9BYbN",
  "key27": "5qiG8GzhSNDCajBJeXX3FGKd4cNjTdsdPT3Tf837K65rUe1BrSNkUtDXbJBt1FDaG2RiD1pG1PvdWi6bzSRwb82R",
  "key28": "3uHd4iMVNhML2md9fJ1XpkUTV6r5XQDuawGNpJZ5TBMisgRxoncnvPPMYwiB9gi3uYUgyDv5cfcqxTQ6BnrFAVZJ",
  "key29": "3M8dkXUDuC8JhdWTDFAc18ru7WEZxWjTpvaXycLWJeuVCFejTXRSnjMUjzbDeRt5vNx2NW1hJ8KDZW1vsSwttxBR",
  "key30": "2GRBThVTnvoGYg3VAuwNaABX1fP8UA5yr9JQfbQPqpRaPnFF5GKc9mF6BvpkuHucGVCvyg3SGtJnSwx31U7jx3D",
  "key31": "3XhCFntUxNfKg7HHJdtumbSwXq6bj13nTnhvWNx67bmDvGLRsDhiKRfgU3CtQXbAn5DU1KDYH3G8d6YiWgYETZf5"
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
