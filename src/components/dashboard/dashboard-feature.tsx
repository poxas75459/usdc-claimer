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
    "2udZLmv5RgaK5jgrAKXoz4Bm4eHGSMGSfiLQyCYTKEkZFrL25C1YzT1tXFjKgCAoucd5JbCsQxVwup99mbuEwVjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52MLFUbAE4scRXQ75CAafv1KsdHpg7aFXrQCL2rzzUr2TBGwVRPSpsMaxsDEGGNYntg35rzojfMBdqrgSeDHbckF",
  "key1": "4vDvn1PKupVzychejbcskGz39xjNpopzLkXwdANAjB5YurJK9zPr2m7wD5MBLKexBC7LMCsCA6YtfSXMJEgFMH4m",
  "key2": "2qwgC5BVCdHXcjGRVcoeU1mnbAKw6FY17e6W9fVTWDQv9rHufJmhBnZMGeySYwMLQp2CMaVGUnmweGrbNpyr4r5e",
  "key3": "Vd8c81Lp4R4yqcbkPB2Nbs9HTYSULQdna8Qxxnr1D7iSBjjfCXJzfvt8Mi9QmYgn5xYHzAbBy6r2NbvevuFra7U",
  "key4": "4Xx4mQLK4CyJXdihggef65ewumv4VySf2cwkPd1YedV8XTeezd39psECY1LzdhjrjFqNDjnLd7fk2Ni3hqjeqwbX",
  "key5": "2PE3uv2wHT9rJydzcfdEJHRMhSWXPg3Wy2bcG69arYGjv2K8rcJcL1vofuS11C1wDhEXJan7Qw4QMayL3gjdJ9qy",
  "key6": "63SAWogn8tQjrVzX8mZNqMjxMBhF5gVXu9jGWDq9sZSAVVQzDFWjixPS9uHVwNZmAscedeFBbfKDKNhezNusX19a",
  "key7": "dhq9WkBmwQ5g2ejSCZ11jRDNxGpH5e75sHFud7m2TT3k4dpztr7dYdphZHMZXS7f8DyjY8cCJDp8fEeaVEC6RU8",
  "key8": "rWM15JqSLpoc97NNobk1gLzUMsjHJ2jnqmV2LjyVCp8Ev4nPvxexRnZXS58zsDJsBV4jE7uo5wot9k7v5VSBtiM",
  "key9": "28uPsWAxDVEYi8AogA3vF9Uc8vsw8G96dqifQU4yUQqUBeLwjDWQdDG6AzHpfB4JnqNG4dc8CEpGGop6Y5PbDoz5",
  "key10": "4X3oByMp92ihiKnnRLCT9AQbES5gyXVHf9muVVt3vyWgErj4MLewvCyiyHJyyYAuQpy4VAV6ez2hve66Rg2wnqVK",
  "key11": "4eQDUArAHtCWSfJQYYupKCketeMq1UTxpxpkEwr1mWj35FUFostE3pdteCXJUFsehLZyxB7jEqoMzYS54t8ovPDT",
  "key12": "J6MNwGqDE78MiKpQXGhd2U7rdaNJfzLKbVyVqMSZYNdom3WRgAFsvxiuPj8BDKvHEYNvsMnErR1oLXpcGkSAi5p",
  "key13": "5v8Rx93JmKVHte6V58eaWk3qyvozWrHGtTLFYRAjxWN6N913HULA8wuEfULBzSGKM2SpA6jZD9yhYmQPhkoeUQhK",
  "key14": "4W8tS94PqLm8GzizQMfFEbvtYkHhwLAGpPZgVQiPnH7ihXhhmPFghfehjrWC953qnKkAvZaon8EiQUmyfP7RaWoy",
  "key15": "pRSEkAoZiNiwvb12vVobJ7mRzsnhoExEkdVSXALUyxUrFLZFXVTbZ5TQ71RTDcA79wgTpizM2GXZwqYyLJHtT4z",
  "key16": "5D1VEr8soukyhsVUCWQwYoSQhpwrYNArEr8f9gHHNG5dSn81Co87cbH4xonjp9sYhSSKvb8HWMcivN8N4Qnurn3d",
  "key17": "52vSBkpkTuTG6Rj3ZQUPKWCfUxPFHhBzZNMrU51owALYXLDbdL4vL18KBGfNaBd9dXmmntVEa1YQXfdEXw5DbSYX",
  "key18": "2pZwZQMGCaRnzBat7DBGtPVUGHa2bHnBedwb8ddxC9cZDzuUDSXu7bgmEKw8ZwiQLXuuWFL1eXiCsN9Rvk7Xxr6z",
  "key19": "3eQ1FRrvYcKBRafDUUxTqvLjZZ5RxmJQMGtENhVrhoyd3Bp3jV8wEuBjzpR2fXVkWXtdu4S8MkpyYTEVwjjWv3SE",
  "key20": "4rYuX5AcXLgPpvgEy2AwaQmHYxgcEtyHxVHaLba9ogZHQjhuX4PGGDLWcE8B5x9g5ZHMs2NJJmYWRYDBBaL4tZxL",
  "key21": "2okyKKGBJ7BSfoitLkQcbKAhkJwCQq8gdB5fxfbzDg7R5C3f8SoztooKct2nfe45bpLwm2S56rYErR6FnCw3jZNm",
  "key22": "44GXHbH1pFCqSZzGZoKazUFMWkbUPk7wLJSZQsWCBHPDDroev2eHJiNcbSGv5GNGiwE7esGtNBx3tKWwZAsoDv7L",
  "key23": "5P5WKHCqcX32Gs7SP6D5GxG9SFu7VkJEWDzB5y5rZcc2GxzvoVXzvUrSFTmjNrZxKBFJCBL4nY1zGP9wa7uZSCYL",
  "key24": "Zr7BLbtqyTGYbwMNGd4UCEnkYem3LJUwhbNnERdzj1wb7QUJtVBpoYR2L6bjRZyEULLk1RTQ5jcucX81NF8v75w",
  "key25": "29nmPypMAHseD1m363hs1tr38Lyodi1yrbrwZB3Hyx6gJBzGbDaDTcuuAXnXksdT7fLsCtSGjWe8Uh7phhNg71ir",
  "key26": "3h5rFc99dUKVRNQtJfBvCkqurc82F4Xwh8o3fUqFm33PFEebwE7B6uhWLnVGwT5tB1GUKJrKzzFridQbVaBXqLDb",
  "key27": "CrdN6PrepVZC9AyYHLWuZ94Vhq1RUtA1AYgMnV7rdiHeEUSk1bADTkHwWdZogGFGcaTiDPEwqUeyegmwMhoqZfx",
  "key28": "2Knq7MHShwECaKUqC8iKVpUqPRoaaT5dKgYV62Y48GRRnSdZmTkpyXHMEaNgfqAFsArMc4bHu5TM9gsfS4zSJAsy"
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
