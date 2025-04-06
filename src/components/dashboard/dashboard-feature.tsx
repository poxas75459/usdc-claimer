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
    "2hfHht7npxZD8Ydak6zwpGubctYKd4LAX5EhNgH9e8sKp4W8KCdKyCFEJJK963inGXXWfATGdPSjBbJmJP72neow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TV1YuDieaT4Z1kdtsBTLok2qDK3ewWf1hvMXja79wnnHeb7fpN7PyrpJQjzWALpRkt7tL2Niifp3iZXDGjMtoSS",
  "key1": "3bts4Rws2hVjm3xhojEBEd1xYztjbEwBGfGXG6n8attD661RXZvzGnz5D4PDGtrsdseZZ9NVZizDwY4wLXBcG1Jw",
  "key2": "usad98NUYdkyUREs3fV4TcT8HhD75krNLyYpTiNynojgeSo4GMevqFH3r1wdtqqbwCLk59qndZHpSSMRHs4Mu4L",
  "key3": "51wkofc3gUxyJkpG3RkaqgY4b4feqqQQ5SdGKNziukKvpNUtrwRKfxBzbpguun8iRDYtHN98fzQF21cwM4FH7ArF",
  "key4": "4mR9nd1dxuWxtcHFyKvDVozQNTC6kaqnYGTNg8uCY6yu3956J4kR2SmSBnKB7Y4uBwA4EfkbA8u1pioAeEEUDwGt",
  "key5": "5BNvckH4YHfso2DSyNCXG5sRdnPGuadDRiRd3XchQ5X4hAoA4ySWn8ro3WAg4eXwTJgNwxfKe5yv2pSG2Seg7QTS",
  "key6": "5ESbaVuWVpyEQamdx9Ft82n9CwgF5J8yp5VL2iwXdCq3BWezTWqLJmXmhtEjKGai6UEZmnXBC3EMDUntTwNzhtAL",
  "key7": "2whHjMywcE4yxWnYDFuKfs7BhzYxNXsor2FdXNJDkUCCxuWnZFKv2UnUEfUkeDAGQwierT7QnckJcPVdMy88gi6S",
  "key8": "4Tdd2zDKUd1jfzH6BAEGh3mTfkDM1XUG7MZKt54HYUWLbQXcbj9jhRF7BT4GwUVKNkAG66Nw98C2bAJQY3cNZPRq",
  "key9": "21da2ySJsiTv57mUyS7EvHWkFxh3HqWTsSME7xjvdiqRhBd61pqQvitPPiwLFMSbVAhzUXw8D5Mgsg2s9AUP4Fht",
  "key10": "j7hNpcdt9PH8WWBkS8srUNnE1Tn7XhHBpVJEbWiaUcU17pZPFXd9Lp7C43Aeqm8TNTuhhSTMHeSQS7qy58RWm66",
  "key11": "4bivMmbTqwnY19NUWp3GZZPdegvtnyyoj3EQDPL2J9CCNBNjSo4x6enh3yV3MSVmyiPW1GhzV3uybDTE3ogxTNG6",
  "key12": "4WSAGgHsxYRstkW8wSm9aamfFFXM1j7YsFdHYfKzvMGqaUNMCkbqVhcZnKcHGw2rG1d6k1XVKbas4NNoBLgoharj",
  "key13": "4pcUPiL3xqjJBKrhy24XdWF5YqYwoptzy5DVaT6RzeVt7igPoXsPdHEmLKKcf5sfkHD4p85j6et96wgnroCyqiPb",
  "key14": "3k35QVHydKJE3WNovB4xwVBa1vSb2XrFg3M6VYpKBFthqYfxuXLXvKZ7aYPCb7QxpTx1g2h7Bdtr93kndsdpxxKU",
  "key15": "5mZ7oyTiQ5fKqReDLfwQ4weht2QXtgf65sFP7a5WZKiGnmfNG5yA9u1kWJjt9bcYFoZEy9s5hoMG1cfKbRw7aoRP",
  "key16": "2CprUdA8VWhYWFKwCbEWB39Cd5eLtrDPBhFv3bbVmeqdZh18hW1zRvVBSuWinJFz836ovi91Knm9x2hksGEMn8e5",
  "key17": "5FfHKzLr67kUX34h2JZTjV5jsgqqFiWeHay5WWLZix9qc3K8PsvgCzfcdz3PkcrGyh7MNKTnaUQWY15cNMGXv2eB",
  "key18": "HorXCUDVUSFhjkzSnNcEMTCVDdshxgU1xcxXNvEU7rjLsLuMJWgjsJXnP33AMmfZ4k9c6bJetZoNuzAX1cTub1N",
  "key19": "4iqBUq3wjYfA7jgdxjNS6JyT1Qj4UxSrdQ5JriCZGTCGEt8yHg4jZdpUbTKNZd4pf9nyn9jo4ZNcM1ty8aanGa7e",
  "key20": "2E19fF5WpVp5tGbD8aur1mrbEvMHT3UrVx6bEGJtisyfJCx4hh9vemdsLNaFy1kLR7eHS8zrJpNmqDbJhe5xEniE",
  "key21": "2QtoS5wa6ty2GeYNtc4rqkse5o4KtRo6BXdEFDDUyhpgcgzrdoPhvK4eqEUVEBYpM4dH2UnW5whq5PmH7bGyate3",
  "key22": "ybEi6BUi1pzzH6CrhwEkh4cBqeeP3ugmFhbh81ZHcnzqMn7mXWGok3WSjWeejZETFZcNpLKV65GhnZiQZEHpLiF",
  "key23": "59YQpbYnKE4mHg43TsVBnvp72hnusBXKGxugMx3bhGU7ih6VJscxNqHLVeGvKVpQ3cd4rqGPRWbFZYqsvEWKAR8h",
  "key24": "5eX1GvXV1BjrcbM7qCU7Rri2mWsJEV4LBC9mRwha2ViLNYt3vUdLbVX5cn4PTkuGVyCRpLAf97zcwKbzFNQroaJF",
  "key25": "3jEjU1UP4VTNNj3qH6mjgUR1iTchuwAmF1wVkCqtkpbucMcvJetpU6sYkDqB6JJnyBbi7z3EEADAAWm2gR3FSX57",
  "key26": "4Sy3aRa9dgw2iERS1wYzagZkAAk84F2WnYS4XL6NyH57vNsbioyuVAWWqfHRk8ABQuzmxqXmYNdRqiFNQBBj7pKN",
  "key27": "5tsxDv4Y5vpAjYpchuQd7B7ZNivRwjFR6SqeA9Ceuvy94DV21NnnKcVULQ3kxVbkXafPgcuA25pjyaq6rCWeU7ZN",
  "key28": "48AdqEaqYWKqp8XHfF5y367nXMMywGyi8BquQsDxhCfrf9SvKUA3kazWSPQCkXn6QAKkt7YAYfnfgz5FyWvLMwNW",
  "key29": "32AakjHhyfwn56LuNYR9bcBBYFrp4HmLwuLijUCeQnHgmWe6t7Ldd8wdJ9cNKJf4PxvQ7TYhqYjKm56dvPtsvFh4",
  "key30": "333DhrA2UcaH6w8ZrFAWtKZV9BJFYKwCzqavF5ZibDAtpNPRzwRNg4LShMSUeDHekDqsHkorMAPWayYg2qpgtMWf",
  "key31": "5QyxncjnAKN7Qz1xHSbPbmvvGLKKT1y2woPkvg6E8YWwSfD7Uxgu2qLNJaKTLYF4Hv14W54KR92j4iDjazTgg5xG"
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
