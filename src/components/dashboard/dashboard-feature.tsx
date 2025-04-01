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
    "5cUYBRUnQrvooeSZBFwLjpPsxM9tDFofnJEgfWR2nGJ2JtvHT7LZbkXNp7YJRHd3srZbH4RSvVmG1n7ZUobZMDWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KhuViaKeiVvxaa3S4TNzhs9Nzncn2Gr1pn8uyYDQ6swo6n2RT7wpFTWiz3bfqoJsvbiiuucdAxc1mxbVvaAad4A",
  "key1": "jiyw29F8BGbBSeQVManaFV69tDFPNEEE8hKEdx3CoGVR9Y6nmKSz8JqusdzWTTgCesKagQKLtJj17tLxfLPwEk2",
  "key2": "4VGMQ5C7nbUwqbuvmNVb37ki5y7UvxtbNdqpj6zQvH9Hcias9BfF7UvRZ3aMLhtBnXsHsQ2heGQ7rSAFDw8e6iqC",
  "key3": "iodPUxSAFQA9VkHxm9fDJuuwhC8PYHYhp3Jvd1sAMd2ednhxDPpvqsu3dGui2BMacYqbFXjfg359D2NDcVgiDEe",
  "key4": "4ZqxDH2FbXfu89DQ9tTbVNR7CRxoNZ8EJGxkpiE3a9ngghJubytMn2hjMRWjz422h1CNJcjLLVoHm3iX2zEU88CZ",
  "key5": "62pVYMa3yPdHjAujLvMMkjjfTnKWbEnvXYb1HFh3qpPPnxcAT2roGZ9mvZL5FncbVKHLjK4AKURa9d7iWqt2HFGm",
  "key6": "644rcvNceFNq7zpFUZXRwXkefL9Pm7wF9b8J6AtJpVGsu6kJX1FQrYpDPPijYv1B8zDpsdmCSctMXny8nw1mPB33",
  "key7": "wndETsycTR8Mci2yMHsMMqM2cwK3J39K1ttdQRPw7rec2hzJ6wRj5HARjFxiD5eVWe4wLfKBF5986YoZsPq2pod",
  "key8": "DXog5yedZZKuiAeu3FCTSSa7ces93dQMMM5NBfo9CmL27W6qoqMGLx7KQBuiv59QigZAPTrwXVXacoC4WMPFbSK",
  "key9": "5tNvgwMjF7Kqpqx7gitHkBPaMFhX7qTepqFWMdoFsenyFwR4vHD4EKEV9eQg8PfxJjHbiuF1Appi6D3ijVCyTjLR",
  "key10": "33zSi95uXAnrdo5eqNMKhCnhuXyaHHkGoJeXruqaGna1WUhQJpwkHjKwu5xTUzFytuZKEz8dUe8KqGmjrN5hhpft",
  "key11": "3fEqL536X3QRiTGebYhyuk43ChW47z7wbmJArL2osAGPf7gF9q4jAJqjCT5qnZLgHnaqVS5qznmRSLhuD9fD8YtX",
  "key12": "4ZoHopJMu5999DkieF4ngE7CfVknD7gx4syj5d1vvac5PSemZkjBNoW2BmpgKQDfyHrFoGAj3yxRgLE3h33K9iNS",
  "key13": "5x6ocYCDRcRSTsa6jguBsGwRsbaUp2X469PyTbwXsgx3Ufh23s1fvmTJ8cbxcfEy6MZDQ79a1fHNY3A47dZzexRr",
  "key14": "418ZbmhGbuj1TqnhqsqFbxKxdSq8m6SAMXws1RZepoD8AAXK6FUkrU5RrGRnxikdy8qVUhDCV1DgU8nvBpDZUicf",
  "key15": "4EfJyzcxLV42aBTTNAKesmxXbeQ4bRqjGvNT2PXBpuJKik2HtBQUacrcQFSft2UsJJwMqtst3XiHU2L5gdiPCGbX",
  "key16": "5sLsJSLwP9ZBiycqQsYSXkQQGyaQgUvKPxjLgPPysWnkZrnrC1BbW5Qp3tyrYfgeK9M2Qg57hwqTVPXGWMnDEyQ5",
  "key17": "4Pk6iMiGmTs5DEMcW7Dvx4uSzan4exActDwwip93oTwUz9wmzjkbAb1v7EGCed6oodu5tpDVnvdQXgJJVnnQpnsF",
  "key18": "2cM9skgohNVDYtvvHMkXUQvhAb1juqzL6DYvRvSDVaKJuKKFvo5dknwSk8uZbUYjuLNZefRDuDqoxB8H5u51XdHD",
  "key19": "22LnPDQ29qeS86FhgMymGVeRAQsKSoDUe7EE6jCrcP56LVdkyH613mpxDZjuEG6Exzk1KwDMJGhEFd84xAvDcSwN",
  "key20": "2Q51FNShrzdqwBywbXrWMD3jAgGZivcgoNetCT8p5aYVv36DBQeaXp77XjvftJ5dNQAapuyjfrNNQQw44W6B52bk",
  "key21": "35GiEXowQTg8kJ8Ma1zgBdYMrXUG9UvUQo9QkwAAARyLmyaRK5As4xodMzUKmLp6zcXZrJjCWcR5ihDgqZJjGZEG",
  "key22": "3U9n5H4XheBZAQHUCnK5E91nXyRw2ThzHq2bB6m8B4gRFS7fSLgnr5qGG3XAvXVD2SgTSpjL9s27RNHL2KfZJY88",
  "key23": "4EFX3ouVw8LoBbqpd2LHmkWi6VedbohpWd9QwRKGcduoTJndDwgtKd56TmCPTLuh4kdQxRQuX7KUByKGtVNCgAf6",
  "key24": "36s2FSkikeYxCzgmMTFw2Wom8LsEer8bW3Z9KxqB8VuMDZNBM9z7qBEfpy7d8mASpKGg66zJaX2HYThDrnSAwzbn",
  "key25": "2PKuareeJccysSBpSLY9yLawkq3eWjawVSVYFEGa6QYchYw75hTSsrpe14jrDgTaHB9Z7zTPinobts3vnkDPieGM"
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
