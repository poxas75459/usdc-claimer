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
    "2fPaRM17YaDZM3YdoA7pBjorRkpEBTFRY1Je6MHsCZCYUcmPNWvz6NcpZWAXCuQmpAFwDiAhqthyYXz4aw1eZeUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J2DVVs6wXJWxQtsV8xYkMz3M13YyJSAhAivrd31HtS26Tvx8X4sebsw9Q1dKmvYsvWUxFVkZ8RYLxUTGbrTLf2f",
  "key1": "3kRhbtgB7AKh3QEpF5rQsN8FKDPetks1pD4rhWcWy1PaymY8Je5dPYQAvM67e9pCiJgVmFmR3UKWQNWwvfVhoRAV",
  "key2": "TKWyAQW1NVis4RDqBnc8eniFRYvBW97KybafZ763FS9Cqv63Qc7TTztpbi2zfHcdfcRiYqASthgPAKdUd5RjQgj",
  "key3": "2S2PeY7us2Ypu62EjykPadzdrwgRNHEg84EumG4MBvqJVpiLFuv6gN4659qaeRjvnEeqWayysuNDtyUBiPgxEqH9",
  "key4": "5RVJWLsFcDdpRvPvCxhqkVyTsyQBHZ7qKvWkZjtf1wLJdCq14tW7dQY4AZw67TxHVJPrwqSgewtdcxPqooo8J6VL",
  "key5": "2DpUaHuxeeJku2PCaPn9NM5EvH4SuXBdjRYJmjkivmLBsRfUbwDZWyPdHnYRhHfJKPxENeCKiM6sqf6aC7gumJBF",
  "key6": "45Z6euW8NYfodP2DBvTfP4vtc1bfKtZkbtt5Lh3n8cthLeZNxX8XfC5xK5owEHzVRbnrBCju35vR9wvJwAgDnDc5",
  "key7": "2waPy1V67JqyS9UH5iJkrDmazKFvwmLwS3SHx8fWwmhbtshHm8sUBfriE56Zhv5UYAw57cy9CeaAfYJ6dhEBu8tr",
  "key8": "5XHwhSVgaz9QkYf37uNvdY6Bvv35HBgwdMs3tfYGNgwScntHNUrM8DQBvhcAqsMwTVVUDM9ybD6sKvd5TvFJJWmF",
  "key9": "5pmoBwmbiXRmXYKndT1zzDTZtAyUe13XMu57a2BAkMLwN72xAF7tTKb34AAp12yXw2Q4vuTqS4GHNxnKMXL8ffL8",
  "key10": "3nnZwztgLNFNVxa8NHfD1PbJWjEdvv9546noTbKF7q6VAQgzifAcKxT4sytnryUgqyoGujt8pBZDJdtDktwAYEWz",
  "key11": "3qxYUfyvKQjRpcStBvrE4Xmae3nGzocoesXuBRRE36YmHty7rSV4XUiEWcYwHqRV8wu7pds2LTmRutdAtVqau3AG",
  "key12": "DP3bsWGbERM7rzvBEzvWd9zxCyLKMXi9L4ZVxw3RBY4EfuozmveZxTS5b2bVbykHKLv6tjNdrVU8mSYZLUxVW8M",
  "key13": "3Evc6iSAkpvw25L6ftCuAfx5nr8Z4QYH5uHxXacbjKCZ7AYbbdY7pYPA8MnkRbEAKrsc3YTEgaTNbmhW9ywRmsbA",
  "key14": "5wrc9srt9S9CDQuuj5jrYq6e7QmUZvKPAL9ir95dcZuMP5gcyeNXKxj8UH9sAcW1jknbgjo9QofBhCmuNEmrf71G",
  "key15": "3SULyFAiC1PDuY4CJTz7SvKq77Z19PQc5UCFCeUs87qpZ7dZvsS5d21bk2S18nwqTtk7HSwgYRwNrpQ2n8sAYFct",
  "key16": "3QBdHBgNTPFMvGekoV9UiUosykYng9k441HgsFA9mmLFeNKg6JJYQBcoyZT76HxACGAkw4nT7VfByLykAKAmPKN1",
  "key17": "53cstFUE1DvKcWPF9x5oX42Sgv26YTpnBmaUcyba3BsYfZtAWmRQbuJov8rX51HyTKegVq6hsnc8BsC2vzZ759AP",
  "key18": "47bHaNPunKg6Uiw2XpNiggUApqpQiYqdAttcZXAKD6aLdzRrA9Y9Ky4QwooKw78uqXFkECNw493o9nrWdfeq3w9W",
  "key19": "3HwU4M3qYaqpWAqJZHVE1mWzFpuVMQowzyoSUwrE1MyrpEuxsebGZVCxmL8ncq7zMrCGpfjQZ8fNkevTA5GT3yri",
  "key20": "3V4N9XB9uxb14wq6DUVjQMmKA4iXHpVKDgDjPTy6z64uPJ8i8afgkCZu3jQHY1XFZuYFrn7AmpZbmQzwRnZr86GH",
  "key21": "7EVxnEnt72ewYYxBV3XUp8m5JL2Q5w9pCafZdoDLdJfXVpCJ63hp9NpR5LTgURSMUPpLmnC4s2QLpJM245H79Bu",
  "key22": "2Dcym5idLT3WHM9S3NawerUU4LYMbxKtBiRykvrotVmrPSrjfQGMabDgFXVkRGohjB99PXVv8s1ug51EXrPmKAzB",
  "key23": "FqDRzyuxvsVGiH2ej3vdF91CJu8PAHBxCJfyAM2obJw12immmSEniAyvqbgLcSjebDvPhzQ3v8XRo7p6qxHLZ16",
  "key24": "3bEYxyA9iju4BARkjriaFSXDEYCUCMKaxz47qX9kDx8rt3mDBNb3q339b3XEMQXpqGXBCzr7PZ5BxS3tBcLvHJ51",
  "key25": "5SVdJd9QFBHNrsBW2fPAJH3v5qFanYG4Yr9GZKLBkBA83hGPaPH1JR9LWM2mNzPddtdhTbKkbLXgDPis3x3bgbuF",
  "key26": "5CQT1DKG2WyZ77zRq1pf6SVhxa8Y1HZfjr4UuJFbQqCGdzNRNq3nehvZhtmUnHjDd6hgZcZ5J3nQmLV4SSeCjWPT",
  "key27": "2c7QnUZrX7nAAEMUutYhbYUY6XDr9VqZz1ncpegE7p7iBpnrUBLM6gevFyaVmcBLE2QjzfHrTLDnYsdFu3czxaem",
  "key28": "3c8ot8Lh1phdriw3eNTqFwsgvAaFJ4Fpv9hzRzVr5gGr31J9Y2gRicHtzWx4wsw7VtWoz7X6jpChdTLB3xddt9dN",
  "key29": "3MZXKQypmuYFyE4gdEByvKgUbqQHq6Bzu85LcYcQisbsg5RiHcikgdWRAPJNsJv5HBjLDxxsrffecMyErVnGXXq6",
  "key30": "U7SejJNP1TMEjJ33M21EZYAX2GqZ7wLtFvUYLEtut7ReVg954fkHFrgfYa3sFsvkV66qHQiR5t6QYXYhTT6af7e",
  "key31": "2AJ7W1FTMPv3fjAcH1vg3rMnWwiq3wZ8ivV6gjAbBcgnJZhU76eNtywBgtPFKpCYfAJqHfEqfr8WS5NMCh96Ztt9",
  "key32": "5yopfqy3n1WG7JaxvE3i99edho47Z3aKM3kAqSLnejF7z32ihzAjf268n9PiVW9C1kXMxVxpamrcyeHpeoWpHW1z",
  "key33": "2vF9QfDKHyqEnxvWfHhLNbnTeNxV17bZK93MaFCJkaBqZDbmCsM4JuGBTVN53TAfAEXfoQFhiphkjQJaiJbRt36U",
  "key34": "3fpAvTGCwbJkzWPZfy3r4uJzrWw7YV115cffgFE57T9kpx7yUthnC5ALazaQHuzD4hHpq84FngXQZU1N89xoPQKk",
  "key35": "5f6fXrWL68wxYFxp2hw4h1vQUDY42buizDgaS4jTq288yFz6ZeXd5kQqNdCawSN3967ZXvi91eraYJ6hzLK5C98H",
  "key36": "3ShwtY8kreKWiYJco2nyFP9jSZ7sn71nAcdSKsJifdob17wSavJaxMbgPbqsbmo9xwunDgj9k8xTbuibzo8BMDQj",
  "key37": "3pDvJThbjP2ueTfCSYuvVN3TLrobHeqkp8qoVmbZjyP5MkNMV8r13gPqqgbHvAMyejrsEuoNDDCMj9gFekEHk7db",
  "key38": "4JhrzQVotDV4fQFixPgXChSom32NyVsb9H4xKc4sZFkG4XchziP2pwZqb6Bw2FiuQdj7nu59H1inVjaYt1a17qrX",
  "key39": "5pNtxzxURwcmBAoW1GYeF8XAWVC5cXnFaYQoo1eYy7oXoRL8KiYAJo9JwJKXkEphYFDeA93qwHezdwLfsyNUYYMG",
  "key40": "98DV1hR1pcG5ZHBdfutKesrgAmV5nNhkZ96QpsaWXFTzthdU6NXCLfk41k3JQ4PJzunZscpdMWk5YBke2kszg6K",
  "key41": "3LrrK4U3QyaP3GpYAYgeLQdbKJYg27M9MQf4qH54eg9SW6Q8L71CuZJpWVMWxWFt2RKnH1PXinzfn796DYyyoMEJ",
  "key42": "3tLsXryNWXi2xUfUXKkLvQQWLjA7NiLRvyTZ8KdZy136BVa4fjzU6ebCAVURYmkjrzyjQrMMKN53FccZ3h4ruQYb"
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
