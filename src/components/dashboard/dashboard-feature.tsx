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
    "4xTkzHHcq3sBjR2wvEKRJkq1hmCrrZmptbe8J1nCx8eYphUqqbHVsDDkAbaJd2Cr3WFEsfHR5PMLUAUvx7W5a9LE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iG6x3Bqc298WB5sLv6h9waKGPbPDzaLV1Bw68crJqV6BqL3iGjvPhLWZTdGhCPp9XKqc91Ry3LWgjf1zwDpXPSt",
  "key1": "3HrU7z7B7BMG7URZCg3wPAVEnoxy48WDTf7dXzvMdT2rLHNrjCckfs7pncfPySoKTgp3kAo4kcx19jWRVRNv3wcc",
  "key2": "4uJrqAP3dwYC8VvMpbUakL1cjzUW6jrUCznTxZWe6LtrCHJcBdn414oZjw2rbC38bZGb6Zjn66zxNqZ66LyQXnEP",
  "key3": "5KKFHrHrunZtWwLBGDXgbxiRiVsF1W1hEWuUUfxxQug9UAJcNKJeiJhtwbsoMJdo3i44WDsieVBK2NSzmSRZWbbF",
  "key4": "4zVf9MCmjA7BDkkJVQfrPebD12gNKJLnBBfshDZmf6GXGVf7bSY3iqGvWTqm9KrDVA3RSch6BsZwiHcidej68JJr",
  "key5": "45qRtX1hmWqoBUmbmYy3h9S7nbPBs4gvaWozTuvyzm1yiJAmWoznWNFqYckvZsSwh36gwBjBJC8vw4HamSrcfnct",
  "key6": "zL8ZxLG1dMQtqSq8JCLJzNBJckQQ3mw7QrLHdRwntaNm2ZjbdzbJoNM5PAGDH8z1doZFkWi3jn7bvvaUnHcxpZV",
  "key7": "42t7bt1j4XZYJ7BztpMYY3ymPMkHUCGxc9GUbvV3tGsTgWdK3XRqJ2cGf64FX71XaL2WWpzCeN34rLoP6U3Pd3RB",
  "key8": "3hGiE1VrVAJqBpJ9q2yPE9sX4tFbxLQfqJkRaVcs2CbGrqxBkKXaRgTmVnNP5vUH7ujeMqpQka7FX7cUNbPKzeGU",
  "key9": "5gZhaHWs6FjjPpxe8RSGZxuTmXPLHjx4TDzzr4H5FRHrV3wGx8yoZgRDawkvSK96YFwCaXny4iEHVfkSgJYvZQLW",
  "key10": "2ekfoUEEAVJdcM5vy4CBzRVstZSGfmYEPxV3bFxc6vmbm4qPeU6FAUe33K844yrqJ1aApMMViQkTgNT5svUAtYRz",
  "key11": "31DQnzNthmcPCh8197dtMZE1yn7rL7pgWnaEe5KQKK2ue8q2pK9AwePPGqHBAE2i7vm2ahMxwTC8CXroP4adQgUJ",
  "key12": "WneYAeBoPYWFUEdRLjTxoFaeZQgih9skS7sq8ABscmxn8TCccHCh4ujj67298Xhq14zmKTjs4KBHCMdZgpty6GT",
  "key13": "3toLFgNSR15wLJDWEvXHiM9GeFwT6CA5gBSQntYTFzxMWsfcVhM4jnyyqbr8fjosfVCpVrbYYNFjJUMqhBVqGCBS",
  "key14": "2n5Be2EvZHk4mLcp73p9raFxWS1kfok99xMWqE1dmSooBPksZYYs7ekS7nRtugrxDbqySyUdnv9eL2y6AKELL1fj",
  "key15": "4QDkeywziYbeKTeyWiHeSFsGmERysj7XmM6jaatoUawqHBnV9JGrpyfBPNgUZu5BjpjpnQrT5xoiKqcpYeDpvhYk",
  "key16": "3aLnwqoSsFgecviEpukwtv3v5TvMes4sxgG6PmFTxnxc7unBa3mqAGpbnaEraozvucbZT1khebLmei78h8PPMQk7",
  "key17": "4MzLsyiCwdBM28Ep7XsjGxeTALfjuZuw8LhC8eEGkyNxB3U2qqdFnTMHqhtNTNguCr6Kto6embpaeuSs6gZqWPne",
  "key18": "2i6H9NaGL64iKFHzV8JntcEBg7kF3epr7W74csco4Cr96i89pjbhqG4AtdysAf8otd8i8ioFf5pobDo9hhdciaSG",
  "key19": "4wAyU21oMbfW4fWDCVjovu1Qf5Gf6nM2EZ98ZKYXYpy5JpRf68DEkBJ3tNNDGBqXHv2asw29qkXkWWU3EMsKVWxu",
  "key20": "3diC98PN3jhj7htciFvzD1Y1zKnLUguvs8WDeEPUASRjuC4tBbydExDpRMuJcLvJcuzubSJYXCagL5bwHSzLfKZm",
  "key21": "3xuDUNJbCWhtB7EWCTfYvp1Wq3w9T4CMVn4QtEcv17fQVH7JLtw5wpajwrrW7K7RqfRcqZWS8wj3pp87aFgbqQYs",
  "key22": "5LdV4Wjor96v3V3vPBUzUzAb72mqK1kwSczDEbxnVrmTto4PqrM2mREDxxhjGWLEjK9nAx6z8T4SGFNu9CuJraqy",
  "key23": "3vY11guRW56DPxmW8Z5S1HQXgTiU4vnFLPNdqrUW4Kmjna3aQWLRcBYuFwfGNitkFeUN9hgUTTFkzsaSv1ZqFCQg",
  "key24": "3zqv18gf89MrLS8G5JnauH8CnCf4bKRN1vQV5XdcJb37eVRDUGck5DrYgTDZRwxzBeFkeEq2Psbf9i9hh1rTZRA5",
  "key25": "25W7qHScAVDwxmD2HXeZphvf8HYDj6fBbFCmuGAKvzeMuX8qH2KGqQgQ1zfjZ435jBywzyBm9XKkMMy3xqQyu1Zc",
  "key26": "4Yyv6R1ytnGxMMRKxaHuWpkwZMGJPb5NYPmnDcCU2BA2eYoaq3fR3D5g3fPZKx7My9L7zP6kPDujGVMxHx28JJ8x",
  "key27": "2GciDd7RYEi5Re8Ei8n8G8E2UrSzq1QgefwEQmsHybi9tKZStNSKQu1We4awLRQgqX4Mt9e1q22e3jJ8NBq3qPvn",
  "key28": "67PFNbs93gbXLJJNTAPo3hmjReLA1Mij9smVGEgoyJipotLZimxaepQUJkLUwBaybAqu8JM2HT1bmvg3ftUT1CbM",
  "key29": "kuuAoRFCCSsbTLuqeMzYvqRwsu1sKMPxr4QbmAiT2ECrzwhmpQ8b8oCFTHQJp8sHvWMzXPJLfbJwdmb64QcQgPd",
  "key30": "FhqBZrqEcpJFmARmru4ehY9gJgkiJLJtDznGtvL4R1bN711tqeu9Ldj5xGmJUmzVFPnkvdWiMT9ss6p8YRR3eLR",
  "key31": "5odkJyQ383UvrYgeLJGvW1DLyRKizVXvXTo4RerpE8tmeMB1mHCvcYo9cuyjN5Z9mXfH2TU5vHJr5hPULfH1HxSw",
  "key32": "5aHzDt9CDcuDG78cRY9MntVujR8kNKPS4YVw6XLCmrKVNkqTrSRHdDkt7h9JKi3e1GjasjYmMznSa1SEN1jcc5vZ",
  "key33": "46CqB9WrywdtgBhKEYpTYx9Rn6YFfyCXrXbdrxXWVoixR5QeTDD1TkavyKEfzq7kchCV1xC4WmNepGMXP44JFrWC",
  "key34": "kAoedXJyPMBaA4P5VC1zvwWbsgrNdHcomepMNRxyHLGHjJkkuSezXvx3KXgYCExcsRLx1b8PLUHJvzDiQJVZ3WW",
  "key35": "3A9z5udyDXoNemush3CMh6XgQKqpBfdQh3Kjd2MUHJzpHTzCKFH65WpABtQ8Rj3JPJPB9cJptvC8fvVpsg6WihjN",
  "key36": "RjnR2TQdJbi2NFjF8jNFvELGhejEVDscA17GjWrgct45vJ2AzH4v7YWVQaME1UU9hFEURgUKxMEH82BeHFt5X8k",
  "key37": "45hRBwbHFDd6gGb2ALySc7MXgik5zbQApRr52HoE4tiX5Gcki3yrLmviFfSSPDCHARxxymb9jK5jkTFF6VpHnSLE",
  "key38": "5YmNBLLYAWHLwuvajcRLqJbEEJp3WoH26Q7YkkXqoAcpA1aEg815iZTVU8noUmjRbr8YckNjuDg512imMg9pz4Jp",
  "key39": "5YiaVzwtP452iPoJaeAYJ23h3KsYsAmbcB2UU6zFJbVunGnMAPynzkgfsjHysi3aVJFKxrayMkuQ9SAumrBJoSqs",
  "key40": "3SaiTi1LhPKiDKS96E85v8xAhgJuR8xxaFAWHpMPL7Cs7yXFAASruTcxEVcVn4NCCJ9aHsyfHaUeua1vohZXfEGg",
  "key41": "hyPLh6567Fnsqp37GAPTBvNZUKmJCt7NF7EiVCLPoeYxwVtufRFBNsqr8b74jB9nxs7GhsNvxRQe9Ha8HResGCs",
  "key42": "UnUFvPnBU7T75WbTNxCpNQ2DCCa8grnk7aG9djGn8SmpPit7PvTx87nFEdYgXAd5v9DsvebYA6qGeJcwZpiEsaz",
  "key43": "34U2HLrBozYU4BarwCxLNSF8wXzqsszNVsHHVF8bLSVHhKG6K6K1dLu6tyJmUg6XNYwRRZGnTx54iBgExKjntxBy",
  "key44": "5FDQE9LMgDgViZoa2jBAQeeGGBBQQyZ5EDk2JhFnCNiREkVfYBphS6RrKkfv5ChxdxaMAFCPCbhFT2GDd2RsDK7o",
  "key45": "4nNq9BbcU6v1x7Upr4BVtrxghuKaZ7ipNCmsMz6WB3pboS7APRzW437moUDjbjm77hyqMAG7dF4bTPASDt7p9J56",
  "key46": "4ogYteNb9TurQZTWkLQkzGF1nHKA1ehBLXdy8SkgH1upAdPw7mC7eZdWThcTXkCG9cZLmWZhfN61pkno2XJDAcqb",
  "key47": "9MwSuSBnZX4EEVniUirbPuG2dDuBauwB1Bmt9W3oS3aoywUstnGF9E9yeiPNgfBj8Q9iGbTRN51TKjkmP9QrNmA",
  "key48": "QTPfLprX1RdpvTMPFhKzBEV6JBpJJeGtkCbbDZtFkkmUyenpvTDBgvro4T1eHqbYMXqNFa8h1sWnRdThFRJZKTi",
  "key49": "3DGeunTf64Jz8AMinea7Dinm368rGx7vNytqztFY5424eVU3pHnpW2zTpJXzzDfKfzU3KFgKkq7MNxWGEVLUwJ8a"
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
