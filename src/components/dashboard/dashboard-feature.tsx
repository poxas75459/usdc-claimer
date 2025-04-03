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
    "5HcKEbUK8x9mKJsHiNz2KfhE3S6GEBRBqUAL7XWsMxBw3b8aWpgTpLRZtM4g79v2L3gMqRDNPyYGorMZu5gnhysy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2nmSxZKta94D9yJvqCLG5ZzQzS2dCFxMYYTggvtK96G5gjMrbYdv6rdkiRmgr6QU3RXQCfnkmVyNkRVe8PbcH9",
  "key1": "3B8FDFFBBTjG4vRnFDQzLahqDs5UKD6F4cEZqQZQhxN3DUzk1fECAwJqtRm61QdnmunGaS5YJMizncRoBemtQVkS",
  "key2": "264MrR8J6kMNvbGAQE9Rr1P7C1zeEq4SbSET9oB9Pn8NPxZSW9ksRZ8SDpCrYHrC8scS6TfGtNdqQnSse675Z7im",
  "key3": "nj1qovWtPLeCWtvyP6LCMNSzK8SUcnz87CfMoPGACfgcKiG2d5RDevjZoxGoAw537Y6WcGSPYFZeAbpqfedtkVa",
  "key4": "4RHgCRwghBtQsv7JMgg8nKhguhHL4NG3SsDjy88qeyhJYSzAbXdUercjLL9dKYGWpbqQ9PZJyUezzyYJ279nhtrA",
  "key5": "3SocHYyJxSpsbUVobTpVjAiNkUEwHar5snbxgJXmdH2KWEpMbpSxy5mAKZdBT2HvaoF7VYonMogEgYoX3LM9kEkC",
  "key6": "5KBxPyxaAoDHuP2yRsb9CCKWMi63mJzANLrmywAue6MqjRE7if4gA8NZmbokdNYsiXxoR3r3UKytTTGL6BevSTDR",
  "key7": "59kBcXs52B13pkRBLU3nAEFZCRxMU6LZPrXKZ75E1qGvDb2GrPFNr3SKU3h2XYT58Krkp7EcyMvvB4qLwTq3qDdJ",
  "key8": "omVyRA84yHXc3qGEhVVikCgWyyd4qZv5idyTQHTzsqsXYawg5ntTC19De42vy27PmPqfvqyFiWhmvvn3YhZpqfk",
  "key9": "2AQk7uBNQzsgfMa2Zs2hyottSfT9nSapZuodK5JA7UMqY9JgYNZHZL1eZkSgYtAnbEF2jfevuG3gDGkF8QQ89rfB",
  "key10": "3seKuouZ8t2tji3qCz7bqYW49gvutd482QLJhesJKcaC6CwRpbt8e7rmsdJNGJPn1eGTqpoimZcqYUVNuPCqvk5C",
  "key11": "RLbmM2cosDWLAsw9NSzWgJkgMi5dReE3gegZUNe8sj7nLcy41ibB5ZELbajpxxjpXUTd1YTn81Fgnsghb7YVuqt",
  "key12": "1kGmAaWs4V1ZUr6ii2gSBAJLk89ivrxRHgYh2uLce8n6DABTPMUiqt7GioUP8gGd8AP55jNMSKxchZdFrjR2qmF",
  "key13": "Hytnqw9tgQkQfZN7tih4adMmb1eoDCuXovnVAbTvHtF2zj6uTv8suUYobuwmahRWuZ5t5ookX8RTiMVeKcjpbsH",
  "key14": "2VnmZXCkXqaYtsjEtBkEnsDCWGBArBZGV1MpDScEHBQj6KzHu9jraWc5r8X5E59DRhD7D3TEmawq9Ths3jRwvqHs",
  "key15": "39xMPcXBrM2yU9ykB594HfFQv1AHTMujxrGgRtgzttXf22fp13aV3SQK5g6MybhgS2UAPqujYsw43YCtkcUVonth",
  "key16": "4vsmGBWbYcjC8X1LZC73L73NsfRKWu1bMhCLMaxXJ5We7Na1r3sNgdQzgyBMuheM5L3g5U73CujBp7e1FgyoL4EZ",
  "key17": "4McDTsBFbzwa8j4UBZ5JZAMmsgP4X2DcYYTw9PxnQCebtUrQ8qLPgruFKdPxHU1TACAAR65TM39SPdvE5bPTAoqf",
  "key18": "p8zmXkBCigudxhVw9hq4uhWu9Yc9gVnbXcLZPrjtyJuXGGXsqKgRGEed8bfaEQjQPvHaha8GUESrLyeFXd5zaQu",
  "key19": "2XMTQn1J8B5jsevW23vxxaPCUD5tQ1qg8fdi5dz56Ywz6LeRZZW77Xz5SZV53mUiYooMe4X7KzU7g9pbDRFaTwv7",
  "key20": "4fs5Dzhjmb1Eb9PV7de7NkWXZDYSZejcdqUSHjZJpE33ctgafrRsuYxgEEZmW4XFpP1pFe2TBA5S8kk3Yi39dhp8",
  "key21": "2cbkDkrQPYiNu8Nf4uqtKpBHaCoDUxZTisaYPq1bhCEttegEyxwKGnDghBMQRGgM3dBxaQNA2NC5khVkYnnvsLSq",
  "key22": "4LznR3pmaehCNmD7jxcak7gRyYV9JzCzfNQLutAdhL5pFBm3r1VCuWUXjMaD2kTUfVHcDrrTS79wzPdjJgTi7frL",
  "key23": "FXu877ZzCwjqtv6pss1FRfSmayJJLT57cNW8iFhQG7x7nS5LzBiJS5Y8pp98EgE9DiHWQSbSyDxPFj234VmPAM3",
  "key24": "4WYjiwCYP7T53rrcekyGXGukppMyQUB8meqxvf3WhqK6hxyL1TFZ1YnaDn8rqBCkS3favCSfjwQDx8rguhfpHZoC",
  "key25": "zmkDtcyY1ch7vkXSgDG5WXkseRMbsxS6ByBsosNB83xQ8mC9kb1m5XfAnnNdZKPESSkjaswGjtiNzQa9rG39Xdj",
  "key26": "4DZQ8tnA4rCD5dUATUQA7TfTeCbYw3AaEAHhmRidKHMNTEWq54kJDfWPSMuUwd8Q9MNzGhZ396puZhqYsAJS9s7n",
  "key27": "5qACMRxVX86zzKSHpq3pUFRSc8QCkxD6CkREx1Ws51uwbPAn1bkpV79tb3r47VE1Z9ZjFfepz4Ja3EWdinmR7RPa",
  "key28": "3hV8ku5EuJb8vbk2B1gtXXa99n5sKmeysbGbpSmyK39CEArMj6aVBPZCDU2tfQ95yfzE3dwvNmty4skjoDM9WRcq",
  "key29": "5FfivPS19KkHLFfMJMBZzM3j9hYDTeteM3K6wycHMYUYn9nuaGpnsziKdpehWtU9sqpV86cQoxkgSuYw4U1FWAMm",
  "key30": "4gS7Sp6X5WVumRKH8k8RS2GPY6fpKXpmDSMRTJK8ueqHrwNpWA6ak5qBCB5i4ES8kygwW53sWkUisdUi7e1u1DTE",
  "key31": "2BMCvg2PmsPuXtqF2yCDoh1ZJ5xgotQ6LcPhqaZFDPT2Cm8qEme6M6otyqKbv3jHmTTT7CxaKxZ4x8gYhBDru5nT",
  "key32": "63Q3cjDZwMRvT6vWXMGkJZSFkFq2X15sNjFB4Bp6NxzCd8kMJsAttTuDMuiBrbCjkQp5zSPBj91JzGGS4oN8UB14"
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
