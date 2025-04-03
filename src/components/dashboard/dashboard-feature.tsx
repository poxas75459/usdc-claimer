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
    "3ZcQB94t8438nvMQevvWdBALKh7d7CbDrWuEmNaaHCkKXWxgyzvyob4iYN4Rg6MSu1LyxypmzuYmPNpSiuBLr7zV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1tdojDymzLMMjhNMWWCpm2BT95qVaxfpBgX2qbSXwnKhh26D5CuZVi5dHqEm9QjMVJeVA8zdqNCrppTkUtUJ4W",
  "key1": "2jMF84tqMJQawTmhLmKgGMU5EbhhxDMh6cgpywSPG1TXhxTGu8kH676Xw8h9n5ff9JEmrZEu1JRZuNYiwqEFnAui",
  "key2": "2MV9yt5NW1XoM1Q5ic9QFSLW8auk4tNTQHistrrUQJ5zxJXMe2F4ywdrJp3o7DdfcTiSGakTpUcJeTv5shStDgeQ",
  "key3": "2FThqfMEC5awQN3ieJ3xm4VuU4FMdHaiNmuz917ToP3kEstaHR3UVQk8gHx5dawTxy39BtHBLQKNSfTEKzaNvqzW",
  "key4": "2uX53mbgtU3XgD1QX54o5GXjtH3Yq2quVPftKddyUqd8Y7vNvuvFx3L6cixcs9W3htta8wEYmdAHJx5mgM5aQtrY",
  "key5": "5EAD6b76r4uA18xwnD5wZvKz4MLfMzTgFDh4ecvo4A4GKPfYbSnb5fW4cUCgkpWdtnxxyggJnRSswik99iMBhh9f",
  "key6": "2UzhwPT6dbbqV8PMksutHcY9cA9M4mKZyYyaecD2qHWBvSZm8CBo1poZDkmYADgtaG66inQQbFsDZcNVdZLdxdVy",
  "key7": "5dAKmJVxQuFjpHCheEAQ5iUfrESG2BiA53G56Zmzaq1FGze8N9eXsLbMmtzeMJoM2a2qCsE7atygqHLrep8YV1ZW",
  "key8": "388ow45LxSj8YmtHLWUowdajkyY8jr52ync3hDbxvTMGYiMwJzeNkc7P1kq2k6juTMxxXGWtVwWy8oBbKEJtP6E5",
  "key9": "2Aj7YD1W19wtZCjTAoDbjnHYQVHXwGE1brXRnyQtXdTuFwka5LRP9DyM7SwPT1R6x4dhjGSficyUKX6zj7uzoDjf",
  "key10": "3neSehEsu6ZFAgYfX9ov5qxyUt6szhCaYq7NjQyBjb9wN8d3PvjeN5ZxyN6X4uD3WemQ8saKCFehckFa5gFMNbr7",
  "key11": "5aq7nhNV2fjNSFE1qgdBaVJitNPzEWf4HWoiPNCvsgFbWXXUZNK5FeoZfWmx6KwXkCRfCvXgUXR3pnpGH2owPyEW",
  "key12": "4JQrMFpYPB8SNoZXisMtLrW7tTyPUJuJexwSunK3k76iUtHYuMxi6X315oenGHavDumS4aVi9MJwT26tqoKuSkYt",
  "key13": "5zV7GcDLbeqqbu3cnNMmdCEEDKf3Lz3dyxzWPMdihWBikcxNVp3FLcM9fxTbGVrUuVUxPki1koGrLWPGdrpAovLi",
  "key14": "2kfcenpNhBc3TGWXBmfxYRaNf293KrNLfpELcwV5dUVZfWKin6NMFu4EDWCb4iyRdTftzV2qXsZ7WYZaBpfwvdbu",
  "key15": "aafGYNKrAZquHrKQsbpYsSbD38ThHEtcggyXCnwGUr6SNgda4nY1xw2tBKgRzodRKLhSi6ocaYnxNDz6MVShEC6",
  "key16": "5dvzLf52wvgSij7NDLmA94RobQnNdcEGnz87FFc88x8X6BGfghnqSRhvBLqdrtSMMk4oGQwmw1zkkEsGtFqMw5Ec",
  "key17": "49ofy75Wvbm6CCJNcGopFcg1R2F2LMnpTjVKRzj6dYWQxEPnHwQSrUppGQdTKk1hvd9EFjYBWhJAZiwdjpXqtpRk",
  "key18": "5f4hSZvi2x8brhytdRTnN77fH9AbF81aeuJnFMzV9nptDerB8doVqKAuiYbNkEXUNTUrzxwLJJ9he1shQUb292QM",
  "key19": "5wkXCBoHQou2qJR7zdNy9FA2hNUQGhysrurwCqvrUsS1pUqqNGsXZ2aM1HW9M7fvdaoCZ6FWJ9VBuwTjwwFUgakF",
  "key20": "e6sNiKjLxQa3JvGRenqU2y1ALzjwHjRwDFrkZUCzWkmSsHBtxmiUNjjK33TLo77hqVxWuP8XL3jiNqe2E1EVmN3",
  "key21": "4888pvnZGUy5debecnuW6P1j1pMqenCB6hCngk64RLwNTH9bpbG3Thg3VgenawUTn7yuCCFc1jJKKQ6uB2iw3BFs",
  "key22": "4Hsh2rmG3o5WKUyqk4psjVd9f71XjWusz37JbzFbJe11Eie2UHEPYTNbk9MbyhAo5evALm5nQ9n2zB6ieB11a9cZ",
  "key23": "CEiAhiiAosWw3AB94UvDSTKtfayY1s8hyxTpL7dQm8nkKApQSvyw1JFooFNwc3zqo9KyRvqV64ZxHxkunUap9Nq",
  "key24": "2n6znMt45moeDBb9gU9MR2LKZjxzv8v4WzqJFTQm7Lu2mQCYNS8cqT7a7o1jthGUA9qwW6VRJPppELgfNHXz4HJ2",
  "key25": "5oSZt4V4hsokYXcNXeJrY39mxd3RvYTGeCz4X5R4mTYFFqBGRYcTqFy6AtnBUmJFNmRp9JoUEe6xhn5j2GGounc4",
  "key26": "4XACRm95snpdJPZC5SwRRx2KjgxvUx9c6depAGjmK2pCHgKaX2heh99w1139fr1Y6vPHmsMdKyAfnTdS2jXEJtX8",
  "key27": "33hYA4njWSbX6AEJCojq4d5xWKWbJUSnX8wpinNJYBbKFmVCpZC8KQ4nPQEVNPpDiJp1NfhTQ7FKVuLYi8DKWREi",
  "key28": "2jkv2rXnMG69XaF882xsVcouByjDVXLbjGqGFAnM2wQoSe3Th6oEG5sm8FqHBJwrShqaa4mwksjxom2TPbjMb2k8",
  "key29": "33T2wrutaP77eDcUbyY4iTbEkYinV9Fe3J7YkfVNYW8nW17CroYBZooUxEbKUmYew6yqC6J9rmzGGVEg6vfAmNgW"
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
