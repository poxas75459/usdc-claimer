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
    "4MbtCjfwRPMhJ6TVRgQEspwpLvnyGxnGujJgQknH3cj8ND7rrqd7zV6RuFwXErH5QYDyyLR1zBBvPj234Zd9irkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5esgfLFfJrpXic4JPomiYfgktZfvpoQPTfzGx2ka2ppQho7GLbZBe3q2NgJdfvwcpcHTar8NJo4qhVcm8T82x2K1",
  "key1": "mvnYVmwJZyVWYrTs9hBb7xC29Mf5tDsZcoor35dSzVt75GSTJ6jCEMsTFr6HM6CAmPcmPuZKag2o7PhiXninrWX",
  "key2": "nEn2W65HybMraz8vi5GJcZcbd6ofjUKG6eLQnx2BefNbZWivywXYKznQhr2yKJb4373HgaLH9BeujXetSUe77zW",
  "key3": "2sWyj2B8vvREMVy8TkqZ6u5Tb3LtBivLNfuHsojpsxtBs9PEoUc5nXWkriiQR3vcmGbCH2q5ApftWKt9GxLYgrWs",
  "key4": "51VCNoNq3kocv9g5L9xr6bpg1sAhU5PNpDQdMtKoha4Ej6tcKb8nK6gVA8agymhyZTSABbA5BVDYxqKUEnBSDGPm",
  "key5": "5pCLktxx4sxLBSPKtB4CmWUW48AgpNsgVw2CaZMCnssTmL4rxaEQvE6vrFb4FRJkDFAgsnPLoTBX8wmrkRCeqgK4",
  "key6": "52YM2QA891fxQFnkH64K2iRYxCS4wrHeWwNheoqfZ5cTSFG7xzYwZDSSd7a874X8K5YZtSvY9m5aueiZy5F3c5q4",
  "key7": "8KWcRiaYVr1xuigkKUXGChXyvjsUEvTQHXYuFFP6uj4NTQkKESHKSiEV1CX4bcK8JtvFU6qSh96yTwuWXk6nuYu",
  "key8": "2eBEP53nGHpABCoWxWCCE97B4YGkzNesgn2eAy7rdmJgy6fKXYpp4f1tGs9VT5Y2We1NfN3JZTtUhUroDhKZMAQa",
  "key9": "2axtS4TGzX2w7xbRjd1XrVe4wm6ut2e4XiyPLThf83GtwfVsfq15dz9PcbBtewB5ySkzqvSGQt4DPHZ5hpBwYF6w",
  "key10": "5FnT3TWGsyrpwz69ttKcM2TVXC9TMp4LMsAob3Gt6AyVReBdPopPzJeYm3zPnXTuYfu3KtL9Fr44qbwXz7X5MnTc",
  "key11": "3HPj7ig7J639WeSvHtHft8VxBgMEYjK7d2qoyBvkMvnoi2vZmbZzj6XPj9uuxMDvuRkwkHEPBwcx1CHEt8biEij9",
  "key12": "3G8a8qzq73Jnx1EV2NEzWR3WULjtu4rMkQHtfGNX2KWbHqer1WWuQG8Nx2j1LZwiQg8VNuyn9ppa5hoS6s4P2nX9",
  "key13": "39hkbGiwaU2NApy3LzbrmaRYPxbRYCS3etDgVA516hiCiVDXpJcoFkMsJmg5uF24fi6UztXZU8m5d7q1HdDDvS3g",
  "key14": "UEPuJAtLwEr6idUQhtvzDfy5iJsGQ5T38K3StJMh59jiMtfRy6qXGa9ubMkCETgpCWqLj7NLEiHAM8h9VrV8bnA",
  "key15": "5Y43pZaZ9aGkS3JygqvAu8aVVRz4bRY4gkNd6C638dsa11cV83AmNAPijHPLPzD38eRRuQQHoNiuCmwER6qQWfxx",
  "key16": "4Z7ZLQ3pTntoo4H6BdDLfYhZRb73wrbShwPCMB4QDjvdKQcRT2hq1jeDxzZFFrNnZNhEDNYEQ377UEBgFDtwsRSd",
  "key17": "5bDPrNBHADGyn65L3eaWaQyBHXFwZp46oHtrJRprM2JWyt5Xx4c75YnkU89Xq162a5WQcfRMcdbCebTnmCVLpJmK",
  "key18": "4RUNgrVRoZftbB4TRYjTfgaK2gvzG1ZBaF6FBpctzCnDeYsZ1BGCpcQjJbUXsa1stjxthGwzuFHuXTAdGYjGBMJt",
  "key19": "58inczSuXUHj9dsaNtZEp57ERWxdjZ6k6my9ncWvhKuqzx8wRqReFZaym4SKcb3tGdhjnvWWEg9x5pjEKsQxvwty",
  "key20": "4Xi9jLFgMVNK9s2qozSWjRVMKXcRT75LXPLv3iQdNqCBbpWJ9C6JBoYXJ5o8buyP1qVSguArm3bhbWvAtpRneRhJ",
  "key21": "2uCeVKd5rZ1qu8G1A4NVSQ13mL7iF8App7A5Lb4XqTNSUYyYmqFx7Gc4V7KXnxYrSg5Zzgs7YdiLBQsZ81oXXsLi",
  "key22": "Wr8v5MfRd1dCwhQAZPsvm2ymqkpw6QPFWoD3vYwdnGLePw752oQSm5uiGb9eZyJHDpPVknc2RJNYcpE4EXnDfPq",
  "key23": "4vRFcqJ1yULisVqZmYe2ofxdeGPrSgTr3oK1azpCtRpKQUphJzNaWT6jiBNykYmPXruTuEoPEBVTCLk131ZWL3Dd",
  "key24": "4H37qShRpM7xHhH3gwsAbqbWkpAoCxzpoiG7TBpPwxWHDQyyUgH3CZStH2uN9pkKbso4HEVw2qtYs5X783Fq4xDz",
  "key25": "GcZ5ywi8XCrHunDnzvDB8e5Mu31zJZzQfDF7A269nWMBckztkELDsxfTiYEesmjfVLLpX3XuhX1zn3AqLvEvcG2",
  "key26": "3peMVWnGw7KhiLUTJp8WWycQAr2NRyByZ36dLeoszpktbUt25gieHYShQXtmGdqbK4ujFvkp4wTPefJ7QkhAs69R",
  "key27": "5jm5CKu133yBFqJMfeFNKAfFiL5KgP8C6e3E7Kf4SDSPpJqpXGhZsvK5s7aGtgEU9VfXM1dYvpTTaW7UQK3YuGA2",
  "key28": "23mRZUpre9BdXT4vLdqwLPb8cKAMCZGqC1bBtgWbD6pjMbs7nrH2Mh5kBZP12dKQ117MdYSHoSyF9YboVXo6tvTt",
  "key29": "4zJfop2TgrS3AozxUrCgJzart7Cze6ioSbYxgDS6A9HJPHuRvHgRWLYXhS532DjxQp2WfMzT13neUAgdm2DJrBYe",
  "key30": "4yKXvB7X83voywiuMXD14bX3hKiE5j5gXQqJjzRUc4ttF4ct1mn4zp7tMY5ZXVLQeun3T4h5REj6Hf7ojGDDR5fV",
  "key31": "5VP6fmgyvHiPGYDACfKGHB6buKNDjXre9bJHKYCCnTju73zbsuy8VBfvSsx7VH8FB7QfZifsk248z88KnVGPAka5",
  "key32": "bftAZV5UX592dE8QKmvWqNk3a7zPKbTtM4BoSok24kyh94ZEnZtyCUzQN4taVVaKGMBAaL9oX7sdED77xVy8tDn"
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
