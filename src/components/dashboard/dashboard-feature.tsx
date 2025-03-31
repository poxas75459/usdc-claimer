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
    "5F8tyuYSfpkhiYsoBjqXTR1qRRpCCeFcabcrHgEApNQxJWpVZJGLuYGVFxaUEYAifVvLfFsqQDU3FrLJBC1AkvZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43KZU55Eb4Mx2HD42yHvkBpNMppLVnFfLErB5VQWdogXWMir8jHc4GV3wVs7Qb4UqLdM7Uk7SeMmpv2YQ2j9ySDj",
  "key1": "LKRfCcnWnHQeFeF8cuJmM3PA4W9JkPWoMX49dFdLFRF85Z7zuBtXnTn9Gva3n28BsVzWb28Lpo2uxXtdEdfBjbg",
  "key2": "2qNnQVN93nJ1rv5bHJhTyWQvVT47pUsAr8sRuS5jNqB1mEKW1iU4akBDX319rFJT5hHx2oiick2naSe5mq3fwAy2",
  "key3": "kckc8e5rsTQ8isqkaz5F5TtEqgsA2DCQiWYWxAw6wwuNt8G9XUGanSFHEnT6FGEVa8bHQmyoGen93SRFbaGNf4R",
  "key4": "2nbq3fJWwDGqSAMQqyAmpBN2z6BC7hEqcdF5yxjPjjoiRKEHSSFid5RF3CSf4gWdNvDwKWBWbaFhKynsgMfH1nec",
  "key5": "5JQh1sasTGzPbqXKPFojUPpT815h4XAzZBku7bLJnpHNURKcormPy7DAxYGHEH6RYoaSQhsiDeSwG1VB3aK5Ygip",
  "key6": "fNmghbqQ1MA3TVu6JDEvJK3HJdUps941nVTTLQ5njT3tHSwSv4MALWGFkUKk7FM8qmGApHhBkZgnErJuQET6Pye",
  "key7": "2smXYodJhvLB1QbArFj3fdv7rVVc8dhQkpSGC5fKN4XX6tWUzGB2CqJcXHL5B66whCNaWYbdPuMUYdNRN7eEfv6C",
  "key8": "5dVckvgri9vYVXnShdTsau9Lkjr2iAFTZQWvH4un6AndVn4U63NapkpyvN9i799GEPjU2mpU2sMfdavFki84su2q",
  "key9": "2g66BxwGtVDyUiLwJxR3ZXy2JvWBdhSdseVVgWRdHWzUZv433MKVu5orbm5jwzDy8n79wbkjg48GFYVtB1P2sE6j",
  "key10": "rw6JqbR2kYGCaowjVN38aTY3TDhrjLpTa5QWjxR9aR1WMB9EvUM5Rw6cLGPR3oea3hwRvPwUg7zD4ihkjruZN74",
  "key11": "5EtW4w5DhgBmXRMZXEJNbr1KhJq5ZHR3jHag2qMPZREir4G1K8S1ur1bRpZpHUAJzKhpYEcFQk3H3h5Gf2EvvwUa",
  "key12": "5PC4ntp9PVgXAdmVqNz775x1ZPkfjns9eYrUtkqxjvzjfAsnAbCcTYpoSGoitmsrB8cJYa99Su9vAZrBMTvzRZrs",
  "key13": "2vt25nCFVezsb35wRfHjkcK2zjAmvtEDc1DDTi558L1GeDqM2t8yvJEw8ub4FFFCP6DdLDbmijELnnFunze49Yau",
  "key14": "312V5ys3KyTw35tYwiTainWM6Q6XNckFmLv1wcpGkv7189u5M6nCDX1g9wTwujz1RybiXGpMBDinWm1wWW9vNS73",
  "key15": "5xUXiJ9FUDzaPyFUhsUiWF8DC6q8hwfZQNYZoyZXJkskrChTZdPot3ooEkB7SLR46CMWj4ZuC5GFaFPSiJGw5TC1",
  "key16": "3KGHgXdx2KMQKiHKpWtjRUWuT87zJWguLi54Pzi4QcdmRYgekkDkDEagSZrrv3sbEQa921taQ1ZY8kHYUijxU2gu",
  "key17": "66xahDMc1e4yYA5BPkuswKymdB3GjS9Ly5pH71b4rmue5B831RXxL2kRE6La9zD8kdjkx9CgGPuuuUAbSjFKfmTY",
  "key18": "xBjjiqAbUM94QPVGqKMFhrit2eTiDFpcBMD95zWt5VMZcsrUiTWWmEyqj7So7wCrmHaCAKvochUauHZ7q1Q4bEd",
  "key19": "4j9zyowVhmeBReVPRLG2AC8YtyCaKJuQ7KzKXqp8iSnWb8hEEWTPuWxZnS5oRvCuBvUnbaKzzxph67odZCKpDT7h",
  "key20": "5VKUuzRosJ3yck1eEVE4Z8MqVzFddvYorEW94b4kPwVJq6q4K9E3yrj6izHHofcRv7dvvt1stwpoNuv6pXgJy1km",
  "key21": "5hKKJzJs5MnizadVNRTj1UCEpCvSBpiqR8nZYWY5miMREsLRmv6dt4LgToE9pBk9QsEtaBaTkApJqZA4PWeEGvsj",
  "key22": "4eR4yG14FnxRuyYZHGWQ2gwzwMkAhUjm1Q6RYxHQCrdErsaNnVc7p18ZfBJzmjBH5BSspoy99GLngADRqoMQFGvc",
  "key23": "2GaW1H93sp9ntfuCMrTQsmLv1T9G6xTVJGr16t4vYWfcVDmhaJXN7achv9iGb6D5Se3JxGyRqyPEEX8v2kUbMo4w",
  "key24": "4Q8M1aYf3fPZLzA3XQRnyT99SfVqvStJqfY7BpcPYqwX1qGC1RdYc4FpLdSHxmZWuGHJT7Sy1WT7Ymsrf81Jrmaq",
  "key25": "3oWxtEtH7U4snE1K6vDTHTQwyhJbcNpwpuwjhWDjAFDxzGQeKdexcYVYj4hMh9GHuysbduP592pBUBpeTFFfYBZK",
  "key26": "5HQGvPvEmBF6WAPxG1GaF9o1ZnMQgW58wJEKdzL4qonchaHQx59AtsU7LDEjmH5H3jQXUaJ93hnXDqFkegKXWwxM",
  "key27": "4eeia5bnqTrFeXWCEhGmhLqzyN7HHMpi5CEqkRwBNRPV2pJB6N2sPuZ39wbj6iC3Rfz9CX5bRWjzTAkK2PN61T38",
  "key28": "5oYigGPcNiRnfU92bwhieo3rbzDeBxz9u5ii1Xox6ALjdukQG45xb5KWcNm8xuWgBmYuWpZ3oRkDB6fnrzikWU24",
  "key29": "4DCjxeTApxHM8L4qjjRchnCD8dgwQYkGeX7j3VgU2uQxdBi8t3FyJXjFcPwKje74SGxNFC5Lds5PZitj813bmhvz",
  "key30": "5STiUoBh6ooQ6753c39SS1KrGX3Whh9WHKJSyoKCmbsrdHJ5QqDAi4KNfQkYC43vJA3pDW5xu2moGvHGzUw6gjSk",
  "key31": "32orfqJet8DnqiGyuUXUyWBJrj56AA9ST21iGNu8rULRRjgbBaWpuvSt1iySjJoqk6CeHauq6qKaqS9Nz6NywPiD",
  "key32": "4qorSXyj826ih98DjJpGW1XV6jXvUQUvjnqxDBxeeRqcDRJ6jrCzLeXr66e5M1SBNZuVLLRG32CFCLxpumGfX2FL",
  "key33": "6477qemBCa9UnEFNV5akcy3jaPwRUz7MivW9NJbtjtrZfitX3Ldtwoyr2soRobEG5g1rTqszbAXXLCzKy4Zy2QFa",
  "key34": "5VnHRTQD4pfQ2CTNMCDxJchBttCgsMm8nkndk4RJytRhe1VuYa7A6GpbLVe5cXV71LwyrCmo3EdGmGcgyLXP98Fk",
  "key35": "4CvFovTs8wTxNwheZfivLUJieG8pE6ngJRMaBDJQSf7Er7knBMEvKRKQbsPvaPkJD3perFSZTyGDE6ekzMpDKZrV",
  "key36": "3BzhHYu2jAm88LEMMwEEDjd9Rzam7q88xXviGDm4Mn8jaE37Eqh1esp56S4a9qxKWLGqU45dEpA1zV5XMbiYPCR2",
  "key37": "57yhbZz61vrY6V2bvb7Ffg6uBYY93HJqiFkRgtFzJPKU4AozmxcpRwu6G4kepE7Chg9TjcwkdDcosERPUZUdHYuj",
  "key38": "4G1xHQNXKL6XpxFoqFhBvtuBLQeeiMkWxXkDYxXADprhjdJ4QKpTctsSd4zW2N6xap2x9oVC3Pt2jmsaR4J4Dm39",
  "key39": "2nDintRNZwtWpcxWVZDkuuyjoD1euQcT4DDgujHCjxKnXrwWoZGknHamgQGMM2GcEEng5KuM3M5vJ5R1wT71CDyM",
  "key40": "5VWYDdCHkpaWD64JpVfHTd9tHHUscgAbuJ6rPvekFDgrzyJwzharGVSGa41D8dhu8xjVnsCyh8VL4sB3kgGRRMmv",
  "key41": "4c1sGh9fRmNLdK1jU2jmQHekmHiQEMZ7w8WRY9KS686TE3adwBjVwRtvHLhoJUAXJpFqfDGAsag9hJJnKd4zbGL",
  "key42": "2HW9VWuzhbrBKs7dc725Mn8Toda4fYYPpppcUQgWpo8GimHRGddgngndpRwoEa84FRe66bzwDEVQTBobgZ9gB9rR",
  "key43": "XG9om2vmqg88b2FGAhqibukwwLZnHknGzmxfAxkMUp6xzdjCGb8V1tQHHVo9eXS18351kN4FLkHX4h5ZpU8ZCyt",
  "key44": "5Pm7Csc3YNAajmNqNEUyj96k3KuACD473Wh9bXDiLYGnL6DDtWcYDkYN7XFwHWBb12izS2XeMWvTU1gW1F7A87gS"
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
