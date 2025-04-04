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
    "E3a6fcW28pcPEzRRpBgkKVpgBSFdmzCYow95sdrq77gCuwYBkAMb4CiZEra3ep2VRFQmZttXB15G9dR8qTGzwxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tdtXrYEdZGNKgHE3LJrrvRLTQRsU9iuhaJQzgMQSa5xSUDeUjggGZLiDCA6D4LTP45X1ceqsh1aYdJvkJCVx8u6",
  "key1": "2qVGsYGPEkG8hiHEa5HVMZZYvdd26UBU3csng1tBzDhUereTdKD1DG48B27T8BqQ6fpZXiVT7wKgKfRtBMNypFRe",
  "key2": "2xxJpzdfwrXCMzSTdjiDDvS5cUyRFq9nWE6vjiF9sRxPz844wr1AbhxEtD24wakJWfeauknHe4Y5XemgS5bK4hxY",
  "key3": "uWsaxWrZJ9RfTduKC6GVsrZtoFmDj2CTTYJipKkRkv3Cf1rH6KUrupj52fDZMhXu3ULpeQKDbNuwDh1YBsr88q2",
  "key4": "UEaKnHaYbSNMMK8Hht6gWekWUnmZNpoG8v71RXCuraE9BxJKayptBqJ5xnDAS8ZsKFRBSfd77AuCfyjsPbBFCkj",
  "key5": "nuzWxsmdk6qQJNuV44uDzWkaffvQTKgsyGy8rvNv9KcyWaAKK4B9nMZpbtgQpKiqfVoiBbm2qWTBXGHE6RE5nd3",
  "key6": "DfN68DsWfRt4VQWQTAea3UcWHSH8vXt7LLvuXKjCjV2g9xFTy5z99tg92VA9aUThVKR8vUvdSJXBQReyehE4RXL",
  "key7": "dyVwv2NQbMdaRyTsbcHEBoarsSLiSKLYoLksLkYPVKbFmk3FnxsEnZpGMMjSJcKUxhzdo4JNHdphUWpRbS4qxKB",
  "key8": "58ovLF5E5WtCH7RHtR5wtBSfd9C6gcwrnbG9niLEZFySW2LyTSW1fgRhkk8ZMT7WV5GcUd3eqpFLcdKaeiu3hnjQ",
  "key9": "46eN87Y2mKj2PupYM8uKyTT52RTr8hArdHG9JwNrmB12zbeMHjrC8GLXhTfnKMtDM443Vroia8spzTqy9adhcu2U",
  "key10": "4SMRAnfy1A4NaSPxGj9FsDjhtzWEEwbPkfuGrzA8cxP2zZS4akjAU7z9oCup59fuvdBStrcMb33HjudVRW7pRBLR",
  "key11": "DUmjiv8CHMTzgJVzYWp4uyXb7rug7jp9M6XTw4EvN9NnzMWNtkS5ZhELhof7igCVgEMz98mvtArfJvd3rJcfsMT",
  "key12": "3dMwWn4vMKMAXkopQoLuhZuppX3Db2TWhd97PKbaYkwkNGirVcn8tq9XqpPhPo5Zx8dUYHqANPWEWPf26hTRUrct",
  "key13": "3dRSFR1AwoT5xE3svHoYmyM3vQcUVXmn43uFDZ5ivmeJWX43w1xZiPiWa51yWNhrp5Tt7gT9M3yjneLosRVpJiv8",
  "key14": "4LfGwWLtmBcLdP9iwC16UoFMV4H19f8GoPoKoURMEmBFZDtgdvoTgLBMvMHrHpPa5gDUaDkWsjUseNypNTJ34Gdq",
  "key15": "4wny2DxY3bYmft9G4xp4YPSWoAUJcFrrGLMTH2Y6iUkjLosK32M8FGU97P7FT7EX7hbAUKUtDHCm54pSe1TGvPgb",
  "key16": "3oSDXSx65K1pVLDeKBVwQhbPbgabSQYuke2e3ACdKN9CnD7AMK6rk1HAG5qjcbSfBn74a61WpGdXZBdCdzzBGwKk",
  "key17": "2m4sCPESU2tgyX7jXoJo9WrNQPi9Wt6jhGrhzLAVjuG6bAyqCcEZVgKsjdWLy9kG7mY4LuuhVkzVydxJWsMwrECT",
  "key18": "5aGCchMn9ayCwcuHmcD5RzchTSGdw3rFzdjXJ9q4XuLNDTEznM5dsv8FKHc1Y5wSnynDARjcrYLqBvSG8LjRNEHQ",
  "key19": "3F8NRfG4LwViQKCDNeuh8WDubfzihfvgRmninAQTcf3MNmpjxMX6b2XK1J2ZfqrM6X8qT7NDxwSLY36xxqwYtJwk",
  "key20": "mHu8GpthgJWCjQDkvMe5WWBh9QfekB9Y5nLpwj47NQwxKQDZTyyJp71dejobYeAY7piL9Y9vxXCkbPed6A6zZEz",
  "key21": "4WHLf5cmbbF3JXguhmpxSEKfCmF2dAsq5Ad33Apa54ojSrNhBWRgkbg1HNwdwAWQVWwm2QX9QJ1Qr66s5nBANtX5",
  "key22": "2yZrHAbpcnsFZL59uzaq9sbts6v7KPhrABgV8vnEBEFZ6LAp9n2UJ7BRbWzwADYz9bFJaZyAR97kYBtGvUfZ9wsm",
  "key23": "3CCZx2zWnJu8MWkkpKDjFn62WXejTXJHXvbo3gVvH9RFg46b9SszrPKpAkGZHy7NJT3HqgLYyhuQ2YadRAGLxrWk",
  "key24": "39SS2B5pu6f9vCzrfjBVs39iwmDMt1QY27UkwTZSDKnbRAB6yJNRYgHaZhwFthwfBrpFNVpYnzFvybXTySS6cX7P",
  "key25": "346ph8oU3voa7oYuqnRr2qGrJbfLrJtbgJrSbUXLS9mu5qBzUvue5Hqa9GPCjt7KkAe2sB5joaBkn2QJonTJT5vu",
  "key26": "3qck3eUDfW3dmS5uTCxk72wjia8Lhap4XGMPNpQXhpfU3S8Kn5PNsu7pP57deP6eZa1dztz9Az5JCVv4qbEjoUmc"
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
