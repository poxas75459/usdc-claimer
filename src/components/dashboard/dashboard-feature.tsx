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
    "t6jVZ5VN2oJS4pLqAuQMXqtx5iWjoXym27mnyBnpeLweP4bq4m9qEuu5iCtpSTbGQ1h2oQSFqUj1q6MfMfo7g49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vvELLmB1nRaMKKFvHPeVdufPrR5z2Y5BwxzZ9nWvptCixmN4cbLGomktgYfQJJ85A4VHowr9YnpQBe3fsZpgqDC",
  "key1": "psoHk8oxme4FZSiBTLcS8nLJzpz7ZfiYH2azLigC1UNMEQoYxGtZgoKjS2CZX3FLSthRZ3Hy2NXYkRvn14YNcms",
  "key2": "5CLqDun19tjWL4qjNeB1RagrbFnkW7Z7JapB3QxXLXs5A7idjVxuCeoNb5ZgrCpasZUFinfvDqiZub9xzqF2bx4T",
  "key3": "2EPmjD3nkGAmeNs4mjzcZxbNq5nu3xSFU1tWVi8vfqLyLiZTdUHvum1PvwehAXnasd9kaXus9LxNxrYCutgfut2Q",
  "key4": "2S1ZooxbLkrGB2aoBCuNbzLaLg1ANWmY8u9pZLA1pkiGmct42RSLUuGdoYHbUXnKdm2Neui2FnxFrzPUVcbyhsJB",
  "key5": "y5tGV4q3HBg4KafSgWMUPRpGypzLUqsFL8irefh7JYkQJxyFgH8MD5tAPvBWDD4QzzZmX7NxRNtF8NrXhh6v3Rr",
  "key6": "2WhfVZAw2P1VAK5rKCY4kBcoXqXW8aNEq3aeXqLSK3ynMTF36jEWVNSsMKaVyKQynEDGuLF1SUbwdT7UieX6AUjy",
  "key7": "2RDQDTXMASYPoykPeawr7M1xHbk1ymCZPYoq53UqX4ehJRYBzNLQn4hMtk9gQWo1F7S6p31RRrJKHsF76NThSka8",
  "key8": "5FznB8GUGZmJniZuZLhRHz6KnvEN9ViTy96uJxq4g2nR3tf7VhJNHjAJ5R3UPEZ5YrrqSgdG6WLbYFogKrkj1v6D",
  "key9": "4gG47Jy9dTxvj6t42ktDBJbVxW8rvtpF568H7ekHf4huKwvWdk4yh6BYmJPbp4yT9fht2FFnsLYhm7g7u2JH3Zrp",
  "key10": "568eGGb14HN3ofbvqEPLaiuhgDM1gsu6kbLc4RdYuCjvicbvH4o4ZsqXCJK73tANpoYXUBh9XZ65cDVLyu3e8P6M",
  "key11": "3JY9D7VcLCyUtW6WuURhpoPiAxGgBiuFDL4KEabaNVzCMrHJCaJeKhPxj8HSiatcc17x2migcwdWw32H7nB1GsjN",
  "key12": "3Uhr5GUtku119dGgoc27MTj3VguoYJqxYQqsotTZTC6jfpTtE5vcDpbLi3umb4tQzX2jhqHFZgZ1uhFhybFT4syF",
  "key13": "5km1NfjNPAC24NmRXowd6kVquQ3M6k1KjrH3yVcHEdEtxZb1fSge1ZYXSk77DvkYfUaDj8dm5DqGpWJYFxPB8bb5",
  "key14": "4HgcP5AdgEzdMMxDcgso6qMjYiP8aYz8wHyN4A5gJBnG3aaCYv4cDy31FMCQ4TeQpgrooDPahgTtmoRabN767xDR",
  "key15": "22ryFvE1oi5UmTxF6de67nWVXGxjSeadcUcoV96FJXPpBL32WrDfa4Q8Vc8kkCemf5B8PvBAUFEhzBjAkBtzx4Tc",
  "key16": "3a3euz1kYQgNqyJYKzvn4c4DYYsRX3htMTTMrT8Y8e9BCFqcs77fUcHNVEuc2c14g4GtEm1MigQsUd5oxfg1izaC",
  "key17": "5rxD9oAM49TUhsATyMrRRrezvEkwnwePfXf2Yv7PvQNs4FZUZMxGYtryDFqNQYfQ7P9hzjkaFNqU4bgh3fQZNnxh",
  "key18": "4k4LBNnpShS7hsnQMvv9ctk7hcRv8YdTfGqYXaxSSZcTW7cQExespTNSN16tn3DTEDHPXhfxzdKTAzFQMsYjsx1K",
  "key19": "5U12qkXgcp3EzGEKxLA8425EWyBegYXhYyWuA59r3PybucFwngSt5214vfe43xQ9cpP7jDSJmCW4t7wo4jtbXvsy",
  "key20": "5QtTAjbXdEnTkirddZW1osHatSdsZutvZf4ehny5n6Zh3yVDfBHfszRnjrZctbQLrucduXLzmujHPir6GmLHakWV",
  "key21": "JwaNSVgp4gJsKigkTEbQ6QaK39TKZNXB4akB2P3MCojARcKYAWjJqbtmmvyTpJXy7haVWqtVDUDze7VHEbAJQxq",
  "key22": "5FAGqfeWh1yPGky2UXEkKBrGZHvzLaDfv8NWfEfmowDJzS8JABVuhqmXU99E6an36zGrDgog92t6yHWhqrmngjUt",
  "key23": "ygV8CnZz2TSrS6JW3KipKt6J62aMzNZqQEBk2CWjkh86C5s2LkMQzkLRvhqCXZcugwgQrUxMjRT5HCW8LYmsFeT",
  "key24": "3ry1rKpuqFB5qzijoyjuCCMkxkd3SPbyNHnnvY1e1VyZYasWUDqtcYu88M31XSgqmwiS899oDmqi1SAPr17voc7k",
  "key25": "5cz8SAH1JKYFRxecu3j4yUp7qPtufg62Bq5MAKxLGycd2ap6iUhWB1FSorfp5nUNXnq1JZxsXhtqMXTSuSrLzAr2",
  "key26": "4QYyUNfbzvd9fL6eYpnepB5S2UKEcYfGK3w81USg5KrpiHjcLqa3pZmbJ3ACEgPkcEZZf9zyQmgzdwZLR9ei7QNj",
  "key27": "CPGqmj9bZ2uEb2AUS8svUQpvr9eBT89kdm4uiZdqgVWBvFP24zQRT3MkCCMyY1A8QmRbHrSzqz7MjVtJx3BnNVe",
  "key28": "4JcfH4iNEQ16xpPD41TtpNXoV8PQ1fUupuDtZiSAKRzm18riWGS7iVFG6Qiu6Wm6DRw452kSAePHvdi9pAdfUxjQ",
  "key29": "RvePVyH7cE3zw459PLiG7BovPC81d1rLAUqMbawfarfQHABFZi66u4PfpKUFwJ1g3sNMwyGFewGsvnwdCw6SUGH",
  "key30": "YTd67ni5dnGokdw9USLx8Y1XnDWndnEK36uhKWjUd5VQ5wua2a6duz6FcM9g1UMqDiMwGmfT6YgpLk7X46xXFNR",
  "key31": "WBY8Nc3PwifoimKYfws3aisniNu141aYPTKU8SjNuZ9XWgxAKbffQVzMhvdWv6nE8cQyMWZB8vc38rJzx7HqShp",
  "key32": "4fqFM6teV2hzUkuAmBTqV8JtQPHJ6MG81vgxxZqkEQQcmi9mPhWRK37m1ENXjg9Nx2nZYcbU5tFH6mJmaiTjeWWw",
  "key33": "2qtgXNUkDfUEE8GAk3G1sygBBYbwkAnyRYWLLfYtQ7zZevtn6RQLZwGqBdBQQw6APAj1aD6bgjMXTmAJSPc3BqLK",
  "key34": "3kG4v8Wz5LWPyko9T2GSyZPnzFAiWuhV4v7BAt1assLsesTkh3Tht6vVMSeep5kmuyFGAAQQz2aC6zxQFWdZvZ9X",
  "key35": "42HjyKHmPBBVv2pmCca6QuTx9rGc9aFBa5UhEY38RfP3JYVUukQ2CMXT9Yw8LGoCdQfxixcHPYXiRkJKEumJmcRo",
  "key36": "bYwZD1GhmoxRJMCsUuxmWzvKK6oKHDeZEF88EYESpgT4VBiHM7AHAUYCQsd4ZVvRKYCtHSFvQP3JoM69vW2ijXU",
  "key37": "4skGcxKij9ozf9ArHt6y13erj3nwqZ1Ew6SyJc5CSRtWYKvLCkHEW9aC8VncpwxfsRc3ZMb98oRgAf1dTwJyA8gz",
  "key38": "2XhgdKB5MwBVJ5FzL8dd533FkbfBMRrvbciuNVeNhX6rbiKnDa4e8WLBazah2tW88ibKV7UtugVNPHyDXydbkKzV",
  "key39": "btfD86g7JvysxtAYzjiPB3KQVJr6NNSqrnnshHwsDnERoTQJhhaE3bCE1izFQ2PQmZGaej6U3AyXLvf9z4UeAyd",
  "key40": "5SwnfHL4Z5kkW5DhGzAsgp5o66UYR2BxDvM6ahCgxuX9rfT5QDJ15avxSxPoqvCbcAWG938TXuYUY3rJSm4gss97",
  "key41": "tEQLUqgqgEWqWXPcJ9hgMxRHnYyzLxCrmkJTzQstuy9Euoa4VWZLW4APdB8yToKEBzdwR5gEjMFDPWt2rRXcLfM",
  "key42": "2eKoWYRMcQ4JJw5opuin4LyUcwba8iRu1NZwwDPQVaYVFPcwMpv5zn8jrXTznbjSkGtMvgWaiqmacWSqu7HpH8iV"
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
