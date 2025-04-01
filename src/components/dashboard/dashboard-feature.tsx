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
    "65S7zZrYq5bVygj9WqgVxhXfjZQBvDLd7qEMSg386GnFGujiD5o72p7EKn31BTTsD7Tp4aH9nJxeDxEypsuzRQxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435eXWr42QTP2rsY8nadSnsXrG5GXkRts3aVsS9QmFE78RDYt2UBLFqPXjqZyqRXzxgcg7dnyMm1RgRupk5RRTxm",
  "key1": "5KsJoajC5P7GfGkbPMjbHzvuCkLsAe3kUfDH6aFjFSM4kzwt5Q2p6Lc8meswSKiizfbvrGjZBSZcgJPgNB1Mhhxo",
  "key2": "23M9YjYabEokJJiS4tFBGBXVPpFKWEXxeX8Mm7sVNKhtTnFAFXQeGUzYgAYUvFL8Vp4RoJPz3jd1LaPfiCQVXzUZ",
  "key3": "cAm33eLYfDo16euxkxwEHg5WvqaGJbJnUy8bV9Vt2UBanjUTVw4LaRTp1PnQmLHNRhKnT8ZXPfTvXzHeemJVq2b",
  "key4": "45iu2asdK1u8cLH9UhxWUFYEZidX45N5EfMth6CiSoF7ecwqEFECjzYRb2ucsvRMHpbC6RutGjwoiFWoiPMxeJAr",
  "key5": "3gQFsmYA5VPtWYMCFYZMMudTd6K7TwZSHgyxw88gpHyUZyZs9uxDBYkYH3c5bGNxdiM3eTsYTYxMeb9hoFiZiHLc",
  "key6": "3CQ5euShexaAJ99CgKfDqjepWHFPsBYMF9gG7zydaN65dWmQ2eQL9YH4mTFbtLo12k1T8JqVUDLdgRUbFQ71jZue",
  "key7": "5wZYbozX1bUNDknq7YfhkH3UWLpioHXw21ze1rj563DowqaMFQ6ReZrJvhdCm2KkWUNarWzD2qaR6atmFsJUfHnc",
  "key8": "4WGdFpQYKrtcaxPiuAa4VyEVGuHUQ6jgLYKdWsFWPoM6NxJyx4T3aVtLDvGHUiQuz8ywgWLcALEYUrFz417X3W2s",
  "key9": "3LrakeDx8KE8jkLBafnRoMaFK69rHStUPedoxzJNXpWJyxaTibPRjUGGhkv5nzPTQ9C2eVvrnPHE7Ez35pzom3iM",
  "key10": "PtRrc6M4gEsSTqqWomtwFjWjBP9oT5B54Kf7T6u41Z2vNk5ieQhx4uQdtGrUiGvfDZhA31ZE4CyQ4apC771c99V",
  "key11": "5W8iFXix2xntuuEsx8ngm2eJibMhoFkExv3FUrB67dDzNMXk6eX4shuT6vYQYcBwLYphNuSwGKDYTDzLQvaD48SM",
  "key12": "uCNvgiBhvWVpaccib8iG6RsNQFiHNCQUw5UGa538NNQo2qdMwG38LHAZCCkoiTxLvgcWdHXvsnNCwHwtxkjvTEA",
  "key13": "uZRkiRcERFfUB4mxLFRXbBDf3vFKvUgP1tiWpphKmMgU2o8z7h5NTYa6J1SfpZy4tc7j2bbG9ZQVz6LNAe9iKA6",
  "key14": "2LztGKTVGQohBmJzLbp92ipobeRnm6egbiKcQVRMi4MHnfPk1BwRC6BR13uify939FjDKRP8e3LTpTCSwo9B4GAi",
  "key15": "EvpUALseu1xfSW8uKfTWUTon4VJGtFGFWJrCoPmGXeUMrtNyw6QS96pwD5fywXLo33bmR4hwSM29PCS4mtW96Z9",
  "key16": "3MiFEVpuqcemKnCjjq5N3gXSFk9f177DrXEzvfPkL4kq82mxG4kKJBLoy8opKAtMwHvkrD99p7obTNVg9ahvJX2o",
  "key17": "2jPWLyMuUueagYcJptZoDf1ARKCm7sgUuwbw5CD9JEmhKWG1xezwsuZC1oZ6rAfG4ksmhxyq46V1c1RD5GSJ1uMn",
  "key18": "5W76t4a7g8SSJcBhuoHCNQns2VgWW7A3bchiZUsRyqyoRBPfSYuaErhBXiVBGzXRJRpQj8Vm6hvzT4DonxR7Gr4D",
  "key19": "2ev1XxGobKnM8ywi7GSya2WoUPCF11ap249noM58yoqCWtSib8saRznDqHJo7ADcrJtELHaSK2tRnDr9GF7g72cU",
  "key20": "PHHZdmZPHZkpNVg6sj7kH18dccNdqCPYaisJeC16gQnYdsypRwK5W9pGgUvJRSeFpVLh5XWq2SvgyAR4TEXUYqU",
  "key21": "4uWrq6m8zZK2HnbDMhPQYShUewpAePx1acBTZeZcyqsQQAFSW6ngJzLT5PtiL8UyRU793GSUJ9vdma6QChHCaBdB",
  "key22": "vkY3aWpEawmCTREbgJob8vXuu3EmgRgRUeYLyyAmMyReDVAPFeFT4bh4FH7ZSokKsBpx5vwG8gMn3iofZG9eBHq",
  "key23": "2tM8VuZban8tV5CZXjXkvhEDKsbE5uuEu3zwDT8m5NRYSe32GzjuVSBjCH6sQnzKXjCUrnERFQjNwLqESbw9L5LA",
  "key24": "4GHw64fp3apPz3PYsLbBCTUANQs3DMUiXD9APeNn6FUmyebzhBSHEkJTE7udsNjHiTE4zhEszja2SpYFv4WFZ3Uk",
  "key25": "LiwKGYgznchr1Z7tkzXxC9qorExikaVVMzZay9uy5eqF8a9dF1EzhP6LmdHrGdKJFGVPAG9ekijoYAiGovN47A8",
  "key26": "3Jetx8RyLSGX2H7NJpg8LTdyof3efDzdGb3k47B43QsToXxzhigr4aq8ZtKKiX7QMethKjcPVb8bAkUMcXwPw13L",
  "key27": "MTisxMfdKUFfQGB9A7B32zdMbEY7q5Vtworyw4eo36AF3RWdwKpAvsXwTP8xhGQNko6Ua3ckc34TFkc1ZUvRR4g",
  "key28": "HpSvsvmoNYaijpoAPjGL6LyD7TGJGy7DkhRPCFRDT4LcCbsbR9KCU7bjfcqu8pZq7rfDfxtruhYqA4Cger8VxVX",
  "key29": "5UFmM482DTCL58Ebwq1oLny2ETAmXra6BhHiyq36mygtrz9KxZNgVubFGrBuGJruBJG8eJjGYaALGknwDF8tFyjq",
  "key30": "4XsjnKRnfY54hTgqizBXVYzC6xexZEFyYmRYvRxKQWow54Y7pnEnvsKVMZYECVhPdQ5T5vwPSUqkc4C57wTh4pdg",
  "key31": "3xm6jQWrAGW97A2DX6wmzB65rSHoDUcZLcxtiPd56dk3vzhRVTrvdt3fu4QLgurzZTcuh8CXapB3uw8sJPRFr1iA",
  "key32": "yDQGTUbKJ7yYWbM8c2ZaMMRnBkhVRHLcwmXv4YtAnxqAn4tz5MGRuz784bHGFmScuQRGaEMCgNZ7B5q9YST4pbG",
  "key33": "3NPyvi4Q4kWFYGzEFbiu7xARUNE8v8yD8Lw5VvHYErTA2D1VG148ucrGmc11gMsFPHF4cbnfBuwLH1JbXS8v9DTX",
  "key34": "22VnkUqFuao1pqexGx7qubEb6Ru3WeWxFPQV7sqU1t1HDq5FrjqWxZM5YQvwkTgb9rvhnLe4tXtg4ZeQAqpAvWyF",
  "key35": "3ekukMKs19ahf5RxtqHiMCFoPjVLHK2X4aZxupE79qDvj7YYYN9gH8ntJZxECCfyL8PgvtmvP3aQ9keWa6W7vb4M"
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
