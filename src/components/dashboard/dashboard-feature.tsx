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
    "DCYUMuACpCd2HabRRVbcLLt7V3Fck8A2GPP6RjdF7rwuqNhZ8YSbNnG3MDD8mg5Up4EwGirEfKSbnwNxLG7WHU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FiqqUkeTQ1jvoT8ELHtCgUT99dFRd6DmZU3nh9KBm1PyVsPCNED4jkdmn8eu9HowCenoiAt9yFUHxe2k9Gdp95T",
  "key1": "2uPr9GNVKnBsrUr3NzwuqHM2Q4YnAexLkLcfJmRH7gyLAHjYZPGnJZcY6KkrtLJ2Sa3UqMX2mZx6aZi47BebuacH",
  "key2": "23hLhyhcKs3uJ1y8w992AfC5zcfbP9gXXYjdXKFC4vf4KUfLEosX1zuvLxMW4pwi2sWzjcLnh6ehzCmU9FT8LSRm",
  "key3": "2DJMia3GyLFnUdjxr9sc6JxPakRWQKMF2FGHo7TjxtBCWb4MLo2XS3ZCPGCvc4Xu9sAavwbWhhV8DRGfNjzEnzK4",
  "key4": "5hKiRFDzinBYUS7F9sUkZxQPVo3E6waoiyHptk7gY9tsvDdmUjA3Q7mx6ktuUvN899YYfqUaMHxQMEdVVmm5TKHp",
  "key5": "2ZwPLRmVhuku2UYHugKGSh7g6HM1isMYaPZdBL7dKJwjLP739B6nkCsGKfpNRaNx4Utue9DbT8HjW2gEjAyxbMpr",
  "key6": "pXGKJrcpPnjj3ELWK1pukhN4GHV4wjUAqwEzpP3PzevnBq3iyBohw9AZ8SRpAtbc7rvmptkLruenH6xWbz7j9kF",
  "key7": "4aRcFehaFL4TqHTq5riNgLcge35muwbEx25gE6LF7Xgs2yaWcTb5fvxJmzpq9GKTTyJe8J1cc7MH9WaYK13Zd4WV",
  "key8": "5K8ffGEwcRHSxPcXo24Nz3Vrw1Kgew6EAhHzaUbVZpDttfxxda7RGnfhgRbqYSL98AxFf1My5jfGm29MHFbAsMmL",
  "key9": "3Qefp7ns5GAopTi6H44Vqhj5jpRB6SpRY39YNFfspXgjsMLFMotRjWUmEJ22C4kn1U5wR7wee6NvxM2tYDCi53sz",
  "key10": "3dEpbLAGgeYJGKQxUEJ5B4yTafacNhmVUCi8dFfiSiF3FysvLL839aHua7mKEKLX5b6xH32e5wfruM7eVvhXKpxC",
  "key11": "LFcktPf9A71mxa8yPcACAVyAWBwBCCFfK5ywNet3c3oEdTEoD27uTPjp4bekB4Wap7KCpQHFvfAmBjLJavHXRME",
  "key12": "xdygvSCNyGfZaLvLdyC3mcBNczZ2yBMrdTGwWcWe2b5KZrJ1KMYbCRWukybRGqaBPFQ39QUEKBbN9skDeUY2PBC",
  "key13": "F2d3L3JfWTN39nRxjnvfGQVqvfmj3hnKVqyqRFvnKDW5YrUJreLjpFpUrgvyudo5EhaMQSHve4VNfUHQgioBku7",
  "key14": "ggjSNJzbxW67Zoqcg9fkBaDCmVRwyAouVNvvhxg5kpatyLcKysLJqv8vQv4F5hRT4skuEB7UZ21cmQGzpxvCVGX",
  "key15": "JKhAt5MxVR1ZHKppd3V4mZMJgDqK9k2zNeAiiLDqnMhQEKix8oTUx3Yax7MeoSjvFCW1g4ih92haKbKNzrhk8vB",
  "key16": "uc4nKbVBMccQ82oXfdupfJzV8KLgr1dtvDxzPSwwTcVV3pBh61YGTuwmsLKeg8wqVxjFfHkFzaZCMz4K7vhFVdT",
  "key17": "4CzMnscEwY9UxkHPXKUJkgvKsrAS9HJs8CmSt2GTxKWKHnKCyZ2UmN6yoGGkGrrgEe1QiM7N1TLM6Us5g977pAJX",
  "key18": "rU33LEosM2Q4XBSHYxrqtYz9EDQv5SmV2PQ15GmxRJHqmWKWTJNSEDsvDf6brr2iv5EJYTtfVM2iXXkDC51hBzs",
  "key19": "2SDFawsmJQ3yGrFoxLU5U6n1Hak8yHdwVG2qgY8be2e4kn2kFyDVaWF8nD9e5FETAyCSyGAUrJgaAGe7M8A8EmWr",
  "key20": "5faPUamnFrPpx46M55JSzKKDS42SeQ8XQ3x6FKTgJfYyEMhxmVU9mXNCMGpScoNgHCFJcAys4VRjh9MjiRymepzp",
  "key21": "3srqPbNUa1WgvTkmppWuKLJFrnqhejHMEEZduMmu61vnVsszA7XUtx7XmwMm3jVxV5fJoUTu83SQSrhTLYdB1JKr",
  "key22": "4eVUpiCTinFAGGPw6AnX6gygDwkervbFKBxxMJJCvAuvx7vBfxa89H6AjSqDcJgp6Qg28p427GCMMrKUXFeJXhZg",
  "key23": "5BAs4tTszhWeXAZWMhTZdNZ7v2E9gGHV6GvyNvLcjrTADT8iX2oXRSeBAWyFqZmxV8GW6o3EewiKjqv3RCaX6QMs",
  "key24": "3E1pRh8b4ggu7yKj2rZ6uyHN4Ghj87tAm3MxqMkBYYgjvWKLaCMfbTxGNfpf3T1FQdzS9kbUgfqiBU4p9oqdQg7T",
  "key25": "5wPHv9aiNCHKUUbFaKvHQSeQAC786U9AzY3x9K8i5tEsR4ndGWKkEzEy7YwPt7XX29cAjaU3Y9G1yBUuJopoijTB",
  "key26": "5q28W8MhdwV6AviEbCwxXC1LyXHXAuXaUtgXq44yZqMEp5mSBnLqxVtsHYTSN9Rwkzy4LydJ11cZ7h1ZL6S95zAP",
  "key27": "5cBzc3G5ZwrXYbcpAxezjD5s8SbLkJ4LMBv466yVYF8NpySBaxVQFU13LN26wK5TMVdnzr5vUrN6yqzzkn9YLkkL",
  "key28": "bv2kG3P9ixoeAQZ5NFN3SxkqL61R9ZfRm4Q6UzfvdZ2jdbrKZfu9PF7qy3eX8SR4TH6sy7Azh8cYYxNRu1pyg5j",
  "key29": "RXsZhKsiHpUGaufckHSCxMCL9MtVnh1EebUX2QhvMDhPRwz8MWscRifRreHTm96SWq2nLMdRvineqFLV69XfW7S",
  "key30": "5wFEzZ76qoNxpJyLHsMirz8tV9HDcmMxjm3CVn4euPdfzCDtXcmupAyXzYwhnVDMPf7sZvhY1CqmpQqhN97U89Pa",
  "key31": "2kxHbTBhyatPxQgomuSDVcTmvkZSNLpJoHBzuvuQ6jLW6o5c1gwQaCdzqn3SqNNPB7fXTNcurys4K7QSytsCiDnd"
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
