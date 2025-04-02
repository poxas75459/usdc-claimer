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
    "FHmZZ5PK6EsJbuPPdhUiXndVsBXMmgVSYXPnqgTeEPuT5q4qzTys9LdsyX8YMeShrwSYZnK9v2vYjXV6kNaqKwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VucN2nfHH8J2nnA7FUBkjkphstdqdxdFQnC1EHfX5jooNW9Gj39JhBPhofqBZ5cVuKFGn8jERCEVBRcLvRnEKTR",
  "key1": "5nWqzUC9z5VDVWA7BbycGdgfQsQYsNin9XcV42SqiovHqkhxh2RhJHBZ2m9vxe6xh2E7G4dEb4HAPYTD5MDNj1jC",
  "key2": "Wgum9FrmWMTJqhiXJF5r2c3bpcy4KE7sj2msoRcQqFzVZEWTBG5rid9V1omThqc54WfkQWdbn7aUCNs5X2c5ZqW",
  "key3": "22g1wECFB2RT88NeNuYar83yRVP1gsa5ZwnzMPAss4oZjVun7qXaUdN3Aww8n1HMbvJsKLaJfAxnGbLj5kyYescD",
  "key4": "9qjcJeEeYc1jeYMtnwKDiEG9WFyBKqvadgvvZ8i6zv77FW794faCf2psj6rwwuV92df52RL6UKqTWi3qY5kX6uS",
  "key5": "59pp2pk6q1vUaPQ3CbBvMNaDD66bf3nrbKuZcGYNDJWhQWdNw7ZDtWhpH3Pts4T2r3qTF2DkmNAQbvdYwcCMQZKr",
  "key6": "5HSnQkvWA9Xjr1LckP1EkRXuRUASL33y11pCHgSEzidA55tjP6ra9jctvuvmBJH3w3zq85YsqmsgmtunFyHoMxrQ",
  "key7": "WXWeXQkaFWBJFtM32rrWhTJ2GUhbLEpkos47zevExJFxxks4BURxk6BMTrGqVcNMmDSMiHSj9BXKfrZCj8GjRRn",
  "key8": "5LES6PdaXdftKsZcjsgoXwfmkcTWJQ9srdAfmABsnno12UfANF76aYpvne8R2sBfKLcdV1RoYtCAbRbeDgmhUV7m",
  "key9": "4bEghjHt7AA7mjLo8JqZRU75y7LXXGk3mcgD3KDEMt5fcN8UVXjE79EMuWnbRgWsmckPScFbd851T5tBnrZJqsog",
  "key10": "5mmbryX4aSA1X4EdVUZeSiB23hVQypYiSZj1sDshUHrn5eJg58QsdCKUr7tGfoQueHduLdXA1a9Rbs1Qc3joFAtQ",
  "key11": "61YXY2stpT8P3CHKUx8UPBcXFVN6fKAoayayFwaQS2KBbm94LJdkzMhovwkL6sN4HMhMbZb4FRvnx4gKDwMTTgxS",
  "key12": "3yhZsa8odTsyY9arEasKSrT3eYEjPi4N8ESsyNgoevqwR7cfy8sD96kC8YnAfJDz92HEKX5v128uAFbXzcAYunbn",
  "key13": "3qAerRXYp3o4yyWDqFSDEiuCS3xbVR3Cz8r9Msic3vPugb9YycG3njcmn6uMCaLusntpjREHTcspwJXKjxY4WMiH",
  "key14": "3iSvAeDmZHTgNv5ev3QhRxGEHwE1niwvRp8wHXYtHuaEeDetfJijQVfDX2hyRA71y6j9V9mshNzQj3B6b4kRKrSC",
  "key15": "2zqY1o8tKh3ERjNj7zndP6CcVuXBRQiJCiYpEMxbBa46xpg6vHr2DEwNGSSWsHvn71FfUxqnGuzT1xTUCnhm8egb",
  "key16": "5utXX3qjoa67byjqLoE7jbTvokJNjkp39T3H4r1zFKuFdkCcGojE8A9uomKHuw7dNqi48TXj68zAV36bxVr2tJaM",
  "key17": "5UzQGggYbbkS5w57a32duhYZjYBvb6gdv7F5GjZ7cN39hakCSBP6oeTUazNvsFZ5unRkkGTCZiZ4nUVk8fWZRXWn",
  "key18": "5TQ8MsGrmeHSPyQxYv2zrCAEwDmn7FPbQcdxVFmVoj519mUzDcGsTJj5hJkDY8AKNhhejkktLd8y6UcqxBNBmoU8",
  "key19": "64XtmtEdE2tBpvXbqaaz3NtoAhT38JLfCtg6vCRjc5Yah8gUbRf7ZuLVRWykRiQEtWChuqqLSLhcqGYVbQKHBowW",
  "key20": "QmiMwd8TMuHzJ9gWY74y1MhsSRMggVvk5JV4efjC6zfC2FQBCtbrqMGaevuNKi3bCA74vMRxW8cL3cA7HkFi4Kn",
  "key21": "jyhFybwzzDp6gui3MFgMtNQzBM6JnEX2QM6YgaJYrYhHuUAKutsESH3zd6AfMUAyPpJne1GCb9ikRW8xLG1jpir",
  "key22": "2g5a9FhUWPzEEL7fo6g5oFd2Fjwaftpqg7DctPSNrtVbP1BRYFCme1W2EYu1NKC8FjX5ixSA4iijCuETNmumhfF7",
  "key23": "3mMg1WWmaRtWSNQS5KQnMdgi4pHdeQiJrceC1wCEAGRAJfMJRnuo4svDrQyWa2hfTJ9ohvJLS6YUQ7h73x5WBxY",
  "key24": "2pGFWE9u3Kth3tG9tuTKob8HwVaMRjwQF5DT4fgLV5pDU21GVjGcugeaLU8Kg2pAAoc3mTcrKM336Hd5XugiZJeM",
  "key25": "NokDrcoJU2exqe6Pyb6t3vsufTN6zp4Semx1a7rqPu1C2aZfPkfBTCD2UfcasJZPGYzZXEHRUd3cFR5sJJ4mpdG",
  "key26": "2wsLhot5wWL2Bwi3RK1tkVazhieymr8WYmixhzic7gmAPx7nn3UaxSEP8L3zBgsemGyex8jT9NkZmcB84PbhNvAR",
  "key27": "3hGhqr6ce9mr1KprUxDPV4EQEHbtXWftUajBcPXajoEkVHijCin33q9aQskSD4CEzmTGy1kUzr3YLhGBHh6PbcZD",
  "key28": "2RJe6S6Xydewi7bgCJU1KzFMXXa7rbR8JPAxB9ZHGgZ68iyYA48F13JE5mmRe84ownPAwKjQrKKw7SnWdyt3Z4TD",
  "key29": "4vHunnFLEVqfyEWeymmUNgfNhTnoG1e8UNuyLhMydzTPjXWiYV9TuXRRjcU4TNgVYgGJNHEwqsdqqF8EtE1NG9hW",
  "key30": "57LtDvKP22L8SfQg4vXyiNqCMWgmZRXc52dNaemTu9AhKeXCjrFz4YzXdqkqD4zqu8fKi7pNGQqvtodKtyefr1Qf",
  "key31": "2u8GDWEM8puj2ZHna9b7D3wYmjG7bGcdoMSmn2FZ7mZd1G5SBExpLTkLeS5MRTgsF4qQhnGkguXgr7iqQ6WZhZVp",
  "key32": "3ZvJdxU8nSUk1iW6hfYkiQHXgCgrN1X2UDNf1WEd9pzEEv1f7u55ADdZNYhDXqHz4hoe6o6548FQX5xoumf5tN7q",
  "key33": "4RCirfFGEdBYGfLmJcfNWZRbTEs4d9m1TPjgX2mNh45HuQjTiCsN93bcnRueUcbTg1tnN9JUZa5r2HnqNwTVjHrv",
  "key34": "3XkjvyBd1xEHjHRzzLKyTMQ8tCr9uLJcTFYxj7GxWAzxKHo8xGizUbCr5GpoQuCmQSrpGc9FPFZL5ke8md9EMxDH",
  "key35": "4DPuxSTDj1mVdPRc47J2zEJAizbe47dcZMfSJk5zQNXr545SGHqWhgfVyeiwuVAmDBgcMMsQa8eEqLv1M3iAbHZS",
  "key36": "2FDCVjjUvuqSZTXACQweVQ14XjdZTyt6yoJp6B8mvx6Sacre6pKr94TSMCsRaEa1LNdymqWs6hmwNbdZx6M87ZED",
  "key37": "5ubYkrhyHW5NHBNpNWgVqLjxkqZGJsPF617CrmZK6iK4PRgi6PE37ScSLVZfrETMadxiZuztubi48HKQaFsbXMSg",
  "key38": "5erY25Et6X4JMRoNoeKQkgg17vwE1j3rEajRxs1g9z2DawMxLrkwgfA2kun9HZTF6Mqnpjd87mYbbUhsqtErkGH4",
  "key39": "4t96RP6mEkaGL4xgp2WhceggEzAR1ivvyqaY1qt7fND1D9f9XbAmdUypxgGWFv2dVtjrdGyzTUYpcWFjmfWxn7FY",
  "key40": "59CxMkwCAvJUHksjFCmWyuC6rQvSk6oyefjqmuSJKMNbVt52rbB7Mov3HAXNZApQLhDQBZQ1znBvG41WBtkVcDbD",
  "key41": "5L97B6biDoJSmkdrbFyVaS3hdaX1B6MdNFaPfcu5HDNuz2YRzK3reL3E5pCyL7VGvkdnmKsShwir8BqzhaoQ1Twp",
  "key42": "2mXJ9CtjmGS3pyPbRfNVyRYbHDuLk493E5vkEetRhEbEHsXuYkQXhUwmQHFL2sp3pG1VejZbhfu5fPEhn2zNdgHR"
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
