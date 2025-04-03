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
    "2EE9nKFVokYACWhBCafBf32qkTRWgCCRVSsqNnHoZhoEfq5sufVofAXNAGh4uE2auP17ZLhS7JQDHDFqvQ3uNgw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66KyAyGVUQKdYWjJbHLcE4H4FGrb75NUcqFCJ7Pxbi7aSikEFLNVsSDHRzB9Buvs6VgMZcxikcD6hGDVDgUJZbpx",
  "key1": "4gtuLTPzd9CPSgWGDGQwsJLMhd37gwRLrSUMrM9mMWoQdzbKSz9WU9NAzQm9G8hsy9VRNrpiXVWwcRTbTSrHGLeG",
  "key2": "YNPmuX5jXVT5SKPWqF68FgVE7AKPsb4YRryXG93a4wxi23SDgsrgmhiym7ccw2RLxN61crZLTbXzbsWiji6xCGx",
  "key3": "2SbCRtoNUjkNMmgcLGLaRgFb93dqdJ3WH54c8h2nZk7JaQYpZwCg6RbqYXzN5tYj2tx35qdPzjAAW434caTZfUca",
  "key4": "Hq5KDodywGCoXvoirdcsTKytvioSrGgbhzZpVsCgivsSCfz2xnUASB4M7cdL3LDAYz9RTxKxcVwKDKzDjNvQd4z",
  "key5": "3UkrmQj5TvrkR1ADnZhk15JVrqpP2SVBCDX7QdXUVFUQBTck1bu58VX5uhn89SSv6QaNP2DQ1NnmuoQkCAWswyUe",
  "key6": "24s9L6EJRyGak1Z2Whodek5NmFTQudjocky6ay7hjC4vamnkTX8MqDesFRbrDEhHdacusatkbt3s7qvQAki4UPMn",
  "key7": "3JPJrBomd3QcS7DbK3a54RNevZh8qybfPrrj7YJkdxrUJoTX6TsZQdEytj2WAXEPFZCdVa7WngYrBGVyTZ5QaXDh",
  "key8": "btZTcCyp7BnN8kyS66cbKyxrBDgCSbvrqPd328c2NknAvKD4wZawGzi2EBJcGm5WrsU2A5aqyrEAhcKpQFdVxht",
  "key9": "2TU1ZmC363gy5bK5bQ9kn8hdLZYnREEXepaGLYXpndKTnMRCwdR1vsxSk4StDfuMJuAf1P99pcnLJyJMFu9bwC6a",
  "key10": "4NBNskEye1eKiKbCpMcHpbvRrRw537xXXqKi9mUnjhhGqExJyiakhwd3eHCmtMuN2boCxSnqW3CRAg5nRukoLY2f",
  "key11": "5fXUgMwxjPHtimu6UWMC3qzjLWTLySMQdnerJkAup8KAqACgUuUPHCz5qVy16FwxT3J1T3QGbNi7DVMkXkNNeFG1",
  "key12": "67C1YpgmLcnSBRbSZnwSke1vhL56EcfTkLCtFN6Gy2eTMGDEwjwzp2BXTNdo9NB74ENHyu4sP5FFUvAdEv8PVybn",
  "key13": "4XUw9Uu2FdviZEVxMUnVGpMDcdUDfaiGfMMPwYzg7bCCTe3hty79jco6abYVrfFxABrkpVFByZ5GPg5khgZX7MB",
  "key14": "4nM4Wac6crANHw8AyquuJd82JvZXZJJUXAkJDa8ETMV2sA5aPLmtaXbaEmSMGb28CYfA1cR4iWdShdvP1XHNkry7",
  "key15": "4HVWg6n3ZnVzxD1yQoHhYiKQQuGu2M3AWoyw8YF4ZQH393TSVcN2pw9keX5PcFDmXxdddUD8xwXzzMukagyQ3vfD",
  "key16": "5BArXxy7EpUtEVJHHDUgRv4yi3BXwNnSBszQ1cG1NVppTLgWuDYSKTLP4UdevPrhkDS3niFGADnapfb9TMBas2zd",
  "key17": "54JGEZZMTEmfo2gwiGvZa3mz6ZL1xX6j7gDft17ECdCUU1zuET9Tvepo8CsNSQNEEPfPEYenqwQAjrQaPsXNx7P6",
  "key18": "24wpE7XgxpSkAKREbrRXgYF9DEQJ5W1ktctvxrpKTCL4XMQS6he2YHBNjy1b7DNiX8UHcFjfaKt6B1JbxQWgSa1E",
  "key19": "3ZmTqn9XWahTwLqdK18V88zt3K4K6N3uQny4zNgghJ1xSUiA38aKWLkaJtKtcW1Lt5P7bMFg9jn2YJ62MKrWc6o6",
  "key20": "8qiCGo2Pz5bMvqwzJmAmMnaPyj8omeVT4JoDehESqcETpnB66MW9DM3auh94Nk2gfHhB6yTF6RtqTgP6UQoyhzR",
  "key21": "3RQX73HToorTHae9KFKXprezw5YzCSjr39WUGEi7JnAEwQfCXQ5jdgYmF361DmwFoBh68Dd1cNC72t4nU9FPKeLP",
  "key22": "62xe47fbPWCEcSjjyR9yoPvF5HypXqQVA7kbLg4AbqRhKHUs1M2bbW6XmsGPnSQQtT4GZsE8hNmcBBy6dmBPDBA6",
  "key23": "55gnxn1DLHmFNHSQjafMC6qrJmWtApd7HdcrsfnedajLS2FnVztYMVoKK14RhDP67UwFsrnNr4roPtHajL69eskP",
  "key24": "5DuHZgELxLgf6P4aT744fTSbjJXfj7kjfTwyHutqygKzxvP1Vm4sgC6y3GUEib5NkeqNAQgZoX6JLvnwVXVwirEq",
  "key25": "5m8dtAD5e59ohzGwRZTsTP7YveQR5MngjZ8PNqA2g9boRbgFUuAy7RrV7YC1p4BCJHMvHdhrHEedCCEqYgfzWsMA",
  "key26": "uAJ9yZh6sMFntwPEws3sGgyorNKupkmuJkbgLaDzegRbxrAkqQaPkH9u7JQMKY2fAQjweNUWvmuwbVmZuq2qk3i",
  "key27": "4ajQ7iCtC7WYXJBDBLJDhzFtdmYB5YAnhwVshsKTaxoxfemqx9CVxq2LNoCF1SxzK65T9VB4MUgz21koTD9ygjRe",
  "key28": "5dt5YAtqVihhAteu5p9mWwTNjd96KyyAoCsJYHzCV99VwCB4hng7NrkigZ8RXzEQ8eMZTfsJkaPgSKXpwVzsuXtz",
  "key29": "4t6jVJZefAfrL4GyvmQmhdibgxYdRZy5YUid8hDVyYYvfAkA3x5CZ6RPhmn6XJP5TBd3JwpPNBs68GayP3pqtgkV",
  "key30": "2PbNq7K7pGArNEETk8iAzJg6m9Koh73f7bjbK5NtsBeMb6cAss3pZdc4VYd1PsXscGvmkBvU1mkJ8VmCedmnLiry",
  "key31": "5pgGXTf4YsFwBxBD34MfpD4uUQcQmBHvaWsuMb2XzDVn11mfXUg7hZvjviAGFbJ1XKFBDjDyiQSbvJQaFpJ6BBFD",
  "key32": "4ahChVzLFRMDFf4ZWzEgXPxeEaKKyzvdNk5gWkJc2XWMbGvGTp8S1JtC51NEFU4dyZrPB2T83GYgku58ew6qN3nH",
  "key33": "3kqpzBVAAcmfdggvtTBbtrwHL5ciLu4a62qmCqX8mzSZSxQwGtf7WcsDX1uYEmGYJKVCyCCiwJ58F3FPgXvRdg9e"
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
