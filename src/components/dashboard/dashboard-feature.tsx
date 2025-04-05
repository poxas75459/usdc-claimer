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
    "4DqLKJcy9cPJbbvDAKxuuuwBgCE8wTdpcx6nErQm2S7oHkdyyMJ6xZGnAyAoxL7PK8cEPfZmK9mPJ918pJZDEMP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tSEzQ3eMwbevyq7BYjnJ1Q6oK9ZHKt3CQHmYfqPRAsPTiJsVxRwm8vmq2uHhd2zAzHudRnjGi2QhqagsRRUivEy",
  "key1": "3HkWb7ST8DUdo6eXXbERxyHeVQ6Xd7RVX6cL5srYwDtmrT8ktgasDU9pKxq4juUEktDPQsF7szxwTcnoVC9BvFL7",
  "key2": "3HJNZNwAtoMhA3Tdi8QZVkrcgkVBAUru5iftkaBLou5X22axDJtU9dyqq9PNojc65g22icFaAXB2DstGXehyphnp",
  "key3": "2V9WtrRsG9tif4afiZHC1iWiMSKhJesEzv7pf7jKEwbakDzDGbZuxffPKJ1VP1RjsNXApGJxXkgqMJk7WuV56y5z",
  "key4": "p2BgA4ZcmmdPxNivnS3zkei7EiHVvn2q7ybms4sKAfAjccybAUvuP6VuahDCwqAxGCWZUskjQJaeEcomoQojft8",
  "key5": "656Tpnh8tK7F6qG5RYCbMfsBf7jTsopE8RuGAQ8wxBzFQZgnMEZBRaNWYS7UUDvm4ZXG5REzAKKaqznY1qWTU4Ao",
  "key6": "5shDGM6sim22JFyzVnoQfCLSkExXaTEDZCeRC3LQ9ho6S6tBsfBaEY1y1ojJGq3NtgvWoJX1CNcFmWQPRimUaa9q",
  "key7": "RX1dk6tgJMW7yfatAghVALEtBResbZJMbMsd6PzcvhfJKP7etPpTdNU8jGtUVnmeX8NtVDa74TJbucphUFdZ3Nr",
  "key8": "CJWsZiKwy7mhoenPnaNqJKvQi7X8n9nQVd6Zuc7jRATuAeg3KmcPzAYpMRW9VZw6gWcCjVDkUY2D9DGGZN7Fo2t",
  "key9": "PkX3WfwPKp3cZT3zY6zTuaANT3BPxKMwAYkfBpcd4Gnzqgidjn46TzaGzyQ4W33TaKf9gLTnAA6CfcgeLVFBXLV",
  "key10": "671SCzVBwa3pVB28NFk4fMGMa8QohdYxM1dQGfqnwHbxiEKjRUbS72hs4kXmDphM2wLLHP6p3nnqtrkd2neG4RPs",
  "key11": "5cQgs2WShcDqKFvsVBhAxaiLnFdFMPwRVvekqY3zqfJX462QGgk5puVFXocyNY9czDGMAb1WPNzxc1ui7qVLNofb",
  "key12": "4mR3RTjzSVVCQYUadfzg2MeLVBCoQ2gSHJ4jdEXU4zJxCRochDssLrtFzzd5XR7SeFMHkgSQytrtzuZpaVnBQwQs",
  "key13": "5VSWZpVT1zKP6CV5PikWdRRsWg1dE9MjWejyJAZv9DdpYnoZC6NEhFCPv4Pj4B8CPHnGmbqsh9FGZZpCLmKE3vC9",
  "key14": "4Yi7sahK4Wc43shkxX8WRgP98yUbFkq5ir5fJwrnEGLb8cQw1vqGYopAdqdThBw9NqcL6VgBmZCYESK4AfTBHNeK",
  "key15": "4eSG3xJ6UXMkuzBCopfFhkcVXwLqfbtNWt39RwsYQHPUENQw7V7YazaZVmGYaTXhTn3M9aC2pcBHtaXjGkBguaYD",
  "key16": "EoZUUZeacxH2UJLVnCiU7uuCZGk6wvtao7TEyPMVbKBx8Vgm1LzQtx9HCY8opftBKGm3EoP4vfs66MjbqTMNRM3",
  "key17": "iVG3J5BxW7xovuYuyR89Dwn6HCUBSNbRv3yL4A8jJBFgmwqQNZBKdLuyX9Cqj4Z8aPq1joVfzGwQCkjxPii84cQ",
  "key18": "3VFvi7UBukTiC7xjqLuAGPha4pFTNQA3BEatKm7m72sWRi1xZU8iWq6Ch75MYvsfY99ePoeSukK8s29qMRaWdFPw",
  "key19": "4H1SPdAgCtrkcmDfCqavdGw6GKGfaJwy2pTUezCozmjZFGTCCD5u6Q5G4SprcESpidykuZeTCsXEPokC3wGgb6XL",
  "key20": "h2RTW5jQULjQdiPJYJ1TW5J9LtdrPmTwL3LH3LTPW6DHkaTVVhry2jctYcVBDwD3SrXm8YcXh4JVeZhe4cTpf1y",
  "key21": "3PQp9SaUMELBaiyDyG3w2x5pJZRtA1cPz51LWg972HU1BB4C1TiLZawNuKHu4t13Nr9HuoojoFGJiXr65e8QAtky",
  "key22": "vttBdnANyGTpiDg5kT4WXvRbRMS4jMLTnQQGNzLWNiqWiymHmeXLQewDd2Gheeuft94dNZZQazjUuuap6JKZXKq",
  "key23": "UQeGjCVVxzT3jwaR95EvDiUk3zu7oUQ7TzLXrUQryidMUP3FXbFNYS5VkznMzwVXCtP5hAjaHVYuc8Fe6wv2uZr",
  "key24": "2f97kexRtLciPeuCH4Ma4BwYc2gfDHDfqCC8jB3NDwmjmhCbqiEHphQh7DwBCmcgzwFy9DtkATsjcnVtjmz2N29W",
  "key25": "4pKTTsUmox3WMzpUnnXsiaU6qHxVJLkBaDSDXs5R54QYcEoLtWsD1gPXEa3fL3TmggzD67tGmis3NE3KQHonF8hu",
  "key26": "3f2DBKZHkCRCGc6HFB99pJ4xToHqCX788TSdkJF6QGbWZaZZ3tBYT31TgD3XCoKf3uwDHT6S7FMrChHQKHsmuWYR",
  "key27": "65KyQK4ehVXKnFskX3P1WzSZGBUibzg9rcw5RLKTZFdBp6D8NkDLpaeGaaLSVBWT784bAB9CnpxkdGqjYmZsKhd",
  "key28": "28spGvoQm891f8k2MFZ7XAyhWsv2D14nXPkJLyVSnQzWfotKUe5oTd3Hqcum3VSaTHMrd5KrgjCKRW2zCUNeaPij",
  "key29": "3ameoRkaaqkKxe2dXYBnjkJR255oPgrTBJ89sbuwsJKP6mpKavHaVLzCRDz7AmRx6KhuP7VcyGxkvWfkwwrPDgpq",
  "key30": "yVSTGRgWu2aXvKNVtB6UXfRDH3kNnh9JURmAFSYtMhcAkuhrTJYXTpvwHAXgaB5X5X4pNEGdNiprV4ng9Bui6LD",
  "key31": "2VBpueSsHtSqbYD5PuvvVn3EnDmdXfAjcPUp6HkW8KmsCwski4Ctqi8SE26bEdCd5xBuvk3rTgFJ8cpFA6FFqCZQ",
  "key32": "3chqr42qF9odrppsrouu26nzfTSVLL5Cs8gwGUXe9eW7Zb6PepNP7NgEw91B9fqNyvzv2cwmztRCE2NpLEWLN2kD",
  "key33": "dk5cK4jbRytmCM32vcXJTLM866TWmxiHeHNtkhe6rH5haC3hHS9Qh9SbgcCzJLuk488QeoXgrjGEmf3ScdVS5cz"
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
