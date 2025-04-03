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
    "4fMEn7ZFLUuFHmnWAu7ouSYcCQCRc5KVWB4jFAXFbNAHkMiVSyyRJX9LXEWAP6gRxqpYCDdqTj5MbCzeUFpAqCcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SFBgiuW137TxhjqpVasNPefgQMEL7FTX9KsknYq3y7HVmHb4RdhMXVcdmi9kMTk8eJNQXU4PcS8FUr6FwYcqCdB",
  "key1": "4dG5cBhp3RbUK4jqmzrCbrp8QpQ78rxxvtwcthxTe18JjvwfxNp7P66jC7wykvD6dKWZYKCQqR4Mtp9Fp1WBiJrw",
  "key2": "5iZTGb25dSN9mnJrNbcc74YHhFCGHNH6fjpQqV6rGUqzk8sskxgoaPxvZTxTUZdvo35YiYLVmUy3Pg4M1jhqQctF",
  "key3": "2TzpQqiVV67Hye3MQw4EYbwG5xtBEG9N9cyfvh3tkQeZh9KgnSoGkdBE3GsfQJdyB3Qr3AAqwkrnEhSfhu2iD5VW",
  "key4": "4719ktomNejjkDwPQDFSBdP7LU2voqJfQ7Z6fZM31tx7ma3Nooy7BkfHNdLVqXYH4fuoHjeahzafP1h8Wgp9axjq",
  "key5": "4mbE7UEXTtCrVGJK6qvVFYCXySBCcCn8YmMf7h1wvfCVyJchqFU8NGwE9GzYAGvrxZZ6gFuvCY4dN1C5afhY4s9D",
  "key6": "3uzDyu451VFzbsNnrYSXYgjTTMG6s7MvMFY5r41mcS8fqfxEQFwTJkZb2y1HRi8L75iNkV5JwitCAgJmC9qAvkTQ",
  "key7": "3Bx2DnfeUri2Eiv93RpwgWmS7Rtbo2qVBazjCsMnv4noikQ3zK4kPDuCVYomEK8RSKnVDzwuNrqn1usDyeRySzUZ",
  "key8": "5PBU8jqFaV1BezRiNHwF39HYmBZ8XR53pioChbUGcauRN8uNZULpBNajuzUu7rr1BWRNhMJeeoUtjQWxj379L4H8",
  "key9": "5G3HjMVHnVCfyQvb6VgoJ2t4xQ8Ws9wCubtpZCUbWX9zqfy1YQbUFAfunkjqA2cGvDjjmdmiY9dXtEYgTL45os3b",
  "key10": "4PtTqTLAKGoSiHXUWEBiBPnkWwQQBC1nd4ueNCk6mfBK5754qv8PWU9Yt1o5fiSEPczn76eTYjcg8bAkDd92dQef",
  "key11": "2TRzbjyEfPW7DhHNP1gs77DBQrYScD5GKRat8Cgd2Sfu8WKYAJFbfbxY8h6Kr24sRtrrzE7g9XgGu3PjWRuexAYa",
  "key12": "3kF5etDNXa758VP1UM6PhcBXyCJJfbxaKuBuUeWpX9bzg2ownk9JaKP7m7MbnUtGZtDLTDn8p2c62JosGM3CGycF",
  "key13": "431ZWJ1oQqETNFqYdE7xNt7wKqNYzHq1on82BWNcwRTApg1cZihrF5m7HU8BLxe6wGy84UGncqwdH83sdqUabbX3",
  "key14": "2Rncu5HeTahDjMaxa1sJCRVNksC3MsCM6GDbD4vY6wpjjDXajtirn3V77R1PU6pbBrzxk33i44cNTVBTQPhEB9MX",
  "key15": "3cizoGFYY4i4hvn1To7ffZvniUS5FntgcwkA8Sx6kc62yf3bKBAjyhonnawbRPsmCqrFMYKfUTzyXsgtjtxq5EBW",
  "key16": "JXKBoyMdBoQrCYgLdnuWw7MuY1aatkBKkLzjSoAkRqmCduTC9EwNVmPA9Rw1TuyYpNW96bUoEy5kUFaYSDMDJKd",
  "key17": "4e6RVTtoJn3AgR1BLsAhXwNZUDV8zPan77tPTG1RSPLyoyj21xym1LxQ2BoF2DqVCRRkpx5Vxd2ug3xuXZwhvaQk",
  "key18": "2wr2rv84a7DYUzJHPeQ1c5cvEgTUtmrJeb63Ph8w43yfSgXW9Px198LtFvZvG88Q6fXhBCXgZchZjRsHeR673KgB",
  "key19": "5uTnqjmfD583B21kANm6oKxoPRDtMM4fXLVWKN5PiFzm2QUFJ2rVoNdDqvVoys2FiijBMSJCLU4iKfq8pqki2m5U",
  "key20": "Ci4sUX59KwtktRruxtG1iWa6gHYgUELNiFCRRf89RctW4KD7du6d7ttCwC34BkyXCFQdkGeJQvqqR5zCVhi99Wh",
  "key21": "3iRDZtndwooJG59LijehHJDpRqVc1GyrazF2YY39ZQt6NKmVkujiDCxtVArToUb18depRNGhrJfeZFqPSrdq15Qg",
  "key22": "5wXJ1TkzX9HkYFdbZ1RM6DmR8pm6s5FxDs1ecQfvgYa77Tow8PscnmhRkq2zdZw6BJRb1amj4QWqtA8Lbr8A8Xgb",
  "key23": "2gh3AmZtdq2tqfD5y81N8GAAPdCMAbfHiDUjnk7fcg4VskqMt8sK4ERx31w9JArKAAUMB8ErueJSMPELAFJ4gtQV",
  "key24": "2ZbrEppkvCs3VWhboBkurVk3U5JwPub5kWtCQ9qKiZQBHdNrdmcSBEMVSYFms5aHXnxU7L2xZ3EtWjcvKSKMP7de"
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
