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
    "5EzFBzqLEpRbVkRwezA8cCPJY2g11e2XHJyyaQ2MuBhAiXS351nvpiQwYvqU6CErNtTfULfmPXte8T9d9dRJ5KQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PVYAZTUeJod6cXh9PuZqjTNf8ECLSGHBkwU17WBMV1WN2AFz4vjYc6s654eSq9ZubRAw1is7LSqejmyyhV3z8xw",
  "key1": "4bW4d1LVRRXXY6NrAqGSbNmciHda3K53o5jGaWci8Msk9KW1pN4aq2eFMnUmtwLBHoG7xHeDMMq5vaVAScGnjJG9",
  "key2": "5DSiR9jGy48111U3EEAKR5mBrzZyphBFy4XbF6a9AY7HKuScPtDhsGdRA4EPZERrtndbnAnjGN13N3aYrS2BAmRJ",
  "key3": "5wejYdeKW1DPeTsM9BeKyaLYpjUzr4MiNbWbpwxhu3PiMqfRbDxzb71rUerAvYYME5XYMWbQ4MxAhG2xpe9LWmjr",
  "key4": "5HLypEJx4UiXjmqQvWLWeqmMWudYYZSxYK8ZRq3BA486JVzQXYMsxWP8YxCsWwqFrhNiaCGPms9BKjr1WDapyycw",
  "key5": "3K44cPBW2kpUzzYKQwsxSPiSLMuAt69pm5DrT6mpM1DcWmvFuKBJQpmRsnRXxhJNbcnVmsKZTCbLB7xnC464Qp7",
  "key6": "3pQ6Psv2tVGWyR9of188Fijoye9nkWh5n3JNsZoJBQHug89ShRPhf9deG8BLhUVMjF6xPfZnpw2DEL86so5N93yv",
  "key7": "2zrzHjGbqjLtiFwYJDLMrqfwWkXfGCLygfkEsdoH5NDhRXe5vfgwoSadFXnqh5E64t8PbfaCVj8pY8gZ23bZJPhF",
  "key8": "5HiDhppHokZt1QQqYVnc8s6as6As3VevCvZ4ZXtDQJFoxkzpCpMquP1vCnwCvNqg9iScigNwmLRxWmSxce7BHrqN",
  "key9": "4GPYYVr6RyvT85WkaNjTnmquMqux6KyugwwPrxfoeBTnFJieRkMgY8RmNzX6JD4qkK3cztMkmSuwL5cnoDPysTWY",
  "key10": "3fUW2vGBAEJYC7TCWvHpadEykfCWgWA6xZkgtqLXxykgUvjvEpkVJnzu829aEo1HfkY4EgxeqhYSups1zPeMvdGr",
  "key11": "5nGfQJEMkejnbKr9i1zkm5XFv84bpgBx3AtPrfn1uyyNuKLg79GjTxG92MNVVVs8X4DiRZtCKskWeZXcUwHFbEhp",
  "key12": "4GpJ9snR6k2uNh39HoMYUNWxNWPyuTJhojerdxx6ta33Cimp5SBUKQB6ZotCsgMQTSCi9mQ71Da369LPsgTDLM9o",
  "key13": "wEs48cvyRtvf5Vh9aKTgn959bpWnJMebkhbtnnq3BEr2RpiEMpR1NPCYGnBgs939PVMG69FeWk2gztyhj6YGTHD",
  "key14": "3qVNWAHTxMANGzPuRe9KwtoZNiNTL4G4unUpiZ3bByDdiwocChiximcB7YTk6ZNbQRarxYXQRPHSCAZN1nYySD9K",
  "key15": "5yUHJmDyNXAe5pAod8BofJc7jJyQhtf3HaLjtVarM9m8bFJoKv6gJ26qPuMNQPSxQFYUBzqnpJJ1r3vArpUMfiBh",
  "key16": "5fgVYohRFVHJF6kXnEuJhzvWt7WsPewHCJGutBd75m78xzRMeZKUuju1iGVW8cwu9sr28rU53ogFZK4Y1qQbkL1p",
  "key17": "2MDefiMX6gi4etue6ZegoFexks9jGZ3A172JggPFzBnkrqB4hEZkHGK7oRv4afspjzNiD18sigzfGNSm5Ui85PE",
  "key18": "2u558N1L7XfvnwJpBPugBXQh1hpGeLye6Mshhx9ERWeK7E4hK23GkY8mkLgiYvEAzuFu8hUMGthFTChwkc8pH71r",
  "key19": "2gFLC6P47jhc82Lhmx7jTdHKY2ZY4hupyk5VvCoa4dDAspyzbiM8nHgASR9A2o9jxHZ63kuVyjMV9NxfScuyQrGP",
  "key20": "2oAh1DsZ9THFrN9sW9KGcrx65bQRV9LEJrVmN7CMWnhppm54ZwGEjzmaQXCVi6kTN2kfFz42S5KBrVhK6xCYBiXj",
  "key21": "2Rh8wc828ghm3T5qLfAfDG6uyPW9yCkAfpfjQZpqLMbNk389JDNLvGKUixyEZmehG9acUivp8NdczCLTLqFP79if",
  "key22": "4FvoYebbekDFZjxSqAhFNUo4X5vmA3STaru1FCMgc8Xu5jFxYWN1RQcvcfj7N7xj25PLGfbSQM8Jrod15sgdGisz",
  "key23": "RNq6TmLPZZLU2m3K54C2syckzFCNRZDPEkaMQJKa4nn3D8TMKwL5igmfC2scaGpxvUnyhcCwJcwb4rcdT2eNDE8",
  "key24": "dogc4yujT6pwuFMVKia4C5WCxEb8ecFgfXrFruUsPZqEsNqC9ixFu7bgHKMLPr1QtcCMQTD8B5C8RVjMcmzHRmD",
  "key25": "4opJDVwpXnp67qsAJTs8raeF7Z1ZndRHe5CajPdbwd47xnvtvYL6VuLHPUqZbxqFRT7zBSi1ZH9LVndesPnEomc4",
  "key26": "5fQ2gFwoihBugsmxeFYL11mXCTinW7qQoLKL5dUQK5RFBYpYCF7KnsjHnyehP46hCGu3oq2DtPAc9aYF9ZhSkn2x"
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
