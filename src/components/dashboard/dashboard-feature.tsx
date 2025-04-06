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
    "B6wprdCWkCkotQ1SCbLakapGZoFjAmsJf46ch9xd66SiVUzSVn8x6nWPdAfPTBggQNCsgukSdPu4zkKFfq8dfvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hmhL3aG2L2KUhVUCtANdCQqAtDzuz6VEQExCraasMATW9YhhFttpAertC4fByBV5EXQpzRTsGdtcWMfK8h1xrQh",
  "key1": "2uaF4nsLepBvTiRNe9V1a6i3ddHdedQg3BNXjYEJ5hDU2Dh6WEk57A2vcavDcsbQzC2iGyhLmvL77x1owbqVRBmf",
  "key2": "3RhV1iojbaaYy7BQFSXjtX3x5toFrJMURjgQKUwGzfrG2aavEW5hWyXRRRtJeT2RRhhwE5VnGdSD45okKYrtJRYE",
  "key3": "2VTwgjJ3mxgiFi7MaLS7VutUY58H2e7Fc1WnA3vPdW8u9hC4GS26sLi9aofEyShkDu7U6ci8bLjnTayMPPMkevxA",
  "key4": "34Gx8waKuEeCrRw4jeVfwv3HcYRci1WNq377itrzsRnmyHhGJQRCjMusEMQWJkSMPv5P1ykCkY4NDjoShoMKEUso",
  "key5": "vGeK9DJaUfjAwLjrxkDuvoqXwcrMtcaBf9L95crgLhDCYYau1Efezqfff2J5byaZryyLXmfq1Yo4tPH2tLioC8B",
  "key6": "22Y36SuvdmrqXsipZPDJbKtVpMSa9sk4Vk29zJTEaKrTRqSzmaUmppEmMYQBJ3yWVaRX4za955ePVurXFHRbtZwJ",
  "key7": "4rpRmxLzCAdM6kSnvpqHfK5A5SW7Ew4Ve4PSzt14uuq9s647ZBbdkqqhCWrU5CmrQTuoqSM9g5wG2mJj3C9jDqyf",
  "key8": "2K8yvktZm6AYZKLzRmk4wwnaYCRGEfbvZSRdeLJLvBYaspQzJCTAva34Eat84PBDCbvoSduAUsW1jzRDg3WzgWV9",
  "key9": "64sLbTNhyS6PZFC3bN4ToPKDaqzpiJBvmSVQQC9qDC37qR9f6x3fNEpi3BLsZWgZp25cccNFJZK24v8T2RjkKYxa",
  "key10": "42HsKBExfzy3a2RsJ1iR3HDHcYgK73NqQmovbwz53AS2q7s9xCaonaiEwxatX9mqkAfpJJuu8BMFkH7TdF9BmcJj",
  "key11": "KFYYQe89BF7X94Kaz3uBAvyxxvfWdoZoxrzrUGB5QNvqf4U6VaVZnWYLrG7aDPELVzN6nKvssYB3VPrCGJquM9L",
  "key12": "5DpZZ7k5AeX2nmEoF6tiSxFmQNqo9gT24SeycWg8Tqzrb6jNi2LENe8cfGfiqENtSkPVXFjd9YMi8JtPEMdYJDKQ",
  "key13": "4wUGrQ73z5pt1nRzCQjGkAxgamGWs5Y1cJUrT2n2qV8vpBQzpHfKovfcaSfvLihQuDcC2d2vBrGdjLedgmPQnFG7",
  "key14": "4sb7Cde7mFAsYhvtQDP3E7N8LXGQYx951R81UgFyQDtT5ofTe7DF61hbjGE4yR1ToCYh9f2PqUrQpotuxyPHo8dE",
  "key15": "4vFEeNzcRzjZAhYuj41pvFTxgSXX87SYRLZVto9tqV1AWPhCMoTdubwRCRTHhWAtVkx6PKkcc5NDDTMx1uiQ7jsR",
  "key16": "59X5jYmXzr1wzxDzZV2ijQj4y8b1R9AiQZqBNkzndjQwjAYdZwSyi4K6stTWEaDqAqpJN2uJ9JXU9DHfAwAWgmAE",
  "key17": "3ZvBQufq4i65aRJNQtqWeRNoK8hpGuHwbLK6FRXvnCRrB2V8uTSPgYU5oKpwSoRzV5NLHmx4HwPLCJXqnt6g9u8a",
  "key18": "tYFqrnA4Tpmg6cUsSrEfZZd1GuaBrdNMUxrLZUGKgntgW3HDVGo2QixXYtrBufspxQufyYNtKf7fumCYL6vDiXt",
  "key19": "3Du3ATXnJHa2fJ7Zss1kU6ZLGMTNjinRGyqi7yjHURXJzwKGTFQJtsrQ4qM61jeDUyiUbSvXeLAJXYea8RSWras4",
  "key20": "4iAV56FXkXJgMLKYXjQ5qByxVFJZmMqNXPwDZaKxHKQDvQxc137XDGtmigSYqREipi7whAn8J76KkMa8ZWw9qLhm",
  "key21": "4enQXTeTbVWh36GRqNYAKAf2VPgng9oeSZXnqpPpHPrP5QcWNcG2yrFynrx7pG296kYToZuWVCZbz8zqmwHk9KDN",
  "key22": "2o3MQHAKm4Xv8vLm6H9uj66FcopfbmzDz4LA2paDbHGjhLyCcJAwqNGw7FFYXRcRGrRz5BWt9w2VSt2VbLfUtps9",
  "key23": "5nrKFTF9qVEAiANFLsQPo13kzqh6S5NyMxQ92apPbjdeRDMn72tK5u6LYWyZecirvisgHR87UpWNGtAgFPwq4uv5",
  "key24": "29RTsakbUzBUx8B9MfxTSZLsaVyXFYWv9FHQ7jQqANUKyLMNG7bHfeMPcoifXcNGojPhbtWQfRJbVteKTNr2daHb",
  "key25": "3teFLAQYxemU5Hf9zH2aYFbKEw3nYw6ERoM7M8BBMtK7bjLqy539zSPqidfE5xpoj9fbud5qZwtFQcysjxCUrD8G"
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
