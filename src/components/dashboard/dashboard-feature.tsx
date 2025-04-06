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
    "3fx8iwLWrYAmgWxfGVDQWtKZtpaPqUBQw89q2fzo2TmaQENq37HNMJBSz8jeiAkehj4MpHztfhQKn4iU4bk2xNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Axb7EgtiAPqbzYq93xqWdf4qXAa5c5AmHDfuSgJkEJ8qJSV4quLceeg3DSYmcLfxJMgd473Z4eYJYuW4maKD8eV",
  "key1": "rgPgR9YcZyXtxaSz6vYyfcCEQ5dG9sg86Set4udPr5gwpxV4Kpdo9joJDJYrbvKVsHnigziuKNui3crp6ACRBg2",
  "key2": "23ew6akQCq7Tf2m1mwaeXtiU2EzFiaP5T6JFpLZE2cXGze9LeoCbqZcxJHkSYBsC9nvZnmaLsNjQaunDtWRSDLjD",
  "key3": "4fXrfQnZgbQhSqB1DGoAEeBLQKJC8LsvSVHJexEDUkAGnsL4RRv5hAWZVwSrdXwpa9o4iJggHgdpQJLxbDMDGQie",
  "key4": "2CCH7BuQRJJSRcwnN5rKpLTAHadmG87NikaXJ5onZ3XnC8QZmJRbt7FdDHYX7tvXKHWift9WZavC8TsuhgcHCjpg",
  "key5": "NHFx6WYzPcgKULvYoi9ztF4wp2s7p7KrfcYM7pRzyUgWWzjYCiK2n9GCQ1bR43uLonnLE352EM67Q7sJbHYCvq3",
  "key6": "5qpvFt6huEKcY3urcJhuHxGrKWCVmwvfJkczMoSAoRsUrWMLZptEWvjeE1JJUL3NJzPUKsdoz7WhaZEU1VouMsLq",
  "key7": "4QMDpgHSZbkZEFYXZKregQzq8mSg3pomJWRc3EhHHecytTz9muAAD5JqfAhXHuvdcHNGonJdwkU3A8i26XRyLXU4",
  "key8": "2hshEjDKvRnET9SdpMzrEXTin7jcVpc3BF4JzLGdp1fgUFvFg2YB1P6F61fdKV8tqFUaT7pmVAVdzkuRXT2siatc",
  "key9": "JRLmf3GMbZEoN2cUiLotwZ1hqN5MzLUvuvcnqCVpQ6GZFqKrRHFvgP4Z4Q2rikkFA6xCmKgT8MNyX8kaZdLx24z",
  "key10": "5XMity6cV6KS3PZKfUt5vq585UFbPqt57Muf3GknSkiGytwaFktRt17EZowpotwvEVsyfi8q9MqqpoM8oMj4jfGr",
  "key11": "5kbwFRtr8QYcqYXzxn5D5Fh5MdDMrzXUJnAaAPyFoU8dVBdZFnHVXzmBGT3YCi8EVZWQWWrrfL9bGg1piBVTeQfs",
  "key12": "bGMoWWonwvcESuozgqvJoY8s6P547ieeAw4vxkCTs9sJKLYhWSwmxFJHSscmRvTiGoRN57tgLhRLM9yx92qyJ2n",
  "key13": "38eJK7yT9XqsjkdPURxJHfUu8F8sbimpgxJKecrSy1CknoCN3dgMuVdycMbigQG3tePnR3KWaydekTP4oufUr3vF",
  "key14": "3YVAsMZFkgrf8CvtunUgiEjV5HFDbxm9UqRcppa1NtVUZMByhCvZUbA8WqRwKfzwJUETnyHVWbXwkmKhcve7FRRB",
  "key15": "2N5BsMzBxWZYuMDtYV2KKWXx1GDY9o64wqZmSBfnS4HLaKMHErkyDBomciBN4EbU4rYXDXeKKdsHRfVLxdM6no4d",
  "key16": "3wrekron1q2esfRgRemCfBLte3T3LnDSdWb8ZsM1P9bQSFMRYqCGZYMhH56ujaz9F8XD1jEY3ms3Ztn6bpCfNvZd",
  "key17": "4YQny7xSEANwJtYBpnghbyBZihx3cRXV4n3mFp1N5q3a17AphxXa9U6C8sf6x1aAVRNrYCdNRuuHwwZKoJUPE1tm",
  "key18": "XWEpfEwBXjfa189QKbe9vcxjNuK6VTbkJc7LCNXRxDo78AUHnQ9dszJMfgcWV4cf9oTVc1AVCcXquaRrnEsb79K",
  "key19": "52TMhNZwdmCo1RkagL8TdqG8a7DDTxHmJ2na5nJaHcWBW2UfR38MRbQFTtRb9jNGtrnYgmFfgUGwZenMLLdPC6h1",
  "key20": "5VxkKJr24vhVtVmjR7goqN3Ki7Zr2BFr72fHaTMebXmTm2NvDDGsMJejgBxBP7RCpqFYtttV1rf2Pug9D8j7jbkx",
  "key21": "4tyXCRDy7Kkm77J5WrnxcTLrYM8BfsL2oaowFB6dHzU7rPMfsLTVBKGqE1WbuiyxJHt7YqyUaKnouSQdMiGFZQzd",
  "key22": "4eGYxQJe9UyBi4vvjxaeFs2q9Ebd28Mjd9gJpXYGsDmDGGGBwwu269k7LajT2yYsJmPuyUjVjnoWAM8H68G9u2qX",
  "key23": "47aF4CCae25cmaRtgod3WXdad9NTtqSuMzcbJPXo9vvC6UAZn68yiQu7FEkdwRhERFnysD6SPXHt9dPK5UuN7S2",
  "key24": "DJs3fFjBzP53uzbVk5WBemDeMC3cyCVJrFjCDK63d3xJUAHecxP7YzTEuw4dZkrGsZVj9b2ZjNeZsHVny3Enq98",
  "key25": "5msQZJNruF618kXUptDiVmvh1KgRYFDxVK7jypzLFWQTTn8edLGkgCCGk4aaGAWUDo7ymjMp3DvBPqkLCs69d8KY",
  "key26": "2kYvTBRzZAwk5QPQfznUq8dbCt5i8pKM893DcpJTutrMEnHVeNe1znbRU1E5azcfh5Ve9EiEckYzSuA8AWjTgcmp",
  "key27": "49C4yCabybBpvw355ykRvsYoQNZiJuTTrvGcGLWk63oNTRr6L3CkhxTtHJ8SpYAw4NrKhxNUbYSArqjFHEM2tVWZ",
  "key28": "HZ5u4AqzJkVxjEUw8qQWYDCXbNRsdSCy5M45zKUtEMEQf5sctrgcaQJL8V73krnrGw5QV7Q5UQ2N2hutXJFjVX3",
  "key29": "2Douj53h4BJka1Qkh5yr7eYhYpXLrHhXoUwG4v4xSi6HPNXxdosVnFgTYr3kWLR38hPmV8Wv6wfoB4gGRfKrhipd"
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
