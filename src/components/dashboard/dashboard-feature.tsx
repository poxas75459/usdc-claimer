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
    "5dKBsfKW9mj6PFsdbzRY1K7bHLyoe8t762VnTZfRV9RwYnKqPiafwh48nUNpZE6fhdNGP4gjKEdLcVffPaDPV88h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sMq9i5CczAiRTLzFb4rcZp6vbrStLtxHaTWuyK2JpQ9hU26pKUGHrG6dLBRVZeVFtbYUTcacBwQsgXATMCN5kQS",
  "key1": "5nPxwGe4kT5ub8RWMAFWp8ZN5F6qoyobBMZL9RY3UvgbZtkxrkrh8wto3egu1Yoqp1SXE5CppM4srgUSWRoMF4xY",
  "key2": "3YWxbPwnV4GMP98jYyDk1SydG9zsLCnwKcsLEH781SdgyPzr9p1MWa9VTfXFSBQmpXc16s4QVsWyySzYSgD13H1z",
  "key3": "5WHCFpMj4rpKrGYrFvBrQtsj6bhjjzpVvogiu7Zr2zzN6EbxMTfE7SmiQAPhdANncZjo3FpicBUsNHPbVZsxYEX9",
  "key4": "56ZYbEPHSh5jm9YrCx2hhHKMwvYicgGiZxMnEmrXnrzWtfZNft3yWZbkSUG4hQvCAsrNXL2XPTjBBbQtzSS3e9TN",
  "key5": "TmmPqyKpaAjmsrYii8fw562oEWgBhcQNuo2gNXpGX4QuowfFmEXkG5aiG65Wf1yYQdi6qzU6HLrsu77yQ3JCjH1",
  "key6": "5DVYbS4DDEm51s5sgCMgA9tgfn8ytsKABHPZ7eUtMKe4Srt7tW9kTbXdKaF8ukTxikdCcK7Ltqb9VSZweHMFrEdC",
  "key7": "WLQ9LAoFCixBAgZJJNKjuQXyYL5T4Z4iCiLp8PzgQ5AE63GXoUZaxERvdbmiEGjosWyw4MbFsNnjy1KwfUWez8m",
  "key8": "3KXBsZwE6dhnsP9WpJns53nMgPVFBgi4w3zZw3MhHddEA1U3jc8fjn58R2SHQjkEnha2s7Zieb8GCuoSRJdUgcDx",
  "key9": "Z9ahptdKieU2vVG8khp14ommeJJRSLnTsXRcNpTnsvNTM1SauMZpDnGESkZnnhcuP6AchZvLKuEr7EWJS6txapG",
  "key10": "2tp7rz5tNeKct6fK5QumfGAB19XbVKv87o2ct2BeeQATuor3Ww2FR5b6iZdDP4Dj6rBCrmhF9u7yzza5NF41XkNi",
  "key11": "Rg4vjpd9Zj8LEuUD3M17Q6V73xYqUXr6Uapx6uFKcod9Btx3tRCEzZ2sVQH69GyfPEJMR6WBwS1pPP4J3fjLfBj",
  "key12": "4CCVzeJoPk5uSzxp4aW5foSHYdwyGTqPrRMpGVwxgbXebfqF9e5R6UjUWN6bZCH6p1oPWoh6HMAhQGrfzfZ1615w",
  "key13": "49hP66ssHNHVWh8SMTTK91bQuhzi58tGAeBARnMU7VQHhUWXa19oPwgMTTPwTVbXrypjWBmPMhLWTVV7iCerYC4r",
  "key14": "3c6otHu4AVFTDMzdZbYV9qpPECVNVE7Wn4AJFDudDQph2mtNztVrjZfUCyiFzrASJ9oxzibvRjRbY2GR8MDJkUY9",
  "key15": "uSHokr4BckTnEHfhkqgLQCLUP4rxypEk5tqdTg8kvSFVNgrw4FjB9ipP5a3H1WTCopDoZZdibiTAUtc9F1zwjVt",
  "key16": "4fkgRhTWmbqGib4XSdF3PXsiM5kTjf9SkKhE4bjC8E2vN3YHctkqHQM4e1yVYSEQkzVoxiwT58ChhVpJ2yfEZmxD",
  "key17": "542ZwEbDDTYCU8m2HGexpoizpQN5AmtPmfweHz11rvNQFiKsVeu7ZfrAtNvUiaJJtkG8qFCprqRJaEtKLbWAhXob",
  "key18": "227qkHJYikebsx2XWQKGgcEtoPUXgmGv49rmphHkDpGi2sw1ADEXWB4kkR5bydtPkn3PjS5HFcTkyhoLAzGmBwVT",
  "key19": "5CzWNLEG8aon6fLNfDuQX7VtxVkmmdKgDBeAc48UpccPu2LApWposrdZnDL7oHzCLqNmc7syGHn657zMXmwMPTNi",
  "key20": "3Q6nsXXrMXiCsXQnjimW5sUwQp6EJTniGvnBCA4gDQodfiZ4nCgtesi792rrwupG4VEXyV2gYQqGoKJvEcoUADR7",
  "key21": "65L9kUvZNpKBh7RkLSFQbUR1DrTVURGjZQQh1hYM6ZGz1PW8uUtW6pS7GnMPmiTRtUATqk3La1swxz2h9PgZUhpJ",
  "key22": "37mHeM4mnVJ9gC2YWoHJtKChDZGy5e3AAAdEUwerv3Vti3vHFefLP6aGSjaFEMdXJPBZRqBA9kKe6fhUwcZLgpwz",
  "key23": "4DBf5rBeBYbtVxzGXZt4br3vbGk3jF8jHxieXv4gZ48HKk2gB63AcxWtDgmHN8mKKUd8gmBmxbU6okYttwgM2Nwk",
  "key24": "5Q4WWmeLQxu2XTFDzQfM8Fh2hyHqgpt2wvXSRz3qCWA5xCeB2uz6SbVsAFdUFNDyzV8ySKuKBKM1KRifQs9p6f7n",
  "key25": "219frruMvHBQikCntcGgn18BCXWziZTyqDSjeTWhrPv4FoDtoGSc1SPfi6zoza6eHK5gaX8fVjkGcqtnJAZgPZVP",
  "key26": "4NhvQuf6KWMuVMMKfVjZ1RJdaF8sVrUTCGQxqQuYTUkbPz7PS9RU8dxCpvLeN95aXdCQgfPyuVk47M56QB4wLVRH",
  "key27": "5AJomy2R479PKt9AdiHeFRRruR8eqW1S3XjkBeo15EJnQ9gj3LVjj59y1UfQdwpE2fcWYSReMWST5nVyrsgV1tPQ",
  "key28": "4qw6xnVxiLXvGg3F8gRwzFAkjZHxxmqKqEdq6Tdta2gsRv2LLfQRUTrv3bx1bXFPhC2X4TZMhNFrrzYtCQGfZ33Z"
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
