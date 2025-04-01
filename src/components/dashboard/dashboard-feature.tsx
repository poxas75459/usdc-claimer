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
    "4rps2UWd7gUVNdeBokJZgH99Uiv2qEG87fBrLGaxdHWgSmAE55SgpNZCqtpNsBRmHj6shHHGFjJh4BKWcc4r2TLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BPp8PTLv8TNL3SyNkAg5cfWKmsAV84Fxw6sVcNsSR6YkfgWKDYSknjKFLJmtNHcWUqB9E1B8GYt3aKKp9vmcTJN",
  "key1": "3pgUC19b4uM6HuiwQKE5aVLE37LYzZpSRFAAV7nipC5pdbMxMdf29711kJ4Zft4YucVMeksyZskrUWThkVCMumBc",
  "key2": "qAo1PbBBBtCPcn4wHu9M2jckaFoiDR88ijVVCe5iXLzg2hcp9q4trHpq2unbvVMTztcN6C3iypsWPJenpu688QB",
  "key3": "49XVHP1AAZuEmH7NaWCmGy6o7Avej8eYqkPwBnwUhH16xSUSNNVQYUTtkuRdcGDTdJ6dw5XyBLPsaZQW3LmeHyRA",
  "key4": "5C4B9R9pPdDi5J5TScgWYiyYPCfdAj6X7j9DKmZ678YCKNPA9HSu1qvqhtH3JJmQJVMCkdvkNRS23Tp2XNDC2kTn",
  "key5": "6XmbGGgbp5qh66EymcJ91LAHhwj9jpV2ETsyXPn4BPnUr3Fnxo83K3XkpFf7uq6h8NTtTtkbK1pxDtkGgmmo8EB",
  "key6": "5wyWsnTrEXoauPPtvNaGaygR77B7u57pub5JrFCRYgpoRE4p4Jg3CVPNCxdnzHV8umU3wDjZz27nKkkBUcfwXpVS",
  "key7": "5bPE8LD9DetbPJ6bjc3r6ncPtAszJ5RJE2nLbz62EBWeDW6Ke3MEgzKgnUs29c6hVAEvNND7zbJ5MRMZGV82biAf",
  "key8": "5xvhkJ1xzL7ZYjuFY5HNE5SiNFVhR557xcEitfAQeJtw7f4eSoyzuNhn4wzZwmkkRL9WshijQaZbKD3pzdtBfRBc",
  "key9": "2kt2ZADu97TG6Wf6vaj2oJpvHLXnYvKW2moEDNHXRPjXaL4ZzHxCWFJ9rtLCyNDiebdMLE4mhUC85nNGBHQSWjee",
  "key10": "58w12dZywxMupFVk7GqdqGvhAoSg2RZqJ4kcwokk66Qf9JKKPxmnskQ6fnDT3GHGqBwC9iNb5DsRi7codNLe6Xd",
  "key11": "5fwiTqfa8HnmTgmCAi2ReeVxF5dh2UmWYWwdwzXUeABC7XL5sA7es4h3bXq9Ae36iA12N9LBPugfudcj8vNchKGB",
  "key12": "5NRPnSsrufy4tEZEr9CEsN6bTKvYcWGuaHD2xzf6BFqmHG8XaxK5b21wHJb6kepTBE9aXAK7V452za1oWcW5Nwzc",
  "key13": "5KP9Q6TSLztJ6T568DEn44ZSgnvqpdjovgq1Wk9zPfpM5hoTcY45mNDZJn6V5GtDsdxkRwUBbjuEhXYuedM1DsNE",
  "key14": "A4eLUhVz4eYju4bTKfBmuaAPtxTQAyFWAyGgjTws1R7R4fz5R2uKcVE7zFRYiihqfYnRjk4m5wMADkcEMW6c19g",
  "key15": "5bzfM2NHEJDPKyKe9tHhs81epqY2CwSYzXdMQcmcMdX47XG7K66tSzM6ukQWwL25aYryhBYrSoutiEU9uLfZsMEn",
  "key16": "5kSiBMgWge52vU2VpeTRPz1zFfjQu4EmHK6GVWSvMT1vJHzgT179VwqVpFjnD4iGN6bDRZiYMQNQcBgtcyUiBDfa",
  "key17": "3SjEbTE8NPRb2nnGbDhd29iDH8domuqFYrVHyJRPmjARDbRFhbxtLb8UpWTNCi1NoRVc8tTyht4dZq7UQoGaEset",
  "key18": "4eBeobkgdyjdJDtXZV6mQVRfYywYheS1n8uLL8ajaLEgXNcivichCqZ2myvuyo9wMXGNwn7CW3LHnSjTNXkYrV6y",
  "key19": "437dtuosKUwm9YoYwKqFoty7hjUjCkfNiRkeTjYjSeXfM4Piz2oJ7UmM6pebBo2jkeQ7MgSUFXR4pBRc2xBf9e4E",
  "key20": "4AcmZdn9mNenLkrLYHFLmmkLTiWy2KQr7VeYT5C11C7veVP5a8zzsJtiYxhGi816iGBnKM2hNkuJ3y648TYKczoT",
  "key21": "2QRcSYAR2UNz9gt7sxR4ytUzt1WEUk8CtojQ7vNJAPG8qzxxEc6itth26yTTacE3VYcKyubTPAcKK7xdLomQdtUc",
  "key22": "214s32zNcBy3zMtmkWX5NYVr3r2mByNJ7h6P4Ct4rr4of7YmZG1joGWSZMHZRSWFbDfEvS9x7wy1QvND6oHbruu6",
  "key23": "4vxyUXh2NfeVoWkV9FfAMJofwa5gdU3HHtEECTHzKoHQBBKNsqdvk9cXr1RMoQZowc1rmhjfwrJZaia5ixwtaEUJ",
  "key24": "2YKc2hnvQWLE4ht9ArKHXzpCrUb7tWEPHmutHNwcP3UmVmedYsAVQfY4KE9dYUWCqDuKNnasWUptD352ZgTDLPux",
  "key25": "2fBSrFjJtJfv2tcdYNFv53maepgaysApxxpPBLjec4ZyUhavvQv8MV8nucQAUW9bpswf5bjdSM8gpQ6oBLZLNQsh"
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
