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
    "4gkocjZ9CjtXEo5kpGWURLXNYndkVBmHFkUqCHE4Vumqo4mST3YAJGDkYeczkdassNEuSwMm7nMDZT86DkiGoE7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WGAKodscGqMegZsNcVBemydm3TqekXV69LdQasbyMKRbKypzfdrf152WNQLLkEkZx9F2iiYz4AhzCMjrpCjQwG4",
  "key1": "4ZsiHnzAh6AhBHi4ezirwqaT25vuzhvcuFiKxuSVDYC6SaJD7Nr4oUWMtSewYureMLNqFDdMazV1EZdju6v7zL1J",
  "key2": "xWQbRtbBhziey9SaBwHVLW5qrEoD1wDsrdhcAxqu3uadkqis6FWeZMhik3pJGFSYRCjJU5kicz9wtaHx8kCc9tP",
  "key3": "5wP9LVw4vBKsVZQ7GhBBL3ar6k7br1yCbuHFFcbXr5wXv3QzZFttDkt31QAVBa77zSXH74HUp9sbkfiBN77NT4Xi",
  "key4": "5RxuKGXc3hdTVni3LT4w7L37SB8g4v2gdQrrH6As4cijT5srsovtN6uVcpMxYeN3EEZ7Se3xUw2HPhs682wvZckd",
  "key5": "44sgnFRaqr4mpVhcCpNvAErQsdQYQx3TvLsSZCVxrVUcs2T469pZPMtZwPRqQo9FXACMUyrVZiVdaPMARf1k6zzB",
  "key6": "oAQKYnFp3yftcCArQq4ozDYiEAKShDCMFZ62pibYmvdxkXDnyDzHW5kmT1tMa4hEEdfLjLwRL4ohqX5zevKprpj",
  "key7": "5D5zGtbj2Zv5WVEQmmVLstMJ7ib8Mv6MSFDFM6frsxgKHguDBzUP6nA8hFnVpAJaDeRerbrNFDNjXZKxsokiAtVG",
  "key8": "41dqEomEUsmt79ZuXhQGSkX58WURmPcRWSiopFZAM9qdM8ZVzrtdagyPqL4ZG3XUPJ1Ku5FaKdroLHF4wSK9pdMd",
  "key9": "4m4YM7TVVvbam9QYpAw4Jj4buhmjaRruxKB7bKeahhsJ3YBu8LN43dSmzQkJ7E74uQFvLUNvDJRRksHAA2X5xh6T",
  "key10": "47Ngij8Po7ePusLNjgrXK9pMZXkGFWrMZVyYqFxWYhztzQkjNTt8XHUDSpoLgTToRecz3sMGr94AEYF2TJu3p1cL",
  "key11": "2okeUeb2kzcizX4SVQMMgY4mYtTW78QCPFdNYHa3Ac8PJuJ7EhbXMCNMnspU8hvwSxYygWzGpirAsW7pNpmerbv",
  "key12": "3vXpUoa8AAuvLDsio7hiXvmPvdgzyjtwGEc44835GEgg9rvqZxWvEcnrTT4UEFYoSXDUZ5zfdBzy1jP7fiLPP7tM",
  "key13": "2FzQSKNz8qarrxdyzntpN5g3NpQHQTxiF7mdioMX6JX35wdCxYT8DHGopb5BQVLJCpCoyUHQrPWpja6SkBBkFHp9",
  "key14": "34aohNRvAD9AmiXHvcoCaxSnihMfAgyyeP9xSoKxUL4gDL2K2nHJRA9RzJxoSx8T6MAoxCG47SGJjhpkvm3CciCT",
  "key15": "66qpaFoh9km2gTLxMwyZL6PtW2Yr2bcyTumDcidhHdrQyk4wXdcdMNbL6GVZoS4WGHfSxrk9PZwDsTd6Q9FfBVt8",
  "key16": "2SPbcXH9xSUtDKVkXoPHia7sL8STLqPG7KYYqzXVCXJgdjwu5PeVpNNuPchMmckDemBRDpLYVnXGH6FDAa3bEWMY",
  "key17": "2ukNjEAgdcHUEyuVPgH4JB4TLGy9LnaZEmNWZycfoG1wYpfQG6dmqPjFjmoid1qDy3FsT2AayTtuURVPTJa4HF5k",
  "key18": "4SoR8tdnKU7Nv2JyxF48CAEGP5awcj2CRamZeDXRHsRN3dnkWr3ZdFZ56bHCPcyj8LBjGeccrBum98h8EyNXkdC9",
  "key19": "3mWv4CssdmTBquUtK4ueSLEjVF1do6JYR3tk8UQJRopWkcoirKFozJ2xFD2kSpULTH2ho8uMMe6kv1W3zvVAU4i9",
  "key20": "2vQpd86u6NLtuaBEoM2GH8yJLP9noMRxNcuczSzcaVfByh6pXb5arKvK4Zqbj8Q63eiH1qLqzkh4F8pqUGa9HvbF",
  "key21": "431zDBdMWNB4D4XfFYhLpwny8CHSFuTsKow7k3LbQHYH3mooMkULJRmpxgngUNsftwdLv35rzcsPJJ4UdVjfCpzR",
  "key22": "46z8YJcHe7KGV3HfSSKdbqmNK23g2WrTzLycfAc5ygm1dJpFeEm1myTNWNg3668fQ7DY7exrJSEnMAsXPti4HtBK",
  "key23": "3SzAhMY5fFcsbbkTtP726y4U2qYWZx4fGc6dqXCn3c1kajPUqAjY6pDdUje2cbcY4J34sz84E5y7FWK75zXUyTWK",
  "key24": "3RatVkuFhNnZgXH99N1cCH4RsXRkitgBEgVGiKDBxSnT5TCcMgqK2dYaBNYPtGist4uBDdM8TK6xC7m4t73UECiF",
  "key25": "2j4vJpvwuJHYtMFPqYj6TPuTzT5NLBukjpkT5e4NGqyAwPWXmXzewfw6dww7X3ujtYj9hxbLegY9hPdHhLZcjpuC",
  "key26": "3xonYZGQk9Y6W5ueXwSEVu2GSNFHRwymgJySKSH2QGm1kN4DN5qXrkUunmLzPrhSRAQg7kpLEiE6NURyJx5c4XFR",
  "key27": "21iNQSegweGhERwoAKgZSV8Xg7WVYTEJjejPMYTuVXtycpwJnyRZK3pAXYnbAjkQ7MhmDSivfmx9QtbJynW6VqZg",
  "key28": "2rFwDTTUR8XAuPaobbeznKt1WPnqsZ9utSR981sc8vKjPErVBgKNkxQw53JCWcwHum7f5JxAutGqaKbWvvUygXSD",
  "key29": "678RJWkfEY3xZjwuJzDvKnMT3LmModMjcMNuYZjdHW5n22b55XaeGFkDPFGKFzYfchVCpgjRZGqw9HvJLzar3WYm",
  "key30": "46WNKC8NnmFC6Q3kpi6MgLZ4z9tAw7QdSnvyJo1x65VhZffje3KQr3bXXJfF7iaLdsSGB5mRKS6GDRCtZejTcm7e",
  "key31": "61ma4WGjuYQ5GvcBV24W4iBPr4drDuoPGWyeDgkZZVWyM4GyQaP5y1tGkAkS4drocsmY7u7ziJMM2Xg1hqsp4XiL",
  "key32": "3SKP4yFGNZhoaygyqdq5eotakRF2hjShDNeq5Nhy5MeogqUpiDf3xK3Q7AWPs8GwFa5omHvcxoYUpgbKgSFH5WFx",
  "key33": "61qgYSxYN93vb2dZAqXN9VwDqBbUQfurzZLxqXbKmLWjE114q8PzVDDign5v6rmUemDS263g5js1BQCqwqhvBbg9",
  "key34": "cqsb6AbX8CxokyB6Cgjo5tdab9j3EERQjZEvZ65tPgqbuNZu5tFoteSN6ZT2SYaXAHehtnUeQbqdg4PKg6UDMB6",
  "key35": "5w29mZPGE1zcoa1wN45PWPmB319E6sLsFWaktDzuFqcihfz8CCxK4xs1nRRx6ErXmvEzRgwy1zCDaK7TcMuLFN3",
  "key36": "rxFeEjbX1fq54QAerRncBDkwGNkK4reZi9DbXmYLjkMM6oAPPcaC9aXud8ttJtyVmLHHw7GBvrNvHDfKay3zPjx",
  "key37": "3L9LWTxdAZvbYhbqbNdBjGM31yxDdyShQfU1sh4rjHYKyGkDnc9vCoxorDbzvWrbqb2wxW1wwZNp3aCQH8ghkLPW",
  "key38": "5ZzQeyk6hvYveZFcCzVNztNQZuKur67AbXrqYQRu6NMH9xaUxYNsCVdqK8Qfs4PeubYPNqbcYAbwbbqKGx1dCPGn",
  "key39": "PKLyAapWPmCitc4Q1cHSmwkXx7PbifQsACDmiFN25jaovuzkK3E3RJgoduE1tDhSAKS4srHXqt6S9m2A8tRB1q9",
  "key40": "5y9wNp2SS5r483RyWir3QCZzgVooXSJpcX8Yz1ckU9aps3Ef7ZfnhntSSt2kbvDBYrrFkj9R9mUH25wzndjxbPfp",
  "key41": "4p1zrZVHHk64XNKHJfg1tNmeunzPs73VxsP7tvdrB7JGJPCi1yX3iG4koSwvV7ucoH9QkYcmJb8N9c4n7GZwWBFT",
  "key42": "4YyEci9QYZmR7ADNv9E6SqRFFpUbnLPc2P6v4YMP8ESHbCXY8N8KTu6BWrYEehMmWn7FRW3S9meoMzUZWnXrsEio",
  "key43": "rQ2NSp1gNGTnxnnNCtX59L5VXTQEJCQ1umLWGEAFRvcEvGz9T2eD4kWN3aytj3A3JVjfJ2dpdpZAna3bPHHQPcc",
  "key44": "arHHYW4Skm6bWfjhECFVcFDKtBpmvH7gZj6LT33StXguMDfGUm2fJB27iJ6Fj1PbgYDPtrKy8GzfoUTMYzD7Gvk",
  "key45": "4vijpT2P2sNC7AttXZdFLmbz77aBZgS6927xjZgz6TMyciNWsLgdBjt3YWDNv4vCbxbbkhLTwVU5iHpHEAM4oeq9"
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
