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
    "4c7CQjv2XFMwPQEeJkQCU2Njne6G2JauGNyvYdsVfDkk2UR3nJeQ6Q9Du9zD7RC5FYPXfXQGeiVNMxcMfGMBwA96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rheBaHAyxGQw5pdV26AJtXHZaBxgaLErVftg7AjA7qSJNfCezDyaH4yTEjeKu69ynjk2E54mzS8T7y98YvdVGMs",
  "key1": "4GnkBEK8FVXhxS95shGVXPrnjn3Y19925AKhW6EY8WbjCpxRtu5RiP3H91KDLcUuoy8D3hqztfgfTpe3VTRyDd7A",
  "key2": "52SG72E9STfS1b8Pb4TbaDicdDFxogff4wjcPZqpdDEs1wvp1pJrpLPjx7qjFMjNM2cCHdnnP43eBZMdZRBqBxLp",
  "key3": "25qYBJgXyMxsFz8do7Vdj9NcYnAt1XyLVW7FrzLNEGffjUrWea1Lvj2fD6ueQyf6PJLp6dETCPv51kFmhJo3Zfnr",
  "key4": "3euw93nn7PwyMoazYz4ZBzqXKpBxR7ZmBuucx5sv6hKcTbggbKq2GmfAaJc6mbcc8FPRxTXq6BnKnDm6uJjf9219",
  "key5": "2UVFfFr2UajCDzAzA6qZTsagTRxfkXRFv2Z8HMjtw7cNSPciCWfWgqMyMnxKk9PKn132NW21i4otJRbihF1K895Y",
  "key6": "z566dXSAc5ibz6xhNtdzYLfMqBa3nRj9frLJaozSUiK2og6gwSaC6AJMHtokuhdwVDgfsxgjLqjELheChmTa23f",
  "key7": "3VEdgLyrssrmdhzq8J6RDzRCw3F65w5wWsdPvwcy9QnbWfYbKz4s747ogGBZzguDYgcNq7K1T6gfA2o3fd5ioGTM",
  "key8": "3g6T8oMJq5CAxFNRefrafVB2i4ByD87fqhpxFGqwXUDM3AVZh9Kh97KrevLHZ2gfiVJ3m8exofxaGWUhR19cYZAo",
  "key9": "2M2WaSX5NjpHiAuPcj4u2eS6bnZwMf9CE5i4B3tP8krpZk28tqvAXqfdXYjguNAinVUkDc9sFwcBuxpiMDwgVQ3U",
  "key10": "298wahpSEAVvCkYeW7MzV39uNu7NrWvYxyoZub58vky62ycgg9L4Un1qih1YYeTh4wA9KxaMJ7JUmms5jusJyTb7",
  "key11": "AVgjiMuu6H2mtDZtDej3Y4VJgLwrmMgJCjpPc1WBs4WEmGHSB7fECFxdajdFwhmHVSaC8YzniYD4DtTqyek879G",
  "key12": "2BHrtU3FMHm2Qj8XP7GsVMhF6WnoNgE5etbv1FgN2vmSkvzydR2ziUrvCyraXgZM2enc7UV6zJpBkVfghSUHtdRr",
  "key13": "TH6JxFSTFVwu6oAEA9EztkSX6ugcXLG1h3zmQHE8xuLaFrY4gowjHT629pq4SFMVVcg1cvMWGAbhZ3H1iP6dG7A",
  "key14": "2zTLQpATPAbzWE5tEyUjoYYjJUL7JgvJNeAxsmnUc95tJ3XkbNmkyzYwQqoyVPHiuNeYvCgALgNaM2CgwsGbgya7",
  "key15": "3MZkmWGgE1233ZpRCT2CLGpCCyCRHkhS4aC7bNCtj7cjeHfh99CVss3CR7HToDnQTCZB43kpimN28EADqoyVWLkE",
  "key16": "3ZDaDeUZnVZQuciJHXHvCrnpoGnzMFmzr4syxJoYyzZqYXijVa6rkRj3RbrU2qMEjko3GSvTv5B8LSVkQUCBkcwg",
  "key17": "3zvjnc2eVqb5iEgGGPQxkNsuUxPYLvznPEnSz7LY9Wm4UErA4n54TTzntQeZNJBqJSbrj7RCqsRrzELqv4XZy3eh",
  "key18": "3cAGcWgAoQmhJ2huaw6biB43hoErCsAv7n5C5UxBat9HNqMnBm6KnGuRsLFUEJAcFUSwLnccFWnv89A8pWFZ3fjL",
  "key19": "3HVsmsMtqJdgJcY1jFAwKZQkVwt6LYzf8GbgCNSZgmBWy9xWRHncedZfEKama8hF33gJ3PXa5Y47fxcPtc3uGWaB",
  "key20": "5gVZDhb4wstGAvQwFdxmtx4ogP3fvcc5tyzRAPrWb597mmWG6JGmwt5WQ8odjRvDAHKDXzLdFbBzQhLHSf4f5R7V",
  "key21": "5WAMBrpS1NwApZYF72E3UTiXapUzjXHKMZvNtcEZDd5eLL4cMkHu3gAUm27fiVqUbv6a6QFM6cf4icC4JLryw1Wh",
  "key22": "5kn1VGqkYrSjxSL1jmHERsyA82hF2EZZYBfqzvJ2oxiTRuoL54NdJ57KLnFzzZGLbW2DzKZknZJzBAhmeNnsdwXz",
  "key23": "5uwEDRMBP6bLJbFhEco4KZoWDkdR1QYvbegp1ADRWiTRjjJNghwdRtiaqB1ABnww7Jpk98qo9BV8WhGbwP3nHTFs",
  "key24": "4AbGUqmQLFceybAvJEEymNaJnVxu1MRDZYaPtZ8N3J6EPUYJeCPU9RfrDPFNAxn4HGnkaGsM8MoR1f6NkkayC1SB",
  "key25": "3BsrRaVi3ztvfXFGxeN2VKR8dHG1Jy2vNKtcnotW8wX6eR6mQZvKLYJkAqC16deY9gGUNC5hZHzBnqRkqoj1B2kX"
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
