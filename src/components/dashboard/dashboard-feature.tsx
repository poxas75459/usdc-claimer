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
    "2CX5jtnmuzeeTFEjkeimmQSESCexB5KBoCWWyFAz16m19YgFgGCS9sfyQiT1nrB5GqzYcZR3DiwryewQ1LvMhubQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CBdyD74jUdkAbkajEuJMDZkfZdT1CnuovkXCZp3UT6HegD1McWsMxXdEyKrECQ6PgWYeg1idPEzrDuxAdVraHbL",
  "key1": "49ZiputQ6R7RUVWZbzAaisjSseTBnk1dMRsDRhYUnCM5Q5zC9Un5AyaAmNyvitAGcT74c6T4NDLVwArfjBwYPuvZ",
  "key2": "4ApMMpbazUvCVfqBUYAE1wKmAEK3ELimkf26LRfT4HtTx7H5i9aopRTdXbepXS5FJebioW9jQjXUdW5ALEEZH2tT",
  "key3": "23caFPiwS5eepqqrmy5hmertPpL7GisUGuWcXjTfKJGZ8bV3S8qt8yG8JJH6JaVAfqTA51CPBJUnJ14VS1rtKixP",
  "key4": "28qPokX6zMu7jBNhv8QkJbJPptQJYwitUbL2LHBWpwWkd1ZWvhL839mN663fq3V7UMZPBu5RyeamhZFEBKnimPfe",
  "key5": "3KsgF1ERhCspKBqGudBYY81hZkqTRVhbFNfYwW4aCiwtYSCvn6gmj72FU3BMMLi1G9ExWBRYVX8yXyuvRaMHo3hb",
  "key6": "C2dMTgurQfZVBpiwR5mpsSCMNFF9TQwXrB3QaNi18RcE9e7GpUsfb9vn4F8RCJUCfBxGQuTukrFDjK3FJYQNXUn",
  "key7": "2FYZy864NeKbhnJpydQuCuF4aYcaf6ty4eXX7ipsdBz8UfWcMQsgWZqJC6qgGorqGR4CYf4GE2nt6rQh1LPZ7S5S",
  "key8": "4JKXbArotco7rMrUPHNevWMM45gmCkhma3SpNrU7K8qS9fWFRQPXCn7mQ8GyiUMyMWEeeWePVRHLDmST7wxgPxaJ",
  "key9": "5eMmZ1C5AfeSsr5i6bE5mQMVgHRWfqWm75vbjAtrhwMHujS4sEgx4S6tmGE8a6kfWvxoppiXS1SAjvdJbihptLgy",
  "key10": "GA5i42MmMYkszZT1TjQn818hud9eCPk5kdMvHRXDnxWDJqixKwDZUZFrzPJGX3eEwtja4P2Vu8DgGC2daGtdtCv",
  "key11": "4PahvXYwRTV5PB2ptUoBGmv4ZSeuG6S57PSbkPyGaofeDuiUNQqSXBtoAY7YpLRRou7Vn7cKi62jmt2hx3RfnXLm",
  "key12": "2VKpodoY7Scd1wswT9CVz8TGFwR9378RiMjDArRYP8RjQuKLFha3oopSPxdnCcbzP4BEcwA4pKUNWqWjCB9KGyYa",
  "key13": "61ZUWnAXgKmRvcE2ykTkPA2pLp9oZpc9trDn6pPraK7mx7KCvRLT7k41yAHVNPyU5BadybbiLSBxH2WTFZG1zkPx",
  "key14": "suvdrneWGxVGHkc85GnrS6Rwvvi7VUtz8DrHmfEkKEoShKpvgdBERvNdJqZkPpWQHVFkafa3VmBF8Z6ny861x7V",
  "key15": "2pYMr8wGvCCJFnGWkVNxch1vGLfbfhezD7Qx7VYaTmbCMNG5UptKDb3jjHi8qLVEbj97gUoiTxWFoDedvMyXaNms",
  "key16": "2WKNBNFJPyJYi7ozKtxKin3Mjbo6hezsniVtBGPBYqozA67VAGji4ptxguskjRsVDdxQN7VKBthiJukZwd4fgpsu",
  "key17": "5RNNjWSMhA2BnvnQQjcRisCLNgpmTfgCdWLJu25pJwjXSSfTsPF2qmUKKFowCDiRFrkbajbvB1EMt2zHL3TiU2ev",
  "key18": "2vRVcWWpjMXegyVWGPWekPjbhXDUJo8TfYPbRcBLR2ew2G5pNF1Bz87V4YMbmKtLkKwvyoYkqPpa5cY9SMAQJpum",
  "key19": "5j43773AYfvcnzVDp1JSqF75kSfzFrLtcMSvxCUNPncd6pD9khpVH7FigDUf9JB7sYmBiTD1ZVSAzmF3M3ShRrvL",
  "key20": "3AqjbfmWPbtyiRpNbQc8mwk2CSFfAQiWeNa82cRUZ7VutKivaZpVbo3ZvfngzDbFvQ7nesuGPX7xicRMY5wUnuNu",
  "key21": "48TT2FsSeLu12pSbgk47jhug63ikeuoLETvS6ETtfsGpdEwCmRvgJFZmxuxMi7kZCTaBrvAEiMd61oy7TryJFA39",
  "key22": "5wWitiQuJdFfckp8WWi332WcUyztjd91qQEBui6JtxyXv8grR6GeW5Fu3nfEQHZmEicTWxGH2LiMhW9TYaut8LY6",
  "key23": "5V5JT7ce2Hu2BUiKa1tsktPX6wjd4yahmiCUZ68x7bGGvgnMvxKaCN6FVMYwGPQEWawWMyKCY7MF75tbsiZzet27",
  "key24": "2Wcrm8MBBRWQKCTzXtBKywrTeYAnkLjNwoKJWmEcZTerBsNfEFvMeRNQwBZufXftLPUwCTJQQWjwDgDkQNq71MXQ",
  "key25": "66Q8snVuL4e9pSZNYQbgf6Atc73YC4PA7AGS3Ea8JRuk2H37nyCpEeY3cN6r9RqLBfptcAtkr7988quAnU9wyyi"
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
