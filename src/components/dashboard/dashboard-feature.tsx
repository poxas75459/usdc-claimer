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
    "4Z5Pqx4r2N7FVC81fqGM5eQQnqAnqGXHWUe34kinpGdC1ysLyAVJoe5nRXoEzSzhTrXvNNr6NMmRTb6S14xCJa6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WasrZK9gEm8PnoFCHgEKMuMxDk98WdvaNuhEVML2qRYeDgQZR12PTXQxjTV5D4fUT7648mdfQSsMhejajjHNFTS",
  "key1": "411QnSQDT2sNyxHSDTEiPyPL72zMav3mZDJ6WSCChdThvnomskoaJd63XWk2fWR6SnfXEQA6av5ANJwVpS5twHKW",
  "key2": "5WSSX4R9RD4p7j5FioSGacEo5NCrEonwNF7g6rYjQNJDxqdEqF57NTjpsspVJeNTbEB52qB7tsyFN1SQvhpwDtgr",
  "key3": "KtkkajqMWJhMUyj2dhQUmhYsF7S33SGNZjLjTHxgxVV8p5n2d2T3pf8EWzo7wYvrejA28NnArusYnmNwMgfkZXW",
  "key4": "54Ya17FDPe3NVsQdPQNdGi3fCCiP7KykX1iRCXzE1cejREDDktm58HH3E9HxAdkf3k7SjSf7u1sDABz8f1yCA13F",
  "key5": "4NkaNBfFqwafdnhWwMz5QYxiQDuyRPpexExxkuejg6kCX3WUdjScVCLKcovkTPJg3czj8wauEYSz6ctXCEGXwdfw",
  "key6": "naovM9WrRpvHprCxM2WGJeiMMH3ZWGRrtCFrZzw3PChzNU4BPVTc55wkM2oFSDrqJ8tiHivo6BFqArAK5q4a6vY",
  "key7": "26fdSftrv5zQkjzyn1uiTxdnbYCJyKf2Tyy97xYvWT9DBc1SL6AjWaLDmSLvG7kQVqjBdvFJ9vYpr9upZKJPSRnw",
  "key8": "6dxow6Gnujvi7n1z37D5ELZixabNvJg4sTJbUBxnv8fcyAc1CDEw2ajy5PYm4aahsFbgLxnjdvgwAW99WjVcgFL",
  "key9": "3QkQSbP6FowQd6xpyDk2Udq5Y727Q9u6suTkpcPiBM54eU8yc9W3C1QmT3hhevd9nNZqDxbZJE73NBe4RrBZuK2f",
  "key10": "21RtiCJz8Bpw36fxe2vaEktLH5xFMJo7zTY1qzYFWJujZCyHzbdn793G7kXAPeLb8PhMLMeWm5Le2fwiVQZU9seb",
  "key11": "4MimpwBrNjbyumXAVuq1bXxjGPA6U6QZSf8YJUJUsZoDjLESta3WoT9KDiqLGLY7QAWM5s8CLyLRDgez5sLnAFTy",
  "key12": "2ztXMHhagTXrvC9A1Kawfa7giN7tUCpK3fz7fHTXa7mqvbnhR2kcoRUzukLEX9uTnknpTYT1Wr5MD2MAx57FFt7J",
  "key13": "rDCKyLVxHxNQaZoh9EMe4jkgHS6MosG1ZfBbMamDQT9PUyRZSgwPBqYLPYy9yTk6Ra6gUBpPHUd9QrCaFnxDDPA",
  "key14": "3Fu5A2cXqF2LknHZ19HPjZAGadGb83mqrJj1VK9t9mi3ZJmRRZGS5e6G7MhaytjVzVD8rsvi1PgPKBMr1DChGpBS",
  "key15": "3hcXahzE3ffmXQJZtD2hKVmM7r19tTDPT3oTPQQN6TPm6ZmDTDWUgQa4KD2TDJzAkxZKeS85jTzfYT5AtdSw82qb",
  "key16": "3tnmqYrqSj3oPoEB6gghtRFdZABcain6a6a95zGQFUyVr2eAcRHWga4gjKBB9So5Ad2G8g1azN5g4Gmq5BBvLHd5",
  "key17": "3yBQRKAVcY9DE2sfD4stBNWfPpedrZiaTTq5kudjNzRSeX5m7WzVHgnaNpu6Awydkj2fuTVcfxZRU6VttPfE84tR",
  "key18": "21FdQogV1ajkji3V4rXsVwD4aCY75g47LfAWMP91kukDqpnyTX8jJR2yT4ZXpCPzECWTqusr7xAVX7M6CY73G3Ae",
  "key19": "3LTvGBdfdV4BBVJWkgKLuxMxAG69iQVdWsVw5nMfcZ9erj8i8uH9EhoAgKP6x8VJN7XDeusAG4uupgk1rNXSZJT7",
  "key20": "3rp1rG7FrNYmvUomsAda498WXYjv51pD2eJppNQf3gcdiccQvehWqkCGkDaUPdT6xXcm8vYbknvhYTWM6GtRKHkv",
  "key21": "4WLxTvjg67guaDPMcqprSvKFWxCEE4SdwRSZXNaSkF2SPfKw88nKEaNXieSM9fcKzaDbE4AW2uWhe7PZhV9gf1Dw",
  "key22": "2XvNwBcArQ276poF6GYU63MCzDSeqKbqrdQPNui3FYPcKxKmfqx9kqkmN6Lw7WqSp2acN9kXhdqEbpWin7K4L2Fj",
  "key23": "3i6AV6cBdK88WJbGyYgv4YgZeDM9MCxuhrPGaHo6nJF3RyEArPLMCoMuQyezJ2CpLbhnTYmQpRnJVZxzVwgMrqDv",
  "key24": "WT4hkBdz7Lpt6nuepn4V9acq4n5g6tpEGYDBR5UvsQtrjCt2537Z8S5P7yR5txMUdmb8CYQA4fuB8iAmxg4AZdJ",
  "key25": "4k4gmcV9XvsEjpYcAWpZeWsSD8sM4KkF9JaoVzvzoVefuxyxxEkjwnUQZjx23LsVwCXPhjL3iR4UTAM6Zm3unnWY",
  "key26": "sb6RpAmigMP6Puz6S7NxuVYXnQeU3c8rfpMM3z31zwKt3rZfCgC7CLgysXw78q52NMzVkPAo45ZvKCZiB45PCwz",
  "key27": "3WJJftG5WCnqdwZuGDtFvbim9K8LBsbd95iX4ivD1aL4pdSDoNjZAsKHbxxaHDxL65Tx2recmRkxFNz7YW95amdo",
  "key28": "Cm8arGwZLEwCJ3KQhaDzJJAVNyoTjPfH4tkAYdE28zNmc9hThb5jGGRX4VQiFoRTdFSfpX6WwXMdRJuqiYN8YRq",
  "key29": "4bNTYNASWorCAVtoPix1TgFV7Q58MVZ35r3dWtAWBDWQpGkfhZoYAQ1ksotWTm36UCBURjwW5Ydw3WvJdpu71RtP",
  "key30": "3wsvU6wsxHYcXXW4UD4L43w8TLeAiR1uK5XkNkURHDoahtCJHyzTNKmwqdXiKoU2fFuxd2xw8DFFYsEQfvzCqBfF",
  "key31": "22q3z5kWJdf66PYcJF7Hzrq2Ljwo9iRKyEpKAf5tZwgKPmcVgD5EBvVnDkccy13cdpnwbcpwhy9rEJx2uR81t9P4",
  "key32": "4Q91Js96wApgzc1xRGiW5BypaY5133fZgyqaR2XAoEYE2AT9jZxe3xt2toJTagMckVZzASkZEjHbEMdMUJKrJmnE",
  "key33": "DaR6YdXsR5ZFC463eQRtgNNs2KYauT4qxXzExW5uhYdtPNp9CDEosNAKbQq8Df4ADHBgucL6ynnggaXwakp5oHr",
  "key34": "62giDN3XXLjtznroiS8e4FGaN5ZWkMnfkKYg6k7oFHW7VgozjRuPSzRzhKW5zWCpWmN2EwRQeYZPwFgcMNzdDwki",
  "key35": "57Wk1xobUZTDLxG8qNPYSiQaqfYTJFZcLJCStPKfU7peCypcR12GGfe9Ad4dAwehSrv5KZcCqnRYndEc8KA2dyfb"
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
