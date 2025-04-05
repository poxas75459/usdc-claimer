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
    "2yoQT4W9WksQJu39Rz8EfXcDfsVi9KesErxAfbn2BxMKEvYksUDobfJAT3TppZD7nn1daVreQykmAzvLKfiqsUzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fvRUvmb7SowgBDHgcAyfCuq9psGBECDGi8KycXnjW721G7oDTr93TZT7Na1iXxUy4mNrVJU4n1C2JXg2NjFtrwu",
  "key1": "4E2u4hqKUy5gsmczNA2QKT2UcowF98Ppi5gTrGDhdBbD2TFhqcHEdKrFFu5w9TQhEED9aryuyZgP3sTGMFAe6XXY",
  "key2": "4aqPZzFiz2dExGRufq2ugwATe6om1XoCeCGeNQ7BSDU1MVw6hPKisccSA4NctXXsNKKd9op3J6M3pMN885xVnFEj",
  "key3": "4pq2bzrjKKvSRNC18JS6Bj27q7HWhw6CCdVbEGiJkJaAg727DWe4Q7BhYh5nKDnyx7R8KtE8yV3ADrRv9Kwechp",
  "key4": "3BM9mvhfrD1z4bBUytNxExydKKN4NdnzPf2oR9e5es8XeZXLUErCtrVLRucqykq8xD4ATrogFSFTS5TxCHqqYfAP",
  "key5": "37eJDoNBXyBmLmBNmNbJYW29jAxZ9dj4nNtkpWwUzKodtc4Cb62A4V5Bg9UonMiaDm6nWUxosHeKwT1uXeo9fUnH",
  "key6": "4an6oJQVUVEe76hw9SnxbjrwfRRQbrNZX3WQ57DUWMwCFZK2G8iqRw7H7WMkUBJxP1KMrKeKt6NbtyDzgRhwDVUV",
  "key7": "4Kgxk1x2DkZzMQrs5NG9NqyJyihY4vN3WEiQEC4HYptujQJcaisv7Jcph5EZwULAsNEmSiYPDkq6i11RVbj551GT",
  "key8": "4DiAQgkpF8LjxLuA6juJhJnsPZa8xCtrdz3CwpRvBPSTurVcPX7PCTLq2wU12JtBuvL7YfFoWcAC99GpKJbXBwrv",
  "key9": "4sqgMbj2RD13y9wjG26bVtfjor2dVHjpSomZCqyjNdvLfveyPgjRjAvozWMaCVUkPgL9M6hipQbZDtv5vDLWYpZx",
  "key10": "2xJ5N8pj2UZuRn8isHiZsQS5iur3GKLCChQoo52FADrTMhwgqsNm1rHPxJwf9crtYaWUkYvKZ2xqCATJAEc1ZJeN",
  "key11": "sQCqLfXwtCFdbNGzWP995eG9oqzRQ6fP2VF3xDTwoxDWFmnohnDWL7nEN3L1KHca6XHt91rn8rFHsLU8oNuC4JA",
  "key12": "2UZ1NK2zEN4RUjRKNRi3zupVSEk2w4j85P8UPZaEAQsfwTKgd1cVMLyyAYLek9x6jH9FxD1uM46nMRqfF14r8z3E",
  "key13": "2EjuY7WSASv3NwbLX3oAgtJjKwu3ehRtLR5PeyPHZnsjDnWesA9pCgoAsNkPU588nF6KWXT62i2E5AmdSawZiWvo",
  "key14": "H34BU6jUmWo4kLp1VgH1dwHDqsgKS5sM75TiokrehMBpEhThoXGnchpaHuXWnFNqaaurfuoNds9MoA7ViY3wmgo",
  "key15": "31BaqYpBnQD5MbTvivTVe8gebFVtpNchrvJ27KyZ4fZHB1MAHaX2T1gwV9RJdWBgwXmHMWRQEYHsk8UkfNpmuCfd",
  "key16": "2fCty1hoN2rjvrrz5DQtPf4Zi8axxGV58AtPTKdxDjjsqvUoNYZRRoZHqP2CueMzJrRByr1VVktv9QmFQPcTxxx1",
  "key17": "485SP2nT2pA7eS8ULcmg9F1q2xuyzTqXDJ5BMF1M5qeFgxKLVu2fYh2aueNGTJZEdy6DAjVbyctVdvcNrszeWCQh",
  "key18": "AbHJRv8cTrBr82ktttrHCbX5LP84b3RS65gGpwEiQtg9VKVxHWEts99nA5Vs5EeLj7BrumQU9cEs4TqEir6Yee1",
  "key19": "5gc31Bu25oTSmVjAKdkTgtkEDNoQVGu3LozNR9kJQw1inywiasbvBZduTzoRke6DaYSFCtS5YWVgJHp6N1Rqkxmz",
  "key20": "4XnknxX8ayDDREY4Pqcxc4L9shiorvGqzyHYAE5iCrF7EkRnnjFQvKh8iZVqpBq9b76Wwbf49nbFSSv9KxAoCmdK",
  "key21": "2iQsnpEBRbUcs6BUqJt2EpxR94VtH3X2cEWiQzDBwm8G9Euuw6mn9o6WiBi5yhMWH9epGeTqL2SEYZ1i3PrBF3VQ",
  "key22": "3YthvsTjhaZtt1aMQ1WWHQQm5juejtnLNvagq1uvGYXDeRQfgvM8gAqEF2LJgRt4TEebxB6NzSHq6yoMWMhgfBEw",
  "key23": "4wp6777DasFLh8KJoKirycGGeje5FYQjS8nYwqcgnkDuoaBYbK7h4X3WeYzKysgmc3E7ZtuLzNuCM6qvw4GAbq4t",
  "key24": "mZgJAsU6zsoKMyTqUrL9MEpLLaEdGX2oxWZL8i83SZ6V95twbhDDdHks9KN5vFbThJfFsv5zB8Qa8U45AFZ8JN8",
  "key25": "5HiAxbuqcMHcjmpgQmaiZcdestZG6fnaMpMNDddiNNxYQMxQUQQar6Ct5FgZGBbe2m2fCh36EVdyG8mp4WHTbi5U",
  "key26": "3jXsKueGs7KsTdZ4M7VEdCxMyt1UTXzV84Modk7k8kJgN4KbKqNvicj3v9sbPF2pVXEcxUFaqSyyiCUJPkwgxWAu"
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
