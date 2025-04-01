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
    "51ayU4MmMH67SLSNQxMwGccRXes7zGPC2yFtPzYMaGzLuL15vc4CH1zVboBrq3Hr1cxyp8puTZrQAqZmfrcGLBvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgDucY11GMDaYiTbyxTZ4wxQZXLrDLxMMzRAGYYwA5KP9BaQWhwi9kmg9aVi3URme1Yb2VrdGwFQKyhUTD2EHk4",
  "key1": "3BUjv6vHpn7pEzG5gNiRGcx3ondDCeKYUEHpf6YeQcN6oU1RrNAw379KCvKKNAAPeju8R9HoEumBbMpfrGQzpxUA",
  "key2": "JkHnkNwGmmqo8qsiMxiinqv7rTsetQNir6vYoUHPeq6cHsbfGNGwCwLyTpyrDTbddHiWQk9oZrKMuVJkf4YsZPd",
  "key3": "5bmWCW9xubNQ9gTNRf5ijjmCS68rFsGBNdQUBpBdGWp5aE7Q74wHmx7vpvjjNxCYwSbDgXpFfkeQ6NiQGHzst9vF",
  "key4": "5VQZdeoG4hcEugUosvFh4Yzxn6HmqiM9cVEkYSBSRNRHTfN2KnJi1CZNhLkA9v2A6ihaJfYV8kaoeyHUiq2jPjiZ",
  "key5": "39wQ2QSvUXQDjStnjyUKAfzjSWzwKFe1wcD6YmcRiBbJaoyM8VNRMU5LfFmeSL1hNffWZL6ep3HiGg7xJjgyw9R3",
  "key6": "2MQAxMuCjCrcELA2VSkHNEQ8avXs1d4zX2QdyxKWfpkVbbC6x2n3LqbAjvJvRdewrZ76vcZE9s72CeZyKoeGeBfc",
  "key7": "57MKdhpaHt4aSzPApjMz9QhpXRmidFnLv4JYJuk4uJUynfEKBtrc3WVtqqXB1MVZAuRGgsJpCZWW63jp68WDz5qk",
  "key8": "5H28gRGA7JBdY38kzGMTVi7UesY2xLHC1Fky7ivRLi7jwpVf7ZtNas3bWLMaud4tbYsfNsWQ6D9qD3ZeHT6J2SAz",
  "key9": "3kBhLVtVEqQYsH7oBrDghL6vyURnh8raa7jZXJaA6CQ5PZK3y3tKend1wTe45WUhs82qUF2HY1QdC2LZGs7MdfWx",
  "key10": "2G3CrqDrz9p1ViwVXkdxHboXVF394xXJLWvzcNDZ9J1QQY3EiWq43Ywa4qmnAL7W5ME6eWFLiYPahiLcb7ac2XLR",
  "key11": "dkdaGGkemr5PwpADRDjqhiZ2ACVAvPQQaTYxVAhNxetDZPxWgNZ343XaHDR5fB21aF5HgT8nPoR3M6Nkua38xgW",
  "key12": "31hLQU3YpUNx7Y99dHq6ZSvLZJ1Z3qpES8H27oSQFvTTu3BwdTHAaQnjRcVtk39CkpE5FaxYp7jSN2vQQptcgR2b",
  "key13": "3HuMyGcC2sshvu5takaCbkTzFsBff7VpryXoutZXP1qnhAmvsya8YyWfuQ6MvxaBs3LhrbTRJxAURpvmfqKYMWKU",
  "key14": "2ZLt8JkurcmvMMagjtBVYQeM6VWe1rRGKkbcJyPXV6D1up9825oxfgm7rex25L5UVVABfPUBnakdKV1Uqs8sVWZg",
  "key15": "4LEZ5FGZmQwRYhCXrgn1Db86kdRSMrWMkPR563dPmdXhf2T1mFrXPuqdz7RtBCyQLcsgoby6GKAnj7BPnxWY3CaE",
  "key16": "2B4ua4ZmfrfC8CCVLTC8Vk7WtpDAd4CJK7xAGSUb8XJ6pSCpxwL7p187ptbeBNeT6SA7xarYKAq2Wutt5CXYrcF2",
  "key17": "4J2DXvNqZRjEXo26C7u7bdZXdoh5KnNP3gC8qM5WQjYrFFW3ePGMfqXUkJpStFPwyT5bFhQ22cs7tquwyNAEM5GU",
  "key18": "mWWbLuDLHumRd8QuS1FKjHssA3CgbspP37iedcHjW9WAgir73MxCgNhHHi5y3AfMV9514W73Qs2DvanqyrcLFTA",
  "key19": "2SgannFKDyhabpxbmxzCrvi8An97QVUyiYEbjE9NZhttALrNpSMc6P41ZjHccJGvFz259m8igFSXWSEU9gGDqqNR",
  "key20": "s3c6wi5iaxJtqtKQXAZRHU6vRZPCyn7tQhnTxczdz85hjtNNfbU1VWpJgy4ViAtAqbG1F7EW9rS9JsRQgcxLU6C",
  "key21": "2RJn1MFEJhGFB5NNNVMLJRZWkWNodnNkEgfJpiAZnwHxPcuRuGtctz84f6iTffsogQtTMTA6CT32VrRUuXNxRrBy",
  "key22": "2wqh19e2HQCD5p93x8eoFot8pmgqUCEFCvcXoZZhfQ9scnbbz9ZQrE2raq9ubE6HYM5WSzKt3NDYtS8eKVh8xTkP",
  "key23": "2XHXuem68rteeg151SWnSPZw6gy9VVDHaqTR2rhny3GbvdskFyyAZbCusLXr5yL4xZ6gn7EkckdLND5XpeWkVqEn",
  "key24": "5SFryqf4yrLmi1uQeG5svdY5sjXMDDGXq5dn2RW3aVs7XZ736HzFkbUrnmBb8YNPEdtzftuRW5WCb5wApJW67PVt",
  "key25": "uP97P5wikodKtJ95KUGKnQn8v72Bqo3LxKuJDvHEbJkh8B1dtu44iymdTsridaanQ1CeGoBkhpLpkdxJok1mKtD",
  "key26": "5Q7GDhBXbR5NLfjaPCu7SvmLadToHB15bwwwKtYdC3hwnUKCHheUmFTCUUJexDC8ts7Ltj4TKEzxtkT2XXA44m8B",
  "key27": "3qpc29WFpttvPw9ZCUZVhH3ouorEbNkupYDpWCb9YcXx7AAnfAkEDFcrozgX6wHzupBWK1rUZ58QVLAyQui4HMzq",
  "key28": "VieNYNTRGUXB87Zp1zrCTA1omjyzHvKDhJFerQJt8AeLhZUtMtXFhn6jRqk2hrj4zZ97U6dwh4oNYPwJJUJUMcC",
  "key29": "EWVi7THpNhuausF6FErZG9Gm1ML376bVYAoXKa32GNSpqxSsTKadLWeVJuvwhue2LZDi5MvDnd2989FQCubwDEa"
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
