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
    "2sBt3gQzqb8X2JL6c9V9TU8eham5EBLDebvGCspeHnL83xGgbNcgF7drNPSkY7d2N9rXGVgVbLXpASWJSmsWVytF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gic8jcQMT1Ksw14ERTB1K6SsQJ1HoVm7QugCvnvw3XiUWYjgQVd8YzKappSJnJ7eKTb1B7VLKQ12ysSvrf62Ya3",
  "key1": "59YmizoPDxPrVHN3gVF5jvfNZWQAbPaLgLdVZU5E3uouBdDenM9VkH8A4ZZDLh2FjDCp4dB7RxxxuRAq6frxvifY",
  "key2": "AR4ik6TBAqaNhvYGLj6tmZHZkt6ePtTmKWGR91M7iZSHkNZXghwk6kEXxYkEgSQmpLEMAYi1Bh5vgtSen5d43JN",
  "key3": "J9vsyShtuQMJ4UfQ1d5wsBhZe83xpxeoHmrXkgDPB5SoxgwyjjwoqThknc3soK471bBX113EqKsz58vmbHud98S",
  "key4": "5fsAxT5RMmhVCk34ZKramjN7nPSPTVB1eUuWbvdPmEFHYLGp8n77ARrcVCqbLqhwdu2kr4KxhnZ5j9f6V4yR8nqn",
  "key5": "rBzAaBt5T6uxmVN6sStYdbDUe4zsRrDAEjY5MCbS2NgrN4asrniy2a8ViAtWCRqLY6eRLpXUGsbTtL99ZqxhuMq",
  "key6": "yFMpuPQzTvX8VX9C9jDxr69uUvYi8FVMQVLn8tfdrzcnRP2KgT5ULHn1NnAdM2Gym8xwnW3BnrRi7hKDxG95dkL",
  "key7": "3moUoheumAPHAZ6yF6J5YkyTkiKQT7BQYLaeZfDT6sjVLrq9eZ9onbJizW5ZQcaoPuub6XDbzbcU86MNB5AwiP8B",
  "key8": "2gjvoP3FLf84XqyDiMZFGYeFMp3C5wUQMUQoshKkR1pAbAKzoCfRFiLrZbbe6WUxf6PCwMDF8GbZwbnBTB2nw4Wj",
  "key9": "5ELJiuBVMC4HTrCwRquv4Pp9gzeocPCayz7pmrZZycjRtTVHmkrowvSKQZmyM3k18TwrWxTzTyEY5z8oBCWmu6Va",
  "key10": "3pXFVTzoq9qpuhFzBPb5KbXiuREu6Tij46wCbtR5goPemQo3U3io1xp3LnbJxcaUR5wGE6oTAJYfDCpBUSXEnMzT",
  "key11": "2Gh1Czj8niCcWkPvCydf5RaLTA49qvtoLPWPDAteAQUmvbgmPKPi8X6b7VokT4ZukXPZtWD7sAuXRr1v49kd8bpM",
  "key12": "CCjyCEobL6wMfLFX64MV8nrdiJMvt6rTaDJgmfwFVMRm6U3UVhhBm5e6jVjod8s1jpTgCp3wEaL2tCa7qK39kwW",
  "key13": "4mauiBGm787PmVmgkDDb5XteapSzbCNU2j7kMkkTbR6HQ6nM1SXaQB7okuYS8yhY1AZkBUzSVPschkLHxR2PGAvQ",
  "key14": "5JvyZtNaG2LxbubJ7n9p6wzphZDdA4TCpW9uQ65nEvKhG3rwaamjFt4nRvQduE8QHjhTkXac1F8WAv9R5Ki6a7En",
  "key15": "t8mQC94UQQouUjbgPwxg95xReksjsxuTeXrKRek8WoAcVbLwpM4izEMzgHEq33ZBSjCYVe4yMho22HkLA6Cdzhs",
  "key16": "5SewDQsPZwGv7Bqh5HRL34muZ95QmEJnsUESCNFRGoBd4eTejQN35a4X3H4JZua5CxVC9kQU6Fy8DPH7r32t4LYB",
  "key17": "5i4ccPSLVtPe2EyeCCLqT7TuyKhS6zQHanZq5S4pbgGevUUTd2Rv78gu42weN2stn3i9ynJdpsePx1XR834T15Qq",
  "key18": "2ZUAzts3VZrvL7o2uepjmkwxjnpc27csFpXb7gD2gN5uPFKtgsMcA2588MruFhPrv4zvKo5TqiqqxJB2yi24m2GL",
  "key19": "5zijZncG6VFeL77zXnEfECvsJzeioX2FbKcY4nFM2HcPKPeDzQHn9VPYinigtpR24s6npN4LmdGxcTAFpJMFCtSR",
  "key20": "5qv7qEuEpLnDUPoNgJtEC17PTDgU2XJCZtNypV9XwSqjazyqme225w5AAueq7fix5R7XsdX7JQAmXEgui5qxEwgQ",
  "key21": "TXpSiwXgpHhJKqqrAXmLsQqAbja4uJxbqDpk7K4BhjTjvFPRcWP2wu6smawkEZVGGzGrLbCSYtizBYaoxEPzn3t",
  "key22": "4knb2Y2Rsoq6MiAyNEgnDh5KrowbaFYgfp9ocXcgVYhpEBL3uFZiXBAMz9vsSREnSKictXMG4jnch6YGQW41brkU",
  "key23": "4W8QNYNydXveQUjpNMemrAoN78CZwEx5qQEzMKMYzEQpCsnauppdRoEUPRojBimUUdvhBf1V9midRbMMaMCooqQX",
  "key24": "2V4keLiy17DjNi5gMkCXoK9N84nhw5Vdw7PGfTaYA2N5QXhXkCnJydXJisPPKZUqHrUTDkP68qR9DPBCArM8Ta2S",
  "key25": "2pbBvfaeuaFw17VN9tobpgvmjUJNNhpQNwzBCvSmUc2gGDaeCBybnfyvvmV7ZMYK8tgF6Seb55bqNUbMsJMvHces",
  "key26": "28TRbCT22ZQVQSSNcnsoVPPSj46YwngSmN9DhBiermJKwARdfNqTSkY4ZXU7XASPy5jFKA49htP6bvyPVou9tcRq",
  "key27": "4Ed8WGgX3kobMwdGUsgPtLg4qKdRSX18jBAmdwXse2PLJ9rSiWfSfVDu1eXY62ub88Sjuk88BLREJrkf93yuNbfd",
  "key28": "5yTi5npWETjcHFwUnyN4m4dEc2g5CnDv2acZZS1u9JnxEMSGMoWBLW2XvnUnnwWjWRfwzWfygFnRctYmYZaivbGq",
  "key29": "29tpZZ4qPAdME7bGQwbDVjTUzUVg5S6fb4FjrSqSah6aNX1s7NFYU9SEyDkqE3sCdbvgLULptCtjZ77qxoBKCFNz",
  "key30": "4Uhbzg2eZjakJmyE2dKTphcNFGZ1Df8pNAYs8cjwFaZ4GDUK6WEdwnE2paPKSG4GF3Qauu1PRU9DRwWrPHPU3afP",
  "key31": "3fhyQa21PVjCiiQFT5q7w4QU67hAMtE9trR1NGHB4wvzuVaxHRneix9G6uySLfBCoipVarnbbuemUu4vuzJSNhYM",
  "key32": "26ShjBY9thH8qfswzqjoNEBqYnuhaiJia5BrTuBug6h77QaxCWgj9QD3qkqwa7gYfx7RmdWT12jNQmHKvw8EKRBk",
  "key33": "5bY4R768JgAt2o5umjjknUFHfaxfvEyqPYSzstDjPWpisDdoUZYo3BZYwA9KnadkHvqQG8qNFbM8QYUx8fgnC37D",
  "key34": "5aPh4vezShwcTmjNaBMQZuc3zRp6Y8i3GLu8WqJiNGBs4N58duDfPaH4Euu4jhC1oPN2dGhoW92h3hmxAhY5VnnF",
  "key35": "2katX2xoDBPCbKLvStW8GCxmCeBm5ZSsj8B8ujxPYyCpx91MVQaqXmuVLT5LzfQzJ53vBEHb3ujNFDagGCkNggJG",
  "key36": "AWBButqtFQkHXnwAtYCxr62jHE5g6yxEC671a7QWvXKWqhLNfnNN7zpEs322tvP81mDLAQ6JBj94eFyDW3YzAim",
  "key37": "2Fn7QpzQVvFMyg8dVaPbjxqjdj7jhQiCVYHjxgfZK4XmSvYBTmW6BqwYL1x5srP4sMJxH6RjKCFcUPKBMN2R9x5D",
  "key38": "2UZWqfmpnLC8iabeBdLQeNycEzSAavejBW4xLaSHAuAHG2Mixff8Yj3zys22Qhpr5V7Uj5CXyxvr6jtyAHgtvASx",
  "key39": "2nvv5NsaoeLoqv2A5xHE87DwUq69ZMJxS1aii8Rz2t2WRL3i5ytB7gXGrPzYFqZ4nfKnLPEwL8dRehqbwGAUdY8F",
  "key40": "3Bn3cC7AA4uZDH3Nua58ee9sTg2PPrzJ3wgJCJ1oKczAo2ZQGZQneb6nHjW1c9nLv9pWiXAev54CbxXfpbSAQ4fA"
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
