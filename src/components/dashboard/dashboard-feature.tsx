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
    "4CK7MVjYdsVFjaoUMLp6eCDbwzJA74NyTztELbNTPX2nkffHNy63FXmDmjxzceA2JdRDB7xsvgqFpzaET5E4EqfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7sTgt59qUibD7U1Lw9C7fzJxmGpihhEkWwA1po4XzW2JfEtjBGT5xef6M2pYYP9F8DC1A1chEtCVUXqSVKNhLqR",
  "key1": "4Moh9LUnaoK7so6XGgcJHkQfnZTPzM14fTW96zXzBWPkwr2gghE3n954Af8KpGeYAqgBPWy9aytu1vVJ7DhFhizQ",
  "key2": "3JLGoFPrYgETA95WwPK5g9P3bf5QMqVaeqWmvzjGmjuM3aYyMwmRCDhKUPEAVMLyyNiYNUayGjYP36mZxZ38qC2",
  "key3": "4usLkXwJEHWk2zLLB27XW9Sgtnka9gzNJA8VMUrprhGr3nWj42AoVP1c9hyAi7HmNRnFQEkwaHrrGP68x7KeiPm5",
  "key4": "3QGder2ASnATupobCdMSXy3kk4qS7MAJsusp2esgZQpMczF169eKrk4K4xR6W7xNU77RifjpkvwMRzVXnDrP9HRk",
  "key5": "3yBiVyf43R7RPaz6G8665f5rdn4QHqe4NXijjoCqfjrpQf4F33L1YLcWyyyYB36pRPe5n1k9vUkmYa4tLWbnaS9p",
  "key6": "38zQy3S8Dje2ecHn6JAoTZ8dkXSUgRqW8ANHpYdiZ6qRgHb3MM8gwvKpfkjRbbfSab2U8faJ21yDh7bqtTt8hVwJ",
  "key7": "3cKF5o2vVxrsbqAR4WFGv47RmWbAY1RW1fk1hXFU4f2xYxUcYKzVpUdu8Hd5NTqQxF2ggHFwYkS5rdva261pQU5J",
  "key8": "mLTY9p1UpijdUNcasZjPCJmXGFgrevyj1U2u41fcY2TUMxief2JUqR6xhwjDzE1wZZ3bCgnY1p531AxGpT5cvhX",
  "key9": "v7uEkepBKEKFrZZjbTxw9hxfgqoSeye4HVZai99tt632wUpvX9KPwVjrGEvYqVNEeDT5yWB4wxZtjkYxY8rdiKm",
  "key10": "5X4exgwmPEcMc7ZfiGbMi27DxotbvGde9qcUnozvNA5U3W7ZBZwfBnKSGYev9wJp7sz6r8bGdaZgLFDZm3oHQjMk",
  "key11": "4fxYShugBGXnzqGVkiyKYg8dpd4n9FA7wzDB87EYtmzB8Hyh9tFVcinbUffnZ9s8tweXTA52vAJ9WrFQFAKWTPnB",
  "key12": "3N4Q3BW7NAcgk5Y7NpXTAVCY8zG8oJDMNZXoupPHCgbBDii157gyBCnEZjdQgurS2cgMoRv5u6Gt8VuubJcJ2jfw",
  "key13": "5ktwyFqtaJFyEhTxQ4gY3nKigdFzbZGhmBQ4iZUyeR6uwZYyQArn4otMj4UCVBBU7cxHHpo8mh9WkzcyiEaamQG",
  "key14": "3GpGUhjqSz6METwroH47Wchj9RUSuqNeprgQPSkfLSLA8BtmCmV1QHzJ44afnd3sdLudsp2esWBn8ocXt4bxyZuL",
  "key15": "Lhu9ZFMgrf7sFw9hrqJfs6E31i2uJdxWugXASf2YYfbD9h6hcdi85giwGt7tuHeCQRXYBjcaNiEpyuiaitXWJG3",
  "key16": "3UxBTZZiZLkb8SGTPHYc6d37iiYxC1PYrLVJaNK1P4DB3GpagrQeDZineA1WG1F36ymVs9EZFQoWf9zGd2ibyfZb",
  "key17": "2ybWEpoUTYXUCWGCEeBxkvPsYHoRSDzidassMLt3LkSpzVVPRtGsjvPNor1zWSS4bRzEhmkE8ozYDbqeyNNbW4Cg",
  "key18": "4ergDJP8ozMbYutWnQby7SpxdDSwmaHnZ5pWKpm7zWDoRifx4K1qumyY2BuLXbWN4q8VkKzdhXFtrP8DYCHbxfi5",
  "key19": "4B5EAqRGENno7H6FpNa5F9n8kSRWRd1F5pWFp8NYrJotmh58rc8rFLZ1STfeLbvUBKi3RHVpVXDTSLK4WxFjejrD",
  "key20": "4KYNuN8v9zAkShwak7fQUgnZeypyRQsFpN23Vq95ZcKbw6eyMbfE5rqs67WW5tnV1yU6nSNfMZ9AeQRRiGThBzem",
  "key21": "4h1BMaLsnwFhgwZvGRJmpDtTyrkfE2i9ET9G1yFW9nMo641aAZGf37RzgzsKZbiKSeD2zaChrVsksE2BKHHzv2Ym",
  "key22": "3HRMqfAVqWyxvdqWHSBnHMDRDFD8kmHy9fwzgB9iLWctKryvJ98Vxsxbs9eAdiRFyrKvg5whZR9M2w5c1jKFcQMi",
  "key23": "4SDuAMPkuZZejJjSXHYnX3gn4FDi8eotgpCFumAqhi3MW5RwrtM3CANWGt1ZJ6HswHfijkDRRSa5TTpLkcagQtA",
  "key24": "nLyjzPEw5N7H7nxhkXpunx4vKWkrPQxPmDYEeKNTrnY6TqHLBH69isfXR9PdfAa9Mz1j9ucVtqJLDUoYP6KQegt",
  "key25": "5tmTSZAcVUqhFdR1CCwbLdNtftpm6DQPnFSTwzEs5ZzvygQ12K9B6YnGw43SZ385LJNaJcwNYjELj5TfjYngm6Z5",
  "key26": "2vuTTA8QXAn5HcBdG7nm8tZNwZbn6shi3Znui9gcvsVQLwEmM1hVokfN3UD6Ar7sYdZ9uqYvZe9ijsrhWMq4jR1h",
  "key27": "5oEek1LDFCa3BmTvRJDkSzkK1Cx8EVRHsuGskMp5q1iuQnqkk43bDoWj4MYXTJh9YKZeutSwveCF587h97MS9emT",
  "key28": "5qAvaKhSk92zESNpP175rUULYwQMoUsTgqFVKBsdL7Lu5SrDPrLeAXkWGzDjNQSHsheiMBRfjzC87LZJsT5Metxu",
  "key29": "EGqjoJbtwgpNY7iec6BJEPXfRyQqovFkeeGVy4959dwu5Vh3qtiYLDzcomu4WGjRfZvt57DpHdubcTvi8XSnGQG"
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
