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
    "58yM9pq2gVGNi9dhqZ7QXVpvD2aDkrLJbs1aoBM3Lcmwqsr5bmeREfioqDwyuUuwM6pcY27EXrLtdCFgPXtFGyN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qeArPAt4hm4KJPMyyJb7B7ZXsNrYUtx9U5dGpSdFfUwXL6pRM19mvFZUBMys7U8KuAUVdTQoxXDX7mj1mnN3hFo",
  "key1": "4hx1KqEBQfTAM4a6ySByRJX39jcQAQzeRv2fhATb5Dvdop3duFXkZPKJv2nkhdudfUFDwrNLivh6FjKkjELDMeX5",
  "key2": "4qiRYp44z7KumF93kWbn9Dtkz8Qizwa2ukgc2DCqkHZHzDMitWgJdfzbLE19ioT7KsFvjy75144CZXwWsnS8S5tQ",
  "key3": "3SNXgHYor4HReSL6QZgs1GCg5SmM2sP7BshdybYjjG8Do8crz9BoknTUCxiNptKwVSwjC5SzcJ96zQ3xDfvxZ2GJ",
  "key4": "4AbZNE1uCJc15gYSo5QskPLS9o14Aa8GYveuZKCxhT4F3kv61PSX6kAp2k6hY487QJY98Tf1mjYHBjBrkwA3vinE",
  "key5": "hdA9M4Rx25oMiYxoGyhdh8E4tfyCYHQUT8mhmucpwbwiLktXqAifKz5nS6Tn1TAYnjfQXMjht1kNioxYBSd8gt4",
  "key6": "5jUFU2rN7cqFGn4yPqzarDbcsoa9nGrtwFYCdQ6xi41S4rqSSmqijwAukvXX8H7LVK6CP4vBz4GYGkrpfKK2FVPD",
  "key7": "28ZVjrgQsK9yD9jRdXAqRUZ2Yy8iR4sz8hbUiQJpDZ4FZTPReTJhQZLJfr3DLW8vD45KmeTtqLARb9X2XrhZGXKJ",
  "key8": "F8sPsuHrgZv4ga79d5eRXVpxnX4ztvJj5S6XHcJEnTLFB8HRLdwnraW4zvCdBHUBZR88pH8WQqLPjRYTpJsY4qX",
  "key9": "Ep7B14RDFudvswgk1wcCoCiVCceRkLwxoEho5ohRnW5uMVDyFdhLY6NY5AZbGqHRQpyMNGBmrsV8adFCxJd2ne3",
  "key10": "55wwkWw5aft2CP89nbn3ccyNZQvo1PpoHpXvb5kXzoevhVNeKDYtyBw8wfagfwqR9mXYbPJ3dJmNk11Cd16gMDSj",
  "key11": "yoaESvfFXVMn1rgiM5wN7kVfFFdGN9ef9pb5mHCvtsvLvuPYaKiXZ3wuKEubbsXK2GgkZeXZKqqGJpph2ocXH3K",
  "key12": "Y4vL3m3MtmzMV4RNLtCtn5Mqip4qP65y1iYX1HkPL4RQdohhCYJ7yaBHyGT8Zfu9TpL6AWCbbsLLG9EKvULy3m4",
  "key13": "425gWK7iMaBbLg2Ng7mtSPHFmiYQaUQVYh7LG4wXJfLHcSvrN3KsoYj6VLyNr3SrhNMyuUP9zYDwxRehu9Z38Qqy",
  "key14": "64drtjVwHpdWjWzK59HxENuMDv1KEqkytEyQcrGbiWnc5gdRcP2Fo3MwjisbaM6cFo8DMbBhbhDhHQMtu8iTfJk2",
  "key15": "2vzRjCHNLSFYEMcp8A7CmXTC7GXgZguujxQVdVySLSFqHu2DS2MjPuYXyGNrEesjehHnqDxMSMLXKRHDSy8Tog4K",
  "key16": "azEW3xnutbYqaEqgA3eFwcZXQaUoDd1mWtdJbxdhjRVeZAwS8Bk1Rz8xDLitG5RjWxqKUYjvzxqcHdvyuv6JCqT",
  "key17": "3bWjhpr4ydB5Nj12g4XxPBg6XmrR2tPXd78K54JwEcHsvqQDGxBmE9SvTWntgHuK2vJizJfSYHAswGZTZtkV7eU4",
  "key18": "3rwTU4YbNSnYJ5JjBdcgkRdxiRNsyPgaXJZCChLVoeE94njX6KFU3raztQjX6c9Wa3Zvydfnp3WQBFefnJ7Cihft",
  "key19": "478fqMZo23KcViTS6NGXWDJS576jVnmV5znBW7najKq1m6t5Ly7uYY1QFWR68jejr2bahiy17rtQSa9kDE1of5Qp",
  "key20": "vr9a6AY3V5RTMK54yM4fsv5pECVtLVZgH4RrCoyB1nQi2145Vw99ZjvjZAJbS7HX46wPgvKXdN9HwEgdjBX2QXk",
  "key21": "5ajGd4PkMviYZo2de37nDKyP69MCSMKJmm9QbtuSFYt94Dp5nyA1P6Da5heYFicnfF8L5VsYheWDCWPeTTR27tf7",
  "key22": "4S3rASz5gPvRCuPczPqTCHjpP4qCWSMXziXPxFmfSoUpd3ToiWX9uAh2hSk3VGYsF1Vr9FEhC74RrptzEKXcfEy9",
  "key23": "ey4xATXgZ2pjYWC4z6DyaSLtgWbnWAVQoo2YaAhSBXYiE2tqfn17XTTHSqBJLqcK8Tddvrpb2Df8qHY6D1GfGPu",
  "key24": "2HieRoW4W1YDVJwiB5oGiuT3EfpkWbJ2iS68CdvfAJPSLyVdN6xgrSC8oLb9fTKAjWQiedQhqcpx4fENH1ZafWn4",
  "key25": "4RY7EzPBx3oCeuzY9zLVvFxjv9u86pQA2kviKrHvsomkEfaHiBLc2v8T7tABzroxQukJotjAynoi2LZbpcijhzix",
  "key26": "5UoZ6ZSHDLEgp597eWLB3tLwdKSEVNgbpG2LvtND24wgXiJfmtjsidReYCcR9jTpyvmvvXM39MBN6d7PfsznhVVv",
  "key27": "5bi3FAumQtCTkDGzE9c112ZTGKQ9RxWsC2bqPKp7Aft2oD8Ej7rrdDCQwnfuuVEWANt92uMod4G5aAxE7jAtWRn6",
  "key28": "DqLx7zdjQB1WDRUffdYuVanJjUq9sSd6NAH7Siyb7wfCcst94Fru6wQYj8saXb4thYTAUHxpR9RwrLpmaHv5gKH",
  "key29": "vDecusXaZjNdZ1vUSvGJyeSRhZHuu9wptMWmjWsXJvrUHzXX8HEpnzfgLmQuXT1fumFvoHYoy3Qx2xcYtJCzNTq",
  "key30": "5boe8a7LPk6wFJcMj5i2DtTduvqeJcZu6RuBP5gCg4xM8Lbjh4TFeT13pVdUo2Lrsh2Hz6rqpPtmVnrieN3koDgz"
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
