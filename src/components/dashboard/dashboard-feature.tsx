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
    "5Dopyw6h234LoGEQeETuYU7RzSbDyinSDZBmHikswpS1MV5AXCaADv7rHqcWpVeduhcySRNd9HquQUTd4BruwQ27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HChV2MEiPMtoohVXdrTWbaAsjHwoiJvTJ2Cizdhbnw9EBuuTCEtd1sQKJo7R3A6iWLWri1heLKf6VR8Xe7sGQ6W",
  "key1": "5qr4dawTtjEqFRN2E2zTsvRa4jtKrhSx93JeWA4M9FPqH8qbzwTLJGyqnERe284L3Ff8o5sUvyVmKBKAVARkr6vk",
  "key2": "4XjH8CiWznjJXgBXo2JA4CV76YpbhwLRuPP76nW5DgbnHdqnhao4z8aYc2nugMRr3SsqhjKz6BbEixb5iJv6h9SM",
  "key3": "BZUMN5xGEfmweKzEbik5YAqxUNtvPDaCC6PdRTCamnvUQazn8xi9b9K3sjqYngEkE4mTZu8nSMqkTGrdDfB3V4x",
  "key4": "3e7vBZPpXFPcbQsQr8wTDehfxfmdNLJJ2dhbbK4Ja8BLfSUu2R4dJAJ3B51QL5VyX8h8MPTi6Qg52aXwYeKUoLcM",
  "key5": "53CppWcoxo1CpowRDgaCSbcRhcTnhfT5kRwFP1WLdxhK2i1dYjAmpw7b9W83thewMSjTMMbin4sPeFkJ5t5PsKFF",
  "key6": "3SEVcEEZPm79AXbp5EFQW43PWHa5THTcEboT3subGWSfwAo7PWiF9gKD6tww5nhodnjCWXdCAuavqAMozrEpCpsm",
  "key7": "4rY4iEDTE6GYRbpcTLHsJQC52fRTSkvYqUHZfZXwEN3ZbTmMq6LueNZ6KoX9hAf3DLQmpSQjeb3Zsj1hWp83caWW",
  "key8": "2useejsqTxTfgBbaE7gJ34a3CKdW3ULwBWwNpHXApJFgd2M43bR9nwNp2cq48tkZVpkJAvUbQ7xwELoygQY4kPCb",
  "key9": "27gvx8Umv5T22xnQiTgi2KSzuiYhuspG8BnMzqLHga1m5HeMS8FNyGZZ9zoT9C5BVjUS4MHxaQsqFpNzEDtekdK9",
  "key10": "DJxCkG5ARwtPwTLdKerpxfryUp9B2ftEWEWndDt6bNRhogZ5mAgj5W8Tt1d27BFUp4xgPwXwxcjacttTz3ALX37",
  "key11": "5N3S92npvNaNXQXPMT3eExSuyM5Vf9UYTuSSQ11d182uqbuYcHPBC9BZnbfiYx9TmQNFzjBwwcHyVdbfmgfphmvA",
  "key12": "jcWASDfZpj6tqqNqsJymjACBZtdos9553pd8rNttYaWm4UxnAPj6EoWL6B4KeqHYFmhZsjczY9Mxa9TXQaYUE2y",
  "key13": "2TaxrWZW3NVPgP1VAztARfKd6DaVGogk1i2ZVNkR1RDeBywFLqNdizveAs6cRzXh1BaDefhDTddH3E359NXaLfdj",
  "key14": "5sDp1uvDm6snivPguSRZ1mNHfofeNuk6wAAzG1aXSkKWvfQdnpmRgZ3TaXavhXmNpN3B8zZBLXg2ZSgBYFKuuk6",
  "key15": "BFVRbHWK6ErFjGyjpd2ktC7jbCE7DQrBoTvryTkUvDoK9gnRumeJQF86DuE1x9RjifnUaw6WZa6yE8BywimVuNM",
  "key16": "3DGGR2P5UtcwmWt2V6S6V8uwJPCnAMFMuUzBxEm9qZ4onA1fqJ5srsbVWJ4RnMM9GARj3kRNeyPD4TuQfyYkZ2yT",
  "key17": "3nbcKwpqsrBx1L3mfBPg2mbzi8E9q3iPU76tGFLqLmQR9dhSSQ4Gc1rbX5QbVp6SSw5Yxy3yfiVb96bZqxwPpjtX",
  "key18": "22yuQUZ3sdK61C79gvbFpSMRpNSFQYA2metyd1TPDFk4CPjgMuyevfC7HpddUJGKqRg84xcy2XBMLbor4CDmaANf",
  "key19": "5zQgs4xCnR246jNKkEsbSRbYF34UL2zcA156YMxs5eCc27Y9tfRiZXAGQmFqXdYvkgav9VyBUKFwYoye4wWqcMpF",
  "key20": "xYBn4827rnzx6wR7ewvzJqFftzbHbGThoL2DtStb48rEU51v6ZQjWEer4LJLQ35aNPqaemCKpHyVAZ5YqUbEEEM",
  "key21": "2iZ1NmZiWDqdA82j5pAQx4HrB9Qw8g1LxLbKW2TDSdsHK5peHjxrWpzri6dPXh1LGCqV6Y4QHog3xjL6LainiSs8",
  "key22": "3HWegByd2hUc668PnL5S6wWartJuLUtXgMLLMRMEf2jGp2A5ULXQfZiT2hbPiCuLANfVA9pJWH37TNDVsBUwFA2e",
  "key23": "2QbeqdSDRJEForttR1roCjNtpqKyCeuEMmD9PuLpNKBVg6JpDL8v6yU7cG1x4dLrR2dXXqVQnotTiYT5NdXDmubc",
  "key24": "3BEXU8bjZct7NHRPQX7SEu4WKv6TmVXEq2HufLpjY1wWnVkWZqvyzyjjNSdveRLN15hnBCXp5zpeLKdsh1kVzmfL",
  "key25": "LxZtndRLowBrdo4go49oTF2VxHJDmozpjkPxvtSGUHj6KoD9NoCcpsT3hLpe9DhC5d8vfG8RsaHyAfKQDNQnPET",
  "key26": "FkHq8cE18kJVsjXQvRXvwZxW1py4RtqVjrXMtommNeSZZ1HRSyBqqMsRTd3HQbyAHCdUWqVXgrHyzKKVoEPUNnR",
  "key27": "4gLN1gFCn4svomP5uYimMmNxKmQDzXSDThwRGrsYpepMUDHuKNS5nLqbKYFgJ6BnrK91LZSVnEw63d1zHAJ61dEe",
  "key28": "47eys76z3QDobwejKcXpkgGTp7RjX6yt8aMxjW7DunDjcAjQdWXtPwmEmxaEPbZTSjQm7sBx8PJDnBUSWR8Yk9uh",
  "key29": "58r6BSijVpXaTFNLKB9Tko8Gnaptc4324PgbRGffH5UrCFo6UX3YGt66rmij7X7B9zqQKVHLHUJSXEMcvS2UYA33"
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
