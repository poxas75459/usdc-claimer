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
    "3mZTGUi9rmRypft16ghmtUc1ZGDC4LJav4JSGH2xFJqk8pewokrzFBBQ19C3k85G1bJke1jLT72YU2F4GLzj56Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQMiZB9793z2x8mRKVwK7NQ1fdFp84R3qMoMhJ1BGgsBsdc6PH3a2mEy1pmKyvAUJJym1og3h5q6N21kzU2h6pr",
  "key1": "5ijhzpjLjK69PEpAR4Zyn8UAZrd5jz7MNejnJqofJbr6fsRWPtzrBxeuoij2BwVFqeQAAuR4LMwaM9MY9LDh1NDD",
  "key2": "3DFsfA2S4siKW9aehfkNWp1x6VxgPcGfVz4Y4rL3M2CEaLAKmSer55tgdrxFsNbDnbPLAWz4HB8wiCN7eqUHjdKb",
  "key3": "2KF1cpaDq6tpcpbcTMWDfUBpnQqdu5QozgtsPbaZ5c6kZnQyuRHeeyP4qEKkpjK3GeK8A74TB4EoYsKUpsoEJBN4",
  "key4": "5rZV8gCBqH86HMvsVuaX3taWQyoAQXkWcky7CYddxa1J6eeTkrSKh986q7NNwEib2VgWCJGggf7FXqtdCixJWbui",
  "key5": "oAMmdsJUNx313gpb2BuTvoS7AGDQyDTeJat5bbjeagd1fwNRYXu4LrnJQiVc38Gwy2ZA9KvaGqb4dqcjxDqKV3Q",
  "key6": "4UBx16Bzms5HhPRgLjJJE42DxWSfi4fi9kE8d2w72FcU388sbSK6dfZo9LAFK33QYeuvBrTzaUwhJGiSqTem4vCR",
  "key7": "4ms44pj1xxaUiX7hRCox7RoxPRspaiyt2FbSrKxu8tPdu4nknRZeqBZGHtuYqQPFnrH6YDmrzPEQMUnua1o1UM5v",
  "key8": "4s8gLfYNz9fVD3TKXzuAxvNGqzUpr6jx6SyzhueieT5GJ9vsEKGgQos34ycnZ8BXQ8ziQKPJALyKuW379A7Cpn5V",
  "key9": "3X5MVQ6pVSmRmfKqNSoySwkUGy4JG1pTBLJqAkSQ6yhoZg3Goz2sjc5hAyh8XNPoF4LAyM5yG8hnNtxXyHLinvrG",
  "key10": "671f9cQKYgsh3is1UFzNAeTt2z7AFaRvtxjEyEYqs1vtpCfxB1k9kQXBFwckB68pzFfTuS2NwfnnJn5NApMJvbCB",
  "key11": "z8Wc6unh3BTJNPpS59bbXLkWDj1QfTDYU2AiVfCNFpuKYnrLh5q2aBqpJWimcazQWni2RTqSnU6GnHZ8iJUpdFG",
  "key12": "hHjwrwtNcXJSthputeoSxPS8of7v8vG9obWd11Q6xid6QLU1KU3miw4kBu5N4tADzNTykcRG8WP33mW8TFNoXAj",
  "key13": "4ZtMmfzaJms3cqmf72TnTPKYpAjZ8KKrAg2wvtmebLZHeTCM6akGFMo8cG7mm4EvdtSVR1SdciosxNDQYAfpJx31",
  "key14": "5JEveTUaikTKZijWDDF4nQqETimkmusKZrM6AN3TkRgFQFY1RveT6TcHp5aaJKqBc5g6T4ZDF6ifhwp4U2vVyhHR",
  "key15": "5atrjyG1YxFJbrXygmJXzXU5LUHJ8e9naPFfAzHPUdSkZPNzak8r8qzrYTsqFsMbVh9xe4tCAayJaX2Jdynwogei",
  "key16": "2mnz6cXNfy8FozscG8j9qDnRtYiz8pp9bnhF1zAoGnnLLY3GrSuZBYYJLWViNkMfd7ebeUEcKsrnwLPJkgSJi79N",
  "key17": "44WxmPuKs56qRa2kemvEdyj3F1V2kQuxK4VpgJsZaBCyWVeZ9G9KFFT1qPjNpHVLyM8RAe2Hk4aNFLzT4nb7PdN1",
  "key18": "gdQ2cfzTw3KEH9Ns6b9G2YATx3HeEJpWW2KrdffcxMuLMDaEtWZYWATghjFhThGThPJEjrimv1HuCGNSAWoPqtX",
  "key19": "5YT4mkN3pUmk4Frj2xVXG4G6r1JpYLak5bytBFy7mRp4VKesjBpZpS4hMeYLpJhNKXBb1vZvofeu66zopEywhCiV",
  "key20": "4aVE75SymHg1a11PEm3rBdEvnR5EBSXGwDoSGVQVRH7pnAAfdeQC7oGrJhfsQfUoXvcVNGbNoQd3fnWdmEoKd5gY",
  "key21": "5m3VWfbjsoeV9taUoaBLPYQzTqiCiV3BSrF8Cdzd14nKXF87ERKmDE6Jz33NLzys5cHCWw3VYJ6LnrYFnmjaidfE",
  "key22": "3oykSRvCNKaApGytJmeyMZF8L7skDmqSYZsFxtoTYq3F5W1157UyxJVyKYFjv7q7Ziq4NXEcUw4UZkEGBgiTyFGQ",
  "key23": "35xzvZxBCwqC76PEp8kCoA4WyhZ99qapB3316uHiJksfdsTLmDXq6hAE14gfyM1dpBVypizM78okKf4wLr19BP8r",
  "key24": "3ApYNFrpN9vmKnE6VFC21WQc3imiXqe72QUcESPybZTPVooWwT21KZiDH3eBKsk1qx2HPB4AhUp1wZj14KwZm9t5",
  "key25": "HksyymviSGgQj1dJmUxjYCeN6j1Bsm6jZ6KcG377YNEJipKSX35J4ubS3WnaE86kitJWYc4Nhw4mCRxS2B77euG",
  "key26": "2V7JY8hJW82NS46391nc4r5rGQo9XfRN5Awkro2CX2LRUHCvCGrFhUouc342rNmaQGV1i7KNszm4MjUSksNY4Dza",
  "key27": "3D2yCTTayvjPrS7oY9yVCmnx7BUATmyn8oMuW9NDjZ3j1o2aEArHAUeYx9qZYerGVJssnQoqf9uAX27T85cEDg4Q",
  "key28": "3skPZG2y3D2j3AqcJagH8YDf6fJcFNaVGqnwqv5gh9SFvg9myYZykBwP7ZYzwHHV88K4EPrJThjs2NqyFyhj1Q26",
  "key29": "659dpuMY48AYyZQAspNpkSm8ttp1Xjx7g38mTSUFyTiVobFrqqSfAZEH9kZ6iEncqjgBjGtpW4mdpbxszqDXVeBq",
  "key30": "B3mcGzQdcA7VKBCQjLgLHRva8Y9FT1peoWoobiifPC1C9RYA8LjMaA7jXWXiCkiXcwTq8b9KXoqjSH1tcRuM9vG",
  "key31": "5JxDHjWnD88t7qQiLck8Sa2e5ZWEYvahBNT5jtV6Rsqv1phWYvAScS2dbbFGggub2WcErB2b6y4BSoBK9yMEpL1i",
  "key32": "4CJ149o5cQ4w2gWXX6TtXLuWiAHfDyffZAWTzpV7GbbYVMnMSnfLMdmf3c6twMkQkvRphXRNAgwT3oBs3sAP9mCz",
  "key33": "2x7HrnUxnxZ6ZMedPQRkXrpi2q5MkLUggo7GQigsh6pnXfTi7vvjxSWfjr4ycL2EcghwQUmG1pEgrBckcscbUyCN",
  "key34": "5WtwJWRQgY5HvWTyLxrivesvSrcL2ckwFZLHEq28fzrEkUfuTXoav3CQvqgiYQXUfvosBZNDd8U5aV2RSUuQVsCv",
  "key35": "4hSmnBfdAPR74wKmcvXynBwn2q5j4wGhTn5ghXgyXLjmGjw4Bt18MbRTMNqdWnqGaku9xACFZHD3k7CbqYS2X9Nn",
  "key36": "3278U7URzVuRvULZABR6JvJ5pCrHFW34cuz6fbRjzfiTyPJ6MNuTSeuo5k68bzng7qf3bdqqV7sqFATQ6MhpmPJR",
  "key37": "Cs36LELR6kgFyoki1heA3dVehkvdFH6B2ox42jyXyok6QT1dAZhq4st9wTNHjy8V4khVPbpGavsGcfEhMPgdkN3",
  "key38": "2H8E9K9NAXQRBFxnHhk4vYeokB34goXVfo9SFwN3otYR4bfzYt451f3ZaEWaW84hdZFsPNZkTPthnFKr4bKQu5yN",
  "key39": "3Zs2eJpA46R9JwgQY6pNYffmVb4WmyCKR3HsZcKtEurSFfi9CiZ1vPyAfA35uRPrUVJdf2TcFvMe4USEJFF6Vyse"
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
