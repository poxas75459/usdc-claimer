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
    "59BVyT4CGX87SSVFtNjBfeB4xGZTvJpAdnBjkz3Cp3YEZfqR88wefWxmbTmt3MDJgCJBHMiPtXRh9vcp7P5vXF5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEEGvRpwkBbmoohWfBL6HtNxeirWSxYHuNuiBRKry1Kb1WS9xavr58Qcyer6LroH4r8aJkjtAmGcanFBgjS9USK",
  "key1": "3FnZ9ci1MDpeiK2NKDx71pFnSKJ6X2CeGCViD3tF37jFYWaQ9JVf1HTh24TWgHzmjE3K9anh139PyD1GXTCTm6fJ",
  "key2": "4nQtYA2RMEjV2K7jdkuXDcF6AMCJhSUCcWKqXE8Ybtwx2ec59D5DahcYFzNEKY586YGZ1JmN4ibZzwZEAi31Y517",
  "key3": "3MBCzMcJW28zvwm2U82WbHtff5ZYMe34agSMoTmmxEkYiUPMfD1F7tZ8SfgYcykXzxwEBmE9sW7kjEp5DEzSqNL3",
  "key4": "6122QXxGxwdtnYqrQEN8WaajpD5EWgUCauQry3QVNd4LqytFHi1nvbQSM5WNxDJ5QFx4Sq2armwUWLHGTc7gPRkV",
  "key5": "2TqyzvSsArNUwwaCAqpZzKo2DWgxhGK5orQiVdQthSqJxCiJbgAoH7NVz1tSLkPE8DyRSZfkWX4HMHKp6wQRAG54",
  "key6": "2QBoM7TK7UmXyZwRhaCzyLVr7EdmJ66V3swQiz9wNurTrcWyqjnD9PZ82FBHRoF1aUzg6NtmQ1hYaEsnqK8Rtz1j",
  "key7": "2Z2gxpcGpT6PaWxfqzJSS5GneS7k8muJgxb18tuLZyaZBtn2akX2KAyK7v1J77ih1gU8HZn68wxwDWw8M7qn8uZV",
  "key8": "rfNrUs6kPv2Wmf3vfUw1WN5TxatRnRh3qppH4MNf5XZuWHKCiyRK57UzgMqacwaDoV8rZUFMa2ttA2HdjZd5sYp",
  "key9": "5p9P6bWk9h7Bg4q5WDoFfPZ2nnoUMF1K2Cvh3VDnoHtnKBadZgyRq6bGvBs6VB2aphqwYQncvzERXbJ1HZABMEfp",
  "key10": "3Z1bjs6NvusZ3wiTDnFeDT5uKBQQai8VtdYmjnXyhzjMJ28UgizJUVANWnLxTv4nEu7i7BSUxrc2Tahrb2jp7oA6",
  "key11": "4B4LSiFxUPejhd6tr5HoWfiQPgR8WjqMX4PZRqmb5Z41feHWtbaWqxLdQnEwuLdmZNskGkBHY3VVcXQzkLc5Per1",
  "key12": "bDniBAS9d5KStCYmA6XgfbbXi6jLv2TwkMzkpw1Dc6uze9fMaFpT2hjo516mGjfA8E1yqPhmKNtjpSu7855sHD9",
  "key13": "Gtk5LzRdQrsqk345QaQJL93uCy8zPbujL5vTyXotvMPR889X2A9xsKoZk7CuDJmaKf6iZjDUwa1w9aJZH46MrrR",
  "key14": "5XJUFnjk8uzzefymP5feUMH8zd8xJLHFeCiApUcJAt2AV75uwXoNkZdCHYUDwQQFnKjHEkeeN8waqEMvSQciQ4TK",
  "key15": "2Pxz2zUZFtsCs3jghzsDuGw8bKNtU9eyWr8tpbD8nNwSihBHikToBrQeeXANXmLtLSGjzdMYKMAxyT2TzZwQ33C1",
  "key16": "eqCsDFm4WTc5fN9FaDtzLZ8e3L6t4tTV2i7Bqs4ECNu97H3tTRu1n2qxHAu5q1dcTkGtcqitY2DsrbBVDPuEy48",
  "key17": "4Pwy4RMBMv7t5SJ6fHtap5CH45EMV29XxCXXnD5utHMQEZPszeJpATzJch7UGBDE8ecMwP3gUu1DTHvrCioHvV3G",
  "key18": "4xwTjjEMNMWLg7Xisna8nrqjFZLVPZMRfZekb6j9CxTGv5iLTHHuDEs7yumrt7Gzma84NrmACFeXuSsWo89RTeyQ",
  "key19": "YxKyzFVqb9FF5B7kLUdcDaWogLLKcTpQFxYaKqJYLs5EkLDsBaV9LQypf5bqJ1YDXM4B2mH9FJtCu97RjcywvYh",
  "key20": "41FZj7UttGsKF98X6CaX7nPKoW5kcRMeesdXFwf35WvXnwdYQFXb8T7wEcY3dvccusu1D77wtwVhyoimXcnCHHnm",
  "key21": "4YRZQpGNKAH4VmYSFqR3mZbQLurZv2PShMn1oA6VTKHww1P1A57vVKAkH93dRdAhtec6yf9b2bEECPVzQDEEsoCM",
  "key22": "3Bm9ecYoqveZubKQ6yMebk8V4tsUAmeXAsj3LvSx4xAmQsEp3SB6zq3twzDThkG1m5jnsviky46mrHxBinA53xdu",
  "key23": "2jjnANXMWb7WmgzkKTndbQgFXfy6tw2CswL9EWNacCY8c6k36Y7wGds7Z9u78bxeMttt2vRevcwop3pSnPH2q3Ws",
  "key24": "2JnEpw2d24Xa6gcdn54ccm6mWUpZTjUh8FoVzhxwVruUCsYyxWY69Gs7xXDYdc8UbvEmu1BNo1p9V8Bv92evKRGF",
  "key25": "5gsd1N3gV8krpYXFnFK2hc9XvgK65oDjC5ZLhfX5tEeRYin6N4eaJvDtpzzXDQzLs3hgUvVUgb48USXqzBF1KL3U",
  "key26": "4ZG2LhSg6qXM8k7xN3CJSd5WqBfEt7vRuHXGopkRVnp74gXB7YMS6LFNoYzJrd7upnFpTqJAAyLbRUa9S3NHZapi",
  "key27": "3fRjoorUzM5vyiCjEwuMtDiBmP62No2aSR5AJyVDCNq2q8yfA4mJeoDvYmmCKCtdXEXrEiPZTCkSgPgGq5HEbXf5"
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
