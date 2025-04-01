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
    "LzzAFRdfqKDwoCue11dqHNDbDPp88fbsWxWR1pLr5nLALef7pjzyyKTBThvvABzC14j3rnvnFib8xGgCkpEPF67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ns5aEXNkhkvWG3QA9Xja3PwUWjHoFEwp6kRf3hySoF8mgEb2qkk1MnwEPc1CL8nZKyCFJGsct4c7J9ux9AfN2jw",
  "key1": "4aPtRqSS6bwY9Tpx9qtfH6LRufvDUnrESwkcdLgf1vpqVN2L5vzA9hjgPwhpsdB5pBogzM5ZWgYshuEL6Cc92JeP",
  "key2": "29Tz3P66mNV1EXzzzMqyLF4uAk2xUUYMLVksq8wXdXnpva9FhGJs4Yb8fzCteGL9wqsAZRaddN1hsTZtQukDRuo4",
  "key3": "2nyc34CAPR8mBXchuNLQBf8WGkq9UgrqHciSa1skqRctswuW4Rk5TUv344mR4RTXNpddXui2TnG3PBDbX5iNaVPQ",
  "key4": "tLqSpNAxU3kVTjMGHrRioKBRTLwCd71iCeRLwX9sB48daHchtESqmVwso98NYvxf4vJQCy3ranCNLGgYqQf9xPb",
  "key5": "5thEYLiz9SygC94gwtwd37ry5XQ51BHZegzHAwc651fCFMH35qdbBUHAthZWkFf3qsvvNT31Y1BssVnUvcmGrmXV",
  "key6": "37ySLrzboq7T1WRREZ2tFsEG7BjrTb3X6udcmUwsHBccEb74LXQJ3bMHnYd7rrneEnmyaTHpCJaZd5sa5UPnKifT",
  "key7": "3irfksbbyfydda5wZECCcoYYTeQAWi2HvEfmnaA5k2X9woBKHKHyVsGf37jq7BSGdUxH7BGNBUrRd6tMfuhULCcf",
  "key8": "3tburZ4to9sHnGevrXMQsgh4SYGkTKU2THiYw74zUThZ6ru5S37BWpc3tVNWhBP5VBCeHwHAVpJCakcLwkStPu15",
  "key9": "5cp5PPM54mZpYFXALLtxyLx8f4edHk2kQRshXLY7c2tyKgpWXzHEvpoXrY2Pe6i2Z9qY87vwNjTGHH2P4oSdVHZU",
  "key10": "3f76GzcDhtH8GZXhYomeEWbgVu5wneXfRRz2fDkJbdgrBdqx9vx2WrU9kAuGtc7tV6kK98QgNoS5sZc8mK2ZSQFN",
  "key11": "5JtvqtYDoEC2oReWfvpJfRtun1sjXdBW5AuNsMhtXhtS8VtuyW8V8Ejn8Fj9X8LEyytDVob2qRiANGiSP7YaxT9A",
  "key12": "32FEQAnsWL3o7hMXvrd9eLeogFyzGD1RAYNw91nBT9PRkxF4NCo7nZajvR5zAmTecrBFyEyviitFwiHFATYDZAR7",
  "key13": "4ZS9BoUyhpGkVF8vxExs1TaTtL1kmzDBgYEwFnoNkNiL3Z4hECJT8M4cY3jWxk2bXjWKhWCLujnCezCNaqv6J34D",
  "key14": "2FW7f7k7dPf1eCwmAxpXxKrbp57mhujZpY3YzEJMiSNAJ2RwEF9XLFUqRkQwsm9WdNn58nNTq1F9nmhiREACYtC7",
  "key15": "5jrCoGvRhadbR6Cs4UXpwVgqH9HccMnkhes1R6EQ9ReJKYdfxBHfYJ3hP6up696VArdCcouyC1vqHxpgJQDntqPL",
  "key16": "b5hFS4vPtq1KmHXXSwg6Sb7kU5S1RZK7HCXdboQfkcBnGVxp7FQo6Yrzrs3SEix2RAukSAEzWNNpL52GVhFaLBM",
  "key17": "5q8Tt2g2kJDrcASrTj49ZjBwh7fCYUw9c4ogrjaWEmNa4Qp16uvKYFBwTs9dJpTxmZ9fgEA8qchQS2PznjN6hAjs",
  "key18": "5maGJjtf2BszwYeBpJchPV6WxM8mJtH3Qr51YpuxNGQnvbUTfK2RxFugddQLWuCecsANg2daGGkabwXaxqXhabFA",
  "key19": "4AU7RGZxtM9qspA1ND6tGMt4ZZTJvVTr2RJLUycN7SgjfR2j8zfrYpcyj1vd563qL3B46LBUJtVVmHSVjLpninZe",
  "key20": "34tK9w2ihcpHs5GgNYpD6QS7HR2QMttYYbhLfxeQJb7FNPgRivypxGukZN8LTvG2CFbJaYEQxbaSPsKd4tUFqggo",
  "key21": "8isCdA5FT8Mrq94eu2QFbdeTRPr9H13Wv1BvS1zGyM4eodcxgc9hshNnht9uqR2JpdnZLHH2YgcCifC6mY6kVUi",
  "key22": "591xD8HnhhJMM1cGeJv3nj4Wa7dhHDc99oV21qgG8Fj8TqRDUga5rMQLPsFYKnHV759rNKJNEpzRzUcT6TEiMn1k",
  "key23": "5obipccpbJNAzeGnq5Xh14rsYyhtKNwszYKN1xhqvXjnXGMeGr4PY6j3wU1wMCc2a1QEigJQ7yKPnwrZT5r6JjV8",
  "key24": "45qN2DE6QznnYGH3qhHnYea75XNRrUdmE29crwCvY7rWS6cVuQ6rTwuY8Vuuq8T2ChFsHharVcbR7nfaBAVSatwc",
  "key25": "FgCHNbgo6SHdDpFv19NLAqmQoubXp8tojZyeLTFzCciuopqHEtfQmS2dycVxmVJbU4eT6KPri2p498TUhJce7HM",
  "key26": "9jam3MHsqgkV6wKuZyAq5rwzygpBvGYaNr3pNeKTRduzTW18UUbo2Pt3euaKmZ559YC6jMk2pZThfueRoY3ozbV",
  "key27": "5xtpdtUhoPRhjDXwqKQEAL57h2TpjBgfTFq1dxeEYUWKDCEK6ro9jzK34Jt2SsuDpWvKTqrgnmf7eHHXVKtRWC6S",
  "key28": "5HjHFYefWdyxhteonRwL5vEFh4op11oW83qtJzKghMPhbghZ7NkPeBLN7ewYBBXks7PPbKqroKhb9s2KkFQaegAA",
  "key29": "28cuNJHUJ3hGHvcYruJNJQX21kbQids1mH9jo8XgiYZ7qAficj1KmS4YjdGcAFz2eWoastfT7ZqtFiCjcUwrhfsp",
  "key30": "e7hGY9RvxcWwpkWonkCDBKZ48CKgVSQsAiCK1x7nv5PbUuUauDfpTXxLrLX2wKLqYnKPtHhyTkk3tGzbNER2Ri4",
  "key31": "2MHL45ykGfyzCkv2ZdSMKSoB2g2yfZBhpC1ndTASFitk3M5jmNoym96bn9gAgFsKk9hZYJnmge6feeazqy7oPLTn",
  "key32": "4fVaADKXBwvqqByzRiceYtHWk2WjQdKEq4BDfmi3vZSMmHkXNAwagcLErLCMEX9nGSV5SR3KQhYummPhEkEUFrto",
  "key33": "2wi4hz1LysYB4nZ8i93kpVtN3YwoXPHbAZ6LxPzfKznLGmy5AuhUgCXDfFCb6fMWUbcc7WeGXYqkhmK3WkNX7RG6",
  "key34": "4eeE1dYrHzh63ZwwFmY9i2m7JCjn6mDa7XA4o7aU7gyY3GCYx4dZXUozNB7U3Rm4wZYYQHNvdXk58hYPwAyLUmdG",
  "key35": "67REYtFqE7MkygDXZf8kinYue2JZuTfx579PT4yNe5rD7o2x2PYPLGeAXyvWCfSCX2GcjWf2ceqDtxpdgUb6CCcg",
  "key36": "2p5fR8e1xfbnmviaTrPcrZgii3thnahEPpLTgBPRmPeDUbxeCrRzR4ygBiepxxgiw9yrn9jFvugksbk5Dx37ah4G",
  "key37": "2ZF3Yksk97xWGPyaAuq3S51YcAoXK4Au1UfcFSV861zAo4YwXbn9zzdobZd4Hj3s5shrgH1BZ7DdL23zecYRniJw",
  "key38": "igCNXYC4KhGJC1ZVCB67sxBU5NHr8AgE8Nb9KKzWCdHZTjGDUn28FY7jnPNKMHNd4RyiC3nWTW4NggXYcP78eia",
  "key39": "2niAo37wAaie5CtMP5288R1RCRHQUjMJUMFtFGKU5NkTdx3LJdENSygwQV5GWEQ7eAYythWMgCAYrkLUui14Rgh3",
  "key40": "4fTzRQsupU46BsJdUddb3SXMp5riAU3JcBqBCq4AYvP53gwtyzFu53eMwZK1ficVvxKpxg3x4umo9KR1x65juxfk"
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
