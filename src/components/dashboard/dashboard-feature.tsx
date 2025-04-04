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
    "DfFdCApVAn8XJ8mTyEnMDUSPmXJ1NWP78FpWjFDcNueMF4fxn2q5XbgVRyW99FHJ1ZdoghKmyYZnWh2gNoFhgyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veAZxrCukf3FiNyejoZgFQrYEATui6poX47KLWk8YpwgzjXfCDhhkr98za4G4zVd7LkiyxYRWSKUKGfmRcWrdCj",
  "key1": "5wrZwToJXCgyGoNKto9wq93S13bTg18dHk8fEKfjPYvoyhDwA7r8PXLc2R2np3zMxx3wMxZriNY5rho2HxF79aPa",
  "key2": "4fUULLRVzXrXapSahSNAfewW1QPBMUF42mpDJKULExZpCnEKPKsWRB6w4iRfRBjdggbkoCbbbevv5jimCE4mVZvq",
  "key3": "3FEe74AMmxwc362S1svwB5UxEvVmtKt4RqUVpWzeyDurmCsChSPa5dbezRSF7zC7wKW5NTkR9R8YJWo4jLbMS6Df",
  "key4": "2vFj3NmgwBstbhAZMykrcYyrtuMsPPHn5RSzf4SnqFWuSdWx9NF8RQZ6LeCYBax5jrDtmFcwNp4X9VfDMwHLH6gf",
  "key5": "2QUgQ1522LAuGvv2Wa3sXuPnzn1pxZVqv3Punj3LPwNB56AAymPvh8y7WyKRAUjdLUFfkF3woEdzG56KLjtHfpq7",
  "key6": "4Uwd6jiRXaPghTmc3RTy2pkob34xtvnkLu8T6GiBe37oMyGCVqz3jh6vwfPKQ56wfycYuKQNVwZvoo79a3dJ5LZB",
  "key7": "3o5LK6TVnpnFoMgqp9Ydog49tb3QLWktCU1n9oWpRqpHAytjqmdEmcFfjctMiGSCEhiioW44D6aTUoho1JdNpUyV",
  "key8": "2oTspQ53cpKkQHn7yRDriqtqB9eGnRumapY8S9uQJRv1UjWpHRHPHmi1Pekb6amBijknuiXoYFGxt6W3dx55MM7y",
  "key9": "5Wncqyhe9kQZFJWP4cD5js9htC5Wd4TdekXwCXXJY7DyKb6jTqUJG8wPp5XRNKmcaeXyW5227raxj9VBk8yvHGeD",
  "key10": "3MSQgXmWhmVGBE63r8KD6goMLg5ZYyfBJxHbRiuEuqTCwNqfnfETK8QYRVdG6ZCzUYamq5AGcHbT8WoKwr5n1vhh",
  "key11": "3GLnc9RPx6NRMeaDeeZDWSw8B6d2GAs5FAs5oNi5LfD3M4mZwy8a19Y9px44PrFL6Ln7cDALdbD3KwybZ9j1W6xy",
  "key12": "3YqMrRivhdJowMU2txD6iPvB9yojPxtTiJZKNFYWS64cqASxrRCArdmEfqsVLjfu1UE32Gp3Uu9pLk33rwxbYDKX",
  "key13": "5mepdvVeQE9YK5YtzH22BDRqm97W6fqz39yVNTBYqQ5af8iPzJbWSdG42NBtZFGbFxhR6KMA4A1cTSkpDWJjurUT",
  "key14": "9GhJomeFAzDnAVmR1wxBJpTn5va4Gjunmp69ds1DDCGYv7r9yTwEPbXJeLsKrjWKut7yfuueRSUhrjRnascn3DM",
  "key15": "31NPCSsA7sHYz6WdkyWPj2YJcxjQQSZQS4XKfrXAq5uzjuth5bH5cJZaQLgdv86TbA7ZXV3o1BJ1a2EoqQjNy2iX",
  "key16": "2kCSbS3Gd3fW89ZF6MA6NeeS3YJy9voFZUBC5WM6PWdEuaj15id822yZvmafGsSUJPd3TuUfcNqnbgEP9pbZLvnZ",
  "key17": "23vM1nCpf6t1TqNthLefyLC4mzU8rSp6eofYoQZY2H1DUYMnhcWJvkAGDxB9LEjgYoh9g14iYLBBkoCBxjrB4GiC",
  "key18": "3BQRdm2xrqpu9bK8NEXN7NH3Anj7YibX3u3eURr9pH3D7MuEFSeVqVeh4N6JQUNwvoU997KikcLQxjZyWQjYXumz",
  "key19": "3GnqKmWTFWEGvPaidzHfGzmjfLcGtgoeYcsexchyUxrBg8JC2X32fGM8EWdTNVQinQ1AK2uhx8e7DsHFyNnjutLC",
  "key20": "UNe9peaLJpxHq6yeabFGjfnXtAsTDspCA93ZSNcofFEYPjdGn5RWk1eAemia1R6tUzFQ1yENfzmksbPvTir68vG",
  "key21": "4jBaFhskesvxQs8omwdjquR9RX2mCiUBcbYZxcUoTPTdQkxz9haaqp1pgFiXjb4E6k6rET87WXeZP1BUUTQ5PtkU",
  "key22": "5rxYEBvHQPwjMZ9PMD6TMAitYxEbQc9LjiJ9voFfxUXuWA1E7djzE4xNQSp5swPxVeZWLfw1qeYMKdjsX2AVHvyV",
  "key23": "ZkuL2CvXLtGqeVyBWey7mMK33e9E4QQYCtmER5tgmrrbzBmG6VaBLyCHTpfJCCXEAziJH5NsSimoK2PnQWxpZt3",
  "key24": "b4SCBgMuRy4BZDPxjMwai3NqwzAv4gyZHGfYDGbc8iixqsiyg2NMxRZQwFESNanqYVcMw5gS3ik9mcRvjMey9Qr",
  "key25": "5AmoFPFzQaE4cYV126Ydgyjkxw7bvSvVDYXFVeqhnuMBzcHhGWfx82VAmq7PJJ2Mmejany3w8bAPXTTqQRHfhvoe",
  "key26": "2yAVYswg25jpJ5vV2irUjvuGQ7geNKhCh2PnRvgU2vGpLGdTydG3V6W35KvfH1AfNWqACam1zVUiAiLEcH4UhyKV",
  "key27": "61FNMRy5AR88SUbMsrH9rdABP93d2FJJSB7Fg7mwjNtQou5bUytNAvZGVRBN5zhp2xhuY9FFcah8Hnz9EG12HhdH"
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
