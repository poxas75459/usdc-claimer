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
    "5NSnKQV4fG3bCraWLJgss1LBKgX245BTxVtymBcoorHzstXdd9RjaPonmzZuLfbf6Qkz8gb6xeHJ6U2r35UjfAvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ru2HLkvJ7gTSsh36iNjNSLLAitR1C5DDCc4rsJBnUeUKeyUAdirb519ZGyH1usaEJAqdnNNV7KhU22Kn4HcdZVk",
  "key1": "5M7cQQ6LpFsX18CPzqLsHeJG4vqVqxj5tunQNG5QN9CNYJEbPxpYUkmnsUBkUUKbV98upSWW2BxbYtnJ7dJTv887",
  "key2": "5haH2DmA8XZFuXqUuCCJ8ey6cFy55ocPSi45vEuRyK4oJk7p8xFChtY4umjx1eBV4grEHYRzsByJL415jhwrJ2Cp",
  "key3": "4YZ3nifjquscAW9xuQjYuwwBHVXKgKhULEEhhat3JQBHkd3sjsryLyPLZ6h1B5PLwre5TCXUzuEPUx6cybydLNRo",
  "key4": "3TZcn1exzaEss8vfRyQqs5Tssgnbmdgk2JMe2K6BmVgAWviKHtJGK8D5Mk1Cukhkpaqc2sSs84jxPQ4bK4SQwybi",
  "key5": "Xf97qQDYCta9UtFyGJwhKwd2qFG5fTpFpe9E2iQDySn37Y2y1X624ejoa3RNtNfd8VdZmGeaJwWdq1UQQFXgepx",
  "key6": "5ZwdsKqbk6Cgx2ZU3YdSZMTj3NyVLRyqaJdHTf7ZRvvt5eYVMG9RxHZ8n7owkNqViRke6PDnsJhJpPmMjqXz998A",
  "key7": "3vnpFcmeivG7C5ap1Ls1wYUFgNWV3ann6ZRbuEKx4RxLeGrnLBSdXNfWMcBhrtDmv3mZmA2jHmiFtRD3dir52KCe",
  "key8": "BP1Bj75WudeczPmoVJKwsEdiWTajGhv8equLsHqMYnvTrWGbfRj4ucQ6ESTXLnaQb56qDCgM79TfvGKYvofCLs6",
  "key9": "4fF6VAk4upLyUCpEehCU2cfDqL8tQ5oJba64aNtjAtY7woqEPs2ohA2snj72wTPjiDui59koihH4feZfnGy4KeWr",
  "key10": "4winjvWJeadVjz7azvGP7HnWkp6Si9ccEfZ8D16fGwpN8uLVuMn5N8VkhnkzFTN5fM2pdEhDbKq64SiRNWRTfyRv",
  "key11": "udF42vd1Uds1rvWfv4V4NaqKNyeojbveqBsjsndpc1oe5HjMrFS1gZnno7nqpqtURAr3DhKuFJsU5wQb1fXhRdk",
  "key12": "41vmLX6Pv2Qgpwquiu3htLzxrGsLm1sdN4dbWu5zysbqw55K97FoTChhb9bacwmX74Lof5z3Pnxq1hurkhrva24z",
  "key13": "GKy9x3GoKSpfmnWshkCX1ighWFMwnRv7feJB2qTZBec44vaD3DxnqYjH14ER2zKu8shWb5zFDnmn9VfoZg9Hv27",
  "key14": "38Wy4QG8y19ukrq2w8CqwN7EZk6zQhwXjWzo65Fd5WC2LVh4GdYNxX2ozdwsgw3cq9ySD8fe2jZqnToy5Mh6pzUw",
  "key15": "4tu1a9td2fwNCGxNLYDUPnBEW1dK2UgViXVQPWcf6BJ89nR7y8VWbVzqpvtANy8LV1akyCCsLL9XWrHmoU9oNi1r",
  "key16": "3BAjCwEtGC3twXDDKeZu1ZMVTkVazCaQnyw9naZ1EeujJwEuefoNYt5pzNVvVdPMmdj6sUSw2DSSU8DQ8sqiMLRs",
  "key17": "AjxaavzxUGXS1eomkikrAX99buX44hC7Gs5Q84V9P4pkgPhJpZJi4AhqiYg7Ln8oLQ7tHYAW4a5XtLU4prmwXcV",
  "key18": "2CAxhRQb9EdH88jd1MnJJm2ydLdNqHKU85zox3tiAh5iYZNY8MbMJUCbX9BLKFKEf175qQVjtYZ6aEE5bC2iBR2Q",
  "key19": "4ddzvcFnjbwLuQmK7rfZPKaM61DBUF7nLRXcN7DAapbHdzR54edgAqiPzUBivsEiKgeu3TrDmT1QFfrZxAg9rU1L",
  "key20": "JPjpsbcpV479pPHpeePokxUD78EKCXhtuRZ1jGboo1LQXj4HR4MdvjdtGCgE7DoUWVaaA8uM4gferA3R7gpBRPi",
  "key21": "626jGAfC1fzcSjrqoWVLpmwn36tqb9UeNjkwCJ4vYLocLbhMv8BVpJeQGnBAZ4Lm75ZixboeuKkGDBBcHHESi3hp",
  "key22": "4BKFm7KuY9EPYBrZCeoCYNF4r5fMhL1KPqNsGiPLqs6HNyQ6eneoRd2a9vfjmKqiSv3javc4uxoCUtzawdqRLnL9",
  "key23": "5grnbpKXbM5mGTTHsrMCVeTzNdf13ELLDSPjNozzRL5eReLsHGJkLAv92NQGS9EgAWTrW7YrkmMtejqUTmVFfVFL",
  "key24": "2wsQ3uD2hAX1ZaAjNL5eT6cWew3YuQCsm9gBFKPtYWunUf5ziYfBhpWbPLUbK4RiDHhHeuLyYHZxEVPNHbi3K5E8",
  "key25": "5ddffdFeCBTopn8KaBYLLzbcnf1RSVunhsEKjga8XgQGAKN1FPytvMn9g7XMaqRsqqxfcz7i7urimE9Aii25DYev",
  "key26": "24bzrPdrpfbj893SPchAD7Qq345BqGUpo93nc58pvuwZ3wnThJNqwJCwZPshiXRSFV6kgzap3Cq8F3rZieCANZQN",
  "key27": "rELG6srQg5SBr6AeszB6aB5ixQYKhC7WtreddZ9TET2MvdKg5mcBSRQaWwGNRCnsUjPCVLxgUeU3XQKGBRXVcas",
  "key28": "37iPkoqMqp9G2cpeY8HaFxGpfvzxWKfujts4eZQrAkdxkYneasvNXr3EfVeriwToDBQs9VQMBsAcgjbHo3zG3nhe",
  "key29": "5Nut9J4aQWU7S7xoY2ATJJuPCQPES9FDUgsdQNzN5dfcpTFpCK2vSxtqP7BVL6NS5LJ1hGTs49oTTe82NCnWjWyN"
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
