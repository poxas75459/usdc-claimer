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
    "DffQZxnM9p8BfbZceneVRaTzQDog8r49WTB7cW7qmQ4bmv6YRNzxs7VpLia5MnocxiGa5gz8i1XwnGStBvgpTBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KdjUYrhwb5zvkuFeLen6h7aE3H5pEssWNxowRQrfaRxrczmKBm7SUyUvQCKfyVm7tFuvx78eNXWbJ6bixPGoucK",
  "key1": "uNjzcG964TyvE5B3g1KtfVLiPARp4JQZGpXyFVEkENxPWBtMW5Sx5LTqriQ5y1Vm1MEhJyzxC9Epgf6hpCz1bZp",
  "key2": "3xXhuaEzkLTiRCX9Pwv4K3ienSJigs1vueqBrWSaCDq8ji7tcyJQ6Q4r8rk2fFevtC1tLi8qLUyMhVDJRJGByTid",
  "key3": "x2WuxBVMNQdTWFzBfv9PF48NJJVypoRsuxECC5YJhWWEq8yJJSiUJZwfseCNMNa6kYcxwKEoM8jCqV5jHiKxXKu",
  "key4": "3qomF3UgWvvDiZTuA346VkfCCB4rpA4eS2kyZhQtnDWnWgVmk7vi4vMbqVtj5ypV34wMwxo2jYgyCrUuNmAoekLK",
  "key5": "5Wv1GwnWW48z3xDn6ppnN12cDnp3oxbrogm7VZCka1cxWrRb7Leis16dMvCabYUf2hgcNxZQCSKMNJHtoJfLpxNy",
  "key6": "2ktkshJJ2DdkWCtL6DYir5qCLhwiYbTNXNmNTS1smipPBpkcoHLxTxVGLHDGqQeJbjHtPnRbS1gCP1USTuR27QE",
  "key7": "3ZyEckpb6LehCihwAw46ei7s91CHmoV2jbkWMwjAHCFLgJWW3C2CWCYVMExrvPLHD6RbNadKda2mvew264NVZNbz",
  "key8": "NcZ9cRhJM5XwRfbGT8tUVBuVd6zDnMyfAhVapXTwr413j31LYsBbcdWd1NmRvoVr6HnqWpVEgP5R3eDamiLh9rp",
  "key9": "2fdFrouSuAhn2A6cWrJJiRHSQNnh4JGhSTJrqZm3axipmMUcpekbhf7PccPmJnXmQYKKW4NHxaAmakxJaLUfMNXr",
  "key10": "2WnZXgVqcFg6w1ypQLpa6puVZF5aTA7M5Xu77iSQxEwvYpAEVeYnN3rfKQjt5KRypQrGhkBNVWPDwGDKXtncuNQ7",
  "key11": "3wRC7WXfLf5rbCaggn69jFSptcmPxBk4nKP41EHexfN1AFugvDRWtEW6Hi8X5pkZPJLzem1sfbGDWGfuo6BtD6K8",
  "key12": "44S3c8tZTzSHiFD7wwJVivg2HesBRaqS2PUeXFJQVYrGTL5TsFWgDwiMYF16U1FJgbX7jFLmmWssf6vQczhn5e7Y",
  "key13": "2yUgoJFed9xCuWHnN3UjU7ujxHEqxnjxY1vbAP28zqzDPe9RxnjpiGPUmXfFEyFc5wQuLq5dfhsDZDPANFBouo5V",
  "key14": "5kQkj8cJ721UbtQ8YcwvoETVnpkf9mLPdU9EDRZcGUtG7kJj4dvGTDqu8nY9m6jNcSFmvygyW3s2enMnFGmpt9rQ",
  "key15": "uQV4oFWivLvpDuWdpLo1FHUxz9yP3tGQ4y1gLqQ9HwiCsmB4nC4BnVGW3TDiRJcjA48XJzww5HBhs1tJRYxAZR3",
  "key16": "2CzZgys7XaqtS1eY3daNEfr6X4HqPdYsihc5WNaC1ngtmoA3WZS2qFr3CdvChNyLYXzB5NWANi8JyPDxxbS7dNcS",
  "key17": "3xfWiFRmkVnLw3LqmNbGiPCGaE47iDXGvRjh8Doa1vmwgJt77Ki9xcMXtK7MZ7q9bWqYoVwr8VaZaBp66xFvkRF2",
  "key18": "2TGfVCwWw3hySj5ey537yPSskKxcrkbVgWa9XAcziEWWffcVvCfnouihDZGcJTm8Tgiu1UN6eCsxAgCFppE2ScCV",
  "key19": "5Vjmy6Dr4Wky8NcsXbbnvCY6ge5xYST85uFDQ8bV7rPsCJso6Y7uq4iD7yMitfc5BD9HPFHMUondk2W5mmvXZc9A",
  "key20": "3r6xjcsFvkVdg7czY69d5pMUw61FAHG3AQmAZTJTf9WXBf6ppjR5pZGuYBsuMkrgFHYepdmPoVmseAzNi1tpjnrE",
  "key21": "5BT6A1H2wB7xCBdqvvLsp2gRKHdjnwpJbUtUqveSYeQY62CBUb2ibE6C6wStwgt6WTvxUaBuSJHyjKc6X6U8DGRd",
  "key22": "4tYH1v9gB7mZ7jHbSwTfmjtrEH9QgDGmMcoqXjxDLVzmx92A7EPARBZhgczXk82yf2JheoDtXQxqjfyZdij9Eeiz",
  "key23": "2LDoSd7RzjrdfKSRkTjshRSwA57BPwmRjaKBM8s3Vxdv9QNTX2DUMAzrhGFuw6aM2Vy1ph3Pjw5yuYnGjN1czzST",
  "key24": "5Gb8X7cFy9J8r3ai4Xd57wmfHHZGvREXZ541M4NzMgFLsyqmBYMA9imTWXUSwahp5VS9RrwGS3vp7BeZdnPHnCN8",
  "key25": "2bXQcNhBdiGjXivwnkHkkQDGQqKsY1pSy1CgjV655V158qNTcyRarDX8N9VJqCUsyozURHRrq3gKNRHqGowpCNmA",
  "key26": "4YYBcSc8AmFEHuufv3oC9cL9yCqW35iVCnPwKvexiBs31WW5cFGEND2A7X83MzXhJZqt1oxBDXa1wJCzJP3QCLo5",
  "key27": "3eGnakTvgYS8oRv9LdTGLXkW16xLUJTKeERA6852wjVjbuF3YLjv9Af9sbMHBVj9uq6UuGhv8syvo6oxSMUZHHqr",
  "key28": "4bZ9TcJabobTrNNeBKpucGSmHhSzYgQwHUptWWA7TrgJvHbNNkgmS4Ymr4AcVc9drAoRigK7DmAF46JtKUf7Fkej",
  "key29": "24oMgjnioCoKRWD6nZfdtLqnwX55KgPbV65kki2BhUyyX3RCF3vZuKWRTyXgoeDJgC3bAkxFGkE71R1z34wvCAHy",
  "key30": "2dg66Ap46NXvFWESZb9wXNTEfwbQPp9fAMS6UgsgAwnHCWFMAzguNmbd4BEg6EMRQp3F2cnXpFsBTTzmtYXpztb1",
  "key31": "4p5i13fpYAzrpob8KMWQwEhKbM2zo8PvbBxV92RB5wZKZMZQyndNGx4LWeDHmJsruYoRy4LbvpqEVozsWRTHvuH2",
  "key32": "42KmdMaA7opyjQUXUwspHEaW4QvmmxrkzGHrfcfBg12UHAmEVteQj1kb3b2iHY7mBDwDtHa6Pd1PM6wQs9sDpcmQ",
  "key33": "5JPZvjHE1gnwkixLjxLhbsJZduaByq7kJ36TkCRRdAF67zPTaHRxBvChZAt4QQs6nNiavC7XRQuS5JsjbwmWWMzX",
  "key34": "4vCK2dMMSM2hczxS5w93U5bqb4ZCRDo8Lr8Xq9KA12UxDYFTmdWizW8VQ6wccqEZBHC1MVJPvX6K3sZCSqhK6rJg",
  "key35": "5yXCDbyz3Cy5WTdNwGWP7iKUHxQpSowsKficK9Kg8NGB7LyTjLEm5UpdSf9cRx59ecuhH7oGuwSfuBcM26EA4nyt",
  "key36": "4rqrhNVuaUc16jkvRgbhCVe2574vRNnurB3pcQhWVrGdZ9w9JDkVQkzqqDBcbYzbdoEocg5TAa1GCHFa4h2nCkCe",
  "key37": "WSzPj7oXgGNFikxXjZDf52K8Bp1gtRar7SvWQR4T49MTnBxAZqG8mA2ghQd66kiJqWgYxiRm8fUKgvBDxpZHDVD",
  "key38": "2yspv2zBz6KLQCy5kTHXZusiWkFyXcXxLTkhxNwNxb6NmWqZGy5CCTTqJoEuHMpE8aggHz28vHBFHPwhZFYDKQA8",
  "key39": "5B8tAc3DSLPCCzBAvUXV7rFY6vnYeWN6zFBH4MtSLzaZYTW2NmGZjjHNmYjCdSppgAYciKE5q9uyeMBmooVarBYY",
  "key40": "2C9azbVD3GztqxGDCbqsHmwUCah1cUTEJu6YVTdBFHZBrkkCgGN14HYFhFMLrcrvdLs3ziDrxTbXoWuFsgmkbrXX",
  "key41": "b9ZAJDjCY5LSn1hZsLSfutK3HAQGi5sQaQnahF9kT8Uc2TpKMuCrf7Fzq2XcM3tHFScKhgVMsR6LfKJYPrmWjZc",
  "key42": "62y7Ttm96yvBBKcTzQx5diBMrqBFjRKHPHon5dvjscUSUe9SBHqiSJsfCwaYkiXXp4VBeNh6JoX42aBNKtcHjJzk",
  "key43": "4iTE2zaustcHUPQ68FpPoYQMofeEURW3CVDKbYMs7fEkWhXnKeFKQEJh2C1C5c4Ctasp84FcNPauuRYP5axd73MK"
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
