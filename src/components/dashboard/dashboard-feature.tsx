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
    "3oJr17LQB1EtpxD6wzX5ZrRtQSPsCUHHAFpz8W767F9HU8AERMZf5xeu2g4L7UYiVzTpbMNFX5kHGtfbknDL5bt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fv7Mpk3nDgqL7zwLJF6CSBYa6rKoZ1Wi6GdADbbxPwPSJ5dfqbJUgaQr8sF1WAdZQEmK5wPkQfmsZtEPnWudQds",
  "key1": "411jSsnU38YQzVnL4xFLQ9RpJhKe2t5Yyh9T7q18qPEZ4WKWnHfnpaWAE3j9sZDiEfjHDDJCZ1uMznUZ2emCaZM7",
  "key2": "2dcRjKyBzbDJtpAZKBZeZNF7cXu9hZKTJYN5ExPVJPKztZHjKmApJJaCWN5qiEupnPveaugYdbPKVy3ViiHXSYHj",
  "key3": "2SfVNQfVGEzs8eEGkt71qNqTB6EmAD7EAFiqJw3usJrZsWgad2p3nfMoGSC1NUydixHA1GFG9qvxLUP3mSHcGitY",
  "key4": "fEn1nqvR8Z4uGdjr2bvmKUdNSq5E1wXyW5wjFxreDy7KVUwhWGQAdB7dWXKRYJtjD9PMFHUuQse3aPmJ2H8Dkgt",
  "key5": "3Y1QGf7kEWSA2ViQBuxsDu2jL1qKS65AubB1FTgXHASQ2YHAYtCKDY2AgKcr5J7BrPQm7KgjVnvPDpGLQVS1BAnj",
  "key6": "4wpwteYsZ1jovvJRB73ktGRBSfVJK49waHTVm2zK7RKF7kW8oDgbMvPbza8q8Avu8e3sjzc3hnhUcG6cn56F3QbZ",
  "key7": "o2xK4DTQ7ggUuwWmLDewidiQ95i2WNvdvNfYjXEpdoNMbuPjRTCXr4dF4iyvg16TQP2SbhF5oDZFKM49tSDFSoW",
  "key8": "5qRy1aNweA1VeXKZ4GtdCFBh5oMDs7C5PrDXofPCLpp9LzVsN9rK4TceogCZZ2WUgW19DZCzRVQoRHKbZsavTnWd",
  "key9": "64X6SUu6Etq5nRgd724cuVyVr64ccxg9XRjkcew67F8YgWLHQ8r5CkxA83G8eXsXVNrePRMMvx8iBE18EufpQLRp",
  "key10": "eNrcFqWEBrNF5BjGn7BePVvkW83MUS1yRZQLUzLsST6QAnk7JW1g86MhpAiC3vbJwxFQfLWCAaMBphGMzEZdn6u",
  "key11": "3P1nYe9dZE1QgMuKhqYRfkTbX6D5YRLNJ7Hz9ubZbBuekpyfQwyeLkKynZuZCrDBfNbsb15wi3iYP95SWYvoFxYC",
  "key12": "481gyxgCoci4ApPW1PkDXfntL9C2VG9Q7PQ3qbjDWrKU1xEoN4zPNpyvpo5o4XMX8C1oJ7eVMoksdFbWAKpaztQA",
  "key13": "5A3UJvu3gFdTmZecwP85SRDPxhrimnZX24QqggpJpBmkngGM9Ye5AuWgehVPfFZa2d5WSs7dM9RwVwYvYp7tHspu",
  "key14": "4DjzzmudkJchP1g3fjcjYucvvzQADWD62rMpr6jmoox9CijMepo4HZxQGZnSstMzSqVNd7zue7WzsMX7ZiYoSFt",
  "key15": "2T5V3autBNCNrGjzKrCdpDHuMcTPcfXSzRXSoT27oJii2sARQzKRZkAcBUbXptm77uYjnZEDTsE49fv9KzcSmC6K",
  "key16": "4pKgvBBuBtRLPN83btpyPyYaK6JQQucheqPQBANoUQ3DkSZouJzeSwGhXju8NABJeba4aVDMhz9GkiC4gcozog3C",
  "key17": "UAzsn6U2N6QrmdcJ7mXW61f967rKmXNFsXsWMZDCutNiPN32PEgMEhzwyueMz4PnnMPXvc2mBPF978adnJeBvfL",
  "key18": "5vmuAKc6EU9tgBoemttyQeCxvcZQhqN1pvd2WhvXYAjYs2hFebnH7FryCaLNhptjheyPEMyiv2MnPpT5haV75upx",
  "key19": "44Vir6nYaNhHhhaaDjFgafuNxiDCBtT9qt1wxnT9Hs6RUWjK74mw1MhVCdSUc1duvogYfSRH3epuzVnJYpNXVFmd",
  "key20": "5ju7Car9XERLTB9LbBNMHyt9MKhCHaUuBXyubaNKsGAfgPnPPbY32qEbbaG5rpDKWaZkGAHNEM2Ahtt19etBkEdU",
  "key21": "M1dJKWv8WJggbhBmk4xjiXfCWPFbXkoC3i36pT8bmZzybM67TTTi8qCq8vRMNxbdmktcHxe7fzfMsi5s3mxsxZ1",
  "key22": "4vckKoXDnRss143EfHREs19mQwQFYwz25pPuXvKuUdeTfdxPwHMFqeAZ323YKyDshdX4rDhjAZ5rY2DjkDFFsYwf",
  "key23": "2DgW5Ccru23QaYqEPiowuVYacweJ8fSCc6nTLxdfZLUESdHn1HnXJSPgefxrKYXFStjsd4CzeqC1R6dnMAL7V6tF",
  "key24": "3MgdJJm7NAKrX2N93x2iW4CaLBHtWkNaVa8BZdFEnYiEHFHA6DtNwPQbsR5zbwH98MkTrd8b38QiruqEDyZ8sHqg",
  "key25": "3PjM96yWNKR5XB3oLrBPwmVQvPqqjJjUGyv3W5ZZhPYgF1b5bL2X9UWaerTTQjH3BUFuCdPs1NYEosvkNCyYq3Qs",
  "key26": "2gbPZ8ZjtC9BuXu82wiFmzrZWPJqBE4VVAV5tYR2aHniznBrNqJhgi1KMAwbV4AcGHHqz8TSHNNVB2V2P3xgHKdx",
  "key27": "5HwucDJdRUV6g8FV1QrRCEcvdABNxxpwo7PqKU3Q7DpaGnSRroXUArJwAyJCQgKLqzzt1Wdz47Uk2NSogcn4US8b",
  "key28": "5v1zQNqjKH3aSb6ZxGxzEEgdoZKk6C3xCc4wWQQeozNHhqHkBZRvTYpjVDps3abeKnZ6vqxXBx3pqCBr8Fg8usyg",
  "key29": "4w6DSoPyqQ9KZbZ4HYJ4g7gC45ePKdNLTd36zoa3D84sAGJSCSPGV5Wvo9LzAcAHSiNQb9bvRCUEmjHe4LTACxg5",
  "key30": "2cntiiWwTeYUceiaQeAqaLSpzAwGFu76FSbYwRngQoRjPnbGVYvpYABbcnEf5ri5FQPTu68NPwJvNbSYm2pN9uWj",
  "key31": "5fgBmqou8UVr5vEiu13xaw1VHrFykqo5Zg1Pr9NWXtDJyGAgzHaybBgbDv3CKJB2r7g8Scet5DxqWWn4jJA6hSM7",
  "key32": "2NstJqtpugvF4geKdBpSCTGhcByqWNBrNB92LiHbtmF1SMHjE9bVZeBnfVKZVcwGYw18bBpHVqfW1shLoAEviFXx",
  "key33": "1f7gfTZm46RQtLYYQcm2ZeHVi4mGRsGru8zWG3MjtnHAaeQibxqwNvASURSeLofpJ544R5pbJevSYUENTsrEtAx"
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
