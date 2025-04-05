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
    "7eLSUM8yYnbkXYGui7NxbvYWQD445JMZUh3ZDTNzBksHi8YtsSJ9BdnN7GwTKvFsyxQVAR4csNV74WwAMssPu4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47AVFsE1jofKZgPn8pu1124rYaw8rUG6AQp4HL7dainHhDAunL4uEcdACr9ACUvTvNQBfi3o4eTLbp2LEjCbMVnE",
  "key1": "GmC2xfVSzvE7nnGURSyXUx5B9fkDBY7WPMgr69d8M29fu2VFgDikSjMszQnUNSSLeNCSxBTSHQSazWh4QyAigLt",
  "key2": "5oPCVkCfbBNA5oSWehzMoF6f3Z4fmE8iPnfEoqYB7hXHdHNx9UtowFxaAxyiatGnpr47VAtbXERVrMHD7pFkWP6e",
  "key3": "2w4RHg73SDxe2GubhtoAF2Kb3eYTLZZFC1wdYueveiy7BU9QEaVgKQstt3PKG5trpsD7wBMnuVF1maQrk8nVCzTw",
  "key4": "eAQ8WgHeyjWgR9nrbVxSxzLzLzQ7nxSopg9bnrVnMmxcK4dQyHEDP62pwQYYcFKUF5ZQFr5ZiYY14L4TnZGfAxs",
  "key5": "3ZPFSSrBqUPkdHpLdHHS4ymzXRp5hKo4Pd9RJzZ1goij1YpkCSm8fnWHFPRchYx249uM9qysAigRZzA6qzPnGb2h",
  "key6": "5ebr6RKJXTwLxtzPPVLjfZoGFL98EmPzrWwPtiGwZzZrKaS6tkVqJNkm8tiZJh4oEGhCQkUYyde69QV4WJfKSE6J",
  "key7": "21ucSk2Fu5JhjXDnZVM18Epnh1wgv6MF7jhtzAuMTPf3wadvzHNvM9797CJQnrtRjf8wKJeqEsrjdPNeWzsodHrU",
  "key8": "3AWSFVe5RVMb6FzvQxGfW4JdS7NK9nCTaPfK9VgdTPAPd4RWpnMhB6DvcwwZikBkQUy56svnSi29okmmYVNZrKpU",
  "key9": "32umFAx77iY9DuNWBTesxpBEnGZo68Zm9NWCQx6o2vegTPjaJYMBvHcq2VqxgKPNR6D8ExR1wH5cYxpAd7UsVzEW",
  "key10": "3gaGyMk3yYE8VYaSEYPz7eCUDFQAQJg6qKCTZ3whNyDN7qUKjXez4AnrtK6ZvP2f8AP8uz3SVdzkxSQUSjne76jR",
  "key11": "4HpxUPxV3LmFUKai9mx5S681ifnj7NrPZKAKidEe5LfpWeGn6DpDbHQLtXctDd8AF2tR7LdsLCy5dv5nTQ8bXKz7",
  "key12": "3rkNu798jmyifartLi8s3TrDiiqypemDVjKpGvvQSmZgmsbLjTSNBC1rc4ANoTSUkCTF535PavQMDEzLCEnehxfP",
  "key13": "3QNxjDvVkHb6cSTREXHiHhcZbrQRSHupDWgdfNhurpWY9A7v9gqViVhSRo4BX7jjN1XEhSiW824m62jRVuSBZ9t7",
  "key14": "58UC7msGL64deKqE5RdtbhsfZw1gJiqmzBdfVWg9qjNowzwUVxdi4hc9qMQ2vguEgWyESQ1rCJDZhMTVpBi1a2tE",
  "key15": "FxY8yEHdYvksgVz9rsUQQpkiaey3hsk5LxCGyG6C8tpHAni6UpLFQ9mrzE8VQw5f3RiKFFZsphqUJQ5HCwfWZyt",
  "key16": "56TCW64Cpb52rRpj4iBCC81ioXwzpxgNnnFq8wbQ43hktsjm3B7EdFQ7fRBMDwmTPwnipvXU4ViVmUXGbPTHhHTJ",
  "key17": "3ekdzYaTtehRJxmf9jB4wuppuwLzb8PXjDHUXJifJNcRJ1yAkqrJmg5kp834viyXUzspDUejoVYJspapSPrMFBZv",
  "key18": "f9kdaTyJQuwrsBrx2LXCYvVezxpFPjRs2iJ7Z1uVKAJRGMQVsDqWStRGgBqdPyzVHe9rHTfQBK8s83aE6tZP5hx",
  "key19": "5VWcSMAu7y4NnDNAAppRuPrDx1TZDeXBuCVjxP3MbSuhP31djLfBXisQgW7fLBx17f8c5qbFm519BsEt8Wk4UKEB",
  "key20": "4cAH7a7uNHNvH5S9SJfh6dAN6HHyvcVU2pmwNkw5t2er45iZhkAKh7wRfaZ6r3wTGh7mr5WYxeLRbcxecspceG7E",
  "key21": "nscZPCMAKaKqpbq9FAG1ZgozrU2GCbR37eKUp9epvSio6K1DEmabAB8fRWLfjDFAvc5WVMtMZj2Aq25xf1J7w7s",
  "key22": "42bXep7sA1YwEf4UPwquiyQtYL9frWkXy6i5NsApQoMjoAVmtFuEvBEGWXi7twZc6t14T4T7iAm5Gh8cv3kuEGeK",
  "key23": "41NgS7dXG1KQf3pAFGgBcg45BJ2ScBFZ9XHkXszZsg5mLyASXHrp3dq6xuzb7qnzL1TAApPYzj15pEmiKFArXAS4",
  "key24": "3y6txrE8G7Qt18gS9ev7QFf5Q1Ap3uVzoT67gxtYe7WG5pkUjCos3J9MZvwpMxFCFEQTyQkQieG3V95oLj1fBonX",
  "key25": "3VSygsrENjnL8tCPfDYjYVHhFHgUQz13FET1UjjjkZYUbnNZtjUzBDmZsYsCYc6Jm6N6QQR6GoTpjfRWFFWLyc7S",
  "key26": "3yjU118LfB6kXYQWKiWgwgZerLum1taieb1nCGFj9wgu64vDrqPUNVBrgi7FCNBUnUJjiEi5pZb1z7NmhdbVPtKT",
  "key27": "38f5b38hkcSxaktadHZxvqLJ2Hy4CuJqepZ1LvH1JCbU12WkJS5x4jbDNPkRMGRqoRA3fuJTLkDGHNaymDQgcNTa",
  "key28": "4WUR7afd3zC2hn1hubP8kQKr74NrnPBeNXhoYGQUERD7uVFTYBeW3stT345tcP3WDBwRsdeTQtz3Xb4eAvpZh3Kv",
  "key29": "2Vy1hk48ni6coQS7ym5Nv5igEcAQZWviAAf6bYqDUQJwg9yJAQqjomdUD988cDpn6eDW6uNsAxQFpd4i3MesfvY2",
  "key30": "5TTs8PbYcGDet4wvSSebtXVzrmR1nhoYre2yf9jE1DQEEtNMEj84ypuRowvshJ7syv1GbhdcmUG76pKWwzdf9VJr",
  "key31": "4NyoSFWF6orsRDCXhPGpX6oruMK34PDURSstFL3k77amP7dosyegFhYVfS7D8ssNtp9Pubp2zWQ47KjDHeNRKn9M",
  "key32": "4frFamoAszvZz9UbysTZbghcTfwtZtZXHBNQhiSxAxWb5pvvL3jvtbRzDpSz6ZbY3DuzgezPvNFaA76hW7JLM5sb",
  "key33": "2qJXijfueZTeUCXyzrqxYGTLwGXQ5J2avMRBvojJtxkkzcZX7p12JU12oVQgarQpd8xuiLQM4PiNGRqwUAGHYx8u",
  "key34": "4ASnHW6C3tXgx4NfTL1BjyhJpyR7NbnAhMhExpTQbE6dWQ5sjN7NzQuFdT24p48ExH7RHeCiFZ4MWmhu3Gikzj3s",
  "key35": "3yuFKfp3Sgif4fQgieJJrfwcqUvZiZY1fJq6q35Z9JU7KTCh6rWjgFFMeC5Qr3foVX5LWTwzRB56WnT867joxUm4",
  "key36": "24rq7L1Zo1ezwrG8eEsbcHL5kkzj5HAnNDTuDg7uVQhgXjRevBDDSDWtwfsMiPcEWNyubfqiqkMzC22GxBUi6iMw",
  "key37": "5k5SWJQENQ5sfUM1MxE3XwHQD6N6wq6fQdSzc3foKFuMqHK7iHrRWiKvitjTAiJwERBni6n32JdyYARmBzEbbWJv",
  "key38": "2ru26XiU3XnmpwE9MX2mnpWByXv7Dpvs7RBAPiVa6EnTVu9UPqt6KvGHKHP2meRmyhCofZNrKvoSxnZvWNHDYz7U",
  "key39": "3t7A9K5v6VtitHbEfvM2d2gKnQmjXYfXpHXbivEa5CoXA51KjCDQ9hqW23UKJPnLAzZ4HYpPr3TNbMjuGxbEFsSs",
  "key40": "5BcwFSGa4yT6MpWp61TAodr7kdg7jWe3de6PA93JgmBZ8hrGWdN7r8Mb4QWo1F4YkC4vDSJ8yLQgmwkVGRrJQZ2r",
  "key41": "2qDPX6YvKGnAEvmDtXfmadCeCtCmyAUPyf6cyvrzc5vbr51gudVJJWbrhKgFrrZ9n6c1enqn8Fj393xdEbAUb5nU"
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
