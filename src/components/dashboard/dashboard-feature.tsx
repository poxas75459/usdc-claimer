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
    "2kJpYcogjZnDN69r9i22AnK3vN2JPtTTwUCLf3DzzvhFeArAwAdXey36w3sXtSGjWmFyXm3HPGapAUsGkWYJticA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEoCQdRDShqFVzPTJFiwhPtMvK6trNCVPMMVk2c6Dw5ZhggvERGysX4vBqEDEN39nrMPnU4AN2AGugqkg553i37",
  "key1": "29ipEwT8qoHKoTDnLCSAttwWrcXtHUhmE6NpzjD7SrA7hE9AUjfjgjA9BQnHnSBhgMPqfvKoj1QKYgK4aWdLN5sy",
  "key2": "a3XQX1g44BcFy4jv1hfhSohsDDuVx47Qw1UmDU4bzC3FDHff849tbHBKKUAYNY5Pq2aVb3Tn5RbmFUUk82Nd8Vu",
  "key3": "damFqcspWDXxb9Y9nMiktZNzLipd3WTGNiW4924yJBi6WzqZ2PKd5aPE5hjBTJQdm9Rxt99xFwq7k3uonKaHdMM",
  "key4": "3obEb2iHCAkNBxG3PTodnAjFhiHGAU6EENqNxFiH6atKCjiU8H47ZnPDgt4haVQNQ7zBJkffQVHbdVEsbHwq8Uzs",
  "key5": "rF1VTJmQy6ArqRLbVsD99YsDCfTPCf8r9x8ebzN1TDUACmeLAEM9rLNznQDfKNXPMNwS9AmbUUjFwjgk8nJqkdo",
  "key6": "SSUdJYdRvjcegPiNn1x2in5s4G3MisvkCGoAeej3AT3fueyCdx4ZGQcKjQgcvxhfUMhPMXpbBqmDMgTzsUdc1j4",
  "key7": "33RydNwfSL8zABim24jwxnWLhtvC2PvHdDyzeAiM2bZE6mbGAA6vejC8u7eSFnTmqXvKWgPCRyT7n9wjyxP4SoWQ",
  "key8": "H2UCRarRcKaTdhcwF8MecxLUSLFKd5jRzBkkEa2HE54xaCrWJzAQceJ1AENx3Fach4xmxxqFw4fMjaLMamKEC49",
  "key9": "2VxUzHrCEc8DTUCAHqMSzj99xoQG9bD5U9L6MwDrEmVXVQ4MarhcUjsbPuQ1ZnDQ43yLoWusgSS2XzSrvUz3JxtC",
  "key10": "4T3voq5KCanpJfs2UfmJ2BKpENihEWRQLC8pym83aAQ3VrH9Ma2kXj7oedBP7DnTNxzngehKhTPfTxAtoG98aB9i",
  "key11": "rxAmgBSXHfzn7Ca2tRuSMs8uJDJdZWMFTUjs3Eks3qtURX9FJUVBnspovYtg8pQE8iEmfV7fmZDDiPQmrH7PZzh",
  "key12": "4bJcefuFfMZJHcuB393mqmW1LGvJPKt66yFgw8QqCe1fFEXo6HxBDcEqqwWFvJfxauAc2DEruVnjSBZ7CqqqmspZ",
  "key13": "4RXjjndbNLXEPVPBEFL4TRUDNPsDJpx4JbcMhnxZkuoKi44RsSgAEs9LneKWxLtPqsjS4SLGHLv7A7kvnXRqgzHA",
  "key14": "4JprkAUTkgPMMxX26578jPqWVry11V8TXY3N6ZcmRQqrkHyVqDnU7JPKCWMWYX5yVJ76Q8DAV9kqhLUYDRYJHARN",
  "key15": "5SafMHfCn6Kt5PPwtErfm3ZjjhxVJkQanMVXfJ6DJLuWQs4LvNHicuTzC6jGNXj8GTQPGD92i6obE38j5ZwmuWNi",
  "key16": "4JutUzxSNfGtvWPikKYzmPXfuLyJiAQqmg5Symo9ZKRQUcCngmbYRbPmUwg5CEGuvgT5WXyJsWGn3ZHtMyhGn4U",
  "key17": "3gBN49XaYESf9uuUYjf8SJDfh4kPuR1maoom8CdyXtQUF8rcwpKJpNeiq1tPSbX4fHosttf8Wx9BVhdcj6GoHRhz",
  "key18": "5XG55Z5nHowoyA55jy4uDG1A17hSDzN2BUWXs8LQ17n9YvArN4BVdhZMruwpom9jmbjAR48gWUtnC3uwGHDPbdDe",
  "key19": "4PdRgdDrSnrFUDRmXxAAnLovrzRfH81qdWius3nPUtYVbexURcQhy2x8oUZzVZmF2DAB4X3Na8xTM4BonZsA5tbR",
  "key20": "3UxLrjkVa3MLDKyj4X23fRnX3Zdw9AsyXZSUmJcTrcgEWZcBYPuLt3a6cd5vq46Giyfa9ofn4xmDhk5Yw9s15hVQ",
  "key21": "29JqekckVJ8keeRKsbt9EpXNixCT3NZPsZjy8SqLBTmzPCqQBaByBBgEykfjBVQRtYJvi5HSL9MRP5NMsMUGn4h2",
  "key22": "5mzyagapRCxqGjBhrk9oNBbneeLQgzWjRM4wmwetLS1YtoUx1C3xGNWPc5j4s9qp6Bs2GCLfLxwSVQaQHkNwFff7",
  "key23": "2Z64gmYRCSZkk4v55zUQQaGByvDV7oFmt21Rixc5rm1kqNYjRB5XCJ94eWNjMUNTzRELQu2pQi7QkLbXebgBjnoS",
  "key24": "3VTuFSByNw8EBhrxasDDuZ1i5yx8cbbLs3q9x69BtgXFwAecAfpA88AJvL38rTVHRwmCA14PXRjxEEdz6gbE5XMm",
  "key25": "436eNrWoCMx4fn3e8hV4TNhkS2qNr5nULYChi2RxDBci4SNKNZukhAF1Q36vjdhkJxNn8mcn6N5VNESZGCu6LTww",
  "key26": "3dvnoZMC1AiJ5NDeXqpja2WeoFZ2PG9pVUSf8JpuFXdidqwGoRRKxLGJUQgb4Zq4VuNr9XVe7GU5SWn7kkjE2dsw",
  "key27": "31dm4tmVkbayZipdJAKtNSHkshJrdvr9nUCaRxpdoxuDVszwBZcek3fgkgwowaT8QvYWLaChN2YNj3gj1BAgn4LD",
  "key28": "2ekP2xv9223iD3K2t3zpzUqeyk1uWyNwGVkj1oyYjU8myDAy4cJLuEQaZkZczAPgD8tPzHN2vVEsz2t6PwaWEM8W",
  "key29": "273ZFnpMy3KPpy5A5MywxLAumKJpeLYTPh9nbpmnbqXErPMg4UUbCACK2ErnPJ37RLRfvjnZrQxSzUGXsGBTmghJ",
  "key30": "9JJzq38xrooaLBRwVEoLJL6FPAHFLKS5GK4V5hoJKTWUw5m6kaXtSryte75g2XE6Xg44iDtKieVtctebdRXWFkP"
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
