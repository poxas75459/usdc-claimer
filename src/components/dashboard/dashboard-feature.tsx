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
    "2c9GFY7c8xorcGTAfJFZVCsVsYDxBgVsSQTGa3Stg177zQqaRsFyk53jvSyLkxvdWbidmqB6DGZCzYg4hh5mwNUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4epydMWJQ7QVCZgHuahwvjbgMfFzvGFTDYZ5SzZRtH7bouiNLaHcJkZGb6rXzViFs9bNoJJFxfWGotmJnQX8PwcF",
  "key1": "4L8RM2PTKsAWAiWgrxYe8gkAchouQzxdSKdnZEBQHxzX8cLJm3gXeKq7bmeqnbihvQaP9kLDyveVUDVbbZk6Wg7C",
  "key2": "2gGRUfmCWRn3pekiyEMa9BWfrKme1dvXZtMxZvNsfDgUJG4Q5CYTksnUkP4uax2KMeZNhJ6M3xLzXThMR9NU78bK",
  "key3": "3d5hvu6pnfHv2vnCxBhLxeYQHtUv9uSJhjSkvCwQuqNJ6fq1dxJqzjE7zKM1vZ82B5JnnpJBb4jD8hRpi5HELDTF",
  "key4": "qjLR2gyQu5viQhZMmgZ8v71Kn6VN6GLzDyyqe4gVp3MhcBeUtwDEW4pQgpKtaYDKfxcTd4X6jvHo8mEEGR175PM",
  "key5": "2iDnxnZxsNaU5zDUcyuxQmgiebNoE57M6ZqbY12xLmcwTnsxvCEHKubK6JGqS1zjSTLQPtGeB32zgLaCvMJYrfJJ",
  "key6": "5L26etZVPda8k4qCLFmSNTAd2DaRFj5mapoxUC5w2J57kBN24HJnbNXLQU5eX4PitVydkAnrMhrTvkX8EhXeyD7V",
  "key7": "2p7mR95cCSDzox13z3xT2hjVrjb4qC5RbikYNaqcakid4iZcHzE6UV7sTU5Tx77pZardWdcZNygy1mRRgkEZHXde",
  "key8": "3foasWeTuHEFV3gAxM6gdj74vic1sS8z6K34KKKD1T1VB1HqEoVeyLmPVPwg1PzLhf4reEiU6siKxDpN5rivUF1u",
  "key9": "2TTECbTDyGSsFh27EXfhDtTqVh4yPunMC5mSmNxsnMPP66BUUobVG3vuh7xgjdRMWir2SqfUibuiz7afAbBSC4Fb",
  "key10": "2SF1CcqyiNeGpyx6ozfRsrSKusDVVYhsmvHt9Ryn8vpPCCDbPuU8qnV81haCRjrJ4P1b3uPGusP64SMfeAQa5YBK",
  "key11": "tP3qDGHLuZsmFySFLqNQqn6r3DnWj3HAtGNFZXLRp5cxLBFwwCBh9tVYspSr4yxsfRaRqCYPEa6aDuLgKkaFhhn",
  "key12": "zTxg92B6t69NcNnsZrHnnfr2Dfm4HrebX13aTeKS4tGeGCSu3AE1mquSjzKD8Bhj1ZJKZfctHoq9FLTN51E3B5b",
  "key13": "3BXHu2qwUp4gCtEFJ5jNiCPfYwtzed9C3S2Xz1Ea6cVQCdjtTbsTSYa79aZk8Kp6c4za4bTUPTxia2h94PHKf14P",
  "key14": "35KcxsfYiwGkLFgShR3kw1JeG2HugDBn2qwX8TYcB7V4ZoK8DqKZD7K6gMK9JgBomfmyuf5PydSqQ2gF3GhU5vKR",
  "key15": "3BuHhrwaYAw9wCDem7vwJuzaqPQhqSnrLAAsK1HS64QcyPZHiRJAy8C51K6G4bo9SqTPzXA3tiHHrxxZVNsZkbmB",
  "key16": "4EhdxNr4S2ovqwNFFQsvYxXa4yCAyfvuqdnHq1wk5JYTXRJQ2f6Dx48i4VZ2h5qesq4LAuckbqsux6TBwzBe3WCZ",
  "key17": "5ziL55Ja6Z5AnFNeCED1hPQQdxiBTX8Y24ECuQTj6QZeQjAPHXudVbb8CLb8Kx9ZmCBNEp7BvydBGEecvpQCwYYq",
  "key18": "3Pu3GmMFJ8yYT8EeY7Xpjrs8TmvdJKCkxvPhvymsjmjc7eTzRwTKCvzzw3EyMHLp5pS55qHFkAQhnePW7C9hhSXr",
  "key19": "3MpL1cch8zrRJGuLpuSbUP1U6ieK4u7BcUD63qontcZAF8yybR2d7Qj1tMbGSonTyXjjHrchB1dqUYwpRw4QznUM",
  "key20": "6VXx4zexDFY4Coepcc9HrYZDfkUuZRMWSCdsEeRCK3UN5nVc6NwGpebYCegr9hwU5wQ9KGMbugja8XQf1kV4AvX",
  "key21": "2nBtFYAuAf5KFv37h96bLJyuUo83DqYHbtuncyaoMyLFkbj5ZyX6VeVYR8aMzNF8fDWjDAvBgF633gvhEUChdMHk",
  "key22": "JxCAr9zUkfC3F19BywmuhUKX5e6fgsWRAvVqTNv9ciQBTjb6oUfhq3ybJ5ejM5NyXggsbEigmvkdmzWuP3cYPkr",
  "key23": "4F1u9jhEaEwHDX7VtbzQpTHHDoeMhC84dqEi8MZ7dhpvSjyjzjjaZACDGUiKkp8fsg9R5FnqMntRe5UKuNY4ZAP8",
  "key24": "64MNatJjXCXtAvCm9BbLFZk6AFepYXspxySGjimK9HeUH4YP8fkDNvPo4eJDrzrtdfMb8ktKgkDycLks7CqPvmfw",
  "key25": "3rpBWtRBCMKr13LBLtQyPGwLw59qYJKFC1FpHkqgBTXAFA6zwHT5pXBZFUJpGdwUZwrZ7No7PayzNojLokcV3JVX",
  "key26": "5GKRp9Mh4nf6BugPzjUsgEDHR6yrwYCEenKyD8WaadATy9NaU2ZwzYta86qFD6zzRr8bmrQEWzgZvnKhKw5HF3Kk",
  "key27": "5bh4EZs4zSfn62AKxQ6AsLn2W9mLigdcNbGyZYrzjGprckP2vXrUZdBxqABEoVwk5b7kTMtqSqSFpgJ46hxJoWuo",
  "key28": "3A8RJWKe6gFgEdNXhJfWoueeAYNUCsaPvR8RHoUMixd6s7Whaa6mo6jXdb6PApJvfe5uqF8bLWqdUzcUW5kL4BSx",
  "key29": "335jtk9S68k1drK76Yu28u8nH97rfBaYSjwhjxe5CJ7GnQZmPdSHvQF4dscJAZssPWnJZAWR2iMdkDPsUCn15auH",
  "key30": "3YhmYxdGf8EUY2vqTqiKSAkq6kxQu6xr4M4yPyoqFvNghEuJxPNxriiAiQ1yYnfDVq8xFDrwyge96gBBgXwWupjM",
  "key31": "3KdXKb3hhr2TwGUaEvN2XcmB1jETdmY3im1gaACozkpnkstaSQaRPqa57Bt62CLJKprrpNKUz9ASEvFaQd4qQCk3",
  "key32": "3hSpxUh3hUNHjFaGQqEVP7NAw8AVZvs2zWn4cjnTo2KUY4KQ8VJQB3TZiPoq61H8WFyW5eAcmaHGT6y3uQni7J62",
  "key33": "2yzJD3NqaASKM9Yb2fzM93YMaJMxYReRK88GDzypDLERhmwVjXMK3gL61XHd4ea5eXum8SfWz9s8A1zRqXdGd39L"
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
