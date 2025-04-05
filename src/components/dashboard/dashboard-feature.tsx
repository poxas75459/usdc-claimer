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
    "3DjE3nWt9yfPphanTYLZYBhCiuKx3CxiNMueq2RPcbgpsoKAGxsemN8Qd5Hdj8A6rBPbzST9zXNYtGdke5GaJDfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TWsXHPBcQouJh7FYnbSuZEYfE52U5PAQaAy6hLcZDP916v69TzJBuhDC5tk8txfx33eyBoP4xHrd3USkVXL1B48",
  "key1": "PLcRN9faq9hEGDWFbKkjqY88vTdPoa4cFHUHuMDoECLh2waQQqVXjC3NLGv41C45sSZ1kNJLAyDn5jEe8RkbSsu",
  "key2": "3jjQ9fccopPns4jRPjAS6an7EQWSih7ywRNSQAPN3ewMEqhXtgHajTA9KN71DqmV28gwyVv5qWqECoLoXGbgvYPL",
  "key3": "5HtC9Jq1491uyyMokvAU4ehTvwtqDMgg67Ak6eJin67xHsPXAtqQmJDeYVx418GTwPVPvCRm96h2igkRWZTeXHAQ",
  "key4": "NJYRDaiQSYebmcQTXknei1CG6z2duZdyauPFXrrm2DSpLeP8Byzimw3zwQfim5ja6uVoqz9FDv9B2xDv4T1h9kW",
  "key5": "4eEJHM12vZaeb97TVC32iyGC6C4eRmGavF35CL27KM8d262NzuFiUYSsMd3LinGx5RxG5z85wNLHv8cZSxBDwmfL",
  "key6": "2duzCf8q2xmxLBdLUCNoHVLx8ncGX8s7qANPjnymgb3sDFEFsFe5G78H2PzL9X5h7uapNfdPqX9MpBhKMreiCkKe",
  "key7": "R5SbrkvG6fp9mPnfu9wGsayppiurryJNHHb3Qz9dSRwkYRBMymfpNzJW44CdG6XbZ5PhPAPbnsN5da1wZndgAU9",
  "key8": "2bF2GsenCKEHkBKo2Zm3T2eoL6uUUAZrdeYVPgh6yX9vjtiMkUXi5hy7oVgKhd66grfdsF4RRAJXkCykFsS3jDaS",
  "key9": "56HkdYRjqix7nfM7vfGvmFtFxjALa9efccC3fuRRWPm9PwEhf3KwTEbrzf4WMGYhDSsD78aQvdYPFDmk118rFfgt",
  "key10": "2HZ7wM2LmxjLpJ8TNXWWQ5bc6utP1NaiuWcaR3GK276B9ZwWejZdUo5Jj9nAyF2cGSt2UNh3vi8HFJxbXPHnBCiB",
  "key11": "5GcD9557kWWgbnmS5sZydPHkpLrHTvRbE9LVguRWJ1EyrzmjvbEcM8EXrBhxrfa2eLTDXt3jovFSoPAWqGNxw5Zv",
  "key12": "56H9e9wgGP4doTUbn9Kn5zbcE4wzxZbq9NeNKHxvd8Yi7MxkWnzmbz14F8U2844UV5P2EAgNWJreRhEYyoG2KMdi",
  "key13": "sMj1VofPi2rtLwmTZZJUC2e32695Fg11V2XguYM7uBqhKKu2BLzYCJUHd6kbDdgmcnT3ZKKWiJFUUw4aM92bxmj",
  "key14": "5p5GgrEUGJenTCt78c4ysUXbNGhEaGa36zMgYDyVTSCyXiWbmsnNt6hzuefZnUQX1NkTHXxsXB3ceHn3JwLtUt8q",
  "key15": "4sUPE7m84e4jZxsXVwaMX2CY18vy45TGgi7beffrAwE57VunMRaZ2ZQj6SmwcoEbQXGJRheLFhNnzk6V9cGnasHh",
  "key16": "5RqpZBFMQBvWQWC7Pzxt2eentF1dG7GyREhJFYeHihazm1bbZ6MoCpnEawvhDxaMfUXXKDKcRzeWAf6PAwBpa361",
  "key17": "3dWr9QvaYgZAMdNsBACZNuPCX2v55eRsxQtHmrTsXPP9ifvUHgoUr1FEdP4ZnC7athp4WMmQGeMU2J48PubBW6hJ",
  "key18": "4cC3mSBUgSgp7h1vBai49MMcDse8TJduNVvRTacZfykBxnTYvP4NKbf9oXKvV2qRGqc7yx4pyiyHQjDtbdKxFSEa",
  "key19": "2fbNmVQTkEmCA4ukqd5MQuwVAxzANCGqqrcBn7ziXBATA1Zqm4RfvYVkxyEKTjnDN3xkpTK1yK5S3xPedQQtuEmW",
  "key20": "28r3MHyYo8znW5m1VLS5g5Fi5jhKNBQ83UuWdnTWGyeSX8DiQz2iwMqrpQ7TP5d23ky7DQ2tPnTTs4dZ9FkcJrd9",
  "key21": "a5vdBBkNmGaeDvt1HXWUK2VdmeH1tEPmrcuYjVDPJ7z64EGBkUipoidnixHVC2QQHGT6CvUjMAujWcm4RLLGKvC",
  "key22": "2cHXRTBAySL1f5h9RPwA2Fs9FNLx76ReD41UBq8G1HwdQ81wUNArgbgCFvvZgyyHXyNCSAG5pgK8bLYzcYY8Mn3Q",
  "key23": "2YdKRnqJMaU2WdvMNudi6uuGzK6T7zAW5bjERdKJ4TS1UoVjJKkjMkkoqK41zhhifn5PrnaAW6fGKUv8zvnXL5n3",
  "key24": "jxVnFGHeFa64C5bxRyqv2mmgCdnsZwxZp4VMmhyZmw3W2ifU1dg8nrnMEuxMN3kYMk75X9nGhwhhw8STEp3XpPT",
  "key25": "5d4JnMbnRGS6UQhD1TDr4LFFjzodwUVe59EVxAgRw2LYX2qBnr1E3Y34yuhWEUR5ZHbRkyAN9vWDwa3oszYekAxG",
  "key26": "65cEmDWp2T94ux3kc9zJDBAw6UBTvPA4bbHoFS44qcWufeYruZdd3QnZxLJURMiggmB7Z6R9APPpT5rhSPCZ7tme",
  "key27": "Et4pLdGvKK5MecmSs6XYNYRMx8GXMZtRrHyUWrBYCJDJaAqeT6GPM633vJ7qt8dt5AatDyLxWDp37Y7bk9z4dmQ",
  "key28": "UZJs8FLDwz4fjtuBH5wpEBfXGUWVb86rn3kX8bmt7G7EW857WP7gqejvS1pde7JmxGqR4BXrJQTnSNa1jtuovE3",
  "key29": "2poHiD5BuQgqTRFfAMHKXWRZQj59VytjkUojguv7miYvQPome7xUNZgCDfZJrMf1tzxrZA1w9mjgg1Q4QKDUmEJj"
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
