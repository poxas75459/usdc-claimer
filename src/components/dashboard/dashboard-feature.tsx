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
    "3g8rB9zqVEcUk9PAeQ5ehgY7SdTLaemSkkyDdd493GQg6FuJk5223VuFTbktp1CoQcWPAh8p3PBNw92bz8h6baMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dysziwog37DYhFgJYXmJFrrh111K4A32iM17C5AYgNe8fHjZ4iyv7JsuVQJPSVGChrs1CuNKu1WREHjRaJNX7nu",
  "key1": "VU6J2MuZrfmqQbcm8BTP81i5Fxmjrc3UXq6ycvca1xYsv3Kf6AQHU3Qdpr7n6HUHPAYhFrz9Q5VqLvQUdRUEYFB",
  "key2": "xd4YX8gN1xo7MVHhX3BBWDz23REY8CDRwgpqhJUKcArLSt9rZzdoRAqE3JKsKSPivkEmwrdQCQict2tdXyNrnfY",
  "key3": "5hQcg8NGGr22mhZwJFQPGrhmMzE1yGsedjJ6RHwfHordLUhJSk2YSvrRajZ9dPZ7nwsDQksovw1SJJTonuZbyEUA",
  "key4": "2jaUgWnn4i1jaMJNpN9nzHophdA8rDkcfDz6AYyHn5if53wKcKLFCTACouTrvEf2gCZVCnyZQBXJnQfmwboVSb5d",
  "key5": "3N4eyZ1jz7ozYRg6nTQ62kDcD1QbG5uMVjrvTKHDmWZYrYvHfCj64hx4EkdjpxDvirNn71fWLqMQ1C2rUB1ArhXE",
  "key6": "FEYWSwiALCmZxJkKCzHJGq9y2y8GDXZTNRQWijbFRq7kFUkFRgSp6aB8Byihg2WF4xFu3JdoQ2YKLGmviJU7Asz",
  "key7": "64fWWuZgLgyaD18v4kvnLuAThTJUDd7VfCMyCKheXXYjdhSCrG8uYvpUREi8ryJ3z5sUernT4k6tbj1j6zjNGGxi",
  "key8": "4fKPquLHY6PXv6rwq5WLhJB23VrZC8BT41c2BHiHZPuGSyBXCkJPhbq3RRsqfZFHQFVm24SqAfszw4hkkxHwbgre",
  "key9": "5dBMRqBev6jexVNVCNq8djeHoUypCxPpUYEdHkzWh5KSYAorCfgTSD4fv6eE2b2D8rB5KgCV65i5E3WJYmQtvkZJ",
  "key10": "yfh67ngFjSVVYDXqrPYnrotGKQCrghHFDE3URYY8aHa11EmPaBTF42DdMmAYAeLD9GpWvw11cYYr86pHi2tSg7d",
  "key11": "KoDBdkR1DCnpm9Ymk4AbQfaEJnZrVYysbSRx9zrzPnQEMi5QrwxwrDbeRXeRhvvuGQinD29P35vr38u6PvZwXLE",
  "key12": "34qMhC2RKPBzoZZnqCE2rEJTZ1QYbGFD35UGnmMHmtNwcbW24dYkgR1zBhwR7cNt6WGHy8XAVgUaZYJkp6ssg6vX",
  "key13": "43V2AzFU5pufvM6Gj3RBYsTECme3MNiU9bwHvT65CWEs2ui38zUWQk1HeqcmZXnPvCEJrLkjBEB8AR7uAMysL7yZ",
  "key14": "2NHr95XQSKiN7Ljbsw3UxsF6XWEyBDai5V1kDKtMLDcnc5kGX6Ujk3PieFKenDZbSCdUPC81BG83hRTC9586QKk6",
  "key15": "29quJ2mFDXTG4e9nAhxEUrHZh52TTPTCCDW6X4b5Lo9AH2tAvfkK8T69LHZ2CNCMFipUaCyVHkFY3C156akjw8Bf",
  "key16": "BmMThHvZK57oipAMGhNgWXK3Kto5bn6MaAspFv3yPxy5wKhYsC1iazsEwjnp4y96aoAhefg3iNWkVKKyPaSdUg4",
  "key17": "3hKzA85NsYiq8XSaFBNLuMcUQbjys7iSRzi9MreS9hFDVqV1J3ovDzF6pA9EcbAoZDa2UQqg5FFFSjnB6LZXSSna",
  "key18": "3kVSjNnxngyQzmHmq57LvvS57nwGhBKygT1GGohM3j52fTytnwbaiNHQRVVwyKd5Ju4gRGTp61ArGxoYbRa65Yub",
  "key19": "2rs4xd73yzEmWb6e3pTXvZYAShBFbtPqNWtJBYRCaxaXBPuZ1xxiKttGTkbMQv4onrQ5h6VbgtNf3MQAYDEMZQTZ",
  "key20": "2jSLzBSwJBcuHv5StssUD64VCr3u43bbrvZMKL5aH2LafQZ3mk7ak37NRBn2WwmhKn2eLZ9nhuQaZDtkbsiyraP8",
  "key21": "2ZGnpvhf5hYYQkFz3jkiCXE2FuiQ9oGhDDrN3CHFfXwLWGM895WicdAAu4sbBUFXuWt4JPrSSrvqrjfEB8hfoiG9",
  "key22": "2bmETvj5c1Wz1v2hzk24SQBm3qQ8WokHYNWqw6Ws161GJ4DT9M8FFj9H2LrBLGqApZVbEgGFMBAbMBfUJLC1AkBG",
  "key23": "3cYWqeQHM5JdpxU6zGsHZUTZQjbhZiRN7d4od7QeYibqcmtxUuMwjEwpWRy285HPunvHbnGscw48KXW1N6TrWaQC",
  "key24": "42VGri1nXDb8nBA6BviVDoMCX6fmKPQjCr5L4LCC1MvTAwkNWaYeMVKK7TCb9wsnNPLFheoCn9e4rvUH28HScrSk",
  "key25": "2sL5AFdYizBKPRbxKYWNobvr4rohZLcym6kgSFgCS9ohyPiwofaGFJCyq9eLVjxLkhWKRRovfmAJxUdZAskoKxRr"
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
