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
    "3uGNBv9WT7AzCfT84qcLVnnrEBhooaFFumNVgQ9zbSgSmv6c7xXhMcCq4oG2q1gCWWQbAMascks7SwHMu5oHRxTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NAfebG5ywfNZRnZWRHw2ffs1jKQmsA9rSXSQYiEMVTbmRUsSgJVKa3Psu8YNXa3A4u1sHKAWjRuhfNSHMuLYgqn",
  "key1": "XTcCw8iJF7yVToQs6qtzD2s5WPdUZcXqanv1EdAG2de6cr7CKH5Vb7dh9kjTTsNuKt94RcdARYqdg65nscA4E6N",
  "key2": "5BHoJjHZcnpK5AMnDPbHsh4S9Ks4eJdSGVigdBnB98yTN5SUA1GvZ1n4ZVnWYy5yyvbWazC91VAZhX5K6nuVTfDq",
  "key3": "29ksM7S9mg69hgiN2M4JaBQt1RroozVfGq5XyyCZibP5VMbZNy1FPH2ct86SzYdckuPrtc4woWsd7Tz5ZQU3NX9e",
  "key4": "2g7wZzPy66i5gxzXQfx5Zv3xxCwwJedjZegxpuvmyYK2F6D6LirRGhS7Jf92pgwvV7D1QTp6LPUNAgT94JSQoSg9",
  "key5": "4trgnqeLsTcCxFEKCNTpxEn3cwHNPofprJTo6iffy4YFk3Pw7epf8YpLniQevBgEHi2D2XgWXPLz7MujoUKW2A9P",
  "key6": "2s9rpQ9D22f1FKzPkfmdNUnWdnLAudk3nLnqA6ibwXX8PuU4N2ha1pA3FvqYEsX5N4z1PxM6pQhhVpxfQhY9NexP",
  "key7": "JcAj9aAaxyeGakEbUFPefkMGmVvfLc6ELAJV4MTNvLYay9jXTwBVkeei6uaG7QGMtjgxuhH8AvHioHhzV7romWk",
  "key8": "5xKmpxRzVVVLz2Y6EN6bdyZPHrcBWDW8J1wEnAh7jaJW8QUjJJcU5x7MAfowagfgniPNitYB6HMuFbEhxnVaADfG",
  "key9": "4oDSzisYABbHJc14WYLEMsdzvsV5Q3zZq2Lf9St7ZzAbnxXiAmsz7hU5yYwQW4uPwwqHQYAT4mbApF6NTWZhV7Uc",
  "key10": "CjH616bqrrhh6Hwtvpvrtx7CQPmf7fRZrqJ6DphpdQaJ3ZRq1oXKjSke8ToT6zQ6K9Jd1HNbw1Bbv61DfMGw1ks",
  "key11": "5XRA7nh6giyaapDENaenUbTBewNMYs88shdCCKLsk8ywKCPANSw8EnS9BddLfWzfGMkTx3LTVeFy15qAjjPkQxoj",
  "key12": "4E5VkFuixzRwMuZbgUTs6kmRk8cUYQ4CrdH5cF9vJJkkpiUJkhps2aM4GkVzhNPiK7mX9iwM2hk49MmPgDcDC2yb",
  "key13": "2iWmyDRv4Uiksfa5aSoKnrQjJGFtM1JDahpkYZzXmZqYhDBFNZym1sSJFHiGodhTzNjHPyUz7jbKwuyPpKxDZvrU",
  "key14": "WMcjy8w3WAoS5bNkZwh7GT55tr7kHqWQMsimd5nZdz2TmNcDkEwHiZ1WWmB88XPXeNQtdoMcBNSHyc3HDKhW4na",
  "key15": "4jeTkcpVZqJU79doZmRbXFXJNs6wepyF7qQAtPUwft6ckvae13V72PrW2cpEhoj5cd44EGSCKw4WUfLv5FJpRpa6",
  "key16": "4aHfxPKAHkY3qLQZBhGMBHvC9ve5GwASi4B9t3ea96GYrXX6LMfg5fbsoNsvFZ4EF6FnxFRzx13C3jigTPjWvZqS",
  "key17": "2jqrfSYb2RKgzzFgauEVX9GB4Sz7gjRjQoPUF65bM22Has1iHFhKoyJAQDzygUa5UCW8AM4mRq3QnkzdL2TWFWqj",
  "key18": "8ZwQaLgi6nFfdbtQHe4gsGRkFeBqR4utTxQCpTZCWq2aMwEePUJdRivAuxpHeHRSipmXEtmExS1Acxnhnfd9n8T",
  "key19": "4BFLBXQZgybEt9hZ3tvD8X66uUo4DkpNyYEtSF3BG4BB83G7jHz2wvX5aPcLEDNfTuuNYV814jFE5b5jez2mupJX",
  "key20": "QGQgT8f6g3tEeqDmqZE6S7ScoKLBtxQQUKVboqkzeLPjqwnPZto2qn72kGG6z78Lca2FyD1qzWpDiq5h16FQ8u3",
  "key21": "5JmZwwXu45HWrP8yez3uRVsD9basr95i1MkZAQix4hziLM4M6s414jVFNkWZ2eNCZi9juFJU5MUuY8DPM8gm6yMM",
  "key22": "4oTijBzbwF75P2ZAnBVEX9hsSi4fn6v91tYNB6CSFWR7gPrdaLbk153ryUcHpVuu6u5MjGyovbAQ5VnqUHKK75P5",
  "key23": "5RRK21FZeeQXAvf9W28HMGeCEMbD8KBUafEv21WaGtjUB38Uh6LWSAq5x7nTgUAaYxGM5tU3ApHr3TUiWKqkYu43",
  "key24": "qYzXMxG2MgsqJai1J7TuBbRinTvteo6dAsTtcV1rgxHJeJLgmpSuGVXTBuQkWkXDcdMNaK2rW8LxG3ZA9rju4pR",
  "key25": "QqLfDQ5ur9hCKbiQB5GcKKL9svyZ45pBQKjqCtpsi1wgwP9XXghyiUHSSJqwmfghYkeYq8Gn6JGnQY4EL6BMSSZ",
  "key26": "y9CrUVcEdnPpgU3adEKhnWK7wBYT3PVSFsXjtdbnqA1bjNojaqr9iW1Nn53wWpdU1Zrcs5Jx2ks9hTyPVpUmJ4a",
  "key27": "6JiM6aa6bmyVGA8pY82mZSR43NLQ81uRmPQRhbHjzSSSDEVnuxXEsZHtK9o7ZLW2AirF6JJjycw4xEXmYUWcHHN",
  "key28": "5FTELBu1LDFgAn6HcVEjep46Xdy9ja4fmYqV1TKduBv6nqPXnHBxGZY997VdXDZiLNVhPzQ7wRJMDzPrWirLLUrs",
  "key29": "5p6YEnHRFTmSPv7sPWub6u2V4uw5oor8E52TfGhZ1kNV9k7MVHtf1bSyFEjRzYMSA3FX366usXVwofath86Ab6B7",
  "key30": "5USZ17ChUUh1sAt9c44mYfiRV43s5g4XwrFBgoEKTXu3XfkVsU3PZrJ8srLXMFQauwwKZt4q7nUBy1bEoh8RCwkX",
  "key31": "2UVhXLvssrub8xuevcYVcePpDmDf1Y8Xi6ARvZYxS4YGuyX615gYQMCfoftZG57L173sJVXRy1Q1PfNiCsnUbLez",
  "key32": "4HoeeiE4wo3YWpVsYLhFgsr2edSf3g8kAbfJsUAXmhAGoMGbFH43yfYV5XaygR3WLBFo5uQDMddyRFpkJJu1Epje",
  "key33": "26vtgqtfjxgYKqS9NyaBqGJNdA5Ax4cqE4eM1TNDfUcGZaWegwwCV2KDxVBJW1bEhE1LiFnqc4MgrRiPDCu5Cqai"
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
