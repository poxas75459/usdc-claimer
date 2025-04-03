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
    "3zMBTtRaPjfjU6AoBDgdhfWXszk3osudaFrqaLhhFQ2ohB5hrjAVki9PSjnb667mAfH19wrfu591uUYeHVwzuXRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDadk8hjNCmfj7HHoQ74Sp3q99NcJdMwnRJ6egH636HeXZnz1r3RrTE8Xn2Zs1PDvAvKvnyPWP6onRUQcambbdH",
  "key1": "kQtHWDnB5jFfHqyT87sJbYhqMChDSzudwHRZoViRRdhMSBesLVbdBc8BARRvWztPVcvdEk2SZUFdh15bb4ibtB2",
  "key2": "2RB1NfQbces2AQ36tNsoq35BgZPHmUNjzgkdZjXZ9tHMgZQPWz9oxNH7zKktwfrKJUqP3T9LNAGsbtUE6W6gnST7",
  "key3": "dGCtZ9nekpSDYXXoGcW1tV8Po3FiF1nHUDgHDSe7TNaKBKVFKDWH3cPKexfbE3PPVzpKmoktCpTNqXg57vLnAt4",
  "key4": "3PWCdTtAyypjUaZvTQpUgqkPJ3gHTVEmzXQc7j96M4PzqWuQ3wrAEBp6Ar8hCQt4jjS8234eY2zZYghsBzdJVHbZ",
  "key5": "5YTRMt2E4EGaevygs6BTLRZJp8UZYvNKe9LSVNL72WXfADqxUaGNf7qRKEFtU9bF9p4csu4gH5FJ3mUFYVGkt97J",
  "key6": "2MJ1FcQ7ri75Xh7r3annwCG1rMMoQJG5ejqdPsr3YuPWzX6TkHNBgQX5q9ds2iq4zBmapRvkizjUMsh9XNB2TJGs",
  "key7": "4XqYFAQ6vZLDp5LrWLgfcueWvnBwxHLLKd6z71WxSpoiucGALHV9eGatnY1KaWC3k3fqf1RZBp5gsjaT5rCjtDJ3",
  "key8": "47AkmpaCBEyiaWb9swF48eKsFhMgbNezRZFgMVfXYoSq7p9Vi3sKZmgFkvDv1hY26EUrJydSM5EEZH4ojBXfUF9q",
  "key9": "5axX6QGdvcb9ov8GeHW1onpqjRWoeDHtFYVCzvNypKXRh9Q2o8AkMsEvp7mLmgHddWHL441q9VW9Ad7VFf4VdYD3",
  "key10": "TgEPYgM7RkW7LGiJuVzthx4FrhmuraXqkTfMTtua3uTTAjT9XKRMjVNcdrWPfHrux7PGfiv6x1ntwCYfxQaoPn4",
  "key11": "3kPWwQHVDJYWYPrjHFBPm2wdJaZs9a4zScvg6gNQS9o5fC6cFhJCjTiPm6QWyfkhS7Lh7m9Jj58dQ3JXVWQ4bhr3",
  "key12": "3xJB19kS3HP9VkCM8y5GZQ4niGESwxVkVMgtqtpcDM1zX8UcfVn9spf3fRXbxq2iAArFuhHyxYUeWvEf1pALMbbd",
  "key13": "3HVjXHweeX8kGtxxYNRvA5o6pHQL3D7kNN3qHkAapH5nY6tRzkXYhtMigasdPZ6vXGSEk6TGRhrmcx2Toe6u3CuU",
  "key14": "3WxPxCNYUW5txnAXxCUYemUsWR8sFvDnxHkrGqxQP2R2GcjZxjFvJ2zjP7x6rWWUjmb1ySkTP9ros5Y78bSU5Ey5",
  "key15": "Z7hJGWLhDyHbhyyJEbKdHggUJtVT5jZdD9WjB2QmCRccMjYd1q4aNWHNsd3G2RBbu3Afx3YXd7tTxfjFz3R2xmf",
  "key16": "3TyFZwm4NLn64Fvtf4r4f7VrYxAyu15Wu7yPLmbSDUFxbkc8kbtDKkpVLP1BAUrxjWFURyEZSiVMRXsyAWtbogDt",
  "key17": "63uao6vcNHgXHjqdEe6bHRexEwvSeu6zig9uEuvyu9oqC9wcJ43XiNZGzdGUVMVBtjxqJEPBwGwQkNRJGFRfgRuQ",
  "key18": "4gF565WpjmC49gPK2jrnsUajPwuemmoawfbTze9cQHXstGkCFmY3C5QETrGLBC4ujiY2bAXBs6rF1HeCfXtdeMDR",
  "key19": "5nKVwgkBukC1Hkmx4DBapdqhgmX1nPXtiuy7rmbhFLt8W5XbZnugjsCnkCKAzYPC3MGcYUsSapKMMffdU3QNJh4M",
  "key20": "MELzVm8JRSmuXBCan46usJuqAg9EifE5bQnRbr6BTe1tSBHAs3KddZgq6X1yD2upqawKd47LDVtifQi11em7Wo5",
  "key21": "4iqKjcTN3hRxonj23pf2rqVTr4PZuq62Cjas3qfLDLC4xTWBkqFoupxVJPCwPYuK8KeXotE1kM664Upyx4oPGSuM",
  "key22": "4niSRmwGh8WbVDUgN5EC8EmvXU2rgU3mgKWQZvhSURqB2g9EaE4fPuxkZjPTTLb5GZAyTbFXRSoRaeB6yyxz6TxQ",
  "key23": "4stsPfLjgmfg7GKvrQDH1mRnsinJL3HDdVy41nzfZ28CzrtxQc6gyEqn2HakZwdk5ux6gyhFnHebXDPqvYaoG5kp",
  "key24": "5foerrqXqixWXW4NeRLCwgiefEQs8oDhHxwPAVKefQBsjCSRagYpeNJbzFVniWaFqCbzE8fUgzbVMM5YtMENtB9p",
  "key25": "3uXMZL3Q6dD1LZyafYqmh6JEZC4BUChe2qmaFZJppoH7rLPjhwguDjsZjznUnAcAUPYiCBnewSAfScbm8wYCVyr"
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
