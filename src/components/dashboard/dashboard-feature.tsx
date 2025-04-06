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
    "5C5aiQpnB22CKEZo7i5AsdtgaP8FPqinYCSFLx8czMEdWSM3jsnJJsUaTKL5GS3D8EBDAobRJw1bLm6TyDgg1yRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q7uu6EP31eejGQFFMxCqKe4HVBVbNrVtqqVJxUTNnJMEPgEQ3pqZcMxBAmReUbnyVkL2p6DKEoCsq7dcGLejKSe",
  "key1": "3Mi1xFJ5nioY86oGiPqD5ugeAz6RFSPV7fQBhasrdNB8NZJedPjwUrfmMn7Sqw15gB5MSYZEmPAbpj3sjtRxQyNu",
  "key2": "5JXgBn7UQpckyKjkGtFRAWRwANSq9eVoH8Tv8S4pMapBAGArR129FEafty9W9qdqeYkSKLXNCf7DzPW4Dp19T2Vh",
  "key3": "2yAgUdfQD9uTDDRHJ4E9QtVqa5PbtLEgDjxdzBNV6DNjNpgHGmKQvX4PwtZv6c7v9ek7o2oaWpfRTHwqt5F1nLQN",
  "key4": "5ib9CeQHDhsz34zHXaARxSub1b3KyJT9VENBGs9kFLavr5Rv2gfxxGQXd369LL11Ky42sMNbRpC9JdmdRg7uUP29",
  "key5": "5aXBgDUcNWb9UnUzCUJyGvcmLzLD1ZJQXQzeR8Kznm3sybie5EEqMT5XTFnuFofu2rqVhxbpEYz1WTi6Ef1CU6cp",
  "key6": "3FU1MziaaikE3saZYiDKV6KPaMRn2VkXiR5WqKhYgrjWoV3YChuFXSjv73GPfXLs79fmJHDBgCbAGiJEQVneaAVP",
  "key7": "5xeubjr6cotwyXJzoHAJ78PkN2mUXEVD1vrnyG3Q87oH9CN3XrkwUXwXYc8f5a4TXYa6SqWV35hL827iPxpmMpht",
  "key8": "2oJmrDzrVw51DPvD4diVpjj3PwFbiugKUvY9NPGQX4nCh3KJ5LPJhs3LhDgtubiguvvbUjTuWHQV48pGRR9X2N8y",
  "key9": "3Vw6heNQPu2XnzANLKZedZJyoMfK5h4wRRTtUtsku7zvrXDmFMfb42LYoH2y1c8uWja1wJHewt5fyumfegGSrhWp",
  "key10": "2yKgcNLzuFCMXhVLTJmzNufB7Fe8g8VDX31SGtPP3R8MGANFU5ezsTdkjdJ7mE1c6WekUSYMx1xMH1mPt1Rfd7Mk",
  "key11": "4f1pvuGp4LoSBfKU89bHPvHxEZxuS6pSYdcsGaT9KpoJQVjz8KxwHmYHSyZ1iHV2TJ4d3nBfiqpeqyfcK1n4yEuK",
  "key12": "4foJcQfmQsDwF1njtZf36nntxhaCGS9BiE4AcfUF7rB91iA3C1KkF8yRnPnVfK6BTmsBveLZvQWcdHUEQpZAuK2q",
  "key13": "3Z4zBty8ez62MAxKnxEEiTVGsdM1X63BNcAPb5mwKkex7cGVAMqqngzxaSfVwY61Ld2L9sCtnZpUy7Tmer2s4pif",
  "key14": "5AMNJHpFjJ5mBeQtK4ncN53mCgpNthvuW6yghe5SGgTSJYEp6nTtFmA2WjX34SXbQqsAqop3AMWK2V3owuLoRfAy",
  "key15": "4uV3a4ZWketzUNaN8CXscsnZ6B5y9iYqaLoLcZtDokgBKCwnEdChJ5oTFCGMyB8EwFtDMoiiocRuGfekV3whzvbL",
  "key16": "4SShjHPmvUhAGkAKGyWA2JpmTjTqr2GN3KNV2uz3rCaSxvb1L4K5ByHZn6esHMKAR6eWTb1P9uqvUAm9id9GkNyf",
  "key17": "2ams9D6vTiww9pVRBkfa2MMnJv4wbLQoJLZx1m6UyHFfRUpkSVAtDSbxqJaYgcy3BNcZyehV17h2HmEBYDJP8x5p",
  "key18": "2Rx8vFzsAXnAukLh811rwqctUqdqM4rDtQ8UkJcRce1mEmMXVYKfZivuNKoftZPYcexorApJ4rwxq6giSEMBE4xu",
  "key19": "4JhPeGqykiR3CnKncrFyqgdXupM99z6y1DKJjPAQXW8MNqX3yK1mkYbHUGbQo52AaP69Ggwwv2eydBTHo3SoRFQj",
  "key20": "2aaTDbjHcCtXTV5SKQJ157RcayVWPBocrEVMCV3ThMxTwzXhwndw4N9NEaC7LiYTTyU2Ch8K5UsGpWzPKT4X6dEa",
  "key21": "2QqmMtaRVaDWpmEHTZaYBhnRBMGNt51Kqos1wPXn3C6X42NsZj6At3Tk4hBQyotJHKs4YUNqkspTXor4zSsriJP8",
  "key22": "gjtrDsTGTnCtkLYJ8U1QSfJysmCVoNpz42Ku6ukU6khvwQLAFAs2Tw5mDW8XtZ64UrhafxRkt1EA8wCtgWedh67",
  "key23": "58MyYkxg57pFa8fLbVQYwoUb1o1FpQNfvoeVHdoopd3HGgP2Vp2SScV1yQDuktpE81wgNhTNeWPavEHL59tupjXd",
  "key24": "5kJX2fWDjFkjkRRbCLgowRCZi1HJbjAQebiKSqbz9N9VhcNV1hmB2TQ26Uh1GNMCeYZtBjvcf74j5SY9qZttXuPa"
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
