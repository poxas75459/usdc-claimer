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
    "5cHAxY3hoFYub14HhZgaUJmWBMt3GK8gwgj8TC1DUoxF7j8qU1weHKJVW3FeBpCZYbkhB4zRBCaPaJUALEVnrNv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EWVEkFodF4on7AAf5XqkdBHuFEx4wZ5rC7mfkHghfnCtnwAMXa1RkmLxmncgvqWcQX2WHrpBJb7F4mp8RXXvmiV",
  "key1": "5ZCUWTunerzwberRuqZaBbVBPnLzZ5EKv1Mb8L9NT4coDqjj7JfEzXkfBe8kbD4qKZui94LCdVsqUrFutMhrmE3g",
  "key2": "5QmCSqKB4Mz9E7GYRnMz57MsagCiXTz1RTLMsDft8XjGwgUm5P5nbFbUMa8WjfQAVkiD7MqYzGYSNKwoJAhgk5iH",
  "key3": "35KRspt5QsnG2L6MjRewaeiiaP2NSyP6UTrQLDvdpK5pdtZminUeu4JJo56wmAFcnPtv6Q55VVzWKPPAvVGKfbax",
  "key4": "2ibnMHshEuRc7PSddEbSmi3YP4HpX5aT3SLfiebK8pgEhq9qMghsyXeJkVqzTsenrXaYYwFgeyQEneUXS1byHinS",
  "key5": "3YBEykZSoAYv1gmtM8S2jTky9zS1TuEtn5u3SjEmLac8pZGDRsVsCFd8LgnqQdViFxEmMgSmz9X4wqJaCRMqAW2Y",
  "key6": "5qQxTAC95EuCSdKpSuninyyPNMcQyQRdfbk7Zn3Poce2RR9rPxwPd7kdpnGtYq16WExJBKUKHPTqqhUsZX11WtAx",
  "key7": "4119iYM7u5G3z7tDmQc6CVVg7JiFrF14cEzfvsswrCVpJjxY27mten919o9zqNJqUSD7LgFx3ScsVH5g7nWp8A7W",
  "key8": "58secFrnmY9kyJ5gPjRcVHAdAXUtU7BrCq8FnWPEYW1gEGca7GeHBxP2GpchAHiz3yXWHrRHtB2mZvzcVovXp6YY",
  "key9": "5s3Nz319JQF2PvEQm5vXfi6uGM4ySMr4bBcutFKwdWsHWv2JMQdEo7NtgWDr8Zhz7ojmA5a7v25L5gjwxXa8o4tf",
  "key10": "Z2J56awvxxNGciXEDDKHZhotkdZgM2irH1hY9VDdnwcqUfNthd1TaiVbJj9GfYBYXzGZfMND81GPeSs9biw9G7d",
  "key11": "5LJNeBYiSsGbgPiVuPYGceCRwpSFLAkG7stcQ39mUNWSSYgRi26a11qrhUvqE44rzMFppmt5ExA7GqFzuZyvW11v",
  "key12": "5VKNqdcsLqxZjLEpKNzMqVXobA3JcG9XqT4kvBqew1GH295x96zsTXvBzKh3DypoYhbFedZGoSVqJA6RQy5htSYg",
  "key13": "4qdCqfn1hkrXFqq8RMHWLY39xV14j5iFF2bXtTTL8fQphay7MxUUWEu1ry9TYpQqhnRmyoWM5faaHUjPCTVXxqRo",
  "key14": "iXPUUHKJUsTwECjdMbTQfM5ARGnUY9uVFUhyGxHAxt7QAQbkQa2mQFAkVLXyWxDQgGXdgVCtzpkQK4hL7dyFRfr",
  "key15": "38RKxyxEMhe81JVoFeT4yeL6ncu3En1ow5RssGAktqXqXNKGePW75PA8DijvGoNkdYxuTAAyR84jefZ1DDJy258a",
  "key16": "3avm6FzZK8ajZe7WoU84tGk8t3oVcEa7Xf6EYSttsQe2LLDVQ1CrcdKxffCA1TjHE7j6yq4S1puAYHgBUKeqR8eP",
  "key17": "C9Vm65Wh17BA15V1nXwth8DgujdBP1BkhsPSm5JKCNVB5viM92jmFQSc8FjL7yLb16nyknVzwQwHDmdP69p7j7V",
  "key18": "52i3iHzJAbWWa3kCem5UYqrJsLL2dVVarJvT4kcvmDzQ6Y3KwbVvFXMAzhN9eQu3dZDQpuK4fryTzS1L2iduHb9G",
  "key19": "52AgKNMNEpYvWFdCiwzTk8M7MZNYRhXHQzXScs7a6XP1ayghnsp5XxgpEaYkW9unQoAWwdRPXAppe1jcfkCkTxaj",
  "key20": "5vuaVf3FBku4giH81mdwKS4Uu3BDhaDdSqn1bzRU9xdznfr7drhNC2swLa6VhN6tPDhp2ypt2kkMUecUhFVkjRfz",
  "key21": "4J96P4Sg5MfuVTdecjHH7TkBYzW5BLJG3aJyHB7B59XUm28FJMwNKtqhVrKVLzMeaJuYHDvJYHTvaroJ4bjaCBgZ",
  "key22": "4LKp7uNPz3TfFcFeVhGds21HPPgkXXtUie52X76Z9VWnB7443y5ZMT5FyvcgcTmqjZmVPQyVgJor56iRYR9sQVRN",
  "key23": "5vaZGzBRb1oVKP7bR8UzuTnwN3Bt9kpGVMrYYaTyC7BedQwe7nawRxXebQepxv6gXe1Q8TF7kHPvMtvCsDyRQWk6",
  "key24": "4yn9ZWELqMLtgrpQnXEYoYadxyE4mjB6y5gapp1zNdvZdQ8KBdEJpG6kbNvraWgw1LYwmfgx7TViUTJZyY2frZYJ",
  "key25": "Mu8uC4qnbrLzvb1srhBEsUkdkGJXC9ArQAT92U75Te9ny9J2py13zqkF5L4b4AYjt8TZxid6Qerqxnv2uPiPUbY",
  "key26": "3gMFMY8Ryom6GhHYvGSjoS7545x9a1JxmusDvE9KKeuK9iihWQ4FFJycwcgDyuxapWAEUk8Bvfg1psjJS8HZWhAw",
  "key27": "51RVsMWfec28zBwN25vyyx8y593f4Auhu69x7RsfK1VopjGbnSSs21XMJSqBHYPPcNSXwh746vsAXH7E93Kjx2r6",
  "key28": "4yskefd5nFYk9qipW8T9cVm7SmahUyCJKDtK51kSU1sfpHzfNU9YhFsDhBNExiEbjkwiyy9pYiHGpPQikQLjZtEm",
  "key29": "2Y42QXhGP7SiQ2sWV3sb8J7cLTR68UxpfSqjta5rnKKCmE25NsNUUmcAGmBwCbSDu7VWamyqmwPuD6eriaUUCMEt",
  "key30": "4g6g9oHDAeUE9RUxMdfVHd7sQnqBBXKTZ9LJzG9LGJcJMQtrpykw4mUNQbYHZYK9LgMJGosC3EmZmih9ofXmH5V3",
  "key31": "5gU6eSBmnvxRo333uaiRTbPUkyshAc1cadSomekD28idmByzC2Ayb2ASyJCNzqNUjxV6nUcatHaq8eJxvnW4U53w",
  "key32": "5TuRCDU2k43tmWaAEd24wHCTLR7YM2v4iWkS8VrWicPwkB1xrzNZJxbSqdpeXeQubTzMEt6pSxEvLozUe8pQ46Ta",
  "key33": "49TzDq2bu7So3bwSFRX5Hr4w9tkVAZ775xKxUYq7WhRbGY2SAqeCDrCZYByCZxnXGhFWGMFpsdWDWs83CEFHXHsD",
  "key34": "4zAKG8ySQuSFAqaFoSbDPKXpaE8wkCQMUh5BHjRaN3rYmbYKeU1av71Nw8vdi4aEtCGPrAY9d5zLkjS8zRWzakLf",
  "key35": "4WjDGqR8MqQxEokQCFFFr8w5apFgJgr5L5aKyJ8tauB9pToBQMDHGL7BoPzNnjnmpXiBHw4w9MpRDnajSNYPf21J",
  "key36": "5LHE47WQ1ctJ4XTy5LhDz91fNnKs6D2JKY3QUkMpBZz3k1hc937qEguDM9w5G5GP2xBysnEQdvCdTen6q4y6egqJ",
  "key37": "2JEXMKBAwrs93UV3DVNLG32HNAbQ3iFSzgMMPemvHD5nSFYSkczjxuF7qyg8ugx63xvHVavZoKrTJm3zctLroL6Y",
  "key38": "3c9RnAckb6HJdcUZ3QScZZp4CYED6UtWv18vmQdaFTKMwDx3VU8yFivtpuro1HaAtDPwHjRyieYCc55SRQ6oRoZG",
  "key39": "2nf3WabLdyABHeTEmkXzqmhuobe85nyL63pWxXkTNpZTVxy1Fz3cYS4RGX4EnPVUZruFNHMmqno3Cgata8ETiv2X",
  "key40": "6rJUBEftqUVHFzngWbXttC81fsRbBsNZWa5izn5WRXk83P75vqYrdKDyYjVPnR4Fom2twXdHcXXghKFGd5gdLbg",
  "key41": "5KmLtHBMproPcBs4MFfDs55uRsgBkCNaE4XdAMJacVh9scvn51FFAWnnepjT79QKHdi31W7x1jF111kiiHeQuQuR"
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
