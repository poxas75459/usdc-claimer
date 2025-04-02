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
    "qXavt2LeNqyxVG9ChzHXhBTsYqPfYzWdDFZxUrcK7YCFwVbgKHuds9stxcjH9GtCDfVeRsspG6AyQbkukjfM31W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCV9BuWQzWfzMa964hSLZ6QGh9uvTzxbVpLpPKghPe58MbiLZNjP5thMmwXQABYWkDH1PkQbWWTv7XZUQSZT9v4",
  "key1": "QeSuecruYYMbQiv15jNpBpwzwZjoXSsHT72VfiDrFRsTJFiWXvBAMcK3npYyN5sdyw4FbcxrMrh4V7XVmekimhq",
  "key2": "BrXp5x656aBkxgTYbHpBt9o9yUWC1YMdo1pjjJMD7uAazTz6RVrVit5HWWj3uqastGwSr8UCmnNkRPhTf6oDLu8",
  "key3": "31Ep1ajW13mxATPM2sJcye8sfb9F6CtUxv8mV3vVfunsjqzY6SS7L8qLrqvyniNt58UqoLsTnSSSNr15FCWCap5y",
  "key4": "2Q3nrZoBovLa7izPnKjje7g34n1emXSBJoRLaJ7nK6Q2J3qLFUCaXyS12YyJZoZdCAwzEvuiT7MuDBvvSbSK7Ag1",
  "key5": "1aX3gpzvud3ADiYgzKxrUEZzv26Kr9tHYS7ccWNXNimE57ZZgQnpLSrrvw132uFEi5pvGFGq6Nv4vm3RXdXpcwa",
  "key6": "HBWqpeb4vAn2B414e39WCXpQ5cdhCC4tx2WG8PRMxShozGdgMCpoKLkExb8iqJ7DMBrJqjqpr4UyYYuYpkoH5TV",
  "key7": "5TkD8eACPycEwv258PsgYRhDYGZQkhQanoABF1VHzPkQw6fRnYr1bVJTCZrhDm5Gi3Z8zEynGnjSWC7zurThiy9R",
  "key8": "3MmiZtwSdnrxcXgeSksCc2tmnjYu8DqRKU8VcU2j46pCNJqau2TBANZiLaNdvC5VvAghyrgtgkHN76q7SGumM9v4",
  "key9": "smt6fqMdMeVZ614Tns8BnwstYexFbJyDuBWehDxfdTUdWey1d6YQ39ck8jQ9UdymhoMHWLCCUHPNfLpqnF7xUie",
  "key10": "5BpPkt1seAqkFWoD6ztqkL9pwZEbGE9vYUFJ4td1fkvhKjjP8m2mhg43uowvKZQUjJ9aYrgM2JDi9reqWLCtDtc2",
  "key11": "xQXE1YsvYy6qBVGFvim2uJjQmEvADB63j2kowSVMsWwvrhQdcrbDP7dEDS8ec4VdX121iWvae2ZLQdTP1PYWGqk",
  "key12": "cS6vcR1AWxsHhBrGUCojeQa8GmWXsqzRFFv2bybpYq6WjMCqZDB4BCRUkJa9C7yPSADEh67yDufrWcUwZttCtpF",
  "key13": "5Mew7gbKhfzCDewRak6hkWd1PPX4yZzYdtvQ2a8u3C7wfoiduHXGm4XPx43Kmo6Y5662cHtLuYa79oTyMVs3rNJr",
  "key14": "4jY3PJwfZmntcCFptCfKdSJAoZ8Aeq2fGqMywSRi7s5t1Y6o5sjLbaiuy3KomkM6sHw3yP48JsYDGXMQrAMTNrXm",
  "key15": "pSvFuVriHcfPhUBc9QJSLvXYfMfUPxe7XpN3Q3vwHiXLK78nFnpaDu6f1r6sSYXhMAeLptHobLjrDW8dBUXK4z9",
  "key16": "GPHgyac7G59V3rVsdndbpr7jupgdM2E9ui5MBqYbjzr8as3Db3Cktm4YCk69SSP35tb5kavG9Q3F7MJgKt5RWVf",
  "key17": "3oMJYF97GwRTyjQhRxpD6iuvasdHAd1L8z48KpEPJ85xmQ1vhFJcmwED1GdsFM8uoiomyQtFWQUgqmDDCYFsB8Wx",
  "key18": "5Y4nLLU9pxYvJP1hbV55peMAghTv9ERa9puvGeSmHzDWHRDVV2yP5vyytF11wiDBTMr2xZwsnrAKX42vK9WXWqkB",
  "key19": "uLJuwPKP6baxTKueasskyuS2mo8c7XjTPhhasYMAs2hSR5PTpvcGcjYEvsq4TAGrK4yDBLWNj4kP9mStAcoQ3oL",
  "key20": "35HdBbCR5vJAox12yDvdjDgWEZd32nDJGsGmGfZr5uFMkQytgmZoct6oog2z3dGGdvXdnZ6vD7rsVzqxXEv744Lh",
  "key21": "3qaPi47r6H6rSY6sw7JYBQALTuqt3Ge9pkAsLe3CR3d73VEgPAcWkJdieChNMoghqYCrbwhyr2V2ohmn24ev6dG6",
  "key22": "5Zf7oSCWp8rYhvHSRJnebTpnKtTqJFtf6xdgTFE2vUU6YMfHPDj4yuFEz7pDGyNnTu1rwQAt7bywNjev6SPqxPLG",
  "key23": "2JpcXprDnquikwdfhfperhS3zotbqcGew61p7qd5ttsKhzVdWKLCbZddHQXSbLgfD2nRPxqgdcx4EbnpdHHViPyh",
  "key24": "2qKTpY8uALVKthkdVvMgjds7L2nk4rmYN3N7Z7Xjz5x2i1vufR8C7MJa9PesoM8ARWU9qQYgzDuxMPxzzXJpMdR2",
  "key25": "2nzedbueWXVPJA4YEr8qTkn57dQRHPzvpNrd45mCSAhHnqcfGDihJNgc4MuYtx5wEQgoVyzzkFyKreGRwiSwK9p",
  "key26": "2J8gg7qiMLaq8tZLmNC3L2Ei4oprUs2MsWReDKY9Y2cYfYvjnfBenDgWt3BdNntotubRTJG3MPpTYBKgu5Tq8H96"
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
