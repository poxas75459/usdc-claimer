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
    "3FvXsMLVaBfkUvCVk36CVCEMzVk4whCQarjAa3EXJXTHxT8Z671GpSj85dsQhgHiG22WzMBjcTk9R24U1g19n7Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jv5nM5SAiMFM9budKEhLVVnGF8aWoG7vWHw9JEubCM99jEP7ATHVQWwSg8MGt9N24NyJN33RBB7tQ3ZZGBxxJdJ",
  "key1": "5b2MdSVFqRkQf1DGyAq59kBiQkmE5bx65m1jy8AMoz5UcePGyWrwK7T3HWtf8r52cHantv6bDJWvpp7MJATrm9PH",
  "key2": "3KZ6374ViCVM14hoJtLEJ6uuj7vRZn6grb1EzMoatJuXkTSKEFCcw7fwsgHQqiMNGuCeZQ8ABHQZhAsQkdhzycCj",
  "key3": "3LbLAnJxvhNGrQRqyxvXtqWCWJN2oBY85ZrKsA1YRj3go56UhVMSeTNaijnauGc4UF54VwVMjSq6mJia6ochWRHU",
  "key4": "3rvt1X5gb5w1njPZr9b4mCtkWXznGvREkoHZ6mQnnTAiYFaqdirSLoJKzU4oMJkj4vPeLqtPvsF1KjibLSE25y4j",
  "key5": "3sG7JYKsY5dY1uVFzYHAzxY7r6pZ3hEsYfEWGPtaXBKokwrBuNxGTXZBfkuWPxfEm1d4QHecQoyxdwa6QAtxmRsL",
  "key6": "kQYMYioPVwjJNdp9Rxhy6XVcehKjxFAkausp7ej3wzGGtMHLwyPovrr2NSxhs39Ei6DgGd86MFKbZg8pQwDVdmu",
  "key7": "322jHjQ7Ss9saapcw7YZkFtsJay7RJjeKLXAaFgnzV9jWQUFzaznpMwTkGd9USnGxX9tzi5ujWtNPyWyfQdnHiay",
  "key8": "3CNwj3Lr44psku8UrwuUfjjcbutuQAGo2n1k2Mg9B1ZLt6VQwMvTZAfkiUypfa5L1QLJtrHsaLA1mddkZYYVwFAk",
  "key9": "5C5cghdzNQkaAwNq7cgx8B9WZiWAfJ3cmMzCTXm492kPC5VXmPeNsuGKGnLJ8FkMZWNnoEXKRGHvf8VympbdAkwK",
  "key10": "3gCua3TiiPxLq8nLWU74wtnGJ5n4uSMEUXJ2Y7vhBvR89XSTkktC4LQUvb6W6pGe1VyqEzJpL3SR1q2DQG38Pngs",
  "key11": "2PYWEt5SvMAeY1fpAqNZ5YYhJhq1GvSpomxZAdDMCaxc2iv5Fqh2pYBNc8kz38bY75PyGriJBzf4TWvkGKdhZYyG",
  "key12": "3iiZmENsWpjr6cb5y6NSNF6LPJQmo28seaaVZsjUViCaWtB7eyVZxyGBEYqRhD1JMtgmkRho7pymuVKei4pNPvwU",
  "key13": "4f98xLqpwkeKKo6S75C7CL7XtzdXt2RZsJYUiP3Pm4Dhq9QBJHztj2ttYRapDQ3PFjZhnpMWPwqRkjNXmLJwENpJ",
  "key14": "yn4qjn3Z9dkPHNy975VUuwGQbBa4gun15jh23fUqhRmgb87BmuvoS1bFxPsubSbRFGk3e3FCkzGSbp1gempxYze",
  "key15": "4JH3m53fsNyQbzcCK1xe5wKdRzwKqgSjotY6fL3iy93eqSPbr721uuFax6a2nGDuRgCUtkX827k7xS4TZotS3a1x",
  "key16": "5vAUPXQz1GZ5uGPvkvUhkm7eb4hKuBt6aVagvPSDuyY4Z328MdWyRsFAp9cNVDdmSQZaHQP9d6NoiniFcTLvxHa8",
  "key17": "5QW2sNfqK1veqZ8eF6RodjxVBgGBdevkvktr34euWUg7XNciVd9UqekUGin6BW7YAmFzQUq9a9JuBWFotXsYav15",
  "key18": "3QZNNQCaL7vAeVchyako1RyyC7kk9FVfmyBmBSLwpatGZyoMBxSzWou4FNkYpEFPJPMQSRpz2bpNPjf57HhLLwYs",
  "key19": "2DiZCv9xpgYMVK1DzsWB3y98bsL8X43CTxvWWsu9qyDgFg1sAQKQbgA8AQ5Yu9X6AZHM3dey6AtvgnzuByjtqmBg",
  "key20": "2meVffJ8rwXHeFfbtK2S2LUmnoTCw3HJLrzJuMb4vT96ShzDn7zL3j4pJEUWuKJKDkfn8HTfaHnbcT7Jmf1CXajP",
  "key21": "R8oYWZJLk5DmEHZvf7LR5eh67JyAz7hLAQxFxsjofSQx4W8yzbj2xEoPcpPmJvKLMFibVeiQT7ND6kJpuN3bXii",
  "key22": "5kDj6JceG19qJH6cEeea5SnctHHR7Hznvx1QinFM9u8RWHNvC9Gg3Z9BxENTh3KSdKxmayT4AuKCUeSYUFzmhboq",
  "key23": "3zFf3mU8BiRTqhVjGrGX94K9Pjz1P9v5ktMCANjwmCtXYF2v5MVVD3Dho3pNL3pwmqK8dHacdefUS7vHijbJk5yz",
  "key24": "4dGyJkK6LuvT3eSqGCq6CaUxtVmmaEJUAHGvtyEnBaJaviBMzrdL48sMJetGSzz4nQtu4SecPjmCCCR2RQSpDGvj",
  "key25": "BEd5F7S4mjPWKHDGnydfXKghPRXRGxLKuA6RzM3x2b1JQyzwkBdfatn6c8iQEGQWWTDjnJe65DmZnH5f16YQKEV",
  "key26": "4En5sXtt25jCpps7wAHZSfgirBha2Fygn5bsf9BDu6d4iNFBbi3HuJRUAEbdWepD59Zm1yZCSTFdiPTUkb1SY8eY",
  "key27": "3FA7Vv4WXggJBxRRhQadZLNyFAXxtVCPj2PYaWsc3u6WtJHezehD34U122Dq8rRQz9bWLzyrh91raczJmLGMnHXs",
  "key28": "28EfynAMdLFx3gxLomJebqJxDXAjq7zzNGmByoVc7TviivAy8id3AEmU1yNwL8UxmYmFUbHdEZmoUikLN1YS7yPf",
  "key29": "3Wu17mYWoGvvWvfP3taegZuzfxxWRsPuHPZjiJmr4faqN7inZCok3xFpYwEsBkowoFjRUTPV8vixaVq3qZF4YQed",
  "key30": "h3GafRFbtu6faCbxpfoZYVsMUj1wGk6MEGQsPVM39TkFADjXK7ddFwk3AgnZE2BwLu1grnAwAqtX5qvchL1c3jr",
  "key31": "4CJ92Y8Z1fsjSraSsu6DLRL1pe1EmQZmScEjNkhZDzWqq9eG9u8LawCz9oNhyuiJQ2BBc1CBzvZ2HJ1xjQ7kfR1S"
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
