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
    "4mJQ7198y8HUHiNe9V3areZbxntVUo2fRouESuGhr7Vo7kRdZf1Z8jRQ6jiZsuRhHrfyGkeuM4RcLY6EfkvF9pwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXnXMcdHqHjDRZCEREVgvt8FpKrr5Jav34kjDv69fVd8cXuenSAxujXR7RjKtTUmsv7mayVFs9kNidNvPXEVwUC",
  "key1": "3PgEjDMZNP9SzgLgugL9wR1gBZY1fewFQDxu4zzzSYoSpNJgyjE2ie1rPFo5Zoh713QYfcypRkZRTcRDWxYnE843",
  "key2": "UVKJG4gWnJ1yZ1nnPaFAjmvYjaSkZt1pL2jYxaX48ANS2y7ddyk7MQ2etzNMH71UQ51LQubAcUsMcowxAQwT4cH",
  "key3": "4SvXvFHJ6TBYgJ7dJJmqaDZMzV2oTqPCD9Q2mxGjeWKLjJZXFAU3CDnK4S7BH32gzcK7PeorXsnJuqVuTpnxFSmF",
  "key4": "5JzLu1YWsLTa4XueSqhxQa5jh6waAxaqrjAGuHxuMdpxcC4G3yH7ERFwZ3tav27wXCpuvLviZUzSHVhet3hpgEV8",
  "key5": "dtjPNw9bpGk6gcCaDQBhaA7vEVYBxATAeBN72KT4qRwV1YpMLz7wbuWYH9eMF9g87Q8zgZs4dErSxUPGSKTSWk6",
  "key6": "3LjnPo4N4Tp44pMaQk7tsjn1mM4vfAuhVuipBHnmsZUrS7Nur3LCSj9jSQBFRCK1vUQ7wpVYN5h7cxp1azovWgnG",
  "key7": "4e7QpPFyEdfsSPMiFidGZWAMPHBT5biTZsUXBjLxi8FoWRTaPKBiNuJkQp6reJRGdYvEEhbN1cW1a6sHpMsKG1TW",
  "key8": "NtC7f99vxLbiRoHKwb2iXYJ4MLYt6LmwZWZt8YmVmD7Rfwdc7Zfv2cqnuiLvpRC5FtEiH5cqciwQrrVCoLfgQJT",
  "key9": "5vCPg4HSbLgvPMvbAAqaHHrS7Cux69YQpqnA9AHFT8tjw5RuyEvPpo5kaoMKhC46qYZ6qMKj82cJ2kr8DQkKs8mY",
  "key10": "t2VHsKJ3WNjDVo8pFCY9hThsN5BpVSGvtrsthB2HoETHPoLQJLAm9Sgbe2DBHUxMqmHMA2kmnDYNococ2YZEhYo",
  "key11": "4F5nqeWCVcGaPP874BdcxdUDavm7sYPTN59yTWnLigbNdEmPSjYh3U1NEzYioDcWAqWcXyfZY6JmG8bkkibtLz6V",
  "key12": "3ULPmzW3WTn557wS4euRvFpAWCqDghcrM3CJbhAx7uwczwgukjLYRyeVEZaaHKFvaNgRm8FkGWH5sa4Wk35kHUWF",
  "key13": "ntciCer8Tf4emxCpDiUmH8UoKK4kfvNCFETcHty8z7mNPrTJchMSMTZgsFcMU2RW27sVZrmwMUgzqX7s41FbuHj",
  "key14": "2qFwcYNCqFfxiiiwCe4xAxTNZ1MzcBiLt67SdUAs5dReUMBpqkeW8BGUTKC3d6zCj7xgpR9cpgkRXi4MAvYVQCxT",
  "key15": "sv6j92p2Bu1adUUmeUKBXV3enkHhEUDAKs8YQRETytrFoHUazGjJBDNdvB7pAo6bEcgvocKyKBYzCyTQZKQ4P2H",
  "key16": "48VMxSKjWyX1bBjT9oPfSqgnMAckDi3whUmEuyhnPZiAbzwUg13bjQXaA9ryuTWj6HxMq6d1XZrWvoLTZc3ZdJ6H",
  "key17": "42YnqjP7YMCTekEdfKi7LjrhwdfPbE2CKuFN9GDA939puQPJs1Mirni2462h8tuqwg353V7yrdD62XbSnnHHLcHU",
  "key18": "4LPAM1xUFE1sGydDqR1UiGmZnc1N8ex2dewgTFfH2QFGSvhBLWAuyzQQEZnyaoyGD4FjqCoQkEugxahAS1rrJcyr",
  "key19": "5KwYVRs2wGrhreDxxPPAbL7jwA9QHHxjLXspmxhXakecDq6MVqfbF27vxS9q5iKhp8wxNFqFgZRWykQgbzzCKruU",
  "key20": "N5vV5bo4qyDkg9f4CjtcwMDbLFTByRSmkAd73LswUgLhH5HXm4QQ6hwvTrANadfS2L5KobEm5xUTRFXgTGXJUBt",
  "key21": "2nqmrpa2vmUfjvvXooA9TwphkhF1jmXZNJKpZFwhWaK4cqg6QLAtf5MLbMdUPR8rLgVVAUGdsqeFDNyToVa3GBwy",
  "key22": "4cEWspjB8RBwXCHQdGEFYVmuWTFMfRKcVdmxAn4hsHebLHJd3RNu7ea6xjvNV4GeHE2rpKV4qeFYX7M94Qfn2idA",
  "key23": "4EbmqFXVhiVM6ZdvXQkbRTKXfxoAN6QdZnfr9bBkP7UvsZRQs2UdjjEe93kZJgUhv2sGwSrsp4jpKBLy14ikm2NU",
  "key24": "46sidx8NDLdiQfpXT2EE9LLKnsM5RkQyBauUfgLuxN9JLSbZdGS8UZWzVeXB4TMyMwQzSWT8UjFxWybWo4viPjkR"
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
