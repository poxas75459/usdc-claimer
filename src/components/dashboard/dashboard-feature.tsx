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
    "vumbxrnVrGafewNQHc6upJJp4nhYyAF8iYarQAPtm2HaKyWqWLVbSeatBMkBX5vGz6wQFPVtFoeHAh4ASrac6V2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGxypipJZpUEPbo3BNaK9pWo5drmPrhzACQwGMRwBMqFGzMVWwuZesybfHY72yQJwEgEqRxhcmk56UjPo5B2dCp",
  "key1": "2FygkPkedk6aWjyGpRGPNHjxa4HHtWXYp2bWipiggc9RS4f6KkGkgJdj4oD4YBqJHunrb9SGovid82dvgmxZ2HpY",
  "key2": "4DJHAMBJpCiP1Lcg4YYw2p2arwBppd8y41AwnbRYiJbRm5FgWXYPJWZcaemZBqsT5qnA9qGxP5kUnY7tgzxAmk4u",
  "key3": "5Wnd4a6eXQSx6h4C1j5v4yT9Hpe5V7LbyrFQpRyKGQVVnqzQ3pUKgUtjpVPiPSGtz2SsgTUG5XMt6dmjVML8HmWV",
  "key4": "2WhS5wjrSLsebm2SPHShgHuEcxMeoZUs5zUgVi16mAxEmi1Gj5cQtwxEUCY7BXPWN7oSuK5RL4sZjhwGvZ7VGGMB",
  "key5": "2XyPvtHvc9C5KEi9xL3uHaC4RkwbCoxWT6hQKWcQdxrRdxfKo5fhDUejcdNb83AWJXKrLDkWaiAjnjNfri39Uuav",
  "key6": "YnLt5oQv29svPwnbRHWmWTsTLkH8jpQzmsbcuRig7xqCesYGMqegMLrdiwLsYSAqC8xGCiHvFCntowvu3MEsioN",
  "key7": "2zFbS4ABTGDoGBv4gcuChrwiwxbhH4g9UTMHSo8N9H9nmHbcEsAs6Ht5YVN8H9a3vcfaT7wKPiowcxP1hcLkawjn",
  "key8": "4CQqk87Rsah8HdBHuUkAH1WEvMvMP2euMFgHpDDvQMiVrhc4xb1L3QHg89bbZQhRHsecf34RXFXF9q9T29wv9WG5",
  "key9": "3YK5sEJ7b4EhwFUfUUCNPHCeAzym83yMQ8EGLoFiu3wehSWmJBiDg5uKAdqnPsHFED72stEMGaFT2mfk5Pp7GMuj",
  "key10": "26DoFAYAZdArq6TMiTdv4yWaLj9RtrELpc6RfCEm5kKqZYyCPj91QifQXXBcvYk8S44ZUGPwwL86QwznC9AvHZrU",
  "key11": "3NU2nJjgfbwVjvNB13SpctfAx84xXXdxokSRVcQWdjcYwi466k3xkE2S6pRXeMSVhtbWb1G2L94nw3saijRdyejF",
  "key12": "2xqkMpQyM8jYo4b6XzcoExxHxfcZcM4T11B8dAdoizTz1NQpBpRnds5mBqaMcibTYGcQyUFuyhut5tUjMU2FmvnB",
  "key13": "4T7YfmYs1AYLQKVgmtDvwScTPVEBxrGcpRAinGiSWpRJURvb4vCKqQbavg5xjzFGNzUeoBKvsaXDPDn1THfubXPY",
  "key14": "3Ed2gzXJJr5ZM3Hvyx5V426dyi7ktARdvFcv8TyrDC2Nd6bWWHkdbwwg1fkcM7CHhUwB6Z2ND6GnM9rYUaEbMDFH",
  "key15": "3NzMnpSfn7ZyjK6F9dhFaJWKHGfz8bCczu7And4g5NQ9agZLov8eCuP3GRr4y8pwpsDq8M9KCKwA8hSj1jUk7oi4",
  "key16": "2zA9A4Nhq2RSaY4Ze9aqNTKMcBNZDU4y4EnvJ3tenaZWhp3JAV931qot9VNtTTrSQYza3D7zs4n9bL3Ua8pYU7K2",
  "key17": "3TvQLkcdfTFekBiaxmxz87biSo66ch6xRDtXv4smrMKWUA86VubAKJ6VWcW8FofWHa9LE3AzXsZeWLUCDqoVz1C1",
  "key18": "2huhcYczZbZPd6e85DBCrVWzo6yQDcgPrNudH2Tsk8meyvBHBzeJVohnyLxjMEanfd2J9GsgJ4BpQNZSXRLXHw6p",
  "key19": "3nMEDdq28FXSc8FexhwmLXMeN3cBYjXB81kt3dScW49HKb3zKfrDjC1CWKTWkmH6XxFJ4PSoqrW6jvFJngXgVxWW",
  "key20": "37DEAzyeNXuF271bnRWer65yrvqnb7tNNxt5D9J3hJPtxVMudK5jsghgtXkzVUbE7nyg5xgevjgRaBwnBnzSE8K4",
  "key21": "5jfN9waHVKcKHGCaJTQ9xxpvTBVyikCzzcSkEpF4EDhBfkD9VohCwPvfpwC2AenB8LP9u7P5XY2xqqN3eqpSqwWu",
  "key22": "4BA83b5Z1DgnAWitQYwHu26TdHMUntCMCFXkqo3CVvSXbyVHQJL58zxiFchDsDwZaKxZ5ubGcfiGu2AQvr1ijELQ",
  "key23": "n3hcgkUtciA8z6y2BEifjkxvzVku43xyumUvrp2YvYt7pfwgL9oeQ9rpJjKKD9YivZM6TUFUBjdZFYLaiZPpt3p",
  "key24": "2p8ssU8aRHsbaVPrBZTWTLSPtmuz4U8RZovVfv6agWZKGHvepX4n1q9cY8tjR17oQYTKi3QCmxo9LndLCLS4HxBv",
  "key25": "3WfuWrDVtFJ4Mm242ihMmeF3b2Dd4vq58pe4iAemxWXzMhW4ejp7CC8jbW66iCHPuzbAJq1cptJhsLLiQQBWM57S",
  "key26": "2i3DADnXG2K9VEnDurR6ujhRB4ss8CGXhePryfxqKXCZWX6rLFbBcuLLeDKqrDtnzcSfGpLvjbMiyqyQ6fpsKTKm",
  "key27": "5d54FfqBnob2Rxy6sMfLA2JpNLTdDKYdP5sis5x8k3k6DG6DUHUPmKsKX9YPwxYj2tYmVE7Cn98SMoQSZYtxk2sD",
  "key28": "uGctX7ThYaEZfwV7bPfW7MHMThwoJM7ZVaBo4GJSbBMmQ59hHxBcNVY53gsdzptQnUqEPAUVz6EvRYpDQhhoJf6",
  "key29": "58ZW2hdyDpFPMYpbQBgpvAoJkCDpj8UszHT3sNXEaziu2WfuBy4L5EsSinRBMHGViXVt7q2dLCc93C8gwHqPVJWL",
  "key30": "3q2b2mtnuJyzAGQ4BR9gx2HBQjsPkFAu2Lu7oJ5gS4XsmbwDRrRqNVj8BmWd6poLRBXqU9nxLZUzF1bhARqgip8f",
  "key31": "2GTmS6jvE2xR2ueSRygB7y53i61Bzo3PJgVcsuXYpTeu6sJKiaGGrbdfFCWwNTwVKJtWGynnjMwy6stBS1TKqoxq",
  "key32": "4gGXEyndRDguhXyEfvVT1xUDWpRhfFTKu989hHZ8aMqTg79PGhS2st7ZKkAPLUdPuFaQtCbeuMi44S68557evRTB",
  "key33": "4BEnVBWU9d6xvrZoMfXBeqhwSzdSDppjNZK4PPJuUhT2CDvozh2xD7eGUcSNftxSHSy1k5eTrkdp6aU5gp9r4Knn",
  "key34": "wpiNcAij7XC4P8sFQh1G4xcJkqWGcxRFF7d6CT8QmKxh51pCoJNKZc1ZXQpCQ12E5qNgVVWoappXgGBuq5UAckz",
  "key35": "21F4QbnRZ4YqAYBjxCqbxqhfW3jA1uMHRyxjLuP433rj2ZdmDEur3VMR4TWTnpaHW7RG8777h2ff7vRgH88F28qL",
  "key36": "4Wq5G1pPjNjb6sZjkzg2dKGkpnbUq2EadxN8NRTJFKjnwLKu6wiLfdK4ySRc2DYWfmxx1dyfR4XhS4dLGmSAZeNU",
  "key37": "24JCCHzN1kLFVFmBdAyPWi3Yf56Ss5wazZ7zuwiVRMKHvP1XUvAvMyxpTjCjZcw5VPx13SMEKz6ZARoXJPtGsiYJ",
  "key38": "5ggbFT38fRaMmkHbZ6hTWgYYEqZGDYLeCW33WXduxJ6EybTzpehHgohcVQaW7WdP67gxWW9tgE4V85rpChfueBmX"
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
