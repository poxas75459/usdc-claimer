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
    "4Ezw2eQwXDvfnykBYR42khEJwdLaGYeX1iBWX1Mg2F3YSqgTGpecYvuM54F7uwK7ufFfG9q2w3swvs9mvySj7XFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qtd6n5cKh4rbnn1NSUdMRKsCrkRLgYFsd5jSdukMFTavmT4cBQYxFQwEqZJ4Nom1aSbx18CKo1ox6cuLaMxdZXp",
  "key1": "5GwGusf2ZvN6wqvXXNCDDQfEQfgBA6jgAyYwSPTYrVm3K1Dq9D3mSZuMACA3iHnmPTU7aUadNXV8XmGD9h8dPbXA",
  "key2": "2kVy5nmzQbyEzQrsttmrxRyA1WNH4LiQrEBDPEmrdJ8SLFMyoYdt4tFg1CN88mmAcWMc2tYkYkWiRqYFfMnqGmQG",
  "key3": "3epxe9NXaz4GDaKsgocMZxmRB7FZcqhv9g8D3Pyeyxy5TXR7yWQuvMZy99gZXzrktyLHx7VAJdUdexDiP12iD656",
  "key4": "5U4S1s2hxq9wuw8dKee4yE9PypECpgX7MoFx6DKyMdc2kznbJ2qLqTiG8wLmT2druN5kAHiSiwxzYHaFhBVJ77z4",
  "key5": "61o8B9v8QEANwB4bHoCL2VRgciwXq88rJzVzF2Zmmb2BuFtmon2ybiN4PWz2daWZxqH8FKjJJRUiKJcJJxmS5twV",
  "key6": "29nFnKPdwRSLeuSiYVeaLuy4UFirrMwrLfTdaoaPmgzKVTYrf1eKT5osuFRBY8ffvJ79KSJ4b84KhoXfrnjgVxDD",
  "key7": "2MeCAAiRMED7NCfShevD7DDBnTTYDMYrvasremo87CmpXTuf2rmQRGtMT9AmBooqpiMthYGza14ovbtstAcsvzVz",
  "key8": "5V8PhZ2iHswTpfHUivn72rky9B8eGDJX2giov1972hionZ6Riz9tunZ8m6PwyZcsZsviniLX1mbnyxjttyD1NQ5p",
  "key9": "5JdBVFEVpe1a1ZW6tSJHhWmLb5gWKVzdj3HkrvbcPouPxX8q5o58YNrwuVNvAoxvFu2tPz2bTZiEBYsVWcX8FmVV",
  "key10": "MZGVrsDxJSpumFNeM4AjWePxTQSpVtoRoDbJ6mDVbQG91r7PFP96FBgpgfA6x9MSjqUjUuyQtjVNBBnNS7u1xpM",
  "key11": "5M52XXLpvvVnfyuajJZgxpohbqPo2QVLFxX5csFsKkCTop3CtueYBEfQuREKzFjbghwARiBr6RaAVkUSK58cohvL",
  "key12": "2p8pg8KKtB7dC5YGjWLkFshc8xaXjDwotB8W8jLh8mErP2JaHNsoc87cyMDnMG8pQsTNiLRczofWysdp2fYgkpPz",
  "key13": "8TvvnuW49K7Ngt4UkMWxA4Z3w2iSTaDhAyotZEFHWYWJWPKJVWqR8B4FimoC4teLGXTPGyeyYTHnJeip5bCe6fV",
  "key14": "4SSqxotj4wxCvsEUs2DgkGJGTowb6keunQ1znbDByX9chuUeUkw8BN9aqtg46FBPYYL9bHLFSucCXAhhjwqNDznt",
  "key15": "2kovJoKK5yBfzErXC9MShBLSZfsc4HU3iaxgmdvsnAw6umRKfPFbUYhuPiskhXwCcV8hPFSARGsmJqLZbtSbo4wQ",
  "key16": "4DCdAqjgq7pfQro4cg6QYuTvniXHpBDjLvVN6X26ZKeB3fwzeCdTfc9MVhDQu3coF9ToMm48dgtJPGumncTxMW94",
  "key17": "58tEiRo31RuPoUcrrE38sMt8yNtUr4G5soM3X1wrC8A2vuH29rjoczeVXVb6MjvcsxAMht8mArQUR2wHaDe14vFj",
  "key18": "64QZjC5k1Nn2uqgWoPpJpMTuMK44dVxHAGhLk3mYDEVv3FjAtzZeGgvDiQpWEXDsjViFfbLpd1cCmTxW3X23dyRQ",
  "key19": "TNNoxhptRj5XswUd2vYdxepnnQ4FwjopPWwTYoAHYbiy9EZCteSe2LdxT8g5eCvsn69b46iVj3PpWoQq6WiGmXM",
  "key20": "2mzGiU1EFvd5QX9AGfjFhn7NRKnRAaeT1xgHQQs6wcoBsvbnnW9GggV3e6VtxqS9w8Etwe6UYz7DCp27YkZSaxm9",
  "key21": "5uq1QendLNKvLc7Va6ic1TzZ9hdPE7MrsTHETbKc5qkb9ZgwvpJ2F7TwwPWE5jwAUVLBZzSpZrP3YWTiWoRfntEc",
  "key22": "X9C2jr5F8ai9HEbLBQgca4Ko9bkBNyiWafWkoW9qPdWkNpntg4zLkWKhVcqA28B3PYCVWTJCKPc6oxV7yb13GCx",
  "key23": "5ghJSCC7cwxycFESafong5tdxP9e6g7KXCm1p8fcUXhbzbpY3nWw8wUnTrNz5bHsxDi9xuawcqVDwvxxG4ML7aQJ",
  "key24": "452Jj6yUamUYj7BGJRKPcUSVrFrd1Vmb2i9d4ShEsd2r7q2ieYcd4gaNkSRx2w3gNnJLG4HNAcZMwcHNKH78vobv",
  "key25": "ZzqQfwRNo4MgzSqqA4wEdi3JPJFNpoixi6r1Xn6pojmKmebnTGWzvfgLFxPs4rKLBpg5KH4oBqqAzmhSNgR4zjC",
  "key26": "5Qeo74vzhxeV3KYsKvvXEAeTxQiQfAUR84Y61NvHsL8T5fE8m3D9tqEDVejeK25NL5rk71vs1ESBeMwsHERqUP4U",
  "key27": "2r9k3BvRN9QhgdaWbtSNShkPPnCiDw3TGX4sZsm3CgkHjkKf3ZBQHrU91RciCnMMQbGeEFqtTAqKFcXbE9E4iBas",
  "key28": "2kZmvg9YVDSAsaM2nsPhoFvavZsvBC2sRamHBDvhnRMvh7ieZ7S54MmSCmreBHSwYJj3VqFEdEDPpgyEQkKDhPZw",
  "key29": "3mhfnvwbA4f8qEf46MXPxEbDitv5Jb3brMpzcYCuzkP6yzmWHCGUqSY2SsBmUG2pietT3GYj9HzmzHzj4o9FuRdM",
  "key30": "5AMuWSro59pbY3tUfHWZ74keJNm2myfiXk9LMJ1trgT3rg3GLoup2EGHndrahwcjiYdTVY4FgYhUcayBd1isz4Wx",
  "key31": "XtehEtZNkrSRZsZ7GeorYaTQHN4vMZFwRqyyW9BMNPUZNnRwJ6WSQbhtbtEAuMhgVEZ2Eck6DvqvyaUB7Q66cfU",
  "key32": "2GsuX3wRn5NKC6U2thisTXek391E4evHANv6Si12BVq2QwVALNhw4xk1xLowKYNgqax2fXnKCHv9gnc18e1J8Awq",
  "key33": "DZ4NPtwGtTPStLRJEFiwCKeT1NWZXFc6yZTtC5ZHHTBtMwwJqqAhAaWJHSk1W863W8bBPDLwrm4XT6nP8BpxbPD",
  "key34": "4JQBaw42aVQigvCA2eBJE5ouVmwE8DtHAkhqC7uS97F6nfs7DtS2y8jBbkTt3oZHgxZWMQDZSkovHWcYFEGuL7hA"
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
