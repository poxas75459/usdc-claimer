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
    "g6c8eyHej3S9XQUeodnEK8x8ReT1G4gEna3s6Bj4nPCBmrqrU7VkNh5ybe6XxRaUHYwQ4ygHiASNJfgTD9hrX4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n8qVCEBGTGiuMJ8JS6cYD4PyS7hsGGAwBb7GPvXFawoytP4ihhMP5Yi1KExg77aNkY2hdKoTxzJpCBZxeUB3vBt",
  "key1": "3REaZx1N5N51VLH8ZKcc53gn8rX52emn4E8Ae2KQnHTr7bGKmEwsk3t8QQbvTuZ8fmWaGiLqkm9ZHEGLJoBZNSdD",
  "key2": "FGCdPJqq95Cx2gXzQgTNQCFGU1gPjg1zQxqjMmCKnpWc44mefP43kuAAaysmd5DQhC7AhmuKr8z9rrKdZmCoy7u",
  "key3": "dUkmVe5bRgeuTfpQGpYvPzGVanAsbfkfeQ1ajnGYsqXKuL9yoJTdwzHW2UoVvaRrjdBQZUNZYbyMopm1Konng8a",
  "key4": "nasbWVAR56KBeDPzBKvSjxNjke4YRYNWcSwLafjgo5idx6zEYCzpLXyNZtJYS4LQXfAYaWQkmgtRjAKssNqLVXL",
  "key5": "5zEvG3RuxFTXBumf7C7xGAjwFuSgDvrMXKSVaEtxUSj9bQKbVw8jMcwCUbjeWL7UdLTVsPMCeAuP98WHK2YWCZfS",
  "key6": "9x6WJjPf6LgSL1giVaqTds98UXPYkhyhHyWqJkMZ4DcabfzEmZUJdW1BBTNd9qYfk1p4v8yH5rYMWj7NTsoEEvJ",
  "key7": "4iJaipGZmkEiMMYhTpPtWzw4QiMxmVncaeTU3FM3DEMCjCkbw3ps26xvMJ1pG2qFatQb1d1PqFhR7USCU9Hfr7EH",
  "key8": "2KfNUKyVvcjLi2tyaMTLbYnwEYRn4ES71C6tfCLVgdyvT5QqeFRXutVQzFq1UqiX2QsB8WqgPxvhfASREWjcmKdQ",
  "key9": "2qhVXqWgEXXNYixbEgia6xP8jdJhhCqkZrUPVnKu5Kmw6o3C29T6n2edt99fscsWPZNanrZikUgkJnXk3DDPZxnz",
  "key10": "4D795Zp4nF55tx1gM5vd2NKz31jAPaFDG7UVvy2u5D7BRZxUtAKuVc6DrBXuWoggxNp6f18ZneEQogou1r7CzLB1",
  "key11": "4LS9RWXRuZvJ2Mnm5LqsxNEzEXznjhCqyMih6CoH8SBMhKpNCanQqDt9X3Gam85JkT4VTnvPoVu4hu9o2aEKxcri",
  "key12": "2UGXyBuURWrKSgTUd5GnMQoXcPGBC5Loca93Q2hWxM5etJN4pv4FMrPkH8HUat7ULnDofhngFWtzp7dHyBtsBcKE",
  "key13": "5ifTTgNdxErZk1Scs9DitHAAtLVmevsTodMy1gKtdS541BhJDtzHUSjSxCkPp1gBEQDyAJKCZP7bqvTNFNnwLVAn",
  "key14": "3zCk62DkgDYETmG2P451y78NubbaU2z6CfKtWhWXwGKtriHj69QGgJCW5wCgedoJY4QE5yp86kAzVaPiQLFZQm9m",
  "key15": "2SSRRxjoc3K6PWG2oF36eLwESzdYNxVETb7hdQpAoFTd3F2tPgXVfwNDT7Y4woYQPRjwtbkPRfjLooCmuQC4E4pA",
  "key16": "3oorcKergyDd8Mr7W1895LrBrZH71P8DArxEn5rESgwWPmF9uy2Dg4WUGzUEytoBpfbMPbGheQFpuZpi2eprSrnx",
  "key17": "5aGf3iNvzQ7MgpCXYZoByyMJNMC2mwz9NqmKSNCZKqHdR1GZpE9W9noPm25hpPCWySU2aatAYWvCcWxFw9SgSWdB",
  "key18": "2EsgMoA3WS1wFgRJvVAu4KEndW4XHjQ9rY7wwtAJ5RSfGpjvwq6Bccz6oYzkofjgjVfpAaMwzm3RKeg1cGysTU8g",
  "key19": "21m6GqJoP68Ck3DxYT2h88Zub2xNuJmPayBcvGmhpRDyQN693CEuqN8svYS8mr1n7Eq4b5AWKhhhz3GNT8VKQmdH",
  "key20": "2XnkBjGP8mY9pf4Dv5MpTa6AwpTY3efN47CZU2ZrNmWbXueRU66Q6nyonqW6dXWNX3cTf4oWy69nZ9yTFw6THcVJ",
  "key21": "4A2vQQC8wXvqGEWBsNspwZ8gV187YuLcHqpp4NC9u85uHqNpYyENS2VLRQWzhg4bktxrT4adWqA8gYwCRSv1jtij",
  "key22": "3YwywVZeKRCs9EDxmuTr1xnXqm216ZGghYADEommfqL9qtBuTZZdNm2Uhw5ZQAgEznKReHiS5RJrUFfdXmMNGVfh",
  "key23": "RWeKqoxNGwMMqe1uMTctDNnTRyUc1RTTdaJZFTH45KfNQ2wPE7NA5am2aQkuoW8DMfM3a9z6YcrAaWoshb7ycKj",
  "key24": "fHSu5hG5Jo3Y187ZN252QhcwzDYYkdydkC2V3GWLr2kqAzSPY4FySm4KrmY8MhaqVccLNX8sWg1mCUR7i6XKEP2",
  "key25": "2jwUsq9X9AdkKFv7oVBx3djdba1umVYvziGTdWGSWEH4xxC5VqckbtaivLuaHGx7Cs6vj3EL8MRu7vVP3rvLRcZe",
  "key26": "5bKZmXWJHHa7cKQ5cdx6gvQnZjoFuM1jJtpmVcKH9EgoGZEkpNXE6wvzhizvj4wdoAYA3BuuxEzQ5sRwnCvhU5tm",
  "key27": "5PL9fMQKVYdfGvsJ4qgahWbYAixBtmN2LS7FpSf2rz1ot4sG3r6EzPqvCPViaMbMmfYRETjRKoNT9VPjrpbHK2CC",
  "key28": "5RSY4PmcGKT5wEH25fvZGn2U7nsmwNuZDRGYpvj3YQMkXHidgCTs5AedbztkBSNVfDAxx9zpnuqnvxHQdy6QJxk",
  "key29": "4dcS8nPvTRmRTND8NbUuYEXMZ4mZoMxVYHcu18xqUdEeshZAy3YfJ4jCeNXEq17eRXbgAiZvaf8WJmueWQTszJ16",
  "key30": "czHNxNWv6sSe3Rx2ceGZjLuCnHhE89SAidgZwLJ9Cfd4siks1p7E2faKAs3ycB7gYEq48GFcRmZzxbpdByXLcYm",
  "key31": "3cPkwjd7L3GFSzMaPau53ZZP2TVvJMuhjeWGc79rkEgduDTXQfr8W1gRX2Zga9gAURBBGvw89h2PQXac1taM3iBJ",
  "key32": "4JuqXZP9cveytLi2hy1hqCz2s9sqBKj94UyxHzS437gpMcKp6PiEXRxGd6FMgYMegJVNqbCveLqcYeGLYs9hc9Dg",
  "key33": "67fxXqGcdZpbRH7smY1KtMp2QyMvnKNCePXWVBKrcq17sr9x1E44Duvjtk74vzLSjmVizf6h6hgixywASs9iB8GK",
  "key34": "43vQZgJY23Rcya58Z9NB2CYwnjRBKAX4rDLNgr34xuAo947db8CHLsTpaJYpdVNbsFEqbtYxJEs5jHpAXRwCD6z3",
  "key35": "366vwrKUbuP9MFq3PqnPCYgVhfiAKYkCVL994XfrdDmmEYwUaTSfyWu1autw6Dkmn9vXRoPGzkcG4fDkR3Y3aNFH",
  "key36": "32BjWv78JiEYYSw4icnEc7K13YUctMMAEfqbim7vDrwBuJ6GWXpDcid1subdxVcrbBFcTPGjE6rdfDdnK6jLTnks",
  "key37": "23BLeBvuJT4N9ZWe3xaLQYTEWttEdAq8HSbUPBbGKc6E3K8eB4gAQz2cbhy8HkAZcZQiF21UUdZ9kMuRnpnFeCJz",
  "key38": "5RAHWN1buKpbmjuRqan5JCa8VapZmoeBV6CQLzA5FTuiUxLN45it2u2FDJr7V25GXYjnaESueC65WV2PQkwimGK3",
  "key39": "hmLF8XoNTfrveKKAAkWN5VemKp7a3HPpzRK7SEhLHhRRuikBN6UwHCo395sBp1nrANjHTzP9ddP2yQcma4mk55c",
  "key40": "3rigojraSYEEXRzbmAXhptzTUh3XWM4h6rf9NqrhU7uajQvqm8scK5eCo4TwfnLAqZhv4Y8uD71xJug7pH34Gnuk",
  "key41": "35hSvfdWcRxzPBPsJnNoVHLdHSAFecqJ8v1PiJk4neG2jBbhSpUhyRECx4aZwNHsiQzjnxBJ9Nfdguuicerd9d1t"
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
