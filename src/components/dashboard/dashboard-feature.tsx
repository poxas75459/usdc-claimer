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
    "5KNZjY99sB9ZzBLf3fztwmVuNjtEMUQKJQW4bkLZha1A4yKr1Nsz5eAHQ6aGYYro3gy58FPPKffP485Aq6XRLwx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Tt4pUA66BCb6HfncYy63RdKkis3sycDkv2LvHAdWMKaPJFdAHA723kVRoaGfDy5q5D6RdydDhXNyji5raru7z9",
  "key1": "2WGbMR96oSP1z47RELNJpZmkZipKuJ9EQyvd5b1tVjVqek28u1EqjFCpdDa37BwJe1XYgFPJQg6NYsi8fbpLcFtf",
  "key2": "57i6SffcQABguDtfyLrXV4GVxQHHcsPRzmFYv5edowTn5gjqPtgNxB9kz67K36JemZdyXXAER1QM3bHQJcoSw3Zs",
  "key3": "65yMuxMSWNUtq3MNb98GzHCBgEhvLV22QR9Jxv2wzf3HtpdKY5gJ812GfWqHJSwVFZFnzznSGz1G7pH4gPzfYYtp",
  "key4": "2DwzxrBf68NKMVbn782EjGLYcw9zHPK2HUzcKe17hV1pmbApiHBsn89kGWGAVvsBbHYz2QnC23qYVeetUkUyq5D8",
  "key5": "46XqAvbqg4pf1jNmXPrtqRW5gNAkFcPL3PeJuZt42tmEiNAnmv5zrsXFdYMaoFMvC9SXtQ3PSPAFUrtvWB8BDUmQ",
  "key6": "3Pqa6aiEXPrDtcPrCyCrm6Ef3y8ocj7h7Be3ERgaNkjdSScGLDUf3muZGuhKBU9XPG3E6bnwz9Erz9Dj2AXus2NF",
  "key7": "5gK1TfVJm1a3qMr4KpUt3FCXnS6iaiBEjBbvErdehGLVfqjJKpzxafbdwL8banFECorE4q2aeyg1fwjgBmzWGwEi",
  "key8": "2uSxUTzEJLHjrpcN4n8KoTUw3rK9LMHKMuQ8nn6CSeJp1Mf9NMVgKRERUgQXWtS856jiJjj8BdT3ikRRQ9ncswHV",
  "key9": "5RhjT72apzSH16P4xDY18bT5jAJ2XYEPvUJs21p8oQJSV34umskRUDCTRTXSd6FUBHjdQ7FYaft4RPNoGpGAgFgW",
  "key10": "23nkVVDxsmBSSjZgAd4ubmc5prxQmmmB8yXK6MntoLFLghszbi813QmWyLUdmnRFSwv1VeL6vZVvx7Nr6f6VVZq1",
  "key11": "5sgerujXmPkwHUCNMQxEUEQkn6aTNpeuvdaS68cFKwDapeRkV2PJ5tZumFLDCtULb2u7wJrQzTCgq9xSVWje1YW2",
  "key12": "4q8VnUquDib4oHtEdxe3cycg8jbgULsBxFwqz8hHmF9LVBKhkwuA7A5CZPvifwMTUa2PLLfzKdWz6agErmazVS1Z",
  "key13": "2PFL9Eexz9f1azUiCZGbxi9przmCyM3VYfJ2x3vNPWx2d7xpdTCtuYDDkXB2hWoQVfbtx8iqJm8jGkaWiU3drP5K",
  "key14": "2iqvH5WmrbbTN7r1JbyvzXa6vwqf1VQgdZEBXjD5fWJHQUZ7gWbaG8inanUB8XPyvA33VeeFNRx2a1Y6op9aG7mf",
  "key15": "3HnNsZd8yuHP4g5QxeSBDGuHiBZtTS538UkyJrELd22DAFwBAGF6quZ12dsRheD1zBjvTXy5GkGGesHcAxJz31o9",
  "key16": "46aPCr7qyTEBibYAotHJDCPcvFVLnpT6fgdCKNbbzeRAtVnjDQEP899PqJTyn37mGDTPHa5Pbo7ZueSFNKXZBv9h",
  "key17": "2FknvrJrbv2X5DihoUChwvVVxSsf6jrZedaf8o53R6Jdt6kpYA8d3B5FGxNmpGG6sfnnLEm7ayp7xmswmjYLWZWy",
  "key18": "4sLpxLrSQvuLjAe8R7m1oGidUBqaKMXkSXEwPFYLv9uH1ryyLgQne8UTHu7x4LTh4cFFh82gZHGFmqY8BFzF1Egz",
  "key19": "2JXLsDpjfcgKzgyHLb714VJ6NtRYHgAWXG627x9VRubH6oQ4HHbx19W3NLNAMHUc6omAodY4e8KeMgP4ES5AiXzY",
  "key20": "Fz7zrruo5tE15AK9k6YQX3XooX5vgVriaPui44TY5TDEARiQzsCce7TKzoq2UnNVzy45YxnHbDnYjcj9jw5K9vY",
  "key21": "2dPL8XTwXp3e2mNAvKk3D5C9j3vk3oQvzsr2L3D7Ej3yrwfefeK8tPYUrL5maupdPzHjuCbsDVkyRf8pwJ9s6D41",
  "key22": "3Qp9CkQnpBpkbNkPyecmHPBdgLwyj2xEWt6f82oUvLUwiW5WXZGT94MFVskw3FAe5dxsG5ZhPmNvWzpRS254QVrV",
  "key23": "31jeBFVj9WipCVkmTKpTBcrqcGKYDDL12hNTHz8t1afRnGqiAx8W877Hc5gJFaqP4LD14BvqsBw9VzspkHowRkgd",
  "key24": "5CsHdDVZi6nScFdFhywahzSu3P8MBX5S8u5g9GCchNzvPpyn2SLdYFY4ceJH2KL8oV23yLRydQngXNfGJPek91UM",
  "key25": "eHS3xY8Jw3v6msdmC8Yap48YeKj3exDYcVQqy3LWMBXq9LxRUvranU7MRgMyxM9vseVfpLrvSbAegxU8iwPDUpB",
  "key26": "5XaiPGWpw85kBJfA7qZt5kNB6FVuUq5xfutywy9t5jBDfuEpd4vZpTWwLd7KcQ4Z9isTzUHzqf6qeWTe1d5MAoMy",
  "key27": "5X7o4VBPoyVdFYeHAoDLC3kv1K7shZESfjAGLGfsnz1wiCrq6CRxPL1HhiPiLtt2ZyJaepS6ZwkoR8ze5RYfJ4Xw",
  "key28": "5FKnicMjZmS5px5jWHhooxxcVsx8MT7BuVcTL1pHmPv6ZbYxDR2MaEiTJ5Y9snXrB6yzQqpGbBXut8pP7P7n5Ydp",
  "key29": "4EfeNNt8FN1z9UT23TvaCZ4PVZoXb2rSJw87eTWLTALhAURDjogUvEa3op27BsaYZbQZCK2Nn188rNWCZAG482Do",
  "key30": "3UmuLVBHxznS1ZF5deTsTfqhoimFv2Q4KvP1cW6aUJ3caaP4yt4vHUYLtyjAdZ2kT4qCTmceJmDjSqL1qKxq5KNe",
  "key31": "2cTh8DTaJyoHvmAmFsJssGJVJQFa8pdb6zMrA9rgEXv9fbkxtZ7RhMEMNwHhLWamiBa2pfPcbFajsfrv4UzYXAAP",
  "key32": "2F9r1DqvmoegyNeG6EVvWnRWD1N5CWetgqedGqvSFYpVbCNKgX8Vy2tTb6PbwKagSJFqb6x92fe5Ht5AqEJeWKXs",
  "key33": "ed7ywZWTYAsmU1BpoP2WJWgHzDScE6ASMK9MvFt1zpyiMmJyvX12eNk3H2pTmadTQ7oHjUrfxBXYczMXnGsqiXa",
  "key34": "y2wcN4KPMV1zdynDLRSeVTsLB9mqsEKwPgDVdeT7bD57N3aEY1zu7LnrKMsGhHYxoxRjxeqeyjUXjg3xqQ8vk97",
  "key35": "3aEUu2oW4QBcdSHhQAgqurkpqh8X5TCn3YdkgcCA8qWTDFyVdQimEz2EsEwy6zWVvA1FE6dEWCcuC3zYEnmLLZA8",
  "key36": "3sUTXp8HzWoeyvjPHKzzKnhfQbrNbbXkrSFLx8JKuTtqAaPE9x1Yk13Jdzh4rZVbsfWs59KwrvRmrLxAdTDNnuMf",
  "key37": "4hgaPnoPHg8VeRjNYszfnDkuDKe2c5S6NHmx5fd8jTEtRDGFMKzzScp1dNEHvAfmSzYYPuqWS93w4Z1M3hyM6Ca3"
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
