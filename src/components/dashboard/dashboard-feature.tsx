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
    "4nbnXWnHyktE8WPiMBvadd5ADoxgx1s1ubBc2VSTps9HH7uCCZGNv6LZy5wBnJVeUs6FPzsACBMAvhW69xeH3Rac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyPEmWN1tJi2isiQEuFAb4zc3KKZfDsZucMqrHWE233McWWwjxQVBDo7pi385d1Fh6qPW7dspFAv6PhgLJ32GCQ",
  "key1": "32p1B9q9D1zsSfvG5X6Hjb4zsFYUfEUvphp6NKcJ4LSZG8dpoAL7sJ8UfkHQcN5SgAEPjp1Ryfp47A78A7xm2hyP",
  "key2": "GWkgLfLa3ij4FFCP5o5qFKBmXbiH4MUMtMtE3ctKy1naAqQUo6VYyQQd4dhDQ4np97YmapVVZ9BwWGvnYQmAiqZ",
  "key3": "5wEFHR7ecrHfeWgUU5671W6rHeWUheonS1tiFgymEa9FshzL7vFZ583eWYbg2pF9mf5THTZSnE48KcnvvPccfeTU",
  "key4": "5Lvckzd2nVa22KeBvDfEWiPwtUZjvXuLWZoxNuoytLd8XqVtqGHgzVZF8P27PKLnAa6vq5XEShGdPk4tegcbsa6w",
  "key5": "2juyMFp8uhnF7J5ahiDuRZGHj22ZRNNz1mjoQ5scfNR3Vnc7XurNTUyiDCaREkFNKHLTjn9nSTGXcyw8hk5xqATt",
  "key6": "5EXgcKDPGy8ULYyPvvVSwAyz12B1uFnUfvV3zbygqifu39c77M2rQFtFLPug5tLf9QkS4JyfYBMVFcchPadkA3jr",
  "key7": "47hCnaRYBWAwwLU9GchQ6q3PUwm1snJPWUMPexA1pNJN1yEEdo8gSxJjyfvAv4nJ3jJ62CTTAfezJaB5E26c24hg",
  "key8": "61kEb3LrbqFpxqB28wvo3nN6XNbfyVAiZ1JPuvStXka6eFCjgkYZqgFsvh2nxHBKzrAMd4SYz9vg1RtBCXYgEeXZ",
  "key9": "2REYzTksqyxqu6tPjr1sM9sUW6g1AFHYdkzRwMYHBq7MSQXLobGAEpgBGkGyq2Y7gEqMFS1TeGSS9z7Tmp8s3rCv",
  "key10": "55LggNXt5hTUQVZeHBXk4sKLGnCp9QmteuXqYGEHJECUjtenxUkvaZvkLktDi4bsjS5VEYRaTVSnF6gxt6ekq64X",
  "key11": "3m1Zo1k7w6FY5wpaYWeTLUujvFRWR2CTYBQ4zW6zKCnvn1y2eSAFrKbLNMSc5yP5jwAHKLUMdejFTE1f1ssf6FJV",
  "key12": "5eN8qtHrAba61RJ6xFzUpBMWxZcSQx13AYwhFqxvmSUSDhKbcFw6UNo2dJVwPGM6kBCzFFKV8re1b9rHmzeBBcEA",
  "key13": "4A8D5KAVx7RMqg53vTJZqC6CNbSYjD4DQVGP43XmshTkZSS7iuptxSuuLf5xWDMygt7eqaSv9uyviuvNwFcGt4Bh",
  "key14": "4hyVv3tSPTTBxvvjcKXjzwFzFCZiog72b4toi5QTWMt1pSAD67txdcS9myMcEGzWNKrgja7dcy7hA9XU8Lufrekn",
  "key15": "4ESjseuJ8tkdhbDs6xwFSrYhnopvRFNUsgMztTw9A9zRLxy3RrM3JDyPZJFHDq5bg2VtV7BLrq1P7pJmdmE8Drsq",
  "key16": "5QWgg7rW5X1cx9B3hrCqwmKjvSoLfqqiS2sBEo7x7wtv5urWLkJas2gf9HNe4MvyK5f4XHwghYHNLzXU5zeo6Ns9",
  "key17": "3o2XDqoqnvb6VqrakBLNpC7WabboUn21nZakQ77bR2N874ywdwSzuth9eNpwBp1zCTQergA2tmdD9wns6rAPBRkL",
  "key18": "3YV9MF2Wbyqjs5MSyiy5jKkQw4Jmbbr4g13cNWTsmidY2Kme8Q4Wqpjs5bdzrBK3QnT9QRKQxmcpXBHuesvrDXw4",
  "key19": "4pFEXZ66BJfNy2UkqpDsMXjUbpJUhZmroDargNz8iybkcghY8H2fnPZpysZnBsL8QgEdpCdTZ9bMDmsTLmqmfsTi",
  "key20": "3EygpuJoR51rR2W8QsLWRC1EHtRhLXTyhZxqf8aqVdpxBw7uJF2aCQ48t5Na2DF2egs1W9FBSe3Pa7dq2CJY58Cy",
  "key21": "56nPSN3EQSMKdwxybj9UrmfeQfa5ZJfctCkAHkE7L9A41S97zZRTgTs7G1or9FoN1uymjPUdYLuWawhsNRmnWgeL",
  "key22": "4YRjjozrszxhYmgjXAnvEnBorP2Q9gEpfVE1BS2U2MWPN8KwayvqnRodwSuipuJPuPEiH6A53qgP4t19KsS3tQyJ",
  "key23": "5mZEeLgHsXy1RTejbAnhxaGHi51BHds4m7FLRqe6bhz5kzDesJdNryMQnfDjifh2e4rTAgBcMmYCQvJ14uU23tEC",
  "key24": "5W8bjRxB7g6afuJfPYcJtV5Vz9s7Tw9JpHf7jxLkPvpcyEbSsLTkBy5dg2snivZeUEBk4everM4wDcVdQfaLqaBt",
  "key25": "27w66mtMiVdMPQDmwEKL638DU6p96xPRUCyvKDTLhXA8JgvSE93mshUFEGTAPo1Zp1SSKGKY9dR3KFDqpfza3tFt",
  "key26": "3Nx7LYasCeG29Ag22fpD4AUH5ASK2SYL1piJSMg6EzZhq5ykj6r4SfkLLt4PYhPFHV5pwypZU544dx2XSf3wDwe8",
  "key27": "3t28ZyR9cs2PyHP3jSUbbpG3LMjmQBt8NKj7Rdeo2JBwSizqxoNv2rrMDQ8mSwSRUajdDkFSRnPqqwtePEBFGFk3"
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
