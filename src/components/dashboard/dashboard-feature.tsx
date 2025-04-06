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
    "3bDjhvxMpGYqK77BDrQmDQi8pzMGXmcrhjr7edmVYvsNeENcRLQsavVCxWFm9BKfcVuPvCzVJDmCCpRvZ8wMRqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aEy7H3aVJ2SEwsqqMganmFUxCctUCiDUmdk84xvCePZpki646ZwTeeweqayjgoSTJXVYZuvN7xcoHVPw414uPrC",
  "key1": "2qqWK158UV6eYzcbdZGX7vitNCjeLW6XKStsZmYJyJntk2UZZVw6657av7mwtS9ZXSTq4PRKrjZymRf7wdy8GDLc",
  "key2": "LZhjCLNc16anXMT81dH4NA3NiWt9f9eiPgVr59a2hhSArrjJEpCS4uH6gbjp81dzYe9GBGqvWYThhFXHMCCFoen",
  "key3": "3cyGLGQaowMSUHRku26qxzR98T3hsoANvdrJ3ykQa27UZXC5y1173hdJfhz7BYUzn6pMycxcd9GSqTXiokiH78SS",
  "key4": "2YwE6kyWiq2NZchjoLs7budpjkvVvwLmWghDoUWGidgQtr8iqy4KoVnGsxVzFTAy8P1FfNoumVkfZZv1N3LTvHZ9",
  "key5": "5ydgaqHcj7K2MXgjro1eK6jhUnsCPovSHm3w8tAmiqU7Ba7TCSmBJmYmhGzTUTH1xQAZeVAScKhfVF8w9H8NKd8m",
  "key6": "5eLehRKjN1MjvjwMDCT7b1rjUrnKvKuNnueVw3mWmDTrTdjafcP2d1kFvAYByha18AhzM5HQ4167go5Xx9tpXgro",
  "key7": "5Km2Kow1i9A9XWFVsx9Wtgr1P2WCyohJhwNgKMWbkKQcanuCFUqmM1LBwP5zC8heJ4KsDDsKj92E84AnSyY5vAY6",
  "key8": "5fxA6kFnFrYD4RGQ4XotvYBrCYKzc8ubza4Rjnz2puQc3efnLPTpVi9MaMNhMhBdEiKGSCmta1GUjQfUbnmvhXHS",
  "key9": "59tv7frmCYTW5Fc6buYnswri39ipbYCvVozpuDTfme4d3GY6cuoJQQkC5oNv9NQsh2gPmQeLE5ptrMs8FfVwnDED",
  "key10": "4XzcBDjaEsDjdey4yUSwizwVvPxCvJUHUMwEp4Zc1aEU2DpPhkbbwLa4eqXJznun8Fo7N7b9LEaiQ5zxRbqKA8Jg",
  "key11": "4hzTwzDr3HKhwyNpgcqaq25jrvpXXSC3Koz2musqgzRpJfXoi4ifBvk3uXbRhihHBWgdVt6p9ZyvsXf8bYWuCgnf",
  "key12": "bqd4FcdnHznuDZjDNdUd32tdfiJ7vSbct8THKgF5YqvfZnjZLvPgRUUmMqM5a5YQ6UFwDEevQ5zb7vdctjXZgDy",
  "key13": "6ceNcNVCQ3BmwRr7kRekTax9fovdvrzQrMdXo67udr4bsNyPq81TyYZCPfGpnzZ6agqvxWDMiSEq53ZrvDzd9gq",
  "key14": "5MSx3r6eLcYyaznxaCLDFimkEUtLfb7kcCSTcLBn1Y1W54SGENSYaaZTuXQ8kvwNw4syjZLTqHr9LQM8CqxYt5yv",
  "key15": "124ZWw4gvpNBg2Eks5pNeK9xviejvZoUorY8N9odUWopbpYz1PqyMhhXX7D6HmrPifbPnpQhimxnWL9vbDrwEGVT",
  "key16": "441aAT9eKjUaHohPbDFcL2hQJwa64VDfu1SnWjrHRiPH5KM4TJz3RVvdGoXW2S1c5swcJ6fEqBx3ayL94Uti9xH8",
  "key17": "4wpedTCKrAvsBmGDvNaUhYWEJyY3PMGomwxNvf63jEqh9AfoXjAsnTQVPdw2xUqhTJwwzmz9WNp5pf9vu3MJjH5t",
  "key18": "2X8gR9ePbbsTNJdQcmVwa9Bmh3SYhxKe6xc1ae6inV3EjkmbBCUbmpAvZfAUhZJiQS8YwTpfGcqEEKMB4usqKT61",
  "key19": "WV3t7EXEoQ2EAVysBAV7zUnYN2RMVNnkoQ1twu5omHVnxamCj2xKYff9enKk9hKg1wZcD94eAFmAG5ZDQVK6fMq",
  "key20": "4D99Tp3vrvuzciEKK2YwE43D8DAWyhZmTcjCFTjhPVDtwka95fr288oez2iA37Csn6wbU4cH1GD9AA8UnX1h8CVW",
  "key21": "4mYnrWVh4j1efgQFJZCm4rm42NoNpnG6pZv2TJMFgtsH3G5LugD9VqQsvJxwQr93xVUeW1xRDUnheZtKhm8D5eKb",
  "key22": "4fHLptDirtLfEGtG3KkMEA9afRJW8YiYd5SVZWqoKa1SC9mXkyj18QKhFqTKoAT7sGbGVPzZu6FcBXC7RTMVWKiy",
  "key23": "3HRKnwkpwGj9FojwekD12nWzRJotchqWrce2hZCzEMQFr2hGY7MmaKAGCtEdGoyfzq29ASReASDiUQFaoWrLDEG8",
  "key24": "52E6oLun4PucPS86eUFPSW5tzdeCbB55LLsXzfeKVaBbrcJURivbwHFM8KQcbnPmaBPyzaZ2jxmyeygxK1M9Tdqy",
  "key25": "3DRAfmJ6PqR1mf96KWjDrKBVmhyETiVvrBudPKf9DrtzfT5BsE9UbeLuLbWbkLWnxaTvg1TeUrEdi9htFkcotEJr",
  "key26": "dSoEvMKnPU5Md2d5iEF6NxS6HBcEwpiP2uuaMzWtsThJbscm9inaHQG95YhGscJTPf2yb7rSU6Y5fGddHTgfskV",
  "key27": "2uVC7KiDTmin5wTcPrLNjtYUEwuAazWL7hT1SN4w1nJ95TJe6mzzYrjYYg6U45nG87k6WAXAgYafWSTCKUgMFyPi",
  "key28": "2qgbnxakEHKfAmyw7SZFW4EGnChWZEop4gCkjxGeCNShhsXXPAm9DJfUM7SJHZdtZ9hQHaWb8knoiNh5Vm8LpUYg",
  "key29": "KWdVTvweuhLa4J64UsC3woVAXjYxTVbWAM4MEJ8ApzjfamocwhWRQjM5XwrXsC1GpX8CNsNED6w3z443pApAQkK"
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
