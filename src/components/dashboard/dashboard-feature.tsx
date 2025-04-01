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
    "1GH5SFYhX6sjQNuikbLT6wwYCvwHKq9Y7o8t3XDtG8zE7EgGmJbQ5Xg2AuMCJu7zy2bUTa1jizTExh6Q5SBMKex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMTzpM5c4z3NfDPY4VkMXSF3W1usbrUuwbMddX8MPMSBcGj4fMvoZWdqxVKKHseJ6NeHWMc8SPX9993KPgEhWcV",
  "key1": "2GDzWGrjiRG1fxDyabmMTRCCNUkgKP56t5TeFY8QjYGbNQSuqbD1rMAcm1VdAoBRjriLn15hjmh2rDbHzeuBe9JT",
  "key2": "342VFK8Ao8ixL4m3RqPyg47cv1nfx9a4HnnVGnXWwt1x9fxCo3BCbbWZjaNKcJoNhtD5UD7qUZajUCMga91eHJSU",
  "key3": "2keoTLYPtSUeawzrXkf7j2qKoRexRxkQPgXkDo3i3Lf1VGDxaCNH4vp5UNY3Kd5S84NCQs3YbVnG3kuHK5aicvWx",
  "key4": "5nLj1RFSvSkxYk2kVGB3povR1jBQy2JvCu8SanistDBmj7GbW6b5KnDSwMRrd2q1731a4ZMFyicVAyPAwaAQJDQf",
  "key5": "2iuJxkiqKQ5tCwBReJ7SNE738oecTzBwPVJzhVhTLqo2TmkYm7dWfpYX1M2m7pF82ZArfZiR644bK7KbSSUyq8kt",
  "key6": "2xiKLUMPwZet6JpYQVYZCPo8KRGMNoMPiTVXnU8YEZEvtc3MQPpTZg2sffcGL3TMeDuDFkpipFdpmX6cQKf6iNPt",
  "key7": "3AroCGKFfX4pR9vXN25FHcfWHXBMf6zWryKj6Y9zbevwaAu7GEgn5NWXA81UN7pfAgqe39aSxaFHunfMVUCVFvb",
  "key8": "3VYuo4Zjer4BbAE14gTievSkyGHguKzmLThuKDPcndmgjc9ofjuvpdmMwuKrpFrWQwNhmqN5gaxaYj8ioi7UMkzx",
  "key9": "3AF46t8DnaddXu6d7nBitG1edyhUCHnNyFCAJiEvAnevurntjErWgKpgjof3p11CJdnbKVSrL1dWwuX7UEuN11nh",
  "key10": "4ij8aGsY3H9ww3mhEFjQwXAyUfQFcgESpaGwzRSHpXBGEcyyVQQQ91xHiUr5KPhVNh1u85MvApFEyy3dHUXV6Kp3",
  "key11": "5ZSyMqstbdQURL5kxfTy2uJVsZicEa9ZP6CcNjX7T34NKXu9DnKFGe8TLAjqVg1aqN1uoW2hDJVzBTD3wtr8khAv",
  "key12": "44xodTtra63N6MnoHrumzBazt3us1LDbE7jefk2jKEESuY9Lb9sJ62s3jevbkjHKN7mC1ctt93ir4wsFL9FLWYwo",
  "key13": "4xBUGysgjwJGXh6cWx7hdVSMWbHricys85QpZ1CrNRJFGLfeuLNBhkGBuBnkVmmnCEUTXAYUQLubkJcsZnx71zSH",
  "key14": "5D8AMZnJe4Wso9EgKqVrTp8W3RGV5bVCa3A4kBkp263BA16bJkW1so7nUvYRDjozFEdEzZLraZmNAi3pyjkufJeP",
  "key15": "3ycxf4Dvsv3XHcuJU7Hwfz1HbipmLXAaxNvXFS8Xs4RcTLdscp4oE1j53avSCKsFzkNYR5fFqFh4KwSHEsVhaZrh",
  "key16": "nuHuVzxY5fWk252NV6MSyvLAGYicqDtfNqkJwqRQhnabwwEmBEuXJHm67zARc41XSHjrTwsFPEo1o8yYzUfghuY",
  "key17": "4cQMjpKMYtVaogxtEHqk5eBkqe2YL2d9ovNF6JmcCkCzJdvpMkmpMdLYhKDbivvExBuqaBKs1pmQQSMEupFDfwCt",
  "key18": "5hTRR7kDAbSZjqLGZoveRYAiz9ustuCESFWziwMgbvUPANPJo48q3PG5jRkh1iSgJD7ccAFM5w4ezegoqDX9AHLi",
  "key19": "4mZdt9et16jqcmq8eGP5fZKwPWCb2aQmnWjnfdX1zUzxx212j7UxEPPRPmeUtJQzvEFqrs33ZzRNCTwdeQmRUHVo",
  "key20": "5he5Ann7QirLQ17FihSt8ka2e74ATX5quZs1JQPqqTtdZHzT5yTqrHWTwLR8psshBBr47Xabtp8bk5mzo7XbtdCm",
  "key21": "368RaqfoVwiP5LFCER8LwH3Y2rH2RQAzz322GZufD3zSk76CqwbmQtoaUf8SYNEXkCHdaSrrx7JjSgdFy3jETKNV",
  "key22": "4EUQBihxk6j4JQwJ3GgxwjU25Qq6EupqhiQ42S3bQuHTvqdqTW7Rt7TAzxfjR9LLE1efM3rPh9dVg37T1Hs4z5rG",
  "key23": "5qqtEjQoSPvwHWkd9u9qzwCQt8Wp818xRANTVJX2QRuCQuLrXCtBQvR8juRcAcWZ7qyc1mp47fozffPnq9dp1Ybi",
  "key24": "tzotYwXtpDaqAnH1zUjhYnFr1UBHQzbF9E3PDCVA4rgsjbC1TcMzmJ3hCLHdewR6X99bFfzSvuq3pnQUNZYTfRt",
  "key25": "2T7nZchybTsFqAkmAy7oZJj9bFYcz2VoikRXPoNzrjx5Tw4YzZzaVYo2punvjgC8Dx2fsdNG9FM15nqszGKj3ebR",
  "key26": "2EbE1eaaLPaBWHK5gc11yXCQeLuJNiTqbsAtprMPXmNBZ3hyLPEAHQHkTywm7zA8gE9aikGeQH41YzDVRRde27iD",
  "key27": "2dkSrnuWNmNbg7o6u4xaNyRm8gwPfY91WFYuNNXyHTtWBnekyjX3kJt6UoRmp9z1XQ9X9NQF1urQdZ6hhTxssk7m"
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
