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
    "3e5wMBnT4hZ4VvXs3CAAJLykdnY2gRhTVtHjTqRrwt9N8xK5bEbLv4yTmzTQquRcYcoQFJsSBsWweE31WHLVzw2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63sD5zvhJU6u3bMP7SuQ3paP5ncRFMV66JhkbH6nsWDRiS6BA3FUmQntSCSGmZZCrALF8267wQwLDc158iYLZLEU",
  "key1": "6A8JAf6vemaKc7pKMCRCXMuuzXa37HBxydB8AzvnGCWUrrduGXxZhhyWco1HNA2PHwUPdvYrWC8rSFSXoA7W4eb",
  "key2": "2BtadTBJv2RiptwGckJTVNaiRdDfbmh5QxNkv6otbhFeQXoda8RJHiQKxxBew2SbZAc2YyPdZbZSNvbZcuzSSwTb",
  "key3": "3ryaSywkhTPbLDzUVwchbip3pZLJPapm6XLMmiByWZgDXthEsZbxynLoRgk5YY9iNadwJo4wqgx3VkW6iqPmxDZP",
  "key4": "2uc8Pc3hE8KevboiCKyH92Pjr7XVvjFTGhRgWX2e81eojCu16CZxiDsVyChaUhrTuAroRuf8RxPb29JYvRR4CuRc",
  "key5": "5YJSMQFqUApe3q2mhZSXrx8d15Z196rAcpY5XAwsVWtPzfLJWmzQAwkJrUGjkpz7Zj1p8FM7waiHyDj8YytE3Lh7",
  "key6": "5sd8pSNVvFR1AZXy5Uir7tj7xBbEdNBg5NMLDs533NyUpdGcifBUyw2xxMGDRddsfWt9rZVvEfLAzTBcvqLJA83K",
  "key7": "33AN9FZofPmMYfm6svKj6h4cHvkHx7HcEyxZQPKZwaYpM2BsQdgwEJ7D47xzTknpusXNTAjtR191tS3pcVeBYToM",
  "key8": "3raPk1Fokg8vwExpuHMaZaHBqYyrxCbKeEHpFgozm1WTsunaTackbPcpLtii34cBz6VaLsvPEw6NNsVKZTcREuMf",
  "key9": "3HoHxfHcpr5J4PXFUBVsApCnzUx1urcdLzNZbg1ynrPcVZvR9r8yMntZCyEAzc5yfbYAbeXgSBE9e3uh93qiT6PQ",
  "key10": "2SXsA6HWPNcuxYZyPrX6vK9BmX8VDDZkA2MYCsPi3Gmfws3dVgLW74sYaeWePQydk58QkfvknyCAJg976Sagrk8c",
  "key11": "5xFNxqaWgV8Bn5PtNvSjJzPV3sL4258kKhXQZ8vZr31x1wbpdXVMaTGgnC1d7ZVPeUPpuEoWdBRrexLFgXLN7grz",
  "key12": "3VkeFV6vf4Q1p6Em9xVqJ2HMoLkuJUFe1JYviq71z1eL4mKABVQTD71KvkYTRvxZrmY1Bm9L71gGMmUComMmtRqV",
  "key13": "Rn1tt6hawZLbUrCw7UCRZnXNoFfotPLbSD6ns3RBJc5GhctDEFVuUyFzkeNSAshB8jYs7k5KRDEUXvNHQp7Mt5u",
  "key14": "4gVLTJYqeTQJfA1yXxDe9uYbmPvyHS75shb4sCSmS8vEwek7ErqHSzMq4dNTWgz1fv4c6BWM5fJ2KdCYNSUwjDqw",
  "key15": "4eLpQBD93LU2KUfam2r7g2TvnS9iRFCKq9ruZBDnqYvjwTrMV6EWssL94v49XobbjDcdgbWfFm4wHUJDDtgXdvG7",
  "key16": "2ETpNKj8Wf8jivDqGA5Z7N5ZwMRLbcPj9xur3p8Me1hgnBZAy2yg5V1hXzBserAWvNT3ZFm7a4fPpdBnP4SnV74Y",
  "key17": "nZMJBGZY75RVCv32jyXeJw9Y4ZYbT7SfU23p4TMZ73mMw7Qex9kbCfyxKPeXC7qcsiAb7H71um2nGsJC5opuimq",
  "key18": "47rTY6Qnt9XDbGUJ5GPj9uAj7ErsJCZ8ftoiSUyZMC8SmeBVXUnmdhDKnbpeV6Ap4YXtnVr72k8cLtcNFrqPwspW",
  "key19": "66228F96Ywta56U1vtGSkxzXr3Tqi8yzfQpx6Zt5KSbaEqLrxQRvoEs9Sbiguyf5hzK5gQGiSTJiWa41uvd8Ritb",
  "key20": "4wsP4eF6CzYmZsXhSVkTaxMjdrTtNwNs1FBCvRAq6YPP6v8tKS1oZs8XgCqHGNbuCDqjyvs7ymBngyjeurjZuu9c",
  "key21": "52TeJffkbb65qKJXvZSDW4mdxcAHqPbkV9xy5AVC6vuLmzHtGzNeJVaQ2oMKcF2p7e6CLCsFx4dv8gtQkj89ATYW",
  "key22": "3nnNf8797xsoAphpWHZ8vamRHrBvWbvY7TB6MJpxcMTceLpo4JJRhHwTpqLJEdy3y7ko2m2vs9DM3UEjw916hVQV",
  "key23": "438ertUdCQr3XFavYcRZQXzqdN3wY8hYT1LGe2dGKRxYM25VU4wu6LazjLBLhUQkoDqynLrXy9b6d9LLJuCRjTBF",
  "key24": "4QaHFPUzZfTMzT7Rm4jFWAEgXkTXtNPutKtabuEQuQoSj5GKNmPXkuoaWCgwdztpMby8UHaPBAi31DyMhz6rcYin",
  "key25": "3dxEVYwR9Dt8bDuqUJofJf9SjVsAoYiqCsQvCYksTFCMXj8F11MfSxL8H5UrBXuCftyMQXELTJG1HZX3SFH4ovrh",
  "key26": "5gN6FBQ4aHw94xRKg34MVR3kbqrpZr4FvoSSkYDrF1DjwjKv7y82L7UvuvYYnLHR1n5BKbhvJ7Mf2uc9MKaafUwm",
  "key27": "XLBd4bRyAoJUBJkQ98hXroGoBXHqb7w2wUXjdtQU5nZr4rzTgmz6YX4UM66nSXFvDr94Z4u12g6ayeKWgdzyqoh",
  "key28": "4kPVSHv6fDJNbeKcwwxGmxGKZ1dja8pk3iJBPX51euJbgdZ4gQbpxFegsWLBepCiXfWdyMgcV4MAchDpbMk1RSVg",
  "key29": "5CS8qKhj47mUpxKFmB2LDjYbGbDE4yiRukKdqAjVCixmWT3YCbXJcW63iSD7yTzSuA7PPVJL36rRDNvDmEQvv4xd",
  "key30": "4FMrMbNSoqrKBSKRrkJw1SZLJkednzqPubqMwbj3V8rhDvDzmpaigx67yCS1DntvuqKFY51BYLTdxebtV3zrBzBJ",
  "key31": "3931kyidLU5p38XKFeugNH9hKg3LKJeQbsNHd1eak2hM8CFx248eUiEtqWL4BEZRFbSqmxtdBAv8dhn17iDJH6ix",
  "key32": "35VPBAu1aRQWtYydPJmYcSsby6kaYhVYHJeniyYb93dhjpxJ1odALZdCeUfyJ88867ikih4sivv5NqvjfhJyPnQV",
  "key33": "22dofvneiLkBeQadHHvCtRZYYFbinvpj8yJY5ftgHaKfNSYMhmznSkWjY7wDt3xe385MwbqjA61s5YpHA4RKWuk2",
  "key34": "3MG57oEzbLjkBvhufdu6Ud7j6JrCK2kHEmLmp3XsMmQpG3g6Fq7hESB22jHY8MbqMFFtFka4pLDeoVqZTG3tcW4B",
  "key35": "3EZYta8KfdCpMqx7c7rqMbwhNprnSCadjn6AJ6rZfzn7nVrHJTgisYVNUquRwnuRCzJg3PtvwTfx8QdxU7EHe7Cf",
  "key36": "3jYmgMY5qWo9pseQ1hjQvXY5GHycMSq2EJNfRQ61KJTsjWsoXtivH1dDkiAi639ukL4KYLum98AmX86sEbkL9KEL",
  "key37": "2uTpfQi2mfVXF1wgBRmPZ7NC2E52Qz4dmD36WGUrnN9HnTKmA9vR9rZWE2xdcbcHPviDonc7bhDste4Fhksx4PPe",
  "key38": "2h5YTHhwAv1VspQpCdzJ2kmzVDEXhe9dwFwDE2wHP2Xh1Jsf1cmRoKoy2MJL4o9xNqLvNQEHYGyK7t8LcD989Pch",
  "key39": "5SNuxdHeJGqm54vgBDgnLsQsqDtUH2qqHS4BC9734J2raE5mMjVVK8hnydXdBienA4krARLn5xpuy3qPYNpSVogE",
  "key40": "p7uXU8hty4JmasNtjk9pA9p1F7iCnsMgacAgKqQnRVF5AUzerTatdReQ6FLEWPzGLMNTU38XxHCfYDm8sPWfumb",
  "key41": "3F1LX5Z1CkBrJNzoYka4zVcFUeXRbLRjxJs6tsR2FtJ1cTsQfQQFcTBvhMEAAzvTKbc2x2Eiwiuusmcd1nr9f6xT",
  "key42": "4mNXEKQDuTjgzm3bCuiSQxWZFjGZbfsk2MiK56zdW3AWFxF7uLPCWEmUKjEpoG8hAZfwHfro4HHGtMAyvJnecU2i",
  "key43": "63iphuAEjy7zaXvjN7e3yRRKZCEdgsNTQXA9fzmnsKXJUwtWzwMKHDJnSgj2wsTWZDEDnj78yNmPekPdv7i6fnMR",
  "key44": "35cyUENKN6NNpwrSXXqHGvTSeKTAZAPkBHqq1nw6NHoa1k5x9TaeZJF9x7gBkWc4PKqaWxePddfVjyfYW5XqhsZk",
  "key45": "FCSY6ikFDzXFHTyUDhcTccms8Qw1m2S1E9sjfgRVEvuEE2QhQT5oQVqE2EBNPxuuijTCkPhjiFy6phWaoiou7nW",
  "key46": "3B8NrCtr7r541jzmCtQ4dfV6oiSTP7VDcqDmS1TSJkCPTz3EPJ2gtRrXffGA4mwfoZ9wKD6qfwKEG6ptXUdEjprW",
  "key47": "3eyyqkWyE5vENdVRYxSViqbKbueRPh1j2SsvbuGvMuPmHiy4PP1fnnGvxSVFTqU4tgyPZALKRb61anWQKWmKTpQw"
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
