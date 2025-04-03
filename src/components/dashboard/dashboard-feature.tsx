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
    "4gefZAY7w7AdwsDc2VGSBg2s39X6cixmgfT37bLFxPJVUg1zNErzXvLibanx1kbsuecmPJUQaqiGMTyFySWLDNFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdX94K6irwTWHNi8MRbvbmMhSvQ7o7AoxWer57tvXBmJz5FqxCVc1qxMNncCBvssWK64ch536jNTT6AyKyBiW2n",
  "key1": "2c1zJyLQcCRij7Lcmnb9kebZx6BXJb68QwhiMDN2oUW34oYSLiiPwqWGG6Cvw2Bfzs2mgNSTbPZALfGUFy5Zw2D9",
  "key2": "3CgL1xzCyAfVmGz9zQoJWENW5uQkXiEMSsyd7qWNicHihyXGakWpgvuoi86xRDmq4nFsU5e4cLu2w3b2T3KKajwp",
  "key3": "dsmhvvyEi5NSxYQ5nndYnPyEjvpf9wPGLF2MiPBhEjqRVwUhExzjfwHVAuHxwUkhseksuzhc79c2Et8aUKm4Gc8",
  "key4": "5WenWL3x7gyyGGFDKYLTL8UwP2ikMWw7wmaZhWvSHps6hnxLbkppgvXFi8E1RxW5UGhKKFUR8VHh1sjLyw9GNDMB",
  "key5": "2jWUiu7UbruarJTSMfv2wAVo3XkMa6TMXYwPCc5kJwcNZYC9oC7BpEb1GCs7Rv7teD5SNhAbDrzmempZ8rhqy79f",
  "key6": "d3FHbkcMypPSrzSM9K4gxW8gU5jr1dHt3rJH2RcQcvdftt8a7HUZeSiEyrTMcXVy2h4rJyYkhYix8EkAQ7vCdsg",
  "key7": "5bAuLTy9ZVUpo6VbwkQd4bbvmm5A7bP9uE7rU9TGVo3E6j4ArJX8SuPrYhJso7yNRQPaYdzRSToUhX61ntqxyEe4",
  "key8": "PibGBx3uWL2Hx2dsvGuzcz7ANhYQc4DnLv4mB5b9TjHSxmiuD6xKSixVg3pExys1bMKoM1DsZt9Pi2AboKuBGUe",
  "key9": "5M1dHZ2xo1kWHUiyf1qVHHra7SYHUyaLyqzM6T6q74xgvb9EKXFPrmPn9mUSVh6aJ1YS7nyp1eRm7AsdQE9Mjd2",
  "key10": "24FoEuz3tXh92EqDEoKMBzBmUf1d33FAFYz2NrGf6nUKPyYuM8ZyqTyZUv72qucZbi6LDe8QoUSkee1pMDiETdrM",
  "key11": "anyqJFcmatb5S4Q87ie2foyrf38B2Zno1neePEe93Y76YYChDSr3vgdBBR1trEF5cJrtzYECn9MW294ZumF4gyi",
  "key12": "2EGUqDojgYicDfojhf126SnHEpYNe8JMTQdbG1Lb5T4CJ9Qd7wMizVwVWzeGdrUBRsbVSq2PDHVNXQDf92fXbWmc",
  "key13": "3YF2d9szm44C5nBcNpZzDfob5qqm3jKKUYg3EwumGrTe9LNEWweHwJfCXbXLw4M5jSqszWUTxHDY7r6yNBCkd7kU",
  "key14": "5yJe1xdjvrKa1pWMBdoeLHJwC4q2rccrDpbUfmcfbJ1mYfNguyxZhp6uQhwbNpu3rEk4qQbs84sWJMWBmBYXyLRj",
  "key15": "4N47qabeuGXkSTFaWw9pQsmWJcFPgHHr6xwaPbWaQbMR12ruAV6WGXrtm5GLg7EqXLY9jAaHCQssqb81mphvCiZB",
  "key16": "5YLrmGUneWrL9hfTfLvdHp2wg6HbCzV3n2YdxFpFYDhuP5VQjtRrZwk4BnvVbSJDBB7ciM7XaKV4F38FTgHUidEo",
  "key17": "4yBnL6ae95aaoAtp1HFW5SaYSUYRe5R2esWtDkbYLsq4bNEaVPqN4ufoQWHn1C9fNCXNhGiiwR4Cm8oSYfG6vuj5",
  "key18": "2Ah37wuc8FhgGifEEzLfBxZV9TkLNr7Erb9goBLDTFzyPcaxkGy6G5k9WsTK1g4tB3eNYvJ1gAFSDeyUraULWmqQ",
  "key19": "4KxEitdsswns2qNv5b1hV64oD5j2vio8aPVmHhQrsoEzR3gYYUMvjJhwTcTaCmX72D4rq2XUdD4eb8taH4cXLgM2",
  "key20": "52ia7MU42E6v21xcq5e9ndHziwBfveq3Nqz3KHHttDQdDsmiz8bVNtRW9v3HUHaeTU7GQ97M2SGAJkMk8UNzjyxF",
  "key21": "5XdempYYXM4PEK5kfBbbJvXyshwJKpkXC4u3bqSmr9CcqNP1KdmJ1vvH5VdTszgZ6CrX58MtZFohQ3mMPb8KYUyM",
  "key22": "5HUAAsUKp52gS3M4b8JXj3bkcQSSozqHsxnbwapvrKnyBv5b14QzrvGaho4X44AuA4jBTmnvScy4bLiRFqSgJXHV",
  "key23": "2aE8pvGXDmCbBFcZnhuSmhAtGyi3NZxMcm9U78c6fUsWetiuhTSjBq3Vnq77ynSxe4fqktUnevXVkXCE1fVS3Gve",
  "key24": "51F7LnsipHfZ14qvJHUMSHGv3yHKvCxDo1kxYxNEGJK7yRKe7o9LQ1BmUXnZ5uMeVNC1FpbAa9YRJTnonxJqky5j",
  "key25": "GikmBmbQhhnH2DMvEg4aahM9yCMC7JNsg2gJG44FKkksAa4treC3LSG6nwK57kgtGfaCXpfsHp6kmp3yjtPq3cR",
  "key26": "3CQnmdigPfcVhqkqCX4AENhPc4MvV2X3gvGqENsC6rQ9wNFdCEpffxLJBktNaZBzUsobnN2YEtRnLSqS8NbZkkAF",
  "key27": "4ep6mvNNG19ssuZwXtq8zp6L1hseXvW2AwmyZHcrvyiarap5HKsMfVvzoMHyn3abGixbN6rcbqEBMUzGcDuQjU9y",
  "key28": "edxgrc1jX3pWbsmQSJUffKAuo1o2kRGSQydrP9562RnFVvYvd7AH8WSAfyRH6WCGmyN2g2tgfgrmK8Z5LtkvSU9",
  "key29": "41DVsjjo1VVLxEdo9og3FHDtGE2D2s9K4iGmRRRoW6imPREyvsNBpx6xkZ9g5KCd6GmbsMJAjhUxB5jk1H7czApn",
  "key30": "3YEL8bJTcJkxRotXg9noXvRpvUowDuZFFpNXmLuzhBkFjEBUJptpfgHvaqSwF58RmJXPEBwvS1vcUjmuzrEi1LET"
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
