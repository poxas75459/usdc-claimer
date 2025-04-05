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
    "2jpQaioJq6uYD5J2N17kmxE9ZGZs9t2Aoy7Nmv3pwuYF42FkSepY4MjdyrYsmZ78qMovQwYGkzcnkjbwKF31HoUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4to5jR6HsYVrA7UnbtBbWmAtNpJUKGKpmQEDqPyZCbao2w1XQMfKpLY8fv3oaQLFcWs6MSDkbNdJJnvZ82iniKxU",
  "key1": "5oRLbHcL64jVxB9HN9EBL26GFyejb2DNqCzkvVezTZeeU7C1b9U9n3AQnZVwpUmmzcWZufWnwpKz5m226LvtMPRM",
  "key2": "2YV1sX95VxeGm431kjGj2Bz31UoWWvrQR7bg47hUbJUmww23TD2YxAJekTXa36b925X4Gk5G9FVX21jyzzaxnCTK",
  "key3": "oBCqiuS9Xdp3FsFRVNuTdj8QoDfGXSPgtNv7hLPaNgd3AxMQYEE1njoeVzQtKHVzyjqB2QQrd9ZDfBLiQRsCosL",
  "key4": "4bs5GC5pUDJwKfLaMY2NzHPTYxNhpdqNbZVGaXkyKHFRdkxxbx76tHhTyUP7CxwCmHF8fvHFybcJpGRNsRmbqJHd",
  "key5": "3SoN4kgCUCMNR9LH2iRqQKroGdCFHLFkPMsy39oQEswRs7ecCELG3zk3Tkm7JGhruN3PwDCpY6mtGeVcSG3Qb8FK",
  "key6": "2NbX7aAJXYGu92657PBcJvyLDYeZajzZJwJmC8kC3ckSq9Ff71MN8eHNhUq38vWGKRvyW6EzZXB2nez7TFtNBpgj",
  "key7": "4vQnjESSamGpkksDt8cxqnzJbXPxWiayQSX4EauuBJA5Ab3isoQV77ir8x37g5ByoGS1jVxryUZjHZxDdc1q2RpU",
  "key8": "y44wp6JpBgALU3T9T7CPuWoPx4K7QaLo4QiMKjCkyqEhUnZbeqy4im5AAQAZgMs18PQJKiJDFCavGKqa6fPB3dL",
  "key9": "2Gtqq56GMByrAUFZ7uNB3pjdEckzSWFP4mAapm3J93PMqs6c6a4q5QJQrKWWYSqFwpNv7AB6E1iF3RrzWo9k32ZH",
  "key10": "5AL4ujH9MdL7cyqLQ9FfD5BMa2Sooc8NkC1qFxpLbrX5fhE9pAeYqaYG779QXQDhNzuJPmrdK5oauYBbH2Vy1uZt",
  "key11": "2RzkHGMz3MT3BtJADZ8uyAB78f4bRsbEvUSvDKvSe8bT8nXkDypA7nYegULynNdhxeFuC3m3sHaG4xB7XDcsrEyj",
  "key12": "4Z6WAgReXK29PKoWdwFESwPnEsDtgcpmYNmGS4n6AWMPgk84qAbCjMBbfvwZcxSDxryeGdHsoCbH4WN5d4g8ASUd",
  "key13": "7eKfRtQwVfhn35qVAuvjHE2LLc2XapvTLXbptFwnL3KAEJJqvQuCyPrgaqXftMWx75QzccuWchBeGXrYmxgJHMQ",
  "key14": "3dAYFfkPD3MjLCNwNSUT21SLGJ2SEaYfmGAjRP6LNt8z2GqoeMnU8zodtYdurkXjYA2Ecw7rd4e5mvFrpqbDfNZa",
  "key15": "4dfn9M5gs3wMfYHTxko4vsWpZYoAWdv3wAGN2zraL37Hco9tD1MQuc8fB4xWE4JQZDnJFPwYXi2YnPXH7KgevAmQ",
  "key16": "4isoZJequYwP366uta5BsDzrp7Z1RH2j5YVxae8mQgkyZG7XQDe9Y9QR4Gn4mZReowUrNgMsZBS468QERbsMEm5v",
  "key17": "5KHHHtJc8QqBCNGXgv3iK61T5dkjZGqqycLonQfACy7JZaWG9DpGgoWjBxbYYNzZf2PWZ8fEppWEhyoih4W83qqB",
  "key18": "481yYiVsoSpCzcdSgn9U9BLSYyjxfJCwtQ6RQJc7Bh2VhPegxKawRoive8obpM6BNLLpTVkn7Xb7XTynLY83Zgz9",
  "key19": "4L5LXKaaQPMUmcngZZYSk3sjRtBPpT6Z5k2nBGLtgk9PRjUEkHnW41qfsWMLZJqWmg2fXHo9v1hGmeCRWtpdYmg",
  "key20": "3tyXywWYt4iZgG47WAPXMy2r7wrLoXp7Y7pevQn5cBZFfgY9pcmYPRwW42b37rrRLQ9AxjhVXuvEaBCoZhtnvJiE",
  "key21": "61QgUuxxUDwn8prY7uEMa8m4DcwbRtj2gSFqmeQ9FEeXCWmZeTvE2u6kwpnQcQHQTKsA63xNZB8qv9219vGqVGCp",
  "key22": "2sB2g6ttt1gPooAxwXYyogErpWCsbNzFRGffrCFhMu3Z8xhDXRXzw3fw1jVesRyT3LgAoqDXrqfrgMHnSLxiCtba",
  "key23": "5vwotbojmHUMPJYM8bzcutFgke8SDoWSJyZKjSEEp5Bd4BcfjNn5ShREwprr6VFowucYdz6tMb3DMkiuN1FQbsdJ",
  "key24": "4Q9HtQYrUozMKajeu1oj4tNWn2acqUqQ3HeDCzJrz4VYboHBg2HsSD8XXBJ4JHFdQ5RywjpetTMED5fcfyVevE5T",
  "key25": "4YZmhTRTF5jnnNvhCjKZMgpVtM23ZF42wuokseM2mq547sAZADUGvce78jaFYAn7VpR3y6KeaydShZBNPjzLXA5D",
  "key26": "4PCiuAT4zALsyw1x1X2FjqFGg5c71P8UtNbHHy9KY2UP2aNbvVJJCYpGH1gUeHqDk7dco1UcPjsD9xjr1rG5hTAw",
  "key27": "521QuzSES9kJuDjLQbtyvViRFFUsnohddsbM3ZCZsWbdMBXXsKKexaBKwCxjZoq7ZE9bcShsvrbuZnHfR5Kht3VK",
  "key28": "zHXVYbC2N1soMyVhiGdoQXnEUaEsjhjdL9siKweEyJniZumCVLNwUPa8HRtaEd8hwkGahVcBBsFiWadLTaUNnRR",
  "key29": "5AB7aJLKyPPZXzJsazcXCarcdJdN5itQqefoPSmFScjkYcAadCfDEpoUNSwTQJReaLXfLxnkxnjNkftELvPZvJiZ"
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
