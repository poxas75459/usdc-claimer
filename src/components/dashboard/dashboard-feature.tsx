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
    "5f1dDAbMvvhp8AgbPYCQhx6PDnJeuETRzu1qjXjTLabQqoiQa9EhRY31QL3YfrjUZ1ppPwckdCgithXqUPuc1MaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PGWWXiUFHLfZoGN6X3vyxMt2T71cTE4b7pcsND2uX6UBkg6hum3wTGmw4irbhx2DFLaqxBE7eyv8piwkH19pSzu",
  "key1": "DJ8xadQy1SMLk8TWXGX5ZirsYtsef7iWYWXXs8L4pwNuCbdXfRfQzaajbdBiUFY55SajcJrSXeiXXrqetiGuwsy",
  "key2": "5SFN5oAgBVwu98pu6zdvrKSairhAt9nxyjn3jpNUA6AYJMjzLygr1VTZ5dLzsLeACsRro3jcYDxc2AYtmGYnUmtp",
  "key3": "4SQuwpShd8fh7P6i1iEfXitr3RcZ6jQYbFgXY7wYYPDeQef3TbD5APtM2k1oMVQMjdocbdgPwJevY8eKfA3GZvTQ",
  "key4": "23bfLBxp8johmAJEXKX8AVXkRTtmrCfjZdnNfQ2wwgzte2y8A8zc6DxVnHCaNSN4ZwNULFyasKU3Vi1Vo4DEywB6",
  "key5": "59oti1TuxjxXaAKQ3JPTn4W61NdhjK3LdkxuozQ4tnGK1AVtqupngJ4NZrtTGTtK6bYh7mc1zMVFsvUyMMjjF3ku",
  "key6": "4CXUXa4F3xb2w6m6isqKXufbgkSq1San7J2irsCXWkAdimx3vujYCnNeEvz1gQ1ALRPMSfUySvxKKMMRExX4mbcs",
  "key7": "3e9dhAw6A54FZG2hHn9EwwPPNy4R1UUrWp9fPqsptXhxz1oYGAzhZtweQm61dxJD8Qucej5dPDs5bqFYPjP6v3cS",
  "key8": "9LnVN2idwu2RCEWue6W6aciDHEmhBk4zQZuAJoi7dYcfLRjNGqkB7KVusNNDKN9Z8sQs6nhydkRRWPoUFZcdkmG",
  "key9": "5gH7DU9RksjzNFAAUdGkQfKgFZvqBnxusmU6CLwDC1Yxd5PXEp3BSzVipyfAQvQMuCATa7ogsjKKwm9w7AbA7NrR",
  "key10": "3dd158He7TihvrUFffTw6qMKLoxf22yrcw2jrbonWJpDoSgKiYRj6ArtsenDzNGDXoJ48LXd8QWjyJy5XLoQvUEC",
  "key11": "2g2SzBqFh9QD3JwFRe82nKkVyh7qK3MEwtXjCcWhPBn7GqzEF7iyGAmvQLWvJ6ziEwUtngxt1jnLzY9ugiLCur2L",
  "key12": "4fuNwcxYFcPmtmpK8mGvpn1QEPzfzgHVBQetbdiE2KuvrSAg6Z4hCUKuZ4EGGLNEjc3XPUzSoEE91Ur69Xp9veYR",
  "key13": "5Px2cjjhJ4RmdQanHnXoDXBZkAS1nAx2WofZikc5pf8ARJXxwc4bq6gp3fmFWBfnkjvoJ3ntUZv5Yc6VgNCdQeYz",
  "key14": "5p1rgLgwsvSnHxzJVoK42RQokVMvMrYGFucRhSzF2dFe13SDCfzu4ghvZkSoZpAhWBArdcz8YQCrkx9cgRbd8QX7",
  "key15": "2x6RQtXAyCKzjY9M68Nb7v17EaDYmSBXeVztLAxJ4U67fa9tRCvs8KuP9BqSjaUZh9123os1SWT5DAqArEexyHq1",
  "key16": "54FayiMMWCjij5d4hwKjDuGMQSwRNrGQV4R5rpVZiAvkSLHAWGTMNDtdqw7wjUjmH5YwPH1PcwK2zyBMHpSTB912",
  "key17": "3xBHTLdCNqJuKcFtEqu1oTqeHGuQPCKbs5AmqiihgRy5NDcVKdZcgmii8hvs1uJsNzEwged3J7NmYxhKazMtovBp",
  "key18": "xsJvpsxAazSy2goEERLHay1esTrVzpGNXTv4oWUZ8QziKFWc5uTrsE9vtcbBHzA1qtmh1yU94gDi36pQyvyrTgH",
  "key19": "eq1e1zY8RhDUUE15Tmq6VASP1ieqKjxbew5QXjwBPVVzgH1Njti5VvYPg86xRfHSDijo3mcqWEPjsRSCDpxLT5R",
  "key20": "VzhcW5EsYKnXJA7LziEJ3Ct8k7AR8fk9hCiHuSuUyCBpxCGbK1HWzjRAMCj1y6w8yuadmwdgKYtYgrGBzPfcvJn",
  "key21": "4mko91AbnUUCXCm11awdfe3sT97FWsWRk1WZro3u9wugJB1tCL3ri8Yb3wb6p6i84FDa2LXS1JjWf6yLo4sB6CiK",
  "key22": "37opbDvQaU4S6oNpXpGq8whcJJ5MH71NmmMn3RBsFT7GTCLPaZQEEjBzj3tm6GLNfxyhzAyMgach3F7wFgrRejuu",
  "key23": "4zH8yRtgehTWL55nGqFSBzDJFsedbPn7em4AGTLZMJ2vCN1Shw68G4e6AXdZsJKFp8uH1oNrdTWnX95Wo4ft5g2x",
  "key24": "5oVBKS3gZTXyYv4JMNK8ckUgTT1yUEJBGfqvECTgN4TMcCqV49AYTSBVHD5s42xsCohTh2LGqagfZyfkHfWK4fNF",
  "key25": "3U3v2LfzP1xjTmwHFknnfbxw1HgaM1juJnjpmrEAkjiQsvgtmg4tSKDYyuUJGT1Fzt8seg6es7UpQTssv6yuDnoQ",
  "key26": "5qAUx4i6zG6M4o8XRcP3Rb1U1qKMJKn9dUWA7w1BoXjwT3cX2S53u7DY3fZLzjKx6aUYNoKXN7MtdHMfPxUed53w",
  "key27": "4NNA1svM8pjzGujXinK9von8pNHTiphBGjYnFd2KQV34Fb8vmDj1d6Ca1U3CaX2qL657W2fXGFHcDkHD7jBtyPjk",
  "key28": "2HhztTRe8jxiT7k4dsMo33HBWeA4yWmAZwWEB24WZEukuyYpsvjiPRMVwhzraAhWv4uNatxJvcauxPdspBsLnHi1",
  "key29": "37TUoBjnpGTt8fxj5pgQpN7RiyGFWSj71ARYqhbA56cbcrJBk5kZfwFJ1n8Q1AgFjqApiXpyeKhUtRDH1YjaphNz",
  "key30": "2Shcvhyok6GRcTRVUrhfBc2Y7k3QTs5KjeP7gteuTpNqFfqVQbim5GUtCgGQ5G3AqYoTaUMbtoTCrt2nmxRkBTNt",
  "key31": "5pWGumwz5HQsGGEmZZkH2cNrZhuj2v65yanXVWBb5hJQqxr6QFuVHdBVdrzwAFUc5ULGTJaYTBnsbTD8LZFaBsR4"
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
