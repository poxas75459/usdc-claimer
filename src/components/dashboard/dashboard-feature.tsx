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
    "2237WUc71XoFAyQtZkMW4to1hRVS97ysVSQ7cZfdNCUdbxSELiuyydFv5UjjTNPZdS8Nzvvx6tcT34TQwgAhvk3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DdnYSnBdXBcciLb27rLd18XXoy7u9kEw9ojqsj25gYZctnBkA9RkbGaGcWLj9WBTRZATw7RMkEd5wXVwXGwnKwh",
  "key1": "34Tgxfu1QL2DqkJPeSck3uq8MQvBqwZrdNvEiV2ZKeavx89fFprBaRNmo1TW5j3Z7LqRB2fiadZ7yWDCz7F263RW",
  "key2": "2fk4i7xZQHK7Pq2P6CP5yDiEZfsJUkcEmWM56Gka6jbprTN7J5R8UtKuwRWEPdasWpDbyMn4Neu1VXgzChK333Zo",
  "key3": "41a3QuYE7vAWY2osbGG74X9RuGG1jWnv7yPZ9MAcBFv6cFRmNZkAuzk2MTRuPYstsXCC52n3zeTmBodZJYYnS2tc",
  "key4": "uAEpQRXyviK6kTJcA6FsMUxqguxtQhcSx6PVEyr58Dmuf6KX7HbvKw4irStibdZjEtYC383qwmiGTb2bTbvPR5k",
  "key5": "5d2YGzkquBhzZ9jdYcH6GHnewMKcguzPdQjanBADbcB9xS4wGpC5T5kx8XBEbrCoNN73S6qoCvU9Q853nnuoBzFa",
  "key6": "53RbyjNUc56yjriAjT3Up2b2pvdXkepMjAZ2D32EKpF5ZdPQhRsGPTTMaoPtRQfFMwJiNzVxQkmmrvmauG7D125Y",
  "key7": "5R2ckRrNV7jPVi7gBeRxEVeQsxsoMWYcovVLPSstcP382b72cKWwgFKvYpk7f8GJVCTg3PWksiWWrF2u4aBHJaYv",
  "key8": "5HV6pQPnfsC2w9grco9LVMmKKUWpqZuLFPeM7F9ChxEjvWLF6rB7LrGaLLe1r5CG9MsG2gQbxsRKEy3k1dbAh5C1",
  "key9": "3AXDTvLL2cGF3cyfaseV41HU96HMnWyAPBo3AoigXR893ikdDX98dMF3sK9rGNd1t5ZqBAeX3AtT5qbYvbvhVYgc",
  "key10": "d1m5JfSEteDnp9dsY6zQ1yaxT6rmJBGhEn9f7beAETFUa52G5QJWWxkqWAJxsSzq5ZW3F1vypsSXHC6izh864UR",
  "key11": "41gT7jbpFgDHypq8F3wLZU3gtpFAyxqTr2qqrvB7nv8ihKytHSU3v3TDPN7qDAmhGKFmu5WxjhGEyvM7yEkMMXjR",
  "key12": "5XRZNHVMyYa4cqN4mze2xZUN1c9ek7Rwuihj6DLy7VK31mR9iQy1A8KMY4HUNy4eT6affBrMTqHAvZ9b367c3rKN",
  "key13": "2W44DZ8SFDAFff53rKZn7hGithkPF4PYnTvkDdd44ppufB7M5FQryNBhQmPrQ4eS4vtBuUYv4f2bu8G5ujDfHyRi",
  "key14": "2ySQeGxFhw1KpoGZjaDMhCrbbJmJNG7VZRAbn7rXesbDgDxFD96TUXexR1sjnq3DW4V9toDWhvivtrx7nBNbnHK5",
  "key15": "6foDojNbqYJN1KJJgPKxZq29hbpfqjwHUPMDtUr5VbAwvWZFmT5McPSnmKeupzuZc1qLgZQBdmhGBdPZ8ssrJff",
  "key16": "4garktiqgPCEPW9VDmYgpUMeorgYhJgoqN4e2WPa4jtK8UAHuPfA6vnwePbMynzdZvbefyuJYBJyFPDJppVmew92",
  "key17": "4r5KBpxsiRARpj9daVhyhLZpbw6fDkcCAPFZuKy11d1oRgSsjNfCr5MGGMxEnxGw4YzwUuQPxjahsXYmduYenJRG",
  "key18": "34FfarRVQ4BTMTPQr5UcsWiA3sB9uugDryjKrdSz9gjK9MW1zpJ5LhYxoXcHySpvoDnmAQaS1XyQjxa8cdKDA9j4",
  "key19": "56QP4veTaqhYFfgMmt2WPRzotKo9htwxXp7q7Gr3bi3WQ1kE9zW96pjKRJjfGhT9zEQhaqdgWhUifuK7gKTDN1ht",
  "key20": "3cnZ5AYiPzYzVijE254Pi5pGUNz8v2kpStgV1nCF8aSssCiBGrizQzx9TSeBN8xGe8dVvDyMwZ29Bcd1q6WJTZ4n",
  "key21": "2cyxMpztcbAeEpthJhVuJ4DCpbjNg13YcQ6hg9mF2WZLaHzkTSDXuqGzRX4D3axss4UE8RVzVNEYHFCUkfGNtbJ",
  "key22": "NR48WkmW5WGiyHBbzXV8oaU9zhX2MHPEJjJz5fLYeEGR4E27TXzBTPay5C4f79tb6vk1bU6UcDEzBeCtPgxwvgw",
  "key23": "65dEfrwgRrqgeUe2FqSig89rf7qPkb7ebZh2oJYwnd7CarNqCefKdRmvxbXSV6gVv6X3z4oX1LQqRvZ9Ao6BPHVB",
  "key24": "4m3NgEJTs4rRdzq2vFQFEgpX18LGWBe2bEnGZ5LvYiuL85mae8wFKZyt7HVhj8o1SWFsAxRmc5ZUAFEJRAeynR7x"
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
