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
    "3i1yN3VzDZUH3mG5p1pKoUt4hrnycyQLpy2kHv7AUPyvrBPQgb7FNhWbEBNN1Ut5UhXoaN9mM3at8eBT8JQJPZdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e4By5zS9iP754MWonaDwVxXQoshhRj2TvUpvDwxxXTh3EfHn9VqDa3UXPSRAv6xD2AEUMYa48Ss241j8TwcHmtS",
  "key1": "5sFY6nCdn8R3sXCidnEa1SqFJcULYAJUrdRfUhNiG8cuFogrHfnGDeC2WcwY3iCMftFu9YxbKAXAzr8yJ8qzKw9f",
  "key2": "kbU2ARNrPYvjQFkuDvZ9b7Wi1MMLsNZacyAzjFPoREwhV8ALVwiQgQ8ftsNrLnECbUnNUZrJvaKD2UYyCXbRbri",
  "key3": "2NKT2PWuUMJ3YwQWHX7KaPbxjajWNQGHRshFErTXfXebmbsh7gBcAd59NexcD4sKzosBav68xgHdanQymVS85m5P",
  "key4": "4d7EAU5JCUNmqro1D48ToM1kXXDh7GuN3VoAfh6z9Aj4PnhJhkrVX766Csaz8Ue8fdNKceU9nVw3qPXjwa278f3e",
  "key5": "km3tNCpsar3u1Esvvb4NaonVfHkhGuvkiAnxxcP24BdobW776W3SGXcsLzso22pf9E67s1pNbkZRqWLwr8Lh1Fj",
  "key6": "4ykutxB4c7q8Vp8u7BA4jedKJik2VUMC261rFMJzwtiA23jMNVu5bSwP97P8rrrj7Rwh3nf9tQ2516ESpWaHRJwG",
  "key7": "4hgfsMLP2uvpeUArnhQijARofEPDpd4drhomzi7g88NZDwUU9SHtzu1gs6VxuhuVqZwareyPsKVYcU3MmFMp4iy4",
  "key8": "3VdooLvjvtojuiLwtVEr3KbMBg9tTAB9Nq5jXMa1Cskr7zQJQn8v3EWQHXkhnRHDPKsqdD5J8xfySqu87YU55fZm",
  "key9": "26Yd4AcoWPR2UrvexurMGNMzWyYUX8R2VgQPWj2i92pKkKWykPxDyNNoRfz6Czo3fCW17f9vT2aVb7CbJCW6YwSP",
  "key10": "3GeGHv8eBuTYchbriBj79Ao454VvSApsJXoEQsoVVheAvwqodSQfdN2PgD6MCkyhmaKVBa8ShwUJSVk8skWStpvw",
  "key11": "VmNPgzcLDMBJ5RZNWbCmetW318z8EnDjpSVRsB8spYtV9C8K1WcC1bpvo9EepMADkZwVCQ7NfC3LzDx4uK2yPn3",
  "key12": "2Ai2wbB1FBhotUGi2FM6hv8WKb2neWepcH6GpLjE7P7evGb4K5ATMDwhPvseJMq1sRqcJq32ohMZ9bHWPokr6SLh",
  "key13": "4mEtq55RAJG4FKMLwbEQJv4bs78xypCRXG1bUiAvg6rgV3vr8yd47opsPHuLxEyqkGQeuAF4iGbK5j3wjYYyskAw",
  "key14": "3ijAL1gggzXjxm6JrWaro5udX66JYxAbHCCtYHASmzYuNaxAL5sozHbWK1VyKQwuMMWbdT1HWsEVJLXrTfNJuqXE",
  "key15": "4NgWd8tQFzR1NypubTZCzCnE1hTyoS88Vg1KpKoyoBbfNngQijprMs1CTdAoHn74YTFGDrKvVDCuqsJzrNLVexnG",
  "key16": "4dgfYywDd8qrvnDVQHGF84aWY8qCzKZyj8T3qEZkVWVQu6txvkQwrh8HSQYeWD5CDgztweeuwRTrFRiJEiVM2DHQ",
  "key17": "tSidRwyre8BFHKERQipyTsraRj6LxVE6SQVjYh4fqMZjAvrLjPT46QJwtQpTut5zjHopgdBfccKPMBvQyZk4Lg8",
  "key18": "3JSecpgtkSZhJNWeTrdb7Xmqs5n96yVpQ6p1pAoZndkNNBXP6U75SfR52TR3TiFfx6bYVWG3X2n1izwFHeaDKC9V",
  "key19": "2i9JXnUPyfy7AsHRDHYmTEEEp6MDwrwZU9FRFj3MejiFN6jZqw48V1Xn4zUahEBYBgXLKXFeejUdCAue9E6nAZAS",
  "key20": "3A1cu8K9KNLFN1m9raosL3stTYkXUNt7ubbztv9f7jz6KNpzKUJHGEPb6T9LrtSK9psenbSQ7efRzZoPYungj4qv",
  "key21": "3tR5ptVMy9ByGscjx5hzN1NBVD12Uhgos1ih3zGEMsopuJ8amDmJkdT5ccjn4zswUzcX3ptCm9UAZa4DDbesH4wG",
  "key22": "3gzX54KBGF3inXQcjxXeg9ZoN3PTzWX8p6Lr6scfPigfMrYjDVk6m8NByhS1L4d8M4XqMr7ku8aWV5iZuG5epGC1",
  "key23": "5hPchBtxdnJrcnMTrsxxPBEEaEfgxcW11BK78BNCvqozmxfufn9BFdR8s9X6X2A85QL9TL8zne2NrKs4WVcpjJSw",
  "key24": "38easBZ8xMbgmmJnm5vCucwZXuUUE7LGMg3GzZkqNXUnAkYHQ843W8qiSTZQXCJQyHKVgUzHw762kZRRr88Tkbht",
  "key25": "5jBxGH5vycAjKXhyJiRi8qCGvKdPX8NcH98QqCg6vSzBKx5zn98SuyxJwVuKonxspRYwg4yz8kK5QUzfCVVPjXaW",
  "key26": "3UivsiQmXnAvGEU7fTrMQSMyP16fuRe7oQTCygUs67EsKFiqx5sTcHiUXSPVuyntj4bjMLeGZ23XTfnoQUzoYmTd",
  "key27": "2eg4XGR8dxRiW3gt1n4HHRVzjVVir2vB4uWuroeJazcqQEPoiJT1YEBqTAcT5bFM6hqmXCmcuXALhAYq5wfAFTJV",
  "key28": "3UE4eyhB941UoJpzf7dqs5tTXwQ3kW95GvUF428G7p4RW6AN18DycRkhosXz3Qdohhhrywbfpy7rmhnhtD6cnjxV",
  "key29": "2Rs33CYCNVxZ2a4frgCDLcSU4RrjRuVNx9a2PMXs1XmbJVAFW7CFhCxuWwkcSES2XbuXdjZ6iwJDU7dkraBPz46M",
  "key30": "4ZUpRuV5Rxgboi5uCd8D1k7sKoZaUR1cNGif3ciDJUBZtbu9fjLMmt34pjgf9Fx6u2joRzGMruo7VZ59VcNVbQqV",
  "key31": "YgsbbK9DU5NLNs6ht1Fukk4kaQbNet5hTvi4Zffj8qMs8Z6ZKCfeX71xRq9zvUxz1hiMDC5aE3GwRX1gkMh1GkE",
  "key32": "3GRUEirRrMW238oDe6bF7xdvoFpjJCo9AXnmXaZKhxk6nEwFqyFZVLPxXibNu8A6k7CmMsMmcmJAECh7AQhduPmS",
  "key33": "3MaZcuT8TtyDiaTUX6jAUxQF5fKn9P1vWM6TTcnzc5g6vbGiLDzHqkQ3EFtHWt3m8a4eJojubAQVsxBiKNinRWH2",
  "key34": "5NRpWXMGFTWWEA9UvQNbjs1J13J9NKnLhDCySdR3NjEV3cP8FhYAnBtL69v8dWLBxaXz2ZP9A2q5xZqgurQHG9nj",
  "key35": "4ifzAD66NL6wjWLnHxZJVm6rjgGbxusPQSm6bmD8kMhPqBjV7CgK7rA4ZAbjPTUZnRipAGSXNJvQSdBtD7sVNK5q",
  "key36": "53XsUVTeNDbqa574roSxJbuJWQshn3LZZLojG6Pe5sMwKV8rCq2FS63QEgHBCmyDbPMRfask7bFT44gemWqjob9K",
  "key37": "3UHDNR8gnNqp6XatDFeRnzVihZcfsUq3G8NXYzucHcECaz2GX6it6zQFDjtHmF1M4c5En5jg1iWP8pBW38CgMHBK",
  "key38": "4UeNUA3Ntj6SjZw8QcE8jooHMoXdx9PKiJdEwCXChMRWZpJpdVAyT17YpaSDVY9tgavm4x2qW8hnx1XbX8smvv4U",
  "key39": "5Z1SeGnJ5ojrbpL6RWXg4E2vU4mmiJK8pvczYu4Lo2D1JoLJXXppXj2PUDpuKLpCEBsqibarorPve1eoLARdXXCQ",
  "key40": "3vQoTfuRcSmY4gzVdoj9vBbk4tg1i21zoQ4VhhL2SGdn2YVFV6exBztY2UPFMm5iL8L4S1swnBi9bBDNMJ5ea1fx"
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
