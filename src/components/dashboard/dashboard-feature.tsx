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
    "3vH4K9SyVpGDD74rHztQZhZrAph6ab9mg5KmAimLCvoaZvETzfYd4YY2ZqVKJEJxKGyNrm7d2w2Xfb7BJZ8VGWfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cq8GL7Wo8arTCxgtHy4QXSxf7SGrbUXt5UbZ6krpG7d8zjU2aNj18wzG1LiNgmtUbJqTcMS4tCrHTjXEm9pzJ6Q",
  "key1": "3ZD8jgXcSjitRzbEMupa8gnd2DuSqgM53d193jgbam1E6LeKyRqQwaZxSdQY6YPNnWKLqReSSgDG7BcQYXu2gmGe",
  "key2": "ecPXNv6FVxAhY2hpdf18sM8BuHJEJ7KuwP3x8fiWtuc2HmjxEc61PiAJpmKs68ayKjsRQKyfwcpCMf9Je97SeHN",
  "key3": "4KaRmfnUah2mQFveEmHyLU39MpyknhHA1w2H2xteoMMVLqcZBWggi5wfbYHBTK9isBGV4UQeTzXnNF3eZn11TTen",
  "key4": "64K344ENoGyLk9SUeiqWbzH7M2keTwLX524typNnQVU8TagjdZ2NirkrTmjUyHhG7j7Rjd1zrDAjpjQBhknZGiYt",
  "key5": "3tuZaynW99aTNNNSW9N1nzEzwFNwiwh72HKKKfZ91RkjNSUv5HMXTa22HfqMfPa8dYhYmCGXNmMbGxXxAqJyf2mk",
  "key6": "56vafY5PycGqVzu1pa2k19U4iftDHBJgcJBApJteuhXYEBtDhBFa7swp1GiUhaTFSCC5GRN5XAPQYztjdMD3gYhf",
  "key7": "5Z4T22UhXMwmsASkUk3XYTpWALKVnZp4FrqxC634yyrhBp5bCdi7kdPkPHEYsWeKcrFDE57dcjYKpiCM8Hhm6vJt",
  "key8": "3znhVS37SZxVbvwcnkssMwe3jHmWkd3yG4vU4cCXHaYLPpiNDr9JaAWgYCnW5w9SsLEHBqXPMVVwfzzRBr9boaru",
  "key9": "86v5NpJLh4TfZ9erybUqRyeTE6p7QY3w4mtDxYGZQdtFksa5ZCN5Up8W748DP2CU1MpbCTWghv9wKYT9QqvsKKQ",
  "key10": "4ugom9XsRrqNrEzzcpvZXnx4b7V4PWieKM6DwMWtRWbZLnrRSK6ppNjoosxxru9SJTzApxBXbahic64QWsSYYfuq",
  "key11": "4Uq8vCNoZ2YgNyCc1T39hHrVtffH7QMjxsdsXhDkQcdSLwAdhMXK9vT9nq4kwzSsV6Xdwc1qqFHgasuZhX9w4t9w",
  "key12": "3Z1o1nHBJmU7VUTGeMx8FTg8TMfjFUxSHG7Kd3d3fSnrKkifkL9UJL9zucZv5jEwgjoBPS1VpU44EinFZTZj7S1f",
  "key13": "5AixUwgZzsyMFEthecqwGBdQiic6ef1bZsyYPfyVMiGE4YNigQ1YyhqKfNHdvgkBcWvGopjUrJFkPvpcdd8h7GUt",
  "key14": "28NuK8JFLDvRP4C1a46mQQwm2xi7ttA5vY8UncThpRyHCkHU8mca7sbA3uhUQqPszus9ofzuATQcfv5m66LiYdKg",
  "key15": "5yUPoSgvumBsSmp2pB4WZNUaduCxtyqie9aoBjxWj69h24UJW3c6ZbaV186PYVbHVkA8qDpXwcWfTARCDjjU2fZH",
  "key16": "n3om9t1uHVPDhjkBk7tjDxc8JaPMf7ZyATMnXnfKmDoT9dTefZxxiAwrbnxuXB2G3DovGGfLVWndyTFBBJuM45a",
  "key17": "2SphdFjcYLWiWLUXtNdJV9FpY5BLswcXhzVKYjwA7kFHTV1M91eguzVa3um8GEZ1BXBkUdrvxxN3i4wzMC8xzhm1",
  "key18": "3nye1sLtM7iMiQQiyCEKyfRAWpDMvTdQ5FpbbFrUnrQH4qfeWV6wTeoX4DgAGTwNwM66bZ3zNVdBDA2W6vBgWKTt",
  "key19": "33FH5NmfD5DfGjokRKGMEHbRZRSgUZyCCzYaRiv6eZKBSKQfNXqe9aVqk26p3NvH7xC7oRZ5d3jKJUPdrSnBPJNH",
  "key20": "4Xj867igYDS4DBNxAaSE9ky8THpaE3N4HPseyfSck3wJHmxTMDqXHQKvRbKdbifULeWHtRPLxfRNaPucQ1VACgSc",
  "key21": "5CtjZwqCTTVkgDjTFdvj38SKvQJhSgxw2xHsScabURLc1h55Fuknr9TswmmLQpo1kShHm55nHVs2EXEWbY7XAL1t",
  "key22": "5E7mXwToZukbhM8UPAe38hP32KnJxiA4ZXvHPpbP8C1F4HUm2cyiSPebvPJAGwyACDxZfeFuoQuNAvLsSahhEA5g",
  "key23": "2ecZc7HeBbFDtoqMDYpaG2YCRTZAPsZk8hddF1ZDm57nhJjgeDn841FMMHMnLiBC7TYbnkQjnTA8vqMhRTUBm8Pp",
  "key24": "JkpPq2vxk5iW7SdeHa23FADybAf2kTaxQEMxxH5jdwhTvcxxKQAjdGAp9b2tPEqNJtBg23wmN7YNjETV8HDArXN",
  "key25": "3eHmiu2DvdEw8oDyDf5cbjMXT6dpC44yXX53GootAaovfnVPKh35cRT8uMfNHLBzZdeDsG73Li9DKMCpMyUSZGZM",
  "key26": "4BUwPcfn6uxSFFgTr4RsTqZy9DqsJghQCEvUfwFq2JNTCoNUJw3ejLg7GZWDhLmKzPk3ifTQWaAoa7rXdN2kqFqz",
  "key27": "36gcW2AyEJYdXMiphp2xM1n3wRqyvCBcyZKfrTPz6BQxYjoDMR2iJRUoUEU4pmh7af25CkMSWoRq3oDZgPTjFLVE",
  "key28": "5atVVDvJMX3WuuKNYqdAkiyJPTmJHWYg3oCgtzRDAnSHBZQsc2rRh264tR6ehjVsCESVhmKT4orR4cX1H3iM4d17",
  "key29": "3ptcn1rjKHH92uzxpromG4TBQJdkqGXMQEpnzkkQ9HKsKNyfSbVajoQAZHo9Auke1gHCWpghymcbktmvJXW3EmtX",
  "key30": "3skFJJYbjvqCoiT2X3dJU42f16eEcBzxrXjRBvvUp4Y8zDaULLAQ4VwMvza5KL4WigRfAWoRvEU1bm8Gwp2XY7Ut",
  "key31": "4pXpAV8cQwjsC1USdjWc7cYdBdBKT9kVbyDbMSmffSzQhgQ9WjSboTaHzr9ctHmpsNYkGSvPQ2ELopw1uoAcchA7",
  "key32": "5zb3VnHbFUqM6H41CD2Hvs2W3qrJGcc6Nrp33xokWbDWaQJ8fxVuEtfKWc1qUdSt8HTfXFLDypqPxpvXgaU4Txvg",
  "key33": "5FVqEzy9GDtkyyGEPxpzUQuHPU5fVbvdPA3VyYaRxPipkryQie6QRAetMQRzp5HTf6ymUrfEvEZ6eQo9DBvVZLw9",
  "key34": "2D1rDMSGr2UNE45RoPWN9KSndLZoRiYSCiG7rodqrNH24Ss2rCtfVBFfVsSHFYjKjAghWgMoh7HdnqZ8MQdrVSee",
  "key35": "5MzZvGSbtmQcECtxC1ef3TXu2DLeNgyT4L2D3oXDN7Ds2BMGBPrJ9LoMkebMvYy8X2Ed9HDbam9FKE3Cdpd3E7sK",
  "key36": "32zJ4JxT658q7w2TG6nTupmJjVaQ4sY1iQyiDSj5Kt13tCzv9iksPf1yNiziE4wMSMFjCsmd5doGCqHdCKo1yLtc",
  "key37": "3fZXekpifccVry8qx2x5iqtqevqCri8np387AZPDzH94EbkVaCeYDFvRcVpFmvVkAaLfXFwW9ZPA1fzRRVk6EnZw",
  "key38": "4VXtXzUJeF8UeLa7y47dvEi18Nkm4sPCWFrpKWen4w4w5kos3GH553fBXHuEgEzQvqc8TTcQ9HGJ58cZXLsQvWKS",
  "key39": "3uJAxQ4fd2C5PQ6Vttkybb7ipDobgvaxgbhYnExcar5ewyFJb61Xs36XtxU544USBVGV4Hh6Yj5ULVoFoj1UnTUF",
  "key40": "4t6mW3vTg34GSxkR8ehDEm5PssiRCtN6ub8dd5yD8kFHN3gBjxt7BHdYGXhUMsqF48xoCAfxC8fVxzZkA4JuPZYo",
  "key41": "31VQej8QCsCEVjTEgmm8GNeToL1UrL7kehsy6EU4ANVsP3YW63un2yUhNHkw8CWWmoziHmxeUd2LkEq64ayrEmKf",
  "key42": "79D6QAAcKXjnooQ9tNaqV6e2j15mdCTrN6TBJt45SnPAzDfgNpjuiePiC1obPgyaW6SJWEuiSaSuvcheBudJrLt",
  "key43": "5NtGbc2y7btFFHoN54GxyUVbTeMpb1UXhNbFZDwqbaZ4SufprUdosVc5iWviin5AVerPkTd3PJnEBjcJEt78KUnA",
  "key44": "Skaxb26c2ncTJkRHrNfKBHRQ9MUtGEjjDHtTGENs5WvnvLEKxVWasmF17PMLpK5HWN7Njyu4KZR4CapPZHsfYpM",
  "key45": "5cALn63j6wq7WVq59P69bGy8QdTrzBkCzbDUr7VrLRy4ZfnzVu2jLsCQRjq1NLeVmLW2n2BkCMBiLdcQoKSpsseA"
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
