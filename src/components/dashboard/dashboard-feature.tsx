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
    "4LXJbDKmTLwyKpRhAnU7FjGf7K62F73t36yeHxGEZQHrSpA64vLrf2nzJKLRNjLwg4hdLtnZf1hEgVRaGHya6Bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GccQhoD4A3s66zrWHPV4dVbNVKhB26nM6W8A52yZoGuMSYKZLbE2ZbhBUXBnnwzyZodYGvJ4H6CSvNfk6nAdCeF",
  "key1": "4WGYh5BR9BrJ6zdj7Gb3hFPmeiFEKWDy3mE2UhFX1sVqLFPkLDbhL4tSNkq2NYKMxLfVmBpfSmvUEUxoC4eNSiHC",
  "key2": "4Qy32FAYBvV4XL57TG7hcdfYtJq9AvjjmmRnnCphdagEK8fjn2ZtBt4Ki6kkzjLwrTtZMnCxKvVayycM72m9vn5p",
  "key3": "4uNkCB21RtW9Vi98dmgi9RtzFHvwa7j5pNd7t96VSRu5Ng4YBk3U5CMAZYnB6xdYtAMGpSPYWkpY9t9417LEn899",
  "key4": "MxgT5JzLGycbXdBN5p3ZuEeza8x9koQtyVTKe4ZKXgFuZWFPWugefTeK1XxU1mNt1mWRWFzzhG7bBJ94G7B7VCn",
  "key5": "UxojYnqjKJJmsx3w8UAtHmLhfGaoQgSYL9oWKDEutnyqhfqrQs4bKUfW5CrH5EaSMXwtiRhLaKbyEYzXv2rerks",
  "key6": "5gyaJ9u3rfPnRp9ERy8Y4m3EzQWpRRc1Pf1iNPWoQY1xehqLQ3QiYcUypqycNNAd9RR2Uo2YT9hJoxja4oVH83Uh",
  "key7": "5G7BJB1sR9gQVFH3Tstve47y7eJQNy7SiuDpEQQLBef3kMurjiR4ysqxDjAEcpD8J4bH2rErC5w58xHyRBiyoBUv",
  "key8": "hD4oA8DvCAvutBwchZua7fLkqyKXQC9fzqAdYPqMPsrNsvuBUeDm2W57XLpAcYmstSUd4KriMq8AUYgWXcnZWkY",
  "key9": "61CBvZwh3zkLripJPuASiDnmzUmP2XQnGV2ch2iHpsTeJLiCezjXsbWX8pdzmEKcH8xnSSxLG2YCf51gSNiGQq53",
  "key10": "5TYDC5Dq16uu3MLQLnTKkEvKwbmez5MBNWyUfWi2gj2TYtchFPFTTSdGJg5D98DbX2a72eNt1DiQxHr1jAS9XKmC",
  "key11": "4CnEMDMu73VBhkTpL43n9BdMSDe5AAPULxJRncsQbcLv2tN3s85M2CJEDn27FtFLsp9ruA5eftw8Dm99bg4aKgTZ",
  "key12": "4x9g9ZDwQd91JZofC3tC2ZdkvzF9rS5ix3JmPXL3JvLb9QiqJYrGWdQUQyUdZaVvwyA2ykdBGdx7NVLAffE3H9FQ",
  "key13": "5HPeEvcsT87of8NHsG8im8zSJ4HeVd14AaFFSauK71sUVMFKQ4w9dXZDqMqE26AK4Crexd7aEgv9Z2mmiH9ZwSy9",
  "key14": "4izNFxVdmmVHt5LbxvSQMhUFFPXSkLooc5gxp89cQmeDTnye5RmR8dEb7hZzthS81wThuvoQfAw73Rh6Zmz7KXNt",
  "key15": "4AN5iSsAWsX7FLsiuQG4z2xdycMhm1q3MiyCD9JcxGBoJzAX9qZ8zeSQGmR1MEqwgGEaPU3kDnyhNd2jeSzMa6qd",
  "key16": "3tB8yucajsFBoU2iHcKJPwLMMwqqLx8cAfWNkp7ZyykeTRuQAJEpvTqw789XVFmoH9mUYswSfSRReeoY3J5hejYm",
  "key17": "4WgYErpGoS8f1LvEvjMi8HaizYsdgu7AFkiZuwgNE1wSNp5prMrEUKYu5b2tr5BJiFkw1w3yxK2xXi6MQEJ3C4mT",
  "key18": "QL198761yRYvcpyx9DbZvHzGPRWve1ZHs4Dd3tdkXn4FSkYQptDNBzCZ7sFyvxLSoNSTrLXcZGJfG5LFE2iCKep",
  "key19": "2q2vmgC8LAVKQ3KmEW1J2UdcnJ9FCLmkBtXnLtN2oWFqZDwgnAbixJKhJrWsD2pWppeN5htrZJqX3Bbmner2wV3M",
  "key20": "43Fkx1hnbXYh2hvBKenDDWn8RGQ6aZ4RMyzSs7RQ2MsVMu87PuczayYDBfacE8e2CSNnuinLMzBKaS5R1RCBXPsH",
  "key21": "5NJLVZpfa8x3NeLBw2e4JR6z4aWJ1vvKksimU2HjdAhGn68wdx17B1jfLgMSGiAFNy5hxUiDbPwFcCtVkjq8hQwp",
  "key22": "3QdRuXqdxFsdm5VuKxSkVgey4coFJvBKdSdpLaMSuPu55pbiQimuH8JGobBp9DVniY6XQWWVE6DpecGMv73Xh2V6",
  "key23": "dHiFGDQ35yRst9Lx5YcRj2EHDLbhM4CsR8cZuz9BkmK8Ea3B9NmRv4Rorcw2FBzTzUDvB6CQKLpCKpoD6MSVejr",
  "key24": "4u8jhJove5txtt8gwMrVfQVE1Fi6JSzfx7R6x2PdQh1QTRvkG5kqgiaG9cjAUWvi9B8W9GCiAmTEy68WLaRRDXP6",
  "key25": "43wJWTHpFbP8uxcDGmiK9AdL47URdgCuvq7QTynqj28BpiUKD3b1kQ1xDXqmhvjH3Ee2BUQvtHpkyAjbY42jL2qJ"
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
