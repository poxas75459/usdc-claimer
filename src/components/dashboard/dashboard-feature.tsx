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
    "4ggMdtYDFL68dvHUEgbigCzhvdcryYYSCR5zN446DkNg7Fs9gVSQfHh28cWuiLNaittX9kNwdcY3i8NsJQ5WfbuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBy5cG4PEDdMt4GMumJphKb8sKQgh88kGgTZfMWBYe461kaDwyMk68LV9PzGQkvgjKCaSQcFygMN6KW1qG5zg3B",
  "key1": "5ZukfURG7yksPAa7UnqSPMgD1FwbKUdiVg8avvvUtA2VSJrtpLc8Y4V4xsdzrN9LtCpbF4sfH2jjueJu4Lirfscu",
  "key2": "2ZCJxAMHCvbVP9ecUWfeALky6CFtpb7bgMEswkELCwYs5Z2kecQ8U9Bb5a8TQqQCCs5HeVGFLCwRmoPRDErfH51r",
  "key3": "bQ6xzVDayN9SFFrscVycoxARWxQqG8kvqGKSxscGicC8teGRfypuPHi2UYpPXuqv2C43kGNQ7pfq5oszEUAYxFL",
  "key4": "2R8SzU6pGhWWBMHJrt3H96PjTpBUH2fkVePbDTwqDmBmWoAtGgB61t6vv6tS54tYzJZoCWeAyEZpYRNMtL6fyFm1",
  "key5": "5W8uf5mW5ybUMzTgaBUxDLfZ8LCb1LPGVTTMRyPKKGefTCeHgGHpiyvqthXN3hTH6sF7in2HJL3Uxswd3gXcvorG",
  "key6": "61NCt5mVqB9hQnR94o4WfQoJcvkZ3Ghk1qLVuorwENPEJRdLcwSU2WLNuokLnqN9qKZKA22qMQaTyCcx7aYpibow",
  "key7": "5qiBjX5XbbWn5fBBdnwkMb8yzVSnpcCUpyf3mzGmyGxdZuTQX1yw6kTf8V1HD8GPpXbkQhf1LXsniT9EioGfMWcb",
  "key8": "5WfASVdRCpZaJ5pTyTrcpKBd8GcF2SVLRMowj6cRiaJ9wxNVEc9pwBYGnoDAPTgSxmgoGgDeiLdnQnCpncVTjJeW",
  "key9": "Vb9vxU966CqNrz63FjwbCKRDcf2NDN8r1ULt5QStcmzKNhUAYpX2n1i47WRMr6bFJksSmn9zMogftTa3BXsMhCP",
  "key10": "5S6T9fSoJCoawM1fkoAjk6STZLvPC2JCwctXMxWpFnzUWYQewzqNA6E4oAXVLk5QoqDZNDjjf9oQmjLaYR4QXRxi",
  "key11": "48okL3tH8acHB2KNaGFE3PuvrjnLa3Q4Wyv8gRKhYAJ2dnELtDnKP4esByEbGSG9oJx6rAbCYZWZtkZTiKM79YSt",
  "key12": "3uC13k6dXQDCyjF8ZJoZ1pJZiHqyPAVtAeopsSLB6oUXBqttfMGmojL8r5M2NrikvhoCSvR59J3F4jcpVq18JUQu",
  "key13": "26rURPiUHoiTVtCQJVA64pscWqxqZaGbjdkZQTmPZQBJueBsBdvUXHg8eLbDoELonr4DdjFduzD2okLGzZfTTi1e",
  "key14": "2AP225oVK9mwRJ8EaehK4T1qtZqhCW1L96Jvb7zq7fJ2UPQzPQ747qeK1nAUZr5c3kQgsuWXkMtwdQcBbT87jyxV",
  "key15": "5LfMuubuqSrUQmedKvi3vRvFZgcrkkpv4StwpiegTHXvhK6Qpy8o1s4hyuGBGMednNNg2KkbALQCHopCpXnqbVsp",
  "key16": "Jj3EpbRSHBZCzXqUmjC9eCQm7HWYhrGJCckyNrRAYDAt7H9832utnU1Jsv9DsFuN3vNCS9a8kZ5ZrKU9Zneedrf",
  "key17": "Kw3kKLDVHHX4zdavziBpoFoJKYvJRHoSvkkF7MKdZ9CXH6gvfDFAqtEjZHNhUi7LU8AEcWU3RteDpf9WXJF2kkr",
  "key18": "455GRpiFfrr5JJs7qU8tBqqrd5MVBQfSJpACr1oZS1fhXGrEjCiZuzRSZ9fPLUZ7Fn9mUCr7d2forqYJpCcWn8WB",
  "key19": "4MHmiUzT6BJG2e2ty1wEo487QPW1oWE8rtACESwuy3f8PcVDepnMSK8NpNjGJ1Ksxmo4yMzWUerLzrvbw9RB1pww",
  "key20": "3YfaEP7X7GHzi7NrDdBzLYJGhz7GfD2Vn1EgYQZNQHGLtz8xLtmDkM1PiYrSZFS8DogvRCqeKMkJJh1oUtEJQ9mt",
  "key21": "jDtXhLJR2kRvvPrVTUbbegC5nWFCuCczwr3nvkeQCUAvfjod1mkM6i1i4BUKk2BC68qto4wRq5EB6rnHsiX8qrC",
  "key22": "5XUe5HRkB6DEusUZHRwBrHWfezvz1jZmRxiWh8BsfQ9hwaHwUr9C5gUSny3N4YhAK2hhPGUQuXGBrsSFpgCRQ25v",
  "key23": "46fRmtisnos45Ph4iZhSW3CHR84YKZj4AkzMKMoXdjMCWvC1cYGiauazXDcEhcgWbViPRBrh9R9BgNQD2dSwhA9",
  "key24": "FMt8d5ZiH4ruVRDkREmUCrKD88bWwWw3bu2JM9jeWeEzdJTxhC6kDJjm37YhBGLpJb5dmQyLXUYDWputodgstCr",
  "key25": "E2aEc7GYeB25JVh2UHbAi7xB7o7wFHWLNpkXxyTdsthTngvzkdQMDBqSiKs1bU7th6MR1U6b7yr82m5EB45JGd7",
  "key26": "2KcyykApaz5gbwqdH2XL5DpcM1wZxzV6eD5MqxbR5xzvjZ4SEsZnxoX7VVo1cafqejzMpPgJs6NEDhxMR5teaTR2",
  "key27": "3U6mNFrgbyrJaX9ps2knAqB6YrmA2rXyptoe6ij3f5mRnztZaTBwr7ZGWkvfepQvXpCTR8fYykeCS2DRZspwtKxi"
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
