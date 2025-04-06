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
    "B46Z18xzBpU6btiNHPW9RN6Mz8YSxvr5seB8zBEkxUcQ3LMCYs86R8Mda5uLriWqzYCDKcsvKzma5Fne2aLYYn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SsGsTNoJaLzkhnB8hxzYbQ3x11ymXKkjrKBz4sZxCXVVU5nme4GyNgfbaMm3ypfiRojJmXqUN4DazVnTsj3t88A",
  "key1": "2bpqLrdxfbWcTbqjGqiGTZJJWsP4ZzFFxZjdBAdVuGBBRDDULHD8nxpriKnvMhfQhyFNGEXVGUm6WP1WXq8w5fhw",
  "key2": "5oUKoNJxRKT5crcJTKDVhP6eY1WBjMqfNtATZj4qVgKzceR9CznejHHSdDmmuVfBu2rUyD1eQaCp6rpy1kDsajtX",
  "key3": "5bupo5a9Tu8sk7mHfWiBAgmbXugQZPM4bwJy83GaPdKtkraR1cgEfHEUzy2M7Dxu91MDAUc8iB6F9NbGgTh8xaC9",
  "key4": "CdhBPSbNj3Wx15BQ8xyuazaJ9UHZXmUnDcHWp2cCbHmqMFzdD7jpyimB9zePu6KbdTfRBKu33QmaAMLaqxMQfUZ",
  "key5": "5tFvcwxjz9QyXdjgUMa8ToukVbE1ERkAMsZ223AEkMv4w7iExsay72Knp9i57jENV5quBu4DT1hHLMjqFSYn7U1N",
  "key6": "2YToEmEUo2a98Yv6EfQqpN9g3jzbgxEYrFqe7B5GYxV24UCihYWEshzrJdAdcchKpj2fuY3j6tKiPeRmDB5BCjim",
  "key7": "3eJZucyJkNJJFR8iMhQiJFEJSuvuaYXfa5hgEjHmSYz7GY3TpaxAKb65rjQ7Pc6gChbGA4zAyJfNh4utYWZ7aDK2",
  "key8": "SQ8L3VZdGGPDdCUZZRPVYXPezaab3qocVLqBu4peA4rPWtTNoh3n5rZRXJjyRSPzoAsKN8NtyxGxc6jErmN4u4d",
  "key9": "5WjhVJ1VxgVbnXfmjHsD2bRKXUSzJvb2ixHQn4YWikJE4BxLejAzvskU5mHmhhtNLXV6o4Sw5Dc2bHd823aLMXsp",
  "key10": "3644T65LJiZ3h5eMDmWw3mVNUUtLAwx57ToTZzsn1VQ6hRgqvu1fCUdC2TAySvNLApcPjTeT8tT6euNMgcYFn5yu",
  "key11": "4ShT9ETQ4hPdqDXHTWyrT1TT75ZGCxiDrGknv8TDJ9NJxeC5A31NVXTzyqfrx2WWEpT5xkg7FsBLFvnrEUAnSrZB",
  "key12": "4DR5TqZxxm3zywQrXsDR1mR9zRUnRTEQeH8k8dvjGy3uiPG3UhX6zsqsZtau9z2E4ijgLjdmWK2SUrpPSH2CDSF4",
  "key13": "ChvJ5frRGms3X74m7nSDPTiKcjzMfaDdqWNd7s2mS6L1tcyX7Q4x6NTDmyJEiAHPbcniNtpQttgAiFvKQbLwHQU",
  "key14": "121zWrRpvQWXc8mrMe7wA3omWjxsFW7rtgzX4U5uVH9tRfExXA2CDxVZJ4hx7wGqs6TRUnjJeqJxd3Cep2Zv6BkP",
  "key15": "3RC6mEis3WtjyAyLJFhhYjshQ7qkkRsZfdgJntdHVhP9hzCoJEPYXukjZRoU5T3keSFNBx5uFv9xXnbKvWECPznq",
  "key16": "5bz2EUav7MqgsTodjWjLmTZz34iTCMSbkKbUWch7UznDAwnV8TexCtU6L3cJ4pGhpkbE1JdThjRGGhkALmZG697d",
  "key17": "2ygPB7SPDb4BdAQHSyUY2ZmFFb2znpsYJAhPRDyeFm4JCkU1kub6nCfqQiU35QLDud7p87MN3Kn6aQjwG6wvRBt7",
  "key18": "2fEBKUXkS4Dv6dgAxiZc4xkXSbTkwGpfjWfUEwyXpkebbpDbHt48Kh69ABn4DYjwHFKd1ar9bw9j4zB1Na3AD6no",
  "key19": "4AmfwnTZsbySuuM7i5KirTaADAi2BV1aXw2XkuMUZ5LnTJpUcps8WXFWgYoyGDYpdeHDmx1fAYJWc6vt8FL6V3fN",
  "key20": "4ZAogWf3QaqaSqVUD3hCe6Hs8QVQdS3c5j8DDMybEvTcXGKhi5UgN2aYajrQwYWbd2A6XwwMqi9zYHmg1zNxMbmD",
  "key21": "3qnizULM3V24cx6wSgQHTv6SM7bBxyEWS4zsg39eimPQD32j7HXoA9s4UkFkeuDFJneAfiYknieM58ZTu6u6t9PJ",
  "key22": "54J8snzxxQVJtfF2vTBbS43rgKiBTFnXCzqsdpW3Lja24CA2b9dBXtQNK2hEhfp8PpmvwqHxKhBpjaLA2QFxTtDy",
  "key23": "5StWRCQ4zAWc2Mkr3EiGtkinLAWxidGhARg4HiqzCeqp4AuvrEdZHGbMqxAWWCDhnu2qNHymiZstU3NUjiqFx6FP",
  "key24": "3ohedwtwvvPSSa11uXdjMSbWNS8phWWi4R4uQHuQLfn2sGP5c7UxTXxGkJ7wdNv2xHbkDw5HxmXXfpeHQ59D9a8f",
  "key25": "4qFRQibijCvpgYpvMBURVECeQ4Kwcvbbd1N7WgsK7uC356TeTjcZ3uX9XCJuMVaEscjeynotx5Nz4YvXfXka8BiW",
  "key26": "5n6XqXNuRgphNpH4cTUXHBs4Cd1WDzUGeqvYcAtG74SrPQ5KYe1uwrRd7VM55KPtRs5KhzRNjz3GAu3w2nz3YyRz"
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
