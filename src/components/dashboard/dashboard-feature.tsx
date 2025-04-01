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
    "46aDvMtyghHsMYhn9zFapmfebL1c3RKGfmUuPokxUH4RQ9cYKeueLCiiZtGkx1xwrt5Sa72Nx6DpCtKBSn6JefH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LiPJTjHgq2GnttYuoayv8WUnJUAwWWMYqwFVVwaHDt8RpKc6Xy1Fy67S5k9qacbSrGZVSpVt5xsJaze44efVJAY",
  "key1": "3zG1QfVYBZEnuDK7m8m331SZmTNGSUBHXG1McyhuJ1WtnWqmoaWYRxQRRifoWJPaHg4Dscnr6cgfCDiim34rkRFM",
  "key2": "4PxUAhCUdHsv99gAZgXWTkv3VskdtTQ1D2U9vZgSw4xN7yzkkAs69SDJNxRgAVT8AKos6FTPungArZut2SAM9fvA",
  "key3": "457UFptHBa6wSn2Lndf3J2e3scCe3G5Pa3fVYY6pMXwdX17G43sJ89StrCseyp7iZGfagN7wKMh1RSScjnSDUq6z",
  "key4": "5AxhuRxZQjJR3NithKm4VaxNQtsrfE5dStUthruTJktYHq4XMwWwyHUsFiVUHoy5fqxMgv5hS5DTtGwqQfsa5wCm",
  "key5": "k76uM5aENPJWw5c3eYe2SqR7LwAd8CQHJVdBvA4TU72wGjbPSkk2iWiLYmCduvo9kRA3dFrjkAagWTM4uPW2iyR",
  "key6": "4obnZ1M9R6m1VLCNNBjz3hUzW5vGcyKpbiCjyy9Ujv8TQfZPfcVw5gniZRPsQnijncESKr3xCXDLtUYyGHXe7HQn",
  "key7": "7iNXQcRnM4UK5vNUCFWjW2LyxkSuF2HFcTjjSVb1EYUSRm7vLtEBG5Fv3yfPpVmrXiityo369jk9Q6WrLWQ5Tf1",
  "key8": "5qvbppVb3ygtpMRUgpNXmPwEJPipmbRuhr87nsaariNQ2ZvDcYPNLkuXEW9x7Y3cPrSenK6sXZYYasifHpdUYR7m",
  "key9": "2RcPnxoqFzPdBEpVnEtzDuxXQjzCmoU2EbDTq8hge7wq6zqvCuypqoggBh82jPoRZCgELZxPSN5j6jPfUy3XZddq",
  "key10": "4HEBgSJKSzYjyHWdi6v9ycri1aEmWaup2QEbfUUJdv8JG2a9JP5GbXpw8WL342S2ZqfGtREPPvNffMqTkMyDmnoG",
  "key11": "229ZiEhzWtjLo38NjwBd5kq3ujxpLvTdSXXN4Uwtpu7uZFh9xYX7RrJoneuwntHzFXDxqLQyUHKoXTrtisiVjp7o",
  "key12": "5C8qVHE6fLWdqzzmcweyKjxi44jjRkH5p5andbK7vveAZ7byqz9zWbKQbdPJcAGD7G59H9m9QoUJQMuisCFqCVdm",
  "key13": "5LYvZjFXFABZENdGXgZL7GGwzjCESmWWJ743xEinudeDaUW1Fq4icrvbmvvYatZX8Hx6Ep1wrgxNNtddBabUqbGs",
  "key14": "2Nswmh3q1of1SMjyhqX8tqmApfq71ScKizY4cE78bmdbpTemeUjB5NZeX6rXuM7BdLy6xbyHrQByW9hfYXX5wMNe",
  "key15": "kDTyrGnKv1xDfMcUf8CmadabnXkiSwTMrMhWojtbPD3kHuhmdZAHYzMbYqbibboQzMp1gb93Zf6BDbhwQeSHqBn",
  "key16": "5A8b2yKRLx52jZZbnkqgSunJNfQSJZoRofwNGJMSFUYNcJKQdBo2eHqL1tC82fXtuqMtCgrf42ipjSKFibVj51Ep",
  "key17": "4TMHyaCzVp5v5AUH6L77YPbhuVtcxoRNyfKFkcuRVfZ4gzK5gJmuTCqx492uHJtcayNh2rabgZewUxUTvWQnKC35",
  "key18": "4qXHoYnDYaZPuZ5NrDCL19wbAReCDX8wbwGuZKnjxDFBHcUuL6VacCJGUWePFQhGJGuMuPZxE5JqUqgU4CeEtRmv",
  "key19": "NJZxerFeU1ycJUVJaC4Ve9KVbZ9WC2fbVbL79N4yKwq2ZVmLqo3TzNaPPTFWEYhSK6fnTXJNTZiG9dsYD7C9Bom",
  "key20": "5FypSfVkF8PxNysZSA54Lgoib31AxHC54zgQ7SYGAJmtcsw6T6S1schg8XVZBMBrPQLGWYzSaqSkGrc6rggD4Sjh",
  "key21": "4kE7r5noCxXdngHMgGdeJS5q1R8ZVXyB4bmdZLN3EpvDST3oNyfkXDcMCJwjJE2KJiDwD1wv6wMMEtmx8ndDWZcs",
  "key22": "2zgivF5XJf8NJZMLu6qLwjkTE3Ms14KrEJr6fc2AebAa9Ytb7g3kHswk8JSjLwDTEpZTUCi2GTNmtGTKkMKRaJ27",
  "key23": "dHTH6BbSfQFjQUzrRq4y6qz7vv9vwcWCazEEBTRp5X8Ufb2cbjJMtwr2owmR86fDqQwsuNJUxonp54qk3yKh13t",
  "key24": "2QhMpqwVPkAjWNjgAZg84PmAtf6TQYRdhzEbQVvzPJQnVE8Q819bZrzqLndRbi8bFjRW3b7BMjhiDmZSCUMWEBCZ",
  "key25": "4v7MefbbeMPcwwCbop8CQBNETb61TdpPu8FbGw5p1c6qHY1bGQ9DaF1EWXHNoLH52jjqeZmCNiAfNXQ3syUTxLqr",
  "key26": "62knXzs5cQpsYM3o6SKZbior83cqgUQM4P4GbB3SkoxbxCjxuGjWkihi1CTQKMAjqnygy94AUY7R8uC44fyxjg37",
  "key27": "oFbhoD4vQGaMppqamkqZ381JX5h5ztYauv6iwMmvoVHm7WDNqgwGc85yyn3gjnHJCsXEZNnwHaeTKX4DBouBrGc",
  "key28": "5Q59spfu1QdB3PBSYSEYiRizGCCe1yh1VwMvf5GKXBNBrkuipYKgwGgJ7YHr49gAtSDAFHtUgDABdKJZ4LY3fGnK",
  "key29": "2RWAmwk6d3ssUnvRT6f8K5oZkxKY37U1LJJRLmQLMtpctmSgXgbnE74sN93GsDjpTbWfCNSKmFk1CnuZkw7a1hyk",
  "key30": "3inciMY9bhiuywtNSToZJjHNL2bRTtd1BTrXrcjY2RV2UnCwhdkjoVTosSC3YCHgVs2Pm4VRPhPqmYV3BekfkyHD",
  "key31": "5ujxdha8SpLaDZFvH552aw1ryt1ichUA8H6T3PsLQp1tyXmf9S8jyMSUq7cr7NTQSmSKGyM3DVyhwkLKngmsoUj1",
  "key32": "yxuDpzNYLqPcrKP6xNnEyZy7KMHtT9ivrFPAZSW22cazvhVkrWczxE8hhfZ4mXfjDMjykXYR2w3QAgxYuwCMpi5",
  "key33": "NtmWvAmvmNo2UxJpC5BT2zN1mY8k51TWTauayhKbA9ccnhKMftdRZsCugMJm7ueZiLjjFGJz9hNngGURDFZSnp9",
  "key34": "231HA8TB8bno6R99cVECxNCmUULdDzNjj1ZGDS59m4eZEaySBjeuFyuhAF82Dyz3CWDP6Hc84wL5K5oCB51XZrYo"
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
