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
    "562oJAWLFEhMWmFB4zrt21cJM2iMQnVGmkmcJh5rLR9t8J6FLAR4Z9kk6f7yYsrEV8c6tY9DFsGss5rzxC4ScGXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bLXGmrhh3DYUy41iepKGGyEPC3YaztL9kQTnfawbgFHYcAiBz9nUas8v2UD5gxD2aJRMNYy2tQSPEnyUXNy1Ygo",
  "key1": "4hfqmA3ZBAhCpHSEaH8pJZrwA9K9MNKNygQ2jzkJeYVydBjS8Kn6FWaF7sDBqe4W9iVACaSEkSD4FNVom5fFubD8",
  "key2": "4PSgt5nQMu2UJoSuwDhWNHiPDa4hn2DFe2KsGkphidT5MWfi4UGiTpNSKwGqJGoCN9N4shHLiLGvwebNbUoFiY7Z",
  "key3": "3ieuS5veRLTbuviGj9MEN7hnwcpiPyfrWNv5Qg3GS8adkMr8x2p4r6UySdbrb2SLqwEhmn8ZoaWJ5yPoMsUMpykn",
  "key4": "4Mdmh4RDjURUvyua1f3CSz4czNSsuKnKz8FHzcrCnG91WpJSD9QtHTT8Lait8bfGW2Vi7VQoynVY9EWckgkvuXfJ",
  "key5": "q6GfV4dzedAWr77C2EkEmJpHHTgY9cJAeDZhUpC5rpuKLaJNfC2t7Fy72vcRTY9dMJfdVcZTzArL8spTMJr1UDm",
  "key6": "5mV11TSn4YMjk6PDbwFx9HtXDEzVyM5fNsF6b6kAk1dsftuAz665ESscKbf4Sk1bFWdtfhrke1hVv4DMmoxeU1NV",
  "key7": "3WcvYj1wxx5NNrWK2CeieRjmZC2VpywbtiX9EGMXvsr1k6JEr6JHL4ce3uchKcrLRewEHdfpEFLZFi2kSNv6AEnh",
  "key8": "478UXvXXJGJC3Ra9zwRpTXyRQNssfKtwwMLc6cUyHSTgR4GBrCSc9ce7jTVoL7CnaQ3AbFy4uKyz3rLzxCKWRfXx",
  "key9": "2FGLiUBMFNvn8e6Zk2gzhxeAiY1HpydvZ5PCMmJGL34Gx1oVhyozMnvqf8AyL7SWvPK4nfTnoQj5y8cRugvxnFgk",
  "key10": "VbEys2EEtYEKQCdLw9eLdhntgmSTSTSsM7BA2TBekYbJ9sjKH8Yif1EjLYnL5wsYSHUT4xqZSjEwaXrUgEF2PDE",
  "key11": "DVcX6u9CjpNR2EQXfabajb2TgHRNxcyKNv6zMTmhFL7kKoyTw2JBX5sh8WVdQVuAKRuxZQMu1Qiea2pFbnRNawg",
  "key12": "3wcrMX3gk4NLsxqxq8U5Q1EPdytDiaxQanDsruXBaMuoneKPcMKuPGiGU93jXvi6uQePEzDifme2KthtQsrRpMc9",
  "key13": "3KXzzZ4GXdzFRRcM5658dCX7LaxjAftL9ZBFD4bgPV9M5nQbmUC1hV6jSTaj4XxyhRR9gA8WGASGccrv6t5MbJnJ",
  "key14": "3qh4fed6ZiahPtWKDaQKUvQrbtZzgRFm1WpX3cg53L7L3L3rEpAEDGsXASpPyB7Rri6cFFfcKh4Q6WRJhyMzq4C2",
  "key15": "3tzFveFSvxD3hsnaFD2ZEmsmUCtdWGKfsD1MmDSyqFL22rfDd57y3LaR51Lw744QTCummxpDEDNL5dNFK4rbR9yN",
  "key16": "2sGYgPPFewquA6djPP2FEcGUo1Qvyh8Bnf5B4Kg6pQeeDijfqXv8SYa2TvALxyLqfogCFgr6xHPEZiFHmzress3X",
  "key17": "5EE9RBdEZpP1QhcqDQuWiKqfuUfHKnZaQRNY11B51JJeKdQXdPJeWLgvicf7kWWFfEAjKqiPz14hnqABx93bcwYL",
  "key18": "5Z34XbqGHU47koLnh37Z3DmN6qnkYZ8rYwdXXWPzQSVoFcLERsQuiBoxwyxC4K7hVmJ7ZqFErjj7npXxW3YhSRm5",
  "key19": "3KnksEhn9uX5jR8MM4tYK3hEMDbKWokPxsUiMwZQvjEwyMMAsHJJbfrigQ1RVS2MRJsRgY5SU2kQamPmUKCF5PJt",
  "key20": "TtjLe2JSVJXxrwX8KACR3wbKgzZsd3KesBpMGWXFh5z9Ww7gScpCiB6ui2ugFszcLJj8zRG4vAmcSptUVK7ebEB",
  "key21": "YRQ7zwrET5GepzemH664tNduCSLNNysXTAkq72eYFbigFzsAUDx2hqbkJTGGAxxC7B4hk3xFYryiCHEFbwiaffN",
  "key22": "2ZckCA2JoWNTQmHyscrC5BVxFATAzmZjHQAngPpHdSj5ebMnhSh15vAuN3srQaJjPrQrgj2E3VWohSYJJG644PRo",
  "key23": "2X8HwxgCM7ug6meGDtgjCfgrpkxEXrmURk2LawgWByfhn8voJkNPYS3Uy9Pu2uPrUYPaBHughgzyN2wJ4nBurnNB",
  "key24": "4wtch2w9p8nHNfb7zrz3R5gNX7uwYq7sa56DUzTvHsaM2Ag8aKDEmaBf4JvLWL2fp7E4qXa59KfCJYq3xPbNL4V9",
  "key25": "2FvcTFenem8Hh2E5jav1coqfXs5uii5rDqJVaAAkMWpWYkXk6beWdLNmodcHxAtjjbwV3PEgBmM4L114d64mbdP7"
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
