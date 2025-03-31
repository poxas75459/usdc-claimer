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
    "24KFMF3vFbXg6fzPJ5S37i7JMqTVtyKFmhqpUadci2DeDPK3EahkMGRLxn9dLzz3tXSP2nm5yVfxHFUZmWhQhP2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5GDZC5yStSdgTsYtBdpi6Y2avZNRDtdzXHaAUaBu6DbBRQEMwHfJm92rRPcKhYfWbCYhZP4VFKJHunWVybWEjS",
  "key1": "MZZ6onE36Ets6sXsaEAW5tpCEpLQrggDwrJRWT9NnmkJvec8p8apowZ2r5LSnKE6AGwShzkcTVXGbKdDdSWTXZR",
  "key2": "4TRPq5LCyoZUPmVgFgEdYcSQEvX1VmJaP1MJsboQU6MLSfSjjU6ZJRReUKWUBRJCRVssMoxUpoBTZSndnhG9dkJH",
  "key3": "5DJsoVLmrTWVP4i5Pm8VUpoKbTYjDksFJXZZaeSzaXxnj8Np8ez2EMemkYRbVwxynTKD7LWTXaFtkv7pGygataBj",
  "key4": "5Qqymk7SBVPvJXb8hiE5Q7DiMUmKkFwzArQYYQVMi4t5DnBZpbkWFFjJ9LJXenfNvP1m7uPhTP8bcBqMRnN3mgLM",
  "key5": "3PtyPYCNVF8WMuEDcngkmZtKK9Es9qigCYTZEiUG9zFuVj2scrUsMqhbzN1GKFRsnJb3WRDPTFM4dyrTve47astU",
  "key6": "2S599gspqKqroMjeuYX1PgdmJfUM9EKjZq6apqxf3d57sAiKo58e1ChVDPTNr1C4L5U3nmAMrwMYGcbcq7wQPuZ6",
  "key7": "4AzEHowK582p55GvSEfHywtVWKy2p9xmyn22R6HSAcTWZLzZ7iKZ3NMkxpUNa7BhxG6CTfG8seEDR7CEJnNLpUmw",
  "key8": "52oewnuhRgjXrFEM8cje23SXzSBsLtQaXp94exTCvaGaRmKsyL7951homXw6C6Z3zTk9oquULxChxj4wqMuyADt7",
  "key9": "3SXW6uu3UrpZHeZaLqqXRAUbidFSYyiDNR3RUEu5okH2WAqiwR65comcuRmv46ud4LyxGMRKbd2EetnAhx86Bw3t",
  "key10": "4agEtMPsTW7sGy8rQFRzfTbMBgzYWgzM3ozAwL6QF7XU68EvNXz7xdQycW4GhaLVXuBtZhH4WVChTAzKPN46UtAF",
  "key11": "4nhhNDVrQNYRAbb8oFgmVSDmuaEgVKbbasrzHn8d2SEQrnYh9X9BSEFECCtqnFzL3FQhaUqEYfefpCTHEdXo28VN",
  "key12": "3GZZTEn7YwqWwUcuHWnZuZDA3fuQ6tGMPDYUNWTEvqdNQShMcasW7CP9Dd3SKTWsa2nAgLyj4u2U5J7euHN8NBCg",
  "key13": "4C5Z5Je2xyUosWPUnn4WJp9KAAE3eYZn7t7Xar7ojjMB4fZS152kheCsWkCyR8WaiDcE9fyEQ9wg9J99GrFUd95L",
  "key14": "5YMd49eGKYjZYYVRFs171GcNdiC2ZxyXCQqLiHsDzHJNV44vZZVh6QgzqbXoY9919J9BSpLFbWAHrPGssbQtYGcj",
  "key15": "5Ek9occtfWQn53oWP9Yp4nnioakQbEhepdsa1vHLAhoM6vk7BUuZjcxxgSJxMDKn7GWtYYhvE44EvP58Rgzwn4i2",
  "key16": "4WoeCFyRxrPG6bdFBQMJyB7zNzgm9AdJncxeVeGN1PB4SwpF6DwN3poJHH6D9kaDwcukBmuuji6sU7NpTDQzqfiq",
  "key17": "3tZ2fsXyQJYyX4kVLJU5fMrvi7Wxr6CwdrA1DRNp3Bs5Qz5VnseCY9e9VLM99U4emZwYYD7GkY5KqUV2kP2Ccsec",
  "key18": "2T6GpSEsuvTgskmwyddV4BPj7swKxJ6kRNfBePxCMmzgfegt3W5w5QkLdBXJ7GTUgUqTZzxv5VvTtS6Byvy3sUfC",
  "key19": "3zFAkYV3PVjjfTwsgZihbnQqeNCsb6QPiaxZpGRzy2brTaCyL4RCWP9oUhCb198LHzXg2hr6FJSqYKCo8Xz16MdQ",
  "key20": "3dx9RxgvUd7fVfnk3cu7Zmbs5bQxzKWuoHXF6sNe71jU2B8caqNyDKVWzQnT8M5Bfb2edteFJWXp9cGKUty6Npc6",
  "key21": "5au34dwncy5uusDbHS8Pp7uaqdANtHq1sBw43D3AGKyXZzVBVWJmkMyM7dsP8c5DkuWBtcy9hz2Jqq2NM2GQ6kcP",
  "key22": "4ACcEzCbkBFYUM47fp9A7RQ5T15tvJ8vXZHVEV2Fr21w5fS8SitSaVZd8AXPsZ2KYqto4uoA7PDxqXoceJW6XEhA",
  "key23": "3JDYXaojeAsdQ5BBYNWgmRK1BU1JKKPKikX5BgRZHVRDBXMciQHPvELf4KhcVHZ8x5WBGG7rxbWcoCzKXhhWBDmD",
  "key24": "4oBKYs2YWRsAN1g9BBueBu88UwGSPgH2TUHQao4fKyzGuSgpRPvmvYbM9WbnHDUhiZjpVriNsbMUxjQZ9PfYbEF4",
  "key25": "3Vuia6ouEHzNr5ftXYqqUG74aQW6ApUGTtof6RxRXyGksXyAv2viB2Zr8D4stEv1ZNkKRvbqVJyMnd37m5BK2oDe",
  "key26": "5K2kF5sDocevnzUJdjjmQckfBtrMzQCNzUjP9WgNW1BMng8HkLEaE9AKh9ipAyScgtH4wJ2hiebPJdwxGVk13nBe",
  "key27": "3fm8vWRTJg6GNBE4JrqRLUP2roupoazu1TPxp9h5nqYd5depeYZa2qbtnNJ2JUYu4cQWYYDrg9mRvs4prmuRUibf"
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
