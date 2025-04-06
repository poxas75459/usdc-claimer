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
    "69TsXcUSyP6cDigsiRLSJpPuYYHdwyFMCHmxaGzSNPJJWpyuoNavGdpZBsh2UQZcnjquyygjKPJJoGu8ygJkSHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4fDBdomQDsRLsFkkc8bWf4uG28Rnz5t4foHYHfNBUkj3TLakvFk6b1y7CLL5W3ciCoe8oVyzsYeZVuaso5wJR5",
  "key1": "5WmmFFV3XQDadnyYNj3J5V5sao8hADmCQFXd3VWhv12RA8g5LSMEJsCVkyyYw1tzQw5KiJAK7iKXvwiow7VWzBEN",
  "key2": "4x2YxKbpAfFUGkKd1CRoZvmu2WJfuBdkpLAxKzCK4bu2LLhL4tYZekY2rCNNbXM7WirTArRxdTTuz3yDEQk4gRWP",
  "key3": "5Q9PWXtCZD32ht9QQJFXDZoWYccTiKzcdgiQ6gpepTCZEEEqJk7wqQqPAbQSHRRzVV1favkCkPaktPrSGNzXh7eu",
  "key4": "4vQHRQVmojqYnZv5VS1k6HB9SRJQ51zFm67mmU1f7RTy1oNzj6oUYctF6esT5Yrda1ZDHwqU8251Qkp7t3e6ia1o",
  "key5": "36RZ9UTLoAnqfsctJTDMMSBvePzTok6jmiryT1Rnsmow3FsA8puztH5xUNa27bfQ7bvUcnpTypqy7cfqEE93ZTyv",
  "key6": "CQdpyc3vV91dkaGNY7UN61sbarVz2239pZRBTz5ZHjfsRUpV8cL5XMY3CJGktvqJirDdWZRXubeGsbpkhEzks4Q",
  "key7": "5Gm2t4LXU3JiaAnUP6FmdhYqpkqHcfHDuvgJGHsPBBbDUoyNZsGcDwZFyVyyziTMri9bP1T1nUqj29yQrMBRy97q",
  "key8": "2ckvSfB9SujjS5M4KXGzmVZAa7WSerwne3emyizuTULJPH7SCU73aDk61vDBugomgrvCwH1Gyid3WALdxza468Cs",
  "key9": "kUcCkks1Wq3B73n38LLMYatstXE5SY5ARriC7GnkRHsQ2x6rDgRgj4WnnZZyaFLUjJdTYLYHuSsJbzKjTMgfxpH",
  "key10": "5rUCG5v3emXiktjiSGZFGqrBSZCGwj9HP3Zp4qbVDQUBhNqDhuQ4P9d52RfAzKgabA1jFztD7UfjjTbT8DfcZRcw",
  "key11": "2BvgWtwAsfFWu5PbpNb5tDwUCN5WusLPyHH11S6PKWWwUSj9qbCr6To7zPzUDf4qL3DraNMn8roGXSwY7fPyYxNi",
  "key12": "41srcBUYw942wZLJ6pw7kmwiwrmqkeCifXfqtr8yUd5egygWxdxr4ZGXmKVCh1QgaDbguLshfpWizowEM8VfnaPA",
  "key13": "3CfVqVAx3YBcpLWEou7QBSmtk55ngrmAp2tULLUMmgmroBxUsqiujTSyavfzD5nPZbUw215gHwqDguFQFNDf3o1e",
  "key14": "2P7ftBt38SMW5S3KfYZSHUWM2KaVGWtetNSTRJkjWavC3D53Y7dbzXwLnCPQCidZwNHU7P7sLAQvtYfHfkPbSbcp",
  "key15": "kFGFva9jrH9QvuBvdGy7vwod3sBGZvau9XcvuB82DY9bX2mdrkuWPrEH4nrE9KXEHFsudEy7RyEicqNQFLdJtys",
  "key16": "F9PSHXZsBzrV6uKkQaAMs3qCf9ZBVXEa34hqcy1DXtfYhctfHUnycBozzJ8tzvLwBiyZhjRYRC3skHSzCNTbDHN",
  "key17": "64KLDDabYEgJCBYS1zDPdZvcZYeW8k6MpoQ89VmAFrEDw8yYb8HVcq1VNj3iTkzupKR4NqBbfKjFX3WpZs1Vxk89",
  "key18": "4sG5vapyAg4BKtwuo3fU5mbAFdfpfgyg83XeU161BcjnLoUiQo72ukn9hDTrHyXV4GgmkB7oJ4A3qrd9THpuuaiq",
  "key19": "5H38z6574zzns497Woji7pnxyrSJYCAePXKf5xBc6RSKVusKFUYcDPZV7gHG9WbRcB4dr4sjE3WqXx6RDxiikxqR",
  "key20": "4dom9JFYkJ1XpaNkrgZYX5vZfEjmXKD5Rs2r4WPgiPTMYaPGRe5YkeG3ay73pppHCa6MYMaD6Y78BS7r2ddgf24j",
  "key21": "5qkxBLm57kJ9B3Xu3GgBtJ9njssKeALvD2B2N2PQEDqBRXH3K1qS4WzY8zv1592g2caRHNjNQ1YyVxnQKz8TWxSn",
  "key22": "4gLfpQe4H7jx19MvLap8ZPdGucb7JWVUaZq1kY6Q3EcrujV17q7X5K6DjjWfFy7tGz29s9G1SynFADgztRcTfZSi",
  "key23": "4LjfkSF49fsw8eqTcBq6X6m2gvgrd9jp2Ucoy38R4oBHEnHbPc3Dtu8DAyhnvEahae3wWQw9gPCG2MPpHcwDdvki",
  "key24": "xyikmqaqwtF3pgi9nPnDpLQ67tAR7wEb1Vka4E4EKvfDbDKZJnUWojs2pMCvHsdN5EDjfR1fMtBHcGzmfKBEcpv",
  "key25": "48Qni18szt4fV6J8WkZEEYqAssTvrGubK21DmdgSjnttub6VnNPZxFBfMCDFvSuf3LCkFvQUJvXR4aBmgUXG665Z",
  "key26": "3Cw7gKG7tAYhBkSrW4bTWNg4JFkEHfBzGyTG3cKdyQZMfvs6KcZyh7xsyjvUVzRKWuFUskWjnVQKLvg4vvgPS5hm",
  "key27": "5H91eTzpKacYVeqE3SMbHvRuxmMtLaRDj52swNRnSAD9RMREfByMnHaB7qUd9jMRNjZb6FgGajK4TCqNQBqGkwow",
  "key28": "syCYJbVSMLmjsJ6f4tMqhmjnUoeGaa3jRZyRhCsnX2jWkubuDwwVPxxShfZALbUfdzWLNWGC6AaAvPmScrs4cbd",
  "key29": "2aA5tjQs3Wq4sxtGUWb9c9dcrcSEPv69mBfBSmCvfKrRCuV9Wr8bwjbTZCZ3wvss9wVar1tRcDCPUGmjYUo3UFCA",
  "key30": "4rk8Aj6xN5ZDyXMDz3PVNRVQA7EgPhpkmiQfRiHUZPhdqwEj5PDJjDeaupf2WfSvhY4gD1DJNYSoe5dSqof5RDtV",
  "key31": "4AjduhUU6kPc769VvyfrgJg3a7DL9NUvUeEYe5fEbWp4h2yetA6b1sFDnWjqmz1T5So4QGxvwUcXV7rh6e45vBhU",
  "key32": "3rEwtSHkbpDwzb4A8gLBtDp7WSjNrrJ7c8WDqmZ5a2hMdUg9Y9i3Bn8fRxZkBmE9bCxyfidfEa1uk69XULeTseL"
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
