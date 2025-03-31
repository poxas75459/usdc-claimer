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
    "3jNaC36sc2S3dNQquBiS5Qnrw71ktnnVQQbyyYyCpqEtCcn7jwfJSDVmpboanwvu51Ru3XQXxkA5KFiTNa9qPMqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XJuGdLx4cBQbqPFJci1HDz7EQbsPVEGTso6irkBGp2UT5xu73AXzmKEAgqucnZ2nnLJHK49i5bHsWt8dHMYEKuy",
  "key1": "2RF1ra4BusYHs7fhMfGzffy6X8TVjohzkkdW35qoCzH27peTDiBfFR1WrFAgUCiFwZKqKQH8gsFVr516KBCYgaHT",
  "key2": "5X5k6SnNrK4aAxMGdJ24ZSs5rPdUw6CkRvX29QdaHeWjuqfcVFGbr5eG4EvW9Ucqj8XzTRn6hFGVTHZTPVyMyLaD",
  "key3": "2PWPByvGQXTkfD9cddSJ3e5CJk7eSj1YZGDxMSo3Yu9GyWjPh7435137BTSpk7LNyP4BXKRGWEEY2RRkrvqCdESB",
  "key4": "Kz7LB6Z3zTY6hBuQkYEjb59WR5n8Z3kYekWpR933wZdKykfmYzWHdoGpcmMdWj35cx1WUhVg6WUNnAs774cxh3T",
  "key5": "265KP4zqpnctPSnEsXDA9xUVgxEe7rJ9JHGNj1QT9EZStYmYWiRuLxZYRFswv6yNPByijMkpuhYad7iGdwW6JmJM",
  "key6": "2TzmUtbY37K2edpauChv8nM12bqDggEg7f6APCb5hzHoLuLyBR8JZoGecaXxy4DkaQdqhpBWXZqc3RAFwNiuwME1",
  "key7": "2U4bTfmpFDxEB1Tqj1Y5JJQfnDSn6ZkPvPy8PCUkSdFpdZbpKayDiYPWjSKj1Gnyykuc3oSnt4yya65HNucZ1J5e",
  "key8": "125Fj5cymSiJNNUL7jx7v2vVD5jvpdSPAtCwheQmEqzifzV714PaHPoEJS2AxfzQ1AmsNBVfpNPbvdTwW1PLqmMV",
  "key9": "4TUZ88t3eDG9S1ifiXV1riEHduq2ar7vjhnGDfqgEsdR1ttgECEVtdiKEJR6aboGvG4Sb7dvpN71DBUfXj7E1oSa",
  "key10": "Vyf9RwbY9RXSoXEz9wyA7FpzQe2GKdZRnuQ85pUcKMAsNF74nYtDm8VFqxuRvfsn4PuH2wRQTnHuYqekcysd9pH",
  "key11": "2NSeD7LgsupEN9UQQNttuUCL3LCeiRHeNaLRGhcoR74BX36BEgDFnQ4L6dohDvSGojskJCqmY9FpWfT6AuR4QEGp",
  "key12": "CXWyZo7NFJsb1y5ZxxzkdEyKMdeTFdpdKGoxxhyMsNpfGZFo4sHFXVgUxMtymrKLLLcraPh5T9DWrdRjnvsYwqt",
  "key13": "3BWPEbzvsFc6SESiX23eXrE8s991JK7uucuU5yjyGGeb17J7wxhYo6zMmjE3smBjQXtu2dEz76EopMF1BA3Qimgd",
  "key14": "55Ezen841q9RpUjQbDPKbHCwMN6NJ3seRJ6Li43Wr9rN7yuj7gAnzbkJ2DSWWNcf7RQrKtNERrsDEpzvP7p6r2Yp",
  "key15": "5yKQWYYXS29FbpJkcUkbPnAycv9XPyahTgBMF78rR5RLgJAgjkzFZLj5bXHtNggjry1pL8PE2BRnDmq7dP5b1mAW",
  "key16": "63rcL1Cd6q8ycMV6YSAfzjEDgSBvVPSMprm3YnYrXxXTQg8mk3EbqXzQ2Yc6iESxyrpD7EZCVBmTNZ6MWkxpb4vR",
  "key17": "Ny6Fgj4rvUMumyH1XoMmDtiw8WsPobyte9YoZwsDzNt3z7BQxACztHhDtjwkhewxwgfasLJmhjASLoNtVtHBv2C",
  "key18": "2sPXGKPhFnzkWiYveChUUosbUN6X6nZMFfPE1JrmeEXdoa8Ebg4t36ib3wiHNeCNfVYfMkF7CoQEaMoHRoejisRd",
  "key19": "4e2KeTPKPKQ7N6WT7xUa2nkj5nMRyiTQzThsH4sRWjg8o26JJFqm6r4bfTkmTERkka77HVVavZDHVoo11AqmKiGT",
  "key20": "5dWgpRmyjmEkuJJnWtspjrxY1os52YFvc1DjrSZzvaSHrEw5Apv5PrNfW2ZEMe4G2RghrKcrVLtvhQcJzSKp2YFC",
  "key21": "5HgFjKkQM8oVD1TDb6TW8epbzmUadLbRfdjVMiy2JsMimmeBhNzDqzY4iuE16KiM78cU3JedZuFAD9BCqc1aVsef",
  "key22": "2XvbRzGtPVFh2Cvyvx3C6SWJufMS5vp2E7rXgqaaf6KroQhULZao1NVihr1j4fFWqZM1Q2XKmcQJaTxamzQzVvf5",
  "key23": "5U1sTJ5aftrd7Rqy8FKmruZDVrMUaFrA47pgfXHEnk6TFvGcDL3ytGivdRZkUDbLqM8ui2M1wECoYxzF8U32NXod",
  "key24": "4fSQT9cGx6GEdBYiNatXJXtdKLDSeJRjjNApUyVbghxTgWxNbZaodymUkmDDF9pdSgEhdTxduEwXaY5srrAnMCPn",
  "key25": "5Xi6PyoWrdJLCpk2Aa8Xn6W8ZhF1nEMUwwQNvRRMyedvPuYnt78pLA97m3MdyqNBJkWg2KsFmviAaowk68JmqMp2",
  "key26": "vfRK6DNrGzaq5Je8dKbN6ADmRutbRmNg8nKt9dt59BkeghAiTGu8mds6MARfVjKHvUraVJmKTexdATnStMYzGTt"
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
