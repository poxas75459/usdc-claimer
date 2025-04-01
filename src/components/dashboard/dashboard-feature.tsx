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
    "5VhYQyMTB4mSLy9PeCkPNtdt1a2Xhu9iz12SCZJch7skcvJgE7rZ3gbDD65ZHhrspr9f3Lg5Lh3agL22u4rZovvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZjBpFnEjhwyP9ia5B3Bw6W1Si7Ro9pAJYMXETj4pFf5TbKL5Mpp1PcjnGrMqTQVz8GC9QSABG4Jh58LXBnYJ3Pt",
  "key1": "55PXEDEFHvFginokswpgU8Gworn5EtumczgByS7CzB6GCvAxBFBS2g3e3QzBkAqQKVY2wECyipcovnas8zEbdh4g",
  "key2": "4rxNG1gbSvCttEB8jahQYZZNCCsgyNeknDZmrkLoGzhXqv1rnJtkdQPvd383TfxJQ1up8yfgG2WtG32SkrrAMwXx",
  "key3": "PmUjd67T9dnhc3Qw2Vzt5ZRndznDwUtM4yan9sucSvwdNpgDX7iRaHQFHVA6oqftFnjsXZ2nQ5MsaRH3x4EMcHq",
  "key4": "2AaPjhggmwLB62St2uWk42qjyibN4NsdfZC3V8eNUEiubaT24eZPEtwccTrgZQMZE5icr8TMhLQZcJrrBhaTr6f5",
  "key5": "nZEDJtZtq64JnsnadMrBs6J9LgGuTrApYgoJdUxH3cCg7BSFgNemezcSzhWYjvoycxg9hKh9RdFQQsbmt8Pvrjx",
  "key6": "2BRPK7B7hL71GnH7CihzC4coLcyuMPFmmRCmoRCkjF6WSbUvurTDJXmw3adhPLSSJgaoCAb5fHteufHYJ14W3qLW",
  "key7": "25bt7ixSyWNpeWKaHhvcgVzPjUEc6TSoatyXvmGPvhCPkHZciwu8HLRutuj6VE2vvJUCaPGbDT2EpKi2cmeZ9ycP",
  "key8": "3cYejMzJQph4pKV3ovmT1akMquLzW7Gm7ptXwryr2i46mvArPda5sQ7UMvDKhzZJmEiYyiyZ7sjCnyLireyw4Qcj",
  "key9": "5P1YL47erMCyxPrKi6B6h3bUxrDfCztCRCcPTDgdQsUdsWYAe5LwGMGmcAgjjnuNHGn33ouAZYGNJRbqvGpk9i3R",
  "key10": "4MqcVWLXNrxCDNnkdJX57f44EfX4zSvY7WPwCXVY4KcsYWipPLzMGu1SekpB7KpgY8dy5nECsSaDQHJciCM2TLRG",
  "key11": "3FXVtRsiZoYyWpadvb1wPNcjPsgK3fW9R2YxWnN8G76ATxDCVJnq2xLu7djq5iYDT8rknenFXq8oRS3rqsxd1y5n",
  "key12": "5CoEUwBErxfMj7kvpxYJokJFkAqk3X9NTN3iD1HcBQJnV18LVaKmqzXXvwZ7fRTn36Lpym7eBkBmS4tNcVMwCvd2",
  "key13": "3EHirzKYqpLfi7CwxmpF6wifk5t9VhwLo6Uf2cAa8gYHupJmpp7iJDG4AzrAPJsc99jww7QHMyo3wXTWHLpjWqNe",
  "key14": "4iN4KgukqXYWnUDywrTJJ4d7DiemeSPVnWkabZ5L6uNwArxLcSBzpdt3P4xfX1WEtBKrmayk1hGZW3K2SR6N49hx",
  "key15": "3QwTNeVdb6tu5sQFULewHMLLDufXfDHWX2yhSaprAfdi99RCXN2a71ePG3KNb3DikB4nuoKdDzGnFGRaZy7qUYhH",
  "key16": "2EWmNE4DTozM9VQogLPJdxHfj2bZ2E2bLjmJqDFmgYpJEobgFndMj3cLx1dXcz5fca5xFWhqUCU25JbpH9v3k2Z5",
  "key17": "3qL9aFEkCkiNqEVHhYUtUJ7v79qyhe4sJaTfpi4ZsfGmwnpeFaKaYEFqWuY1LUnXQPD5vYv8fwbqXoS1sELoSjGC",
  "key18": "28sScS6YwusiyvxVQ2DdkinbyFfECxb3F1WzNUQcnB1Kb3iH8qcdFuP57Kd3thchZifgQbCyYh3CKMnQAgzuuuHv",
  "key19": "4pY1kvAsW8pnHCtvFXibzVmkb76v1rW1vDndbyrR3vM5TivUjR8jAfTosSfGR8UaUe1Pk3UZMduXJUd8Cq6yB3qV",
  "key20": "WNLjiyodVaqhy1QMF8yqoyMvNaiJjqdswfmgcwHAzRZ69d61cd3cXp13aMfAU3BqCzd9GaoSKoygdQqjy2EdJpZ",
  "key21": "48pXbH4MMNrDSsNmQ2dTRhw2mc2cUBvFW1yeP9QQEWVLNREduuL2de7TP8xnznnmiKYBCpHUdErcyEDbTDycWeRk",
  "key22": "5DtN5LLX8FLHRiDM8GeQqPHq7XTma5v7sRZNgQtLfjJE5gYq1gZVRsinZqQWrQT1Q8frdoWBh37vxDutorA4z3HD",
  "key23": "5nv81jqucQmUkxcUtM8dnFMVj3s8skzYDRQXf8K8HCvP6M7U4wr3nmevfhAGVEKdHnEWkh6GzuYfweWAdrw1VyMw",
  "key24": "r2oqxHHuSpiDq7t8nD1dfKsP4bjy6bCec6VfzazbAxxbk9dLnckJ5xnTo9mvL5gdaVhSkL4GMX63Z14yZifjuMC",
  "key25": "2RgYw4WXq83L51meUqjzXPz9rGWPXb4NgwpZ6fm1eGamxaNF5KW6SiSCc7GVdPf24iWw9mi5UuPAPhfAPbcwH7yb",
  "key26": "3eYqRLLQTfoeaArrsCgzpBnazBD2faMJ3VhnF4XrMXmSmfmtjJu1BN5MJihe4w49APmsDzUgjCCEuovNgJEyMrGy",
  "key27": "t832bTCZdyuKVu7PVtKZ8j3Ab3GAc7765LafbTzkUDDAwnQ9d4AXPwhtVen6zNgTfGkPkgfk5FhDToFxt3wEfUg",
  "key28": "4vozMJUT23nyJyCmCV6sgGTtG2cnBS2LhgjVfxdXgSDAUo19b4y4Uesjzp8TvnZCqYMNMZTZpT9afHkeBeaaUBTW",
  "key29": "4XqJMf5Sn6ZXsad8rx3JmAiXiBQAaRLeBdVp8evyQQGaSDH2FFitaCiYWpbhQwNRd1N72px9LKeaNaH3ZyTr9gZz",
  "key30": "25mQPLLhymPJof9e46scXZnkw25vZGdb48cSakyTipdDSHMKnNk9ZSp8dtTWVHbvrPYRiBKXdq1Pe7BhUqJRuhCY"
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
