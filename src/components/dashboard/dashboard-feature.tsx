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
    "jhbVe4NVCKffkHdkWYpWdHNRcb6W82xxAKBuF5twe6HbN7MkF4Aiu4wQwv1hQaqvBbxniNtF8zgtJPdTXyNoC3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRzWEbMVvFHHguaipKaBzuNmRuT2WjXfvpiLaGkEZxVoEBd1tvjJFUZf4gBkZzECjkYfRvKcKbu8td4jZWtgdrv",
  "key1": "4DCduwC1hrWNcbxpf5NnZfumfeXgjqb3bKBbpSwrtbGprz6N3L6a6VgTK8Gy6Dcq5aWHPMwr11yJEnFSLBUKicLv",
  "key2": "4mEFVaby3FkqZuNHWgCaYut8dzEWXc1NevokJCRR8YPMptGx3jaugrH2ErWadBrhFSf5BEvdmqsQKKA9hDqRwEtU",
  "key3": "2Lcc6oe6p1Fx4XwFPYu5hWuWxT4s63BJ4Cp73p1HufpESQWRAb6U8U9hQ52XBxCVpANxt1SHcPVJBU8JHT7fEbeG",
  "key4": "678ZCpvjRc2d2mRmftMWiu6wRn4p9R36L75xngoQq7zv3J6U4q2h8FfDLFbk39NaBGKnmyGPvgJTeq6rbRaaEVtE",
  "key5": "3226yQgMCaYqwVU5trh4TaLdUbbSuQAAYJJMWYqFaAoxcfmcXCkjWmwhJiqUZtEdPwyMf9zJ2m4NmBs8A4aXVi7s",
  "key6": "FXJ8FKRwk1sUaxkoQGe2xHigynLKqNU2iUR4XSvoDXFfNu1Lcj9arfqvxNq2beo3n8CZhtJxqJ4zR517zJwg4tR",
  "key7": "2FfAsJUqehohWXgWDEe3QqpJzy5QHRr1BzPQXjn3dPmrgNSmfFbeCQ1Hj5QaBPv8gDpTXUpDZP2jExRPz7UA2ptQ",
  "key8": "55qRm78whWeVkpj5eR9xUJKMmJ6VicPzm2iWYhftuso6xdvpZY2PCs95MvmvW6ibLDFBQU8TMvAoMshEGPzqT1Vq",
  "key9": "391W8f4FYX9gAeg84zNmBdHB47S3MH9ZBGfNEbQQqiJF7CS7XVRabAvmKswE5jbqstgoHapqXHxjnENRNbdDBzga",
  "key10": "5w3fDuFi8BC3q3ZvSHHB8RBtT8sdLsM5HQs2DByU95naZwZLbUBEw9Qd2VxX95J6bL4M7PdoPXFSGSdgvb7tN8Cc",
  "key11": "4UXVZDTRqopXZFZQYwgNj6aAQHqFwinizZ1XPetYGB9EaUaTjvjBi3M1ZvBSdheWgKZxbnyEgLa2xLiGJhiJmSz3",
  "key12": "2rBJrRhwUoZ4NsXkKDrgZbVVUEshuHEezUTvTVmTXxKaSmevfdUrfKnWdrFpBUS7SwtsqYit9DDaCiNXu7TYXyWw",
  "key13": "HBQgQtA8VTitJAMpawb1K2prvc98JtMCvXQwEK5qJPLCRaMejUji43uP8WSfN7cYTfa8LqBoHg6Jv2AtgonkSGs",
  "key14": "3JhDsf7sVJMb1GrGrWM8dwCsGp9gfxN1KBvatPbw8Y8zjP1gAp2HbZnrm77BJBjkiz6TFu2HJiNDkCw18D5Abo1o",
  "key15": "Pgb6YRwLpw9fN7yPKpuFh3gL6nCYVGHfhFZRSFWWQWk8ewijkkrcLiLGPLoy3HUCwnnRV2Q15Ud8UwfyK9K2qCU",
  "key16": "59hKCWMuw1z7Yt2658qq4pHDnZAzm3Ltq5TjDMPMfXFJ5qTPg9rXeu4jc4qDSNiL5kHHzHwDPpepGCK6rfNZo1BT",
  "key17": "3hVkatutBZdHzNU7TiS6tLjaKiXEnQxFa2FU7qM1hQM8N2W96CLTxK9ZTUExVZperMtg9fz1TVzFWGAEj7qiTpgu",
  "key18": "Px5CSa6jgG8yCbtRnwL8AYNu2VuE2hsSXUSNuUK2iBnoTURCKMwrChcT2CYDxY4yUAQvMtqtTThLJsDqC5DPPTu",
  "key19": "2tZrcXvKuTAFUtBCqBdKkTgPb5AM2ibgg4CCVEVjwwMudYfcKBzngbCLJ1QYyjsoKUuPoVwCEcQSYzhyJHjPraHU",
  "key20": "4kBTAXfS1btFMm21F6EVkjpLffAagx8m7sHNM7BdTA1bhZXTr39omK5TZpwHRt5KQR36JbBTrmonnZBAZPMriVot",
  "key21": "3aZEbGQ8aphQo6Tf6G2mtBKQ8zxfiLsctcZ1VAhaRuouYdrhgryydWv273eEZ8ZV5r59cwsVXhqV9JQYcs3cbspr",
  "key22": "5Hi4wEuGfp14EJDdA8BLLdyPqjx4Zm7o9irh5FqQM7ztKvPd96DkWp82rEfpDxjCfksRfcS9wkydKrCjECmVyHsD",
  "key23": "5q78uU8uZcjgeRkuJyEZHx9YAcoiU3uhSw3NaJoq14XWpKjH6mGSsNLt2s7RMSWrrVYBnpy4deMvZVs2CPMCLTcz",
  "key24": "3UBdhxyVRv8wTS7xVxyHVLWC5QykxBTyjpeYHyGjrLg6B45xxFNKjrqef9t8aVqvNt5u4Ng9HQsSYuSRx2eeLeRL"
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
