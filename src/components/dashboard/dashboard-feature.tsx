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
    "3NASBR5Nq559bWE8gW6EGp95Xq3K2K7Bp6XYryzTGKw1FuMjxf9sHHAu8XTcatXmxsaxqVzncSGmysXVdHvUQgJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WVNZx9LSvmR8fk5eWxVMdViRnF4fB5fLpccrciWgafPdSTg2dbfsUE26HascqGzyjgLDK6RjTMfAtm8YVabbDLK",
  "key1": "2v8csACcKJttJKigXqGZRbuAdZShuDc1RWxo7Lm4uvusHtHKjGFaxBgQNCXUGiSPkkB5CvV9rVFzdSFnLsf62gno",
  "key2": "2SQwp89KkDTohavwMi8FqRiWW3ZAFfmzXP8iV9yE9oEovM6A4Q46EVMPoAKkUWWWYkgUafFJarQaGodztVAuQrFd",
  "key3": "k6p2S9M4j9tCHQrkKE6mG4AvFnXCxLwNifG8NfctzKtaSXsuNhfLAdthKDUm5PkDiTS6d2AdS4Rsp6KtYPzxuGk",
  "key4": "zaAi9scE9VcmUq3uNNuuMN5DwQQLHNfS1CZpMWER94cgFuosv78vySutxQHuSi5gZMGjMzz3V5WvsLsJhJUA6PL",
  "key5": "j7mgGdPK69H9JkkPuxrf99xB9jeNEAQmXvFpg6JMaefYHKVfcLBcnVzTJGv11EPqbSh21N3fJrQDnWYeZSswzMv",
  "key6": "dcu6s9Pfr9Q1RBj6LCWrFjMbAMjjJZDvrp7J16G5MakEWpcyfWBKniUxzNKD25yzFitf2dK8xX8MPmprUvqNsmr",
  "key7": "65MjtP8VAPZBtLLBV7i5UYtWMZDKgcu1caCMj3yQT9xMjugHMEmsB4MYAXeXkbYae3pU4Bt3pYXQviG9NoJTzx3V",
  "key8": "3vMLr3bTvwJdn4vzzJTj5Mi4AvWMeNGS4GkwjtqCou3qP3iqiinhPakMpkf9pZZ6KdZrDy1oMrmscXbYNbt9dyD2",
  "key9": "5dVtiNt6U869jJiEuzrdAb1LyQsMGP6okZJfrw2CSHhxin12vjpbpjYYdu7EKTYiRT3QxxXs2VtPHyMKWiG5Zimv",
  "key10": "e38rhhy5JQ5wC94bTJugWPbrc6zbkzS6XM7bSHMyCBhRQ8J1cvckrvtNH2gABcVxVuU2CrA5rZqMkDETqE5f5pW",
  "key11": "57hpUTibwiQYfwz7k44vJZNdR3jzDZ9Jq2VxSEezadrQXYcqeCccTVcDvWoE8t1ACSJija22sTfEjJKviJXe5fWA",
  "key12": "4jYgicZUQKAa9cspwB73mLfWQzpXezkS9mh9byLwLueN9qXEnYznkr6nQKypqzB8BeLXrB9PdmSdkR3z5jzHEvkG",
  "key13": "3JGcV5v95mdDWWQf1DRj9KrAHqvz6p8ZYCcSgiTjZHGFqhRHC3Yim7EigHjKP3UHcG63vjovbFZPn5nNerdq7Xuz",
  "key14": "2DgsepNFMriXWMvPdvkfzKDj11oSKVNFyAJJSQbzPjugN6mV5dkcj3D1ACt9ZTRS4pP71QVWgAhznKxwtA3qBzsk",
  "key15": "5TpYRaJg3JCJFX3arYeYpJ7b8AiE56ADe3aGjYTotsFpCgjNpy1nTCos43QAgTZ4KkaLEAuQUmzVqzC9KjHrs5zB",
  "key16": "2sJpB74mBuq9hZYyAcELFgpVZxtjhFuvFmE9Xk3P1Yk8oU4udmELFb28w7YgSB3wMgGXMs3CyxrdhmbvD7RxeAn7",
  "key17": "4SzRJZAsRD3CeJ7wE2BvebmfXHHpNaEoxbetJN6XqnXrr4ntpv3AP1XqPMVgLDecYmSgjJYaaH4cQUsaEnoRjauD",
  "key18": "2BsKrK6LCvpMEooSqVEMxgyEWbirsNpqZc6sxefCgdJkNqt4fk5bKKNmrKw2CBRRJRZ6SoSRHf3ycYJ6BRoPvxrs",
  "key19": "3pez74UCoTbNEnGhSkb3DudLGZ7otQk5eaHuickFmUpJ4Df6nFaAxatDEXJ9XoZqSYsMZg1AakC1L1A6N24Fq7V9",
  "key20": "49ziC9D8vXjEUmnLjeHk75K9ygojjgf8hk6nYc5pnREqSgiaTfj2Bj5bmqBmr52suiMx2g6nvNMzst6aLi3ug8Jo",
  "key21": "4xkeoQTVUQzjAXDs8gfeKD4DkHKfqa3cf9SE2NHrdm3bbw6b6j7rXDxyVZXYE8tV5miu3mJ948nRR4WMf7hWDJp",
  "key22": "4Ybyze1oDmmYvaFewHe4TMzdumt8hQH8DS7MrSTSEV4Hnpc39AsrTwDSfj1UrBxBUPQjzUsXwCnD181Q8sTtjN1f",
  "key23": "2o3nkcxCrbwSzZAEh92oYZvLDREEx4hYvXDXjwBf5wLAvau2QoEDFimY2oGpWDEMsZkBwo78wnmhp4M9FDa5LRiJ",
  "key24": "48aYxmd61EdLZqdfFwMoXe2g8XgxBpxjuv78NKxwBMZeh4tf9FferxBUwDUUk9bpXYJ2gCoPHGt5KrtSiGwxLmRk",
  "key25": "bNQC8UeTssP6xL1SAywpqbVShx5PU6Ra5TAP5DuN6DcjWetdB9o8Ky5jPxbYVZ6nqT6RfSnMfVadTvL7zZaVH6f",
  "key26": "2KhjYMd8Ktk5RXtJtPGXzDovnxJdNmVhrou8AYa4dooCkKHiuekftCxDMZTno7oQnrGRseBBUWuu1ojwNAeWVg3S",
  "key27": "CZALGYPMnB14RvaQiHdH6VDU2uVabhhU9bFQh8y2je2fyVWMwX93SdikJxnKcgLGXs6rMyh1Ey8onNaYj2U17aH",
  "key28": "qVRFhycYHS7TNj7nzp3yzavT1V9CMg15LJcSa4fMcn3RGHydQaeESjgLXvraDHJAtTWxE3FzsK4aMv3N9DSpUML",
  "key29": "DwdrkZcZz7xmWveYTqvDXGiZtu73H6xsWn5tyFqeCenXu3ofjcyyqXnnsYkX3CD91BTf8grY2ps8qWdyyb3R4ek",
  "key30": "5UjruNay9QMHoQP5rnZ59YNnnkEjPDhP6GGzcbjkbNoGXkewS2wf4FZjEBpvCno9jzGYYrCJKbAmSQTFhz9quA1k",
  "key31": "3J5XHEiz5ECddPJfxbzpZUkVpAegMRXPajMhEPNxz9BhAY6sE2MLWrc23ytmd4KxEezjZfsBbuNxGYhXbUfobeCG"
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
