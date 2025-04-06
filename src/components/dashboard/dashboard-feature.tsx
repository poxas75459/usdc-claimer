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
    "2ZZRtQ2cg4psiwe8zSp64wjSRJLCDEa9DXjibHv2N4Qyqr9waJsgRHSr9z5oqf1bLLwTVbKCSzyXSDKvbAcS9XDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XwuJ4nAvab96nVYxPvMDFa5Z9FjE2Qs58qXRLGgRa1SbP3cd7ThZpaGUEFzQgYiDi4VYJ4dKSSHeQ6zeuS2akwc",
  "key1": "5YmXeYpZQgy55jXvb2A34t7AB4eUMBppuNPfGZadLNcBrwB7ZDBFdbHb2yXqW1XqMAiaYRuzcrP6uZhgaDW9aiuM",
  "key2": "3ZgJ1hnUAXHaPSj2i4xV8UbgxrUBPF5jKBssoh47CJNaKA41HHLVM85A4fYARE6qcvmUsS82zGgSXxEAk2MCzwc9",
  "key3": "BgnRuCm7hR11VdEkAajamKjssXvP45pGvwbr1KQZDLdgHrfHq6LKraWXeuQVa3wn2VwW8DfoDjdshYDZEPC19qs",
  "key4": "2q2LsE14fc4wASwtc4pdrFyC6NubKCAyMi7YjDxHRpDpzQYjxd7webRFJz9GhbGh35idwqTZJmbLMeWfM1PMkYGf",
  "key5": "5yp2qSzAMaboUFVhGgA31AtVKsc88NJDwHQHT2nDK97dbQMzjD37bMFUFNWwMvq4Bz5FbbXFQ2KGKPM6RPCXPT9t",
  "key6": "3PqhhaX1k6XieBw8p6zKW8QUSwQ8ZUXzd57GC5eKhwvuuTw5Kn5xHHkR7xBqgTNkDNzmMZYuMJAFrFACyCMZA8RY",
  "key7": "K5uaZWe1E1hnbNYQqGpvBV8X7SWsSi67nopceU4HP2PuGNXvjbe9ccjwZiCnw8LHrWYev68CXTJGyqc6KPS1CDY",
  "key8": "5kiCA4dyYt2ie42PQSF3bzQGnJyDiFzdcM6CVujJwrii45wrQQhiPnpVGQV46Jv1C2WaneK2A4nqMuCHW2dwNVXe",
  "key9": "355hx6yJ1ZM1p8TTM46rMASTpCQkoRCwCSgtvHo4EynzmSGnPgtNPLBRLxN356Pr6isr8icDErDZ9E5aQhvsed24",
  "key10": "2JjVrMo7MJRARQMkjFdzZhwUXHZsS42dePkqoTCmGuV4rZsNDxNLLMBbYEXyw292CiQQYqazmTBGLtuY3eZA2uxM",
  "key11": "4idWjHEuK9CMkhvx1ai2Rdtwpa2cfacr8LBcphcsyH27aJxrPHvnAdA6XEhXAuDcHUxjHfgbMgK1eCyE58QtcJXz",
  "key12": "MGUkLBCWegCyUFf6D5cyjgQCwYTM7A31ZqGaVXe6cDgGLCiJJsKCuyGz3LeDRHiyAKFpAWk1YeeBcBeaPJwhaKi",
  "key13": "28k95M9ZmkeyERs6jcemhiN5am6AMk6RdY5DZDTXU7mGhHAgRFyNbMzzdHnTBAmCHkA3MwYA78BzS69UPGTtMWR2",
  "key14": "5hTWxcjZXhkSWqFqa7JgBJ5TEFFLhaU9RGKM1HKVJU6UJquGKyG2hLuAhi71SyqxsnyptBWoRnoanmmvzXDnjFta",
  "key15": "3NNgkHC5kMaKaFBe1zQnnKdiF8DvxW5FSPRMvxUXdgBchC2DYBBLGXcvivBLQpMBcT6PBZkN3CGfAZfuQ1Twz6ix",
  "key16": "4Q845W9v4j9EFfgM3otUXuv56TQixSoXCYYsmvN8HFakNSb41R37qRHbizkuTzorYy6NmhNroRcmDymPCa9K45P1",
  "key17": "5N5HZcjWFgwhU56z5N86evdrVL5zLotyBMBgPMsW1qWaYyFWRQT8TFuRhSDwwWxkVjvyQU7wRWWPMVCsxadYuqdo",
  "key18": "2VvxHn6iXiH1pWQw7McB2cmycWBTgNrg3Sm2uCFmF2hKxHYRzigNGUwCaRef4jE6utY3EtLq39ZmnSBvMs2mLNrV",
  "key19": "4FgE2aJb6vVZBAAHP1cBE2SsjKf323X2u2oYnKs1XBxafTbuYXK2W63R8owE8zFLkfJjFtdmGJkb36yjfm7zY5Se",
  "key20": "2dcSH6LhhvyYSynB9gEKDbvipGqzBWhaATBDq8BKV81jzvmm2Mq25UaaNeRo8ewdCqeHTG697LoGBkZzpKgyKkAS",
  "key21": "5q8xdnZGBwRYm6NLsgf1nWg2X7YKtGsnhLxkXJp1dgcyYnST1Gvos746fQcWKC9ey756XozMyLo3ZsU1Co7QGBGH",
  "key22": "2xYa28aLDitAqB4ddtud3nr9rMuhHS6D2osh9A7TmydP6wS3qEfcjaGLtsgmwkr3yaQtEen2yTAp5YHER8MuCcR7",
  "key23": "5t57dEpstMMTDuQYJRKuYfPJpEQ1DJsayRdqiMC5Puqnc1jepZrKfHF7inxynYCoD22ZGXPMKWowFv5a2eAmoYbB",
  "key24": "3DrNJ7RiQ8uPoU7Fm1CnnLxfUgj5eMaJn2E86BNSgkWA9jVvPJJfzVAWAxiUCXuSk7BHuLSUoETjU7XFvHTpxrbc",
  "key25": "59nb643w158r4Ahivrds9247TvfUimtm5jPgH4ASewUUNd3pR21L8GcLEqN5UVVkN8qdMLznCtR84ngCuatYvy8a",
  "key26": "66MNE6zWPiM1bWPZrn3ER1WjjiGuXEjDnrayvvifQdxCdgZW7ue9oF2zRgEeW89G7adbY6mRULk6vBP7owyGVwi7",
  "key27": "2Su4FmWLGw2WYsAW51etpKgmGbuDPh5gVVYN5FCSxE8jK3NDsxWe6oJQH8jJGcW935VaaxbT87zpMyQf6ayQufGa",
  "key28": "mPmABmVPwQG7qzDqCgpSUdFjNs7NZjZHNZBMCQCfsioStdqr2kuCcLx8YPg1AwK2YMy5jatzZtJzVMA1f415mzt",
  "key29": "3vrpR9XqikLbbCJNnFDivvtQGnJgor3oV2Fi6qJ8USVEbf5hy6CdubJeSk2JT1tYRaQ1QM2vbFBpYzKX6saeyHc3",
  "key30": "46JRN2fu16hFLWvXkwWPGFSp4TcDa6MRHkcSAkoWxw8BoTyE6SUfHChmXMZLs8GELptn7DVtXbwPrGaU7HY2D3eN",
  "key31": "24ryxDNQCyDwU2grWhRR7WCFJcGyhyRBa4q1TdkLrMDESh9QVvvrxJBoTjxxwkCynaiCVp66vDs25ZR9xoHuwV8A",
  "key32": "5Pnng5bvPxZWiQ7qfThWThPqdNPGpvUR7ryFeTTJNrcYdzFtbx4Gi59UsgHjLcqmCVNuGRdcRWgENx33MFdd9Swu"
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
