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
    "2eSEesAJiCYungbJoCH9vKJwUCdLW9hqmayGonZszDt22CK5dA584DJw15CgNeSKFpYppdMzAPdCsoyVYtzqPn5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nTeek2jECM73pyHxTb4fAmkNXnCn522c8mjZQyr6dEtrzaNAQS3QvBpvWqqCr33ensv2GfSd8PpRURK8aFnsMZY",
  "key1": "JQWZT1bUqV9z4tNsok2ADVFCXH7JoZD51imPy9D4cYNQj7qvgVc3SaUdLb3g3orKZmkqffqAAKd9d1J1Pu7tbp1",
  "key2": "2tb74gtWzsbmfoNJZ4KXHpmoweYL2Pduu66AGL3bX87RoL9VGtQH92DrVwy36KP2VajqNrzGnwqPrbMzHCbxSnS3",
  "key3": "DpdCqC844ZFdRwtn8n84YPoDFjDvCFqhhuEFrSegekFvTU5stjD11HUFpq5XBZYAsHvPfpwBFkUizMJf1RTqTcn",
  "key4": "5QV6xzvqNk4C2XocvKJD8QcehbkySq23u5NvUuHsbGmebYszPJHBuapaHP5J8Y2PsUpTQAamQr89YJnkMfUinjSv",
  "key5": "m5kVE1CGmb6vqYhhhD8AcVXuLe5v32vBQLV72YvRLXVts9AkFKVqo8tuoqiKonh9kh1RWzgwjXedcqDRF31yY82",
  "key6": "3Uk6uVyXCwuBc1WhLosCG39akoNb1cGJ8LjGy7Hfrdmh8xQP2paYMwhf1wvFVhEhe12mSnGVgFsBBQX4oxc8eTib",
  "key7": "5xcbHb5MpSDuVGbQdNKzasamKPWVxHDDALcNc3SURWhaofZjx3vuRkjg8y1YeKXfNoqSXet7yBM7bSRTMNXTFxAF",
  "key8": "5NJK3MykBEzSv9U9jLSgs287dSyUppBbcAz6GL7ZZ8V87ZoABWFcWogzjaU4J3XUNfJZNk9buQeUBzLTZacLYNJR",
  "key9": "7LyscKjq4xvX7G3o5cXQbZF642cwNeybqXeKjuTm8SJ23bA1ongTQB27pmN4uMjCx4JKQyN1AcHxUQ8vWAhVpWH",
  "key10": "rTs8FmVkhFCeZ5Tu1BZ9YKCN6htEPaZ1Zdh2csdjJ4b6RV4Q5hEn2eJvm16wPTdsY4VwNjcFK4gvVCQCU3wrsx5",
  "key11": "3FEqYwUUVChTYFVBb8YZ3Tws4yKcEcG6FzabZpxfZWdKsUPxQy81UHnkkaNUtEVk1EHFuZmyxx1yyiBwGj7BM54K",
  "key12": "5zygqcJvnqC4xZVTyxhzQPBgKrzChN4rWD2TDDymEqf9QMkmtpuARaR6Ae8KiBXwf7y5X4swpbFkqgRpEJjDDy12",
  "key13": "3EShMoeD3P8wSXrT8cnsnhBE1eVpjdKrfwSpcTP7T31FceUShWb31nFxVfoouDjCkxKZ7ZgmrMvDgN6PvoZMHKRw",
  "key14": "5eEeuJiQjfy9ZydRWfhNybDfk3LBuzmzKzSTMyf3Vv5c3fapibkd2aipF7YsdNCbfTG5eXkxHu6okFDqMqKyZeSf",
  "key15": "66JdnrguobrebbFgfz8y6r7qVPeQ9FwCYjxyjCGrkciaMmk2PBG2qXKdJNNTpSwYxh49jy73rAB7EWvwcaFGLwEt",
  "key16": "2BpebfcKqgUvLqeBdDcHMJZxcL5fHQLR5WryQ8c8VGQoiMh21nJsph7Lw4WQZgYr8vBXNXcNXgCJj7jXuTtqor4q",
  "key17": "4qLQeBde1P5YNftnzSyhbSg8HH4LBYW7RtQRfE4CgbRXMgcCQuG8KHc5CvjoeNkWyWMepLhtCAE8hrbp2ZerAyfw",
  "key18": "5bMvtHhQfCzLiYy3ZLUpRzK6f525i49MdMmdPBdM4kGhGy2wTawQazBgG4MYxLj3zM8iqvCwTiAtYz9ANaB51JCS",
  "key19": "3yTVnqHDpp2wERDhKGAxkxRzUnmSHfS5TjD5HFtm425NQrpEMQqaDtVEeKs1iHVc2mh2aVmVMDjgBeTasbCKKwrB",
  "key20": "5LRFPYTrWHzXa4njvFaQZt6rChV6CxNqPLXRVfKypEWKXJmid6UQdqUrQzZJD663hCq72Nrx93mUXhfoigt46vKc",
  "key21": "3AFPj43La6PpqEjkiABzpgiPzqJufxcgCHyakWfZ73RwqGhsU4vRhhM3FZ6P3nSZ85iTY4rjGdBRtrNHQYqdyHev",
  "key22": "5Y6hhdYnUX2nkzu2Fi5oN7RD6P5EyDpqKPGPvxxGVXwP3njV4uTifrn4qEpqCq88apRnkro5k5GQtNwjGbQJutJa",
  "key23": "2m3JdzK9pwDT5pegaMZoAQoaPojWZDTNup1RTz4ZzSFeHvL5PQLUVm8qSSr7B9sASDnHLvdLesxGTe6nYkG2aETE",
  "key24": "4VwYXMyUPSzfvGTTaKHEqCyjjd3K7mGmitw2a3yn4MkvzUhEpAf6MWPrfre4Yibuzj8UKqXZ1naX3zkxUm7grzp5",
  "key25": "652VipAkivq8MkCeaxjM9dWZiT2t12qsB6iqbckMeTds17DTQJv58aaCFtLDhRPk2XmJHNy5y51WbqqSv8LnS7kG",
  "key26": "Z3M48Dm86eLK9k5onVLJ5dmLn4rzYmrLwk3gtDD3B2auW8hJYsYdApkLpHKa6RhD15YoHcSCY4VD6sEjDXv4KXu",
  "key27": "4aig5Kh3o698kmGDCus1gBMaCrkXhbqXYhJyE5f1wj68mvu6kbFVAhHRUKLA1i9zoUY7KNPAvfPd6DdhBCeU5Ufn",
  "key28": "23GoDNVskhnCDz61JaZcFD8deBrNLasSQKzCXXvB55XoqGvK8TWYJsnu2j4Q2ZGHKcB4ycBsyE3YgLgY1SFB5E21",
  "key29": "5ZNkv4MzyyS6ky3nUNd97pVzdzKPhg5bj4UnBiuU2j4bXBBxB3eR3FwPsTfgVZVaHr93jUsL3uieo9vemXBh3Wrh",
  "key30": "3v2F5LsxGn9Ew3thv9484PviN6sQy5qVM5rf3YF5fCTAcDA4yYU91THpZ5xwCrosgQBqNrPUocHBK7e3stHnMoUq",
  "key31": "GUkN4BCWe9SzV75Cykgp7PYq5zjWysGsPUwpmj5vo6iauVwP3CppxJLpvXBsHHS6suTJfxSu2VRkhQL4sAgRPQu",
  "key32": "4ZuRSuYFm1qiNXzUgEuXJfDUinM6R7dbEQ91zcCgcRfvpgBzp2ezw2sNd7Pvud8h8STqFBv5WwRpn3GMW6hGLLa7",
  "key33": "mThoLDt9DLwNaMnqyf3Siby1qFNgRL82X2ghdLo8sX9yr9tu2HX5QkgHCx79EWscMYCyT1pikGiSeLR5JsNkGJa",
  "key34": "mCAtzLovec8ZuQnEgTuYjn6xU5WRvuoHRqkrH5wDdNQaLrezxaMCSzkfsTkCeievc489NtkPYQsT9a6H7XkjP7v"
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
