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
    "AezpqiBJhHv8sfhjPDvfcm35gDXPdahwJoeopXtVrrJx3YQKwrh26kPqc5Pd5vLrN476JGMKTUUt2CVf7k3GACm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UkDaWeXj7hvSxuYvF7bRDUPde9RfmBuZmYsMeFmQrCNRAE9FmHidFoP7WbXdvfKogVvLk2m7wf7jeRsT7RxdocH",
  "key1": "5eREYzdyYxaNJrDUdx6ZxucubSEfmLFnNgwSXxFWfsksCTA4ZRn3RtYUG8Bvbxo2kSbzfUaVLupCEgdNT7JkFKR",
  "key2": "98KvAqgaJDbkAoxMsGmxHDsHaZ5rgw1KqkzwbqGs6qgNzL2UauBSQJ17RkvSzAqRALWQM3PnzfX8R7uzMPnULdq",
  "key3": "5uXY62McoLaEXimkVERZSYqoSRQ49mUiy4Ec3X3G3y1G6kdFhDB7AF7gkewkxx8JVU5kZXYRjrokXcScduKDAHCz",
  "key4": "3ZD933snfZDMi2DARgvbEQrrm7rjtahZGC1epw5SuP4zkmemviYHqy7g4YagUhgW3KtYbhrNDLuftPE2KqK2dUxi",
  "key5": "n25g6rURo84idLARZjWw9FMZou3ighMBv547A39NoLTFXU2S7Wc9BnYwD2W3EKLzx8atD8yEARK1GTQKzmG2BSG",
  "key6": "5UnS5asHQqGbCQU38yQnFGpps1HnubLM8z5TMCxsyfiL8Fxa21oaKSxSyFm9PDEaUx7WYkeX4YC7oxnZQGBRxKag",
  "key7": "2qLN4JFmxxUaQuU4yZmLwg44127ony78GXMaBD9jHgixxvwP4oTzkbam9iMRNTSVoHmwjGNxyc63aGX7z1qxHM4m",
  "key8": "MzJTPq6kdRokjUGZ4AgcDr42wfeo7kDARsuv8vn849K2ZYjJzYMZRgHXJGzafJX9K4kgDgbWTzowRvNoL4u3Qbn",
  "key9": "3UcFyouZn8oUuQNEg62dvAPjSb8f2PUXURq4WmeyE86wwaLo1AxouLGYQ2BWu27tjNqHBSxqVu8VQPAKdosZ4mwr",
  "key10": "4RsYnA7vDngssfSZm8qnrJQXtHpt5mFiW8QiudLh9BVWViTiryycxynx1RohbKmsRck4VWcC2inaS7ro53Sc2prv",
  "key11": "2gz3JXU2bCXB4nRo5rX3F9fVoJXhcor3ECXHgAjB14y6mVW4SAvy9i37z2Ucue4i4ei6Yyf1UU9RZ46EdRAcB5p8",
  "key12": "5PYnpxHHGUc3pXQtdX5aTWa4NJmvDzVhbZvpywFvj6g5XDJhoYj7KEoEJAngokJ5F5mY2acCL5CkBCZB4iUGY7wA",
  "key13": "5NDGZSFB1wx9XAfhzvy24ueMZESfKEXr8HNYcWGTf8WSyt5vmPivb8DZvRL3x1S5UysJic2q2hdbq3tfMDpqZiWq",
  "key14": "4GwCuEbJNFYsWS58aypRDkbcrHFHVmt4w5T397FnnTxZzvaaVaJyke1Dxq5hExT1UtW3EKhhNDd82sYaBdKfEv7y",
  "key15": "4CuBS86HvzrX8M1btyJiZUrD8bKPtibETXTokT8PESecT5S46UHGa8ukK5c3qcFLCdBR9wonuZWms9je1H78nKFR",
  "key16": "2HZTqsA22bjCoumHGjeFfGwfry8oN83mqzK5tmQzKXthoEa2LekdkkXQEnMRDA24UbRCNMr36yF45HHD6Jys9TZc",
  "key17": "5hDWAHxSkkUz6qcp3kaCSVnM52zBvXWY5WLxFc5pZXkFPkWj17AsrUobSeqmW8jAmSRQgD8dM6fs4tDscDLzsPx4",
  "key18": "2HTUd6UQpCD31FWN83CVKEj2eq6ua42qYy8sj3Nz6YBaCqLkLL7tqLdAZLExu7RdgwU7jzWYscz1u6bpny6noq8N",
  "key19": "2jLh3rZcJeBFUhdLU5Uqr7KxnKpYeBLyhTvxm6LejpMr3oZuSNya7WnQaDGa7mqvFtHM4sYVKU52MoA5BKisykTA",
  "key20": "3fPTYkcrZUt3gGPeQcohUmbLCgP92WnjTbzpoBEjaXgxxKv5PmRiXZS9D5x7ZpSC5tejQr8G13JSzt11reUNbde",
  "key21": "3eAM6EsmvSxyhNx9sdvKvEya7Md7mb1LkXfEyiU5amuytJCiPjyk3WRh1pzKykS7vQk1rygo5FhBf3ZtNTterQfF",
  "key22": "5LYe8jDBsJy7ycaUejryVUMyE5wrwaKp5h9uDai5fAGZQqzcy5KEv1m4rV3SvTwEjZkp1LZ5TaSvTuHy2gKKMcjR",
  "key23": "2P9EUAnGLAYDFxNdbtfCxB7iAdratQx8AxCRCatQDxVLG53jJABc8v6GUpxQpE65KBz3wHyhSj9QUCLrQUgUfXaK",
  "key24": "CAN43rExpoT7SifedCdwJiQMdqmT7opUDFNDEXs5VGxs7FcVCfQimyyqcTuXZ9diW9DETFSZrYhzcvzbFS93qkx",
  "key25": "2ugz2F8Ynkuuny24MAMA2RztWv6v8qh4nCzipabqCYZMJ7gFFgSWTrjq1rXxopueLGJrDM1dnjkCpLWFYHUMV81s",
  "key26": "592AAVpe9kMoN99H58GM95qXyM6V5B913FziX1vLDHVwGCyA2WcnR2TsJHMyt2efHHkEXhJvc4e86wJQLdhCezKg",
  "key27": "4SnB5Wq4WCQzJ5L4sGJeoi8YwbjZqqM529kNMLQGS373ta7Yg2BpekpP6Z2oPKvNGwWVYYjC5jVbLgUKEUXfB8rs",
  "key28": "UeR7CeEUZV9eVmt6gha6etcfyxC349symBudVftdyLAQaLjNPC346hR7V6gFPFeLdkyGrdiQF6dp2z2TDtw8F9y",
  "key29": "4q6weiURWwegmcHrs7SE2J2oJuKoyKJv79dXrkCryuBx1NNZ6SQKAvAvA8C9Ew9gp9R82kVtp5wqPJqasrQN7btK",
  "key30": "5RBEea57nTeWe1jwTjJgGFNALncizgbyZiTpdyd72uDkVGMj2wKDm1RZViD28SjCmPekjbk2c4mQCQvTWcAmuc8p",
  "key31": "29tjRt6PxFXGNYT3gS1LXXARiHhg8mrfLeKmjCGGK95yQEMkpZVQmD5priqT35epQJiZvHRN9qbkAsBAZ95m82cC",
  "key32": "5GHvrupPaHUhgD2Vpw7KHF65hE4ZLREwHdueKrxPzAnph4tquKNSUmpBxCR65RxSVdZ1dJjepAPSA5YcGuBomsar",
  "key33": "52ojJ8QkrUvhUKCRSUkn1X1sQSEHsrLTSPce8XJdkS9LrmmZXGEfRPedv95uoHe4TcPJfTdzVma5sozAHnGw7jRk",
  "key34": "52uVdkj5wYfQRGWW5VDfHCjVV5iNG2PxdQEkQy1pWyiNvPX7pTetnqCumpSQEyCi7CzpNwdP4xBcAXVUsTsJb8CZ",
  "key35": "3mcLvcDiKRPZfLTzmUyH9Uer5h4EGJkSF4quxPNhEN2MYD5FTsDi7AhyZQ2JWEDMHdSBEkWdLgpFhrQs6Bnp5jVP",
  "key36": "PMk5CVrCchcwtvp4RgtFFRqEzkriBDUpdUFDvvjcWk2B3fobjKfFJhq7WCxgaHTR7GXaEJVbxcvEyNyq1DMdCPE",
  "key37": "5WByvUPmj164DkCT3ipWJC461hmdLwsSyfSJpmF4GD2JcCzwGTajzjwFNcFcHA2cgqBDdE6znkWUEmPNBZathiiw",
  "key38": "3Di6jV4ejT7onbN9i7WfjNQeGQNZ8sfhrrt8XDf3thjgkjZVtZPeQpRhyzKUHqhg85obPmUnetF8swCM4UxvFQP7",
  "key39": "xPbFyPmrCKBQx8jxi8ZfxryHHXk6KuzbpvLGbSzL1mnbSNpDtvZ2JWmYsMjRY37KPepiub9JfTP8Bp9J8VtPJPP",
  "key40": "QSqWSZMmdjyxoQBBPReDLpDtXxauVDfzKEKn6u78GNNuqVb8nQjPSAdi9M9RWsK2NhqkjgFoFdX7ZDrbEJi56aK",
  "key41": "XT2YyYXEoCAiDZJey4Hm1KnAECGkzwu9xXiH78wkak77DRjTiannkRwH4bJ7cVUng6sHQGQFkq8gBNoKfwDqNdy",
  "key42": "2zQZ4LwNdDBbwR4onvJTBfzLwjK5HXzz6ZoMNvjSpnVKvNVuEykzdDotoyqixBHD3aZNX5LUTySZ8HpqzsugsT87"
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
