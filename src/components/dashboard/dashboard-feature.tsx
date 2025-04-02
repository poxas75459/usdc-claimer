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
    "64MbGMozPubLEyZqTouQsWBjTBKGdR42hS9N7sZyYnjQLWxnddfsMM1uRRxcnMXVTuJBMjRztnz1NrrrtzFWJEdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wToTYrs5ZLx292fPxgYYd9w9FP4dNwYHFmfNZFxLUm1SL8iyks6YduaizyLPVrHXuPAgLy3Bfg4nuCh84DfxXk",
  "key1": "4t9np1g2HfYyvfk3y8tEuXULPArErb1aGrssvJFLo5GAHt3jZ8fGTZgFh4uTwFd9FHWGRZqFMGM9R9BQK6AbuQTP",
  "key2": "5rZbV8MB7qbCyNmAxg3hEGkuYw3sLyL9A1qsDQDnJJogXPS7qaQoo35m4GsztBXMVsUb2siDjS82ktMT8LdKS4T6",
  "key3": "2VpNqGV7WjQQk18dNGV7RKnvTXdbWe84kaG7YjQVmccqycBp18NDgDUoWeEhm1efR4GnXudq4L1Kd5BzqYf1NMsB",
  "key4": "2y12HZCz6LicV723Bpur6sGb2z69uowAvpQeUw4nKto7pZg9u8dizTY1SJy8BakXvHDjfc6HF68fATp4c35VDsJc",
  "key5": "3pZjz7j1aUNkdYQVVUG2JY7V6cHMj2sfPmx5Sq178z6XivT96GEVJE9GqpVm2RbMaCtxYgE9ifgkYp4Mxy9xJ7o4",
  "key6": "3kDEt85To6R8gNv6UyJ1GR8CeYUMSGkPgSVMYBoZaQDmEDmDGs9XVFKBor1SJreyEuz3KqY1152RZpVBKYR1gFhe",
  "key7": "2mm44DdEPa6MsC4gKKBgcJPqrdoRWuXay8L1tWh6eFSuA2MWo7ArSTUGYJ5sZSBaVMpo6j9XRqNqaGxpRnJJXKCz",
  "key8": "Yw6S9NYafwKbWhR1rZKXZRLDKivnR7LhiewKaWKoephY3EAKUgmriwhGGRoN37APJ2xWEQGuqL5FCnMhuHnChUn",
  "key9": "2BNbMSAMtUoYsUiFu8zt48Znb1aWCeGsKDPCEw79zomixDbN3P3p9PwWYhcoEpq3N6emLZqE9qeESuo4DHLXfu1o",
  "key10": "vGBuPay3MMvyBRF6SH4GGKZLQftA16SJNqJ73kXv1EgM2Pt9nT6eBPttwqFrbfKGa5qGcVnpe4aTrTSQzdsDBPJ",
  "key11": "2zjXZibywDXmUnVotCzfpma1BGbRNdcRZGeom59Fahj5XYEtbFvAJRZvBoXBV1XYuUi8gxu8XFMEHL9jKVJqq5Gv",
  "key12": "36yQLUiTBoN1WuzRkwdHACbmKuPuzXhYkPDtYWL4PFfDLzTun9qTpD8dzFmFTmJQpm1E2qfUDh1QF2ADhgpRUTA7",
  "key13": "CPSEoj37n7LHtDws33gd66MFRjQMtggFE51asCeSqfjKAmgP8ofwV7n49s6o4MGk27Uu8kLNS5sKeudbCKU3rf6",
  "key14": "3gzBDJMZjNroNh3qY8njhz8HPZvAK24VqpSr9kkRtfSRqCrKixfuupdFYBCTEdgcCGWJr2aLbnshLf4zf93N8XvY",
  "key15": "39NcvVzyH6hqujSeG6jXvKNhuBzQgnykVuvoxqJZgHMyZ6hUiNWbocChjcjjSB3LvAcUSARo8ak8skf9u9jtiQLi",
  "key16": "3rVfJ6HxR9fQMivkt1m9DmuRQp6b4a4zt52cpXGucG7G4vK8N1T1LUS6ZL2nTzfNxudWTTfniqyf1DaMBmDdNhdS",
  "key17": "43xyr2VnBavDdTtEExqrPuqjJwP9qqvpcJgEqDKmqdbnX9rysjmPEotcxHoYkRjgDJqt5NrzwCSBuRek8F5azbQp",
  "key18": "4gF1NLSTZzThonRtFb4YTjuUgbfgHPqZHXQWKvEzHj8NZY89fDuM3x5bcEmAfTcGjxvN98xGaqcTXJDFKqmPMDcR",
  "key19": "AHKK59PM4kzZDwqpwT572die7JmEaDbbfwbP34UitYDmjsD9n6WRkgrvQbJkgQ1bc1u41Aa4QGdj2LRQS31khz1",
  "key20": "59WcGZVp4Ann3iAgoLTMLc9yWaTC83GwzgCnAbfBzGSMmxCUGWt6AddyzBcp22eLqovZQEyrsubmwVhXM6y4uwRg",
  "key21": "3KdrQHqNBqGcU62pqNrEYHvp7weYmeLXGKHqbQGLgKh6sZwzR9Kz7KHajP6zjdMNaJB9jioqHhZGMH2t24a6BpaS",
  "key22": "4nLb1MNVuYaU5smrookCUuX1p5o5zKnv95Mf1gWFMSwrc7MV38mxaceYe2HotkfEpDkEaxrsS9VtMy3tTpBB8aWX",
  "key23": "3Sjiie3U4Dnotmcd3VyEmncVgHKsUFEZK5gcXAREyv88s8QdRWGEEypyaN7aYGkDYnW5iHk6RmjNtxhw52WKQgWF",
  "key24": "31qYJ8fXhMb6yKs5EHS8WCoAWtU5e6Mt2FDT2fgKfL2cKpkCVegrsdYHahdKj8hcXnrhbQoPQMrKN7S3wxqmPnAj",
  "key25": "2w4a3bN2WpZgGmTZFC4ZB2A99XDEe5nj7p1rkVCcBHAu4vrcPAfbRFQbgrEE9EXxeWXk2jJjdhL72Yx3aeSofuWK",
  "key26": "qafXZaVFJQmjk47X11gd749bH9edgnJs97jVLg8w5ajz7Msn57EjitsaRdfNvYKegbM9XzZTU3rfaYajxWFhzue",
  "key27": "3UC6FGHRwnaq2fLyDYcizWVRSLm5k2ZgiJRaBKfjvN9tvpxhQCR4vd8yem66nw6abL8X6UxLgNi5DJ6UWidZYtrA",
  "key28": "3qEQboCpFB31emVF5ahi3S8z4NjSrcVV1mHkJwRBVenNQd4ZRvxL2112sVc4ZV1sJzes4nuDqTZLa511mM76BFjn",
  "key29": "2XE6se4bg6RZ4NCarXZ6W5RivGV4wgGwr5Ch2qe93D1XtnKddsf5LgpQHFyBRcShXKqAVKzZsKNA4dNCrTVP5ppc",
  "key30": "2LAdS3f23HQo8Je2Zf6w4bjgdPYcPdC2HEnVHZ7Yt9Jo3WBVC7qiMp1dBR5vN8qLKwMohLiRtjmtHnW6BLJBn4oM",
  "key31": "2iBXMCJtBLKYEL19Y9BZDqxq7GH5z72Vus81muFtXGi1bqFZQV8c2jEy8tdWMCCkihiDLhhhnrYQXgeCwaNpPCSF",
  "key32": "2XarMhsDPN3hsi9jQ87wyH4Bnqb2t35A2NozwbRoxrPDqvc55BGwFLy5o1BqRJzagCVLg5DYxLMSK6UoDS7F9uMS",
  "key33": "25FYSAsDHACa1DW7dLpydVgCtZ7ycYFdoRJMwPZtJjm95rd9Twnu95dprQpy6rgrQtNRa3FyBMvZ9SH59ZXdUvyS",
  "key34": "pGWxLco7ZYra3RTK5wJZMqYQazDFtUrgLWRu2EsdLQ4xXqd9aQJt7UUJqBvtTtX5cbTicNxxJqWXTTVC425STgc"
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
