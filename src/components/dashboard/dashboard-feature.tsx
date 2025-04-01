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
    "3F64jwPBMncqFKBks5rviQVb1qbYFNnEvoywmXzRsCBRBqMJVYA8mwRPp25tiZAmSvdh13E5futEcxcBTRo7yi6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZM4RvXS34o9xTXcFnDwNwQndJ8jXgkLEpKDKk2DPBzMvjci2dDaYx5goMES77Cq5Gr2A5YAYDfjfHtZMBuT8iWJ",
  "key1": "5nP43M2TMm1wVD3udDKoFMRaj72F6GUqTSbmSeVH5J1eGhbLnLRVGPAiSiV3cbN45dTsRJkAPkM5q4aPN7B4wsnz",
  "key2": "2UEJ9ZBkfXx2L7xCHWxc3HNtvokJbF5vF6qEuMmKA7V2mWHkYyMaSb5xqC9JhcKcsLdjqbNvC1iEHU3MhMBmcV4U",
  "key3": "5fPNAVCk8jroL79tTG4mhwHCVytGaWu3SuNq5Ktj92v5o9mGqeP92ZHRxrsb1XTXDcfkZ4wpwXQZCesqQiCrabuc",
  "key4": "5WhPi57yBDPLscZhaiypDxpGD8LQMhgJnfkMnXUdcQWkVLKPWger2zwHhawUQAGTJpmAtPNF6vYpsD36sHVjy7kD",
  "key5": "PSJnxVKdGx4Vj7FT4PGa4fDjMfKKW186N9iq5p3m5WC6tT5bNMFEHyAHBS9zHDbu8ML5VyMmHhjGD6kvscggXWX",
  "key6": "k2YpTUDfuoCfCFT1dgFvy8SwyT21nsbXhU3aoJnGGsC1B5SJooz6vSFTft9pUboVKgfFyDE4W5mp8xvPPZKXc8m",
  "key7": "5UV7867rEEofoD9BsgRFJ3cJwB5DiftYrY3KYGU7NSZjN7jjS9WaTRN9YXw3dzq1Gk9Q2KD7kny91zSUkUoGWb9n",
  "key8": "62p4xKJYVTg2wr8C2EiZTxmeWCJFLb4xfG6MFYztr8673g8nu1yJXaT9ZHfiNu6wczRADp3nVajE7Ls3dUDwqyUQ",
  "key9": "4hHpMUAv2qbYjigA8VWxQ1sF7vthoXybXe6U5vDwgWyCqR7AVQejzAKGAUNThKxtx3UacLauCpAk2EcW7rBCQGqE",
  "key10": "5qvAX29TetgVrJ83QyicVSt4K1nD8UheHFJ976pYLNkuMLfBXKMLp3hSp2SDZvrZXwb5DKrYxY7MKUURcvhrhrnE",
  "key11": "2Yq8BwhgPCUFxPkVzYrQLzRckvZfsyM34s1whrfUzDc4vgRM88Pn5Ci6hqS2BSGU4inw9vV23UJduqw86Q5m7oEG",
  "key12": "4C6CnKJU74SLQWkZ4TFXjg9wkxHEfNw6CiFXwin6J8ahUYA2dzib1XZQwyZ2BwAL9As1M58qTYF63MZ8f6yuAXgz",
  "key13": "4RpPP5CSQ5VsfZ7csLYu4JNXvJJRiqxirqsqgkN1srY6R9rQd9d6MRGpCeKG4eVco1BbM5U6Tjgamy6Wxp1D8Sc4",
  "key14": "2gahxNtBZ7PM3pQopSvuMfZbfC7fWuevcroD3VeYNXBMeJohwDwZZyRqWJPfBrVtSnEaXKBpPVbybxXf8s9cBVxs",
  "key15": "ZNSfDehaJL2Hagv4MXYXUcPT6NmcLbdt7Wc5uyLidYTh7pAwmX7A5S6PuN8uGEVT68xdVnBfGLWbXDdrHwQEmhv",
  "key16": "28nsYpE6c4ig6e7FXdS2cMTHPcZHEffHGkEmu8Do1Q8MnnGZE3wN2u16Z7AQjjJMXYzawX5oj9ULWivZ28WrWjJD",
  "key17": "56Gnant7U6GJEvUkrdu3RVVgUPmYqHxAFQetdTWPsZ9vnHXP7Jg1nxQit5zXGWmaYGKKRJmo3DCdbJnSE3GDbE7U",
  "key18": "5jzXSzL3jBsm4ddwibBP55Gi9jnbdaZmFmK7zPJJftGwzbLdVb9JRA37WAeDvSNFNatmaKTLMwTCkTxtYj5Kmffw",
  "key19": "4XeeGR5GfgwJNFkHmr95r4bgBvVoNFPStXbSgH3i7JrRXUkbcKEU94USqNKXQVZEkmvQz9SNkGZk5HCFKugrmNp7",
  "key20": "31HK26hn41NR6hQKqQrTUWgXkryMuag35sqpfNDBDwSk9cLNJEaZkydQT5bBgqM1cBeoEcrRsJCAP1ELQUC6E4TH",
  "key21": "4kr2JcrDZJY5uUL1BxCtFEAoRBhrxkH5h5yMwpxcYaP98PDGcxCnZ7SfVmc5VMu2opagYXXdS3xwS1pNsCYDDVfs",
  "key22": "2Udts4Np4h7KNoQLG5UTEsuWDwDrSazRH58TjrrWoSggqd5rfKQPQAMjdQoZpo2yt9nzdVHnGXMu1V7DFVDRJF9E",
  "key23": "4r5chzw9e5iQZrEYSiEvFTrwuXxvRnZDzyBwLVtuK4Dkf9CQgMnryb8bWd1BscgnEnS51kivcFGJEARwGyfmHx6A",
  "key24": "5UkKPK1vH7mjcQ42cCKN2t4d3mzPqveHvEj8KihtybPSzD8KNP5HndErY45XKqnPKPkoNre5DDsMYJ1KUjvp5Mf",
  "key25": "5cb3iVThCgP5745deVRMqnmBo8rhbNrMtWiELnbjw6enL9QnGqNRSggg4BiZZ83aNCoaBkfUjvQ5u2mgDqMogXrG",
  "key26": "2ucyCoqw7aMHh9Ta4MLpAzpVaDXqx66pkDzy4daG2VPigX1JMdB11Ayb88JQiUrgBv33yseKnRQ5DE2XLpUVxKbG",
  "key27": "5aARHRErxHQbvrUyfRhp1XgbEjMR4PfeoyaN23Tn1oUwDuKJYvpo1Z5B9JicsoxkFBszUW6mLBdVW422jieH52R5",
  "key28": "5zZ5pjGkM8fcnTfnAzf8gPY8xxri9UNKZiRw5TwBds7tEuxV1sv1qSGqMBRVcT11njJqEJ9pqD5Ra96jAxbD2pFA",
  "key29": "hW3jd5FRfRK3ifExkqP1328uyAxVNj1SWSt3oq59ha21EiKwBeKdYaNZQKZtw4ohKkwH2X1zidrDKkQpbLffbK3",
  "key30": "TqmYkCv3cUPbzHcR5rnh9FBwQs2yhGrANLK1wj1C2YAVv41FBHXToZ8hvF1xeF8BxCoSDCvd4ucLorsvw4jyGH9",
  "key31": "2cQdLKxckDwhooPWgRGUmMat5KJqRisw8QL9qfwSvAHeQbxrnu598mjQT4LbWVTKPt19Lztvpg4NEqeTGtuNEw3v",
  "key32": "3oMGgurvRkN87gMqcKWn2ATE29nGBKKs2eKtVcLkWw5FhERb3PuUVCuK2JRYrnLDqDC3b9pyti9GKv8jagXHC6Na",
  "key33": "5EwXT7ogFv4M3wSuDXJAfiRUtVb2sU8NpuASfW1btcchTszEL2fEBAi7uHqQnB49dJo69RHaFw6eeMRhQTMw9Mhw",
  "key34": "21EFb1WgoMRdXpmBGUvyPSoEmLKz48fs37hLpKBEnSJTiCBHRviNHecmMATSfFtACah6SxsDsTPYp1jjx6jCZbHP",
  "key35": "4CHVuYf7Z5vviNDgmEzXd1Pdxpymni7AGhmULzSuDNuWGiFbggcw8CqfTYWJaJ8JTSWJLftPZBPVkf5bXpsib7bP",
  "key36": "4zvY9zoTyo1WDhD5JKGBoTFrGtbkSxUFZBHqqkvmk7x3y52NLatnv2pz7NozapnEQVrxsKQx14Etyc3oM1L9JNBj"
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
